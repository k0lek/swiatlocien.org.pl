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
        mobileMenu.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Gallery images data
const galleryImages = [
    {
        src: 'images/0.jpg.WebP',
        alt: 'Zdjęcie 1',
        category: 'landscape',
        title: 'Biblioteka w Rydze',
        description: 'Fasada biblioteki w Rydze na Łotwie.'
    },
    {
        src: 'images/1.jpg.WebP',
        alt: 'Zdjęcie 2',
        category: 'landscape',
        title: 'Ulica w Rydze',
        description: 'Starodawna uliczna w centrum Rygi.'
    },
    {
        src: 'images/2.jpg.WebP',
        alt: 'Zdjęcie 3',
        category: 'landscape',
        title: 'Tatry',
        description: 'Droga do doliny'
    },
    {
        src: 'images/3.jpg.WebP',
        alt: 'Zdjęcie 4',
        category: 'landscape',
        title: 'Kosciół Wang',
        description: 'Kościoł w Karpaczu z XII wieku.'
    },
    {
        src: 'images/4.jpg.WebP',
        alt: 'Zdjęcie 5',
        category: 'landscape',
        title: 'Jeleniogórski Park Krajobrazowy',
        description: 'Droga z zamku Chojnik w Jelenij Górze.'
    },
    {
        src: 'images/5.jpg.WebP',
        alt: 'Zdjęcie 6',
        category: 'landscape',
        title: 'Tatry',
        description: 'Szczyty górskich Tatr.'
    },
    {
        src: 'images/6.jpg.WebP',
        alt: 'Zdjęcie 7',
        category: 'landscape',
        title: 'Tatry',
        description: 'Lasy górskie'
    },
    {
        src: 'images/7.jpg.WebP',
        alt: 'Zdjęcie 8',
        category: 'art',
        title: 'Codzienność',
        description: 'Praca na temat "Codzienność w ramach zajęć z fotografii".'
    },
    {
        src: 'images/8.jpg.WebP',
        alt: 'Zdjęcie 9',
        category: 'landscape',
        title: 'Młyn na wsi',
        description: 'Muzeum wsi w Lublinie.'
    },
    {
        src: 'images/9.jpg.WebP',
        alt: 'Zdjęcie 10',
        category: 'art',
        title: 'Sen na jawie.',
        description: 'Praca na temat "Sen na jawie" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/10.jpg.WebP',
        alt: 'Zdjęcie 11',
        category: 'landscape',
        title: 'Suwalszczyzna',
        description: 'Okolice miejscowości Wodziłki.'
    },
    {
        src: 'images/11.jpg.WebP',
        alt: 'Zdjęcie 12',
        category: 'art',
        title: 'Wiatr',
        description: 'Praca na temat "Wiatr" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/12.jpg.WebP',
        alt: 'Zdjęcie 13',
        category: 'landscape',
        title: 'Brama Grodzka.',
        description: 'Brama Grodzka w Lublinie.'
    },
    {
        src: 'images/13.jpg.WebP',
        alt: 'Zdjęcie 14',
        category: 'landscape',
        title: 'Jeleniogórski Park Krajobrazowy',
        description: 'Droga do góry w Jeleniogórskim Parku Krajobrazowym.'
    },
    {
        src: 'images/14.jpg.WebP',
        alt: 'Zdjęcie 15',
        category: 'landscape',
        title: 'Tatry',
        description: 'Góry i pagórki w Tatrach.'
    },
    {
        src: 'images/15.jpg.WebP',
        alt: 'Zdjęcie 16',
        category: 'landscape',
        title: 'Most w Rydze',
        description: 'Most w Rydze na Łotwie.'
    },
    {
        src: 'images/16.jpg.WebP',
        alt: 'Zdjęcie 17',
        category: 'landscape',
        title: 'Biebrzański Park Krajobrazowy',
        description: 'Zachód śłońca na łąkach w Biebrzańskim Parku Krajobrazowym.'
    },
    {
        src: 'images/17.jpg.WebP',
        alt: 'Zdjęcie 18',
        category: 'art',
        title: 'Kreatura',
        description: 'Praca na temat "Kreatura" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/18.jpg.WebP',
        alt: 'Zdjęcie 19',
        category: 'landscape',
        title: 'Tatry',
        description: 'Góry i pagórki w Tatrach.'
    },
    {
        src: 'images/19.jpg.WebP',
        alt: 'Zdjęcie 20',
        category: 'landscape',
        title: 'Tatry',
        description: 'Góry i pagórki w Tatrach.'
    },
    {
        src: 'images/20.jpg.WebP',
        alt: 'Zdjęcie 21',
        category: 'landscape',
        title: 'Bieszczady',
        description: 'Góry i pagórki w Bieszczadach.'
    },
    {
        src: 'images/21.jpg.WebP',
        alt: 'Zdjęcie 22',
        category: 'art',
        title: '(Nie)dowidzenia',
        description: 'Praca na temat "(Nie)dowidzenia" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/22.jpg.WebP',
        alt: 'Zdjęcie 23',
        category: 'landscape',
        title: 'Tatry',
        description: 'Droga pod górami.'
    },
    {
        src: 'images/23.jpg.WebP',
        alt: 'Zdjęcie 24',
        category: 'landscape',
        title: 'Tatry',
        description: 'Droga przez góry.'
    },
    {
        src: 'images/24.jpg.WebP',
        alt: 'Zdjęcie 25',
        category: 'art',
        title: 'Dwa w jednym.',
        description: 'Praca na temat "Dwa w jednym" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/25.jpg.WebP',
        alt: 'Zdjęcie 26',
        category: 'art',
        title: 'Po drugiej stronie',
        description: 'Praca na temat "Po drugiej stronie" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/26.jpg.WebP',
        alt: 'Zdjęcie 27',
        category: 'landscape',
        title: 'Bieszczady',
        description: 'Panorama Bieszczadów.'
    },
    {
        src: 'images/27.jpg.WebP',
        alt: 'Zdjęcie 28',
        category: 'landscape',
        title: 'Dolina Gąsienicowa',
        description: 'Dolina Gąsienicowa w Tatrach przy pogodzie puchmurnej, jesiennej.'
    },
    {
        src: 'images/28.jpg.WebP',
        alt: 'Zdjęcie 29',
        category: 'landscape',
        title: 'Dolina Gąsienicowa',
        description: 'Dolina Gąsienicowa w Tatrach przy pogodzie słonecznej.'
    },
    {
        src: 'images/29.jpg.WebP',
        alt: 'Zdjęcie 30',
        category: 'landscape',
        title: 'Bieszczady',
        description: 'Droga do góry w Bieszczadach.'
    },
    {
        src: 'images/30.jpg.WebP',
        alt: 'Zdjęcie 31',
        category: 'landscape',
        title: 'Borowy Jar',
        description: 'Borowy Jar w Jeleniej Górze.  '
    },
    {
        src: 'images/31.jpg.WebP',
        alt: 'Zdjęcie 32',
        category: 'art',
        title: 'Minimalizm',
        description: 'Praca na temat "Minimalizm" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/32.jpg.WebP',
        alt: 'Zdjęcie 33',
        category: 'landscape',
        title: 'Tatry',
        description: 'Droga przez góry do Smreczyńskiego stawu.'
    },
    {
        src: 'images/33.jpg.WebP',
        alt: 'Zdjęcie 34',
        category: 'landscape',
        title: 'Suwalszczyzna',
        description: 'Droga przez pola w okolicach Wodziłek.'
    },
    {
        src: 'images/34.jpg.WebP',
        alt: 'Zdjęcie 35',
        category: 'portrait',
        title: 'Owca górska',
        description: 'Interesowna owca górska w Zakopanem.'
    }
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
                     class="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                     onerror="this.onerror=null; this.src='images/placeholder.jpg';">
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