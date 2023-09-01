varying vec2 vUv;

void main() {

  vec2 st = gl_FragCoord.xy;
  float pct = distance(st,vec2(0.5));
  vec3 color = vec3(pct);

  gl_FragColor = vec4(color, 1.0);
}