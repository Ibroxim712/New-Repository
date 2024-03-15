let yosh = +prompt("Yoshingizni yozing");

if (yosh < 18) {
    alert("Hali yoshingiz yetarli emas, o'qing.");
} else if (yosh >= 18 && yosh <= 50) {
    alert("Ishlashingiz kerak.");
} else if (yosh > 50 && yosh <= 59) {
    alert("Yaqinda pensiyaga chiqishingiz mumkin.");
} else if (yosh >= 60 && yosh <= 100) {
    alert("Pensiyaner bo'lgansiz.");
} else if (yosh > 100) {
    alert('Sizni tirikligingiz bir mojiza.');
} else {
    yosh = +prompt('Faqat son kiriting');

    if (isNaN(yosh)) {
        alert('Siz noto‘g‘ri qiymat kiritdingiz. Iltimos, faqat son kiriting, qaytadan yozmoqchi bolsangiz Sahifani yangilang');
    } else {
        if (yosh < 18) {
            alert("Hali yoshingiz yetarli emas, o'qing.");
        } else if (yosh >= 18 && yosh <= 50) {
            alert("Ishlashingiz kerak.");
        } else if (yosh > 50 && yosh <= 59) {
            alert("Yaqinda pensiyaga chiqishingiz mumkin.");
        } else if (yosh >= 60 && yosh <= 100) {
            alert("Pensiyaner bo'lgansiz.");
        } else if (yosh > 100) {
            alert('Sizni tirikligingiz bir mojiza.');
        }
    }
}
