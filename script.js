import { barcelona,roma,paris,londres }from './ciudades.js';
//se importa del otro .js


//obtener los elementos del dom 
//seleccionamos todos los enlaces que sean tipo a
let enlaces = document.querySelectorAll('a');
//seleccionamos segun el id 
//titulo es el  nombre del eleimento que esta en  html linea 22
let tituloElemento = document.getElementById ('titulo');
let subTituloElemento = document.getElementById ('subtitulo');
let parrafoElemento = document.getElementById ('parrafo');
let precioElemento = document.getElementById ('precio');

console.log(enlaces);
//evento click a cada  enlace 
enlaces.forEach(function(enlace){
//agrega un escuchador de eventos click en cada enlace
    enlace.addEventListener('click',function()
    //click y funcuion por cada click
    {
        //la funcion va a marcar de acuerdo a que ciudad hagamos click
        //primero limpiamos 
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        }
        );
        //agregar clase active al enlace actual
        //this es el enlace de la funcion q abarca todo de la linea 16
        this.classList.add('active');
        //obtener contenido correspondiente segun enlace
        //textcontent es la palabra Barcelona, Paris, Londres o Roma
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML= contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    }
    );
    //agregar el activo
    //traer info del seleccionado
    //mostrasr contenido en dl DOM
}

);

//funcion para traer info desde ciudades.js un metodo para que le enviemos barcelo y traiga esa info
function obtenerContenido(enlace){
    let contenido ={
        //devuelve el objeto barcelona,roma,paris,londres que esta arriba importado
        "Barcelona" : barcelona,
        "Roma":roma,
        "París":paris,
        "Londres":londres
    };
    return contenido[enlace];
}


