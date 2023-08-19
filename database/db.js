const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/heladería');
        console.log("Conected success to heladería");
    } catch (error) {
        throw new Error('Failed to connect to mongo')
    }
}

module.exports = connection;