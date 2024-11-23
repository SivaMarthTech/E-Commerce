document.addEventListener('DOMContentLoaded', () => {
    // Check if the banner has been closed previously
    if (!localStorage.getItem('bannerClosed')) {
        // If not closed, show the popup banner
        document.getElementById('popup-banner').style.display = 'block';
    }

    // Close button functionality
    document.getElementById('close-banner').addEventListener('click', function() {
        // Hide the popup banner
        document.getElementById('popup-banner').style.display = 'none';

        // Set an item in localStorage so the banner won't show up again
        localStorage.setItem('bannerClosed', true);
    });

    // Get the menu icon and the nav links container
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the navigation links on click
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show'); // Toggle the "show" class
    });

    // Smooth scroll functionality for menu items
    const smoothScroll = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    // Navigation Links
    document.getElementById('index').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    document.getElementById('new-arrivals').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'newarrival.html';
    });

    document.getElementById('products').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'mostwanted.html';
    });

    document.getElementById('collections').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'collection.html';
    });

    document.getElementById('contact').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'contact.html';
    });


    //slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })


    const checkboxes = document.querySelectorAll('.filter-checkbox');
const items = document.querySelectorAll('.item');

// Function to filter items
function filterItems() {
    const selectedFilters = {
        occasion: [],
        color: [],
        arrival: []
    };

    // Collect selected filters
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedFilters[checkbox.getAttribute('data-type')].push(checkbox.value);
        }
    });

    // Show or hide items based on filters
    items.forEach(item => {
        let isMatch = true;

        for (let category in selectedFilters) {
            const selectedValues = selectedFilters[category];
            const itemValue = item.getAttribute(`data-${category}`);
            
            if (selectedValues.length > 0 && !selectedValues.includes(itemValue)) {
                isMatch = false;
                break;
            }
        }

        item.style.display = isMatch ? 'block' : 'none';
    });
}

// Attach event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterItems);
});

// Initial filter call to display items based on initial state
filterItems();


document.querySelector('.filter-toggle').addEventListener('click', function() {
    var filterPanel = document.querySelector('.filter-panel');
    if (filterPanel.style.display === 'block') {
        filterPanel.style.display = 'none';
    } else {
        filterPanel.style.display = 'block';
    }
});
