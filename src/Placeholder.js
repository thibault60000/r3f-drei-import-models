import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Placeholder(props) {
  const placeholderRef = useRef();

  useFrame(
    (state, delta) => {
      placeholderRef.current.rotation.y += delta * 0.2;
    },
    [placeholderRef]
  );

  return (
    <mesh ref={placeholderRef} {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color='red' />
    </mesh>
  );
}
