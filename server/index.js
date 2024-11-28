const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 6003
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())
const EmployeeModel = require('./models/EmployeeAndAdmin.js')

//Database connection

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const database = mongoose.connection;

database.on('connected', () => console.log('✅ MongoDB connected successfully!'));
database.on('error', (err) => console.error('❌ MongoDB connection error:', err));
database.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));

// const otpStorage = {}; // Temporary in-memory storage for OTPs

// // Generate a 6-digit OTP
// function generateOTP() {
//     return Math.floor(100000 + Math.random() * 900000);
// }

// // Send OTP
// app.post('/send-otp', async (req, res) => {
//     const { number } = req.body;

//     if (!number) {
//         return res.status(400).json({ success: false, message: 'Phone number is required' });
//     }

//     const otp = generateOTP();
//     otpStorage[number] = otp;

//     setTimeout(() => delete otpStorage[number], 300000); 

//     const payload = {
//         number: [`+91${number}`],
//         message: `OTP TO LOGIN YOUR BROMAG INDIA ACCOUNT IS ${otp}. DON'T SHARE THIS OTP WITH ANYONE FOR SECURITY REASONS.`,
//         senderId: process.env.EDUMARC_SENDER_ID,
//         templateId: process.env.EDUMARC_TEMPLATE_ID,
//     };

//     try {
//         const response = await axios.post(process.env.EDUMARC_API_URL, payload, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 apikey: process.env.EDUMARC_API_KEY,
//             },
//         });
    
//         console.log('SMS API Response:', response.data);  
    
//         if (response.data) {
//             res.status(200).json({ success: true, message: 'OTP sent successfully' });
//         }
//     } catch (error) {
//         console.error('Error sending OTP:', error.response?.data || error.message);
//         res.status(500).json({ success: false, message: 'Failed to send OTP' });
//     }
    
//     console.log('EDUMARC_API_URL:', process.env.EDUMARC_API_URL);
//     console.log('EDUMARC_API_KEY:', process.env.EDUMARC_API_KEY);
// });

const otpStorage = {};

const generateOTP = () => Math.floor(100000 + Math.random() * 900000); // Simple 6-digit OTP generator

app.post('/send-otp', async (req, res) => {
    const { number } = req.body;

    if (!number) {
        return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    const otp = generateOTP();
    otpStorage[number] = otp;

    // OTP expires in 5 minutes
    setTimeout(() => delete otpStorage[number], 300000);

    const payload = {
        number: [number],
        message: `OTP TO LOGIN YOUR BROMAG INDIA ACCOUNT IS ${otp}. DON'T SHARE THIS OTP WITH ANYONE FOR SECURITY REASONS.`,
        senderId: process.env.EDUMARC_SENDER_ID,
        templateId: process.env.EDUMARC_TEMPLATE_ID,
    };

    try {
        const response = await axios.post(process.env.EDUMARC_API_URL, payload, {
            headers: {
                'Content-Type': 'application/json',
                apikey: process.env.EDUMARC_API_KEY,
            },
        });

        console.log('SMS API Response:', response.data);

        res.status(200).json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error.response?.data || error.message || 'Unknown error');
        res.status(500).json({ success: false, message: 'Failed to send OTP' });
    }
});

// Verify OTP
app.post('/verify-otp', (req, res) => {
    const { number, otp } = req.body;

    if (otpStorage[number] && otpStorage[number] === parseInt(otp, 10)) {
        delete otpStorage[number]; 
        res.status(200).json({ success: true, message: 'OTP verified successfully!' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }
});

app.post('/register', (req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.send(employees))
    .catch(err => res.send(err))
})


app.listen(PORT, ()=>{
    console.log(`App is listening port ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send('Express is running')
})
