const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = () => {
  MongoClient.connect(
    `${process.env.DB_LINK}`
  )
    .then((client) => {
      console.log("connected successfully!", client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
