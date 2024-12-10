const mongoose = require('mongoose')

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DB_URL)
        console.log('✅ MongoDB connected successfully!')
    } catch (err) {
        console.error('❌ MongoDB connection error:', err)
        process.exit(1)
    }
};

const database = mongoose.connection

database.on('connected', () => console.log('✅ MongoDB connected successfully!'))
database.on('error', (err) => console.error('❌ MongoDB connection error:', err))
database.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'))

module.exports = connectDB
