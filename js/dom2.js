// // window.alert("Hello")
// // console.log(window)


// const carName = document.getElementById('carName')
// const btn = document.querySelector('.btn')

// console.log(btn)
// console.log(carName)


// /// dom.js


const btn = document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log("Clicked")
})