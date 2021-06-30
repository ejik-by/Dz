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

const blurOut = () => {
    inputOne.addEventListener('blur', function () {
        alert('Вы ввели:  ' + inputOne.value);
    })
    inputTwo.addEventListener('blur', function () {
        alert('Вы ввели:  ' + inputTwo.value);
    })
}
// blurOut();

//Task 3.

var btn = document.getElementById('btn');
var frm = document.querySelector('#sum-form');
var first = frm.elements.value;
var frmEl = frm.elements;
var sum;

const knopka = () => {
    btn.addEventListener('click', function (event) {
        for (let i = 0; i < frm.elements.length; i++) {
            sum = sum + Number(frm.elements[i].value);
        }
        event.preventDefault();
        console.log(sum)
    })
}
// knopka();

//Task4
var sel = document.getElementById('sel');
var inpVal = document.getElementById('inp')

sel.addEventListener('change', function () {
    var strOpt = sel.options[sel.selectedIndex].innerText;
    inpVal.value = strOpt;
})

