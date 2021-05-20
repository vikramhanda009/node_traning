const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request');
// const { json, response } = require('express');
const geoCode = require('./utilis/geocode')
const forecast = require('./utilis/forecast')
const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
    //Setup handlebars engine and views loation
app.set('view engine', 'hbs')
app.set('views', viewpath)
hbs.registerPartials(partialsPath)
    //setup static directory to server
app.use(express.static(publicDirectoryPath))
app.get('', (req, res) => {
    res.render('index', {
        title: "weather APP",
        name: 'Vikram Handa'
    })
});
app.get('/help', (req, res) => {
    res.render('help', {
        title: "help page",
        title: "help",
        name: "vikram"
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "about me",
        name: 'Vikram Handa'
    })
})
app.get('/weather', (req, res) => {
    var address = req.query.address
    if (!address) {
        return res.send({
            error: "you must provide a query string"
        })

    } else {
        geoCode(address, (error, { latitude, longitute, location } = {}) => {
            if (error) {
                return res.send({ error })
            }

            forecast(latitude, longitute, (error, forecastdata) => {
                if (error) {
                    return res.send({ error })
                }
                res.send({
                    forecast: forecastdata,
                    location,
                    address

                })
                console.log('data', location)
                console.log('forecastdata', forecastdata)
            })
        })

    }

});
app.get('/products', (req, res) => {
    console.log('req.query', req.query)
    if (!req.query.search) {
        return res.send({
            error: "you must provide a query string"
        })
    }
    res.send({
        // forecast: "it is snowing",
        // location: 'Chandigarh',
        products: []

    })
});
app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        name: 'Vikram Handa',
        error_msg: 'page not found'
    })
});
app.listen(port, () => {
    console.log('server is up on port  ' + port)
})

// const { json, response } = require('express');
// const request = require('request');
// const geoCode  = require('./utilis/geocode')
// const forecast  = require('./utilis/forecast')
// const address = process.argv[2]
// if (!address) {
//   console.log('please provide address')
// } else {
//   geoCode(address, (error, {latitude,longitute,location} = {}) => {
//     if (error) {
//       return   console.log('error',error)
//     }

//     forecast(latitude,longitute, (error, forecastdata) => {
//       if (error) {
//         return   console.log('error',error)
//       }
//       console.log('data',location)
//       console.log('forecastdata',forecastdata)
//     })
//   })

// }