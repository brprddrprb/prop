// Random img del background home
function randomImg() {
  const img = ['img/home-a-mob@2x.jpg',
               'img/home-b-mob@2x.jpg',
               'img/home-c-mob@2x.jpg']

  document.querySelector('.home-area')
   .style.background = `url(${img[Math.floor(Math.random() * 3)]}) repeat-x transparent`
}

randomImg() 

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