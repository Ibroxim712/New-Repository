let ism = prompt('Ismingizni kiriting')
console.log("Sizning ismingiz " + ism);

let yosh = +prompt('Yoshingizni kiriting')
console.log("Sizning yoshingiz " + yosh);

let son = +prompt("Misolni yeching 5 * 5=")
console.log("Sizning javob: " + son, " Tog'ri javob " + (5 * 5));
if (isNaN(son)) {
    alert("Son kiriting. Qaytadan urinish uchun sahifani yangilang")
}
let son1 = +prompt("Misolni yeching 15+5=   ")
console.log("Sizning javob: " + son1, " Tog'ri javob " + (15 + 5));
if (isNaN(son1)) {
    alert("Son kiriting. Qaytadan urinish uchun sahifani yangilang")
}
let son2 = +prompt("Misolni yeching 38+46")
console.log("Sizning javob: " + son2, " Tog'ri javob " + (38 + 46));
if (isNaN(son2)) {
    alert("Son kiriting. Qaytadan urinish uchun sahifani yangilang")
}
let son3 = +prompt("Misolni yeching 50/2")
console.log("Sizning javob: " + son3, " Tog'ri javob " + (50 / 2));
if (isNaN(son3)) {
    alert("Son kiriting. Qaytadan urinish uchun sahifani yangilang")
}
alert("JAVOBLARINGIZNI CANSOLE DA KORISHINGIZ MUMKIN")
// console.log(3 ** 2);