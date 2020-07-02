function init() {
    fetch('emprendimientos.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (emprendimientos) {
            const listadoPropiedades = document.getElementsByName('listDevelopments')[0];
            let markup = '';

            emprendimientos.forEach(emprendimiento => {
                markup = `
                    <a href="emprendimiento.html?id=${emprendimiento.id}">
                        <div data-v-9e3e1fba="" class="item cols-1 add">
                            <div data-v-114ae90b="" data-v-29e75895="" class="cardArea default small" model="responsive"
                                 data-v-9e3e1fba="">
                                <div data-v-114ae90b="" class="cardContainer">
                                    <div data-v-114ae90b="" class="display"><img data-v-114ae90b=""
                                                                                 src=${emprendimiento.galeria[0]}
                                                                                 alt="Deheza 1670"></div>
                                    <div data-v-114ae90b="" class="info">
                                        <h4 data-v-114ae90b=""><span data-v-114ae90b="" title="Ubicación" class="icon"><svg
                                                fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="icon__svg">
                                      <path d="M12,23.2c-2,0-8.4-9.2-8.6-14.4C3.3,7,4.1,5.1,5.5,3.6C7.2,1.8,9.6,0.8,12,0.8c2.4,0,4.8,1,6.5,2.8
                    c1.5,1.5,2.2,3.4,2.1,5.3C20.4,13.5,14.2,23.2,12,23.2z M12,2.3c-2,0-3.9,0.8-5.3,2.3C5.5,5.8,4.8,7.3,4.9,8.9
                    C5,11,6.2,14.1,8.3,17.2c0.7,1.2,1.6,2.3,2.5,3.4c0.3,0.4,0.6,0.7,1,1l0.2,0.1l1.1-1.1c0.9-1.1,1.8-2.2,2.6-3.4c2-3,3.3-6.2,3.4-8.3
                    c0-1.5-0.6-3.1-1.8-4.3C15.9,3.1,14,2.3,12,2.3z M12,12.7c-1.9,0-3.4-1.5-3.4-3.4C8.6,7.5,10.1,6,12,6s3.4,1.5,3.4,3.4
                    C15.3,11.2,13.9,12.7,12,12.7z M12,7.5c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.8,1.9,1.9c1,0,1.9-0.8,1.9-1.9S13,7.5,12,7.5z">
                                      </path>
                                    </svg></span><strong data-v-114ae90b="">${emprendimiento.partido},&nbsp;</strong>${emprendimiento.localidad}.
                                        </h4>
                                        <h3 data-v-114ae90b=""><span data-v-b75d149c="" data-v-114ae90b="" title="" class="icon type"><svg
                                                width="24" height="24" viewBox="0 0 24 24" class="icon__svg">
                                      <g>
                                        <path
                                                d="M-377.549,21.127h-1.038a1.323,1.323,0,0,0,.081-.442V5.944a1.342,1.342,0,0,0-1.341-1.34h-12.522a1.342,1.342,0,0,0-1.341,1.34v14.74a1.323,1.323,0,0,0,.08.442h-.976a.447.447,0,0,0-.447.447.447.447,0,0,0,.447.446h2.159c.026,0,.051.007.077.007h12.522c.04,0,.078-.008.118-.012.01,0,.019.006.03.006h2.15a.447.447,0,0,0,.447-.446A.447.447,0,0,0-377.549,21.127Zm-10.174,0V18.266h3.23v2.857Zm3.379-3.75h-3.528a.746.746,0,0,0-.745.745v3.015h-3.751a.449.449,0,0,1-.448-.448V14.667H-379.4v6.017a.449.449,0,0,1-.448.448H-383.6V18.118A.745.745,0,0,0-384.344,17.373Zm.476-7.267v3.668h-4.058V10.106Zm-4.058-.893V5.5h4.058V9.213Zm8.527,4.561h-3.575V10.106h3.575Zm-9.42,0h-4V10.106h4Zm9.42-7.83V9.213h-3.575V5.5h3.127A.448.448,0,0,1-379.4,5.944ZM-392.369,5.5h3.549V9.213h-4V5.944A.448.448,0,0,1-392.369,5.5Z"
                                                transform="translate(398.026 -1.66)" fill="currentColor"></path>
                                      </g>
                                    </svg></span><strong data-v-114ae90b="">${emprendimiento.direccion}</strong></h3>
                                    </div>
                                    <span data-v-114ae90b="" title="" class="icon arrow"><svg fill="currentColor" width="24"
                                                                                              height="24" viewBox="0 0 24 24"
                                                                                              class="icon__svg">
                                  <g>
                                    <path
                                            d="M6.864,14.619.342,8.1a.829.829,0,0,1-.232-.269A.824.824,0,0,1,.4,6.71L6.864.241A.825.825,0,0,1,8.031,1.408L2.849,6.59H16.774a.825.825,0,0,1,0,1.65H2.819l5.212,5.213a.825.825,0,1,1-1.166,1.166Z"
                                            transform="translate(20.599 19.86) rotate(180)"></path>
                                  </g>
                                </svg></span>
                                </div>
                            </div>
                        </div>
                    </a>
      `;
                listadoPropiedades.innerHTML += markup
            });
        })
}

init();