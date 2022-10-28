const { Router } = require('express');
const router = Router();

const twilio = require('twilio');

router.post('/', async (req, res) => {

    const accountSid = process.env.ACCOUNTSID; 
    const authToken = process.env.AUTHTOKEN; 

    const client = new twilio(accountSid, authToken);
    
    client.messages 
    .create({ 
       body: req.body.message_body, 
       from: process.env.SENDER,       
       to: `whatsapp:${req.body.phone_number}`
     }) 
    .then(message => console.log(message.sid)) 
    .done();

    res.json({ message: "working" });
})

module.exports = router