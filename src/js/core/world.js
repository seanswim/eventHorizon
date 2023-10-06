import Renderer from "../utils/Renderer"
import Camera from "../utils/Camera"
import Sizer from "../utils/Sizer"
import Scene from "../utils/Scene"
import SLoader from "../utils/Loader"
import Controller from "../utils/Controller"
import * as THREE from 'three'
import SpaceDust from "../models/components/spaceDust/spaceDust"
import Postprocessor from "../utils/Postprocessor"
import Ton618_gltf from "../models/ton618_gltf/Ton618_gltf"
import Stars from "../models/stars/Stars"
import Gate from "../models/gate/Gate"
import Light from "../utils/Light"
import UI from "../utils/UI"

class World {

  constructor(canvasEl) {
    this.loader = SLoader
    this.domElement = canvasEl
    this.clock = new THREE.Clock()
    this.sizer = new Sizer()
    this.scene = new Scene(this)
    this.renderer = new Renderer(this)
    this.camera = new Camera(this)
    this.ton618_gltf = new Ton618_gltf(this)
    this.spaceDust = new SpaceDust(this)
    this.stars = new Stars(this)
    this.light = new Light(this)
    this.gate = new Gate(this)
    this.UI = new UI(this)
    this.controller = new Controller(this)
  
    this.postprocessor = new Postprocessor(this, this.renderer)

    this.lastTimestamp = Date.now()
    
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.renderer.resize()
    this.camera.resize()
  }

  update() {

    const deltaTime = (Date.now() - this.lastTimestamp) / 1000
    this.lastTimestamp = Date.now()

    this.renderer.update()
    this.postprocessor.update()
    this.spaceDust.update(deltaTime)
    this.ton618_gltf.update()
    this.stars.update()
    this.gate.update(deltaTime)
    this.controller.update()

    requestAnimationFrame(() => {
      this.update()
    })
  }
}

const SWorld = new World(document.querySelector('#canvas'))

export default SWorld