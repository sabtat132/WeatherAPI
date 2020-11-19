const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.jsom?access_token=pk.eyJ1Ijoic3RhdGFsIiwiYSI6ImNraG83NHUzeDA2OWkyeGxhYXRoZXp3bGQifQ.aTMYSQWyZDyUJ7C0xArXRg&limit=1'

  request({url,json: true }, (error, {body }) => {
    if(error){
      callback('Not able to connect to the location service', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find the location, try again', undefined)
    }else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location : body.features[0].place_name
      })
   }
})
}

module.exports = geocode
