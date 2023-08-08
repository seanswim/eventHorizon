import * as THREE from 'three'

class AccretionDisk {
  constructor(world) {
    this.world = world
    this.geometry = new THREE.BufferGeometry()

    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })

    const positions = [];
    const indices = [];
    const radius = 5;
    const segments = 32;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const deformation = Math.sin(theta * 4) * 2; // Adjust frequency and amplitude as needed

      positions.push(x, deformation, z);
    }

    for (let i = 0; i < segments; i++) {
      indices.push(i, i + 1, segments);
    }

    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    this.geometry.setIndex(indices);

    console.log(this.geometry)
    
    // for (let i = 0; i < this.geometry.vertices.length; i++) {
    //   const vertex = this.geometry.vertices[i];
    //   const angle = (vertex.x / radius) * Math.PI; // Calculate the angle
    //   const deformation = Math.sin(angle * frequency) * amplitude; // Calculate deformation
    //   vertex.z = deformation; // Apply deformation to the vertex z-coordinate
    // }
    
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.world.scene.add(this.mesh)
  }
}

export default AccretionDisk