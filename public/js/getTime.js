const hour = new Date().getHours();

if (hour > 6 && hour < 18) {
    document.body.style.backgroundImage = "url('/images/morning1.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
} else {
    document.body.style.backgroundImage = "url('/images/night1.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}