precision highp float;
varying vec3 v_normal;
uniform vec3 u_light0Color;
varying vec2 v_texcoord0;
uniform sampler2D u_ambient;
uniform sampler2D u_diffuse;
uniform vec4 u_emission;
uniform vec4 u_specular;
uniform vec4 u_filterColor;
uniform float u_transparency;
void main(void) {
vec3 normal = normalize(v_normal);
vec4 color = vec4(0., 0., 0., 0.);
vec4 diffuse = vec4(0., 0., 0., 1.);
vec3 diffuseLight = vec3(0., 0., 0.);
diffuse = texture2D(u_diffuse, v_texcoord0);
color.xyz += diffuse.xyz;
gl_FragColor = vec4(color.rgb * diffuse.a, diffuse.a * u_transparency);
}
