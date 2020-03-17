const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const propiedad = propiedades.find( propiedad => propiedad.id == id )

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