import gsap from 'gsap'

class Controller {
  constructor(world) {
    this.x = 0
    this.y = 0.35
    this.z = 5.5
    this.world = world
    this.velocityY = Math.random() / 1000
    this.velocityX = Math.random() / 1000

    this.init()
  }

  init() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        gsap.to(this, {
          velocityY: this.velocityY - 0.0002,
          ease: 'power4'
        })
      }
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        gsap.to(this, {
          velocityY: this.velocityY + 0.0002,
          ease: 'power4'
        })
      }
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        gsap.to(this, {
          velocityX: this.velocityX + 0.0002,
          ease: 'power4'
        })
      }
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        gsap.to(this, {
          velocityX: this.velocityX - 0.0002,
          ease: 'power4'
        })
      }
    })
  }

  update() {
    if (this.velocityX !== 0) {
      if (this.world.camera.rotation.x > 0.5) {
        this.velocityX = - Math.random() / 1000
      }
      if (this.world.camera.rotation.x < -0.5) {
        this.velocityX = Math.random() / 1000
      }
      this.world.camera.rotation.x += this.velocityX
    }
    if (this.velocityY !== 0) {
      if (this.world.camera.rotation.y > 0.5) {
        this.velocityY = - Math.random() / 1000
      }
      if (this.world.camera.rotation.y < -0.5) {
        this.velocityY = Math.random() / 1000
      }
      this.world.camera.rotation.y += this.velocityY
    }
  }
}

export default Controller