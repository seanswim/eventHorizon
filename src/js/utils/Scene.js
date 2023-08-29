import * as THREE from 'three'

class Scene extends THREE.Scene{
  constructor(world) {
    super()
    this.world = world
    // this.background = new THREE.CubeTextureLoader()
    // .setPath('src/assets/')
    // .load([
    //   'right.png',
    //   'left.png',
    //   'top.png',
    //   'bottom.png',
    //   'front.png',
    //   'back.png',
    // ])
    // this.backgroundIntensity = 0.9
  }
}

export default Scene