import * as THREE from 'three'

class Stars {
  constructor(world) {
    this.world = world
    this.geometry = new THREE.BufferGeometry()
    this.material = new THREE.PointsMaterial({ 
      color: 0x888888, 
      map: new THREE.TextureLoader().load('src/assets/star.png'), 
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthTest: true,
    })
    this.speed = []

    this.init()

    this.points = new THREE.Points(this.geometry, this.material);

    this.world.scene.add(this.points)
  }

  init() {
    const vertices = []

    for (let i = 0; i < 500; i++) {
      const x = Math.random() * 100 - 50
      const y = Math.random() * 100 - 50
      const z = Math.random() * 100 - 50

      this.speed.push({
        velocity: 0,
        acceleration: Math.random() / 3
      })

      vertices.push(x, y, z)
    }

    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices, 3 ))
  }

  update() {
    console.log(this.points.geometry.attributes.position.array)
  }
}

export default Stars