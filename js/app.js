//Array de Pizzas
const Pizzas = [
    {
      id: 0,
      nombre: "Muzzarella",
      ingredientes: ["Muzzarella", "Salsa de tomate"],
      precio: 580,
      url: "./img/pizza-muzza.jpg"
    },
  
    {
      id: 1,
      nombre: "Especial",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Jamón Cocido"],
      precio: 750,
      url: "./img/pizza-especial.jpg"
    },
  
    {
      id: 2,
      nombre: "Cuatro Quesos",
      ingredientes: [
        "Muzzarella",
        "Gruyere",
        "Roquefort",
        "Parmesano",
        "Salsa de tomate"
      ],
      precio: 800,
      url: "./img/pizza-4-quesos.jpg"
    },
  
    {
      id: 3,
      nombre: "Calabresa",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"],
      precio: 780,
      url: "./img/pizza-calabresa.jpg"
    },
  
    {
      id: 4,
      nombre: "Cebolla",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Cebolla"],
      precio: 700,
      url: "./img/pizza-cebolla.jpg"
    },
  
    {
      id: 5,
      nombre: "Lechuga",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"],
      precio: 730,
      url: "./img/pizza-lechuga.jpg"
    }
];
//Cargo el Array de Pizzas al LocalStorage
function enviarLocalStorage() {
  localStorage.setItem('listaPizzas', JSON.stringify(Pizzas));
}
enviarLocalStorage();
//Traemos de nuevo el Array del LocalStorage 
const pizzasLocalStorage = JSON.parse(localStorage.getItem("listaPizzas"));

//Declaro Variables
const formPizza = document.querySelector('.form-pizza');
const numPizza = document.querySelector('.num-pizza');
const pizzaResultado = document.querySelector('.bloque-2');


//Tomo el valor del input para mostrar la pizza que corresponde
formPizza.addEventListener('submit', capturarValor);

function capturarValor(e) {
    e.preventDefault();
    limpiarHTML();
    const numeroPizza = document.querySelector("#numeroPizza").value;

    if (numeroPizza === ''){
        
        mostrarAlerta('Debe Ingresar un valor, para pedir su Pizza');

    }else {
        mostrarSpinner();

        setTimeout(()=>{
          mostrarResultado(numeroPizza);

        },1000);
    }

    formPizza.reset();


}
//Funcion para mostrar el mensaje de error
function mostrarAlerta(mensaje){

    const existeError = document.querySelector('.error');
    if( !existeError){
      const parrafoAlerta = document.createElement('p');
      parrafoAlerta.classList.add('error');
      parrafoAlerta.textContent = mensaje;
      formPizza.insertBefore(parrafoAlerta, numPizza);

      setTimeout(()=>{
          parrafoAlerta.remove();
      },3000);

    }
}

//Si todo esta bien, muestro en pantalla la pizza
function mostrarResultado(idPizza){

  const divResultado = document.createElement('div');
  divResultado.classList.add('resultado');
  divResultado.innerHTML = `
    <div class="img-pizza">
      <img src="${pizzasLocalStorage[idPizza].url}" alt="imagen pizza">
    </div>
    <div class="info-pizza">
    <div class="nombre-pizza">
      <h3>${pizzasLocalStorage[idPizza].nombre}</h3>
      <p>Ingredientes: ${pizzasLocalStorage[idPizza].ingredientes}</p>
      </div>
      <div class="precio-pizza">
        <p>Precio: $ ${pizzasLocalStorage[idPizza].precio}</p>
      </div>
    </div>
  `;
  pizzaResultado.appendChild(divResultado);

}


function limpiarHTML(){
  while(pizzaResultado.firstChild){
    pizzaResultado.removeChild(pizzaResultado.firstChild);
  }
}

function mostrarSpinner(){
  const divSpinner = document.createElement('div');
  divSpinner.classList.add('spinner');
  divSpinner.innerHTML = `
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
  `;
  pizzaResultado.appendChild(divSpinner);

  setTimeout(()=>{
    divSpinner.remove();
  },1000);
}