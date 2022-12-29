import { Clone, useGLTF } from "@react-three/drei";

export default function ModelWithDrei() {
  const model = useGLTF("./hamburger-draco.glb");
  console.log("model", model);
  return (
    <>
      <Clone
        object={model.scene}
        scale={0.2}
        position-x={-2}
        position-z={-3}
        position-y={-1}
      />
      <Clone
        object={model.scene}
        scale={0.2}
        position-x={-2}
        position-z={0}
        position-y={-1}
      />
      <Clone
        object={model.scene}
        scale={0.2}
        position-x={-2}
        position-z={3}
        position-y={-1}
      />
    </>
  );
}

useGLTF.preload("./hamburger-draco.glb");
