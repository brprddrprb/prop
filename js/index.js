// Random img del background home
const bg = document.querySelector('.home-area')
const imgMobile = [
              'img/home-a-mob@2x.jpg',
              'img/home-b-mob@2x.jpg',
              'img/home-c-mob@2x.jpg'
            ];
const imgWide = [
                'img/home-a.jpg',
                'img/home-b.jpg',
                'img/home-a.jpg'
                ];
const mobileImg = getRandomImg(imgMobile)
const wideImg = getRandomImg(imgWide)
const windowMatch = window.matchMedia("(max-width: 640px)")

function getRandomImg(imgArray) {
    return imgArray[Math.floor(Math.random() * 3)]
}

function setImg() {
    windowMatch.matches ? bg.style.backgroundImage = `url(${mobileImg})`
        : bg.style.backgroundImage = `url(${wideImg})`
}

setImg()

window.addEventListener("resize", setImg)

// Estado inicial
// transition: all 0.15s ease-in-out 0s; transform: translate(0px);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const carousel = document.querySelector('.carousel')
const carouselContent = document.querySelector('.carousel-content')
const posiciones = [0, -115.5, -243]
var indice = 0

// Setear propiedades iniciales
carouselContent.style.transition = 'all 0.15s ease-in-out 0s'
carouselContent.style.transform = `translate(${posiciones[0]}px)`


const mc = new Hammer(carousel)

mc.on('panleft panright', async function(ev) {
  indice = indice%2
  if(ev.type === 'panleft') {
    indice += 1
    carouselContent.style.transform = `translate(${posiciones[indice]}px)`
  }
  if(ev.type === 'panright') {
    indice -= 1
    carouselContent.style.transform = `translate(${posiciones[0]})`
  }
  console.log(ev.type + " gesto detectado")
})