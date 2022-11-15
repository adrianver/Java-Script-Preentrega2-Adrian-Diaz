class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() {
        if (carrito.length > 0) {
            return this.carrito.reduce((acumulador, bebida) => acumulador + bebida.precio, descuento).toFixed(2)
        } else {
            return 'Error inesperado'
        }
    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Error inesperado') {
            return `Confirmamos el pago de $ ${this.obtenerSubtotal()}. \n Gracias por su compra!`
        } else {
            return `Error en la transacción.`
        }
    }
}