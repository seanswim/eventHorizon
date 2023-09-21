import * as THREE from 'three'

class Gate {

  constructor(world) {
    this.world = world
    this.mixer;
    this.init()
  }

  init() {

    const {x, y, z} = this.world.camera.position

    this.world.loader.gltfLoader.load(
      'src/assets/gate/scene.gltf', 
      (gltf) => {
        const model = gltf.scene;
        
        console.log(gltf.animations)

        this.mixer = new THREE.AnimationMixer(model)
        const action = this.mixer.clipAction(gltf.animations[0])
        action.clampWhenFinished = true;
        action.setLoop(THREE.LoopOnce, 1)
        action.play()
        
        model.scale.set(20, 20, 20)

        const position = new THREE.Vector3(x, y - 5, z - 40); 
        model.rotation.y = Math.PI
        model.position.copy(position);

        const light = new THREE.SpotLight(0xffcccb, 1, 80, Math.PI / 180 * 50)
        light.position.set(x, y + 14, z - 5)
        light.target = model
        const lighthelper = new THREE.SpotLightHelper(light); 

        this.world.scene.add(model, light, )
      }
    )
  }

  open() {

  }

  update(deltaTime) {
    if (this.mixer) {
      this.mixer.update(deltaTime/2)
    }
  }
}

export default Gate