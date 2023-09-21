import * as THREE from 'three'

class Stars {
  constructor(world) {
    this.world = world
    this.geometry = new THREE.BufferGeometry()
    this.material = new THREE.PointsMaterial({ 
      // color: 0x888888, 
      size: 0.5,
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
      const x = Math.random() * 150 - 50
      const y = Math.random() * 150 - 50
      const z = Math.random() * 10

      this.speed.push({
        velocity: 0,
        acceleration: Math.random() / 100
      })

      vertices.push(x, y, z)
    }

    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices, 3 ))
  }

  update() {
    const position = this.points.geometry.getAttribute('position')
    const arr = position.array
    for (let i = 0; i < arr.length; i += 3) {
      const index = i/3
      arr[i+2] += this.speed[index].velocity
      this.speed[index].velocity += this.speed[index].acceleration

      if (arr[i+2] > this.world.camera.position.z + 500) {
        arr[i+2] = Math.random() * 100 - 50
        this.speed[index].velocity = 0;
      }
    }
    
    position.needsUpdate = true
  }
}

export default Stars