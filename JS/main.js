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

    setInterval(changeImage6, 5000); // Cambia cada 5 segundos
    setInterval(changeImage7, 5000); // Cambia cada 5 segundos
});