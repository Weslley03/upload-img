const express = require('express')
const router = express.Router()

const up = require('../multerconfig/config.js')
const { upload, getContent} = require('../controller/controller.js')

router.get('/getimages', getContent)
router.post('/upload', up.single('file'), upload)

module.exports = router