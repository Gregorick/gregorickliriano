particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

/* -------------------------------------------------------------------------- */
/*                             ANIMACION ESCRITURA                            */
/* -------------------------------------------------------------------------- */

const typed = new Typed('.typed', {
    strings: ['Web Developer', 'UX Designer'],
    showCursor: true,
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity
 });

/* -------------------------------------------------------------------------- */
/*                             PARALLAX IN THE WEB                            */
/* -------------------------------------------------------------------------- */

// Declarando variables

const parallax = document.getElementById('sobremi'),
      portafolio = document.querySelector('.portafolio .contenedor'),
      experiencias = document.querySelector('.experiencias .contenedor'),
       caja1 = document.querySelector('.colunna-progressbar-uno .caja:nth-child(1) .progressbar .barra'),
       caja2 = document.querySelector('.colunna-progressbar-uno .caja:nth-child(2) .progressbar .barra'),
       caja3 = document.querySelector('.colunna-progressbar-uno .caja:nth-child(3) .progressbar .barra'),
       caja4 = document.querySelector('.columna-progressbar-dos .caja:nth-child(1) .progressbar .barra'),
       caja5 = document.querySelector('.columna-progressbar-dos .caja:nth-child(2) .progressbar .barra'),
       caja6 = document.querySelector('.columna-progressbar-dos .caja:nth-child(3) .progressbar .barra'),
       caja7 = document.querySelector('.servicios-cajas .caja:nth-child(1)'),
       caja8 = document.querySelector('.servicios-cajas .caja:nth-child(2)'),
       caja9 = document.querySelector('.servicios-cajas .caja:nth-child(3)'),
       portafolio1 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(1)'),
       portafolio2 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(2)'),
       portafolio3 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(3)'),
       portafolio4 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(4)'),
       portafolio5 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(5)'),
       portafolio6 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(6)'),
       portafolio7 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(7)'),
       portafolio8 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(8)'),
       portafolio9 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(9)'),
       portafolio10 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(10)'),
       portafolio11 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(11)'),
       portafolio12 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(12)'),
       portafolio13 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(13)'),
       portafolio14 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(14)'),
       portafolio15 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(15)'),
       portafolio16 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(16)'),
       portafolio17 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(17)'),
       portafolio18 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(18)'),
       portafolio19 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(19)'),    
       portafolio20 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(20)'),
       portafolio21 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(21)'),
       portafolio22 = document.querySelector('.grid-portafolio .caja-portafolio:nth-child(22)'),      
       imagenContacto = document.getElementById('imagenIzquierda'),
       imgContacto = document.querySelector('.imagen-izquierda img'),
       pxServicios = document.getElementById('mis-servicios');


      //  Parallax

