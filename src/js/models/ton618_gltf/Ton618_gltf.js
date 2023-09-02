import * as THREE from 'three'
import fragmentShader from './shaders/fragment.glsl?raw'
import vertexShader from './shaders/vertex.glsl?raw'

class Ton618_gltf {
  
  constructor(world) {
    this.world = world
    this.setupModel()
  }

  update() {
    if (!this.model) return
    this.model.rotation.set(0, this.world.clock.getElapsedTime()/10, 0)
  }

  loadGLTFModelAsync(modelPath) {

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureMap: { value: this.world.loader.textureLoader.setPath('src/assets/blackhole/textures/').load('Blackhole_ring_emissive.jpeg') }
      },
      fragmentShader: fragmentShader,
      vertexShader: vertexShader,
      transparent: true,
      depthWrite: false,
      name: "Blackhole_ring"
    });

    return new Promise((resolve, reject) => {
      this.world.loader.gltfLoader.load(modelPath, (gltf) => {
        const mesh = gltf.scene
        mesh.scale.set(4, 4, 4)

        mesh.traverse((child) => {
          
          if (child.isMesh) {

            const name = child.name

            //black sphere 1
            // if (name !== 'Blackhole_core_Blackhole_core_0') {
            //   child.visible = false
            // }
            //black sphere 2
            // if (name !== 'Blackhole_core001_Blackhole_core_0') {
            //   child.visible = false
            // }
            //black sphere 3
            // if (name !== 'Blackhole_skin_002_Blackhole_core_0') {
            //   child.visible = false
            // }
            //black sphere 4
            // if (name !== 'Blackhole_skin_004_Blackhole_core_0') {
            //   child.visible = false
            // }
            //black sphere 5
            // if (name !== 'Blackhole_skin_007_Blackhole_core_0') {
            //   child.visible = false
            // }
            //black sphere 6
            // if (name !== 'Blackhole_skin_011_Blackhole_core_0') {
            //   child.visible = false
            // } 

            //white sphere 1
            // if (name !== 'Blackhole_core002_Blackhole_ring2_0') {
            //   child.visible = false
            // }
            //white sphere 2
            // if (name !== 'Blackhole_skin_001_Blackhole_skin_0') {
            //   child.visible = false
            // }
            //white sphere 3
            // if (name !== 'Blackhole_skin_003_Blackhole_skin_0') {
            //   child.visible = false
            // }
            //white sphere 4
            // if (name !== 'Blackhole_skin_005_Blackhole_skin_0') {
            //   child.visible = false
            // }
            //white sphere 5
            // if (name !== 'Blackhole_skin_006_Blackhole_skin_inner_0') {
            //   child.visible = false
            // }
            //white sphere 6
            // if (name !== 'Blackhole_skin_008_Blackhole_skin_inner_0') {
            //   child.visible = false
            // } 
            //white sphere 7
            // if (name !== 'Blackhole_skin_009_Blackhole_skin_0') {
            //   child.visible = false
            // } 
            //white sphere 8
            // if (name !== 'Blackhole_skin_010_Blackhole_skin_0') {
            //   child.visible = false
            // } 
            //white sphere 9
            // if (name !== 'Blackhole_skin_012_Blackhole_skin_inner_0') {
            //   child.visible = false
            // } 
            //white sphere 10
            if (name === 'Blackhole_skin_013_Blackhole_ring2_0') {
              // child.material = shaderMaterial
            } 

            //Red accretion disk
            if (name === 'Blackhole_ring_Blackhole_ring_0') {
              child.scale.set(0.55, 0.55, 0.55)
              child.material = shaderMaterial
            }

          }
        })
      
        resolve(mesh);
      }, undefined, (error) => {
        reject(error);
      });
    });
  }

  async setupModel() {
    try {
      const gltf = await this.loadGLTFModelAsync('src/assets/blackhole/scene.gltf');

      this.model = gltf
    
      this.world.scene.add(this.model)
    } catch (error) {
      console.error('Error loading model or texture:', error);
    }
  }
  
}

export default Ton618_gltf