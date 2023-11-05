import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, mouse, windowWidth }) => {
  const computer = useGLTF("./minecraft_skin/scene.gltf");
  return (
    <mesh>
      <ambientLight color={"#915eff"} intensity={0.5} />
      <hemisphereLight intensity={2.5} groundColor="#915eff" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.025}
        position={[0, -3.5, -3.25]}
        rotation={[0, (-1 * (windowWidth / 2 - mouse.x)) / 1500, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // useEffect on moving the mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMouse({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useEffect for window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [0, 0, 20],
        fov: 25,
        near: 0.1,
        far: 200,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          mouse={mouse}
          windowWidth={windowWidth}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
