const precioPorUnidad = 400000; 
let cantidad = 0;

const cantidadElement = document.querySelector("#cantidad");
const totalElement = document.querySelector("#total");
const aumentarButton = document.querySelector("#aumentar");
const disminuirButton = document.querySelector("#disminuir");


const actualizarCantidadYTotal = () => {
    cantidadElement.textContent = cantidad;
    const total = cantidad * precioPorUnidad;
    totalElement.textContent = total;
};


aumentarButton.addEventListener("click", () => {
    cantidad++;
    actualizarCantidadYTotal();
});


disminuirButton.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        actualizarCantidadYTotal();
    }
});


