const listadoPropiedades = document.getElementById('listado-propiedades')

let innerHTML = ''

propiedades.forEach(propiedad => {
  let markup = 
  `
    <a href="propiedad.html?id=${propiedad.id}">
      <div class="item cols-1 add">
        <div class="card-area">
          <div class="card-container">
            <div class="display">
              <img src="${propiedad.imagen}" alt="">
            </div>
            <div class="data">
              <h3>${propiedad.direccion}</h3>
              <small>${propiedad.tipo} - ${propiedad.barrio}</small>
              <h4>$${propiedad.valor} - Venta</h4>
              <div class="tags">
                <span class="tag">797 m² Total</span>
              </div>
              <h4>${propiedad.vendido ? 'VENDIDO' : ''}</h4>
            </div>
          </div>
        </div>
      </div>
    </a>
  `
  innerHTML += markup
});

listadoPropiedades.innerHTML = innerHTML