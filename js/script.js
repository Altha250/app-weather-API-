// 2.5 это версия API
// 524894 это id Москвы
// 01ea85021fe92ac9cd967ff814db5ea5 это индивидуальный ключ от OpenWeather

// делаем GET-запрос
fetch("http://api.openweathermap.org/data/2.5/weather?id=524894&appid=01ea85021fe92ac9cd967ff814db5ea5")
// в случае отработки fetch сработает then
// и мы получим преобразованную информацию в формате JSON
.then(function(resp) { return resp.json()})
// получаем обработанные данные data в виде массива и
.then(function(data) {
    // выводим его в консоль
    console.log(data);
    // определяем действующие элементы на странице:
    // город, температуру, погодные условия, иконку погоды
    // и выводим их на странице браузера
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp - 273) + " " + "&deg;" + "C";
    document.querySelector(".conditions").textContent = data.weather[0]["description"];
    document.querySelector(".features").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
// перехват ошибок
.catch(function() {
    // catch any errors
});