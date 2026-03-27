// // const listItem = document.getElementsByClassName('list-item');
// // console.log(listItem);

// const  ClickBtn  = document.getElementById('click-btn');
// console.log(ClickBtn);


// const list_li = document.querySelector('.list-item')

// list_li.array.forEach(element => {
//     console.log(element)
// });


/// textContent
/// innerText
/// innnerHTML

const names = ["davron", "otabek", 'abbos', "Sherdil", "Miraziz", "Dilshod"]

const ol = document.querySelector('ol');

names.forEach((name) => {
    ol.innerHTML += `<li>${name}</li>`
});




