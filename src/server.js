// DEPENDENCIES
const express = require('express')
const handlebars = require('express-handlebars')
const connectFlash = require('connect-flash')
const passport = require('passport')
const cors = require('cors')

//const bodyParser = require('body-parser');

const appdb = require('./config/appdb')
const path = require('path')
const mainRoutes = require('./routes/main')
const adminRoutes = require('./routes/admin')
const studentRoutes = require('./routes/student')
const teacherRoutes = require('./routes/teacher')
require('./config/passport')(passport)

const app = express();

app.use(cors())

app.use(passport.initialize())
app.use(passport.session())
app.use(connectFlash())

// GENERAL SERVER CONFIGS
appdb.sequelize.sync().then((success) => {
    if (success) {
        console.log('DB Connected')
    }

}).catch((err) => {
    console.log('Failed to connect to database due to error ', err)
})

app.use((req, res, next) => { //declarando variaveis globais no middleware

    const base_url = "http://localhost:8081/";

    console.log('transicao', res.locals.loggedUser)
    next()
})

//app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

//routes
app.use(mainRoutes)
app.use(adminRoutes)
app.use(studentRoutes)
app.use(teacherRoutes)

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// STARTING SERVER
const PORT = 8081;
app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
})