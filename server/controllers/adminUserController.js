const Admin = require('../modals/adminUserModal.js')
const transporter = require('../config/email.js')
const jwt = require('jsonwebtoken')


loginAdmin = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await Admin.findOne({ email })

        if (!user) {
            return res.status(404).json('No record existed')
        }

        if (user.password !== password) {
            return res.status(401).json('Password is incorrect')
        }

        // Generate a token valid for 1 hour
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Login link with token
        const loginLink = `http://localhost:5174/dual-login?token=${token}`

        // Send the email with the login link
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Login Link',
            text: `Click the following link to log in: ${loginLink}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('❌ Error sending email:', error);
                return res.status(500).json('Error sending email');
            } else {
                console.log('✅ Email sent:', info.response);
                res.json('Success');
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
}

verifyAdminToken = async (req, res) => {
    const { token } = req.query;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ success: true, email: decoded.email });
    } catch (err) {
        console.error('Invalid token:', err);
        res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
}

module.exports = {loginAdmin, verifyAdminToken}


