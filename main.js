
     
        


/*MOSTRAR CATALOGO ACTUAL*/

const btnTodosLosProductos= document.getElementById("btnTodosLosProductos")
const mostrarLibros= 
 btnTodosLosProductos.addEventListener("click",()=>{
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





if (localStorage.getItem("libros")) {
  libreria = JSON.parse(localStorage.getItem("libros"));
} else {
  libreria=libreria
}


const btnagregarProdu= document.getElementById("ingProd")
let inputTitulo=document.getElementById("inputtit")
    let inputAutor=document.getElementById("inputAutor")
    let inputAnio=document.getElementById("inputAnio")
    let inputStock=document.getElementById("inputStock")
    let inputPrecio=document.getElementById("inputPrecio")
const elemento = document.getElementsByClassName("bg_ingreso");
const btnAgregar=document.getElementById("agregarBtn");

btnagregarProdu.addEventListener("click", ()=>{


  setTimeout(() => {elemento[0].style.display = "block";
  }, 2000);
})
   
 


  


btnAgregar.addEventListener("click", function(){ let nLibro = new Libros (inputTitulo.value, inputAutor.value, inputAnio.value, inputStock.value , inputPrecio.value);
  JSON.parse(localStorage.getItem("Librería")) 
   libreria.push(nLibro)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
      
    })
    ,console.log(libreria)
     const liberiaconJon= JSON.stringify(libreria)
     localStorage.setItem("Librería", liberiaconJon)})
     
  