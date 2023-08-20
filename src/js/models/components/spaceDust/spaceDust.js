import * as THREE from 'three'
import { getRandomInt, getRandomFloat } from '@/js/utils/Utils'

class SpaceDust {
  constructor(world) {
    this.world = world
    const textureLoader = new THREE.TextureLoader()
    const spaceDust1 = textureLoader
    .setPath('src/assets/')
    .load('spaceDust1.png')
    const spaceDust2 = textureLoader
    .setPath('src/assets/')
    .load('spaceDust2.png')
    const spaceDust3 = textureLoader
    .setPath('src/assets/')
    .load('spaceDust3.png')
    const spaceDusts = [spaceDust2, spaceDust3, spaceDust2]

    this.dustCluster = []
    
    for (let i = 0; i < 100; i++) {
      const geometry = new THREE.PlaneGeometry(
        getRandomFloat(1, 2.4), 
        getRandomFloat(1, 2)
      )
      const material = new THREE.MeshLambertMaterial({
        map: spaceDusts[getRandomInt(0, 2)],
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
      })
      let dust = new THREE.Mesh(geometry, material)
      dust.position.set(
        Math.random()*6 -3,
        Math.random()*2 -1,
        Math.random()*3,
      )
      dust.material.opacity = getRandomFloat(0.2, 0.55)
      this.dustCluster.push(dust)
    }

    this.world.scene.add(...this.dustCluster)
  }

  update() {
    this.dustCluster.forEach((dust, i) => {
      dust.rotation.z -= getRandomFloat(0.0005, 0.001)
    })
  }
}

export default SpaceDust