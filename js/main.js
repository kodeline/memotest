let dibujos = []
let selecciones = []

generarJuego()

function cargarDibujos() {
    dibujos = [
        '<img src="img/chopper.png">',
        '<img src="img/luffy.png">',
        '<img src="img/sanji.png">',
        '<img src="img/brook.png">',
        '<img src="img/nami.png">',
        '<img src="img/robin.png">',
        '<img src="img/franki.png">',
        '<img src="img/ussop.png">',
        '<img src="img/zoro.png">',
    ]
}

function generarJuego() {
    cargarDibujos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 18; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${dibujos[0]}
                </div>
                <div class="cara superior">
                    <img src="img/one-piece.png">
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            dibujos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let traseraUno = document.getElementById("trasera" + selecciones[0])
        let traseraDos = document.getElementById("trasera" + selecciones[1])
        if (traseraUno.innerHTML != traseraDos.innerHTML) {
            let tarjetaUno = document.getElementById("tarjeta" + selecciones[0])
            let tarjetaDos = document.getElementById("tarjeta" + selecciones[1])
            tarjetaUno.style.transform = "rotateY(0deg)"
            tarjetaDos.style.transform = "rotateY(0deg)"
        }else{
            traseraUno.style.display = "none";
            traseraDos.style.display = "none";
        }
    }, 1000);
}