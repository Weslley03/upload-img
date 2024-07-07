const express = require('express')
const cors = require('cors')
const path = require('path');
const routerUpload = require('./routes/routes.js')
require('./db.js')

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('', routerUpload)

const PORT = 3009
app.listen(PORT, () => {
    console.log('server running')
})
