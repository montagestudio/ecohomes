montageDefine("b0111a3","core/environment",{dependencies:["./core"],factory:function(e,i,t){var o=e("./core").Montage,s="trident",n="msie",r="unknown",a="crios",l="fxios",u="cros",h="opr",c=i.Environment=o.specialize({constructor:{value:function(e){this.userAgent=e?e:global.navigator?global.navigator.userAgent:""}},_userAgent:{value:null},userAgent:{set:function(e){e=e.toLowerCase(),e!==this._userAgent&&(this._userAgent=e)},get:function(){return this._userAgent}},_device:{value:null},device:{get:function(){if(!this._device){var e=this.userAgent.match(/iphone|ipod|ipad/i);e&&e.length?this._device=e[0]:this._device=r}return this._device}},_supportsPointerEvents:{value:null},supportsPointerEvents:{get:function(){return"boolean"!=typeof this._supportsPointerEvents?this._supportsPointerEvents=!!(global.PointerEvent||global.MSPointerEvent&&global.navigator.msPointerEnabled):this._supportsPointerEvents}},_isIOSDevice:{value:null},isIOSDevice:{get:function(){return"boolean"!=typeof this._isIOSDevice?this._isIOSDevice=/iphone|ipad|ipod/.test(this.device):this._isIOSDevice}},_isAndroidDevice:{value:null},isAndroidDevice:{get:function(){return"boolean"!=typeof this._isAndroidDevice?this._isAndroidDevice=this.platformName===c.Platform.ANDROID:this._isAndroidDevice}},isCordova:{value:!!global.cordova},_isMobileDevice:{value:null},isMobileDevice:{get:function(){return"boolean"!=typeof this._isMobileDevice?this._isMobileDevice=/mobile/gi.test(this.userAgent):this._isMobileDevice}},isAndroidTablet:{get:function(){return this.isAndroidDevice&&!this.isMobileDevice}},_isStandalone:{value:null},isStandalone:{get:function(){return"boolean"!=typeof this._isStandalone?this._isStandalone=!!("standalone"in navigator&&navigator.standalone):this._isStandalone}},_platformName:{value:null},platformName:{get:function(){if("string"!=typeof this._platformName){var e=this.userAgent.match(/android|windows\sphone|windows|macintosh|linux|cros/gi);if(e&&e.length){var i=e[0];i===c.Platform.LINUX&&e[1]===c.Platform.ANDROID?i=c.Platform.ANDROID:i===u&&(i=c.Platform.CHROME_OS),this._platformName=i}else this.isIOSDevice?this._platformName=c.Platform.IOS:this._platformName=r}return this._platformName}},_browserVersion:{value:null},browserVersion:{get:function(){return"string"!=typeof this._browserVersion&&this._analyzeBrowser(),this._browserVersion}},_browserName:{value:null},browserName:{get:function(){return"string"!=typeof this._browserName&&this._analyzeBrowser(),this._browserName}},_isWKWebView:{value:null},isWKWebView:{get:function(){return"boolean"!=typeof this._isWKWebView?this._isWKWebView=this.isIOSDevice&&!!global.indexedDB:this._isWKWebView}},_isUIWebView:{value:null},isUIWebView:{get:function(){return"boolean"!=typeof this._isUIWebView?this._isUIWebView=!this.isWKWebView:this._isUIWebView}},_analyzeBrowser:{value:function(){var e,i=this.userAgent,t="",o="";e=i.indexOf(h)>-1?i.match(/(opr(?=\/))\/?\s*([\d+\.?]+)/i):i.indexOf(c.Browser.EDGE)>-1?i.match(/(edge(?=\/))\/?\s*([\d+\.?]+)/i):i.match(/(opera|chrome|safari|firefox|msie|trident|crios|fxios(?=\/))\/?\s*([\d+\.?]+)/i),e&&e.length>1&&(t=e[1],t===c.Browser.SAFARI?o=i.match(/version\/([\d+\.?]+)/i)[1]:t===c.Browser.CHROME||t===c.Browser.FIREFOX||t===l||t===n||t===c.Browser.OPERA||t===a||t===c.Browser.EDGE?o=e[2]:t===s&&(e=/\brv[ :]+(\d+)/g.exec(i),o=e&&e.length>1?e[1]:""),t===s||t===n?t=c.Browser.IE:t===h?t=c.Browser.OPERA:t===a?t=c.Browser.CHROME:t===l&&(t=c.Browser.FIREFOX)),this._browserName=t,this._browserVersion=o}}},{Device:{value:{IPHONE:"iphone",IPAD:"ipad",IPOD:"ipod"}},Platform:{value:{IOS:"ios",ANDROID:"android",WINDOWS_PHONE:"windows phone",MACINTOSH:"macintosh",WINDOWS:"windows",LINUX:"linux",CHROME_OS:"chrome os"}},Browser:{value:{SAFARI:"safari",FIREFOX:"firefox",CHROME:"chrome",OPERA:"opera",IE:"ie",EDGE:"edge"}}});i.currentEnvironment=new c}});