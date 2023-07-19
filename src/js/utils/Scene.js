import * as THREE from 'three'

class Scene extends THREE.Scene{
  constructor(world) {
    super()
    this.world = world
   
    this.texture = this.world.loader.EXRLoader.load('src/assets/starmap/starmap.exr', () => {
      this.texture.mapping = THREE.EquirectangularRefractionMapping 
    })
    this.background = this.texture
  }

}

export default Scene