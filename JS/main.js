document.addEventListener('DOMContentLoaded', function() {
    const images6 = [
        'IMG/capibara1.jpg',
        'IMG/gatoasesinoP.jpg',
        'IMG/gatotrash.jpg',
        'IMG/nintendo.jpg'
    ];

    const images7 = [
        'IMG/CapibaraMano.jpg',
        'IMG/gatoasesino.jpg',
        'IMG/gatotrashmano.jpg',
        'IMG/nintendomano.jpg'
    ];

    let currentIndex6 = 0;
    let currentIndex7 = 0;

    function changeImage6() {
        const imageElement6 = document.getElementById('carousel-image-6');
        imageElement6.classList.remove('active');
        imageElement6.classList.add('exit-left');

        setTimeout(() => {
            currentIndex6 = (currentIndex6 + 1) % images6.length;
            imageElement6.src = images6[currentIndex6];
            imageElement6.classList.remove('exit-left');
            imageElement6.classList.add('enter-right');

            setTimeout(() => {
                imageElement6.classList.remove('enter-right');
                imageElement6.classList.add('active');
            }, 20);
        }, 980); // Ajuste de tiempo
    }

    function changeImage7() {
        const imageElement7 = document.getElementById('carousel-image-7');
        imageElement7.classList.remove('active');
        imageElement7.classList.add('exit-right');

        setTimeout(() => {
            currentIndex7 = (currentIndex7 + 1) % images7.length;
            imageElement7.src = images7[currentIndex7];
            imageElement7.classList.remove('exit-right');
            imageElement7.classList.add('enter-left');

            setTimeout(() => {
                imageElement7.classList.remove('enter-left');
                imageElement7.classList.add('active');
            }, 20);
        }, 980); // Ajuste de tiempo
    }

    setInterval(changeImage6, 6000); // Cambia cada 5 segundos
    setInterval(changeImage7, 6000); // Cambia cada 5 segundos
});



