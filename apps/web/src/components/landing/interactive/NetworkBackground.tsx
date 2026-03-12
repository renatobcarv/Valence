'use client';

import React, { useEffect, useRef } from 'react';

export const NetworkBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
        const particleCount = Math.floor((width * height) / 15000); // Responsive particle count

        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles.length = 0;
            initParticles();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        const initParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 1.5 + 0.5
                });
            }
        };

        initParticles();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = '#111111';
            ctx.fillRect(0, 0, width, height);

            // Draw glowing mouse area
            const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
            gradient.addColorStop(0, 'rgba(231, 76, 60, 0.08)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            particles.forEach((p, index) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction - gentle push
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    p.x -= dx * 0.01;
                    p.y -= dy * 0.01;
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = distance < 150 ? '#e74c3c' : 'rgba(255, 255, 255, 0.3)';
                ctx.fill();

                // Draw lines
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distanceX = p.x - p2.x;
                    const distanceY = p.y - p2.y;
                    const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const opacity = 1 - (dist / 120);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(draw);
        };

        let animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: '#000000' }}
        />
    );
};
