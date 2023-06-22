const router  = require("express").Router() ;
let User = require("../Models/User") ; 
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const secretKey = 'hey';

router.route("/add").post( async (req, res) => {

    
    const email = req.body.email ;
    const password = req.body.password ;
    
    const  user = await User.findOne({email : email}) ;

    if(user) {
       console.log(user)
        res.json("exist") ;

    }else {

        const newUser = new User({

            email,
            password
        }) 
    
        newUser.save().then( ()=> {
            res.json("User Added");
        }).catch( (err)=> {
            console.log(err) ;
        })
    }
    

    
}) 

router.route("/").get( (req, res)=> {

    User.find().then( (users)=> {
        res.json(users) 
    }).catch( (err)=> { 
        console.log(err) ; 
    })

})


router.route("/sendOtp").post(async (req, res) => {

    const email = req.body.email  ;

    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: 'dentalclinicitp@zohomail.com',
            pass: 'Culer@123'
        }
    });

    let num = "" ;

    num += Math.floor( Math.random() * 10 ) ;
    num += Math.floor( Math.random() * 10 ) ;
    num += Math.floor( Math.random() * 10 ) ;
    num += Math.floor( Math.random() * 10 ) ;

    console.log(num)


    const mailOptions = {
        from: 'dentalclinicitp@zohomail.com',
        to: `${email}`,
        subject: 'User Registration Verification',
        text: `Hello User , \n This is your OTP for your email verification /nOTP - ${num} /n/n Thank you` 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).send({ rst : "sent" , otp: num });
    
    

})

router.route("/check").get(async (req, res)=> {

    

    const token = req.headers.authorization ;
    console.log(token) ;
    let email = null ;
    jwt.verify(token, secretKey, (error, decoded) => {
            if(error){
                console.log(error)
            }else {

               
                console.log("token verified");
                // const user =  User.findOne({ email :decoded.email });
                console.log(decoded.email)

                email = decoded.email ;
                

                
            }
        })
        const user = await User.findOne({ email :email });
        res.status(200).send({ rst : "checked" , user: user });
    
    // User.find().then( (users)=> {
    //     res.json(users) 
    // }).catch( (err)=> { 
    //     console.log(err) ; 
    // })

})

router.route("/update/:id").put( async(req,res)=>{
    let uid = req.params.id ;
    const { email , password } = req.body ;

    const updateUser = {
        email,
        password
    }

    const update = await User.findByIdAndUpdate( uid , updateUser ).then( ()=> {
        res.status(200).send({status: "User updated" })
    }).catch((err) => {
        console.log(err) ;
        res.status(500).send({ status: "Error with updating information" , error : err.message }) ;
    })

})


router.route("/delete/:id").delete(async (req,res)=>{
    let uid = req.params.id ;
    
    await User.findByIdAndDelete(uid).then( ()=>{
        res.status(200).send({status : "User deleted"}) ;
    }).catch( (err)=>{
        console.log(err) ;
        res.status(202).send({status: "Error with deleting the doctor", error: err.message}) ;

    })  
})

router.route("/login").post( async (req,res)=> {
    
    const email = req.body.email ;
    const password = req.body.password ;
    
    const user = await User.findOne({ email :email });
    
    try {
        if (user) {
            //check if password matches
            const result = password === user.password;
    
            if (result) {
                const token = jwt.sign({ email: user.email }, secretKey, {
                    expiresIn: '1h',
                  }); 
              res.status(200).send({ rst : "success" , data: user , tok: token});
            } else {
              res.status(200).send({ rst : "incorrect password" });
            }
          } else {
            res.status(200).send({ rst : "invalid user" });
          }
    }catch (error) {
        res.status(500).send({ error });
    }

    // const us = await User.find(
    //     { email : email , password : password}
    // ).then( (user) => {

    //     res.status(200).json({data: user});

    // }).catch( (err)=>{
    //     console.log(err.message);
    //     res.status(500).send({status: "Error in getting channel details" , error:err.message}) ;
    // })
})

module.exports = router ;
