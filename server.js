require('dotenv').config();

const express = require('express')
const server = express()
const routes = require('./routes')
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(()=> {
        server.emit('pronto')
    })
    .catch(e => console.error(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const PORT = 3001

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

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
server.use(sessionOptions)

server.use(routes)

server.on('pronto', ()=>{
    server.listen(PORT, ()=>{
        console.log(`Server executando na porta ${PORT}`)
        console.log(`Acessar http://localhost:${PORT}`)
    })
})