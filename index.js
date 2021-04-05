require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const MongoClient = require('mongodb')


MongoClient.connect(process.env.DB_CONNECT, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('recipe-app')
    const recipeCollection = db.collection('recipes')
    express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    //Routes
    .get('/', (req, res) => res.render('pages/index'))
    .post('/recipes', (req, res) => {
      console.log(req)
      recipeCollection.insertOne({name: req.body.name} )
        .then(result => {
          console.log(req.body.name)
          console.log('redirect')
          res.redirect('/')
        })
       .catch(error => console.error(error))
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  })