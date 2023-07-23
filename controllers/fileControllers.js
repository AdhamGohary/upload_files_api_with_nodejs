const FileModel = require("E:/programs/node.js_projects/upload_files_api_with_nodejs/model/fileModel");

const add = async (req, res) => {
  const filePath = req.body.filePath;

  const fileModel = await new FileModel({
    filePath: filePath,
  })
    .save()
    .catch((err) => console.log(`from file Error is ${err}`));
  if (fileModel) {
    res.send("sucess");
  } 
};

///////////////////////////////////////////
const get = async (req, res) => {
  const fileModel = await FileModel.find();
  if (fileModel) res.json(fileModel);
};
module.exports = {
  add,
  get,
};
