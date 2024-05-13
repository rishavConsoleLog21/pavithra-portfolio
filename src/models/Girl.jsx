/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Seb00927 (https://sketchfab.com/Seb00927)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/chibi-girl-3-99bbdf0c998541f4ad001f40fd57d843
Title: Chibi Girl 3
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/girl.glb";

export function Girl({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_23" position={[0, 0.495, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Skin}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Hair}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Eyes}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Uniform_blue}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Uniform_White}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Uniform_Black}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group name="Head_22" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Girl;
