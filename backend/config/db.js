const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected`.cyan.underline);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;