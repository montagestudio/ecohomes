precision highp float;
varying vec3 v_normal;
varying vec2 v_texcoord0;
uniform sampler2D u_diffuse;
varying vec2 v_texcoord1;
uniform sampler2D u_reflective;
uniform float u_transparency;
uniform vec4 u_filterColor;
void main(void) {
vec4 color = vec4(0., 0., 0., 0.);
vec4 diffuse = vec4(0., 0., 0., 1.);
diffuse = texture2D(u_diffuse, v_texcoord0);

vec4 reflective;
reflective = texture2D(u_reflective, v_texcoord1);
//diffuse.xyz += reflective.xyz;
color.xyz += diffuse.xyz;
color = vec4(color.rgb * diffuse.a, diffuse.a * u_transparency);
gl_FragColor = color;
}
