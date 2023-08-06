varying vec3 vWorldPosition;
uniform samplerCube envMap;
uniform float uTime;
  
void main() {
  vec3 worldNormal = normalize(vWorldPosition.xyz);
  vec3 reflection = reflect(normalize(cameraPosition - vWorldPosition), worldNormal);

  vec2 st = vec2(reflection.x, reflection.y);

  float pct = distance(st, vec2(0.0));

  float s = sin(uTime/4.0);
  float c = cos(uTime/4.0);
  mat2 rotationMatrix = mat2(c, -s, s, c);
  vec2 rotatedOffset = rotationMatrix * st;

  vec3 color = vec3(0.0);

  float distortionStrength = ( 1.0 - pow(pct * 2.0, 2.0));

  // rotatedOffset.x = distortionStrength;
  // rotatedOffset.y = distortionStrength;

  color = textureCube(envMap, vec3(rotatedOffset, 1.0)).xyz;


  gl_FragColor = vec4(color, 1.0);
}