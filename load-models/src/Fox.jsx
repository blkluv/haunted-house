/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

// export default function Fox(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/Fox.gltf");
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group>
//         <group name="root">
//           <primitive object={nodes._rootJoint} />
//           <skinnedMesh
//             name="fox"
//             geometry={nodes.fox.geometry}
//             material={materials.fox_material}
//             skeleton={nodes.fox.skeleton}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/Fox.gltf");

export default function Fox() {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls("animation name", {
    animationName: { options: animations.names },
  });
  useEffect(() => {
    const action = animations.actions[animationName];
    // console.log(action);
    action.fadeIn(0.5).play();
    return () => {
      action?.fadeOut(0.5);
      // console.log("dispose");
    };

    //smooth transition from one animation to another
    // setTimeout(() => {
    //   animations.actions.Walk.play();
    //   animations.actions.Walk?.crossFadeFrom(animations.actions.Run, 1);
    // }, 2000);
  }, [animationName]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
}
