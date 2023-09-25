import * as THREE from 'three'

class Gate {

  constructor(world) {
    this.world = world
    this.mixer;
    this.duration;
    this.action;
    this.isOpen = false;
    this.init()
  }

  init() {

    const {x, y, z} = this.world.camera.position

    this.world.loader.gltfLoader.load(
      'src/assets/gate/scene.gltf', 
      (gltf) => {
        const model = gltf.scene;

        this.mixer = new THREE.AnimationMixer(model)
        this.action = this.mixer.clipAction(gltf.animations[0])
        this.duration = gltf.animations[0].duration

        this.action.clampWhenFinished = true;
        this.action.setLoop(THREE.LoopOnce, 1)
        this.action.play()
        
        const position = new THREE.Vector3(x, y, z-1.5); 
        model.rotation.y = Math.PI
        model.position.copy(position);

        const light = new THREE.SpotLight(0xffcccb, 1, 5, Math.PI / 180 * 30)
        const helper = new THREE.SpotLightHelper(light)
        light.position.set(x, y+1.3, z+.5)
        light.target = model

        this.world.scene.add(model, light)
      }
    )
    this.open()
  }

  open() {
    window.addEventListener('click', () => {
      this.isOpen = true
    })
  }

  update(deltaTime) {
    if (!this.mixer) return
    if (this.mixer.time > this.duration/2) {
      if (this.isOpen) {
        this.action.paused = false;
      } else {
        this.action.paused = true;
      }
    }
    this.mixer.update(deltaTime/2)
  }
}

export default Gate