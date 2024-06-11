
import { partidas } from '../componentes/partidas'
import { panel } from '../componentes/panel'
import { modificaData, modificaNick, registrePartidas } from '../funciones/funciones'
import { juego } from './juego'
import { ranking } from './ranking'

export const guardar = {
  template:
    `
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
    document.querySelector('#save').addEventListener('click', () => {
      let name = document.querySelector('#name').value
      if (name === '' || name === null) {
        return alert('Nick obligatorio para poder guardar la partida')
      } else {
        name = modificaNick(name)
        const puntosGanados = panel.puntos 
        const fecha = new Date()
        const fechaActual = modificaData(fecha)
        const partidaGuardada = {
          avatar: 'https://www.svgrepo.com/show/81103/avatar.svg',
          nick: name,
          puntos: puntosGanados,
          fecha: fechaActual
        }
        console.log(partidaGuardada)
        registrePartidas(partidaGuardada)
        partidas.push(partidaGuardada)
        document.querySelector('main').innerHTML = ranking.template
        ranking.script()
      }
    })
    document.querySelector('#notSave').addEventListener('click', () => {
      document.querySelector('main').innerHTML = juego.template
      juego.script()
    })
  }
}
