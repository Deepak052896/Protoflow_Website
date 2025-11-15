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

document.addEventListener("DOMContentLoaded", function() {
  const locationTrigger = document.getElementById("locationTrigger");
  const mapSection = document.getElementById("mapSection");
  const hoverMessage = document.getElementById("hoverMessage");
  const closeMapBtn = document.getElementById("closeMapBtn");
  const mapClickLayer = document.getElementById("mapClickLayer");

  if (locationTrigger && mapSection && hoverMessage && closeMapBtn) {
    // Show map when hover
    locationTrigger.addEventListener("mouseenter", function() {
      hoverMessage.style.opacity = "0";
      setTimeout(() => { hoverMessage.style.display = "none"; }, 300);
      mapSection.style.display = "block";
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Close map
    closeMapBtn.addEventListener("click", function() {
      mapSection.style.display = "none";
      hoverMessage.style.display = "inline-block";
      setTimeout(() => { hoverMessage.style.opacity = "1"; }, 200);
    });

    // Close with Esc
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        mapSection.style.display = "none";
        hoverMessage.style.display = "inline-block";
        setTimeout(() => { hoverMessage.style.opacity = "1"; }, 200);
      }
    });
  }

  // 🔥 When user clicks map area → open full Google Maps in new tab
  if (mapClickLayer) {
    mapClickLayer.addEventListener("click", function() {
      window.open("https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/", "_blank");
    });
  }
});
 