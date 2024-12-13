const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`This is the http status ${port + 1}`)
})

app.get('/home', (req,res) => {
    res.send("Welcome to home page")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    
})