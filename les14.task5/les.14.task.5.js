var ulList = document.getElementById('menuList');// весь UL тэг
var btnClick = document.getElementById('btnAdd');// наша кнопка

btnClick.addEventListener("click", function(){
    var newLi = document.createElement("li");  //создаем новую лишку
    newLi.innerText = "пункт";
    ulList.appendChild(newLi); // вставляем ее в список
})

ulList.addEventListener("click", function(event){
    var elemLi = event.target;  //заносим в переменную где использовалось наше событие, в данном случае клик
    if (elemLi.tagName === "LI"){ //  проверяем, если это наша лишка - то ниже добавляем воскицательный знак
        elemLi.innerHTML += "!";
    }
})