const mongoose = require("mongoose");

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
function connectMongoose(callBack) {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGOOSE_URL, dbOptions)
    .then(() => {
      const mongooseConnectState = mongoose.connection.readyState;

      if (mongooseConnectState == 1) {
        console.log(`connected`);
        callBack();
      } else if (mongooseConnectState == 2) console.log(`connecting`);
      else if (mongooseConnectState == 3) console.log(`disconnecting`);
      else if (mongooseConnectState == 0) {
        console.log(`disconnectd`);
      }
    })
    .catch((err) => console.log(`from mongooose connection error is ${err}`));
}
module.exports = connectMongoose;
