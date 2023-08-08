import Renderer from "../utils/Renderer"
import Camera from "../utils/Camera"
import Sizer from "../utils/Sizer"
import Scene from "../utils/Scene"
import SLoader from "../utils/Loader"
import Ton618 from "../models/ton618/Ton618"
import * as THREE from 'three'
import DimensionCurve from "../models/components/dimensionCurve/dimensionCurve"
import AccretionDisk from "../models/accDisk/AccretionDisk"

class World {
  constructor(canvasEl) {
    this.loader = SLoader
    this.domElement = canvasEl
    this.clock = new THREE.Clock()
    this.sizer = new Sizer()
    this.scene = new Scene(this)
    this.renderer = new Renderer(this)
    this.camera = new Camera(this)

    this.ton618 = new Ton618(this)
    // this.dimensionCurve = new DimensionCurve(this)
    this.accretionDisk = new AccretionDisk(this)
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.renderer.resize()
    this.camera.resize()
  }

  update() {
    this.renderer.update()
    // this.dimensionCurve.update()
    requestAnimationFrame(() => {
      this.update()
    })
  }
}

const SWorld = new World(document.querySelector('#canvas'))

export default SWorld