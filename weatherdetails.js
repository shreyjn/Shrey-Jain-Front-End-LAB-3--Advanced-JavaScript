let api_key='d63d992b38da8f32e5f197fb30255745';
let url='https://api.openweathermap.org/data/2.5/';
let txtbox= document.getElementById('sBox');
txtbox.addEventListener('keypress',display);

function display(event)
{
    console.log(event.keyCode);
    if(event.keyCode==13)
    {
        getResults(txtbox.value);
    }

}
//https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2

function getResults(cityName)
{
    console.log(cityName);
    fetch(url+"weather?q="+cityName+"&units=metric&appid="+api_key)
    .then(weather=>weather.json()).then(response=>displayResults(response));
}

function displayResults(response)
{
    let city=document.getElementById("city");
    let date=document.getElementById("date");
    let temp=document.getElementById("temp");
    let day=document.getElementById("day");
    let condition=document.getElementById("condition");
    let d=new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    city.innerText=response.name;
    date.innerText=days[d.getDay()]+", "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();
    temp.innerText=`${Math.round(response.main.temp)}°c`;
    day.innerText=response.weather[0].main;
    condition.innerText= `${Math.round(response.main.temp_min)}°c / ${Math.round(response.main.temp_max)}°c`;

}