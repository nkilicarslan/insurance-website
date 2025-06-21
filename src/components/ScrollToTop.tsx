import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      const navbar = document.getElementById('main-navbar');
      
      if (element && navbar) {
        const navbarHeight = navbar.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
        return;
      }
    }

    // Fallback to top if no hash or element not found
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop; 