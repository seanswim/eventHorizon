import * as THREE from 'three'

class Room {

  constructor(world) {
    this.world = world
    this.mixer;
    this.init()
  }

  init() {

    const {x, y, z} = this.world.camera.position

    this.world.loader.gltfLoader.load(
      'src/assets/room/scene.gltf', 
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            // child.material.transparent = true;
            // child.material.depthWrite = false;
            // child.material.depthTest = true;
            child.material.side = THREE.DoubleSide
            child.material.transparent = true;
            child.material.opacity = 1;
            child.material.alphaTest = 0.5;
            child.material.blending = THREE.NormalBlending;;
            if (child.id === 56 || child.id === 57 || child.id === 58) {
            }
            console.log(child)
            if (child.id === 53) {
              child.visible = true
              child.material.transparent = false

            } else {
              child.visible = false
            }
          }
        })
        

        this.mixer = new THREE.AnimationMixer(model)
        const action = this.mixer.clipAction(gltf.animations[1])
        action.clampWhenFinished = true;
        action.setLoop(THREE.LoopOnce, 1)
        action.play()
        
        model.scale.set(10, 10, 10)

        const position = new THREE.Vector3(x, y - 15, z - 120); 
        model.position.copy(position);

        const light = new THREE.SpotLight(0xeeeeee, 0.7)
        // const lighthelper = new THREE.SpotLightHelper(light); 
        light.position.set(x, y + 100, z - 20)
        this.world.scene.add(model, light)
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

export default Room