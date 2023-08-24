import * as THREE from 'three'

class AccretionDisk {
  constructor(world) {
    this.world = world

    const radius = 3
    const circlePoints = [];
    const segments = 100

    for (let i = 0; i <= segments; i++) {
      let phi = (i / segments) * Math.PI * 2
      
      let x = Math.cos(phi) * radius
      let y = Math.sin(phi) * radius
      let z = 0

      // if (phi < Math.PI) {
        let theta = (i / segments) * Math.PI /2
        x = radius * Math.sin(theta) * Math.cos(phi)
        y = radius * Math.sin(theta) * Math.sin(phi)
        z = radius * Math.cos(theta)
      // }
      circlePoints.push(new THREE.Vector3(x, y, z))
    }

    const curve = new THREE.CatmullRomCurve3(circlePoints);

    const points = curve.getPoints(500);


    this.geometry = new THREE.BufferGeometry().setFromPoints(points)
    this.material = new THREE.LineBasicMaterial( { color: 0xffff00, linewidth: 1, side: THREE.DoubleSide } )
    
    this.axesHelper = new THREE.AxesHelper( 5 );
    
    this.mesh = new THREE.Line(this.geometry, this.material)
    // this.mesh.rotateX( - Math.PI/180 * 70)
    // this.mesh.rotateY( Math.PI/180 * 90)
    this.world.scene.add(this.mesh, this.axesHelper)
  }
}

export default AccretionDisk