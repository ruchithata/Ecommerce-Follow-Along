const {Router}= require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../../multer");

const userrouter = Router();


userrouter.post("/create-user",upload.single("file"), async(req,res)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email});
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }

      const filename = req.file.filename ; 
      const fileUrl = path.join(filename);

      bcrypt.hash(password, 10, async function(err, hash) {
      
      await userModel.create({
        name:name,
        email:email,
        password: hash,
        avatar:fileUrl
      })
    })

console.log(user);
});

module.exports = userrouter;