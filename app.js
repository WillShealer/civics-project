const express = require('express');
const html = require('html');
app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.render('../views/home.ejs')
})

app.listen(1234)
