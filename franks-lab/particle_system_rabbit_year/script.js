const canvas = document.getElementById("canvas1");
const clearBtn = document.getElementById("clearBtn");

const ctx = canvas.getContext("2d");
const particlesArray = [];
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = "60px Lato";

const mouse = {
  x: undefined,
  y: undefined,
};

const runAnimation = {
  value: true,
};

class Particle {
  constructor(
    x = Math.random() * canvas.width,
    y = Math.random() * canvas.height,
    size = 5,
    speed = 3
  ) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * size + 1;
    this.speedX = Math.random() * speed - 1.5;
    this.speedY = Math.random() * speed - 1.5;
    this.color = `hsl(${hue}, 100%, 40%)`;
    this.textColor = `hsl(${hue}, 100%, 65%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  text() {
    ctx.fillStyle = this.textColor;
    ctx.fillText("兔年快樂", canvas.width / 2 - 120, canvas.height / 2 + 30);
  }
}

function init() {
  for (let i = 0; i < 1000; i++) {
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
    particlesArray[i].text();
    if (particlesArray[i].size < 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

window.addEventListener("resize", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function animate() {
  if (runAnimation.value) {
    ctx.fillStyle = "rgba(150, 0, 0, 0.01)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue++;
    if (hue > 30) hue = 0;
    console.log("trigger");
    requestAnimationFrame(animate);
  }
}

init();
animate();

function handleMouseMove(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle(mouse.x, mouse.y));
  }
}

window.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("click", function () {
  runAnimation.value = !runAnimation.value;

  if (runAnimation.value) {
    window.addEventListener("mousemove", handleMouseMove);
    animate();
  } else {
    window.removeEventListener("mousemove", handleMouseMove);
  }
});
