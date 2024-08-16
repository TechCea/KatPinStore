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

    // Función para precargar imágenes
    function preloadImages(imageArray) {
        imageArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Precarga de imágenes
    preloadImages(images6);
    preloadImages(images7);

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

    setInterval(changeImage6, 6000); // Cambia cada 6 segundos
    setInterval(changeImage7, 6000); // Cambia cada 6 segundos
});



const productos = [
    {
        id: "PIN-01",
        titulo: "Pin de Gato Asesino 🐈‍⬛🔪",
        imagen: "./IMG/gatoasesinoP.jpg",
        imagenesCarrusel: ["./IMG/gatoasesinoP.jpg", "./IMG/gatoasesinomano.jpeg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 1.50,
        descripcion: "Pin de un gato con una expresión maliciosa, ideal para los amantes de los felinos con carácter."
    },
    {
        id: "PIN-02",
        titulo: "Pin de Gatito En Basurero",
        imagen: "./IMG/gatotrash.jpg",
        imagenesCarrusel: ["./IMG/gatotrash.jpg", "./IMG/gatitotrashman.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.50,
        descripcion: "Pin de un gatito rebelde en un Basurero, perfecto para aquellos que aprecian el arte urbano."
    },
    {
        id: "PIN-03",
        titulo: "Pin de Capibara",
        imagen: "./IMG/capibara1.jpg",
        imagenesCarrusel: ["./IMG/capibara1.jpg", "./IMG/CapibaraMano.jpg"],
        categoria: { nombre: "Animales", id: "animales" },
        precio: 3.50,
        descripcion: "Pin de una capibara relajado, el roedor más grande y amigable del mundo, en un diseño adorable."
    },
    {
        id: "PIN-04",
        titulo: "Pin de Pikachu",
        imagen: "./IMG/pikachu.jpg",
        imagenesCarrusel: ["./IMG/pikachu.jpg", "./IMG/pikachumano.jpg"],
        categoria: { nombre: "Pokemon", id: "Pokemon" },
        precio: 3.50,
        descripcion: "Pin del icónico Pikachu, el Pokémon más querido de todos, con una expresión juguetona."
    },
    {
        id: "PIN-05",
        titulo: "Pin de Gengar 👻👻",
        imagen: "./IMG/gengar.jpg",
        imagenesCarrusel: ["./IMG/gengar.jpg","./IMG/gengarmano.jpg", "./IMG/gengarmano1.jpg"],
        categoria: { nombre: "Pokemon", id: "Pokemon" },
        precio: 3.50,
        descripcion: "Pin de Gengar, el Pokémon fantasma, con una sonrisa traviesa que encanta a todos."
    },
    {
        id: "PIN-06",
        titulo: "Pin de Astronauta",
        imagen: "./IMG/astronauta.jpg",
        imagenesCarrusel: ["./IMG/astronauta.jpg", "./IMG/astronauta1.jpg"],
        categoria: { nombre: "Espacio", id: "espacio" },
        precio: 3.50,
        descripcion: "Pin de un astronauta flotando en el espacio, perfecto para los aficionados de la exploración espacial."
    },
    {
        id: "PIN-07",
        titulo: "Pin de Gato Fantasma",
        imagen: "./IMG/fantasmagato1.jpg",
        imagenesCarrusel: ["./IMG/fantasmagato1.jpg", "./IMG/fantasmagato2.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.50,
        descripcion: "Pin de un gato con un disfraz de fantasma, ideal para los amantes de lo paranormal y lo felino."
    },
    {
        id: "PIN-08",
        titulo: "Pin de Gatito",
        imagen: "./IMG/gattito.jpg",
        imagenesCarrusel: ["./IMG/gattito3.jpg", "./IMG/gattito2.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.50,
        descripcion: "Pin de un gatito trantando de comerse un pescado, perfecto para los amantes de los gatos."
    },
    {
        id: "PIN-09",
        titulo: "Pin de Gatito",
        imagen: "./IMG/gattitto.jpg",
        imagenesCarrusel: ["./IMG/gattitto.jpg", "./IMG/gattitto2.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.50,
        descripcion: "Pin de un gatito mordiendo un florero en una situación cómica, ideal para los que disfrutan del humor felino."
    },
    {
        id: "PIN-10",
        titulo: "Pin de Bob Esponja",
        imagen: "./IMG/bob.jpg",
        imagenesCarrusel: ["./IMG/bob.jpg", "./IMG/bob1.jpg"],
        categoria: { nombre: "Series Animadas", id: "series-animadas" },
        precio: 3.50,
        descripcion: "Pin de Bob Esponja en su expresión característica, perfecto para los fans de Fondo de Bikini."
    },
    {
        id: "PIN-11",
        titulo: "Pin de Nintendo",
        imagen: "./IMG/nintendo.jpg",
        imagenesCarrusel: ["./IMG/nintendo.jpg", "./IMG/nintendomano.jpg"],
        categoria: { nombre: "Videojuegos", id: "videojuegos" },
        precio: 3.50,
        descripcion: "Pin clásico de Nintendo, con un diseño retro que evoca la nostalgia de los primeros juegos."
    },
    {
        id: "PIN-12",
        titulo: "Pin de Ganyu",
        imagen: "./IMG/genshi.jpg",
        imagenesCarrusel: ["./IMG/genshi.jpg", "./IMG/genshi1.jpg"],
        categoria: { nombre: "Genshin Impact", id: "Genshin Impact" },
        precio: 7.50,
        descripcion: "Pin de Ganyu, la arquera de hielo de Genshin Impact, en una pose elegante y detallada."
    },
    {
        id: "PIN-13",
        titulo: "Pin de Xiao",
        imagen: "./IMG/genshin.jpg",
        imagenesCarrusel: ["./IMG/genshin.jpg", "./IMG/genshin2.jpg"],
        categoria: { nombre: "Genshin Impact", id: "Genshin Impact" },
        precio: 6.50,
        descripcion: "Pin de Xiao, el guardián de Liyue en Genshin Impact, con un diseño oscuro y misterioso."
    },
    {
        id: "PIN-14",
        titulo: "Pin de Astronauta Estrella",
        imagen: "./IMG/starastro.jpg",
        imagenesCarrusel: ["./IMG/starastro.jpg", "./IMG/starastro1.jpg"],
        categoria: { nombre: "Espacio", id: "espacio" },
        precio: 3.50,
        descripcion: "Pin de un astronauta con una estrella en el fondo, perfecto para los amantes del cosmos."
    },
    {
        id: "PIN-15",
        titulo: "Pin de Capibara Cumpleañero",
        imagen: "./IMG/capibaracum.jpg",
        imagenesCarrusel: ["./IMG/capibaracum.jpg", "./IMG/capibaracum1.jpg"],
        categoria: { nombre: "Animales", id: "animales" },
        precio: 3.50,
        descripcion: "Pin de una capibara celebrando su cumpleaños, con un gorrito festivo y una expresión feliz."
    },
    {
        id: "PIN-17",
        titulo: "Pin de Gatito en Maceta",
        imagen: "./IMG/Gatomaceta.jpg",
        imagenesCarrusel: ["./IMG/Gatomaceta.jpg", "./IMG/Gatomaceta1.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.00,
        descripcion: "Pin de un gatito asomándose desde una maceta, una combinación encantadora de naturaleza y felinos."
    },
    {
        id: "PIN-18",
        titulo: "Pin de Fantasma👻",
        imagen: "./IMG/fantasmabook.jpg",
        imagenesCarrusel: ["./IMG/fantasmabook.jpg", "./IMG/fantasmabook1.jpg"],
        categoria: { nombre: "Horror", id: "horror" },
        precio: 3.50,
        descripcion: "Pin de un fantasma espeluznante saliendo de un libro, ideal para los fans de lo paranormal."
    },
    {
        id: "PIN-19",
        titulo: "Pin de Gato con Flores",
        imagen: "./IMG/gatoflorespin.jpg",
        imagenesCarrusel: ["./IMG/gatoflorespin.jpg", "./IMG/gatofloresmano.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.50,
        descripcion: "Pin de un gato adornado con flores, una combinación de naturaleza y felinos para los amantes del arte."
    },
    {
        id: "PIN-20",
        titulo: "Llavero de Vandal Reaver - Valorant 🎮",
        imagen: "./IMG/reaver1.jpg",
        imagenesCarrusel: ["./IMG/reaver1.jpg", "./IMG/reaver2.jpg", "./IMG/reaver3.jpg"],
        categoria: { nombre: "Valorant", id: "Valorant" },
        precio: 5.00,
        descripcion: "Llavero detallado de la Vandal Reaver de Valorant, con un diseño oscuro y elegante para los fanáticos del juego."
    },
    {
        id: "PIN-22",
        titulo: "Pin Señal de Advertencia T-Rex 🦖",
        imagen: "./IMG/jurasick.jpg",
        imagenesCarrusel: ["./IMG/jurasick.jpg", "./IMG/jurasick2.jpg"],
        categoria: { nombre: "Aventura", id: "aventura" }, // Cambié la categoría a 'Aventura' para que sea más relevante
        precio: 2.00,
        descripcion: "Pin de una señal de advertencia con un T-Rex, inspirado en las películas de dinosaurios."
    },
    {
        id: "PIN-23",
        titulo: "Pin de Gatito HEI 😺",
        imagen: "./IMG/gatitoHEI.jpg",
        imagenesCarrusel: ["./IMG/gatitoHEI.jpg", "./IMG/gatitoHEI2.jpg"],
        categoria: { nombre: "Gatos", id: "Gatos" },
        precio: 3.00,
        descripcion: "Pin de un gatito con una expresión graciosa y estilo cartoon, perfecto para los amantes de los gatos y el humor visual."
    },
    {
        id: "PIN-24",
        titulo: "Pin de Jack Skellington",
        imagen: "./IMG/jack.jpg",
        imagenesCarrusel: ["./IMG/jack.jpg", "./IMG/jack2.jpg"],
        categoria: { nombre: "Horror", id: "horror" },
        precio: 4.25,
        descripcion: "Pin de Jack Skellington, el icónico personaje de 'El extraño mundo de Jack'. Ideal para los fans del cine de Tim Burton y lo gótico."
    },
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
  
  function preloadImages(images) {
      images.forEach((image) => {
          const img = new Image();
          img.src = image;
      });
  }
  
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
                  <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" loading="lazy">
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
              preloadImages(currentProductImages);
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

  document.querySelectorAll('.timer').forEach(timer => {
    const endTime = new Date(timer.getAttribute('data-end-time')).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endTime - now;
  
      if (distance < 0) {
        timer.innerHTML = "Promoción terminada";
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      timer.innerHTML = `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  