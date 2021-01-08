const btnEnviar = document.getElementById("btnEnviar")
const database = firebase.database();
const body = document.getElementById("contenedor")

// Obtengo los input para obtener luego su valor
const inputNombre = document.getElementById("nameUser")
const inputApellido = document.getElementById("lastNameUser")
const inputEmail = document.getElementById("emailUser")
const inputCountry = document.getElementById("countryUser")
const inputTelefono = document.getElementById("telUser")
const inputJob = document.getElementById("jobUser")

// Declaro estas variables para luego almacenar la información que el usuario ingrese
let nameUser, lastNameUser, emailUser, telUser, jobUser, countryUser;
function datosUsuario(){
    firstName = inputNombre.value
    lastName = inputApellido.value
    email = inputEmail.value
    country = inputCountry.value
    telefono = inputTelefono.value
    job = inputJob.value
}


// Con este evento envío la infomación a una base datos para guardar los asistentes
btnEnviar.addEventListener("click", async () => {
    //Obtengo las variables con los valores ingresados
    datosUsuario();

    // Envio esos datos
    await firebase.database().ref(`Asistentes/`+firstName).set({
        nombre: firstName,
        apellido: lastName,
        correoElectronico: email,
        country: country,
        telefono: telefono,
        job: job
    })

    /**
     * SI ESTAS LEYENDO ESTE CÓDIGO, LLENA EL FORMULARIO Y ENVÍALO!
     */

    // Vacio los inputs
    inputNombre.value = ''
    inputApellido.value = ''
    inputEmail.value = ''
    inputTelefono.value = ''
    inputCountry.value = ''
    inputTelefono.value = ''
    inputJob.value = ''

    mensaje()
})

/**
 * Una vez enviado el formulario a la base de datos, muestro este mensaje!
 */

const mensaje = () => {
    const mensaje = '¡Gracias por tu interés! Te estaremos contactando por email para que confirmes tu asistencia.'

    let viewport = document.createElement("div")
    let cartel = document.createElement("div")
    let texto = document.createElement("p")
    let button = document.createElement("button")
    let span = document.createElement("span")

    body.appendChild(viewport)
    viewport.appendChild(cartel)
    cartel.appendChild(texto)
    cartel.appendChild(button)
    button.appendChild(span)


    viewport.className = 'flex-container'
    cartel.className = 'flex-container'
    viewport.id = 'viewportDim'
    cartel.id = 'cartel'
    texto.innerHTML = mensaje
    button.innerHTML = 'De acuerdo'

    // Elimino el cartel
    button.addEventListener("click", () => {
        viewport.remove(cartel)
    })
}
