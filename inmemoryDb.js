const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

// Start an in-memory MongoDB server
// const mongoServer = new MongoMemoryServer();

// Connect to the in-memory database

let mongoServer;
const connect = async() => {

    try {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        console.log(mongoUri)

        const mongooseopt = {
            dbName: "project",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        const uri = 
        await mongoose.connect(mongoUri, mongooseopt);

        // console.log('db is connected.')
    } catch(error) {
        console.error(error);
    }
};


// Close the connection and stop the in-memory server after tests are done

const disconnect = async() => {
    await mongoose.disconnect();
    console.log('db is disconnected.');
};

module.exports = { connect, disconnect };

