const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected on ${db.connection.port}, ${db.connection.host}`)
    } catch (error) {
        console.log(error, error.message);
        process.exit(1);
    }
}

module.exports = connectDB;