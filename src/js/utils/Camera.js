import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class Camera extends THREE.PerspectiveCamera {
  constructor(world) {
    super(
      60, 
      world.sizer.width / world.sizer.height,
      1,
      1000,
    )
    this.world = world
    this.position.set( 0, 0, 100 )
    // this.controls = new OrbitControls(this, this.world.renderer.domElement)
  }

  resize() {
    this.aspect = this.world.sizer.width / this.world.sizer.height
    this.updateProjectionMatrix()
  }
}

export default Camera