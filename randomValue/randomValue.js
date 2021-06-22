var btn = document.getElementById("qwe");

btn.addEventListener("click", function () {
    var n = 1;
    var m = 50;
    var newP = document.createElement("p");

    for (var i = 0; i < 7; i++) {
        var randomValue = Math.floor(
            Math.random() * (m - n + 1)
        ) + n;
        newP.innerText = newP.innerText + randomValue + ',';
        btn.parentElement.appendChild(newP);
    }
});

