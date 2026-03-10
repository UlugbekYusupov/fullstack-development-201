let car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2024,
    start: function (){
        console.log('car is starting...')
    }
}

car.greet = function(){
    return `Hello my name is ${this.brand}`
}
car.start()
console.log(car.greet())
