const API_KEY = `48e519ce432ba31e2840135eb83f57e6`;
// For On Click Button
const searchTemperature = () => {

    const cityName = document.getElementById('input-city-name').value;
    document.getElementById('input-city-name').value = '';
    // console.log(cityName)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => getTempData(data))

};
// Set By Default Weather
const defaultWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Khulna'}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => getTempData(data))

}

const getTempData = data => {
    console.log(data)



    if (data.cod == 404) {

    } else {
        const { name } = data;
        const { temp } = data.main;
        const { main, icon } = data.weather[0];
        let src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.getElementById('city-name').innerText = name;
        document.getElementById('degree').innerText = temp;
        document.getElementById('weather-main').innerText = main;
        document.getElementById('icon').setAttribute('src', src);

    }

}
defaultWeather();