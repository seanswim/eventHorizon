import * as THREE from 'three'
import { getRandomInt, getRandomFloat } from '@/js/utils/Utils'

class SpaceDust {
  constructor(world) {
    this.world = world
    
    const textureLoader = new THREE.TextureLoader()
    const spaceDust2 = textureLoader
    .setPath('src/assets/')
    .load('spaceDust2.png')
    const nebula1 = textureLoader
    .setPath('src/assets/')
    .load('nebula1.png')
    const nebula2 = textureLoader
    .setPath('src/assets/')
    .load('nebula2.png')
    const nebula3 = textureLoader
    .setPath('src/assets/')
    .load('nebula3.png')
    const nebula4 = textureLoader
    .setPath('src/assets/')
    .load('nebula4.png')
    const spaceDusts = [spaceDust2, nebula1, nebula2, nebula3, nebula4]

    this.dustCluster = []
    this.radius = 55
    this.center = new THREE.Vector3(0.0, 0.0, 0.0)
    this.rotateAngle = 0
    
    for (let i = 0; i < 200; i++) {
      const geometry = new THREE.PlaneGeometry(
        getRandomFloat(30, 50), 
        getRandomFloat(20, 30)
      )
      const material = new THREE.MeshLambertMaterial({
        map: spaceDusts[getRandomInt(0, 2)],
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthTest: true,
      })
      let dust = new THREE.Mesh(geometry, material)
      const alpha = getRandomInt(0, 360) 
      const distance = this.radius+Math.random()*30
      dust.position.set(
        Math.cos(Math.PI/180 * alpha) * distance,
        Math.random() * 50 - 25,
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
      dust.rotation.z -= getRandomFloat(0.00002, 0.0002)
      dust.position.x = Math.cos(Math.PI/180 * dust.alpha - this.rotateAngle/40) * dust.distance
      dust.position.z = Math.sin(Math.PI/180 * dust.alpha - this.rotateAngle/40) * dust.distance
    })
  }
}

export default SpaceDust