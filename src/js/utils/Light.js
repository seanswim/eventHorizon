import * as THREE from 'three'

class Light {
  constructor(world) {
    this.world = world
    this.light = new THREE.AmbientLight(0xffffff, 0.0)
    this.world.scene.add(this.light)
  }
}

export default Light