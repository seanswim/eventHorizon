import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

class Loader {
  constructor() {
    this.gltfLoader = new GLTFLoader()
    this.cubeTextureLoader = new THREE.CubeTextureLoader()
  }
}

const SLoader = new Loader()

export default SLoader