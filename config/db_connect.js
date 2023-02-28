const { default: mongoose } = require("mongoose");

const dbConnect = ()=>{
    try {
        const nonnect = mongoose.connect(process.env.MONGODB_URL);
        console.log('Database terkoneksi');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect;
