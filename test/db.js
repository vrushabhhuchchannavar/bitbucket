const mongoose = require('mongoose');

exports.connect = async(req, res) => {

    mongoose.connection.on('error', function (err) {
        console.log(err);
    });

    await mongoose.connect("mongodb://127.0.0.1/project", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // console.log('db is connected.');
}
