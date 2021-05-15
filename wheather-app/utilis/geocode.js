const request = require('request');
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmlrcmFtaGFuZGEwMDciLCJhIjoiY2ttOWV6ZzluMHY2aTJvcDltMG10NDd0NyJ9.DIwW9ITiWsKVi_9HbfSEOA&limit=2'
    request({ url, json: true }, (error, {body}) => {
      if (error) {
        callback('unable to connect',undefined)
      } else if (body.features.length === 0) {
        callback('no data',undefined)
      } else {
  
        callback(undefined ,{
          longitute : body.features[0].center[0],
          latitude : body.features[0].center[1],
          location : body.features[0].place_name
        })
        
      }
    })
  }
 

  module.exports  = geoCode 