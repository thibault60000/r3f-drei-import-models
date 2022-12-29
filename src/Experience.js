import { OrbitControls } from "@react-three/drei";

import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./Model";
import ModelWithDrei from "./ModelWithDrei";
import Placeholder from "./Placeholder";
import Hamburger from "./Hamburger";
import Fox from "./Fox";

export default function Experience() {
  return (
    <>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <directionalLight
        shadow-normalBias={0.04}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

      {/* <mesh castShadow position-x={-4}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh castShadow position-x={4} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh> */}

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      {/* Helmet */}
      <Suspense
        fallback={
          <Placeholder position-x={2} position-y={0.5} scale={[2, 3, 2]} />
        }
      >
        <Model />
      </Suspense>

      {/* Hamburger (clones) */}
      <Suspense fallback={<Placeholder position-x={-2} scale={[2, 2, 2]} />}>
        <ModelWithDrei />
      </Suspense>

      {/* Hamburger (GLTF to JSX) */}
      <Suspense fallback={<Placeholder position-x={-2} scale={[2, 2, 2]} />}>
        <Hamburger scale={0.2} position-y={-1} />
      </Suspense>

      {/* Fox*/}
      <Suspense fallback={<Placeholder position-x={-2} scale={[2, 2, 2]} />}>
        <Fox />
      </Suspense>
    </>
  );
}
