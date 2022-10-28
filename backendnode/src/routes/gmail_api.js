const { Router } = require('express');
const router = Router();

const send_email = require("../utils/send_email");

router.post('/', async (req, res) => {

    await send_email(req.body);

    res.json({ message: "mail sent" });
})

module.exports = router