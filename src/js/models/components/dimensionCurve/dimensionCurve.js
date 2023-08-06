import * as THREE from 'three'
import FragmentShader from './shaders/fragment.glsl?raw'
import VertexShader from './shaders/vertex.glsl?raw'


class DimensionCurve {
  constructor(world) {
    this.world = world
    const CubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = CubeTextureLoader
    .setPath('src/assets/')
    .load([
      'right.png',
      'left.png',
      'top.png',
      'bottom.png',
      'front.png',
      'back.png',
    ])

    this.geometry = new THREE.CircleGeometry(3, 32)
    this.material = new THREE.ShaderMaterial({
      vertexShader: VertexShader,
      fragmentShader: FragmentShader,
      uniforms: {
        envMap: { value: envMap },
        uTime: { value: 0 }
      }
    });

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.world.scene.add(this.mesh)
  }

  update() {
    this.material.uniforms.uTime.value = this.world.clock.getElapsedTime();
  }
}

export default DimensionCurve