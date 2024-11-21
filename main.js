var i = 0;
var txt = 'Hello World!'
var speed = 50; 
var element = document.getElementById("typewriter-target");

cursorBlink();
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

function cursorBlink(){
    let textArray = txt.split("");
    let allWords = txt.split(" ");
    let textLen = textArray.length;
    
    const wordLen = allWords.map((word) => {
        return word.length;
    })
    
    let cursorTimings = {
        duration: 700,
        iterations: Infinity,
        easing: 'cubic-bezier(0,.26,.44,.93)'
    }
    
    document.querySelector("#typewriter-cursor").animate([
        {
            opacity: 0
        },
        {
            opacity: 0, offset: 0.7
        },
        {
            opacity: 1
        }
    ], cursorTimings);
}
