import { ModeloPieza } from '../funciones/clases'
import { models } from '../componentes/modelos'
import { guardar } from '../vistas/guardar'

export const panel = {
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
    const IDpanel = document.querySelector('#panel')
    IDpanel.innerHTML = ''
    const colorBG = models[panel.nuevaPieza.modelo].color
    for (let fila = 0; fila < panel.matriz.length - 1; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'

      for (let columna = 1; columna < panel.matriz[fila].length - 1; columna++) {
        let divCeldas = ''
        if (panel.matriz[fila][columna] === 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>'
        } else if (panel.matriz[fila][columna] === 1) {
          divCeldas += `<div class="celda ${colorBG} border-white"></div>`
        }
        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpanel.innerHTML += divFilas
    }
  },
  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7)
    let ancho = models[aleatorioModelo].matriz[0]
    ancho = ancho[0].length
    let aleatorioX
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10) + 1
        break
      case 2:
        aleatorioX = Math.floor(Math.random() * 9) + 1
        break
      case 3:
        aleatorioX = Math.floor(Math.random() * 8) + 1
        break
      case 4:
        aleatorioX = Math.floor(Math.random() * 7) + 1
        break
    }
    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)
    console.log('pieza ', pieza)
    return pieza
  },
  nuevaPieza: null,
  insertarPieza: () => {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.nuevaPieza.matriz[y][x] === 1) {
          panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = panel.nuevaPieza.matriz[y][x]
        }
      }
    }

    panel.pintaPanel()
  },
  puntos: 0,
  controlTeclas: () => {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < (panel.matriz.length - 1)) {
            panel.moverDra()
            if ((panel.nuevaPieza.x + panel.nuevaPieza.longitud) <= 10) { 
              panel.puntos += 10
              document.querySelector('#puntos').innerHTML = panel.puntos
            }
          }
          break
        case 'ArrowLeft':
          if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < (panel.matriz.length - 1)) {
            panel.moverIzq()
            if (panel.nuevaPieza.x > 1) { 
              panel.puntos += 10
              document.querySelector('#puntos').innerHTML = panel.puntos
            }
          }
          break
        case 'ArrowDown':
          panel.bajar()
          if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < (panel.matriz.length - 1)) {
            panel.puntos += 10
            document.querySelector('#puntos').innerHTML = panel.puntos
          } else {
            if (panel.nuevaPieza.y === (panel.matriz.length - 1)) { 
              panel.puntos += 50
              document.querySelector('#puntos').innerHTML = panel.puntos
            }
          }
          break
        case 'ArrowUp':
          panel.borrarPieza()
          if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < (panel.matriz.length - 1)) {
            panel.nuevaPieza.girar()
            panel.puntos += 20
            document.querySelector('#puntos').innerHTML = panel.puntos
          }
          panel.insertarPieza()
          break
      }
    })
  },
  borrarPieza: () => {
    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.nuevaPieza.matriz[y][x] === 1) {
          panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0
        }
      }
    }
  },
  moverDra: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if ((panel.nuevaPieza.x + panel.nuevaPieza.longitud) <= 10) {
        panel.nuevaPieza.x++
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  moverIzq: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if (panel.nuevaPieza.x > 1) {
        panel.nuevaPieza.x--
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  bajar: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < (panel.matriz.length - 1)) {
        panel.nuevaPieza.y++
      }
      panel.insertarPieza()
      panel.pintaPanel()
      if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) === panel.matriz.length - 1) {
        document.querySelector('main').innerHTML = guardar.template
        guardar.script()
      }
    }
  },
  iniciarMovimiento: () => {
    const intervalID = setInterval(() => {
      panel.bajar()
      if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) === panel.matriz.length - 1) {
        clearInterval(intervalID) 
      }
    }, 1000)
  }

}
