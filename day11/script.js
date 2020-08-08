const express = require('express')
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index')
})


app.listen(3333, function () {
  console.log('Example app listening on port 3333!')
})



