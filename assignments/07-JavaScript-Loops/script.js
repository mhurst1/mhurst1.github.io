/*Matthew Hurst | CSCE 242*/

const water = document.getElementById("water");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  /*random x position within fish bowl*/
  const x = Math.random() * 90;
  bubble.style.left = x + "%";

  /*random bubble size from 8px - 18px*/
  const size = Math.random() * 10 + 8;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  /*random bubble speed from 3-6 seconds*/
  const duration = Math.random() * 3 + 3;
  bubble.style.animationDuration = duration + "s";

  water.appendChild(bubble);

  /*remove bubble after it reaches the top*/
  setTimeout(() => bubble.remove(), duration * 1000);
}

function bubbleLoop() {
  for (let i = 0; i < 5; i++) {
    setTimeout(createBubble, i * 400);
  }
}

/*Call Function Immediately then call it every 2 seconds*/
bubbleLoop();
setInterval(bubbleLoop, 2000);
