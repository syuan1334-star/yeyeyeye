function ud(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ua={exports:{}},yl={},Da={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),dd=Symbol.for("react.portal"),fd=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),hd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),xd=Symbol.for("react.memo"),wd=Symbol.for("react.lazy"),ps=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var Aa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fa=Object.assign,Ba={};function hn(e,t,n){this.props=e,this.context=t,this.refs=Ba,this.updater=n||Aa}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $a(){}$a.prototype=hn.prototype;function po(e,t,n){this.props=e,this.context=t,this.refs=Ba,this.updater=n||Aa}var mo=po.prototype=new $a;mo.constructor=po;Fa(mo,hn.prototype);mo.isPureReactComponent=!0;var ms=Array.isArray,Va=Object.prototype.hasOwnProperty,ho={current:null},Ha={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Va.call(t,r)&&!Ha.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:sr,type:e,key:i,ref:o,props:l,_owner:ho.current}}function Sd(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hs=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):t.toString(36)}function Or(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case dd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Al(o,0):r,ms(l)?(n="",e!=null&&(n=e.replace(hs,"$&/")+"/"),Or(l,t,n,"",function(c){return c})):l!=null&&(vo(l)&&(l=Sd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(hs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ms(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Al(i,s);o+=Or(i,t,n,u,l)}else if(u=kd(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Al(i,s++),o+=Or(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function gr(e,t,n){if(e==null)return e;var r=[],l=0;return Or(e,r,"","",function(i){return t.call(n,i,l++)}),r}function jd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Mr={transition:null},Ed={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ho};function Qa(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=hn;I.Fragment=fd;I.Profiler=md;I.PureComponent=po;I.StrictMode=pd;I.Suspense=yd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;I.act=Qa;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fa({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ho.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Va.call(t,u)&&!Ha.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:sr,type:e.type,key:l,ref:i,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hd,_context:e},e.Consumer=e};I.createElement=Wa;I.createFactory=function(e){var t=Wa.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:gd,render:e}};I.isValidElement=vo;I.lazy=function(e){return{$$typeof:wd,_payload:{_status:-1,_result:e},_init:jd}};I.memo=function(e,t){return{$$typeof:xd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};I.unstable_act=Qa;I.useCallback=function(e,t){return ce.current.useCallback(e,t)};I.useContext=function(e){return ce.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};I.useEffect=function(e,t){return ce.current.useEffect(e,t)};I.useId=function(){return ce.current.useId()};I.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ce.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};I.useRef=function(e){return ce.current.useRef(e)};I.useState=function(e){return ce.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ce.current.useTransition()};I.version="18.3.1";Da.exports=I;var k=Da.exports;const Za=cd(k),Cd=ud({__proto__:null,default:Za},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=k,_d=Symbol.for("react.element"),Td=Symbol.for("react.fragment"),zd=Object.prototype.hasOwnProperty,Ld=Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rd={key:!0,ref:!0,__self:!0,__source:!0};function Ka(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)zd.call(t,r)&&!Rd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:_d,type:e,key:i,ref:o,props:l,_owner:Ld.current}}yl.Fragment=Td;yl.jsx=Ka;yl.jsxs=Ka;Ua.exports=yl;var a=Ua.exports,di={},Ya={exports:{}},Ne={},Xa={exports:{}},Ga={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var R=_.length;_.push(z);e:for(;0<R;){var Z=R-1>>>1,q=_[Z];if(0<l(q,z))_[Z]=z,_[R]=q,R=Z;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],R=_.pop();if(R!==z){_[0]=R;e:for(var Z=0,q=_.length,hr=q>>>1;Z<hr;){var Et=2*(Z+1)-1,Dl=_[Et],Ct=Et+1,vr=_[Ct];if(0>l(Dl,R))Ct<q&&0>l(vr,Dl)?(_[Z]=vr,_[Ct]=R,Z=Ct):(_[Z]=Dl,_[Et]=R,Z=Et);else if(Ct<q&&0>l(vr,R))_[Z]=vr,_[Ct]=R,Z=Ct;else break e}}return z}function l(_,z){var R=_.sortIndex-z.sortIndex;return R!==0?R:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],v=1,h=null,p=3,w=!1,x=!1,g=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=_)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function y(_){if(g=!1,m(_),!x)if(n(u)!==null)x=!0,Ml(j);else{var z=n(c);z!==null&&Ul(y,z.startTime-_)}}function j(_,z){x=!1,g&&(g=!1,f(T),T=-1),w=!0;var R=p;try{for(m(z),h=n(u);h!==null&&(!(h.expirationTime>z)||_&&!pe());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,p=h.priorityLevel;var q=Z(h.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(u)&&r(u),m(z)}else r(u);h=n(u)}if(h!==null)var hr=!0;else{var Et=n(c);Et!==null&&Ul(y,Et.startTime-z),hr=!1}return hr}finally{h=null,p=R,w=!1}}var P=!1,E=null,T=-1,$=5,L=-1;function pe(){return!(e.unstable_now()-L<$)}function jt(){if(E!==null){var _=e.unstable_now();L=_;var z=!0;try{z=E(!0,_)}finally{z?wn():(P=!1,E=null)}}else P=!1}var wn;if(typeof d=="function")wn=function(){d(jt)};else if(typeof MessageChannel<"u"){var fs=new MessageChannel,ad=fs.port2;fs.port1.onmessage=jt,wn=function(){ad.postMessage(null)}}else wn=function(){N(jt,0)};function Ml(_){E=_,P||(P=!0,wn())}function Ul(_,z){T=N(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Ml(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var R=p;p=z;try{return _()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=p;p=_;try{return z()}finally{p=R}},e.unstable_scheduleCallback=function(_,z,R){var Z=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Z+R:Z):R=Z,_){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,_={id:v++,callback:z,priorityLevel:_,startTime:R,expirationTime:q,sortIndex:-1},R>Z?(_.sortIndex=R,t(c,_),n(u)===null&&_===n(c)&&(g?(f(T),T=-1):g=!0,Ul(y,R-Z))):(_.sortIndex=q,t(u,_),x||w||(x=!0,Ml(j))),_},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(_){var z=p;return function(){var R=p;p=z;try{return _.apply(this,arguments)}finally{p=R}}}})(Ga);Xa.exports=Ga;var Id=Xa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=k,Se=Id;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ja=new Set,Vn={};function Ft(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Ja.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,Md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vs={},gs={};function Ud(e){return fi.call(gs,e)?!0:fi.call(vs,e)?!1:Md.test(e)?gs[e]=!0:(vs[e]=!0,!1)}function Dd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||Dd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var go=/[\-:]([a-z])/g;function yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(go,yo);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(go,yo);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(go,yo);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,l,r)&&(n=null),r||l===null?Ud(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),wo=Symbol.for("react.strict_mode"),pi=Symbol.for("react.profiler"),qa=Symbol.for("react.provider"),ba=Symbol.for("react.context"),ko=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),So=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),ys=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Fl;function Tn(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Bl=!1;function $l(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function Fd(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case pi:return"Profiler";case wo:return"StrictMode";case mi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ba:return(e.displayName||"Context")+".Consumer";case qa:return(e._context.displayName||"Context")+".Provider";case ko:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case So:return t=e.displayName||null,t!==null?t:vi(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return vi(e(t))}catch{}}return null}function Bd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vi(t);case 8:return t===wo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e){var t=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=$d(e))}function nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function yi(e,t){ru(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&xi(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xi(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(zn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function lu(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function su(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function au(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=su(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(Hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ni(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,nn=null,rn=null;function Ns(e){if(e=cr(e)){if(typeof Ei!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Nl(t),Ei(e.stateNode,e.type,t))}}function uu(e){nn?rn?rn.push(e):rn=[e]:nn=e}function cu(){if(nn){var e=nn,t=rn;if(rn=nn=null,Ns(e),t)for(e=0;e<t.length;e++)Ns(t[e])}}function du(e,t){return e(t)}function fu(){}var Vl=!1;function pu(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return du(e,t,n)}finally{Vl=!1,(nn!==null||rn!==null)&&(fu(),cu())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ci=!1;if(Xe)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ci=!1}function Wd(e,t,n,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var On=!1,Kr=null,Yr=!1,Pi=null,Qd={onError:function(e){On=!0,Kr=e}};function Zd(e,t,n,r,l,i,o,s,u){On=!1,Kr=null,Wd.apply(Qd,arguments)}function Kd(e,t,n,r,l,i,o,s,u){if(Zd.apply(this,arguments),On){if(On){var c=Kr;On=!1,Kr=null}else throw Error(S(198));Yr||(Yr=!0,Pi=c)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function js(e){if(Bt(e)!==e)throw Error(S(188))}function Yd(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return js(l),e;if(i===r)return js(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function hu(e){return e=Yd(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vu(e);if(t!==null)return t;e=e.sibling}return null}var gu=Se.unstable_scheduleCallback,Es=Se.unstable_cancelCallback,Xd=Se.unstable_shouldYield,Gd=Se.unstable_requestPaint,K=Se.unstable_now,Jd=Se.unstable_getCurrentPriorityLevel,jo=Se.unstable_ImmediatePriority,yu=Se.unstable_UserBlockingPriority,Xr=Se.unstable_NormalPriority,qd=Se.unstable_LowPriority,xu=Se.unstable_IdlePriority,xl=null,Ve=null;function bd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:nf,ef=Math.log,tf=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var kr=64,Sr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Ln(s):(i&=o,i!==0&&(r=Ln(i)))}else o=n&~l,o!==0?r=Ln(o):i!==0&&(r=Ln(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=rf(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function _i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function of(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Su,Co,Nu,ju,Eu,Ti=!1,Nr=[],at=null,ut=null,ct=null,Qn=new Map,Zn=new Map,rt=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Nn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&Co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function af(e,t,n,r,l){switch(t){case"focusin":return at=Nn(at,e,t,n,r,l),!0;case"dragenter":return ut=Nn(ut,e,t,n,r,l),!0;case"mouseover":return ct=Nn(ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Qn.set(i,Nn(Qn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Zn.set(i,Nn(Zn.get(i)||null,e,t,n,r,l)),!0}return!1}function Cu(e){var t=Tt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=mu(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=cr(n),t!==null&&Co(t),e.blockedOn=n,!1;t.shift()}return!0}function Ps(e,t,n){Ur(e)&&n.delete(t)}function uf(){Ti=!1,at!==null&&Ur(at)&&(at=null),ut!==null&&Ur(ut)&&(ut=null),ct!==null&&Ur(ct)&&(ct=null),Qn.forEach(Ps),Zn.forEach(Ps)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ti||(Ti=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,uf)))}function Kn(e){function t(l){return jn(l,e)}if(0<Nr.length){jn(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&jn(at,e),ut!==null&&jn(ut,e),ct!==null&&jn(ct,e),Qn.forEach(t),Zn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Cu(n),n.blockedOn===null&&rt.shift()}var ln=be.ReactCurrentBatchConfig,Jr=!0;function cf(e,t,n,r){var l=M,i=ln.transition;ln.transition=null;try{M=1,Po(e,t,n,r)}finally{M=l,ln.transition=i}}function df(e,t,n,r){var l=M,i=ln.transition;ln.transition=null;try{M=4,Po(e,t,n,r)}finally{M=l,ln.transition=i}}function Po(e,t,n,r){if(Jr){var l=zi(e,t,n,r);if(l===null)bl(e,t,r,qr,n),Cs(e,r);else if(af(l,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<sf.indexOf(e)){for(;l!==null;){var i=cr(l);if(i!==null&&Su(i),i=zi(e,t,n,r),i===null&&bl(e,t,r,qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var qr=null;function zi(e,t,n,r){if(qr=null,e=No(r),e=Tt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function Pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jd()){case jo:return 1;case yu:return 4;case Xr:case qd:return 16;case xu:return 536870912;default:return 16}default:return 16}}var it=null,_o=null,Dr=null;function _u(){if(Dr)return Dr;var e,t=_o,n=t.length,r,l="value"in it?it.value:it.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function _s(){return!1}function je(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jr:_s,this.isPropagationStopped=_s,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=je(vn),ur=W({},vn,{view:0,detail:0}),ff=je(ur),Wl,Ql,En,wl=W({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Wl=e.screenX-En.screenX,Ql=e.screenY-En.screenY):Ql=Wl=0,En=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Ts=je(wl),pf=W({},wl,{dataTransfer:0}),mf=je(pf),hf=W({},ur,{relatedTarget:0}),Zl=je(hf),vf=W({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),gf=je(vf),yf=W({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xf=je(yf),wf=W({},vn,{data:0}),zs=je(wf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nf[e])?!!t[e]:!1}function zo(){return jf}var Ef=W({},ur,{key:function(e){if(e.key){var t=kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=je(Ef),Pf=W({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=je(Pf),_f=W({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),Tf=je(_f),zf=W({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lf=je(zf),Rf=W({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=je(Rf),Of=[9,13,27,32],Lo=Xe&&"CompositionEvent"in window,Mn=null;Xe&&"documentMode"in document&&(Mn=document.documentMode);var Mf=Xe&&"TextEvent"in window&&!Mn,Tu=Xe&&(!Lo||Mn&&8<Mn&&11>=Mn),Rs=" ",Is=!1;function zu(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Uf(e,t){switch(e){case"compositionend":return Lu(t);case"keypress":return t.which!==32?null:(Is=!0,Rs);case"textInput":return e=t.data,e===Rs&&Is?null:e;default:return null}}function Df(e,t){if(Qt)return e==="compositionend"||!Lo&&zu(e,t)?(e=_u(),Dr=_o=it=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Ru(e,t,n,r){uu(r),t=br(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Yn=null;function Ff(e){Hu(e,0)}function kl(e){var t=Yt(e);if(nu(t))return e}function Bf(e,t){if(e==="change")return t}var Iu=!1;if(Xe){var Kl;if(Xe){var Yl="oninput"in document;if(!Yl){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Yl=typeof Ms.oninput=="function"}Kl=Yl}else Kl=!1;Iu=Kl&&(!document.documentMode||9<document.documentMode)}function Us(){Un&&(Un.detachEvent("onpropertychange",Ou),Yn=Un=null)}function Ou(e){if(e.propertyName==="value"&&kl(Yn)){var t=[];Ru(t,Yn,e,No(e)),pu(Ff,t)}}function $f(e,t,n){e==="focusin"?(Us(),Un=t,Yn=n,Un.attachEvent("onpropertychange",Ou)):e==="focusout"&&Us()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Yn)}function Hf(e,t){if(e==="click")return kl(t)}function Wf(e,t){if(e==="input"||e==="change")return kl(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:Qf;function Xn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!fi.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var n=Ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ds(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uu(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zf(e){var t=Uu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=As(n,i);var o=As(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=Xe&&"documentMode"in document&&11>=document.documentMode,Zt=null,Li=null,Dn=null,Ri=!1;function Fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ri||Zt==null||Zt!==Zr(r)||(r=Zt,"selectionStart"in r&&Ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Xn(Dn,r)||(Dn=r,r=br(Li,"onSelect"),0<r.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Xl={},Du={};Xe&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Sl(e){if(Xl[e])return Xl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return Xl[e]=t[n];return e}var Au=Sl("animationend"),Fu=Sl("animationiteration"),Bu=Sl("animationstart"),$u=Sl("transitionend"),Vu=new Map,Bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Vu.set(e,t),Ft(t,[e])}for(var Gl=0;Gl<Bs.length;Gl++){var Jl=Bs[Gl],Yf=Jl.toLowerCase(),Xf=Jl[0].toUpperCase()+Jl.slice(1);xt(Yf,"on"+Xf)}xt(Au,"onAnimationEnd");xt(Fu,"onAnimationIteration");xt(Bu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt($u,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function $s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kd(r,t,void 0,e),e.currentTarget=null}function Hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;$s(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;$s(l,s,c),i=u}}}if(Yr)throw e=Pi,Yr=!1,Pi=null,e}function A(e,t){var n=t[Di];n===void 0&&(n=t[Di]=new Set);var r=e+"__bubble";n.has(r)||(Wu(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),Wu(n,e,r,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Cr]){e[Cr]=!0,Ja.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,ql("selectionchange",!1,t))}}function Wu(e,t,n,r){switch(Pu(t)){case 1:var l=cf;break;case 4:l=df;break;default:l=Po}n=l.bind(null,t,n,e),l=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}pu(function(){var c=i,v=No(n),h=[];e:{var p=Vu.get(e);if(p!==void 0){var w=To,x=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":w=Cf;break;case"focusin":x="focus",w=Zl;break;case"focusout":x="blur",w=Zl;break;case"beforeblur":case"afterblur":w=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tf;break;case Au:case Fu:case Bu:w=gf;break;case $u:w=Lf;break;case"scroll":w=ff;break;case"wheel":w=If;break;case"copy":case"cut":case"paste":w=xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ls}var g=(t&4)!==0,N=!g&&e==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var d=c,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,f!==null&&(y=Wn(d,f),y!=null&&g.push(Jn(d,y,m)))),N)break;d=d.return}0<g.length&&(p=new w(p,x,null,n,v),h.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==ji&&(x=n.relatedTarget||n.fromElement)&&(Tt(x)||x[Ge]))break e;if((w||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Tt(x):null,x!==null&&(N=Bt(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(g=Ts,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Ls,y="onPointerLeave",f="onPointerEnter",d="pointer"),N=w==null?p:Yt(w),m=x==null?p:Yt(x),p=new g(y,d+"leave",w,n,v),p.target=N,p.relatedTarget=m,y=null,Tt(v)===c&&(g=new g(f,d+"enter",x,n,v),g.target=m,g.relatedTarget=N,y=g),N=y,w&&x)t:{for(g=w,f=x,d=0,m=g;m;m=Vt(m))d++;for(m=0,y=f;y;y=Vt(y))m++;for(;0<d-m;)g=Vt(g),d--;for(;0<m-d;)f=Vt(f),m--;for(;d--;){if(g===f||f!==null&&g===f.alternate)break t;g=Vt(g),f=Vt(f)}g=null}else g=null;w!==null&&Vs(h,p,w,g,!1),x!==null&&N!==null&&Vs(h,N,x,g,!0)}}e:{if(p=c?Yt(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var j=Bf;else if(Os(p))if(Iu)j=Wf;else{j=Vf;var P=$f}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=Hf);if(j&&(j=j(e,c))){Ru(h,j,n,v);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&xi(p,"number",p.value)}switch(P=c?Yt(c):window,e){case"focusin":(Os(P)||P.contentEditable==="true")&&(Zt=P,Li=c,Dn=null);break;case"focusout":Dn=Li=Zt=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,Fs(h,n,v);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":Fs(h,n,v)}var E;if(Lo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Qt?zu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Tu&&n.locale!=="ko"&&(Qt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Qt&&(E=_u()):(it=v,_o="value"in it?it.value:it.textContent,Qt=!0)),P=br(c,T),0<P.length&&(T=new zs(T,e,null,n,v),h.push({event:T,listeners:P}),E?T.data=E:(E=Lu(n),E!==null&&(T.data=E)))),(E=Mf?Uf(e,n):Df(e,n))&&(c=br(c,"onBeforeInput"),0<c.length&&(v=new zs("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:c}),v.data=E))}Hu(h,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Wn(e,n),i!=null&&r.unshift(Jn(e,i,l)),i=Wn(e,t),i!=null&&r.push(Jn(e,i,l))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Wn(n,i),u!=null&&o.unshift(Jn(n,u,s))):l||(u=Wn(n,i),u!=null&&o.push(Jn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(Jf,`
`).replace(qf,"")}function Pr(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(S(425))}function el(){}var Ii=null,Oi=null;function Mi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(tp)}:Ui;function tp(e){setTimeout(function(){throw e})}function ei(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),$e="__reactFiber$"+gn,qn="__reactProps$"+gn,Ge="__reactContainer$"+gn,Di="__reactEvents$"+gn,np="__reactListeners$"+gn,rp="__reactHandles$"+gn;function Tt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[$e])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[$e]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Nl(e){return e[qn]||null}var Ai=[],Xt=-1;function wt(e){return{current:e}}function F(e){0>Xt||(e.current=Ai[Xt],Ai[Xt]=null,Xt--)}function D(e,t){Xt++,Ai[Xt]=e.current,e.current=t}var yt={},se=wt(yt),ve=wt(!1),Ot=yt;function un(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function tl(){F(ve),F(se)}function Zs(e,t,n){if(se.current!==yt)throw Error(S(168));D(se,t),D(ve,n)}function Qu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Bd(e)||"Unknown",l));return W({},n,r)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Ot=se.current,D(se,e),D(ve,ve.current),!0}function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Qu(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,F(ve),F(se),D(se,e)):F(ve),D(ve,n)}var Qe=null,jl=!1,ti=!1;function Zu(e){Qe===null?Qe=[e]:Qe.push(e)}function lp(e){jl=!0,Zu(e)}function kt(){if(!ti&&Qe!==null){ti=!0;var e=0,t=M;try{var n=Qe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,jl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),gu(jo,kt),l}finally{M=t,ti=!1}}return null}var Gt=[],Jt=0,rl=null,ll=0,Ce=[],Pe=0,Mt=null,Ze=1,Ke="";function Pt(e,t){Gt[Jt++]=ll,Gt[Jt++]=rl,rl=e,ll=t}function Ku(e,t,n){Ce[Pe++]=Ze,Ce[Pe++]=Ke,Ce[Pe++]=Mt,Mt=e;var r=Ze;e=Ke;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ze=1<<32-Ue(t)+l|n<<l|r,Ke=i+e}else Ze=1<<i|n<<l|r,Ke=e}function Io(e){e.return!==null&&(Pt(e,1),Ku(e,1,0))}function Oo(e){for(;e===rl;)rl=Gt[--Jt],Gt[Jt]=null,ll=Gt[--Jt],Gt[Jt]=null;for(;e===Mt;)Mt=Ce[--Pe],Ce[Pe]=null,Ke=Ce[--Pe],Ce[Pe]=null,Ze=Ce[--Pe],Ce[Pe]=null}var ke=null,we=null,B=!1,Me=null;function Yu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ze,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(B){var t=we;if(t){var n=t;if(!Ys(e,t)){if(Fi(e))throw Error(S(418));t=dt(n.nextSibling);var r=ke;t&&Ys(e,t)?Yu(r,n):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(Fi(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function _r(e){if(e!==ke)return!1;if(!B)return Xs(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mi(e.type,e.memoizedProps)),t&&(t=we)){if(Fi(e))throw Xu(),Error(S(418));for(;t;)Yu(e,t),t=dt(t.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?dt(e.stateNode.nextSibling):null;return!0}function Xu(){for(var e=we;e;)e=dt(e.nextSibling)}function cn(){we=ke=null,B=!1}function Mo(e){Me===null?Me=[e]:Me.push(e)}var ip=be.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Gu(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function i(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,m,y){return d===null||d.tag!==6?(d=ai(m,f.mode,y),d.return=f,d):(d=l(d,m),d.return=f,d)}function u(f,d,m,y){var j=m.type;return j===Wt?v(f,d,m.props.children,y,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Gs(j)===d.type)?(y=l(d,m.props),y.ref=Cn(f,d,m),y.return=f,y):(y=Qr(m.type,m.key,m.props,null,f.mode,y),y.ref=Cn(f,d,m),y.return=f,y)}function c(f,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ui(m,f.mode,y),d.return=f,d):(d=l(d,m.children||[]),d.return=f,d)}function v(f,d,m,y,j){return d===null||d.tag!==7?(d=It(m,f.mode,y,j),d.return=f,d):(d=l(d,m),d.return=f,d)}function h(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ai(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return m=Qr(d.type,d.key,d.props,null,f.mode,m),m.ref=Cn(f,null,d),m.return=f,m;case Ht:return d=ui(d,f.mode,m),d.return=f,d;case tt:var y=d._init;return h(f,y(d._payload),m)}if(zn(d)||kn(d))return d=It(d,f.mode,m,null),d.return=f,d;Tr(f,d)}return null}function p(f,d,m,y){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(f,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yr:return m.key===j?u(f,d,m,y):null;case Ht:return m.key===j?c(f,d,m,y):null;case tt:return j=m._init,p(f,d,j(m._payload),y)}if(zn(m)||kn(m))return j!==null?null:v(f,d,m,y,null);Tr(f,m)}return null}function w(f,d,m,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(m)||null,s(d,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yr:return f=f.get(y.key===null?m:y.key)||null,u(d,f,y,j);case Ht:return f=f.get(y.key===null?m:y.key)||null,c(d,f,y,j);case tt:var P=y._init;return w(f,d,m,P(y._payload),j)}if(zn(y)||kn(y))return f=f.get(m)||null,v(d,f,y,j,null);Tr(d,y)}return null}function x(f,d,m,y){for(var j=null,P=null,E=d,T=d=0,$=null;E!==null&&T<m.length;T++){E.index>T?($=E,E=null):$=E.sibling;var L=p(f,E,m[T],y);if(L===null){E===null&&(E=$);break}e&&E&&L.alternate===null&&t(f,E),d=i(L,d,T),P===null?j=L:P.sibling=L,P=L,E=$}if(T===m.length)return n(f,E),B&&Pt(f,T),j;if(E===null){for(;T<m.length;T++)E=h(f,m[T],y),E!==null&&(d=i(E,d,T),P===null?j=E:P.sibling=E,P=E);return B&&Pt(f,T),j}for(E=r(f,E);T<m.length;T++)$=w(E,f,T,m[T],y),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?T:$.key),d=i($,d,T),P===null?j=$:P.sibling=$,P=$);return e&&E.forEach(function(pe){return t(f,pe)}),B&&Pt(f,T),j}function g(f,d,m,y){var j=kn(m);if(typeof j!="function")throw Error(S(150));if(m=j.call(m),m==null)throw Error(S(151));for(var P=j=null,E=d,T=d=0,$=null,L=m.next();E!==null&&!L.done;T++,L=m.next()){E.index>T?($=E,E=null):$=E.sibling;var pe=p(f,E,L.value,y);if(pe===null){E===null&&(E=$);break}e&&E&&pe.alternate===null&&t(f,E),d=i(pe,d,T),P===null?j=pe:P.sibling=pe,P=pe,E=$}if(L.done)return n(f,E),B&&Pt(f,T),j;if(E===null){for(;!L.done;T++,L=m.next())L=h(f,L.value,y),L!==null&&(d=i(L,d,T),P===null?j=L:P.sibling=L,P=L);return B&&Pt(f,T),j}for(E=r(f,E);!L.done;T++,L=m.next())L=w(E,f,T,L.value,y),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?T:L.key),d=i(L,d,T),P===null?j=L:P.sibling=L,P=L);return e&&E.forEach(function(jt){return t(f,jt)}),B&&Pt(f,T),j}function N(f,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Wt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yr:e:{for(var j=m.key,P=d;P!==null;){if(P.key===j){if(j=m.type,j===Wt){if(P.tag===7){n(f,P.sibling),d=l(P,m.props.children),d.return=f,f=d;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Gs(j)===P.type){n(f,P.sibling),d=l(P,m.props),d.ref=Cn(f,P,m),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}m.type===Wt?(d=It(m.props.children,f.mode,y,m.key),d.return=f,f=d):(y=Qr(m.type,m.key,m.props,null,f.mode,y),y.ref=Cn(f,d,m),y.return=f,f=y)}return o(f);case Ht:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=l(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ui(m,f.mode,y),d.return=f,f=d}return o(f);case tt:return P=m._init,N(f,d,P(m._payload),y)}if(zn(m))return x(f,d,m,y);if(kn(m))return g(f,d,m,y);Tr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,m),d.return=f,f=d):(n(f,d),d=ai(m,f.mode,y),d.return=f,f=d),o(f)):n(f,d)}return N}var dn=Gu(!0),Ju=Gu(!1),il=wt(null),ol=null,qt=null,Uo=null;function Do(){Uo=qt=ol=null}function Ao(e){var t=il.current;F(il),e._currentValue=t}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ol=e,Uo=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Uo!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(ol===null)throw Error(S(308));qt=e,ol.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var zt=null;function Fo(e){zt===null?zt=[e]:zt.push(e)}function qu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,Fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eo(e,n)}}function Js(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;nt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=c:s.next=c,v.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,v=c=u=null,s=i;do{var p=s.lane,w=s.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,g=s;switch(p=t,w=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){h=x.call(w,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,p=typeof x=="function"?x.call(w,h,p):x,p==null)break e;h=W({},h,p);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(c=v=w,u=h):v=v.next=w,o|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(v===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Dt|=o,e.lanes=o,e.memoizedState=h}}function qs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var dr={},He=wt(dr),bn=wt(dr),er=wt(dr);function Lt(e){if(e===dr)throw Error(S(174));return e}function $o(e,t){switch(D(er,t),D(bn,e),D(He,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}F(He),D(He,t)}function fn(){F(He),F(bn),F(er)}function ec(e){Lt(er.current);var t=Lt(He.current),n=ki(t,e.type);t!==n&&(D(bn,e),D(He,n))}function Vo(e){bn.current===e&&(F(He),F(bn))}var V=wt(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function Ho(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var Br=be.ReactCurrentDispatcher,ri=be.ReactCurrentBatchConfig,Ut=0,H=null,G=null,b=null,ul=!1,An=!1,tr=0,op=0;function le(){throw Error(S(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,l,i){if(Ut=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?cp:dp,e=n(r,l),An){i=0;do{if(An=!1,tr=0,25<=i)throw Error(S(301));i+=1,b=G=null,t.updateQueue=null,Br.current=fp,e=n(r,l)}while(An)}if(Br.current=cl,t=G!==null&&G.next!==null,Ut=0,b=G=H=null,ul=!1,t)throw Error(S(300));return e}function Zo(){var e=tr!==0;return tr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?H.memoizedState=b=e:b=b.next=e,b}function Le(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=b===null?H.memoizedState:b.next;if(t!==null)b=t,G=e;else{if(e===null)throw Error(S(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},b===null?H.memoizedState=b=e:b=b.next=e}return b}function nr(e,t){return typeof t=="function"?t(e):t}function li(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var v=c.lane;if((Ut&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,H.lanes|=v,Dt|=v}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Ae(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Dt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ii(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function tc(){}function nc(e,t){var n=H,r=Le(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Ko(ic.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,rr(9,lc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(S(349));Ut&30||rc(n,t,l)}return l}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lc(e,t,n,r){t.value=n,t.getSnapshot=r,oc(t)&&sc(e)}function ic(e,t,n){return n(function(){oc(t)&&sc(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function sc(e){var t=Je(e,1);t!==null&&De(t,e,1,-1)}function bs(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,H,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ac(){return Le().memoizedState}function $r(e,t,n,r){var l=Be();H.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var l=Le();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&Wo(r,o.deps)){l.memoizedState=rr(t,n,i,r);return}}H.flags|=e,l.memoizedState=rr(1|t,n,i,r)}function ea(e,t){return $r(8390656,8,e,t)}function Ko(e,t){return El(2048,8,e,t)}function uc(e,t){return El(4,2,e,t)}function cc(e,t){return El(4,4,e,t)}function dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fc(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,dc.bind(null,t,e),n)}function Yo(){}function pc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hc(e,t,n){return Ut&21?(Ae(n,t)||(n=wu(),H.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function sp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ri.transition;ri.transition={};try{e(!1),t()}finally{M=n,ri.transition=r}}function vc(){return Le().memoizedState}function ap(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))yc(t,n);else if(n=qu(e,t,n,r),n!==null){var l=ue();De(n,e,r,l),xc(n,t,r)}}function up(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))yc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,o)){var u=t.interleaved;u===null?(l.next=l,Fo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=qu(e,t,l,r),n!==null&&(l=ue(),De(n,e,r,l),xc(n,t,r))}}function gc(e){var t=e.alternate;return e===H||t!==null&&t===H}function yc(e,t){An=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eo(e,n)}}var cl={readContext:ze,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},cp={readContext:ze,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:ea,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ap.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:bs,useDebugValue:Yo,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=bs(!1),t=e[0];return e=sp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Be();if(B){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ee===null)throw Error(S(349));Ut&30||rc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ea(ic.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,lc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Be(),t=ee.identifierPrefix;if(B){var n=Ke,r=Ze;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=op++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dp={readContext:ze,useCallback:pc,useContext:ze,useEffect:Ko,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:mc,useReducer:li,useRef:ac,useState:function(){return li(nr)},useDebugValue:Yo,useDeferredValue:function(e){var t=Le();return hc(t,G.memoizedState,e)},useTransition:function(){var e=li(nr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:vc,unstable_isNewReconciler:!1},fp={readContext:ze,useCallback:pc,useContext:ze,useEffect:Ko,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:mc,useReducer:ii,useRef:ac,useState:function(){return ii(nr)},useDebugValue:Yo,useDeferredValue:function(e){var t=Le();return G===null?t.memoizedState=e:hc(t,G.memoizedState,e)},useTransition:function(){var e=ii(nr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:vc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=mt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(De(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=mt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(De(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=mt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(De(t,e,r,n),Fr(t,e,r))}};function ta(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(l,i):!0}function wc(e,t,n){var r=!1,l=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=ge(t)?Ot:se.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function na(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Bo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=ge(t)?Ot:se.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Cl.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Fd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function oi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function kc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,eo=r),Wi(e,t)},n}function Sc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Wi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wi(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ra(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function la(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ia(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var mp=be.ReactCurrentOwner,he=!1;function ae(e,t,n,r){t.child=e===null?Ju(t,null,n,r):dn(t,e.child,n,r)}function oa(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=Qo(e,t,n,r,i,l),n=Zo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(B&&n&&Io(t),t.flags|=1,ae(e,t,r,l),t.child)}function sa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ns(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nc(e,t,i,r,l)):(e=Qr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(o,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Xn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,qe(e,t,l)}return Qi(e,t,n,r,l)}function jc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(en,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(en,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(en,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(en,xe),xe|=r;return ae(e,t,l,n),t.child}function Ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,n,r,l){var i=ge(n)?Ot:se.current;return i=un(t,i),on(t,l),n=Qo(e,t,n,r,i,l),r=Zo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(B&&r&&Io(t),t.flags|=1,ae(e,t,n,l),t.child)}function aa(e,t,n,r,l){if(ge(n)){var i=!0;nl(t)}else i=!1;if(on(t,l),t.stateNode===null)Vr(e,t),wc(t,n,r),Hi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=ge(n)?Ot:se.current,c=un(t,c));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&na(t,o,r,c),nt=!1;var p=t.memoizedState;o.state=p,sl(t,r,o,l),u=t.memoizedState,s!==r||p!==u||ve.current||nt?(typeof v=="function"&&(Vi(t,n,v,r),u=t.memoizedState),(s=nt||ta(t,n,s,r,p,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ie(t.type,s),o.props=c,h=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=ge(n)?Ot:se.current,u=un(t,u));var w=n.getDerivedStateFromProps;(v=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||p!==u)&&na(t,o,r,u),nt=!1,p=t.memoizedState,o.state=p,sl(t,r,o,l);var x=t.memoizedState;s!==h||p!==x||ve.current||nt?(typeof w=="function"&&(Vi(t,n,w,r),x=t.memoizedState),(c=nt||ta(t,n,c,r,p,x,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){Ec(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ks(t,n,!1),qe(e,t,i);r=t.stateNode,mp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,s,i)):ae(e,t,s,i),t.memoizedState=r.state,l&&Ks(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?Zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zs(e,t.context,!1),$o(e,t.containerInfo)}function ua(e,t,n,r,l){return cn(),Mo(l),t.flags|=256,ae(e,t,n,r),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,n){var r=t.pendingProps,l=V.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(V,l&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Tl(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Ki,e):Xo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return hp(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ht(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ht(s,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Yi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ki,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xo(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&Mo(r),dn(t,e.child,null,n),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=oi(Error(S(422))),zr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Tl({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=Yi(o),t.memoizedState=Ki,i);if(!(t.mode&1))return zr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=oi(i,r,void 0),zr(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Je(e,l),De(r,e,l,-1))}return ts(),r=oi(Error(S(421))),zr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=dt(l.nextSibling),ke=t,B=!0,Me=null,e!==null&&(Ce[Pe++]=Ze,Ce[Pe++]=Ke,Ce[Pe++]=Mt,Ze=e.id,Ke=e.overflow,Mt=t),t=Xo(t,r.children),t.flags|=4096,t)}function ca(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function si(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function _c(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ca(e,n,t);else if(e.tag===19)ca(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),si(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&al(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}si(t,!0,n,null,i);break;case"together":si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t,n){switch(t.tag){case 3:Cc(t),cn();break;case 5:ec(t);break;case 1:ge(t.type)&&nl(t);break;case 4:$o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(il,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Pc(e,t,n):(D(V,V.current&1),e=qe(e,t,n),e!==null?e.sibling:null);D(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _c(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,jc(e,t,n)}return qe(e,t,n)}var Tc,Xi,zc,Lc;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xi=function(){};zc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Lt(He.current);var i=null;switch(n){case"input":l=gi(e,l),r=gi(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=wi(e,l),r=wi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}Si(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(Oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&tl(),ie(t),null;case 3:return r=t.stateNode,fn(),F(ve),F(se),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ro(Me),Me=null))),Xi(e,t),ie(t),null;case 5:Vo(t);var l=Lt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)zc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ie(t),null}if(e=Lt(He.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[$e]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<Rn.length;l++)A(Rn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":xs(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":ks(r,i),A("invalid",r)}Si(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),l=["children",""+s]):Vn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&A("scroll",r)}switch(n){case"input":xr(r),ws(r,i,!0);break;case"textarea":xr(r),Ss(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=el)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[qn]=r,Tc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ni(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<Rn.length;l++)A(Rn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":xs(e,r),l=gi(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),A("invalid",e);break;case"textarea":ks(e,r),l=wi(e,r),A("invalid",e);break;default:l=r}Si(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?au(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ou(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&A("scroll",e):u!=null&&xo(e,i,u,o))}switch(n){case"input":xr(e),ws(e,r,!1);break;case"textarea":xr(e),Ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Lt(er.current),Lt(He.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ie(t),null;case 13:if(F(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&t.mode&1&&!(t.flags&128))Xu(),cn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[$e]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Me!==null&&(ro(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):ts())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return fn(),Xi(e,t),e===null&&Gn(t.stateNode.containerInfo),ie(t),null;case 10:return Ao(t.type._context),ie(t),null;case 17:return ge(t.type)&&tl(),ie(t),null;case 19:if(F(V),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Pn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=al(e),o!==null){for(t.flags|=128,Pn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>mn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=al(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return ie(t),null}else 2*K()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=V.current,D(V,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function yp(e,t){switch(Oo(t),t.tag){case 1:return ge(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),F(ve),F(se),Ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vo(t),null;case 13:if(F(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(V),null;case 4:return fn(),null;case 10:return Ao(t.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var Lr=!1,oe=!1,xp=typeof WeakSet=="function"?WeakSet:Set,C=null;function bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Gi(e,t,n){try{n()}catch(r){Q(e,t,r)}}var da=!1;function wp(e,t){if(Ii=Jr,e=Uu(),Ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,v=0,h=e,p=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++c===l&&(s=o),p===i&&++v===r&&(u=o),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},Jr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,N=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ie(t.type,g),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=da,da=!1,x}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Gi(t,n,i)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rc(e){var t=e.alternate;t!==null&&(e.alternate=null,Rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[qn],delete t[Di],delete t[np],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ic(e){return e.tag===5||e.tag===3||e.tag===4}function fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}var te=null,Oe=!1;function et(e,t,n){for(n=n.child;n!==null;)Oc(e,t,n),n=n.sibling}function Oc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:oe||bt(n,t);case 6:var r=te,l=Oe;te=null,et(e,t,n),te=r,Oe=l,te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?ei(e.parentNode,n):e.nodeType===1&&ei(e,n),Kn(e)):ei(te,n.stateNode));break;case 4:r=te,l=Oe,te=n.stateNode.containerInfo,Oe=!0,et(e,t,n),te=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Gi(n,t,o),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!oe&&(bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,et(e,t,n),oe=r):et(e,t,n);break;default:et(e,t,n)}}function pa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var l=Tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Oe=!1;break e;case 3:te=s.stateNode.containerInfo,Oe=!0;break e;case 4:te=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(te===null)throw Error(S(160));Oc(i,o,l),te=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Fe(e),r&4){try{Fn(3,e,e.return),Pl(3,e)}catch(g){Q(e,e.return,g)}try{Fn(5,e,e.return)}catch(g){Q(e,e.return,g)}}break;case 1:Re(t,e),Fe(e),r&512&&n!==null&&bt(n,n.return);break;case 5:if(Re(t,e),Fe(e),r&512&&n!==null&&bt(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(g){Q(e,e.return,g)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ru(l,i),Ni(s,o);var c=Ni(s,i);for(o=0;o<u.length;o+=2){var v=u[o],h=u[o+1];v==="style"?au(l,h):v==="dangerouslySetInnerHTML"?ou(l,h):v==="children"?Hn(l,h):xo(l,v,h,c)}switch(s){case"input":yi(l,i);break;case"textarea":lu(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?tn(l,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[qn]=i}catch(g){Q(e,e.return,g)}}break;case 6:if(Re(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(g){Q(e,e.return,g)}}break;case 3:if(Re(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(g){Q(e,e.return,g)}break;case 4:Re(t,e),Fe(e);break;case 13:Re(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(qo=K())),r&4&&pa(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||v,Re(t,e),oe=c):Re(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(h=C=v;C!==null;){switch(p=C,w=p.child,p.tag){case 0:case 11:case 14:case 15:Fn(4,p,p.return);break;case 1:bt(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){Q(r,n,g)}}break;case 5:bt(p,p.return);break;case 22:if(p.memoizedState!==null){ha(h);continue}}w!==null?(w.return=p,C=w):ha(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=su("display",o))}catch(g){Q(e,e.return,g)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){Q(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),Fe(e),r&4&&pa(e);break;case 21:break;default:Re(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ic(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var i=fa(e);bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=fa(e);qi(e,s,o);break;default:throw Error(S(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,n){C=e,Uc(e)}function Uc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Lr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=Lr;var c=oe;if(Lr=o,(oe=u)&&!c)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?va(l):u!==null?(u.return=o,C=u):va(l);for(;i!==null;)C=i,Uc(i),i=i.sibling;C=l,Lr=s,oe=c}ma(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):ma(e)}}function ma(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qs(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Kn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||t.flags&512&&Ji(t)}catch(p){Q(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ha(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function va(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var i=t.return;try{Ji(t)}catch(u){Q(t,i,u)}break;case 5:var o=t.return;try{Ji(t)}catch(u){Q(t,o,u)}}}catch(u){Q(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Sp=Math.ceil,dl=be.ReactCurrentDispatcher,Go=be.ReactCurrentOwner,Te=be.ReactCurrentBatchConfig,O=0,ee=null,Y=null,ne=0,xe=0,en=wt(0),J=0,lr=null,Dt=0,_l=0,Jo=0,Bn=null,me=null,qo=0,mn=1/0,We=null,fl=!1,eo=null,pt=null,Rr=!1,ot=null,pl=0,$n=0,to=null,Hr=-1,Wr=0;function ue(){return O&6?K():Hr!==-1?Hr:Hr=K()}function mt(e){return e.mode&1?O&2&&ne!==0?ne&-ne:ip.transition!==null?(Wr===0&&(Wr=wu()),Wr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Pu(e.type)),e):1}function De(e,t,n,r){if(50<$n)throw $n=0,to=null,Error(S(185));ar(e,n,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(_l|=n),J===4&&lt(e,ne)),ye(e,r),n===1&&O===0&&!(t.mode&1)&&(mn=K()+500,jl&&kt()))}function ye(e,t){var n=e.callbackNode;lf(e,t);var r=Gr(e,e===ee?ne:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?lp(ga.bind(null,e)):Zu(ga.bind(null,e)),ep(function(){!(O&6)&&kt()}),n=null;else{switch(ku(r)){case 1:n=jo;break;case 4:n=yu;break;case 16:n=Xr;break;case 536870912:n=xu;break;default:n=Xr}n=Wc(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if(Hr=-1,Wr=0,O&6)throw Error(S(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Gr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ml(e,r);else{t=r;var l=O;O|=2;var i=Fc();(ee!==e||ne!==t)&&(We=null,mn=K()+500,Rt(e,t));do try{Ep();break}catch(s){Ac(e,s)}while(!0);Do(),dl.current=i,O=l,Y!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(l=_i(e),l!==0&&(r=l,t=no(e,l))),t===1)throw n=lr,Rt(e,0),lt(e,r),ye(e,K()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Np(l)&&(t=ml(e,r),t===2&&(i=_i(e),i!==0&&(r=i,t=no(e,i))),t===1))throw n=lr,Rt(e,0),lt(e,r),ye(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:_t(e,me,We);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=qo+500-K(),10<t)){if(Gr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ui(_t.bind(null,e,me,We),t);break}_t(e,me,We);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=Ui(_t.bind(null,e,me,We),r);break}_t(e,me,We);break;case 5:_t(e,me,We);break;default:throw Error(S(329))}}}return ye(e,K()),e.callbackNode===n?Dc.bind(null,e):null}function no(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=ml(e,t),e!==2&&(t=me,me=n,t!==null&&ro(t)),e}function ro(e){me===null?me=e:me.push.apply(me,e)}function Np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Jo,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function ga(e){if(O&6)throw Error(S(327));sn();var t=Gr(e,0);if(!(t&1))return ye(e,K()),null;var n=ml(e,t);if(e.tag!==0&&n===2){var r=_i(e);r!==0&&(t=r,n=no(e,r))}if(n===1)throw n=lr,Rt(e,0),lt(e,t),ye(e,K()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,me,We),ye(e,K()),null}function bo(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(mn=K()+500,jl&&kt())}}function At(e){ot!==null&&ot.tag===0&&!(O&6)&&sn();var t=O;O|=1;var n=Te.transition,r=M;try{if(Te.transition=null,M=1,e)return e()}finally{M=r,Te.transition=n,O=t,!(O&6)&&kt()}}function es(){xe=en.current,F(en)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Oo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:fn(),F(ve),F(se),Ho();break;case 5:Vo(r);break;case 4:fn();break;case 13:F(V);break;case 19:F(V);break;case 10:Ao(r.type._context);break;case 22:case 23:es()}n=n.return}if(ee=e,Y=e=ht(e.current,null),ne=xe=t,J=0,lr=null,Jo=_l=Dt=0,me=Bn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}zt=null}return e}function Ac(e,t){do{var n=Y;try{if(Do(),Br.current=cl,ul){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(Ut=0,b=G=H=null,An=!1,tr=0,Go.current=null,n===null||n.return===null){J=1,lr=t,Y=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=s,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=la(o);if(w!==null){w.flags&=-257,ia(w,o,s,i,t),w.mode&1&&ra(i,c,t),t=w,u=c;var x=t.updateQueue;if(x===null){var g=new Set;g.add(u),t.updateQueue=g}else x.add(u);break e}else{if(!(t&1)){ra(i,c,t),ts();break e}u=Error(S(426))}}else if(B&&s.mode&1){var N=la(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ia(N,o,s,i,t),Mo(pn(u,s));break e}}i=u=pn(u,s),J!==4&&(J=2),Bn===null?Bn=[i]:Bn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=kc(i,u,t);Js(i,f);break e;case 1:s=u;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pt===null||!pt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Sc(i,s,t);Js(i,y);break e}}i=i.return}while(i!==null)}$c(n)}catch(j){t=j,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Fc(){var e=dl.current;return dl.current=cl,e===null?cl:e}function ts(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Dt&268435455)&&!(_l&268435455)||lt(ee,ne)}function ml(e,t){var n=O;O|=2;var r=Fc();(ee!==e||ne!==t)&&(We=null,Rt(e,t));do try{jp();break}catch(l){Ac(e,l)}while(!0);if(Do(),O=n,dl.current=r,Y!==null)throw Error(S(261));return ee=null,ne=0,J}function jp(){for(;Y!==null;)Bc(Y)}function Ep(){for(;Y!==null&&!Xd();)Bc(Y)}function Bc(e){var t=Hc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?$c(e):Y=t,Go.current=null}function $c(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(n=gp(n,t,xe),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);J===0&&(J=5)}function _t(e,t,n){var r=M,l=Te.transition;try{Te.transition=null,M=1,Cp(e,t,n,r)}finally{Te.transition=l,M=r}return null}function Cp(e,t,n,r){do sn();while(ot!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(of(e,i),e===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Wc(Xr,function(){return sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var o=M;M=1;var s=O;O|=4,Go.current=null,wp(e,n),Mc(n,e),Zf(Oi),Jr=!!Ii,Oi=Ii=null,e.current=n,kp(n),Gd(),O=s,M=o,Te.transition=i}else e.current=n;if(Rr&&(Rr=!1,ot=e,pl=l),i=e.pendingLanes,i===0&&(pt=null),bd(n.stateNode),ye(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=eo,eo=null,e;return pl&1&&e.tag!==0&&sn(),i=e.pendingLanes,i&1?e===to?$n++:($n=0,to=e):$n=0,kt(),null}function sn(){if(ot!==null){var e=ku(pl),t=Te.transition,n=M;try{if(Te.transition=null,M=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,pl=0,O&6)throw Error(S(331));var l=O;for(O|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(C=c;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:Fn(8,v,i)}var h=v.child;if(h!==null)h.return=v,C=h;else for(;C!==null;){v=C;var p=v.sibling,w=v.return;if(Rc(v),v===c){C=null;break}if(p!==null){p.return=w,C=p;break}C=w}}}var x=i.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var N=g.sibling;g.sibling=null,g=N}while(g!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(j){Q(s,s.return,j)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if(O=l,kt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{M=n,Te.transition=t}}return!1}function ya(e,t,n){t=pn(n,t),t=kc(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(ar(e,1,t),ye(e,t))}function Q(e,t,n){if(e.tag===3)ya(e,e,n);else for(;t!==null;){if(t.tag===3){ya(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=pn(n,e),e=Sc(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(ar(t,1,e),ye(t,e));break}}t=t.return}}function Pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>K()-qo?Rt(e,0):Jo|=n),ye(e,t)}function Vc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ue();e=Je(e,t),e!==null&&(ar(e,t,n),ye(e,n))}function _p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,vp(e,t,n);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&Ku(t,ll,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var l=un(t,se.current);on(t,n),l=Qo(null,t,r,e,l,n);var i=Zo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,nl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Bo(t),l.updater=Cl,t.stateNode=l,l._reactInternals=t,Hi(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,B&&i&&Io(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Lp(r),e=Ie(r,e),l){case 0:t=Qi(null,t,r,e,n);break e;case 1:t=aa(null,t,r,e,n);break e;case 11:t=oa(null,t,r,e,n);break e;case 14:t=sa(null,t,r,Ie(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Qi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),aa(e,t,r,l,n);case 3:e:{if(Cc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,bu(e,t),sl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pn(Error(S(423)),t),t=ua(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(S(424)),t),t=ua(e,t,r,n,l);break e}else for(we=dt(t.stateNode.containerInfo.firstChild),ke=t,B=!0,Me=null,n=Ju(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=qe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return ec(t),e===null&&Bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Mi(r,l)?o=null:i!==null&&Mi(r,i)&&(t.flags|=32),Ec(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return Pc(e,t,n);case 4:return $o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),oa(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(il,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!ve.current){t=qe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),$i(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),$i(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=ze(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),sa(e,t,r,l,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Vr(e,t),t.tag=1,ge(r)?(e=!0,nl(t)):e=!1,on(t,n),wc(t,r,l),Hi(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 22:return jc(e,t,n)}throw Error(S(156,t.tag))};function Wc(e,t){return gu(e,t)}function zp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new zp(e,t,n,r)}function ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ko)return 11;if(e===So)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ns(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return It(n.children,l,i,t);case wo:o=8,l|=8;break;case pi:return e=_e(12,n,t,l|2),e.elementType=pi,e.lanes=i,e;case mi:return e=_e(13,n,t,l),e.elementType=mi,e.lanes=i,e;case hi:return e=_e(19,n,t,l),e.elementType=hi,e.lanes=i,e;case eu:return Tl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qa:o=10;break e;case ba:o=9;break e;case ko:o=11;break e;case So:o=14;break e;case tt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=_e(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=eu,e.lanes=n,e.stateNode={isHidden:!1},e}function ai(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function ui(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function rs(e,t,n,r,l,i,o,s,u){return e=new Rp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bo(i),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qc(e){if(!e)return yt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ge(n))return Qu(e,n,t)}return t}function Zc(e,t,n,r,l,i,o,s,u){return e=rs(n,r,!0,e,l,i,o,s,u),e.context=Qc(null),n=e.current,r=ue(),l=mt(n),i=Ye(r,l),i.callback=t??null,ft(n,i,l),e.current.lanes=l,ar(e,l,r),ye(e,r),e}function zl(e,t,n,r){var l=t.current,i=ue(),o=mt(l);return n=Qc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,o),e!==null&&(De(e,l,o,i),Fr(e,l,o)),o}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ls(e,t){xa(e,t),(e=e.alternate)&&xa(e,t)}function Op(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function is(e){this._internalRoot=e}Ll.prototype.render=is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));zl(e,t,null,null)};Ll.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){zl(null,e,null,null)}),t[Ge]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Cu(e)}};function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wa(){}function Mp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=hl(o);i.call(c)}}var o=Zc(t,r,e,0,null,!1,!1,"",wa);return e._reactRootContainer=o,e[Ge]=o.current,Gn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=hl(u);s.call(c)}}var u=rs(e,0,!1,null,null,!1,!1,"",wa);return e._reactRootContainer=u,e[Ge]=u.current,Gn(e.nodeType===8?e.parentNode:e),At(function(){zl(t,u,n,r)}),u}function Il(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=hl(o);s.call(u)}}zl(t,o,e,l)}else o=Mp(n,t,e,l,r);return hl(o)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(Eo(t,n|1),ye(t,K()),!(O&6)&&(mn=K()+500,kt()))}break;case 13:At(function(){var r=Je(e,1);if(r!==null){var l=ue();De(r,e,1,l)}}),ls(e,1)}};Co=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ue();De(t,e,134217728,n)}ls(e,134217728)}};Nu=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=ue();De(n,e,t,r)}ls(e,t)}};ju=function(){return M};Eu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ei=function(e,t,n){switch(t){case"input":if(yi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Nl(r);if(!l)throw Error(S(90));nu(r),yi(r,l)}}}break;case"textarea":lu(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};du=bo;fu=At;var Up={usingClientEntryPoint:!1,Events:[cr,Yt,Nl,uu,cu,bo]},_n={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dp={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||Op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{xl=Ir.inject(Dp),Ve=Ir}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Up;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!os(t))throw Error(S(200));return Ip(e,t,null,n)};Ne.createRoot=function(e,t){if(!os(e))throw Error(S(299));var n=!1,r="",l=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=rs(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,Gn(e.nodeType===8?e.parentNode:e),new is(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return At(e)};Ne.hydrate=function(e,t,n){if(!Rl(t))throw Error(S(200));return Il(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!os(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Zc(t,null,e,1,n??null,l,!1,i,o),e[Ge]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ll(t)};Ne.render=function(e,t,n){if(!Rl(t))throw Error(S(200));return Il(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(S(40));return e._reactRootContainer?(At(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};Ne.unstable_batchedUpdates=bo;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Il(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc)}catch(e){console.error(e)}}Yc(),Ya.exports=Ne;var Ap=Ya.exports,ka=Ap;di.createRoot=ka.createRoot,di.hydrateRoot=ka.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const Sa="popstate";function Fp(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:s}=r.location;return lo("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:vl(l)}return $p(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ss(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bp(){return Math.random().toString(36).substr(2,8)}function Na(e,t){return{usr:e.state,key:e.key,idx:t}}function lo(e,t,n,r){return n===void 0&&(n=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||Bp()})}function vl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $p(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=st.Pop,u=null,c=v();c==null&&(c=0,o.replaceState(ir({},o.state,{idx:c}),""));function v(){return(o.state||{idx:null}).idx}function h(){s=st.Pop;let N=v(),f=N==null?null:N-c;c=N,u&&u({action:s,location:g.location,delta:f})}function p(N,f){s=st.Push;let d=lo(g.location,N,f);c=v()+1;let m=Na(d,c),y=g.createHref(d);try{o.pushState(m,"",y)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(y)}i&&u&&u({action:s,location:g.location,delta:1})}function w(N,f){s=st.Replace;let d=lo(g.location,N,f);c=v();let m=Na(d,c),y=g.createHref(d);o.replaceState(m,"",y),i&&u&&u({action:s,location:g.location,delta:0})}function x(N){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof N=="string"?N:vl(N);return d=d.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let g={get action(){return s},get location(){return e(l,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Sa,h),u=N,()=>{l.removeEventListener(Sa,h),u=null}},createHref(N){return t(l,N)},createURL:x,encodeLocation(N){let f=x(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:w,go(N){return o.go(N)}};return g}var ja;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ja||(ja={}));function Vp(e,t,n){return n===void 0&&(n="/"),Hp(e,t,n)}function Hp(e,t,n,r){let l=typeof t=="string"?yn(t):t,i=as(l.pathname||"/",n);if(i==null)return null;let o=Xc(e);Wp(o);let s=null;for(let u=0;s==null&&u<o.length;++u){let c=n0(i);s=bp(o[u],c)}return s}function Xc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=vt([r,u.relativePath]),v=n.concat(u);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Xc(i.children,t,v,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Jp(c,i.index),routesMeta:v})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let u of Gc(i.path))l(i,o,u)}),t}function Gc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Gc(r.join("/")),s=[];return s.push(...o.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Wp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qp=/^:[\w-]+$/,Zp=3,Kp=2,Yp=1,Xp=10,Gp=-2,Ea=e=>e==="*";function Jp(e,t){let n=e.split("/"),r=n.length;return n.some(Ea)&&(r+=Gp),t&&(r+=Kp),n.filter(l=>!Ea(l)).reduce((l,i)=>l+(Qp.test(i)?Zp:i===""?Yp:Xp),r)}function qp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function bp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,v=i==="/"?t:t.slice(i.length)||"/",h=e0({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},v),p=u.route;if(!h)return null;Object.assign(l,h.params),o.push({params:l,pathname:vt([i,h.pathname]),pathnameBase:s0(vt([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=vt([i,h.pathnameBase]))}return o}function e0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=t0(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,v,h)=>{let{paramName:p,isOptional:w}=v;if(p==="*"){let g=s[h]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const x=s[h];return w&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function t0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ss(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function n0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ss(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function as(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,l0=e=>r0.test(e);function i0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?yn(e):e,i;if(n)if(l0(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ss(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Ca(n.substring(1),"/"):i=Ca(n,t)}else i=t;return{pathname:i,search:a0(r),hash:u0(l)}}function Ca(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ci(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jc(e,t){let n=o0(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=yn(e):(l=ir({},e),X(!l.pathname||!l.pathname.includes("?"),ci("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),ci("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),ci("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;l.pathname=p.join("/")}s=h>=0?t[h]:"/"}let u=i0(l,s),c=o&&o!=="/"&&o.endsWith("/"),v=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||v)&&(u.pathname+="/"),u}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),s0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),a0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,u0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function c0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bc=["post","put","patch","delete"];new Set(bc);const d0=["get",...bc];new Set(d0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function or(){return or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},or.apply(this,arguments)}const us=k.createContext(null),f0=k.createContext(null),$t=k.createContext(null),Ol=k.createContext(null),St=k.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=k.createContext(null);function p0(e,t){let{relative:n}=t===void 0?{}:t;fr()||X(!1);let{basename:r,navigator:l}=k.useContext($t),{hash:i,pathname:o,search:s}=nd(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:vt([r,o])),l.createHref({pathname:u,search:s,hash:i})}function fr(){return k.useContext(Ol)!=null}function pr(){return fr()||X(!1),k.useContext(Ol).location}function td(e){k.useContext($t).static||k.useLayoutEffect(e)}function xn(){let{isDataRoute:e}=k.useContext(St);return e?C0():m0()}function m0(){fr()||X(!1);let e=k.useContext(us),{basename:t,future:n,navigator:r}=k.useContext($t),{matches:l}=k.useContext(St),{pathname:i}=pr(),o=JSON.stringify(Jc(l,n.v7_relativeSplatPath)),s=k.useRef(!1);return td(()=>{s.current=!0}),k.useCallback(function(c,v){if(v===void 0&&(v={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=qc(c,JSON.parse(o),i,v.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:vt([t,h.pathname])),(v.replace?r.replace:r.push)(h,v.state,v)},[t,r,o,i,e])}function cs(){let{matches:e}=k.useContext(St),t=e[e.length-1];return t?t.params:{}}function nd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext($t),{matches:l}=k.useContext(St),{pathname:i}=pr(),o=JSON.stringify(Jc(l,r.v7_relativeSplatPath));return k.useMemo(()=>qc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function h0(e,t){return v0(e,t)}function v0(e,t,n,r){fr()||X(!1);let{navigator:l}=k.useContext($t),{matches:i}=k.useContext(St),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=pr(),v;if(t){var h;let N=typeof t=="string"?yn(t):t;u==="/"||(h=N.pathname)!=null&&h.startsWith(u)||X(!1),v=N}else v=c;let p=v.pathname||"/",w=p;if(u!=="/"){let N=u.replace(/^\//,"").split("/");w="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=Vp(e,{pathname:w}),g=k0(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:vt([u,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:vt([u,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return t&&g?k.createElement(Ol.Provider,{value:{location:or({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:st.Pop}},g):g}function g0(){let e=E0(),t=c0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:l},n):null,null)}const y0=k.createElement(g0,null);class x0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(St.Provider,{value:this.props.routeContext},k.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w0(e){let{routeContext:t,match:n,children:r}=e,l=k.useContext(us);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(St.Provider,{value:t},r)}function k0(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let v=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);v>=0||X(!1),o=o.slice(0,Math.min(o.length,v+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<o.length;v++){let h=o[v];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=v),h.route.id){let{loaderData:p,errors:w}=n,x=h.route.loader&&p[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((v,h,p)=>{let w,x=!1,g=null,N=null;n&&(w=s&&h.route.id?s[h.route.id]:void 0,g=h.route.errorElement||y0,u&&(c<0&&p===0?(P0("route-fallback"),x=!0,N=null):c===p&&(x=!0,N=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,p+1)),d=()=>{let m;return w?m=g:x?m=N:h.route.Component?m=k.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=v,k.createElement(w0,{match:h,routeContext:{outlet:v,matches:f,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?k.createElement(x0,{location:n.location,revalidation:n.revalidation,component:g,error:w,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var rd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rd||{}),ld=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ld||{});function S0(e){let t=k.useContext(us);return t||X(!1),t}function N0(e){let t=k.useContext(f0);return t||X(!1),t}function j0(e){let t=k.useContext(St);return t||X(!1),t}function id(e){let t=j0(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function E0(){var e;let t=k.useContext(ed),n=N0(),r=id();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function C0(){let{router:e}=S0(rd.UseNavigateStable),t=id(ld.UseNavigateStable),n=k.useRef(!1);return td(()=>{n.current=!0}),k.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,or({fromRouteId:t},i)))},[e,t])}const Pa={};function P0(e,t,n){Pa[e]||(Pa[e]=!0)}function _0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ee(e){X(!1)}function T0(e){let{basename:t="/",children:n=null,location:r,navigationType:l=st.Pop,navigator:i,static:o=!1,future:s}=e;fr()&&X(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:i,static:o,future:or({v7_relativeSplatPath:!1},s)}),[u,s,i,o]);typeof r=="string"&&(r=yn(r));let{pathname:v="/",search:h="",hash:p="",state:w=null,key:x="default"}=r,g=k.useMemo(()=>{let N=as(v,u);return N==null?null:{location:{pathname:N,search:h,hash:p,state:w,key:x},navigationType:l}},[u,v,h,p,w,x,l]);return g==null?null:k.createElement($t.Provider,{value:c},k.createElement(Ol.Provider,{children:n,value:g}))}function z0(e){let{children:t,location:n}=e;return h0(io(t),n)}new Promise(()=>{});function io(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,l)=>{if(!k.isValidElement(r))return;let i=[...t,l];if(r.type===k.Fragment){n.push.apply(n,io(r.props.children,i));return}r.type!==Ee&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=io(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}function L0(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function R0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I0(e,t){return e.button===0&&(!t||t==="_self")&&!R0(e)}function so(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(l=>[n,l]):[[n,r]])},[]))}function O0(e,t){let n=so(e);return t&&t.forEach((r,l)=>{n.has(l)||t.getAll(l).forEach(i=>{n.append(l,i)})}),n}const M0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],U0="6";try{window.__reactRouterVersion=U0}catch{}const D0="startTransition",_a=Cd[D0];function A0(e){let{basename:t,children:n,future:r,window:l}=e,i=k.useRef();i.current==null&&(i.current=Fp({window:l,v5Compat:!0}));let o=i.current,[s,u]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},v=k.useCallback(h=>{c&&_a?_a(()=>u(h)):u(h)},[u,c]);return k.useLayoutEffect(()=>o.listen(v),[o,v]),k.useEffect(()=>_0(r),[r]),k.createElement(T0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U=k.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:u,to:c,preventScrollReset:v,viewTransition:h}=t,p=L0(t,M0),{basename:w}=k.useContext($t),x,g=!1;if(typeof c=="string"&&B0.test(c)&&(x=c,F0))try{let m=new URL(window.location.href),y=c.startsWith("//")?new URL(m.protocol+c):new URL(c),j=as(y.pathname,w);y.origin===m.origin&&j!=null?c=j+y.search+y.hash:g=!0}catch{}let N=p0(c,{relative:l}),f=$0(c,{replace:o,state:s,target:u,preventScrollReset:v,relative:l,viewTransition:h});function d(m){r&&r(m),m.defaultPrevented||f(m)}return k.createElement("a",oo({},p,{href:x||N,onClick:g||i?r:d,ref:n,target:u}))});var Ta;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ta||(Ta={}));var za;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(za||(za={}));function $0(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,u=xn(),c=pr(),v=nd(e,{relative:o});return k.useCallback(h=>{if(I0(h,n)){h.preventDefault();let p=r!==void 0?r:vl(c)===vl(v);u(e,{replace:p,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[c,u,v,r,l,n,e,i,o,s])}function V0(e){let t=k.useRef(so(e)),n=k.useRef(!1),r=pr(),l=k.useMemo(()=>O0(r.search,n.current?null:t.current),[r.search]),i=xn(),o=k.useCallback((s,u)=>{const c=so(typeof s=="function"?s(l):s);n.current=!0,i("?"+c,u)},[i,l]);return[l,o]}const ao=[{id:"1",username:"admin",password:"admin123",nickname:"管理员",avatar:"👑",role:"admin",createdAt:"2024-01-01T00:00:00Z"},{id:"2",username:"yuanjueshen",password:"200427",nickname:"管理员",avatar:"👑",role:"admin",createdAt:"2024-04-21T00:00:00Z"},{id:"3",username:"yuanjueshen",password:"yuanjueshen",nickname:"缘绝神",avatar:"🌟",role:"user",createdAt:"2024-04-21T00:00:00Z"},{id:"4",username:"legendhunter",password:"legendhunter",nickname:"都市传说爱好者",avatar:"🔍",role:"user",createdAt:"2023-01-01T00:00:00Z"},{id:"5",username:"paranormal",password:"paranormal",nickname:"灵异调查员",avatar:"📷",role:"user",createdAt:"2023-01-01T00:00:00Z"},{id:"6",username:"夜行笔录",password:"夜行笔录",nickname:"夜行笔录",avatar:"🌙",role:"user",createdAt:"2023-11-01T00:00:00Z"},{id:"7",username:"灰港晚报记者",password:"灰港晚报记者",nickname:"灰港晚报记者",avatar:"📰",role:"user",createdAt:"2020-01-01T00:00:00Z"},{id:"8",username:"灰港市人民政府",password:"灰港市人民政府",nickname:"灰港市人民政府",avatar:"🏛️",role:"admin",createdAt:"2020-01-01T00:00:00Z"},{id:"9",username:"灰港市文化宫善后工作组",password:"善后工作组",nickname:"灰港市文化宫善后工作组",avatar:"📋",role:"admin",createdAt:"2020-10-01T00:00:00Z"},{id:"10",username:"雨夜慢行者",password:"jideichiyao",nickname:"梦里不知身是客",avatar:"🌧️",role:"user",createdAt:"2023-09-01T00:00:00Z"},{id:"11",username:"linxiaoyu",password:"jideichiyao",nickname:"时间旅人小雨",avatar:"⏰",role:"user",createdAt:"2020-09-15T00:00:00Z"},{id:"12",username:"LUCA",password:"12210301",nickname:"LUCA",avatar:"🌿",role:"user",createdAt:"2026-04-01T00:00:00Z"}],H0=[{id:"1",name:"都市传说",description:"民间流传的诡异故事与传闻",icon:"👻",postCount:52},{id:"2",name:"灵异事件",description:"亲身经历的灵异见闻与遭遇",icon:"🔮",postCount:83},{id:"3",name:"未解之谜",description:"悬而未决的历史谜团与秘密",icon:"❓",postCount:29},{id:"4",name:"深夜怪谈",description:"午夜时分分享的恐怖故事",icon:"🌑",postCount:156},{id:"5",name:"档案室",description:"历史档案、神秘文献与资料",icon:"📜",postCount:12},{id:"6",name:"公告栏",description:"论坛公告与站务信息",icon:"📢",postCount:2},{id:"7",name:"官方公告",description:"政府部门发布的正式公告与情况说明",icon:"🏛️",postCount:1},{id:"8",name:"都市探险",description:"探索城市中被遗忘的角落与秘境",icon:"🔦",postCount:1}],uo=[{id:"1",title:"欢迎来到流水无涯！",content:`🌊 欢迎各位来到【流水无涯】！

如流水般自由，如天涯般无界。
这是一个属于我们的 BBS 论坛，愿每位旅人都能在此找到属于自己的角落。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 **新手提醒**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ **初始密码说明**
   新注册的账号，初始密码与账号名相同。
   例如：账号为 abc，则密码也为 abc。
   登录后请及时修改密码！

2️⃣ **发现隐藏内容**
   有些有趣的内容不会被推送到首页，
   需要通过**搜索功能**才能发现。
   不妨试试搜索一些关键词，也许会有惊喜哦~

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 **论坛规则**

• 请友善交流，互相尊重
• 发帖前可先搜索是否有相关内容
• 广告、灌水等行为会被删除
• 遇到问题请联系管理员

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

祝大家在这里度过愉快的时光！

愿流水不争先，争的是滔滔不绝。
愿我们都能在此相遇，共赴天涯。

---
*—— 缘绝神*`,authorId:"3",authorName:"缘绝神",category:"公告栏",tags:["公告","欢迎","新手"],views:666,likes:88,createdAt:"2024-04-21T00:00:00Z",updatedAt:"2024-04-21T00:00:00Z",replies:[]},{id:"2",title:"深夜整理爷爷遗物，发现一张诡异的地图，上面有串红色数字",content:`凌晨睡不着，想起父亲交代整理爷爷留在老房子的遗物。

爷爷三年前在文化宫看门时去世，死因是"意外坠落"，但家里人都觉得蹊跷。他去世前一周，突然把所有的日记、照片都烧了，只留下一句话："有些东西，不知道比知道好。"

今晚，我在他床底下的暗格里找到一个生锈的铁盒。打开后，里面只有三样东西：

一张泛黄的手绘地图

半截烧焦的日记页

一个老式怀表，指针永远停在3:01

最让我后背发凉的是那张地图。

地图画的是文化宫及周边区域，笔迹是爷爷的，但用的不是普通墨水。父亲说，爷爷晚年眼睛不好，用的是特制的、掺了朱砂的墨——他说这样"脏东西看不见"。

地图上有几个用红圈标注的地点：

文化宫地下室入口（旁边写"勿入"）

早市西三摊（写"李记，可信？"）

和平电影院废墟（写"镜中之门"）

一棵老槐树（写"她在这里"）

但最诡异的是地图右下角，用那种朱砂墨写着一串数字：

12210301

字迹很深，几乎要渗破纸背，像是用很大力气反复描画的。

我用手电筒侧光照射时，发现这串数字的投影在墙上会微微蠕动。我拍了视频，但手机拍不出来，肉眼却能清楚看到——那些数字的影子像是有生命一样，在墙上扭成奇怪的形状。

![爷爷留下的诡异地图](/images/map-mystery.svg)

更奇怪的是那半页日记，烧剩下的部分写着：

"...他们找到了那个地方，用八个数字作为钥匙。1221是门，0301是锁。但钥匙转动时，开门的不一定是人。"

"老李说，要在正确的时间去正确的地点。12步，21步，转身，3声叹息，等待第1个来访者。"

"但来访者是谁？是'她'吗？槐树下的那个..."

后面就被烧掉了。

我查了爷爷的死亡时间——正好是凌晨3:01。警方报告说他是从文化宫天台坠落，但监控只拍到他走上天台，没拍到他坠落的过程。天台的铁门上，有用指甲划出的痕迹，后来鉴定是"1221"四个数字。

父亲不让我继续查，说爷爷留下话："如果后人看到地图和数字，必须在一个特定的时辰处理掉——冬至日凌晨3:01，在槐树下烧了，灰撒进江里。否则'通道'会打开。"

可今年冬至是12月21日。

1221。

我现在握着这张地图，看着怀表停驻的3:01，不知道该怎么办。

那些数字到底是什么意思？爷爷说的"她"是谁？老槐树下有什么？

还有，从昨晚开始，我总觉得有人在我家窗外数数：1...2...2...1...0...3...0...1... 每隔几小时一次，但每次我拉开窗帘，外面什么都没有。

是幻觉吗？还是爷爷想告诉我什么？`,authorId:"6",authorName:"夜行笔录",category:"都市传说",tags:["灵异事件","老物件","数字谜题"],views:2334,likes:567,createdAt:"2023-11-05T03:01:00Z",updatedAt:"2023-11-05T03:01:00Z",replies:[{id:"r1",postId:"2",content:`补充：我刚用手机录音，录到了窗外的数数声。上传了音频文件，你们听听。
[附件：counting.wav 时长00:08]
（音频内容：一个苍老的男声，缓慢地念"1...2...2...1...0...3...0...1..."，背景有轻微的风声）`,authorId:"6",authorName:"夜行笔录（楼主）",createdAt:"2023-11-05T03:15:00Z",likes:89},{id:"r2",postId:"2",content:"卧槽，大半夜的给我看毛了。楼主你爷爷是不是参与了什么邪教仪式？数字12210301可能是某种召唤密码？",authorId:"4",authorName:"都市传说爱好者",createdAt:"2023-11-05T05:20:00Z",likes:45},{id:"r3",postId:"2",content:'不是邪教。爷爷一辈子唯物，退休前是文化宫的档案管理员。但他去世前半年，突然开始研究"数字命理"和"空间坐标"，说"文化宫底下有东西"。',authorId:"6",authorName:"夜行笔录（楼主）",createdAt:"2023-11-05T08:30:00Z",likes:23},{id:"r4",postId:"2",content:'楼主，你爷爷说的"12步，21步，转身，3声叹息，等待第1个来访者"可能是仪式步骤。12210301拆开就是12、21、3、01。这可能是进入某个地方的"路径密码"。',authorId:"5",authorName:"灵异调查员",createdAt:"2023-11-05T10:15:00Z",likes:67}]},{id:"3",title:"【内容违规】帖子已被下架处理",content:`🔒 此内容因违规已被下架

该帖子包含以下违规内容：
• 涉及未成年人失踪相关敏感信息
• 可能引发公众恐慌的不实信息
• 未经证实的违法犯罪线索

如有相关线索，请直接向警方报案。

---
*—— 流水无涯管理员*
*下架时间：2023-11-06*`,authorId:"6",authorName:"夜行笔录",category:"都市传说",tags:["已下架"],views:0,likes:0,createdAt:"2023-11-06T01:15:00Z",updatedAt:"2023-11-06T08:00:00Z",replies:[],isHidden:!0,hiddenContent:`现在是凌晨一点十五分。

我在文化宫后院，老槐树下。手电筒的光勉强照亮脚下的石板路。

十分钟前，我找到了那个地方——爷爷地图上标注的地下室入口。它就在槐树正东十二步、正北二十一步的位置，一块松动的地砖下面。我掀开地砖时，灰土簌簌落下，露出一个生锈的铁环。

铁环上系着一条褪色的红布条，布条上用墨水写着：12210301。

字迹是爷爷的。我认得。

我盯着那串数字看了很久。12210301。这个数字从我找到爷爷的地图开始，就像鬼魅一样缠着我。它出现在地图角落，出现在爷爷烧焦的日记残页，出现在我窗外若有若无的念数声里，现在，又出现在这个地窖入口。

但我必须下去。

因为我妹妹小雨的粉色发夹，就掉在铁环旁边。

发夹上沾着泥，但还很新。小雨两个月前失踪，她最后出现的地点就是文化宫早市。警察搜过三遍，说没线索。但他们没找到这个入口——这个只有我爷爷的地图上有标注，只有那串数字12210301指引的入口。

我不知道下面有什么。爷爷的日记里写过："地下有东西，不该被打开的东西。"但他也写过："如果小雨出事，就去地下。钥匙是12210301。时间是凌晨三点零一分。"

现在是1:15。我还有一小时四十六分钟。

我带了一把登山杖（当探路棍）、强光手电、两节备用电池、一把瑞士军刀、还有爷爷留下的那个老式怀表——指针永远停在3:01。我不知道带它有什么用，但我觉得应该带着。

哦，还有手机。电量78%。我在口袋里放了充电宝。如果我还能发消息，我会在这个帖子更新。

如果我长时间没更新——

不，不该想这些。

我必须相信，小雨在下面。还活着。

这听起来很疯狂，对吧？一个失踪两个月的女孩，可能被关在文化宫的地下室？警察都搜不到的地方？但我就是这样相信的。因为昨晚我做了个梦，梦里小雨对我说："哥，12210301。来带我回家。"

她穿着失踪那天穿的蓝色外套，站在一片黑暗里，背后有微弱的绿光。她一直在重复那串数字，像念咒语。

醒来时，我发现自己坐在电脑前，浏览器开着这个论坛，光标在发帖框里闪烁。而我左手手背上，不知道什么时候，用红色圆珠笔写下了12210301。

不是我写的。至少我不记得我写过。

但我认得那个字迹——和小时候，爷爷握着我的手，教我写名字时的笔触一模一样。圆润，用力，每个数字都描得很深。

所以，我来了。

地窖的盖子很沉。我拽动铁环时，铰链发出刺耳的"嘎吱——"声，在寂静的夜里传得很远。一股陈年的、带着霉味和尘土的气息涌上来，里面还混着一丝若有若无的香味——像寺庙里的线香，但更甜腻一些。

我用手电照下去。石阶，很陡，通向深不见底的黑暗。

石阶第一级上，又刻着那串数字：12210301。这次是刻上去的，很旧。

我数了数，台阶一共二十一阶。到一半的地方，有个转角。

我不知道下面有什么。可能有老鼠，有蜘蛛，有积水。也可能有别的。

但我得下去。为了小雨。

我会尽量每半小时更新一次这个帖子。如果我三点零一分还没更新，那可能就……

不，不会的。我会带着小雨出来。然后在早餐店吃豆浆油条，听她抱怨"哥你太慢了"。

就这样吧。我下去了。`},{id:"4",title:'文化宫地下室发现不明涂鸦，疑似与"夜行笔录"失踪有关',content:`【灰港晚报 2023-11-07 09:00】

昨日凌晨，文化宫外市场的保安听见异响，在文化宫地下室发现新鲜涂鸦，红色颜料写着"12210301"，旁边有挣扎痕迹。监控显示凌晨1点左右有一名年轻男子进入，未见他离开。警方已介入调查。

记者在现场看到，涂鸦位于地下室入口处的砖墙上，红色颜料尚未完全干透。涂鸦下方有一行小字："小雨，哥哥来了。下一个编号是——"

据文化宫周边商户反映，失踪男子林夜（化名）系本地论坛"流水无涯"用户，曾多次在论坛上发布关于其妹妹林小雨失踪案的调查帖。林小雨于今年9月在文化宫早市附近失踪，至今下落不明。

警方表示，目前案件正在进一步调查中，呼吁市民提供线索。

---

*—— 灰港晚报记者*`,authorId:"7",authorName:"灰港晚报记者",category:"都市传说",tags:["失踪案","文化宫","涂鸦"],views:1892,likes:234,createdAt:"2023-11-07T09:00:00Z",updatedAt:"2023-11-07T09:00:00Z",replies:[{id:"r5",postId:"4",content:'12210301...这串数字之前在论坛上看过，"夜行笔录"发的帖子里提到过。这案子越来越诡异了。',authorId:"4",authorName:"都市传说爱好者",createdAt:"2023-11-07T10:30:00Z",likes:56},{id:"r6",postId:"4",content:"希望尽快找到人。不管发生了什么，一条命比什么都重要。",authorId:"5",authorName:"灵异调查员",createdAt:"2023-11-07T11:45:00Z",likes:78}]},{id:"5",title:"急寻！23岁女孩文化宫早市附近失踪，最后出现时穿蓝色外套",content:`【灰港晚报 2023-09-20 08:15】

失踪者林小雨，23岁，身高165cm，体型偏瘦，黑色长发。最后一次被监控拍到是9月18日上午7时20分，出现在文化宫早市西侧入口处，身穿浅蓝色牛仔外套、深色长裤，背黑色双肩包。

据家属介绍，林小雨在市区一家设计公司工作，平时作息规律。9月18日（周一）早晨，她像往常一样出门上班，但当天并未到岗。同事联系未果后通知家属，家人于当晚报警。

"她出门前一切正常，还跟我说晚上想吃火锅。"林小雨的哥哥林夜（化名）在接受本报采访时表示，"手机从上午八点半开始就无法接通，最后定位信号消失在文化宫附近。"

警方调取监控发现，林小雨在早市入口短暂停留后，拐进了旁边一条小巷。该小巷另一端的监控未拍到她出来的画面。小巷内有多条岔路和几处老式居民楼入口，搜查工作正在进行。

"目前没有发现暴力拖拽或挣扎的痕迹。"办案民警表示，"但该区域监控覆盖不全，给搜寻带来一定困难。我们正在逐户走访排查。"

据早市摊贩回忆，当天早晨曾看到一名特征相符的年轻女性在巷口徘徊。"她好像在等人，看了好几次手机，后来又往巷子里看了看，就进去了。"卖蔬菜的李阿姨说，"当时没觉得有什么异常。"

如有线索，请立即拨打110或联系林家：138****5521。

---

*—— 灰港晚报*`,authorId:"7",authorName:"灰港晚报",category:"都市传说",tags:["寻人","失踪","文化宫"],views:4521,likes:892,createdAt:"2023-09-20T08:15:00Z",updatedAt:"2023-09-20T08:15:00Z",replies:[{id:"r7",postId:"5",content:"转发帮忙！希望尽快找到人！",authorId:"4",authorName:"都市传说爱好者",createdAt:"2023-09-20T09:00:00Z",likes:23},{id:"r8",postId:"5",content:"那条小巷我也走过，挺偏僻的。希望只是走错了路。",authorId:"5",authorName:"灵异调查员",createdAt:"2023-09-20T10:20:00Z",likes:15}]},{id:"6",title:"文化宫即日起全面封闭",content:`【灰港市人民政府通告 2020-11-10】

经市政府研究决定，文化宫建筑群自2020年11月10日18时起全面封闭。

**封闭依据：**

• 建筑检测显示主体结构裂缝、地基沉降等重大安全隐患
• 近两月连续发生林小雨、林夜兄妹失踪案
• 地下室发现与案件相关涂鸦及不明血迹
• 存在至少三层未登记地下空间，结构不明

**封闭措施：**

• 周边设置围挡及24小时监控
• 禁止一切人员、车辆进入
• 原早市永久关闭，商户另行安置
• 所有活动取消或移址

**后续安排：**

将进行彻底安全检测，并根据结果决定修复或拆除。失踪案调查同步进行。

警方呼吁：市民切勿擅自进入，提供相关线索请拨打110。

（此决定长期有效，重开时间另行通知）

---

*—— 灰港市人民政府*`,authorId:"8",authorName:"灰港市人民政府",category:"公告栏",tags:["公告","封闭","安全"],views:8765,likes:432,createdAt:"2020-11-10T10:00:00Z",updatedAt:"2020-11-10T10:00:00Z",replies:[]},{id:"7",title:"【紧急】妹妹林小雨失踪两天，监控最后出现在文化宫早市",content:`我是失踪者林小雨的哥哥林夜。这是我妹妹的照片：

![林小雨证件照](/images/证件照.png)

![生活照-咖啡馆看书](/images/生活照.png)

![失踪当天衣着-蓝色外套](/images/失踪穿搭照.png)

**姓名：** 林小雨
**年龄：** 23岁
**失踪时间：** 2023年9月18日上午7:20后
**失踪地点：** 文化宫早市西侧小巷入口

---

**特征：**

• 身高165cm，体重约50kg
• 黑色长发，通常扎马尾
• 左手腕有一条红色编织手绳（她自己编的）
• 下巴右侧有一颗小痣
• 说话声音轻柔，略带南方口音
• 性格内向，怕生

---

**当天情况：**

9月18日（周一）早晨6:50，小雨像往常一样出门上班。她公司在文化宫附近，通常会穿过早市买早餐。7:20，早市入口监控拍到她。之后她拐进西侧小巷（通往几栋老居民楼和一个废弃的社区活动中心），再也没有出来。

---

**重要细节：**

• 她失踪前一晚（9月17日）曾对我说，最近总是做奇怪的梦，梦里有人对她念数字。我以为是工作压力大，没太在意。
• 她手机最后信号位置在文化宫建筑群内，时间7:28。
• 她背的黑色双肩包里，除了日常物品，还有一本硬壳笔记本。她最近有记梦的习惯。
• 她最近在调查我们爷爷的一些旧事。爷爷三年前在文化宫去世，死因是意外坠落。小雨总觉得爷爷的死有疑点。

---

**监控截图（警方已取证，此图为家属公开部分）：**

![监控画面-背影正拐进小巷](/images/监控图片.png)

---

**我们已做的：**

✅ 已报警，警方立案侦查
✅ 在失踪区域张贴寻人启事
✅ 联系了所有亲友、同学、同事
✅ 查看了她能想到的所有去处

---

**我们需要帮助：**

如果您在9月18日早晨在文化宫早市附近：

• 见过我妹妹
• 见过任何可疑人员或车辆
• 有相关行车记录仪、店铺监控
• 了解文化宫那片老建筑的情况

任何线索，无论多微小，都可能至关重要。请联系我：**138****1234**，或直接联系警方。

我妹妹身体不太好，有轻微哮喘，需要定期用药。她已经两天没用药了。

拜托大家了。扩散就是帮助。

---

**楼主更新 9月20日 14:20：**

谢谢大家的关注和转发。警方刚刚告知，在小巷深处发现了小雨的一只白色运动鞋。鞋子落在通往文化宫后院的小径上，鞋带是解开的，像是脱下来的而不是挣扎时掉落。旁边没有其他痕迹。

后院那扇铁门平时是锁着的，但今天发现锁被撬过，痕迹很新。门后是文化宫主建筑和那棵老槐树。

警方已进入后院搜查。我在现场等消息。

---

**楼主更新 9月20日 16:45：**

在槐树下找到了小雨的红色编织手绳。完好无损，像是被小心放在树根处的。

树下泥土有近期翻动的痕迹，但不太明显。警方准备用探地雷达检查。

我看到了那棵树。树干上有很多刻字，大多模糊了。但有一处很新的刻痕，像是用钥匙或硬物划的——是八个数字：**12210301**。

这个数字……就是小雨说她梦里听到的声音……`,authorId:"6",authorName:"寻找小雨",category:"寻人求助",tags:["紧急寻人","妹妹失踪","文化宫"],views:3267,likes:567,createdAt:"2023-09-20T10:30:00Z",updatedAt:"2023-09-20T16:45:00Z",replies:[{id:"r9",postId:"7",content:"扩散！希望能尽快找到人！",authorId:"4",authorName:"都市传说爱好者",createdAt:"2023-09-20T11:00:00Z",likes:45},{id:"r10",postId:"7",content:"12210301...这个数字好眼熟。楼主你妹妹之前有没有提过什么奇怪的事？",authorId:"5",authorName:"灵异调查员",createdAt:"2023-09-20T12:30:00Z",likes:23},{id:"r11",postId:"7",content:"我住在那附近，9月18日早上确实看到过一个穿蓝色外套的女孩在巷口站着，好像在看手机。后来就没注意了。希望她平安。",authorId:"3",authorName:"缘绝神",createdAt:"2023-09-20T14:00:00Z",likes:89}]},{id:"8",title:"关于原文化宫部分职工情况的公告说明",content:`**发帖人：** 灰港市文化宫善后工作组
**发帖时间：** 2020-10-10 15:00
**板块：** 官方公告
**标签：** #情况说明 #职工档案 #历史遗留

---

# 关于原文化宫（1978-2008年）部分在编职工档案情况的说明

近期，因文化宫相关事件引发社会关注，工作组在整理、核实历史档案过程中，发现部分职工情况存在记录不明、信息矛盾等问题。本着尊重历史、澄清事实的原则，现就目前已核实情况公告如下：

---

## 一、职工编码说明

1978年文化宫建立初期，为规范管理，对所有在编职工实行"区域-工号"双段编码制度：

- **前四位"1221"**：指文化宫主楼1区2号楼2层1号档案室（人事档案存放点）
- **后四位**：职工个人唯一编号，按入职顺序分配

---

## 二、部分职工情况核实表（按编号排序）

| 职工编号 | 姓名 | 入职时间 | 离职/终止时间 | 目前状态 | 备注说明 |
|---------|------|---------|-------------|---------|---------|
| 12210301 | 张守拙 | 1978.12.21 | 2008.03.01 | 已故 | 2008年3月1日于文化宫意外坠亡，警方结论为意外。家属无异议。 |
| 12210520 | 王秀兰 | 1979.05.20 | 2005.11.15 | 已故 | 2005年11月15日和平电影院火灾遇难，系观众，非当值。与工作无关。 |
| 12210630 | 钱卫国 | 1981.06.30 | 2002.07.30 | 失踪 | 2002年7月30日下班后未归，警方立案侦查，至今未结案。最后一次出现于港区。 |
| 12210707 | 赵建国 | 1982.07.07 | 2015.03.12 | 已故 | 2015年3月12日因病去世，已办理完所有善后手续。 |
| 12210825 | 孙丽华 | 1983.08.25 | 1999.10.08 | 已故 | 1999年10月8日交通事故去世，对方全责。 |
| 12210918 | 张晓梅 | 1984.09.18 | 2003.12.25 | 已故 | 2003年12月25日下班途中遭遇抢劫受伤，次年并发症去世。 |
| 12211001 | 周志强 | 1985.10.01 | 2010.11.11 | 已故 | 2010年11月11日突发脑溢血去世。 |
| 12211130 | 李国富 | 1986.11.30 | 2000.01.01 | 失踪 | 2000年1月1日（千禧年）值夜班时失踪，监控最后拍于文化宫地下室入口。重大悬案。 |

---

## 三、特别说明事项

### 关于编号连续性

档案显示，122104xx至122112xx之间存在多个空号，系因：

• 部分职工调离后编号留空
• 1989年档案室火灾损毁部分记录
• 个别编号因"特殊原因"被永久保留（按当时规定，涉及未结案的失踪人员编号不予重新分配）

### 关于"失踪"状态界定

- **李国富（12211130）** 失踪案发生于2000年1月1日，时值千禧年庆典，文化宫有大型活动。警方曾大规模搜查，无果。
- **钱卫国（12210630）** 失踪前曾向同事透露"在查一些老事情"，但未具体说明。

两人均未宣告死亡，法律状态仍为"失踪"。

### 关于死亡巧合性质疑

工作组注意到，有舆论质疑部分职工死亡时间与编号后四位存在关联。经核查：

- **王秀兰（12210520）** 死于2005年，编号后四位0520，确与死亡年份月份数字相同，经多方证实为巧合。
- **张守拙（12210301）** 编号后四位0301，死亡日期3月1日，亦为巧合。

其他职工死亡日期与编号无数字关联。法医、警方当年调查记录均显示无他杀嫌疑。

### 关于档案保密部分

因涉及个人隐私及部分未结案件，上述职工档案中以下内容仍处于保密期：

• 具体家庭住址、联系方式
• 内部处分记录
• 失踪案详细侦查卷宗
• 与编号相关的"特殊管理记录"（注：此部分为常规人事管理文件，无特别含义）

---

**灰港市文化宫善后工作组**
**2020年10月10日**`,authorId:"9",authorName:"灰港市文化宫善后工作组",category:"官方公告",tags:["情况说明","职工档案","历史遗留"],views:2341,likes:156,createdAt:"2020-10-10T15:00:00Z",updatedAt:"2020-10-10T15:00:00Z",replies:[{id:"r12",postId:"8",content:"爷爷，我一定会查清楚的。",authorId:"10",authorName:"雨夜慢行者",createdAt:"2020-10-10T18:30:00Z",likes:42},{id:"r13",postId:"8",content:"这份档案整理得很详细。但为什么2002年和2000年的失踪案到现在都没有结案？",authorId:"4",authorName:"都市传说爱好者",createdAt:"2020-10-11T09:15:00Z",likes:23},{id:"r14",postId:"8",content:"12210301...张守拙...这个编号后四位0301和死亡日期3月1日真的只是巧合吗？",authorId:"5",authorName:"灵异调查员",createdAt:"2020-10-11T14:22:00Z",likes:18},{id:"r15",postId:"8",content:"感谢工作组的公示。",authorId:"8",authorName:"灰港市人民政府",createdAt:"2020-10-12T10:00:00Z",likes:8},{id:"r16",postId:"8",content:"李和张的失踪案有没有什么共同点？",authorId:"3",authorName:"缘绝神",createdAt:"2023-11-05T20:30:00Z",likes:35}]},{id:"9",title:"在废弃文化宫的梦里，我推开了一扇本不该存在的门",content:`我知道文化宫在2020年就废弃了。

铁门生了锈，窗户破了洞，墙皮剥落得像老人的皮肤。

可我的梦里，它总是崭新的，亮着灯，人来人往。

第一个梦，我站在文化宫正门前。

时间是午夜，但里面灯火通明。我推门进去——门没锁，这不对，现实里它锁了三道锁。

大厅里有人在跳舞，穿七八十年代的衣服，跳交谊舞。音乐是《夜来香》，但节奏很慢，像唱片坏了。

一个穿深蓝色工作服的女人走过来，胸口别着工牌，牌子上写着1221。

"小雨，你来早了。"她说。

"早了多少？"我问。

"早了0301天。"她笑，牙齿很白，"不过没关系，可以先预习。"

她递给我一把钥匙，黄铜的，贴着标签："储物柜 12-21-03-01"。

"这是什么？"

"你爷爷的遗物。他走之前存在这儿的。"

"我爷爷三年前就去世了。"

"在这里，时间不是线性的。"她指指天花板，"你看。"

我抬头，看见天花板上用荧光涂料写着巨大的数字：12210301。

它们在呼吸，明暗交替，像心跳。

"这数字是什么意思？"

"是坐标，也是密码。"她说，"但你需要把它压缩。从八位压缩到五位。就像把一个人一生的故事，压缩成墓碑上的一行字。"

"怎么压缩？"

"去掉重复的，去掉无关的，留下核心。"她转身走向舞池，"下次来，告诉我答案。"

我醒来，看手机：3:01 AM。

第二个梦，我在地下室走廊。

走廊很长，两侧是无数的门，每扇门上都有门牌号。

1221-0301

1221-0520

1221-1130

……

数字是红色的，像刚用油漆刷过。

我停在0301门前。门缝下透出光，还有说话声——是我爷爷的声音，他在念数字：

"1、2、2、1、0、3、0、1……不对，顺序错了。应该是1、2、2、1、3、0、1、0？不，还是不对……"

我敲门："爷爷？"

声音停了。

过了一会儿，门里传来："密码是五位。八位是陷阱。"

"什么陷阱？"

"八位会让你永远留在这里。五位才可能出去。"

"那密码是什么？"

"从我的编号里提炼。1221是区号，0301是房号。但密码不是房号，是房号里能开门的那部分。"

"哪部分？"

"去掉第一个0，因为0是虚无。去掉最后一个1，因为1是起点。剩下030，但那是三位，不够。所以要借一位。"

"从哪里借？"

"从日期里借。我死的日子是3月1日，0301。但我的葬礼是3月3日。3和1之间，缺一个2。"

"所以密码里有2？"

"也许。也许没有。我在这里面想了三年，越想越糊涂。"

门里的声音开始哭，"小雨，别进来。千万别输错密码进来。我宁愿你忘了我。"

我醒了，手心全是汗。

时间：3:01。

第三个梦，我在一个从没见过的房间里。

房间是六边形的，每面墙上都写满数字。

正对我的那面墙，写的是12210301，但每个数字下面都标着小字：

1 - 开始

2 - 重复

2 - 镜像

1 - 回归

0 - 虚无

3 - 选择

0 - 循环

1 - 终结

穿工作服的女人站在房间中央，手里拿着一个老式转盘电话。

"来，玩个游戏。"她说，"转动转盘，输入五位密码。如果对了，电话会通。"

"通到哪里？"

"通到你爷爷的房间。你可以问他一个问题。"

"如果错了呢？"

"你会被转到'等待室'，等到下一个输错密码的人来替换你。"

我接过电话。转盘很重，每转一个数字都发出沉重的"咔哒"声。

我转了1-2-2-1-3。

忙音。

"错了一位。"女人说。

我转了1-2-1-3-1。

还是忙音。

"又错了一位。"

我转了1-2-2-1-0。

电话里传来"嘟——嘟——"的长音，然后是一个冰冷的电子音：

"密码错误。错误次数：3。锁定时间：24小时。请在现实时间9月18日凌晨3:01重试。"

女人拿回电话："你还有一次机会。下次再错，你就得留在这里了。"

"最后一次机会是什么时候？"

"9月18日，凌晨3:01。现实时间。"她说，"那天是文化宫废弃三周年纪念日。门会开一次，真正的开。"

"什么门？"

"连接梦和现实的门。"她指向地面，"这下面，在现实的文化宫地下室里，真的有一扇门，门上真的有密码锁。如果你在梦里输错了，现实里也会错。但如果你在梦里输对了……"

"现实里也会对？"

"现实里的门会开。然后你会看到，你爷爷是不是真的在里面。"

我浑身发冷："你是说，我爷爷可能还活着？在那扇门后面？"

"活着？死了？在这里，这两个词没有意义。"她开始消散，像烟一样，"记住，密码是五位。前四位是1221，最后一位是关键。关键藏在0301里，但不是3，不是0，不是1，是它们的关系。"

"什么关系？"

"3-0=3，0-1=-1，3+0+1=4，3×0×1=0……你自己想。走的时候，看看墙角的箱子。"

她完全消失了。

我走到墙角，那里有一个木箱，没上锁。打开，里面是一本日记，扉页上写着：

"如果小雨找到这个，密码提示：0301是时间，也是空间。3是楼层，0是虚无，1是房间。但密码不要虚无，要实在。所以去掉0，剩下31。但31是两位，不够，所以要借。从1221借什么？借一个'2'，因为1221有两个2。借过来，组成'2-3-1'，但顺序要调整……"

日记到这里断了，后面被撕掉了。

我醒来，第一次不是在3:01，而是在4:44。

不祥的时间。

现实调查：

昨天白天，我真的去了文化宫。

绕过围栏，从一个破碎的地下室窗户钻了进去。

里面和梦里一模一样——长长的走廊，两侧是门。

但我找到0301房间时，门是焊死的，焊痕很新，像不久前刚焊上。

门旁的墙上，有人用粉笔写着：

"密码五位数。前四位1221。最后一位是爷爷的工龄个位数。"

下面还有一行小字："但爷爷的工龄是30年，个位数0。0是虚无，不能用。所以用倒数第二位？3？"

再下面，是另一个笔迹："不对，爷爷实际工龄29年，他少算了一年。个位数9。"

然后第三个笔迹："你们都错了，密码是12213，我试过，门开了，但我没敢进。"

最后一行，是我爷爷的笔迹，我认得：

"小雨，如果是你看到这些，密码是12210。0不是虚无，是回归。输入它，然后快跑，别回头。"

四种说法。

12213

12219

12210

还有"爷爷的工龄个位数"这个谜题。

我查了爷爷的档案，他21岁进文化宫，50岁去世，工龄确实是29年。但有一年他停薪留职，所以实际领工资是28年。

个位数是8、9、0都有可能。

我拍了照，准备离开时，听到走廊深处有声音——像转电话转盘的"咔哒"声。

一下，两下，三下……五下。

然后是一个女人的轻笑。

和梦里一模一样。

我逃了出来。

所以现在，我在这里求助。

我可能9月18日凌晨（也就是后天）会再去一次，输入密码试试。

但我不知道该输入哪个。

总结一下线索：

爷爷的编号12210301，需要压缩成五位密码。

前四位确定是1221（我的生日，也是文化宫区域号）。

最后一位可能是：

3（0301的第一个数字）

0（0301的第二个数字）

1（0301的第三个数字）

9（爷爷工龄29的个位数）

8（实际工龄28的个位数）

2（1221有两个2，借一个？）

梦里提示"去掉虚无，要实在"，0代表虚无，所以可能排除0。

墙上的留言说12213有人试过，门开了但没敢进。

爷爷的留言说12210，让我快跑。

我的直觉：

也许真正的密码是12213。

因为：

1221 + 3（0301的第一个数字）

3代表"选择"，梦里墙上写的

有人试过，门开了

但爷爷让我输12210，可能是想让我输错，保护我？

或者，是12219？

因为：9是工龄个位数

9是最大的个位数，代表"终结"

爷爷去世时69岁，6+9=15，1+5=6，不对，这扯远了

又或者，密码根本不是数字，而是数字对应的位置？

比如：

1楼

2区

2栋

1单元

3号房

但那是12213，又绕回来了。

我真的需要帮助。

如果有人懂数字谜题、密码学，或者……做过类似的梦，请告诉我。

如果我后天去了，没有再回来更新这个帖子，请告诉我哥：

密码是12213。

让他去试试。

但如果他去了，也消失了，那可能这个密码是错的，是陷阱。

最后，一个奇怪的发现：

我在文化宫地下室走廊里，看到了2023年9月的新鲜脚印。

不止一个人的。

还有一个小孩子的鞋印，特别小，像五六岁孩子的。

但文化宫废弃三年了，怎么会有小孩子进去？

除非……那根本不是真的孩子。

发帖后30分钟更新：

我刚才打了个盹，就十分钟，又梦到了。

这次很短，就一句话。

那个穿工作服的女人说：

"密码的最后一位，是还活着的人数。"

"什么？"

"1221区原本有8个人，现在还剩几个活着，最后一位就是几。"

"还剩几个？"

"你自己数。"

我醒了，立刻查资料。

1221区，我爷爷那个年代的工作人员，我知道的有：

爷爷（12210301）- 已故

王姨（12210520）- 已故（电影院火灾）

李叔（12211130）- 失踪

张姐（12210918）- 已故（车祸）

赵伯（12210707）- 已故

钱哥（12210630）- 失踪

孙姐（12210825）- 已故

周叔（12211001）- 已故

8个人，死了6个，失踪2个。

如果失踪算活着，那还剩2个。

最后一位是2。

密码是12212。

但如果失踪算死了，那就是0个。

12210。

但梦里说"还活着的人数"，失踪应该算活着吧？

所以是2。

可爷爷留言说12210，他是不是认为失踪的人也死了？

还是说……那两个人，其实也已经死了，只是没找到尸体？

我不知道。

我越来越觉得，9月18日我不该去。

但我又必须去。

因为梦里那个女人最后说：

"如果你不来，你哥会替你来。他的生日也是12月21日，他也有资格。"

"别动我哥！"

"那你就自己来。带对密码。"

我可能知道我该怎么选了。

12212。

就它吧。

赌一次。`,authorId:"10",authorName:"雨夜慢行者",category:"都市探险",tags:["重复梦境","废弃建筑","数字谜题"],views:0,likes:0,createdAt:"2023-09-15T23:58:00Z",updatedAt:"2023-09-15T23:58:00Z",isHidden:!0,replies:[]},{id:"10",title:"我在2020年，但我的记忆停在2023年",content:`2020年9月25日 周五 雨

今天是我"回来"的第五天。

我还在用"回来"这个词，虽然我知道这里根本不是我的"来处"。我的来处是三年后，是那个文化宫已经废弃、哥哥已经失踪、而我正被困在地下室里的2023年。

但此刻，我坐在2020年自己的房间里，书桌上摊着大学专业课的笔记，窗外的桂花开了，香气混着雨水的湿气飘进来。一切都太真实了，真实得让人害怕。

妈妈刚才进来送水果，她摸了摸我的额头。"小雨，你这两天怎么总是发呆？身体不舒服吗？"

我看着她，2020年的妈妈，比2023年时头发更黑，眼角皱纹更少。她不知道，在她的认知里，五天前的9月20日，她的女儿突然"恢复了"——从一场持续数日的低烧和嗜睡中醒来，眼神清明，但总说些奇怪的话。

"我做了个很长的梦。"我这样解释。

"梦见什么了？"

"梦见……三年后的自己。"

妈妈笑了，捏捏我的脸："日有所思。你是不是担心毕业后找不到工作？别想太多，先好好读书。"

她关上门走了。我对着桌上的小镜子看自己的脸——20岁的脸，胶原蛋白饱满，眼神还没被三年的焦虑和寻找磨出细纹。可镜子里的人，灵魂是23岁的。

我偷偷去了一趟文化宫。

在2023年，它被围栏挡住，窗户破碎，像一具巨大的遗骸。但在2020年的今天，它正举办"中秋老照片展"。我买了票进去，在展厅里看到一张合影——1978年文化宫落成时全体员工的合照。

我在第二排找到了爷爷。

那么年轻，穿着那个时代的中山装，笑容腼腆。他旁边站着的几个人，我在资料里见过他们的脸：王姨、李叔、张姐、赵伯、钱哥、孙姐、周叔。八个人都在，对着镜头笑。

照片下方的标签写着："文化宫首批工作人员合影。1978.12.21摄。"

1978年12月21日。

我的生日是2000年12月21日。

爷爷的编号是12210301。

这些数字像一根冰冷的线，把不同年代的人串在一起。我站在照片前，感到一阵眩晕。旁边一个老太太凑过来看，自言自语："唉，这里面好几个人都不在了。"

我轻声问："您认识他们？"

"认识啊，以前常来文化宫跳舞。"她指着照片，"这个老王，电影院烧死的。这个小李，千禧年那天不见了，怪事。这个老张，车祸走的……"

她一个个点过去，语气平常得像在说今天的菜价。最后点到爷爷："老张最可惜，人特别好，就是后来有点神神叨叨的，老说数字啊密码啊……"

"他说什么数字？"

老太太眯起眼想了想："好像是什么1221开头的，说那是他们那批人的命数。"她突然打量我，"你是他孙女吧？长得真像。"

我一惊："您怎么知道？"

"你爷爷办公室抽屉里压着你的照片，小时候的，但眉眼没变。"她拍拍我的手，"他总说'我家小雨生日好，1221，顺顺利利'"。

我心里一紧。

从文化宫出来，雨下大了。我没带伞，在公交站等车时，手机震了一下。

一条陌生号码的短信：

"小雨，别去地下室。别输密码。等我来找你。"

发送时间：2020年9月25日14:30。

我立刻回拨，是空号。

我盯着那行字，手指发冷。是谁？2020年的这个世界，有谁知道"地下室""密码"这些事？

除非……发送者也来自未来。

或者，来自过去。

晚上哥哥打来视频电话。他在外地工作，2020年的他25岁，还没经历妹妹失踪的煎熬，笑容明亮。

"小雨，国庆回家吗？妈说你前几天病了。"

"嗯，低烧，已经好了。"

"那就好。我1号回去，带你去吃新开的那家火锅。"

"好。"

我们聊了些日常，挂断前，他突然说："对了，我昨晚做了个怪梦。"

"什么梦？"

"梦见你在一个很黑的地方，一直转一个密码锁，转了很久，然后哭了。"他顿了顿，"醒来心里特别难受，好像你真的在什么地方哭一样。"

我喉咙发紧，说不出话。

"就是个梦，别在意。"他笑了，"早点睡，1号见。"

屏幕暗下去。我坐在黑暗里，眼泪毫无预兆地掉下来。

我翻出2020年自己的日记本——那个真正的20岁小雨的日记。最后一篇停在9月17日：

"明天要和晓薇去看展。希望不要下雨。最近总是梦到数字，12210301，烦死了。但不知道为什么，又觉得这数字很重要，得记住。"

9月18日之后的页面是空白的。

但我在封底内侧发现一行铅笔写的小字，很淡：

"如果有一天我忘了，记住：密码是五位，前四位是1221，最后一位是还活着的人数。但'活着'的定义是什么？"

这行字的笔迹……是我的，但又不是2020年那种略显稚嫩的笔迹，更接近我23岁时的字。

一个可怕的念头浮上来：

2020年的我，是不是也预知到了什么？

是不是那个真正的20岁小雨，也在梦到数字，也在困惑，也曾在某个时刻，写下过提示给未来的自己？

那么，她现在在哪里？

在9月20日我"降临"的那天，她去了哪里？为什么这栋房子里没有她存在的痕迹，但整个世界又默认她"刚刚病愈"？

凌晨一点，我睡不着，打开电脑搜索"林小雨 失踪"。

跳出来的结果很少，只有一个本地论坛2018年的帖子，标题是《寻人：市一中高三女生林小雨，2000年12月21日生》。

点进去，内容很简单：女孩2018年3月离家后未归，监控最后拍到在文化宫附近。附带一张照片——虽然打了马赛克，但能看出和我很像。

发帖人ID是"夜行笔录"。

我哥的网名。

2018年？我2018年明明在准备高考，每天学校和家两点一线。

除非……

除非那个女孩是另一个时间线的我。

或者，是2018年就穿越到某个时间的我。

雨停了。窗外一片漆黑。

我写下这些，因为我不知道还能对谁说。2020年的世界安静平和，没有人相信时间可以折叠，没有人相信一个女孩身体里住着来自三年后的灵魂。

你看到了这篇帖子，就说明你需要一个大门密码：20260920 来见我吧。`,authorId:"11",authorName:"时间旅人小雨",category:"都市传说",tags:["时间穿越","预知","求助"],views:0,likes:0,createdAt:"2020-09-25T14:30:00Z",updatedAt:"2020-09-25T14:30:00Z",isHidden:!0,replies:[]},{id:"12",title:"2026年，我在时间的褶皱里整理自己",content:`2026年4月21日 周三 阴转小雨

晨起时在镜中看见第一根白发，在左鬓，很隐蔽的位置。我盯着它看了许久，没有拔。这是时间给我的印记，终于显现在这具二十六岁的身体上——虽然按意识经历的岁月，我快要三十了。

今天去注销了最后一个以"林小雨"身份办理的银行账户。柜员是个年轻姑娘，接过身份证时多看了一眼。"生日是2000年？"她笑，"真年轻。"我礼貌地回以微笑，没有解释。在2026年的今天，2000年出生的人确实年轻，但我不是。我的生命不是从2000年开始计算的，是从2020年、2023年、2026年三个时间点叠加开始的。

走出银行时下雨了。春天的雨总是这样，细密，黏人，像记忆。

中午约了哥哥一家吃饭。嫂子怀了二胎，五个月，手总是下意识地护着小腹。哥哥给她夹菜，眼神温柔。这种温柔我在2020年见过，在他还不知道时间会如何折磨我们的时候；在2023年也见过，在我们一起面对那些数字谜题的黑夜。但现在，这温柔有了新的归宿。

"小雨也该考虑成家了。"妈妈说，第无数次。她眼角的皱纹比2020年深了些，但气色很好。在我改变的时间线里，她没有经历女儿失踪的煎熬，这让我安慰。

"不急。"我说。

哥哥看了我一眼，那一眼很深。有那么一瞬间，我以为他记得什么——记得地下室潮湿的气味，记得密码锁转动的咔嗒声，记得我们在凌晨三点共享过的恐惧。但他只是说："让小雨自己决定吧。"然后给侄女擦掉嘴角的酱汁。

我知道他不记得了。或者说，在他的时间线里，那些从未发生。这很好。我用三年的错位人生，换来了他此刻平静的幸福。值得。

饭后我独自去了中山路。文化宫原址现在是公园，草坪刚修剪过，空气里有青草汁液的味道。孩子们在奔跑，老人在散步，一切都是2026年该有的样子。

我在那棵移植的老槐树下坐了很久。树身上我当年刻下的"12210301"已经看不见了，被新生的树皮温柔地包裹起来。时间就是这样，它会掩盖痕迹，但痕迹从未消失，只是成为了生长的一部分。

一个穿蓝色外套的小女孩跑过，马尾辫在脑后甩动。我怔了一下——像看见2020年的自己，那个真正的、二十岁的林小雨。她后来去了哪里？在我从2023年跌落2020年的那个下午，她走出了家门，再也没有回来。是我取代了她的人生，还是她走向了另一种可能？

这个问题我想了六年。在2020年至2023年那三年里，我每个生日都会许同一个愿：愿她在某个平行时空里，过着没有数字困扰的、简单的人生。如果时间真有无尽的分支，总该有一个分支里，她只是普通地长大，普通地爱与被爱。

傍晚整理旧物。从2020年带到2026年的东西不多：几本日记，爷爷的怀表，那把黄铜钥匙。钥匙柄上的"12211315"已经磨损得厉害，像被无数个夜晚的手指摩挲过。

我打开2020年9月25日的那本日记，纸张泛黄了。那时我刚"回来"五天，笔迹里满是惶恐和不确定。我写："时间是乱的，但爱不是。"六年过去，我仍然相信这句话。

后面几页贴着那八个人的资料剪报：爷爷、王姨、李叔、张姐、赵伯、钱哥、孙姐、周叔。他们的脸在旧报纸的网格上模糊。我在每个人的照片旁写了注释：

爷爷：教会我数字可以是记忆的容器

王姨：让我明白有些消失是突然的、没有道理的

李叔和钱哥：告诉我"失踪"是一种状态，不是结局

赵伯和周叔：让我相信即使被困在时间里，人也可以选择善意

张姐和孙姐：提醒我普通人的死亡同样值得铭记

八个编号，八种在时间中沉浮的方式。而我，是观察他们的人，是记录他们的人，是最终要合上这本记录的人。

晚上下起了大雨。我泡了茶，坐在窗前听雨声。这种时刻，三条时间线的记忆容易同时浮现：

2020年的记忆是桂花香，是大学教室的阳光，是第一次发现另一个自己消失时的恐慌。

2023年的记忆是地下室霉味，是密码锁冰凉的触感，是哥哥说"我梦见你在哭"时的心痛。

2026年的记忆是……是平静。是接受了所有不可改变之事后的疲惫的宁静。

我知道我该做什么了。

4月30日，文化宫原址永久封闭前的最后一天，我会去那里。不是去输入密码，不是去打开任何门。只是去告别。

告别2020年那个被迫让出人生的女孩。

告别2023年那个在黑暗里寻找答案的自己。

告别这六年里所有在时间褶皱中迷失的人。

我会带上爷爷的怀表——指针永远停在3:01，那是他离开的时刻，也是无数个时间异常发生的时刻。我会把它埋在老槐树下。让这个锚点从此停在这里，不再随着我在时间里漂流。

至于那把黄铜钥匙，我决定留在身边。它不再需要打开任何具体的门，它只是一个证明——证明我曾穿过时间的迷宫，证明爱确实可以跨越时间的断层。

如果未来的某天，有谁在时间的旅行中读到这些文字：

请不必寻找我。我已经在时间里找到了自己的位置——不是在某个特定的年份，不是在某个特定的地点，而是在所有爱过和被爱的瞬间的集合里。

请不必破解密码。真正的密码不是数字，是原谅。原谅时间的无情，原谅命运的无常，原谅自己的无能为力。

请好好活着，在你们的时间线里，用尽全力地活着。因为每一个认真活过的瞬间，都是对时间最温柔的抵抗。

而我，会在这个2026年的春天，学习如何做一个普通人。学习忘记数字的意义，记住雨声的节奏；不再计算时间的流逝，只感受时光的经过。

哥哥的孩子今年秋天出生。妈妈说如果是女孩，想让我取名。我想好了，如果是女孩，就叫"时安"。时间的时，平安的安。

愿她在自己的时间里，平安顺遂，永不被困。

愿我们所有人，最终都能与时间和解。

林小雨 于2026年秋夜`,authorId:"12",authorName:"LUCA",category:"都市传说",tags:["时间","和解","记忆"],views:0,likes:0,createdAt:"2026-04-21T18:00:00Z",updatedAt:"2026-04-21T18:00:00Z",isHidden:!0,replies:[]}],W0=()=>{const e=localStorage.getItem("forum_users"),t=localStorage.getItem("forum_posts");return{users:e?JSON.parse(e):ao,posts:t?JSON.parse(t):uo}},La=(e,t)=>{localStorage.setItem("forum_users",JSON.stringify(e)),localStorage.setItem("forum_posts",JSON.stringify(t))},Q0=e=>{const t=ao.map(r=>r.username),n=[...ao];return e.forEach(r=>{t.includes(r.username)||n.push(r)}),n},Z0={currentUser:null,isAuthenticated:!1,posts:[],categories:H0,users:[]};function K0(e,t){var n;switch(t.type){case"LOGIN":return{...e,currentUser:t.payload,isAuthenticated:!0};case"LOGOUT":return{...e,currentUser:null,isAuthenticated:!1};case"REGISTER":return{...e,users:[...e.users,t.payload],currentUser:t.payload,isAuthenticated:!0};case"ADD_POST":return{...e,posts:[t.payload,...e.posts]};case"UPDATE_POST":return{...e,posts:e.posts.map(r=>r.id===t.payload.id?t.payload:r)};case"DELETE_POST":return{...e,posts:e.posts.filter(r=>r.id!==t.payload)};case"ADD_REPLY":return{...e,posts:e.posts.map(r=>r.id===t.payload.postId?{...r,replies:[...r.replies,t.payload.reply]}:r)};case"LIKE_POST":return{...e,posts:e.posts.map(r=>r.id===t.payload?{...r,likes:r.likes+1}:r)};case"INCREMENT_VIEWS":return{...e,posts:e.posts.map(r=>r.id===t.payload?{...r,views:r.views+1}:r)};case"UPDATE_USER":return{...e,users:e.users.map(r=>r.id===t.payload.id?t.payload:r),currentUser:((n=e.currentUser)==null?void 0:n.id)===t.payload.id?t.payload:e.currentUser};case"INIT_DATA":return{...e,users:t.payload.users,posts:t.payload.posts};default:return e}}const od=k.createContext(void 0);function Y0({children:e}){const[t,n]=k.useReducer(K0,Z0);k.useEffect(()=>{const{users:g}=W0(),N=Q0(g),f=uo;La(N,f),n({type:"INIT_DATA",payload:{users:N,posts:f}})},[]),k.useEffect(()=>{t.users.length>0&&La(t.users,t.posts.length>0?t.posts:uo)},[t.users,t.posts]);const r=(g,N)=>{const f=t.users.find(d=>d.username===g&&d.password===N);return f?(n({type:"LOGIN",payload:f}),!0):!1},l=(g,N,f)=>{if(t.users.find(m=>m.username===g))return!1;const d={id:Date.now().toString(),username:g,password:N,nickname:f,avatar:"👤",role:"user",createdAt:new Date().toISOString()};return n({type:"REGISTER",payload:d}),!0},i=()=>{n({type:"LOGOUT"})},o=(g,N,f,d)=>{if(!t.currentUser)return;const m={id:Date.now().toString(),title:g,content:N,authorId:t.currentUser.id,authorName:t.currentUser.nickname,category:f,tags:d,views:0,likes:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),replies:[]};n({type:"ADD_POST",payload:m})},s=g=>{n({type:"UPDATE_POST",payload:{...g,updatedAt:new Date().toISOString()}})},u=g=>{n({type:"DELETE_POST",payload:g})},c=(g,N)=>{if(!t.currentUser)return;const f={id:Date.now().toString(),postId:g,content:N,authorId:t.currentUser.id,authorName:t.currentUser.nickname,createdAt:new Date().toISOString(),likes:0};n({type:"ADD_REPLY",payload:{postId:g,reply:f}})},v=g=>{n({type:"LIKE_POST",payload:g})},h=g=>{n({type:"INCREMENT_VIEWS",payload:g})},p=g=>{n({type:"UPDATE_USER",payload:g})},w=g=>{if(!g.trim())return t.posts;const N=g.toLowerCase();return t.posts.filter(f=>f.title.toLowerCase().includes(N)||f.content.toLowerCase().includes(N)||f.tags.some(d=>d.toLowerCase().includes(N))||f.authorName.toLowerCase().includes(N))},x=g=>t.posts.find(N=>N.id===g);return a.jsx(od.Provider,{value:{state:t,login:r,logout:i,register:l,addPost:o,updatePost:s,deletePost:u,addReply:c,likePost:v,incrementViews:h,updateUser:p,searchPosts:w,getPostById:x},children:e})}function Nt(){const e=k.useContext(od);if(!e)throw new Error("useForum must be used within a ForumProvider");return e}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=k.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...s},u)=>k.createElement("svg",{ref:u,...G0,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:sd("lucide",l),...s},[...o.map(([c,v])=>k.createElement(c,v)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(e,t)=>{const n=k.forwardRef(({className:r,...l},i)=>k.createElement(J0,{ref:i,iconNode:t,className:sd(`lucide-${X0(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=fe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=fe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=fe("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=fe("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=fe("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=fe("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=fe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function sm(){var h,p,w;const{state:e,logout:t,searchPosts:n}=Nt(),r=xn(),[l,i]=k.useState(""),[o,s]=k.useState(!1),[u,c]=k.useState(!1),v=x=>{x.preventDefault(),l.trim()&&(r(`/search?q=${encodeURIComponent(l)}`),i(""))};return a.jsxs("header",{className:"retro-header sticky top-0 z-50",children:[a.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4",children:[a.jsxs("div",{className:"flex items-center justify-between gap-4",children:[a.jsxs(U,{to:"/",className:"flex items-center gap-2 shrink-0",children:[a.jsx("span",{className:"text-3xl",children:"🌊"}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-xl font-bold text-amber-600 tracking-wide",children:"流水无涯"}),a.jsx("p",{className:"text-xs text-amber-900",children:"都市传说 · 灵异档案"})]})]}),a.jsx("form",{onSubmit:v,className:"hidden md:flex flex-1 max-w-md mx-4",children:a.jsxs("div",{className:"relative w-full",children:[a.jsx("input",{type:"text",value:l,onChange:x=>i(x.target.value),placeholder:"搜索帖子、标签、用户...",className:"w-full px-4 py-2 bg-black/30 border border-amber-900/50 rounded text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-700"}),a.jsx("button",{type:"submit",className:"absolute right-2 top-1/2 -translate-y-1/2 text-amber-700 hover:text-amber-500 transition-colors",children:a.jsx(fo,{size:18})})]})}),a.jsxs("div",{className:"flex items-center gap-3",children:[e.isAuthenticated?a.jsxs(a.Fragment,{children:[a.jsx(U,{to:"/editor",className:"retro-button px-3 py-2 text-sm font-medium rounded cursor-pointer hidden sm:block",children:"✏️ 发帖"}),a.jsxs("div",{className:"relative",children:[a.jsxs("button",{onClick:()=>c(!u),className:"flex items-center gap-2 p-2 hover:bg-black/20 rounded transition-colors cursor-pointer",children:[a.jsx("span",{className:"text-2xl",children:(h=e.currentUser)==null?void 0:h.avatar}),a.jsxs("div",{className:"hidden md:block",children:[a.jsx("p",{className:"text-sm text-amber-100 font-medium",children:(p=e.currentUser)==null?void 0:p.nickname}),a.jsxs("p",{className:"text-xs text-amber-900",children:["@",(w=e.currentUser)==null?void 0:w.username]})]}),a.jsx(q0,{size:16,className:"text-amber-700 hidden md:block"})]}),u&&a.jsxs("div",{className:"absolute right-0 top-full mt-2 w-48 bg-black/90 border border-amber-900/50 rounded-lg shadow-lg overflow-hidden z-50",children:[a.jsxs(U,{to:"/my-posts",onClick:()=>c(!1),className:"flex items-center gap-2 px-4 py-3 text-amber-100 hover:bg-amber-900/30 transition-colors cursor-pointer",children:[a.jsx(im,{size:16}),"我的帖子"]}),a.jsxs("button",{onClick:()=>{t(),c(!1)},className:"w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-900/30 transition-colors cursor-pointer border-t border-amber-900/30",children:[a.jsx(em,{size:16}),"退出登录"]})]})]})]}):a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(U,{to:"/login",className:"retro-button px-4 py-2 text-sm font-medium rounded cursor-pointer",children:"登录"}),a.jsx(U,{to:"/register",className:"retro-button px-4 py-2 text-sm font-medium rounded cursor-pointer",children:"注册"})]}),a.jsx("button",{onClick:()=>s(!o),className:"md:hidden p-2 text-amber-100 cursor-pointer",children:o?a.jsx(om,{size:24}):a.jsx(tm,{size:24})})]})]}),o&&a.jsxs("div",{className:"md:hidden mt-4 pb-4 border-t border-amber-900/30 pt-4",children:[a.jsx("form",{onSubmit:v,className:"mb-4",children:a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",value:l,onChange:x=>i(x.target.value),placeholder:"搜索...",className:"w-full px-4 py-2 bg-black/30 border border-amber-900/50 rounded text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-700"}),a.jsx("button",{type:"submit",className:"absolute right-2 top-1/2 -translate-y-1/2 text-amber-700",children:a.jsx(fo,{size:18})})]})}),e.isAuthenticated&&a.jsx(U,{to:"/editor",className:"block retro-button px-4 py-2 text-center font-medium rounded cursor-pointer",onClick:()=>s(!1),children:"✏️ 发布新帖子"})]})]}),a.jsx("div",{className:"h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent opacity-60"})]})}function am(){return a.jsx("footer",{className:"mt-auto bg-retro-dark border-t-4 border-retro-border",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-retro-gold mb-4",children:"🌊 关于流水无涯"}),a.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"流水无涯，一个充满情怀的 BBS 风格论坛，如流水般自由，如天涯般无界。 在这里，你可以分享技术、交流生活、结识志同道合的朋友。"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-retro-gold mb-4",children:"🔗 快速链接"}),a.jsxs("ul",{className:"space-y-2 text-sm",children:[a.jsx("li",{children:a.jsx(U,{to:"/",className:"text-gray-400 hover:text-white transition-colors",children:"首页"})}),a.jsx("li",{children:a.jsx(U,{to:"/login",className:"text-gray-400 hover:text-white transition-colors",children:"登录"})}),a.jsx("li",{children:a.jsx(U,{to:"/register",className:"text-gray-400 hover:text-white transition-colors",children:"注册"})})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-retro-gold mb-4",children:"📊 论坛统计"}),a.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[a.jsx("li",{children:"🕐 运行时间：2024年1月1日"}),a.jsx("li",{children:"👥 会员数：128 人"}),a.jsx("li",{children:"📝 帖子数：552 篇"})]})]})]}),a.jsxs("div",{className:"mt-8 pt-6 border-t border-gray-700 text-center",children:[a.jsx("p",{className:"text-sm text-gray-500",children:"© 2024 流水无涯 Flowing Water · 用 ❤️ 构建"}),a.jsx("p",{className:"text-xs text-gray-600 mt-2",children:"怀旧版界面 · 现代技术驱动"})]})]})})}function ds({post:e,showHidden:t=!1}){var o;const{state:n}=Nt(),r=s=>new Date(s).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}),l=e.content.slice(0,150)+(e.content.length>150?"...":""),i=((o=n.currentUser)==null?void 0:o.id)===e.authorId;return e.isHidden?i?a.jsx("article",{className:"retro-card p-4 hover:scale-[1.01] transition-transform cursor-pointer border-2 border-amber-500/30",children:a.jsxs(U,{to:`/post/${e.id}`,className:"block",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2 mb-3",children:[a.jsxs("h2",{className:"text-lg font-bold hover:text-amber-400 transition-colors line-clamp-2 text-amber-50 flex items-center gap-2",children:[a.jsx(b0,{size:16,className:"text-amber-500 shrink-0"}),e.title]}),a.jsx("span",{className:"shrink-0 px-2 py-1 bg-red-900/30 text-red-300 text-xs rounded border border-red-900/50",children:e.category})]}),a.jsx("p",{className:"text-amber-100/80 text-sm mb-3 line-clamp-3 leading-relaxed",children:l}),e.tags.length>0&&a.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[a.jsx(Ia,{size:12,className:"text-amber-700"}),e.tags.map(s=>a.jsx("span",{className:"px-2 py-0.5 bg-amber-900/30 text-amber-300 text-xs rounded border border-amber-900/50 hover:bg-amber-800/40 transition-colors",children:s},s))]}),a.jsxs("div",{className:"flex items-center justify-between text-xs text-amber-700 pt-3 border-t border-amber-900/30",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"font-medium text-amber-200",children:e.authorName}),a.jsx("span",{children:r(e.createdAt)})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(co,{size:14,className:"text-amber-700"}),a.jsx("span",{className:"text-amber-600",children:e.views})]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(gl,{size:14,className:"text-red-600"}),a.jsx("span",{className:"text-red-500",children:e.likes})]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(Ra,{size:14,className:"text-amber-700"}),a.jsx("span",{className:"text-amber-600",children:e.replies.length})]})]})]})]})}):null:a.jsx("article",{className:"retro-card p-4 hover:scale-[1.01] transition-transform cursor-pointer",children:a.jsxs(U,{to:`/post/${e.id}`,className:"block",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2 mb-3",children:[a.jsx("h2",{className:"text-lg font-bold hover:text-amber-400 transition-colors line-clamp-2 text-amber-50",children:e.title}),a.jsx("span",{className:"shrink-0 px-2 py-1 bg-red-900/30 text-red-300 text-xs rounded border border-red-900/50",children:e.category})]}),a.jsx("p",{className:"text-amber-100/80 text-sm mb-3 line-clamp-3 leading-relaxed",children:l}),e.tags.length>0&&a.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[a.jsx(Ia,{size:12,className:"text-amber-700"}),e.tags.map(s=>a.jsx("span",{className:"px-2 py-0.5 bg-amber-900/30 text-amber-300 text-xs rounded border border-amber-900/50 hover:bg-amber-800/40 transition-colors",children:s},s))]}),a.jsxs("div",{className:"flex items-center justify-between text-xs text-amber-700 pt-3 border-t border-amber-900/30",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"font-medium text-amber-200",children:e.authorName}),a.jsx("span",{children:r(e.createdAt)})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(co,{size:14,className:"text-amber-700"}),a.jsx("span",{className:"text-amber-600",children:e.views})]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(gl,{size:14,className:"text-red-600"}),a.jsx("span",{className:"text-red-500",children:e.likes})]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(Ra,{size:14,className:"text-amber-700"}),a.jsx("span",{className:"text-amber-600",children:e.replies.length})]})]})]})]})})}function um(){const{state:e}=Nt(),t=["4","5","6","7","8","9"],n=e.posts.filter(r=>!t.includes(r.id));return a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsxs("section",{className:"retro-card m-4 p-8 text-center",children:[a.jsx("h1",{className:"text-3xl font-bold text-amber-200 mb-4",children:"🌊 欢迎来到流水无涯"}),a.jsxs("p",{className:"text-amber-100/70 mb-6 max-w-2xl mx-auto leading-relaxed",children:["世间奇闻，皆藏于市井巷陌；都市传说，尽显于灯火阑珊。",a.jsx("br",{}),"这里记录着被遗忘的故事，那些发生在你我身边的诡异与神秘。"]}),!e.isAuthenticated&&a.jsxs("div",{className:"flex items-center justify-center gap-4",children:[a.jsx(U,{to:"/login",className:"retro-button px-6 py-2 rounded font-medium cursor-pointer",children:"登录"}),a.jsx(U,{to:"/register",className:"retro-button px-6 py-2 rounded font-medium cursor-pointer",children:"注册"})]})]}),a.jsx("div",{className:"flex-1 max-w-6xl mx-auto w-full px-4 pb-8",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[a.jsxs("main",{className:"lg:col-span-3 space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-amber-200 flex items-center gap-2",children:"📝 最新帖子"}),e.isAuthenticated&&a.jsx(U,{to:"/editor",className:"retro-button px-4 py-2 rounded text-sm font-medium cursor-pointer",children:"✏️ 发布帖子"})]}),n.length>0?n.map(r=>a.jsx(ds,{post:r},r.id)):a.jsx("div",{className:"retro-card p-8 text-center",children:a.jsx("p",{className:"text-amber-700",children:"暂无帖子，成为第一个发帖的人吧！"})})]}),a.jsxs("aside",{className:"space-y-6",children:[a.jsxs("div",{className:"retro-card p-4",children:[a.jsx("h3",{className:"text-lg font-bold text-amber-200 mb-4 flex items-center gap-2",children:"📁 版块分类"}),a.jsx("ul",{className:"space-y-2",children:e.categories.map(r=>a.jsx("li",{children:a.jsxs(U,{to:`/category/${r.id}`,className:"flex items-center justify-between p-3 rounded-lg hover:bg-black/40 transition-all cursor-pointer border border-transparent hover:border-red-900/30",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-xl",children:r.icon}),a.jsx("div",{children:a.jsx("span",{className:"text-sm font-medium text-amber-100",children:r.name})})]}),a.jsx("span",{className:"text-xs text-amber-600 bg-red-900/30 px-2 py-1 rounded border border-red-900/50",children:r.postCount})]})},r.id))})]}),a.jsxs("div",{className:"retro-card p-4",children:[a.jsx("h3",{className:"text-lg font-bold text-amber-200 mb-4 flex items-center gap-2",children:"🔥 热门帖子"}),a.jsx("ul",{className:"space-y-3",children:[...n].sort((r,l)=>l.likes-r.likes).slice(0,5).map((r,l)=>a.jsx("li",{children:a.jsxs(U,{to:`/post/${r.id}`,className:"flex items-start gap-2 group",children:[a.jsx("span",{className:`shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${l<3?"bg-red-900/50 text-red-300 border border-red-700":"bg-amber-900/30 text-amber-500 border border-amber-800"}`,children:l+1}),a.jsx("span",{className:"text-sm text-amber-100/80 group-hover:text-amber-400 transition-colors line-clamp-2",children:r.title})]})},r.id))})]})]})]})})]})}function cm(){const[e,t]=k.useState(""),[n,r]=k.useState(""),[l,i]=k.useState(""),{login:o}=Nt(),s=xn(),u=c=>{if(c.preventDefault(),!e.trim()||!n.trim()){i("请输入用户名和密码");return}o(e,n)?s("/"):i("用户名或密码错误")};return a.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:a.jsxs("div",{className:"retro-card p-8 w-full max-w-md",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("span",{className:"text-5xl",children:"🔐"}),a.jsx("h1",{className:"text-2xl font-bold text-retro-dark mt-4",children:"用户登录"}),a.jsx("p",{className:"text-gray-500 mt-2",children:"欢迎回来！请登录您的账号"})]}),a.jsxs("form",{onSubmit:u,className:"space-y-4",children:[l&&a.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm",children:l}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"用户名"}),a.jsx("input",{type:"text",value:e,onChange:c=>t(c.target.value),className:"retro-input w-full px-4 py-2 rounded",placeholder:"请输入用户名"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"密码"}),a.jsx("input",{type:"password",value:n,onChange:c=>r(c.target.value),className:"retro-input w-full px-4 py-2 rounded",placeholder:"请输入密码"})]}),a.jsx("button",{type:"submit",className:"retro-button w-full py-2 rounded font-medium text-retro-dark cursor-pointer",children:"登录"})]}),a.jsx("div",{className:"mt-6 text-center text-sm",children:a.jsxs("p",{className:"text-gray-500",children:["还没有账号？"," ",a.jsx(U,{to:"/register",className:"text-retro-blue hover:underline",children:"立即注册"})]})})]})})}function dm(){const[e,t]=k.useState(!0);return e?a.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",children:a.jsxs("div",{className:"retro-card p-8 w-full max-w-md text-center",children:[a.jsx("span",{className:"text-6xl mb-4 block",children:"🔧"}),a.jsx("h1",{className:"text-2xl font-bold text-retro-dark mt-4",children:"功能维护中"}),a.jsx("p",{className:"text-gray-500 mt-4",children:"注册功能正在维修，请稍后再试！"}),a.jsx(U,{to:"/login",className:"inline-block retro-button px-6 py-2 rounded font-medium text-retro-dark mt-6 cursor-pointer",children:"返回登录"})]})}):null}function fm(){var d,m,y,j,P;const{id:e}=cs(),t=xn(),{state:n,getPostById:r,addReply:l,likePost:i,deletePost:o,incrementViews:s}=Nt(),[u,c]=k.useState(""),[v,h]=k.useState(!1),p=r(e||""),w=((d=n.currentUser)==null?void 0:d.id)===(p==null?void 0:p.authorId);if(k.useEffect(()=>{e&&p&&w&&s(e)},[e,p==null?void 0:p.id]),!p)return a.jsx("div",{className:"min-h-screen flex items-center justify-center",children:a.jsxs("div",{className:"retro-card p-8 text-center",children:[a.jsx("p",{className:"text-gray-500",children:"帖子不存在或已被删除"}),a.jsx(U,{to:"/",className:"text-retro-blue hover:underline mt-4 inline-block",children:"返回首页"})]})});if(p.isHidden&&!w)return t("/404"),null;const x=E=>new Date(E).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),g=E=>{if(E.preventDefault(),!!u.trim()){if(!n.isAuthenticated){t("/login");return}l(p.id,u),c("")}},N=()=>{var E,T;(((E=n.currentUser)==null?void 0:E.id)===p.authorId||((T=n.currentUser)==null?void 0:T.role)==="admin")&&(o(p.id),t("/"))},f=()=>{if(!n.isAuthenticated){t("/login");return}i(p.id)};return a.jsxs("div",{className:"min-h-screen pb-8",children:[a.jsx("div",{className:"max-w-4xl mx-auto px-4 pt-4",children:a.jsxs("button",{onClick:()=>t(-1),className:"flex items-center gap-2 text-gray-600 hover:text-retro-dark transition-colors cursor-pointer",children:[a.jsx(mr,{size:20}),"返回"]})}),a.jsxs("article",{className:"max-w-4xl mx-auto px-4 pt-4",children:[a.jsxs("div",{className:"retro-card p-6 mb-6",children:[a.jsxs("div",{className:"flex items-start justify-between gap-4 mb-4",children:[a.jsxs("div",{children:[a.jsx("span",{className:"inline-block px-3 py-1 bg-retro-blue/10 text-retro-blue text-sm rounded mb-2",children:p.category}),a.jsx("h1",{className:"text-2xl font-bold text-retro-dark",children:p.title})]}),(((m=n.currentUser)==null?void 0:m.id)===p.authorId||((y=n.currentUser)==null?void 0:y.role)==="admin")&&a.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a.jsx(U,{to:`/editor/${p.id}`,className:"p-2 text-gray-500 hover:text-retro-blue transition-colors cursor-pointer",title:"编辑",children:a.jsx(rm,{size:18})}),a.jsx("button",{onClick:()=>h(!0),className:"p-2 text-gray-500 hover:text-red-500 transition-colors cursor-pointer",title:"删除",children:a.jsx(lm,{size:18})})]})]}),a.jsxs("div",{className:"flex items-center gap-4 text-sm text-amber-800 mb-6 pb-4 border-b border-amber-900/30",children:[a.jsx("span",{className:"font-medium text-amber-100",children:p.authorName}),a.jsx("span",{className:"text-amber-700",children:x(p.createdAt)}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(co,{size:14,className:"text-amber-700"}),a.jsxs("span",{className:"text-amber-700",children:[p.views," 浏览"]})]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx(gl,{size:14,className:"text-red-700"}),a.jsxs("span",{className:"text-red-600",children:[p.likes," 点赞"]})]})]}),p.tags.length>0&&a.jsx("div",{className:"flex items-center gap-2 mb-6",children:p.tags.map(E=>a.jsxs("span",{className:"px-3 py-1 bg-red-900/30 text-red-300 text-sm rounded border border-red-900/50",children:["#",E]},E))}),a.jsx("div",{className:"prose prose-retro max-w-none",children:a.jsx("div",{className:"whitespace-pre-wrap text-amber-100/90 leading-relaxed",children:p.isHidden&&((j=n.currentUser)==null?void 0:j.id)!==p.authorId?a.jsxs("div",{className:"bg-black/50 border border-red-900/50 rounded-lg p-6 text-center",children:[a.jsx("div",{className:"text-4xl mb-4",children:"🔒"}),a.jsx("p",{className:"text-amber-200 mb-2",children:"此内容已被下架"}),a.jsx("p",{className:"text-amber-700 text-sm",children:"如需查看完整内容，请联系发帖人或管理员"})]}):(P=p.isHidden?p.hiddenContent:p.content)==null?void 0:P.split(/!\[.*?\]\(.*?\)/).map((E,T,$)=>{const L=p.isHidden?p.hiddenContent:p.content,pe=L==null?void 0:L.match(/!\[.*?\]\((.*?)\)/);if(pe&&T<$.length-1){const jt=pe[1];return a.jsxs(a.Fragment,{children:[E,a.jsx("div",{className:"my-6 p-4 bg-black/40 rounded-lg border border-red-900/50 shadow-lg",children:a.jsx("img",{src:jt,alt:"帖子图片",className:"max-w-full mx-auto rounded",style:{maxHeight:"500px",objectFit:"contain"}})})]})}return E})})}),a.jsx("div",{className:"mt-6 pt-4 border-t border-gray-200",children:a.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-2 retro-button rounded cursor-pointer",children:[a.jsx(gl,{size:18,className:n.isAuthenticated?"text-retro-red":""}),"点赞 ",p.likes]})})]}),a.jsxs("div",{className:"retro-card p-6 mb-6",children:[a.jsxs("h2",{className:"text-lg font-bold text-amber-100 mb-4",children:["💬 回复 (",p.replies.length,")"]}),p.replies.length>0?a.jsx("div",{className:"space-y-4",children:p.replies.map(E=>a.jsxs("div",{className:"p-4 bg-black/30 rounded border border-amber-900/30",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("span",{className:"font-medium text-amber-200",children:E.authorName}),a.jsx("span",{className:"text-xs text-amber-700",children:x(E.createdAt)})]}),a.jsx("p",{className:"text-amber-100/80 whitespace-pre-wrap",children:E.content})]},E.id))}):a.jsx("p",{className:"text-amber-700 text-center py-4",children:"暂无回复"})]}),a.jsxs("div",{className:"retro-card p-6",children:[a.jsx("h2",{className:"text-lg font-bold text-amber-100 mb-4",children:"发表评论"}),n.isAuthenticated?a.jsxs("form",{onSubmit:g,children:[a.jsx("textarea",{value:u,onChange:E=>c(E.target.value),className:"retro-input w-full p-4 rounded min-h-[120px] resize-y",placeholder:"请输入您的回复..."}),a.jsx("button",{type:"submit",className:"retro-button px-6 py-2 rounded font-medium mt-4 cursor-pointer",children:"发布回复"})]}):a.jsxs("div",{className:"text-center py-6",children:[a.jsx("p",{className:"text-amber-700 mb-4",children:"登录后才能发表评论"}),a.jsx(U,{to:"/login",className:"inline-block retro-button px-6 py-2 rounded font-medium cursor-pointer",children:"登录"})]})]})]}),v&&a.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:a.jsxs("div",{className:"retro-card p-6 max-w-sm w-full",children:[a.jsx("h3",{className:"text-lg font-bold text-retro-dark mb-4",children:"确认删除"}),a.jsx("p",{className:"text-gray-600 mb-6",children:"确定要删除这篇帖子吗？此操作不可撤销。"}),a.jsxs("div",{className:"flex justify-end gap-4",children:[a.jsx("button",{onClick:()=>h(!1),className:"retro-button px-4 py-2 rounded cursor-pointer",children:"取消"}),a.jsx("button",{onClick:N,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer",children:"删除"})]})]})})]})}function Oa(){var m;const{id:e}=cs(),t=xn(),{state:n,addPost:r,updatePost:l,getPostById:i}=Nt(),o=e?i(e):void 0,[s,u]=k.useState((o==null?void 0:o.title)||""),[c,v]=k.useState((o==null?void 0:o.content)||""),[h,p]=k.useState((o==null?void 0:o.category)||((m=n.categories[0])==null?void 0:m.name)||""),[w,x]=k.useState((o==null?void 0:o.tags.join(", "))||""),[g,N]=k.useState(""),f=!!o,d=y=>{if(y.preventDefault(),!s.trim()){N("请输入标题");return}if(!c.trim()){N("请输入内容");return}if(!n.isAuthenticated){t("/login");return}const j=w.split(",").map(P=>P.trim()).filter(P=>P);f&&o?l({...o,title:s,content:c,category:h,tags:j}):r(s,c,h,j),t("/")};return a.jsxs("div",{className:"min-h-screen pb-8",children:[a.jsx("div",{className:"max-w-4xl mx-auto px-4 pt-4",children:a.jsxs("button",{onClick:()=>t(-1),className:"flex items-center gap-2 text-gray-600 hover:text-retro-dark transition-colors cursor-pointer",children:[a.jsx(mr,{size:20}),"返回"]})}),a.jsx("div",{className:"max-w-4xl mx-auto px-4 pt-4",children:a.jsxs("div",{className:"retro-card p-6",children:[a.jsx("h1",{className:"text-2xl font-bold text-retro-dark mb-6",children:f?"✏️ 编辑帖子":"✏️ 发布新帖子"}),n.isAuthenticated?a.jsxs("form",{onSubmit:d,className:"space-y-6",children:[g&&a.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm",children:g}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["标题 ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",value:s,onChange:y=>u(y.target.value),className:"retro-input w-full px-4 py-2 rounded",placeholder:"请输入帖子标题",maxLength:100}),a.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:[s.length,"/100"]})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["分类 ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("select",{value:h,onChange:y=>p(y.target.value),className:"retro-input w-full px-4 py-2 rounded",children:n.categories.map(y=>a.jsxs("option",{value:y.name,children:[y.icon," ",y.name]},y.id))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"标签"}),a.jsx("input",{type:"text",value:w,onChange:y=>x(y.target.value),className:"retro-input w-full px-4 py-2 rounded",placeholder:"多个标签用逗号分隔，如：React, 前端, 教程"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"多个标签用英文逗号分隔"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:["内容 ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("textarea",{value:c,onChange:y=>v(y.target.value),className:"retro-input w-full p-4 rounded min-h-[300px] resize-y font-mono text-sm",placeholder:`请输入帖子内容...\r
\r
支持 Markdown 格式：\r
- **粗体**\r
- *斜体*\r
- \`代码\`\r
- 换行段落`})]}),a.jsxs("div",{className:"flex justify-end gap-4 pt-4 border-t border-gray-200",children:[a.jsx("button",{type:"button",onClick:()=>t(-1),className:"retro-button px-6 py-2 rounded cursor-pointer",children:"取消"}),a.jsxs("button",{type:"submit",className:"flex items-center gap-2 retro-button px-6 py-2 rounded cursor-pointer",children:[a.jsx(nm,{size:18}),f?"保存修改":"发布帖子"]})]})]}):a.jsxs("div",{className:"text-center py-12",children:[a.jsx("p",{className:"text-gray-500 mb-4",children:"登录后才能发布帖子"}),a.jsx(U,{to:"/login",className:"inline-block retro-button px-6 py-2 rounded font-medium text-retro-dark cursor-pointer",children:"登录"})]})]})})]})}function pm(){const[e]=V0(),{searchPosts:t}=Nt(),[n,r]=k.useState([]),l=e.get("q")||"";return k.useEffect(()=>{l&&r(t(l))},[l,t]),a.jsxs("div",{className:"min-h-screen pb-8",children:[a.jsxs("div",{className:"retro-card m-4 p-6",children:[a.jsxs(U,{to:"/",className:"inline-flex items-center gap-2 text-gray-600 hover:text-retro-dark transition-colors mb-4 cursor-pointer",children:[a.jsx(mr,{size:20}),"返回首页"]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(fo,{size:28,className:"text-retro-blue"}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold text-retro-dark",children:"搜索结果"}),a.jsxs("p",{className:"text-gray-500",children:["关键词：",a.jsxs("span",{className:"font-medium text-retro-blue",children:['"',l,'"']}),a.jsxs("span",{className:"ml-2",children:["找到 ",n.length," 条结果"]})]})]})]})]}),a.jsx("div",{className:"max-w-4xl mx-auto px-4",children:n.length>0?a.jsx("div",{className:"space-y-4",children:n.map(i=>a.jsx(ds,{post:i,showHidden:!0},i.id))}):a.jsxs("div",{className:"retro-card p-12 text-center",children:[a.jsx("span",{className:"text-6xl mb-4 block",children:"🔍"}),a.jsx("h2",{className:"text-xl font-bold text-retro-dark mb-2",children:"没有找到相关帖子"}),a.jsx("p",{className:"text-gray-500 mb-6",children:"尝试更换关键词，或浏览其他内容"}),a.jsx(U,{to:"/",className:"inline-block retro-button px-6 py-2 rounded font-medium text-retro-dark cursor-pointer",children:"返回首页"})]})})]})}function mm(){const{id:e}=cs();return a.jsx("div",{className:"min-h-screen flex items-center justify-center",children:a.jsxs("div",{className:"retro-card p-12 text-center max-w-md mx-4",children:[a.jsx("div",{className:"text-6xl mb-6",children:"⚠️"}),a.jsx("h2",{className:"text-2xl font-bold text-red-400 mb-4",children:"系统繁忙"}),a.jsx("p",{className:"text-amber-100/70 mb-6",children:"请稍后再试..."}),a.jsx("div",{className:"text-xs text-amber-700/50 mb-4 font-mono",children:"ERROR_CODE: 0x7F3A2"}),a.jsxs(U,{to:"/",className:"inline-flex items-center gap-2 text-retro-blue hover:text-amber-400 transition-colors cursor-pointer",children:[a.jsx(mr,{size:16}),"返回首页"]})]})})}function hm(){var n;const{state:e}=Nt(),t=e.posts.filter(r=>{var l;return r.authorId===((l=e.currentUser)==null?void 0:l.id)});return a.jsxs("div",{className:"min-h-screen pb-8",children:[a.jsxs("div",{className:"retro-card m-4 p-6",children:[a.jsxs(U,{to:"/",className:"inline-flex items-center gap-2 text-gray-600 hover:text-retro-dark transition-colors mb-4 cursor-pointer",children:[a.jsx(mr,{size:20}),"返回首页"]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-4xl",children:(n=e.currentUser)==null?void 0:n.avatar}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold text-retro-dark",children:"我的帖子"}),a.jsxs("p",{className:"text-gray-500",children:["共 ",t.length," 篇帖子"]})]})]})]}),a.jsx("div",{className:"max-w-4xl mx-auto px-4",children:t.length>0?a.jsx("div",{className:"space-y-4",children:t.map(r=>a.jsx(ds,{post:r,showHidden:!0},r.id))}):a.jsxs("div",{className:"retro-card p-12 text-center",children:[a.jsx("span",{className:"text-6xl mb-4 block",children:"📝"}),a.jsx("h2",{className:"text-xl font-bold text-retro-dark mb-2",children:"暂无帖子"}),a.jsx("p",{className:"text-gray-500 mb-6",children:"你还没有发布过帖子"}),a.jsx(U,{to:"/editor",className:"inline-block retro-button px-6 py-2 rounded font-medium text-retro-dark cursor-pointer",children:"✏️ 发布帖子"})]})})]})}function Ma(){return a.jsx("div",{className:"min-h-[60vh] flex items-center justify-center",children:a.jsxs("div",{className:"retro-card p-12 text-center",children:[a.jsx("div",{className:"text-8xl mb-6",children:"404"}),a.jsx("h1",{className:"text-2xl font-bold text-retro-dark mb-4",children:"页面不存在"}),a.jsx("p",{className:"text-gray-500 mb-8",children:"您访问的页面可能已被删除或不存在"}),a.jsx(U,{to:"/",className:"inline-block retro-button px-6 py-3 rounded font-medium cursor-pointer",children:"返回首页"})]})})}function vm(){return a.jsx(Y0,{children:a.jsx(A0,{children:a.jsxs("div",{className:"min-h-screen flex flex-col bg-retro-bg",children:[a.jsx(sm,{}),a.jsx("main",{className:"flex-1",children:a.jsxs(z0,{children:[a.jsx(Ee,{path:"/",element:a.jsx(um,{})}),a.jsx(Ee,{path:"/login",element:a.jsx(cm,{})}),a.jsx(Ee,{path:"/register",element:a.jsx(dm,{})}),a.jsx(Ee,{path:"/post/:id",element:a.jsx(fm,{})}),a.jsx(Ee,{path:"/editor",element:a.jsx(Oa,{})}),a.jsx(Ee,{path:"/editor/:id",element:a.jsx(Oa,{})}),a.jsx(Ee,{path:"/search",element:a.jsx(pm,{})}),a.jsx(Ee,{path:"/category/:id",element:a.jsx(mm,{})}),a.jsx(Ee,{path:"/my-posts",element:a.jsx(hm,{})}),a.jsx(Ee,{path:"/404",element:a.jsx(Ma,{})}),a.jsx(Ee,{path:"*",element:a.jsx(Ma,{})})]})}),a.jsx(am,{})]})})})}di.createRoot(document.getElementById("root")).render(a.jsx(Za.StrictMode,{children:a.jsx(vm,{})}));
