const jersyRender = (img, key, name, price) => {
    return `
               <div class="contHel">
                <img class="helmet" src="${img}" onclick="goToCart(${key})">
                <h5>Джерси кросс/эндуро ${name}</br>
                    Цена: <span class="h5Helmet">${price}</span>
                </h5>
            </div>
       `
}
let currensyType = localStorage.getItem('currency');
const jersyForming = () => {
    let pageJersyForming = document.querySelector('.pageJersyForming');
    let pageJersyForming1 = document.querySelector('.pageJersyForming1');
    let pageJersyForming2 = document.querySelector('.pageJersyForming2');
    const zxc = (money, znak) => {
        ekipJersy.slice(0, 4).forEach((qwe, key,) => {
            pageJersyForming.innerHTML += jersyRender(qwe.img, key + 24, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipJersy.slice(4, 8).forEach((qwe, key) => {
            pageJersyForming1.innerHTML += jersyRender(qwe.img, key + 28, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipJersy.slice(8).forEach((qwe, key) => {
            pageJersyForming2.innerHTML += jersyRender(qwe.img, key + 32, qwe.name, Math.round(qwe.price/money) + znak);
        })
    }
    const ekipJersy = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Jersy'
    })
    if (currensyType === "1") {
        zxc(1,  'p')
    }
    if (currensyType === "2") {
        zxc(2.5,  '$')
    }
    if (currensyType === "3") {
        zxc(3.2,  '\u20ac')
    }
}
jersyForming()
