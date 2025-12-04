const apiKey = import.meta.env.VITE_YANDEX_API;
const script = document.createElement("script");
script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
document.head.appendChild(script);

