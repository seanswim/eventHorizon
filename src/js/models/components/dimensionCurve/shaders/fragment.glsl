varying vec3 vWorldPosition;
uniform sampler2D envMap;
uniform float uTime;
varying vec2 vUv;
  
void main() {

  vec2 st = vUv - 0.5;
  float dist = distance(st, vec2(0.0));
  float distortionStrength = distance(st, vec2(0.0)) * 5.0;

  float alpa = pow(smoothstep(distortionStrength+0.4, distortionStrength-0.4, 0.7) * 1.4, 15.0);

  float s = 
    sin(uTime/alpa)    
    ;
  float c = 
    cos(uTime/alpa)
    ;
  mat2 rotationMatrix = mat2(c, -s, s, c);
  vec2 rotatedOffset = rotationMatrix * st + 0.5;

  vec4 map = texture2D(envMap, rotatedOffset) * 4.0;
  vec4 color = map;

  gl_FragColor = color;
}