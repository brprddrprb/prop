const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

main()

function main() {
  fetch('../emprendimientos.json')
    .then(res => res.json())
    .then(emprendimientos => {
      const emprendimiento = emprendimientos[id - 1]

      // Set title
      document.querySelector('.titleArea h2').innerHTML += emprendimiento.nombre

      // Set address
      document.querySelector('.titleArea h4').innerHTML += emprendimiento.localidad + ', ' + emprendimiento.partido + '<br>' + emprendimiento.direccion

      // Set type
      document.querySelector('.type > div:nth-child(1)').innerHTML += emprendimiento.tipo

      // Set state
      document.querySelector('.prices > div:nth-child(1)').innerHTML += emprendimiento.estado

      // Set Description
      document.querySelector('.des').innerHTML += emprendimiento.descripcion

      addTags(emprendimiento.tags)

      // Set atras
      document.querySelector('div.buttonsContent:nth-child(2) > button:nth-child(1)')
        .addEventListener('click', function () { document.location.href = 'emprendimientos.html' })

      // Set email
      document.querySelector('div.buttonsContent:nth-child(2) > button:nth-child(2)')
        .addEventListener('click', function () { document.location.href = 'mailto: ariel.sauret@gmail.com' })

      // Set whatsapp
      document.querySelector('button.btnWhatsapp:nth-child(4)').addEventListener('click',
        function () { document.location.href = 'https://wa.me/541158430937' })

      // Set call btn
      document.querySelector('button.btnCall:nth-child(3)').addEventListener('click',
        function () { document.location.href = 'tel:+541158430937' })
    })
}

const detalle = document.querySelector('.des')
document.querySelector('button.input')
  .addEventListener('click', toggleDescription)

function toggleDescription() {
  detalle.classList.toggle('close')
  detalle.classList.toggle('open')
}

function addTags(tags) {
  function getDisplayFlex(tagData) {
    return (tagData != '' ? 'flex' : 'none')
  }
  function getDisplayBlock(tagData) { 
    return (tagData != '' ? 'block' : 'none')
  }
  const tagsDev = document.querySelector('ul.tags.dev')
  let markup = ''
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
      <span data-v-2c0f8a5b="" class="description">${tag.description}</span></div>
      </li>`
  tagsDev.innerHTML += markup
});
}