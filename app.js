const geocode = require/'.utils/geocode')
const geocode = require/'.utils/forecast')

cost address = process.argv[2]

if(!address){
  console.log('Please add your address')

}else{
  geocode(address, (error, {latitude, longitude, location }) => {
    if(error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)

    })
  })
}
