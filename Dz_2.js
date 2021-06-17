function kia(ceed) {
    var sum = 0;
    for (var i = 0; i < ceed.length; i++) {
        var item = ceed[i]
        if (Array.isArray(item)) {
            sum = sum + kia(item)
        } else {
            sum = sum + item
        }
    }
    return (sum)
}
var ddd = kia([5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
])
console.log(ddd)


function kia(pam, length) {
    var newArray = [];
    for (var i = 1; i <= length; i++) {
        newArray.push(i * pam);
    }
    return newArray;
}

var der = kia(7, 5)
var der1 = kia(12, 10)
var der2 = kia(17, 6)
console.log(der)
console.log(der1)
console.log(der2)


function namberSplit(parm) {
    newArray = [];
    var palto;
    var paltoXXL;
    var forik = parm % 2;
    if (forik === 0) {
        newArray.push(parm / 2);
        newArray.push(parm / 2);
    } else {
        palto = Math.floor(parm / 2);
        paltoXXL = palto + 1;
        newArray.push(palto);
        newArray.push(paltoXXL)
    }
    return newArray
}
var ktm = namberSplit(6)
console.log(ktm)

