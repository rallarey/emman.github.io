const images = [
    'img/minecraft_1.png',
    'img/minecraft_2.png',
    'img/minecraft_3.png',
    'img/minecraft_4.png',
    'img/minecraft_5.png',
    'img/minecraft_6.png',
    'img/minecraft_7.png',
    'img/minecraft_8.png',
    'img/minecraft_9.png',
    'img/minecraft_10.png',
    'img/minecraft_11.png',
    'img/minecraft_12.png',
    'img/minecraft_13.png',
]
let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = 'url(${images[currentIndex]})';

    currentIndex = (currentIndex + 1) % images.length;
}

document.body.addEventListener('click', changeBackground);