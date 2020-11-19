const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('/utils/forecast')

const app = express()

//Define the parts for Express Configurarion
const publicdirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up the handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//Setup static publicdirectory

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Sabrina Tatalias',
    errorMessage: 'Sorry, but that city does not work for this weather app',
    supportHours: 'Monday-Friday 9AM - 5PM',
    supportType: 'Offerings include technical help via Zoom',
    supportContact:'Reach us via email:',
    supportEmail: 'support@weatherapp.com'
  })
})

//weather route4
app.get('/weather', (req, res) => {
  if(!req.query.search)
     return  res.send({
       error: 'You must provide an address'
     })
   )

   geocode(req.query.address, (error, { latitude,longitude, location }) =>{
     if(error) {
       return res.send({error})
     }

     forecast(latitude, longitude, (error, forecastData) => {
       if(error){
         return res.send({error})
       }

       res.send({
         forecast: forecastData,
         location,
         address: req.query.address
       })
     })
   }
 })

//product route
app.get('/products', (req, res) => {
  if(!req.query.search)
     return  res.send({
       error: 'You must provide a search query'
    })

    console.log(req.query.search)
    req.send({
      products: []
    })
   })



app.listen(3000, () => {
  console.log('Server is up on port 3000 at Point Park')
})
