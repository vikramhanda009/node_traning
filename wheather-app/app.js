const { json, response } = require('express');
const request = require('request');
const geoCode  = require('./utilis/geocode')
const forecast  = require('./utilis/forecast')
const address = process.argv[2]
if (!address) {
  console.log('please provide address')
} else {
  geoCode(address, (error, {latitude,longitute,location} = {}) => {
    if (error) {
      return   console.log('error',error)
    }
  
    forecast(latitude,longitute, (error, forecastdata) => {
      if (error) {
        return   console.log('error',error)
      }
      console.log('data',location)
      console.log('forecastdata',forecastdata)
    })
  })
  
}

 