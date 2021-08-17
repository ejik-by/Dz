const helmetRender = (img, key, name, price) => {
    return `
               <div class="contHel">
                <img class="helmet" src="${img}"  onclick="goToCart(${key})">
                <h5>Шлем для мотокросса/эндуро ${name}</br>
                    Цена: <span class="h5Helmet">${price}</span>
                </h5>
            </div>
       `
}
let currensyType = localStorage.getItem('currency');
const helmetForming = () => {
    let pageHelmetForming = document.querySelector('.pageHelmetForming');
    let pageHelmetForming1 = document.querySelector('.pageHelmetForming1');
    let pageHelmetForming2 = document.querySelector('.pageHelmetForming2');
    const zxc = (money, znak) => {
        ekipHelmet.slice(0, 4).forEach((qwe, key,) => {
            pageHelmetForming.innerHTML += helmetRender(qwe.img, key + 12, qwe.name, Math.round(qwe.price/money) + znak)
        })
        ekipHelmet.slice(4, 8).forEach((qwe, key) => {
            pageHelmetForming1.innerHTML += helmetRender(qwe.img, key + 16, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipHelmet.slice(8).forEach((qwe, key) => {
            pageHelmetForming2.innerHTML += helmetRender(qwe.img, key + 20, qwe.name, Math.round(qwe.price/money) + znak);
        })
    }
    const ekipHelmet = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Helmet';
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
helmetForming()