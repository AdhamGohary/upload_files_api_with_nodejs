const createServer = (app) => {
  const connectToDb = require("./mongoose_connection");
  const port = process.env.PORT || 2121;
  connectToDb(() => {
    app.listen(port, () => console.log(`server is running ${port}`));
  });
};

module.exports = createServer;
