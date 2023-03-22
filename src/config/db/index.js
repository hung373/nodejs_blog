const mongoose = require('mongoose');

async function connect() {
    mongoose.connect("mongodb://localhost/f8_education_dev", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection
        .once('open', () => console.log('Connected successfuly!!!'))
        .on('error', (error) => {
            console.log("Your Error", error)
        })
}
module.exports = {connect};