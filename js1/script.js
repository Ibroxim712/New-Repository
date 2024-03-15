

let n1 = +prompt("1-son kirit")

while (isNaN(n1) || n1 === 0) {
    n1 = +prompt("son kirit")
}
let n2 = +prompt("2-son kirit")
while (isNaN(n2) || n2 === 0) {
    n2 = +prompt("2 son kirit ")
}


let n3 = +prompt("3-son kirit")
while (isNaN(n3) || n3 === 0) {
    n3 = +prompt("3-son kirit")
}


if (n2 < n1 && n1 < n3 || n2 > n1 && n1 > n3) {
    alert("1-son o'rta qiymat " + n1)
}
if (n1 < n2 && n2 < n3 || n1 > n2 && n2 > n3) {
    alert("2-son o'rta qiymat " + n2)
}
if (n2 < n3 && n3 < n2 || n1 > n3 && n3 > n2) {
    alert("3-son o'rta qiymat " + n3)
}

// while (isNaN(n3, n2, n1)) {
//     n3, n2, n3 = +prompt("Sondan boshqa narsa kiritdingiz")
// }

// let n1 = +prompt("1-son kirit")
// let n2 = +prompt("2-son kirit")
// let n3 = +prompt("3-son kirit")

// console.log((n1 + n2 + n3) / 3);