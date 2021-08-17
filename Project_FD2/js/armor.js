const armorRender = (img, key, name, price) => {
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
const armorForming = () => {
    let pageArmorForming = document.querySelector('.pageArmorForming');
    let pageArmorForming1 = document.querySelector('.pageArmorForming1');
    let pageArmorForming2 = document.querySelector('.pageArmorForming2');
    const zxc = (money, znak) => {
        ekipArmor.slice(0, 4).forEach((qwe, key,) => {
            pageArmorForming.innerHTML += armorRender(qwe.img, key + 48, qwe.name, Math.round(qwe.price/money) + znak)
        })
        ekipArmor.slice(4, 8).forEach((qwe, key) => {
            pageArmorForming1.innerHTML += armorRender(qwe.img, key + 52, qwe.name, Math.round(qwe.price/money) + znak);
        })
        ekipArmor.slice(8).forEach((qwe, key) => {
            pageArmorForming2.innerHTML += armorRender(qwe.img, key + 56, qwe.name, Math.round(qwe.price/money) + znak);
        })
    }
    const ekipArmor = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Armor'
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
armorForming()
