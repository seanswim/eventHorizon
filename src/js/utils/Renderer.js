import * as THREE from 'three';

class Renderer extends THREE.WebGLRenderer {
  constructor(world) {
    super({antialias: true, canvas: world.domElement})
    this.world = world

    this.setSize(this.world.sizer.width, this.world.sizer.height)
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  resize() {
    this.setSize(this.world.sizer.width, this.world.sizer.height)
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  update() {
    this.render(this.world.scene, this.world.camera)
  }
}

export default Renderer