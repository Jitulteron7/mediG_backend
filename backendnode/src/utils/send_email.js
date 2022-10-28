const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {OAuth2} = google.auth;

// send mail
const sendEmail = (body) => {

    const {
        MAILING_SERVICE_CLIENT_ID,
        MAILING_SERVICE_CLIENT_SECRET,
        MAILING_SERVICE_REFRESH_TOKEN,
        SENDER_EMAIL_ADDRESS,
        OAUTH_PLAYGROUND_URL
    } = process.env
    
    const OAUTH_PLAYGROUND = OAUTH_PLAYGROUND_URL
    
    
    const oauth2Client = new OAuth2(
        MAILING_SERVICE_CLIENT_ID,
        MAILING_SERVICE_CLIENT_SECRET,
        MAILING_SERVICE_REFRESH_TOKEN,
        OAUTH_PLAYGROUND
    )
    
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()

    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken,
            expires: 1484314697598
        }
    })

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: body.to,
        subject: "mediG",
        html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to mediG</h2>
            <p>Congratulations! You're almost set to be a part of it.
                ${body.message_body}
            </p>
            
            <a href="" style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
            </a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div></div>
            </div>
        `
    }

    smtpTransport.sendMail(mailOptions, (err, res) => {
        if(err) 
            return console.error(err)  
        return console.log('Mail Sent Successful')
    })
}

module.exports = sendEmail