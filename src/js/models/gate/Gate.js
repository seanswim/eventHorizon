import * as THREE from 'three'
import gsap from 'gsap';

class Gate {

  constructor(world) {
    this.world = world
    this.mixer;
    this.duration;
    this.action;
    this.isOpen = false;
    this.loading = 0;
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
      },
      (xhr) => {
        const bar = document.querySelector('.progress')
        this.loading = xhr.loaded / xhr.total * 100
        bar.style.width = (xhr.loaded / (xhr.total * 2) * 100) + "%"
      }
    )
  }

  open() {
    this.isOpen = true
    const light = this.world.light
    gsap
    .timeline()
    .to(light.light, {
      intensity: 1.5,
      ease: 'power0', 
      duration: 3,
      delay: 3
    })
    .to(light.light, {
      intensity: 0.4,
      duration: 2,
      ease: 'sine', 
    })
  }

  update(deltaTime) {
    if (!this.mixer) return

    if (!this.isOpen) {

      this.mixer.update(deltaTime * 100)

      if (this.mixer.time > this.duration/2) {
        this.action.paused = true;
        const loader = document.querySelector('#loader')
        const bar = document.querySelector('.progress')

        gsap.to(bar.style, {
          width: '100%',
          duration: 3,
        }).then(() => {
          loader.style.display = 'none'
        })
      }

    } else {
      this.action.paused = false;
      this.mixer.update(deltaTime / 2)
    }
  }
}

export default Gate