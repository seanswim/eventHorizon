import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Vector2 } from 'three/src/math/Vector2';

class Postprocessor {
  constructor(world, renderer) {
  
    this.world = world

    this.effectComposer = new EffectComposer(renderer)
    this.effectComposer.addPass(new RenderPass(this.world.scene, this.world.camera))
    this.bloomPass = new UnrealBloomPass(
      new Vector2(this.world.sizer.width, this.world.sizer.height), 
      0.8, 
      2.0, 
      0.0
    )
    this.effectComposer.addPass(this.bloomPass)
  }

  resize() {
    this.effectComposer.setSize(this.world.sizer.width, this.world.sizer.height)
  }

  update() {
    this.effectComposer.render()
  }
}

export default Postprocessor