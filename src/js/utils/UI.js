class UI {
  constructor(world) {
    this.world = world
    this.openUI()
    this.controllerUI()
  }

  openUI = () => {
    const button = document.createElement("button");
    button.textContent = "Open the gate"
    button.setAttribute("name", "Open")
    button.setAttribute("id", "open-btn")
    const container = document.querySelector('#container')
    container.appendChild(button)
    
    button.addEventListener("click", () => {
      this.world.gate.open()
      container.removeChild(button)
    })
  }

  controllerUI = () => {
    const left = document.createElement("button")
    const right = document.createElement("button")
    const up = document.createElement("button")
    const down = document.createElement("button")
    left.textContent = "A"
    right.textContent = "D"
    down.textContent = "S"
    up.textContent = "W"
    left.setAttribute("id", "left")
    left.setAttribute("class", "controller")
    right.setAttribute("id", "right")
    right.setAttribute("class", "controller")
    down.setAttribute("id", "down")
    down.setAttribute("class", "controller")
    up.setAttribute("id", "up")
    up.setAttribute("class", "controller")
    const container = document.querySelector('#container')
    container.appendChild(left)
    container.appendChild(right)
    container.appendChild(down)
    container.appendChild(up)
  }

}

export default UI