window.addEventListener('scroll', (e) => {
let wscrolluno = this.pageYOffset >= 250;
let wscrolldos = this.pageYOffset >= 1050;
let wscrolltres = this.pageYOffset >= 1620;
let wscrollcuatro = this.pageYOffset >= 2700;
let wscrollcinco = this.pageYOffset >= 3400;
parallax.style.opacity  = wscrolluno * 1;
pxServicios.style.opacity  = wscrolldos * 1;
portafolio.style.opacity  = wscrolltres * 1;
experiencias.style.opacity  = wscrollcuatro * 1;
imagenContacto.style.opacity = wscrollcinco * 1;
caja1.style.width = wscrolluno * 90 + '%';
caja2.style.width = wscrolluno * 90 + '%';
caja3.style.width = wscrolluno * 85 + '%';
caja4.style.width = wscrolluno * 90 + '%';
caja5.style.width = wscrolluno * 65 + '%';
caja6.style.width = wscrolluno * 65 + '%';
caja7.style.transform = `scale(${ 1 * wscrolldos })`;
portafolio1.style.transform = `scale(${ 1 * wscrolltres })`;
imgContacto.style.left = wscrollcinco * 5 + '%';
setTimeout(() => { caja8.style.transform = `scale(${ 1 * wscrolldos })`; }, 200)
setTimeout(() => { caja9.style.transform = `scale(${ 1 * wscrolldos })`; }, 300)
setTimeout(() => { portafolio2.style.transform = `scale(${ 1 * wscrolltres })`; }, 200)
setTimeout(() => { portafolio3.style.transform = `scale(${ 1 * wscrolltres })`; }, 300)
setTimeout(() => { portafolio4.style.transform = `scale(${ 1 * wscrolltres })`; }, 400)
setTimeout(() => { portafolio5.style.transform = `scale(${ 1 * wscrolltres })`; }, 500)
setTimeout(() => { portafolio6.style.transform = `scale(${ 1 * wscrolltres })`; }, 600)
setTimeout(() => { portafolio7.style.transform = `scale(${ 1 * wscrolltres })`; }, 700)
setTimeout(() => { portafolio8.style.transform = `scale(${ 1 * wscrolltres })`; }, 800)
setTimeout(() => { portafolio9.style.transform = `scale(${ 1 * wscrolltres })`; }, 900)
setTimeout(() => { portafolio10.style.transform = `scale(${ 1 * wscrolltres })`; }, 1000)
setTimeout(() => { portafolio11.style.transform = `scale(${ 1 * wscrolltres })`; }, 1200)
setTimeout(() => { portafolio12.style.transform = `scale(${ 1 * wscrolltres })`; }, 1300)
setTimeout(() => { portafolio13.style.transform = `scale(${ 1 * wscrolltres })`; }, 1400)
setTimeout(() => { portafolio14.style.transform = `scale(${ 1 * wscrolltres })`; }, 1500)
setTimeout(() => { portafolio15.style.transform = `scale(${ 1 * wscrolltres })`; }, 1600)
setTimeout(() => { portafolio16.style.transform = `scale(${ 1 * wscrolltres })`; }, 1700)
setTimeout(() => { portafolio17.style.transform = `scale(${ 1 * wscrolltres })`; }, 1800)
setTimeout(() => { portafolio18.style.transform = `scale(${ 1 * wscrolltres })`; }, 1900)
setTimeout(() => { portafolio19.style.transform = `scale(${ 1 * wscrolltres })`; }, 2000)
setTimeout(() => { portafolio20.style.transform = `scale(${ 1 * wscrolltres })`; }, 2100)
setTimeout(() => { portafolio21.style.transform = `scale(${ 1 * wscrolltres })`; }, 2200)
setTimeout(() => { portafolio22.style.transform = `scale(${ 1 * wscrolltres })`; }, 2300)
});


/* -------------------------------------------------------------------------- */
/*                             BOTONES EXPERIENCIA                            */
/* -------------------------------------------------------------------------- */

const educacion = document.querySelector('button.educacion'),
      laboral = document.querySelector('button.laboral'),
      exEducacion = document.querySelector('.experienciaEducacion'),
      exLaboral = document.querySelector('.experienciaLaboral');

      educacion.addEventListener('click', (elemento) => {
             educacion.classList.add('activo');
             laboral.classList.remove('activo');
             exEducacion.classList.add('activo');
             exLaboral.classList.remove('activo');
      })

      laboral.addEventListener('click', (elemento) => {
        educacion.classList.remove('activo');
        laboral.classList.add('activo');
        exEducacion.classList.remove('activo');
        exLaboral.classList.add('activo');
 })


/* -------------------------------------------------------------------------- */
/*                               RESPONSIVE MENU                              */
/* -------------------------------------------------------------------------- */


     
      const botonResponsive = document.getElementById('botonResponsive'),
            menuResponsive = document.querySelector('.menu'),
            bodyWidth = document.querySelector('body'),
            isResponsive = () => innerWidth <= 640;
            
            
            botonResponsive.addEventListener('click', () => {
               menuResponsive.classList.toggle('activo');
               isResponsive()
            });
    

/* -------------------------------------------------------------------------- */
/*                      FORMULARIO, VALIDACIONES Y ENVIO                      */
/* -------------------------------------------------------------------------- */
