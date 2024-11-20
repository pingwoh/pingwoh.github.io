var i = 0;
var txt = 'Hello World!'
var speed = 50; 
var element = document.getElementById("typewriter-target");
setTimeout(typeWriter, 500);

function typeWriter() {
  if (element == null)
  {
    return;
  }

  if (i < txt.length) {
    element.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
