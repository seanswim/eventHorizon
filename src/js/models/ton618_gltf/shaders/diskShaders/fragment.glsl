varying vec2 vUv;
uniform sampler2D textureMap; 

void main() {
  float pi = 3.14159265359;
  vec2 st = vUv - 0.5;
  float dist = distance(st, vec2(0.0));
  vec4 color = texture2D(textureMap, vUv);

  if (dist < 0.32) {
    discard;
  }

  vec3 whiteColor = vec3(1.0);
  float strength = mix(color.rgb * 30.0, whiteColor, dist).r;

  vec3 finalCol = color.rgb * strength;
  float alpha = pow(dist* 2.02, 2.0);

  gl_FragColor = vec4(finalCol.rgb, 1.0 - alpha);
}