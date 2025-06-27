const mongoose = require('mongoose');

const connectdb = async()=> {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully")
    } catch (err) {
        console.error("mongodb  not conn :",err.message);
    }
};
module.exports = connectdb;