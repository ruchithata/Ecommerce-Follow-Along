const {Router}= require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../../multer");
const {bcrypt} = require("bcrypt");
const userrouter = Router();
const jwt = require("jsonwebtoken");
const auth = require("../Middleware/auth");
require("dotenv").config({ path: "./src/config/.env" });

const secret = process.env.private_key;

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
        // avatar:fileUrl
      })
    })

console.log(user);
});

userrouter.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    const check = await userModel.findOne({email:email});
    console.log(check);

    if (!check) {
        return res.status(400).json({message: "User not found"});
    }

    bcrypt.compare(password, check.password, function(err, result){
      if (err) {
        return res.status(400).json({message: "Invalid bcrypt compare"});
      }
      if (result) {

        jwt.sign({email:email},xyz,(err,token)=>{
          if (err) {
            return res.status(400).json({message: "Invalid jwt"});
          }
          res.setHeader("Autherization", `Bearer ${token}`);
          console.log(token);
          res.status(200).json({token:token});
        })


      }
      else {
        return res.status(400).json({message: "Invalid password"});
      } 
    })

});




// userrouter.post('/add-address', auth, async (req, res) => {
//     const {
//       country,
//       city,
//       address1,
//       address2,
//       zipCode,
//       addressType,email
//     } = req.body;
//     try {
//         if (!address || !city || !state || !zip || !country) {
//             return res.status(400).json({ message: "Fill all fields" });
//         }
//         const addressDetails = new userModel({ address, city, state, zip, country });
//         await addressDetails.save();
//         res.status(200).json({ message: "Address added successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });



userrouter.post('/add-address',auth, async(req,res)=>{

  try{
    const email = req.body;
    const {country,
      city,
      address1,
      address2,
      zipCode,
      addressType}=req.body

      const user=await userModel.find({email:email})

    const newaddress={
      country,
      city,
      address1,
      address2,
      zipCode,
      addressType,
  }

  user.addresses.push(newaddress)
  await user.save()
}
catch(err){
  console.log("error in address",err)
}
});


userrouter.get('/get-address', auth,async(req,res)=>{ 
  const email = req.user
  try{
    const user = await userModel.findOne({email:email})
    if(!user){
      return res.status(400).json({message: "user not found"});
    }
    res.status(200).json({message: "successfully recieved.",user:user.addresses});
  }
  catch(err){
    console.log("error in getting address.",err);
  }
})


module.exports = userrouter;
