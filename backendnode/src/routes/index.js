const express = require('express')
const router  = new express.Router()

const userRouter = require('./user')  
const whatsappRouter = require('./whatsapp_api') 
const callRouter = require("./call_api")
const mailRouter = require("./gmail_api")
const patientRouter = require('./patient')

router.use( '/',   userRouter)
router.use( '/send_message',  whatsappRouter)
router.use( '/call_api' , callRouter )
router.use('/send_mail', mailRouter)
router.use('/patient', patientRouter)

module.exports = router;