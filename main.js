
     
        


/*MOSTRAR CATALOGO ACTUAL*/

const btnTodosLosProductos= document.getElementById("btnTodosLosProductos")
let contador = 0
const mostrarLibros= btnTodosLosProductos.addEventListener("click",()=>{
  contador= contador + 1 
  console.log(contador)
            fetch("./libros.json")
            .then(response=>response.json())
            .then(data=>{
              const miBiblio=data.libros;
              const librosContainer=document.getElementById("libros-container")
              miBiblio.forEach((biblio) => {
                   setTimeout(()=> {const librosElement= document.createElement("li")
                    librosElement.textContent= `Nombre: ${biblio.titulo}, Autor: ${biblio.autor}, Año: ${biblio.anio}, Precio: ${biblio.precio}, Stock: ${biblio.stock}`
                    librosContainer.appendChild(librosElement)}, 2000)
                   
                  })()
                  .catch(error=>{
                   console.log("Error al cargar")
                })
              })
            })
      


           
    
 /*INGRESAR PRODUCTOS*/

 class Libros {
  constructor(titulo, autor, anio, stock, precio){
    this.titulo=titulo;
    this.autor= autor;
    this.anio= anio;
    this.stock= stock;
    this.precio=precio;
    this.SumarIva(); 
  }
  SumarIva(){
    this.precio=this.precio*1.18;
  }
}

let libro1= new Libros ("La vida breve","Juan Carlos Onetti", 1950, 20, 1000)
let libro2= new Libros ("Los adioses", "Juan Carlos Onetti", 1954, 5, 1200)
let libro3= new Libros ("Quién de nosotros", "Mario Benedetti",1953,10,1000)
let libro4= new Libros ("Montevideanos","Mario Benedetti",1954,10, 900)
let libro5= new Libros ("Ética","Baruch Spinoza",1866,2, 1500)
let libro6= new Libros ("Fenomenología del espiritu", "George Hegel", 1980, 2, 2000)
let libro7= new Libros ("La interpretación de los sueños","Sigmund Freud",1900, 2, 1500)
let libro8= new Libros ("Tres ensayos de la teoría sexual","Sigmund Freud",1905, 1, 1500)

let libreria=[libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8]


if (localStorage.getItem("Librería") === null) {
  localStorage.setItem("Librería", JSON.stringify(libreria));
}


if (localStorage.getItem("libros")) {
  libreria = JSON.parse(localStorage.getItem("libros"));
} else {
  libreria=libreria
}

/*ABRIR Y CERRAR MENÚ DE AGREGAR LIBRO*/
const btnagregarProdu= document.getElementById("ingProd")
const elemento = document.getElementsByClassName("bg_ingreso");
const btnAgregar=document.getElementById("agregarBtn");
const btnCerrar=document.getElementById("cerrar")


btnagregarProdu.addEventListener("click", ()=>{


  setTimeout(() => {elemento[0].style.display = "block";
  }, 2000);
})
   
btnCerrar.addEventListener("click", ()=>{
  elemento[0].style.display= "none";
})


  
/*sUBIR UN LIBRO Y PONERLO A LA VENTA*/
const agregarLibro=
btnAgregar.addEventListener("click", function(){
    let titulo = document.getElementById("inputtit").value;
    let autor = document.getElementById("inputAutor").value;
    let anio = document.getElementById("inputAnio").value;
    let stock = document.getElementById("inputStock").value;
    let precio = document.getElementById("inputPrecio").value;
    const traerLibreria=JSON.parse(localStorage.getItem("Librería"))|| [] ;
  
    let libro = new Libros(titulo,autor, anio, stock, precio);
  
    if (traerLibreria.some((x) => x.titulo === titulo && x.anio === anio)) {
      Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "¡El producto ya existe!",
        footer: '<a href="">¿Por qué tengo este problema?</a>',
      });
    } else {
      traerLibreria.push(libro);
      localStorage.setItem("Librería", JSON.stringify(traerLibreria));
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu trabajo ha sido guardado",
        showConfirmButton: false,
        timer: 1500,
      })
      ;
      
    }
    
  })
  
   
    /*CONSULTAR SOBRE AUTOR Y TÍTULO*/   
    
    
     const filtrarBtn = document.getElementById("buscar");
      filtrarBtn.addEventListener("click", () => {
        filtrarProductos();
      });
     
     function filtrarProductos(){
      const traerLibreria=JSON.parse(localStorage.getItem("Librería"))|| [] ;
     
      Swal.fire({
          title: 'Ingrese título del libro o nombre de autor',
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Buscar',
          showLoaderOnConfirm: true,
  
          preConfirm: (palabraClave) => {
              palabraClave = palabraClave.trim().toUpperCase()
              let resultado = traerLibreria.filter((x)=> x.titulo.toUpperCase().includes(palabraClave)|| x.autor.toUpperCase().includes(palabraClave))
              console.table(resultado)
               resultado.length > 0? Swal.fire({
                      title: 'Resultados de búsqueda',
                      html: '<table><tr><th>Titulo</th><th>Autor</th><th>Año</th><th>Stock</th><th>Precio</th></tr>' +
                            resultado.map(x=> `<tr><td>${x.titulo}</td><td>${x.autor}</td><td>${x.anio}</td><td>${x.stock}</td><td>${x.precio}</td></tr>`).join('') +
                            '</table>',
                      confirmButtonText: 'OK'
                      
                  }):
                  Swal.fire({
                      title: 'No se encontraron coincidencias',
                      icon: 'error',
                      confirmButtonText: 'OK'
                  })
              
          }
      });
  
  }
  
 