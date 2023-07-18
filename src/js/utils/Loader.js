import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class Loader {
  constructor() {
    this.gltfLoader = new GLTFLoader()
  }
}

const SLoader = new Loader()

export default SLoader