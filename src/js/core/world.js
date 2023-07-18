import Renderer from "../utils/Renderer"
import Camera from "../utils/Camera"
import Sizer from "../utils/Sizer"
import Scene from "../utils/Scene"
import SLoader from "../utils/Loader"

class World {
  constructor(canvasEl) {
    this.loader = SLoader
    this.domElement = canvasEl
    this.sizer = new Sizer()
    this.scene = new Scene(this)
    this.renderer = new Renderer(this)
    this.camera = new Camera(this)

    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.renderer.resize()
    this.camera.resize()
  }

  update() {
    this.renderer.update()
    requestAnimationFrame(() => {
      this.update()
    })
  }
}

const SWorld = new World(document.querySelector('#canvas'))

export default SWorld