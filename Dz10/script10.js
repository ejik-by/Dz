let devLabel = document.getElementsByTagName("label")[0];
let inputDev = document.getElementsByClassName("dev")[0];
let siteLabel = document.getElementsByTagName("label")[1];
let inputSiteName = document.getElementsByClassName("siteName")[0];
let urlLabel = document.getElementsByTagName("label")[2];
let inputUrl = document.getElementsByClassName("urlStyle")[0];
let dateLabel = document.getElementsByTagName("label")[3];
let inputDate = document.getElementsByClassName("date")[0];
let visitorsLabel = document.getElementsByTagName("label")[4];
let inputVisitors = document.getElementsByClassName("visit")[0];
let mailLabel = document.getElementsByTagName("label")[5];
let inputMail = document.getElementsByClassName("mail")[0];
let catalogLabel = document.getElementsByTagName("label")[6];
let selectCatalog = document.getElementsByClassName("catalog")[0];
let placingSpan = document.getElementsByTagName("span")[7];
let inputPlacing = document.getElementsByClassName("placing")[0];
let areaLabel = document.getElementsByTagName("label")[11];
let inputArea = document.getElementsByClassName("area")[0];
let sbmBtn = document.getElementsByClassName("btn")[0];

let allP = devLabel.getElementsByTagName("p");
let createP = document.createElement("p");
createP.setAttribute("class", "newP");

function validDev2() {
    let allP = devLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert your name";
    if (inputDev.value.trim() === "") {
        devLabel.appendChild(createP);
        if (allP.length > 1) {
            devLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            devLabel.removeChild(allP[0])
        }
    }
}

function validSiteName2() {
    let allP = siteLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert site name";
    if (inputSiteName.value.trim() === "") {
        siteLabel.appendChild(createP);
        if (allP.length > 1) {
            siteLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            siteLabel.removeChild(allP[0])
        }
    }
}

function validUrl2() {
    let allP = urlLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert URL";
    if (inputUrl.value.trim() === "") {
        urlLabel.appendChild(createP);
        if (allP.length > 1) {
            urlLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            urlLabel.removeChild(allP[0])
        }
    }
}

function validVisitors2() {
    let allP = visitorsLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    let inp = inputVisitors.value;
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert value of visitors";
    if (inp < 0 || inp === "") {
        visitorsLabel.appendChild(createP);
        if (allP.length > 1) {
            visitorsLabel.removeChild(allP[0]);
        }
    } else {
        if (allP.length === 1) {
            visitorsLabel.removeChild(allP[0]);
        }
    }
}

function validMail2() {
    let allP = mailLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert your email";
    if (inputMail.value.trim() === "") {
        mailLabel.appendChild(createP);
        if (allP.length > 1) {
            mailLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            mailLabel.removeChild(allP[0])
        }
    }
}

function validDate2() {
    let allP = dateLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert date";
    if (inputDate.value <= 0) {
        dateLabel.appendChild(createP);
        if (allP.length > 1) {
            dateLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            dateLabel.removeChild(allP[0])
        }
    }
}

function validCatalog2() {
    let allP = catalogLabel.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Choose section of catalog";
    console.log(selectCatalog.options[selectCatalog.selectedIndex].value);
    if (selectCatalog.options[selectCatalog.selectedIndex].value <= 0) {
        catalogLabel.appendChild(createP);
        if (allP.length > 1) {
            catalogLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            catalogLabel.removeChild(allP[0])
        }
    }
}

function validPlacing2() {
    let allP = placingSpan.getElementsByTagName("p");
    let createP = document.createElement("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Check";
    let allChecked = placingSpan.querySelectorAll('input[name="radioElem"]:checked').length;
    if (allChecked != 1) {
        placingSpan.appendChild(createP);
        if (allP.length > 1) {
            placingSpan.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            placingSpan.removeChild(allP[0])
        }
    }
}

function validArea2() {
    let createP = document.createElement("p");
    let allP = areaLabel.getElementsByTagName("p");
    createP.setAttribute("class", "newP");
    createP.innerText = "Insert description of your site";
    if (inputArea.value.trim() === "") {
        areaLabel.appendChild(createP);
        if (allP.length > 1) {
            areaLabel.removeChild(allP[0])
        }
    } else {
        if (allP.length === 1) {
            areaLabel.removeChild(allP[0])
        }
    }
}

// submit

function subClick() {
    sbmBtn.addEventListener("click", function () {
        validDev2();
        validSiteName2();
        validUrl2();
        validDate2();
        validVisitors2();
        validMail2();
        validCatalog2();
        validArea2();
        validPlacing2();

    })
    if (allP.length > 0) {
        var newP1 = document.getElementsByClassName("newP")[0];
        newP1.scrollIntoView();
        newP1.previousElementSibling.focus();

    }
}

subClick();