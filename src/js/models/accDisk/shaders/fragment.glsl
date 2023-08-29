varying vec2 vUv;
uniform float uTime;
uniform sampler2D envMap;

void main() {
  // float pct = abs(sin(uTime));

  vec2 st = vUv -0.5;
  vec4 map = texture2D(envMap, vUv);

  vec4 color = map;

  gl_FragColor = color;
  // gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}