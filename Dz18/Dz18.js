let obj = {};

class HashStorageClass {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    addValue(key, value) {
        obj[key] = value;
    }

    getValue(key) {
        if (key) {
            return obj[key];
        } else {
            return "undefined";
        }
    }

    deleteValue(key) {
        if (key) {
            delete obj[key];
            return "true";
        } else {
            return "false";
        }
    }

    getKeys() {
        let massKeys = [];
        for (this.key in obj) {
            massKeys.push(this.key);
        }
        return massKeys;
    }

    cons() {
        return console.log(obj)
    }
}

let drinks = new HashStorageClass();
drinks.addValue("Tuborg", "Пиво")
drinks.addValue("CocaCola", "Продукт химического синтеза")
drinks.addValue("Finka", "Водка");
drinks.addValue("Ряженка", "Молочный продукт");

let writeInfo = () => {
    let drinkName = prompt("Введите название напитка");
    let isAlc = prompt("Напиток алкогольный", "да/нет");
    let color = prompt("Какого цвета?");
    let rec = prompt("Опишите рецепт приготовления");
    let info = "Алкогольный: " + isAlc + ", цвет: " + color + ", рецепт: " + rec;

    drinks.addValue(drinkName, info);
}

let getInfo = () => {
    let drinkName = prompt("Введите название напитка");
    alert(drinks.getValue(drinkName));
}

let deleteDrink = () => {
    let drinkName = prompt("Введите название напитка, который хотите удалить");
    drinks.deleteValue(drinkName);
    alert("Напиток удален!");
}

let drinkList = () => {
    alert(drinks.getKeys());
}