const express = require('express');
const html = require('html');
const consolidate = require('consolidate');
app = express()

app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

app.get('/', (req,res) => {
  res.render('home.ejs')
})

app.get('/defense', (req,res) => {
  res.render('defense.ejs') //Alex
})

app.get('/environment', (req,res) => {
  res.render('environment.ejs')
})

app.get('/guncontrol', (req,res) => {
  res.render('guncontrol.ejs') //Alex
})

app.get('/healthcare', (req,res) => {
  res.render('healthcare.ejs')
})

app.get('/immigration', (req,res) => {
  res.render('immigration.ejs') //Mason
})

app.get('/marriage', (req,res) => {
  res.render('marriage.ejs') //Tyler
})

app.get('/punishment', (req,res) => {
  res.render('punishment.ejs') //Tyler
})

app.get('/social', (req,res) => {
  res.render('social.ejs')
})

app.get('/marijuana', (req,res) => {
  res.render('marijuana') //Mason
})

app.get('/taxes', (req,res) => {
  res.render('taxes') //Mason
})

app.listen(1234)
