//Ejercicios Condiciones IF - ELSE
console.log("No sirve el js...");

/*Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o mas) o no.
*/
function edadVotar(){
    let edad = parseInt (prompt("Ingrese su edad: ")); //input conversión string a numero
    //Condicion if - else if- else
    if (edad >= 18){
        alert("Su edad " + edad + " esta aprobada para votar.");

    } else if(edad >= 0 && edad < 18)//Compuerta AND{
        alert("Su edad " + edad + " no esta aprobada para votar.");

    else {
        alert("Ingrese un valor válido");

    }
};
function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña:");

    if (pass == clave) {
        alert("Si pasas maquina...");
    } else {
        alert("No pasas crack ;)")
    }
}

function parImpar() {
    let par = parseInt(prompt("Ingrese un numero"));
    if (par % 2 == 0) {
        alert("Es un numero par")
    } else {
        alert("Es un numero impar")
    }
}

function temperaturaAmbiental() {
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
function compararNumeros() {
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
function note(){
    let ingresa = parseInt(prompt("Ingresa tu nota"));
    if (ingresa < 4){
        alert("Raspao");
    } else if (ingresa >= 4 && ingresa <=7){
        alert("Pasaste mano");
    } else {
        alert("Ingresa un valor");
    }
}
function usuarioAdmin(){
    let usu = prompt("Ingrese usuario")
    if (usu == "admin");
}
function palabraMayuscula(){
    alert("Boton no disponible");

}
function precio(){
    let word = prompt("Ingrese palabra")
    let a = word[0];

    if(a == "A" || a == "a"){
        alert("¡Felicidades!");
    }else{
        alert("No es la letra A");
    };
};


