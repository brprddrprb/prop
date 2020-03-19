const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const propiedad = propiedades.find( propiedad => propiedad.id == id )
const galeria = document.querySelector('.gallery-content')

// Agregar imagenes a galeria
function agregarImagenesAgaleria() {
  let markup = ''
  propiedad.carousel.forEach( img => markup += `
  <div name="gallery" class="item">
    <div class="image image-area adaptative scoped">
      <img src=${img} alt="">
    </div>
  </div>
  `)
  galeria.innerHTML = markup
}
agregarImagenesAgaleria()

// Setear texto de atributos propiedad
function atrSetter(cssSelector, attr) {
  document.querySelector(cssSelector).append(propiedad[attr])
}

// Precio
atrSetter('.price', 'valor')

// Direccion
atrSetter('.title-area h2', 'direccion')

// Tipo de propiedad
atrSetter('.property-type', 'tipo')

// Barrio
atrSetter('.title-area > h4 > span:nth-child(2)', 'barrio')

// Zona
atrSetter('.title-area > h4', 'zona')

// Descripcion
atrSetter('.desc > div > main > p', 'descripcion')

// Galeria
const btnGalleryNext = document.querySelector('.control-next-btn');
const btnGalleryPrev = document.querySelector('.control-prev-btn');
btnGalleryNext.addEventListener('click', goToNext)
btnGalleryPrev.addEventListener('click', goToPrev)

const elements = Array.from(document.getElementsByName('gallery'))
elements[0].classList.add("active")


function goToPrev() {
  const max =  elements.length - 1

  let currentPos = elements.findIndex(x => x.classList.contains('active'))
  if (currentPos == -1) currentPos = 0
  const previousPos = (currentPos == 0) ? max : currentPos - 1
  const followingPos = (currentPos == max) ? 0 : currentPos + 1

  const previous = elements[previousPos],
        current = elements[currentPos],
        following = elements[followingPos]

  // previous
  previous.classList.remove('prepared', 'before', 'active')
  // current
  current.classList.add('before')
  current.classList.remove('prepared', 'active')
  // folowing
  following.classList.add('active')
  following.classList.remove('prepared', 'after')
}

function goToNext() {
  const max =  elements.length - 1

  let currentPos = elements.findIndex(x => x.classList.contains('active'))
  if (currentPos == -1) currentPos = 0
  const previousPos = (currentPos == 0) ? max : currentPos - 1
  const followingPos = (currentPos == max) ? 0 : currentPos + 1

  const previous = elements[previousPos],
        current = elements[currentPos],
        following = elements[followingPos]

  // folowing
  following.classList.remove('prepared', 'after', 'active')
  // current
  current.classList.add('after')
  current.classList.remove('prepared', 'active')
  // previous
  previous.classList.add('active')
  previous.classList.remove('prepared', 'before')
}
