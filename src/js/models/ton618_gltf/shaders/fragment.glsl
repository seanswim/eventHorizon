varying vec2 vUv;
uniform float uTime;

void main() {
  // float pct = abs(sin(uTime));

  vec2 st = vUv -0.5;

  gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}