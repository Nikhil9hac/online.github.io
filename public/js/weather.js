// targeting the Element
const btn1=document.getElementById('btn');
const city=document.getElementById('city')
const maxTemp=document.getElementById('maxTemp');
const minTemp=document.getElementById('minTemp');
const humidity=document.getElementById('humidity');
const day=document.getElementById('day');
// event addEventListener
btn1.addEventListener('click',()=>{
    const inputArea=document.getElementById('inputCity').value;
    const getInfo=async()=>{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputArea}&appid=1f85633f522afbfbd38645d120f80841`);
        const data=await res.json();
        const array1=Array(data);
        console.log(array1);
        city.innerText=`🏙️${inputArea}`;
        maxTemp.innerText=`current temperature:${array1[0].main.temp_max}°F`
        minTemp.innerText=`current pressure:${array1[0].main.pressure}`
        humidity.innerText=`current humidity:${array1[0].main.humidity}`
        const currTime=new Date();
        const date=currTime.toLocaleDateString();
        day.innerHTML=date;
        document.getElementById('imgTag').src=`http://openweathermap.org/img/wn/${array1[0].weather[0].icon}@2x.png`;
    }
    getInfo();
});