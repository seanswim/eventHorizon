import * as THREE from 'three'

class Camera extends THREE.PerspectiveCamera {
  constructor(world) {
    super(
      60, 
      world.sizer.width / world.sizer.height,
      0.1,
      10000,
    )
    this.world = world
    this.position.set( 0, 5, 100 )
  }

  resize() {
    this.aspect = this.world.sizer.width / this.world.sizer.height
    this.updateProjectionMatrix()
  }

  shake() {

    let isShaking = false;
    let shakeMagnitude = 0.4; 

    const shakeScreen = () => {
      if (isShaking) {
        const dx = (Math.random() - 0.5) * shakeMagnitude;
        const dy = (Math.random() - 0.5) * shakeMagnitude;

        this.position.x += dx;
        this.position.y += dy;

        setTimeout(() => {
          this.position.set(0, 5, 100); 
          this.world.controller.velocityY = this.world.controller.velocityY * 1.2
          this.world.controller.velocityX = this.world.controller.velocityX * 1.2
          isShaking = false; 
        }, 150); 
      }
    }

    const startScreenShake = () => {
      if (!isShaking) {
        isShaking = true;
        const shakeInterval = setInterval(shakeScreen, 20); 
        setTimeout(() => {
          clearInterval(shakeInterval);
          isShaking = false;
          this.position.set(0, 5, 100);
        }, 1000);
      }
    }

    startScreenShake()
  }
}

export default Camera