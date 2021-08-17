const createUsers = () => {
    fetch('https://randomuser.me/api/?results=12')
        .then(
            (res) => {
                return res.json();
            }
        ).then((data) => {
        const posts = document.querySelector('#content');
        data.results.forEach((post) => {
            posts.innerHTML += `
                             <div>
                             <img src="${post.picture.thumbnail}">
                             <p>Gender: ${post.gender}. Name: ${post.name.title} ${post.name.first} ${post.name.last}</p>
                             </div>
                             `
        })
    })
}

createUsers();

if (window.addEventListener) {
    window.addEventListener('scroll', scroll)
} else if (window.addEventListener) {
    window.addEventListener('onscroll', scroll);
}

function scroll() {
    let st = document.documentElement.scrollTop;
    let ch = document.documentElement.clientHeight;
    let sh = document.documentElement.scrollHeight;
    if (!st) {

    } else if ((st + ch) >= sh) {
        createUsers();
    }
}
