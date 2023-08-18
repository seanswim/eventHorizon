import * as THREE from 'three'

class SpaceDust {
  constructor(world) {
    this.world = world
    const textureLoader = new THREE.TextureLoader()
    const textureMap = textureLoader
    .setPath('src/assets/')
    .load('spaceDust2.png')

    this.geometry = new THREE.PlaneGeometry(2, 1)
    this.material = new THREE.MeshLambertMaterial({
      map: textureMap,
      transparent: true
    })

    this.dustCluster = []

    for (let i = 0; i < 100; i++) {
      let dust = new THREE.Mesh(this.geometry, this.material)
      dust.position.set(
        Math.random()*6 -3,
        Math.random()*2 -1,
        Math.random()*3,
      )
      // dust.rotation.x = 0
      // dust.rotation.y = 0
      // dust.rotation.z = Math.random() * 2 * Math.PI
      dust.material.opacity = 0.55
      this.dustCluster.push(dust)
    }

    console.log(this.dustCluster)

    this.world.scene.add(...this.dustCluster)

  }
}

export default SpaceDust