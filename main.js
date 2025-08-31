const particleBg = document.getElementById('particle-bg');
const numParticles = 50;

if (particleBg) {
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;

        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;

        particleBg.appendChild(particle);
    }
}
