import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Fox() {
  const fox = useGLTF("/Fox/glTF/Fox.gltf");
  console.log("fox", fox);

  const animations = useAnimations(fox.animations, fox.scene);
  console.log("animations", animations);
  // https://threejs.org/docs/?q=action#api/en/animation/AnimationAction

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();

    return () => {
      console.log("dispose");
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-4, -1, 4]}
      rotation-y={0.3}
    />
  );
}
