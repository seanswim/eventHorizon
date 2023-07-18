import Renderer from "../utils/Renderer"
import Camera from "../utils/Camera"
import Sizer from "../utils/Sizer"
import * as THREE from 'three'

class World {
  constructor(canvasEl) {
    this.domElement = canvasEl
    this.sizer = new Sizer()
    this.scene = new THREE.Scene()
    this.renderer = new Renderer(this)
    this.camera = new Camera(this)

    this.geometry = new THREE.BoxGeometry( 1, 1, 1 )
    this.material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)

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