import React, { useEffect, useRef } from "react";

const MouseGlow: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; alpha: number; vx: number; vy: number }[] = [];
        const maxParticles = 100; // Increased particle count for a flowing effect

        const createParticle = (x: number, y: number) => {
            const speed = Math.random() * 2 + 1; // Random speed
            const angle = Math.random() * Math.PI * 2; // Random direction
            const vx = Math.cos(angle) * speed; // Velocity in x-direction
            const vy = Math.sin(angle) * speed; // Velocity in y-direction
            particles.push({ x, y, alpha: 0.8, vx, vy }); // Add velocity for movement
            if (particles.length > maxParticles) {
                particles.shift(); // Remove the oldest particle
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(
                    particle.x,
                    particle.y,
                    particle.x + particle.vx * 10,
                    particle.y + particle.vy * 10
                );

                // Add rainbow colors to the gradient
                gradient.addColorStop(0, `rgba(255, 0, 0, ${particle.alpha})`); // Red
                gradient.addColorStop(0.2, `rgba(255, 165, 0, ${particle.alpha})`); // Orange
                gradient.addColorStop(0.4, `rgba(255, 255, 0, ${particle.alpha})`); // Yellow
                gradient.addColorStop(0.6, `rgba(0, 255, 0, ${particle.alpha})`); // Green
                gradient.addColorStop(0.8, `rgba(0, 0, 255, ${particle.alpha})`); // Blue
                gradient.addColorStop(1, `rgba(75, 0, 130, ${particle.alpha})`); // Indigo

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 3; // Slightly thicker lines for better visibility
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particle.x + particle.vx * 10, particle.y + particle.vy * 10);
                ctx.stroke();

                // Update particle position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Fade out the particle
                particle.alpha -= 0.01;
                if (particle.alpha <= 0) {
                    particles.splice(index, 1);
                }
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            createParticle(e.clientX, e.clientY);
        };

        const animate = () => {
            drawParticles();
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
        ></canvas>
    );
};

export default MouseGlow;