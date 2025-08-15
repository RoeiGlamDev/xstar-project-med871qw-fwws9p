import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for handling 3D interactions for luxury FashionTV cosmetics.
 * This hook integrates Three.js to create an interactive 3D experience that aligns with the luxurious and elegant branding of luxury FashionTV cosmetics.
 * 
 * @returns {Object} An object containing the 3D scene, camera, renderer, and a ref to attach to a DOM element.
 */
export const use3D = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set the background color to a luxurious white
  scene.background = new THREE.Color(0xffffff);
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Add lighting to enhance the luxury feel
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0).normalize();
  scene.add(directionalLight);

  // Function to create a 3D object (e.g., a luxury cosmetic product)
  const createLuxuryCosmeticObject = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color for the luxury brand
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
  };

  const luxuryProduct = createLuxuryCosmeticObject();

  // Animation loop to render the scene
  const animate = () => {
    requestAnimationFrame(animate);
    luxuryProduct.rotation.x += 0.01;
    luxuryProduct.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  useEffect(() => {
    // Append the renderer to the ref element
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    camera.position.z = 5; // Set the camera position for an elegant view
    animate();

    // Clean up on unmount
    return () => {
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [sceneRef]);

  return { sceneRef, cameraRef, rendererRef };
};