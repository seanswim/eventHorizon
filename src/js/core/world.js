import Renderer from "../utils/Renderer"
import Camera from "../utils/Camera"
import Sizer from "../utils/Sizer"
import Scene from "../utils/Scene"
import SLoader from "../utils/Loader"
import Ton618 from "../models/ton618/Ton618"
import * as THREE from 'three'
import DimensionCurve from "../models/components/dimensionCurve/dimensionCurve"
import AccretionDisk from "../models/accDisk/AccretionDisk"
import SpaceDust from "../models/components/spaceDust/spaceDust"
import Postprocessor from "../utils/Postprocessor"
import Ton618_gltf from "../models/ton618_gltf/Ton618_gltf"

class World {
  constructor(canvasEl) {
    this.loader = SLoader
    this.domElement = canvasEl
    this.clock = new THREE.Clock()
    this.sizer = new Sizer()
    this.scene = new Scene(this)
    this.renderer = new Renderer(this)
    this.camera = new Camera(this)
    this.postprocessor = new Postprocessor(this, this.renderer)

    this.spaceDust = new SpaceDust(this)
    this.ton618_gltf = new Ton618_gltf(this)

    let light = new THREE.AmbientLight(0xe8e8e6)
    this.scene.add(light)

    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.renderer.resize()
    this.camera.resize()
  }

  update() {
    const deltaTime = this.clock.getDelta()
    this.renderer.update()
    this.postprocessor.update()
    this.spaceDust.update(deltaTime/2)
    this.ton618_gltf.update()
    requestAnimationFrame(() => {
      this.update()
    })
  }
}

const SWorld = new World(document.querySelector('#canvas'))

export default SWorld