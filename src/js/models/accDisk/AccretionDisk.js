import * as THREE from 'three'

class AccretionDisk {
  constructor(world) {
    this.world = world
    this.geometry = new THREE.CircleGeometry(3, 18)
    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    
    this.axesHelper = new THREE.AxesHelper( 5 );

    const vertices = this.geometry.attributes.position.array;

    for (let i = 3; i < vertices.length; i=i+3) {
      let x = vertices[i]
      let y = vertices[i+1]
      let z = vertices[i+2]    

      const deformation = Math.tan(Math.PI/180 * i) * i; 
      // vertices[i] += deformation
      vertices[i+2] -= deformation/30
      // vertices[i+2] += Math.random()
    }

    console.log(vertices)

    this.geometry.attributes.position.array = vertices
    this.geometry.rotateX(Math.PI / 180 * 90)
    this.geometry.rotateY(Math.PI / 180 * -90)
    
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.world.scene.add(this.mesh, this.axesHelper)
  }
}

export default AccretionDisk