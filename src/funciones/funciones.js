
import { partidas } from '../componentes/partidas'
export const buscador = (texto) => {
  console.log('Nick: ', texto)
  texto = texto.toUpperCase()
  const partidasCoincidentes = partidas.filter((partida) => partida.nick.includes(texto))
  let tabla = ''
  if (partidasCoincidentes.length > 0) {
    partidasCoincidentes.forEach(index => {
      tabla +=
          `<tr>
              <td><img width="50" src="${index.avatar}"></td>
              <td>${index.nick}</td>
              <td>${index.puntos}</td>
              <td>${index.fecha}</td>
          </tr>`
    })
  }
  document.querySelector('#tbody').innerHTML = tabla
  return partidasCoincidentes
}
export const orden = (campo, tipo) => {
  let tabla = ''
  switch (campo) {
    case 'nick':
      partidas.sort((a, b) => a.nick.localeCompare(b.nick, 'es', { sensitivity: 'base' }))
      partidas.forEach(index => {
        tabla +=
            `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`
      })
      document.querySelector('#tbody').innerHTML = tabla

      if (tipo === 'down') {
        document.querySelector('#campoNick').classList.add('bi-arrow-down-square')

        document.querySelector('#campoNick').classList.remove('bi-arrow-up-square')

        document.querySelector('#campoPoints').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoPoints').classList.add('bi-arrow-up-square')
        document.querySelector('#campoDate').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoDate').classList.add('bi-arrow-up-square')
      }

      return partidas
    case 'points':
      partidas.sort((a, b) => b.puntos - a.puntos)
      partidas.forEach(index => {
        tabla +=
            `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`
      })

      document.querySelector('#tbody').innerHTML = tabla

      if (tipo === 'down') {
        document.querySelector('#campoPoints').classList.add('bi-arrow-down-square')

        document.querySelector('#campoPoints').classList.remove('bi-arrow-up-square')

        document.querySelector('#campoNick').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoNick').classList.add('bi-arrow-up-square')
        document.querySelector('#campoDate').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoDate').classList.add('bi-arrow-up-square')
      }

      return partidas
    default: 
      partidas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
      partidas.forEach(index => {
        tabla +=
            `<tr>
                <td><img width="50" src="${index.avatar}"></td>
                <td>${index.nick}</td>
                <td>${index.puntos}</td>
                <td>${index.fecha}</td>
            </tr>`
      })

      document.querySelector('#tbody').innerHTML = tabla

      if (tipo === 'down') {
        document.querySelector('#campoDate').classList.add('bi-arrow-down-square')

        document.querySelector('#campoDate').classList.remove('bi-arrow-up-square')

        document.querySelector('#campoNick').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoNick').classList.add('bi-arrow-up-square')
        document.querySelector('#campoPoints').classList.remove('bi-arrow-down-square')
        document.querySelector('#campoPoints').classList.add('bi-arrow-up-square')
      }

      return partidas
  }
}

export const modificaNick = (nick) => {
  let textoDefinitivo = nick
  textoDefinitivo = textoDefinitivo.toUpperCase()

  return textoDefinitivo
}

export const modificaData = (fecha) => {
  const meses = [
    'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
    'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
  ]
  const dia = fecha.getDate()
  const mes = meses[fecha.getMonth()]
  const año = fecha.getFullYear()
  return `${dia} ${mes} ${año}`
}

const dades = {
  partidas: [
    {
      avatar: 'https://www.svgrepo.com/show/81103/avatar.svg',
      nick: 'Manolo',
      puntos: 250,
      fecha: '27 Enero 2023'
    },
    {
      avatar: 'https://www.svgrepo.com/show/81103/avatar.svg',
      nick: 'Carlos',
      puntos: 200,
      fecha: '11 Abril 2023'
    }],
  ranking: [
    {
      avatar: 'imagen1.png',
      nick: 'MANOLO',
      puntuacion: 124561
    },
    {
      avatar: 'imagen2.png',
      nick: 'PEDRA',
      puntuacion: 1561
    }]
}

const ls = {
  setDades: function (dades) {
    const dadesJSON = JSON.stringify(dades)
    localStorage.setItem('tetris_datos', dadesJSON)
    return true
  },
  getDades: function () {
    const tetrisDades = localStorage.getItem('tetris_datos')
    if (tetrisDades) {
      return JSON.parse(tetrisDades)
    } else {
      return {}
    }
  }
}

ls.setDades(dades)
ls.getDades()

export function registrePartidas (partida) {
  const datos = ls.getDades()
  datos.partidas.push(partida) 
  ls.setDades(datos) 
}
