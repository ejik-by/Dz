let formsOne = document.querySelector('.text');
let formsTwo = document.querySelector('.number');
let formsTree = document.querySelector('.email');
let classShow = document.querySelector(".text show")


const alertValueOne = () => {
    formsOne.addEventListener('click', function () {
        if (!formsOne.classList.contains('show')) {
            formsOne.classList.add('show');
            alert(formsOne.value);
        }
    })

    formsTwo.addEventListener('click', function () {
        if (!formsTwo.classList.contains('show')) {
            formsTwo.classList.add('show');
            alert(formsTwo.value);
        }
    })
    formsTree.addEventListener('click', function () {
        if (!formsTree.classList.contains('show')) {
            formsTree.classList.add('show');
            alert(formsTree.value);
        }
    })
}


// alertValueOne();

// //Task 2.
let inputOne = document.querySelector('#textTwo');
let inputTwo = document.querySelector('#emailTwo');

const blurOut = () => {let first = frm.elements.value[0];
    inputOne.addEventListener('blur', function () {
        alert('Вы ввели:  ' + inputOne.value);
    })
    inputTwo.addEventListener('blur', function () {
        alert('Вы ввели:  ' + inputTwo.value);
    })
}
// blurOut();

//Task 3.

let btn = document.getElementById('btn');

const knopka = () => {
    btn.addEventListener('click', function (){
        var frm = document.querySelector('#sum-form').elements;
        for (var i = 0; element; element = elements[i++]);
    })
console.log(knopka)

}
knopka();

