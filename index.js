var intro = document.getElementById('intro');
var nombre = "Hola soy Eliu";

var typewriter = new Typewriter(intro, {
  loop: false,
  delay: 60,
  cursor:''
});

var intro2 = document.getElementById('intro2');

var typewriter2 = new Typewriter(intro2, {
  loop: false,
  delay: 60,
  cursor:''
});

typewriter
.pauseFor(1000)
  .typeString(nombre)
  .pauseFor(3000)
    .deleteChars(nombre.length)
  .start();

  

typewriter2
  .pauseFor(7000)
  .typeString("Soy Estudiante de Programación")
  .pauseFor(3000)
  .deleteChars(30)
  .typeString("Me gusta construir cosas y resolver problemas")
  .pauseFor(3000)
  .start();