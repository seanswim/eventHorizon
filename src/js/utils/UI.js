class UI {
  constructor(world) {
    this.world = world
    this.openUI()
  }

  startLoading = () => {

  }

  openUI = () => {
    const button = document.createElement("button");
    button.textContent = "Open the gate"
    button.setAttribute("name", "Open")
    button.setAttribute("style", `
      position: absolute; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%);
      cursor:pointer;
      padding: 30px 40px;
      border-radius: 12px;
      font-size: 24px`
    )
    const container = document.querySelector('#container')
    container.appendChild(button)
    
    button.addEventListener("click", () => {
      this.world.gate.open()
      container.removeChild(button)
    })
  }

  update() {

  }
}

export default UI