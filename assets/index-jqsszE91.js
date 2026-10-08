function F2(a,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in a)){const c=Object.getOwnPropertyDescriptor(i,s);c&&Object.defineProperty(a,s,c.get?c:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function D2(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _p={exports:{}},hl={},kp={exports:{}},De={};var ux;function B2(){if(ux)return De;ux=1;var a=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,w={};function k(T,Y,se){this.props=T,this.context=Y,this.refs=w,this.updater=se||b}k.prototype.isReactComponent={},k.prototype.setState=function(T,Y){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Y,"setState")},k.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function C(){}C.prototype=k.prototype;function A(T,Y,se){this.props=T,this.context=Y,this.refs=w,this.updater=se||b}var E=A.prototype=new C;E.constructor=A,N(E,k.prototype),E.isPureReactComponent=!0;var j=Array.isArray,P=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function B(T,Y,se){var le,ge={},K=null,ue=null;if(Y!=null)for(le in Y.ref!==void 0&&(ue=Y.ref),Y.key!==void 0&&(K=""+Y.key),Y)P.call(Y,le)&&!O.hasOwnProperty(le)&&(ge[le]=Y[le]);var ye=arguments.length-2;if(ye===1)ge.children=se;else if(1<ye){for(var xe=Array(ye),Me=0;Me<ye;Me++)xe[Me]=arguments[Me+2];ge.children=xe}if(T&&T.defaultProps)for(le in ye=T.defaultProps,ye)ge[le]===void 0&&(ge[le]=ye[le]);return{$$typeof:a,type:T,key:K,ref:ue,props:ge,_owner:z.current}}function W(T,Y){return{$$typeof:a,type:T.type,key:Y,ref:T.ref,props:T.props,_owner:T._owner}}function D(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function Q(T){var Y={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(se){return Y[se]})}var F=/\/+/g;function J(T,Y){return typeof T=="object"&&T!==null&&T.key!=null?Q(""+T.key):Y.toString(36)}function Z(T,Y,se,le,ge){var K=typeof T;(K==="undefined"||K==="boolean")&&(T=null);var ue=!1;if(T===null)ue=!0;else switch(K){case"string":case"number":ue=!0;break;case"object":switch(T.$$typeof){case a:case t:ue=!0}}if(ue)return ue=T,ge=ge(ue),T=le===""?"."+J(ue,0):le,j(ge)?(se="",T!=null&&(se=T.replace(F,"$&/")+"/"),Z(ge,Y,se,"",function(Me){return Me})):ge!=null&&(D(ge)&&(ge=W(ge,se+(!ge.key||ue&&ue.key===ge.key?"":(""+ge.key).replace(F,"$&/")+"/")+T)),Y.push(ge)),1;if(ue=0,le=le===""?".":le+":",j(T))for(var ye=0;ye<T.length;ye++){K=T[ye];var xe=le+J(K,ye);ue+=Z(K,Y,se,xe,ge)}else if(xe=v(T),typeof xe=="function")for(T=xe.call(T),ye=0;!(K=T.next()).done;)K=K.value,xe=le+J(K,ye++),ue+=Z(K,Y,se,xe,ge);else if(K==="object")throw Y=String(T),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return ue}function ae(T,Y,se){if(T==null)return T;var le=[],ge=0;return Z(T,le,"","",function(K){return Y.call(se,K,ge++)}),le}function ce(T){if(T._status===-1){var Y=T._result;Y=Y(),Y.then(function(se){(T._status===0||T._status===-1)&&(T._status=1,T._result=se)},function(se){(T._status===0||T._status===-1)&&(T._status=2,T._result=se)}),T._status===-1&&(T._status=0,T._result=Y)}if(T._status===1)return T._result.default;throw T._result}var $={current:null},V={transition:null},X={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:V,ReactCurrentOwner:z};function S(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:ae,forEach:function(T,Y,se){ae(T,function(){Y.apply(this,arguments)},se)},count:function(T){var Y=0;return ae(T,function(){Y++}),Y},toArray:function(T){return ae(T,function(Y){return Y})||[]},only:function(T){if(!D(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},De.Component=k,De.Fragment=n,De.Profiler=s,De.PureComponent=A,De.StrictMode=i,De.Suspense=p,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,De.act=S,De.cloneElement=function(T,Y,se){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var le=N({},T.props),ge=T.key,K=T.ref,ue=T._owner;if(Y!=null){if(Y.ref!==void 0&&(K=Y.ref,ue=z.current),Y.key!==void 0&&(ge=""+Y.key),T.type&&T.type.defaultProps)var ye=T.type.defaultProps;for(xe in Y)P.call(Y,xe)&&!O.hasOwnProperty(xe)&&(le[xe]=Y[xe]===void 0&&ye!==void 0?ye[xe]:Y[xe])}var xe=arguments.length-2;if(xe===1)le.children=se;else if(1<xe){ye=Array(xe);for(var Me=0;Me<xe;Me++)ye[Me]=arguments[Me+2];le.children=ye}return{$$typeof:a,type:T.type,key:ge,ref:K,props:le,_owner:ue}},De.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:c,_context:T},T.Consumer=T},De.createElement=B,De.createFactory=function(T){var Y=B.bind(null,T);return Y.type=T,Y},De.createRef=function(){return{current:null}},De.forwardRef=function(T){return{$$typeof:f,render:T}},De.isValidElement=D,De.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:ce}},De.memo=function(T,Y){return{$$typeof:m,type:T,compare:Y===void 0?null:Y}},De.startTransition=function(T){var Y=V.transition;V.transition={};try{T()}finally{V.transition=Y}},De.unstable_act=S,De.useCallback=function(T,Y){return $.current.useCallback(T,Y)},De.useContext=function(T){return $.current.useContext(T)},De.useDebugValue=function(){},De.useDeferredValue=function(T){return $.current.useDeferredValue(T)},De.useEffect=function(T,Y){return $.current.useEffect(T,Y)},De.useId=function(){return $.current.useId()},De.useImperativeHandle=function(T,Y,se){return $.current.useImperativeHandle(T,Y,se)},De.useInsertionEffect=function(T,Y){return $.current.useInsertionEffect(T,Y)},De.useLayoutEffect=function(T,Y){return $.current.useLayoutEffect(T,Y)},De.useMemo=function(T,Y){return $.current.useMemo(T,Y)},De.useReducer=function(T,Y,se){return $.current.useReducer(T,Y,se)},De.useRef=function(T){return $.current.useRef(T)},De.useState=function(T){return $.current.useState(T)},De.useSyncExternalStore=function(T,Y,se){return $.current.useSyncExternalStore(T,Y,se)},De.useTransition=function(){return $.current.useTransition()},De.version="18.3.1",De}var fx;function Dh(){return fx||(fx=1,kp.exports=B2()),kp.exports}var px;function U2(){if(px)return hl;px=1;var a=Dh(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var g,y={},v=null,b=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(b=p.ref);for(g in p)i.call(p,g)&&!c.hasOwnProperty(g)&&(y[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)y[g]===void 0&&(y[g]=p[g]);return{$$typeof:t,type:f,key:v,ref:b,props:y,_owner:s.current}}return hl.Fragment=n,hl.jsx=d,hl.jsxs=d,hl}var hx;function W2(){return hx||(hx=1,_p.exports=U2()),_p.exports}var o=W2(),R=Dh();const ma=D2(R),$v=F2({__proto__:null,default:ma},[R]);var Nd={},jp={exports:{}},Fr={},Ep={exports:{}},Sp={};var mx;function H2(){return mx||(mx=1,(function(a){function t(V,X){var S=V.length;V.push(X);e:for(;0<S;){var T=S-1>>>1,Y=V[T];if(0<s(Y,X))V[T]=X,V[S]=Y,S=T;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var X=V[0],S=V.pop();if(S!==X){V[0]=S;e:for(var T=0,Y=V.length,se=Y>>>1;T<se;){var le=2*(T+1)-1,ge=V[le],K=le+1,ue=V[K];if(0>s(ge,S))K<Y&&0>s(ue,ge)?(V[T]=ue,V[K]=S,T=K):(V[T]=ge,V[le]=S,T=le);else if(K<Y&&0>s(ue,S))V[T]=ue,V[K]=S,T=K;else break e}}return X}function s(V,X){var S=V.sortIndex-X.sortIndex;return S!==0?S:V.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();a.unstable_now=function(){return d.now()-f}}var p=[],m=[],g=1,y=null,v=3,b=!1,N=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var X=n(m);X!==null;){if(X.callback===null)i(m);else if(X.startTime<=V)i(m),X.sortIndex=X.expirationTime,t(p,X);else break;X=n(m)}}function j(V){if(w=!1,E(V),!N)if(n(p)!==null)N=!0,ce(P);else{var X=n(m);X!==null&&$(j,X.startTime-V)}}function P(V,X){N=!1,w&&(w=!1,C(B),B=-1),b=!0;var S=v;try{for(E(X),y=n(p);y!==null&&(!(y.expirationTime>X)||V&&!Q());){var T=y.callback;if(typeof T=="function"){y.callback=null,v=y.priorityLevel;var Y=T(y.expirationTime<=X);X=a.unstable_now(),typeof Y=="function"?y.callback=Y:y===n(p)&&i(p),E(X)}else i(p);y=n(p)}if(y!==null)var se=!0;else{var le=n(m);le!==null&&$(j,le.startTime-X),se=!1}return se}finally{y=null,v=S,b=!1}}var z=!1,O=null,B=-1,W=5,D=-1;function Q(){return!(a.unstable_now()-D<W)}function F(){if(O!==null){var V=a.unstable_now();D=V;var X=!0;try{X=O(!0,V)}finally{X?J():(z=!1,O=null)}}else z=!1}var J;if(typeof A=="function")J=function(){A(F)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ae=Z.port2;Z.port1.onmessage=F,J=function(){ae.postMessage(null)}}else J=function(){k(F,0)};function ce(V){O=V,z||(z=!0,J())}function $(V,X){B=k(function(){V(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_continueExecution=function(){N||b||(N=!0,ce(P))},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(V){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var S=v;v=X;try{return V()}finally{v=S}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var S=v;v=V;try{return X()}finally{v=S}},a.unstable_scheduleCallback=function(V,X,S){var T=a.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?T+S:T):S=T,V){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=S+Y,V={id:g++,callback:X,priorityLevel:V,startTime:S,expirationTime:Y,sortIndex:-1},S>T?(V.sortIndex=S,t(m,V),n(p)===null&&V===n(m)&&(w?(C(B),B=-1):w=!0,$(j,S-T))):(V.sortIndex=Y,t(p,V),N||b||(N=!0,ce(P))),V},a.unstable_shouldYield=Q,a.unstable_wrapCallback=function(V){var X=v;return function(){var S=v;v=X;try{return V.apply(this,arguments)}finally{v=S}}}})(Sp)),Sp}var gx;function V2(){return gx||(gx=1,Ep.exports=H2()),Ep.exports}var xx;function Y2(){if(xx)return Fr;xx=1;var a=Dh(),t=V2();function n(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function c(e,r){d(e,r),d(e+"Capture",r)}function d(e,r){for(s[e]=r,e=0;e<r.length;e++)i.add(r[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(e){return p.call(y,e)?!0:p.call(g,e)?!1:m.test(e)?y[e]=!0:(g[e]=!0,!1)}function b(e,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,r,l,u){if(r===null||typeof r>"u"||b(e,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(e,r,l,u,h,x,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=e,this.type=r,this.sanitizeURL=x,this.removeEmptyString=_}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];k[r]=new w(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(C,A);k[r]=new w(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(C,A);k[r]=new w(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(C,A);k[r]=new w(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function E(e,r,l,u){var h=k.hasOwnProperty(r)?k[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(N(r,l,h,u)&&(l=null),u||h===null?v(r)&&(l===null?e.removeAttribute(r):e.setAttribute(r,""+l)):h.mustUseProperty?e[h.propertyName]=l===null?h.type===3?!1:"":l:(r=h.attributeName,u=h.attributeNamespace,l===null?e.removeAttribute(r):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,u?e.setAttributeNS(u,r,l):e.setAttribute(r,l))))}var j=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),Q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),V=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,T;function Y(e){if(T===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+e}var se=!1;function le(e,r){if(!e||se)return"";se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(G){var u=G}Reflect.construct(e,[],r)}else{try{r.call()}catch(G){u=G}e.call(r.prototype)}else{try{throw Error()}catch(G){u=G}e()}}catch(G){if(G&&u&&typeof G.stack=="string"){for(var h=G.stack.split(`
`),x=u.stack.split(`
`),_=h.length-1,L=x.length-1;1<=_&&0<=L&&h[_]!==x[L];)L--;for(;1<=_&&0<=L;_--,L--)if(h[_]!==x[L]){if(_!==1||L!==1)do if(_--,L--,0>L||h[_]!==x[L]){var I=`
`+h[_].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=_&&0<=L);break}}}finally{se=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?Y(e):""}function ge(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case z:return"Portal";case W:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case Z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Q:return(e.displayName||"Context")+".Consumer";case D:return(e._context.displayName||"Context")+".Provider";case F:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return r=e.displayName||null,r!==null?r:K(e.type)||"Memo";case ce:r=e._payload,e=e._init;try{return K(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Me(e){var r=xe(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),u=""+e[r];if(!e.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,x=l.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){u=""+_,x.call(this,_)}}),Object.defineProperty(e,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function bt(e){e._valueTracker||(e._valueTracker=Me(e))}function St(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return e&&(u=xe(e)?e.checked?"true":"false":e.value),e=u,e!==l?(r.setValue(e),!0):!1}function ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,r){var l=r.checked;return S({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function it(e,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=ye(r.value!=null?r.value:l),e._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function wt(e,r){r=r.checked,r!=null&&E(e,"checked",r,!1)}function q(e,r){wt(e,r);var l=ye(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?qr(e,r.type,l):r.hasOwnProperty("defaultValue")&&qr(e,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ar(e,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,l||r===e.value||(e.value=r),e.defaultValue=r}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function qr(e,r,l){(r!=="number"||ne(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var Cr=Array.isArray;function Qe(e,r,l,u){if(e=e.options,r){r={};for(var h=0;h<l.length;h++)r["$"+l[h]]=!0;for(l=0;l<e.length;l++)h=r.hasOwnProperty("$"+e[l].value),e[l].selected!==h&&(e[l].selected=h),h&&u&&(e[l].defaultSelected=!0)}else{for(l=""+ye(l),r=null,h=0;h<e.length;h++){if(e[h].value===l){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Xr(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return S({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function On(e,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(n(92));if(Cr(l)){if(1<l.length)throw Error(n(93));l=l[0]}r=l}r==null&&(r=""),l=r}e._wrapperState={initialValue:ye(l)}}function Zn(e,r){var l=ye(r.value),u=ye(r.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),r.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),u!=null&&(e.defaultValue=""+u)}function At(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function In(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?In(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,gr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,h){MSApp.execUnsafeLocalFunction(function(){return e(r,l,u,h)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function xr(e,r){if(r){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=r;return}}e.textContent=r}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nt=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Nt.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),zn[r]=zn[e]})});function Fa(e,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||zn.hasOwnProperty(e)&&zn[e]?(""+r).trim():r+"px"}function hn(e,r){e=e.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,h=Fa(l,r[l],u);l==="float"&&(l="cssFloat"),u?e.setProperty(l,h):e[l]=h}}var Hi=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $n(e,r){if(r){if(Hi[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function mn(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mn=null;function Re(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Yt=null,Gt=null;function Tr(e){if(e=$o(e)){if(typeof Fn!="function")throw Error(n(280));var r=e.stateNode;r&&(r=Mc(r),Fn(e.stateNode,e.type,r))}}function ei(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function xi(){if(Yt){var e=Yt,r=Gt;if(Gt=Yt=null,Tr(e),r)for(e=0;e<r.length;e++)Tr(r[e])}}function gn(e,r){return e(r)}function Vi(){}var Te=!1;function _e(e,r,l){if(Te)return e(r,l);Te=!0;try{return gn(e,r,l)}finally{Te=!1,(Yt!==null||Gt!==null)&&(Vi(),xi())}}function We(e,r){var l=e.stateNode;if(l===null)return null;var u=Mc(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(n(231,r,typeof l));return l}var de=!1;if(f)try{var Se={};Object.defineProperty(Se,"passive",{get:function(){de=!0}}),window.addEventListener("test",Se,Se),window.removeEventListener("test",Se,Se)}catch{de=!1}function we(e,r,l,u,h,x,_,L,I){var G=Array.prototype.slice.call(arguments,3);try{r.apply(l,G)}catch(te){this.onError(te)}}var Ae=!1,pt=null,Ie=!1,st=null,qt={onError:function(e){Ae=!0,pt=e}};function dt(e,r,l,u,h,x,_,L,I){Ae=!1,pt=null,we.apply(qt,arguments)}function et(e,r,l,u,h,x,_,L,I){if(dt.apply(this,arguments),Ae){if(Ae){var G=pt;Ae=!1,pt=null}else throw Error(n(198));Ie||(Ie=!0,st=G)}}function He(e){var r=e,l=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(l=r.return),e=r.return;while(e)}return r.tag===3?l:null}function Pr(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function tt(e){if(He(e)!==e)throw Error(n(188))}function vr(e){var r=e.alternate;if(!r){if(r=He(e),r===null)throw Error(n(188));return r!==e?null:e}for(var l=e,u=r;;){var h=l.return;if(h===null)break;var x=h.alternate;if(x===null){if(u=h.return,u!==null){l=u;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===l)return tt(h),e;if(x===u)return tt(h),r;x=x.sibling}throw Error(n(188))}if(l.return!==u.return)l=h,u=x;else{for(var _=!1,L=h.child;L;){if(L===l){_=!0,l=h,u=x;break}if(L===u){_=!0,u=h,l=x;break}L=L.sibling}if(!_){for(L=x.child;L;){if(L===l){_=!0,l=x,u=h;break}if(L===u){_=!0,u=x,l=h;break}L=L.sibling}if(!_)throw Error(n(189))}}if(l.alternate!==u)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?e:r}function Qr(e){return e=vr(e),e!==null?Ot(e):null}function Ot(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ot(e);if(r!==null)return r;e=e.sibling}return null}var It=t.unstable_scheduleCallback,Bt=t.unstable_cancelCallback,vi=t.unstable_shouldYield,js=t.unstable_requestPaint,Fe=t.unstable_now,Ct=t.unstable_getCurrentPriorityLevel,Rr=t.unstable_ImmediatePriority,Es=t.unstable_UserBlockingPriority,Da=t.unstable_NormalPriority,Ba=t.unstable_LowPriority,Kr=t.unstable_IdlePriority,ti=null,yr=null;function ri(e){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:rw,ew=Math.log,tw=Math.LN2;function rw(e){return e>>>=0,e===0?32:31-(ew(e)/tw|0)|0}var yc=64,bc=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wc(e,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes,_=l&268435455;if(_!==0){var L=_&~h;L!==0?u=Io(L):(x&=_,x!==0&&(u=Io(x)))}else _=l&~h,_!==0?u=Io(_):x!==0&&(u=Io(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,x=r&-r,h>=x||h===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=u;0<r;)l=31-Dn(r),h=1<<l,u|=e[l],r&=~h;return u}function nw(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iw(e,r){for(var l=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,x=e.pendingLanes;0<x;){var _=31-Dn(x),L=1<<_,I=h[_];I===-1?((L&l)===0||(L&u)!==0)&&(h[_]=nw(L,r)):I<=r&&(e.expiredLanes|=L),x&=~L}}function Hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wm(){var e=yc;return yc<<=1,(yc&4194240)===0&&(yc=64),e}function Vu(e){for(var r=[],l=0;31>l;l++)r.push(e);return r}function zo(e,r,l){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Dn(r),e[r]=l}function aw(e,r){var l=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<l;){var h=31-Dn(l),x=1<<h;r[h]=0,u[h]=-1,e[h]=-1,l&=~x}}function Yu(e,r){var l=e.entangledLanes|=r;for(e=e.entanglements;l;){var u=31-Dn(l),h=1<<u;h&r|e[u]&r&&(e[u]|=r),l&=~h}}var Ke=0;function Hm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vm,Gu,Ym,Gm,qm,qu=!1,Nc=[],Yi=null,Gi=null,qi=null,Mo=new Map,Fo=new Map,Xi=[],sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(e,r){switch(e){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Mo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(r.pointerId)}}function Do(e,r,l,u,h,x){return e===null||e.nativeEvent!==x?(e={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[h]},r!==null&&(r=$o(r),r!==null&&Gu(r)),e):(e.eventSystemFlags|=u,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function ow(e,r,l,u,h){switch(r){case"focusin":return Yi=Do(Yi,e,r,l,u,h),!0;case"dragenter":return Gi=Do(Gi,e,r,l,u,h),!0;case"mouseover":return qi=Do(qi,e,r,l,u,h),!0;case"pointerover":var x=h.pointerId;return Mo.set(x,Do(Mo.get(x)||null,e,r,l,u,h)),!0;case"gotpointercapture":return x=h.pointerId,Fo.set(x,Do(Fo.get(x)||null,e,r,l,u,h)),!0}return!1}function Qm(e){var r=Ua(e.target);if(r!==null){var l=He(r);if(l!==null){if(r=l.tag,r===13){if(r=Pr(l),r!==null){e.blockedOn=r,qm(e.priority,function(){Ym(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var l=Qu(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var u=new l.constructor(l.type,l);Mn=u,l.target.dispatchEvent(u),Mn=null}else return r=$o(l),r!==null&&Gu(r),e.blockedOn=l,!1;r.shift()}return!0}function Km(e,r,l){_c(e)&&l.delete(r)}function lw(){qu=!1,Yi!==null&&_c(Yi)&&(Yi=null),Gi!==null&&_c(Gi)&&(Gi=null),qi!==null&&_c(qi)&&(qi=null),Mo.forEach(Km),Fo.forEach(Km)}function Bo(e,r){e.blockedOn===r&&(e.blockedOn=null,qu||(qu=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,lw)))}function Uo(e){function r(h){return Bo(h,e)}if(0<Nc.length){Bo(Nc[0],e);for(var l=1;l<Nc.length;l++){var u=Nc[l];u.blockedOn===e&&(u.blockedOn=null)}}for(Yi!==null&&Bo(Yi,e),Gi!==null&&Bo(Gi,e),qi!==null&&Bo(qi,e),Mo.forEach(r),Fo.forEach(r),l=0;l<Xi.length;l++)u=Xi[l],u.blockedOn===e&&(u.blockedOn=null);for(;0<Xi.length&&(l=Xi[0],l.blockedOn===null);)Qm(l),l.blockedOn===null&&Xi.shift()}var Ss=j.ReactCurrentBatchConfig,kc=!0;function cw(e,r,l,u){var h=Ke,x=Ss.transition;Ss.transition=null;try{Ke=1,Xu(e,r,l,u)}finally{Ke=h,Ss.transition=x}}function dw(e,r,l,u){var h=Ke,x=Ss.transition;Ss.transition=null;try{Ke=4,Xu(e,r,l,u)}finally{Ke=h,Ss.transition=x}}function Xu(e,r,l,u){if(kc){var h=Qu(e,r,l,u);if(h===null)pf(e,r,u,jc,l),Xm(e,u);else if(ow(h,e,r,l,u))u.stopPropagation();else if(Xm(e,u),r&4&&-1<sw.indexOf(e)){for(;h!==null;){var x=$o(h);if(x!==null&&Vm(x),x=Qu(e,r,l,u),x===null&&pf(e,r,u,jc,l),x===h)break;h=x}h!==null&&u.stopPropagation()}else pf(e,r,u,null,l)}}var jc=null;function Qu(e,r,l,u){if(jc=null,e=Re(u),e=Ua(e),e!==null)if(r=He(e),r===null)e=null;else if(l=r.tag,l===13){if(e=Pr(r),e!==null)return e;e=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return jc=e,null}function Jm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ct()){case Rr:return 1;case Es:return 4;case Da:case Ba:return 16;case Kr:return 536870912;default:return 16}default:return 16}}var Qi=null,Ku=null,Ec=null;function Zm(){if(Ec)return Ec;var e,r=Ku,l=r.length,u,h="value"in Qi?Qi.value:Qi.textContent,x=h.length;for(e=0;e<l&&r[e]===h[e];e++);var _=l-e;for(u=1;u<=_&&r[l-u]===h[x-u];u++);return Ec=h.slice(e,1<u?1-u:void 0)}function Sc(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ac(){return!0}function $m(){return!1}function Jr(e){function r(l,u,h,x,_){this._reactName=l,this._targetInst=h,this.type=u,this.nativeEvent=x,this.target=_,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(l=e[L],this[L]=l?l(x):x[L]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ac:$m,this.isPropagationStopped=$m,this}return S(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),r}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Jr(As),Wo=S({},As,{view:0,detail:0}),uw=Jr(Wo),Zu,$u,Ho,Cc=S({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ho&&(Ho&&e.type==="mousemove"?(Zu=e.screenX-Ho.screenX,$u=e.screenY-Ho.screenY):$u=Zu=0,Ho=e),Zu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),eg=Jr(Cc),fw=S({},Cc,{dataTransfer:0}),pw=Jr(fw),hw=S({},Wo,{relatedTarget:0}),ef=Jr(hw),mw=S({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=Jr(mw),xw=S({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vw=Jr(xw),yw=S({},As,{data:0}),tg=Jr(yw),bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _w(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Nw[e])?!!r[e]:!1}function tf(){return _w}var kw=S({},Wo,{key:function(e){if(e.key){var r=bw[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Sc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ww[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?Sc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jw=Jr(kw),Ew=S({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=Jr(Ew),Sw=S({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),Aw=Jr(Sw),Cw=S({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=Jr(Cw),Pw=S({},Cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rw=Jr(Pw),Lw=[9,13,27,32],rf=f&&"CompositionEvent"in window,Vo=null;f&&"documentMode"in document&&(Vo=document.documentMode);var Ow=f&&"TextEvent"in window&&!Vo,ng=f&&(!rf||Vo&&8<Vo&&11>=Vo),ig=" ",ag=!1;function sg(e,r){switch(e){case"keyup":return Lw.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function Iw(e,r){switch(e){case"compositionend":return og(r);case"keypress":return r.which!==32?null:(ag=!0,ig);case"textInput":return e=r.data,e===ig&&ag?null:e;default:return null}}function zw(e,r){if(Cs)return e==="compositionend"||!rf&&sg(e,r)?(e=Zm(),Ec=Ku=Qi=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ng&&r.locale!=="ko"?null:r.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Mw[e.type]:r==="textarea"}function cg(e,r,l,u){ei(u),r=Oc(r,"onChange"),0<r.length&&(l=new Ju("onChange","change",null,l,u),e.push({event:l,listeners:r}))}var Yo=null,Go=null;function Fw(e){Sg(e,0)}function Tc(e){var r=Os(e);if(St(r))return e}function Dw(e,r){if(e==="change")return r}var dg=!1;if(f){var nf;if(f){var af="oninput"in document;if(!af){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),af=typeof ug.oninput=="function"}nf=af}else nf=!1;dg=nf&&(!document.documentMode||9<document.documentMode)}function fg(){Yo&&(Yo.detachEvent("onpropertychange",pg),Go=Yo=null)}function pg(e){if(e.propertyName==="value"&&Tc(Go)){var r=[];cg(r,Go,e,Re(e)),_e(Fw,r)}}function Bw(e,r,l){e==="focusin"?(fg(),Yo=r,Go=l,Yo.attachEvent("onpropertychange",pg)):e==="focusout"&&fg()}function Uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tc(Go)}function Ww(e,r){if(e==="click")return Tc(r)}function Hw(e,r){if(e==="input"||e==="change")return Tc(r)}function Vw(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Bn=typeof Object.is=="function"?Object.is:Vw;function qo(e,r){if(Bn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var l=Object.keys(e),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var h=l[u];if(!p.call(r,h)||!Bn(e[h],r[h]))return!1}return!0}function hg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mg(e,r){var l=hg(e);e=0;for(var u;l;){if(l.nodeType===3){if(u=e+l.textContent.length,e<=r&&u>=r)return{node:l,offset:r-e};e=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=hg(l)}}function gg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?gg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function xg(){for(var e=window,r=ne();r instanceof e.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)e=r.contentWindow;else break;r=ne(e.document)}return r}function sf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Yw(e){var r=xg(),l=e.focusedElem,u=e.selectionRange;if(r!==l&&l&&l.ownerDocument&&gg(l.ownerDocument.documentElement,l)){if(u!==null&&sf(l)){if(r=u.start,e=u.end,e===void 0&&(e=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(e,l.value.length);else if(e=(r=l.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var h=l.textContent.length,x=Math.min(u.start,h);u=u.end===void 0?x:Math.min(u.end,h),!e.extend&&x>u&&(h=u,u=x,x=h),h=mg(l,x);var _=mg(l,u);h&&_&&(e.rangeCount!==1||e.anchorNode!==h.node||e.anchorOffset!==h.offset||e.focusNode!==_.node||e.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),e.removeAllRanges(),x>u?(e.addRange(r),e.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),e.addRange(r)))}}for(r=[],e=l;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)e=r[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gw=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,of=null,Xo=null,lf=!1;function vg(e,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;lf||Ts==null||Ts!==ne(u)||(u=Ts,"selectionStart"in u&&sf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xo&&qo(Xo,u)||(Xo=u,u=Oc(of,"onSelect"),0<u.length&&(r=new Ju("onSelect","select",null,r,l),e.push({event:r,listeners:u}),r.target=Ts)))}function Pc(e,r){var l={};return l[e.toLowerCase()]=r.toLowerCase(),l["Webkit"+e]="webkit"+r,l["Moz"+e]="moz"+r,l}var Ps={animationend:Pc("Animation","AnimationEnd"),animationiteration:Pc("Animation","AnimationIteration"),animationstart:Pc("Animation","AnimationStart"),transitionend:Pc("Transition","TransitionEnd")},cf={},yg={};f&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Rc(e){if(cf[e])return cf[e];if(!Ps[e])return e;var r=Ps[e],l;for(l in r)if(r.hasOwnProperty(l)&&l in yg)return cf[e]=r[l];return e}var bg=Rc("animationend"),wg=Rc("animationiteration"),Ng=Rc("animationstart"),_g=Rc("transitionend"),kg=new Map,jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(e,r){kg.set(e,r),c(r,[e])}for(var df=0;df<jg.length;df++){var uf=jg[df],qw=uf.toLowerCase(),Xw=uf[0].toUpperCase()+uf.slice(1);Ki(qw,"on"+Xw)}Ki(bg,"onAnimationEnd"),Ki(wg,"onAnimationIteration"),Ki(Ng,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(_g,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Eg(e,r,l){var u=e.type||"unknown-event";e.currentTarget=l,et(u,r,void 0,e),e.currentTarget=null}function Sg(e,r){r=(r&4)!==0;for(var l=0;l<e.length;l++){var u=e[l],h=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var _=u.length-1;0<=_;_--){var L=u[_],I=L.instance,G=L.currentTarget;if(L=L.listener,I!==x&&h.isPropagationStopped())break e;Eg(h,L,G),x=I}else for(_=0;_<u.length;_++){if(L=u[_],I=L.instance,G=L.currentTarget,L=L.listener,I!==x&&h.isPropagationStopped())break e;Eg(h,L,G),x=I}}}if(Ie)throw e=st,Ie=!1,st=null,e}function ot(e,r){var l=r[yf];l===void 0&&(l=r[yf]=new Set);var u=e+"__bubble";l.has(u)||(Ag(r,e,2,!1),l.add(u))}function ff(e,r,l){var u=0;r&&(u|=4),Ag(l,e,u,r)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Lc]){e[Lc]=!0,i.forEach(function(l){l!=="selectionchange"&&(Qw.has(l)||ff(l,!1,e),ff(l,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Lc]||(r[Lc]=!0,ff("selectionchange",!1,r))}}function Ag(e,r,l,u){switch(Jm(r)){case 1:var h=cw;break;case 4:h=dw;break;default:h=Xu}l=h.bind(null,r,l,e),h=void 0,!de||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(r,l,{capture:!0,passive:h}):e.addEventListener(r,l,!0):h!==void 0?e.addEventListener(r,l,{passive:h}):e.addEventListener(r,l,!1)}function pf(e,r,l,u,h){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var L=u.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(_===4)for(_=u.return;_!==null;){var I=_.tag;if((I===3||I===4)&&(I=_.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;_=_.return}for(;L!==null;){if(_=Ua(L),_===null)return;if(I=_.tag,I===5||I===6){u=x=_;continue e}L=L.parentNode}}u=u.return}_e(function(){var G=x,te=Re(l),ie=[];e:{var ee=kg.get(e);if(ee!==void 0){var fe=Ju,me=e;switch(e){case"keypress":if(Sc(l)===0)break e;case"keydown":case"keyup":fe=jw;break;case"focusin":me="focus",fe=ef;break;case"focusout":me="blur",fe=ef;break;case"beforeblur":case"afterblur":fe=ef;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Aw;break;case bg:case wg:case Ng:fe=gw;break;case _g:fe=Tw;break;case"scroll":fe=uw;break;case"wheel":fe=Rw;break;case"copy":case"cut":case"paste":fe=vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=rg}var ve=(r&4)!==0,Tt=!ve&&e==="scroll",U=ve?ee!==null?ee+"Capture":null:ee;ve=[];for(var M=G,H;M!==null;){H=M;var oe=H.stateNode;if(H.tag===5&&oe!==null&&(H=oe,U!==null&&(oe=We(M,U),oe!=null&&ve.push(Jo(M,oe,H)))),Tt)break;M=M.return}0<ve.length&&(ee=new fe(ee,me,null,l,te),ie.push({event:ee,listeners:ve}))}}if((r&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ee&&l!==Mn&&(me=l.relatedTarget||l.fromElement)&&(Ua(me)||me[yi]))break e;if((fe||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(me=l.relatedTarget||l.toElement,fe=G,me=me?Ua(me):null,me!==null&&(Tt=He(me),me!==Tt||me.tag!==5&&me.tag!==6)&&(me=null)):(fe=null,me=G),fe!==me)){if(ve=eg,oe="onMouseLeave",U="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ve=rg,oe="onPointerLeave",U="onPointerEnter",M="pointer"),Tt=fe==null?ee:Os(fe),H=me==null?ee:Os(me),ee=new ve(oe,M+"leave",fe,l,te),ee.target=Tt,ee.relatedTarget=H,oe=null,Ua(te)===G&&(ve=new ve(U,M+"enter",me,l,te),ve.target=H,ve.relatedTarget=Tt,oe=ve),Tt=oe,fe&&me)t:{for(ve=fe,U=me,M=0,H=ve;H;H=Rs(H))M++;for(H=0,oe=U;oe;oe=Rs(oe))H++;for(;0<M-H;)ve=Rs(ve),M--;for(;0<H-M;)U=Rs(U),H--;for(;M--;){if(ve===U||U!==null&&ve===U.alternate)break t;ve=Rs(ve),U=Rs(U)}ve=null}else ve=null;fe!==null&&Cg(ie,ee,fe,ve,!1),me!==null&&Tt!==null&&Cg(ie,Tt,me,ve,!0)}}e:{if(ee=G?Os(G):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var be=Dw;else if(lg(ee))if(dg)be=Hw;else{be=Uw;var ke=Bw}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(be=Ww);if(be&&(be=be(e,G))){cg(ie,be,l,te);break e}ke&&ke(e,ee,G),e==="focusout"&&(ke=ee._wrapperState)&&ke.controlled&&ee.type==="number"&&qr(ee,"number",ee.value)}switch(ke=G?Os(G):window,e){case"focusin":(lg(ke)||ke.contentEditable==="true")&&(Ts=ke,of=G,Xo=null);break;case"focusout":Xo=of=Ts=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,vg(ie,l,te);break;case"selectionchange":if(Gw)break;case"keydown":case"keyup":vg(ie,l,te)}var je;if(rf)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Cs?sg(e,l)&&(Ce="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Ce="onCompositionStart");Ce&&(ng&&l.locale!=="ko"&&(Cs||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Cs&&(je=Zm()):(Qi=te,Ku="value"in Qi?Qi.value:Qi.textContent,Cs=!0)),ke=Oc(G,Ce),0<ke.length&&(Ce=new tg(Ce,e,null,l,te),ie.push({event:Ce,listeners:ke}),je?Ce.data=je:(je=og(l),je!==null&&(Ce.data=je)))),(je=Ow?Iw(e,l):zw(e,l))&&(G=Oc(G,"onBeforeInput"),0<G.length&&(te=new tg("onBeforeInput","beforeinput",null,l,te),ie.push({event:te,listeners:G}),te.data=je))}Sg(ie,r)})}function Jo(e,r,l){return{instance:e,listener:r,currentTarget:l}}function Oc(e,r){for(var l=r+"Capture",u=[];e!==null;){var h=e,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=We(e,l),x!=null&&u.unshift(Jo(e,x,h)),x=We(e,r),x!=null&&u.push(Jo(e,x,h))),e=e.return}return u}function Rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cg(e,r,l,u,h){for(var x=r._reactName,_=[];l!==null&&l!==u;){var L=l,I=L.alternate,G=L.stateNode;if(I!==null&&I===u)break;L.tag===5&&G!==null&&(L=G,h?(I=We(l,x),I!=null&&_.unshift(Jo(l,I,L))):h||(I=We(l,x),I!=null&&_.push(Jo(l,I,L)))),l=l.return}_.length!==0&&e.push({event:r,listeners:_})}var Kw=/\r\n?/g,Jw=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(Kw,`
`).replace(Jw,"")}function Ic(e,r,l){if(r=Tg(r),Tg(e)!==r&&l)throw Error(n(425))}function zc(){}var hf=null,mf=null;function gf(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(e2)}:xf;function e2(e){setTimeout(function(){throw e})}function vf(e,r){var l=r,u=0;do{var h=l.nextSibling;if(e.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(u===0){e.removeChild(h),Uo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=h}while(l);Uo(r)}function Ji(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Rg(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return e;r--}else l==="/$"&&r++}e=e.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),ni="__reactFiber$"+Ls,Zo="__reactProps$"+Ls,yi="__reactContainer$"+Ls,yf="__reactEvents$"+Ls,t2="__reactListeners$"+Ls,r2="__reactHandles$"+Ls;function Ua(e){var r=e[ni];if(r)return r;for(var l=e.parentNode;l;){if(r=l[yi]||l[ni]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(e=Rg(e);e!==null;){if(l=e[ni])return l;e=Rg(e)}return r}e=l,l=e.parentNode}return null}function $o(e){return e=e[ni]||e[yi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Os(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(n(33))}function Mc(e){return e[Zo]||null}var bf=[],Is=-1;function Zi(e){return{current:e}}function lt(e){0>Is||(e.current=bf[Is],bf[Is]=null,Is--)}function rt(e,r){Is++,bf[Is]=e.current,e.current=r}var $i={},or=Zi($i),Lr=Zi(!1),Wa=$i;function zs(e,r){var l=e.type.contextTypes;if(!l)return $i;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in l)h[x]=r[x];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=h),h}function Or(e){return e=e.childContextTypes,e!=null}function Fc(){lt(Lr),lt(or)}function Lg(e,r,l){if(or.current!==$i)throw Error(n(168));rt(or,r),rt(Lr,l)}function Og(e,r,l){var u=e.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,ue(e)||"Unknown",h));return S({},l,u)}function Dc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$i,Wa=or.current,rt(or,e),rt(Lr,Lr.current),!0}function Ig(e,r,l){var u=e.stateNode;if(!u)throw Error(n(169));l?(e=Og(e,r,Wa),u.__reactInternalMemoizedMergedChildContext=e,lt(Lr),lt(or),rt(or,e)):lt(Lr),rt(Lr,l)}var bi=null,Bc=!1,wf=!1;function zg(e){bi===null?bi=[e]:bi.push(e)}function n2(e){Bc=!0,zg(e)}function ea(){if(!wf&&bi!==null){wf=!0;var e=0,r=Ke;try{var l=bi;for(Ke=1;e<l.length;e++){var u=l[e];do u=u(!0);while(u!==null)}bi=null,Bc=!1}catch(h){throw bi!==null&&(bi=bi.slice(e+1)),It(Rr,ea),h}finally{Ke=r,wf=!1}}return null}var Ms=[],Fs=0,Uc=null,Wc=0,xn=[],vn=0,Ha=null,wi=1,Ni="";function Va(e,r){Ms[Fs++]=Wc,Ms[Fs++]=Uc,Uc=e,Wc=r}function Mg(e,r,l){xn[vn++]=wi,xn[vn++]=Ni,xn[vn++]=Ha,Ha=e;var u=wi;e=Ni;var h=32-Dn(u)-1;u&=~(1<<h),l+=1;var x=32-Dn(r)+h;if(30<x){var _=h-h%5;x=(u&(1<<_)-1).toString(32),u>>=_,h-=_,wi=1<<32-Dn(r)+h|l<<h|u,Ni=x+e}else wi=1<<x|l<<h|u,Ni=e}function Nf(e){e.return!==null&&(Va(e,1),Mg(e,1,0))}function _f(e){for(;e===Uc;)Uc=Ms[--Fs],Ms[Fs]=null,Wc=Ms[--Fs],Ms[Fs]=null;for(;e===Ha;)Ha=xn[--vn],xn[vn]=null,Ni=xn[--vn],xn[vn]=null,wi=xn[--vn],xn[vn]=null}var Zr=null,$r=null,ut=!1,Un=null;function Fg(e,r){var l=Nn(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=e,r=e.deletions,r===null?(e.deletions=[l],e.flags|=16):r.push(l)}function Dg(e,r){switch(e.tag){case 5:var l=e.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Zr=e,$r=Ji(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Zr=e,$r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Ha!==null?{id:wi,overflow:Ni}:null,e.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Nn(18,null,null,0),l.stateNode=r,l.return=e,e.child=l,Zr=e,$r=null,!0):!1;default:return!1}}function kf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jf(e){if(ut){var r=$r;if(r){var l=r;if(!Dg(e,r)){if(kf(e))throw Error(n(418));r=Ji(l.nextSibling);var u=Zr;r&&Dg(e,r)?Fg(u,l):(e.flags=e.flags&-4097|2,ut=!1,Zr=e)}}else{if(kf(e))throw Error(n(418));e.flags=e.flags&-4097|2,ut=!1,Zr=e}}}function Bg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zr=e}function Hc(e){if(e!==Zr)return!1;if(!ut)return Bg(e),ut=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!gf(e.type,e.memoizedProps)),r&&(r=$r)){if(kf(e))throw Ug(),Error(n(418));for(;r;)Fg(e,r),r=Ji(r.nextSibling)}if(Bg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(r===0){$r=Ji(e.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}e=e.nextSibling}$r=null}}else $r=Zr?Ji(e.stateNode.nextSibling):null;return!0}function Ug(){for(var e=$r;e;)e=Ji(e.nextSibling)}function Ds(){$r=Zr=null,ut=!1}function Ef(e){Un===null?Un=[e]:Un.push(e)}var i2=j.ReactCurrentBatchConfig;function el(e,r,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var u=l.stateNode}if(!u)throw Error(n(147,e));var h=u,x=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(_){var L=h.refs;_===null?delete L[x]:L[x]=_},r._stringRef=x,r)}if(typeof e!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,e))}return e}function Vc(e,r){throw e=Object.prototype.toString.call(r),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Wg(e){var r=e._init;return r(e._payload)}function Hg(e){function r(U,M){if(e){var H=U.deletions;H===null?(U.deletions=[M],U.flags|=16):H.push(M)}}function l(U,M){if(!e)return null;for(;M!==null;)r(U,M),M=M.sibling;return null}function u(U,M){for(U=new Map;M!==null;)M.key!==null?U.set(M.key,M):U.set(M.index,M),M=M.sibling;return U}function h(U,M){return U=la(U,M),U.index=0,U.sibling=null,U}function x(U,M,H){return U.index=H,e?(H=U.alternate,H!==null?(H=H.index,H<M?(U.flags|=2,M):H):(U.flags|=2,M)):(U.flags|=1048576,M)}function _(U){return e&&U.alternate===null&&(U.flags|=2),U}function L(U,M,H,oe){return M===null||M.tag!==6?(M=xp(H,U.mode,oe),M.return=U,M):(M=h(M,H),M.return=U,M)}function I(U,M,H,oe){var be=H.type;return be===O?te(U,M,H.props.children,oe,H.key):M!==null&&(M.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ce&&Wg(be)===M.type)?(oe=h(M,H.props),oe.ref=el(U,M,H),oe.return=U,oe):(oe=hd(H.type,H.key,H.props,null,U.mode,oe),oe.ref=el(U,M,H),oe.return=U,oe)}function G(U,M,H,oe){return M===null||M.tag!==4||M.stateNode.containerInfo!==H.containerInfo||M.stateNode.implementation!==H.implementation?(M=vp(H,U.mode,oe),M.return=U,M):(M=h(M,H.children||[]),M.return=U,M)}function te(U,M,H,oe,be){return M===null||M.tag!==7?(M=Za(H,U.mode,oe,be),M.return=U,M):(M=h(M,H),M.return=U,M)}function ie(U,M,H){if(typeof M=="string"&&M!==""||typeof M=="number")return M=xp(""+M,U.mode,H),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case P:return H=hd(M.type,M.key,M.props,null,U.mode,H),H.ref=el(U,null,M),H.return=U,H;case z:return M=vp(M,U.mode,H),M.return=U,M;case ce:var oe=M._init;return ie(U,oe(M._payload),H)}if(Cr(M)||X(M))return M=Za(M,U.mode,H,null),M.return=U,M;Vc(U,M)}return null}function ee(U,M,H,oe){var be=M!==null?M.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return be!==null?null:L(U,M,""+H,oe);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case P:return H.key===be?I(U,M,H,oe):null;case z:return H.key===be?G(U,M,H,oe):null;case ce:return be=H._init,ee(U,M,be(H._payload),oe)}if(Cr(H)||X(H))return be!==null?null:te(U,M,H,oe,null);Vc(U,H)}return null}function fe(U,M,H,oe,be){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return U=U.get(H)||null,L(M,U,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case P:return U=U.get(oe.key===null?H:oe.key)||null,I(M,U,oe,be);case z:return U=U.get(oe.key===null?H:oe.key)||null,G(M,U,oe,be);case ce:var ke=oe._init;return fe(U,M,H,ke(oe._payload),be)}if(Cr(oe)||X(oe))return U=U.get(H)||null,te(M,U,oe,be,null);Vc(M,oe)}return null}function me(U,M,H,oe){for(var be=null,ke=null,je=M,Ce=M=0,Kt=null;je!==null&&Ce<H.length;Ce++){je.index>Ce?(Kt=je,je=null):Kt=je.sibling;var qe=ee(U,je,H[Ce],oe);if(qe===null){je===null&&(je=Kt);break}e&&je&&qe.alternate===null&&r(U,je),M=x(qe,M,Ce),ke===null?be=qe:ke.sibling=qe,ke=qe,je=Kt}if(Ce===H.length)return l(U,je),ut&&Va(U,Ce),be;if(je===null){for(;Ce<H.length;Ce++)je=ie(U,H[Ce],oe),je!==null&&(M=x(je,M,Ce),ke===null?be=je:ke.sibling=je,ke=je);return ut&&Va(U,Ce),be}for(je=u(U,je);Ce<H.length;Ce++)Kt=fe(je,U,Ce,H[Ce],oe),Kt!==null&&(e&&Kt.alternate!==null&&je.delete(Kt.key===null?Ce:Kt.key),M=x(Kt,M,Ce),ke===null?be=Kt:ke.sibling=Kt,ke=Kt);return e&&je.forEach(function(ca){return r(U,ca)}),ut&&Va(U,Ce),be}function ve(U,M,H,oe){var be=X(H);if(typeof be!="function")throw Error(n(150));if(H=be.call(H),H==null)throw Error(n(151));for(var ke=be=null,je=M,Ce=M=0,Kt=null,qe=H.next();je!==null&&!qe.done;Ce++,qe=H.next()){je.index>Ce?(Kt=je,je=null):Kt=je.sibling;var ca=ee(U,je,qe.value,oe);if(ca===null){je===null&&(je=Kt);break}e&&je&&ca.alternate===null&&r(U,je),M=x(ca,M,Ce),ke===null?be=ca:ke.sibling=ca,ke=ca,je=Kt}if(qe.done)return l(U,je),ut&&Va(U,Ce),be;if(je===null){for(;!qe.done;Ce++,qe=H.next())qe=ie(U,qe.value,oe),qe!==null&&(M=x(qe,M,Ce),ke===null?be=qe:ke.sibling=qe,ke=qe);return ut&&Va(U,Ce),be}for(je=u(U,je);!qe.done;Ce++,qe=H.next())qe=fe(je,U,Ce,qe.value,oe),qe!==null&&(e&&qe.alternate!==null&&je.delete(qe.key===null?Ce:qe.key),M=x(qe,M,Ce),ke===null?be=qe:ke.sibling=qe,ke=qe);return e&&je.forEach(function(M2){return r(U,M2)}),ut&&Va(U,Ce),be}function Tt(U,M,H,oe){if(typeof H=="object"&&H!==null&&H.type===O&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case P:e:{for(var be=H.key,ke=M;ke!==null;){if(ke.key===be){if(be=H.type,be===O){if(ke.tag===7){l(U,ke.sibling),M=h(ke,H.props.children),M.return=U,U=M;break e}}else if(ke.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ce&&Wg(be)===ke.type){l(U,ke.sibling),M=h(ke,H.props),M.ref=el(U,ke,H),M.return=U,U=M;break e}l(U,ke);break}else r(U,ke);ke=ke.sibling}H.type===O?(M=Za(H.props.children,U.mode,oe,H.key),M.return=U,U=M):(oe=hd(H.type,H.key,H.props,null,U.mode,oe),oe.ref=el(U,M,H),oe.return=U,U=oe)}return _(U);case z:e:{for(ke=H.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===H.containerInfo&&M.stateNode.implementation===H.implementation){l(U,M.sibling),M=h(M,H.children||[]),M.return=U,U=M;break e}else{l(U,M);break}else r(U,M);M=M.sibling}M=vp(H,U.mode,oe),M.return=U,U=M}return _(U);case ce:return ke=H._init,Tt(U,M,ke(H._payload),oe)}if(Cr(H))return me(U,M,H,oe);if(X(H))return ve(U,M,H,oe);Vc(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,M!==null&&M.tag===6?(l(U,M.sibling),M=h(M,H),M.return=U,U=M):(l(U,M),M=xp(H,U.mode,oe),M.return=U,U=M),_(U)):l(U,M)}return Tt}var Bs=Hg(!0),Vg=Hg(!1),Yc=Zi(null),Gc=null,Us=null,Sf=null;function Af(){Sf=Us=Gc=null}function Cf(e){var r=Yc.current;lt(Yc),e._currentValue=r}function Tf(e,r,l){for(;e!==null;){var u=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),e===l)break;e=e.return}}function Ws(e,r){Gc=e,Sf=Us=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ir=!0),e.firstContext=null)}function yn(e){var r=e._currentValue;if(Sf!==e)if(e={context:e,memoizedValue:r,next:null},Us===null){if(Gc===null)throw Error(n(308));Us=e,Gc.dependencies={lanes:0,firstContext:e}}else Us=Us.next=e;return r}var Ya=null;function Pf(e){Ya===null?Ya=[e]:Ya.push(e)}function Yg(e,r,l,u){var h=r.interleaved;return h===null?(l.next=l,Pf(r)):(l.next=h.next,h.next=l),r.interleaved=l,_i(e,u)}function _i(e,r){e.lanes|=r;var l=e.alternate;for(l!==null&&(l.lanes|=r),l=e,e=e.return;e!==null;)e.childLanes|=r,l=e.alternate,l!==null&&(l.childLanes|=r),l=e,e=e.return;return l.tag===3?l.stateNode:null}var ta=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ki(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ra(e,r,l){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Ye&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,_i(e,l)}return h=u.interleaved,h===null?(r.next=r,Pf(u)):(r.next=h.next,h.next=r),u.interleaved=r,_i(e,l)}function qc(e,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=e.pendingLanes,l|=u,r.lanes=l,Yu(e,l)}}function qg(e,r){var l=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var h=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var _={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?h=x=_:x=x.next=_,l=l.next}while(l!==null);x===null?h=x=r:x=x.next=r}else h=x=r;l={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:u.shared,effects:u.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=r:e.next=r,l.lastBaseUpdate=r}function Xc(e,r,l,u){var h=e.updateQueue;ta=!1;var x=h.firstBaseUpdate,_=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var I=L,G=I.next;I.next=null,_===null?x=G:_.next=G,_=I;var te=e.alternate;te!==null&&(te=te.updateQueue,L=te.lastBaseUpdate,L!==_&&(L===null?te.firstBaseUpdate=G:L.next=G,te.lastBaseUpdate=I))}if(x!==null){var ie=h.baseState;_=0,te=G=I=null,L=x;do{var ee=L.lane,fe=L.eventTime;if((u&ee)===ee){te!==null&&(te=te.next={eventTime:fe,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var me=e,ve=L;switch(ee=r,fe=l,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){ie=me.call(fe,ie,ee);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,ee=typeof me=="function"?me.call(fe,ie,ee):me,ee==null)break e;ie=S({},ie,ee);break e;case 2:ta=!0}}L.callback!==null&&L.lane!==0&&(e.flags|=64,ee=h.effects,ee===null?h.effects=[L]:ee.push(L))}else fe={eventTime:fe,lane:ee,tag:L.tag,payload:L.payload,callback:L.callback,next:null},te===null?(G=te=fe,I=ie):te=te.next=fe,_|=ee;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ee=L,L=ee.next,ee.next=null,h.lastBaseUpdate=ee,h.shared.pending=null}}while(!0);if(te===null&&(I=ie),h.baseState=I,h.firstBaseUpdate=G,h.lastBaseUpdate=te,r=h.shared.interleaved,r!==null){h=r;do _|=h.lane,h=h.next;while(h!==r)}else x===null&&(h.shared.lanes=0);Xa|=_,e.lanes=_,e.memoizedState=ie}}function Xg(e,r,l){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var u=e[r],h=u.callback;if(h!==null){if(u.callback=null,u=l,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var tl={},ii=Zi(tl),rl=Zi(tl),nl=Zi(tl);function Ga(e){if(e===tl)throw Error(n(174));return e}function Lf(e,r){switch(rt(nl,r),rt(rl,e),rt(ii,tl),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=at(r,e)}lt(ii),rt(ii,r)}function Hs(){lt(ii),lt(rl),lt(nl)}function Qg(e){Ga(nl.current);var r=Ga(ii.current),l=at(r,e.type);r!==l&&(rt(rl,e),rt(ii,l))}function Of(e){rl.current===e&&(lt(ii),lt(rl))}var ht=Zi(0);function Qc(e){for(var r=e;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var If=[];function zf(){for(var e=0;e<If.length;e++)If[e]._workInProgressVersionPrimary=null;If.length=0}var Kc=j.ReactCurrentDispatcher,Mf=j.ReactCurrentBatchConfig,qa=0,mt=null,Ut=null,Xt=null,Jc=!1,il=!1,al=0,a2=0;function lr(){throw Error(n(321))}function Ff(e,r){if(r===null)return!1;for(var l=0;l<r.length&&l<e.length;l++)if(!Bn(e[l],r[l]))return!1;return!0}function Df(e,r,l,u,h,x){if(qa=x,mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Kc.current=e===null||e.memoizedState===null?c2:d2,e=l(u,h),il){x=0;do{if(il=!1,al=0,25<=x)throw Error(n(301));x+=1,Xt=Ut=null,r.updateQueue=null,Kc.current=u2,e=l(u,h)}while(il)}if(Kc.current=ed,r=Ut!==null&&Ut.next!==null,qa=0,Xt=Ut=mt=null,Jc=!1,r)throw Error(n(300));return e}function Bf(){var e=al!==0;return al=0,e}function ai(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?mt.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function bn(){if(Ut===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=Ut.next;var r=Xt===null?mt.memoizedState:Xt.next;if(r!==null)Xt=r,Ut=e;else{if(e===null)throw Error(n(310));Ut=e,e={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Xt===null?mt.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function sl(e,r){return typeof r=="function"?r(e):r}function Uf(e){var r=bn(),l=r.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=e;var u=Ut,h=u.baseQueue,x=l.pending;if(x!==null){if(h!==null){var _=h.next;h.next=x.next,x.next=_}u.baseQueue=h=x,l.pending=null}if(h!==null){x=h.next,u=u.baseState;var L=_=null,I=null,G=x;do{var te=G.lane;if((qa&te)===te)I!==null&&(I=I.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),u=G.hasEagerState?G.eagerState:e(u,G.action);else{var ie={lane:te,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};I===null?(L=I=ie,_=u):I=I.next=ie,mt.lanes|=te,Xa|=te}G=G.next}while(G!==null&&G!==x);I===null?_=u:I.next=L,Bn(u,r.memoizedState)||(Ir=!0),r.memoizedState=u,r.baseState=_,r.baseQueue=I,l.lastRenderedState=u}if(e=l.interleaved,e!==null){h=e;do x=h.lane,mt.lanes|=x,Xa|=x,h=h.next;while(h!==e)}else h===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Wf(e){var r=bn(),l=r.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=e;var u=l.dispatch,h=l.pending,x=r.memoizedState;if(h!==null){l.pending=null;var _=h=h.next;do x=e(x,_.action),_=_.next;while(_!==h);Bn(x,r.memoizedState)||(Ir=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,u]}function Kg(){}function Jg(e,r){var l=mt,u=bn(),h=r(),x=!Bn(u.memoizedState,h);if(x&&(u.memoizedState=h,Ir=!0),u=u.queue,Hf(e0.bind(null,l,u,e),[e]),u.getSnapshot!==r||x||Xt!==null&&Xt.memoizedState.tag&1){if(l.flags|=2048,ol(9,$g.bind(null,l,u,h,r),void 0,null),Qt===null)throw Error(n(349));(qa&30)!==0||Zg(l,r,h)}return h}function Zg(e,r,l){e.flags|=16384,e={getSnapshot:r,value:l},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.stores=[e]):(l=r.stores,l===null?r.stores=[e]:l.push(e))}function $g(e,r,l,u){r.value=l,r.getSnapshot=u,t0(r)&&r0(e)}function e0(e,r,l){return l(function(){t0(r)&&r0(e)})}function t0(e){var r=e.getSnapshot;e=e.value;try{var l=r();return!Bn(e,l)}catch{return!0}}function r0(e){var r=_i(e,1);r!==null&&Yn(r,e,1,-1)}function n0(e){var r=ai();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:e},r.queue=e,e=e.dispatch=l2.bind(null,mt,e),[r.memoizedState,e]}function ol(e,r,l,u){return e={tag:e,create:r,destroy:l,deps:u,next:null},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.lastEffect=e.next=e):(l=r.lastEffect,l===null?r.lastEffect=e.next=e:(u=l.next,l.next=e,e.next=u,r.lastEffect=e)),e}function i0(){return bn().memoizedState}function Zc(e,r,l,u){var h=ai();mt.flags|=e,h.memoizedState=ol(1|r,l,void 0,u===void 0?null:u)}function $c(e,r,l,u){var h=bn();u=u===void 0?null:u;var x=void 0;if(Ut!==null){var _=Ut.memoizedState;if(x=_.destroy,u!==null&&Ff(u,_.deps)){h.memoizedState=ol(r,l,x,u);return}}mt.flags|=e,h.memoizedState=ol(1|r,l,x,u)}function a0(e,r){return Zc(8390656,8,e,r)}function Hf(e,r){return $c(2048,8,e,r)}function s0(e,r){return $c(4,2,e,r)}function o0(e,r){return $c(4,4,e,r)}function l0(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function c0(e,r,l){return l=l!=null?l.concat([e]):null,$c(4,4,l0.bind(null,r,e),l)}function Vf(){}function d0(e,r){var l=bn();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Ff(r,u[1])?u[0]:(l.memoizedState=[e,r],e)}function u0(e,r){var l=bn();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Ff(r,u[1])?u[0]:(e=e(),l.memoizedState=[e,r],e)}function f0(e,r,l){return(qa&21)===0?(e.baseState&&(e.baseState=!1,Ir=!0),e.memoizedState=l):(Bn(l,r)||(l=Wm(),mt.lanes|=l,Xa|=l,e.baseState=!0),r)}function s2(e,r){var l=Ke;Ke=l!==0&&4>l?l:4,e(!0);var u=Mf.transition;Mf.transition={};try{e(!1),r()}finally{Ke=l,Mf.transition=u}}function p0(){return bn().memoizedState}function o2(e,r,l){var u=sa(e);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},h0(e))m0(r,l);else if(l=Yg(e,r,l,u),l!==null){var h=wr();Yn(l,e,u,h),g0(l,r,u)}}function l2(e,r,l){var u=sa(e),h={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(h0(e))m0(r,h);else{var x=e.alternate;if(e.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var _=r.lastRenderedState,L=x(_,l);if(h.hasEagerState=!0,h.eagerState=L,Bn(L,_)){var I=r.interleaved;I===null?(h.next=h,Pf(r)):(h.next=I.next,I.next=h),r.interleaved=h;return}}catch{}l=Yg(e,r,h,u),l!==null&&(h=wr(),Yn(l,e,u,h),g0(l,r,u))}}function h0(e){var r=e.alternate;return e===mt||r!==null&&r===mt}function m0(e,r){il=Jc=!0;var l=e.pending;l===null?r.next=r:(r.next=l.next,l.next=r),e.pending=r}function g0(e,r,l){if((l&4194240)!==0){var u=r.lanes;u&=e.pendingLanes,l|=u,r.lanes=l,Yu(e,l)}}var ed={readContext:yn,useCallback:lr,useContext:lr,useEffect:lr,useImperativeHandle:lr,useInsertionEffect:lr,useLayoutEffect:lr,useMemo:lr,useReducer:lr,useRef:lr,useState:lr,useDebugValue:lr,useDeferredValue:lr,useTransition:lr,useMutableSource:lr,useSyncExternalStore:lr,useId:lr,unstable_isNewReconciler:!1},c2={readContext:yn,useCallback:function(e,r){return ai().memoizedState=[e,r===void 0?null:r],e},useContext:yn,useEffect:a0,useImperativeHandle:function(e,r,l){return l=l!=null?l.concat([e]):null,Zc(4194308,4,l0.bind(null,r,e),l)},useLayoutEffect:function(e,r){return Zc(4194308,4,e,r)},useInsertionEffect:function(e,r){return Zc(4,2,e,r)},useMemo:function(e,r){var l=ai();return r=r===void 0?null:r,e=e(),l.memoizedState=[e,r],e},useReducer:function(e,r,l){var u=ai();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},u.queue=e,e=e.dispatch=o2.bind(null,mt,e),[u.memoizedState,e]},useRef:function(e){var r=ai();return e={current:e},r.memoizedState=e},useState:n0,useDebugValue:Vf,useDeferredValue:function(e){return ai().memoizedState=e},useTransition:function(){var e=n0(!1),r=e[0];return e=s2.bind(null,e[1]),ai().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,l){var u=mt,h=ai();if(ut){if(l===void 0)throw Error(n(407));l=l()}else{if(l=r(),Qt===null)throw Error(n(349));(qa&30)!==0||Zg(u,r,l)}h.memoizedState=l;var x={value:l,getSnapshot:r};return h.queue=x,a0(e0.bind(null,u,x,e),[e]),u.flags|=2048,ol(9,$g.bind(null,u,x,l,r),void 0,null),l},useId:function(){var e=ai(),r=Qt.identifierPrefix;if(ut){var l=Ni,u=wi;l=(u&~(1<<32-Dn(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=al++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=a2++,r=":"+r+"r"+l.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},d2={readContext:yn,useCallback:d0,useContext:yn,useEffect:Hf,useImperativeHandle:c0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:u0,useReducer:Uf,useRef:i0,useState:function(){return Uf(sl)},useDebugValue:Vf,useDeferredValue:function(e){var r=bn();return f0(r,Ut.memoizedState,e)},useTransition:function(){var e=Uf(sl)[0],r=bn().memoizedState;return[e,r]},useMutableSource:Kg,useSyncExternalStore:Jg,useId:p0,unstable_isNewReconciler:!1},u2={readContext:yn,useCallback:d0,useContext:yn,useEffect:Hf,useImperativeHandle:c0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:u0,useReducer:Wf,useRef:i0,useState:function(){return Wf(sl)},useDebugValue:Vf,useDeferredValue:function(e){var r=bn();return Ut===null?r.memoizedState=e:f0(r,Ut.memoizedState,e)},useTransition:function(){var e=Wf(sl)[0],r=bn().memoizedState;return[e,r]},useMutableSource:Kg,useSyncExternalStore:Jg,useId:p0,unstable_isNewReconciler:!1};function Wn(e,r){if(e&&e.defaultProps){r=S({},r),e=e.defaultProps;for(var l in e)r[l]===void 0&&(r[l]=e[l]);return r}return r}function Yf(e,r,l,u){r=e.memoizedState,l=l(u,r),l=l==null?r:S({},r,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var td={isMounted:function(e){return(e=e._reactInternals)?He(e)===e:!1},enqueueSetState:function(e,r,l){e=e._reactInternals;var u=wr(),h=sa(e),x=ki(u,h);x.payload=r,l!=null&&(x.callback=l),r=ra(e,x,h),r!==null&&(Yn(r,e,h,u),qc(r,e,h))},enqueueReplaceState:function(e,r,l){e=e._reactInternals;var u=wr(),h=sa(e),x=ki(u,h);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=ra(e,x,h),r!==null&&(Yn(r,e,h,u),qc(r,e,h))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var l=wr(),u=sa(e),h=ki(l,u);h.tag=2,r!=null&&(h.callback=r),r=ra(e,h,u),r!==null&&(Yn(r,e,u,l),qc(r,e,u))}};function x0(e,r,l,u,h,x,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,x,_):r.prototype&&r.prototype.isPureReactComponent?!qo(l,u)||!qo(h,x):!0}function v0(e,r,l){var u=!1,h=$i,x=r.contextType;return typeof x=="object"&&x!==null?x=yn(x):(h=Or(r)?Wa:or.current,u=r.contextTypes,x=(u=u!=null)?zs(e,h):$i),r=new r(l,x),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=td,e.stateNode=r,r._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=h,e.__reactInternalMemoizedMaskedChildContext=x),r}function y0(e,r,l,u){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==e&&td.enqueueReplaceState(r,r.state,null)}function Gf(e,r,l,u){var h=e.stateNode;h.props=l,h.state=e.memoizedState,h.refs={},Rf(e);var x=r.contextType;typeof x=="object"&&x!==null?h.context=yn(x):(x=Or(r)?Wa:or.current,h.context=zs(e,x)),h.state=e.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Yf(e,r,x,l),h.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&td.enqueueReplaceState(h,h.state,null),Xc(e,l,h,u),h.state=e.memoizedState),typeof h.componentDidMount=="function"&&(e.flags|=4194308)}function Vs(e,r){try{var l="",u=r;do l+=ge(u),u=u.return;while(u);var h=l}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:e,source:r,stack:h,digest:null}}function qf(e,r,l){return{value:e,source:null,stack:l??null,digest:r??null}}function Xf(e,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var f2=typeof WeakMap=="function"?WeakMap:Map;function b0(e,r,l){l=ki(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){ld||(ld=!0,cp=u),Xf(e,r)},l}function w0(e,r,l){l=ki(-1,l),l.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;l.payload=function(){return u(h)},l.callback=function(){Xf(e,r)}}var x=e.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Xf(e,r),typeof u!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),l}function N0(e,r,l){var u=e.pingCache;if(u===null){u=e.pingCache=new f2;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(l)||(h.add(l),e=E2.bind(null,e,r,l),r.then(e,e))}function _0(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function k0(e,r,l,u,h){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ki(-1,1),r.tag=2,ra(l,r,1))),l.lanes|=1),e):(e.flags|=65536,e.lanes=h,e)}var p2=j.ReactCurrentOwner,Ir=!1;function br(e,r,l,u){r.child=e===null?Vg(r,null,l,u):Bs(r,e.child,l,u)}function j0(e,r,l,u,h){l=l.render;var x=r.ref;return Ws(r,h),u=Df(e,r,l,u,x,h),l=Bf(),e!==null&&!Ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~h,ji(e,r,h)):(ut&&l&&Nf(r),r.flags|=1,br(e,r,u,h),r.child)}function E0(e,r,l,u,h){if(e===null){var x=l.type;return typeof x=="function"&&!gp(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,S0(e,r,x,u,h)):(e=hd(l.type,null,u,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(x=e.child,(e.lanes&h)===0){var _=x.memoizedProps;if(l=l.compare,l=l!==null?l:qo,l(_,u)&&e.ref===r.ref)return ji(e,r,h)}return r.flags|=1,e=la(x,u),e.ref=r.ref,e.return=r,r.child=e}function S0(e,r,l,u,h){if(e!==null){var x=e.memoizedProps;if(qo(x,u)&&e.ref===r.ref)if(Ir=!1,r.pendingProps=u=x,(e.lanes&h)!==0)(e.flags&131072)!==0&&(Ir=!0);else return r.lanes=e.lanes,ji(e,r,h)}return Qf(e,r,l,u,h)}function A0(e,r,l){var u=r.pendingProps,h=u.children,x=e!==null?e.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Gs,en),en|=l;else{if((l&1073741824)===0)return e=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,rt(Gs,en),en|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,rt(Gs,en),en|=u}else x!==null?(u=x.baseLanes|l,r.memoizedState=null):u=l,rt(Gs,en),en|=u;return br(e,r,h,l),r.child}function C0(e,r){var l=r.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qf(e,r,l,u,h){var x=Or(l)?Wa:or.current;return x=zs(r,x),Ws(r,h),l=Df(e,r,l,u,x,h),u=Bf(),e!==null&&!Ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~h,ji(e,r,h)):(ut&&u&&Nf(r),r.flags|=1,br(e,r,l,h),r.child)}function T0(e,r,l,u,h){if(Or(l)){var x=!0;Dc(r)}else x=!1;if(Ws(r,h),r.stateNode===null)nd(e,r),v0(r,l,u),Gf(r,l,u,h),u=!0;else if(e===null){var _=r.stateNode,L=r.memoizedProps;_.props=L;var I=_.context,G=l.contextType;typeof G=="object"&&G!==null?G=yn(G):(G=Or(l)?Wa:or.current,G=zs(r,G));var te=l.getDerivedStateFromProps,ie=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function";ie||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(L!==u||I!==G)&&y0(r,_,u,G),ta=!1;var ee=r.memoizedState;_.state=ee,Xc(r,u,_,h),I=r.memoizedState,L!==u||ee!==I||Lr.current||ta?(typeof te=="function"&&(Yf(r,l,te,u),I=r.memoizedState),(L=ta||x0(r,l,L,u,ee,I,G))?(ie||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=I),_.props=u,_.state=I,_.context=G,u=L):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{_=r.stateNode,Gg(e,r),L=r.memoizedProps,G=r.type===r.elementType?L:Wn(r.type,L),_.props=G,ie=r.pendingProps,ee=_.context,I=l.contextType,typeof I=="object"&&I!==null?I=yn(I):(I=Or(l)?Wa:or.current,I=zs(r,I));var fe=l.getDerivedStateFromProps;(te=typeof fe=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(L!==ie||ee!==I)&&y0(r,_,u,I),ta=!1,ee=r.memoizedState,_.state=ee,Xc(r,u,_,h);var me=r.memoizedState;L!==ie||ee!==me||Lr.current||ta?(typeof fe=="function"&&(Yf(r,l,fe,u),me=r.memoizedState),(G=ta||x0(r,l,G,u,ee,me,I)||!1)?(te||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,me,I),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,me,I)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||L===e.memoizedProps&&ee===e.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||L===e.memoizedProps&&ee===e.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=me),_.props=u,_.state=me,_.context=I,u=G):(typeof _.componentDidUpdate!="function"||L===e.memoizedProps&&ee===e.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||L===e.memoizedProps&&ee===e.memoizedState||(r.flags|=1024),u=!1)}return Kf(e,r,l,u,x,h)}function Kf(e,r,l,u,h,x){C0(e,r);var _=(r.flags&128)!==0;if(!u&&!_)return h&&Ig(r,l,!1),ji(e,r,x);u=r.stateNode,p2.current=r;var L=_&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,e!==null&&_?(r.child=Bs(r,e.child,null,x),r.child=Bs(r,null,L,x)):br(e,r,L,x),r.memoizedState=u.state,h&&Ig(r,l,!0),r.child}function P0(e){var r=e.stateNode;r.pendingContext?Lg(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Lg(e,r.context,!1),Lf(e,r.containerInfo)}function R0(e,r,l,u,h){return Ds(),Ef(h),r.flags|=256,br(e,r,l,u),r.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(e){return{baseLanes:e,cachePool:null,transitions:null}}function L0(e,r,l){var u=r.pendingProps,h=ht.current,x=!1,_=(r.flags&128)!==0,L;if((L=_)||(L=e!==null&&e.memoizedState===null?!1:(h&2)!==0),L?(x=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(h|=1),rt(ht,h&1),e===null)return jf(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=u.children,e=u.fallback,x?(u=r.mode,x=r.child,_={mode:"hidden",children:_},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=_):x=md(_,u,0,null),e=Za(e,u,l,null),x.return=r,e.return=r,x.sibling=e,r.child=x,r.child.memoizedState=Zf(l),r.memoizedState=Jf,e):$f(r,_));if(h=e.memoizedState,h!==null&&(L=h.dehydrated,L!==null))return h2(e,r,_,u,L,h,l);if(x){x=u.fallback,_=r.mode,h=e.child,L=h.sibling;var I={mode:"hidden",children:u.children};return(_&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=I,r.deletions=null):(u=la(h,I),u.subtreeFlags=h.subtreeFlags&14680064),L!==null?x=la(L,x):(x=Za(x,_,l,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,_=e.child.memoizedState,_=_===null?Zf(l):{baseLanes:_.baseLanes|l,cachePool:null,transitions:_.transitions},x.memoizedState=_,x.childLanes=e.childLanes&~l,r.memoizedState=Jf,u}return x=e.child,e=x.sibling,u=la(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,e!==null&&(l=r.deletions,l===null?(r.deletions=[e],r.flags|=16):l.push(e)),r.child=u,r.memoizedState=null,u}function $f(e,r){return r=md({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function rd(e,r,l,u){return u!==null&&Ef(u),Bs(r,e.child,null,l),e=$f(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function h2(e,r,l,u,h,x,_){if(l)return r.flags&256?(r.flags&=-257,u=qf(Error(n(422))),rd(e,r,_,u)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(x=u.fallback,h=r.mode,u=md({mode:"visible",children:u.children},h,0,null),x=Za(x,h,_,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Bs(r,e.child,null,_),r.child.memoizedState=Zf(_),r.memoizedState=Jf,x);if((r.mode&1)===0)return rd(e,r,_,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var L=u.dgst;return u=L,x=Error(n(419)),u=qf(x,u,void 0),rd(e,r,_,u)}if(L=(_&e.childLanes)!==0,Ir||L){if(u=Qt,u!==null){switch(_&-_){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|_))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,_i(e,h),Yn(u,e,h,-1))}return mp(),u=qf(Error(n(421))),rd(e,r,_,u)}return h.data==="$?"?(r.flags|=128,r.child=e.child,r=S2.bind(null,e),h._reactRetry=r,null):(e=x.treeContext,$r=Ji(h.nextSibling),Zr=r,ut=!0,Un=null,e!==null&&(xn[vn++]=wi,xn[vn++]=Ni,xn[vn++]=Ha,wi=e.id,Ni=e.overflow,Ha=r),r=$f(r,u.children),r.flags|=4096,r)}function O0(e,r,l){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r),Tf(e.return,r,l)}function ep(e,r,l,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:h}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=h)}function I0(e,r,l){var u=r.pendingProps,h=u.revealOrder,x=u.tail;if(br(e,r,u.children,l),u=ht.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O0(e,l,r);else if(e.tag===19)O0(e,l,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(rt(ht,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(l=r.child,h=null;l!==null;)e=l.alternate,e!==null&&Qc(e)===null&&(h=l),l=l.sibling;l=h,l===null?(h=r.child,r.child=null):(h=l.sibling,l.sibling=null),ep(r,!1,h,l,x);break;case"backwards":for(l=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&Qc(e)===null){r.child=h;break}e=h.sibling,h.sibling=l,l=h,h=e}ep(r,!0,l,null,x);break;case"together":ep(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function nd(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function ji(e,r,l){if(e!==null&&(r.dependencies=e.dependencies),Xa|=r.lanes,(l&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(n(153));if(r.child!==null){for(e=r.child,l=la(e,e.pendingProps),r.child=l,l.return=r;e.sibling!==null;)e=e.sibling,l=l.sibling=la(e,e.pendingProps),l.return=r;l.sibling=null}return r.child}function m2(e,r,l){switch(r.tag){case 3:P0(r),Ds();break;case 5:Qg(r);break;case 1:Or(r.type)&&Dc(r);break;case 4:Lf(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;rt(Yc,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(rt(ht,ht.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?L0(e,r,l):(rt(ht,ht.current&1),e=ji(e,r,l),e!==null?e.sibling:null);rt(ht,ht.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(e.flags&128)!==0){if(u)return I0(e,r,l);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(ht,ht.current),u)break;return null;case 22:case 23:return r.lanes=0,A0(e,r,l)}return ji(e,r,l)}var z0,tp,M0,F0;z0=function(e,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},tp=function(){},M0=function(e,r,l,u){var h=e.memoizedProps;if(h!==u){e=r.stateNode,Ga(ii.current);var x=null;switch(l){case"input":h=Ee(e,h),u=Ee(e,u),x=[];break;case"select":h=S({},h,{value:void 0}),u=S({},u,{value:void 0}),x=[];break;case"textarea":h=Xr(e,h),u=Xr(e,u),x=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=zc)}$n(l,u);var _;l=null;for(G in h)if(!u.hasOwnProperty(G)&&h.hasOwnProperty(G)&&h[G]!=null)if(G==="style"){var L=h[G];for(_ in L)L.hasOwnProperty(_)&&(l||(l={}),l[_]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(s.hasOwnProperty(G)?x||(x=[]):(x=x||[]).push(G,null));for(G in u){var I=u[G];if(L=h?.[G],u.hasOwnProperty(G)&&I!==L&&(I!=null||L!=null))if(G==="style")if(L){for(_ in L)!L.hasOwnProperty(_)||I&&I.hasOwnProperty(_)||(l||(l={}),l[_]="");for(_ in I)I.hasOwnProperty(_)&&L[_]!==I[_]&&(l||(l={}),l[_]=I[_])}else l||(x||(x=[]),x.push(G,l)),l=I;else G==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,L=L?L.__html:void 0,I!=null&&L!==I&&(x=x||[]).push(G,I)):G==="children"?typeof I!="string"&&typeof I!="number"||(x=x||[]).push(G,""+I):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(s.hasOwnProperty(G)?(I!=null&&G==="onScroll"&&ot("scroll",e),x||L===I||(x=[])):(x=x||[]).push(G,I))}l&&(x=x||[]).push("style",l);var G=x;(r.updateQueue=G)&&(r.flags|=4)}},F0=function(e,r,l,u){l!==u&&(r.flags|=4)};function ll(e,r){if(!ut)switch(e.tailMode){case"hidden":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function cr(e){var r=e.alternate!==null&&e.alternate.child===e.child,l=0,u=0;if(r)for(var h=e.child;h!==null;)l|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)l|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=l,r}function g2(e,r,l){var u=r.pendingProps;switch(_f(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cr(r),null;case 1:return Or(r.type)&&Fc(),cr(r),null;case 3:return u=r.stateNode,Hs(),lt(Lr),lt(or),zf(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(Hc(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Un!==null&&(fp(Un),Un=null))),tp(e,r),cr(r),null;case 5:Of(r);var h=Ga(nl.current);if(l=r.type,e!==null&&r.stateNode!=null)M0(e,r,l,u,h),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return cr(r),null}if(e=Ga(ii.current),Hc(r)){u=r.stateNode,l=r.type;var x=r.memoizedProps;switch(u[ni]=r,u[Zo]=x,e=(r.mode&1)!==0,l){case"dialog":ot("cancel",u),ot("close",u);break;case"iframe":case"object":case"embed":ot("load",u);break;case"video":case"audio":for(h=0;h<Qo.length;h++)ot(Qo[h],u);break;case"source":ot("error",u);break;case"img":case"image":case"link":ot("error",u),ot("load",u);break;case"details":ot("toggle",u);break;case"input":it(u,x),ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},ot("invalid",u);break;case"textarea":On(u,x),ot("invalid",u)}$n(l,x),h=null;for(var _ in x)if(x.hasOwnProperty(_)){var L=x[_];_==="children"?typeof L=="string"?u.textContent!==L&&(x.suppressHydrationWarning!==!0&&Ic(u.textContent,L,e),h=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(x.suppressHydrationWarning!==!0&&Ic(u.textContent,L,e),h=["children",""+L]):s.hasOwnProperty(_)&&L!=null&&_==="onScroll"&&ot("scroll",u)}switch(l){case"input":bt(u),ar(u,x,!0);break;case"textarea":bt(u),At(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=zc)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{_=h.nodeType===9?h:h.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=In(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=_.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=_.createElement(l,{is:u.is}):(e=_.createElement(l),l==="select"&&(_=e,u.multiple?_.multiple=!0:u.size&&(_.size=u.size))):e=_.createElementNS(e,l),e[ni]=r,e[Zo]=u,z0(e,r,!1,!1),r.stateNode=e;e:{switch(_=mn(l,u),l){case"dialog":ot("cancel",e),ot("close",e),h=u;break;case"iframe":case"object":case"embed":ot("load",e),h=u;break;case"video":case"audio":for(h=0;h<Qo.length;h++)ot(Qo[h],e);h=u;break;case"source":ot("error",e),h=u;break;case"img":case"image":case"link":ot("error",e),ot("load",e),h=u;break;case"details":ot("toggle",e),h=u;break;case"input":it(e,u),h=Ee(e,u),ot("invalid",e);break;case"option":h=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},h=S({},u,{value:void 0}),ot("invalid",e);break;case"textarea":On(e,u),h=Xr(e,u),ot("invalid",e);break;default:h=u}$n(l,h),L=h;for(x in L)if(L.hasOwnProperty(x)){var I=L[x];x==="style"?hn(e,I):x==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&gr(e,I)):x==="children"?typeof I=="string"?(l!=="textarea"||I!=="")&&xr(e,I):typeof I=="number"&&xr(e,""+I):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?I!=null&&x==="onScroll"&&ot("scroll",e):I!=null&&E(e,x,I,_))}switch(l){case"input":bt(e),ar(e,u,!1);break;case"textarea":bt(e),At(e);break;case"option":u.value!=null&&e.setAttribute("value",""+ye(u.value));break;case"select":e.multiple=!!u.multiple,x=u.value,x!=null?Qe(e,!!u.multiple,x,!1):u.defaultValue!=null&&Qe(e,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(e.onclick=zc)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return cr(r),null;case 6:if(e&&r.stateNode!=null)F0(e,r,e.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(l=Ga(nl.current),Ga(ii.current),Hc(r)){if(u=r.stateNode,l=r.memoizedProps,u[ni]=r,(x=u.nodeValue!==l)&&(e=Zr,e!==null))switch(e.tag){case 3:Ic(u.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ic(u.nodeValue,l,(e.mode&1)!==0)}x&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[ni]=r,r.stateNode=u}return cr(r),null;case 13:if(lt(ht),u=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ut&&$r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ug(),Ds(),r.flags|=98560,x=!1;else if(x=Hc(r),u!==null&&u.dehydrated!==null){if(e===null){if(!x)throw Error(n(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[ni]=r}else Ds(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;cr(r),x=!1}else Un!==null&&(fp(Un),Un=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ht.current&1)!==0?Wt===0&&(Wt=3):mp())),r.updateQueue!==null&&(r.flags|=4),cr(r),null);case 4:return Hs(),tp(e,r),e===null&&Ko(r.stateNode.containerInfo),cr(r),null;case 10:return Cf(r.type._context),cr(r),null;case 17:return Or(r.type)&&Fc(),cr(r),null;case 19:if(lt(ht),x=r.memoizedState,x===null)return cr(r),null;if(u=(r.flags&128)!==0,_=x.rendering,_===null)if(u)ll(x,!1);else{if(Wt!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(_=Qc(e),_!==null){for(r.flags|=128,ll(x,!1),u=_.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)x=l,e=u,x.flags&=14680066,_=x.alternate,_===null?(x.childLanes=0,x.lanes=e,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=_.childLanes,x.lanes=_.lanes,x.child=_.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=_.memoizedProps,x.memoizedState=_.memoizedState,x.updateQueue=_.updateQueue,x.type=_.type,e=_.dependencies,x.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return rt(ht,ht.current&1|2),r.child}e=e.sibling}x.tail!==null&&Fe()>qs&&(r.flags|=128,u=!0,ll(x,!1),r.lanes=4194304)}else{if(!u)if(e=Qc(_),e!==null){if(r.flags|=128,u=!0,l=e.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ll(x,!0),x.tail===null&&x.tailMode==="hidden"&&!_.alternate&&!ut)return cr(r),null}else 2*Fe()-x.renderingStartTime>qs&&l!==1073741824&&(r.flags|=128,u=!0,ll(x,!1),r.lanes=4194304);x.isBackwards?(_.sibling=r.child,r.child=_):(l=x.last,l!==null?l.sibling=_:r.child=_,x.last=_)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Fe(),r.sibling=null,l=ht.current,rt(ht,u?l&1|2:l&1),r):(cr(r),null);case 22:case 23:return hp(),u=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(en&1073741824)!==0&&(cr(r),r.subtreeFlags&6&&(r.flags|=8192)):cr(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function x2(e,r){switch(_f(r),r.tag){case 1:return Or(r.type)&&Fc(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Hs(),lt(Lr),lt(or),zf(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Of(r),null;case 13:if(lt(ht),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ds()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return lt(ht),null;case 4:return Hs(),null;case 10:return Cf(r.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var id=!1,dr=!1,v2=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ys(e,r){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){_t(e,r,u)}else l.current=null}function rp(e,r,l){try{l()}catch(u){_t(e,r,u)}}var D0=!1;function y2(e,r){if(hf=kc,e=xg(),sf(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var h=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var _=0,L=-1,I=-1,G=0,te=0,ie=e,ee=null;t:for(;;){for(var fe;ie!==l||h!==0&&ie.nodeType!==3||(L=_+h),ie!==x||u!==0&&ie.nodeType!==3||(I=_+u),ie.nodeType===3&&(_+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)ee=ie,ie=fe;for(;;){if(ie===e)break t;if(ee===l&&++G===h&&(L=_),ee===x&&++te===u&&(I=_),(fe=ie.nextSibling)!==null)break;ie=ee,ee=ie.parentNode}ie=fe}l=L===-1||I===-1?null:{start:L,end:I}}else l=null}l=l||{start:0,end:0}}else l=null;for(mf={focusedElem:e,selectionRange:l},kc=!1,pe=r;pe!==null;)if(r=pe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,pe=e;else for(;pe!==null;){r=pe;try{var me=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,Tt=me.memoizedState,U=r.stateNode,M=U.getSnapshotBeforeUpdate(r.elementType===r.type?ve:Wn(r.type,ve),Tt);U.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var H=r.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(oe){_t(r,r.return,oe)}if(e=r.sibling,e!==null){e.return=r.return,pe=e;break}pe=r.return}return me=D0,D0=!1,me}function cl(e,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&e)===e){var x=h.destroy;h.destroy=void 0,x!==void 0&&rp(r,l,x)}h=h.next}while(h!==u)}}function ad(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function np(e){var r=e.ref;if(r!==null){var l=e.stateNode;e.tag,e=l,typeof r=="function"?r(e):r.current=e}}function B0(e){var r=e.alternate;r!==null&&(e.alternate=null,B0(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[ni],delete r[Zo],delete r[yf],delete r[t2],delete r[r2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function U0(e){return e.tag===5||e.tag===3||e.tag===4}function W0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||U0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ip(e,r,l){var u=e.tag;if(u===5||u===6)e=e.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(e,r):l.insertBefore(e,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(e,l)):(r=l,r.appendChild(e)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=zc));else if(u!==4&&(e=e.child,e!==null))for(ip(e,r,l),e=e.sibling;e!==null;)ip(e,r,l),e=e.sibling}function ap(e,r,l){var u=e.tag;if(u===5||u===6)e=e.stateNode,r?l.insertBefore(e,r):l.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for(ap(e,r,l),e=e.sibling;e!==null;)ap(e,r,l),e=e.sibling}var tr=null,Hn=!1;function na(e,r,l){for(l=l.child;l!==null;)H0(e,r,l),l=l.sibling}function H0(e,r,l){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(ti,l)}catch{}switch(l.tag){case 5:dr||Ys(l,r);case 6:var u=tr,h=Hn;tr=null,na(e,r,l),tr=u,Hn=h,tr!==null&&(Hn?(e=tr,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):tr.removeChild(l.stateNode));break;case 18:tr!==null&&(Hn?(e=tr,l=l.stateNode,e.nodeType===8?vf(e.parentNode,l):e.nodeType===1&&vf(e,l),Uo(e)):vf(tr,l.stateNode));break;case 4:u=tr,h=Hn,tr=l.stateNode.containerInfo,Hn=!0,na(e,r,l),tr=u,Hn=h;break;case 0:case 11:case 14:case 15:if(!dr&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var x=h,_=x.destroy;x=x.tag,_!==void 0&&((x&2)!==0||(x&4)!==0)&&rp(l,r,_),h=h.next}while(h!==u)}na(e,r,l);break;case 1:if(!dr&&(Ys(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(L){_t(l,r,L)}na(e,r,l);break;case 21:na(e,r,l);break;case 22:l.mode&1?(dr=(u=dr)||l.memoizedState!==null,na(e,r,l),dr=u):na(e,r,l);break;default:na(e,r,l)}}function V0(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new v2),r.forEach(function(u){var h=A2.bind(null,e,u);l.has(u)||(l.add(u),u.then(h,h))})}}function Vn(e,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var h=l[u];try{var x=e,_=r,L=_;e:for(;L!==null;){switch(L.tag){case 5:tr=L.stateNode,Hn=!1;break e;case 3:tr=L.stateNode.containerInfo,Hn=!0;break e;case 4:tr=L.stateNode.containerInfo,Hn=!0;break e}L=L.return}if(tr===null)throw Error(n(160));H0(x,_,h),tr=null,Hn=!1;var I=h.alternate;I!==null&&(I.return=null),h.return=null}catch(G){_t(h,r,G)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Y0(r,e),r=r.sibling}function Y0(e,r){var l=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vn(r,e),si(e),u&4){try{cl(3,e,e.return),ad(3,e)}catch(ve){_t(e,e.return,ve)}try{cl(5,e,e.return)}catch(ve){_t(e,e.return,ve)}}break;case 1:Vn(r,e),si(e),u&512&&l!==null&&Ys(l,l.return);break;case 5:if(Vn(r,e),si(e),u&512&&l!==null&&Ys(l,l.return),e.flags&32){var h=e.stateNode;try{xr(h,"")}catch(ve){_t(e,e.return,ve)}}if(u&4&&(h=e.stateNode,h!=null)){var x=e.memoizedProps,_=l!==null?l.memoizedProps:x,L=e.type,I=e.updateQueue;if(e.updateQueue=null,I!==null)try{L==="input"&&x.type==="radio"&&x.name!=null&&wt(h,x),mn(L,_);var G=mn(L,x);for(_=0;_<I.length;_+=2){var te=I[_],ie=I[_+1];te==="style"?hn(h,ie):te==="dangerouslySetInnerHTML"?gr(h,ie):te==="children"?xr(h,ie):E(h,te,ie,G)}switch(L){case"input":q(h,x);break;case"textarea":Zn(h,x);break;case"select":var ee=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var fe=x.value;fe!=null?Qe(h,!!x.multiple,fe,!1):ee!==!!x.multiple&&(x.defaultValue!=null?Qe(h,!!x.multiple,x.defaultValue,!0):Qe(h,!!x.multiple,x.multiple?[]:"",!1))}h[Zo]=x}catch(ve){_t(e,e.return,ve)}}break;case 6:if(Vn(r,e),si(e),u&4){if(e.stateNode===null)throw Error(n(162));h=e.stateNode,x=e.memoizedProps;try{h.nodeValue=x}catch(ve){_t(e,e.return,ve)}}break;case 3:if(Vn(r,e),si(e),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Uo(r.containerInfo)}catch(ve){_t(e,e.return,ve)}break;case 4:Vn(r,e),si(e);break;case 13:Vn(r,e),si(e),h=e.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(lp=Fe())),u&4&&V0(e);break;case 22:if(te=l!==null&&l.memoizedState!==null,e.mode&1?(dr=(G=dr)||te,Vn(r,e),dr=G):Vn(r,e),si(e),u&8192){if(G=e.memoizedState!==null,(e.stateNode.isHidden=G)&&!te&&(e.mode&1)!==0)for(pe=e,te=e.child;te!==null;){for(ie=pe=te;pe!==null;){switch(ee=pe,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:cl(4,ee,ee.return);break;case 1:Ys(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){u=ee,l=ee.return;try{r=u,me.props=r.memoizedProps,me.state=r.memoizedState,me.componentWillUnmount()}catch(ve){_t(u,l,ve)}}break;case 5:Ys(ee,ee.return);break;case 22:if(ee.memoizedState!==null){X0(ie);continue}}fe!==null?(fe.return=ee,pe=fe):X0(ie)}te=te.sibling}e:for(te=null,ie=e;;){if(ie.tag===5){if(te===null){te=ie;try{h=ie.stateNode,G?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(L=ie.stateNode,I=ie.memoizedProps.style,_=I!=null&&I.hasOwnProperty("display")?I.display:null,L.style.display=Fa("display",_))}catch(ve){_t(e,e.return,ve)}}}else if(ie.tag===6){if(te===null)try{ie.stateNode.nodeValue=G?"":ie.memoizedProps}catch(ve){_t(e,e.return,ve)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;te===ie&&(te=null),ie=ie.return}te===ie&&(te=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Vn(r,e),si(e),u&4&&V0(e);break;case 21:break;default:Vn(r,e),si(e)}}function si(e){var r=e.flags;if(r&2){try{e:{for(var l=e.return;l!==null;){if(U0(l)){var u=l;break e}l=l.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(xr(h,""),u.flags&=-33);var x=W0(e);ap(e,x,h);break;case 3:case 4:var _=u.stateNode.containerInfo,L=W0(e);ip(e,L,_);break;default:throw Error(n(161))}}catch(I){_t(e,e.return,I)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function b2(e,r,l){pe=e,G0(e)}function G0(e,r,l){for(var u=(e.mode&1)!==0;pe!==null;){var h=pe,x=h.child;if(h.tag===22&&u){var _=h.memoizedState!==null||id;if(!_){var L=h.alternate,I=L!==null&&L.memoizedState!==null||dr;L=id;var G=dr;if(id=_,(dr=I)&&!G)for(pe=h;pe!==null;)_=pe,I=_.child,_.tag===22&&_.memoizedState!==null?Q0(h):I!==null?(I.return=_,pe=I):Q0(h);for(;x!==null;)pe=x,G0(x),x=x.sibling;pe=h,id=L,dr=G}q0(e)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,pe=x):q0(e)}}function q0(e){for(;pe!==null;){var r=pe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:dr||ad(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!dr)if(l===null)u.componentDidMount();else{var h=r.elementType===r.type?l.memoizedProps:Wn(r.type,l.memoizedProps);u.componentDidUpdate(h,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Xg(r,x,u);break;case 3:var _=r.updateQueue;if(_!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Xg(r,_,l)}break;case 5:var L=r.stateNode;if(l===null&&r.flags&4){l=L;var I=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&l.focus();break;case"img":I.src&&(l.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var G=r.alternate;if(G!==null){var te=G.memoizedState;if(te!==null){var ie=te.dehydrated;ie!==null&&Uo(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dr||r.flags&512&&np(r)}catch(ee){_t(r,r.return,ee)}}if(r===e){pe=null;break}if(l=r.sibling,l!==null){l.return=r.return,pe=l;break}pe=r.return}}function X0(e){for(;pe!==null;){var r=pe;if(r===e){pe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,pe=l;break}pe=r.return}}function Q0(e){for(;pe!==null;){var r=pe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{ad(4,r)}catch(I){_t(r,l,I)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(I){_t(r,h,I)}}var x=r.return;try{np(r)}catch(I){_t(r,x,I)}break;case 5:var _=r.return;try{np(r)}catch(I){_t(r,_,I)}}}catch(I){_t(r,r.return,I)}if(r===e){pe=null;break}var L=r.sibling;if(L!==null){L.return=r.return,pe=L;break}pe=r.return}}var w2=Math.ceil,sd=j.ReactCurrentDispatcher,sp=j.ReactCurrentOwner,wn=j.ReactCurrentBatchConfig,Ye=0,Qt=null,zt=null,rr=0,en=0,Gs=Zi(0),Wt=0,dl=null,Xa=0,od=0,op=0,ul=null,zr=null,lp=0,qs=1/0,Ei=null,ld=!1,cp=null,ia=null,cd=!1,aa=null,dd=0,fl=0,dp=null,ud=-1,fd=0;function wr(){return(Ye&6)!==0?Fe():ud!==-1?ud:ud=Fe()}function sa(e){return(e.mode&1)===0?1:(Ye&2)!==0&&rr!==0?rr&-rr:i2.transition!==null?(fd===0&&(fd=Wm()),fd):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:Jm(e.type)),e)}function Yn(e,r,l,u){if(50<fl)throw fl=0,dp=null,Error(n(185));zo(e,l,u),((Ye&2)===0||e!==Qt)&&(e===Qt&&((Ye&2)===0&&(od|=l),Wt===4&&oa(e,rr)),Mr(e,u),l===1&&Ye===0&&(r.mode&1)===0&&(qs=Fe()+500,Bc&&ea()))}function Mr(e,r){var l=e.callbackNode;iw(e,r);var u=wc(e,e===Qt?rr:0);if(u===0)l!==null&&Bt(l),e.callbackNode=null,e.callbackPriority=0;else if(r=u&-u,e.callbackPriority!==r){if(l!=null&&Bt(l),r===1)e.tag===0?n2(J0.bind(null,e)):zg(J0.bind(null,e)),$w(function(){(Ye&6)===0&&ea()}),l=null;else{switch(Hm(u)){case 1:l=Rr;break;case 4:l=Es;break;case 16:l=Da;break;case 536870912:l=Kr;break;default:l=Da}l=ax(l,K0.bind(null,e))}e.callbackPriority=r,e.callbackNode=l}}function K0(e,r){if(ud=-1,fd=0,(Ye&6)!==0)throw Error(n(327));var l=e.callbackNode;if(Xs()&&e.callbackNode!==l)return null;var u=wc(e,e===Qt?rr:0);if(u===0)return null;if((u&30)!==0||(u&e.expiredLanes)!==0||r)r=pd(e,u);else{r=u;var h=Ye;Ye|=2;var x=$0();(Qt!==e||rr!==r)&&(Ei=null,qs=Fe()+500,Ka(e,r));do try{k2();break}catch(L){Z0(e,L)}while(!0);Af(),sd.current=x,Ye=h,zt!==null?r=0:(Qt=null,rr=0,r=Wt)}if(r!==0){if(r===2&&(h=Hu(e),h!==0&&(u=h,r=up(e,h))),r===1)throw l=dl,Ka(e,0),oa(e,u),Mr(e,Fe()),l;if(r===6)oa(e,u);else{if(h=e.current.alternate,(u&30)===0&&!N2(h)&&(r=pd(e,u),r===2&&(x=Hu(e),x!==0&&(u=x,r=up(e,x))),r===1))throw l=dl,Ka(e,0),oa(e,u),Mr(e,Fe()),l;switch(e.finishedWork=h,e.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Ja(e,zr,Ei);break;case 3:if(oa(e,u),(u&130023424)===u&&(r=lp+500-Fe(),10<r)){if(wc(e,0)!==0)break;if(h=e.suspendedLanes,(h&u)!==u){wr(),e.pingedLanes|=e.suspendedLanes&h;break}e.timeoutHandle=xf(Ja.bind(null,e,zr,Ei),r);break}Ja(e,zr,Ei);break;case 4:if(oa(e,u),(u&4194240)===u)break;for(r=e.eventTimes,h=-1;0<u;){var _=31-Dn(u);x=1<<_,_=r[_],_>h&&(h=_),u&=~x}if(u=h,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*w2(u/1960))-u,10<u){e.timeoutHandle=xf(Ja.bind(null,e,zr,Ei),u);break}Ja(e,zr,Ei);break;case 5:Ja(e,zr,Ei);break;default:throw Error(n(329))}}}return Mr(e,Fe()),e.callbackNode===l?K0.bind(null,e):null}function up(e,r){var l=ul;return e.current.memoizedState.isDehydrated&&(Ka(e,r).flags|=256),e=pd(e,r),e!==2&&(r=zr,zr=l,r!==null&&fp(r)),e}function fp(e){zr===null?zr=e:zr.push.apply(zr,e)}function N2(e){for(var r=e;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var h=l[u],x=h.getSnapshot;h=h.value;try{if(!Bn(x(),h))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oa(e,r){for(r&=~op,r&=~od,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var l=31-Dn(r),u=1<<l;e[l]=-1,r&=~u}}function J0(e){if((Ye&6)!==0)throw Error(n(327));Xs();var r=wc(e,0);if((r&1)===0)return Mr(e,Fe()),null;var l=pd(e,r);if(e.tag!==0&&l===2){var u=Hu(e);u!==0&&(r=u,l=up(e,u))}if(l===1)throw l=dl,Ka(e,0),oa(e,r),Mr(e,Fe()),l;if(l===6)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Ja(e,zr,Ei),Mr(e,Fe()),null}function pp(e,r){var l=Ye;Ye|=1;try{return e(r)}finally{Ye=l,Ye===0&&(qs=Fe()+500,Bc&&ea())}}function Qa(e){aa!==null&&aa.tag===0&&(Ye&6)===0&&Xs();var r=Ye;Ye|=1;var l=wn.transition,u=Ke;try{if(wn.transition=null,Ke=1,e)return e()}finally{Ke=u,wn.transition=l,Ye=r,(Ye&6)===0&&ea()}}function hp(){en=Gs.current,lt(Gs)}function Ka(e,r){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,Zw(l)),zt!==null)for(l=zt.return;l!==null;){var u=l;switch(_f(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Fc();break;case 3:Hs(),lt(Lr),lt(or),zf();break;case 5:Of(u);break;case 4:Hs();break;case 13:lt(ht);break;case 19:lt(ht);break;case 10:Cf(u.type._context);break;case 22:case 23:hp()}l=l.return}if(Qt=e,zt=e=la(e.current,null),rr=en=r,Wt=0,dl=null,op=od=Xa=0,zr=ul=null,Ya!==null){for(r=0;r<Ya.length;r++)if(l=Ya[r],u=l.interleaved,u!==null){l.interleaved=null;var h=u.next,x=l.pending;if(x!==null){var _=x.next;x.next=h,u.next=_}l.pending=u}Ya=null}return e}function Z0(e,r){do{var l=zt;try{if(Af(),Kc.current=ed,Jc){for(var u=mt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Jc=!1}if(qa=0,Xt=Ut=mt=null,il=!1,al=0,sp.current=null,l===null||l.return===null){Wt=1,dl=r,zt=null;break}e:{var x=e,_=l.return,L=l,I=r;if(r=rr,L.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var G=I,te=L,ie=te.tag;if((te.mode&1)===0&&(ie===0||ie===11||ie===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var fe=_0(_);if(fe!==null){fe.flags&=-257,k0(fe,_,L,x,r),fe.mode&1&&N0(x,G,r),r=fe,I=G;var me=r.updateQueue;if(me===null){var ve=new Set;ve.add(I),r.updateQueue=ve}else me.add(I);break e}else{if((r&1)===0){N0(x,G,r),mp();break e}I=Error(n(426))}}else if(ut&&L.mode&1){var Tt=_0(_);if(Tt!==null){(Tt.flags&65536)===0&&(Tt.flags|=256),k0(Tt,_,L,x,r),Ef(Vs(I,L));break e}}x=I=Vs(I,L),Wt!==4&&(Wt=2),ul===null?ul=[x]:ul.push(x),x=_;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var U=b0(x,I,r);qg(x,U);break e;case 1:L=I;var M=x.type,H=x.stateNode;if((x.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(ia===null||!ia.has(H)))){x.flags|=65536,r&=-r,x.lanes|=r;var oe=w0(x,L,r);qg(x,oe);break e}}x=x.return}while(x!==null)}tx(l)}catch(be){r=be,zt===l&&l!==null&&(zt=l=l.return);continue}break}while(!0)}function $0(){var e=sd.current;return sd.current=ed,e===null?ed:e}function mp(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||(Xa&268435455)===0&&(od&268435455)===0||oa(Qt,rr)}function pd(e,r){var l=Ye;Ye|=2;var u=$0();(Qt!==e||rr!==r)&&(Ei=null,Ka(e,r));do try{_2();break}catch(h){Z0(e,h)}while(!0);if(Af(),Ye=l,sd.current=u,zt!==null)throw Error(n(261));return Qt=null,rr=0,Wt}function _2(){for(;zt!==null;)ex(zt)}function k2(){for(;zt!==null&&!vi();)ex(zt)}function ex(e){var r=ix(e.alternate,e,en);e.memoizedProps=e.pendingProps,r===null?tx(e):zt=r,sp.current=null}function tx(e){var r=e;do{var l=r.alternate;if(e=r.return,(r.flags&32768)===0){if(l=g2(l,r,en),l!==null){zt=l;return}}else{if(l=x2(l,r),l!==null){l.flags&=32767,zt=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Wt=6,zt=null;return}}if(r=r.sibling,r!==null){zt=r;return}zt=r=e}while(r!==null);Wt===0&&(Wt=5)}function Ja(e,r,l){var u=Ke,h=wn.transition;try{wn.transition=null,Ke=1,j2(e,r,l,u)}finally{wn.transition=h,Ke=u}return null}function j2(e,r,l,u){do Xs();while(aa!==null);if((Ye&6)!==0)throw Error(n(327));l=e.finishedWork;var h=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var x=l.lanes|l.childLanes;if(aw(e,x),e===Qt&&(zt=Qt=null,rr=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||cd||(cd=!0,ax(Da,function(){return Xs(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=wn.transition,wn.transition=null;var _=Ke;Ke=1;var L=Ye;Ye|=4,sp.current=null,y2(e,l),Y0(l,e),Yw(mf),kc=!!hf,mf=hf=null,e.current=l,b2(l),js(),Ye=L,Ke=_,wn.transition=x}else e.current=l;if(cd&&(cd=!1,aa=e,dd=h),x=e.pendingLanes,x===0&&(ia=null),ri(l.stateNode),Mr(e,Fe()),r!==null)for(u=e.onRecoverableError,l=0;l<r.length;l++)h=r[l],u(h.value,{componentStack:h.stack,digest:h.digest});if(ld)throw ld=!1,e=cp,cp=null,e;return(dd&1)!==0&&e.tag!==0&&Xs(),x=e.pendingLanes,(x&1)!==0?e===dp?fl++:(fl=0,dp=e):fl=0,ea(),null}function Xs(){if(aa!==null){var e=Hm(dd),r=wn.transition,l=Ke;try{if(wn.transition=null,Ke=16>e?16:e,aa===null)var u=!1;else{if(e=aa,aa=null,dd=0,(Ye&6)!==0)throw Error(n(331));var h=Ye;for(Ye|=4,pe=e.current;pe!==null;){var x=pe,_=x.child;if((pe.flags&16)!==0){var L=x.deletions;if(L!==null){for(var I=0;I<L.length;I++){var G=L[I];for(pe=G;pe!==null;){var te=pe;switch(te.tag){case 0:case 11:case 15:cl(8,te,x)}var ie=te.child;if(ie!==null)ie.return=te,pe=ie;else for(;pe!==null;){te=pe;var ee=te.sibling,fe=te.return;if(B0(te),te===G){pe=null;break}if(ee!==null){ee.return=fe,pe=ee;break}pe=fe}}}var me=x.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var Tt=ve.sibling;ve.sibling=null,ve=Tt}while(ve!==null)}}pe=x}}if((x.subtreeFlags&2064)!==0&&_!==null)_.return=x,pe=_;else e:for(;pe!==null;){if(x=pe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:cl(9,x,x.return)}var U=x.sibling;if(U!==null){U.return=x.return,pe=U;break e}pe=x.return}}var M=e.current;for(pe=M;pe!==null;){_=pe;var H=_.child;if((_.subtreeFlags&2064)!==0&&H!==null)H.return=_,pe=H;else e:for(_=M;pe!==null;){if(L=pe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:ad(9,L)}}catch(be){_t(L,L.return,be)}if(L===_){pe=null;break e}var oe=L.sibling;if(oe!==null){oe.return=L.return,pe=oe;break e}pe=L.return}}if(Ye=h,ea(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(ti,e)}catch{}u=!0}return u}finally{Ke=l,wn.transition=r}}return!1}function rx(e,r,l){r=Vs(l,r),r=b0(e,r,1),e=ra(e,r,1),r=wr(),e!==null&&(zo(e,1,r),Mr(e,r))}function _t(e,r,l){if(e.tag===3)rx(e,e,l);else for(;r!==null;){if(r.tag===3){rx(r,e,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ia===null||!ia.has(u))){e=Vs(l,e),e=w0(r,e,1),r=ra(r,e,1),e=wr(),r!==null&&(zo(r,1,e),Mr(r,e));break}}r=r.return}}function E2(e,r,l){var u=e.pingCache;u!==null&&u.delete(r),r=wr(),e.pingedLanes|=e.suspendedLanes&l,Qt===e&&(rr&l)===l&&(Wt===4||Wt===3&&(rr&130023424)===rr&&500>Fe()-lp?Ka(e,0):op|=l),Mr(e,r)}function nx(e,r){r===0&&((e.mode&1)===0?r=1:(r=bc,bc<<=1,(bc&130023424)===0&&(bc=4194304)));var l=wr();e=_i(e,r),e!==null&&(zo(e,r,l),Mr(e,l))}function S2(e){var r=e.memoizedState,l=0;r!==null&&(l=r.retryLane),nx(e,l)}function A2(e,r){var l=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(l=h.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),nx(e,l)}var ix;ix=function(e,r,l){if(e!==null)if(e.memoizedProps!==r.pendingProps||Lr.current)Ir=!0;else{if((e.lanes&l)===0&&(r.flags&128)===0)return Ir=!1,m2(e,r,l);Ir=(e.flags&131072)!==0}else Ir=!1,ut&&(r.flags&1048576)!==0&&Mg(r,Wc,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;nd(e,r),e=r.pendingProps;var h=zs(r,or.current);Ws(r,l),h=Df(null,r,u,e,h,l);var x=Bf();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Or(u)?(x=!0,Dc(r)):x=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Rf(r),h.updater=td,r.stateNode=h,h._reactInternals=r,Gf(r,u,e,l),r=Kf(null,r,u,!0,x,l)):(r.tag=0,ut&&x&&Nf(r),br(null,r,h,l),r=r.child),r;case 16:u=r.elementType;e:{switch(nd(e,r),e=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=T2(u),e=Wn(u,e),h){case 0:r=Qf(null,r,u,e,l);break e;case 1:r=T0(null,r,u,e,l);break e;case 11:r=j0(null,r,u,e,l);break e;case 14:r=E0(null,r,u,Wn(u.type,e),l);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Wn(u,h),Qf(e,r,u,h,l);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Wn(u,h),T0(e,r,u,h,l);case 3:e:{if(P0(r),e===null)throw Error(n(387));u=r.pendingProps,x=r.memoizedState,h=x.element,Gg(e,r),Xc(r,u,null,l);var _=r.memoizedState;if(u=_.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){h=Vs(Error(n(423)),r),r=R0(e,r,u,l,h);break e}else if(u!==h){h=Vs(Error(n(424)),r),r=R0(e,r,u,l,h);break e}else for($r=Ji(r.stateNode.containerInfo.firstChild),Zr=r,ut=!0,Un=null,l=Vg(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ds(),u===h){r=ji(e,r,l);break e}br(e,r,u,l)}r=r.child}return r;case 5:return Qg(r),e===null&&jf(r),u=r.type,h=r.pendingProps,x=e!==null?e.memoizedProps:null,_=h.children,gf(u,h)?_=null:x!==null&&gf(u,x)&&(r.flags|=32),C0(e,r),br(e,r,_,l),r.child;case 6:return e===null&&jf(r),null;case 13:return L0(e,r,l);case 4:return Lf(r,r.stateNode.containerInfo),u=r.pendingProps,e===null?r.child=Bs(r,null,u,l):br(e,r,u,l),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Wn(u,h),j0(e,r,u,h,l);case 7:return br(e,r,r.pendingProps,l),r.child;case 8:return br(e,r,r.pendingProps.children,l),r.child;case 12:return br(e,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,x=r.memoizedProps,_=h.value,rt(Yc,u._currentValue),u._currentValue=_,x!==null)if(Bn(x.value,_)){if(x.children===h.children&&!Lr.current){r=ji(e,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var L=x.dependencies;if(L!==null){_=x.child;for(var I=L.firstContext;I!==null;){if(I.context===u){if(x.tag===1){I=ki(-1,l&-l),I.tag=2;var G=x.updateQueue;if(G!==null){G=G.shared;var te=G.pending;te===null?I.next=I:(I.next=te.next,te.next=I),G.pending=I}}x.lanes|=l,I=x.alternate,I!==null&&(I.lanes|=l),Tf(x.return,l,r),L.lanes|=l;break}I=I.next}}else if(x.tag===10)_=x.type===r.type?null:x.child;else if(x.tag===18){if(_=x.return,_===null)throw Error(n(341));_.lanes|=l,L=_.alternate,L!==null&&(L.lanes|=l),Tf(_,l,r),_=x.sibling}else _=x.child;if(_!==null)_.return=x;else for(_=x;_!==null;){if(_===r){_=null;break}if(x=_.sibling,x!==null){x.return=_.return,_=x;break}_=_.return}x=_}br(e,r,h.children,l),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ws(r,l),h=yn(h),u=u(h),r.flags|=1,br(e,r,u,l),r.child;case 14:return u=r.type,h=Wn(u,r.pendingProps),h=Wn(u.type,h),E0(e,r,u,h,l);case 15:return S0(e,r,r.type,r.pendingProps,l);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Wn(u,h),nd(e,r),r.tag=1,Or(u)?(e=!0,Dc(r)):e=!1,Ws(r,l),v0(r,u,h),Gf(r,u,h,l),Kf(null,r,u,!0,e,l);case 19:return I0(e,r,l);case 22:return A0(e,r,l)}throw Error(n(156,r.tag))};function ax(e,r){return It(e,r)}function C2(e,r,l,u){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,r,l,u){return new C2(e,r,l,u)}function gp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T2(e){if(typeof e=="function")return gp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===F)return 11;if(e===ae)return 14}return 2}function la(e,r){var l=e.alternate;return l===null?(l=Nn(e.tag,r,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=r,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,r=e.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function hd(e,r,l,u,h,x){var _=2;if(u=e,typeof e=="function")gp(e)&&(_=1);else if(typeof e=="string")_=5;else e:switch(e){case O:return Za(l.children,h,x,r);case B:_=8,h|=8;break;case W:return e=Nn(12,l,r,h|2),e.elementType=W,e.lanes=x,e;case J:return e=Nn(13,l,r,h),e.elementType=J,e.lanes=x,e;case Z:return e=Nn(19,l,r,h),e.elementType=Z,e.lanes=x,e;case $:return md(l,h,x,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:_=10;break e;case Q:_=9;break e;case F:_=11;break e;case ae:_=14;break e;case ce:_=16,u=null;break e}throw Error(n(130,e==null?e:typeof e,""))}return r=Nn(_,l,r,h),r.elementType=e,r.type=u,r.lanes=x,r}function Za(e,r,l,u){return e=Nn(7,e,u,r),e.lanes=l,e}function md(e,r,l,u){return e=Nn(22,e,u,r),e.elementType=$,e.lanes=l,e.stateNode={isHidden:!1},e}function xp(e,r,l){return e=Nn(6,e,null,r),e.lanes=l,e}function vp(e,r,l){return r=Nn(4,e.children!==null?e.children:[],e.key,r),r.lanes=l,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function P2(e,r,l,u,h){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function yp(e,r,l,u,h,x,_,L,I){return e=new P2(e,r,l,L,I),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Nn(3,null,null,r),e.current=x,x.stateNode=e,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(x),e}function R2(e,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:e,containerInfo:r,implementation:l}}function sx(e){if(!e)return $i;e=e._reactInternals;e:{if(He(e)!==e||e.tag!==1)throw Error(n(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(e.tag===1){var l=e.type;if(Or(l))return Og(e,l,r)}return r}function ox(e,r,l,u,h,x,_,L,I){return e=yp(l,u,!0,e,h,x,_,L,I),e.context=sx(null),l=e.current,u=wr(),h=sa(l),x=ki(u,h),x.callback=r??null,ra(l,x,h),e.current.lanes=h,zo(e,h,u),Mr(e,u),e}function gd(e,r,l,u){var h=r.current,x=wr(),_=sa(h);return l=sx(l),r.context===null?r.context=l:r.pendingContext=l,r=ki(x,_),r.payload={element:e},u=u===void 0?null:u,u!==null&&(r.callback=u),e=ra(h,r,_),e!==null&&(Yn(e,h,_,x),qc(e,h,_)),_}function xd(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function lx(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<r?l:r}}function bp(e,r){lx(e,r),(e=e.alternate)&&lx(e,r)}function L2(){return null}var cx=typeof reportError=="function"?reportError:function(e){console.error(e)};function wp(e){this._internalRoot=e}vd.prototype.render=wp.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(n(409));gd(e,r,null,null)},vd.prototype.unmount=wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qa(function(){gd(null,e,null,null)}),r[yi]=null}};function vd(e){this._internalRoot=e}vd.prototype.unstable_scheduleHydration=function(e){if(e){var r=Gm();e={blockedOn:null,target:e,priority:r};for(var l=0;l<Xi.length&&r!==0&&r<Xi[l].priority;l++);Xi.splice(l,0,e),l===0&&Qm(e)}};function Np(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dx(){}function O2(e,r,l,u,h){if(h){if(typeof u=="function"){var x=u;u=function(){var G=xd(_);x.call(G)}}var _=ox(r,u,e,0,null,!1,!1,"",dx);return e._reactRootContainer=_,e[yi]=_.current,Ko(e.nodeType===8?e.parentNode:e),Qa(),_}for(;h=e.lastChild;)e.removeChild(h);if(typeof u=="function"){var L=u;u=function(){var G=xd(I);L.call(G)}}var I=yp(e,0,!1,null,null,!1,!1,"",dx);return e._reactRootContainer=I,e[yi]=I.current,Ko(e.nodeType===8?e.parentNode:e),Qa(function(){gd(r,I,l,u)}),I}function bd(e,r,l,u,h){var x=l._reactRootContainer;if(x){var _=x;if(typeof h=="function"){var L=h;h=function(){var I=xd(_);L.call(I)}}gd(r,_,e,h)}else _=O2(l,r,e,h,u);return xd(_)}Vm=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var l=Io(r.pendingLanes);l!==0&&(Yu(r,l|1),Mr(r,Fe()),(Ye&6)===0&&(qs=Fe()+500,ea()))}break;case 13:Qa(function(){var u=_i(e,1);if(u!==null){var h=wr();Yn(u,e,1,h)}}),bp(e,1)}},Gu=function(e){if(e.tag===13){var r=_i(e,134217728);if(r!==null){var l=wr();Yn(r,e,134217728,l)}bp(e,134217728)}},Ym=function(e){if(e.tag===13){var r=sa(e),l=_i(e,r);if(l!==null){var u=wr();Yn(l,e,r,u)}bp(e,r)}},Gm=function(){return Ke},qm=function(e,r){var l=Ke;try{return Ke=e,r()}finally{Ke=l}},Fn=function(e,r,l){switch(r){case"input":if(q(e,l),r=l.name,l.type==="radio"&&r!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==e&&u.form===e.form){var h=Mc(u);if(!h)throw Error(n(90));St(u),q(u,h)}}}break;case"textarea":Zn(e,l);break;case"select":r=l.value,r!=null&&Qe(e,!!l.multiple,r,!1)}},gn=pp,Vi=Qa;var I2={usingClientEntryPoint:!1,Events:[$o,Os,Mc,ei,xi,pp]},pl={findFiberByHostInstance:Ua,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z2={bundleType:pl.bundleType,version:pl.version,rendererPackageName:pl.rendererPackageName,rendererConfig:pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qr(e),e===null?null:e.stateNode},findFiberByHostInstance:pl.findFiberByHostInstance||L2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wd.isDisabled&&wd.supportsFiber)try{ti=wd.inject(z2),yr=wd}catch{}}return Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I2,Fr.createPortal=function(e,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(r))throw Error(n(200));return R2(e,r,null,l)},Fr.createRoot=function(e,r){if(!Np(e))throw Error(n(299));var l=!1,u="",h=cx;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=yp(e,1,!1,null,null,l,!1,u,h),e[yi]=r.current,Ko(e.nodeType===8?e.parentNode:e),new wp(r)},Fr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=Qr(r),e=e===null?null:e.stateNode,e},Fr.flushSync=function(e){return Qa(e)},Fr.hydrate=function(e,r,l){if(!yd(r))throw Error(n(200));return bd(null,e,r,!0,l)},Fr.hydrateRoot=function(e,r,l){if(!Np(e))throw Error(n(405));var u=l!=null&&l.hydratedSources||null,h=!1,x="",_=cx;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(_=l.onRecoverableError)),r=ox(r,null,e,1,l??null,h,!1,x,_),e[yi]=r.current,Ko(e),u)for(e=0;e<u.length;e++)l=u[e],h=l._getVersion,h=h(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,h]:r.mutableSourceEagerHydrationData.push(l,h);return new vd(r)},Fr.render=function(e,r,l){if(!yd(r))throw Error(n(200));return bd(null,e,r,!1,l)},Fr.unmountComponentAtNode=function(e){if(!yd(e))throw Error(n(40));return e._reactRootContainer?(Qa(function(){bd(null,null,e,!1,function(){e._reactRootContainer=null,e[yi]=null})}),!0):!1},Fr.unstable_batchedUpdates=pp,Fr.unstable_renderSubtreeIntoContainer=function(e,r,l,u){if(!yd(l))throw Error(n(200));if(e==null||e._reactInternals===void 0)throw Error(n(38));return bd(e,r,l,!1,u)},Fr.version="18.3.1-next-f1338f8080-20240426",Fr}var vx;function e1(){if(vx)return jp.exports;vx=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),jp.exports=Y2(),jp.exports}var yx;function G2(){if(yx)return Nd;yx=1;var a=e1();return Nd.createRoot=a.createRoot,Nd.hydrateRoot=a.hydrateRoot,Nd}var q2=G2();e1();function Hl(){return Hl=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},Hl.apply(null,arguments)}var ga;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(ga||(ga={}));const bx="popstate";function X2(a){a===void 0&&(a={});function t(i,s){let{pathname:c,search:d,hash:f}=i.location;return Qp("",{pathname:c,search:d,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:tu(s)}return K2(t,n,null,a)}function Et(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function t1(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q2(){return Math.random().toString(36).substr(2,8)}function wx(a,t){return{usr:a.state,key:a.key,idx:t}}function Qp(a,t,n,i){return n===void 0&&(n=null),Hl({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof t=="string"?Co(t):t,{state:n,key:t&&t.key||i||Q2()})}function tu(a){let{pathname:t="/",search:n="",hash:i=""}=a;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Co(a){let t={};if(a){let n=a.indexOf("#");n>=0&&(t.hash=a.substr(n),a=a.substr(0,n));let i=a.indexOf("?");i>=0&&(t.search=a.substr(i),a=a.substr(0,i)),a&&(t.pathname=a)}return t}function K2(a,t,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:c=!1}=i,d=s.history,f=ga.Pop,p=null,m=g();m==null&&(m=0,d.replaceState(Hl({},d.state,{idx:m}),""));function g(){return(d.state||{idx:null}).idx}function y(){f=ga.Pop;let k=g(),C=k==null?null:k-m;m=k,p&&p({action:f,location:w.location,delta:C})}function v(k,C){f=ga.Push;let A=Qp(w.location,k,C);m=g()+1;let E=wx(A,m),j=w.createHref(A);try{d.pushState(E,"",j)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;s.location.assign(j)}c&&p&&p({action:f,location:w.location,delta:1})}function b(k,C){f=ga.Replace;let A=Qp(w.location,k,C);m=g();let E=wx(A,m),j=w.createHref(A);d.replaceState(E,"",j),c&&p&&p({action:f,location:w.location,delta:0})}function N(k){let C=s.location.origin!=="null"?s.location.origin:s.location.href,A=typeof k=="string"?k:tu(k);return A=A.replace(/ $/,"%20"),Et(C,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,C)}let w={get action(){return f},get location(){return a(s,d)},listen(k){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(bx,y),p=k,()=>{s.removeEventListener(bx,y),p=null}},createHref(k){return t(s,k)},createURL:N,encodeLocation(k){let C=N(k);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:v,replace:b,go(k){return d.go(k)}};return w}var Nx;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(Nx||(Nx={}));function J2(a,t,n){return n===void 0&&(n="/"),Z2(a,t,n)}function Z2(a,t,n,i){let s=typeof t=="string"?Co(t):t,c=yo(s.pathname||"/",n);if(c==null)return null;let d=r1(a);$2(d);let f=null,p=d5(c);for(let m=0;f==null&&m<d.length;++m)f=l5(d[m],p);return f}function r1(a,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(c,d,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let m=_a([i,p.relativePath]),g=n.concat(p);c.children&&c.children.length>0&&(Et(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),r1(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:s5(m,c.index),routesMeta:g})};return a.forEach((c,d)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))s(c,d);else for(let p of n1(c.path))s(c,d,p)}),t}function n1(a){let t=a.split("/");if(t.length===0)return[];let[n,...i]=t,s=n.endsWith("?"),c=n.replace(/\?$/,"");if(i.length===0)return s?[c,""]:[c];let d=n1(i.join("/")),f=[];return f.push(...d.map(p=>p===""?c:[c,p].join("/"))),s&&f.push(...d),f.map(p=>a.startsWith("/")&&p===""?"/":p)}function $2(a){a.sort((t,n)=>t.score!==n.score?n.score-t.score:o5(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const e5=/^:[\w-]+$/,t5=3,r5=2,n5=1,i5=10,a5=-2,_x=a=>a==="*";function s5(a,t){let n=a.split("/"),i=n.length;return n.some(_x)&&(i+=a5),t&&(i+=r5),n.filter(s=>!_x(s)).reduce((s,c)=>s+(e5.test(c)?t5:c===""?n5:i5),i)}function o5(a,t){return a.length===t.length&&a.slice(0,-1).every((i,s)=>i===t[s])?a[a.length-1]-t[t.length-1]:0}function l5(a,t,n){let{routesMeta:i}=a,s={},c="/",d=[];for(let f=0;f<i.length;++f){let p=i[f],m=f===i.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=Kp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!y)return null;Object.assign(s,y.params),d.push({params:s,pathname:_a([c,y.pathname]),pathnameBase:p5(_a([c,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(c=_a([c,y.pathnameBase]))}return d}function Kp(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,i]=c5(a.path,a.caseSensitive,a.end),s=t.match(n);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((m,g,y)=>{let{paramName:v,isOptional:b}=g;if(v==="*"){let w=f[y]||"";d=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const N=f[y];return b&&!N?m[v]=void 0:m[v]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:a}}function c5(a,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),t1(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let i=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(i.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function d5(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return t1(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),a}}function yo(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=a.charAt(n);return i&&i!=="/"?null:a.slice(n)||"/"}function u5(a,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:s=""}=typeof a=="string"?Co(a):a,c;return n?(n=s1(n),n.startsWith("/")?c=kx(n.substring(1),"/"):c=kx(n,t)):c=t,{pathname:c,search:h5(i),hash:m5(s)}}function kx(a,t){let n=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ap(a,t,n,i){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f5(a){return a.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function i1(a,t){let n=f5(a);return t?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function a1(a,t,n,i){i===void 0&&(i=!1);let s;typeof a=="string"?s=Co(a):(s=Hl({},a),Et(!s.pathname||!s.pathname.includes("?"),Ap("?","pathname","search",s)),Et(!s.pathname||!s.pathname.includes("#"),Ap("#","pathname","hash",s)),Et(!s.search||!s.search.includes("#"),Ap("#","search","hash",s)));let c=a===""||s.pathname==="",d=c?"/":s.pathname,f;if(d==null)f=n;else{let y=t.length-1;if(!i&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),y-=1;s.pathname=v.join("/")}f=y>=0?t[y]:"/"}let p=u5(s,f),m=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}const s1=a=>a.replace(/\/\/+/g,"/"),_a=a=>s1(a.join("/")),p5=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),h5=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,m5=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function g5(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const o1=["post","put","patch","delete"];new Set(o1);const x5=["get",...o1];new Set(x5);function Vl(){return Vl=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},Vl.apply(null,arguments)}const bu=R.createContext(null),l1=R.createContext(null),La=R.createContext(null),wu=R.createContext(null),Wi=R.createContext({outlet:null,matches:[],isDataRoute:!1}),c1=R.createContext(null);function v5(a,t){let{relative:n}=t===void 0?{}:t;lc()||Et(!1);let{basename:i,navigator:s}=R.useContext(La),{hash:c,pathname:d,search:f}=Nu(a,{relative:n}),p=d;return i!=="/"&&(p=d==="/"?i:_a([i,d])),s.createHref({pathname:p,search:f,hash:c})}function lc(){return R.useContext(wu)!=null}function To(){return lc()||Et(!1),R.useContext(wu).location}function d1(a){R.useContext(La).static||R.useLayoutEffect(a)}function y5(){let{isDataRoute:a}=R.useContext(Wi);return a?I5():b5()}function b5(){lc()||Et(!1);let a=R.useContext(bu),{basename:t,future:n,navigator:i}=R.useContext(La),{matches:s}=R.useContext(Wi),{pathname:c}=To(),d=JSON.stringify(i1(s,n.v7_relativeSplatPath)),f=R.useRef(!1);return d1(()=>{f.current=!0}),R.useCallback(function(m,g){if(g===void 0&&(g={}),!f.current)return;if(typeof m=="number"){i.go(m);return}let y=a1(m,JSON.parse(d),c,g.relative==="path");a==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:_a([t,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[t,i,d,c,a])}const w5=R.createContext(null);function N5(a){let t=R.useContext(Wi).outlet;return t&&R.createElement(w5.Provider,{value:a},t)}function _5(){let{matches:a}=R.useContext(Wi),t=a[a.length-1];return t?t.params:{}}function Nu(a,t){let{relative:n}=t===void 0?{}:t,{future:i}=R.useContext(La),{matches:s}=R.useContext(Wi),{pathname:c}=To(),d=JSON.stringify(i1(s,i.v7_relativeSplatPath));return R.useMemo(()=>a1(a,JSON.parse(d),c,n==="path"),[a,d,c,n])}function k5(a,t){return j5(a,t)}function j5(a,t,n,i){lc()||Et(!1);let{navigator:s}=R.useContext(La),{matches:c}=R.useContext(Wi),d=c[c.length-1],f=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let m=To(),g;if(t){var y;let k=typeof t=="string"?Co(t):t;p==="/"||(y=k.pathname)!=null&&y.startsWith(p)||Et(!1),g=k}else g=m;let v=g.pathname||"/",b=v;if(p!=="/"){let k=p.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let N=J2(a,{pathname:b}),w=T5(N&&N.map(k=>Object.assign({},k,{params:Object.assign({},f,k.params),pathname:_a([p,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?p:_a([p,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),c,n,i);return t&&w?R.createElement(wu.Provider,{value:{location:Vl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ga.Pop}},w):w}function E5(){let a=O5(),t=g5(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:s},n):null,null)}const S5=R.createElement(E5,null);class A5 extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(Wi.Provider,{value:this.props.routeContext},R.createElement(c1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C5(a){let{routeContext:t,match:n,children:i}=a,s=R.useContext(bu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Wi.Provider,{value:t},i)}function T5(a,t,n,i){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),a==null){var c;if(!n)return null;if(n.errors)a=n.matches;else if((c=i)!=null&&c.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let d=a,f=(s=n)==null?void 0:s.errors;if(f!=null){let g=d.findIndex(y=>y.route.id&&f?.[y.route.id]!==void 0);g>=0||Et(!1),d=d.slice(0,Math.min(d.length,g+1))}let p=!1,m=-1;if(n&&i&&i.v7_partialHydration)for(let g=0;g<d.length;g++){let y=d[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:v,errors:b}=n,N=y.route.loader&&v[y.route.id]===void 0&&(!b||b[y.route.id]===void 0);if(y.route.lazy||N){p=!0,m>=0?d=d.slice(0,m+1):d=[d[0]];break}}}return d.reduceRight((g,y,v)=>{let b,N=!1,w=null,k=null;n&&(b=f&&y.route.id?f[y.route.id]:void 0,w=y.route.errorElement||S5,p&&(m<0&&v===0?(z5("route-fallback"),N=!0,k=null):m===v&&(N=!0,k=y.route.hydrateFallbackElement||null)));let C=t.concat(d.slice(0,v+1)),A=()=>{let E;return b?E=w:N?E=k:y.route.Component?E=R.createElement(y.route.Component,null):y.route.element?E=y.route.element:E=g,R.createElement(C5,{match:y,routeContext:{outlet:g,matches:C,isDataRoute:n!=null},children:E})};return n&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?R.createElement(A5,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:A(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):A()},null)}var u1=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(u1||{}),f1=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(f1||{});function P5(a){let t=R.useContext(bu);return t||Et(!1),t}function R5(a){let t=R.useContext(l1);return t||Et(!1),t}function L5(a){let t=R.useContext(Wi);return t||Et(!1),t}function p1(a){let t=L5(),n=t.matches[t.matches.length-1];return n.route.id||Et(!1),n.route.id}function O5(){var a;let t=R.useContext(c1),n=R5(),i=p1();return t!==void 0?t:(a=n.errors)==null?void 0:a[i]}function I5(){let{router:a}=P5(u1.UseNavigateStable),t=p1(f1.UseNavigateStable),n=R.useRef(!1);return d1(()=>{n.current=!0}),R.useCallback(function(s,c){c===void 0&&(c={}),n.current&&(typeof s=="number"?a.navigate(s):a.navigate(s,Vl({fromRouteId:t},c)))},[a,t])}const jx={};function z5(a,t,n){jx[a]||(jx[a]=!0)}function M5(a,t){a?.v7_startTransition,a?.v7_relativeSplatPath}function Ex(a){return N5(a.context)}function _n(a){Et(!1)}function F5(a){let{basename:t="/",children:n=null,location:i,navigationType:s=ga.Pop,navigator:c,static:d=!1,future:f}=a;lc()&&Et(!1);let p=t.replace(/^\/*/,"/"),m=R.useMemo(()=>({basename:p,navigator:c,static:d,future:Vl({v7_relativeSplatPath:!1},f)}),[p,f,c,d]);typeof i=="string"&&(i=Co(i));let{pathname:g="/",search:y="",hash:v="",state:b=null,key:N="default"}=i,w=R.useMemo(()=>{let k=yo(g,p);return k==null?null:{location:{pathname:k,search:y,hash:v,state:b,key:N},navigationType:s}},[p,g,y,v,b,N,s]);return w==null?null:R.createElement(La.Provider,{value:m},R.createElement(wu.Provider,{children:n,value:w}))}function D5(a){let{children:t,location:n}=a;return k5(Jp(t),n)}new Promise(()=>{});function Jp(a,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(a,(i,s)=>{if(!R.isValidElement(i))return;let c=[...t,s];if(i.type===R.Fragment){n.push.apply(n,Jp(i.props.children,c));return}i.type!==_n&&Et(!1),!i.props.index||!i.props.children||Et(!1);let d={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Jp(i.props.children,c)),n.push(d)}),n}function ru(){return ru=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},ru.apply(null,arguments)}function h1(a,t){if(a==null)return{};var n={};for(var i in a)if({}.hasOwnProperty.call(a,i)){if(t.indexOf(i)!==-1)continue;n[i]=a[i]}return n}function B5(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function U5(a,t){return a.button===0&&(!t||t==="_self")&&!B5(a)}const W5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],H5=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],V5="6";try{window.__reactRouterVersion=V5}catch{}const Y5=R.createContext({isTransitioning:!1}),G5="startTransition",Sx=$v[G5];function q5(a){let{basename:t,children:n,future:i,window:s}=a,c=R.useRef();c.current==null&&(c.current=X2({window:s,v5Compat:!0}));let d=c.current,[f,p]=R.useState({action:d.action,location:d.location}),{v7_startTransition:m}=i||{},g=R.useCallback(y=>{m&&Sx?Sx(()=>p(y)):p(y)},[p,m]);return R.useLayoutEffect(()=>d.listen(g),[d,g]),R.useEffect(()=>M5(i),[i]),R.createElement(F5,{basename:t,children:n,location:f.location,navigationType:f.action,navigator:d,future:i})}const X5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ln=R.forwardRef(function(t,n){let{onClick:i,relative:s,reloadDocument:c,replace:d,state:f,target:p,to:m,preventScrollReset:g,viewTransition:y}=t,v=h1(t,W5),{basename:b}=R.useContext(La),N,w=!1;if(typeof m=="string"&&Q5.test(m)&&(N=m,X5))try{let E=new URL(window.location.href),j=m.startsWith("//")?new URL(E.protocol+m):new URL(m),P=yo(j.pathname,b);j.origin===E.origin&&P!=null?m=P+j.search+j.hash:w=!0}catch{}let k=v5(m,{relative:s}),C=J5(m,{replace:d,state:f,target:p,preventScrollReset:g,relative:s,viewTransition:y});function A(E){i&&i(E),E.defaultPrevented||C(E)}return R.createElement("a",ru({},v,{href:N||k,onClick:w||c?i:A,ref:n,target:p}))}),Ax=R.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:s=!1,className:c="",end:d=!1,style:f,to:p,viewTransition:m,children:g}=t,y=h1(t,H5),v=Nu(p,{relative:y.relative}),b=To(),N=R.useContext(l1),{navigator:w,basename:k}=R.useContext(La),C=N!=null&&Z5(v)&&m===!0,A=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,E=b.pathname,j=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;s||(E=E.toLowerCase(),j=j?j.toLowerCase():null,A=A.toLowerCase()),j&&k&&(j=yo(j,k)||j);const P=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let z=E===A||!d&&E.startsWith(A)&&E.charAt(P)==="/",O=j!=null&&(j===A||!d&&j.startsWith(A)&&j.charAt(A.length)==="/"),B={isActive:z,isPending:O,isTransitioning:C},W=z?i:void 0,D;typeof c=="function"?D=c(B):D=[c,z?"active":null,O?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let Q=typeof f=="function"?f(B):f;return R.createElement(ln,ru({},y,{"aria-current":W,className:D,ref:n,style:Q,to:p,viewTransition:m}),typeof g=="function"?g(B):g)});var Zp;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(Zp||(Zp={}));var Cx;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Cx||(Cx={}));function K5(a){let t=R.useContext(bu);return t||Et(!1),t}function J5(a,t){let{target:n,replace:i,state:s,preventScrollReset:c,relative:d,viewTransition:f}=t===void 0?{}:t,p=y5(),m=To(),g=Nu(a,{relative:d});return R.useCallback(y=>{if(U5(y,n)){y.preventDefault();let v=i!==void 0?i:tu(m)===tu(g);p(a,{replace:v,state:s,preventScrollReset:c,relative:d,viewTransition:f})}},[m,p,g,i,s,n,a,c,d,f])}function Z5(a,t){t===void 0&&(t={});let n=R.useContext(Y5);n==null&&Et(!1);let{basename:i}=K5(Zp.useViewTransitionState),s=Nu(a,{relative:t.relative});if(!n.isTransitioning)return!1;let c=yo(n.currentLocation.pathname,i)||n.currentLocation.pathname,d=yo(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Kp(s.pathname,d)!=null||Kp(s.pathname,c)!=null}var Tx="1.3.26";function m1(a,t,n){return Math.max(a,Math.min(t,n))}function $5(a,t,n){return(1-n)*a+n*t}function eN(a,t,n,i){return $5(a,t,1-Math.exp(-n*i))}function tN(a,t){return(a%t+t)%t}var rN=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(a){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=a;const n=m1(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=eN(this.value,this.to,this.lerp*60,a),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(a,t,{lerp:n,duration:i,easing:s,onStart:c,onUpdate:d}){this.from=this.value=a,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,c?.(),this.onUpdate=d}};function nN(a,t){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,a.apply(this,i)},t)}}var iN=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(a,t,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=a,this.content=t,n&&(this.debouncedResize=nN(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},g1=class{events={};emit(a,...t){const n=this.events[a]||[];for(let i=0,s=n.length;i<s;i++)n[i]?.(...t)}on(a,t){return this.events[a]?this.events[a].push(t):this.events[a]=[t],()=>{this.events[a]=this.events[a]?.filter(n=>t!==n)}}off(a,t){this.events[a]=this.events[a]?.filter(n=>t!==n)}destroy(){this.events={}}};const aN=100/6,da={passive:!1};function Px(a,t){return a===1?aN:a===2?t:1}var sN=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new g1;constructor(a,t={wheelMultiplier:1,touchMultiplier:1}){this.element=a,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,da),this.element.addEventListener("touchstart",this.onTouchStart,da),this.element.addEventListener("touchmove",this.onTouchMove,da),this.element.addEventListener("touchend",this.onTouchEnd,da)}on(a,t){return this.emitter.on(a,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,da),this.element.removeEventListener("touchstart",this.onTouchStart,da),this.element.removeEventListener("touchmove",this.onTouchMove,da),this.element.removeEventListener("touchend",this.onTouchEnd,da)}onTouchStart=a=>{const{clientX:t,clientY:n}=a.targetTouches?a.targetTouches[0]:a;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:a})};onTouchMove=a=>{const{clientX:t,clientY:n}=a.targetTouches?a.targetTouches[0]:a,i=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:a})};onTouchEnd=a=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:a})};onWheel=a=>{let{deltaX:t,deltaY:n,deltaMode:i}=a;const s=Px(i,this.window.width),c=Px(i,this.window.height);t*=s,n*=c,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:a})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Rx=a=>Math.min(1,1.001-2**(-10*a));var oN=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new rN;emitter=new g1;dimensions;virtualScroll;constructor({wrapper:a=window,content:t=document.documentElement,eventsTarget:n=a,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:c=.075,touchInertiaExponent:d=1.7,duration:f,easing:p,lerp:m=.1,infinite:g=!1,orientation:y="vertical",gestureOrientation:v=y==="horizontal"?"both":"vertical",touchMultiplier:b=1,wheelMultiplier:N=1,autoResize:w=!0,prevent:k,virtualScroll:C,overscroll:A=!0,autoRaf:E=!1,anchors:j=!1,autoToggle:P=!1,allowNestedScroll:z=!1,__experimental__naiveDimensions:O=!1,naiveDimensions:B=O,stopInertiaOnNavigate:W=!1,respectReducedMotion:D=!0}={}){window.lenisVersion=Tx,window.lenis||(window.lenis={}),window.lenis.version=Tx,y==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!a||a===document.documentElement)&&(a=window),typeof f=="number"&&typeof p!="function"?p=Rx:typeof p=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:a,content:t,eventsTarget:n,smoothWheel:i,syncTouch:s,syncTouchLerp:c,touchInertiaExponent:d,duration:f,easing:p,lerp:m,infinite:g,gestureOrientation:v,orientation:y,touchMultiplier:b,wheelMultiplier:N,autoResize:w,prevent:k,virtualScroll:C,overscroll:A,autoRaf:E,anchors:j,autoToggle:P,allowNestedScroll:z,naiveDimensions:B,stopInertiaOnNavigate:W,respectReducedMotion:D},this.dimensions=new iN(a,t,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new sN(n,{touchMultiplier:b,wheelMultiplier:N}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(a,t){return this.emitter.on(a,t)}off(a,t){return this.emitter.off(a,t)}onScrollEnd=a=>{a instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&a.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const a=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[a]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=a=>{a.propertyName?.includes("overflow")&&a.target===this.rootElement&&this.checkOverflow()};setScroll(a){this.isHorizontal?this.options.wrapper.scrollTo({left:a,behavior:"instant"}):this.options.wrapper.scrollTo({top:a,behavior:"instant"})}onClick=a=>{const t=a.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=t.find(s=>n.host===s.host&&n.pathname===s.pathname&&s.hash);if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(i.hash);this.scrollTo(c,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}};onPointerDown=a=>{a.button===1&&this.reset()};isTouchOnSelectionHandle(a){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const n=a.targetTouches[0]??a.changedTouches[0];if(!n)return!1;const i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;const s=i[0],c=i[i.length-1],d=40,f=Math.hypot(n.clientX-s.left,n.clientY-s.top)<=d,p=Math.hypot(n.clientX-c.right,n.clientY-c.bottom)<=d;return f||p}onVirtualScroll=a=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(a)===!1)return;const{deltaX:t,deltaY:n,event:i}=a;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),c=i.type.includes("wheel");if(s&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const d=t===0&&n===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&d&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(d||f)return;let p=i.composedPath();p=p.slice(0,p.indexOf(this.rootElement));const m=this.options.prevent,g=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";if(p.find(N=>N instanceof HTMLElement&&(typeof m=="function"&&m?.(N)||N.hasAttribute?.("data-lenis-prevent")||g==="vertical"&&N.hasAttribute?.("data-lenis-prevent-vertical")||g==="horizontal"&&N.hasAttribute?.("data-lenis-prevent-horizontal")||s&&N.hasAttribute?.("data-lenis-prevent-touch")||c&&N.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(N,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let y=n;this.options.gestureOrientation==="both"?y=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(y=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const v=s&&this.options.syncTouch,b=s&&i.type==="touchend";b&&(y=Math.sign(y)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+y,{programmatic:!1,...v?{lerp:b?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const a=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-a,this.direction=Math.sign(this.animatedScroll-a),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=a=>{const t=a-(this.time||a);this.time=a,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(a,{offset:t=0,immediate:n=!1,lock:i=!1,programmatic:s=!0,lerp:c=s?this.options.lerp:void 0,duration:d=s?this.options.duration:void 0,easing:f=s?this.options.easing:void 0,onStart:p,onComplete:m,force:g=!1,userData:y}={}){if(this.prefersReducedMotion&&(s?n=!0:(c=1,d=void 0,f=void 0)),(this.isStopped||this.isLocked)&&!g)return;let v=a,b=t;if(typeof v=="string"&&["top","left","start","#"].includes(v))v=0;else if(typeof v=="string"&&["bottom","right","end"].includes(v))v=this.limit;else{let N=null;if(typeof v=="string"?(N=v.startsWith("#")?document.getElementById(v.slice(1)):document.querySelector(v),N||(v==="#top"?v=0:console.warn("Lenis: Target not found",v))):v instanceof HTMLElement&&v?.nodeType&&(N=v),N){if(this.options.wrapper!==window){const j=this.rootElement.getBoundingClientRect();b-=this.isHorizontal?j.left:j.top}const w=N.getBoundingClientRect(),k=getComputedStyle(N),C=this.isHorizontal?Number.parseFloat(k.scrollMarginLeft):Number.parseFloat(k.scrollMarginTop),A=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(A.scrollPaddingLeft):Number.parseFloat(A.scrollPaddingTop);v=(this.isHorizontal?w.left:w.top)+this.animatedScroll-(Number.isNaN(C)?0:C)-(Number.isNaN(E)?0:E)}}if(typeof v=="number"){if(v+=b,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const N=v-this.animatedScroll;N>this.limit/2?v-=this.limit:N<-this.limit/2&&(v+=this.limit)}}else v=m1(0,v,this.limit);if(v===this.targetScroll){p?.(this),m?.(this);return}if(this.userData=y??{},n){this.animatedScroll=this.targetScroll=v,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=v),typeof d=="number"&&typeof f!="function"?f=Rx:typeof f=="function"&&typeof d!="number"&&(d=1),this.animate.fromTo(this.animatedScroll,v,{duration:d,easing:f,lerp:c,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",p?.(this)},onUpdate:(N,w)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=N-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=N,this.setScroll(this.scroll),s&&(this.targetScroll=N),w||this.emit(),w&&(this.reset(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(a,{deltaX:t,deltaY:n}){const i=Date.now();a._lenis||(a._lenis={});const s=a._lenis;let c,d,f,p,m,g,y,v,b,N;if(i-(s.time??0)>2e3){s.time=Date.now();const z=window.getComputedStyle(a);if(s.computedStyle=z,c=["auto","overlay","scroll"].includes(z.overflowX),d=["auto","overlay","scroll"].includes(z.overflowY),m=["auto"].includes(z.overscrollBehaviorX),g=["auto"].includes(z.overscrollBehaviorY),s.hasOverflowX=c,s.hasOverflowY=d,!(c||d))return!1;y=a.scrollWidth,v=a.scrollHeight,b=a.clientWidth,N=a.clientHeight,f=y>b,p=v>N,s.isScrollableX=f,s.isScrollableY=p,s.scrollWidth=y,s.scrollHeight=v,s.clientWidth=b,s.clientHeight=N,s.hasOverscrollBehaviorX=m,s.hasOverscrollBehaviorY=g}else f=s.isScrollableX,p=s.isScrollableY,c=s.hasOverflowX,d=s.hasOverflowY,y=s.scrollWidth,v=s.scrollHeight,b=s.clientWidth,N=s.clientHeight,m=s.hasOverscrollBehaviorX,g=s.hasOverscrollBehaviorY;if(!(c&&f||d&&p))return!1;const w=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";let k,C,A,E,j,P;if(w==="horizontal")k=Math.round(a.scrollLeft),C=y-b,A=t,E=c,j=f,P=m;else if(w==="vertical")k=Math.round(a.scrollTop),C=v-N,A=n,E=d,j=p,P=g;else return!1;return!P&&(k>=C||k<=0)?!0:(A>0?k<C:k>0)&&E&&j}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const a=this.options.wrapper;return this.isHorizontal?a.scrollX??a.scrollLeft:a.scrollY??a.scrollTop}get scroll(){return this.options.infinite?tN(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(a){this._isScrolling!==a&&(this._isScrolling=a,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(a){this._isStopped!==a&&(this._isStopped=a,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(a){this._isLocked!==a&&(this._isLocked=a,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let a="lenis";return this.options.autoToggle&&(a+=" lenis-autoToggle"),this.isStopped&&(a+=" lenis-stopped"),this.isLocked&&(a+=" lenis-locked"),this.isScrolling&&(a+=" lenis-scrolling"),this.isScrolling==="smooth"&&(a+=" lenis-smooth"),a}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(a=>{this.rootElement.classList.add(a)})}cleanUpClassName(){for(const a of Array.from(this.rootElement.classList))(a==="lenis"||a.startsWith("lenis-"))&&this.rootElement.classList.remove(a)}};const lN=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x1=(...a)=>a.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");var cN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dN=R.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:s="",children:c,iconNode:d,...f},p)=>R.createElement("svg",{ref:p,...cN,width:t,height:t,stroke:a,strokeWidth:i?Number(n)*24/Number(t):n,className:x1("lucide",s),...f},[...d.map(([m,g])=>R.createElement(m,g)),...Array.isArray(c)?c:[c]]));const Ne=(a,t)=>{const n=R.forwardRef(({className:i,...s},c)=>R.createElement(dN,{ref:c,iconNode:t,className:x1(`lucide-${lN(a)}`,i),...s}));return n.displayName=`${a}`,n};const uN=Ne("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);const fN=Ne("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const Xn=Ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const no=Ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const pN=Ne("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const Bd=Ne("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Lx=Ne("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);const hN=Ne("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Bh=Ne("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);const _u=Ne("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const mN=Ne("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const gN=Ne("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);const xN=Ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const ku=Ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const vN=Ne("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const yN=Ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const bN=Ne("CircleArrowOutUpRight",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);const wN=Ne("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const v1=Ne("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);const Ud=Ne("CircleGauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);const NN=Ne("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Uh=Ne("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);const _N=Ne("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);const Wh=Ne("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const kN=Ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);const jN=Ne("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);const Hh=Ne("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);const EN=Ne("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Rn=Ne("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);const SN=Ne("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const AN=Ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const CN=Ne("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const y1=Ne("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);const ju=Ne("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);const Vh=Ne("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const TN=Ne("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const PN=Ne("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const cc=Ne("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);const b1=Ne("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);const w1=Ne("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);const N1=Ne("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);const RN=Ne("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const LN=Ne("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);const cs=Ne("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const ON=Ne("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);const IN=Ne("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);const zN=Ne("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const MN=Ne("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const $p=Ne("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);const FN=Ne("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Ox=Ne("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const DN=Ne("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const BN=Ne("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);const UN=Ne("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function _1(a){var t,n,i="";if(typeof a=="string"||typeof a=="number")i+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(t=0;t<s;t++)a[t]&&(n=_1(a[t]))&&(i&&(i+=" "),i+=n)}else for(n in a)a[n]&&(i&&(i+=" "),i+=n);return i}function k1(){for(var a,t,n=0,i="",s=arguments.length;n<s;n++)(a=arguments[n])&&(t=_1(a))&&(i&&(i+=" "),i+=t);return i}const Yh="-",WN=a=>{const t=VN(a),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=a;return{getClassGroupId:d=>{const f=d.split(Yh);return f[0]===""&&f.length!==1&&f.shift(),j1(f,t)||HN(d)},getConflictingClassGroupIds:(d,f)=>{const p=n[d]||[];return f&&i[d]?[...p,...i[d]]:p}}},j1=(a,t)=>{if(a.length===0)return t.classGroupId;const n=a[0],i=t.nextPart.get(n),s=i?j1(a.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const c=a.join(Yh);return t.validators.find(({validator:d})=>d(c))?.classGroupId},Ix=/^\[(.+)\]$/,HN=a=>{if(Ix.test(a)){const t=Ix.exec(a)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},VN=a=>{const{theme:t,prefix:n}=a,i={nextPart:new Map,validators:[]};return GN(Object.entries(a.classGroups),n).forEach(([c,d])=>{eh(d,i,c,t)}),i},eh=(a,t,n,i)=>{a.forEach(s=>{if(typeof s=="string"){const c=s===""?t:zx(t,s);c.classGroupId=n;return}if(typeof s=="function"){if(YN(s)){eh(s(i),t,n,i);return}t.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([c,d])=>{eh(d,zx(t,c),n,i)})})},zx=(a,t)=>{let n=a;return t.split(Yh).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},YN=a=>a.isThemeGetter,GN=(a,t)=>t?a.map(([n,i])=>{const s=i.map(c=>typeof c=="string"?t+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([d,f])=>[t+d,f])):c);return[n,s]}):a,qN=a=>{if(a<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,i=new Map;const s=(c,d)=>{n.set(c,d),t++,t>a&&(t=0,i=n,n=new Map)};return{get(c){let d=n.get(c);if(d!==void 0)return d;if((d=i.get(c))!==void 0)return s(c,d),d},set(c,d){n.has(c)?n.set(c,d):s(c,d)}}},E1="!",XN=a=>{const{separator:t,experimentalParseClassName:n}=a,i=t.length===1,s=t[0],c=t.length,d=f=>{const p=[];let m=0,g=0,y;for(let k=0;k<f.length;k++){let C=f[k];if(m===0){if(C===s&&(i||f.slice(k,k+c)===t)){p.push(f.slice(g,k)),g=k+c;continue}if(C==="/"){y=k;continue}}C==="["?m++:C==="]"&&m--}const v=p.length===0?f:f.substring(g),b=v.startsWith(E1),N=b?v.substring(1):v,w=y&&y>g?y-g:void 0;return{modifiers:p,hasImportantModifier:b,baseClassName:N,maybePostfixModifierPosition:w}};return n?f=>n({className:f,parseClassName:d}):d},QN=a=>{if(a.length<=1)return a;const t=[];let n=[];return a.forEach(i=>{i[0]==="["?(t.push(...n.sort(),i),n=[]):n.push(i)}),t.push(...n.sort()),t},KN=a=>({cache:qN(a.cacheSize),parseClassName:XN(a),...WN(a)}),JN=/\s+/,ZN=(a,t)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:s}=t,c=[],d=a.trim().split(JN);let f="";for(let p=d.length-1;p>=0;p-=1){const m=d[p],{modifiers:g,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:b}=n(m);let N=!!b,w=i(N?v.substring(0,b):v);if(!w){if(!N){f=m+(f.length>0?" "+f:f);continue}if(w=i(v),!w){f=m+(f.length>0?" "+f:f);continue}N=!1}const k=QN(g).join(":"),C=y?k+E1:k,A=C+w;if(c.includes(A))continue;c.push(A);const E=s(w,N);for(let j=0;j<E.length;++j){const P=E[j];c.push(C+P)}f=m+(f.length>0?" "+f:f)}return f};function $N(){let a=0,t,n,i="";for(;a<arguments.length;)(t=arguments[a++])&&(n=S1(t))&&(i&&(i+=" "),i+=n);return i}const S1=a=>{if(typeof a=="string")return a;let t,n="";for(let i=0;i<a.length;i++)a[i]&&(t=S1(a[i]))&&(n&&(n+=" "),n+=t);return n};function e_(a,...t){let n,i,s,c=d;function d(p){const m=t.reduce((g,y)=>y(g),a());return n=KN(m),i=n.cache.get,s=n.cache.set,c=f,f(p)}function f(p){const m=i(p);if(m)return m;const g=ZN(p,n);return s(p,g),g}return function(){return c($N.apply(null,arguments))}}const ct=a=>{const t=n=>n[a]||[];return t.isThemeGetter=!0,t},A1=/^\[(?:([a-z-]+):)?(.+)\]$/i,t_=/^\d+\/\d+$/,r_=new Set(["px","full","screen"]),n_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,i_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,a_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,s_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,o_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Si=a=>lo(a)||r_.has(a)||t_.test(a),ua=a=>Po(a,"length",m_),lo=a=>!!a&&!Number.isNaN(Number(a)),Cp=a=>Po(a,"number",lo),ml=a=>!!a&&Number.isInteger(Number(a)),l_=a=>a.endsWith("%")&&lo(a.slice(0,-1)),Le=a=>A1.test(a),fa=a=>n_.test(a),c_=new Set(["length","size","percentage"]),d_=a=>Po(a,c_,C1),u_=a=>Po(a,"position",C1),f_=new Set(["image","url"]),p_=a=>Po(a,f_,x_),h_=a=>Po(a,"",g_),gl=()=>!0,Po=(a,t,n)=>{const i=A1.exec(a);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):n(i[2]):!1},m_=a=>i_.test(a)&&!a_.test(a),C1=()=>!1,g_=a=>s_.test(a),x_=a=>o_.test(a),v_=()=>{const a=ct("colors"),t=ct("spacing"),n=ct("blur"),i=ct("brightness"),s=ct("borderColor"),c=ct("borderRadius"),d=ct("borderSpacing"),f=ct("borderWidth"),p=ct("contrast"),m=ct("grayscale"),g=ct("hueRotate"),y=ct("invert"),v=ct("gap"),b=ct("gradientColorStops"),N=ct("gradientColorStopPositions"),w=ct("inset"),k=ct("margin"),C=ct("opacity"),A=ct("padding"),E=ct("saturate"),j=ct("scale"),P=ct("sepia"),z=ct("skew"),O=ct("space"),B=ct("translate"),W=()=>["auto","contain","none"],D=()=>["auto","hidden","clip","visible","scroll"],Q=()=>["auto",Le,t],F=()=>[Le,t],J=()=>["",Si,ua],Z=()=>["auto",lo,Le],ae=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ce=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",Le],S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[lo,Le];return{cacheSize:500,separator:":",theme:{colors:[gl],spacing:[Si,ua],blur:["none","",fa,Le],brightness:T(),borderColor:[a],borderRadius:["none","","full",fa,Le],borderSpacing:F(),borderWidth:J(),contrast:T(),grayscale:X(),hueRotate:T(),invert:X(),gap:F(),gradientColorStops:[a],gradientColorStopPositions:[l_,ua],inset:Q(),margin:Q(),opacity:T(),padding:F(),saturate:T(),scale:T(),sepia:X(),skew:T(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",Le]}],container:["container"],columns:[{columns:[fa]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ae(),Le]}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ml,Le]}],basis:[{basis:Q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Le]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",ml,Le]}],"grid-cols":[{"grid-cols":[gl]}],"col-start-end":[{col:["auto",{span:["full",ml,Le]},Le]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[gl]}],"row-start-end":[{row:["auto",{span:[ml,Le]},Le]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Le]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Le]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Le,t]}],"min-w":[{"min-w":[Le,t,"min","max","fit"]}],"max-w":[{"max-w":[Le,t,"none","full","min","max","fit","prose",{screen:[fa]},fa]}],h:[{h:[Le,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Le,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Le,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Le,t,"auto","min","max","fit"]}],"font-size":[{text:["base",fa,ua]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Cp]}],"font-family":[{font:[gl]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Le]}],"line-clamp":[{"line-clamp":["none",lo,Cp]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Si,Le]}],"list-image":[{"list-image":["none",Le]}],"list-style-type":[{list:["none","disc","decimal",Le]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Si,ua]}],"underline-offset":[{"underline-offset":["auto",Si,Le]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ae(),u_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",d_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},p_]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[N]}],"gradient-via-pos":[{via:[N]}],"gradient-to-pos":[{to:[N]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...ce(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:ce()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ce()]}],"outline-offset":[{"outline-offset":[Si,Le]}],"outline-w":[{outline:[Si,ua]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[Si,ua]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",fa,h_]}],"shadow-color":[{shadow:[gl]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",fa,Le]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[y]}],saturate:[{saturate:[E]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Le]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",Le]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",Le]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[ml,Le]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Le]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Le]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Le]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[Si,ua,Cp]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},y_=e_(v_);function kt(...a){return y_(k1(a))}const Rt=({children:a,to:t,href:n,onClick:i,className:s,type:c="button"})=>{const[d,f]=R.useState({x:0,y:0}),p=b=>{const N=b.currentTarget.getBoundingClientRect(),w=((b.clientX-N.left)/N.width-.5)*14,k=((b.clientY-N.top)/N.height-.5)*14;f({x:w,y:k})},m=()=>{f({x:0,y:0})},y=kt("magnetic-button inline-flex items-center justify-center gap-2.5 rounded-[100px] border-0 bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] text-[#1e1e1e] shadow-none transition-all duration-300 ease-out hover:opacity-100",s),v={transform:`translate(${d.x}px, ${d.y}px)`};return t?o.jsx(ln,{to:t,className:y,onClick:i,onPointerMove:p,onPointerLeave:m,style:v,children:a}):n?o.jsx("a",{href:n,className:y,onClick:i,onPointerMove:p,onPointerLeave:m,style:v,children:a}):o.jsx("button",{type:c,className:y,onClick:i,onPointerMove:p,onPointerLeave:m,style:v,children:a})},th="/boltfaredeal/assets/logo-CZH9TYL_.png",Mx=[{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Portfolio",to:"/portfolio"},{label:"Contact us",to:"/contact"}],b_=({theme:a="dark",onToggleTheme:t})=>{const[n,i]=R.useState(!1),s=a==="dark";return o.jsxs(o.Fragment,{children:[o.jsxs("header",{className:"absolute left-1/2 top-[41px] z-30 hidden w-[min(90%,841px)] -translate-x-1/2 items-center rounded-[100px] bg-white py-2.5 pl-[26px] pr-2.5 text-[#1e1e1e] md:flex dark:border-transparent dark:shadow-none border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",children:[o.jsx(ln,{to:"/","aria-label":"Fairdeal Print Pack home",className:"flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.02]",children:o.jsx("img",{src:th,alt:"Fairdeal Print Pack",className:"h-10 w-auto object-contain"})}),o.jsx("nav",{className:"mx-auto flex items-center gap-[25px]",children:Mx.map(c=>o.jsx(Ax,{to:c.to,className:({isActive:d})=>kt("nav-item inline-flex items-center justify-center py-2.5 font-normal text-base leading-normal transition-all duration-300 hover:text-[#92d1bc]",d&&"active text-[#92d1bc]"),children:c.label},c.to))}),o.jsx("div",{className:"flex items-center gap-3",children:o.jsx(Rt,{to:"/contact",className:"w-[136px] p-2.5 text-sm font-normal",children:"Contact us"})})]}),o.jsxs("header",{className:kt("fixed left-0 right-0 top-0 z-[60] flex items-center justify-between gap-2 px-4 py-3 shadow-sm backdrop-blur-md md:hidden",s?"border-b border-white/10 bg-[#0d1117]/70 text-white":"border-b border-[#1e1e1e]/10 bg-white/75 text-[#1e1e1e]"),children:[o.jsx(ln,{to:"/",className:"flex min-w-0 shrink-0 items-center gap-2",onClick:()=>i(!1),children:o.jsx("img",{src:th,alt:"Fairdeal Print Pack",className:"h-8 w-auto object-contain"})}),o.jsx("div",{className:"ml-auto flex shrink-0 items-center gap-2",children:o.jsx("button",{type:"button",onClick:()=>i(c=>!c),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,className:kt("relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 hover:scale-105",s?"border border-white/10 bg-white/10":"border border-[#1e1e1e]/10 bg-[#f4f1eb]"),children:o.jsxs("span",{className:"relative inline-flex h-4 w-5 items-center justify-center",children:[o.jsx("span",{className:kt("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"translate-y-0 rotate-45":"-translate-y-1.5"),style:{backgroundColor:s?"#ffffff":"#1e1e1e"}}),o.jsx("span",{className:kt("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"opacity-0":"opacity-100"),style:{backgroundColor:s?"#ffffff":"#1e1e1e"}}),o.jsx("span",{className:kt("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"translate-y-0 -rotate-45":"translate-y-1.5"),style:{backgroundColor:s?"#ffffff":"#1e1e1e"}})]})})})]}),n&&o.jsx("div",{className:kt("fixed inset-0 top-[52px] z-[55] md:hidden",s?"bg-[#0d1117]/80 backdrop-blur-md":"bg-white/80 backdrop-blur-md"),children:o.jsxs("nav",{className:"flex flex-col gap-2 px-6 py-8",children:[Mx.map(c=>o.jsx(Ax,{to:c.to,onClick:()=>i(!1),className:({isActive:d})=>kt("nav-item border-b py-4 text-lg font-normal transition-all duration-300 hover:text-[#92d1bc]",s?"border-white/10 text-white":"border-[#1e1e1e]/10 text-[#1e1e1e]",d&&"active text-[#92d1bc]"),children:c.label},c.to)),o.jsx("div",{className:"mt-6",children:o.jsxs(Rt,{to:"/contact",className:"w-full p-3 text-base font-semibold",onClick:()=>i(!1),children:["Contact us",o.jsx(ku,{className:"h-4 w-4 -rotate-90"})]})})]})})]})};var w_=Object.defineProperty,Gh=(a,t)=>w_(a,"name",{value:t,configurable:!0});function rh(a,t){if(typeof a=="function")return a(t);a!=null&&(a.current=t)}Gh(rh,"setRef");function T1(...a){return t=>{let n=!1;const i=a.map(s=>{const c=rh(s,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let s=0;s<i.length;s++){const c=i[s];typeof c=="function"?c():rh(a[s],null)}}}}Gh(T1,"composeRefs");function P1(...a){return R.useCallback(T1(...a),a)}Gh(P1,"useComposedRefs");var N_=Object.defineProperty,Kn=(a,t)=>N_(a,"name",{value:t,configurable:!0});function R1(a){const t=R.forwardRef((n,i)=>{let{children:s,...c}=n,d=null,f=!1;const p=[];nh(s)&&typeof _d=="function"&&(s=_d(s._payload)),R.Children.forEach(s,v=>{if(z1(v)){f=!0;const b=v;let N="child"in b.props?b.props.child:b.props.children;nh(N)&&typeof _d=="function"&&(N=_d(N._payload)),d=j_(b,N),p.push(d?.props?.children)}else p.push(v)}),d?d=R.cloneElement(d,void 0,p):!f&&R.Children.count(s)===1&&R.isValidElement(s)&&(d=s);const m=d?I1(d):void 0,g=P1(i,m);if(!d){if(s||s===0)throw new Error(f?A_(a):S_(a));return s}const y=O1(c,d.props??{});return d.type!==R.Fragment&&(y.ref=i?g:m),R.cloneElement(d,y)});return t.displayName=`${a}.Slot`,t}Kn(R1,"createSlot");var __=R1("Slot"),L1=Symbol.for("radix.slottable");function k_(a){const t=Kn(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${a}.Slottable`,t.__radixId=L1,t}Kn(k_,"createSlottable");var j_=Kn((a,t)=>{if("child"in a.props){const n=a.props.child;return R.isValidElement(n)?R.cloneElement(n,void 0,a.props.children(n.props.children)):null}return R.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function O1(a,t){const n={...t};for(const i in t){const s=a[i],c=t[i];/^on[A-Z]/.test(i)?s&&c?n[i]=(...f)=>{const p=c(...f);return s(...f),p}:s&&(n[i]=s):i==="style"?n[i]={...s,...c}:i==="className"&&(n[i]=[s,c].filter(Boolean).join(" "))}return{...a,...n}}Kn(O1,"mergeProps");function I1(a){let t=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?a.ref:(t=Object.getOwnPropertyDescriptor(a,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?a.props.ref:a.props.ref||a.ref)}Kn(I1,"getElementRef");function z1(a){return R.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===L1}Kn(z1,"isSlottable");var E_=Symbol.for("react.lazy");function nh(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===E_&&"_payload"in a&&M1(a._payload)}Kn(nh,"isLazyComponent");function M1(a){return typeof a=="object"&&a!==null&&"then"in a}Kn(M1,"isPromiseLike");var S_=Kn(a=>`${a} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),A_=Kn(a=>`${a} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),_d=$v[" use ".trim().toString()];const Fx=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,Dx=k1,C_=(a,t)=>n=>{var i;if(t?.variants==null)return Dx(a,n?.class,n?.className);const{variants:s,defaultVariants:c}=t,d=Object.keys(s).map(m=>{const g=n?.[m],y=c?.[m];if(g===null)return null;const v=Fx(g)||Fx(y);return s[m][v]}),f=n&&Object.entries(n).reduce((m,g)=>{let[y,v]=g;return v===void 0||(m[y]=v),m},{}),p=t==null||(i=t.compoundVariants)===null||i===void 0?void 0:i.reduce((m,g)=>{let{class:y,className:v,...b}=g;return Object.entries(b).every(N=>{let[w,k]=N;return Array.isArray(k)?k.includes({...c,...f}[w]):{...c,...f}[w]===k})?[...m,y,v]:m},[]);return Dx(a,d,p,n?.class,n?.className)},T_=C_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),F1=R.forwardRef(({className:a,variant:t,size:n,asChild:i=!1,...s},c)=>{const d=i?__:"button";return o.jsx(d,{className:kt(T_({variant:t,size:n,className:a})),ref:c,...s})});F1.displayName="Button";const Al=R.forwardRef(({className:a,type:t,...n},i)=>o.jsx("input",{type:t,className:kt("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:i,...n}));Al.displayName="Input";const P_="/boltfaredeal/assets/herohome-DT9eiX7y.png",R_="/boltfaredeal/assets/herolight-CuHdeJoD.png",D1="/boltfaredeal/assets/Owner%20image-Ce46Gc2F.png",L_="/boltfaredeal/assets/WhyChooseUs-CKRRPvHQ.png",O_="/boltfaredeal/assets/5-ymbanfZ0.png",Bx="/boltfaredeal/assets/2-DiAjn5_X.png",Ux="/boltfaredeal/assets/3-CGy4r2Ne.png",I_="/boltfaredeal/assets/4-D9jko_-K.png",z_="/boltfaredeal/assets/Bopp-pi9j3R0x.png",M_="/boltfaredeal/assets/Corrugated-C3HRMm_i.png",F_="/boltfaredeal/assets/Flexo-C8kTiPdQ.png",D_="/boltfaredeal/assets/Labels-W3ZJ1Vob.jpg",B_="/boltfaredeal/assets/OffSet-DdFVBfKU.png",U_="/boltfaredeal/assets/copier-BzKvISl0.png",$t={heroBgLarge:P_,heroBgLight:R_,servicePrint:B_,servicePaper:U_,servicePackaging:M_,serviceColor:F_,serviceBopp:z_,serviceLabels:D_,portfolio1:O_,portfolio2:I_,portfolio3:Ux,portfolio4:Bx,portfolio5:Ux,portfolio6:Bx,aboutImg:D1,whyChooseUsImg:L_},Pi=[{title:"Offset Printing",description:"High-quality offset printing solutions for brochures, books, labels, cartons, and business stationery.",image:$t.servicePrint,radius:"rounded-[20px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Flexo Printing",description:"Flexible printing solutions for labels, tags, packaging, and shrink sleeves with consistent quality.",image:$t.serviceColor,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Copier Paper",description:"Importer, distributor and dealer of copier, coated and sheet form papers.",image:$t.servicePaper,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Corrugation",description:"High-quality corrugated packaging solutions from standard transit boxes to bespoke packaging.",image:$t.servicePackaging,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(139deg,rgba(134,217,240,0.3)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Others",description:"BOPP tapes, screen printing, labels, stickers, and specialized printing solutions.",image:$t.serviceBopp,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"}],W_=[{title:"AVY DIARY Ghee Corrugated Carton",image:$t.portfolio1},{title:"Premium Gift Box Collection",image:$t.portfolio2},{title:"Minimalist Packaging Design",image:$t.portfolio3},{title:"Luxury Brand Packaging",image:$t.portfolio6},{title:"Holiday Gift Wrapping Series",image:$t.portfolio5},{title:"Floral Gift Box Set",image:$t.portfolio4}],H_=[{value:"1600+",label:"Satisfied Clients"},{value:"15+",label:"Awards Winning"},{value:"70+",label:"Team Members"},{value:"900+",label:"Successful Projects"}],V_=Pi.map(({title:a})=>({label:a,to:`/services/${a.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}`})),Y_=()=>{const[a,t]=R.useState(""),[n,i]=R.useState(()=>document.documentElement.getAttribute("data-theme")||"dark");R.useEffect(()=>{const c=()=>{i(document.documentElement.getAttribute("data-theme")||"dark")};c();const d=new MutationObserver(c);return d.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>d.disconnect()},[]);const s=n==="light";return o.jsx("footer",{className:["w-full px-4 py-8 sm:px-10 lg:px-[80px]",s?"bg-[#FFFFE9] text-[#1b1b1b]":"bg-[#05080a] text-white"].join(" "),children:o.jsxs("div",{className:"mx-auto flex w-full max-w-[1500px] flex-col",children:[o.jsxs("div",{className:["flex min-h-[102px] flex-col justify-between gap-8 border-b-[3px] pb-[25px] sm:flex-row sm:items-start",s?"border-[#1b1b1b]/10":"border-white/10"].join(" "),children:[o.jsx(ln,{to:"/",className:"flex items-center gap-2",children:o.jsx("img",{src:th,alt:"Fairdeal Print Pack",className:"h-10 w-auto object-contain"})}),o.jsxs("div",{className:"flex flex-col items-start gap-4 sm:mt-[11px] sm:flex-row sm:items-center sm:gap-[34px]",children:[o.jsx("p",{className:["text-lg font-normal leading-normal tracking-[-0.3px] sm:text-[22px]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:"Ready to get started?"}),o.jsx(Rt,{to:"/contact",className:"h-[52px] px-[35px] text-base font-medium tracking-[-0.23px] sm:text-[17px]",children:"Get started"})]})]}),o.jsxs("div",{className:"flex flex-col pt-[39px]",children:[o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[332px_minmax(0,1fr)] lg:gap-[121px]",children:[o.jsxs("section",{"aria-labelledby":"newsletter-heading",children:[o.jsxs("h2",{id:"newsletter-heading",className:"text-xl font-normal leading-normal tracking-[-0.3px] sm:text-[22px]",children:["Subscribe to our",o.jsx("br",{}),"newsletter"]}),o.jsxs("form",{className:["mt-[17px] flex h-[51px] items-start border-b-[3px]",s?"border-[#1b1b1b]/20":"border-white/[0.18]"].join(" "),onSubmit:c=>{c.preventDefault(),t("")},children:[o.jsx("label",{className:"sr-only",htmlFor:"footer-email",children:"Email address"}),o.jsx(Al,{id:"footer-email",name:"email",type:"email",value:a,onChange:c=>t(c.target.value),placeholder:"Email address",className:["h-[50px] flex-1 rounded-none border-0 bg-transparent px-0 text-sm tracking-[-0.2px] focus-visible:ring-0 sm:text-[15px]",s?"text-[#1b1b1b] placeholder:text-[#1b1b1b]/50":"text-white placeholder:text-white/50"].join(" ")}),o.jsx(F1,{type:"submit",size:"icon","aria-label":"Submit email address",className:["h-[50px] w-[50px] shrink-0 rounded-none bg-transparent hover:bg-transparent",s?"text-[#1b1b1b]":"text-white"].join(" "),children:o.jsx(Xn,{className:"h-5 w-5"})})]})]}),o.jsxs("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-[154px_210px_194px] lg:gap-x-[90px]",children:[o.jsxs("nav",{"aria-labelledby":"services-heading",children:[o.jsx("h2",{id:"services-heading",className:"text-base font-medium leading-normal tracking-[-0.23px] text-[#92d1bc] sm:text-[17px]",children:"Services"}),o.jsx("ul",{className:"mt-[14px] space-y-0",children:V_.map(c=>o.jsx("li",{children:o.jsx(ln,{to:c.to,className:["block text-sm font-normal leading-[43px] transition-colors hover:text-[#92d1bc]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:c.label})},c.label))})]}),o.jsxs("div",{className:"flex flex-col gap-8",children:[o.jsxs("section",{children:[o.jsx("h2",{className:"text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]",children:"Working hours:"}),o.jsxs("p",{className:["mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:["Mon - Sun: 9 am - 5 pm",o.jsx("br",{}),"Weekly Off: Thursday"]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]",children:"Address:"}),o.jsx("p",{className:["mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:"Fairdeal Print Pack, Mohanagar, Chinchwad 411033"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]",children:"Contact us:"}),o.jsxs("p",{className:["mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:["020 2747 4888",o.jsx("br",{}),"info@fairdealprintpack.com"]})]})]})]}),o.jsx("div",{className:["mt-[17px] h-[5px] w-full",s?"bg-[#1b1b1b]/10":"bg-white/10"].join(" ")}),o.jsx("div",{className:"mt-[25px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",children:o.jsxs("nav",{className:"flex flex-wrap items-center gap-6 sm:gap-10","aria-label":"Legal information",children:[o.jsx(ln,{to:"/terms-and-conditions",className:["text-sm font-normal tracking-[-0.2px] transition-colors hover:text-[#92d1bc] sm:text-[15px]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:"Terms & Conditions"}),o.jsx(ln,{to:"/privacy-policy",className:["text-sm font-normal tracking-[-0.2px] transition-colors hover:text-[#92d1bc] sm:text-[15px]",s?"text-[#1b1b1b]":"text-white"].join(" "),children:"Privacy Policy"})]})})]})]})})},G_=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null);R.useRef(null);const i=R.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),s=R.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),c=R.useRef(null);return R.useEffect(()=>{const d=a.current,f=t.current,p=n.current;if(!d||!f||!p)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)");if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches||m.matches){d.style.display="none";return}const y=w=>{s.current.x=w.clientX,s.current.y=w.clientY},v=(w,k)=>{const C=document.createElement("span");C.className="cursor-particle";const A=3+Math.random()*8;C.style.width=`${A}px`,C.style.height=`${A}px`,C.style.left=`${w}px`,C.style.top=`${k}px`,C.style.setProperty("--particle-x",`${(Math.random()-.5)*40}px`),C.style.setProperty("--particle-y",`${(Math.random()-.5)*40}px`),d.appendChild(C),window.setTimeout(()=>C.remove(),520)},b=w=>{const k=document.createElement("span");k.className="cursor-ripple",k.style.left=`${w.clientX}px`,k.style.top=`${w.clientY}px`,k.style.setProperty("--ripple-x",`${w.clientX}px`),k.style.setProperty("--ripple-y",`${w.clientY}px`),d.appendChild(k),window.setTimeout(()=>k.remove(),500);for(let C=0;C<8;C+=1)v(w.clientX,w.clientY)},N=()=>{const w=s.current.x-i.current.x,k=s.current.y-i.current.y;i.current.x+=w*.12,i.current.y+=k*.12,f.style.setProperty("--cursor-x",`${i.current.x}px`),f.style.setProperty("--cursor-y",`${i.current.y}px`),p.style.setProperty("--dot-x",`${i.current.x}px`),p.style.setProperty("--dot-y",`${i.current.y}px`),Math.abs(w)+Math.abs(k)>5&&v(i.current.x,i.current.y),c.current=window.requestAnimationFrame(N)};return f.style.setProperty("--cursor-x",`${i.current.x}px`),f.style.setProperty("--cursor-y",`${i.current.y}px`),p.style.setProperty("--dot-x",`${i.current.x}px`),p.style.setProperty("--dot-y",`${i.current.y}px`),window.addEventListener("pointermove",y,{passive:!0}),window.addEventListener("pointerdown",b),c.current=window.requestAnimationFrame(N),()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerdown",b),c.current&&window.cancelAnimationFrame(c.current)}},[]),o.jsxs("div",{ref:a,className:"cursor-overlay","aria-hidden":"true",children:[o.jsx("div",{ref:t,className:"cursor-spotlight"}),o.jsx("div",{ref:n,className:"cursor-dot"})]})},q_=()=>{const{pathname:a}=To(),t=R.useRef(null),[n,i]=R.useState(()=>window.localStorage.getItem("faredeal-theme")||"dark");R.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),window.localStorage.setItem("faredeal-theme",n)},[n]),R.useEffect(()=>{t.current?.scrollTo(0,{duration:.8})},[a]),R.useEffect(()=>{const c=new oN({autoRaf:!0,lerp:.08,smoothWheel:!0,wheelMultiplier:.9});return t.current=c,()=>{c.destroy(),t.current=null}},[]),R.useEffect(()=>{document.querySelectorAll("p, li, h1, h2, h3, h4, label, dt, dd, .stat-item, .service-card-copy, .contact-card").forEach((p,m)=>{p.dataset.reveal||(p.dataset.reveal=m%2===0?"left":"right")});const d=document.querySelectorAll("[data-reveal], .portfolio-card, .stat-item, .magnetic-button, form, .contact-card");if(!d.length)return;const f=new IntersectionObserver(p=>{p.forEach(m=>{const g=m.target,y=g.dataset.reveal||"up";g.style.transitionDelay=`${Math.min(Number(g.dataset.delay||0),220)}ms`,m.isIntersecting?(g.classList.add("is-visible"),g.dataset.reveal=y):g.classList.remove("is-visible")})},{threshold:.12,rootMargin:"0px 0px -5% 0px"});return d.forEach((p,m)=>{const g=p.dataset.reveal||"up";p.dataset.reveal=g,p.dataset.delay=String(Math.min(m*45,220)),p.classList.remove("is-visible"),f.observe(p)}),()=>f.disconnect()},[a]),R.useEffect(()=>{const c=()=>{const d=window.scrollY*.18;document.documentElement.style.setProperty("--scroll-shift",`${d}px`)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c)}},[]);const s=a==="/";return o.jsxs("main",{"data-theme":n,className:"relative isolate mx-auto w-full max-w-[1440px] overflow-x-clip bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx(G_,{}),o.jsx(b_,{theme:n,onToggleTheme:()=>i(c=>c==="dark"?"light":"dark")}),s?o.jsx(Ex,{}):o.jsx("div",{id:"main-content",className:"pt-[52px] md:pt-0",children:o.jsx(Ex,{})}),o.jsx(Y_,{})]})},X_=`
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
  font-size: clamp(2.25rem, 4.7vw, 4.4rem);
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
    linear-gradient(90deg, #35d4ff 0%, #5fe0d0 40%, #a4ec62 100%);
  animation-delay: 0.45s, 1.8s;
}
.hero-line:nth-child(3) > .grad-b {
  background-image:
    linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%),
    linear-gradient(90deg, #35d4ff 0%, #8fe86a 38%, #f7e83a 85%);
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
`,Q_=({heroImage:a,onWatchStory:t})=>o.jsxs("section",{className:"hero-section relative w-full overflow-hidden",children:[o.jsx("style",{children:X_}),o.jsx("img",{className:"hero-media absolute inset-0 h-full w-full object-cover",alt:"Printing press producing packaging",src:a}),o.jsx("div",{"aria-hidden":"true",className:"hero-overlay pointer-events-none absolute inset-0"}),o.jsx("div",{className:"relative z-10 flex h-full flex-col justify-center px-6 pb-12 pt-[110px] md:px-[6.7%] md:pt-[90px]",children:o.jsxs("div",{className:"flex max-w-[680px] flex-col gap-5",children:[o.jsxs("p",{className:"hero-eyebrow",children:[o.jsx("span",{children:"Printing"}),o.jsx("span",{className:"dot","aria-hidden":"true"}),o.jsx("span",{children:"Packaging"}),o.jsx("span",{className:"dot","aria-hidden":"true"}),o.jsx("span",{children:"Excellence"})]}),o.jsxs("h1",{className:"hero-title text-[#fbfbfb]",children:[o.jsx("span",{className:"hero-line",children:o.jsx("span",{children:"Your Vision."})}),o.jsx("span",{className:"hero-line",children:o.jsx("span",{className:"grad-a",children:"Our Print &"})}),o.jsx("span",{className:"hero-line",children:o.jsx("span",{className:"grad-b",children:"Packaging Expertise."})})]}),o.jsx("p",{className:"hero-copy max-w-[520px] text-base leading-[1.6] sm:text-lg sm:leading-[1.65]",children:"Since 1990, we have been delivering high-quality printing and packaging solutions with a commitment to quality, innovation and customer satisfaction."}),o.jsxs("div",{className:"hero-actions mt-2 flex flex-wrap items-center gap-x-8 gap-y-4",children:[o.jsxs("a",{href:"#services-section",className:"btn-primary",children:["Explore Our Services",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsxs("button",{type:"button",className:"btn-story",onClick:t,children:[o.jsx("span",{className:"play-dot",children:o.jsx(PN,{className:"h-4 w-4",fill:"currentColor"})}),"Watch Our Story"]})]})]})})]}),K_="Fairdeal Print Pack India Pvt. Ltd. has been established as full - fledge document solution in India & Pune city. Our traditional business model is based on the accomplishment of expertise into print media. We began our journey in 1990 & today we have emerged with a reputation for its quality product & prompt service.",J_=()=>{const[a,t]=R.useState(0),n=R.useRef(null);return R.useEffect(()=>{const i=n.current;if(!i)return;let s=0,c=!1;const d=()=>{if(c)return;if(c=!0,window.matchMedia("(prefers-reduced-motion: reduce)").matches){t(36);return}const p=performance.now(),m=1400,g=y=>{const v=Math.min((y-p)/m,1),b=1-(1-v)**3;t(Math.round(36*b)),v<1&&(s=window.requestAnimationFrame(g))};s=window.requestAnimationFrame(g)};if(typeof IntersectionObserver>"u")return d(),()=>window.cancelAnimationFrame(s);const f=new IntersectionObserver(([p])=>{p?.isIntersecting&&(f.disconnect(),d())},{threshold:.5});return f.observe(i),()=>{f.disconnect(),window.cancelAnimationFrame(s)}},[]),o.jsx("span",{ref:n,children:a})},Z_=[{id:"vision",title:"Our Vision",icon:Wh,content:"Customer satisfaction and employee empowerment in tandem with innovation and excellence, to work together with our customers to help them achieve their goals. Our success lies in your success. Honesty, integrity, dedication & commitment will always be our priority and trademark. Dignity & respect to all our guiding principles in every deal with customers & suppliers."},{id:"mission",title:"Our Mission",icon:FN,content:"To provide exceptional printing service by pursuing business through innovation & creativity that exceeds the expectation of our esteemed customers."},{id:"values",title:"Core Values",icon:Hh,content:"We believe in treating our customer with respect & faith, we integrate honesty, integrity & business ethics into all aspect of our business functioning."},{id:"goal",title:"The Goal",icon:jN,content:"Delighted customers are key to our success & we strive to achieve this key every second. Printing is our passion & hence no matter what your print need is, Fairdeal Print Pack India Pvt. Ltd. has most effective print solutions."}],$_=()=>{const[a,t]=R.useState("vision");return o.jsx("div",{className:"flex flex-col gap-3",children:Z_.map(({id:n,title:i,icon:s,content:c})=>{const d=a===n;return o.jsxs("div",{className:"relative ml-9",children:[o.jsx("div",{"aria-hidden":"true",className:`
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
                ${d?"border-[#f7d51d] bg-[#0a1015] shadow-[0_0_22px_rgba(247,213,29,0.45)]":"border-[#f7d51d]/30 bg-[#0d151b]"}
              `,children:o.jsx(s,{className:"h-5 w-5"})}),o.jsxs("div",{className:`
                relative
                overflow-hidden
                rounded-[26px]
                border
                transition-all
                duration-300
                ${d?"border-[#f7d51d] bg-[#f7d51d] shadow-[0_12px_40px_rgba(247,213,29,0.22)]":"border-white/10 bg-[#0d151b] hover:border-[#f7d51d]/40"}
              `,children:[o.jsx("span",{"aria-hidden":"true",className:`
                  absolute
                  bottom-6
                  left-[40px]
                  top-6
                  w-px
                  bg-[#0a1015]/25
                  transition-opacity
                  duration-300
                  ${d?"opacity-100":"opacity-0"}
                `}),o.jsxs("button",{type:"button",onClick:()=>t(d?null:n),"aria-expanded":d,"aria-controls":`about-panel-${n}`,className:`
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-3
                  pl-[60px]
                  pr-5
                  text-left
                  ${d?"pb-1 pt-4":"py-[15px]"}
                `,children:[o.jsx("span",{className:`
                    text-[19px]
                    font-bold
                    leading-tight
                    transition-colors
                    duration-300
                    ${d?"text-[#0a1015]":"text-white"}
                  `,children:i}),o.jsx(ku,{className:`
                    h-5
                    w-5
                    shrink-0
                    transition-transform
                    duration-300
                    ${d?"rotate-180 text-[#0a1015]":"text-white"}
                  `})]}),o.jsx("div",{id:`about-panel-${n}`,className:`
                  grid
                  transition-[grid-template-rows]
                  duration-300
                  ease-out
                  ${d?"grid-rows-[1fr]":"grid-rows-[0fr]"}
                `,children:o.jsx("div",{className:"overflow-hidden",children:o.jsx("p",{className:"pb-5 pl-[60px] pr-5 text-[13.5px] leading-[1.6] text-[#0a1015]/90",children:c})})})]})]},n)})})},ek=({isLightTheme:a})=>o.jsxs("section",{className:"relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#f7d51d]/10 blur-[110px]"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#f7d51d]/10 blur-[110px]"}),o.jsx("div",{className:"relative mx-auto max-w-[1240px]",children:o.jsxs("div",{className:"grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-14",children:[o.jsx("div",{"data-reveal":"left",className:"relative mx-auto w-full max-w-[430px] pb-10 lg:mx-0",children:o.jsxs("div",{className:"relative h-[460px] w-full sm:h-[540px] lg:h-[560px]",children:[o.jsx("div",{"aria-hidden":"true",className:`
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
                `,children:[o.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.18em] text-[#f7d51d]",children:"Rajesh Yewale"}),o.jsx("p",{className:"mt-1 text-sm font-light text-white/70",children:"Founder & Managing Director"})]})]})}),o.jsxs("div",{"data-reveal":"right",className:"relative z-20 flex w-full flex-col gap-8",children:[o.jsxs("header",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"About Us"})]}),o.jsxs("h2",{className:"font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]",style:{fontFamily:"'Lato', sans-serif"},children:[o.jsx("span",{className:"block text-white",children:"Printing Expertise."}),o.jsx("span",{className:"block text-[#92e3c3]",children:"Packaging Excellence"}),o.jsx("span",{className:"block text-[#9aa3b2]",children:"Since 1990"})]})]}),o.jsx("div",{className:"h-px w-full bg-white/10"}),o.jsxs("div",{className:"grid gap-10 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10",children:[o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-start leading-none",children:[o.jsx("span",{className:"text-[72px] font-extrabold text-white sm:text-[80px]",children:o.jsx(J_,{})}),o.jsx("span",{className:"ml-1 mt-3 text-[40px] font-extrabold text-[#f7d51d]",children:"+"})]}),o.jsx("p",{className:"mt-3 max-w-[110px] text-xs font-semibold uppercase leading-snug tracking-[0.22em] text-white/60",children:"Years of Trust"})]}),o.jsx("p",{className:"text-[15px] font-light leading-[1.75] text-white/85",children:K_})]}),o.jsx($_,{})]})]})]})})]}),Ge=({children:a,className:t})=>o.jsx("p",{"data-reveal":"left",className:kt("text-lg font-normal leading-[27.2px] tracking-[0.54px] text-[#e1de00]",t),children:a}),B1=({primary:a,secondary:t,className:n,primaryClassName:i,secondaryClassName:s})=>o.jsxs("h2",{className:kt("font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[58px]",n),style:{fontFamily:"'Lato', sans-serif"},children:[a&&o.jsx("span",{"data-reveal":"left",className:kt("block",i),children:a}),t&&o.jsx("span",{"data-reveal":"right",className:kt("block text-[#92d1bc]",s),children:t})]}),tk=80,kd=(a,t,n)=>Math.min(n,Math.max(t,a)),Tp=a=>String(a).padStart(2,"0"),rk=({activeServiceIndex:a,setActiveServiceIndex:t})=>{const n=R.useRef(null),i=R.useRef([]),s=R.useRef(null),c=R.useRef(0),d=Pi.length;R.useEffect(()=>{let p=0;const m=()=>{p=0;const y=n.current;if(!y)return;const v=y.getBoundingClientRect(),b=y.offsetHeight-window.innerHeight,w=(b>0?kd(-v.top/b,0,1):0)*(d-1);i.current.forEach((C,A)=>{if(!C||A===0)return;const E=kd(w-(A-1),0,1),j=E*E*(3-2*E),P=(1-j)*100,z=.97+j*.03;C.style.transform=`translate3d(${P}%, -50%, 0) scale(${z})`}),s.current&&(s.current.style.width=`${(w+1)/d*100}%`);const k=kd(Math.round(w),0,d-1);k!==c.current&&(c.current=k,t?.(k))},g=()=>{p||(p=requestAnimationFrame(m))};return m(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g),p&&cancelAnimationFrame(p)}},[d,t]);const f=kd(a??0,0,d-1);return o.jsx("section",{id:"services-section",className:"relative z-10 w-full",children:o.jsx("div",{ref:n,style:{height:`${100+(d-1)*tk}vh`},className:"relative",children:o.jsx("div",{className:"sticky top-[52px] flex h-[calc(100dvh-52px)] w-full flex-col px-4 py-4 max-[900px]:pt-[60px] sm:px-6 sm:py-5 md:top-0 md:h-[100dvh] md:py-6 lg:px-8",children:o.jsxs("div",{className:"mx-auto flex min-h-0 w-full max-w-[1180px] flex-1 flex-col",children:[o.jsxs("header",{className:"mb-4 flex flex-col gap-3 md:mb-5 md:gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx(Ge,{className:"text-sm font-bold uppercase leading-none tracking-[0.25em] text-[#f7d51d]",children:"OUR SERVICES"})]}),o.jsx(B1,{primary:"We bring",secondary:"ideas to life."})]}),o.jsxs("div",{className:"flex max-w-full items-start gap-4 lg:max-w-[530px]",children:[o.jsxs("p",{className:"flex-1 text-sm font-normal leading-relaxed tracking-[0] sm:text-base lg:text-lg",children:[o.jsxs("span",{className:"font-light text-[#f0efeb]",children:["From concept to final production, we handle every detail. From high-quality printing to packaging and finishing, we bring your ideas to life with"," "]}),o.jsx("span",{className:"font-medium text-[#e1de00]",children:"precision"}),o.jsx("span",{className:"font-light text-[#f0efeb]",children:", creativity, and consistency."})]}),o.jsx(ln,{to:"/services",className:"mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#92d1bc] hover:text-[#92d1bc] sm:flex","aria-label":"View more services",children:o.jsx(ku,{className:"h-4 w-4 -rotate-90"})})]})]}),o.jsx("div",{className:"mb-4 h-px w-full bg-white/20 md:mb-5"}),o.jsx("div",{className:"relative min-h-0 flex-1 overflow-hidden",children:Pi.map((p,m)=>o.jsxs("article",{ref:g=>i.current[m]=g,style:{zIndex:m+1,transform:m===0?"translate3d(0, -50%, 0)":"translate3d(100%, -50%, 0) scale(0.97)",willChange:"transform"},className:"absolute inset-x-0 top-1/2 max-[900px]:top-[44%] flex h-[min(100%,58vh,440px)] max-[900px]:h-[min(100%,54vh,480px)] flex-col overflow-hidden shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.45)] md:flex-row",children:[o.jsx("div",{className:"relative min-h-0 flex-[1.1] md:flex-[1.9]",children:o.jsx("img",{src:p.image,alt:p.title,className:"absolute inset-0 h-full w-full object-cover",draggable:!1})}),o.jsxs("div",{className:"relative flex min-h-0 flex-1 flex-col justify-between bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] p-4 text-black sm:p-5 md:p-6 lg:p-8",children:[o.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2 md:gap-3",children:[o.jsxs("span",{className:"text-[11px] font-semibold uppercase tracking-[0.2em]",children:["SERVICE ",Tp(m+1)]}),o.jsx("h3",{className:"text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",children:p.title}),o.jsx("p",{className:"max-w-[340px] text-xs leading-relaxed sm:text-sm md:text-base",children:p.description})]}),o.jsxs("div",{className:"mt-2 flex items-end justify-between gap-3 sm:mt-4",children:[o.jsxs(ln,{to:"/contact",className:"inline-flex items-center gap-2 bg-black px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-85 sm:px-4 sm:py-2.5 sm:text-sm",children:["Start a project",o.jsx(no,{className:"h-4 w-4"})]}),o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{children:Tp(f+1)}),o.jsx("div",{className:"relative h-px w-16 bg-black/30 md:w-24",children:m===f&&o.jsx("div",{ref:s,className:"absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-black",style:{width:`${(f+1)/d*100}%`}})}),o.jsx("span",{children:Tp(d)})]})]})]})]},p.title))})]})})})})},nk=({value:a,label:t})=>{const[n,i]=R.useState(0),[s,c]=R.useState(!1),d=R.useRef(null),f=String(a).trim(),p=Number.parseInt(f.replace(/[^0-9]/g,""),10)||0;return R.useEffect(()=>{const m=d.current;if(!m)return;const g=new IntersectionObserver(y=>{const[v]=y;if(v)if(v.isIntersecting){c(!0),i(0);const b=performance.now(),N=1200,w=k=>{const C=Math.min((k-b)/N,1),A=1-(1-C)**3;i(Math.round(p*A)),C<1?requestAnimationFrame(w):i(p)};requestAnimationFrame(w)}else c(!1),i(0)},{threshold:.35});return g.observe(m),()=>g.disconnect()},[p]),o.jsxs("div",{ref:d,className:"flex min-w-0 flex-col gap-2.5",children:[o.jsx("dt",{className:"order-2 text-base font-medium leading-7 tracking-[0] text-[#aeb6a7] sm:text-xl",children:t}),o.jsxs("dd",{className:"m-0 text-[36px] font-normal leading-[50px] tracking-[0] text-white sm:text-[50px] sm:leading-[60px]",children:[o.jsx("span",{children:n}),o.jsx("span",{className:"text-[#e1de00]",children:"+"})]})]})},ik=[{title:"State of the Art Printing Machines",description:"Precision, speed and unmatched quality.",icon:LN,accent:"#92d1bc"},{title:"One Stop Source",description:"Everything you need, under one roof.",icon:SN,accent:"#e1de00"},{title:"Dedicated Expertise",description:"Experienced professionals across print and packaging.",icon:BN,accent:"#49c4bc"},{title:"Quality-Driven Production",description:"Consistent output with precision at every stage.",icon:Bd,accent:"#e1de00"}],ak=[{src:$t.servicePrint,alt:"Printed materials from our print services"},{src:$t.servicePackaging,alt:"Corrugated packaging produced for clients"},{src:$t.serviceLabels,alt:"Labels produced for customer products"}],sk=()=>o.jsxs("section",{className:"relative z-10 w-full overflow-hidden bg-[#05080a] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:py-24",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0",style:{backgroundImage:"radial-gradient(ellipse 48% 62% at 100% 0%, rgba(225, 222, 0, 0.19) 0%, rgba(225, 222, 0, 0.09) 42%, transparent 78%), radial-gradient(ellipse 58% 62% at 0% 100%, rgba(73, 196, 188, 0.21) 0%, rgba(73, 196, 188, 0.09) 48%, transparent 82%), radial-gradient(ellipse 34% 48% at 8% 100%, rgba(146, 209, 188, 0.11) 0%, transparent 76%)"}}),o.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 overflow-hidden",children:[o.jsx("span",{className:"absolute -top-24 left-[58%] h-56 w-12 rotate-[38deg] bg-[#e1de00]/20"}),o.jsx("span",{className:"absolute -top-24 left-[62%] h-56 w-12 rotate-[38deg] bg-[#49c4bc]/25"}),o.jsx("span",{className:"absolute -bottom-24 -left-5 h-48 w-12 rotate-[38deg] bg-[#49c4bc]/25"}),o.jsx("span",{className:"absolute -bottom-24 left-8 h-48 w-12 rotate-[38deg] bg-[#e1de00]/20"})]}),o.jsxs("div",{className:"relative mx-auto grid w-full max-w-[1440px] items-center gap-x-8 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] xl:grid-cols-[minmax(300px,0.95fr)_minmax(440px,1.45fr)_minmax(170px,0.48fr)] xl:gap-x-10",children:[o.jsxs("div",{className:"flex flex-col gap-7 sm:gap-8",children:[o.jsxs("header",{"data-reveal":"left",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 shrink-0 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"Why"})]}),o.jsxs("h2",{className:"m-0 font-[Lato] text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl xl:text-[68px]",children:["Choose ",o.jsx("span",{className:"text-[#92d1bc]",children:"Us"})]}),o.jsx("p",{className:"mt-4 max-w-[540px] text-sm leading-[1.65] text-white/80 sm:text-base",children:"We cover the entire gamut of print needs, from company profiles, brochures and catalogues to folding cartons, labels and luxury rigid boxes."})]}),o.jsx("ul",{className:"m-0 grid list-none grid-cols-1 gap-x-5 gap-y-5 p-0 sm:grid-cols-2 sm:gap-y-7",children:ik.map(({title:a,description:t,icon:n,accent:i})=>o.jsxs("li",{className:"flex min-w-0 items-start gap-3","data-reveal":"up",children:[o.jsx("span",{className:"grid size-11 shrink-0 place-items-center rounded-full border-2",style:{borderColor:i,color:i},children:o.jsx(n,{"aria-hidden":"true",size:22,strokeWidth:1.8})}),o.jsxs("span",{className:"min-w-0 pt-1",children:[o.jsx("span",{className:"block text-sm font-semibold leading-[1.3] text-white",children:a}),o.jsx("span",{className:"mt-1 block text-xs leading-[1.5] text-white/65",children:t})]})]},a))})]}),o.jsxs("div",{className:"relative min-h-[350px] sm:min-h-[475px] xl:min-h-[540px]","data-reveal":"right",children:[o.jsx("div",{className:"absolute inset-x-[7%] top-0 h-[79%] overflow-hidden",style:{clipPath:"polygon(16% 0, 100% 0, 81% 100%, 0 100%)"},children:o.jsx("img",{className:"size-full object-cover object-center",alt:"Printing press operating in our production facility",src:$t.whyChooseUsImg,loading:"lazy"})}),o.jsx("div",{className:"absolute inset-x-[2%] bottom-0 grid grid-cols-3 items-end gap-1.5 sm:gap-2.5",children:ak.map(({src:a,alt:t},n)=>o.jsx("div",{className:`h-[105px] overflow-hidden border-2 border-white sm:h-[145px] xl:h-[175px] ${n===1?"translate-y-0":"translate-y-[-5px]"}`,style:{clipPath:n===0?"polygon(12% 0, 100% 0, 82% 100%, 0 100%)":n===1?"polygon(16% 0, 100% 0, 84% 100%, 0 100%)":"polygon(18% 0, 100% 0, 82% 100%, 0 100%)"},children:o.jsx("img",{className:"size-full object-cover",src:a,alt:t,loading:"lazy"})},a))})]}),o.jsx("aside",{className:"relative lg:col-span-2 xl:col-span-1 xl:flex xl:justify-center",children:o.jsx("dl",{className:"relative m-0 grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-10 lg:grid-cols-4 xl:w-full xl:max-w-[220px] xl:grid-cols-1 xl:gap-y-6",children:H_.map(a=>o.jsx(nk,{value:a.value,label:a.label},a.label))})}),o.jsxs("p",{className:"m-0 text-right text-[10px] font-medium uppercase text-white/55 lg:col-span-2 xl:col-span-3",children:["Quality ",o.jsx("span",{className:"px-2 text-[#e1de00]",children:"/"})," Innovation",o.jsx("span",{className:"px-2 text-[#49c4bc]",children:"/"})," Partnership"]})]})]}),ok="/boltfaredeal/assets/client1-xya4iu4V.png",lk="data:image/png;base64,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",ck="/boltfaredeal/assets/client3-DH-2gf35.png",dk="data:image/png;base64,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",uk="data:image/png;base64,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",fk="/boltfaredeal/assets/client6-DIG_vO_a.png",pk="data:image/png;base64,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",hk="/boltfaredeal/assets/client8-gVxS5ECv.png",mk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAzCAYAAACaEpqBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAASjSURBVHhe7dyxTxtXHAfw752hwXYGRAi9bFhiaGSkRkGhQyOlEqUDW2mlZm2UDqhRKhTLFRISYqxlCRWMGILSJW0WmiFqYED8A43MUmwnIpWRSqQrGTg12NgGcl0C8v1yd/YZH/ds/z6SB399iAf+6t275wPp8O1bHYy5QKYBY/XC5WKu4XIx13C5mGu4XMw1XC7mGi4Xcw2Xi7lG8noTNZ3OYG1tjcasgkAggJGREVy6pNCXhOFpudLpDObmZmnMqhQMBnHvXkTYgnl6WuQZ63RyuRz+2tigsTBk3bN5izU7GeB2MXd4elpkzU3WvVvPsyYnlQ4OddnnzQQ2N5dAOp2isamZmRl0dHTQuCrJ5DoWF+8bstu3v8PAwFVDdiwWiyGbzRqyGzc+w82b3xgyACgUChgfHzdkoVAI0WjUkJ3Wkyd/YGXlKY3x5ehX+GL4cxoLQW6EeSsc7q+5WADQ1dVFI9PsWCAQNDy3KhYA03HRr68Hv99PI+HJaPDLxQcPfkEiMY9EYh6rq/Xf2rArllOapp2MlT4ymef08IYn6w1ermfP/kQqtYFUagMvXpi/QYVCgUZVqWexAGB3VzsZK31sb7+ihxvs7+/TSHhSoVjS29rbaH4mql1zhcP9uHPnexoDAMbGxgzPw+F+w3MA2NrKIpfLGbJo9EeEQr2G7FgiMY/u7m5DsVRVxfLyCvL5vOHYfD733vrMarzZ7BZisZ9oDLzbbe/tDdH4hNnPAMHXXNJ+saS3N3C5IpGI6S+9krt3f8Dlyx/RGHh3AVC+2FdVFfF4vOrvYzVeTdMwMTEBABgd/RrDw0P0EMuFuxWxy1Uo6u0ftNP8TNSjXE6Uv3HBYBCTk5Po7Oykh73HablgU55KVlfX8PjxEo0tiVwub/YgHMrnq39T7ZRfceVyOezuaobXrSiKgkgkgmCw+qtAq/VfK5EKxZLua/NBkiT6muuqnblgsZayMjQ0ZHrKo7OC3brLjNl+mRWz2VbTNDx8+CvgYIyViDxzSYVSSffJPkiy2OVywuqURN+4qakpKIqz21WSyXU8evRbxVPktWuDuHXrW0Omqiqmp6cBmwW81cLditjlKpZ0n0/ccpntzJvtiperplx2O/SqqjouXfmY7HboM5nnmJ39mcY1E7lcwq+5aLGsMqfsduiXln5HMrlOY1vlY7Lboa/H2BuF8OXyyuLifccFY0YNWy67Kze/vz6zAxfsdGSc/VKrLuLxOBYWFkwf169/Sg+vGResdnKr3ojq5PNGLlhthN+hD4VCtgtkJ16/3sHOzg4AoKenBxcv9tBDAJvtALu9NvoZo9Wx5WOoB5GvFoUvF7MncrlkeLAzz1qDB1unrFXIXnymyFpDw+5zMfHxmou5htdczDWe/t0ia27SweGR7sXtNgDw8uXf2NvbozFzQFEUKMqHNBaCdHB0pHt1xfh0eQWvtv+hMXNgcPATXLnyMY2FIKNRP7lmwuPFFnON7NEZkbUAT2eugavm97Cz6pw714G+vj4aC8PTf7gLAKr6LzY3N/Hfmzf0JWaj+8IFhMNhnD9fn9uR3OB5uVjz8vS0yJobl4u55n9P4f3HwoQaMgAAAABJRU5ErkJggg==",gk="data:image/png;base64,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",xk="data:image/png;base64,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",vk="data:image/png;base64,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",yk="data:image/png;base64,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",bk="data:image/png;base64,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",wk="data:image/png;base64,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",Nk="data:image/png;base64,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",jd=[ok,lk,ck,dk,uk,fk,pk,hk,mk,gk,xk,vk,yk,bk,wk,Nk],_k=()=>o.jsx("section",{className:"relative z-10 w-full overflow-hidden py-14 md:py-16",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8",children:[o.jsx("div",{className:"mb-8 text-center",children:o.jsx(B1,{primary:"Our",secondary:"Clients",className:"text-center"})}),o.jsx("div",{className:"space-y-4 overflow-hidden",children:[{id:"left",items:[...jd,...jd],direction:"left"},{id:"right",items:[...jd,...jd],direction:"right"}].map(a=>o.jsx("div",{className:"overflow-hidden",children:o.jsx("div",{className:`client-marquee-track ${a.direction==="right"?"client-marquee-track-reverse":"client-marquee-track-left"} flex w-max items-center gap-3 md:gap-5`,children:a.items.map((t,n)=>o.jsx("div",{className:"client-logo-card flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E1] bg-white/80 px-3 py-2 shadow-[0_10px_24px_rgba(23,57,42,0.08)] backdrop-blur-sm sm:h-20 sm:w-32 md:h-24 md:w-36 lg:h-28 lg:w-40",children:o.jsx("img",{src:t,alt:`Client logo ${n+1}`,className:"h-full w-full object-contain p-1",loading:"lazy"})},`${a.id}-${n}`))})},a.id))})]})});function kk(a,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function jk(a,t,n){return t&&kk(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),a}var Wx="(prefers-reduced-motion: reduce)",io=1,Ek=2,bo=3,Ro=4,dc=5,Wd=6,nu=7,Sk={CREATED:io,MOUNTED:Ek,IDLE:bo,MOVING:Ro,SCROLLING:dc,DRAGGING:Wd,DESTROYED:nu};function Fi(a){a.length=0}function Oa(a,t,n){return Array.prototype.slice.call(a,t,n)}function nt(a){return a.bind.apply(a,[null].concat(Oa(arguments,1)))}var U1=setTimeout,ih=function(){};function Hx(a){return requestAnimationFrame(a)}function Eu(a,t){return typeof t===a}function Yl(a){return!Xh(a)&&Eu("object",a)}var qh=Array.isArray,W1=nt(Eu,"function"),Sa=nt(Eu,"string"),uc=nt(Eu,"undefined");function Xh(a){return a===null}function H1(a){try{return a instanceof(a.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function fc(a){return qh(a)?a:[a]}function Ln(a,t){fc(a).forEach(t)}function Qh(a,t){return a.indexOf(t)>-1}function Hd(a,t){return a.push.apply(a,fc(t)),a}function Li(a,t,n){a&&Ln(t,function(i){i&&a.classList[n?"add":"remove"](i)})}function pi(a,t){Li(a,Sa(t)?t.split(" "):t,!0)}function pc(a,t){Ln(t,a.appendChild.bind(a))}function Kh(a,t){Ln(a,function(n){var i=(t||n).parentNode;i&&i.insertBefore(n,t)})}function Gl(a,t){return H1(a)&&(a.msMatchesSelector||a.matches).call(a,t)}function V1(a,t){var n=a?Oa(a.children):[];return t?n.filter(function(i){return Gl(i,t)}):n}function hc(a,t){return t?V1(a,t)[0]:a.firstElementChild}var ql=Object.keys;function ds(a,t,n){return a&&(n?ql(a).reverse():ql(a)).forEach(function(i){i!=="__proto__"&&t(a[i],i)}),a}function Xl(a){return Oa(arguments,1).forEach(function(t){ds(t,function(n,i){a[i]=t[i]})}),a}function xa(a){return Oa(arguments,1).forEach(function(t){ds(t,function(n,i){qh(n)?a[i]=n.slice():Yl(n)?a[i]=xa({},Yl(a[i])?a[i]:{},n):a[i]=n})}),a}function Vx(a,t){Ln(t||ql(a),function(n){delete a[n]})}function hi(a,t){Ln(a,function(n){Ln(t,function(i){n&&n.removeAttribute(i)})})}function Oe(a,t,n){Yl(t)?ds(t,function(i,s){Oe(a,s,i)}):Ln(a,function(i){Xh(n)||n===""?hi(i,t):i.setAttribute(t,String(n))})}function co(a,t,n){var i=document.createElement(a);return t&&(Sa(t)?pi(i,t):Oe(i,t)),n&&pc(n,i),i}function qn(a,t,n){if(uc(n))return getComputedStyle(a)[t];Xh(n)||(a.style[t]=""+n)}function Ql(a,t){qn(a,"display",t)}function Y1(a){a.setActive&&a.setActive()||a.focus({preventScroll:!0})}function Qn(a,t){return a.getAttribute(t)}function Yx(a,t){return a&&a.classList.contains(t)}function jn(a){return a.getBoundingClientRect()}function vs(a){Ln(a,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function G1(a){return hc(new DOMParser().parseFromString(a,"text/html").body)}function Ci(a,t){a.preventDefault(),t&&(a.stopPropagation(),a.stopImmediatePropagation())}function q1(a,t){return a&&a.querySelector(t)}function Jh(a,t){return t?Oa(a.querySelectorAll(t)):[]}function Oi(a,t){Li(a,t,!1)}function ah(a){return a.timeStamp}function $a(a){return Sa(a)?a:a?a+"px":""}var mc="splide",Zh="data-"+mc;function Cl(a,t){if(!a)throw new Error("["+mc+"] "+(t||""))}var Aa=Math.min,iu=Math.max,au=Math.floor,Kl=Math.ceil,Ur=Math.abs;function X1(a,t,n){return Ur(a-t)<n}function Vd(a,t,n,i){var s=Aa(t,n),c=iu(t,n);return i?s<a&&a<c:s<=a&&a<=c}function $s(a,t,n){var i=Aa(t,n),s=iu(t,n);return Aa(iu(i,a),s)}function sh(a){return+(a>0)-+(a<0)}function oh(a,t){return Ln(t,function(n){a=a.replace("%s",""+n)}),a}function $h(a){return a<10?"0"+a:""+a}var Gx={};function Ak(a){return""+a+$h(Gx[a]=(Gx[a]||0)+1)}function Q1(){var a=[];function t(d,f,p,m){s(d,f,function(g,y,v){var b="addEventListener"in g,N=b?g.removeEventListener.bind(g,y,p,m):g.removeListener.bind(g,p);b?g.addEventListener(y,p,m):g.addListener(p),a.push([g,y,v,p,N])})}function n(d,f,p){s(d,f,function(m,g,y){a=a.filter(function(v){return v[0]===m&&v[1]===g&&v[2]===y&&(!p||v[3]===p)?(v[4](),!1):!0})})}function i(d,f,p){var m,g=!0;return typeof CustomEvent=="function"?m=new CustomEvent(f,{bubbles:g,detail:p}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(f,g,!1,p)),d.dispatchEvent(m),m}function s(d,f,p){Ln(d,function(m){m&&Ln(f,function(g){g.split(" ").forEach(function(y){var v=y.split(".");p(m,v[0],v[1])})})})}function c(){a.forEach(function(d){d[4]()}),Fi(a)}return{bind:t,unbind:n,dispatch:i,destroy:c}}var Ia="mounted",lh="ready",Di="move",Lo="moved",em="click",K1="active",J1="inactive",Z1="visible",$1="hidden",Dt="refresh",Ar="updated",wo="resize",Su="resized",ey="drag",ty="dragging",ry="dragged",Au="scroll",_s="scrolled",Ck="overflow",tm="destroy",ny="arrows:mounted",iy="arrows:updated",ay="pagination:mounted",sy="pagination:updated",rm="navigation:mounted",nm="autoplay:play",oy="autoplay:playing",im="autoplay:pause",am="lazyload:loaded",ly="sk",cy="sh",su="ei";function yt(a){var t=a?a.event.bus:document.createDocumentFragment(),n=Q1();function i(c,d){n.bind(t,fc(c).join(" "),function(f){d.apply(d,qh(f.detail)?f.detail:[])})}function s(c){n.dispatch(t,c,Oa(arguments,1))}return a&&a.event.on(tm,n.destroy),Xl(n,{bus:t,on:i,off:nt(n.unbind,t),emit:s})}function Cu(a,t,n,i){var s=Date.now,c,d=0,f,p=!0,m=0;function g(){if(!p){if(d=a?Aa((s()-c)/a,1):1,n&&n(d),d>=1&&(t(),c=s(),i&&++m>=i))return v();f=Hx(g)}}function y(C){C||N(),c=s()-(C?d*a:0),p=!1,f=Hx(g)}function v(){p=!0}function b(){c=s(),d=0,n&&n(d)}function N(){f&&cancelAnimationFrame(f),d=0,f=0,p=!0}function w(C){a=C}function k(){return p}return{start:y,rewind:b,pause:v,cancel:N,set:w,isPaused:k}}function Tk(a){var t=a;function n(s){t=s}function i(s){return Qh(fc(s),t)}return{set:n,is:i}}function Pk(a,t){var n=Cu(0,a,null,1);return function(){n.isPaused()&&n.start()}}function Rk(a,t,n){var i=a.state,s=n.breakpoints||{},c=n.reducedMotion||{},d=Q1(),f=[];function p(){var N=n.mediaQuery==="min";ql(s).sort(function(w,k){return N?+w-+k:+k-+w}).forEach(function(w){g(s[w],"("+(N?"min":"max")+"-width:"+w+"px)")}),g(c,Wx),y()}function m(N){N&&d.destroy()}function g(N,w){var k=matchMedia(w);d.bind(k,"change",y),f.push([N,k])}function y(){var N=i.is(nu),w=n.direction,k=f.reduce(function(C,A){return xa(C,A[1].matches?A[0]:{})},{});Vx(n),b(k),n.destroy?a.destroy(n.destroy==="completely"):N?(m(!0),a.mount()):w!==n.direction&&a.refresh()}function v(N){matchMedia(Wx).matches&&(N?xa(n,c):Vx(n,ql(c)))}function b(N,w,k){xa(n,N),w&&xa(Object.getPrototypeOf(n),N),(k||!i.is(io))&&a.emit(Ar,n)}return{setup:p,destroy:m,reduce:v,set:b}}var Tu="Arrow",Pu=Tu+"Left",Ru=Tu+"Right",dy=Tu+"Up",uy=Tu+"Down",qx="rtl",Lu="ttb",Pp={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[dy,Ru],ArrowRight:[uy,Pu]};function Lk(a,t,n){function i(c,d,f){f=f||n.direction;var p=f===qx&&!d?1:f===Lu?0:-1;return Pp[c]&&Pp[c][p]||c.replace(/width|left|right/i,function(m,g){var y=Pp[m.toLowerCase()][p]||m;return g>0?y.charAt(0).toUpperCase()+y.slice(1):y})}function s(c){return c*(n.direction===qx?1:-1)}return{resolve:i,orient:s}}var zi="role",uo="tabindex",Ok="disabled",Jn="aria-",gc=Jn+"controls",fy=Jn+"current",Xx=Jn+"selected",An=Jn+"label",sm=Jn+"labelledby",py=Jn+"hidden",om=Jn+"orientation",Jl=Jn+"roledescription",Qx=Jn+"live",Kx=Jn+"busy",Jx=Jn+"atomic",lm=[zi,uo,Ok,gc,fy,An,sm,py,om,Jl],gi=mc+"__",za="is-",Rp=mc,Zx=gi+"track",Ik=gi+"list",Ou=gi+"slide",hy=Ou+"--clone",zk=Ou+"__container",cm=gi+"arrows",Iu=gi+"arrow",my=Iu+"--prev",gy=Iu+"--next",zu=gi+"pagination",xy=zu+"__page",Mk=gi+"progress",Fk=Mk+"__bar",Dk=gi+"toggle",Bk=gi+"spinner",Uk=gi+"sr",Wk=za+"initialized",ys=za+"active",vy=za+"prev",yy=za+"next",ch=za+"visible",dh=za+"loading",by=za+"focus-in",wy=za+"overflow",Hk=[ys,ch,vy,yy,dh,by,wy],Vk={slide:Ou,clone:hy,arrows:cm,arrow:Iu,prev:my,next:gy,pagination:zu,page:xy,spinner:Bk};function Yk(a,t){if(W1(a.closest))return a.closest(t);for(var n=a;n&&n.nodeType===1&&!Gl(n,t);)n=n.parentElement;return n}var Gk=5,$x=200,Ny="touchstart mousedown",Lp="touchmove mousemove",Op="touchend touchcancel mouseup click";function qk(a,t,n){var i=yt(a),s=i.on,c=i.bind,d=a.root,f=n.i18n,p={},m=[],g=[],y=[],v,b,N;function w(){E(),j(),A()}function k(){s(Dt,C),s(Dt,w),s(Ar,A),c(document,Ny+" keydown",function(O){N=O.type==="keydown"},{capture:!0}),c(d,"focusin",function(){Li(d,by,!!N)})}function C(O){var B=lm.concat("style");Fi(m),Oi(d,g),Oi(v,y),hi([v,b],B),hi(d,O?B:["style",Jl])}function A(){Oi(d,g),Oi(v,y),g=z(Rp),y=z(Zx),pi(d,g),pi(v,y),Oe(d,An,n.label),Oe(d,sm,n.labelledby)}function E(){v=P("."+Zx),b=hc(v,"."+Ik),Cl(v&&b,"A track/list element is missing."),Hd(m,V1(b,"."+Ou+":not(."+hy+")")),ds({arrows:cm,pagination:zu,prev:my,next:gy,bar:Fk,toggle:Dk},function(O,B){p[B]=P("."+O)}),Xl(p,{root:d,track:v,list:b,slides:m})}function j(){var O=d.id||Ak(mc),B=n.role;d.id=O,v.id=v.id||O+"-track",b.id=b.id||O+"-list",!Qn(d,zi)&&d.tagName!=="SECTION"&&B&&Oe(d,zi,B),Oe(d,Jl,f.carousel),Oe(b,zi,"presentation")}function P(O){var B=q1(d,O);return B&&Yk(B,"."+Rp)===d?B:void 0}function z(O){return[O+"--"+n.type,O+"--"+n.direction,n.drag&&O+"--draggable",n.isNavigation&&O+"--nav",O===Rp&&ys]}return Xl(p,{setup:w,mount:k,destroy:C})}var No="slide",Oo="loop",xc="fade";function Xk(a,t,n,i){var s=yt(a),c=s.on,d=s.emit,f=s.bind,p=a.Components,m=a.root,g=a.options,y=g.isNavigation,v=g.updateOnMove,b=g.i18n,N=g.pagination,w=g.slideFocus,k=p.Direction.resolve,C=Qn(i,"style"),A=Qn(i,An),E=n>-1,j=hc(i,"."+zk),P;function z(){E||(i.id=m.id+"-slide"+$h(t+1),Oe(i,zi,N?"tabpanel":"group"),Oe(i,Jl,b.slide),Oe(i,An,A||oh(b.slideLabel,[t+1,a.length]))),O()}function O(){f(i,"click",nt(d,em,V)),f(i,"keydown",nt(d,ly,V)),c([Lo,cy,_s],Q),c(rm,W),v&&c(Di,D)}function B(){P=!0,s.destroy(),Oi(i,Hk),hi(i,lm),Oe(i,"style",C),Oe(i,An,A||"")}function W(){var X=a.splides.map(function(S){var T=S.splide.Components.Slides.getAt(t);return T?T.slide.id:""}).join(" ");Oe(i,An,oh(b.slideX,(E?n:t)+1)),Oe(i,gc,X),Oe(i,zi,w?"button":""),w&&hi(i,Jl)}function D(){P||Q()}function Q(){if(!P){var X=a.index;F(),J(),Li(i,vy,t===X-1),Li(i,yy,t===X+1)}}function F(){var X=ae();X!==Yx(i,ys)&&(Li(i,ys,X),Oe(i,fy,y&&X||""),d(X?K1:J1,V))}function J(){var X=ce(),S=!X&&(!ae()||E);if(a.state.is([Ro,dc])||Oe(i,py,S||""),Oe(Jh(i,g.focusableNodes||""),uo,S?-1:""),w&&Oe(i,uo,S?-1:0),X!==Yx(i,ch)&&(Li(i,ch,X),d(X?Z1:$1,V)),!X&&document.activeElement===i){var T=p.Slides.getAt(a.index);T&&Y1(T.slide)}}function Z(X,S,T){qn(T&&j||i,X,S)}function ae(){var X=a.index;return X===t||g.cloneStatus&&X===n}function ce(){if(a.is(xc))return ae();var X=jn(p.Elements.track),S=jn(i),T=k("left",!0),Y=k("right",!0);return au(X[T])<=Kl(S[T])&&au(S[Y])<=Kl(X[Y])}function $(X,S){var T=Ur(X-t);return!E&&(g.rewind||a.is(Oo))&&(T=Aa(T,a.length-T)),T<=S}var V={index:t,slideIndex:n,slide:i,container:j,isClone:E,mount:z,destroy:B,update:Q,style:Z,isWithin:$};return V}function Qk(a,t,n){var i=yt(a),s=i.on,c=i.emit,d=i.bind,f=t.Elements,p=f.slides,m=f.list,g=[];function y(){v(),s(Dt,b),s(Dt,v)}function v(){p.forEach(function(Q,F){w(Q,F,-1)})}function b(){P(function(Q){Q.destroy()}),Fi(g)}function N(){P(function(Q){Q.update()})}function w(Q,F,J){var Z=Xk(a,F,J,Q);Z.mount(),g.push(Z),g.sort(function(ae,ce){return ae.index-ce.index})}function k(Q){return Q?z(function(F){return!F.isClone}):g}function C(Q){var F=t.Controller,J=F.toIndex(Q),Z=F.hasFocus()?1:n.perPage;return z(function(ae){return Vd(ae.index,J,J+Z-1)})}function A(Q){return z(Q)[0]}function E(Q,F){Ln(Q,function(J){if(Sa(J)&&(J=G1(J)),H1(J)){var Z=p[F];Z?Kh(J,Z):pc(m,J),pi(J,n.classes.slide),B(J,nt(c,wo))}}),c(Dt)}function j(Q){vs(z(Q).map(function(F){return F.slide})),c(Dt)}function P(Q,F){k(F).forEach(Q)}function z(Q){return g.filter(W1(Q)?Q:function(F){return Sa(Q)?Gl(F.slide,Q):Qh(fc(Q),F.index)})}function O(Q,F,J){P(function(Z){Z.style(Q,F,J)})}function B(Q,F){var J=Jh(Q,"img"),Z=J.length;Z?J.forEach(function(ae){d(ae,"load error",function(){--Z||F()})}):F()}function W(Q){return Q?p.length:g.length}function D(){return g.length>n.perPage}return{mount:y,destroy:b,update:N,register:w,get:k,getIn:C,getAt:A,add:E,remove:j,forEach:P,filter:z,style:O,getLength:W,isEnough:D}}function Kk(a,t,n){var i=yt(a),s=i.on,c=i.bind,d=i.emit,f=t.Slides,p=t.Direction.resolve,m=t.Elements,g=m.root,y=m.track,v=m.list,b=f.getAt,N=f.style,w,k,C;function A(){E(),c(window,"resize load",Pk(nt(d,wo))),s([Ar,Dt],E),s(wo,j)}function E(){w=n.direction===Lu,qn(g,"maxWidth",$a(n.width)),qn(y,p("paddingLeft"),P(!1)),qn(y,p("paddingRight"),P(!0)),j(!0)}function j(V){var X=jn(g);(V||k.width!==X.width||k.height!==X.height)&&(qn(y,"height",z()),N(p("marginRight"),$a(n.gap)),N("width",B()),N("height",W(),!0),k=X,d(Su),C!==(C=$())&&(Li(g,wy,C),d(Ck,C)))}function P(V){var X=n.padding,S=p(V?"right":"left");return X&&$a(X[S]||(Yl(X)?0:X))||"0px"}function z(){var V="";return w&&(V=O(),Cl(V,"height or heightRatio is missing."),V="calc("+V+" - "+P(!1)+" - "+P(!0)+")"),V}function O(){return $a(n.height||jn(v).width*n.heightRatio)}function B(){return n.autoWidth?null:$a(n.fixedWidth)||(w?"":D())}function W(){return $a(n.fixedHeight)||(w?n.autoHeight?null:D():O())}function D(){var V=$a(n.gap);return"calc((100%"+(V&&" + "+V)+")/"+(n.perPage||1)+(V&&" - "+V)+")"}function Q(){return jn(v)[p("width")]}function F(V,X){var S=b(V||0);return S?jn(S.slide)[p("width")]+(X?0:ae()):0}function J(V,X){var S=b(V);if(S){var T=jn(S.slide)[p("right")],Y=jn(v)[p("left")];return Ur(T-Y)+(X?0:ae())}return 0}function Z(V){return J(a.length-1)-J(0)+F(0,V)}function ae(){var V=b(0);return V&&parseFloat(qn(V.slide,p("marginRight")))||0}function ce(V){return parseFloat(qn(y,p("padding"+(V?"Right":"Left"))))||0}function $(){return a.is(xc)||Z(!0)>Q()}return{mount:A,resize:j,listSize:Q,slideSize:F,sliderSize:Z,totalSize:J,getPadding:ce,isOverflow:$}}var Jk=2;function Zk(a,t,n){var i=yt(a),s=i.on,c=t.Elements,d=t.Slides,f=t.Direction.resolve,p=[],m;function g(){s(Dt,y),s([Ar,wo],b),(m=k())&&(N(m),t.Layout.resize(!0))}function y(){v(),g()}function v(){vs(p),Fi(p),i.destroy()}function b(){var C=k();m!==C&&(m<C||!C)&&i.emit(Dt)}function N(C){var A=d.get().slice(),E=A.length;if(E){for(;A.length<C;)Hd(A,A);Hd(A.slice(-C),A.slice(0,C)).forEach(function(j,P){var z=P<C,O=w(j.slide,P);z?Kh(O,A[0].slide):pc(c.list,O),Hd(p,O),d.register(O,P-C+(z?0:E),j.index)})}}function w(C,A){var E=C.cloneNode(!0);return pi(E,n.classes.clone),E.id=a.root.id+"-clone"+$h(A+1),E}function k(){var C=n.clones;if(!a.is(Oo))C=0;else if(uc(C)){var A=n[f("fixedWidth")]&&t.Layout.slideSize(0),E=A&&Kl(jn(c.track)[f("width")]/A);C=E||n[f("autoWidth")]&&a.length||n.perPage*Jk}return C}return{mount:g,destroy:v}}function $k(a,t,n){var i=yt(a),s=i.on,c=i.emit,d=a.state.set,f=t.Layout,p=f.slideSize,m=f.getPadding,g=f.totalSize,y=f.listSize,v=f.sliderSize,b=t.Direction,N=b.resolve,w=b.orient,k=t.Elements,C=k.list,A=k.track,E;function j(){E=t.Transition,s([Ia,Su,Ar,Dt],P)}function P(){t.Controller.isBusy()||(t.Scroll.cancel(),O(a.index),t.Slides.update())}function z(S,T,Y,se){S!==T&&V(S>Y)&&(Q(),B(D(Z(),S>Y),!0)),d(Ro),c(Di,T,Y,S),E.start(T,function(){d(bo),c(Lo,T,Y,S),se&&se()})}function O(S){B(J(S,!0))}function B(S,T){if(!a.is(xc)){var Y=T?S:W(S);qn(C,"transform","translate"+N("X")+"("+Y+"px)"),S!==Y&&c(cy)}}function W(S){if(a.is(Oo)){var T=F(S),Y=T>t.Controller.getEnd(),se=T<0;(se||Y)&&(S=D(S,Y))}return S}function D(S,T){var Y=S-$(T),se=v();return S-=w(se*(Kl(Ur(Y)/se)||1))*(T?1:-1),S}function Q(){B(Z(),!0),E.cancel()}function F(S){for(var T=t.Slides.get(),Y=0,se=1/0,le=0;le<T.length;le++){var ge=T[le].index,K=Ur(J(ge,!0)-S);if(K<=se)se=K,Y=ge;else break}return Y}function J(S,T){var Y=w(g(S-1)-ce(S));return T?ae(Y):Y}function Z(){var S=N("left");return jn(C)[S]-jn(A)[S]+w(m(!1))}function ae(S){return n.trimSpace&&a.is(No)&&(S=$s(S,0,w(v(!0)-y()))),S}function ce(S){var T=n.focus;return T==="center"?(y()-p(S,!0))/2:+T*p(S)||0}function $(S){return J(S?t.Controller.getEnd():0,!!n.trimSpace)}function V(S){var T=w(D(Z(),S));return S?T>=0:T<=C[N("scrollWidth")]-jn(A)[N("width")]}function X(S,T){T=uc(T)?Z():T;var Y=S!==!0&&w(T)<w($(!1)),se=S!==!1&&w(T)>w($(!0));return Y||se}return{mount:j,move:z,jump:O,translate:B,shift:D,cancel:Q,toIndex:F,toPosition:J,getPosition:Z,getLimit:$,exceededLimit:X,reposition:P}}function ej(a,t,n){var i=yt(a),s=i.on,c=i.emit,d=t.Move,f=d.getPosition,p=d.getLimit,m=d.toPosition,g=t.Slides,y=g.isEnough,v=g.getLength,b=n.omitEnd,N=a.is(Oo),w=a.is(No),k=nt(Z,!1),C=nt(Z,!0),A=n.start||0,E,j=A,P,z,O;function B(){W(),s([Ar,Dt,su],W),s(Su,D)}function W(){P=v(!0),z=n.perMove,O=n.perPage,E=V();var K=$s(A,0,b?E:P-1);K!==A&&(A=K,d.reposition())}function D(){E!==V()&&c(su)}function Q(K,ue,ye){if(!ge()){var xe=J(K),Me=$(xe);Me>-1&&(ue||Me!==A)&&(Y(Me),d.move(xe,Me,j,ye))}}function F(K,ue,ye,xe){t.Scroll.scroll(K,ue,ye,function(){var Me=$(d.toIndex(f()));Y(b?Aa(Me,E):Me),xe&&xe()})}function J(K){var ue=A;if(Sa(K)){var ye=K.match(/([+\-<>])(\d+)?/)||[],xe=ye[1],Me=ye[2];xe==="+"||xe==="-"?ue=ae(A+ +(""+xe+(+Me||1)),A):xe===">"?ue=Me?X(+Me):k(!0):xe==="<"&&(ue=C(!0))}else ue=N?K:$s(K,0,E);return ue}function Z(K,ue){var ye=z||(le()?1:O),xe=ae(A+ye*(K?-1:1),A,!(z||le()));return xe===-1&&w&&!X1(f(),p(!K),1)?K?0:E:ue?xe:$(xe)}function ae(K,ue,ye){if(y()||le()){var xe=ce(K);xe!==K&&(ue=K,K=xe,ye=!1),K<0||K>E?!z&&(Vd(0,K,ue,!0)||Vd(E,ue,K,!0))?K=X(S(K)):N?K=ye?K<0?-(P%O||O):P:K:n.rewind?K=K<0?E:0:K=-1:ye&&K!==ue&&(K=X(S(ue)+(K<ue?-1:1)))}else K=-1;return K}function ce(K){if(w&&n.trimSpace==="move"&&K!==A)for(var ue=f();ue===m(K,!0)&&Vd(K,0,a.length-1,!n.rewind);)K<A?--K:++K;return K}function $(K){return N?(K+P)%P||0:K}function V(){for(var K=P-(le()||N&&z?1:O);b&&K-- >0;)if(m(P-1,!0)!==m(K,!0)){K++;break}return $s(K,0,P-1)}function X(K){return $s(le()?K:O*K,0,E)}function S(K){return le()?Aa(K,E):au((K>=E?P-1:K)/O)}function T(K){var ue=d.toIndex(K);return w?$s(ue,0,E):ue}function Y(K){K!==A&&(j=A,A=K)}function se(K){return K?j:A}function le(){return!uc(n.focus)||n.isNavigation}function ge(){return a.state.is([Ro,dc])&&!!n.waitForTransition}return{mount:B,go:Q,scroll:F,getNext:k,getPrev:C,getAdjacent:Z,getEnd:V,setIndex:Y,getIndex:se,toIndex:X,toPage:S,toDest:T,hasFocus:le,isBusy:ge}}var tj="http://www.w3.org/2000/svg",rj="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Ed=40;function nj(a,t,n){var i=yt(a),s=i.on,c=i.bind,d=i.emit,f=n.classes,p=n.i18n,m=t.Elements,g=t.Controller,y=m.arrows,v=m.track,b=y,N=m.prev,w=m.next,k,C,A={};function E(){P(),s(Ar,j)}function j(){z(),E()}function P(){var F=n.arrows;F&&!(N&&w)&&W(),N&&w&&(Xl(A,{prev:N,next:w}),Ql(b,F?"":"none"),pi(b,C=cm+"--"+n.direction),F&&(O(),Q(),Oe([N,w],gc,v.id),d(ny,N,w)))}function z(){i.destroy(),Oi(b,C),k?(vs(y?[N,w]:b),N=w=null):hi([N,w],lm)}function O(){s([Ia,Lo,Dt,_s,su],Q),c(w,"click",nt(B,">")),c(N,"click",nt(B,"<"))}function B(F){g.go(F,!0)}function W(){b=y||co("div",f.arrows),N=D(!0),w=D(!1),k=!0,pc(b,[N,w]),!y&&Kh(b,v)}function D(F){var J='<button class="'+f.arrow+" "+(F?f.prev:f.next)+'" type="button"><svg xmlns="'+tj+'" viewBox="0 0 '+Ed+" "+Ed+'" width="'+Ed+'" height="'+Ed+'" focusable="false"><path d="'+(n.arrowPath||rj)+'" />';return G1(J)}function Q(){if(N&&w){var F=a.index,J=g.getPrev(),Z=g.getNext(),ae=J>-1&&F<J?p.last:p.prev,ce=Z>-1&&F>Z?p.first:p.next;N.disabled=J<0,w.disabled=Z<0,Oe(N,An,ae),Oe(w,An,ce),d(iy,N,w,J,Z)}}return{arrows:A,mount:E,destroy:z,update:Q}}var ij=Zh+"-interval";function aj(a,t,n){var i=yt(a),s=i.on,c=i.bind,d=i.emit,f=Cu(n.interval,a.go.bind(a,">"),O),p=f.isPaused,m=t.Elements,g=t.Elements,y=g.root,v=g.toggle,b=n.autoplay,N,w,k=b==="pause";function C(){b&&(A(),v&&Oe(v,gc,m.track.id),k||E(),z())}function A(){n.pauseOnHover&&c(y,"mouseenter mouseleave",function(W){N=W.type==="mouseenter",P()}),n.pauseOnFocus&&c(y,"focusin focusout",function(W){w=W.type==="focusin",P()}),v&&c(v,"click",function(){k?E():j(!0)}),s([Di,Au,Dt],f.rewind),s(Di,B)}function E(){p()&&t.Slides.isEnough()&&(f.start(!n.resetProgress),w=N=k=!1,z(),d(nm))}function j(W){W===void 0&&(W=!0),k=!!W,z(),p()||(f.pause(),d(im))}function P(){k||(N||w?j(!1):E())}function z(){v&&(Li(v,ys,!k),Oe(v,An,n.i18n[k?"play":"pause"]))}function O(W){var D=m.bar;D&&qn(D,"width",W*100+"%"),d(oy,W)}function B(W){var D=t.Slides.getAt(W);f.set(D&&+Qn(D.slide,ij)||n.interval)}return{mount:C,destroy:f.cancel,play:E,pause:j,isPaused:p}}function sj(a,t,n){var i=yt(a),s=i.on;function c(){n.cover&&(s(am,nt(f,!0)),s([Ia,Ar,Dt],nt(d,!0)))}function d(p){t.Slides.forEach(function(m){var g=hc(m.container||m.slide,"img");g&&g.src&&f(p,g,m)})}function f(p,m,g){g.style("background",p?'center/cover no-repeat url("'+m.src+'")':"",!0),Ql(m,p?"none":"")}return{mount:c,destroy:nt(d,!1)}}var oj=10,lj=600,cj=.6,dj=1.5,uj=800;function fj(a,t,n){var i=yt(a),s=i.on,c=i.emit,d=a.state.set,f=t.Move,p=f.getPosition,m=f.getLimit,g=f.exceededLimit,y=f.translate,v=a.is(No),b,N,w=1;function k(){s(Di,j),s([Ar,Dt],P)}function C(O,B,W,D,Q){var F=p();if(j(),W&&(!v||!g())){var J=t.Layout.sliderSize(),Z=sh(O)*J*au(Ur(O)/J)||0;O=f.toPosition(t.Controller.toDest(O%J))+Z}var ae=X1(F,O,1);w=1,B=ae?0:B||iu(Ur(O-F)/dj,uj),N=D,b=Cu(B,A,nt(E,F,O,Q),1),d(dc),c(Au),b.start()}function A(){d(bo),N&&N(),c(_s)}function E(O,B,W,D){var Q=p(),F=O+(B-O)*z(D),J=(F-Q)*w;y(Q+J),v&&!W&&g()&&(w*=cj,Ur(J)<oj&&C(m(g(!0)),lj,!1,N,!0))}function j(){b&&b.cancel()}function P(){b&&!b.isPaused()&&(j(),A())}function z(O){var B=n.easingFunc;return B?B(O):1-Math.pow(1-O,4)}return{mount:k,destroy:j,scroll:C,cancel:P}}var eo={passive:!1,capture:!0};function pj(a,t,n){var i=yt(a),s=i.on,c=i.emit,d=i.bind,f=i.unbind,p=a.state,m=t.Move,g=t.Scroll,y=t.Controller,v=t.Elements.track,b=t.Media.reduce,N=t.Direction,w=N.resolve,k=N.orient,C=m.getPosition,A=m.exceededLimit,E,j,P,z,O,B=!1,W,D,Q;function F(){d(v,Lp,ih,eo),d(v,Op,ih,eo),d(v,Ny,Z,eo),d(v,"click",$,{capture:!0}),d(v,"dragstart",Ci),s([Ia,Ar],J)}function J(){var ne=n.drag;St(!ne),z=ne==="free"}function Z(ne){if(W=!1,!D){var Ee=Me(ne);xe(ne.target)&&(Ee||!ne.button)&&(y.isBusy()?Ci(ne,!0):(Q=Ee?v:window,O=p.is([Ro,dc]),P=null,d(Q,Lp,ae,eo),d(Q,Op,ce,eo),m.cancel(),g.cancel(),V(ne)))}}function ae(ne){if(p.is(Wd)||(p.set(Wd),c(ey)),ne.cancelable)if(O){m.translate(E+ye(le(ne)));var Ee=ge(ne)>$x,it=B!==(B=A());(Ee||it)&&V(ne),W=!0,c(ty),Ci(ne)}else T(ne)&&(O=S(ne),Ci(ne))}function ce(ne){p.is(Wd)&&(p.set(bo),c(ry)),O&&(X(ne),Ci(ne)),f(Q,Lp,ae),f(Q,Op,ce),O=!1}function $(ne){!D&&W&&Ci(ne,!0)}function V(ne){P=j,j=ne,E=C()}function X(ne){var Ee=Y(ne),it=se(Ee),wt=n.rewind&&n.rewindByDrag;b(!1),z?y.scroll(it,0,n.snap):a.is(xc)?y.go(k(sh(Ee))<0?wt?"<":"-":wt?">":"+"):a.is(No)&&B&&wt?y.go(A(!0)?">":"<"):y.go(y.toDest(it),!0),b(!0)}function S(ne){var Ee=n.dragMinThreshold,it=Yl(Ee),wt=it&&Ee.mouse||0,q=(it?Ee.touch:+Ee)||10;return Ur(le(ne))>(Me(ne)?q:wt)}function T(ne){return Ur(le(ne))>Ur(le(ne,!0))}function Y(ne){if(a.is(Oo)||!B){var Ee=ge(ne);if(Ee&&Ee<$x)return le(ne)/Ee}return 0}function se(ne){return C()+sh(ne)*Aa(Ur(ne)*(n.flickPower||600),z?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function le(ne,Ee){return ue(ne,Ee)-ue(K(ne),Ee)}function ge(ne){return ah(ne)-ah(K(ne))}function K(ne){return j===ne&&P||j}function ue(ne,Ee){return(Me(ne)?ne.changedTouches[0]:ne)["page"+w(Ee?"Y":"X")]}function ye(ne){return ne/(B&&a.is(No)?Gk:1)}function xe(ne){var Ee=n.noDrag;return!Gl(ne,"."+xy+", ."+Iu)&&(!Ee||!Gl(ne,Ee))}function Me(ne){return typeof TouchEvent<"u"&&ne instanceof TouchEvent}function bt(){return O}function St(ne){D=ne}return{mount:F,disable:St,isDragging:bt}}var hj={Spacebar:" ",Right:Ru,Left:Pu,Up:dy,Down:uy};function dm(a){return a=Sa(a)?a:a.key,hj[a]||a}var ev="keydown";function mj(a,t,n){var i=yt(a),s=i.on,c=i.bind,d=i.unbind,f=a.root,p=t.Direction.resolve,m,g;function y(){v(),s(Ar,b),s(Ar,v),s(Di,w)}function v(){var C=n.keyboard;C&&(m=C==="global"?window:f,c(m,ev,k))}function b(){d(m,ev)}function N(C){g=C}function w(){var C=g;g=!0,U1(function(){g=C})}function k(C){if(!g){var A=dm(C);A===p(Pu)?a.go("<"):A===p(Ru)&&a.go(">")}}return{mount:y,destroy:b,disable:N}}var Tl=Zh+"-lazy",Yd=Tl+"-srcset",gj="["+Tl+"], ["+Yd+"]";function xj(a,t,n){var i=yt(a),s=i.on,c=i.off,d=i.bind,f=i.emit,p=n.lazyLoad==="sequential",m=[Lo,_s],g=[];function y(){n.lazyLoad&&(v(),s(Dt,v))}function v(){Fi(g),b(),p?C():(c(m),s(m,N),N())}function b(){t.Slides.forEach(function(A){Jh(A.slide,gj).forEach(function(E){var j=Qn(E,Tl),P=Qn(E,Yd);if(j!==E.src||P!==E.srcset){var z=n.classes.spinner,O=E.parentElement,B=hc(O,"."+z)||co("span",z,O);g.push([E,A,B]),E.src||Ql(E,"none")}})})}function N(){g=g.filter(function(A){var E=n.perPage*((n.preloadPages||1)+1)-1;return A[1].isWithin(a.index,E)?w(A):!0}),g.length||c(m)}function w(A){var E=A[0];pi(A[1].slide,dh),d(E,"load error",nt(k,A)),Oe(E,"src",Qn(E,Tl)),Oe(E,"srcset",Qn(E,Yd)),hi(E,Tl),hi(E,Yd)}function k(A,E){var j=A[0],P=A[1];Oi(P.slide,dh),E.type!=="error"&&(vs(A[2]),Ql(j,""),f(am,j,P),f(wo)),p&&C()}function C(){g.length&&w(g.shift())}return{mount:y,destroy:nt(Fi,g),check:N}}function vj(a,t,n){var i=yt(a),s=i.on,c=i.emit,d=i.bind,f=t.Slides,p=t.Elements,m=t.Controller,g=m.hasFocus,y=m.getIndex,v=m.go,b=t.Direction.resolve,N=p.pagination,w=[],k,C;function A(){E(),s([Ar,Dt,su],A);var D=n.pagination;N&&Ql(N,D?"":"none"),D&&(s([Di,Au,_s],W),j(),W(),c(ay,{list:k,items:w},B(a.index)))}function E(){k&&(vs(N?Oa(k.children):k),Oi(k,C),Fi(w),k=null),i.destroy()}function j(){var D=a.length,Q=n.classes,F=n.i18n,J=n.perPage,Z=g()?m.getEnd()+1:Kl(D/J);k=N||co("ul",Q.pagination,p.track.parentElement),pi(k,C=zu+"--"+O()),Oe(k,zi,"tablist"),Oe(k,An,F.select),Oe(k,om,O()===Lu?"vertical":"");for(var ae=0;ae<Z;ae++){var ce=co("li",null,k),$=co("button",{class:Q.page,type:"button"},ce),V=f.getIn(ae).map(function(S){return S.slide.id}),X=!g()&&J>1?F.pageX:F.slideX;d($,"click",nt(P,ae)),n.paginationKeyboard&&d($,"keydown",nt(z,ae)),Oe(ce,zi,"presentation"),Oe($,zi,"tab"),Oe($,gc,V.join(" ")),Oe($,An,oh(X,ae+1)),Oe($,uo,-1),w.push({li:ce,button:$,page:ae})}}function P(D){v(">"+D,!0)}function z(D,Q){var F=w.length,J=dm(Q),Z=O(),ae=-1;J===b(Ru,!1,Z)?ae=++D%F:J===b(Pu,!1,Z)?ae=(--D+F)%F:J==="Home"?ae=0:J==="End"&&(ae=F-1);var ce=w[ae];ce&&(Y1(ce.button),v(">"+ae),Ci(Q,!0))}function O(){return n.paginationDirection||n.direction}function B(D){return w[m.toPage(D)]}function W(){var D=B(y(!0)),Q=B(y());if(D){var F=D.button;Oi(F,ys),hi(F,Xx),Oe(F,uo,-1)}if(Q){var J=Q.button;pi(J,ys),Oe(J,Xx,!0),Oe(J,uo,"")}c(sy,{list:k,items:w},D,Q)}return{items:w,mount:A,destroy:E,getAt:B,update:W}}var yj=[" ","Enter"];function bj(a,t,n){var i=n.isNavigation,s=n.slideFocus,c=[];function d(){a.splides.forEach(function(N){N.isParent||(m(a,N.splide),m(N.splide,a))}),i&&g()}function f(){c.forEach(function(N){N.destroy()}),Fi(c)}function p(){f(),d()}function m(N,w){var k=yt(N);k.on(Di,function(C,A,E){w.go(w.is(Oo)?E:C)}),c.push(k)}function g(){var N=yt(a),w=N.on;w(em,v),w(ly,b),w([Ia,Ar],y),c.push(N),N.emit(rm,a.splides)}function y(){Oe(t.Elements.list,om,n.direction===Lu?"vertical":"")}function v(N){a.go(N.index)}function b(N,w){Qh(yj,dm(w))&&(v(N),Ci(w))}return{setup:nt(t.Media.set,{slideFocus:uc(s)?i:s},!0),mount:d,destroy:f,remount:p}}function wj(a,t,n){var i=yt(a),s=i.bind,c=0;function d(){n.wheel&&s(t.Elements.track,"wheel",f,eo)}function f(m){if(m.cancelable){var g=m.deltaY,y=g<0,v=ah(m),b=n.wheelMinThreshold||0,N=n.wheelSleep||0;Ur(g)>b&&v-c>N&&(a.go(y?"<":">"),c=v),p(y)&&Ci(m)}}function p(m){return!n.releaseWheel||a.state.is(Ro)||t.Controller.getAdjacent(m)!==-1}return{mount:d}}var Nj=90;function _j(a,t,n){var i=yt(a),s=i.on,c=t.Elements.track,d=n.live&&!n.isNavigation,f=co("span",Uk),p=Cu(Nj,nt(g,!1));function m(){d&&(v(!t.Autoplay.isPaused()),Oe(c,Jx,!0),f.textContent="…",s(nm,nt(v,!0)),s(im,nt(v,!1)),s([Lo,_s],nt(g,!0)))}function g(b){Oe(c,Kx,b),b?(pc(c,f),p.start()):(vs(f),p.cancel())}function y(){hi(c,[Qx,Jx,Kx]),vs(f)}function v(b){d&&Oe(c,Qx,b?"off":"polite")}return{mount:m,disable:v,destroy:y}}var kj=Object.freeze({__proto__:null,Media:Rk,Direction:Lk,Elements:qk,Slides:Qk,Layout:Kk,Clones:Zk,Move:$k,Controller:ej,Arrows:nj,Autoplay:aj,Cover:sj,Scroll:fj,Drag:pj,Keyboard:mj,LazyLoad:xj,Pagination:vj,Sync:bj,Wheel:wj,Live:_j}),jj={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Ej={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Vk,i18n:jj,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Sj(a,t,n){var i=t.Slides;function s(){yt(a).on([Ia,Dt],c)}function c(){i.forEach(function(f){f.style("transform","translateX(-"+100*f.index+"%)")})}function d(f,p){i.style("transition","opacity "+n.speed+"ms "+n.easing),U1(p)}return{mount:s,start:d,cancel:ih}}function Aj(a,t,n){var i=t.Move,s=t.Controller,c=t.Scroll,d=t.Elements.list,f=nt(qn,d,"transition"),p;function m(){yt(a).bind(d,"transitionend",function(b){b.target===d&&p&&(y(),p())})}function g(b,N){var w=i.toPosition(b,!0),k=i.getPosition(),C=v(b);Ur(w-k)>=1&&C>=1?n.useScroll?c.scroll(w,C,!1,N):(f("transform "+C+"ms "+n.easing),i.translate(w,!0),p=N):(i.jump(b),N())}function y(){f(""),c.cancel()}function v(b){var N=n.rewindSpeed;if(a.is(No)&&N){var w=s.getIndex(!0),k=s.getEnd();if(w===0&&b>=k||w>=k&&b===0)return N}return n.speed}return{mount:m,start:g,cancel:y}}var Cj=(function(){function a(n,i){this.event=yt(),this.Components={},this.state=Tk(io),this.splides=[],this._o={},this._E={};var s=Sa(n)?q1(document,n):n;Cl(s,s+" is invalid."),this.root=s,i=xa({label:Qn(s,An)||"",labelledby:Qn(s,sm)||""},Ej,a.defaults,i||{});try{xa(i,JSON.parse(Qn(s,Zh)))}catch{Cl(!1,"Invalid JSON")}this._o=Object.create(xa({},i))}var t=a.prototype;return t.mount=function(i,s){var c=this,d=this.state,f=this.Components;Cl(d.is([io,nu]),"Already mounted!"),d.set(io),this._C=f,this._T=s||this._T||(this.is(xc)?Sj:Aj),this._E=i||this._E;var p=Xl({},kj,this._E,{Transition:this._T});return ds(p,function(m,g){var y=m(c,f,c._o);f[g]=y,y.setup&&y.setup()}),ds(f,function(m){m.mount&&m.mount()}),this.emit(Ia),pi(this.root,Wk),d.set(bo),this.emit(lh),this},t.sync=function(i){return this.splides.push({splide:i}),i.splides.push({splide:this,isParent:!0}),this.state.is(bo)&&(this._C.Sync.remount(),i.Components.Sync.remount()),this},t.go=function(i){return this._C.Controller.go(i),this},t.on=function(i,s){return this.event.on(i,s),this},t.off=function(i){return this.event.off(i),this},t.emit=function(i){var s;return(s=this.event).emit.apply(s,[i].concat(Oa(arguments,1))),this},t.add=function(i,s){return this._C.Slides.add(i,s),this},t.remove=function(i){return this._C.Slides.remove(i),this},t.is=function(i){return this._o.type===i},t.refresh=function(){return this.emit(Dt),this},t.destroy=function(i){i===void 0&&(i=!0);var s=this.event,c=this.state;return c.is(io)?yt(this).on(lh,this.destroy.bind(this,i)):(ds(this._C,function(d){d.destroy&&d.destroy(i)},!0),s.emit(tm),s.destroy(),i&&Fi(this.splides),c.set(nu)),this},jk(a,[{key:"options",get:function(){return this._o},set:function(i){this._C.Media.set(i,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),a})(),um=Cj;um.defaults={};um.STATES=Sk;var tv=[[Ia,"onMounted"],[lh,"onReady"],[Di,"onMove"],[Lo,"onMoved"],[em,"onClick"],[K1,"onActive"],[J1,"onInactive"],[Z1,"onVisible"],[$1,"onHidden"],[Dt,"onRefresh"],[Ar,"onUpdated"],[wo,"onResize"],[Su,"onResized"],[ey,"onDrag"],[ty,"onDragging"],[ry,"onDragged"],[Au,"onScroll"],[_s,"onScrolled"],[tm,"onDestroy"],[ny,"onArrowsMounted"],[iy,"onArrowsUpdated"],[ay,"onPaginationMounted"],[sy,"onPaginationUpdated"],[rm,"onNavigationMounted"],[nm,"onAutoplayPlay"],[oy,"onAutoplayPlaying"],[im,"onAutoplayPause"],[am,"onLazyLoadLoaded"]];function fm(...a){return a.filter(Boolean).join(" ")}function ou(a){return a!==null&&typeof a=="object"}function uh(a,t){if(Array.isArray(a)&&Array.isArray(t))return a.length===t.length&&!a.some((n,i)=>!uh(n,t[i]));if(ou(a)&&ou(t)){const n=Object.keys(a),i=Object.keys(t);return n.length===i.length&&!n.some(s=>!Object.prototype.hasOwnProperty.call(t,s)||!uh(a[s],t[s]))}return a===t}function Tj(a,t){return a.length===t.length&&!a.some((n,i)=>n!==t[i])}function Pj(a,t){if(a){const n=Object.keys(a);for(let i=0;i<n.length;i++){const s=n[i];if(s!=="__proto__"&&t(a[s],s)===!1)break}}return a}function fh(a,t){const n=a;return Pj(t,(i,s)=>{Array.isArray(i)?n[s]=i.slice():ou(i)?n[s]=fh(ou(n[s])?n[s]:{},i):n[s]=i}),n}var Rj=({children:a,className:t,...n})=>ma.createElement("div",{className:fm("splide__track",t),...n},ma.createElement("ul",{className:"splide__list"},a)),Lj=class extends ma.Component{constructor(){super(...arguments),this.splideRef=ma.createRef(),this.slides=[]}componentDidMount(){const{options:a,extensions:t,transition:n}=this.props,{current:i}=this.splideRef;i&&(this.splide=new um(i,a),this.bind(this.splide),this.splide.mount(t,n),this.options=fh({},a||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:a}=this.props;a&&!uh(this.options,a)&&(this.splide.options=a,this.options=fh({},a));const t=this.getSlides();Tj(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(a){var t;(t=this.splide)==null||t.sync(a)}go(a){var t;(t=this.splide)==null||t.go(a)}getSlides(){var a;if(this.splide){const t=(a=this.splide.Components.Elements)==null?void 0:a.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(a){tv.forEach(([t,n])=>{const i=this.props[n];typeof i=="function"&&a.on(t,(...s)=>{i(a,...s)})})}omit(a,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(a,n)&&delete a[n]}),a}render(){const{className:a,tag:t="div",hasTrack:n=!0,children:i,...s}=this.props;return ma.createElement(t,{className:fm("splide",a),ref:this.splideRef,...this.omit(s,["options",...tv.map(c=>c[1])])},n?ma.createElement(Rj,null,i):i)}},Oj=({children:a,className:t,...n})=>ma.createElement("li",{className:fm("splide__slide",t),...n},a);function Ij(a){a.length=0}function pm(a,t,n){return Array.prototype.slice.call(a,t,n)}function Mu(a){return a.bind.apply(a,[null].concat(pm(arguments,1)))}function rv(a){return requestAnimationFrame(a)}function hm(a,t){return typeof t===a}var _y=Array.isArray;Mu(hm,"function");Mu(hm,"string");Mu(hm,"undefined");function ky(a){return _y(a)?a:[a]}function nv(a,t){ky(a).forEach(t)}var zj=Object.keys;function Mj(a,t,n){if(a){var i=zj(a);i=i;for(var s=0;s<i.length;s++){var c=i[s];if(c!=="__proto__"&&t(a[c],c)===!1)break}}return a}function Fj(a){return pm(arguments,1).forEach(function(t){Mj(t,function(n,i){a[i]=t[i]})}),a}var Dj=Math.min;function Bj(){var a=[];function t(d,f,p,m){s(d,f,function(g,y,v){var b="addEventListener"in g,N=b?g.removeEventListener.bind(g,y,p,m):g.removeListener.bind(g,p);b?g.addEventListener(y,p,m):g.addListener(p),a.push([g,y,v,p,N])})}function n(d,f,p){s(d,f,function(m,g,y){a=a.filter(function(v){return v[0]===m&&v[1]===g&&v[2]===y&&(!p||v[3]===p)?(v[4](),!1):!0})})}function i(d,f,p){var m,g=!0;return typeof CustomEvent=="function"?m=new CustomEvent(f,{bubbles:g,detail:p}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(f,g,!1,p)),d.dispatchEvent(m),m}function s(d,f,p){nv(d,function(m){m&&nv(f,function(g){g.split(" ").forEach(function(y){var v=y.split(".");p(m,v[0],v[1])})})})}function c(){a.forEach(function(d){d[4]()}),Ij(a)}return{bind:t,unbind:n,dispatch:i,destroy:c}}var iv="move",av="moved",Uj="updated",sv="drag",Wj="dragged",ov="scroll",lv="scrolled",Hj="destroy";function Vj(a){var t=a?a.event.bus:document.createDocumentFragment(),n=Bj();function i(c,d){n.bind(t,ky(c).join(" "),function(f){d.apply(d,_y(f.detail)?f.detail:[])})}function s(c){n.dispatch(t,c,pm(arguments,1))}return a&&a.event.on(Hj,n.destroy),Fj(n,{bus:t,on:i,off:Mu(n.unbind,t),emit:s})}function jy(a,t,n,i){var s=Date.now,c,d=0,f,p=!0,m=0;function g(){if(!p){if(d=a?Dj((s()-c)/a,1):1,n&&n(d),d>=1&&(t(),c=s(),i&&++m>=i))return v();rv(g)}}function y(C){!C&&N(),c=s()-(C?d*a:0),p=!1,rv(g)}function v(){p=!0}function b(){c=s(),d=0,n&&n(d)}function N(){f&&cancelAnimationFrame(f),d=0,f=0,p=!0}function w(C){a=C}function k(){return p}return{start:y,rewind:b,pause:v,cancel:N,set:w,isPaused:k}}function Yj(a,t){var n;function i(){n||(n=jy(t,function(){a(),n=null},null,1),n.start())}return i}var Gj="is-active",qj="slide",Xj="fade";function Ey(a,t,n){return Array.prototype.slice.call(a,t,n)}function mm(a){return a.bind(null,...Ey(arguments,1))}function Fu(a,t){return typeof t===a}function ph(a){return!Sy(a)&&Fu("object",a)}const Qj=Array.isArray;mm(Fu,"function");mm(Fu,"string");const Kj=mm(Fu,"undefined");function Sy(a){return a===null}function Jj(a){return Qj(a)?a:[a]}function lu(a,t){Jj(a).forEach(t)}function Zj(a,t,n){a&&lu(t,i=>{i&&a.classList[n?"add":"remove"](i)})}const $j=Object.keys;function Ay(a,t,n){if(a){let i=$j(a);i=i;for(let s=0;s<i.length;s++){const c=i[s];if(c!=="__proto__"&&t(a[c],c)===!1)break}}return a}function cv(a){return Ey(arguments,1).forEach(t=>{Ay(t,(n,i)=>{a[i]=t[i]})}),a}function eE(a,t){lu(a,n=>{lu(t,i=>{n&&n.removeAttribute(i)})})}function Cy(a,t,n){ph(t)?Ay(t,(i,s)=>{Cy(a,s,i)}):lu(a,i=>{Sy(n)||n===""?eE(i,t):i.setAttribute(t,String(n))})}const{min:dv,max:uv}=Math;function tE(a,t,n){const i=dv(t,n),s=uv(t,n);return dv(uv(i,a),s)}const rE={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},nE={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function iE(a,t,n){const{on:i,off:s,bind:c,unbind:d}=Vj(a),{translate:f,getPosition:p,toIndex:m,getLimit:g}=t.Move,{setIndex:y,getIndex:v}=t.Controller,{orient:b}=t.Direction,{toggle:N}=t.Elements,{Live:w}=t,{root:k}=a,C=Yj(t.Arrows.update,500);let A={},E,j,P,z,O,B;function W(){const{autoScroll:se}=n;A=cv({},rE,ph(se)?se:{})}function D(){a.is(Xj)||!E&&n.autoScroll!==!1&&(E=jy(0,V),F(),Z())}function Q(){E&&(E.cancel(),E=null,B=void 0,s([iv,sv,ov,av,lv]),d(k,"mouseenter mouseleave focusin focusout"),d(N,"click"))}function F(){A.pauseOnHover&&c(k,"mouseenter mouseleave",se=>{P=se.type==="mouseenter",$()}),A.pauseOnFocus&&c(k,"focusin focusout",se=>{z=se.type==="focusin",$()}),A.useToggleButton&&c(N,"click",()=>{j?ae():ce()}),i(Uj,J),i([iv,sv,ov],()=>{O=!0,ce(!1)}),i([av,Wj,lv],()=>{O=!1,$()})}function J(){const{autoScroll:se}=n;se!==!1?(A=cv({},A,ph(se)?se:{}),D()):Q(),E&&!Kj(B)&&f(B)}function Z(){A.autoStart&&(document.readyState==="complete"?ae():c(window,"load",ae))}function ae(){Y()&&(E.start(!0),w.disable(!0),z=P=j=!1,T())}function ce(se=!0){j||(j=se,T(),Y()||(E.pause(),w.disable(!1)))}function $(){j||(P||z||O?ce(!1):ae())}function V(){const se=p(),le=X(se);se!==le?(f(le),S(B=p())):(ce(!1),A.rewind&&a.go(A.speed>0?0:t.Controller.getEnd())),C()}function X(se){const le=A.speed||1;return se+=b(le),a.is(qj)&&(se=tE(se,g(!1),g(!0))),se}function S(se){const{length:le}=a,ge=(m(se)+le)%le;ge!==v()&&(y(ge),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function T(){if(N){const se=j?"startScroll":"pauseScroll";Zj(N,Gj,!j),Cy(N,"aria-label",n.i18n[se]||nE[se])}}function Y(){return!E||E.isPaused()}return{setup:W,mount:D,destroy:Q,play:ae,pause:ce,isPaused:Y}}const Ty=R.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:kt("rounded-xl border bg-card text-card-foreground shadow",a),...t}));Ty.displayName="Card";const aE=R.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:kt("flex flex-col space-y-1.5 p-6",a),...t}));aE.displayName="CardHeader";const sE=R.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:kt("font-semibold leading-none tracking-tight",a),...t}));sE.displayName="CardTitle";const oE=R.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:kt("text-sm text-muted-foreground",a),...t}));oE.displayName="CardDescription";const Py=R.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:kt("p-6 pt-0",a),...t}));Py.displayName="CardContent";const lE=R.forwardRef(({className:a,...t},n)=>o.jsx("div",{ref:n,className:kt("flex items-center p-6 pt-0",a),...t}));lE.displayName="CardFooter";const cE=({title:a,image:t,className:n,showOverlay:i=!1})=>{const s=d=>{const f=d.currentTarget,p=f.getBoundingClientRect(),m=((d.clientX-p.left)/p.width-.5)*20,g=((d.clientY-p.top)/p.height-.5)*20;f.style.setProperty("--pointer-shift-x",`${m}px`),f.style.setProperty("--pointer-shift-y",`${g}px`),f.style.setProperty("--tilt-x",`${(-g/2).toFixed(2)}deg`),f.style.setProperty("--tilt-y",`${(m/2).toFixed(2)}deg`)},c=d=>{d.currentTarget.style.setProperty("--pointer-shift-x","0px"),d.currentTarget.style.setProperty("--pointer-shift-y","0px"),d.currentTarget.style.setProperty("--tilt-x","0deg"),d.currentTarget.style.setProperty("--tilt-y","0deg")};return o.jsx(Ty,{onPointerMove:s,onPointerLeave:c,className:kt("portfolio-card group relative overflow-hidden rounded-[clamp(0.5rem,1.7vw,1.25rem)] border-0 bg-transparent shadow-none",n),children:o.jsxs(Py,{className:"size-full p-0",children:[o.jsxs("div",{className:"portfolio-media",children:[o.jsx("img",{className:"portfolio-image",alt:a||"Portfolio case",src:t,loading:"lazy"}),o.jsx("div",{className:"portfolio-ink-overlay","aria-hidden":"true"})]}),i&&a&&o.jsx("div",{className:"portfolio-card-overlay absolute inset-0 flex items-end rounded-[clamp(0.5rem,1.7vw,1.25rem)] px-[clamp(0.5rem,1.5vw,1.25rem)] pb-[clamp(1.5rem,3vw,2.75rem)] pt-[clamp(0.5rem,1.5vw,1.25rem)]",children:o.jsx(ln,{to:"/portfolio",className:"mr-20 flex w-full items-center justify-between gap-3 text-left font-medium text-white transition-colors hover:text-[#e1de00]",children:o.jsx("span",{className:"max-w-[calc(100%-3rem)] text-[clamp(0.55rem,1.5vw,1.125rem)] leading-tight",style:{textShadow:"0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 10px rgba(0, 0, 0, 0.75)"},children:a})})})]})})},dE=`
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
`,uE=()=>{const a=R.useId().replaceAll(":",""),t=R.useRef(null);return o.jsxs("section",{className:"portfolio-section relative z-10 w-full overflow-hidden py-16 md:py-20",children:[o.jsx("style",{children:dE}),o.jsx("svg",{className:"portfolio-section__clip-defs","aria-hidden":"true",focusable:"false",children:o.jsxs("defs",{children:[o.jsx("clipPath",{id:`${a}-desktop`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .22 1 0 L1 .86 Q.5 .70 0 .86Z"})}),o.jsx("clipPath",{id:`${a}-tablet`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .17 1 0 L1 .92 Q.5 .75 0 .92Z"})}),o.jsx("clipPath",{id:`${a}-mobile`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .10 1 0 L1 .96 Q.5 .86 0 .96Z"})})]})}),o.jsxs("header",{className:"mx-auto mb-1 flex max-w-[760px] flex-col items-center px-4 text-center sm:px-6 md:mb-1",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"Portfolio"})]}),o.jsxs("h2",{className:"mt-2 whitespace-nowrap font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]",style:{fontFamily:"'Lato', sans-serif"},children:[o.jsx("span",{className:"text-white",children:"Our"})," ",o.jsx("span",{className:"text-[#92d1bc]",children:"Latest Cases"})]})]}),o.jsx("div",{className:"portfolio-carousel","aria-label":"Latest cases",style:{"--portfolio-clip-path":`url(#${a}-desktop)`,"--portfolio-clip-path-tablet":`url(#${a}-tablet)`,"--portfolio-clip-path-mobile":`url(#${a}-mobile)`},children:o.jsx(Lj,{ref:t,extensions:{AutoScroll:iE},options:{type:"loop",autoScroll:{speed:3,pauseOnHover:!1,pauseOnFocus:!1},perPage:3,perMove:1,focus:"center",fixedWidth:"430px",gap:"-2.8rem",padding:{left:"calc((100% - 430px) / 2)",right:"calc((100% - 430px) / 2)"},drag:!0,snap:!1,keyboard:"focused",pagination:!1,arrows:!1,breakpoints:{1100:{perPage:2,fixedWidth:"380px",gap:"-2.75rem",padding:{left:"calc((100% - 380px) / 2)",right:"calc((100% - 380px) / 2)"}},700:{perPage:1,fixedWidth:"78vw",gap:"-1.5rem",padding:{left:"11vw",right:"11vw"}}}},children:W_.map((n,i)=>o.jsx(Oj,{children:o.jsx(cE,{title:n.title,image:n.image,showOverlay:!0,className:"h-[280px] w-full min-[701px]:h-[440px] min-[1101px]:h-[480px]"})},n.title??i))})}),o.jsx("div",{className:"mt-10 flex justify-center sm:mt-12 min-[701px]:mt-14 min-[1101px]:mt-0",children:o.jsxs(Rt,{to:"/portfolio",className:"px-6 py-3 text-sm font-semibold",children:["View All Cases",o.jsx(ku,{className:"h-4 w-4 -rotate-90"})]})})]})},fE="/boltfaredeal/assets/Halftone%20Globe%20Handshake%20Emblem-CN4BoFM5.png",xl=[{number:"01",title:"Understand & Plan",description:"We understand your requirements, budget and specifications to plan the right solution.",image:"https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Creative planning workspace with color samples",position:"one",side:"left"},{number:"02",title:"Design & Prepare",description:"Our team works on artwork, material selection and a process checklist to ensure every detail is ready for production.",image:"https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Colorful artwork on a desktop monitor",position:"two",side:"right"},{number:"03",title:"Print & Produce",description:"Using advanced printing technology, we produce with precision, maintaining high quality at every stage.",image:"https://images.pexels.com/photos/33952994/pexels-photo-33952994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Close view of vivid printing material",position:"three",side:"right"},{number:"04",title:"Finish & Deliver",description:"Final finishing, quality checks and secure packaging ensure timely delivery to your location.",image:"https://images.pexels.com/photos/11356987/pexels-photo-11356987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Packed boxes ready for delivery",position:"four",side:"left"}],hh=900,pE=`
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
@media (max-width: ${hh}px) {
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
`;function hE(){return o.jsxs("svg",{className:"hww-fallback",viewBox:"0 0 100 100",role:"img","aria-label":"Colorful dotted globe",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"hwwShade",cx:"34%",cy:"28%",r:"76%",children:[o.jsx("stop",{offset:"0",stopColor:"#273f43"}),o.jsx("stop",{offset:"0.65",stopColor:"#071419"}),o.jsx("stop",{offset:"1",stopColor:"#020607"})]}),o.jsxs("linearGradient",{id:"hwwWaveOne",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0",stopColor:"#e9ff31"}),o.jsx("stop",{offset:"1",stopColor:"#2ddcc8"})]}),o.jsxs("linearGradient",{id:"hwwWaveTwo",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0",stopColor:"#54edff"}),o.jsx("stop",{offset:"1",stopColor:"#1165ff"})]}),o.jsx("pattern",{id:"hwwDots",width:"4",height:"4",patternUnits:"userSpaceOnUse",children:o.jsx("circle",{cx:"1.2",cy:"1.2",r:".65",fill:"#96f6e8",opacity:".7"})}),o.jsx("clipPath",{id:"hwwClip",children:o.jsx("circle",{cx:"50",cy:"50",r:"40"})})]}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"url(#hwwShade)",stroke:"#5ee6e1",strokeOpacity:".3"}),o.jsxs("g",{clipPath:"url(#hwwClip)",children:[o.jsx("path",{d:"M-4 22 Q24 3 56 20 T106 17 L106 39 Q76 29 50 39 T-4 39Z",fill:"url(#hwwWaveOne)",opacity:".95"}),o.jsx("path",{d:"M-4 39 Q22 26 49 42 T106 38 L106 57 Q78 51 51 58 T-4 58Z",fill:"url(#hwwWaveTwo)",opacity:".9"}),o.jsx("path",{d:"M-4 58 Q23 45 49 62 T106 56 L106 79 Q75 68 48 79 T-4 79Z",fill:"#1db9ef",opacity:".82"}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"url(#hwwDots)",opacity:".55"})]}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#d7fff2",strokeOpacity:".35"})]})}const mE=({globeImage:a=fE})=>{const t=R.useRef(null),[n,i]=R.useState(0),[s,c]=R.useState(!1),[d,f]=R.useState(!1);R.useEffect(()=>{let m=0;const g=()=>{m=0;const v=t.current;if(!v||window.innerWidth<=hh)return;const b=Math.max(1,v.offsetHeight-window.innerHeight),N=-v.getBoundingClientRect().top,w=Math.min(.999,Math.max(0,N/b));i(Math.min(xl.length-1,Math.floor(w*xl.length+.6)))},y=()=>{m||(m=requestAnimationFrame(g))};return g(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y),()=>{m&&cancelAnimationFrame(m),window.removeEventListener("scroll",y),window.removeEventListener("resize",y)}},[]),R.useEffect(()=>{const m=t.current;if(!m||typeof IntersectionObserver>"u"){c(!0);return}const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(c(!0),g.disconnect())},{threshold:.15});return g.observe(m),()=>g.disconnect()},[]);const p=R.useCallback(m=>{const g=t.current;if(!g||window.innerWidth<=hh)return;const y=g.getBoundingClientRect().top+window.scrollY,v=g.offsetHeight-window.innerHeight,b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:y+m/xl.length*v,behavior:b?"auto":"smooth"})},[]);return o.jsxs("section",{ref:t,id:"how-we-work",className:`hww ${s?"is-visible":""}`,"aria-labelledby":"hww-title",children:[o.jsx("style",{children:pE}),o.jsxs("div",{className:"hww-stage",children:[o.jsxs("div",{className:"hww-heading",children:[o.jsxs("div",{className:"hww-title-row",children:[o.jsx("span",{className:"hww-eyebrow",children:"How we work"}),o.jsxs("h2",{className:"hww-title",id:"hww-title",children:[o.jsx("span",{className:"hww-word",children:o.jsx("span",{children:"Our"})})," ",o.jsx("span",{className:"hww-word",children:o.jsx("span",{children:"process"})})]})]}),o.jsx("p",{className:"hww-sub",children:"From first thought to final delivery, every detail has a purpose."})]}),o.jsx("div",{className:"hww-globe",children:o.jsxs("div",{className:"hww-globe-inner",children:[o.jsx("div",{className:"hww-glow","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit one","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit two","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit three","aria-hidden":"true"}),o.jsx("div",{className:"hww-tilt",style:{"--tilt":`${n*-7}deg`},children:d?o.jsx(hE,{}):o.jsx("img",{className:"hww-globe-art",src:a,alt:"Colorful halftone globe emblem",onError:()=>f(!0)})})]})}),o.jsx("div",{className:"hww-step-list",children:xl.map((m,g)=>o.jsxs("article",{className:`hww-step pos-${m.position} ${g===n?"is-active":""}`,style:{"--i":g},"aria-current":g===n?"step":void 0,children:[o.jsxs("div",{className:"hww-copy",children:[o.jsx("span",{className:"hww-num",children:m.number}),o.jsx("h3",{className:"hww-step-title",children:m.title}),o.jsx("div",{className:"hww-rule"}),o.jsx("p",{className:"hww-desc",children:m.description})]}),o.jsx("button",{type:"button",className:"hww-thumb",onClick:()=>p(g),"aria-label":`Go to step ${m.number}: ${m.title}`})]},m.number))}),o.jsxs("div",{className:"hww-status",children:[o.jsx(bN,{size:17,"aria-hidden":"true"}),o.jsx("span",{children:"Scroll to explore"}),o.jsx("span",{className:"hww-dots",children:xl.map((m,g)=>o.jsx("button",{type:"button",className:`hww-dot ${g===n?"is-current":""}`,onClick:()=>p(g),"aria-label":`Show step ${m.number}`},m.number))})]})]})]})},fv=()=>{const[a,t]=R.useState(()=>document.documentElement.getAttribute("data-theme")==="light"),[n,i]=R.useState(0);R.useEffect(()=>{const c=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};c();const d=new MutationObserver(c);return d.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>d.disconnect()},[]);const s=a?$t.heroBgLight:$t.heroBgLarge;return o.jsxs(o.Fragment,{children:[o.jsx(Q_,{heroImage:s}),o.jsx(ek,{isLightTheme:a}),o.jsx(rk,{activeServiceIndex:n,setActiveServiceIndex:i}),o.jsx(sk,{}),o.jsx(mE,{}),o.jsx(_k,{}),o.jsx(uE,{})]})};function Ai(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ry(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zl={duration:.5,overwrite:!1,delay:0},gm,ir,ft,Cn=1e8,$e=1/Cn,mh=Math.PI*2,gE=mh/4,xE=0,Ly=Math.sqrt,vE=Math.cos,yE=Math.sin,er=function(t){return typeof t=="string"},jt=function(t){return typeof t=="function"},Bi=function(t){return typeof t=="number"},xm=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},Wr=function(t){return t!==!1},vm=function(){return typeof window<"u"},Sd=function(t){return jt(t)||er(t)},Oy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mr=Array.isArray,bE=/random\([^)]+\)/g,wE=/,\s*/g,pv=/(?:-?\.?\d|\.)+/gi,Iy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zy=/[+-]=-?[.\d]+/,NE=/[^,'"\[\]\s]+/gi,_E=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,oi,gh,ym,fn={},cu={},My,Fy=function(t){return(cu=_o(t,fn))&&Gr},bm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},$l=function(t,n){return!n&&console.warn(t)},Dy=function(t,n){return t&&(fn[t]=n)&&cu&&(cu[t]=n)||fn},ec=function(){return 0},kE={suppressEvents:!0,isStart:!0,kill:!1},Gd={suppressEvents:!0,kill:!1},jE={suppressEvents:!0},wm={},ka=[],xh={},By,nn={},zp={},hv=30,qd=[],Nm="",_m=function(t){var n=t[0],i,s;if(mi(n)||jt(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=qd.length;s--&&!qd[s].targetTest(n););i=qd[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new lb(t[s],i)))||t.splice(s,1);return t},us=function(t){return t._gsap||_m(Tn(t))[0]._gsap},Uy=function(t,n,i){return(i=t[n])&&jt(i)?t[n]():xm(i)&&t.getAttribute&&t.getAttribute(n)||i},Hr=function(t,n){return(t=t.split(",")).forEach(n)||t},Pt=function(t){return Math.round(t*1e5)/1e5||0},gt=function(t){return Math.round(t*1e7)/1e7||0},fo=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},EE=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},du=function(){var t=ka.length,n=ka.slice(0),i,s;for(xh={},ka.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},km=function(t){return!!(t._initted||t._startAt||t.add)},Wy=function(t,n,i,s){ka.length&&!ir&&du(),t.render(n,i,!!(ir&&n<0&&km(t))),ka.length&&!ir&&du()},Hy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(NE).length<2?n:er(t)?t.trim():t},Vy=function(t){return t},pn=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},SE=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},_o=function(t,n){for(var i in n)t[i]=n[i];return t},mv=function a(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=mi(n[i])?a(t[i]||(t[i]={}),n[i]):n[i]);return t},uu=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},Pl=function(t){var n=t.parent||xt,i=t.keyframes?SE(mr(t.keyframes)):pn;if(Wr(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},AE=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},Yy=function(t,n,i,s,c){var d=t[s],f;if(c)for(f=n[c];d&&d[c]>f;)d=d._prev;return d?(n._next=d._next,d._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=d,n.parent=n._dp=t,n},Du=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var c=n._prev,d=n._next;c?c._next=d:t[i]===n&&(t[i]=d),d?d._prev=c:t[s]===n&&(t[s]=c),n._next=n._prev=n.parent=null},Ca=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},fs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},CE=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},vh=function(t,n,i,s){return t._startAt&&(ir?t._startAt.revert(Gd):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},TE=function a(t){return!t||t._ts&&a(t.parent)},gv=function(t){return t._repeat?ko(t._tTime,t=t.duration()+t._rDelay)*t:0},ko=function(t,n){var i=Math.floor(t=gt(t/n));return t&&i===t?i-1:i},fu=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Bu=function(t){return t._end=gt(t._start+(t._tDur/Math.abs(t._ts||t._rts||$e)||0))},Uu=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=gt(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Bu(t),i._dirty||fs(i,t)),t},Gy=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=fu(t.rawTime(),n),(!n._dur||vc(0,n.totalDuration(),i)-n._tTime>$e)&&n.render(i,!0)),fs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-$e}},ci=function(t,n,i,s){return n.parent&&Ca(n),n._start=gt((Bi(i)?i:i||t!==xt?kn(t,i,n):t._time)+n._delay),n._end=gt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Yy(t,n,"_first","_last",t._sort?"_start":0),yh(n)||(t._recent=n),s||Gy(t,n),t._ts<0&&Uu(t,t._tTime),t},qy=function(t,n){return(fn.ScrollTrigger||bm("scrollTrigger",n))&&fn.ScrollTrigger.create(n,t)},Xy=function(t,n,i,s,c){if(Em(t,n,c),!t._initted)return 1;if(!i&&t._pt&&!ir&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&By!==sn.frame)return ka.push(t),t._lazy=[c,s],1},PE=function a(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||a(n))},yh=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},RE=function(t,n,i,s){var c=t.ratio,d=n<0||!n&&(!t._start&&PE(t)&&!(!t._initted&&yh(t))||(t._ts<0||t._dp._ts<0)&&!yh(t))?0:1,f=t._rDelay,p=0,m,g,y;if(f&&t._repeat&&(p=vc(0,t._tDur,n),g=ko(p,f),t._yoyo&&g&1&&(d=1-d),g!==ko(t._tTime,f)&&(c=1-d,t.vars.repeatRefresh&&t._initted&&t.invalidate())),d!==c||ir||s||t._zTime===$e||!n&&t._zTime){if(!t._initted&&Xy(t,n,s,i,p))return;for(y=t._zTime,t._zTime=n||(i?$e:0),i||(i=n&&!y),t.ratio=d,t._from&&(d=1-d),t._time=0,t._tTime=p,m=t._pt;m;)m.r(d,m.d),m=m._next;n<0&&vh(t,n,i,!0),t._onUpdate&&!i&&cn(t,"onUpdate"),p&&t._repeat&&!i&&t.parent&&cn(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===d&&(d&&Ca(t,1),!i&&!ir&&(cn(t,d?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},LE=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},jo=function(t,n,i,s){var c=t._repeat,d=gt(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=d/t._dur),t._dur=d,t._tDur=c?c<0?1e10:gt(d*(c+1)+t._rDelay*c):d,f>0&&!s&&Uu(t,t._tTime=t._tDur*f),t.parent&&Bu(t),i||fs(t.parent,t),t},xv=function(t){return t instanceof Br?fs(t):jo(t,t._dur)},OE={_start:0,endTime:ec,totalDuration:ec},kn=function a(t,n,i){var s=t.labels,c=t._recent||OE,d=t.duration()>=Cn?c.endTime(!1):t._dur,f,p,m;return er(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),m=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(m?(f<0?c:i).totalDuration()/100:1)):f<0?(n in s||(s[n]=d),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),m&&i&&(p=p/100*(mr(i)?i[0]:i).totalDuration()),f>1?a(t,n.substr(0,f-1),i)+p:d+p)):n==null?d:+n},Rl=function(t,n,i){var s=Bi(n[1]),c=(s?2:1)+(t<2?0:1),d=n[c],f,p;if(s&&(d.duration=n[1]),d.parent=i,t){for(f=d,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Wr(p.vars.inherit)&&p.parent;d.immediateRender=Wr(f.immediateRender),t<2?d.runBackwards=1:d.startAt=n[c-1]}return new Ft(n[0],d,n[c+1])},Ma=function(t,n){return t||t===0?n(t):n},vc=function(t,n,i){return i<t?t:i>n?n:i},pr=function(t,n){return!er(t)||!(n=_E.exec(t))?"":n[1]},IE=function(t,n,i){return Ma(i,function(s){return vc(t,n,s)})},bh=[].slice,Qy=function(t,n){return t&&mi(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==oi},zE=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var c;return er(s)&&!n||Qy(s,1)?(c=i).push.apply(c,Tn(s)):i.push(s)})||i},Tn=function(t,n,i){return ft&&!n&&ft.selector?ft.selector(t):er(t)&&!i&&(gh||!Eo())?bh.call((n||ym).querySelectorAll(t),0):mr(t)?zE(t,i):Qy(t)?bh.call(t,0):t?[t]:[]},wh=function(t){return t=Tn(t)[0]||$l("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Tn(n,i.querySelectorAll?i:i===t?$l("Invalid scope")||ym.createElement("div"):t)}},Ky=function(t){return t.sort(function(){return .5-Math.random()})},Jy=function(t){if(jt(t))return t;var n=mi(t)?t:{each:t},i=ps(n.ease),s=n.from||0,c=parseFloat(n.base)||0,d={},f=s>0&&s<1,p=isNaN(s)||f,m=n.axis,g=s,y=s;return er(s)?g=y={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(g=s[0],y=s[1]),function(v,b,N){var w=(N||n).length,k=d[w],C,A,E,j,P,z,O,B,W;if(!k){if(W=n.grid==="auto"?0:(n.grid||[1,Cn])[1],!W){for(O=-Cn;O<(O=N[W++].getBoundingClientRect().left)&&W<w;);W<w&&W--}for(k=d[w]=[],C=p?Math.min(W,w)*g-.5:s%W,A=W===Cn?0:p?w*y/W-.5:s/W|0,O=0,B=Cn,z=0;z<w;z++)E=z%W-C,j=A-(z/W|0),k[z]=P=m?Math.abs(m==="y"?j:E):Ly(E*E+j*j),P>O&&(O=P),P<B&&(B=P);s==="random"&&Ky(k),k.max=O-B,k.min=B,k.v=w=(parseFloat(n.amount)||parseFloat(n.each)*(W>w?w-1:m?m==="y"?w/W:W:Math.max(W,w/W))||0)*(s==="edges"?-1:1),k.b=w<0?c-w:c,k.u=pr(n.amount||n.each)||0,i=i&&w<0?QE(i):i}return w=(k[v]-k.min)/k.max||0,gt(k.b+(i?i(w):w)*k.v)+k.u}},Nh=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=gt(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Bi(i)?0:pr(i))}},Zy=function(t,n){var i=mr(t),s,c;return!i&&mi(t)&&(s=i=t.radius||Cn,t.values?(t=Tn(t.values),(c=!Bi(t[0]))&&(s*=s)):t=Nh(t.increment)),Ma(n,i?jt(t)?function(d){return c=t(d),Math.abs(c-d)<=s?c:d}:function(d){for(var f=parseFloat(c?d.x:d),p=parseFloat(c?d.y:0),m=Cn,g=0,y=t.length,v,b;y--;)c?(v=t[y].x-f,b=t[y].y-p,v=v*v+b*b):v=Math.abs(t[y]-f),v<m&&(m=v,g=y);return g=!s||m<=s?t[g]:d,c||g===d||Bi(d)?g:g+pr(d)}:Nh(t))},$y=function(t,n,i,s){return Ma(mr(t)?!n:i===!0?!!(i=0):!s,function(){return mr(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},ME=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(c,d){return d(c)},s)}},FE=function(t,n){return function(i){return t(parseFloat(i))+(n||pr(i))}},DE=function(t,n,i){return tb(t,n,0,1,i)},eb=function(t,n,i){return Ma(i,function(s){return t[~~n(s)]})},BE=function a(t,n,i){var s=n-t;return mr(t)?eb(t,a(0,t.length),n):Ma(i,function(c){return(s+(c-t)%s)%s+t})},UE=function a(t,n,i){var s=n-t,c=s*2;return mr(t)?eb(t,a(0,t.length-1),n):Ma(i,function(d){return d=(c+(d-t)%c)%c||0,t+(d>s?c-d:d)})},tc=function(t){return t.replace(bE,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(wE);return $y(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},tb=function(t,n,i,s,c){var d=n-t,f=s-i;return Ma(c,function(p){return i+((p-t)/d*f||0)})},WE=function a(t,n,i,s){var c=isNaN(t+n)?0:function(b){return(1-b)*t+b*n};if(!c){var d=er(t),f={},p,m,g,y,v;if(i===!0&&(s=1)&&(i=null),d)t={p:t},n={p:n};else if(mr(t)&&!mr(n)){for(g=[],y=t.length,v=y-2,m=1;m<y;m++)g.push(a(t[m-1],t[m]));y--,c=function(N){N*=y;var w=Math.min(v,~~N);return g[w](N-w)},i=n}else s||(t=_o(mr(t)?[]:{},t));if(!g){for(p in n)jm.call(f,t,p,"get",n[p]);c=function(N){return Cm(N,f)||(d?t.p:t)}}}return Ma(i,c)},vv=function(t,n,i){var s=t.labels,c=Cn,d,f,p;for(d in s)f=s[d]-n,f<0==!!i&&f&&c>(f=Math.abs(f))&&(p=d,c=f);return p},cn=function(t,n,i){var s=t.vars,c=s[n],d=ft,f=t._ctx,p,m,g;if(c)return p=s[n+"Params"],m=s.callbackScope||t,i&&ka.length&&du(),f&&(ft=f),g=p?c.apply(m,p):c.call(m),ft=d,g},wl=function(t){return Ca(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ir),t.progress()<1&&cn(t,"onInterrupt"),t},so,rb=[],nb=function(t){if(t)if(t=!t.name&&t.default||t,vm()||t.headless){var n=t.name,i=jt(t),s=n&&!i&&t.init?function(){this._props=[]}:t,c={init:ec,render:Cm,add:jm,kill:aS,modifier:iS,rawVars:0},d={targetTest:0,get:0,getSetter:Am,aliases:{},register:0};if(Eo(),t!==s){if(nn[n])return;pn(s,pn(uu(t,c),d)),_o(s.prototype,_o(c,uu(t,d))),nn[s.prop=n]=s,t.targetTest&&(qd.push(s),wm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Dy(n,s),t.register&&t.register(Gr,s,Vr)}else rb.push(t)},Ze=255,Nl={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},Mp=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*Ze+.5|0},ib=function(t,n,i){var s=t?Bi(t)?[t>>16,t>>8&Ze,t&Ze]:0:Nl.black,c,d,f,p,m,g,y,v,b,N;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nl[t])s=Nl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(c=t.charAt(1),d=t.charAt(2),f=t.charAt(3),t="#"+c+c+d+d+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ze,s&Ze,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ze,t&Ze]}else if(t.substr(0,3)==="hsl"){if(s=N=t.match(pv),!n)p=+s[0]%360/360,m=+s[1]/100,g=+s[2]/100,d=g<=.5?g*(m+1):g+m-g*m,c=g*2-d,s.length>3&&(s[3]*=1),s[0]=Mp(p+1/3,c,d),s[1]=Mp(p,c,d),s[2]=Mp(p-1/3,c,d);else if(~t.indexOf("="))return s=t.match(Iy),i&&s.length<4&&(s[3]=1),s}else s=t.match(pv)||Nl.transparent;s=s.map(Number)}return n&&!N&&(c=s[0]/Ze,d=s[1]/Ze,f=s[2]/Ze,y=Math.max(c,d,f),v=Math.min(c,d,f),g=(y+v)/2,y===v?p=m=0:(b=y-v,m=g>.5?b/(2-y-v):b/(y+v),p=y===c?(d-f)/b+(d<f?6:0):y===d?(f-c)/b+2:(c-d)/b+4,p*=60),s[0]=~~(p+.5),s[1]=~~(m*100+.5),s[2]=~~(g*100+.5)),i&&s.length<4&&(s[3]=1),s},ab=function(t){var n=[],i=[],s=-1;return t.split(ja).forEach(function(c){var d=c.match(ao)||[];n.push.apply(n,d),i.push(s+=d.length+1)}),n.c=i,n},yv=function(t,n,i){var s="",c=(t+s).match(ja),d=n?"hsla(":"rgba(",f=0,p,m,g,y;if(!c)return t;if(c=c.map(function(v){return(v=ib(v,n,1))&&d+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(g=ab(t),p=i.c,p.join(s)!==g.c.join(s)))for(m=t.replace(ja,"1").split(ao),y=m.length-1;f<y;f++)s+=m[f]+(~p.indexOf(f)?c.shift()||d+"0,0,0,0)":(g.length?g:c.length?c:i).shift());if(!m)for(m=t.split(ja),y=m.length-1;f<y;f++)s+=m[f]+c[f];return s+m[y]},ja=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nl)a+="|"+t+"\\b";return new RegExp(a+")","gi")})(),HE=/hsl[a]?\(/,sb=function(t){var n=t.join(" "),i;if(ja.lastIndex=0,ja.test(n))return i=HE.test(n),t[1]=yv(t[1],i),t[0]=yv(t[0],i,ab(t[1])),!0},rc,sn=(function(){var a=Date.now,t=500,n=33,i=a(),s=i,c=1e3/240,d=c,f=[],p,m,g,y,v,b,N=function w(k){var C=a()-s,A=k===!0,E,j,P,z;if((C>t||C<0)&&(i+=C-n),s+=C,P=s-i,E=P-d,(E>0||A)&&(z=++y.frame,v=P-y.time*1e3,y.time=P=P/1e3,d+=E+(E>=c?4:c-E),j=1),A||(p=m(w)),j)for(b=0;b<f.length;b++)f[b](P,v,z,k)};return y={time:0,frame:0,tick:function(){N(!0)},deltaRatio:function(k){return v/(1e3/(k||60))},wake:function(){My&&(!gh&&vm()&&(oi=gh=window,ym=oi.document||{},fn.gsap=Gr,(oi.gsapVersions||(oi.gsapVersions=[])).push(Gr.version),Fy(cu||oi.GreenSockGlobals||!oi.gsap&&oi||{}),rb.forEach(nb)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&y.sleep(),m=g||function(k){return setTimeout(k,d-y.time*1e3+1|0)},rc=1,N(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(p),rc=0,m=ec},lagSmoothing:function(k,C){t=k||1/0,n=Math.min(C||33,t)},fps:function(k){c=1e3/(k||240),d=y.time*1e3+c},add:function(k,C,A){var E=C?function(j,P,z,O){k(j,P,z,O),y.remove(E)}:k;return y.remove(k),f[A?"unshift":"push"](E),Eo(),E},remove:function(k,C){~(C=f.indexOf(k))&&f.splice(C,1)&&b>=C&&b--},_listeners:f},y})(),Eo=function(){return!rc&&sn.wake()},Ve={},VE=/^[\d.\-M][\d.\-,\s]/,YE=/["']/g,GE=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],c=1,d=i.length,f,p,m;c<d;c++)p=i[c],f=c!==d-1?p.lastIndexOf(","):p.length,m=p.substr(0,f),n[s]=isNaN(m)?m.replace(YE,"").trim():+m,s=p.substr(f+1).trim();return n},qE=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},XE=function(t){var n=(t+"").split("("),i=Ve[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[GE(n[1])]:qE(t).split(",").map(Hy)):Ve._CE&&VE.test(t)?Ve._CE("",t):i},QE=function(t){return function(n){return 1-t(1-n)}},ps=function(t,n){return t&&(jt(t)?t:Ve[t]||XE(t))||n},ks=function(t,n,i,s){i===void 0&&(i=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var c={easeIn:n,easeOut:i,easeInOut:s},d;return Hr(t,function(f){Ve[f]=fn[f]=c,Ve[d=f.toLowerCase()]=i;for(var p in c)Ve[d+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ve[f+"."+p]=c[p]}),c},ob=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Fp=function a(t,n,i){var s=n>=1?n:1,c=(i||(t?.3:.45))/(n<1?n:1),d=c/mh*(Math.asin(1/s)||0),f=function(g){return g===1?1:s*Math.pow(2,-10*g)*yE((g-d)*c)+1},p=t==="out"?f:t==="in"?function(m){return 1-f(1-m)}:ob(f);return c=mh/c,p.config=function(m,g){return a(t,m,g)},p},Dp=function a(t,n){n===void 0&&(n=1.70158);var i=function(d){return d?--d*d*((n+1)*d+n)+1:0},s=t==="out"?i:t==="in"?function(c){return 1-i(1-c)}:ob(i);return s.config=function(c){return a(t,c)},s};Hr("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var n=t<5?t+1:t;ks(a+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;ks("Elastic",Fp("in"),Fp("out"),Fp());(function(a,t){var n=1/t,i=2*n,s=2.5*n,c=function(f){return f<n?a*f*f:f<i?a*Math.pow(f-1.5/t,2)+.75:f<s?a*(f-=2.25/t)*f+.9375:a*Math.pow(f-2.625/t,2)+.984375};ks("Bounce",function(d){return 1-c(1-d)},c)})(7.5625,2.75);ks("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});ks("Circ",function(a){return-(Ly(1-a*a)-1)});ks("Sine",function(a){return a===1?1:-vE(a*gE)+1});ks("Back",Dp("in"),Dp("out"),Dp());Ve.SteppedEase=Ve.steps=fn.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),c=n?1:0,d=1-$e;return function(f){return((s*vc(0,d,f)|0)+c)*i}}};Zl.ease=Ve["quad.out"];Hr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Nm+=a+","+a+"Params,"});var lb=function(t,n){this.id=xE++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Uy,this.set=n?n.getSetter:Am},nc=(function(){function a(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,jo(this,+n.duration,1,1),this.data=n.data,ft&&(this._ctx=ft,ft.data.push(this)),rc||sn.wake()}var t=a.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,jo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(Eo(),!arguments.length)return this._tTime;var c=this._dp;if(c&&c.smoothChildTiming&&this._ts){for(Uu(this,i),!c._dp||c.parent||Gy(c,this);c&&c.parent;)c.parent._time!==c._start+(c._ts>=0?c._tTime/c._ts:(c.totalDuration()-c._tTime)/-c._ts)&&c.totalTime(c._tTime,!0),c=c.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Wy(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gv(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var c=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*c,s):this._repeat?ko(this._tTime,c)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===i)return this;var c=this.parent&&this._ts?fu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-$e?0:this._rts,this.totalTime(vc(-Math.abs(this._delay),this.totalDuration(),c),s!==!1),Bu(this),CE(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=gt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ci(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Wr(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fu(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=jE);var s=ir;return ir=i,km(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ir=s,this},t.globalTime=function(i){for(var s=this,c=arguments.length?i:s.rawTime();s;)c=s._start+c/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):c},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,xv(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(kn(this,i),Wr(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Wr(s)),this._dur||(this._zTime=-$e),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-$e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,c;return!!(!i||this._ts&&this._initted&&i.isActive()&&(c=i.rawTime(!0))>=s&&c<this.endTime(!0)-$e)},t.eventCallback=function(i,s,c){var d=this.vars;return arguments.length>1?(s?(d[i]=s,c&&(d[i+"Params"]=c),i==="onUpdate"&&(this._onUpdate=s)):delete d[i],this):d[i]},t.then=function(i){var s=this,c=s._prom;return new Promise(function(d){var f=jt(i)?i:Vy,p=function(){var g=s.then;s.then=null,c&&c(),jt(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=g),d(f),s.then=g};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){wl(this)},a})();pn(nc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Br=(function(a){Ry(t,a);function t(i,s){var c;return i===void 0&&(i={}),c=a.call(this,i)||this,c.labels={},c.smoothChildTiming=!!i.smoothChildTiming,c.autoRemoveChildren=!!i.autoRemoveChildren,c._sort=Wr(i.sortChildren),xt&&ci(i.parent||xt,Ai(c),s),i.reversed&&c.reverse(),i.paused&&c.paused(!0),i.scrollTrigger&&qy(Ai(c),i.scrollTrigger),c}var n=t.prototype;return n.to=function(s,c,d){return Rl(0,arguments,this),this},n.from=function(s,c,d){return Rl(1,arguments,this),this},n.fromTo=function(s,c,d,f){return Rl(2,arguments,this),this},n.set=function(s,c,d){return c.duration=0,c.parent=this,Pl(c).repeatDelay||(c.repeat=0),c.immediateRender=!!c.immediateRender,new Ft(s,c,kn(this,d),1),this},n.call=function(s,c,d){return ci(this,Ft.delayedCall(0,s,c),d)},n.staggerTo=function(s,c,d,f,p,m,g){return d.duration=c,d.stagger=d.stagger||f,d.onComplete=m,d.onCompleteParams=g,d.parent=this,new Ft(s,d,kn(this,p)),this},n.staggerFrom=function(s,c,d,f,p,m,g){return d.runBackwards=1,Pl(d).immediateRender=Wr(d.immediateRender),this.staggerTo(s,c,d,f,p,m,g)},n.staggerFromTo=function(s,c,d,f,p,m,g,y){return f.startAt=d,Pl(f).immediateRender=Wr(f.immediateRender),this.staggerTo(s,c,f,p,m,g,y)},n.render=function(s,c,d){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,m=this._dur,g=s<=0?0:gt(s),y=this._zTime<0!=s<0&&(this._initted||!m),v,b,N,w,k,C,A,E,j,P,z,O;if(this!==xt&&g>p&&s>=0&&(g=p),g!==this._tTime||d||y){if(f!==this._time&&m&&(g+=this._time-f,s+=this._time-f),v=g,j=this._start,E=this._ts,C=!E,y&&(m||(f=this._zTime),(s||!c)&&(this._zTime=s)),this._repeat){if(z=this._yoyo,k=m+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(k*100+s,c,d);if(v=gt(g%k),g===p?(w=this._repeat,v=m):(P=gt(g/k),w=~~P,w&&w===P&&(v=m,w--),v>m&&(v=m)),P=ko(this._tTime,k),!f&&this._tTime&&P!==w&&this._tTime-P*k-this._dur<=0&&(P=w),z&&w&1&&(v=m-v,O=1),w!==P&&!this._lock){var B=z&&P&1,W=B===(z&&w&1);if(w<P&&(B=!B),f=B?0:g%m?m:g,this._lock=1,this.render(f||(O?0:gt(w*k)),c,!m)._lock=0,this._tTime=g,!c&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,P=w),f&&f!==this._time||C!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,p=this._tDur,W&&(this._lock=2,f=B?m:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!C)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=LE(this,gt(f),gt(v)),A&&(g-=v-(v=A._start))),this._tTime=g,this._time=v,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&g&&m&&!c&&!P&&(cn(this,"onStart"),this._tTime!==g))return this;if(v>=f&&s>=0)for(b=this._first;b;){if(N=b._next,(b._act||v>=b._start)&&b._ts&&A!==b){if(b.parent!==this)return this.render(s,c,d);if(b.render(b._ts>0?(v-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(v-b._start)*b._ts,c,d),v!==this._time||!this._ts&&!C){A=0,N&&(g+=this._zTime=-$e);break}}b=N}else{b=this._last;for(var D=s<0?s:v;b;){if(N=b._prev,(b._act||D<=b._end)&&b._ts&&A!==b){if(b.parent!==this)return this.render(s,c,d);if(b.render(b._ts>0?(D-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(D-b._start)*b._ts,c,d||ir&&km(b)),v!==this._time||!this._ts&&!C){A=0,N&&(g+=this._zTime=D?-$e:$e);break}}b=N}}if(A&&!c&&(this.pause(),A.render(v>=f?0:-$e)._zTime=v>=f?1:-1,this._ts))return this._start=j,Bu(this),this.render(s,c,d);this._onUpdate&&!c&&cn(this,"onUpdate",!0),(g===p&&this._tTime>=this.totalDuration()||!g&&f)&&(j===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((s||!m)&&(g===p&&this._ts>0||!g&&this._ts<0)&&Ca(this,1),!c&&!(s<0&&!f)&&(g||f||!p)&&(cn(this,g===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,c){var d=this;if(Bi(c)||(c=kn(this,c,s)),!(s instanceof nc)){if(mr(s))return s.forEach(function(f){return d.add(f,c)}),this;if(er(s))return this.addLabel(s,c);if(jt(s))s=Ft.delayedCall(0,s);else return this}return this!==s?ci(this,s,c):this},n.getChildren=function(s,c,d,f){s===void 0&&(s=!0),c===void 0&&(c=!0),d===void 0&&(d=!0),f===void 0&&(f=-Cn);for(var p=[],m=this._first;m;)m._start>=f&&(m instanceof Ft?c&&p.push(m):(d&&p.push(m),s&&p.push.apply(p,m.getChildren(!0,c,d)))),m=m._next;return p},n.getById=function(s){for(var c=this.getChildren(1,1,1),d=c.length;d--;)if(c[d].vars.id===s)return c[d]},n.remove=function(s){return er(s)?this.removeLabel(s):jt(s)?this.killTweensOf(s):(s.parent===this&&Du(this,s),s===this._recent&&(this._recent=this._last),fs(this))},n.totalTime=function(s,c){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gt(sn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,c),this._forcing=0,this):this._tTime},n.addLabel=function(s,c){return this.labels[s]=kn(this,c),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,c,d){var f=Ft.delayedCall(0,c||ec,d);return f.data="isPause",this._hasPause=1,ci(this,f,kn(this,s))},n.removePause=function(s){var c=this._first;for(s=kn(this,s);c;)c._start===s&&c.data==="isPause"&&Ca(c),c=c._next},n.killTweensOf=function(s,c,d){for(var f=this.getTweensOf(s,d),p=f.length;p--;)va!==f[p]&&f[p].kill(s,c);return this},n.getTweensOf=function(s,c){for(var d=[],f=Tn(s),p=this._first,m=Bi(c),g;p;)p instanceof Ft?EE(p._targets,f)&&(m?(!va||p._initted&&p._ts)&&p.globalTime(0)<=c&&p.globalTime(p.totalDuration())>c:!c||p.isActive())&&d.push(p):(g=p.getTweensOf(f,c)).length&&d.push.apply(d,g),p=p._next;return d},n.tweenTo=function(s,c){c=c||{};var d=this,f=kn(d,s),p=c,m=p.startAt,g=p.onStart,y=p.onStartParams,v=p.immediateRender,b,N=Ft.to(d,pn({ease:c.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:c.duration||Math.abs((f-(m&&"time"in m?m.time:d._time))/d.timeScale())||$e,onStart:function(){if(d.pause(),!b){var k=c.duration||Math.abs((f-(m&&"time"in m?m.time:d._time))/d.timeScale());N._dur!==k&&jo(N,k,0,1).render(N._time,!0,!0),b=1}g&&g.apply(N,y||[])}},c));return v?N.render(0):N},n.tweenFromTo=function(s,c,d){return this.tweenTo(c,pn({startAt:{time:kn(this,s)}},d))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),vv(this,kn(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),vv(this,kn(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+$e)},n.shiftChildren=function(s,c,d){d===void 0&&(d=0);var f=this._first,p=this.labels,m;for(s=gt(s);f;)f._start>=d&&(f._start+=s,f._end+=s),f=f._next;if(c)for(m in p)p[m]>=d&&(p[m]+=s);return fs(this)},n.invalidate=function(s){var c=this._first;for(this._lock=0;c;)c.invalidate(s),c=c._next;return a.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var c=this._first,d;c;)d=c._next,this.remove(c),c=d;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),fs(this)},n.totalDuration=function(s){var c=0,d=this,f=d._last,p=Cn,m,g,y;if(arguments.length)return d.timeScale((d._repeat<0?d.duration():d.totalDuration())/(d.reversed()?-s:s));if(d._dirty){for(y=d.parent;f;)m=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>p&&d._sort&&f._ts&&!d._lock?(d._lock=1,ci(d,f,g-f._delay,1)._lock=0):p=g,g<0&&f._ts&&(c-=g,(!y&&!d._dp||y&&y.smoothChildTiming)&&(d._start+=gt(g/d._ts),d._time-=g,d._tTime-=g),d.shiftChildren(-g,!1,-1/0),p=0),f._end>c&&f._ts&&(c=f._end),f=m;jo(d,d===xt&&d._time>c?d._time:c,1,1),d._dirty=0}return d._tDur},t.updateRoot=function(s){if(xt._ts&&(Wy(xt,fu(s,xt)),By=sn.frame),sn.frame>=hv){hv+=un.autoSleep||120;var c=xt._first;if((!c||!c._ts)&&un.autoSleep&&sn._listeners.length<2){for(;c&&!c._ts;)c=c._next;c||sn.sleep()}}},t})(nc);pn(Br.prototype,{_lock:0,_hasPause:0,_forcing:0});var KE=function(t,n,i,s,c,d,f){var p=new Vr(this._pt,t,n,0,1,hb,null,c),m=0,g=0,y,v,b,N,w,k,C,A;for(p.b=i,p.e=s,i+="",s+="",(C=~s.indexOf("random("))&&(s=tc(s)),d&&(A=[i,s],d(A,t,n),i=A[0],s=A[1]),v=i.match(Ip)||[];y=Ip.exec(s);)N=y[0],w=s.substring(m,y.index),b?b=(b+1)%5:w.substr(-5)==="rgba("&&(b=1),N!==v[g++]&&(k=parseFloat(v[g-1])||0,p._pt={_next:p._pt,p:w||g===1?w:",",s:k,c:N.charAt(1)==="="?fo(k,N)-k:parseFloat(N)-k,m:b&&b<4?Math.round:0},m=Ip.lastIndex);return p.c=m<s.length?s.substring(m,s.length):"",p.fp=f,(zy.test(s)||C)&&(p.e=0),this._pt=p,p},jm=function(t,n,i,s,c,d,f,p,m,g){jt(s)&&(s=s(c||0,t,d));var y=t[n],v=i!=="get"?i:jt(y)?m?t[n.indexOf("set")||!jt(t["get"+n.substr(3)])?n:"get"+n.substr(3)](m):t[n]():y,b=jt(y)?m?tS:fb:Sm,N;if(er(s)&&(~s.indexOf("random(")&&(s=tc(s)),s.charAt(1)==="="&&(N=fo(v,s)+(pr(v)||0),(N||N===0)&&(s=N))),!g||v!==s||_h)return!isNaN(v*s)&&s!==""?(N=new Vr(this._pt,t,n,+v||0,s-(v||0),typeof y=="boolean"?nS:pb,0,b),m&&(N.fp=m),f&&N.modifier(f,this,t),this._pt=N):(!y&&!(n in t)&&bm(n,s),KE.call(this,t,n,v,s,b,p||un.stringFilter,m))},JE=function(t,n,i,s,c){if(jt(t)&&(t=Ll(t,c,n,i,s)),!mi(t)||t.style&&t.nodeType||mr(t)||Oy(t))return er(t)?Ll(t,c,n,i,s):t;var d={},f;for(f in t)d[f]=Ll(t[f],c,n,i,s);return d},cb=function(t,n,i,s,c,d){var f,p,m,g;if(nn[t]&&(f=new nn[t]).init(c,f.rawVars?n[t]:JE(n[t],s,c,d,i),i,s,d)!==!1&&(i._pt=p=new Vr(i._pt,c,t,0,1,f.render,f,0,f.priority),i!==so))for(m=i._ptLookup[i._targets.indexOf(c)],g=f._props.length;g--;)m[f._props[g]]=p;return f},va,_h,Em=function a(t,n,i){var s=t.vars,c=s.ease,d=s.startAt,f=s.immediateRender,p=s.lazy,m=s.onUpdate,g=s.runBackwards,y=s.yoyoEase,v=s.keyframes,b=s.autoRevert,N=t._dur,w=t._startAt,k=t._targets,C=t.parent,A=C&&C.data==="nested"?C.vars.targets:k,E=t._overwrite==="auto"&&!gm,j=t.timeline,P=s.easeReverse||y,z,O,B,W,D,Q,F,J,Z,ae,ce,$,V;if(j&&(!v||!c)&&(c="none"),t._ease=ps(c,Zl.ease),t._rEase=P&&(ps(P)||t._ease),t._from=!j&&!!s.runBackwards,t._from&&(t.ratio=1),!j||v&&!s.stagger){if(J=k[0]?us(k[0]).harness:0,$=J&&s[J.prop],z=uu(s,wm),w&&(w._zTime<0&&w.progress(1),n<0&&g&&f&&!b?w.render(-1,!0):w.revert(g&&N?Gd:kE),w._lazy=0),d){if(Ca(t._startAt=Ft.set(k,pn({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:!w&&Wr(p),startAt:null,delay:0,onUpdate:m&&function(){return cn(t,"onUpdate")},stagger:0},d))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ir||!f&&!b)&&t._startAt.revert(Gd),f&&N&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(g&&N&&!w){if(n&&(f=!1),B=pn({overwrite:!1,data:"isFromStart",lazy:f&&!w&&Wr(p),immediateRender:f,stagger:0,parent:C},z),$&&(B[J.prop]=$),Ca(t._startAt=Ft.set(k,B)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ir?t._startAt.revert(Gd):t._startAt.render(-1,!0)),t._zTime=n,!f)a(t._startAt,$e,$e);else if(!n)return}for(t._pt=t._ptCache=0,p=N&&Wr(p)||p&&!N,O=0;O<k.length;O++){if(D=k[O],F=D._gsap||_m(k)[O]._gsap,t._ptLookup[O]=ae={},xh[F.id]&&ka.length&&du(),ce=A===k?O:A.indexOf(D),J&&(Z=new J).init(D,$||z,t,ce,A)!==!1&&(t._pt=W=new Vr(t._pt,D,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(X){ae[X]=W}),Z.priority&&(Q=1)),!J||$)for(B in z)nn[B]&&(Z=cb(B,z,t,ce,D,A))?Z.priority&&(Q=1):ae[B]=W=jm.call(t,D,B,"get",z[B],ce,A,0,s.stringFilter);t._op&&t._op[O]&&t.kill(D,t._op[O]),E&&t._pt&&(va=t,xt.killTweensOf(D,ae,t.globalTime(n)),V=!t.parent,va=0),t._pt&&p&&(xh[F.id]=1)}Q&&mb(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!V,v&&n<=0&&j.render(Cn,!0,!0)},ZE=function(t,n,i,s,c,d,f,p){var m=(t._pt&&t._ptCache||(t._ptCache={}))[n],g,y,v,b;if(!m)for(m=t._ptCache[n]=[],v=t._ptLookup,b=t._targets.length;b--;){if(g=v[b][n],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==n&&g.fp!==n;)g=g._next;if(!g)return _h=1,t.vars[n]="+=0",Em(t,f),_h=0,p?$l(n+" not eligible for reset. Try splitting into individual properties"):1;m.push(g)}for(b=m.length;b--;)y=m[b],g=y._pt||y,g.s=(s||s===0)&&!c?s:g.s+(s||0)+d*g.c,g.c=i-g.s,y.e&&(y.e=Pt(i)+pr(y.e)),y.b&&(y.b=g.s+pr(y.b))},$E=function(t,n){var i=t[0]?us(t[0]).harness:0,s=i&&i.aliases,c,d,f,p;if(!s)return n;c=_o({},n);for(d in s)if(d in c)for(p=s[d].split(","),f=p.length;f--;)c[p[f]]=c[d];return c},eS=function(t,n,i,s){var c=n.ease||s||"power1.inOut",d,f;if(mr(n))f=i[t]||(i[t]=[]),n.forEach(function(p,m){return f.push({t:m/(n.length-1)*100,v:p,e:c})});else for(d in n)f=i[d]||(i[d]=[]),d==="ease"||f.push({t:parseFloat(t),v:n[d],e:c})},Ll=function(t,n,i,s,c){return jt(t)?t.call(n,i,s,c):er(t)&&~t.indexOf("random(")?tc(t):t},db=Nm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ub={};Hr(db+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return ub[a]=1});var Ft=(function(a){Ry(t,a);function t(i,s,c,d){var f;typeof s=="number"&&(c.duration=s,s=c,c=null),f=a.call(this,d?s:Pl(s))||this;var p=f.vars,m=p.duration,g=p.delay,y=p.immediateRender,v=p.stagger,b=p.overwrite,N=p.keyframes,w=p.defaults,k=p.scrollTrigger,C=s.parent||xt,A=(mr(i)||Oy(i)?Bi(i[0]):"length"in s)?[i]:Tn(i),E,j,P,z,O,B,W,D;if(f._targets=A.length?_m(A):$l("GSAP target "+i+" not found. https://gsap.com",!un.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=b,N||v||Sd(m)||Sd(g)){s=f.vars;var Q=s.easeReverse||s.yoyoEase;if(E=f.timeline=new Br({data:"nested",defaults:w||{},targets:C&&C.data==="nested"?C.vars.targets:A}),E.kill(),E.parent=E._dp=Ai(f),E._start=0,v||Sd(m)||Sd(g)){if(z=A.length,W=v&&Jy(v),mi(v))for(O in v)~db.indexOf(O)&&(D||(D={}),D[O]=v[O]);for(j=0;j<z;j++)P=uu(s,ub),P.stagger=0,Q&&(P.easeReverse=Q),D&&_o(P,D),B=A[j],P.duration=+Ll(m,Ai(f),j,B,A),P.delay=(+Ll(g,Ai(f),j,B,A)||0)-f._delay,!v&&z===1&&P.delay&&(f._delay=g=P.delay,f._start+=g,P.delay=0),E.to(B,P,W?W(j,B,A):0),E._ease=Ve.none;E.duration()?m=g=0:f.timeline=0}else if(N){Pl(pn(E.vars.defaults,{ease:"none"})),E._ease=ps(N.ease||s.ease||"none");var F=0,J,Z,ae;if(mr(N))N.forEach(function(ce){return E.to(A,ce,">")}),E.duration();else{P={};for(O in N)O==="ease"||O==="easeEach"||eS(O,N[O],P,N.easeEach);for(O in P)for(J=P[O].sort(function(ce,$){return ce.t-$.t}),F=0,j=0;j<J.length;j++)Z=J[j],ae={ease:Z.e,duration:(Z.t-(j?J[j-1].t:0))/100*m},ae[O]=Z.v,E.to(A,ae,F),F+=ae.duration;E.duration()<m&&E.to({},{duration:m-E.duration()})}}m||f.duration(m=E.duration())}else f.timeline=0;return b===!0&&!gm&&(va=Ai(f),xt.killTweensOf(A),va=0),ci(C,Ai(f),c),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(y||!m&&!N&&f._start===gt(C._time)&&Wr(y)&&TE(Ai(f))&&C.data!=="nested")&&(f._tTime=-$e,f.render(Math.max(0,-g)||0)),k&&qy(Ai(f),k),f}var n=t.prototype;return n.render=function(s,c,d){var f=this._time,p=this._tDur,m=this._dur,g=s<0,y=s>p-$e&&!g?p:s<$e?0:s,v,b,N,w,k,C,A,E;if(!m)RE(this,s,c,d);else if(y!==this._tTime||!s||d||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(v=y,E=this.timeline,this._repeat){if(w=m+this._rDelay,this._repeat<-1&&g)return this.totalTime(w*100+s,c,d);if(v=gt(y%w),y===p?(N=this._repeat,v=m):(k=gt(y/w),N=~~k,N&&N===k?(v=m,N--):v>m&&(v=m)),C=this._yoyo&&N&1,C&&(v=m-v),k=ko(this._tTime,w),v===f&&!d&&this._initted&&N===k)return this._tTime=y,this;N!==k&&this.vars.repeatRefresh&&!C&&!this._lock&&v!==w&&this._initted&&(this._lock=d=1,this.render(gt(w*N),!0).invalidate()._lock=0)}if(!this._initted){if(Xy(this,g?s:v,d,c,y))return this._tTime=0,this;if(f!==this._time&&!(d&&this.vars.repeatRefresh&&N!==k))return this;if(m!==this._dur)return this.render(s,c,d)}if(this._rEase){var j=v<f;if(j!==this._inv){var P=j?f:m-f;this._inv=j,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=P?(j?-1:1)/P:0,this._invScale=j?-this.ratio:1-this.ratio,this._invEase=j?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((v-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(v/m);if(this._from&&(this.ratio=A=1-A),this._tTime=y,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&y&&!c&&!k&&(cn(this,"onStart"),this._tTime!==y))return this;for(b=this._pt;b;)b.r(A,b.d),b=b._next;E&&E.render(s<0?s:E._dur*E._ease(v/this._dur),c,d)||this._startAt&&(this._zTime=s),this._onUpdate&&!c&&(g&&vh(this,s,c,d),cn(this,"onUpdate")),this._repeat&&N!==k&&this.vars.onRepeat&&!c&&this.parent&&cn(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&vh(this,s,!0,!0),(s||!m)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Ca(this,1),!c&&!(g&&!f)&&(y||f||C)&&(cn(this,y===p?"onComplete":"onReverseComplete",!0),this._prom&&!(y<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},n.resetTo=function(s,c,d,f,p){rc||sn.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||Em(this,m),g=this._ease(m/this._dur),ZE(this,s,c,d,f,g,m,p)?this.resetTo(s,c,d,f,1):(Uu(this,0),this.parent||Yy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,c){if(c===void 0&&(c="all"),!s&&(!c||c==="all"))return this._lazy=this._pt=0,this.parent?wl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ir),this;if(this.timeline){var d=this.timeline.totalDuration();return this.timeline.killTweensOf(s,c,va&&va.vars.overwrite!==!0)._first||wl(this),this.parent&&d!==this.timeline.totalDuration()&&jo(this,this._dur*this.timeline._tDur/d,0,1),this}var f=this._targets,p=s?Tn(s):f,m=this._ptLookup,g=this._pt,y,v,b,N,w,k,C;if((!c||c==="all")&&AE(f,p))return c==="all"&&(this._pt=0),wl(this);for(y=this._op=this._op||[],c!=="all"&&(er(c)&&(w={},Hr(c,function(A){return w[A]=1}),c=w),c=$E(f,c)),C=f.length;C--;)if(~p.indexOf(f[C])){v=m[C],c==="all"?(y[C]=c,N=v,b={}):(b=y[C]=y[C]||{},N=c);for(w in N)k=v&&v[w],k&&((!("kill"in k.d)||k.d.kill(w)===!0)&&Du(this,k,"_pt"),delete v[w]),b!=="all"&&(b[w]=1)}return this._initted&&!this._pt&&g&&wl(this),this},t.to=function(s,c){return new t(s,c,arguments[2])},t.from=function(s,c){return Rl(1,arguments)},t.delayedCall=function(s,c,d,f){return new t(c,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:c,onReverseComplete:c,onCompleteParams:d,onReverseCompleteParams:d,callbackScope:f})},t.fromTo=function(s,c,d){return Rl(2,arguments)},t.set=function(s,c){return c.duration=0,c.repeatDelay||(c.repeat=0),new t(s,c)},t.killTweensOf=function(s,c,d){return xt.killTweensOf(s,c,d)},t})(nc);pn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hr("staggerTo,staggerFrom,staggerFromTo",function(a){Ft[a]=function(){var t=new Br,n=bh.call(arguments,0);return n.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,n)}});var Sm=function(t,n,i){return t[n]=i},fb=function(t,n,i){return t[n](i)},tS=function(t,n,i,s){return t[n](s.fp,i)},rS=function(t,n,i){return t.setAttribute(n,i)},Am=function(t,n){return jt(t[n])?fb:xm(t[n])&&t.setAttribute?rS:Sm},pb=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},nS=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},hb=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},Cm=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},iS=function(t,n,i,s){for(var c=this._pt,d;c;)d=c._next,c.p===s&&c.modifier(t,n,i),c=d},aS=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Du(this,n,"_pt"):n.dep||(i=1),n=s;return!i},sS=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},mb=function(t){for(var n=t._pt,i,s,c,d;n;){for(i=n._next,s=c;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:d)?n._prev._next=n:c=n,(n._next=s)?s._prev=n:d=n,n=i}t._pt=c},Vr=(function(){function a(n,i,s,c,d,f,p,m,g){this.t=i,this.s=c,this.c=d,this.p=s,this.r=f||pb,this.d=p||this,this.set=m||Sm,this.pr=g||0,this._next=n,n&&(n._prev=this)}var t=a.prototype;return t.modifier=function(i,s,c){this.mSet=this.mSet||this.set,this.set=sS,this.m=i,this.mt=c,this.tween=s},a})();Hr(Nm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return wm[a]=1});fn.TweenMax=fn.TweenLite=Ft;fn.TimelineLite=fn.TimelineMax=Br;xt=new Br({sortChildren:!1,defaults:Zl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=sb;var hs=[],Xd={},oS=[],bv=0,lS=0,Bp=function(t){return(Xd[t]||oS).map(function(n){return n()})},kh=function(){var t=Date.now(),n=[];t-bv>2&&(Bp("matchMediaInit"),hs.forEach(function(i){var s=i.queries,c=i.conditions,d,f,p,m;for(f in s)d=oi.matchMedia(s[f]).matches,d&&(p=1),d!==c[f]&&(c[f]=d,m=1);m&&(i.revert(),p&&n.push(i))}),Bp("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),bv=t,Bp("matchMedia"))},gb=(function(){function a(n,i){this.selector=i&&wh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=lS++,n&&this.add(n)}var t=a.prototype;return t.add=function(i,s,c){jt(i)&&(c=s,s=i,i=jt);var d=this,f=function(){var m=ft,g=d.selector,y;return m&&m!==d&&m.data.push(d),c&&(d.selector=wh(c)),ft=d,y=s.apply(d,arguments),jt(y)&&d._r.push(y),ft=m,d.selector=g,d.isReverted=!1,y};return d.last=f,i===jt?f(d,function(p){return d.add(null,p)}):i?d[i]=f:f},t.ignore=function(i){var s=ft;ft=null,i(this),ft=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof Ft&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var c=this;if(i?(function(){for(var f=c.getTweens(),p=c.data.length,m;p--;)m=c.data[p],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(i)}),p=c.data.length;p--;)m=c.data[p],m instanceof Br?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof Ft)&&m.revert&&m.revert(i);c._r.forEach(function(g){return g(i,c)}),c.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var d=hs.length;d--;)hs[d].id===this.id&&hs.splice(d,1)},t.revert=function(i){this.kill(i||{})},a})(),cS=(function(){function a(n){this.contexts=[],this.scope=n,ft&&ft.data.push(this)}var t=a.prototype;return t.add=function(i,s,c){mi(i)||(i={matches:i});var d=new gb(0,c||this.scope),f=d.conditions={},p,m,g;ft&&!d.selector&&(d.selector=ft.selector),this.contexts.push(d),s=d.add("onMatch",s),d.queries=i;for(m in i)m==="all"?g=1:(p=oi.matchMedia(i[m]),p&&(hs.indexOf(d)<0&&hs.push(d),(f[m]=p.matches)&&(g=1),p.addListener?p.addListener(kh):p.addEventListener("change",kh)));return g&&s(d,function(y){return d.add(null,y)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),pu={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return nb(s)})},timeline:function(t){return new Br(t)},getTweensOf:function(t,n){return xt.getTweensOf(t,n)},getProperty:function(t,n,i,s){er(t)&&(t=Tn(t)[0]);var c=us(t||{}).get,d=i?Vy:Hy;return i==="native"&&(i=""),t&&(n?d((nn[n]&&nn[n].get||c)(t,n,i,s)):function(f,p,m){return d((nn[f]&&nn[f].get||c)(t,f,p,m))})},quickSetter:function(t,n,i){if(t=Tn(t),t.length>1){var s=t.map(function(g){return Gr.quickSetter(g,n,i)}),c=s.length;return function(g){for(var y=c;y--;)s[y](g)}}t=t[0]||{};var d=nn[n],f=us(t),p=f.harness&&(f.harness.aliases||{})[n]||n,m=d?function(g){var y=new d;so._pt=0,y.init(t,i?g+i:g,so,0,[t]),y.render(1,y),so._pt&&Cm(1,so)}:f.set(t,p);return d?m:function(g){return m(t,p,i?g+i:g,f,1)}},quickTo:function(t,n,i){var s,c=Gr.to(t,pn((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),d=function(p,m,g){return c.resetTo(n,p,m,g)};return d.tween=c,d},isTweening:function(t){return xt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ps(t.ease,Zl.ease)),mv(Zl,t||{})},config:function(t){return mv(un,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,c=t.defaults,d=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!nn[f]&&!fn[f]&&$l(n+" effect requires "+f+" plugin.")}),zp[n]=function(f,p,m){return i(Tn(f),pn(p||{},c),m)},d&&(Br.prototype[n]=function(f,p,m){return this.add(zp[n](f,mi(p)?p:(m=p)&&{},this),m)})},registerEase:function(t,n){Ve[t]=ps(n)},parseEase:function(t,n){return arguments.length?ps(t,n):Ve},getById:function(t){return xt.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new Br(t),s,c;for(i.smoothChildTiming=Wr(t.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,s=xt._first;s;)c=s._next,(n||!(!s._dur&&s instanceof Ft&&s.vars.onComplete===s._targets[0]))&&ci(i,s,s._start-s._delay),s=c;return ci(xt,i,0),i},context:function(t,n){return t?new gb(t,n):ft},matchMedia:function(t){return new cS(t)},matchMediaRefresh:function(){return hs.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||kh()},addEventListener:function(t,n){var i=Xd[t]||(Xd[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=Xd[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:BE,wrapYoyo:UE,distribute:Jy,random:$y,snap:Zy,normalize:DE,getUnit:pr,clamp:IE,splitColor:ib,toArray:Tn,selector:wh,mapRange:tb,pipe:ME,unitize:FE,interpolate:WE,shuffle:Ky},install:Fy,effects:zp,ticker:sn,updateRoot:Br.updateRoot,plugins:nn,globalTimeline:xt,core:{PropTween:Vr,globals:Dy,Tween:Ft,Timeline:Br,Animation:nc,getCache:us,_removeLinkedListItem:Du,reverting:function(){return ir},context:function(t){return t&&ft&&(ft.data.push(t),t._ctx=ft),ft},suppressOverwrites:function(t){return gm=t}}};Hr("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return pu[a]=Ft[a]});sn.add(Br.updateRoot);so=pu.to({},{duration:0});var dS=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},uS=function(t,n){var i=t._targets,s,c,d;for(s in n)for(c=i.length;c--;)d=t._ptLookup[c][s],d&&(d=d.d)&&(d._pt&&(d=dS(d,s)),d&&d.modifier&&d.modifier(n[s],t,i[c],s))},Up=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,c,d){d._onInit=function(f){var p,m;if(er(c)&&(p={},Hr(c,function(g){return p[g]=1}),c=p),n){p={};for(m in c)p[m]=n(c[m]);c=p}uS(f,c)}}}},Gr=pu.registerPlugin({name:"attr",init:function(t,n,i,s,c){var d,f,p;this.tween=i;for(d in n)p=t.getAttribute(d)||"",f=this.add(t,"setAttribute",(p||0)+"",n[d],s,c,0,0,d),f.op=d,f.b=p,this._props.push(d)},render:function(t,n){for(var i=n._pt;i;)ir?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Up("roundProps",Nh),Up("modifiers"),Up("snap",Zy))||pu;Ft.version=Br.version=Gr.version="3.15.0";My=1;vm()&&Eo();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;var wv,ya,po,Tm,os,Nv,Pm,fS=function(){return typeof window<"u"},Ui={},is=180/Math.PI,ho=Math.PI/180,Qs=Math.atan2,_v=1e8,Rm=/([A-Z])/g,pS=/(left|right|width|margin|padding|x)/i,hS=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jh=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},mS=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},gS=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},xS=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},vS=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},xb=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},vb=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},yS=function(t,n,i){return t.style[n]=i},bS=function(t,n,i){return t.style.setProperty(n,i)},wS=function(t,n,i){return t._gsap[n]=i},NS=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},_S=function(t,n,i,s,c){var d=t._gsap;d.scaleX=d.scaleY=i,d.renderTransform(c,d)},kS=function(t,n,i,s,c){var d=t._gsap;d[n]=i,d.renderTransform(c,d)},vt="transform",Yr=vt+"Origin",jS=function a(t,n){var i=this,s=this.target,c=s.style,d=s._gsap;if(t in Ui&&c){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Ti(s,f)}):this.tfm[t]=d.x?d[t]:Ti(s,t),t===Yr&&(this.tfm.zOrigin=d.zOrigin);else return di.transform.split(",").forEach(function(f){return a.call(i,f,n)});if(this.props.indexOf(vt)>=0)return;d.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Yr,n,"")),t=vt}(c||n)&&this.props.push(t,n,c[t])},yb=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ES=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,c,d;for(c=0;c<t.length;c+=3)t[c+1]?t[c+1]===2?n[t[c]](t[c+2]):n[t[c]]=t[c+2]:t[c+2]?i[t[c]]=t[c+2]:i.removeProperty(t[c].substr(0,2)==="--"?t[c]:t[c].replace(Rm,"-$1").toLowerCase());if(this.tfm){for(d in this.tfm)s[d]=this.tfm[d];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),c=Pm(),(!c||!c.isStart)&&!i[vt]&&(yb(i),s.zOrigin&&i[Yr]&&(i[Yr]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},bb=function(t,n){var i={target:t,props:[],revert:ES,save:jS};return t._gsap||Gr.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},wb,Eh=function(t,n){var i=ya.createElementNS?ya.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ya.createElement(t);return i&&i.style?i:ya.createElement(t)},dn=function a(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Rm,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&a(t,So(n)||n,1)||""},kv="O,Moz,ms,Ms,Webkit".split(","),So=function(t,n,i){var s=n||os,c=s.style,d=5;if(t in c&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);d--&&!(kv[d]+t in c););return d<0?null:(d===3?"ms":d>=0?kv[d]:"")+t},Sh=function(){fS()&&window.document&&(wv=window,ya=wv.document,po=ya.documentElement,os=Eh("div")||{style:{}},Eh("div"),vt=So(vt),Yr=vt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wb=!!So("perspective"),Pm=Gr.core.reverting,Tm=1)},jv=function(t){var n=t.ownerSVGElement,i=Eh("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),c;s.style.display="block",i.appendChild(s),po.appendChild(i);try{c=s.getBBox()}catch{}return i.removeChild(s),po.removeChild(i),c},Ev=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},Nb=function(t){var n,i;try{n=t.getBBox()}catch{n=jv(t),i=1}return n&&(n.width||n.height)||i||(n=jv(t)),n&&!n.width&&!n.x&&!n.y?{x:+Ev(t,["x","cx","x1"])||0,y:+Ev(t,["y","cy","y1"])||0,width:0,height:0}:n},_b=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Nb(t))},Ta=function(t,n){if(n){var i=t.style,s;n in Ui&&n!==Yr&&(n=vt),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(Rm,"-$1").toLowerCase())):i.removeAttribute(n)}},ba=function(t,n,i,s,c,d){var f=new Vr(t._pt,n,i,0,1,d?vb:xb);return t._pt=f,f.b=s,f.e=c,t._props.push(i),f},Sv={deg:1,rad:1,turn:1},SS={grid:1,flex:1},Pa=function a(t,n,i,s){var c=parseFloat(i)||0,d=(i+"").trim().substr((c+"").length)||"px",f=os.style,p=pS.test(n),m=t.tagName.toLowerCase()==="svg",g=(m?"client":"offset")+(p?"Width":"Height"),y=100,v=s==="px",b=s==="%",N,w,k,C;if(s===d||!c||Sv[s]||Sv[d])return c;if(d!=="px"&&!v&&(c=a(t,n,i,"px")),C=t.getCTM&&_b(t),(b||d==="%")&&(Ui[n]||~n.indexOf("adius")))return N=C?t.getBBox()[p?"width":"height"]:t[g],Pt(b?c/N*y:c/100*N);if(f[p?"width":"height"]=y+(v?d:s),w=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!m?t:t.parentNode,C&&(w=(t.ownerSVGElement||{}).parentNode),(!w||w===ya||!w.appendChild)&&(w=ya.body),k=w._gsap,k&&b&&k.width&&p&&k.time===sn.time&&!k.uncache)return Pt(c/k.width*y);if(b&&(n==="height"||n==="width")){var A=t.style[n];t.style[n]=y+s,N=t[g],A?t.style[n]=A:Ta(t,n)}else(b||d==="%")&&!SS[dn(w,"display")]&&(f.position=dn(t,"position")),w===t&&(f.position="static"),w.appendChild(os),N=os[g],w.removeChild(os),f.position="absolute";return p&&b&&(k=us(w),k.time=sn.time,k.width=w[g]),Pt(v?N*c/y:N&&c?y/N*c:0)},Ti=function(t,n,i,s){var c;return Tm||Sh(),n in di&&n!=="transform"&&(n=di[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ui[n]&&n!=="transform"?(c=ac(t,s),c=n!=="transformOrigin"?c[n]:c.svg?c.origin:mu(dn(t,Yr))+" "+c.zOrigin+"px"):(c=t.style[n],(!c||c==="auto"||s||~(c+"").indexOf("calc("))&&(c=hu[n]&&hu[n](t,n,i)||dn(t,n)||Uy(t,n)||(n==="opacity"?1:0))),i&&!~(c+"").trim().indexOf(" ")?Pa(t,n,c,i)+i:c},AS=function(t,n,i,s){if(!i||i==="none"){var c=So(n,t,1),d=c&&dn(t,c,1);d&&d!==i?(n=c,i=d):n==="borderColor"&&(i=dn(t,"borderTopColor"))}var f=new Vr(this._pt,t.style,n,0,1,hb),p=0,m=0,g,y,v,b,N,w,k,C,A,E,j,P;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=dn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(w=t.style[n],t.style[n]=s,s=dn(t,n)||s,w?t.style[n]=w:Ta(t,n)),g=[i,s],sb(g),i=g[0],s=g[1],v=i.match(ao)||[],P=s.match(ao)||[],P.length){for(;y=ao.exec(s);)k=y[0],A=s.substring(p,y.index),N?N=(N+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(N=1),k!==(w=v[m++]||"")&&(b=parseFloat(w)||0,j=w.substr((b+"").length),k.charAt(1)==="="&&(k=fo(b,k)+j),C=parseFloat(k),E=k.substr((C+"").length),p=ao.lastIndex-E.length,E||(E=E||un.units[n]||j,p===s.length&&(s+=E,f.e+=E)),j!==E&&(b=Pa(t,n,w,E)||0),f._pt={_next:f._pt,p:A||m===1?A:",",s:b,c:C-b,m:N&&N<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?vb:xb;return zy.test(s)&&(f.e=0),this._pt=f,f},Av={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CS=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=Av[i]||i,n[1]=Av[s]||s,n.join(" ")},TS=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,c=n.u,d=i._gsap,f,p,m;if(c==="all"||c===!0)s.cssText="",p=1;else for(c=c.split(","),m=c.length;--m>-1;)f=c[m],Ui[f]&&(p=1,f=f==="transformOrigin"?Yr:vt),Ta(i,f);p&&(Ta(i,vt),d&&(d.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ac(i,1),d.uncache=1,yb(s)))}},hu={clearProps:function(t,n,i,s,c){if(c.data!=="isFromStart"){var d=t._pt=new Vr(t._pt,n,i,0,0,TS);return d.u=s,d.pr=-10,d.tween=c,t._props.push(i),1}}},ic=[1,0,0,1,0,0],kb={},jb=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cv=function(t){var n=dn(t,vt);return jb(n)?ic:n.substr(7).match(Iy).map(Pt)},Lm=function(t,n){var i=t._gsap||us(t),s=t.style,c=Cv(t),d,f,p,m;return i.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,c=[p.a,p.b,p.c,p.d,p.e,p.f],c.join(",")==="1,0,0,1,0,0"?ic:c):(c===ic&&!t.offsetParent&&t!==po&&!i.svg&&(p=s.display,s.display="block",d=t.parentNode,(!d||!t.offsetParent&&!t.getBoundingClientRect().width)&&(m=1,f=t.nextElementSibling,po.appendChild(t)),c=Cv(t),p?s.display=p:Ta(t,"display"),m&&(f?d.insertBefore(t,f):d?d.appendChild(t):po.removeChild(t))),n&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Ah=function(t,n,i,s,c,d){var f=t._gsap,p=c||Lm(t,!0),m=f.xOrigin||0,g=f.yOrigin||0,y=f.xOffset||0,v=f.yOffset||0,b=p[0],N=p[1],w=p[2],k=p[3],C=p[4],A=p[5],E=n.split(" "),j=parseFloat(E[0])||0,P=parseFloat(E[1])||0,z,O,B,W;i?p!==ic&&(O=b*k-N*w)&&(B=j*(k/O)+P*(-w/O)+(w*A-k*C)/O,W=j*(-N/O)+P*(b/O)-(b*A-N*C)/O,j=B,P=W):(z=Nb(t),j=z.x+(~E[0].indexOf("%")?j/100*z.width:j),P=z.y+(~(E[1]||E[0]).indexOf("%")?P/100*z.height:P)),s||s!==!1&&f.smooth?(C=j-m,A=P-g,f.xOffset=y+(C*b+A*w)-C,f.yOffset=v+(C*N+A*k)-A):f.xOffset=f.yOffset=0,f.xOrigin=j,f.yOrigin=P,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!i,t.style[Yr]="0px 0px",d&&(ba(d,f,"xOrigin",m,j),ba(d,f,"yOrigin",g,P),ba(d,f,"xOffset",y,f.xOffset),ba(d,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",j+" "+P)},ac=function(t,n){var i=t._gsap||new lb(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,c=i.scaleX<0,d="px",f="deg",p=getComputedStyle(t),m=dn(t,Yr)||"0",g,y,v,b,N,w,k,C,A,E,j,P,z,O,B,W,D,Q,F,J,Z,ae,ce,$,V,X,S,T,Y,se,le,ge;return g=y=v=w=k=C=A=E=j=0,b=N=1,i.svg=!!(t.getCTM&&_b(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[vt]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[vt]!=="none"?p[vt]:"")),s.scale=s.rotate=s.translate="none"),O=Lm(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),m=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",$=""):$=!n&&t.getAttribute("data-svg-origin"),Ah(t,$||m,!!$||i.originIsAbsolute,i.smooth!==!1,O)),P=i.xOrigin||0,z=i.yOrigin||0,O!==ic&&(Q=O[0],F=O[1],J=O[2],Z=O[3],g=ae=O[4],y=ce=O[5],O.length===6?(b=Math.sqrt(Q*Q+F*F),N=Math.sqrt(Z*Z+J*J),w=Q||F?Qs(F,Q)*is:0,A=J||Z?Qs(J,Z)*is+w:0,A&&(N*=Math.abs(Math.cos(A*ho))),i.svg&&(g-=P-(P*Q+z*J),y-=z-(P*F+z*Z))):(ge=O[6],se=O[7],S=O[8],T=O[9],Y=O[10],le=O[11],g=O[12],y=O[13],v=O[14],B=Qs(ge,Y),k=B*is,B&&(W=Math.cos(-B),D=Math.sin(-B),$=ae*W+S*D,V=ce*W+T*D,X=ge*W+Y*D,S=ae*-D+S*W,T=ce*-D+T*W,Y=ge*-D+Y*W,le=se*-D+le*W,ae=$,ce=V,ge=X),B=Qs(-J,Y),C=B*is,B&&(W=Math.cos(-B),D=Math.sin(-B),$=Q*W-S*D,V=F*W-T*D,X=J*W-Y*D,le=Z*D+le*W,Q=$,F=V,J=X),B=Qs(F,Q),w=B*is,B&&(W=Math.cos(B),D=Math.sin(B),$=Q*W+F*D,V=ae*W+ce*D,F=F*W-Q*D,ce=ce*W-ae*D,Q=$,ae=V),k&&Math.abs(k)+Math.abs(w)>359.9&&(k=w=0,C=180-C),b=Pt(Math.sqrt(Q*Q+F*F+J*J)),N=Pt(Math.sqrt(ce*ce+ge*ge)),B=Qs(ae,ce),A=Math.abs(B)>2e-4?B*is:0,j=le?1/(le<0?-le:le):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!jb(dn(t,vt)),$&&t.setAttribute("transform",$))),Math.abs(A)>90&&Math.abs(A)<270&&(c?(b*=-1,A+=w<=0?180:-180,w+=w<=0?180:-180):(N*=-1,A+=A<=0?180:-180)),n=n||i.uncache,i.x=g-((i.xPercent=g&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-g)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+d,i.y=y-((i.yPercent=y&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-y)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+d,i.z=v+d,i.scaleX=Pt(b),i.scaleY=Pt(N),i.rotation=Pt(w)+f,i.rotationX=Pt(k)+f,i.rotationY=Pt(C)+f,i.skewX=A+f,i.skewY=E+f,i.transformPerspective=j+d,(i.zOrigin=parseFloat(m.split(" ")[2])||!n&&i.zOrigin||0)&&(s[Yr]=mu(m)),i.xOffset=i.yOffset=0,i.force3D=un.force3D,i.renderTransform=i.svg?RS:wb?Eb:PS,i.uncache=0,i},mu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wp=function(t,n,i){var s=pr(n);return Pt(parseFloat(n)+parseFloat(Pa(t,"x",i+"px",s)))+s},PS=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Eb(t,n)},es="0deg",vl="0px",ts=") ",Eb=function(t,n){var i=n||this,s=i.xPercent,c=i.yPercent,d=i.x,f=i.y,p=i.z,m=i.rotation,g=i.rotationY,y=i.rotationX,v=i.skewX,b=i.skewY,N=i.scaleX,w=i.scaleY,k=i.transformPerspective,C=i.force3D,A=i.target,E=i.zOrigin,j="",P=C==="auto"&&t&&t!==1||C===!0;if(E&&(y!==es||g!==es)){var z=parseFloat(g)*ho,O=Math.sin(z),B=Math.cos(z),W;z=parseFloat(y)*ho,W=Math.cos(z),d=Wp(A,d,O*W*-E),f=Wp(A,f,-Math.sin(z)*-E),p=Wp(A,p,B*W*-E+E)}k!==vl&&(j+="perspective("+k+ts),(s||c)&&(j+="translate("+s+"%, "+c+"%) "),(P||d!==vl||f!==vl||p!==vl)&&(j+=p!==vl||P?"translate3d("+d+", "+f+", "+p+") ":"translate("+d+", "+f+ts),m!==es&&(j+="rotate("+m+ts),g!==es&&(j+="rotateY("+g+ts),y!==es&&(j+="rotateX("+y+ts),(v!==es||b!==es)&&(j+="skew("+v+", "+b+ts),(N!==1||w!==1)&&(j+="scale("+N+", "+w+ts),A.style[vt]=j||"translate(0, 0)"},RS=function(t,n){var i=n||this,s=i.xPercent,c=i.yPercent,d=i.x,f=i.y,p=i.rotation,m=i.skewX,g=i.skewY,y=i.scaleX,v=i.scaleY,b=i.target,N=i.xOrigin,w=i.yOrigin,k=i.xOffset,C=i.yOffset,A=i.forceCSS,E=parseFloat(d),j=parseFloat(f),P,z,O,B,W;p=parseFloat(p),m=parseFloat(m),g=parseFloat(g),g&&(g=parseFloat(g),m+=g,p+=g),p||m?(p*=ho,m*=ho,P=Math.cos(p)*y,z=Math.sin(p)*y,O=Math.sin(p-m)*-v,B=Math.cos(p-m)*v,m&&(g*=ho,W=Math.tan(m-g),W=Math.sqrt(1+W*W),O*=W,B*=W,g&&(W=Math.tan(g),W=Math.sqrt(1+W*W),P*=W,z*=W)),P=Pt(P),z=Pt(z),O=Pt(O),B=Pt(B)):(P=y,B=v,z=O=0),(E&&!~(d+"").indexOf("px")||j&&!~(f+"").indexOf("px"))&&(E=Pa(b,"x",d,"px"),j=Pa(b,"y",f,"px")),(N||w||k||C)&&(E=Pt(E+N-(N*P+w*O)+k),j=Pt(j+w-(N*z+w*B)+C)),(s||c)&&(W=b.getBBox(),E=Pt(E+s/100*W.width),j=Pt(j+c/100*W.height)),W="matrix("+P+","+z+","+O+","+B+","+E+","+j+")",b.setAttribute("transform",W),A&&(b.style[vt]=W)},LS=function(t,n,i,s,c){var d=360,f=er(c),p=parseFloat(c)*(f&&~c.indexOf("rad")?is:1),m=p-s,g=s+m+"deg",y,v;return f&&(y=c.split("_")[1],y==="short"&&(m%=d,m!==m%(d/2)&&(m+=m<0?d:-d)),y==="cw"&&m<0?m=(m+d*_v)%d-~~(m/d)*d:y==="ccw"&&m>0&&(m=(m-d*_v)%d-~~(m/d)*d)),t._pt=v=new Vr(t._pt,n,i,s,m,mS),v.e=g,v.u="deg",t._props.push(i),v},Tv=function(t,n){for(var i in n)t[i]=n[i];return t},OS=function(t,n,i){var s=Tv({},i._gsap),c="perspective,force3D,transformOrigin,svgOrigin",d=i.style,f,p,m,g,y,v,b,N;s.svg?(m=i.getAttribute("transform"),i.setAttribute("transform",""),d[vt]=n,f=ac(i,1),Ta(i,vt),i.setAttribute("transform",m)):(m=getComputedStyle(i)[vt],d[vt]=n,f=ac(i,1),d[vt]=m);for(p in Ui)m=s[p],g=f[p],m!==g&&c.indexOf(p)<0&&(b=pr(m),N=pr(g),y=b!==N?Pa(i,p,m,N):parseFloat(m),v=parseFloat(g),t._pt=new Vr(t._pt,f,p,y,v-y,jh),t._pt.u=N||0,t._props.push(p));Tv(f,s)};Hr("padding,margin,Width,Radius",function(a,t){var n="Top",i="Right",s="Bottom",c="Left",d=(t<3?[n,i,s,c]:[n+c,n+i,s+i,s+c]).map(function(f){return t<2?a+f:"border"+f+a});hu[t>1?"border"+a:a]=function(f,p,m,g,y){var v,b;if(arguments.length<4)return v=d.map(function(N){return Ti(f,N,m)}),b=v.join(" "),b.split(v[0]).length===5?v[0]:b;v=(g+"").split(" "),b={},d.forEach(function(N,w){return b[N]=v[w]=v[w]||v[(w-1)/2|0]}),f.init(p,b,y)}});var Sb={name:"css",register:Sh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,c){var d=this._props,f=t.style,p=i.vars.startAt,m,g,y,v,b,N,w,k,C,A,E,j,P,z,O,B,W;Tm||Sh(),this.styles=this.styles||bb(t),B=this.styles.props,this.tween=i;for(w in n)if(w!=="autoRound"&&(g=n[w],!(nn[w]&&cb(w,n,i,s,t,c)))){if(b=typeof g,N=hu[w],b==="function"&&(g=g.call(i,s,t,c),b=typeof g),b==="string"&&~g.indexOf("random(")&&(g=tc(g)),N)N(this,t,w,g,i)&&(O=1);else if(w.substr(0,2)==="--")m=(getComputedStyle(t).getPropertyValue(w)+"").trim(),g+="",ja.lastIndex=0,ja.test(m)||(k=pr(m),C=pr(g),C?k!==C&&(m=Pa(t,w,m,C)+C):k&&(g+=k)),this.add(f,"setProperty",m,g,s,c,0,0,w),d.push(w),B.push(w,0,f[w]);else if(b!=="undefined"){if(p&&w in p?(m=typeof p[w]=="function"?p[w].call(i,s,t,c):p[w],er(m)&&~m.indexOf("random(")&&(m=tc(m)),pr(m+"")||m==="auto"||(m+=un.units[w]||pr(Ti(t,w))||""),(m+"").charAt(1)==="="&&(m=Ti(t,w))):m=Ti(t,w),v=parseFloat(m),A=b==="string"&&g.charAt(1)==="="&&g.substr(0,2),A&&(g=g.substr(2)),y=parseFloat(g),w in di&&(w==="autoAlpha"&&(v===1&&Ti(t,"visibility")==="hidden"&&y&&(v=0),B.push("visibility",0,f.visibility),ba(this,f,"visibility",v?"inherit":"hidden",y?"inherit":"hidden",!y)),w!=="scale"&&w!=="transform"&&(w=di[w],~w.indexOf(",")&&(w=w.split(",")[0]))),E=w in Ui,E){if(this.styles.save(w),W=g,b==="string"&&g.substring(0,6)==="var(--"){if(g=dn(t,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var D=t.style.perspective;t.style.perspective=g,g=dn(t,"perspective"),D?t.style.perspective=D:Ta(t,"perspective")}y=parseFloat(g)}if(j||(P=t._gsap,P.renderTransform&&!n.parseTransform||ac(t,n.parseTransform),z=n.smoothOrigin!==!1&&P.smooth,j=this._pt=new Vr(this._pt,f,vt,0,1,P.renderTransform,P,0,-1),j.dep=1),w==="scale")this._pt=new Vr(this._pt,P,"scaleY",P.scaleY,(A?fo(P.scaleY,A+y):y)-P.scaleY||0,jh),this._pt.u=0,d.push("scaleY",w),w+="X";else if(w==="transformOrigin"){B.push(Yr,0,f[Yr]),g=CS(g),P.svg?Ah(t,g,0,z,0,this):(C=parseFloat(g.split(" ")[2])||0,C!==P.zOrigin&&ba(this,P,"zOrigin",P.zOrigin,C),ba(this,f,w,mu(m),mu(g)));continue}else if(w==="svgOrigin"){Ah(t,g,1,z,0,this);continue}else if(w in kb){LS(this,P,w,v,A?fo(v,A+g):g);continue}else if(w==="smoothOrigin"){ba(this,P,"smooth",P.smooth,g);continue}else if(w==="force3D"){P[w]=g;continue}else if(w==="transform"){OS(this,g,t);continue}}else w in f||(w=So(w)||w);if(E||(y||y===0)&&(v||v===0)&&!hS.test(g)&&w in f)k=(m+"").substr((v+"").length),y||(y=0),C=pr(g)||(w in un.units?un.units[w]:k),k!==C&&(v=Pa(t,w,m,C)),this._pt=new Vr(this._pt,E?P:f,w,v,(A?fo(v,A+y):y)-v,!E&&(C==="px"||w==="zIndex")&&n.autoRound!==!1?vS:jh),this._pt.u=C||0,E&&W!==g?(this._pt.b=m,this._pt.e=W,this._pt.r=xS):k!==C&&C!=="%"&&(this._pt.b=m,this._pt.r=gS);else if(w in f)AS.call(this,t,w,m,A?A+g:g);else if(w in t)this.add(t,w,m||t[w],A?A+g:g,s,c);else if(w!=="parseTransform"){bm(w,g);continue}E||(w in f?B.push(w,0,f[w]):typeof t[w]=="function"?B.push(w,2,t[w]()):B.push(w,1,m||t[w])),d.push(w)}}O&&mb(this)},render:function(t,n){if(n.tween._time||!Pm())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Ti,aliases:di,getSetter:function(t,n,i){var s=di[n];return s&&s.indexOf(",")<0&&(n=s),n in Ui&&n!==Yr&&(t._gsap.x||Ti(t,"x"))?i&&Nv===i?n==="scale"?NS:wS:(Nv=i||{})&&(n==="scale"?_S:kS):t.style&&!xm(t.style[n])?yS:~n.indexOf("-")?bS:Am(t,n)},core:{_removeProperty:Ta,_getMatrix:Lm}};Gr.utils.checkPrefix=So;Gr.core.getStyleSaver=bb;(function(a,t,n,i){var s=Hr(a+","+t+","+n,function(c){Ui[c]=1});Hr(t,function(c){un.units[c]="deg",kb[c]=1}),di[s[13]]=a+","+t,Hr(i,function(c){var d=c.split(":");di[d[1]]=s[d[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){un.units[a]="px"});Gr.registerPlugin(Sb);var re=Gr.registerPlugin(Sb)||Gr;re.core.Tween;function IS(a,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function zS(a,t,n){return t&&IS(a.prototype,t),a}var nr,Qd,on,wa,Na,mo,Ab,as,go,Cb,Ii,Gn,Tb,Pb=function(){return nr||typeof window<"u"&&(nr=window.gsap)&&nr.registerPlugin&&nr},Rb=1,oo=[],Ue=[],fi=[],Ol=Date.now,Ch=function(t,n){return n},MS=function(){var t=go.core,n=t.bridge||{},i=t._scrollers,s=t._proxies;i.push.apply(i,Ue),s.push.apply(s,fi),Ue=i,fi=s,Ch=function(d,f){return n[d](f)}},Ea=function(t,n){return~fi.indexOf(t)&&fi[fi.indexOf(t)+1][n]},Il=function(t){return!!~Cb.indexOf(t)},_r=function(t,n,i,s,c){return t.addEventListener(n,i,{passive:s!==!1,capture:!!c})},Nr=function(t,n,i,s){return t.removeEventListener(n,i,!!s)},Ad="scrollLeft",Cd="scrollTop",Th=function(){return Ii&&Ii.isPressed||Ue.cache++},gu=function(t,n){var i=function s(c){if(c||c===0){Rb&&(on.history.scrollRestoration="manual");var d=Ii&&Ii.isPressed;c=s.v=Math.round(c)||(Ii&&Ii.iOS?1:0),t(c),s.cacheID=Ue.cache,d&&Ch("ss",c)}else(n||Ue.cache!==s.cacheID||Ch("ref"))&&(s.cacheID=Ue.cache,s.v=t());return s.v+s.offset};return i.offset=0,t&&i},Sr={s:Ad,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gu(function(a){return arguments.length?on.scrollTo(a,Vt.sc()):on.pageXOffset||wa[Ad]||Na[Ad]||mo[Ad]||0})},Vt={s:Cd,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sr,sc:gu(function(a){return arguments.length?on.scrollTo(Sr.sc(),a):on.pageYOffset||wa[Cd]||Na[Cd]||mo[Cd]||0})},Dr=function(t,n){return(n&&n._ctx&&n._ctx.selector||nr.utils.toArray)(t)[0]||(typeof t=="string"&&nr.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},FS=function(t,n){for(var i=n.length;i--;)if(n[i]===t||n[i].contains(t))return!0;return!1},Ra=function(t,n){var i=n.s,s=n.sc;Il(t)&&(t=wa.scrollingElement||Na);var c=Ue.indexOf(t),d=s===Vt.sc?1:2;!~c&&(c=Ue.push(t)-1),Ue[c+d]||_r(t,"scroll",Th);var f=Ue[c+d],p=f||(Ue[c+d]=gu(Ea(t,i),!0)||(Il(t)?s:gu(function(m){return arguments.length?t[i]=m:t[i]})));return p.target=t,f||(p.smooth=nr.getProperty(t,"scrollBehavior")==="smooth"),p},Ph=function(t,n,i){var s=t,c=t,d=Ol(),f=d,p=n||50,m=Math.max(500,p*3),g=function(N,w){var k=Ol();w||k-d>p?(c=s,s=N,f=d,d=k):i?s+=N:s=c+(N-c)/(k-f)*(d-f)},y=function(){c=s=i?0:s,f=d=0},v=function(N){var w=f,k=c,C=Ol();return(N||N===0)&&N!==s&&g(N),d===f||C-f>m?0:(s+(i?k:-k))/((i?C:d)-w)*1e3};return{update:g,reset:y,getVelocity:v}},yl=function(t,n){return n&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Pv=function(t){var n=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(i)?n:i},Lb=function(){go=nr.core.globals().ScrollTrigger,go&&go.core&&MS()},Ob=function(t){return nr=t||Pb(),!Qd&&nr&&typeof document<"u"&&document.body&&(on=window,wa=document,Na=wa.documentElement,mo=wa.body,Cb=[on,wa,Na,mo],nr.utils.clamp,Tb=nr.core.context||function(){},as="onpointerenter"in mo?"pointer":"mouse",Ab=Lt.isTouch=on.matchMedia&&on.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in on||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gn=Lt.eventTypes=("ontouchstart"in Na?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Na?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Rb=0},500),Qd=1),go||Lb(),Qd};Sr.op=Vt;Ue.cache=0;var Lt=(function(){function a(n){this.init(n)}var t=a.prototype;return t.init=function(i){Qd||Ob(nr)||console.warn("Please gsap.registerPlugin(Observer)"),go||Lb();var s=i.tolerance,c=i.dragMinimum,d=i.type,f=i.target,p=i.lineHeight,m=i.debounce,g=i.preventDefault,y=i.onStop,v=i.onStopDelay,b=i.ignore,N=i.wheelSpeed,w=i.event,k=i.onDragStart,C=i.onDragEnd,A=i.onDrag,E=i.onPress,j=i.onRelease,P=i.onRight,z=i.onLeft,O=i.onUp,B=i.onDown,W=i.onChangeX,D=i.onChangeY,Q=i.onChange,F=i.onToggleX,J=i.onToggleY,Z=i.onHover,ae=i.onHoverEnd,ce=i.onMove,$=i.ignoreCheck,V=i.isNormalizer,X=i.onGestureStart,S=i.onGestureEnd,T=i.onWheel,Y=i.onEnable,se=i.onDisable,le=i.onClick,ge=i.scrollSpeed,K=i.capture,ue=i.allowClicks,ye=i.lockAxis,xe=i.onLockAxis;this.target=f=Dr(f)||Na,this.vars=i,b&&(b=nr.utils.toArray(b)),s=s||1e-9,c=c||0,N=N||1,ge=ge||1,d=d||"wheel,touch,pointer",m=m!==!1,p||(p=parseFloat(on.getComputedStyle(mo).lineHeight)||22);var Me,bt,St,ne,Ee,it,wt,q=this,ar=0,qr=0,Cr=i.passive||!g&&i.passive!==!1,Qe=Ra(f,Sr),Xr=Ra(f,Vt),On=Qe(),Zn=Xr(),At=~d.indexOf("touch")&&!~d.indexOf("pointer")&&Gn[0]==="pointerdown",In=Il(f),at=f.ownerDocument||wa,sr=[0,0,0],gr=[0,0,0],xr=0,zn=function(){return xr=Ol()},Nt=function(_e,We){return(q.event=_e)&&b&&FS(_e.target,b)||We&&At&&_e.pointerType!=="touch"||$&&$(_e,We)},Fa=function(){q._vx.reset(),q._vy.reset(),bt.pause(),y&&y(q)},hn=function(){var _e=q.deltaX=Pv(sr),We=q.deltaY=Pv(gr),de=Math.abs(_e)>=s,Se=Math.abs(We)>=s;Q&&(de||Se)&&Q(q,_e,We,sr,gr),de&&(P&&q.deltaX>0&&P(q),z&&q.deltaX<0&&z(q),W&&W(q),F&&q.deltaX<0!=ar<0&&F(q),ar=q.deltaX,sr[0]=sr[1]=sr[2]=0),Se&&(B&&q.deltaY>0&&B(q),O&&q.deltaY<0&&O(q),D&&D(q),J&&q.deltaY<0!=qr<0&&J(q),qr=q.deltaY,gr[0]=gr[1]=gr[2]=0),(ne||St)&&(ce&&ce(q),St&&(k&&St===1&&k(q),A&&A(q),St=0),ne=!1),it&&!(it=!1)&&xe&&xe(q),Ee&&(T(q),Ee=!1),Me=0},Hi=function(_e,We,de){sr[de]+=_e,gr[de]+=We,q._vx.update(_e),q._vy.update(We),m?Me||(Me=requestAnimationFrame(hn)):hn()},$n=function(_e,We){ye&&!wt&&(q.axis=wt=Math.abs(_e)>Math.abs(We)?"x":"y",it=!0),wt!=="y"&&(sr[2]+=_e,q._vx.update(_e,!0)),wt!=="x"&&(gr[2]+=We,q._vy.update(We,!0)),m?Me||(Me=requestAnimationFrame(hn)):hn()},mn=function(_e){if(!Nt(_e,1)){_e=yl(_e,g);var We=_e.clientX,de=_e.clientY,Se=We-q.x,we=de-q.y,Ae=q.isDragging;q.x=We,q.y=de,(Ae||(Se||we)&&(Math.abs(q.startX-We)>=c||Math.abs(q.startY-de)>=c))&&(St||(St=Ae?2:1),Ae||(q.isDragging=!0),$n(Se,we))}},Mn=q.onPress=function(Te){Nt(Te,1)||Te&&Te.button||(q.axis=wt=null,bt.pause(),q.isPressed=!0,Te=yl(Te),ar=qr=0,q.startX=q.x=Te.clientX,q.startY=q.y=Te.clientY,q._vx.reset(),q._vy.reset(),_r(V?f:at,Gn[1],mn,Cr,!0),q.deltaX=q.deltaY=0,E&&E(q))},Re=q.onRelease=function(Te){if(!Nt(Te,1)){Nr(V?f:at,Gn[1],mn,!0);var _e=!isNaN(q.y-q.startY),We=q.isDragging,de=We&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Se=yl(Te);!de&&_e&&(q._vx.reset(),q._vy.reset(),g&&ue&&nr.delayedCall(.08,function(){if(Ol()-xr>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(at.createEvent){var we=at.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,on,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(we)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,y&&We&&!V&&bt.restart(!0),St&&hn(),C&&We&&C(q),j&&j(q,de)}},Fn=function(_e){return _e.touches&&_e.touches.length>1&&(q.isGesturing=!0)&&X(_e,q.isDragging)},Yt=function(){return(q.isGesturing=!1)||S(q)},Gt=function(_e){if(!Nt(_e)){var We=Qe(),de=Xr();Hi((We-On)*ge,(de-Zn)*ge,1),On=We,Zn=de,y&&bt.restart(!0)}},Tr=function(_e){if(!Nt(_e)){_e=yl(_e,g),T&&(Ee=!0);var We=(_e.deltaMode===1?p:_e.deltaMode===2?on.innerHeight:1)*N;Hi(_e.deltaX*We,_e.deltaY*We,0),y&&!V&&bt.restart(!0)}},ei=function(_e){if(!Nt(_e)){var We=_e.clientX,de=_e.clientY,Se=We-q.x,we=de-q.y;q.x=We,q.y=de,ne=!0,y&&bt.restart(!0),(Se||we)&&$n(Se,we)}},xi=function(_e){q.event=_e,Z(q)},gn=function(_e){q.event=_e,ae(q)},Vi=function(_e){return Nt(_e)||yl(_e,g)&&le(q)};bt=q._dc=nr.delayedCall(v||.25,Fa).pause(),q.deltaX=q.deltaY=0,q._vx=Ph(0,50,!0),q._vy=Ph(0,50,!0),q.scrollX=Qe,q.scrollY=Xr,q.isDragging=q.isGesturing=q.isPressed=!1,Tb(this),q.enable=function(Te){return q.isEnabled||(_r(In?at:f,"scroll",Th),d.indexOf("scroll")>=0&&_r(In?at:f,"scroll",Gt,Cr,K),d.indexOf("wheel")>=0&&_r(f,"wheel",Tr,Cr,K),(d.indexOf("touch")>=0&&Ab||d.indexOf("pointer")>=0)&&(_r(f,Gn[0],Mn,Cr,K),_r(at,Gn[2],Re),_r(at,Gn[3],Re),ue&&_r(f,"click",zn,!0,!0),le&&_r(f,"click",Vi),X&&_r(at,"gesturestart",Fn),S&&_r(at,"gestureend",Yt),Z&&_r(f,as+"enter",xi),ae&&_r(f,as+"leave",gn),ce&&_r(f,as+"move",ei)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=ne=St=!1,q._vx.reset(),q._vy.reset(),On=Qe(),Zn=Xr(),Te&&Te.type&&Mn(Te),Y&&Y(q)),q},q.disable=function(){q.isEnabled&&(oo.filter(function(Te){return Te!==q&&Il(Te.target)}).length||Nr(In?at:f,"scroll",Th),q.isPressed&&(q._vx.reset(),q._vy.reset(),Nr(V?f:at,Gn[1],mn,!0)),Nr(In?at:f,"scroll",Gt,K),Nr(f,"wheel",Tr,K),Nr(f,Gn[0],Mn,K),Nr(at,Gn[2],Re),Nr(at,Gn[3],Re),Nr(f,"click",zn,!0),Nr(f,"click",Vi),Nr(at,"gesturestart",Fn),Nr(at,"gestureend",Yt),Nr(f,as+"enter",xi),Nr(f,as+"leave",gn),Nr(f,as+"move",ei),q.isEnabled=q.isPressed=q.isDragging=!1,se&&se(q))},q.kill=q.revert=function(){q.disable();var Te=oo.indexOf(q);Te>=0&&oo.splice(Te,1),Ii===q&&(Ii=0)},oo.push(q),V&&Il(f)&&(Ii=q),q.enable(w)},zS(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a})();Lt.version="3.15.0";Lt.create=function(a){return new Lt(a)};Lt.register=Ob;Lt.getAll=function(){return oo.slice()};Lt.getById=function(a){return oo.filter(function(t){return t.vars.id===a})[0]};Pb()&&nr.registerPlugin(Lt);var he,to,Be,Je,an,Xe,Om,xu,sc,zl,_l,Td,ur,Wu,Rh,jr,Rv,Lv,ro,Ib,Hp,zb,kr,Lh,Mb,Fb,ha,Oh,Im,xo,zm,Ml,Ih,Vp,Pd=1,fr=Date.now,Yp=fr(),Pn=0,kl=0,Ov=function(t,n,i){var s=rn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+n+"Clamp"]=s,s?t.substr(6,t.length-7):t},Iv=function(t,n){return n&&(!rn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},DS=function a(){return kl&&requestAnimationFrame(a)},zv=function(){return Wu=1},Mv=function(){return Wu=0},li=function(t){return t},jl=function(t){return Math.round(t*1e5)/1e5||0},Db=function(){return typeof window<"u"},Bb=function(){return he||Db()&&(he=window.gsap)&&he.registerPlugin&&he},bs=function(t){return!!~Om.indexOf(t)},Ub=function(t){return(t==="Height"?zm:Be["inner"+t])||an["client"+t]||Xe["client"+t]},Wb=function(t){return Ea(t,"getBoundingClientRect")||(bs(t)?function(){return eu.width=Be.innerWidth,eu.height=zm,eu}:function(){return Ri(t)})},BS=function(t,n,i){var s=i.d,c=i.d2,d=i.a;return(d=Ea(t,"getBoundingClientRect"))?function(){return d()[s]}:function(){return(n?Ub(c):t["client"+c])||0}},US=function(t,n){return!n||~fi.indexOf(t)?Wb(t):function(){return eu}},ui=function(t,n){var i=n.s,s=n.d2,c=n.d,d=n.a;return Math.max(0,(i="scroll"+s)&&(d=Ea(t,i))?d()-Wb(t)()[c]:bs(t)?(an[i]||Xe[i])-Ub(s):t[i]-t["offset"+s])},Rd=function(t,n){for(var i=0;i<ro.length;i+=3)(!n||~n.indexOf(ro[i+1]))&&t(ro[i],ro[i+1],ro[i+2])},rn=function(t){return typeof t=="string"},hr=function(t){return typeof t=="function"},El=function(t){return typeof t=="number"},ss=function(t){return typeof t=="object"},bl=function(t,n,i){return t&&t.progress(n?0:1)&&i&&t.pause()},Ks=function(t,n,i){if(t.enabled){var s=t._ctx?t._ctx.add(function(){return n(t,i)}):n(t,i);s&&s.totalTime&&(t.callbackAnimation=s)}},Js=Math.abs,Hb="left",Vb="top",Mm="right",Fm="bottom",ms="width",gs="height",Fl="Right",Dl="Left",Bl="Top",Ul="Bottom",Mt="padding",En="margin",Ao="Width",Dm="Height",Ht="px",Sn=function(t){return Be.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},WS=function(t){var n=Sn(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},Fv=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},Ri=function(t,n){var i=n&&Sn(t)[Rh]!=="matrix(1, 0, 0, 1, 0, 0)"&&he.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),s},vu=function(t,n){var i=n.d2;return t["offset"+i]||t["client"+i]||0},Yb=function(t){var n=[],i=t.labels,s=t.duration(),c;for(c in i)n.push(i[c]/s);return n},HS=function(t){return function(n){return he.utils.snap(Yb(t),n)}},Bm=function(t){var n=he.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(s,c){return s-c});return i?function(s,c,d){d===void 0&&(d=.001);var f;if(!c)return n(s);if(c>0){for(s-=d,f=0;f<i.length;f++)if(i[f]>=s)return i[f];return i[f-1]}else for(f=i.length,s+=d;f--;)if(i[f]<=s)return i[f];return i[0]}:function(s,c,d){d===void 0&&(d=.001);var f=n(s);return!c||Math.abs(f-s)<d||f-s<0==c<0?f:n(c<0?s-t:s+t)}},VS=function(t){return function(n,i){return Bm(Yb(t))(n,i.direction)}},Ld=function(t,n,i,s){return i.split(",").forEach(function(c){return t(n,c,s)})},Zt=function(t,n,i,s,c){return t.addEventListener(n,i,{passive:!s,capture:!!c})},Jt=function(t,n,i,s){return t.removeEventListener(n,i,!!s)},Od=function(t,n,i){i=i&&i.wheelHandler,i&&(t(n,"wheel",i),t(n,"touchmove",i))},Dv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Id={toggleActions:"play",anticipatePin:0},yu={top:0,left:0,center:.5,bottom:1,right:1},Kd=function(t,n){if(rn(t)){var i=t.indexOf("="),s=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(s*=n/100),t=t.substr(0,i-1)),t=s+(t in yu?yu[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},zd=function(t,n,i,s,c,d,f,p){var m=c.startColor,g=c.endColor,y=c.fontSize,v=c.indent,b=c.fontWeight,N=Je.createElement("div"),w=bs(i)||Ea(i,"pinType")==="fixed",k=t.indexOf("scroller")!==-1,C=w?Xe:i.tagName==="IFRAME"?i.contentDocument.body:i,A=t.indexOf("start")!==-1,E=A?m:g,j="border-color:"+E+";font-size:"+y+";color:"+E+";font-weight:"+b+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return j+="position:"+((k||p)&&w?"fixed;":"absolute;"),(k||p||!w)&&(j+=(s===Vt?Mm:Fm)+":"+(d+parseFloat(v))+"px;"),f&&(j+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),N._isStart=A,N.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),N.style.cssText=j,N.innerText=n||n===0?t+"-"+n:t,C.children[0]?C.insertBefore(N,C.children[0]):C.appendChild(N),N._offset=N["offset"+s.op.d2],Jd(N,0,s,A),N},Jd=function(t,n,i,s){var c={display:"block"},d=i[s?"os2":"p2"],f=i[s?"p2":"os2"];t._isFlipped=s,c[i.a+"Percent"]=s?-100:0,c[i.a]=s?"1px":0,c["border"+d+Ao]=1,c["border"+f+Ao]=0,c[i.p]=n+"px",he.set(t,c)},ze=[],zh={},oc,Bv=function(){return fr()-Pn>34&&(oc||(oc=requestAnimationFrame(Mi)))},Zs=function(){(!kr||!kr.isPressed||kr.startX>Xe.clientWidth)&&(Ue.cache++,kr?oc||(oc=requestAnimationFrame(Mi)):Mi(),Pn||Ns("scrollStart"),Pn=fr())},Gp=function(){Fb=Be.innerWidth,Mb=Be.innerHeight},Sl=function(t){Ue.cache++,(t===!0||!ur&&!zb&&!Je.fullscreenElement&&!Je.webkitFullscreenElement&&(!Lh||Fb!==Be.innerWidth||Math.abs(Be.innerHeight-Mb)>Be.innerHeight*.25))&&xu.restart(!0)},ws={},YS=[],Gb=function a(){return Jt(Pe,"scrollEnd",a)||ls(!0)},Ns=function(t){return ws[t]&&ws[t].map(function(n){return n()})||YS},tn=[],qb=function(t){for(var n=0;n<tn.length;n+=5)(!t||tn[n+4]&&tn[n+4].query===t)&&(tn[n].style.cssText=tn[n+1],tn[n].getBBox&&tn[n].setAttribute("transform",tn[n+2]||""),tn[n+3].uncache=1)},Xb=function(){return Ue.forEach(function(t){return hr(t)&&++t.cacheID&&(t.rec=t())})},Um=function(t,n){var i;for(jr=0;jr<ze.length;jr++)i=ze[jr],i&&(!n||i._ctx===n)&&(t?i.kill(1):i.revert(!0,!0));Ml=!0,n&&qb(n),n||Ns("revert")},Qb=function(t,n){Ue.cache++,(n||!Er)&&Ue.forEach(function(i){return hr(i)&&i.cacheID++&&(i.rec=0)}),rn(t)&&(Be.history.scrollRestoration=Im=t)},Er,xs=0,Uv,GS=function(){if(Uv!==xs){var t=Uv=xs;requestAnimationFrame(function(){return t===xs&&ls(!0)})}},Kb=function(){Xe.appendChild(xo),zm=!kr&&xo.offsetHeight||Be.innerHeight,Xe.removeChild(xo)},Wv=function(t){return sc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},ls=function(t,n){if(an=Je.documentElement,Xe=Je.body,Om=[Be,Je,an,Xe],Pn&&!t&&!Ml){Zt(Pe,"scrollEnd",Gb);return}Kb(),Er=Pe.isRefreshing=!0,Ml||Xb();var i=Ns("refreshInit");Ib&&Pe.sort(),n||Um(),Ue.forEach(function(s){hr(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),ze.slice(0).forEach(function(s){return s.refresh()}),Ml=!1,ze.forEach(function(s){if(s._subPinOffset&&s.pin){var c=s.vars.horizontal?"offsetWidth":"offsetHeight",d=s.pin[c];s.revert(!0,1),s.adjustPinSpacing(s.pin[c]-d),s.refresh()}}),Ih=1,Wv(!0),ze.forEach(function(s){var c=ui(s.scroller,s._dir),d=s.vars.end==="max"||s._endClamp&&s.end>c,f=s._startClamp&&s.start>=c;(d||f)&&s.setPositions(f?c-1:s.start,d?Math.max(f?c:s.start+1,c):s.end,!0)}),Wv(!1),Ih=0,i.forEach(function(s){return s&&s.render&&s.render(-1)}),Ue.forEach(function(s){hr(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),Qb(Im,1),xu.pause(),xs++,Er=2,Mi(2),ze.forEach(function(s){return hr(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Er=Pe.isRefreshing=!1,Ns("refresh")},Mh=0,Zd=1,Wl,Mi=function(t){if(t===2||!Er&&!Ml){Pe.isUpdating=!0,Wl&&Wl.update(0);var n=ze.length,i=fr(),s=i-Yp>=50,c=n&&ze[0].scroll();if(Zd=Mh>c?-1:1,Er||(Mh=c),s&&(Pn&&!Wu&&i-Pn>200&&(Pn=0,Ns("scrollEnd")),_l=Yp,Yp=i),Zd<0){for(jr=n;jr-- >0;)ze[jr]&&ze[jr].update(0,s);Zd=1}else for(jr=0;jr<n;jr++)ze[jr]&&ze[jr].update(0,s);Pe.isUpdating=!1}oc=0},Fh=[Hb,Vb,Fm,Mm,En+Ul,En+Fl,En+Bl,En+Dl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$d=Fh.concat([ms,gs,"boxSizing","max"+Ao,"max"+Dm,"position",En,Mt,Mt+Bl,Mt+Fl,Mt+Ul,Mt+Dl]),qS=function(t,n,i){vo(i);var s=t._gsap;if(s.spacerIsNative)vo(s.spacerState);else if(t._gsap.swappedIn){var c=n.parentNode;c&&(c.insertBefore(t,n),c.removeChild(n))}t._gsap.swappedIn=!1},qp=function(t,n,i,s){if(!t._gsap.swappedIn){for(var c=Fh.length,d=n.style,f=t.style,p;c--;)p=Fh[c],d[p]=i[p];d.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(d.display="inline-block"),f[Fm]=f[Mm]="auto",d.flexBasis=i.flexBasis||"auto",d.overflow="visible",d.boxSizing="border-box",d[ms]=vu(t,Sr)+Ht,d[gs]=vu(t,Vt)+Ht,d[Mt]=f[En]=f[Vb]=f[Hb]="0",vo(s),f[ms]=f["max"+Ao]=i[ms],f[gs]=f["max"+Dm]=i[gs],f[Mt]=i[Mt],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},XS=/([A-Z])/g,vo=function(t){if(t){var n=t.t.style,i=t.length,s=0,c,d;for((t.t._gsap||he.core.getCache(t.t)).uncache=1;s<i;s+=2)d=t[s+1],c=t[s],d?n[c]=d:n[c]&&n.removeProperty(c.replace(XS,"-$1").toLowerCase())}},Md=function(t){for(var n=$d.length,i=t.style,s=[],c=0;c<n;c++)s.push($d[c],i[$d[c]]);return s.t=t,s},QS=function(t,n,i){for(var s=[],c=t.length,d=i?8:0,f;d<c;d+=2)f=t[d],s.push(f,f in n?n[f]:t[d+1]);return s.t=t.t,s},eu={left:0,top:0},Hv=function(t,n,i,s,c,d,f,p,m,g,y,v,b,N){hr(t)&&(t=t(p)),rn(t)&&t.substr(0,3)==="max"&&(t=v+(t.charAt(4)==="="?Kd("0"+t.substr(3),i):0));var w=b?b.time():0,k,C,A;if(b&&b.seek(0),isNaN(t)||(t=+t),El(t))b&&(t=he.utils.mapRange(b.scrollTrigger.start,b.scrollTrigger.end,0,v,t)),f&&Jd(f,i,s,!0);else{hr(n)&&(n=n(p));var E=(t||"0").split(" "),j,P,z,O;A=Dr(n,p)||Xe,j=Ri(A)||{},(!j||!j.left&&!j.top)&&Sn(A).display==="none"&&(O=A.style.display,A.style.display="block",j=Ri(A),O?A.style.display=O:A.style.removeProperty("display")),P=Kd(E[0],j[s.d]),z=Kd(E[1]||"0",i),t=j[s.p]-m[s.p]-g+P+c-z,f&&Jd(f,z,s,i-z<20||f._isStart&&z>20),i-=i-z}if(N&&(p[N]=t||-.001,t<0&&(t=0)),d){var B=t+i,W=d._isStart;k="scroll"+s.d2,Jd(d,B,s,W&&B>20||!W&&(y?Math.max(Xe[k],an[k]):d.parentNode[k])<=B+1),y&&(m=Ri(f),y&&(d.style[s.op.p]=m[s.op.p]-s.op.m-d._offset+Ht))}return b&&A&&(k=Ri(A),b.seek(v),C=Ri(A),b._caScrollDist=k[s.p]-C[s.p],t=t/b._caScrollDist*v),b&&b.seek(w),b?t:Math.round(t)},KS=/(webkit|moz|length|cssText|inset)/i,Vv=function(t,n,i,s){if(t.parentNode!==n){var c=t.style,d,f;if(n===Xe){t._stOrig=c.cssText,f=Sn(t);for(d in f)!+d&&!KS.test(d)&&f[d]&&typeof c[d]=="string"&&d!=="0"&&(c[d]=f[d]);c.top=i,c.left=s}else c.cssText=t._stOrig;he.core.getCache(t).uncache=1,n.appendChild(t)}},Jb=function(t,n,i){var s=n,c=s;return function(d){var f=Math.round(t());return f!==s&&f!==c&&Math.abs(f-s)>3&&Math.abs(f-c)>3&&(d=f,i&&i()),c=s,s=Math.round(d),s}},Fd=function(t,n,i){var s={};s[n.p]="+="+i,he.set(t,s)},Yv=function(t,n){var i=Ra(t,n),s="_scroll"+n.p2,c=function d(f,p,m,g,y){var v=d.tween,b=p.onComplete,N={};m=m||i();var w=Jb(i,m,function(){v.kill(),d.tween=0});return y=g&&y||0,g=g||f-m,v&&v.kill(),p[s]=f,p.inherit=!1,p.modifiers=N,N[s]=function(){return w(m+g*v.ratio+y*v.ratio*v.ratio)},p.onUpdate=function(){Ue.cache++,d.tween&&Mi()},p.onComplete=function(){d.tween=0,b&&b.call(v)},v=d.tween=he.to(t,p),v};return t[s]=i,i.wheelHandler=function(){return c.tween&&c.tween.kill()&&(c.tween=0)},Zt(t,"wheel",i.wheelHandler),Pe.isTouch&&Zt(t,"touchmove",i.wheelHandler),c},Pe=(function(){function a(n,i){to||a.register(he)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Oh(this),this.init(n,i)}var t=a.prototype;return t.init=function(i,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=li;return}i=Fv(rn(i)||El(i)||i.nodeType?{trigger:i}:i,Id);var c=i,d=c.onUpdate,f=c.toggleClass,p=c.id,m=c.onToggle,g=c.onRefresh,y=c.scrub,v=c.trigger,b=c.pin,N=c.pinSpacing,w=c.invalidateOnRefresh,k=c.anticipatePin,C=c.onScrubComplete,A=c.onSnapComplete,E=c.once,j=c.snap,P=c.pinReparent,z=c.pinSpacer,O=c.containerAnimation,B=c.fastScrollEnd,W=c.preventOverlaps,D=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Sr:Vt,Q=!y&&y!==0,F=Dr(i.scroller||Be),J=he.core.getCache(F),Z=bs(F),ae=("pinType"in i?i.pinType:Ea(F,"pinType")||Z&&"fixed")==="fixed",ce=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],$=Q&&i.toggleActions.split(" "),V="markers"in i?i.markers:Id.markers,X=Z?0:parseFloat(Sn(F)["border"+D.p2+Ao])||0,S=this,T=i.onRefreshInit&&function(){return i.onRefreshInit(S)},Y=BS(F,Z,D),se=US(F,Z),le=0,ge=0,K=0,ue=Ra(F,D),ye,xe,Me,bt,St,ne,Ee,it,wt,q,ar,qr,Cr,Qe,Xr,On,Zn,At,In,at,sr,gr,xr,zn,Nt,Fa,hn,Hi,$n,mn,Mn,Re,Fn,Yt,Gt,Tr,ei,xi,gn;if(S._startClamp=S._endClamp=!1,S._dir=D,k*=45,S.scroller=F,S.scroll=O?O.time.bind(O):ue,bt=ue(),S.vars=i,s=s||i.animation,"refreshPriority"in i&&(Ib=1,i.refreshPriority===-9999&&(Wl=S)),J.tweenScroll=J.tweenScroll||{top:Yv(F,Vt),left:Yv(F,Sr)},S.tweenTo=ye=J.tweenScroll[D.p],S.scrubDuration=function(de){Fn=El(de)&&de,Fn?Re?Re.duration(de):Re=he.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fn,paused:!0,onComplete:function(){return C&&C(S)}}):(Re&&Re.progress(1).kill(),Re=0)},s&&(s.vars.lazy=!1,s._initted&&!S.isReverted||s.vars.immediateRender!==!1&&i.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),S.animation=s.pause(),s.scrollTrigger=S,S.scrubDuration(y),mn=0,p||(p=s.vars.id)),j&&((!ss(j)||j.push)&&(j={snapTo:j}),"scrollBehavior"in Xe.style&&he.set(Z?[Xe,an]:F,{scrollBehavior:"auto"}),Ue.forEach(function(de){return hr(de)&&de.target===(Z?Je.scrollingElement||an:F)&&(de.smooth=!1)}),Me=hr(j.snapTo)?j.snapTo:j.snapTo==="labels"?HS(s):j.snapTo==="labelsDirectional"?VS(s):j.directional!==!1?function(de,Se){return Bm(j.snapTo)(de,fr()-ge<500?0:Se.direction)}:he.utils.snap(j.snapTo),Yt=j.duration||{min:.1,max:2},Yt=ss(Yt)?zl(Yt.min,Yt.max):zl(Yt,Yt),Gt=he.delayedCall(j.delay||Fn/2||.1,function(){var de=ue(),Se=fr()-ge<500,we=ye.tween;if((Se||Math.abs(S.getVelocity())<10)&&!we&&!Wu&&le!==de){var Ae=(de-ne)/Qe,pt=s&&!Q?s.totalProgress():Ae,Ie=Se?0:(pt-Mn)/(fr()-_l)*1e3||0,st=he.utils.clamp(-Ae,1-Ae,Js(Ie/2)*Ie/.185),qt=Ae+(j.inertia===!1?0:st),dt,et,He=j,Pr=He.onStart,tt=He.onInterrupt,vr=He.onComplete;if(dt=Me(qt,S),El(dt)||(dt=qt),et=Math.max(0,Math.round(ne+dt*Qe)),de<=Ee&&de>=ne&&et!==de){if(we&&!we._initted&&we.data<=Js(et-de))return;j.inertia===!1&&(st=dt-Ae),ye(et,{duration:Yt(Js(Math.max(Js(qt-pt),Js(dt-pt))*.185/Ie/.05||0)),ease:j.ease||"power3",data:Js(et-de),onInterrupt:function(){return Gt.restart(!0)&&tt&&Ks(S,tt)},onComplete:function(){S.update(),le=ue(),s&&!Q&&(Re?Re.resetTo("totalProgress",dt,s._tTime/s._tDur):s.progress(dt)),mn=Mn=s&&!Q?s.totalProgress():S.progress,A&&A(S),vr&&Ks(S,vr)}},de,st*Qe,et-de-st*Qe),Pr&&Ks(S,Pr,ye.tween)}}else S.isActive&&le!==de&&Gt.restart(!0)}).pause()),p&&(zh[p]=S),v=S.trigger=Dr(v||b!==!0&&b),gn=v&&v._gsap&&v._gsap.stRevert,gn&&(gn=gn(S)),b=b===!0?v:Dr(b),rn(f)&&(f={targets:v,className:f}),b&&(N===!1||N===En||(N=!N&&b.parentNode&&b.parentNode.style&&Sn(b.parentNode).display==="flex"?!1:Mt),S.pin=b,xe=he.core.getCache(b),xe.spacer?Xr=xe.pinState:(z&&(z=Dr(z),z&&!z.nodeType&&(z=z.current||z.nativeElement),xe.spacerIsNative=!!z,z&&(xe.spacerState=Md(z))),xe.spacer=At=z||Je.createElement("div"),At.classList.add("pin-spacer"),p&&At.classList.add("pin-spacer-"+p),xe.pinState=Xr=Md(b)),i.force3D!==!1&&he.set(b,{force3D:!0}),S.spacer=At=xe.spacer,$n=Sn(b),zn=$n[N+D.os2],at=he.getProperty(b),sr=he.quickSetter(b,D.a,Ht),qp(b,At,$n),Zn=Md(b)),V){qr=ss(V)?Fv(V,Dv):Dv,q=zd("scroller-start",p,F,D,qr,0),ar=zd("scroller-end",p,F,D,qr,0,q),In=q["offset"+D.op.d2];var Vi=Dr(Ea(F,"content")||F);it=this.markerStart=zd("start",p,Vi,D,qr,In,0,O),wt=this.markerEnd=zd("end",p,Vi,D,qr,In,0,O),O&&(xi=he.quickSetter([it,wt],D.a,Ht)),!ae&&!(fi.length&&Ea(F,"fixedMarkers")===!0)&&(WS(Z?Xe:F),he.set([q,ar],{force3D:!0}),Fa=he.quickSetter(q,D.a,Ht),Hi=he.quickSetter(ar,D.a,Ht))}if(O){var Te=O.vars.onUpdate,_e=O.vars.onUpdateParams;O.eventCallback("onUpdate",function(){S.update(0,0,1),Te&&Te.apply(O,_e||[])})}if(S.previous=function(){return ze[ze.indexOf(S)-1]},S.next=function(){return ze[ze.indexOf(S)+1]},S.revert=function(de,Se){if(!Se)return S.kill(!0);var we=de!==!1||!S.enabled,Ae=ur;we!==S.isReverted&&(we&&(Tr=Math.max(ue(),S.scroll.rec||0),K=S.progress,ei=s&&s.progress()),it&&[it,wt,q,ar].forEach(function(pt){return pt.style.display=we?"none":"block"}),we&&(ur=S,S.update(we)),b&&(!P||!S.isActive)&&(we?qS(b,At,Xr):qp(b,At,Sn(b),Nt)),we||S.update(we),ur=Ae,S.isReverted=we)},S.refresh=function(de,Se,we,Ae){if(!((ur||!S.enabled)&&!Se)){if(b&&de&&Pn){Zt(a,"scrollEnd",Gb);return}!Er&&T&&T(S),ur=S,ye.tween&&!we&&(ye.tween.kill(),ye.tween=0),Re&&Re.pause(),w&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(ri){return ri.vars.immediateRender&&ri.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var pt=Y(),Ie=se(),st=O?O.duration():ui(F,D),qt=Qe<=.01||!Qe,dt=0,et=Ae||0,He=ss(we)?we.end:i.end,Pr=i.endTrigger||v,tt=ss(we)?we.start:i.start||(i.start===0||!v?0:b?"0 0":"0 100%"),vr=S.pinnedContainer=i.pinnedContainer&&Dr(i.pinnedContainer,S),Qr=v&&Math.max(0,ze.indexOf(S))||0,Ot=Qr,It,Bt,vi,js,Fe,Ct,Rr,Es,Da,Ba,Kr,ti,yr;for(V&&ss(we)&&(ti=he.getProperty(q,D.p),yr=he.getProperty(ar,D.p));Ot-- >0;)Ct=ze[Ot],Ct.end||Ct.refresh(0,1)||(ur=S),Rr=Ct.pin,Rr&&(Rr===v||Rr===b||Rr===vr)&&!Ct.isReverted&&(Ba||(Ba=[]),Ba.unshift(Ct),Ct.revert(!0,!0)),Ct!==ze[Ot]&&(Qr--,Ot--);for(hr(tt)&&(tt=tt(S)),tt=Ov(tt,"start",S),ne=Hv(tt,v,pt,D,ue(),it,q,S,Ie,X,ae,st,O,S._startClamp&&"_startClamp")||(b?-.001:0),hr(He)&&(He=He(S)),rn(He)&&!He.indexOf("+=")&&(~He.indexOf(" ")?He=(rn(tt)?tt.split(" ")[0]:"")+He:(dt=Kd(He.substr(2),pt),He=rn(tt)?tt:(O?he.utils.mapRange(0,O.duration(),O.scrollTrigger.start,O.scrollTrigger.end,ne):ne)+dt,Pr=v)),He=Ov(He,"end",S),Ee=Math.max(ne,Hv(He||(Pr?"100% 0":st),Pr,pt,D,ue()+dt,wt,ar,S,Ie,X,ae,st,O,S._endClamp&&"_endClamp"))||-.001,dt=0,Ot=Qr;Ot--;)Ct=ze[Ot]||{},Rr=Ct.pin,Rr&&Ct.start-Ct._pinPush<=ne&&!O&&Ct.end>0&&(It=Ct.end-(S._startClamp?Math.max(0,Ct.start):Ct.start),(Rr===v&&Ct.start-Ct._pinPush<ne||Rr===vr)&&isNaN(tt)&&(dt+=It*(1-Ct.progress)),Rr===b&&(et+=It));if(ne+=dt,Ee+=dt,S._startClamp&&(S._startClamp+=dt),S._endClamp&&!Er&&(S._endClamp=Ee||-.001,Ee=Math.min(Ee,ui(F,D))),Qe=Ee-ne||(ne-=.01)&&.001,qt&&(K=he.utils.clamp(0,1,he.utils.normalize(ne,Ee,Tr))),S._pinPush=et,it&&dt&&(It={},It[D.a]="+="+dt,vr&&(It[D.p]="-="+ue()),he.set([it,wt],It)),b&&!(Ih&&S.end>=ui(F,D)))It=Sn(b),js=D===Vt,vi=ue(),gr=parseFloat(at(D.a))+et,!st&&Ee>1&&(Kr=(Z?Je.scrollingElement||an:F).style,Kr={style:Kr,value:Kr["overflow"+D.a.toUpperCase()]},Z&&Sn(Xe)["overflow"+D.a.toUpperCase()]!=="scroll"&&(Kr.style["overflow"+D.a.toUpperCase()]="scroll")),qp(b,At,It),Zn=Md(b),Bt=Ri(b,!0),Es=ae&&Ra(F,js?Sr:Vt)(),N?(Nt=[N+D.os2,Qe+et+Ht],Nt.t=At,Ot=N===Mt?vu(b,D)+Qe+et:0,Ot&&(Nt.push(D.d,Ot+Ht),At.style.flexBasis!=="auto"&&(At.style.flexBasis=Ot+Ht)),vo(Nt),vr&&ze.forEach(function(ri){ri.pin===vr&&ri.vars.pinSpacing!==!1&&(ri._subPinOffset=!0)}),ae&&ue(Tr)):(Ot=vu(b,D),Ot&&At.style.flexBasis!=="auto"&&(At.style.flexBasis=Ot+Ht)),ae&&(Fe={top:Bt.top+(js?vi-ne:Es)+Ht,left:Bt.left+(js?Es:vi-ne)+Ht,boxSizing:"border-box",position:"fixed"},Fe[ms]=Fe["max"+Ao]=Math.ceil(Bt.width)+Ht,Fe[gs]=Fe["max"+Dm]=Math.ceil(Bt.height)+Ht,Fe[En]=Fe[En+Bl]=Fe[En+Fl]=Fe[En+Ul]=Fe[En+Dl]="0",Fe[Mt]=It[Mt],Fe[Mt+Bl]=It[Mt+Bl],Fe[Mt+Fl]=It[Mt+Fl],Fe[Mt+Ul]=It[Mt+Ul],Fe[Mt+Dl]=It[Mt+Dl],On=QS(Xr,Fe,P),Er&&ue(0)),s?(Da=s._initted,Hp(1),s.render(s.duration(),!0,!0),xr=at(D.a)-gr+Qe+et,hn=Math.abs(Qe-xr)>1,ae&&hn&&On.splice(On.length-2,2),s.render(0,!0,!0),Da||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),Hp(0)):xr=Qe,Kr&&(Kr.value?Kr.style["overflow"+D.a.toUpperCase()]=Kr.value:Kr.style.removeProperty("overflow-"+D.a));else if(v&&ue()&&!O)for(Bt=v.parentNode;Bt&&Bt!==Xe;)Bt._pinOffset&&(ne-=Bt._pinOffset,Ee-=Bt._pinOffset),Bt=Bt.parentNode;Ba&&Ba.forEach(function(ri){return ri.revert(!1,!0)}),S.start=ne,S.end=Ee,bt=St=Er?Tr:ue(),!O&&!Er&&(bt<Tr&&ue(Tr),S.scroll.rec=0),S.revert(!1,!0),ge=fr(),Gt&&(le=-1,Gt.restart(!0)),ur=0,s&&Q&&(s._initted||ei)&&s.progress()!==ei&&s.progress(ei||0,!0).render(s.time(),!0,!0),(qt||K!==S.progress||O||w||s&&!s._initted)&&(s&&!Q&&(s._initted||K||s.vars.immediateRender!==!1)&&s.totalProgress(O&&ne<-.001&&!K?he.utils.normalize(ne,Ee,0):K,!0),S.progress=qt||(bt-ne)/Qe===K?0:K),b&&N&&(At._pinOffset=Math.round(S.progress*xr)),Re&&Re.invalidate(),isNaN(ti)||(ti-=he.getProperty(q,D.p),yr-=he.getProperty(ar,D.p),Fd(q,D,ti),Fd(it,D,ti-(Ae||0)),Fd(ar,D,yr),Fd(wt,D,yr-(Ae||0))),qt&&!Er&&S.update(),g&&!Er&&!Cr&&(Cr=!0,g(S),Cr=!1)}},S.getVelocity=function(){return(ue()-St)/(fr()-_l)*1e3||0},S.endAnimation=function(){bl(S.callbackAnimation),s&&(Re?Re.progress(1):s.paused()?Q||bl(s,S.direction<0,1):bl(s,s.reversed()))},S.labelToScroll=function(de){return s&&s.labels&&(ne||S.refresh()||ne)+s.labels[de]/s.duration()*Qe||0},S.getTrailing=function(de){var Se=ze.indexOf(S),we=S.direction>0?ze.slice(0,Se).reverse():ze.slice(Se+1);return(rn(de)?we.filter(function(Ae){return Ae.vars.preventOverlaps===de}):we).filter(function(Ae){return S.direction>0?Ae.end<=ne:Ae.start>=Ee})},S.update=function(de,Se,we){if(!(O&&!we&&!de)){var Ae=Er===!0?Tr:S.scroll(),pt=de?0:(Ae-ne)/Qe,Ie=pt<0?0:pt>1?1:pt||0,st=S.progress,qt,dt,et,He,Pr,tt,vr,Qr;if(Se&&(St=bt,bt=O?ue():Ae,j&&(Mn=mn,mn=s&&!Q?s.totalProgress():Ie)),k&&b&&!ur&&!Pd&&Pn&&(!Ie&&ne<Ae+(Ae-St)/(fr()-_l)*k?Ie=1e-4:Ie===1&&Ee>Ae+(Ae-St)/(fr()-_l)*k&&(Ie=.9999)),Ie!==st&&S.enabled){if(qt=S.isActive=!!Ie&&Ie<1,dt=!!st&&st<1,tt=qt!==dt,Pr=tt||!!Ie!=!!st,S.direction=Ie>st?1:-1,S.progress=Ie,Pr&&!ur&&(et=Ie&&!st?0:Ie===1?1:st===1?2:3,Q&&(He=!tt&&$[et+1]!=="none"&&$[et+1]||$[et],Qr=s&&(He==="complete"||He==="reset"||He in s))),W&&(tt||Qr)&&(Qr||y||!s)&&(hr(W)?W(S):S.getTrailing(W).forEach(function(vi){return vi.endAnimation()})),Q||(Re&&!ur&&!Pd?(Re._dp._time-Re._start!==Re._time&&Re.render(Re._dp._time-Re._start),Re.resetTo?Re.resetTo("totalProgress",Ie,s._tTime/s._tDur):(Re.vars.totalProgress=Ie,Re.invalidate().restart())):s&&s.totalProgress(Ie,!!(ur&&(ge||de)))),b){if(de&&N&&(At.style[N+D.os2]=zn),!ae)sr(jl(gr+xr*Ie));else if(Pr){if(vr=!de&&Ie>st&&Ee+1>Ae&&Ae+1>=ui(F,D),P)if(!de&&(qt||vr)){var Ot=Ri(b,!0),It=Ae-ne;Vv(b,Xe,Ot.top+(D===Vt?It:0)+Ht,Ot.left+(D===Vt?0:It)+Ht)}else Vv(b,At);vo(qt||vr?On:Zn),hn&&Ie<1&&qt||sr(gr+(Ie===1&&!vr?xr:0))}}j&&!ye.tween&&!ur&&!Pd&&Gt.restart(!0),f&&(tt||E&&Ie&&(Ie<1||!Vp))&&sc(f.targets).forEach(function(vi){return vi.classList[qt||E?"add":"remove"](f.className)}),d&&!Q&&!de&&d(S),Pr&&!ur?(Q&&(Qr&&(He==="complete"?s.pause().totalProgress(1):He==="reset"?s.restart(!0).pause():He==="restart"?s.restart(!0):s[He]()),d&&d(S)),(tt||!Vp)&&(m&&tt&&Ks(S,m),ce[et]&&Ks(S,ce[et]),E&&(Ie===1?S.kill(!1,1):ce[et]=0),tt||(et=Ie===1?1:3,ce[et]&&Ks(S,ce[et]))),B&&!qt&&Math.abs(S.getVelocity())>(El(B)?B:2500)&&(bl(S.callbackAnimation),Re?Re.progress(1):bl(s,He==="reverse"?1:!Ie,1))):Q&&d&&!ur&&d(S)}if(Hi){var Bt=O?Ae/O.duration()*(O._caScrollDist||0):Ae;Fa(Bt+(q._isFlipped?1:0)),Hi(Bt)}xi&&xi(-Ae/O.duration()*(O._caScrollDist||0))}},S.enable=function(de,Se){S.enabled||(S.enabled=!0,Zt(F,"resize",Sl),Z||Zt(F,"scroll",Zs),T&&Zt(a,"refreshInit",T),de!==!1&&(S.progress=K=0,bt=St=le=ue()),Se!==!1&&S.refresh())},S.getTween=function(de){return de&&ye?ye.tween:Re},S.setPositions=function(de,Se,we,Ae){if(O){var pt=O.scrollTrigger,Ie=O.duration(),st=pt.end-pt.start;de=pt.start+st*de/Ie,Se=pt.start+st*Se/Ie}S.refresh(!1,!1,{start:Iv(de,we&&!!S._startClamp),end:Iv(Se,we&&!!S._endClamp)},Ae),S.update()},S.adjustPinSpacing=function(de){if(Nt&&de){var Se=Nt.indexOf(D.d)+1;Nt[Se]=parseFloat(Nt[Se])+de+Ht,Nt[1]=parseFloat(Nt[1])+de+Ht,vo(Nt)}},S.disable=function(de,Se){if(de!==!1&&S.revert(!0,!0),S.enabled&&(S.enabled=S.isActive=!1,Se||Re&&Re.pause(),Tr=0,xe&&(xe.uncache=1),T&&Jt(a,"refreshInit",T),Gt&&(Gt.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!Z)){for(var we=ze.length;we--;)if(ze[we].scroller===F&&ze[we]!==S)return;Jt(F,"resize",Sl),Z||Jt(F,"scroll",Zs)}},S.kill=function(de,Se){S.disable(de,Se),Re&&!Se&&Re.kill(),p&&delete zh[p];var we=ze.indexOf(S);we>=0&&ze.splice(we,1),we===jr&&Zd>0&&jr--,we=0,ze.forEach(function(Ae){return Ae.scroller===S.scroller&&(we=1)}),we||Er||(S.scroll.rec=0),s&&(s.scrollTrigger=null,de&&s.revert({kill:!1}),Se||s.kill()),it&&[it,wt,q,ar].forEach(function(Ae){return Ae.parentNode&&Ae.parentNode.removeChild(Ae)}),Wl===S&&(Wl=0),b&&(xe&&(xe.uncache=1),we=0,ze.forEach(function(Ae){return Ae.pin===b&&we++}),we||(xe.spacer=0)),i.onKill&&i.onKill(S)},ze.push(S),S.enable(!1,!1),gn&&gn(S),s&&s.add&&!Qe){var We=S.update;S.update=function(){S.update=We,Ue.cache++,ne||Ee||S.refresh()},he.delayedCall(.01,S.update),Qe=.01,ne=Ee=0}else S.refresh();b&&GS()},a.register=function(i){return to||(he=i||Bb(),Db()&&window.document&&a.enable(),to=kl),to},a.defaults=function(i){if(i)for(var s in i)Id[s]=i[s];return Id},a.disable=function(i,s){kl=0,ze.forEach(function(d){return d[s?"kill":"disable"](i)}),Jt(Be,"wheel",Zs),Jt(Je,"scroll",Zs),clearInterval(Td),Jt(Je,"touchcancel",li),Jt(Xe,"touchstart",li),Ld(Jt,Je,"pointerdown,touchstart,mousedown",zv),Ld(Jt,Je,"pointerup,touchend,mouseup",Mv),xu.kill(),Rd(Jt);for(var c=0;c<Ue.length;c+=3)Od(Jt,Ue[c],Ue[c+1]),Od(Jt,Ue[c],Ue[c+2])},a.enable=function(){if(Be=window,Je=document,an=Je.documentElement,Xe=Je.body,he){if(sc=he.utils.toArray,zl=he.utils.clamp,Oh=he.core.context||li,Hp=he.core.suppressOverwrites||li,Im=Be.history.scrollRestoration||"auto",Mh=Be.pageYOffset||0,he.core.globals("ScrollTrigger",a),Xe){kl=1,xo=document.createElement("div"),xo.style.height="100vh",xo.style.position="absolute",Kb(),DS(),Lt.register(he),a.isTouch=Lt.isTouch,ha=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lh=Lt.isTouch===1,Zt(Be,"wheel",Zs),Om=[Be,Je,an,Xe],he.matchMedia?(a.matchMedia=function(g){var y=he.matchMedia(),v;for(v in g)y.add(v,g[v]);return y},he.addEventListener("matchMediaInit",function(){Xb(),Um()}),he.addEventListener("matchMediaRevert",function(){return qb()}),he.addEventListener("matchMedia",function(){ls(0,1),Ns("matchMedia")}),he.matchMedia().add("(orientation: portrait)",function(){return Gp(),Gp})):console.warn("Requires GSAP 3.11.0 or later"),Gp(),Zt(Je,"scroll",Zs);var i=Xe.hasAttribute("style"),s=Xe.style,c=s.borderTopStyle,d=he.core.Animation.prototype,f,p;for(d.revert||Object.defineProperty(d,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",f=Ri(Xe),Vt.m=Math.round(f.top+Vt.sc())||0,Sr.m=Math.round(f.left+Sr.sc())||0,c?s.borderTopStyle=c:s.removeProperty("border-top-style"),i||(Xe.setAttribute("style",""),Xe.removeAttribute("style")),Td=setInterval(Bv,250),he.delayedCall(.5,function(){return Pd=0}),Zt(Je,"touchcancel",li),Zt(Xe,"touchstart",li),Ld(Zt,Je,"pointerdown,touchstart,mousedown",zv),Ld(Zt,Je,"pointerup,touchend,mouseup",Mv),Rh=he.utils.checkPrefix("transform"),$d.push(Rh),to=fr(),xu=he.delayedCall(.2,ls).pause(),ro=[Je,"visibilitychange",function(){var g=Be.innerWidth,y=Be.innerHeight;Je.hidden?(Rv=g,Lv=y):(Rv!==g||Lv!==y)&&Sl()},Je,"DOMContentLoaded",ls,Be,"load",ls,Be,"resize",Sl],Rd(Zt),ze.forEach(function(g){return g.enable(0,1)}),p=0;p<Ue.length;p+=3)Od(Jt,Ue[p],Ue[p+1]),Od(Jt,Ue[p],Ue[p+2])}else if(Je){var m=function g(){a.enable(),Je.removeEventListener("DOMContentLoaded",g)};Je.addEventListener("DOMContentLoaded",m)}}},a.config=function(i){"limitCallbacks"in i&&(Vp=!!i.limitCallbacks);var s=i.syncInterval;s&&clearInterval(Td)||(Td=s)&&setInterval(Bv,s),"ignoreMobileResize"in i&&(Lh=a.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Rd(Jt)||Rd(Zt,i.autoRefreshEvents||"none"),zb=(i.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(i,s){var c=Dr(i),d=Ue.indexOf(c),f=bs(c);~d&&Ue.splice(d,f?6:2),s&&(f?fi.unshift(Be,s,Xe,s,an,s):fi.unshift(c,s))},a.clearMatchMedia=function(i){ze.forEach(function(s){return s._ctx&&s._ctx.query===i&&s._ctx.kill(!0,!0)})},a.isInViewport=function(i,s,c){var d=(rn(i)?Dr(i):i).getBoundingClientRect(),f=d[c?ms:gs]*s||0;return c?d.right-f>0&&d.left+f<Be.innerWidth:d.bottom-f>0&&d.top+f<Be.innerHeight},a.positionInViewport=function(i,s,c){rn(i)&&(i=Dr(i));var d=i.getBoundingClientRect(),f=d[c?ms:gs],p=s==null?f/2:s in yu?yu[s]*f:~s.indexOf("%")?parseFloat(s)*f/100:parseFloat(s)||0;return c?(d.left+p)/Be.innerWidth:(d.top+p)/Be.innerHeight},a.killAll=function(i){if(ze.slice(0).forEach(function(c){return c.vars.id!=="ScrollSmoother"&&c.kill()}),i!==!0){var s=ws.killAll||[];ws={},s.forEach(function(c){return c()})}},a})();Pe.version="3.15.0";Pe.saveStyles=function(a){return a?sc(a).forEach(function(t){if(t&&t.style){var n=tn.indexOf(t);n>=0&&tn.splice(n,5),tn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),he.core.getCache(t),Oh())}}):tn};Pe.revert=function(a,t){return Um(!a,t)};Pe.create=function(a,t){return new Pe(a,t)};Pe.refresh=function(a){return a?Sl(!0):(to||Pe.register())&&ls(!0)};Pe.update=function(a){return++Ue.cache&&Mi(a===!0?2:0)};Pe.clearScrollMemory=Qb;Pe.maxScroll=function(a,t){return ui(a,t?Sr:Vt)};Pe.getScrollFunc=function(a,t){return Ra(Dr(a),t?Sr:Vt)};Pe.getById=function(a){return zh[a]};Pe.getAll=function(){return ze.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Pe.isScrolling=function(){return!!Pn};Pe.snapDirectional=Bm;Pe.addEventListener=function(a,t){var n=ws[a]||(ws[a]=[]);~n.indexOf(t)||n.push(t)};Pe.removeEventListener=function(a,t){var n=ws[a],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)};Pe.batch=function(a,t){var n=[],i={},s=t.interval||.016,c=t.batchMax||1e9,d=function(m,g){var y=[],v=[],b=he.delayedCall(s,function(){g(y,v),y=[],v=[]}).pause();return function(N){y.length||b.restart(!0),y.push(N.trigger),v.push(N),c<=y.length&&b.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&hr(t[f])&&f!=="onRefreshInit"?d(f,t[f]):t[f];return hr(c)&&(c=c(),Zt(Pe,"refresh",function(){return c=t.batchMax()})),sc(a).forEach(function(p){var m={};for(f in i)m[f]=i[f];m.trigger=p,n.push(Pe.create(m))}),n};var Gv=function(t,n,i,s){return n>s?t(s):n<0&&t(0),i>s?(s-n)/(i-n):i<0?n/(n-i):1},Xp=function a(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Lt.isTouch?" pinch-zoom":""):"none",t===an&&a(Xe,n)},Dd={auto:1,scroll:1},JS=function(t){var n=t.event,i=t.target,s=t.axis,c=(n.changedTouches?n.changedTouches[0]:n).target,d=c._gsap||he.core.getCache(c),f=fr(),p;if(!d._isScrollT||f-d._isScrollT>2e3){for(;c&&c!==Xe&&(c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth||!(Dd[(p=Sn(c)).overflowY]||Dd[p.overflowX]));)c=c.parentNode;d._isScroll=c&&c!==i&&!bs(c)&&(Dd[(p=Sn(c)).overflowY]||Dd[p.overflowX]),d._isScrollT=f}(d._isScroll||s==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},Zb=function(t,n,i,s){return Lt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:s=s&&JS,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return i&&Zt(Je,Lt.eventTypes[0],Xv,!1,!0)},onDisable:function(){return Jt(Je,Lt.eventTypes[0],Xv,!0)}})},ZS=/(input|label|select|textarea)/i,qv,Xv=function(t){var n=ZS.test(t.target.tagName);(n||qv)&&(t._gsapAllow=!0,qv=n)},$S=function(t){ss(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,i=n.normalizeScrollX,s=n.momentum,c=n.allowNestedScroll,d=n.onRelease,f,p,m=Dr(t.target)||an,g=he.core.globals().ScrollSmoother,y=g&&g.get(),v=ha&&(t.content&&Dr(t.content)||y&&t.content!==!1&&!y.smooth()&&y.content()),b=Ra(m,Vt),N=Ra(m,Sr),w=1,k=(Lt.isTouch&&Be.visualViewport?Be.visualViewport.scale*Be.visualViewport.width:Be.outerWidth)/Be.innerWidth,C=0,A=hr(s)?function(){return s(f)}:function(){return s||2.8},E,j,P=Zb(m,t.type,!0,c),z=function(){return j=!1},O=li,B=li,W=function(){p=ui(m,Vt),B=zl(ha?1:0,p),i&&(O=zl(0,ui(m,Sr))),E=xs},D=function(){v._gsap.y=jl(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0},Q=function(){if(j){requestAnimationFrame(z);var V=jl(f.deltaY/2),X=B(b.v-V);if(v&&X!==b.v+b.offset){b.offset=X-b.v;var S=jl((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",v._gsap.y=S+"px",b.cacheID=Ue.cache,Mi()}return!0}b.offset&&D(),j=!0},F,J,Z,ae,ce=function(){W(),F.isActive()&&F.vars.scrollY>p&&(b()>p?F.progress(1)&&b(p):F.resetTo("scrollY",p))};return v&&he.set(v,{y:"+=0"}),t.ignoreCheck=function($){return ha&&$.type==="touchmove"&&Q()||w>1.05&&$.type!=="touchstart"||f.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){j=!1;var $=w;w=jl((Be.visualViewport&&Be.visualViewport.scale||1)/k),F.pause(),$!==w&&Xp(m,w>1.01?!0:i?!1:"x"),J=N(),Z=b(),W(),E=xs},t.onRelease=t.onGestureStart=function($,V){if(b.offset&&D(),!V)ae.restart(!0);else{Ue.cache++;var X=A(),S,T;i&&(S=N(),T=S+X*.05*-$.velocityX/.227,X*=Gv(N,S,T,ui(m,Sr)),F.vars.scrollX=O(T)),S=b(),T=S+X*.05*-$.velocityY/.227,X*=Gv(b,S,T,ui(m,Vt)),F.vars.scrollY=B(T),F.invalidate().duration(X).play(.01),(ha&&F.vars.scrollY>=p||S>=p-1)&&he.to({},{onUpdate:ce,duration:X})}d&&d($)},t.onWheel=function(){F._ts&&F.pause(),fr()-C>1e3&&(E=0,C=fr())},t.onChange=function($,V,X,S,T){if(xs!==E&&W(),V&&i&&N(O(S[2]===V?J+($.startX-$.x):N()+V-S[1])),X){b.offset&&D();var Y=T[2]===X,se=Y?Z+$.startY-$.y:b()+X-T[1],le=B(se);Y&&se!==le&&(Z+=le-se),b(le)}(X||V)&&Mi()},t.onEnable=function(){Xp(m,i?!1:"x"),Pe.addEventListener("refresh",ce),Zt(Be,"resize",ce),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=N.smooth=!1),P.enable()},t.onDisable=function(){Xp(m,!0),Jt(Be,"resize",ce),Pe.removeEventListener("refresh",ce),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new Lt(t),f.iOS=ha,ha&&!b()&&b(1),ha&&he.ticker.add(li),ae=f._dc,F=he.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Jb(b,b(),function(){return F.pause()})},onUpdate:Mi,onComplete:ae.vars.onComplete}),f};Pe.sort=function(a){if(hr(a))return ze.sort(a);var t=Be.pageYOffset||0;return Pe.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+Be.innerHeight}),ze.sort(a||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Pe.observe=function(a){return new Lt(a)};Pe.normalizeScroll=function(a){if(typeof a>"u")return kr;if(a===!0&&kr)return kr.enable();if(a===!1){kr&&kr.kill(),kr=a;return}var t=a instanceof Lt?a:$S(a);return kr&&kr.target===t.target&&kr.kill(),bs(t.target)&&(kr=t),t};Pe.core={_getVelocityProp:Ph,_inputObserver:Zb,_scrollers:Ue,_proxies:fi,bridge:{ss:function(){Pn||Ns("scrollStart"),Pn=fr()},ref:function(){return ur}}};Bb()&&he.registerPlugin(Pe);const e3="/boltfaredeal/assets/logo-CZH9TYL_.png";re.registerPlugin(Pe);const t3=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null),i=R.useRef(null),s=R.useRef(null),c=R.useRef(null),d=R.useRef(null),f=R.useRef(null),[p,m]=R.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));R.useEffect(()=>{const y=document.documentElement,v=()=>{const N=y.getAttribute("data-theme")==="light"||y.classList.contains("light");m(N)};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),R.useEffect(()=>{const y=a.current;if(!y)return;const v=re.context(()=>{const b=n.current.querySelectorAll(".about-word");re.set(b,{opacity:0,y:65,rotateX:-65}),re.set([t.current,i.current,s.current,c.current],{opacity:0}),re.set(i.current,{y:28}),re.set(s.current,{y:22}),re.set(c.current,{x:110,scale:.82,rotation:12}),re.timeline({scrollTrigger:{trigger:y,start:"top 75%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,duration:.6,ease:"power3.out"}).to(b,{opacity:1,y:0,rotateX:0,duration:.85,stagger:.055,ease:"power4.out"},"-=0.25").to(i.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.4").to(s.current,{opacity:1,y:0,duration:.65,ease:"power3.out"},"-=0.3").to(c.current,{opacity:1,x:0,scale:1,rotation:0,duration:1.35,ease:"expo.out"},"-=0.95"),re.to(f.current,{rotation:360,duration:30,repeat:-1,ease:"none"}),re.to(d.current,{scale:1.06,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.to(c.current,{y:-75,ease:"none",scrollTrigger:{trigger:y,start:"top bottom",end:"bottom top",scrub:1.5}});const w=k=>{const C=y.getBoundingClientRect(),A=((k.clientX-C.left)/C.width-.5)*2,E=((k.clientY-C.top)/C.height-.5)*2;re.to(c.current,{x:A*10,y:E*10,duration:1.1,ease:"power3.out"})};return y.addEventListener("mousemove",w),()=>{y.removeEventListener("mousemove",w)}},y);return()=>v.revert()},[]);const g=["Printing","Solutions","That","Build","Brands","That","Stand","Out"];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

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
                      `})}),o.jsx("text",{children:o.jsx("textPath",{href:"#fairdealTextCircle",startOffset:"0%",children:"PRINTING • PACKAGING • QUALITY • SERVICE •"})})]})}),o.jsx("div",{className:"center-orbit"}),o.jsx("div",{ref:d,className:"center-logo",children:o.jsx("img",{src:e3,alt:"Fairdeal Print Pack India Pvt. Ltd.",className:"fairdeal-logo"})}),o.jsxs("div",{className:"visual-small-text",children:[o.jsx("span",{children:"36+"})," YEARS OF TRUST"]})]}),o.jsx("div",{className:"corner-line"})]})]})})]})},r3="/boltfaredeal/assets/vision-ERx-ZeWE.jpg",n3="/boltfaredeal/assets/mission-bV1jvH6z.jpg";re.registerPlugin(Pe);const i3=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null),i=R.useRef(null),s=R.useRef(null),c=R.useRef(null),d=R.useRef(null),f=R.useRef(null),p=R.useRef(null),[m,g]=R.useState(!1);return R.useEffect(()=>{const y=document.documentElement,v=()=>{const N=y.getAttribute("data-theme")==="light"||y.classList.contains("light");g(N)};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),R.useLayoutEffect(()=>{const y=a.current;if(!y)return;const v=re.context(()=>{const b=c.current?.querySelectorAll(".fd-reveal"),N=d.current?.querySelectorAll(".fd-reveal");re.set([i.current,s.current],{scale:1.12,clipPath:"inset(0 100% 0 0)"}),re.set([...b||[],...N||[]],{opacity:0,y:28}),re.set([f.current,p.current],{scaleX:0,transformOrigin:"left center"}),re.timeline({scrollTrigger:{trigger:t.current,start:"top 78%",toggleActions:"play none none reverse"}}).to(f.current,{scaleX:1,duration:.7,ease:"power3.out"}).to(i.current,{clipPath:"inset(0 0% 0 0)",scale:1,duration:1.2,ease:"power4.inOut"},"-=0.35").to(b,{opacity:1,y:0,duration:.65,stagger:.08,ease:"power3.out"},"-=0.75"),re.timeline({scrollTrigger:{trigger:n.current,start:"top 78%",toggleActions:"play none none reverse"}}).to(p.current,{scaleX:1,duration:.7,ease:"power3.out"}).to(s.current,{clipPath:"inset(0 0% 0 0)",scale:1,duration:1.2,ease:"power4.inOut"},"-=0.35").to(N,{opacity:1,y:0,duration:.65,stagger:.08,ease:"power3.out"},"-=0.75"),re.to(i.current,{yPercent:-5,ease:"none",scrollTrigger:{trigger:t.current,start:"top bottom",end:"bottom top",scrub:!0}}),re.to(s.current,{yPercent:-5,ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:!0}}),re.to(".fd-floating-dot",{y:12,repeat:-1,yoyo:!0,duration:2.2,ease:"sine.inOut"}),re.to(".fd-grid-mark",{rotate:90,repeat:-1,duration:12,ease:"none"}),Pe.refresh()},y);return()=>v.revert()},[]),o.jsxs(o.Fragment,{children:[o.jsxs("section",{ref:a,className:`fd-direction ${m?"fd-light":"fd-dark"}`,children:[o.jsx("div",{className:"fd-bg-grid"}),o.jsx("div",{className:"fd-bg-glow fd-glow-one"}),o.jsx("div",{className:"fd-bg-glow fd-glow-two"}),o.jsxs("div",{className:"fd-direction-shell",children:[o.jsxs("header",{className:"fd-direction-header",children:[o.jsxs("div",{className:"fd-header-left",children:[o.jsx("span",{className:"fd-header-index",children:"01 — 02"}),o.jsx("span",{className:"fd-header-line"}),o.jsx("span",{className:"fd-header-label",children:"OUR DIRECTION"})]}),o.jsxs("div",{className:"fd-header-right",children:[o.jsx("span",{children:"FAIRDEAL PRINT PACK"}),o.jsx("span",{className:"fd-floating-dot"})]})]}),o.jsxs("div",{className:"fd-intro",children:[o.jsx("div",{className:"fd-intro-number",children:"01"}),o.jsxs("div",{className:"fd-intro-copy",children:[o.jsx("p",{className:"fd-kicker",children:"VISION / MISSION"}),o.jsxs("h2",{children:["Built around people.",o.jsx("br",{}),"Driven by progress."]})]}),o.jsxs("div",{className:"fd-intro-note",children:[o.jsx("span",{}),o.jsx("p",{children:"A clear direction shaped by customer satisfaction, innovation and integrity."})]})]}),o.jsxs("article",{ref:t,className:"fd-story fd-vision",children:[o.jsx("div",{ref:f,className:"fd-story-rail"}),o.jsxs("div",{className:"fd-story-meta",children:[o.jsx("span",{children:"01"}),o.jsx("span",{className:"fd-meta-line"}),o.jsx("span",{children:"VISION"})]}),o.jsxs("div",{className:"fd-story-image",children:[o.jsx("div",{className:"fd-image-number",children:"01"}),o.jsxs("div",{className:"fd-image-frame",children:[o.jsx("img",{ref:i,src:r3,alt:"Fairdeal printing vision"}),o.jsx("div",{className:"fd-image-overlay"}),o.jsx("div",{className:"fd-image-caption",children:"FAIRDEAL / VISION"}),o.jsx("div",{className:"fd-image-corner fd-corner-tl"}),o.jsx("div",{className:"fd-image-corner fd-corner-br"})]})]}),o.jsxs("div",{ref:c,className:"fd-story-content",children:[o.jsx("p",{className:"fd-reveal fd-section-label",children:"OUR VISION"}),o.jsxs("h3",{className:"fd-reveal",children:["Our ",o.jsx("span",{children:"Vision"})]}),o.jsx("p",{className:"fd-reveal fd-main-copy",children:"Customer satisfaction and employee empowerment in tandem with innovation and excellence, to work together with our customers to help them achieve their goals."}),o.jsxs("div",{className:"fd-reveal fd-highlight",children:[o.jsx("span",{className:"fd-highlight-mark"}),o.jsx("p",{children:"Our success lies in your success."})]}),o.jsx("p",{className:"fd-reveal fd-secondary-copy",children:"Honesty, integrity, dedication and commitment will always be our priority and trademark. Dignity and respect are our guiding principles in every deal with customers and suppliers."}),o.jsxs("div",{className:"fd-reveal fd-values",children:[o.jsx("span",{children:"Customer Satisfaction"}),o.jsx("span",{children:"Innovation"}),o.jsx("span",{children:"Integrity"}),o.jsx("span",{children:"Commitment"})]})]})]}),o.jsxs("div",{className:"fd-mid-divider",children:[o.jsx("span",{}),o.jsx("span",{children:"FAIRDEAL / 02"}),o.jsx("span",{})]}),o.jsxs("article",{ref:n,className:"fd-story fd-mission",children:[o.jsx("div",{ref:p,className:"fd-story-rail"}),o.jsxs("div",{className:"fd-story-meta",children:[o.jsx("span",{children:"02"}),o.jsx("span",{className:"fd-meta-line"}),o.jsx("span",{children:"MISSION"})]}),o.jsxs("div",{ref:d,className:"fd-story-content",children:[o.jsx("p",{className:"fd-reveal fd-section-label",children:"OUR MISSION"}),o.jsxs("h3",{className:"fd-reveal",children:["Our ",o.jsx("span",{children:"Mission"})]}),o.jsx("p",{className:"fd-reveal fd-main-copy",children:"To provide exceptional printing service by pursuing business through innovation and creativity that exceeds the expectations of our esteemed customers."}),o.jsxs("div",{className:"fd-reveal fd-statement",children:[o.jsx("span",{className:"fd-statement-line"}),o.jsx("p",{children:"QUALITY • INNOVATION • SERVICE"})]}),o.jsxs("div",{className:"fd-reveal fd-values fd-mission-values",children:[o.jsx("span",{children:"Exceptional Service"}),o.jsx("span",{children:"Innovation"}),o.jsx("span",{children:"Creativity"}),o.jsx("span",{children:"Customer Focus"})]}),o.jsxs("div",{className:"fd-reveal fd-highlight fd-mission-highlight",children:[o.jsx("span",{className:"fd-highlight-mark"}),o.jsx("p",{children:"Exceeding expectations through innovation and creativity."})]})]}),o.jsxs("div",{className:"fd-story-image",children:[o.jsx("div",{className:"fd-image-number",children:"02"}),o.jsxs("div",{className:"fd-image-frame",children:[o.jsx("img",{ref:s,src:n3,alt:"Fairdeal printing mission"}),o.jsx("div",{className:"fd-image-overlay"}),o.jsx("div",{className:"fd-image-caption",children:"FAIRDEAL / MISSION"}),o.jsx("div",{className:"fd-image-corner fd-corner-tl"}),o.jsx("div",{className:"fd-image-corner fd-corner-br"})]})]})]}),o.jsxs("div",{className:"fd-bottom-mark",children:[o.jsxs("div",{className:"fd-grid-mark",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]}),o.jsx("p",{children:"PRINTING WITH PURPOSE"}),o.jsx("div",{className:"fd-bottom-line"})]})]})]}),o.jsx("style",{children:`
        /* =====================================================
           FAIRDEAL DESIGN TOKENS
        ===================================================== */

        .fd-direction {
          --fd-bg: #05090B;
          --fd-panel: #0C1419;
          --fd-panel-2: #111B21;

          --fd-yellow: #FFDF00;
          --fd-mint: #8FE7C8;

          --fd-white: #F5F7F8;
          --fd-gray: #98A1B1;

          --fd-border: rgba(245, 247, 248, 0.11);
          --fd-border-soft: rgba(245, 247, 248, 0.06);

          position: relative;
          width: 100%;
          overflow: hidden;

          background: var(--fd-bg);
          color: var(--fd-white);
        }

        /* =====================================================
           LIGHT THEME
        ===================================================== */

        .fd-direction.fd-light {
          --fd-bg: #F4F7F6;
          --fd-panel: #FFFFFF;
          --fd-panel-2: #EEF2F1;

          --fd-yellow: #A78E00;
          --fd-mint: #168B68;

          --fd-white: #101518;
          --fd-gray: #56616D;

          --fd-border: rgba(5, 9, 11, 0.12);
          --fd-border-soft: rgba(5, 9, 11, 0.07);
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .fd-bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.32;

          background-image:
            linear-gradient(
              rgba(143, 231, 200, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(143, 231, 200, 0.035) 1px,
              transparent 1px
            );

          background-size: 80px 80px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 80%,
            transparent
          );
        }

        .fd-bg-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
          opacity: 0.07;
        }

        .fd-glow-one {
          top: 8%;
          right: -180px;
          background: var(--fd-mint);
        }

        .fd-glow-two {
          top: 54%;
          left: -220px;
          background: var(--fd-yellow);
          opacity: 0.045;
        }

        /* =====================================================
           SHELL
        ===================================================== */

        .fd-direction-shell {
          position: relative;
          z-index: 2;

          width: min(
            1180px,
            calc(100% - 48px)
          );

          margin: 0 auto;
          padding: 90px 0 70px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .fd-direction-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          min-height: 42px;

          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);

          color: var(--fd-gray);

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-header-left,
        .fd-header-right {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .fd-header-index {
          color: var(--fd-yellow);
        }

        .fd-header-line {
          width: 28px;
          height: 1px;
          background: var(--fd-border);
        }

        .fd-floating-dot {
          display: block;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--fd-mint);

          box-shadow:
            0 0 14px rgba(143, 231, 200, 0.65);
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .fd-intro {
          display: grid;
          grid-template-columns: 90px 1fr 250px;
          gap: 35px;
          align-items: end;

          padding: 90px 0 95px;
        }

        .fd-intro-number {
          align-self: start;

          font-size: clamp(60px, 9vw, 112px);
          font-weight: 800;
          line-height: 0.8;

          letter-spacing: -0.08em;

          color: transparent;

          -webkit-text-stroke: 1px
            rgba(143, 231, 200, 0.25);
        }

        .fd-intro-copy {
          max-width: 620px;
        }

        .fd-kicker {
          margin: 0 0 18px;

          color: var(--fd-mint);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .fd-intro-copy h2 {
          margin: 0;

          font-size: clamp(28px, 4.2vw, 54px);
          font-weight: 500;
          line-height: 1.05;

          letter-spacing: -0.045em;
        }

        .fd-intro-note {
          display: flex;
          gap: 13px;
          align-items: flex-start;

          padding-bottom: 4px;
        }

        .fd-intro-note span {
          flex: 0 0 auto;

          width: 24px;
          height: 1px;

          margin-top: 7px;

          background: var(--fd-yellow);
        }

        .fd-intro-note p {
          margin: 0;

          color: var(--fd-gray);

          font-size: 11px;
          line-height: 1.7;
        }

        /* =====================================================
           STORY
        ===================================================== */

        .fd-story {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(90px, 0.55fr)
            minmax(330px, 1.2fr)
            minmax(360px, 1fr);

          column-gap: 42px;

          padding: 28px 0 70px;

          border-top: 1px solid var(--fd-border);

          isolation: isolate;
        }

        .fd-story-rail {
          position: absolute;

          top: -1px;
          left: 0;

          width: 125px;
          height: 2px;

          background: linear-gradient(
            90deg,
            var(--fd-yellow),
            var(--fd-mint)
          );
        }

        .fd-story-meta {
          display: flex;
          align-items: center;
          gap: 12px;

          color: var(--fd-gray);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .fd-story-meta > span:first-child {
          color: var(--fd-yellow);
        }

        .fd-meta-line {
          width: 25px;
          height: 1px;

          background: var(--fd-border);
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .fd-story-image {
          position: relative;

          padding-top: 22px;
        }

        .fd-image-frame {
          position: relative;

          overflow: hidden;

          background: var(--fd-panel);

          border: 1px solid var(--fd-border);
        }

        .fd-image-frame img {
          display: block;

          width: 100%;
          height: auto;

          min-height: 330px;

          object-fit: cover;

          transform-origin: center center;
          will-change: transform;
        }

        .fd-image-overlay {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              transparent 50%,
              rgba(5, 9, 11, 0.66)
            ),
            linear-gradient(
              90deg,
              rgba(5, 9, 11, 0.12),
              transparent
            );
        }

        .fd-image-caption {
          position: absolute;

          bottom: 17px;
          left: 18px;

          color: var(--fd-white);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .fd-image-number {
          position: absolute;

          z-index: 3;

          top: 4px;
          right: 14px;

          color: var(--fd-yellow);

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .fd-image-corner {
          position: absolute;
          z-index: 3;

          width: 17px;
          height: 17px;

          pointer-events: none;
        }

        .fd-corner-tl {
          top: 10px;
          left: 10px;

          border-top: 1px solid var(--fd-mint);
          border-left: 1px solid var(--fd-mint);
        }

        .fd-corner-br {
          right: 10px;
          bottom: 10px;

          border-right: 1px solid var(--fd-yellow);
          border-bottom: 1px solid var(--fd-yellow);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .fd-story-content {
          align-self: center;

          max-width: 500px;

          padding-top: 22px;
        }

        .fd-section-label {
          margin: 0 0 15px;

          color: var(--fd-mint);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-story-content h3 {
          margin: 0 0 24px;

          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;

          letter-spacing: 0.02em;

          color: var(--fd-white);
        }

        .fd-story-content h3 span {
          color: var(--fd-yellow);
        }

        .fd-main-copy {
          margin: 0;

          color: var(--fd-white);

          font-size: 15px;
          font-weight: 400;
          line-height: 1.85;
        }

        .fd-secondary-copy {
          margin: 20px 0 0;

          color: var(--fd-gray);

          font-size: 12px;
          line-height: 1.8;
        }

        /* =====================================================
           HIGHLIGHT
        ===================================================== */

        .fd-highlight {
          display: flex;
          align-items: stretch;
          gap: 13px;

          margin: 25px 0;
        }

        .fd-highlight-mark {
          flex: 0 0 2px;

          background: var(--fd-yellow);
        }

        .fd-highlight p {
          margin: 0;

          color: var(--fd-white);

          font-size: 13px;
          font-weight: 600;
          line-height: 1.55;
        }

        /* =====================================================
           VALUES
        ===================================================== */

        .fd-values {
          display: flex;
          flex-wrap: wrap;
          gap: 0;

          margin-top: 27px;

          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-values span {
          position: relative;

          padding: 12px 16px 12px 0;
          margin-right: 16px;

          color: var(--fd-gray);

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .fd-values span:not(:last-child)::after {
          content: "";

          position: absolute;

          top: 50%;
          right: 6px;

          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: var(--fd-yellow);

          transform: translateY(-50%);
        }

        /* =====================================================
           MISSION LAYOUT
        ===================================================== */

        .fd-mission {
          grid-template-columns:
            minmax(90px, 0.55fr)
            minmax(360px, 1fr)
            minmax(330px, 1.2fr);
        }

        .fd-mission .fd-story-content {
          order: 2;
        }

        .fd-mission .fd-story-image {
          order: 3;
        }

        .fd-mission .fd-story-meta {
          order: 1;
        }

        .fd-mission-values {
          margin-top: 25px;
        }

        .fd-statement {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-top: 25px;
          padding: 14px 0;

          border-top: 1px solid var(--fd-border);
          border-bottom: 1px solid var(--fd-border);
        }

        .fd-statement-line {
          width: 28px;
          height: 2px;

          flex: 0 0 auto;

          background: var(--fd-yellow);
        }

        .fd-statement p {
          margin: 0;

          color: var(--fd-white);

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .fd-mission-highlight {
          margin-top: 26px;
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .fd-mid-divider {
          display: grid;

          grid-template-columns: 1fr auto 1fr;
          gap: 20px;

          align-items: center;

          margin: 0 0 25px;

          color: var(--fd-gray);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .fd-mid-divider span:first-child,
        .fd-mid-divider span:last-child {
          height: 1px;

          background: var(--fd-border-soft);
        }

        /* =====================================================
           BOTTOM MARK
        ===================================================== */

        .fd-bottom-mark {
          display: grid;

          grid-template-columns: 30px auto 1fr;
          gap: 15px;

          align-items: center;

          padding-top: 25px;

          border-top: 1px solid var(--fd-border);
        }

        .fd-bottom-mark p {
          margin: 0;

          color: var(--fd-gray);

          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .fd-bottom-line {
          height: 1px;

          background: linear-gradient(
            90deg,
            var(--fd-border),
            transparent
          );
        }

        .fd-grid-mark {
          display: grid;

          grid-template-columns: repeat(2, 5px);
          grid-template-rows: repeat(2, 5px);

          gap: 3px;

          transform-origin: center;
        }

        .fd-grid-mark span {
          display: block;

          width: 5px;
          height: 5px;

          background: var(--fd-mint);
        }

        .fd-grid-mark span:nth-child(2),
        .fd-grid-mark span:nth-child(3) {
          background: var(--fd-yellow);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 980px) {
          .fd-direction-shell {
            width: min(
              100% - 36px,
              760px
            );

            padding-top: 65px;
          }

          .fd-intro {
            grid-template-columns: 60px 1fr;
            gap: 25px;

            padding: 70px 0;
          }

          .fd-intro-note {
            grid-column: 2;
            max-width: 300px;
          }

          .fd-story,
          .fd-mission {
            grid-template-columns: 55px 1fr;

            gap: 25px;
          }

          .fd-story-meta {
            grid-column: 1;
          }

          .fd-story-image,
          .fd-story-content,
          .fd-mission .fd-story-image,
          .fd-mission .fd-story-content {
            grid-column: 2;
          }

          .fd-story-image,
          .fd-mission .fd-story-image {
            order: initial;
          }

          .fd-story-content,
          .fd-mission .fd-story-content {
            order: initial;
          }

          .fd-image-frame img {
            min-height: 380px;
          }

          .fd-story-content {
            max-width: 620px;
          }

          .fd-story-rail {
            width: 90px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .fd-direction-shell {
            width: calc(100% - 28px);

            padding: 42px 0 45px;
          }

          .fd-direction-header {
            min-height: 38px;

            font-size: 7px;
            letter-spacing: 0.12em;
          }

          .fd-header-line {
            width: 18px;
          }

          .fd-header-right {
            display: none;
          }

          .fd-intro {
            display: block;

            padding: 55px 0 58px;
          }

          .fd-intro-number {
            margin-bottom: 20px;

            font-size: 58px;
          }

          .fd-kicker {
            margin-bottom: 13px;
          }

          .fd-intro-copy h2 {
            font-size: 29px;
            line-height: 1.08;
          }

          .fd-intro-note {
            margin-top: 24px;
          }

          .fd-story,
          .fd-mission {
            display: flex;
            flex-direction: column;

            gap: 0;

            padding: 22px 0 48px;
          }

          .fd-story-rail {
            width: 72px;
          }

          .fd-story-meta {
            order: 1;

            margin-bottom: 22px;
          }

          .fd-story-image,
          .fd-mission .fd-story-image {
            order: 2;

            width: 100%;

            padding-top: 0;
            margin-bottom: 30px;
          }

          .fd-story-content,
          .fd-mission .fd-story-content {
            order: 3;

            width: 100%;

            padding-top: 0;
          }

          .fd-image-number {
            top: -2px;
            right: 8px;
          }

          /*
             IMPORTANT:
             No forced mobile cropping.
             The image keeps its natural aspect ratio.
          */

          .fd-image-frame img {
            width: 100%;
            height: auto;
            min-height: 0;

            object-fit: contain;
          }

          .fd-image-caption {
            bottom: 12px;
            left: 13px;

            font-size: 7px;
          }

          .fd-story-content h3 {
            margin-bottom: 18px;

            font-size: 14px;
          }

          .fd-main-copy {
            font-size: 13px;
            line-height: 1.75;
          }

          .fd-secondary-copy {
            font-size: 11px;
            line-height: 1.75;
          }

          .fd-highlight {
            margin: 20px 0;
          }

          .fd-highlight p {
            font-size: 12px;
          }

          .fd-values {
            display: block;
          }

          .fd-values span {
            display: inline-block;

            padding: 10px 15px 10px 0;

            font-size: 8px;
          }

          .fd-values span:not(:last-child)::after {
            right: 5px;
          }

          .fd-statement p {
            font-size: 8px;
            letter-spacing: 0.11em;
          }

          .fd-mid-divider {
            gap: 10px;

            font-size: 7px;
          }

          .fd-bottom-mark {
            grid-template-columns: 24px auto;

            padding-top: 20px;
          }

          .fd-bottom-line {
            display: none;
          }

          .fd-bg-grid {
            background-size: 55px 55px;
          }
        }

        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 390px) {
          .fd-direction-shell {
            width: calc(100% - 22px);
          }

          .fd-intro-copy h2 {
            font-size: 26px;
          }

          .fd-story-content h3 {
            font-size: 14px;
          }

          .fd-main-copy {
            font-size: 12.5px;
          }

          .fd-image-corner {
            width: 12px;
            height: 12px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .fd-direction *,
          .fd-direction *::before,
          .fd-direction *::after {
            scroll-behavior: auto !important;
          }
        }
      `})]})};re.registerPlugin(Pe);const a3=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null),i=R.useRef(null),s=R.useRef(null),c=R.useRef(null),d=R.useRef(null),f=R.useRef(null),p=R.useRef([]),[m,g]=R.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));R.useEffect(()=>{const v=document.documentElement,b=()=>{const w=v.getAttribute("data-theme")==="light"||v.classList.contains("light");g(w)};b();const N=new MutationObserver(b);return N.observe(v,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>N.disconnect()},[]),R.useEffect(()=>{const v=a.current;if(!v)return;const b=re.context(()=>{const N=d.current.querySelectorAll(".values-card"),w=i.current.querySelectorAll(".values-word");re.set(t.current,{opacity:0,scale:.75,x:-80}),re.set(n.current,{opacity:0,x:-30}),re.set(w,{opacity:0,y:80,rotateX:-75}),re.set(s.current,{opacity:0,y:35}),re.set(c.current,{scaleX:0,transformOrigin:"left center"}),re.set(N,{opacity:0,y:70,rotateY:12}),re.set(f.current,{opacity:0,y:40}),re.set(p.current,{opacity:0,scale:0,rotation:-90}),re.timeline({scrollTrigger:{trigger:v,start:"top 72%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:.08,scale:1,x:0,duration:1,ease:"expo.out"}).to(n.current,{opacity:1,x:0,duration:.6,ease:"power3.out"},"-=0.65").to(w,{opacity:1,y:0,rotateX:0,duration:.8,stagger:.08,ease:"power4.out"},"-=0.25").to(s.current,{opacity:1,y:0,duration:.7,ease:"power3.out"},"-=0.35").to(c.current,{scaleX:1,duration:1,ease:"expo.out"},"-=0.25").to(N,{opacity:1,y:0,rotateY:0,duration:.8,stagger:.13,ease:"power4.out"},"-=0.5").to(p.current,{opacity:1,scale:1,rotation:0,duration:.7,stagger:.1,ease:"back.out(2)"},"-=0.5").to(f.current,{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.35"),re.to(t.current,{y:-25,duration:4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),p.current.forEach((A,E)=>{re.to(A,{rotation:E%2===0?180:-180,duration:8+E,repeat:-1,ease:"none"})}),re.to(t.current,{y:-100,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.5}}),re.to(d.current,{y:-45,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.2}});const C=A=>{const E=v.getBoundingClientRect(),j=((A.clientX-E.left)/E.width-.5)*2,P=((A.clientY-E.top)/E.height-.5)*2;re.to(".values-content",{x:j*5,y:P*3,duration:1,ease:"power3.out"}),re.to(".values-number",{x:j*-10,duration:1.2,ease:"power3.out"})};return v.addEventListener("mousemove",C),()=>{v.removeEventListener("mousemove",C)}},v);return()=>b.revert()},[]);const y=[{number:"01",title:"Respect",text:"We treat our customers, employees and business partners with respect, dignity and professionalism.",icon:"↗"},{number:"02",title:"Honesty",text:"Honesty and transparency guide the way we communicate, work and build lasting relationships.",icon:"◇"},{number:"03",title:"Integrity",text:"We maintain strong ethical standards and remain committed to doing the right thing in every situation.",icon:"◎"},{number:"04",title:"Business Ethics",text:"We integrate responsible business ethics into every aspect of our operations and customer relationships.",icon:"✦"}];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

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

      `}),o.jsxs("section",{ref:a,className:`fairdeal-values ${m?"light-mode":""}`,children:[o.jsx("div",{className:"values-grid"}),o.jsx("div",{className:"values-glow"}),o.jsx("div",{ref:t,className:"values-number",children:"03"}),o.jsx("div",{className:"values-plus values-plus-1"}),o.jsx("div",{className:"values-plus values-plus-2"}),o.jsx("div",{className:"values-plus values-plus-3"}),o.jsxs("div",{className:"values-container",children:[o.jsxs("div",{className:"values-content",children:[o.jsxs("div",{ref:n,className:"values-label",children:[o.jsx("span",{className:"values-label-line"}),o.jsx("span",{className:"values-number-small",children:"03"}),o.jsx("span",{children:"—"}),o.jsx("span",{children:"CORE VALUES"})]}),o.jsxs("h2",{ref:i,className:"values-title",children:[o.jsx("span",{className:"values-word",children:"What"}),o.jsx("span",{className:"values-word",children:"We Believe"})]}),o.jsxs("p",{ref:s,className:"values-description",children:["We believe in treating our customers with"," ",o.jsx("strong",{children:"respect and faith."})," We integrate honesty, integrity and business ethics into every aspect of our business functioning."]}),o.jsx("div",{ref:c,className:"values-line"})]}),o.jsx("div",{ref:d,className:"values-cards",children:y.map((v,b)=>o.jsxs("div",{className:"values-card",children:[o.jsx("div",{className:"values-card-number",children:v.number}),o.jsx("div",{ref:N=>{p.current[b]=N},className:"values-card-icon",children:v.icon}),o.jsx("h3",{className:"values-card-title",children:v.title}),o.jsx("p",{className:"values-card-text",children:v.text})]},v.number))}),o.jsxs("div",{ref:f,className:"values-bottom",children:[o.jsxs("div",{children:[o.jsx("div",{className:"values-quote-label",children:"OUR PRINCIPLE"}),o.jsxs("p",{className:"values-quote",children:[o.jsx("span",{children:"Integrity"})," in every interaction."]})]}),o.jsx("p",{className:"values-footer-text",children:"These principles shape how we work, communicate and build long-term relationships with our customers, employees and business partners."})]})]})]})]})},s3="/boltfaredeal/assets/goal-K4Jdav5X.jpg";re.registerPlugin(Pe);const o3=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null),i=R.useRef(null),s=R.useRef(null),c=R.useRef(null),d=R.useRef(null),f=R.useRef(null),p=R.useRef(null),[m,g]=R.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));R.useEffect(()=>{const v=document.documentElement,b=()=>{const w=v.getAttribute("data-theme")==="light"||v.classList.contains("light");g(w)};b();const N=new MutationObserver(b);return N.observe(v,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>N.disconnect()},[]),R.useEffect(()=>{const v=a.current;if(!v)return;const b=re.context(()=>{const N=n.current.querySelectorAll(".goal-word"),w=f.current.querySelectorAll(".goal-feature");re.set(N,{y:80,opacity:0,rotateX:-70}),re.set([t.current,i.current,c.current,d.current,f.current],{opacity:0}),re.set(t.current,{x:-30}),re.set(i.current,{y:30}),re.set(c.current,{x:100,scale:.82,rotate:5}),re.set(d.current,{scale:.6,rotate:-10}),re.set(w,{y:25,opacity:0}),re.timeline({scrollTrigger:{trigger:v,start:"top 72%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,x:0,duration:.6,ease:"power3.out"}).to(N,{y:0,opacity:1,rotateX:0,duration:.85,stagger:.07,ease:"power4.out"},"-=0.2").to(i.current,{y:0,opacity:1,duration:.75,ease:"power3.out"},"-=0.35").to(c.current,{x:0,opacity:1,scale:1,rotate:0,duration:1.3,ease:"expo.out"},"-=0.9").to(d.current,{opacity:1,scale:1,rotate:0,duration:.8,ease:"back.out(1.7)"},"-=0.65").to(f.current,{opacity:1,duration:.2},"-=0.3").to(w,{y:0,opacity:1,duration:.55,stagger:.12,ease:"power3.out"},"-=0.1"),re.to(c.current,{y:-12,duration:3.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.to(p.current,{rotation:360,duration:24,repeat:-1,ease:"none"}),re.to(d.current,{y:-10,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.to(c.current,{y:-90,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.5}});const C=A=>{const E=v.getBoundingClientRect(),j=((A.clientX-E.left)/E.width-.5)*2,P=((A.clientY-E.top)/E.height-.5)*2;re.to(c.current,{x:j*12,y:P*8,duration:1,ease:"power3.out"}),re.to(d.current,{x:j*-8,y:P*-5,duration:1.2,ease:"power3.out"})};return v.addEventListener("mousemove",C),()=>{v.removeEventListener("mousemove",C)}},v);return()=>b.revert()},[]);const y=["Our","Goal"];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

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

          --goal-border:
            rgba(255,255,255,0.08);

          position: relative;

          width: 100%;

          min-height: 100vh;

          overflow: hidden;

          background:
            var(--goal-bg);

          color:
            var(--goal-white);

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

        .fairdeal-goal.light-mode {

          --goal-bg: #F5F7F8;
          --goal-panel: #FFFFFF;
          --goal-panel-2: #EEF2F1;

          --goal-yellow: #C9AE00;
          --goal-mint: #128C68;

          --goal-white: #101518;
          --goal-gray: #56616D;
          --goal-muted: #7B858F;

          --goal-border:
            rgba(5,9,11,0.09);

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

          transform:
            translateY(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,223,0,0.07),
              rgba(143,231,200,0.025),
              transparent 70%
            );

          filter:
            blur(30px);

          pointer-events:
            none;

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

          background-size:
            90px 90px;

          opacity:
            0.35;

          pointer-events:
            none;

        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .goal-container {

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

          display:
            grid;

          grid-template-columns:
            48% 52%;

          align-items:
            center;

          gap:
            30px;

          padding:
            90px 0;

        }


        /* =====================================================
           LEFT
        ===================================================== */

        .goal-content {

          max-width:
            650px;

        }


        /* =====================================================
           LABEL
        ===================================================== */

        .goal-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            28px;

          color:
            var(--goal-mint);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.24em;

          text-transform:
            uppercase;

        }


        .goal-label-line {

          width:
            42px;

          height:
            2px;

          background:
            var(--goal-yellow);

        }


        .goal-number {

          color:
            var(--goal-yellow);

        }


        /* =====================================================
           TITLE
        ===================================================== */

        .goal-title {

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
            0.86;

          letter-spacing:
            -0.065em;

          font-weight:
            650;

          perspective:
            1000px;

        }


        .goal-word {

          display:
            inline-block;

          transform-origin:
            center bottom;

          will-change:
            transform,
            opacity;

        }


        .goal-word:nth-child(1) {

          color:
            var(--goal-white);

        }


        .goal-word:nth-child(2) {

          color:
            var(--goal-mint);

        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .goal-description {

          max-width:
            620px;

          margin-top:
            40px;

          color:
            var(--goal-gray);

          font-size:
            18px;

          line-height:
            1.75;

          letter-spacing:
            -0.015em;

        }


        .goal-description strong {

          color:
            var(--goal-white);

        }


        /* =====================================================
           UNDERLINE
        ===================================================== */

        .goal-line {

          display:
            flex;

          align-items:
            center;

          width:
            290px;

          height:
            3px;

          margin-top:
            42px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

        }


        .goal-line-yellow {

          width:
            55px;

          height:
            100%;

          background:
            var(--goal-yellow);

        }


        .goal-line-mint {

          width:
            70px;

          height:
            100%;

          background:
            var(--goal-mint);

        }


        /* =====================================================
           FEATURES
        ===================================================== */

        .goal-features {

          display:
            flex;

          align-items:
            center;

          margin-top:
            45px;

        }


        .goal-feature {

          min-width:
            125px;

          padding:
            0 25px;

          text-align:
            center;

        }


        .goal-feature:first-child {

          padding-left:
            0;

        }


        .goal-feature:not(:last-child) {

          border-right:
            1px solid
            var(--goal-border);

        }


        .goal-feature-icon {

          width:
            50px;

          height:
            50px;

          margin:
            0 auto 14px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            var(--goal-border);

          border-radius:
            50%;

          color:
            var(--goal-yellow);

          font-size:
            19px;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease;

        }


        .goal-feature:nth-child(2)
        .goal-feature-icon {

          color:
            var(--goal-mint);

        }


        .goal-feature:hover
        .goal-feature-icon {

          transform:
            translateY(-5px)
            rotate(8deg);

          border-color:
            var(--goal-yellow);

        }


        .goal-feature-title {

          color:
            var(--goal-white);

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.18em;

          text-transform:
            uppercase;

        }


        /* =====================================================
           RIGHT VISUAL
        ===================================================== */

        .goal-visual {

          position:
            relative;

          min-height:
            620px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

        }


        /* =====================================================
           IMAGE COMPOSITION
        ===================================================== */

        .goal-image-wrap {

          position:
            relative;

          width:
            min(
              560px,
              100%
            );

          height:
            440px;

          transform:
            rotate(-3deg);

          will-change:
            transform;

        }


        .goal-image-back {

          position:
            absolute;

          width:
            82%;

          height:
            100%;

          right:
            0;

          top:
            25px;

          border-radius:
            28px;

          background:
            var(--goal-yellow);

          transform:
            rotate(2deg);

          box-shadow:
            0 30px 80px
            rgba(255,223,0,0.12);

        }


        .goal-image {

          position:
            relative;

          z-index:
            2;

          width:
            86%;

          height:
            100%;

          margin-left:
            4%;

          overflow:
            hidden;

          border-radius:
            28px;

          border:
            1px solid
            rgba(
              255,
              223,
              0,
              0.55
            );

          background:
            var(--goal-panel);

          box-shadow:
            0 35px 90px
            rgba(0,0,0,0.4);

        }


        .goal-image img {

          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          display:
            block;

          transform:
            scale(1.06);

          filter:
            saturate(0.9)
            contrast(1.05);

          transition:
            transform 0.8s ease;

        }


        .goal-image-wrap:hover
        .goal-image img {

          transform:
            scale(1.12);

        }


        .goal-image-overlay {

          position:
            absolute;

          inset:
            0;

          z-index:
            3;

          background:
            linear-gradient(
              135deg,
              rgba(5,9,11,0.05),
              rgba(5,9,11,0.25)
            );

          pointer-events:
            none;

        }


        /* =====================================================
           BADGE
        ===================================================== */

        .goal-badge {

          position:
            absolute;

          z-index:
            5;

          right:
            -10px;

          bottom:
            -35px;

          width:
            220px;

          min-height:
            175px;

          padding:
            25px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          border:
            1px solid
            var(--goal-border);

          border-radius:
            22px;

          background:
            rgba(
              12,
              20,
              25,
              0.92
            );

          backdrop-filter:
            blur(18px);

          box-shadow:
            0 30px 70px
            rgba(0,0,0,0.4);

        }


        .light-mode
        .goal-badge {

          background:
            rgba(
              255,
              255,
              255,
              0.94
            );

        }


        .goal-target {

          width:
            48px;

          height:
            48px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          color:
            var(--goal-yellow);

          border:
            1px solid
            var(--goal-yellow);

          font-size:
            23px;

          margin-bottom:
            15px;

        }


        .goal-badge-small {

          color:
            var(--goal-muted);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.25em;

          text-transform:
            uppercase;

        }


        .goal-badge-title {

          margin-top:
            5px;

          color:
            var(--goal-white);

          font-size:
            14px;

          font-weight:
            800;

          letter-spacing:
            0.14em;

          line-height:
            1.5;

          text-transform:
            uppercase;

        }


        .goal-badge-title span {

          color:
            var(--goal-mint);

        }


        /* =====================================================
           ORBIT
        ===================================================== */

        .goal-orbit {

          position:
            absolute;

          width:
            580px;

          height:
            580px;

          border:
            1px solid
            rgba(
              143,
              231,
              200,
              0.12
            );

          border-radius:
            50%;

          pointer-events:
            none;

        }


        .goal-orbit::before {

          content:
            "";

          position:
            absolute;

          inset:
            35px;

          border:
            1px dashed
            rgba(
              255,
              223,
              0,
              0.10
            );

          border-radius:
            50%;

        }


        .goal-orbit::after {

          content:
            "";

          position:
            absolute;

          width:
            8px;

          height:
            8px;

          top:
            13%;

          right:
            19%;

          border-radius:
            50%;

          background:
            var(--goal-yellow);

          box-shadow:
            0 0 20px
            var(--goal-yellow);

        }


        /* =====================================================
           BRAND LABEL
        ===================================================== */

        .goal-brand {

          position:
            absolute;

          right:
            30px;

          bottom:
            20px;

          display:
            flex;

          align-items:
            center;

          gap:
            14px;

          color:
            var(--goal-mint);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.28em;

          text-transform:
            uppercase;

        }


        .goal-brand::before {

          content:
            "";

          width:
            60px;

          height:
            2px;

          background:
            var(--goal-yellow);

        }


        /* =====================================================
           LIGHT MODE IMAGE
        ===================================================== */

        .fairdeal-goal.light-mode
        .goal-image-back {

          opacity:
            0.8;

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .goal-container {

            width:
              min(
                calc(100% - 60px),
                850px
              );

            grid-template-columns:
              1fr;

            text-align:
              center;

          }


          .goal-content {

            margin:
              auto;

          }


          .goal-label {

            justify-content:
              center;

          }


          .goal-description {

            margin-left:
              auto;

            margin-right:
              auto;

          }


          .goal-line {

            margin-left:
              auto;

            margin-right:
              auto;

          }


          .goal-features {

            justify-content:
              center;

          }


          .goal-visual {

            min-height:
              550px;

          }


          .goal-orbit {

            width:
              500px;

            height:
              500px;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .goal-container {

            width:
              calc(100% - 36px);

            padding:
              75px 0;

          }


          .goal-label {

            font-size:
              9px;

          }


          .goal-title {

            font-size:
              60px;

            justify-content:
              center;

          }


          .goal-description {

            font-size:
              14px;

            line-height:
              1.75;

            margin-top:
              28px;

          }


          .goal-features {

            flex-wrap:
              wrap;

            gap:
              10px;

          }


          .goal-feature {

            min-width:
              95px;

            padding:
              0 14px;

          }


          .goal-feature-title {

            font-size:
              8px;

          }


          .goal-visual {

            min-height:
              430px;

          }


          .goal-image-wrap {

            width:
              100%;

            height:
              300px;

          }


          .goal-image-back {

            border-radius:
              20px;

          }


          .goal-image {

            border-radius:
              20px;

          }


          .goal-badge {

            right:
              -5px;

            bottom:
              -40px;

            width:
              170px;

            min-height:
              140px;

            padding:
              18px;

          }


          .goal-target {

            width:
              38px;

            height:
              38px;

            font-size:
              18px;

          }


          .goal-badge-title {

            font-size:
              10px;

          }


          .goal-orbit {

            width:
              350px;

            height:
              350px;

          }


          .goal-brand {

            right:
              0;

            bottom:
              0;

            font-size:
              7px;

          }


          .goal-brand::before {

            width:
              35px;

          }

        }

      `}),o.jsxs("section",{ref:a,className:`fairdeal-goal ${m?"light-mode":""}`,children:[o.jsx("div",{className:"goal-bg-glow"}),o.jsx("div",{className:"goal-grid"}),o.jsxs("div",{className:"goal-container",children:[o.jsxs("div",{className:"goal-content",children:[o.jsxs("div",{ref:t,className:"goal-label",children:[o.jsx("span",{className:"goal-label-line"}),o.jsx("span",{className:"goal-number",children:"04"}),o.jsx("span",{children:"—"}),o.jsx("span",{children:"THE GOAL"})]}),o.jsx("h2",{ref:n,className:"goal-title",children:y.map((v,b)=>o.jsx("span",{className:"goal-word",children:v},b))}),o.jsxs("p",{ref:i,className:"goal-description",children:["Delighted customers are key to our success, and we strive to achieve this key every second.",o.jsx("br",{}),o.jsx("br",{}),"Printing is our passion. No matter what your print need is,"," ",o.jsx("strong",{children:"Fairdeal Print Pack India Pvt. Ltd."})," has the most effective print solutions."]}),o.jsxs("div",{className:"goal-line",children:[o.jsx("span",{className:"goal-line-yellow"}),o.jsx("span",{className:"goal-line-mint"})]}),o.jsxs("div",{ref:f,className:"goal-features",children:[o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"✦"}),o.jsx("div",{className:"goal-feature-title",children:"Customer"})]}),o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"◇"}),o.jsx("div",{className:"goal-feature-title",children:"Quality"})]}),o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"◎"}),o.jsx("div",{className:"goal-feature-title",children:"Solutions"})]})]})]}),o.jsxs("div",{className:"goal-visual",children:[o.jsx("div",{ref:p,className:"goal-orbit"}),o.jsxs("div",{ref:c,className:"goal-image-wrap",children:[o.jsx("div",{className:"goal-image-back"}),o.jsxs("div",{className:"goal-image",children:[o.jsx("img",{ref:s,src:s3,alt:"Printing production"}),o.jsx("div",{className:"goal-image-overlay"})]}),o.jsxs("div",{ref:d,className:"goal-badge",children:[o.jsx("div",{className:"goal-target",children:"◎"}),o.jsx("div",{className:"goal-badge-small",children:"Our Goal"}),o.jsxs("div",{className:"goal-badge-title",children:["Experience ",o.jsx("br",{}),o.jsx("span",{children:"Quality"}),o.jsx("br",{}),"Commitment"]})]})]}),o.jsx("div",{className:"goal-brand",children:"FAIRDEAL PRINT PACK"})]})]})]})]})};re.registerPlugin(Pe);const l3=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null),i=R.useRef(null);return R.useEffect(()=>{const s=a.current,c=t.current;if(!s||!c)return;const d=re.context(()=>{re.utils.toArray(".fd-reveal").forEach(m=>{re.fromTo(m,{opacity:0,y:35},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),re.utils.toArray(".fd-reveal-left").forEach(m=>{re.fromTo(m,{opacity:0,x:-45},{opacity:1,x:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),re.utils.toArray(".fd-reveal-right").forEach(m=>{re.fromTo(m,{opacity:0,x:45},{opacity:1,x:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),re.fromTo(".fd-intro-line",{scaleX:0},{scaleX:1,duration:1.1,ease:"power3.inOut",scrollTrigger:{trigger:".fd-intro-section",start:"top 75%"}});const f=c.scrollWidth-window.innerWidth,p=re.to(c,{id:"fd-horizontal",x:-f,ease:"none",scrollTrigger:{trigger:".fd-story-wrapper",start:"top top",end:()=>`+=${f+window.innerHeight*1.8}`,pin:!0,scrub:1.2,anticipatePin:1,onUpdate:m=>{const g=m.progress;i.current&&re.to(i.current,{scaleX:g,duration:.15,overwrite:!0});const y=Math.round(1990+g*36);n.current&&(n.current.textContent=y)}}});re.utils.toArray(".fd-story-card").forEach(m=>{re.fromTo(m,{opacity:.25,scale:.96},{opacity:1,scale:1,duration:.8,ease:"power2.out",scrollTrigger:{trigger:m,containerAnimation:p,start:"left 85%",end:"left 45%",scrub:!0}})}),re.utils.toArray(".fd-counter").forEach(m=>{const g=Number(m.dataset.value),y={value:0};re.to(y,{value:g,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:m,start:"top 85%",once:!0},onUpdate:()=>{m.textContent=Math.floor(y.value).toLocaleString("en-IN")+"+"}})}),re.fromTo(".fd-quote-card",{opacity:0,y:45},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".fd-quote-section",start:"top 82%"}}),re.fromTo(".fd-quote-accent",{scaleX:0},{scaleX:1,duration:1,ease:"power3.inOut",scrollTrigger:{trigger:".fd-quote-section",start:"top 82%"}}),re.fromTo(".fd-vision-box",{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".fd-vision-section",start:"top 82%"}}),re.fromTo(".fd-founder-image-frame",{clipPath:"inset(12% 12% 12% 12%)",opacity:0},{clipPath:"inset(0% 0% 0% 0%)",opacity:1,duration:1.2,ease:"power3.inOut",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 82%",once:!0}}),re.fromTo(".fd-founder-image",{scale:1.18},{scale:1,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 80%",end:"bottom 30%",scrub:1}}),re.fromTo(".fd-founder-image-accent",{scaleX:0},{scaleX:1,duration:1,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 75%",once:!0}}),re.fromTo(".fd-founder-signature",{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-signature",start:"top 90%",once:!0}}),re.to(".fd-floating-circle",{y:-100,rotate:20,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:1}}),Pe.refresh()},s);return()=>d.revert()},[]),o.jsxs("section",{ref:a,className:"fd-from-desk",children:[o.jsx("div",{className:"fd-floating-circle fd-circle-one"}),o.jsx("div",{className:"fd-floating-circle fd-circle-two"}),o.jsxs("section",{className:"fd-intro-section",children:[o.jsxs("div",{className:"fd-intro-header",children:[o.jsxs("div",{className:"fd-intro-label fd-reveal-left",children:[o.jsx("span",{className:"fd-dot"}),"FROM MY DESK"]}),o.jsx("div",{className:"fd-intro-line"}),o.jsx("span",{className:"fd-intro-year fd-reveal-right",children:"EST. 1990"})]}),o.jsxs("div",{className:"fd-intro-grid",children:[o.jsx("div",{className:"fd-intro-title fd-reveal-left",children:o.jsxs("h2",{children:["From a humble",o.jsx("span",{children:" beginning."})]})}),o.jsxs("div",{className:"fd-intro-copy fd-reveal-right",children:[o.jsx("p",{children:"I first learned the art of printing while working with a photographer and established Fairdeal Advertising with manual screen printing in 1990."}),o.jsx("p",{children:"What began as a small venture has grown into a trusted printing and packaging organisation in Pune, powered by perseverance, design thinking and teamwork."})]})]}),o.jsxs("div",{className:"fd-intro-bottom",children:[o.jsxs("div",{className:"fd-small-stat fd-reveal",children:[o.jsx("strong",{children:o.jsx("span",{className:"fd-counter","data-value":"30",children:"0+"})}),o.jsx("span",{children:"YEARS OF EXPERIENCE"})]}),o.jsxs("div",{className:"fd-small-stat fd-reveal",children:[o.jsx("strong",{children:o.jsx("span",{className:"fd-counter","data-value":"1000",children:"0+"})}),o.jsx("span",{children:"CLIENTS ACROSS INDIA"})]}),o.jsxs("div",{className:"fd-small-description fd-reveal",children:[o.jsx("span",{children:"THE FOUNDATION"}),o.jsx("p",{children:"Quality. Honesty. Teamwork."})]})]})]}),o.jsxs("div",{className:"fd-story-wrapper",children:[o.jsxs("div",{className:"fd-story-topbar",children:[o.jsx("span",{children:"THE JOURNEY"}),o.jsx("div",{className:"fd-year-counter",children:o.jsx("span",{ref:n,children:"1990"})})]}),o.jsx("div",{className:"fd-progress",children:o.jsx("div",{ref:i,className:"fd-progress-fill"})}),o.jsxs("div",{ref:t,className:"fd-story-track",children:[o.jsxs("article",{className:"fd-story-card fd-story-start",children:[o.jsx("div",{className:"fd-card-number",children:"01"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"1990"}),o.jsxs("h3",{children:["A small beginning.",o.jsx("br",{}),"A bigger dream."]}),o.jsx("p",{children:"I first learned the art of printing while working with a photographer. That experience became the foundation for Fairdeal Advertising and its manual screen printing journey."})]}),o.jsxs("div",{className:"fd-card-marker",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"02"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE EARLY YEARS"}),o.jsxs("h3",{children:["Ten years",o.jsx("br",{}),"of learning."]}),o.jsx("p",{children:"The first decade was filled with difficulties, uncertainty and lessons. Every challenge taught us to become better, stronger and more disciplined."}),o.jsxs("div",{className:"fd-mini-highlight",children:[o.jsx("strong",{children:"10"}),o.jsx("span",{children:"years of persistence"})]})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-stat-card",children:[o.jsx("div",{className:"fd-card-number",children:"03"}),o.jsxs("div",{className:"fd-big-stat",children:[o.jsx("span",{className:"fd-stat-prefix",children:"OVER"}),o.jsx("strong",{className:"fd-stat-number",children:"30+"}),o.jsxs("span",{className:"fd-stat-label",children:["YEARS OF",o.jsx("br",{}),"EXPERIENCE"]})]}),o.jsx("p",{children:"Almost three decades of building, improving and moving forward with the same commitment to quality."})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"04"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"TODAY"}),o.jsxs("h3",{children:["1000+",o.jsx("br",{}),"happy clients."]}),o.jsx("p",{children:"What started as a humble printing operation has grown into a trusted organisation serving clients across the country."}),o.jsxs("div",{className:"fd-client-stat",children:[o.jsx("strong",{children:"1000+"}),o.jsxs("span",{children:["CLIENTS",o.jsx("br",{}),"ACROSS INDIA"]})]})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-values",children:[o.jsx("div",{className:"fd-card-number",children:"05"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"OUR FOUNDATION"}),o.jsxs("h3",{children:["Quality.",o.jsx("br",{}),"Honesty.",o.jsx("br",{}),"Teamwork."]}),o.jsx("p",{children:"These are not just words at Fairdeal. They are the principles that helped us overcome difficult times and continue to shape every decision we make."})]}),o.jsxs("div",{className:"fd-values-orbit",children:[o.jsx("span",{children:"QUALITY"}),o.jsx("span",{children:"HONESTY"}),o.jsx("span",{children:"TEAMWORK"})]})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"06"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE PEOPLE"}),o.jsxs("h3",{children:["Building",o.jsx("br",{}),"the right team."]}),o.jsx("p",{children:"Team-building has always been a critical factor of growth. Choosing people who believe in quality and share the organisation's values has been one of our greatest priorities."})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-team",children:[o.jsx("div",{className:"fd-card-number",children:"07"}),o.jsxs("div",{className:"fd-team-visual",children:[o.jsx("div",{className:"fd-team-ring ring-one"}),o.jsx("div",{className:"fd-team-ring ring-two"}),o.jsx("div",{className:"fd-team-ring ring-three"}),o.jsxs("div",{className:"fd-team-center",children:[o.jsx("span",{children:"FAIRDEAL"}),o.jsx("strong",{children:"FAMILY"})]})]}),o.jsxs("div",{className:"fd-team-text",children:[o.jsx("span",{children:"THE REAL SUCCESS"}),o.jsxs("h3",{children:["Fairdeal",o.jsx("br",{}),"Family"]}),o.jsx("p",{children:"Seeing team members who have been with us from the beginning settled and happy in their lives is one of my greatest achievements."})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-end",children:[o.jsx("div",{className:"fd-card-number",children:"08"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE NEXT CHAPTER"}),o.jsxs("h3",{children:["Still",o.jsx("br",{}),"moving forward."]}),o.jsx("p",{children:"With world-class printing technology and a strong team, our vision continues to grow — to become the leading and most preferred printing and packaging solution for our clients."})]})]})]})]}),o.jsxs("section",{className:"fd-message-section",children:[o.jsxs("div",{className:"fd-section-heading fd-reveal",children:[o.jsx("span",{children:"THE FOUNDER'S MESSAGE"}),o.jsx("div",{})]}),o.jsxs("div",{className:"fd-founder-layout",children:[o.jsx("div",{className:"fd-founder-image-wrap fd-reveal-left",children:o.jsxs("div",{className:"fd-founder-image-frame",children:[o.jsx("div",{className:"fd-founder-image-accent accent-top"}),o.jsx("div",{className:"fd-founder-image-accent accent-bottom"}),o.jsxs("div",{className:"fd-founder-image-inner",children:[o.jsx("img",{src:D1,alt:"Founder of Fairdeal Print Pack India Pvt. Ltd.",className:"fd-founder-image"}),o.jsx("div",{className:"fd-founder-image-overlay"})]}),o.jsxs("div",{className:"fd-founder-image-label",children:[o.jsx("span",{children:"FOUNDER & MD"}),o.jsx("span",{children:"FAIRDEAL"})]})]})}),o.jsxs("div",{className:"fd-founder-content fd-reveal-right",children:[o.jsxs("div",{className:"fd-message-intro",children:[o.jsx("span",{children:"01 / VALUES"}),o.jsxs("h3",{children:["The principles",o.jsx("br",{}),"that kept us",o.jsx("em",{children:" moving."})]})]}),o.jsxs("div",{className:"fd-message-text",children:[o.jsx("p",{children:"My father was in the army and I came from a Maharashtrian family where there was minimal scope of becoming a businessman back in those days."}),o.jsx("p",{children:"The Army atmosphere gave me lessons about patriotism, discipline, cleanliness, taking care of the environment and the importance of health and fitness."}),o.jsx("p",{children:"But professionally, there was still a lot to learn. The first ten years brought all kinds of difficulties. The approach that helped me overcome them was simple: focus on quality and honesty, even in the most challenging times."}),o.jsxs("div",{className:"fd-founder-signature",children:[o.jsx("div",{className:"fd-signature-line"}),o.jsxs("div",{children:[o.jsx("strong",{children:"FOUNDER & MD"}),o.jsx("span",{children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."})]})]})]})]})]})]}),o.jsx("section",{className:"fd-quote-section",children:o.jsxs("div",{className:"fd-quote-card",children:[o.jsxs("div",{className:"fd-quote-top",children:[o.jsx("span",{children:"MY BELIEF"}),o.jsx("span",{children:"02 / 04"})]}),o.jsx("div",{className:"fd-quote-accent"}),o.jsxs("blockquote",{children:["“You take care of the organisation,",o.jsx("br",{}),o.jsx("span",{children:"the organisation will take care of you."}),"”"]}),o.jsxs("div",{className:"fd-quote-footer",children:[o.jsx("span",{children:"— Founder & MD"}),o.jsx("span",{children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."})]})]})}),o.jsxs("section",{className:"fd-team-message",children:[o.jsxs("div",{className:"fd-section-heading fd-reveal",children:[o.jsx("span",{children:"PEOPLE FIRST"}),o.jsx("div",{})]}),o.jsxs("div",{className:"fd-team-message-grid",children:[o.jsx("div",{className:"fd-team-message-title fd-reveal-left",children:o.jsxs("h3",{children:["A company",o.jsx("br",{}),"is only as",o.jsx("br",{}),o.jsx("span",{children:"strong as its people."})]})}),o.jsxs("div",{className:"fd-team-message-copy fd-reveal-right",children:[o.jsx("p",{children:"From the beginning, I believed team-building was a critical factor of growth. I was focused and selective in choosing people who believed in a quality mindset and shared the organisation's core values."}),o.jsx("p",{children:"Today, I am grateful for the team members who have been with me from the beginning. Seeing them settled and happy in their lives is a real success for me."}),o.jsxs("div",{className:"fd-team-values",children:[o.jsx("span",{children:"PEOPLE"}),o.jsx("span",{children:"TRUST"}),o.jsx("span",{children:"GROWTH"})]})]})]})]}),o.jsx("section",{className:"fd-vision-section",children:o.jsxs("div",{className:"fd-vision-box",children:[o.jsxs("div",{className:"fd-vision-side",children:[o.jsx("span",{children:"03 / VISION"}),o.jsx("div",{className:"fd-vision-number",children:"2030"})]}),o.jsxs("div",{className:"fd-vision-main",children:[o.jsx("span",{className:"fd-vision-kicker",children:"LOOKING AHEAD"}),o.jsxs("h3",{children:["To become the"," ",o.jsxs("span",{children:["preferred printing"," "]}),"& packaging partner."]}),o.jsx("p",{children:"We will continue to focus on quality, cost-effectiveness and commitment without compromise. A positive working atmosphere, timely deliverables and a quality mindset will remain at the heart of Fairdeal."}),o.jsxs("div",{className:"fd-vision-points",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"01"}),o.jsx("span",{children:"QUALITY"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"02"}),o.jsx("span",{children:"COST-EFFECTIVENESS"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"03"}),o.jsx("span",{children:"COMMITMENT"})]})]})]})]})}),o.jsx("section",{className:"fd-closing",children:o.jsxs("div",{className:"fd-closing-inner",children:[o.jsxs("div",{className:"fd-closing-top",children:[o.jsx("span",{children:"1990 — NOW"}),o.jsx("span",{children:"AND BEYOND"})]}),o.jsxs("h2",{children:["The journey",o.jsx("span",{children:"continues."})]}),o.jsxs("div",{className:"fd-closing-bottom",children:[o.jsx("p",{children:"We promise to keep upgrading every day and remain a catalyst for wealth creation through premium printing and packaging solutions."}),o.jsxs("div",{children:[o.jsx("strong",{children:"FAIRDEAL"}),o.jsx("span",{children:"PRINT PACK INDIA PVT. LTD."})]})]})]})}),o.jsx("style",{children:`

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

          font-size: clamp(44px, 5vw, 78px);;

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

      `})]})},c3="/boltfaredeal/assets/fairdeal-team-geLPgiou.png";re.registerPlugin(Pe);const d3=()=>{const a=R.useRef(null);return R.useLayoutEffect(()=>{const t=re.context(()=>{re.from(".team-section-title",{opacity:0,y:25,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".team-section",start:"top 85%"}}),re.fromTo(".team-image-reveal",{scaleX:1},{scaleX:0,transformOrigin:"right center",duration:1.3,ease:"power4.inOut",scrollTrigger:{trigger:".team-image-box",start:"top 80%"}});const n=window.innerWidth<=600;re.to(".team-main-image",{scale:n?1.01:1.04,yPercent:n?-1:-4,ease:"none",scrollTrigger:{trigger:".team-image-box",start:"top bottom",end:"bottom top",scrub:1}}),re.from(".team-content-block",{opacity:0,y:35,duration:.8,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".team-content",start:"top 82%"}}),re.from(".team-highlight",{opacity:0,y:25,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".team-highlight",start:"top 85%"}}),Pe.refresh()},a);return()=>t.revert()},[]),o.jsxs("section",{ref:a,className:"team-section",children:[o.jsx("style",{children:`

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

      `}),o.jsxs("div",{className:"team-container",children:[o.jsx("div",{className:"team-section-title",children:"People Behind The Process"}),o.jsxs("div",{className:"team-image-box",children:[o.jsx("img",{src:c3,alt:"Fairdeal Print Pack Team",className:"team-main-image"}),o.jsx("div",{className:"team-image-overlay"}),o.jsx("div",{className:"team-image-reveal"})]}),o.jsxs("div",{className:"team-content",children:[o.jsxs("div",{className:"team-content-block",children:[o.jsx("div",{className:"team-content-line"}),o.jsx("h3",{className:"team-content-title",children:"Research & Development"}),o.jsx("p",{className:"team-content-text",children:"A detailed checklist of the processes to be followed is developed with strong adherence during all stages of the job."}),o.jsx("p",{className:"team-content-text",children:"Printing starts only after definite groundwork and research on similar jobs executed in the past."})]}),o.jsxs("div",{className:"team-content-block",children:[o.jsx("div",{className:"team-content-line"}),o.jsx("h3",{className:"team-content-title",children:"Customer Understanding & Support"}),o.jsx("p",{className:"team-content-text",children:"We always keep our customer's requirements in sight, including budget, logistics, execution requirements and timelines."}),o.jsx("p",{className:"team-content-text",children:"This allows us to provide practical and tailor-made executions."})]}),o.jsxs("div",{className:"team-content-block",children:[o.jsx("div",{className:"team-content-line"}),o.jsx("h3",{className:"team-content-title",children:"Never Say No"}),o.jsx("p",{className:"team-content-text",children:"Our eagerness to experiment and try new approaches helps us take on challenging requirements."}),o.jsx("p",{className:"team-content-text",children:"Rewriting benchmarks and finding solutions is part of our everyday routine."})]})]}),o.jsxs("div",{className:"team-highlight",children:[o.jsxs("p",{className:"team-highlight-text",children:["We believe in"," ",o.jsx("span",{children:"people, teamwork and continuous improvement."})]}),o.jsx("p",{className:"team-highlight-small",children:"FAIRDEAL PRINT PACK"})]})]})]})},u3=()=>o.jsxs("main",{className:"about-us",children:[o.jsx(t3,{}),o.jsx(l3,{}),o.jsx(d3,{}),o.jsx(i3,{}),o.jsx(a3,{}),o.jsx(o3,{})]}),f3="/boltfaredeal/assets/2%20in%201%20Shrink-ciZgVCTz.png",p3="/boltfaredeal/assets/ALPNA-Retrofit%20Machine-DXwxae8c.png",h3="/boltfaredeal/assets/Automatic%20Continuous%20Lamination-BykSUQZb.png",m3="/boltfaredeal/assets/Automatic%20Cutting%20Machine-hVLOwTR1.png",g3="/boltfaredeal/assets/Automatic%20Punching%20Machine-PThhMVPI.png",x3="/boltfaredeal/assets/Automatic%20Sheet-BWjiNHu0.png",v3="/boltfaredeal/assets/Autoprint-D1iTHp6s.png",y3="/boltfaredeal/assets/Blister%20Coat-BucTVwEN.png",b3="/boltfaredeal/assets/Continuous%20Stationery-DWtCVyJL.png",w3="/boltfaredeal/assets/Core%20Cutting-C_CPNU6Z.png",N3="/boltfaredeal/assets/Corrugation%20Machine-C2P2UJOX.png",_3="/boltfaredeal/assets/Cut%20To%20Length-BIoCsxTS.png",k3="/boltfaredeal/assets/FLEXO%20ROTARY-CDtbjxS4.png",j3="/boltfaredeal/assets/Flatbed%20Punching-CruOeq5e.png",E3="/boltfaredeal/assets/Gluing%20Machine-BuHgCHPn.png",S3="/boltfaredeal/assets/Graphica%20Screen-CYDhuuWD.png",A3="/boltfaredeal/assets/HEIDELBERG-VvLhSvTq.png",C3="/boltfaredeal/assets/Laser%20Serial-FzlpndFf.png",T3="/boltfaredeal/assets/Shinohara%2066%20II%20P-CWTz-Ggr.png",P3="/boltfaredeal/assets/Slitting%20Machine-aEhP8rlD.png",R3="/boltfaredeal/assets/Sticker%20Half%20Cutting-KFMxqlB_.png";re.registerPlugin(Pe);const L3=[{title:"Offset Printing",description:"High-quality offset production for brand, business, and publishing needs. Precise registration and dependable color reproduction bring brochures, catalogues, books, labels, cartons, and stationery to life at scale.",applications:"Brochures / Catalogues / Books / Labels / Cartons / Stationery",features:["Brochures & Catalogues","Books & Company Profiles","Labels & Cartons","Business Stationery"]},{title:"Flexo Printing",description:"Flexible, high-volume printing for labels, tags, packaging, and shrink sleeves. Multi-colour rotary production helps maintain crisp detail and consistent output across long runs and repeat orders.",applications:"Product Labels / Packaging / Tags / Shrink Sleeves",features:["Multi-Colour Label Printing","Rotary Die Cutting","Tags & Shrink Sleeves","Consistent Long Runs"]},{title:"Copier Paper",description:"Reliable sourcing and distribution of copier, coated, and sheet-form paper for offices, print rooms, and production partners. Choose the right grade and format for everyday printing or specialist finishing.",applications:"Offices / Commercial Printers / Production Houses",features:["Copier Paper","Coated Paper Grades","Sheet-Form Supply","Bulk Distribution"]},{title:"Corrugation",description:"Protective corrugated packaging developed around the product, journey, and presentation. From everyday transit cartons to custom-fit packaging, flute and board options balance strength with practical handling.",applications:"Transit Cartons / Custom Boxes / Product Protection",features:["E, F & C Flute Options","Custom Box Formats","Transit Protection","Retail-Ready Packaging"]},{title:"Others",description:"Specialist print and finishing options for the details that make a project distinct. Combine tapes, labels, stickers, and screen printing to complete packaging and promotional requirements.",applications:"Packaging Details / Product Identification / Promotions",features:["BOPP Tapes","Labels & Stickers","Screen Printing","Specialist Finishing"]}],O3=Object.entries(Object.assign({"../assets/images/Technology/2 in 1 Shrink.png":f3,"../assets/images/Technology/ALPNA-Retrofit Machine.png":p3,"../assets/images/Technology/Automatic Continuous Lamination.png":h3,"../assets/images/Technology/Automatic Cutting Machine.png":m3,"../assets/images/Technology/Automatic Punching Machine.png":g3,"../assets/images/Technology/Automatic Sheet.png":x3,"../assets/images/Technology/Autoprint.png":v3,"../assets/images/Technology/Blister Coat.png":y3,"../assets/images/Technology/Continuous Stationery.png":b3,"../assets/images/Technology/Core Cutting.png":w3,"../assets/images/Technology/Corrugation Machine.png":N3,"../assets/images/Technology/Cut To Length.png":_3,"../assets/images/Technology/FLEXO ROTARY.png":k3,"../assets/images/Technology/Flatbed Punching.png":j3,"../assets/images/Technology/Gluing Machine.png":E3,"../assets/images/Technology/Graphica Screen.png":S3,"../assets/images/Technology/HEIDELBERG.png":A3,"../assets/images/Technology/Laser Serial.png":C3,"../assets/images/Technology/Shinohara 66 II P.png":T3,"../assets/images/Technology/Slitting Machine.png":P3,"../assets/images/Technology/Sticker Half Cutting.png":R3})),Qv=O3.reduce((a,[t,n])=>{const i=t.split("/").pop()?.replace(/\.[^/.]+$/,"")??"";return i&&(a[i.toLowerCase()]=n),a},{}),Kv=a=>a.toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim(),I3=a=>{const t=Kv(a);let n=Object.values(Qv)[0]??"",i=-1;return Object.entries(Qv).forEach(([s,c])=>{const d=Kv(s),f=t.split(" ").filter(Boolean),p=d.split(" ").filter(Boolean),g=f.filter(y=>p.includes(y)||p.some(v=>v.includes(y)||y.includes(v))).length*3+(t.includes(d)?18:0);g>i&&(i=g,n=c)}),n},z3=[{title:"Flexo Rotary Label Printing Machine – RK-FMS-NICE-P-320",features:["8 Colour Printing Machine","One UV Dryer Unit","Two Rotary Die Cutting Units"]},{title:"Flexo Flatbed Punching Machine",features:["Flatbed Punching"]},{title:"Flexo Cut To Length – CT-300 New",features:["Cut-to-Length"]},{title:"Flexo Core Cutting Machine",features:["Core Cutting"]},{title:"Flexo Gluing Machine – GT-300 HS",features:["Gluing"]},{title:"Flexo Slitting Machine",features:["Flexo Slitting"]},{title:"HEIDELBERG SM 74 P II",features:["German Make","5 Colour Offset Printing",'Size: 20" × 30"']},{title:"ALPNA-Retrofit Machine",features:["MET PET Printing","Drip Off","UV","Blister Coating","Aqueous Varnish Setup",'Size: 28" × 40"']},{title:"Automatic Sheet Folding Machine – Heidelberg Stahl",features:['Size: 25" × 36"']},{title:"Corrugation Machine",features:['E-Flute: 36"','F-Flute: 52"','C-Flute: 68"']},{title:"Shinohara 66 II P Offset Printer",features:["Perfecter","2 Colour",'Size: 26" × 19"',"2 Nos."]},{title:"Autoprint Offset Printing Machine",features:["Single Colour",'Size: 10" × 15"',"2 Nos."]},{title:"Automatic Cutting Machine",features:['Polar Mohr – German Make – 36" – 3 Nos.','Horizon – Japan Make – 45" – 1 No.']},{title:"Automatic Punching Machine",features:['Size: 22" × 32" – 2 Nos.','Size: 36" × 46" – 1 No.']},{title:"Automatic Continuous Lamination Machine",features:["Capacity up to 850 mm"]},{title:"Continuous Stationery Setup",features:["Continuous Stationery Production"]},{title:"Sticker Half Cutting cum Creasing & Perforating Machine",features:["Half Cutting","Creasing","Perforating"]},{title:"Graphica Screen Printing Setup",features:["Full-fledged Screen Printing Setup","2 Nos."]},{title:"2-in-1 Shrink Heat Packing Machine",features:["Shrink Heat Packing"]},{title:"Laser Serial Numbering Machine",features:["Laser Serial Numbering"]},{title:"Blister Coat Testing Machine",features:["Blister Coat Testing"]}].map(a=>({...a,image:I3(a.title)})),M3=()=>{const a=R.useRef(null),t=R.useRef(null),n=R.useRef(null),i=R.useRef(null),s=R.useRef(null),c=R.useRef(null),d=R.useRef(null),f=R.useRef(null),p=R.useRef(null),[m,g]=R.useState(!1);return R.useEffect(()=>{const y=document.documentElement,v=()=>{g(y.getAttribute("data-theme")==="light"||y.classList.contains("light"))};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),R.useEffect(()=>{const y=a.current;if(!y)return;const v=re.context(()=>{const b=n.current?.querySelectorAll(".services-hero-word"),N=[i.current,s.current,c.current,f.current,p.current];re.set(b,{opacity:0,y:65,rotateX:-65}),re.set([t.current,...N],{opacity:0}),re.set(N,{y:28}),re.set(d.current,{opacity:0,x:90,scale:.84,rotation:4}),re.timeline({scrollTrigger:{trigger:y,start:"top 75%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,duration:.6,ease:"power3.out"}).to(b,{opacity:1,y:0,rotateX:0,duration:.85,stagger:.055,ease:"power4.out"},"-=0.25").to(i.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.35").to(s.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.3").to(c.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.4").to(d.current,{opacity:1,x:0,scale:1,rotation:0,duration:1.15,ease:"expo.out"},"-=0.35").to([f.current,p.current],{opacity:1,y:0,duration:.65,stagger:.08,ease:"power3.out"},"-=0.3")},y);return()=>v.revert()},[]),o.jsxs("main",{className:`services-page relative w-full overflow-hidden ${m?"light-mode":""}`,children:[o.jsx("style",{children:`
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

          font-size: var(--services-display-size);
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
      `}),o.jsx("section",{ref:a,className:"services-hero relative px-6 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-10 lg:pb-28 lg:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[o.jsx("div",{ref:t,className:"services-hero-label",children:"OUR SERVICES"}),o.jsx("span",{className:"services-hero-copy hidden text-xs tracking-[0.2em] md:block",children:"01 / SERVICES"})]}),o.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start",children:[o.jsxs("div",{children:[o.jsxs("h1",{ref:n,className:"max-w-[1100px] text-[var(--services-white)]",children:[o.jsx("span",{className:"services-hero-word",children:"Print."}),o.jsx("br",{}),o.jsx("span",{className:"services-hero-word services-hero-accent",children:"Pack."})," ",o.jsx("span",{className:"services-hero-word services-hero-mint",children:"Deliver."})]}),o.jsx("p",{ref:i,className:"services-hero-copy mt-7 max-w-[560px] text-base leading-7 sm:text-lg",children:"From first proof to final delivery, we make print work hard for your brand."}),o.jsx("div",{ref:s,className:"mt-10 grid max-w-[650px] grid-cols-3 gap-3",children:Pi.slice(1,4).map((y,v)=>o.jsxs("div",{className:"relative aspect-[1.55/1] overflow-hidden bg-[var(--services-panel-2)]",children:[o.jsx("img",{src:y.image,alt:y.title,loading:"lazy",className:"h-full w-full object-cover transition-transform duration-700 hover:scale-105"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"}),o.jsx("div",{className:`absolute inset-x-0 bottom-0 h-[2px] ${v===1?"bg-[var(--services-mint)]":"bg-[var(--services-yellow)]"}`})]},y.title))})]}),o.jsxs("div",{className:"max-w-[400px] lg:pb-3",children:[o.jsx("p",{ref:c,className:"services-hero-copy text-sm leading-7 sm:text-base",children:"Offset and flexographic printing, paper supply, and corrugated production come together for dependable end-to-end output."}),o.jsxs("div",{ref:d,className:"relative mt-8 aspect-[1.45/1] overflow-hidden bg-[var(--services-panel-2)]",children:[o.jsx("img",{src:Pi[0].image,alt:"Offset printing production",className:"services-hero-image"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/60 via-black/5 to-transparent"}),o.jsx("span",{className:"services-hero-image-caption absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.2em]",children:"Offset production / 01"}),o.jsx(no,{className:"absolute bottom-4 right-4 h-4 w-4 text-[#8FE7C8]","aria-hidden":"true"})]}),o.jsx("div",{className:"services-hero-rule mt-5 h-px w-full"}),o.jsxs("div",{ref:f,className:"services-hero-meta mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em]",children:[o.jsx("span",{children:"Fairdeal"}),o.jsx("span",{children:"Print & Packaging"})]})]})]}),o.jsxs("div",{ref:p,className:"services-hero-explore mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em]",children:[o.jsx(uN,{className:"h-4 w-4"}),o.jsx("span",{children:"Explore our capabilities"})]})]})}),o.jsx("section",{className:"relative px-6 pb-2 sm:px-8 lg:px-10 lg:pb-3",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-10 flex items-end justify-between border-b border-[var(--theme-border)] pb-5",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"The Fairdeal System"}),o.jsxs("h2",{className:"mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl",children:[Pi.length," capabilities.",o.jsx("span",{className:"ml-2 font-normal text-[var(--theme-accent)]",children:"One workflow."})]})]}),o.jsxs("span",{className:"hidden text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)] md:block",children:[String(Pi.length).padStart(2,"0")," Capabilities"]})]}),o.jsx("div",{className:"relative",children:Pi.map((y,v)=>{const b=L3.find(k=>k.title===y.title)??{title:y.title,description:y.description,applications:"Print / Packaging / Distribution",features:[]},N=y.title?.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),w=v%2===0;return o.jsxs("article",{className:"group relative border-b border-[var(--theme-border)] py-8 sm:py-10 lg:py-10",children:[o.jsx("div",{className:"pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[11rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-text)] opacity-[0.035] xl:block",children:String(v+1).padStart(2,"0")}),o.jsxs("div",{className:"relative grid gap-8 lg:grid-cols-[0.12fr_0.88fr] lg:items-center",children:[o.jsxs("div",{className:"flex items-start gap-4 lg:block",children:[o.jsx("span",{className:"text-[11px] tracking-[0.18em] text-[var(--theme-accent)]",children:String(v+1).padStart(2,"0")}),o.jsx("div",{className:"mt-1 hidden h-16 w-px bg-[var(--theme-border)] lg:block"}),o.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-muted)] lg:mt-3 lg:block",children:"Capability"})]}),o.jsxs("div",{className:`grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center ${w?"":"lg:[&>*:first-child]:order-2"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--theme-accent)] transition-transform duration-500 group-hover:scale-150"}),o.jsxs("span",{className:"text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:["Fairdeal /"," ",String(v+1).padStart(2,"0")]})]}),o.jsx("h3",{className:"services-display-heading max-w-[720px] text-[var(--theme-text)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2",children:y.title}),o.jsx("p",{className:"mt-7 max-w-[620px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:b?.description}),o.jsxs("p",{className:"mt-4 max-w-[620px] text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[var(--theme-accent-alt)]",children:["Applications: ",b?.applications]}),o.jsxs(ln,{to:`/services/${N}`,className:"group/link mt-7 inline-flex items-center gap-3 text-sm text-[var(--theme-text)]",children:[o.jsx("span",{className:"border-b border-[var(--theme-text)] pb-1",children:"Explore service"}),o.jsx(no,{className:"h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"})]})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"relative aspect-[1.35/1] overflow-hidden bg-[var(--theme-bg)]",children:[o.jsx("img",{src:y.image,alt:y.title,loading:"lazy",className:"h-full w-full object-cover grayscale-[15%] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent opacity-70"}),o.jsx("div",{className:"absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white",children:"Print / Production"}),o.jsxs("div",{className:"absolute bottom-5 right-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/70",children:[o.jsx("span",{children:"View capability"}),o.jsx(no,{className:"h-3 w-3"})]})]}),o.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:b?.features.map(k=>o.jsxs("div",{className:"flex items-center gap-2 border-b border-[var(--theme-border)] pb-2",children:[o.jsx(wN,{className:"h-3.5 w-3.5 shrink-0 text-[var(--theme-accent)]"}),o.jsx("span",{className:"text-[11px] leading-5 text-[var(--theme-text-soft)]",children:k})]},k))})]})]})]}),o.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--theme-accent)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"})]},y.title)})})]})}),o.jsx("section",{className:"relative border-y border-[var(--theme-border)]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] px-6 py-0 sm:px-8 sm:py-28 lg:px-10 lg:py-10",children:[o.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.3fr_1.7fr]",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"HOW WE WORK"}),o.jsxs("div",{className:"mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--theme-accent)]"}),o.jsx("span",{children:"From idea to output"})]})]}),o.jsxs("div",{children:[o.jsxs("h2",{className:"services-display-heading max-w-[1050px] text-[var(--theme-text)]",children:["We don't just",o.jsx("br",{}),o.jsx("span",{className:"font-normal text-[var(--theme-accent)]",children:"print products."}),o.jsx("br",{}),"We build outcomes."]}),o.jsx("p",{className:"mt-10 max-w-[680px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Every project moves through a connected system of material selection, production, finishing, packaging and delivery. Our capabilities work together so the final product performs exactly as intended."})]})]}),o.jsx("div",{className:"mt-20 grid border-y border-[var(--theme-border)] sm:grid-cols-2 lg:grid-cols-4",children:[["01","Understand","Project requirements"],["02","Produce","Precision manufacturing"],["03","Finish","Detail & quality control"],["04","Deliver","Ready for the market"]].map(([y,v,b])=>o.jsxs("div",{className:"group border-b border-[var(--theme-border)] p-6 last:border-b-0 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8",children:[o.jsx("span",{className:"text-[10px] tracking-[0.2em] text-[var(--theme-accent)]",children:y}),o.jsx("h3",{className:"mt-12 text-xl font-medium tracking-[-0.03em] text-[var(--theme-text)] transition-transform duration-500 group-hover:translate-x-1",children:v}),o.jsx("p",{className:"mt-2 text-xs leading-6 text-[var(--theme-text-soft)]",children:b})]},y))})]})}),o.jsxs("section",{className:"relative overflow-hidden border-b border-[var(--theme-border)]",children:[o.jsxs("div",{className:"mx-auto max-w-[1500px] px-6 py-2 sm:px-8 sm:py-28 lg:px-10 lg:py-3",children:[o.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-5 text-left text-[var(--theme-accent-alt)]",children:"LET'S GET STARTED"}),o.jsxs("div",{className:"relative",children:[o.jsx("span",{className:"absolute -left-1 -top-7 text-xs text-[var(--theme-accent)]",children:"+"}),o.jsx("p",{className:"max-w-[330px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"We always try to implement our creative ideas at the highest level. Tell us about your project and we will make it work."})]})]}),o.jsx("div",{children:o.jsxs("h2",{className:"services-display-heading max-w-[1000px] text-[var(--theme-text)]",children:["Have a project",o.jsx("br",{}),o.jsx("span",{className:"font-normal text-[var(--theme-accent)]",children:"in mind?"})]})})]}),o.jsx("form",{className:"mt-10 border-t border-[var(--theme-border)] pt-8 lg:mt-10",children:o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[0.7fr_0.7fr_1.6fr_auto] lg:items-end",children:[o.jsxs("label",{className:"block",children:[o.jsx("span",{className:"mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Name"}),o.jsx("input",{type:"text",className:"w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"})]}),o.jsxs("label",{className:"block",children:[o.jsx("span",{className:"mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Email"}),o.jsx("input",{type:"email",className:"w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"})]}),o.jsxs("label",{className:"block",children:[o.jsx("span",{className:"mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Tell us about the project"}),o.jsx("textarea",{rows:1,className:"w-full resize-none border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"})]}),o.jsxs(Rt,{type:"submit",className:"h-[52px] whitespace-nowrap px-7 text-sm",children:["Start a conversation",o.jsx(no,{className:"h-4 w-4"})]})]})})]}),o.jsx("div",{className:"pointer-events-none absolute bottom-[-80px] right-[-20px] hidden text-[18rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-accent)] opacity-[0.04] lg:block",children:"03"})]})]})},F3=[["01","VERSATILITY","Versatile printing","A range of inks and coatings helps achieve the appearance and protection different products require.",IN],["02","MATERIALS","Multiple substrates","Print on paper, film, foil, Tyvek, and a broad selection of other substrates.",Rn],["03","COST EFFICIENCY","Efficient production","Efficient consumable use and high production speeds make flexography suitable for economical runs.",v1],["04","PRESS SPEED","High press speeds","High-speed production is particularly suited to long runs of custom labels.",Ud],["05","PLATE DURABILITY","Long plate life","Durable flexographic plates support extended production runs and consistent reproduction.",cc],["06","COLOR STABILITY","Consistent color","Careful color control helps maintain stable results throughout a run and from run to run.",Vh]],D3=[["Prime product labels","Premium product identification",$p],["Industrial labels","Industrial identification",cc],["Tamper-evident labels","Security-focused labeling",cs],["UL labels","Compliance-oriented labels",Bd],["RoHS labels","Regulatory identification",Bd],["Asset labels and tags","Asset identification systems",Lx],["Danger and caution labels","Safety communication",Ox],["Window decals and static clings","Window graphics and clings",Wh],["Warning labels","High-visibility safety labels",Ox],["Barcode and serialized labels","Trackable product identification",Lx],["Outdoor equipment labels","Outdoor-use identification",Bd],["Medical labels","Medical product identification",cs],["Custom labels and tags","Made for your requirements",$p],["Inventory labels","Stock and inventory management",_u],["Cover-up labels","Over-labeling applications",Rn],["Security labels","Product security and protection",cs]],B3=[["360-degree display","Artwork and messaging wrap around the container for greater shelf impact.",w1],["Full-body coverage","A large printable surface supports product information and brand storytelling.",Rn],["Clear windows","Transparent areas can let customers see the product inside.",Wh],["Tamper evidence","Tamper-evident constructions can add an extra layer of product security.",cs],["High print quality","Detailed, high-quality artwork supports demanding product presentation.",Hh],["Protected graphics","Reverse printing can help protect ink from scratching and wear.",b1]],U3=[["01 / SECURITY","Tamper-evident bands","Used for consumer protection across pharmaceutical, vitamin, food, and beverage products."],["02 / BRANDING","Full-body shrink sleeves","Used across beverage, personal care, food, household chemical, and automotive packaging."],["03 / PROMOTIONS","Multi-packs","Promotional wraps can bundle products and support cross-branded campaigns."]],rs="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",W3=({service:a})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${rs} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsxs("div",{className:"grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsxs("div",{className:"relative z-10 space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Flexographic ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Printing"})]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:[a.description," Flexography uses flexible raised-image plates to transfer ink onto a wide range of substrates with speed, consistency, and precision."]}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:[[Rn,"FLEXIBLE PLATES"],[Ud,"HIGH PRESS SPEEDS"],[Vh,"COLOR CONTROL"],[b1,"MULTI-SUBSTRATE"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-white/[0.025] px-3 py-2 text-[10px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:[o.jsx(t,{className:"h-3.5 w-3.5 text-[var(--theme-accent)]"}),n]},n))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Rt,{href:"#applications",className:"h-12 px-6 text-sm font-medium",children:["Explore applications ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Rt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] bg-black/20 sm:min-h-[430px]",children:[o.jsx("img",{src:a.image,alt:"Flexographic printing press transferring ink onto a substrate",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"FLEXOGRAPHIC PRINTING PRESS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," ACTIVE FEED"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Flexible plates. ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Consistent print."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"High-speed ink transfer for labels, packaging, and a wide range of substrates."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["PRINT PROCESS","FLEXOGRAPHIC"],["PLATE TYPE","FLEXIBLE"],["APPLICATION","LABELS & PACKAGING"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})]})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Advantages of flexographic printing"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:F3.map(([t,n,i,s,c])=>o.jsxs("article",{"data-reveal":"up",className:`${rs} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`,children:[o.jsx("div",{className:"mb-5 grid h-11 w-11 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(c,{className:"h-5 w-5"})}),o.jsxs("p",{className:"mb-2 text-[10px] font-semibold tracking-[0.16em] text-[var(--theme-accent-alt)]",children:[t," / ",n]}),o.jsx("h2",{className:"mb-2 text-xl font-medium",children:i}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:s})]},t))})]}),o.jsx("section",{"data-reveal":"up",className:`${rs} overflow-hidden rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"max-w-5xl space-y-8",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Flexographic process"}),o.jsx("h2",{className:"max-w-4xl border-l-2 border-[var(--theme-accent-alt)] pl-5 text-2xl font-medium leading-tight sm:pl-7 sm:text-3xl lg:text-4xl",children:"Flexible plates. Multiple colors. Consistent reproduction. Built for high-speed production."}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:[["01 / PLATE","A flexible plate carries a raised image that receives ink and transfers the artwork to the substrate."],["02 / COLOR","Each station prints a single color; multiple stations work together to achieve accurate registration."],["03 / FINISH","Printed materials can be die cut, sheeted, embossed, or perforated to suit the finished application."]].map(([t,n])=>o.jsxs("div",{className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5",children:[o.jsx("p",{className:"mb-3 text-[10px] font-semibold tracking-[0.15em] text-[var(--theme-accent)]",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]})}),o.jsxs("section",{id:"applications",className:"scroll-mt-28 space-y-7",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Flexographic applications"}),o.jsxs("h2",{className:"max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Labels for ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"every application"})]})]}),o.jsx("span",{className:"w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:"16 CORE APPLICATIONS"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:D3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${rs} flex min-h-[92px] items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5`,children:[o.jsx("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(i,{className:"h-5 w-5"})}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-sm font-medium leading-snug text-[var(--theme-text)]",children:t}),o.jsx("span",{className:"mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]",children:n})]})]},t))})]}),o.jsx("section",{className:`${rs} overflow-hidden rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"grid items-center gap-10 lg:grid-cols-2",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Shrink sleeve technology"}),o.jsxs("h2",{className:"text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Full-body ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"branding"})]}),o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Shrink sleeves are full-color labels that cover a container, providing 360-degree graphics for branding and messaging. Printed on engineered film, the sleeve responds to heat or steam and conforms to the container shape."}),o.jsx("div",{className:"flex flex-wrap gap-2",children:[[w1,"360-DEGREE GRAPHICS"],[ju,"CONTAINER CONFORMING"],[Ud,"HEAT SHRINK"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] px-3 py-2 text-[10px] tracking-[0.08em] text-[var(--theme-text-soft)]",children:[o.jsx(t,{className:"h-3.5 w-3.5 text-[var(--theme-accent)]"}),n]},n))})]}),o.jsxs("div",{"data-reveal":"right",className:"relative flex min-h-[290px] items-center justify-center overflow-hidden rounded-[22px] border border-[var(--theme-border)] bg-[radial-gradient(ellipse_at_center,rgba(146,209,188,0.12),transparent_65%)] sm:min-h-[340px]",children:[o.jsx("p",{className:"absolute left-5 top-5 text-[9px] font-medium tracking-[0.14em] text-[var(--theme-text-soft)]",children:"SHRINK FILM / HEAT APPLICATION"}),o.jsxs("div",{className:"relative mt-8 h-[196px] w-[118px] rounded-[24px_24px_28px_28px] bg-[linear-gradient(90deg,#111a20_0%,#53646a_18%,#172126_44%,#71837d_62%,#111a20_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.4)]",children:[o.jsx("div",{className:"absolute -top-8 left-8 h-10 w-[54px] rounded-t-lg bg-[linear-gradient(90deg,#27363a,#70817c,#182226)]"}),o.jsx("div",{className:"absolute -top-11 left-7 h-4 w-[62px] rounded-md bg-[linear-gradient(90deg,#34413f,#96a38c,#2a3434)]"}),o.jsx("div",{className:"absolute inset-x-[-3px] top-[48px] flex h-[105px] items-center justify-center overflow-hidden bg-[linear-gradient(110deg,#86d9f0,#92d1bc_45%,#e1de00)] text-center text-[#17201d] shadow-[0_0_25px_rgba(146,209,188,0.2)]",children:o.jsxs("span",{className:"text-[10px] font-bold leading-5 tracking-[0.1em]",children:["FULL BODY",o.jsx("br",{}),"SHRINK SLEEVE",o.jsx("br",{}),"360 BRANDING"]})})]}),o.jsxs("div",{className:"absolute inset-x-5 bottom-5 flex items-center justify-between text-[9px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:[o.jsx("span",{children:"HEAT"}),o.jsx(Xn,{className:"h-3 w-3"}),o.jsx("span",{children:"CONFORM"}),o.jsx(Xn,{className:"h-3 w-3"}),o.jsx("span",{children:"FINISHED PACK"})]})]})]})}),o.jsxs("section",{className:"space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Advantages of shrink sleeves"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:B3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${rs} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`,children:[o.jsx(i,{className:"mb-5 h-5 w-5 text-[var(--theme-accent)]"}),o.jsx("h2",{className:"mb-2 text-lg font-medium",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]}),o.jsx("section",{className:`${rs} rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"End-use applications"}),o.jsxs("h2",{className:"text-2xl font-medium leading-tight sm:text-3xl",children:["Flexo shrink sleeve ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"applications"})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:U3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5 sm:p-6",children:[o.jsx("p",{className:"mb-3 text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent-alt)]",children:t}),o.jsx("h3",{className:"mb-3 text-lg font-medium",children:n}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]},n))})]})}),o.jsx("section",{"data-reveal":"up",className:"overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(120deg,rgba(134,217,240,0.09),rgba(146,209,188,0.08),rgba(225,222,0,0.06))] p-6 sm:p-10",children:o.jsxs("div",{className:"grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]",children:[o.jsxs("div",{className:"space-y-5",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Why flexo"}),o.jsxs("h2",{className:"text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Efficient. ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Flexible."})," Scalable."]}),o.jsx("p",{className:"max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Flexographic printing combines efficient production, high-quality reproduction, and substrate flexibility for a broad range of labeling and promotional requirements."}),o.jsxs(Rt,{to:"/contact",className:"h-12 px-6 text-sm font-medium",children:["Discuss your project ",o.jsx(Xn,{className:"h-4 w-4"})]})]}),o.jsx("div",{className:"grid grid-cols-2 gap-3",children:[[Ud,"HIGH SPEED","Fast press production"],[Hh,"HIGH QUALITY","Detailed reproduction"],[$p,"LABEL READY","Labels and promotions"],[Rn,"MULTI-VARIANT","Flexible production"]].map(([t,n,i])=>o.jsxs("div",{className:"rounded-xl border border-[var(--theme-border)] bg-black/10 p-4 sm:p-5",children:[o.jsx(t,{className:"mb-4 h-4 w-4 text-[var(--theme-accent)]"}),o.jsx("p",{className:"text-xs font-semibold tracking-[0.08em]",children:n}),o.jsx("p",{className:"mt-1 text-xs leading-5 text-[var(--theme-text-soft)]",children:i})]},n))})]})})]})}),H3=[[UN,"Save on time","Streamlined offset workflow ensures rapid turnaround for high-volume press runs."],[v1,"Save on costs","Maximized unit economy for large production volumes without sacrificing quality."],[zN,"Plan jobs better","Predictable schedule management with dedicated press capacity planning."],[pN,"Achieve best quality","Consistently sharp, high-fidelity color reproduction on every printed sheet."]],V3=[["Brochures and manuals","Commercial and technical manuals",hN],["Educational books","High-volume publication printing",EN],["Folders, inserts and flyers","Marketing collateral and inserts",Rn],["Calendars and diaries","Corporate desk and wall merchandise",gN],["Paper bags","Custom-branded paper packaging",ON],["Pharma and industrial labels","Precision compliance labeling",cs],["Corporate stationery","Letterheads, cards and identity supplies",mN],["Multicolor duplex mono cartons","Retail duplex carton boxes",ju],["MET PET cartons","Metalized-film packaging",Rn],["Corrugation and PP boxes","Heavy-duty outer shippers and poly boxes",_u],["Computer stationery","Continuous billing forms and computer paper",cc],["Security holograms","Anti-counterfeiting holographic seals",cs]],Y3=[[_N,"Drip-off UV effects","Contrasting matte and high-gloss textures in a single press pass for tactile premium depth.","MATTE + GLOSS CONTRAST","FINISH / UV COATING"],[MN,"Aqueous varnish","A fast-drying, water-based protective coating for a smooth, anti-scuff finish.","PROTECTIVE SEAL","FINISH / AQUEOUS"],[ju,"Blister coating","Specialized heat-seal adhesive varnish for pharmaceutical and retail blister packaging cards.","HEAT-SEAL ADHESIVE","FINISH / BLISTER"]],G3=[["01 / GLOBAL TRUST","Fairdeal Print Pack India Pvt. Ltd. provides offset commercial print services to clients in India and across the globe."],["02 / COMPREHENSIVE RANGE","Our offset capability is designed to match everyday printing needs across a wide range of customers."],["03 / CONTINUOUS EVOLUTION","Our offset technology continues to evolve alongside global industry standards."]],q3=({service:a})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:"relative isolate overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12",children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Offset ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Printing"})]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:["Our printing setup brings together the processes vital to completing an offset printing job, giving clients distinct advantages in quality, consistency, and production planning. ",a.description]}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2 pt-1",children:[["HIGH PRECISION","var(--theme-accent)"],["GLOBAL STANDARDS","#A4EC62"],["FULL SPECTRUM","var(--theme-accent-alt)"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-black/10 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-text)]",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:n}}),t]},t))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Rt,{href:"#applications",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Explore applications ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Rt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsx("div",{"data-reveal":"right",className:"flex justify-center",children:o.jsxs("figure",{className:"group relative min-h-[340px] w-full max-w-[440px] overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.24)] sm:min-h-[430px]",style:{aspectRatio:"1 / 0.86"},children:[o.jsx("img",{src:a.image,alt:"Offset printing press",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"OFFSET PRINTING SYSTEMS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," PRESS CAPABILITY"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Precision on every ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"printed sheet."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Consistent color and fine detail for commercial print and packaging applications."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["PRINT PROCESS","OFFSET"],["COLOR SYSTEM","CMYK"],["PRESS CAPABILITY","5 COLOUR"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})})]})]}),o.jsxs("section",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Key advantages"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:H3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"group relative overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-bl-full bg-[var(--theme-accent)] opacity-[0.06] transition-transform duration-300 group-hover:scale-125"}),o.jsx("div",{className:"relative mb-4 grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-colors group-hover:bg-[var(--theme-accent)] group-hover:text-[var(--theme-bg)]",children:o.jsx(t,{className:"h-5 w-5"})}),o.jsx("h2",{className:"relative mb-2 text-lg font-medium",children:n}),o.jsx("p",{className:"relative text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]},n))})]}),o.jsxs("section",{className:"relative overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 sm:p-10",children:[o.jsx("div",{className:"pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--theme-accent)] opacity-[0.045] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 max-w-5xl space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Quality commitment"}),o.jsx("blockquote",{"data-reveal":"left",className:"border-l-2 border-[var(--theme-accent-alt)] py-1 pl-5 text-2xl font-medium leading-snug sm:pl-7 sm:text-3xl",children:"“Offset printing is all about paying attention to the details. Even a minor difference in colour can make a huge impact on the end product.”"}),o.jsx("div",{className:"grid gap-4 pt-2 md:grid-cols-3",children:G3.map(([t,n])=>o.jsxs("article",{"data-reveal":"up",className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.12] p-5",children:[o.jsx("h3",{className:"mb-3 text-[10px] font-semibold tracking-[0.12em] text-[var(--theme-accent)]",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]})]}),o.jsxs("section",{id:"applications",className:"scroll-mt-28 space-y-7",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Capabilities spectrum"}),o.jsx("h2",{className:"max-w-3xl text-2xl font-medium leading-tight sm:text-4xl",children:"All types of offset printing solutions"})]}),o.jsx("span",{className:"w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:"12 CORE CATEGORIES"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:V3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"group flex min-h-[92px] items-center gap-4 rounded-xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5",children:[o.jsx("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(i,{className:"h-5 w-5"})}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-sm font-semibold leading-snug text-[var(--theme-text)]",children:t}),o.jsx("span",{className:"mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]",children:n})]})]},t))})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Surface finish technology"}),o.jsx("h2",{className:"text-3xl font-medium leading-tight sm:text-4xl",children:"Special effects"})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:Y3.map(([t,n,i,s,c])=>o.jsxs("article",{"data-reveal":"up",className:"group relative flex min-h-[340px] flex-col justify-between gap-7 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-colors duration-300 hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_38%,rgba(255,255,255,0.08)_50%,transparent_62%)] transition-transform duration-700 ease-out group-hover:translate-x-full"}),o.jsxs("div",{className:"relative space-y-4",children:[o.jsx("div",{className:"grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(t,{className:"h-5 w-5"})}),o.jsx("h3",{className:"text-xl font-medium leading-tight",children:n}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]}),o.jsxs("div",{className:"relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-[var(--theme-border)] bg-black/20 text-center transition-colors group-hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(53,212,255,0.06),transparent_48%,rgba(164,236,98,0.06))]"}),o.jsx("span",{className:"relative rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-accent)]",children:s}),o.jsx("span",{className:"relative text-[9px] tracking-[0.12em] text-[var(--theme-text-soft)]",children:c})]})]},n))})]})]})}),X3=[[Rn,"Multiple flute options","E-Flute, F-Flute, and Narrow Flute"],[Bh,"2 to 7 ply construction","Corrugated box configurations"],[cc,"Printed packaging","Brand-ready packaging solutions"],[Uh,"Tailored solutions","Standard and bespoke requirements"]],Q3=[["01 / FLUTE PROFILE",Rn,"E-Flute","A fine corrugated profile for applications where a compact structure and clean printed presentation are important."],["02 / FLUTE PROFILE",Bh,"F-Flute","A fine-profile option for packaging designs that require a compact board structure. Final selection depends on the product and specification."],["03 / FLUTE PROFILE",_u,"Narrow Flute","A narrow-flute construction selected around box design, handling requirements, and intended end use."]],K3=[[cs,"Product protection","Select a suitable corrugated construction based on the product, handling conditions, and transport needs."],[N1,"Bespoke box design","Develop packaging around product dimensions, packing processes, and presentation requirements."],[Vh,"Printed presentation","Bring brand elements and relevant packaging information into the box design and artwork."],[Rn,"Paper-based materials","Consider paper grades and material options when developing the required packaging structure."],[Uh,"Construction options","Explore flute profiles and 2 to 7 ply constructions for the application and specification."],[y1,"Integrated expertise","Combine corrugated production experience with paper and coating material considerations."]],J3=[[Bh,"Transit and shipping boxes"],[_u,"Product cartons"],[cc,"Printed packaging boxes"],[N1,"Custom-size boxes"],[DN,"Distribution packaging"],[y1,"Retail packaging"],[Rn,"Multi-item packaging"],[Uh,"Industrial packaging"]],Z3=[["Understand the requirement","Establish product dimensions, intended use, packing conditions, and presentation requirements for the finished box."],["Consider materials and structure","Review suitable flute profiles, board construction, paper options, and coating requirements for the application."],["Develop the packaging solution","Align box design and print requirements with the agreed specification and intended application."]],ns="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",$3=({service:a})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${ns} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PACKAGING SOLUTIONS"}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Corrugated ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Packaging"})," engineered to deliver."]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:["From transit boxes to bespoke printed corrugated packaging, Fairdeal develops solutions around your product and packaging requirements. Our corrugated production combines paper and coating materials with a commitment to consistent quality. ",a.description]}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:["E-FLUTE","F-FLUTE","NARROW FLUTE","2-7 PLY BOXES"].map(t=>o.jsx("span",{className:"rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]",children:t},t))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Rt,{href:"#box-solutions",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Explore box solutions ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Rt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]",children:[o.jsx("img",{src:a.image,alt:"Corrugated cardboard fluting and board materials",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"CORRUGATED PACKAGING SYSTEMS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," PACKAGING SOLUTIONS"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Protection meets ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"presentation."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Corrugated structures and printed packaging designed for product protection, handling, and brand presentation."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["FLUTE OPTIONS","E / F / NARROW"],["BOX CONSTRUCTION","2-7 PLY"],["PACKAGING","PRINTED BOXES"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})]})]}),o.jsx("section",{className:`${ns} grid gap-5 rounded-2xl p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4`,children:X3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"flex items-center gap-3",children:[o.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(t,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-xs font-semibold",children:n}),o.jsx("span",{className:"mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]",children:i})]})]},n))}),o.jsxs("section",{id:"box-solutions",className:"scroll-mt-28 space-y-8",children:[o.jsxs("header",{"data-reveal":"up",className:"mx-auto max-w-[760px] text-center",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"Corrugated construction"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["The right structure for your ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"packaging needs."})]}),o.jsx("p",{className:"mx-auto mt-4 max-w-[700px] text-sm leading-7 text-[var(--theme-text-soft)]",children:"Flute selection influences the construction and profile of corrugated packaging. Explore the available options to find a structure suited to your product and application."})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:Q3.map(([t,n,i,s])=>o.jsxs("article",{"data-reveal":"up",className:`${ns} group relative min-h-[260px] overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40 sm:p-7`,children:[o.jsx("div",{className:"pointer-events-none absolute -bottom-12 -right-10 h-36 w-36 rounded-full border border-[var(--theme-accent)]/15 shadow-[0_0_0_18px_rgba(146,209,188,0.025),0_0_0_36px_rgba(146,209,188,0.018)]"}),o.jsx("p",{className:"text-[9px] font-semibold tracking-[0.14em] text-[var(--theme-text-soft)]",children:t}),o.jsx("div",{className:"mt-6 grid h-12 w-12 place-items-center rounded-lg border border-[var(--theme-accent)]/20 bg-[var(--theme-accent)]/[0.06] text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(n,{className:"h-5 w-5"})}),o.jsx("h3",{className:"mt-5 text-xl font-medium",children:i}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-[var(--theme-text-soft)]",children:s}),o.jsx("div",{className:"mt-5 h-0.5 w-11 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-alt)]"})]},i))})]}),o.jsxs("section",{className:"relative overflow-hidden border-y border-[var(--theme-border)] bg-white/[0.018] py-8 sm:py-12",children:[o.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_50%,rgba(146,209,188,0.07),transparent_65%)]"}),o.jsxs("div",{className:"relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14",children:[o.jsxs("div",{"data-reveal":"left",className:`${ns} rounded-xl p-5 sm:p-8`,children:[o.jsxs("div",{className:"mb-6 flex items-center justify-between gap-3",children:[o.jsx("span",{className:"text-[10px] font-semibold tracking-[0.12em]",children:"CORRUGATED BOARD CONCEPT"}),o.jsx("span",{className:"text-[9px] font-semibold tracking-[0.1em] text-[var(--theme-accent)]",children:"2-7 PLY"})]}),o.jsx("div",{className:"space-y-1.5","aria-label":"Illustrative corrugated board layers",children:Array.from({length:7},(t,n)=>o.jsx("div",{className:`relative h-3 overflow-hidden rounded-sm border border-white/10 ${n%2===0?"bg-[linear-gradient(90deg,#765033,#c69b64_35%,#e0bf89_54%,#986235)]":"bg-[repeating-linear-gradient(90deg,#8d5e35_0px,#c99b63_7px,#e3c18d_13px,#9a693e_20px)]"}`,children:o.jsx("span",{className:"absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"})},n))}),o.jsxs("div",{className:"mt-3 flex justify-between gap-2 text-[9px] text-[var(--theme-text-soft)]",children:[o.jsx("span",{children:"Illustrative layered construction"}),o.jsx("span",{children:"01-07"})]}),o.jsx("p",{className:"mt-5 border-t border-[var(--theme-border)] pt-4 text-xs leading-6 text-[var(--theme-text-soft)]",children:"Board construction should be specified to suit the box design, product, handling conditions, and transport requirements. This illustration is conceptual, not a technical cross-section."})]}),o.jsxs("div",{"data-reveal":"right",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Printed corrugated boxes"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["From ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"2 to 7 ply"}),", built around your product."]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Fairdeal provides printed corrugated boxes for standard transit packaging as well as bespoke requirements. Packaging can be developed around its intended use, construction, and paper or coating materials."}),o.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:["Standard transit cardboard boxes","Bespoke corrugated packaging","Printed box requirements","Paper and coating integration"].map(t=>o.jsxs("div",{className:"flex items-start gap-2.5 text-xs leading-5 text-[var(--theme-text)]",children:[o.jsx(xN,{className:"mt-0.5 h-4 w-4 shrink-0 text-[var(--theme-accent)]"}),t]},t))}),o.jsx("p",{className:"mt-5 text-[10px] leading-5 text-[var(--theme-text-soft)]",children:"Final board grade, flute combination, print method, and construction should be confirmed against the product's actual packaging requirements."})]})]})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsxs("header",{"data-reveal":"left",className:"max-w-[720px]",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Why corrugated packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Packaging designed around ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"real requirements."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Effective corrugated packaging brings together board construction, material selection, printing, and box design. Each element contributes to how the finished pack serves its intended purpose."})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:K3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${ns} rounded-lg p-5 transition-all duration-300 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/[0.035]`,children:[o.jsx(t,{className:"h-5 w-5 text-[var(--theme-accent)]"}),o.jsx("h3",{className:"mt-4 text-sm font-semibold",children:n}),o.jsx("p",{className:"mt-2 text-xs leading-5 text-[var(--theme-text-soft)]",children:i})]},n))})]}),o.jsxs("section",{className:"border-y border-[var(--theme-border)] bg-white/[0.018] py-16 sm:py-20",children:[o.jsxs("div",{className:"mx-auto max-w-[800px] text-center","data-reveal":"up",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"Packaging applications"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Solutions for ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"different packaging needs."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Corrugated boxes serve a range of packaging purposes. Final construction should match the product, packing method, and distribution environment."})]}),o.jsx("div",{className:"mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",children:J3.map(([t,n])=>o.jsxs("div",{"data-reveal":"up",className:`${ns} flex min-h-[72px] items-center gap-3 rounded-md p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]/35`,children:[o.jsx(t,{className:"h-4 w-4 shrink-0 text-[var(--theme-accent)]"}),o.jsx("span",{className:"text-xs font-semibold leading-5",children:n})]},n))}),o.jsx("p",{className:"mt-5 text-center text-[10px] leading-5 text-[var(--theme-text-soft)]",children:"Application examples are indicative. Confirm availability and specifications with Fairdeal for your particular requirement."})]}),o.jsxs("section",{className:"space-y-8",children:[o.jsxs("header",{"data-reveal":"up",className:"mx-auto max-w-[760px] text-center",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"From requirement to packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["A considered approach to ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"corrugated solutions."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Packaging development starts with understanding what the box needs to do and selecting materials and construction to match."})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:Z3.map(([t,n],i)=>o.jsxs("article",{"data-reveal":"up",className:"border-t border-[var(--theme-accent)]/50 bg-gradient-to-b from-[var(--theme-accent)]/[0.045] to-transparent p-5 sm:p-6",children:[o.jsxs("span",{className:"text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent)]",children:["0",i+1]}),o.jsx("h3",{className:"mt-5 text-base font-semibold",children:t}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]}),o.jsx("section",{id:"contact",className:"scroll-mt-28",children:o.jsxs("div",{"data-reveal":"up",className:`${ns} relative overflow-hidden rounded-[24px] px-6 py-12 text-center sm:px-10 sm:py-16`,children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(53,212,255,0.1),transparent_45%),radial-gradient(ellipse_at_85%_0%,rgba(164,236,98,0.07),transparent_45%)]"}),o.jsxs("div",{className:"relative mx-auto max-w-[700px]",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"Let's discuss your packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Have a box in mind? ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Let's develop it."})]}),o.jsx("p",{className:"mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)]",children:"Share your box dimensions, flute preference, ply requirement, artwork, and intended application. Fairdeal can discuss your corrugated packaging needs."}),o.jsxs("div",{className:"mt-7 flex flex-wrap justify-center gap-3",children:[o.jsxs(Rt,{to:"/contact",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Enquire about packaging ",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Rt,{href:"#box-solutions",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Review flute options"})]})]})]})})]})}),eA="/boltfaredeal/assets/FAIR%20DEAL-p8-021-DZEneFKK.png",tA="/boltfaredeal/assets/FAIR%20DEAL-p8-022-Cfyo8rF5.png",rA="/boltfaredeal/assets/FAIR%20DEAL-p8-024-Bjo77Wrf.png",nA="/boltfaredeal/assets/FAIR%20DEAL-p8-025-BZk6YAbO.png",iA="/boltfaredeal/assets/FAIR%20DEAL-p8-026-C70OQtiN.png",aA="/boltfaredeal/assets/FAIR%20DEAL-p8-027-CiLFXDVG.png",sA="/boltfaredeal/assets/FAIR%20DEAL-p8-028-Bm808PHd.png",oA="/boltfaredeal/assets/FAIR%20DEAL-p8-029-DR5fBncH.png",lA="/boltfaredeal/assets/FAIR%20DEAL-p8-030-Cyh92s2d.png",cA="/boltfaredeal/assets/FAIR%20DEAL-p8-031-wi6I0nCo.png",dA="/boltfaredeal/assets/FAIR%20DEAL-p8-032-CUxF_f78.png",uA="/boltfaredeal/assets/FAIR%20DEAL-p8-033-DjIS-0ni.png",fA="/boltfaredeal/assets/FAIR%20DEAL-p8-034-BN4xfQ8Y.png",pA="/boltfaredeal/assets/FAIR%20DEAL-p8-035-a7NKr1pW.png",hA="/boltfaredeal/assets/FAIR%20DEAL-p8-036-CxHYl2HD.png",pa=Object.entries(Object.assign({"../assets/images/Services/CopierImages/FAIR DEAL-p8-021.png":eA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-022.png":tA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-024.png":rA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-025.png":nA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-026.png":iA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-027.png":aA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-028.png":sA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-029.png":oA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-030.png":lA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-031.png":cA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-032.png":dA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-033.png":uA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-034.png":fA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-035.png":pA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-036.png":hA})).sort(([a],[t])=>a.localeCompare(t)).map(([a,t])=>({image:t,name:a.split("/").pop()?.replace(/\.[^/.]+$/,"")??"Copier paper"})),Jv="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",mA=[[kN,"Copier paper","Paper for everyday office and print-room use."],[Rn,"Coated paper","Coated grades for a range of print requirements."],[ju,"Sheet-form paper","Paper supplied in sheet form for production needs."]],gA={"-1":{x:2,y:72,scale:1.1,rotY:-26,rotZ:-6,opacity:0,b:1,z:11},0:{x:17,y:56,scale:1.05,rotY:-22,rotZ:-5,opacity:1,b:1,z:10},1:{x:34,y:60,scale:.95,rotY:-18,rotZ:-4,opacity:1,b:.95,z:9},2:{x:50,y:36,scale:.68,rotY:-14,rotZ:-3,opacity:.95,b:.85,z:6},3:{x:65,y:33,scale:.6,rotY:-10,rotZ:-2,opacity:.7,b:.6,z:5},4:{x:78,y:44,scale:.55,rotY:-8,rotZ:-2,opacity:.32,b:.4,z:4},5:{x:90,y:54,scale:.5,rotY:-6,rotZ:-1,opacity:0,b:.3,z:3}},xA={"-1":{x:50,y:80,scale:1.1,rotY:-20,rotZ:-5,opacity:0,b:1,z:11},0:{x:50,y:62,scale:1,rotY:-18,rotZ:-5,opacity:1,b:1,z:10},1:{x:26,y:30,scale:.62,rotY:-12,rotZ:-3,opacity:.95,b:.85,z:6},2:{x:54,y:26,scale:.55,rotY:-10,rotZ:-2,opacity:.7,b:.6,z:5},3:{x:80,y:32,scale:.5,rotY:-8,rotZ:-2,opacity:.32,b:.4,z:4},4:{x:92,y:40,scale:.45,rotY:-6,rotZ:-1,opacity:0,b:.3,z:3}},vA={x:50,y:45,scale:.4,rotY:0,rotZ:0,opacity:0,b:.2,z:0},yA=[{w:96,h:56,rot:-6,color:"rgba(214,178,94,0.45)",glow:!0},{w:84,h:44,rot:-10,color:"rgba(214,178,94,0.28)"},{w:70,h:32,rot:4,color:"rgba(120,220,220,0.22)"},{w:100,h:66,rot:-3,color:"rgba(255,255,255,0.07)"},{w:58,h:22,rot:-12,color:"rgba(214,178,94,0.2)"}],bA=70,wA=50,NA=380,_A=({service:a})=>{const t=a.image,[n,i]=R.useState(0),[s,c]=R.useState(!1),[d,f]=R.useState(!1),p=R.useRef(null),m=R.useRef({active:!1,lastX:0,pointerId:null}),g=R.useRef(!1),y=R.useRef({acc:0,last:0});R.useEffect(()=>{const j=window.matchMedia("(max-width: 767px)"),P=z=>{c(z.matches)};return c(j.matches),j.addEventListener("change",P),()=>{j.removeEventListener("change",P)}},[]),R.useEffect(()=>{if(pa.length<2)return;const j=window.setInterval(()=>{g.current||i(P=>(P+1)%pa.length)},3600);return()=>window.clearInterval(j)},[]);const v=j=>{i(P=>(P+j+pa.length)%pa.length)};R.useEffect(()=>{const j=p.current;if(!j)return;const P=z=>{const O=Math.abs(z.deltaX)>Math.abs(z.deltaY);if(!O&&!z.shiftKey)return;z.preventDefault();const B=O?z.deltaX:z.deltaY,W=y.current,D=Date.now();W.acc+=B,Math.abs(W.acc)>=wA&&D-W.last>NA&&(v(W.acc>0?1:-1),W.acc=0,W.last=D)};return j.addEventListener("wheel",P,{passive:!1}),()=>j.removeEventListener("wheel",P)},[]);const b=j=>{j.pointerType==="mouse"&&j.button!==0||(m.current={active:!0,lastX:j.clientX,pointerId:j.pointerId},g.current=!0,f(!0),j.currentTarget.setPointerCapture?.(j.pointerId))},N=j=>{const P=m.current;if(!P.active||P.pointerId!==j.pointerId)return;const z=j.clientX-P.lastX;Math.abs(z)>=bA&&(v(z<0?1:-1),P.lastX=j.clientX)},w=j=>{const P=m.current;!P.active||P.pointerId!==j.pointerId||(m.current={active:!1,lastX:0,pointerId:null},j.currentTarget.releasePointerCapture?.(j.pointerId),f(!1),g.current=!1)},k=j=>{j.key==="ArrowRight"&&(j.preventDefault(),v(1)),j.key==="ArrowLeft"&&(j.preventDefault(),v(-1))},C=pa.length,A=s?xA:gA,E=j=>{const P=(j-n+C)%C,z=P===C-1?"-1":P;return A[z]??vA};return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-4 pb-16 pt-20 text-[var(--theme-text)] sm:px-8 sm:pb-20 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${Jv} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Copier"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Paper"})]}),o.jsx("p",{"data-reveal":"left",className:"max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:a.description}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:["COPIER PAPER","COATED PAPER","SHEET-FORM PAPER"].map(j=>o.jsx("span",{className:"rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]",children:j},j))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(Rt,{href:"#paper-range",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["View paper range",o.jsx(Xn,{className:"h-4 w-4"})]}),o.jsx(Rt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]",children:[o.jsx("img",{src:t,alt:"Copier paper product image",className:"absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-8"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"PAPER RANGE"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"}),"PAPER SUPPLY"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Paper for"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"everyday print."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Copier, coated, and sheet-form paper options."})]})]})]})]}),o.jsx("section",{className:`${Jv} grid gap-5 rounded-2xl p-5 sm:grid-cols-3 sm:p-6`,children:mA.map(([j,P,z])=>o.jsxs("article",{"data-reveal":"up",className:"flex items-center gap-3",children:[o.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(j,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-xs font-semibold",children:P}),o.jsx("span",{className:"mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]",children:z})]})]},P))}),o.jsxs("section",{id:"paper-range",className:"scroll-mt-28",children:[o.jsxs("header",{className:"flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Copier paper range"}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Explore our"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"paper selection"})]})]}),o.jsxs("div",{className:"flex items-center justify-between gap-5 sm:justify-end",children:[o.jsxs("span",{"aria-live":"polite",className:"border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)] sm:text-sm",children:[String(pa.length).padStart(2,"0")," ","PRODUCTS"]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{type:"button","aria-label":"Previous copier paper image","aria-controls":"copier-orbit-stage",title:"Previous image",onClick:()=>v(-1),className:"grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]",children:o.jsx(vN,{className:"h-5 w-5"})}),o.jsx("button",{type:"button","aria-label":"Next copier paper image","aria-controls":"copier-orbit-stage",title:"Next image",onClick:()=>v(1),className:"grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]",children:o.jsx(yN,{className:"h-5 w-5"})})]})]})]}),o.jsxs("div",{ref:p,id:"copier-orbit-stage",role:"region","aria-roledescription":"carousel","aria-label":"Copier paper product images",tabIndex:0,className:`relative isolate mx-auto mt-8 w-full select-none outline-none focus-visible:ring-1 focus-visible:ring-[var(--theme-accent)]/40 ${d?"cursor-grabbing":"cursor-grab"}`,style:{height:s?"430px":"clamp(450px, 39vw, 560px)",perspective:"1400px",overflow:s?"hidden":"visible",touchAction:"pan-y"},onPointerDown:b,onPointerMove:N,onPointerUp:w,onPointerCancel:w,onPointerEnter:()=>{g.current=!0},onPointerLeave:j=>{m.current.active||(g.current=!1),j.pointerType!=="mouse"&&(g.current=!1)},onKeyDown:k,children:[yA.map((j,P)=>o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-[52%] rounded-[50%]",style:{width:`${s?j.w*1.4:j.w}%`,height:`${j.h}%`,border:`1px solid ${j.color}`,boxShadow:j.glow?`0 0 18px ${j.color}`:"none",transform:`translate(-50%, -50%) rotate(${j.rot}deg)`}},P)),pa.map(({image:j,name:P},z)=>{const O=E(z);return o.jsx("figure",{className:"absolute",style:{left:`${O.x}%`,top:`${O.y}%`,width:s?"52%":"min(250px, 16vw)",aspectRatio:"0.78 / 1",zIndex:O.z,opacity:O.opacity,pointerEvents:"none",transform:`translate(-50%, -50%) scale(${O.scale}) rotateY(${O.rotY}deg) rotateZ(${O.rotZ}deg)`,filter:`brightness(${O.b})`,transition:"left 1000ms cubic-bezier(0.2,0.8,0.2,1), top 1000ms cubic-bezier(0.2,0.8,0.2,1), transform 1000ms cubic-bezier(0.2,0.8,0.2,1), opacity 800ms ease, filter 1000ms ease"},children:o.jsx("img",{src:j,alt:P,loading:"eager",draggable:!1,className:"h-full w-full object-contain",style:{filter:"drop-shadow(0 28px 30px rgba(0,0,0,0.55))"}})},z)})]}),s&&o.jsx("div",{className:"mt-8 text-center",children:o.jsxs("span",{className:"text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--theme-text-soft)]",children:["Product"," ",String(n+1).padStart(2,"0")," ","/"," ",String(pa.length).padStart(2,"0")]})})]})]})})},kA=a=>a.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").trim(),jA=()=>{const{serviceName:a}=_5(),t=Pi.find(i=>kA(i.title)===a);if(!t)return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsx("div",{className:"mx-auto max-w-[1500px]",children:o.jsxs("div",{className:"rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-12",children:[o.jsx(Ge,{className:"mb-4 text-[var(--theme-accent-alt)]",children:"Service not found"}),o.jsx("h1",{className:"mb-6 text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl",children:"We couldn’t find that service."}),o.jsx(Rt,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})]})})});if(t.title==="Flexo Printing")return o.jsx(W3,{service:t});if(t.title==="Offset Printing")return o.jsx(q3,{service:t});if(t.title==="Corrugation")return o.jsx($3,{service:t});if(t.title==="Copier Paper")return o.jsx(_A,{service:t});const n=["Precision-led execution and consistent production output","Material-based customization for your exact requirement","Consultation, setup, and finishing support from our team"];return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-[620px]",children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"OUR SERVICE"}),o.jsx("h1",{className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] text-[var(--theme-text)] max-[600px]:text-[45px]",children:t.title})]}),o.jsx("div",{className:"lg:max-w-[520px] lg:items-end",children:o.jsx(Rt,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})})]}),o.jsx("div",{className:"overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.12)]",children:o.jsxs("div",{className:"grid gap-0 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsx("div",{className:"p-4 sm:p-6 lg:p-8",children:o.jsx("div",{className:"overflow-hidden rounded-[24px]",children:o.jsx("img",{src:t.image,alt:t.title,className:"h-[350px] w-full object-contain sm:h-[420px]"})})}),o.jsxs("div",{className:"flex flex-col justify-center p-6 sm:p-8 lg:p-10",children:[o.jsx("div",{className:"mb-6 flex items-start justify-between gap-4",children:o.jsxs("div",{children:[o.jsx("p",{className:"mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Service overview"}),o.jsx("h2",{className:"text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl",children:t.title})]})}),o.jsx("p",{className:"mb-8 max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:t.description}),o.jsx("ul",{className:"space-y-3",children:n.map(i=>o.jsxs("li",{className:"flex items-start gap-3 text-sm leading-6 text-[var(--theme-text)] sm:text-base",children:[o.jsx("span",{className:"mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]"}),o.jsx("span",{children:i})]},i))}),o.jsx("div",{className:"mt-10",children:o.jsx(Rt,{to:"/contact",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Request a quote"})})]})]})})]})})},EA="/boltfaredeal/assets/diaries01-Dx_epA3O.png",SA="/boltfaredeal/assets/diaries02-CP1-mH4s.png",AA="/boltfaredeal/assets/diaries03-DQ5n17G-.png",CA="/boltfaredeal/assets/lables01-iBxOT7Dx.png",TA="/boltfaredeal/assets/lables04-CXqWjKsi.png",PA="/boltfaredeal/assets/lables07-Bo55jlxk.png",RA="/boltfaredeal/assets/packaging02-CRZm2jjx.png",LA="/boltfaredeal/assets/packaging03-AuZgNdrC.png",OA="/boltfaredeal/assets/packaging04-DJsw5WMj.png",IA="/boltfaredeal/assets/print01-CHSLthKc.png",zA="/boltfaredeal/assets/print02-C9BFc1o-.png",MA="/boltfaredeal/assets/print03-D5mljvbw.png",FA="/boltfaredeal/assets/manuals01-MuTkQks1.png",DA="/boltfaredeal/assets/manuals02-DoOVhN-p.png",BA="/boltfaredeal/assets/manuals03-C3ddYgHo.png",UA="/boltfaredeal/assets/bopp-tapes01-CfxR3Cog.png",WA="/boltfaredeal/assets/bopp-tapes02-CIj6n17W.png",HA="/boltfaredeal/assets/bopp-tapes03-Dmfj9ULN.png",VA="/boltfaredeal/assets/mailer-bag01-cQ9ZedD_.png",YA="/boltfaredeal/assets/mailer-bag02-Dg7abEXx.png",GA="/boltfaredeal/assets/mailer-bag03-RVnfnCUP.png",qA="/boltfaredeal/assets/roll01-57Yyt6tW.png",XA="/boltfaredeal/assets/roll02-DFr7Ftdt.png",QA="/boltfaredeal/assets/roll03-C7UBgT_7.png",KA=["All","Diaries","Labels","Packaging","Print","Manuals","Bopp tapes","Mailer bag","Strapping roll"],Zv=[{title:"Premium Diaries",type:"Corporate Printing",category:"Diaries",image:EA},{title:"Executive Diary Collection",type:"Premium Print",category:"Diaries",image:SA},{title:"Custom Diary Printing",type:"Commercial Printing",category:"Diaries",image:AA},{title:"Product Labels",type:"Label Printing",category:"Labels",image:CA},{title:"Premium Brand Labels",type:"Packaging Print",category:"Labels",image:TA},{title:"Custom Product Labels",type:"Industrial Printing",category:"Labels",image:PA},{title:"Luxury Packaging",type:"Packaging Solutions",category:"Packaging",image:RA},{title:"Custom Packaging",type:"Commercial Packaging",category:"Packaging",image:LA},{title:"Retail Packaging",type:"Premium Packaging",category:"Packaging",image:OA},{title:"Commercial Print",type:"Offset Printing",category:"Print",image:IA},{title:"Premium Print Materials",type:"Commercial Printing",category:"Print",image:zA},{title:"Custom Print Solutions",type:"Print Production",category:"Print",image:MA},{title:"Product Manuals",type:"Instruction Printing",category:"Manuals",image:FA},{title:"Technical Manuals",type:"Commercial Print",category:"Manuals",image:DA},{title:"Instruction Manuals",type:"Print Production",category:"Manuals",image:BA},{title:"BOPP Tape",type:"Industrial Packaging",category:"Bopp tapes",image:UA},{title:"Printed BOPP Tape",type:"Custom Packaging",category:"Bopp tapes",image:WA},{title:"Packaging Tape",type:"Industrial Solutions",category:"Bopp tapes",image:HA},{title:"Mailer Bags",type:"E-Commerce Packaging",category:"Mailer bag",image:VA},{title:"Custom Mailer Bags",type:"Packaging Solutions",category:"Mailer bag",image:YA},{title:"Premium Courier Bags",type:"E-Commerce Packaging",category:"Mailer bag",image:GA},{title:"Strapping Rolls",type:"Industrial Packaging",category:"Strapping roll",image:qA},{title:"PP Strapping Rolls",type:"Packaging Materials",category:"Strapping roll",image:XA},{title:"Industrial Strapping",type:"Packaging Solutions",category:"Strapping roll",image:QA}],JA=()=>{const[a,t]=R.useState("All"),[n,i]=R.useState(0),[s,c]=R.useState(!1),d=R.useRef(null),f=R.useRef(null),p=R.useRef([]),m=R.useRef([]),g=R.useRef(null),y=R.useRef(0),v=R.useRef(!1),b=R.useMemo(()=>a==="All"?Zv:Zv.filter(E=>E.category===a),[a]),N=R.useCallback(E=>{const j=b.length;if(!j)return 0;let P=E-y.current;return P>j/2&&(P-=j),P<-j/2&&(P+=j),P},[b.length]),w=R.useCallback(E=>E===0?{x:0,y:0,scale:1,rotate:0,opacity:1,blur:0,zIndex:30}:E===-1?{x:-285,y:38,scale:.82,rotate:-6,opacity:.68,blur:0,zIndex:20}:E===1?{x:285,y:38,scale:.82,rotate:6,opacity:.68,blur:0,zIndex:20}:E===-2?{x:-460,y:90,scale:.66,rotate:-11,opacity:.28,blur:1,zIndex:10}:E===2?{x:460,y:90,scale:.66,rotate:11,opacity:.28,blur:1,zIndex:10}:{x:E>0?640:-640,y:120,scale:.55,rotate:E>0?14:-14,opacity:0,blur:3,zIndex:1},[]),k=R.useCallback(()=>{p.current.forEach((E,j)=>{if(!E)return;const P=N(j),z=w(P);re.set(E,{xPercent:-50,x:z.x,y:z.y,scale:z.scale,rotation:z.rotate,opacity:z.opacity,zIndex:z.zIndex,filter:`blur(${z.blur}px)`}),m.current[j]&&re.set(m.current[j],{x:0,y:0,scale:1,rotation:0})})},[N,w]),C=R.useCallback(()=>{if(!b.length)return;g.current&&g.current.kill(),c(!0),v.current=!0;const E=re.timeline({onComplete:()=>{c(!1),v.current=!1}});p.current.forEach((j,P)=>{if(!j)return;const z=N(P),O=w(z);E.to(j,{xPercent:-50,x:O.x,y:O.y,scale:O.scale,rotation:O.rotate,opacity:O.opacity,zIndex:O.zIndex,filter:`blur(${O.blur}px)`,duration:.7,ease:"power3.out"},0)}),g.current=E},[N,w,b.length]),A=R.useCallback(E=>{if(v.current||!b.length||b.length<=1)return;const j=b.length;y.current=(y.current+E+j)%j,i(y.current),C()},[C,b.length]);return R.useEffect(()=>{y.current=0,i(0),requestAnimationFrame(()=>{k()})},[a,k]),R.useEffect(()=>{k()},[k,b.length]),R.useEffect(()=>{const E=j=>{j.key==="ArrowLeft"&&A(-1),j.key==="ArrowRight"&&A(1)};return window.addEventListener("keydown",E),()=>{window.removeEventListener("keydown",E)}},[A]),R.useEffect(()=>{const E=f.current;if(!E)return;const j=z=>{if(v.current)return;const O=m.current[y.current];if(!O)return;const B=E.getBoundingClientRect(),W=z.clientX-B.left,D=z.clientY-B.top,Q=W/B.width-.5,F=D/B.height-.5;re.to(O,{x:Q*12,y:F*12,duration:.6,ease:"power2.out",overwrite:!0})},P=()=>{const z=m.current[y.current];z&&re.to(z,{x:0,y:0,duration:.8,ease:"power3.out"})};return E.addEventListener("mousemove",j),E.addEventListener("mouseleave",P),()=>{E.removeEventListener("mousemove",j),E.removeEventListener("mouseleave",P)}},[]),R.useEffect(()=>()=>{g.current&&g.current.kill()},[]),o.jsxs("section",{ref:d,className:"fd-museum-portfolio","aria-label":"Fairdeal Print Pack portfolio",children:[o.jsx("div",{className:"fd-museum-glow fd-glow-one"}),o.jsx("div",{className:"fd-museum-glow fd-glow-two"}),o.jsxs("div",{className:"fd-portfolio-container",children:[o.jsxs("div",{className:"fd-portfolio-header",children:[o.jsxs("div",{className:"fd-portfolio-kicker",children:[o.jsx("span",{}),"OUR WORK",o.jsx("span",{})]}),o.jsxs("h2",{children:[o.jsx("span",{children:"Print"})," ",o.jsx("span",{className:"fd-title-accent-yellow",children:"That"})," ",o.jsx("span",{className:"fd-title-accent-mint",children:"Speaks."})]}),o.jsx("p",{children:"A curated selection of print and packaging solutions crafted for brands that care about every detail."})]}),o.jsx("div",{className:"fd-filter-wrapper",children:o.jsx("div",{className:"fd-filter-list",children:KA.map(E=>o.jsx("button",{type:"button",className:`fd-filter-button ${a===E?"is-active":""}`,onClick:()=>{v.current||t(E)},children:E},E))})}),o.jsxs("div",{ref:f,className:"fd-portfolio-stage",children:[o.jsxs("div",{className:"fd-stage-number",children:[o.jsx("span",{children:String(n+1).padStart(2,"0")}),o.jsx("i",{}),o.jsx("span",{children:String(b.length).padStart(2,"0")})]}),o.jsxs("div",{className:"fd-stage-hint",children:[o.jsx("span",{className:"fd-hint-line"}),o.jsx("span",{children:"DRAG / USE ARROWS"}),o.jsx(no,{size:14})]}),b.map((E,j)=>o.jsxs("article",{ref:P=>{p.current[j]=P},className:`fd-portfolio-card ${j===n?"is-active":""}`,children:[j===n&&o.jsxs("div",{className:"fd-active-border","aria-hidden":"true",children:[o.jsx("span",{className:"fd-border-line fd-border-top"}),o.jsx("span",{className:"fd-border-line fd-border-right"}),o.jsx("span",{className:"fd-border-line fd-border-bottom"}),o.jsx("span",{className:"fd-border-line fd-border-left"})]}),o.jsx("div",{className:"fd-card-inner",children:o.jsxs("div",{className:"fd-card-image-wrap",children:[o.jsx("img",{ref:P=>{m.current[j]=P},src:E.image,alt:E.title,className:"fd-card-image",draggable:"false"}),o.jsxs("div",{className:"fd-card-overlay",children:[o.jsx("div",{className:"fd-card-category",children:E.category}),o.jsx("h3",{children:E.title}),o.jsx("span",{className:"fd-card-type",children:E.type})]})]})})]},`${E.title}-${j}`)),o.jsxs("div",{className:"fd-stage-navigation","aria-label":"Portfolio navigation",children:[o.jsx("button",{type:"button",className:"fd-stage-nav fd-stage-nav-prev",onClick:()=>A(-1),disabled:s||b.length<=1,"aria-label":"Previous project",children:o.jsx(fN,{size:18})}),o.jsx("button",{type:"button",className:"fd-stage-nav fd-stage-nav-next",onClick:()=>A(1),disabled:s||b.length<=1,"aria-label":"Next project",children:o.jsx(Xn,{size:18})})]})]})]}),o.jsx("style",{children:`
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
      `})]})},ZA=[{icon:NN,title:"Working Hours",lines:["Mon - Sun: 9 am - 5 pm","Weekly Off: Thursday"]},{icon:TN,title:"Phone",lines:["020 2747 4888"]},{icon:AN,title:"Email",lines:["info@fairdealprintpack.com"]},{icon:CN,title:"Address",lines:["128/2, Sanghvi Steel Compound,","Mohan Nagar, Telco Road,","Chinchwad, Pune 411019,","Maharashtra (India)."]}],$A=()=>{const[a,t]=R.useState(!1),[n,i]=R.useState(()=>document.documentElement.getAttribute("data-theme")==="light");R.useEffect(()=>{const g=()=>{i(document.documentElement.getAttribute("data-theme")==="light")};g();const y=new MutationObserver(g);return y.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>y.disconnect()},[]);const[s,c]=R.useState({name:"",email:"",phone:"",message:""}),d=n?"linear-gradient(135deg, rgba(26,125,106,0.13), rgba(255,255,255,0.88))":"linear-gradient(135deg, rgba(146,209,188,0.12), rgba(11,16,20,0.97))",f=n?"rgba(26,125,106,0.12)":"rgba(146,209,188,0.12)",p=n?"rgba(199,183,25,0.12)":"rgba(225,222,0,0.08)",m=g=>{g.preventDefault(),t(!0),c({name:"",email:"",phone:"",message:""}),setTimeout(()=>t(!1),5e3)};return o.jsxs("main",{className:"relative min-h-screen overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsx("div",{className:"mx-auto max-w-[1180px] text-center",children:o.jsx(Ge,{className:"mt-0 text-center md:mt-4",children:"CONTACT US"})})}),o.jsx("section",{className:"relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20",children:o.jsx("div",{className:"mx-auto max-w-[1180px]",children:o.jsxs("div",{className:"grid overflow-hidden rounded-[18px] border border-[var(--theme-border)] shadow-[0_16px_40px_rgba(0,0,0,0.06)] lg:grid-cols-[0.88fr_1.12fr]",style:{background:"var(--theme-surface)"},children:[o.jsxs("div",{"data-reveal":"left",className:"relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10",style:{background:d,borderRight:"1px solid var(--theme-border)"},children:[o.jsx("div",{className:"pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl",style:{background:f}}),o.jsx("div",{className:"pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full blur-3xl",style:{background:p}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(Ge,{className:"mb-2 text-left text-[var(--theme-accent-alt)]",children:"Get In Touch"}),o.jsx("h2",{className:"max-w-[360px] [font-family:'Merriweather',Helvetica] text-[24px] font-normal leading-tight tracking-[-0.04em] sm:text-[28px]",style:{color:"var(--theme-text)"},children:"Let's talk about your next project."}),o.jsx("p",{className:"mt-3 max-w-[380px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Whether you need a quotation, have a question about our services, or want to discuss a custom requirement, our team is ready to help."})]}),o.jsx("div",{className:"relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1",children:ZA.map(g=>{const y=g.icon;return o.jsxs("div",{className:"group flex items-start gap-3",children:[o.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105",style:{borderColor:"var(--theme-border)",background:n?"rgba(26,125,106,0.08)":"rgba(146,209,188,0.08)",color:"var(--theme-accent)"},children:o.jsx(y,{className:"h-4 w-4"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.12em]",style:{color:"var(--theme-accent-alt)"},children:g.title}),o.jsx("div",{className:"mt-1",children:g.lines.map(v=>o.jsx("p",{className:"[font-family:'Inter',Helvetica] text-sm font-light leading-5",style:{color:"var(--theme-text-soft)"},children:v},v))})]})]},g.title)})})]}),o.jsxs("div",{"data-reveal":"right",className:"p-6 sm:p-8 lg:p-10",style:{background:"var(--theme-bg)"},children:[o.jsxs("div",{className:"mb-7",children:[o.jsx(Ge,{className:"mb-2 text-left text-[var(--theme-accent-alt)]",children:"Send us a Message"}),o.jsx("h2",{className:"[font-family:'Merriweather',Helvetica] text-[24px] font-normal tracking-[-0.04em] sm:text-[28px]",style:{color:"var(--theme-text)"},children:"We'd love to hear from you."}),o.jsx("p",{className:"mt-2 max-w-[520px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Fill out the form below and our team will get back to you as soon as possible."})]}),o.jsxs("form",{onSubmit:m,className:"flex flex-col gap-5",children:[o.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"name",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Name"}),o.jsx(Al,{id:"name",type:"text",required:!0,value:s.name,onChange:g=>c({...s,name:g.target.value}),placeholder:"Your full name",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"email",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Email"}),o.jsx(Al,{id:"email",type:"email",required:!0,value:s.email,onChange:g=>c({...s,email:g.target.value}),placeholder:"your@email.com",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"phone",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Phone"}),o.jsx(Al,{id:"phone",type:"tel",value:s.phone,onChange:g=>c({...s,phone:g.target.value}),placeholder:"Your phone number",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"message",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Message"}),o.jsx("textarea",{id:"message",required:!0,rows:5,value:s.message,onChange:g=>c({...s,message:g.target.value}),placeholder:"Tell us about your project...",className:"w-full resize-none rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)] transition-colors duration-300 focus:border-[var(--theme-accent)] focus:ring-1 focus:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between",children:[o.jsx("p",{className:`text-xs transition-opacity duration-300 ${a?"opacity-100":"opacity-0"}`,style:{color:"var(--theme-text-soft)"},children:"Thank you. We'll get back to you soon."}),o.jsxs(Rt,{type:"submit",className:"h-11 px-6 text-sm font-semibold",children:[a?"Message Sent":"Send Message",!a&&o.jsx(RN,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})]})]})})}),o.jsx("section",{className:"relative z-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8",children:o.jsx("div",{className:"mx-auto max-w-[1180px]",children:o.jsx("div",{"data-reveal":"up",className:"group relative h-[260px] overflow-hidden rounded-[16px] border sm:h-[320px] lg:h-[360px]",style:{borderColor:"var(--theme-border)",background:"var(--theme-surface)"},children:o.jsx("iframe",{title:"Fairdeal Print Pack Location",src:"https://www.google.com/maps?q=Fairdeal%20Print%20Pack%2C%20Mohanagar%2C%20Chinchwad%2C%20Pune%20411033&output=embed",className:"h-full w-full border-0 grayscale transition-all duration-700 group-hover:grayscale-0",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})})})]})},e4=()=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px]",children:[o.jsxs("div",{className:"mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-[620px]",children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"OUR TECHNOLOGY"}),o.jsx("h1",{className:"text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl lg:text-[3.1rem]",children:"Technology & Infrastructure"})]}),o.jsxs("div",{className:"flex flex-col gap-4 lg:max-w-[520px] lg:items-end",children:[o.jsx("p",{className:"max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Advanced printing, finishing, and packaging technology built to deliver precision, consistency, and high-quality results."}),o.jsx(Rt,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})]})]}),o.jsx("div",{className:"grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3",children:z3.map(a=>o.jsxs(ln,{to:"/technology",className:"group block",children:[o.jsx("article",{className:`\r
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
                              `}),o.jsx("span",{children:t})]},t))})]})})})]},a.title))})]})}),t4=[{title:"1. Acceptance of Terms",body:"By accessing or using the Fairdeal Print Pack website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services."},{title:"2. Our Services",body:"Fairdeal Print Pack provides printing, packaging, paper supply, labeling, corrugated products, BOPP tapes, and related production services. Service availability, specifications, pricing, timelines, and delivery terms may vary by project and will be confirmed through our direct quotation or written agreement."},{title:"3. Quotations and Orders",body:"All quotations are subject to confirmation and may be updated based on material availability, artwork requirements, quantity, specifications, or production constraints. An order is considered accepted only after written confirmation from Fairdeal Print Pack. Any change to scope, quantity, delivery date, or specifications must be approved in writing."},{title:"4. Client Responsibilities",body:"Clients are responsible for providing accurate requirements, final artwork, approved content, dimensions, material specifications, and any copyright or trademark permissions required for the project. Fairdeal Print Pack may request clarification before production begins. We are not responsible for delays caused by incomplete, inaccurate, or late client information."},{title:"5. Artwork, Copyright, and Intellectual Property",body:"Clients must ensure that all supplied artwork, text, images, logos, and other materials are authorized for use. Fairdeal Print Pack does not claim ownership of client-provided content. However, Fairdeal Print Pack remains the owner of its website content, branding, templates, photographs, and proprietary production materials unless otherwise agreed."},{title:"6. Production and Delivery",body:"Production timelines are estimates and may be affected by material sourcing, machine availability, order volume, quality checks, transportation, or circumstances beyond our reasonable control. Fairdeal Print Pack will make reasonable efforts to meet agreed deadlines but cannot guarantee exact delivery dates."},{title:"7. Payment Terms",body:"Payment terms will be stated in the relevant quotation or agreement. Pending or overdue payments may result in suspension of production or delivery. Clients are responsible for any applicable taxes, duties, or charges not expressly included in the quotation."},{title:"8. Limitation of Liability",body:"Fairdeal Print Pack will use reasonable care and professional standards in performing its services. Our liability for any claim is limited to the fees paid for the specific service giving rise to the claim, except where liability cannot be excluded under applicable law. We shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of business, reputation, or anticipated profits."},{title:"9. Customer Communications",body:"By contacting Fairdeal Print Pack through the website, telephone, email, or other channels, you agree that we may use the information provided to respond to your inquiry, provide services, and communicate about your project. We will handle personal information in accordance with our Privacy Policy."},{title:"10. Website Use",body:"The website may be used for lawful purposes only. You must not attempt to interfere with its operation, access restricted areas, introduce harmful software, or use the site in a manner that could damage, disable, or impair our services or infrastructure."},{title:"11. Changes to These Terms",body:"Fairdeal Print Pack may update these Terms and Conditions from time to time. Continued use of the website after changes are published indicates acceptance of the revised terms."},{title:"12. Governing Law",body:"These Terms and Conditions are governed by the laws of India, and any dispute relating to them will be subject to the jurisdiction of the courts located in Pune, Maharashtra, unless otherwise required by applicable law."}],r4=()=>{const[a,t]=R.useState(()=>document.documentElement.getAttribute("data-theme")==="light");R.useEffect(()=>{const i=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};i();const s=new MutationObserver(i);return s.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>s.disconnect()},[]);const n=a?"linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))":"linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";return o.jsxs("main",{className:"min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] text-center",children:[o.jsx(Ge,{className:"mt-0 text-center md:mt-4",children:"LEGAL INFORMATION"}),o.jsx("h1",{className:"mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]",children:"Terms & Conditions"}),o.jsx("p",{className:"mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"These terms govern your use of the Fairdeal Print Pack website and the services we provide."})]})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]",style:{background:n},children:[o.jsxs("div",{className:"grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12",children:[o.jsxs("div",{className:"pb-5 lg:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:"Effective date"}),o.jsx("p",{className:"mt-2 text-sm text-[var(--theme-text-soft)]",children:"October 7, 2026"})]}),o.jsx("div",{className:"lg:border-l lg:border-[var(--theme-border)] lg:pl-10",children:o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)]",children:"Please review these terms carefully before using our website or engaging with our business. By using our website or placing an enquiry, you agree to these terms unless you have a separate written agreement with Fairdeal Print Pack that supersedes them."})})]}),o.jsx("div",{className:"space-y-7 p-6 sm:p-10 lg:p-12",children:t4.map((i,s)=>o.jsxs("article",{className:"border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:String(s+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl",children:i.title}),o.jsx("p",{className:"mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:i.body})]},i.title))})]})})]})},n4=[{title:"1. Information We Collect",body:"We may collect information you provide directly, such as your name, email address, phone number, company name, project requirements, and message. We may also collect technical information about your device, browser, IP address, referring website, pages visited, and interaction with our website."},{title:"2. How We Use Information",body:"We use personal information to respond to enquiries, provide quotations, discuss projects, manage service requests, improve our website, communicate with customers, and comply with applicable legal obligations. We may also use contact information to send service updates or relevant business communications when you have consented or where such communication is permitted by law."},{title:"3. Information Sharing",body:"We do not sell personal information. We may share information with trusted service providers who assist us with website hosting, email delivery, analytics, customer support, logistics, or business operations, provided they use the information only for the agreed purpose and protect it appropriately. We may disclose information when required by law, court order, regulatory request, or to protect the rights or safety of our customers, staff, or business."},{title:"4. Cookies and Analytics",body:"Our website may use cookies or similar technologies to remember preferences, understand website usage, improve performance, and provide a better user experience. You can configure your browser to reject or delete cookies, although some website features may not function correctly if cookies are disabled."},{title:"5. Data Security",body:"We use reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, use, disclosure, alteration, or destruction. No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security."},{title:"6. Your Rights",body:"Depending on applicable law, you may have the right to access, correct, update, delete, or restrict the use of your personal information. You may also object to certain processing or request a copy of the information we hold about you. To exercise these rights, please contact us using the details at the end of this policy."},{title:"7. Retention",body:"We retain personal information only for as long as necessary to fulfill the purpose for which it was collected, satisfy legal or regulatory obligations, resolve disputes, or enforce agreements. Information no longer required for those purposes may be securely deleted or anonymized."},{title:"8. Third-Party Websites",body:"Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those external websites. Please review their privacy policies before providing them with your information."},{title:"9. Children's Privacy",body:"Our website is not directed to children under the age of 18, and we do not knowingly collect personal information from children without appropriate parental or guardian consent. If we become aware that we have received personal information from a child without valid consent, we will take steps to delete it."},{title:"10. Changes to This Policy",body:"Fairdeal Print Pack may update this Privacy Policy from time to time. We will publish the updated version on this page with a revised effective date. Continued use of the website after changes are made indicates your acceptance of the revised policy."},{title:"11. Contact Us",body:"If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact Fairdeal Print Pack at info@fairdealprintpack.com or 020 2747 4888. You may also contact us at Fairdeal Print Pack, Mohanagar, Chinchwad 411033."}],i4=()=>{const[a,t]=R.useState(()=>document.documentElement.getAttribute("data-theme")==="light");R.useEffect(()=>{const i=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};i();const s=new MutationObserver(i);return s.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>s.disconnect()},[]);const n=a?"linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))":"linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";return o.jsxs("main",{className:"min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] text-center",children:[o.jsx(Ge,{className:"mt-0 text-center md:mt-4",children:"PRIVACY NOTICE"}),o.jsx("h1",{className:"mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]",children:"Privacy Policy"}),o.jsx("p",{className:"mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"This policy explains how Fairdeal Print Pack collects, uses, and protects information provided through our website and business communications."})]})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]",style:{background:n},children:[o.jsxs("div",{className:"grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12",children:[o.jsxs("div",{className:"pb-5 lg:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:"Effective date"}),o.jsx("p",{className:"mt-2 text-sm text-[var(--theme-text-soft)]",children:"October 7, 2026"})]}),o.jsx("div",{className:"lg:border-l lg:border-[var(--theme-border)] lg:pl-10",children:o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)]",children:"We respect your privacy and are committed to handling your personal information responsibly. This policy applies to information collected through our website and direct communications with Fairdeal Print Pack."})})]}),o.jsx("div",{className:"space-y-7 p-6 sm:p-10 lg:p-12",children:n4.map((i,s)=>o.jsxs("article",{className:"border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:String(s+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl",children:i.title}),o.jsx("p",{className:"mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:i.body})]},i.title))})]})})]})},$b=document.getElementById("app");if(!$b)throw new Error("App root element not found");q2.createRoot($b).render(o.jsx(R.StrictMode,{children:o.jsx(q5,{children:o.jsx(D5,{children:o.jsxs(_n,{element:o.jsx(q_,{}),children:[o.jsx(_n,{path:"/",element:o.jsx(fv,{})}),o.jsx(_n,{path:"/about",element:o.jsx(u3,{})}),o.jsx(_n,{path:"/services",element:o.jsx(M3,{})}),o.jsx(_n,{path:"/services/:serviceName",element:o.jsx(jA,{})}),o.jsx(_n,{path:"/technology",element:o.jsx(e4,{})}),o.jsx(_n,{path:"/portfolio",element:o.jsx(JA,{})}),o.jsx(_n,{path:"/contact",element:o.jsx($A,{})}),o.jsx(_n,{path:"/terms-and-conditions",element:o.jsx(r4,{})}),o.jsx(_n,{path:"/privacy-policy",element:o.jsx(i4,{})}),o.jsx(_n,{path:"*",element:o.jsx(fv,{})})]})})})}));
