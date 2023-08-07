varying vec3 vWorldPosition;
uniform sampler2D envMap;
uniform float uTime;
varying vec2 vUv;
  
void main() {

  vec2 st = vUv - 0.5;
  float dist = distance(st, vec2(0.0));
  float distortionStrength = distance(st, vec2(0.0)) * 5.0;

  float s = sin(uTime) * sin(distortionStrength);
  float c = cos(uTime);
  mat2 rotationMatrix = mat2(c, -s, s, c);
  vec2 rotatedOffset = rotationMatrix * st + 0.5;

  // rotatedOffset.x += sin(uTime);
  // rotatedOffset.y += cos(uTime);

  vec4 map = texture2D(envMap, rotatedOffset) * 1.0;

  if (dist > 0.4) {
    map = texture2D(envMap, vUv);
  }

  vec4 color = map;

  // gl_FragColor = vec4(vec3(distortionStrength), 1.0);
  gl_FragColor = color;
}