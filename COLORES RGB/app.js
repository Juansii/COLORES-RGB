// primero SIEMPRE se almacenan en constantes los elementos con 
// los quue vamos a trabajar. 
const inputRojo =  document.getElementById('rojo');  
const inputVerde = document.getElementById('verde'); 
const inputAzul = document.getElementById('azul'); 

// se obtiene el documento <p></p> vacio de HTML 
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

//inicialmente estas tres variables obtienen el valor
// de las variables input inicializadas al principio 
let rojo = inputRojo.value; 
let verde =  inputVerde.value; ; 
let azul = inputAzul.value;


// estas tres asignan los valores extraidos,
// es decir, los que ingresó el usurario, a los elementos HTML con la 
// propiedad innerText. 
//el contenido de los elementos P se actualizan con las variables 
// rojo, verde, azul.
textoRojo.innerText = rojo; 
textoVerde.innerText = verde; 
textoAzul.innerText = azul;


function actualizarColor (rojo, verde, azul) { //las tres varialbles como parametros 
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`; // se utiliza el operador de interpolación para combinar los valores de las variables
  document.body.style.backgroundColor = colorRGB; 
  //lo que hace esta linea ede arriba es actualizar
  // el fondo de color de la pagina 
  
}

// a los input se les agrega EVENTOS 

inputRojo.addEventListener('change', (e) => { // se agrega un evento de escucha al inputRojo. el evento que se agrega se activa cuando el valor del elemento cambia
   rojo = e.target.value; // obtiene el nuevo valor que disparó el evento y se lo asigna a la variable rojo.  
                          // e.target se refiere al elemento HTML que desencadenó todo. 
   textoRojo.innerText = rojo; // actualiza el texto del elemento con  el ID "texto-rojo" (es decir el elemento p vacio de HTML)
   actualizarColor(rojo, verde, azul); // aca se llama a la funcion y esta le pasa los valores actualizados 
})

inputVerde.addEventListener('change', (e) => {
  verde = e.target.value; // sin targe, es decir solo e.value, al modificar 
  //el valor en la pantalla, queda undefined. ya que no se estaria refiriendo al elemento html <P></P> que generó todo.  
  textoVerde.innerText = verde; 

  actualizarColor(rojo, verde, azul); // este es un caso ejemplo donde LA FUNCION SE LLAMA MAS DE UNA VEZ 
})

inputAzul.addEventListener('change', (e) => {
  azul = e.target.value; 
  textoAzul.innterTex = azul; // sin agregarle el texto, el elmento p queda fijo, cambia el color de fondo pero no el valor. 
  actualizarColor(rojo, verde, azul);
})
