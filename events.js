// Task 1.
var bar = document.getElementById('barsa');
var bae = document.getElementById('baer');
var yve = document.getElementById('yvent');

function alertSrc(event) {
    bar.addEventListener('click', function () {
        alert("src=\"./images/footbal/barcelona.png\"")
    })
    bae.addEventListener('click', function () {
        alert("src=\"./images/footbal/bayern.png\"")
    })
    yve.addEventListener('click', function () {
        alert("src=\"./images/footbal/juventus.png\"")
    })
}

alertSrc();


//Taskv2.
var goog = document.getElementById('google');
var yan = document.getElementById('yandex');
var mai = document.getElementById('mail');
var srcGoog = goog.getAttribute('href');
var srcYan = yan.getAttribute('href');
var srcMai = mai.getAttribute('href');

function hrefs() {
    var newSpan = document.createElement('span');
    newSpan.style.color = "black";
    goog.addEventListener('mouseover', function (event) {
        newSpan.innerText = '('+ srcGoog + ')'
        goog.appendChild(newSpan);
    })
    yan.addEventListener('mouseover', function (event) {
        newSpan.innerText = '(' + srcYan + ')'
        yan.appendChild(newSpan);
    })
    mai.addEventListener('mouseover', function (event) {
        newSpan.innerText = '(' + srcMai + ')'
        mai.appendChild(newSpan);
    })
    goog.addEventListener('mouseout', function (event) {
        newSpan.remove();
    })
    yan.addEventListener('mouseout', function (event) {
        newSpan.remove();
    })
    mai.addEventListener('mouseout', function (event) {
        newSpan.remove();
    })
}

hrefs();

// Task 3.
var cardDel = document.querySelector(".card");

function rem() {
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') { // почему когда прописываешь event.code === 27.....ничего не работает,
            // а если event.code/event.key === 'Escape' то всё работает?
            cardDel.remove();
        }
        ;
    });
};
rem();






