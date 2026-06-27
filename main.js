// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Loader logic
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1000); // Wait at least 1s for premium feel

  // Sticky Navbar & Back to Top logic
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-md', 'bg-white/90');
      navbar.classList.remove('py-3');
      navbar.classList.add('py-2');
    } else {
      navbar.classList.remove('shadow-md', 'bg-white/90');
      navbar.classList.add('py-3');
      navbar.classList.remove('py-2');
    }

    if (window.scrollY > 500) {
      backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  // Close mobile menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Back to top scroll
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Number Counter Animation
  const counters = document.querySelectorAll('.counter');
  const counterSection = document.getElementById('counter-section');
  let hasCounted = false;

  const countObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !hasCounted) {
      hasCounted = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        };
        updateCounter();
      });
    }
  }, { threshold: 0.5 });

  if (counterSection) {
    countObserver.observe(counterSection);
  }
});
