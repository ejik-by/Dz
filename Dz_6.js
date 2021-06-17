// N.06 Домашнее задание Laptop_Ultrabook
// 1. Объявить класс под названием “Laptop”
// 2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер” “год изготовления”, “размер ОЗУ”, “размер ПЗУ”, “масса”.
// Учтите, что сейчас ноутбуки выпускаются без дисководов, и также присутствует вебкамера. Есть метод который выводит количество «размер ОЗУ и размер ПЗУ».
// Есть метод, который выводит название и модель.
// 3. Класс “Ultrabook”. Надо учесть, что максимальное масса должна составлять не более 1.5кг, есть поля: “название”, “модель ”, “ серийный номер ”,
// “ год изготовления ”, “размер ОЗУ”, “размер ПЗУ”. Учтите, что сейчас ультрабуки выпускаются без дисководов и есть вебкамера.
// 4 Есть метод который выводит данные о названии, весе и год изготовления. Есть метод который выводит количество «размер ОЗУ и размер ПЗУ»
function Laptop(name, model, serNam, buldYear, sizeRam, sizeRom, mass) {
    this.name = name;
    this.model = model;
    this.serNam = serNam;
    this.buldYear = buldYear;
    this.sizeRam = sizeRam;
    this.sizeRom = sizeRom;
    this.mass = mass;
    this.Cdrom = "no";
    this.Vebcam = "yes";
}

function Ultrabook(name, model, serNam, buldYear, sizeRam, sizeRom, mass) {
    this.name = name;
    this.model = model;
    this.serNam = serNam;
    this.buldYear = buldYear;
    this.sizeRam = sizeRam;
    this.sizeRom = sizeRom;
    this.mass = mass;
}
Laptop.prototype = Object.create(Ultrabook.prototype);

Laptop.prototype.Raom = function () {
    return " размер ОЗУ: " + this.sizeRam + " размер ПЗУ: " + this.sizeRom;
}
Laptop.prototype.NameMod = function () {
    return " название: " + this.name + " модель: " + this.model;

}
Ultrabook.prototype.NameMassYear = function () {
    if (this.mass > 1.5) {
        return " название: " + this.name + " Масса превышает допустимую. Это не Ultrabook : " + this.mass + " год выпуска: " + this.buldYear;
    }
    return " название: " + this.name + " масса: " + this.mass + " год выпуска: " + this.buldYear;

}
Ultrabook.prototype.Raom = function () {
    return " размер ОЗУ: " + this.sizeRam + " размер ПЗУ: " + this.sizeRom;

}

var start = new Laptop("111", "222", "333", "1111", "4444", "5555", "6666");
var start1 = new Ultrabook("1110", "2220", "3330", "11110", "44440", "55550", "1.4");
var start2 = new Laptop("111", "222", "333", "1111", "4444", "5555", "6666");
var start3 = new Ultrabook("1110", "2220", "3330", "11110", "44440", "55550", "1.4");

console.log(start.Raom());
console.log(start1.Raom());
console.log(start2.NameMod());
console.log(start3.NameMassYear());

