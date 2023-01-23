const canvas = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const particlesArray = [];
const rabbitParticleArray = [];
const numberOfRabbitParticles = 5000;
let hue = 0;

// https://www.pinterest.com/pin/400187116901580744/

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = 626;
canvas2.height = 626;

const myImage = new Image();
myImage.src = "./rabbit.jpg";
let mappedImage = [];
myImage.addEventListener("load", function () {
  ctx2.drawImage(myImage, 0, 0, canvas2.width, canvas2.height);
  const pixels = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  for (let y = 0; y < canvas2.height; y++) {
    let row = [];
    for (let x = 0; x < canvas2.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness =
        red == 239 ? 0 : calculateRelativeBrightness(red, green, blue);
      const cell = [brightness];
      row.push(cell);
    }
    mappedImage.push(row);
  }
  function calculateRelativeBrightness(red, green, blue) {
    return (
      Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      ) / 100
    );
  }

  class RabbitParticle {
    constructor() {
      this.x = Math.random() * canvas2.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 2.5;
      this.size = Math.random() * 1.5 + 1;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
    }
    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      if (
        mappedImage[this.position1] &&
        mappedImage[this.position1][this.position2]
      ) {
        this.speed = mappedImage[this.position1][this.position2][0];
      }
      let movement = 2.5 - this.speed + this.velocity;

      this.y += movement;
      if (this.y >= canvas2.height) {
        this.y = 0;
        this.x = Math.random() * canvas2.width;
      }
    }
    draw() {
      ctx2.beginPath();
      ctx2.fillStyle = "rgba(200, 0, 0)";
      ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx2.fill();
    }
  }

  function animate() {
    // ctx2.drawImage(myImage, 0, 0, canvas2.width, canvas2.height);
    ctx2.globalAlpha = 0.05;
    ctx2.fillStyle = "rgba(100, 0, 0, 0.1)";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
    ctx2.globalAlpha = 0.2;
    for (let i = 0; i < rabbitParticleArray.length; i++) {
      rabbitParticleArray[i].update();
      ctx.globalAlpha = rabbitParticleArray[i].speed;
      rabbitParticleArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  function init() {
    for (let i = 0; i < numberOfRabbitParticles; i++) {
      rabbitParticleArray.push(new RabbitParticle());
    }
  }
  init();
  animate();
});

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
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
    if (particlesArray[i].size < 0.3) {
      particlesArray.splice(i, 1);
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

function createRandomParticle() {
  particlesArray.push(
    new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
  );
}
