// df2c775cd2ed25a2ac88511605ecf26d
const API_KEY = `df2c775cd2ed25a2ac88511605ecf26d`;

const loadTempepeature = city =>{
const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}&units=metric`
fetch (url)
.then(res => res.json())
.then(data => displayTempepeature(data))
}

const displayTempepeature = data =>{
    console.log(data);
    const temp = document.getElementById('temp')
    temp.innerText = data.main.temp
}

 const btnFild = () =>{
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    const citys = document.getElementById('citys')
    citys.innerText= city

    loadTempepeature(city)
 }



loadTempepeature()
