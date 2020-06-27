module.exports=__NEXT_REGISTER_PAGE("/login",function(){return{page:webpackJsonp([8],{2010:function(e,t,n){e.exports=n(2011)},2011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(87),a=n(45),c=n.n(a),s=(n(4),n(36)),u=n.n(s),l=n(31),p=n.n(l),f=n(28),d=n.n(f),g=n(19),y=n.n(g),m=n(102),b=n.n(m),h=n(24),v=n(432),O=n.n(v),j=n(44),w=n(228),k=n(2012),_=n.n(k);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var I=function(e){console.log("authFailure",e)},T=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={loading:!1,queryParams:{params:null}},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=_.a.parse(location.search);this.setState({queryParams:{params:e.params}})}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state;n.loading,n.queryParams;return u.a.getItem("authResponse",function(e,n){if(!e&&null!==n)return c.a.replace("/home"),o.a.createElement(b.a,{className:t.progress,size:50})}).catch(function(){}),o.a.createElement("div",{className:t.root},o.a.createElement(d.a,{className:t.paper},o.a.createElement(y.a,{variant:"headline",gutterBottom:!0},"SARAL ",o.a.createElement("br",null)),o.a.createElement(y.a,{variant:"caption",gutterBottom:!0},"NavGurukul eLearning Platform"),o.a.createElement("br",null),o.a.createElement(p.a,{color:"primary",variant:"contained",component:O.a,clientId:"34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com",cookiePolicy:"single_host_origin",scope:"profile email",onSuccess:function(t){e.setState({loading:!0}),function(e){var t=e.tokenId;Object(j.d)("/users/auth/google",{idToken:t},{"Content-Type":"application/json"},"post").then(function(e){console.log("authResponse",e),Object(w.e)(e)})}(t)},onFailure:I},"Sign In"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(y.a,{variant:"body1",gutterBottom:!0},"Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."),o.a.createElement(y.a,{variant:"body1",gutterBottom:!0,style:{textAlign:"right"}},"~ Margaret Mead")))}}])&&E(n.prototype,r),i&&E(n,i),t}(),N=Object(i.a)(Object(h.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit},paper:{width:"25%",minWidth:"200px",margin:"auto",padding:2.5*e.spacing.unit},progress:{margin:2*e.spacing.unit}}})(T)),P=n(97);t.default=Object(i.a)(function(){return o.a.createElement("div",null,o.a.createElement(P.a,{searchHidden:!0}),o.a.createElement(N,null))})},2012:function(e,t,n){"use strict";const r=n(2013),o=n(2014),i=n(2015);function a(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function s(e,t){return t.decode?o(e):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){a((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const o="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map(t=>s(t,e)):null===n?n:s(n,e);r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,a]=i(t.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator"].includes(t.arrayFormat)?a:s(a,t),n(s(e,t),a,r)}for(const o of Object.keys(r)){const e=r[o];if("object"==typeof e&&null!==e)for(const n of Object.keys(e))e[n]=p(e[n],t);else r[o]=p(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=l,t.parse=f,t.stringify=((e,t)=>{if(!e)return"";a((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&(e=>null===e||void 0===e)(e[n])||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),"[",o,"]"].join("")]:[...n,[c(t,e),"[",c(o,e),"]=",c(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),"[]"].join("")]:[...n,[c(t,e),"[]=",c(r,e)].join("")];case"comma":case"separator":return t=>(n,r)=>null===r||void 0===r||0===r.length?n:0===n.length?[[c(t,e),"=",c(r,e)].join("")]:[[n,c(r,e)].join(e.arrayFormatSeparator)];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,c(t,e)]:[...n,[c(t,e),"=",c(r,e)].join("")]}}(t),o={};for(const a of Object.keys(e))n(a)||(o[a]=e[a]);const i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map(n=>{const o=e[n];return void 0===o?"":null===o?c(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):c(n,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")}),t.parseUrl=((e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=i(e,"#");return Object.assign({url:n.split("?")[0]||"",query:f(l(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:s(r,t)}:{})}),t.stringifyUrl=((e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=u(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),a=Object.assign(i,e.query);let s=t.stringify(a,n);s&&(s=`?${s}`);let l=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l=`#${c(e.fragmentIdentifier,n)}`),`${r}${s}${l}`})},2013:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},2014:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),c=0;c<i.length;c++){var s=i[c];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},2015:function(e,t,n){"use strict";e.exports=((e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]})},432:function(e,t,n){var r;r=function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(2),a=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signIn=n.signIn.bind(n),n.enableButton=n.enableButton.bind(n),n.state={disabled:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.clientId,r=t.cookiePolicy,o=t.loginHint,i=t.hostedDomain,a=t.autoLoad,c=t.isSignedIn,s=t.fetchBasicProfile,u=t.redirectUri,l=t.discoveryDocs,p=t.onFailure,f=t.uxMode,d=t.scope,g=t.accessType,y=t.responseType,m=t.jsSrc;!function(e,t,n,r){var o=e.getElementsByTagName(t)[0],i=o,a=o;(a=e.createElement(t)).id="google-login",a.src=m,i&&i.parentNode?i.parentNode.insertBefore(a,i):e.head.appendChild(a),a.onload=r}(document,"script",0,function(){var t={client_id:n,cookie_policy:r,login_hint:o,hosted_domain:i,fetch_basic_profile:s,discoveryDocs:l,ux_mode:f,redirect_uri:u,scope:d,access_type:g};"code"===y&&(t.access_type="offline"),window.gapi.load("auth2",function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){c&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())},function(e){return p(e)}),a&&e.signIn()})})}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){}}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),r=this.props,o=r.onSuccess,i=r.onRequest,a=r.onFailure,c=r.prompt,s=r.responseType,u={prompt:c};i(),"code"===s?n.grantOfflineAccess(u).then(function(e){return o(e)},function(e){return a(e)}):n.signIn(u).then(function(e){return t.handleSigninSuccess(e)},function(e){return a(e)})}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.type,r=e.style,i=e.className,a=e.disabledStyle,c=e.buttonText,s=e.children,u=e.render,l=this.state.disabled||this.props.disabled;if(u)return u({onClick:this.signIn});var p=r||(i&&!r?{}:{display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"}),f=l?Object.assign({},p,a):p;return o.a.createElement(t,{onClick:this.signIn,style:f,type:n,disabled:l,className:i},s||c)}}]),t}();c.defaultProps={type:"button",tag:"button",buttonText:"Login with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},onRequest:function(){},jsSrc:"https://apis.google.com/js/client:platform.js"},t.a=c},function(t,n){t.exports=e},function(e,t,n){"function"==typeof Symbol&&Symbol.iterator,e.exports=n(5)()},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n.d(t,"default",function(){return r.a}),n.d(t,"GoogleLogin",function(){return r.a});var o=n(9);n.d(t,"GoogleLogout",function(){return o.a})},function(e,t,n){"use strict";var r=n(6),o=n(7),i=n(8);e.exports=function(){function e(e,t,n,r,a,c){c!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,c,s){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,c,s],p=0;(u=new Error(t.replace(/%s/g,function(){return l[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(2),a=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={disabled:!0},n.signOut=n.signOut.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.jsSrc;!function(e,n,r,o){var i=e.getElementsByTagName(n)[0],a=i,c=i;(c=e.createElement(n)).id="google-login",c.src=t,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onload=o}(document,"script",0,function(){window.gapi.load("auth2",function(){e.setState({disabled:!1})})})}},{key:"signOut",value:function(){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(this.props.onLogoutSuccess)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.style,r=e.className,i=e.disabledStyle,a=e.buttonText,c=e.children,s=e.render;if(s)return s({onClick:this.signOut});var u=this.state.disabled||this.props.disabled,l=n||(r&&!n?{}:{display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"}),p=u?Object.assign({},l,i):l;return o.a.createElement(t,{onClick:this.signOut,style:p,disabled:u,className:r},c||a)}}]),t}();c.defaultProps={tag:"button",buttonText:"Logout",disabledStyle:{opacity:.6},jsSrc:"https://apis.google.com/js/client:platform.js"},t.a=c}])},e.exports=r(n(0))}},[2010]).default}});