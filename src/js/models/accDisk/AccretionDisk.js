import * as THREE from 'three'

class AccretionDisk {
  constructor(world) {
    this.world = world
    this.geometry = new THREE.CircleGeometry(2, 45)
    this.material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } )
    
    this.axesHelper = new THREE.AxesHelper( 5 );

    const vertices = this.geometry.attributes.position.array;
    const vertices_ = vertices.slice(3)

    for (let i = 0; i < vertices_.length / 3 / 2; i++) {
      const alpha = i * 3
      let leftVertice = {
        x: vertices_[alpha],
        y: vertices_[alpha+1],
        z: vertices_[alpha+2],
      }
      let rightVertice = {
        x: vertices_[vertices_.length - alpha - 3],
        y: vertices_[vertices_.length - alpha - 2],
        z: vertices_[vertices_.length - alpha - 1],
      }

      const deformation = Math.tan(Math.PI/180 * i / 4) * alpha; 

      const xDeformationStrength = 20;
      const yDeformationStrength = 100;
      const zDeformationStrength = 5; 

      vertices[alpha + 3] += deformation / xDeformationStrength
      vertices[alpha + 1 + 3] += deformation / yDeformationStrength
      vertices[alpha + 2 + 3] -= deformation / zDeformationStrength
      vertices[vertices_.length - alpha -3 + 3] += deformation / xDeformationStrength
      vertices[vertices_.length - alpha -2 + 3] -= deformation / yDeformationStrength
      vertices[vertices_.length - alpha -1 + 3] -= deformation / zDeformationStrength
    }

    this.geometry.attributes.position.array = vertices
    this.geometry.rotateY(Math.PI / 180 * -100)
    this.geometry.rotateZ(Math.PI / 180 * 90)
    
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.world.scene.add(this.mesh, this.axesHelper)
  }
}

export default AccretionDisk