varying vec2 vUv;
varying vec4 vPosition;

void main() 
{
  vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv;
  vPosition = mvPosition;
}