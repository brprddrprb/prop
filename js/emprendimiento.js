const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

main()

function main() {
  fetch('../emprendimientos.json')
    .then(res => res.json())
    .then( emprendimientos => {
      const emprendimiento = emprendimientos[id-1]
      console.log(console.log(emprendimiento))

      // Set title
      document.querySelector('.titleArea h2').innerHTML += emprendimiento.nombre

      // Set address
      document.querySelector('.titleArea h4').innerHTML += emprendimiento.localidad + ', ' + emprendimiento.partido
                                                            + '<br>' + emprendimiento.direccion

      // Set type
      document.querySelector('.type > div:nth-child(1)').innerHTML += emprendimiento.tipo

      // Set state
      document.querySelector('.prices > div:nth-child(1)').innerHTML += emprendimiento.estado
    })
}

const detalle = document.querySelector('.des')
document.querySelector('button.input')
  .addEventListener('click', toggleDescription)

  function toggleDescription() {
    detalle.classList.toggle('close')
    detalle.classList.toggle('open')
  }
