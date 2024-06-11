(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const models = [
  {
    nombre: "palo",
    color: "bg-primary bg-gradient",
    matriz: [
      [
        [1],
        [1],
        [1],
        [1]
      ],
      [[1, 1, 1, 1]],
      [
        [1],
        [1],
        [1],
        [1]
      ],
      [[1, 1, 1, 1]]
    ]
  },
  {
    nombre: "primeraEle",
    color: "bg-info bg-gradient",
    matriz: [
      [
        [1, 0],
        [1, 0],
        [1, 1]
      ],
      [
        [1, 1, 1],
        [1, 0, 0]
      ],
      [
        [1, 1],
        [0, 1],
        [0, 1]
      ],
      [
        [0, 0, 1],
        [1, 1, 1]
      ]
    ]
  },
  {
    nombre: "segundaEle",
    color: "bg-success bg-gradient",
    matriz: [
      [
        [0, 1],
        [0, 1],
        [1, 1]
      ],
      [
        [1, 0, 0],
        [1, 1, 1]
      ],
      [
        [1, 1],
        [1, 0],
        [1, 0]
      ],
      [
        [1, 1, 1],
        [0, 0, 1]
      ]
    ]
  },
  {
    nombre: "piramide",
    color: "bg-danger bg-gradient",
    matriz: [
      [
        [0, 1, 0],
        [1, 1, 1]
      ],
      [
        [1, 0],
        [1, 1],
        [1, 0]
      ],
      [
        [1, 1, 1],
        [0, 1, 0]
      ],
      [
        [0, 1],
        [1, 1],
        [0, 1]
      ]
    ]
  },
  {
    nombre: "primeraZeta",
    color: "bg-success bg-gradient",
    matriz: [
      [
        [0, 1, 1],
        [1, 1, 0]
      ],
      [
        [1, 0],
        [1, 1],
        [0, 1]
      ],
      [
        [0, 1, 1],
        [1, 1, 0]
      ],
      [
        [1, 0],
        [1, 1],
        [0, 1]
      ]
    ]
  },
  {
    nombre: "segundaZeta",
    color: "bg-danger-warning bg-gradient",
    matriz: [
      [
        [1, 1, 0],
        [0, 1, 1]
      ],
      [
        [0, 1],
        [1, 1],
        [1, 0]
      ],
      [
        [1, 1, 0],
        [0, 1, 1]
      ],
      [
        [0, 1],
        [1, 1],
        [1, 0]
      ]
    ]
  },
  {
    nombre: "cuadrao",
    color: "bg-primary-warning bg-gradient",
    matriz: [
      [
        [1, 1],
        [1, 1]
      ],
      [
        [1, 1],
        [1, 1]
      ],
      [
        [1, 1],
        [1, 1]
      ],
      [
        [1, 1],
        [1, 1]
      ]
    ]
  }
];
class ModeloPieza {
  constructor(modelo, x = 0, y = 0, angulo = 0) {
    this.modelo = modelo;
    this.angulo = angulo;
    this.matriz = models[this.modelo].matriz[this.angulo];
    this.x = x;
    this.y = y;
    this.longitud = this.matriz[0].length;
    this.altura = this.matriz.length;
  }
  girar() {
    this.angulo = this.angulo + 1;
    if (this.angulo > 3) {
      this.angulo = 0;
    }
    this.matriz = models[this.modelo].matriz[this.angulo];
    this.longitud = this.matriz[0].length;
    this.altura = this.matriz.length;
  }
}
const partidas = [
  {
    avatar: "https://www.svgrepo.com/show/81103/avatar.svg",
    nick: "Joel",
    puntos: 120,
    fecha: "07 Mayo de 2024"
  },
  {
    avatar: "https://www.svgrepo.com/show/81103/avatar.svg",
    nick: "Carlos",
    puntos: 320,
    fecha: "17 Enero de 2024"
  },
  {
    avatar: "https://www.svgrepo.com/show/81103/avatar.svg",
    nick: "José Luis",
    puntos: 1245,
    fecha: "4 Abril de 2023"
  }
];
const buscador = (texto) => {
  console.log("Nick: ", texto);
  texto = texto.toUpperCase();
  const partidasCoincidentes = partidas.filter((partida) => partida.nick.includes(texto));
  let tabla = "";
  if (partidasCoincidentes.length > 0) {
    partidasCoincidentes.forEach((index) => {
      tabla += `<tr>
              <td><img width="50" src="${index.avatar}"></td>
              <td>${index.nick}</td>
              <td>${index.puntos}</td>
              <td>${index.fecha}</td>
          </tr>`;
    });
  }
  document.querySelector("#tbody").innerHTML = tabla;
  return partidasCoincidentes;
};
const orden = (campo, tipo) => {
  let tabla = "";
  switch (campo) {
    case "nick":
      partidas.sort((a, b) => a.nick.localeCompare(b.nick, "es", { sensitivity: "base" }));
      partidas.forEach((index) => {
        tabla += `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`;
      });
      document.querySelector("#tbody").innerHTML = tabla;
      if (tipo === "down") {
        document.querySelector("#campoNick").classList.add("bi-arrow-down-square");
        document.querySelector("#campoNick").classList.remove("bi-arrow-up-square");
        document.querySelector("#campoPoints").classList.remove("bi-arrow-down-square");
        document.querySelector("#campoPoints").classList.add("bi-arrow-up-square");
        document.querySelector("#campoDate").classList.remove("bi-arrow-down-square");
        document.querySelector("#campoDate").classList.add("bi-arrow-up-square");
      }
      return partidas;
    case "points":
      partidas.sort((a, b) => b.puntos - a.puntos);
      partidas.forEach((index) => {
        tabla += `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`;
      });
      document.querySelector("#tbody").innerHTML = tabla;
      if (tipo === "down") {
        document.querySelector("#campoPoints").classList.add("bi-arrow-down-square");
        document.querySelector("#campoPoints").classList.remove("bi-arrow-up-square");
        document.querySelector("#campoNick").classList.remove("bi-arrow-down-square");
        document.querySelector("#campoNick").classList.add("bi-arrow-up-square");
        document.querySelector("#campoDate").classList.remove("bi-arrow-down-square");
        document.querySelector("#campoDate").classList.add("bi-arrow-up-square");
      }
      return partidas;
    default:
      partidas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      partidas.forEach((index) => {
        tabla += `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`;
      });
      document.querySelector("#tbody").innerHTML = tabla;
      if (tipo === "down") {
        document.querySelector("#campoDate").classList.add("bi-arrow-down-square");
        document.querySelector("#campoDate").classList.remove("bi-arrow-up-square");
        document.querySelector("#campoNick").classList.remove("bi-arrow-down-square");
        document.querySelector("#campoNick").classList.add("bi-arrow-up-square");
        document.querySelector("#campoPoints").classList.remove("bi-arrow-down-square");
        document.querySelector("#campoPoints").classList.add("bi-arrow-up-square");
      }
      return partidas;
  }
};
const modificaNick = (nick) => {
  let textoDefinitivo = nick;
  textoDefinitivo = textoDefinitivo.toUpperCase();
  return textoDefinitivo;
};
const modificaData = (fecha) => {
  const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
  ];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  return `${dia} ${mes} ${año}`;
};
const dades = {
  partidas: [
    {
      avatar: "https://www.svgrepo.com/show/81103/avatar.svg",
      nick: "Manolo",
      puntos: 250,
      fecha: "27 Enero 2023"
    },
    {
      avatar: "https://www.svgrepo.com/show/81103/avatar.svg",
      nick: "Carlos",
      puntos: 200,
      fecha: "11 Abril 2023"
    }
  ],
  ranking: [
    {
      avatar: "imagen1.png",
      nick: "MANOLO",
      puntuacion: 124561
    },
    {
      avatar: "imagen2.png",
      nick: "PEDRA",
      puntuacion: 1561
    }
  ]
};
const ls = {
  setDades: function(dades2) {
    const dadesJSON = JSON.stringify(dades2);
    localStorage.setItem("tetris_datos", dadesJSON);
    return true;
  },
  getDades: function() {
    const tetrisDades = localStorage.getItem("tetris_datos");
    if (tetrisDades) {
      return JSON.parse(tetrisDades);
    } else {
      return {};
    }
  }
};
ls.setDades(dades);
ls.getDades();
function registrePartidas(partida) {
  const datos = ls.getDades();
  datos.partidas.push(partida);
  ls.setDades(datos);
}
const ranking = {
  template: `
    <div id="info">
        <div id="tablaRanking" class="m-5 p-5 bg-dark"></div>
        <div id="tablaPartidas" class="m-5 p-5 bg-dark"></div>
    </div>
    `,
  script: () => {
    function pintaPartida(partidas2) {
      let tabla = `
            <h2 class="text-center text-light">Partidas</h2>
            <div class="input-group mb-3">
            <input
                id="textoBuscar"
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Buscador"
                aria-describedby="button-addon2"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
            >
              
            </button>
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                <i class="bi bi-search"></i>
            </button>
            </div>
            <table class="table table-dark">
            <theader>
                <tr>
                <td></td>
                <td>Nick <i id="campoNick" class="bi bi-arrow-up-square"></i></td>
                <td>Puntuación <i id="campoPoints" class="bi bi-arrow-up-square"></i></td>
                <td>Fecha <i id="campoDate" class="bi bi-arrow-up-square"></i></td>
                </tr>
            </theader>
            <tbody id="tbody">
            `;
      partidas2.forEach((element) => {
        tabla += `<tr>
                <td><img width="50" src="${element.avatar}"></td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
                </tr>`;
      });
      tabla += `
            </tbody>
            <tfoot></tfoot>
            </table> 
            `;
      document.querySelector("#tablaPartidas").innerHTML = tabla;
    }
    function pintaRanking() {
      const rank = `
            <h2 class="text-center text-light">Ranking</h2>
            <table class="table table-dark align-middle">
            <theader>
                <tr class="bg-dark">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </theader>
            <tbody>
                <tr>
                    <td class="fs-2">1</td>
                    <td><img width="50" src="https://www.svgrepo.com/show/81103/avatar.svg" alt="avatar" /></td>
                    <td>Joel</td>
                    <td>666</td>
                </tr>
                <tr>
                    <td class="fs-2">2</td>
                    <td><img width="50" src="https://www.svgrepo.com/show/81103/avatar.svg" alt="avatar" /></td>
                    <td>Joel</td>
                    <td>666</td>
                </tr>
                <tr>
                    <td class="fs-2">3</td>
                    <td><img width="50" src="https://www.svgrepo.com/show/81103/avatar.svg" alt="avatar" /></td>
                    <td>Joel</td>
                    <td>666</td>
                </tr>
            </tbody>
            <tfoot></tfoot>
            </table>
            `;
      document.querySelector("#tablaRanking").innerHTML = rank;
    }
    pintaPartida(partidas);
    pintaRanking();
    const btnBuscar = document.querySelector("#button-addon2");
    btnBuscar.addEventListener("click", function() {
      let texto = document.querySelector("#textoBuscar");
      texto = texto.value;
      buscador(texto);
    });
    const btnBorrar = document.querySelector("#button-addon1");
    btnBorrar.addEventListener("click", function() {
      document.querySelector("#textoBuscar").value = "";
      pintaPartida(partidas);
    });
    const iconoNick = document.querySelector("#campoNick");
    iconoNick.addEventListener("click", function() {
      orden("nick", "down");
    });
    const iconoPoints = document.querySelector("#campoPoints");
    iconoPoints.addEventListener("click", function() {
      orden("points", "down");
    });
    const iconoDate = document.querySelector("#campoDate");
    iconoDate.addEventListener("click", function() {
      orden("date", "down");
    });
  }
};
const guardar = {
  template: `
    <div id="juego">
        <div class="row">
            <!-- Panel izquierda -->
            <div
                class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
            >
                <h4>Nivel: <span>1</span></h4>
                <h4>Tiempo: <span>0</span></h4>
                <h4>Lineas: <span>0</span></h4>
                <h4>Puntos: <span id="puntos">0</span></h4>
            </div>
            <!-- Panel central -->
            <div class="col-4 d-flex justify-content-center">
                <div id="cardSave" class="card shadow-lg bg-dark text-white" style="height: 280px; width: 400px;">
                    <div class="card-body p-4 text-center">
                        <h4 class="card-title text-primary">¿Quieres guardar partida?</h4>
                        <label for="name" class="card-text">Nick: </label>
                        <input type="text" class="form-control card-text fs-5 my-3" id="name" placeholder="Insertar nick">
                        <div class="d-flex justify-content-center mt-4">
                            <a id="notSave" href="#" class="btn btn-secondary me-3 fs-5">No guardar</a>
                            <a id="save" href="#" class="btn btn-primary fs-5">Guardar</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Panel derecha -->
            <div class="col-4 d-flex flex-column justify-content-start align-items-center p-5">
                <div id="piezaSiguiente">
                    <h4>Pieza siguiente:</h4>
                    <div class="piezaSiguiente m-2">
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                        </div>
                    </div>
                    <div class="piezaSiguiente m-2">
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                        </div>
                    </div>
                    <div class="piezaSiguiente m-2">
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                            <div class="celda bg-primary bg-gradient border-dark"></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="piezaGuardada">
                    <h4>Pieza guardada:</h4>
                    <div class="piezaGuardada">
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-warning bg-gradient border-dark"></div>
                                <div class="celda bg-warning border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-warning bg-gradient border-dark"></div>
                                <div class="celda bg-warning border-secondary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
  script: () => {
    document.querySelector("#save").addEventListener("click", () => {
      let name = document.querySelector("#name").value;
      if (name === "" || name === null) {
        return alert("Nick obligatorio para poder guardar la partida");
      } else {
        name = modificaNick(name);
        const puntosGanados = panel.puntos;
        const fecha = /* @__PURE__ */ new Date();
        const fechaActual = modificaData(fecha);
        const partidaGuardada = {
          avatar: "https://www.svgrepo.com/show/81103/avatar.svg",
          nick: name,
          puntos: puntosGanados,
          fecha: fechaActual
        };
        console.log(partidaGuardada);
        registrePartidas(partidaGuardada);
        partidas.push(partidaGuardada);
        document.querySelector("main").innerHTML = ranking.template;
        ranking.script();
      }
    });
    document.querySelector("#notSave").addEventListener("click", () => {
      document.querySelector("main").innerHTML = juego.template;
      juego.script();
    });
  }
};
const panel = {
  matriz: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  pintaPanel: () => {
    const IDpanel = document.querySelector("#panel");
    IDpanel.innerHTML = "";
    const colorBG = models[panel.nuevaPieza.modelo].color;
    for (let fila = 0; fila < panel.matriz.length - 1; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">';
      for (let columna = 1; columna < panel.matriz[fila].length - 1; columna++) {
        let divCeldas = "";
        if (panel.matriz[fila][columna] === 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>';
        } else if (panel.matriz[fila][columna] === 1) {
          divCeldas += `<div class="celda ${colorBG} border-white"></div>`;
        }
        divFilas += divCeldas;
      }
      divFilas += "</div>";
      IDpanel.innerHTML += divFilas;
    }
  },
  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7);
    let ancho = models[aleatorioModelo].matriz[0];
    ancho = ancho[0].length;
    let aleatorioX;
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10) + 1;
        break;
      case 2:
        aleatorioX = Math.floor(Math.random() * 9) + 1;
        break;
      case 3:
        aleatorioX = Math.floor(Math.random() * 8) + 1;
        break;
      case 4:
        aleatorioX = Math.floor(Math.random() * 7) + 1;
        break;
    }
    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0);
    console.log("pieza ", pieza);
    return pieza;
  },
  nuevaPieza: null,
  insertarPieza: () => {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.nuevaPieza.matriz[y][x] === 1) {
          panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = panel.nuevaPieza.matriz[y][x];
        }
      }
    }
    panel.pintaPanel();
  },
  puntos: 0,
  controlTeclas: () => {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          if (panel.nuevaPieza.y + panel.nuevaPieza.altura < panel.matriz.length - 1) {
            panel.moverDra();
            if (panel.nuevaPieza.x + panel.nuevaPieza.longitud <= 10) {
              panel.puntos += 10;
              document.querySelector("#puntos").innerHTML = panel.puntos;
            }
          }
          break;
        case "ArrowLeft":
          if (panel.nuevaPieza.y + panel.nuevaPieza.altura < panel.matriz.length - 1) {
            panel.moverIzq();
            if (panel.nuevaPieza.x > 1) {
              panel.puntos += 10;
              document.querySelector("#puntos").innerHTML = panel.puntos;
            }
          }
          break;
        case "ArrowDown":
          panel.bajar();
          if (panel.nuevaPieza.y + panel.nuevaPieza.altura < panel.matriz.length - 1) {
            panel.puntos += 10;
            document.querySelector("#puntos").innerHTML = panel.puntos;
          } else {
            if (panel.nuevaPieza.y === panel.matriz.length - 1) {
              panel.puntos += 50;
              document.querySelector("#puntos").innerHTML = panel.puntos;
            }
          }
          break;
        case "ArrowUp":
          panel.borrarPieza();
          if (panel.nuevaPieza.y + panel.nuevaPieza.altura < panel.matriz.length - 1) {
            panel.nuevaPieza.girar();
            panel.puntos += 20;
            document.querySelector("#puntos").innerHTML = panel.puntos;
          }
          panel.insertarPieza();
          break;
      }
    });
  },
  borrarPieza: () => {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.nuevaPieza.matriz[y][x] === 1) {
          panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0;
        }
      }
    }
  },
  moverDra: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza();
      if (panel.nuevaPieza.x + panel.nuevaPieza.longitud <= 10) {
        panel.nuevaPieza.x++;
      }
      panel.insertarPieza();
      panel.pintaPanel();
    }
  },
  moverIzq: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza();
      if (panel.nuevaPieza.x > 1) {
        panel.nuevaPieza.x--;
      }
      panel.insertarPieza();
      panel.pintaPanel();
    }
  },
  bajar: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza();
      if (panel.nuevaPieza.y + panel.nuevaPieza.altura < panel.matriz.length - 1) {
        panel.nuevaPieza.y++;
      }
      panel.insertarPieza();
      panel.pintaPanel();
      if (panel.nuevaPieza.y + panel.nuevaPieza.altura === panel.matriz.length - 1) {
        document.querySelector("main").innerHTML = guardar.template;
        guardar.script();
      }
    }
  },
  iniciarMovimiento: () => {
    const intervalID = setInterval(() => {
      panel.bajar();
      if (panel.nuevaPieza.y + panel.nuevaPieza.altura === panel.matriz.length - 1) {
        clearInterval(intervalID);
      }
    }, 1e3);
  }
};
const juego = {
  template: `
    <div id="juego">
        <div class="row">
            <!-- Panel izquierda -->
            <div
                class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
            >
                <h4>Nivel: <span>1</span></h4>
                <h4>Tiempo: <span>0</span></h4>
                <h4>Lineas: <span>0</span></h4>
                <h4>Puntos: <span id="puntos">0</span></h4>
            </div>
            <!-- Panel central -->
            <div class="col-4 d-flex justify-content-center">
                <div id="panel" class="p-5">
                </div>
            </div>
            <!-- Panel derecha -->
            <div class="col-4 d-flex flex-column justify-content-start align-items-center p-5">
                <div id="piezaSiguiente">
                    <h4>Pieza siguiente:</h4>
                    <div class="piezaSiguiente m-2">
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-success bg-gradient border-dark"></div>
                        </div>
                    </div>
                    <div class="piezaSiguiente m-2">
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-success bg-gradient border-dark"></div>
                        </div>
                    </div>
                    <div class="piezaSiguiente m-2">
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-dark border-secondary"></div>
                        </div>
                        <div class="fila d-flex justify-content-center">
                            <div class="celda bg-success bg-gradient border-dark"></div>
                            <div class="celda bg-success bg-gradient border-dark"></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="piezaGuardada">
                    <h4>Pieza guardada:</h4>
                    <div class="piezaGuardada">
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-danger bg-gradient border-dark"></div>
                                <div class="celda bg-danger border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-danger bg-gradient border-dark"></div>
                                <div class="celda bg-danger border-secondary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
  script: () => {
    panel.nuevaPieza = panel.crearNuevaPieza();
    panel.insertarPieza();
    panel.pintaPanel();
    panel.controlTeclas();
    panel.iniciarMovimiento();
  }
};
const home = {
  template: `
    <div class="d-flex align-items-center justify-content-center">
        <img src="./img/logo.png" alt="logo" width="200" class="mt-5" />
    </div>
    <div id="intro" class="text-center p-5">
        
        <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
        
        <h2>Instruccions:</h2>
    
        <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>

        <p>Amb la fletxa avall pots girar la peça</p>
        
        <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
        
        <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
        
        <button id="btnJuego" class="class="btn btn-dark mx-2 fs-4 shadow border border-light" fs-1 mt-5">JUGAR</button>
        <hr/>
    </div>
    `,
  script: () => {
    document.querySelector("#btnJuego").addEventListener("click", () => {
      document.querySelector("main").innerHTML = juego.template;
      juego.script();
    });
  }
};
const header = {
  template: `
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
            <button id="vistaHome" class="btn btn-dark mx-2 fs-4 shadow border border-light">HOME</button>
            <button id="vistaJuego" class="btn btn-dark mx-2 fs-4 shadow border border-light">JUEGO</button>
            <button id="vistaRanking" class="btn btn-dark mx-2 fs-4 shadow border border-light">RANKING</button>
        </div>
      </div>
    </nav>
    `,
  script: () => {
    document.querySelector("#vistaHome").addEventListener("click", () => {
      document.querySelector("main").innerHTML = home.template;
      home.script();
    });
    document.querySelector("#vistaRanking").addEventListener("click", () => {
      document.querySelector("main").innerHTML = ranking.template;
      ranking.script();
    });
    document.querySelector("#vistaJuego").addEventListener("click", () => {
      document.querySelector("main").innerHTML = juego.template;
      juego.script();
    });
  }
};
document.querySelector("header").innerHTML = header.template;
header.script();
document.querySelector("main").innerHTML = home.template;
home.script();
