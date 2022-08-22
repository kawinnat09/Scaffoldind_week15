const express = require('express')
const http = require('http')
const app = express()
const morgan = require('morgan')

const PORT = process.env.PORT || 4000
const sever = http.createServer(app)

app.use(morgan('dev'))
//static file: making public directory as static directory
app.use(express.static('public'))

//set view pug template engine
app.set('view','./view')
app.set('view engine','pug')

// register route:http://localhost:4000
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/welcome',(req,res)=>{
    res.status(200).render('welcome',{title:'Welcome Page'})
})

app.get('/about',(req,res)=>{
    res.status(200).render('about',{title:'About Page'})
})

sever.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})