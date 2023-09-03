varying vec2 vUv;
uniform sampler2D textureMap; 

void main() {
  float pi = 3.14159265359;

  vec3 color1 = vec3(0.9961, 1.0, 0.705882353);
  vec3 color2 = vec3(0.843137255, 0.733333333, 0.419607843);
  vec3 color3 = vec3(0.301960784, 0.219607843, 0.066666667);
  vec3 color4 = vec3(0.0);

  vec2 st = vUv - 0.5;
  float dist = distance(st, vec2(0.0));
  vec4 color = texture2D(textureMap, vUv);

  if (color.r > 0.009) {
    color = vec4(color1, 1.0);
  } else if (color.r > 0.006) {
    color = vec4(color2, 1.0);
  } else if (color.r > 0.005) {
    color = vec4(color3, 1.0);
  } else {
    color = vec4(color4, 0.0);
  }

  vec4 finalCol = color;

  gl_FragColor = finalCol;
}

// rgb(254,225,180)
//rgb(215,187,107)
//rgb(77,56,17)