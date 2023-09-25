
function solicitarPrestamo() {
const salarioMinimo = 100000
const edadMinima = 18
let edadIngresada = parseInt(prompt("Bienvenido al sistema de prestamos de Scaloneta Bank, ingresa tu edad"))
if ( edadIngresada < 18){
    alert("Es necesario ser mayor de edad")
}else if( edadIngresada >= 18){
    let dineroIngresado = parseFloat(prompt("Ingrese su salario mensual"))
    while( dineroIngresado <= 100000){
        dineroIngresado = parseFloat(prompt("Lo sentimos, salario insuficiente para solicitar prestamo, intente otra vez"))
    }
    while( dineroIngresado >= 100000){
        const prestamo = dineroIngresado * 1.50
        alert("Prestamo aprobado, usted recibira $" + prestamo)
        break

    }
}
}

solicitarPrestamo()