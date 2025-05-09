const text = "у нас свадьба";
const typingSpeed = 100; // Скорость печати (в миллисекундах)
let index = 0;

// Получаем элементы
const textContainer = document.getElementById("text-container");
const splash = document.getElementById("splash");
const content = document.getElementsByClassName("container")[0];
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const nameInput = document.getElementById("name");
const formSubmit = document.getElementById("formSubmit");
const can = document.getElementById("can");




// Функция для имитации печати текста
function typeText() {
    if (index < text.length) {
        textContainer.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        // После завершения печати через 2 секунды скрываем SplashScreen
        setTimeout(hideSplashScreen, 1000);
    }
}

// Функция для скрытия SplashScreen и показа основного контента
function hideSplashScreen() {
    splash.classList.add('hidden');
    setTimeout(() => {
        splash.style.display = 'none';
        content.style.display = 'flex';
        content.style.opacity = 1;
    }, 500); // Задержка для плавного перехода
}

// Запускаем печать текста
window.onload = () => {
    setTimeout(() => { typeText() }, 500);
};
