function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{TNO1:function(e,t,n){"use strict";n.r(t),n.d(t,"PopoverModuleNgFactory",(function(){return st}));var o=n("kZht"),r=function e(){_classCallCheck(this,e)},i=n("C9Ky"),l=n("3kIJ"),a=n("gxbW"),s=n("EKI7"),p=n("5uKI"),u=n("KTx3"),c=n("xVbo"),f="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,d=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(f&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}(),h=f&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),d))}};function m(e){return e&&"[object Function]"==={}.toString.call(e)}function b(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function v(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function g(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=b(e);return/(auto|scroll|overlay)/.test(t.overflow+t.overflowY+t.overflowX)?e:g(v(e))}function w(e){return e&&e.referenceNode?e.referenceNode:e}var y=f&&!(!window.MSInputMethodContext||!document.documentMode),x=f&&/MSIE 10/.test(navigator.userAgent);function O(e){return 11===e?y:10===e?x:y||x}function N(e){if(!e)return document.documentElement;for(var t=O(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===b(n,"position")?N(n):n:e?e.ownerDocument.documentElement:document.documentElement}function C(e){return null!==e.parentNode?C(e.parentNode):e}function E(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var l,a,s=i.commonAncestorContainer;if(e!==s&&t!==s||o.contains(r))return"BODY"===(a=(l=s).nodeName)||"HTML"!==a&&N(l.firstElementChild)!==l?N(s):s;var p=C(e);return p.host?E(p.host,t):E(e,C(t).host)}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=k(t,"top"),r=k(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function T(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+o+"Width"])}function A(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],O(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function H(e){var t=e.body,n=e.documentElement,o=O(10)&&getComputedStyle(n);return{height:A("Height",t,n,o),width:A("Width",t,n,o)}}var L=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},P=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),D=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function F(e){return j({},e,{right:e.left+e.width,bottom:e.top+e.height})}function M(e){var t={};try{if(O(10)){t=e.getBoundingClientRect();var n=k(e,"top"),o=k(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(p){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?H(e.ownerDocument):{},l=e.offsetWidth-(i.width||e.clientWidth||r.width),a=e.offsetHeight-(i.height||e.clientHeight||r.height);if(l||a){var s=b(e);l-=T(s,"x"),a-=T(s,"y"),r.width-=l,r.height-=a}return F(r)}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=O(10),r="HTML"===t.nodeName,i=M(e),l=M(t),a=g(e),s=b(t),p=parseFloat(s.borderTopWidth),u=parseFloat(s.borderLeftWidth);n&&r&&(l.top=Math.max(l.top,0),l.left=Math.max(l.left,0));var c=F({top:i.top-l.top-p,left:i.left-l.left-u,width:i.width,height:i.height});if(c.marginTop=0,c.marginLeft=0,!o&&r){var f=parseFloat(s.marginTop),d=parseFloat(s.marginLeft);c.top-=p-f,c.bottom-=p-f,c.left-=u-d,c.right-=u-d,c.marginTop=f,c.marginLeft=d}return(o&&!n?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(c=_(c,t)),c}function I(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=S(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),l=t?0:k(n),a=t?0:k(n,"left"),s={top:l-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:r,height:i};return F(s)}function B(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===b(e,"position"))return!0;var n=v(e);return!!n&&B(n)}function R(e){if(!e||!e.parentElement||O())return document.documentElement;for(var t=e.parentElement;t&&"none"===b(t,"transform");)t=t.parentElement;return t||document.documentElement}function V(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},l=r?R(e):E(e,w(t));if("viewport"===o)i=I(l,r);else{var a=void 0;"scrollParent"===o?"BODY"===(a=g(v(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===o?e.ownerDocument.documentElement:o;var s=S(a,l,r);if("HTML"!==a.nodeName||B(l))i=s;else{var p=H(e.ownerDocument),u=p.height,c=p.width;i.top+=s.top-s.marginTop,i.bottom=u+s.top,i.left+=s.left-s.marginLeft,i.right=c+s.left}}var f="number"==typeof(n=n||0);return i.left+=f?n:n.left||0,i.top+=f?n:n.top||0,i.right-=f?n:n.right||0,i.bottom-=f?n:n.bottom||0,i}function W(e){return e.width*e.height}function U(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var l=V(n,o,i,r),a={top:{width:l.width,height:t.top-l.top},right:{width:l.right-t.right,height:l.height},bottom:{width:l.width,height:l.bottom-t.bottom},left:{width:t.left-l.left,height:l.height}},s=Object.keys(a).map((function(e){return j({key:e},a[e],{area:W(a[e])})})).sort((function(e,t){return t.area-e.area})),p=s.filter((function(e){return e.width>=n.clientWidth&&e.height>=n.clientHeight})),u=p.length>0?p[0].key:s[0].key,c=e.split("-")[1];return u+(c?"-"+c:"")}function z(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=o?R(t):E(t,w(n));return S(n,r,o)}function Z(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function q(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function Y(e,t,n){n=n.split("-")[0];var o=Z(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),l=i?"top":"left",a=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[l]=t[l]+t[s]/2-o[s]/2,r[a]=n===a?t[a]-o[p]:t[q(a)],r}function K(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function G(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e.name===n}));var o=K(e,(function(e){return e.name===n}));return e.indexOf(o)}(e,0,n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&m(n)&&(t.offsets.popper=F(t.offsets.popper),t.offsets.reference=F(t.offsets.reference),t=n(t,e))})),t}function J(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=z(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=U(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=Y(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=G(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function X(e,t){return e.some((function(e){return e.enabled&&e.name===t}))}function Q(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function $(){return this.state.isDestroyed=!0,X(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Q("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ee(e){var t=e.ownerDocument;return t?t.defaultView:window}function te(){this.state.eventsEnabled||(this.state=function(e,t,n,o){n.updateBound=o,ee(e).addEventListener("resize",n.updateBound,{passive:!0});var r=g(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,l=i?t.ownerDocument.defaultView:t;l.addEventListener(n,o,{passive:!0}),i||e(g(l.parentNode),n,o,r),r.push(l)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}(this.reference,0,this.state,this.scheduleUpdate))}function ne(){var e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.state,ee(this.reference).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function oe(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function re(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&oe(t[n])&&(o="px"),e.style[n]=t[n]+o}))}var ie=f&&/Firefox/i.test(navigator.userAgent);function le(e,t,n){var o=K(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var ae=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],se=ae.slice(3);function pe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=se.indexOf(e),o=se.slice(n+1).concat(se.slice(0,n));return t?o.reverse():o}var ue={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,l=r.popper,a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",p=a?"width":"height",u={start:D({},s,i[s]),end:D({},s,i[s]+i[p]-l[p])};e.offsets.popper=j({},l,u[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.offsets,i=r.popper,l=r.reference,a=e.placement.split("-")[0];return n=oe(+o)?[+o,0]:function(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),l=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=l.indexOf(K(l,(function(e){return-1!==e.search(/,|\s/)})));l[a]&&-1===l[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==a?[l.slice(0,a).concat([l[a].split(s)[0]]),[l[a].split(s)[1]].concat(l.slice(a+1))]:[l];return(p=p.map((function(e,o){var r=(1===o?!i:i)?"height":"width",l=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,l=!0,e):l?(e[e.length-1]+=t,l=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],l=r[2];if(!i)return e;if(0===l.indexOf("%")){var a=void 0;switch(l){case"%p":a=n;break;case"%":case"%r":default:a=o}return F(a)[t]/100*i}return"vh"===l||"vw"===l?("vh"===l?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,r,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,o){oe(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}(o,i,l,a),"left"===a?(i.top+=n[0],i.left-=n[1]):"right"===a?(i.top+=n[0],i.left+=n[1]):"top"===a?(i.left+=n[0],i.top-=n[1]):"bottom"===a&&(i.left+=n[0],i.top+=n[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||N(e.instance.popper);e.instance.reference===n&&(n=N(n));var o=Q("transform"),r=e.instance.popper.style,i=r.top,l=r.left,a=r[o];r.top="",r.left="",r[o]="";var s=V(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=l,r[o]=a,t.boundaries=s;var p=e.offsets.popper,u={primary:function(e){var n=p[e];return p[e]<s[e]&&!t.escapeWithReference&&(n=Math.max(p[e],s[e])),D({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=p[n];return p[e]>s[e]&&!t.escapeWithReference&&(o=Math.min(p[n],s[e]-("right"===e?p.width:p.height))),D({},n,o)}};return t.priority.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";p=j({},p,u[t](e))})),e.offsets.popper=p,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,l=-1!==["top","bottom"].indexOf(r),a=l?"right":"bottom",s=l?"left":"top",p=l?"width":"height";return n[a]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[a])&&(e.offsets.popper[s]=i(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!le(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,l=i.popper,a=i.reference,s=-1!==["left","right"].indexOf(r),p=s?"height":"width",u=s?"Top":"Left",c=u.toLowerCase(),f=s?"left":"top",d=s?"bottom":"right",h=Z(o)[p];a[d]-h<l[c]&&(e.offsets.popper[c]-=l[c]-(a[d]-h)),a[c]+h>l[d]&&(e.offsets.popper[c]+=a[c]+h-l[d]),e.offsets.popper=F(e.offsets.popper);var m=a[c]+a[p]/2-h/2,v=b(e.instance.popper),g=parseFloat(v["margin"+u]),w=parseFloat(v["border"+u+"Width"]),y=m-e.offsets.popper[c]-g-w;return y=Math.max(Math.min(l[p]-h,y),0),e.arrowElement=o,e.offsets.arrow=(D(n={},c,Math.round(y)),D(n,f,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(X(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=V(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=q(o),i=e.placement.split("-")[1]||"",l=[];switch(t.behavior){case"flip":l=[o,r];break;case"clockwise":l=pe(o);break;case"counterclockwise":l=pe(o,!0);break;default:l=t.behavior}return l.forEach((function(a,s){if(o!==a||l.length===s+1)return e;o=e.placement.split("-")[0],r=q(o);var p=e.offsets.popper,u=e.offsets.reference,c=Math.floor,f="left"===o&&c(p.right)>c(u.left)||"right"===o&&c(p.left)<c(u.right)||"top"===o&&c(p.bottom)>c(u.top)||"bottom"===o&&c(p.top)<c(u.bottom),d=c(p.left)<c(n.left),h=c(p.right)>c(n.right),m=c(p.top)<c(n.top),b=c(p.bottom)>c(n.bottom),v="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&b,g=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(g&&"start"===i&&d||g&&"end"===i&&h||!g&&"start"===i&&m||!g&&"end"===i&&b)||!!t.flipVariationsByContent&&(g&&"start"===i&&h||g&&"end"===i&&d||!g&&"start"===i&&b||!g&&"end"===i&&m);(f||v||w)&&(e.flipped=!0,(f||v)&&(o=l[s+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=j({},e.offsets.popper,Y(e.instance.popper,e.offsets.reference,e.placement)),e=G(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,l=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[l?"left":"top"]=i[n]-(a?r[l?"width":"height"]:0),e.placement=q(t),e.offsets.popper=F(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!le(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=K(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=K(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var l,a,s=void 0!==i?i:t.gpuAcceleration,p=N(e.instance.popper),u=M(p),c={position:r.position},f=function(e,t){var n=e.offsets,o=n.popper,r=Math.round,i=Math.floor,l=function(e){return e},a=r(n.reference.width),s=r(o.width),p=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),c=t?p||u||a%2==s%2?r:i:l,f=t?r:l;return{left:c(a%2==1&&s%2==1&&!u&&t?o.left-1:o.left),top:f(o.top),bottom:f(o.bottom),right:c(o.right)}}(e,window.devicePixelRatio<2||!ie),d="bottom"===n?"top":"bottom",h="right"===o?"left":"right",m=Q("transform");if(a="bottom"===d?"HTML"===p.nodeName?-p.clientHeight+f.bottom:-u.height+f.bottom:f.top,l="right"===h?"HTML"===p.nodeName?-p.clientWidth+f.right:-u.width+f.right:f.left,s&&m)c[m]="translate3d("+l+"px, "+a+"px, 0)",c[d]=0,c[h]=0,c.willChange="transform";else{var b="right"===h?-1:1;c[d]=a*("bottom"===d?-1:1),c[h]=l*b,c.willChange=d+", "+h}return e.attributes=j({},{"x-placement":e.placement},e.attributes),e.styles=j({},c,e.styles),e.arrowStyles=j({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return re(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&re(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=z(r,t,e,n.positionFixed),l=U(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",l),re(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ce=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};L(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=h(this.update.bind(this)),this.options=j({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(j({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){o.options.modifiers[t]=j({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return j({name:e},o.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&m(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return P(e,[{key:"update",value:function(){return J.call(this)}},{key:"destroy",value:function(){return $.call(this)}},{key:"enableEventListeners",value:function(){return te.call(this)}},{key:"disableEventListeners",value:function(){return ne.call(this)}}]),e}();ce.Utils=("undefined"!=typeof window?window:global).PopperUtils,ce.placements=ae,ce.Defaults=ue;var fe,de,he=ce,me=["top","bottom","left","right","top-start","bottom-start","right-start","top-end","bottom-end","left-end","right-end","top-end","bottom-end","left-end","right-end","auto","auto-start","auto-end"],be=function(){var e=function e(){_classCallCheck(this,e)};return e.Top="top",e.Bottom="bottom",e.Left="left",e.Right="right",e.TopStart="top-start",e.BottomStart="bottom-start",e.LeftStart="left-start",e.RightStart="right-start",e.TopEnd="top-end",e.BottomEnd="bottom-end",e.LeftEnd="left-end",e.RightEnd="right-end",e.Auto="auto",e.AutoStart="auto-start",e.AutoEnd="auto-end",e}(),ve=function(){var e=function e(){_classCallCheck(this,e)};return e.CLICK="click",e}(),ge=function(){function e(t){_classCallCheck(this,e),this.CDR=t,this.displayType="none",this.opacity=0,this.ariaHidden="true",this.visibility=!1,this.id="",this.popoverOptions={placement:be.Bottom,trigger:ve.CLICK},this.onHidden=new o.o,this.onUpdate=new o.o,this.popoverHidden=new o.o,this.popoverShown=new o.o}return _createClass(e,[{key:"ngOnInit",value:function(){if(!he)throw new p.b("TsPopoverComponent: popper.js is not available to reference.")}},{key:"ngOnDestroy",value:function(){this.popoverInstance&&this.popoverInstance.destroy()}},{key:"hide",value:function(){this.popoverInstance&&this.popoverInstance.destroy(),this.toggleVisibility(!1),this.onHidden.emit()}},{key:"show",value:function(e){this.referenceObject&&(this.onUpdate.emit(this.popoverInstance),this.popoverInstance=new he(this.referenceObject,this.popoverViewRef.nativeElement,e),this.scheduleUpdate(),this.toggleVisibility(!0))}},{key:"scheduleUpdate",value:function(){this.popoverInstance&&this.popoverInstance.scheduleUpdate()}},{key:"toggleVisibility",value:function(e){e?(this.opacity=1,this.displayType="block",this.ariaHidden="false",this.visibility=!0):(this.opacity=0,this.displayType="none",this.ariaHidden="true",this.visibility=!1),this.CDR.destroyed||this.CDR.detectChanges()}}]),e}(),we=0,ye=((de=fe=function(){function e(t,n,r,i){var l=this;_classCallCheck(this,e),this.viewContainerRef=t,this.changeDetectorRef=n,this.elementRef=r,this.ngZone=i,this.uid="ts-popover-trigger-".concat(we++),this.isOpen=!1,this.defaultOpened=!1,this.hideOnBlur=!0,this._id=this.uid,this._position=be.Bottom,this.popoverOnCreate=new o.o,this.popoverOnShown=new o.o,this.popoverOnHidden=new o.o,this.popoverOnUpdate=new o.o,this.ngZone.runOutsideAngular((function(){Object(u.a)(l.elementRef.nativeElement,"keydown").pipe(Object(c.a)((function(e){return e.code===a.a.ESCAPE.code})),Object(s.j)(l)).subscribe((function(e){return l.ngZone.run((function(){l.hide(),e.stopPropagation(),e.preventDefault()}))}))}))}return _createClass(e,[{key:"onClick",value:function(e){!this.popover.popoverViewRef.nativeElement.contains(e)&&this.hideOnBlur&&this.hide()}},{key:"ngOnInit",value:function(){var e=this;this.popover.referenceObject=this.viewContainerRef.element.nativeElement,this.setContentProperties(this.popover),Object(u.a)(this.elementRef.nativeElement,"click").pipe(Object(s.j)(this)).subscribe((function(t){e.toggle(),t.stopPropagation(),t.preventDefault()}))}},{key:"ngAfterContentInit",value:function(){this.defaultOpened&&this.show()}},{key:"ngAfterContentChecked",value:function(){this.popover&&(this.popover.id=this.id)}},{key:"ngOnChanges",value:function(e){e.position&&(this.popover.popoverOptions.placement=e.position.currentValue)}},{key:"ngOnDestroy",value:function(){}},{key:"setContentProperties",value:function(e){var t=this;e.popoverOptions=Object.assign(Object.assign({},fe.defaultOptions),{placement:this.position}),e.onHidden.pipe(Object(s.j)(this)).subscribe((function(e){return t.popoverOnUpdate.emit(e)}))}},{key:"toggle",value:function(){this.isOpen?this.hide():this.show(),this.changeDetectorRef.detectChanges()}},{key:"hide",value:function(){this.isOpen=!1,this.popover.hide(),this.popoverOnHidden.emit(this.popover.popoverInstance)}},{key:"show",value:function(){this.isOpen=!0,this.popover.show(this.popover.popoverOptions),this.popoverOnShown.emit(this.popover.popoverInstance)}},{key:"id",set:function(e){this._id=e||this.uid},get:function(){return this._id}},{key:"position",set:function(e){if(me.indexOf(e)<0)throw new p.b('"'.concat(e,'" is not an allowed position value.'));this._position=e||be.Bottom},get:function(){return this._position}}]),e}()).defaultOptions={trigger:ve.CLICK,ariaRole:"popover",placement:be.Bottom},de),xe=function e(){_classCallCheck(this,e)},Oe=n("An66"),Ne=o.yb({encapsulation:2,styles:[".popover__container{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;padding:16px;position:absolute}.popover__container .popover__arrow{border-color:#fafafa;border-style:solid;height:0;position:absolute;width:0}.popover__container.c-popover--visible{display:block;opacity:1}.popover__container.c-popover--hidden{display:none;opacity:0}.popover__container[x-placement^=top]{margin-bottom:5px}.popover__container[x-placement^=top] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-width:5px 5px 0;bottom:-5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0}.popover__container[x-placement^=bottom]{margin-top:5px}.popover__container[x-placement^=bottom] .popover__arrow{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:0 5px 5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0;top:-5px}.popover__container[x-placement^=right]{margin-left:5px}.popover__container[x-placement^=right] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-top-color:transparent;border-width:5px 5px 5px 0;left:-5px;margin-left:0;margin-right:0;top:calc(50% - 5px)}.popover__container[x-placement^=left]{display:block;margin-right:5px}.popover__container[x-placement^=left] .popover__arrow{border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:5px 0 5px 5px;margin-left:0;margin-right:0;right:-5px;top:calc(50% - 5px)}"],data:{}});function Ce(e){return o.cc(2,[o.Vb(402653184,1,{popoverViewRef:0}),(e()(),o.Ab(1,0,[[1,0],["popoverViewRef",1]],null,5,"div",[["class","popover__container"]],[[1,"aria-hidden",0],[1,"role",0],[1,"aria-labelledby",0]],null,null,null,null)),o.zb(2,278528,null,0,Oe.k,[o.t,o.u,o.l,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Sb(3,{"c-popover--visible":0,"c-popover--hidden":1}),(e()(),o.Ab(4,0,null,null,1,"div",[["class","popover__inner"]],null,null,null,null,null)),o.Ob(null,0),(e()(),o.Ab(6,0,null,null,0,"div",[["class","popover__arrow"]],null,null,null,null,null))],(function(e,t){var n=t.component,o=e(t,3,0,n.visibility,!n.visibility);e(t,2,0,"popover__container",o)}),(function(e,t){var n=t.component;e(t,1,0,o.Hb(1,"",n.ariaHidden,""),o.Hb(1,"",n.popoverOptions.ariaRole,""),n.id)}))}var Ee=function(){function e(t){_classCallCheck(this,e),this.elem=t,this.myform=new l.i("bottom"),this.positions=["bottom","top","left","right"],this.myId="custom-id",this.example1select="right"}return _createClass(e,[{key:"popoverOnShown",value:function(e){console.log("popper on shown emitted event: ",e)}},{key:"popoverOnHidden",value:function(e){console.log("popover on hidden emitted event: ",e)}},{key:"change",value:function(){var e=this;setTimeout((function(){e.elem.nativeElement.querySelector(".ts-popover-trigger").dispatchEvent(new Event("click"))}),100)}}]),e}(),ke=o.yb({encapsulation:2,styles:[],data:{}});function _e(e){return o.cc(0,[(e()(),o.Ab(0,0,null,null,25,"div",[["class","demo-popover"],["style","max-width: 200px; height: 600px;"]],null,null,null,null,null)),(e()(),o.Ab(1,0,null,null,21,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(e,t,n){var r=!0,i=e.component;return"change"===t&&(r=!1!==o.Pb(e,2).onChange(n.target.value)&&r),"blur"===t&&(r=!1!==o.Pb(e,2).onTouched()&&r),"ngModelChange"===t&&(r=!1!==(i.example1select=n)&&r),"change"===t&&(r=!1!==i.change()&&r),r}),null,null)),o.zb(2,16384,null,0,l.C,[o.F,o.l],null,null),o.Ub(1024,null,l.q,(function(e){return[e]}),[l.C]),o.zb(4,671744,null,0,l.v,[[8,null],[8,null],[8,null],[6,l.q]],{model:[0,"model"]},{update:"ngModelChange"}),o.Ub(2048,null,l.r,null,[l.v]),o.zb(6,16384,null,0,l.s,[[4,l.r]],null,null),(e()(),o.Ab(7,0,null,null,3,"option",[["value","top"]],null,null,null,null,null)),o.zb(8,147456,null,0,l.w,[o.l,o.F,[2,l.C]],{value:[0,"value"]},null),o.zb(9,147456,null,0,l.H,[o.l,o.F,[8,null]],{value:[0,"value"]},null),(e()(),o.Zb(-1,null,["Top"])),(e()(),o.Ab(11,0,null,null,3,"option",[["value","right"]],null,null,null,null,null)),o.zb(12,147456,null,0,l.w,[o.l,o.F,[2,l.C]],{value:[0,"value"]},null),o.zb(13,147456,null,0,l.H,[o.l,o.F,[8,null]],{value:[0,"value"]},null),(e()(),o.Zb(-1,null,["Right"])),(e()(),o.Ab(15,0,null,null,3,"option",[["value","bottom"]],null,null,null,null,null)),o.zb(16,147456,null,0,l.w,[o.l,o.F,[2,l.C]],{value:[0,"value"]},null),o.zb(17,147456,null,0,l.H,[o.l,o.F,[8,null]],{value:[0,"value"]},null),(e()(),o.Zb(-1,null,["Bottom"])),(e()(),o.Ab(19,0,null,null,3,"option",[["value","left"]],null,null,null,null,null)),o.zb(20,147456,null,0,l.w,[o.l,o.F,[2,l.C]],{value:[0,"value"]},null),o.zb(21,147456,null,0,l.H,[o.l,o.F,[8,null]],{value:[0,"value"]},null),(e()(),o.Zb(-1,null,["Left"])),(e()(),o.Ab(23,16777216,null,null,2,"button",[["class","ts-popover-trigger"],["style","margin: 200px 250px;"],["tsPopoverTrigger","popper1"]],null,[[null,"popoverOnShown"],[null,"popoverOnHidden"],["document","click"]],(function(e,t,n){var r=!0,i=e.component;return"document:click"===t&&(r=!1!==o.Pb(e,24).onClick(n.target)&&r),"popoverOnShown"===t&&(r=!1!==i.popoverOnShown(n)&&r),"popoverOnHidden"===t&&(r=!1!==i.popoverOnHidden(n)&&r),r}),null,null)),o.zb(24,3883008,null,0,ye,[o.R,o.h,o.l,o.A],{defaultOpened:[0,"defaultOpened"],id:[1,"id"],popover:[2,"popover"],position:[3,"position"]},{popoverOnShown:"popoverOnShown",popoverOnHidden:"popoverOnHidden"}),(e()(),o.Zb(-1,null,["Click me!"])),(e()(),o.Ab(26,0,null,null,5,"ts-popover",[["class","ts-popover"]],null,null,null,Ce,Ne)),o.zb(27,245760,[["popper1",4]],0,ge,[o.h],null,null),(e()(),o.Ab(28,0,null,0,1,"h1",[],null,null,null,null,null)),(e()(),o.Zb(-1,null,["My Title"])),(e()(),o.Ab(30,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),o.Zb(-1,null,["Other random content."]))],(function(e,t){var n=t.component;e(t,4,0,n.example1select),e(t,8,0,"top"),e(t,9,0,"top"),e(t,12,0,"right"),e(t,13,0,"right"),e(t,16,0,"bottom"),e(t,17,0,"bottom"),e(t,20,0,"left"),e(t,21,0,"left"),e(t,24,0,!1,n.myId,o.Pb(t,27),n.example1select),e(t,27,0)}),(function(e,t){e(t,1,0,o.Pb(t,6).ngClassUntouched,o.Pb(t,6).ngClassTouched,o.Pb(t,6).ngClassPristine,o.Pb(t,6).ngClassDirty,o.Pb(t,6).ngClassValid,o.Pb(t,6).ngClassInvalid,o.Pb(t,6).ngClassPending)}))}var Te=o.wb("demo-popover",Ee,(function(e){return o.cc(0,[(e()(),o.Ab(0,0,null,null,1,"demo-popover",[],null,null,null,_e,ke)),o.zb(1,49152,null,0,Ee,[o.l],null,null)],null,null)}),{},{},[]),Ae=n("4UJ1"),He=n("20x/"),Le=n("76xf"),Pe=n("5GZx"),De=n("vE5V"),je=n("s2U3"),Fe=n("Hn30"),Me=n("hOI7"),Se=n("mcff"),Ie=n("807T"),Be=n("pTnX"),Re=n("O1jd"),Ve=n("cCIM"),We=n("hA27"),Ue=n("1VvW"),ze=function e(){_classCallCheck(this,e)},Ze=n("Sgnd"),qe=n("2ob+"),Ye=n("aLyt"),Ke=n("CBf0"),Ge=n("jL3B"),Je=n("qvIn"),Xe=n("ZtZA"),Qe=n("VbQ3"),$e=n("UDV5"),et=n("ye0E"),tt=n("ydE+"),nt=n("0Hrt"),ot=n("lAua"),rt=n("A1IQ"),it=n("hCLc"),lt=n("OEuM"),at=n("OXHR"),st=o.xb(r,[],(function(e){return o.Mb([o.Nb(512,o.j,o.bb,[[8,[i.a,Te,Ae.a,He.b,He.a]],[3,o.j],o.y]),o.Nb(4608,Oe.o,Oe.n,[o.v]),o.Nb(4608,l.F,l.F,[]),o.Nb(4608,l.h,l.h,[]),o.Nb(5120,o.b,(function(e,t){return[Le.j(e,t)]}),[Oe.d,o.C]),o.Nb(4608,Pe.c,Pe.c,[Pe.i,Pe.e,o.j,Pe.h,Pe.f,o.s,o.A,Oe.d,De.b,[2,Oe.i]]),o.Nb(5120,Pe.j,Pe.k,[Pe.c]),o.Nb(4608,je.c,je.c,[]),o.Nb(4608,Fe.a,Fe.a,[]),o.Nb(4608,Fe.b,Fe.b,[]),o.Nb(4608,Fe.d,Fe.d,[]),o.Nb(4608,Fe.e,Fe.e,[]),o.Nb(4608,Fe.f,Fe.f,[]),o.Nb(4608,Fe.g,Fe.g,[]),o.Nb(4608,Fe.h,Fe.h,[]),o.Nb(4608,Me.c,Me.c,[Fe.b]),o.Nb(5120,Se.b,Se.c,[Pe.c]),o.Nb(135680,Se.d,Se.d,[Pe.c,o.s,[2,Oe.i],[2,Se.a],Se.b,[3,Se.d],Pe.e]),o.Nb(4608,Ie.i,Ie.i,[]),o.Nb(5120,Ie.a,Ie.b,[Pe.c]),o.Nb(4608,Be.c,Be.m,[[2,Be.g],Re.a]),o.Nb(4608,Ve.b,Ve.b,[]),o.Nb(5120,We.a,We.b,[Pe.c]),o.Nb(1073742336,Oe.c,Oe.c,[]),o.Nb(1073742336,l.E,l.E,[]),o.Nb(1073742336,l.o,l.o,[]),o.Nb(1073742336,Ue.p,Ue.p,[[2,Ue.u],[2,Ue.l]]),o.Nb(1073742336,ze,ze,[]),o.Nb(1073742336,l.A,l.A,[]),o.Nb(1073742336,xe,xe,[]),o.Nb(1073742336,Le.c,Le.c,[]),o.Nb(1073742336,De.a,De.a,[]),o.Nb(1073742336,Ze.i,Ze.i,[]),o.Nb(1073742336,qe.b,qe.b,[]),o.Nb(1073742336,Ye.a,Ye.a,[]),o.Nb(1073742336,Ke.a,Ke.a,[Le.g,o.C]),o.Nb(1073742336,Be.i,Be.i,[Ge.j,[2,Be.e],[2,Oe.d]]),o.Nb(1073742336,Je.c,Je.c,[]),o.Nb(1073742336,Re.b,Re.b,[]),o.Nb(1073742336,Be.l,Be.l,[]),o.Nb(1073742336,Xe.f,Xe.f,[]),o.Nb(1073742336,Qe.c,Qe.c,[]),o.Nb(1073742336,Pe.g,Pe.g,[]),o.Nb(1073742336,je.d,je.d,[]),o.Nb(1073742336,$e.g,$e.g,[]),o.Nb(1073742336,$e.e,$e.e,[]),o.Nb(1073742336,et.b,et.b,[]),o.Nb(1073742336,tt.c,tt.c,[]),o.Nb(1073742336,nt.b,nt.b,[]),o.Nb(1073742336,ot.d,ot.d,[]),o.Nb(1073742336,Fe.c,Fe.c,[]),o.Nb(1073742336,Me.b,Me.b,[]),o.Nb(1073742336,rt.c,rt.c,[]),o.Nb(1073742336,it.c,it.c,[]),o.Nb(1073742336,Se.g,Se.g,[]),o.Nb(1073742336,Ge.a,Ge.a,[Ge.j]),o.Nb(1073742336,Ie.j,Ie.j,[]),o.Nb(1073742336,Be.n,Be.n,[]),o.Nb(1073742336,lt.d,lt.d,[]),o.Nb(1073742336,at.f,at.f,[]),o.Nb(1073742336,We.d,We.d,[]),o.Nb(1073742336,r,r,[]),o.Nb(1024,Ue.j,(function(){return[[{path:"",component:Ee}]]}),[]),o.Nb(256,Be.f,lt.a,[])])}))}}]);