const request = require('request');
const forecast = (lat,long, callback) => {
  const url ='http://api.weatherstack.com/forecast?access_key=49f8f95fd5f4e8485de1ca41710f2534&query='+ lat+','+long+'&units=m'  
    request({url, json: true }, (error, {body}) => {

      if (error) {
        callback('unable to connect',undefined)
      } else if ( body.current === undefined) {
        callback('no data',undefined)
      } else {
        // console.log(' body', body)
        callback(undefined, 'today in '+ body.location.name +' is' +body.current.weather_descriptions+" and wind speed is "+ body.current.wind_speed +' lat is '+body.location.lat +' and long '+body.location.lon) 

        // callback(undefined ,{
        //   longitute : response.body.current[0].center[0],
        //   latitude : response.body.current[0].center[1],
        //   location : response.body.features[0].place_name
        // })
        
      }
    })
  }
 

  module.exports  = forecast 