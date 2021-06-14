var smiles = document.querySelectorAll(".container img");


for (let smileImg of smiles) {

    smileImg.onmousedown = function (event) {
        smileImg.style.position = 'absolute';
        moveAt(event);
        document.body.appendChild(smileImg);
        smileImg.style.zIndex = 1000;

        function moveAt(e) {
            smileImg.style.left = e.pageX - smileImg.offsetWidth / 2 + 'px';
            smileImg.style.top = e.pageY - smileImg.offsetHeight / 2 + 'px';
        }

        document.onmousemove = function (event) {
            moveAt(event);
        }
        smileImg.onmouseup = function () {
            document.onmousemove = null;
            smileImg.onmouseup = null;
        }
    }

    smileImg.ondragstart = function () {
        return false;
    };
}


