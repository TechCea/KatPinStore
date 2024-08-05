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
        imagen: "./IMG/gatoasesinoPi.jpg",
        imagenesCarrusel: ["./IMG/gatoasesinoPi.jpg", "./IMG/gatoasesinomano.jpeg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 1.50,
        descripcion: "Pin de gato adorable."
    },
    {
        id: "PIN-02",
        titulo: "Pin de Gatito ",
        imagen: "./IMG/gatotrash.jpg",
        imagenesCarrusel: ["./IMG/gatotrash.jpg", "./IMG/gatitotrashman.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.50,
        descripcion: "Llavero de Articuno, el legendario Pokémon."
    },
    {
        id: "PIN-03",
        titulo: "Pin de Capibara",
        imagen: "./IMG/capibara1.jpg",
        imagenesCarrusel: ["./IMG/capibara1.jpg", "./IMG/CapibaraMano.jpg"],
        categoria: { nombre: "Valorant", id: "valorant" },
        precio: 3.50,
        descripcion: "Llavero de Astra de Valorant."
    },
    {
        id: "PIN-04",
        titulo: "Pin de Pikachu",
        imagen: "./IMG/pikachu.jpg",
        imagenesCarrusel: ["./IMG/pikachu.jpg", "./IMG/pikachumano.jpg"],
        categoria: {
            nombre: "Pokemon",
            id: "Pokemon"
        },
        precio: 3.50,
         descripcion: "Pin de gato adorable."
    },
    {
        id: "PIN-05",
        titulo: "Pin de Gato",
        imagen: "./IMG/gatoflorespin.jpg",
        imagenesCarrusel: ["./IMG/gatoflorespin.jpg", "./IMG/gatofloresmano.jpg"],
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 3.50,
        descripcion: "Pin de gato adorable."
    },
    {
        id: "PIN-06",
        titulo: "Pin de Astronauta",
        imagen: "./IMG/astronauta.jpg",
        imagenesCarrusel: ["./IMG/astronauta.jpg", "./IMG/astronauta1.jpg"],
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.50,
        descripcion: "Pin de gato adorable."
    },
    {
        id: "PIN-07",
        titulo: "Pin de Gato Fantasma",
        imagen: "./IMG/fantasmagato1.jpg",
        imagenesCarrusel: ["./IMG/fantasmagato1.jpg", "./IMG/fantasmagato2.jpg"],
        categoria: {
            nombre: "Pokemon",
            id: "pokemon"
        },
        precio: 3.50,
        descripcion: "Pin de gato adorable."
    },
    {
        id: "PIN-08",
        titulo: "Pin de Gatito",
        imagen: "./IMG/gattito.jpg",
        imagenesCarrusel: ["./IMG/gattito.jpg", "./IMG/gattito2.jpg"],
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.50,
        descripcion: "Pin de gato adorable."
    },
    {
        id: "PIN-09",
        titulo: "Pin de Gatito",
        imagen: "./IMG/gattitto.jpg",
        imagenesCarrusel: ["./IMG/gattitto.jpg", "./IMG/gattitto2.jpg"],
        categoria: {
            nombre: "Accion",
            id: "accion"
        },
        precio: 3.50,
        descripcion: "Pin de gato adorable."
    },
    {
      id: "PIN-10",
      titulo: "Pin de Bob Esponja",
      imagen: "./IMG/bob.jpg",
      imagenesCarrusel: ["./IMG/bob.jpg", "./IMG/bob1.jpg"],
      categoria: {
          nombre: "Accion",
          id: "accion"
      },
      precio: 3.50,
      descripcion: "Pin de gato adorable."
     },
     {
      id: "PIN-11",
      titulo: "Pin de Nintendo",
      imagen: "./IMG/nintendo.jpg",
      imagenesCarrusel: ["./IMG/nintendo.jpg", "./IMG/nintendomano.jpg"],
      categoria: {
          nombre: "Anime",
          id: "anime"
      },
      precio: 3.50,
      descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN-12",
          titulo: "Pin de Ganyu",
          imagen: "./IMG/genshi.jpg",
          imagenesCarrusel: ["./IMG/genshi.jpg", "./IMG/genshi1.jpg"],
          categoria: {
              nombre: "Genshin Impact",
              id: "Genshin Impact"
          },
          precio: 7.50,
          descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN-13",
          titulo: "Pin de Xiao",
          imagen: "./IMG/genshin.jpg",
          imagenesCarrusel: ["./IMG/genshin.jpg", "./IMG/genshin2.jpg"],
          categoria: {
              nombre: "Genshin Impact",
              id: "Genshin Impact"
          },
          precio: 6.50,
          descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN14",
          titulo: "Pin de Astronauta",
          imagen: "./IMG/starastro.jpg",
          imagenesCarrusel: ["./IMG/starastro.jpg", "./IMG/starastro1.jpg"],
          categoria: {
              nombre: "South-Park",
              id: "south-park"
          },
          precio: 3.50,
          descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN-15",
          titulo: "Pin de Capibara Cumpleañero",
          imagen: "./IMG/capibaracum.jpg",
          imagenesCarrusel: ["./IMG/capibaracum.jpg", "./IMG/capibaracum1.jpg"],
          categoria: {
              nombre: "Valorant",
              id: "valorant"
          },
          precio: 3.50,
          descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN-16",
          titulo: "Pin de Gravity Falls",
          imagen: "./IMG/book1.jpg",
          imagenesCarrusel: ["./IMG/book1.jpg", "./IMG/book.jpg"],
          categoria: {
              nombre: "Accion",
              id: "accion"
          },
          precio: 3.50,
          descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN-17",
          titulo: "Pin de Gatito",
          imagen: "./IMG/Gatomaceta.jpg",
          imagenesCarrusel: ["./IMG/Gatomaceta.jpg", "./IMG/Gatomaceta1.jpg"],
          categoria: {
              nombre: "Valorant",
              id: "valorant"
          },
          precio: 3.00,
          descripcion: "Pin de gato adorable."
      },
      {
          id: "PIN-18",
          titulo: "Pin de Fantasma",
          imagen: "./IMG/fantasmabook.jpg",
          imagenesCarrusel: ["./IMG/fantasmabook.jpg", "./IMG/fantasmabook1.jpg"],
          categoria: {
              nombre: "Pokemon",
              id: "pokemon"
          },
          precio: 3.50,
          descripcion: "Pin de gato adorable."
      }
  ];

  const contenedorProductos = document.querySelector("#contenedor_productos");
