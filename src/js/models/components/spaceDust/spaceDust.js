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
    this.radius = 2.5
    this.center = new THREE.Vector3(0.0, 0.0, 0.0)
    // this.center = this.world.ton618.mesh.position
    this.rotateAngle = 0
    
    for (let i = 0; i < 450; i++) {
      const geometry = new THREE.PlaneGeometry(
        getRandomFloat(1, 1.5), 
        getRandomFloat(0.7, 1)
      )
      const material = new THREE.MeshLambertMaterial({
        map: spaceDusts[getRandomInt(0, 2)],
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
      })
      let dust = new THREE.Mesh(geometry, material)
      const alpha = getRandomInt(0, 360) 
      const distance = this.radius+Math.random()*3
      dust.position.set(
        Math.cos(Math.PI/180 * alpha) * distance -0.5,
        Math.random() * 1.2 - 1.3,
        Math.sin(Math.PI/180 * alpha) * distance,
      )
      dust.alpha = alpha
      dust.distance = distance
      dust.material.opacity = getRandomFloat(0.2, 0.55)
      this.dustCluster.push(dust)
    }

    this.world.scene.add(...this.dustCluster)
  }

  update(deltaTime) {
    this.rotateAngle += deltaTime
    this.dustCluster.forEach((dust, i) => {
      dust.rotation.z -= getRandomFloat(0.0005, 0.0007)
      dust.position.x = Math.cos(Math.PI/180 * dust.alpha - this.rotateAngle/40) * dust.distance
      dust.position.z = Math.sin(Math.PI/180 * dust.alpha - this.rotateAngle/40) * dust.distance
    })
  }
}

export default SpaceDust