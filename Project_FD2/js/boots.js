const bootsRender = (img, key, name, price) => {
    return `
               <div class="contHel">
                <img class="helmet" src="${img}" onclick="goToCart(${key})">
                <h5>Кроссовые мотоботы ${name}</br>
                    Цена: <span class="h5Helmet">${price}</span>
                </h5>
            </div>
       `
}
let currensyType = localStorage.getItem('currency');
const bootsForming = () => {
    let pageBootsForming = document.querySelector('.pageBootsForming');
    let pageBootsForming1 = document.querySelector('.pageBootsForming1');
    let pageBootsForming2 = document.querySelector('.pageBootsForming2');
    const zxc = (money, znak) => {
        ekipBoots.slice(0, 4).forEach((qwe, key,) => {
            pageBootsForming.innerHTML += bootsRender(qwe.img, key, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipBoots.slice(4, 8).forEach((qwe, key) => {
            pageBootsForming1.innerHTML += bootsRender(qwe.img, key + 4, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipBoots.slice(8).forEach((qwe, key) => {
            pageBootsForming2.innerHTML += bootsRender(qwe.img, key + 8, qwe.name, Math.round(qwe.price/money) + znak);
        })
    }
    const ekipBoots = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Boots'
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
bootsForming()