const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const propiedad = propiedades.find( propiedad => propiedad.id == id )

// Precio
const priceEl = document.querySelector('.price')
priceEl.append(propiedad.valor)