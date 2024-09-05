const apiKey="011d386e74b66ed74202ec46bc15c450";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const initialImage = document.querySelector(".initial-image");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error-message").style.display="block";
        document.querySelector(".weather").style.display="none";
        initialImage.style.display = "block";  // Show initial image again if error occurs
    }
    else{
    let data= await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloud.png"
    }

    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.jpg"
        }

     else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.jpg"
            }

    else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png"
                }

    else if(data.weather[0].main=="Mist"){
                    weatherIcon.src="images/mist.png"
                    }
    
    else if(data.weather[0].main=="Snow"){
         weatherIcon.src="images/snow.png"
    }
    initialImage.style.display = "none";
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error-message").style.display = "none";
        }
    }
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
