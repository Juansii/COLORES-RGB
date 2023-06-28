const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo'); 
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function cambiarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', () => {
  rojo = inputRojo.value; // otra forma de agregar el evento comparara a las otras dos
  textoRojo.innerText = rojo; 
  cambiarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value; 
    textoVerde.innerText = verde; 
    cambiarColor(rojo, verde, azul);
  });

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value; 
    textoAzul.innerText = azul; 
    cambiarColor(rojo, verde, azul);
  });