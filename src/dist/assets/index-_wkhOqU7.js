(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function d(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=d(i);fetch(i.href,s)}})();const v=[{nombre:"palo",color:"bg-primary bg-gradient",matriz:[[[1],[1],[1],[1]],[[1,1,1,1]],[[1],[1],[1],[1]],[[1,1,1,1]]]},{nombre:"primeraEle",color:"bg-info bg-gradient",matriz:[[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]],[[0,0,1],[1,1,1]]]},{nombre:"segundaEle",color:"bg-success bg-gradient",matriz:[[[0,1],[0,1],[1,1]],[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]]]},{nombre:"piramide",color:"bg-danger bg-gradient",matriz:[[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]],[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]]]},{nombre:"primeraZeta",color:"bg-success bg-gradient",matriz:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]]},{nombre:"segundaZeta",color:"bg-danger-warning bg-gradient",matriz:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]]},{nombre:"cuadrao",color:"bg-primary-warning bg-gradient",matriz:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]]}];class z{constructor(t,d=0,r=0,i=0){this.modelo=t,this.angulo=i,this.matriz=v[this.modelo].matriz[this.angulo],this.x=d,this.y=r,this.longitud=this.matriz[0].length,this.altura=this.matriz.length}girar(){this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=v[this.modelo].matriz[this.angulo],this.longitud=this.matriz[0].length,this.altura=this.matriz.length}}const n=[{avatar:"https://www.svgrepo.com/show/81103/avatar.svg",nick:"Joel",puntos:120,fecha:"07 Mayo de 2024"},{avatar:"https://www.svgrepo.com/show/81103/avatar.svg",nick:"Carlos",puntos:320,fecha:"17 Enero de 2024"},{avatar:"https://www.svgrepo.com/show/81103/avatar.svg",nick:"José Luis",puntos:1245,fecha:"4 Abril de 2023"}],k=a=>{console.log("Nick: ",a),a=a.toUpperCase();const t=n.filter(r=>r.nick.includes(a));let d="";return t.length>0&&t.forEach(r=>{d+=`<tr>
              <td><img width="50" src="${r.avatar}"></td>
              <td>${r.nick}</td>
              <td>${r.puntos}</td>
              <td>${r.fecha}</td>
          </tr>`}),document.querySelector("#tbody").innerHTML=d,t},f=(a,t)=>{let d="";switch(a){case"nick":return n.sort((r,i)=>r.nick.localeCompare(i.nick,"es",{sensitivity:"base"})),n.forEach(r=>{d+=`<tr>
                <td><img width="50" src="${r.avatar}"></td>
                <td>${r.nick}</td>
                <td>${r.puntos}</td>
                <td>${r.fecha}</td>
            </tr>`}),document.querySelector("#tbody").innerHTML=d,t==="down"&&(document.querySelector("#campoNick").classList.add("bi-arrow-down-square"),document.querySelector("#campoNick").classList.remove("bi-arrow-up-square"),document.querySelector("#campoPoints").classList.remove("bi-arrow-down-square"),document.querySelector("#campoPoints").classList.add("bi-arrow-up-square"),document.querySelector("#campoDate").classList.remove("bi-arrow-down-square"),document.querySelector("#campoDate").classList.add("bi-arrow-up-square")),n;case"points":return n.sort((r,i)=>i.puntos-r.puntos),n.forEach(r=>{d+=`<tr>
                <td><img width="50" src="${r.avatar}"></td>
                <td>${r.nick}</td>
                <td>${r.puntos}</td>
                <td>${r.fecha}</td>
            </tr>`}),document.querySelector("#tbody").innerHTML=d,t==="down"&&(document.querySelector("#campoPoints").classList.add("bi-arrow-down-square"),document.querySelector("#campoPoints").classList.remove("bi-arrow-up-square"),document.querySelector("#campoNick").classList.remove("bi-arrow-down-square"),document.querySelector("#campoNick").classList.add("bi-arrow-up-square"),document.querySelector("#campoDate").classList.remove("bi-arrow-down-square"),document.querySelector("#campoDate").classList.add("bi-arrow-up-square")),n;default:return n.sort((r,i)=>new Date(r.fecha)-new Date(i.fecha)),n.forEach(r=>{d+=`<tr>
                <td><img width="50" src="${r.avatar}"></td>
                <td>${r.nick}</td>
                <td>${r.puntos}</td>
                <td>${r.fecha}</td>
            </tr>`}),document.querySelector("#tbody").innerHTML=d,t==="down"&&(document.querySelector("#campoDate").classList.add("bi-arrow-down-square"),document.querySelector("#campoDate").classList.remove("bi-arrow-up-square"),document.querySelector("#campoNick").classList.remove("bi-arrow-down-square"),document.querySelector("#campoNick").classList.add("bi-arrow-up-square"),document.querySelector("#campoPoints").classList.remove("bi-arrow-down-square"),document.querySelector("#campoPoints").classList.add("bi-arrow-up-square")),n}},w=a=>{let t=a;return t=t.toUpperCase(),t},P=a=>{const t=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],d=a.getDate(),r=t[a.getMonth()],i=a.getFullYear();return`${d} ${r} ${i}`},q={partidas:[{avatar:"https://www.svgrepo.com/show/81103/avatar.svg",nick:"Manolo",puntos:250,fecha:"27 Enero 2023"},{avatar:"https://www.svgrepo.com/show/81103/avatar.svg",nick:"Carlos",puntos:200,fecha:"11 Abril 2023"}],ranking:[{avatar:"imagen1.png",nick:"MANOLO",puntuacion:124561},{avatar:"imagen2.png",nick:"PEDRA",puntuacion:1561}]},g={setDades:function(a){const t=JSON.stringify(a);return localStorage.setItem("tetris_datos",t),!0},getDades:function(){const a=localStorage.getItem("tetris_datos");return a?JSON.parse(a):{}}};g.setDades(q);g.getDades();function S(a){const t=g.getDades();t.partidas.push(a),g.setDades(t)}const b={template:`
    <div id="info">
        <div id="tablaRanking" class="m-5 p-5 bg-dark"></div>
        <div id="tablaPartidas" class="m-5 p-5 bg-dark"></div>
    </div>
    `,script:()=>{function a(o){let p=`
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
            `;o.forEach(u=>{p+=`<tr>
                <td><img width="50" src="${u.avatar}"></td>
                <td>${u.nick}</td>
                <td>${u.puntos}</td>
                <td>${u.fecha}</td>
                </tr>`}),p+=`
            </tbody>
            <tfoot></tfoot>
            </table> 
            `,document.querySelector("#tablaPartidas").innerHTML=p}function t(){const o=`
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
            `;document.querySelector("#tablaRanking").innerHTML=o}a(n),t(),document.querySelector("#button-addon2").addEventListener("click",function(){let o=document.querySelector("#textoBuscar");o=o.value,k(o)}),document.querySelector("#button-addon1").addEventListener("click",function(){document.querySelector("#textoBuscar").value="",a(n)}),document.querySelector("#campoNick").addEventListener("click",function(){f("nick","down")}),document.querySelector("#campoPoints").addEventListener("click",function(){f("points","down")}),document.querySelector("#campoDate").addEventListener("click",function(){f("date","down")})}},h={template:`
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
    `,script:()=>{document.querySelector("#save").addEventListener("click",()=>{let a=document.querySelector("#name").value;if(a===""||a===null)return alert("Nick obligatorio para poder guardar la partida");{a=w(a);const t=e.puntos,r=P(new Date),i={avatar:"https://www.svgrepo.com/show/81103/avatar.svg",nick:a,puntos:t,fecha:r};console.log(i),S(i),n.push(i),document.querySelector("main").innerHTML=b.template,b.script()}}),document.querySelector("#notSave").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script()})}},e={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],pintaPanel:()=>{const a=document.querySelector("#panel");a.innerHTML="";const t=v[e.nuevaPieza.modelo].color;for(let d=0;d<e.matriz.length-1;d++){let r='<div class="fila d-flex justify-content-center">';for(let i=1;i<e.matriz[d].length-1;i++){let s="";e.matriz[d][i]===0?s+='<div class="celda bg-dark border-secondary"></div>':e.matriz[d][i]===1&&(s+=`<div class="celda ${t} border-white"></div>`),r+=s}r+="</div>",a.innerHTML+=r}},crearNuevaPieza:()=>{const a=Math.floor(Math.random()*7);let t=v[a].matriz[0];t=t[0].length;let d;switch(t){case 1:d=Math.floor(Math.random()*10)+1;break;case 2:d=Math.floor(Math.random()*9)+1;break;case 3:d=Math.floor(Math.random()*8)+1;break;case 4:d=Math.floor(Math.random()*7)+1;break}const r=new z(a,d,1,0);return console.log("pieza ",r),r},nuevaPieza:null,insertarPieza:()=>{for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)e.nuevaPieza.matriz[a][t]===1&&(e.matriz[a+e.nuevaPieza.y][t+e.nuevaPieza.x]=e.nuevaPieza.matriz[a][t]);e.pintaPanel()},puntos:0,controlTeclas:()=>{document.addEventListener("keydown",a=>{switch(a.key){case"ArrowRight":e.nuevaPieza.y+e.nuevaPieza.altura<e.matriz.length-1&&(e.moverDra(),e.nuevaPieza.x+e.nuevaPieza.longitud<=10&&(e.puntos+=10,document.querySelector("#puntos").innerHTML=e.puntos));break;case"ArrowLeft":e.nuevaPieza.y+e.nuevaPieza.altura<e.matriz.length-1&&(e.moverIzq(),e.nuevaPieza.x>1&&(e.puntos+=10,document.querySelector("#puntos").innerHTML=e.puntos));break;case"ArrowDown":e.bajar(),e.nuevaPieza.y+e.nuevaPieza.altura<e.matriz.length-1?(e.puntos+=10,document.querySelector("#puntos").innerHTML=e.puntos):e.nuevaPieza.y===e.matriz.length-1&&(e.puntos+=50,document.querySelector("#puntos").innerHTML=e.puntos);break;case"ArrowUp":e.borrarPieza(),e.nuevaPieza.y+e.nuevaPieza.altura<e.matriz.length-1&&(e.nuevaPieza.girar(),e.puntos+=20,document.querySelector("#puntos").innerHTML=e.puntos),e.insertarPieza();break}})},borrarPieza:()=>{for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)e.nuevaPieza.matriz[a][t]===1&&(e.matriz[a+e.nuevaPieza.y][t+e.nuevaPieza.x]=0)},moverDra:()=>{e.nuevaPieza&&(e.borrarPieza(),e.nuevaPieza.x+e.nuevaPieza.longitud<=10&&e.nuevaPieza.x++,e.insertarPieza(),e.pintaPanel())},moverIzq:()=>{e.nuevaPieza&&(e.borrarPieza(),e.nuevaPieza.x>1&&e.nuevaPieza.x--,e.insertarPieza(),e.pintaPanel())},bajar:()=>{e.nuevaPieza&&(e.borrarPieza(),e.nuevaPieza.y+e.nuevaPieza.altura<e.matriz.length-1&&e.nuevaPieza.y++,e.insertarPieza(),e.pintaPanel(),e.nuevaPieza.y+e.nuevaPieza.altura===e.matriz.length-1&&(document.querySelector("main").innerHTML=h.template,h.script()))},iniciarMovimiento:()=>{const a=setInterval(()=>{e.bajar(),e.nuevaPieza.y+e.nuevaPieza.altura===e.matriz.length-1&&clearInterval(a)},1e3)}},c={template:`
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
    `,script:()=>{e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza(),e.pintaPanel(),e.controlTeclas(),e.iniciarMovimiento()}},m={template:`
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
    `,script:()=>{document.querySelector("#btnJuego").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script()})}},y={template:`
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
            <button id="vistaHome" class="btn btn-dark mx-2 fs-4 shadow border border-light">HOME</button>
            <button id="vistaJuego" class="btn btn-dark mx-2 fs-4 shadow border border-light">JUEGO</button>
            <button id="vistaRanking" class="btn btn-dark mx-2 fs-4 shadow border border-light">RANKING</button>
        </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#vistaHome").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()}),document.querySelector("#vistaRanking").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script()}),document.querySelector("#vistaJuego").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script()})}};document.querySelector("header").innerHTML=y.template;y.script();document.querySelector("main").innerHTML=m.template;m.script();
