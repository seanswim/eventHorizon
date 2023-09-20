import * as THREE from 'three'

class Room {

  constructor(world) {
    this.world = world
    this.init()
  }

  init() {

    const {x, y, z} = this.world.camera.position

    this.world.loader.gltfLoader.load(
      'src/assets/room/scene.gltf', 
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(10, 10, 10)

        const position = new THREE.Vector3(x, y-25, z - 40); 
        model.position.copy(position);
        console.log(model)

        const light = new THREE.SpotLight(0xeeeeee, 0.7)
        const lighthelper = new THREE.SpotLightHelper(light); 
        light.position.set(x, y + 240, z - 80)
        this.world.scene.add(model, light, lighthelper)
      }
    )

    this.world.loader.gltfLoader.load(
      'src/assets/icarus/scene.gltf',
      (gltf) => {
        const model = gltf.scene;

        const position = new THREE.Vector3(x + 5, y - 50, z + 140); 
        model.rotation.x = Math.PI/180 * 225;

        model.position.copy(position);

        this.world.scene.add(model)
      }
    )
  }

  open() {

  }

}

export default Room