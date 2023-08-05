import * as THREE from 'three'

class DimensionCurve {
  constructor() {
    const CubeTextureLoader = new THREE.CubeTextureLoader();
    const envMap = CubeTextureLoader
    .setPath('src/assets/')
    .load([
      'right.png',
      'left.png',
      'top.png',
      'bottom.png',
      'front.png',
      'back.png',
    ])

    this.geometry = new THREE.CircleGeometry(3, 32)
    this.material = new THREE.MeshBasicMaterial({ 
      envMap: envMap,
      reflectivity: 1.0,
      refractionRatio: 0.8
      // side: THREE.DoubleSide,
    }); 
    this.mesh = new THREE.Mesh( this.geometry, this.material );
  }
}

export default DimensionCurve