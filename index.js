const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const conn = require('./db/conn').run
const employeeRoutes = require('./routes/employeeRoutes')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use(express.static('public'))

app.use("/public", express.static('./public/'));

app.use('/', employeeRoutes)
app.listen(3000)