const name = 'Vikram'
const userAge = 34
const user = {
        name,
        age: userAge,
        location: 'Chandigarh'
    }
    // console.log(user)
    // object destraction
const product = {
    label: 'Red notebook',
    price: 34,
    stock: 201,
    salePrice: undefined,
}

// const {label,stock,price,price:newprice,salePrice=5} = product
// console.log(label, stock, price,newprice,salePrice)

const transaction = (type, { label, stock = 0, price = 0, price: newprice, salePrice = 5 } = {}) => {
    console.log('m here', label, stock, price, price, salePrice)
}

transaction('order', product)