import * as THREE from 'three'
import { getRandomFloat } from '@/js/utils/Utils'

class AccretionDisk {
  constructor(world) {
    this.world = world

    this.disks = []

    for (let i = 0; i < 30; i++) {
      this.disks.push(this.generateDisk(
        getRandomFloat(1, 2),
        5
      ))
    }

    this.disks.forEach((disk) => {
      this.world.scene.add(disk)
    })
  }

  generateDisk = (radius, tiltAngle, segments = 100, bendingAngle = THREE.MathUtils.degToRad(90)) => {
    const circlePoints = [];
    for (let i = 0; i <= segments; i++) {
      const phi = bendingAngle; 
      const theta = (i / segments) * Math.PI * 2;

      let x = radius * Math.sin(phi) * Math.cos(theta);
      let y = radius * Math.sin(phi) * Math.sin(theta);
      let z = radius * Math.cos(phi);

      let y_ = y
      let z_ = z
      if (theta > Math.PI) {
        y_ = y * Math.cos(tiltAngle) - z * Math.sin(tiltAngle);
        z_ = y * Math.sin(tiltAngle) + z * Math.cos(tiltAngle);
      }

      circlePoints.push(new THREE.Vector3(x, y_, z_))
    }
    const curve = new THREE.CatmullRomCurve3(circlePoints);
    const points = curve.getPoints(500);

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial( { color: 0xfffffff, linewidth: 5, side: THREE.DoubleSide } )
    return new THREE.Line(geometry, material)
  }
}

export default AccretionDisk