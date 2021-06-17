// N.5 Домашнее задание DRINKS_HASH_FUNC
// Создать проект DRINKS_HASH_FUNC.
// 1.
// Разработать класс HashStorageFunc в функциональном стиле (т.е. функцию-конструктор) для хранения в приватном хэше произвольных пар ключ-значение.
//     Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
// Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
// addValue(key,value) — сохраняет указанное значение под указанным ключом;
// getValue(key) — возвращает значение по указанному ключу либо undefined;
// deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
// getKeys() — возвращает массив, состоящий из одних ключей.
//     Класс должен быть чистым (не должен использовать никаких глобальных переменных, не, должен «пачкать экран»).
// Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM,
// т.к. может использоваться и вообще без веб-страницы).
function HashStorageFunc() {
    this._drinks = {};
}

HashStorageFunc.prototype.addValue = function (key, value) {
    this._drinks[key] = value
    return this._drinks;
}
HashStorageFunc.prototype.getValue = function (key) {
    return this._drinks[key];

}

HashStorageFunc.prototype.deleteValue = function (key) {
    delete this._drinks[key];

}

HashStorageFunc.prototype.getKeys = function () {
    var result = [];
    for (key in this._drinks) {
        result.push(key)
    }
    return result;
}
// 2.
// Создать объект drinkStorage класса HashStorageFunc для хранения рецептов напитков.
//     Ключом является название напитка; значением —
//     информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).
function Drink(isAlco, recept, name) {
    this.isAlco = isAlco;
    this.recept = recept;
    this.name = name;
}
var chskaf = new HashStorageFunc();

// 3.
// Разработать веб-страницу для работы с хранилищем рецептов напитков.
//     На странице должны быть кнопки:
//     «ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления;
//     сохраняет информацию о напитке в хранилище.
// «получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию
// о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
// «удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей
// соответствующего сообщения в информационное окно.
// «перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).
//
// Пример информации о напитке:
//     напиток Маргарита алкогольный: да рецепт приготовления: продукт, продукт... смешать...
function Enter() {
    var name = prompt("Введите название напитка ");
    var alco = confirm("Напиток алкольный? ");
    var rec = prompt("Введите рецепт приготовления ");
    var drinkObj = new Drink(alco, rec, name);
    chskaf.addValue(name, drinkObj);
}
function Info() {
    var inf = prompt("Введите название напитка ");
    var result = chskaf.getValue(inf);
    if (result === undefined) {
        alert("Такого напитка не существует ");
    } else {
        console.log(result);
    }
}
function Delete() {
    var del = prompt("Введите название напитка ");
    var res = chskaf.getValue(del);

    if (res !== undefined) {
        chskaf.deleteValue(del)
        alert("true");
    } else {
        alert("false");
    }
}
function Output() {
    var out = alert(chskaf.getKeys());
}