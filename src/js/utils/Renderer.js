import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Vector2 } from 'three/src/math/Vector2';

class Renderer extends THREE.WebGLRenderer {
  constructor(world) {
    super({antialias: true, canvas: world.domElement, alpha: true})
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