var inputData = document.getElementById("inputTask");
var btnAdd = document.getElementById("btn-add");
var ulList = document.querySelector("#list");
var spans = document.getElementsByTagName("span");
var btnSave = document.getElementById("btn-save");
var btnClear = document.getElementById("btn-clear");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
var btnInfoRab = document.getElementById("btn-infoRab");
var lis = document.getElementsByTagName("li");
var activsElement = document.querySelector("div.activ span");
var notactivsElement = document.querySelector("div.notactiv span");


function addTodo() {

    var inputContent = inputData.value;
    if (inputContent.trim()) {
        inputData.value = "";

        var newLi = document.createElement("li")
        newLi.textContent = inputContent;

        var newSpan = document.createElement("span");
        newSpan.innerText = "  DELETE";

        var newDate = document.createElement("time");
        newDate.innerText = " " + today;

        newLi.append(newDate);
        ulList.appendChild(newLi).append(newSpan);
        deleteTodo();
        line();
    }

}


function deleteTodo() {
    for (let span of spans) {
        span.onclick = function () {
            span.parentElement.remove();
            counter();
        }
    }
}

function saveTodos() {
    localStorage.setItem("todo-app", ulList.innerHTML);
}

function clearTodos() {
    ulList.innerHTML = "";
    localStorage.setItem("todo-app", ulList.innerHTML);
}

function loadTodo() {
    if (localStorage.getItem("todo-app")) {
        ulList.innerHTML = localStorage.getItem("todo-app");
    }
}

function info() {
    var newInfoRab = document.createElement("infoRab");
    newInfoRab.onclick = alert("Масилевич Вадим Артурович");
}

function line() {
    for (let li of lis) {
        li.onclick = function () {
            // li.style.textDecoration = "line-through";
            li.className = "show";
            counter();
        }
    }
    counter();
}

function counter() {
    let activs = 0;
    let notactivs = 0;

    for (let li of lis) {
        if (li.className === "show") {
            activs += 1
        } else {
            notactivs += 1
        }
    }

    console.log("activs:" + activs);
    console.log("notactivs:" + notactivs);

    activsElement.textContent = activs;
    notactivsElement.textContent = notactivs;
}

loadTodo();
deleteTodo();
btnAdd.onclick = addTodo;
btnSave.onclick = saveTodos;
btnClear.onclick = clearTodos;
btnInfoRab.onclick = info;
line();