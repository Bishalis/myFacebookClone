const apiKey = "ad0b13fa3f22da1829a1d78e5cf104fc"
let cityInput = document.querySelector(".locationTxt")
const searchBtn = document.querySelector(".submit")
let wheatherInfo = document.querySelectorAll(".wheather")
let maincontainer = document.querySelector("#container")
let image = document.querySelector(".vector")


async function fetchwheather(cityName,lat,lon){
    const currUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(currUrl) 
    .then(res => res.json())
    .then (data => {
        console.log(data)

      wheatherInfo.forEach(info=>{
        wheatherInfo[0].innerText = data.main.feels_like  + `°F`
        wheatherInfo[1].innerText = data.main.humidity 
        wheatherInfo[2].innerText = data.main.pressure +` hpa`
        wheatherInfo[3].innerText = data.visibility + ` meters`
        wheatherInfo[4].innerText = data.main.temp + `°F` 
        wheatherInfo[5].innerText = data.wind.speed +`m/s` 
      })

      if(data.weather[0].main == "Clouds"){
            image.src = `cloud-37010_640.png`
      }else if(data.weather[0].main == "Clear"){
        image.src = `sun-1789653_640.webp`

      }else if(data.weather[0].main == "rain"){
           image.src = `thunderstorm-1265161_1280.png`
      }

    })
    .catch(()=>{
        alert("An error has occured while fetching the wheather")
    })
       
    

}

 cityInput.value.trim();
 async  function fetchCityCoordinates(cityName){
    if(!cityName) return;
    const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
    const response = await fetch(geocodingUrl)
    const data = await response.json()
    console.log(data)
    const {name, lat ,lon }=data[0];
    fetchwheather(name,lat,lon)
}
 
fetchCityCoordinates( cityInput.value.trim())


const addSign = document.querySelector(".fa-plus")
const addlocation = document.querySelector(".addLocation")
const locationTxt = document.querySelector(".location")

addSign.addEventListener("click",()=>{
   addlocation.style.display="block"
})


addlocation.addEventListener("submit",(event)=>{
    event.preventDefault();
    locationTxt.innerText =cityInput.value ;
    fetchCityCoordinates( cityInput.value.trim())
    addlocation.style.display="none"

})



