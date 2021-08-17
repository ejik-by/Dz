let counterPlus = document.querySelector('.plus');
let counterMinus = document.querySelector('.minus')
let counterSum = document.querySelector('.sum');
let checkOutSum = document.querySelector('.checkOutSum');
let sum = 1;
let goodsId = localStorage.getItem('globalGoodsId');
let checkOut1 = document.querySelector('.checkOut1 img');
let PriceSp = document.querySelector('.PriceSp');
let PriceSp1 = document.querySelector('.PriceSp1');
let PriceSp2 = document.querySelector('.PriceSp2');
let shippingInp1 = document.querySelector('.inp1');
let shippingInp2 = document.querySelector('.inp2');
let famLabel = document.querySelector("label.fam");
let imLabel = document.querySelector("label.im");
let telLabel = document.querySelector("label.tel");
let inputFam = document.querySelector('input.fam');
let inputIm = document.querySelector('input.im');
let inputTel = document.querySelector('input.tel');
let buttonEdit = document.querySelector('.edit');
let formEdit = document.querySelector('.formEdit');
let goToHome = document.querySelector('.goToHome');
let formToGoHome = document.querySelector('.formGoToHome')
checkOut1.src = ekipAll[goodsId].img;
PriceSp.innerText = ekipAll[goodsId].name;
PriceSp1.innerText = ekipAll[goodsId].color;
PriceSp2.innerText = ekipAll[goodsId].price;

let buyClickSubmit = document.querySelector('.submit');
let ContactForm = document.querySelector('.contactForm');
let ContactSubmit2 = document.querySelector('.contactSubmit2');
let ContactSubmit1 = document.querySelector('.contactSubmit1');

counterPlus.addEventListener('click', function () {
    sum += 1;
    if (sum > 9) {
        sum = 9;
    }
    counterSum.innerHTML = sum;
    checkOutSum.innerHTML = '(' + sum + ')';
})
counterMinus.addEventListener('click', function () {
    sum -= 1;
    if (sum < 1) {
        sum = 1;
    }
    counterSum.innerHTML = sum;
    checkOutSum.innerHTML = '(' + sum + ')';
})

buyClickSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    ContactForm.style.display = 'block'
})
ContactSubmit2.addEventListener('click', function () {
    ContactForm.style.display = 'none'
})
ContactSubmit1.addEventListener('click', function (event) {
    event.preventDefault()
    validFormFam()
    validFormIm()
    validFormTel()
})

inputTel.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^\d]/g, '');
});
inputFam.addEventListener('keyup', function () {
    this.value = this.value.replace(/[\d]/g, '');
});
inputIm.addEventListener('keyup', function () {
    this.value = this.value.replace(/[\d]/g, '');
});

inputFam.focus()

function validFormFam() {

    let allP = famLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Вы не ввели фамилию!!!";
    if (inputFam.value.trim() === "") {
        famLabel.appendChild(createP);
        if (allP.length > 1) {
            famLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            famLabel.removeChild(allP[0])
        }
    }
}

function validFormIm() {
    let allP = imLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Вы не ввели имя!!!";
    if (inputIm.value.trim() === "") {
        imLabel.appendChild(createP);
        if (allP.length > 1) {
            imLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            imLabel.removeChild(allP[0])
        }
    }

}

function validFormTel() {
    inputTel.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^\d]/g, '');
    });
    let allP = telLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Вы не ввели телефон!!!";
    if (inputTel.value.trim() === "") {
        telLabel.appendChild(createP);
        if (allP.length > 1) {
            telLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            telLabel.removeChild(allP[0])
        }
        ContactForm.style.display = 'none'
        formToGoHome.style.display = 'block'
    }

}

const searchEditValueTypeEkipFunction = () => {
    let searchEditValueTypeEkip = document.querySelector('.formEditSelectType');
    let searchEditValueModelEkip = document.querySelector('.formEditSelectModel');
    let searchEditValueColorEkip = document.querySelector('.formEditSelectColor');
    ekipAll.forEach((qwe) => {
        if (qwe.id === 1)
            searchEditValueTypeEkip.innerHTML +=
                `
        <option value="${qwe.id}">${qwe.className}</option>
        `
        searchEditValueModelEkip.innerHTML += `
        <option value="${qwe.id}" >${qwe.name}</option>
        `
        searchEditValueColorEkip.innerHTML += `
        <option value="${qwe.id}" >${qwe.color}</option>
        `
    })

}


buttonEdit.addEventListener('click', function () {
    searchEditValueTypeEkipFunction()
    formEdit.style.display = 'block';
})

let editSubmit2 = document.querySelector('.editSubmit2');
editSubmit2.addEventListener('click', function () {
    formEdit.style.display = 'none'
    editSubmit2.event.preventDefault()
})
let editSubmit1 = document.querySelector('.editSubmit1');
editSubmit1.addEventListener('click', function (event) {
    event.preventDefault();
    formToGoHome.style.display = 'block';
    formEdit.style.display = 'none';
})
goToHome.addEventListener('click', function (event) {
    event.preventDefault();
    formToGoHome.style.display = 'none';
    location.href = "index.html";
})