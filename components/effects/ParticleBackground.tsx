import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particlesCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10;
            positions[i  3 + 1] = (Math.random() - 0.5)  10;
            positions[i  3 + 2] = (Math.random() - 0.5)  10;
            colors[i * 3] = 1; // Red
            colors[i * 3 + 1] = 105 / 255; // Green (light pink)
            colors[i * 3 + 2] = 180 / 255; // Blue (light pink)
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
        const particleSystem = new THREE.Points(particles, material);
        scene.add(particleSystem);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particleSystem.rotation.x += 0.001;
            particleSystem.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
                className="flex items-center justify-center w-full h-full bg-white bg-opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-pink-500 hover:text-pink-600 transition duration-300">
                    luxury FashionTV cosmetics
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Indulge in elegance and sophistication with our premium cosmetics designed for the discerning fashionista.
                </p>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;