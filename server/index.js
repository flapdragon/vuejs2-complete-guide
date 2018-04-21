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

// POST method route
app.post('/firebase', function (req, res) {
  console.log('/firebase')
  console.log('req.body', req.body)
  res.send(req.body.username + ' added!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
