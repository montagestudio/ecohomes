precision highp float;
varying vec3 v_normal;
varying vec2 v_texcoord0;
varying vec3 v_reflect;
uniform sampler2D u_diffuse;
uniform sampler2D u_specular;
uniform samplerCube u_reflective;
uniform vec4 u_filterColor;
void main(void) {
vec4 color = vec4(0., 0., 0., 0.);
vec4 diffuse = vec4(0., 0., 0., 1.);
vec4 reflective;

vec4 specular = texture2D(u_specular, v_texcoord0);
diffuse = texture2D(u_diffuse, v_texcoord0);
reflective = textureCube(u_reflective, v_reflect);

diffuse.xyz += reflective.xyz * reflective.xyz * 0.2;
color.xyz += diffuse.xyz;
	color = vec4(color.rgb * diffuse.a, diffuse.a);
gl_FragColor = color;
}
