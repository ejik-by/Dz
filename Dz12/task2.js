var allLi = document.querySelectorAll("#tree-films li");
var ulFilms = document.querySelector("#tree-films")

for (let li of allLi) {
    var span = document.createElement("span");
    li.prepend(span); //--------------------------------------------------почитать про prepend
    span.append(span.nextSibling); //перемещает текст в тег спан


}
document.addEventListener("click", function (event) {
    if (event.target.tagName !== "SPAN") {
        return;
    }

    var subContainer = event.target.parentNode.querySelector("ul");

    var currentSpan = event.target;

    currentSpan.innerHTML += `(${subContainer.children.length})`;

    if (!subContainer) {
        return;
    }
    subContainer.hidden = !subContainer.hidden; // чередует открыл/закрыл
})

function generateCounter() {
    for (let counterLi of allLi) {
        var subBox = counterLi.querySelector("ul");

        if (!subBox) {
            continue;
        }
        var currentLength = subBox.querySelectorAll("span")

        var currentSpan = counterLi.firstElementChild;
        counterSpan.innerHTML += ` (${subBox.children.length})`;
    }

}
generateCounter() ;