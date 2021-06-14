var btnFilter = document.getElementById("sort");

btnFilter.addEventListener("click", function () {
    var allNames = document.querySelectorAll(".name");
    var filterNames = [];
    var ulList = document.querySelector("#todo");
    for(var i = 0;i < allNames.length; i++) {
        var obj = {
            name: allNames[i].textContent,
            task: allNames[i].nextElementSibling.textContent
        }
        filterNames.push(obj);
    }

    filterNames.sort(function (nameCurrent, nameNext) {
        if (nameCurrent.name > nameNext.name) {
            return 1;
        }
        if (nameCurrent.name < nameNext.name) {
            return -1;
        }
        return 0;
    });
    ulList.innerHTML = "";

    for (var i= 0; i<filterNames.length; i++){
        ulList.innerHTML +=`
            <li>
                <span class="name">${filterNames[i].name}</span>
                <p>${filterNames[i].task}</p>
            </li>`
    }

    console.log(filterNames)
})