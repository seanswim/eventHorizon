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
    this.model;
    this.light;
    this.init()
  }

  init() {

    const {x, y, z} = this.world.camera.position

    this.world.loader.gltfLoader.load(
      'src/assets/gate/scene.gltf', 
      (gltf) => {
        const model = gltf.scene;
        this.model = model;

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
        light.position.set(x, y+1.3, z+.5)
        light.target = model
        this.light = light

        this.world.scene.add(model, light)
      },
      (xhr) => {
        const bar = document.querySelector('.progress')
        this.loading = xhr.loaded / xhr.total * 100
        bar.style.width = (xhr.loaded / (xhr.total * 1.2) * 100) + "%"
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
      delay: 2
    })
    .to(light.light, {
      intensity: 0.3,
      duration: 2,
      ease: 'sine', 
      onComplete: () => {
        this.world.stars.isActive = true
      }
    })

    setTimeout(() => {

      gsap.to(this.model.rotation, {
        z: -45 * Math.PI/180,
        ease: 'power3',
        duration: 5,
      })

      gsap
      .timeline()
      .to(this.model.position, {
        x: 20,
        z: 150,
        duration: 15,
        ease: 'power1',
        onComplete: () => {
          this.world.scene.remove(this.model, this.light)
        }
      })

    }, 15000)
  }

  update(deltaTime) {

    if (!this.mixer) return

    if (!this.isOpen) {

      const bar = document.querySelector('.progress')
      if (this.mixer.time < this.duration * (45/100)) {
        this.mixer.update(deltaTime * 25)
        bar.style.width = `${85 + (this.mixer.time / (this.duration * (45/100)) * 15)}%` 
      } else if (this.action.paused === false) {
        this.action.paused = true;
        const loader = document.querySelector('#loader')
        loader.style.display = 'none'
      } else {
        return
      }

    } else {
      this.action.paused = false;
      this.mixer.update(deltaTime)
    }
  }
}

export default Gate