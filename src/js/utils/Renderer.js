import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Vector2 } from 'three/src/math/Vector2';

class Renderer extends THREE.WebGLRenderer {
  constructor(world) {
    super({antialias: true, canvas: world.domElement, alpha: true})
    this.world = world

    this.composer = new EffectComposer(this)
    this.renderPass = new RenderPass(this.world.scene, this.world.camera)
    this.composer.addPass(this.renderPass)
    this.bloomPass = new UnrealBloomPass(
      new Vector2(this.world.sizer.width, this.world.sizer.height), 
      0.8, 
      2.0, 
      0.0
    )
    this.composer.addPass(this.bloomPass)

    // this.setSize(this.world.sizer.width, this.world.sizer.height)
    // this.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  resize() {
    // this.setSize(this.world.sizer.width, this.world.sizer.height)
    // this.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.bloomPass.setSize(this.world.sizer.width, this.world.sizer.height)
  }

  update() {
    // this.render(this.world.scene, this.world.camera)    
    this.composer.render()
  }
}

export default Renderer