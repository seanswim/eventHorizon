import * as THREE from 'three'
import { getRandomFloat } from '@/js/utils/Utils'

class AccretionDisk {
  constructor(world) {
    this.world = world

    this.disks = []

    for (let i = 0; i < 30; i++) {
      this.disks.push(...this.generateDisk(
        getRandomFloat(1,2),
        -80
      ))
    }

    this.disks.forEach((disk) => {
      this.world.scene.add(disk)
    })
  }

  generateDisk = (radius, tiltAngle, segments = 100, bendingAngle = THREE.MathUtils.degToRad(90)) => {
    const tiltAngle_top = THREE.MathUtils.degToRad(tiltAngle)
    const tiltAngle_bottom = THREE.MathUtils.degToRad(180 - Math.abs(tiltAngle))
    const circlePoints_top = [];
    const circlePoints_bottom = [];
    for (let i = 0; i <= segments; i++) {
      const phi = bendingAngle; 
      const theta = (i / segments) * Math.PI * 2;

      let x = radius * Math.sin(phi) * Math.cos(theta);
      let y = radius * Math.sin(phi) * Math.sin(theta);
      let z = radius * Math.cos(phi);

      let y_top = y
      let z_top = z
      let y_bottom = y
      let z_bottom = z
      if (theta > Math.PI) {
        y_top = y * Math.cos(tiltAngle_top) - z * Math.sin(tiltAngle_top);
        z_top = y * Math.sin(tiltAngle_top) + z * Math.cos(tiltAngle_top);
      }
      if (theta < Math.PI) {
        y_top = y * Math.cos(tiltAngle_bottom) - z * Math.sin(tiltAngle_bottom);
        z_top = y * Math.sin(tiltAngle_bottom) + z * Math.cos(tiltAngle_bottom);
      }

      circlePoints_top.push(new THREE.Vector3(x, y_top, z_top))
      circlePoints_bottom.push(new THREE.Vector3(x, y_bottom, z_bottom))
    }
    const curve_top = new THREE.CatmullRomCurve3(circlePoints_top);
    const curve_bottom = new THREE.CatmullRomCurve3(circlePoints_bottom);
    const points_top = curve_top.getPoints(500);
    const points_bottom = curve_bottom.getPoints(500);

    const geometry_top = new THREE.BufferGeometry().setFromPoints(points_top)
    const geometry_bottom = new THREE.BufferGeometry().setFromPoints(points_bottom)
    const material = new THREE.LineBasicMaterial( { color: 0xfffffff, linewidth: 5, side: THREE.DoubleSide } )
    return [new THREE.Line(geometry_top, material), new THREE.Line(geometry_bottom, material)]
  }
}

export default AccretionDisk