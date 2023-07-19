import * as THREE from 'three'
import px from 'src/assets/spaceWall/px.png'
import py from 'src/assets/spaceWall/py.png'
import pz from 'src/assets/spaceWall/pz.png'
import nx from 'src/assets/spaceWall/nx.png'
import ny from 'src/assets/spaceWall/ny.png'
import nz from 'src/assets/spaceWall/nz.png'

class Scene extends THREE.Scene{
  constructor(world) {
    super()
    this.world = world
   
    this.texture = this.world.loader.cubeTextureLoader.load([px, nx, py, ny, pz, nz])
    this.texture.mapping = THREE.CubeRefractionMapping 
    this.background = this.texture
  }

}

export default Scene