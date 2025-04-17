"use client"
import { Canvas } from "@react-three/fiber";
import Experience from "./_components/Experience";
import {DecorProvider} from "./_hooks/Decor"
import {UIProvider} from "./_hooks/UIContext"
import {UI} from "./_components/UI"
import { ScrollControls } from "@react-three/drei";
export default function Home() {
  return (
    <DecorProvider>
      <UIProvider>
      <main className="flex h-screen min-h-screen flex-col">
        <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4}>
          <Experience />
        </ScrollControls>
      </Canvas>
        <UI/>
      </main>
      </UIProvider>
    </DecorProvider>
  );
}
