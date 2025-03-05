document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    document.body.prepend(canvas); // Adds the canvas as the first element

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth * (1 / 0.75);  // Scale up to counteract the 0.75 page scale
        canvas.height = window.innerHeight * (1 / 0.75);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const maxParticles = 100;
    const maxDistance = 150;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1.2 - 0.6;
            this.speedY = Math.random() * 1.2 - 0.6;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = "rgba(0, 255, 153, 0.8)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = 1 - distance / maxDistance;
                    ctx.strokeStyle = `rgba(0, 255, 153, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        drawLines();
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", () => {
        resizeCanvas();
        initParticles();
    });

    initParticles();
    animateParticles();
});
