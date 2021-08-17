let loupe = document.querySelector('.loupe');
let closeSearch = document.querySelector('.closeSearch')
let searchBoxNone = document.querySelector('.searchBoxNone');
let searchBoxBlock = document.querySelector('.searchBoxBlock');
let inputData = document.querySelector('.inputData');
let contHel = document.querySelectorAll('.contHel img');
let searchClass = document.querySelector('.helmet');
let dataPrice = document.querySelectorAll('.h5');
let dataPriceBoots = document.querySelectorAll('.h5Boots');
let dataPriceHelmet = document.querySelectorAll('.h5Helmet');
let dataPriceJersy = document.querySelectorAll('.h5Jersy');
let dataPriceTrousers = document.querySelectorAll('.h5Trousers');
let dataPriceKneecap = document.querySelectorAll('.h5Kneecap');
let dataPriceArmor = document.querySelectorAll('.h5Armor');

loupe.addEventListener('click', function () {
    searchBoxNone.classList.remove('searchBoxNone');
    searchBoxNone.classList.add('searchBoxBlock');
    inputData.focus();
    inputData.innerHTML += "";
    inputData111(inputData, ekipAll)
});

closeSearch.addEventListener('click', function () {
    searchBoxNone.classList.remove('searchBoxBlock');
    searchBoxNone.classList.add('searchBoxNone');
});

inputData.addEventListener('keyup', function (event) {
    let searchContent = document.querySelector('.searchContent');

    let searchValue = event.target.value.toLowerCase();

    let filter = ekipAll.filter((data) => {
        return data.name.toLowerCase().includes(searchValue);
    })
    searchContent.innerHTML = '';
    inputData111(inputData, filter)

});

const inputData111 = (inputData, items) => {
    let searchContent = document.querySelector('.searchContent');
    inputData.innerHTML += "";
    items.forEach((dataSearch, key) => {
        searchContent.innerHTML += `
             <br>
             <h4><a href="javascript: goToCart(${key})"> ${dataSearch.name}</a></h4>
             <p><a href="javascript: goToCart(${key})"> ${dataSearch.className}</a></p>
             <hr>
             <br>         
       `
    })
}





