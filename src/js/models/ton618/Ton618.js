import * as THREE from 'three'

class Ton618 {
  constructor(world) {
    this.world = world

    this.geometry = new THREE.SphereGeometry( 1, 64, 32 )
    this.material = new THREE.MeshBasicMaterial({
      envMap: this.world.scene.texture,
      reflectivity: 1,
      refractionRatio: 0.98
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.world.scene.add(this.mesh)
  }
}

export default Ton618