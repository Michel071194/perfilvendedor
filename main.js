
   
  /*SIMULADOR DE STORE O TIENDA ONLINE DE LA NBA DESDE LA PERSPECTIVA DEL VENDEDOR, 
  SE BUSCA SUBIR PRODUCTOS SEGUN CONFERENCIA DEL EQUIPO Y QUE EN LA LISTA SE OBSERVEN CARACTERISTICAS
  COMO TALLE, PRECIO, JUGADOR Y TIPO DE PRENDA*/ 
/*
   
 
    



      


guardar.addEventListener("click", function(){
  
  let indumentaria = new Indumentaria(inputfranquicia.value, inputnomJugador.value, inputtalle.value, inputPrecio.value > 0 ? inputPrecio.value : 100, inputTipoDePrenda.value);
  
  productosNba.push(indumentaria);
  
  const productosNbaJSON = JSON.stringify(productosNba);
 
  localStorage.setItem("productosNba", productosNbaJSON);

  location.reload();
 

    })
    



cancelar.addEventListener("click", function(){
    location.reload();
    
  })*/
 
 /* const buscarBoton = document.getElementById("buscar");
  const inputBuscar= document.getElementById("inputBuscar")
  buscarBoton.addEventListener("click", () => { 
  fetch("./libros.json")
      .then(response=>response.json())
      .then(data=>{
        const miBiblio=data.libros;
        const librosContainer=document.getElementById("libros-container")
        miBiblio.forEach((biblio) => {
          inputBuscar.value==biblio.titulo||biblio.autor? 
          ()=> {const librosElement= document.createElement("p")
          librosElement.textContent= `nombre: ${biblio.titulo}, autor ${biblio.autor}, anio ${biblio.anio}, precio ${biblio.precio}, stock ${biblio.stock}`
          librosContainer.appendChild(librosElement) 
        }: alert("Vuelva a ingresar su busqueda");
         
          
        })
        

      })
      .catch(error=>{
        console.log("nada")
      })
 
    })
      /**/
   

    
  
      
      /*const agregarBtn = document.getElementById("agregar");
      agregarBtn.addEventListener("click", () => {
        agregarProducto();
      });
      
      const ordenarBtn = document.getElementById("ordenar");¨*/

  

        
    
      /*const buscarBoton = document.getElementById("buscar");
const url = "./libros.json";
let data = [];

buscarBoton.addEventListener("click", () => { 
  const input = document.getElementById("inputBuscar");
  fetch(url)
    .then(response => response.json())
    .then(json => {
      data = json;
      const aLS= JSON.stringify(localStorage.getItemItem("data"))
      
    })
    .catch(error => console.log(error));
});*/

/*const stockJson= data.parse
const aLS= stockJson.setitem
const filteredData = stockJson.filter(item => item.title.includes(input.value));
console.log(filteredData);*/   
        
        /*
                  
                  

              })
            })
            .catch(error=>{
              console.log("nada")
            })
            inputBuscar.value = "";
});
     
        
      
*/

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
     
  
  /*}})})*/

 

/*/*libreria.forEach((x)=>{
  if(libreria.include(inputTitulo.value && inputAnio.value)){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
      
    })
  }else{*/
  /*function agregarLibroALibreria() {
   
    let inputTitulo=document.getElementById("inputtit").value
    let inputAutor=document.getElementById("inputAutor").value
    let inputAnio=document.getElementById("inputAnio").value
    let inputStock=document.getElementById("inputStock").value
    let inputPrecio=document.getElementById("inputPrecio").value

    let libro = new Libros (inputTitulo, inputAutor, inputAnio, inputStock, inputPrecio);
    btnAgregar.addEventListener("click", ()=>{
    libreria.forEach((x)=>{if (x.titulo === inputTitulo && x.anio === inputAnio) {
      Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "¡Algo salió mal!",
        footer: '<a href="">¿Por qué tengo este problema?</a>',
      });
    } else {
      libreria.push(libro);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu trabajo ha sido guardado",
        showConfirmButton: false,
        timer: 1500,
      });
    }})
  })}

 
 

      */