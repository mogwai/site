import { isMobile } from "./ismobile";

export default function draw() {
  if (isMobile) return;
  const NUM_CIRCLES = 200;
  const LINE_COLOUR = "#66FFFF";
  const MAX_LINE_DISTANCE = 100;

  const circles = [];

  const canvas = document.getElementById("canvas");
  canvas.height = window.outerHeight;
  canvas.width = window.outerWidth;
  const context = canvas.getContext("2d");

  for (let i = 0; i < NUM_CIRCLES; i++) {
    circles.push(new Circle(i));
  }

  canvas.addEventListener(
    "click",
    function(event) {
      addCircle(event.clientX - 20, event.clientY - 20);
    },
    false
  );

  // wait 1/2 second before starting animation
  setTimeout(function() {
    animate(circles);
  }, 0);

  function drawLine(circle1, circle2) {
    context.beginPath();
    context.moveTo(circle1.x, circle1.y);
    context.strokeStyle = LINE_COLOUR;
    context.lineWidth = 0.5;
    context.lineTo(circle2.x, circle2.y);
    context.stroke();
  }

  function animate(circles) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      circle.move(context);
      for (let j = 0; j < circles.length; j++) {
        if (j != i) {
          let othercircle = circles[j];
          if (othercircle.x != circle.x || othercircle.y != circle.y) {
            if (circle.distanceFrom(othercircle) < MAX_LINE_DISTANCE) {
              drawLine(circle, othercircle);
            }
          }
        }
      }
    }
    // request new frame
    requestAnimationFrame(function() {
      animate(circles);
    });
  }

  function siphonLife(circle, othercircle) {
    const rand = Math.random();
    if (rand < circle.getSiphonChance()) {
      drawLine(circle, othercircle);
      circle.grow();
      othercircle.shrink();
    }
  }

  function addCircle(x, y) {
    const newcircle = new Circle();
    newcircle.x = x;
    newcircle.y = y;
    circles.push(newcircle);
  }

  // Circle Object Definition
  function Circle(id) {
    this.id = id;
    this.x = Math.floor(Math.random() * canvas.width + 1);
    this.y = Math.floor(Math.random() * canvas.height + 1);
    this.speed = Math.floor(Math.random() * 10 + 1);
    this.u = Math.random() * 2 - 1;
    this.v = Math.random() * 2 - 1;
    this.radius = 0;
    this.colour = "grey";
    this.isAlive = true;

    this.getDirTo = function(c2) {
      const x = c2.x - this.x;
      const y = c2.y - this.y;
      return { u: x, v: y };
    };

    this.getSiphonChance = function() {
      const ret = this.radius / this.radius + 5;
      return ret;
    };

    this.getWeaponRange = function() {
      return 70 + this.radius;
    };

    this.dirNorm = function(c2) {
      const ret = this.getDirTo(c2);
      ret = Math.sqrt(Math.pow(ret.u, 2) + Math.pow(ret.v, 2));
      return ret;
    };

    this.distanceFrom = function(circle) {
      const vect = this.getDirTo(circle);
      const ret = Math.pow(vect.u, 2) + Math.pow(vect.v, 2);
      return Math.sqrt(ret);
    };

    this.move = function(context) {
      if (this.isAlive) {
        const w = canvas.width - this.radius * 2;
        const h = canvas.height - this.radius * 2;
        if (this.x < this.radius * 2 || this.x > w) {
          this.u *= -1;
        }

        if (this.y < this.radius * 2 || this.y > h) {
          this.v *= -1;
        }

        this.x += this.u * this.speed;
        this.y += this.v * this.speed;

        this.draw(context);
      }
    };

    this.draw = function(context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = this.colour;
      context.fill();
    };
  }
}
