// Prevent right-click and image downloading
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('dragstart', (e) => e.preventDefault());
document.addEventListener('selectstart', (e) => e.preventDefault());

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('#mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Gallery images data
const galleryImages = [
    {
        src: 'images/1.jpg',
        alt: 'Zdjęcie 1',
        category: 'portrait',
        title: 'Portret 1',
        description: 'Profesjonalna sesja portretowa'
    },
    {
        src: 'images/2.png',
        alt: 'Zdjęcie 2',
        category: 'landscape',
        title: 'Krajobraz 1',
        description: 'Zachód słońca nad górami'
    },
    {
        src: 'images/3.png',
        alt: 'Zdjęcie 3',
        category: 'art',
        title: 'Art 1',
        description: 'Abstrakcyjna kompozycja'
    },
    {
        src: 'images/4.png',
        alt: 'Zdjęcie 4',
        category: 'art',
        title: 'Art 2',
        description: 'Abstrakcyjna kompozycja'
    },
    {
        src: 'images/5.png',
        alt: 'Zdjęcie 5',
        category: 'art',
        title: 'Art 3',
        description: 'Abstrakcyjna kompozycja'
    },
    {
        src: 'images/6.png',
        alt: 'Zdjęcie 6',
        category: 'art',
        title: 'Art 4',
        description: 'Abstrakcyjna kompozycja'
    }
    // Add more images as needed
];

// Function to create gallery items
function createGalleryItem(image) {
    return `
        <div class="gallery-item group relative overflow-hidden rounded-lg shadow-lg" data-category="${image.category}">
            <a href="${image.src}" 
               data-lightbox="gallery" 
               data-title="${image.title}" 
               data-description="${image.description}"
               class="lightbox-link">
                <img src="${image.src}" 
                     alt="${image.alt}" 
                     class="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 class="text-xl font-bold">${image.title}</h3>
                        <p class="text-sm mt-1">${image.description}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Load gallery items
function loadGallery() {
    const galleryContainer = document.querySelector('#gallery .grid');
    if (galleryContainer) {
        galleryContainer.innerHTML = galleryImages.map(image => createGalleryItem(image)).join('');
    }
}

// Gallery filtering
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    initGalleryFilters();
    
    // Configure lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Zdjęcie %1 z %2',
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'positionFromTop': 100,
        'maxWidth': 1200,
        'maxHeight': 800,
        'disableScrolling': true,
        'alwaysShowNavOnTouchDevices': true,
        'showImageNumberLabel': true,
        'fitImagesInViewport': true,
        'wrapAround': true,
        'captionPosition': 'bottom',
        'captionSelector': 'img',
        'captionType': 'attr',
        'captionsData': 'title',
        'captionHTML': true,
        'captionClass': 'lightbox-caption',
        'captionText': function(element) {
            const title = element.getAttribute('data-title');
            const description = element.getAttribute('data-description');
            return `<div class="lightbox-caption-content">
                        <h3 class="text-xl font-bold mb-2">${title}</h3>
                        <p class="text-sm">${description}</p>
                    </div>`;
        }
    });
}); 