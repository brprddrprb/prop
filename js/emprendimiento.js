const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const client = contentful.createClient({
    space: 'poqm8saqwp2m',
    accessToken: 'zwUGD7Xrba9YJCBbFg91Os5i4OmdASiPv9Rt0nbnRmg'
})

client.getEntry(id)
    .then((entry) => {
        setupHTML(entry)
    })

//
function setupHTML(entry) {

    // Set title
    document.querySelector('.titleArea h2').innerHTML += entry.fields.nombre;

    // Set address
    document.querySelector('.titleArea h4').innerHTML += entry.fields.localidad + ', ' + entry.fields.partido + '<br>' + entry.fields.direccion;

    // Set type
    document.querySelector('.type > div:nth-child(1)').innerHTML += entry.fields.tipo;

    // Set state
    document.querySelector('.prices > div:nth-child(1)').innerHTML += entry.fields.estado;

    // Set Description
    document.querySelector('.des').innerHTML += entry.fields.descripcion;

    // TODO: add tags
    // addTags(emprendimiento.tags);

    // Set atras
    document.querySelector('div.buttonsContent:nth-child(2) > button:nth-child(1)')
        .addEventListener('click', function () {
            document.location.href = 'emprendimientos.html'
        });

    // Set email
    document.querySelector('div.buttonsContent:nth-child(2) > button:nth-child(2)')
        .addEventListener('click', function () {
            document.location.href = 'mailto: ariel.sauret@gmail.com'
        });

    // Set whatsapp
    document.querySelector('button.btnWhatsapp:nth-child(4)').addEventListener('click',
        function () {
            document.location.href = 'https://wa.me/541158430937'
        });

    // Set call btn
    document.querySelector('button.btnCall:nth-child(3)').addEventListener('click',
        function () {
            document.location.href = 'tel:+541158430937'
        });

    const btnGalleryNext = document.querySelector('button.control:nth-child(4)');
    const btnGalleryPrev = document.querySelector('button.control:nth-child(3)');
    // Add img to gallery
    addGalleryImg(entry, document.querySelector('.galleryContent'));
    const elements = Array.from(document.getElementsByName('gallery'));
    btnGalleryNext.addEventListener('click', goToNext);
    btnGalleryPrev.addEventListener('click', goToPrev);


    function goToPrev() {
        const max = elements.length - 1;

        let currentPos = elements.findIndex(x => x.classList.contains('active'));
        if (currentPos === -1) currentPos = 0;
        const previousPos = (currentPos === 0) ? max : currentPos - 1;
        const followingPos = (currentPos === max) ? 0 : currentPos + 1;

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
        if (currentPos === -1) currentPos = 0;
        const previousPos = (currentPos === 0) ? max : currentPos - 1;
        const followingPos = (currentPos === max) ? 0 : currentPos + 1;

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

}


function addGalleryImg(entry, galleryContent) {
    let markup = '';
    entry.fields.imagenes.forEach(img => {
        markup += `
            <div data-v-583f8fa1="" name="gallery" class="item">
                <div data-v-0d283d01="" data-v-53ef937b="" class="image imageArea adaptative scoped" data-v-583f8fa1="">
                    <img data-v-0d283d01="" src="${'https:' + img.fields.file.url}" alt="imagen de propiedad">
                </div>
            </div>
         `
    });
    galleryContent.innerHTML = markup
}

const detalle = document.querySelector('.des');
document.querySelector('button.input')
    .addEventListener('click', toggleDescription);

function toggleDescription() {
    detalle.classList.toggle('close');
    detalle.classList.toggle('open')
}

function addTags(tags) {
    function getDisplayFlex(tagData) {
        return (tagData !== '' ? 'flex' : 'none')
    }

    function getDisplayBlock(tagData) {
        return (tagData !== '' ? 'block' : 'none')
    }

    const tagsDev = document.querySelector('ul.tags.dev');
    let markup = '';
    tags.forEach(tag => {
        markup = `
      <li data-v-7f9ee979="">
          <div data-v-2c0f8a5b="" data-v-7f9ee979="" class="content dev" style="display: flex;">
              <span data-v-8c00fd2c="" data-v-2c0f8a5b="" title="" class="icon icon" style="display:
                ${getDisplayFlex(tag.icon)};">
                ${iconos[tag.icon]}
              </span>
              <span data-v-2c0f8a5b="" class="valueTag" style="display: ${getDisplayBlock(tag.valueTag)};">${tag.valueTag}</span>
              <span data-v-2c0f8a5b="" class="value"><small data-v-2c0f8a5b="">${tag.value}</small></span>
              <span data-v-2c0f8a5b="" class="description">${tag.description}</span>
          </div>
      </li>`;
        tagsDev.innerHTML += markup
    });
}