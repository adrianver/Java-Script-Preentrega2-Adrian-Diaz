let mensajeIngreso = alert ("Beber con Moderación. Prohibido su Venta a menores de 18 años")

const carrito = []

const bebidas = [ {codigo: 1, tipo: "tequila", Marca: "Silver", precio: 4800},
                  {codigo: 2, tipo: "Ron", Marca: "Bacardi", precio: 3000 },
                  {codigo: 3, tipo: "Ron", Marca: "Havana",precio: 11000},
                  {codigo: 4, tipo: "Whisky", Marca: "Chivas", precio: 19500},
                  {codigo: 5, tipo: "Whisky", Marca: "Johnnie Walker", precio: 70000},
                  {codigo: 6, tipo: "Vodka", Marca: "Sky", precio: 5000},
                  {codigo: 7, tipo:"Vodka", Marca: "Absolut Elyx", precio: 13000},
                  {codigo: 8, tipo:"Licor", Marca: "Averna Amaro", Precio: 5000},
                  {codigo: 9, tipo:"Licor", Marca: "Tia Maria", precio: 6000},
                  {codigo: 10, tipo:"Licor", Marca: "Chile Ancho Reyes", precio: 13000},
                  {codigo: 11, tipo:"Gin", Marca: "Lario", precio: 5000},
                  {codigo: 12, tipo:"Grappa", Marca: "Ruttini", precio: 8000} ]

const descuento = -1000
             

function filtrarBebida () {

let bebidaSelecionada = prompt ("Ingrese el tipo de bebida seleccionada")
let resultado = bebidas.filter((bebida) => bebida.tipo === bebidaSelecionada)
return console.table (resultado)
}

const mensaje = "Selecciona la bebida por el código"

function buscarBebida(codigo) {
let buscar = bebidas.find(bebida => bebida.codigo === parseInt(codigo))
        return buscar
}

function comprar() {
    let codigo = prompt (mensaje)
    if (!parseInt(codigo)) {
        alert ("Inexistente el codigo seleccionado")
        return
}


let bebidaElegida = buscarBebida (codigo)
            carrito.push(bebidaElegida)
        let respuesta = confirm("¿Desea llevar otra Bebida?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}


function detalleCarrito ()
{
if (carrito.length > 0) {
console.table (carrito)
}
else {
    console.warn ("No hay ninguna bebida en el carrito")
}
}
function finalizarCompra() {
if (carrito.length === 0) {
console.warn ("El carrito esta vacio!")
return
}

const shopping = new Compra(carrito)
alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
let respuesta = confirm("¿Deseas confirmar tu pago?")
    if (respuesta) {
        alert(shopping.confirmarCompra())
        carrito.length = 0
    }
}



