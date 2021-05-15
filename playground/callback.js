setTimeout(() =>{
    console.log('m herer')
},2000)
const names= ['vikram','handa','happy']
const shortName = names.filter((name)=>{
    return name.length <= 5
})
console.log(shortName)
const geoCode = (adress,callback) => {
 setTimeout(() => {
     const data ={
        latitude:0,
        longitute:0
     }
     return data
 }, 2000);
}
const data = geoCode('india',(error, data) =>{
    
})
console.log(data)