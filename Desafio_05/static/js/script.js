/* Contraseña valida
Pide una contraseña con prompt().
Si es igual a "1234" , muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado.
*/
function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña:");

    if (pass == clave) {
        alert("Si pasas maquina...");
    } else {
        alert("No pasas crack ;)")
    }
}

function verificarParImpar() {
    let par = parseInt(prompt("Ingrese un numero"));
    if (par % 2 == 0) {
        alert("Es un numero par")
    } else {
        alert("Es un numero impar")
    }
}

function verificarTemperatura() {
    let tem = parseInt(prompt("Ingrese un numero"));
    if (tem >= 30 && tem <= 50) {
        alert("Alta temperatura")
    } else if (tem >= 15 && tem < 30) {
        alert("Temperatura cálida")
    } else if (tem >= -5 && tem <= 15) {
        alert("Hace frio")
    } else {
        alert("Ingrese un valor válido");
    }
}
function comparar() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 < num2) {
        alert(" El numero " + num1 + " es menor que " + num2);
    }
    else if (num1 == num2) {
        alert(" El numero " + num1 + " es igual que " + num2);
    } else {
        alert(" El numero " + num1 + " es mayor que " + num2);
    }
}
function calificacion(){
    let ingresa = parseInt(prompt("Ingresa tu nota"));
    if (ingresa < 4){
        alert("Raspao");
    } else if (ingresa >= 4 && ingresa <=7){
        alert("Pasaste mano");
    } else {
        alert("Ingresa un valor");
    }
}
function nombreUsuario(){
    let usu = prompt("Ingrese usuario")
    if (usu == "admin")
}


