const kneecapRender = (img, key, name, price) => {
    return `
               <div class="contHel">
                <img class="helmet" src="${img}" onclick="goToCart(${key})">
                <h5>Наколенники ${name}</br>
                    Цена: <span class="h5Helmet">${price}</span>
                </h5>
            </div>
       `
}
let currensyType = localStorage.getItem('currency');
const kneecapForming = () => {
    let pageKneecapForming = document.querySelector('.pageKneecapForming');
    let pageKneecapForming1 = document.querySelector('.pageKneecapForming1');
    let pageKneecapForming2 = document.querySelector('.pageKneecapForming2');
    const zxc = (money, znak) => {
        ekipKneecap.slice(0, 4).forEach((qwe, key,) => {
            pageKneecapForming.innerHTML += kneecapRender(qwe.img, key + 36, qwe.name, Math.round(qwe.price/money) + znak)
        })
        ekipKneecap.slice(4, 8).forEach((qwe, key) => {
            pageKneecapForming1.innerHTML += kneecapRender(qwe.img, key + 40, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipKneecap.slice(8).forEach((qwe, key) => {
            pageKneecapForming2.innerHTML += kneecapRender(qwe.img, key + 44, qwe.name, Math.round(qwe.price/money) + znak);
        })
    }
    const ekipKneecap = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Kneecap'
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
kneecapForming()
