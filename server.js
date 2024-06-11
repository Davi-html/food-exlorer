require('dotenv').config();

const express = require('express')
const server = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const { middlewareGlobal} = require('./src/middlewares/middleware')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(()=> {
        server.emit('pronto')
    })
    .catch(e => console.error(e))
    
    const session = require('express-session')
    const MongoStore = require('connect-mongo')(session)
    
    const PORT = 3001
    const path = require('path')
    
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(express.static('public'));

server.set('views', path.resolve(__dirname, 'src', 'views'))
server.set('view engine', 'ejs')

const sessionOptions = session({
    secret: process.env.SECRETMONGO,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
server.use(flash())
server.use(sessionOptions)

server.use(middlewareGlobal)
server.use(routes)

server.on('pronto', ()=>{
    server.listen(PORT, ()=>{
        console.log(`Server executando na porta ${PORT}`)
        console.log(`Acessar http://localhost:${PORT}/`)
    })
})