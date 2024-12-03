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
        res.status(200).json({ success: true, message: 'OTP verified successfully!' })
    } else {
        res.status(400).json({ success: false, message: 'Invalid or expired OTP' })
    }
})

app.post('/register', async (req,res) => {
    // EmployeeModel.create(req.body)
    // .then(employees => res.send(employees))
    // .catch(err => res.send(err))
    try{
        const {name, email, number} = req.body

        if(!name || !email || !number){
          return res.status(400).json({message:'All fields are required'})
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' })
        }

        // Phone number validation
        const phoneRegex = /^\d{10}$/ // Ensures exactly 10 digits
        if (!phoneRegex.test(number.toString())) {
            return res.status(400).json({ message: 'Invalid phone number format. It must be 10 digits.' });
        }
        
            const existingUser = await EmployeeModel.findOne({ email });
            if(existingUser){
         
                return res.status(400).json({message: 'Email already exists'})
            }
        

        const newUser = await EmployeeModel.create({name, email, number})
        res.status(201).json({
            message: 'User registered successfully', 
            user: newUser 
        })
    }
    catch (err) {
        // Handle server error
        res.status(500).json({ 
            message: 'Server error', 
            error: err.message 
        });
    }
   

})


app.listen(PORT, ()=>{
    console.log(`App is listening port ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send('Express is running')
})
