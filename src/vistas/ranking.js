import { partidas } from '../componentes/partidas'
import { buscador, orden } from '../funciones/funciones'

export const ranking = {
  template: 
    `
    <div id="info">
        <div id="tablaRanking" class="m-5 p-5 bg-dark"></div>
        <div id="tablaPartidas" class="m-5 p-5 bg-dark"></div>
    </div>
    `,
  script: () => {
    function pintaPartida (partidas) {
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
            `
      partidas.forEach(element => {
        tabla += `<tr>
                <td><img width="50" src="${element.avatar}"></td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
                </tr>`
      })

      tabla += `
            </tbody>
            <tfoot></tfoot>
            </table> 
            `
      document.querySelector('#tablaPartidas').innerHTML = tabla
    }
    function pintaRanking () {
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
            `
      document.querySelector('#tablaRanking').innerHTML = rank
    }
    pintaPartida(partidas)
    pintaRanking()

    const btnBuscar = document.querySelector('#button-addon2')
    btnBuscar.addEventListener('click', function () {
      let texto = document.querySelector('#textoBuscar')
      texto = texto.value
      buscador(texto)
    })
    const btnBorrar = document.querySelector('#button-addon1')
    btnBorrar.addEventListener('click', function () {
      document.querySelector('#textoBuscar').value = ''
      pintaPartida(partidas)
    })
    const iconoNick = document.querySelector('#campoNick')
    iconoNick.addEventListener('click', function () {
      orden('nick', 'down')
    })
    const iconoPoints = document.querySelector('#campoPoints')
    iconoPoints.addEventListener('click', function () {
      orden('points', 'down')
    })
    const iconoDate = document.querySelector('#campoDate')
    iconoDate.addEventListener('click', function () {
      orden('date', 'down')
    })
  }
}
