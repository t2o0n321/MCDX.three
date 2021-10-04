const express = require('express')
var app = express()

var openPort = 4000
var currentPath = __dirname

app.get('/', (req, res)=>{
    res.send("<div style=\"font-size: 30px;\">Welcome to my page</div>")
})

app.get('/three', (req, res)=>{
    app.use(express.static(currentPath + '/src'))
    res.sendFile(currentPath + '/src/SuperSecure.html')
})

app.listen(openPort, ()=>{
    console.log('Server opened at port ' + openPort + '...')
})

