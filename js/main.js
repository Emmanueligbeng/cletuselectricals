const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




// ===== FAQ ACCORDION =====
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// ===== CONTACT FORM SUBMISSION (demo) =====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (demo)");
  contactForm.reset();
});


// === TESTIMONIAL SLIDER ===
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonials .test");
    const dotsContainer = document.querySelector(".slider-dots");
  
    let current = 0;
    const total = testimonials.length;
  
    // Create dots dynamically
    testimonials.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showTestimonial(i));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dot");
  
    function showTestimonial(index) {
      testimonials[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = index;
      testimonials[current].classList.add("active");
      dots[current].classList.add("active");
    }
  
    // Auto slide every 6 seconds
    setInterval(() => {
      let next = (current + 1) % total;
      showTestimonial(next);
    }, 6000);
  });

  
 // === STAGGERED SCROLL ANIMATION ===
const animatedItems = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // If multiple items are in the same parent container (like cards), stagger them
      const delay = [...entry.target.parentElement.children].indexOf(entry.target) * 100;
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

animatedItems.forEach(item => observer.observe(item));



const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = item.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close when clicking outside image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });

  

  // Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 100; // Adjust speed

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCount();
      observer.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));


// Fade-in animation (reuse existing one if you already have it)
const faders = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => fadeObserver.observe(fader));