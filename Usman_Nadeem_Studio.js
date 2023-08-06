function hidePreloader() {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";
}
window.addEventListener('load', hidePreloader);

function removeFocus() {
  document.activeElement.blur();
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const targetY = section.getBoundingClientRect().top + window.pageYOffset;
    const startingY = window.pageYOffset;
    const duration = 100; // Adjust the duration as needed (in milliseconds)
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scrollStep() {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const scrollY = easeInOutQuad(timeElapsed, startingY, targetY - startingY, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollStep);
  }
}


function closeOffcanvas() {
  var offcanvas = document.getElementById("offcanvasDarkNavbar");
  var bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
  bootstrapOffcanvas.hide();
}

window.addEventListener('scroll', function () {
  var button = document.querySelector('.back_to_top');
  var scrollHeight = window.pageYOffset;

  if (scrollHeight >= 40) {
    button.style.display = 'inline-flex';
  } else {
    button.style.display = 'none';
  }
});

function scrollToTopWithDelay() {
  window.scrollTo(0, 0);
  setTimeout(function () {
    closeOffcanvas();
  }, 300);
}

function openCarousel(index) {
  if (window.innerWidth >= 0) {
    var galleryCarousel = new bootstrap.Carousel(document.getElementById('galleryCarousel'));
    galleryCarousel.to(index);
    document.getElementById('galleryCarousel').style.display = 'block';
    deactivateScroll();
  }
}

function closeCarousel() {
  document.getElementById('galleryCarousel').style.display = 'none';
  activateScroll();
}

function open_client_1_Carousel(index) {
  if (window.innerWidth >= 0) {
    var galleryCarousel = new bootstrap.Carousel(document.getElementById('clientCarousel_1'));
    galleryCarousel.to(index);
    document.getElementById('clientCarousel_1').style.display = 'block';
    deactivateScroll();
  }
}

function close_client_1_Carousel() {
  document.getElementById('clientCarousel_1').style.display = 'none';
  activateScroll();
}

function open_client_2_Carousel(index) {
  if (window.innerWidth >= 0) {
    var galleryCarousel = new bootstrap.Carousel(document.getElementById('clientCarousel_2'));
    galleryCarousel.to(index);
    document.getElementById('clientCarousel_2').style.display = 'block';
    deactivateScroll();
  }
}

function close_client_2_Carousel() {
  document.getElementById('clientCarousel_2').style.display = 'none';
  activateScroll();
}

function open_client_3_Carousel(index) {
  if (window.innerWidth >= 0) {
    var galleryCarousel = new bootstrap.Carousel(document.getElementById('clientCarousel_3'));
    galleryCarousel.to(index);
    document.getElementById('clientCarousel_3').style.display = 'block';
    deactivateScroll();
  }
}

function close_client_3_Carousel() {
  document.getElementById('clientCarousel_3').style.display = 'none';
  activateScroll();
}

function deactivateScroll() {
  document.body.style.overflow = 'hidden';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'hidden';
  document.addEventListener('touchmove', preventDefaultScroll, { passive: false });
}
function preventDefaultScroll(event) {
  event.preventDefault();
}

function activateScroll() {
  document.body.style.overflow = 'auto';
  document.body.style.overflowX = 'auto';
  document.body.style.overflowY = 'auto';
  document.removeEventListener('touchmove', preventDefaultScroll, { passive: false });
}

window.addEventListener('DOMContentLoaded', function () {
  var background = document.getElementById('background');
  var section = document.getElementById('decoration_section');
  var defaultBackgroundURL = 'https://res.cloudinary.com/dghb1dhbv/image/upload/v1690213151/nicholas-santoianni-A2OpX4O4uwo-unsplash_zkg9xy.jpg';
  var customBackgroundURL = 'https://res.cloudinary.com/dghb1dhbv/image/upload/v1688759091/pexels-v%C4%83n-th%E1%BA%AFng_fbni2c.jpg';

  var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    var isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
    
    if (isIntersecting) {
      background.style.backgroundImage = 'url("' + customBackgroundURL + '")';
    } else {
      background.style.backgroundImage = 'url("' + defaultBackgroundURL + '")';
    }
  });

  observer.observe(section);
});

function redirectTo_book_session() {
  window.location.href = 'Book_session.html';
}

function redirectBackToHOME() {
  window.location.href = 'Usman_Nadeem_Studio.html';
}

function redirectBackToAboutUS() {
  window.location.href = 'Usman_Nadeem_Studio.html#about_me_section';
}

function redirectBackToPortfolio() {
  window.location.href = 'Usman_Nadeem_Studio.html#portfolio_gallery_section';
}

function redirectBackToClientAlbum() {
  window.location.href = 'Usman_Nadeem_Studio.html#client_album_section';
}

function redirectBackToContactUS() {
  window.location.href = 'Usman_Nadeem_Studio.html#contact_us_section';
}
