let acumulador = 0;
for(let f = 1; f <= 1000; f++)
    acumulador += f;
console.log('la iteracion de ${f}, el acumulasor va en ${acumulador}, button: Agregar a la compra')
console.log('el total de su compra es ${acumulador}')



function changeCursor(element) {
            element.style.cursor = "pointer";
        }
        
        function resetCursor(element) {
            element.style.cursor = "default";
        }