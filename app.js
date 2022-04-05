const express = require('express');
const html = require('html');
const consolidate = require('consolidate');
app = express()

app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

app.get('/', (req,res) => {
  res.render('home.ejs')
})

app.listen(1234)
