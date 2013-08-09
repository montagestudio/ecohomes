precision highp float;
varying vec3 v_normal;
varying vec2 v_texcoord0;
uniform lowp sampler2D u_diffuse;
uniform lowp vec4 u_filterColor;
uniform lowp float u_transparency;
void main(void) {
lowp vec4 color = vec4(0., 0., 0., 0.);
lowp vec4 diffuse = texture2D(u_diffuse, v_texcoord0);

color.xyz += diffuse.xyz;
color *= u_filterColor;
gl_FragColor = vec4(color.rgb * diffuse.a, diffuse.a * u_transparency);
}
