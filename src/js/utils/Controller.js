class Controller {
  constructor(world) {
    this.x = 0
    this.y = 0.35
    this.z = 5.5
    this.world = world
    this.velocityY = 0
    this.velocityX = 0

    this.init()
  }

  init() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'd') {
        // this.world.camera.rotation.y -= 0.1
        this.velocityY -= 0.001
      }
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        // this.world.camera.rotation.y += 0.1
        this.velocityY += 0.001
      }
      if (e.key === 'ArrowUp' || e.key === 'w') {
        // this.world.camera.rotation.x += 0.1
        this.velocityX += 0.001
      }
      if (e.key === 'ArrowDown' || e.key === 's') {
        // this.world.camera.rotation.x -= 0.1
        this.velocityX -= 0.001
      }
    })
  }

  update() {
    if (this.velocityX !== 0) {
      this.world.camera.rotation.x += this.velocityX
    }
    if (this.velocityY !== 0) {
      this.world.camera.rotation.y += this.velocityY
    }
  }
}

export default Controller