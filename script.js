const animin = document.querySelector("#um")
const animout = document.querySelector("#dois")
let div = document.querySelector("div")

animin.addEventListener("click", animationin)
animout.addEventListener("click", animationout)


function animationin(){
    div.classList.remove('animate__flipOutY')
    div.classList.add('animate__flipInY')
    div.style.setProperty('--animate-duration', '2s');
}
function animationout(){
    div.classList.remove('animate__flipInY')
    div.classList.add('animate__flipOutY')
    div.style.setProperty('--animate-duration', '2s');
}