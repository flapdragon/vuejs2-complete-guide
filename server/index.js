const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

// Firebase clone
app.get('/firebase', function (req, res) {
  const data = [
    { "username": "aquatic", "email": "test1@test.com" },
    { "username": "innocent", "email": "test2@test.com" },
    { "username": "container", "email": "test3@test.com" }
  ]
  res.json(data)
})
app.post('/firebase', function (req, res) {
  console.log('req.body', req.body)
  res.send(req.body.username + ' added!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
