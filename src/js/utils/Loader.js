import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'

class Loader {
  constructor() {
    this.gltfLoader = new GLTFLoader()
    this.cubeTextureLoader = new THREE.CubeTextureLoader()
    this.textureLoader = new THREE.TextureLoader()
    this.EXRLoader = new EXRLoader()
  }
}

const SLoader = new Loader()

export default SLoader