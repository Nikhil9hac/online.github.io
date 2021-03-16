
// creating partial
const partial1=` <div class="container-fluid">
<i class="fas fa-snowflake"></i> <a class="navbar-brand temperature" href="#">Temperature</a>  <i class="fas fa-snowflake"></i>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-material">
                <li class="nav-item">
                <a class="another-page" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="another-page" href="/weather">Weather</a>
                </li>
                <li class="nav-item">
                <a class="another-page" href="/about">About</a>
                </li>
                </ul>
                
                </div>
                
                </div>`;

const partial2=`<p id="end">created with ❤️ by nikhil 🚀</p>`
// targeting the Element
const nav=document.querySelector('.partial1');
const footer=document.querySelector('.partial2');
nav.innerHTML=partial1;
footer.innerHTML=partial2;