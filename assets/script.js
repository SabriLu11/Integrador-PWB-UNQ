
function login() {
    let usuario = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    if (usuario === "vera" && password === "password") {
        window.location.href = "home.html";
    } else {
        alert("Credenciales incorrectas");
    }
};



function agregarComentario() {
    let comentario = document.getElementById('commentInput').value;
    let nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = comentario;
    let contenedorComentarios = document.getElementById('new');
    contenedorComentarios.appendChild(nuevoComentario);
    contenedorComentarios.appendChild(document.createElement('br'));
    document.getElementById('commentInput').value = 'Dejanos tu comentario';
};



function completarForm(event) {
   
    event.preventDefault();
    let nombre = document.querySelector ('#nombre').value;
    let producto = document.querySelector('#producto').value;
    let cantidad = document.querySelector('#cantidad').value;
    alert("¡Felicitaciones "+ nombre +" , has comprado " + cantidad + " " + producto + ". Muchas gracias por tu compra!");
};

document.getElementById('myForm').addEventListener('submit', completarForm);
