import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class Ton618_gltf {
  constructor(world) {
    this.world = world
    this.mixer = new THREE.AnimationMixer()

    const loader = new GLTFLoader()

    this.model = loader.setPath('src/assets/blackhole/').load('scene.gltf', (gltf) => {
      
      const mesh = gltf.scene
      this.mixer = new THREE.AnimationMixer(mesh)
      const clips = mesh.animations;

      gltf.animations.forEach(clip => {
        this.mixer.clipAction(clip).play()
      })

      this.world.scene.add(gltf.scene)
    })

  }

  update() {
    // this.model.animate()
    this.mixer.update(0.001)
  }
}

export default Ton618_gltf
