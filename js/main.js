const client = contentful.createClient({
    space: 'poqm8saqwp2m',
    accessToken: 'zwUGD7Xrba9YJCBbFg91Os5i4OmdASiPv9Rt0nbnRmg'
})

client.getEntries({content_type: 'propiedad'})
    .then(entries => {
        const listadoPropiedades = document.getElementById('listado-propiedades')
        let innerHTML = ''
        entries.items.forEach(item => {
            let markup =
                `
                <a href="propiedad.html?id=${item.sys.id}">
                  <div class="item cols-1 add">
                    <div class="card-area">
                      <div class="card-container">
                        <div class="display">
                          <img src="${'https:' + item.fields.imagenes[0].fields.file.url}" alt="">
                        </div>
                        <div class="data">
                          <h3>${item.fields.direccion}</h3>
                          <small>${item.fields.tipo} - ${item.fields.localidad}</small>
                          <h4>$${numberWithCommas(item.fields.valor)} - Venta</h4>
                          <div class="tags">
                            <span class="tag">${item.fields.mts} m² Total</span>
                          </div>
                          <h4>${item.fields.vendido ? 'VENDIDO' : ''}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              `
            innerHTML += markup
        });
        listadoPropiedades.innerHTML = innerHTML
    })

