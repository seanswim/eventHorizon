import * as THREE from 'three'

class AccretionDisk {
  constructor(world) {
    this.world = world

    const radius = 2
    const circlePoints = [];
    const segments = 100
    const bendingAngle = THREE.MathUtils.degToRad(90); // Convert 30 degrees to radians
    const tiltAngle = THREE.MathUtils.degToRad(45); // Convert 45 degrees to radians

    for (let i = 0; i <= segments; i++) {
      const phi = bendingAngle; // Fixed bending angle
      // let phi = (i / segments) * Math.PI * 2
      const theta = (i / segments) * Math.PI * 2;

      // let x = Math.cos(phi) * radius
      // let y = Math.sin(phi) * radius
      // let z = 0

      // if (phi > Math.PI) {
        // let theta = Math.PI/180 * (-((i/segments)*(i/segments-50)*(i/segments-100))*8/(50 * 100) + 80)
        // let theta = Math.PI/180 * (-((i/segments)*(i/segments-50)*(i/segments-100))*8/(50 * 100) + 80)
        // let theta = Math.PI/180 * ((-i * (i-100))/100 + 80)

        // x = radius * Math.sin(theta) * Math.cos(phi)
        // y = radius * Math.sin(theta) * Math.sin(phi)
        // z = radius * Math.cos(theta)
      // }

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const rotatedY = y * Math.cos(tiltAngle) - z * Math.sin(tiltAngle);
      const rotatedZ = y * Math.sin(tiltAngle) + z * Math.cos(tiltAngle);


      circlePoints.push(new THREE.Vector3(x, rotatedY, rotatedZ))
    }

    const curve = new THREE.CatmullRomCurve3(circlePoints);

    const points = curve.getPoints(500);


    this.geometry = new THREE.BufferGeometry().setFromPoints(points)
    this.material = new THREE.LineBasicMaterial( { color: 0xffff00, linewidth: 10, side: THREE.DoubleSide } )
    
    this.axesHelper = new THREE.AxesHelper( 5 );
    
    this.mesh = new THREE.Line(this.geometry, this.material)
    // this.mesh.rotateX( - Math.PI/180 * 50)
    this.world.scene.add(this.mesh, this.axesHelper)
  }
}

export default AccretionDisk