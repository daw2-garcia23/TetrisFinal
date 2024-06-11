import { juego } from './juego'

export const home = {
  template: 
    `
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
    document.querySelector('#btnJuego').addEventListener('click', () => {
      document.querySelector('main').innerHTML = juego.template
      juego.script()
    })
  }
}
