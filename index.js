var intro = document.getElementById('intro');
var nombre = "Hi I'm eliu";

var typewriter = new Typewriter(intro, {
  loop: true,
  delay: 60,
});

var intro2 = document.getElementById('intro2');

var typewriter2 = new Typewriter(intro2, {
  loop: true,
  delay: 60,
  cursor:''
});

typewriter
.pauseFor(1000)
  .typeString(nombre)
  .pauseFor(7000)
    .deleteChars(nombre.length)
  // .typeString('<strong>Soy Desarrollador web</strong> ')
  .start();

  

typewriter2
  .pauseFor(3000)
  .typeString("I'm a Web Developer")
  .pauseFor(2000)
  .deleteChars(21)
  .typeString("I love to build new things")
  .pauseFor(1000)
  .start();