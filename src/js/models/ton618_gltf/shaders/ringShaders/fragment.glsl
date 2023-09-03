varying vec2 vUv;
uniform sampler2D textureMap; 

void main() {
  float pi = 3.14159265359;

  vec4 color1 = vec4(0.9961, 1.0, 0.705882353, 1.0);
  // vec3 color2 = vec3(0.843137255, 0.733333333, 0.419607843);
  // vec3 color3 = vec3(0.301960784, 0.219607843, 0.066666667);
  // vec3 color4 = vec3(0.0);

  vec2 st = vUv - 0.5;
  float dist = distance(st, vec2(0.0));
  vec4 color = texture2D(textureMap, vUv);

  float strength = smoothstep(0.0, 0.012, color.r);

  color = color1 * strength;

  vec4 finalCol = color;

  gl_FragColor = finalCol;
}