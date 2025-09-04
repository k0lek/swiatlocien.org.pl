// Prevent right-click and image downloading
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('dragstart', (e) => e.preventDefault());
document.addEventListener('selectstart', (e) => e.preventDefault());

// Store current category
let currentCategory = 'all';

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
        src: 'images/1.webp',
        alt: 'Zdjęcie 1',
        category: 'landscape',
        title: 'Biblioteka w Rydze',
        description: 'Nowoczesna architektura w Rydze.'
    },
    {
        src: 'images/2.webp',
        alt: 'Zdjęcie 2',
        category: 'landscape',
        title: 'Suwalszczyzna',
        description: 'Piękna wieś w okolicach Suwałk.'
    },
    {
        src: 'images/3.webp',
        alt: 'Zdjęcie 3',
        category: 'art',
        title: 'Wiatr',
        description: 'Zdjęcie tematyczne "Wiatr".'
    },
    {
        src: 'images/4.webp',
        alt: 'Zdjęcie4',
        category: 'landscape',
        title: 'Brama Grodzka',
        description: 'Droga przez bramę do zamku, Lublin.'
    },
    {
        src: 'images/5.webp',
        alt: 'Zdjęcie 5',
        category: 'landscape',
        title: 'Zamek Chojnik',
        description: 'Droga na zamek Chojnik, Jelenia Góra.'
    },
    {
        src: 'images/6.webp',
        alt: 'Zdjęcie 6',
        category: 'landscape',
        title: 'Widokówka',
        description: 'Krajobraz Tatr.'
    },
    {
        src: 'images/7.webp',
        alt: 'Zdjęcie 7',
        category: 'landscape',
        title: 'Ryga',
        description: 'Miasto Ryga.'
    },
    {
        src: 'images/8.webp',
        alt: 'Zdjęcie 8',
        category: 'landscape',
        title: 'Biebrza',
        description: 'Pejzaż Parku Narodowego Biebrza.'
    },
    {
        src: 'images/9.webp',
        alt: 'Zdjęcie 9',
        category: 'art',
        title: 'Kreatura',
        description: 'Zdjęcie tematyczne "kreatura".'
    },
    {
        src: 'images/10.webp',
        alt: 'Zdjęcie 10',
        category: 'landscape',
        title: 'Pejzaż Tatr',
        description: 'Góry i doliny w Tatrach.'
    },
    {
        src: 'images/11.webp',
        alt: 'Zdjęcie 11',
        category: 'landscape',
        title: 'Tatry',
        description: 'Droga w lesie we mgle.'
    },
    {
        src: 'images/12.webp',
        alt: 'Zdjęcie 12',
        category: 'landscape',
        title: 'Ulica w Rydze',
        description: 'Architektura w mieście Ryga.'
    },
    {
        src: 'images/13.webp',
        alt: 'Zdjęcie 13',
        category: 'landscape',
        title: 'Bieszczady',
        description: 'Szczyt w Bieszczadach.'
    },
    {
        src: 'images/14.webp',
        alt: 'Zdjęcie 14',
        category: 'art',
        title: 'Drzewa',
        description: 'Zdjęcie tematyczne "(Nie)dowidzenia".'
    },
    {
        src: 'images/15.webp',
        alt: 'Zdjęcie 15',
        category: 'landscape',
        title: 'Bacówka w Tatrach',
        description: 'Droga Doliną.'
    },
    {
        src: 'images/16.webp',
        alt: 'Zdjęcie 16',
        category: 'landscape',
        title: 'Dolina rzeczna w Tatrach',
        description: 'Stary most nad strumieniem.'
    },
    {
        src: 'images/17.webp',
        alt: 'Zdjęcie 17',
        category: 'art',
        title: 'Spojrzenie',
        description: 'Praca na temat "Spojrzenie", wystawa PIK.'
    },
    {
        src: 'images/18.webp',
        alt: 'Zdjęcie 18',
        category: 'art',
        title: 'Po drugiej stronie',
        description: 'Praca na temat "Po drugiej stronie". Wystawa PIK. Opis: Jak dopasować dwa odmienne stany? Pięść jako zdecydowany charakter i otwarda dłoń jako uległość?'
    },
    {
        src: 'images/19.webp',
        alt: 'Zdjęcie 19',
        category: 'landscape',
        title: 'Bieszczady',
        description: 'Widokówka z Bieszczad.'
    },
    {
        src: 'images/20.webp',
        alt: 'Zdjęcie 20',
        category: 'landscape',
        title: 'Dolina Gąsienicowa, Tatry',
        description: 'Malownicza kraina w Tatrach.'
    },
    {
        src: 'images/21.webp',
        alt: 'Zdjęcie 21',
        category: 'landscape',
        title: 'Dolina Gąsienicowa, Tatry',
        description: 'Malownicza kraina w Tatrach Vol.2'
    },
    {
        src: 'images/22.webp',
        alt: 'Zdjęcie 22',
        category: 'landscape',
        title: 'Droga na szczyt.',
        description: 'Urok Bieszczadów.'
    },
    {
        src: 'images/23.webp',
        alt: 'Zdjęcie 23',
        category: 'landscape',
        title: 'Widokówka Tatry',
        description: 'Droga przez góry.'
    },
    {
        src: 'images/24.webp',
        alt: 'Zdjęcie 24',
        category: 'landscape',
        title: 'Borowy Jar',
        description: 'Drogami Borowego Jaru.'
    },
    {
        src: 'images/25.webp',
        alt: 'Zdjęcie 25',
        category: 'art',
        title: 'Minimalizm',
        description: 'Praca na temat "Minimalizm" w ramach zajęć z fotografii.'
    },
    {
        src: 'images/26.webp',
        alt: 'Zdjęcie 26',
        category: 'landscape',
        title: 'Droga w Tatrach',
        description: 'Schodki do stawu.'
    },
    {
        src: 'images/27.webp',
        alt: 'Zdjęcie 27',
        category: 'landscape',
        title: 'Suwalszczyzna',
        description: 'Uroki wsi na Suwalszczyźnie.'
    },
    {
        src: 'images/28.webp',
        alt: 'Zdjęcie 28',
        category: 'portrait',
        title: 'Zakopiańska owca',
        description: 'Interesowna owca zagląda w obiektyw podczas przemarszu.'
    },
    {
        src: 'images/29.webp',
        alt: 'Zdjęcie 29',
        category: 'landscape',
        title: 'Kościół Wang w Karpaczu',
        description: 'XII-wieczny, skandynawski kościół cały z drewna.'
    },
    {
        src: 'images/30.webp',
        alt: 'Zdjęcie 30',
        category: 'landscape',
        title: 'Droga z zamku Chojnik',
        description: 'Jeleniogórski Park.'
    },
    {
        src: 'images/31.webp',
        alt: 'Zdjęcie 31',
        category: 'landscape',
        title: 'Charakterne Tatry',
        description: 'Ulubiony kadr z Tatr.'
    },
    {
        src: 'images/32.webp',
        alt: 'Zdjęcie 32',
        category: 'landscape',
        title: 'Jodły Tatrzańskie',
        description: 'Tatry.'
    },
    {
        src: 'images/33.webp',
        alt: 'Zdjęcie 33',
        category: 'art',
        title: 'Codzienność',
        description: 'Zdjęcie tematyczne "Codzienność".'
    },
    {
        src: 'images/34.webp',
        alt: 'Zdjęcie 34',
        category: 'landscape',
        title: 'Muzeum Wsi w Lubline',
        description: 'Obraz starodwanej wsi Lubelskiej.'
    },
    {
        src: 'images/35.webp',
        alt: 'Zdjęcie 35',
        category: 'landscape',
        title: 'Sen na jawie',
        description: 'Zdjęcie tematyczne "Sen na jawie".'
    },
    {
        src: 'images/36.webp',
        alt: 'Zdjęcie 36',
        category: 'art',
        title: 'Osobnik',
        description: 'Zdjęcie tematyczne "niewyraźne".'
    },
    {
        src: 'images/37.webp',
        alt: 'Zdjęcie 37',
        category: 'portrait',
        title: 'Autoportret',
        description: 'Plener w intymnym miejscu.'
    },
    {
        src: 'images/38.webp',
        alt: 'Zdjęcie 38',
        category: 'art',
        title: 'Samochód vintage',
        description: 'Samochód w Londynie na pokazie.'
    },
    {
        src: 'images/39.webp',
        alt: 'Zdjęcie 39',
        category: 'portrait',
        title: 'Wspólna przestrzeń',
        description: 'Autoportrety artystyczne.'
    },
    {
        src: 'images/40.webp',
        alt: 'Zdjęcie 40',
        category: 'art',
        title: 'Spojrzenie',
        description: 'Zdjęcie tematyczne "Spojrzenie".'
    },
    {
        src: 'images/41.webp',
        alt: 'Zdjęcie 41',
        category: 'portrait',
        title: 'Autoportret',
        description: 'Autoportret artystyczny.'
    },
    {
        src: 'images/42.webp',
        alt: 'Zdjęcie 42',
        category: 'art',
        title: 'Przyjemne drzewo',
        description: 'Zdjęcie z pleneru.'
    },
    {
        src: 'images/43.webp',
        alt: 'Zdjęcie 43',
        category: 'portrait',
        title: 'Autoportret',
        description: 'Artystyczny autoportret.'
    },
    {
        src: 'images/44.webp',
        alt: 'Zdjęcie 44',
        category: 'art',
        title: 'Końskie wesele',
        description: 'Zdjęcie tematyczne, wystawa PIK.'
    },
    {
        src: 'images/45.webp',
        alt: 'Zdjęcie 45',
        category: 'portrait',
        title: 'Autoportret',
        description: 'Kolejny autoportret artystyczny.'
    },
    {
        src: 'images/46.webp',
        alt: 'Zdjęcie 46',
        category: 'art',
        title: 'Mijanie',
        description: 'Sfera chodnika.'
    },
    {
        src: 'images/47.webp',
        alt: 'Zdjęcie 47',
        category: 'art',
        title: 'Nierozerwalność',
        description: 'Praca na wystawę.'
    },
    {
        src: 'images/48.webp',
        alt: 'Zdjęcie 48',
        category: 'art',
        title: 'Spokój ogarnia chaos',
        description: 'Zdjęcie artystyczne.'
    },
    {
        src: 'images/49.webp',
        alt: 'Zdjęcie 49',
        category: 'art',
        title: 'Mrozi naturę, martwe',
        description: 'Okolice Borowego Jaru.'
    },
    {
        src: 'images/50.webp',
        alt: 'Zdjęcie 50',
        category: 'portrait',
        title: 'Kolejna przestrzeń.',
        description: 'Praca artystyczna.'
    },
    {
        src: 'images/51.webp',
        alt: 'Zdjęcie 51',
        category: 'art',
        title: 'Po drugiej stronie',
        description: 'Wystawa PIK. Co mogą mówić blizny? Historie. Każda z nich coś ma.'
    },
    {
        src: 'images/52.webp',
        alt: 'Zdjęcie 52',
        category: 'art',
        title: 'Wolność',
        description: 'Praca na temat "Wolność", wystawa Marchand.'
    },
    {
        src: 'images/53.webp',
        alt: 'Zdjęcie 53',
        category: 'art',
        title: 'Klisza 35',
        description: 'Analogowo-35-milimetrowo'
    },
    {
        src: 'images/54.webp',
        alt: 'Zdjęcie 54',
        category: 'art',
        title: 'Dwa światy',
        description: 'Praca na temat "Dwa Światy". Wystawa PIK.'
    },
    {
        src: 'images/55.webp',
        alt: 'Zdjęcie 55',
        category: 'art',
        title: 'Kształty, kreski, cienie.',
        description: 'Budowa myśli.'
    },
    {
        src: 'images/56.webp',
        alt: 'Zdjęcie 56',
        category: 'art',
        title: 'Inspiracja z filmu',
        description: 'Rekonstrukcja zdjęcia w "łazience Adolfa".'
    },
    {
        src: 'images/57.webp',
        alt: 'Zdjęcie 57',
        category: 'landscape',
        title: 'Morze Bałtyckie',
        description: 'Wyczekiwanie.'
    },
    {
        src: 'images/58.webp',
        alt: 'Zdjęcie 58',
        category: 'landscape',
        title: 'Góra Koni',
        description: 'Moment, dobry moment.'
    },
    {
        src: 'images/59.webp',
        alt: 'Zdjęcie 59',
        category: 'landscape',
        title: 'Śladami Czechowicza',
        description: 'Uliczka w Lublinie.'
    },
    {
        src: 'images/60.webp',
        alt: 'Zdjęcie 60',
        category: 'art',
        title: 'Autoportret',
        description: 'Autoportret "Berecik" w ramach warsztatów artystycznych.'
    },
    {
        src: 'images/61.webp',
        alt: 'Zdjęcie 61',
        category: 'art',
        title: '',
        description: 'Obraz rzadki.'
    }
];

