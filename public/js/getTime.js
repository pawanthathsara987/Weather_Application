const hour = new Date().getHours();

if (hour > 6 && hour <= 12) {
    document.body.style.backgroundImage = "url('/images/morning1.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}else if(hour > 12 && hour <= 18 ){
    document.body.style.backgroundImage = "url('/images/afternoon1.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}else {
    const nightImages = ["/images/night1.jpg", "/images/night2.jpg", "/images/night3.jpg"];
    constrandomImage = Math.floor(Math.random() * nightImages.length);
    document.body.style.backgroundImage = "url('" + nightImages[randomImage] + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}