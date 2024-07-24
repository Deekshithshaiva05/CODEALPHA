document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const gridItems = document.querySelectorAll('.grid-item .image img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    let currentImageIndex = 0;
    let slideshowInterval;

    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            showImageInLightbox(thumbnail.src);
        });
    });

    // Grid item click event
    gridItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            showImageInLightbox(item.src);
        });
    });

    // Show image in lightbox
    function showImageInLightbox(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'block';
        stopSlideshow();
    }

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        startSlideshow();
    });

    // Previous and Next button functionality
    document.getElementById('prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : thumbnails.length - 1;
        showImageInLightbox(thumbnails[currentImageIndex].src);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < thumbnails.length - 1) ? currentImageIndex + 1 : 0;
        showImageInLightbox(thumbnails[currentImageIndex].src);
    });

    // Automatic slideshow
    function startSlideshow() {
        slideshowInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex < thumbnails.length - 1) ? currentImageIndex + 1 : 0;
            showImageInLightbox(thumbnails[currentImageIndex].src);
        }, 3000);
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    // Start the slideshow
    startSlideshow();
});