// Function to create gallery item
function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.category = image.category;
    
    const link = document.createElement('a');
    link.href = image.src;
    link.setAttribute('data-lightbox', `gallery-${image.category}`);
    link.setAttribute('data-title', `${image.title}<br><span class="font-normal opacity-80">${image.description}</span>`);
    link.setAttribute('data-category', image.category);
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.className = 'w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105';
    
    link.appendChild(img);
    item.appendChild(link);
    return item;
}

// Function to load gallery
function loadGallery() {
    const galleryContainer = document.querySelector('.grid');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = '';
    galleryImages.forEach(image => {
        galleryContainer.appendChild(createGalleryItem(image));
    });
}

// Function to initialize gallery filters
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update current category
            currentCategory = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter gallery items and update lightbox groups
            galleryItems.forEach(item => {
                const shouldShow = currentCategory === 'all' || item.dataset.category === currentCategory;
                item.style.display = shouldShow ? 'block' : 'none';
                
                const link = item.querySelector('a');
                if (link) {
                    link.setAttribute('data-lightbox', shouldShow ? 
                        (currentCategory === 'all' ? 'gallery-all' : `gallery-${item.dataset.category}`) : 
                        '');
                }
            });
        });
    });
}

// Initialize lightbox with custom options
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

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    initGalleryFilters();
}); 