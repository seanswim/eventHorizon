uniform vec3 sphereCenter;
varying vec3 point;

void main() 
{
  point = position;
  vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}