// PRODUCTOS
const productos = [
    {
        id: "PIN-01",
        titulo: "Pin de Gato",
        imagen: "./IMG/gatoasesinoP.jpg",
        categoria: {
            nombre: "Gatos",
            id: "Gatos"
        },
        precio: 1.50 
    },
    {
        id: "Llavero-02",
        titulo: "Articuno",
        imagen: "./IMG/gatotrash.jpg",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 4.00
    },
    {
        id: "Llavero-03",
        titulo: "Astra",
        imagen: "./IMG/capibara1.jpg",
        categoria: {
            nombre: "Valorant",
            id: "valorant"
        },
        precio: 3.50
    },
    {
        id: "Llavero-04",
        titulo: "Brimstone",
        imagen: "./IMG/brim.jpg",
        categoria: {
            nombre: "Valorant",
            id: "valorant"
        },
        precio: 3.50
    },
    {
        id: "Llavero-05",
        titulo: "Gengar",
        imagen: "./IMG/gengar.webp",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 3.75
    },
    {
        id: "Llavero-06",
        titulo: "Donatelo",
        imagen: "./IMG/donatelo.jpg",
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.00
    },
    {
        id: "Llavero-07",
        titulo: "Giratina",
        imagen: "./IMG/giratina.webp",
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 3.75
    },
    {
        id: "Llavero-08",
        titulo: "Michelangelo",
        imagen: "./IMG/miguelaIMGarticuno.webp.jpg",
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.00
    },
    {
        id: "Llavero-09",
        titulo: "Rafael",
        imagen: "./IMG/rafael.jpg",
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.00
    },
    {
      id: "Llavero-10",
      titulo: "Leonardo",
      imagen: "./IMG/leonardo.jpg",
      categoria: {
          nombre: "Accion",
          id: "accion"
      },
      precio: 3.00
     },
     {
      id: "Llavero-11",
      titulo: "Asuka",
      imagen: "./IMG/asuka.jpg",
      categoria: {
          nombre: "Anime",
          id: "anime"
      },
      precio: 3.75
      },
      {
          id: "Llavero-12",
          titulo: "Finn",
          imagen: "./IMG/finn.jpg",
          categoria: {
              nombre: "Accion",
              id: "accion"
          },
          precio: 3.50
      },
      {
          id: "Llavero-13",
          titulo: "Jake",
          imagen: "./IMG/jake.jpg",
          categoria: {
              nombre: "Accion",
              id: "accion"
          },
          precio: 3.50
      },
      {
          id: "Llavero-14",
          titulo: "Kenny",
          imagen: "./IMG/kenny.webp",
          categoria: {
              nombre: "South-Park",
              id: "south-park"
          },
          precio: 4.00
      },
      {
          id: "Llavero-15",
          titulo: "Killjoy",
          imagen: "./IMG/killjoy.jpg",
          categoria: {
              nombre: "Valorant",
              id: "valorant"
          },
          precio: 3.50
      },
      {
          id: "Llavero-16",
          titulo: "Link",
          imagen: "./IMG/link.jpg",
          categoria: {
              nombre: "Accion",
              id: "accion"
          },
          precio: 3.50
      },
      {
          id: "Llavero-17",
          titulo: "Neon",
          imagen: "./IMG/neon.jpg",
          categoria: {
              nombre: "Valorant",
              id: "valorant"
          },
          precio: 3.50
      },
      {
          id: "Llavero-18",
          titulo: "Rayquaza",
          imagen: "./IMG/rayquaza.webp",
          categoria: {
              nombre: "Pokemon",
              id: "pokemon"
          },
          precio: 4.00
      },
      {
        id: "Llavero-19",
        titulo: "Sova",
        imagen: "./IMG/sova.jpg",
        categoria: {
            nombre: "Valorant",
            id: "valorant"
        },
        precio: 3.50
       },
       {
        id: "Llavero-20",
        titulo: "Wendy",
        imagen: "./IMG/wendy.webp",
        categoria: {
            nombre: "South-Park",
            id: "south-park"
        },
        precio: 4.00
     },
     {
      id: "Llavero-21",
      titulo: "Stan",
      imagen: "./IMG/stan.webp",
      categoria: {
          nombre: "South-Park",
          id: "south-park"
      },
      precio: 4.00
  }
  ];
  
  const contenedorProductos = document.querySelector("#contenedor_productos");
  const botonesCategorias = document.querySelectorAll(".boton-categoria");
  const tituloPrincipal = document.querySelector("#titulo-principal");
  let botonesAgregar = document.querySelectorAll(".producto-agregar");
  const numerito =document.querySelector("#numerito");
  
  
  function cargarProductos(productosElegidos){
  
      contenedorProductos.innerHTML = "";
      
      productosElegidos.forEach(producto => {
          const div = document.createElement("div");
          div.classList.add("producto");
          div.innerHTML = `
          <div class="productos">
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" width="266" height="266"></img>
          <div class="producto-detalle">
          <h1 class="producto-titulo">${producto.titulo}</h1>
          <p class="producto-precio">$${producto.precio}</p>
          <button class="producto-agregar" id="${producto.id}">Ver Producto</button>
          </div>
      </div>
      `;
      contenedorProductos.append(div);
          
      })
      actualizarBotonesAgregar()
          console.log(botonesAgregar);
  }
  
  cargarProductos(productos);
  
  botonesCategorias.forEach(boton => {
      boton.addEventListener("click", (e) => {
  
          botonesCategorias.forEach(boton => boton.classList.remove("active"))
          e.currentTarget.classList.add("active");
          
          if(e.currentTarget.id != "sin"){
              const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
              tituloPrincipal.innerText = productoCategoria.categoria.nombre
  
              const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
              cargarProductos(productosBoton);
          } else {
              tituloPrincipal.innerText ="Todos los Productos"
              cargarProductos(productos);
          }
      })
  });
  
  function actualizarBotonesAgregar(){
      botonesAgregar = document.querySelectorAll(".producto-agregar");
  
      botonesAgregar.forEach(boton =>{
          boton.addEventListener("click", agregarAlcarrito);
      });
      
  }