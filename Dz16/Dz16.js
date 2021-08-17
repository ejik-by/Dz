const obj1 = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}
const obj2 = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}
const obj3 = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}

function comparison(obj1, obj2) {
    if (obj1.name == obj2.name && obj1.phone == obj2.phone && obj1.email == obj2.email) {
        console.log("true");
    } else {
        console.log("false");
    }
}
comparison(obj1, obj2);

function comparison1(obj1, obj3) {
    if (obj1.name == obj3.name && obj1.phone == obj3.phone && obj1.email == obj3.email) {
        console.log("true");
    } else {
        console.log("false");
    }
}
comparison1(obj1, obj3);



function comparison(obj1, obj3) {
    //Преобразую объект в массив
    let objMass1 = Object.entries(obj1);
    let objMass2 = Object.entries(obj3);
    //Сравниваю длину массивов
    if (objMass1.length === objMass2.length) {
        let counter = 0;
        //Считаю кол-во совпадений
        for (let i = 0; i < objMass1.length; i++) {
            if (objMass1[i][1] === objMass2[i][1]) {
                counter++;
            }
        }
        //Проверяю совпадения с длиной массива
        if (objMass1.length === counter) {
            console.log("true");
        } else {
            console.log("false");
        }
    } else {
        console.log("false");
    }
}
comparison(obj1, obj2);

function comparison(obj1, obj3) {
    //Преобразую объект в массив
    let objMass1 = Object.entries(obj1);
    let objMass2 = Object.entries(obj3);
    //Сравниваю длину массивов
    if (objMass1.length === objMass2.length) {
        let counter = 0;
        //Считаю кол-во совпадений
        for (let i = 0; i < objMass1.length; i++) {
            if (objMass1[i][1] === objMass2[i][1]) {
                counter++;
            }
        }
        //Проверяю совпадения с длиной массива
        if (objMass1.length === counter) {
            console.log("true");
        } else {
            console.log("false");
        }
    } else {
        console.log("false");
    }
}
comparison(obj1, obj3);


//  TASK 2

function expandedForm(numb) {
    //Привожу к строке
    numb = String(numb);
    //Привожу к массиву
    const arr = numb.split("");
    const len = arr.length;
    const w = "";
    //Прохожусь по массиву и возвожу в степень в зависимости от индекса
    let numbers = arr.map(function (n, i) {
        //Степень
        let pow = 10 ** (len - i - 1);
        return n * pow;
    })
    //Удаляю элемнты массива равные нулю
    numbers = numbers.filter(function (elem) {
        return elem !== 0;
    })

    console.log(numbers.join("+"));
}
expandedForm(70304)
expandedForm(1037903)
expandedForm(802539)





