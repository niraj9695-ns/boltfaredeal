function j2(a,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in a)){const c=Object.getOwnPropertyDescriptor(i,s);c&&Object.defineProperty(a,s,c.get?c:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function E2(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _p={exports:{}},fl={},Np={exports:{}},De={};var cx;function S2(){if(cx)return De;cx=1;var a=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,w={};function N(T,Y,se){this.props=T,this.context=Y,this.refs=w,this.updater=se||b}N.prototype.isReactComponent={},N.prototype.setState=function(T,Y){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Y,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function C(){}C.prototype=N.prototype;function A(T,Y,se){this.props=T,this.context=Y,this.refs=w,this.updater=se||b}var S=A.prototype=new C;S.constructor=A,k(S,N.prototype),S.isPureReactComponent=!0;var j=Array.isArray,P=Object.prototype.hasOwnProperty,I={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function B(T,Y,se){var le,ge={},K=null,ue=null;if(Y!=null)for(le in Y.ref!==void 0&&(ue=Y.ref),Y.key!==void 0&&(K=""+Y.key),Y)P.call(Y,le)&&!L.hasOwnProperty(le)&&(ge[le]=Y[le]);var ye=arguments.length-2;if(ye===1)ge.children=se;else if(1<ye){for(var xe=Array(ye),Me=0;Me<ye;Me++)xe[Me]=arguments[Me+2];ge.children=xe}if(T&&T.defaultProps)for(le in ye=T.defaultProps,ye)ge[le]===void 0&&(ge[le]=ye[le]);return{$$typeof:a,type:T,key:K,ref:ue,props:ge,_owner:I.current}}function W(T,Y){return{$$typeof:a,type:T.type,key:Y,ref:T.ref,props:T.props,_owner:T._owner}}function D(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function Q(T){var Y={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(se){return Y[se]})}var F=/\/+/g;function J(T,Y){return typeof T=="object"&&T!==null&&T.key!=null?Q(""+T.key):Y.toString(36)}function $(T,Y,se,le,ge){var K=typeof T;(K==="undefined"||K==="boolean")&&(T=null);var ue=!1;if(T===null)ue=!0;else switch(K){case"string":case"number":ue=!0;break;case"object":switch(T.$$typeof){case a:case t:ue=!0}}if(ue)return ue=T,ge=ge(ue),T=le===""?"."+J(ue,0):le,j(ge)?(se="",T!=null&&(se=T.replace(F,"$&/")+"/"),$(ge,Y,se,"",function(Me){return Me})):ge!=null&&(D(ge)&&(ge=W(ge,se+(!ge.key||ue&&ue.key===ge.key?"":(""+ge.key).replace(F,"$&/")+"/")+T)),Y.push(ge)),1;if(ue=0,le=le===""?".":le+":",j(T))for(var ye=0;ye<T.length;ye++){K=T[ye];var xe=le+J(K,ye);ue+=$(K,Y,se,xe,ge)}else if(xe=v(T),typeof xe=="function")for(T=xe.call(T),ye=0;!(K=T.next()).done;)K=K.value,xe=le+J(K,ye++),ue+=$(K,Y,se,xe,ge);else if(K==="object")throw Y=String(T),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return ue}function ae(T,Y,se){if(T==null)return T;var le=[],ge=0;return $(T,le,"","",function(K){return Y.call(se,K,ge++)}),le}function ce(T){if(T._status===-1){var Y=T._result;Y=Y(),Y.then(function(se){(T._status===0||T._status===-1)&&(T._status=1,T._result=se)},function(se){(T._status===0||T._status===-1)&&(T._status=2,T._result=se)}),T._status===-1&&(T._status=0,T._result=Y)}if(T._status===1)return T._result.default;throw T._result}var ee={current:null},V={transition:null},X={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function E(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:ae,forEach:function(T,Y,se){ae(T,function(){Y.apply(this,arguments)},se)},count:function(T){var Y=0;return ae(T,function(){Y++}),Y},toArray:function(T){return ae(T,function(Y){return Y})||[]},only:function(T){if(!D(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},De.Component=N,De.Fragment=n,De.Profiler=s,De.PureComponent=A,De.StrictMode=i,De.Suspense=p,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,De.act=E,De.cloneElement=function(T,Y,se){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var le=k({},T.props),ge=T.key,K=T.ref,ue=T._owner;if(Y!=null){if(Y.ref!==void 0&&(K=Y.ref,ue=I.current),Y.key!==void 0&&(ge=""+Y.key),T.type&&T.type.defaultProps)var ye=T.type.defaultProps;for(xe in Y)P.call(Y,xe)&&!L.hasOwnProperty(xe)&&(le[xe]=Y[xe]===void 0&&ye!==void 0?ye[xe]:Y[xe])}var xe=arguments.length-2;if(xe===1)le.children=se;else if(1<xe){ye=Array(xe);for(var Me=0;Me<xe;Me++)ye[Me]=arguments[Me+2];le.children=ye}return{$$typeof:a,type:T.type,key:ge,ref:K,props:le,_owner:ue}},De.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:c,_context:T},T.Consumer=T},De.createElement=B,De.createFactory=function(T){var Y=B.bind(null,T);return Y.type=T,Y},De.createRef=function(){return{current:null}},De.forwardRef=function(T){return{$$typeof:f,render:T}},De.isValidElement=D,De.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:ce}},De.memo=function(T,Y){return{$$typeof:m,type:T,compare:Y===void 0?null:Y}},De.startTransition=function(T){var Y=V.transition;V.transition={};try{T()}finally{V.transition=Y}},De.unstable_act=E,De.useCallback=function(T,Y){return ee.current.useCallback(T,Y)},De.useContext=function(T){return ee.current.useContext(T)},De.useDebugValue=function(){},De.useDeferredValue=function(T){return ee.current.useDeferredValue(T)},De.useEffect=function(T,Y){return ee.current.useEffect(T,Y)},De.useId=function(){return ee.current.useId()},De.useImperativeHandle=function(T,Y,se){return ee.current.useImperativeHandle(T,Y,se)},De.useInsertionEffect=function(T,Y){return ee.current.useInsertionEffect(T,Y)},De.useLayoutEffect=function(T,Y){return ee.current.useLayoutEffect(T,Y)},De.useMemo=function(T,Y){return ee.current.useMemo(T,Y)},De.useReducer=function(T,Y,se){return ee.current.useReducer(T,Y,se)},De.useRef=function(T){return ee.current.useRef(T)},De.useState=function(T){return ee.current.useState(T)},De.useSyncExternalStore=function(T,Y,se){return ee.current.useSyncExternalStore(T,Y,se)},De.useTransition=function(){return ee.current.useTransition()},De.version="18.3.1",De}var dx;function Mh(){return dx||(dx=1,Np.exports=S2()),Np.exports}var ux;function A2(){if(ux)return fl;ux=1;var a=Mh(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var g,y={},v=null,b=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(b=p.ref);for(g in p)i.call(p,g)&&!c.hasOwnProperty(g)&&(y[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)y[g]===void 0&&(y[g]=p[g]);return{$$typeof:t,type:f,key:v,ref:b,props:y,_owner:s.current}}return fl.Fragment=n,fl.jsx=u,fl.jsxs=u,fl}var fx;function C2(){return fx||(fx=1,_p.exports=A2()),_p.exports}var o=C2(),z=Mh();const pa=E2(z),T2=j2({__proto__:null,default:pa},[z]);var wd={},jp={exports:{}},Fr={},Ep={exports:{}},Sp={};var px;function P2(){return px||(px=1,(function(a){function t(V,X){var E=V.length;V.push(X);e:for(;0<E;){var T=E-1>>>1,Y=V[T];if(0<s(Y,X))V[T]=X,V[E]=Y,E=T;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var X=V[0],E=V.pop();if(E!==X){V[0]=E;e:for(var T=0,Y=V.length,se=Y>>>1;T<se;){var le=2*(T+1)-1,ge=V[le],K=le+1,ue=V[K];if(0>s(ge,E))K<Y&&0>s(ue,ge)?(V[T]=ue,V[K]=E,T=K):(V[T]=ge,V[le]=E,T=le);else if(K<Y&&0>s(ue,E))V[T]=ue,V[K]=E,T=K;else break e}}return X}function s(V,X){var E=V.sortIndex-X.sortIndex;return E!==0?E:V.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();a.unstable_now=function(){return u.now()-f}}var p=[],m=[],g=1,y=null,v=3,b=!1,k=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var X=n(m);X!==null;){if(X.callback===null)i(m);else if(X.startTime<=V)i(m),X.sortIndex=X.expirationTime,t(p,X);else break;X=n(m)}}function j(V){if(w=!1,S(V),!k)if(n(p)!==null)k=!0,ce(P);else{var X=n(m);X!==null&&ee(j,X.startTime-V)}}function P(V,X){k=!1,w&&(w=!1,C(B),B=-1),b=!0;var E=v;try{for(S(X),y=n(p);y!==null&&(!(y.expirationTime>X)||V&&!Q());){var T=y.callback;if(typeof T=="function"){y.callback=null,v=y.priorityLevel;var Y=T(y.expirationTime<=X);X=a.unstable_now(),typeof Y=="function"?y.callback=Y:y===n(p)&&i(p),S(X)}else i(p);y=n(p)}if(y!==null)var se=!0;else{var le=n(m);le!==null&&ee(j,le.startTime-X),se=!1}return se}finally{y=null,v=E,b=!1}}var I=!1,L=null,B=-1,W=5,D=-1;function Q(){return!(a.unstable_now()-D<W)}function F(){if(L!==null){var V=a.unstable_now();D=V;var X=!0;try{X=L(!0,V)}finally{X?J():(I=!1,L=null)}}else I=!1}var J;if(typeof A=="function")J=function(){A(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ae=$.port2;$.port1.onmessage=F,J=function(){ae.postMessage(null)}}else J=function(){N(F,0)};function ce(V){L=V,I||(I=!0,J())}function ee(V,X){B=N(function(){V(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_continueExecution=function(){k||b||(k=!0,ce(P))},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(V){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var E=v;v=X;try{return V()}finally{v=E}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var E=v;v=V;try{return X()}finally{v=E}},a.unstable_scheduleCallback=function(V,X,E){var T=a.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?T+E:T):E=T,V){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=E+Y,V={id:g++,callback:X,priorityLevel:V,startTime:E,expirationTime:Y,sortIndex:-1},E>T?(V.sortIndex=E,t(m,V),n(p)===null&&V===n(m)&&(w?(C(B),B=-1):w=!0,ee(j,E-T))):(V.sortIndex=Y,t(p,V),k||b||(k=!0,ce(P))),V},a.unstable_shouldYield=Q,a.unstable_wrapCallback=function(V){var X=v;return function(){var E=v;v=X;try{return V.apply(this,arguments)}finally{v=E}}}})(Sp)),Sp}var hx;function R2(){return hx||(hx=1,Ep.exports=P2()),Ep.exports}var mx;function L2(){if(mx)return Fr;mx=1;var a=Mh(),t=R2();function n(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function c(e,r){u(e,r),u(e+"Capture",r)}function u(e,r){for(s[e]=r,e=0;e<r.length;e++)i.add(r[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(e){return p.call(y,e)?!0:p.call(g,e)?!1:m.test(e)?y[e]=!0:(g[e]=!0,!1)}function b(e,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,r,l,d){if(r===null||typeof r>"u"||b(e,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(e,r,l,d,h,x,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=e,this.type=r,this.sanitizeURL=x,this.removeEmptyString=_}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];N[r]=new w(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(C,A);N[r]=new w(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(C,A);N[r]=new w(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(C,A);N[r]=new w(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,r,l,d){var h=N.hasOwnProperty(r)?N[r]:null;(h!==null?h.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(k(r,l,h,d)&&(l=null),d||h===null?v(r)&&(l===null?e.removeAttribute(r):e.setAttribute(r,""+l)):h.mustUseProperty?e[h.propertyName]=l===null?h.type===3?!1:"":l:(r=h.attributeName,d=h.attributeNamespace,l===null?e.removeAttribute(r):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,d?e.setAttributeNS(d,r,l):e.setAttribute(r,l))))}var j=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),Q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),V=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,T;function Y(e){if(T===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+e}var se=!1;function le(e,r){if(!e||se)return"";se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(G){var d=G}Reflect.construct(e,[],r)}else{try{r.call()}catch(G){d=G}e.call(r.prototype)}else{try{throw Error()}catch(G){d=G}e()}}catch(G){if(G&&d&&typeof G.stack=="string"){for(var h=G.stack.split(`
`),x=d.stack.split(`
`),_=h.length-1,R=x.length-1;1<=_&&0<=R&&h[_]!==x[R];)R--;for(;1<=_&&0<=R;_--,R--)if(h[_]!==x[R]){if(_!==1||R!==1)do if(_--,R--,0>R||h[_]!==x[R]){var O=`
`+h[_].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=_&&0<=R);break}}}finally{se=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?Y(e):""}function ge(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case I:return"Portal";case W:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Q:return(e.displayName||"Context")+".Consumer";case D:return(e._context.displayName||"Context")+".Provider";case F:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return r=e.displayName||null,r!==null?r:K(e.type)||"Memo";case ce:r=e._payload,e=e._init;try{return K(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Me(e){var r=xe(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),d=""+e[r];if(!e.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,x=l.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){d=""+_,x.call(this,_)}}),Object.defineProperty(e,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(_){d=""+_},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function wt(e){e._valueTracker||(e._valueTracker=Me(e))}function St(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return e&&(d=xe(e)?e.checked?"true":"false":e.value),e=d,e!==l?(r.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,r){var l=r.checked;return E({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function it(e,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=ye(r.value!=null?r.value:l),e._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function kt(e,r){r=r.checked,r!=null&&S(e,"checked",r,!1)}function q(e,r){kt(e,r);var l=ye(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(d==="submit"||d==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?qr(e,r.type,l):r.hasOwnProperty("defaultValue")&&qr(e,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ar(e,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,l||r===e.value||(e.value=r),e.defaultValue=r}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function qr(e,r,l){(r!=="number"||ne(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var Cr=Array.isArray;function Qe(e,r,l,d){if(e=e.options,r){r={};for(var h=0;h<l.length;h++)r["$"+l[h]]=!0;for(l=0;l<e.length;l++)h=r.hasOwnProperty("$"+e[l].value),e[l].selected!==h&&(e[l].selected=h),h&&d&&(e[l].defaultSelected=!0)}else{for(l=""+ye(l),r=null,h=0;h<e.length;h++){if(e[h].value===l){e[h].selected=!0,d&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Xr(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return E({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zn(e,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(n(92));if(Cr(l)){if(1<l.length)throw Error(n(93));l=l[0]}r=l}r==null&&(r=""),l=r}e._wrapperState={initialValue:ye(l)}}function Jn(e,r){var l=ye(r.value),d=ye(r.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),r.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),d!=null&&(e.defaultValue=""+d)}function At(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function On(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?On(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,gr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,h){MSApp.execUnsafeLocalFunction(function(){return e(r,l,d,h)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function xr(e,r){if(r){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=r;return}}e.textContent=r}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_t=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){_t.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),In[r]=In[e]})});function Ia(e,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||In.hasOwnProperty(e)&&In[e]?(""+r).trim():r+"px"}function pn(e,r){e=e.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,h=Ia(l,r[l],d);l==="float"&&(l="cssFloat"),d?e.setProperty(l,h):e[l]=h}}var Ui=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zn(e,r){if(r){if(Ui[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function hn(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mn=null;function Re(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Yt=null,Gt=null;function Tr(e){if(e=Jo(e)){if(typeof Fn!="function")throw Error(n(280));var r=e.stateNode;r&&(r=Ic(r),Fn(e.stateNode,e.type,r))}}function $n(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function gi(){if(Yt){var e=Yt,r=Gt;if(Gt=Yt=null,Tr(e),r)for(e=0;e<r.length;e++)Tr(r[e])}}function mn(e,r){return e(r)}function Wi(){}var Pe=!1;function _e(e,r,l){if(Pe)return e(r,l);Pe=!0;try{return mn(e,r,l)}finally{Pe=!1,(Yt!==null||Gt!==null)&&(Wi(),gi())}}function We(e,r){var l=e.stateNode;if(l===null)return null;var d=Ic(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(e=e.type,d=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!d;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(n(231,r,typeof l));return l}var de=!1;if(f)try{var Se={};Object.defineProperty(Se,"passive",{get:function(){de=!0}}),window.addEventListener("test",Se,Se),window.removeEventListener("test",Se,Se)}catch{de=!1}function we(e,r,l,d,h,x,_,R,O){var G=Array.prototype.slice.call(arguments,3);try{r.apply(l,G)}catch(re){this.onError(re)}}var Ae=!1,ht=null,Oe=!1,st=null,qt={onError:function(e){Ae=!0,ht=e}};function dt(e,r,l,d,h,x,_,R,O){Ae=!1,ht=null,we.apply(qt,arguments)}function et(e,r,l,d,h,x,_,R,O){if(dt.apply(this,arguments),Ae){if(Ae){var G=ht;Ae=!1,ht=null}else throw Error(n(198));Oe||(Oe=!0,st=G)}}function He(e){var r=e,l=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(l=r.return),e=r.return;while(e)}return r.tag===3?l:null}function Pr(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function tt(e){if(He(e)!==e)throw Error(n(188))}function vr(e){var r=e.alternate;if(!r){if(r=He(e),r===null)throw Error(n(188));return r!==e?null:e}for(var l=e,d=r;;){var h=l.return;if(h===null)break;var x=h.alternate;if(x===null){if(d=h.return,d!==null){l=d;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===l)return tt(h),e;if(x===d)return tt(h),r;x=x.sibling}throw Error(n(188))}if(l.return!==d.return)l=h,d=x;else{for(var _=!1,R=h.child;R;){if(R===l){_=!0,l=h,d=x;break}if(R===d){_=!0,d=h,l=x;break}R=R.sibling}if(!_){for(R=x.child;R;){if(R===l){_=!0,l=x,d=h;break}if(R===d){_=!0,d=x,l=h;break}R=R.sibling}if(!_)throw Error(n(189))}}if(l.alternate!==d)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?e:r}function Qr(e){return e=vr(e),e!==null?Lt(e):null}function Lt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Lt(e);if(r!==null)return r;e=e.sibling}return null}var zt=t.unstable_scheduleCallback,Bt=t.unstable_cancelCallback,xi=t.unstable_shouldYield,_s=t.unstable_requestPaint,Fe=t.unstable_now,Ct=t.unstable_getCurrentPriorityLevel,Rr=t.unstable_ImmediatePriority,Ns=t.unstable_UserBlockingPriority,Ma=t.unstable_NormalPriority,Fa=t.unstable_LowPriority,Kr=t.unstable_IdlePriority,ei=null,yr=null;function ti(e){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:Hb,Ub=Math.log,Wb=Math.LN2;function Hb(e){return e>>>=0,e===0?32:31-(Ub(e)/Wb|0)|0}var vc=64,yc=4194304;function Lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bc(e,r){var l=e.pendingLanes;if(l===0)return 0;var d=0,h=e.suspendedLanes,x=e.pingedLanes,_=l&268435455;if(_!==0){var R=_&~h;R!==0?d=Lo(R):(x&=_,x!==0&&(d=Lo(x)))}else _=l&~h,_!==0?d=Lo(_):x!==0&&(d=Lo(x));if(d===0)return 0;if(r!==0&&r!==d&&(r&h)===0&&(h=d&-d,x=r&-r,h>=x||h===16&&(x&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=d;0<r;)l=31-Dn(r),h=1<<l,d|=e[l],r&=~h;return d}function Vb(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yb(e,r){for(var l=e.suspendedLanes,d=e.pingedLanes,h=e.expirationTimes,x=e.pendingLanes;0<x;){var _=31-Dn(x),R=1<<_,O=h[_];O===-1?((R&l)===0||(R&d)!==0)&&(h[_]=Vb(R,r)):O<=r&&(e.expiredLanes|=R),x&=~R}}function Hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bm(){var e=vc;return vc<<=1,(vc&4194240)===0&&(vc=64),e}function Vu(e){for(var r=[],l=0;31>l;l++)r.push(e);return r}function zo(e,r,l){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Dn(r),e[r]=l}function Gb(e,r){var l=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var d=e.eventTimes;for(e=e.expirationTimes;0<l;){var h=31-Dn(l),x=1<<h;r[h]=0,d[h]=-1,e[h]=-1,l&=~x}}function Yu(e,r){var l=e.entangledLanes|=r;for(e=e.entanglements;l;){var d=31-Dn(l),h=1<<d;h&r|e[d]&r&&(e[d]|=r),l&=~h}}var Ke=0;function Um(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wm,Gu,Hm,Vm,Ym,qu=!1,wc=[],Hi=null,Vi=null,Yi=null,Oo=new Map,Io=new Map,Gi=[],qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(e,r){switch(e){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Oo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(r.pointerId)}}function Mo(e,r,l,d,h,x){return e===null||e.nativeEvent!==x?(e={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[h]},r!==null&&(r=Jo(r),r!==null&&Gu(r)),e):(e.eventSystemFlags|=d,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function Xb(e,r,l,d,h){switch(r){case"focusin":return Hi=Mo(Hi,e,r,l,d,h),!0;case"dragenter":return Vi=Mo(Vi,e,r,l,d,h),!0;case"mouseover":return Yi=Mo(Yi,e,r,l,d,h),!0;case"pointerover":var x=h.pointerId;return Oo.set(x,Mo(Oo.get(x)||null,e,r,l,d,h)),!0;case"gotpointercapture":return x=h.pointerId,Io.set(x,Mo(Io.get(x)||null,e,r,l,d,h)),!0}return!1}function qm(e){var r=Da(e.target);if(r!==null){var l=He(r);if(l!==null){if(r=l.tag,r===13){if(r=Pr(l),r!==null){e.blockedOn=r,Ym(e.priority,function(){Hm(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var l=Qu(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var d=new l.constructor(l.type,l);Mn=d,l.target.dispatchEvent(d),Mn=null}else return r=Jo(l),r!==null&&Gu(r),e.blockedOn=l,!1;r.shift()}return!0}function Xm(e,r,l){kc(e)&&l.delete(r)}function Qb(){qu=!1,Hi!==null&&kc(Hi)&&(Hi=null),Vi!==null&&kc(Vi)&&(Vi=null),Yi!==null&&kc(Yi)&&(Yi=null),Oo.forEach(Xm),Io.forEach(Xm)}function Fo(e,r){e.blockedOn===r&&(e.blockedOn=null,qu||(qu=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Qb)))}function Do(e){function r(h){return Fo(h,e)}if(0<wc.length){Fo(wc[0],e);for(var l=1;l<wc.length;l++){var d=wc[l];d.blockedOn===e&&(d.blockedOn=null)}}for(Hi!==null&&Fo(Hi,e),Vi!==null&&Fo(Vi,e),Yi!==null&&Fo(Yi,e),Oo.forEach(r),Io.forEach(r),l=0;l<Gi.length;l++)d=Gi[l],d.blockedOn===e&&(d.blockedOn=null);for(;0<Gi.length&&(l=Gi[0],l.blockedOn===null);)qm(l),l.blockedOn===null&&Gi.shift()}var js=j.ReactCurrentBatchConfig,_c=!0;function Kb(e,r,l,d){var h=Ke,x=js.transition;js.transition=null;try{Ke=1,Xu(e,r,l,d)}finally{Ke=h,js.transition=x}}function Jb(e,r,l,d){var h=Ke,x=js.transition;js.transition=null;try{Ke=4,Xu(e,r,l,d)}finally{Ke=h,js.transition=x}}function Xu(e,r,l,d){if(_c){var h=Qu(e,r,l,d);if(h===null)pf(e,r,d,Nc,l),Gm(e,d);else if(Xb(h,e,r,l,d))d.stopPropagation();else if(Gm(e,d),r&4&&-1<qb.indexOf(e)){for(;h!==null;){var x=Jo(h);if(x!==null&&Wm(x),x=Qu(e,r,l,d),x===null&&pf(e,r,d,Nc,l),x===h)break;h=x}h!==null&&d.stopPropagation()}else pf(e,r,d,null,l)}}var Nc=null;function Qu(e,r,l,d){if(Nc=null,e=Re(d),e=Da(e),e!==null)if(r=He(e),r===null)e=null;else if(l=r.tag,l===13){if(e=Pr(r),e!==null)return e;e=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Nc=e,null}function Qm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ct()){case Rr:return 1;case Ns:return 4;case Ma:case Fa:return 16;case Kr:return 536870912;default:return 16}default:return 16}}var qi=null,Ku=null,jc=null;function Km(){if(jc)return jc;var e,r=Ku,l=r.length,d,h="value"in qi?qi.value:qi.textContent,x=h.length;for(e=0;e<l&&r[e]===h[e];e++);var _=l-e;for(d=1;d<=_&&r[l-d]===h[x-d];d++);return jc=h.slice(e,1<d?1-d:void 0)}function Ec(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Sc(){return!0}function Jm(){return!1}function Jr(e){function r(l,d,h,x,_){this._reactName=l,this._targetInst=h,this.type=d,this.nativeEvent=x,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(l=e[R],this[R]=l?l(x):x[R]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Sc:Jm,this.isPropagationStopped=Jm,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sc)},persist:function(){},isPersistent:Sc}),r}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Jr(Es),Bo=E({},Es,{view:0,detail:0}),Zb=Jr(Bo),Zu,$u,Uo,Ac=E({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(Zu=e.screenX-Uo.screenX,$u=e.screenY-Uo.screenY):$u=Zu=0,Uo=e),Zu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),Zm=Jr(Ac),$b=E({},Ac,{dataTransfer:0}),ew=Jr($b),tw=E({},Bo,{relatedTarget:0}),ef=Jr(tw),rw=E({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),nw=Jr(rw),iw=E({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aw=Jr(iw),sw=E({},Es,{data:0}),$m=Jr(sw),ow={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dw(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=cw[e])?!!r[e]:!1}function tf(){return dw}var uw=E({},Bo,{key:function(e){if(e.key){var r=ow[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?Ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fw=Jr(uw),pw=E({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Jr(pw),hw=E({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),mw=Jr(hw),gw=E({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),xw=Jr(gw),vw=E({},Ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yw=Jr(vw),bw=[9,13,27,32],rf=f&&"CompositionEvent"in window,Wo=null;f&&"documentMode"in document&&(Wo=document.documentMode);var ww=f&&"TextEvent"in window&&!Wo,tg=f&&(!rf||Wo&&8<Wo&&11>=Wo),rg=" ",ng=!1;function ig(e,r){switch(e){case"keyup":return bw.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ss=!1;function kw(e,r){switch(e){case"compositionend":return ag(r);case"keypress":return r.which!==32?null:(ng=!0,rg);case"textInput":return e=r.data,e===rg&&ng?null:e;default:return null}}function _w(e,r){if(Ss)return e==="compositionend"||!rf&&ig(e,r)?(e=Km(),jc=Ku=qi=null,Ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return tg&&r.locale!=="ko"?null:r.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Nw[e.type]:r==="textarea"}function og(e,r,l,d){$n(d),r=Lc(r,"onChange"),0<r.length&&(l=new Ju("onChange","change",null,l,d),e.push({event:l,listeners:r}))}var Ho=null,Vo=null;function jw(e){jg(e,0)}function Cc(e){var r=Rs(e);if(St(r))return e}function Ew(e,r){if(e==="change")return r}var lg=!1;if(f){var nf;if(f){var af="oninput"in document;if(!af){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),af=typeof cg.oninput=="function"}nf=af}else nf=!1;lg=nf&&(!document.documentMode||9<document.documentMode)}function dg(){Ho&&(Ho.detachEvent("onpropertychange",ug),Vo=Ho=null)}function ug(e){if(e.propertyName==="value"&&Cc(Vo)){var r=[];og(r,Vo,e,Re(e)),_e(jw,r)}}function Sw(e,r,l){e==="focusin"?(dg(),Ho=r,Vo=l,Ho.attachEvent("onpropertychange",ug)):e==="focusout"&&dg()}function Aw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cc(Vo)}function Cw(e,r){if(e==="click")return Cc(r)}function Tw(e,r){if(e==="input"||e==="change")return Cc(r)}function Pw(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Bn=typeof Object.is=="function"?Object.is:Pw;function Yo(e,r){if(Bn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var l=Object.keys(e),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var h=l[d];if(!p.call(r,h)||!Bn(e[h],r[h]))return!1}return!0}function fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pg(e,r){var l=fg(e);e=0;for(var d;l;){if(l.nodeType===3){if(d=e+l.textContent.length,e<=r&&d>=r)return{node:l,offset:r-e};e=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=fg(l)}}function hg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?hg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function mg(){for(var e=window,r=ne();r instanceof e.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)e=r.contentWindow;else break;r=ne(e.document)}return r}function sf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Rw(e){var r=mg(),l=e.focusedElem,d=e.selectionRange;if(r!==l&&l&&l.ownerDocument&&hg(l.ownerDocument.documentElement,l)){if(d!==null&&sf(l)){if(r=d.start,e=d.end,e===void 0&&(e=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(e,l.value.length);else if(e=(r=l.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var h=l.textContent.length,x=Math.min(d.start,h);d=d.end===void 0?x:Math.min(d.end,h),!e.extend&&x>d&&(h=d,d=x,x=h),h=pg(l,x);var _=pg(l,d);h&&_&&(e.rangeCount!==1||e.anchorNode!==h.node||e.anchorOffset!==h.offset||e.focusNode!==_.node||e.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),e.removeAllRanges(),x>d?(e.addRange(r),e.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),e.addRange(r)))}}for(r=[],e=l;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)e=r[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lw=f&&"documentMode"in document&&11>=document.documentMode,As=null,of=null,Go=null,lf=!1;function gg(e,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;lf||As==null||As!==ne(d)||(d=As,"selectionStart"in d&&sf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Go&&Yo(Go,d)||(Go=d,d=Lc(of,"onSelect"),0<d.length&&(r=new Ju("onSelect","select",null,r,l),e.push({event:r,listeners:d}),r.target=As)))}function Tc(e,r){var l={};return l[e.toLowerCase()]=r.toLowerCase(),l["Webkit"+e]="webkit"+r,l["Moz"+e]="moz"+r,l}var Cs={animationend:Tc("Animation","AnimationEnd"),animationiteration:Tc("Animation","AnimationIteration"),animationstart:Tc("Animation","AnimationStart"),transitionend:Tc("Transition","TransitionEnd")},cf={},xg={};f&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Pc(e){if(cf[e])return cf[e];if(!Cs[e])return e;var r=Cs[e],l;for(l in r)if(r.hasOwnProperty(l)&&l in xg)return cf[e]=r[l];return e}var vg=Pc("animationend"),yg=Pc("animationiteration"),bg=Pc("animationstart"),wg=Pc("transitionend"),kg=new Map,_g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(e,r){kg.set(e,r),c(r,[e])}for(var df=0;df<_g.length;df++){var uf=_g[df],zw=uf.toLowerCase(),Ow=uf[0].toUpperCase()+uf.slice(1);Xi(zw,"on"+Ow)}Xi(vg,"onAnimationEnd"),Xi(yg,"onAnimationIteration"),Xi(bg,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(wg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Ng(e,r,l){var d=e.type||"unknown-event";e.currentTarget=l,et(d,r,void 0,e),e.currentTarget=null}function jg(e,r){r=(r&4)!==0;for(var l=0;l<e.length;l++){var d=e[l],h=d.event;d=d.listeners;e:{var x=void 0;if(r)for(var _=d.length-1;0<=_;_--){var R=d[_],O=R.instance,G=R.currentTarget;if(R=R.listener,O!==x&&h.isPropagationStopped())break e;Ng(h,R,G),x=O}else for(_=0;_<d.length;_++){if(R=d[_],O=R.instance,G=R.currentTarget,R=R.listener,O!==x&&h.isPropagationStopped())break e;Ng(h,R,G),x=O}}}if(Oe)throw e=st,Oe=!1,st=null,e}function ot(e,r){var l=r[yf];l===void 0&&(l=r[yf]=new Set);var d=e+"__bubble";l.has(d)||(Eg(r,e,2,!1),l.add(d))}function ff(e,r,l){var d=0;r&&(d|=4),Eg(l,e,d,r)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[Rc]){e[Rc]=!0,i.forEach(function(l){l!=="selectionchange"&&(Iw.has(l)||ff(l,!1,e),ff(l,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Rc]||(r[Rc]=!0,ff("selectionchange",!1,r))}}function Eg(e,r,l,d){switch(Qm(r)){case 1:var h=Kb;break;case 4:h=Jb;break;default:h=Xu}l=h.bind(null,r,l,e),h=void 0,!de||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),d?h!==void 0?e.addEventListener(r,l,{capture:!0,passive:h}):e.addEventListener(r,l,!0):h!==void 0?e.addEventListener(r,l,{passive:h}):e.addEventListener(r,l,!1)}function pf(e,r,l,d,h){var x=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var _=d.tag;if(_===3||_===4){var R=d.stateNode.containerInfo;if(R===h||R.nodeType===8&&R.parentNode===h)break;if(_===4)for(_=d.return;_!==null;){var O=_.tag;if((O===3||O===4)&&(O=_.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;_=_.return}for(;R!==null;){if(_=Da(R),_===null)return;if(O=_.tag,O===5||O===6){d=x=_;continue e}R=R.parentNode}}d=d.return}_e(function(){var G=x,re=Re(l),ie=[];e:{var te=kg.get(e);if(te!==void 0){var fe=Ju,me=e;switch(e){case"keypress":if(Ec(l)===0)break e;case"keydown":case"keyup":fe=fw;break;case"focusin":me="focus",fe=ef;break;case"focusout":me="blur",fe=ef;break;case"beforeblur":case"afterblur":fe=ef;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=mw;break;case vg:case yg:case bg:fe=nw;break;case wg:fe=xw;break;case"scroll":fe=Zb;break;case"wheel":fe=yw;break;case"copy":case"cut":case"paste":fe=aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=eg}var ve=(r&4)!==0,Tt=!ve&&e==="scroll",U=ve?te!==null?te+"Capture":null:te;ve=[];for(var M=G,H;M!==null;){H=M;var oe=H.stateNode;if(H.tag===5&&oe!==null&&(H=oe,U!==null&&(oe=We(M,U),oe!=null&&ve.push(Qo(M,oe,H)))),Tt)break;M=M.return}0<ve.length&&(te=new fe(te,me,null,l,re),ie.push({event:te,listeners:ve}))}}if((r&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",te&&l!==Mn&&(me=l.relatedTarget||l.fromElement)&&(Da(me)||me[vi]))break e;if((fe||te)&&(te=re.window===re?re:(te=re.ownerDocument)?te.defaultView||te.parentWindow:window,fe?(me=l.relatedTarget||l.toElement,fe=G,me=me?Da(me):null,me!==null&&(Tt=He(me),me!==Tt||me.tag!==5&&me.tag!==6)&&(me=null)):(fe=null,me=G),fe!==me)){if(ve=Zm,oe="onMouseLeave",U="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ve=eg,oe="onPointerLeave",U="onPointerEnter",M="pointer"),Tt=fe==null?te:Rs(fe),H=me==null?te:Rs(me),te=new ve(oe,M+"leave",fe,l,re),te.target=Tt,te.relatedTarget=H,oe=null,Da(re)===G&&(ve=new ve(U,M+"enter",me,l,re),ve.target=H,ve.relatedTarget=Tt,oe=ve),Tt=oe,fe&&me)t:{for(ve=fe,U=me,M=0,H=ve;H;H=Ts(H))M++;for(H=0,oe=U;oe;oe=Ts(oe))H++;for(;0<M-H;)ve=Ts(ve),M--;for(;0<H-M;)U=Ts(U),H--;for(;M--;){if(ve===U||U!==null&&ve===U.alternate)break t;ve=Ts(ve),U=Ts(U)}ve=null}else ve=null;fe!==null&&Sg(ie,te,fe,ve,!1),me!==null&&Tt!==null&&Sg(ie,Tt,me,ve,!0)}}e:{if(te=G?Rs(G):window,fe=te.nodeName&&te.nodeName.toLowerCase(),fe==="select"||fe==="input"&&te.type==="file")var be=Ew;else if(sg(te))if(lg)be=Tw;else{be=Aw;var Ne=Sw}else(fe=te.nodeName)&&fe.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(be=Cw);if(be&&(be=be(e,G))){og(ie,be,l,re);break e}Ne&&Ne(e,te,G),e==="focusout"&&(Ne=te._wrapperState)&&Ne.controlled&&te.type==="number"&&qr(te,"number",te.value)}switch(Ne=G?Rs(G):window,e){case"focusin":(sg(Ne)||Ne.contentEditable==="true")&&(As=Ne,of=G,Go=null);break;case"focusout":Go=of=As=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,gg(ie,l,re);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":gg(ie,l,re)}var je;if(rf)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ss?ig(e,l)&&(Te="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(tg&&l.locale!=="ko"&&(Ss||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ss&&(je=Km()):(qi=re,Ku="value"in qi?qi.value:qi.textContent,Ss=!0)),Ne=Lc(G,Te),0<Ne.length&&(Te=new $m(Te,e,null,l,re),ie.push({event:Te,listeners:Ne}),je?Te.data=je:(je=ag(l),je!==null&&(Te.data=je)))),(je=ww?kw(e,l):_w(e,l))&&(G=Lc(G,"onBeforeInput"),0<G.length&&(re=new $m("onBeforeInput","beforeinput",null,l,re),ie.push({event:re,listeners:G}),re.data=je))}jg(ie,r)})}function Qo(e,r,l){return{instance:e,listener:r,currentTarget:l}}function Lc(e,r){for(var l=r+"Capture",d=[];e!==null;){var h=e,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=We(e,l),x!=null&&d.unshift(Qo(e,x,h)),x=We(e,r),x!=null&&d.push(Qo(e,x,h))),e=e.return}return d}function Ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sg(e,r,l,d,h){for(var x=r._reactName,_=[];l!==null&&l!==d;){var R=l,O=R.alternate,G=R.stateNode;if(O!==null&&O===d)break;R.tag===5&&G!==null&&(R=G,h?(O=We(l,x),O!=null&&_.unshift(Qo(l,O,R))):h||(O=We(l,x),O!=null&&_.push(Qo(l,O,R)))),l=l.return}_.length!==0&&e.push({event:r,listeners:_})}var Mw=/\r\n?/g,Fw=/\u0000|\uFFFD/g;function Ag(e){return(typeof e=="string"?e:""+e).replace(Mw,`
`).replace(Fw,"")}function zc(e,r,l){if(r=Ag(r),Ag(e)!==r&&l)throw Error(n(425))}function Oc(){}var hf=null,mf=null;function gf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,Bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(e){return Cg.resolve(null).then(e).catch(Uw)}:xf;function Uw(e){setTimeout(function(){throw e})}function vf(e,r){var l=r,d=0;do{var h=l.nextSibling;if(e.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(d===0){e.removeChild(h),Do(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=h}while(l);Do(r)}function Qi(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Tg(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return e;r--}else l==="/$"&&r++}e=e.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),ri="__reactFiber$"+Ps,Ko="__reactProps$"+Ps,vi="__reactContainer$"+Ps,yf="__reactEvents$"+Ps,Ww="__reactListeners$"+Ps,Hw="__reactHandles$"+Ps;function Da(e){var r=e[ri];if(r)return r;for(var l=e.parentNode;l;){if(r=l[vi]||l[ri]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(e=Tg(e);e!==null;){if(l=e[ri])return l;e=Tg(e)}return r}e=l,l=e.parentNode}return null}function Jo(e){return e=e[ri]||e[vi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(n(33))}function Ic(e){return e[Ko]||null}var bf=[],Ls=-1;function Ki(e){return{current:e}}function lt(e){0>Ls||(e.current=bf[Ls],bf[Ls]=null,Ls--)}function rt(e,r){Ls++,bf[Ls]=e.current,e.current=r}var Ji={},or=Ki(Ji),Lr=Ki(!1),Ba=Ji;function zs(e,r){var l=e.type.contextTypes;if(!l)return Ji;var d=e.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in l)h[x]=r[x];return d&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=h),h}function zr(e){return e=e.childContextTypes,e!=null}function Mc(){lt(Lr),lt(or)}function Pg(e,r,l){if(or.current!==Ji)throw Error(n(168));rt(or,r),rt(Lr,l)}function Rg(e,r,l){var d=e.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var h in d)if(!(h in r))throw Error(n(108,ue(e)||"Unknown",h));return E({},l,d)}function Fc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ji,Ba=or.current,rt(or,e),rt(Lr,Lr.current),!0}function Lg(e,r,l){var d=e.stateNode;if(!d)throw Error(n(169));l?(e=Rg(e,r,Ba),d.__reactInternalMemoizedMergedChildContext=e,lt(Lr),lt(or),rt(or,e)):lt(Lr),rt(Lr,l)}var yi=null,Dc=!1,wf=!1;function zg(e){yi===null?yi=[e]:yi.push(e)}function Vw(e){Dc=!0,zg(e)}function Zi(){if(!wf&&yi!==null){wf=!0;var e=0,r=Ke;try{var l=yi;for(Ke=1;e<l.length;e++){var d=l[e];do d=d(!0);while(d!==null)}yi=null,Dc=!1}catch(h){throw yi!==null&&(yi=yi.slice(e+1)),zt(Rr,Zi),h}finally{Ke=r,wf=!1}}return null}var Os=[],Is=0,Bc=null,Uc=0,gn=[],xn=0,Ua=null,bi=1,wi="";function Wa(e,r){Os[Is++]=Uc,Os[Is++]=Bc,Bc=e,Uc=r}function Og(e,r,l){gn[xn++]=bi,gn[xn++]=wi,gn[xn++]=Ua,Ua=e;var d=bi;e=wi;var h=32-Dn(d)-1;d&=~(1<<h),l+=1;var x=32-Dn(r)+h;if(30<x){var _=h-h%5;x=(d&(1<<_)-1).toString(32),d>>=_,h-=_,bi=1<<32-Dn(r)+h|l<<h|d,wi=x+e}else bi=1<<x|l<<h|d,wi=e}function kf(e){e.return!==null&&(Wa(e,1),Og(e,1,0))}function _f(e){for(;e===Bc;)Bc=Os[--Is],Os[Is]=null,Uc=Os[--Is],Os[Is]=null;for(;e===Ua;)Ua=gn[--xn],gn[xn]=null,wi=gn[--xn],gn[xn]=null,bi=gn[--xn],gn[xn]=null}var Zr=null,$r=null,ut=!1,Un=null;function Ig(e,r){var l=wn(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=e,r=e.deletions,r===null?(e.deletions=[l],e.flags|=16):r.push(l)}function Mg(e,r){switch(e.tag){case 5:var l=e.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Zr=e,$r=Qi(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Zr=e,$r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Ua!==null?{id:bi,overflow:wi}:null,e.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=wn(18,null,null,0),l.stateNode=r,l.return=e,e.child=l,Zr=e,$r=null,!0):!1;default:return!1}}function Nf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jf(e){if(ut){var r=$r;if(r){var l=r;if(!Mg(e,r)){if(Nf(e))throw Error(n(418));r=Qi(l.nextSibling);var d=Zr;r&&Mg(e,r)?Ig(d,l):(e.flags=e.flags&-4097|2,ut=!1,Zr=e)}}else{if(Nf(e))throw Error(n(418));e.flags=e.flags&-4097|2,ut=!1,Zr=e}}}function Fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zr=e}function Wc(e){if(e!==Zr)return!1;if(!ut)return Fg(e),ut=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!gf(e.type,e.memoizedProps)),r&&(r=$r)){if(Nf(e))throw Dg(),Error(n(418));for(;r;)Ig(e,r),r=Qi(r.nextSibling)}if(Fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(r===0){$r=Qi(e.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}e=e.nextSibling}$r=null}}else $r=Zr?Qi(e.stateNode.nextSibling):null;return!0}function Dg(){for(var e=$r;e;)e=Qi(e.nextSibling)}function Ms(){$r=Zr=null,ut=!1}function Ef(e){Un===null?Un=[e]:Un.push(e)}var Yw=j.ReactCurrentBatchConfig;function Zo(e,r,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var d=l.stateNode}if(!d)throw Error(n(147,e));var h=d,x=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(_){var R=h.refs;_===null?delete R[x]:R[x]=_},r._stringRef=x,r)}if(typeof e!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,e))}return e}function Hc(e,r){throw e=Object.prototype.toString.call(r),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Bg(e){var r=e._init;return r(e._payload)}function Ug(e){function r(U,M){if(e){var H=U.deletions;H===null?(U.deletions=[M],U.flags|=16):H.push(M)}}function l(U,M){if(!e)return null;for(;M!==null;)r(U,M),M=M.sibling;return null}function d(U,M){for(U=new Map;M!==null;)M.key!==null?U.set(M.key,M):U.set(M.index,M),M=M.sibling;return U}function h(U,M){return U=sa(U,M),U.index=0,U.sibling=null,U}function x(U,M,H){return U.index=H,e?(H=U.alternate,H!==null?(H=H.index,H<M?(U.flags|=2,M):H):(U.flags|=2,M)):(U.flags|=1048576,M)}function _(U){return e&&U.alternate===null&&(U.flags|=2),U}function R(U,M,H,oe){return M===null||M.tag!==6?(M=xp(H,U.mode,oe),M.return=U,M):(M=h(M,H),M.return=U,M)}function O(U,M,H,oe){var be=H.type;return be===L?re(U,M,H.props.children,oe,H.key):M!==null&&(M.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ce&&Bg(be)===M.type)?(oe=h(M,H.props),oe.ref=Zo(U,M,H),oe.return=U,oe):(oe=pd(H.type,H.key,H.props,null,U.mode,oe),oe.ref=Zo(U,M,H),oe.return=U,oe)}function G(U,M,H,oe){return M===null||M.tag!==4||M.stateNode.containerInfo!==H.containerInfo||M.stateNode.implementation!==H.implementation?(M=vp(H,U.mode,oe),M.return=U,M):(M=h(M,H.children||[]),M.return=U,M)}function re(U,M,H,oe,be){return M===null||M.tag!==7?(M=Ka(H,U.mode,oe,be),M.return=U,M):(M=h(M,H),M.return=U,M)}function ie(U,M,H){if(typeof M=="string"&&M!==""||typeof M=="number")return M=xp(""+M,U.mode,H),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case P:return H=pd(M.type,M.key,M.props,null,U.mode,H),H.ref=Zo(U,null,M),H.return=U,H;case I:return M=vp(M,U.mode,H),M.return=U,M;case ce:var oe=M._init;return ie(U,oe(M._payload),H)}if(Cr(M)||X(M))return M=Ka(M,U.mode,H,null),M.return=U,M;Hc(U,M)}return null}function te(U,M,H,oe){var be=M!==null?M.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return be!==null?null:R(U,M,""+H,oe);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case P:return H.key===be?O(U,M,H,oe):null;case I:return H.key===be?G(U,M,H,oe):null;case ce:return be=H._init,te(U,M,be(H._payload),oe)}if(Cr(H)||X(H))return be!==null?null:re(U,M,H,oe,null);Hc(U,H)}return null}function fe(U,M,H,oe,be){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return U=U.get(H)||null,R(M,U,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case P:return U=U.get(oe.key===null?H:oe.key)||null,O(M,U,oe,be);case I:return U=U.get(oe.key===null?H:oe.key)||null,G(M,U,oe,be);case ce:var Ne=oe._init;return fe(U,M,H,Ne(oe._payload),be)}if(Cr(oe)||X(oe))return U=U.get(H)||null,re(M,U,oe,be,null);Hc(M,oe)}return null}function me(U,M,H,oe){for(var be=null,Ne=null,je=M,Te=M=0,Kt=null;je!==null&&Te<H.length;Te++){je.index>Te?(Kt=je,je=null):Kt=je.sibling;var Ge=te(U,je,H[Te],oe);if(Ge===null){je===null&&(je=Kt);break}e&&je&&Ge.alternate===null&&r(U,je),M=x(Ge,M,Te),Ne===null?be=Ge:Ne.sibling=Ge,Ne=Ge,je=Kt}if(Te===H.length)return l(U,je),ut&&Wa(U,Te),be;if(je===null){for(;Te<H.length;Te++)je=ie(U,H[Te],oe),je!==null&&(M=x(je,M,Te),Ne===null?be=je:Ne.sibling=je,Ne=je);return ut&&Wa(U,Te),be}for(je=d(U,je);Te<H.length;Te++)Kt=fe(je,U,Te,H[Te],oe),Kt!==null&&(e&&Kt.alternate!==null&&je.delete(Kt.key===null?Te:Kt.key),M=x(Kt,M,Te),Ne===null?be=Kt:Ne.sibling=Kt,Ne=Kt);return e&&je.forEach(function(oa){return r(U,oa)}),ut&&Wa(U,Te),be}function ve(U,M,H,oe){var be=X(H);if(typeof be!="function")throw Error(n(150));if(H=be.call(H),H==null)throw Error(n(151));for(var Ne=be=null,je=M,Te=M=0,Kt=null,Ge=H.next();je!==null&&!Ge.done;Te++,Ge=H.next()){je.index>Te?(Kt=je,je=null):Kt=je.sibling;var oa=te(U,je,Ge.value,oe);if(oa===null){je===null&&(je=Kt);break}e&&je&&oa.alternate===null&&r(U,je),M=x(oa,M,Te),Ne===null?be=oa:Ne.sibling=oa,Ne=oa,je=Kt}if(Ge.done)return l(U,je),ut&&Wa(U,Te),be;if(je===null){for(;!Ge.done;Te++,Ge=H.next())Ge=ie(U,Ge.value,oe),Ge!==null&&(M=x(Ge,M,Te),Ne===null?be=Ge:Ne.sibling=Ge,Ne=Ge);return ut&&Wa(U,Te),be}for(je=d(U,je);!Ge.done;Te++,Ge=H.next())Ge=fe(je,U,Te,Ge.value,oe),Ge!==null&&(e&&Ge.alternate!==null&&je.delete(Ge.key===null?Te:Ge.key),M=x(Ge,M,Te),Ne===null?be=Ge:Ne.sibling=Ge,Ne=Ge);return e&&je.forEach(function(N2){return r(U,N2)}),ut&&Wa(U,Te),be}function Tt(U,M,H,oe){if(typeof H=="object"&&H!==null&&H.type===L&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case P:e:{for(var be=H.key,Ne=M;Ne!==null;){if(Ne.key===be){if(be=H.type,be===L){if(Ne.tag===7){l(U,Ne.sibling),M=h(Ne,H.props.children),M.return=U,U=M;break e}}else if(Ne.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ce&&Bg(be)===Ne.type){l(U,Ne.sibling),M=h(Ne,H.props),M.ref=Zo(U,Ne,H),M.return=U,U=M;break e}l(U,Ne);break}else r(U,Ne);Ne=Ne.sibling}H.type===L?(M=Ka(H.props.children,U.mode,oe,H.key),M.return=U,U=M):(oe=pd(H.type,H.key,H.props,null,U.mode,oe),oe.ref=Zo(U,M,H),oe.return=U,U=oe)}return _(U);case I:e:{for(Ne=H.key;M!==null;){if(M.key===Ne)if(M.tag===4&&M.stateNode.containerInfo===H.containerInfo&&M.stateNode.implementation===H.implementation){l(U,M.sibling),M=h(M,H.children||[]),M.return=U,U=M;break e}else{l(U,M);break}else r(U,M);M=M.sibling}M=vp(H,U.mode,oe),M.return=U,U=M}return _(U);case ce:return Ne=H._init,Tt(U,M,Ne(H._payload),oe)}if(Cr(H))return me(U,M,H,oe);if(X(H))return ve(U,M,H,oe);Hc(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,M!==null&&M.tag===6?(l(U,M.sibling),M=h(M,H),M.return=U,U=M):(l(U,M),M=xp(H,U.mode,oe),M.return=U,U=M),_(U)):l(U,M)}return Tt}var Fs=Ug(!0),Wg=Ug(!1),Vc=Ki(null),Yc=null,Ds=null,Sf=null;function Af(){Sf=Ds=Yc=null}function Cf(e){var r=Vc.current;lt(Vc),e._currentValue=r}function Tf(e,r,l){for(;e!==null;){var d=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),e===l)break;e=e.return}}function Bs(e,r){Yc=e,Sf=Ds=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Or=!0),e.firstContext=null)}function vn(e){var r=e._currentValue;if(Sf!==e)if(e={context:e,memoizedValue:r,next:null},Ds===null){if(Yc===null)throw Error(n(308));Ds=e,Yc.dependencies={lanes:0,firstContext:e}}else Ds=Ds.next=e;return r}var Ha=null;function Pf(e){Ha===null?Ha=[e]:Ha.push(e)}function Hg(e,r,l,d){var h=r.interleaved;return h===null?(l.next=l,Pf(r)):(l.next=h.next,h.next=l),r.interleaved=l,ki(e,d)}function ki(e,r){e.lanes|=r;var l=e.alternate;for(l!==null&&(l.lanes|=r),l=e,e=e.return;e!==null;)e.childLanes|=r,l=e.alternate,l!==null&&(l.childLanes|=r),l=e,e=e.return;return l.tag===3?l.stateNode:null}var $i=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _i(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ea(e,r,l){var d=e.updateQueue;if(d===null)return null;if(d=d.shared,(Ye&2)!==0){var h=d.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),d.pending=r,ki(e,l)}return h=d.interleaved,h===null?(r.next=r,Pf(d)):(r.next=h.next,h.next=r),d.interleaved=r,ki(e,l)}function Gc(e,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=e.pendingLanes,l|=d,r.lanes=l,Yu(e,l)}}function Yg(e,r){var l=e.updateQueue,d=e.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var h=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var _={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?h=x=_:x=x.next=_,l=l.next}while(l!==null);x===null?h=x=r:x=x.next=r}else h=x=r;l={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:d.shared,effects:d.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=r:e.next=r,l.lastBaseUpdate=r}function qc(e,r,l,d){var h=e.updateQueue;$i=!1;var x=h.firstBaseUpdate,_=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var O=R,G=O.next;O.next=null,_===null?x=G:_.next=G,_=O;var re=e.alternate;re!==null&&(re=re.updateQueue,R=re.lastBaseUpdate,R!==_&&(R===null?re.firstBaseUpdate=G:R.next=G,re.lastBaseUpdate=O))}if(x!==null){var ie=h.baseState;_=0,re=G=O=null,R=x;do{var te=R.lane,fe=R.eventTime;if((d&te)===te){re!==null&&(re=re.next={eventTime:fe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var me=e,ve=R;switch(te=r,fe=l,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){ie=me.call(fe,ie,te);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,te=typeof me=="function"?me.call(fe,ie,te):me,te==null)break e;ie=E({},ie,te);break e;case 2:$i=!0}}R.callback!==null&&R.lane!==0&&(e.flags|=64,te=h.effects,te===null?h.effects=[R]:te.push(R))}else fe={eventTime:fe,lane:te,tag:R.tag,payload:R.payload,callback:R.callback,next:null},re===null?(G=re=fe,O=ie):re=re.next=fe,_|=te;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;te=R,R=te.next,te.next=null,h.lastBaseUpdate=te,h.shared.pending=null}}while(!0);if(re===null&&(O=ie),h.baseState=O,h.firstBaseUpdate=G,h.lastBaseUpdate=re,r=h.shared.interleaved,r!==null){h=r;do _|=h.lane,h=h.next;while(h!==r)}else x===null&&(h.shared.lanes=0);Ga|=_,e.lanes=_,e.memoizedState=ie}}function Gg(e,r,l){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var d=e[r],h=d.callback;if(h!==null){if(d.callback=null,d=l,typeof h!="function")throw Error(n(191,h));h.call(d)}}}var $o={},ni=Ki($o),el=Ki($o),tl=Ki($o);function Va(e){if(e===$o)throw Error(n(174));return e}function Lf(e,r){switch(rt(tl,r),rt(el,e),rt(ni,$o),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=at(r,e)}lt(ni),rt(ni,r)}function Us(){lt(ni),lt(el),lt(tl)}function qg(e){Va(tl.current);var r=Va(ni.current),l=at(r,e.type);r!==l&&(rt(el,e),rt(ni,l))}function zf(e){el.current===e&&(lt(ni),lt(el))}var mt=Ki(0);function Xc(e){for(var r=e;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Of=[];function If(){for(var e=0;e<Of.length;e++)Of[e]._workInProgressVersionPrimary=null;Of.length=0}var Qc=j.ReactCurrentDispatcher,Mf=j.ReactCurrentBatchConfig,Ya=0,gt=null,Ut=null,Xt=null,Kc=!1,rl=!1,nl=0,Gw=0;function lr(){throw Error(n(321))}function Ff(e,r){if(r===null)return!1;for(var l=0;l<r.length&&l<e.length;l++)if(!Bn(e[l],r[l]))return!1;return!0}function Df(e,r,l,d,h,x){if(Ya=x,gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qc.current=e===null||e.memoizedState===null?Kw:Jw,e=l(d,h),rl){x=0;do{if(rl=!1,nl=0,25<=x)throw Error(n(301));x+=1,Xt=Ut=null,r.updateQueue=null,Qc.current=Zw,e=l(d,h)}while(rl)}if(Qc.current=$c,r=Ut!==null&&Ut.next!==null,Ya=0,Xt=Ut=gt=null,Kc=!1,r)throw Error(n(300));return e}function Bf(){var e=nl!==0;return nl=0,e}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?gt.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function yn(){if(Ut===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Ut.next;var r=Xt===null?gt.memoizedState:Xt.next;if(r!==null)Xt=r,Ut=e;else{if(e===null)throw Error(n(310));Ut=e,e={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Xt===null?gt.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function il(e,r){return typeof r=="function"?r(e):r}function Uf(e){var r=yn(),l=r.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=e;var d=Ut,h=d.baseQueue,x=l.pending;if(x!==null){if(h!==null){var _=h.next;h.next=x.next,x.next=_}d.baseQueue=h=x,l.pending=null}if(h!==null){x=h.next,d=d.baseState;var R=_=null,O=null,G=x;do{var re=G.lane;if((Ya&re)===re)O!==null&&(O=O.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),d=G.hasEagerState?G.eagerState:e(d,G.action);else{var ie={lane:re,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};O===null?(R=O=ie,_=d):O=O.next=ie,gt.lanes|=re,Ga|=re}G=G.next}while(G!==null&&G!==x);O===null?_=d:O.next=R,Bn(d,r.memoizedState)||(Or=!0),r.memoizedState=d,r.baseState=_,r.baseQueue=O,l.lastRenderedState=d}if(e=l.interleaved,e!==null){h=e;do x=h.lane,gt.lanes|=x,Ga|=x,h=h.next;while(h!==e)}else h===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Wf(e){var r=yn(),l=r.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=e;var d=l.dispatch,h=l.pending,x=r.memoizedState;if(h!==null){l.pending=null;var _=h=h.next;do x=e(x,_.action),_=_.next;while(_!==h);Bn(x,r.memoizedState)||(Or=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,d]}function Xg(){}function Qg(e,r){var l=gt,d=yn(),h=r(),x=!Bn(d.memoizedState,h);if(x&&(d.memoizedState=h,Or=!0),d=d.queue,Hf(Zg.bind(null,l,d,e),[e]),d.getSnapshot!==r||x||Xt!==null&&Xt.memoizedState.tag&1){if(l.flags|=2048,al(9,Jg.bind(null,l,d,h,r),void 0,null),Qt===null)throw Error(n(349));(Ya&30)!==0||Kg(l,r,h)}return h}function Kg(e,r,l){e.flags|=16384,e={getSnapshot:r,value:l},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.stores=[e]):(l=r.stores,l===null?r.stores=[e]:l.push(e))}function Jg(e,r,l,d){r.value=l,r.getSnapshot=d,$g(r)&&e0(e)}function Zg(e,r,l){return l(function(){$g(r)&&e0(e)})}function $g(e){var r=e.getSnapshot;e=e.value;try{var l=r();return!Bn(e,l)}catch{return!0}}function e0(e){var r=ki(e,1);r!==null&&Yn(r,e,1,-1)}function t0(e){var r=ii();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:e},r.queue=e,e=e.dispatch=Qw.bind(null,gt,e),[r.memoizedState,e]}function al(e,r,l,d){return e={tag:e,create:r,destroy:l,deps:d,next:null},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.lastEffect=e.next=e):(l=r.lastEffect,l===null?r.lastEffect=e.next=e:(d=l.next,l.next=e,e.next=d,r.lastEffect=e)),e}function r0(){return yn().memoizedState}function Jc(e,r,l,d){var h=ii();gt.flags|=e,h.memoizedState=al(1|r,l,void 0,d===void 0?null:d)}function Zc(e,r,l,d){var h=yn();d=d===void 0?null:d;var x=void 0;if(Ut!==null){var _=Ut.memoizedState;if(x=_.destroy,d!==null&&Ff(d,_.deps)){h.memoizedState=al(r,l,x,d);return}}gt.flags|=e,h.memoizedState=al(1|r,l,x,d)}function n0(e,r){return Jc(8390656,8,e,r)}function Hf(e,r){return Zc(2048,8,e,r)}function i0(e,r){return Zc(4,2,e,r)}function a0(e,r){return Zc(4,4,e,r)}function s0(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function o0(e,r,l){return l=l!=null?l.concat([e]):null,Zc(4,4,s0.bind(null,r,e),l)}function Vf(){}function l0(e,r){var l=yn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Ff(r,d[1])?d[0]:(l.memoizedState=[e,r],e)}function c0(e,r){var l=yn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Ff(r,d[1])?d[0]:(e=e(),l.memoizedState=[e,r],e)}function d0(e,r,l){return(Ya&21)===0?(e.baseState&&(e.baseState=!1,Or=!0),e.memoizedState=l):(Bn(l,r)||(l=Bm(),gt.lanes|=l,Ga|=l,e.baseState=!0),r)}function qw(e,r){var l=Ke;Ke=l!==0&&4>l?l:4,e(!0);var d=Mf.transition;Mf.transition={};try{e(!1),r()}finally{Ke=l,Mf.transition=d}}function u0(){return yn().memoizedState}function Xw(e,r,l){var d=ia(e);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},f0(e))p0(r,l);else if(l=Hg(e,r,l,d),l!==null){var h=wr();Yn(l,e,d,h),h0(l,r,d)}}function Qw(e,r,l){var d=ia(e),h={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(f0(e))p0(r,h);else{var x=e.alternate;if(e.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var _=r.lastRenderedState,R=x(_,l);if(h.hasEagerState=!0,h.eagerState=R,Bn(R,_)){var O=r.interleaved;O===null?(h.next=h,Pf(r)):(h.next=O.next,O.next=h),r.interleaved=h;return}}catch{}l=Hg(e,r,h,d),l!==null&&(h=wr(),Yn(l,e,d,h),h0(l,r,d))}}function f0(e){var r=e.alternate;return e===gt||r!==null&&r===gt}function p0(e,r){rl=Kc=!0;var l=e.pending;l===null?r.next=r:(r.next=l.next,l.next=r),e.pending=r}function h0(e,r,l){if((l&4194240)!==0){var d=r.lanes;d&=e.pendingLanes,l|=d,r.lanes=l,Yu(e,l)}}var $c={readContext:vn,useCallback:lr,useContext:lr,useEffect:lr,useImperativeHandle:lr,useInsertionEffect:lr,useLayoutEffect:lr,useMemo:lr,useReducer:lr,useRef:lr,useState:lr,useDebugValue:lr,useDeferredValue:lr,useTransition:lr,useMutableSource:lr,useSyncExternalStore:lr,useId:lr,unstable_isNewReconciler:!1},Kw={readContext:vn,useCallback:function(e,r){return ii().memoizedState=[e,r===void 0?null:r],e},useContext:vn,useEffect:n0,useImperativeHandle:function(e,r,l){return l=l!=null?l.concat([e]):null,Jc(4194308,4,s0.bind(null,r,e),l)},useLayoutEffect:function(e,r){return Jc(4194308,4,e,r)},useInsertionEffect:function(e,r){return Jc(4,2,e,r)},useMemo:function(e,r){var l=ii();return r=r===void 0?null:r,e=e(),l.memoizedState=[e,r],e},useReducer:function(e,r,l){var d=ii();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},d.queue=e,e=e.dispatch=Xw.bind(null,gt,e),[d.memoizedState,e]},useRef:function(e){var r=ii();return e={current:e},r.memoizedState=e},useState:t0,useDebugValue:Vf,useDeferredValue:function(e){return ii().memoizedState=e},useTransition:function(){var e=t0(!1),r=e[0];return e=qw.bind(null,e[1]),ii().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,l){var d=gt,h=ii();if(ut){if(l===void 0)throw Error(n(407));l=l()}else{if(l=r(),Qt===null)throw Error(n(349));(Ya&30)!==0||Kg(d,r,l)}h.memoizedState=l;var x={value:l,getSnapshot:r};return h.queue=x,n0(Zg.bind(null,d,x,e),[e]),d.flags|=2048,al(9,Jg.bind(null,d,x,l,r),void 0,null),l},useId:function(){var e=ii(),r=Qt.identifierPrefix;if(ut){var l=wi,d=bi;l=(d&~(1<<32-Dn(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=nl++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Gw++,r=":"+r+"r"+l.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Jw={readContext:vn,useCallback:l0,useContext:vn,useEffect:Hf,useImperativeHandle:o0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:c0,useReducer:Uf,useRef:r0,useState:function(){return Uf(il)},useDebugValue:Vf,useDeferredValue:function(e){var r=yn();return d0(r,Ut.memoizedState,e)},useTransition:function(){var e=Uf(il)[0],r=yn().memoizedState;return[e,r]},useMutableSource:Xg,useSyncExternalStore:Qg,useId:u0,unstable_isNewReconciler:!1},Zw={readContext:vn,useCallback:l0,useContext:vn,useEffect:Hf,useImperativeHandle:o0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:c0,useReducer:Wf,useRef:r0,useState:function(){return Wf(il)},useDebugValue:Vf,useDeferredValue:function(e){var r=yn();return Ut===null?r.memoizedState=e:d0(r,Ut.memoizedState,e)},useTransition:function(){var e=Wf(il)[0],r=yn().memoizedState;return[e,r]},useMutableSource:Xg,useSyncExternalStore:Qg,useId:u0,unstable_isNewReconciler:!1};function Wn(e,r){if(e&&e.defaultProps){r=E({},r),e=e.defaultProps;for(var l in e)r[l]===void 0&&(r[l]=e[l]);return r}return r}function Yf(e,r,l,d){r=e.memoizedState,l=l(d,r),l=l==null?r:E({},r,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ed={isMounted:function(e){return(e=e._reactInternals)?He(e)===e:!1},enqueueSetState:function(e,r,l){e=e._reactInternals;var d=wr(),h=ia(e),x=_i(d,h);x.payload=r,l!=null&&(x.callback=l),r=ea(e,x,h),r!==null&&(Yn(r,e,h,d),Gc(r,e,h))},enqueueReplaceState:function(e,r,l){e=e._reactInternals;var d=wr(),h=ia(e),x=_i(d,h);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=ea(e,x,h),r!==null&&(Yn(r,e,h,d),Gc(r,e,h))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var l=wr(),d=ia(e),h=_i(l,d);h.tag=2,r!=null&&(h.callback=r),r=ea(e,h,d),r!==null&&(Yn(r,e,d,l),Gc(r,e,d))}};function m0(e,r,l,d,h,x,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(d,x,_):r.prototype&&r.prototype.isPureReactComponent?!Yo(l,d)||!Yo(h,x):!0}function g0(e,r,l){var d=!1,h=Ji,x=r.contextType;return typeof x=="object"&&x!==null?x=vn(x):(h=zr(r)?Ba:or.current,d=r.contextTypes,x=(d=d!=null)?zs(e,h):Ji),r=new r(l,x),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ed,e.stateNode=r,r._reactInternals=e,d&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=h,e.__reactInternalMemoizedMaskedChildContext=x),r}function x0(e,r,l,d){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==e&&ed.enqueueReplaceState(r,r.state,null)}function Gf(e,r,l,d){var h=e.stateNode;h.props=l,h.state=e.memoizedState,h.refs={},Rf(e);var x=r.contextType;typeof x=="object"&&x!==null?h.context=vn(x):(x=zr(r)?Ba:or.current,h.context=zs(e,x)),h.state=e.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Yf(e,r,x,l),h.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&ed.enqueueReplaceState(h,h.state,null),qc(e,l,h,d),h.state=e.memoizedState),typeof h.componentDidMount=="function"&&(e.flags|=4194308)}function Ws(e,r){try{var l="",d=r;do l+=ge(d),d=d.return;while(d);var h=l}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:e,source:r,stack:h,digest:null}}function qf(e,r,l){return{value:e,source:null,stack:l??null,digest:r??null}}function Xf(e,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var $w=typeof WeakMap=="function"?WeakMap:Map;function v0(e,r,l){l=_i(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){od||(od=!0,cp=d),Xf(e,r)},l}function y0(e,r,l){l=_i(-1,l),l.tag=3;var d=e.type.getDerivedStateFromError;if(typeof d=="function"){var h=r.value;l.payload=function(){return d(h)},l.callback=function(){Xf(e,r)}}var x=e.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Xf(e,r),typeof d!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),l}function b0(e,r,l){var d=e.pingCache;if(d===null){d=e.pingCache=new $w;var h=new Set;d.set(r,h)}else h=d.get(r),h===void 0&&(h=new Set,d.set(r,h));h.has(l)||(h.add(l),e=p2.bind(null,e,r,l),r.then(e,e))}function w0(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function k0(e,r,l,d,h){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=_i(-1,1),r.tag=2,ea(l,r,1))),l.lanes|=1),e):(e.flags|=65536,e.lanes=h,e)}var e2=j.ReactCurrentOwner,Or=!1;function br(e,r,l,d){r.child=e===null?Wg(r,null,l,d):Fs(r,e.child,l,d)}function _0(e,r,l,d,h){l=l.render;var x=r.ref;return Bs(r,h),d=Df(e,r,l,d,x,h),l=Bf(),e!==null&&!Or?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~h,Ni(e,r,h)):(ut&&l&&kf(r),r.flags|=1,br(e,r,d,h),r.child)}function N0(e,r,l,d,h){if(e===null){var x=l.type;return typeof x=="function"&&!gp(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,j0(e,r,x,d,h)):(e=pd(l.type,null,d,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(x=e.child,(e.lanes&h)===0){var _=x.memoizedProps;if(l=l.compare,l=l!==null?l:Yo,l(_,d)&&e.ref===r.ref)return Ni(e,r,h)}return r.flags|=1,e=sa(x,d),e.ref=r.ref,e.return=r,r.child=e}function j0(e,r,l,d,h){if(e!==null){var x=e.memoizedProps;if(Yo(x,d)&&e.ref===r.ref)if(Or=!1,r.pendingProps=d=x,(e.lanes&h)!==0)(e.flags&131072)!==0&&(Or=!0);else return r.lanes=e.lanes,Ni(e,r,h)}return Qf(e,r,l,d,h)}function E0(e,r,l){var d=r.pendingProps,h=d.children,x=e!==null?e.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Vs,en),en|=l;else{if((l&1073741824)===0)return e=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,rt(Vs,en),en|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,rt(Vs,en),en|=d}else x!==null?(d=x.baseLanes|l,r.memoizedState=null):d=l,rt(Vs,en),en|=d;return br(e,r,h,l),r.child}function S0(e,r){var l=r.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qf(e,r,l,d,h){var x=zr(l)?Ba:or.current;return x=zs(r,x),Bs(r,h),l=Df(e,r,l,d,x,h),d=Bf(),e!==null&&!Or?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~h,Ni(e,r,h)):(ut&&d&&kf(r),r.flags|=1,br(e,r,l,h),r.child)}function A0(e,r,l,d,h){if(zr(l)){var x=!0;Fc(r)}else x=!1;if(Bs(r,h),r.stateNode===null)rd(e,r),g0(r,l,d),Gf(r,l,d,h),d=!0;else if(e===null){var _=r.stateNode,R=r.memoizedProps;_.props=R;var O=_.context,G=l.contextType;typeof G=="object"&&G!==null?G=vn(G):(G=zr(l)?Ba:or.current,G=zs(r,G));var re=l.getDerivedStateFromProps,ie=typeof re=="function"||typeof _.getSnapshotBeforeUpdate=="function";ie||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(R!==d||O!==G)&&x0(r,_,d,G),$i=!1;var te=r.memoizedState;_.state=te,qc(r,d,_,h),O=r.memoizedState,R!==d||te!==O||Lr.current||$i?(typeof re=="function"&&(Yf(r,l,re,d),O=r.memoizedState),(R=$i||m0(r,l,R,d,te,O,G))?(ie||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=O),_.props=d,_.state=O,_.context=G,d=R):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{_=r.stateNode,Vg(e,r),R=r.memoizedProps,G=r.type===r.elementType?R:Wn(r.type,R),_.props=G,ie=r.pendingProps,te=_.context,O=l.contextType,typeof O=="object"&&O!==null?O=vn(O):(O=zr(l)?Ba:or.current,O=zs(r,O));var fe=l.getDerivedStateFromProps;(re=typeof fe=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(R!==ie||te!==O)&&x0(r,_,d,O),$i=!1,te=r.memoizedState,_.state=te,qc(r,d,_,h);var me=r.memoizedState;R!==ie||te!==me||Lr.current||$i?(typeof fe=="function"&&(Yf(r,l,fe,d),me=r.memoizedState),(G=$i||m0(r,l,G,d,te,me,O)||!1)?(re||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(d,me,O),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(d,me,O)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||R===e.memoizedProps&&te===e.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&te===e.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=me),_.props=d,_.state=me,_.context=O,d=G):(typeof _.componentDidUpdate!="function"||R===e.memoizedProps&&te===e.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&te===e.memoizedState||(r.flags|=1024),d=!1)}return Kf(e,r,l,d,x,h)}function Kf(e,r,l,d,h,x){S0(e,r);var _=(r.flags&128)!==0;if(!d&&!_)return h&&Lg(r,l,!1),Ni(e,r,x);d=r.stateNode,e2.current=r;var R=_&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,e!==null&&_?(r.child=Fs(r,e.child,null,x),r.child=Fs(r,null,R,x)):br(e,r,R,x),r.memoizedState=d.state,h&&Lg(r,l,!0),r.child}function C0(e){var r=e.stateNode;r.pendingContext?Pg(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Pg(e,r.context,!1),Lf(e,r.containerInfo)}function T0(e,r,l,d,h){return Ms(),Ef(h),r.flags|=256,br(e,r,l,d),r.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(e){return{baseLanes:e,cachePool:null,transitions:null}}function P0(e,r,l){var d=r.pendingProps,h=mt.current,x=!1,_=(r.flags&128)!==0,R;if((R=_)||(R=e!==null&&e.memoizedState===null?!1:(h&2)!==0),R?(x=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(h|=1),rt(mt,h&1),e===null)return jf(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=d.children,e=d.fallback,x?(d=r.mode,x=r.child,_={mode:"hidden",children:_},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=_):x=hd(_,d,0,null),e=Ka(e,d,l,null),x.return=r,e.return=r,x.sibling=e,r.child=x,r.child.memoizedState=Zf(l),r.memoizedState=Jf,e):$f(r,_));if(h=e.memoizedState,h!==null&&(R=h.dehydrated,R!==null))return t2(e,r,_,d,R,h,l);if(x){x=d.fallback,_=r.mode,h=e.child,R=h.sibling;var O={mode:"hidden",children:d.children};return(_&1)===0&&r.child!==h?(d=r.child,d.childLanes=0,d.pendingProps=O,r.deletions=null):(d=sa(h,O),d.subtreeFlags=h.subtreeFlags&14680064),R!==null?x=sa(R,x):(x=Ka(x,_,l,null),x.flags|=2),x.return=r,d.return=r,d.sibling=x,r.child=d,d=x,x=r.child,_=e.child.memoizedState,_=_===null?Zf(l):{baseLanes:_.baseLanes|l,cachePool:null,transitions:_.transitions},x.memoizedState=_,x.childLanes=e.childLanes&~l,r.memoizedState=Jf,d}return x=e.child,e=x.sibling,d=sa(x,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,e!==null&&(l=r.deletions,l===null?(r.deletions=[e],r.flags|=16):l.push(e)),r.child=d,r.memoizedState=null,d}function $f(e,r){return r=hd({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function td(e,r,l,d){return d!==null&&Ef(d),Fs(r,e.child,null,l),e=$f(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function t2(e,r,l,d,h,x,_){if(l)return r.flags&256?(r.flags&=-257,d=qf(Error(n(422))),td(e,r,_,d)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(x=d.fallback,h=r.mode,d=hd({mode:"visible",children:d.children},h,0,null),x=Ka(x,h,_,null),x.flags|=2,d.return=r,x.return=r,d.sibling=x,r.child=d,(r.mode&1)!==0&&Fs(r,e.child,null,_),r.child.memoizedState=Zf(_),r.memoizedState=Jf,x);if((r.mode&1)===0)return td(e,r,_,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var R=d.dgst;return d=R,x=Error(n(419)),d=qf(x,d,void 0),td(e,r,_,d)}if(R=(_&e.childLanes)!==0,Or||R){if(d=Qt,d!==null){switch(_&-_){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(d.suspendedLanes|_))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,ki(e,h),Yn(d,e,h,-1))}return mp(),d=qf(Error(n(421))),td(e,r,_,d)}return h.data==="$?"?(r.flags|=128,r.child=e.child,r=h2.bind(null,e),h._reactRetry=r,null):(e=x.treeContext,$r=Qi(h.nextSibling),Zr=r,ut=!0,Un=null,e!==null&&(gn[xn++]=bi,gn[xn++]=wi,gn[xn++]=Ua,bi=e.id,wi=e.overflow,Ua=r),r=$f(r,d.children),r.flags|=4096,r)}function R0(e,r,l){e.lanes|=r;var d=e.alternate;d!==null&&(d.lanes|=r),Tf(e.return,r,l)}function ep(e,r,l,d,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:h}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=h)}function L0(e,r,l){var d=r.pendingProps,h=d.revealOrder,x=d.tail;if(br(e,r,d.children,l),d=mt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,l,r);else if(e.tag===19)R0(e,l,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}d&=1}if(rt(mt,d),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(l=r.child,h=null;l!==null;)e=l.alternate,e!==null&&Xc(e)===null&&(h=l),l=l.sibling;l=h,l===null?(h=r.child,r.child=null):(h=l.sibling,l.sibling=null),ep(r,!1,h,l,x);break;case"backwards":for(l=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&Xc(e)===null){r.child=h;break}e=h.sibling,h.sibling=l,l=h,h=e}ep(r,!0,l,null,x);break;case"together":ep(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rd(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ni(e,r,l){if(e!==null&&(r.dependencies=e.dependencies),Ga|=r.lanes,(l&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(n(153));if(r.child!==null){for(e=r.child,l=sa(e,e.pendingProps),r.child=l,l.return=r;e.sibling!==null;)e=e.sibling,l=l.sibling=sa(e,e.pendingProps),l.return=r;l.sibling=null}return r.child}function r2(e,r,l){switch(r.tag){case 3:C0(r),Ms();break;case 5:qg(r);break;case 1:zr(r.type)&&Fc(r);break;case 4:Lf(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,h=r.memoizedProps.value;rt(Vc,d._currentValue),d._currentValue=h;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(rt(mt,mt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?P0(e,r,l):(rt(mt,mt.current&1),e=Ni(e,r,l),e!==null?e.sibling:null);rt(mt,mt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(e.flags&128)!==0){if(d)return L0(e,r,l);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(mt,mt.current),d)break;return null;case 22:case 23:return r.lanes=0,E0(e,r,l)}return Ni(e,r,l)}var z0,tp,O0,I0;z0=function(e,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},tp=function(){},O0=function(e,r,l,d){var h=e.memoizedProps;if(h!==d){e=r.stateNode,Va(ni.current);var x=null;switch(l){case"input":h=Ee(e,h),d=Ee(e,d),x=[];break;case"select":h=E({},h,{value:void 0}),d=E({},d,{value:void 0}),x=[];break;case"textarea":h=Xr(e,h),d=Xr(e,d),x=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(e.onclick=Oc)}Zn(l,d);var _;l=null;for(G in h)if(!d.hasOwnProperty(G)&&h.hasOwnProperty(G)&&h[G]!=null)if(G==="style"){var R=h[G];for(_ in R)R.hasOwnProperty(_)&&(l||(l={}),l[_]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(s.hasOwnProperty(G)?x||(x=[]):(x=x||[]).push(G,null));for(G in d){var O=d[G];if(R=h?.[G],d.hasOwnProperty(G)&&O!==R&&(O!=null||R!=null))if(G==="style")if(R){for(_ in R)!R.hasOwnProperty(_)||O&&O.hasOwnProperty(_)||(l||(l={}),l[_]="");for(_ in O)O.hasOwnProperty(_)&&R[_]!==O[_]&&(l||(l={}),l[_]=O[_])}else l||(x||(x=[]),x.push(G,l)),l=O;else G==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,R=R?R.__html:void 0,O!=null&&R!==O&&(x=x||[]).push(G,O)):G==="children"?typeof O!="string"&&typeof O!="number"||(x=x||[]).push(G,""+O):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(s.hasOwnProperty(G)?(O!=null&&G==="onScroll"&&ot("scroll",e),x||R===O||(x=[])):(x=x||[]).push(G,O))}l&&(x=x||[]).push("style",l);var G=x;(r.updateQueue=G)&&(r.flags|=4)}},I0=function(e,r,l,d){l!==d&&(r.flags|=4)};function sl(e,r){if(!ut)switch(e.tailMode){case"hidden":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:d.sibling=null}}function cr(e){var r=e.alternate!==null&&e.alternate.child===e.child,l=0,d=0;if(r)for(var h=e.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=d,e.childLanes=l,r}function n2(e,r,l){var d=r.pendingProps;switch(_f(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cr(r),null;case 1:return zr(r.type)&&Mc(),cr(r),null;case 3:return d=r.stateNode,Us(),lt(Lr),lt(or),If(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(e===null||e.child===null)&&(Wc(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Un!==null&&(fp(Un),Un=null))),tp(e,r),cr(r),null;case 5:zf(r);var h=Va(tl.current);if(l=r.type,e!==null&&r.stateNode!=null)O0(e,r,l,d,h),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(n(166));return cr(r),null}if(e=Va(ni.current),Wc(r)){d=r.stateNode,l=r.type;var x=r.memoizedProps;switch(d[ri]=r,d[Ko]=x,e=(r.mode&1)!==0,l){case"dialog":ot("cancel",d),ot("close",d);break;case"iframe":case"object":case"embed":ot("load",d);break;case"video":case"audio":for(h=0;h<qo.length;h++)ot(qo[h],d);break;case"source":ot("error",d);break;case"img":case"image":case"link":ot("error",d),ot("load",d);break;case"details":ot("toggle",d);break;case"input":it(d,x),ot("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},ot("invalid",d);break;case"textarea":zn(d,x),ot("invalid",d)}Zn(l,x),h=null;for(var _ in x)if(x.hasOwnProperty(_)){var R=x[_];_==="children"?typeof R=="string"?d.textContent!==R&&(x.suppressHydrationWarning!==!0&&zc(d.textContent,R,e),h=["children",R]):typeof R=="number"&&d.textContent!==""+R&&(x.suppressHydrationWarning!==!0&&zc(d.textContent,R,e),h=["children",""+R]):s.hasOwnProperty(_)&&R!=null&&_==="onScroll"&&ot("scroll",d)}switch(l){case"input":wt(d),ar(d,x,!0);break;case"textarea":wt(d),At(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=Oc)}d=h,r.updateQueue=d,d!==null&&(r.flags|=4)}else{_=h.nodeType===9?h:h.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=On(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=_.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof d.is=="string"?e=_.createElement(l,{is:d.is}):(e=_.createElement(l),l==="select"&&(_=e,d.multiple?_.multiple=!0:d.size&&(_.size=d.size))):e=_.createElementNS(e,l),e[ri]=r,e[Ko]=d,z0(e,r,!1,!1),r.stateNode=e;e:{switch(_=hn(l,d),l){case"dialog":ot("cancel",e),ot("close",e),h=d;break;case"iframe":case"object":case"embed":ot("load",e),h=d;break;case"video":case"audio":for(h=0;h<qo.length;h++)ot(qo[h],e);h=d;break;case"source":ot("error",e),h=d;break;case"img":case"image":case"link":ot("error",e),ot("load",e),h=d;break;case"details":ot("toggle",e),h=d;break;case"input":it(e,d),h=Ee(e,d),ot("invalid",e);break;case"option":h=d;break;case"select":e._wrapperState={wasMultiple:!!d.multiple},h=E({},d,{value:void 0}),ot("invalid",e);break;case"textarea":zn(e,d),h=Xr(e,d),ot("invalid",e);break;default:h=d}Zn(l,h),R=h;for(x in R)if(R.hasOwnProperty(x)){var O=R[x];x==="style"?pn(e,O):x==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&gr(e,O)):x==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&xr(e,O):typeof O=="number"&&xr(e,""+O):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?O!=null&&x==="onScroll"&&ot("scroll",e):O!=null&&S(e,x,O,_))}switch(l){case"input":wt(e),ar(e,d,!1);break;case"textarea":wt(e),At(e);break;case"option":d.value!=null&&e.setAttribute("value",""+ye(d.value));break;case"select":e.multiple=!!d.multiple,x=d.value,x!=null?Qe(e,!!d.multiple,x,!1):d.defaultValue!=null&&Qe(e,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(e.onclick=Oc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return cr(r),null;case 6:if(e&&r.stateNode!=null)I0(e,r,e.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(n(166));if(l=Va(tl.current),Va(ni.current),Wc(r)){if(d=r.stateNode,l=r.memoizedProps,d[ri]=r,(x=d.nodeValue!==l)&&(e=Zr,e!==null))switch(e.tag){case 3:zc(d.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zc(d.nodeValue,l,(e.mode&1)!==0)}x&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ri]=r,r.stateNode=d}return cr(r),null;case 13:if(lt(mt),d=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ut&&$r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Dg(),Ms(),r.flags|=98560,x=!1;else if(x=Wc(r),d!==null&&d.dehydrated!==null){if(e===null){if(!x)throw Error(n(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[ri]=r}else Ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;cr(r),x=!1}else Un!==null&&(fp(Un),Un=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(e!==null&&e.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(mt.current&1)!==0?Wt===0&&(Wt=3):mp())),r.updateQueue!==null&&(r.flags|=4),cr(r),null);case 4:return Us(),tp(e,r),e===null&&Xo(r.stateNode.containerInfo),cr(r),null;case 10:return Cf(r.type._context),cr(r),null;case 17:return zr(r.type)&&Mc(),cr(r),null;case 19:if(lt(mt),x=r.memoizedState,x===null)return cr(r),null;if(d=(r.flags&128)!==0,_=x.rendering,_===null)if(d)sl(x,!1);else{if(Wt!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(_=Xc(e),_!==null){for(r.flags|=128,sl(x,!1),d=_.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)x=l,e=d,x.flags&=14680066,_=x.alternate,_===null?(x.childLanes=0,x.lanes=e,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=_.childLanes,x.lanes=_.lanes,x.child=_.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=_.memoizedProps,x.memoizedState=_.memoizedState,x.updateQueue=_.updateQueue,x.type=_.type,e=_.dependencies,x.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return rt(mt,mt.current&1|2),r.child}e=e.sibling}x.tail!==null&&Fe()>Ys&&(r.flags|=128,d=!0,sl(x,!1),r.lanes=4194304)}else{if(!d)if(e=Xc(_),e!==null){if(r.flags|=128,d=!0,l=e.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),sl(x,!0),x.tail===null&&x.tailMode==="hidden"&&!_.alternate&&!ut)return cr(r),null}else 2*Fe()-x.renderingStartTime>Ys&&l!==1073741824&&(r.flags|=128,d=!0,sl(x,!1),r.lanes=4194304);x.isBackwards?(_.sibling=r.child,r.child=_):(l=x.last,l!==null?l.sibling=_:r.child=_,x.last=_)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Fe(),r.sibling=null,l=mt.current,rt(mt,d?l&1|2:l&1),r):(cr(r),null);case 22:case 23:return hp(),d=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(en&1073741824)!==0&&(cr(r),r.subtreeFlags&6&&(r.flags|=8192)):cr(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function i2(e,r){switch(_f(r),r.tag){case 1:return zr(r.type)&&Mc(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Us(),lt(Lr),lt(or),If(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return zf(r),null;case 13:if(lt(mt),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ms()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return lt(mt),null;case 4:return Us(),null;case 10:return Cf(r.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var nd=!1,dr=!1,a2=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Hs(e,r){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Nt(e,r,d)}else l.current=null}function rp(e,r,l){try{l()}catch(d){Nt(e,r,d)}}var M0=!1;function s2(e,r){if(hf=_c,e=mg(),sf(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var h=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var _=0,R=-1,O=-1,G=0,re=0,ie=e,te=null;t:for(;;){for(var fe;ie!==l||h!==0&&ie.nodeType!==3||(R=_+h),ie!==x||d!==0&&ie.nodeType!==3||(O=_+d),ie.nodeType===3&&(_+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)te=ie,ie=fe;for(;;){if(ie===e)break t;if(te===l&&++G===h&&(R=_),te===x&&++re===d&&(O=_),(fe=ie.nextSibling)!==null)break;ie=te,te=ie.parentNode}ie=fe}l=R===-1||O===-1?null:{start:R,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(mf={focusedElem:e,selectionRange:l},_c=!1,pe=r;pe!==null;)if(r=pe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,pe=e;else for(;pe!==null;){r=pe;try{var me=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,Tt=me.memoizedState,U=r.stateNode,M=U.getSnapshotBeforeUpdate(r.elementType===r.type?ve:Wn(r.type,ve),Tt);U.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var H=r.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(oe){Nt(r,r.return,oe)}if(e=r.sibling,e!==null){e.return=r.return,pe=e;break}pe=r.return}return me=M0,M0=!1,me}function ol(e,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&e)===e){var x=h.destroy;h.destroy=void 0,x!==void 0&&rp(r,l,x)}h=h.next}while(h!==d)}}function id(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function np(e){var r=e.ref;if(r!==null){var l=e.stateNode;e.tag,e=l,typeof r=="function"?r(e):r.current=e}}function F0(e){var r=e.alternate;r!==null&&(e.alternate=null,F0(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[ri],delete r[Ko],delete r[yf],delete r[Ww],delete r[Hw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function D0(e){return e.tag===5||e.tag===3||e.tag===4}function B0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ip(e,r,l){var d=e.tag;if(d===5||d===6)e=e.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(e,r):l.insertBefore(e,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(e,l)):(r=l,r.appendChild(e)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Oc));else if(d!==4&&(e=e.child,e!==null))for(ip(e,r,l),e=e.sibling;e!==null;)ip(e,r,l),e=e.sibling}function ap(e,r,l){var d=e.tag;if(d===5||d===6)e=e.stateNode,r?l.insertBefore(e,r):l.appendChild(e);else if(d!==4&&(e=e.child,e!==null))for(ap(e,r,l),e=e.sibling;e!==null;)ap(e,r,l),e=e.sibling}var tr=null,Hn=!1;function ta(e,r,l){for(l=l.child;l!==null;)U0(e,r,l),l=l.sibling}function U0(e,r,l){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(ei,l)}catch{}switch(l.tag){case 5:dr||Hs(l,r);case 6:var d=tr,h=Hn;tr=null,ta(e,r,l),tr=d,Hn=h,tr!==null&&(Hn?(e=tr,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):tr.removeChild(l.stateNode));break;case 18:tr!==null&&(Hn?(e=tr,l=l.stateNode,e.nodeType===8?vf(e.parentNode,l):e.nodeType===1&&vf(e,l),Do(e)):vf(tr,l.stateNode));break;case 4:d=tr,h=Hn,tr=l.stateNode.containerInfo,Hn=!0,ta(e,r,l),tr=d,Hn=h;break;case 0:case 11:case 14:case 15:if(!dr&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var x=h,_=x.destroy;x=x.tag,_!==void 0&&((x&2)!==0||(x&4)!==0)&&rp(l,r,_),h=h.next}while(h!==d)}ta(e,r,l);break;case 1:if(!dr&&(Hs(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(R){Nt(l,r,R)}ta(e,r,l);break;case 21:ta(e,r,l);break;case 22:l.mode&1?(dr=(d=dr)||l.memoizedState!==null,ta(e,r,l),dr=d):ta(e,r,l);break;default:ta(e,r,l)}}function W0(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new a2),r.forEach(function(d){var h=m2.bind(null,e,d);l.has(d)||(l.add(d),d.then(h,h))})}}function Vn(e,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var h=l[d];try{var x=e,_=r,R=_;e:for(;R!==null;){switch(R.tag){case 5:tr=R.stateNode,Hn=!1;break e;case 3:tr=R.stateNode.containerInfo,Hn=!0;break e;case 4:tr=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(tr===null)throw Error(n(160));U0(x,_,h),tr=null,Hn=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(G){Nt(h,r,G)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)H0(r,e),r=r.sibling}function H0(e,r){var l=e.alternate,d=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vn(r,e),ai(e),d&4){try{ol(3,e,e.return),id(3,e)}catch(ve){Nt(e,e.return,ve)}try{ol(5,e,e.return)}catch(ve){Nt(e,e.return,ve)}}break;case 1:Vn(r,e),ai(e),d&512&&l!==null&&Hs(l,l.return);break;case 5:if(Vn(r,e),ai(e),d&512&&l!==null&&Hs(l,l.return),e.flags&32){var h=e.stateNode;try{xr(h,"")}catch(ve){Nt(e,e.return,ve)}}if(d&4&&(h=e.stateNode,h!=null)){var x=e.memoizedProps,_=l!==null?l.memoizedProps:x,R=e.type,O=e.updateQueue;if(e.updateQueue=null,O!==null)try{R==="input"&&x.type==="radio"&&x.name!=null&&kt(h,x),hn(R,_);var G=hn(R,x);for(_=0;_<O.length;_+=2){var re=O[_],ie=O[_+1];re==="style"?pn(h,ie):re==="dangerouslySetInnerHTML"?gr(h,ie):re==="children"?xr(h,ie):S(h,re,ie,G)}switch(R){case"input":q(h,x);break;case"textarea":Jn(h,x);break;case"select":var te=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var fe=x.value;fe!=null?Qe(h,!!x.multiple,fe,!1):te!==!!x.multiple&&(x.defaultValue!=null?Qe(h,!!x.multiple,x.defaultValue,!0):Qe(h,!!x.multiple,x.multiple?[]:"",!1))}h[Ko]=x}catch(ve){Nt(e,e.return,ve)}}break;case 6:if(Vn(r,e),ai(e),d&4){if(e.stateNode===null)throw Error(n(162));h=e.stateNode,x=e.memoizedProps;try{h.nodeValue=x}catch(ve){Nt(e,e.return,ve)}}break;case 3:if(Vn(r,e),ai(e),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Do(r.containerInfo)}catch(ve){Nt(e,e.return,ve)}break;case 4:Vn(r,e),ai(e);break;case 13:Vn(r,e),ai(e),h=e.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(lp=Fe())),d&4&&W0(e);break;case 22:if(re=l!==null&&l.memoizedState!==null,e.mode&1?(dr=(G=dr)||re,Vn(r,e),dr=G):Vn(r,e),ai(e),d&8192){if(G=e.memoizedState!==null,(e.stateNode.isHidden=G)&&!re&&(e.mode&1)!==0)for(pe=e,re=e.child;re!==null;){for(ie=pe=re;pe!==null;){switch(te=pe,fe=te.child,te.tag){case 0:case 11:case 14:case 15:ol(4,te,te.return);break;case 1:Hs(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){d=te,l=te.return;try{r=d,me.props=r.memoizedProps,me.state=r.memoizedState,me.componentWillUnmount()}catch(ve){Nt(d,l,ve)}}break;case 5:Hs(te,te.return);break;case 22:if(te.memoizedState!==null){G0(ie);continue}}fe!==null?(fe.return=te,pe=fe):G0(ie)}re=re.sibling}e:for(re=null,ie=e;;){if(ie.tag===5){if(re===null){re=ie;try{h=ie.stateNode,G?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(R=ie.stateNode,O=ie.memoizedProps.style,_=O!=null&&O.hasOwnProperty("display")?O.display:null,R.style.display=Ia("display",_))}catch(ve){Nt(e,e.return,ve)}}}else if(ie.tag===6){if(re===null)try{ie.stateNode.nodeValue=G?"":ie.memoizedProps}catch(ve){Nt(e,e.return,ve)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;re===ie&&(re=null),ie=ie.return}re===ie&&(re=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Vn(r,e),ai(e),d&4&&W0(e);break;case 21:break;default:Vn(r,e),ai(e)}}function ai(e){var r=e.flags;if(r&2){try{e:{for(var l=e.return;l!==null;){if(D0(l)){var d=l;break e}l=l.return}throw Error(n(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(xr(h,""),d.flags&=-33);var x=B0(e);ap(e,x,h);break;case 3:case 4:var _=d.stateNode.containerInfo,R=B0(e);ip(e,R,_);break;default:throw Error(n(161))}}catch(O){Nt(e,e.return,O)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function o2(e,r,l){pe=e,V0(e)}function V0(e,r,l){for(var d=(e.mode&1)!==0;pe!==null;){var h=pe,x=h.child;if(h.tag===22&&d){var _=h.memoizedState!==null||nd;if(!_){var R=h.alternate,O=R!==null&&R.memoizedState!==null||dr;R=nd;var G=dr;if(nd=_,(dr=O)&&!G)for(pe=h;pe!==null;)_=pe,O=_.child,_.tag===22&&_.memoizedState!==null?q0(h):O!==null?(O.return=_,pe=O):q0(h);for(;x!==null;)pe=x,V0(x),x=x.sibling;pe=h,nd=R,dr=G}Y0(e)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,pe=x):Y0(e)}}function Y0(e){for(;pe!==null;){var r=pe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:dr||id(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!dr)if(l===null)d.componentDidMount();else{var h=r.elementType===r.type?l.memoizedProps:Wn(r.type,l.memoizedProps);d.componentDidUpdate(h,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Gg(r,x,d);break;case 3:var _=r.updateQueue;if(_!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Gg(r,_,l)}break;case 5:var R=r.stateNode;if(l===null&&r.flags&4){l=R;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var G=r.alternate;if(G!==null){var re=G.memoizedState;if(re!==null){var ie=re.dehydrated;ie!==null&&Do(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dr||r.flags&512&&np(r)}catch(te){Nt(r,r.return,te)}}if(r===e){pe=null;break}if(l=r.sibling,l!==null){l.return=r.return,pe=l;break}pe=r.return}}function G0(e){for(;pe!==null;){var r=pe;if(r===e){pe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,pe=l;break}pe=r.return}}function q0(e){for(;pe!==null;){var r=pe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{id(4,r)}catch(O){Nt(r,l,O)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var h=r.return;try{d.componentDidMount()}catch(O){Nt(r,h,O)}}var x=r.return;try{np(r)}catch(O){Nt(r,x,O)}break;case 5:var _=r.return;try{np(r)}catch(O){Nt(r,_,O)}}}catch(O){Nt(r,r.return,O)}if(r===e){pe=null;break}var R=r.sibling;if(R!==null){R.return=r.return,pe=R;break}pe=r.return}}var l2=Math.ceil,ad=j.ReactCurrentDispatcher,sp=j.ReactCurrentOwner,bn=j.ReactCurrentBatchConfig,Ye=0,Qt=null,Ot=null,rr=0,en=0,Vs=Ki(0),Wt=0,ll=null,Ga=0,sd=0,op=0,cl=null,Ir=null,lp=0,Ys=1/0,ji=null,od=!1,cp=null,ra=null,ld=!1,na=null,cd=0,dl=0,dp=null,dd=-1,ud=0;function wr(){return(Ye&6)!==0?Fe():dd!==-1?dd:dd=Fe()}function ia(e){return(e.mode&1)===0?1:(Ye&2)!==0&&rr!==0?rr&-rr:Yw.transition!==null?(ud===0&&(ud=Bm()),ud):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:Qm(e.type)),e)}function Yn(e,r,l,d){if(50<dl)throw dl=0,dp=null,Error(n(185));zo(e,l,d),((Ye&2)===0||e!==Qt)&&(e===Qt&&((Ye&2)===0&&(sd|=l),Wt===4&&aa(e,rr)),Mr(e,d),l===1&&Ye===0&&(r.mode&1)===0&&(Ys=Fe()+500,Dc&&Zi()))}function Mr(e,r){var l=e.callbackNode;Yb(e,r);var d=bc(e,e===Qt?rr:0);if(d===0)l!==null&&Bt(l),e.callbackNode=null,e.callbackPriority=0;else if(r=d&-d,e.callbackPriority!==r){if(l!=null&&Bt(l),r===1)e.tag===0?Vw(Q0.bind(null,e)):zg(Q0.bind(null,e)),Bw(function(){(Ye&6)===0&&Zi()}),l=null;else{switch(Um(d)){case 1:l=Rr;break;case 4:l=Ns;break;case 16:l=Ma;break;case 536870912:l=Kr;break;default:l=Ma}l=nx(l,X0.bind(null,e))}e.callbackPriority=r,e.callbackNode=l}}function X0(e,r){if(dd=-1,ud=0,(Ye&6)!==0)throw Error(n(327));var l=e.callbackNode;if(Gs()&&e.callbackNode!==l)return null;var d=bc(e,e===Qt?rr:0);if(d===0)return null;if((d&30)!==0||(d&e.expiredLanes)!==0||r)r=fd(e,d);else{r=d;var h=Ye;Ye|=2;var x=J0();(Qt!==e||rr!==r)&&(ji=null,Ys=Fe()+500,Xa(e,r));do try{u2();break}catch(R){K0(e,R)}while(!0);Af(),ad.current=x,Ye=h,Ot!==null?r=0:(Qt=null,rr=0,r=Wt)}if(r!==0){if(r===2&&(h=Hu(e),h!==0&&(d=h,r=up(e,h))),r===1)throw l=ll,Xa(e,0),aa(e,d),Mr(e,Fe()),l;if(r===6)aa(e,d);else{if(h=e.current.alternate,(d&30)===0&&!c2(h)&&(r=fd(e,d),r===2&&(x=Hu(e),x!==0&&(d=x,r=up(e,x))),r===1))throw l=ll,Xa(e,0),aa(e,d),Mr(e,Fe()),l;switch(e.finishedWork=h,e.finishedLanes=d,r){case 0:case 1:throw Error(n(345));case 2:Qa(e,Ir,ji);break;case 3:if(aa(e,d),(d&130023424)===d&&(r=lp+500-Fe(),10<r)){if(bc(e,0)!==0)break;if(h=e.suspendedLanes,(h&d)!==d){wr(),e.pingedLanes|=e.suspendedLanes&h;break}e.timeoutHandle=xf(Qa.bind(null,e,Ir,ji),r);break}Qa(e,Ir,ji);break;case 4:if(aa(e,d),(d&4194240)===d)break;for(r=e.eventTimes,h=-1;0<d;){var _=31-Dn(d);x=1<<_,_=r[_],_>h&&(h=_),d&=~x}if(d=h,d=Fe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*l2(d/1960))-d,10<d){e.timeoutHandle=xf(Qa.bind(null,e,Ir,ji),d);break}Qa(e,Ir,ji);break;case 5:Qa(e,Ir,ji);break;default:throw Error(n(329))}}}return Mr(e,Fe()),e.callbackNode===l?X0.bind(null,e):null}function up(e,r){var l=cl;return e.current.memoizedState.isDehydrated&&(Xa(e,r).flags|=256),e=fd(e,r),e!==2&&(r=Ir,Ir=l,r!==null&&fp(r)),e}function fp(e){Ir===null?Ir=e:Ir.push.apply(Ir,e)}function c2(e){for(var r=e;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var h=l[d],x=h.getSnapshot;h=h.value;try{if(!Bn(x(),h))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function aa(e,r){for(r&=~op,r&=~sd,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var l=31-Dn(r),d=1<<l;e[l]=-1,r&=~d}}function Q0(e){if((Ye&6)!==0)throw Error(n(327));Gs();var r=bc(e,0);if((r&1)===0)return Mr(e,Fe()),null;var l=fd(e,r);if(e.tag!==0&&l===2){var d=Hu(e);d!==0&&(r=d,l=up(e,d))}if(l===1)throw l=ll,Xa(e,0),aa(e,r),Mr(e,Fe()),l;if(l===6)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Qa(e,Ir,ji),Mr(e,Fe()),null}function pp(e,r){var l=Ye;Ye|=1;try{return e(r)}finally{Ye=l,Ye===0&&(Ys=Fe()+500,Dc&&Zi())}}function qa(e){na!==null&&na.tag===0&&(Ye&6)===0&&Gs();var r=Ye;Ye|=1;var l=bn.transition,d=Ke;try{if(bn.transition=null,Ke=1,e)return e()}finally{Ke=d,bn.transition=l,Ye=r,(Ye&6)===0&&Zi()}}function hp(){en=Vs.current,lt(Vs)}function Xa(e,r){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,Dw(l)),Ot!==null)for(l=Ot.return;l!==null;){var d=l;switch(_f(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Mc();break;case 3:Us(),lt(Lr),lt(or),If();break;case 5:zf(d);break;case 4:Us();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:Cf(d.type._context);break;case 22:case 23:hp()}l=l.return}if(Qt=e,Ot=e=sa(e.current,null),rr=en=r,Wt=0,ll=null,op=sd=Ga=0,Ir=cl=null,Ha!==null){for(r=0;r<Ha.length;r++)if(l=Ha[r],d=l.interleaved,d!==null){l.interleaved=null;var h=d.next,x=l.pending;if(x!==null){var _=x.next;x.next=h,d.next=_}l.pending=d}Ha=null}return e}function K0(e,r){do{var l=Ot;try{if(Af(),Qc.current=$c,Kc){for(var d=gt.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}Kc=!1}if(Ya=0,Xt=Ut=gt=null,rl=!1,nl=0,sp.current=null,l===null||l.return===null){Wt=1,ll=r,Ot=null;break}e:{var x=e,_=l.return,R=l,O=r;if(r=rr,R.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var G=O,re=R,ie=re.tag;if((re.mode&1)===0&&(ie===0||ie===11||ie===15)){var te=re.alternate;te?(re.updateQueue=te.updateQueue,re.memoizedState=te.memoizedState,re.lanes=te.lanes):(re.updateQueue=null,re.memoizedState=null)}var fe=w0(_);if(fe!==null){fe.flags&=-257,k0(fe,_,R,x,r),fe.mode&1&&b0(x,G,r),r=fe,O=G;var me=r.updateQueue;if(me===null){var ve=new Set;ve.add(O),r.updateQueue=ve}else me.add(O);break e}else{if((r&1)===0){b0(x,G,r),mp();break e}O=Error(n(426))}}else if(ut&&R.mode&1){var Tt=w0(_);if(Tt!==null){(Tt.flags&65536)===0&&(Tt.flags|=256),k0(Tt,_,R,x,r),Ef(Ws(O,R));break e}}x=O=Ws(O,R),Wt!==4&&(Wt=2),cl===null?cl=[x]:cl.push(x),x=_;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var U=v0(x,O,r);Yg(x,U);break e;case 1:R=O;var M=x.type,H=x.stateNode;if((x.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(ra===null||!ra.has(H)))){x.flags|=65536,r&=-r,x.lanes|=r;var oe=y0(x,R,r);Yg(x,oe);break e}}x=x.return}while(x!==null)}$0(l)}catch(be){r=be,Ot===l&&l!==null&&(Ot=l=l.return);continue}break}while(!0)}function J0(){var e=ad.current;return ad.current=$c,e===null?$c:e}function mp(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||(Ga&268435455)===0&&(sd&268435455)===0||aa(Qt,rr)}function fd(e,r){var l=Ye;Ye|=2;var d=J0();(Qt!==e||rr!==r)&&(ji=null,Xa(e,r));do try{d2();break}catch(h){K0(e,h)}while(!0);if(Af(),Ye=l,ad.current=d,Ot!==null)throw Error(n(261));return Qt=null,rr=0,Wt}function d2(){for(;Ot!==null;)Z0(Ot)}function u2(){for(;Ot!==null&&!xi();)Z0(Ot)}function Z0(e){var r=rx(e.alternate,e,en);e.memoizedProps=e.pendingProps,r===null?$0(e):Ot=r,sp.current=null}function $0(e){var r=e;do{var l=r.alternate;if(e=r.return,(r.flags&32768)===0){if(l=n2(l,r,en),l!==null){Ot=l;return}}else{if(l=i2(l,r),l!==null){l.flags&=32767,Ot=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Wt=6,Ot=null;return}}if(r=r.sibling,r!==null){Ot=r;return}Ot=r=e}while(r!==null);Wt===0&&(Wt=5)}function Qa(e,r,l){var d=Ke,h=bn.transition;try{bn.transition=null,Ke=1,f2(e,r,l,d)}finally{bn.transition=h,Ke=d}return null}function f2(e,r,l,d){do Gs();while(na!==null);if((Ye&6)!==0)throw Error(n(327));l=e.finishedWork;var h=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var x=l.lanes|l.childLanes;if(Gb(e,x),e===Qt&&(Ot=Qt=null,rr=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ld||(ld=!0,nx(Ma,function(){return Gs(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=bn.transition,bn.transition=null;var _=Ke;Ke=1;var R=Ye;Ye|=4,sp.current=null,s2(e,l),H0(l,e),Rw(mf),_c=!!hf,mf=hf=null,e.current=l,o2(l),_s(),Ye=R,Ke=_,bn.transition=x}else e.current=l;if(ld&&(ld=!1,na=e,cd=h),x=e.pendingLanes,x===0&&(ra=null),ti(l.stateNode),Mr(e,Fe()),r!==null)for(d=e.onRecoverableError,l=0;l<r.length;l++)h=r[l],d(h.value,{componentStack:h.stack,digest:h.digest});if(od)throw od=!1,e=cp,cp=null,e;return(cd&1)!==0&&e.tag!==0&&Gs(),x=e.pendingLanes,(x&1)!==0?e===dp?dl++:(dl=0,dp=e):dl=0,Zi(),null}function Gs(){if(na!==null){var e=Um(cd),r=bn.transition,l=Ke;try{if(bn.transition=null,Ke=16>e?16:e,na===null)var d=!1;else{if(e=na,na=null,cd=0,(Ye&6)!==0)throw Error(n(331));var h=Ye;for(Ye|=4,pe=e.current;pe!==null;){var x=pe,_=x.child;if((pe.flags&16)!==0){var R=x.deletions;if(R!==null){for(var O=0;O<R.length;O++){var G=R[O];for(pe=G;pe!==null;){var re=pe;switch(re.tag){case 0:case 11:case 15:ol(8,re,x)}var ie=re.child;if(ie!==null)ie.return=re,pe=ie;else for(;pe!==null;){re=pe;var te=re.sibling,fe=re.return;if(F0(re),re===G){pe=null;break}if(te!==null){te.return=fe,pe=te;break}pe=fe}}}var me=x.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var Tt=ve.sibling;ve.sibling=null,ve=Tt}while(ve!==null)}}pe=x}}if((x.subtreeFlags&2064)!==0&&_!==null)_.return=x,pe=_;else e:for(;pe!==null;){if(x=pe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ol(9,x,x.return)}var U=x.sibling;if(U!==null){U.return=x.return,pe=U;break e}pe=x.return}}var M=e.current;for(pe=M;pe!==null;){_=pe;var H=_.child;if((_.subtreeFlags&2064)!==0&&H!==null)H.return=_,pe=H;else e:for(_=M;pe!==null;){if(R=pe,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:id(9,R)}}catch(be){Nt(R,R.return,be)}if(R===_){pe=null;break e}var oe=R.sibling;if(oe!==null){oe.return=R.return,pe=oe;break e}pe=R.return}}if(Ye=h,Zi(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(ei,e)}catch{}d=!0}return d}finally{Ke=l,bn.transition=r}}return!1}function ex(e,r,l){r=Ws(l,r),r=v0(e,r,1),e=ea(e,r,1),r=wr(),e!==null&&(zo(e,1,r),Mr(e,r))}function Nt(e,r,l){if(e.tag===3)ex(e,e,l);else for(;r!==null;){if(r.tag===3){ex(r,e,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ra===null||!ra.has(d))){e=Ws(l,e),e=y0(r,e,1),r=ea(r,e,1),e=wr(),r!==null&&(zo(r,1,e),Mr(r,e));break}}r=r.return}}function p2(e,r,l){var d=e.pingCache;d!==null&&d.delete(r),r=wr(),e.pingedLanes|=e.suspendedLanes&l,Qt===e&&(rr&l)===l&&(Wt===4||Wt===3&&(rr&130023424)===rr&&500>Fe()-lp?Xa(e,0):op|=l),Mr(e,r)}function tx(e,r){r===0&&((e.mode&1)===0?r=1:(r=yc,yc<<=1,(yc&130023424)===0&&(yc=4194304)));var l=wr();e=ki(e,r),e!==null&&(zo(e,r,l),Mr(e,l))}function h2(e){var r=e.memoizedState,l=0;r!==null&&(l=r.retryLane),tx(e,l)}function m2(e,r){var l=0;switch(e.tag){case 13:var d=e.stateNode,h=e.memoizedState;h!==null&&(l=h.retryLane);break;case 19:d=e.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(r),tx(e,l)}var rx;rx=function(e,r,l){if(e!==null)if(e.memoizedProps!==r.pendingProps||Lr.current)Or=!0;else{if((e.lanes&l)===0&&(r.flags&128)===0)return Or=!1,r2(e,r,l);Or=(e.flags&131072)!==0}else Or=!1,ut&&(r.flags&1048576)!==0&&Og(r,Uc,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;rd(e,r),e=r.pendingProps;var h=zs(r,or.current);Bs(r,l),h=Df(null,r,d,e,h,l);var x=Bf();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zr(d)?(x=!0,Fc(r)):x=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Rf(r),h.updater=ed,r.stateNode=h,h._reactInternals=r,Gf(r,d,e,l),r=Kf(null,r,d,!0,x,l)):(r.tag=0,ut&&x&&kf(r),br(null,r,h,l),r=r.child),r;case 16:d=r.elementType;e:{switch(rd(e,r),e=r.pendingProps,h=d._init,d=h(d._payload),r.type=d,h=r.tag=x2(d),e=Wn(d,e),h){case 0:r=Qf(null,r,d,e,l);break e;case 1:r=A0(null,r,d,e,l);break e;case 11:r=_0(null,r,d,e,l);break e;case 14:r=N0(null,r,d,Wn(d.type,e),l);break e}throw Error(n(306,d,""))}return r;case 0:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Wn(d,h),Qf(e,r,d,h,l);case 1:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Wn(d,h),A0(e,r,d,h,l);case 3:e:{if(C0(r),e===null)throw Error(n(387));d=r.pendingProps,x=r.memoizedState,h=x.element,Vg(e,r),qc(r,d,null,l);var _=r.memoizedState;if(d=_.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){h=Ws(Error(n(423)),r),r=T0(e,r,d,l,h);break e}else if(d!==h){h=Ws(Error(n(424)),r),r=T0(e,r,d,l,h);break e}else for($r=Qi(r.stateNode.containerInfo.firstChild),Zr=r,ut=!0,Un=null,l=Wg(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ms(),d===h){r=Ni(e,r,l);break e}br(e,r,d,l)}r=r.child}return r;case 5:return qg(r),e===null&&jf(r),d=r.type,h=r.pendingProps,x=e!==null?e.memoizedProps:null,_=h.children,gf(d,h)?_=null:x!==null&&gf(d,x)&&(r.flags|=32),S0(e,r),br(e,r,_,l),r.child;case 6:return e===null&&jf(r),null;case 13:return P0(e,r,l);case 4:return Lf(r,r.stateNode.containerInfo),d=r.pendingProps,e===null?r.child=Fs(r,null,d,l):br(e,r,d,l),r.child;case 11:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Wn(d,h),_0(e,r,d,h,l);case 7:return br(e,r,r.pendingProps,l),r.child;case 8:return br(e,r,r.pendingProps.children,l),r.child;case 12:return br(e,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,h=r.pendingProps,x=r.memoizedProps,_=h.value,rt(Vc,d._currentValue),d._currentValue=_,x!==null)if(Bn(x.value,_)){if(x.children===h.children&&!Lr.current){r=Ni(e,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var R=x.dependencies;if(R!==null){_=x.child;for(var O=R.firstContext;O!==null;){if(O.context===d){if(x.tag===1){O=_i(-1,l&-l),O.tag=2;var G=x.updateQueue;if(G!==null){G=G.shared;var re=G.pending;re===null?O.next=O:(O.next=re.next,re.next=O),G.pending=O}}x.lanes|=l,O=x.alternate,O!==null&&(O.lanes|=l),Tf(x.return,l,r),R.lanes|=l;break}O=O.next}}else if(x.tag===10)_=x.type===r.type?null:x.child;else if(x.tag===18){if(_=x.return,_===null)throw Error(n(341));_.lanes|=l,R=_.alternate,R!==null&&(R.lanes|=l),Tf(_,l,r),_=x.sibling}else _=x.child;if(_!==null)_.return=x;else for(_=x;_!==null;){if(_===r){_=null;break}if(x=_.sibling,x!==null){x.return=_.return,_=x;break}_=_.return}x=_}br(e,r,h.children,l),r=r.child}return r;case 9:return h=r.type,d=r.pendingProps.children,Bs(r,l),h=vn(h),d=d(h),r.flags|=1,br(e,r,d,l),r.child;case 14:return d=r.type,h=Wn(d,r.pendingProps),h=Wn(d.type,h),N0(e,r,d,h,l);case 15:return j0(e,r,r.type,r.pendingProps,l);case 17:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Wn(d,h),rd(e,r),r.tag=1,zr(d)?(e=!0,Fc(r)):e=!1,Bs(r,l),g0(r,d,h),Gf(r,d,h,l),Kf(null,r,d,!0,e,l);case 19:return L0(e,r,l);case 22:return E0(e,r,l)}throw Error(n(156,r.tag))};function nx(e,r){return zt(e,r)}function g2(e,r,l,d){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,r,l,d){return new g2(e,r,l,d)}function gp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x2(e){if(typeof e=="function")return gp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===F)return 11;if(e===ae)return 14}return 2}function sa(e,r){var l=e.alternate;return l===null?(l=wn(e.tag,r,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=r,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,r=e.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function pd(e,r,l,d,h,x){var _=2;if(d=e,typeof e=="function")gp(e)&&(_=1);else if(typeof e=="string")_=5;else e:switch(e){case L:return Ka(l.children,h,x,r);case B:_=8,h|=8;break;case W:return e=wn(12,l,r,h|2),e.elementType=W,e.lanes=x,e;case J:return e=wn(13,l,r,h),e.elementType=J,e.lanes=x,e;case $:return e=wn(19,l,r,h),e.elementType=$,e.lanes=x,e;case ee:return hd(l,h,x,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:_=10;break e;case Q:_=9;break e;case F:_=11;break e;case ae:_=14;break e;case ce:_=16,d=null;break e}throw Error(n(130,e==null?e:typeof e,""))}return r=wn(_,l,r,h),r.elementType=e,r.type=d,r.lanes=x,r}function Ka(e,r,l,d){return e=wn(7,e,d,r),e.lanes=l,e}function hd(e,r,l,d){return e=wn(22,e,d,r),e.elementType=ee,e.lanes=l,e.stateNode={isHidden:!1},e}function xp(e,r,l){return e=wn(6,e,null,r),e.lanes=l,e}function vp(e,r,l){return r=wn(4,e.children!==null?e.children:[],e.key,r),r.lanes=l,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function v2(e,r,l,d,h){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function yp(e,r,l,d,h,x,_,R,O){return e=new v2(e,r,l,R,O),r===1?(r=1,x===!0&&(r|=8)):r=0,x=wn(3,null,null,r),e.current=x,x.stateNode=e,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(x),e}function y2(e,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:d==null?null:""+d,children:e,containerInfo:r,implementation:l}}function ix(e){if(!e)return Ji;e=e._reactInternals;e:{if(He(e)!==e||e.tag!==1)throw Error(n(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(e.tag===1){var l=e.type;if(zr(l))return Rg(e,l,r)}return r}function ax(e,r,l,d,h,x,_,R,O){return e=yp(l,d,!0,e,h,x,_,R,O),e.context=ix(null),l=e.current,d=wr(),h=ia(l),x=_i(d,h),x.callback=r??null,ea(l,x,h),e.current.lanes=h,zo(e,h,d),Mr(e,d),e}function md(e,r,l,d){var h=r.current,x=wr(),_=ia(h);return l=ix(l),r.context===null?r.context=l:r.pendingContext=l,r=_i(x,_),r.payload={element:e},d=d===void 0?null:d,d!==null&&(r.callback=d),e=ea(h,r,_),e!==null&&(Yn(e,h,_,x),Gc(e,h,_)),_}function gd(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function sx(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<r?l:r}}function bp(e,r){sx(e,r),(e=e.alternate)&&sx(e,r)}function b2(){return null}var ox=typeof reportError=="function"?reportError:function(e){console.error(e)};function wp(e){this._internalRoot=e}xd.prototype.render=wp.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(n(409));md(e,r,null,null)},xd.prototype.unmount=wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;qa(function(){md(null,e,null,null)}),r[vi]=null}};function xd(e){this._internalRoot=e}xd.prototype.unstable_scheduleHydration=function(e){if(e){var r=Vm();e={blockedOn:null,target:e,priority:r};for(var l=0;l<Gi.length&&r!==0&&r<Gi[l].priority;l++);Gi.splice(l,0,e),l===0&&qm(e)}};function kp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lx(){}function w2(e,r,l,d,h){if(h){if(typeof d=="function"){var x=d;d=function(){var G=gd(_);x.call(G)}}var _=ax(r,d,e,0,null,!1,!1,"",lx);return e._reactRootContainer=_,e[vi]=_.current,Xo(e.nodeType===8?e.parentNode:e),qa(),_}for(;h=e.lastChild;)e.removeChild(h);if(typeof d=="function"){var R=d;d=function(){var G=gd(O);R.call(G)}}var O=yp(e,0,!1,null,null,!1,!1,"",lx);return e._reactRootContainer=O,e[vi]=O.current,Xo(e.nodeType===8?e.parentNode:e),qa(function(){md(r,O,l,d)}),O}function yd(e,r,l,d,h){var x=l._reactRootContainer;if(x){var _=x;if(typeof h=="function"){var R=h;h=function(){var O=gd(_);R.call(O)}}md(r,_,e,h)}else _=w2(l,r,e,h,d);return gd(_)}Wm=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lo(r.pendingLanes);l!==0&&(Yu(r,l|1),Mr(r,Fe()),(Ye&6)===0&&(Ys=Fe()+500,Zi()))}break;case 13:qa(function(){var d=ki(e,1);if(d!==null){var h=wr();Yn(d,e,1,h)}}),bp(e,1)}},Gu=function(e){if(e.tag===13){var r=ki(e,134217728);if(r!==null){var l=wr();Yn(r,e,134217728,l)}bp(e,134217728)}},Hm=function(e){if(e.tag===13){var r=ia(e),l=ki(e,r);if(l!==null){var d=wr();Yn(l,e,r,d)}bp(e,r)}},Vm=function(){return Ke},Ym=function(e,r){var l=Ke;try{return Ke=e,r()}finally{Ke=l}},Fn=function(e,r,l){switch(r){case"input":if(q(e,l),r=l.name,l.type==="radio"&&r!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==e&&d.form===e.form){var h=Ic(d);if(!h)throw Error(n(90));St(d),q(d,h)}}}break;case"textarea":Jn(e,l);break;case"select":r=l.value,r!=null&&Qe(e,!!l.multiple,r,!1)}},mn=pp,Wi=qa;var k2={usingClientEntryPoint:!1,Events:[Jo,Rs,Ic,$n,gi,pp]},ul={findFiberByHostInstance:Da,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_2={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qr(e),e===null?null:e.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||b2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bd.isDisabled&&bd.supportsFiber)try{ei=bd.inject(_2),yr=bd}catch{}}return Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k2,Fr.createPortal=function(e,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kp(r))throw Error(n(200));return y2(e,r,null,l)},Fr.createRoot=function(e,r){if(!kp(e))throw Error(n(299));var l=!1,d="",h=ox;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=yp(e,1,!1,null,null,l,!1,d,h),e[vi]=r.current,Xo(e.nodeType===8?e.parentNode:e),new wp(r)},Fr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=Qr(r),e=e===null?null:e.stateNode,e},Fr.flushSync=function(e){return qa(e)},Fr.hydrate=function(e,r,l){if(!vd(r))throw Error(n(200));return yd(null,e,r,!0,l)},Fr.hydrateRoot=function(e,r,l){if(!kp(e))throw Error(n(405));var d=l!=null&&l.hydratedSources||null,h=!1,x="",_=ox;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(_=l.onRecoverableError)),r=ax(r,null,e,1,l??null,h,!1,x,_),e[vi]=r.current,Xo(e),d)for(e=0;e<d.length;e++)l=d[e],h=l._getVersion,h=h(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,h]:r.mutableSourceEagerHydrationData.push(l,h);return new xd(r)},Fr.render=function(e,r,l){if(!vd(r))throw Error(n(200));return yd(null,e,r,!1,l)},Fr.unmountComponentAtNode=function(e){if(!vd(e))throw Error(n(40));return e._reactRootContainer?(qa(function(){yd(null,null,e,!1,function(){e._reactRootContainer=null,e[vi]=null})}),!0):!1},Fr.unstable_batchedUpdates=pp,Fr.unstable_renderSubtreeIntoContainer=function(e,r,l,d){if(!vd(l))throw Error(n(200));if(e==null||e._reactInternals===void 0)throw Error(n(38));return yd(e,r,l,!1,d)},Fr.version="18.3.1-next-f1338f8080-20240426",Fr}var gx;function Kv(){if(gx)return jp.exports;gx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),jp.exports=L2(),jp.exports}var xx;function z2(){if(xx)return wd;xx=1;var a=Kv();return wd.createRoot=a.createRoot,wd.hydrateRoot=a.hydrateRoot,wd}var O2=z2();Kv();function Bl(){return Bl=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},Bl.apply(null,arguments)}var ha;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(ha||(ha={}));const vx="popstate";function I2(a){a===void 0&&(a={});function t(i,s){let{pathname:c,search:u,hash:f}=i.location;return Qp("",{pathname:c,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:ru(s)}return F2(t,n,null,a)}function Et(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function Jv(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function M2(){return Math.random().toString(36).substr(2,8)}function yx(a,t){return{usr:a.state,key:a.key,idx:t}}function Qp(a,t,n,i){return n===void 0&&(n=null),Bl({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof t=="string"?So(t):t,{state:n,key:t&&t.key||i||M2()})}function ru(a){let{pathname:t="/",search:n="",hash:i=""}=a;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function So(a){let t={};if(a){let n=a.indexOf("#");n>=0&&(t.hash=a.substr(n),a=a.substr(0,n));let i=a.indexOf("?");i>=0&&(t.search=a.substr(i),a=a.substr(0,i)),a&&(t.pathname=a)}return t}function F2(a,t,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:c=!1}=i,u=s.history,f=ha.Pop,p=null,m=g();m==null&&(m=0,u.replaceState(Bl({},u.state,{idx:m}),""));function g(){return(u.state||{idx:null}).idx}function y(){f=ha.Pop;let N=g(),C=N==null?null:N-m;m=N,p&&p({action:f,location:w.location,delta:C})}function v(N,C){f=ha.Push;let A=Qp(w.location,N,C);m=g()+1;let S=yx(A,m),j=w.createHref(A);try{u.pushState(S,"",j)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;s.location.assign(j)}c&&p&&p({action:f,location:w.location,delta:1})}function b(N,C){f=ha.Replace;let A=Qp(w.location,N,C);m=g();let S=yx(A,m),j=w.createHref(A);u.replaceState(S,"",j),c&&p&&p({action:f,location:w.location,delta:0})}function k(N){let C=s.location.origin!=="null"?s.location.origin:s.location.href,A=typeof N=="string"?N:ru(N);return A=A.replace(/ $/,"%20"),Et(C,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,C)}let w={get action(){return f},get location(){return a(s,u)},listen(N){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(vx,y),p=N,()=>{s.removeEventListener(vx,y),p=null}},createHref(N){return t(s,N)},createURL:k,encodeLocation(N){let C=k(N);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:v,replace:b,go(N){return u.go(N)}};return w}var bx;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(bx||(bx={}));function D2(a,t,n){return n===void 0&&(n="/"),B2(a,t,n)}function B2(a,t,n,i){let s=typeof t=="string"?So(t):t,c=xo(s.pathname||"/",n);if(c==null)return null;let u=Zv(a);U2(u);let f=null,p=Z2(c);for(let m=0;f==null&&m<u.length;++m)f=K2(u[m],p);return f}function Zv(a,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(c,u,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let m=wa([i,p.relativePath]),g=n.concat(p);c.children&&c.children.length>0&&(Et(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Zv(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:X2(m,c.index),routesMeta:g})};return a.forEach((c,u)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))s(c,u);else for(let p of $v(c.path))s(c,u,p)}),t}function $v(a){let t=a.split("/");if(t.length===0)return[];let[n,...i]=t,s=n.endsWith("?"),c=n.replace(/\?$/,"");if(i.length===0)return s?[c,""]:[c];let u=$v(i.join("/")),f=[];return f.push(...u.map(p=>p===""?c:[c,p].join("/"))),s&&f.push(...u),f.map(p=>a.startsWith("/")&&p===""?"/":p)}function U2(a){a.sort((t,n)=>t.score!==n.score?n.score-t.score:Q2(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const W2=/^:[\w-]+$/,H2=3,V2=2,Y2=1,G2=10,q2=-2,wx=a=>a==="*";function X2(a,t){let n=a.split("/"),i=n.length;return n.some(wx)&&(i+=q2),t&&(i+=V2),n.filter(s=>!wx(s)).reduce((s,c)=>s+(W2.test(c)?H2:c===""?Y2:G2),i)}function Q2(a,t){return a.length===t.length&&a.slice(0,-1).every((i,s)=>i===t[s])?a[a.length-1]-t[t.length-1]:0}function K2(a,t,n){let{routesMeta:i}=a,s={},c="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],m=f===i.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=Kp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!y)return null;Object.assign(s,y.params),u.push({params:s,pathname:wa([c,y.pathname]),pathnameBase:t5(wa([c,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(c=wa([c,y.pathnameBase]))}return u}function Kp(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,i]=J2(a.path,a.caseSensitive,a.end),s=t.match(n);if(!s)return null;let c=s[0],u=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((m,g,y)=>{let{paramName:v,isOptional:b}=g;if(v==="*"){let w=f[y]||"";u=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const k=f[y];return b&&!k?m[v]=void 0:m[v]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:u,pattern:a}}function J2(a,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jv(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let i=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(i.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function Z2(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jv(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),a}}function xo(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=a.charAt(n);return i&&i!=="/"?null:a.slice(n)||"/"}function $2(a,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:s=""}=typeof a=="string"?So(a):a,c;return n?(n=r1(n),n.startsWith("/")?c=kx(n.substring(1),"/"):c=kx(n,t)):c=t,{pathname:c,search:r5(i),hash:n5(s)}}function kx(a,t){let n=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ap(a,t,n,i){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e5(a){return a.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function e1(a,t){let n=e5(a);return t?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function t1(a,t,n,i){i===void 0&&(i=!1);let s;typeof a=="string"?s=So(a):(s=Bl({},a),Et(!s.pathname||!s.pathname.includes("?"),Ap("?","pathname","search",s)),Et(!s.pathname||!s.pathname.includes("#"),Ap("#","pathname","hash",s)),Et(!s.search||!s.search.includes("#"),Ap("#","search","hash",s)));let c=a===""||s.pathname==="",u=c?"/":s.pathname,f;if(u==null)f=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;s.pathname=v.join("/")}f=y>=0?t[y]:"/"}let p=$2(s,f),m=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}const r1=a=>a.replace(/\/\/+/g,"/"),wa=a=>r1(a.join("/")),t5=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),r5=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,n5=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function i5(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const n1=["post","put","patch","delete"];new Set(n1);const a5=["get",...n1];new Set(a5);function Ul(){return Ul=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},Ul.apply(null,arguments)}const wu=z.createContext(null),i1=z.createContext(null),Pa=z.createContext(null),ku=z.createContext(null),Bi=z.createContext({outlet:null,matches:[],isDataRoute:!1}),a1=z.createContext(null);function s5(a,t){let{relative:n}=t===void 0?{}:t;ac()||Et(!1);let{basename:i,navigator:s}=z.useContext(Pa),{hash:c,pathname:u,search:f}=_u(a,{relative:n}),p=u;return i!=="/"&&(p=u==="/"?i:wa([i,u])),s.createHref({pathname:p,search:f,hash:c})}function ac(){return z.useContext(ku)!=null}function Ao(){return ac()||Et(!1),z.useContext(ku).location}function s1(a){z.useContext(Pa).static||z.useLayoutEffect(a)}function o5(){let{isDataRoute:a}=z.useContext(Bi);return a?_5():l5()}function l5(){ac()||Et(!1);let a=z.useContext(wu),{basename:t,future:n,navigator:i}=z.useContext(Pa),{matches:s}=z.useContext(Bi),{pathname:c}=Ao(),u=JSON.stringify(e1(s,n.v7_relativeSplatPath)),f=z.useRef(!1);return s1(()=>{f.current=!0}),z.useCallback(function(m,g){if(g===void 0&&(g={}),!f.current)return;if(typeof m=="number"){i.go(m);return}let y=t1(m,JSON.parse(u),c,g.relative==="path");a==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:wa([t,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[t,i,u,c,a])}const c5=z.createContext(null);function d5(a){let t=z.useContext(Bi).outlet;return t&&z.createElement(c5.Provider,{value:a},t)}function u5(){let{matches:a}=z.useContext(Bi),t=a[a.length-1];return t?t.params:{}}function _u(a,t){let{relative:n}=t===void 0?{}:t,{future:i}=z.useContext(Pa),{matches:s}=z.useContext(Bi),{pathname:c}=Ao(),u=JSON.stringify(e1(s,i.v7_relativeSplatPath));return z.useMemo(()=>t1(a,JSON.parse(u),c,n==="path"),[a,u,c,n])}function f5(a,t){return p5(a,t)}function p5(a,t,n,i){ac()||Et(!1);let{navigator:s}=z.useContext(Pa),{matches:c}=z.useContext(Bi),u=c[c.length-1],f=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let m=Ao(),g;if(t){var y;let N=typeof t=="string"?So(t):t;p==="/"||(y=N.pathname)!=null&&y.startsWith(p)||Et(!1),g=N}else g=m;let v=g.pathname||"/",b=v;if(p!=="/"){let N=p.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=D2(a,{pathname:b}),w=v5(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},f,N.params),pathname:wa([p,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?p:wa([p,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),c,n,i);return t&&w?z.createElement(ku.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ha.Pop}},w):w}function h5(){let a=k5(),t=i5(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:s},n):null,null)}const m5=z.createElement(h5,null);class g5 extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(Bi.Provider,{value:this.props.routeContext},z.createElement(a1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x5(a){let{routeContext:t,match:n,children:i}=a,s=z.useContext(wu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Bi.Provider,{value:t},i)}function v5(a,t,n,i){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),a==null){var c;if(!n)return null;if(n.errors)a=n.matches;else if((c=i)!=null&&c.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,f=(s=n)==null?void 0:s.errors;if(f!=null){let g=u.findIndex(y=>y.route.id&&f?.[y.route.id]!==void 0);g>=0||Et(!1),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(n&&i&&i.v7_partialHydration)for(let g=0;g<u.length;g++){let y=u[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:v,errors:b}=n,k=y.route.loader&&v[y.route.id]===void 0&&(!b||b[y.route.id]===void 0);if(y.route.lazy||k){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,y,v)=>{let b,k=!1,w=null,N=null;n&&(b=f&&y.route.id?f[y.route.id]:void 0,w=y.route.errorElement||m5,p&&(m<0&&v===0?(N5("route-fallback"),k=!0,N=null):m===v&&(k=!0,N=y.route.hydrateFallbackElement||null)));let C=t.concat(u.slice(0,v+1)),A=()=>{let S;return b?S=w:k?S=N:y.route.Component?S=z.createElement(y.route.Component,null):y.route.element?S=y.route.element:S=g,z.createElement(x5,{match:y,routeContext:{outlet:g,matches:C,isDataRoute:n!=null},children:S})};return n&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?z.createElement(g5,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:A(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):A()},null)}var o1=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(o1||{}),l1=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(l1||{});function y5(a){let t=z.useContext(wu);return t||Et(!1),t}function b5(a){let t=z.useContext(i1);return t||Et(!1),t}function w5(a){let t=z.useContext(Bi);return t||Et(!1),t}function c1(a){let t=w5(),n=t.matches[t.matches.length-1];return n.route.id||Et(!1),n.route.id}function k5(){var a;let t=z.useContext(a1),n=b5(),i=c1();return t!==void 0?t:(a=n.errors)==null?void 0:a[i]}function _5(){let{router:a}=y5(o1.UseNavigateStable),t=c1(l1.UseNavigateStable),n=z.useRef(!1);return s1(()=>{n.current=!0}),z.useCallback(function(s,c){c===void 0&&(c={}),n.current&&(typeof s=="number"?a.navigate(s):a.navigate(s,Ul({fromRouteId:t},c)))},[a,t])}const _x={};function N5(a,t,n){_x[a]||(_x[a]=!0)}function j5(a,t){a?.v7_startTransition,a?.v7_relativeSplatPath}function Nx(a){return d5(a.context)}function kn(a){Et(!1)}function E5(a){let{basename:t="/",children:n=null,location:i,navigationType:s=ha.Pop,navigator:c,static:u=!1,future:f}=a;ac()&&Et(!1);let p=t.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:p,navigator:c,static:u,future:Ul({v7_relativeSplatPath:!1},f)}),[p,f,c,u]);typeof i=="string"&&(i=So(i));let{pathname:g="/",search:y="",hash:v="",state:b=null,key:k="default"}=i,w=z.useMemo(()=>{let N=xo(g,p);return N==null?null:{location:{pathname:N,search:y,hash:v,state:b,key:k},navigationType:s}},[p,g,y,v,b,k,s]);return w==null?null:z.createElement(Pa.Provider,{value:m},z.createElement(ku.Provider,{children:n,value:w}))}function S5(a){let{children:t,location:n}=a;return f5(Jp(t),n)}new Promise(()=>{});function Jp(a,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(a,(i,s)=>{if(!z.isValidElement(i))return;let c=[...t,s];if(i.type===z.Fragment){n.push.apply(n,Jp(i.props.children,c));return}i.type!==kn&&Et(!1),!i.props.index||!i.props.children||Et(!1);let u={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Jp(i.props.children,c)),n.push(u)}),n}function nu(){return nu=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},nu.apply(null,arguments)}function d1(a,t){if(a==null)return{};var n={};for(var i in a)if({}.hasOwnProperty.call(a,i)){if(t.indexOf(i)!==-1)continue;n[i]=a[i]}return n}function A5(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function C5(a,t){return a.button===0&&(!t||t==="_self")&&!A5(a)}const T5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],P5=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],R5="6";try{window.__reactRouterVersion=R5}catch{}const L5=z.createContext({isTransitioning:!1}),z5="startTransition",jx=T2[z5];function O5(a){let{basename:t,children:n,future:i,window:s}=a,c=z.useRef();c.current==null&&(c.current=I2({window:s,v5Compat:!0}));let u=c.current,[f,p]=z.useState({action:u.action,location:u.location}),{v7_startTransition:m}=i||{},g=z.useCallback(y=>{m&&jx?jx(()=>p(y)):p(y)},[p,m]);return z.useLayoutEffect(()=>u.listen(g),[u,g]),z.useEffect(()=>j5(i),[i]),z.createElement(E5,{basename:t,children:n,location:f.location,navigationType:f.action,navigator:u,future:i})}const I5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sn=z.forwardRef(function(t,n){let{onClick:i,relative:s,reloadDocument:c,replace:u,state:f,target:p,to:m,preventScrollReset:g,viewTransition:y}=t,v=d1(t,T5),{basename:b}=z.useContext(Pa),k,w=!1;if(typeof m=="string"&&M5.test(m)&&(k=m,I5))try{let S=new URL(window.location.href),j=m.startsWith("//")?new URL(S.protocol+m):new URL(m),P=xo(j.pathname,b);j.origin===S.origin&&P!=null?m=P+j.search+j.hash:w=!0}catch{}let N=s5(m,{relative:s}),C=D5(m,{replace:u,state:f,target:p,preventScrollReset:g,relative:s,viewTransition:y});function A(S){i&&i(S),S.defaultPrevented||C(S)}return z.createElement("a",nu({},v,{href:k||N,onClick:w||c?i:A,ref:n,target:p}))}),Ex=z.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:s=!1,className:c="",end:u=!1,style:f,to:p,viewTransition:m,children:g}=t,y=d1(t,P5),v=_u(p,{relative:y.relative}),b=Ao(),k=z.useContext(i1),{navigator:w,basename:N}=z.useContext(Pa),C=k!=null&&B5(v)&&m===!0,A=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,S=b.pathname,j=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;s||(S=S.toLowerCase(),j=j?j.toLowerCase():null,A=A.toLowerCase()),j&&N&&(j=xo(j,N)||j);const P=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let I=S===A||!u&&S.startsWith(A)&&S.charAt(P)==="/",L=j!=null&&(j===A||!u&&j.startsWith(A)&&j.charAt(A.length)==="/"),B={isActive:I,isPending:L,isTransitioning:C},W=I?i:void 0,D;typeof c=="function"?D=c(B):D=[c,I?"active":null,L?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let Q=typeof f=="function"?f(B):f;return z.createElement(Sn,nu({},y,{"aria-current":W,className:D,ref:n,style:Q,to:p,viewTransition:m}),typeof g=="function"?g(B):g)});var Zp;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(Zp||(Zp={}));var Sx;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Sx||(Sx={}));function F5(a){let t=z.useContext(wu);return t||Et(!1),t}function D5(a,t){let{target:n,replace:i,state:s,preventScrollReset:c,relative:u,viewTransition:f}=t===void 0?{}:t,p=o5(),m=Ao(),g=_u(a,{relative:u});return z.useCallback(y=>{if(C5(y,n)){y.preventDefault();let v=i!==void 0?i:ru(m)===ru(g);p(a,{replace:v,state:s,preventScrollReset:c,relative:u,viewTransition:f})}},[m,p,g,i,s,n,a,c,u,f])}function B5(a,t){t===void 0&&(t={});let n=z.useContext(L5);n==null&&Et(!1);let{basename:i}=F5(Zp.useViewTransitionState),s=_u(a,{relative:t.relative});if(!n.isTransitioning)return!1;let c=xo(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=xo(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Kp(s.pathname,u)!=null||Kp(s.pathname,c)!=null}var Ax="1.3.26";function u1(a,t,n){return Math.max(a,Math.min(t,n))}function U5(a,t,n){return(1-n)*a+n*t}function W5(a,t,n,i){return U5(a,t,1-Math.exp(-n*i))}function H5(a,t){return(a%t+t)%t}var V5=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(a){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=a;const n=u1(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=W5(this.value,this.to,this.lerp*60,a),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(a,t,{lerp:n,duration:i,easing:s,onStart:c,onUpdate:u}){this.from=this.value=a,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,c?.(),this.onUpdate=u}};function Y5(a,t){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,a.apply(this,i)},t)}}var G5=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(a,t,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=a,this.content=t,n&&(this.debouncedResize=Y5(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},f1=class{events={};emit(a,...t){const n=this.events[a]||[];for(let i=0,s=n.length;i<s;i++)n[i]?.(...t)}on(a,t){return this.events[a]?this.events[a].push(t):this.events[a]=[t],()=>{this.events[a]=this.events[a]?.filter(n=>t!==n)}}off(a,t){this.events[a]=this.events[a]?.filter(n=>t!==n)}destroy(){this.events={}}};const q5=100/6,la={passive:!1};function Cx(a,t){return a===1?q5:a===2?t:1}var X5=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new f1;constructor(a,t={wheelMultiplier:1,touchMultiplier:1}){this.element=a,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,la),this.element.addEventListener("touchstart",this.onTouchStart,la),this.element.addEventListener("touchmove",this.onTouchMove,la),this.element.addEventListener("touchend",this.onTouchEnd,la)}on(a,t){return this.emitter.on(a,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,la),this.element.removeEventListener("touchstart",this.onTouchStart,la),this.element.removeEventListener("touchmove",this.onTouchMove,la),this.element.removeEventListener("touchend",this.onTouchEnd,la)}onTouchStart=a=>{const{clientX:t,clientY:n}=a.targetTouches?a.targetTouches[0]:a;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:a})};onTouchMove=a=>{const{clientX:t,clientY:n}=a.targetTouches?a.targetTouches[0]:a,i=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:a})};onTouchEnd=a=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:a})};onWheel=a=>{let{deltaX:t,deltaY:n,deltaMode:i}=a;const s=Cx(i,this.window.width),c=Cx(i,this.window.height);t*=s,n*=c,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:a})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Tx=a=>Math.min(1,1.001-2**(-10*a));var Q5=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new V5;emitter=new f1;dimensions;virtualScroll;constructor({wrapper:a=window,content:t=document.documentElement,eventsTarget:n=a,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:c=.075,touchInertiaExponent:u=1.7,duration:f,easing:p,lerp:m=.1,infinite:g=!1,orientation:y="vertical",gestureOrientation:v=y==="horizontal"?"both":"vertical",touchMultiplier:b=1,wheelMultiplier:k=1,autoResize:w=!0,prevent:N,virtualScroll:C,overscroll:A=!0,autoRaf:S=!1,anchors:j=!1,autoToggle:P=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:L=!1,naiveDimensions:B=L,stopInertiaOnNavigate:W=!1,respectReducedMotion:D=!0}={}){window.lenisVersion=Ax,window.lenis||(window.lenis={}),window.lenis.version=Ax,y==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!a||a===document.documentElement)&&(a=window),typeof f=="number"&&typeof p!="function"?p=Tx:typeof p=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:a,content:t,eventsTarget:n,smoothWheel:i,syncTouch:s,syncTouchLerp:c,touchInertiaExponent:u,duration:f,easing:p,lerp:m,infinite:g,gestureOrientation:v,orientation:y,touchMultiplier:b,wheelMultiplier:k,autoResize:w,prevent:N,virtualScroll:C,overscroll:A,autoRaf:S,anchors:j,autoToggle:P,allowNestedScroll:I,naiveDimensions:B,stopInertiaOnNavigate:W,respectReducedMotion:D},this.dimensions=new G5(a,t,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new X5(n,{touchMultiplier:b,wheelMultiplier:k}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(a,t){return this.emitter.on(a,t)}off(a,t){return this.emitter.off(a,t)}onScrollEnd=a=>{a instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&a.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const a=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[a]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=a=>{a.propertyName?.includes("overflow")&&a.target===this.rootElement&&this.checkOverflow()};setScroll(a){this.isHorizontal?this.options.wrapper.scrollTo({left:a,behavior:"instant"}):this.options.wrapper.scrollTo({top:a,behavior:"instant"})}onClick=a=>{const t=a.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=t.find(s=>n.host===s.host&&n.pathname===s.pathname&&s.hash);if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(i.hash);this.scrollTo(c,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}};onPointerDown=a=>{a.button===1&&this.reset()};isTouchOnSelectionHandle(a){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const n=a.targetTouches[0]??a.changedTouches[0];if(!n)return!1;const i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;const s=i[0],c=i[i.length-1],u=40,f=Math.hypot(n.clientX-s.left,n.clientY-s.top)<=u,p=Math.hypot(n.clientX-c.right,n.clientY-c.bottom)<=u;return f||p}onVirtualScroll=a=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(a)===!1)return;const{deltaX:t,deltaY:n,event:i}=a;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),c=i.type.includes("wheel");if(s&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const u=t===0&&n===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(u||f)return;let p=i.composedPath();p=p.slice(0,p.indexOf(this.rootElement));const m=this.options.prevent,g=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";if(p.find(k=>k instanceof HTMLElement&&(typeof m=="function"&&m?.(k)||k.hasAttribute?.("data-lenis-prevent")||g==="vertical"&&k.hasAttribute?.("data-lenis-prevent-vertical")||g==="horizontal"&&k.hasAttribute?.("data-lenis-prevent-horizontal")||s&&k.hasAttribute?.("data-lenis-prevent-touch")||c&&k.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(k,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let y=n;this.options.gestureOrientation==="both"?y=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(y=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const v=s&&this.options.syncTouch,b=s&&i.type==="touchend";b&&(y=Math.sign(y)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+y,{programmatic:!1,...v?{lerp:b?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const a=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-a,this.direction=Math.sign(this.animatedScroll-a),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=a=>{const t=a-(this.time||a);this.time=a,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(a,{offset:t=0,immediate:n=!1,lock:i=!1,programmatic:s=!0,lerp:c=s?this.options.lerp:void 0,duration:u=s?this.options.duration:void 0,easing:f=s?this.options.easing:void 0,onStart:p,onComplete:m,force:g=!1,userData:y}={}){if(this.prefersReducedMotion&&(s?n=!0:(c=1,u=void 0,f=void 0)),(this.isStopped||this.isLocked)&&!g)return;let v=a,b=t;if(typeof v=="string"&&["top","left","start","#"].includes(v))v=0;else if(typeof v=="string"&&["bottom","right","end"].includes(v))v=this.limit;else{let k=null;if(typeof v=="string"?(k=v.startsWith("#")?document.getElementById(v.slice(1)):document.querySelector(v),k||(v==="#top"?v=0:console.warn("Lenis: Target not found",v))):v instanceof HTMLElement&&v?.nodeType&&(k=v),k){if(this.options.wrapper!==window){const j=this.rootElement.getBoundingClientRect();b-=this.isHorizontal?j.left:j.top}const w=k.getBoundingClientRect(),N=getComputedStyle(k),C=this.isHorizontal?Number.parseFloat(N.scrollMarginLeft):Number.parseFloat(N.scrollMarginTop),A=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(A.scrollPaddingLeft):Number.parseFloat(A.scrollPaddingTop);v=(this.isHorizontal?w.left:w.top)+this.animatedScroll-(Number.isNaN(C)?0:C)-(Number.isNaN(S)?0:S)}}if(typeof v=="number"){if(v+=b,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const k=v-this.animatedScroll;k>this.limit/2?v-=this.limit:k<-this.limit/2&&(v+=this.limit)}}else v=u1(0,v,this.limit);if(v===this.targetScroll){p?.(this),m?.(this);return}if(this.userData=y??{},n){this.animatedScroll=this.targetScroll=v,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=v),typeof u=="number"&&typeof f!="function"?f=Tx:typeof f=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,v,{duration:u,easing:f,lerp:c,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",p?.(this)},onUpdate:(k,w)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=k-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=k,this.setScroll(this.scroll),s&&(this.targetScroll=k),w||this.emit(),w&&(this.reset(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(a,{deltaX:t,deltaY:n}){const i=Date.now();a._lenis||(a._lenis={});const s=a._lenis;let c,u,f,p,m,g,y,v,b,k;if(i-(s.time??0)>2e3){s.time=Date.now();const I=window.getComputedStyle(a);if(s.computedStyle=I,c=["auto","overlay","scroll"].includes(I.overflowX),u=["auto","overlay","scroll"].includes(I.overflowY),m=["auto"].includes(I.overscrollBehaviorX),g=["auto"].includes(I.overscrollBehaviorY),s.hasOverflowX=c,s.hasOverflowY=u,!(c||u))return!1;y=a.scrollWidth,v=a.scrollHeight,b=a.clientWidth,k=a.clientHeight,f=y>b,p=v>k,s.isScrollableX=f,s.isScrollableY=p,s.scrollWidth=y,s.scrollHeight=v,s.clientWidth=b,s.clientHeight=k,s.hasOverscrollBehaviorX=m,s.hasOverscrollBehaviorY=g}else f=s.isScrollableX,p=s.isScrollableY,c=s.hasOverflowX,u=s.hasOverflowY,y=s.scrollWidth,v=s.scrollHeight,b=s.clientWidth,k=s.clientHeight,m=s.hasOverscrollBehaviorX,g=s.hasOverscrollBehaviorY;if(!(c&&f||u&&p))return!1;const w=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";let N,C,A,S,j,P;if(w==="horizontal")N=Math.round(a.scrollLeft),C=y-b,A=t,S=c,j=f,P=m;else if(w==="vertical")N=Math.round(a.scrollTop),C=v-k,A=n,S=u,j=p,P=g;else return!1;return!P&&(N>=C||N<=0)?!0:(A>0?N<C:N>0)&&S&&j}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const a=this.options.wrapper;return this.isHorizontal?a.scrollX??a.scrollLeft:a.scrollY??a.scrollTop}get scroll(){return this.options.infinite?H5(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(a){this._isScrolling!==a&&(this._isScrolling=a,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(a){this._isStopped!==a&&(this._isStopped=a,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(a){this._isLocked!==a&&(this._isLocked=a,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let a="lenis";return this.options.autoToggle&&(a+=" lenis-autoToggle"),this.isStopped&&(a+=" lenis-stopped"),this.isLocked&&(a+=" lenis-locked"),this.isScrolling&&(a+=" lenis-scrolling"),this.isScrolling==="smooth"&&(a+=" lenis-smooth"),a}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(a=>{this.rootElement.classList.add(a)})}cleanUpClassName(){for(const a of Array.from(this.rootElement.classList))(a==="lenis"||a.startsWith("lenis-"))&&this.rootElement.classList.remove(a)}};const K5=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p1=(...a)=>a.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");var J5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Z5=z.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:s="",children:c,iconNode:u,...f},p)=>z.createElement("svg",{ref:p,...J5,width:t,height:t,stroke:a,strokeWidth:i?Number(n)*24/Number(t):n,className:p1("lucide",s),...f},[...u.map(([m,g])=>z.createElement(m,g)),...Array.isArray(c)?c:[c]]));const ke=(a,t)=>{const n=z.forwardRef(({className:i,...s},c)=>z.createElement(Z5,{ref:c,iconNode:t,className:p1(`lucide-${K5(a)}`,i),...s}));return n.displayName=`${a}`,n};const $5=ke("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);const h1=ke("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const Xn=ke("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const Dd=ke("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const ek=ke("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const Bd=ke("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Px=ke("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);const tk=ke("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Fh=ke("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);const Nu=ke("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const rk=ke("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const nk=ke("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);const ik=ke("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Dh=ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const ak=ke("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const sk=ke("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const ok=ke("CircleArrowOutUpRight",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);const lk=ke("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const m1=ke("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);const Ud=ke("CircleGauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);const ck=ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Bh=ke("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);const dk=ke("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);const Uh=ke("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const uk=ke("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);const fk=ke("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);const Wh=ke("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);const pk=ke("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Rn=ke("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);const hk=ke("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const mk=ke("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const gk=ke("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const g1=ke("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);const ju=ke("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);const Hh=ke("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const xk=ke("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const sc=ke("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);const x1=ke("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);const v1=ke("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);const y1=ke("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);const vk=ke("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const yk=ke("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);const os=ke("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const bk=ke("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);const wk=ke("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);const kk=ke("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const _k=ke("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const $p=ke("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);const Nk=ke("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Rx=ke("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const jk=ke("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const Ek=ke("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);const Sk=ke("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function b1(a){var t,n,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(t=0;t<s;t++)a[t]&&(n=b1(a[t]))&&(i&&(i+=" "),i+=n)}else for(n in a)a[n]&&(i&&(i+=" "),i+=n);return i}function Ak(){for(var a,t,n=0,i="",s=arguments.length;n<s;n++)(a=arguments[n])&&(t=b1(a))&&(i&&(i+=" "),i+=t);return i}const Vh="-",Ck=a=>{const t=Pk(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=a;return{getClassGroupId:u=>{const f=u.split(Vh);return f[0]===""&&f.length!==1&&f.shift(),w1(f,t)||Tk(u)},getConflictingClassGroupIds:(u,f)=>{const p=n[u]||[];return f&&i[u]?[...p,...i[u]]:p}}},w1=(a,t)=>{if(a.length===0)return t.classGroupId;const n=a[0],i=t.nextPart.get(n),s=i?w1(a.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const c=a.join(Vh);return t.validators.find(({validator:u})=>u(c))?.classGroupId},Lx=/^\[(.+)\]$/,Tk=a=>{if(Lx.test(a)){const t=Lx.exec(a)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Pk=a=>{const{theme:t,prefix:n}=a,i={nextPart:new Map,validators:[]};return Lk(Object.entries(a.classGroups),n).forEach(([c,u])=>{eh(u,i,c,t)}),i},eh=(a,t,n,i)=>{a.forEach(s=>{if(typeof s=="string"){const c=s===""?t:zx(t,s);c.classGroupId=n;return}if(typeof s=="function"){if(Rk(s)){eh(s(i),t,n,i);return}t.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([c,u])=>{eh(u,zx(t,c),n,i)})})},zx=(a,t)=>{let n=a;return t.split(Vh).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},Rk=a=>a.isThemeGetter,Lk=(a,t)=>t?a.map(([n,i])=>{const s=i.map(c=>typeof c=="string"?t+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([u,f])=>[t+u,f])):c);return[n,s]}):a,zk=a=>{if(a<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,i=new Map;const s=(c,u)=>{n.set(c,u),t++,t>a&&(t=0,i=n,n=new Map)};return{get(c){let u=n.get(c);if(u!==void 0)return u;if((u=i.get(c))!==void 0)return s(c,u),u},set(c,u){n.has(c)?n.set(c,u):s(c,u)}}},k1="!",Ok=a=>{const{separator:t,experimentalParseClassName:n}=a,i=t.length===1,s=t[0],c=t.length,u=f=>{const p=[];let m=0,g=0,y;for(let N=0;N<f.length;N++){let C=f[N];if(m===0){if(C===s&&(i||f.slice(N,N+c)===t)){p.push(f.slice(g,N)),g=N+c;continue}if(C==="/"){y=N;continue}}C==="["?m++:C==="]"&&m--}const v=p.length===0?f:f.substring(g),b=v.startsWith(k1),k=b?v.substring(1):v,w=y&&y>g?y-g:void 0;return{modifiers:p,hasImportantModifier:b,baseClassName:k,maybePostfixModifierPosition:w}};return n?f=>n({className:f,parseClassName:u}):u},Ik=a=>{if(a.length<=1)return a;const t=[];let n=[];return a.forEach(i=>{i[0]==="["?(t.push(...n.sort(),i),n=[]):n.push(i)}),t.push(...n.sort()),t},Mk=a=>({cache:zk(a.cacheSize),parseClassName:Ok(a),...Ck(a)}),Fk=/\s+/,Dk=(a,t)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:s}=t,c=[],u=a.trim().split(Fk);let f="";for(let p=u.length-1;p>=0;p-=1){const m=u[p],{modifiers:g,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:b}=n(m);let k=!!b,w=i(k?v.substring(0,b):v);if(!w){if(!k){f=m+(f.length>0?" "+f:f);continue}if(w=i(v),!w){f=m+(f.length>0?" "+f:f);continue}k=!1}const N=Ik(g).join(":"),C=y?N+k1:N,A=C+w;if(c.includes(A))continue;c.push(A);const S=s(w,k);for(let j=0;j<S.length;++j){const P=S[j];c.push(C+P)}f=m+(f.length>0?" "+f:f)}return f};function Bk(){let a=0,t,n,i="";for(;a<arguments.length;)(t=arguments[a++])&&(n=_1(t))&&(i&&(i+=" "),i+=n);return i}const _1=a=>{if(typeof a=="string")return a;let t,n="";for(let i=0;i<a.length;i++)a[i]&&(t=_1(a[i]))&&(n&&(n+=" "),n+=t);return n};function Uk(a,...t){let n,i,s,c=u;function u(p){const m=t.reduce((g,y)=>y(g),a());return n=Mk(m),i=n.cache.get,s=n.cache.set,c=f,f(p)}function f(p){const m=i(p);if(m)return m;const g=Dk(p,n);return s(p,g),g}return function(){return c(Bk.apply(null,arguments))}}const ct=a=>{const t=n=>n[a]||[];return t.isThemeGetter=!0,t},N1=/^\[(?:([a-z-]+):)?(.+)\]$/i,Wk=/^\d+\/\d+$/,Hk=new Set(["px","full","screen"]),Vk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Gk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ei=a=>ao(a)||Hk.has(a)||Wk.test(a),ca=a=>Co(a,"length",r_),ao=a=>!!a&&!Number.isNaN(Number(a)),Cp=a=>Co(a,"number",ao),pl=a=>!!a&&Number.isInteger(Number(a)),Qk=a=>a.endsWith("%")&&ao(a.slice(0,-1)),Le=a=>N1.test(a),da=a=>Vk.test(a),Kk=new Set(["length","size","percentage"]),Jk=a=>Co(a,Kk,j1),Zk=a=>Co(a,"position",j1),$k=new Set(["image","url"]),e_=a=>Co(a,$k,i_),t_=a=>Co(a,"",n_),hl=()=>!0,Co=(a,t,n)=>{const i=N1.exec(a);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):n(i[2]):!1},r_=a=>Yk.test(a)&&!Gk.test(a),j1=()=>!1,n_=a=>qk.test(a),i_=a=>Xk.test(a),a_=()=>{const a=ct("colors"),t=ct("spacing"),n=ct("blur"),i=ct("brightness"),s=ct("borderColor"),c=ct("borderRadius"),u=ct("borderSpacing"),f=ct("borderWidth"),p=ct("contrast"),m=ct("grayscale"),g=ct("hueRotate"),y=ct("invert"),v=ct("gap"),b=ct("gradientColorStops"),k=ct("gradientColorStopPositions"),w=ct("inset"),N=ct("margin"),C=ct("opacity"),A=ct("padding"),S=ct("saturate"),j=ct("scale"),P=ct("sepia"),I=ct("skew"),L=ct("space"),B=ct("translate"),W=()=>["auto","contain","none"],D=()=>["auto","hidden","clip","visible","scroll"],Q=()=>["auto",Le,t],F=()=>[Le,t],J=()=>["",Ei,ca],$=()=>["auto",ao,Le],ae=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ce=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",Le],E=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[ao,Le];return{cacheSize:500,separator:":",theme:{colors:[hl],spacing:[Ei,ca],blur:["none","",da,Le],brightness:T(),borderColor:[a],borderRadius:["none","","full",da,Le],borderSpacing:F(),borderWidth:J(),contrast:T(),grayscale:X(),hueRotate:T(),invert:X(),gap:F(),gradientColorStops:[a],gradientColorStopPositions:[Qk,ca],inset:Q(),margin:Q(),opacity:T(),padding:F(),saturate:T(),scale:T(),sepia:X(),skew:T(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",Le]}],container:["container"],columns:[{columns:[da]}],"break-after":[{"break-after":E()}],"break-before":[{"break-before":E()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ae(),Le]}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",pl,Le]}],basis:[{basis:Q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Le]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",pl,Le]}],"grid-cols":[{"grid-cols":[hl]}],"col-start-end":[{col:["auto",{span:["full",pl,Le]},Le]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[hl]}],"row-start-end":[{row:["auto",{span:[pl,Le]},Le]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Le]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Le]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Le,t]}],"min-w":[{"min-w":[Le,t,"min","max","fit"]}],"max-w":[{"max-w":[Le,t,"none","full","min","max","fit","prose",{screen:[da]},da]}],h:[{h:[Le,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Le,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Le,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Le,t,"auto","min","max","fit"]}],"font-size":[{text:["base",da,ca]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Cp]}],"font-family":[{font:[hl]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Le]}],"line-clamp":[{"line-clamp":["none",ao,Cp]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ei,Le]}],"list-image":[{"list-image":["none",Le]}],"list-style-type":[{list:["none","disc","decimal",Le]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ei,ca]}],"underline-offset":[{"underline-offset":["auto",Ei,Le]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ae(),Zk]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Jk]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},e_]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...ce(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:ce()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ce()]}],"outline-offset":[{"outline-offset":[Ei,Le]}],"outline-w":[{outline:[Ei,ca]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[Ei,ca]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",da,t_]}],"shadow-color":[{shadow:[hl]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",da,Le]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[y]}],saturate:[{saturate:[S]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Le]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",Le]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",Le]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[pl,Le]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[I]}],"skew-y":[{"skew-y":[I]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Le]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Le]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Le]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[Ei,ca,Cp]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},s_=Uk(a_);function ft(...a){return s_(Ak(a))}const Ft=({children:a,to:t,href:n,onClick:i,className:s,type:c="button",disabled:u=!1})=>{const[f,p]=z.useState({x:0,y:0}),m=k=>{const w=k.currentTarget.getBoundingClientRect(),N=((k.clientX-w.left)/w.width-.5)*14,C=((k.clientY-w.top)/w.height-.5)*14;p({x:N,y:C})},g=()=>{p({x:0,y:0})},v=ft("magnetic-button inline-flex items-center justify-center gap-2.5 rounded-[100px] border-0 bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] text-[#1e1e1e] shadow-none transition-all duration-300 ease-out hover:opacity-100",s),b={transform:`translate(${f.x}px, ${f.y}px)`};return t?o.jsx(Sn,{to:t,className:v,onClick:i,onPointerMove:m,onPointerLeave:g,style:b,children:a}):n?o.jsx("a",{href:n,className:v,onClick:i,onPointerMove:m,onPointerLeave:g,style:b,children:a}):o.jsx("button",{type:c,disabled:u,className:ft(v,u&&"cursor-not-allowed opacity-60"),onClick:i,onPointerMove:m,onPointerLeave:g,style:b,children:a})},th="/boltfaredeal/assets/logo-CZH9TYL_.png",Ox=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Portfolio",to:"/portfolio"},{label:"Contact us",to:"/contact"}],o_=({theme:a="dark",onToggleTheme:t})=>{const[n,i]=z.useState(!1),s=a==="dark";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"absolute inset-x-0 top-5 z-30 hidden grid-cols-[1fr_auto_1fr] items-center pl-[6.7%] pr-8 md:grid",children:[o.jsx(Sn,{to:"/","aria-label":"Fairdeal Print Pack home",className:"justify-self-start transition-transform duration-300 hover:scale-[1.03]",children:o.jsx("img",{src:th,alt:"Fairdeal Print Pack",className:"h-[92px] w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)] lg:h-[104px]"})}),o.jsx("header",{className:ft("flex h-[56px] items-center justify-center rounded-[100px] border px-3 backdrop-blur-xl backdrop-saturate-150 lg:px-4",s?"border-white/25 bg-gradient-to-b from-white/[0.18] to-white/[0.06] text-white shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.35)]":"border-white/60 bg-gradient-to-b from-white/70 to-white/45 text-[#1e1e1e] shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]"),children:o.jsx("nav",{className:"flex items-center gap-1 lg:gap-2",children:Ox.map(c=>o.jsx(Ex,{to:c.to,className:({isActive:u})=>ft("nav-item inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-normal leading-normal transition-all duration-300 hover:text-[#92d1bc] lg:px-5 lg:text-base",s?"hover:bg-white/10":"hover:bg-black/5",u&&ft("active text-[#92d1bc]",s?"bg-white/15":"bg-black/5")),children:c.label},c.to))})}),o.jsx(Ft,{to:"/contact",className:"inline-flex h-12 items-center justify-center justify-self-end whitespace-nowrap px-6 text-sm font-normal",children:"Request a Quote"})]}),o.jsxs("header",{className:ft("fixed left-0 right-0 top-0 z-[60] flex items-center justify-between gap-2 px-4 py-3 shadow-sm backdrop-blur-md md:hidden",s?"border-b border-white/10 bg-[#0d1117]/70 text-white":"border-b border-[#1e1e1e]/10 bg-white/75 text-[#1e1e1e]"),children:[o.jsx(Sn,{to:"/",className:"flex min-w-0 shrink-0 items-center gap-2",onClick:()=>i(!1),children:o.jsx("img",{src:th,alt:"Fairdeal Print Pack",className:"h-9 w-auto object-contain"})}),o.jsx("div",{className:"ml-auto flex shrink-0 items-center gap-2",children:o.jsx("button",{type:"button",onClick:()=>i(c=>!c),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,className:ft("relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 hover:scale-105",s?"border border-white/10 bg-white/10":"border border-[#1e1e1e]/10 bg-[#f4f1eb]"),children:o.jsxs("span",{className:"relative inline-flex h-4 w-5 items-center justify-center",children:[o.jsx("span",{className:ft("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"translate-y-0 rotate-45":"-translate-y-1.5"),style:{backgroundColor:s?"#ffffff":"#1e1e1e"}}),o.jsx("span",{className:ft("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"opacity-0":"opacity-100"),style:{backgroundColor:s?"#ffffff":"#1e1e1e"}}),o.jsx("span",{className:ft("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"translate-y-0 -rotate-45":"translate-y-1.5"),style:{backgroundColor:s?"#ffffff":"#1e1e1e"}})]})})})]}),n&&o.jsx("div",{className:ft("fixed inset-0 top-[52px] z-[55] md:hidden",s?"bg-[#0d1117]/80 backdrop-blur-md":"bg-white/80 backdrop-blur-md"),children:o.jsxs("nav",{className:"flex flex-col gap-2 px-6 py-8",children:[Ox.map(c=>o.jsx(Ex,{to:c.to,onClick:()=>i(!1),className:({isActive:u})=>ft("nav-item border-b py-4 text-lg font-normal transition-all duration-300 hover:text-[#92d1bc]",s?"border-white/10 text-white":"border-[#1e1e1e]/10 text-[#1e1e1e]",u&&"active text-[#92d1bc]"),children:c.label},c.to)),o.jsx("div",{className:"mt-6",children:o.jsxs(Ft,{to:"/contact",className:"w-full p-3 text-base font-semibold",onClick:()=>i(!1),children:["Request a Quote",o.jsx(Dh,{className:"h-4 w-4 -rotate-90"})]})})]})})]})},l_=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Portfolio",to:"/portfolio"}],oc={width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},c_=()=>o.jsxs("svg",{...oc,children:[o.jsx("circle",{cx:"12",cy:"12",r:"9"}),o.jsx("path",{d:"M12 7v5l3 2"})]}),d_=()=>o.jsxs("svg",{...oc,children:[o.jsx("path",{d:"M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"}),o.jsx("circle",{cx:"12",cy:"9.5",r:"2.5"})]}),u_=()=>o.jsx("svg",{...oc,children:o.jsx("path",{d:"M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L15 13l4 1.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z"})}),f_=()=>o.jsxs("svg",{...oc,children:[o.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),o.jsx("path",{d:"m3.5 6.5 8.5 6.5 8.5-6.5"})]}),p_=()=>o.jsx("svg",{...oc,width:16,height:16,strokeWidth:1.8,children:o.jsx("path",{d:"M12 19V5M6 11l6-6 6 6"})}),kd=({id:a,children:t,accent:n})=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("span",{className:"h-[2px] w-6 rounded-full",style:{backgroundColor:n}}),o.jsx("h2",{id:a,className:"text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs",style:{color:n},children:t})]}),_d=({icon:a,accent:t,children:n})=>o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("span",{className:"mt-[2px] shrink-0",style:{color:t},children:a}),o.jsx("div",{className:"text-sm leading-[1.7]",children:n})]}),h_=()=>{const[a,t]=z.useState(()=>document.documentElement.getAttribute("data-theme")||"dark");z.useEffect(()=>{const m=()=>{t(document.documentElement.getAttribute("data-theme")||"dark")};m();const g=new MutationObserver(m);return g.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>g.disconnect()},[]);const n=a==="light",i=n?"#0F9D78":"#8FE7C8",s=n?"text-[#1b1b1b]":"text-white",c=n?"text-[#1b1b1b]/70":"text-white/70",u=n?"border-[#1b1b1b]/10":"border-white/10",f=n?"hover:text-[#0F9D78]":"hover:text-[#8FE7C8]",p=()=>window.scrollTo({top:0,behavior:"smooth"});return o.jsx("footer",{className:["relative w-full overflow-hidden px-6 pt-12 pb-8 sm:px-10 lg:px-[80px]",n?"bg-[#FFFFE9] text-[#1b1b1b]":"bg-[#05080a] text-white"].join(" "),children:o.jsxs("div",{className:"relative mx-auto flex w-full max-w-[1500px] flex-col",children:[o.jsxs("div",{className:["flex flex-col gap-8 border-b pb-8 sm:flex-row sm:items-center sm:justify-between",u].join(" "),children:[o.jsx(Sn,{to:"/","aria-label":"Fairdeal Print Pack home",className:"inline-flex w-fit",children:o.jsx("img",{src:th,alt:"Fairdeal Print Pack",className:"h-16 w-auto object-contain sm:h-[72px]"})}),o.jsxs("div",{className:"flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8",children:[o.jsx("p",{className:"text-base font-normal tracking-[-0.3px] sm:text-lg",children:"Ready to get started?"}),o.jsx(Ft,{to:"/contact",className:"h-[52px] px-[35px] text-sm font-medium tracking-[-0.23px] sm:text-base",children:"Get started"})]})]}),o.jsxs("div",{className:"grid gap-12 pt-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-x-16",children:[o.jsxs("nav",{"aria-labelledby":"quick-links-heading",children:[o.jsx(kd,{id:"quick-links-heading",accent:i,children:"Quick Links"}),o.jsx("ul",{className:"mt-6 space-y-4 pl-6 sm:pl-7",children:l_.map(m=>o.jsx("li",{children:o.jsxs(Sn,{to:m.to,className:["group inline-flex items-center gap-2 text-sm transition-all duration-300 sm:text-base",s,f].join(" "),children:[o.jsx("span",{className:"transition-transform duration-300 group-hover:translate-x-1",children:m.label}),o.jsx("span",{"aria-hidden":"true",className:"-translate-x-2 text-base opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",children:"→"})]})},m.label))})]}),o.jsxs("div",{className:"flex flex-col gap-7",children:[o.jsxs("section",{"aria-labelledby":"hours-heading",children:[o.jsx(kd,{id:"hours-heading",accent:i,children:"Working Hours"}),o.jsx("div",{className:["mt-6",s].join(" "),children:o.jsxs(_d,{icon:o.jsx(c_,{}),accent:i,children:["Mon - Sun: 9 am - 5.30 pm",o.jsx("br",{}),"Weekly Off: Sunday"]})})]}),o.jsx("div",{className:["h-px w-full max-w-[440px] border-t",u].join(" ")}),o.jsxs("section",{"aria-labelledby":"address-heading",children:[o.jsx(kd,{id:"address-heading",accent:i,children:"Address"}),o.jsx("div",{className:["mt-6",s].join(" "),children:o.jsx(_d,{icon:o.jsx(d_,{}),accent:i,children:o.jsxs("a",{href:"https://www.google.com/maps/search/?api=1&query=Fairdeal+Print+Pack+Mohanagar+Chinchwad+411033",target:"_blank",rel:"noopener noreferrer",className:["transition-colors",f].join(" "),children:["Fairdeal Print Pack, Mohanagar,",o.jsx("br",{}),"Chinchwad 411033"]})})})]})]}),o.jsxs("section",{"aria-labelledby":"contact-heading",children:[o.jsx(kd,{id:"contact-heading",accent:i,children:"Contact Us"}),o.jsxs("div",{className:["mt-6 space-y-5",s].join(" "),children:[o.jsx(_d,{icon:o.jsx(u_,{}),accent:i,children:o.jsx("a",{href:"tel:+912027474888",className:["transition-colors",f].join(" "),children:"020 2747 4888"})}),o.jsx(_d,{icon:o.jsx(f_,{}),accent:i,children:o.jsx("a",{href:"mailto:info@fairdealprintpack.com",className:["break-all transition-colors",f].join(" "),children:"info@fairdealprintpack.com"})})]})]})]}),o.jsxs("div",{className:["flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between",u].join(" "),children:[o.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6",children:[o.jsxs("nav",{className:"flex flex-wrap items-center gap-x-5 gap-y-2","aria-label":"Legal information",children:[o.jsx(Sn,{to:"/terms-and-conditions",className:["text-sm transition-colors sm:text-[15px]",c,f].join(" "),children:"Terms & Conditions"}),o.jsx("span",{"aria-hidden":"true",className:c,children:"|"}),o.jsx(Sn,{to:"/privacy-policy",className:["text-sm transition-colors sm:text-[15px]",c,f].join(" "),children:"Privacy Policy"})]}),o.jsxs("p",{className:["text-xs sm:text-[13px]",c].join(" "),children:["© ",new Date().getFullYear()," Fairdeal Print Pack. All rights reserved."]})]}),o.jsx("button",{type:"button",onClick:p,"aria-label":"Back to top",className:["group inline-flex h-10 w-10 items-center justify-center self-start rounded-full border transition-all duration-300 hover:-translate-y-1 sm:self-auto",u,s,f,n?"hover:border-[#0F9D78]":"hover:border-[#8FE7C8]"].join(" "),children:o.jsx(p_,{})})]})]})})},m_=()=>{const a=z.useRef(null),t=z.useRef(null),n=z.useRef(null);z.useRef(null);const i=z.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),s=z.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),c=z.useRef(null);return z.useEffect(()=>{const u=a.current,f=t.current,p=n.current;if(!u||!f||!p)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)");if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches||m.matches){u.style.display="none";return}const y=w=>{s.current.x=w.clientX,s.current.y=w.clientY},v=(w,N)=>{const C=document.createElement("span");C.className="cursor-particle";const A=3+Math.random()*8;C.style.width=`${A}px`,C.style.height=`${A}px`,C.style.left=`${w}px`,C.style.top=`${N}px`,C.style.setProperty("--particle-x",`${(Math.random()-.5)*40}px`),C.style.setProperty("--particle-y",`${(Math.random()-.5)*40}px`),u.appendChild(C),window.setTimeout(()=>C.remove(),520)},b=w=>{const N=document.createElement("span");N.className="cursor-ripple",N.style.left=`${w.clientX}px`,N.style.top=`${w.clientY}px`,N.style.setProperty("--ripple-x",`${w.clientX}px`),N.style.setProperty("--ripple-y",`${w.clientY}px`),u.appendChild(N),window.setTimeout(()=>N.remove(),500);for(let C=0;C<8;C+=1)v(w.clientX,w.clientY)},k=()=>{const w=s.current.x-i.current.x,N=s.current.y-i.current.y;i.current.x+=w*.12,i.current.y+=N*.12,f.style.setProperty("--cursor-x",`${i.current.x}px`),f.style.setProperty("--cursor-y",`${i.current.y}px`),p.style.setProperty("--dot-x",`${i.current.x}px`),p.style.setProperty("--dot-y",`${i.current.y}px`),Math.abs(w)+Math.abs(N)>5&&v(i.current.x,i.current.y),c.current=window.requestAnimationFrame(k)};return f.style.setProperty("--cursor-x",`${i.current.x}px`),f.style.setProperty("--cursor-y",`${i.current.y}px`),p.style.setProperty("--dot-x",`${i.current.x}px`),p.style.setProperty("--dot-y",`${i.current.y}px`),window.addEventListener("pointermove",y,{passive:!0}),window.addEventListener("pointerdown",b),c.current=window.requestAnimationFrame(k),()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerdown",b),c.current&&window.cancelAnimationFrame(c.current)}},[]),o.jsxs("div",{ref:a,className:"cursor-overlay","aria-hidden":"true",children:[o.jsx("div",{ref:t,className:"cursor-spotlight"}),o.jsx("div",{ref:n,className:"cursor-dot"})]})},g_=()=>{const{pathname:a}=Ao(),t=z.useRef(null),[n,i]=z.useState(()=>window.localStorage.getItem("faredeal-theme")||"dark");z.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),window.localStorage.setItem("faredeal-theme",n)},[n]),z.useEffect(()=>{t.current?.scrollTo(0,{duration:.8})},[a]),z.useEffect(()=>{const c=new Q5({autoRaf:!0,lerp:.08,smoothWheel:!0,wheelMultiplier:.9});return t.current=c,()=>{c.destroy(),t.current=null}},[]),z.useEffect(()=>{document.querySelectorAll("p, li, h1, h2, h3, h4, label, dt, dd, .stat-item, .service-card-copy, .contact-card").forEach((p,m)=>{p.dataset.reveal||(p.dataset.reveal=m%2===0?"left":"right")});const u=document.querySelectorAll("[data-reveal], .portfolio-card, .stat-item, .magnetic-button, form, .contact-card");if(!u.length)return;const f=new IntersectionObserver(p=>{p.forEach(m=>{const g=m.target,y=g.dataset.reveal||"up";g.style.transitionDelay=`${Math.min(Number(g.dataset.delay||0),220)}ms`,m.isIntersecting?(g.classList.add("is-visible"),g.dataset.reveal=y):g.classList.remove("is-visible")})},{threshold:.12,rootMargin:"0px 0px -5% 0px"});return u.forEach((p,m)=>{const g=p.dataset.reveal||"up";p.dataset.reveal=g,p.dataset.delay=String(Math.min(m*45,220)),p.classList.remove("is-visible"),f.observe(p)}),()=>f.disconnect()},[a]),z.useEffect(()=>{const c=()=>{const u=window.scrollY*.18;document.documentElement.style.setProperty("--scroll-shift",`${u}px`)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c)}},[]);const s=a==="/";return o.jsxs("main",{"data-theme":n,className:"relative isolate w-full overflow-x-clip bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx(m_,{}),o.jsx(o_,{theme:n,onToggleTheme:()=>i(c=>c==="dark"?"light":"dark")}),s?o.jsx(Nx,{}):o.jsx("div",{id:"main-content",className:"pt-[52px] md:pt-0",children:o.jsx(Nx,{})}),o.jsx(h_,{})]})},x_="/boltfaredeal/assets/herohome-DT9eiX7y.png",v_="/boltfaredeal/assets/herolight-CuHdeJoD.png",E1="/boltfaredeal/assets/Owner%20image-Ce46Gc2F.png",y_="/boltfaredeal/assets/WhyChooseUs-CKRRPvHQ.png",b_="/boltfaredeal/assets/5-ymbanfZ0.png",Ix="/boltfaredeal/assets/2-DiAjn5_X.png",Mx="/boltfaredeal/assets/3-CGy4r2Ne.png",w_="/boltfaredeal/assets/4-D9jko_-K.png",k_="/boltfaredeal/assets/Bopp-pi9j3R0x.png",__="/boltfaredeal/assets/Corrugated-C3HRMm_i.png",N_="/boltfaredeal/assets/Flexo-C8kTiPdQ.png",j_="/boltfaredeal/assets/Labels-W3ZJ1Vob.jpg",E_="/boltfaredeal/assets/OffSet-DdFVBfKU.png",S_="/boltfaredeal/assets/copier-BzKvISl0.png",$t={heroBgLarge:x_,heroBgLight:v_,servicePrint:E_,servicePaper:S_,servicePackaging:__,serviceColor:N_,serviceBopp:k_,serviceLabels:j_,portfolio1:b_,portfolio2:w_,portfolio3:Mx,portfolio4:Ix,portfolio5:Mx,portfolio6:Ix,aboutImg:E1,whyChooseUsImg:y_},so=[{title:"Offset Printing",description:"High-quality offset printing solutions for brochures, books, labels, cartons, and business stationery.",features:["Brochures & Catalogues","Books & Company Profiles","Labels & Cartons","Business Stationery"],image:$t.servicePrint,radius:"rounded-[20px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Flexo Printing",description:"Flexible printing solutions for labels, tags, packaging, and shrink sleeves with consistent quality.",features:["Multi-Colour Label Printing","Rotary Die Cutting","Tags & Shrink Sleeves","Consistent Long Runs"],image:$t.serviceColor,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Copier Paper",description:"Importer, distributor and dealer of copier, coated and sheet form papers.",features:["Copier Paper","Coated Paper Grades","Sheet-Form Supply","Bulk Distribution"],image:$t.servicePaper,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Corrugation",description:"High-quality corrugated packaging solutions from standard transit boxes to bespoke packaging.",features:["E, F & C Flute Options","Custom Box Formats","Transit Protection","Retail-Ready Packaging"],image:$t.servicePackaging,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(139deg,rgba(134,217,240,0.3)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Others",description:"BOPP tapes, screen printing, labels, stickers, and specialized printing solutions.",features:["BOPP Tapes","Labels & Stickers","Screen Printing","Specialist Finishing"],image:$t.serviceBopp,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"}],A_=[{title:"AVY DIARY Ghee Corrugated Carton",image:$t.portfolio1},{title:"Premium Gift Box Collection",image:$t.portfolio2},{title:"Minimalist Packaging Design",image:$t.portfolio3},{title:"Luxury Brand Packaging",image:$t.portfolio6},{title:"Holiday Gift Wrapping Series",image:$t.portfolio5},{title:"Floral Gift Box Set",image:$t.portfolio4}],C_=[{value:"1600+",label:"Satisfied Clients"},{value:"15+",label:"Awards Winning"},{value:"70+",label:"Team Members"},{value:"900+",label:"Successful Projects"}],T_=`
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

.hero-section {
  font-family: "Lato", system-ui, sans-serif;
  height: 100vh;
  height: 100svh;
  min-height: 600px;
}

/* ---------- Background ---------- */
.hero-media {
  animation: hero-zoom 14s cubic-bezier(0.22, 1, 0.36, 1) both;
  transform-origin: 70% 50%;
}
.hero-overlay {
  background:
    linear-gradient(90deg, rgba(4, 9, 13, 0.88) 0%, rgba(4, 9, 13, 0.6) 38%, rgba(4, 9, 13, 0.1) 75%),
    linear-gradient(180deg, rgba(4, 9, 13, 0.55) 0%, rgba(4, 9, 13, 0) 30%, rgba(4, 9, 13, 0.45) 100%);
}

/* ---------- Eyebrow ---------- */
.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(251, 251, 251, 0.78);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6em;
  animation: eyebrow-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}
.hero-eyebrow .dot {
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: #ffe11a;
}

/* ---------- Headline ---------- */
.hero-title {
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.01em;
  font-size: clamp(2rem, 4.4vw, 4.25rem);
}
/* each line sits in a clipping mask; the inner span slides up into view */
.hero-line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.12em; /* keeps descenders (g, p) from being clipped */
  margin-bottom: -0.12em;
}
.hero-line > span {
  display: inline-block;
  animation: line-up 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.hero-line:nth-child(1) > span { animation-delay: 0.25s; }
.hero-line:nth-child(2) > span { animation-delay: 0.45s; }
.hero-line:nth-child(3) > span { animation-delay: 0.65s; }

/* keep "Our Printing & Packaging" on one line on tablets and desktops */
@media (min-width: 768px) {
  .hero-line { white-space: nowrap; }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .hero-section .hero-content {
    justify-content: flex-start;
    padding-top: 164px;
    padding-bottom: 2rem;
  }

  .hero-section .hero-title {
    font-size: clamp(1.875rem, 4vw, 3rem);
  }
}

.grad-a,
.grad-b {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  /* layer 1: moving white sheen, layer 2: the base gradient */
  background-repeat: no-repeat;
  background-size: 40% 100%, 100% 100%;
  background-position: -120% 0, 0 0;
  animation: line-up 1s cubic-bezier(0.22, 1, 0.36, 1) both,
             sheen 3.2s ease-in-out 1.8s infinite;
}
.hero-line:nth-child(2) > .grad-a {
  background-image:
    linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%),
    linear-gradient(90deg, #1fc8ff 0%, #4fe3c1 35%, #8fe86a 70%, #f7e83a 100%);
  animation-delay: 0.45s, 1.8s;
}
.hero-line:nth-child(3) > .grad-b {
  background-image:
    linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%),
    linear-gradient(90deg, #4fe3c1 0%, #a4ec62 50%, #f7e83a 100%);
  animation-delay: 0.65s, 2.1s;
}

/* ---------- Paragraph & CTAs ---------- */
.hero-copy {
  font-weight: 400;
  color: rgba(251, 251, 251, 0.86);
  animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
}
.hero-actions {
  animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 1.6rem;
  border-radius: 9999px;
  background: #ffe11a;
  color: #14181c;
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn-primary svg { transition: transform 0.25s ease; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255, 225, 26, 0.3); }
.btn-primary:hover svg { transform: translateX(4px); }

.btn-story {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #fbfbfb;
  font-weight: 700;
  font-size: 0.95rem;
}
.play-dot {
  position: relative;
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 9999px;
  background: #ffe11a;
  color: #14181c;
}
.play-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid #ffe11a;
  animation: pulse-ring 2.2s ease-out 2s infinite;
}

.hero-section a:focus-visible,
.hero-section button:focus-visible {
  outline: 2px solid #ffe11a;
  outline-offset: 4px;
}

/* ---------- Keyframes ---------- */
@keyframes hero-zoom { from { transform: scale(1.12); } to { transform: scale(1); } }
@keyframes eyebrow-in {
  from { opacity: 0; letter-spacing: 0.6em; }
  to   { opacity: 1; letter-spacing: 0.3em; }
}
@keyframes line-up {
  from { transform: translateY(110%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
@keyframes sheen {
  0%   { background-position: -120% 0, 0 0; }
  60%, 100% { background-position: 220% 0, 0 0; }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes pulse-ring {
  0%   { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.9); opacity: 0; }
}

/* final eyebrow tracking (after animation ends) */
.hero-eyebrow { letter-spacing: 0.3em; }

@media (prefers-reduced-motion: reduce) {
  .hero-section *,
  .hero-section *::after {
    animation: none !important;
    transition: none !important;
  }
}
`,P_=({heroImage:a,onWatchStory:t})=>o.jsxs("section",{className:"hero-section relative w-full overflow-hidden",children:[o.jsx("style",{children:T_}),o.jsx("img",{className:"hero-media absolute inset-0 h-full w-full object-cover",alt:"Printing press producing packaging",src:a}),o.jsx("div",{"aria-hidden":"true",className:"hero-overlay pointer-events-none absolute inset-0"}),o.jsx("div",{className:"hero-content relative z-10 flex h-full flex-col justify-center px-6 pb-12 pt-[110px] md:px-[6.7%] md:pt-[90px]",children:o.jsxs("div",{className:"flex max-w-[960px] flex-col gap-5",children:[o.jsxs("p",{className:"hero-eyebrow",children:[o.jsx("span",{children:"Printing"}),o.jsx("span",{className:"dot","aria-hidden":"true"}),o.jsx("span",{children:"Packaging"}),o.jsx("span",{className:"dot","aria-hidden":"true"}),o.jsx("span",{children:"Excellence"})]}),o.jsxs("h1",{className:"hero-title text-[#fbfbfb]",children:[o.jsx("span",{className:"hero-line",children:o.jsx("span",{children:"Your Vision."})}),o.jsx("span",{className:"hero-line",children:o.jsx("span",{className:"grad-a",children:"Our Printing & Packaging"})}),o.jsx("span",{className:"hero-line",children:o.jsx("span",{className:"grad-b",children:"Expertise."})})]}),o.jsx("p",{className:"hero-copy max-w-[520px] text-base leading-[1.6] sm:text-lg sm:leading-[1.65]",children:"Since 1990, we have been delivering high-quality printing and packaging solutions with a commitment to quality, innovation and customer satisfaction."}),o.jsx("div",{className:"hero-actions mt-2 flex flex-wrap items-center gap-x-8 gap-y-4",children:o.jsxs("a",{href:"#services-section",className:"btn-primary",children:["Explore Our Services",o.jsx(Xn,{className:"h-4 w-4"})]})})]})})]}),R_="Fairdeal Print Pack India Pvt. Ltd. has been established as full - fledge document solution in India & Pune city. Our traditional business model is based on the accomplishment of expertise into print media. We began our journey in 1990 & today we have emerged with a reputation for its quality product & prompt service.",L_=()=>{const[a,t]=z.useState(0),n=z.useRef(null);return z.useEffect(()=>{const i=n.current;if(!i)return;let s=0,c=!1;const u=()=>{if(c)return;if(c=!0,window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(36);return}const p=performance.now(),m=1400,g=y=>{const v=Math.min((y-p)/m,1),b=1-(1-v)**3;t(Math.round(36*b)),v<1&&(s=window.requestAnimationFrame(g))};s=window.requestAnimationFrame(g)};if(typeof IntersectionObserver>"u")return u(),()=>window.cancelAnimationFrame(s);const f=new IntersectionObserver(([p])=>{p?.isIntersecting&&(f.disconnect(),u())},{threshold:.5});return f.observe(i),()=>{f.disconnect(),window.cancelAnimationFrame(s)}},[]),o.jsx("span",{ref:n,children:a})},z_=[{id:"vision",title:"Our Vision",icon:Uh,content:"Customer satisfaction and employee empowerment in tandem with innovation and excellence, to work together with our customers to help them achieve their goals. Our success lies in your success. Honesty, integrity, dedication & commitment will always be our priority and trademark. Dignity & respect to all our guiding principles in every deal with customers & suppliers."},{id:"mission",title:"Our Mission",icon:Nk,content:"To provide exceptional printing service by pursuing business through innovation & creativity that exceeds the expectation of our esteemed customers."},{id:"values",title:"Core Values",icon:Wh,content:"We believe in treating our customer with respect & faith, we integrate honesty, integrity & business ethics into all aspect of our business functioning."},{id:"goal",title:"The Goal",icon:fk,content:"Delighted customers are key to our success & we strive to achieve this key every second. Printing is our passion & hence no matter what your print need is, Fairdeal Print Pack India Pvt. Ltd. has most effective print solutions."}],O_=()=>{const[a,t]=z.useState("vision");return o.jsx("div",{className:"flex flex-col gap-3",children:z_.map(({id:n,title:i,icon:s,content:c})=>{const u=a===n;return o.jsxs("div",{className:"relative ml-9",children:[o.jsx("div",{"aria-hidden":"true",className:`
                absolute
                -left-[26px]
                top-1/2
                z-10
                flex
                h-[52px]
                w-[52px]
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                text-[#f7d51d]
                transition-all
                duration-300
                ${u?"border-[#f7d51d] bg-[#0a1015] shadow-[0_0_22px_rgba(247,213,29,0.45)]":"border-[#f7d51d]/30 bg-[#0d151b]"}
              `,children:o.jsx(s,{className:"h-5 w-5"})}),o.jsxs("div",{className:`
                relative
                overflow-hidden
                rounded-[26px]
                border
                transition-all
                duration-300
                ${u?"border-[#f7d51d] bg-[#f7d51d] shadow-[0_12px_40px_rgba(247,213,29,0.22)]":"border-white/10 bg-[#0d151b] hover:border-[#f7d51d]/40"}
              `,children:[o.jsx("span",{"aria-hidden":"true",className:`
                  absolute
                  bottom-6
                  left-[40px]
                  top-6
                  w-px
                  bg-[#0a1015]/25
                  transition-opacity
                  duration-300
                  ${u?"opacity-100":"opacity-0"}
                `}),o.jsxs("button",{type:"button",onClick:()=>t(u?null:n),"aria-expanded":u,"aria-controls":`about-panel-${n}`,className:`
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  pl-[60px]
                  pr-5
                  text-left
                  ${u?"pb-1 pt-4":"py-[15px]"}
                `,children:[o.jsx("span",{className:`
                    text-[19px]
                    font-bold
                    leading-tight
                    transition-colors
                    duration-300
                    ${u?"text-[#0a1015]":"text-white"}
                  `,children:i}),o.jsx(Dh,{className:`
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    duration-300
                    ${u?"rotate-180 text-[#0a1015]":"text-white"}
                  `})]}),o.jsx("div",{id:`about-panel-${n}`,className:`
                  grid
                  transition-[grid-template-rows]
                  duration-300
                  ease-out
                  ${u?"grid-rows-[1fr]":"grid-rows-[0fr]"}
                `,children:o.jsx("div",{className:"overflow-hidden",children:o.jsx("p",{className:"pb-5 pl-[60px] pr-5 text-[13.5px] leading-[1.6] text-[#0a1015]/90",children:c})})})]})]},n)})})},I_=({isLightTheme:a})=>o.jsxs("section",{className:"relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#f7d51d]/10 blur-[110px]"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#f7d51d]/10 blur-[110px]"}),o.jsx("div",{className:"relative mx-auto max-w-[1240px]",children:o.jsxs("div",{className:"grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-14",children:[o.jsx("div",{"data-reveal":"left",className:"relative mx-auto w-full max-w-[430px] pb-10 lg:mx-0",children:o.jsxs("div",{className:"relative h-[460px] w-full sm:h-[540px] lg:h-[560px]",children:[o.jsx("div",{"aria-hidden":"true",className:`
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[340px]
                  w-[340px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  blur-[90px]
                  ${a?"bg-[#9bcfc0]/25":"bg-[#8fcbb7]/15"}
                `}),o.jsx("span",{"aria-hidden":"true",className:"absolute -left-[22px] top-[40px] z-20 hidden h-3 w-3 rounded-full bg-[#f7d51d] sm:block"}),o.jsx("span",{"aria-hidden":"true",className:"absolute -left-[17px] top-[52px] z-20 h-[360px] w-px bg-gradient-to-b from-[#f7d51d] to-transparent"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-4 hidden rounded-bl-[110px] rounded-br-[40px] rounded-tl-[44px] rounded-tr-[120px] border border-[#f7d51d]/50 sm:block",style:{WebkitMaskImage:"linear-gradient(210deg, transparent 25%, black 80%)",maskImage:"linear-gradient(210deg, transparent 25%, black 80%)"}}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-4 rounded-bl-[110px] rounded-br-[40px] rounded-tl-[44px] rounded-tr-[120px] border border-[#f7d51d]/50 sm:hidden"}),o.jsxs("div",{className:`
                  relative
                  z-10
                  h-full
                  w-full
                  overflow-hidden
                  rounded-bl-[90px]
                  rounded-br-[28px]
                  rounded-tl-[28px]
                  rounded-tr-[110px]
                  ${a?"shadow-[0_18px_45px_rgba(50,70,65,0.18)]":"shadow-[0_18px_45px_rgba(0,0,0,0.45)]"}
                `,children:[o.jsx("img",{src:$t.aboutImg,alt:"Rajesh Yewale - Founder of Fairdeal Print Pack",className:"h-full w-full max-w-none object-cover object-top",loading:"lazy"}),o.jsx("div",{"aria-hidden":"true",className:`
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    z-[15]
                    h-[20%]
                    ${a?"bg-gradient-to-t from-[#f3f1eb]/80 via-[#f3f1eb]/30 to-transparent":"bg-gradient-to-t from-[#02070a]/80 via-[#02070a]/30 to-transparent"}
                  `})]}),o.jsxs("div",{className:`\r
                  absolute\r
                  -bottom-8\r
                  left-[6%]\r
                  right-[6%]\r
                  z-30\r
                  rounded-[28px]\r
                  border\r
                  border-white/10\r
                  bg-[#0d151b]/95\r
                  px-7\r
                  py-4\r
                  backdrop-blur-sm\r
                `,children:[o.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.18em] text-[#f7d51d]",children:"Rajesh Yewale"}),o.jsx("p",{className:"mt-1 text-sm font-light text-white/70",children:"Founder & Managing Director"})]})]})}),o.jsxs("div",{"data-reveal":"right",className:"relative z-20 flex w-full flex-col gap-8",children:[o.jsxs("header",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"About Us"})]}),o.jsxs("h2",{className:"font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]",style:{fontFamily:"'Lato', sans-serif"},children:[o.jsx("span",{className:"block text-white",children:"Printing Expertise."}),o.jsx("span",{className:"block text-[#92e3c3]",children:"Packaging Excellence"}),o.jsx("span",{className:"block text-[#9aa3b2]",children:"Since 1990"})]})]}),o.jsx("div",{className:"h-px w-full bg-white/10"}),o.jsxs("div",{className:"grid gap-10 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10",children:[o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-start leading-none",children:[o.jsx("span",{className:"text-[72px] font-extrabold text-white sm:text-[80px]",children:o.jsx(L_,{})}),o.jsx("span",{className:"ml-1 mt-3 text-[40px] font-extrabold text-[#f7d51d]",children:"+"})]}),o.jsx("p",{className:"mt-3 max-w-[110px] text-xs font-semibold uppercase leading-snug tracking-[0.22em] text-white/60",children:"Years of Trust"})]}),o.jsx("p",{className:"text-[15px] font-light leading-[1.75] text-white/85",children:R_})]}),o.jsx(O_,{})]})]})]})})]}),qe=({children:a,className:t})=>o.jsx("p",{"data-reveal":"left",className:ft("text-lg font-normal leading-[27.2px] tracking-[0.54px] text-[#e1de00]",t),children:a}),S1=({primary:a,secondary:t,className:n,primaryClassName:i,secondaryClassName:s})=>o.jsxs("h2",{className:ft("font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[58px]",n),style:{fontFamily:"'Lato', sans-serif"},children:[a&&o.jsx("span",{"data-reveal":"left",className:ft("block",i),children:a}),t&&o.jsx("span",{"data-reveal":"right",className:ft("block text-[#92d1bc]",s),children:t})]}),Fx=(a,t,n)=>Math.min(n,Math.max(t,a)),Tp=a=>String(a).padStart(2,"0"),M_=({activeServiceIndex:a,setActiveServiceIndex:t})=>{const[n,i]=z.useState("next"),s=so.length,c=Fx(a??0,0,s-1),u=f=>{const p=Fx(f,0,s-1);p!==c&&(i(p>c?"next":"previous"),t?.(p))};return o.jsxs("section",{id:"services-section",className:"relative z-10 w-full overflow-x-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8",children:[o.jsx("style",{children:`
        @keyframes service-slide-in-next {
          from { opacity: 0; transform: translateX(5%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes service-slide-in-previous {
          from { opacity: 0; transform: translateX(-5%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .service-slide-in-next {
          animation: service-slide-in-next 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .service-slide-in-previous {
          animation: service-slide-in-previous 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .service-slide-in-next,
          .service-slide-in-previous {
            animation: none;
          }
        }
      `}),o.jsxs("div",{className:"mx-auto flex w-full max-w-[1180px] flex-col",children:[o.jsxs("header",{className:"mb-4 flex flex-col gap-3 md:mb-5 md:gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx(qe,{className:"text-sm font-bold uppercase leading-none tracking-[0.25em] text-[#f7d51d]",children:"OUR SERVICES"})]}),o.jsx(S1,{primary:"We bring",secondary:"ideas to life."})]}),o.jsxs("p",{className:"max-w-full text-sm font-normal leading-relaxed tracking-[0] text-[#f0efeb] sm:text-base lg:max-w-[600px] lg:text-lg",children:[o.jsxs("span",{className:"font-light",children:["From concept to final production, we handle every detail. From high-quality printing to packaging and finishing, we bring your ideas to life with"," "]}),o.jsx("span",{className:"font-medium text-[#e1de00]",children:"precision"}),o.jsx("span",{className:"font-light",children:", creativity, and consistency."})]})]}),o.jsx("div",{className:"mb-4 h-px w-full bg-white/20 md:mb-5"}),o.jsx("div",{className:"relative overflow-hidden",children:so.map((f,p)=>p===c&&o.jsxs("article",{className:`service-slide-in-${n} flex min-h-[500px] flex-col overflow-hidden shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.45)] md:h-[440px] md:min-h-0 md:flex-row`,children:[o.jsx("div",{className:"relative min-h-[220px] flex-1 md:min-h-0 md:flex-[1.9]",children:o.jsx("img",{src:f.image,alt:f.title,className:"absolute inset-0 h-full w-full object-cover",draggable:!1})}),o.jsxs("div",{className:"relative flex min-h-0 flex-1 flex-col justify-between bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] p-4 text-black sm:p-5 md:p-6 lg:p-8",children:[o.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2 md:gap-3",children:[o.jsxs("span",{className:"text-[11px] font-semibold uppercase tracking-[0.2em]",children:["SERVICE ",Tp(p+1)]}),o.jsx("h3",{className:"text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",children:f.title}),o.jsx("p",{className:"max-w-[340px] text-xs leading-relaxed sm:text-sm md:text-base",children:f.description})]}),o.jsxs("div",{className:"mt-2 flex items-end justify-between gap-3 sm:mt-4",children:[o.jsxs(Sn,{to:"/contact",className:"inline-flex items-center gap-2 bg-black px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-85 sm:px-4 sm:py-2.5 sm:text-sm",children:["Start a project",o.jsx(Dd,{className:"h-4 w-4"})]}),o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{children:Tp(c+1)}),o.jsx("div",{className:"relative h-px w-16 bg-black/30 md:w-24",children:o.jsx("div",{className:"absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-black",style:{width:`${(c+1)/s*100}%`}})}),o.jsx("span",{children:Tp(s)})]})]})]})]},f.title))}),o.jsx("div",{className:"mt-5 flex items-center justify-end",children:o.jsxs("div",{className:"flex items-center gap-2 rounded-full bg-[#0b0d12]/80 p-1.5 backdrop-blur-sm","aria-label":"Service navigation",children:[o.jsx("button",{type:"button",onClick:()=>u(c-1),disabled:c===0,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#10141d] text-white transition hover:border-[#f7d51d] hover:bg-[#f7d51d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d51d] disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous service",children:o.jsx(h1,{className:"h-4 w-4"})}),o.jsx("button",{type:"button",onClick:()=>u(c+1),disabled:c===s-1,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#10141d] text-white transition hover:border-[#f7d51d] hover:bg-[#f7d51d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7d51d] disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next service",children:o.jsx(Xn,{className:"h-4 w-4"})})]})})]})]})},F_=({value:a,label:t})=>{const[n,i]=z.useState(0),[s,c]=z.useState(!1),u=z.useRef(null),f=String(a).trim(),p=Number.parseInt(f.replace(/[^0-9]/g,""),10)||0;return z.useEffect(()=>{const m=u.current;if(!m)return;const g=new IntersectionObserver(y=>{const[v]=y;if(v)if(v.isIntersecting){c(!0),i(0);const b=performance.now(),k=1200,w=N=>{const C=Math.min((N-b)/k,1),A=1-(1-C)**3;i(Math.round(p*A)),C<1?requestAnimationFrame(w):i(p)};requestAnimationFrame(w)}else c(!1),i(0)},{threshold:.35});return g.observe(m),()=>g.disconnect()},[p]),o.jsxs("div",{ref:u,className:"flex min-w-0 flex-col gap-2.5",children:[o.jsx("dt",{className:"order-2 text-base font-medium leading-7 tracking-[0] text-[#aeb6a7] sm:text-xl",children:t}),o.jsxs("dd",{className:"m-0 text-[36px] font-normal leading-[50px] tracking-[0] text-white sm:text-[50px] sm:leading-[60px]",children:[o.jsx("span",{children:n}),o.jsx("span",{className:"text-[#e1de00]",children:"+"})]})]})},D_=[{title:"State of the Art Printing Machines",description:"Precision, speed and unmatched quality.",icon:yk,accent:"#92d1bc"},{title:"One Stop Source",description:"Everything you need, under one roof.",icon:hk,accent:"#e1de00"},{title:"Dedicated Expertise",description:"Experienced professionals across print and packaging.",icon:Ek,accent:"#49c4bc"},{title:"Quality-Driven Production",description:"Consistent output with precision at every stage.",icon:Bd,accent:"#e1de00"}],B_=[{src:$t.whyChooseUsImg,alt:"Printing press operating in our production facility"},{src:$t.servicePrint,alt:"Printed materials from our print services"},{src:$t.servicePackaging,alt:"Corrugated packaging produced for clients"},{src:$t.serviceLabels,alt:"Labels produced for customer products"}],U_=()=>o.jsxs("section",{className:"relative z-10 w-full overflow-hidden bg-[#05080a] py-14 sm:py-20 xl:py-24",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0",style:{backgroundImage:"radial-gradient(ellipse 48% 62% at 100% 0%, rgba(225, 222, 0, 0.19) 0%, rgba(225, 222, 0, 0.09) 42%, transparent 78%), radial-gradient(ellipse 58% 62% at 0% 100%, rgba(73, 196, 188, 0.21) 0%, rgba(73, 196, 188, 0.09) 48%, transparent 82%), radial-gradient(ellipse 34% 48% at 8% 100%, rgba(146, 209, 188, 0.11) 0%, transparent 76%)"}}),o.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 overflow-hidden",children:[o.jsx("span",{className:"absolute -top-24 left-[58%] h-56 w-12 rotate-[38deg] bg-[#e1de00]/20"}),o.jsx("span",{className:"absolute -top-24 left-[62%] h-56 w-12 rotate-[38deg] bg-[#49c4bc]/25"}),o.jsx("span",{className:"absolute -bottom-24 -left-5 h-48 w-12 rotate-[38deg] bg-[#49c4bc]/25"}),o.jsx("span",{className:"absolute -bottom-24 left-8 h-48 w-12 rotate-[38deg] bg-[#e1de00]/20"})]}),o.jsxs("div",{className:"relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid items-center gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",children:[o.jsxs("div",{className:"flex flex-col gap-7 sm:gap-8",children:[o.jsxs("header",{"data-reveal":"left",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 shrink-0 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"Why"})]}),o.jsxs("h2",{className:"m-0 font-[Lato] text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl xl:text-[68px]",children:["Choose ",o.jsx("span",{className:"text-[#92d1bc]",children:"Us"})]}),o.jsx("p",{className:"mt-4 max-w-[540px] text-sm leading-[1.65] text-white/80 sm:text-base",children:"We cover the entire gamut of print needs, from company profiles, brochures and catalogues to folding cartons, labels and luxury rigid boxes."})]}),o.jsx("ul",{className:"m-0 grid list-none grid-cols-1 gap-x-5 gap-y-5 p-0 sm:grid-cols-2 sm:gap-y-7",children:D_.map(({title:a,description:t,icon:n,accent:i})=>o.jsxs("li",{className:"flex min-w-0 items-start gap-3","data-reveal":"up",children:[o.jsx("span",{className:"grid size-11 shrink-0 place-items-center rounded-full border-2",style:{borderColor:i,color:i},children:o.jsx(n,{"aria-hidden":"true",size:22,strokeWidth:1.8})}),o.jsxs("span",{className:"min-w-0 pt-1",children:[o.jsx("span",{className:"block text-sm font-semibold leading-[1.3] text-white",children:a}),o.jsx("span",{className:"mt-1 block text-xs leading-[1.5] text-white/65",children:t})]})]},a))})]}),o.jsx("div",{className:"grid h-[350px] grid-cols-5 grid-rows-2 gap-3 sm:h-[460px] sm:gap-5","data-reveal":"right",children:B_.map(({src:a,alt:t},n)=>{const i=["col-start-2 col-span-2 row-start-1 self-end h-[88%]","col-start-4 col-span-2 row-start-1","col-start-1 col-span-3 row-start-2 self-start h-[88%]","col-start-4 col-span-2 row-start-2 self-end"][n];return o.jsx("div",{className:`min-h-0 overflow-hidden rounded-xl ${i}`,children:o.jsx("img",{className:"size-full object-cover",src:a,alt:t,loading:"lazy"})},a)})})]}),o.jsx("dl",{className:"mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:mt-14 sm:grid-cols-4 sm:gap-x-8",children:C_.map(a=>o.jsx(F_,{value:a.value,label:a.label},a.label))})]})]}),W_="/boltfaredeal/assets/client1-xya4iu4V.png",H_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAqCAYAAABPwJJfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAn3SURBVHhe7Zt7UFTXHcc/WGc0EzuwC5nZrbY+FojT1GhUogmmoPgi1by0bgcdtRGDa0I6GTNsFZ9NJMK0NiZTQEGCUajEkqREvYJIJPXFw2ZMJsYAGzAijzTsxhUbSNOkf7h7yx537+6iCzjez8z5g+85h3vO3u+595zzOzfou++//wEVlQAxSBRUVG4lqsFUAopqMJWAohpMJaCoBlMJKKrBVAJKkNI2RU5mJn97u1iUASgtP+Y1P9lkoq6+TsxCr9ORv68AgDkz48RscNQfPWqUKMs0NjVh7bDyp4x0as/W8sWlZrq6u8ViMpHhBvQ6HRs2bsYQGQFAmSSxc2c27e3tXG5tE6vIaEKCuScsjLgZcSQmrUIbqvXYt8iISF7PyvLYr4VPLWDCxEmsX79OzFIkbkYcKev+X8dSV09Kyote2z50yBB+9tMRTJ40mTUpZsW2izj7ApCRlsaVK1eIiY1ldny8WNQjigZLNZspLCoSZXDcYG/5c2bGUddgEbMAKC87iiEywqOJGpuaPObhyJ/20FTFH9cdw/U6Sg4extbRwbz58xRN6Y4Eo5Gt6eke+xYZblAcHAlGIzGxsSSZTGKWV5z/29phJfrhh/xue8y0aPL3FXhsu4jzenNmxjEl6kH0ej3lFcdYtMiIMSFBLO6WfntFvvrn7aLkF5a6er/NBXC5tY3a6iryduf6fYMApNIjotRn1DVYqDlTxdHSI71qe+WJk6LkFWuHFb1OR1VNNeUVxxg/7n7eesv9Q8Ud/Wawk6dPiZJfWCwNotQn2L6+Ikp9is1m5aNz50TZZ6wdVlFSRBuqpbXt+kBub29n5KhR/HjYMLGYR/rNYLavr1BUWCjKt4R58fEkGI2i7DM7s7IYrteJcp+QYDQyT2GOY7PZRMmFbWlpTJwwXpRlaqurREkmMtxAY1OTnErLj13XIyK5++67WbhgIVnZ2Tz73PNiVY/0m8EApMOHRMlnDIZwUZIpr6jAbrezLS2NnVlZN6TJD04Rq7gwOz6emF/GiHKfcf+4caIko9FoRMkFjUbD2HvHirJP/Ourr0g1m+WUk5kJwOtZWaxdm8rP77uPw0dKiZqq/Pv1pF8N1ps5gRNDZASakGBRBqCru5uDksTmLVsoLNiHwRDO7Ph4OWlDtWKVAUNhURFpGRmiDI4Fii8ruKdXJN4wqHwZXLavr1BYVCSnnjsEUVOn9Oq3UzTYvPmPMeInelEeMOzM3kVkuEGUZbq6u6k8cZKZs2cxZ2YcZZIkFrltmDhhPCUHD4uyWwyRES4Dqj8Hl6LBBg8ezOPzHxPlAUPU1CmUlh9jXUqK1zlTXYOFJJOJ5UsWi1m3Bec/vUBx0X5RHvAoGixq6hQmPPAAdw0dImYNKFauXs2J02d4a38RMdOiGTrEc3srT5z0eyU1EOjq7mb7jh2i7BZLXT1lkuQ2KfVdExJMgtEop4VPLRCL+I2iwQCuXu1kwRNPivJNofRa8xVLXb3LhDTVbObdd95m+PARbN60SfEaSiup/ibBaGRdSooog8Nkvrzm83bnkmQyuU1Kfb8nLIyt6elyWrl6tVjEbwb94HkjH4C21hZe2raNmEemiVnY7XZR8olbMTIslgaXCWnP9NG5c6xZ86JYxS9627dbwcjRo0VJxts2xUDD6xNMGxaGpb6B/L37yMnOZv6jj3LX0CGkms293iwdOXq01znTzVB7tpbCgn2i7DPJJlOv+/bFpWYy0tJE+ZbhbZP1vZISKj+oFGWfuHbtmsvrtOaM56edr3g1mDEhgYqjZQDMnDuXP7y8FRzLaU+72p62D3ryWAAXD3UNlpvaAjkoSR775o2u7m6ydu0S5T7joCQphtCUtikut7a5vE79Dci7w6vBACZMnER+bi445i/fdCnHwTwFenuSmLRKlPxC6YfyhkajJTjY+yBwh/PJq9f17gnc2+v2JCY2VpR8YuiQIQNrm8JJ1NQp3PeLcby2/XqA2tuqMskH82hDtYohDW9oQ7WKIRVPxEyLJmrqFFLWrevVazo5+XqYZMPGzYqrVXdoQoJvemDhiDT0pu2/XbZMlAJO0H++++8PQYOCRN0j7xw4QGlpKY1NjS66Xqdj+PARPL0iUT5vlZOZSdPFiy7lcOw0GyIjKJMkKo8fF7MB2JqervgkbGxqAseZrsrjx7nw2QU6OzvFYgAMGzaMsfeOveEsk7XDSu7ObC5duqR4Pspd33CsZPN253L5crMcEHbH5EmTCQ6+bi5tqFau546Y2FgMhnDFfGcfnL9v7dlasZiMs+3u6nlj1MiRN72S9NtgKir+MEg1l0og8WkOpqLSW+54gwVyz0rlDjdYqtmMJiQEHBN2MU5XVFh4w2ajpa7e5W8RZwhr+ZLFbsuK18BRx2n0mjNVchl3YaFkk8lFt3ZYSTWbXXRnG5zkZGbe0I++4o41WEZaGlLpEZouXqSosJDExBXguBnOk7bS4UMkrXpGvnHz5s6ltraGjLQ0+QbWnKmSjZSTmUne7lyeePIpAKxWq8up3QVPPI6lvp7lSxbLh/nSt25l44b1nD//CcfKyli79vcUF+3H2mGl8vhxF5Nb6uo5efoU75WUkGwysTfvDZ5/1iRfz2azsXzJYirKjyKVHsHaYSVh0a85UlaKzebalr7ijjUYwG8WGVmTYiY//w2mx8RQXLSf7Tt2MHlyFMkmExs2beGesDBmx8eTtGIFXzQ3Ix0+xPQZcdjtdsokiTf35GOIjLh+80+d5OkViSxdtpTtO17nzT35jBlzPeheJkk0NjXx5p58oh+OBofJDx0+xPjx49mwcTMvv/QSr7yyjSNlpWhDtdjtdsaMMcgnSFevXsW2V7axdNlyWlpbyNmdw2t/yeKFF37H0mXLqa2uZvDgweDY7H7OlERQ0CCSklZhs9nktvQlP9q4adNmUbwTOP/xx1R+UMnZmhr0ej0X6j4j3BDO5ZbLtLe1sW7DRlqam6moOMaFT86j0+nQajTsysuj69/f8PY7xVzr7OSPr74KQG11NQV/LaTTbufatU5OnfgHK59Jks1RfOAAj0RPY/2WLTTU11NQWMD06TOoqjqDTqfjww//SfuX7TRfusTVzqucqPyALS9vJbzHN5ynT59iz969fNnWSmLiSt5/v4KaqjN0f/st1dVVhIRoqG9o4Pynn2Kz2Zg1azafN35Oa0sLsdNn+HXU+Vah+F2kSuBxvl57buC6I9lkYosjDuwp3OPcOK6qrqL43b+Dw5i+HLMOFKrBbhOSTSb5K2t3lEkS75WUcPWqnWefe75fnlbuuKPnYLcLZZKk+KWRM1x2/7hxxD/6qwFjLlSD3R5cbGxkxsxZoixzsbERu93OhImTfP6kv69QX5EqAUV9gqkEFNVgKgFFNZhKQFENphJQVIOpBJT/Ae+HXuIiWke9AAAAAElFTkSuQmCC",V_="/boltfaredeal/assets/client3-DH-2gf35.png",Y_="data:image/png;base64,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",G_="data:image/png;base64,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",q_="/boltfaredeal/assets/client6-DIG_vO_a.png",X_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAqCAYAAABGKzIlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAdOSURBVHhe7ZvNb9NmHMe/ftJOTtxDGdQiLWubFVZwSoXapJUYkEoD9iLtpS3bEOxPWCchUI8gpl5WIaEBEoftgLbLdgC2K29bKC/aaCouTUGAzF5KSkpTX0ItTcQ7JPHiJ7HjtLFTjedzar/PE8txfv692tw/L15oHMeBwXADomm0xGA4B9E0DczoGG5BoGlgFsdwC5LJZACWwjFcgkDToGWYh2O4A8loGVpjMByDaBrA/BvDLbI5HCsaGC6Ra4tkoDGjY7gA0TIZABxzcgxXIC8ymWwOxyyO4QJE0zLQMi9oncFwBC45P6/5BAH19a/A4yH0es2Jx2fw9+wsUgsLmJ+fz2nTAABRFLFuXRMAoHPzZni9XmztCqKxsdFwDMbqgXuaTGqC0ID6V1aHwamqiunpOO7evYuZmTjS6TS9pSyB9gC29fRga1cX/P719DKjhnBzT5NagyBkDa7OQ6+7ysSNm/j5p4vLMjIzQqEwhoeHyno9RVHw+51JWq6IvXt2G/6PxaawkEoZtDybNnYgEAgYNKv9dugLhwzfU5ZlPHj4yLAnz4aWFkjSFlp2HC4x91RraGhAfX096urr6HVXSCTm8P1330F+LNNLVUEQBOx9+50igyhElmWMj4/TckWcPXtW/1tVVRw6dMiwXogkBTEy8rlBO336jJ4uLIfR0VGDER87dgzJZNKwJ48gCDhx4gQtOw4BajtpiMWm8OWXxx0zNgBIp9O4eOE8xr8ah6qq9LIj3JmM0ZKBeHwaicQcLVcNWZZNjQ25axKLTdGy4xAtk4GWb424TCw2hW+//YaWgVweJklBSFIQkcgABoeGMTg0jHfefQ+CIOh78vrg0LC+X5KC+p5C5McyTn19ipYd4crlS7RURDQapaWq8dtvv9NSEbdu3aIlx+GePEloQkMDeJ53NYdTFAVjY2Noa2tHU1MTXl27Fps2doDnvWUT/R9++BHR6K9FIYRGVVUkEgmkUotYSKVw/949PHs2j57eED784H3D3mqG1EqOdfLkSfA8D1QxpJYL54UcPXqs7PWuJjmDE8DzXhBCwJHaPBwnyzKWllT8PTura3/9+SeeP38OAPD5fDh48AB4nsely1dw8cJ5/QLHYlOGu7W1rQ1erxcA4PV6saGlGWvWrLEsHPLGCUA/j/v37pkaQCQygP7+PoOWN/78DWGHAwc/w84dbwK5XFZVlwAADx4+QmphwfQ4gfYAPv7kY4Pm9/sN18cOkcgA9u//lJYdg5udfZL1cF4vPB4P3HifRlVVXJ+4oXscq1yjkJGRLyBJW4oMbvyrcds5oCQF0dTUhP7+PkvvCMDyhxscGi5ZhFTiXZDrJR4/fpyWgTKeslTRkceqWChFoZd1GlKLN7YSiQQuXjiPeHy6oguztJS9+2nSz+23UeLxaUSjv+LatV/opapgViwIglAyr0wmk4jHZ2h52cTjM6bXVBRFWgIsztkJCABXvFo1aG5upiUAQGtrGy2VJR+qq41ZsRAKhREKhWkZAHD79m1aWjZmx5KkIHbv2UvLgMU5O0G2LVKLErVCBEEwTW5fa22lpbL4fD5aWjFW3qW/vw/d3d20DACYnLwDRVFouWIURcHk5B1aBgBs374dW7uCtAw44GWtIIAGjsu9R+OS5QUCgZLhxYq2tnZa0tm0sYOWyvJGZyctrRgz7yKKIgKBACRpi2lYi16foKWKMTuGIAgIBiU0NjYi0F46bzU792pDsqaWjaluVqg7d0VoyZLOzZtpSadc8k8jCALCoV5aXhFW3qUwlPX0hgxreSauR1fclJ64XrqvFwqF9aLgrd3FhQ6q6GXLoU/rMy55tzxv791TkZfb0NJCSwbM7txSfPjRYNWrMqs5bGEo6wuXzuPS6TSmp+O0bJtYbMp0Bh2J/HdzB4OSYa0QMw9ZTUg2nnKuv5rK8zwOHz5i2+iam/20ZKBzi71BdCQyoPe9qsnNG6V/rFAobOj/+f3rTcPq1StXaMk2ZlMDURQNuS/P86bFSzW8bDkIx3EgNSpT/f71toxOFEXLpi1seEA42OS0Kha2bdtGS3hzx05aAnKjN1m2108sJJGYM21Ql6pMS50TquBl7aD34WrRj0PO6MbGxhCJDNBLOnbaHh0dr9OSjiiKGB0ddcTYAODq1au0BORyxd7eHlpGX7h0HgebM1Aaq5lsqcq0t7fH9CZfiZe1w6p6AFOWZZw7d67IW9BdfXrSkOfIkSOGPCb/WNKunTuWlbMpioLFxUVaBgDDqMzMK1nNhe18pnDcRlO4r3AkZraHxuwzWEYRVgmr8hHzRGIODx89wu2bNyE/losMy8zgTp8+gz/+eIxQKIzu7u6aPGDIsIabf7agCYIPdXX1IKvE4ApRFKUof8sP6/ft22e4g0vtZawuuIXUoubz+eDxeFalwTH+XxAPITUrGBgvHyTfg3NzysB4eSGEkJo8Xs54OSGEcOBYWGW4hB5SGQw3IB6OVaYM98h6OFYwMFziX0cw5Z4IbqCXAAAAAElFTkSuQmCC",Q_="/boltfaredeal/assets/client8-gVxS5ECv.png",K_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAzCAYAAACaEpqBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAASjSURBVHhe7dyxTxtXHAfw752hwXYGRAi9bFhiaGSkRkGhQyOlEqUDW2mlZm2UDqhRKhTLFRISYqxlCRWMGILSJW0WmiFqYED8A43MUmwnIpWRSqQrGTg12NgGcl0C8v1yd/YZH/ds/z6SB399iAf+6t275wPp8O1bHYy5QKYBY/XC5WKu4XIx13C5mGu4XMw1XC7mGi4Xcw2Xi7lG8noTNZ3OYG1tjcasgkAggJGREVy6pNCXhOFpudLpDObmZmnMqhQMBnHvXkTYgnl6WuQZ63RyuRz+2tigsTBk3bN5izU7GeB2MXd4elpkzU3WvVvPsyYnlQ4OddnnzQQ2N5dAOp2isamZmRl0dHTQuCrJ5DoWF+8bstu3v8PAwFVDdiwWiyGbzRqyGzc+w82b3xgyACgUChgfHzdkoVAI0WjUkJ3Wkyd/YGXlKY3x5ehX+GL4cxoLQW6EeSsc7q+5WADQ1dVFI9PsWCAQNDy3KhYA03HRr68Hv99PI+HJaPDLxQcPfkEiMY9EYh6rq/Xf2rArllOapp2MlT4ymef08IYn6w1ermfP/kQqtYFUagMvXpi/QYVCgUZVqWexAGB3VzsZK31sb7+ihxvs7+/TSHhSoVjS29rbaH4mql1zhcP9uHPnexoDAMbGxgzPw+F+w3MA2NrKIpfLGbJo9EeEQr2G7FgiMY/u7m5DsVRVxfLyCvL5vOHYfD733vrMarzZ7BZisZ9oDLzbbe/tDdH4hNnPAMHXXNJ+saS3N3C5IpGI6S+9krt3f8Dlyx/RGHh3AVC+2FdVFfF4vOrvYzVeTdMwMTEBABgd/RrDw0P0EMuFuxWxy1Uo6u0ftNP8TNSjXE6Uv3HBYBCTk5Po7Oykh73HablgU55KVlfX8PjxEo0tiVwub/YgHMrnq39T7ZRfceVyOezuaobXrSiKgkgkgmCw+qtAq/VfK5EKxZLua/NBkiT6muuqnblgsZayMjQ0ZHrKo7OC3brLjNl+mRWz2VbTNDx8+CvgYIyViDxzSYVSSffJPkiy2OVywuqURN+4qakpKIqz21WSyXU8evRbxVPktWuDuHXrW0Omqiqmp6cBmwW81cLditjlKpZ0n0/ccpntzJvtiperplx2O/SqqjouXfmY7HboM5nnmJ39mcY1E7lcwq+5aLGsMqfsduiXln5HMrlOY1vlY7Lboa/H2BuF8OXyyuLifccFY0YNWy67Kze/vz6zAxfsdGSc/VKrLuLxOBYWFkwf169/Sg+vGResdnKr3ojq5PNGLlhthN+hD4VCtgtkJ16/3sHOzg4AoKenBxcv9tBDAJvtALu9NvoZo9Wx5WOoB5GvFoUvF7MncrlkeLAzz1qDB1unrFXIXnymyFpDw+5zMfHxmou5htdczDWe/t0ia27SweGR7sXtNgDw8uXf2NvbozFzQFEUKMqHNBaCdHB0pHt1xfh0eQWvtv+hMXNgcPATXLnyMY2FIKNRP7lmwuPFFnON7NEZkbUAT2eugavm97Cz6pw714G+vj4aC8PTf7gLAKr6LzY3N/Hfmzf0JWaj+8IFhMNhnD9fn9uR3OB5uVjz8vS0yJobl4u55n9P4f3HwoQaMgAAAABJRU5ErkJggg==",J_="data:image/png;base64,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",Z_="data:image/png;base64,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",$_="data:image/png;base64,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",eN="data:image/png;base64,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",tN="data:image/png;base64,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",rN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAqCAYAAABPwJJfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAamSURBVHhe7ZtfTFNXHMe/vfInuWl5onFRpInLTG55teoDTVBsfFgxodtSpkaSTUGhxoFSlmyg4jLnUHAZTul8G9tkc2XLcJpUEe2L0CU+wXWSxRQdL5eH0ZaqWUb3wHrtOfe2FNZ7cXI+yU36+51ze3+3/fX355xbw19/zyUMBjAYmsAhkaB1DEbO4Jh7MbSERTCGpnC0gsHIJSxFMjSFS8zNIcHSJEMjOOZcDC0xPHn6LLEqLw8cl5vFsAcPJmgV43/Chg2v0ar/zHwXyaIYQyO4BJhzMbSDm5tLsCKfoRmsyGdoCjeXYBGMoR2GmUg0UVhYiLz8PHpsSWTTRcbjcYyOjuDOnduY+mMKY+MiikxGWK1WAMBGmw1VVTshSdPo+fwz+vSMdJ45S8j9/ZfxayhE6Lyt78NsNhO6JJcufYnf7t8HAJiKTGhvPy6PhUIhfNd/OWX2PK87naio2AoACIcnFTbTNtGkXnMhOs+cVbXDc+gwLJZSQqd275ls0aKLNMxEoomCggLkF+TTY0tiIQcLhyfRcLAekWiMHiLw+XwAgLq6OnooI8FgUH4dj8exY8cOYhwAamv3Yt++/bQaANBy9AjujozKsstVjaamZlk+UF+HsXFRlgHA42mE210DABBFUWFzqk1q0NfMRDAYRDwex1tvvkF8hrSdkiTB5XLJMig71dDCwXSvwbJxLgAoLi6mVYtmdHSEVgEAhm7eoFVp8fsHMDx8S5a7us+hyGQk5ugNz/No8XoJnd8/AEmSZLmv7ytivMhkRFXVTkKnB/Jmtx5+Fg5PKpzL42mEz+eDz+dDa6sXLlc1ikxGmM1mFBcXw+NpJA6aTONXBwcJOcmjx1MQRTIKZaKtrV2ez/M8vrjQS0/JKVs2b1LcF31/FRVbUWYViPOSTiVJEvz+AWKsxesFz/OETg84ADBwnC4e9vDh74RcZDLC7a6BIAgQBAFOZxWamppx9ZdrAACz2Qy3u4Y4aNKNS5JEpB2Ho1J+DQDXr89fI1uOHmmWI4TFUoqTJzvoKTljo82muC/6/gDg8HtNhJyMYnT02rJ5k1wj6o2uK/mrV79CyJFoDC1HjyBEFaK5YGjoJiHX1r5D/OJvBAKIx+PEnExEojG0ffiBfE5FxVa4XNX0NF0RBEFhw4UL5xXRy3PoMCHria7PgwmCgHUlawjd3ZFRNDc3w263o7u7a1GpKxM//fj8Q15XsgYWSyk22myyLhKNpa3R0jE2LqK396IsNzU1K9JULujpOQ+73a44+lU62Pr6A0RNGAiQPyyXq1rRXeqJrg4GAKc+6UxbJPv9A6irq0NHx/OlgaUQDk/i0eMpWd5WuR0A4HCQHWW6Gi0V2la/f4D4oru6z2H9+leJOXrC8zwONjTQauBf2+vrD9BqXdHdwSyWUnx/5Qd4PI2KaJYkELip+mvNFr//CiEnHctiKSWueXdklOi81Dh+okPhZD095+W0zvM8bCmRcTlwOqtUI+nBhoZlKexTmXew3DypkzU8z8PtrsE33/ajr+9r1Nbupafg1tAQrcqaG4EAIe/Zs1tOM6mRDSq1Go3RaFTtGo8fa0c4PEmrc4LH04hgMKg46CI/lXepdb11JWvgdFYRuuWAwzL/KdJiKcW+ffsVXRm9mJktoVBIsRSSidRaLR1qXWMkGsOpjz9aVKOgJUYjGWXXri0h5OWCA4DEXAKGHD1wuBC73najv/8yRFGUv5xweBL37t0j5qmF/Gy4du0qrcpItmtial3j2LiIY+1thE4NURRVj3TOOTU1b5Pake6cFxXDnzORRGFhoS5bRaLKNko60m3n2O12Qs60NVRkMspraql0d3cRrXzqNgu9bePz+SAIz52dHgeA1lavnI4Wc4/J91Z7z3TQ9iShr7tl8yZ0njmLwcGfcfr0pyizCrjYO7/9lg5NtooMOqbIWCy71FVmFbBr125avSB0PbXd4SDkJOXlpJPSNVsmTnScVDQns7OzhPwiMTExgSKTEZHIjGY1YyY4GAzQy8mMRiMcjkpFV5akzCqgtdWLru5zS+p+bg8PEzLtSElsNhthQyQaI/YbM8HzfMallheN8nI7rFYrtlVuX5b1MEM0NpsoKCjAqrxV9NiSyJQiaSRJwvT0NCwWy5IcipFbtEmRtEZHzGYzBEFgzvUSM79MoVOKZKw8OI4z6L3OylhBMPdiaIquXSRj5WF48vRZIi8/jzkZQxM4juP03+1mrBiWfbOb8XLDGcBWKRjaofsDh4yVha6b3YyVB4tgDE35B03HsruV5vrPAAAAAElFTkSuQmCC",nN="data:image/png;base64,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",Nd=[W_,H_,V_,Y_,G_,q_,X_,Q_,K_,J_,Z_,$_,eN,tN,rN,nN],iN=()=>o.jsx("section",{className:"relative z-10 w-full overflow-hidden py-14 md:py-16",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8",children:[o.jsx("div",{className:"mb-8 text-center",children:o.jsx(S1,{primary:"Our",secondary:"Clients",className:"text-center"})}),o.jsx("div",{className:"space-y-4 overflow-hidden",children:[{id:"left",items:[...Nd,...Nd],direction:"left"},{id:"right",items:[...Nd,...Nd],direction:"right"}].map(a=>o.jsx("div",{className:"overflow-hidden",children:o.jsx("div",{className:`client-marquee-track ${a.direction==="right"?"client-marquee-track-reverse":"client-marquee-track-left"} flex w-max items-center gap-3 md:gap-5`,children:a.items.map((t,n)=>o.jsx("div",{className:"client-logo-card flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E1] bg-white/80 px-3 py-2 shadow-[0_10px_24px_rgba(23,57,42,0.08)] backdrop-blur-sm sm:h-20 sm:w-32 md:h-24 md:w-36 lg:h-28 lg:w-40",children:o.jsx("img",{src:t,alt:`Client logo ${n+1}`,className:"h-full w-full object-contain p-1",loading:"lazy"})},`${a.id}-${n}`))})},a.id))})]})});function aN(a,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function sN(a,t,n){return t&&aN(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),a}var Dx="(prefers-reduced-motion: reduce)",to=1,oN=2,vo=3,To=4,lc=5,Wd=6,iu=7,lN={CREATED:to,MOUNTED:oN,IDLE:vo,MOVING:To,SCROLLING:lc,DRAGGING:Wd,DESTROYED:iu};function Ii(a){a.length=0}function Ra(a,t,n){return Array.prototype.slice.call(a,t,n)}function nt(a){return a.bind.apply(a,[null].concat(Ra(arguments,1)))}var A1=setTimeout,rh=function(){};function Bx(a){return requestAnimationFrame(a)}function Eu(a,t){return typeof t===a}function Wl(a){return!Gh(a)&&Eu("object",a)}var Yh=Array.isArray,C1=nt(Eu,"function"),ja=nt(Eu,"string"),cc=nt(Eu,"undefined");function Gh(a){return a===null}function T1(a){try{return a instanceof(a.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function dc(a){return Yh(a)?a:[a]}function Ln(a,t){dc(a).forEach(t)}function qh(a,t){return a.indexOf(t)>-1}function Hd(a,t){return a.push.apply(a,dc(t)),a}function Pi(a,t,n){a&&Ln(t,function(i){i&&a.classList[n?"add":"remove"](i)})}function fi(a,t){Pi(a,ja(t)?t.split(" "):t,!0)}function uc(a,t){Ln(t,a.appendChild.bind(a))}function Xh(a,t){Ln(a,function(n){var i=(t||n).parentNode;i&&i.insertBefore(n,t)})}function Hl(a,t){return T1(a)&&(a.msMatchesSelector||a.matches).call(a,t)}function P1(a,t){var n=a?Ra(a.children):[];return t?n.filter(function(i){return Hl(i,t)}):n}function fc(a,t){return t?P1(a,t)[0]:a.firstElementChild}var Vl=Object.keys;function ls(a,t,n){return a&&(n?Vl(a).reverse():Vl(a)).forEach(function(i){i!=="__proto__"&&t(a[i],i)}),a}function Yl(a){return Ra(arguments,1).forEach(function(t){ls(t,function(n,i){a[i]=t[i]})}),a}function ma(a){return Ra(arguments,1).forEach(function(t){ls(t,function(n,i){Yh(n)?a[i]=n.slice():Wl(n)?a[i]=ma({},Wl(a[i])?a[i]:{},n):a[i]=n})}),a}function Ux(a,t){Ln(t||Vl(a),function(n){delete a[n]})}function pi(a,t){Ln(a,function(n){Ln(t,function(i){n&&n.removeAttribute(i)})})}function ze(a,t,n){Wl(t)?ls(t,function(i,s){ze(a,s,i)}):Ln(a,function(i){Gh(n)||n===""?pi(i,t):i.setAttribute(t,String(n))})}function oo(a,t,n){var i=document.createElement(a);return t&&(ja(t)?fi(i,t):ze(i,t)),n&&uc(n,i),i}function qn(a,t,n){if(cc(n))return getComputedStyle(a)[t];Gh(n)||(a.style[t]=""+n)}function Gl(a,t){qn(a,"display",t)}function R1(a){a.setActive&&a.setActive()||a.focus({preventScroll:!0})}function Qn(a,t){return a.getAttribute(t)}function Wx(a,t){return a&&a.classList.contains(t)}function Nn(a){return a.getBoundingClientRect()}function gs(a){Ln(a,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function L1(a){return fc(new DOMParser().parseFromString(a,"text/html").body)}function Ai(a,t){a.preventDefault(),t&&(a.stopPropagation(),a.stopImmediatePropagation())}function z1(a,t){return a&&a.querySelector(t)}function Qh(a,t){return t?Ra(a.querySelectorAll(t)):[]}function Ri(a,t){Pi(a,t,!1)}function nh(a){return a.timeStamp}function Ja(a){return ja(a)?a:a?a+"px":""}var pc="splide",Kh="data-"+pc;function El(a,t){if(!a)throw new Error("["+pc+"] "+(t||""))}var Ea=Math.min,au=Math.max,su=Math.floor,ql=Math.ceil,Ur=Math.abs;function O1(a,t,n){return Ur(a-t)<n}function Vd(a,t,n,i){var s=Ea(t,n),c=au(t,n);return i?s<a&&a<c:s<=a&&a<=c}function Js(a,t,n){var i=Ea(t,n),s=au(t,n);return Ea(au(i,a),s)}function ih(a){return+(a>0)-+(a<0)}function ah(a,t){return Ln(t,function(n){a=a.replace("%s",""+n)}),a}function Jh(a){return a<10?"0"+a:""+a}var Hx={};function cN(a){return""+a+Jh(Hx[a]=(Hx[a]||0)+1)}function I1(){var a=[];function t(u,f,p,m){s(u,f,function(g,y,v){var b="addEventListener"in g,k=b?g.removeEventListener.bind(g,y,p,m):g.removeListener.bind(g,p);b?g.addEventListener(y,p,m):g.addListener(p),a.push([g,y,v,p,k])})}function n(u,f,p){s(u,f,function(m,g,y){a=a.filter(function(v){return v[0]===m&&v[1]===g&&v[2]===y&&(!p||v[3]===p)?(v[4](),!1):!0})})}function i(u,f,p){var m,g=!0;return typeof CustomEvent=="function"?m=new CustomEvent(f,{bubbles:g,detail:p}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(f,g,!1,p)),u.dispatchEvent(m),m}function s(u,f,p){Ln(u,function(m){m&&Ln(f,function(g){g.split(" ").forEach(function(y){var v=y.split(".");p(m,v[0],v[1])})})})}function c(){a.forEach(function(u){u[4]()}),Ii(a)}return{bind:t,unbind:n,dispatch:i,destroy:c}}var La="mounted",sh="ready",Mi="move",Po="moved",Zh="click",M1="active",F1="inactive",D1="visible",B1="hidden",Dt="refresh",Ar="updated",yo="resize",Su="resized",U1="drag",W1="dragging",H1="dragged",Au="scroll",ws="scrolled",dN="overflow",$h="destroy",V1="arrows:mounted",Y1="arrows:updated",G1="pagination:mounted",q1="pagination:updated",em="navigation:mounted",tm="autoplay:play",X1="autoplay:playing",rm="autoplay:pause",nm="lazyload:loaded",Q1="sk",K1="sh",ou="ei";function bt(a){var t=a?a.event.bus:document.createDocumentFragment(),n=I1();function i(c,u){n.bind(t,dc(c).join(" "),function(f){u.apply(u,Yh(f.detail)?f.detail:[])})}function s(c){n.dispatch(t,c,Ra(arguments,1))}return a&&a.event.on($h,n.destroy),Yl(n,{bus:t,on:i,off:nt(n.unbind,t),emit:s})}function Cu(a,t,n,i){var s=Date.now,c,u=0,f,p=!0,m=0;function g(){if(!p){if(u=a?Ea((s()-c)/a,1):1,n&&n(u),u>=1&&(t(),c=s(),i&&++m>=i))return v();f=Bx(g)}}function y(C){C||k(),c=s()-(C?u*a:0),p=!1,f=Bx(g)}function v(){p=!0}function b(){c=s(),u=0,n&&n(u)}function k(){f&&cancelAnimationFrame(f),u=0,f=0,p=!0}function w(C){a=C}function N(){return p}return{start:y,rewind:b,pause:v,cancel:k,set:w,isPaused:N}}function uN(a){var t=a;function n(s){t=s}function i(s){return qh(dc(s),t)}return{set:n,is:i}}function fN(a,t){var n=Cu(0,a,null,1);return function(){n.isPaused()&&n.start()}}function pN(a,t,n){var i=a.state,s=n.breakpoints||{},c=n.reducedMotion||{},u=I1(),f=[];function p(){var k=n.mediaQuery==="min";Vl(s).sort(function(w,N){return k?+w-+N:+N-+w}).forEach(function(w){g(s[w],"("+(k?"min":"max")+"-width:"+w+"px)")}),g(c,Dx),y()}function m(k){k&&u.destroy()}function g(k,w){var N=matchMedia(w);u.bind(N,"change",y),f.push([k,N])}function y(){var k=i.is(iu),w=n.direction,N=f.reduce(function(C,A){return ma(C,A[1].matches?A[0]:{})},{});Ux(n),b(N),n.destroy?a.destroy(n.destroy==="completely"):k?(m(!0),a.mount()):w!==n.direction&&a.refresh()}function v(k){matchMedia(Dx).matches&&(k?ma(n,c):Ux(n,Vl(c)))}function b(k,w,N){ma(n,k),w&&ma(Object.getPrototypeOf(n),k),(N||!i.is(to))&&a.emit(Ar,n)}return{setup:p,destroy:m,reduce:v,set:b}}var Tu="Arrow",Pu=Tu+"Left",Ru=Tu+"Right",J1=Tu+"Up",Z1=Tu+"Down",Vx="rtl",Lu="ttb",Pp={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[J1,Ru],ArrowRight:[Z1,Pu]};function hN(a,t,n){function i(c,u,f){f=f||n.direction;var p=f===Vx&&!u?1:f===Lu?0:-1;return Pp[c]&&Pp[c][p]||c.replace(/width|left|right/i,function(m,g){var y=Pp[m.toLowerCase()][p]||m;return g>0?y.charAt(0).toUpperCase()+y.slice(1):y})}function s(c){return c*(n.direction===Vx?1:-1)}return{resolve:i,orient:s}}var zi="role",lo="tabindex",mN="disabled",Kn="aria-",hc=Kn+"controls",$1=Kn+"current",Yx=Kn+"selected",An=Kn+"label",im=Kn+"labelledby",ey=Kn+"hidden",am=Kn+"orientation",Xl=Kn+"roledescription",Gx=Kn+"live",qx=Kn+"busy",Xx=Kn+"atomic",sm=[zi,lo,mN,hc,$1,An,im,ey,am,Xl],mi=pc+"__",za="is-",Rp=pc,Qx=mi+"track",gN=mi+"list",zu=mi+"slide",ty=zu+"--clone",xN=zu+"__container",om=mi+"arrows",Ou=mi+"arrow",ry=Ou+"--prev",ny=Ou+"--next",Iu=mi+"pagination",iy=Iu+"__page",vN=mi+"progress",yN=vN+"__bar",bN=mi+"toggle",wN=mi+"spinner",kN=mi+"sr",_N=za+"initialized",xs=za+"active",ay=za+"prev",sy=za+"next",oh=za+"visible",lh=za+"loading",oy=za+"focus-in",ly=za+"overflow",NN=[xs,oh,ay,sy,lh,oy,ly],jN={slide:zu,clone:ty,arrows:om,arrow:Ou,prev:ry,next:ny,pagination:Iu,page:iy,spinner:wN};function EN(a,t){if(C1(a.closest))return a.closest(t);for(var n=a;n&&n.nodeType===1&&!Hl(n,t);)n=n.parentElement;return n}var SN=5,Kx=200,cy="touchstart mousedown",Lp="touchmove mousemove",zp="touchend touchcancel mouseup click";function AN(a,t,n){var i=bt(a),s=i.on,c=i.bind,u=a.root,f=n.i18n,p={},m=[],g=[],y=[],v,b,k;function w(){S(),j(),A()}function N(){s(Dt,C),s(Dt,w),s(Ar,A),c(document,cy+" keydown",function(L){k=L.type==="keydown"},{capture:!0}),c(u,"focusin",function(){Pi(u,oy,!!k)})}function C(L){var B=sm.concat("style");Ii(m),Ri(u,g),Ri(v,y),pi([v,b],B),pi(u,L?B:["style",Xl])}function A(){Ri(u,g),Ri(v,y),g=I(Rp),y=I(Qx),fi(u,g),fi(v,y),ze(u,An,n.label),ze(u,im,n.labelledby)}function S(){v=P("."+Qx),b=fc(v,"."+gN),El(v&&b,"A track/list element is missing."),Hd(m,P1(b,"."+zu+":not(."+ty+")")),ls({arrows:om,pagination:Iu,prev:ry,next:ny,bar:yN,toggle:bN},function(L,B){p[B]=P("."+L)}),Yl(p,{root:u,track:v,list:b,slides:m})}function j(){var L=u.id||cN(pc),B=n.role;u.id=L,v.id=v.id||L+"-track",b.id=b.id||L+"-list",!Qn(u,zi)&&u.tagName!=="SECTION"&&B&&ze(u,zi,B),ze(u,Xl,f.carousel),ze(b,zi,"presentation")}function P(L){var B=z1(u,L);return B&&EN(B,"."+Rp)===u?B:void 0}function I(L){return[L+"--"+n.type,L+"--"+n.direction,n.drag&&L+"--draggable",n.isNavigation&&L+"--nav",L===Rp&&xs]}return Yl(p,{setup:w,mount:N,destroy:C})}var bo="slide",Ro="loop",mc="fade";function CN(a,t,n,i){var s=bt(a),c=s.on,u=s.emit,f=s.bind,p=a.Components,m=a.root,g=a.options,y=g.isNavigation,v=g.updateOnMove,b=g.i18n,k=g.pagination,w=g.slideFocus,N=p.Direction.resolve,C=Qn(i,"style"),A=Qn(i,An),S=n>-1,j=fc(i,"."+xN),P;function I(){S||(i.id=m.id+"-slide"+Jh(t+1),ze(i,zi,k?"tabpanel":"group"),ze(i,Xl,b.slide),ze(i,An,A||ah(b.slideLabel,[t+1,a.length]))),L()}function L(){f(i,"click",nt(u,Zh,V)),f(i,"keydown",nt(u,Q1,V)),c([Po,K1,ws],Q),c(em,W),v&&c(Mi,D)}function B(){P=!0,s.destroy(),Ri(i,NN),pi(i,sm),ze(i,"style",C),ze(i,An,A||"")}function W(){var X=a.splides.map(function(E){var T=E.splide.Components.Slides.getAt(t);return T?T.slide.id:""}).join(" ");ze(i,An,ah(b.slideX,(S?n:t)+1)),ze(i,hc,X),ze(i,zi,w?"button":""),w&&pi(i,Xl)}function D(){P||Q()}function Q(){if(!P){var X=a.index;F(),J(),Pi(i,ay,t===X-1),Pi(i,sy,t===X+1)}}function F(){var X=ae();X!==Wx(i,xs)&&(Pi(i,xs,X),ze(i,$1,y&&X||""),u(X?M1:F1,V))}function J(){var X=ce(),E=!X&&(!ae()||S);if(a.state.is([To,lc])||ze(i,ey,E||""),ze(Qh(i,g.focusableNodes||""),lo,E?-1:""),w&&ze(i,lo,E?-1:0),X!==Wx(i,oh)&&(Pi(i,oh,X),u(X?D1:B1,V)),!X&&document.activeElement===i){var T=p.Slides.getAt(a.index);T&&R1(T.slide)}}function $(X,E,T){qn(T&&j||i,X,E)}function ae(){var X=a.index;return X===t||g.cloneStatus&&X===n}function ce(){if(a.is(mc))return ae();var X=Nn(p.Elements.track),E=Nn(i),T=N("left",!0),Y=N("right",!0);return su(X[T])<=ql(E[T])&&su(E[Y])<=ql(X[Y])}function ee(X,E){var T=Ur(X-t);return!S&&(g.rewind||a.is(Ro))&&(T=Ea(T,a.length-T)),T<=E}var V={index:t,slideIndex:n,slide:i,container:j,isClone:S,mount:I,destroy:B,update:Q,style:$,isWithin:ee};return V}function TN(a,t,n){var i=bt(a),s=i.on,c=i.emit,u=i.bind,f=t.Elements,p=f.slides,m=f.list,g=[];function y(){v(),s(Dt,b),s(Dt,v)}function v(){p.forEach(function(Q,F){w(Q,F,-1)})}function b(){P(function(Q){Q.destroy()}),Ii(g)}function k(){P(function(Q){Q.update()})}function w(Q,F,J){var $=CN(a,F,J,Q);$.mount(),g.push($),g.sort(function(ae,ce){return ae.index-ce.index})}function N(Q){return Q?I(function(F){return!F.isClone}):g}function C(Q){var F=t.Controller,J=F.toIndex(Q),$=F.hasFocus()?1:n.perPage;return I(function(ae){return Vd(ae.index,J,J+$-1)})}function A(Q){return I(Q)[0]}function S(Q,F){Ln(Q,function(J){if(ja(J)&&(J=L1(J)),T1(J)){var $=p[F];$?Xh(J,$):uc(m,J),fi(J,n.classes.slide),B(J,nt(c,yo))}}),c(Dt)}function j(Q){gs(I(Q).map(function(F){return F.slide})),c(Dt)}function P(Q,F){N(F).forEach(Q)}function I(Q){return g.filter(C1(Q)?Q:function(F){return ja(Q)?Hl(F.slide,Q):qh(dc(Q),F.index)})}function L(Q,F,J){P(function($){$.style(Q,F,J)})}function B(Q,F){var J=Qh(Q,"img"),$=J.length;$?J.forEach(function(ae){u(ae,"load error",function(){--$||F()})}):F()}function W(Q){return Q?p.length:g.length}function D(){return g.length>n.perPage}return{mount:y,destroy:b,update:k,register:w,get:N,getIn:C,getAt:A,add:S,remove:j,forEach:P,filter:I,style:L,getLength:W,isEnough:D}}function PN(a,t,n){var i=bt(a),s=i.on,c=i.bind,u=i.emit,f=t.Slides,p=t.Direction.resolve,m=t.Elements,g=m.root,y=m.track,v=m.list,b=f.getAt,k=f.style,w,N,C;function A(){S(),c(window,"resize load",fN(nt(u,yo))),s([Ar,Dt],S),s(yo,j)}function S(){w=n.direction===Lu,qn(g,"maxWidth",Ja(n.width)),qn(y,p("paddingLeft"),P(!1)),qn(y,p("paddingRight"),P(!0)),j(!0)}function j(V){var X=Nn(g);(V||N.width!==X.width||N.height!==X.height)&&(qn(y,"height",I()),k(p("marginRight"),Ja(n.gap)),k("width",B()),k("height",W(),!0),N=X,u(Su),C!==(C=ee())&&(Pi(g,ly,C),u(dN,C)))}function P(V){var X=n.padding,E=p(V?"right":"left");return X&&Ja(X[E]||(Wl(X)?0:X))||"0px"}function I(){var V="";return w&&(V=L(),El(V,"height or heightRatio is missing."),V="calc("+V+" - "+P(!1)+" - "+P(!0)+")"),V}function L(){return Ja(n.height||Nn(v).width*n.heightRatio)}function B(){return n.autoWidth?null:Ja(n.fixedWidth)||(w?"":D())}function W(){return Ja(n.fixedHeight)||(w?n.autoHeight?null:D():L())}function D(){var V=Ja(n.gap);return"calc((100%"+(V&&" + "+V)+")/"+(n.perPage||1)+(V&&" - "+V)+")"}function Q(){return Nn(v)[p("width")]}function F(V,X){var E=b(V||0);return E?Nn(E.slide)[p("width")]+(X?0:ae()):0}function J(V,X){var E=b(V);if(E){var T=Nn(E.slide)[p("right")],Y=Nn(v)[p("left")];return Ur(T-Y)+(X?0:ae())}return 0}function $(V){return J(a.length-1)-J(0)+F(0,V)}function ae(){var V=b(0);return V&&parseFloat(qn(V.slide,p("marginRight")))||0}function ce(V){return parseFloat(qn(y,p("padding"+(V?"Right":"Left"))))||0}function ee(){return a.is(mc)||$(!0)>Q()}return{mount:A,resize:j,listSize:Q,slideSize:F,sliderSize:$,totalSize:J,getPadding:ce,isOverflow:ee}}var RN=2;function LN(a,t,n){var i=bt(a),s=i.on,c=t.Elements,u=t.Slides,f=t.Direction.resolve,p=[],m;function g(){s(Dt,y),s([Ar,yo],b),(m=N())&&(k(m),t.Layout.resize(!0))}function y(){v(),g()}function v(){gs(p),Ii(p),i.destroy()}function b(){var C=N();m!==C&&(m<C||!C)&&i.emit(Dt)}function k(C){var A=u.get().slice(),S=A.length;if(S){for(;A.length<C;)Hd(A,A);Hd(A.slice(-C),A.slice(0,C)).forEach(function(j,P){var I=P<C,L=w(j.slide,P);I?Xh(L,A[0].slide):uc(c.list,L),Hd(p,L),u.register(L,P-C+(I?0:S),j.index)})}}function w(C,A){var S=C.cloneNode(!0);return fi(S,n.classes.clone),S.id=a.root.id+"-clone"+Jh(A+1),S}function N(){var C=n.clones;if(!a.is(Ro))C=0;else if(cc(C)){var A=n[f("fixedWidth")]&&t.Layout.slideSize(0),S=A&&ql(Nn(c.track)[f("width")]/A);C=S||n[f("autoWidth")]&&a.length||n.perPage*RN}return C}return{mount:g,destroy:v}}function zN(a,t,n){var i=bt(a),s=i.on,c=i.emit,u=a.state.set,f=t.Layout,p=f.slideSize,m=f.getPadding,g=f.totalSize,y=f.listSize,v=f.sliderSize,b=t.Direction,k=b.resolve,w=b.orient,N=t.Elements,C=N.list,A=N.track,S;function j(){S=t.Transition,s([La,Su,Ar,Dt],P)}function P(){t.Controller.isBusy()||(t.Scroll.cancel(),L(a.index),t.Slides.update())}function I(E,T,Y,se){E!==T&&V(E>Y)&&(Q(),B(D($(),E>Y),!0)),u(To),c(Mi,T,Y,E),S.start(T,function(){u(vo),c(Po,T,Y,E),se&&se()})}function L(E){B(J(E,!0))}function B(E,T){if(!a.is(mc)){var Y=T?E:W(E);qn(C,"transform","translate"+k("X")+"("+Y+"px)"),E!==Y&&c(K1)}}function W(E){if(a.is(Ro)){var T=F(E),Y=T>t.Controller.getEnd(),se=T<0;(se||Y)&&(E=D(E,Y))}return E}function D(E,T){var Y=E-ee(T),se=v();return E-=w(se*(ql(Ur(Y)/se)||1))*(T?1:-1),E}function Q(){B($(),!0),S.cancel()}function F(E){for(var T=t.Slides.get(),Y=0,se=1/0,le=0;le<T.length;le++){var ge=T[le].index,K=Ur(J(ge,!0)-E);if(K<=se)se=K,Y=ge;else break}return Y}function J(E,T){var Y=w(g(E-1)-ce(E));return T?ae(Y):Y}function $(){var E=k("left");return Nn(C)[E]-Nn(A)[E]+w(m(!1))}function ae(E){return n.trimSpace&&a.is(bo)&&(E=Js(E,0,w(v(!0)-y()))),E}function ce(E){var T=n.focus;return T==="center"?(y()-p(E,!0))/2:+T*p(E)||0}function ee(E){return J(E?t.Controller.getEnd():0,!!n.trimSpace)}function V(E){var T=w(D($(),E));return E?T>=0:T<=C[k("scrollWidth")]-Nn(A)[k("width")]}function X(E,T){T=cc(T)?$():T;var Y=E!==!0&&w(T)<w(ee(!1)),se=E!==!1&&w(T)>w(ee(!0));return Y||se}return{mount:j,move:I,jump:L,translate:B,shift:D,cancel:Q,toIndex:F,toPosition:J,getPosition:$,getLimit:ee,exceededLimit:X,reposition:P}}function ON(a,t,n){var i=bt(a),s=i.on,c=i.emit,u=t.Move,f=u.getPosition,p=u.getLimit,m=u.toPosition,g=t.Slides,y=g.isEnough,v=g.getLength,b=n.omitEnd,k=a.is(Ro),w=a.is(bo),N=nt($,!1),C=nt($,!0),A=n.start||0,S,j=A,P,I,L;function B(){W(),s([Ar,Dt,ou],W),s(Su,D)}function W(){P=v(!0),I=n.perMove,L=n.perPage,S=V();var K=Js(A,0,b?S:P-1);K!==A&&(A=K,u.reposition())}function D(){S!==V()&&c(ou)}function Q(K,ue,ye){if(!ge()){var xe=J(K),Me=ee(xe);Me>-1&&(ue||Me!==A)&&(Y(Me),u.move(xe,Me,j,ye))}}function F(K,ue,ye,xe){t.Scroll.scroll(K,ue,ye,function(){var Me=ee(u.toIndex(f()));Y(b?Ea(Me,S):Me),xe&&xe()})}function J(K){var ue=A;if(ja(K)){var ye=K.match(/([+\-<>])(\d+)?/)||[],xe=ye[1],Me=ye[2];xe==="+"||xe==="-"?ue=ae(A+ +(""+xe+(+Me||1)),A):xe===">"?ue=Me?X(+Me):N(!0):xe==="<"&&(ue=C(!0))}else ue=k?K:Js(K,0,S);return ue}function $(K,ue){var ye=I||(le()?1:L),xe=ae(A+ye*(K?-1:1),A,!(I||le()));return xe===-1&&w&&!O1(f(),p(!K),1)?K?0:S:ue?xe:ee(xe)}function ae(K,ue,ye){if(y()||le()){var xe=ce(K);xe!==K&&(ue=K,K=xe,ye=!1),K<0||K>S?!I&&(Vd(0,K,ue,!0)||Vd(S,ue,K,!0))?K=X(E(K)):k?K=ye?K<0?-(P%L||L):P:K:n.rewind?K=K<0?S:0:K=-1:ye&&K!==ue&&(K=X(E(ue)+(K<ue?-1:1)))}else K=-1;return K}function ce(K){if(w&&n.trimSpace==="move"&&K!==A)for(var ue=f();ue===m(K,!0)&&Vd(K,0,a.length-1,!n.rewind);)K<A?--K:++K;return K}function ee(K){return k?(K+P)%P||0:K}function V(){for(var K=P-(le()||k&&I?1:L);b&&K-- >0;)if(m(P-1,!0)!==m(K,!0)){K++;break}return Js(K,0,P-1)}function X(K){return Js(le()?K:L*K,0,S)}function E(K){return le()?Ea(K,S):su((K>=S?P-1:K)/L)}function T(K){var ue=u.toIndex(K);return w?Js(ue,0,S):ue}function Y(K){K!==A&&(j=A,A=K)}function se(K){return K?j:A}function le(){return!cc(n.focus)||n.isNavigation}function ge(){return a.state.is([To,lc])&&!!n.waitForTransition}return{mount:B,go:Q,scroll:F,getNext:N,getPrev:C,getAdjacent:$,getEnd:V,setIndex:Y,getIndex:se,toIndex:X,toPage:E,toDest:T,hasFocus:le,isBusy:ge}}var IN="http://www.w3.org/2000/svg",MN="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",jd=40;function FN(a,t,n){var i=bt(a),s=i.on,c=i.bind,u=i.emit,f=n.classes,p=n.i18n,m=t.Elements,g=t.Controller,y=m.arrows,v=m.track,b=y,k=m.prev,w=m.next,N,C,A={};function S(){P(),s(Ar,j)}function j(){I(),S()}function P(){var F=n.arrows;F&&!(k&&w)&&W(),k&&w&&(Yl(A,{prev:k,next:w}),Gl(b,F?"":"none"),fi(b,C=om+"--"+n.direction),F&&(L(),Q(),ze([k,w],hc,v.id),u(V1,k,w)))}function I(){i.destroy(),Ri(b,C),N?(gs(y?[k,w]:b),k=w=null):pi([k,w],sm)}function L(){s([La,Po,Dt,ws,ou],Q),c(w,"click",nt(B,">")),c(k,"click",nt(B,"<"))}function B(F){g.go(F,!0)}function W(){b=y||oo("div",f.arrows),k=D(!0),w=D(!1),N=!0,uc(b,[k,w]),!y&&Xh(b,v)}function D(F){var J='<button class="'+f.arrow+" "+(F?f.prev:f.next)+'" type="button"><svg xmlns="'+IN+'" viewBox="0 0 '+jd+" "+jd+'" width="'+jd+'" height="'+jd+'" focusable="false"><path d="'+(n.arrowPath||MN)+'" />';return L1(J)}function Q(){if(k&&w){var F=a.index,J=g.getPrev(),$=g.getNext(),ae=J>-1&&F<J?p.last:p.prev,ce=$>-1&&F>$?p.first:p.next;k.disabled=J<0,w.disabled=$<0,ze(k,An,ae),ze(w,An,ce),u(Y1,k,w,J,$)}}return{arrows:A,mount:S,destroy:I,update:Q}}var DN=Kh+"-interval";function BN(a,t,n){var i=bt(a),s=i.on,c=i.bind,u=i.emit,f=Cu(n.interval,a.go.bind(a,">"),L),p=f.isPaused,m=t.Elements,g=t.Elements,y=g.root,v=g.toggle,b=n.autoplay,k,w,N=b==="pause";function C(){b&&(A(),v&&ze(v,hc,m.track.id),N||S(),I())}function A(){n.pauseOnHover&&c(y,"mouseenter mouseleave",function(W){k=W.type==="mouseenter",P()}),n.pauseOnFocus&&c(y,"focusin focusout",function(W){w=W.type==="focusin",P()}),v&&c(v,"click",function(){N?S():j(!0)}),s([Mi,Au,Dt],f.rewind),s(Mi,B)}function S(){p()&&t.Slides.isEnough()&&(f.start(!n.resetProgress),w=k=N=!1,I(),u(tm))}function j(W){W===void 0&&(W=!0),N=!!W,I(),p()||(f.pause(),u(rm))}function P(){N||(k||w?j(!1):S())}function I(){v&&(Pi(v,xs,!N),ze(v,An,n.i18n[N?"play":"pause"]))}function L(W){var D=m.bar;D&&qn(D,"width",W*100+"%"),u(X1,W)}function B(W){var D=t.Slides.getAt(W);f.set(D&&+Qn(D.slide,DN)||n.interval)}return{mount:C,destroy:f.cancel,play:S,pause:j,isPaused:p}}function UN(a,t,n){var i=bt(a),s=i.on;function c(){n.cover&&(s(nm,nt(f,!0)),s([La,Ar,Dt],nt(u,!0)))}function u(p){t.Slides.forEach(function(m){var g=fc(m.container||m.slide,"img");g&&g.src&&f(p,g,m)})}function f(p,m,g){g.style("background",p?'center/cover no-repeat url("'+m.src+'")':"",!0),Gl(m,p?"none":"")}return{mount:c,destroy:nt(u,!1)}}var WN=10,HN=600,VN=.6,YN=1.5,GN=800;function qN(a,t,n){var i=bt(a),s=i.on,c=i.emit,u=a.state.set,f=t.Move,p=f.getPosition,m=f.getLimit,g=f.exceededLimit,y=f.translate,v=a.is(bo),b,k,w=1;function N(){s(Mi,j),s([Ar,Dt],P)}function C(L,B,W,D,Q){var F=p();if(j(),W&&(!v||!g())){var J=t.Layout.sliderSize(),$=ih(L)*J*su(Ur(L)/J)||0;L=f.toPosition(t.Controller.toDest(L%J))+$}var ae=O1(F,L,1);w=1,B=ae?0:B||au(Ur(L-F)/YN,GN),k=D,b=Cu(B,A,nt(S,F,L,Q),1),u(lc),c(Au),b.start()}function A(){u(vo),k&&k(),c(ws)}function S(L,B,W,D){var Q=p(),F=L+(B-L)*I(D),J=(F-Q)*w;y(Q+J),v&&!W&&g()&&(w*=VN,Ur(J)<WN&&C(m(g(!0)),HN,!1,k,!0))}function j(){b&&b.cancel()}function P(){b&&!b.isPaused()&&(j(),A())}function I(L){var B=n.easingFunc;return B?B(L):1-Math.pow(1-L,4)}return{mount:N,destroy:j,scroll:C,cancel:P}}var Zs={passive:!1,capture:!0};function XN(a,t,n){var i=bt(a),s=i.on,c=i.emit,u=i.bind,f=i.unbind,p=a.state,m=t.Move,g=t.Scroll,y=t.Controller,v=t.Elements.track,b=t.Media.reduce,k=t.Direction,w=k.resolve,N=k.orient,C=m.getPosition,A=m.exceededLimit,S,j,P,I,L,B=!1,W,D,Q;function F(){u(v,Lp,rh,Zs),u(v,zp,rh,Zs),u(v,cy,$,Zs),u(v,"click",ee,{capture:!0}),u(v,"dragstart",Ai),s([La,Ar],J)}function J(){var ne=n.drag;St(!ne),I=ne==="free"}function $(ne){if(W=!1,!D){var Ee=Me(ne);xe(ne.target)&&(Ee||!ne.button)&&(y.isBusy()?Ai(ne,!0):(Q=Ee?v:window,L=p.is([To,lc]),P=null,u(Q,Lp,ae,Zs),u(Q,zp,ce,Zs),m.cancel(),g.cancel(),V(ne)))}}function ae(ne){if(p.is(Wd)||(p.set(Wd),c(U1)),ne.cancelable)if(L){m.translate(S+ye(le(ne)));var Ee=ge(ne)>Kx,it=B!==(B=A());(Ee||it)&&V(ne),W=!0,c(W1),Ai(ne)}else T(ne)&&(L=E(ne),Ai(ne))}function ce(ne){p.is(Wd)&&(p.set(vo),c(H1)),L&&(X(ne),Ai(ne)),f(Q,Lp,ae),f(Q,zp,ce),L=!1}function ee(ne){!D&&W&&Ai(ne,!0)}function V(ne){P=j,j=ne,S=C()}function X(ne){var Ee=Y(ne),it=se(Ee),kt=n.rewind&&n.rewindByDrag;b(!1),I?y.scroll(it,0,n.snap):a.is(mc)?y.go(N(ih(Ee))<0?kt?"<":"-":kt?">":"+"):a.is(bo)&&B&&kt?y.go(A(!0)?">":"<"):y.go(y.toDest(it),!0),b(!0)}function E(ne){var Ee=n.dragMinThreshold,it=Wl(Ee),kt=it&&Ee.mouse||0,q=(it?Ee.touch:+Ee)||10;return Ur(le(ne))>(Me(ne)?q:kt)}function T(ne){return Ur(le(ne))>Ur(le(ne,!0))}function Y(ne){if(a.is(Ro)||!B){var Ee=ge(ne);if(Ee&&Ee<Kx)return le(ne)/Ee}return 0}function se(ne){return C()+ih(ne)*Ea(Ur(ne)*(n.flickPower||600),I?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function le(ne,Ee){return ue(ne,Ee)-ue(K(ne),Ee)}function ge(ne){return nh(ne)-nh(K(ne))}function K(ne){return j===ne&&P||j}function ue(ne,Ee){return(Me(ne)?ne.changedTouches[0]:ne)["page"+w(Ee?"Y":"X")]}function ye(ne){return ne/(B&&a.is(bo)?SN:1)}function xe(ne){var Ee=n.noDrag;return!Hl(ne,"."+iy+", ."+Ou)&&(!Ee||!Hl(ne,Ee))}function Me(ne){return typeof TouchEvent<"u"&&ne instanceof TouchEvent}function wt(){return L}function St(ne){D=ne}return{mount:F,disable:St,isDragging:wt}}var QN={Spacebar:" ",Right:Ru,Left:Pu,Up:J1,Down:Z1};function lm(a){return a=ja(a)?a:a.key,QN[a]||a}var Jx="keydown";function KN(a,t,n){var i=bt(a),s=i.on,c=i.bind,u=i.unbind,f=a.root,p=t.Direction.resolve,m,g;function y(){v(),s(Ar,b),s(Ar,v),s(Mi,w)}function v(){var C=n.keyboard;C&&(m=C==="global"?window:f,c(m,Jx,N))}function b(){u(m,Jx)}function k(C){g=C}function w(){var C=g;g=!0,A1(function(){g=C})}function N(C){if(!g){var A=lm(C);A===p(Pu)?a.go("<"):A===p(Ru)&&a.go(">")}}return{mount:y,destroy:b,disable:k}}var Sl=Kh+"-lazy",Yd=Sl+"-srcset",JN="["+Sl+"], ["+Yd+"]";function ZN(a,t,n){var i=bt(a),s=i.on,c=i.off,u=i.bind,f=i.emit,p=n.lazyLoad==="sequential",m=[Po,ws],g=[];function y(){n.lazyLoad&&(v(),s(Dt,v))}function v(){Ii(g),b(),p?C():(c(m),s(m,k),k())}function b(){t.Slides.forEach(function(A){Qh(A.slide,JN).forEach(function(S){var j=Qn(S,Sl),P=Qn(S,Yd);if(j!==S.src||P!==S.srcset){var I=n.classes.spinner,L=S.parentElement,B=fc(L,"."+I)||oo("span",I,L);g.push([S,A,B]),S.src||Gl(S,"none")}})})}function k(){g=g.filter(function(A){var S=n.perPage*((n.preloadPages||1)+1)-1;return A[1].isWithin(a.index,S)?w(A):!0}),g.length||c(m)}function w(A){var S=A[0];fi(A[1].slide,lh),u(S,"load error",nt(N,A)),ze(S,"src",Qn(S,Sl)),ze(S,"srcset",Qn(S,Yd)),pi(S,Sl),pi(S,Yd)}function N(A,S){var j=A[0],P=A[1];Ri(P.slide,lh),S.type!=="error"&&(gs(A[2]),Gl(j,""),f(nm,j,P),f(yo)),p&&C()}function C(){g.length&&w(g.shift())}return{mount:y,destroy:nt(Ii,g),check:k}}function $N(a,t,n){var i=bt(a),s=i.on,c=i.emit,u=i.bind,f=t.Slides,p=t.Elements,m=t.Controller,g=m.hasFocus,y=m.getIndex,v=m.go,b=t.Direction.resolve,k=p.pagination,w=[],N,C;function A(){S(),s([Ar,Dt,ou],A);var D=n.pagination;k&&Gl(k,D?"":"none"),D&&(s([Mi,Au,ws],W),j(),W(),c(G1,{list:N,items:w},B(a.index)))}function S(){N&&(gs(k?Ra(N.children):N),Ri(N,C),Ii(w),N=null),i.destroy()}function j(){var D=a.length,Q=n.classes,F=n.i18n,J=n.perPage,$=g()?m.getEnd()+1:ql(D/J);N=k||oo("ul",Q.pagination,p.track.parentElement),fi(N,C=Iu+"--"+L()),ze(N,zi,"tablist"),ze(N,An,F.select),ze(N,am,L()===Lu?"vertical":"");for(var ae=0;ae<$;ae++){var ce=oo("li",null,N),ee=oo("button",{class:Q.page,type:"button"},ce),V=f.getIn(ae).map(function(E){return E.slide.id}),X=!g()&&J>1?F.pageX:F.slideX;u(ee,"click",nt(P,ae)),n.paginationKeyboard&&u(ee,"keydown",nt(I,ae)),ze(ce,zi,"presentation"),ze(ee,zi,"tab"),ze(ee,hc,V.join(" ")),ze(ee,An,ah(X,ae+1)),ze(ee,lo,-1),w.push({li:ce,button:ee,page:ae})}}function P(D){v(">"+D,!0)}function I(D,Q){var F=w.length,J=lm(Q),$=L(),ae=-1;J===b(Ru,!1,$)?ae=++D%F:J===b(Pu,!1,$)?ae=(--D+F)%F:J==="Home"?ae=0:J==="End"&&(ae=F-1);var ce=w[ae];ce&&(R1(ce.button),v(">"+ae),Ai(Q,!0))}function L(){return n.paginationDirection||n.direction}function B(D){return w[m.toPage(D)]}function W(){var D=B(y(!0)),Q=B(y());if(D){var F=D.button;Ri(F,xs),pi(F,Yx),ze(F,lo,-1)}if(Q){var J=Q.button;fi(J,xs),ze(J,Yx,!0),ze(J,lo,"")}c(q1,{list:N,items:w},D,Q)}return{items:w,mount:A,destroy:S,getAt:B,update:W}}var ej=[" ","Enter"];function tj(a,t,n){var i=n.isNavigation,s=n.slideFocus,c=[];function u(){a.splides.forEach(function(k){k.isParent||(m(a,k.splide),m(k.splide,a))}),i&&g()}function f(){c.forEach(function(k){k.destroy()}),Ii(c)}function p(){f(),u()}function m(k,w){var N=bt(k);N.on(Mi,function(C,A,S){w.go(w.is(Ro)?S:C)}),c.push(N)}function g(){var k=bt(a),w=k.on;w(Zh,v),w(Q1,b),w([La,Ar],y),c.push(k),k.emit(em,a.splides)}function y(){ze(t.Elements.list,am,n.direction===Lu?"vertical":"")}function v(k){a.go(k.index)}function b(k,w){qh(ej,lm(w))&&(v(k),Ai(w))}return{setup:nt(t.Media.set,{slideFocus:cc(s)?i:s},!0),mount:u,destroy:f,remount:p}}function rj(a,t,n){var i=bt(a),s=i.bind,c=0;function u(){n.wheel&&s(t.Elements.track,"wheel",f,Zs)}function f(m){if(m.cancelable){var g=m.deltaY,y=g<0,v=nh(m),b=n.wheelMinThreshold||0,k=n.wheelSleep||0;Ur(g)>b&&v-c>k&&(a.go(y?"<":">"),c=v),p(y)&&Ai(m)}}function p(m){return!n.releaseWheel||a.state.is(To)||t.Controller.getAdjacent(m)!==-1}return{mount:u}}var nj=90;function ij(a,t,n){var i=bt(a),s=i.on,c=t.Elements.track,u=n.live&&!n.isNavigation,f=oo("span",kN),p=Cu(nj,nt(g,!1));function m(){u&&(v(!t.Autoplay.isPaused()),ze(c,Xx,!0),f.textContent="…",s(tm,nt(v,!0)),s(rm,nt(v,!1)),s([Po,ws],nt(g,!0)))}function g(b){ze(c,qx,b),b?(uc(c,f),p.start()):(gs(f),p.cancel())}function y(){pi(c,[Gx,Xx,qx]),gs(f)}function v(b){u&&ze(c,Gx,b?"off":"polite")}return{mount:m,disable:v,destroy:y}}var aj=Object.freeze({__proto__:null,Media:pN,Direction:hN,Elements:AN,Slides:TN,Layout:PN,Clones:LN,Move:zN,Controller:ON,Arrows:FN,Autoplay:BN,Cover:UN,Scroll:qN,Drag:XN,Keyboard:KN,LazyLoad:ZN,Pagination:$N,Sync:tj,Wheel:rj,Live:ij}),sj={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},oj={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:jN,i18n:sj,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function lj(a,t,n){var i=t.Slides;function s(){bt(a).on([La,Dt],c)}function c(){i.forEach(function(f){f.style("transform","translateX(-"+100*f.index+"%)")})}function u(f,p){i.style("transition","opacity "+n.speed+"ms "+n.easing),A1(p)}return{mount:s,start:u,cancel:rh}}function cj(a,t,n){var i=t.Move,s=t.Controller,c=t.Scroll,u=t.Elements.list,f=nt(qn,u,"transition"),p;function m(){bt(a).bind(u,"transitionend",function(b){b.target===u&&p&&(y(),p())})}function g(b,k){var w=i.toPosition(b,!0),N=i.getPosition(),C=v(b);Ur(w-N)>=1&&C>=1?n.useScroll?c.scroll(w,C,!1,k):(f("transform "+C+"ms "+n.easing),i.translate(w,!0),p=k):(i.jump(b),k())}function y(){f(""),c.cancel()}function v(b){var k=n.rewindSpeed;if(a.is(bo)&&k){var w=s.getIndex(!0),N=s.getEnd();if(w===0&&b>=N||w>=N&&b===0)return k}return n.speed}return{mount:m,start:g,cancel:y}}var dj=(function(){function a(n,i){this.event=bt(),this.Components={},this.state=uN(to),this.splides=[],this._o={},this._E={};var s=ja(n)?z1(document,n):n;El(s,s+" is invalid."),this.root=s,i=ma({label:Qn(s,An)||"",labelledby:Qn(s,im)||""},oj,a.defaults,i||{});try{ma(i,JSON.parse(Qn(s,Kh)))}catch{El(!1,"Invalid JSON")}this._o=Object.create(ma({},i))}var t=a.prototype;return t.mount=function(i,s){var c=this,u=this.state,f=this.Components;El(u.is([to,iu]),"Already mounted!"),u.set(to),this._C=f,this._T=s||this._T||(this.is(mc)?lj:cj),this._E=i||this._E;var p=Yl({},aj,this._E,{Transition:this._T});return ls(p,function(m,g){var y=m(c,f,c._o);f[g]=y,y.setup&&y.setup()}),ls(f,function(m){m.mount&&m.mount()}),this.emit(La),fi(this.root,_N),u.set(vo),this.emit(sh),this},t.sync=function(i){return this.splides.push({splide:i}),i.splides.push({splide:this,isParent:!0}),this.state.is(vo)&&(this._C.Sync.remount(),i.Components.Sync.remount()),this},t.go=function(i){return this._C.Controller.go(i),this},t.on=function(i,s){return this.event.on(i,s),this},t.off=function(i){return this.event.off(i),this},t.emit=function(i){var s;return(s=this.event).emit.apply(s,[i].concat(Ra(arguments,1))),this},t.add=function(i,s){return this._C.Slides.add(i,s),this},t.remove=function(i){return this._C.Slides.remove(i),this},t.is=function(i){return this._o.type===i},t.refresh=function(){return this.emit(Dt),this},t.destroy=function(i){i===void 0&&(i=!0);var s=this.event,c=this.state;return c.is(to)?bt(this).on(sh,this.destroy.bind(this,i)):(ls(this._C,function(u){u.destroy&&u.destroy(i)},!0),s.emit($h),s.destroy(),i&&Ii(this.splides),c.set(iu)),this},sN(a,[{key:"options",get:function(){return this._o},set:function(i){this._C.Media.set(i,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),a})(),cm=dj;cm.defaults={};cm.STATES=lN;var Zx=[[La,"onMounted"],[sh,"onReady"],[Mi,"onMove"],[Po,"onMoved"],[Zh,"onClick"],[M1,"onActive"],[F1,"onInactive"],[D1,"onVisible"],[B1,"onHidden"],[Dt,"onRefresh"],[Ar,"onUpdated"],[yo,"onResize"],[Su,"onResized"],[U1,"onDrag"],[W1,"onDragging"],[H1,"onDragged"],[Au,"onScroll"],[ws,"onScrolled"],[$h,"onDestroy"],[V1,"onArrowsMounted"],[Y1,"onArrowsUpdated"],[G1,"onPaginationMounted"],[q1,"onPaginationUpdated"],[em,"onNavigationMounted"],[tm,"onAutoplayPlay"],[X1,"onAutoplayPlaying"],[rm,"onAutoplayPause"],[nm,"onLazyLoadLoaded"]];function dm(...a){return a.filter(Boolean).join(" ")}function lu(a){return a!==null&&typeof a=="object"}function ch(a,t){if(Array.isArray(a)&&Array.isArray(t))return a.length===t.length&&!a.some((n,i)=>!ch(n,t[i]));if(lu(a)&&lu(t)){const n=Object.keys(a),i=Object.keys(t);return n.length===i.length&&!n.some(s=>!Object.prototype.hasOwnProperty.call(t,s)||!ch(a[s],t[s]))}return a===t}function uj(a,t){return a.length===t.length&&!a.some((n,i)=>n!==t[i])}function fj(a,t){if(a){const n=Object.keys(a);for(let i=0;i<n.length;i++){const s=n[i];if(s!=="__proto__"&&t(a[s],s)===!1)break}}return a}function dh(a,t){const n=a;return fj(t,(i,s)=>{Array.isArray(i)?n[s]=i.slice():lu(i)?n[s]=dh(lu(n[s])?n[s]:{},i):n[s]=i}),n}var pj=({children:a,className:t,...n})=>pa.createElement("div",{className:dm("splide__track",t),...n},pa.createElement("ul",{className:"splide__list"},a)),hj=class extends pa.Component{constructor(){super(...arguments),this.splideRef=pa.createRef(),this.slides=[]}componentDidMount(){const{options:a,extensions:t,transition:n}=this.props,{current:i}=this.splideRef;i&&(this.splide=new cm(i,a),this.bind(this.splide),this.splide.mount(t,n),this.options=dh({},a||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:a}=this.props;a&&!ch(this.options,a)&&(this.splide.options=a,this.options=dh({},a));const t=this.getSlides();uj(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(a){var t;(t=this.splide)==null||t.sync(a)}go(a){var t;(t=this.splide)==null||t.go(a)}getSlides(){var a;if(this.splide){const t=(a=this.splide.Components.Elements)==null?void 0:a.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(a){Zx.forEach(([t,n])=>{const i=this.props[n];typeof i=="function"&&a.on(t,(...s)=>{i(a,...s)})})}omit(a,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(a,n)&&delete a[n]}),a}render(){const{className:a,tag:t="div",hasTrack:n=!0,children:i,...s}=this.props;return pa.createElement(t,{className:dm("splide",a),ref:this.splideRef,...this.omit(s,["options",...Zx.map(c=>c[1])])},n?pa.createElement(pj,null,i):i)}},mj=({children:a,className:t,...n})=>pa.createElement("li",{className:dm("splide__slide",t),...n},a);function gj(a){a.length=0}function um(a,t,n){return Array.prototype.slice.call(a,t,n)}function Mu(a){return a.bind.apply(a,[null].concat(um(arguments,1)))}function $x(a){return requestAnimationFrame(a)}function fm(a,t){return typeof t===a}var dy=Array.isArray;Mu(fm,"function");Mu(fm,"string");Mu(fm,"undefined");function uy(a){return dy(a)?a:[a]}function ev(a,t){uy(a).forEach(t)}var xj=Object.keys;function vj(a,t,n){if(a){var i=xj(a);i=i;for(var s=0;s<i.length;s++){var c=i[s];if(c!=="__proto__"&&t(a[c],c)===!1)break}}return a}function yj(a){return um(arguments,1).forEach(function(t){vj(t,function(n,i){a[i]=t[i]})}),a}var bj=Math.min;function wj(){var a=[];function t(u,f,p,m){s(u,f,function(g,y,v){var b="addEventListener"in g,k=b?g.removeEventListener.bind(g,y,p,m):g.removeListener.bind(g,p);b?g.addEventListener(y,p,m):g.addListener(p),a.push([g,y,v,p,k])})}function n(u,f,p){s(u,f,function(m,g,y){a=a.filter(function(v){return v[0]===m&&v[1]===g&&v[2]===y&&(!p||v[3]===p)?(v[4](),!1):!0})})}function i(u,f,p){var m,g=!0;return typeof CustomEvent=="function"?m=new CustomEvent(f,{bubbles:g,detail:p}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(f,g,!1,p)),u.dispatchEvent(m),m}function s(u,f,p){ev(u,function(m){m&&ev(f,function(g){g.split(" ").forEach(function(y){var v=y.split(".");p(m,v[0],v[1])})})})}function c(){a.forEach(function(u){u[4]()}),gj(a)}return{bind:t,unbind:n,dispatch:i,destroy:c}}var tv="move",rv="moved",kj="updated",nv="drag",_j="dragged",iv="scroll",av="scrolled",Nj="destroy";function jj(a){var t=a?a.event.bus:document.createDocumentFragment(),n=wj();function i(c,u){n.bind(t,uy(c).join(" "),function(f){u.apply(u,dy(f.detail)?f.detail:[])})}function s(c){n.dispatch(t,c,um(arguments,1))}return a&&a.event.on(Nj,n.destroy),yj(n,{bus:t,on:i,off:Mu(n.unbind,t),emit:s})}function fy(a,t,n,i){var s=Date.now,c,u=0,f,p=!0,m=0;function g(){if(!p){if(u=a?bj((s()-c)/a,1):1,n&&n(u),u>=1&&(t(),c=s(),i&&++m>=i))return v();$x(g)}}function y(C){!C&&k(),c=s()-(C?u*a:0),p=!1,$x(g)}function v(){p=!0}function b(){c=s(),u=0,n&&n(u)}function k(){f&&cancelAnimationFrame(f),u=0,f=0,p=!0}function w(C){a=C}function N(){return p}return{start:y,rewind:b,pause:v,cancel:k,set:w,isPaused:N}}function Ej(a,t){var n;function i(){n||(n=fy(t,function(){a(),n=null},null,1),n.start())}return i}var Sj="is-active",Aj="slide",Cj="fade";function py(a,t,n){return Array.prototype.slice.call(a,t,n)}function pm(a){return a.bind(null,...py(arguments,1))}function Fu(a,t){return typeof t===a}function uh(a){return!hy(a)&&Fu("object",a)}const Tj=Array.isArray;pm(Fu,"function");pm(Fu,"string");const Pj=pm(Fu,"undefined");function hy(a){return a===null}function Rj(a){return Tj(a)?a:[a]}function cu(a,t){Rj(a).forEach(t)}function Lj(a,t,n){a&&cu(t,i=>{i&&a.classList[n?"add":"remove"](i)})}const zj=Object.keys;function my(a,t,n){if(a){let i=zj(a);i=i;for(let s=0;s<i.length;s++){const c=i[s];if(c!=="__proto__"&&t(a[c],c)===!1)break}}return a}function sv(a){return py(arguments,1).forEach(t=>{my(t,(n,i)=>{a[i]=t[i]})}),a}function Oj(a,t){cu(a,n=>{cu(t,i=>{n&&n.removeAttribute(i)})})}function gy(a,t,n){uh(t)?my(t,(i,s)=>{gy(a,s,i)}):cu(a,i=>{hy(n)||n===""?Oj(i,t):i.setAttribute(t,String(n))})}const{min:ov,max:lv}=Math;function Ij(a,t,n){const i=ov(t,n),s=lv(t,n);return ov(lv(i,a),s)}const Mj={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},Fj={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Dj(a,t,n){const{on:i,off:s,bind:c,unbind:u}=jj(a),{translate:f,getPosition:p,toIndex:m,getLimit:g}=t.Move,{setIndex:y,getIndex:v}=t.Controller,{orient:b}=t.Direction,{toggle:k}=t.Elements,{Live:w}=t,{root:N}=a,C=Ej(t.Arrows.update,500);let A={},S,j,P,I,L,B;function W(){const{autoScroll:se}=n;A=sv({},Mj,uh(se)?se:{})}function D(){a.is(Cj)||!S&&n.autoScroll!==!1&&(S=fy(0,V),F(),$())}function Q(){S&&(S.cancel(),S=null,B=void 0,s([tv,nv,iv,rv,av]),u(N,"mouseenter mouseleave focusin focusout"),u(k,"click"))}function F(){A.pauseOnHover&&c(N,"mouseenter mouseleave",se=>{P=se.type==="mouseenter",ee()}),A.pauseOnFocus&&c(N,"focusin focusout",se=>{I=se.type==="focusin",ee()}),A.useToggleButton&&c(k,"click",()=>{j?ae():ce()}),i(kj,J),i([tv,nv,iv],()=>{L=!0,ce(!1)}),i([rv,_j,av],()=>{L=!1,ee()})}function J(){const{autoScroll:se}=n;se!==!1?(A=sv({},A,uh(se)?se:{}),D()):Q(),S&&!Pj(B)&&f(B)}function $(){A.autoStart&&(document.readyState==="complete"?ae():c(window,"load",ae))}function ae(){Y()&&(S.start(!0),w.disable(!0),I=P=j=!1,T())}function ce(se=!0){j||(j=se,T(),Y()||(S.pause(),w.disable(!1)))}function ee(){j||(P||I||L?ce(!1):ae())}function V(){const se=p(),le=X(se);se!==le?(f(le),E(B=p())):(ce(!1),A.rewind&&a.go(A.speed>0?0:t.Controller.getEnd())),C()}function X(se){const le=A.speed||1;return se+=b(le),a.is(Aj)&&(se=Ij(se,g(!1),g(!0))),se}function E(se){const{length:le}=a,ge=(m(se)+le)%le;ge!==v()&&(y(ge),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function T(){if(k){const se=j?"startScroll":"pauseScroll";Lj(k,Sj,!j),gy(k,"aria-label",n.i18n[se]||Fj[se])}}function Y(){return!S||S.isPaused()}return{setup:W,mount:D,destroy:Q,play:ae,pause:ce,isPaused:Y}}const xy=z.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:ft("rounded-xl border bg-card text-card-foreground shadow",a),...t}));xy.displayName="Card";const Bj=z.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:ft("flex flex-col space-y-1.5 p-6",a),...t}));Bj.displayName="CardHeader";const Uj=z.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:ft("font-semibold leading-none tracking-tight",a),...t}));Uj.displayName="CardTitle";const Wj=z.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:ft("text-sm text-muted-foreground",a),...t}));Wj.displayName="CardDescription";const vy=z.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:ft("p-6 pt-0",a),...t}));vy.displayName="CardContent";const Hj=z.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:ft("flex items-center p-6 pt-0",a),...t}));Hj.displayName="CardFooter";const Vj=({title:a,image:t,className:n,showOverlay:i=!1})=>{const s=u=>{const f=u.currentTarget,p=f.getBoundingClientRect(),m=((u.clientX-p.left)/p.width-.5)*20,g=((u.clientY-p.top)/p.height-.5)*20;f.style.setProperty("--pointer-shift-x",`${m}px`),f.style.setProperty("--pointer-shift-y",`${g}px`),f.style.setProperty("--tilt-x",`${(-g/2).toFixed(2)}deg`),f.style.setProperty("--tilt-y",`${(m/2).toFixed(2)}deg`)},c=u=>{u.currentTarget.style.setProperty("--pointer-shift-x","0px"),u.currentTarget.style.setProperty("--pointer-shift-y","0px"),u.currentTarget.style.setProperty("--tilt-x","0deg"),u.currentTarget.style.setProperty("--tilt-y","0deg")};return o.jsx(xy,{onPointerMove:s,onPointerLeave:c,className:ft("portfolio-card group relative overflow-hidden rounded-[clamp(0.5rem,1.7vw,1.25rem)] border-0 bg-transparent shadow-none",n),children:o.jsxs(vy,{className:"size-full p-0",children:[o.jsxs("div",{className:"portfolio-media",children:[o.jsx("img",{className:"portfolio-image",alt:a||"Portfolio case",src:t,loading:"lazy"}),o.jsx("div",{className:"portfolio-ink-overlay","aria-hidden":"true"})]}),i&&a&&o.jsx("div",{className:"portfolio-card-overlay absolute inset-0 flex items-end rounded-[clamp(0.5rem,1.7vw,1.25rem)] px-[clamp(0.5rem,1.5vw,1.25rem)] pb-[clamp(1.5rem,3vw,2.75rem)] pt-[clamp(0.5rem,1.5vw,1.25rem)]",children:o.jsx(Sn,{to:"/portfolio",className:"mr-20 flex w-full items-center justify-between gap-3 text-left font-medium text-white transition-colors hover:text-[#e1de00]",children:o.jsx("span",{className:"max-w-[calc(100%-3rem)] text-[clamp(0.55rem,1.5vw,1.125rem)] leading-tight",style:{textShadow:"0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 10px rgba(0, 0, 0, 0.75)"},children:a})})})]})})},Yj=`
  .portfolio-carousel {
    position: relative;
    width: 100%;
    /* padding: 30px 0; */
    margin-bottom: -84px;
    perspective: 1200px;
    perspective-origin: 50% 50%;
  }

  .portfolio-section__clip-defs {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .portfolio-carousel .splide {
    overflow: visible;
  }

  .portfolio-carousel .splide__track {
    overflow: visible;
    clip-path: var(--portfolio-clip-path);
  }

  .portfolio-carousel .splide__list {
    align-items: center;
    transform-style: preserve-3d;
  }

  .portfolio-carousel .splide__slide {
    height: auto;
    opacity: 1;
    transform: translateY(-55px) scale(0.88);
    transform-origin: center center;
  }

  .portfolio-carousel .portfolio-card-overlay {
    background: none !important;
  }

  .portfolio-carousel .portfolio-card,
  .portfolio-carousel .portfolio-card:hover {
    box-shadow: none !important;
  }

  .portfolio-carousel .portfolio-card,
  .portfolio-carousel .portfolio-media,
  .portfolio-carousel .portfolio-card-overlay {
    border-radius: 0 !important;
  }

  @media (max-width: 1100px) {
    .portfolio-carousel {
      margin-bottom: -71px;
    }
    .portfolio-carousel .splide__track {
      clip-path: var(--portfolio-clip-path-tablet);
    }
    .portfolio-carousel .splide__slide {
      transform: translateY(-45px) scale(0.88);
    }
  }

  @media (max-width: 700px) {
    .portfolio-carousel {
      margin-bottom: -34px;
    }
    .portfolio-carousel .splide__track {
      clip-path: var(--portfolio-clip-path-mobile);
    }
    .portfolio-carousel .splide__slide {
      transform: translateY(-20px) scale(0.9);
    }
  }
`,Gj=()=>{const a=z.useId().replaceAll(":",""),t=z.useRef(null);return o.jsxs("section",{className:"portfolio-section relative z-10 w-full overflow-hidden py-16 md:py-20",children:[o.jsx("style",{children:Yj}),o.jsx("svg",{className:"portfolio-section__clip-defs","aria-hidden":"true",focusable:"false",children:o.jsxs("defs",{children:[o.jsx("clipPath",{id:`${a}-desktop`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .22 1 0 L1 .86 Q.5 .70 0 .86Z"})}),o.jsx("clipPath",{id:`${a}-tablet`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .17 1 0 L1 .92 Q.5 .75 0 .92Z"})}),o.jsx("clipPath",{id:`${a}-mobile`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .10 1 0 L1 .96 Q.5 .86 0 .96Z"})})]})}),o.jsxs("header",{className:"mx-auto mb-1 flex max-w-[760px] flex-col items-center px-4 text-center sm:px-6 md:mb-1",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"Portfolio"})]}),o.jsxs("h2",{className:"mt-2 whitespace-nowrap font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]",style:{fontFamily:"'Lato', sans-serif"},children:[o.jsx("span",{className:"text-white",children:"Our"})," ",o.jsx("span",{className:"text-[#92d1bc]",children:"Latest Cases"})]})]}),o.jsx("div",{className:"portfolio-carousel","aria-label":"Latest cases",style:{"--portfolio-clip-path":`url(#${a}-desktop)`,"--portfolio-clip-path-tablet":`url(#${a}-tablet)`,"--portfolio-clip-path-mobile":`url(#${a}-mobile)`},children:o.jsx(hj,{ref:t,extensions:{AutoScroll:Dj},options:{type:"loop",autoScroll:{speed:3,pauseOnHover:!1,pauseOnFocus:!1},perPage:3,perMove:1,focus:"center",fixedWidth:"430px",gap:"-2.8rem",padding:{left:"calc((100% - 430px) / 2)",right:"calc((100% - 430px) / 2)"},drag:!0,snap:!1,keyboard:"focused",pagination:!1,arrows:!1,breakpoints:{1100:{perPage:2,fixedWidth:"380px",gap:"-2.75rem",padding:{left:"calc((100% - 380px) / 2)",right:"calc((100% - 380px) / 2)"}},700:{perPage:1,fixedWidth:"78vw",gap:"-1.5rem",padding:{left:"11vw",right:"11vw"}}}},children:A_.map((n,i)=>o.jsx(mj,{children:o.jsx(Vj,{title:n.title,image:n.image,showOverlay:!0,className:"h-[280px] w-full min-[701px]:h-[440px] min-[1101px]:h-[480px]"})},n.title??i))})}),o.jsx("div",{className:"mt-10 flex justify-center sm:mt-12 min-[701px]:mt-14 min-[1101px]:mt-0",children:o.jsxs(Ft,{to:"/portfolio",className:"px-6 py-3 text-sm font-semibold",children:["View All Cases",o.jsx(Dh,{className:"h-4 w-4 -rotate-90"})]})})]})},qj="/boltfaredeal/assets/Halftone%20Globe%20Handshake%20Emblem-CN4BoFM5.png",ml=[{number:"01",title:"Understand & Plan",description:"We understand your requirements, budget and specifications to plan the right solution.",image:"https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Creative planning workspace with color samples",position:"one",side:"left"},{number:"02",title:"Design & Prepare",description:"Our team works on artwork, material selection and a process checklist to ensure every detail is ready for production.",image:"https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Colorful artwork on a desktop monitor",position:"two",side:"right"},{number:"03",title:"Print & Produce",description:"Using advanced printing technology, we produce with precision, maintaining high quality at every stage.",image:"https://images.pexels.com/photos/33952994/pexels-photo-33952994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Close view of vivid printing material",position:"three",side:"right"},{number:"04",title:"Finish & Deliver",description:"Final finishing, quality checks and secure packaging ensure timely delivery to your location.",image:"https://images.pexels.com/photos/11356987/pexels-photo-11356987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Packed boxes ready for delivery",position:"four",side:"left"}],fh=900,Xj=`
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=IBM+Plex+Mono:wght@400;500&display=swap");

.hww {
  --bg: #050607;
  --gold: #e8d733;
  --gold-dim: #8a8226;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  height: 200vh;
  background: var(--bg);
  color: #fbfbfb;
  font-family: "Lato", system-ui, sans-serif;
}

/* ---------- Sticky stage ---------- */
.hww-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  background:
    radial-gradient(60% 55% at 50% 52%, rgba(24, 70, 78, 0.18), transparent 70%),
    var(--bg);
}
.hww-stage::before {
  /* faint centre line */
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(232, 215, 51, 0.14) 30%, rgba(232, 215, 51, 0.14) 70%, transparent);
  pointer-events: none;
}

/* ---------- Heading ---------- */
.hww-heading {
  position: absolute;
  top: 5vh;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
}
.hww-title-row {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hww-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
  white-space: nowrap;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f7d51d;
  opacity: 0;
  transition: opacity 1s var(--ease) 0.2s;
}
.hww-eyebrow::before {
  content: "";
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: #f7d51d;
}
.hww-title {
  margin: 0;
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: #fff;
}
.hww-word:nth-child(2) { color: #92e3c3; }
.hww-word {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  padding: 0 0.05em 0.16em;
  margin-bottom: -0.16em;
}
.hww-word > span {
  display: inline-block;
  transform: translateY(108%);
  transition: transform 1.1s var(--ease);
}
.hww-word:nth-child(2) > span { transition-delay: 0.12s; }
.hww-sub {
  margin: 10px 0 0;
  max-width: 300px;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(251, 251, 251, 0.62);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.9s var(--ease) 0.5s, transform 0.9s var(--ease) 0.5s;
}

/* ---------- Globe ---------- */
.hww-globe {
  position: absolute;
  left: 50%;
  top: 52%;
  z-index: 1;
  width: clamp(240px, 50svh, 520px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}
.hww-globe-inner {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.82);
  transition: opacity 1.2s var(--ease) 0.3s, transform 1.4s var(--ease) 0.3s;
}
.hww-tilt {
  position: absolute;
  inset: 0;
  transform: rotate(var(--tilt, 0deg));
  transition: transform 1.4s var(--ease);
}
.hww-glow {
  position: absolute;
  inset: -22%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(36, 200, 190, 0.24) 0%, rgba(20, 90, 140, 0.1) 40%, transparent 66%);
  animation: hww-breathe 6s ease-in-out infinite;
}
.hww-globe-art {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 36px rgba(30, 150, 255, 0.28));
  animation: hww-float 9s ease-in-out infinite;
}
.hww-orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(232, 215, 51, 0.2);
  pointer-events: none;
}
.hww-orbit::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 12px 2px rgba(232, 215, 51, 0.55);
}
.hww-orbit.one   { inset: -14%; animation: hww-spin 70s linear infinite; }
.hww-orbit.one::after { top: 8%; left: 21%; }
.hww-orbit.two   { inset: -20% -26%; border-color: rgba(232, 215, 51, 0.12); animation: hww-spin 110s linear infinite reverse; }
.hww-orbit.two::after { top: 20%; left: 2%; width: 7px; height: 7px; }
.hww-orbit.three { inset: -8% -2%; border-color: rgba(232, 215, 51, 0.1); animation: hww-spin 90s linear infinite; }
.hww-orbit.three::after { bottom: 14%; right: 12%; }
.hww-fallback { width: 100%; height: 100%; }

/* ---------- Steps ---------- */
.hww-step {
  --num: #8fe0a4;
  --title: rgba(255, 255, 255, 0.82);
  --desc: #c5c5c5;
  --rule: rgba(138, 130, 38, 0.6);
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 26px;
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
  transition-delay: calc(0.5s + var(--i) * 0.12s);
}
.hww-step.is-active {
  --title: var(--gold);
  --desc: #d6d6d6;
  --rule: var(--gold);
}
.hww-copy {
  transition: transform 0.6s var(--ease);
  transform-origin: left top;
}
.hww-step.is-active .hww-copy { transform: scale(1.04); }
.hww-step.pos-two .hww-copy,
.hww-step.pos-three .hww-copy { transform-origin: right top; }
.hww-step.pos-one   { top: 23%;    left: 7%;  }
.hww-step.pos-four  { bottom: 14%; left: 7%;  }
.hww-step.pos-two   { top: 23%;    right: 7%; flex-direction: row-reverse; text-align: right; }
.hww-step.pos-three { bottom: 14%; right: 7%; flex-direction: row-reverse; text-align: right; }
.hww-step.pos-one, .hww-step.pos-four { --num: #8fe0a4; }
.hww-step.pos-two, .hww-step.pos-three { --num: #42d8d2; }

.hww-copy { width: 272px; }
.hww-num {
  display: block;
  font-size: clamp(2.8rem, 4.2vw, 4.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: var(--num);
  transition: color 0.6s ease;
}
.hww-step-title {
  margin: 6px 0 0;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--title);
  transition: color 0.6s ease, font-size 0.6s var(--ease), font-weight 0.6s ease;
}
.hww-step.is-active .hww-step-title {
  font-size: 1.55rem;
  font-weight: 700;
  color: #fff;
}
.hww-rule {
  width: 108px;
  height: 1px;
  margin: 12px 0 14px;
  background: var(--rule);
  transform-origin: left center;
  transition: background 0.6s ease, transform 0.8s var(--ease);
  transform: scaleX(0.45);
}
.hww-step.is-active .hww-rule {
  transform: scaleX(1);
  background: linear-gradient(90deg, var(--gold) 25%, #fff3a1 50%, var(--gold) 75%);
  background-size: 200% 100%;
  animation: hww-active-rule 2.4s ease-in-out infinite;
}
.pos-two .hww-rule, .pos-three .hww-rule { margin-left: auto; transform-origin: right center; }
.hww-desc {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--desc);
  transition: color 0.6s ease;
}

/* image circle */
.hww-thumb {
  position: relative;
  flex: none;
  width: 104px;
  height: 104px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: none;
  cursor: pointer;
}
/*
.hww-thumb::before {
  content: "";
  position: absolute;
  inset: -9px;
  border-radius: 50%;
  border: 1px solid rgba(232, 215, 51, 0.18);
  transition: border-color 0.6s ease, transform 0.8s var(--ease);
}
.hww-step.is-active .hww-thumb::before {
  border-color: rgba(232, 215, 51, 0.5);
  transform: scale(1.04);
}
*/
.hww-thumb img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  /* border: 2px solid var(--gold-dim); */
  filter: grayscale(1) brightness(0.55);
  transform: scale(0.94);
  transition: filter 0.7s ease, transform 0.8s var(--ease), border-color 0.6s ease;
}
.hww-step.is-active .hww-thumb img {
  filter: none;
  transform: scale(1);
  /* border-color: var(--gold); */
}
.hww-node {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border-radius: 50%;
  background: var(--gold-dim);
  box-shadow: 0 0 0 3px var(--bg);
  transition: background 0.5s ease, box-shadow 0.5s ease;
}
.pos-one .hww-node, .pos-four .hww-node { right: -6px; }
.pos-two .hww-node, .pos-three .hww-node { left: -6px; }
.hww-step.is-active .hww-node {
  background: var(--gold);
  box-shadow: 0 0 0 3px var(--bg), 0 0 14px 3px rgba(232, 215, 51, 0.6);
}
.hww-thumb:focus-visible { outline: 2px solid var(--gold); outline-offset: 10px; }

/* ---------- Footer bits ---------- */
.hww-status {
  position: absolute;
  left: 50%;
  bottom: 4.5vh;
  z-index: 3;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(251, 251, 251, 0.55);
  white-space: nowrap;
}
.hww-status svg { color: var(--gold); }
.hww-dots { display: inline-flex; align-items: center; gap: 6px; }
.hww-dot {
  width: 5px;
  height: 5px;
  padding: 0;
  border: 0;
  border-radius: 9999px;
  background: rgba(251, 251, 251, 0.3);
  cursor: pointer;
  transition: width 0.4s var(--ease), background 0.4s ease;
}
.hww-dot.is-current { width: 18px; background: var(--gold); }
.hww-dot:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }

.hww-foot {
  position: absolute;
  right: 7%;
  bottom: 4.5vh;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(251, 251, 251, 0.4);
}

/* ---------- Reveal state ---------- */
.hww.is-visible .hww-eyebrow { opacity: 1; }
.hww.is-visible .hww-word > span { transform: translateY(0); }
.hww.is-visible .hww-sub { opacity: 1; transform: none; }
.hww.is-visible .hww-globe-inner { opacity: 1; transform: scale(1); }
.hww.is-visible .hww-step { opacity: 1; transform: none; }

/* ---------- Keyframes ---------- */
@keyframes hww-spin    { to { transform: rotate(360deg); } }
@keyframes hww-float   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes hww-breathe { 0%, 100% { opacity: 0.75; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
@keyframes hww-active-rule {
  0%, 100% { background-position: 100% 0; }
  50% { background-position: 0 0; }
}

/* ---------- Tablet & mobile: normal flow, no pinning ---------- */
@media (max-width: ${fh}px) {
  .hww { height: auto; }
  .hww-stage { position: relative; height: auto; overflow: visible; padding: 88px 24px 64px; }
  .hww-stage::before { display: none; }
  .hww-heading { position: static; padding: 0; }
  .hww-eyebrow { margin: 0 0 4px; }
  .hww-title-row { display: flex; flex-direction: column; align-items: center; }
  .hww-globe { position: relative; left: auto; top: auto; transform: none; width: min(78vw, 360px); margin: 48px auto; }
  .hww-step-list { display: grid; gap: 40px; max-width: 520px; margin: 0 auto; }
  .hww-step,
  .hww-step.pos-one, .hww-step.pos-two, .hww-step.pos-three, .hww-step.pos-four {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    --title: var(--gold); --desc: #d6d6d6; --rule: var(--gold);
  }
  .hww-copy {
    display: grid;
    width: auto;
    flex: 1;
    grid-template-columns: max-content minmax(0, 1fr);
    column-gap: 14px;
    align-items: start;
    transform: none;
  }
  .hww-step.is-active .hww-copy { transform: none; }
  .hww-num {
    grid-column: 1;
    grid-row: 1 / span 3;
    font-size: clamp(2.1rem, 9vw, 2.75rem);
  }
  .hww-step-title { grid-column: 2; margin-top: 0; }
  .hww-rule { grid-column: 2; width: 100%; max-width: 108px; margin: 12px 0 14px; }
  .hww-desc { grid-column: 2; }
  .pos-two .hww-rule, .pos-three .hww-rule { margin-left: 0; transform-origin: left center; }
  .hww-rule { transform: none; }
  .hww-thumb { display: none; }
  .hww-thumb img { filter: none; transform: none; border-color: var(--gold); }
  .pos-one .hww-node, .pos-four .hww-node { right: auto; left: -6px; }
  .hww-status { display: none; }
  .hww-foot { position: static; justify-content: center; margin-top: 48px; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .hww *, .hww *::before, .hww *::after {
    animation: none !important;
    transition: none !important;
  }
  .hww-eyebrow, .hww-sub, .hww-step, .hww-globe-inner { opacity: 1; transform: none; }
  .hww-word > span { transform: none; }
  .hww-globe-inner { transform: none; }
}
`;function Qj(){return o.jsxs("svg",{className:"hww-fallback",viewBox:"0 0 100 100",role:"img","aria-label":"Colorful dotted globe",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"hwwShade",cx:"34%",cy:"28%",r:"76%",children:[o.jsx("stop",{offset:"0",stopColor:"#273f43"}),o.jsx("stop",{offset:"0.65",stopColor:"#071419"}),o.jsx("stop",{offset:"1",stopColor:"#020607"})]}),o.jsxs("linearGradient",{id:"hwwWaveOne",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0",stopColor:"#e9ff31"}),o.jsx("stop",{offset:"1",stopColor:"#2ddcc8"})]}),o.jsxs("linearGradient",{id:"hwwWaveTwo",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0",stopColor:"#54edff"}),o.jsx("stop",{offset:"1",stopColor:"#1165ff"})]}),o.jsx("pattern",{id:"hwwDots",width:"4",height:"4",patternUnits:"userSpaceOnUse",children:o.jsx("circle",{cx:"1.2",cy:"1.2",r:".65",fill:"#96f6e8",opacity:".7"})}),o.jsx("clipPath",{id:"hwwClip",children:o.jsx("circle",{cx:"50",cy:"50",r:"40"})})]}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"url(#hwwShade)",stroke:"#5ee6e1",strokeOpacity:".3"}),o.jsxs("g",{clipPath:"url(#hwwClip)",children:[o.jsx("path",{d:"M-4 22 Q24 3 56 20 T106 17 L106 39 Q76 29 50 39 T-4 39Z",fill:"url(#hwwWaveOne)",opacity:".95"}),o.jsx("path",{d:"M-4 39 Q22 26 49 42 T106 38 L106 57 Q78 51 51 58 T-4 58Z",fill:"url(#hwwWaveTwo)",opacity:".9"}),o.jsx("path",{d:"M-4 58 Q23 45 49 62 T106 56 L106 79 Q75 68 48 79 T-4 79Z",fill:"#1db9ef",opacity:".82"}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"url(#hwwDots)",opacity:".55"})]}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#d7fff2",strokeOpacity:".35"})]})}const Kj=({globeImage:a=qj})=>{const t=z.useRef(null),[n,i]=z.useState(0),[s,c]=z.useState(!1),[u,f]=z.useState(!1);z.useEffect(()=>{let m=0;const g=()=>{m=0;const v=t.current;if(!v||window.innerWidth<=fh)return;const b=Math.max(1,v.offsetHeight-window.innerHeight),k=-v.getBoundingClientRect().top,w=Math.min(.999,Math.max(0,k/b));i(Math.min(ml.length-1,Math.floor(w*ml.length+.6)))},y=()=>{m||(m=requestAnimationFrame(g))};return g(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y),()=>{m&&cancelAnimationFrame(m),window.removeEventListener("scroll",y),window.removeEventListener("resize",y)}},[]),z.useEffect(()=>{const m=t.current;if(!m||typeof IntersectionObserver>"u"){c(!0);return}const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(c(!0),g.disconnect())},{threshold:.15});return g.observe(m),()=>g.disconnect()},[]);const p=z.useCallback(m=>{const g=t.current;if(!g||window.innerWidth<=fh)return;const y=g.getBoundingClientRect().top+window.scrollY,v=g.offsetHeight-window.innerHeight,b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:y+m/ml.length*v,behavior:b?"auto":"smooth"})},[]);return o.jsxs("section",{ref:t,id:"how-we-work",className:`hww ${s?"is-visible":""}`,"aria-labelledby":"hww-title",children:[o.jsx("style",{children:Xj}),o.jsxs("div",{className:"hww-stage",children:[o.jsxs("div",{className:"hww-heading",children:[o.jsxs("div",{className:"hww-title-row",children:[o.jsx("span",{className:"hww-eyebrow",children:"How we work"}),o.jsxs("h2",{className:"hww-title",id:"hww-title",children:[o.jsx("span",{className:"hww-word",children:o.jsx("span",{children:"Our"})})," ",o.jsx("span",{className:"hww-word",children:o.jsx("span",{children:"process"})})]})]}),o.jsx("p",{className:"hww-sub",children:"From first thought to final delivery, every detail has a purpose."})]}),o.jsx("div",{className:"hww-globe",children:o.jsxs("div",{className:"hww-globe-inner",children:[o.jsx("div",{className:"hww-glow","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit one","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit two","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit three","aria-hidden":"true"}),o.jsx("div",{className:"hww-tilt",style:{"--tilt":`${n*-7}deg`},children:u?o.jsx(Qj,{}):o.jsx("img",{className:"hww-globe-art",src:a,alt:"Colorful halftone globe emblem",onError:()=>f(!0)})})]})}),o.jsx("div",{className:"hww-step-list",children:ml.map((m,g)=>o.jsxs("article",{className:`hww-step pos-${m.position} ${g===n?"is-active":""}`,style:{"--i":g},"aria-current":g===n?"step":void 0,children:[o.jsxs("div",{className:"hww-copy",children:[o.jsx("span",{className:"hww-num",children:m.number}),o.jsx("h3",{className:"hww-step-title",children:m.title}),o.jsx("div",{className:"hww-rule"}),o.jsx("p",{className:"hww-desc",children:m.description})]}),o.jsx("button",{type:"button",className:"hww-thumb",onClick:()=>p(g),"aria-label":`Go to step ${m.number}: ${m.title}`})]},m.number))}),o.jsxs("div",{className:"hww-status",children:[o.jsx(ok,{size:17,"aria-hidden":"true"}),o.jsx("span",{children:"Scroll to explore"}),o.jsx("span",{className:"hww-dots",children:ml.map((m,g)=>o.jsx("button",{type:"button",className:`hww-dot ${g===n?"is-current":""}`,onClick:()=>p(g),"aria-label":`Show step ${m.number}`},m.number))})]})]})]})},cv=()=>{const[a,t]=z.useState(()=>document.documentElement.getAttribute("data-theme")==="light"),[n,i]=z.useState(0);z.useEffect(()=>{const c=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};c();const u=new MutationObserver(c);return u.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>u.disconnect()},[]);const s=a?$t.heroBgLight:$t.heroBgLarge;return o.jsxs(o.Fragment,{children:[o.jsx(P_,{heroImage:s}),o.jsx(I_,{isLightTheme:a}),o.jsx(M_,{activeServiceIndex:n,setActiveServiceIndex:i}),o.jsx(U_,{}),o.jsx(Kj,{}),o.jsx(iN,{}),o.jsx(Gj,{})]})};function Si(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function yy(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ql={duration:.5,overwrite:!1,delay:0},hm,ir,pt,Cn=1e8,$e=1/Cn,ph=Math.PI*2,Jj=ph/4,Zj=0,by=Math.sqrt,$j=Math.cos,e3=Math.sin,er=function(t){return typeof t=="string"},jt=function(t){return typeof t=="function"},Fi=function(t){return typeof t=="number"},mm=function(t){return typeof t>"u"},hi=function(t){return typeof t=="object"},Wr=function(t){return t!==!1},gm=function(){return typeof window<"u"},Ed=function(t){return jt(t)||er(t)},wy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mr=Array.isArray,t3=/random\([^)]+\)/g,r3=/,\s*/g,dv=/(?:-?\.?\d|\.)+/gi,ky=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Op=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_y=/[+-]=-?[.\d]+/,n3=/[^,'"\[\]\s]+/gi,i3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,si,hh,xm,un={},du={},Ny,jy=function(t){return(du=wo(t,un))&&Gr},vm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Kl=function(t,n){return!n&&console.warn(t)},Ey=function(t,n){return t&&(un[t]=n)&&du&&(du[t]=n)||un},Jl=function(){return 0},a3={suppressEvents:!0,isStart:!0,kill:!1},Gd={suppressEvents:!0,kill:!1},s3={suppressEvents:!0},ym={},ka=[],mh={},Sy,nn={},Ip={},uv=30,qd=[],bm="",wm=function(t){var n=t[0],i,s;if(hi(n)||jt(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=qd.length;s--&&!qd[s].targetTest(n););i=qd[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Qy(t[s],i)))||t.splice(s,1);return t},cs=function(t){return t._gsap||wm(Tn(t))[0]._gsap},Ay=function(t,n,i){return(i=t[n])&&jt(i)?t[n]():mm(i)&&t.getAttribute&&t.getAttribute(n)||i},Hr=function(t,n){return(t=t.split(",")).forEach(n)||t},Pt=function(t){return Math.round(t*1e5)/1e5||0},xt=function(t){return Math.round(t*1e7)/1e7||0},co=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},o3=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},uu=function(){var t=ka.length,n=ka.slice(0),i,s;for(mh={},ka.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},km=function(t){return!!(t._initted||t._startAt||t.add)},Cy=function(t,n,i,s){ka.length&&!ir&&uu(),t.render(n,i,!!(ir&&n<0&&km(t))),ka.length&&!ir&&uu()},Ty=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(n3).length<2?n:er(t)?t.trim():t},Py=function(t){return t},fn=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},l3=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},wo=function(t,n){for(var i in n)t[i]=n[i];return t},fv=function a(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=hi(n[i])?a(t[i]||(t[i]={}),n[i]):n[i]);return t},fu=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},Al=function(t){var n=t.parent||vt,i=t.keyframes?l3(mr(t.keyframes)):fn;if(Wr(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},c3=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},Ry=function(t,n,i,s,c){var u=t[s],f;if(c)for(f=n[c];u&&u[c]>f;)u=u._prev;return u?(n._next=u._next,u._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=u,n.parent=n._dp=t,n},Du=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var c=n._prev,u=n._next;c?c._next=u:t[i]===n&&(t[i]=u),u?u._prev=c:t[s]===n&&(t[s]=c),n._next=n._prev=n.parent=null},Sa=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ds=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},d3=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},gh=function(t,n,i,s){return t._startAt&&(ir?t._startAt.revert(Gd):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},u3=function a(t){return!t||t._ts&&a(t.parent)},pv=function(t){return t._repeat?ko(t._tTime,t=t.duration()+t._rDelay)*t:0},ko=function(t,n){var i=Math.floor(t=xt(t/n));return t&&i===t?i-1:i},pu=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Bu=function(t){return t._end=xt(t._start+(t._tDur/Math.abs(t._ts||t._rts||$e)||0))},Uu=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=xt(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Bu(t),i._dirty||ds(i,t)),t},Ly=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=pu(t.rawTime(),n),(!n._dur||gc(0,n.totalDuration(),i)-n._tTime>$e)&&n.render(i,!0)),ds(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-$e}},li=function(t,n,i,s){return n.parent&&Sa(n),n._start=xt((Fi(i)?i:i||t!==vt?_n(t,i,n):t._time)+n._delay),n._end=xt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Ry(t,n,"_first","_last",t._sort?"_start":0),xh(n)||(t._recent=n),s||Ly(t,n),t._ts<0&&Uu(t,t._tTime),t},zy=function(t,n){return(un.ScrollTrigger||vm("scrollTrigger",n))&&un.ScrollTrigger.create(n,t)},Oy=function(t,n,i,s,c){if(Nm(t,n,c),!t._initted)return 1;if(!i&&t._pt&&!ir&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Sy!==sn.frame)return ka.push(t),t._lazy=[c,s],1},f3=function a(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||a(n))},xh=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},p3=function(t,n,i,s){var c=t.ratio,u=n<0||!n&&(!t._start&&f3(t)&&!(!t._initted&&xh(t))||(t._ts<0||t._dp._ts<0)&&!xh(t))?0:1,f=t._rDelay,p=0,m,g,y;if(f&&t._repeat&&(p=gc(0,t._tDur,n),g=ko(p,f),t._yoyo&&g&1&&(u=1-u),g!==ko(t._tTime,f)&&(c=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==c||ir||s||t._zTime===$e||!n&&t._zTime){if(!t._initted&&Oy(t,n,s,i,p))return;for(y=t._zTime,t._zTime=n||(i?$e:0),i||(i=n&&!y),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=p,m=t._pt;m;)m.r(u,m.d),m=m._next;n<0&&gh(t,n,i,!0),t._onUpdate&&!i&&ln(t,"onUpdate"),p&&t._repeat&&!i&&t.parent&&ln(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===u&&(u&&Sa(t,1),!i&&!ir&&(ln(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},h3=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},_o=function(t,n,i,s){var c=t._repeat,u=xt(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=u/t._dur),t._dur=u,t._tDur=c?c<0?1e10:xt(u*(c+1)+t._rDelay*c):u,f>0&&!s&&Uu(t,t._tTime=t._tDur*f),t.parent&&Bu(t),i||ds(t.parent,t),t},hv=function(t){return t instanceof Br?ds(t):_o(t,t._dur)},m3={_start:0,endTime:Jl,totalDuration:Jl},_n=function a(t,n,i){var s=t.labels,c=t._recent||m3,u=t.duration()>=Cn?c.endTime(!1):t._dur,f,p,m;return er(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),m=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(m?(f<0?c:i).totalDuration()/100:1)):f<0?(n in s||(s[n]=u),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),m&&i&&(p=p/100*(mr(i)?i[0]:i).totalDuration()),f>1?a(t,n.substr(0,f-1),i)+p:u+p)):n==null?u:+n},Cl=function(t,n,i){var s=Fi(n[1]),c=(s?2:1)+(t<2?0:1),u=n[c],f,p;if(s&&(u.duration=n[1]),u.parent=i,t){for(f=u,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Wr(p.vars.inherit)&&p.parent;u.immediateRender=Wr(f.immediateRender),t<2?u.runBackwards=1:u.startAt=n[c-1]}return new Mt(n[0],u,n[c+1])},Oa=function(t,n){return t||t===0?n(t):n},gc=function(t,n,i){return i<t?t:i>n?n:i},pr=function(t,n){return!er(t)||!(n=i3.exec(t))?"":n[1]},g3=function(t,n,i){return Oa(i,function(s){return gc(t,n,s)})},vh=[].slice,Iy=function(t,n){return t&&hi(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&hi(t[0]))&&!t.nodeType&&t!==si},x3=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var c;return er(s)&&!n||Iy(s,1)?(c=i).push.apply(c,Tn(s)):i.push(s)})||i},Tn=function(t,n,i){return pt&&!n&&pt.selector?pt.selector(t):er(t)&&!i&&(hh||!No())?vh.call((n||xm).querySelectorAll(t),0):mr(t)?x3(t,i):Iy(t)?vh.call(t,0):t?[t]:[]},yh=function(t){return t=Tn(t)[0]||Kl("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Tn(n,i.querySelectorAll?i:i===t?Kl("Invalid scope")||xm.createElement("div"):t)}},My=function(t){return t.sort(function(){return .5-Math.random()})},Fy=function(t){if(jt(t))return t;var n=hi(t)?t:{each:t},i=us(n.ease),s=n.from||0,c=parseFloat(n.base)||0,u={},f=s>0&&s<1,p=isNaN(s)||f,m=n.axis,g=s,y=s;return er(s)?g=y={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(g=s[0],y=s[1]),function(v,b,k){var w=(k||n).length,N=u[w],C,A,S,j,P,I,L,B,W;if(!N){if(W=n.grid==="auto"?0:(n.grid||[1,Cn])[1],!W){for(L=-Cn;L<(L=k[W++].getBoundingClientRect().left)&&W<w;);W<w&&W--}for(N=u[w]=[],C=p?Math.min(W,w)*g-.5:s%W,A=W===Cn?0:p?w*y/W-.5:s/W|0,L=0,B=Cn,I=0;I<w;I++)S=I%W-C,j=A-(I/W|0),N[I]=P=m?Math.abs(m==="y"?j:S):by(S*S+j*j),P>L&&(L=P),P<B&&(B=P);s==="random"&&My(N),N.max=L-B,N.min=B,N.v=w=(parseFloat(n.amount)||parseFloat(n.each)*(W>w?w-1:m?m==="y"?w/W:W:Math.max(W,w/W))||0)*(s==="edges"?-1:1),N.b=w<0?c-w:c,N.u=pr(n.amount||n.each)||0,i=i&&w<0?T3(i):i}return w=(N[v]-N.min)/N.max||0,xt(N.b+(i?i(w):w)*N.v)+N.u}},bh=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=xt(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Fi(i)?0:pr(i))}},Dy=function(t,n){var i=mr(t),s,c;return!i&&hi(t)&&(s=i=t.radius||Cn,t.values?(t=Tn(t.values),(c=!Fi(t[0]))&&(s*=s)):t=bh(t.increment)),Oa(n,i?jt(t)?function(u){return c=t(u),Math.abs(c-u)<=s?c:u}:function(u){for(var f=parseFloat(c?u.x:u),p=parseFloat(c?u.y:0),m=Cn,g=0,y=t.length,v,b;y--;)c?(v=t[y].x-f,b=t[y].y-p,v=v*v+b*b):v=Math.abs(t[y]-f),v<m&&(m=v,g=y);return g=!s||m<=s?t[g]:u,c||g===u||Fi(u)?g:g+pr(u)}:bh(t))},By=function(t,n,i,s){return Oa(mr(t)?!n:i===!0?!!(i=0):!s,function(){return mr(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},v3=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(c,u){return u(c)},s)}},y3=function(t,n){return function(i){return t(parseFloat(i))+(n||pr(i))}},b3=function(t,n,i){return Wy(t,n,0,1,i)},Uy=function(t,n,i){return Oa(i,function(s){return t[~~n(s)]})},w3=function a(t,n,i){var s=n-t;return mr(t)?Uy(t,a(0,t.length),n):Oa(i,function(c){return(s+(c-t)%s)%s+t})},k3=function a(t,n,i){var s=n-t,c=s*2;return mr(t)?Uy(t,a(0,t.length-1),n):Oa(i,function(u){return u=(c+(u-t)%c)%c||0,t+(u>s?c-u:u)})},Zl=function(t){return t.replace(t3,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(r3);return By(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},Wy=function(t,n,i,s,c){var u=n-t,f=s-i;return Oa(c,function(p){return i+((p-t)/u*f||0)})},_3=function a(t,n,i,s){var c=isNaN(t+n)?0:function(b){return(1-b)*t+b*n};if(!c){var u=er(t),f={},p,m,g,y,v;if(i===!0&&(s=1)&&(i=null),u)t={p:t},n={p:n};else if(mr(t)&&!mr(n)){for(g=[],y=t.length,v=y-2,m=1;m<y;m++)g.push(a(t[m-1],t[m]));y--,c=function(k){k*=y;var w=Math.min(v,~~k);return g[w](k-w)},i=n}else s||(t=wo(mr(t)?[]:{},t));if(!g){for(p in n)_m.call(f,t,p,"get",n[p]);c=function(k){return Sm(k,f)||(u?t.p:t)}}}return Oa(i,c)},mv=function(t,n,i){var s=t.labels,c=Cn,u,f,p;for(u in s)f=s[u]-n,f<0==!!i&&f&&c>(f=Math.abs(f))&&(p=u,c=f);return p},ln=function(t,n,i){var s=t.vars,c=s[n],u=pt,f=t._ctx,p,m,g;if(c)return p=s[n+"Params"],m=s.callbackScope||t,i&&ka.length&&uu(),f&&(pt=f),g=p?c.apply(m,p):c.call(m),pt=u,g},yl=function(t){return Sa(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ir),t.progress()<1&&ln(t,"onInterrupt"),t},no,Hy=[],Vy=function(t){if(t)if(t=!t.name&&t.default||t,gm()||t.headless){var n=t.name,i=jt(t),s=n&&!i&&t.init?function(){this._props=[]}:t,c={init:Jl,render:Sm,add:_m,kill:B3,modifier:D3,rawVars:0},u={targetTest:0,get:0,getSetter:Em,aliases:{},register:0};if(No(),t!==s){if(nn[n])return;fn(s,fn(fu(t,c),u)),wo(s.prototype,wo(c,fu(t,u))),nn[s.prop=n]=s,t.targetTest&&(qd.push(s),ym[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Ey(n,s),t.register&&t.register(Gr,s,Vr)}else Hy.push(t)},Ze=255,bl={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},Mp=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*Ze+.5|0},Yy=function(t,n,i){var s=t?Fi(t)?[t>>16,t>>8&Ze,t&Ze]:0:bl.black,c,u,f,p,m,g,y,v,b,k;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),bl[t])s=bl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(c=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+c+c+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ze,s&Ze,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ze,t&Ze]}else if(t.substr(0,3)==="hsl"){if(s=k=t.match(dv),!n)p=+s[0]%360/360,m=+s[1]/100,g=+s[2]/100,u=g<=.5?g*(m+1):g+m-g*m,c=g*2-u,s.length>3&&(s[3]*=1),s[0]=Mp(p+1/3,c,u),s[1]=Mp(p,c,u),s[2]=Mp(p-1/3,c,u);else if(~t.indexOf("="))return s=t.match(ky),i&&s.length<4&&(s[3]=1),s}else s=t.match(dv)||bl.transparent;s=s.map(Number)}return n&&!k&&(c=s[0]/Ze,u=s[1]/Ze,f=s[2]/Ze,y=Math.max(c,u,f),v=Math.min(c,u,f),g=(y+v)/2,y===v?p=m=0:(b=y-v,m=g>.5?b/(2-y-v):b/(y+v),p=y===c?(u-f)/b+(u<f?6:0):y===u?(f-c)/b+2:(c-u)/b+4,p*=60),s[0]=~~(p+.5),s[1]=~~(m*100+.5),s[2]=~~(g*100+.5)),i&&s.length<4&&(s[3]=1),s},Gy=function(t){var n=[],i=[],s=-1;return t.split(_a).forEach(function(c){var u=c.match(ro)||[];n.push.apply(n,u),i.push(s+=u.length+1)}),n.c=i,n},gv=function(t,n,i){var s="",c=(t+s).match(_a),u=n?"hsla(":"rgba(",f=0,p,m,g,y;if(!c)return t;if(c=c.map(function(v){return(v=Yy(v,n,1))&&u+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(g=Gy(t),p=i.c,p.join(s)!==g.c.join(s)))for(m=t.replace(_a,"1").split(ro),y=m.length-1;f<y;f++)s+=m[f]+(~p.indexOf(f)?c.shift()||u+"0,0,0,0)":(g.length?g:c.length?c:i).shift());if(!m)for(m=t.split(_a),y=m.length-1;f<y;f++)s+=m[f]+c[f];return s+m[y]},_a=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in bl)a+="|"+t+"\\b";return new RegExp(a+")","gi")})(),N3=/hsl[a]?\(/,qy=function(t){var n=t.join(" "),i;if(_a.lastIndex=0,_a.test(n))return i=N3.test(n),t[1]=gv(t[1],i),t[0]=gv(t[0],i,Gy(t[1])),!0},$l,sn=(function(){var a=Date.now,t=500,n=33,i=a(),s=i,c=1e3/240,u=c,f=[],p,m,g,y,v,b,k=function w(N){var C=a()-s,A=N===!0,S,j,P,I;if((C>t||C<0)&&(i+=C-n),s+=C,P=s-i,S=P-u,(S>0||A)&&(I=++y.frame,v=P-y.time*1e3,y.time=P=P/1e3,u+=S+(S>=c?4:c-S),j=1),A||(p=m(w)),j)for(b=0;b<f.length;b++)f[b](P,v,I,N)};return y={time:0,frame:0,tick:function(){k(!0)},deltaRatio:function(N){return v/(1e3/(N||60))},wake:function(){Ny&&(!hh&&gm()&&(si=hh=window,xm=si.document||{},un.gsap=Gr,(si.gsapVersions||(si.gsapVersions=[])).push(Gr.version),jy(du||si.GreenSockGlobals||!si.gsap&&si||{}),Hy.forEach(Vy)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&y.sleep(),m=g||function(N){return setTimeout(N,u-y.time*1e3+1|0)},$l=1,k(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(p),$l=0,m=Jl},lagSmoothing:function(N,C){t=N||1/0,n=Math.min(C||33,t)},fps:function(N){c=1e3/(N||240),u=y.time*1e3+c},add:function(N,C,A){var S=C?function(j,P,I,L){N(j,P,I,L),y.remove(S)}:N;return y.remove(N),f[A?"unshift":"push"](S),No(),S},remove:function(N,C){~(C=f.indexOf(N))&&f.splice(C,1)&&b>=C&&b--},_listeners:f},y})(),No=function(){return!$l&&sn.wake()},Ve={},j3=/^[\d.\-M][\d.\-,\s]/,E3=/["']/g,S3=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],c=1,u=i.length,f,p,m;c<u;c++)p=i[c],f=c!==u-1?p.lastIndexOf(","):p.length,m=p.substr(0,f),n[s]=isNaN(m)?m.replace(E3,"").trim():+m,s=p.substr(f+1).trim();return n},A3=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},C3=function(t){var n=(t+"").split("("),i=Ve[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[S3(n[1])]:A3(t).split(",").map(Ty)):Ve._CE&&j3.test(t)?Ve._CE("",t):i},T3=function(t){return function(n){return 1-t(1-n)}},us=function(t,n){return t&&(jt(t)?t:Ve[t]||C3(t))||n},ks=function(t,n,i,s){i===void 0&&(i=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var c={easeIn:n,easeOut:i,easeInOut:s},u;return Hr(t,function(f){Ve[f]=un[f]=c,Ve[u=f.toLowerCase()]=i;for(var p in c)Ve[u+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ve[f+"."+p]=c[p]}),c},Xy=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Fp=function a(t,n,i){var s=n>=1?n:1,c=(i||(t?.3:.45))/(n<1?n:1),u=c/ph*(Math.asin(1/s)||0),f=function(g){return g===1?1:s*Math.pow(2,-10*g)*e3((g-u)*c)+1},p=t==="out"?f:t==="in"?function(m){return 1-f(1-m)}:Xy(f);return c=ph/c,p.config=function(m,g){return a(t,m,g)},p},Dp=function a(t,n){n===void 0&&(n=1.70158);var i=function(u){return u?--u*u*((n+1)*u+n)+1:0},s=t==="out"?i:t==="in"?function(c){return 1-i(1-c)}:Xy(i);return s.config=function(c){return a(t,c)},s};Hr("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var n=t<5?t+1:t;ks(a+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;ks("Elastic",Fp("in"),Fp("out"),Fp());(function(a,t){var n=1/t,i=2*n,s=2.5*n,c=function(f){return f<n?a*f*f:f<i?a*Math.pow(f-1.5/t,2)+.75:f<s?a*(f-=2.25/t)*f+.9375:a*Math.pow(f-2.625/t,2)+.984375};ks("Bounce",function(u){return 1-c(1-u)},c)})(7.5625,2.75);ks("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ks("Circ",function(a){return-(by(1-a*a)-1)});ks("Sine",function(a){return a===1?1:-$j(a*Jj)+1});ks("Back",Dp("in"),Dp("out"),Dp());Ve.SteppedEase=Ve.steps=un.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),c=n?1:0,u=1-$e;return function(f){return((s*gc(0,u,f)|0)+c)*i}}};Ql.ease=Ve["quad.out"];Hr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return bm+=a+","+a+"Params,"});var Qy=function(t,n){this.id=Zj++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Ay,this.set=n?n.getSetter:Em},ec=(function(){function a(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,_o(this,+n.duration,1,1),this.data=n.data,pt&&(this._ctx=pt,pt.data.push(this)),$l||sn.wake()}var t=a.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,_o(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(No(),!arguments.length)return this._tTime;var c=this._dp;if(c&&c.smoothChildTiming&&this._ts){for(Uu(this,i),!c._dp||c.parent||Ly(c,this);c&&c.parent;)c.parent._time!==c._start+(c._ts>=0?c._tTime/c._ts:(c.totalDuration()-c._tTime)/-c._ts)&&c.totalTime(c._tTime,!0),c=c.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&li(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Cy(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+pv(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+pv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var c=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*c,s):this._repeat?ko(this._tTime,c)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===i)return this;var c=this.parent&&this._ts?pu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-$e?0:this._rts,this.totalTime(gc(-Math.abs(this._delay),this.totalDuration(),c),s!==!1),Bu(this),d3(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=xt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&li(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Wr(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pu(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=s3);var s=ir;return ir=i,km(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ir=s,this},t.globalTime=function(i){for(var s=this,c=arguments.length?i:s.rawTime();s;)c=s._start+c/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):c},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,hv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,hv(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(_n(this,i),Wr(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Wr(s)),this._dur||(this._zTime=-$e),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-$e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,c;return!!(!i||this._ts&&this._initted&&i.isActive()&&(c=i.rawTime(!0))>=s&&c<this.endTime(!0)-$e)},t.eventCallback=function(i,s,c){var u=this.vars;return arguments.length>1?(s?(u[i]=s,c&&(u[i+"Params"]=c),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},t.then=function(i){var s=this,c=s._prom;return new Promise(function(u){var f=jt(i)?i:Py,p=function(){var g=s.then;s.then=null,c&&c(),jt(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=g),u(f),s.then=g};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){yl(this)},a})();fn(ec.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Br=(function(a){yy(t,a);function t(i,s){var c;return i===void 0&&(i={}),c=a.call(this,i)||this,c.labels={},c.smoothChildTiming=!!i.smoothChildTiming,c.autoRemoveChildren=!!i.autoRemoveChildren,c._sort=Wr(i.sortChildren),vt&&li(i.parent||vt,Si(c),s),i.reversed&&c.reverse(),i.paused&&c.paused(!0),i.scrollTrigger&&zy(Si(c),i.scrollTrigger),c}var n=t.prototype;return n.to=function(s,c,u){return Cl(0,arguments,this),this},n.from=function(s,c,u){return Cl(1,arguments,this),this},n.fromTo=function(s,c,u,f){return Cl(2,arguments,this),this},n.set=function(s,c,u){return c.duration=0,c.parent=this,Al(c).repeatDelay||(c.repeat=0),c.immediateRender=!!c.immediateRender,new Mt(s,c,_n(this,u),1),this},n.call=function(s,c,u){return li(this,Mt.delayedCall(0,s,c),u)},n.staggerTo=function(s,c,u,f,p,m,g){return u.duration=c,u.stagger=u.stagger||f,u.onComplete=m,u.onCompleteParams=g,u.parent=this,new Mt(s,u,_n(this,p)),this},n.staggerFrom=function(s,c,u,f,p,m,g){return u.runBackwards=1,Al(u).immediateRender=Wr(u.immediateRender),this.staggerTo(s,c,u,f,p,m,g)},n.staggerFromTo=function(s,c,u,f,p,m,g,y){return f.startAt=u,Al(f).immediateRender=Wr(f.immediateRender),this.staggerTo(s,c,f,p,m,g,y)},n.render=function(s,c,u){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,m=this._dur,g=s<=0?0:xt(s),y=this._zTime<0!=s<0&&(this._initted||!m),v,b,k,w,N,C,A,S,j,P,I,L;if(this!==vt&&g>p&&s>=0&&(g=p),g!==this._tTime||u||y){if(f!==this._time&&m&&(g+=this._time-f,s+=this._time-f),v=g,j=this._start,S=this._ts,C=!S,y&&(m||(f=this._zTime),(s||!c)&&(this._zTime=s)),this._repeat){if(I=this._yoyo,N=m+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(N*100+s,c,u);if(v=xt(g%N),g===p?(w=this._repeat,v=m):(P=xt(g/N),w=~~P,w&&w===P&&(v=m,w--),v>m&&(v=m)),P=ko(this._tTime,N),!f&&this._tTime&&P!==w&&this._tTime-P*N-this._dur<=0&&(P=w),I&&w&1&&(v=m-v,L=1),w!==P&&!this._lock){var B=I&&P&1,W=B===(I&&w&1);if(w<P&&(B=!B),f=B?0:g%m?m:g,this._lock=1,this.render(f||(L?0:xt(w*N)),c,!m)._lock=0,this._tTime=g,!c&&this.parent&&ln(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,P=w),f&&f!==this._time||C!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,p=this._tDur,W&&(this._lock=2,f=B?m:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!C)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=h3(this,xt(f),xt(v)),A&&(g-=v-(v=A._start))),this._tTime=g,this._time=v,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&g&&m&&!c&&!P&&(ln(this,"onStart"),this._tTime!==g))return this;if(v>=f&&s>=0)for(b=this._first;b;){if(k=b._next,(b._act||v>=b._start)&&b._ts&&A!==b){if(b.parent!==this)return this.render(s,c,u);if(b.render(b._ts>0?(v-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(v-b._start)*b._ts,c,u),v!==this._time||!this._ts&&!C){A=0,k&&(g+=this._zTime=-$e);break}}b=k}else{b=this._last;for(var D=s<0?s:v;b;){if(k=b._prev,(b._act||D<=b._end)&&b._ts&&A!==b){if(b.parent!==this)return this.render(s,c,u);if(b.render(b._ts>0?(D-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(D-b._start)*b._ts,c,u||ir&&km(b)),v!==this._time||!this._ts&&!C){A=0,k&&(g+=this._zTime=D?-$e:$e);break}}b=k}}if(A&&!c&&(this.pause(),A.render(v>=f?0:-$e)._zTime=v>=f?1:-1,this._ts))return this._start=j,Bu(this),this.render(s,c,u);this._onUpdate&&!c&&ln(this,"onUpdate",!0),(g===p&&this._tTime>=this.totalDuration()||!g&&f)&&(j===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!m)&&(g===p&&this._ts>0||!g&&this._ts<0)&&Sa(this,1),!c&&!(s<0&&!f)&&(g||f||!p)&&(ln(this,g===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,c){var u=this;if(Fi(c)||(c=_n(this,c,s)),!(s instanceof ec)){if(mr(s))return s.forEach(function(f){return u.add(f,c)}),this;if(er(s))return this.addLabel(s,c);if(jt(s))s=Mt.delayedCall(0,s);else return this}return this!==s?li(this,s,c):this},n.getChildren=function(s,c,u,f){s===void 0&&(s=!0),c===void 0&&(c=!0),u===void 0&&(u=!0),f===void 0&&(f=-Cn);for(var p=[],m=this._first;m;)m._start>=f&&(m instanceof Mt?c&&p.push(m):(u&&p.push(m),s&&p.push.apply(p,m.getChildren(!0,c,u)))),m=m._next;return p},n.getById=function(s){for(var c=this.getChildren(1,1,1),u=c.length;u--;)if(c[u].vars.id===s)return c[u]},n.remove=function(s){return er(s)?this.removeLabel(s):jt(s)?this.killTweensOf(s):(s.parent===this&&Du(this,s),s===this._recent&&(this._recent=this._last),ds(this))},n.totalTime=function(s,c){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(sn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,c),this._forcing=0,this):this._tTime},n.addLabel=function(s,c){return this.labels[s]=_n(this,c),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,c,u){var f=Mt.delayedCall(0,c||Jl,u);return f.data="isPause",this._hasPause=1,li(this,f,_n(this,s))},n.removePause=function(s){var c=this._first;for(s=_n(this,s);c;)c._start===s&&c.data==="isPause"&&Sa(c),c=c._next},n.killTweensOf=function(s,c,u){for(var f=this.getTweensOf(s,u),p=f.length;p--;)ga!==f[p]&&f[p].kill(s,c);return this},n.getTweensOf=function(s,c){for(var u=[],f=Tn(s),p=this._first,m=Fi(c),g;p;)p instanceof Mt?o3(p._targets,f)&&(m?(!ga||p._initted&&p._ts)&&p.globalTime(0)<=c&&p.globalTime(p.totalDuration())>c:!c||p.isActive())&&u.push(p):(g=p.getTweensOf(f,c)).length&&u.push.apply(u,g),p=p._next;return u},n.tweenTo=function(s,c){c=c||{};var u=this,f=_n(u,s),p=c,m=p.startAt,g=p.onStart,y=p.onStartParams,v=p.immediateRender,b,k=Mt.to(u,fn({ease:c.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:c.duration||Math.abs((f-(m&&"time"in m?m.time:u._time))/u.timeScale())||$e,onStart:function(){if(u.pause(),!b){var N=c.duration||Math.abs((f-(m&&"time"in m?m.time:u._time))/u.timeScale());k._dur!==N&&_o(k,N,0,1).render(k._time,!0,!0),b=1}g&&g.apply(k,y||[])}},c));return v?k.render(0):k},n.tweenFromTo=function(s,c,u){return this.tweenTo(c,fn({startAt:{time:_n(this,s)}},u))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),mv(this,_n(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),mv(this,_n(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+$e)},n.shiftChildren=function(s,c,u){u===void 0&&(u=0);var f=this._first,p=this.labels,m;for(s=xt(s);f;)f._start>=u&&(f._start+=s,f._end+=s),f=f._next;if(c)for(m in p)p[m]>=u&&(p[m]+=s);return ds(this)},n.invalidate=function(s){var c=this._first;for(this._lock=0;c;)c.invalidate(s),c=c._next;return a.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var c=this._first,u;c;)u=c._next,this.remove(c),c=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ds(this)},n.totalDuration=function(s){var c=0,u=this,f=u._last,p=Cn,m,g,y;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(y=u.parent;f;)m=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>p&&u._sort&&f._ts&&!u._lock?(u._lock=1,li(u,f,g-f._delay,1)._lock=0):p=g,g<0&&f._ts&&(c-=g,(!y&&!u._dp||y&&y.smoothChildTiming)&&(u._start+=xt(g/u._ts),u._time-=g,u._tTime-=g),u.shiftChildren(-g,!1,-1/0),p=0),f._end>c&&f._ts&&(c=f._end),f=m;_o(u,u===vt&&u._time>c?u._time:c,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(s){if(vt._ts&&(Cy(vt,pu(s,vt)),Sy=sn.frame),sn.frame>=uv){uv+=dn.autoSleep||120;var c=vt._first;if((!c||!c._ts)&&dn.autoSleep&&sn._listeners.length<2){for(;c&&!c._ts;)c=c._next;c||sn.sleep()}}},t})(ec);fn(Br.prototype,{_lock:0,_hasPause:0,_forcing:0});var P3=function(t,n,i,s,c,u,f){var p=new Vr(this._pt,t,n,0,1,tb,null,c),m=0,g=0,y,v,b,k,w,N,C,A;for(p.b=i,p.e=s,i+="",s+="",(C=~s.indexOf("random("))&&(s=Zl(s)),u&&(A=[i,s],u(A,t,n),i=A[0],s=A[1]),v=i.match(Op)||[];y=Op.exec(s);)k=y[0],w=s.substring(m,y.index),b?b=(b+1)%5:w.substr(-5)==="rgba("&&(b=1),k!==v[g++]&&(N=parseFloat(v[g-1])||0,p._pt={_next:p._pt,p:w||g===1?w:",",s:N,c:k.charAt(1)==="="?co(N,k)-N:parseFloat(k)-N,m:b&&b<4?Math.round:0},m=Op.lastIndex);return p.c=m<s.length?s.substring(m,s.length):"",p.fp=f,(_y.test(s)||C)&&(p.e=0),this._pt=p,p},_m=function(t,n,i,s,c,u,f,p,m,g){jt(s)&&(s=s(c||0,t,u));var y=t[n],v=i!=="get"?i:jt(y)?m?t[n.indexOf("set")||!jt(t["get"+n.substr(3)])?n:"get"+n.substr(3)](m):t[n]():y,b=jt(y)?m?I3:$y:jm,k;if(er(s)&&(~s.indexOf("random(")&&(s=Zl(s)),s.charAt(1)==="="&&(k=co(v,s)+(pr(v)||0),(k||k===0)&&(s=k))),!g||v!==s||wh)return!isNaN(v*s)&&s!==""?(k=new Vr(this._pt,t,n,+v||0,s-(v||0),typeof y=="boolean"?F3:eb,0,b),m&&(k.fp=m),f&&k.modifier(f,this,t),this._pt=k):(!y&&!(n in t)&&vm(n,s),P3.call(this,t,n,v,s,b,p||dn.stringFilter,m))},R3=function(t,n,i,s,c){if(jt(t)&&(t=Tl(t,c,n,i,s)),!hi(t)||t.style&&t.nodeType||mr(t)||wy(t))return er(t)?Tl(t,c,n,i,s):t;var u={},f;for(f in t)u[f]=Tl(t[f],c,n,i,s);return u},Ky=function(t,n,i,s,c,u){var f,p,m,g;if(nn[t]&&(f=new nn[t]).init(c,f.rawVars?n[t]:R3(n[t],s,c,u,i),i,s,u)!==!1&&(i._pt=p=new Vr(i._pt,c,t,0,1,f.render,f,0,f.priority),i!==no))for(m=i._ptLookup[i._targets.indexOf(c)],g=f._props.length;g--;)m[f._props[g]]=p;return f},ga,wh,Nm=function a(t,n,i){var s=t.vars,c=s.ease,u=s.startAt,f=s.immediateRender,p=s.lazy,m=s.onUpdate,g=s.runBackwards,y=s.yoyoEase,v=s.keyframes,b=s.autoRevert,k=t._dur,w=t._startAt,N=t._targets,C=t.parent,A=C&&C.data==="nested"?C.vars.targets:N,S=t._overwrite==="auto"&&!hm,j=t.timeline,P=s.easeReverse||y,I,L,B,W,D,Q,F,J,$,ae,ce,ee,V;if(j&&(!v||!c)&&(c="none"),t._ease=us(c,Ql.ease),t._rEase=P&&(us(P)||t._ease),t._from=!j&&!!s.runBackwards,t._from&&(t.ratio=1),!j||v&&!s.stagger){if(J=N[0]?cs(N[0]).harness:0,ee=J&&s[J.prop],I=fu(s,ym),w&&(w._zTime<0&&w.progress(1),n<0&&g&&f&&!b?w.render(-1,!0):w.revert(g&&k?Gd:a3),w._lazy=0),u){if(Sa(t._startAt=Mt.set(N,fn({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:!w&&Wr(p),startAt:null,delay:0,onUpdate:m&&function(){return ln(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ir||!f&&!b)&&t._startAt.revert(Gd),f&&k&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(g&&k&&!w){if(n&&(f=!1),B=fn({overwrite:!1,data:"isFromStart",lazy:f&&!w&&Wr(p),immediateRender:f,stagger:0,parent:C},I),ee&&(B[J.prop]=ee),Sa(t._startAt=Mt.set(N,B)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ir?t._startAt.revert(Gd):t._startAt.render(-1,!0)),t._zTime=n,!f)a(t._startAt,$e,$e);else if(!n)return}for(t._pt=t._ptCache=0,p=k&&Wr(p)||p&&!k,L=0;L<N.length;L++){if(D=N[L],F=D._gsap||wm(N)[L]._gsap,t._ptLookup[L]=ae={},mh[F.id]&&ka.length&&uu(),ce=A===N?L:A.indexOf(D),J&&($=new J).init(D,ee||I,t,ce,A)!==!1&&(t._pt=W=new Vr(t._pt,D,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(X){ae[X]=W}),$.priority&&(Q=1)),!J||ee)for(B in I)nn[B]&&($=Ky(B,I,t,ce,D,A))?$.priority&&(Q=1):ae[B]=W=_m.call(t,D,B,"get",I[B],ce,A,0,s.stringFilter);t._op&&t._op[L]&&t.kill(D,t._op[L]),S&&t._pt&&(ga=t,vt.killTweensOf(D,ae,t.globalTime(n)),V=!t.parent,ga=0),t._pt&&p&&(mh[F.id]=1)}Q&&rb(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!V,v&&n<=0&&j.render(Cn,!0,!0)},L3=function(t,n,i,s,c,u,f,p){var m=(t._pt&&t._ptCache||(t._ptCache={}))[n],g,y,v,b;if(!m)for(m=t._ptCache[n]=[],v=t._ptLookup,b=t._targets.length;b--;){if(g=v[b][n],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==n&&g.fp!==n;)g=g._next;if(!g)return wh=1,t.vars[n]="+=0",Nm(t,f),wh=0,p?Kl(n+" not eligible for reset. Try splitting into individual properties"):1;m.push(g)}for(b=m.length;b--;)y=m[b],g=y._pt||y,g.s=(s||s===0)&&!c?s:g.s+(s||0)+u*g.c,g.c=i-g.s,y.e&&(y.e=Pt(i)+pr(y.e)),y.b&&(y.b=g.s+pr(y.b))},z3=function(t,n){var i=t[0]?cs(t[0]).harness:0,s=i&&i.aliases,c,u,f,p;if(!s)return n;c=wo({},n);for(u in s)if(u in c)for(p=s[u].split(","),f=p.length;f--;)c[p[f]]=c[u];return c},O3=function(t,n,i,s){var c=n.ease||s||"power1.inOut",u,f;if(mr(n))f=i[t]||(i[t]=[]),n.forEach(function(p,m){return f.push({t:m/(n.length-1)*100,v:p,e:c})});else for(u in n)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:n[u],e:c})},Tl=function(t,n,i,s,c){return jt(t)?t.call(n,i,s,c):er(t)&&~t.indexOf("random(")?Zl(t):t},Jy=bm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zy={};Hr(Jy+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Zy[a]=1});var Mt=(function(a){yy(t,a);function t(i,s,c,u){var f;typeof s=="number"&&(c.duration=s,s=c,c=null),f=a.call(this,u?s:Al(s))||this;var p=f.vars,m=p.duration,g=p.delay,y=p.immediateRender,v=p.stagger,b=p.overwrite,k=p.keyframes,w=p.defaults,N=p.scrollTrigger,C=s.parent||vt,A=(mr(i)||wy(i)?Fi(i[0]):"length"in s)?[i]:Tn(i),S,j,P,I,L,B,W,D;if(f._targets=A.length?wm(A):Kl("GSAP target "+i+" not found. https://gsap.com",!dn.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=b,k||v||Ed(m)||Ed(g)){s=f.vars;var Q=s.easeReverse||s.yoyoEase;if(S=f.timeline=new Br({data:"nested",defaults:w||{},targets:C&&C.data==="nested"?C.vars.targets:A}),S.kill(),S.parent=S._dp=Si(f),S._start=0,v||Ed(m)||Ed(g)){if(I=A.length,W=v&&Fy(v),hi(v))for(L in v)~Jy.indexOf(L)&&(D||(D={}),D[L]=v[L]);for(j=0;j<I;j++)P=fu(s,Zy),P.stagger=0,Q&&(P.easeReverse=Q),D&&wo(P,D),B=A[j],P.duration=+Tl(m,Si(f),j,B,A),P.delay=(+Tl(g,Si(f),j,B,A)||0)-f._delay,!v&&I===1&&P.delay&&(f._delay=g=P.delay,f._start+=g,P.delay=0),S.to(B,P,W?W(j,B,A):0),S._ease=Ve.none;S.duration()?m=g=0:f.timeline=0}else if(k){Al(fn(S.vars.defaults,{ease:"none"})),S._ease=us(k.ease||s.ease||"none");var F=0,J,$,ae;if(mr(k))k.forEach(function(ce){return S.to(A,ce,">")}),S.duration();else{P={};for(L in k)L==="ease"||L==="easeEach"||O3(L,k[L],P,k.easeEach);for(L in P)for(J=P[L].sort(function(ce,ee){return ce.t-ee.t}),F=0,j=0;j<J.length;j++)$=J[j],ae={ease:$.e,duration:($.t-(j?J[j-1].t:0))/100*m},ae[L]=$.v,S.to(A,ae,F),F+=ae.duration;S.duration()<m&&S.to({},{duration:m-S.duration()})}}m||f.duration(m=S.duration())}else f.timeline=0;return b===!0&&!hm&&(ga=Si(f),vt.killTweensOf(A),ga=0),li(C,Si(f),c),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(y||!m&&!k&&f._start===xt(C._time)&&Wr(y)&&u3(Si(f))&&C.data!=="nested")&&(f._tTime=-$e,f.render(Math.max(0,-g)||0)),N&&zy(Si(f),N),f}var n=t.prototype;return n.render=function(s,c,u){var f=this._time,p=this._tDur,m=this._dur,g=s<0,y=s>p-$e&&!g?p:s<$e?0:s,v,b,k,w,N,C,A,S;if(!m)p3(this,s,c,u);else if(y!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(v=y,S=this.timeline,this._repeat){if(w=m+this._rDelay,this._repeat<-1&&g)return this.totalTime(w*100+s,c,u);if(v=xt(y%w),y===p?(k=this._repeat,v=m):(N=xt(y/w),k=~~N,k&&k===N?(v=m,k--):v>m&&(v=m)),C=this._yoyo&&k&1,C&&(v=m-v),N=ko(this._tTime,w),v===f&&!u&&this._initted&&k===N)return this._tTime=y,this;k!==N&&this.vars.repeatRefresh&&!C&&!this._lock&&v!==w&&this._initted&&(this._lock=u=1,this.render(xt(w*k),!0).invalidate()._lock=0)}if(!this._initted){if(Oy(this,g?s:v,u,c,y))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&k!==N))return this;if(m!==this._dur)return this.render(s,c,u)}if(this._rEase){var j=v<f;if(j!==this._inv){var P=j?f:m-f;this._inv=j,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=P?(j?-1:1)/P:0,this._invScale=j?-this.ratio:1-this.ratio,this._invEase=j?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((v-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(v/m);if(this._from&&(this.ratio=A=1-A),this._tTime=y,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&y&&!c&&!N&&(ln(this,"onStart"),this._tTime!==y))return this;for(b=this._pt;b;)b.r(A,b.d),b=b._next;S&&S.render(s<0?s:S._dur*S._ease(v/this._dur),c,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!c&&(g&&gh(this,s,c,u),ln(this,"onUpdate")),this._repeat&&k!==N&&this.vars.onRepeat&&!c&&this.parent&&ln(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&gh(this,s,!0,!0),(s||!m)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Sa(this,1),!c&&!(g&&!f)&&(y||f||C)&&(ln(this,y===p?"onComplete":"onReverseComplete",!0),this._prom&&!(y<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},n.resetTo=function(s,c,u,f,p){$l||sn.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||Nm(this,m),g=this._ease(m/this._dur),L3(this,s,c,u,f,g,m,p)?this.resetTo(s,c,u,f,1):(Uu(this,0),this.parent||Ry(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,c){if(c===void 0&&(c="all"),!s&&(!c||c==="all"))return this._lazy=this._pt=0,this.parent?yl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ir),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,c,ga&&ga.vars.overwrite!==!0)._first||yl(this),this.parent&&u!==this.timeline.totalDuration()&&_o(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,p=s?Tn(s):f,m=this._ptLookup,g=this._pt,y,v,b,k,w,N,C;if((!c||c==="all")&&c3(f,p))return c==="all"&&(this._pt=0),yl(this);for(y=this._op=this._op||[],c!=="all"&&(er(c)&&(w={},Hr(c,function(A){return w[A]=1}),c=w),c=z3(f,c)),C=f.length;C--;)if(~p.indexOf(f[C])){v=m[C],c==="all"?(y[C]=c,k=v,b={}):(b=y[C]=y[C]||{},k=c);for(w in k)N=v&&v[w],N&&((!("kill"in N.d)||N.d.kill(w)===!0)&&Du(this,N,"_pt"),delete v[w]),b!=="all"&&(b[w]=1)}return this._initted&&!this._pt&&g&&yl(this),this},t.to=function(s,c){return new t(s,c,arguments[2])},t.from=function(s,c){return Cl(1,arguments)},t.delayedCall=function(s,c,u,f){return new t(c,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:c,onReverseComplete:c,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(s,c,u){return Cl(2,arguments)},t.set=function(s,c){return c.duration=0,c.repeatDelay||(c.repeat=0),new t(s,c)},t.killTweensOf=function(s,c,u){return vt.killTweensOf(s,c,u)},t})(ec);fn(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hr("staggerTo,staggerFrom,staggerFromTo",function(a){Mt[a]=function(){var t=new Br,n=vh.call(arguments,0);return n.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,n)}});var jm=function(t,n,i){return t[n]=i},$y=function(t,n,i){return t[n](i)},I3=function(t,n,i,s){return t[n](s.fp,i)},M3=function(t,n,i){return t.setAttribute(n,i)},Em=function(t,n){return jt(t[n])?$y:mm(t[n])&&t.setAttribute?M3:jm},eb=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},F3=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},tb=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},Sm=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},D3=function(t,n,i,s){for(var c=this._pt,u;c;)u=c._next,c.p===s&&c.modifier(t,n,i),c=u},B3=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Du(this,n,"_pt"):n.dep||(i=1),n=s;return!i},U3=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},rb=function(t){for(var n=t._pt,i,s,c,u;n;){for(i=n._next,s=c;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:u)?n._prev._next=n:c=n,(n._next=s)?s._prev=n:u=n,n=i}t._pt=c},Vr=(function(){function a(n,i,s,c,u,f,p,m,g){this.t=i,this.s=c,this.c=u,this.p=s,this.r=f||eb,this.d=p||this,this.set=m||jm,this.pr=g||0,this._next=n,n&&(n._prev=this)}var t=a.prototype;return t.modifier=function(i,s,c){this.mSet=this.mSet||this.set,this.set=U3,this.m=i,this.mt=c,this.tween=s},a})();Hr(bm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return ym[a]=1});un.TweenMax=un.TweenLite=Mt;un.TimelineLite=un.TimelineMax=Br;vt=new Br({sortChildren:!1,defaults:Ql,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=qy;var fs=[],Xd={},W3=[],xv=0,H3=0,Bp=function(t){return(Xd[t]||W3).map(function(n){return n()})},kh=function(){var t=Date.now(),n=[];t-xv>2&&(Bp("matchMediaInit"),fs.forEach(function(i){var s=i.queries,c=i.conditions,u,f,p,m;for(f in s)u=si.matchMedia(s[f]).matches,u&&(p=1),u!==c[f]&&(c[f]=u,m=1);m&&(i.revert(),p&&n.push(i))}),Bp("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),xv=t,Bp("matchMedia"))},nb=(function(){function a(n,i){this.selector=i&&yh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=H3++,n&&this.add(n)}var t=a.prototype;return t.add=function(i,s,c){jt(i)&&(c=s,s=i,i=jt);var u=this,f=function(){var m=pt,g=u.selector,y;return m&&m!==u&&m.data.push(u),c&&(u.selector=yh(c)),pt=u,y=s.apply(u,arguments),jt(y)&&u._r.push(y),pt=m,u.selector=g,u.isReverted=!1,y};return u.last=f,i===jt?f(u,function(p){return u.add(null,p)}):i?u[i]=f:f},t.ignore=function(i){var s=pt;pt=null,i(this),pt=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof Mt&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var c=this;if(i?(function(){for(var f=c.getTweens(),p=c.data.length,m;p--;)m=c.data[p],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(i)}),p=c.data.length;p--;)m=c.data[p],m instanceof Br?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof Mt)&&m.revert&&m.revert(i);c._r.forEach(function(g){return g(i,c)}),c.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var u=fs.length;u--;)fs[u].id===this.id&&fs.splice(u,1)},t.revert=function(i){this.kill(i||{})},a})(),V3=(function(){function a(n){this.contexts=[],this.scope=n,pt&&pt.data.push(this)}var t=a.prototype;return t.add=function(i,s,c){hi(i)||(i={matches:i});var u=new nb(0,c||this.scope),f=u.conditions={},p,m,g;pt&&!u.selector&&(u.selector=pt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(m in i)m==="all"?g=1:(p=si.matchMedia(i[m]),p&&(fs.indexOf(u)<0&&fs.push(u),(f[m]=p.matches)&&(g=1),p.addListener?p.addListener(kh):p.addEventListener("change",kh)));return g&&s(u,function(y){return u.add(null,y)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),hu={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return Vy(s)})},timeline:function(t){return new Br(t)},getTweensOf:function(t,n){return vt.getTweensOf(t,n)},getProperty:function(t,n,i,s){er(t)&&(t=Tn(t)[0]);var c=cs(t||{}).get,u=i?Py:Ty;return i==="native"&&(i=""),t&&(n?u((nn[n]&&nn[n].get||c)(t,n,i,s)):function(f,p,m){return u((nn[f]&&nn[f].get||c)(t,f,p,m))})},quickSetter:function(t,n,i){if(t=Tn(t),t.length>1){var s=t.map(function(g){return Gr.quickSetter(g,n,i)}),c=s.length;return function(g){for(var y=c;y--;)s[y](g)}}t=t[0]||{};var u=nn[n],f=cs(t),p=f.harness&&(f.harness.aliases||{})[n]||n,m=u?function(g){var y=new u;no._pt=0,y.init(t,i?g+i:g,no,0,[t]),y.render(1,y),no._pt&&Sm(1,no)}:f.set(t,p);return u?m:function(g){return m(t,p,i?g+i:g,f,1)}},quickTo:function(t,n,i){var s,c=Gr.to(t,fn((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(p,m,g){return c.resetTo(n,p,m,g)};return u.tween=c,u},isTweening:function(t){return vt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=us(t.ease,Ql.ease)),fv(Ql,t||{})},config:function(t){return fv(dn,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,c=t.defaults,u=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!nn[f]&&!un[f]&&Kl(n+" effect requires "+f+" plugin.")}),Ip[n]=function(f,p,m){return i(Tn(f),fn(p||{},c),m)},u&&(Br.prototype[n]=function(f,p,m){return this.add(Ip[n](f,hi(p)?p:(m=p)&&{},this),m)})},registerEase:function(t,n){Ve[t]=us(n)},parseEase:function(t,n){return arguments.length?us(t,n):Ve},getById:function(t){return vt.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new Br(t),s,c;for(i.smoothChildTiming=Wr(t.smoothChildTiming),vt.remove(i),i._dp=0,i._time=i._tTime=vt._time,s=vt._first;s;)c=s._next,(n||!(!s._dur&&s instanceof Mt&&s.vars.onComplete===s._targets[0]))&&li(i,s,s._start-s._delay),s=c;return li(vt,i,0),i},context:function(t,n){return t?new nb(t,n):pt},matchMedia:function(t){return new V3(t)},matchMediaRefresh:function(){return fs.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||kh()},addEventListener:function(t,n){var i=Xd[t]||(Xd[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=Xd[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:w3,wrapYoyo:k3,distribute:Fy,random:By,snap:Dy,normalize:b3,getUnit:pr,clamp:g3,splitColor:Yy,toArray:Tn,selector:yh,mapRange:Wy,pipe:v3,unitize:y3,interpolate:_3,shuffle:My},install:jy,effects:Ip,ticker:sn,updateRoot:Br.updateRoot,plugins:nn,globalTimeline:vt,core:{PropTween:Vr,globals:Ey,Tween:Mt,Timeline:Br,Animation:ec,getCache:cs,_removeLinkedListItem:Du,reverting:function(){return ir},context:function(t){return t&&pt&&(pt.data.push(t),t._ctx=pt),pt},suppressOverwrites:function(t){return hm=t}}};Hr("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return hu[a]=Mt[a]});sn.add(Br.updateRoot);no=hu.to({},{duration:0});var Y3=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},G3=function(t,n){var i=t._targets,s,c,u;for(s in n)for(c=i.length;c--;)u=t._ptLookup[c][s],u&&(u=u.d)&&(u._pt&&(u=Y3(u,s)),u&&u.modifier&&u.modifier(n[s],t,i[c],s))},Up=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,c,u){u._onInit=function(f){var p,m;if(er(c)&&(p={},Hr(c,function(g){return p[g]=1}),c=p),n){p={};for(m in c)p[m]=n(c[m]);c=p}G3(f,c)}}}},Gr=hu.registerPlugin({name:"attr",init:function(t,n,i,s,c){var u,f,p;this.tween=i;for(u in n)p=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(p||0)+"",n[u],s,c,0,0,u),f.op=u,f.b=p,this._props.push(u)},render:function(t,n){for(var i=n._pt;i;)ir?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Up("roundProps",bh),Up("modifiers"),Up("snap",Dy))||hu;Mt.version=Br.version=Gr.version="3.15.0";Ny=1;gm()&&No();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;var vv,xa,uo,Am,as,yv,Cm,q3=function(){return typeof window<"u"},Di={},rs=180/Math.PI,fo=Math.PI/180,qs=Math.atan2,bv=1e8,Tm=/([A-Z])/g,X3=/(left|right|width|margin|padding|x)/i,Q3=/[\s,\(]\S/,ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},K3=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},J3=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Z3=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},$3=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},ib=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},ab=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},eE=function(t,n,i){return t.style[n]=i},tE=function(t,n,i){return t.style.setProperty(n,i)},rE=function(t,n,i){return t._gsap[n]=i},nE=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},iE=function(t,n,i,s,c){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(c,u)},aE=function(t,n,i,s,c){var u=t._gsap;u[n]=i,u.renderTransform(c,u)},yt="transform",Yr=yt+"Origin",sE=function a(t,n){var i=this,s=this.target,c=s.style,u=s._gsap;if(t in Di&&c){if(this.tfm=this.tfm||{},t!=="transform")t=ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Ci(s,f)}):this.tfm[t]=u.x?u[t]:Ci(s,t),t===Yr&&(this.tfm.zOrigin=u.zOrigin);else return ci.transform.split(",").forEach(function(f){return a.call(i,f,n)});if(this.props.indexOf(yt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Yr,n,"")),t=yt}(c||n)&&this.props.push(t,n,c[t])},sb=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},oE=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,c,u;for(c=0;c<t.length;c+=3)t[c+1]?t[c+1]===2?n[t[c]](t[c+2]):n[t[c]]=t[c+2]:t[c+2]?i[t[c]]=t[c+2]:i.removeProperty(t[c].substr(0,2)==="--"?t[c]:t[c].replace(Tm,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),c=Cm(),(!c||!c.isStart)&&!i[yt]&&(sb(i),s.zOrigin&&i[Yr]&&(i[Yr]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},ob=function(t,n){var i={target:t,props:[],revert:oE,save:sE};return t._gsap||Gr.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},lb,Nh=function(t,n){var i=xa.createElementNS?xa.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xa.createElement(t);return i&&i.style?i:xa.createElement(t)},cn=function a(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Tm,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&a(t,jo(n)||n,1)||""},wv="O,Moz,ms,Ms,Webkit".split(","),jo=function(t,n,i){var s=n||as,c=s.style,u=5;if(t in c&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(wv[u]+t in c););return u<0?null:(u===3?"ms":u>=0?wv[u]:"")+t},jh=function(){q3()&&window.document&&(vv=window,xa=vv.document,uo=xa.documentElement,as=Nh("div")||{style:{}},Nh("div"),yt=jo(yt),Yr=yt+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lb=!!jo("perspective"),Cm=Gr.core.reverting,Am=1)},kv=function(t){var n=t.ownerSVGElement,i=Nh("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),c;s.style.display="block",i.appendChild(s),uo.appendChild(i);try{c=s.getBBox()}catch{}return i.removeChild(s),uo.removeChild(i),c},_v=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},cb=function(t){var n,i;try{n=t.getBBox()}catch{n=kv(t),i=1}return n&&(n.width||n.height)||i||(n=kv(t)),n&&!n.width&&!n.x&&!n.y?{x:+_v(t,["x","cx","x1"])||0,y:+_v(t,["y","cy","y1"])||0,width:0,height:0}:n},db=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cb(t))},Aa=function(t,n){if(n){var i=t.style,s;n in Di&&n!==Yr&&(n=yt),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(Tm,"-$1").toLowerCase())):i.removeAttribute(n)}},va=function(t,n,i,s,c,u){var f=new Vr(t._pt,n,i,0,1,u?ab:ib);return t._pt=f,f.b=s,f.e=c,t._props.push(i),f},Nv={deg:1,rad:1,turn:1},lE={grid:1,flex:1},Ca=function a(t,n,i,s){var c=parseFloat(i)||0,u=(i+"").trim().substr((c+"").length)||"px",f=as.style,p=X3.test(n),m=t.tagName.toLowerCase()==="svg",g=(m?"client":"offset")+(p?"Width":"Height"),y=100,v=s==="px",b=s==="%",k,w,N,C;if(s===u||!c||Nv[s]||Nv[u])return c;if(u!=="px"&&!v&&(c=a(t,n,i,"px")),C=t.getCTM&&db(t),(b||u==="%")&&(Di[n]||~n.indexOf("adius")))return k=C?t.getBBox()[p?"width":"height"]:t[g],Pt(b?c/k*y:c/100*k);if(f[p?"width":"height"]=y+(v?u:s),w=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!m?t:t.parentNode,C&&(w=(t.ownerSVGElement||{}).parentNode),(!w||w===xa||!w.appendChild)&&(w=xa.body),N=w._gsap,N&&b&&N.width&&p&&N.time===sn.time&&!N.uncache)return Pt(c/N.width*y);if(b&&(n==="height"||n==="width")){var A=t.style[n];t.style[n]=y+s,k=t[g],A?t.style[n]=A:Aa(t,n)}else(b||u==="%")&&!lE[cn(w,"display")]&&(f.position=cn(t,"position")),w===t&&(f.position="static"),w.appendChild(as),k=as[g],w.removeChild(as),f.position="absolute";return p&&b&&(N=cs(w),N.time=sn.time,N.width=w[g]),Pt(v?k*c/y:k&&c?y/k*c:0)},Ci=function(t,n,i,s){var c;return Am||jh(),n in ci&&n!=="transform"&&(n=ci[n],~n.indexOf(",")&&(n=n.split(",")[0])),Di[n]&&n!=="transform"?(c=rc(t,s),c=n!=="transformOrigin"?c[n]:c.svg?c.origin:gu(cn(t,Yr))+" "+c.zOrigin+"px"):(c=t.style[n],(!c||c==="auto"||s||~(c+"").indexOf("calc("))&&(c=mu[n]&&mu[n](t,n,i)||cn(t,n)||Ay(t,n)||(n==="opacity"?1:0))),i&&!~(c+"").trim().indexOf(" ")?Ca(t,n,c,i)+i:c},cE=function(t,n,i,s){if(!i||i==="none"){var c=jo(n,t,1),u=c&&cn(t,c,1);u&&u!==i?(n=c,i=u):n==="borderColor"&&(i=cn(t,"borderTopColor"))}var f=new Vr(this._pt,t.style,n,0,1,tb),p=0,m=0,g,y,v,b,k,w,N,C,A,S,j,P;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=cn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(w=t.style[n],t.style[n]=s,s=cn(t,n)||s,w?t.style[n]=w:Aa(t,n)),g=[i,s],qy(g),i=g[0],s=g[1],v=i.match(ro)||[],P=s.match(ro)||[],P.length){for(;y=ro.exec(s);)N=y[0],A=s.substring(p,y.index),k?k=(k+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(k=1),N!==(w=v[m++]||"")&&(b=parseFloat(w)||0,j=w.substr((b+"").length),N.charAt(1)==="="&&(N=co(b,N)+j),C=parseFloat(N),S=N.substr((C+"").length),p=ro.lastIndex-S.length,S||(S=S||dn.units[n]||j,p===s.length&&(s+=S,f.e+=S)),j!==S&&(b=Ca(t,n,w,S)||0),f._pt={_next:f._pt,p:A||m===1?A:",",s:b,c:C-b,m:k&&k<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?ab:ib;return _y.test(s)&&(f.e=0),this._pt=f,f},jv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dE=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=jv[i]||i,n[1]=jv[s]||s,n.join(" ")},uE=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,c=n.u,u=i._gsap,f,p,m;if(c==="all"||c===!0)s.cssText="",p=1;else for(c=c.split(","),m=c.length;--m>-1;)f=c[m],Di[f]&&(p=1,f=f==="transformOrigin"?Yr:yt),Aa(i,f);p&&(Aa(i,yt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",rc(i,1),u.uncache=1,sb(s)))}},mu={clearProps:function(t,n,i,s,c){if(c.data!=="isFromStart"){var u=t._pt=new Vr(t._pt,n,i,0,0,uE);return u.u=s,u.pr=-10,u.tween=c,t._props.push(i),1}}},tc=[1,0,0,1,0,0],ub={},fb=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ev=function(t){var n=cn(t,yt);return fb(n)?tc:n.substr(7).match(ky).map(Pt)},Pm=function(t,n){var i=t._gsap||cs(t),s=t.style,c=Ev(t),u,f,p,m;return i.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,c=[p.a,p.b,p.c,p.d,p.e,p.f],c.join(",")==="1,0,0,1,0,0"?tc:c):(c===tc&&!t.offsetParent&&t!==uo&&!i.svg&&(p=s.display,s.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(m=1,f=t.nextElementSibling,uo.appendChild(t)),c=Ev(t),p?s.display=p:Aa(t,"display"),m&&(f?u.insertBefore(t,f):u?u.appendChild(t):uo.removeChild(t))),n&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Eh=function(t,n,i,s,c,u){var f=t._gsap,p=c||Pm(t,!0),m=f.xOrigin||0,g=f.yOrigin||0,y=f.xOffset||0,v=f.yOffset||0,b=p[0],k=p[1],w=p[2],N=p[3],C=p[4],A=p[5],S=n.split(" "),j=parseFloat(S[0])||0,P=parseFloat(S[1])||0,I,L,B,W;i?p!==tc&&(L=b*N-k*w)&&(B=j*(N/L)+P*(-w/L)+(w*A-N*C)/L,W=j*(-k/L)+P*(b/L)-(b*A-k*C)/L,j=B,P=W):(I=cb(t),j=I.x+(~S[0].indexOf("%")?j/100*I.width:j),P=I.y+(~(S[1]||S[0]).indexOf("%")?P/100*I.height:P)),s||s!==!1&&f.smooth?(C=j-m,A=P-g,f.xOffset=y+(C*b+A*w)-C,f.yOffset=v+(C*k+A*N)-A):f.xOffset=f.yOffset=0,f.xOrigin=j,f.yOrigin=P,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!i,t.style[Yr]="0px 0px",u&&(va(u,f,"xOrigin",m,j),va(u,f,"yOrigin",g,P),va(u,f,"xOffset",y,f.xOffset),va(u,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",j+" "+P)},rc=function(t,n){var i=t._gsap||new Qy(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,c=i.scaleX<0,u="px",f="deg",p=getComputedStyle(t),m=cn(t,Yr)||"0",g,y,v,b,k,w,N,C,A,S,j,P,I,L,B,W,D,Q,F,J,$,ae,ce,ee,V,X,E,T,Y,se,le,ge;return g=y=v=w=N=C=A=S=j=0,b=k=1,i.svg=!!(t.getCTM&&db(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[yt]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[yt]!=="none"?p[yt]:"")),s.scale=s.rotate=s.translate="none"),L=Pm(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),m=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",ee=""):ee=!n&&t.getAttribute("data-svg-origin"),Eh(t,ee||m,!!ee||i.originIsAbsolute,i.smooth!==!1,L)),P=i.xOrigin||0,I=i.yOrigin||0,L!==tc&&(Q=L[0],F=L[1],J=L[2],$=L[3],g=ae=L[4],y=ce=L[5],L.length===6?(b=Math.sqrt(Q*Q+F*F),k=Math.sqrt($*$+J*J),w=Q||F?qs(F,Q)*rs:0,A=J||$?qs(J,$)*rs+w:0,A&&(k*=Math.abs(Math.cos(A*fo))),i.svg&&(g-=P-(P*Q+I*J),y-=I-(P*F+I*$))):(ge=L[6],se=L[7],E=L[8],T=L[9],Y=L[10],le=L[11],g=L[12],y=L[13],v=L[14],B=qs(ge,Y),N=B*rs,B&&(W=Math.cos(-B),D=Math.sin(-B),ee=ae*W+E*D,V=ce*W+T*D,X=ge*W+Y*D,E=ae*-D+E*W,T=ce*-D+T*W,Y=ge*-D+Y*W,le=se*-D+le*W,ae=ee,ce=V,ge=X),B=qs(-J,Y),C=B*rs,B&&(W=Math.cos(-B),D=Math.sin(-B),ee=Q*W-E*D,V=F*W-T*D,X=J*W-Y*D,le=$*D+le*W,Q=ee,F=V,J=X),B=qs(F,Q),w=B*rs,B&&(W=Math.cos(B),D=Math.sin(B),ee=Q*W+F*D,V=ae*W+ce*D,F=F*W-Q*D,ce=ce*W-ae*D,Q=ee,ae=V),N&&Math.abs(N)+Math.abs(w)>359.9&&(N=w=0,C=180-C),b=Pt(Math.sqrt(Q*Q+F*F+J*J)),k=Pt(Math.sqrt(ce*ce+ge*ge)),B=qs(ae,ce),A=Math.abs(B)>2e-4?B*rs:0,j=le?1/(le<0?-le:le):0),i.svg&&(ee=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!fb(cn(t,yt)),ee&&t.setAttribute("transform",ee))),Math.abs(A)>90&&Math.abs(A)<270&&(c?(b*=-1,A+=w<=0?180:-180,w+=w<=0?180:-180):(k*=-1,A+=A<=0?180:-180)),n=n||i.uncache,i.x=g-((i.xPercent=g&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-g)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=y-((i.yPercent=y&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-y)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=v+u,i.scaleX=Pt(b),i.scaleY=Pt(k),i.rotation=Pt(w)+f,i.rotationX=Pt(N)+f,i.rotationY=Pt(C)+f,i.skewX=A+f,i.skewY=S+f,i.transformPerspective=j+u,(i.zOrigin=parseFloat(m.split(" ")[2])||!n&&i.zOrigin||0)&&(s[Yr]=gu(m)),i.xOffset=i.yOffset=0,i.force3D=dn.force3D,i.renderTransform=i.svg?pE:lb?pb:fE,i.uncache=0,i},gu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wp=function(t,n,i){var s=pr(n);return Pt(parseFloat(n)+parseFloat(Ca(t,"x",i+"px",s)))+s},fE=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,pb(t,n)},Za="0deg",gl="0px",$a=") ",pb=function(t,n){var i=n||this,s=i.xPercent,c=i.yPercent,u=i.x,f=i.y,p=i.z,m=i.rotation,g=i.rotationY,y=i.rotationX,v=i.skewX,b=i.skewY,k=i.scaleX,w=i.scaleY,N=i.transformPerspective,C=i.force3D,A=i.target,S=i.zOrigin,j="",P=C==="auto"&&t&&t!==1||C===!0;if(S&&(y!==Za||g!==Za)){var I=parseFloat(g)*fo,L=Math.sin(I),B=Math.cos(I),W;I=parseFloat(y)*fo,W=Math.cos(I),u=Wp(A,u,L*W*-S),f=Wp(A,f,-Math.sin(I)*-S),p=Wp(A,p,B*W*-S+S)}N!==gl&&(j+="perspective("+N+$a),(s||c)&&(j+="translate("+s+"%, "+c+"%) "),(P||u!==gl||f!==gl||p!==gl)&&(j+=p!==gl||P?"translate3d("+u+", "+f+", "+p+") ":"translate("+u+", "+f+$a),m!==Za&&(j+="rotate("+m+$a),g!==Za&&(j+="rotateY("+g+$a),y!==Za&&(j+="rotateX("+y+$a),(v!==Za||b!==Za)&&(j+="skew("+v+", "+b+$a),(k!==1||w!==1)&&(j+="scale("+k+", "+w+$a),A.style[yt]=j||"translate(0, 0)"},pE=function(t,n){var i=n||this,s=i.xPercent,c=i.yPercent,u=i.x,f=i.y,p=i.rotation,m=i.skewX,g=i.skewY,y=i.scaleX,v=i.scaleY,b=i.target,k=i.xOrigin,w=i.yOrigin,N=i.xOffset,C=i.yOffset,A=i.forceCSS,S=parseFloat(u),j=parseFloat(f),P,I,L,B,W;p=parseFloat(p),m=parseFloat(m),g=parseFloat(g),g&&(g=parseFloat(g),m+=g,p+=g),p||m?(p*=fo,m*=fo,P=Math.cos(p)*y,I=Math.sin(p)*y,L=Math.sin(p-m)*-v,B=Math.cos(p-m)*v,m&&(g*=fo,W=Math.tan(m-g),W=Math.sqrt(1+W*W),L*=W,B*=W,g&&(W=Math.tan(g),W=Math.sqrt(1+W*W),P*=W,I*=W)),P=Pt(P),I=Pt(I),L=Pt(L),B=Pt(B)):(P=y,B=v,I=L=0),(S&&!~(u+"").indexOf("px")||j&&!~(f+"").indexOf("px"))&&(S=Ca(b,"x",u,"px"),j=Ca(b,"y",f,"px")),(k||w||N||C)&&(S=Pt(S+k-(k*P+w*L)+N),j=Pt(j+w-(k*I+w*B)+C)),(s||c)&&(W=b.getBBox(),S=Pt(S+s/100*W.width),j=Pt(j+c/100*W.height)),W="matrix("+P+","+I+","+L+","+B+","+S+","+j+")",b.setAttribute("transform",W),A&&(b.style[yt]=W)},hE=function(t,n,i,s,c){var u=360,f=er(c),p=parseFloat(c)*(f&&~c.indexOf("rad")?rs:1),m=p-s,g=s+m+"deg",y,v;return f&&(y=c.split("_")[1],y==="short"&&(m%=u,m!==m%(u/2)&&(m+=m<0?u:-u)),y==="cw"&&m<0?m=(m+u*bv)%u-~~(m/u)*u:y==="ccw"&&m>0&&(m=(m-u*bv)%u-~~(m/u)*u)),t._pt=v=new Vr(t._pt,n,i,s,m,K3),v.e=g,v.u="deg",t._props.push(i),v},Sv=function(t,n){for(var i in n)t[i]=n[i];return t},mE=function(t,n,i){var s=Sv({},i._gsap),c="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,p,m,g,y,v,b,k;s.svg?(m=i.getAttribute("transform"),i.setAttribute("transform",""),u[yt]=n,f=rc(i,1),Aa(i,yt),i.setAttribute("transform",m)):(m=getComputedStyle(i)[yt],u[yt]=n,f=rc(i,1),u[yt]=m);for(p in Di)m=s[p],g=f[p],m!==g&&c.indexOf(p)<0&&(b=pr(m),k=pr(g),y=b!==k?Ca(i,p,m,k):parseFloat(m),v=parseFloat(g),t._pt=new Vr(t._pt,f,p,y,v-y,_h),t._pt.u=k||0,t._props.push(p));Sv(f,s)};Hr("padding,margin,Width,Radius",function(a,t){var n="Top",i="Right",s="Bottom",c="Left",u=(t<3?[n,i,s,c]:[n+c,n+i,s+i,s+c]).map(function(f){return t<2?a+f:"border"+f+a});mu[t>1?"border"+a:a]=function(f,p,m,g,y){var v,b;if(arguments.length<4)return v=u.map(function(k){return Ci(f,k,m)}),b=v.join(" "),b.split(v[0]).length===5?v[0]:b;v=(g+"").split(" "),b={},u.forEach(function(k,w){return b[k]=v[w]=v[w]||v[(w-1)/2|0]}),f.init(p,b,y)}});var hb={name:"css",register:jh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,c){var u=this._props,f=t.style,p=i.vars.startAt,m,g,y,v,b,k,w,N,C,A,S,j,P,I,L,B,W;Am||jh(),this.styles=this.styles||ob(t),B=this.styles.props,this.tween=i;for(w in n)if(w!=="autoRound"&&(g=n[w],!(nn[w]&&Ky(w,n,i,s,t,c)))){if(b=typeof g,k=mu[w],b==="function"&&(g=g.call(i,s,t,c),b=typeof g),b==="string"&&~g.indexOf("random(")&&(g=Zl(g)),k)k(this,t,w,g,i)&&(L=1);else if(w.substr(0,2)==="--")m=(getComputedStyle(t).getPropertyValue(w)+"").trim(),g+="",_a.lastIndex=0,_a.test(m)||(N=pr(m),C=pr(g),C?N!==C&&(m=Ca(t,w,m,C)+C):N&&(g+=N)),this.add(f,"setProperty",m,g,s,c,0,0,w),u.push(w),B.push(w,0,f[w]);else if(b!=="undefined"){if(p&&w in p?(m=typeof p[w]=="function"?p[w].call(i,s,t,c):p[w],er(m)&&~m.indexOf("random(")&&(m=Zl(m)),pr(m+"")||m==="auto"||(m+=dn.units[w]||pr(Ci(t,w))||""),(m+"").charAt(1)==="="&&(m=Ci(t,w))):m=Ci(t,w),v=parseFloat(m),A=b==="string"&&g.charAt(1)==="="&&g.substr(0,2),A&&(g=g.substr(2)),y=parseFloat(g),w in ci&&(w==="autoAlpha"&&(v===1&&Ci(t,"visibility")==="hidden"&&y&&(v=0),B.push("visibility",0,f.visibility),va(this,f,"visibility",v?"inherit":"hidden",y?"inherit":"hidden",!y)),w!=="scale"&&w!=="transform"&&(w=ci[w],~w.indexOf(",")&&(w=w.split(",")[0]))),S=w in Di,S){if(this.styles.save(w),W=g,b==="string"&&g.substring(0,6)==="var(--"){if(g=cn(t,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var D=t.style.perspective;t.style.perspective=g,g=cn(t,"perspective"),D?t.style.perspective=D:Aa(t,"perspective")}y=parseFloat(g)}if(j||(P=t._gsap,P.renderTransform&&!n.parseTransform||rc(t,n.parseTransform),I=n.smoothOrigin!==!1&&P.smooth,j=this._pt=new Vr(this._pt,f,yt,0,1,P.renderTransform,P,0,-1),j.dep=1),w==="scale")this._pt=new Vr(this._pt,P,"scaleY",P.scaleY,(A?co(P.scaleY,A+y):y)-P.scaleY||0,_h),this._pt.u=0,u.push("scaleY",w),w+="X";else if(w==="transformOrigin"){B.push(Yr,0,f[Yr]),g=dE(g),P.svg?Eh(t,g,0,I,0,this):(C=parseFloat(g.split(" ")[2])||0,C!==P.zOrigin&&va(this,P,"zOrigin",P.zOrigin,C),va(this,f,w,gu(m),gu(g)));continue}else if(w==="svgOrigin"){Eh(t,g,1,I,0,this);continue}else if(w in ub){hE(this,P,w,v,A?co(v,A+g):g);continue}else if(w==="smoothOrigin"){va(this,P,"smooth",P.smooth,g);continue}else if(w==="force3D"){P[w]=g;continue}else if(w==="transform"){mE(this,g,t);continue}}else w in f||(w=jo(w)||w);if(S||(y||y===0)&&(v||v===0)&&!Q3.test(g)&&w in f)N=(m+"").substr((v+"").length),y||(y=0),C=pr(g)||(w in dn.units?dn.units[w]:N),N!==C&&(v=Ca(t,w,m,C)),this._pt=new Vr(this._pt,S?P:f,w,v,(A?co(v,A+y):y)-v,!S&&(C==="px"||w==="zIndex")&&n.autoRound!==!1?$3:_h),this._pt.u=C||0,S&&W!==g?(this._pt.b=m,this._pt.e=W,this._pt.r=Z3):N!==C&&C!=="%"&&(this._pt.b=m,this._pt.r=J3);else if(w in f)cE.call(this,t,w,m,A?A+g:g);else if(w in t)this.add(t,w,m||t[w],A?A+g:g,s,c);else if(w!=="parseTransform"){vm(w,g);continue}S||(w in f?B.push(w,0,f[w]):typeof t[w]=="function"?B.push(w,2,t[w]()):B.push(w,1,m||t[w])),u.push(w)}}L&&rb(this)},render:function(t,n){if(n.tween._time||!Cm())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Ci,aliases:ci,getSetter:function(t,n,i){var s=ci[n];return s&&s.indexOf(",")<0&&(n=s),n in Di&&n!==Yr&&(t._gsap.x||Ci(t,"x"))?i&&yv===i?n==="scale"?nE:rE:(yv=i||{})&&(n==="scale"?iE:aE):t.style&&!mm(t.style[n])?eE:~n.indexOf("-")?tE:Em(t,n)},core:{_removeProperty:Aa,_getMatrix:Pm}};Gr.utils.checkPrefix=jo;Gr.core.getStyleSaver=ob;(function(a,t,n,i){var s=Hr(a+","+t+","+n,function(c){Di[c]=1});Hr(t,function(c){dn.units[c]="deg",ub[c]=1}),ci[s[13]]=a+","+t,Hr(i,function(c){var u=c.split(":");ci[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){dn.units[a]="px"});Gr.registerPlugin(hb);var Z=Gr.registerPlugin(hb)||Gr;Z.core.Tween;function gE(a,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function xE(a,t,n){return t&&gE(a.prototype,t),a}var nr,Qd,on,ya,ba,po,mb,ns,ho,gb,Li,Gn,xb,vb=function(){return nr||typeof window<"u"&&(nr=window.gsap)&&nr.registerPlugin&&nr},yb=1,io=[],Ue=[],ui=[],Pl=Date.now,Sh=function(t,n){return n},vE=function(){var t=ho.core,n=t.bridge||{},i=t._scrollers,s=t._proxies;i.push.apply(i,Ue),s.push.apply(s,ui),Ue=i,ui=s,Sh=function(u,f){return n[u](f)}},Na=function(t,n){return~ui.indexOf(t)&&ui[ui.indexOf(t)+1][n]},Rl=function(t){return!!~gb.indexOf(t)},_r=function(t,n,i,s,c){return t.addEventListener(n,i,{passive:s!==!1,capture:!!c})},kr=function(t,n,i,s){return t.removeEventListener(n,i,!!s)},Sd="scrollLeft",Ad="scrollTop",Ah=function(){return Li&&Li.isPressed||Ue.cache++},xu=function(t,n){var i=function s(c){if(c||c===0){yb&&(on.history.scrollRestoration="manual");var u=Li&&Li.isPressed;c=s.v=Math.round(c)||(Li&&Li.iOS?1:0),t(c),s.cacheID=Ue.cache,u&&Sh("ss",c)}else(n||Ue.cache!==s.cacheID||Sh("ref"))&&(s.cacheID=Ue.cache,s.v=t());return s.v+s.offset};return i.offset=0,t&&i},Sr={s:Sd,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xu(function(a){return arguments.length?on.scrollTo(a,Vt.sc()):on.pageXOffset||ya[Sd]||ba[Sd]||po[Sd]||0})},Vt={s:Ad,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sr,sc:xu(function(a){return arguments.length?on.scrollTo(Sr.sc(),a):on.pageYOffset||ya[Ad]||ba[Ad]||po[Ad]||0})},Dr=function(t,n){return(n&&n._ctx&&n._ctx.selector||nr.utils.toArray)(t)[0]||(typeof t=="string"&&nr.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},yE=function(t,n){for(var i=n.length;i--;)if(n[i]===t||n[i].contains(t))return!0;return!1},Ta=function(t,n){var i=n.s,s=n.sc;Rl(t)&&(t=ya.scrollingElement||ba);var c=Ue.indexOf(t),u=s===Vt.sc?1:2;!~c&&(c=Ue.push(t)-1),Ue[c+u]||_r(t,"scroll",Ah);var f=Ue[c+u],p=f||(Ue[c+u]=xu(Na(t,i),!0)||(Rl(t)?s:xu(function(m){return arguments.length?t[i]=m:t[i]})));return p.target=t,f||(p.smooth=nr.getProperty(t,"scrollBehavior")==="smooth"),p},Ch=function(t,n,i){var s=t,c=t,u=Pl(),f=u,p=n||50,m=Math.max(500,p*3),g=function(k,w){var N=Pl();w||N-u>p?(c=s,s=k,f=u,u=N):i?s+=k:s=c+(k-c)/(N-f)*(u-f)},y=function(){c=s=i?0:s,f=u=0},v=function(k){var w=f,N=c,C=Pl();return(k||k===0)&&k!==s&&g(k),u===f||C-f>m?0:(s+(i?N:-N))/((i?C:u)-w)*1e3};return{update:g,reset:y,getVelocity:v}},xl=function(t,n){return n&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Av=function(t){var n=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(i)?n:i},bb=function(){ho=nr.core.globals().ScrollTrigger,ho&&ho.core&&vE()},wb=function(t){return nr=t||vb(),!Qd&&nr&&typeof document<"u"&&document.body&&(on=window,ya=document,ba=ya.documentElement,po=ya.body,gb=[on,ya,ba,po],nr.utils.clamp,xb=nr.core.context||function(){},ns="onpointerenter"in po?"pointer":"mouse",mb=Rt.isTouch=on.matchMedia&&on.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in on||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gn=Rt.eventTypes=("ontouchstart"in ba?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ba?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yb=0},500),Qd=1),ho||bb(),Qd};Sr.op=Vt;Ue.cache=0;var Rt=(function(){function a(n){this.init(n)}var t=a.prototype;return t.init=function(i){Qd||wb(nr)||console.warn("Please gsap.registerPlugin(Observer)"),ho||bb();var s=i.tolerance,c=i.dragMinimum,u=i.type,f=i.target,p=i.lineHeight,m=i.debounce,g=i.preventDefault,y=i.onStop,v=i.onStopDelay,b=i.ignore,k=i.wheelSpeed,w=i.event,N=i.onDragStart,C=i.onDragEnd,A=i.onDrag,S=i.onPress,j=i.onRelease,P=i.onRight,I=i.onLeft,L=i.onUp,B=i.onDown,W=i.onChangeX,D=i.onChangeY,Q=i.onChange,F=i.onToggleX,J=i.onToggleY,$=i.onHover,ae=i.onHoverEnd,ce=i.onMove,ee=i.ignoreCheck,V=i.isNormalizer,X=i.onGestureStart,E=i.onGestureEnd,T=i.onWheel,Y=i.onEnable,se=i.onDisable,le=i.onClick,ge=i.scrollSpeed,K=i.capture,ue=i.allowClicks,ye=i.lockAxis,xe=i.onLockAxis;this.target=f=Dr(f)||ba,this.vars=i,b&&(b=nr.utils.toArray(b)),s=s||1e-9,c=c||0,k=k||1,ge=ge||1,u=u||"wheel,touch,pointer",m=m!==!1,p||(p=parseFloat(on.getComputedStyle(po).lineHeight)||22);var Me,wt,St,ne,Ee,it,kt,q=this,ar=0,qr=0,Cr=i.passive||!g&&i.passive!==!1,Qe=Ta(f,Sr),Xr=Ta(f,Vt),zn=Qe(),Jn=Xr(),At=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Gn[0]==="pointerdown",On=Rl(f),at=f.ownerDocument||ya,sr=[0,0,0],gr=[0,0,0],xr=0,In=function(){return xr=Pl()},_t=function(_e,We){return(q.event=_e)&&b&&yE(_e.target,b)||We&&At&&_e.pointerType!=="touch"||ee&&ee(_e,We)},Ia=function(){q._vx.reset(),q._vy.reset(),wt.pause(),y&&y(q)},pn=function(){var _e=q.deltaX=Av(sr),We=q.deltaY=Av(gr),de=Math.abs(_e)>=s,Se=Math.abs(We)>=s;Q&&(de||Se)&&Q(q,_e,We,sr,gr),de&&(P&&q.deltaX>0&&P(q),I&&q.deltaX<0&&I(q),W&&W(q),F&&q.deltaX<0!=ar<0&&F(q),ar=q.deltaX,sr[0]=sr[1]=sr[2]=0),Se&&(B&&q.deltaY>0&&B(q),L&&q.deltaY<0&&L(q),D&&D(q),J&&q.deltaY<0!=qr<0&&J(q),qr=q.deltaY,gr[0]=gr[1]=gr[2]=0),(ne||St)&&(ce&&ce(q),St&&(N&&St===1&&N(q),A&&A(q),St=0),ne=!1),it&&!(it=!1)&&xe&&xe(q),Ee&&(T(q),Ee=!1),Me=0},Ui=function(_e,We,de){sr[de]+=_e,gr[de]+=We,q._vx.update(_e),q._vy.update(We),m?Me||(Me=requestAnimationFrame(pn)):pn()},Zn=function(_e,We){ye&&!kt&&(q.axis=kt=Math.abs(_e)>Math.abs(We)?"x":"y",it=!0),kt!=="y"&&(sr[2]+=_e,q._vx.update(_e,!0)),kt!=="x"&&(gr[2]+=We,q._vy.update(We,!0)),m?Me||(Me=requestAnimationFrame(pn)):pn()},hn=function(_e){if(!_t(_e,1)){_e=xl(_e,g);var We=_e.clientX,de=_e.clientY,Se=We-q.x,we=de-q.y,Ae=q.isDragging;q.x=We,q.y=de,(Ae||(Se||we)&&(Math.abs(q.startX-We)>=c||Math.abs(q.startY-de)>=c))&&(St||(St=Ae?2:1),Ae||(q.isDragging=!0),Zn(Se,we))}},Mn=q.onPress=function(Pe){_t(Pe,1)||Pe&&Pe.button||(q.axis=kt=null,wt.pause(),q.isPressed=!0,Pe=xl(Pe),ar=qr=0,q.startX=q.x=Pe.clientX,q.startY=q.y=Pe.clientY,q._vx.reset(),q._vy.reset(),_r(V?f:at,Gn[1],hn,Cr,!0),q.deltaX=q.deltaY=0,S&&S(q))},Re=q.onRelease=function(Pe){if(!_t(Pe,1)){kr(V?f:at,Gn[1],hn,!0);var _e=!isNaN(q.y-q.startY),We=q.isDragging,de=We&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Se=xl(Pe);!de&&_e&&(q._vx.reset(),q._vy.reset(),g&&ue&&nr.delayedCall(.08,function(){if(Pl()-xr>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(at.createEvent){var we=at.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,on,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(we)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,y&&We&&!V&&wt.restart(!0),St&&pn(),C&&We&&C(q),j&&j(q,de)}},Fn=function(_e){return _e.touches&&_e.touches.length>1&&(q.isGesturing=!0)&&X(_e,q.isDragging)},Yt=function(){return(q.isGesturing=!1)||E(q)},Gt=function(_e){if(!_t(_e)){var We=Qe(),de=Xr();Ui((We-zn)*ge,(de-Jn)*ge,1),zn=We,Jn=de,y&&wt.restart(!0)}},Tr=function(_e){if(!_t(_e)){_e=xl(_e,g),T&&(Ee=!0);var We=(_e.deltaMode===1?p:_e.deltaMode===2?on.innerHeight:1)*k;Ui(_e.deltaX*We,_e.deltaY*We,0),y&&!V&&wt.restart(!0)}},$n=function(_e){if(!_t(_e)){var We=_e.clientX,de=_e.clientY,Se=We-q.x,we=de-q.y;q.x=We,q.y=de,ne=!0,y&&wt.restart(!0),(Se||we)&&Zn(Se,we)}},gi=function(_e){q.event=_e,$(q)},mn=function(_e){q.event=_e,ae(q)},Wi=function(_e){return _t(_e)||xl(_e,g)&&le(q)};wt=q._dc=nr.delayedCall(v||.25,Ia).pause(),q.deltaX=q.deltaY=0,q._vx=Ch(0,50,!0),q._vy=Ch(0,50,!0),q.scrollX=Qe,q.scrollY=Xr,q.isDragging=q.isGesturing=q.isPressed=!1,xb(this),q.enable=function(Pe){return q.isEnabled||(_r(On?at:f,"scroll",Ah),u.indexOf("scroll")>=0&&_r(On?at:f,"scroll",Gt,Cr,K),u.indexOf("wheel")>=0&&_r(f,"wheel",Tr,Cr,K),(u.indexOf("touch")>=0&&mb||u.indexOf("pointer")>=0)&&(_r(f,Gn[0],Mn,Cr,K),_r(at,Gn[2],Re),_r(at,Gn[3],Re),ue&&_r(f,"click",In,!0,!0),le&&_r(f,"click",Wi),X&&_r(at,"gesturestart",Fn),E&&_r(at,"gestureend",Yt),$&&_r(f,ns+"enter",gi),ae&&_r(f,ns+"leave",mn),ce&&_r(f,ns+"move",$n)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=ne=St=!1,q._vx.reset(),q._vy.reset(),zn=Qe(),Jn=Xr(),Pe&&Pe.type&&Mn(Pe),Y&&Y(q)),q},q.disable=function(){q.isEnabled&&(io.filter(function(Pe){return Pe!==q&&Rl(Pe.target)}).length||kr(On?at:f,"scroll",Ah),q.isPressed&&(q._vx.reset(),q._vy.reset(),kr(V?f:at,Gn[1],hn,!0)),kr(On?at:f,"scroll",Gt,K),kr(f,"wheel",Tr,K),kr(f,Gn[0],Mn,K),kr(at,Gn[2],Re),kr(at,Gn[3],Re),kr(f,"click",In,!0),kr(f,"click",Wi),kr(at,"gesturestart",Fn),kr(at,"gestureend",Yt),kr(f,ns+"enter",gi),kr(f,ns+"leave",mn),kr(f,ns+"move",$n),q.isEnabled=q.isPressed=q.isDragging=!1,se&&se(q))},q.kill=q.revert=function(){q.disable();var Pe=io.indexOf(q);Pe>=0&&io.splice(Pe,1),Li===q&&(Li=0)},io.push(q),V&&Rl(f)&&(Li=q),q.enable(w)},xE(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a})();Rt.version="3.15.0";Rt.create=function(a){return new Rt(a)};Rt.register=wb;Rt.getAll=function(){return io.slice()};Rt.getById=function(a){return io.filter(function(t){return t.vars.id===a})[0]};vb()&&nr.registerPlugin(Rt);var he,$s,Be,Je,an,Xe,Rm,vu,nc,Ll,wl,Cd,ur,Wu,Th,jr,Cv,Tv,eo,kb,Hp,_b,Nr,Ph,Nb,jb,fa,Rh,Lm,mo,zm,zl,Lh,Vp,Td=1,fr=Date.now,Yp=fr(),Pn=0,kl=0,Pv=function(t,n,i){var s=rn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+n+"Clamp"]=s,s?t.substr(6,t.length-7):t},Rv=function(t,n){return n&&(!rn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},bE=function a(){return kl&&requestAnimationFrame(a)},Lv=function(){return Wu=1},zv=function(){return Wu=0},oi=function(t){return t},_l=function(t){return Math.round(t*1e5)/1e5||0},Eb=function(){return typeof window<"u"},Sb=function(){return he||Eb()&&(he=window.gsap)&&he.registerPlugin&&he},vs=function(t){return!!~Rm.indexOf(t)},Ab=function(t){return(t==="Height"?zm:Be["inner"+t])||an["client"+t]||Xe["client"+t]},Cb=function(t){return Na(t,"getBoundingClientRect")||(vs(t)?function(){return eu.width=Be.innerWidth,eu.height=zm,eu}:function(){return Ti(t)})},wE=function(t,n,i){var s=i.d,c=i.d2,u=i.a;return(u=Na(t,"getBoundingClientRect"))?function(){return u()[s]}:function(){return(n?Ab(c):t["client"+c])||0}},kE=function(t,n){return!n||~ui.indexOf(t)?Cb(t):function(){return eu}},di=function(t,n){var i=n.s,s=n.d2,c=n.d,u=n.a;return Math.max(0,(i="scroll"+s)&&(u=Na(t,i))?u()-Cb(t)()[c]:vs(t)?(an[i]||Xe[i])-Ab(s):t[i]-t["offset"+s])},Pd=function(t,n){for(var i=0;i<eo.length;i+=3)(!n||~n.indexOf(eo[i+1]))&&t(eo[i],eo[i+1],eo[i+2])},rn=function(t){return typeof t=="string"},hr=function(t){return typeof t=="function"},Nl=function(t){return typeof t=="number"},is=function(t){return typeof t=="object"},vl=function(t,n,i){return t&&t.progress(n?0:1)&&i&&t.pause()},Xs=function(t,n,i){if(t.enabled){var s=t._ctx?t._ctx.add(function(){return n(t,i)}):n(t,i);s&&s.totalTime&&(t.callbackAnimation=s)}},Qs=Math.abs,Tb="left",Pb="top",Om="right",Im="bottom",ps="width",hs="height",Ol="Right",Il="Left",Ml="Top",Fl="Bottom",It="padding",jn="margin",Eo="Width",Mm="Height",Ht="px",En=function(t){return Be.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},_E=function(t){var n=En(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},Ov=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},Ti=function(t,n){var i=n&&En(t)[Th]!=="matrix(1, 0, 0, 1, 0, 0)"&&he.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),s},yu=function(t,n){var i=n.d2;return t["offset"+i]||t["client"+i]||0},Rb=function(t){var n=[],i=t.labels,s=t.duration(),c;for(c in i)n.push(i[c]/s);return n},NE=function(t){return function(n){return he.utils.snap(Rb(t),n)}},Fm=function(t){var n=he.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(s,c){return s-c});return i?function(s,c,u){u===void 0&&(u=.001);var f;if(!c)return n(s);if(c>0){for(s-=u,f=0;f<i.length;f++)if(i[f]>=s)return i[f];return i[f-1]}else for(f=i.length,s+=u;f--;)if(i[f]<=s)return i[f];return i[0]}:function(s,c,u){u===void 0&&(u=.001);var f=n(s);return!c||Math.abs(f-s)<u||f-s<0==c<0?f:n(c<0?s-t:s+t)}},jE=function(t){return function(n,i){return Fm(Rb(t))(n,i.direction)}},Rd=function(t,n,i,s){return i.split(",").forEach(function(c){return t(n,c,s)})},Zt=function(t,n,i,s,c){return t.addEventListener(n,i,{passive:!s,capture:!!c})},Jt=function(t,n,i,s){return t.removeEventListener(n,i,!!s)},Ld=function(t,n,i){i=i&&i.wheelHandler,i&&(t(n,"wheel",i),t(n,"touchmove",i))},Iv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zd={toggleActions:"play",anticipatePin:0},bu={top:0,left:0,center:.5,bottom:1,right:1},Kd=function(t,n){if(rn(t)){var i=t.indexOf("="),s=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(s*=n/100),t=t.substr(0,i-1)),t=s+(t in bu?bu[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Od=function(t,n,i,s,c,u,f,p){var m=c.startColor,g=c.endColor,y=c.fontSize,v=c.indent,b=c.fontWeight,k=Je.createElement("div"),w=vs(i)||Na(i,"pinType")==="fixed",N=t.indexOf("scroller")!==-1,C=w?Xe:i.tagName==="IFRAME"?i.contentDocument.body:i,A=t.indexOf("start")!==-1,S=A?m:g,j="border-color:"+S+";font-size:"+y+";color:"+S+";font-weight:"+b+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return j+="position:"+((N||p)&&w?"fixed;":"absolute;"),(N||p||!w)&&(j+=(s===Vt?Om:Im)+":"+(u+parseFloat(v))+"px;"),f&&(j+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),k._isStart=A,k.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),k.style.cssText=j,k.innerText=n||n===0?t+"-"+n:t,C.children[0]?C.insertBefore(k,C.children[0]):C.appendChild(k),k._offset=k["offset"+s.op.d2],Jd(k,0,s,A),k},Jd=function(t,n,i,s){var c={display:"block"},u=i[s?"os2":"p2"],f=i[s?"p2":"os2"];t._isFlipped=s,c[i.a+"Percent"]=s?-100:0,c[i.a]=s?"1px":0,c["border"+u+Eo]=1,c["border"+f+Eo]=0,c[i.p]=n+"px",he.set(t,c)},Ie=[],zh={},ic,Mv=function(){return fr()-Pn>34&&(ic||(ic=requestAnimationFrame(Oi)))},Ks=function(){(!Nr||!Nr.isPressed||Nr.startX>Xe.clientWidth)&&(Ue.cache++,Nr?ic||(ic=requestAnimationFrame(Oi)):Oi(),Pn||bs("scrollStart"),Pn=fr())},Gp=function(){jb=Be.innerWidth,Nb=Be.innerHeight},jl=function(t){Ue.cache++,(t===!0||!ur&&!_b&&!Je.fullscreenElement&&!Je.webkitFullscreenElement&&(!Ph||jb!==Be.innerWidth||Math.abs(Be.innerHeight-Nb)>Be.innerHeight*.25))&&vu.restart(!0)},ys={},EE=[],Lb=function a(){return Jt(Ce,"scrollEnd",a)||ss(!0)},bs=function(t){return ys[t]&&ys[t].map(function(n){return n()})||EE},tn=[],zb=function(t){for(var n=0;n<tn.length;n+=5)(!t||tn[n+4]&&tn[n+4].query===t)&&(tn[n].style.cssText=tn[n+1],tn[n].getBBox&&tn[n].setAttribute("transform",tn[n+2]||""),tn[n+3].uncache=1)},Ob=function(){return Ue.forEach(function(t){return hr(t)&&++t.cacheID&&(t.rec=t())})},Dm=function(t,n){var i;for(jr=0;jr<Ie.length;jr++)i=Ie[jr],i&&(!n||i._ctx===n)&&(t?i.kill(1):i.revert(!0,!0));zl=!0,n&&zb(n),n||bs("revert")},Ib=function(t,n){Ue.cache++,(n||!Er)&&Ue.forEach(function(i){return hr(i)&&i.cacheID++&&(i.rec=0)}),rn(t)&&(Be.history.scrollRestoration=Lm=t)},Er,ms=0,Fv,SE=function(){if(Fv!==ms){var t=Fv=ms;requestAnimationFrame(function(){return t===ms&&ss(!0)})}},Mb=function(){Xe.appendChild(mo),zm=!Nr&&mo.offsetHeight||Be.innerHeight,Xe.removeChild(mo)},Dv=function(t){return nc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},ss=function(t,n){if(an=Je.documentElement,Xe=Je.body,Rm=[Be,Je,an,Xe],Pn&&!t&&!zl){Zt(Ce,"scrollEnd",Lb);return}Mb(),Er=Ce.isRefreshing=!0,zl||Ob();var i=bs("refreshInit");kb&&Ce.sort(),n||Dm(),Ue.forEach(function(s){hr(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),Ie.slice(0).forEach(function(s){return s.refresh()}),zl=!1,Ie.forEach(function(s){if(s._subPinOffset&&s.pin){var c=s.vars.horizontal?"offsetWidth":"offsetHeight",u=s.pin[c];s.revert(!0,1),s.adjustPinSpacing(s.pin[c]-u),s.refresh()}}),Lh=1,Dv(!0),Ie.forEach(function(s){var c=di(s.scroller,s._dir),u=s.vars.end==="max"||s._endClamp&&s.end>c,f=s._startClamp&&s.start>=c;(u||f)&&s.setPositions(f?c-1:s.start,u?Math.max(f?c:s.start+1,c):s.end,!0)}),Dv(!1),Lh=0,i.forEach(function(s){return s&&s.render&&s.render(-1)}),Ue.forEach(function(s){hr(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),Ib(Lm,1),vu.pause(),ms++,Er=2,Oi(2),Ie.forEach(function(s){return hr(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Er=Ce.isRefreshing=!1,bs("refresh")},Oh=0,Zd=1,Dl,Oi=function(t){if(t===2||!Er&&!zl){Ce.isUpdating=!0,Dl&&Dl.update(0);var n=Ie.length,i=fr(),s=i-Yp>=50,c=n&&Ie[0].scroll();if(Zd=Oh>c?-1:1,Er||(Oh=c),s&&(Pn&&!Wu&&i-Pn>200&&(Pn=0,bs("scrollEnd")),wl=Yp,Yp=i),Zd<0){for(jr=n;jr-- >0;)Ie[jr]&&Ie[jr].update(0,s);Zd=1}else for(jr=0;jr<n;jr++)Ie[jr]&&Ie[jr].update(0,s);Ce.isUpdating=!1}ic=0},Ih=[Tb,Pb,Im,Om,jn+Fl,jn+Ol,jn+Ml,jn+Il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$d=Ih.concat([ps,hs,"boxSizing","max"+Eo,"max"+Mm,"position",jn,It,It+Ml,It+Ol,It+Fl,It+Il]),AE=function(t,n,i){go(i);var s=t._gsap;if(s.spacerIsNative)go(s.spacerState);else if(t._gsap.swappedIn){var c=n.parentNode;c&&(c.insertBefore(t,n),c.removeChild(n))}t._gsap.swappedIn=!1},qp=function(t,n,i,s){if(!t._gsap.swappedIn){for(var c=Ih.length,u=n.style,f=t.style,p;c--;)p=Ih[c],u[p]=i[p];u.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(u.display="inline-block"),f[Im]=f[Om]="auto",u.flexBasis=i.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[ps]=yu(t,Sr)+Ht,u[hs]=yu(t,Vt)+Ht,u[It]=f[jn]=f[Pb]=f[Tb]="0",go(s),f[ps]=f["max"+Eo]=i[ps],f[hs]=f["max"+Mm]=i[hs],f[It]=i[It],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},CE=/([A-Z])/g,go=function(t){if(t){var n=t.t.style,i=t.length,s=0,c,u;for((t.t._gsap||he.core.getCache(t.t)).uncache=1;s<i;s+=2)u=t[s+1],c=t[s],u?n[c]=u:n[c]&&n.removeProperty(c.replace(CE,"-$1").toLowerCase())}},Id=function(t){for(var n=$d.length,i=t.style,s=[],c=0;c<n;c++)s.push($d[c],i[$d[c]]);return s.t=t,s},TE=function(t,n,i){for(var s=[],c=t.length,u=i?8:0,f;u<c;u+=2)f=t[u],s.push(f,f in n?n[f]:t[u+1]);return s.t=t.t,s},eu={left:0,top:0},Bv=function(t,n,i,s,c,u,f,p,m,g,y,v,b,k){hr(t)&&(t=t(p)),rn(t)&&t.substr(0,3)==="max"&&(t=v+(t.charAt(4)==="="?Kd("0"+t.substr(3),i):0));var w=b?b.time():0,N,C,A;if(b&&b.seek(0),isNaN(t)||(t=+t),Nl(t))b&&(t=he.utils.mapRange(b.scrollTrigger.start,b.scrollTrigger.end,0,v,t)),f&&Jd(f,i,s,!0);else{hr(n)&&(n=n(p));var S=(t||"0").split(" "),j,P,I,L;A=Dr(n,p)||Xe,j=Ti(A)||{},(!j||!j.left&&!j.top)&&En(A).display==="none"&&(L=A.style.display,A.style.display="block",j=Ti(A),L?A.style.display=L:A.style.removeProperty("display")),P=Kd(S[0],j[s.d]),I=Kd(S[1]||"0",i),t=j[s.p]-m[s.p]-g+P+c-I,f&&Jd(f,I,s,i-I<20||f._isStart&&I>20),i-=i-I}if(k&&(p[k]=t||-.001,t<0&&(t=0)),u){var B=t+i,W=u._isStart;N="scroll"+s.d2,Jd(u,B,s,W&&B>20||!W&&(y?Math.max(Xe[N],an[N]):u.parentNode[N])<=B+1),y&&(m=Ti(f),y&&(u.style[s.op.p]=m[s.op.p]-s.op.m-u._offset+Ht))}return b&&A&&(N=Ti(A),b.seek(v),C=Ti(A),b._caScrollDist=N[s.p]-C[s.p],t=t/b._caScrollDist*v),b&&b.seek(w),b?t:Math.round(t)},PE=/(webkit|moz|length|cssText|inset)/i,Uv=function(t,n,i,s){if(t.parentNode!==n){var c=t.style,u,f;if(n===Xe){t._stOrig=c.cssText,f=En(t);for(u in f)!+u&&!PE.test(u)&&f[u]&&typeof c[u]=="string"&&u!=="0"&&(c[u]=f[u]);c.top=i,c.left=s}else c.cssText=t._stOrig;he.core.getCache(t).uncache=1,n.appendChild(t)}},Fb=function(t,n,i){var s=n,c=s;return function(u){var f=Math.round(t());return f!==s&&f!==c&&Math.abs(f-s)>3&&Math.abs(f-c)>3&&(u=f,i&&i()),c=s,s=Math.round(u),s}},Md=function(t,n,i){var s={};s[n.p]="+="+i,he.set(t,s)},Wv=function(t,n){var i=Ta(t,n),s="_scroll"+n.p2,c=function u(f,p,m,g,y){var v=u.tween,b=p.onComplete,k={};m=m||i();var w=Fb(i,m,function(){v.kill(),u.tween=0});return y=g&&y||0,g=g||f-m,v&&v.kill(),p[s]=f,p.inherit=!1,p.modifiers=k,k[s]=function(){return w(m+g*v.ratio+y*v.ratio*v.ratio)},p.onUpdate=function(){Ue.cache++,u.tween&&Oi()},p.onComplete=function(){u.tween=0,b&&b.call(v)},v=u.tween=he.to(t,p),v};return t[s]=i,i.wheelHandler=function(){return c.tween&&c.tween.kill()&&(c.tween=0)},Zt(t,"wheel",i.wheelHandler),Ce.isTouch&&Zt(t,"touchmove",i.wheelHandler),c},Ce=(function(){function a(n,i){$s||a.register(he)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rh(this),this.init(n,i)}var t=a.prototype;return t.init=function(i,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=oi;return}i=Ov(rn(i)||Nl(i)||i.nodeType?{trigger:i}:i,zd);var c=i,u=c.onUpdate,f=c.toggleClass,p=c.id,m=c.onToggle,g=c.onRefresh,y=c.scrub,v=c.trigger,b=c.pin,k=c.pinSpacing,w=c.invalidateOnRefresh,N=c.anticipatePin,C=c.onScrubComplete,A=c.onSnapComplete,S=c.once,j=c.snap,P=c.pinReparent,I=c.pinSpacer,L=c.containerAnimation,B=c.fastScrollEnd,W=c.preventOverlaps,D=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Sr:Vt,Q=!y&&y!==0,F=Dr(i.scroller||Be),J=he.core.getCache(F),$=vs(F),ae=("pinType"in i?i.pinType:Na(F,"pinType")||$&&"fixed")==="fixed",ce=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],ee=Q&&i.toggleActions.split(" "),V="markers"in i?i.markers:zd.markers,X=$?0:parseFloat(En(F)["border"+D.p2+Eo])||0,E=this,T=i.onRefreshInit&&function(){return i.onRefreshInit(E)},Y=wE(F,$,D),se=kE(F,$),le=0,ge=0,K=0,ue=Ta(F,D),ye,xe,Me,wt,St,ne,Ee,it,kt,q,ar,qr,Cr,Qe,Xr,zn,Jn,At,On,at,sr,gr,xr,In,_t,Ia,pn,Ui,Zn,hn,Mn,Re,Fn,Yt,Gt,Tr,$n,gi,mn;if(E._startClamp=E._endClamp=!1,E._dir=D,N*=45,E.scroller=F,E.scroll=L?L.time.bind(L):ue,wt=ue(),E.vars=i,s=s||i.animation,"refreshPriority"in i&&(kb=1,i.refreshPriority===-9999&&(Dl=E)),J.tweenScroll=J.tweenScroll||{top:Wv(F,Vt),left:Wv(F,Sr)},E.tweenTo=ye=J.tweenScroll[D.p],E.scrubDuration=function(de){Fn=Nl(de)&&de,Fn?Re?Re.duration(de):Re=he.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fn,paused:!0,onComplete:function(){return C&&C(E)}}):(Re&&Re.progress(1).kill(),Re=0)},s&&(s.vars.lazy=!1,s._initted&&!E.isReverted||s.vars.immediateRender!==!1&&i.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),E.animation=s.pause(),s.scrollTrigger=E,E.scrubDuration(y),hn=0,p||(p=s.vars.id)),j&&((!is(j)||j.push)&&(j={snapTo:j}),"scrollBehavior"in Xe.style&&he.set($?[Xe,an]:F,{scrollBehavior:"auto"}),Ue.forEach(function(de){return hr(de)&&de.target===($?Je.scrollingElement||an:F)&&(de.smooth=!1)}),Me=hr(j.snapTo)?j.snapTo:j.snapTo==="labels"?NE(s):j.snapTo==="labelsDirectional"?jE(s):j.directional!==!1?function(de,Se){return Fm(j.snapTo)(de,fr()-ge<500?0:Se.direction)}:he.utils.snap(j.snapTo),Yt=j.duration||{min:.1,max:2},Yt=is(Yt)?Ll(Yt.min,Yt.max):Ll(Yt,Yt),Gt=he.delayedCall(j.delay||Fn/2||.1,function(){var de=ue(),Se=fr()-ge<500,we=ye.tween;if((Se||Math.abs(E.getVelocity())<10)&&!we&&!Wu&&le!==de){var Ae=(de-ne)/Qe,ht=s&&!Q?s.totalProgress():Ae,Oe=Se?0:(ht-Mn)/(fr()-wl)*1e3||0,st=he.utils.clamp(-Ae,1-Ae,Qs(Oe/2)*Oe/.185),qt=Ae+(j.inertia===!1?0:st),dt,et,He=j,Pr=He.onStart,tt=He.onInterrupt,vr=He.onComplete;if(dt=Me(qt,E),Nl(dt)||(dt=qt),et=Math.max(0,Math.round(ne+dt*Qe)),de<=Ee&&de>=ne&&et!==de){if(we&&!we._initted&&we.data<=Qs(et-de))return;j.inertia===!1&&(st=dt-Ae),ye(et,{duration:Yt(Qs(Math.max(Qs(qt-ht),Qs(dt-ht))*.185/Oe/.05||0)),ease:j.ease||"power3",data:Qs(et-de),onInterrupt:function(){return Gt.restart(!0)&&tt&&Xs(E,tt)},onComplete:function(){E.update(),le=ue(),s&&!Q&&(Re?Re.resetTo("totalProgress",dt,s._tTime/s._tDur):s.progress(dt)),hn=Mn=s&&!Q?s.totalProgress():E.progress,A&&A(E),vr&&Xs(E,vr)}},de,st*Qe,et-de-st*Qe),Pr&&Xs(E,Pr,ye.tween)}}else E.isActive&&le!==de&&Gt.restart(!0)}).pause()),p&&(zh[p]=E),v=E.trigger=Dr(v||b!==!0&&b),mn=v&&v._gsap&&v._gsap.stRevert,mn&&(mn=mn(E)),b=b===!0?v:Dr(b),rn(f)&&(f={targets:v,className:f}),b&&(k===!1||k===jn||(k=!k&&b.parentNode&&b.parentNode.style&&En(b.parentNode).display==="flex"?!1:It),E.pin=b,xe=he.core.getCache(b),xe.spacer?Xr=xe.pinState:(I&&(I=Dr(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),xe.spacerIsNative=!!I,I&&(xe.spacerState=Id(I))),xe.spacer=At=I||Je.createElement("div"),At.classList.add("pin-spacer"),p&&At.classList.add("pin-spacer-"+p),xe.pinState=Xr=Id(b)),i.force3D!==!1&&he.set(b,{force3D:!0}),E.spacer=At=xe.spacer,Zn=En(b),In=Zn[k+D.os2],at=he.getProperty(b),sr=he.quickSetter(b,D.a,Ht),qp(b,At,Zn),Jn=Id(b)),V){qr=is(V)?Ov(V,Iv):Iv,q=Od("scroller-start",p,F,D,qr,0),ar=Od("scroller-end",p,F,D,qr,0,q),On=q["offset"+D.op.d2];var Wi=Dr(Na(F,"content")||F);it=this.markerStart=Od("start",p,Wi,D,qr,On,0,L),kt=this.markerEnd=Od("end",p,Wi,D,qr,On,0,L),L&&(gi=he.quickSetter([it,kt],D.a,Ht)),!ae&&!(ui.length&&Na(F,"fixedMarkers")===!0)&&(_E($?Xe:F),he.set([q,ar],{force3D:!0}),Ia=he.quickSetter(q,D.a,Ht),Ui=he.quickSetter(ar,D.a,Ht))}if(L){var Pe=L.vars.onUpdate,_e=L.vars.onUpdateParams;L.eventCallback("onUpdate",function(){E.update(0,0,1),Pe&&Pe.apply(L,_e||[])})}if(E.previous=function(){return Ie[Ie.indexOf(E)-1]},E.next=function(){return Ie[Ie.indexOf(E)+1]},E.revert=function(de,Se){if(!Se)return E.kill(!0);var we=de!==!1||!E.enabled,Ae=ur;we!==E.isReverted&&(we&&(Tr=Math.max(ue(),E.scroll.rec||0),K=E.progress,$n=s&&s.progress()),it&&[it,kt,q,ar].forEach(function(ht){return ht.style.display=we?"none":"block"}),we&&(ur=E,E.update(we)),b&&(!P||!E.isActive)&&(we?AE(b,At,Xr):qp(b,At,En(b),_t)),we||E.update(we),ur=Ae,E.isReverted=we)},E.refresh=function(de,Se,we,Ae){if(!((ur||!E.enabled)&&!Se)){if(b&&de&&Pn){Zt(a,"scrollEnd",Lb);return}!Er&&T&&T(E),ur=E,ye.tween&&!we&&(ye.tween.kill(),ye.tween=0),Re&&Re.pause(),w&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(ti){return ti.vars.immediateRender&&ti.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;var ht=Y(),Oe=se(),st=L?L.duration():di(F,D),qt=Qe<=.01||!Qe,dt=0,et=Ae||0,He=is(we)?we.end:i.end,Pr=i.endTrigger||v,tt=is(we)?we.start:i.start||(i.start===0||!v?0:b?"0 0":"0 100%"),vr=E.pinnedContainer=i.pinnedContainer&&Dr(i.pinnedContainer,E),Qr=v&&Math.max(0,Ie.indexOf(E))||0,Lt=Qr,zt,Bt,xi,_s,Fe,Ct,Rr,Ns,Ma,Fa,Kr,ei,yr;for(V&&is(we)&&(ei=he.getProperty(q,D.p),yr=he.getProperty(ar,D.p));Lt-- >0;)Ct=Ie[Lt],Ct.end||Ct.refresh(0,1)||(ur=E),Rr=Ct.pin,Rr&&(Rr===v||Rr===b||Rr===vr)&&!Ct.isReverted&&(Fa||(Fa=[]),Fa.unshift(Ct),Ct.revert(!0,!0)),Ct!==Ie[Lt]&&(Qr--,Lt--);for(hr(tt)&&(tt=tt(E)),tt=Pv(tt,"start",E),ne=Bv(tt,v,ht,D,ue(),it,q,E,Oe,X,ae,st,L,E._startClamp&&"_startClamp")||(b?-.001:0),hr(He)&&(He=He(E)),rn(He)&&!He.indexOf("+=")&&(~He.indexOf(" ")?He=(rn(tt)?tt.split(" ")[0]:"")+He:(dt=Kd(He.substr(2),ht),He=rn(tt)?tt:(L?he.utils.mapRange(0,L.duration(),L.scrollTrigger.start,L.scrollTrigger.end,ne):ne)+dt,Pr=v)),He=Pv(He,"end",E),Ee=Math.max(ne,Bv(He||(Pr?"100% 0":st),Pr,ht,D,ue()+dt,kt,ar,E,Oe,X,ae,st,L,E._endClamp&&"_endClamp"))||-.001,dt=0,Lt=Qr;Lt--;)Ct=Ie[Lt]||{},Rr=Ct.pin,Rr&&Ct.start-Ct._pinPush<=ne&&!L&&Ct.end>0&&(zt=Ct.end-(E._startClamp?Math.max(0,Ct.start):Ct.start),(Rr===v&&Ct.start-Ct._pinPush<ne||Rr===vr)&&isNaN(tt)&&(dt+=zt*(1-Ct.progress)),Rr===b&&(et+=zt));if(ne+=dt,Ee+=dt,E._startClamp&&(E._startClamp+=dt),E._endClamp&&!Er&&(E._endClamp=Ee||-.001,Ee=Math.min(Ee,di(F,D))),Qe=Ee-ne||(ne-=.01)&&.001,qt&&(K=he.utils.clamp(0,1,he.utils.normalize(ne,Ee,Tr))),E._pinPush=et,it&&dt&&(zt={},zt[D.a]="+="+dt,vr&&(zt[D.p]="-="+ue()),he.set([it,kt],zt)),b&&!(Lh&&E.end>=di(F,D)))zt=En(b),_s=D===Vt,xi=ue(),gr=parseFloat(at(D.a))+et,!st&&Ee>1&&(Kr=($?Je.scrollingElement||an:F).style,Kr={style:Kr,value:Kr["overflow"+D.a.toUpperCase()]},$&&En(Xe)["overflow"+D.a.toUpperCase()]!=="scroll"&&(Kr.style["overflow"+D.a.toUpperCase()]="scroll")),qp(b,At,zt),Jn=Id(b),Bt=Ti(b,!0),Ns=ae&&Ta(F,_s?Sr:Vt)(),k?(_t=[k+D.os2,Qe+et+Ht],_t.t=At,Lt=k===It?yu(b,D)+Qe+et:0,Lt&&(_t.push(D.d,Lt+Ht),At.style.flexBasis!=="auto"&&(At.style.flexBasis=Lt+Ht)),go(_t),vr&&Ie.forEach(function(ti){ti.pin===vr&&ti.vars.pinSpacing!==!1&&(ti._subPinOffset=!0)}),ae&&ue(Tr)):(Lt=yu(b,D),Lt&&At.style.flexBasis!=="auto"&&(At.style.flexBasis=Lt+Ht)),ae&&(Fe={top:Bt.top+(_s?xi-ne:Ns)+Ht,left:Bt.left+(_s?Ns:xi-ne)+Ht,boxSizing:"border-box",position:"fixed"},Fe[ps]=Fe["max"+Eo]=Math.ceil(Bt.width)+Ht,Fe[hs]=Fe["max"+Mm]=Math.ceil(Bt.height)+Ht,Fe[jn]=Fe[jn+Ml]=Fe[jn+Ol]=Fe[jn+Fl]=Fe[jn+Il]="0",Fe[It]=zt[It],Fe[It+Ml]=zt[It+Ml],Fe[It+Ol]=zt[It+Ol],Fe[It+Fl]=zt[It+Fl],Fe[It+Il]=zt[It+Il],zn=TE(Xr,Fe,P),Er&&ue(0)),s?(Ma=s._initted,Hp(1),s.render(s.duration(),!0,!0),xr=at(D.a)-gr+Qe+et,pn=Math.abs(Qe-xr)>1,ae&&pn&&zn.splice(zn.length-2,2),s.render(0,!0,!0),Ma||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),Hp(0)):xr=Qe,Kr&&(Kr.value?Kr.style["overflow"+D.a.toUpperCase()]=Kr.value:Kr.style.removeProperty("overflow-"+D.a));else if(v&&ue()&&!L)for(Bt=v.parentNode;Bt&&Bt!==Xe;)Bt._pinOffset&&(ne-=Bt._pinOffset,Ee-=Bt._pinOffset),Bt=Bt.parentNode;Fa&&Fa.forEach(function(ti){return ti.revert(!1,!0)}),E.start=ne,E.end=Ee,wt=St=Er?Tr:ue(),!L&&!Er&&(wt<Tr&&ue(Tr),E.scroll.rec=0),E.revert(!1,!0),ge=fr(),Gt&&(le=-1,Gt.restart(!0)),ur=0,s&&Q&&(s._initted||$n)&&s.progress()!==$n&&s.progress($n||0,!0).render(s.time(),!0,!0),(qt||K!==E.progress||L||w||s&&!s._initted)&&(s&&!Q&&(s._initted||K||s.vars.immediateRender!==!1)&&s.totalProgress(L&&ne<-.001&&!K?he.utils.normalize(ne,Ee,0):K,!0),E.progress=qt||(wt-ne)/Qe===K?0:K),b&&k&&(At._pinOffset=Math.round(E.progress*xr)),Re&&Re.invalidate(),isNaN(ei)||(ei-=he.getProperty(q,D.p),yr-=he.getProperty(ar,D.p),Md(q,D,ei),Md(it,D,ei-(Ae||0)),Md(ar,D,yr),Md(kt,D,yr-(Ae||0))),qt&&!Er&&E.update(),g&&!Er&&!Cr&&(Cr=!0,g(E),Cr=!1)}},E.getVelocity=function(){return(ue()-St)/(fr()-wl)*1e3||0},E.endAnimation=function(){vl(E.callbackAnimation),s&&(Re?Re.progress(1):s.paused()?Q||vl(s,E.direction<0,1):vl(s,s.reversed()))},E.labelToScroll=function(de){return s&&s.labels&&(ne||E.refresh()||ne)+s.labels[de]/s.duration()*Qe||0},E.getTrailing=function(de){var Se=Ie.indexOf(E),we=E.direction>0?Ie.slice(0,Se).reverse():Ie.slice(Se+1);return(rn(de)?we.filter(function(Ae){return Ae.vars.preventOverlaps===de}):we).filter(function(Ae){return E.direction>0?Ae.end<=ne:Ae.start>=Ee})},E.update=function(de,Se,we){if(!(L&&!we&&!de)){var Ae=Er===!0?Tr:E.scroll(),ht=de?0:(Ae-ne)/Qe,Oe=ht<0?0:ht>1?1:ht||0,st=E.progress,qt,dt,et,He,Pr,tt,vr,Qr;if(Se&&(St=wt,wt=L?ue():Ae,j&&(Mn=hn,hn=s&&!Q?s.totalProgress():Oe)),N&&b&&!ur&&!Td&&Pn&&(!Oe&&ne<Ae+(Ae-St)/(fr()-wl)*N?Oe=1e-4:Oe===1&&Ee>Ae+(Ae-St)/(fr()-wl)*N&&(Oe=.9999)),Oe!==st&&E.enabled){if(qt=E.isActive=!!Oe&&Oe<1,dt=!!st&&st<1,tt=qt!==dt,Pr=tt||!!Oe!=!!st,E.direction=Oe>st?1:-1,E.progress=Oe,Pr&&!ur&&(et=Oe&&!st?0:Oe===1?1:st===1?2:3,Q&&(He=!tt&&ee[et+1]!=="none"&&ee[et+1]||ee[et],Qr=s&&(He==="complete"||He==="reset"||He in s))),W&&(tt||Qr)&&(Qr||y||!s)&&(hr(W)?W(E):E.getTrailing(W).forEach(function(xi){return xi.endAnimation()})),Q||(Re&&!ur&&!Td?(Re._dp._time-Re._start!==Re._time&&Re.render(Re._dp._time-Re._start),Re.resetTo?Re.resetTo("totalProgress",Oe,s._tTime/s._tDur):(Re.vars.totalProgress=Oe,Re.invalidate().restart())):s&&s.totalProgress(Oe,!!(ur&&(ge||de)))),b){if(de&&k&&(At.style[k+D.os2]=In),!ae)sr(_l(gr+xr*Oe));else if(Pr){if(vr=!de&&Oe>st&&Ee+1>Ae&&Ae+1>=di(F,D),P)if(!de&&(qt||vr)){var Lt=Ti(b,!0),zt=Ae-ne;Uv(b,Xe,Lt.top+(D===Vt?zt:0)+Ht,Lt.left+(D===Vt?0:zt)+Ht)}else Uv(b,At);go(qt||vr?zn:Jn),pn&&Oe<1&&qt||sr(gr+(Oe===1&&!vr?xr:0))}}j&&!ye.tween&&!ur&&!Td&&Gt.restart(!0),f&&(tt||S&&Oe&&(Oe<1||!Vp))&&nc(f.targets).forEach(function(xi){return xi.classList[qt||S?"add":"remove"](f.className)}),u&&!Q&&!de&&u(E),Pr&&!ur?(Q&&(Qr&&(He==="complete"?s.pause().totalProgress(1):He==="reset"?s.restart(!0).pause():He==="restart"?s.restart(!0):s[He]()),u&&u(E)),(tt||!Vp)&&(m&&tt&&Xs(E,m),ce[et]&&Xs(E,ce[et]),S&&(Oe===1?E.kill(!1,1):ce[et]=0),tt||(et=Oe===1?1:3,ce[et]&&Xs(E,ce[et]))),B&&!qt&&Math.abs(E.getVelocity())>(Nl(B)?B:2500)&&(vl(E.callbackAnimation),Re?Re.progress(1):vl(s,He==="reverse"?1:!Oe,1))):Q&&u&&!ur&&u(E)}if(Ui){var Bt=L?Ae/L.duration()*(L._caScrollDist||0):Ae;Ia(Bt+(q._isFlipped?1:0)),Ui(Bt)}gi&&gi(-Ae/L.duration()*(L._caScrollDist||0))}},E.enable=function(de,Se){E.enabled||(E.enabled=!0,Zt(F,"resize",jl),$||Zt(F,"scroll",Ks),T&&Zt(a,"refreshInit",T),de!==!1&&(E.progress=K=0,wt=St=le=ue()),Se!==!1&&E.refresh())},E.getTween=function(de){return de&&ye?ye.tween:Re},E.setPositions=function(de,Se,we,Ae){if(L){var ht=L.scrollTrigger,Oe=L.duration(),st=ht.end-ht.start;de=ht.start+st*de/Oe,Se=ht.start+st*Se/Oe}E.refresh(!1,!1,{start:Rv(de,we&&!!E._startClamp),end:Rv(Se,we&&!!E._endClamp)},Ae),E.update()},E.adjustPinSpacing=function(de){if(_t&&de){var Se=_t.indexOf(D.d)+1;_t[Se]=parseFloat(_t[Se])+de+Ht,_t[1]=parseFloat(_t[1])+de+Ht,go(_t)}},E.disable=function(de,Se){if(de!==!1&&E.revert(!0,!0),E.enabled&&(E.enabled=E.isActive=!1,Se||Re&&Re.pause(),Tr=0,xe&&(xe.uncache=1),T&&Jt(a,"refreshInit",T),Gt&&(Gt.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!$)){for(var we=Ie.length;we--;)if(Ie[we].scroller===F&&Ie[we]!==E)return;Jt(F,"resize",jl),$||Jt(F,"scroll",Ks)}},E.kill=function(de,Se){E.disable(de,Se),Re&&!Se&&Re.kill(),p&&delete zh[p];var we=Ie.indexOf(E);we>=0&&Ie.splice(we,1),we===jr&&Zd>0&&jr--,we=0,Ie.forEach(function(Ae){return Ae.scroller===E.scroller&&(we=1)}),we||Er||(E.scroll.rec=0),s&&(s.scrollTrigger=null,de&&s.revert({kill:!1}),Se||s.kill()),it&&[it,kt,q,ar].forEach(function(Ae){return Ae.parentNode&&Ae.parentNode.removeChild(Ae)}),Dl===E&&(Dl=0),b&&(xe&&(xe.uncache=1),we=0,Ie.forEach(function(Ae){return Ae.pin===b&&we++}),we||(xe.spacer=0)),i.onKill&&i.onKill(E)},Ie.push(E),E.enable(!1,!1),mn&&mn(E),s&&s.add&&!Qe){var We=E.update;E.update=function(){E.update=We,Ue.cache++,ne||Ee||E.refresh()},he.delayedCall(.01,E.update),Qe=.01,ne=Ee=0}else E.refresh();b&&SE()},a.register=function(i){return $s||(he=i||Sb(),Eb()&&window.document&&a.enable(),$s=kl),$s},a.defaults=function(i){if(i)for(var s in i)zd[s]=i[s];return zd},a.disable=function(i,s){kl=0,Ie.forEach(function(u){return u[s?"kill":"disable"](i)}),Jt(Be,"wheel",Ks),Jt(Je,"scroll",Ks),clearInterval(Cd),Jt(Je,"touchcancel",oi),Jt(Xe,"touchstart",oi),Rd(Jt,Je,"pointerdown,touchstart,mousedown",Lv),Rd(Jt,Je,"pointerup,touchend,mouseup",zv),vu.kill(),Pd(Jt);for(var c=0;c<Ue.length;c+=3)Ld(Jt,Ue[c],Ue[c+1]),Ld(Jt,Ue[c],Ue[c+2])},a.enable=function(){if(Be=window,Je=document,an=Je.documentElement,Xe=Je.body,he){if(nc=he.utils.toArray,Ll=he.utils.clamp,Rh=he.core.context||oi,Hp=he.core.suppressOverwrites||oi,Lm=Be.history.scrollRestoration||"auto",Oh=Be.pageYOffset||0,he.core.globals("ScrollTrigger",a),Xe){kl=1,mo=document.createElement("div"),mo.style.height="100vh",mo.style.position="absolute",Mb(),bE(),Rt.register(he),a.isTouch=Rt.isTouch,fa=Rt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ph=Rt.isTouch===1,Zt(Be,"wheel",Ks),Rm=[Be,Je,an,Xe],he.matchMedia?(a.matchMedia=function(g){var y=he.matchMedia(),v;for(v in g)y.add(v,g[v]);return y},he.addEventListener("matchMediaInit",function(){Ob(),Dm()}),he.addEventListener("matchMediaRevert",function(){return zb()}),he.addEventListener("matchMedia",function(){ss(0,1),bs("matchMedia")}),he.matchMedia().add("(orientation: portrait)",function(){return Gp(),Gp})):console.warn("Requires GSAP 3.11.0 or later"),Gp(),Zt(Je,"scroll",Ks);var i=Xe.hasAttribute("style"),s=Xe.style,c=s.borderTopStyle,u=he.core.Animation.prototype,f,p;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",f=Ti(Xe),Vt.m=Math.round(f.top+Vt.sc())||0,Sr.m=Math.round(f.left+Sr.sc())||0,c?s.borderTopStyle=c:s.removeProperty("border-top-style"),i||(Xe.setAttribute("style",""),Xe.removeAttribute("style")),Cd=setInterval(Mv,250),he.delayedCall(.5,function(){return Td=0}),Zt(Je,"touchcancel",oi),Zt(Xe,"touchstart",oi),Rd(Zt,Je,"pointerdown,touchstart,mousedown",Lv),Rd(Zt,Je,"pointerup,touchend,mouseup",zv),Th=he.utils.checkPrefix("transform"),$d.push(Th),$s=fr(),vu=he.delayedCall(.2,ss).pause(),eo=[Je,"visibilitychange",function(){var g=Be.innerWidth,y=Be.innerHeight;Je.hidden?(Cv=g,Tv=y):(Cv!==g||Tv!==y)&&jl()},Je,"DOMContentLoaded",ss,Be,"load",ss,Be,"resize",jl],Pd(Zt),Ie.forEach(function(g){return g.enable(0,1)}),p=0;p<Ue.length;p+=3)Ld(Jt,Ue[p],Ue[p+1]),Ld(Jt,Ue[p],Ue[p+2])}else if(Je){var m=function g(){a.enable(),Je.removeEventListener("DOMContentLoaded",g)};Je.addEventListener("DOMContentLoaded",m)}}},a.config=function(i){"limitCallbacks"in i&&(Vp=!!i.limitCallbacks);var s=i.syncInterval;s&&clearInterval(Cd)||(Cd=s)&&setInterval(Mv,s),"ignoreMobileResize"in i&&(Ph=a.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Pd(Jt)||Pd(Zt,i.autoRefreshEvents||"none"),_b=(i.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(i,s){var c=Dr(i),u=Ue.indexOf(c),f=vs(c);~u&&Ue.splice(u,f?6:2),s&&(f?ui.unshift(Be,s,Xe,s,an,s):ui.unshift(c,s))},a.clearMatchMedia=function(i){Ie.forEach(function(s){return s._ctx&&s._ctx.query===i&&s._ctx.kill(!0,!0)})},a.isInViewport=function(i,s,c){var u=(rn(i)?Dr(i):i).getBoundingClientRect(),f=u[c?ps:hs]*s||0;return c?u.right-f>0&&u.left+f<Be.innerWidth:u.bottom-f>0&&u.top+f<Be.innerHeight},a.positionInViewport=function(i,s,c){rn(i)&&(i=Dr(i));var u=i.getBoundingClientRect(),f=u[c?ps:hs],p=s==null?f/2:s in bu?bu[s]*f:~s.indexOf("%")?parseFloat(s)*f/100:parseFloat(s)||0;return c?(u.left+p)/Be.innerWidth:(u.top+p)/Be.innerHeight},a.killAll=function(i){if(Ie.slice(0).forEach(function(c){return c.vars.id!=="ScrollSmoother"&&c.kill()}),i!==!0){var s=ys.killAll||[];ys={},s.forEach(function(c){return c()})}},a})();Ce.version="3.15.0";Ce.saveStyles=function(a){return a?nc(a).forEach(function(t){if(t&&t.style){var n=tn.indexOf(t);n>=0&&tn.splice(n,5),tn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),he.core.getCache(t),Rh())}}):tn};Ce.revert=function(a,t){return Dm(!a,t)};Ce.create=function(a,t){return new Ce(a,t)};Ce.refresh=function(a){return a?jl(!0):($s||Ce.register())&&ss(!0)};Ce.update=function(a){return++Ue.cache&&Oi(a===!0?2:0)};Ce.clearScrollMemory=Ib;Ce.maxScroll=function(a,t){return di(a,t?Sr:Vt)};Ce.getScrollFunc=function(a,t){return Ta(Dr(a),t?Sr:Vt)};Ce.getById=function(a){return zh[a]};Ce.getAll=function(){return Ie.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ce.isScrolling=function(){return!!Pn};Ce.snapDirectional=Fm;Ce.addEventListener=function(a,t){var n=ys[a]||(ys[a]=[]);~n.indexOf(t)||n.push(t)};Ce.removeEventListener=function(a,t){var n=ys[a],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)};Ce.batch=function(a,t){var n=[],i={},s=t.interval||.016,c=t.batchMax||1e9,u=function(m,g){var y=[],v=[],b=he.delayedCall(s,function(){g(y,v),y=[],v=[]}).pause();return function(k){y.length||b.restart(!0),y.push(k.trigger),v.push(k),c<=y.length&&b.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&hr(t[f])&&f!=="onRefreshInit"?u(f,t[f]):t[f];return hr(c)&&(c=c(),Zt(Ce,"refresh",function(){return c=t.batchMax()})),nc(a).forEach(function(p){var m={};for(f in i)m[f]=i[f];m.trigger=p,n.push(Ce.create(m))}),n};var Hv=function(t,n,i,s){return n>s?t(s):n<0&&t(0),i>s?(s-n)/(i-n):i<0?n/(n-i):1},Xp=function a(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Rt.isTouch?" pinch-zoom":""):"none",t===an&&a(Xe,n)},Fd={auto:1,scroll:1},RE=function(t){var n=t.event,i=t.target,s=t.axis,c=(n.changedTouches?n.changedTouches[0]:n).target,u=c._gsap||he.core.getCache(c),f=fr(),p;if(!u._isScrollT||f-u._isScrollT>2e3){for(;c&&c!==Xe&&(c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth||!(Fd[(p=En(c)).overflowY]||Fd[p.overflowX]));)c=c.parentNode;u._isScroll=c&&c!==i&&!vs(c)&&(Fd[(p=En(c)).overflowY]||Fd[p.overflowX]),u._isScrollT=f}(u._isScroll||s==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},Db=function(t,n,i,s){return Rt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:s=s&&RE,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return i&&Zt(Je,Rt.eventTypes[0],Yv,!1,!0)},onDisable:function(){return Jt(Je,Rt.eventTypes[0],Yv,!0)}})},LE=/(input|label|select|textarea)/i,Vv,Yv=function(t){var n=LE.test(t.target.tagName);(n||Vv)&&(t._gsapAllow=!0,Vv=n)},zE=function(t){is(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,i=n.normalizeScrollX,s=n.momentum,c=n.allowNestedScroll,u=n.onRelease,f,p,m=Dr(t.target)||an,g=he.core.globals().ScrollSmoother,y=g&&g.get(),v=fa&&(t.content&&Dr(t.content)||y&&t.content!==!1&&!y.smooth()&&y.content()),b=Ta(m,Vt),k=Ta(m,Sr),w=1,N=(Rt.isTouch&&Be.visualViewport?Be.visualViewport.scale*Be.visualViewport.width:Be.outerWidth)/Be.innerWidth,C=0,A=hr(s)?function(){return s(f)}:function(){return s||2.8},S,j,P=Db(m,t.type,!0,c),I=function(){return j=!1},L=oi,B=oi,W=function(){p=di(m,Vt),B=Ll(fa?1:0,p),i&&(L=Ll(0,di(m,Sr))),S=ms},D=function(){v._gsap.y=_l(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0},Q=function(){if(j){requestAnimationFrame(I);var V=_l(f.deltaY/2),X=B(b.v-V);if(v&&X!==b.v+b.offset){b.offset=X-b.v;var E=_l((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",v._gsap.y=E+"px",b.cacheID=Ue.cache,Oi()}return!0}b.offset&&D(),j=!0},F,J,$,ae,ce=function(){W(),F.isActive()&&F.vars.scrollY>p&&(b()>p?F.progress(1)&&b(p):F.resetTo("scrollY",p))};return v&&he.set(v,{y:"+=0"}),t.ignoreCheck=function(ee){return fa&&ee.type==="touchmove"&&Q()||w>1.05&&ee.type!=="touchstart"||f.isGesturing||ee.touches&&ee.touches.length>1},t.onPress=function(){j=!1;var ee=w;w=_l((Be.visualViewport&&Be.visualViewport.scale||1)/N),F.pause(),ee!==w&&Xp(m,w>1.01?!0:i?!1:"x"),J=k(),$=b(),W(),S=ms},t.onRelease=t.onGestureStart=function(ee,V){if(b.offset&&D(),!V)ae.restart(!0);else{Ue.cache++;var X=A(),E,T;i&&(E=k(),T=E+X*.05*-ee.velocityX/.227,X*=Hv(k,E,T,di(m,Sr)),F.vars.scrollX=L(T)),E=b(),T=E+X*.05*-ee.velocityY/.227,X*=Hv(b,E,T,di(m,Vt)),F.vars.scrollY=B(T),F.invalidate().duration(X).play(.01),(fa&&F.vars.scrollY>=p||E>=p-1)&&he.to({},{onUpdate:ce,duration:X})}u&&u(ee)},t.onWheel=function(){F._ts&&F.pause(),fr()-C>1e3&&(S=0,C=fr())},t.onChange=function(ee,V,X,E,T){if(ms!==S&&W(),V&&i&&k(L(E[2]===V?J+(ee.startX-ee.x):k()+V-E[1])),X){b.offset&&D();var Y=T[2]===X,se=Y?$+ee.startY-ee.y:b()+X-T[1],le=B(se);Y&&se!==le&&($+=le-se),b(le)}(X||V)&&Oi()},t.onEnable=function(){Xp(m,i?!1:"x"),Ce.addEventListener("refresh",ce),Zt(Be,"resize",ce),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=k.smooth=!1),P.enable()},t.onDisable=function(){Xp(m,!0),Jt(Be,"resize",ce),Ce.removeEventListener("refresh",ce),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new Rt(t),f.iOS=fa,fa&&!b()&&b(1),fa&&he.ticker.add(oi),ae=f._dc,F=he.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Fb(b,b(),function(){return F.pause()})},onUpdate:Oi,onComplete:ae.vars.onComplete}),f};Ce.sort=function(a){if(hr(a))return Ie.sort(a);var t=Be.pageYOffset||0;return Ce.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+Be.innerHeight}),Ie.sort(a||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ce.observe=function(a){return new Rt(a)};Ce.normalizeScroll=function(a){if(typeof a>"u")return Nr;if(a===!0&&Nr)return Nr.enable();if(a===!1){Nr&&Nr.kill(),Nr=a;return}var t=a instanceof Rt?a:zE(a);return Nr&&Nr.target===t.target&&Nr.kill(),vs(t.target)&&(Nr=t),t};Ce.core={_getVelocityProp:Ch,_inputObserver:Db,_scrollers:Ue,_proxies:ui,bridge:{ss:function(){Pn||bs("scrollStart"),Pn=fr()},ref:function(){return ur}}};Sb()&&he.registerPlugin(Ce);const OE="/boltfaredeal/assets/logo-Cz10D-jw.png";Z.registerPlugin(Ce);const IE=()=>{const a=z.useRef(null),t=z.useRef(null),n=z.useRef(null),i=z.useRef(null),s=z.useRef(null),c=z.useRef(null),u=z.useRef(null),f=z.useRef(null),[p,m]=z.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));z.useEffect(()=>{const y=document.documentElement,v=()=>{const k=y.getAttribute("data-theme")==="light"||y.classList.contains("light");m(k)};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),z.useEffect(()=>{const y=a.current;if(!y)return;const v=Z.context(()=>{const b=n.current.querySelectorAll(".about-word");Z.set(b,{opacity:0,y:65,rotateX:-65}),Z.set([t.current,i.current,s.current,c.current],{opacity:0}),Z.set(i.current,{y:28}),Z.set(s.current,{y:22}),Z.set(c.current,{x:110,scale:.82,rotation:12}),Z.timeline({scrollTrigger:{trigger:y,start:"top 75%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,duration:.6,ease:"power3.out"}).to(b,{opacity:1,y:0,rotateX:0,duration:.85,stagger:.055,ease:"power4.out"},"-=0.25").to(i.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.4").to(s.current,{opacity:1,y:0,duration:.65,ease:"power3.out"},"-=0.3").to(c.current,{opacity:1,x:0,scale:1,rotation:0,duration:1.35,ease:"expo.out"},"-=0.95"),Z.to(f.current,{rotation:360,duration:30,repeat:-1,ease:"none"}),Z.to(u.current,{scale:1.06,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Z.to(c.current,{y:-75,ease:"none",scrollTrigger:{trigger:y,start:"top bottom",end:"bottom top",scrub:1.5}});const w=N=>{const C=y.getBoundingClientRect(),A=((N.clientX-C.left)/C.width-.5)*2,S=((N.clientY-C.top)/C.height-.5)*2;Z.to(c.current,{x:A*10,y:S*10,duration:1.1,ease:"power3.out"})};return y.addEventListener("mousemove",w),()=>{y.removeEventListener("mousemove",w)}},y);return()=>v.revert()},[]);const g=["Printing","Solutions","That","Build","Brands","That","Stand","Out"];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

        /* =====================================================
           ROOT
           ===================================================== */

        .fairdeal-about {

          --fd-bg: #05090B;

          --fd-panel: #0C1419;

          --fd-panel-2: #111B21;

          --fd-yellow: #FFDF00;

          --fd-mint: #8FE7C8;

          --fd-white: #F5F7F8;

          --fd-gray: #98A1B1;

          --fd-muted: #66717E;

          --fd-border:
            rgba(255,255,255,0.08);

          position: relative;

          min-height: 100vh;

          width: 100%;

          overflow: hidden;

          background:
            var(--fd-bg);

          color:
            var(--fd-white);

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;

          transition:
            background 0.5s ease,
            color 0.5s ease;

        }


        /* =====================================================
           LIGHT THEME
           ===================================================== */

        .fairdeal-about.light-mode {

          --fd-bg: #F5F7F8;

          --fd-panel: #FFFFFF;

          --fd-panel-2: #EEF2F1;

          --fd-yellow: #D5B900;

          --fd-mint: #15966F;

          --fd-white: #101518;

          --fd-gray: #56616D;

          --fd-muted: #7B858F;

          --fd-border:
            rgba(5,9,11,0.09);

        }


        /* =====================================================
           BACKGROUND GLOW
           ===================================================== */

        .fairdeal-about::before {

          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          background:

            radial-gradient(
              circle at 75% 45%,
              rgba(255,223,0,0.055),
              transparent 28%
            ),

            radial-gradient(
              circle at 18% 20%,
              rgba(143,231,200,0.035),
              transparent 25%
            );

        }


        /* =====================================================
           GRID
           ===================================================== */

        .fairdeal-about::after {

          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          background-image:

            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            );

          background-size:
            80px 80px;

          opacity:
            0.45;

        }


        /* =====================================================
           CONTAINER
           ===================================================== */

        .about-inner {

          position: relative;

          z-index: 2;

          width:
            min(
              1240px,
              calc(100% - 100px)
            );

          min-height:
            100vh;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            52% 48%;

          align-items:
            center;

          gap:
            20px;
        
          margin-top: 60px;

        }


        /* =====================================================
           LEFT
           ===================================================== */

        .about-content {

          max-width:
            650px;

        }


        /* =====================================================
           LABEL
           ===================================================== */

        .about-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            28px;

          color:
            var(--fd-yellow);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .about-label::before {

          content: "";

          width:
            35px;

          height:
            1px;

          background:
            linear-gradient(
              90deg,
              var(--fd-yellow),
              var(--fd-mint)
            );

        }


        /* =====================================================
           TITLE
           ===================================================== */

        .about-title {

          margin:
            0;

          max-width:
            690px;

          font-size:
            clamp(2.25rem, 4.7vw, 4.4rem);

          line-height:
            0.98;

          font-weight:
            650;

          letter-spacing:
            -0.055em;

          perspective:
            1000px;

        }


        .about-word {

          display:
            inline-block;

          margin-right:
            0.18em;

          transform-origin:
            center bottom;

          will-change:
            transform,
            opacity;

        }


        /* YELLOW */

        .about-word:nth-child(5),

        .about-word:nth-child(6) {

          color:
            var(--fd-yellow);

        }


        /* MINT */

        .about-word:nth-child(8) {

          color:
            var(--fd-mint);

        }


        /* =====================================================
           DESCRIPTION
           ===================================================== */

        .about-description {

          max-width:
            570px;

          margin-top:
            34px;

          color:
            var(--fd-gray);

          font-size:
            16px;

          line-height:
            1.8;

          letter-spacing:
            -0.01em;

        }


        .about-description strong {

          color:
            var(--fd-white);

          font-weight:
            650;

        }


        /* =====================================================
           META
           ===================================================== */

        .about-meta {

          display:
            flex;

          align-items:
            center;

          gap:
            28px;

          margin-top:
            38px;

        }


        /* =====================================================
           BUTTON
           ===================================================== */

        .about-button {

          position:
            relative;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          height:
            48px;

          padding:
            0 30px;

          border:
            1px solid
            var(--fd-yellow);

          border-radius:
            50px;

          background:
            var(--fd-yellow);

          color:
            #05090B;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.18em;

          text-transform:
            uppercase;

          cursor:
            pointer;

          overflow:
            hidden;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

        }


        .about-button::before {

          content: "";

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.35),
              transparent
            );

          transform:
            translateX(-120%);

          transition:
            transform 0.7s ease;

        }


        .about-button:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 15px 45px
            rgba(255,223,0,0.18);

        }


        .about-button:hover::before {

          transform:
            translateX(120%);

        }


        /* =====================================================
           YEAR
           ===================================================== */

        .about-year {

          color:
            var(--fd-muted);

          font-size:
            10px;

          font-weight:
            700;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;

        }


        .about-year strong {

          display:
            block;

          margin-top:
            4px;

          color:
            var(--fd-white);

          font-size:
            15px;

          letter-spacing:
            0;

        }


        /* =====================================================
           RIGHT VISUAL
           ===================================================== */

        .about-visual-area {

          position:
            relative;

          min-height:
            520px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

        }


        /* =====================================================
           GLOW
           ===================================================== */

        .visual-glow {

          position:
            absolute;

          width:
            390px;

          height:
            390px;

          border-radius:
            50%;

          background:
            radial-gradient(
              circle,
              rgba(255,223,0,0.10),
              transparent 65%
            );

          filter:
            blur(30px);

        }


        /* =====================================================
           VISUAL
           ===================================================== */

        .visual {

          position:
            relative;

          width:
            450px;

          height:
            450px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          will-change:
            transform;

        }


        /* =====================================================
           OUTER RING
           ===================================================== */

        .outer-ring {

          position:
            absolute;

          inset:
            10px;

          border:
            1px solid
            var(--fd-border);

          border-radius:
            50%;

        }


        .outer-ring::before {

          content: "";

          position:
            absolute;

          inset:
            25px;

          border:
            1px dashed
            var(--fd-border);

          border-radius:
            50%;

        }


        .outer-ring::after {

          content: "";

          position:
            absolute;

          width:
            7px;

          height:
            7px;

          top:
            12%;

          right:
            16%;

          border-radius:
            50%;

          background:
            var(--fd-yellow);

          box-shadow:
            0 0 18px
            rgba(255,223,0,0.7);

        }


        /* =====================================================
           ROTATING TEXT
           ===================================================== */

        .rotating-text {

          position:
            absolute;

          inset:
            0;

          width:
            100%;

          height:
            100%;

          will-change:
            transform;

        }


        .rotating-text svg {

          width:
            100%;

          height:
            100%;

          overflow:
            visible;

        }


        .rotating-text text {

          fill:
            var(--fd-white);

          font-size:
            17px;

          font-weight:
            650;

          letter-spacing:
            7px;

          text-transform:
            uppercase;

        }


        /* =====================================================
           CENTER ORBIT
           ===================================================== */

        .center-orbit {

          position:
            absolute;

          width:
            275px;

          height:
            275px;

          border-radius:
            50%;

          border:
            1px solid
            var(--fd-border);

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(143,231,200,0.06),
              transparent 65%
            );

          box-shadow:
            inset 0 0 50px
            rgba(255,255,255,0.02);

        }


        .center-orbit::before {

          content: "";

          position:
            absolute;

          inset:
            25px;

          border-radius:
            50%;

          border:
            1px solid
            rgba(143,231,200,0.13);

        }


        .center-orbit::after {

          content: "";

          position:
            absolute;

          width:
            6px;

          height:
            6px;

          left:
            15%;

          bottom:
            20%;

          border-radius:
            50%;

          background:
            var(--fd-mint);

          box-shadow:
            0 0 16px
            rgba(143,231,200,0.8);

        }


        /* =====================================================
           LOGO CIRCLE
           ===================================================== */

        .center-logo {

          position:relative;

          z-index:3;

          width:
            150px;

          height:
            150px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          background: #fff;

          border:
            1px solid
            var(--fd-border);

          box-shadow:

            0 30px 80px
            rgba(0,0,0,0.35),

            inset 0 0 35px
            rgba(143,231,200,0.025);

          transition:
            background 0.5s ease,
            border 0.5s ease;

        }


        /* =====================================================
           FAIRDEAL LOGO
           ===================================================== */

        .fairdeal-logo {

          width:
            88px;

          height:
            88px;

          object-fit:
            contain;

          display:
            block;

          transition:
            transform 0.4s ease;

        }


        .center-logo:hover
        .fairdeal-logo {

          transform:
            scale(1.08);

        }


        /* =====================================================
           SMALL TEXT
           ===================================================== */

        .visual-small-text {

          position:
            absolute;

          right:
            20px;

          bottom:
            40px;

          color:
            var(--fd-muted);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.2em;

          text-transform:
            uppercase;

        }


        .visual-small-text span {

          color:
            var(--fd-mint);

        }


        /* =====================================================
           CORNER LINE
           ===================================================== */

        .corner-line {

          position:
            absolute;

          left:
            0;

          bottom:
            30px;

          width:
            80px;

          height:
            1px;

          background:
            linear-gradient(
              90deg,
              var(--fd-yellow),
              transparent
            );

        }


        /* =====================================================
           TABLET
           ===================================================== */

        @media (max-width: 1050px) {

          .about-inner {

            width:
              min(
                calc(100% - 60px),
                850px
              );

            grid-template-columns:
              1fr;

            text-align:
              center;

            padding:
              90px 0;

          }


          .about-content {

            margin:
              auto;

          }


          .about-label {

            justify-content:
              center;

          }


          .about-description {

            margin-left:
              auto;

            margin-right:
              auto;

          }


          .about-meta {

            justify-content:
              center;

          }


          .about-visual-area {

            min-height:
              430px;

          }


          .visual {

            width:
              380px;

            height:
              380px;

          }

        }


        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 600px) {

          .about-inner {

            width:
              calc(100% - 36px);

            padding:
              70px 0;

          }


          .about-label {

            font-size:
              9px;

            letter-spacing:
              0.18em;

          }


          .about-title {

            font-size:
              45px;

            line-height:
              1;

          }


          .about-description {

            font-size:
              14px;

            line-height:
              1.7;

          }


          .about-meta {

            flex-direction:
              column;

            gap:
              18px;

          }


          .about-visual-area {

            min-height:
              350px;

          }


          .visual {

            width:
              315px;

            height:
              315px;

          }


          .center-orbit {

            width:
              205px;

            height:
              205px;

          }


          .center-logo {

            width:
              115px;

            height:
              115px;

          }


          .fairdeal-logo {

            width:
              68px;

            height:
              68px;

          }


          .rotating-text text {

            font-size:
              14px;

            letter-spacing:
              5px;

          }


          .visual-small-text {

            right:
              0;

            bottom:
              10px;

          }

        }

      `}),o.jsx("section",{ref:a,className:`fairdeal-about ${p?"light-mode":""}`,children:o.jsxs("div",{className:"about-inner",children:[o.jsxs("div",{className:"about-content",children:[o.jsx("div",{ref:t,className:"about-label",children:"Premium Printing & Packaging"}),o.jsx("h1",{ref:n,className:"about-title",children:g.map((y,v)=>o.jsx("span",{className:"about-word",children:y},v))}),o.jsxs("p",{ref:i,className:"about-description",children:[o.jsx("strong",{children:"Fairdeal Print Pack India Pvt. Ltd."})," has been a trusted name in printing and document solutions since"," ",o.jsx("strong",{children:"1990"}),". With decades of experience in print media, we combine quality products, reliable service and professional execution to create solutions that help businesses communicate better."]}),o.jsxs("div",{className:"about-meta",children:[o.jsx("button",{ref:s,className:"about-button",children:"Discover Fairdeal"}),o.jsxs("div",{className:"about-year",children:["Established",o.jsx("strong",{children:"1990"})]})]})]}),o.jsxs("div",{ref:c,className:"about-visual-area",children:[o.jsx("div",{className:"visual-glow"}),o.jsxs("div",{className:"visual",children:[o.jsx("div",{className:"outer-ring"}),o.jsx("div",{ref:f,className:"rotating-text",children:o.jsxs("svg",{viewBox:"0 0 500 500",children:[o.jsx("defs",{children:o.jsx("path",{id:"fairdealTextCircle",d:`\r
                        M 250,250\r
                        m -190,0\r
                        a 190,190 0 1,1 380,0\r
                        a 190,190 0 1,1 -380,0\r
                      `})}),o.jsx("text",{children:o.jsx("textPath",{href:"#fairdealTextCircle",startOffset:"0%",children:"PRINTING • PACKAGING • QUALITY • SERVICE •"})})]})}),o.jsx("div",{className:"center-orbit"}),o.jsx("div",{ref:u,className:"center-logo",children:o.jsx("img",{src:OE,alt:"Fairdeal Print Pack India Pvt. Ltd.",className:"fairdeal-logo"})}),o.jsxs("div",{className:"visual-small-text",children:[o.jsx("span",{children:"36+"})," YEARS OF TRUST"]})]}),o.jsx("div",{className:"corner-line"})]})]})})]})},ME="/boltfaredeal/assets/vision-ERx-ZeWE.jpg";Z.registerPlugin(Ce);const FE=()=>{const a=z.useRef(null);return z.useLayoutEffect(()=>{const t=a.current;if(!t)return;const n=Z.context(()=>{Z.utils.toArray(".fd-vm-block").forEach(s=>{s.querySelector(".fd-vm-content");const c=s.querySelector(".fd-vm-visual"),u=s.querySelector(".fd-vm-eyebrow"),f=s.querySelector(".fd-vm-title"),p=s.querySelectorAll(".fd-vm-copy"),m=s.querySelectorAll(".fd-vm-stat"),g=s.querySelector(".fd-vm-floating-card"),y=s.querySelector(".fd-vm-image"),v=s.querySelector(".fd-vm-orbit");Z.set([u,f,...p,...m],{opacity:1,clearProps:"transform"}),Z.timeline({scrollTrigger:{trigger:s,start:"top 78%",toggleActions:"play none none reverse"}}).from(u,{y:20,opacity:0,duration:.55,ease:"power3.out"}).from(f,{y:45,opacity:0,duration:.8,ease:"power4.out"},"-=0.25").from(p,{y:25,opacity:0,duration:.65,stagger:.15,ease:"power3.out"},"-=0.4").from(c,{x:s.classList.contains("fd-vm-mission")?-65:65,opacity:0,scale:.94,duration:1,ease:"power3.out"},"-=0.8").from(m,{y:20,opacity:0,stagger:.12,duration:.5,ease:"power3.out"},"-=0.35").from(g,{scale:.8,opacity:0,duration:.55,ease:"back.out(1.5)"},"-=0.45"),Z.to(y,{yPercent:-7,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:1}}),Z.to(g,{y:-9,duration:2.4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Z.to(v,{rotation:360,duration:35,repeat:-1,ease:"none"})}),Ce.refresh()},t);return()=>n.revert()},[]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .fd-vm-section {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;
          --fd-border: rgba(255,255,255,.09);

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--fd-bg);
          color: var(--fd-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .fd-vm-block {
          position: relative;
          isolation: isolate;
          min-height: 720px;
          display: flex;
          align-items: center;
          padding: 90px 0;
          overflow: hidden;
        }

        .fd-vm-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
          background-size: 75px 75px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .fd-vm-number {
          position: absolute;
          z-index: 0;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: clamp(300px, 42vw, 650px);
          line-height: .7;
          font-weight: 800;
          letter-spacing: -.09em;
          color: var(--fd-mint);
          opacity: .075;
          pointer-events: none;
          user-select: none;
        }

        .fd-vm-glow {
          position: absolute;
          z-index: -1;
          width: 520px;
          height: 520px;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,223,0,.07), rgba(143,231,200,.035), transparent 70%);
          filter: blur(25px);
          pointer-events: none;
        }

        .fd-vm-shell {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
        }

        .fd-vm-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 22px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-vm-top-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--fd-gray);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-top-left strong {
          color: var(--fd-white);
        }

        .fd-vm-yellow-line {
          display: inline-block;
          width: 35px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-top-right {
          color: var(--fd-gray);
          font-size: 9px;
          letter-spacing: .22em;
          font-weight: 700;
        }

        .fd-vm-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);
          align-items: center;
          gap: clamp(45px, 7vw, 100px);
        }

        .fd-vm-layout-reverse {
          grid-template-columns: minmax(0, .95fr) minmax(0, 1fr);
        }

        .fd-vm-mission .fd-vm-visual {
          order: 1;
        }

        .fd-vm-mission .fd-vm-content {
          order: 2;
        }

        .fd-vm-content {
          min-width: 0;
        }

        .fd-vm-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 22px;
          color: var(--fd-mint);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .24em;
        }

        .fd-vm-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-title {
          margin: 0 0 28px;
          font-size: clamp(48px, 5.3vw, 76px);
          line-height: .98;
          font-weight: 700;
          letter-spacing: -.065em;
        }

        .fd-vm-title span {
          display: inline-block;
          color: var(--fd-mint);
        }

        .fd-vm-copy {
          max-width: 580px;
          margin: 0 0 19px;
          color: var(--fd-gray);
          font-size: 15px;
          line-height: 1.9;
        }

        .fd-vm-copy strong {
          color: var(--fd-white);
        }

        .fd-vm-line {
          width: 190px;
          height: 3px;
          display: flex;
          margin-top: 32px;
          background: rgba(255,255,255,.1);
        }

        .fd-vm-line span {
          display: block;
          width: 85px;
          height: 100%;
          background: var(--fd-yellow);
          box-shadow: 85px 0 var(--fd-mint);
        }

        .fd-vm-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 38px;
          max-width: 500px;
        }

        .fd-vm-stat {
          min-width: 0;
          padding: 0 15px;
          border-right: 1px solid var(--fd-border);
        }

        .fd-vm-stat:first-child {
          padding-left: 0;
        }

        .fd-vm-stat:last-child {
          border-right: 0;
        }

        .fd-vm-stat-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          margin-bottom: 12px;
          border: 1px solid rgba(255,223,0,.3);
          border-radius: 50%;
          color: var(--fd-yellow);
          font-size: 18px;
          transition: transform .3s, background .3s;
        }

        .fd-vm-stat:hover .fd-vm-stat-icon {
          transform: translateY(-5px) rotate(10deg);
          background: rgba(255,223,0,.08);
        }

        .fd-vm-stat .fd-mint-icon {
          color: var(--fd-mint);
          border-color: rgba(143,231,200,.3);
        }

        .fd-vm-stat strong {
          display: block;
          margin-bottom: 6px;
          color: var(--fd-white);
          font-size: 9px;
          letter-spacing: .09em;
        }

        .fd-vm-stat > span {
          color: var(--fd-gray);
          font-size: 11px;
        }

        .fd-vm-visual {
          position: relative;
          min-width: 0;
          min-height: 520px;
          display: grid;
          place-items: center;
        }

        .fd-vm-orbit {
          position: absolute;
          width: min(100%, 530px);
          aspect-ratio: 1;
          border: 1px solid rgba(143,231,200,.15);
          border-radius: 50%;
          pointer-events: none;
        }

        .fd-vm-orbit::before {
          content: "";
          position: absolute;
          inset: 32px;
          border: 1px dashed rgba(255,223,0,.16);
          border-radius: 50%;
        }

        .fd-vm-orbit::after {
          content: "";
          position: absolute;
          top: 12%;
          right: 20%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--fd-yellow);
          box-shadow: 0 0 18px var(--fd-yellow);
        }

        .fd-vm-yellow-back {
          position: absolute;
          width: 83%;
          height: 83%;
          top: 7%;
          right: 0;
          border-radius: 24px;
          background: var(--fd-yellow);
          transform: rotate(5deg);
          opacity: .9;
        }

        .fd-vm-image-wrap {
          position: relative;
          width: 88%;
          height: 410px;
          overflow: hidden;
          border: 1px solid rgba(255,223,0,.45);
          border-radius: 22px;
          background: var(--fd-bg);
          box-shadow: 0 30px 80px rgba(0,0,0,.4);
        }

        .fd-vm-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
          filter: saturate(.9) contrast(1.05);
          transition: transform .7s ease;
        }

        .fd-vm-image-wrap:hover .fd-vm-image {
          transform: scale(1.07);
        }

        .fd-vm-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,9,11,.65), transparent 45%);
          pointer-events: none;
        }

        .fd-vm-image-label {
          position: absolute;
          bottom: 18px;
          left: 20px;
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-floating-card {
          position: absolute;
          z-index: 3;
          right: -5px;
          bottom: 0;
          width: 185px;
          padding: 22px;
          border: 1px solid var(--fd-border);
          border-radius: 17px;
          background: rgba(12,20,25,.96);
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
          backdrop-filter: blur(15px);
        }

        .fd-vm-card-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          margin-bottom: 14px;
          border: 1px solid var(--fd-yellow);
          border-radius: 50%;
          color: var(--fd-yellow);
          font-size: 20px;
        }

        .fd-vm-floating-card p {
          margin: 0 0 10px;
          color: var(--fd-gray);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-floating-card h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          letter-spacing: .09em;
        }

        .fd-vm-floating-card h3 span {
          color: var(--fd-mint);
        }

        .fd-vm-floating-card h3 b {
          color: var(--fd-yellow);
        }

        .fd-vm-divider {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: var(--fd-gray);
          font-size: 9px;
          letter-spacing: .2em;
        }

        .fd-vm-divider span {
          height: 1px;
          flex: 1;
          background: var(--fd-border);
        }

        .fd-vm-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 28px 20px 40px;
          color: var(--fd-mint);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
          text-align: center;
        }

        .fd-vm-footer span {
          width: 35px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-footer p {
          margin: 0;
        }

        .fd-vm-footer b {
          color: var(--fd-gray);
          font-size: 8px;
        }

        @media (max-width: 1050px) {
          .fd-vm-block {
            min-height: auto;
            padding: 80px 0;
          }

          .fd-vm-shell {
            width: min(800px, calc(100% - 48px));
          }

          .fd-vm-layout,
          .fd-vm-layout-reverse {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .fd-vm-content {
            text-align: center;
          }

          .fd-vm-eyebrow {
            justify-content: center;
          }

          .fd-vm-copy {
            margin-left: auto;
            margin-right: auto;
          }

          .fd-vm-line,
          .fd-vm-stats {
            margin-left: auto;
            margin-right: auto;
          }

          .fd-vm-stats {
            text-align: left;
          }

          .fd-vm-visual {
            width: min(100%, 600px);
            margin: auto;
          }

          .fd-vm-mission .fd-vm-visual,
          .fd-vm-mission .fd-vm-content {
            order: initial;
          }

          .fd-vm-number {
            font-size: clamp(280px, 55vw, 450px);
          }
        }

        @media (max-width: 600px) {
          .fd-vm-block {
            padding: 58px 0;
          }

          .fd-vm-shell,
          .fd-vm-divider {
            width: calc(100% - 34px);
          }

          .fd-vm-topbar {
            margin-bottom: 35px;
            padding-bottom: 16px;
          }

          .fd-vm-top-left {
            gap: 7px;
            font-size: 8px;
            letter-spacing: .1em;
          }

          .fd-vm-yellow-line {
            width: 18px;
          }

          .fd-vm-top-right {
            max-width: 100px;
            font-size: 7px;
            line-height: 1.7;
            text-align: right;
          }

          .fd-vm-title {
            font-size: clamp(44px, 12vw, 60px);
          }

          .fd-vm-copy {
            font-size: 13px;
            line-height: 1.8;
          }

          .fd-vm-visual {
            min-height: 390px;
          }

          .fd-vm-orbit {
            width: 100%;
          }

          .fd-vm-orbit::before {
            inset: 20px;
          }

          .fd-vm-image-wrap {
            width: 90%;
            height: 320px;
            border-radius: 16px;
          }

          .fd-vm-yellow-back {
            border-radius: 16px;
          }

          .fd-vm-floating-card {
            right: 0;
            bottom: -2px;
            width: 145px;
            padding: 15px;
            border-radius: 13px;
          }

          .fd-vm-card-icon {
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
          }

          .fd-vm-floating-card h3 {
            font-size: 12px;
          }

          .fd-vm-stats {
            gap: 0;
            margin-top: 30px;
          }

          .fd-vm-stat {
            padding: 0 9px;
          }

          .fd-vm-stat-icon {
            width: 32px;
            height: 32px;
          }

          .fd-vm-stat strong {
            font-size: 8px;
            letter-spacing: .03em;
          }

          .fd-vm-stat > span {
            font-size: 9px;
          }

          .fd-vm-number {
            left: -10px;
            top: 30%;
            font-size: 260px;
          }

          /* Keep the oversized 02 behind the Mission content on mobile. */
          .fd-vm-mission .fd-vm-number {
            top: 145px;
            right: -12px;
            left: auto;
            transform: none;
            font-size: clamp(190px, 48vw, 260px);
            opacity: .065;
          }

          .fd-vm-mission .fd-vm-content {
            position: relative;
            z-index: 2;
            order: 1;
          }

          .fd-vm-mission .fd-vm-visual {
            position: relative;
            z-index: 1;
            order: 2;
          }

          .fd-vm-footer {
            flex-wrap: wrap;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-vm-image,
          .fd-vm-stat-icon {
            transition: none;
          }
        }
      `}),o.jsxs("section",{ref:a,className:"fd-vm-section",children:[o.jsx("div",{className:"fd-vm-grid"}),o.jsxs("article",{className:"fd-vm-block fd-vm-vision",children:[o.jsx("div",{className:"fd-vm-number","aria-hidden":"true",children:"01"}),o.jsx("div",{className:"fd-vm-glow"}),o.jsxs("div",{className:"fd-vm-shell",children:[o.jsxs("div",{className:"fd-vm-topbar",children:[o.jsxs("div",{className:"fd-vm-top-left",children:[o.jsx("span",{className:"fd-vm-yellow-line"}),o.jsx("span",{children:"01"}),o.jsx("b",{children:"—"}),o.jsx("strong",{children:"THE VISION"})]}),o.jsx("div",{className:"fd-vm-top-right",children:"FAIRDEAL PRINT PACK"})]}),o.jsxs("div",{className:"fd-vm-layout",children:[o.jsxs("div",{className:"fd-vm-content",children:[o.jsx("p",{className:"fd-vm-eyebrow",children:"OUR DIRECTION"}),o.jsxs("h2",{className:"fd-vm-title",children:["Our ",o.jsx("span",{children:"Vision"})]}),o.jsx("p",{className:"fd-vm-copy",children:"To become a trusted leader in the printing and packaging industry by delivering innovative, reliable, and high-quality print solutions that help our customers grow."}),o.jsx("p",{className:"fd-vm-copy",children:"We aim to combine modern technology, creative thinking, and consistent quality to build lasting relationships and create meaningful value for every client."}),o.jsx("div",{className:"fd-vm-line",children:o.jsx("span",{})}),o.jsxs("div",{className:"fd-vm-stats",children:[o.jsxs("div",{className:"fd-vm-stat",children:[o.jsx("div",{className:"fd-vm-stat-icon",children:"✦"}),o.jsx("strong",{children:"CUSTOMER"}),o.jsx("span",{children:"Satisfaction"})]}),o.jsxs("div",{className:"fd-vm-stat",children:[o.jsx("div",{className:"fd-vm-stat-icon fd-mint-icon",children:"◇"}),o.jsx("strong",{children:"INNOVATION"}),o.jsx("span",{children:"Progress"})]}),o.jsxs("div",{className:"fd-vm-stat",children:[o.jsx("div",{className:"fd-vm-stat-icon",children:"◎"}),o.jsx("strong",{children:"INTEGRITY"}),o.jsx("span",{children:"Trust"})]})]})]}),o.jsxs("div",{className:"fd-vm-visual",children:[o.jsx("div",{className:"fd-vm-orbit"}),o.jsx("div",{className:"fd-vm-yellow-back"}),o.jsxs("div",{className:"fd-vm-image-wrap",children:[o.jsx("img",{className:"fd-vm-image",src:ME,alt:"Fairdeal Print Pack vision"}),o.jsx("div",{className:"fd-vm-image-shade"})]}),o.jsxs("div",{className:"fd-vm-floating-card",children:[o.jsx("div",{className:"fd-vm-card-icon",children:"◎"}),o.jsx("p",{children:"OUR VISION"}),o.jsxs("h3",{children:["CUSTOMER",o.jsx("br",{}),o.jsx("span",{children:"SUCCESS"}),o.jsx("br",{}),o.jsx("b",{children:"FIRST"})]})]})]})]})]})]})]})]})},DE="/boltfaredeal/assets/mission-bV1jvH6z.jpg";Z.registerPlugin(Ce);const BE=()=>{const a=z.useRef(null);return z.useLayoutEffect(()=>{const t=a.current;if(!t)return;const n=Z.context(()=>{Z.utils.toArray(".fd-vm-block").forEach(s=>{s.querySelector(".fd-vm-content");const c=s.querySelector(".fd-vm-visual"),u=s.querySelector(".fd-vm-eyebrow"),f=s.querySelector(".fd-vm-title"),p=s.querySelectorAll(".fd-vm-copy"),m=s.querySelectorAll(".fd-vm-stat"),g=s.querySelector(".fd-vm-floating-card"),y=s.querySelector(".fd-vm-image"),v=s.querySelector(".fd-vm-orbit");Z.set([u,f,...p,...m],{opacity:1,clearProps:"transform"}),Z.timeline({scrollTrigger:{trigger:s,start:"top 78%",toggleActions:"play none none reverse"}}).from(u,{y:20,opacity:0,duration:.55,ease:"power3.out"}).from(f,{y:45,opacity:0,duration:.8,ease:"power4.out"},"-=0.25").from(p,{y:25,opacity:0,duration:.65,stagger:.15,ease:"power3.out"},"-=0.4").from(c,{x:s.classList.contains("fd-vm-mission")?-65:65,opacity:0,scale:.94,duration:1,ease:"power3.out"},"-=0.8").from(m,{y:20,opacity:0,stagger:.12,duration:.5,ease:"power3.out"},"-=0.35").from(g,{scale:.8,opacity:0,duration:.55,ease:"back.out(1.5)"},"-=0.45"),Z.to(y,{yPercent:-7,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:1}}),Z.to(g,{y:-9,duration:2.4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Z.to(v,{rotation:360,duration:35,repeat:-1,ease:"none"})}),Ce.refresh()},t);return()=>n.revert()},[]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .fd-vm-section {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;
          --fd-border: rgba(255,255,255,.09);

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--fd-bg);
          color: var(--fd-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .fd-vm-block {
          position: relative;
          isolation: isolate;
          min-height: 720px;
          display: flex;
          align-items: center;
          padding: 90px 0;
          overflow: hidden;
        }

        .fd-vm-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
          background-size: 75px 75px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .fd-vm-number {
          position: absolute;
          z-index: 0;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: clamp(300px, 42vw, 650px);
          line-height: .7;
          font-weight: 800;
          letter-spacing: -.09em;
          color: var(--fd-mint);
          opacity: .075;
          pointer-events: none;
          user-select: none;
        }

        .fd-vm-glow {
          position: absolute;
          z-index: -1;
          width: 520px;
          height: 520px;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,223,0,.07), rgba(143,231,200,.035), transparent 70%);
          filter: blur(25px);
          pointer-events: none;
        }

        .fd-vm-shell {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
        }

        /* Mission: keep the large 02 on the right at all screen sizes. */
        .fd-vm-mission .fd-vm-number {
          left: auto;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 0;
          font-size: clamp(220px, 38vw, 600px);
          opacity: .075;
        }

        .fd-vm-mission .fd-vm-shell {
          z-index: 1;
        }

        .fd-vm-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 22px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-vm-top-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--fd-gray);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-top-left strong {
          color: var(--fd-white);
        }

        .fd-vm-yellow-line {
          display: inline-block;
          width: 35px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-top-right {
          color: var(--fd-gray);
          font-size: 9px;
          letter-spacing: .22em;
          font-weight: 700;
        }

        .fd-vm-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);
          align-items: center;
          gap: clamp(45px, 7vw, 100px);
        }

        .fd-vm-layout-reverse {
          grid-template-columns: minmax(0, .95fr) minmax(0, 1fr);
        }

        .fd-vm-mission .fd-vm-visual {
          order: 1;
        }

        .fd-vm-mission .fd-vm-content {
          order: 2;
        }

        .fd-vm-content {
          min-width: 0;
        }

        .fd-vm-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 22px;
          color: var(--fd-mint);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .24em;
        }

        .fd-vm-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-title {
          margin: 0 0 28px;
          font-size: clamp(48px, 5.3vw, 76px);
          line-height: .98;
          font-weight: 700;
          letter-spacing: -.065em;
        }

        .fd-vm-title span {
          display: inline-block;
          color: var(--fd-mint);
        }

        .fd-vm-copy {
          max-width: 580px;
          margin: 0 0 19px;
          color: var(--fd-gray);
          font-size: 15px;
          line-height: 1.9;
        }

        .fd-vm-copy strong {
          color: var(--fd-white);
        }

        .fd-vm-line {
          width: 190px;
          height: 3px;
          display: flex;
          margin-top: 32px;
          background: rgba(255,255,255,.1);
        }

        .fd-vm-line span {
          display: block;
          width: 85px;
          height: 100%;
          background: var(--fd-yellow);
          box-shadow: 85px 0 var(--fd-mint);
        }

        .fd-vm-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 38px;
          max-width: 500px;
        }

        .fd-vm-stat {
          min-width: 0;
          padding: 0 15px;
          border-right: 1px solid var(--fd-border);
        }

        .fd-vm-stat:first-child {
          padding-left: 0;
        }

        .fd-vm-stat:last-child {
          border-right: 0;
        }

        .fd-vm-stat-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          margin-bottom: 12px;
          border: 1px solid rgba(255,223,0,.3);
          border-radius: 50%;
          color: var(--fd-yellow);
          font-size: 18px;
          transition: transform .3s, background .3s;
        }

        .fd-vm-stat:hover .fd-vm-stat-icon {
          transform: translateY(-5px) rotate(10deg);
          background: rgba(255,223,0,.08);
        }

        .fd-vm-stat .fd-mint-icon {
          color: var(--fd-mint);
          border-color: rgba(143,231,200,.3);
        }

        .fd-vm-stat strong {
          display: block;
          margin-bottom: 6px;
          color: var(--fd-white);
          font-size: 9px;
          letter-spacing: .09em;
        }

        .fd-vm-stat > span {
          color: var(--fd-gray);
          font-size: 11px;
        }

        .fd-vm-visual {
          position: relative;
          min-width: 0;
          min-height: 520px;
          display: grid;
          place-items: center;
        }

        .fd-vm-orbit {
          position: absolute;
          width: min(100%, 530px);
          aspect-ratio: 1;
          border: 1px solid rgba(143,231,200,.15);
          border-radius: 50%;
          pointer-events: none;
        }

        .fd-vm-orbit::before {
          content: "";
          position: absolute;
          inset: 32px;
          border: 1px dashed rgba(255,223,0,.16);
          border-radius: 50%;
        }

        .fd-vm-orbit::after {
          content: "";
          position: absolute;
          top: 12%;
          right: 20%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--fd-yellow);
          box-shadow: 0 0 18px var(--fd-yellow);
        }

        .fd-vm-yellow-back {
          position: absolute;
          width: 83%;
          height: 83%;
          top: 7%;
          right: 0;
          border-radius: 24px;
          background: var(--fd-yellow);
          transform: rotate(5deg);
          opacity: .9;
        }

        .fd-vm-image-wrap {
          position: relative;
          width: 88%;
          height: 410px;
          overflow: hidden;
          border: 1px solid rgba(255,223,0,.45);
          border-radius: 22px;
          background: var(--fd-panel);
          box-shadow: 0 30px 80px rgba(0,0,0,.4);
        }

        .fd-vm-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
          filter: saturate(.9) contrast(1.05);
          transition: transform .7s ease;
        }

        .fd-vm-image-wrap:hover .fd-vm-image {
          transform: scale(1.07);
        }

        .fd-vm-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,9,11,.65), transparent 45%);
          pointer-events: none;
        }

        .fd-vm-image-label {
          position: absolute;
          bottom: 18px;
          left: 20px;
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-floating-card {
          position: absolute;
          z-index: 3;
          right: -5px;
          bottom: 0;
          width: 185px;
          padding: 22px;
          border: 1px solid var(--fd-border);
          border-radius: 17px;
          background: rgba(12,20,25,.96);
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
          backdrop-filter: blur(15px);
        }

        .fd-vm-card-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          margin-bottom: 14px;
          border: 1px solid var(--fd-yellow);
          border-radius: 50%;
          color: var(--fd-yellow);
          font-size: 20px;
        }

        .fd-vm-floating-card p {
          margin: 0 0 10px;
          color: var(--fd-gray);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .fd-vm-floating-card h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          letter-spacing: .09em;
        }

        .fd-vm-floating-card h3 span {
          color: var(--fd-mint);
        }

        .fd-vm-floating-card h3 b {
          color: var(--fd-yellow);
        }

        .fd-vm-divider {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: var(--fd-gray);
          font-size: 9px;
          letter-spacing: .2em;
        }

        .fd-vm-divider span {
          height: 1px;
          flex: 1;
          background: var(--fd-border);
        }

        .fd-vm-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 28px 20px 40px;
          color: var(--fd-mint);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .2em;
          text-align: center;
        }

        .fd-vm-footer span {
          width: 35px;
          height: 2px;
          background: var(--fd-yellow);
        }

        .fd-vm-footer p {
          margin: 0;
        }

        .fd-vm-footer b {
          color: var(--fd-gray);
          font-size: 8px;
        }

        @media (max-width: 1050px) {
          .fd-vm-block {
            min-height: auto;
            padding: 80px 0;
          }

          .fd-vm-shell {
            width: min(800px, calc(100% - 48px));
          }

          .fd-vm-layout,
          .fd-vm-layout-reverse {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .fd-vm-content {
            text-align: center;
          }

          .fd-vm-eyebrow {
            justify-content: center;
          }

          .fd-vm-copy {
            margin-left: auto;
            margin-right: auto;
          }

          .fd-vm-line,
          .fd-vm-stats {
            margin-left: auto;
            margin-right: auto;
          }

          .fd-vm-stats {
            text-align: left;
          }

          .fd-vm-visual {
            width: min(100%, 600px);
            margin: auto;
          }

          .fd-vm-mission .fd-vm-visual,
          .fd-vm-mission .fd-vm-content {
            order: initial;
          }

          .fd-vm-number {
            font-size: clamp(280px, 55vw, 450px);
          }

          .fd-vm-mission .fd-vm-number {
            left: auto;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: clamp(220px, 45vw, 450px);
          }
        }

        @media (max-width: 600px) {
          .fd-vm-block {
            padding: 58px 0;
          }

          .fd-vm-shell,
          .fd-vm-divider {
            width: calc(100% - 34px);
          }

          .fd-vm-topbar {
            margin-bottom: 35px;
            padding-bottom: 16px;
          }

          .fd-vm-top-left {
            gap: 7px;
            font-size: 8px;
            letter-spacing: .1em;
          }

          .fd-vm-yellow-line {
            width: 18px;
          }

          .fd-vm-top-right {
            max-width: 100px;
            font-size: 7px;
            line-height: 1.7;
            text-align: right;
          }

          .fd-vm-title {
            font-size: clamp(44px, 12vw, 60px);
          }

          .fd-vm-copy {
            font-size: 13px;
            line-height: 1.8;
          }

          .fd-vm-visual {
            min-height: 390px;
          }

          .fd-vm-orbit {
            width: 100%;
          }

          .fd-vm-orbit::before {
            inset: 20px;
          }

          .fd-vm-image-wrap {
            width: 90%;
            height: 320px;
            border-radius: 16px;
          }

          .fd-vm-yellow-back {
            border-radius: 16px;
          }

          .fd-vm-floating-card {
            right: 0;
            bottom: -2px;
            width: 145px;
            padding: 15px;
            border-radius: 13px;
          }

          .fd-vm-card-icon {
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
          }

          .fd-vm-floating-card h3 {
            font-size: 12px;
          }

          .fd-vm-stats {
            gap: 0;
            margin-top: 30px;
          }

          .fd-vm-stat {
            padding: 0 9px;
          }

          .fd-vm-stat-icon {
            width: 32px;
            height: 32px;
          }

          .fd-vm-stat strong {
            font-size: 8px;
            letter-spacing: .03em;
          }

          .fd-vm-stat > span {
            font-size: 9px;
          }

          .fd-vm-number {
            left: -10px;
            top: 30%;
            font-size: 260px;
          }

          .fd-vm-mission .fd-vm-number {
            top: 145px;
            right: -12px;
            left: auto;
            transform: none;
            z-index: 0;
            font-size: clamp(190px, 48vw, 260px);
            opacity: .065;
          }

          .fd-vm-mission .fd-vm-content {
            position: relative;
            z-index: 2;
            order: 1;
          }

          .fd-vm-mission .fd-vm-visual {
            position: relative;
            z-index: 1;
            order: 2;
          }

          .fd-vm-footer {
            flex-wrap: wrap;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-vm-image,
          .fd-vm-stat-icon {
            transition: none;
          }
        }
      `}),o.jsxs("section",{ref:a,className:"fd-vm-section",children:[o.jsx("div",{className:"fd-vm-grid"}),o.jsxs("article",{className:"fd-vm-block fd-vm-mission",children:[o.jsx("div",{className:"fd-vm-number","aria-hidden":"true",children:"02"}),o.jsx("div",{className:"fd-vm-glow"}),o.jsxs("div",{className:"fd-vm-shell",children:[o.jsxs("div",{className:"fd-vm-topbar",children:[o.jsxs("div",{className:"fd-vm-top-left",children:[o.jsx("span",{className:"fd-vm-yellow-line"}),o.jsx("span",{children:"02"}),o.jsx("b",{children:"—"}),o.jsx("strong",{children:"THE MISSION"})]}),o.jsx("div",{className:"fd-vm-top-right",children:"FAIRDEAL PRINT PACK"})]}),o.jsxs("div",{className:"fd-vm-layout fd-vm-layout-reverse",children:[o.jsxs("div",{className:"fd-vm-visual",children:[o.jsx("div",{className:"fd-vm-orbit"}),o.jsx("div",{className:"fd-vm-yellow-back"}),o.jsx("div",{className:"fd-vm-image-wrap",children:o.jsx("img",{className:"fd-vm-image",src:DE,alt:"Fairdeal Print Pack mission"})}),o.jsxs("div",{className:"fd-vm-floating-card",children:[o.jsx("div",{className:"fd-vm-card-icon",children:"◎"}),o.jsx("p",{children:"OUR MISSION"}),o.jsxs("h3",{children:["QUALITY",o.jsx("br",{}),o.jsx("span",{children:"SERVICE"}),o.jsx("br",{}),o.jsx("b",{children:"IMPACT"})]})]})]}),o.jsxs("div",{className:"fd-vm-content",children:[o.jsx("p",{className:"fd-vm-eyebrow",children:"OUR PURPOSE"}),o.jsxs("h2",{className:"fd-vm-title",children:["Our ",o.jsx("span",{children:"Mission"})]}),o.jsx("p",{className:"fd-vm-copy",children:"Our mission is to provide customers with dependable, high-quality printing and packaging solutions that meet their needs with precision, creativity, and care."}),o.jsx("p",{className:"fd-vm-copy",children:"Through skilled people, responsible practices, and continuous improvement, we strive to deliver excellent service, build trust, and exceed expectations in every project."}),o.jsx("div",{className:"fd-vm-line",children:o.jsx("span",{})}),o.jsxs("div",{className:"fd-vm-stats",children:[o.jsxs("div",{className:"fd-vm-stat",children:[o.jsx("div",{className:"fd-vm-stat-icon",children:"✦"}),o.jsx("strong",{children:"QUALITY"}),o.jsx("span",{children:"Excellence"})]}),o.jsxs("div",{className:"fd-vm-stat",children:[o.jsx("div",{className:"fd-vm-stat-icon fd-mint-icon",children:"◇"}),o.jsx("strong",{children:"CREATIVITY"}),o.jsx("span",{children:"Ideas"})]}),o.jsxs("div",{className:"fd-vm-stat",children:[o.jsx("div",{className:"fd-vm-stat-icon",children:"◎"}),o.jsx("strong",{children:"SERVICE"}),o.jsx("span",{children:"Commitment"})]})]})]})]})]})]})]})]})};Z.registerPlugin(Ce);const UE=()=>{const a=z.useRef(null),t=z.useRef(null),n=z.useRef(null),i=z.useRef(null),s=z.useRef(null),c=z.useRef(null),u=z.useRef(null),f=z.useRef(null),p=z.useRef([]),[m,g]=z.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));z.useEffect(()=>{const v=document.documentElement,b=()=>{const w=v.getAttribute("data-theme")==="light"||v.classList.contains("light");g(w)};b();const k=new MutationObserver(b);return k.observe(v,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>k.disconnect()},[]),z.useEffect(()=>{const v=a.current;if(!v)return;const b=Z.context(()=>{const k=u.current.querySelectorAll(".values-card"),w=i.current.querySelectorAll(".values-word");Z.set(t.current,{opacity:0,scale:.75,x:-80}),Z.set(n.current,{opacity:0,x:-30}),Z.set(w,{opacity:0,y:80,rotateX:-75}),Z.set(s.current,{opacity:0,y:35}),Z.set(c.current,{scaleX:0,transformOrigin:"left center"}),Z.set(k,{opacity:0,y:70,rotateY:12}),Z.set(f.current,{opacity:0,y:40}),Z.set(p.current,{opacity:0,scale:0,rotation:-90}),Z.timeline({scrollTrigger:{trigger:v,start:"top 72%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:.08,scale:1,x:0,duration:1,ease:"expo.out"}).to(n.current,{opacity:1,x:0,duration:.6,ease:"power3.out"},"-=0.65").to(w,{opacity:1,y:0,rotateX:0,duration:.8,stagger:.08,ease:"power4.out"},"-=0.25").to(s.current,{opacity:1,y:0,duration:.7,ease:"power3.out"},"-=0.35").to(c.current,{scaleX:1,duration:1,ease:"expo.out"},"-=0.25").to(k,{opacity:1,y:0,rotateY:0,duration:.8,stagger:.13,ease:"power4.out"},"-=0.5").to(p.current,{opacity:1,scale:1,rotation:0,duration:.7,stagger:.1,ease:"back.out(2)"},"-=0.5").to(f.current,{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.35"),Z.to(t.current,{y:-25,duration:4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),p.current.forEach((A,S)=>{Z.to(A,{rotation:S%2===0?180:-180,duration:8+S,repeat:-1,ease:"none"})}),Z.to(t.current,{y:-100,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.5}}),Z.to(u.current,{y:-45,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.2}});const C=A=>{const S=v.getBoundingClientRect(),j=((A.clientX-S.left)/S.width-.5)*2,P=((A.clientY-S.top)/S.height-.5)*2;Z.to(".values-content",{x:j*5,y:P*3,duration:1,ease:"power3.out"}),Z.to(".values-number",{x:j*-10,duration:1.2,ease:"power3.out"})};return v.addEventListener("mousemove",C),()=>{v.removeEventListener("mousemove",C)}},v);return()=>b.revert()},[]);const y=[{number:"01",title:"Respect",text:"We treat our customers, employees and business partners with respect, dignity and professionalism.",icon:"↗"},{number:"02",title:"Honesty",text:"Honesty and transparency guide the way we communicate, work and build lasting relationships.",icon:"◇"},{number:"03",title:"Integrity",text:"We maintain strong ethical standards and remain committed to doing the right thing in every situation.",icon:"◎"},{number:"04",title:"Business Ethics",text:"We integrate responsible business ethics into every aspect of our operations and customer relationships.",icon:"✦"}];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

        /* =====================================================
           ROOT
        ===================================================== */

        .fairdeal-values {

          --values-bg: #05090B;
          --values-panel: #0C1419;
          --values-panel-2: #111B21;

          --values-yellow: #FFDF00;
          --values-mint: #8FE7C8;

          --values-white: #F5F7F8;
          --values-gray: #98A1B1;
          --values-muted: #66717E;

          --values-border:
            rgba(255,255,255,0.09);

          position: relative;

          width: 100%;

          min-height: 100vh;

          overflow: hidden;

          background:
            var(--values-bg);

          color:
            var(--values-white);

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;

          transition:
            background 0.5s ease,
            color 0.5s ease;

        }


        /* =====================================================
           LIGHT MODE
        ===================================================== */

        .fairdeal-values.light-mode {

          --values-bg: #F5F7F8;
          --values-panel: #FFFFFF;
          --values-panel-2: #EEF2F1;

          --values-yellow: #C9AE00;
          --values-mint: #128C68;

          --values-white: #101518;
          --values-gray: #56616D;
          --values-muted: #7B858F;

          --values-border:
            rgba(5,9,11,0.10);

        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .values-grid {

          position: absolute;

          inset: 0;

          background-image:

            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            );

          background-size:
            100px 100px;

          opacity:
            0.35;

          pointer-events:
            none;

        }


        .values-glow {

          position: absolute;

          width: 650px;

          height: 650px;

          left: -220px;

          top: 50%;

          transform:
            translateY(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(143,231,200,0.08),
              rgba(255,223,0,0.035),
              transparent 70%
            );

          filter:
            blur(45px);

          pointer-events:
            none;

        }


        /* =====================================================
           HUGE 03
        ===================================================== */

        .values-number {

          position: absolute;

          left: -20px;

          top: 50%;

          transform:
            translateY(-50%);

          font-size:
            clamp(
              300px,
              42vw,
              650px
            );

          line-height:
            0.7;

          font-weight:
            800;

          letter-spacing:
            -0.09em;

          color:
            var(--values-mint);

          opacity:
            0;

          pointer-events:
            none;

          user-select:
            none;

        }


        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .values-container {

          position: relative;

          z-index: 2;

          width:
            min(
              1240px,
              calc(100% - 100px)
            );

          min-height:
            100vh;

          margin:
            auto;

          padding:
            50px 0 10px;

        }


        /* =====================================================
           TOP CONTENT
        ===================================================== */

        .values-content {

          position: relative;

          max-width:
            850px;

        }


        /* =====================================================
           LABEL
        ===================================================== */

        .values-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            25px;

          color:
            var(--values-mint);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .values-label-line {

          width:
            45px;

          height:
            2px;

          background:
            var(--values-yellow);

        }


        .values-number-small {

          color:
            var(--values-yellow);

        }


        /* =====================================================
           TITLE
        ===================================================== */

        .values-title {

          margin:
            0;

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            0.18em;

          font-size:
            clamp(2.25rem, 4.7vw, 4.4rem);

          line-height:
            0.88;

          letter-spacing:
            -0.065em;

          font-weight:
            650;

          perspective:
            1000px;

        }


        .values-word {

          display:
            inline-block;

          transform-origin:
            center bottom;

        }


        .values-word:nth-child(1) {

          color:
            var(--values-white);

        }


        .values-word:nth-child(2) {

          color:
            var(--values-mint);

        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .values-description {

          max-width:
            720px;

          margin-top:
            38px;

          color:
            var(--values-gray);

          font-size:
            18px;

          line-height:
            1.75;

        }


        .values-description strong {

          color:
            var(--values-white);

        }


        /* =====================================================
           LINE
        ===================================================== */

        .values-line {

          width:
            100%;

          height:
            1px;

          margin-top:
            48px;

          background:
            var(--values-border);

          transform:
            scaleX(0);

        }


        .values-line::after {

          content:
            "";

          display:
            block;

          width:
            140px;

          height:
            2px;

          background:
            linear-gradient(
              90deg,
              var(--values-yellow),
              var(--values-mint)
            );

        }


        /* =====================================================
           VALUE CARDS
        ===================================================== */

        .values-cards {

          position:
            relative;

          display:
            grid;

          grid-template-columns:
            repeat(4, 1fr);

          margin-top:
            65px;

          perspective:
            1200px;

        }


        .values-card {

          position:
            relative;

          min-height:
            285px;

          padding:
            30px 26px;

          border-top:
            1px solid
            var(--values-border);

          border-bottom:
            1px solid
            var(--values-border);

          border-left:
            1px solid
            var(--values-border);

          background:
            rgba(
              12,
              20,
              25,
              0.55
            );

          backdrop-filter:
            blur(12px);

          transition:
            transform 0.5s cubic-bezier(.2,.8,.2,1),
            background 0.5s ease,
            border-color 0.5s ease;

          transform-style:
            preserve-3d;

        }


        .light-mode .values-card {

          background:
            rgba(
              255,
              255,
              255,
              0.65
            );

        }


        .values-card:last-child {

          border-right:
            1px solid
            var(--values-border);

        }


        .values-card:hover {

          transform:
            translateY(-14px);

          background:
            var(--values-panel-2);

          border-color:
            rgba(
              255,
              223,
              0,
              0.45
            );

          z-index:
            5;

        }


        /* =====================================================
           CARD NUMBER
        ===================================================== */

        .values-card-number {

          color:
            var(--values-yellow);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.2em;

        }


        /* =====================================================
           CARD ICON
        ===================================================== */

        .values-card-icon {

          position:
            absolute;

          top:
            25px;

          right:
            25px;

          width:
            42px;

          height:
            42px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            var(--values-border);

          border-radius:
            50%;

          color:
            var(--values-mint);

          font-size:
            18px;

          transition:
            border-color 0.4s ease,
            color 0.4s ease;

        }


        .values-card:hover
        .values-card-icon {

          border-color:
            var(--values-yellow);

          color:
            var(--values-yellow);

        }


        /* =====================================================
           CARD TITLE
        ===================================================== */

        .values-card-title {

          margin-top:
            70px;

          color:
            #80e8ff;

          font-size:
            24px;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

        }


        .values-card-text {

          margin-top:
            18px;

          color:
            var(--values-gray);

          font-size:
            13px;

          line-height:
            1.75;

        }


        /* =====================================================
           BOTTOM STATEMENT
        ===================================================== */

        .values-bottom {

          display:
            grid;

          grid-template-columns:
            1fr 1.5fr;

          gap:
            60px;

          align-items:
            end;

          margin-top:
            70px;

          padding-top:
            35px;

          border-top:
            1px solid
            var(--values-border);

        }


        .values-quote-label {

          color:
            var(--values-yellow);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .values-quote {

          margin:
            10px 0 0;

          color:
            var(--values-white);

          font-size:
            clamp(
              22px,
              2.3vw,
              32px
            );

          line-height:
            1.25;

          letter-spacing:
            -0.035em;

        }


        .values-quote span {

          color:
            var(--values-mint);

        }


        .values-footer-text {

          max-width:
            500px;

          justify-self:
            end;

          color:
            var(--values-gray);

          font-size:
            13px;

          line-height:
            1.7;

        }


        /* =====================================================
           DECORATIVE PLUS
        ===================================================== */

        .values-plus {

          position:
            absolute;

          width:
            18px;

          height:
            18px;

          pointer-events:
            none;

        }


        .values-plus::before,
        .values-plus::after {

          content:
            "";

          position:
            absolute;

          background:
            var(--values-yellow);

        }


        .values-plus::before {

          width:
            100%;

          height:
            1px;

          top:
            50%;

          left:
            0;

        }


        .values-plus::after {

          width:
            1px;

          height:
            100%;

          top:
            0;

          left:
            50%;

        }


        .values-plus-1 {

          top:
            15%;

          right:
            8%;

        }


        .values-plus-2 {

          top:
            48%;

          right:
            3%;

        }


        .values-plus-3 {

          bottom:
            13%;

          left:
            8%;

        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {

          .values-container {

            width:
              min(
                calc(100% - 60px),
                850px
              );

          }


          .values-cards {

            grid-template-columns:
              repeat(2, 1fr);

          }


          .values-card:nth-child(2) {

            border-right:
              1px solid
              var(--values-border);

          }


          .values-card:nth-child(3) {

            border-top:
              none;

          }


          .values-card:nth-child(4) {

            border-top:
              none;

          }


          .values-bottom {

            grid-template-columns:
              1fr;

            gap:
              25px;

          }


          .values-footer-text {

            justify-self:
              start;

          }

        }


        @media (max-width: 600px) {

          .values-container {

            width:
              calc(100% - 36px);

            padding:
              80px 0;

          }


          .values-number {

            left:
              -15px;

            font-size:
              260px;

          }


          .values-label {

            font-size:
              9px;

          }


          .values-title {

            font-size:
              58px;

          }


          .values-description {

            font-size:
              14px;

            line-height:
              1.75;

            margin-top:
              28px;

          }


          .values-cards {

            grid-template-columns:
              1fr;

            margin-top:
              45px;

          }


          .values-card {

            min-height:
              240px;

            border:
              1px solid
              var(--values-border) !important;

          }


          .values-card:not(:first-child) {

            border-top:
              none !important;

          }


          .values-card-title {

            margin-top:
              55px;

            font-size:
              22px;

          }


          .values-card-text {

            font-size:
              12px;

          }


          .values-bottom {

            margin-top:
              50px;

          }


          .values-footer-text {

            font-size:
              12px;

          }


          .values-plus-1 {

            right:
              5%;

          }


          .values-plus-2 {

            right:
              3%;

          }


          .values-plus-3 {

            left:
              5%;

          }

        }

      `}),o.jsxs("section",{ref:a,className:`fairdeal-values ${m?"light-mode":""}`,children:[o.jsx("div",{className:"values-grid"}),o.jsx("div",{className:"values-glow"}),o.jsx("div",{ref:t,className:"values-number",children:"03"}),o.jsx("div",{className:"values-plus values-plus-1"}),o.jsx("div",{className:"values-plus values-plus-2"}),o.jsx("div",{className:"values-plus values-plus-3"}),o.jsxs("div",{className:"values-container",children:[o.jsxs("div",{className:"values-content",children:[o.jsxs("div",{ref:n,className:"values-label",children:[o.jsx("span",{className:"values-label-line"}),o.jsx("span",{className:"values-number-small",children:"03"}),o.jsx("span",{children:"—"}),o.jsx("span",{children:"CORE VALUES"})]}),o.jsxs("h2",{ref:i,className:"values-title",children:[o.jsx("span",{className:"values-word",children:"What"}),o.jsx("span",{className:"values-word",children:"We Believe"})]}),o.jsxs("p",{ref:s,className:"values-description",children:["We believe in treating our customers with"," ",o.jsx("strong",{children:"respect and faith."})," We integrate honesty, integrity and business ethics into every aspect of our business functioning."]}),o.jsx("div",{ref:c,className:"values-line"})]}),o.jsx("div",{ref:u,className:"values-cards",children:y.map((v,b)=>o.jsxs("div",{className:"values-card",children:[o.jsx("div",{className:"values-card-number",children:v.number}),o.jsx("div",{ref:k=>{p.current[b]=k},className:"values-card-icon",children:v.icon}),o.jsx("h3",{className:"values-card-title",children:v.title}),o.jsx("p",{className:"values-card-text",children:v.text})]},v.number))}),o.jsxs("div",{ref:f,className:"values-bottom",children:[o.jsxs("div",{children:[o.jsx("div",{className:"values-quote-label",children:"OUR PRINCIPLE"}),o.jsxs("p",{className:"values-quote",children:[o.jsx("span",{children:"Integrity"})," in every interaction."]})]}),o.jsx("p",{className:"values-footer-text",children:"These principles shape how we work, communicate and build long-term relationships with our customers, employees and business partners."})]})]})]})]})},WE="/boltfaredeal/assets/goal-K4Jdav5X.jpg";Z.registerPlugin(Ce);const HE=()=>{const a=z.useRef(null),t=z.useRef(null),n=z.useRef(null),i=z.useRef(null),s=z.useRef(null),c=z.useRef(null),u=z.useRef(null),f=z.useRef(null),p=z.useRef(null),[m,g]=z.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));z.useEffect(()=>{const v=document.documentElement,b=()=>{const w=v.getAttribute("data-theme")==="light"||v.classList.contains("light");g(w)};b();const k=new MutationObserver(b);return k.observe(v,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>k.disconnect()},[]),z.useEffect(()=>{const v=a.current;if(!v)return;const b=Z.context(()=>{const k=n.current.querySelectorAll(".goal-word"),w=f.current.querySelectorAll(".goal-feature");Z.set(k,{y:80,opacity:0,rotateX:-70}),Z.set([t.current,i.current,c.current,u.current,f.current],{opacity:0}),Z.set(t.current,{x:-30}),Z.set(i.current,{y:30}),Z.set(c.current,{x:100,scale:.82,rotate:5}),Z.set(u.current,{scale:.6,rotate:-10}),Z.set(w,{y:25,opacity:0}),Z.timeline({scrollTrigger:{trigger:v,start:"top 72%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,x:0,duration:.6,ease:"power3.out"}).to(k,{y:0,opacity:1,rotateX:0,duration:.85,stagger:.07,ease:"power4.out"},"-=0.2").to(i.current,{y:0,opacity:1,duration:.75,ease:"power3.out"},"-=0.35").to(c.current,{x:0,opacity:1,scale:1,rotate:0,duration:1.3,ease:"expo.out"},"-=0.9").to(u.current,{opacity:1,scale:1,rotate:0,duration:.8,ease:"back.out(1.7)"},"-=0.65").to(f.current,{opacity:1,duration:.2},"-=0.3").to(w,{y:0,opacity:1,duration:.55,stagger:.12,ease:"power3.out"},"-=0.1"),Z.to(c.current,{y:-12,duration:3.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Z.to(p.current,{rotation:360,duration:24,repeat:-1,ease:"none"}),Z.to(u.current,{y:-10,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Z.to(c.current,{y:-90,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.5}});const C=A=>{const S=v.getBoundingClientRect(),j=((A.clientX-S.left)/S.width-.5)*2,P=((A.clientY-S.top)/S.height-.5)*2;Z.to(c.current,{x:j*12,y:P*8,duration:1,ease:"power3.out"}),Z.to(u.current,{x:j*-8,y:P*-5,duration:1.2,ease:"power3.out"})};return v.addEventListener("mousemove",C),()=>{v.removeEventListener("mousemove",C)}},v);return()=>b.revert()},[]);const y=["Our","Goal"];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

        /* =====================================================
           MAIN
        ===================================================== */

        .fairdeal-goal {
          --goal-bg: #05090B;
          --goal-panel: #0C1419;
          --goal-panel-2: #111B21;

          --goal-yellow: #FFDF00;
          --goal-mint: #8FE7C8;

          --goal-white: #F5F7F8;
          --goal-gray: #98A1B1;
          --goal-muted: #66717E;

          --goal-border: rgba(255,255,255,0.08);

          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: var(--goal-bg);
          color: var(--goal-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;

          transition:
            background 0.5s ease,
            color 0.5s ease;
        }

        /* =====================================================
           LIGHT THEME
        ===================================================== */

        .fairdeal-goal.light-mode {
          --goal-bg: #F5F7F8;
          --goal-panel: #FFFFFF;
          --goal-panel-2: #EEF2F1;

          --goal-yellow: #C9AE00;
          --goal-mint: #128C68;

          --goal-white: #101518;
          --goal-gray: #56616D;
          --goal-muted: #7B858F;

          --goal-border: rgba(5,9,11,0.09);
        }

        /* =====================================================
           BIG BACKGROUND NUMBER — 04
        ===================================================== */

        .goal-big-number {
          position: absolute;
          top: 50%;
          left: 10px;

          transform: translateY(-50%);

          z-index: 0;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;

          font-size: clamp(280px, 42vw, 620px);
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.09em;

          color: var(--goal-mint);
          opacity: 0.065;
        }

        /* =====================================================
           BACKGROUND GLOW
        ===================================================== */

        .goal-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          right: 8%;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(255,223,0,0.07),
            rgba(143,231,200,0.025),
            transparent 70%
          );

          filter: blur(30px);
          pointer-events: none;
        }

        .goal-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            );

          background-size: 90px 90px;
          opacity: 0.35;
          pointer-events: none;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .goal-container {
          position: relative;
          z-index: 2;

          width: min(1240px, calc(100% - 100px));
          min-height: 100vh;
          margin: auto;

          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center;
          gap: 30px;
          padding: 90px 0;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .goal-content {
          max-width: 650px;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .goal-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;

          color: var(--goal-mint);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .goal-label-line {
          width: 42px;
          height: 2px;
          background: var(--goal-yellow);
        }

        .goal-number {
          color: var(--goal-yellow);
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .goal-title {
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.18em;

          font-size: clamp(2.25rem, 4.7vw, 4.4rem);
          line-height: 0.86;
          letter-spacing: -0.065em;
          font-weight: 650;
          perspective: 1000px;
        }

        .goal-word {
          display: inline-block;
          transform-origin: center bottom;
          will-change: transform, opacity;
        }

        .goal-word:nth-child(1) {
          color: var(--goal-white);
        }

        .goal-word:nth-child(2) {
          color: var(--goal-mint);
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .goal-description {
          max-width: 620px;
          margin-top: 40px;

          color: var(--goal-gray);
          font-size: 18px;
          line-height: 1.75;
          letter-spacing: -0.015em;
        }

        .goal-description strong {
          color: var(--goal-white);
        }

        /* =====================================================
           UNDERLINE
        ===================================================== */

        .goal-line {
          display: flex;
          align-items: center;
          width: 290px;
          height: 3px;
          margin-top: 42px;
          background: rgba(255,255,255,0.08);
        }

        .goal-line-yellow {
          width: 55px;
          height: 100%;
          background: var(--goal-yellow);
        }

        .goal-line-mint {
          width: 70px;
          height: 100%;
          background: var(--goal-mint);
        }

        /* =====================================================
           FEATURES
        ===================================================== */

        .goal-features {
          display: flex;
          align-items: center;
          margin-top: 45px;
        }

        .goal-feature {
          min-width: 125px;
          padding: 0 25px;
          text-align: center;
        }

        .goal-feature:first-child {
          padding-left: 0;
        }

        .goal-feature:not(:last-child) {
          border-right: 1px solid var(--goal-border);
        }

        .goal-feature-icon {
          width: 50px;
          height: 50px;
          margin: 0 auto 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--goal-border);
          border-radius: 50%;

          color: var(--goal-yellow);
          font-size: 19px;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .goal-feature:nth-child(2) .goal-feature-icon {
          color: var(--goal-mint);
        }

        .goal-feature:hover .goal-feature-icon {
          transform: translateY(-5px) rotate(8deg);
          border-color: var(--goal-yellow);
        }

        .goal-feature-title {
          color: var(--goal-white);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* =====================================================
           RIGHT VISUAL
        ===================================================== */

        .goal-visual {
          position: relative;
          min-height: 620px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =====================================================
           IMAGE COMPOSITION
        ===================================================== */

        .goal-image-wrap {
          position: relative;
          width: min(560px, 100%);
          height: 440px;
          transform: rotate(-3deg);
          will-change: transform;
        }

        .goal-image-back {
          position: absolute;
          width: 82%;
          height: 100%;
          right: 0;
          top: 25px;

          border-radius: 28px;
          background: var(--goal-yellow);
          transform: rotate(2deg);

          box-shadow: 0 30px 80px rgba(255,223,0,0.12);
        }

        .goal-image {
          position: relative;
          z-index: 2;

          width: 86%;
          height: 100%;
          margin-left: 4%;
          overflow: hidden;

          border-radius: 28px;
          border: 1px solid rgba(255,223,0,0.55);
          background: var(--goal-panel);

          box-shadow: 0 35px 90px rgba(0,0,0,0.4);
        }

        .goal-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;

          transform: scale(1.06);
          filter: saturate(0.9) contrast(1.05);
          transition: transform 0.8s ease;
        }

        .goal-image-wrap:hover .goal-image img {
          transform: scale(1.12);
        }

        .goal-image-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;

          background: linear-gradient(
            135deg,
            rgba(5,9,11,0.05),
            rgba(5,9,11,0.25)
          );

          pointer-events: none;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .goal-badge {
          position: absolute;
          z-index: 5;
          right: -10px;
          bottom: -35px;

          width: 220px;
          min-height: 175px;
          padding: 25px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          border: 1px solid var(--goal-border);
          border-radius: 22px;
          background: rgba(12,20,25,0.92);
          backdrop-filter: blur(18px);

          box-shadow: 0 30px 70px rgba(0,0,0,0.4);
        }

        .light-mode .goal-badge {
          background: rgba(255,255,255,0.94);
        }

        .goal-target {
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          color: var(--goal-yellow);
          border: 1px solid var(--goal-yellow);
          font-size: 23px;
          margin-bottom: 15px;
        }

        .goal-badge-small {
          color: var(--goal-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .goal-badge-title {
          margin-top: 5px;
          color: var(--goal-white);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.14em;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .goal-badge-title span {
          color: var(--goal-mint);
        }

        /* =====================================================
           ORBIT
        ===================================================== */

        .goal-orbit {
          position: absolute;
          width: 580px;
          height: 580px;

          border: 1px solid rgba(143,231,200,0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .goal-orbit::before {
          content: "";
          position: absolute;
          inset: 35px;

          border: 1px dashed rgba(255,223,0,0.10);
          border-radius: 50%;
        }

        .goal-orbit::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          top: 13%;
          right: 19%;

          border-radius: 50%;
          background: var(--goal-yellow);
          box-shadow: 0 0 20px var(--goal-yellow);
        }

        /* =====================================================
           BRAND LABEL
        ===================================================== */

        .goal-brand {
          position: absolute;
          right: 30px;
          bottom: 20px;

          display: flex;
          align-items: center;
          gap: 14px;

          color: var(--goal-mint);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .goal-brand::before {
          content: "";
          width: 60px;
          height: 2px;
          background: var(--goal-yellow);
        }

        /* =====================================================
           LIGHT MODE IMAGE
        ===================================================== */

        .fairdeal-goal.light-mode .goal-image-back {
          opacity: 0.8;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {
          .goal-container {
            width: min(calc(100% - 60px), 850px);
            grid-template-columns: 1fr;
            text-align: center;
          }

          .goal-content {
            margin: auto;
          }

          .goal-label {
            justify-content: center;
          }

          .goal-description {
            margin-left: auto;
            margin-right: auto;
          }

          .goal-line {
            margin-left: auto;
            margin-right: auto;
          }

          .goal-features {
            justify-content: center;
          }

          .goal-visual {
            min-height: 550px;
          }

          .goal-orbit {
            width: 500px;
            height: 500px;
          }

          .goal-big-number {
            top: 48%;
            right: -15px;
            font-size: clamp(250px, 48vw, 480px);
            opacity: 0.06;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .goal-container {
            width: calc(100% - 36px);
            padding: 75px 0;
          }

          .goal-label {
            font-size: 9px;
          }

          .goal-title {
            font-size: 60px;
            justify-content: center;
          }

          .goal-description {
            font-size: 14px;
            line-height: 1.75;
            margin-top: 28px;
          }

          .goal-features {
            flex-wrap: wrap;
            gap: 10px;
          }

          .goal-feature {
            min-width: 95px;
            padding: 0 14px;
          }

          .goal-feature-title {
            font-size: 8px;
          }

          .goal-visual {
            min-height: 430px;
          }

          .goal-image-wrap {
            width: 100%;
            height: 300px;
          }

          .goal-image-back {
            border-radius: 20px;
          }

          .goal-image {
            border-radius: 20px;
          }

          .goal-badge {
            right: -5px;
            bottom: -40px;
            width: 170px;
            min-height: 140px;
            padding: 18px;
          }

          .goal-target {
            width: 38px;
            height: 38px;
            font-size: 18px;
          }

          .goal-badge-title {
            font-size: 10px;
          }

          .goal-orbit {
            width: 350px;
            height: 350px;
          }

          .goal-brand {
            right: 0;
            bottom: 0;
            font-size: 7px;
          }

          .goal-brand::before {
            width: 35px;
          }

          .goal-big-number {
            top: 170px;
            right: -10px;
            transform: none;
            font-size: clamp(190px, 48vw, 270px);
            opacity: 0.055;
          }
        }

      `}),o.jsxs("section",{ref:a,className:`fairdeal-goal ${m?"light-mode":""}`,children:[o.jsx("div",{className:"goal-big-number","aria-hidden":"true",children:"04"}),o.jsx("div",{className:"goal-bg-glow"}),o.jsx("div",{className:"goal-grid"}),o.jsxs("div",{className:"goal-container",children:[o.jsxs("div",{className:"goal-content",children:[o.jsxs("div",{ref:t,className:"goal-label",children:[o.jsx("span",{className:"goal-label-line"}),o.jsx("span",{className:"goal-number",children:"04"}),o.jsx("span",{children:"—"}),o.jsx("span",{children:"THE GOAL"})]}),o.jsx("h2",{ref:n,className:"goal-title",children:y.map((v,b)=>o.jsx("span",{className:"goal-word",children:v},b))}),o.jsxs("p",{ref:i,className:"goal-description",children:["Delighted customers are key to our success, and we strive to achieve this key every second.",o.jsx("br",{}),o.jsx("br",{}),"Printing is our passion. No matter what your print need is,"," ",o.jsx("strong",{children:"Fairdeal Print Pack India Pvt. Ltd."})," has the most effective print solutions."]}),o.jsxs("div",{className:"goal-line",children:[o.jsx("span",{className:"goal-line-yellow"}),o.jsx("span",{className:"goal-line-mint"})]}),o.jsxs("div",{ref:f,className:"goal-features",children:[o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"✦"}),o.jsx("div",{className:"goal-feature-title",children:"Customer"})]}),o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"◇"}),o.jsx("div",{className:"goal-feature-title",children:"Quality"})]}),o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"◎"}),o.jsx("div",{className:"goal-feature-title",children:"Solutions"})]})]})]}),o.jsxs("div",{className:"goal-visual",children:[o.jsx("div",{ref:p,className:"goal-orbit"}),o.jsxs("div",{ref:c,className:"goal-image-wrap",children:[o.jsx("div",{className:"goal-image-back"}),o.jsxs("div",{className:"goal-image",children:[o.jsx("img",{ref:s,src:WE,alt:"Printing production"}),o.jsx("div",{className:"goal-image-overlay"})]}),o.jsxs("div",{ref:u,className:"goal-badge",children:[o.jsx("div",{className:"goal-target",children:"◎"}),o.jsx("div",{className:"goal-badge-small",children:"Our Goal"}),o.jsxs("div",{className:"goal-badge-title",children:["Experience ",o.jsx("br",{}),o.jsx("span",{children:"Quality"}),o.jsx("br",{}),"Commitment"]})]})]}),o.jsx("div",{className:"goal-brand",children:"FAIRDEAL PRINT PACK"})]})]})]})]})};Z.registerPlugin(Ce);const VE=()=>{const a=z.useRef(null),t=z.useRef(null),n=z.useRef(null),i=z.useRef(null);return z.useEffect(()=>{const s=a.current,c=t.current;if(!s||!c)return;const u=Z.context(()=>{Z.utils.toArray(".fd-reveal").forEach(m=>{Z.fromTo(m,{opacity:0,y:35},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),Z.utils.toArray(".fd-reveal-left").forEach(m=>{Z.fromTo(m,{opacity:0,x:-45},{opacity:1,x:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),Z.utils.toArray(".fd-reveal-right").forEach(m=>{Z.fromTo(m,{opacity:0,x:45},{opacity:1,x:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),Z.fromTo(".fd-intro-line",{scaleX:0},{scaleX:1,duration:1.1,ease:"power3.inOut",scrollTrigger:{trigger:".fd-intro-section",start:"top 75%"}});const f=c.scrollWidth-window.innerWidth,p=Z.to(c,{id:"fd-horizontal",x:-f,ease:"none",scrollTrigger:{trigger:".fd-story-wrapper",start:"top top",end:()=>`+=${f+window.innerHeight*1.8}`,pin:!0,scrub:1.2,anticipatePin:1,onUpdate:m=>{const g=m.progress;i.current&&Z.to(i.current,{scaleX:g,duration:.15,overwrite:!0});const y=Math.round(1990+g*36);n.current&&(n.current.textContent=y)}}});Z.utils.toArray(".fd-story-card").forEach(m=>{Z.fromTo(m,{opacity:.25,scale:.96},{opacity:1,scale:1,duration:.8,ease:"power2.out",scrollTrigger:{trigger:m,containerAnimation:p,start:"left 85%",end:"left 45%",scrub:!0}})}),Z.utils.toArray(".fd-counter").forEach(m=>{const g=Number(m.dataset.value),y={value:0};Z.to(y,{value:g,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:m,start:"top 85%",once:!0},onUpdate:()=>{m.textContent=Math.floor(y.value).toLocaleString("en-IN")+"+"}})}),Z.fromTo(".fd-quote-card",{opacity:0,y:45},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".fd-quote-section",start:"top 82%"}}),Z.fromTo(".fd-quote-accent",{scaleX:0},{scaleX:1,duration:1,ease:"power3.inOut",scrollTrigger:{trigger:".fd-quote-section",start:"top 82%"}}),Z.fromTo(".fd-vision-box",{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".fd-vision-section",start:"top 82%"}}),Z.fromTo(".fd-founder-image-frame",{clipPath:"inset(12% 12% 12% 12%)",opacity:0},{clipPath:"inset(0% 0% 0% 0%)",opacity:1,duration:1.2,ease:"power3.inOut",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 82%",once:!0}}),Z.fromTo(".fd-founder-image",{scale:1.18},{scale:1,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 80%",end:"bottom 30%",scrub:1}}),Z.fromTo(".fd-founder-image-accent",{scaleX:0},{scaleX:1,duration:1,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 75%",once:!0}}),Z.fromTo(".fd-founder-signature",{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-signature",start:"top 90%",once:!0}}),Z.to(".fd-floating-circle",{y:-100,rotate:20,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:1}}),Ce.refresh()},s);return()=>u.revert()},[]),o.jsxs("section",{ref:a,className:"fd-from-desk",children:[o.jsx("div",{className:"fd-floating-circle fd-circle-one"}),o.jsx("div",{className:"fd-floating-circle fd-circle-two"}),o.jsxs("section",{className:"fd-intro-section",children:[o.jsxs("div",{className:"fd-intro-header",children:[o.jsxs("div",{className:"fd-intro-label fd-reveal-left",children:[o.jsx("span",{className:"fd-dot"}),"FROM MY DESK"]}),o.jsx("div",{className:"fd-intro-line"}),o.jsx("span",{className:"fd-intro-year fd-reveal-right",children:"EST. 1990"})]}),o.jsxs("div",{className:"fd-intro-grid",children:[o.jsx("div",{className:"fd-intro-title fd-reveal-left",children:o.jsxs("h2",{children:["From a humble",o.jsx("span",{children:" beginning."})]})}),o.jsxs("div",{className:"fd-intro-copy fd-reveal-right",children:[o.jsx("p",{children:"I first learned the art of printing while working with a photographer and established Fairdeal Advertising with manual screen printing in 1990."}),o.jsx("p",{children:"What began as a small venture has grown into a trusted printing and packaging organisation in Pune, powered by perseverance, design thinking and teamwork."})]})]}),o.jsxs("div",{className:"fd-intro-bottom",children:[o.jsxs("div",{className:"fd-small-stat fd-reveal",children:[o.jsx("strong",{children:o.jsx("span",{className:"fd-counter","data-value":"30",children:"0+"})}),o.jsx("span",{children:"YEARS OF EXPERIENCE"})]}),o.jsxs("div",{className:"fd-small-stat fd-reveal",children:[o.jsx("strong",{children:o.jsx("span",{className:"fd-counter","data-value":"1000",children:"0+"})}),o.jsx("span",{children:"CLIENTS ACROSS INDIA"})]}),o.jsxs("div",{className:"fd-small-description fd-reveal",children:[o.jsx("span",{children:"THE FOUNDATION"}),o.jsx("p",{children:"Quality. Honesty. Teamwork."})]})]})]}),o.jsxs("div",{className:"fd-story-wrapper",children:[o.jsxs("div",{className:"fd-story-topbar",children:[o.jsx("span",{children:"THE JOURNEY"}),o.jsx("div",{className:"fd-year-counter",children:o.jsx("span",{ref:n,children:"1990"})})]}),o.jsx("div",{className:"fd-progress",children:o.jsx("div",{ref:i,className:"fd-progress-fill"})}),o.jsxs("div",{ref:t,className:"fd-story-track",children:[o.jsxs("article",{className:"fd-story-card fd-story-start",children:[o.jsx("div",{className:"fd-card-number",children:"01"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"1990"}),o.jsxs("h3",{children:["A small beginning.",o.jsx("br",{}),"A bigger dream."]}),o.jsx("p",{children:"I first learned the art of printing while working with a photographer. That experience became the foundation for Fairdeal Advertising and its manual screen printing journey."})]}),o.jsxs("div",{className:"fd-card-marker",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"02"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE EARLY YEARS"}),o.jsxs("h3",{children:["Ten years",o.jsx("br",{}),"of learning."]}),o.jsx("p",{children:"The first decade was filled with difficulties, uncertainty and lessons. Every challenge taught us to become better, stronger and more disciplined."}),o.jsxs("div",{className:"fd-mini-highlight",children:[o.jsx("strong",{children:"10"}),o.jsx("span",{children:"years of persistence"})]})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-stat-card",children:[o.jsx("div",{className:"fd-card-number",children:"03"}),o.jsxs("div",{className:"fd-big-stat",children:[o.jsx("span",{className:"fd-stat-prefix",children:"OVER"}),o.jsx("strong",{className:"fd-stat-number",children:"30+"}),o.jsxs("span",{className:"fd-stat-label",children:["YEARS OF",o.jsx("br",{}),"EXPERIENCE"]})]}),o.jsx("p",{children:"Almost three decades of building, improving and moving forward with the same commitment to quality."})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"04"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"TODAY"}),o.jsxs("h3",{children:["1000+",o.jsx("br",{}),"happy clients."]}),o.jsx("p",{children:"What started as a humble printing operation has grown into a trusted organisation serving clients across the country."}),o.jsxs("div",{className:"fd-client-stat",children:[o.jsx("strong",{children:"1000+"}),o.jsxs("span",{children:["CLIENTS",o.jsx("br",{}),"ACROSS INDIA"]})]})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-values",children:[o.jsx("div",{className:"fd-card-number",children:"05"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"OUR FOUNDATION"}),o.jsxs("h3",{children:["Quality.",o.jsx("br",{}),"Honesty.",o.jsx("br",{}),"Teamwork."]}),o.jsx("p",{children:"These are not just words at Fairdeal. They are the principles that helped us overcome difficult times and continue to shape every decision we make."})]}),o.jsxs("div",{className:"fd-values-orbit",children:[o.jsx("span",{children:"QUALITY"}),o.jsx("span",{children:"HONESTY"}),o.jsx("span",{children:"TEAMWORK"})]})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"06"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE PEOPLE"}),o.jsxs("h3",{children:["Building",o.jsx("br",{}),"the right team."]}),o.jsx("p",{children:"Team-building has always been a critical factor of growth. Choosing people who believe in quality and share the organisation's values has been one of our greatest priorities."})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-team",children:[o.jsx("div",{className:"fd-card-number",children:"07"}),o.jsxs("div",{className:"fd-team-visual",children:[o.jsx("div",{className:"fd-team-ring ring-one"}),o.jsx("div",{className:"fd-team-ring ring-two"}),o.jsx("div",{className:"fd-team-ring ring-three"}),o.jsxs("div",{className:"fd-team-center",children:[o.jsx("span",{children:"FAIRDEAL"}),o.jsx("strong",{children:"FAMILY"})]})]}),o.jsxs("div",{className:"fd-team-text",children:[o.jsx("span",{children:"THE REAL SUCCESS"}),o.jsx("h3",{children:"Fairdeal Family"}),o.jsx("p",{children:"Seeing team members who have been with us from the beginning settled and happy in their lives is one of my greatest achievements."})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-end",children:[o.jsx("div",{className:"fd-card-number",children:"08"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE NEXT CHAPTER"}),o.jsxs("h3",{children:["Still",o.jsx("br",{}),"moving forward."]}),o.jsx("p",{children:"With world-class printing technology and a strong team, our vision continues to grow — to become the leading and most preferred printing and packaging solution for our clients."})]})]})]})]}),o.jsxs("section",{className:"fd-message-section",children:[o.jsxs("div",{className:"fd-section-heading fd-reveal",children:[o.jsx("span",{children:"THE FOUNDER'S MESSAGE"}),o.jsx("div",{})]}),o.jsxs("div",{className:"fd-founder-layout",children:[o.jsx("div",{className:"fd-founder-image-wrap fd-reveal-left",children:o.jsxs("div",{className:"fd-founder-image-frame",children:[o.jsx("div",{className:"fd-founder-image-accent accent-top"}),o.jsx("div",{className:"fd-founder-image-accent accent-bottom"}),o.jsxs("div",{className:"fd-founder-image-inner",children:[o.jsx("img",{src:E1,alt:"Founder of Fairdeal Print Pack India Pvt. Ltd.",className:"fd-founder-image"}),o.jsx("div",{className:"fd-founder-image-overlay"})]}),o.jsxs("div",{className:"fd-founder-image-label",children:[o.jsx("span",{children:"FOUNDER & MD"}),o.jsx("span",{children:"RAJESH YEWALE"})]})]})}),o.jsxs("div",{className:"fd-founder-content fd-reveal-right",children:[o.jsxs("div",{className:"fd-message-intro",children:[o.jsx("span",{children:"01 / VALUES"}),o.jsxs("h3",{children:["The principles",o.jsx("br",{}),"that kept us",o.jsx("em",{children:" moving."})]})]}),o.jsxs("div",{className:"fd-message-text",children:[o.jsx("p",{children:"My father was in the army and I came from a Maharashtrian family where there was minimal scope of becoming a businessman back in those days."}),o.jsx("p",{children:"The Army atmosphere gave me lessons about patriotism, discipline, cleanliness, taking care of the environment and the importance of health and fitness."}),o.jsx("p",{children:"But professionally, there was still a lot to learn. The first ten years brought all kinds of difficulties. The approach that helped me overcome them was simple: focus on quality and honesty, even in the most challenging times."}),o.jsxs("div",{className:"fd-founder-signature",children:[o.jsx("div",{className:"fd-signature-line"}),o.jsxs("div",{children:[o.jsx("strong",{children:"FOUNDER & MD"}),o.jsx("span",{children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."})]})]})]})]})]})]}),o.jsx("section",{className:"fd-quote-section",children:o.jsxs("div",{className:"fd-quote-card",children:[o.jsxs("div",{className:"fd-quote-top",children:[o.jsx("span",{children:"MY BELIEF"}),o.jsx("span",{children:"02 / 04"})]}),o.jsx("div",{className:"fd-quote-accent"}),o.jsxs("blockquote",{children:["“You take care of the organisation,",o.jsx("br",{}),o.jsx("span",{children:"the organisation will take care of you."}),"”"]}),o.jsxs("div",{className:"fd-quote-footer",children:[o.jsx("span",{children:"— Founder & MD"}),o.jsx("span",{children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."})]})]})}),o.jsxs("section",{className:"fd-team-message",children:[o.jsxs("div",{className:"fd-section-heading fd-reveal",children:[o.jsx("span",{children:"PEOPLE FIRST"}),o.jsx("div",{})]}),o.jsxs("div",{className:"fd-team-message-grid",children:[o.jsx("div",{className:"fd-team-message-title fd-reveal-left",children:o.jsxs("h3",{children:["A company",o.jsx("br",{}),"is only as strong",o.jsx("br",{}),o.jsx("span",{children:"as its people."})]})}),o.jsxs("div",{className:"fd-team-message-copy fd-reveal-right",children:[o.jsx("p",{children:"From the beginning, I believed team-building was a critical factor of growth. I was focused and selective in choosing people who believed in a quality mindset and shared the organisation's core values."}),o.jsx("p",{children:"Today, I am grateful for the team members who have been with me from the beginning. Seeing them settled and happy in their lives is a real success for me."}),o.jsxs("div",{className:"fd-team-values",children:[o.jsx("span",{children:"PEOPLE"}),o.jsx("span",{children:"TRUST"}),o.jsx("span",{children:"GROWTH"})]})]})]})]}),o.jsx("section",{className:"fd-vision-section",children:o.jsxs("div",{className:"fd-vision-box",children:[o.jsxs("div",{className:"fd-vision-side",children:[o.jsx("span",{children:"03 / VISION"}),o.jsx("div",{className:"fd-vision-number",children:"2030"})]}),o.jsxs("div",{className:"fd-vision-main",children:[o.jsx("span",{className:"fd-vision-kicker",children:"LOOKING AHEAD"}),o.jsxs("h3",{children:["To become the"," ",o.jsxs("span",{children:["preferred printing"," "]}),"& packaging partner."]}),o.jsx("p",{children:"We will continue to focus on quality, cost-effectiveness and commitment without compromise. A positive working atmosphere, timely deliverables and a quality mindset will remain at the heart of Fairdeal."}),o.jsxs("div",{className:"fd-vision-points",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"01"}),o.jsx("span",{children:"QUALITY"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"02"}),o.jsx("span",{children:"COST-EFFECTIVENESS"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"03"}),o.jsx("span",{children:"COMMITMENT"})]})]})]})]})}),o.jsx("section",{className:"fd-closing",children:o.jsxs("div",{className:"fd-closing-inner",children:[o.jsxs("div",{className:"fd-closing-top",children:[o.jsx("span",{children:"1990 — NOW"}),o.jsx("span",{children:"AND BEYOND"})]}),o.jsxs("h2",{children:["The journey",o.jsx("span",{children:"continues."})]}),o.jsxs("div",{className:"fd-closing-bottom",children:[o.jsx("p",{children:"We promise to keep upgrading every day and remain a catalyst for wealth creation through premium printing and packaging solutions."}),o.jsxs("div",{children:[o.jsx("strong",{children:"FAIRDEAL"}),o.jsx("span",{children:"PRINT PACK INDIA PVT. LTD."})]})]})]})}),o.jsx("style",{children:`

        /* =====================================================
           ROOT
        ===================================================== */

        .fd-from-desk {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          position: relative;

          overflow: hidden;

          background:
            var(--fd-bg);

          color:
            var(--fd-white);

          font-family:
             "Lato", system-ui, sans-serif;
        }


        .fd-from-desk *,
        .fd-from-desk *::before,
        .fd-from-desk *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .fd-floating-circle {
          position: absolute;

          width: 400px;
          height: 400px;

          border-radius: 50%;

          pointer-events: none;

          opacity: 0.08;

          z-index: 0;
        }


        .fd-circle-one {
          top: 5%;
          right: -200px;

          border:
            1px solid
            var(--fd-yellow);
        }


        .fd-circle-two {
          top: 55%;
          left: -250px;

          border:
            1px solid
            var(--fd-mint);
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .fd-intro-section {
          position: relative;

          z-index: 2;

          padding:
            10px
            7vw
            75px;
        }


        .fd-intro-header {
          display: flex;

          align-items: center;

          gap: 22px;

          margin-bottom: 45px;
        }


        .fd-intro-label {
          display: flex;

          align-items: center;

          gap: 9px;

          flex-shrink: 0;

          color:
            var(--fd-yellow);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.22em;
        }


        .fd-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--fd-yellow);
        }


        .fd-intro-line {
          height: 1px;

          flex: 1;

          background:
            rgba(245,247,248,0.15);

          transform-origin:
            left;
        }


        .fd-intro-year {
          color:
            var(--fd-gray);

          font-size: 10px;

          letter-spacing: 0.18em;
        }


        .fd-intro-grid {
          display: grid;

          grid-template-columns:
            minmax(300px, 1.1fr)
            minmax(300px, 0.9fr);

          gap: 8vw;

          align-items: end;
        }


        .fd-intro-title h2 {
          margin: 0;

          max-width: 750px;

          font-size:
            clamp(2.25rem, 4.7vw, 4.4rem);

          line-height: 0.95;

          font-weight: 500;

          letter-spacing: -0.055em;
        }


        .fd-intro-title h2 span {
          color:
            var(--fd-yellow);
        }


        .fd-intro-copy {
          max-width: 520px;
        }


        .fd-intro-copy p {
          margin:
            0 0 18px;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.8;
        }


        .fd-intro-bottom {
          display: grid;

          grid-template-columns:
            1fr
            1fr
            1.6fr;

          gap: 20px;

          margin-top: 65px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(245,247,248,0.1);
        }


        .fd-small-stat {
          display: flex;

          align-items: baseline;

          gap: 14px;
        }


        .fd-small-stat strong {
          color:
            var(--fd-yellow);

          font-size: 38px;

          font-weight: 400;

          letter-spacing: -0.05em;
        }


        .fd-small-stat > span {
          color:
            var(--fd-gray);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.16em;
        }


        .fd-small-description {
          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 20px;
        }


        .fd-small-description > span {
          color:
            var(--fd-mint);

          font-size: 8px;

          letter-spacing: 0.18em;
        }


        .fd-small-description p {
          margin: 0;

          color:
            var(--fd-white);

          font-size: 13px;
        }


        /* =====================================================
           JOURNEY
        ===================================================== */

        .fd-story-wrapper {
          position: relative;

          height: 100vh;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 30% 50%,
              rgba(143,231,200,0.04),
              transparent 30%
            ),
            var(--fd-bg);
        }


        .fd-story-topbar {
          position: absolute;

          top: 35px;
          left: 7vw;
          right: 7vw;

          z-index: 10;

          display: flex;

          align-items: center;

          justify-content: space-between;

          font-size: 10px;

          letter-spacing: 0.25em;

          color:
            var(--fd-gray);
        }


        .fd-year-counter {
          color:
            var(--fd-yellow);

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 0.15em;
        }


        .fd-progress {
          position: absolute;

          top: 60px;

          left: 7vw;
          right: 7vw;

          height: 1px;

          background:
            rgba(245,247,248,0.12);

          z-index: 10;
        }


        .fd-progress-fill {
          width: 100%;
          height: 100%;

          background:
            var(--fd-yellow);

          transform:
            scaleX(0);

          transform-origin:
            left center;
        }


        .fd-story-track {
          height: 100%;

          display: flex;

          align-items: center;

          width: max-content;

          padding:
            0 7vw;

          gap: 8vw;

          will-change:
            transform;
        }


        .fd-story-card {
          position: relative;

          flex: 0 0 auto;

          width:
            min(72vw,900px);

          min-height: 58vh;

          padding: 65px;

          display: flex;

          flex-direction: column;

          justify-content: center;

          background:
            linear-gradient(
              135deg,
              rgba(17,27,33,0.98),
              rgba(12,20,25,0.92)
            );

          border:
            1px solid
            rgba(245,247,248,0.09);

          border-radius: 5px;

          overflow: hidden;

          box-shadow:
            0 30px 100px
            rgba(0,0,0,0.35);
        }


        .fd-story-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 3px;
          height: 100%;

          background:
            var(--fd-yellow);
        }


        .fd-card-number {
          position: absolute;

          top: 28px;
          right: 35px;

          color:
            rgba(245,247,248,0.18);

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.15em;
        }


        .fd-card-content {
          max-width: 650px;
        }


        .fd-card-year {
          display: block;

          margin-bottom: 22px;

          color:
            var(--fd-mint);

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.25em;
        }


        .fd-card-content h3 {
          margin:
            0 0 28px;

          font-size:
            clamp(44px,5vw,78px);

          line-height: 0.95;

          letter-spacing: -0.045em;

          font-weight: 500;
        }


        .fd-card-content p {
          max-width: 580px;

          margin: 0;

          color:
            var(--fd-gray);

          font-size: 16px;

          line-height: 1.8;
        }


        .fd-story-start {
          width:
            min(82vw,1050px);

          background:
            linear-gradient(
              135deg,
              rgba(255,223,0,0.08),
              rgba(17,27,33,0.98) 45%
            );
        }


        .fd-card-marker {
          position: absolute;

          bottom: 45px;
          right: 55px;

          display: flex;

          gap: 6px;
        }


        .fd-card-marker span {
          width: 4px;
          height: 4px;

          background:
            var(--fd-yellow);

          border-radius: 50%;
        }


        .fd-mini-highlight {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-top: 40px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(245,247,248,0.1);
        }


        .fd-mini-highlight strong {
          color:
            var(--fd-yellow);

          font-size: 42px;

          font-weight: 400;
        }


        .fd-mini-highlight span {
          color:
            var(--fd-gray);

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 0.18em;
        }


        .fd-story-stat-card {
          width:
            min(60vw,720px);

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);

          justify-content:
            center;
        }


        .fd-story-stat-card::before {
          background:
            var(--fd-bg);
        }


        .fd-big-stat {
          display: grid;

          grid-template-columns:
            auto 1fr;

          align-items: end;

          column-gap: 20px;
        }


        .fd-stat-prefix {
          grid-column:
            1 / -1;

          margin-bottom: -5px;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.25em;
        }


        .fd-big-stat .fd-stat-number {
          font-size:
            clamp(120px,16vw,230px);

          line-height: 0.75;

          font-weight: 500;

          letter-spacing: -0.09em;
        }


        .fd-stat-label {
          padding-bottom: 8px;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 0.15em;
        }


        .fd-story-stat-card > p {
          max-width: 420px;

          margin:
            50px 0 0;

          font-size: 15px;

          line-height: 1.7;
        }


        .fd-client-stat {
          margin-top: 40px;

          display: flex;

          align-items: center;

          gap: 20px;
        }


        .fd-client-stat strong {
          color:
            var(--fd-yellow);

          font-size: 60px;

          font-weight: 400;

          letter-spacing: -0.05em;
        }


        .fd-client-stat span {
          max-width: 100px;

          color:
            var(--fd-gray);

          font-size: 9px;

          font-weight: 700;

          line-height: 1.5;

          letter-spacing: 0.15em;
        }


        .fd-story-values {
          width:
            min(75vw,950px);

          background:
            radial-gradient(
              circle at 75% 45%,
              rgba(143,231,200,0.12),
              transparent 30%
            ),
            var(--fd-panel);
        }


        .fd-values-orbit {
          position: absolute;

          right: 70px;
          bottom: 70px;

          width: 180px;
          height: 180px;

          border:
            1px solid
            rgba(143,231,200,0.3);

          border-radius: 50%;
        }


        .fd-values-orbit::before,
        .fd-values-orbit::after {
          content: "";

          position: absolute;

          inset: 20px;

          border:
            1px solid
            rgba(143,231,200,0.15);

          border-radius: 50%;
        }


        .fd-values-orbit::after {
          inset: 45px;

          border-color:
            rgba(255,223,0,0.25);
        }


        .fd-values-orbit span {
          position: absolute;

          color:
            var(--fd-mint);

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 0.12em;
        }


        .fd-values-orbit span:nth-child(1) {
          top: 12px;
          left: 50%;

          transform:
            translateX(-50%);
        }


        .fd-values-orbit span:nth-child(2) {
          right: -12px;
          top: 50%;

          transform:
            translateY(-50%);
        }


        .fd-values-orbit span:nth-child(3) {
          left: -8px;
          top: 50%;

          transform:
            translateY(-50%);
        }


        .fd-story-team {
          width:
            min(78vw,980px);

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 70px;

          align-items: center;
        }


        .fd-team-visual {
          position: relative;

          width: 350px;
          height: 350px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .fd-team-ring {
          position: absolute;

          border:
            1px solid
            rgba(143,231,200,0.25);

          border-radius: 50%;
        }


        .ring-one {
          width: 330px;
          height: 330px;
        }


        .ring-two {
          width: 240px;
          height: 240px;

          border-color:
            rgba(255,223,0,0.3);
        }


        .ring-three {
          width: 150px;
          height: 150px;

          border-color:
            rgba(143,231,200,0.4);
        }


        .fd-team-center {
          position: relative;

          z-index: 2;

          width: 95px;
          height: 95px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);

          border-radius: 50%;

          text-align: center;
        }


        .fd-team-center span {
          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.1em;
        }


        .fd-team-center strong {
          margin-top: 3px;

          font-size: 12px;
        }


        .fd-team-text span {
          color:
            var(--fd-mint);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.2em;
        }


        .fd-team-text p {
          margin:
            25px 0 0;

          color:
            var(--fd-gray);

          font-size: 16px;

          line-height: 1.8;
        }

        .fd-team-text h3 {

          margin:
            0 0 28px;

          font-size:
            clamp(44px,5vw,78px);

          line-height: 0.95;

          letter-spacing: -0.045em;

          font-weight: 500;
        }


        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .fd-section-heading {
          display: flex;

          align-items: center;

          gap: 20px;

          margin-bottom: 50px;
        }


        .fd-section-heading span {
          color:
            var(--fd-yellow);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.2em;

          white-space: nowrap;
        }


        .fd-section-heading div {
          height: 1px;

          flex: 1;

          background:
            rgba(245,247,248,0.12);
        }


        /* =====================================================
           FOUNDER MESSAGE
        ===================================================== */

        .fd-message-section {
          position: relative;

          padding:
            100px
            7vw
            90px;

          background:
            var(--fd-bg);
        }


        .fd-founder-layout {
          display: grid;

          grid-template-columns:
            minmax(360px, 0.85fr)
            minmax(450px, 1.15fr);

          gap: 8vw;

          max-width: 1250px;

          align-items: center;
        }


        /* =====================================================
           FOUNDER IMAGE
        ===================================================== */

        .fd-founder-image-wrap {
          position: relative;

          width: 100%;

          max-width: 500px;

          transition:
            transform 0.5s ease;
        }


        .fd-founder-image-wrap:hover {
          transform:
            translateY(-6px);
        }


        .fd-founder-image-frame {
          position: relative;

          width: 100%;

          aspect-ratio: 4 / 5;

          padding: 14px;

          background:
            linear-gradient(
              135deg,
              rgba(255,223,0,0.16),
              rgba(143,231,200,0.06)
            );

          border:
            1px solid
            rgba(245,247,248,0.12);

          overflow: visible;
        }


        .fd-founder-image-inner {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background:
            var(--fd-panel);
        }


        .fd-founder-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          filter:
            grayscale(12%)
            contrast(1.05);

          will-change:
            transform;

          transition:
            filter 0.6s ease;
        }


        .fd-founder-image-wrap:hover
        .fd-founder-image {
          filter:
            grayscale(0%)
            contrast(1.05);
        }


        .fd-founder-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(5,9,11,0.35) 100%
            );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE ACCENTS
        ===================================================== */

        .fd-founder-image-accent {
          position: absolute;

          z-index: 5;

          height: 2px;

          background:
            var(--fd-yellow);

          transform-origin:
            left center;
        }


        .fd-founder-image-accent.accent-top {
          top: -10px;

          left: 35px;

          width: 120px;
        }


        .fd-founder-image-accent.accent-bottom {
          bottom: -10px;

          right: 35px;

          width: 90px;

          background:
            var(--fd-mint);

          transform-origin:
            right center;
        }


        /* =====================================================
           FOUNDER LABEL
        ===================================================== */

        .fd-founder-image-label {
          left: -28px;
          bottom: 30px;

          z-index: 10;

          display: flex;

          flex-direction: column;

          gap: 5px;

          padding:
            12px 15px;

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);

          box-shadow:
            0 15px 35px
            rgba(0,0,0,0.3);
        }


        .fd-founder-image-label span:first-child {
          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }


        .fd-founder-image-label span:last-child {
          font-size: 11px;

          font-weight: 900;

          letter-spacing: 0.08em;
        }


        /* =====================================================
           FOUNDER CONTENT
        ===================================================== */

        .fd-founder-content {
          max-width: 680px;
        }


        .fd-founder-content .fd-message-intro {
          margin-bottom: 45px;
        }


        .fd-message-intro > span {
          color:
            var(--fd-mint);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }


        .fd-message-intro h3 {
          margin:
            22px 0 0;

          font-size:
            clamp(35px,4vw,58px);

          line-height: 0.98;

          letter-spacing: -0.05em;

          font-weight: 500;
        }


        .fd-message-intro h3 em {
          color:
            var(--fd-yellow);

          font-family:
            Georgia,
            serif;

          font-weight: 400;
        }


        .fd-message-text {
          max-width: 680px;
        }


        .fd-message-text p {
          margin:
            0 0 20px;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.85;
        }


        /* =====================================================
           FOUNDER SIGNATURE
        ===================================================== */

        .fd-founder-signature {
          display: flex;

          align-items: center;

          gap: 20px;

          margin-top: 45px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(245,247,248,0.1);
        }


        .fd-signature-line {
          width: 55px;

          height: 1px;

          background:
            var(--fd-yellow);
        }


        .fd-founder-signature strong {
          display: block;

          color:
            var(--fd-white);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }


        .fd-founder-signature span {
          display: block;

          margin-top: 6px;

          color:
            var(--fd-gray);

          font-size: 7px;

          letter-spacing: 0.14em;
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .fd-quote-section {
          padding:
            30px
            7vw
            90px;
        }


        .fd-quote-card {
          position: relative;

          max-width: 1250px;

          margin: 0 auto;

          padding:
            42px
            50px;

          background:
            var(--fd-panel);

          border:
            1px solid
            rgba(245,247,248,0.08);

          border-radius: 6px;

          overflow: hidden;
        }


        .fd-quote-top {
          display: flex;

          justify-content: space-between;

          color:
            var(--fd-gray);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.2em;
        }


        .fd-quote-accent {
          width: 90px;
          height: 2px;

          margin:
            32px 0 35px;

          background:
            var(--fd-yellow);

          transform-origin:
            left;
        }


        .fd-quote-card blockquote {
          max-width: 1050px;

          margin: 0;

          font-size:
            clamp(32px,4.5vw,65px);

          line-height: 1;

          letter-spacing: -0.05em;

          font-weight: 400;
        }


        .fd-quote-card blockquote span {
          color:
            var(--fd-yellow);
        }


        .fd-quote-footer {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-top: 45px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(245,247,248,0.08);

          color:
            var(--fd-gray);

          font-size: 9px;

          letter-spacing: 0.12em;
        }


        .fd-quote-footer span:first-child {
          color:
            var(--fd-white);
        }


        /* =====================================================
           TEAM MESSAGE
        ===================================================== */

        .fd-team-message {
          padding:
            30px
            7vw
            100px;
        }


        .fd-team-message-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 9vw;

          max-width: 1250px;
        }


        .fd-team-message-title h3 {
          margin: 0;

          font-size:
            clamp(40px,5vw,70px);

          line-height: 0.92;

          letter-spacing: -0.055em;

          font-weight: 500;
        }


        .fd-team-message-title h3 span {
          color:
            var(--fd-mint);
        }


        .fd-team-message-copy {
          max-width: 600px;
        }


        .fd-team-message-copy p {
          margin:
            0 0 20px;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.8;
        }


        .fd-team-values {
          display: flex;

          gap: 8px;

          margin-top: 35px;
        }


        .fd-team-values span {
          padding:
            9px 13px;

          border:
            1px solid
            rgba(143,231,200,0.2);

          color:
            var(--fd-mint);

          border-radius: 50px;

          font-size: 8px;

          letter-spacing: 0.15em;
        }


        /* =====================================================
           VISION
        ===================================================== */

        .fd-vision-section {
          padding:
            30px
            7vw
            100px;
        }


        .fd-vision-box {
          max-width: 1250px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            0.3fr
            1.7fr;

          background:
            var(--fd-panel-2);

          border:
            1px solid
            rgba(245,247,248,0.08);

          border-radius: 6px;

          overflow: hidden;
        }


        .fd-vision-side {
          padding: 38px;

          border-right:
            1px solid
            rgba(245,247,248,0.08);

          color:
            var(--fd-mint);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }


        .fd-vision-number {
          margin-top: 100px;

          color:
            rgba(255,223,0,0.2);

          font-size: 55px;

          letter-spacing: -0.06em;
        }


        .fd-vision-main {
          padding:
            55px 60px;
        }


        .fd-vision-kicker {
          color:
            var(--fd-yellow);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.2em;
        }


        .fd-vision-main h3 {
          max-width: 850px;

          margin:
            20px 0 25px;

          font-size:
            clamp(38px,5vw,70px);

          line-height: 0.95;

          letter-spacing: -0.055em;

          font-weight: 500;
        }


        .fd-vision-main h3 span {
          color:
            var(--fd-yellow);
        }


        .fd-vision-main > p {
          max-width: 650px;

          margin: 0;

          color:
            var(--fd-gray);

          font-size: 15px;

          line-height: 1.8;
        }


        .fd-vision-points {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;

          margin-top: 40px;
        }


        .fd-vision-points div {
          padding:
            18px;

          border-top:
            1px solid
            rgba(245,247,248,0.12);
        }


        .fd-vision-points strong {
          display: block;

          margin-bottom: 8px;

          color:
            var(--fd-mint);

          font-size: 9px;
        }


        .fd-vision-points span {
          font-size: 9px;

          letter-spacing: 0.12em;
        }


        /* =====================================================
           CLOSING
        ===================================================== */

        .fd-closing {
          padding:
            85px
            7vw;

          background:
            var(--fd-yellow);

          color:
            var(--fd-bg);
        }


        .fd-closing-inner {
          max-width: 1250px;

          margin: 0 auto;
        }


        .fd-closing-top {
          display: flex;

          justify-content: space-between;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }


        .fd-closing h2 {
          margin:
            40px 0 45px;

          font-size:
            clamp(55px,7vw,105px);

          line-height: 0.86;

          letter-spacing: -0.065em;

          font-weight: 500;
        }


        .fd-closing h2 span {
          display: block;

          font-family:
            Georgia,
            serif;

          font-weight: 400;
        }


        .fd-closing-bottom {
          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          gap: 50px;

          padding-top: 25px;

          border-top:
            1px solid
            rgba(5,9,11,0.25);
        }


        .fd-closing-bottom p {
          max-width: 520px;

          margin: 0;

          font-size: 14px;

          line-height: 1.75;
        }


        .fd-closing-bottom div {
          text-align: right;
        }


        .fd-closing-bottom strong {
          display: block;

          font-size: 21px;

          letter-spacing: -0.04em;
        }


        .fd-closing-bottom span {
          display: block;

          margin-top: 5px;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 0.15em;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .fd-intro-section {
            padding:
              90px
              7vw
              60px;
          }


          .fd-intro-grid {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .fd-intro-bottom {
            grid-template-columns:
              1fr 1fr;

            gap: 25px;
          }


          .fd-small-description {
            grid-column:
              1 / -1;

            justify-content:
              flex-start;
          }


          .fd-founder-layout {
            grid-template-columns: 1fr;

            gap: 60px;
          }


          .fd-founder-image-wrap {
            max-width: 500px;

            margin: 0 auto;
          }


          .fd-founder-content {
            max-width: 700px;
          }


          .fd-message-grid,
          .fd-team-message-grid {
            grid-template-columns: 1fr;

            gap: 45px;
          }


          .fd-vision-box {
            grid-template-columns: 1fr;
          }


          .fd-vision-side {
            border-right: none;

            border-bottom:
              1px solid
              rgba(245,247,248,0.08);
          }


          .fd-vision-number {
            margin-top: 30px;
          }


          .fd-story-card {
            width: 82vw;

            min-height: 62vh;

            padding: 45px;
          }


          .fd-story-start,
          .fd-story-stat-card,
          .fd-story-values,
          .fd-story-team,
          .fd-story-end {
            width: 82vw;
          }


          .fd-story-team {
            grid-template-columns: 1fr;

            gap: 30px;
          }


          .fd-team-visual {
            width: 230px;
            height: 230px;
          }


          .ring-one {
            width: 220px;
            height: 220px;
          }


          .ring-two {
            width: 160px;
            height: 160px;
          }


          .ring-three {
            width: 105px;
            height: 105px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .fd-intro-section {
            padding:
              75px
              6vw
              55px;
          }


          .fd-intro-header {
            margin-bottom: 35px;
          }


          .fd-intro-title h2 {
            font-size: 48px;
          }


          .fd-intro-copy p {
            font-size: 14px;
          }


          .fd-intro-bottom {
            grid-template-columns: 1fr;
          }


          .fd-small-description {
            display: block;
          }


          .fd-small-description > span {
            display: block;

            margin-bottom: 8px;
          }


          .fd-story-track {
            gap: 25px;

            padding:
              0 6vw;
          }


          .fd-story-card {
            width: 84vw;

            min-height: 64vh;

            padding:
              38px
              28px;
          }


          .fd-card-content h3 {
            font-size: 40px;
          }


          .fd-card-content p {
            font-size: 14px;
          }


          .fd-big-stat .fd-stat-number {
            font-size: 105px;
          }


          .fd-values-orbit {
            opacity: 0.35;

            right: 20px;
            bottom: 20px;

            width: 125px;
            height: 125px;
          }


          .fd-message-section {
            padding:
              75px
              6vw
              70px;
          }


          .fd-founder-layout {
            gap: 45px;
          }


          .fd-founder-image-frame {
            padding: 9px;
          }


          .fd-founder-image-label {
            left: -10px;

            bottom: 20px;

            padding:
              10px 12px;
          }


          .fd-founder-image-accent.accent-top {
            top: -7px;

            left: 20px;

            width: 90px;
          }


          .fd-founder-image-accent.accent-bottom {
            bottom: -7px;

            right: 20px;

            width: 70px;
          }


          .fd-founder-content .fd-message-intro {
            margin-bottom: 30px;
          }


          .fd-message-intro h3 {
            font-size: 40px;
          }


          .fd-message-text p {
            font-size: 14px;
          }


          .fd-founder-signature {
            margin-top: 30px;
          }


          .fd-quote-section,
          .fd-team-message,
          .fd-vision-section {
            padding-left: 6vw;
            padding-right: 6vw;
          }


          .fd-quote-card {
            padding:
              30px 25px;
          }


          .fd-quote-card blockquote {
            font-size: 35px;
          }


          .fd-quote-footer {
            display: block;
          }


          .fd-quote-footer span {
            display: block;

            margin-top: 8px;
          }


          .fd-vision-main {
            padding:
              35px 28px;
          }


          .fd-vision-points {
            grid-template-columns: 1fr;
          }


          .fd-closing {
            padding:
              70px 6vw;
          }


          .fd-closing h2 {
            font-size: 58px;
          }


          .fd-closing-bottom {
            display: block;
          }


          .fd-closing-bottom div {
            margin-top: 30px;

            text-align: left;
          }

        }

      `})]})},YE="/boltfaredeal/assets/Factory-BqlQuVsl.png";Z.registerPlugin(Ce);const GE=()=>{const a=z.useRef(null);return z.useLayoutEffect(()=>{const t=Z.context(()=>{Z.from(".team-section-title",{opacity:0,y:25,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".team-section",start:"top 85%"}}),Z.fromTo(".team-image-reveal",{scaleX:1},{scaleX:0,transformOrigin:"right center",duration:1.3,ease:"power4.inOut",scrollTrigger:{trigger:".team-image-box",start:"top 80%"}});const n=window.innerWidth<=600;Z.to(".team-main-image",{scale:n?1.01:1.04,yPercent:n?-1:-4,ease:"none",scrollTrigger:{trigger:".team-image-box",start:"top bottom",end:"bottom top",scrub:1}}),Z.from(".team-content-block",{opacity:0,y:35,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".team-content",start:"top 82%"}}),Z.from(".team-highlight",{opacity:0,y:25,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".team-highlight",start:"top 85%"}}),Ce.refresh()},a);return()=>t.revert()},[]),o.jsxs("section",{ref:a,className:"team-section",children:[o.jsx("style",{children:`

        /* =====================================================
           ROOT
        ===================================================== */

        .team-section {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          width: 100%;

          background: var(--fd-bg);

          color: var(--fd-white);

          padding:
            70px
            6vw;

          overflow: hidden;

          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;
        }


        .team-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;
        }


        /* =====================================================
           SECTION TITLE
        ===================================================== */

        .team-section-title {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 28px;

          font-size: 14px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: .08em;

          text-transform: uppercase;

          color: var(--fd-yellow);
        }


        .team-section-title::before {
          content: "";

          width: 35px;

          height: 2px;

          flex-shrink: 0;

          background: var(--fd-mint);
        }


        /* =====================================================
           IMAGE CONTAINER
        ===================================================== */

        .team-image-box {
          position: relative;

          width: 100%;

          height: 480px;

          overflow: hidden;

          background: var(--fd-panel);

          margin-bottom: 38px;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .team-main-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center center;

          will-change: transform;

          filter:
            saturate(.85)
            contrast(1.02);
        }


        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .team-image-overlay {
          position: absolute;

          inset: 0;

          z-index: 2;

          background:
            linear-gradient(
              90deg,
              rgba(5, 9, 11, .10),
              transparent 60%,
              rgba(5, 9, 11, .25)
            );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE REVEAL
        ===================================================== */

        .team-image-reveal {
          position: absolute;

          inset: 0;

          z-index: 3;

          background: var(--fd-yellow);

          transform-origin: right center;

          pointer-events: none;
        }


        /* =====================================================
           CONTENT GRID
        ===================================================== */

        .team-content {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 35px;

          border-top:
            1px solid
            rgba(255,255,255,.10);

          padding-top: 30px;
        }


        /* =====================================================
           CONTENT BLOCK
        ===================================================== */

        .team-content-block {
          position: relative;

          min-width: 0;

          padding-right: 28px;

          border-right:
            1px solid
            rgba(255,255,255,.08);
        }


        .team-content-block:last-child {
          border-right: none;
        }


        /* =====================================================
           ACCENT LINE
        ===================================================== */

        .team-content-line {
          width: 30px;

          height: 2px;

          margin-bottom: 15px;

          background: var(--fd-yellow);
        }


        /* =====================================================
           CONTENT TITLE
           14PX
        ===================================================== */

        .team-content-title {
          margin: 0 0 13px;

          font-size: 14px;

          line-height: 1.35;

          font-weight: 700;

          letter-spacing: .04em;

          text-transform: uppercase;

          color: var(--fd-mint);
        }


        .team-content-block:nth-child(2)
        .team-content-title {
          color: var(--fd-yellow);
        }


        .team-content-block:nth-child(3)
        .team-content-title {
          color: var(--fd-mint);
        }


        /* =====================================================
           BODY TEXT
        ===================================================== */

        .team-content-text {
          margin: 0 0 11px;

          color: var(--fd-gray);

          font-size: 12px;

          line-height: 1.7;
        }


        /* =====================================================
           HIGHLIGHT
        ===================================================== */

        .team-highlight {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          margin-top: 38px;

          padding:
            20px
            25px;

          background: var(--fd-panel);

          border-left:
            2px solid
            var(--fd-yellow);
        }


        .team-highlight-text {
          margin: 0;

          color: var(--fd-white);

          font-size: 14px;

          line-height: 1.5;
        }


        .team-highlight-text span {
          color: var(--fd-mint);
        }


        .team-highlight-small {
          margin: 0;

          color: var(--fd-gray);

          font-size: 11px;

          white-space: nowrap;

          letter-spacing: .08em;
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1500px) {

          .team-section {
            padding-left: 7vw;
            padding-right: 7vw;
          }

          .team-image-box {
            height: 520px;
          }

          .team-content {
            gap: 50px;
          }

        }


        /* =====================================================
           DESKTOP / LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {

          .team-section {
            padding:
              65px
              5vw;
          }

          .team-image-box {
            height: 430px;
          }

          .team-content {
            gap: 25px;
          }

          .team-content-block {
            padding-right: 20px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .team-section {
            padding:
              55px
              5vw;
          }

          .team-image-box {
            height: 380px;

            margin-bottom: 30px;
          }

          .team-content {
            grid-template-columns: 1fr;

            gap: 25px;

            padding-top: 28px;
          }

          .team-content-block {
            padding:
              0
              0
              25px;

            border-right: none;

            border-bottom:
              1px solid
              rgba(255,255,255,.08);
          }

          .team-content-block:last-child {
            border-bottom: none;

            padding-bottom: 0;
          }

          .team-highlight {
            margin-top: 30px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .team-section {
            padding:
              50px
              20px;
          }


          /* TITLE */

          .team-section-title {
            gap: 10px;

            margin-bottom: 22px;

            font-size: 14px;
          }


          .team-section-title::before {
            width: 28px;
          }


          /* IMAGE */

          .team-image-box {
            width: 100%;

            height: 280px;

            margin-bottom: 25px;

            overflow: hidden;
          }


          .team-main-image {
            width: 100%;

            height: 100%;

            object-fit: cover;

            /*
              Important:
              Keeps the image centered and
              prevents unnecessary horizontal
              movement.
            */

            object-position: center center;

            transform: none;
          }


          /* CONTENT */

          .team-content {
            gap: 22px;

            padding-top: 25px;
          }


          .team-content-block {
            padding-bottom: 22px;
          }


          .team-content-title {
            font-size: 14px;

            line-height: 1.4;
          }


          .team-content-text {
            font-size: 12px;

            line-height: 1.65;
          }


          /* HIGHLIGHT */

          .team-highlight {
            display: block;

            padding:
              18px
              20px;

            margin-top: 28px;
          }


          .team-highlight-text {
            font-size: 14px;
          }


          .team-highlight-small {
            margin-top: 9px;

            font-size: 10px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .team-section {
            padding:
              45px
              16px;
          }


          .team-section-title {
            font-size: 13px;
          }


          .team-image-box {
            height: 240px;
          }


          .team-content-title {
            font-size: 14px;
          }


          .team-content-text {
            font-size: 12px;

            line-height: 1.6;
          }


          .team-highlight {
            padding:
              17px
              18px;
          }

        }

      `}),o.jsxs("div",{className:"team-container",children:[o.jsx("div",{className:"team-section-title",children:"People Behind The Process"}),o.jsxs("div",{className:"team-image-box",children:[o.jsx("img",{src:YE,alt:"Fairdeal Print Pack Team",className:"team-main-image"}),o.jsx("div",{className:"team-image-overlay"}),o.jsx("div",{className:"team-image-reveal"})]}),o.jsxs("div",{className:"team-content",children:[o.jsxs("div",{className:"team-content-block",children:[o.jsx("div",{className:"team-content-line"}),o.jsx("h3",{className:"team-content-title",children:"Research & Development"}),o.jsx("p",{className:"team-content-text",children:"A detailed checklist of the processes to be followed is developed with strong adherence during all stages of the job."}),o.jsx("p",{className:"team-content-text",children:"Printing starts only after definite groundwork and research on similar jobs executed in the past."})]}),o.jsxs("div",{className:"team-content-block",children:[o.jsx("div",{className:"team-content-line"}),o.jsx("h3",{className:"team-content-title",children:"Customer Understanding & Support"}),o.jsx("p",{className:"team-content-text",children:"We always keep our customer's requirements in sight, including budget, logistics, execution requirements and timelines."}),o.jsx("p",{className:"team-content-text",children:"This allows us to provide practical and tailor-made executions."})]}),o.jsxs("div",{className:"team-content-block",children:[o.jsx("div",{className:"team-content-line"}),o.jsx("h3",{className:"team-content-title",children:"Never Say No"}),o.jsx("p",{className:"team-content-text",children:"Our eagerness to experiment and try new approaches helps us take on challenging requirements."}),o.jsx("p",{className:"team-content-text",children:"Rewriting benchmarks and finding solutions is part of our everyday routine."})]})]}),o.jsxs("div",{className:"team-highlight",children:[o.jsxs("p",{className:"team-highlight-text",children:["We believe in"," ",o.jsx("span",{children:"people, teamwork and continuous improvement."})]}),o.jsx("p",{className:"team-highlight-small",children:"FAIRDEAL PRINT PACK"})]})]})]})},qE=()=>o.jsxs("main",{className:"about-us",children:[o.jsx(IE,{}),o.jsx(VE,{}),o.jsx(GE,{}),o.jsx(FE,{}),o.jsx(BE,{}),o.jsx(UE,{}),o.jsx(HE,{})]}),XE="/boltfaredeal/assets/2%20in%201%20Shrink-ciZgVCTz.png",QE="/boltfaredeal/assets/ALPNA-Retrofit%20Machine-DXwxae8c.png",KE="/boltfaredeal/assets/Automatic%20Continuous%20Lamination-BykSUQZb.png",JE="/boltfaredeal/assets/Automatic%20Cutting%20Machine-hVLOwTR1.png",ZE="/boltfaredeal/assets/Automatic%20Punching%20Machine-PThhMVPI.png",$E="/boltfaredeal/assets/Automatic%20Sheet-BWjiNHu0.png",eS="/boltfaredeal/assets/Autoprint-D1iTHp6s.png",tS="/boltfaredeal/assets/Blister%20Coat-BucTVwEN.png",rS="/boltfaredeal/assets/Continuous%20Stationery-DWtCVyJL.png",nS="/boltfaredeal/assets/Core%20Cutting-C_CPNU6Z.png",iS="/boltfaredeal/assets/Corrugation%20Machine-C2P2UJOX.png",aS="/boltfaredeal/assets/Cut%20To%20Length-BIoCsxTS.png",sS="/boltfaredeal/assets/FLEXO%20ROTARY-CDtbjxS4.png",oS="/boltfaredeal/assets/Flatbed%20Punching-CruOeq5e.png",lS="/boltfaredeal/assets/Gluing%20Machine-BuHgCHPn.png",cS="/boltfaredeal/assets/Graphica%20Screen-CYDhuuWD.png",dS="/boltfaredeal/assets/HEIDELBERG-VvLhSvTq.png",uS="/boltfaredeal/assets/Laser%20Serial-FzlpndFf.png",fS="/boltfaredeal/assets/Shinohara%2066%20II%20P-CWTz-Ggr.png",pS="/boltfaredeal/assets/Slitting%20Machine-aEhP8rlD.png",hS="/boltfaredeal/assets/Sticker%20Half%20Cutting-KFMxqlB_.png",mS="/boltfaredeal/assets/servicehero-DTYLYvNy.png";Z.registerPlugin(Ce);const gS=[{title:"Offset Printing",description:"High-quality offset production for brand, business, and publishing needs. Precise registration and dependable color reproduction bring brochures, catalogues, books, labels, cartons, and stationery to life at scale.",applications:"Brochures / Catalogues / Books / Labels / Cartons / Stationery"},{title:"Flexo Printing",description:"Flexible, high-volume printing for labels, tags, packaging, and shrink sleeves. Multi-colour rotary production helps maintain crisp detail and consistent output across long runs and repeat orders.",applications:"Product Labels / Packaging / Tags / Shrink Sleeves"},{title:"Copier Paper",description:"Reliable sourcing and distribution of copier, coated, and sheet-form paper for offices, print rooms, and production partners. Choose the right grade and format for everyday printing or specialist finishing.",applications:"Offices / Commercial Printers / Production Houses"},{title:"Corrugation",description:"Protective corrugated packaging developed around the product, journey, and presentation. From everyday transit cartons to custom-fit packaging, flute and board options balance strength with practical handling.",applications:"Transit Cartons / Custom Boxes / Product Protection"},{title:"Others",description:"Specialist print and finishing options for the details that make a project distinct. Combine tapes, labels, stickers, and screen printing to complete packaging and promotional requirements.",applications:"Packaging Details / Product Identification / Promotions"}],xS=Object.entries(Object.assign({"../assets/images/Technology/2 in 1 Shrink.png":XE,"../assets/images/Technology/ALPNA-Retrofit Machine.png":QE,"../assets/images/Technology/Automatic Continuous Lamination.png":KE,"../assets/images/Technology/Automatic Cutting Machine.png":JE,"../assets/images/Technology/Automatic Punching Machine.png":ZE,"../assets/images/Technology/Automatic Sheet.png":$E,"../assets/images/Technology/Autoprint.png":eS,"../assets/images/Technology/Blister Coat.png":tS,"../assets/images/Technology/Continuous Stationery.png":rS,"../assets/images/Technology/Core Cutting.png":nS,"../assets/images/Technology/Corrugation Machine.png":iS,"../assets/images/Technology/Cut To Length.png":aS,"../assets/images/Technology/FLEXO ROTARY.png":sS,"../assets/images/Technology/Flatbed Punching.png":oS,"../assets/images/Technology/Gluing Machine.png":lS,"../assets/images/Technology/Graphica Screen.png":cS,"../assets/images/Technology/HEIDELBERG.png":dS,"../assets/images/Technology/Laser Serial.png":uS,"../assets/images/Technology/Shinohara 66 II P.png":fS,"../assets/images/Technology/Slitting Machine.png":pS,"../assets/images/Technology/Sticker Half Cutting.png":hS})),Gv=xS.reduce((a,[t,n])=>{const i=t.split("/").pop()?.replace(/\.[^/.]+$/,"")??"";return i&&(a[i.toLowerCase()]=n),a},{}),qv=a=>a.toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim(),vS=a=>{const t=qv(a);let n=Object.values(Gv)[0]??"",i=-1;return Object.entries(Gv).forEach(([s,c])=>{const u=qv(s),f=t.split(" ").filter(Boolean),p=u.split(" ").filter(Boolean),g=f.filter(y=>p.includes(y)||p.some(v=>v.includes(y)||y.includes(v))).length*3+(t.includes(u)?18:0);g>i&&(i=g,n=c)}),n},yS=[{title:"Flexo Rotary Label Printing Machine – RK-FMS-NICE-P-320",features:["8 Colour Printing Machine","One UV Dryer Unit","Two Rotary Die Cutting Units"]},{title:"Flexo Flatbed Punching Machine",features:["Flatbed Punching"]},{title:"Flexo Cut To Length – CT-300 New",features:["Cut-to-Length"]},{title:"Flexo Core Cutting Machine",features:["Core Cutting"]},{title:"Flexo Gluing Machine – GT-300 HS",features:["Gluing"]},{title:"Flexo Slitting Machine",features:["Flexo Slitting"]},{title:"HEIDELBERG SM 74 P II",features:["German Make","5 Colour Offset Printing",'Size: 20" × 30"']},{title:"ALPNA-Retrofit Machine",features:["MET PET Printing","Drip Off","UV","Blister Coating","Aqueous Varnish Setup",'Size: 28" × 40"']},{title:"Automatic Sheet Folding Machine – Heidelberg Stahl",features:['Size: 25" × 36"']},{title:"Corrugation Machine",features:['E-Flute: 36"','F-Flute: 52"','C-Flute: 68"']},{title:"Shinohara 66 II P Offset Printer",features:["Perfecter","2 Colour",'Size: 26" × 19"',"2 Nos."]},{title:"Autoprint Offset Printing Machine",features:["Single Colour",'Size: 10" × 15"',"2 Nos."]},{title:"Automatic Cutting Machine",features:['Polar Mohr – German Make – 36" – 3 Nos.','Horizon – Japan Make – 45" – 1 No.']},{title:"Automatic Punching Machine",features:['Size: 22" × 32" – 2 Nos.','Size: 36" × 46" – 1 No.']},{title:"Automatic Continuous Lamination Machine",features:["Capacity up to 850 mm"]},{title:"Continuous Stationery Setup",features:["Continuous Stationery Production"]},{title:"Sticker Half Cutting cum Creasing & Perforating Machine",features:["Half Cutting","Creasing","Perforating"]},{title:"Graphica Screen Printing Setup",features:["Full-fledged Screen Printing Setup","2 Nos."]},{title:"2-in-1 Shrink Heat Packing Machine",features:["Shrink Heat Packing"]},{title:"Laser Serial Numbering Machine",features:["Laser Serial Numbering"]},{title:"Blister Coat Testing Machine",features:["Blister Coat Testing"]}].map(a=>({...a,image:vS(a.title)})),bS=()=>{const a=z.useRef(null),t=z.useRef(null),n=z.useRef(null),i=z.useRef(null),s=z.useRef(null),c=z.useRef(null),u=z.useRef(null),[f,p]=z.useState(!1);return z.useEffect(()=>{const m=document.documentElement,g=()=>{p(m.getAttribute("data-theme")==="light"||m.classList.contains("light"))};g();const y=new MutationObserver(g);return y.observe(m,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>y.disconnect()},[]),z.useEffect(()=>{const m=a.current;if(!m)return;const g=Z.context(()=>{const y=n.current?.querySelectorAll(".services-hero-word"),v=[i.current,c.current,u.current];Z.set(y,{opacity:0,y:65,rotateX:-65}),Z.set([t.current,...v],{opacity:0}),Z.set(v,{y:28}),Z.set(s.current,{opacity:0,x:90,scale:.84,rotation:4}),Z.timeline({scrollTrigger:{trigger:m,start:"top 75%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,duration:.6,ease:"power3.out"}).to(y,{opacity:1,y:0,rotateX:0,duration:.85,stagger:.055,ease:"power4.out"},"-=0.25").to(i.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.4").to(s.current,{opacity:1,x:0,scale:1,rotation:0,duration:1.15,ease:"expo.out"},"-=0.35").to([c.current,u.current],{opacity:1,y:0,duration:.65,stagger:.08,ease:"power3.out"},"-=0.3")},m);return()=>g.revert()},[]),o.jsxs("main",{className:`services-page relative w-full overflow-hidden ${f?"light-mode":""}`,children:[o.jsx("style",{children:`
        /* =====================================================
           DESIGN SYSTEM
        ===================================================== */

        .services-page {
          --services-bg: #05090B;
          --services-panel: #0C1419;
          --services-panel-2: #111B21;

          --services-yellow: #FFDF00;
          --services-mint: #8FE7C8;

          --services-white: #F5F7F8;
          --services-gray: #98A1B1;

          --services-border: rgba(255,255,255,0.08);

          /*
           * MASTER DISPLAY SIZE
           *
           * This is intentionally the same scale used
           * by the hero and every major editorial heading.
           */
          --services-display-size: clamp(52px, 4vw, 80px);

          /*
           * Shared display typography
           */
          --services-display-weight: 500;
          --services-display-leading: 0.9;
          --services-display-tracking: -0.055em;
        }

        .services-page.light-mode {
          --services-bg: #F5F7F8;
          --services-panel: #FFFFFF;
          --services-panel-2: #EEF2F1;

          --services-yellow: #D5B900;
          --services-mint: #15966F;

          --services-white: #101518;
          --services-gray: #56616D;

          --services-border: rgba(5,9,11,0.09);
        }

        /* =====================================================
           SHARED DISPLAY HEADING
        ===================================================== */

        .services-page .services-display-heading {
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          font-size: var(--services-display-size);
          font-weight: var(--services-display-weight);
          line-height: var(--services-display-leading);
          letter-spacing: var(--services-display-tracking);
        }

        .services-page .service-title {
          background-image: linear-gradient(
            90deg,
            #1fc8ff 0%,
            #4fe3c1 35%,
            #8fe86a 70%,
            #f7e83a 100%
          );
          background-clip: text;
          font-size: clamp(3.25rem, 4.7vw, 5rem);
          font-weight: 650;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .services-page .services-hero {
          background: var(--services-bg);
          color: var(--services-white);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .services-page .services-hero-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;

          color: var(--services-yellow);

          font-size: 11px;
          font-weight: 800;
          line-height: normal;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .services-page .services-hero-label::before {
          content: "";

          width: 35px;
          height: 1px;

          background: linear-gradient(
            90deg,
            var(--services-yellow),
            var(--services-mint)
          );
        }

        /*
         * HERO HEADING
         *
         * Uses the exact same master size as all
         * major headings below.
         */
        .services-page .services-hero h1 {
          font-family: Inter, "Segoe UI", Arial, sans-serif;

          font-size: clamp(2.25rem, 4.7vw, 4.4rem);
          font-weight: 650;
          line-height: 0.98;
          letter-spacing: -0.055em;

          perspective: 1000px;
        }

        .services-page .services-hero-word {
          display: inline-block;

          margin-right: 0.18em;

          transform-origin: center bottom;

          will-change: transform, opacity;
        }

        .services-page .services-hero-accent {
          color: var(--services-yellow);
        }

        .services-page .services-hero-mint {
          color: var(--services-mint);
        }

        .services-page .services-hero-copy,
        .services-page .services-hero-meta,
        .services-page .services-hero-explore {
          color: var(--services-gray);
        }

        .services-page .services-hero-rule {
          background: var(--services-border);
        }

        .services-page .services-hero-explore svg {
          color: var(--services-mint);
        }

        .services-page .services-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .services-page .services-hero-image-caption {
          color: #F5F7F8;
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .services-page .services-hero-word {
            will-change: auto;
          }
        }
      `}),o.jsx("section",{ref:a,className:"services-hero relative px-6 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-10 lg:pb-28 lg:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1240px]",children:[o.jsxs("div",{className:"mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",children:[o.jsxs("div",{className:"lg:pl-8",children:[o.jsx("div",{ref:t,className:"services-hero-label",children:"OUR SERVICES"}),o.jsxs("h1",{ref:n,className:"mt-6 pl-4 text-[var(--services-white)] sm:mt-8 sm:pl-6 lg:mt-0 lg:pl-0",children:[o.jsx("span",{className:"services-hero-word",children:"Print."})," ",o.jsx("span",{className:"services-hero-word services-hero-accent",children:"Pack."})," ",o.jsx("span",{className:"services-hero-word services-hero-mint",children:"Deliver."})]}),o.jsx("p",{ref:i,className:"services-hero-copy mt-[34px] max-w-[560px] text-base leading-[1.8] tracking-[-0.01em]",children:"From offset and flexographic printing to copier papers and corrugated boxes, Fairdeal offers complete printing and packaging solutions under one roof. Our pre-press and post-press services ensure quality, consistency, and reliable execution from design preparation to final delivery."})]}),o.jsxs("div",{className:"lg:pb-3",children:[o.jsxs("div",{className:"group relative",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(60%_60%_at_70%_40%,rgba(143,231,200,0.18),transparent_70%)] blur-2xl"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -right-3 -top-3 h-full w-full border border-[#FFE600]/40 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 sm:-right-4 sm:-top-4"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -bottom-5 -left-5 h-24 w-24 opacity-40 [background-image:radial-gradient(#8FE7C8_1px,transparent_1px)] [background-size:10px_10px]"}),o.jsxs("div",{ref:s,className:"relative aspect-[1.45/1] overflow-hidden rounded-xl bg-[var(--services-panel-2)] ring-1 ring-white/10",children:[o.jsx("img",{src:mS,alt:"Fairdeal printing and packaging production",className:"services-hero-image transition-transform duration-700 group-hover:scale-105"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/60 via-black/5 to-transparent"}),o.jsx("span",{"aria-hidden":"true",className:"absolute left-3 top-3 h-4 w-4 border-l border-t border-[#8FE7C8]"}),o.jsx("span",{"aria-hidden":"true",className:"absolute right-3 top-3 h-4 w-4 border-r border-t border-[#8FE7C8]"}),o.jsx("span",{"aria-hidden":"true",className:"absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#8FE7C8]"}),o.jsx("span",{"aria-hidden":"true",className:"absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#8FE7C8]"}),o.jsx("span",{className:"services-hero-image-caption absolute bottom-7 left-7 text-[9px] font-semibold uppercase tracking-[0.2em]",children:"Print & Packaging / 01"}),o.jsx(Dd,{className:"absolute bottom-7 right-7 h-4 w-4 text-[#8FE7C8]","aria-hidden":"true"})]}),o.jsx("div",{className:"absolute -left-3 top-8 bg-[#FFE600] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black shadow-lg sm:-left-5",children:"Offset · Flexo · Corrugated"})]}),o.jsx("div",{className:"services-hero-rule mt-5 h-px w-full"}),o.jsxs("div",{ref:c,className:"services-hero-meta mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em]",children:[o.jsx("span",{children:"Fairdeal"}),o.jsx("span",{children:"Print & Packaging"})]})]})]}),o.jsxs("div",{ref:u,className:"services-hero-explore mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em]",children:[o.jsx($5,{className:"h-4 w-4"}),o.jsx("span",{children:"Explore our capabilities"})]})]})}),o.jsx("section",{className:"relative px-6 pb-2 sm:px-8 lg:px-10 lg:pb-3",children:o.jsxs("div",{className:"mx-auto max-w-[1240px]",children:[o.jsxs("div",{className:"mb-10 flex items-end justify-between border-b border-[var(--theme-border)] pb-5",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"The Fairdeal System"}),o.jsxs("h2",{className:"mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl",children:[so.length," capabilities.",o.jsx("span",{className:"ml-2 font-normal text-[var(--theme-accent)]",children:"One workflow."})]})]}),o.jsxs("span",{className:"hidden text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)] md:block",children:[String(so.length).padStart(2,"0")," Capabilities"]})]}),o.jsx("div",{className:"relative",children:so.map((m,g)=>{const y=gS.find(k=>k.title===m.title)??{title:m.title,description:m.description,applications:"Print / Packaging / Distribution"},v=m.title?.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),b=g%2===0;return o.jsxs("article",{className:"group relative border-b border-[var(--theme-border)] py-12 sm:py-14 lg:py-16",children:[o.jsx("div",{className:"pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[11rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-text)] opacity-[0.035] xl:block",children:String(g+1).padStart(2,"0")}),o.jsxs("div",{className:"relative grid gap-8 lg:grid-cols-[0.12fr_0.88fr] lg:items-center",children:[o.jsxs("div",{className:"flex items-start gap-4 lg:block",children:[o.jsx("span",{className:"text-5xl font-semibold leading-none tracking-[-0.06em] text-[var(--services-yellow)] lg:text-7xl",children:String(g+1).padStart(2,"0")}),o.jsx("div",{className:"mt-1 hidden h-16 w-px bg-[var(--theme-border)] lg:block"}),o.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-muted)] lg:mt-3 lg:block",children:"Capability"})]}),o.jsxs("div",{className:`grid gap-8 lg:items-center ${b?"lg:grid-cols-[1.25fr_0.75fr]":"lg:grid-cols-[0.75fr_1.25fr] lg:[&>*:first-child]:order-2"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--theme-accent)] transition-transform duration-500 group-hover:scale-150"}),o.jsxs("span",{className:"text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:["Fairdeal /"," ",String(g+1).padStart(2,"0")]})]}),o.jsx("h3",{className:"service-title services-display-heading max-w-[720px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2",children:m.title}),o.jsx("p",{className:"mt-7 max-w-[620px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:y?.description}),o.jsxs("p",{className:"mt-4 max-w-[620px] text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[var(--theme-accent-alt)]",children:["Applications: ",y?.applications]}),o.jsxs(Sn,{to:`/services/${v}`,className:"group/link mt-7 inline-flex items-center gap-3 text-sm text-[var(--theme-text)]",children:[o.jsx("span",{className:"border-b border-[var(--theme-text)] pb-1",children:"Explore service"}),o.jsx(Dd,{className:"h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"})]})]}),o.jsx("div",{className:"relative",children:o.jsxs("div",{className:"relative aspect-[1.35/1] overflow-hidden rounded-xl bg-[var(--theme-bg)]",children:[o.jsx("img",{src:m.image,alt:m.title,loading:"lazy",className:"h-full w-full object-cover grayscale-[15%] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent opacity-70"}),o.jsx("div",{className:"absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white",children:"Print / Production"}),o.jsxs("div",{className:"absolute bottom-5 right-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/70",children:[o.jsx("span",{children:"View capability"}),o.jsx(Dd,{className:"h-3 w-3"})]})]})})]})]})]},m.title)})})]})}),o.jsx("section",{className:"relative border-y border-[var(--theme-border)]",children:o.jsxs("div",{className:"mx-auto max-w-[1240px] px-6 py-0 sm:px-8 sm:py-28 lg:px-10 lg:py-10",children:[o.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.3fr_1.7fr]",children:[o.jsxs("div",{children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"HOW WE WORK"}),o.jsxs("div",{className:"mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--theme-accent)]"}),o.jsx("span",{children:"From idea to output"})]})]}),o.jsxs("div",{children:[o.jsxs("h2",{className:"services-display-heading max-w-[1050px] text-[var(--theme-text)]",children:["We don't just",o.jsx("br",{}),o.jsx("span",{className:"font-normal text-[var(--theme-accent)]",children:"print products."}),o.jsx("br",{}),"We build outcomes."]}),o.jsx("p",{className:"mt-10 max-w-[680px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Every project moves through a connected system of material selection, production, finishing, packaging and delivery. Our capabilities work together so the final product performs exactly as intended."})]})]}),o.jsx("div",{className:"mt-20 grid border-y border-[var(--theme-border)] sm:grid-cols-2 lg:grid-cols-4",children:[["01","Understand","Project requirements"],["02","Produce","Precision manufacturing"],["03","Finish","Detail & quality control"],["04","Deliver","Ready for the market"]].map(([m,g,y])=>o.jsxs("div",{className:"group border-b border-[var(--theme-border)] p-6 last:border-b-0 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8",children:[o.jsx("span",{className:"text-[10px] tracking-[0.2em] text-[var(--theme-accent)]",children:m}),o.jsx("h3",{className:"mt-12 text-xl font-medium tracking-[-0.03em] text-[var(--theme-text)] transition-transform duration-500 group-hover:translate-x-1",children:g}),o.jsx("p",{className:"mt-2 text-xs leading-6 text-[var(--theme-text-soft)]",children:y})]},m))})]})}),o.jsxs("section",{className:"relative overflow-hidden border-b border-[var(--theme-border)]",children:[o.jsx("div",{className:"mx-auto max-w-[1240px] px-6 py-2 sm:px-8 sm:py-28 lg:px-10 lg:py-3",children:o.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end",children:[o.jsx("div",{}),o.jsx("div",{})]})}),o.jsx("div",{className:"pointer-events-none absolute bottom-[-80px] right-[-20px] hidden text-[18rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-accent)] opacity-[0.04] lg:block",children:"03"})]})]})},xc=({features:a=[]})=>a.length===0?null:o.jsx("ul",{className:"grid gap-2 sm:grid-cols-2",children:a.map(t=>o.jsxs("li",{className:"flex items-center gap-2 border-b border-[var(--theme-border)] pb-2 text-[11px] leading-5 text-[var(--theme-text-soft)]",children:[o.jsx(lk,{className:"h-3.5 w-3.5 shrink-0 text-[var(--theme-accent)]"}),o.jsx("span",{children:t})]},t))}),wS=[["01","VERSATILITY","Versatile printing","A range of inks and coatings helps achieve the appearance and protection different products require.",wk],["02","MATERIALS","Multiple substrates","Print on paper, film, foil, Tyvek, and a broad selection of other substrates.",Rn],["03","COST EFFICIENCY","Efficient production","Efficient consumable use and high production speeds make flexography suitable for economical runs.",m1],["04","PRESS SPEED","High press speeds","High-speed production is particularly suited to long runs of custom labels.",Ud],["05","PLATE DURABILITY","Long plate life","Durable flexographic plates support extended production runs and consistent reproduction.",sc],["06","COLOR STABILITY","Consistent color","Careful color control helps maintain stable results throughout a run and from run to run.",Hh]],kS=[["Prime product labels","Premium product identification",$p],["Industrial labels","Industrial identification",sc],["Tamper-evident labels","Security-focused labeling",os],["UL labels","Compliance-oriented labels",Bd],["RoHS labels","Regulatory identification",Bd],["Asset labels and tags","Asset identification systems",Px],["Danger and caution labels","Safety communication",Rx],["Window decals and static clings","Window graphics and clings",Uh],["Warning labels","High-visibility safety labels",Rx],["Barcode and serialized labels","Trackable product identification",Px],["Outdoor equipment labels","Outdoor-use identification",Bd],["Medical labels","Medical product identification",os],["Custom labels and tags","Made for your requirements",$p],["Inventory labels","Stock and inventory management",Nu],["Cover-up labels","Over-labeling applications",Rn],["Security labels","Product security and protection",os]],_S=[["360-degree display","Artwork and messaging wrap around the container for greater shelf impact.",v1],["Full-body coverage","A large printable surface supports product information and brand storytelling.",Rn],["Clear windows","Transparent areas can let customers see the product inside.",Uh],["Tamper evidence","Tamper-evident constructions can add an extra layer of product security.",os],["High print quality","Detailed, high-quality artwork supports demanding product presentation.",Wh],["Protected graphics","Reverse printing can help protect ink from scratching and wear.",x1]],NS=[["01 / SECURITY","Tamper-evident bands","Used for consumer protection across pharmaceutical, vitamin, food, and beverage products."],["02 / BRANDING","Full-body shrink sleeves","Used across beverage, personal care, food, household chemical, and automotive packaging."],["03 / PROMOTIONS","Multi-packs","Promotional wraps can bundle products and support cross-branded campaigns."]],es="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",jS=({service:a})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${es} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsxs("div",{className:"grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsxs("div",{className:"relative z-10 space-y-6",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Flexographic ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Printing"})]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:[a.description," Flexography uses flexible raised-image plates to transfer ink onto a wide range of substrates with speed, consistency, and precision."]}),o.jsx(xc,{features:a.features}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:[[Rn,"FLEXIBLE PLATES"],[Ud,"HIGH PRESS SPEEDS"],[Hh,"COLOR CONTROL"],[x1,"MULTI-SUBSTRATE"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-white/[0.025] px-3 py-2 text-[10px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:[o.jsx(t,{className:"h-3.5 w-3.5 text-[var(--theme-accent)]"}),n]},n))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Ft,{href:"#applications",className:"h-12 px-6 text-sm font-medium",children:["Explore applications ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Ft,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] bg-black/20 sm:min-h-[430px]",children:[o.jsx("img",{src:a.image,alt:"Flexographic printing press transferring ink onto a substrate",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"FLEXOGRAPHIC PRINTING PRESS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," ACTIVE FEED"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Flexible plates. ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Consistent print."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"High-speed ink transfer for labels, packaging, and a wide range of substrates."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["PRINT PROCESS","FLEXOGRAPHIC"],["PLATE TYPE","FLEXIBLE"],["APPLICATION","LABELS & PACKAGING"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})]})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Advantages of flexographic printing"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:wS.map(([t,n,i,s,c])=>o.jsxs("article",{"data-reveal":"up",className:`${es} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`,children:[o.jsx("div",{className:"mb-5 grid h-11 w-11 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(c,{className:"h-5 w-5"})}),o.jsxs("p",{className:"mb-2 text-[10px] font-semibold tracking-[0.16em] text-[var(--theme-accent-alt)]",children:[t," / ",n]}),o.jsx("h2",{className:"mb-2 text-xl font-medium",children:i}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:s})]},t))})]}),o.jsx("section",{"data-reveal":"up",className:`${es} overflow-hidden rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"max-w-5xl space-y-8",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Flexographic process"}),o.jsx("h2",{className:"max-w-4xl border-l-2 border-[var(--theme-accent-alt)] pl-5 text-2xl font-medium leading-tight sm:pl-7 sm:text-3xl lg:text-4xl",children:"Flexible plates. Multiple colors. Consistent reproduction. Built for high-speed production."}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:[["01 / PLATE","A flexible plate carries a raised image that receives ink and transfers the artwork to the substrate."],["02 / COLOR","Each station prints a single color; multiple stations work together to achieve accurate registration."],["03 / FINISH","Printed materials can be die cut, sheeted, embossed, or perforated to suit the finished application."]].map(([t,n])=>o.jsxs("div",{className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5",children:[o.jsx("p",{className:"mb-3 text-[10px] font-semibold tracking-[0.15em] text-[var(--theme-accent)]",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]})}),o.jsxs("section",{id:"applications",className:"scroll-mt-28 space-y-7",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(qe,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Flexographic applications"}),o.jsxs("h2",{className:"max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Labels for ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"every application"})]})]}),o.jsx("span",{className:"w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:"16 CORE APPLICATIONS"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:kS.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${es} flex min-h-[92px] items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5`,children:[o.jsx("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(i,{className:"h-5 w-5"})}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-sm font-medium leading-snug text-[var(--theme-text)]",children:t}),o.jsx("span",{className:"mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]",children:n})]})]},t))})]}),o.jsx("section",{className:`${es} overflow-hidden rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"grid items-center gap-10 lg:grid-cols-2",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Shrink sleeve technology"}),o.jsxs("h2",{className:"text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Full-body ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"branding"})]}),o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Shrink sleeves are full-color labels that cover a container, providing 360-degree graphics for branding and messaging. Printed on engineered film, the sleeve responds to heat or steam and conforms to the container shape."}),o.jsx("div",{className:"flex flex-wrap gap-2",children:[[v1,"360-DEGREE GRAPHICS"],[ju,"CONTAINER CONFORMING"],[Ud,"HEAT SHRINK"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] px-3 py-2 text-[10px] tracking-[0.08em] text-[var(--theme-text-soft)]",children:[o.jsx(t,{className:"h-3.5 w-3.5 text-[var(--theme-accent)]"}),n]},n))})]}),o.jsxs("div",{"data-reveal":"right",className:"relative flex min-h-[290px] items-center justify-center overflow-hidden rounded-[22px] border border-[var(--theme-border)] bg-[radial-gradient(ellipse_at_center,rgba(146,209,188,0.12),transparent_65%)] sm:min-h-[340px]",children:[o.jsx("p",{className:"absolute left-5 top-5 text-[9px] font-medium tracking-[0.14em] text-[var(--theme-text-soft)]",children:"SHRINK FILM / HEAT APPLICATION"}),o.jsxs("div",{className:"relative mt-8 h-[196px] w-[118px] rounded-[24px_24px_28px_28px] bg-[linear-gradient(90deg,#111a20_0%,#53646a_18%,#172126_44%,#71837d_62%,#111a20_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.4)]",children:[o.jsx("div",{className:"absolute -top-8 left-8 h-10 w-[54px] rounded-t-lg bg-[linear-gradient(90deg,#27363a,#70817c,#182226)]"}),o.jsx("div",{className:"absolute -top-11 left-7 h-4 w-[62px] rounded-md bg-[linear-gradient(90deg,#34413f,#96a38c,#2a3434)]"}),o.jsx("div",{className:"absolute inset-x-[-3px] top-[48px] flex h-[105px] items-center justify-center overflow-hidden bg-[linear-gradient(110deg,#86d9f0,#92d1bc_45%,#e1de00)] text-center text-[#17201d] shadow-[0_0_25px_rgba(146,209,188,0.2)]",children:o.jsxs("span",{className:"text-[10px] font-bold leading-5 tracking-[0.1em]",children:["FULL BODY",o.jsx("br",{}),"SHRINK SLEEVE",o.jsx("br",{}),"360 BRANDING"]})})]}),o.jsxs("div",{className:"absolute inset-x-5 bottom-5 flex items-center justify-between text-[9px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:[o.jsx("span",{children:"HEAT"}),o.jsx(Xn,{className:"h-3 w-3"}),o.jsx("span",{children:"CONFORM"}),o.jsx(Xn,{className:"h-3 w-3"}),o.jsx("span",{children:"FINISHED PACK"})]})]})]})}),o.jsxs("section",{className:"space-y-7",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Advantages of shrink sleeves"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:_S.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${es} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`,children:[o.jsx(i,{className:"mb-5 h-5 w-5 text-[var(--theme-accent)]"}),o.jsx("h2",{className:"mb-2 text-lg font-medium",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]}),o.jsx("section",{className:`${es} rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"space-y-7",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"End-use applications"}),o.jsxs("h2",{className:"text-2xl font-medium leading-tight sm:text-3xl",children:["Flexo shrink sleeve ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"applications"})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:NS.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5 sm:p-6",children:[o.jsx("p",{className:"mb-3 text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent-alt)]",children:t}),o.jsx("h3",{className:"mb-3 text-lg font-medium",children:n}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]},n))})]})}),o.jsx("section",{"data-reveal":"up",className:"overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(120deg,rgba(134,217,240,0.09),rgba(146,209,188,0.08),rgba(225,222,0,0.06))] p-6 sm:p-10",children:o.jsxs("div",{className:"grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]",children:[o.jsxs("div",{className:"space-y-5",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Why flexo"}),o.jsxs("h2",{className:"text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Efficient. ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Flexible."})," Scalable."]}),o.jsx("p",{className:"max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Flexographic printing combines efficient production, high-quality reproduction, and substrate flexibility for a broad range of labeling and promotional requirements."}),o.jsxs(Ft,{to:"/contact",className:"h-12 px-6 text-sm font-medium",children:["Discuss your project ",o.jsx(Xn,{className:"h-4 w-4"})]})]}),o.jsx("div",{className:"grid grid-cols-2 gap-3",children:[[Ud,"HIGH SPEED","Fast press production"],[Wh,"HIGH QUALITY","Detailed reproduction"],[$p,"LABEL READY","Labels and promotions"],[Rn,"MULTI-VARIANT","Flexible production"]].map(([t,n,i])=>o.jsxs("div",{className:"rounded-xl border border-[var(--theme-border)] bg-black/10 p-4 sm:p-5",children:[o.jsx(t,{className:"mb-4 h-4 w-4 text-[var(--theme-accent)]"}),o.jsx("p",{className:"text-xs font-semibold tracking-[0.08em]",children:n}),o.jsx("p",{className:"mt-1 text-xs leading-5 text-[var(--theme-text-soft)]",children:i})]},n))})]})})]})}),ES=[[Sk,"Save on time","Streamlined offset workflow ensures rapid turnaround for high-volume press runs."],[m1,"Save on costs","Maximized unit economy for large production volumes without sacrificing quality."],[kk,"Plan jobs better","Predictable schedule management with dedicated press capacity planning."],[ek,"Achieve best quality","Consistently sharp, high-fidelity color reproduction on every printed sheet."]],SS=[["Brochures and manuals","Commercial and technical manuals",tk],["Educational books","High-volume publication printing",pk],["Folders, inserts and flyers","Marketing collateral and inserts",Rn],["Calendars and diaries","Corporate desk and wall merchandise",nk],["Paper bags","Custom-branded paper packaging",bk],["Pharma and industrial labels","Precision compliance labeling",os],["Corporate stationery","Letterheads, cards and identity supplies",rk],["Multicolor duplex mono cartons","Retail duplex carton boxes",ju],["MET PET cartons","Metalized-film packaging",Rn],["Corrugation and PP boxes","Heavy-duty outer shippers and poly boxes",Nu],["Computer stationery","Continuous billing forms and computer paper",sc],["Security holograms","Anti-counterfeiting holographic seals",os]],AS=[[dk,"Drip-off UV effects","Contrasting matte and high-gloss textures in a single press pass for tactile premium depth.","MATTE + GLOSS CONTRAST","FINISH / UV COATING"],[_k,"Aqueous varnish","A fast-drying, water-based protective coating for a smooth, anti-scuff finish.","PROTECTIVE SEAL","FINISH / AQUEOUS"],[ju,"Blister coating","Specialized heat-seal adhesive varnish for pharmaceutical and retail blister packaging cards.","HEAT-SEAL ADHESIVE","FINISH / BLISTER"]],CS=[["01 / GLOBAL TRUST","Fairdeal Print Pack India Pvt. Ltd. provides offset commercial print services to clients in India and across the globe."],["02 / COMPREHENSIVE RANGE","Our offset capability is designed to match everyday printing needs across a wide range of customers."],["03 / CONTINUOUS EVOLUTION","Our offset technology continues to evolve alongside global industry standards."]],TS=({service:a})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:"relative isolate overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12",children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Offset ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Printing"})]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:["Our printing setup brings together the processes vital to completing an offset printing job, giving clients distinct advantages in quality, consistency, and production planning. ",a.description]}),o.jsx(xc,{features:a.features}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2 pt-1",children:[["HIGH PRECISION","var(--theme-accent)"],["GLOBAL STANDARDS","#A4EC62"],["FULL SPECTRUM","var(--theme-accent-alt)"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-black/10 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-text)]",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:n}}),t]},t))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Ft,{href:"#applications",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Explore applications ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Ft,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsx("div",{"data-reveal":"right",className:"flex justify-center",children:o.jsxs("figure",{className:"group relative min-h-[340px] w-full max-w-[440px] overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.24)] sm:min-h-[430px]",style:{aspectRatio:"1 / 0.86"},children:[o.jsx("img",{src:a.image,alt:"Offset printing press",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"OFFSET PRINTING SYSTEMS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," PRESS CAPABILITY"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Precision on every ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"printed sheet."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Consistent color and fine detail for commercial print and packaging applications."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["PRINT PROCESS","OFFSET"],["COLOR SYSTEM","CMYK"],["PRESS CAPABILITY","5 COLOUR"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})})]})]}),o.jsxs("section",{className:"space-y-6",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Key advantages"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:ES.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"group relative overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-bl-full bg-[var(--theme-accent)] opacity-[0.06] transition-transform duration-300 group-hover:scale-125"}),o.jsx("div",{className:"relative mb-4 grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-colors group-hover:bg-[var(--theme-accent)] group-hover:text-[var(--theme-bg)]",children:o.jsx(t,{className:"h-5 w-5"})}),o.jsx("h2",{className:"relative mb-2 text-lg font-medium",children:n}),o.jsx("p",{className:"relative text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]},n))})]}),o.jsxs("section",{className:"relative overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 sm:p-10",children:[o.jsx("div",{className:"pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--theme-accent)] opacity-[0.045] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 max-w-5xl space-y-7",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Quality commitment"}),o.jsx("blockquote",{"data-reveal":"left",className:"border-l-2 border-[var(--theme-accent-alt)] py-1 pl-5 text-2xl font-medium leading-snug sm:pl-7 sm:text-3xl",children:"“Offset printing is all about paying attention to the details. Even a minor difference in colour can make a huge impact on the end product.”"}),o.jsx("div",{className:"grid gap-4 pt-2 md:grid-cols-3",children:CS.map(([t,n])=>o.jsxs("article",{"data-reveal":"up",className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.12] p-5",children:[o.jsx("h3",{className:"mb-3 text-[10px] font-semibold tracking-[0.12em] text-[var(--theme-accent)]",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]})]}),o.jsxs("section",{id:"applications",className:"scroll-mt-28 space-y-7",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(qe,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Capabilities spectrum"}),o.jsx("h2",{className:"max-w-3xl text-2xl font-medium leading-tight sm:text-4xl",children:"All types of offset printing solutions"})]}),o.jsx("span",{className:"w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:"12 CORE CATEGORIES"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:SS.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"group flex min-h-[92px] items-center gap-4 rounded-xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5",children:[o.jsx("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(i,{className:"h-5 w-5"})}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-sm font-semibold leading-snug text-[var(--theme-text)]",children:t}),o.jsx("span",{className:"mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]",children:n})]})]},t))})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsxs("div",{children:[o.jsx(qe,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Surface finish technology"}),o.jsx("h2",{className:"text-3xl font-medium leading-tight sm:text-4xl",children:"Special effects"})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:AS.map(([t,n,i,s,c])=>o.jsxs("article",{"data-reveal":"up",className:"group relative flex min-h-[340px] flex-col justify-between gap-7 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-colors duration-300 hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_38%,rgba(255,255,255,0.08)_50%,transparent_62%)] transition-transform duration-700 ease-out group-hover:translate-x-full"}),o.jsxs("div",{className:"relative space-y-4",children:[o.jsx("div",{className:"grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(t,{className:"h-5 w-5"})}),o.jsx("h3",{className:"text-xl font-medium leading-tight",children:n}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]}),o.jsxs("div",{className:"relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-[var(--theme-border)] bg-black/20 text-center transition-colors group-hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(53,212,255,0.06),transparent_48%,rgba(164,236,98,0.06))]"}),o.jsx("span",{className:"relative rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-accent)]",children:s}),o.jsx("span",{className:"relative text-[9px] tracking-[0.12em] text-[var(--theme-text-soft)]",children:c})]})]},n))})]})]})}),PS=[[Rn,"Multiple flute options","E-Flute, F-Flute, and Narrow Flute"],[Fh,"2 to 7 ply construction","Corrugated box configurations"],[sc,"Printed packaging","Brand-ready packaging solutions"],[Bh,"Tailored solutions","Standard and bespoke requirements"]],RS=[["01 / FLUTE PROFILE",Rn,"E-Flute","A fine corrugated profile for applications where a compact structure and clean printed presentation are important."],["02 / FLUTE PROFILE",Fh,"F-Flute","A fine-profile option for packaging designs that require a compact board structure. Final selection depends on the product and specification."],["03 / FLUTE PROFILE",Nu,"Narrow Flute","A narrow-flute construction selected around box design, handling requirements, and intended end use."]],LS=[[os,"Product protection","Select a suitable corrugated construction based on the product, handling conditions, and transport needs."],[y1,"Bespoke box design","Develop packaging around product dimensions, packing processes, and presentation requirements."],[Hh,"Printed presentation","Bring brand elements and relevant packaging information into the box design and artwork."],[Rn,"Paper-based materials","Consider paper grades and material options when developing the required packaging structure."],[Bh,"Construction options","Explore flute profiles and 2 to 7 ply constructions for the application and specification."],[g1,"Integrated expertise","Combine corrugated production experience with paper and coating material considerations."]],zS=[[Fh,"Transit and shipping boxes"],[Nu,"Product cartons"],[sc,"Printed packaging boxes"],[y1,"Custom-size boxes"],[jk,"Distribution packaging"],[g1,"Retail packaging"],[Rn,"Multi-item packaging"],[Bh,"Industrial packaging"]],OS=[["Understand the requirement","Establish product dimensions, intended use, packing conditions, and presentation requirements for the finished box."],["Consider materials and structure","Review suitable flute profiles, board construction, paper options, and coating requirements for the application."],["Develop the packaging solution","Align box design and print requirements with the agreed specification and intended application."]],ts="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",IS=({service:a})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${ts} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PACKAGING SOLUTIONS"}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Corrugated ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Packaging"})," engineered to deliver."]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:["From transit boxes to bespoke printed corrugated packaging, Fairdeal develops solutions around your product and packaging requirements. Our corrugated production combines paper and coating materials with a commitment to consistent quality. ",a.description]}),o.jsx(xc,{features:a.features}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:["E-FLUTE","F-FLUTE","NARROW FLUTE","2-7 PLY BOXES"].map(t=>o.jsx("span",{className:"rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]",children:t},t))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Ft,{href:"#box-solutions",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Explore box solutions ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Ft,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]",children:[o.jsx("img",{src:a.image,alt:"Corrugated cardboard fluting and board materials",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"CORRUGATED PACKAGING SYSTEMS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," PACKAGING SOLUTIONS"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Protection meets ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"presentation."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Corrugated structures and printed packaging designed for product protection, handling, and brand presentation."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["FLUTE OPTIONS","E / F / NARROW"],["BOX CONSTRUCTION","2-7 PLY"],["PACKAGING","PRINTED BOXES"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})]})]}),o.jsx("section",{className:`${ts} grid gap-5 rounded-2xl p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4`,children:PS.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"flex items-center gap-3",children:[o.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(t,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-xs font-semibold",children:n}),o.jsx("span",{className:"mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]",children:i})]})]},n))}),o.jsxs("section",{id:"box-solutions",className:"scroll-mt-28 space-y-8",children:[o.jsxs("header",{"data-reveal":"up",className:"mx-auto max-w-[760px] text-center",children:[o.jsx(qe,{className:"text-center text-[var(--theme-accent-alt)]",children:"Corrugated construction"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["The right structure for your ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"packaging needs."})]}),o.jsx("p",{className:"mx-auto mt-4 max-w-[700px] text-sm leading-7 text-[var(--theme-text-soft)]",children:"Flute selection influences the construction and profile of corrugated packaging. Explore the available options to find a structure suited to your product and application."})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:RS.map(([t,n,i,s])=>o.jsxs("article",{"data-reveal":"up",className:`${ts} group relative min-h-[260px] overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40 sm:p-7`,children:[o.jsx("div",{className:"pointer-events-none absolute -bottom-12 -right-10 h-36 w-36 rounded-full border border-[var(--theme-accent)]/15 shadow-[0_0_0_18px_rgba(146,209,188,0.025),0_0_0_36px_rgba(146,209,188,0.018)]"}),o.jsx("p",{className:"text-[9px] font-semibold tracking-[0.14em] text-[var(--theme-text-soft)]",children:t}),o.jsx("div",{className:"mt-6 grid h-12 w-12 place-items-center rounded-lg border border-[var(--theme-accent)]/20 bg-[var(--theme-accent)]/[0.06] text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(n,{className:"h-5 w-5"})}),o.jsx("h3",{className:"mt-5 text-xl font-medium",children:i}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-[var(--theme-text-soft)]",children:s}),o.jsx("div",{className:"mt-5 h-0.5 w-11 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-alt)]"})]},i))})]}),o.jsxs("section",{className:"relative overflow-hidden border-y border-[var(--theme-border)] bg-white/[0.018] py-8 sm:py-12",children:[o.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_50%,rgba(146,209,188,0.07),transparent_65%)]"}),o.jsxs("div",{className:"relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14",children:[o.jsxs("div",{"data-reveal":"left",className:`${ts} rounded-xl p-5 sm:p-8`,children:[o.jsxs("div",{className:"mb-6 flex items-center justify-between gap-3",children:[o.jsx("span",{className:"text-[10px] font-semibold tracking-[0.12em]",children:"CORRUGATED BOARD CONCEPT"}),o.jsx("span",{className:"text-[9px] font-semibold tracking-[0.1em] text-[var(--theme-accent)]",children:"2-7 PLY"})]}),o.jsx("div",{className:"space-y-1.5","aria-label":"Illustrative corrugated board layers",children:Array.from({length:7},(t,n)=>o.jsx("div",{className:`relative h-3 overflow-hidden rounded-sm border border-white/10 ${n%2===0?"bg-[linear-gradient(90deg,#765033,#c69b64_35%,#e0bf89_54%,#986235)]":"bg-[repeating-linear-gradient(90deg,#8d5e35_0px,#c99b63_7px,#e3c18d_13px,#9a693e_20px)]"}`,children:o.jsx("span",{className:"absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"})},n))}),o.jsxs("div",{className:"mt-3 flex justify-between gap-2 text-[9px] text-[var(--theme-text-soft)]",children:[o.jsx("span",{children:"Illustrative layered construction"}),o.jsx("span",{children:"01-07"})]}),o.jsx("p",{className:"mt-5 border-t border-[var(--theme-border)] pt-4 text-xs leading-6 text-[var(--theme-text-soft)]",children:"Board construction should be specified to suit the box design, product, handling conditions, and transport requirements. This illustration is conceptual, not a technical cross-section."})]}),o.jsxs("div",{"data-reveal":"right",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Printed corrugated boxes"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["From ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"2 to 7 ply"}),", built around your product."]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Fairdeal provides printed corrugated boxes for standard transit packaging as well as bespoke requirements. Packaging can be developed around its intended use, construction, and paper or coating materials."}),o.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:["Standard transit cardboard boxes","Bespoke corrugated packaging","Printed box requirements","Paper and coating integration"].map(t=>o.jsxs("div",{className:"flex items-start gap-2.5 text-xs leading-5 text-[var(--theme-text)]",children:[o.jsx(ik,{className:"mt-0.5 h-4 w-4 shrink-0 text-[var(--theme-accent)]"}),t]},t))}),o.jsx("p",{className:"mt-5 text-[10px] leading-5 text-[var(--theme-text-soft)]",children:"Final board grade, flute combination, print method, and construction should be confirmed against the product's actual packaging requirements."})]})]})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsxs("header",{"data-reveal":"left",className:"max-w-[720px]",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"Why corrugated packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Packaging designed around ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"real requirements."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Effective corrugated packaging brings together board construction, material selection, printing, and box design. Each element contributes to how the finished pack serves its intended purpose."})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:LS.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${ts} rounded-lg p-5 transition-all duration-300 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/[0.035]`,children:[o.jsx(t,{className:"h-5 w-5 text-[var(--theme-accent)]"}),o.jsx("h3",{className:"mt-4 text-sm font-semibold",children:n}),o.jsx("p",{className:"mt-2 text-xs leading-5 text-[var(--theme-text-soft)]",children:i})]},n))})]}),o.jsxs("section",{className:"border-y border-[var(--theme-border)] bg-white/[0.018] py-16 sm:py-20",children:[o.jsxs("div",{className:"mx-auto max-w-[800px] text-center","data-reveal":"up",children:[o.jsx(qe,{className:"text-center text-[var(--theme-accent-alt)]",children:"Packaging applications"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Solutions for ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"different packaging needs."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Corrugated boxes serve a range of packaging purposes. Final construction should match the product, packing method, and distribution environment."})]}),o.jsx("div",{className:"mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",children:zS.map(([t,n])=>o.jsxs("div",{"data-reveal":"up",className:`${ts} flex min-h-[72px] items-center gap-3 rounded-md p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]/35`,children:[o.jsx(t,{className:"h-4 w-4 shrink-0 text-[var(--theme-accent)]"}),o.jsx("span",{className:"text-xs font-semibold leading-5",children:n})]},n))}),o.jsx("p",{className:"mt-5 text-center text-[10px] leading-5 text-[var(--theme-text-soft)]",children:"Application examples are indicative. Confirm availability and specifications with Fairdeal for your particular requirement."})]}),o.jsxs("section",{className:"space-y-8",children:[o.jsxs("header",{"data-reveal":"up",className:"mx-auto max-w-[760px] text-center",children:[o.jsx(qe,{className:"text-center text-[var(--theme-accent-alt)]",children:"From requirement to packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["A considered approach to ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"corrugated solutions."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Packaging development starts with understanding what the box needs to do and selecting materials and construction to match."})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:OS.map(([t,n],i)=>o.jsxs("article",{"data-reveal":"up",className:"border-t border-[var(--theme-accent)]/50 bg-gradient-to-b from-[var(--theme-accent)]/[0.045] to-transparent p-5 sm:p-6",children:[o.jsxs("span",{className:"text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent)]",children:["0",i+1]}),o.jsx("h3",{className:"mt-5 text-base font-semibold",children:t}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]}),o.jsx("section",{id:"contact",className:"scroll-mt-28",children:o.jsxs("div",{"data-reveal":"up",className:`${ts} relative overflow-hidden rounded-[24px] px-6 py-12 text-center sm:px-10 sm:py-16`,children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(53,212,255,0.1),transparent_45%),radial-gradient(ellipse_at_85%_0%,rgba(164,236,98,0.07),transparent_45%)]"}),o.jsxs("div",{className:"relative mx-auto max-w-[700px]",children:[o.jsx(qe,{className:"text-center text-[var(--theme-accent-alt)]",children:"Let's discuss your packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Have a box in mind? ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Let's develop it."})]}),o.jsx("p",{className:"mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)]",children:"Share your box dimensions, flute preference, ply requirement, artwork, and intended application. Fairdeal can discuss your corrugated packaging needs."}),o.jsxs("div",{className:"mt-7 flex flex-wrap justify-center gap-3",children:[o.jsxs(Ft,{to:"/contact",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Enquire about packaging ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Ft,{href:"#box-solutions",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Review flute options"})]})]})]})})]})}),MS="/boltfaredeal/assets/FAIR%20DEAL-p8-021-DZEneFKK.png",FS="/boltfaredeal/assets/FAIR%20DEAL-p8-022-Cfyo8rF5.png",DS="/boltfaredeal/assets/FAIR%20DEAL-p8-024-Bjo77Wrf.png",BS="/boltfaredeal/assets/FAIR%20DEAL-p8-025-BZk6YAbO.png",US="/boltfaredeal/assets/FAIR%20DEAL-p8-026-C70OQtiN.png",WS="/boltfaredeal/assets/FAIR%20DEAL-p8-027-CiLFXDVG.png",HS="/boltfaredeal/assets/FAIR%20DEAL-p8-028-Bm808PHd.png",VS="/boltfaredeal/assets/FAIR%20DEAL-p8-029-DR5fBncH.png",YS="/boltfaredeal/assets/FAIR%20DEAL-p8-030-Cyh92s2d.png",GS="/boltfaredeal/assets/FAIR%20DEAL-p8-031-wi6I0nCo.png",qS="/boltfaredeal/assets/FAIR%20DEAL-p8-032-CUxF_f78.png",XS="/boltfaredeal/assets/FAIR%20DEAL-p8-033-DjIS-0ni.png",QS="/boltfaredeal/assets/FAIR%20DEAL-p8-034-BN4xfQ8Y.png",KS="/boltfaredeal/assets/FAIR%20DEAL-p8-035-a7NKr1pW.png",JS="/boltfaredeal/assets/FAIR%20DEAL-p8-036-CxHYl2HD.png",ua=Object.entries(Object.assign({"../assets/images/Services/CopierImages/FAIR DEAL-p8-021.png":MS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-022.png":FS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-024.png":DS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-025.png":BS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-026.png":US,"../assets/images/Services/CopierImages/FAIR DEAL-p8-027.png":WS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-028.png":HS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-029.png":VS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-030.png":YS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-031.png":GS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-032.png":qS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-033.png":XS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-034.png":QS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-035.png":KS,"../assets/images/Services/CopierImages/FAIR DEAL-p8-036.png":JS})).sort(([a],[t])=>a.localeCompare(t)).map(([a,t])=>({image:t,name:a.split("/").pop()?.replace(/\.[^/.]+$/,"")??"Copier paper"})),Xv="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",ZS=[[uk,"Copier paper","Paper for everyday office and print-room use."],[Rn,"Coated paper","Coated grades for a range of print requirements."],[ju,"Sheet-form paper","Paper supplied in sheet form for production needs."]],$S={"-1":{x:2,y:72,scale:1.1,rotY:-26,rotZ:-6,opacity:0,b:1,z:11},0:{x:17,y:56,scale:1.05,rotY:-22,rotZ:-5,opacity:1,b:1,z:10},1:{x:34,y:60,scale:.95,rotY:-18,rotZ:-4,opacity:1,b:.95,z:9},2:{x:50,y:36,scale:.68,rotY:-14,rotZ:-3,opacity:.95,b:.85,z:6},3:{x:65,y:33,scale:.6,rotY:-10,rotZ:-2,opacity:.7,b:.6,z:5},4:{x:78,y:44,scale:.55,rotY:-8,rotZ:-2,opacity:.32,b:.4,z:4},5:{x:90,y:54,scale:.5,rotY:-6,rotZ:-1,opacity:0,b:.3,z:3}},e4={"-1":{x:50,y:80,scale:1.1,rotY:-20,rotZ:-5,opacity:0,b:1,z:11},0:{x:50,y:62,scale:1,rotY:-18,rotZ:-5,opacity:1,b:1,z:10},1:{x:26,y:30,scale:.62,rotY:-12,rotZ:-3,opacity:.95,b:.85,z:6},2:{x:54,y:26,scale:.55,rotY:-10,rotZ:-2,opacity:.7,b:.6,z:5},3:{x:80,y:32,scale:.5,rotY:-8,rotZ:-2,opacity:.32,b:.4,z:4},4:{x:92,y:40,scale:.45,rotY:-6,rotZ:-1,opacity:0,b:.3,z:3}},t4={x:50,y:45,scale:.4,rotY:0,rotZ:0,opacity:0,b:.2,z:0},r4=[{w:96,h:56,rot:-6,color:"rgba(214,178,94,0.45)",glow:!0},{w:84,h:44,rot:-10,color:"rgba(214,178,94,0.28)"},{w:70,h:32,rot:4,color:"rgba(120,220,220,0.22)"},{w:100,h:66,rot:-3,color:"rgba(255,255,255,0.07)"},{w:58,h:22,rot:-12,color:"rgba(214,178,94,0.2)"}],n4=70,i4=50,a4=380,s4=({service:a})=>{const t=a.image,[n,i]=z.useState(0),[s,c]=z.useState(!1),[u,f]=z.useState(!1),p=z.useRef(null),m=z.useRef({active:!1,lastX:0,pointerId:null}),g=z.useRef(!1),y=z.useRef({acc:0,last:0});z.useEffect(()=>{const j=window.matchMedia("(max-width: 767px)"),P=I=>{c(I.matches)};return c(j.matches),j.addEventListener("change",P),()=>{j.removeEventListener("change",P)}},[]),z.useEffect(()=>{if(ua.length<2)return;const j=window.setInterval(()=>{g.current||i(P=>(P+1)%ua.length)},3600);return()=>window.clearInterval(j)},[]);const v=j=>{i(P=>(P+j+ua.length)%ua.length)};z.useEffect(()=>{const j=p.current;if(!j)return;const P=I=>{const L=Math.abs(I.deltaX)>Math.abs(I.deltaY);if(!L&&!I.shiftKey)return;I.preventDefault();const B=L?I.deltaX:I.deltaY,W=y.current,D=Date.now();W.acc+=B,Math.abs(W.acc)>=i4&&D-W.last>a4&&(v(W.acc>0?1:-1),W.acc=0,W.last=D)};return j.addEventListener("wheel",P,{passive:!1}),()=>j.removeEventListener("wheel",P)},[]);const b=j=>{j.pointerType==="mouse"&&j.button!==0||(m.current={active:!0,lastX:j.clientX,pointerId:j.pointerId},g.current=!0,f(!0),j.currentTarget.setPointerCapture?.(j.pointerId))},k=j=>{const P=m.current;if(!P.active||P.pointerId!==j.pointerId)return;const I=j.clientX-P.lastX;Math.abs(I)>=n4&&(v(I<0?1:-1),P.lastX=j.clientX)},w=j=>{const P=m.current;!P.active||P.pointerId!==j.pointerId||(m.current={active:!1,lastX:0,pointerId:null},j.currentTarget.releasePointerCapture?.(j.pointerId),f(!1),g.current=!1)},N=j=>{j.key==="ArrowRight"&&(j.preventDefault(),v(1)),j.key==="ArrowLeft"&&(j.preventDefault(),v(-1))},C=ua.length,A=s?e4:$S,S=j=>{const P=(j-n+C)%C,I=P===C-1?"-1":P;return A[I]??t4};return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-4 pb-16 pt-20 text-[var(--theme-text)] sm:px-8 sm:pb-20 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${Xv} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(qe,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Copier"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Paper"})]}),o.jsx("p",{"data-reveal":"left",className:"max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:a.description}),o.jsx(xc,{features:a.features}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:["COPIER PAPER","COATED PAPER","SHEET-FORM PAPER"].map(j=>o.jsx("span",{className:"rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]",children:j},j))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Ft,{href:"#paper-range",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["View paper range",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Ft,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]",children:[o.jsx("img",{src:t,alt:"Copier paper product image",className:"absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-8"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"PAPER RANGE"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"}),"PAPER SUPPLY"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Paper for"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"everyday print."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Copier, coated, and sheet-form paper options."})]})]})]})]}),o.jsx("section",{className:`${Xv} grid gap-5 rounded-2xl p-5 sm:grid-cols-3 sm:p-6`,children:ZS.map(([j,P,I])=>o.jsxs("article",{"data-reveal":"up",className:"flex items-center gap-3",children:[o.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(j,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-xs font-semibold",children:P}),o.jsx("span",{className:"mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]",children:I})]})]},P))}),o.jsxs("section",{id:"paper-range",className:"scroll-mt-28",children:[o.jsxs("header",{className:"flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(qe,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Copier paper range"}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Explore our"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"paper selection"})]})]}),o.jsxs("div",{className:"flex items-center justify-between gap-5 sm:justify-end",children:[o.jsxs("span",{"aria-live":"polite",className:"border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)] sm:text-sm",children:[String(ua.length).padStart(2,"0")," ","PRODUCTS"]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{type:"button","aria-label":"Previous copier paper image","aria-controls":"copier-orbit-stage",title:"Previous image",onClick:()=>v(-1),className:"grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]",children:o.jsx(ak,{className:"h-5 w-5"})}),o.jsx("button",{type:"button","aria-label":"Next copier paper image","aria-controls":"copier-orbit-stage",title:"Next image",onClick:()=>v(1),className:"grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]",children:o.jsx(sk,{className:"h-5 w-5"})})]})]})]}),o.jsxs("div",{ref:p,id:"copier-orbit-stage",role:"region","aria-roledescription":"carousel","aria-label":"Copier paper product images",tabIndex:0,className:`relative isolate mx-auto mt-8 w-full select-none outline-none focus-visible:ring-1 focus-visible:ring-[var(--theme-accent)]/40 ${u?"cursor-grabbing":"cursor-grab"}`,style:{height:s?"430px":"clamp(450px, 39vw, 560px)",perspective:"1400px",overflow:s?"hidden":"visible",touchAction:"pan-y"},onPointerDown:b,onPointerMove:k,onPointerUp:w,onPointerCancel:w,onPointerEnter:()=>{g.current=!0},onPointerLeave:j=>{m.current.active||(g.current=!1),j.pointerType!=="mouse"&&(g.current=!1)},onKeyDown:N,children:[r4.map((j,P)=>o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-[52%] rounded-[50%]",style:{width:`${s?j.w*1.4:j.w}%`,height:`${j.h}%`,border:`1px solid ${j.color}`,boxShadow:j.glow?`0 0 18px ${j.color}`:"none",transform:`translate(-50%, -50%) rotate(${j.rot}deg)`}},P)),ua.map(({image:j,name:P},I)=>{const L=S(I);return o.jsx("figure",{className:"absolute",style:{left:`${L.x}%`,top:`${L.y}%`,width:s?"52%":"min(250px, 16vw)",aspectRatio:"0.78 / 1",zIndex:L.z,opacity:L.opacity,pointerEvents:"none",transform:`translate(-50%, -50%) scale(${L.scale}) rotateY(${L.rotY}deg) rotateZ(${L.rotZ}deg)`,filter:`brightness(${L.b})`,transition:"left 1000ms cubic-bezier(0.2,0.8,0.2,1), top 1000ms cubic-bezier(0.2,0.8,0.2,1), transform 1000ms cubic-bezier(0.2,0.8,0.2,1), opacity 800ms ease, filter 1000ms ease"},children:o.jsx("img",{src:j,alt:P,loading:"eager",draggable:!1,className:"h-full w-full object-contain",style:{filter:"drop-shadow(0 28px 30px rgba(0,0,0,0.55))"}})},I)})]}),s&&o.jsx("div",{className:"mt-8 text-center",children:o.jsxs("span",{className:"text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--theme-text-soft)]",children:["Product"," ",String(n+1).padStart(2,"0")," ","/"," ",String(ua.length).padStart(2,"0")]})})]})]})})},o4=a=>a.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").trim(),l4=()=>{const{serviceName:a}=u5(),t=so.find(n=>o4(n.title)===a);return t?t.title==="Flexo Printing"?o.jsx(jS,{service:t}):t.title==="Offset Printing"?o.jsx(TS,{service:t}):t.title==="Corrugation"?o.jsx(IS,{service:t}):t.title==="Copier Paper"?o.jsx(s4,{service:t}):o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-[620px]",children:[o.jsx(qe,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"OUR SERVICE"}),o.jsx("h1",{className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] text-[var(--theme-text)] max-[600px]:text-[45px]",children:t.title})]}),o.jsx("div",{className:"lg:max-w-[520px] lg:items-end",children:o.jsx(Ft,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})})]}),o.jsx("div",{className:"overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.12)]",children:o.jsxs("div",{className:"grid gap-0 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsx("div",{className:"p-4 sm:p-6 lg:p-8",children:o.jsx("div",{className:"overflow-hidden rounded-[24px]",children:o.jsx("img",{src:t.image,alt:t.title,className:"h-[350px] w-full object-contain sm:h-[420px]"})})}),o.jsxs("div",{className:"flex flex-col justify-center p-6 sm:p-8 lg:p-10",children:[o.jsx("div",{className:"mb-6 flex items-start justify-between gap-4",children:o.jsxs("div",{children:[o.jsx("p",{className:"mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Service overview"}),o.jsx("h2",{className:"text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl",children:t.title})]})}),o.jsx("p",{className:"mb-8 max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:t.description}),o.jsx(xc,{features:t.features}),o.jsx("div",{className:"mt-10",children:o.jsx(Ft,{to:"/contact",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Request a quote"})})]})]})})]})}):o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsx("div",{className:"mx-auto max-w-[1500px]",children:o.jsxs("div",{className:"rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-12",children:[o.jsx(qe,{className:"mb-4 text-[var(--theme-accent-alt)]",children:"Service not found"}),o.jsx("h1",{className:"mb-6 text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl",children:"We couldn’t find that service."}),o.jsx(Ft,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})]})})})},c4="/boltfaredeal/assets/diaries01-Dx_epA3O.png",d4="/boltfaredeal/assets/diaries02-CP1-mH4s.png",u4="/boltfaredeal/assets/diaries03-DQ5n17G-.png",f4="/boltfaredeal/assets/lables01-iBxOT7Dx.png",p4="/boltfaredeal/assets/lables04-CXqWjKsi.png",h4="/boltfaredeal/assets/lables07-Bo55jlxk.png",m4="/boltfaredeal/assets/packaging02-CRZm2jjx.png",g4="/boltfaredeal/assets/packaging03-AuZgNdrC.png",x4="/boltfaredeal/assets/packaging04-DJsw5WMj.png",v4="/boltfaredeal/assets/print01-CHSLthKc.png",y4="/boltfaredeal/assets/print02-C9BFc1o-.png",b4="/boltfaredeal/assets/print03-D5mljvbw.png",w4="/boltfaredeal/assets/manuals01-MuTkQks1.png",k4="/boltfaredeal/assets/manuals02-DoOVhN-p.png",_4="/boltfaredeal/assets/manuals03-C3ddYgHo.png",N4="/boltfaredeal/assets/bopp-tapes01-CfxR3Cog.png",j4="/boltfaredeal/assets/bopp-tapes02-CIj6n17W.png",E4="/boltfaredeal/assets/bopp-tapes03-Dmfj9ULN.png",S4="/boltfaredeal/assets/mailer-bag01-cQ9ZedD_.png",A4="/boltfaredeal/assets/mailer-bag02-Dg7abEXx.png",C4="/boltfaredeal/assets/mailer-bag03-RVnfnCUP.png",T4="/boltfaredeal/assets/roll01-57Yyt6tW.png",P4="/boltfaredeal/assets/roll02-DFr7Ftdt.png",R4="/boltfaredeal/assets/roll03-C7UBgT_7.png",L4=["All","Diaries","Labels","Packaging","Print","Manuals","Bopp tapes","Mailer bag","Strapping roll"],Qv=[{title:"Premium Diaries",type:"Corporate Printing",category:"Diaries",image:c4},{title:"Executive Diary Collection",type:"Premium Print",category:"Diaries",image:d4},{title:"Custom Diary Printing",type:"Commercial Printing",category:"Diaries",image:u4},{title:"Product Labels",type:"Label Printing",category:"Labels",image:f4},{title:"Premium Brand Labels",type:"Packaging Print",category:"Labels",image:p4},{title:"Custom Product Labels",type:"Industrial Printing",category:"Labels",image:h4},{title:"Luxury Packaging",type:"Packaging Solutions",category:"Packaging",image:m4},{title:"Custom Packaging",type:"Commercial Packaging",category:"Packaging",image:g4},{title:"Retail Packaging",type:"Premium Packaging",category:"Packaging",image:x4},{title:"Commercial Print",type:"Offset Printing",category:"Print",image:v4},{title:"Premium Print Materials",type:"Commercial Printing",category:"Print",image:y4},{title:"Custom Print Solutions",type:"Print Production",category:"Print",image:b4},{title:"Product Manuals",type:"Instruction Printing",category:"Manuals",image:w4},{title:"Technical Manuals",type:"Commercial Print",category:"Manuals",image:k4},{title:"Instruction Manuals",type:"Print Production",category:"Manuals",image:_4},{title:"BOPP Tape",type:"Industrial Packaging",category:"Bopp tapes",image:N4},{title:"Printed BOPP Tape",type:"Custom Packaging",category:"Bopp tapes",image:j4},{title:"Packaging Tape",type:"Industrial Solutions",category:"Bopp tapes",image:E4},{title:"Mailer Bags",type:"E-Commerce Packaging",category:"Mailer bag",image:S4},{title:"Custom Mailer Bags",type:"Packaging Solutions",category:"Mailer bag",image:A4},{title:"Premium Courier Bags",type:"E-Commerce Packaging",category:"Mailer bag",image:C4},{title:"Strapping Rolls",type:"Industrial Packaging",category:"Strapping roll",image:T4},{title:"PP Strapping Rolls",type:"Packaging Materials",category:"Strapping roll",image:P4},{title:"Industrial Strapping",type:"Packaging Solutions",category:"Strapping roll",image:R4}],z4=()=>{const[a,t]=z.useState("All"),[n,i]=z.useState(0),[s,c]=z.useState(!1),u=z.useRef(null),f=z.useRef(null),p=z.useRef([]),m=z.useRef([]),g=z.useRef(null),y=z.useRef(0),v=z.useRef(!1),b=z.useMemo(()=>a==="All"?Qv:Qv.filter(S=>S.category===a),[a]),k=z.useCallback(S=>{const j=b.length;if(!j)return 0;let P=S-y.current;return P>j/2&&(P-=j),P<-j/2&&(P+=j),P},[b.length]),w=z.useCallback(S=>S===0?{x:0,y:0,scale:1,rotate:0,opacity:1,blur:0,zIndex:30}:S===-1?{x:-285,y:38,scale:.82,rotate:-6,opacity:.68,blur:0,zIndex:20}:S===1?{x:285,y:38,scale:.82,rotate:6,opacity:.68,blur:0,zIndex:20}:S===-2?{x:-460,y:90,scale:.66,rotate:-11,opacity:.28,blur:1,zIndex:10}:S===2?{x:460,y:90,scale:.66,rotate:11,opacity:.28,blur:1,zIndex:10}:{x:S>0?640:-640,y:120,scale:.55,rotate:S>0?14:-14,opacity:0,blur:3,zIndex:1},[]),N=z.useCallback(()=>{p.current.forEach((S,j)=>{if(!S)return;const P=k(j),I=w(P);Z.set(S,{xPercent:-50,x:I.x,y:I.y,scale:I.scale,rotation:I.rotate,opacity:I.opacity,zIndex:I.zIndex,filter:`blur(${I.blur}px)`}),m.current[j]&&Z.set(m.current[j],{x:0,y:0,scale:1,rotation:0})})},[k,w]),C=z.useCallback(()=>{if(!b.length)return;g.current&&g.current.kill(),c(!0),v.current=!0;const S=Z.timeline({onComplete:()=>{c(!1),v.current=!1}});p.current.forEach((j,P)=>{if(!j)return;const I=k(P),L=w(I);S.to(j,{xPercent:-50,x:L.x,y:L.y,scale:L.scale,rotation:L.rotate,opacity:L.opacity,zIndex:L.zIndex,filter:`blur(${L.blur}px)`,duration:.7,ease:"power3.out"},0)}),g.current=S},[k,w,b.length]),A=z.useCallback(S=>{if(v.current||!b.length||b.length<=1)return;const j=b.length;y.current=(y.current+S+j)%j,i(y.current),C()},[C,b.length]);return z.useEffect(()=>{y.current=0,i(0),requestAnimationFrame(()=>{N()})},[a,N]),z.useEffect(()=>{N()},[N,b.length]),z.useEffect(()=>{const S=j=>{j.key==="ArrowLeft"&&A(-1),j.key==="ArrowRight"&&A(1)};return window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)}},[A]),z.useEffect(()=>{const S=f.current;if(!S)return;const j=I=>{if(v.current)return;const L=m.current[y.current];if(!L)return;const B=S.getBoundingClientRect(),W=I.clientX-B.left,D=I.clientY-B.top,Q=W/B.width-.5,F=D/B.height-.5;Z.to(L,{x:Q*12,y:F*12,duration:.6,ease:"power2.out",overwrite:!0})},P=()=>{const I=m.current[y.current];I&&Z.to(I,{x:0,y:0,duration:.8,ease:"power3.out"})};return S.addEventListener("mousemove",j),S.addEventListener("mouseleave",P),()=>{S.removeEventListener("mousemove",j),S.removeEventListener("mouseleave",P)}},[]),z.useEffect(()=>()=>{g.current&&g.current.kill()},[]),o.jsxs("section",{ref:u,className:"fd-museum-portfolio","aria-label":"Fairdeal Print Pack portfolio",children:[o.jsx("div",{className:"fd-museum-glow fd-glow-one"}),o.jsx("div",{className:"fd-museum-glow fd-glow-two"}),o.jsxs("div",{className:"fd-portfolio-container",children:[o.jsxs("div",{className:"fd-portfolio-header",children:[o.jsxs("div",{className:"fd-portfolio-kicker",children:[o.jsx("span",{}),"OUR WORK",o.jsx("span",{})]}),o.jsxs("h2",{children:[o.jsx("span",{children:"Print"})," ",o.jsx("span",{className:"fd-title-accent-yellow",children:"That"})," ",o.jsx("span",{className:"fd-title-accent-mint",children:"Speaks."})]}),o.jsx("p",{children:"A curated selection of print and packaging solutions crafted for brands that care about every detail."})]}),o.jsx("div",{className:"fd-filter-wrapper",children:o.jsx("div",{className:"fd-filter-list",children:L4.map(S=>o.jsx("button",{type:"button",className:`fd-filter-button ${a===S?"is-active":""}`,onClick:()=>{v.current||t(S)},children:S},S))})}),o.jsxs("div",{ref:f,className:"fd-portfolio-stage",children:[o.jsxs("div",{className:"fd-stage-number",children:[o.jsx("span",{children:String(n+1).padStart(2,"0")}),o.jsx("i",{}),o.jsx("span",{children:String(b.length).padStart(2,"0")})]}),b.map((S,j)=>o.jsxs("article",{ref:P=>{p.current[j]=P},className:`fd-portfolio-card ${j===n?"is-active":""}`,children:[j===n&&o.jsxs("div",{className:"fd-active-border","aria-hidden":"true",children:[o.jsx("span",{className:"fd-border-line fd-border-top"}),o.jsx("span",{className:"fd-border-line fd-border-right"}),o.jsx("span",{className:"fd-border-line fd-border-bottom"}),o.jsx("span",{className:"fd-border-line fd-border-left"})]}),o.jsx("div",{className:"fd-card-inner",children:o.jsxs("div",{className:"fd-card-image-wrap",children:[o.jsx("img",{ref:P=>{m.current[j]=P},src:S.image,alt:S.title,className:"fd-card-image",draggable:"false"}),o.jsxs("div",{className:"fd-card-overlay",children:[o.jsx("div",{className:"fd-card-category",children:S.category}),o.jsx("h3",{children:S.title}),o.jsx("span",{className:"fd-card-type",children:S.type})]})]})})]},`${S.title}-${j}`)),o.jsxs("div",{className:"fd-stage-navigation","aria-label":"Portfolio navigation",children:[o.jsx("button",{type:"button",className:"fd-stage-nav fd-stage-nav-prev",onClick:()=>A(-1),disabled:s||b.length<=1,"aria-label":"Previous project",children:o.jsx(h1,{size:18})}),o.jsx("button",{type:"button",className:"fd-stage-nav fd-stage-nav-next",onClick:()=>A(1),disabled:s||b.length<=1,"aria-label":"Next project",children:o.jsx(Xn,{size:18})})]})]})]}),o.jsx("style",{children:`
        /* =====================================================
           ROOT
        ===================================================== */

        .fd-museum-portfolio {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;
          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;
          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--fd-bg);
          color: var(--fd-white);
          padding: 145px 0 100px;
        }


        /* =====================================================
           BACKGROUND GLOWS
        ===================================================== */

        .fd-museum-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(120px);
          opacity: 0.08;
        }

        .fd-glow-one {
          top: 5%;
          left: -250px;
          background: var(--fd-yellow);
        }

        .fd-glow-two {
          right: -250px;
          bottom: 5%;
          background: var(--fd-mint);
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .fd-portfolio-container {
          position: relative;
          width: min(1400px, calc(100% - 60px));
          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .fd-portfolio-header {
          position: relative;
          max-width: 760px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .fd-portfolio-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;

          color: var(--fd-yellow);
          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .fd-portfolio-kicker span {
          width: 30px;
          height: 1px;
          background: var(--fd-yellow);
        }

        .fd-portfolio-header h2 {
          margin: 0;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          font-size: clamp(52px, 4vw, 80px);
          font-weight: 650;
          line-height: 0.98;
          letter-spacing: -0.055em;
          white-space: nowrap;
        }

        .fd-portfolio-header h2 .fd-title-accent-yellow {
          color: var(--fd-yellow);
        }

        .fd-portfolio-header h2 .fd-title-accent-mint {
          color: var(--fd-mint);
        }

        .fd-portfolio-header p {
          max-width: 570px;
          margin: 25px auto 0;

          color: var(--fd-gray);
          font-family: Inter, sans-serif;
          font-size: 15px;
          line-height: 1.7;
        }


        /* =====================================================
           FILTERS
        ===================================================== */

        .fd-filter-wrapper {
          position: relative;
          z-index: 50;

          display: flex;
          justify-content: center;

          margin-bottom: 38px;
        }

        .fd-filter-list {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 7px;

          padding: 7px;

          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;

          background: rgba(12,20,25,0.72);
          backdrop-filter: blur(20px);
        }

        .fd-filter-button {
          border: 0;
          outline: none;

          padding: 9px 15px;

          border-radius: 999px;

          background: transparent;
          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .fd-filter-button:hover {
          color: var(--fd-white);
          transform: translateY(-1px);
        }

        .fd-filter-button.is-active {
          background: var(--fd-yellow);
          color: #05090B;
        }


        /* =====================================================
           STAGE
        ===================================================== */

        .fd-portfolio-stage {
          position: relative;
          width: 100%;
          height: 520px;
          isolation: isolate;
        }

        .fd-stage-number {
          position: absolute;
          top: 8px;
          left: 0;
          z-index: 40;

          display: flex;
          align-items: center;
          gap: 9px;

          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .fd-stage-number span:first-child {
          color: var(--fd-yellow);
        }

        .fd-stage-number i {
          width: 25px;
          height: 1px;
          background: rgba(255,255,255,0.18);
        }

        .fd-stage-hint {
          position: absolute;
          top: 8px;
          right: 0;
          z-index: 40;

          display: flex;
          align-items: center;
          gap: 8px;

          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .fd-hint-line {
          width: 22px;
          height: 1px;
          background: var(--fd-mint);
        }


        /* =====================================================
           CARD
        ===================================================== */

        .fd-portfolio-card {
          position: absolute;

          top: 0;
          left: 50%;

          width: min(570px, 45vw);
          height: 550px;

          transform-origin: center center;

          will-change:
            transform,
            opacity,
            filter;

          pointer-events: none;
        }

        .fd-portfolio-card.is-active {
          z-index: 30;
          pointer-events: auto;
        }

        .fd-card-inner {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 18px;

          background: var(--fd-panel);

          isolation: isolate;
        }

        .fd-card-image-wrap {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: inherit;
        }

        .fd-card-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          user-select: none;

          will-change: transform;

          transition:
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fd-portfolio-card.is-active:hover .fd-card-image {
          transform: scale(1.025);
        }


        /* =====================================================
           CENTER CARD GLOW
        ===================================================== */

        .fd-portfolio-card.is-active::before {
          content: "";

          position: absolute;

          inset: -18px;

          z-index: -1;

          border-radius: 30px;

          background:
            radial-gradient(
              circle at center,
              rgba(255, 223, 0, 0.12),
              transparent 62%
            );

          filter: blur(22px);

          opacity: 0.85;

          pointer-events: none;
        }


        /* =====================================================
           ANIMATED BORDER
        ===================================================== */

        .fd-active-border {
          position: absolute;

          inset: -1px;

          z-index: 50;

          overflow: hidden;

          border-radius: 19px;

          pointer-events: none;
        }

        .fd-border-line {
          position: absolute;

          display: block;

          border-radius: 999px;

          box-shadow:
            0 0 7px rgba(255, 223, 0, 0.9),
            0 0 18px rgba(255, 223, 0, 0.45),
            0 0 30px rgba(143, 231, 200, 0.2);
        }


        /* TOP */

        .fd-border-top {
          top: 0;
          left: -100%;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              var(--fd-yellow) 40%,
              var(--fd-mint) 70%,
              transparent 100%
            );

          animation:
            fdBorderTop 3.2s linear infinite;
        }


        /* RIGHT */

        .fd-border-right {
          top: -100%;
          right: 0;

          width: 2px;
          height: 100%;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              var(--fd-yellow) 40%,
              var(--fd-mint) 70%,
              transparent 100%
            );

          animation:
            fdBorderRight 3.2s linear infinite;

          animation-delay: 0.8s;
        }


        /* BOTTOM */

        .fd-border-bottom {
          right: -100%;
          bottom: 0;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              var(--fd-mint) 40%,
              var(--fd-yellow) 70%,
              transparent 100%
            );

          animation:
            fdBorderBottom 3.2s linear infinite;

          animation-delay: 1.6s;
        }


        /* LEFT */

        .fd-border-left {
          bottom: -100%;
          left: 0;

          width: 2px;
          height: 100%;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              var(--fd-mint) 40%,
              var(--fd-yellow) 70%,
              transparent 100%
            );

          animation:
            fdBorderLeft 3.2s linear infinite;

          animation-delay: 2.4s;
        }


        /* =====================================================
           BORDER KEYFRAMES
        ===================================================== */

        @keyframes fdBorderTop {
          0% {
            left: -100%;
          }

          25% {
            left: 100%;
          }

          100% {
            left: 100%;
          }
        }

        @keyframes fdBorderRight {
          0% {
            top: -100%;
          }

          25% {
            top: -100%;
          }

          50% {
            top: 100%;
          }

          100% {
            top: 100%;
          }
        }

        @keyframes fdBorderBottom {
          0% {
            right: -100%;
          }

          50% {
            right: -100%;
          }

          75% {
            right: 100%;
          }

          100% {
            right: 100%;
          }
        }

        @keyframes fdBorderLeft {
          0% {
            bottom: -100%;
          }

          75% {
            bottom: -100%;
          }

          100% {
            bottom: 100%;
          }
        }


        /* =====================================================
           CARD OVERLAY
        ===================================================== */

        .fd-card-overlay {
          position: absolute;

          inset: 0;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          padding: 32px;

          background:
            linear-gradient(
              to top,
              rgba(5, 9, 11, 0.94),
              rgba(5, 9, 11, 0.35) 48%,
              transparent 80%
            );

          opacity: 0;

          transition: opacity 0.45s ease;

          pointer-events: none;
        }

        .fd-portfolio-card.is-active .fd-card-overlay {
          opacity: 1;
        }

        .fd-card-category {
          margin-bottom: 8px;

          color: var(--fd-yellow);

          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-card-overlay h3 {
          margin: 0;

          color: var(--fd-white);

          font-family: Merriweather, serif;
          font-size: clamp(25px, 3vw, 38px);
          font-weight: 400;

          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .fd-card-type {
          margin-top: 9px;

          color: var(--fd-gray);

          font-family: Inter, sans-serif;
          font-size: 12px;
        }


        /* =====================================================
           CENTER NAVIGATION
           BUTTONS ARE INSIDE THE IMAGE
        ===================================================== */

        .fd-stage-navigation {
          position: absolute;

          inset: 0;

          z-index: 60;

          pointer-events: none;
        }

        .fd-stage-nav {
          position: absolute;

          top: 50%;

          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          border: 1px solid rgba(255,255,255,0.22);

          border-radius: 50%;

          background:
            rgba(5, 9, 11, 0.68);

          color: var(--fd-white);

          backdrop-filter: blur(12px);

          transform: translateY(-50%);

          cursor: pointer;

          pointer-events: auto;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fd-stage-nav:hover {
          background: var(--fd-yellow);
          color: #05090B;

          border-color: var(--fd-yellow);

          box-shadow:
            0 0 20px rgba(255,223,0,0.28);

          transform:
            translateY(-50%)
            scale(1.08);
        }

        .fd-stage-nav:disabled {
          opacity: 0.4;
          cursor: default;
        }

        .fd-stage-nav-prev {
          left:
            calc(
              50% - min(285px, 22.5vw) + 14px
            );
        }

        .fd-stage-nav-next {
          right:
            calc(
              50% - min(285px, 22.5vw) + 14px
            );
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1401px) {
          .fd-portfolio-stage {
            height: 690px;
          }

          .fd-portfolio-card {
            width: 600px;
            height: 620px;
          }

          .fd-stage-nav-prev {
            left: calc(50% - 300px + 16px);
          }

          .fd-stage-nav-next {
            right: calc(50% - 300px + 16px);
          }
        }


        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 1101px) and (max-width: 1400px) {
          .fd-portfolio-stage {
            height: 640px;
          }

          .fd-portfolio-card {
            width: min(570px, 48vw);
            height: 570px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(285px, 24vw) + 14px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(285px, 24vw) + 14px
              );
          }
        }


        /* =====================================================
           TABLET / SMALL DESKTOP
        ===================================================== */

        @media (min-width: 851px) and (max-width: 1100px) {
          .fd-portfolio-stage {
            height: 590px;
          }

          .fd-portfolio-card {
            width: min(510px, 54vw);
            height: 520px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(255px, 27vw) + 13px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(255px, 27vw) + 13px
              );
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 701px) and (max-width: 850px) {
          .fd-museum-portfolio {
            padding-top: 85px;
          }

          .fd-portfolio-container {
            width: min(100% - 40px, 760px);
          }

          .fd-portfolio-stage {
            height: 520px;
          }

          .fd-portfolio-card {
            width: min(510px, 64vw);
            height: 455px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(255px, 32vw) + 12px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(255px, 32vw) + 12px
              );
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .fd-museum-portfolio {
            padding: 75px 0 70px;
          }

          .fd-portfolio-container {
            width: calc(100% - 28px);
          }

          .fd-portfolio-header {
            margin-bottom: 30px;
          }

          .fd-portfolio-header h2 {
            font-size: 45px;
            white-space: normal;
          }

          .fd-portfolio-header p {
            font-size: 13px;
            line-height: 1.6;
          }

          .fd-filter-wrapper {
            margin-bottom: 25px;
          }

          .fd-filter-list {
            max-width: 100%;
            border-radius: 18px;
          }

          .fd-filter-button {
            padding: 8px 11px;
            font-size: 10px;
          }

          .fd-portfolio-stage {
            height: 430px;
          }

          .fd-portfolio-card {
            width: min(390px, 72vw);
            height: 390px;
          }

          .fd-card-inner {
            border-radius: 15px;
          }

          .fd-active-border {
            border-radius: 16px;
          }

          .fd-card-overlay {
            padding: 20px;
          }

          .fd-card-overlay h3 {
            font-size: 25px;
          }

          .fd-stage-number,
          .fd-stage-hint {
            top: -2px;
          }

          .fd-stage-hint {
            font-size: 8px;
          }

          .fd-stage-nav {
            width: 40px;
            height: 40px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(195px, 36vw) + 10px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(195px, 36vw) + 10px
              );
          }
        }


        /* =====================================================
           MOBILE 480
        ===================================================== */

        @media (min-width: 376px) and (max-width: 480px) {
          .fd-portfolio-stage {
            height: 385px;
          }

          .fd-portfolio-card {
            width: min(330px, 72vw);
            height: 345px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(165px, 36vw) + 9px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(165px, 36vw) + 9px
              );
          }

          .fd-stage-nav {
            width: 38px;
            height: 38px;
          }

          .fd-card-overlay {
            padding: 17px;
          }

          .fd-card-overlay h3 {
            font-size: 21px;
          }

          .fd-card-category {
            font-size: 9px;
          }

          .fd-card-type {
            font-size: 10px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (min-width: 376px) and (max-width: 420px) {
          .fd-portfolio-stage {
            height: 350px;
          }

          .fd-portfolio-card {
            width: min(305px, 74vw);
            height: 315px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - min(152.5px, 37vw) + 8px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - min(152.5px, 37vw) + 8px
              );
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 375px) {
          .fd-museum-portfolio {
            padding-top: 65px;
          }

          .fd-portfolio-container {
            width: calc(100% - 20px);
          }

          .fd-portfolio-header h2 {
            font-size: 45px;
          }

          .fd-portfolio-header p {
            font-size: 12px;
          }

          .fd-filter-list {
            gap: 3px;
            padding: 5px;
          }

          .fd-filter-button {
            padding: 7px 8px;
            font-size: 9px;
          }

          .fd-portfolio-stage {
            height: 330px;
          }

          .fd-portfolio-card {
            width: calc(100vw - 28px);
            height: 295px;
          }

          .fd-card-overlay {
            padding: 15px;
          }

          .fd-card-overlay h3 {
            font-size: 20px;
          }

          .fd-stage-nav {
            width: 36px;
            height: 36px;
          }

          .fd-stage-nav-prev {
            left:
              calc(
                50% - ((100vw - 28px) / 2) + 8px
              );
          }

          .fd-stage-nav-next {
            right:
              calc(
                50% - ((100vw - 28px) / 2) + 8px
              );
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .fd-border-line {
            animation: none;
          }

          .fd-card-image,
          .fd-filter-button,
          .fd-stage-nav,
          .fd-card-overlay {
            transition: none;
          }
        }
      `})]})},tu=z.forwardRef(({className:a,type:t,...n},i)=>o.jsx("input",{type:t,className:ft("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:i,...n}));tu.displayName="Input";const O4="06284836-95a7-48fa-aa0c-d85c26d822a8",I4=[{icon:ck,title:"Working Hours",lines:["Mon - Sun: 9 am - 5 pm","Weekly Off: Thursday"]},{icon:xk,title:"Phone",lines:["020 2747 4888"]},{icon:mk,title:"Email",lines:["info@fairdealprintpack.com"]},{icon:gk,title:"Address",lines:["128/2, Sanghvi Steel Compound,","Mohan Nagar, Telco Road,","Chinchwad, Pune 411019,","Maharashtra (India)."]}],M4=()=>{const[a,t]=z.useState("idle"),[n,i]=z.useState(()=>document.documentElement.getAttribute("data-theme")==="light");z.useEffect(()=>{const y=()=>{i(document.documentElement.getAttribute("data-theme")==="light")};y();const v=new MutationObserver(y);return v.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>v.disconnect()},[]);const[s,c]=z.useState({name:"",email:"",phone:"",message:""}),u=y=>{const{name:v,value:b}=y.target;c(k=>({...k,[v]:b})),a!=="sending"&&t("idle")},f=n?"linear-gradient(135deg, rgba(26,125,106,0.13), rgba(255,255,255,0.88))":"linear-gradient(135deg, rgba(146,209,188,0.12), rgba(11,16,20,0.97))",p=n?"rgba(26,125,106,0.12)":"rgba(146,209,188,0.12)",m=n?"rgba(199,183,25,0.12)":"rgba(225,222,0,0.08)",g=async y=>{if(y.preventDefault(),a!=="sending"){t("sending");try{const v=new FormData(y.currentTarget);v.set("access_key",O4);const b=await fetch("https://api.web3forms.com/submit",{method:"POST",body:v}),k=await b.json();if(!b.ok||!k.success){console.error("Contact form submission failed:",k.message||b.statusText),t("error");return}c({name:"",email:"",phone:"",message:""}),t("success")}catch(v){console.error("Contact form submission failed:",v),t("error")}}};return o.jsxs("main",{className:"relative min-h-screen overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsx("div",{className:"mx-auto max-w-[1180px] text-center",children:o.jsx(qe,{className:"mt-0 text-center md:mt-4",children:"CONTACT US"})})}),o.jsx("section",{className:"relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20",children:o.jsx("div",{className:"mx-auto max-w-[1180px]",children:o.jsxs("div",{className:"grid overflow-hidden rounded-[18px] border border-[var(--theme-border)] shadow-[0_16px_40px_rgba(0,0,0,0.06)] lg:grid-cols-[0.88fr_1.12fr]",style:{background:"var(--theme-surface)"},children:[o.jsxs("div",{"data-reveal":"left",className:"relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10",style:{background:f,borderRight:"1px solid var(--theme-border)"},children:[o.jsx("div",{className:"pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl",style:{background:p}}),o.jsx("div",{className:"pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full blur-3xl",style:{background:m}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(qe,{className:"mb-2 text-left text-[var(--theme-accent-alt)]",children:"Get In Touch"}),o.jsx("h2",{className:"max-w-[360px] [font-family:'Merriweather',Helvetica] text-[24px] font-normal leading-tight tracking-[-0.04em] sm:text-[28px]",style:{color:"var(--theme-text)"},children:"Let's talk about your next project."}),o.jsx("p",{className:"mt-3 max-w-[380px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Whether you need a quotation, have a question about our services, or want to discuss a custom requirement, our team is ready to help."})]}),o.jsx("div",{className:"relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1",children:I4.map(y=>{const v=y.icon;return o.jsxs("div",{className:"group flex items-start gap-3",children:[o.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105",style:{borderColor:"var(--theme-border)",background:n?"rgba(26,125,106,0.08)":"rgba(146,209,188,0.08)",color:"var(--theme-accent)"},children:o.jsx(v,{className:"h-4 w-4"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.12em]",style:{color:"var(--theme-accent-alt)"},children:y.title}),o.jsx("div",{className:"mt-1",children:y.lines.map(b=>o.jsx("p",{className:"[font-family:'Inter',Helvetica] text-sm font-light leading-5",style:{color:"var(--theme-text-soft)"},children:b},b))})]})]},y.title)})})]}),o.jsxs("div",{"data-reveal":"right",className:"p-6 sm:p-8 lg:p-10",style:{background:"var(--theme-bg)"},children:[o.jsxs("div",{className:"mb-7",children:[o.jsx(qe,{className:"mb-2 text-left text-[var(--theme-accent-alt)]",children:"Send us a Message"}),o.jsx("h2",{className:"[font-family:'Merriweather',Helvetica] text-[24px] font-normal tracking-[-0.04em] sm:text-[28px]",style:{color:"var(--theme-text)"},children:"We'd love to hear from you."}),o.jsx("p",{className:"mt-2 max-w-[520px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Fill out the form below and our team will get back to you as soon as possible."})]}),o.jsxs("form",{onSubmit:g,className:"flex flex-col gap-5",children:[o.jsx("input",{type:"hidden",name:"subject",value:"New contact form message - Fairdeal Print Pack"}),o.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"name",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Name"}),o.jsx(tu,{id:"name",name:"name",type:"text",required:!0,value:s.name,onChange:u,placeholder:"Your full name",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"email",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Email"}),o.jsx(tu,{id:"email",name:"email",type:"email",required:!0,value:s.email,onChange:u,placeholder:"your@email.com",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"phone",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Phone"}),o.jsx(tu,{id:"phone",name:"phone",type:"tel",value:s.phone,onChange:u,placeholder:"Your phone number",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"message",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Message"}),o.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:s.message,onChange:u,placeholder:"Tell us about your project...",className:"w-full resize-none rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)] transition-colors duration-300 focus:border-[var(--theme-accent)] focus:ring-1 focus:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between",children:[a!=="idle"&&o.jsxs("p",{"aria-live":"polite",role:a==="error"?"alert":"status",className:"text-xs",style:{color:a==="error"?"#ef4444":"var(--theme-text-soft)"},children:[a==="sending"&&"Sending your message...",a==="success"&&"Thank you. We'll get back to you soon.",a==="error"&&"We couldn't send your message. Please try again."]}),o.jsxs(Ft,{type:"submit",disabled:a==="sending",className:"h-11 px-6 text-sm font-semibold",children:[a==="sending"?"Sending...":a==="success"?"Message Sent":"Send Message",a!=="sending"&&a!=="success"&&o.jsx(vk,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})]})]})})}),o.jsx("section",{className:"relative z-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8",children:o.jsx("div",{className:"mx-auto max-w-[1180px]",children:o.jsx("div",{"data-reveal":"up",className:"group relative h-[260px] overflow-hidden rounded-[16px] border sm:h-[320px] lg:h-[360px]",style:{borderColor:"var(--theme-border)",background:"var(--theme-surface)"},children:o.jsx("iframe",{title:"Fairdeal Print Pack Location",src:"https://www.google.com/maps?q=Fairdeal%20Print%20Pack%2C%20Mohanagar%2C%20Chinchwad%2C%20Pune%20411033&output=embed",className:"h-full w-full border-0 grayscale transition-all duration-700 group-hover:grayscale-0",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})})})]})},F4=()=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px]",children:[o.jsxs("div",{className:"mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-[620px]",children:[o.jsx(qe,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"OUR TECHNOLOGY"}),o.jsx("h1",{className:"text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl lg:text-[3.1rem]",children:"Technology & Infrastructure"})]}),o.jsxs("div",{className:"flex flex-col gap-4 lg:max-w-[520px] lg:items-end",children:[o.jsx("p",{className:"max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Advanced printing, finishing, and packaging technology built to deliver precision, consistency, and high-quality results."}),o.jsx(Ft,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})]})]}),o.jsx("div",{className:"grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3",children:yS.map(a=>o.jsxs(Sn,{to:"/technology",className:"group block",children:[o.jsx("article",{className:`\r
                  service-card\r
                  relative\r
                  h-[420px]\r
                  overflow-hidden\r
                  rounded-[28px]\r
                  border-0\r
                  shadow-[0_20px_50px_rgba(0,0,0,0.12)]\r
                  transition-transform\r
                  duration-500\r
                  group-hover:-translate-y-1\r
\r
                  bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.30)_100%)]\r
                `,children:o.jsx("img",{src:a.image,alt:a.title,loading:"lazy",className:`\r
                    absolute\r
                    inset-0\r
                    h-full\r
                    w-full\r
                    scale-105\r
                    object-contain\r
                    transition-transform\r
                    duration-700\r
                    ease-out\r
                    group-hover:scale-100\r
                  `})}),o.jsx("div",{className:"px-1 pt-5",children:o.jsx("div",{className:"flex items-start justify-between gap-4",children:o.jsxs("div",{className:"min-w-0",children:[o.jsx("h2",{className:`\r
                        text-lg\r
                        font-medium\r
                        leading-tight\r
                        tracking-[-0.02em]\r
                        text-[var(--theme-text)]\r
                        sm:text-xl\r
                      `,children:a.title}),a.features?.length>0&&o.jsx("ul",{className:"mt-3 space-y-1.5",children:a.features.slice(0,3).map(t=>o.jsxs("li",{className:`\r
                              flex\r
                              items-start\r
                              gap-2\r
                              text-xs\r
                              leading-5\r
                              text-[var(--theme-text-soft)]\r
                              sm:text-sm\r
                            `,children:[o.jsx("span",{className:`\r
                                mt-[7px]\r
                                h-1.5\r
                                w-1.5\r
                                shrink-0\r
                                rounded-full\r
                                bg-[var(--theme-accent)]\r
                              `}),o.jsx("span",{children:t})]},t))})]})})})]},a.title))})]})}),D4=[{title:"1. Acceptance of Terms",body:"By accessing or using the Fairdeal Print Pack website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services."},{title:"2. Our Services",body:"Fairdeal Print Pack provides printing, packaging, paper supply, labeling, corrugated products, BOPP tapes, and related production services. Service availability, specifications, pricing, timelines, and delivery terms may vary by project and will be confirmed through our direct quotation or written agreement."},{title:"3. Quotations and Orders",body:"All quotations are subject to confirmation and may be updated based on material availability, artwork requirements, quantity, specifications, or production constraints. An order is considered accepted only after written confirmation from Fairdeal Print Pack. Any change to scope, quantity, delivery date, or specifications must be approved in writing."},{title:"4. Client Responsibilities",body:"Clients are responsible for providing accurate requirements, final artwork, approved content, dimensions, material specifications, and any copyright or trademark permissions required for the project. Fairdeal Print Pack may request clarification before production begins. We are not responsible for delays caused by incomplete, inaccurate, or late client information."},{title:"5. Artwork, Copyright, and Intellectual Property",body:"Clients must ensure that all supplied artwork, text, images, logos, and other materials are authorized for use. Fairdeal Print Pack does not claim ownership of client-provided content. However, Fairdeal Print Pack remains the owner of its website content, branding, templates, photographs, and proprietary production materials unless otherwise agreed."},{title:"6. Production and Delivery",body:"Production timelines are estimates and may be affected by material sourcing, machine availability, order volume, quality checks, transportation, or circumstances beyond our reasonable control. Fairdeal Print Pack will make reasonable efforts to meet agreed deadlines but cannot guarantee exact delivery dates."},{title:"7. Payment Terms",body:"Payment terms will be stated in the relevant quotation or agreement. Pending or overdue payments may result in suspension of production or delivery. Clients are responsible for any applicable taxes, duties, or charges not expressly included in the quotation."},{title:"8. Limitation of Liability",body:"Fairdeal Print Pack will use reasonable care and professional standards in performing its services. Our liability for any claim is limited to the fees paid for the specific service giving rise to the claim, except where liability cannot be excluded under applicable law. We shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of business, reputation, or anticipated profits."},{title:"9. Customer Communications",body:"By contacting Fairdeal Print Pack through the website, telephone, email, or other channels, you agree that we may use the information provided to respond to your inquiry, provide services, and communicate about your project. We will handle personal information in accordance with our Privacy Policy."},{title:"10. Website Use",body:"The website may be used for lawful purposes only. You must not attempt to interfere with its operation, access restricted areas, introduce harmful software, or use the site in a manner that could damage, disable, or impair our services or infrastructure."},{title:"11. Changes to These Terms",body:"Fairdeal Print Pack may update these Terms and Conditions from time to time. Continued use of the website after changes are published indicates acceptance of the revised terms."},{title:"12. Governing Law",body:"These Terms and Conditions are governed by the laws of India, and any dispute relating to them will be subject to the jurisdiction of the courts located in Pune, Maharashtra, unless otherwise required by applicable law."}],B4=()=>{const[a,t]=z.useState(()=>document.documentElement.getAttribute("data-theme")==="light");z.useEffect(()=>{const i=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};i();const s=new MutationObserver(i);return s.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>s.disconnect()},[]);const n=a?"linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))":"linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";return o.jsxs("main",{className:"min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] text-center",children:[o.jsx(qe,{className:"mt-0 text-center md:mt-4",children:"LEGAL INFORMATION"}),o.jsx("h1",{className:"mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]",children:"Terms & Conditions"}),o.jsx("p",{className:"mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"These terms govern your use of the Fairdeal Print Pack website and the services we provide."})]})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]",style:{background:n},children:[o.jsxs("div",{className:"grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12",children:[o.jsxs("div",{className:"pb-5 lg:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:"Effective date"}),o.jsx("p",{className:"mt-2 text-sm text-[var(--theme-text-soft)]",children:"October 7, 2026"})]}),o.jsx("div",{className:"lg:border-l lg:border-[var(--theme-border)] lg:pl-10",children:o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)]",children:"Please review these terms carefully before using our website or engaging with our business. By using our website or placing an enquiry, you agree to these terms unless you have a separate written agreement with Fairdeal Print Pack that supersedes them."})})]}),o.jsx("div",{className:"space-y-7 p-6 sm:p-10 lg:p-12",children:D4.map((i,s)=>o.jsxs("article",{className:"border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:String(s+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl",children:i.title}),o.jsx("p",{className:"mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:i.body})]},i.title))})]})})]})},U4=[{title:"1. Information We Collect",body:"We may collect information you provide directly, such as your name, email address, phone number, company name, project requirements, and message. We may also collect technical information about your device, browser, IP address, referring website, pages visited, and interaction with our website."},{title:"2. How We Use Information",body:"We use personal information to respond to enquiries, provide quotations, discuss projects, manage service requests, improve our website, communicate with customers, and comply with applicable legal obligations. We may also use contact information to send service updates or relevant business communications when you have consented or where such communication is permitted by law."},{title:"3. Information Sharing",body:"We do not sell personal information. We may share information with trusted service providers who assist us with website hosting, email delivery, analytics, customer support, logistics, or business operations, provided they use the information only for the agreed purpose and protect it appropriately. We may disclose information when required by law, court order, regulatory request, or to protect the rights or safety of our customers, staff, or business."},{title:"4. Cookies and Analytics",body:"Our website may use cookies or similar technologies to remember preferences, understand website usage, improve performance, and provide a better user experience. You can configure your browser to reject or delete cookies, although some website features may not function correctly if cookies are disabled."},{title:"5. Data Security",body:"We use reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, use, disclosure, alteration, or destruction. No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security."},{title:"6. Your Rights",body:"Depending on applicable law, you may have the right to access, correct, update, delete, or restrict the use of your personal information. You may also object to certain processing or request a copy of the information we hold about you. To exercise these rights, please contact us using the details at the end of this policy."},{title:"7. Retention",body:"We retain personal information only for as long as necessary to fulfill the purpose for which it was collected, satisfy legal or regulatory obligations, resolve disputes, or enforce agreements. Information no longer required for those purposes may be securely deleted or anonymized."},{title:"8. Third-Party Websites",body:"Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those external websites. Please review their privacy policies before providing them with your information."},{title:"9. Children's Privacy",body:"Our website is not directed to children under the age of 18, and we do not knowingly collect personal information from children without appropriate parental or guardian consent. If we become aware that we have received personal information from a child without valid consent, we will take steps to delete it."},{title:"10. Changes to This Policy",body:"Fairdeal Print Pack may update this Privacy Policy from time to time. We will publish the updated version on this page with a revised effective date. Continued use of the website after changes are made indicates your acceptance of the revised policy."},{title:"11. Contact Us",body:"If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact Fairdeal Print Pack at info@fairdealprintpack.com or 020 2747 4888. You may also contact us at Fairdeal Print Pack, Mohanagar, Chinchwad 411033."}],W4=()=>{const[a,t]=z.useState(()=>document.documentElement.getAttribute("data-theme")==="light");z.useEffect(()=>{const i=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};i();const s=new MutationObserver(i);return s.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>s.disconnect()},[]);const n=a?"linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))":"linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";return o.jsxs("main",{className:"min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] text-center",children:[o.jsx(qe,{className:"mt-0 text-center md:mt-4",children:"PRIVACY NOTICE"}),o.jsx("h1",{className:"mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]",children:"Privacy Policy"}),o.jsx("p",{className:"mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"This policy explains how Fairdeal Print Pack collects, uses, and protects information provided through our website and business communications."})]})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]",style:{background:n},children:[o.jsxs("div",{className:"grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12",children:[o.jsxs("div",{className:"pb-5 lg:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:"Effective date"}),o.jsx("p",{className:"mt-2 text-sm text-[var(--theme-text-soft)]",children:"October 7, 2026"})]}),o.jsx("div",{className:"lg:border-l lg:border-[var(--theme-border)] lg:pl-10",children:o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)]",children:"We respect your privacy and are committed to handling your personal information responsibly. This policy applies to information collected through our website and direct communications with Fairdeal Print Pack."})})]}),o.jsx("div",{className:"space-y-7 p-6 sm:p-10 lg:p-12",children:U4.map((i,s)=>o.jsxs("article",{className:"border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:String(s+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl",children:i.title}),o.jsx("p",{className:"mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:i.body})]},i.title))})]})})]})},Bb=document.getElementById("app");if(!Bb)throw new Error("App root element not found");O2.createRoot(Bb).render(o.jsx(z.StrictMode,{children:o.jsx(O5,{children:o.jsx(S5,{children:o.jsxs(kn,{element:o.jsx(g_,{}),children:[o.jsx(kn,{path:"/",element:o.jsx(cv,{})}),o.jsx(kn,{path:"/about",element:o.jsx(qE,{})}),o.jsx(kn,{path:"/services",element:o.jsx(bS,{})}),o.jsx(kn,{path:"/services/:serviceName",element:o.jsx(l4,{})}),o.jsx(kn,{path:"/technology",element:o.jsx(F4,{})}),o.jsx(kn,{path:"/portfolio",element:o.jsx(z4,{})}),o.jsx(kn,{path:"/contact",element:o.jsx(M4,{})}),o.jsx(kn,{path:"/terms-and-conditions",element:o.jsx(B4,{})}),o.jsx(kn,{path:"/privacy-policy",element:o.jsx(W4,{})}),o.jsx(kn,{path:"*",element:o.jsx(cv,{})})]})})})}));
