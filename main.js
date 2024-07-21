const searchBtn = document.querySelector("button");
const searchBox = document.querySelector("input");

async function checkWeather(city) {
    // console.log(city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=` +
        city +
        "&appid=f112ffd524d1f7938ad75467818c715f"
    );
    const data = await response.json();
    console.log(data);
    document.querySelector(".country").innerHTML = "Country:" + data.sys.country;
    document.querySelector(".city").innerHTML = "City:" + data.name;
    document.querySelector(".temp").innerHTML = "Temp:" + Math.round(data.main.temp) + "<sup>o</sup>C";
    document.querySelector(".speed").innerHTML = "speed:" + Math.floor(data.wind.speed) + "km/h";
}



searchBtn.addEventListener("click", () => { checkWeather(searchBox.value) });   
