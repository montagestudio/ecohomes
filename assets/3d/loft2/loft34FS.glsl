precision highp float;
varying vec3 v_normal;
uniform float u_transparency;
uniform vec4 u_filterColor;
void main(void) {
vec4 color = vec4(0., 0., 0., 0.);
vec4 diffuse = vec4(0., 0., 0., 1.);
color.xyz += diffuse.xyz;
color = vec4(color.rgb * diffuse.a, diffuse.a * u_transparency);
color *= u_filterColor;
gl_FragColor = color;
}
