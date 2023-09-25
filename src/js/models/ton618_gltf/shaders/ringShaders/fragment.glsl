varying vec2 vUv;
uniform sampler2D textureMap; 
uniform float uTime;

void main() {
  float pi = 3.14159265359;

  vec4 color1 = vec4(0.9961, 1.0, 0.705882353, 1.0);

  vec2 st = vUv - 0.5;
  float time_ = uTime/10.0;
  float x = cos(time_) * (vUv.x - 0.5) + sin(time_) * (vUv.y - 0.5) + 0.5;
  float y = cos(time_) * (vUv.y - 0.5) - sin(time_) * (vUv.x - 0.5) + 0.5;
  vec2 vUv_ = vec2(x, y);

  float dist = distance(st, vec2(0.0));
  vec4 color = texture2D(textureMap, vUv_ * 1.5);

  float strength = smoothstep(0.0, 0.008, color.r);

  vec4 c = mix(color, color1, strength);
  color = c;

  // if (color.r < 0.3) {
  //   float strength = smoothstep(-0.04, 0.3,color.r);
  //   color = color + strength;
  // }

  // if (color.r < 0.0383) {
  //   color = vec4(1.0, 0.5, 0.1, 1.0);
  // }

  vec4 finalCol = color;

  gl_FragColor = finalCol;
}