

function usarString() {
    //Uso de strings Ejemplo
    console.log("Conexion correcta")
    let nombre = prompt("Elige un nombre o una cosa");
    //Variable tipo texto

    let primeraLetra = nombre[0];
    //Asignamos valor a primeraLetra con posicion 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es:" + primeraLetra +
        "\nÚltima letra es: " + ultimaLetra);
    //Mostrar resultados
}

function UsarString() {
let apellido = prompt ("Elige un nombre o una cosa");
    let primeraLetra = apellido[0];
    //Asignamos valor a primeraLetra con posicion 0 de nombre
    let ultimaLetra = apellido[apellido.length - 1];
    alert("Primera letra es:" + primeraLetra +
        "\nÚltima letra es: " + ultimaLetra);
}
