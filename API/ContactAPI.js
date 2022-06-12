const router = require("express").Router();

const nodemailer = require("nodemailer");
const {google} = require("googleapis")
const creds = require("../config.json");

const oAuth2Client = new google.auth.OAuth2(creds.CLIENT_ID, creds.CLIENT_SECRET, creds.REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: creds.REFRESH_TOKEN})

async function sendMail(mail)
{
    try {

        let transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: creds.USER,
                pass: creds.PASS,
                clientId: creds.CLIENT_ID,
                clientSecret: creds.CLIENT_SECRET,
                refreshToken: creds.REFRESH_TOKEN
            }
        })

        const result = transporter.sendMail(mail)
        //console.log("Sent.");
        return result
    } 
    catch (error) 
    {
        //console.log("Error: \n" + error);
        return error
    }
  
}

router.post("/", function(req, res) {
    const name = "thomasobrienbusiness@gmail.com"
    const email = req.body.mailData.sender
    const message = `From: ${req.body.mailData.sender} \n \n` + `Message: \n ${req.body.mailData.body}`
    var mail = {
      from: name,
      to: name,
      subject: req.body.subject,
      text: message
    }
    sendMail(mail)
    .then( response => {res.json({msg: 'success'})
    })
    .catch( error => {res.json({msg: 'failed'})
    })
});

module.exports = router;