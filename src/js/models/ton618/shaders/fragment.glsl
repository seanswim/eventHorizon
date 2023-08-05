varying vec2 vUv;
varying vec4 vPosition;

void main() {    

  float dist = distance(vec2(vPosition.x, vPosition.y), vec2(0.0));

  vec3 color = vec3(0.0);

  color += smoothstep(0.67, 0.69, dist) * (1.0 - smoothstep(0.67, 0.69, dist));

  gl_FragColor = vec4(color, 1.0);
}