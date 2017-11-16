require("runtime/dependencies/gl-matrix");var GLSLProgram=require("runtime/glsl-program").GLSLProgram,ResourceManager=require("runtime/helpers/resource-manager").ResourceManager;exports.WebGLRenderer=Object.create(Object.prototype,{WORLD:{value:"WORLD",writable:!1},VIEW:{value:"VIEW",writable:!1},PROJECTION:{value:"PROJECTION",writable:!1},WORLDVIEW:{value:"WORLDVIEW",writable:!1},VIEWPROJECTION:{value:"VIEWPROJECTION",writable:!1},WORLDVIEWPROJECTION:{value:"WORLDVIEWPROJECTION",writable:!1},WORLDINVERSE:{value:"WORLDINVERSE",writable:!1},VIEWINVERSE:{value:"VIEWINVERSE",writable:!1},PROJECTIONINVERSE:{value:"PROJECTIONINVERSE",writable:!1},WORLDVIEWINVERSE:{value:"WORLDVIEWINVERSE",writable:!1},VIEWPROJECTIONINVERSE:{value:"VIEWPROJECTIONINVERSE",writable:!1},WORLDVIEWPROJECTIONINVERSE:{value:"WORLDVIEWPROJECTIONINVERSE",writable:!1},WORLDTRANSPOSE:{value:"WORLDTRANSPOSE",writable:!1},VIEWTRANSPOSE:{value:"VIEWTRANSPOSE",writable:!1},PROJECTIONTRANSPOSE:{value:"PROJECTIONTRANSPOSE",writable:!1},WORLDVIEWTRANSPOSE:{value:"WORLDVIEWTRANSPOSE",writable:!1},VIEWPROJECTIONTRANSPOSE:{value:"VIEWPROJECTIONTRANSPOSE",writable:!1},WORLDVIEWPROJECTIONTRANSPOSE:{value:"WORLDVIEWPROJECTIONTRANSPOSE",writable:!1},WORLDINVERSETRANSPOSE:{value:"WORLDINVERSETRANSPOSE",writable:!1},VIEWINVERSETRANSPOSE:{value:"VIEWINVERSETRANSPOSE",writable:!1},PROJECTIONINVERSETRANSPOSE:{value:"PROJECTIONINVERSETRANSPOSE",writable:!1},WORLDVIEWINVERSETRANSPOSE:{value:"WORLDVIEWINVERSETRANSPOSE",writable:!1},VIEWPROJECTIONINVERSETRANSPOSE:{value:"VIEWPROJECTIONINVERSETRANSPOSE",writable:!1},WORLDVIEWPROJECTIONINVERSETRANSPOSE:{value:"WORLDVIEWPROJECTIONINVERSETRANSPOSE",writable:!1},_bindedProgram:{value:null,writable:!0},_debugProgram:{value:null,writable:!0},_lambertProgram:{value:null,writable:!0},_resourceManager:{value:null,writable:!0},_webGLContext:{value:null,writable:!0},_projectionMatrix:{value:null,writable:!0},shininess:{value:200,writable:!0},light:{value:[0,0,-1],writable:!0},specularColor:{value:[1,1,1],writable:!0},_GLEnumFromString:{value:null,writable:!0},GLContextDidChange:{value:function(e){this._GLEnumFromString=[];var t=this.webGLContext;this._GLEnumFromString.POINTS=t.POINTS,this._GLEnumFromString.LINES=t.LINES,this._GLEnumFromString.LINE_LOOP=t.LINE_LOOP,this._GLEnumFromString.LINE_STRIP=t.LINE_STRIP,this._GLEnumFromString.TRIANGLES=t.TRIANGLES,this._GLEnumFromString.TRIANGLES=t.TRIANGLES,this._GLEnumFromString.TRIANGLE_STRIP=t.TRIANGLE_STRIP,this._GLEnumFromString.TRIANGLE_FAN=t.TRIANGLE_FAN,this._GLEnumFromString.ZERO=t.ZERO,this._GLEnumFromString.ONE=t.ONE,this._GLEnumFromString.SRC_COLOR=t.SRC_COLOR,this._GLEnumFromString.ONE_MINUS_SRC_COLOR=t.ONE_MINUS_SRC_COLOR,this._GLEnumFromString.SRC_ALPHA=t.SRC_ALPHA,this._GLEnumFromString.ONE_MINUS_SRC_ALPHA=t.ONE_MINUS_SRC_ALPHA,this._GLEnumFromString.DST_ALPHA=t.DST_ALPHA,this._GLEnumFromString.ONE_MINUS_DST_ALPHA=t.ONE_MINUS_DST_ALPHA,this._GLEnumFromString.DST_COLOR=t.DST_COLOR,this._GLEnumFromString.ONE_MINUS_DST_COLOR=t.ONE_MINUS_DST_COLOR,this._GLEnumFromString.SRC_ALPHA_SATURATE=t.SRC_ALPHA_SATURATE,this._GLEnumFromString.FUNC_ADD=t.FUNC_ADD,this._GLEnumFromString.BLEND_EQUATION=t.BLEND_EQUATION,this._GLEnumFromString.BLEND_EQUATION_RGB=t.BLEND_EQUATION_RGB,this._GLEnumFromString.BLEND_EQUATION_ALPHA=t.BLEND_EQUATION_ALPHA,this._GLEnumFromString.FUNC_SUBTRACT=t.FUNC_SUBTRACT,this._GLEnumFromString.FUNC_REVERSE_SUBTRACT=t.FUNC_REVERSE_SUBTRACT,this._GLEnumFromString.BLEND_DST_RGB=t.BLEND_DST_RGB,this._GLEnumFromString.BLEND_SRC_RGB=t.BLEND_SRC_RGB,this._GLEnumFromString.BLEND_DST_ALPHA=t.BLEND_DST_ALPHA,this._GLEnumFromString.BLEND_SRC_ALPHA=t.BLEND_SRC_ALPHA,this._GLEnumFromString.CONSTANT_COLOR=t.CONSTANT_COLOR,this._GLEnumFromString.ONE_MINUS_CONSTANT_COLOR=t.ONE_MINUS_CONSTANT_COLOR,this._GLEnumFromString.CONSTANT_ALPHA=t.CONSTANT_ALPHA,this._GLEnumFromString.ONE_MINUS_CONSTANT_ALPHA=t.ONE_MINUS_CONSTANT_ALPHA,this._GLEnumFromString.BLEND_COLOR=t.BLEND_COLOR,this._GLEnumFromString.ARRAY_BUFFER=t.ARRAY_BUFFER,this._GLEnumFromString.ELEMENT_ARRAY_BUFFER=t.ELEMENT_ARRAY_BUFFER,this._GLEnumFromString.ARRAY_BUFFER_BINDING=t.ARRAY_BUFFER_BINDING,this._GLEnumFromString.ELEMENT_ARRAY_BUFFER_BINDING=t.ELEMENT_ARRAY_BUFFER_BINDING,this._GLEnumFromString.STREAM_DRAW=t.STREAM_DRAW,this._GLEnumFromString.STATIC_DRAW=t.STATIC_DRAW,this._GLEnumFromString.DYNAMIC_DRAW=t.DYNAMIC_DRAW,this._GLEnumFromString.BUFFER_SIZE=t.BUFFER_SIZE,this._GLEnumFromString.BUFFER_USAGE=t.BUFFER_USAGE,this._GLEnumFromString.CURRENT_VERTEX_ATTRIB=t.CURRENT_VERTEX_ATTRIB,this._GLEnumFromString.FRONT=t.FRONT,this._GLEnumFromString.BACK=t.BACK,this._GLEnumFromString.FRONT_AND_BACK=t.FRONT_AND_BACK,this._GLEnumFromString.CULL_FACE=t.CULL_FACE,this._GLEnumFromString.BLEND=t.BLEND,this._GLEnumFromString.STENCIL_TEST=t.STENCIL_TEST,this._GLEnumFromString.DEPTH_TEST=t.DEPTH_TEST,this._GLEnumFromString.SCISSOR_TEST=t.SCISSOR_TEST,this._GLEnumFromString.POLYGON_OFFSET_FILL=t.POLYGON_OFFSET_FILL,this._GLEnumFromString.SAMPLE_ALPHA_TO_COVERAGE=t.SAMPLE_ALPHA_TO_COVERAGE,this._GLEnumFromString.SAMPLE_COVERAGE=t.SAMPLE_COVERAGE,this._GLEnumFromString.CW=t.CW,this._GLEnumFromString.CCW=t.CCW,this._GLEnumFromString.BYTE=t.BYTE,this._GLEnumFromString.UNSIGNED_BYTE=t.UNSIGNED_BYTE,this._GLEnumFromString.SHORT=t.SHORT,this._GLEnumFromString.UNSIGNED_SHORT=t.UNSIGNED_SHORT,this._GLEnumFromString.INT=t.INT,this._GLEnumFromString.UNSIGNED_INT=t.UNSIGNED_INT,this._GLEnumFromString.FLOAT=t.FLOAT,this._GLEnumFromString.DEPTH_COMPONENT=t.DEPTH_COMPONENT,this._GLEnumFromString.ALPHA=t.ALPHA,this._GLEnumFromString.RGB=t.RGB,this._GLEnumFromString.RGBA=t.RGBA,this._GLEnumFromString.LUMINANCE=t.LUMINANCE,this._GLEnumFromString.LUMINANCE_ALPHA=t.LUMINANCE_ALPHA,this._GLEnumFromString.UNSIGNED_SHORT_4_4_4_4=t.UNSIGNED_SHORT_4_4_4_4,this._GLEnumFromString.UNSIGNED_SHORT_5_5_5_1=t.UNSIGNED_SHORT_5_5_5_1,this._GLEnumFromString.UNSIGNED_SHORT_5_6_5=t.UNSIGNED_SHORT_5_6_5,this._GLEnumFromString.NEVER=t.NEVER,this._GLEnumFromString.LESS=t.LESS,this._GLEnumFromString.EQUAL=t.EQUAL,this._GLEnumFromString.LEQUAL=t.LEQUAL,this._GLEnumFromString.GREATER=t.GREATER,this._GLEnumFromString.NOTEQUAL=t.NOTEQUAL,this._GLEnumFromString.GEQUAL=t.GEQUAL,this._GLEnumFromString.ALWAYS=t.ALWAYS,this._GLEnumFromString.KEEP=t.KEEP,this._GLEnumFromString.REPLACE=t.REPLACE,this._GLEnumFromString.INCR=t.INCR,this._GLEnumFromString.DECR=t.DECR,this._GLEnumFromString.INVERT=t.INVERT,this._GLEnumFromString.INCR_WRAP=t.INCR_WRAP,this._GLEnumFromString.DECR_WRAP=t.DECR_WRAP,this._GLEnumFromString.NEAREST=t.NEAREST,this._GLEnumFromString.LINEAR=t.LINEAR,this._GLEnumFromString.NEAREST_MIPMAP_NEAREST=t.NEAREST_MIPMAP_NEAREST,this._GLEnumFromString.LINEAR_MIPMAP_NEAREST=t.LINEAR_MIPMAP_NEAREST,this._GLEnumFromString.NEAREST_MIPMAP_LINEAR=t.NEAREST_MIPMAP_LINEAR,this._GLEnumFromString.LINEAR_MIPMAP_LINEAR=t.LINEAR_MIPMAP_LINEAR,this._GLEnumFromString.TEXTURE_MAG_FILTER=t.TEXTURE_MAG_FILTER,this._GLEnumFromString.TEXTURE_MIN_FILTER=t.TEXTURE_MIN_FILTER,this._GLEnumFromString.TEXTURE_WRAP_S=t.TEXTURE_WRAP_S,this._GLEnumFromString.TEXTURE_WRAP_T=t.TEXTURE_WRAP_T,this._GLEnumFromString.TEXTURE_CUBE_MAP=t.TEXTURE_CUBE_MAP,this._GLEnumFromString.TEXTURE_CUBE_MAP_POSITIVE_X=t.TEXTURE_CUBE_MAP_POSITIVE_X,this._GLEnumFromString.TEXTURE_CUBE_MAP_NEGATIVE_X=t.TEXTURE_CUBE_MAP_NEGATIVE_X,this._GLEnumFromString.TEXTURE_CUBE_MAP_POSITIVE_Y=t.TEXTURE_CUBE_MAP_POSITIVE_Y,this._GLEnumFromString.TEXTURE_CUBE_MAP_NEGATIVE_Y=t.TEXTURE_CUBE_MAP_NEGATIVE_Y,this._GLEnumFromString.TEXTURE_CUBE_MAP_POSITIVE_Z=t.TEXTURE_CUBE_MAP_POSITIVE_Z,this._GLEnumFromString.TEXTURE_CUBE_MAP_NEGATIVE_Z=t.TEXTURE_CUBE_MAP_NEGATIVE_Z,this._GLEnumFromString.MAX_CUBE_MAP_TEXTURE_SIZE=t.MAX_CUBE_MAP_TEXTURE_SIZE,this._GLEnumFromString.REPEAT=t.REPEAT,this._GLEnumFromString.CLAMP_TO_EDGE=t.CLAMP_TO_EDGE,this._GLEnumFromString.MIRRORED_REPEAT=t.MIRRORED_REPEAT,this._GLEnumFromString.FLOAT_VEC2=t.FLOAT_VEC2,this._GLEnumFromString.FLOAT_VEC3=t.FLOAT_VEC3,this._GLEnumFromString.FLOAT_VEC4=t.FLOAT_VEC4,this._GLEnumFromString.INT_VEC2=t.INT_VEC2,this._GLEnumFromString.INT_VEC3=t.INT_VEC3,this._GLEnumFromString.INT_VEC4=t.INT_VEC4,this._GLEnumFromString.BOOL=t.BOOL,this._GLEnumFromString.BOOL_VEC2=t.BOOL_VEC2,this._GLEnumFromString.BOOL_VEC3=t.BOOL_VEC3,this._GLEnumFromString.BOOL_VEC3=t.BOOL_VEC3,this._GLEnumFromString.BOOL_VEC4=t.BOOL_VEC4,this._GLEnumFromString.FLOAT_VEC2=t.FLOAT_VEC2,this._GLEnumFromString.FLOAT_VEC3=t.FLOAT_VEC3,this._GLEnumFromString.FLOAT_VEC4=t.FLOAT_VEC4,this._GLEnumFromString.INT_VEC2=t.INT_VEC2,this._GLEnumFromString.INT_VEC3=t.INT_VEC3,this._GLEnumFromString.INT_VEC4=t.INT_VEC4,this._GLEnumFromString.FLOAT_MAT2=t.FLOAT_MAT2,this._GLEnumFromString.FLOAT_MAT3=t.FLOAT_MAT3,this._GLEnumFromString.FLOAT_MAT4=t.FLOAT_MAT4,this._GLEnumFromString.RGBA4=t.RGBA4,this._GLEnumFromString.RGB5_A1=t.RGB5_A1,this._GLEnumFromString.RGB565=t.RGB565,this._GLEnumFromString.DEPTH_COMPONENT16=t.DEPTH_COMPONENT16,this._GLEnumFromString.STENCIL_INDEX=t.STENCIL_INDEX,this._GLEnumFromString.STENCIL_INDEX8=t.STENCIL_INDEX8,this._GLEnumFromString.DEPTH_STENCIL=t.DEPTH_STENCIL}},initWithWebGLContext:{value:function(e){return this.webGLContext=e,this._states={},this}},bindedProgram:{get:function(){return this._bindedProgram},set:function(e){this._bindedProgram!==e&&this._webGLContext&&(this._bindedProgram=e,this._bindedProgram&&this._bindedProgram.use(this._webGLContext,!1))}},projectionMatrix:{get:function(){return this._projectionMatrix},set:function(e){this._projectionMatrix=e}},debugProgram:{get:function(){if(!this._debugProgram){this._debugProgram=Object.create(GLSLProgram);var e="precision highp float;attribute vec3 vert;uniform mat4 u_mvMatrix; uniform mat4 u_projMatrix; void main(void) { gl_Position = u_projMatrix * u_mvMatrix * vec4(vert,1.0); }",t="precision highp float;void main(void) { gl_FragColor = vec4(1.,0.,0.,1.); }";this._debugProgram.initWithShaders({"x-shader/x-vertex":e,"x-shader/x-fragment":t}),this._debugProgram.build(this.webGLContext)||console.log(this._debugProgram.errorLogs)}return this._debugProgram}},lambertProgram:{get:function(){if(!this._lambertProgram){this._lambertProgram=Object.create(GLSLProgram);var e="precision highp float;attribute vec3 vert;attribute vec3 normal; varying vec3 v_normal; uniform mat4 u_mvMatrix; uniform mat3 u_normalMatrix; uniform mat4 u_projMatrix; void main(void) { v_normal = normalize(u_normalMatrix * normal); gl_Position = u_projMatrix * u_mvMatrix * vec4(vert,1.0); }",t="precision highp float; uniform vec3 color; varying vec3 v_normal; void main(void) {  vec3 normal = normalize(v_normal);  float lambert = max(dot(normal,vec3(0.,0.,1.)), 0.); gl_FragColor = vec4(color.xyz *lambert, 1.); }";this._lambertProgram.initWithShaders({"x-shader/x-vertex":e,"x-shader/x-fragment":t}),this._lambertProgram.build(this.webGLContext)||console.log(this._lambertProgram.errorLogs)}return this._lambertProgram}},webGLContext:{get:function(){return this._webGLContext},set:function(e){this._webGLContext=e,this.GLContextDidChange()}},resourceManager:{get:function(){return this._resourceManager||(this._resourceManager=Object.create(ResourceManager),this._resourceManager.init()),this._resourceManager}},indicesDelegate:{value:{webGLContext:{value:null,writable:!0},handleError:function(e,t){console.log("ERROR:vertexAttributeBufferDelegate:"+e+" :"+t)},convert:function(e,t){var r=this.webGLContext,E=r.getParameter(r.ELEMENT_ARRAY_BUFFER_BINDING),i=r.createBuffer();return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i),r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,E),i},resourceAvailable:function(e,t){}}},setupCompressedMesh:{value:function(e,t,r){var E=e.primitives[0],i=this.webGLContext,n=i.getParameter(i.ELEMENT_ARRAY_BUFFER_BINDING),_=i.createBuffer();i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,_),i.bufferData(i.ELEMENT_ARRAY_BUFFER,r,i.STATIC_DRAW),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,n),_.count=r.length,this.resourceManager.setResource(E.indices.id,_),E.indices={id:E.indices.id,count:_.count};var a,o=t.length/8,R=new Float32Array(3*o),T=new Float32Array(3*o),s=new Float32Array(2*o);for(a=0;a<o;a++){var u=8*a;R[3*a+0]=t[u+0],R[3*a+1]=t[u+1],R[3*a+2]=t[u+2],T[3*a+0]=t[u+5],T[3*a+1]=t[u+6],T[3*a+2]=t[u+7],s[2*a+0]=t[u+3],s[2*a+1]=t[u+4]}n=i.getParameter(i.ARRAY_BUFFER_BINDING),_=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,_),i.bufferData(i.ARRAY_BUFFER,R,i.STATIC_DRAW),_.componentType=i.FLOAT,_.componentsPerAttribute=3,this.resourceManager.setResource(E.semantics.POSITION.id,_),E.semantics.POSITION={id:E.semantics.POSITION.id,count:o,byteStride:12},_=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,_),i.bufferData(i.ARRAY_BUFFER,T,i.STATIC_DRAW),_.componentType=i.FLOAT,_.componentsPerAttribute=3,this.resourceManager.setResource(E.semantics.NORMAL.id,_),E.semantics.NORMAL={id:E.semantics.NORMAL.id,count:o,byteStride:12},_=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,_),i.bufferData(i.ARRAY_BUFFER,s,i.STATIC_DRAW),_.componentType=i.FLOAT,_.componentsPerAttribute=2,this.resourceManager.setResource(E.semantics.TEXCOORD_0.id,_),E.semantics.TEXCOORD_0={id:E.semantics.TEXCOORD_0.id,count:o,byteStride:8},i.bindBuffer(i.ARRAY_BUFFER,n)}},setupCompressedMesh2:{value:function(e,t,r,E,i,n){var _=e.primitives[0],a=this.webGLContext,o=a.getParameter(a.ELEMENT_ARRAY_BUFFER_BINDING),R=a.createBuffer();a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,R),a.bufferData(a.ELEMENT_ARRAY_BUFFER,n,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,o),R.count=n.length,this.resourceManager.setResource(_.indices.id,R),_.indices={id:_.indices.id,count:R.count};var T=t;r=new Float32Array(r,0,3*T),E=new Float32Array(E,0,3*T),i=new Float32Array(i,0,2*T),o=a.getParameter(a.ARRAY_BUFFER_BINDING),R=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,R),a.bufferData(a.ARRAY_BUFFER,r,a.STATIC_DRAW),R.componentType=a.FLOAT,R.componentsPerAttribute=3,this.resourceManager.setResource(_.semantics.POSITION.id,R),_.semantics.POSITION={id:_.semantics.POSITION.id,count:T,byteStride:12},R=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,R),a.bufferData(a.ARRAY_BUFFER,E,a.STATIC_DRAW),R.componentType=a.FLOAT,R.componentsPerAttribute=3,this.resourceManager.setResource(_.semantics.NORMAL.id,R),_.semantics.NORMAL={id:_.semantics.NORMAL.id,count:T,byteStride:12},R=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,R),a.bufferData(a.ARRAY_BUFFER,i,a.STATIC_DRAW),R.componentType=a.FLOAT,R.componentsPerAttribute=2,this.resourceManager.setResource(_.semantics.TEXCOORD_0.id,R),_.semantics.TEXCOORD_0={id:_.semantics.TEXCOORD_0.id,count:T,byteStride:8},a.bindBuffer(a.ARRAY_BUFFER,o)}},vertexAttributeBufferDelegate:{value:{_componentTypeForGLType:function(e,t){switch(t){case"FLOAT":case"FLOAT_VEC2":case"FLOAT_VEC3":case"FLOAT_VEC4":return e.FLOAT;case"UNSIGNED_BYTE":return e.UNSIGNED_BYTE;case"UNSIGNED_SHORT":return e.UNSIGNED_SHORT;default:return null}},_componentsPerElementForGLType:function(e){switch(e){case"FLOAT":case"UNSIGNED_BYTE":case"UNSIGNED_SHORT":return 1;case"FLOAT_VEC2":return 2;case"FLOAT_VEC3":return 3;case"FLOAT_VEC4":return 4;default:return null}},webGLContext:{value:null,writable:!0},handleError:function(e,t){console.log("ERROR:vertexAttributeBufferDelegate:"+e+" :"+t)},convert:function(e,t){var r=t,E=this.webGLContext,i=E.getParameter(E.ARRAY_BUFFER_BINDING),n=E.createBuffer();return E.bindBuffer(E.ARRAY_BUFFER,n),E.bufferData(E.ARRAY_BUFFER,e,E.STATIC_DRAW),n.componentType=this._componentTypeForGLType(E,r.type),n.componentsPerAttribute=this._componentsPerElementForGLType(r.type),E.bindBuffer(E.ARRAY_BUFFER,i),n},resourceAvailable:function(e,t){}}},textureDelegate:{value:{webGLContext:{value:null,writable:!0},getGLFilter:function(e){var t=this.webGLContext,r=t.LINEAR;return"LINEAR"===e?r=t.LINEAR:"NEAREST"===e?r=t.NEAREST:"NEAREST_MIPMAP_NEAREST"===e?r=t.NEAREST_MIPMAP_NEAREST:"LINEAR_MIPMAP_NEAREST"===e?r=t.LINEAR_MIPMAP_NEAREST:"NEAREST_MIPMAP_LINEAR"===e?r=t.NEAREST_MIPMAP_LINEAR:"LINEAR_MIPMAP_LINEAR"===e&&(r=t.LINEAR_MIPMAP_LINEAR),r},getGLWrapMode:function(e){var t=this.webGLContext,r=t.REPEAT;return"REPEAT"===e?r=t.REPEAT:"CLAMP_TO_EDGE"===e?r=t.CLAMP_TO_EDGE:"MIRROR_REPEAT"===e&&(r=t.MIRROR_REPEAT),r},handleError:function(e,t){console.log("ERROR:textureDelegate:"+e+" :"+t)},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e|=e>>t;return e+1},isPowerOfTwo:function(e){return 0==(e&e-1)},installCubemapSide:function(e,t,r,E){var e=this.webGLContext;e.bindTexture(e.TEXTURE_CUBE_MAP,r),e.texImage2D(t,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,E),e.bindTexture(e.TEXTURE_CUBE_MAP,null)},createTextureFromImageAndSampler:function(e,t){var r=this.webGLContext,E=null,i=this.getGLFilter(t.minFilter),n=this.getGLFilter(t.magFilter),_=this.getGLWrapMode(t.wrapS),a=this.getGLWrapMode(t.wrapT),o=!1,R=i===r.NEAREST_MIPMAP_NEAREST||i===r.LINEAR_MIPMAP_NEAREST||i===r.NEAREST_MIPMAP_LINEAR||i===r.LINEAR_MIPMAP_LINEAR;if(R||_===r.REPEAT||a===r.REPEAT){var T=parseInt(e.width),s=parseInt(e.height);if(this.isPowerOfTwo(T)||(T=this.nextHighestPowerOfTwo(T),o=!0),this.isPowerOfTwo(s)||(s=this.nextHighestPowerOfTwo(s),o=!0),o){E=document.createElement("canvas"),E.width=T,E.height=s;var u=E.getContext("2d");u.drawImage(e,0,0,parseInt(E.width),parseInt(E.height)),E.id=e.id,e=E}}var A=r.createTexture();return r.bindTexture(r.TEXTURE_2D,A),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,_),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,i),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),R&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),A},convert:function(e,t){var r=this.webGLContext;if(e.sources){if(6===e.sources.length){var E=r.createTexture();return r.bindTexture(r.TEXTURE_CUBE_MAP,E),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),this.installCubemapSide(r,r.TEXTURE_CUBE_MAP_POSITIVE_X,E,t[0]),this.installCubemapSide(r,r.TEXTURE_CUBE_MAP_NEGATIVE_X,E,t[1]),this.installCubemapSide(r,r.TEXTURE_CUBE_MAP_POSITIVE_Y,E,t[2]),this.installCubemapSide(r,r.TEXTURE_CUBE_MAP_NEGATIVE_Y,E,t[3]),this.installCubemapSide(r,r.TEXTURE_CUBE_MAP_POSITIVE_Z,E,t[4]),this.installCubemapSide(r,r.TEXTURE_CUBE_MAP_NEGATIVE_Z,E,t[5]),E}}else if("video"==e.source.type){e.source.videoElement=t;var i=r.createTexture();return r.bindTexture(r.TEXTURE_2D,i),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e.source.videoElement),r.bindTexture(r.TEXTURE_2D,null),i}return this.createTextureFromImageAndSampler(t,e.sampler)},resourceAvailable:function(e,t){}}},_lastMaxEnabledArray:{value:0,writable:!0},_states:{value:null,writable:!0},setState:{value:function(e,t,r){var E=this.webGLContext;null!=this._states[e]&&1!=r&&this._states[e]===t||(this._states[e]=t,t?E.enable(e):E.disable(e))}},resetStates:{value:function(){var e=this.webGLContext;if(e&&this._lastMaxEnabledArray!==-1)for(var t=0;t<this._lastMaxEnabledArray;t++)e.disableVertexAttribArray(t);this._lastMaxEnabledArray=-1,this.bindedProgram=null,this.setState(e.BLEND,!1)}},renderPrimitive:{value:function(e,t,r,E){var i,n=!1,_=null,a=e.primitive,o=-1,R=this.webGLContext,T=this.bindedProgram,s=0;E||(E=a.material.parameters);var u=T.uniformSymbols;for(i=0;i<u.length;i++){var A=u[i],m=t.instanceProgram.uniforms[A];if(_=null,m=E[m],m&&null!=m.semantic){var L=m.semantic;_=L===this.PROJECTION?this.projectionMatrix:L===this.WORLDVIEW?e.nodeWrapper.worldViewMatrix:e.nodeWrapper.worldViewInverseTransposeMatrix}if(null==_&&null!=m)if(m.source){var S=e.nodeWrapper.scenePassRenderer._nodeWrappers[m.source.id];_=S.worldViewMatrix}else _=m.value;var N=null;if(null!=_){var l=T.getTypeForSymbol(A),F=l===R.SAMPLER_CUBE,I=l===R.SAMPLER_2D;if(F){N=_,this.textureDelegate.webGLContext=this.webGLContext;var N=this.resourceManager.getResource(N,this.textureDelegate,this.webGLContext);if(N){R.activeTexture(R.TEXTURE0+s),R.bindTexture(R.TEXTURE_CUBE_MAP,N);var g=T.getLocationForSymbol(A);"undefined"!=typeof g&&(T.setValueForSymbol(A,s),s++)}}else if(I){N=_,this.textureDelegate.webGLContext=this.webGLContext;var N=this.resourceManager.getResource(N,this.textureDelegate,this.webGLContext);if(N){R.activeTexture(R.TEXTURE0+s),R.bindTexture(R.TEXTURE_2D,N),m.value.source.videoElement&&m.value.source.timeStamp!=r&&(R.texImage2D(R.TEXTURE_2D,0,R.RGBA,R.RGBA,R.UNSIGNED_BYTE,m.value.source.videoElement),m.value.source.timeStamp=r);var g=T.getLocationForSymbol(A);"undefined"!=typeof g&&(T.setValueForSymbol(A,s),s++)}if(null==N)return}else T.setValueForSymbol(A,_)}}T.commit(R);var h=0;this.vertexAttributeBufferDelegate.webGLContext=this.webGLContext;var O=t.instanceProgram.attributes,P=T.attributeSymbols;for(i=0;i<P.length;i++){var A=P[i],m=O[A];m=E[m];var L=m.semantic,c=a.semantics[L];if(null!=c){var G=null;if(G=e.compressed?this.resourceManager._getResource(c.id):this.resourceManager.getResource(c,this.vertexAttributeBufferDelegate,c)){R.bindBuffer(R.ARRAY_BUFFER,G);var C=T.getLocationForSymbol(A);"undefined"!=typeof C&&(C>o&&(o=C),R.enableVertexAttribArray(C),R.vertexAttribPointer(C,G.componentsPerAttribute,G.componentType,!1,c.byteStride,0),n&&"POSITION"==L&&R.drawArrays(R.POINTS,0,c.count)),h++}else this._lastMaxEnabledArray=-1}}var d=h===P.length;if(!n){if(d)for(var i=o+1;i<this._lastMaxEnabledArray;i++)R.disableVertexAttribArray(i);var b=null;this.indicesDelegate.webGLContext=this.webGLContext,b=e.compressed?this.resourceManager._getResource(a.indices.id):this.resourceManager.getResource(a.indices,this.indicesDelegate,a),b&&d&&(R.bindBuffer(R.ELEMENT_ARRAY_BUFFER,b),R.drawElements(R.TRIANGLES,a.indices.count,R.UNSIGNED_SHORT,0))}return this._lastMaxEnabledArray=o,d}},programDelegate:{value:{handleError:function(e,t){console.log("ERROR:programDelegate:"+e+" :"+t)},convert:function(e,t){var r=t,E=Object.create(GLSLProgram);return E.initWithShaders(e),E.build(r)||(console.log(e),console.log(E.errorLogs)),E},resourceAvailable:function(e,t){}}},bindRenderTarget:{value:function(e){var t=this.webGLContext,r=!e.FBO;e.previousFBO=t.getParameter(t.FRAMEBUFFER_BINDING),e.FBO||(e.FBO=t.createFramebuffer(),r=!0),t.bindFramebuffer(t.FRAMEBUFFER,e.FBO);var E=e.extras,i=t.drawingBufferWidth!=e.width||t.drawingBufferHeight!=e.height,n=t.drawingBufferWidth,_=t.drawingBufferHeight;(r||i)&&e.attachments.forEach(function(e){if("COLOR_ATTACHMENT0"==e.semantic&&E.picking){var a=t.getParameter(t.TEXTURE_BINDING_2D);r&&(E.pickingTexture=t.createTexture()),i&&(t.bindTexture(t.TEXTURE_2D,E.pickingTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n,_,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)),r&&t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,E.pickingTexture,0),t.bindTexture(t.TEXTURE_2D,a)}if("DEPTH_ATTACHMENT"==e.semantic&&E.picking){var o=t.getParameter(t.RENDERBUFFER_BINDING);r&&(E.pickingRenderBuffer=t.createRenderbuffer()),i&&(t.bindRenderbuffer(t.RENDERBUFFER,E.pickingRenderBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,n,_)),r&&t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,E.pickingRenderBuffer),t.bindRenderbuffer(t.RENDERBUFFER,o)}},this),t.clearColor(0,0,0,1),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT)}},unbindRenderTarget:{value:function(e){var t=this.webGLContext;e.extras.picking&&(e.extras.pickedPixel||(e.extras.pickedPixel=new Uint8Array(4)),t.finish(),t.readPixels(e.extras.coords[0],e.extras.coords[1],1,1,t.RGBA,t.UNSIGNED_BYTE,e.extras.pickedPixel)),t.bindFramebuffer(t.FRAMEBUFFER,e.previousFBO);var r=!1;r&&e.attachments.forEach(function(t){"COLOR_ATTACHMENT0"===t.semantic&&e.extras.picking&&this.drawTexture(e.extras.pickingTexture)},this)}},renderPrimitivesWithPass:{value:function(e,t,r,E){var i=e.length,n=this.webGLContext;if(t.instanceProgram){var _=n,a=this.resourceManager.getResource(t.instanceProgram.program,this.programDelegate,_);if(a){var o=!1,R=!0,T=!0,s=!0,u=t.states,A=n.FUNC_ADD,m=n.SRC_ALPHA,L=n.ONE_MINUS_SRC_ALPHA,S="__PickingPass"===t.id;if(u&&(u.blendEnable===!0&&(o=!0),u.depthTestEnable===!1&&(R=!1),u.depthMask===!1&&(T=!1),u.cullFaceEnable===!1&&(s=!1),u.blendEquation)){var N=u.blendFunc;N&&(N.sfactor&&(m=this._GLEnumFromString[N.sfactor]),N.dfactor&&(L=this._GLEnumFromString[N.dfactor]))}if(this.setState(n.CULL_FACE,s),this.setState(n.BLEND,o),o&&(n.blendEquation(A),n.blendFunc(m,L)),this.bindedProgram=a,S)for(var l=0;l<i;l++){var F=e[l];if(!F.node.hidden){if(!F.pickingColor){var I=F.node.id;if(I){var g=t.extras.nodeIDToColor[I];g||(g=vec4.createFrom(Math.random(),Math.random(),Math.random(),1),t.extras.nodeIDToColor[I]=g),F.pickingColor=g}}this.bindedProgram.setValueForSymbol("u_pickingColor",F.pickingColor),this.renderPrimitive(F,t,E,r)}}else for(var l=0;l<i;l++){var F=e[l];if(!F.node.hidden){var h=1;r=F.primitive.material.parameters;var O=r.transparency;O&&null!=O.value&&(h*=O.value);var P=r.filterColor;P&&null!=P.value&&(h*=P.value[3]),h<1e-5||(h<1&&!o?(this.setState(n.BLEND,!0),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.renderPrimitive(F,t,E),this.setState(n.BLEND,!1)):this.renderPrimitive(F,t,E))}}}}}},drawTexture:{value:function(e){var t=this.webGLContext,r=t.isEnabled(t.DEPTH_TEST),E=t.isEnabled(t.CULL_FACE),i=t.isEnabled(t.BLEND);if(this.setState(t.DEPTH_TEST,!1),this.setState(t.CULL_FACE,!1),this.setState(t.BLEND,!1),!this.displayTexture){this.displayTexture={},this.displayTexture.program=Object.create(GLSLProgram);var n="precision highp float;attribute vec3 vert;attribute vec2 uv;uniform mat4 u_projMatrix; varying vec2 v_uv;void main(void) { v_uv = uv;gl_Position = u_projMatrix * vec4(vert,1.0); }",_="precision highp float;uniform sampler2D u_texture;varying vec2 v_uv; void main(void) {  vec4 color = texture2D(u_texture, v_uv);  gl_FragColor = color; }";this.displayTexture.program.initWithShaders({"x-shader/x-vertex":n,"x-shader/x-fragment":_}),this.displayTexture.program.build(t)||console.log(this.displayTexture.program.errorLogs);var a=[-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,-1,1,0,0,1,1,-1,0,1,0,1,1,0,1,1];this.displayTexture.vertexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.displayTexture.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW)}var o=this.displayTexture.program,R=this.displayTexture.vertexBuffer;t.bindBuffer(t.ARRAY_BUFFER,R);var T=mat4.ortho(-1,1,-1,1,0,1e3),s=o.getLocationForSymbol("vert"),u="undefined"!=typeof s;u&&(t.enableVertexAttribArray(s),t.vertexAttribPointer(s,3,t.FLOAT,!1,20,0));var A=o.getLocationForSymbol("uv"),m="undefined"!=typeof A;m&&(t.enableVertexAttribArray(A),t.vertexAttribPointer(A,2,t.FLOAT,!1,20,12));var L=t.getParameter(t.TEXTURE_BINDING_2D);t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,e),this.bindedProgram=o;var S=o.getLocationForSymbol("u_projMatrix");S&&o.setValueForSymbol("u_projMatrix",T);var N=o.getLocationForSymbol("u_texture");N&&o.setValueForSymbol("u_texture",0),o.commit(t),t.drawArrays(t.TRIANGLES,0,6),t.bindTexture(t.TEXTURE_2D,L),u&&t.disableVertexAttribArray(s),m&&t.disableVertexAttribArray(A),this.setState(t.DEPTH_TEST,r),this.setState(t.CULL_FACE,E),this.setState(t.BLEND,i)}}});