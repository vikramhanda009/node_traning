// const sq  =  function(x){
//     return x*x;
// }
// const sq  = (x) => {
//     return x*x;
// }

// const sq  = (x) => x*x;

// console.log(sq(3));

const event = {
    name:"party",
    gusetlist:['ram','sham','raju','bitu'],
    printGusetList(){
        const that = this 
        console.log('guest.list', this.name);
    this.gusetlist.forEach((params)=> {
        console.log(params + " is attanding " + that.name)
    });
    }
}
event.printGusetList();