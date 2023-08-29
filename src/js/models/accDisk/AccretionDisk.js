import * as THREE from 'three'
import { getRandomFloat } from '@/js/utils/Utils'
import FragmentShader from './shaders/fragment.glsl?raw'
import VertexShader from './shaders/vertex.glsl?raw'

class AccretionDisk {
  constructor(world) {
    this.world = world

    this.disks = []

    for (let i = 0; i < 100; i++) {
      this.disks.push(...this.generateDisk(
        getRandomFloat(1,1.3),
        -80
      ))
    }

    this.disks.forEach((disk) => {
      this.world.scene.add(disk)
    })
  }

  generateDisk = (radius, tiltAngle, segments = 500, bendingAngle = THREE.MathUtils.degToRad(90)) => {

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
        y_bottom = y * Math.cos(tiltAngle_bottom) - z * Math.sin(tiltAngle_bottom);
        z_bottom = y * Math.sin(tiltAngle_bottom) + z * Math.cos(tiltAngle_bottom);
      }

      circlePoints_top.push(new THREE.Vector3(x, y_top, z_top))
      circlePoints_bottom.push(new THREE.Vector3(x, y_bottom, z_bottom))
    }
    
    const curve_top = new THREE.CatmullRomCurve3(circlePoints_top);
    const curve_bottom = new THREE.CatmullRomCurve3(circlePoints_bottom);

    const geometry_top = new THREE.TubeGeometry(curve_top, segments, 0.001, 20, true)
    const geometry_bottom = new THREE.TubeGeometry(curve_bottom, segments, 0.001, 20, true)

    const material = new THREE.ShaderMaterial({
      vertexShader: VertexShader,
      fragmentShader: FragmentShader,
      uniforms: {
        uTime: { value: 0 }
      }
    })

    return [
      new THREE.Line(geometry_top, material), 
      new THREE.Line(geometry_bottom, material)
    ]
  }

  update() {
    this.disks.forEach((disk) => {
      disk.material.uniforms.uTime.value = this.world.clock.getElapsedTime();
    })
  }
}

export default AccretionDisk