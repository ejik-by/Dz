var contImg = document.getElementsByClassName('container');
var bigImg = document.querySelector(".photo img");


contImg[0].addEventListener("click", function (event) {
    // console.log(event.target)
    if (event.target.tagName !== "IMG") {
        return;
    }
    bigImg.src = event.target.src
    var actImg = document.querySelector("img.active-image");
    actImg.classList.remove('active-image');
    event.target.classList.add("active-image");
})