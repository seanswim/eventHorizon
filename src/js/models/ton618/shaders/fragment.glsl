uniform vec3 sphereCenter;
varying vec3 point;

void main() {    

  // float x = sin(gl_FragCoord.x / 20.0);
  // float y = sin(gl_FragCoord.y / 20.0);
  float y = gl_FragCoord.y;

  if (point.y < -0.5) {
    y = 0.0;
  }

  gl_FragColor = vec4(0.0, y, 0.0, 1.0);
}