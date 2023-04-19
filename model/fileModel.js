const mongoose = require("mongoose");
const { objectId } = mongoose.Types.ObjectId;
const schema = mongoose.Schema;
const fileSchem = new schema({
  filePath: {
    type: String,
    required:true
  },
});

module.exports = mongoose.model("fileSchema", fileSchem);
