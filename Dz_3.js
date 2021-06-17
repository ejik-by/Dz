function sumFive (arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i] > 5){
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(sumFive([1,5,20,30,4,9,18]))
console.log(sumFive([1,2,3,4]))
console.log(sumFive([10,12,28,47,55,100]))


function objectToArray(obj){
    var result = [];
    for (key in obj){
        result.push ([key, obj[key]])
    }

    return result;
}
console.log(objectToArray({D:1,B:2,C:3}))
console.log(objectToArray({likes:2,dislikes:3,folowers:10}))


function namberSum(arrya) {
    var sym = 0;
    for (var i = 0; i < arrya.length; i++) {
        console.log(typeof (arrya[i]))
        if (typeof arrya[i] !== "string" || typeof arrya[i] !== "boolean") {
            sym = sym + arrya[i]

        }
    }
    return sym;
}
console.log(namberSum([1, 2, "13", "4", "645"]))
console.log(namberSum([true, false, "123", "75"]))
console.log(namberSum([1, 2, 3, 5, true]))






function keysAndValues(obj) {
    var arr = [];
    var arrKey = [];
    var arrZn = [];
    for (key in obj) {
        arrKey.push(key);
        arrZn.push(obj[key]);
    }
    arrKey.sort();
    arrZn.sort();
    arr.push(arrKey, arrZn);
    console.log(arr)
    return arr
}

console.log(keysAndValues({a: 3, b: 2, c: 1}));
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));
console.log(keysAndValues({key1: true, key2: false, key3: undefined}))

