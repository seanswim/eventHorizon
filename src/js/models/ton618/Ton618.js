import * as THREE from 'three'
import Ton618VertexShader from './shaders/vertex.glsl?raw'
import Ton618FragmentShader from './shaders/fragment.glsl?raw'
import DimensionCurve from '../components/dimensionCurve/dimensionCurve'

class Ton618 {
  constructor(world) {
    this.world = world

    this.geometry = new THREE.SphereGeometry( 1, 64, 32 )
    this.material = new THREE.ShaderMaterial({
      uniforms: {
      },
      vertexShader: Ton618VertexShader,
      fragmentShader: Ton618FragmentShader,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.dimensionCurve = new DimensionCurve()
    
    this.world.scene.add(this.mesh, this.dimensionCurve.mesh)
  }
}

export default Ton618
