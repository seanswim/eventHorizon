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
      const left = document.querySelector("#left")
      const right = document.querySelector("#right")
      const up = document.querySelector("#up")
      const down = document.querySelector("#down")

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        this.velocityY -= 0.0002
        right.setAttribute("class", "controller active")
      }
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        this.velocityY += 0.0002
        left.setAttribute("class", "controller active")
      }
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        this.velocityX += 0.0002
        up.setAttribute("class", "controller active")
      }
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        this.velocityX -= 0.0002
        down.setAttribute("class", "controller active")
      }
    })

    window.addEventListener('keyup', (e) => {
      const left = document.querySelector("#left")
      const right = document.querySelector("#right")
      const up = document.querySelector("#up")
      const down = document.querySelector("#down")

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        right.setAttribute("class", "controller")
      }
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        left.setAttribute("class", "controller")
      }
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        up.setAttribute("class", "controller")
      }
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        down.setAttribute("class", "controller")
      }
    })

    const left = document.querySelector("#left")
    const right = document.querySelector("#right")
    const up = document.querySelector("#up")
    const down = document.querySelector("#down")

    left.addEventListener('mousedown', (e) =>{
      const onMouseHold = () => {
        this.velocityY += 0.0002
      }
      const interval = setInterval(onMouseHold, 100)
      left.setAttribute("class", "controller active")
      left.addEventListener('mouseup', (e) => {
        left.setAttribute("class", "controller")
        clearInterval(interval)
      })
    })

    right.addEventListener('mousedown', (e) =>{
      const onMouseHold = () => {
        this.velocityY -= 0.0002
      }
      const interval = setInterval(onMouseHold, 100)
      right.setAttribute("class", "controller active")
      right.addEventListener('mouseup', (e) => {
        right.setAttribute("class", "controller")
        clearInterval(interval)
      })
    })

    up.addEventListener('mousedown', (e) =>{
      const onMouseHold = () => {
        this.velocityX += 0.0002
      }
      const interval = setInterval(onMouseHold, 100)
      up.setAttribute("class", "controller active")
      up.addEventListener('mouseup', (e) => {
        up.setAttribute("class", "controller")
        clearInterval(interval)
      })
    })

    down.addEventListener('mousedown', (e) =>{
      const onMouseHold = () => {
        this.velocityX -= 0.0002
      }
      const interval = setInterval(onMouseHold, 100)
      down.setAttribute("class", "controller active")
      down.addEventListener('mouseup', (e) => {
        down.setAttribute("class", "controller")
        clearInterval(interval)
      })
    })

  }

  update() {
    if (this.velocityX !== 0) {
      if (this.world.camera.rotation.x > 0.5) {
        this.velocityX = - 0.001
        gsap.to(this.world.camera.rotation, {
          x: 0.45
        })
      } else if (this.world.camera.rotation.x < -0.5) {
        this.velocityX = 0.001
        gsap.to(this.world.camera.rotation, {
          x: -0.45
        })

      } 
      this.world.camera.rotation.x += this.velocityX
    }
    if (this.velocityY !== 0) {
      if (this.world.camera.rotation.y > 0.5) {
        this.velocityY = - 0.001
        gsap.to(this.world.camera.rotation, {
          y: 0.45
        })
      }
      if (this.world.camera.rotation.y < -0.5) {
        this.velocityY = 0.001
        gsap.to(this.world.camera.rotation, {
          y: - 0.45
        })
      }
      this.world.camera.rotation.y += this.velocityY
    }
  }
}

export default Controller