const popup = document.querySelector("#product-popup");
const popupImg = document.querySelector("#popup-img");
const popupTitle = document.querySelector("#popup-title");
const popupCategory = document.querySelector("#popup-category");
const popupPrice = document.querySelector("#popup-price");
const popupDescription = document.querySelector("#popup-description");
const closePopup = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentImageIndex = 0;
let currentProductImages = [];

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto-imagen-container">
                <div class="producto-titulo-container">
                    <h2 class="producto-titulo">${producto.titulo}</h2>
                </div>
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <button class="producto-agregar" data-id="${producto.id}">Ver Producto</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    document.querySelectorAll(".producto-agregar").forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            const producto = productos.find(p => p.id === id);
            currentImageIndex = 0;
            currentProductImages = producto.imagenesCarrusel || [producto.imagen];
            popupImg.src = currentProductImages[currentImageIndex];
            popupTitle.textContent = producto.titulo;
            popupCategory.textContent = ` ${producto.categoria.nombre}`;
            popupPrice.textContent = `Precio: $ ${producto.precio.toFixed(2)}`;
            popupDescription.textContent = producto.descripcion;
            popup.style.display = "flex";
        });
    });
}

function showImage(index) {
    currentImageIndex = (index + currentProductImages.length) % currentProductImages.length;
    popupImg.style.transform = "translateX(100%)";
    setTimeout(() => {
        popupImg.src = currentProductImages[currentImageIndex];
        popupImg.style.transform = "translateX(0)";
    }, 100);
}

prevButton.addEventListener("click", () => {
    showImage(currentImageIndex - 1);
});

nextButton.addEventListener("click", () => {
    showImage(currentImageIndex + 1);
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

cargarProductos(productos);