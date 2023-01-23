const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const particleArray = [];
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
    y = Math.random() * canvas.height
  ) {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue}, 100%, 50%)`;
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
}

function init() {
  for (let i = 0; i < 1000; i++) {
    particleArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
    if (particleArray[i].size < 0.3) {
      particleArray.splice(i, 1);
      i--;
    }
  }
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function animate() {
  if (runAnimation.value) {
    ctx.fillStyle = "rgba(100, 0, 0, 0.01)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue++;
    if (hue > 30) hue = 0;
    console.log("trigger");
    ctx.font = "60px Lato";
    ctx.fillText("兔年快樂", canvas.width / 2 - 120, canvas.height / 2);
    requestAnimationFrame(animate);
  } else {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

init();
animate();

function handleMouseMove(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 50; i++) {
    particleArray.push(new Particle(mouse.x, mouse.y));
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

function createRandomParticle() {
  particleArray.push(
    new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
  );
}
