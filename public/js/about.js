const right=document.querySelector('.right');
function myFunction(media1){
    if (media1.matches) {
        right.classList.add('text-center');
    } else {
        right.classList.remove('text-center')
    }
}
const media1=window.matchMedia("(max-width:755px)");
myFunction(media1);
media1.addListener(myFunction);