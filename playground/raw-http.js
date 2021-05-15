const { response } = require('express');
const http = require('http');
const url ='http://api.weatherstack.com/current?access_key=49f8f95fd5f4e8485de1ca41710f2534&query=30.3466365,76.3390136&units=m'   

const request = http.request(url,(response) =>{
    // console.log('i am here')
    let data  = '' 
    response.on('data',(chunk) => {
        data = data + chunk.toString()
    })
    response.on('end',() => {
        const body =JSON.parse(data)
        console.log('m here darling',body)
    })
})
request.on('error',(error) => {
 console.log('An Error')
})
request.end()