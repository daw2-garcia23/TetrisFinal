import { panel } from '../componentes/panel'

export const juego = {
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
    panel.nuevaPieza = panel.crearNuevaPieza()
    panel.insertarPieza()
    panel.pintaPanel()
    panel.controlTeclas()
    panel.iniciarMovimiento()
  }
}
