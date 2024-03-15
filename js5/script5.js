let son = +prompt("Son kiriting va biz sizga soningizning kvadratini topishga yordam beramiz:");

while (isNaN(son) || son === 0) {
    alert("Noto‘g‘ri belgi kiritdingiz. Iltimos, faqat son kiriting.");
    son = +prompt("Sonni kiriting:");
}

alert("Sizning soningizning kvadrati: " + son ** 2);
