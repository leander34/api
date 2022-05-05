const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const path = require('path')
const PagesController = require('./Controllers/PagesController')
const ReqController = require('./Controllers/ReqController')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.urlencoded({ extended: true} ))
app.use(express.static('public'))

app.get('/index', PagesController.Index)

app.get('/dados/:search', ReqController.Data)


app.listen(3001, () => console.log('rodando'))