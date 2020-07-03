// const urlParams = new URLSearchParams(window.location.search)
const id = new URLSearchParams(window.location.search).get('id');
const propiedad = propiedades.find(propiedad => propiedad.id == id);
const galeria = document.querySelector('.gallery-content');
const iconos = document.querySelector('.tags');

// Galeria
const btnGalleryNext = document.querySelector('.control-next-btn');
const btnGalleryPrev = document.querySelector('.control-prev-btn');
btnGalleryNext.addEventListener('click', goToNext);
btnGalleryPrev.addEventListener('click', goToPrev);
let elements;

// agregarEtiquetas(propiedad);

const client = contentful.createClient({
    space: 'poqm8saqwp2m',
    accessToken: 'zwUGD7Xrba9YJCBbFg91Os5i4OmdASiPv9Rt0nbnRmg'
})

client.getEntry(id)
    .then((entry) => {
        agregarImagenesAgaleria(entry)
        // Precio
        document.querySelector('.price').append(numberWithCommas(entry.fields.valor))

        // Direccion
        atrSetter('.title-area h2', entry, 'direccion');

        // Tipo de propiedad
        atrSetter('.property-type', entry, 'tipo');

        // Barrio
        atrSetter('.title-area > h4 > span:nth-child(2)', entry, 'localidad');

        // Zona
        atrSetter('.title-area > h4', entry, 'partido');

        // Descripcion
        atrSetter('.desc > div > main > p', entry, 'descripcion');

        elements = Array.from(document.getElementsByName('gallery'));
        elements[0].classList.add("active");
    });


// Agregar imagenes a galeria
function agregarImagenesAgaleria(entry) {
    let markup = '';
    entry.fields.imagenes.forEach(img => markup += `
      <div name="gallery" class="item">
        <div class="image image-area adaptative scoped">
          <img src=${'https:' + img.fields.file.url} alt="">
        </div>
      </div>
      `
    );
    galeria.innerHTML = markup
}

// Setear texto de atributos propiedad
function atrSetter(cssSelector, entry, attr) {
    document.querySelector(cssSelector).append(entry.fields[attr])
}

// Tags
function agregarEtiquetas(propiedad) {
    let markup = '';
    propiedad.etiquetas.forEach(etiqueta => {
        markup += `<li>
                <div class="content prop">
                  <span class="value">${etiqueta}</span>
                </div>
              </li>`;
        iconos.innerHTML = markup
    });
}

function goToPrev() {
    const max = elements.length - 1;

    let currentPos = elements.findIndex(x => x.classList.contains('active'));
    if (currentPos == -1) currentPos = 0;
    const previousPos = (currentPos == 0) ? max : currentPos - 1;
    const followingPos = (currentPos == max) ? 0 : currentPos + 1;

    const previous = elements[previousPos],
        current = elements[currentPos],
        following = elements[followingPos];

    // previous
    previous.classList.remove('prepared', 'before', 'active');
    // current
    current.classList.add('before');
    current.classList.remove('prepared', 'active');
    // folowing
    following.classList.add('active');
    following.classList.remove('prepared', 'after')
}

function goToNext() {
    const max = elements.length - 1;

    let currentPos = elements.findIndex(x => x.classList.contains('active'));
    if (currentPos == -1) currentPos = 0;
    const previousPos = (currentPos == 0) ? max : currentPos - 1;
    const followingPos = (currentPos == max) ? 0 : currentPos + 1;

    const previous = elements[previousPos],
        current = elements[currentPos],
        following = elements[followingPos];

    // folowing
    following.classList.remove('prepared', 'after', 'active');
    // current
    current.classList.add('after');
    current.classList.remove('prepared', 'active');
    // previous
    previous.classList.add('active');
    previous.classList.remove('prepared', 'before')
}