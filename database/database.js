const mongoose = require("mongoose");

const database = async () => {
  mongoose
    .connect(
      "mongodb+srv://Hina:Hina2233@cluster0.jxfw8.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to Mongo...."))
    .catch((error) => console.log(error.message));
};
module.exports = database;
