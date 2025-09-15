// JavaScript for responsive menu toggle
        document.querySelector('.menu-btn').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Certificate popup functionality
        const popup = document.getElementById('certificatePopup');
        const popupImage = document.getElementById('popupImage');
        const closePopup = document.querySelector('.close-popup');
        
        // Add click event to all certificate images
        document.querySelectorAll('.certification-image').forEach(image => {
            image.addEventListener('click', () => {
                const imgSrc = image.querySelector('img').src;
                popupImage.src = imgSrc;
                popup.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
            });
        });
        
        // Close popup when clicking on close button
        closePopup.addEventListener('click', () => {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto'; // Enable scrolling again
        });
        
        // Close popup when clicking outside the image
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto'; // Enable scrolling again
            }
        });
        
        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('active')) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto'; // Enable scrolling again
            }
        });
        