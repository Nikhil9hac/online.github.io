// targeting the elements
const right=document.querySelector('.right');
const left=document.querySelector('.left');
const btn1=document.getElementById("btn1")

// code
const imgArray=['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg']
btn1.addEventListener('click',()=>{
  location.href="https://weather-app-nikhil.herokuapp.com/weather"
})
// timeout function
let imgCount=0;
setInterval(()=>{
    imgCount++;
    right.innerHTML=` <img src="img/${imgArray[imgCount]}" alt="">`;
    if (imgCount==3) {
        imgCount=0;
    }
},6000)
// media MediaQueryListEvent
function myFunction(media1) {
    if (media1.matches) { // If media query matches
      left.classList.add('text-center');
    } else {
      left.classList.remove('text-center');
    }
  }
  
  var media1 = window.matchMedia("(max-width: 645px)")
  myFunction(media1) // Call listener function at run time
  media1.addListener(myFunction)