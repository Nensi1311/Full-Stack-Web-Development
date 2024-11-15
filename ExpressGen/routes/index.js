var express = require('express');
var router = express.Router();
//const nodemailer = require("nodemailer");


// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter Details' });
});



// 0. Menu
router.get('/menu0', function(req, res, next) {
  res.render('menu0');
});
router.get('/home0', function(req, res, next) {
  res.render('home0');
});
router.get('/about0', function(req, res, next) {
  res.render('about0');
});
router.get('/contact0', function(req, res, next) {
  res.render('contact0');
});
router.post('/formprocess', function(req, res, next){
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = parseInt(a) + parseInt(b)
  mgs = ""
  if(c==30){
    msg = "Welcome"
  }
  else{
    msg = "Sorry"
  }
  res.render('ans3', {mya:a, myb:b, myc:c, mymsg:msg});
  });



// 1. File Upload
router.get('/fileupload1', function(req, res, next) {
  res.render('fileupload1');
});
router.post('/fileupload1', function(req, res, next) {
  //console.log(req.files.file123);
  var myfile = req.files.file123;
  var text = req.body.textbox;
  var filename = req.files.file123.name;
  var filetype = req.files.file123.mimetype;
  var filesize = req.files.file123.size;
  if(filetype == 'image/jpeg' || filetype == 'image/jpg'){
    if(filesize < 2000000){
      myfile.mv("public/"+filename,function(err){
        res.send(filename+" File upload Succesfully"+ "\n"+ text+" File upload Succesfully");
        // res.send(text + "File upload Succesfully");
    })
    }
    else{
      res.send("File size is too large");
    }
  }else{
  res.send("File type not supported");
}
});



//2. Signup page and login.
router.get('/login2', function(req, res, next) {
  res.render('login2');
});
router.post('/loginprocess', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  res.redirect("/dashboard2");
});
router.get('/dashboard2', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.render('dashboard2', {name: a});
    }else{ 
      res.redirect('/login2');
    }
  });
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login2');
});
router.get('/signup2', function(req, res, next) {
  res.render('signup2');
});
router.post('/signupprocess2', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  var b = req.body.txt1;
  req.session.name = b;
  var c = req.body.txt1;
  req.session.name = c;
  var d = req.body.txt1;
  req.session.name = d;
  res.redirect("/signuplogin2");
});
router.get('/signuplogin2', function(req, res, next) {
  res.render('signuplogin2');
});
router.post('/process2', function(req, res, next) {
  var a = req.body.txt1;
  req.session.name = a;
  var b = req.body.txt1;
  req.session.name = b;
  var c = req.body.txt1;
  req.session.name = c;
  var d = req.body.txt1;
  req.session.name = d;
  res.redirect("/dashboard2");
});
router.get('/dashboard2', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.render('dashboard2', {name: a});
    }else{ 
      res.redirect('/login2');
    }
  });



// 3. Form from answer
router.get("/form3", function(req, res, next) {
  res.render("form3");
});
router.post("/formans3", function(req, res, next) {
  console.log(req.body);
  var name = req.body.txt1;
  var mob = req.body.txt2;
  var msg = req.body.txt3;
  res.render("formans", { mya: name, myb: mob, myc: msg });
});



// 4. Mail Sent
router.get("/mail4", function(req, res, next) {
  res.send("Thank you");
});
async function main() {
    // send mail with defined transport object
    const info = await nodemailer
        .createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "nensipansuriya1311@gmail.com",
                pass: "mncz qyxg qage whug",
            },
        })
        .sendMail({
            from: '"Nensi" <nensipansuriya1311@gmail.com>', // sender address
            to: "nensipansuriya1311.com", // list of receivers
            subject: "Express Mail Sent", // Subject line
            text: "Hello Nensi 22AIML027", // plain text body
            html: "<b>Hello Nensi 22AIML027</b>", // html body
        });

    console.log("Mail sent : %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "nensipansuriya1311@gmail.com",
        pass: "mncz qyxg qage whug",
    },
});
async function main() {
    // send mail with defined transport object
    const info = await nodemailer
        .createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "nensipansuriya1311@gmail.com",
                pass: "mncz qyxg qage whug",
            },
        })
        .sendMail({
            from: '"Nensi" <nensipansuriya1311@gmail.com>', // sender address
            to: "nensipansuriya1311@gmail.com", // list of receivers
            subject: "Express Mail Sent", // Subject line
            text: "Hello Nensi 22AIML027", // plain text body
            html: "<b>Hello Nensi 22AIML027</b>", // html body
        });
    console.log("Mail sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
main().catch(console.error);




// 5. Mail Contact Form
router.get("/mail5", (req, res) => {
  res.render("mail5");
});
router.post("/mail5", async (req, res) => {
  const { name, mail, mobile, message } = req.body;
  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465
      auth: {
        user: "nensipansuriya1311@gmail.com",
        pass: "mncz qyxg qage whug",
      },
    });
    // Send email
    const info = await transporter.sendMail({
      from: `"Contact Form" <nensipansuriya1311@gmail.com>`, // Sender address
      to: "nensipansuriya1311@gmail.com", // Receiver email
      subject: "New Contact Form Submission", // Subject line
      text: `You received a new message:\n\nName: ${name}\nEmail: ${mail}\nMobile: ${mobile}\nMessage: ${message}`, // Plain text body
      html: `<p><b>You received a new message:</b></p>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${mail}</p>
             <p><b>Mobile:</b> ${mobile}</p>
             <p><b>Message:</b> ${message}</p>`, // HTML body
    });
    console.log("Mail sent: %s", info.messageId);
    res.send("Thank you for contacting us!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});



// 6. Local Storage Name and Mobile
router.get('/index6', function(req, res, next) {
  res.render('index6', { title: 'Enter Details' });
});
router.get('/display6', function (req, res, next) {
  res.render('display6', { title: 'User Details' });
});



// 7. Session
router.get('/save', function(req, res, next) {
  req.session.name = "Nensi";
  res.send("Session Created");

});
router.get('/get', function(req, res, next) {
  if(req.session.name){
    var a = req.session.name;
    res.send("Name is : " + a);
  }else{
    res.send("Session not created");
  }
});
router.get('/delete', function(req, res, next) {
  req.session.destroy();
  res.send('Deleted');
});



module.exports = router;