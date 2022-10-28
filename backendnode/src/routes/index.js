const express = require('express')
const router  = new express.Router()

const userRouter = require('./user')  
const whatsappRouter = require('./whatsapp_api') 
const callRouter = require("./call_api")

router.use( '/',   userRouter)
router.use( '/send_message',  whatsappRouter)
router.use( '/call_api' , callRouter )

module.exports = router;