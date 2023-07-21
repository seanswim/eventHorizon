import * as THREE from 'three'

class Scene extends THREE.Scene{
  constructor(world) {
    super()
    this.world = world
   
  }

}

export default Scene