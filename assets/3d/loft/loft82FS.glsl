precision highp float;
varying vec3 v_normal;
varying vec2 v_texcoord0;
uniform sampler2D u_diffuse;
varying vec3 v_reflect;
uniform samplerCube u_reflective;
uniform sampler2D u_specular;
uniform float u_transparency;
uniform vec4 u_filterColor;
void main(void) {
vec4 color = vec4(0., 0., 0., 0.);
vec4 diffuse = vec4(0., 0., 0., 1.);
vec4 reflective;
diffuse = texture2D(u_diffuse, v_texcoord0);
reflective = textureCube(u_reflective, v_reflect);
vec4 specular = texture2D(u_specular, v_texcoord0);
diffuse.xyz += (reflective.xyz * specular.xyz) * 0.4;
color.xyz += diffuse.xyz;
color = vec4(color.rgb * diffuse.a, diffuse.a * u_transparency);
color *= u_filterColor;
gl_FragColor = color;
}
