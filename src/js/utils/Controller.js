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
      if (e.key === 'ArrowRight' || e.key === 'd') {
        gsap.to(this, {
          velocityY: this.velocityY - 0.0001,
          ease: 'power4'
        })
      }
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        gsap.to(this, {
          velocityY: this.velocityY + 0.0001,
          ease: 'power4'
        })
      }
      if (e.key === 'ArrowUp' || e.key === 'w') {
        gsap.to(this, {
          velocityX: this.velocityX + 0.0001,
          ease: 'power4'
        })
      }
      if (e.key === 'ArrowDown' || e.key === 's') {
        gsap.to(this, {
          velocityX: this.velocityX - 0.0001,
          ease: 'power4'
        })
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