const { Router } = require('express');
const router = Router();

const twilio = require('twilio');

router.post('/', async (req, res) => {

    const accountSid = process.env.ACCOUNTSID; 
    const authToken = process.env.AUTHTOKEN; 

    const client = new twilio(accountSid, authToken);

    client.calls
      .create({
         twiml: `<Response><Say>${req.body.message_body}</Say></Response>`,
         to: req.body.phone_number,
         from: process.env.CALLER_ID
       })
    .then(call => console.log(call.sid))
    .catch((error)=>console.log(error));

    res.json({ message: "working" });
})

module.exports = router