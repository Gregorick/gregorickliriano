particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

/* -------------------------------------------------------------------------- */
/*                             ANIMACION ESCRITURA                            */
/* -------------------------------------------------------------------------- */

const typed = new Typed(".typed", {
  strings: ["Web Developer", "UX Designer"],
  showCursor: true,
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 1000,
  loop: true,
  loopCount: Infinity,
});

/* -------------------------------------------------------------------------- */
/*                             PARALLAX IN THE WEB                            */
/* -------------------------------------------------------------------------- */

// Declarando variables

const parallax = document.getElementById("sobremi"),
  portafolio = document.querySelector(".portafolio .contenedor"),
  experiencias = document.querySelector(".experiencias .contenedor"),
  caja1 = document.querySelector(
    ".colunna-progressbar-uno .caja:nth-child(1) .progressbar .barra"
  ),
  caja2 = document.querySelector(
    ".colunna-progressbar-uno .caja:nth-child(2) .progressbar .barra"
  ),
  caja3 = document.querySelector(
    ".colunna-progressbar-uno .caja:nth-child(3) .progressbar .barra"
  ),
  caja4 = document.querySelector(
    ".columna-progressbar-dos .caja:nth-child(1) .progressbar .barra"
  ),
  caja5 = document.querySelector(
    ".columna-progressbar-dos .caja:nth-child(2) .progressbar .barra"
  ),
  caja6 = document.querySelector(
    ".columna-progressbar-dos .caja:nth-child(3) .progressbar .barra"
  ),
  caja7 = document.querySelector(".servicios-cajas .caja:nth-child(1)"),
  caja8 = document.querySelector(".servicios-cajas .caja:nth-child(2)"),
  caja9 = document.querySelector(".servicios-cajas .caja:nth-child(3)"),
  imagenContacto = document.getElementById("imagenIzquierda"),
  imgContacto = document.querySelector(".imagen-izquierda img"),
  pxServicios = document.getElementById("mis-servicios");

//  Parallax

window.addEventListener("scroll", (e) => {
  let wscrolluno = this.pageYOffset >= 250;
  let wscrolldos = this.pageYOffset >= 1050;
  let wscrolltres = this.pageYOffset >= 1620;
  let wscrollcuatro = this.pageYOffset >= 2700;
  let wscrollcinco = this.pageYOffset >= 3400;
  parallax.style.opacity = wscrolluno * 1;
  pxServicios.style.opacity = wscrolldos * 1;
  portafolio.style.opacity = wscrolltres * 1;
  experiencias.style.opacity = wscrollcuatro * 1;
  imagenContacto.style.opacity = wscrollcinco * 1;
  caja1.style.width = wscrolluno * 90 + "%";
  caja2.style.width = wscrolluno * 90 + "%";
  caja3.style.width = wscrolluno * 85 + "%";
  caja4.style.width = wscrolluno * 90 + "%";
  caja5.style.width = wscrolluno * 65 + "%";
  caja6.style.width = wscrolluno * 65 + "%";
  caja7.style.transform = `scale(${1 * wscrolldos})`;
  imgContacto.style.left = wscrollcinco * 5 + "%";
  setTimeout(() => {
    caja8.style.transform = `scale(${1 * wscrolldos})`;
  }, 200);
  setTimeout(() => {
    caja9.style.transform = `scale(${1 * wscrolldos})`;
  }, 300);
});

/* -------------------------------------------------------------------------- */
/*                             BOTONES EXPERIENCIA                            */
/* -------------------------------------------------------------------------- */

const educacion = document.querySelector("button.educacion"),
  laboral = document.querySelector("button.laboral"),
  exEducacion = document.querySelector(".experienciaEducacion"),
  exLaboral = document.querySelector(".experienciaLaboral");

educacion.addEventListener("click", (elemento) => {
  educacion.classList.add("activo");
  laboral.classList.remove("activo");
  exEducacion.classList.add("activo");
  exLaboral.classList.remove("activo");
});

laboral.addEventListener("click", (elemento) => {
  educacion.classList.remove("activo");
  laboral.classList.add("activo");
  exEducacion.classList.remove("activo");
  exLaboral.classList.add("activo");
});

/* -------------------------------------------------------------------------- */
/*                               RESPONSIVE MENU                              */
/* -------------------------------------------------------------------------- */

const botonResponsive = document.getElementById("botonResponsive"),
  menuResponsive = document.querySelector(".menu"),
  bodyWidth = document.querySelector("body"),
  isResponsive = () => innerWidth <= 640;

botonResponsive.addEventListener("click", () => {
  menuResponsive.classList.toggle("activo");
  isResponsive();
});

/* -------------------------------------------------------------------------- */
/*                      FORMULARIO, VALIDACIONES Y ENVIO                      */
/* -------------------------------------------------------------------------- */
