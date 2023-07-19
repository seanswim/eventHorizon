import * as THREE from 'three'
import Ton618VertexShader from './vertex.glsl?raw'
import Ton618FragmentShader from './fragment.glsl?raw'

class Ton618 {
  constructor(world) {
    this.world = world

    this.geometry = new THREE.SphereGeometry( 1, 64, 32 )
    this.material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: Ton618VertexShader,
      fragmentShader: Ton618FragmentShader,
      // envMap: this.world.scene.texture,
      // reflectivity: 1,
      // refractionRatio: 0.75
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.world.scene.add(this.mesh)
  }
}

export default Ton618
