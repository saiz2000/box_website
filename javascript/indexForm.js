// IMPLEMENTACION FOMRULARIO //

/*class formulario {
    constructor(nombre, mail, numero, empresa, mensaje) {
        this.nombre = nombre
        this.mail = mail
        this.numero = numero
        this.empresa = empresa
        this.mensaje = mensaje
    }

}

// Define the submitForm function before adding the event listener
const submitForm = (event) => {
    event.preventDefault()
    
    // Retrieve data from the form
    const nombre = document.querySelector('input[name="Nombre"]').value
    const email = document.querySelector('input[name="Email"]').value
    const numero = document.querySelector('input[name="Numero"]').value
    const empresa = document.querySelector('input[name="Asunto"]').value
    const mensaje = document.querySelector('textarea[name="Mensaje"]').value

    // Create a new instance of the formulario class with the retrieved data
    const formInstance = new formulario(nombre, email, numero, empresa, mensaje)

    // Save the form instance to local storage or perform any other actions you want to do with the form data
    let internalInput = JSON.stringify(formInstance)

    localStorage.setItem("DATOS", internalInput)

    console.log(internalInput)

    // Clear the form fields
    event.target.reset()
}

const form = document.querySelector('form')
form.addEventListener('submit', submitForm)*/

////////////////////////////////////////////////////////////////////////////////////

<<<<<<< HEAD


=======
>>>>>>> formulario
// NOTIFICACIONES //


//tostify//
const form = document.querySelector('form');
form.addEventListener('submit', function(){
    Toastify({
        text:"formulario enviado",
        gravity:"bottom",
        position:"center",
        duration: 2000,
        style: {
            background: "linear-gradient(to right, rgb(204, 18, 18), rgb(204, 18, 18)",
        },
    }).showToast();
});







