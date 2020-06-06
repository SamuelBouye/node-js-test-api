const express = require('express')
const app = express()

app.get('/', (req,res) => (
    res.send('Hello world')
))
app.get('/about', (req,res) => (
    res.send('About')
))

app.listen(3000,console.log('Port listen in 3000'))