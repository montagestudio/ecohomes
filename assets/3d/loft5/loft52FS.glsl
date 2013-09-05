precision highp float;
varying vec3 v_normal;
varying vec2 v_texcoord0;
uniform sampler2D u_diffuse;
uniform samplerCube u_reflective;
uniform sampler2D u_specular;
uniform float u_transparency;
uniform vec4 u_filterColor;
varying vec3 v_reflect;

void main(void) {
vec4 color = vec4(0., 0., 0., 0.);
vec4 diffuse = vec4(0., 0., 0., 1.);
vec4 reflective;
diffuse = texture2D(u_diffuse, v_texcoord0);
//reflective = textureCube(u_reflective, v_reflect);
vec4 specular = texture2D(u_specular, v_texcoord0);
//diffuse.xyz += (reflective.xyz * specular.xyz);
color.xyz += diffuse.xyz;
color = vec4(color.rgb * diffuse.a, diffuse.a * u_transparency);
gl_FragColor = color;
}
