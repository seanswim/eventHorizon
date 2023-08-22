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
    this.radius = 3
    this.center = this.world.ton618.mesh.position
    this.rotateAngle = 0
    
    for (let i = 0; i < 800; i++) {
      const geometry = new THREE.PlaneGeometry(
        getRandomFloat(0.5, 1.2), 
        getRandomFloat(0.5, 1)
      )
      const material = new THREE.MeshLambertMaterial({
        map: spaceDusts[getRandomInt(0, 2)],
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
      })
      let dust = new THREE.Mesh(geometry, material)
      const alpha = getRandomInt(0, 360) 
      dust.position.set(
        Math.cos(Math.PI/180 * alpha) * (this.radius+Math.random()*3) -0.5,
        Math.random() * 1.2 - 1.3,
        Math.sin(Math.PI/180 * alpha) * (this.radius+Math.random()*3),
      )
      dust.alpha = alpha
      dust.material.opacity = getRandomFloat(0.2, 0.55)
      this.dustCluster.push(dust)
    }

    this.world.scene.add(...this.dustCluster)
  }

  update(deltaTime) {
    this.rotateAngle += deltaTime
    this.dustCluster.forEach((dust, i) => {
      dust.rotation.z -= getRandomFloat(0.0005, 0.001)
      // dust.position.x = Math.cos(Math.PI/180 * dust.alpha + this.rotateAngle/40) * this.radius
      // dust.position.z = Math.sin(Math.PI/180 * dust.alpha + this.rotateAngle/40) * this.radius
    })
  }
}

export default SpaceDust