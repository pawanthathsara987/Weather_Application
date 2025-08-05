const hour = new Date().getHours();
let image = "";

if (hour > 6 && hour <= 12) {
    image = "/images/morning1.jpg";
} else if (hour > 12 && hour <= 18) {
    image = "/images/afternoon1.jpg";
} else {
    const nightImages = [
        "/images/night1.jpg",
        "/images/night2.jpg",
        "/images/night3.jpg"
    ];
    const randomImage = Math.floor(Math.random() * nightImages.length);
    image = nightImages[randomImage];
}

document.body.style.backgroundImage = `url('${image}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
