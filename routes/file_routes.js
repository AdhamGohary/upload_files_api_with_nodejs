const router = require("express").Router();
const fileControllers = require("E:/programs/node.js_projects/upload_files_api_with_nodejs/controllers/fileControllers");
const FileModel = require("E:/programs/node.js_projects/upload_files_api_with_nodejs/model/fileModel");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

router.post(
  "/f/add",
  // upload.single("filePath"),
   fileControllers.add
  /*async (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.json({'status':"sucess"});
  }*/
);
router.get("/f/get", fileControllers.get);
module.exports = router;
