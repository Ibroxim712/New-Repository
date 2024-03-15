let son = +prompt('Son kiriting')
while (isNaN(son) || son === 0) {
    son = +prompt("son kirit")
}
if (son % 2) {
    alert('Toq son ' + son);
} else {
    alert('Juft son ' + son);
}