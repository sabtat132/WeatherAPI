const request = require('request')

//upon signup for darksky the website said they are not taking any more submissions -
// so im going to use your api key from the video as a placeholder
const forecast = (latitutde, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/167adfdebb2ebbaebc8df78e250e94c8/' + latitude + ',' + longitude

  request({url,json: true }, (error, {body }) => {
    if(error){
      callback('Not able to connect to the weather service', undefined)
    } else if (body.error) {
      callback('Not able to find the location', undefined)
    }else {
      callback(undefined, body.daily.data[0].summary + ' it is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' % of rain.')
    }
  })
}

module.exports = forecast
