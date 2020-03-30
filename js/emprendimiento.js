const detalle = document.querySelector('.des')
document.querySelector('button.input')
  .addEventListener('click', toggleDescription)

  function toggleDescription() {
    detalle.classList.toggle('close')
    detalle.classList.toggle('open')
  }
