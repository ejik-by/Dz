// слайдер//
let pointerRight = document.querySelector('.pointerRight');
let pointerLeft = document.querySelector('.pointerLeft');
let content3 = document.querySelector('.content3motoboots');
// let content3Width = document.querySelector('.content3motoboots').offsetWidth;
let transishion = 0;
let pointerRight1 = document.querySelector('.pointerRight1');
let pointerLeft1 = document.querySelector('.pointerLeft1');
let content3_1 = document.querySelector('.content3helmet');
let content3Width1 = document.querySelector('.content3helmet').offsetWidth;
let transishion1 = 0;
let bt = document.querySelector('.content1_1 .bt');
let btn = document.querySelector('button.btn');
let bt1 = document.querySelector('.content1_1 .bt');
let bt2 = document.querySelector('.content1_2 .bt');
let openForm = document.querySelector('.openForm');
let form = document.querySelector('.form');
let currensyType = localStorage.getItem('currency');
let formInput = document.querySelector('.form');

pointerRight.addEventListener('click', function () {
    let style = content3.currentStyle || window.getComputedStyle(content3);
    let oldValue = parseInt(style.marginLeft, 10);
    if (Math.abs(transishion) < content3Width1) {
        content3.style.webkitTransitionDuration = "1s";
        content3.style.webkitTransitionTimingFunction = "ease-out";
        transishion = transishion - 300;
        content3.style.webkitTransform = "translate3d(" + transishion + "px, 0, 0)";
    }
})

pointerLeft.addEventListener('click', function () {
    let style = content3.currentStyle || window.getComputedStyle(content3);
    let oldValue = parseInt(style.marginLeft, 10);
    if (transishion < 0) {
        content3.style.webkitTransitionDuration = "1s";
        content3.style.webkitTransitionTimingFunction = "ease-out";
        transishion = transishion + 300;
        content3.style.webkitTransform = "translate3d(" + transishion + "px, 0, 0)";
    }
})

pointerRight1.addEventListener('click', function () {
    let style = content3_1.currentStyle || window.getComputedStyle(content3_1);
    let oldValue = parseInt(style.marginLeft, 10);
    if (Math.abs(transishion1) < content3Width1) {
        content3_1.style.webkitTransitionDuration = "1s";
        content3_1.style.webkitTransitionTimingFunction = "ease-out";
        transishion1 = transishion1 - 300;
        content3_1.style.webkitTransform = "translate3d(" + transishion1 + "px, 0, 0)";
    }
})
pointerLeft1.addEventListener('click', function () {
    let style = content3_1.currentStyle || window.getComputedStyle(content3_1);
    let oldValue = parseInt(style.marginLeft, 10);
    if (transishion1 < 0) {
        content3_1.style.webkitTransitionDuration = "1s";
        content3_1.style.webkitTransitionTimingFunction = "ease-out";
        transishion1 = transishion1 + 300;
        content3_1.style.webkitTransform = "translate3d(" + transishion1 + "px, 0, 0)";
    }
})

$('.bxsliderBoots').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: true,
    pager: false,
    slideWidth: 600,
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
        let textContent = jQuery('.cont .text h4');
        jQuery(textContent).text(dataBoots[newIndex].name);
        globalGoodsId = newIndex;
        myStorage = window.localStorage;
        localStorage.setItem('globalGoodsId', globalGoodsId);
    }
});
$('.bxsliderTrousers').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: true,
    pager: false,
    slideWidth: 600,
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
        let textContent1 = jQuery('.content1_1 .text h4');
        jQuery(textContent1).text(dataTrousers[newIndex].name);


    }
});
$('.bxsliderJersy').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: true,
    pager: false,
    slideWidth: 600,
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
        let textContent2 = jQuery('.content1_2 .text h4');
        jQuery(textContent2).text(dataJersy[newIndex].name);
    }
});

bt.addEventListener('click', function () {
    location.href = 'box.html'
})


btn.addEventListener('click', function () {
    let result = confirm('Желаете перейти в корзину?')
    if (result === true) {
        location.href = 'box.html'
    }
});


bt1.addEventListener('click', function () {
    location.href = 'box.html'
});

bt2.addEventListener('click', function () {
    location.href = 'box.html'
});

openForm.addEventListener('click', function () {
    form.style.visibility = 'visible'
});
form.addEventListener('mouseleave', function () {
    form.style.visibility = 'hidden'
})

const indexBootsRender = (img,key, name, price) => {
    return `
               <div class="content3_1">
                <img class="motoboots" src="${img}" onclick="goToCart(${key})"">
                <h5>Кроссовые мотоботы ${name}</br>
                    Цена: <span class="h5Boots">${price}</span>
                </h5>
            </div>
       `
}
const content3motobootsForming = () => {
    let pageBootsForming = document.querySelector('.content3motoboots');
    const ekipBoots = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Boots'
    })
    ekipBoots.forEach((qwe,key) => {


        if (currensyType === "2") {
            pageBootsForming.innerHTML += indexBootsRender(qwe.img,key, qwe.name, Math.round(qwe.price / 2.5) + '$');
        }else if (currensyType === "3") {
            pageBootsForming.innerHTML += indexBootsRender(qwe.img,key, qwe.name, Math.round(qwe.price / 3.2) + '\u20ac');
        }else{
            pageBootsForming.innerHTML += indexBootsRender(qwe.img, key, qwe.name, Math.round(qwe.price) + 'p');

        }
    })
}
content3motobootsForming()

formInput.addEventListener('click', function (event) {
    localStorage.setItem('currency', event.target.value);
    document.location.reload();
})

const indexHelmetRender = (img, key, name, price) => {
    return `
    <div class="content3_2">
                <img class="helmet" src="${img}" onclick="goToCart(${key})">
                <h5>Шлем для эндуро/кросса ${name}</br>
                    Цена: <span class="h5Helmet">${price}</span>
                </h5>
            </div>
    `
}

const content3helmetForming = () => {
    let pageHelmetForming = document.querySelector('.content3helmet');
    const ekipHelmet = ekipAll.filter((qwe, index, arr) => {
        return qwe.className === 'Helmet'
    })
    ekipHelmet.forEach((qwe,key) => {
        console.log(currensyType)
        if (currensyType === "2") {
            pageHelmetForming.innerHTML += indexHelmetRender(qwe.img,key+12, qwe.name, Math.round(qwe.price / 2.5) + '$');
        }else if (currensyType === "3") {
            pageHelmetForming.innerHTML += indexHelmetRender(qwe.img,key+12, qwe.name, Math.round(qwe.price / 3.2) + '\u20ac');
        }else{
            pageHelmetForming.innerHTML += indexHelmetRender(qwe.img, key+12, qwe.name, Math.round(qwe.price) + 'p');
        }

    })
}

content3helmetForming();

