import { home } from '../vistas/home'
import { juego } from '../vistas/juego'
import { ranking } from '../vistas/ranking'

export const header = {
  template: 
    `
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
    document.querySelector('#vistaHome').addEventListener('click', () => {
      document.querySelector('main').innerHTML = home.template
      home.script()
    })

    document.querySelector('#vistaRanking').addEventListener('click', () => {
      document.querySelector('main').innerHTML = ranking.template
      ranking.script()
    })

    document.querySelector('#vistaJuego').addEventListener('click', () => {
      document.querySelector('main').innerHTML = juego.template
      juego.script()
    })
  }
}
