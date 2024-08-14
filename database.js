const MongooseClient = require("mongoose");
const url = "mongodb://localhost:27017/phoneApp";


MongooseClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB")
    }).catch((err) => {
        console.error("MongoDB connection error", err)
    });


module.exports = MongooseClient;