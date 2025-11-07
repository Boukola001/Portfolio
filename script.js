console.log("Le script est bien chargé !");
window.currentLang = window.currentLang || 'fr';
function switchLanguage(lang) {
  // langue actuelle
  window.currentLang = lang;
  // Hide/show content sections
  document.querySelectorAll('section > div').forEach(div => {
    if (div.id.endsWith(lang) | div.id=="particles-js") {
      div.style.display = '';
    } 
    else {
      div.style.display = 'none';
    }
  });

    // Change nav labels
  document.querySelectorAll('.nav-link').forEach(link => {
    link.textContent = link.getAttribute('data-' + lang);
  });

  // Change footer text
  document.querySelectorAll('footer span').forEach(span => {
    span.textContent = span.getAttribute('data-' + lang);
  });

  // Change <html lang="">
  document.documentElement.lang = lang;
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});
console.log("nouvelle langue", currentLang);
// configuration des modales pour l'affichage des projets

function openModal(element, event) {
  event.preventDefault()
  const url = element.getAttribute('data-url');
  const iframe = document.querySelector('#modal iframe');
  iframe.src = url;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  const iframe = modal.querySelector('iframe');
  iframe.src = ''; // vider l’iframe à la fermeture
  modal.style.display = 'none';
}

// Fermeture si clic hors modale
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Fermeture avec touche Échap
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeModal();
});

// configuration des particules
particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 190,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#6a89cc" },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#6a89cc",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
});
