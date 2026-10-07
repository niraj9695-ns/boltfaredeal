function U2(s,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in s)){const c=Object.getOwnPropertyDescriptor(i,a);c&&Object.defineProperty(s,a,c.get?c:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function W2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nf={exports:{}},ml={},kf={exports:{}},Fe={};var px;function H2(){if(px)return Fe;px=1;var s=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,w={};function k(T,Y,ae){this.props=T,this.context=Y,this.refs=w,this.updater=ae||b}k.prototype.isReactComponent={},k.prototype.setState=function(T,Y){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Y,"setState")},k.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function C(){}C.prototype=k.prototype;function A(T,Y,ae){this.props=T,this.context=Y,this.refs=w,this.updater=ae||b}var E=A.prototype=new C;E.constructor=A,_(E,k.prototype),E.isPureReactComponent=!0;var j=Array.isArray,P=Object.prototype.hasOwnProperty,M={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function B(T,Y,ae){var le,ge={},K=null,de=null;if(Y!=null)for(le in Y.ref!==void 0&&(de=Y.ref),Y.key!==void 0&&(K=""+Y.key),Y)P.call(Y,le)&&!L.hasOwnProperty(le)&&(ge[le]=Y[le]);var ye=arguments.length-2;if(ye===1)ge.children=ae;else if(1<ye){for(var xe=Array(ye),ze=0;ze<ye;ze++)xe[ze]=arguments[ze+2];ge.children=xe}if(T&&T.defaultProps)for(le in ye=T.defaultProps,ye)ge[le]===void 0&&(ge[le]=ye[le]);return{$$typeof:s,type:T,key:K,ref:de,props:ge,_owner:M.current}}function W(T,Y){return{$$typeof:s,type:T.type,key:Y,ref:T.ref,props:T.props,_owner:T._owner}}function F(T){return typeof T=="object"&&T!==null&&T.$$typeof===s}function Q(T){var Y={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ae){return Y[ae]})}var D=/\/+/g;function J(T,Y){return typeof T=="object"&&T!==null&&T.key!=null?Q(""+T.key):Y.toString(36)}function Z(T,Y,ae,le,ge){var K=typeof T;(K==="undefined"||K==="boolean")&&(T=null);var de=!1;if(T===null)de=!0;else switch(K){case"string":case"number":de=!0;break;case"object":switch(T.$$typeof){case s:case t:de=!0}}if(de)return de=T,ge=ge(de),T=le===""?"."+J(de,0):le,j(ge)?(ae="",T!=null&&(ae=T.replace(D,"$&/")+"/"),Z(ge,Y,ae,"",function(ze){return ze})):ge!=null&&(F(ge)&&(ge=W(ge,ae+(!ge.key||de&&de.key===ge.key?"":(""+ge.key).replace(D,"$&/")+"/")+T)),Y.push(ge)),1;if(de=0,le=le===""?".":le+":",j(T))for(var ye=0;ye<T.length;ye++){K=T[ye];var xe=le+J(K,ye);de+=Z(K,Y,ae,xe,ge)}else if(xe=v(T),typeof xe=="function")for(T=xe.call(T),ye=0;!(K=T.next()).done;)K=K.value,xe=le+J(K,ye++),de+=Z(K,Y,ae,xe,ge);else if(K==="object")throw Y=String(T),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return de}function se(T,Y,ae){if(T==null)return T;var le=[],ge=0;return Z(T,le,"","",function(K){return Y.call(ae,K,ge++)}),le}function ce(T){if(T._status===-1){var Y=T._result;Y=Y(),Y.then(function(ae){(T._status===0||T._status===-1)&&(T._status=1,T._result=ae)},function(ae){(T._status===0||T._status===-1)&&(T._status=2,T._result=ae)}),T._status===-1&&(T._status=0,T._result=Y)}if(T._status===1)return T._result.default;throw T._result}var $={current:null},V={transition:null},X={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:V,ReactCurrentOwner:M};function S(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:se,forEach:function(T,Y,ae){se(T,function(){Y.apply(this,arguments)},ae)},count:function(T){var Y=0;return se(T,function(){Y++}),Y},toArray:function(T){return se(T,function(Y){return Y})||[]},only:function(T){if(!F(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Fe.Component=k,Fe.Fragment=n,Fe.Profiler=a,Fe.PureComponent=A,Fe.StrictMode=i,Fe.Suspense=f,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Fe.act=S,Fe.cloneElement=function(T,Y,ae){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var le=_({},T.props),ge=T.key,K=T.ref,de=T._owner;if(Y!=null){if(Y.ref!==void 0&&(K=Y.ref,de=M.current),Y.key!==void 0&&(ge=""+Y.key),T.type&&T.type.defaultProps)var ye=T.type.defaultProps;for(xe in Y)P.call(Y,xe)&&!L.hasOwnProperty(xe)&&(le[xe]=Y[xe]===void 0&&ye!==void 0?ye[xe]:Y[xe])}var xe=arguments.length-2;if(xe===1)le.children=ae;else if(1<xe){ye=Array(xe);for(var ze=0;ze<xe;ze++)ye[ze]=arguments[ze+2];le.children=ye}return{$$typeof:s,type:T.type,key:ge,ref:K,props:le,_owner:de}},Fe.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:c,_context:T},T.Consumer=T},Fe.createElement=B,Fe.createFactory=function(T){var Y=B.bind(null,T);return Y.type=T,Y},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(T){return{$$typeof:p,render:T}},Fe.isValidElement=F,Fe.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:ce}},Fe.memo=function(T,Y){return{$$typeof:m,type:T,compare:Y===void 0?null:Y}},Fe.startTransition=function(T){var Y=V.transition;V.transition={};try{T()}finally{V.transition=Y}},Fe.unstable_act=S,Fe.useCallback=function(T,Y){return $.current.useCallback(T,Y)},Fe.useContext=function(T){return $.current.useContext(T)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(T){return $.current.useDeferredValue(T)},Fe.useEffect=function(T,Y){return $.current.useEffect(T,Y)},Fe.useId=function(){return $.current.useId()},Fe.useImperativeHandle=function(T,Y,ae){return $.current.useImperativeHandle(T,Y,ae)},Fe.useInsertionEffect=function(T,Y){return $.current.useInsertionEffect(T,Y)},Fe.useLayoutEffect=function(T,Y){return $.current.useLayoutEffect(T,Y)},Fe.useMemo=function(T,Y){return $.current.useMemo(T,Y)},Fe.useReducer=function(T,Y,ae){return $.current.useReducer(T,Y,ae)},Fe.useRef=function(T){return $.current.useRef(T)},Fe.useState=function(T){return $.current.useState(T)},Fe.useSyncExternalStore=function(T,Y,ae){return $.current.useSyncExternalStore(T,Y,ae)},Fe.useTransition=function(){return $.current.useTransition()},Fe.version="18.3.1",Fe}var fx;function Bh(){return fx||(fx=1,kf.exports=H2()),kf.exports}var hx;function V2(){if(hx)return ml;hx=1;var s=Bh(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(p,f,m){var g,y={},v=null,b=null;m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(b=f.ref);for(g in f)i.call(f,g)&&!c.hasOwnProperty(g)&&(y[g]=f[g]);if(p&&p.defaultProps)for(g in f=p.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:t,type:p,key:v,ref:b,props:y,_owner:a.current}}return ml.Fragment=n,ml.jsx=u,ml.jsxs=u,ml}var mx;function Y2(){return mx||(mx=1,Nf.exports=V2()),Nf.exports}var o=Y2(),O=Bh();const ms=W2(O),r1=U2({__proto__:null,default:ms},[O]);var _u={},jf={exports:{}},Dr={},Ef={exports:{}},Sf={};var gx;function G2(){return gx||(gx=1,(function(s){function t(V,X){var S=V.length;V.push(X);e:for(;0<S;){var T=S-1>>>1,Y=V[T];if(0<a(Y,X))V[T]=X,V[S]=Y,S=T;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var X=V[0],S=V.pop();if(S!==X){V[0]=S;e:for(var T=0,Y=V.length,ae=Y>>>1;T<ae;){var le=2*(T+1)-1,ge=V[le],K=le+1,de=V[K];if(0>a(ge,S))K<Y&&0>a(de,ge)?(V[T]=de,V[K]=S,T=K):(V[T]=ge,V[le]=S,T=le);else if(K<Y&&0>a(de,S))V[T]=de,V[K]=S,T=K;else break e}}return X}function a(V,X){var S=V.sortIndex-X.sortIndex;return S!==0?S:V.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,p=u.now();s.unstable_now=function(){return u.now()-p}}var f=[],m=[],g=1,y=null,v=3,b=!1,_=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var X=n(m);X!==null;){if(X.callback===null)i(m);else if(X.startTime<=V)i(m),X.sortIndex=X.expirationTime,t(f,X);else break;X=n(m)}}function j(V){if(w=!1,E(V),!_)if(n(f)!==null)_=!0,ce(P);else{var X=n(m);X!==null&&$(j,X.startTime-V)}}function P(V,X){_=!1,w&&(w=!1,C(B),B=-1),b=!0;var S=v;try{for(E(X),y=n(f);y!==null&&(!(y.expirationTime>X)||V&&!Q());){var T=y.callback;if(typeof T=="function"){y.callback=null,v=y.priorityLevel;var Y=T(y.expirationTime<=X);X=s.unstable_now(),typeof Y=="function"?y.callback=Y:y===n(f)&&i(f),E(X)}else i(f);y=n(f)}if(y!==null)var ae=!0;else{var le=n(m);le!==null&&$(j,le.startTime-X),ae=!1}return ae}finally{y=null,v=S,b=!1}}var M=!1,L=null,B=-1,W=5,F=-1;function Q(){return!(s.unstable_now()-F<W)}function D(){if(L!==null){var V=s.unstable_now();F=V;var X=!0;try{X=L(!0,V)}finally{X?J():(M=!1,L=null)}}else M=!1}var J;if(typeof A=="function")J=function(){A(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,se=Z.port2;Z.port1.onmessage=D,J=function(){se.postMessage(null)}}else J=function(){k(D,0)};function ce(V){L=V,M||(M=!0,J())}function $(V,X){B=k(function(){V(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){_||b||(_=!0,ce(P))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(f)},s.unstable_next=function(V){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var S=v;v=X;try{return V()}finally{v=S}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var S=v;v=V;try{return X()}finally{v=S}},s.unstable_scheduleCallback=function(V,X,S){var T=s.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?T+S:T):S=T,V){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=S+Y,V={id:g++,callback:X,priorityLevel:V,startTime:S,expirationTime:Y,sortIndex:-1},S>T?(V.sortIndex=S,t(m,V),n(f)===null&&V===n(m)&&(w?(C(B),B=-1):w=!0,$(j,S-T))):(V.sortIndex=Y,t(f,V),_||b||(_=!0,ce(P))),V},s.unstable_shouldYield=Q,s.unstable_wrapCallback=function(V){var X=v;return function(){var S=v;v=X;try{return V.apply(this,arguments)}finally{v=S}}}})(Sf)),Sf}var xx;function q2(){return xx||(xx=1,Ef.exports=G2()),Ef.exports}var vx;function X2(){if(vx)return Dr;vx=1;var s=Bh(),t=q2();function n(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function c(e,r){u(e,r),u(e+"Capture",r)}function u(e,r){for(a[e]=r,e=0;e<r.length;e++)i.add(r[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(e){return f.call(y,e)?!0:f.call(g,e)?!1:m.test(e)?y[e]=!0:(g[e]=!0,!1)}function b(e,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,r,l,d){if(r===null||typeof r>"u"||b(e,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(e,r,l,d,h,x,N){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=e,this.type=r,this.sanitizeURL=x,this.removeEmptyString=N}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];k[r]=new w(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(C,A);k[r]=new w(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(C,A);k[r]=new w(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(C,A);k[r]=new w(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function E(e,r,l,d){var h=k.hasOwnProperty(r)?k[r]:null;(h!==null?h.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,l,h,d)&&(l=null),d||h===null?v(r)&&(l===null?e.removeAttribute(r):e.setAttribute(r,""+l)):h.mustUseProperty?e[h.propertyName]=l===null?h.type===3?!1:"":l:(r=h.attributeName,d=h.attributeNamespace,l===null?e.removeAttribute(r):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,d?e.setAttributeNS(d,r,l):e.setAttribute(r,l))))}var j=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),M=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),Q=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),V=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,T;function Y(e){if(T===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+e}var ae=!1;function le(e,r){if(!e||ae)return"";ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(G){var d=G}Reflect.construct(e,[],r)}else{try{r.call()}catch(G){d=G}e.call(r.prototype)}else{try{throw Error()}catch(G){d=G}e()}}catch(G){if(G&&d&&typeof G.stack=="string"){for(var h=G.stack.split(`
`),x=d.stack.split(`
`),N=h.length-1,R=x.length-1;1<=N&&0<=R&&h[N]!==x[R];)R--;for(;1<=N&&0<=R;N--,R--)if(h[N]!==x[R]){if(N!==1||R!==1)do if(N--,R--,0>R||h[N]!==x[R]){var I=`
`+h[N].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=N&&0<=R);break}}}finally{ae=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?Y(e):""}function ge(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case M:return"Portal";case W:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case Z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Q:return(e.displayName||"Context")+".Consumer";case F:return(e._context.displayName||"Context")+".Provider";case D:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return r=e.displayName||null,r!==null?r:K(e.type)||"Memo";case ce:r=e._payload,e=e._init;try{return K(e(r))}catch{}}return null}function de(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(r);case 8:return r===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ze(e){var r=xe(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),d=""+e[r];if(!e.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,x=l.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return h.call(this)},set:function(N){d=""+N,x.call(this,N)}}),Object.defineProperty(e,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(N){d=""+N},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function bt(e){e._valueTracker||(e._valueTracker=ze(e))}function At(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return e&&(d=xe(e)?e.checked?"true":"false":e.value),e=d,e!==l?(r.setValue(e),!0):!1}function re(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,r){var l=r.checked;return S({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function it(e,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=ye(r.value!=null?r.value:l),e._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function wt(e,r){r=r.checked,r!=null&&E(e,"checked",r,!1)}function q(e,r){wt(e,r);var l=ye(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(d==="submit"||d==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?qr(e,r.type,l):r.hasOwnProperty("defaultValue")&&qr(e,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function sr(e,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,l||r===e.value||(e.value=r),e.defaultValue=r}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function qr(e,r,l){(r!=="number"||re(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var Cr=Array.isArray;function Qe(e,r,l,d){if(e=e.options,r){r={};for(var h=0;h<l.length;h++)r["$"+l[h]]=!0;for(l=0;l<e.length;l++)h=r.hasOwnProperty("$"+e[l].value),e[l].selected!==h&&(e[l].selected=h),h&&d&&(e[l].defaultSelected=!0)}else{for(l=""+ye(l),r=null,h=0;h<e.length;h++){if(e[h].value===l){e[h].selected=!0,d&&(e[h].defaultSelected=!0);return}r!==null||e[h].disabled||(r=e[h])}r!==null&&(r.selected=!0)}}function Xr(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return S({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function In(e,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(n(92));if(Cr(l)){if(1<l.length)throw Error(n(93));l=l[0]}r=l}r==null&&(r=""),l=r}e._wrapperState={initialValue:ye(l)}}function Zn(e,r){var l=ye(r.value),d=ye(r.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),r.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),d!=null&&(e.defaultValue=""+d)}function Ct(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Mn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function st(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Mn(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,gr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,h){MSApp.execUnsafeLocalFunction(function(){return e(r,l,d,h)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function xr(e,r){if(r){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=r;return}}e.textContent=r}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_t=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){_t.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),zn[r]=zn[e]})});function Ds(e,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||zn.hasOwnProperty(e)&&zn[e]?(""+r).trim():r+"px"}function hn(e,r){e=e.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,h=Ds(l,r[l],d);l==="float"&&(l="cssFloat"),d?e.setProperty(l,h):e[l]=h}}var Hi=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $n(e,r){if(r){if(Hi[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function mn(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dn=null;function Re(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Yt=null,Gt=null;function Tr(e){if(e=el(e)){if(typeof Fn!="function")throw Error(n(280));var r=e.stateNode;r&&(r=zc(r),Fn(e.stateNode,e.type,r))}}function ei(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function xi(){if(Yt){var e=Yt,r=Gt;if(Gt=Yt=null,Tr(e),r)for(e=0;e<r.length;e++)Tr(r[e])}}function gn(e,r){return e(r)}function Vi(){}var Te=!1;function Ne(e,r,l){if(Te)return e(r,l);Te=!0;try{return gn(e,r,l)}finally{Te=!1,(Yt!==null||Gt!==null)&&(Vi(),xi())}}function We(e,r){var l=e.stateNode;if(l===null)return null;var d=zc(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(e=e.type,d=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!d;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(n(231,r,typeof l));return l}var ue=!1;if(p)try{var Se={};Object.defineProperty(Se,"passive",{get:function(){ue=!0}}),window.addEventListener("test",Se,Se),window.removeEventListener("test",Se,Se)}catch{ue=!1}function we(e,r,l,d,h,x,N,R,I){var G=Array.prototype.slice.call(arguments,3);try{r.apply(l,G)}catch(te){this.onError(te)}}var Ae=!1,ft=null,Ie=!1,at=null,qt={onError:function(e){Ae=!0,ft=e}};function ut(e,r,l,d,h,x,N,R,I){Ae=!1,ft=null,we.apply(qt,arguments)}function et(e,r,l,d,h,x,N,R,I){if(ut.apply(this,arguments),Ae){if(Ae){var G=ft;Ae=!1,ft=null}else throw Error(n(198));Ie||(Ie=!0,at=G)}}function He(e){var r=e,l=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(l=r.return),e=r.return;while(e)}return r.tag===3?l:null}function Pr(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function tt(e){if(He(e)!==e)throw Error(n(188))}function vr(e){var r=e.alternate;if(!r){if(r=He(e),r===null)throw Error(n(188));return r!==e?null:e}for(var l=e,d=r;;){var h=l.return;if(h===null)break;var x=h.alternate;if(x===null){if(d=h.return,d!==null){l=d;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===l)return tt(h),e;if(x===d)return tt(h),r;x=x.sibling}throw Error(n(188))}if(l.return!==d.return)l=h,d=x;else{for(var N=!1,R=h.child;R;){if(R===l){N=!0,l=h,d=x;break}if(R===d){N=!0,d=h,l=x;break}R=R.sibling}if(!N){for(R=x.child;R;){if(R===l){N=!0,l=x,d=h;break}if(R===d){N=!0,d=x,l=h;break}R=R.sibling}if(!N)throw Error(n(189))}}if(l.alternate!==d)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?e:r}function Qr(e){return e=vr(e),e!==null?Ot(e):null}function Ot(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ot(e);if(r!==null)return r;e=e.sibling}return null}var It=t.unstable_scheduleCallback,Bt=t.unstable_cancelCallback,vi=t.unstable_shouldYield,ja=t.unstable_requestPaint,De=t.unstable_now,Tt=t.unstable_getCurrentPriorityLevel,Rr=t.unstable_ImmediatePriority,Ea=t.unstable_UserBlockingPriority,Fs=t.unstable_NormalPriority,Bs=t.unstable_LowPriority,Kr=t.unstable_IdlePriority,ti=null,yr=null;function ri(e){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:sw,nw=Math.log,iw=Math.LN2;function sw(e){return e>>>=0,e===0?32:31-(nw(e)/iw|0)|0}var yc=64,bc=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wc(e,r){var l=e.pendingLanes;if(l===0)return 0;var d=0,h=e.suspendedLanes,x=e.pingedLanes,N=l&268435455;if(N!==0){var R=N&~h;R!==0?d=Mo(R):(x&=N,x!==0&&(d=Mo(x)))}else N=l&~h,N!==0?d=Mo(N):x!==0&&(d=Mo(x));if(d===0)return 0;if(r!==0&&r!==d&&(r&h)===0&&(h=d&-d,x=r&-r,h>=x||h===16&&(x&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=d;0<r;)l=31-Bn(r),h=1<<l,d|=e[l],r&=~h;return d}function aw(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ow(e,r){for(var l=e.suspendedLanes,d=e.pingedLanes,h=e.expirationTimes,x=e.pendingLanes;0<x;){var N=31-Bn(x),R=1<<N,I=h[N];I===-1?((R&l)===0||(R&d)!==0)&&(h[N]=aw(R,r)):I<=r&&(e.expiredLanes|=R),x&=~R}}function Hd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hm(){var e=yc;return yc<<=1,(yc&4194240)===0&&(yc=64),e}function Vd(e){for(var r=[],l=0;31>l;l++)r.push(e);return r}function zo(e,r,l){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Bn(r),e[r]=l}function lw(e,r){var l=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var d=e.eventTimes;for(e=e.expirationTimes;0<l;){var h=31-Bn(l),x=1<<h;r[h]=0,d[h]=-1,e[h]=-1,l&=~x}}function Yd(e,r){var l=e.entangledLanes|=r;for(e=e.entanglements;l;){var d=31-Bn(l),h=1<<d;h&r|e[d]&r&&(e[d]|=r),l&=~h}}var Ke=0;function Vm(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ym,Gd,Gm,qm,Xm,qd=!1,_c=[],Yi=null,Gi=null,qi=null,Do=new Map,Fo=new Map,Xi=[],cw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qm(e,r){switch(e){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Do.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(r.pointerId)}}function Bo(e,r,l,d,h,x){return e===null||e.nativeEvent!==x?(e={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[h]},r!==null&&(r=el(r),r!==null&&Gd(r)),e):(e.eventSystemFlags|=d,r=e.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),e)}function uw(e,r,l,d,h){switch(r){case"focusin":return Yi=Bo(Yi,e,r,l,d,h),!0;case"dragenter":return Gi=Bo(Gi,e,r,l,d,h),!0;case"mouseover":return qi=Bo(qi,e,r,l,d,h),!0;case"pointerover":var x=h.pointerId;return Do.set(x,Bo(Do.get(x)||null,e,r,l,d,h)),!0;case"gotpointercapture":return x=h.pointerId,Fo.set(x,Bo(Fo.get(x)||null,e,r,l,d,h)),!0}return!1}function Km(e){var r=Us(e.target);if(r!==null){var l=He(r);if(l!==null){if(r=l.tag,r===13){if(r=Pr(l),r!==null){e.blockedOn=r,Xm(e.priority,function(){Gm(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var l=Qd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var d=new l.constructor(l.type,l);Dn=d,l.target.dispatchEvent(d),Dn=null}else return r=el(l),r!==null&&Gd(r),e.blockedOn=l,!1;r.shift()}return!0}function Jm(e,r,l){Nc(e)&&l.delete(r)}function dw(){qd=!1,Yi!==null&&Nc(Yi)&&(Yi=null),Gi!==null&&Nc(Gi)&&(Gi=null),qi!==null&&Nc(qi)&&(qi=null),Do.forEach(Jm),Fo.forEach(Jm)}function Uo(e,r){e.blockedOn===r&&(e.blockedOn=null,qd||(qd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,dw)))}function Wo(e){function r(h){return Uo(h,e)}if(0<_c.length){Uo(_c[0],e);for(var l=1;l<_c.length;l++){var d=_c[l];d.blockedOn===e&&(d.blockedOn=null)}}for(Yi!==null&&Uo(Yi,e),Gi!==null&&Uo(Gi,e),qi!==null&&Uo(qi,e),Do.forEach(r),Fo.forEach(r),l=0;l<Xi.length;l++)d=Xi[l],d.blockedOn===e&&(d.blockedOn=null);for(;0<Xi.length&&(l=Xi[0],l.blockedOn===null);)Km(l),l.blockedOn===null&&Xi.shift()}var Sa=j.ReactCurrentBatchConfig,kc=!0;function pw(e,r,l,d){var h=Ke,x=Sa.transition;Sa.transition=null;try{Ke=1,Xd(e,r,l,d)}finally{Ke=h,Sa.transition=x}}function fw(e,r,l,d){var h=Ke,x=Sa.transition;Sa.transition=null;try{Ke=4,Xd(e,r,l,d)}finally{Ke=h,Sa.transition=x}}function Xd(e,r,l,d){if(kc){var h=Qd(e,r,l,d);if(h===null)pp(e,r,d,jc,l),Qm(e,d);else if(uw(h,e,r,l,d))d.stopPropagation();else if(Qm(e,d),r&4&&-1<cw.indexOf(e)){for(;h!==null;){var x=el(h);if(x!==null&&Ym(x),x=Qd(e,r,l,d),x===null&&pp(e,r,d,jc,l),x===h)break;h=x}h!==null&&d.stopPropagation()}else pp(e,r,d,null,l)}}var jc=null;function Qd(e,r,l,d){if(jc=null,e=Re(d),e=Us(e),e!==null)if(r=He(e),r===null)e=null;else if(l=r.tag,l===13){if(e=Pr(r),e!==null)return e;e=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return jc=e,null}function Zm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tt()){case Rr:return 1;case Ea:return 4;case Fs:case Bs:return 16;case Kr:return 536870912;default:return 16}default:return 16}}var Qi=null,Kd=null,Ec=null;function $m(){if(Ec)return Ec;var e,r=Kd,l=r.length,d,h="value"in Qi?Qi.value:Qi.textContent,x=h.length;for(e=0;e<l&&r[e]===h[e];e++);var N=l-e;for(d=1;d<=N&&r[l-d]===h[x-d];d++);return Ec=h.slice(e,1<d?1-d:void 0)}function Sc(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ac(){return!0}function eg(){return!1}function Jr(e){function r(l,d,h,x,N){this._reactName=l,this._targetInst=h,this.type=d,this.nativeEvent=x,this.target=N,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(l=e[R],this[R]=l?l(x):x[R]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ac:eg,this.isPropagationStopped=eg,this}return S(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),r}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=Jr(Aa),Ho=S({},Aa,{view:0,detail:0}),hw=Jr(Ho),Zd,$d,Vo,Cc=S({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Zd=e.screenX-Vo.screenX,$d=e.screenY-Vo.screenY):$d=Zd=0,Vo=e),Zd)},movementY:function(e){return"movementY"in e?e.movementY:$d}}),tg=Jr(Cc),mw=S({},Cc,{dataTransfer:0}),gw=Jr(mw),xw=S({},Ho,{relatedTarget:0}),ep=Jr(xw),vw=S({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),yw=Jr(vw),bw=S({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ww=Jr(bw),_w=S({},Aa,{data:0}),rg=Jr(_w),Nw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ew(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=jw[e])?!!r[e]:!1}function tp(){return Ew}var Sw=S({},Ho,{key:function(e){if(e.key){var r=Nw[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Sc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(e){return e.type==="keypress"?Sc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Aw=Jr(Sw),Cw=S({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=Jr(Cw),Tw=S({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),Pw=Jr(Tw),Rw=S({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lw=Jr(Rw),Ow=S({},Cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iw=Jr(Ow),Mw=[9,13,27,32],rp=p&&"CompositionEvent"in window,Yo=null;p&&"documentMode"in document&&(Yo=document.documentMode);var zw=p&&"TextEvent"in window&&!Yo,ig=p&&(!rp||Yo&&8<Yo&&11>=Yo),sg=" ",ag=!1;function og(e,r){switch(e){case"keyup":return Mw.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function Dw(e,r){switch(e){case"compositionend":return lg(r);case"keypress":return r.which!==32?null:(ag=!0,sg);case"textInput":return e=r.data,e===sg&&ag?null:e;default:return null}}function Fw(e,r){if(Ca)return e==="compositionend"||!rp&&og(e,r)?(e=$m(),Ec=Kd=Qi=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ig&&r.locale!=="ko"?null:r.data;default:return null}}var Bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Bw[e.type]:r==="textarea"}function ug(e,r,l,d){ei(d),r=Oc(r,"onChange"),0<r.length&&(l=new Jd("onChange","change",null,l,d),e.push({event:l,listeners:r}))}var Go=null,qo=null;function Uw(e){Ag(e,0)}function Tc(e){var r=Oa(e);if(At(r))return e}function Ww(e,r){if(e==="change")return r}var dg=!1;if(p){var np;if(p){var ip="oninput"in document;if(!ip){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),ip=typeof pg.oninput=="function"}np=ip}else np=!1;dg=np&&(!document.documentMode||9<document.documentMode)}function fg(){Go&&(Go.detachEvent("onpropertychange",hg),qo=Go=null)}function hg(e){if(e.propertyName==="value"&&Tc(qo)){var r=[];ug(r,qo,e,Re(e)),Ne(Uw,r)}}function Hw(e,r,l){e==="focusin"?(fg(),Go=r,qo=l,Go.attachEvent("onpropertychange",hg)):e==="focusout"&&fg()}function Vw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tc(qo)}function Yw(e,r){if(e==="click")return Tc(r)}function Gw(e,r){if(e==="input"||e==="change")return Tc(r)}function qw(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Un=typeof Object.is=="function"?Object.is:qw;function Xo(e,r){if(Un(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var l=Object.keys(e),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var h=l[d];if(!f.call(r,h)||!Un(e[h],r[h]))return!1}return!0}function mg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gg(e,r){var l=mg(e);e=0;for(var d;l;){if(l.nodeType===3){if(d=e+l.textContent.length,e<=r&&d>=r)return{node:l,offset:r-e};e=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=mg(l)}}function xg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?xg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function vg(){for(var e=window,r=re();r instanceof e.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)e=r.contentWindow;else break;r=re(e.document)}return r}function sp(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Xw(e){var r=vg(),l=e.focusedElem,d=e.selectionRange;if(r!==l&&l&&l.ownerDocument&&xg(l.ownerDocument.documentElement,l)){if(d!==null&&sp(l)){if(r=d.start,e=d.end,e===void 0&&(e=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(e,l.value.length);else if(e=(r=l.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var h=l.textContent.length,x=Math.min(d.start,h);d=d.end===void 0?x:Math.min(d.end,h),!e.extend&&x>d&&(h=d,d=x,x=h),h=gg(l,x);var N=gg(l,d);h&&N&&(e.rangeCount!==1||e.anchorNode!==h.node||e.anchorOffset!==h.offset||e.focusNode!==N.node||e.focusOffset!==N.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),e.removeAllRanges(),x>d?(e.addRange(r),e.extend(N.node,N.offset)):(r.setEnd(N.node,N.offset),e.addRange(r)))}}for(r=[],e=l;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)e=r[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qw=p&&"documentMode"in document&&11>=document.documentMode,Ta=null,ap=null,Qo=null,op=!1;function yg(e,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;op||Ta==null||Ta!==re(d)||(d=Ta,"selectionStart"in d&&sp(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Qo&&Xo(Qo,d)||(Qo=d,d=Oc(ap,"onSelect"),0<d.length&&(r=new Jd("onSelect","select",null,r,l),e.push({event:r,listeners:d}),r.target=Ta)))}function Pc(e,r){var l={};return l[e.toLowerCase()]=r.toLowerCase(),l["Webkit"+e]="webkit"+r,l["Moz"+e]="moz"+r,l}var Pa={animationend:Pc("Animation","AnimationEnd"),animationiteration:Pc("Animation","AnimationIteration"),animationstart:Pc("Animation","AnimationStart"),transitionend:Pc("Transition","TransitionEnd")},lp={},bg={};p&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function Rc(e){if(lp[e])return lp[e];if(!Pa[e])return e;var r=Pa[e],l;for(l in r)if(r.hasOwnProperty(l)&&l in bg)return lp[e]=r[l];return e}var wg=Rc("animationend"),_g=Rc("animationiteration"),Ng=Rc("animationstart"),kg=Rc("transitionend"),jg=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(e,r){jg.set(e,r),c(r,[e])}for(var cp=0;cp<Eg.length;cp++){var up=Eg[cp],Kw=up.toLowerCase(),Jw=up[0].toUpperCase()+up.slice(1);Ki(Kw,"on"+Jw)}Ki(wg,"onAnimationEnd"),Ki(_g,"onAnimationIteration"),Ki(Ng,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(kg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Sg(e,r,l){var d=e.type||"unknown-event";e.currentTarget=l,et(d,r,void 0,e),e.currentTarget=null}function Ag(e,r){r=(r&4)!==0;for(var l=0;l<e.length;l++){var d=e[l],h=d.event;d=d.listeners;e:{var x=void 0;if(r)for(var N=d.length-1;0<=N;N--){var R=d[N],I=R.instance,G=R.currentTarget;if(R=R.listener,I!==x&&h.isPropagationStopped())break e;Sg(h,R,G),x=I}else for(N=0;N<d.length;N++){if(R=d[N],I=R.instance,G=R.currentTarget,R=R.listener,I!==x&&h.isPropagationStopped())break e;Sg(h,R,G),x=I}}}if(Ie)throw e=at,Ie=!1,at=null,e}function ot(e,r){var l=r[vp];l===void 0&&(l=r[vp]=new Set);var d=e+"__bubble";l.has(d)||(Cg(r,e,2,!1),l.add(d))}function dp(e,r,l){var d=0;r&&(d|=4),Cg(l,e,d,r)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[Lc]){e[Lc]=!0,i.forEach(function(l){l!=="selectionchange"&&(Zw.has(l)||dp(l,!1,e),dp(l,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Lc]||(r[Lc]=!0,dp("selectionchange",!1,r))}}function Cg(e,r,l,d){switch(Zm(r)){case 1:var h=pw;break;case 4:h=fw;break;default:h=Xd}l=h.bind(null,r,l,e),h=void 0,!ue||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),d?h!==void 0?e.addEventListener(r,l,{capture:!0,passive:h}):e.addEventListener(r,l,!0):h!==void 0?e.addEventListener(r,l,{passive:h}):e.addEventListener(r,l,!1)}function pp(e,r,l,d,h){var x=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var N=d.tag;if(N===3||N===4){var R=d.stateNode.containerInfo;if(R===h||R.nodeType===8&&R.parentNode===h)break;if(N===4)for(N=d.return;N!==null;){var I=N.tag;if((I===3||I===4)&&(I=N.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;N=N.return}for(;R!==null;){if(N=Us(R),N===null)return;if(I=N.tag,I===5||I===6){d=x=N;continue e}R=R.parentNode}}d=d.return}Ne(function(){var G=x,te=Re(l),ie=[];e:{var ee=jg.get(e);if(ee!==void 0){var pe=Jd,me=e;switch(e){case"keypress":if(Sc(l)===0)break e;case"keydown":case"keyup":pe=Aw;break;case"focusin":me="focus",pe=ep;break;case"focusout":me="blur",pe=ep;break;case"beforeblur":case"afterblur":pe=ep;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Pw;break;case wg:case _g:case Ng:pe=yw;break;case kg:pe=Lw;break;case"scroll":pe=hw;break;case"wheel":pe=Iw;break;case"copy":case"cut":case"paste":pe=ww;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=ng}var ve=(r&4)!==0,Pt=!ve&&e==="scroll",U=ve?ee!==null?ee+"Capture":null:ee;ve=[];for(var z=G,H;z!==null;){H=z;var oe=H.stateNode;if(H.tag===5&&oe!==null&&(H=oe,U!==null&&(oe=We(z,U),oe!=null&&ve.push(Zo(z,oe,H)))),Pt)break;z=z.return}0<ve.length&&(ee=new pe(ee,me,null,l,te),ie.push({event:ee,listeners:ve}))}}if((r&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",ee&&l!==Dn&&(me=l.relatedTarget||l.fromElement)&&(Us(me)||me[yi]))break e;if((pe||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,pe?(me=l.relatedTarget||l.toElement,pe=G,me=me?Us(me):null,me!==null&&(Pt=He(me),me!==Pt||me.tag!==5&&me.tag!==6)&&(me=null)):(pe=null,me=G),pe!==me)){if(ve=tg,oe="onMouseLeave",U="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(ve=ng,oe="onPointerLeave",U="onPointerEnter",z="pointer"),Pt=pe==null?ee:Oa(pe),H=me==null?ee:Oa(me),ee=new ve(oe,z+"leave",pe,l,te),ee.target=Pt,ee.relatedTarget=H,oe=null,Us(te)===G&&(ve=new ve(U,z+"enter",me,l,te),ve.target=H,ve.relatedTarget=Pt,oe=ve),Pt=oe,pe&&me)t:{for(ve=pe,U=me,z=0,H=ve;H;H=Ra(H))z++;for(H=0,oe=U;oe;oe=Ra(oe))H++;for(;0<z-H;)ve=Ra(ve),z--;for(;0<H-z;)U=Ra(U),H--;for(;z--;){if(ve===U||U!==null&&ve===U.alternate)break t;ve=Ra(ve),U=Ra(U)}ve=null}else ve=null;pe!==null&&Tg(ie,ee,pe,ve,!1),me!==null&&Pt!==null&&Tg(ie,Pt,me,ve,!0)}}e:{if(ee=G?Oa(G):window,pe=ee.nodeName&&ee.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ee.type==="file")var be=Ww;else if(cg(ee))if(dg)be=Gw;else{be=Vw;var ke=Hw}else(pe=ee.nodeName)&&pe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(be=Yw);if(be&&(be=be(e,G))){ug(ie,be,l,te);break e}ke&&ke(e,ee,G),e==="focusout"&&(ke=ee._wrapperState)&&ke.controlled&&ee.type==="number"&&qr(ee,"number",ee.value)}switch(ke=G?Oa(G):window,e){case"focusin":(cg(ke)||ke.contentEditable==="true")&&(Ta=ke,ap=G,Qo=null);break;case"focusout":Qo=ap=Ta=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,yg(ie,l,te);break;case"selectionchange":if(Qw)break;case"keydown":case"keyup":yg(ie,l,te)}var je;if(rp)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ca?og(e,l)&&(Ce="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Ce="onCompositionStart");Ce&&(ig&&l.locale!=="ko"&&(Ca||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ca&&(je=$m()):(Qi=te,Kd="value"in Qi?Qi.value:Qi.textContent,Ca=!0)),ke=Oc(G,Ce),0<ke.length&&(Ce=new rg(Ce,e,null,l,te),ie.push({event:Ce,listeners:ke}),je?Ce.data=je:(je=lg(l),je!==null&&(Ce.data=je)))),(je=zw?Dw(e,l):Fw(e,l))&&(G=Oc(G,"onBeforeInput"),0<G.length&&(te=new rg("onBeforeInput","beforeinput",null,l,te),ie.push({event:te,listeners:G}),te.data=je))}Ag(ie,r)})}function Zo(e,r,l){return{instance:e,listener:r,currentTarget:l}}function Oc(e,r){for(var l=r+"Capture",d=[];e!==null;){var h=e,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=We(e,l),x!=null&&d.unshift(Zo(e,x,h)),x=We(e,r),x!=null&&d.push(Zo(e,x,h))),e=e.return}return d}function Ra(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tg(e,r,l,d,h){for(var x=r._reactName,N=[];l!==null&&l!==d;){var R=l,I=R.alternate,G=R.stateNode;if(I!==null&&I===d)break;R.tag===5&&G!==null&&(R=G,h?(I=We(l,x),I!=null&&N.unshift(Zo(l,I,R))):h||(I=We(l,x),I!=null&&N.push(Zo(l,I,R)))),l=l.return}N.length!==0&&e.push({event:r,listeners:N})}var $w=/\r\n?/g,e2=/\u0000|\uFFFD/g;function Pg(e){return(typeof e=="string"?e:""+e).replace($w,`
`).replace(e2,"")}function Ic(e,r,l){if(r=Pg(r),Pg(e)!==r&&l)throw Error(n(425))}function Mc(){}var fp=null,hp=null;function mp(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var gp=typeof setTimeout=="function"?setTimeout:void 0,t2=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,r2=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(n2)}:gp;function n2(e){setTimeout(function(){throw e})}function xp(e,r){var l=r,d=0;do{var h=l.nextSibling;if(e.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(d===0){e.removeChild(h),Wo(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=h}while(l);Wo(r)}function Ji(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Lg(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return e;r--}else l==="/$"&&r++}e=e.previousSibling}return null}var La=Math.random().toString(36).slice(2),ni="__reactFiber$"+La,$o="__reactProps$"+La,yi="__reactContainer$"+La,vp="__reactEvents$"+La,i2="__reactListeners$"+La,s2="__reactHandles$"+La;function Us(e){var r=e[ni];if(r)return r;for(var l=e.parentNode;l;){if(r=l[yi]||l[ni]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(e=Lg(e);e!==null;){if(l=e[ni])return l;e=Lg(e)}return r}e=l,l=e.parentNode}return null}function el(e){return e=e[ni]||e[yi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Oa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(n(33))}function zc(e){return e[$o]||null}var yp=[],Ia=-1;function Zi(e){return{current:e}}function lt(e){0>Ia||(e.current=yp[Ia],yp[Ia]=null,Ia--)}function rt(e,r){Ia++,yp[Ia]=e.current,e.current=r}var $i={},or=Zi($i),Lr=Zi(!1),Ws=$i;function Ma(e,r){var l=e.type.contextTypes;if(!l)return $i;var d=e.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in l)h[x]=r[x];return d&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=h),h}function Or(e){return e=e.childContextTypes,e!=null}function Dc(){lt(Lr),lt(or)}function Og(e,r,l){if(or.current!==$i)throw Error(n(168));rt(or,r),rt(Lr,l)}function Ig(e,r,l){var d=e.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var h in d)if(!(h in r))throw Error(n(108,de(e)||"Unknown",h));return S({},l,d)}function Fc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$i,Ws=or.current,rt(or,e),rt(Lr,Lr.current),!0}function Mg(e,r,l){var d=e.stateNode;if(!d)throw Error(n(169));l?(e=Ig(e,r,Ws),d.__reactInternalMemoizedMergedChildContext=e,lt(Lr),lt(or),rt(or,e)):lt(Lr),rt(Lr,l)}var bi=null,Bc=!1,bp=!1;function zg(e){bi===null?bi=[e]:bi.push(e)}function a2(e){Bc=!0,zg(e)}function es(){if(!bp&&bi!==null){bp=!0;var e=0,r=Ke;try{var l=bi;for(Ke=1;e<l.length;e++){var d=l[e];do d=d(!0);while(d!==null)}bi=null,Bc=!1}catch(h){throw bi!==null&&(bi=bi.slice(e+1)),It(Rr,es),h}finally{Ke=r,bp=!1}}return null}var za=[],Da=0,Uc=null,Wc=0,xn=[],vn=0,Hs=null,wi=1,_i="";function Vs(e,r){za[Da++]=Wc,za[Da++]=Uc,Uc=e,Wc=r}function Dg(e,r,l){xn[vn++]=wi,xn[vn++]=_i,xn[vn++]=Hs,Hs=e;var d=wi;e=_i;var h=32-Bn(d)-1;d&=~(1<<h),l+=1;var x=32-Bn(r)+h;if(30<x){var N=h-h%5;x=(d&(1<<N)-1).toString(32),d>>=N,h-=N,wi=1<<32-Bn(r)+h|l<<h|d,_i=x+e}else wi=1<<x|l<<h|d,_i=e}function wp(e){e.return!==null&&(Vs(e,1),Dg(e,1,0))}function _p(e){for(;e===Uc;)Uc=za[--Da],za[Da]=null,Wc=za[--Da],za[Da]=null;for(;e===Hs;)Hs=xn[--vn],xn[vn]=null,_i=xn[--vn],xn[vn]=null,wi=xn[--vn],xn[vn]=null}var Zr=null,$r=null,dt=!1,Wn=null;function Fg(e,r){var l=_n(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=e,r=e.deletions,r===null?(e.deletions=[l],e.flags|=16):r.push(l)}function Bg(e,r){switch(e.tag){case 5:var l=e.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Zr=e,$r=Ji(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Zr=e,$r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Hs!==null?{id:wi,overflow:_i}:null,e.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=_n(18,null,null,0),l.stateNode=r,l.return=e,e.child=l,Zr=e,$r=null,!0):!1;default:return!1}}function Np(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kp(e){if(dt){var r=$r;if(r){var l=r;if(!Bg(e,r)){if(Np(e))throw Error(n(418));r=Ji(l.nextSibling);var d=Zr;r&&Bg(e,r)?Fg(d,l):(e.flags=e.flags&-4097|2,dt=!1,Zr=e)}}else{if(Np(e))throw Error(n(418));e.flags=e.flags&-4097|2,dt=!1,Zr=e}}}function Ug(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zr=e}function Hc(e){if(e!==Zr)return!1;if(!dt)return Ug(e),dt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!mp(e.type,e.memoizedProps)),r&&(r=$r)){if(Np(e))throw Wg(),Error(n(418));for(;r;)Fg(e,r),r=Ji(r.nextSibling)}if(Ug(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(r===0){$r=Ji(e.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}e=e.nextSibling}$r=null}}else $r=Zr?Ji(e.stateNode.nextSibling):null;return!0}function Wg(){for(var e=$r;e;)e=Ji(e.nextSibling)}function Fa(){$r=Zr=null,dt=!1}function jp(e){Wn===null?Wn=[e]:Wn.push(e)}var o2=j.ReactCurrentBatchConfig;function tl(e,r,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var d=l.stateNode}if(!d)throw Error(n(147,e));var h=d,x=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(N){var R=h.refs;N===null?delete R[x]:R[x]=N},r._stringRef=x,r)}if(typeof e!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,e))}return e}function Vc(e,r){throw e=Object.prototype.toString.call(r),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hg(e){var r=e._init;return r(e._payload)}function Vg(e){function r(U,z){if(e){var H=U.deletions;H===null?(U.deletions=[z],U.flags|=16):H.push(z)}}function l(U,z){if(!e)return null;for(;z!==null;)r(U,z),z=z.sibling;return null}function d(U,z){for(U=new Map;z!==null;)z.key!==null?U.set(z.key,z):U.set(z.index,z),z=z.sibling;return U}function h(U,z){return U=ls(U,z),U.index=0,U.sibling=null,U}function x(U,z,H){return U.index=H,e?(H=U.alternate,H!==null?(H=H.index,H<z?(U.flags|=2,z):H):(U.flags|=2,z)):(U.flags|=1048576,z)}function N(U){return e&&U.alternate===null&&(U.flags|=2),U}function R(U,z,H,oe){return z===null||z.tag!==6?(z=xf(H,U.mode,oe),z.return=U,z):(z=h(z,H),z.return=U,z)}function I(U,z,H,oe){var be=H.type;return be===L?te(U,z,H.props.children,oe,H.key):z!==null&&(z.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ce&&Hg(be)===z.type)?(oe=h(z,H.props),oe.ref=tl(U,z,H),oe.return=U,oe):(oe=hu(H.type,H.key,H.props,null,U.mode,oe),oe.ref=tl(U,z,H),oe.return=U,oe)}function G(U,z,H,oe){return z===null||z.tag!==4||z.stateNode.containerInfo!==H.containerInfo||z.stateNode.implementation!==H.implementation?(z=vf(H,U.mode,oe),z.return=U,z):(z=h(z,H.children||[]),z.return=U,z)}function te(U,z,H,oe,be){return z===null||z.tag!==7?(z=Zs(H,U.mode,oe,be),z.return=U,z):(z=h(z,H),z.return=U,z)}function ie(U,z,H){if(typeof z=="string"&&z!==""||typeof z=="number")return z=xf(""+z,U.mode,H),z.return=U,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case P:return H=hu(z.type,z.key,z.props,null,U.mode,H),H.ref=tl(U,null,z),H.return=U,H;case M:return z=vf(z,U.mode,H),z.return=U,z;case ce:var oe=z._init;return ie(U,oe(z._payload),H)}if(Cr(z)||X(z))return z=Zs(z,U.mode,H,null),z.return=U,z;Vc(U,z)}return null}function ee(U,z,H,oe){var be=z!==null?z.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return be!==null?null:R(U,z,""+H,oe);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case P:return H.key===be?I(U,z,H,oe):null;case M:return H.key===be?G(U,z,H,oe):null;case ce:return be=H._init,ee(U,z,be(H._payload),oe)}if(Cr(H)||X(H))return be!==null?null:te(U,z,H,oe,null);Vc(U,H)}return null}function pe(U,z,H,oe,be){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return U=U.get(H)||null,R(z,U,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case P:return U=U.get(oe.key===null?H:oe.key)||null,I(z,U,oe,be);case M:return U=U.get(oe.key===null?H:oe.key)||null,G(z,U,oe,be);case ce:var ke=oe._init;return pe(U,z,H,ke(oe._payload),be)}if(Cr(oe)||X(oe))return U=U.get(H)||null,te(z,U,oe,be,null);Vc(z,oe)}return null}function me(U,z,H,oe){for(var be=null,ke=null,je=z,Ce=z=0,Kt=null;je!==null&&Ce<H.length;Ce++){je.index>Ce?(Kt=je,je=null):Kt=je.sibling;var qe=ee(U,je,H[Ce],oe);if(qe===null){je===null&&(je=Kt);break}e&&je&&qe.alternate===null&&r(U,je),z=x(qe,z,Ce),ke===null?be=qe:ke.sibling=qe,ke=qe,je=Kt}if(Ce===H.length)return l(U,je),dt&&Vs(U,Ce),be;if(je===null){for(;Ce<H.length;Ce++)je=ie(U,H[Ce],oe),je!==null&&(z=x(je,z,Ce),ke===null?be=je:ke.sibling=je,ke=je);return dt&&Vs(U,Ce),be}for(je=d(U,je);Ce<H.length;Ce++)Kt=pe(je,U,Ce,H[Ce],oe),Kt!==null&&(e&&Kt.alternate!==null&&je.delete(Kt.key===null?Ce:Kt.key),z=x(Kt,z,Ce),ke===null?be=Kt:ke.sibling=Kt,ke=Kt);return e&&je.forEach(function(cs){return r(U,cs)}),dt&&Vs(U,Ce),be}function ve(U,z,H,oe){var be=X(H);if(typeof be!="function")throw Error(n(150));if(H=be.call(H),H==null)throw Error(n(151));for(var ke=be=null,je=z,Ce=z=0,Kt=null,qe=H.next();je!==null&&!qe.done;Ce++,qe=H.next()){je.index>Ce?(Kt=je,je=null):Kt=je.sibling;var cs=ee(U,je,qe.value,oe);if(cs===null){je===null&&(je=Kt);break}e&&je&&cs.alternate===null&&r(U,je),z=x(cs,z,Ce),ke===null?be=cs:ke.sibling=cs,ke=cs,je=Kt}if(qe.done)return l(U,je),dt&&Vs(U,Ce),be;if(je===null){for(;!qe.done;Ce++,qe=H.next())qe=ie(U,qe.value,oe),qe!==null&&(z=x(qe,z,Ce),ke===null?be=qe:ke.sibling=qe,ke=qe);return dt&&Vs(U,Ce),be}for(je=d(U,je);!qe.done;Ce++,qe=H.next())qe=pe(je,U,Ce,qe.value,oe),qe!==null&&(e&&qe.alternate!==null&&je.delete(qe.key===null?Ce:qe.key),z=x(qe,z,Ce),ke===null?be=qe:ke.sibling=qe,ke=qe);return e&&je.forEach(function(B2){return r(U,B2)}),dt&&Vs(U,Ce),be}function Pt(U,z,H,oe){if(typeof H=="object"&&H!==null&&H.type===L&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case P:e:{for(var be=H.key,ke=z;ke!==null;){if(ke.key===be){if(be=H.type,be===L){if(ke.tag===7){l(U,ke.sibling),z=h(ke,H.props.children),z.return=U,U=z;break e}}else if(ke.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ce&&Hg(be)===ke.type){l(U,ke.sibling),z=h(ke,H.props),z.ref=tl(U,ke,H),z.return=U,U=z;break e}l(U,ke);break}else r(U,ke);ke=ke.sibling}H.type===L?(z=Zs(H.props.children,U.mode,oe,H.key),z.return=U,U=z):(oe=hu(H.type,H.key,H.props,null,U.mode,oe),oe.ref=tl(U,z,H),oe.return=U,U=oe)}return N(U);case M:e:{for(ke=H.key;z!==null;){if(z.key===ke)if(z.tag===4&&z.stateNode.containerInfo===H.containerInfo&&z.stateNode.implementation===H.implementation){l(U,z.sibling),z=h(z,H.children||[]),z.return=U,U=z;break e}else{l(U,z);break}else r(U,z);z=z.sibling}z=vf(H,U.mode,oe),z.return=U,U=z}return N(U);case ce:return ke=H._init,Pt(U,z,ke(H._payload),oe)}if(Cr(H))return me(U,z,H,oe);if(X(H))return ve(U,z,H,oe);Vc(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,z!==null&&z.tag===6?(l(U,z.sibling),z=h(z,H),z.return=U,U=z):(l(U,z),z=xf(H,U.mode,oe),z.return=U,U=z),N(U)):l(U,z)}return Pt}var Ba=Vg(!0),Yg=Vg(!1),Yc=Zi(null),Gc=null,Ua=null,Ep=null;function Sp(){Ep=Ua=Gc=null}function Ap(e){var r=Yc.current;lt(Yc),e._currentValue=r}function Cp(e,r,l){for(;e!==null;){var d=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),e===l)break;e=e.return}}function Wa(e,r){Gc=e,Ep=Ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ir=!0),e.firstContext=null)}function yn(e){var r=e._currentValue;if(Ep!==e)if(e={context:e,memoizedValue:r,next:null},Ua===null){if(Gc===null)throw Error(n(308));Ua=e,Gc.dependencies={lanes:0,firstContext:e}}else Ua=Ua.next=e;return r}var Ys=null;function Tp(e){Ys===null?Ys=[e]:Ys.push(e)}function Gg(e,r,l,d){var h=r.interleaved;return h===null?(l.next=l,Tp(r)):(l.next=h.next,h.next=l),r.interleaved=l,Ni(e,d)}function Ni(e,r){e.lanes|=r;var l=e.alternate;for(l!==null&&(l.lanes|=r),l=e,e=e.return;e!==null;)e.childLanes|=r,l=e.alternate,l!==null&&(l.childLanes|=r),l=e,e=e.return;return l.tag===3?l.stateNode:null}var ts=!1;function Pp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ki(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function rs(e,r,l){var d=e.updateQueue;if(d===null)return null;if(d=d.shared,(Ye&2)!==0){var h=d.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),d.pending=r,Ni(e,l)}return h=d.interleaved,h===null?(r.next=r,Tp(d)):(r.next=h.next,h.next=r),d.interleaved=r,Ni(e,l)}function qc(e,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=e.pendingLanes,l|=d,r.lanes=l,Yd(e,l)}}function Xg(e,r){var l=e.updateQueue,d=e.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var h=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var N={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?h=x=N:x=x.next=N,l=l.next}while(l!==null);x===null?h=x=r:x=x.next=r}else h=x=r;l={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:d.shared,effects:d.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=r:e.next=r,l.lastBaseUpdate=r}function Xc(e,r,l,d){var h=e.updateQueue;ts=!1;var x=h.firstBaseUpdate,N=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var I=R,G=I.next;I.next=null,N===null?x=G:N.next=G,N=I;var te=e.alternate;te!==null&&(te=te.updateQueue,R=te.lastBaseUpdate,R!==N&&(R===null?te.firstBaseUpdate=G:R.next=G,te.lastBaseUpdate=I))}if(x!==null){var ie=h.baseState;N=0,te=G=I=null,R=x;do{var ee=R.lane,pe=R.eventTime;if((d&ee)===ee){te!==null&&(te=te.next={eventTime:pe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var me=e,ve=R;switch(ee=r,pe=l,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){ie=me.call(pe,ie,ee);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,ee=typeof me=="function"?me.call(pe,ie,ee):me,ee==null)break e;ie=S({},ie,ee);break e;case 2:ts=!0}}R.callback!==null&&R.lane!==0&&(e.flags|=64,ee=h.effects,ee===null?h.effects=[R]:ee.push(R))}else pe={eventTime:pe,lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},te===null?(G=te=pe,I=ie):te=te.next=pe,N|=ee;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;ee=R,R=ee.next,ee.next=null,h.lastBaseUpdate=ee,h.shared.pending=null}}while(!0);if(te===null&&(I=ie),h.baseState=I,h.firstBaseUpdate=G,h.lastBaseUpdate=te,r=h.shared.interleaved,r!==null){h=r;do N|=h.lane,h=h.next;while(h!==r)}else x===null&&(h.shared.lanes=0);Xs|=N,e.lanes=N,e.memoizedState=ie}}function Qg(e,r,l){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var d=e[r],h=d.callback;if(h!==null){if(d.callback=null,d=l,typeof h!="function")throw Error(n(191,h));h.call(d)}}}var rl={},ii=Zi(rl),nl=Zi(rl),il=Zi(rl);function Gs(e){if(e===rl)throw Error(n(174));return e}function Rp(e,r){switch(rt(il,r),rt(nl,e),rt(ii,rl),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:st(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=st(r,e)}lt(ii),rt(ii,r)}function Ha(){lt(ii),lt(nl),lt(il)}function Kg(e){Gs(il.current);var r=Gs(ii.current),l=st(r,e.type);r!==l&&(rt(nl,e),rt(ii,l))}function Lp(e){nl.current===e&&(lt(ii),lt(nl))}var ht=Zi(0);function Qc(e){for(var r=e;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Op=[];function Ip(){for(var e=0;e<Op.length;e++)Op[e]._workInProgressVersionPrimary=null;Op.length=0}var Kc=j.ReactCurrentDispatcher,Mp=j.ReactCurrentBatchConfig,qs=0,mt=null,Ut=null,Xt=null,Jc=!1,sl=!1,al=0,l2=0;function lr(){throw Error(n(321))}function zp(e,r){if(r===null)return!1;for(var l=0;l<r.length&&l<e.length;l++)if(!Un(e[l],r[l]))return!1;return!0}function Dp(e,r,l,d,h,x){if(qs=x,mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Kc.current=e===null||e.memoizedState===null?p2:f2,e=l(d,h),sl){x=0;do{if(sl=!1,al=0,25<=x)throw Error(n(301));x+=1,Xt=Ut=null,r.updateQueue=null,Kc.current=h2,e=l(d,h)}while(sl)}if(Kc.current=eu,r=Ut!==null&&Ut.next!==null,qs=0,Xt=Ut=mt=null,Jc=!1,r)throw Error(n(300));return e}function Fp(){var e=al!==0;return al=0,e}function si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?mt.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function bn(){if(Ut===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=Ut.next;var r=Xt===null?mt.memoizedState:Xt.next;if(r!==null)Xt=r,Ut=e;else{if(e===null)throw Error(n(310));Ut=e,e={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Xt===null?mt.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function ol(e,r){return typeof r=="function"?r(e):r}function Bp(e){var r=bn(),l=r.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=e;var d=Ut,h=d.baseQueue,x=l.pending;if(x!==null){if(h!==null){var N=h.next;h.next=x.next,x.next=N}d.baseQueue=h=x,l.pending=null}if(h!==null){x=h.next,d=d.baseState;var R=N=null,I=null,G=x;do{var te=G.lane;if((qs&te)===te)I!==null&&(I=I.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),d=G.hasEagerState?G.eagerState:e(d,G.action);else{var ie={lane:te,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};I===null?(R=I=ie,N=d):I=I.next=ie,mt.lanes|=te,Xs|=te}G=G.next}while(G!==null&&G!==x);I===null?N=d:I.next=R,Un(d,r.memoizedState)||(Ir=!0),r.memoizedState=d,r.baseState=N,r.baseQueue=I,l.lastRenderedState=d}if(e=l.interleaved,e!==null){h=e;do x=h.lane,mt.lanes|=x,Xs|=x,h=h.next;while(h!==e)}else h===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Up(e){var r=bn(),l=r.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=e;var d=l.dispatch,h=l.pending,x=r.memoizedState;if(h!==null){l.pending=null;var N=h=h.next;do x=e(x,N.action),N=N.next;while(N!==h);Un(x,r.memoizedState)||(Ir=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,d]}function Jg(){}function Zg(e,r){var l=mt,d=bn(),h=r(),x=!Un(d.memoizedState,h);if(x&&(d.memoizedState=h,Ir=!0),d=d.queue,Wp(t0.bind(null,l,d,e),[e]),d.getSnapshot!==r||x||Xt!==null&&Xt.memoizedState.tag&1){if(l.flags|=2048,ll(9,e0.bind(null,l,d,h,r),void 0,null),Qt===null)throw Error(n(349));(qs&30)!==0||$g(l,r,h)}return h}function $g(e,r,l){e.flags|=16384,e={getSnapshot:r,value:l},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.stores=[e]):(l=r.stores,l===null?r.stores=[e]:l.push(e))}function e0(e,r,l,d){r.value=l,r.getSnapshot=d,r0(r)&&n0(e)}function t0(e,r,l){return l(function(){r0(r)&&n0(e)})}function r0(e){var r=e.getSnapshot;e=e.value;try{var l=r();return!Un(e,l)}catch{return!0}}function n0(e){var r=Ni(e,1);r!==null&&Gn(r,e,1,-1)}function i0(e){var r=si();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:e},r.queue=e,e=e.dispatch=d2.bind(null,mt,e),[r.memoizedState,e]}function ll(e,r,l,d){return e={tag:e,create:r,destroy:l,deps:d,next:null},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.lastEffect=e.next=e):(l=r.lastEffect,l===null?r.lastEffect=e.next=e:(d=l.next,l.next=e,e.next=d,r.lastEffect=e)),e}function s0(){return bn().memoizedState}function Zc(e,r,l,d){var h=si();mt.flags|=e,h.memoizedState=ll(1|r,l,void 0,d===void 0?null:d)}function $c(e,r,l,d){var h=bn();d=d===void 0?null:d;var x=void 0;if(Ut!==null){var N=Ut.memoizedState;if(x=N.destroy,d!==null&&zp(d,N.deps)){h.memoizedState=ll(r,l,x,d);return}}mt.flags|=e,h.memoizedState=ll(1|r,l,x,d)}function a0(e,r){return Zc(8390656,8,e,r)}function Wp(e,r){return $c(2048,8,e,r)}function o0(e,r){return $c(4,2,e,r)}function l0(e,r){return $c(4,4,e,r)}function c0(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function u0(e,r,l){return l=l!=null?l.concat([e]):null,$c(4,4,c0.bind(null,r,e),l)}function Hp(){}function d0(e,r){var l=bn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&zp(r,d[1])?d[0]:(l.memoizedState=[e,r],e)}function p0(e,r){var l=bn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&zp(r,d[1])?d[0]:(e=e(),l.memoizedState=[e,r],e)}function f0(e,r,l){return(qs&21)===0?(e.baseState&&(e.baseState=!1,Ir=!0),e.memoizedState=l):(Un(l,r)||(l=Hm(),mt.lanes|=l,Xs|=l,e.baseState=!0),r)}function c2(e,r){var l=Ke;Ke=l!==0&&4>l?l:4,e(!0);var d=Mp.transition;Mp.transition={};try{e(!1),r()}finally{Ke=l,Mp.transition=d}}function h0(){return bn().memoizedState}function u2(e,r,l){var d=as(e);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},m0(e))g0(r,l);else if(l=Gg(e,r,l,d),l!==null){var h=wr();Gn(l,e,d,h),x0(l,r,d)}}function d2(e,r,l){var d=as(e),h={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(m0(e))g0(r,h);else{var x=e.alternate;if(e.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var N=r.lastRenderedState,R=x(N,l);if(h.hasEagerState=!0,h.eagerState=R,Un(R,N)){var I=r.interleaved;I===null?(h.next=h,Tp(r)):(h.next=I.next,I.next=h),r.interleaved=h;return}}catch{}l=Gg(e,r,h,d),l!==null&&(h=wr(),Gn(l,e,d,h),x0(l,r,d))}}function m0(e){var r=e.alternate;return e===mt||r!==null&&r===mt}function g0(e,r){sl=Jc=!0;var l=e.pending;l===null?r.next=r:(r.next=l.next,l.next=r),e.pending=r}function x0(e,r,l){if((l&4194240)!==0){var d=r.lanes;d&=e.pendingLanes,l|=d,r.lanes=l,Yd(e,l)}}var eu={readContext:yn,useCallback:lr,useContext:lr,useEffect:lr,useImperativeHandle:lr,useInsertionEffect:lr,useLayoutEffect:lr,useMemo:lr,useReducer:lr,useRef:lr,useState:lr,useDebugValue:lr,useDeferredValue:lr,useTransition:lr,useMutableSource:lr,useSyncExternalStore:lr,useId:lr,unstable_isNewReconciler:!1},p2={readContext:yn,useCallback:function(e,r){return si().memoizedState=[e,r===void 0?null:r],e},useContext:yn,useEffect:a0,useImperativeHandle:function(e,r,l){return l=l!=null?l.concat([e]):null,Zc(4194308,4,c0.bind(null,r,e),l)},useLayoutEffect:function(e,r){return Zc(4194308,4,e,r)},useInsertionEffect:function(e,r){return Zc(4,2,e,r)},useMemo:function(e,r){var l=si();return r=r===void 0?null:r,e=e(),l.memoizedState=[e,r],e},useReducer:function(e,r,l){var d=si();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},d.queue=e,e=e.dispatch=u2.bind(null,mt,e),[d.memoizedState,e]},useRef:function(e){var r=si();return e={current:e},r.memoizedState=e},useState:i0,useDebugValue:Hp,useDeferredValue:function(e){return si().memoizedState=e},useTransition:function(){var e=i0(!1),r=e[0];return e=c2.bind(null,e[1]),si().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,l){var d=mt,h=si();if(dt){if(l===void 0)throw Error(n(407));l=l()}else{if(l=r(),Qt===null)throw Error(n(349));(qs&30)!==0||$g(d,r,l)}h.memoizedState=l;var x={value:l,getSnapshot:r};return h.queue=x,a0(t0.bind(null,d,x,e),[e]),d.flags|=2048,ll(9,e0.bind(null,d,x,l,r),void 0,null),l},useId:function(){var e=si(),r=Qt.identifierPrefix;if(dt){var l=_i,d=wi;l=(d&~(1<<32-Bn(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=al++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=l2++,r=":"+r+"r"+l.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},f2={readContext:yn,useCallback:d0,useContext:yn,useEffect:Wp,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:p0,useReducer:Bp,useRef:s0,useState:function(){return Bp(ol)},useDebugValue:Hp,useDeferredValue:function(e){var r=bn();return f0(r,Ut.memoizedState,e)},useTransition:function(){var e=Bp(ol)[0],r=bn().memoizedState;return[e,r]},useMutableSource:Jg,useSyncExternalStore:Zg,useId:h0,unstable_isNewReconciler:!1},h2={readContext:yn,useCallback:d0,useContext:yn,useEffect:Wp,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:p0,useReducer:Up,useRef:s0,useState:function(){return Up(ol)},useDebugValue:Hp,useDeferredValue:function(e){var r=bn();return Ut===null?r.memoizedState=e:f0(r,Ut.memoizedState,e)},useTransition:function(){var e=Up(ol)[0],r=bn().memoizedState;return[e,r]},useMutableSource:Jg,useSyncExternalStore:Zg,useId:h0,unstable_isNewReconciler:!1};function Hn(e,r){if(e&&e.defaultProps){r=S({},r),e=e.defaultProps;for(var l in e)r[l]===void 0&&(r[l]=e[l]);return r}return r}function Vp(e,r,l,d){r=e.memoizedState,l=l(d,r),l=l==null?r:S({},r,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var tu={isMounted:function(e){return(e=e._reactInternals)?He(e)===e:!1},enqueueSetState:function(e,r,l){e=e._reactInternals;var d=wr(),h=as(e),x=ki(d,h);x.payload=r,l!=null&&(x.callback=l),r=rs(e,x,h),r!==null&&(Gn(r,e,h,d),qc(r,e,h))},enqueueReplaceState:function(e,r,l){e=e._reactInternals;var d=wr(),h=as(e),x=ki(d,h);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=rs(e,x,h),r!==null&&(Gn(r,e,h,d),qc(r,e,h))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var l=wr(),d=as(e),h=ki(l,d);h.tag=2,r!=null&&(h.callback=r),r=rs(e,h,d),r!==null&&(Gn(r,e,d,l),qc(r,e,d))}};function v0(e,r,l,d,h,x,N){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(d,x,N):r.prototype&&r.prototype.isPureReactComponent?!Xo(l,d)||!Xo(h,x):!0}function y0(e,r,l){var d=!1,h=$i,x=r.contextType;return typeof x=="object"&&x!==null?x=yn(x):(h=Or(r)?Ws:or.current,d=r.contextTypes,x=(d=d!=null)?Ma(e,h):$i),r=new r(l,x),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=tu,e.stateNode=r,r._reactInternals=e,d&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=h,e.__reactInternalMemoizedMaskedChildContext=x),r}function b0(e,r,l,d){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==e&&tu.enqueueReplaceState(r,r.state,null)}function Yp(e,r,l,d){var h=e.stateNode;h.props=l,h.state=e.memoizedState,h.refs={},Pp(e);var x=r.contextType;typeof x=="object"&&x!==null?h.context=yn(x):(x=Or(r)?Ws:or.current,h.context=Ma(e,x)),h.state=e.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Vp(e,r,x,l),h.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&tu.enqueueReplaceState(h,h.state,null),Xc(e,l,h,d),h.state=e.memoizedState),typeof h.componentDidMount=="function"&&(e.flags|=4194308)}function Va(e,r){try{var l="",d=r;do l+=ge(d),d=d.return;while(d);var h=l}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:e,source:r,stack:h,digest:null}}function Gp(e,r,l){return{value:e,source:null,stack:l??null,digest:r??null}}function qp(e,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var m2=typeof WeakMap=="function"?WeakMap:Map;function w0(e,r,l){l=ki(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){lu||(lu=!0,cf=d),qp(e,r)},l}function _0(e,r,l){l=ki(-1,l),l.tag=3;var d=e.type.getDerivedStateFromError;if(typeof d=="function"){var h=r.value;l.payload=function(){return d(h)},l.callback=function(){qp(e,r)}}var x=e.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){qp(e,r),typeof d!="function"&&(is===null?is=new Set([this]):is.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})}),l}function N0(e,r,l){var d=e.pingCache;if(d===null){d=e.pingCache=new m2;var h=new Set;d.set(r,h)}else h=d.get(r),h===void 0&&(h=new Set,d.set(r,h));h.has(l)||(h.add(l),e=C2.bind(null,e,r,l),r.then(e,e))}function k0(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function j0(e,r,l,d,h){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ki(-1,1),r.tag=2,rs(l,r,1))),l.lanes|=1),e):(e.flags|=65536,e.lanes=h,e)}var g2=j.ReactCurrentOwner,Ir=!1;function br(e,r,l,d){r.child=e===null?Yg(r,null,l,d):Ba(r,e.child,l,d)}function E0(e,r,l,d,h){l=l.render;var x=r.ref;return Wa(r,h),d=Dp(e,r,l,d,x,h),l=Fp(),e!==null&&!Ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~h,ji(e,r,h)):(dt&&l&&wp(r),r.flags|=1,br(e,r,d,h),r.child)}function S0(e,r,l,d,h){if(e===null){var x=l.type;return typeof x=="function"&&!gf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,A0(e,r,x,d,h)):(e=hu(l.type,null,d,r,r.mode,h),e.ref=r.ref,e.return=r,r.child=e)}if(x=e.child,(e.lanes&h)===0){var N=x.memoizedProps;if(l=l.compare,l=l!==null?l:Xo,l(N,d)&&e.ref===r.ref)return ji(e,r,h)}return r.flags|=1,e=ls(x,d),e.ref=r.ref,e.return=r,r.child=e}function A0(e,r,l,d,h){if(e!==null){var x=e.memoizedProps;if(Xo(x,d)&&e.ref===r.ref)if(Ir=!1,r.pendingProps=d=x,(e.lanes&h)!==0)(e.flags&131072)!==0&&(Ir=!0);else return r.lanes=e.lanes,ji(e,r,h)}return Xp(e,r,l,d,h)}function C0(e,r,l){var d=r.pendingProps,h=d.children,x=e!==null?e.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ga,en),en|=l;else{if((l&1073741824)===0)return e=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,rt(Ga,en),en|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,rt(Ga,en),en|=d}else x!==null?(d=x.baseLanes|l,r.memoizedState=null):d=l,rt(Ga,en),en|=d;return br(e,r,h,l),r.child}function T0(e,r){var l=r.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Xp(e,r,l,d,h){var x=Or(l)?Ws:or.current;return x=Ma(r,x),Wa(r,h),l=Dp(e,r,l,d,x,h),d=Fp(),e!==null&&!Ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~h,ji(e,r,h)):(dt&&d&&wp(r),r.flags|=1,br(e,r,l,h),r.child)}function P0(e,r,l,d,h){if(Or(l)){var x=!0;Fc(r)}else x=!1;if(Wa(r,h),r.stateNode===null)nu(e,r),y0(r,l,d),Yp(r,l,d,h),d=!0;else if(e===null){var N=r.stateNode,R=r.memoizedProps;N.props=R;var I=N.context,G=l.contextType;typeof G=="object"&&G!==null?G=yn(G):(G=Or(l)?Ws:or.current,G=Ma(r,G));var te=l.getDerivedStateFromProps,ie=typeof te=="function"||typeof N.getSnapshotBeforeUpdate=="function";ie||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(R!==d||I!==G)&&b0(r,N,d,G),ts=!1;var ee=r.memoizedState;N.state=ee,Xc(r,d,N,h),I=r.memoizedState,R!==d||ee!==I||Lr.current||ts?(typeof te=="function"&&(Vp(r,l,te,d),I=r.memoizedState),(R=ts||v0(r,l,R,d,ee,I,G))?(ie||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(r.flags|=4194308)):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=I),N.props=d,N.state=I,N.context=G,d=R):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{N=r.stateNode,qg(e,r),R=r.memoizedProps,G=r.type===r.elementType?R:Hn(r.type,R),N.props=G,ie=r.pendingProps,ee=N.context,I=l.contextType,typeof I=="object"&&I!==null?I=yn(I):(I=Or(l)?Ws:or.current,I=Ma(r,I));var pe=l.getDerivedStateFromProps;(te=typeof pe=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(R!==ie||ee!==I)&&b0(r,N,d,I),ts=!1,ee=r.memoizedState,N.state=ee,Xc(r,d,N,h);var me=r.memoizedState;R!==ie||ee!==me||Lr.current||ts?(typeof pe=="function"&&(Vp(r,l,pe,d),me=r.memoizedState),(G=ts||v0(r,l,G,d,ee,me,I)||!1)?(te||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(d,me,I),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(d,me,I)),typeof N.componentDidUpdate=="function"&&(r.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof N.componentDidUpdate!="function"||R===e.memoizedProps&&ee===e.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&ee===e.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=me),N.props=d,N.state=me,N.context=I,d=G):(typeof N.componentDidUpdate!="function"||R===e.memoizedProps&&ee===e.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&ee===e.memoizedState||(r.flags|=1024),d=!1)}return Qp(e,r,l,d,x,h)}function Qp(e,r,l,d,h,x){T0(e,r);var N=(r.flags&128)!==0;if(!d&&!N)return h&&Mg(r,l,!1),ji(e,r,x);d=r.stateNode,g2.current=r;var R=N&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,e!==null&&N?(r.child=Ba(r,e.child,null,x),r.child=Ba(r,null,R,x)):br(e,r,R,x),r.memoizedState=d.state,h&&Mg(r,l,!0),r.child}function R0(e){var r=e.stateNode;r.pendingContext?Og(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Og(e,r.context,!1),Rp(e,r.containerInfo)}function L0(e,r,l,d,h){return Fa(),jp(h),r.flags|=256,br(e,r,l,d),r.child}var Kp={dehydrated:null,treeContext:null,retryLane:0};function Jp(e){return{baseLanes:e,cachePool:null,transitions:null}}function O0(e,r,l){var d=r.pendingProps,h=ht.current,x=!1,N=(r.flags&128)!==0,R;if((R=N)||(R=e!==null&&e.memoizedState===null?!1:(h&2)!==0),R?(x=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(h|=1),rt(ht,h&1),e===null)return kp(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(N=d.children,e=d.fallback,x?(d=r.mode,x=r.child,N={mode:"hidden",children:N},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=N):x=mu(N,d,0,null),e=Zs(e,d,l,null),x.return=r,e.return=r,x.sibling=e,r.child=x,r.child.memoizedState=Jp(l),r.memoizedState=Kp,e):Zp(r,N));if(h=e.memoizedState,h!==null&&(R=h.dehydrated,R!==null))return x2(e,r,N,d,R,h,l);if(x){x=d.fallback,N=r.mode,h=e.child,R=h.sibling;var I={mode:"hidden",children:d.children};return(N&1)===0&&r.child!==h?(d=r.child,d.childLanes=0,d.pendingProps=I,r.deletions=null):(d=ls(h,I),d.subtreeFlags=h.subtreeFlags&14680064),R!==null?x=ls(R,x):(x=Zs(x,N,l,null),x.flags|=2),x.return=r,d.return=r,d.sibling=x,r.child=d,d=x,x=r.child,N=e.child.memoizedState,N=N===null?Jp(l):{baseLanes:N.baseLanes|l,cachePool:null,transitions:N.transitions},x.memoizedState=N,x.childLanes=e.childLanes&~l,r.memoizedState=Kp,d}return x=e.child,e=x.sibling,d=ls(x,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,e!==null&&(l=r.deletions,l===null?(r.deletions=[e],r.flags|=16):l.push(e)),r.child=d,r.memoizedState=null,d}function Zp(e,r){return r=mu({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ru(e,r,l,d){return d!==null&&jp(d),Ba(r,e.child,null,l),e=Zp(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function x2(e,r,l,d,h,x,N){if(l)return r.flags&256?(r.flags&=-257,d=Gp(Error(n(422))),ru(e,r,N,d)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(x=d.fallback,h=r.mode,d=mu({mode:"visible",children:d.children},h,0,null),x=Zs(x,h,N,null),x.flags|=2,d.return=r,x.return=r,d.sibling=x,r.child=d,(r.mode&1)!==0&&Ba(r,e.child,null,N),r.child.memoizedState=Jp(N),r.memoizedState=Kp,x);if((r.mode&1)===0)return ru(e,r,N,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var R=d.dgst;return d=R,x=Error(n(419)),d=Gp(x,d,void 0),ru(e,r,N,d)}if(R=(N&e.childLanes)!==0,Ir||R){if(d=Qt,d!==null){switch(N&-N){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(d.suspendedLanes|N))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,Ni(e,h),Gn(d,e,h,-1))}return mf(),d=Gp(Error(n(421))),ru(e,r,N,d)}return h.data==="$?"?(r.flags|=128,r.child=e.child,r=T2.bind(null,e),h._reactRetry=r,null):(e=x.treeContext,$r=Ji(h.nextSibling),Zr=r,dt=!0,Wn=null,e!==null&&(xn[vn++]=wi,xn[vn++]=_i,xn[vn++]=Hs,wi=e.id,_i=e.overflow,Hs=r),r=Zp(r,d.children),r.flags|=4096,r)}function I0(e,r,l){e.lanes|=r;var d=e.alternate;d!==null&&(d.lanes|=r),Cp(e.return,r,l)}function $p(e,r,l,d,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:h}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=h)}function M0(e,r,l){var d=r.pendingProps,h=d.revealOrder,x=d.tail;if(br(e,r,d.children,l),d=ht.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I0(e,l,r);else if(e.tag===19)I0(e,l,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}d&=1}if(rt(ht,d),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(l=r.child,h=null;l!==null;)e=l.alternate,e!==null&&Qc(e)===null&&(h=l),l=l.sibling;l=h,l===null?(h=r.child,r.child=null):(h=l.sibling,l.sibling=null),$p(r,!1,h,l,x);break;case"backwards":for(l=null,h=r.child,r.child=null;h!==null;){if(e=h.alternate,e!==null&&Qc(e)===null){r.child=h;break}e=h.sibling,h.sibling=l,l=h,h=e}$p(r,!0,l,null,x);break;case"together":$p(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function nu(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function ji(e,r,l){if(e!==null&&(r.dependencies=e.dependencies),Xs|=r.lanes,(l&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(n(153));if(r.child!==null){for(e=r.child,l=ls(e,e.pendingProps),r.child=l,l.return=r;e.sibling!==null;)e=e.sibling,l=l.sibling=ls(e,e.pendingProps),l.return=r;l.sibling=null}return r.child}function v2(e,r,l){switch(r.tag){case 3:R0(r),Fa();break;case 5:Kg(r);break;case 1:Or(r.type)&&Fc(r);break;case 4:Rp(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,h=r.memoizedProps.value;rt(Yc,d._currentValue),d._currentValue=h;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(rt(ht,ht.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?O0(e,r,l):(rt(ht,ht.current&1),e=ji(e,r,l),e!==null?e.sibling:null);rt(ht,ht.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(e.flags&128)!==0){if(d)return M0(e,r,l);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(ht,ht.current),d)break;return null;case 22:case 23:return r.lanes=0,C0(e,r,l)}return ji(e,r,l)}var z0,ef,D0,F0;z0=function(e,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ef=function(){},D0=function(e,r,l,d){var h=e.memoizedProps;if(h!==d){e=r.stateNode,Gs(ii.current);var x=null;switch(l){case"input":h=Ee(e,h),d=Ee(e,d),x=[];break;case"select":h=S({},h,{value:void 0}),d=S({},d,{value:void 0}),x=[];break;case"textarea":h=Xr(e,h),d=Xr(e,d),x=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(e.onclick=Mc)}$n(l,d);var N;l=null;for(G in h)if(!d.hasOwnProperty(G)&&h.hasOwnProperty(G)&&h[G]!=null)if(G==="style"){var R=h[G];for(N in R)R.hasOwnProperty(N)&&(l||(l={}),l[N]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(a.hasOwnProperty(G)?x||(x=[]):(x=x||[]).push(G,null));for(G in d){var I=d[G];if(R=h?.[G],d.hasOwnProperty(G)&&I!==R&&(I!=null||R!=null))if(G==="style")if(R){for(N in R)!R.hasOwnProperty(N)||I&&I.hasOwnProperty(N)||(l||(l={}),l[N]="");for(N in I)I.hasOwnProperty(N)&&R[N]!==I[N]&&(l||(l={}),l[N]=I[N])}else l||(x||(x=[]),x.push(G,l)),l=I;else G==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,R=R?R.__html:void 0,I!=null&&R!==I&&(x=x||[]).push(G,I)):G==="children"?typeof I!="string"&&typeof I!="number"||(x=x||[]).push(G,""+I):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(a.hasOwnProperty(G)?(I!=null&&G==="onScroll"&&ot("scroll",e),x||R===I||(x=[])):(x=x||[]).push(G,I))}l&&(x=x||[]).push("style",l);var G=x;(r.updateQueue=G)&&(r.flags|=4)}},F0=function(e,r,l,d){l!==d&&(r.flags|=4)};function cl(e,r){if(!dt)switch(e.tailMode){case"hidden":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:d.sibling=null}}function cr(e){var r=e.alternate!==null&&e.alternate.child===e.child,l=0,d=0;if(r)for(var h=e.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=d,e.childLanes=l,r}function y2(e,r,l){var d=r.pendingProps;switch(_p(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cr(r),null;case 1:return Or(r.type)&&Dc(),cr(r),null;case 3:return d=r.stateNode,Ha(),lt(Lr),lt(or),Ip(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(e===null||e.child===null)&&(Hc(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Wn!==null&&(pf(Wn),Wn=null))),ef(e,r),cr(r),null;case 5:Lp(r);var h=Gs(il.current);if(l=r.type,e!==null&&r.stateNode!=null)D0(e,r,l,d,h),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(n(166));return cr(r),null}if(e=Gs(ii.current),Hc(r)){d=r.stateNode,l=r.type;var x=r.memoizedProps;switch(d[ni]=r,d[$o]=x,e=(r.mode&1)!==0,l){case"dialog":ot("cancel",d),ot("close",d);break;case"iframe":case"object":case"embed":ot("load",d);break;case"video":case"audio":for(h=0;h<Ko.length;h++)ot(Ko[h],d);break;case"source":ot("error",d);break;case"img":case"image":case"link":ot("error",d),ot("load",d);break;case"details":ot("toggle",d);break;case"input":it(d,x),ot("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},ot("invalid",d);break;case"textarea":In(d,x),ot("invalid",d)}$n(l,x),h=null;for(var N in x)if(x.hasOwnProperty(N)){var R=x[N];N==="children"?typeof R=="string"?d.textContent!==R&&(x.suppressHydrationWarning!==!0&&Ic(d.textContent,R,e),h=["children",R]):typeof R=="number"&&d.textContent!==""+R&&(x.suppressHydrationWarning!==!0&&Ic(d.textContent,R,e),h=["children",""+R]):a.hasOwnProperty(N)&&R!=null&&N==="onScroll"&&ot("scroll",d)}switch(l){case"input":bt(d),sr(d,x,!0);break;case"textarea":bt(d),Ct(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=Mc)}d=h,r.updateQueue=d,d!==null&&(r.flags|=4)}else{N=h.nodeType===9?h:h.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mn(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=N.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof d.is=="string"?e=N.createElement(l,{is:d.is}):(e=N.createElement(l),l==="select"&&(N=e,d.multiple?N.multiple=!0:d.size&&(N.size=d.size))):e=N.createElementNS(e,l),e[ni]=r,e[$o]=d,z0(e,r,!1,!1),r.stateNode=e;e:{switch(N=mn(l,d),l){case"dialog":ot("cancel",e),ot("close",e),h=d;break;case"iframe":case"object":case"embed":ot("load",e),h=d;break;case"video":case"audio":for(h=0;h<Ko.length;h++)ot(Ko[h],e);h=d;break;case"source":ot("error",e),h=d;break;case"img":case"image":case"link":ot("error",e),ot("load",e),h=d;break;case"details":ot("toggle",e),h=d;break;case"input":it(e,d),h=Ee(e,d),ot("invalid",e);break;case"option":h=d;break;case"select":e._wrapperState={wasMultiple:!!d.multiple},h=S({},d,{value:void 0}),ot("invalid",e);break;case"textarea":In(e,d),h=Xr(e,d),ot("invalid",e);break;default:h=d}$n(l,h),R=h;for(x in R)if(R.hasOwnProperty(x)){var I=R[x];x==="style"?hn(e,I):x==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&gr(e,I)):x==="children"?typeof I=="string"?(l!=="textarea"||I!=="")&&xr(e,I):typeof I=="number"&&xr(e,""+I):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?I!=null&&x==="onScroll"&&ot("scroll",e):I!=null&&E(e,x,I,N))}switch(l){case"input":bt(e),sr(e,d,!1);break;case"textarea":bt(e),Ct(e);break;case"option":d.value!=null&&e.setAttribute("value",""+ye(d.value));break;case"select":e.multiple=!!d.multiple,x=d.value,x!=null?Qe(e,!!d.multiple,x,!1):d.defaultValue!=null&&Qe(e,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(e.onclick=Mc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return cr(r),null;case 6:if(e&&r.stateNode!=null)F0(e,r,e.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(n(166));if(l=Gs(il.current),Gs(ii.current),Hc(r)){if(d=r.stateNode,l=r.memoizedProps,d[ni]=r,(x=d.nodeValue!==l)&&(e=Zr,e!==null))switch(e.tag){case 3:Ic(d.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ic(d.nodeValue,l,(e.mode&1)!==0)}x&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ni]=r,r.stateNode=d}return cr(r),null;case 13:if(lt(ht),d=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(dt&&$r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Wg(),Fa(),r.flags|=98560,x=!1;else if(x=Hc(r),d!==null&&d.dehydrated!==null){if(e===null){if(!x)throw Error(n(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[ni]=r}else Fa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;cr(r),x=!1}else Wn!==null&&(pf(Wn),Wn=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(e!==null&&e.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ht.current&1)!==0?Wt===0&&(Wt=3):mf())),r.updateQueue!==null&&(r.flags|=4),cr(r),null);case 4:return Ha(),ef(e,r),e===null&&Jo(r.stateNode.containerInfo),cr(r),null;case 10:return Ap(r.type._context),cr(r),null;case 17:return Or(r.type)&&Dc(),cr(r),null;case 19:if(lt(ht),x=r.memoizedState,x===null)return cr(r),null;if(d=(r.flags&128)!==0,N=x.rendering,N===null)if(d)cl(x,!1);else{if(Wt!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(N=Qc(e),N!==null){for(r.flags|=128,cl(x,!1),d=N.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)x=l,e=d,x.flags&=14680066,N=x.alternate,N===null?(x.childLanes=0,x.lanes=e,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=N.childLanes,x.lanes=N.lanes,x.child=N.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=N.memoizedProps,x.memoizedState=N.memoizedState,x.updateQueue=N.updateQueue,x.type=N.type,e=N.dependencies,x.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return rt(ht,ht.current&1|2),r.child}e=e.sibling}x.tail!==null&&De()>qa&&(r.flags|=128,d=!0,cl(x,!1),r.lanes=4194304)}else{if(!d)if(e=Qc(N),e!==null){if(r.flags|=128,d=!0,l=e.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),cl(x,!0),x.tail===null&&x.tailMode==="hidden"&&!N.alternate&&!dt)return cr(r),null}else 2*De()-x.renderingStartTime>qa&&l!==1073741824&&(r.flags|=128,d=!0,cl(x,!1),r.lanes=4194304);x.isBackwards?(N.sibling=r.child,r.child=N):(l=x.last,l!==null?l.sibling=N:r.child=N,x.last=N)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=De(),r.sibling=null,l=ht.current,rt(ht,d?l&1|2:l&1),r):(cr(r),null);case 22:case 23:return hf(),d=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(en&1073741824)!==0&&(cr(r),r.subtreeFlags&6&&(r.flags|=8192)):cr(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function b2(e,r){switch(_p(r),r.tag){case 1:return Or(r.type)&&Dc(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Ha(),lt(Lr),lt(or),Ip(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Lp(r),null;case 13:if(lt(ht),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Fa()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return lt(ht),null;case 4:return Ha(),null;case 10:return Ap(r.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var iu=!1,ur=!1,w2=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ya(e,r){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Nt(e,r,d)}else l.current=null}function tf(e,r,l){try{l()}catch(d){Nt(e,r,d)}}var B0=!1;function _2(e,r){if(fp=kc,e=vg(),sp(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var h=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var N=0,R=-1,I=-1,G=0,te=0,ie=e,ee=null;t:for(;;){for(var pe;ie!==l||h!==0&&ie.nodeType!==3||(R=N+h),ie!==x||d!==0&&ie.nodeType!==3||(I=N+d),ie.nodeType===3&&(N+=ie.nodeValue.length),(pe=ie.firstChild)!==null;)ee=ie,ie=pe;for(;;){if(ie===e)break t;if(ee===l&&++G===h&&(R=N),ee===x&&++te===d&&(I=N),(pe=ie.nextSibling)!==null)break;ie=ee,ee=ie.parentNode}ie=pe}l=R===-1||I===-1?null:{start:R,end:I}}else l=null}l=l||{start:0,end:0}}else l=null;for(hp={focusedElem:e,selectionRange:l},kc=!1,fe=r;fe!==null;)if(r=fe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,fe=e;else for(;fe!==null;){r=fe;try{var me=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,Pt=me.memoizedState,U=r.stateNode,z=U.getSnapshotBeforeUpdate(r.elementType===r.type?ve:Hn(r.type,ve),Pt);U.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var H=r.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(oe){Nt(r,r.return,oe)}if(e=r.sibling,e!==null){e.return=r.return,fe=e;break}fe=r.return}return me=B0,B0=!1,me}function ul(e,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&e)===e){var x=h.destroy;h.destroy=void 0,x!==void 0&&tf(r,l,x)}h=h.next}while(h!==d)}}function su(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function rf(e){var r=e.ref;if(r!==null){var l=e.stateNode;e.tag,e=l,typeof r=="function"?r(e):r.current=e}}function U0(e){var r=e.alternate;r!==null&&(e.alternate=null,U0(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[ni],delete r[$o],delete r[vp],delete r[i2],delete r[s2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function W0(e){return e.tag===5||e.tag===3||e.tag===4}function H0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nf(e,r,l){var d=e.tag;if(d===5||d===6)e=e.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(e,r):l.insertBefore(e,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(e,l)):(r=l,r.appendChild(e)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Mc));else if(d!==4&&(e=e.child,e!==null))for(nf(e,r,l),e=e.sibling;e!==null;)nf(e,r,l),e=e.sibling}function sf(e,r,l){var d=e.tag;if(d===5||d===6)e=e.stateNode,r?l.insertBefore(e,r):l.appendChild(e);else if(d!==4&&(e=e.child,e!==null))for(sf(e,r,l),e=e.sibling;e!==null;)sf(e,r,l),e=e.sibling}var tr=null,Vn=!1;function ns(e,r,l){for(l=l.child;l!==null;)V0(e,r,l),l=l.sibling}function V0(e,r,l){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(ti,l)}catch{}switch(l.tag){case 5:ur||Ya(l,r);case 6:var d=tr,h=Vn;tr=null,ns(e,r,l),tr=d,Vn=h,tr!==null&&(Vn?(e=tr,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):tr.removeChild(l.stateNode));break;case 18:tr!==null&&(Vn?(e=tr,l=l.stateNode,e.nodeType===8?xp(e.parentNode,l):e.nodeType===1&&xp(e,l),Wo(e)):xp(tr,l.stateNode));break;case 4:d=tr,h=Vn,tr=l.stateNode.containerInfo,Vn=!0,ns(e,r,l),tr=d,Vn=h;break;case 0:case 11:case 14:case 15:if(!ur&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var x=h,N=x.destroy;x=x.tag,N!==void 0&&((x&2)!==0||(x&4)!==0)&&tf(l,r,N),h=h.next}while(h!==d)}ns(e,r,l);break;case 1:if(!ur&&(Ya(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(R){Nt(l,r,R)}ns(e,r,l);break;case 21:ns(e,r,l);break;case 22:l.mode&1?(ur=(d=ur)||l.memoizedState!==null,ns(e,r,l),ur=d):ns(e,r,l);break;default:ns(e,r,l)}}function Y0(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new w2),r.forEach(function(d){var h=P2.bind(null,e,d);l.has(d)||(l.add(d),d.then(h,h))})}}function Yn(e,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var h=l[d];try{var x=e,N=r,R=N;e:for(;R!==null;){switch(R.tag){case 5:tr=R.stateNode,Vn=!1;break e;case 3:tr=R.stateNode.containerInfo,Vn=!0;break e;case 4:tr=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(tr===null)throw Error(n(160));V0(x,N,h),tr=null,Vn=!1;var I=h.alternate;I!==null&&(I.return=null),h.return=null}catch(G){Nt(h,r,G)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)G0(r,e),r=r.sibling}function G0(e,r){var l=e.alternate,d=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yn(r,e),ai(e),d&4){try{ul(3,e,e.return),su(3,e)}catch(ve){Nt(e,e.return,ve)}try{ul(5,e,e.return)}catch(ve){Nt(e,e.return,ve)}}break;case 1:Yn(r,e),ai(e),d&512&&l!==null&&Ya(l,l.return);break;case 5:if(Yn(r,e),ai(e),d&512&&l!==null&&Ya(l,l.return),e.flags&32){var h=e.stateNode;try{xr(h,"")}catch(ve){Nt(e,e.return,ve)}}if(d&4&&(h=e.stateNode,h!=null)){var x=e.memoizedProps,N=l!==null?l.memoizedProps:x,R=e.type,I=e.updateQueue;if(e.updateQueue=null,I!==null)try{R==="input"&&x.type==="radio"&&x.name!=null&&wt(h,x),mn(R,N);var G=mn(R,x);for(N=0;N<I.length;N+=2){var te=I[N],ie=I[N+1];te==="style"?hn(h,ie):te==="dangerouslySetInnerHTML"?gr(h,ie):te==="children"?xr(h,ie):E(h,te,ie,G)}switch(R){case"input":q(h,x);break;case"textarea":Zn(h,x);break;case"select":var ee=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var pe=x.value;pe!=null?Qe(h,!!x.multiple,pe,!1):ee!==!!x.multiple&&(x.defaultValue!=null?Qe(h,!!x.multiple,x.defaultValue,!0):Qe(h,!!x.multiple,x.multiple?[]:"",!1))}h[$o]=x}catch(ve){Nt(e,e.return,ve)}}break;case 6:if(Yn(r,e),ai(e),d&4){if(e.stateNode===null)throw Error(n(162));h=e.stateNode,x=e.memoizedProps;try{h.nodeValue=x}catch(ve){Nt(e,e.return,ve)}}break;case 3:if(Yn(r,e),ai(e),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Wo(r.containerInfo)}catch(ve){Nt(e,e.return,ve)}break;case 4:Yn(r,e),ai(e);break;case 13:Yn(r,e),ai(e),h=e.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(lf=De())),d&4&&Y0(e);break;case 22:if(te=l!==null&&l.memoizedState!==null,e.mode&1?(ur=(G=ur)||te,Yn(r,e),ur=G):Yn(r,e),ai(e),d&8192){if(G=e.memoizedState!==null,(e.stateNode.isHidden=G)&&!te&&(e.mode&1)!==0)for(fe=e,te=e.child;te!==null;){for(ie=fe=te;fe!==null;){switch(ee=fe,pe=ee.child,ee.tag){case 0:case 11:case 14:case 15:ul(4,ee,ee.return);break;case 1:Ya(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){d=ee,l=ee.return;try{r=d,me.props=r.memoizedProps,me.state=r.memoizedState,me.componentWillUnmount()}catch(ve){Nt(d,l,ve)}}break;case 5:Ya(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Q0(ie);continue}}pe!==null?(pe.return=ee,fe=pe):Q0(ie)}te=te.sibling}e:for(te=null,ie=e;;){if(ie.tag===5){if(te===null){te=ie;try{h=ie.stateNode,G?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(R=ie.stateNode,I=ie.memoizedProps.style,N=I!=null&&I.hasOwnProperty("display")?I.display:null,R.style.display=Ds("display",N))}catch(ve){Nt(e,e.return,ve)}}}else if(ie.tag===6){if(te===null)try{ie.stateNode.nodeValue=G?"":ie.memoizedProps}catch(ve){Nt(e,e.return,ve)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;te===ie&&(te=null),ie=ie.return}te===ie&&(te=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Yn(r,e),ai(e),d&4&&Y0(e);break;case 21:break;default:Yn(r,e),ai(e)}}function ai(e){var r=e.flags;if(r&2){try{e:{for(var l=e.return;l!==null;){if(W0(l)){var d=l;break e}l=l.return}throw Error(n(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(xr(h,""),d.flags&=-33);var x=H0(e);sf(e,x,h);break;case 3:case 4:var N=d.stateNode.containerInfo,R=H0(e);nf(e,R,N);break;default:throw Error(n(161))}}catch(I){Nt(e,e.return,I)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function N2(e,r,l){fe=e,q0(e)}function q0(e,r,l){for(var d=(e.mode&1)!==0;fe!==null;){var h=fe,x=h.child;if(h.tag===22&&d){var N=h.memoizedState!==null||iu;if(!N){var R=h.alternate,I=R!==null&&R.memoizedState!==null||ur;R=iu;var G=ur;if(iu=N,(ur=I)&&!G)for(fe=h;fe!==null;)N=fe,I=N.child,N.tag===22&&N.memoizedState!==null?K0(h):I!==null?(I.return=N,fe=I):K0(h);for(;x!==null;)fe=x,q0(x),x=x.sibling;fe=h,iu=R,ur=G}X0(e)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,fe=x):X0(e)}}function X0(e){for(;fe!==null;){var r=fe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:ur||su(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!ur)if(l===null)d.componentDidMount();else{var h=r.elementType===r.type?l.memoizedProps:Hn(r.type,l.memoizedProps);d.componentDidUpdate(h,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Qg(r,x,d);break;case 3:var N=r.updateQueue;if(N!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Qg(r,N,l)}break;case 5:var R=r.stateNode;if(l===null&&r.flags&4){l=R;var I=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&l.focus();break;case"img":I.src&&(l.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var G=r.alternate;if(G!==null){var te=G.memoizedState;if(te!==null){var ie=te.dehydrated;ie!==null&&Wo(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ur||r.flags&512&&rf(r)}catch(ee){Nt(r,r.return,ee)}}if(r===e){fe=null;break}if(l=r.sibling,l!==null){l.return=r.return,fe=l;break}fe=r.return}}function Q0(e){for(;fe!==null;){var r=fe;if(r===e){fe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,fe=l;break}fe=r.return}}function K0(e){for(;fe!==null;){var r=fe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{su(4,r)}catch(I){Nt(r,l,I)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var h=r.return;try{d.componentDidMount()}catch(I){Nt(r,h,I)}}var x=r.return;try{rf(r)}catch(I){Nt(r,x,I)}break;case 5:var N=r.return;try{rf(r)}catch(I){Nt(r,N,I)}}}catch(I){Nt(r,r.return,I)}if(r===e){fe=null;break}var R=r.sibling;if(R!==null){R.return=r.return,fe=R;break}fe=r.return}}var k2=Math.ceil,au=j.ReactCurrentDispatcher,af=j.ReactCurrentOwner,wn=j.ReactCurrentBatchConfig,Ye=0,Qt=null,Mt=null,rr=0,en=0,Ga=Zi(0),Wt=0,dl=null,Xs=0,ou=0,of=0,pl=null,Mr=null,lf=0,qa=1/0,Ei=null,lu=!1,cf=null,is=null,cu=!1,ss=null,uu=0,fl=0,uf=null,du=-1,pu=0;function wr(){return(Ye&6)!==0?De():du!==-1?du:du=De()}function as(e){return(e.mode&1)===0?1:(Ye&2)!==0&&rr!==0?rr&-rr:o2.transition!==null?(pu===0&&(pu=Hm()),pu):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:Zm(e.type)),e)}function Gn(e,r,l,d){if(50<fl)throw fl=0,uf=null,Error(n(185));zo(e,l,d),((Ye&2)===0||e!==Qt)&&(e===Qt&&((Ye&2)===0&&(ou|=l),Wt===4&&os(e,rr)),zr(e,d),l===1&&Ye===0&&(r.mode&1)===0&&(qa=De()+500,Bc&&es()))}function zr(e,r){var l=e.callbackNode;ow(e,r);var d=wc(e,e===Qt?rr:0);if(d===0)l!==null&&Bt(l),e.callbackNode=null,e.callbackPriority=0;else if(r=d&-d,e.callbackPriority!==r){if(l!=null&&Bt(l),r===1)e.tag===0?a2(Z0.bind(null,e)):zg(Z0.bind(null,e)),r2(function(){(Ye&6)===0&&es()}),l=null;else{switch(Vm(d)){case 1:l=Rr;break;case 4:l=Ea;break;case 16:l=Fs;break;case 536870912:l=Kr;break;default:l=Fs}l=ax(l,J0.bind(null,e))}e.callbackPriority=r,e.callbackNode=l}}function J0(e,r){if(du=-1,pu=0,(Ye&6)!==0)throw Error(n(327));var l=e.callbackNode;if(Xa()&&e.callbackNode!==l)return null;var d=wc(e,e===Qt?rr:0);if(d===0)return null;if((d&30)!==0||(d&e.expiredLanes)!==0||r)r=fu(e,d);else{r=d;var h=Ye;Ye|=2;var x=ex();(Qt!==e||rr!==r)&&(Ei=null,qa=De()+500,Ks(e,r));do try{S2();break}catch(R){$0(e,R)}while(!0);Sp(),au.current=x,Ye=h,Mt!==null?r=0:(Qt=null,rr=0,r=Wt)}if(r!==0){if(r===2&&(h=Hd(e),h!==0&&(d=h,r=df(e,h))),r===1)throw l=dl,Ks(e,0),os(e,d),zr(e,De()),l;if(r===6)os(e,d);else{if(h=e.current.alternate,(d&30)===0&&!j2(h)&&(r=fu(e,d),r===2&&(x=Hd(e),x!==0&&(d=x,r=df(e,x))),r===1))throw l=dl,Ks(e,0),os(e,d),zr(e,De()),l;switch(e.finishedWork=h,e.finishedLanes=d,r){case 0:case 1:throw Error(n(345));case 2:Js(e,Mr,Ei);break;case 3:if(os(e,d),(d&130023424)===d&&(r=lf+500-De(),10<r)){if(wc(e,0)!==0)break;if(h=e.suspendedLanes,(h&d)!==d){wr(),e.pingedLanes|=e.suspendedLanes&h;break}e.timeoutHandle=gp(Js.bind(null,e,Mr,Ei),r);break}Js(e,Mr,Ei);break;case 4:if(os(e,d),(d&4194240)===d)break;for(r=e.eventTimes,h=-1;0<d;){var N=31-Bn(d);x=1<<N,N=r[N],N>h&&(h=N),d&=~x}if(d=h,d=De()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*k2(d/1960))-d,10<d){e.timeoutHandle=gp(Js.bind(null,e,Mr,Ei),d);break}Js(e,Mr,Ei);break;case 5:Js(e,Mr,Ei);break;default:throw Error(n(329))}}}return zr(e,De()),e.callbackNode===l?J0.bind(null,e):null}function df(e,r){var l=pl;return e.current.memoizedState.isDehydrated&&(Ks(e,r).flags|=256),e=fu(e,r),e!==2&&(r=Mr,Mr=l,r!==null&&pf(r)),e}function pf(e){Mr===null?Mr=e:Mr.push.apply(Mr,e)}function j2(e){for(var r=e;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var h=l[d],x=h.getSnapshot;h=h.value;try{if(!Un(x(),h))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function os(e,r){for(r&=~of,r&=~ou,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var l=31-Bn(r),d=1<<l;e[l]=-1,r&=~d}}function Z0(e){if((Ye&6)!==0)throw Error(n(327));Xa();var r=wc(e,0);if((r&1)===0)return zr(e,De()),null;var l=fu(e,r);if(e.tag!==0&&l===2){var d=Hd(e);d!==0&&(r=d,l=df(e,d))}if(l===1)throw l=dl,Ks(e,0),os(e,r),zr(e,De()),l;if(l===6)throw Error(n(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Js(e,Mr,Ei),zr(e,De()),null}function ff(e,r){var l=Ye;Ye|=1;try{return e(r)}finally{Ye=l,Ye===0&&(qa=De()+500,Bc&&es())}}function Qs(e){ss!==null&&ss.tag===0&&(Ye&6)===0&&Xa();var r=Ye;Ye|=1;var l=wn.transition,d=Ke;try{if(wn.transition=null,Ke=1,e)return e()}finally{Ke=d,wn.transition=l,Ye=r,(Ye&6)===0&&es()}}function hf(){en=Ga.current,lt(Ga)}function Ks(e,r){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,t2(l)),Mt!==null)for(l=Mt.return;l!==null;){var d=l;switch(_p(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Dc();break;case 3:Ha(),lt(Lr),lt(or),Ip();break;case 5:Lp(d);break;case 4:Ha();break;case 13:lt(ht);break;case 19:lt(ht);break;case 10:Ap(d.type._context);break;case 22:case 23:hf()}l=l.return}if(Qt=e,Mt=e=ls(e.current,null),rr=en=r,Wt=0,dl=null,of=ou=Xs=0,Mr=pl=null,Ys!==null){for(r=0;r<Ys.length;r++)if(l=Ys[r],d=l.interleaved,d!==null){l.interleaved=null;var h=d.next,x=l.pending;if(x!==null){var N=x.next;x.next=h,d.next=N}l.pending=d}Ys=null}return e}function $0(e,r){do{var l=Mt;try{if(Sp(),Kc.current=eu,Jc){for(var d=mt.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}Jc=!1}if(qs=0,Xt=Ut=mt=null,sl=!1,al=0,af.current=null,l===null||l.return===null){Wt=1,dl=r,Mt=null;break}e:{var x=e,N=l.return,R=l,I=r;if(r=rr,R.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var G=I,te=R,ie=te.tag;if((te.mode&1)===0&&(ie===0||ie===11||ie===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var pe=k0(N);if(pe!==null){pe.flags&=-257,j0(pe,N,R,x,r),pe.mode&1&&N0(x,G,r),r=pe,I=G;var me=r.updateQueue;if(me===null){var ve=new Set;ve.add(I),r.updateQueue=ve}else me.add(I);break e}else{if((r&1)===0){N0(x,G,r),mf();break e}I=Error(n(426))}}else if(dt&&R.mode&1){var Pt=k0(N);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),j0(Pt,N,R,x,r),jp(Va(I,R));break e}}x=I=Va(I,R),Wt!==4&&(Wt=2),pl===null?pl=[x]:pl.push(x),x=N;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var U=w0(x,I,r);Xg(x,U);break e;case 1:R=I;var z=x.type,H=x.stateNode;if((x.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(is===null||!is.has(H)))){x.flags|=65536,r&=-r,x.lanes|=r;var oe=_0(x,R,r);Xg(x,oe);break e}}x=x.return}while(x!==null)}rx(l)}catch(be){r=be,Mt===l&&l!==null&&(Mt=l=l.return);continue}break}while(!0)}function ex(){var e=au.current;return au.current=eu,e===null?eu:e}function mf(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||(Xs&268435455)===0&&(ou&268435455)===0||os(Qt,rr)}function fu(e,r){var l=Ye;Ye|=2;var d=ex();(Qt!==e||rr!==r)&&(Ei=null,Ks(e,r));do try{E2();break}catch(h){$0(e,h)}while(!0);if(Sp(),Ye=l,au.current=d,Mt!==null)throw Error(n(261));return Qt=null,rr=0,Wt}function E2(){for(;Mt!==null;)tx(Mt)}function S2(){for(;Mt!==null&&!vi();)tx(Mt)}function tx(e){var r=sx(e.alternate,e,en);e.memoizedProps=e.pendingProps,r===null?rx(e):Mt=r,af.current=null}function rx(e){var r=e;do{var l=r.alternate;if(e=r.return,(r.flags&32768)===0){if(l=y2(l,r,en),l!==null){Mt=l;return}}else{if(l=b2(l,r),l!==null){l.flags&=32767,Mt=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Wt=6,Mt=null;return}}if(r=r.sibling,r!==null){Mt=r;return}Mt=r=e}while(r!==null);Wt===0&&(Wt=5)}function Js(e,r,l){var d=Ke,h=wn.transition;try{wn.transition=null,Ke=1,A2(e,r,l,d)}finally{wn.transition=h,Ke=d}return null}function A2(e,r,l,d){do Xa();while(ss!==null);if((Ye&6)!==0)throw Error(n(327));l=e.finishedWork;var h=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(n(177));e.callbackNode=null,e.callbackPriority=0;var x=l.lanes|l.childLanes;if(lw(e,x),e===Qt&&(Mt=Qt=null,rr=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||cu||(cu=!0,ax(Fs,function(){return Xa(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=wn.transition,wn.transition=null;var N=Ke;Ke=1;var R=Ye;Ye|=4,af.current=null,_2(e,l),G0(l,e),Xw(hp),kc=!!fp,hp=fp=null,e.current=l,N2(l),ja(),Ye=R,Ke=N,wn.transition=x}else e.current=l;if(cu&&(cu=!1,ss=e,uu=h),x=e.pendingLanes,x===0&&(is=null),ri(l.stateNode),zr(e,De()),r!==null)for(d=e.onRecoverableError,l=0;l<r.length;l++)h=r[l],d(h.value,{componentStack:h.stack,digest:h.digest});if(lu)throw lu=!1,e=cf,cf=null,e;return(uu&1)!==0&&e.tag!==0&&Xa(),x=e.pendingLanes,(x&1)!==0?e===uf?fl++:(fl=0,uf=e):fl=0,es(),null}function Xa(){if(ss!==null){var e=Vm(uu),r=wn.transition,l=Ke;try{if(wn.transition=null,Ke=16>e?16:e,ss===null)var d=!1;else{if(e=ss,ss=null,uu=0,(Ye&6)!==0)throw Error(n(331));var h=Ye;for(Ye|=4,fe=e.current;fe!==null;){var x=fe,N=x.child;if((fe.flags&16)!==0){var R=x.deletions;if(R!==null){for(var I=0;I<R.length;I++){var G=R[I];for(fe=G;fe!==null;){var te=fe;switch(te.tag){case 0:case 11:case 15:ul(8,te,x)}var ie=te.child;if(ie!==null)ie.return=te,fe=ie;else for(;fe!==null;){te=fe;var ee=te.sibling,pe=te.return;if(U0(te),te===G){fe=null;break}if(ee!==null){ee.return=pe,fe=ee;break}fe=pe}}}var me=x.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var Pt=ve.sibling;ve.sibling=null,ve=Pt}while(ve!==null)}}fe=x}}if((x.subtreeFlags&2064)!==0&&N!==null)N.return=x,fe=N;else e:for(;fe!==null;){if(x=fe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ul(9,x,x.return)}var U=x.sibling;if(U!==null){U.return=x.return,fe=U;break e}fe=x.return}}var z=e.current;for(fe=z;fe!==null;){N=fe;var H=N.child;if((N.subtreeFlags&2064)!==0&&H!==null)H.return=N,fe=H;else e:for(N=z;fe!==null;){if(R=fe,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:su(9,R)}}catch(be){Nt(R,R.return,be)}if(R===N){fe=null;break e}var oe=R.sibling;if(oe!==null){oe.return=R.return,fe=oe;break e}fe=R.return}}if(Ye=h,es(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(ti,e)}catch{}d=!0}return d}finally{Ke=l,wn.transition=r}}return!1}function nx(e,r,l){r=Va(l,r),r=w0(e,r,1),e=rs(e,r,1),r=wr(),e!==null&&(zo(e,1,r),zr(e,r))}function Nt(e,r,l){if(e.tag===3)nx(e,e,l);else for(;r!==null;){if(r.tag===3){nx(r,e,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))){e=Va(l,e),e=_0(r,e,1),r=rs(r,e,1),e=wr(),r!==null&&(zo(r,1,e),zr(r,e));break}}r=r.return}}function C2(e,r,l){var d=e.pingCache;d!==null&&d.delete(r),r=wr(),e.pingedLanes|=e.suspendedLanes&l,Qt===e&&(rr&l)===l&&(Wt===4||Wt===3&&(rr&130023424)===rr&&500>De()-lf?Ks(e,0):of|=l),zr(e,r)}function ix(e,r){r===0&&((e.mode&1)===0?r=1:(r=bc,bc<<=1,(bc&130023424)===0&&(bc=4194304)));var l=wr();e=Ni(e,r),e!==null&&(zo(e,r,l),zr(e,l))}function T2(e){var r=e.memoizedState,l=0;r!==null&&(l=r.retryLane),ix(e,l)}function P2(e,r){var l=0;switch(e.tag){case 13:var d=e.stateNode,h=e.memoizedState;h!==null&&(l=h.retryLane);break;case 19:d=e.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(r),ix(e,l)}var sx;sx=function(e,r,l){if(e!==null)if(e.memoizedProps!==r.pendingProps||Lr.current)Ir=!0;else{if((e.lanes&l)===0&&(r.flags&128)===0)return Ir=!1,v2(e,r,l);Ir=(e.flags&131072)!==0}else Ir=!1,dt&&(r.flags&1048576)!==0&&Dg(r,Wc,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;nu(e,r),e=r.pendingProps;var h=Ma(r,or.current);Wa(r,l),h=Dp(null,r,d,e,h,l);var x=Fp();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Or(d)?(x=!0,Fc(r)):x=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Pp(r),h.updater=tu,r.stateNode=h,h._reactInternals=r,Yp(r,d,e,l),r=Qp(null,r,d,!0,x,l)):(r.tag=0,dt&&x&&wp(r),br(null,r,h,l),r=r.child),r;case 16:d=r.elementType;e:{switch(nu(e,r),e=r.pendingProps,h=d._init,d=h(d._payload),r.type=d,h=r.tag=L2(d),e=Hn(d,e),h){case 0:r=Xp(null,r,d,e,l);break e;case 1:r=P0(null,r,d,e,l);break e;case 11:r=E0(null,r,d,e,l);break e;case 14:r=S0(null,r,d,Hn(d.type,e),l);break e}throw Error(n(306,d,""))}return r;case 0:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Hn(d,h),Xp(e,r,d,h,l);case 1:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Hn(d,h),P0(e,r,d,h,l);case 3:e:{if(R0(r),e===null)throw Error(n(387));d=r.pendingProps,x=r.memoizedState,h=x.element,qg(e,r),Xc(r,d,null,l);var N=r.memoizedState;if(d=N.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){h=Va(Error(n(423)),r),r=L0(e,r,d,l,h);break e}else if(d!==h){h=Va(Error(n(424)),r),r=L0(e,r,d,l,h);break e}else for($r=Ji(r.stateNode.containerInfo.firstChild),Zr=r,dt=!0,Wn=null,l=Yg(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fa(),d===h){r=ji(e,r,l);break e}br(e,r,d,l)}r=r.child}return r;case 5:return Kg(r),e===null&&kp(r),d=r.type,h=r.pendingProps,x=e!==null?e.memoizedProps:null,N=h.children,mp(d,h)?N=null:x!==null&&mp(d,x)&&(r.flags|=32),T0(e,r),br(e,r,N,l),r.child;case 6:return e===null&&kp(r),null;case 13:return O0(e,r,l);case 4:return Rp(r,r.stateNode.containerInfo),d=r.pendingProps,e===null?r.child=Ba(r,null,d,l):br(e,r,d,l),r.child;case 11:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Hn(d,h),E0(e,r,d,h,l);case 7:return br(e,r,r.pendingProps,l),r.child;case 8:return br(e,r,r.pendingProps.children,l),r.child;case 12:return br(e,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,h=r.pendingProps,x=r.memoizedProps,N=h.value,rt(Yc,d._currentValue),d._currentValue=N,x!==null)if(Un(x.value,N)){if(x.children===h.children&&!Lr.current){r=ji(e,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var R=x.dependencies;if(R!==null){N=x.child;for(var I=R.firstContext;I!==null;){if(I.context===d){if(x.tag===1){I=ki(-1,l&-l),I.tag=2;var G=x.updateQueue;if(G!==null){G=G.shared;var te=G.pending;te===null?I.next=I:(I.next=te.next,te.next=I),G.pending=I}}x.lanes|=l,I=x.alternate,I!==null&&(I.lanes|=l),Cp(x.return,l,r),R.lanes|=l;break}I=I.next}}else if(x.tag===10)N=x.type===r.type?null:x.child;else if(x.tag===18){if(N=x.return,N===null)throw Error(n(341));N.lanes|=l,R=N.alternate,R!==null&&(R.lanes|=l),Cp(N,l,r),N=x.sibling}else N=x.child;if(N!==null)N.return=x;else for(N=x;N!==null;){if(N===r){N=null;break}if(x=N.sibling,x!==null){x.return=N.return,N=x;break}N=N.return}x=N}br(e,r,h.children,l),r=r.child}return r;case 9:return h=r.type,d=r.pendingProps.children,Wa(r,l),h=yn(h),d=d(h),r.flags|=1,br(e,r,d,l),r.child;case 14:return d=r.type,h=Hn(d,r.pendingProps),h=Hn(d.type,h),S0(e,r,d,h,l);case 15:return A0(e,r,r.type,r.pendingProps,l);case 17:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:Hn(d,h),nu(e,r),r.tag=1,Or(d)?(e=!0,Fc(r)):e=!1,Wa(r,l),y0(r,d,h),Yp(r,d,h,l),Qp(null,r,d,!0,e,l);case 19:return M0(e,r,l);case 22:return C0(e,r,l)}throw Error(n(156,r.tag))};function ax(e,r){return It(e,r)}function R2(e,r,l,d){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,r,l,d){return new R2(e,r,l,d)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L2(e){if(typeof e=="function")return gf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===se)return 14}return 2}function ls(e,r){var l=e.alternate;return l===null?(l=_n(e.tag,r,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=r,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,r=e.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function hu(e,r,l,d,h,x){var N=2;if(d=e,typeof e=="function")gf(e)&&(N=1);else if(typeof e=="string")N=5;else e:switch(e){case L:return Zs(l.children,h,x,r);case B:N=8,h|=8;break;case W:return e=_n(12,l,r,h|2),e.elementType=W,e.lanes=x,e;case J:return e=_n(13,l,r,h),e.elementType=J,e.lanes=x,e;case Z:return e=_n(19,l,r,h),e.elementType=Z,e.lanes=x,e;case $:return mu(l,h,x,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:N=10;break e;case Q:N=9;break e;case D:N=11;break e;case se:N=14;break e;case ce:N=16,d=null;break e}throw Error(n(130,e==null?e:typeof e,""))}return r=_n(N,l,r,h),r.elementType=e,r.type=d,r.lanes=x,r}function Zs(e,r,l,d){return e=_n(7,e,d,r),e.lanes=l,e}function mu(e,r,l,d){return e=_n(22,e,d,r),e.elementType=$,e.lanes=l,e.stateNode={isHidden:!1},e}function xf(e,r,l){return e=_n(6,e,null,r),e.lanes=l,e}function vf(e,r,l){return r=_n(4,e.children!==null?e.children:[],e.key,r),r.lanes=l,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function O2(e,r,l,d,h){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vd(0),this.expirationTimes=Vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vd(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function yf(e,r,l,d,h,x,N,R,I){return e=new O2(e,r,l,R,I),r===1?(r=1,x===!0&&(r|=8)):r=0,x=_n(3,null,null,r),e.current=x,x.stateNode=e,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pp(x),e}function I2(e,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:d==null?null:""+d,children:e,containerInfo:r,implementation:l}}function ox(e){if(!e)return $i;e=e._reactInternals;e:{if(He(e)!==e||e.tag!==1)throw Error(n(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(e.tag===1){var l=e.type;if(Or(l))return Ig(e,l,r)}return r}function lx(e,r,l,d,h,x,N,R,I){return e=yf(l,d,!0,e,h,x,N,R,I),e.context=ox(null),l=e.current,d=wr(),h=as(l),x=ki(d,h),x.callback=r??null,rs(l,x,h),e.current.lanes=h,zo(e,h,d),zr(e,d),e}function gu(e,r,l,d){var h=r.current,x=wr(),N=as(h);return l=ox(l),r.context===null?r.context=l:r.pendingContext=l,r=ki(x,N),r.payload={element:e},d=d===void 0?null:d,d!==null&&(r.callback=d),e=rs(h,r,N),e!==null&&(Gn(e,h,N,x),qc(e,h,N)),N}function xu(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function cx(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<r?l:r}}function bf(e,r){cx(e,r),(e=e.alternate)&&cx(e,r)}function M2(){return null}var ux=typeof reportError=="function"?reportError:function(e){console.error(e)};function wf(e){this._internalRoot=e}vu.prototype.render=wf.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(n(409));gu(e,r,null,null)},vu.prototype.unmount=wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qs(function(){gu(null,e,null,null)}),r[yi]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var r=qm();e={blockedOn:null,target:e,priority:r};for(var l=0;l<Xi.length&&r!==0&&r<Xi[l].priority;l++);Xi.splice(l,0,e),l===0&&Km(e)}};function _f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dx(){}function z2(e,r,l,d,h){if(h){if(typeof d=="function"){var x=d;d=function(){var G=xu(N);x.call(G)}}var N=lx(r,d,e,0,null,!1,!1,"",dx);return e._reactRootContainer=N,e[yi]=N.current,Jo(e.nodeType===8?e.parentNode:e),Qs(),N}for(;h=e.lastChild;)e.removeChild(h);if(typeof d=="function"){var R=d;d=function(){var G=xu(I);R.call(G)}}var I=yf(e,0,!1,null,null,!1,!1,"",dx);return e._reactRootContainer=I,e[yi]=I.current,Jo(e.nodeType===8?e.parentNode:e),Qs(function(){gu(r,I,l,d)}),I}function bu(e,r,l,d,h){var x=l._reactRootContainer;if(x){var N=x;if(typeof h=="function"){var R=h;h=function(){var I=xu(N);R.call(I)}}gu(r,N,e,h)}else N=z2(l,r,e,h,d);return xu(N)}Ym=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var l=Mo(r.pendingLanes);l!==0&&(Yd(r,l|1),zr(r,De()),(Ye&6)===0&&(qa=De()+500,es()))}break;case 13:Qs(function(){var d=Ni(e,1);if(d!==null){var h=wr();Gn(d,e,1,h)}}),bf(e,1)}},Gd=function(e){if(e.tag===13){var r=Ni(e,134217728);if(r!==null){var l=wr();Gn(r,e,134217728,l)}bf(e,134217728)}},Gm=function(e){if(e.tag===13){var r=as(e),l=Ni(e,r);if(l!==null){var d=wr();Gn(l,e,r,d)}bf(e,r)}},qm=function(){return Ke},Xm=function(e,r){var l=Ke;try{return Ke=e,r()}finally{Ke=l}},Fn=function(e,r,l){switch(r){case"input":if(q(e,l),r=l.name,l.type==="radio"&&r!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==e&&d.form===e.form){var h=zc(d);if(!h)throw Error(n(90));At(d),q(d,h)}}}break;case"textarea":Zn(e,l);break;case"select":r=l.value,r!=null&&Qe(e,!!l.multiple,r,!1)}},gn=ff,Vi=Qs;var D2={usingClientEntryPoint:!1,Events:[el,Oa,zc,ei,xi,ff]},hl={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F2={bundleType:hl.bundleType,version:hl.version,rendererPackageName:hl.rendererPackageName,rendererConfig:hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qr(e),e===null?null:e.stateNode},findFiberByHostInstance:hl.findFiberByHostInstance||M2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{ti=wu.inject(F2),yr=wu}catch{}}return Dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D2,Dr.createPortal=function(e,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(r))throw Error(n(200));return I2(e,r,null,l)},Dr.createRoot=function(e,r){if(!_f(e))throw Error(n(299));var l=!1,d="",h=ux;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=yf(e,1,!1,null,null,l,!1,d,h),e[yi]=r.current,Jo(e.nodeType===8?e.parentNode:e),new wf(r)},Dr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=Qr(r),e=e===null?null:e.stateNode,e},Dr.flushSync=function(e){return Qs(e)},Dr.hydrate=function(e,r,l){if(!yu(r))throw Error(n(200));return bu(null,e,r,!0,l)},Dr.hydrateRoot=function(e,r,l){if(!_f(e))throw Error(n(405));var d=l!=null&&l.hydratedSources||null,h=!1,x="",N=ux;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(N=l.onRecoverableError)),r=lx(r,null,e,1,l??null,h,!1,x,N),e[yi]=r.current,Jo(e),d)for(e=0;e<d.length;e++)l=d[e],h=l._getVersion,h=h(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,h]:r.mutableSourceEagerHydrationData.push(l,h);return new vu(r)},Dr.render=function(e,r,l){if(!yu(r))throw Error(n(200));return bu(null,e,r,!1,l)},Dr.unmountComponentAtNode=function(e){if(!yu(e))throw Error(n(40));return e._reactRootContainer?(Qs(function(){bu(null,null,e,!1,function(){e._reactRootContainer=null,e[yi]=null})}),!0):!1},Dr.unstable_batchedUpdates=ff,Dr.unstable_renderSubtreeIntoContainer=function(e,r,l,d){if(!yu(l))throw Error(n(200));if(e==null||e._reactInternals===void 0)throw Error(n(38));return bu(e,r,l,!1,d)},Dr.version="18.3.1-next-f1338f8080-20240426",Dr}var yx;function n1(){if(yx)return jf.exports;yx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),jf.exports=X2(),jf.exports}var bx;function Q2(){if(bx)return _u;bx=1;var s=n1();return _u.createRoot=s.createRoot,_u.hydrateRoot=s.hydrateRoot,_u}var K2=Q2();n1();function Hl(){return Hl=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},Hl.apply(null,arguments)}var gs;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(gs||(gs={}));const wx="popstate";function J2(s){s===void 0&&(s={});function t(i,a){let{pathname:c,search:u,hash:p}=i.location;return Kf("",{pathname:c,search:u,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:td(a)}return $2(t,n,null,s)}function St(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function i1(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Z2(){return Math.random().toString(36).substr(2,8)}function _x(s,t){return{usr:s.state,key:s.key,idx:t}}function Kf(s,t,n,i){return n===void 0&&(n=null),Hl({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof t=="string"?To(t):t,{state:n,key:t&&t.key||i||Z2()})}function td(s){let{pathname:t="/",search:n="",hash:i=""}=s;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function To(s){let t={};if(s){let n=s.indexOf("#");n>=0&&(t.hash=s.substr(n),s=s.substr(0,n));let i=s.indexOf("?");i>=0&&(t.search=s.substr(i),s=s.substr(0,i)),s&&(t.pathname=s)}return t}function $2(s,t,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:c=!1}=i,u=a.history,p=gs.Pop,f=null,m=g();m==null&&(m=0,u.replaceState(Hl({},u.state,{idx:m}),""));function g(){return(u.state||{idx:null}).idx}function y(){p=gs.Pop;let k=g(),C=k==null?null:k-m;m=k,f&&f({action:p,location:w.location,delta:C})}function v(k,C){p=gs.Push;let A=Kf(w.location,k,C);m=g()+1;let E=_x(A,m),j=w.createHref(A);try{u.pushState(E,"",j)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(j)}c&&f&&f({action:p,location:w.location,delta:1})}function b(k,C){p=gs.Replace;let A=Kf(w.location,k,C);m=g();let E=_x(A,m),j=w.createHref(A);u.replaceState(E,"",j),c&&f&&f({action:p,location:w.location,delta:0})}function _(k){let C=a.location.origin!=="null"?a.location.origin:a.location.href,A=typeof k=="string"?k:td(k);return A=A.replace(/ $/,"%20"),St(C,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,C)}let w={get action(){return p},get location(){return s(a,u)},listen(k){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(wx,y),f=k,()=>{a.removeEventListener(wx,y),f=null}},createHref(k){return t(a,k)},createURL:_,encodeLocation(k){let C=_(k);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:v,replace:b,go(k){return u.go(k)}};return w}var Nx;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Nx||(Nx={}));function e5(s,t,n){return n===void 0&&(n="/"),t5(s,t,n)}function t5(s,t,n,i){let a=typeof t=="string"?To(t):t,c=bo(a.pathname||"/",n);if(c==null)return null;let u=s1(s);r5(u);let p=null,f=f5(c);for(let m=0;p==null&&m<u.length;++m)p=d5(u[m],f);return p}function s1(s,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(c,u,p)=>{let f={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};f.relativePath.startsWith("/")&&(St(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let m=Ns([i,f.relativePath]),g=n.concat(f);c.children&&c.children.length>0&&(St(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),s1(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:c5(m,c.index),routesMeta:g})};return s.forEach((c,u)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,u);else for(let f of a1(c.path))a(c,u,f)}),t}function a1(s){let t=s.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),c=n.replace(/\?$/,"");if(i.length===0)return a?[c,""]:[c];let u=a1(i.join("/")),p=[];return p.push(...u.map(f=>f===""?c:[c,f].join("/"))),a&&p.push(...u),p.map(f=>s.startsWith("/")&&f===""?"/":f)}function r5(s){s.sort((t,n)=>t.score!==n.score?n.score-t.score:u5(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const n5=/^:[\w-]+$/,i5=3,s5=2,a5=1,o5=10,l5=-2,kx=s=>s==="*";function c5(s,t){let n=s.split("/"),i=n.length;return n.some(kx)&&(i+=l5),t&&(i+=s5),n.filter(a=>!kx(a)).reduce((a,c)=>a+(n5.test(c)?i5:c===""?a5:o5),i)}function u5(s,t){return s.length===t.length&&s.slice(0,-1).every((i,a)=>i===t[a])?s[s.length-1]-t[t.length-1]:0}function d5(s,t,n){let{routesMeta:i}=s,a={},c="/",u=[];for(let p=0;p<i.length;++p){let f=i[p],m=p===i.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=Jf({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},g),v=f.route;if(!y)return null;Object.assign(a,y.params),u.push({params:a,pathname:Ns([c,y.pathname]),pathnameBase:g5(Ns([c,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(c=Ns([c,y.pathnameBase]))}return u}function Jf(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,i]=p5(s.path,s.caseSensitive,s.end),a=t.match(n);if(!a)return null;let c=a[0],u=c.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:i.reduce((m,g,y)=>{let{paramName:v,isOptional:b}=g;if(v==="*"){let w=p[y]||"";u=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const _=p[y];return b&&!_?m[v]=void 0:m[v]=(_||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:u,pattern:s}}function p5(s,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),i1(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let i=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,f)=>(i.push({paramName:p,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(i.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function f5(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return i1(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),s}}function bo(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=s.charAt(n);return i&&i!=="/"?null:s.slice(n)||"/"}function h5(s,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:a=""}=typeof s=="string"?To(s):s,c;return n?(n=c1(n),n.startsWith("/")?c=jx(n.substring(1),"/"):c=jx(n,t)):c=t,{pathname:c,search:x5(i),hash:v5(a)}}function jx(s,t){let n=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Af(s,t,n,i){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m5(s){return s.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function o1(s,t){let n=m5(s);return t?n.map((i,a)=>a===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function l1(s,t,n,i){i===void 0&&(i=!1);let a;typeof s=="string"?a=To(s):(a=Hl({},s),St(!a.pathname||!a.pathname.includes("?"),Af("?","pathname","search",a)),St(!a.pathname||!a.pathname.includes("#"),Af("#","pathname","hash",a)),St(!a.search||!a.search.includes("#"),Af("#","search","hash",a)));let c=s===""||a.pathname==="",u=c?"/":a.pathname,p;if(u==null)p=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;a.pathname=v.join("/")}p=y>=0?t[y]:"/"}let f=h5(a,p),m=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||g)&&(f.pathname+="/"),f}const c1=s=>s.replace(/\/\/+/g,"/"),Ns=s=>c1(s.join("/")),g5=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),x5=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,v5=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function y5(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const u1=["post","put","patch","delete"];new Set(u1);const b5=["get",...u1];new Set(b5);function Vl(){return Vl=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},Vl.apply(null,arguments)}const bd=O.createContext(null),d1=O.createContext(null),Ls=O.createContext(null),wd=O.createContext(null),Wi=O.createContext({outlet:null,matches:[],isDataRoute:!1}),p1=O.createContext(null);function w5(s,t){let{relative:n}=t===void 0?{}:t;lc()||St(!1);let{basename:i,navigator:a}=O.useContext(Ls),{hash:c,pathname:u,search:p}=_d(s,{relative:n}),f=u;return i!=="/"&&(f=u==="/"?i:Ns([i,u])),a.createHref({pathname:f,search:p,hash:c})}function lc(){return O.useContext(wd)!=null}function Po(){return lc()||St(!1),O.useContext(wd).location}function f1(s){O.useContext(Ls).static||O.useLayoutEffect(s)}function _5(){let{isDataRoute:s}=O.useContext(Wi);return s?D5():N5()}function N5(){lc()||St(!1);let s=O.useContext(bd),{basename:t,future:n,navigator:i}=O.useContext(Ls),{matches:a}=O.useContext(Wi),{pathname:c}=Po(),u=JSON.stringify(o1(a,n.v7_relativeSplatPath)),p=O.useRef(!1);return f1(()=>{p.current=!0}),O.useCallback(function(m,g){if(g===void 0&&(g={}),!p.current)return;if(typeof m=="number"){i.go(m);return}let y=l1(m,JSON.parse(u),c,g.relative==="path");s==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Ns([t,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[t,i,u,c,s])}const k5=O.createContext(null);function j5(s){let t=O.useContext(Wi).outlet;return t&&O.createElement(k5.Provider,{value:s},t)}function E5(){let{matches:s}=O.useContext(Wi),t=s[s.length-1];return t?t.params:{}}function _d(s,t){let{relative:n}=t===void 0?{}:t,{future:i}=O.useContext(Ls),{matches:a}=O.useContext(Wi),{pathname:c}=Po(),u=JSON.stringify(o1(a,i.v7_relativeSplatPath));return O.useMemo(()=>l1(s,JSON.parse(u),c,n==="path"),[s,u,c,n])}function S5(s,t){return A5(s,t)}function A5(s,t,n,i){lc()||St(!1);let{navigator:a}=O.useContext(Ls),{matches:c}=O.useContext(Wi),u=c[c.length-1],p=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let m=Po(),g;if(t){var y;let k=typeof t=="string"?To(t):t;f==="/"||(y=k.pathname)!=null&&y.startsWith(f)||St(!1),g=k}else g=m;let v=g.pathname||"/",b=v;if(f!=="/"){let k=f.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let _=e5(s,{pathname:b}),w=L5(_&&_.map(k=>Object.assign({},k,{params:Object.assign({},p,k.params),pathname:Ns([f,a.encodeLocation?a.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?f:Ns([f,a.encodeLocation?a.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),c,n,i);return t&&w?O.createElement(wd.Provider,{value:{location:Vl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:gs.Pop}},w):w}function C5(){let s=z5(),t=y5(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:a},n):null,null)}const T5=O.createElement(C5,null);class P5 extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(Wi.Provider,{value:this.props.routeContext},O.createElement(p1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R5(s){let{routeContext:t,match:n,children:i}=s,a=O.useContext(bd);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Wi.Provider,{value:t},i)}function L5(s,t,n,i){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),s==null){var c;if(!n)return null;if(n.errors)s=n.matches;else if((c=i)!=null&&c.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let u=s,p=(a=n)==null?void 0:a.errors;if(p!=null){let g=u.findIndex(y=>y.route.id&&p?.[y.route.id]!==void 0);g>=0||St(!1),u=u.slice(0,Math.min(u.length,g+1))}let f=!1,m=-1;if(n&&i&&i.v7_partialHydration)for(let g=0;g<u.length;g++){let y=u[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:v,errors:b}=n,_=y.route.loader&&v[y.route.id]===void 0&&(!b||b[y.route.id]===void 0);if(y.route.lazy||_){f=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,y,v)=>{let b,_=!1,w=null,k=null;n&&(b=p&&y.route.id?p[y.route.id]:void 0,w=y.route.errorElement||T5,f&&(m<0&&v===0?(F5("route-fallback"),_=!0,k=null):m===v&&(_=!0,k=y.route.hydrateFallbackElement||null)));let C=t.concat(u.slice(0,v+1)),A=()=>{let E;return b?E=w:_?E=k:y.route.Component?E=O.createElement(y.route.Component,null):y.route.element?E=y.route.element:E=g,O.createElement(R5,{match:y,routeContext:{outlet:g,matches:C,isDataRoute:n!=null},children:E})};return n&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?O.createElement(P5,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:A(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):A()},null)}var h1=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(h1||{}),m1=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(m1||{});function O5(s){let t=O.useContext(bd);return t||St(!1),t}function I5(s){let t=O.useContext(d1);return t||St(!1),t}function M5(s){let t=O.useContext(Wi);return t||St(!1),t}function g1(s){let t=M5(),n=t.matches[t.matches.length-1];return n.route.id||St(!1),n.route.id}function z5(){var s;let t=O.useContext(p1),n=I5(),i=g1();return t!==void 0?t:(s=n.errors)==null?void 0:s[i]}function D5(){let{router:s}=O5(h1.UseNavigateStable),t=g1(m1.UseNavigateStable),n=O.useRef(!1);return f1(()=>{n.current=!0}),O.useCallback(function(a,c){c===void 0&&(c={}),n.current&&(typeof a=="number"?s.navigate(a):s.navigate(a,Vl({fromRouteId:t},c)))},[s,t])}const Ex={};function F5(s,t,n){Ex[s]||(Ex[s]=!0)}function B5(s,t){s?.v7_startTransition,s?.v7_relativeSplatPath}function Sx(s){return j5(s.context)}function Nn(s){St(!1)}function U5(s){let{basename:t="/",children:n=null,location:i,navigationType:a=gs.Pop,navigator:c,static:u=!1,future:p}=s;lc()&&St(!1);let f=t.replace(/^\/*/,"/"),m=O.useMemo(()=>({basename:f,navigator:c,static:u,future:Vl({v7_relativeSplatPath:!1},p)}),[f,p,c,u]);typeof i=="string"&&(i=To(i));let{pathname:g="/",search:y="",hash:v="",state:b=null,key:_="default"}=i,w=O.useMemo(()=>{let k=bo(g,f);return k==null?null:{location:{pathname:k,search:y,hash:v,state:b,key:_},navigationType:a}},[f,g,y,v,b,_,a]);return w==null?null:O.createElement(Ls.Provider,{value:m},O.createElement(wd.Provider,{children:n,value:w}))}function W5(s){let{children:t,location:n}=s;return S5(Zf(t),n)}new Promise(()=>{});function Zf(s,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(s,(i,a)=>{if(!O.isValidElement(i))return;let c=[...t,a];if(i.type===O.Fragment){n.push.apply(n,Zf(i.props.children,c));return}i.type!==Nn&&St(!1),!i.props.index||!i.props.children||St(!1);let u={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Zf(i.props.children,c)),n.push(u)}),n}function rd(){return rd=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},rd.apply(null,arguments)}function x1(s,t){if(s==null)return{};var n={};for(var i in s)if({}.hasOwnProperty.call(s,i)){if(t.indexOf(i)!==-1)continue;n[i]=s[i]}return n}function H5(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function V5(s,t){return s.button===0&&(!t||t==="_self")&&!H5(s)}const Y5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],G5=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],q5="6";try{window.__reactRouterVersion=q5}catch{}const X5=O.createContext({isTransitioning:!1}),Q5="startTransition",Ax=r1[Q5];function K5(s){let{basename:t,children:n,future:i,window:a}=s,c=O.useRef();c.current==null&&(c.current=J2({window:a,v5Compat:!0}));let u=c.current,[p,f]=O.useState({action:u.action,location:u.location}),{v7_startTransition:m}=i||{},g=O.useCallback(y=>{m&&Ax?Ax(()=>f(y)):f(y)},[f,m]);return O.useLayoutEffect(()=>u.listen(g),[u,g]),O.useEffect(()=>B5(i),[i]),O.createElement(U5,{basename:t,children:n,location:p.location,navigationType:p.action,navigator:u,future:i})}const J5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ln=O.forwardRef(function(t,n){let{onClick:i,relative:a,reloadDocument:c,replace:u,state:p,target:f,to:m,preventScrollReset:g,viewTransition:y}=t,v=x1(t,Y5),{basename:b}=O.useContext(Ls),_,w=!1;if(typeof m=="string"&&Z5.test(m)&&(_=m,J5))try{let E=new URL(window.location.href),j=m.startsWith("//")?new URL(E.protocol+m):new URL(m),P=bo(j.pathname,b);j.origin===E.origin&&P!=null?m=P+j.search+j.hash:w=!0}catch{}let k=w5(m,{relative:a}),C=e_(m,{replace:u,state:p,target:f,preventScrollReset:g,relative:a,viewTransition:y});function A(E){i&&i(E),E.defaultPrevented||C(E)}return O.createElement("a",rd({},v,{href:_||k,onClick:w||c?i:A,ref:n,target:f}))}),Cx=O.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:a=!1,className:c="",end:u=!1,style:p,to:f,viewTransition:m,children:g}=t,y=x1(t,G5),v=_d(f,{relative:y.relative}),b=Po(),_=O.useContext(d1),{navigator:w,basename:k}=O.useContext(Ls),C=_!=null&&t_(v)&&m===!0,A=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,E=b.pathname,j=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;a||(E=E.toLowerCase(),j=j?j.toLowerCase():null,A=A.toLowerCase()),j&&k&&(j=bo(j,k)||j);const P=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let M=E===A||!u&&E.startsWith(A)&&E.charAt(P)==="/",L=j!=null&&(j===A||!u&&j.startsWith(A)&&j.charAt(A.length)==="/"),B={isActive:M,isPending:L,isTransitioning:C},W=M?i:void 0,F;typeof c=="function"?F=c(B):F=[c,M?"active":null,L?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let Q=typeof p=="function"?p(B):p;return O.createElement(ln,rd({},y,{"aria-current":W,className:F,ref:n,style:Q,to:f,viewTransition:m}),typeof g=="function"?g(B):g)});var $f;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})($f||($f={}));var Tx;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Tx||(Tx={}));function $5(s){let t=O.useContext(bd);return t||St(!1),t}function e_(s,t){let{target:n,replace:i,state:a,preventScrollReset:c,relative:u,viewTransition:p}=t===void 0?{}:t,f=_5(),m=Po(),g=_d(s,{relative:u});return O.useCallback(y=>{if(V5(y,n)){y.preventDefault();let v=i!==void 0?i:td(m)===td(g);f(s,{replace:v,state:a,preventScrollReset:c,relative:u,viewTransition:p})}},[m,f,g,i,a,n,s,c,u,p])}function t_(s,t){t===void 0&&(t={});let n=O.useContext(X5);n==null&&St(!1);let{basename:i}=$5($f.useViewTransitionState),a=_d(s,{relative:t.relative});if(!n.isTransitioning)return!1;let c=bo(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=bo(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Jf(a.pathname,u)!=null||Jf(a.pathname,c)!=null}var Px="1.3.26";function v1(s,t,n){return Math.max(s,Math.min(t,n))}function r_(s,t,n){return(1-n)*s+n*t}function n_(s,t,n,i){return r_(s,t,1-Math.exp(-n*i))}function i_(s,t){return(s%t+t)%t}var s_=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;const n=v1(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=n_(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:n,duration:i,easing:a,onStart:c,onUpdate:u}){this.from=this.value=s,this.to=t,this.lerp=n,this.duration=i,this.easing=a,this.currentTime=0,this.isRunning=!0,c?.(),this.onUpdate=u}};function a_(s,t){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,s.apply(this,i)},t)}}var o_=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(s,t,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=s,this.content=t,n&&(this.debouncedResize=a_(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},y1=class{events={};emit(s,...t){const n=this.events[s]||[];for(let i=0,a=n.length;i<a;i++)n[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(n=>t!==n)}}off(s,t){this.events[s]=this.events[s]?.filter(n=>t!==n)}destroy(){this.events={}}};const l_=100/6,us={passive:!1};function Rx(s,t){return s===1?l_:s===2?t:1}var c_=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new y1;constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,us),this.element.addEventListener("touchstart",this.onTouchStart,us),this.element.addEventListener("touchmove",this.onTouchMove,us),this.element.addEventListener("touchend",this.onTouchEnd,us)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,us),this.element.removeEventListener("touchstart",this.onTouchStart,us),this.element.removeEventListener("touchmove",this.onTouchMove,us),this.element.removeEventListener("touchend",this.onTouchEnd,us)}onTouchStart=s=>{const{clientX:t,clientY:n}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{const{clientX:t,clientY:n}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,a=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:a},this.emitter.emit("scroll",{deltaX:i,deltaY:a,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:t,deltaY:n,deltaMode:i}=s;const a=Rx(i,this.window.width),c=Rx(i,this.window.height);t*=a,n*=c,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Lx=s=>Math.min(1,1.001-2**(-10*s));var u_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new s_;emitter=new y1;dimensions;virtualScroll;constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:n=s,smoothWheel:i=!0,syncTouch:a=!1,syncTouchLerp:c=.075,touchInertiaExponent:u=1.7,duration:p,easing:f,lerp:m=.1,infinite:g=!1,orientation:y="vertical",gestureOrientation:v=y==="horizontal"?"both":"vertical",touchMultiplier:b=1,wheelMultiplier:_=1,autoResize:w=!0,prevent:k,virtualScroll:C,overscroll:A=!0,autoRaf:E=!1,anchors:j=!1,autoToggle:P=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:L=!1,naiveDimensions:B=L,stopInertiaOnNavigate:W=!1,respectReducedMotion:F=!0}={}){window.lenisVersion=Px,window.lenis||(window.lenis={}),window.lenis.version=Px,y==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof p=="number"&&typeof f!="function"?f=Lx:typeof f=="function"&&typeof p!="number"&&(p=1),this.options={wrapper:s,content:t,eventsTarget:n,smoothWheel:i,syncTouch:a,syncTouchLerp:c,touchInertiaExponent:u,duration:p,easing:f,lerp:m,infinite:g,gestureOrientation:v,orientation:y,touchMultiplier:b,wheelMultiplier:_,autoResize:w,prevent:k,virtualScroll:C,overscroll:A,autoRaf:E,anchors:j,autoToggle:P,allowNestedScroll:M,naiveDimensions:B,stopInertiaOnNavigate:W,respectReducedMotion:F},this.dimensions=new o_(s,t,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new c_(n,{touchMultiplier:b,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{const t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=t.find(a=>n.host===a.host&&n.pathname===a.pathname&&a.hash);if(i){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(i.hash);this.scrollTo(c,a);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}};onPointerDown=s=>{s.button===1&&this.reset()};isTouchOnSelectionHandle(s){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const n=s.targetTouches[0]??s.changedTouches[0];if(!n)return!1;const i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;const a=i[0],c=i[i.length-1],u=40,p=Math.hypot(n.clientX-a.left,n.clientY-a.top)<=u,f=Math.hypot(n.clientX-c.right,n.clientY-c.bottom)<=u;return p||f}onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:t,deltaY:n,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const a=i.type.includes("touch"),c=i.type.includes("wheel");if(a&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const u=t===0&&n===0;if(this.options.syncTouch&&a&&i.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const p=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(u||p)return;let f=i.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const m=this.options.prevent,g=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";if(f.find(_=>_ instanceof HTMLElement&&(typeof m=="function"&&m?.(_)||_.hasAttribute?.("data-lenis-prevent")||g==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||g==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||a&&_.hasAttribute?.("data-lenis-prevent-touch")||c&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let y=n;this.options.gestureOrientation==="both"?y=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(y=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const v=a&&this.options.syncTouch,b=a&&i.type==="touchend";b&&(y=Math.sign(y)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+y,{programmatic:!1,...v?{lerp:b?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{const t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:t=0,immediate:n=!1,lock:i=!1,programmatic:a=!0,lerp:c=a?this.options.lerp:void 0,duration:u=a?this.options.duration:void 0,easing:p=a?this.options.easing:void 0,onStart:f,onComplete:m,force:g=!1,userData:y}={}){if(this.prefersReducedMotion&&(a?n=!0:(c=1,u=void 0,p=void 0)),(this.isStopped||this.isLocked)&&!g)return;let v=s,b=t;if(typeof v=="string"&&["top","left","start","#"].includes(v))v=0;else if(typeof v=="string"&&["bottom","right","end"].includes(v))v=this.limit;else{let _=null;if(typeof v=="string"?(_=v.startsWith("#")?document.getElementById(v.slice(1)):document.querySelector(v),_||(v==="#top"?v=0:console.warn("Lenis: Target not found",v))):v instanceof HTMLElement&&v?.nodeType&&(_=v),_){if(this.options.wrapper!==window){const j=this.rootElement.getBoundingClientRect();b-=this.isHorizontal?j.left:j.top}const w=_.getBoundingClientRect(),k=getComputedStyle(_),C=this.isHorizontal?Number.parseFloat(k.scrollMarginLeft):Number.parseFloat(k.scrollMarginTop),A=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(A.scrollPaddingLeft):Number.parseFloat(A.scrollPaddingTop);v=(this.isHorizontal?w.left:w.top)+this.animatedScroll-(Number.isNaN(C)?0:C)-(Number.isNaN(E)?0:E)}}if(typeof v=="number"){if(v+=b,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const _=v-this.animatedScroll;_>this.limit/2?v-=this.limit:_<-this.limit/2&&(v+=this.limit)}}else v=v1(0,v,this.limit);if(v===this.targetScroll){f?.(this),m?.(this);return}if(this.userData=y??{},n){this.animatedScroll=this.targetScroll=v,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=v),typeof u=="number"&&typeof p!="function"?p=Lx:typeof p=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,v,{duration:u,easing:p,lerp:c,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",f?.(this)},onUpdate:(_,w)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),a&&(this.targetScroll=_),w||this.emit(),w&&(this.reset(),this.emit(),m?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:n}){const i=Date.now();s._lenis||(s._lenis={});const a=s._lenis;let c,u,p,f,m,g,y,v,b,_;if(i-(a.time??0)>2e3){a.time=Date.now();const M=window.getComputedStyle(s);if(a.computedStyle=M,c=["auto","overlay","scroll"].includes(M.overflowX),u=["auto","overlay","scroll"].includes(M.overflowY),m=["auto"].includes(M.overscrollBehaviorX),g=["auto"].includes(M.overscrollBehaviorY),a.hasOverflowX=c,a.hasOverflowY=u,!(c||u))return!1;y=s.scrollWidth,v=s.scrollHeight,b=s.clientWidth,_=s.clientHeight,p=y>b,f=v>_,a.isScrollableX=p,a.isScrollableY=f,a.scrollWidth=y,a.scrollHeight=v,a.clientWidth=b,a.clientHeight=_,a.hasOverscrollBehaviorX=m,a.hasOverscrollBehaviorY=g}else p=a.isScrollableX,f=a.isScrollableY,c=a.hasOverflowX,u=a.hasOverflowY,y=a.scrollWidth,v=a.scrollHeight,b=a.clientWidth,_=a.clientHeight,m=a.hasOverscrollBehaviorX,g=a.hasOverscrollBehaviorY;if(!(c&&p||u&&f))return!1;const w=Math.abs(t)>=Math.abs(n)?"horizontal":"vertical";let k,C,A,E,j,P;if(w==="horizontal")k=Math.round(s.scrollLeft),C=y-b,A=t,E=c,j=p,P=m;else if(w==="vertical")k=Math.round(s.scrollTop),C=v-_,A=n,E=u,j=f,P=g;else return!1;return!P&&(k>=C||k<=0)?!0:(A>0?k<C:k>0)&&E&&j}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?i_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};const d_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b1=(...s)=>s.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");var p_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const f_=O.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:c,iconNode:u,...p},f)=>O.createElement("svg",{ref:f,...p_,width:t,height:t,stroke:s,strokeWidth:i?Number(n)*24/Number(t):n,className:b1("lucide",a),...p},[...u.map(([m,g])=>O.createElement(m,g)),...Array.isArray(c)?c:[c]]));const _e=(s,t)=>{const n=O.forwardRef(({className:i,...a},c)=>O.createElement(f_,{ref:c,iconNode:t,className:b1(`lucide-${d_(s)}`,i),...a}));return n.displayName=`${s}`,n};const h_=_e("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);const m_=_e("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const An=_e("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const no=_e("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const g_=_e("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const Bu=_e("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Ox=_e("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);const x_=_e("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Uh=_e("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);const Nd=_e("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const v_=_e("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const y_=_e("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);const b_=_e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const kd=_e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const w_=_e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const __=_e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const N_=_e("CircleArrowOutUpRight",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);const k_=_e("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const w1=_e("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);const Uu=_e("CircleGauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);const j_=_e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Wh=_e("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);const E_=_e("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);const Hh=_e("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const S_=_e("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);const A_=_e("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);const Vh=_e("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);const C_=_e("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Ln=_e("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);const T_=_e("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const P_=_e("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const R_=_e("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const _1=_e("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);const jd=_e("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);const Yh=_e("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);const L_=_e("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const O_=_e("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const cc=_e("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);const N1=_e("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);const k1=_e("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);const j1=_e("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);const I_=_e("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);const M_=_e("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);const ca=_e("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const z_=_e("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);const D_=_e("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);const F_=_e("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const B_=_e("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const eh=_e("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);const U_=_e("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Ix=_e("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const W_=_e("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const H_=_e("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);const V_=_e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function E1(s){var t,n,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(t=0;t<a;t++)s[t]&&(n=E1(s[t]))&&(i&&(i+=" "),i+=n)}else for(n in s)s[n]&&(i&&(i+=" "),i+=n);return i}function S1(){for(var s,t,n=0,i="",a=arguments.length;n<a;n++)(s=arguments[n])&&(t=E1(s))&&(i&&(i+=" "),i+=t);return i}const Gh="-",Y_=s=>{const t=q_(s),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=s;return{getClassGroupId:u=>{const p=u.split(Gh);return p[0]===""&&p.length!==1&&p.shift(),A1(p,t)||G_(u)},getConflictingClassGroupIds:(u,p)=>{const f=n[u]||[];return p&&i[u]?[...f,...i[u]]:f}}},A1=(s,t)=>{if(s.length===0)return t.classGroupId;const n=s[0],i=t.nextPart.get(n),a=i?A1(s.slice(1),i):void 0;if(a)return a;if(t.validators.length===0)return;const c=s.join(Gh);return t.validators.find(({validator:u})=>u(c))?.classGroupId},Mx=/^\[(.+)\]$/,G_=s=>{if(Mx.test(s)){const t=Mx.exec(s)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},q_=s=>{const{theme:t,prefix:n}=s,i={nextPart:new Map,validators:[]};return Q_(Object.entries(s.classGroups),n).forEach(([c,u])=>{th(u,i,c,t)}),i},th=(s,t,n,i)=>{s.forEach(a=>{if(typeof a=="string"){const c=a===""?t:zx(t,a);c.classGroupId=n;return}if(typeof a=="function"){if(X_(a)){th(a(i),t,n,i);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([c,u])=>{th(u,zx(t,c),n,i)})})},zx=(s,t)=>{let n=s;return t.split(Gh).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},X_=s=>s.isThemeGetter,Q_=(s,t)=>t?s.map(([n,i])=>{const a=i.map(c=>typeof c=="string"?t+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([u,p])=>[t+u,p])):c);return[n,a]}):s,K_=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,i=new Map;const a=(c,u)=>{n.set(c,u),t++,t>s&&(t=0,i=n,n=new Map)};return{get(c){let u=n.get(c);if(u!==void 0)return u;if((u=i.get(c))!==void 0)return a(c,u),u},set(c,u){n.has(c)?n.set(c,u):a(c,u)}}},C1="!",J_=s=>{const{separator:t,experimentalParseClassName:n}=s,i=t.length===1,a=t[0],c=t.length,u=p=>{const f=[];let m=0,g=0,y;for(let k=0;k<p.length;k++){let C=p[k];if(m===0){if(C===a&&(i||p.slice(k,k+c)===t)){f.push(p.slice(g,k)),g=k+c;continue}if(C==="/"){y=k;continue}}C==="["?m++:C==="]"&&m--}const v=f.length===0?p:p.substring(g),b=v.startsWith(C1),_=b?v.substring(1):v,w=y&&y>g?y-g:void 0;return{modifiers:f,hasImportantModifier:b,baseClassName:_,maybePostfixModifierPosition:w}};return n?p=>n({className:p,parseClassName:u}):u},Z_=s=>{if(s.length<=1)return s;const t=[];let n=[];return s.forEach(i=>{i[0]==="["?(t.push(...n.sort(),i),n=[]):n.push(i)}),t.push(...n.sort()),t},$_=s=>({cache:K_(s.cacheSize),parseClassName:J_(s),...Y_(s)}),eN=/\s+/,tN=(s,t)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:a}=t,c=[],u=s.trim().split(eN);let p="";for(let f=u.length-1;f>=0;f-=1){const m=u[f],{modifiers:g,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:b}=n(m);let _=!!b,w=i(_?v.substring(0,b):v);if(!w){if(!_){p=m+(p.length>0?" "+p:p);continue}if(w=i(v),!w){p=m+(p.length>0?" "+p:p);continue}_=!1}const k=Z_(g).join(":"),C=y?k+C1:k,A=C+w;if(c.includes(A))continue;c.push(A);const E=a(w,_);for(let j=0;j<E.length;++j){const P=E[j];c.push(C+P)}p=m+(p.length>0?" "+p:p)}return p};function rN(){let s=0,t,n,i="";for(;s<arguments.length;)(t=arguments[s++])&&(n=T1(t))&&(i&&(i+=" "),i+=n);return i}const T1=s=>{if(typeof s=="string")return s;let t,n="";for(let i=0;i<s.length;i++)s[i]&&(t=T1(s[i]))&&(n&&(n+=" "),n+=t);return n};function nN(s,...t){let n,i,a,c=u;function u(f){const m=t.reduce((g,y)=>y(g),s());return n=$_(m),i=n.cache.get,a=n.cache.set,c=p,p(f)}function p(f){const m=i(f);if(m)return m;const g=tN(f,n);return a(f,g),g}return function(){return c(rN.apply(null,arguments))}}const ct=s=>{const t=n=>n[s]||[];return t.isThemeGetter=!0,t},P1=/^\[(?:([a-z-]+):)?(.+)\]$/i,iN=/^\d+\/\d+$/,sN=new Set(["px","full","screen"]),aN=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oN=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lN=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,cN=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,uN=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Si=s=>co(s)||sN.has(s)||iN.test(s),ds=s=>Ro(s,"length",vN),co=s=>!!s&&!Number.isNaN(Number(s)),Cf=s=>Ro(s,"number",co),gl=s=>!!s&&Number.isInteger(Number(s)),dN=s=>s.endsWith("%")&&co(s.slice(0,-1)),Le=s=>P1.test(s),ps=s=>aN.test(s),pN=new Set(["length","size","percentage"]),fN=s=>Ro(s,pN,R1),hN=s=>Ro(s,"position",R1),mN=new Set(["image","url"]),gN=s=>Ro(s,mN,bN),xN=s=>Ro(s,"",yN),xl=()=>!0,Ro=(s,t,n)=>{const i=P1.exec(s);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):n(i[2]):!1},vN=s=>oN.test(s)&&!lN.test(s),R1=()=>!1,yN=s=>cN.test(s),bN=s=>uN.test(s),wN=()=>{const s=ct("colors"),t=ct("spacing"),n=ct("blur"),i=ct("brightness"),a=ct("borderColor"),c=ct("borderRadius"),u=ct("borderSpacing"),p=ct("borderWidth"),f=ct("contrast"),m=ct("grayscale"),g=ct("hueRotate"),y=ct("invert"),v=ct("gap"),b=ct("gradientColorStops"),_=ct("gradientColorStopPositions"),w=ct("inset"),k=ct("margin"),C=ct("opacity"),A=ct("padding"),E=ct("saturate"),j=ct("scale"),P=ct("sepia"),M=ct("skew"),L=ct("space"),B=ct("translate"),W=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],Q=()=>["auto",Le,t],D=()=>[Le,t],J=()=>["",Si,ds],Z=()=>["auto",co,Le],se=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ce=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",Le],S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[co,Le];return{cacheSize:500,separator:":",theme:{colors:[xl],spacing:[Si,ds],blur:["none","",ps,Le],brightness:T(),borderColor:[s],borderRadius:["none","","full",ps,Le],borderSpacing:D(),borderWidth:J(),contrast:T(),grayscale:X(),hueRotate:T(),invert:X(),gap:D(),gradientColorStops:[s],gradientColorStopPositions:[dN,ds],inset:Q(),margin:Q(),opacity:T(),padding:D(),saturate:T(),scale:T(),sepia:X(),skew:T(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",Le]}],container:["container"],columns:[{columns:[ps]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...se(),Le]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",gl,Le]}],basis:[{basis:Q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Le]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",gl,Le]}],"grid-cols":[{"grid-cols":[xl]}],"col-start-end":[{col:["auto",{span:["full",gl,Le]},Le]}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":[xl]}],"row-start-end":[{row:["auto",{span:[gl,Le]},Le]}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Le]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Le]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Le,t]}],"min-w":[{"min-w":[Le,t,"min","max","fit"]}],"max-w":[{"max-w":[Le,t,"none","full","min","max","fit","prose",{screen:[ps]},ps]}],h:[{h:[Le,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Le,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Le,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Le,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ps,ds]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Cf]}],"font-family":[{font:[xl]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Le]}],"line-clamp":[{"line-clamp":["none",co,Cf]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Si,Le]}],"list-image":[{"list-image":["none",Le]}],"list-style-type":[{list:["none","disc","decimal",Le]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[s]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[s]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Si,ds]}],"underline-offset":[{"underline-offset":["auto",Si,Le]}],"text-decoration-color":[{decoration:[s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...se(),hN]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fN]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},gN]}],"bg-color":[{bg:[s]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[p]}],"border-w-x":[{"border-x":[p]}],"border-w-y":[{"border-y":[p]}],"border-w-s":[{"border-s":[p]}],"border-w-e":[{"border-e":[p]}],"border-w-t":[{"border-t":[p]}],"border-w-r":[{"border-r":[p]}],"border-w-b":[{"border-b":[p]}],"border-w-l":[{"border-l":[p]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...ce(),"hidden"]}],"divide-x":[{"divide-x":[p]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[p]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:ce()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...ce()]}],"outline-offset":[{"outline-offset":[Si,Le]}],"outline-w":[{outline:[Si,ds]}],"outline-color":[{outline:[s]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[s]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[Si,ds]}],"ring-offset-color":[{"ring-offset":[s]}],shadow:[{shadow:["","inner","none",ps,xN]}],"shadow-color":[{shadow:[xl]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",ps,Le]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[y]}],saturate:[{saturate:[E]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Le]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",Le]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",Le]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[gl,Le]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Le]}],accent:[{accent:["auto",s]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Le]}],"caret-color":[{caret:[s]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Le]}],fill:[{fill:[s,"none"]}],"stroke-w":[{stroke:[Si,ds,Cf]}],stroke:[{stroke:[s,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},_N=nN(wN);function kt(...s){return _N(S1(s))}const jt=({children:s,to:t,href:n,onClick:i,className:a,type:c="button"})=>{const[u,p]=O.useState({x:0,y:0}),f=b=>{const _=b.currentTarget.getBoundingClientRect(),w=((b.clientX-_.left)/_.width-.5)*14,k=((b.clientY-_.top)/_.height-.5)*14;p({x:w,y:k})},m=()=>{p({x:0,y:0})},y=kt("magnetic-button inline-flex items-center justify-center gap-2.5 rounded-[100px] border-0 bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] text-[#1e1e1e] shadow-none transition-all duration-300 ease-out hover:opacity-100",a),v={transform:`translate(${u.x}px, ${u.y}px)`};return t?o.jsx(ln,{to:t,className:y,onClick:i,onPointerMove:f,onPointerLeave:m,style:v,children:s}):n?o.jsx("a",{href:n,className:y,onClick:i,onPointerMove:f,onPointerLeave:m,style:v,children:s}):o.jsx("button",{type:c,className:y,onClick:i,onPointerMove:f,onPointerLeave:m,style:v,children:s})},rh="/boltfaredeal/assets/logo-CZH9TYL_.png",Dx=[{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Portfolio",to:"/portfolio"},{label:"Contact us",to:"/contact"}],NN=({theme:s="dark",onToggleTheme:t})=>{const[n,i]=O.useState(!1),a=s==="dark";return o.jsxs(o.Fragment,{children:[o.jsxs("header",{className:"absolute left-1/2 top-[41px] z-30 hidden w-[min(90%,841px)] -translate-x-1/2 items-center rounded-[100px] bg-white py-2.5 pl-[26px] pr-2.5 text-[#1e1e1e] md:flex dark:border-transparent dark:shadow-none border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",children:[o.jsx(ln,{to:"/","aria-label":"Fairdeal Print Pack home",className:"flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.02]",children:o.jsx("img",{src:rh,alt:"Fairdeal Print Pack",className:"h-10 w-auto object-contain"})}),o.jsx("nav",{className:"mx-auto flex items-center gap-[25px]",children:Dx.map(c=>o.jsx(Cx,{to:c.to,className:({isActive:u})=>kt("nav-item inline-flex items-center justify-center py-2.5 font-normal text-base leading-normal transition-all duration-300 hover:text-[#92d1bc]",u&&"active text-[#92d1bc]"),children:c.label},c.to))}),o.jsx("div",{className:"flex items-center gap-3",children:o.jsx(jt,{to:"/contact",className:"w-[136px] p-2.5 text-sm font-normal",children:"Contact us"})})]}),o.jsxs("header",{className:kt("fixed left-0 right-0 top-0 z-[60] flex items-center justify-between gap-2 px-4 py-3 shadow-sm backdrop-blur-md md:hidden",a?"border-b border-white/10 bg-[#0d1117]/70 text-white":"border-b border-[#1e1e1e]/10 bg-white/75 text-[#1e1e1e]"),children:[o.jsx(ln,{to:"/",className:"flex min-w-0 shrink-0 items-center gap-2",onClick:()=>i(!1),children:o.jsx("img",{src:rh,alt:"Fairdeal Print Pack",className:"h-8 w-auto object-contain"})}),o.jsx("div",{className:"ml-auto flex shrink-0 items-center gap-2",children:o.jsx("button",{type:"button",onClick:()=>i(c=>!c),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,className:kt("relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 hover:scale-105",a?"border border-white/10 bg-white/10":"border border-[#1e1e1e]/10 bg-[#f4f1eb]"),children:o.jsxs("span",{className:"relative inline-flex h-4 w-5 items-center justify-center",children:[o.jsx("span",{className:kt("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"translate-y-0 rotate-45":"-translate-y-1.5"),style:{backgroundColor:a?"#ffffff":"#1e1e1e"}}),o.jsx("span",{className:kt("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"opacity-0":"opacity-100"),style:{backgroundColor:a?"#ffffff":"#1e1e1e"}}),o.jsx("span",{className:kt("absolute block h-[2px] w-5 rounded-full transition-all duration-300 ease-out",n?"translate-y-0 -rotate-45":"translate-y-1.5"),style:{backgroundColor:a?"#ffffff":"#1e1e1e"}})]})})})]}),n&&o.jsx("div",{className:kt("fixed inset-0 top-[52px] z-[55] md:hidden",a?"bg-[#0d1117]/80 backdrop-blur-md":"bg-white/80 backdrop-blur-md"),children:o.jsxs("nav",{className:"flex flex-col gap-2 px-6 py-8",children:[Dx.map(c=>o.jsx(Cx,{to:c.to,onClick:()=>i(!1),className:({isActive:u})=>kt("nav-item border-b py-4 text-lg font-normal transition-all duration-300 hover:text-[#92d1bc]",a?"border-white/10 text-white":"border-[#1e1e1e]/10 text-[#1e1e1e]",u&&"active text-[#92d1bc]"),children:c.label},c.to)),o.jsx("div",{className:"mt-6",children:o.jsxs(jt,{to:"/contact",className:"w-full p-3 text-base font-semibold",onClick:()=>i(!1),children:["Contact us",o.jsx(kd,{className:"h-4 w-4 -rotate-90"})]})})]})})]})};var kN=Object.defineProperty,qh=(s,t)=>kN(s,"name",{value:t,configurable:!0});function nh(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}qh(nh,"setRef");function L1(...s){return t=>{let n=!1;const i=s.map(a=>{const c=nh(a,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let a=0;a<i.length;a++){const c=i[a];typeof c=="function"?c():nh(s[a],null)}}}}qh(L1,"composeRefs");function O1(...s){return O.useCallback(L1(...s),s)}qh(O1,"useComposedRefs");var jN=Object.defineProperty,Kn=(s,t)=>jN(s,"name",{value:t,configurable:!0});function I1(s){const t=O.forwardRef((n,i)=>{let{children:a,...c}=n,u=null,p=!1;const f=[];ih(a)&&typeof Nu=="function"&&(a=Nu(a._payload)),O.Children.forEach(a,v=>{if(F1(v)){p=!0;const b=v;let _="child"in b.props?b.props.child:b.props.children;ih(_)&&typeof Nu=="function"&&(_=Nu(_._payload)),u=AN(b,_),f.push(u?.props?.children)}else f.push(v)}),u?u=O.cloneElement(u,void 0,f):!p&&O.Children.count(a)===1&&O.isValidElement(a)&&(u=a);const m=u?D1(u):void 0,g=O1(i,m);if(!u){if(a||a===0)throw new Error(p?PN(s):TN(s));return a}const y=z1(c,u.props??{});return u.type!==O.Fragment&&(y.ref=i?g:m),O.cloneElement(u,y)});return t.displayName=`${s}.Slot`,t}Kn(I1,"createSlot");var EN=I1("Slot"),M1=Symbol.for("radix.slottable");function SN(s){const t=Kn(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${s}.Slottable`,t.__radixId=M1,t}Kn(SN,"createSlottable");var AN=Kn((s,t)=>{if("child"in s.props){const n=s.props.child;return O.isValidElement(n)?O.cloneElement(n,void 0,s.props.children(n.props.children)):null}return O.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function z1(s,t){const n={...t};for(const i in t){const a=s[i],c=t[i];/^on[A-Z]/.test(i)?a&&c?n[i]=(...p)=>{const f=c(...p);return a(...p),f}:a&&(n[i]=a):i==="style"?n[i]={...a,...c}:i==="className"&&(n[i]=[a,c].filter(Boolean).join(" "))}return{...s,...n}}Kn(z1,"mergeProps");function D1(s){let t=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?s.ref:(t=Object.getOwnPropertyDescriptor(s,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?s.props.ref:s.props.ref||s.ref)}Kn(D1,"getElementRef");function F1(s){return O.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===M1}Kn(F1,"isSlottable");var CN=Symbol.for("react.lazy");function ih(s){return s!=null&&typeof s=="object"&&"$$typeof"in s&&s.$$typeof===CN&&"_payload"in s&&B1(s._payload)}Kn(ih,"isLazyComponent");function B1(s){return typeof s=="object"&&s!==null&&"then"in s}Kn(B1,"isPromiseLike");var TN=Kn(s=>`${s} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),PN=Kn(s=>`${s} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Nu=r1[" use ".trim().toString()];const Fx=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,Bx=S1,RN=(s,t)=>n=>{var i;if(t?.variants==null)return Bx(s,n?.class,n?.className);const{variants:a,defaultVariants:c}=t,u=Object.keys(a).map(m=>{const g=n?.[m],y=c?.[m];if(g===null)return null;const v=Fx(g)||Fx(y);return a[m][v]}),p=n&&Object.entries(n).reduce((m,g)=>{let[y,v]=g;return v===void 0||(m[y]=v),m},{}),f=t==null||(i=t.compoundVariants)===null||i===void 0?void 0:i.reduce((m,g)=>{let{class:y,className:v,...b}=g;return Object.entries(b).every(_=>{let[w,k]=_;return Array.isArray(k)?k.includes({...c,...p}[w]):{...c,...p}[w]===k})?[...m,y,v]:m},[]);return Bx(s,u,f,n?.class,n?.className)},LN=RN("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),U1=O.forwardRef(({className:s,variant:t,size:n,asChild:i=!1,...a},c)=>{const u=i?EN:"button";return o.jsx(u,{className:kt(LN({variant:t,size:n,className:s})),ref:c,...a})});U1.displayName="Button";const io=O.forwardRef(({className:s,type:t,...n},i)=>o.jsx("input",{type:t,className:kt("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:i,...n}));io.displayName="Input";const ON="/boltfaredeal/assets/herohome-DT9eiX7y.png",IN="/boltfaredeal/assets/herolight-CuHdeJoD.png",W1="/boltfaredeal/assets/Owner%20image-Ce46Gc2F.png",MN="/boltfaredeal/assets/WhyChooseUs-CKRRPvHQ.png",zN="/boltfaredeal/assets/5-ymbanfZ0.png",Ux="/boltfaredeal/assets/2-DiAjn5_X.png",Wx="/boltfaredeal/assets/3-CGy4r2Ne.png",DN="/boltfaredeal/assets/4-D9jko_-K.png",FN="/boltfaredeal/assets/Bopp-pi9j3R0x.png",BN="/boltfaredeal/assets/Corrugated-C3HRMm_i.png",UN="/boltfaredeal/assets/Flexo-C8kTiPdQ.png",WN="/boltfaredeal/assets/Labels-W3ZJ1Vob.jpg",HN="/boltfaredeal/assets/OffSet-DdFVBfKU.png",VN="/boltfaredeal/assets/copier-BzKvISl0.png",$t={heroBgLarge:ON,heroBgLight:IN,servicePrint:HN,servicePaper:VN,servicePackaging:BN,serviceColor:UN,serviceBopp:FN,serviceLabels:WN,portfolio1:zN,portfolio2:DN,portfolio3:Wx,portfolio4:Ux,portfolio5:Wx,portfolio6:Ux,aboutImg:W1,whyChooseUsImg:MN},Pi=[{title:"Offset Printing",description:"High-quality offset printing solutions for brochures, books, labels, cartons, and business stationery.",image:$t.servicePrint,radius:"rounded-[20px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Flexo Printing",description:"Flexible printing solutions for labels, tags, packaging, and shrink sleeves with consistent quality.",image:$t.serviceColor,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Copier Paper",description:"Importer, distributor and dealer of copier, coated and sheet form papers.",image:$t.servicePaper,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Corrugation",description:"High-quality corrugated packaging solutions from standard transit boxes to bespoke packaging.",image:$t.servicePackaging,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(139deg,rgba(134,217,240,0.3)_0%,rgba(192,229,116,0.3)_100%)]"},{title:"Others",description:"BOPP tapes, screen printing, labels, stickers, and specialized printing solutions.",image:$t.serviceBopp,radius:"rounded-[30px]",overlay:"bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]"}],YN=[{title:"AVY DIARY Ghee Corrugated Carton",image:$t.portfolio1},{title:"Premium Gift Box Collection",image:$t.portfolio2},{title:"Minimalist Packaging Design",image:$t.portfolio3},{title:"Luxury Brand Packaging",image:$t.portfolio6},{title:"Holiday Gift Wrapping Series",image:$t.portfolio5},{title:"Floral Gift Box Set",image:$t.portfolio4}],GN=[{value:"1600+",label:"Satisfied Clients"},{value:"15+",label:"Awards Winning"},{value:"70+",label:"Team Members"},{value:"900+",label:"Successful Projects"}],qN=Pi.map(({title:s})=>({label:s,to:`/services/${s.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}`})),XN=()=>{const[s,t]=O.useState(""),[n,i]=O.useState(()=>document.documentElement.getAttribute("data-theme")||"dark");O.useEffect(()=>{const c=()=>{i(document.documentElement.getAttribute("data-theme")||"dark")};c();const u=new MutationObserver(c);return u.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>u.disconnect()},[]);const a=n==="light";return o.jsx("footer",{className:["w-full px-4 py-8 sm:px-10 lg:px-[80px]",a?"bg-[#FFFFE9] text-[#1b1b1b]":"bg-[#05080a] text-white"].join(" "),children:o.jsxs("div",{className:"mx-auto flex w-full max-w-[1500px] flex-col",children:[o.jsxs("div",{className:["flex min-h-[102px] flex-col justify-between gap-8 border-b-[3px] pb-[25px] sm:flex-row sm:items-start",a?"border-[#1b1b1b]/10":"border-white/10"].join(" "),children:[o.jsx(ln,{to:"/",className:"flex items-center gap-2",children:o.jsx("img",{src:rh,alt:"Fairdeal Print Pack",className:"h-10 w-auto object-contain"})}),o.jsxs("div",{className:"flex flex-col items-start gap-4 sm:mt-[11px] sm:flex-row sm:items-center sm:gap-[34px]",children:[o.jsx("p",{className:["text-lg font-normal leading-normal tracking-[-0.3px] sm:text-[22px]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:"Ready to get started?"}),o.jsx(jt,{to:"/contact",className:"h-[52px] px-[35px] text-base font-medium tracking-[-0.23px] sm:text-[17px]",children:"Get started"})]})]}),o.jsxs("div",{className:"flex flex-col pt-[39px]",children:[o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[332px_minmax(0,1fr)] lg:gap-[121px]",children:[o.jsxs("section",{"aria-labelledby":"newsletter-heading",children:[o.jsxs("h2",{id:"newsletter-heading",className:"text-xl font-normal leading-normal tracking-[-0.3px] sm:text-[22px]",children:["Subscribe to our",o.jsx("br",{}),"newsletter"]}),o.jsxs("form",{className:["mt-[17px] flex h-[51px] items-start border-b-[3px]",a?"border-[#1b1b1b]/20":"border-white/[0.18]"].join(" "),onSubmit:c=>{c.preventDefault(),t("")},children:[o.jsx("label",{className:"sr-only",htmlFor:"footer-email",children:"Email address"}),o.jsx(io,{id:"footer-email",name:"email",type:"email",value:s,onChange:c=>t(c.target.value),placeholder:"Email address",className:["h-[50px] flex-1 rounded-none border-0 bg-transparent px-0 text-sm tracking-[-0.2px] focus-visible:ring-0 sm:text-[15px]",a?"text-[#1b1b1b] placeholder:text-[#1b1b1b]/50":"text-white placeholder:text-white/50"].join(" ")}),o.jsx(U1,{type:"submit",size:"icon","aria-label":"Submit email address",className:["h-[50px] w-[50px] shrink-0 rounded-none bg-transparent hover:bg-transparent",a?"text-[#1b1b1b]":"text-white"].join(" "),children:o.jsx(An,{className:"h-5 w-5"})})]})]}),o.jsxs("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-[154px_210px_194px] lg:gap-x-[90px]",children:[o.jsxs("nav",{"aria-labelledby":"services-heading",children:[o.jsx("h2",{id:"services-heading",className:"text-base font-medium leading-normal tracking-[-0.23px] text-[#92d1bc] sm:text-[17px]",children:"Services"}),o.jsx("ul",{className:"mt-[14px] space-y-0",children:qN.map(c=>o.jsx("li",{children:o.jsx(ln,{to:c.to,className:["block text-sm font-normal leading-[43px] transition-colors hover:text-[#92d1bc]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:c.label})},c.label))})]}),o.jsxs("div",{className:"flex flex-col gap-8",children:[o.jsxs("section",{children:[o.jsx("h2",{className:"text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]",children:"Working hours:"}),o.jsxs("p",{className:["mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:["Mon - Sun: 9 am - 5 pm",o.jsx("br",{}),"Weekly Off: Thursday"]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]",children:"Address:"}),o.jsx("p",{className:["mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:"Fairdeal Print Pack, Mohanagar, Chinchwad 411033"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-base font-medium leading-normal tracking-[-0.3px] text-[#92d1bc] sm:text-[17px]",children:"Contact us:"}),o.jsxs("p",{className:["mt-[9px] text-sm font-normal leading-[25px] tracking-[-0.3px]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:["020 2747 4888",o.jsx("br",{}),"info@fairdealprintpack.com"]})]})]})]}),o.jsx("div",{className:["mt-[17px] h-[5px] w-full",a?"bg-[#1b1b1b]/10":"bg-white/10"].join(" ")}),o.jsx("div",{className:"mt-[25px] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",children:o.jsxs("nav",{className:"flex flex-wrap items-center gap-6 sm:gap-10","aria-label":"Legal information",children:[o.jsx(ln,{to:"/terms-and-conditions",className:["text-sm font-normal tracking-[-0.2px] transition-colors hover:text-[#92d1bc] sm:text-[15px]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:"Terms & Conditions"}),o.jsx(ln,{to:"/privacy-policy",className:["text-sm font-normal tracking-[-0.2px] transition-colors hover:text-[#92d1bc] sm:text-[15px]",a?"text-[#1b1b1b]":"text-white"].join(" "),children:"Privacy Policy"})]})})]})]})})},QN=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null);O.useRef(null);const i=O.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),a=O.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),c=O.useRef(null);return O.useEffect(()=>{const u=s.current,p=t.current,f=n.current;if(!u||!p||!f)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)");if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches||m.matches){u.style.display="none";return}const y=w=>{a.current.x=w.clientX,a.current.y=w.clientY},v=(w,k)=>{const C=document.createElement("span");C.className="cursor-particle";const A=3+Math.random()*8;C.style.width=`${A}px`,C.style.height=`${A}px`,C.style.left=`${w}px`,C.style.top=`${k}px`,C.style.setProperty("--particle-x",`${(Math.random()-.5)*40}px`),C.style.setProperty("--particle-y",`${(Math.random()-.5)*40}px`),u.appendChild(C),window.setTimeout(()=>C.remove(),520)},b=w=>{const k=document.createElement("span");k.className="cursor-ripple",k.style.left=`${w.clientX}px`,k.style.top=`${w.clientY}px`,k.style.setProperty("--ripple-x",`${w.clientX}px`),k.style.setProperty("--ripple-y",`${w.clientY}px`),u.appendChild(k),window.setTimeout(()=>k.remove(),500);for(let C=0;C<8;C+=1)v(w.clientX,w.clientY)},_=()=>{const w=a.current.x-i.current.x,k=a.current.y-i.current.y;i.current.x+=w*.12,i.current.y+=k*.12,p.style.setProperty("--cursor-x",`${i.current.x}px`),p.style.setProperty("--cursor-y",`${i.current.y}px`),f.style.setProperty("--dot-x",`${i.current.x}px`),f.style.setProperty("--dot-y",`${i.current.y}px`),Math.abs(w)+Math.abs(k)>5&&v(i.current.x,i.current.y),c.current=window.requestAnimationFrame(_)};return p.style.setProperty("--cursor-x",`${i.current.x}px`),p.style.setProperty("--cursor-y",`${i.current.y}px`),f.style.setProperty("--dot-x",`${i.current.x}px`),f.style.setProperty("--dot-y",`${i.current.y}px`),window.addEventListener("pointermove",y,{passive:!0}),window.addEventListener("pointerdown",b),c.current=window.requestAnimationFrame(_),()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerdown",b),c.current&&window.cancelAnimationFrame(c.current)}},[]),o.jsxs("div",{ref:s,className:"cursor-overlay","aria-hidden":"true",children:[o.jsx("div",{ref:t,className:"cursor-spotlight"}),o.jsx("div",{ref:n,className:"cursor-dot"})]})},KN=()=>{const{pathname:s}=Po(),t=O.useRef(null),[n,i]=O.useState(()=>window.localStorage.getItem("faredeal-theme")||"dark");O.useEffect(()=>{document.documentElement.setAttribute("data-theme",n),window.localStorage.setItem("faredeal-theme",n)},[n]),O.useEffect(()=>{t.current?.scrollTo(0,{duration:.8})},[s]),O.useEffect(()=>{const c=new u_({autoRaf:!0,lerp:.08,smoothWheel:!0,wheelMultiplier:.9});return t.current=c,()=>{c.destroy(),t.current=null}},[]),O.useEffect(()=>{document.querySelectorAll("p, li, h1, h2, h3, h4, label, dt, dd, .stat-item, .service-card-copy, .contact-card").forEach((f,m)=>{f.dataset.reveal||(f.dataset.reveal=m%2===0?"left":"right")});const u=document.querySelectorAll("[data-reveal], .portfolio-card, .stat-item, .magnetic-button, form, .contact-card");if(!u.length)return;const p=new IntersectionObserver(f=>{f.forEach(m=>{const g=m.target,y=g.dataset.reveal||"up";g.style.transitionDelay=`${Math.min(Number(g.dataset.delay||0),220)}ms`,m.isIntersecting?(g.classList.add("is-visible"),g.dataset.reveal=y):g.classList.remove("is-visible")})},{threshold:.12,rootMargin:"0px 0px -5% 0px"});return u.forEach((f,m)=>{const g=f.dataset.reveal||"up";f.dataset.reveal=g,f.dataset.delay=String(Math.min(m*45,220)),f.classList.remove("is-visible"),p.observe(f)}),()=>p.disconnect()},[s]),O.useEffect(()=>{const c=()=>{const u=window.scrollY*.18;document.documentElement.style.setProperty("--scroll-shift",`${u}px`)};return c(),window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c)}},[]);const a=s==="/";return o.jsxs("main",{"data-theme":n,className:"relative isolate mx-auto w-full max-w-[1440px] overflow-x-clip bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx(QN,{}),o.jsx(NN,{theme:n,onToggleTheme:()=>i(c=>c==="dark"?"light":"dark")}),a?o.jsx(Sx,{}):o.jsx("div",{id:"main-content",className:"pt-[52px] md:pt-0",children:o.jsx(Sx,{})}),o.jsx(XN,{})]})},JN=`
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
`,ZN=({heroImage:s,onWatchStory:t})=>o.jsxs("section",{className:"hero-section relative w-full overflow-hidden",children:[o.jsx("style",{children:JN}),o.jsx("img",{className:"hero-media absolute inset-0 h-full w-full object-cover",alt:"Printing press producing packaging",src:s}),o.jsx("div",{"aria-hidden":"true",className:"hero-overlay pointer-events-none absolute inset-0"}),o.jsx("div",{className:"relative z-10 flex h-full flex-col justify-center px-6 pb-12 pt-[110px] md:px-[6.7%] md:pt-[90px]",children:o.jsxs("div",{className:"flex max-w-[680px] flex-col gap-5",children:[o.jsxs("p",{className:"hero-eyebrow",children:[o.jsx("span",{children:"Printing"}),o.jsx("span",{className:"dot","aria-hidden":"true"}),o.jsx("span",{children:"Packaging"}),o.jsx("span",{className:"dot","aria-hidden":"true"}),o.jsx("span",{children:"Excellence"})]}),o.jsxs("h1",{className:"hero-title text-[#fbfbfb]",children:[o.jsx("span",{className:"hero-line",children:o.jsx("span",{children:"Your Vision."})}),o.jsx("span",{className:"hero-line",children:o.jsx("span",{className:"grad-a",children:"Our Print &"})}),o.jsx("span",{className:"hero-line",children:o.jsx("span",{className:"grad-b",children:"Packaging Expertise."})})]}),o.jsx("p",{className:"hero-copy max-w-[520px] text-base leading-[1.6] sm:text-lg sm:leading-[1.65]",children:"Since 1990, we have been delivering high-quality printing and packaging solutions with a commitment to quality, innovation and customer satisfaction."}),o.jsxs("div",{className:"hero-actions mt-2 flex flex-wrap items-center gap-x-8 gap-y-4",children:[o.jsxs("a",{href:"#services-section",className:"btn-primary",children:["Explore Our Services",o.jsx(An,{className:"h-4 w-4"})]}),o.jsxs("button",{type:"button",className:"btn-story",onClick:t,children:[o.jsx("span",{className:"play-dot",children:o.jsx(O_,{className:"h-4 w-4",fill:"currentColor"})}),"Watch Our Story"]})]})]})})]}),$N="Fairdeal Print Pack India Pvt. Ltd. has been established as full - fledge document solution in India & Pune city. Our traditional business model is based on the accomplishment of expertise into print media. We began our journey in 1990 & today we have emerged with a reputation for its quality product & prompt service.",ek=[{id:"vision",title:"Our Vision",icon:Hh,content:"Customer satisfaction and employee empowerment in tandem with innovation and excellence, to work together with our customers to help them achieve their goals. Our success lies in your success. Honesty, integrity, dedication & commitment will always be our priority and trademark. Dignity & respect to all our guiding principles in every deal with customers & suppliers."},{id:"mission",title:"Our Mission",icon:U_,content:"To provide exceptional printing service by pursuing business through innovation & creativity that exceeds the expectation of our esteemed customers."},{id:"values",title:"Core Values",icon:Vh,content:"We believe in treating our customer with respect & faith, we integrate honesty, integrity & business ethics into all aspect of our business functioning."},{id:"goal",title:"The Goal",icon:A_,content:"Delighted customers are key to our success & we strive to achieve this key every second. Printing is our passion & hence no matter what your print need is, Fairdeal Print Pack India Pvt. Ltd. has most effective print solutions."}],tk=()=>{const[s,t]=O.useState("vision");return o.jsx("div",{className:"flex flex-col gap-3",children:ek.map(({id:n,title:i,icon:a,content:c})=>{const u=s===n;return o.jsxs("div",{className:"relative ml-9",children:[o.jsx("div",{"aria-hidden":"true",className:`
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
              `,children:o.jsx(a,{className:"h-5 w-5"})}),o.jsxs("div",{className:`
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
                  `,children:i}),o.jsx(kd,{className:`
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
                `,children:o.jsx("div",{className:"overflow-hidden",children:o.jsx("p",{className:"pb-5 pl-[60px] pr-5 text-[13.5px] leading-[1.6] text-[#0a1015]/90",children:c})})})]})]},n)})})},rk=({isLightTheme:s})=>o.jsxs("section",{className:"relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#f7d51d]/10 blur-[110px]"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#f7d51d]/10 blur-[110px]"}),o.jsx("div",{className:"relative mx-auto max-w-[1240px]",children:o.jsxs("div",{className:"grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-14",children:[o.jsx("div",{"data-reveal":"left",className:"relative mx-auto w-full max-w-[430px] pb-10 lg:mx-0",children:o.jsxs("div",{className:"relative h-[460px] w-full sm:h-[540px] lg:h-[560px]",children:[o.jsx("div",{"aria-hidden":"true",className:`
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
                  ${s?"bg-[#9bcfc0]/25":"bg-[#8fcbb7]/15"}
                `}),o.jsx("span",{"aria-hidden":"true",className:"absolute -left-[22px] top-[40px] z-20 h-3 w-3 rounded-full bg-[#f7d51d]"}),o.jsx("span",{"aria-hidden":"true",className:"absolute -left-[17px] top-[52px] z-20 h-[360px] w-px bg-gradient-to-b from-[#f7d51d] to-transparent"}),o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-4 rounded-bl-[110px] rounded-br-[40px] rounded-tl-[44px] rounded-tr-[120px] border border-[#f7d51d]/50",style:{WebkitMaskImage:"linear-gradient(210deg, transparent 25%, black 80%)",maskImage:"linear-gradient(210deg, transparent 25%, black 80%)"}}),o.jsxs("div",{className:`
                  relative
                  z-10
                  h-full
                  w-full
                  overflow-hidden
                  rounded-bl-[90px]
                  rounded-br-[28px]
                  rounded-tl-[28px]
                  rounded-tr-[110px]
                  ${s?"shadow-[0_18px_45px_rgba(50,70,65,0.18)]":"shadow-[0_18px_45px_rgba(0,0,0,0.45)]"}
                `,children:[o.jsx("img",{src:$t.aboutImg,alt:"Rajesh Yewale - Founder of Fairdeal Print Pack",className:"h-full w-full max-w-none object-cover object-top",loading:"lazy"}),o.jsx("div",{"aria-hidden":"true",className:`
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    z-[15]
                    h-[20%]
                    ${s?"bg-gradient-to-t from-[#f3f1eb]/80 via-[#f3f1eb]/30 to-transparent":"bg-gradient-to-t from-[#02070a]/80 via-[#02070a]/30 to-transparent"}
                  `})]}),o.jsxs("div",{className:`
                  absolute
                  -bottom-8
                  left-[6%]
                  right-[6%]
                  z-30
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0d151b]/95
                  px-7
                  py-4
                  backdrop-blur-sm
                `,children:[o.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.18em] text-[#f7d51d]",children:"Rajesh Yewale"}),o.jsx("p",{className:"mt-1 text-sm font-light text-white/70",children:"Founder & Managing Director"})]})]})}),o.jsxs("div",{"data-reveal":"right",className:"relative z-20 flex w-full flex-col gap-8",children:[o.jsxs("header",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"About Us"})]}),o.jsxs("h2",{className:"font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]",style:{fontFamily:"'Lato', sans-serif"},children:[o.jsx("span",{className:"block text-white",children:"Printing Expertise."}),o.jsx("span",{className:"block text-[#92e3c3]",children:"Packaging Excellence"}),o.jsx("span",{className:"block text-[#9aa3b2]",children:"Since 1990"})]})]}),o.jsx("div",{className:"h-px w-full bg-white/10"}),o.jsxs("div",{className:"grid gap-10 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10",children:[o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-start leading-none",children:[o.jsx("span",{className:"text-[72px] font-extrabold text-white sm:text-[80px]",children:"36"}),o.jsx("span",{className:"ml-1 mt-3 text-[40px] font-extrabold text-[#f7d51d]",children:"+"})]}),o.jsx("p",{className:"mt-3 max-w-[110px] text-xs font-semibold uppercase leading-snug tracking-[0.22em] text-white/60",children:"Years of Trust"})]}),o.jsx("p",{className:"text-[15px] font-light leading-[1.75] text-white/85",children:$N})]}),o.jsx(tk,{})]})]})]})})]}),Ge=({children:s,className:t})=>o.jsx("p",{"data-reveal":"left",className:kt("text-lg font-normal leading-[27.2px] tracking-[0.54px] text-[#e1de00]",t),children:s}),H1=({primary:s,secondary:t,className:n,primaryClassName:i,secondaryClassName:a})=>o.jsxs("h2",{className:kt("font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[58px]",n),style:{fontFamily:"'Lato', sans-serif"},children:[s&&o.jsx("span",{"data-reveal":"left",className:kt("block",i),children:s}),t&&o.jsx("span",{"data-reveal":"right",className:kt("block text-[#92d1bc]",a),children:t})]}),nk="NORTHLINE",ik=80,ku=(s,t,n)=>Math.min(n,Math.max(t,s)),Tf=s=>String(s).padStart(2,"0"),sk=({activeServiceIndex:s,setActiveServiceIndex:t})=>{const n=O.useRef(null),i=O.useRef([]),a=O.useRef(null),c=O.useRef(0),u=Pi.length;O.useEffect(()=>{let f=0;const m=()=>{f=0;const y=n.current;if(!y)return;const v=y.getBoundingClientRect(),b=y.offsetHeight-window.innerHeight,w=(b>0?ku(-v.top/b,0,1):0)*(u-1);i.current.forEach((C,A)=>{if(!C||A===0)return;const E=ku(w-(A-1),0,1),j=E*E*(3-2*E),P=(1-j)*100,M=.97+j*.03;C.style.transform=`translate3d(${P}%, -50%, 0) scale(${M})`}),a.current&&(a.current.style.width=`${(w+1)/u*100}%`);const k=ku(Math.round(w),0,u-1);k!==c.current&&(c.current=k,t?.(k))},g=()=>{f||(f=requestAnimationFrame(m))};return m(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g),f&&cancelAnimationFrame(f)}},[u,t]);const p=ku(s??0,0,u-1);return o.jsx("section",{id:"services-section",className:"relative z-10 w-full",children:o.jsx("div",{ref:n,style:{height:`${100+(u-1)*ik}vh`},className:"relative",children:o.jsx("div",{className:"sticky top-[52px] flex h-[calc(100dvh-52px)] w-full flex-col px-4 py-4 max-[900px]:pt-[60px] sm:px-6 sm:py-5 md:top-0 md:h-[100dvh] md:py-6 lg:px-8",children:o.jsxs("div",{className:"mx-auto flex min-h-0 w-full max-w-[1180px] flex-1 flex-col",children:[o.jsxs("header",{className:"mb-4 flex flex-col gap-3 md:mb-5 md:gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx(Ge,{className:"text-sm font-bold uppercase leading-none tracking-[0.25em] text-[#f7d51d]",children:"OUR SERVICES"})]}),o.jsx(H1,{primary:"We bring",secondary:"ideas to life."})]}),o.jsxs("div",{className:"flex max-w-full items-start gap-4 lg:max-w-[530px]",children:[o.jsxs("p",{className:"flex-1 text-sm font-normal leading-relaxed tracking-[0] sm:text-base lg:text-lg",children:[o.jsxs("span",{className:"font-light text-[#f0efeb]",children:["From concept to final production, we handle every detail. From high-quality printing to packaging and finishing, we bring your ideas to life with"," "]}),o.jsx("span",{className:"font-medium text-[#e1de00]",children:"precision"}),o.jsx("span",{className:"font-light text-[#f0efeb]",children:", creativity, and consistency."})]}),o.jsx(ln,{to:"/services",className:"mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#92d1bc] hover:text-[#92d1bc] sm:flex","aria-label":"View more services",children:o.jsx(kd,{className:"h-4 w-4 -rotate-90"})})]})]}),o.jsx("div",{className:"mb-4 h-px w-full bg-white/20 md:mb-5"}),o.jsx("div",{className:"relative min-h-0 flex-1 overflow-hidden",children:Pi.map((f,m)=>o.jsxs("article",{ref:g=>i.current[m]=g,style:{zIndex:m+1,transform:m===0?"translate3d(0, -50%, 0)":"translate3d(100%, -50%, 0) scale(0.97)",willChange:"transform"},className:"absolute inset-x-0 top-1/2 max-[900px]:top-[44%] flex h-[min(100%,58vh,440px)] max-[900px]:h-[min(100%,54vh,480px)] flex-col overflow-hidden shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.45)] md:flex-row",children:[o.jsx("div",{className:"relative min-h-0 flex-[1.1] md:flex-[1.9]",children:o.jsx("img",{src:f.image,alt:f.title,className:"absolute inset-0 h-full w-full object-cover",draggable:!1})}),o.jsxs("div",{className:"relative flex min-h-0 flex-1 flex-col justify-between bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] p-4 text-black sm:p-5 md:p-6 lg:p-8",children:[o.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2 md:gap-3",children:[o.jsxs("span",{className:"text-[11px] font-semibold uppercase tracking-[0.2em]",children:[nk," / SERVICE ",Tf(m+1)]}),o.jsx("h3",{className:"text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",children:f.title}),o.jsx("p",{className:"max-w-[340px] text-xs leading-relaxed sm:text-sm md:text-base",children:f.description})]}),o.jsxs("div",{className:"mt-2 flex items-end justify-between gap-3 sm:mt-4",children:[o.jsxs(ln,{to:"/contact",className:"inline-flex items-center gap-2 bg-black px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-85 sm:px-4 sm:py-2.5 sm:text-sm",children:["Start a project",o.jsx(no,{className:"h-4 w-4"})]}),o.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.jsx("span",{children:Tf(p+1)}),o.jsx("div",{className:"relative h-px w-16 bg-black/30 md:w-24",children:m===p&&o.jsx("div",{ref:a,className:"absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-black",style:{width:`${(p+1)/u*100}%`}})}),o.jsx("span",{children:Tf(u)})]})]})]})]},f.title))})]})})})})},ak=({value:s,label:t})=>{const[n,i]=O.useState(0),[a,c]=O.useState(!1),u=O.useRef(null),p=String(s).trim(),f=Number.parseInt(p.replace(/[^0-9]/g,""),10)||0;return O.useEffect(()=>{const m=u.current;if(!m)return;const g=new IntersectionObserver(y=>{const[v]=y;if(v)if(v.isIntersecting){c(!0),i(0);const b=performance.now(),_=1200,w=k=>{const C=Math.min((k-b)/_,1),A=1-(1-C)**3;i(Math.round(f*A)),C<1?requestAnimationFrame(w):i(f)};requestAnimationFrame(w)}else c(!1),i(0)},{threshold:.35});return g.observe(m),()=>g.disconnect()},[f]),o.jsxs("div",{ref:u,className:"flex min-w-0 flex-col gap-2.5",children:[o.jsx("dt",{className:"order-2 text-base font-medium leading-7 tracking-[0] text-[#aeb6a7] sm:text-xl",children:t}),o.jsxs("dd",{className:"m-0 text-[36px] font-normal leading-[50px] tracking-[0] text-white sm:text-[50px] sm:leading-[60px]",children:[o.jsx("span",{children:n}),o.jsx("span",{className:"text-[#e1de00]",children:"+"})]})]})},ok=[{title:"State of the Art Printing Machines",description:"Precision, speed and unmatched quality.",icon:M_,accent:"#92d1bc"},{title:"One Stop Source",description:"Everything you need, under one roof.",icon:T_,accent:"#e1de00"},{title:"Dedicated Expertise",description:"Experienced professionals across print and packaging.",icon:H_,accent:"#49c4bc"},{title:"Quality-Driven Production",description:"Consistent output with precision at every stage.",icon:Bu,accent:"#e1de00"}],lk=[{src:$t.servicePrint,alt:"Printed materials from our print services"},{src:$t.servicePackaging,alt:"Corrugated packaging produced for clients"},{src:$t.serviceLabels,alt:"Labels produced for customer products"}],ck=()=>o.jsxs("section",{className:"relative z-10 w-full overflow-hidden bg-[#05080a] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 xl:py-24",children:[o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0",style:{backgroundImage:"radial-gradient(ellipse 48% 62% at 100% 0%, rgba(225, 222, 0, 0.19) 0%, rgba(225, 222, 0, 0.09) 42%, transparent 78%), radial-gradient(ellipse 58% 62% at 0% 100%, rgba(73, 196, 188, 0.21) 0%, rgba(73, 196, 188, 0.09) 48%, transparent 82%), radial-gradient(ellipse 34% 48% at 8% 100%, rgba(146, 209, 188, 0.11) 0%, transparent 76%)"}}),o.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 overflow-hidden",children:[o.jsx("span",{className:"absolute -top-24 left-[58%] h-56 w-12 rotate-[38deg] bg-[#e1de00]/20"}),o.jsx("span",{className:"absolute -top-24 left-[62%] h-56 w-12 rotate-[38deg] bg-[#49c4bc]/25"}),o.jsx("span",{className:"absolute -bottom-24 -left-5 h-48 w-12 rotate-[38deg] bg-[#49c4bc]/25"}),o.jsx("span",{className:"absolute -bottom-24 left-8 h-48 w-12 rotate-[38deg] bg-[#e1de00]/20"})]}),o.jsxs("div",{className:"relative mx-auto grid w-full max-w-[1440px] items-center gap-x-8 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] xl:grid-cols-[minmax(300px,0.95fr)_minmax(440px,1.45fr)_minmax(170px,0.48fr)] xl:gap-x-10",children:[o.jsxs("div",{className:"flex flex-col gap-7 sm:gap-8",children:[o.jsxs("header",{"data-reveal":"left",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 shrink-0 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"Why"})]}),o.jsxs("h2",{className:"m-0 font-[Lato] text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl xl:text-[68px]",children:["Choose ",o.jsx("span",{className:"text-[#92d1bc]",children:"Us"})]}),o.jsx("p",{className:"mt-4 max-w-[540px] text-sm leading-[1.65] text-white/80 sm:text-base",children:"We cover the entire gamut of print needs, from company profiles, brochures and catalogues to folding cartons, labels and luxury rigid boxes."})]}),o.jsx("ul",{className:"m-0 grid list-none grid-cols-1 gap-x-5 gap-y-5 p-0 sm:grid-cols-2 sm:gap-y-7",children:ok.map(({title:s,description:t,icon:n,accent:i})=>o.jsxs("li",{className:"flex min-w-0 items-start gap-3","data-reveal":"up",children:[o.jsx("span",{className:"grid size-11 shrink-0 place-items-center rounded-full border-2",style:{borderColor:i,color:i},children:o.jsx(n,{"aria-hidden":"true",size:22,strokeWidth:1.8})}),o.jsxs("span",{className:"min-w-0 pt-1",children:[o.jsx("span",{className:"block text-sm font-semibold leading-[1.3] text-white",children:s}),o.jsx("span",{className:"mt-1 block text-xs leading-[1.5] text-white/65",children:t})]})]},s))})]}),o.jsxs("div",{className:"relative min-h-[350px] sm:min-h-[475px] xl:min-h-[540px]","data-reveal":"right",children:[o.jsx("div",{className:"absolute inset-x-[7%] top-0 h-[79%] overflow-hidden",style:{clipPath:"polygon(16% 0, 100% 0, 81% 100%, 0 100%)"},children:o.jsx("img",{className:"size-full object-cover object-center",alt:"Printing press operating in our production facility",src:$t.whyChooseUsImg,loading:"lazy"})}),o.jsx("div",{className:"absolute inset-x-[2%] bottom-0 grid grid-cols-3 items-end gap-1.5 sm:gap-2.5",children:lk.map(({src:s,alt:t},n)=>o.jsx("div",{className:`h-[105px] overflow-hidden border-2 border-white sm:h-[145px] xl:h-[175px] ${n===1?"translate-y-0":"translate-y-[-5px]"}`,style:{clipPath:n===0?"polygon(12% 0, 100% 0, 82% 100%, 0 100%)":n===1?"polygon(16% 0, 100% 0, 84% 100%, 0 100%)":"polygon(18% 0, 100% 0, 82% 100%, 0 100%)"},children:o.jsx("img",{className:"size-full object-cover",src:s,alt:t,loading:"lazy"})},s))})]}),o.jsx("aside",{className:"relative lg:col-span-2 xl:col-span-1 xl:flex xl:justify-center",children:o.jsx("dl",{className:"relative m-0 grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-10 lg:grid-cols-4 xl:w-full xl:max-w-[220px] xl:grid-cols-1 xl:gap-y-6",children:GN.map(s=>o.jsx(ak,{value:s.value,label:s.label},s.label))})}),o.jsxs("p",{className:"m-0 text-right text-[10px] font-medium uppercase text-white/55 lg:col-span-2 xl:col-span-3",children:["Quality ",o.jsx("span",{className:"px-2 text-[#e1de00]",children:"/"})," Innovation",o.jsx("span",{className:"px-2 text-[#49c4bc]",children:"/"})," Partnership"]})]})]}),uk="/boltfaredeal/assets/client1-xya4iu4V.png",dk="data:image/png;base64,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",pk="/boltfaredeal/assets/client3-DH-2gf35.png",fk="data:image/png;base64,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",hk="data:image/png;base64,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",mk="/boltfaredeal/assets/client6-DIG_vO_a.png",gk="data:image/png;base64,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",xk="/boltfaredeal/assets/client8-gVxS5ECv.png",vk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAzCAYAAACaEpqBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAASjSURBVHhe7dyxTxtXHAfw752hwXYGRAi9bFhiaGSkRkGhQyOlEqUDW2mlZm2UDqhRKhTLFRISYqxlCRWMGILSJW0WmiFqYED8A43MUmwnIpWRSqQrGTg12NgGcl0C8v1yd/YZH/ds/z6SB399iAf+6t275wPp8O1bHYy5QKYBY/XC5WKu4XIx13C5mGu4XMw1XC7mGi4Xcw2Xi7lG8noTNZ3OYG1tjcasgkAggJGREVy6pNCXhOFpudLpDObmZmnMqhQMBnHvXkTYgnl6WuQZ63RyuRz+2tigsTBk3bN5izU7GeB2MXd4elpkzU3WvVvPsyYnlQ4OddnnzQQ2N5dAOp2isamZmRl0dHTQuCrJ5DoWF+8bstu3v8PAwFVDdiwWiyGbzRqyGzc+w82b3xgyACgUChgfHzdkoVAI0WjUkJ3Wkyd/YGXlKY3x5ehX+GL4cxoLQW6EeSsc7q+5WADQ1dVFI9PsWCAQNDy3KhYA03HRr68Hv99PI+HJaPDLxQcPfkEiMY9EYh6rq/Xf2rArllOapp2MlT4ymef08IYn6w1ermfP/kQqtYFUagMvXpi/QYVCgUZVqWexAGB3VzsZK31sb7+ihxvs7+/TSHhSoVjS29rbaH4mql1zhcP9uHPnexoDAMbGxgzPw+F+w3MA2NrKIpfLGbJo9EeEQr2G7FgiMY/u7m5DsVRVxfLyCvL5vOHYfD733vrMarzZ7BZisZ9oDLzbbe/tDdH4hNnPAMHXXNJ+saS3N3C5IpGI6S+9krt3f8Dlyx/RGHh3AVC+2FdVFfF4vOrvYzVeTdMwMTEBABgd/RrDw0P0EMuFuxWxy1Uo6u0ftNP8TNSjXE6Uv3HBYBCTk5Po7Oykh73HablgU55KVlfX8PjxEo0tiVwub/YgHMrnq39T7ZRfceVyOezuaobXrSiKgkgkgmCw+qtAq/VfK5EKxZLua/NBkiT6muuqnblgsZayMjQ0ZHrKo7OC3brLjNl+mRWz2VbTNDx8+CvgYIyViDxzSYVSSffJPkiy2OVywuqURN+4qakpKIqz21WSyXU8evRbxVPktWuDuHXrW0Omqiqmp6cBmwW81cLditjlKpZ0n0/ccpntzJvtiperplx2O/SqqjouXfmY7HboM5nnmJ39mcY1E7lcwq+5aLGsMqfsduiXln5HMrlOY1vlY7Lboa/H2BuF8OXyyuLifccFY0YNWy67Kze/vz6zAxfsdGSc/VKrLuLxOBYWFkwf169/Sg+vGResdnKr3ojq5PNGLlhthN+hD4VCtgtkJ16/3sHOzg4AoKenBxcv9tBDAJvtALu9NvoZo9Wx5WOoB5GvFoUvF7MncrlkeLAzz1qDB1unrFXIXnymyFpDw+5zMfHxmou5htdczDWe/t0ia27SweGR7sXtNgDw8uXf2NvbozFzQFEUKMqHNBaCdHB0pHt1xfh0eQWvtv+hMXNgcPATXLnyMY2FIKNRP7lmwuPFFnON7NEZkbUAT2eugavm97Cz6pw714G+vj4aC8PTf7gLAKr6LzY3N/Hfmzf0JWaj+8IFhMNhnD9fn9uR3OB5uVjz8vS0yJobl4u55n9P4f3HwoQaMgAAAABJRU5ErkJggg==",yk="data:image/png;base64,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",bk="data:image/png;base64,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",wk="data:image/png;base64,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",_k="data:image/png;base64,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",Nk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAA0CAYAAAANODN4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAfQSURBVHhe7Z1LbBvHHca/maXIZUYqVAcWwj5i0ZbrmGp9sOQefEmBOrk2Dycp0h6lg4H4YDhgIIBI0VwIGM6hSYGmkZqTbTgH27ENJG5aA1ZtHxIrheBElFxZpqk2oECkCS+EtxZ3p4clKXK43AdfXnL3BywgfLMyYeDTf775z+yS/O/hJqeUAoSAEPj4dBWqqSo0TQPAxTEfn45DVU0D5xxc8w3o032oWqqAHADnvgl9ugtV1SI0TQU4h+8/n25Di8Ui9Cqogvg50KfL0M2Hm9gsqlA1DZrG/WnYp6vQzc1NbD58CLWo6osR338+XYSqahFqsVhaCWvwHejTTaiqalBVPQeqXBPHfXw6CllZWeGhkIzBoUGEw48hGAqCgIDQ3tsWURQF2WwWALB6dw2Pb9uGbdu+DwCIRqPC3T5ugKRSyzwYDIINDoIxhlAoBCpREJfvyymKgqWlFBYXF7G+nkEulxNvMSQ6GsUvDx3C+HgMsiyLw0in0zhx4oQo2+bNN3+HSOQJUa6h1c+Ix+N98wdFNU2FpnFomla53IyiKPj0b39HIpHA3NwsFhZu2TYfAKTvpzE3N4tjx47h7NkPkc1uiLe0xN21NVGqY/Wu9T1egXIOcK5WeoGAe9ch2ewGkskkLpw/h0KhIA47Zn7+Gt566/e4fuOmONQ0/7pzR5TquLOyIkqeheqtFw5wvQqWf3Yb2ewG3n77pKNqZ5czp0/h4qXLotwUy8spUaojk7kvSp6FAhzgqJp+3Wc+RVHw3nt/akvVa8SVTz5GKrUsyo4pFAqm03o2u9HR/0evQVE6hMA5L2VB7joL/uP6jY5UPpEPPvgLHjxQRNkxZjnQbMyL6AaEXgF55WiWexYiiqLgwvlzotwRCoUCrl69KsqOMcuBZmNehJZ/2KqC7jEfACwtWWcqkVhsvHJFR521K1KpJVFyzPp6RpQq2MmIXqJiQFSlPzdNwYuLi6LUkFhsHMlkEkePvla54m/EkUwmHRuxFXK5HPL5vCj7+c+AWgNWrYjdwn+/+UaUDBkZGcH09BSGh4fFIQwPD+Oll18S5Y6ytnZPlPz8Z4BuQM5dVve2SN9Pi5Ihh5551nBno0y3dw5WV1dFyc9/BtRUQK18GqYHj2WN7dolSjUYTYmdxCjrGWleh9y+fZsHpACCoSCCIRnfGxpCKBRCYGCgJw8kGJHP5/H+n9+3VU0ZY23LaclkshIJ8vk8ZmZmxFuaop/2gusMODQ0hHA4DCpJoD1mwIuXLmM9U78CdbKyff6FF9vW9pmamsbExH4AwBdf/BNzc7PiLU3RTwasmYIJ9EUIB9Bb1tNZz2SQSi3VXXaJxcaxe8x8KndCdQ40yoTVMMZEyRMIq2CUjmH1WABsA9HRKKanp0TZlFhsXJRqqM58Vvlv796YKHmC2gpYLnse89/k5AHE34ibrqKN2PPUU6JUQ7kfmM/nLbcSf7Jnjyh5groKCPTo/NsCCwu38O67f4SiONsHtjNdr63dM+wJVsMYw49++ANR9gQ1BgQh4JyDeM2BpYXK7OycKFtiNQ2vrq5a5j+vTr+oMyDKGdCbpFJL+Oyzz0XZFKtpeHk5ZZn/vDr9wsiAAPTTMD3ow4MHD+L5F16sXE8//QvHq8v5+WuiZIrVNJzL5Szzn1UTvZ+p6QPK4TAG2aDeiA4GH+n7AtPptO1nJ5595pAoVVAUBR99dNGxsexQ7scdOXJEHLINYwwnT5509KBSn/YBiX6R0vWI+fbb73Dh/Dlbl9kJZFmW8dxzv3JcCZ1glQPN8HL+Q8WAJcNV2+5Re7D8PK8dFOWBKNUgyzJ27BgV5bZhlQPN8HL+g1EGJIT03ELE7lTdKaxyoBlezn+oNqDbjBeJRESpIZ/+9YppD09RFEdbck5pNo8xxiwfYu93KgakJQNK1B1vRZBl2fYp5kKhgNnZOUMTKoqCd/7wjii3nWZyoNfzH8oGpEQPfVJA0o9gucCAALBn715RakgqtYREIoGzZz/E9Rs3cf3GTVy8dBmJRMLWMaxWaSYH/vjJJ0XJc5QqoF79SKn6ucN+wL6f/VSUTCkUCpifv4Yzp0/hzOlTuPLJx20722dFMzmwmd/pNygpmY9SCkqoq7bhotFoU1NbK4yMjIiSLZxk1jLNZsd+gpb7foTq+U//whr3mPDw4cOi1DEYY3jllV+Lsi2cZFY0mRn7EUpLxpOotPVtSe7xHyKRJzA1NS3KHeH48dcRDjs7klWNk8zaTGbsRyghFIRSUEmCJEkgVBLveeRMTOzvqAkZY4jH4y23RHaPjYlSQ/z8p0MlSkEpRSAgVS1AXFQCS0xM7Ec8Hm86ozUiFhvH8eOvtyWP7dxp/99ox+f1A1SSJEiBACjdegjJRRGwhmg0ipmZGbz6m9+2bMTJyQOIx+M4evS1litfGbs50M9/W5D0vTQPyTIeYwyhUBBSYKBnnobLZjfw5Vdf4d/r66av6WWMYceOUWzfvh379u3Dzp3Rhsfv8/k8Pr+1IMqG/PzAZN2bGFKpZfzn669rNJHdY7vqKmCrn9urkEwmw0NyGIwxBINBPQ/2iAEbUX5ZeSQSaWg0H3dAstkNHpJlyLKMwEAAhOidGR+fbkAHggP66pcQ/esZfPP5dBF9ESJJoLTuZJaPT8ehgcAA9FYMcWP3xafP+T9mrhfwuYLtawAAAABJRU5ErkJggg==",kk="data:image/png;base64,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",jk="data:image/png;base64,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",ju=[uk,dk,pk,fk,hk,mk,gk,xk,vk,yk,bk,wk,_k,Nk,kk,jk],Ek=()=>o.jsx("section",{className:"relative z-10 w-full overflow-hidden py-14 md:py-16",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8",children:[o.jsx("div",{className:"mb-8 text-center",children:o.jsx(H1,{primary:"Our",secondary:"Clients",className:"text-center"})}),o.jsx("div",{className:"space-y-4 overflow-hidden",children:[{id:"left",items:[...ju,...ju],direction:"left"},{id:"right",items:[...ju,...ju],direction:"right"}].map(s=>o.jsx("div",{className:"overflow-hidden",children:o.jsx("div",{className:`client-marquee-track ${s.direction==="right"?"client-marquee-track-reverse":"client-marquee-track-left"} flex w-max items-center gap-3 md:gap-5`,children:s.items.map((t,n)=>o.jsx("div",{className:"client-logo-card flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E1] bg-white/80 px-3 py-2 shadow-[0_10px_24px_rgba(23,57,42,0.08)] backdrop-blur-sm sm:h-20 sm:w-32 md:h-24 md:w-36 lg:h-28 lg:w-40",children:o.jsx("img",{src:t,alt:`Client logo ${n+1}`,className:"h-full w-full object-contain p-1",loading:"lazy"})},`${s.id}-${n}`))})},s.id))})]})});function Sk(s,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Ak(s,t,n){return t&&Sk(s.prototype,t),Object.defineProperty(s,"prototype",{writable:!1}),s}var Hx="(prefers-reduced-motion: reduce)",so=1,Ck=2,wo=3,Lo=4,uc=5,Wu=6,nd=7,Tk={CREATED:so,MOUNTED:Ck,IDLE:wo,MOVING:Lo,SCROLLING:uc,DRAGGING:Wu,DESTROYED:nd};function Di(s){s.length=0}function Os(s,t,n){return Array.prototype.slice.call(s,t,n)}function nt(s){return s.bind.apply(s,[null].concat(Os(arguments,1)))}var V1=setTimeout,sh=function(){};function Vx(s){return requestAnimationFrame(s)}function Ed(s,t){return typeof t===s}function Yl(s){return!Qh(s)&&Ed("object",s)}var Xh=Array.isArray,Y1=nt(Ed,"function"),Ss=nt(Ed,"string"),dc=nt(Ed,"undefined");function Qh(s){return s===null}function G1(s){try{return s instanceof(s.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function pc(s){return Xh(s)?s:[s]}function On(s,t){pc(s).forEach(t)}function Kh(s,t){return s.indexOf(t)>-1}function Hu(s,t){return s.push.apply(s,pc(t)),s}function Li(s,t,n){s&&On(t,function(i){i&&s.classList[n?"add":"remove"](i)})}function fi(s,t){Li(s,Ss(t)?t.split(" "):t,!0)}function fc(s,t){On(t,s.appendChild.bind(s))}function Jh(s,t){On(s,function(n){var i=(t||n).parentNode;i&&i.insertBefore(n,t)})}function Gl(s,t){return G1(s)&&(s.msMatchesSelector||s.matches).call(s,t)}function q1(s,t){var n=s?Os(s.children):[];return t?n.filter(function(i){return Gl(i,t)}):n}function hc(s,t){return t?q1(s,t)[0]:s.firstElementChild}var ql=Object.keys;function ua(s,t,n){return s&&(n?ql(s).reverse():ql(s)).forEach(function(i){i!=="__proto__"&&t(s[i],i)}),s}function Xl(s){return Os(arguments,1).forEach(function(t){ua(t,function(n,i){s[i]=t[i]})}),s}function xs(s){return Os(arguments,1).forEach(function(t){ua(t,function(n,i){Xh(n)?s[i]=n.slice():Yl(n)?s[i]=xs({},Yl(s[i])?s[i]:{},n):s[i]=n})}),s}function Yx(s,t){On(t||ql(s),function(n){delete s[n]})}function hi(s,t){On(s,function(n){On(t,function(i){n&&n.removeAttribute(i)})})}function Oe(s,t,n){Yl(t)?ua(t,function(i,a){Oe(s,a,i)}):On(s,function(i){Qh(n)||n===""?hi(i,t):i.setAttribute(t,String(n))})}function uo(s,t,n){var i=document.createElement(s);return t&&(Ss(t)?fi(i,t):Oe(i,t)),n&&fc(n,i),i}function Xn(s,t,n){if(dc(n))return getComputedStyle(s)[t];Qh(n)||(s.style[t]=""+n)}function Ql(s,t){Xn(s,"display",t)}function X1(s){s.setActive&&s.setActive()||s.focus({preventScroll:!0})}function Qn(s,t){return s.getAttribute(t)}function Gx(s,t){return s&&s.classList.contains(t)}function jn(s){return s.getBoundingClientRect()}function va(s){On(s,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function Q1(s){return hc(new DOMParser().parseFromString(s,"text/html").body)}function Ci(s,t){s.preventDefault(),t&&(s.stopPropagation(),s.stopImmediatePropagation())}function K1(s,t){return s&&s.querySelector(t)}function Zh(s,t){return t?Os(s.querySelectorAll(t)):[]}function Oi(s,t){Li(s,t,!1)}function ah(s){return s.timeStamp}function $s(s){return Ss(s)?s:s?s+"px":""}var mc="splide",$h="data-"+mc;function Cl(s,t){if(!s)throw new Error("["+mc+"] "+(t||""))}var As=Math.min,id=Math.max,sd=Math.floor,Kl=Math.ceil,Ur=Math.abs;function J1(s,t,n){return Ur(s-t)<n}function Vu(s,t,n,i){var a=As(t,n),c=id(t,n);return i?a<s&&s<c:a<=s&&s<=c}function $a(s,t,n){var i=As(t,n),a=id(t,n);return As(id(i,s),a)}function oh(s){return+(s>0)-+(s<0)}function lh(s,t){return On(t,function(n){s=s.replace("%s",""+n)}),s}function em(s){return s<10?"0"+s:""+s}var qx={};function Pk(s){return""+s+em(qx[s]=(qx[s]||0)+1)}function Z1(){var s=[];function t(u,p,f,m){a(u,p,function(g,y,v){var b="addEventListener"in g,_=b?g.removeEventListener.bind(g,y,f,m):g.removeListener.bind(g,f);b?g.addEventListener(y,f,m):g.addListener(f),s.push([g,y,v,f,_])})}function n(u,p,f){a(u,p,function(m,g,y){s=s.filter(function(v){return v[0]===m&&v[1]===g&&v[2]===y&&(!f||v[3]===f)?(v[4](),!1):!0})})}function i(u,p,f){var m,g=!0;return typeof CustomEvent=="function"?m=new CustomEvent(p,{bubbles:g,detail:f}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(p,g,!1,f)),u.dispatchEvent(m),m}function a(u,p,f){On(u,function(m){m&&On(p,function(g){g.split(" ").forEach(function(y){var v=y.split(".");f(m,v[0],v[1])})})})}function c(){s.forEach(function(u){u[4]()}),Di(s)}return{bind:t,unbind:n,dispatch:i,destroy:c}}var Is="mounted",ch="ready",Fi="move",Oo="moved",tm="click",$1="active",ey="inactive",ty="visible",ry="hidden",Ft="refresh",Ar="updated",_o="resize",Sd="resized",ny="drag",iy="dragging",sy="dragged",Ad="scroll",Na="scrolled",Rk="overflow",rm="destroy",ay="arrows:mounted",oy="arrows:updated",ly="pagination:mounted",cy="pagination:updated",nm="navigation:mounted",im="autoplay:play",uy="autoplay:playing",sm="autoplay:pause",am="lazyload:loaded",dy="sk",py="sh",ad="ei";function yt(s){var t=s?s.event.bus:document.createDocumentFragment(),n=Z1();function i(c,u){n.bind(t,pc(c).join(" "),function(p){u.apply(u,Xh(p.detail)?p.detail:[])})}function a(c){n.dispatch(t,c,Os(arguments,1))}return s&&s.event.on(rm,n.destroy),Xl(n,{bus:t,on:i,off:nt(n.unbind,t),emit:a})}function Cd(s,t,n,i){var a=Date.now,c,u=0,p,f=!0,m=0;function g(){if(!f){if(u=s?As((a()-c)/s,1):1,n&&n(u),u>=1&&(t(),c=a(),i&&++m>=i))return v();p=Vx(g)}}function y(C){C||_(),c=a()-(C?u*s:0),f=!1,p=Vx(g)}function v(){f=!0}function b(){c=a(),u=0,n&&n(u)}function _(){p&&cancelAnimationFrame(p),u=0,p=0,f=!0}function w(C){s=C}function k(){return f}return{start:y,rewind:b,pause:v,cancel:_,set:w,isPaused:k}}function Lk(s){var t=s;function n(a){t=a}function i(a){return Kh(pc(a),t)}return{set:n,is:i}}function Ok(s,t){var n=Cd(0,s,null,1);return function(){n.isPaused()&&n.start()}}function Ik(s,t,n){var i=s.state,a=n.breakpoints||{},c=n.reducedMotion||{},u=Z1(),p=[];function f(){var _=n.mediaQuery==="min";ql(a).sort(function(w,k){return _?+w-+k:+k-+w}).forEach(function(w){g(a[w],"("+(_?"min":"max")+"-width:"+w+"px)")}),g(c,Hx),y()}function m(_){_&&u.destroy()}function g(_,w){var k=matchMedia(w);u.bind(k,"change",y),p.push([_,k])}function y(){var _=i.is(nd),w=n.direction,k=p.reduce(function(C,A){return xs(C,A[1].matches?A[0]:{})},{});Yx(n),b(k),n.destroy?s.destroy(n.destroy==="completely"):_?(m(!0),s.mount()):w!==n.direction&&s.refresh()}function v(_){matchMedia(Hx).matches&&(_?xs(n,c):Yx(n,ql(c)))}function b(_,w,k){xs(n,_),w&&xs(Object.getPrototypeOf(n),_),(k||!i.is(so))&&s.emit(Ar,n)}return{setup:f,destroy:m,reduce:v,set:b}}var Td="Arrow",Pd=Td+"Left",Rd=Td+"Right",fy=Td+"Up",hy=Td+"Down",Xx="rtl",Ld="ttb",Pf={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[fy,Rd],ArrowRight:[hy,Pd]};function Mk(s,t,n){function i(c,u,p){p=p||n.direction;var f=p===Xx&&!u?1:p===Ld?0:-1;return Pf[c]&&Pf[c][f]||c.replace(/width|left|right/i,function(m,g){var y=Pf[m.toLowerCase()][f]||m;return g>0?y.charAt(0).toUpperCase()+y.slice(1):y})}function a(c){return c*(n.direction===Xx?1:-1)}return{resolve:i,orient:a}}var Mi="role",po="tabindex",zk="disabled",Jn="aria-",gc=Jn+"controls",my=Jn+"current",Qx=Jn+"selected",Cn=Jn+"label",om=Jn+"labelledby",gy=Jn+"hidden",lm=Jn+"orientation",Jl=Jn+"roledescription",Kx=Jn+"live",Jx=Jn+"busy",Zx=Jn+"atomic",cm=[Mi,po,zk,gc,my,Cn,om,gy,lm,Jl],gi=mc+"__",Ms="is-",Rf=mc,$x=gi+"track",Dk=gi+"list",Od=gi+"slide",xy=Od+"--clone",Fk=Od+"__container",um=gi+"arrows",Id=gi+"arrow",vy=Id+"--prev",yy=Id+"--next",Md=gi+"pagination",by=Md+"__page",Bk=gi+"progress",Uk=Bk+"__bar",Wk=gi+"toggle",Hk=gi+"spinner",Vk=gi+"sr",Yk=Ms+"initialized",ya=Ms+"active",wy=Ms+"prev",_y=Ms+"next",uh=Ms+"visible",dh=Ms+"loading",Ny=Ms+"focus-in",ky=Ms+"overflow",Gk=[ya,uh,wy,_y,dh,Ny,ky],qk={slide:Od,clone:xy,arrows:um,arrow:Id,prev:vy,next:yy,pagination:Md,page:by,spinner:Hk};function Xk(s,t){if(Y1(s.closest))return s.closest(t);for(var n=s;n&&n.nodeType===1&&!Gl(n,t);)n=n.parentElement;return n}var Qk=5,ev=200,jy="touchstart mousedown",Lf="touchmove mousemove",Of="touchend touchcancel mouseup click";function Kk(s,t,n){var i=yt(s),a=i.on,c=i.bind,u=s.root,p=n.i18n,f={},m=[],g=[],y=[],v,b,_;function w(){E(),j(),A()}function k(){a(Ft,C),a(Ft,w),a(Ar,A),c(document,jy+" keydown",function(L){_=L.type==="keydown"},{capture:!0}),c(u,"focusin",function(){Li(u,Ny,!!_)})}function C(L){var B=cm.concat("style");Di(m),Oi(u,g),Oi(v,y),hi([v,b],B),hi(u,L?B:["style",Jl])}function A(){Oi(u,g),Oi(v,y),g=M(Rf),y=M($x),fi(u,g),fi(v,y),Oe(u,Cn,n.label),Oe(u,om,n.labelledby)}function E(){v=P("."+$x),b=hc(v,"."+Dk),Cl(v&&b,"A track/list element is missing."),Hu(m,q1(b,"."+Od+":not(."+xy+")")),ua({arrows:um,pagination:Md,prev:vy,next:yy,bar:Uk,toggle:Wk},function(L,B){f[B]=P("."+L)}),Xl(f,{root:u,track:v,list:b,slides:m})}function j(){var L=u.id||Pk(mc),B=n.role;u.id=L,v.id=v.id||L+"-track",b.id=b.id||L+"-list",!Qn(u,Mi)&&u.tagName!=="SECTION"&&B&&Oe(u,Mi,B),Oe(u,Jl,p.carousel),Oe(b,Mi,"presentation")}function P(L){var B=K1(u,L);return B&&Xk(B,"."+Rf)===u?B:void 0}function M(L){return[L+"--"+n.type,L+"--"+n.direction,n.drag&&L+"--draggable",n.isNavigation&&L+"--nav",L===Rf&&ya]}return Xl(f,{setup:w,mount:k,destroy:C})}var No="slide",Io="loop",xc="fade";function Jk(s,t,n,i){var a=yt(s),c=a.on,u=a.emit,p=a.bind,f=s.Components,m=s.root,g=s.options,y=g.isNavigation,v=g.updateOnMove,b=g.i18n,_=g.pagination,w=g.slideFocus,k=f.Direction.resolve,C=Qn(i,"style"),A=Qn(i,Cn),E=n>-1,j=hc(i,"."+Fk),P;function M(){E||(i.id=m.id+"-slide"+em(t+1),Oe(i,Mi,_?"tabpanel":"group"),Oe(i,Jl,b.slide),Oe(i,Cn,A||lh(b.slideLabel,[t+1,s.length]))),L()}function L(){p(i,"click",nt(u,tm,V)),p(i,"keydown",nt(u,dy,V)),c([Oo,py,Na],Q),c(nm,W),v&&c(Fi,F)}function B(){P=!0,a.destroy(),Oi(i,Gk),hi(i,cm),Oe(i,"style",C),Oe(i,Cn,A||"")}function W(){var X=s.splides.map(function(S){var T=S.splide.Components.Slides.getAt(t);return T?T.slide.id:""}).join(" ");Oe(i,Cn,lh(b.slideX,(E?n:t)+1)),Oe(i,gc,X),Oe(i,Mi,w?"button":""),w&&hi(i,Jl)}function F(){P||Q()}function Q(){if(!P){var X=s.index;D(),J(),Li(i,wy,t===X-1),Li(i,_y,t===X+1)}}function D(){var X=se();X!==Gx(i,ya)&&(Li(i,ya,X),Oe(i,my,y&&X||""),u(X?$1:ey,V))}function J(){var X=ce(),S=!X&&(!se()||E);if(s.state.is([Lo,uc])||Oe(i,gy,S||""),Oe(Zh(i,g.focusableNodes||""),po,S?-1:""),w&&Oe(i,po,S?-1:0),X!==Gx(i,uh)&&(Li(i,uh,X),u(X?ty:ry,V)),!X&&document.activeElement===i){var T=f.Slides.getAt(s.index);T&&X1(T.slide)}}function Z(X,S,T){Xn(T&&j||i,X,S)}function se(){var X=s.index;return X===t||g.cloneStatus&&X===n}function ce(){if(s.is(xc))return se();var X=jn(f.Elements.track),S=jn(i),T=k("left",!0),Y=k("right",!0);return sd(X[T])<=Kl(S[T])&&sd(S[Y])<=Kl(X[Y])}function $(X,S){var T=Ur(X-t);return!E&&(g.rewind||s.is(Io))&&(T=As(T,s.length-T)),T<=S}var V={index:t,slideIndex:n,slide:i,container:j,isClone:E,mount:M,destroy:B,update:Q,style:Z,isWithin:$};return V}function Zk(s,t,n){var i=yt(s),a=i.on,c=i.emit,u=i.bind,p=t.Elements,f=p.slides,m=p.list,g=[];function y(){v(),a(Ft,b),a(Ft,v)}function v(){f.forEach(function(Q,D){w(Q,D,-1)})}function b(){P(function(Q){Q.destroy()}),Di(g)}function _(){P(function(Q){Q.update()})}function w(Q,D,J){var Z=Jk(s,D,J,Q);Z.mount(),g.push(Z),g.sort(function(se,ce){return se.index-ce.index})}function k(Q){return Q?M(function(D){return!D.isClone}):g}function C(Q){var D=t.Controller,J=D.toIndex(Q),Z=D.hasFocus()?1:n.perPage;return M(function(se){return Vu(se.index,J,J+Z-1)})}function A(Q){return M(Q)[0]}function E(Q,D){On(Q,function(J){if(Ss(J)&&(J=Q1(J)),G1(J)){var Z=f[D];Z?Jh(J,Z):fc(m,J),fi(J,n.classes.slide),B(J,nt(c,_o))}}),c(Ft)}function j(Q){va(M(Q).map(function(D){return D.slide})),c(Ft)}function P(Q,D){k(D).forEach(Q)}function M(Q){return g.filter(Y1(Q)?Q:function(D){return Ss(Q)?Gl(D.slide,Q):Kh(pc(Q),D.index)})}function L(Q,D,J){P(function(Z){Z.style(Q,D,J)})}function B(Q,D){var J=Zh(Q,"img"),Z=J.length;Z?J.forEach(function(se){u(se,"load error",function(){--Z||D()})}):D()}function W(Q){return Q?f.length:g.length}function F(){return g.length>n.perPage}return{mount:y,destroy:b,update:_,register:w,get:k,getIn:C,getAt:A,add:E,remove:j,forEach:P,filter:M,style:L,getLength:W,isEnough:F}}function $k(s,t,n){var i=yt(s),a=i.on,c=i.bind,u=i.emit,p=t.Slides,f=t.Direction.resolve,m=t.Elements,g=m.root,y=m.track,v=m.list,b=p.getAt,_=p.style,w,k,C;function A(){E(),c(window,"resize load",Ok(nt(u,_o))),a([Ar,Ft],E),a(_o,j)}function E(){w=n.direction===Ld,Xn(g,"maxWidth",$s(n.width)),Xn(y,f("paddingLeft"),P(!1)),Xn(y,f("paddingRight"),P(!0)),j(!0)}function j(V){var X=jn(g);(V||k.width!==X.width||k.height!==X.height)&&(Xn(y,"height",M()),_(f("marginRight"),$s(n.gap)),_("width",B()),_("height",W(),!0),k=X,u(Sd),C!==(C=$())&&(Li(g,ky,C),u(Rk,C)))}function P(V){var X=n.padding,S=f(V?"right":"left");return X&&$s(X[S]||(Yl(X)?0:X))||"0px"}function M(){var V="";return w&&(V=L(),Cl(V,"height or heightRatio is missing."),V="calc("+V+" - "+P(!1)+" - "+P(!0)+")"),V}function L(){return $s(n.height||jn(v).width*n.heightRatio)}function B(){return n.autoWidth?null:$s(n.fixedWidth)||(w?"":F())}function W(){return $s(n.fixedHeight)||(w?n.autoHeight?null:F():L())}function F(){var V=$s(n.gap);return"calc((100%"+(V&&" + "+V)+")/"+(n.perPage||1)+(V&&" - "+V)+")"}function Q(){return jn(v)[f("width")]}function D(V,X){var S=b(V||0);return S?jn(S.slide)[f("width")]+(X?0:se()):0}function J(V,X){var S=b(V);if(S){var T=jn(S.slide)[f("right")],Y=jn(v)[f("left")];return Ur(T-Y)+(X?0:se())}return 0}function Z(V){return J(s.length-1)-J(0)+D(0,V)}function se(){var V=b(0);return V&&parseFloat(Xn(V.slide,f("marginRight")))||0}function ce(V){return parseFloat(Xn(y,f("padding"+(V?"Right":"Left"))))||0}function $(){return s.is(xc)||Z(!0)>Q()}return{mount:A,resize:j,listSize:Q,slideSize:D,sliderSize:Z,totalSize:J,getPadding:ce,isOverflow:$}}var ej=2;function tj(s,t,n){var i=yt(s),a=i.on,c=t.Elements,u=t.Slides,p=t.Direction.resolve,f=[],m;function g(){a(Ft,y),a([Ar,_o],b),(m=k())&&(_(m),t.Layout.resize(!0))}function y(){v(),g()}function v(){va(f),Di(f),i.destroy()}function b(){var C=k();m!==C&&(m<C||!C)&&i.emit(Ft)}function _(C){var A=u.get().slice(),E=A.length;if(E){for(;A.length<C;)Hu(A,A);Hu(A.slice(-C),A.slice(0,C)).forEach(function(j,P){var M=P<C,L=w(j.slide,P);M?Jh(L,A[0].slide):fc(c.list,L),Hu(f,L),u.register(L,P-C+(M?0:E),j.index)})}}function w(C,A){var E=C.cloneNode(!0);return fi(E,n.classes.clone),E.id=s.root.id+"-clone"+em(A+1),E}function k(){var C=n.clones;if(!s.is(Io))C=0;else if(dc(C)){var A=n[p("fixedWidth")]&&t.Layout.slideSize(0),E=A&&Kl(jn(c.track)[p("width")]/A);C=E||n[p("autoWidth")]&&s.length||n.perPage*ej}return C}return{mount:g,destroy:v}}function rj(s,t,n){var i=yt(s),a=i.on,c=i.emit,u=s.state.set,p=t.Layout,f=p.slideSize,m=p.getPadding,g=p.totalSize,y=p.listSize,v=p.sliderSize,b=t.Direction,_=b.resolve,w=b.orient,k=t.Elements,C=k.list,A=k.track,E;function j(){E=t.Transition,a([Is,Sd,Ar,Ft],P)}function P(){t.Controller.isBusy()||(t.Scroll.cancel(),L(s.index),t.Slides.update())}function M(S,T,Y,ae){S!==T&&V(S>Y)&&(Q(),B(F(Z(),S>Y),!0)),u(Lo),c(Fi,T,Y,S),E.start(T,function(){u(wo),c(Oo,T,Y,S),ae&&ae()})}function L(S){B(J(S,!0))}function B(S,T){if(!s.is(xc)){var Y=T?S:W(S);Xn(C,"transform","translate"+_("X")+"("+Y+"px)"),S!==Y&&c(py)}}function W(S){if(s.is(Io)){var T=D(S),Y=T>t.Controller.getEnd(),ae=T<0;(ae||Y)&&(S=F(S,Y))}return S}function F(S,T){var Y=S-$(T),ae=v();return S-=w(ae*(Kl(Ur(Y)/ae)||1))*(T?1:-1),S}function Q(){B(Z(),!0),E.cancel()}function D(S){for(var T=t.Slides.get(),Y=0,ae=1/0,le=0;le<T.length;le++){var ge=T[le].index,K=Ur(J(ge,!0)-S);if(K<=ae)ae=K,Y=ge;else break}return Y}function J(S,T){var Y=w(g(S-1)-ce(S));return T?se(Y):Y}function Z(){var S=_("left");return jn(C)[S]-jn(A)[S]+w(m(!1))}function se(S){return n.trimSpace&&s.is(No)&&(S=$a(S,0,w(v(!0)-y()))),S}function ce(S){var T=n.focus;return T==="center"?(y()-f(S,!0))/2:+T*f(S)||0}function $(S){return J(S?t.Controller.getEnd():0,!!n.trimSpace)}function V(S){var T=w(F(Z(),S));return S?T>=0:T<=C[_("scrollWidth")]-jn(A)[_("width")]}function X(S,T){T=dc(T)?Z():T;var Y=S!==!0&&w(T)<w($(!1)),ae=S!==!1&&w(T)>w($(!0));return Y||ae}return{mount:j,move:M,jump:L,translate:B,shift:F,cancel:Q,toIndex:D,toPosition:J,getPosition:Z,getLimit:$,exceededLimit:X,reposition:P}}function nj(s,t,n){var i=yt(s),a=i.on,c=i.emit,u=t.Move,p=u.getPosition,f=u.getLimit,m=u.toPosition,g=t.Slides,y=g.isEnough,v=g.getLength,b=n.omitEnd,_=s.is(Io),w=s.is(No),k=nt(Z,!1),C=nt(Z,!0),A=n.start||0,E,j=A,P,M,L;function B(){W(),a([Ar,Ft,ad],W),a(Sd,F)}function W(){P=v(!0),M=n.perMove,L=n.perPage,E=V();var K=$a(A,0,b?E:P-1);K!==A&&(A=K,u.reposition())}function F(){E!==V()&&c(ad)}function Q(K,de,ye){if(!ge()){var xe=J(K),ze=$(xe);ze>-1&&(de||ze!==A)&&(Y(ze),u.move(xe,ze,j,ye))}}function D(K,de,ye,xe){t.Scroll.scroll(K,de,ye,function(){var ze=$(u.toIndex(p()));Y(b?As(ze,E):ze),xe&&xe()})}function J(K){var de=A;if(Ss(K)){var ye=K.match(/([+\-<>])(\d+)?/)||[],xe=ye[1],ze=ye[2];xe==="+"||xe==="-"?de=se(A+ +(""+xe+(+ze||1)),A):xe===">"?de=ze?X(+ze):k(!0):xe==="<"&&(de=C(!0))}else de=_?K:$a(K,0,E);return de}function Z(K,de){var ye=M||(le()?1:L),xe=se(A+ye*(K?-1:1),A,!(M||le()));return xe===-1&&w&&!J1(p(),f(!K),1)?K?0:E:de?xe:$(xe)}function se(K,de,ye){if(y()||le()){var xe=ce(K);xe!==K&&(de=K,K=xe,ye=!1),K<0||K>E?!M&&(Vu(0,K,de,!0)||Vu(E,de,K,!0))?K=X(S(K)):_?K=ye?K<0?-(P%L||L):P:K:n.rewind?K=K<0?E:0:K=-1:ye&&K!==de&&(K=X(S(de)+(K<de?-1:1)))}else K=-1;return K}function ce(K){if(w&&n.trimSpace==="move"&&K!==A)for(var de=p();de===m(K,!0)&&Vu(K,0,s.length-1,!n.rewind);)K<A?--K:++K;return K}function $(K){return _?(K+P)%P||0:K}function V(){for(var K=P-(le()||_&&M?1:L);b&&K-- >0;)if(m(P-1,!0)!==m(K,!0)){K++;break}return $a(K,0,P-1)}function X(K){return $a(le()?K:L*K,0,E)}function S(K){return le()?As(K,E):sd((K>=E?P-1:K)/L)}function T(K){var de=u.toIndex(K);return w?$a(de,0,E):de}function Y(K){K!==A&&(j=A,A=K)}function ae(K){return K?j:A}function le(){return!dc(n.focus)||n.isNavigation}function ge(){return s.state.is([Lo,uc])&&!!n.waitForTransition}return{mount:B,go:Q,scroll:D,getNext:k,getPrev:C,getAdjacent:Z,getEnd:V,setIndex:Y,getIndex:ae,toIndex:X,toPage:S,toDest:T,hasFocus:le,isBusy:ge}}var ij="http://www.w3.org/2000/svg",sj="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Eu=40;function aj(s,t,n){var i=yt(s),a=i.on,c=i.bind,u=i.emit,p=n.classes,f=n.i18n,m=t.Elements,g=t.Controller,y=m.arrows,v=m.track,b=y,_=m.prev,w=m.next,k,C,A={};function E(){P(),a(Ar,j)}function j(){M(),E()}function P(){var D=n.arrows;D&&!(_&&w)&&W(),_&&w&&(Xl(A,{prev:_,next:w}),Ql(b,D?"":"none"),fi(b,C=um+"--"+n.direction),D&&(L(),Q(),Oe([_,w],gc,v.id),u(ay,_,w)))}function M(){i.destroy(),Oi(b,C),k?(va(y?[_,w]:b),_=w=null):hi([_,w],cm)}function L(){a([Is,Oo,Ft,Na,ad],Q),c(w,"click",nt(B,">")),c(_,"click",nt(B,"<"))}function B(D){g.go(D,!0)}function W(){b=y||uo("div",p.arrows),_=F(!0),w=F(!1),k=!0,fc(b,[_,w]),!y&&Jh(b,v)}function F(D){var J='<button class="'+p.arrow+" "+(D?p.prev:p.next)+'" type="button"><svg xmlns="'+ij+'" viewBox="0 0 '+Eu+" "+Eu+'" width="'+Eu+'" height="'+Eu+'" focusable="false"><path d="'+(n.arrowPath||sj)+'" />';return Q1(J)}function Q(){if(_&&w){var D=s.index,J=g.getPrev(),Z=g.getNext(),se=J>-1&&D<J?f.last:f.prev,ce=Z>-1&&D>Z?f.first:f.next;_.disabled=J<0,w.disabled=Z<0,Oe(_,Cn,se),Oe(w,Cn,ce),u(oy,_,w,J,Z)}}return{arrows:A,mount:E,destroy:M,update:Q}}var oj=$h+"-interval";function lj(s,t,n){var i=yt(s),a=i.on,c=i.bind,u=i.emit,p=Cd(n.interval,s.go.bind(s,">"),L),f=p.isPaused,m=t.Elements,g=t.Elements,y=g.root,v=g.toggle,b=n.autoplay,_,w,k=b==="pause";function C(){b&&(A(),v&&Oe(v,gc,m.track.id),k||E(),M())}function A(){n.pauseOnHover&&c(y,"mouseenter mouseleave",function(W){_=W.type==="mouseenter",P()}),n.pauseOnFocus&&c(y,"focusin focusout",function(W){w=W.type==="focusin",P()}),v&&c(v,"click",function(){k?E():j(!0)}),a([Fi,Ad,Ft],p.rewind),a(Fi,B)}function E(){f()&&t.Slides.isEnough()&&(p.start(!n.resetProgress),w=_=k=!1,M(),u(im))}function j(W){W===void 0&&(W=!0),k=!!W,M(),f()||(p.pause(),u(sm))}function P(){k||(_||w?j(!1):E())}function M(){v&&(Li(v,ya,!k),Oe(v,Cn,n.i18n[k?"play":"pause"]))}function L(W){var F=m.bar;F&&Xn(F,"width",W*100+"%"),u(uy,W)}function B(W){var F=t.Slides.getAt(W);p.set(F&&+Qn(F.slide,oj)||n.interval)}return{mount:C,destroy:p.cancel,play:E,pause:j,isPaused:f}}function cj(s,t,n){var i=yt(s),a=i.on;function c(){n.cover&&(a(am,nt(p,!0)),a([Is,Ar,Ft],nt(u,!0)))}function u(f){t.Slides.forEach(function(m){var g=hc(m.container||m.slide,"img");g&&g.src&&p(f,g,m)})}function p(f,m,g){g.style("background",f?'center/cover no-repeat url("'+m.src+'")':"",!0),Ql(m,f?"none":"")}return{mount:c,destroy:nt(u,!1)}}var uj=10,dj=600,pj=.6,fj=1.5,hj=800;function mj(s,t,n){var i=yt(s),a=i.on,c=i.emit,u=s.state.set,p=t.Move,f=p.getPosition,m=p.getLimit,g=p.exceededLimit,y=p.translate,v=s.is(No),b,_,w=1;function k(){a(Fi,j),a([Ar,Ft],P)}function C(L,B,W,F,Q){var D=f();if(j(),W&&(!v||!g())){var J=t.Layout.sliderSize(),Z=oh(L)*J*sd(Ur(L)/J)||0;L=p.toPosition(t.Controller.toDest(L%J))+Z}var se=J1(D,L,1);w=1,B=se?0:B||id(Ur(L-D)/fj,hj),_=F,b=Cd(B,A,nt(E,D,L,Q),1),u(uc),c(Ad),b.start()}function A(){u(wo),_&&_(),c(Na)}function E(L,B,W,F){var Q=f(),D=L+(B-L)*M(F),J=(D-Q)*w;y(Q+J),v&&!W&&g()&&(w*=pj,Ur(J)<uj&&C(m(g(!0)),dj,!1,_,!0))}function j(){b&&b.cancel()}function P(){b&&!b.isPaused()&&(j(),A())}function M(L){var B=n.easingFunc;return B?B(L):1-Math.pow(1-L,4)}return{mount:k,destroy:j,scroll:C,cancel:P}}var eo={passive:!1,capture:!0};function gj(s,t,n){var i=yt(s),a=i.on,c=i.emit,u=i.bind,p=i.unbind,f=s.state,m=t.Move,g=t.Scroll,y=t.Controller,v=t.Elements.track,b=t.Media.reduce,_=t.Direction,w=_.resolve,k=_.orient,C=m.getPosition,A=m.exceededLimit,E,j,P,M,L,B=!1,W,F,Q;function D(){u(v,Lf,sh,eo),u(v,Of,sh,eo),u(v,jy,Z,eo),u(v,"click",$,{capture:!0}),u(v,"dragstart",Ci),a([Is,Ar],J)}function J(){var re=n.drag;At(!re),M=re==="free"}function Z(re){if(W=!1,!F){var Ee=ze(re);xe(re.target)&&(Ee||!re.button)&&(y.isBusy()?Ci(re,!0):(Q=Ee?v:window,L=f.is([Lo,uc]),P=null,u(Q,Lf,se,eo),u(Q,Of,ce,eo),m.cancel(),g.cancel(),V(re)))}}function se(re){if(f.is(Wu)||(f.set(Wu),c(ny)),re.cancelable)if(L){m.translate(E+ye(le(re)));var Ee=ge(re)>ev,it=B!==(B=A());(Ee||it)&&V(re),W=!0,c(iy),Ci(re)}else T(re)&&(L=S(re),Ci(re))}function ce(re){f.is(Wu)&&(f.set(wo),c(sy)),L&&(X(re),Ci(re)),p(Q,Lf,se),p(Q,Of,ce),L=!1}function $(re){!F&&W&&Ci(re,!0)}function V(re){P=j,j=re,E=C()}function X(re){var Ee=Y(re),it=ae(Ee),wt=n.rewind&&n.rewindByDrag;b(!1),M?y.scroll(it,0,n.snap):s.is(xc)?y.go(k(oh(Ee))<0?wt?"<":"-":wt?">":"+"):s.is(No)&&B&&wt?y.go(A(!0)?">":"<"):y.go(y.toDest(it),!0),b(!0)}function S(re){var Ee=n.dragMinThreshold,it=Yl(Ee),wt=it&&Ee.mouse||0,q=(it?Ee.touch:+Ee)||10;return Ur(le(re))>(ze(re)?q:wt)}function T(re){return Ur(le(re))>Ur(le(re,!0))}function Y(re){if(s.is(Io)||!B){var Ee=ge(re);if(Ee&&Ee<ev)return le(re)/Ee}return 0}function ae(re){return C()+oh(re)*As(Ur(re)*(n.flickPower||600),M?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function le(re,Ee){return de(re,Ee)-de(K(re),Ee)}function ge(re){return ah(re)-ah(K(re))}function K(re){return j===re&&P||j}function de(re,Ee){return(ze(re)?re.changedTouches[0]:re)["page"+w(Ee?"Y":"X")]}function ye(re){return re/(B&&s.is(No)?Qk:1)}function xe(re){var Ee=n.noDrag;return!Gl(re,"."+by+", ."+Id)&&(!Ee||!Gl(re,Ee))}function ze(re){return typeof TouchEvent<"u"&&re instanceof TouchEvent}function bt(){return L}function At(re){F=re}return{mount:D,disable:At,isDragging:bt}}var xj={Spacebar:" ",Right:Rd,Left:Pd,Up:fy,Down:hy};function dm(s){return s=Ss(s)?s:s.key,xj[s]||s}var tv="keydown";function vj(s,t,n){var i=yt(s),a=i.on,c=i.bind,u=i.unbind,p=s.root,f=t.Direction.resolve,m,g;function y(){v(),a(Ar,b),a(Ar,v),a(Fi,w)}function v(){var C=n.keyboard;C&&(m=C==="global"?window:p,c(m,tv,k))}function b(){u(m,tv)}function _(C){g=C}function w(){var C=g;g=!0,V1(function(){g=C})}function k(C){if(!g){var A=dm(C);A===f(Pd)?s.go("<"):A===f(Rd)&&s.go(">")}}return{mount:y,destroy:b,disable:_}}var Tl=$h+"-lazy",Yu=Tl+"-srcset",yj="["+Tl+"], ["+Yu+"]";function bj(s,t,n){var i=yt(s),a=i.on,c=i.off,u=i.bind,p=i.emit,f=n.lazyLoad==="sequential",m=[Oo,Na],g=[];function y(){n.lazyLoad&&(v(),a(Ft,v))}function v(){Di(g),b(),f?C():(c(m),a(m,_),_())}function b(){t.Slides.forEach(function(A){Zh(A.slide,yj).forEach(function(E){var j=Qn(E,Tl),P=Qn(E,Yu);if(j!==E.src||P!==E.srcset){var M=n.classes.spinner,L=E.parentElement,B=hc(L,"."+M)||uo("span",M,L);g.push([E,A,B]),E.src||Ql(E,"none")}})})}function _(){g=g.filter(function(A){var E=n.perPage*((n.preloadPages||1)+1)-1;return A[1].isWithin(s.index,E)?w(A):!0}),g.length||c(m)}function w(A){var E=A[0];fi(A[1].slide,dh),u(E,"load error",nt(k,A)),Oe(E,"src",Qn(E,Tl)),Oe(E,"srcset",Qn(E,Yu)),hi(E,Tl),hi(E,Yu)}function k(A,E){var j=A[0],P=A[1];Oi(P.slide,dh),E.type!=="error"&&(va(A[2]),Ql(j,""),p(am,j,P),p(_o)),f&&C()}function C(){g.length&&w(g.shift())}return{mount:y,destroy:nt(Di,g),check:_}}function wj(s,t,n){var i=yt(s),a=i.on,c=i.emit,u=i.bind,p=t.Slides,f=t.Elements,m=t.Controller,g=m.hasFocus,y=m.getIndex,v=m.go,b=t.Direction.resolve,_=f.pagination,w=[],k,C;function A(){E(),a([Ar,Ft,ad],A);var F=n.pagination;_&&Ql(_,F?"":"none"),F&&(a([Fi,Ad,Na],W),j(),W(),c(ly,{list:k,items:w},B(s.index)))}function E(){k&&(va(_?Os(k.children):k),Oi(k,C),Di(w),k=null),i.destroy()}function j(){var F=s.length,Q=n.classes,D=n.i18n,J=n.perPage,Z=g()?m.getEnd()+1:Kl(F/J);k=_||uo("ul",Q.pagination,f.track.parentElement),fi(k,C=Md+"--"+L()),Oe(k,Mi,"tablist"),Oe(k,Cn,D.select),Oe(k,lm,L()===Ld?"vertical":"");for(var se=0;se<Z;se++){var ce=uo("li",null,k),$=uo("button",{class:Q.page,type:"button"},ce),V=p.getIn(se).map(function(S){return S.slide.id}),X=!g()&&J>1?D.pageX:D.slideX;u($,"click",nt(P,se)),n.paginationKeyboard&&u($,"keydown",nt(M,se)),Oe(ce,Mi,"presentation"),Oe($,Mi,"tab"),Oe($,gc,V.join(" ")),Oe($,Cn,lh(X,se+1)),Oe($,po,-1),w.push({li:ce,button:$,page:se})}}function P(F){v(">"+F,!0)}function M(F,Q){var D=w.length,J=dm(Q),Z=L(),se=-1;J===b(Rd,!1,Z)?se=++F%D:J===b(Pd,!1,Z)?se=(--F+D)%D:J==="Home"?se=0:J==="End"&&(se=D-1);var ce=w[se];ce&&(X1(ce.button),v(">"+se),Ci(Q,!0))}function L(){return n.paginationDirection||n.direction}function B(F){return w[m.toPage(F)]}function W(){var F=B(y(!0)),Q=B(y());if(F){var D=F.button;Oi(D,ya),hi(D,Qx),Oe(D,po,-1)}if(Q){var J=Q.button;fi(J,ya),Oe(J,Qx,!0),Oe(J,po,"")}c(cy,{list:k,items:w},F,Q)}return{items:w,mount:A,destroy:E,getAt:B,update:W}}var _j=[" ","Enter"];function Nj(s,t,n){var i=n.isNavigation,a=n.slideFocus,c=[];function u(){s.splides.forEach(function(_){_.isParent||(m(s,_.splide),m(_.splide,s))}),i&&g()}function p(){c.forEach(function(_){_.destroy()}),Di(c)}function f(){p(),u()}function m(_,w){var k=yt(_);k.on(Fi,function(C,A,E){w.go(w.is(Io)?E:C)}),c.push(k)}function g(){var _=yt(s),w=_.on;w(tm,v),w(dy,b),w([Is,Ar],y),c.push(_),_.emit(nm,s.splides)}function y(){Oe(t.Elements.list,lm,n.direction===Ld?"vertical":"")}function v(_){s.go(_.index)}function b(_,w){Kh(_j,dm(w))&&(v(_),Ci(w))}return{setup:nt(t.Media.set,{slideFocus:dc(a)?i:a},!0),mount:u,destroy:p,remount:f}}function kj(s,t,n){var i=yt(s),a=i.bind,c=0;function u(){n.wheel&&a(t.Elements.track,"wheel",p,eo)}function p(m){if(m.cancelable){var g=m.deltaY,y=g<0,v=ah(m),b=n.wheelMinThreshold||0,_=n.wheelSleep||0;Ur(g)>b&&v-c>_&&(s.go(y?"<":">"),c=v),f(y)&&Ci(m)}}function f(m){return!n.releaseWheel||s.state.is(Lo)||t.Controller.getAdjacent(m)!==-1}return{mount:u}}var jj=90;function Ej(s,t,n){var i=yt(s),a=i.on,c=t.Elements.track,u=n.live&&!n.isNavigation,p=uo("span",Vk),f=Cd(jj,nt(g,!1));function m(){u&&(v(!t.Autoplay.isPaused()),Oe(c,Zx,!0),p.textContent="…",a(im,nt(v,!0)),a(sm,nt(v,!1)),a([Oo,Na],nt(g,!0)))}function g(b){Oe(c,Jx,b),b?(fc(c,p),f.start()):(va(p),f.cancel())}function y(){hi(c,[Kx,Zx,Jx]),va(p)}function v(b){u&&Oe(c,Kx,b?"off":"polite")}return{mount:m,disable:v,destroy:y}}var Sj=Object.freeze({__proto__:null,Media:Ik,Direction:Mk,Elements:Kk,Slides:Zk,Layout:$k,Clones:tj,Move:rj,Controller:nj,Arrows:aj,Autoplay:lj,Cover:cj,Scroll:mj,Drag:gj,Keyboard:vj,LazyLoad:bj,Pagination:wj,Sync:Nj,Wheel:kj,Live:Ej}),Aj={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},Cj={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:qk,i18n:Aj,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Tj(s,t,n){var i=t.Slides;function a(){yt(s).on([Is,Ft],c)}function c(){i.forEach(function(p){p.style("transform","translateX(-"+100*p.index+"%)")})}function u(p,f){i.style("transition","opacity "+n.speed+"ms "+n.easing),V1(f)}return{mount:a,start:u,cancel:sh}}function Pj(s,t,n){var i=t.Move,a=t.Controller,c=t.Scroll,u=t.Elements.list,p=nt(Xn,u,"transition"),f;function m(){yt(s).bind(u,"transitionend",function(b){b.target===u&&f&&(y(),f())})}function g(b,_){var w=i.toPosition(b,!0),k=i.getPosition(),C=v(b);Ur(w-k)>=1&&C>=1?n.useScroll?c.scroll(w,C,!1,_):(p("transform "+C+"ms "+n.easing),i.translate(w,!0),f=_):(i.jump(b),_())}function y(){p(""),c.cancel()}function v(b){var _=n.rewindSpeed;if(s.is(No)&&_){var w=a.getIndex(!0),k=a.getEnd();if(w===0&&b>=k||w>=k&&b===0)return _}return n.speed}return{mount:m,start:g,cancel:y}}var Rj=(function(){function s(n,i){this.event=yt(),this.Components={},this.state=Lk(so),this.splides=[],this._o={},this._E={};var a=Ss(n)?K1(document,n):n;Cl(a,a+" is invalid."),this.root=a,i=xs({label:Qn(a,Cn)||"",labelledby:Qn(a,om)||""},Cj,s.defaults,i||{});try{xs(i,JSON.parse(Qn(a,$h)))}catch{Cl(!1,"Invalid JSON")}this._o=Object.create(xs({},i))}var t=s.prototype;return t.mount=function(i,a){var c=this,u=this.state,p=this.Components;Cl(u.is([so,nd]),"Already mounted!"),u.set(so),this._C=p,this._T=a||this._T||(this.is(xc)?Tj:Pj),this._E=i||this._E;var f=Xl({},Sj,this._E,{Transition:this._T});return ua(f,function(m,g){var y=m(c,p,c._o);p[g]=y,y.setup&&y.setup()}),ua(p,function(m){m.mount&&m.mount()}),this.emit(Is),fi(this.root,Yk),u.set(wo),this.emit(ch),this},t.sync=function(i){return this.splides.push({splide:i}),i.splides.push({splide:this,isParent:!0}),this.state.is(wo)&&(this._C.Sync.remount(),i.Components.Sync.remount()),this},t.go=function(i){return this._C.Controller.go(i),this},t.on=function(i,a){return this.event.on(i,a),this},t.off=function(i){return this.event.off(i),this},t.emit=function(i){var a;return(a=this.event).emit.apply(a,[i].concat(Os(arguments,1))),this},t.add=function(i,a){return this._C.Slides.add(i,a),this},t.remove=function(i){return this._C.Slides.remove(i),this},t.is=function(i){return this._o.type===i},t.refresh=function(){return this.emit(Ft),this},t.destroy=function(i){i===void 0&&(i=!0);var a=this.event,c=this.state;return c.is(so)?yt(this).on(ch,this.destroy.bind(this,i)):(ua(this._C,function(u){u.destroy&&u.destroy(i)},!0),a.emit(rm),a.destroy(),i&&Di(this.splides),c.set(nd)),this},Ak(s,[{key:"options",get:function(){return this._o},set:function(i){this._C.Media.set(i,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),s})(),pm=Rj;pm.defaults={};pm.STATES=Tk;var rv=[[Is,"onMounted"],[ch,"onReady"],[Fi,"onMove"],[Oo,"onMoved"],[tm,"onClick"],[$1,"onActive"],[ey,"onInactive"],[ty,"onVisible"],[ry,"onHidden"],[Ft,"onRefresh"],[Ar,"onUpdated"],[_o,"onResize"],[Sd,"onResized"],[ny,"onDrag"],[iy,"onDragging"],[sy,"onDragged"],[Ad,"onScroll"],[Na,"onScrolled"],[rm,"onDestroy"],[ay,"onArrowsMounted"],[oy,"onArrowsUpdated"],[ly,"onPaginationMounted"],[cy,"onPaginationUpdated"],[nm,"onNavigationMounted"],[im,"onAutoplayPlay"],[uy,"onAutoplayPlaying"],[sm,"onAutoplayPause"],[am,"onLazyLoadLoaded"]];function fm(...s){return s.filter(Boolean).join(" ")}function od(s){return s!==null&&typeof s=="object"}function ph(s,t){if(Array.isArray(s)&&Array.isArray(t))return s.length===t.length&&!s.some((n,i)=>!ph(n,t[i]));if(od(s)&&od(t)){const n=Object.keys(s),i=Object.keys(t);return n.length===i.length&&!n.some(a=>!Object.prototype.hasOwnProperty.call(t,a)||!ph(s[a],t[a]))}return s===t}function Lj(s,t){return s.length===t.length&&!s.some((n,i)=>n!==t[i])}function Oj(s,t){if(s){const n=Object.keys(s);for(let i=0;i<n.length;i++){const a=n[i];if(a!=="__proto__"&&t(s[a],a)===!1)break}}return s}function fh(s,t){const n=s;return Oj(t,(i,a)=>{Array.isArray(i)?n[a]=i.slice():od(i)?n[a]=fh(od(n[a])?n[a]:{},i):n[a]=i}),n}var Ij=({children:s,className:t,...n})=>ms.createElement("div",{className:fm("splide__track",t),...n},ms.createElement("ul",{className:"splide__list"},s)),Mj=class extends ms.Component{constructor(){super(...arguments),this.splideRef=ms.createRef(),this.slides=[]}componentDidMount(){const{options:s,extensions:t,transition:n}=this.props,{current:i}=this.splideRef;i&&(this.splide=new pm(i,s),this.bind(this.splide),this.splide.mount(t,n),this.options=fh({},s||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:s}=this.props;s&&!ph(this.options,s)&&(this.splide.options=s,this.options=fh({},s));const t=this.getSlides();Lj(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(s){var t;(t=this.splide)==null||t.sync(s)}go(s){var t;(t=this.splide)==null||t.go(s)}getSlides(){var s;if(this.splide){const t=(s=this.splide.Components.Elements)==null?void 0:s.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(s){rv.forEach(([t,n])=>{const i=this.props[n];typeof i=="function"&&s.on(t,(...a)=>{i(s,...a)})})}omit(s,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(s,n)&&delete s[n]}),s}render(){const{className:s,tag:t="div",hasTrack:n=!0,children:i,...a}=this.props;return ms.createElement(t,{className:fm("splide",s),ref:this.splideRef,...this.omit(a,["options",...rv.map(c=>c[1])])},n?ms.createElement(Ij,null,i):i)}},zj=({children:s,className:t,...n})=>ms.createElement("li",{className:fm("splide__slide",t),...n},s);function Dj(s){s.length=0}function hm(s,t,n){return Array.prototype.slice.call(s,t,n)}function zd(s){return s.bind.apply(s,[null].concat(hm(arguments,1)))}function nv(s){return requestAnimationFrame(s)}function mm(s,t){return typeof t===s}var Ey=Array.isArray;zd(mm,"function");zd(mm,"string");zd(mm,"undefined");function Sy(s){return Ey(s)?s:[s]}function iv(s,t){Sy(s).forEach(t)}var Fj=Object.keys;function Bj(s,t,n){if(s){var i=Fj(s);i=i;for(var a=0;a<i.length;a++){var c=i[a];if(c!=="__proto__"&&t(s[c],c)===!1)break}}return s}function Uj(s){return hm(arguments,1).forEach(function(t){Bj(t,function(n,i){s[i]=t[i]})}),s}var Wj=Math.min;function Hj(){var s=[];function t(u,p,f,m){a(u,p,function(g,y,v){var b="addEventListener"in g,_=b?g.removeEventListener.bind(g,y,f,m):g.removeListener.bind(g,f);b?g.addEventListener(y,f,m):g.addListener(f),s.push([g,y,v,f,_])})}function n(u,p,f){a(u,p,function(m,g,y){s=s.filter(function(v){return v[0]===m&&v[1]===g&&v[2]===y&&(!f||v[3]===f)?(v[4](),!1):!0})})}function i(u,p,f){var m,g=!0;return typeof CustomEvent=="function"?m=new CustomEvent(p,{bubbles:g,detail:f}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(p,g,!1,f)),u.dispatchEvent(m),m}function a(u,p,f){iv(u,function(m){m&&iv(p,function(g){g.split(" ").forEach(function(y){var v=y.split(".");f(m,v[0],v[1])})})})}function c(){s.forEach(function(u){u[4]()}),Dj(s)}return{bind:t,unbind:n,dispatch:i,destroy:c}}var sv="move",av="moved",Vj="updated",ov="drag",Yj="dragged",lv="scroll",cv="scrolled",Gj="destroy";function qj(s){var t=s?s.event.bus:document.createDocumentFragment(),n=Hj();function i(c,u){n.bind(t,Sy(c).join(" "),function(p){u.apply(u,Ey(p.detail)?p.detail:[])})}function a(c){n.dispatch(t,c,hm(arguments,1))}return s&&s.event.on(Gj,n.destroy),Uj(n,{bus:t,on:i,off:zd(n.unbind,t),emit:a})}function Ay(s,t,n,i){var a=Date.now,c,u=0,p,f=!0,m=0;function g(){if(!f){if(u=s?Wj((a()-c)/s,1):1,n&&n(u),u>=1&&(t(),c=a(),i&&++m>=i))return v();nv(g)}}function y(C){!C&&_(),c=a()-(C?u*s:0),f=!1,nv(g)}function v(){f=!0}function b(){c=a(),u=0,n&&n(u)}function _(){p&&cancelAnimationFrame(p),u=0,p=0,f=!0}function w(C){s=C}function k(){return f}return{start:y,rewind:b,pause:v,cancel:_,set:w,isPaused:k}}function Xj(s,t){var n;function i(){n||(n=Ay(t,function(){s(),n=null},null,1),n.start())}return i}var Qj="is-active",Kj="slide",Jj="fade";function Cy(s,t,n){return Array.prototype.slice.call(s,t,n)}function gm(s){return s.bind(null,...Cy(arguments,1))}function Dd(s,t){return typeof t===s}function hh(s){return!Ty(s)&&Dd("object",s)}const Zj=Array.isArray;gm(Dd,"function");gm(Dd,"string");const $j=gm(Dd,"undefined");function Ty(s){return s===null}function eE(s){return Zj(s)?s:[s]}function ld(s,t){eE(s).forEach(t)}function tE(s,t,n){s&&ld(t,i=>{i&&s.classList[n?"add":"remove"](i)})}const rE=Object.keys;function Py(s,t,n){if(s){let i=rE(s);i=i;for(let a=0;a<i.length;a++){const c=i[a];if(c!=="__proto__"&&t(s[c],c)===!1)break}}return s}function uv(s){return Cy(arguments,1).forEach(t=>{Py(t,(n,i)=>{s[i]=t[i]})}),s}function nE(s,t){ld(s,n=>{ld(t,i=>{n&&n.removeAttribute(i)})})}function Ry(s,t,n){hh(t)?Py(t,(i,a)=>{Ry(s,a,i)}):ld(s,i=>{Ty(n)||n===""?nE(i,t):i.setAttribute(t,String(n))})}const{min:dv,max:pv}=Math;function iE(s,t,n){const i=dv(t,n),a=pv(t,n);return dv(pv(i,s),a)}const sE={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},aE={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function oE(s,t,n){const{on:i,off:a,bind:c,unbind:u}=qj(s),{translate:p,getPosition:f,toIndex:m,getLimit:g}=t.Move,{setIndex:y,getIndex:v}=t.Controller,{orient:b}=t.Direction,{toggle:_}=t.Elements,{Live:w}=t,{root:k}=s,C=Xj(t.Arrows.update,500);let A={},E,j,P,M,L,B;function W(){const{autoScroll:ae}=n;A=uv({},sE,hh(ae)?ae:{})}function F(){s.is(Jj)||!E&&n.autoScroll!==!1&&(E=Ay(0,V),D(),Z())}function Q(){E&&(E.cancel(),E=null,B=void 0,a([sv,ov,lv,av,cv]),u(k,"mouseenter mouseleave focusin focusout"),u(_,"click"))}function D(){A.pauseOnHover&&c(k,"mouseenter mouseleave",ae=>{P=ae.type==="mouseenter",$()}),A.pauseOnFocus&&c(k,"focusin focusout",ae=>{M=ae.type==="focusin",$()}),A.useToggleButton&&c(_,"click",()=>{j?se():ce()}),i(Vj,J),i([sv,ov,lv],()=>{L=!0,ce(!1)}),i([av,Yj,cv],()=>{L=!1,$()})}function J(){const{autoScroll:ae}=n;ae!==!1?(A=uv({},A,hh(ae)?ae:{}),F()):Q(),E&&!$j(B)&&p(B)}function Z(){A.autoStart&&(document.readyState==="complete"?se():c(window,"load",se))}function se(){Y()&&(E.start(!0),w.disable(!0),M=P=j=!1,T())}function ce(ae=!0){j||(j=ae,T(),Y()||(E.pause(),w.disable(!1)))}function $(){j||(P||M||L?ce(!1):se())}function V(){const ae=f(),le=X(ae);ae!==le?(p(le),S(B=f())):(ce(!1),A.rewind&&s.go(A.speed>0?0:t.Controller.getEnd())),C()}function X(ae){const le=A.speed||1;return ae+=b(le),s.is(Kj)&&(ae=iE(ae,g(!1),g(!0))),ae}function S(ae){const{length:le}=s,ge=(m(ae)+le)%le;ge!==v()&&(y(ge),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function T(){if(_){const ae=j?"startScroll":"pauseScroll";tE(_,Qj,!j),Ry(_,"aria-label",n.i18n[ae]||aE[ae])}}function Y(){return!E||E.isPaused()}return{setup:W,mount:F,destroy:Q,play:se,pause:ce,isPaused:Y}}const Ly=O.forwardRef(({className:s,...t},n)=>o.jsx("div",{ref:n,className:kt("rounded-xl border bg-card text-card-foreground shadow",s),...t}));Ly.displayName="Card";const lE=O.forwardRef(({className:s,...t},n)=>o.jsx("div",{ref:n,className:kt("flex flex-col space-y-1.5 p-6",s),...t}));lE.displayName="CardHeader";const cE=O.forwardRef(({className:s,...t},n)=>o.jsx("div",{ref:n,className:kt("font-semibold leading-none tracking-tight",s),...t}));cE.displayName="CardTitle";const uE=O.forwardRef(({className:s,...t},n)=>o.jsx("div",{ref:n,className:kt("text-sm text-muted-foreground",s),...t}));uE.displayName="CardDescription";const Oy=O.forwardRef(({className:s,...t},n)=>o.jsx("div",{ref:n,className:kt("p-6 pt-0",s),...t}));Oy.displayName="CardContent";const dE=O.forwardRef(({className:s,...t},n)=>o.jsx("div",{ref:n,className:kt("flex items-center p-6 pt-0",s),...t}));dE.displayName="CardFooter";const pE=({title:s,image:t,className:n,showOverlay:i=!1})=>{const a=u=>{const p=u.currentTarget,f=p.getBoundingClientRect(),m=((u.clientX-f.left)/f.width-.5)*20,g=((u.clientY-f.top)/f.height-.5)*20;p.style.setProperty("--pointer-shift-x",`${m}px`),p.style.setProperty("--pointer-shift-y",`${g}px`),p.style.setProperty("--tilt-x",`${(-g/2).toFixed(2)}deg`),p.style.setProperty("--tilt-y",`${(m/2).toFixed(2)}deg`)},c=u=>{u.currentTarget.style.setProperty("--pointer-shift-x","0px"),u.currentTarget.style.setProperty("--pointer-shift-y","0px"),u.currentTarget.style.setProperty("--tilt-x","0deg"),u.currentTarget.style.setProperty("--tilt-y","0deg")};return o.jsx(Ly,{onPointerMove:a,onPointerLeave:c,className:kt("portfolio-card group relative overflow-hidden rounded-[clamp(0.5rem,1.7vw,1.25rem)] border-0 bg-transparent shadow-none",n),children:o.jsxs(Oy,{className:"size-full p-0",children:[o.jsxs("div",{className:"portfolio-media",children:[o.jsx("img",{className:"portfolio-image",alt:s||"Portfolio case",src:t,loading:"lazy"}),o.jsx("div",{className:"portfolio-ink-overlay","aria-hidden":"true"})]}),i&&s&&o.jsx("div",{className:"portfolio-card-overlay absolute inset-0 flex items-end rounded-[clamp(0.5rem,1.7vw,1.25rem)] px-[clamp(0.5rem,1.5vw,1.25rem)] pb-[clamp(1.5rem,3vw,2.75rem)] pt-[clamp(0.5rem,1.5vw,1.25rem)]",children:o.jsx(ln,{to:"/portfolio",className:"mr-20 flex w-full items-center justify-between gap-3 text-left font-medium text-white transition-colors hover:text-[#e1de00]",children:o.jsx("span",{className:"max-w-[calc(100%-3rem)] text-[clamp(0.55rem,1.5vw,1.125rem)] leading-tight",style:{textShadow:"0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 10px rgba(0, 0, 0, 0.75)"},children:s})})})]})})},fE=`
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
`,hE=()=>{const s=O.useId().replaceAll(":",""),t=O.useRef(null);return o.jsxs("section",{className:"portfolio-section relative z-10 w-full overflow-hidden py-16 md:py-20",children:[o.jsx("style",{children:fE}),o.jsx("svg",{className:"portfolio-section__clip-defs","aria-hidden":"true",focusable:"false",children:o.jsxs("defs",{children:[o.jsx("clipPath",{id:`${s}-desktop`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .22 1 0 L1 .86 Q.5 .70 0 .86Z"})}),o.jsx("clipPath",{id:`${s}-tablet`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .17 1 0 L1 .92 Q.5 .75 0 .92Z"})}),o.jsx("clipPath",{id:`${s}-mobile`,clipPathUnits:"objectBoundingBox",children:o.jsx("path",{d:"M0 0 Q.5 .10 1 0 L1 .96 Q.5 .86 0 .96Z"})})]})}),o.jsxs("header",{className:"mx-auto mb-1 flex max-w-[760px] flex-col items-center px-4 text-center sm:px-6 md:mb-1",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[#f7d51d]"}),o.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.25em] text-[#f7d51d]",children:"Portfolio"})]}),o.jsxs("h2",{className:"mt-2 whitespace-nowrap font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]",style:{fontFamily:"'Lato', sans-serif"},children:[o.jsx("span",{className:"text-white",children:"Our"})," ",o.jsx("span",{className:"text-[#92d1bc]",children:"Latest Cases"})]})]}),o.jsx("div",{className:"portfolio-carousel","aria-label":"Latest cases",style:{"--portfolio-clip-path":`url(#${s}-desktop)`,"--portfolio-clip-path-tablet":`url(#${s}-tablet)`,"--portfolio-clip-path-mobile":`url(#${s}-mobile)`},children:o.jsx(Mj,{ref:t,extensions:{AutoScroll:oE},options:{type:"loop",autoScroll:{speed:3,pauseOnHover:!1,pauseOnFocus:!1},perPage:3,perMove:1,focus:"center",fixedWidth:"430px",gap:"-2.8rem",padding:{left:"calc((100% - 430px) / 2)",right:"calc((100% - 430px) / 2)"},drag:!0,snap:!1,keyboard:"focused",pagination:!1,arrows:!1,breakpoints:{1100:{perPage:2,fixedWidth:"380px",gap:"-2.75rem",padding:{left:"calc((100% - 380px) / 2)",right:"calc((100% - 380px) / 2)"}},700:{perPage:1,fixedWidth:"78vw",gap:"-1.5rem",padding:{left:"11vw",right:"11vw"}}}},children:YN.map((n,i)=>o.jsx(zj,{children:o.jsx(pE,{title:n.title,image:n.image,showOverlay:!0,className:"h-[280px] w-full min-[701px]:h-[440px] min-[1101px]:h-[480px]"})},n.title??i))})}),o.jsx("div",{className:"mt-10 flex justify-center sm:mt-12 min-[701px]:mt-14 min-[1101px]:mt-0",children:o.jsxs(jt,{to:"/portfolio",className:"px-6 py-3 text-sm font-semibold",children:["View All Cases",o.jsx(kd,{className:"h-4 w-4 -rotate-90"})]})})]})},mE="/boltfaredeal/assets/Halftone%20Globe%20Handshake%20Emblem-CN4BoFM5.png",vl=[{number:"01",title:"Understand & Plan",description:"We understand your requirements, budget and specifications to plan the right solution.",image:"https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Creative planning workspace with color samples",position:"one",side:"left"},{number:"02",title:"Design & Prepare",description:"Our team works on artwork, material selection and a process checklist to ensure every detail is ready for production.",image:"https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Colorful artwork on a desktop monitor",position:"two",side:"right"},{number:"03",title:"Print & Produce",description:"Using advanced printing technology, we produce with precision, maintaining high quality at every stage.",image:"https://images.pexels.com/photos/33952994/pexels-photo-33952994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Close view of vivid printing material",position:"three",side:"right"},{number:"04",title:"Finish & Deliver",description:"Final finishing, quality checks and secure packaging ensure timely delivery to your location.",image:"https://images.pexels.com/photos/11356987/pexels-photo-11356987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",imageAlt:"Packed boxes ready for delivery",position:"four",side:"left"}],mh=900,gE=`
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
  --num: #6a6a6a;
  --title: var(--gold-dim);
  --desc: #6f6f6f;
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
  color: rgba(255, 255, 255, 0.52);
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
.hww-step.is-active .hww-rule { transform: scaleX(1); }
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
.hww.is-visible .hww-step:not(.is-active) { opacity: 0.52; }

/* ---------- Keyframes ---------- */
@keyframes hww-spin    { to { transform: rotate(360deg); } }
@keyframes hww-float   { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes hww-breathe { 0%, 100% { opacity: 0.75; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }

/* ---------- Tablet & mobile: normal flow, no pinning ---------- */
@media (max-width: ${mh}px) {
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
`;function xE(){return o.jsxs("svg",{className:"hww-fallback",viewBox:"0 0 100 100",role:"img","aria-label":"Colorful dotted globe",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"hwwShade",cx:"34%",cy:"28%",r:"76%",children:[o.jsx("stop",{offset:"0",stopColor:"#273f43"}),o.jsx("stop",{offset:"0.65",stopColor:"#071419"}),o.jsx("stop",{offset:"1",stopColor:"#020607"})]}),o.jsxs("linearGradient",{id:"hwwWaveOne",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0",stopColor:"#e9ff31"}),o.jsx("stop",{offset:"1",stopColor:"#2ddcc8"})]}),o.jsxs("linearGradient",{id:"hwwWaveTwo",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0",stopColor:"#54edff"}),o.jsx("stop",{offset:"1",stopColor:"#1165ff"})]}),o.jsx("pattern",{id:"hwwDots",width:"4",height:"4",patternUnits:"userSpaceOnUse",children:o.jsx("circle",{cx:"1.2",cy:"1.2",r:".65",fill:"#96f6e8",opacity:".7"})}),o.jsx("clipPath",{id:"hwwClip",children:o.jsx("circle",{cx:"50",cy:"50",r:"40"})})]}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"url(#hwwShade)",stroke:"#5ee6e1",strokeOpacity:".3"}),o.jsxs("g",{clipPath:"url(#hwwClip)",children:[o.jsx("path",{d:"M-4 22 Q24 3 56 20 T106 17 L106 39 Q76 29 50 39 T-4 39Z",fill:"url(#hwwWaveOne)",opacity:".95"}),o.jsx("path",{d:"M-4 39 Q22 26 49 42 T106 38 L106 57 Q78 51 51 58 T-4 58Z",fill:"url(#hwwWaveTwo)",opacity:".9"}),o.jsx("path",{d:"M-4 58 Q23 45 49 62 T106 56 L106 79 Q75 68 48 79 T-4 79Z",fill:"#1db9ef",opacity:".82"}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"url(#hwwDots)",opacity:".55"})]}),o.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#d7fff2",strokeOpacity:".35"})]})}const vE=({globeImage:s=mE})=>{const t=O.useRef(null),[n,i]=O.useState(0),[a,c]=O.useState(!1),[u,p]=O.useState(!1);O.useEffect(()=>{let m=0;const g=()=>{m=0;const v=t.current;if(!v||window.innerWidth<=mh)return;const b=Math.max(1,v.offsetHeight-window.innerHeight),_=-v.getBoundingClientRect().top,w=Math.min(.999,Math.max(0,_/b));i(Math.min(vl.length-1,Math.floor(w*vl.length+.6)))},y=()=>{m||(m=requestAnimationFrame(g))};return g(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y),()=>{m&&cancelAnimationFrame(m),window.removeEventListener("scroll",y),window.removeEventListener("resize",y)}},[]),O.useEffect(()=>{const m=t.current;if(!m||typeof IntersectionObserver>"u"){c(!0);return}const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(c(!0),g.disconnect())},{threshold:.15});return g.observe(m),()=>g.disconnect()},[]);const f=O.useCallback(m=>{const g=t.current;if(!g||window.innerWidth<=mh)return;const y=g.getBoundingClientRect().top+window.scrollY,v=g.offsetHeight-window.innerHeight,b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:y+m/vl.length*v,behavior:b?"auto":"smooth"})},[]);return o.jsxs("section",{ref:t,id:"how-we-work",className:`hww ${a?"is-visible":""}`,"aria-labelledby":"hww-title",children:[o.jsx("style",{children:gE}),o.jsxs("div",{className:"hww-stage",children:[o.jsxs("div",{className:"hww-heading",children:[o.jsxs("div",{className:"hww-title-row",children:[o.jsx("span",{className:"hww-eyebrow",children:"How we work"}),o.jsxs("h2",{className:"hww-title",id:"hww-title",children:[o.jsx("span",{className:"hww-word",children:o.jsx("span",{children:"Our"})})," ",o.jsx("span",{className:"hww-word",children:o.jsx("span",{children:"process"})})]})]}),o.jsx("p",{className:"hww-sub",children:"From first thought to final delivery, every detail has a purpose."})]}),o.jsx("div",{className:"hww-globe",children:o.jsxs("div",{className:"hww-globe-inner",children:[o.jsx("div",{className:"hww-glow","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit one","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit two","aria-hidden":"true"}),o.jsx("div",{className:"hww-orbit three","aria-hidden":"true"}),o.jsx("div",{className:"hww-tilt",style:{"--tilt":`${n*-7}deg`},children:u?o.jsx(xE,{}):o.jsx("img",{className:"hww-globe-art",src:s,alt:"Colorful halftone globe emblem",onError:()=>p(!0)})})]})}),o.jsx("div",{className:"hww-step-list",children:vl.map((m,g)=>o.jsxs("article",{className:`hww-step pos-${m.position} ${g===n?"is-active":""}`,style:{"--i":g},"aria-current":g===n?"step":void 0,children:[o.jsxs("div",{className:"hww-copy",children:[o.jsx("span",{className:"hww-num",children:m.number}),o.jsx("h3",{className:"hww-step-title",children:m.title}),o.jsx("div",{className:"hww-rule"}),o.jsx("p",{className:"hww-desc",children:m.description})]}),o.jsx("button",{type:"button",className:"hww-thumb",onClick:()=>f(g),"aria-label":`Go to step ${m.number}: ${m.title}`})]},m.number))}),o.jsxs("div",{className:"hww-status",children:[o.jsx(N_,{size:17,"aria-hidden":"true"}),o.jsx("span",{children:"Scroll to explore"}),o.jsx("span",{className:"hww-dots",children:vl.map((m,g)=>o.jsx("button",{type:"button",className:`hww-dot ${g===n?"is-current":""}`,onClick:()=>f(g),"aria-label":`Show step ${m.number}`},m.number))})]})]})]})},fv=()=>{const[s,t]=O.useState(()=>document.documentElement.getAttribute("data-theme")==="light"),[n,i]=O.useState(0);O.useEffect(()=>{const c=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};c();const u=new MutationObserver(c);return u.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>u.disconnect()},[]);const a=s?$t.heroBgLight:$t.heroBgLarge;return o.jsxs(o.Fragment,{children:[o.jsx(ZN,{heroImage:a}),o.jsx(rk,{isLightTheme:s}),o.jsx(sk,{activeServiceIndex:n,setActiveServiceIndex:i}),o.jsx(ck,{}),o.jsx(vE,{}),o.jsx(Ek,{}),o.jsx(hE,{})]})};function Ai(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Iy(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zl={duration:.5,overwrite:!1,delay:0},xm,ir,pt,Tn=1e8,$e=1/Tn,gh=Math.PI*2,yE=gh/4,bE=0,My=Math.sqrt,wE=Math.cos,_E=Math.sin,er=function(t){return typeof t=="string"},Et=function(t){return typeof t=="function"},Bi=function(t){return typeof t=="number"},vm=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},Wr=function(t){return t!==!1},ym=function(){return typeof window<"u"},Su=function(t){return Et(t)||er(t)},zy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mr=Array.isArray,NE=/random\([^)]+\)/g,kE=/,\s*/g,hv=/(?:-?\.?\d|\.)+/gi,Dy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,If=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fy=/[+-]=-?[.\d]+/,jE=/[^,'"\[\]\s]+/gi,EE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,oi,xh,bm,pn={},cd={},By,Uy=function(t){return(cd=ko(t,pn))&&Gr},wm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},$l=function(t,n){return!n&&console.warn(t)},Wy=function(t,n){return t&&(pn[t]=n)&&cd&&(cd[t]=n)||pn},ec=function(){return 0},SE={suppressEvents:!0,isStart:!0,kill:!1},Gu={suppressEvents:!0,kill:!1},AE={suppressEvents:!0},_m={},ks=[],vh={},Hy,nn={},Mf={},mv=30,qu=[],Nm="",km=function(t){var n=t[0],i,a;if(mi(n)||Et(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(a=qu.length;a--&&!qu[a].targetTest(n););i=qu[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new db(t[a],i)))||t.splice(a,1);return t},da=function(t){return t._gsap||km(Pn(t))[0]._gsap},Vy=function(t,n,i){return(i=t[n])&&Et(i)?t[n]():vm(i)&&t.getAttribute&&t.getAttribute(n)||i},Hr=function(t,n){return(t=t.split(",")).forEach(n)||t},Rt=function(t){return Math.round(t*1e5)/1e5||0},gt=function(t){return Math.round(t*1e7)/1e7||0},fo=function(t,n){var i=n.charAt(0),a=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},CE=function(t,n){for(var i=n.length,a=0;t.indexOf(n[a])<0&&++a<i;);return a<i},ud=function(){var t=ks.length,n=ks.slice(0),i,a;for(vh={},ks.length=0,i=0;i<t;i++)a=n[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},jm=function(t){return!!(t._initted||t._startAt||t.add)},Yy=function(t,n,i,a){ks.length&&!ir&&ud(),t.render(n,i,!!(ir&&n<0&&jm(t))),ks.length&&!ir&&ud()},Gy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(jE).length<2?n:er(t)?t.trim():t},qy=function(t){return t},fn=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},TE=function(t){return function(n,i){for(var a in i)a in n||a==="duration"&&t||a==="ease"||(n[a]=i[a])}},ko=function(t,n){for(var i in n)t[i]=n[i];return t},gv=function s(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=mi(n[i])?s(t[i]||(t[i]={}),n[i]):n[i]);return t},dd=function(t,n){var i={},a;for(a in t)a in n||(i[a]=t[a]);return i},Pl=function(t){var n=t.parent||xt,i=t.keyframes?TE(mr(t.keyframes)):fn;if(Wr(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},PE=function(t,n){for(var i=t.length,a=i===n.length;a&&i--&&t[i]===n[i];);return i<0},Xy=function(t,n,i,a,c){var u=t[a],p;if(c)for(p=n[c];u&&u[c]>p;)u=u._prev;return u?(n._next=u._next,u._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[a]=n,n._prev=u,n.parent=n._dp=t,n},Fd=function(t,n,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var c=n._prev,u=n._next;c?c._next=u:t[i]===n&&(t[i]=u),u?u._prev=c:t[a]===n&&(t[a]=c),n._next=n._prev=n.parent=null},Cs=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},pa=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},RE=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},yh=function(t,n,i,a){return t._startAt&&(ir?t._startAt.revert(Gu):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,a))},LE=function s(t){return!t||t._ts&&s(t.parent)},xv=function(t){return t._repeat?jo(t._tTime,t=t.duration()+t._rDelay)*t:0},jo=function(t,n){var i=Math.floor(t=gt(t/n));return t&&i===t?i-1:i},pd=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Bd=function(t){return t._end=gt(t._start+(t._tDur/Math.abs(t._ts||t._rts||$e)||0))},Ud=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=gt(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Bd(t),i._dirty||pa(i,t)),t},Qy=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=pd(t.rawTime(),n),(!n._dur||vc(0,n.totalDuration(),i)-n._tTime>$e)&&n.render(i,!0)),pa(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-$e}},ci=function(t,n,i,a){return n.parent&&Cs(n),n._start=gt((Bi(i)?i:i||t!==xt?kn(t,i,n):t._time)+n._delay),n._end=gt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Xy(t,n,"_first","_last",t._sort?"_start":0),bh(n)||(t._recent=n),a||Qy(t,n),t._ts<0&&Ud(t,t._tTime),t},Ky=function(t,n){return(pn.ScrollTrigger||wm("scrollTrigger",n))&&pn.ScrollTrigger.create(n,t)},Jy=function(t,n,i,a,c){if(Sm(t,n,c),!t._initted)return 1;if(!i&&t._pt&&!ir&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hy!==an.frame)return ks.push(t),t._lazy=[c,a],1},OE=function s(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||s(n))},bh=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},IE=function(t,n,i,a){var c=t.ratio,u=n<0||!n&&(!t._start&&OE(t)&&!(!t._initted&&bh(t))||(t._ts<0||t._dp._ts<0)&&!bh(t))?0:1,p=t._rDelay,f=0,m,g,y;if(p&&t._repeat&&(f=vc(0,t._tDur,n),g=jo(f,p),t._yoyo&&g&1&&(u=1-u),g!==jo(t._tTime,p)&&(c=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==c||ir||a||t._zTime===$e||!n&&t._zTime){if(!t._initted&&Jy(t,n,a,i,f))return;for(y=t._zTime,t._zTime=n||(i?$e:0),i||(i=n&&!y),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=f,m=t._pt;m;)m.r(u,m.d),m=m._next;n<0&&yh(t,n,i,!0),t._onUpdate&&!i&&cn(t,"onUpdate"),f&&t._repeat&&!i&&t.parent&&cn(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===u&&(u&&Cs(t,1),!i&&!ir&&(cn(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},ME=function(t,n,i){var a;if(i>n)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>n)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<n)return a;a=a._prev}},Eo=function(t,n,i,a){var c=t._repeat,u=gt(n)||0,p=t._tTime/t._tDur;return p&&!a&&(t._time*=u/t._dur),t._dur=u,t._tDur=c?c<0?1e10:gt(u*(c+1)+t._rDelay*c):u,p>0&&!a&&Ud(t,t._tTime=t._tDur*p),t.parent&&Bd(t),i||pa(t.parent,t),t},vv=function(t){return t instanceof Br?pa(t):Eo(t,t._dur)},zE={_start:0,endTime:ec,totalDuration:ec},kn=function s(t,n,i){var a=t.labels,c=t._recent||zE,u=t.duration()>=Tn?c.endTime(!1):t._dur,p,f,m;return er(n)&&(isNaN(n)||n in a)?(f=n.charAt(0),m=n.substr(-1)==="%",p=n.indexOf("="),f==="<"||f===">"?(p>=0&&(n=n.replace(/=/,"")),(f==="<"?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(m?(p<0?c:i).totalDuration()/100:1)):p<0?(n in a||(a[n]=u),a[n]):(f=parseFloat(n.charAt(p-1)+n.substr(p+1)),m&&i&&(f=f/100*(mr(i)?i[0]:i).totalDuration()),p>1?s(t,n.substr(0,p-1),i)+f:u+f)):n==null?u:+n},Rl=function(t,n,i){var a=Bi(n[1]),c=(a?2:1)+(t<2?0:1),u=n[c],p,f;if(a&&(u.duration=n[1]),u.parent=i,t){for(p=u,f=i;f&&!("immediateRender"in p);)p=f.vars.defaults||{},f=Wr(f.vars.inherit)&&f.parent;u.immediateRender=Wr(p.immediateRender),t<2?u.runBackwards=1:u.startAt=n[c-1]}return new Dt(n[0],u,n[c+1])},zs=function(t,n){return t||t===0?n(t):n},vc=function(t,n,i){return i<t?t:i>n?n:i},fr=function(t,n){return!er(t)||!(n=EE.exec(t))?"":n[1]},DE=function(t,n,i){return zs(i,function(a){return vc(t,n,a)})},wh=[].slice,Zy=function(t,n){return t&&mi(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==oi},FE=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(a){var c;return er(a)&&!n||Zy(a,1)?(c=i).push.apply(c,Pn(a)):i.push(a)})||i},Pn=function(t,n,i){return pt&&!n&&pt.selector?pt.selector(t):er(t)&&!i&&(xh||!So())?wh.call((n||bm).querySelectorAll(t),0):mr(t)?FE(t,i):Zy(t)?wh.call(t,0):t?[t]:[]},_h=function(t){return t=Pn(t)[0]||$l("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Pn(n,i.querySelectorAll?i:i===t?$l("Invalid scope")||bm.createElement("div"):t)}},$y=function(t){return t.sort(function(){return .5-Math.random()})},eb=function(t){if(Et(t))return t;var n=mi(t)?t:{each:t},i=fa(n.ease),a=n.from||0,c=parseFloat(n.base)||0,u={},p=a>0&&a<1,f=isNaN(a)||p,m=n.axis,g=a,y=a;return er(a)?g=y={center:.5,edges:.5,end:1}[a]||0:!p&&f&&(g=a[0],y=a[1]),function(v,b,_){var w=(_||n).length,k=u[w],C,A,E,j,P,M,L,B,W;if(!k){if(W=n.grid==="auto"?0:(n.grid||[1,Tn])[1],!W){for(L=-Tn;L<(L=_[W++].getBoundingClientRect().left)&&W<w;);W<w&&W--}for(k=u[w]=[],C=f?Math.min(W,w)*g-.5:a%W,A=W===Tn?0:f?w*y/W-.5:a/W|0,L=0,B=Tn,M=0;M<w;M++)E=M%W-C,j=A-(M/W|0),k[M]=P=m?Math.abs(m==="y"?j:E):My(E*E+j*j),P>L&&(L=P),P<B&&(B=P);a==="random"&&$y(k),k.max=L-B,k.min=B,k.v=w=(parseFloat(n.amount)||parseFloat(n.each)*(W>w?w-1:m?m==="y"?w/W:W:Math.max(W,w/W))||0)*(a==="edges"?-1:1),k.b=w<0?c-w:c,k.u=fr(n.amount||n.each)||0,i=i&&w<0?ZE(i):i}return w=(k[v]-k.min)/k.max||0,gt(k.b+(i?i(w):w)*k.v)+k.u}},Nh=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=gt(Math.round(parseFloat(i)/t)*t*n);return(a-a%1)/n+(Bi(i)?0:fr(i))}},tb=function(t,n){var i=mr(t),a,c;return!i&&mi(t)&&(a=i=t.radius||Tn,t.values?(t=Pn(t.values),(c=!Bi(t[0]))&&(a*=a)):t=Nh(t.increment)),zs(n,i?Et(t)?function(u){return c=t(u),Math.abs(c-u)<=a?c:u}:function(u){for(var p=parseFloat(c?u.x:u),f=parseFloat(c?u.y:0),m=Tn,g=0,y=t.length,v,b;y--;)c?(v=t[y].x-p,b=t[y].y-f,v=v*v+b*b):v=Math.abs(t[y]-p),v<m&&(m=v,g=y);return g=!a||m<=a?t[g]:u,c||g===u||Bi(u)?g:g+fr(u)}:Nh(t))},rb=function(t,n,i,a){return zs(mr(t)?!n:i===!0?!!(i=0):!a,function(){return mr(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*a)/a})},BE=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(a){return n.reduce(function(c,u){return u(c)},a)}},UE=function(t,n){return function(i){return t(parseFloat(i))+(n||fr(i))}},WE=function(t,n,i){return ib(t,n,0,1,i)},nb=function(t,n,i){return zs(i,function(a){return t[~~n(a)]})},HE=function s(t,n,i){var a=n-t;return mr(t)?nb(t,s(0,t.length),n):zs(i,function(c){return(a+(c-t)%a)%a+t})},VE=function s(t,n,i){var a=n-t,c=a*2;return mr(t)?nb(t,s(0,t.length-1),n):zs(i,function(u){return u=(c+(u-t)%c)%c||0,t+(u>a?c-u:u)})},tc=function(t){return t.replace(NE,function(n){var i=n.indexOf("[")+1,a=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(kE);return rb(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},ib=function(t,n,i,a,c){var u=n-t,p=a-i;return zs(c,function(f){return i+((f-t)/u*p||0)})},YE=function s(t,n,i,a){var c=isNaN(t+n)?0:function(b){return(1-b)*t+b*n};if(!c){var u=er(t),p={},f,m,g,y,v;if(i===!0&&(a=1)&&(i=null),u)t={p:t},n={p:n};else if(mr(t)&&!mr(n)){for(g=[],y=t.length,v=y-2,m=1;m<y;m++)g.push(s(t[m-1],t[m]));y--,c=function(_){_*=y;var w=Math.min(v,~~_);return g[w](_-w)},i=n}else a||(t=ko(mr(t)?[]:{},t));if(!g){for(f in n)Em.call(p,t,f,"get",n[f]);c=function(_){return Tm(_,p)||(u?t.p:t)}}}return zs(i,c)},yv=function(t,n,i){var a=t.labels,c=Tn,u,p,f;for(u in a)p=a[u]-n,p<0==!!i&&p&&c>(p=Math.abs(p))&&(f=u,c=p);return f},cn=function(t,n,i){var a=t.vars,c=a[n],u=pt,p=t._ctx,f,m,g;if(c)return f=a[n+"Params"],m=a.callbackScope||t,i&&ks.length&&ud(),p&&(pt=p),g=f?c.apply(m,f):c.call(m),pt=u,g},_l=function(t){return Cs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ir),t.progress()<1&&cn(t,"onInterrupt"),t},oo,sb=[],ab=function(t){if(t)if(t=!t.name&&t.default||t,ym()||t.headless){var n=t.name,i=Et(t),a=n&&!i&&t.init?function(){this._props=[]}:t,c={init:ec,render:Tm,add:Em,kill:lS,modifier:oS,rawVars:0},u={targetTest:0,get:0,getSetter:Cm,aliases:{},register:0};if(So(),t!==a){if(nn[n])return;fn(a,fn(dd(t,c),u)),ko(a.prototype,ko(c,dd(t,u))),nn[a.prop=n]=a,t.targetTest&&(qu.push(a),_m[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Wy(n,a),t.register&&t.register(Gr,a,Vr)}else sb.push(t)},Ze=255,Nl={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},zf=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*Ze+.5|0},ob=function(t,n,i){var a=t?Bi(t)?[t>>16,t>>8&Ze,t&Ze]:0:Nl.black,c,u,p,f,m,g,y,v,b,_;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nl[t])a=Nl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(c=t.charAt(1),u=t.charAt(2),p=t.charAt(3),t="#"+c+c+u+u+p+p+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&Ze,a&Ze,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&Ze,t&Ze]}else if(t.substr(0,3)==="hsl"){if(a=_=t.match(hv),!n)f=+a[0]%360/360,m=+a[1]/100,g=+a[2]/100,u=g<=.5?g*(m+1):g+m-g*m,c=g*2-u,a.length>3&&(a[3]*=1),a[0]=zf(f+1/3,c,u),a[1]=zf(f,c,u),a[2]=zf(f-1/3,c,u);else if(~t.indexOf("="))return a=t.match(Dy),i&&a.length<4&&(a[3]=1),a}else a=t.match(hv)||Nl.transparent;a=a.map(Number)}return n&&!_&&(c=a[0]/Ze,u=a[1]/Ze,p=a[2]/Ze,y=Math.max(c,u,p),v=Math.min(c,u,p),g=(y+v)/2,y===v?f=m=0:(b=y-v,m=g>.5?b/(2-y-v):b/(y+v),f=y===c?(u-p)/b+(u<p?6:0):y===u?(p-c)/b+2:(c-u)/b+4,f*=60),a[0]=~~(f+.5),a[1]=~~(m*100+.5),a[2]=~~(g*100+.5)),i&&a.length<4&&(a[3]=1),a},lb=function(t){var n=[],i=[],a=-1;return t.split(js).forEach(function(c){var u=c.match(ao)||[];n.push.apply(n,u),i.push(a+=u.length+1)}),n.c=i,n},bv=function(t,n,i){var a="",c=(t+a).match(js),u=n?"hsla(":"rgba(",p=0,f,m,g,y;if(!c)return t;if(c=c.map(function(v){return(v=ob(v,n,1))&&u+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(g=lb(t),f=i.c,f.join(a)!==g.c.join(a)))for(m=t.replace(js,"1").split(ao),y=m.length-1;p<y;p++)a+=m[p]+(~f.indexOf(p)?c.shift()||u+"0,0,0,0)":(g.length?g:c.length?c:i).shift());if(!m)for(m=t.split(js),y=m.length-1;p<y;p++)a+=m[p]+c[p];return a+m[y]},js=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nl)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),GE=/hsl[a]?\(/,cb=function(t){var n=t.join(" "),i;if(js.lastIndex=0,js.test(n))return i=GE.test(n),t[1]=bv(t[1],i),t[0]=bv(t[0],i,lb(t[1])),!0},rc,an=(function(){var s=Date.now,t=500,n=33,i=s(),a=i,c=1e3/240,u=c,p=[],f,m,g,y,v,b,_=function w(k){var C=s()-a,A=k===!0,E,j,P,M;if((C>t||C<0)&&(i+=C-n),a+=C,P=a-i,E=P-u,(E>0||A)&&(M=++y.frame,v=P-y.time*1e3,y.time=P=P/1e3,u+=E+(E>=c?4:c-E),j=1),A||(f=m(w)),j)for(b=0;b<p.length;b++)p[b](P,v,M,k)};return y={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(k){return v/(1e3/(k||60))},wake:function(){By&&(!xh&&ym()&&(oi=xh=window,bm=oi.document||{},pn.gsap=Gr,(oi.gsapVersions||(oi.gsapVersions=[])).push(Gr.version),Uy(cd||oi.GreenSockGlobals||!oi.gsap&&oi||{}),sb.forEach(ab)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&y.sleep(),m=g||function(k){return setTimeout(k,u-y.time*1e3+1|0)},rc=1,_(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(f),rc=0,m=ec},lagSmoothing:function(k,C){t=k||1/0,n=Math.min(C||33,t)},fps:function(k){c=1e3/(k||240),u=y.time*1e3+c},add:function(k,C,A){var E=C?function(j,P,M,L){k(j,P,M,L),y.remove(E)}:k;return y.remove(k),p[A?"unshift":"push"](E),So(),E},remove:function(k,C){~(C=p.indexOf(k))&&p.splice(C,1)&&b>=C&&b--},_listeners:p},y})(),So=function(){return!rc&&an.wake()},Ve={},qE=/^[\d.\-M][\d.\-,\s]/,XE=/["']/g,QE=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),a=i[0],c=1,u=i.length,p,f,m;c<u;c++)f=i[c],p=c!==u-1?f.lastIndexOf(","):f.length,m=f.substr(0,p),n[a]=isNaN(m)?m.replace(XE,"").trim():+m,a=f.substr(p+1).trim();return n},KE=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",n);return t.substring(n,~a&&a<i?t.indexOf(")",i+1):i)},JE=function(t){var n=(t+"").split("("),i=Ve[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[QE(n[1])]:KE(t).split(",").map(Gy)):Ve._CE&&qE.test(t)?Ve._CE("",t):i},ZE=function(t){return function(n){return 1-t(1-n)}},fa=function(t,n){return t&&(Et(t)?t:Ve[t]||JE(t))||n},ka=function(t,n,i,a){i===void 0&&(i=function(f){return 1-n(1-f)}),a===void 0&&(a=function(f){return f<.5?n(f*2)/2:1-n((1-f)*2)/2});var c={easeIn:n,easeOut:i,easeInOut:a},u;return Hr(t,function(p){Ve[p]=pn[p]=c,Ve[u=p.toLowerCase()]=i;for(var f in c)Ve[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Ve[p+"."+f]=c[f]}),c},ub=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Df=function s(t,n,i){var a=n>=1?n:1,c=(i||(t?.3:.45))/(n<1?n:1),u=c/gh*(Math.asin(1/a)||0),p=function(g){return g===1?1:a*Math.pow(2,-10*g)*_E((g-u)*c)+1},f=t==="out"?p:t==="in"?function(m){return 1-p(1-m)}:ub(p);return c=gh/c,f.config=function(m,g){return s(t,m,g)},f},Ff=function s(t,n){n===void 0&&(n=1.70158);var i=function(u){return u?--u*u*((n+1)*u+n)+1:0},a=t==="out"?i:t==="in"?function(c){return 1-i(1-c)}:ub(i);return a.config=function(c){return s(t,c)},a};Hr("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var n=t<5?t+1:t;ka(s+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;ka("Elastic",Df("in"),Df("out"),Df());(function(s,t){var n=1/t,i=2*n,a=2.5*n,c=function(p){return p<n?s*p*p:p<i?s*Math.pow(p-1.5/t,2)+.75:p<a?s*(p-=2.25/t)*p+.9375:s*Math.pow(p-2.625/t,2)+.984375};ka("Bounce",function(u){return 1-c(1-u)},c)})(7.5625,2.75);ka("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ka("Circ",function(s){return-(My(1-s*s)-1)});ka("Sine",function(s){return s===1?1:-wE(s*yE)+1});ka("Back",Ff("in"),Ff("out"),Ff());Ve.SteppedEase=Ve.steps=pn.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,a=t+(n?0:1),c=n?1:0,u=1-$e;return function(p){return((a*vc(0,u,p)|0)+c)*i}}};Zl.ease=Ve["quad.out"];Hr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Nm+=s+","+s+"Params,"});var db=function(t,n){this.id=bE++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Vy,this.set=n?n.getSetter:Cm},nc=(function(){function s(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Eo(this,+n.duration,1,1),this.data=n.data,pt&&(this._ctx=pt,pt.data.push(this)),rc||an.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Eo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if(So(),!arguments.length)return this._tTime;var c=this._dp;if(c&&c.smoothChildTiming&&this._ts){for(Ud(this,i),!c._dp||c.parent||Qy(c,this);c&&c.parent;)c.parent._time!==c._start+(c._ts>=0?c._tTime/c._ts:(c.totalDuration()-c._tTime)/-c._ts)&&c.totalTime(c._tTime,!0),c=c.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Yy(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+xv(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+xv(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var c=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*c,a):this._repeat?jo(this._tTime,c)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===i)return this;var c=this.parent&&this._ts?pd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-$e?0:this._rts,this.totalTime(vc(-Math.abs(this._delay),this.totalDuration(),c),a!==!1),Bd(this),RE(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(So(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=gt(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&ci(a,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Wr(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pd(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=AE);var a=ir;return ir=i,jm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ir=a,this},t.globalTime=function(i){for(var a=this,c=arguments.length?i:a.rawTime();a;)c=a._start+c/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):c},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,vv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,vv(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(kn(this,i),Wr(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,Wr(a)),this._dur||(this._zTime=-$e),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-$e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,c;return!!(!i||this._ts&&this._initted&&i.isActive()&&(c=i.rawTime(!0))>=a&&c<this.endTime(!0)-$e)},t.eventCallback=function(i,a,c){var u=this.vars;return arguments.length>1?(a?(u[i]=a,c&&(u[i+"Params"]=c),i==="onUpdate"&&(this._onUpdate=a)):delete u[i],this):u[i]},t.then=function(i){var a=this,c=a._prom;return new Promise(function(u){var p=Et(i)?i:qy,f=function(){var g=a.then;a.then=null,c&&c(),Et(p)&&(p=p(a))&&(p.then||p===a)&&(a.then=g),u(p),a.then=g};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?f():a._prom=f})},t.kill=function(){_l(this)},s})();fn(nc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Br=(function(s){Iy(t,s);function t(i,a){var c;return i===void 0&&(i={}),c=s.call(this,i)||this,c.labels={},c.smoothChildTiming=!!i.smoothChildTiming,c.autoRemoveChildren=!!i.autoRemoveChildren,c._sort=Wr(i.sortChildren),xt&&ci(i.parent||xt,Ai(c),a),i.reversed&&c.reverse(),i.paused&&c.paused(!0),i.scrollTrigger&&Ky(Ai(c),i.scrollTrigger),c}var n=t.prototype;return n.to=function(a,c,u){return Rl(0,arguments,this),this},n.from=function(a,c,u){return Rl(1,arguments,this),this},n.fromTo=function(a,c,u,p){return Rl(2,arguments,this),this},n.set=function(a,c,u){return c.duration=0,c.parent=this,Pl(c).repeatDelay||(c.repeat=0),c.immediateRender=!!c.immediateRender,new Dt(a,c,kn(this,u),1),this},n.call=function(a,c,u){return ci(this,Dt.delayedCall(0,a,c),u)},n.staggerTo=function(a,c,u,p,f,m,g){return u.duration=c,u.stagger=u.stagger||p,u.onComplete=m,u.onCompleteParams=g,u.parent=this,new Dt(a,u,kn(this,f)),this},n.staggerFrom=function(a,c,u,p,f,m,g){return u.runBackwards=1,Pl(u).immediateRender=Wr(u.immediateRender),this.staggerTo(a,c,u,p,f,m,g)},n.staggerFromTo=function(a,c,u,p,f,m,g,y){return p.startAt=u,Pl(p).immediateRender=Wr(p.immediateRender),this.staggerTo(a,c,p,f,m,g,y)},n.render=function(a,c,u){var p=this._time,f=this._dirty?this.totalDuration():this._tDur,m=this._dur,g=a<=0?0:gt(a),y=this._zTime<0!=a<0&&(this._initted||!m),v,b,_,w,k,C,A,E,j,P,M,L;if(this!==xt&&g>f&&a>=0&&(g=f),g!==this._tTime||u||y){if(p!==this._time&&m&&(g+=this._time-p,a+=this._time-p),v=g,j=this._start,E=this._ts,C=!E,y&&(m||(p=this._zTime),(a||!c)&&(this._zTime=a)),this._repeat){if(M=this._yoyo,k=m+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(k*100+a,c,u);if(v=gt(g%k),g===f?(w=this._repeat,v=m):(P=gt(g/k),w=~~P,w&&w===P&&(v=m,w--),v>m&&(v=m)),P=jo(this._tTime,k),!p&&this._tTime&&P!==w&&this._tTime-P*k-this._dur<=0&&(P=w),M&&w&1&&(v=m-v,L=1),w!==P&&!this._lock){var B=M&&P&1,W=B===(M&&w&1);if(w<P&&(B=!B),p=B?0:g%m?m:g,this._lock=1,this.render(p||(L?0:gt(w*k)),c,!m)._lock=0,this._tTime=g,!c&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,P=w),p&&p!==this._time||C!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(m=this._dur,f=this._tDur,W&&(this._lock=2,p=B?m:-1e-4,this.render(p,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!C)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=ME(this,gt(p),gt(v)),A&&(g-=v-(v=A._start))),this._tTime=g,this._time=v,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,p=0),!p&&g&&m&&!c&&!P&&(cn(this,"onStart"),this._tTime!==g))return this;if(v>=p&&a>=0)for(b=this._first;b;){if(_=b._next,(b._act||v>=b._start)&&b._ts&&A!==b){if(b.parent!==this)return this.render(a,c,u);if(b.render(b._ts>0?(v-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(v-b._start)*b._ts,c,u),v!==this._time||!this._ts&&!C){A=0,_&&(g+=this._zTime=-$e);break}}b=_}else{b=this._last;for(var F=a<0?a:v;b;){if(_=b._prev,(b._act||F<=b._end)&&b._ts&&A!==b){if(b.parent!==this)return this.render(a,c,u);if(b.render(b._ts>0?(F-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(F-b._start)*b._ts,c,u||ir&&jm(b)),v!==this._time||!this._ts&&!C){A=0,_&&(g+=this._zTime=F?-$e:$e);break}}b=_}}if(A&&!c&&(this.pause(),A.render(v>=p?0:-$e)._zTime=v>=p?1:-1,this._ts))return this._start=j,Bd(this),this.render(a,c,u);this._onUpdate&&!c&&cn(this,"onUpdate",!0),(g===f&&this._tTime>=this.totalDuration()||!g&&p)&&(j===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((a||!m)&&(g===f&&this._ts>0||!g&&this._ts<0)&&Cs(this,1),!c&&!(a<0&&!p)&&(g||p||!f)&&(cn(this,g===f&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<f&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(a,c){var u=this;if(Bi(c)||(c=kn(this,c,a)),!(a instanceof nc)){if(mr(a))return a.forEach(function(p){return u.add(p,c)}),this;if(er(a))return this.addLabel(a,c);if(Et(a))a=Dt.delayedCall(0,a);else return this}return this!==a?ci(this,a,c):this},n.getChildren=function(a,c,u,p){a===void 0&&(a=!0),c===void 0&&(c=!0),u===void 0&&(u=!0),p===void 0&&(p=-Tn);for(var f=[],m=this._first;m;)m._start>=p&&(m instanceof Dt?c&&f.push(m):(u&&f.push(m),a&&f.push.apply(f,m.getChildren(!0,c,u)))),m=m._next;return f},n.getById=function(a){for(var c=this.getChildren(1,1,1),u=c.length;u--;)if(c[u].vars.id===a)return c[u]},n.remove=function(a){return er(a)?this.removeLabel(a):Et(a)?this.killTweensOf(a):(a.parent===this&&Fd(this,a),a===this._recent&&(this._recent=this._last),pa(this))},n.totalTime=function(a,c){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gt(an.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),s.prototype.totalTime.call(this,a,c),this._forcing=0,this):this._tTime},n.addLabel=function(a,c){return this.labels[a]=kn(this,c),this},n.removeLabel=function(a){return delete this.labels[a],this},n.addPause=function(a,c,u){var p=Dt.delayedCall(0,c||ec,u);return p.data="isPause",this._hasPause=1,ci(this,p,kn(this,a))},n.removePause=function(a){var c=this._first;for(a=kn(this,a);c;)c._start===a&&c.data==="isPause"&&Cs(c),c=c._next},n.killTweensOf=function(a,c,u){for(var p=this.getTweensOf(a,u),f=p.length;f--;)vs!==p[f]&&p[f].kill(a,c);return this},n.getTweensOf=function(a,c){for(var u=[],p=Pn(a),f=this._first,m=Bi(c),g;f;)f instanceof Dt?CE(f._targets,p)&&(m?(!vs||f._initted&&f._ts)&&f.globalTime(0)<=c&&f.globalTime(f.totalDuration())>c:!c||f.isActive())&&u.push(f):(g=f.getTweensOf(p,c)).length&&u.push.apply(u,g),f=f._next;return u},n.tweenTo=function(a,c){c=c||{};var u=this,p=kn(u,a),f=c,m=f.startAt,g=f.onStart,y=f.onStartParams,v=f.immediateRender,b,_=Dt.to(u,fn({ease:c.ease||"none",lazy:!1,immediateRender:!1,time:p,overwrite:"auto",duration:c.duration||Math.abs((p-(m&&"time"in m?m.time:u._time))/u.timeScale())||$e,onStart:function(){if(u.pause(),!b){var k=c.duration||Math.abs((p-(m&&"time"in m?m.time:u._time))/u.timeScale());_._dur!==k&&Eo(_,k,0,1).render(_._time,!0,!0),b=1}g&&g.apply(_,y||[])}},c));return v?_.render(0):_},n.tweenFromTo=function(a,c,u){return this.tweenTo(c,fn({startAt:{time:kn(this,a)}},u))},n.recent=function(){return this._recent},n.nextLabel=function(a){return a===void 0&&(a=this._time),yv(this,kn(this,a))},n.previousLabel=function(a){return a===void 0&&(a=this._time),yv(this,kn(this,a),1)},n.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+$e)},n.shiftChildren=function(a,c,u){u===void 0&&(u=0);var p=this._first,f=this.labels,m;for(a=gt(a);p;)p._start>=u&&(p._start+=a,p._end+=a),p=p._next;if(c)for(m in f)f[m]>=u&&(f[m]+=a);return pa(this)},n.invalidate=function(a){var c=this._first;for(this._lock=0;c;)c.invalidate(a),c=c._next;return s.prototype.invalidate.call(this,a)},n.clear=function(a){a===void 0&&(a=!0);for(var c=this._first,u;c;)u=c._next,this.remove(c),c=u;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),pa(this)},n.totalDuration=function(a){var c=0,u=this,p=u._last,f=Tn,m,g,y;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-a:a));if(u._dirty){for(y=u.parent;p;)m=p._prev,p._dirty&&p.totalDuration(),g=p._start,g>f&&u._sort&&p._ts&&!u._lock?(u._lock=1,ci(u,p,g-p._delay,1)._lock=0):f=g,g<0&&p._ts&&(c-=g,(!y&&!u._dp||y&&y.smoothChildTiming)&&(u._start+=gt(g/u._ts),u._time-=g,u._tTime-=g),u.shiftChildren(-g,!1,-1/0),f=0),p._end>c&&p._ts&&(c=p._end),p=m;Eo(u,u===xt&&u._time>c?u._time:c,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(a){if(xt._ts&&(Yy(xt,pd(a,xt)),Hy=an.frame),an.frame>=mv){mv+=dn.autoSleep||120;var c=xt._first;if((!c||!c._ts)&&dn.autoSleep&&an._listeners.length<2){for(;c&&!c._ts;)c=c._next;c||an.sleep()}}},t})(nc);fn(Br.prototype,{_lock:0,_hasPause:0,_forcing:0});var $E=function(t,n,i,a,c,u,p){var f=new Vr(this._pt,t,n,0,1,xb,null,c),m=0,g=0,y,v,b,_,w,k,C,A;for(f.b=i,f.e=a,i+="",a+="",(C=~a.indexOf("random("))&&(a=tc(a)),u&&(A=[i,a],u(A,t,n),i=A[0],a=A[1]),v=i.match(If)||[];y=If.exec(a);)_=y[0],w=a.substring(m,y.index),b?b=(b+1)%5:w.substr(-5)==="rgba("&&(b=1),_!==v[g++]&&(k=parseFloat(v[g-1])||0,f._pt={_next:f._pt,p:w||g===1?w:",",s:k,c:_.charAt(1)==="="?fo(k,_)-k:parseFloat(_)-k,m:b&&b<4?Math.round:0},m=If.lastIndex);return f.c=m<a.length?a.substring(m,a.length):"",f.fp=p,(Fy.test(a)||C)&&(f.e=0),this._pt=f,f},Em=function(t,n,i,a,c,u,p,f,m,g){Et(a)&&(a=a(c||0,t,u));var y=t[n],v=i!=="get"?i:Et(y)?m?t[n.indexOf("set")||!Et(t["get"+n.substr(3)])?n:"get"+n.substr(3)](m):t[n]():y,b=Et(y)?m?iS:mb:Am,_;if(er(a)&&(~a.indexOf("random(")&&(a=tc(a)),a.charAt(1)==="="&&(_=fo(v,a)+(fr(v)||0),(_||_===0)&&(a=_))),!g||v!==a||kh)return!isNaN(v*a)&&a!==""?(_=new Vr(this._pt,t,n,+v||0,a-(v||0),typeof y=="boolean"?aS:gb,0,b),m&&(_.fp=m),p&&_.modifier(p,this,t),this._pt=_):(!y&&!(n in t)&&wm(n,a),$E.call(this,t,n,v,a,b,f||dn.stringFilter,m))},eS=function(t,n,i,a,c){if(Et(t)&&(t=Ll(t,c,n,i,a)),!mi(t)||t.style&&t.nodeType||mr(t)||zy(t))return er(t)?Ll(t,c,n,i,a):t;var u={},p;for(p in t)u[p]=Ll(t[p],c,n,i,a);return u},pb=function(t,n,i,a,c,u){var p,f,m,g;if(nn[t]&&(p=new nn[t]).init(c,p.rawVars?n[t]:eS(n[t],a,c,u,i),i,a,u)!==!1&&(i._pt=f=new Vr(i._pt,c,t,0,1,p.render,p,0,p.priority),i!==oo))for(m=i._ptLookup[i._targets.indexOf(c)],g=p._props.length;g--;)m[p._props[g]]=f;return p},vs,kh,Sm=function s(t,n,i){var a=t.vars,c=a.ease,u=a.startAt,p=a.immediateRender,f=a.lazy,m=a.onUpdate,g=a.runBackwards,y=a.yoyoEase,v=a.keyframes,b=a.autoRevert,_=t._dur,w=t._startAt,k=t._targets,C=t.parent,A=C&&C.data==="nested"?C.vars.targets:k,E=t._overwrite==="auto"&&!xm,j=t.timeline,P=a.easeReverse||y,M,L,B,W,F,Q,D,J,Z,se,ce,$,V;if(j&&(!v||!c)&&(c="none"),t._ease=fa(c,Zl.ease),t._rEase=P&&(fa(P)||t._ease),t._from=!j&&!!a.runBackwards,t._from&&(t.ratio=1),!j||v&&!a.stagger){if(J=k[0]?da(k[0]).harness:0,$=J&&a[J.prop],M=dd(a,_m),w&&(w._zTime<0&&w.progress(1),n<0&&g&&p&&!b?w.render(-1,!0):w.revert(g&&_?Gu:SE),w._lazy=0),u){if(Cs(t._startAt=Dt.set(k,fn({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:!w&&Wr(f),startAt:null,delay:0,onUpdate:m&&function(){return cn(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ir||!p&&!b)&&t._startAt.revert(Gu),p&&_&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(g&&_&&!w){if(n&&(p=!1),B=fn({overwrite:!1,data:"isFromStart",lazy:p&&!w&&Wr(f),immediateRender:p,stagger:0,parent:C},M),$&&(B[J.prop]=$),Cs(t._startAt=Dt.set(k,B)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ir?t._startAt.revert(Gu):t._startAt.render(-1,!0)),t._zTime=n,!p)s(t._startAt,$e,$e);else if(!n)return}for(t._pt=t._ptCache=0,f=_&&Wr(f)||f&&!_,L=0;L<k.length;L++){if(F=k[L],D=F._gsap||km(k)[L]._gsap,t._ptLookup[L]=se={},vh[D.id]&&ks.length&&ud(),ce=A===k?L:A.indexOf(F),J&&(Z=new J).init(F,$||M,t,ce,A)!==!1&&(t._pt=W=new Vr(t._pt,F,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(X){se[X]=W}),Z.priority&&(Q=1)),!J||$)for(B in M)nn[B]&&(Z=pb(B,M,t,ce,F,A))?Z.priority&&(Q=1):se[B]=W=Em.call(t,F,B,"get",M[B],ce,A,0,a.stringFilter);t._op&&t._op[L]&&t.kill(F,t._op[L]),E&&t._pt&&(vs=t,xt.killTweensOf(F,se,t.globalTime(n)),V=!t.parent,vs=0),t._pt&&f&&(vh[D.id]=1)}Q&&vb(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!V,v&&n<=0&&j.render(Tn,!0,!0)},tS=function(t,n,i,a,c,u,p,f){var m=(t._pt&&t._ptCache||(t._ptCache={}))[n],g,y,v,b;if(!m)for(m=t._ptCache[n]=[],v=t._ptLookup,b=t._targets.length;b--;){if(g=v[b][n],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==n&&g.fp!==n;)g=g._next;if(!g)return kh=1,t.vars[n]="+=0",Sm(t,p),kh=0,f?$l(n+" not eligible for reset. Try splitting into individual properties"):1;m.push(g)}for(b=m.length;b--;)y=m[b],g=y._pt||y,g.s=(a||a===0)&&!c?a:g.s+(a||0)+u*g.c,g.c=i-g.s,y.e&&(y.e=Rt(i)+fr(y.e)),y.b&&(y.b=g.s+fr(y.b))},rS=function(t,n){var i=t[0]?da(t[0]).harness:0,a=i&&i.aliases,c,u,p,f;if(!a)return n;c=ko({},n);for(u in a)if(u in c)for(f=a[u].split(","),p=f.length;p--;)c[f[p]]=c[u];return c},nS=function(t,n,i,a){var c=n.ease||a||"power1.inOut",u,p;if(mr(n))p=i[t]||(i[t]=[]),n.forEach(function(f,m){return p.push({t:m/(n.length-1)*100,v:f,e:c})});else for(u in n)p=i[u]||(i[u]=[]),u==="ease"||p.push({t:parseFloat(t),v:n[u],e:c})},Ll=function(t,n,i,a,c){return Et(t)?t.call(n,i,a,c):er(t)&&~t.indexOf("random(")?tc(t):t},fb=Nm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hb={};Hr(fb+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return hb[s]=1});var Dt=(function(s){Iy(t,s);function t(i,a,c,u){var p;typeof a=="number"&&(c.duration=a,a=c,c=null),p=s.call(this,u?a:Pl(a))||this;var f=p.vars,m=f.duration,g=f.delay,y=f.immediateRender,v=f.stagger,b=f.overwrite,_=f.keyframes,w=f.defaults,k=f.scrollTrigger,C=a.parent||xt,A=(mr(i)||zy(i)?Bi(i[0]):"length"in a)?[i]:Pn(i),E,j,P,M,L,B,W,F;if(p._targets=A.length?km(A):$l("GSAP target "+i+" not found. https://gsap.com",!dn.nullTargetWarn)||[],p._ptLookup=[],p._overwrite=b,_||v||Su(m)||Su(g)){a=p.vars;var Q=a.easeReverse||a.yoyoEase;if(E=p.timeline=new Br({data:"nested",defaults:w||{},targets:C&&C.data==="nested"?C.vars.targets:A}),E.kill(),E.parent=E._dp=Ai(p),E._start=0,v||Su(m)||Su(g)){if(M=A.length,W=v&&eb(v),mi(v))for(L in v)~fb.indexOf(L)&&(F||(F={}),F[L]=v[L]);for(j=0;j<M;j++)P=dd(a,hb),P.stagger=0,Q&&(P.easeReverse=Q),F&&ko(P,F),B=A[j],P.duration=+Ll(m,Ai(p),j,B,A),P.delay=(+Ll(g,Ai(p),j,B,A)||0)-p._delay,!v&&M===1&&P.delay&&(p._delay=g=P.delay,p._start+=g,P.delay=0),E.to(B,P,W?W(j,B,A):0),E._ease=Ve.none;E.duration()?m=g=0:p.timeline=0}else if(_){Pl(fn(E.vars.defaults,{ease:"none"})),E._ease=fa(_.ease||a.ease||"none");var D=0,J,Z,se;if(mr(_))_.forEach(function(ce){return E.to(A,ce,">")}),E.duration();else{P={};for(L in _)L==="ease"||L==="easeEach"||nS(L,_[L],P,_.easeEach);for(L in P)for(J=P[L].sort(function(ce,$){return ce.t-$.t}),D=0,j=0;j<J.length;j++)Z=J[j],se={ease:Z.e,duration:(Z.t-(j?J[j-1].t:0))/100*m},se[L]=Z.v,E.to(A,se,D),D+=se.duration;E.duration()<m&&E.to({},{duration:m-E.duration()})}}m||p.duration(m=E.duration())}else p.timeline=0;return b===!0&&!xm&&(vs=Ai(p),xt.killTweensOf(A),vs=0),ci(C,Ai(p),c),a.reversed&&p.reverse(),a.paused&&p.paused(!0),(y||!m&&!_&&p._start===gt(C._time)&&Wr(y)&&LE(Ai(p))&&C.data!=="nested")&&(p._tTime=-$e,p.render(Math.max(0,-g)||0)),k&&Ky(Ai(p),k),p}var n=t.prototype;return n.render=function(a,c,u){var p=this._time,f=this._tDur,m=this._dur,g=a<0,y=a>f-$e&&!g?f:a<$e?0:a,v,b,_,w,k,C,A,E;if(!m)IE(this,a,c,u);else if(y!==this._tTime||!a||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(v=y,E=this.timeline,this._repeat){if(w=m+this._rDelay,this._repeat<-1&&g)return this.totalTime(w*100+a,c,u);if(v=gt(y%w),y===f?(_=this._repeat,v=m):(k=gt(y/w),_=~~k,_&&_===k?(v=m,_--):v>m&&(v=m)),C=this._yoyo&&_&1,C&&(v=m-v),k=jo(this._tTime,w),v===p&&!u&&this._initted&&_===k)return this._tTime=y,this;_!==k&&this.vars.repeatRefresh&&!C&&!this._lock&&v!==w&&this._initted&&(this._lock=u=1,this.render(gt(w*_),!0).invalidate()._lock=0)}if(!this._initted){if(Jy(this,g?a:v,u,c,y))return this._tTime=0,this;if(p!==this._time&&!(u&&this.vars.repeatRefresh&&_!==k))return this;if(m!==this._dur)return this.render(a,c,u)}if(this._rEase){var j=v<p;if(j!==this._inv){var P=j?p:m-p;this._inv=j,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=p,this._invRecip=P?(j?-1:1)/P:0,this._invScale=j?-this.ratio:1-this.ratio,this._invEase=j?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((v-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(v/m);if(this._from&&(this.ratio=A=1-A),this._tTime=y,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),!p&&y&&!c&&!k&&(cn(this,"onStart"),this._tTime!==y))return this;for(b=this._pt;b;)b.r(A,b.d),b=b._next;E&&E.render(a<0?a:E._dur*E._ease(v/this._dur),c,u)||this._startAt&&(this._zTime=a),this._onUpdate&&!c&&(g&&yh(this,a,c,u),cn(this,"onUpdate")),this._repeat&&_!==k&&this.vars.onRepeat&&!c&&this.parent&&cn(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(g&&!this._onUpdate&&yh(this,a,!0,!0),(a||!m)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&Cs(this,1),!c&&!(g&&!p)&&(y||p||C)&&(cn(this,y===f?"onComplete":"onReverseComplete",!0),this._prom&&!(y<f&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),s.prototype.invalidate.call(this,a)},n.resetTo=function(a,c,u,p,f){rc||an.wake(),this._ts||this.play();var m=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||Sm(this,m),g=this._ease(m/this._dur),tS(this,a,c,u,p,g,m,f)?this.resetTo(a,c,u,p,1):(Ud(this,0),this.parent||Xy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(a,c){if(c===void 0&&(c="all"),!a&&(!c||c==="all"))return this._lazy=this._pt=0,this.parent?_l(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ir),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(a,c,vs&&vs.vars.overwrite!==!0)._first||_l(this),this.parent&&u!==this.timeline.totalDuration()&&Eo(this,this._dur*this.timeline._tDur/u,0,1),this}var p=this._targets,f=a?Pn(a):p,m=this._ptLookup,g=this._pt,y,v,b,_,w,k,C;if((!c||c==="all")&&PE(p,f))return c==="all"&&(this._pt=0),_l(this);for(y=this._op=this._op||[],c!=="all"&&(er(c)&&(w={},Hr(c,function(A){return w[A]=1}),c=w),c=rS(p,c)),C=p.length;C--;)if(~f.indexOf(p[C])){v=m[C],c==="all"?(y[C]=c,_=v,b={}):(b=y[C]=y[C]||{},_=c);for(w in _)k=v&&v[w],k&&((!("kill"in k.d)||k.d.kill(w)===!0)&&Fd(this,k,"_pt"),delete v[w]),b!=="all"&&(b[w]=1)}return this._initted&&!this._pt&&g&&_l(this),this},t.to=function(a,c){return new t(a,c,arguments[2])},t.from=function(a,c){return Rl(1,arguments)},t.delayedCall=function(a,c,u,p){return new t(c,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:c,onReverseComplete:c,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:p})},t.fromTo=function(a,c,u){return Rl(2,arguments)},t.set=function(a,c){return c.duration=0,c.repeatDelay||(c.repeat=0),new t(a,c)},t.killTweensOf=function(a,c,u){return xt.killTweensOf(a,c,u)},t})(nc);fn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hr("staggerTo,staggerFrom,staggerFromTo",function(s){Dt[s]=function(){var t=new Br,n=wh.call(arguments,0);return n.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,n)}});var Am=function(t,n,i){return t[n]=i},mb=function(t,n,i){return t[n](i)},iS=function(t,n,i,a){return t[n](a.fp,i)},sS=function(t,n,i){return t.setAttribute(n,i)},Cm=function(t,n){return Et(t[n])?mb:vm(t[n])&&t.setAttribute?sS:Am},gb=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},aS=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},xb=function(t,n){var i=n._pt,a="";if(!t&&n.b)a=n.b;else if(t===1&&n.e)a=n.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=n.c}n.set(n.t,n.p,a,n)},Tm=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},oS=function(t,n,i,a){for(var c=this._pt,u;c;)u=c._next,c.p===a&&c.modifier(t,n,i),c=u},lS=function(t){for(var n=this._pt,i,a;n;)a=n._next,n.p===t&&!n.op||n.op===t?Fd(this,n,"_pt"):n.dep||(i=1),n=a;return!i},cS=function(t,n,i,a){a.mSet(t,n,a.m.call(a.tween,i,a.mt),a)},vb=function(t){for(var n=t._pt,i,a,c,u;n;){for(i=n._next,a=c;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:u)?n._prev._next=n:c=n,(n._next=a)?a._prev=n:u=n,n=i}t._pt=c},Vr=(function(){function s(n,i,a,c,u,p,f,m,g){this.t=i,this.s=c,this.c=u,this.p=a,this.r=p||gb,this.d=f||this,this.set=m||Am,this.pr=g||0,this._next=n,n&&(n._prev=this)}var t=s.prototype;return t.modifier=function(i,a,c){this.mSet=this.mSet||this.set,this.set=cS,this.m=i,this.mt=c,this.tween=a},s})();Hr(Nm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return _m[s]=1});pn.TweenMax=pn.TweenLite=Dt;pn.TimelineLite=pn.TimelineMax=Br;xt=new Br({sortChildren:!1,defaults:Zl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=cb;var ha=[],Xu={},uS=[],wv=0,dS=0,Bf=function(t){return(Xu[t]||uS).map(function(n){return n()})},jh=function(){var t=Date.now(),n=[];t-wv>2&&(Bf("matchMediaInit"),ha.forEach(function(i){var a=i.queries,c=i.conditions,u,p,f,m;for(p in a)u=oi.matchMedia(a[p]).matches,u&&(f=1),u!==c[p]&&(c[p]=u,m=1);m&&(i.revert(),f&&n.push(i))}),Bf("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),wv=t,Bf("matchMedia"))},yb=(function(){function s(n,i){this.selector=i&&_h(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dS++,n&&this.add(n)}var t=s.prototype;return t.add=function(i,a,c){Et(i)&&(c=a,a=i,i=Et);var u=this,p=function(){var m=pt,g=u.selector,y;return m&&m!==u&&m.data.push(u),c&&(u.selector=_h(c)),pt=u,y=a.apply(u,arguments),Et(y)&&u._r.push(y),pt=m,u.selector=g,u.isReverted=!1,y};return u.last=p,i===Et?p(u,function(f){return u.add(null,f)}):i?u[i]=p:p},t.ignore=function(i){var a=pt;pt=null,i(this),pt=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof s?i.push.apply(i,a.getTweens()):a instanceof Dt&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var c=this;if(i?(function(){for(var p=c.getTweens(),f=c.data.length,m;f--;)m=c.data[f],m.data==="isFlip"&&(m.revert(),m.getChildren(!0,!0,!1).forEach(function(g){return p.splice(p.indexOf(g),1)}));for(p.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,y){return y.g-g.g||-1/0}).forEach(function(g){return g.t.revert(i)}),f=c.data.length;f--;)m=c.data[f],m instanceof Br?m.data!=="nested"&&(m.scrollTrigger&&m.scrollTrigger.revert(),m.kill()):!(m instanceof Dt)&&m.revert&&m.revert(i);c._r.forEach(function(g){return g(i,c)}),c.isReverted=!0})():this.data.forEach(function(p){return p.kill&&p.kill()}),this.clear(),a)for(var u=ha.length;u--;)ha[u].id===this.id&&ha.splice(u,1)},t.revert=function(i){this.kill(i||{})},s})(),pS=(function(){function s(n){this.contexts=[],this.scope=n,pt&&pt.data.push(this)}var t=s.prototype;return t.add=function(i,a,c){mi(i)||(i={matches:i});var u=new yb(0,c||this.scope),p=u.conditions={},f,m,g;pt&&!u.selector&&(u.selector=pt.selector),this.contexts.push(u),a=u.add("onMatch",a),u.queries=i;for(m in i)m==="all"?g=1:(f=oi.matchMedia(i[m]),f&&(ha.indexOf(u)<0&&ha.push(u),(p[m]=f.matches)&&(g=1),f.addListener?f.addListener(jh):f.addEventListener("change",jh)));return g&&a(u,function(y){return u.add(null,y)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},s})(),fd={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(a){return ab(a)})},timeline:function(t){return new Br(t)},getTweensOf:function(t,n){return xt.getTweensOf(t,n)},getProperty:function(t,n,i,a){er(t)&&(t=Pn(t)[0]);var c=da(t||{}).get,u=i?qy:Gy;return i==="native"&&(i=""),t&&(n?u((nn[n]&&nn[n].get||c)(t,n,i,a)):function(p,f,m){return u((nn[p]&&nn[p].get||c)(t,p,f,m))})},quickSetter:function(t,n,i){if(t=Pn(t),t.length>1){var a=t.map(function(g){return Gr.quickSetter(g,n,i)}),c=a.length;return function(g){for(var y=c;y--;)a[y](g)}}t=t[0]||{};var u=nn[n],p=da(t),f=p.harness&&(p.harness.aliases||{})[n]||n,m=u?function(g){var y=new u;oo._pt=0,y.init(t,i?g+i:g,oo,0,[t]),y.render(1,y),oo._pt&&Tm(1,oo)}:p.set(t,f);return u?m:function(g){return m(t,f,i?g+i:g,p,1)}},quickTo:function(t,n,i){var a,c=Gr.to(t,fn((a={},a[n]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),u=function(f,m,g){return c.resetTo(n,f,m,g)};return u.tween=c,u},isTweening:function(t){return xt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fa(t.ease,Zl.ease)),gv(Zl,t||{})},config:function(t){return gv(dn,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,a=t.plugins,c=t.defaults,u=t.extendTimeline;(a||"").split(",").forEach(function(p){return p&&!nn[p]&&!pn[p]&&$l(n+" effect requires "+p+" plugin.")}),Mf[n]=function(p,f,m){return i(Pn(p),fn(f||{},c),m)},u&&(Br.prototype[n]=function(p,f,m){return this.add(Mf[n](p,mi(f)?f:(m=f)&&{},this),m)})},registerEase:function(t,n){Ve[t]=fa(n)},parseEase:function(t,n){return arguments.length?fa(t,n):Ve},getById:function(t){return xt.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new Br(t),a,c;for(i.smoothChildTiming=Wr(t.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,a=xt._first;a;)c=a._next,(n||!(!a._dur&&a instanceof Dt&&a.vars.onComplete===a._targets[0]))&&ci(i,a,a._start-a._delay),a=c;return ci(xt,i,0),i},context:function(t,n){return t?new yb(t,n):pt},matchMedia:function(t){return new pS(t)},matchMediaRefresh:function(){return ha.forEach(function(t){var n=t.conditions,i,a;for(a in n)n[a]&&(n[a]=!1,i=1);i&&t.revert()})||jh()},addEventListener:function(t,n){var i=Xu[t]||(Xu[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=Xu[t],a=i&&i.indexOf(n);a>=0&&i.splice(a,1)},utils:{wrap:HE,wrapYoyo:VE,distribute:eb,random:rb,snap:tb,normalize:WE,getUnit:fr,clamp:DE,splitColor:ob,toArray:Pn,selector:_h,mapRange:ib,pipe:BE,unitize:UE,interpolate:YE,shuffle:$y},install:Uy,effects:Mf,ticker:an,updateRoot:Br.updateRoot,plugins:nn,globalTimeline:xt,core:{PropTween:Vr,globals:Wy,Tween:Dt,Timeline:Br,Animation:nc,getCache:da,_removeLinkedListItem:Fd,reverting:function(){return ir},context:function(t){return t&&pt&&(pt.data.push(t),t._ctx=pt),pt},suppressOverwrites:function(t){return xm=t}}};Hr("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return fd[s]=Dt[s]});an.add(Br.updateRoot);oo=fd.to({},{duration:0});var fS=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},hS=function(t,n){var i=t._targets,a,c,u;for(a in n)for(c=i.length;c--;)u=t._ptLookup[c][a],u&&(u=u.d)&&(u._pt&&(u=fS(u,a)),u&&u.modifier&&u.modifier(n[a],t,i[c],a))},Uf=function(t,n){return{name:t,headless:1,rawVars:1,init:function(a,c,u){u._onInit=function(p){var f,m;if(er(c)&&(f={},Hr(c,function(g){return f[g]=1}),c=f),n){f={};for(m in c)f[m]=n(c[m]);c=f}hS(p,c)}}}},Gr=fd.registerPlugin({name:"attr",init:function(t,n,i,a,c){var u,p,f;this.tween=i;for(u in n)f=t.getAttribute(u)||"",p=this.add(t,"setAttribute",(f||0)+"",n[u],a,c,0,0,u),p.op=u,p.b=f,this._props.push(u)},render:function(t,n){for(var i=n._pt;i;)ir?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Uf("roundProps",Nh),Uf("modifiers"),Uf("snap",tb))||fd;Dt.version=Br.version=Gr.version="3.15.0";By=1;ym()&&So();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;var _v,ys,ho,Pm,oa,Nv,Rm,mS=function(){return typeof window<"u"},Ui={},ia=180/Math.PI,mo=Math.PI/180,Qa=Math.atan2,kv=1e8,Lm=/([A-Z])/g,gS=/(left|right|width|margin|padding|x)/i,xS=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eh=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},vS=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},yS=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},bS=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},wS=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},bb=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},wb=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},_S=function(t,n,i){return t.style[n]=i},NS=function(t,n,i){return t.style.setProperty(n,i)},kS=function(t,n,i){return t._gsap[n]=i},jS=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},ES=function(t,n,i,a,c){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(c,u)},SS=function(t,n,i,a,c){var u=t._gsap;u[n]=i,u.renderTransform(c,u)},vt="transform",Yr=vt+"Origin",AS=function s(t,n){var i=this,a=this.target,c=a.style,u=a._gsap;if(t in Ui&&c){if(this.tfm=this.tfm||{},t!=="transform")t=ui[t]||t,~t.indexOf(",")?t.split(",").forEach(function(p){return i.tfm[p]=Ti(a,p)}):this.tfm[t]=u.x?u[t]:Ti(a,t),t===Yr&&(this.tfm.zOrigin=u.zOrigin);else return ui.transform.split(",").forEach(function(p){return s.call(i,p,n)});if(this.props.indexOf(vt)>=0)return;u.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Yr,n,"")),t=vt}(c||n)&&this.props.push(t,n,c[t])},_b=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},CS=function(){var t=this.props,n=this.target,i=n.style,a=n._gsap,c,u;for(c=0;c<t.length;c+=3)t[c+1]?t[c+1]===2?n[t[c]](t[c+2]):n[t[c]]=t[c+2]:t[c+2]?i[t[c]]=t[c+2]:i.removeProperty(t[c].substr(0,2)==="--"?t[c]:t[c].replace(Lm,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)a[u]=this.tfm[u];a.svg&&(a.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),c=Rm(),(!c||!c.isStart)&&!i[vt]&&(_b(i),a.zOrigin&&i[Yr]&&(i[Yr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Nb=function(t,n){var i={target:t,props:[],revert:CS,save:AS};return t._gsap||Gr.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(a){return i.save(a)}),i},kb,Sh=function(t,n){var i=ys.createElementNS?ys.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ys.createElement(t);return i&&i.style?i:ys.createElement(t)},un=function s(t,n,i){var a=getComputedStyle(t);return a[n]||a.getPropertyValue(n.replace(Lm,"-$1").toLowerCase())||a.getPropertyValue(n)||!i&&s(t,Ao(n)||n,1)||""},jv="O,Moz,ms,Ms,Webkit".split(","),Ao=function(t,n,i){var a=n||oa,c=a.style,u=5;if(t in c&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(jv[u]+t in c););return u<0?null:(u===3?"ms":u>=0?jv[u]:"")+t},Ah=function(){mS()&&window.document&&(_v=window,ys=_v.document,ho=ys.documentElement,oa=Sh("div")||{style:{}},Sh("div"),vt=Ao(vt),Yr=vt+"Origin",oa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kb=!!Ao("perspective"),Rm=Gr.core.reverting,Pm=1)},Ev=function(t){var n=t.ownerSVGElement,i=Sh("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),c;a.style.display="block",i.appendChild(a),ho.appendChild(i);try{c=a.getBBox()}catch{}return i.removeChild(a),ho.removeChild(i),c},Sv=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},jb=function(t){var n,i;try{n=t.getBBox()}catch{n=Ev(t),i=1}return n&&(n.width||n.height)||i||(n=Ev(t)),n&&!n.width&&!n.x&&!n.y?{x:+Sv(t,["x","cx","x1"])||0,y:+Sv(t,["y","cy","y1"])||0,width:0,height:0}:n},Eb=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&jb(t))},Ts=function(t,n){if(n){var i=t.style,a;n in Ui&&n!==Yr&&(n=vt),i.removeProperty?(a=n.substr(0,2),(a==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(a==="--"?n:n.replace(Lm,"-$1").toLowerCase())):i.removeAttribute(n)}},bs=function(t,n,i,a,c,u){var p=new Vr(t._pt,n,i,0,1,u?wb:bb);return t._pt=p,p.b=a,p.e=c,t._props.push(i),p},Av={deg:1,rad:1,turn:1},TS={grid:1,flex:1},Ps=function s(t,n,i,a){var c=parseFloat(i)||0,u=(i+"").trim().substr((c+"").length)||"px",p=oa.style,f=gS.test(n),m=t.tagName.toLowerCase()==="svg",g=(m?"client":"offset")+(f?"Width":"Height"),y=100,v=a==="px",b=a==="%",_,w,k,C;if(a===u||!c||Av[a]||Av[u])return c;if(u!=="px"&&!v&&(c=s(t,n,i,"px")),C=t.getCTM&&Eb(t),(b||u==="%")&&(Ui[n]||~n.indexOf("adius")))return _=C?t.getBBox()[f?"width":"height"]:t[g],Rt(b?c/_*y:c/100*_);if(p[f?"width":"height"]=y+(v?u:a),w=a!=="rem"&&~n.indexOf("adius")||a==="em"&&t.appendChild&&!m?t:t.parentNode,C&&(w=(t.ownerSVGElement||{}).parentNode),(!w||w===ys||!w.appendChild)&&(w=ys.body),k=w._gsap,k&&b&&k.width&&f&&k.time===an.time&&!k.uncache)return Rt(c/k.width*y);if(b&&(n==="height"||n==="width")){var A=t.style[n];t.style[n]=y+a,_=t[g],A?t.style[n]=A:Ts(t,n)}else(b||u==="%")&&!TS[un(w,"display")]&&(p.position=un(t,"position")),w===t&&(p.position="static"),w.appendChild(oa),_=oa[g],w.removeChild(oa),p.position="absolute";return f&&b&&(k=da(w),k.time=an.time,k.width=w[g]),Rt(v?_*c/y:_&&c?y/_*c:0)},Ti=function(t,n,i,a){var c;return Pm||Ah(),n in ui&&n!=="transform"&&(n=ui[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ui[n]&&n!=="transform"?(c=sc(t,a),c=n!=="transformOrigin"?c[n]:c.svg?c.origin:md(un(t,Yr))+" "+c.zOrigin+"px"):(c=t.style[n],(!c||c==="auto"||a||~(c+"").indexOf("calc("))&&(c=hd[n]&&hd[n](t,n,i)||un(t,n)||Vy(t,n)||(n==="opacity"?1:0))),i&&!~(c+"").trim().indexOf(" ")?Ps(t,n,c,i)+i:c},PS=function(t,n,i,a){if(!i||i==="none"){var c=Ao(n,t,1),u=c&&un(t,c,1);u&&u!==i?(n=c,i=u):n==="borderColor"&&(i=un(t,"borderTopColor"))}var p=new Vr(this._pt,t.style,n,0,1,xb),f=0,m=0,g,y,v,b,_,w,k,C,A,E,j,P;if(p.b=i,p.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=un(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(w=t.style[n],t.style[n]=a,a=un(t,n)||a,w?t.style[n]=w:Ts(t,n)),g=[i,a],cb(g),i=g[0],a=g[1],v=i.match(ao)||[],P=a.match(ao)||[],P.length){for(;y=ao.exec(a);)k=y[0],A=a.substring(f,y.index),_?_=(_+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(_=1),k!==(w=v[m++]||"")&&(b=parseFloat(w)||0,j=w.substr((b+"").length),k.charAt(1)==="="&&(k=fo(b,k)+j),C=parseFloat(k),E=k.substr((C+"").length),f=ao.lastIndex-E.length,E||(E=E||dn.units[n]||j,f===a.length&&(a+=E,p.e+=E)),j!==E&&(b=Ps(t,n,w,E)||0),p._pt={_next:p._pt,p:A||m===1?A:",",s:b,c:C-b,m:_&&_<4||n==="zIndex"?Math.round:0});p.c=f<a.length?a.substring(f,a.length):""}else p.r=n==="display"&&a==="none"?wb:bb;return Fy.test(a)&&(p.e=0),this._pt=p,p},Cv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RS=function(t){var n=t.split(" "),i=n[0],a=n[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),n[0]=Cv[i]||i,n[1]=Cv[a]||a,n.join(" ")},LS=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,a=i.style,c=n.u,u=i._gsap,p,f,m;if(c==="all"||c===!0)a.cssText="",f=1;else for(c=c.split(","),m=c.length;--m>-1;)p=c[m],Ui[p]&&(f=1,p=p==="transformOrigin"?Yr:vt),Ts(i,p);f&&(Ts(i,vt),u&&(u.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",sc(i,1),u.uncache=1,_b(a)))}},hd={clearProps:function(t,n,i,a,c){if(c.data!=="isFromStart"){var u=t._pt=new Vr(t._pt,n,i,0,0,LS);return u.u=a,u.pr=-10,u.tween=c,t._props.push(i),1}}},ic=[1,0,0,1,0,0],Sb={},Ab=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Tv=function(t){var n=un(t,vt);return Ab(n)?ic:n.substr(7).match(Dy).map(Rt)},Om=function(t,n){var i=t._gsap||da(t),a=t.style,c=Tv(t),u,p,f,m;return i.svg&&t.getAttribute("transform")?(f=t.transform.baseVal.consolidate().matrix,c=[f.a,f.b,f.c,f.d,f.e,f.f],c.join(",")==="1,0,0,1,0,0"?ic:c):(c===ic&&!t.offsetParent&&t!==ho&&!i.svg&&(f=a.display,a.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(m=1,p=t.nextElementSibling,ho.appendChild(t)),c=Tv(t),f?a.display=f:Ts(t,"display"),m&&(p?u.insertBefore(t,p):u?u.appendChild(t):ho.removeChild(t))),n&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Ch=function(t,n,i,a,c,u){var p=t._gsap,f=c||Om(t,!0),m=p.xOrigin||0,g=p.yOrigin||0,y=p.xOffset||0,v=p.yOffset||0,b=f[0],_=f[1],w=f[2],k=f[3],C=f[4],A=f[5],E=n.split(" "),j=parseFloat(E[0])||0,P=parseFloat(E[1])||0,M,L,B,W;i?f!==ic&&(L=b*k-_*w)&&(B=j*(k/L)+P*(-w/L)+(w*A-k*C)/L,W=j*(-_/L)+P*(b/L)-(b*A-_*C)/L,j=B,P=W):(M=jb(t),j=M.x+(~E[0].indexOf("%")?j/100*M.width:j),P=M.y+(~(E[1]||E[0]).indexOf("%")?P/100*M.height:P)),a||a!==!1&&p.smooth?(C=j-m,A=P-g,p.xOffset=y+(C*b+A*w)-C,p.yOffset=v+(C*_+A*k)-A):p.xOffset=p.yOffset=0,p.xOrigin=j,p.yOrigin=P,p.smooth=!!a,p.origin=n,p.originIsAbsolute=!!i,t.style[Yr]="0px 0px",u&&(bs(u,p,"xOrigin",m,j),bs(u,p,"yOrigin",g,P),bs(u,p,"xOffset",y,p.xOffset),bs(u,p,"yOffset",v,p.yOffset)),t.setAttribute("data-svg-origin",j+" "+P)},sc=function(t,n){var i=t._gsap||new db(t);if("x"in i&&!n&&!i.uncache)return i;var a=t.style,c=i.scaleX<0,u="px",p="deg",f=getComputedStyle(t),m=un(t,Yr)||"0",g,y,v,b,_,w,k,C,A,E,j,P,M,L,B,W,F,Q,D,J,Z,se,ce,$,V,X,S,T,Y,ae,le,ge;return g=y=v=w=k=C=A=E=j=0,b=_=1,i.svg=!!(t.getCTM&&Eb(t)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(a[vt]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[vt]!=="none"?f[vt]:"")),a.scale=a.rotate=a.translate="none"),L=Om(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),m=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",$=""):$=!n&&t.getAttribute("data-svg-origin"),Ch(t,$||m,!!$||i.originIsAbsolute,i.smooth!==!1,L)),P=i.xOrigin||0,M=i.yOrigin||0,L!==ic&&(Q=L[0],D=L[1],J=L[2],Z=L[3],g=se=L[4],y=ce=L[5],L.length===6?(b=Math.sqrt(Q*Q+D*D),_=Math.sqrt(Z*Z+J*J),w=Q||D?Qa(D,Q)*ia:0,A=J||Z?Qa(J,Z)*ia+w:0,A&&(_*=Math.abs(Math.cos(A*mo))),i.svg&&(g-=P-(P*Q+M*J),y-=M-(P*D+M*Z))):(ge=L[6],ae=L[7],S=L[8],T=L[9],Y=L[10],le=L[11],g=L[12],y=L[13],v=L[14],B=Qa(ge,Y),k=B*ia,B&&(W=Math.cos(-B),F=Math.sin(-B),$=se*W+S*F,V=ce*W+T*F,X=ge*W+Y*F,S=se*-F+S*W,T=ce*-F+T*W,Y=ge*-F+Y*W,le=ae*-F+le*W,se=$,ce=V,ge=X),B=Qa(-J,Y),C=B*ia,B&&(W=Math.cos(-B),F=Math.sin(-B),$=Q*W-S*F,V=D*W-T*F,X=J*W-Y*F,le=Z*F+le*W,Q=$,D=V,J=X),B=Qa(D,Q),w=B*ia,B&&(W=Math.cos(B),F=Math.sin(B),$=Q*W+D*F,V=se*W+ce*F,D=D*W-Q*F,ce=ce*W-se*F,Q=$,se=V),k&&Math.abs(k)+Math.abs(w)>359.9&&(k=w=0,C=180-C),b=Rt(Math.sqrt(Q*Q+D*D+J*J)),_=Rt(Math.sqrt(ce*ce+ge*ge)),B=Qa(se,ce),A=Math.abs(B)>2e-4?B*ia:0,j=le?1/(le<0?-le:le):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Ab(un(t,vt)),$&&t.setAttribute("transform",$))),Math.abs(A)>90&&Math.abs(A)<270&&(c?(b*=-1,A+=w<=0?180:-180,w+=w<=0?180:-180):(_*=-1,A+=A<=0?180:-180)),n=n||i.uncache,i.x=g-((i.xPercent=g&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-g)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=y-((i.yPercent=y&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-y)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=v+u,i.scaleX=Rt(b),i.scaleY=Rt(_),i.rotation=Rt(w)+p,i.rotationX=Rt(k)+p,i.rotationY=Rt(C)+p,i.skewX=A+p,i.skewY=E+p,i.transformPerspective=j+u,(i.zOrigin=parseFloat(m.split(" ")[2])||!n&&i.zOrigin||0)&&(a[Yr]=md(m)),i.xOffset=i.yOffset=0,i.force3D=dn.force3D,i.renderTransform=i.svg?IS:kb?Cb:OS,i.uncache=0,i},md=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wf=function(t,n,i){var a=fr(n);return Rt(parseFloat(n)+parseFloat(Ps(t,"x",i+"px",a)))+a},OS=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Cb(t,n)},ea="0deg",yl="0px",ta=") ",Cb=function(t,n){var i=n||this,a=i.xPercent,c=i.yPercent,u=i.x,p=i.y,f=i.z,m=i.rotation,g=i.rotationY,y=i.rotationX,v=i.skewX,b=i.skewY,_=i.scaleX,w=i.scaleY,k=i.transformPerspective,C=i.force3D,A=i.target,E=i.zOrigin,j="",P=C==="auto"&&t&&t!==1||C===!0;if(E&&(y!==ea||g!==ea)){var M=parseFloat(g)*mo,L=Math.sin(M),B=Math.cos(M),W;M=parseFloat(y)*mo,W=Math.cos(M),u=Wf(A,u,L*W*-E),p=Wf(A,p,-Math.sin(M)*-E),f=Wf(A,f,B*W*-E+E)}k!==yl&&(j+="perspective("+k+ta),(a||c)&&(j+="translate("+a+"%, "+c+"%) "),(P||u!==yl||p!==yl||f!==yl)&&(j+=f!==yl||P?"translate3d("+u+", "+p+", "+f+") ":"translate("+u+", "+p+ta),m!==ea&&(j+="rotate("+m+ta),g!==ea&&(j+="rotateY("+g+ta),y!==ea&&(j+="rotateX("+y+ta),(v!==ea||b!==ea)&&(j+="skew("+v+", "+b+ta),(_!==1||w!==1)&&(j+="scale("+_+", "+w+ta),A.style[vt]=j||"translate(0, 0)"},IS=function(t,n){var i=n||this,a=i.xPercent,c=i.yPercent,u=i.x,p=i.y,f=i.rotation,m=i.skewX,g=i.skewY,y=i.scaleX,v=i.scaleY,b=i.target,_=i.xOrigin,w=i.yOrigin,k=i.xOffset,C=i.yOffset,A=i.forceCSS,E=parseFloat(u),j=parseFloat(p),P,M,L,B,W;f=parseFloat(f),m=parseFloat(m),g=parseFloat(g),g&&(g=parseFloat(g),m+=g,f+=g),f||m?(f*=mo,m*=mo,P=Math.cos(f)*y,M=Math.sin(f)*y,L=Math.sin(f-m)*-v,B=Math.cos(f-m)*v,m&&(g*=mo,W=Math.tan(m-g),W=Math.sqrt(1+W*W),L*=W,B*=W,g&&(W=Math.tan(g),W=Math.sqrt(1+W*W),P*=W,M*=W)),P=Rt(P),M=Rt(M),L=Rt(L),B=Rt(B)):(P=y,B=v,M=L=0),(E&&!~(u+"").indexOf("px")||j&&!~(p+"").indexOf("px"))&&(E=Ps(b,"x",u,"px"),j=Ps(b,"y",p,"px")),(_||w||k||C)&&(E=Rt(E+_-(_*P+w*L)+k),j=Rt(j+w-(_*M+w*B)+C)),(a||c)&&(W=b.getBBox(),E=Rt(E+a/100*W.width),j=Rt(j+c/100*W.height)),W="matrix("+P+","+M+","+L+","+B+","+E+","+j+")",b.setAttribute("transform",W),A&&(b.style[vt]=W)},MS=function(t,n,i,a,c){var u=360,p=er(c),f=parseFloat(c)*(p&&~c.indexOf("rad")?ia:1),m=f-a,g=a+m+"deg",y,v;return p&&(y=c.split("_")[1],y==="short"&&(m%=u,m!==m%(u/2)&&(m+=m<0?u:-u)),y==="cw"&&m<0?m=(m+u*kv)%u-~~(m/u)*u:y==="ccw"&&m>0&&(m=(m-u*kv)%u-~~(m/u)*u)),t._pt=v=new Vr(t._pt,n,i,a,m,vS),v.e=g,v.u="deg",t._props.push(i),v},Pv=function(t,n){for(var i in n)t[i]=n[i];return t},zS=function(t,n,i){var a=Pv({},i._gsap),c="perspective,force3D,transformOrigin,svgOrigin",u=i.style,p,f,m,g,y,v,b,_;a.svg?(m=i.getAttribute("transform"),i.setAttribute("transform",""),u[vt]=n,p=sc(i,1),Ts(i,vt),i.setAttribute("transform",m)):(m=getComputedStyle(i)[vt],u[vt]=n,p=sc(i,1),u[vt]=m);for(f in Ui)m=a[f],g=p[f],m!==g&&c.indexOf(f)<0&&(b=fr(m),_=fr(g),y=b!==_?Ps(i,f,m,_):parseFloat(m),v=parseFloat(g),t._pt=new Vr(t._pt,p,f,y,v-y,Eh),t._pt.u=_||0,t._props.push(f));Pv(p,a)};Hr("padding,margin,Width,Radius",function(s,t){var n="Top",i="Right",a="Bottom",c="Left",u=(t<3?[n,i,a,c]:[n+c,n+i,a+i,a+c]).map(function(p){return t<2?s+p:"border"+p+s});hd[t>1?"border"+s:s]=function(p,f,m,g,y){var v,b;if(arguments.length<4)return v=u.map(function(_){return Ti(p,_,m)}),b=v.join(" "),b.split(v[0]).length===5?v[0]:b;v=(g+"").split(" "),b={},u.forEach(function(_,w){return b[_]=v[w]=v[w]||v[(w-1)/2|0]}),p.init(f,b,y)}});var Tb={name:"css",register:Ah,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,a,c){var u=this._props,p=t.style,f=i.vars.startAt,m,g,y,v,b,_,w,k,C,A,E,j,P,M,L,B,W;Pm||Ah(),this.styles=this.styles||Nb(t),B=this.styles.props,this.tween=i;for(w in n)if(w!=="autoRound"&&(g=n[w],!(nn[w]&&pb(w,n,i,a,t,c)))){if(b=typeof g,_=hd[w],b==="function"&&(g=g.call(i,a,t,c),b=typeof g),b==="string"&&~g.indexOf("random(")&&(g=tc(g)),_)_(this,t,w,g,i)&&(L=1);else if(w.substr(0,2)==="--")m=(getComputedStyle(t).getPropertyValue(w)+"").trim(),g+="",js.lastIndex=0,js.test(m)||(k=fr(m),C=fr(g),C?k!==C&&(m=Ps(t,w,m,C)+C):k&&(g+=k)),this.add(p,"setProperty",m,g,a,c,0,0,w),u.push(w),B.push(w,0,p[w]);else if(b!=="undefined"){if(f&&w in f?(m=typeof f[w]=="function"?f[w].call(i,a,t,c):f[w],er(m)&&~m.indexOf("random(")&&(m=tc(m)),fr(m+"")||m==="auto"||(m+=dn.units[w]||fr(Ti(t,w))||""),(m+"").charAt(1)==="="&&(m=Ti(t,w))):m=Ti(t,w),v=parseFloat(m),A=b==="string"&&g.charAt(1)==="="&&g.substr(0,2),A&&(g=g.substr(2)),y=parseFloat(g),w in ui&&(w==="autoAlpha"&&(v===1&&Ti(t,"visibility")==="hidden"&&y&&(v=0),B.push("visibility",0,p.visibility),bs(this,p,"visibility",v?"inherit":"hidden",y?"inherit":"hidden",!y)),w!=="scale"&&w!=="transform"&&(w=ui[w],~w.indexOf(",")&&(w=w.split(",")[0]))),E=w in Ui,E){if(this.styles.save(w),W=g,b==="string"&&g.substring(0,6)==="var(--"){if(g=un(t,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var F=t.style.perspective;t.style.perspective=g,g=un(t,"perspective"),F?t.style.perspective=F:Ts(t,"perspective")}y=parseFloat(g)}if(j||(P=t._gsap,P.renderTransform&&!n.parseTransform||sc(t,n.parseTransform),M=n.smoothOrigin!==!1&&P.smooth,j=this._pt=new Vr(this._pt,p,vt,0,1,P.renderTransform,P,0,-1),j.dep=1),w==="scale")this._pt=new Vr(this._pt,P,"scaleY",P.scaleY,(A?fo(P.scaleY,A+y):y)-P.scaleY||0,Eh),this._pt.u=0,u.push("scaleY",w),w+="X";else if(w==="transformOrigin"){B.push(Yr,0,p[Yr]),g=RS(g),P.svg?Ch(t,g,0,M,0,this):(C=parseFloat(g.split(" ")[2])||0,C!==P.zOrigin&&bs(this,P,"zOrigin",P.zOrigin,C),bs(this,p,w,md(m),md(g)));continue}else if(w==="svgOrigin"){Ch(t,g,1,M,0,this);continue}else if(w in Sb){MS(this,P,w,v,A?fo(v,A+g):g);continue}else if(w==="smoothOrigin"){bs(this,P,"smooth",P.smooth,g);continue}else if(w==="force3D"){P[w]=g;continue}else if(w==="transform"){zS(this,g,t);continue}}else w in p||(w=Ao(w)||w);if(E||(y||y===0)&&(v||v===0)&&!xS.test(g)&&w in p)k=(m+"").substr((v+"").length),y||(y=0),C=fr(g)||(w in dn.units?dn.units[w]:k),k!==C&&(v=Ps(t,w,m,C)),this._pt=new Vr(this._pt,E?P:p,w,v,(A?fo(v,A+y):y)-v,!E&&(C==="px"||w==="zIndex")&&n.autoRound!==!1?wS:Eh),this._pt.u=C||0,E&&W!==g?(this._pt.b=m,this._pt.e=W,this._pt.r=bS):k!==C&&C!=="%"&&(this._pt.b=m,this._pt.r=yS);else if(w in p)PS.call(this,t,w,m,A?A+g:g);else if(w in t)this.add(t,w,m||t[w],A?A+g:g,a,c);else if(w!=="parseTransform"){wm(w,g);continue}E||(w in p?B.push(w,0,p[w]):typeof t[w]=="function"?B.push(w,2,t[w]()):B.push(w,1,m||t[w])),u.push(w)}}L&&vb(this)},render:function(t,n){if(n.tween._time||!Rm())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Ti,aliases:ui,getSetter:function(t,n,i){var a=ui[n];return a&&a.indexOf(",")<0&&(n=a),n in Ui&&n!==Yr&&(t._gsap.x||Ti(t,"x"))?i&&Nv===i?n==="scale"?jS:kS:(Nv=i||{})&&(n==="scale"?ES:SS):t.style&&!vm(t.style[n])?_S:~n.indexOf("-")?NS:Cm(t,n)},core:{_removeProperty:Ts,_getMatrix:Om}};Gr.utils.checkPrefix=Ao;Gr.core.getStyleSaver=Nb;(function(s,t,n,i){var a=Hr(s+","+t+","+n,function(c){Ui[c]=1});Hr(t,function(c){dn.units[c]="deg",Sb[c]=1}),ui[a[13]]=s+","+t,Hr(i,function(c){var u=c.split(":");ui[u[1]]=a[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){dn.units[s]="px"});Gr.registerPlugin(Tb);var ne=Gr.registerPlugin(Tb)||Gr;ne.core.Tween;function DS(s,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function FS(s,t,n){return t&&DS(s.prototype,t),s}var nr,Qu,on,ws,_s,go,Pb,sa,xo,Rb,Ii,qn,Lb,Ob=function(){return nr||typeof window<"u"&&(nr=window.gsap)&&nr.registerPlugin&&nr},Ib=1,lo=[],Ue=[],pi=[],Ol=Date.now,Th=function(t,n){return n},BS=function(){var t=xo.core,n=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,Ue),a.push.apply(a,pi),Ue=i,pi=a,Th=function(u,p){return n[u](p)}},Es=function(t,n){return~pi.indexOf(t)&&pi[pi.indexOf(t)+1][n]},Il=function(t){return!!~Rb.indexOf(t)},Nr=function(t,n,i,a,c){return t.addEventListener(n,i,{passive:a!==!1,capture:!!c})},_r=function(t,n,i,a){return t.removeEventListener(n,i,!!a)},Au="scrollLeft",Cu="scrollTop",Ph=function(){return Ii&&Ii.isPressed||Ue.cache++},gd=function(t,n){var i=function a(c){if(c||c===0){Ib&&(on.history.scrollRestoration="manual");var u=Ii&&Ii.isPressed;c=a.v=Math.round(c)||(Ii&&Ii.iOS?1:0),t(c),a.cacheID=Ue.cache,u&&Th("ss",c)}else(n||Ue.cache!==a.cacheID||Th("ref"))&&(a.cacheID=Ue.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},Sr={s:Au,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gd(function(s){return arguments.length?on.scrollTo(s,Vt.sc()):on.pageXOffset||ws[Au]||_s[Au]||go[Au]||0})},Vt={s:Cu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sr,sc:gd(function(s){return arguments.length?on.scrollTo(Sr.sc(),s):on.pageYOffset||ws[Cu]||_s[Cu]||go[Cu]||0})},Fr=function(t,n){return(n&&n._ctx&&n._ctx.selector||nr.utils.toArray)(t)[0]||(typeof t=="string"&&nr.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},US=function(t,n){for(var i=n.length;i--;)if(n[i]===t||n[i].contains(t))return!0;return!1},Rs=function(t,n){var i=n.s,a=n.sc;Il(t)&&(t=ws.scrollingElement||_s);var c=Ue.indexOf(t),u=a===Vt.sc?1:2;!~c&&(c=Ue.push(t)-1),Ue[c+u]||Nr(t,"scroll",Ph);var p=Ue[c+u],f=p||(Ue[c+u]=gd(Es(t,i),!0)||(Il(t)?a:gd(function(m){return arguments.length?t[i]=m:t[i]})));return f.target=t,p||(f.smooth=nr.getProperty(t,"scrollBehavior")==="smooth"),f},Rh=function(t,n,i){var a=t,c=t,u=Ol(),p=u,f=n||50,m=Math.max(500,f*3),g=function(_,w){var k=Ol();w||k-u>f?(c=a,a=_,p=u,u=k):i?a+=_:a=c+(_-c)/(k-p)*(u-p)},y=function(){c=a=i?0:a,p=u=0},v=function(_){var w=p,k=c,C=Ol();return(_||_===0)&&_!==a&&g(_),u===p||C-p>m?0:(a+(i?k:-k))/((i?C:u)-w)*1e3};return{update:g,reset:y,getVelocity:v}},bl=function(t,n){return n&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Rv=function(t){var n=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(i)?n:i},Mb=function(){xo=nr.core.globals().ScrollTrigger,xo&&xo.core&&BS()},zb=function(t){return nr=t||Ob(),!Qu&&nr&&typeof document<"u"&&document.body&&(on=window,ws=document,_s=ws.documentElement,go=ws.body,Rb=[on,ws,_s,go],nr.utils.clamp,Lb=nr.core.context||function(){},sa="onpointerenter"in go?"pointer":"mouse",Pb=Lt.isTouch=on.matchMedia&&on.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in on||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qn=Lt.eventTypes=("ontouchstart"in _s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ib=0},500),Qu=1),xo||Mb(),Qu};Sr.op=Vt;Ue.cache=0;var Lt=(function(){function s(n){this.init(n)}var t=s.prototype;return t.init=function(i){Qu||zb(nr)||console.warn("Please gsap.registerPlugin(Observer)"),xo||Mb();var a=i.tolerance,c=i.dragMinimum,u=i.type,p=i.target,f=i.lineHeight,m=i.debounce,g=i.preventDefault,y=i.onStop,v=i.onStopDelay,b=i.ignore,_=i.wheelSpeed,w=i.event,k=i.onDragStart,C=i.onDragEnd,A=i.onDrag,E=i.onPress,j=i.onRelease,P=i.onRight,M=i.onLeft,L=i.onUp,B=i.onDown,W=i.onChangeX,F=i.onChangeY,Q=i.onChange,D=i.onToggleX,J=i.onToggleY,Z=i.onHover,se=i.onHoverEnd,ce=i.onMove,$=i.ignoreCheck,V=i.isNormalizer,X=i.onGestureStart,S=i.onGestureEnd,T=i.onWheel,Y=i.onEnable,ae=i.onDisable,le=i.onClick,ge=i.scrollSpeed,K=i.capture,de=i.allowClicks,ye=i.lockAxis,xe=i.onLockAxis;this.target=p=Fr(p)||_s,this.vars=i,b&&(b=nr.utils.toArray(b)),a=a||1e-9,c=c||0,_=_||1,ge=ge||1,u=u||"wheel,touch,pointer",m=m!==!1,f||(f=parseFloat(on.getComputedStyle(go).lineHeight)||22);var ze,bt,At,re,Ee,it,wt,q=this,sr=0,qr=0,Cr=i.passive||!g&&i.passive!==!1,Qe=Rs(p,Sr),Xr=Rs(p,Vt),In=Qe(),Zn=Xr(),Ct=~u.indexOf("touch")&&!~u.indexOf("pointer")&&qn[0]==="pointerdown",Mn=Il(p),st=p.ownerDocument||ws,ar=[0,0,0],gr=[0,0,0],xr=0,zn=function(){return xr=Ol()},_t=function(Ne,We){return(q.event=Ne)&&b&&US(Ne.target,b)||We&&Ct&&Ne.pointerType!=="touch"||$&&$(Ne,We)},Ds=function(){q._vx.reset(),q._vy.reset(),bt.pause(),y&&y(q)},hn=function(){var Ne=q.deltaX=Rv(ar),We=q.deltaY=Rv(gr),ue=Math.abs(Ne)>=a,Se=Math.abs(We)>=a;Q&&(ue||Se)&&Q(q,Ne,We,ar,gr),ue&&(P&&q.deltaX>0&&P(q),M&&q.deltaX<0&&M(q),W&&W(q),D&&q.deltaX<0!=sr<0&&D(q),sr=q.deltaX,ar[0]=ar[1]=ar[2]=0),Se&&(B&&q.deltaY>0&&B(q),L&&q.deltaY<0&&L(q),F&&F(q),J&&q.deltaY<0!=qr<0&&J(q),qr=q.deltaY,gr[0]=gr[1]=gr[2]=0),(re||At)&&(ce&&ce(q),At&&(k&&At===1&&k(q),A&&A(q),At=0),re=!1),it&&!(it=!1)&&xe&&xe(q),Ee&&(T(q),Ee=!1),ze=0},Hi=function(Ne,We,ue){ar[ue]+=Ne,gr[ue]+=We,q._vx.update(Ne),q._vy.update(We),m?ze||(ze=requestAnimationFrame(hn)):hn()},$n=function(Ne,We){ye&&!wt&&(q.axis=wt=Math.abs(Ne)>Math.abs(We)?"x":"y",it=!0),wt!=="y"&&(ar[2]+=Ne,q._vx.update(Ne,!0)),wt!=="x"&&(gr[2]+=We,q._vy.update(We,!0)),m?ze||(ze=requestAnimationFrame(hn)):hn()},mn=function(Ne){if(!_t(Ne,1)){Ne=bl(Ne,g);var We=Ne.clientX,ue=Ne.clientY,Se=We-q.x,we=ue-q.y,Ae=q.isDragging;q.x=We,q.y=ue,(Ae||(Se||we)&&(Math.abs(q.startX-We)>=c||Math.abs(q.startY-ue)>=c))&&(At||(At=Ae?2:1),Ae||(q.isDragging=!0),$n(Se,we))}},Dn=q.onPress=function(Te){_t(Te,1)||Te&&Te.button||(q.axis=wt=null,bt.pause(),q.isPressed=!0,Te=bl(Te),sr=qr=0,q.startX=q.x=Te.clientX,q.startY=q.y=Te.clientY,q._vx.reset(),q._vy.reset(),Nr(V?p:st,qn[1],mn,Cr,!0),q.deltaX=q.deltaY=0,E&&E(q))},Re=q.onRelease=function(Te){if(!_t(Te,1)){_r(V?p:st,qn[1],mn,!0);var Ne=!isNaN(q.y-q.startY),We=q.isDragging,ue=We&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Se=bl(Te);!ue&&Ne&&(q._vx.reset(),q._vy.reset(),g&&de&&nr.delayedCall(.08,function(){if(Ol()-xr>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(st.createEvent){var we=st.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,on,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(we)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,y&&We&&!V&&bt.restart(!0),At&&hn(),C&&We&&C(q),j&&j(q,ue)}},Fn=function(Ne){return Ne.touches&&Ne.touches.length>1&&(q.isGesturing=!0)&&X(Ne,q.isDragging)},Yt=function(){return(q.isGesturing=!1)||S(q)},Gt=function(Ne){if(!_t(Ne)){var We=Qe(),ue=Xr();Hi((We-In)*ge,(ue-Zn)*ge,1),In=We,Zn=ue,y&&bt.restart(!0)}},Tr=function(Ne){if(!_t(Ne)){Ne=bl(Ne,g),T&&(Ee=!0);var We=(Ne.deltaMode===1?f:Ne.deltaMode===2?on.innerHeight:1)*_;Hi(Ne.deltaX*We,Ne.deltaY*We,0),y&&!V&&bt.restart(!0)}},ei=function(Ne){if(!_t(Ne)){var We=Ne.clientX,ue=Ne.clientY,Se=We-q.x,we=ue-q.y;q.x=We,q.y=ue,re=!0,y&&bt.restart(!0),(Se||we)&&$n(Se,we)}},xi=function(Ne){q.event=Ne,Z(q)},gn=function(Ne){q.event=Ne,se(q)},Vi=function(Ne){return _t(Ne)||bl(Ne,g)&&le(q)};bt=q._dc=nr.delayedCall(v||.25,Ds).pause(),q.deltaX=q.deltaY=0,q._vx=Rh(0,50,!0),q._vy=Rh(0,50,!0),q.scrollX=Qe,q.scrollY=Xr,q.isDragging=q.isGesturing=q.isPressed=!1,Lb(this),q.enable=function(Te){return q.isEnabled||(Nr(Mn?st:p,"scroll",Ph),u.indexOf("scroll")>=0&&Nr(Mn?st:p,"scroll",Gt,Cr,K),u.indexOf("wheel")>=0&&Nr(p,"wheel",Tr,Cr,K),(u.indexOf("touch")>=0&&Pb||u.indexOf("pointer")>=0)&&(Nr(p,qn[0],Dn,Cr,K),Nr(st,qn[2],Re),Nr(st,qn[3],Re),de&&Nr(p,"click",zn,!0,!0),le&&Nr(p,"click",Vi),X&&Nr(st,"gesturestart",Fn),S&&Nr(st,"gestureend",Yt),Z&&Nr(p,sa+"enter",xi),se&&Nr(p,sa+"leave",gn),ce&&Nr(p,sa+"move",ei)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=re=At=!1,q._vx.reset(),q._vy.reset(),In=Qe(),Zn=Xr(),Te&&Te.type&&Dn(Te),Y&&Y(q)),q},q.disable=function(){q.isEnabled&&(lo.filter(function(Te){return Te!==q&&Il(Te.target)}).length||_r(Mn?st:p,"scroll",Ph),q.isPressed&&(q._vx.reset(),q._vy.reset(),_r(V?p:st,qn[1],mn,!0)),_r(Mn?st:p,"scroll",Gt,K),_r(p,"wheel",Tr,K),_r(p,qn[0],Dn,K),_r(st,qn[2],Re),_r(st,qn[3],Re),_r(p,"click",zn,!0),_r(p,"click",Vi),_r(st,"gesturestart",Fn),_r(st,"gestureend",Yt),_r(p,sa+"enter",xi),_r(p,sa+"leave",gn),_r(p,sa+"move",ei),q.isEnabled=q.isPressed=q.isDragging=!1,ae&&ae(q))},q.kill=q.revert=function(){q.disable();var Te=lo.indexOf(q);Te>=0&&lo.splice(Te,1),Ii===q&&(Ii=0)},lo.push(q),V&&Il(p)&&(Ii=q),q.enable(w)},FS(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Lt.version="3.15.0";Lt.create=function(s){return new Lt(s)};Lt.register=zb;Lt.getAll=function(){return lo.slice()};Lt.getById=function(s){return lo.filter(function(t){return t.vars.id===s})[0]};Ob()&&nr.registerPlugin(Lt);var he,to,Be,Je,sn,Xe,Im,xd,ac,Ml,kl,Tu,dr,Wd,Lh,jr,Lv,Ov,ro,Db,Hf,Fb,kr,Oh,Bb,Ub,hs,Ih,Mm,vo,zm,zl,Mh,Vf,Pu=1,pr=Date.now,Yf=pr(),Rn=0,jl=0,Iv=function(t,n,i){var a=rn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+n+"Clamp"]=a,a?t.substr(6,t.length-7):t},Mv=function(t,n){return n&&(!rn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},WS=function s(){return jl&&requestAnimationFrame(s)},zv=function(){return Wd=1},Dv=function(){return Wd=0},li=function(t){return t},El=function(t){return Math.round(t*1e5)/1e5||0},Wb=function(){return typeof window<"u"},Hb=function(){return he||Wb()&&(he=window.gsap)&&he.registerPlugin&&he},ba=function(t){return!!~Im.indexOf(t)},Vb=function(t){return(t==="Height"?zm:Be["inner"+t])||sn["client"+t]||Xe["client"+t]},Yb=function(t){return Es(t,"getBoundingClientRect")||(ba(t)?function(){return ed.width=Be.innerWidth,ed.height=zm,ed}:function(){return Ri(t)})},HS=function(t,n,i){var a=i.d,c=i.d2,u=i.a;return(u=Es(t,"getBoundingClientRect"))?function(){return u()[a]}:function(){return(n?Vb(c):t["client"+c])||0}},VS=function(t,n){return!n||~pi.indexOf(t)?Yb(t):function(){return ed}},di=function(t,n){var i=n.s,a=n.d2,c=n.d,u=n.a;return Math.max(0,(i="scroll"+a)&&(u=Es(t,i))?u()-Yb(t)()[c]:ba(t)?(sn[i]||Xe[i])-Vb(a):t[i]-t["offset"+a])},Ru=function(t,n){for(var i=0;i<ro.length;i+=3)(!n||~n.indexOf(ro[i+1]))&&t(ro[i],ro[i+1],ro[i+2])},rn=function(t){return typeof t=="string"},hr=function(t){return typeof t=="function"},Sl=function(t){return typeof t=="number"},aa=function(t){return typeof t=="object"},wl=function(t,n,i){return t&&t.progress(n?0:1)&&i&&t.pause()},Ka=function(t,n,i){if(t.enabled){var a=t._ctx?t._ctx.add(function(){return n(t,i)}):n(t,i);a&&a.totalTime&&(t.callbackAnimation=a)}},Ja=Math.abs,Gb="left",qb="top",Dm="right",Fm="bottom",ma="width",ga="height",Dl="Right",Fl="Left",Bl="Top",Ul="Bottom",zt="padding",En="margin",Co="Width",Bm="Height",Ht="px",Sn=function(t){return Be.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},YS=function(t){var n=Sn(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},Fv=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},Ri=function(t,n){var i=n&&Sn(t)[Lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&he.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),a},vd=function(t,n){var i=n.d2;return t["offset"+i]||t["client"+i]||0},Xb=function(t){var n=[],i=t.labels,a=t.duration(),c;for(c in i)n.push(i[c]/a);return n},GS=function(t){return function(n){return he.utils.snap(Xb(t),n)}},Um=function(t){var n=he.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,c){return a-c});return i?function(a,c,u){u===void 0&&(u=.001);var p;if(!c)return n(a);if(c>0){for(a-=u,p=0;p<i.length;p++)if(i[p]>=a)return i[p];return i[p-1]}else for(p=i.length,a+=u;p--;)if(i[p]<=a)return i[p];return i[0]}:function(a,c,u){u===void 0&&(u=.001);var p=n(a);return!c||Math.abs(p-a)<u||p-a<0==c<0?p:n(c<0?a-t:a+t)}},qS=function(t){return function(n,i){return Um(Xb(t))(n,i.direction)}},Lu=function(t,n,i,a){return i.split(",").forEach(function(c){return t(n,c,a)})},Zt=function(t,n,i,a,c){return t.addEventListener(n,i,{passive:!a,capture:!!c})},Jt=function(t,n,i,a){return t.removeEventListener(n,i,!!a)},Ou=function(t,n,i){i=i&&i.wheelHandler,i&&(t(n,"wheel",i),t(n,"touchmove",i))},Bv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Iu={toggleActions:"play",anticipatePin:0},yd={top:0,left:0,center:.5,bottom:1,right:1},Ku=function(t,n){if(rn(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=n/100),t=t.substr(0,i-1)),t=a+(t in yd?yd[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Mu=function(t,n,i,a,c,u,p,f){var m=c.startColor,g=c.endColor,y=c.fontSize,v=c.indent,b=c.fontWeight,_=Je.createElement("div"),w=ba(i)||Es(i,"pinType")==="fixed",k=t.indexOf("scroller")!==-1,C=w?Xe:i.tagName==="IFRAME"?i.contentDocument.body:i,A=t.indexOf("start")!==-1,E=A?m:g,j="border-color:"+E+";font-size:"+y+";color:"+E+";font-weight:"+b+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return j+="position:"+((k||f)&&w?"fixed;":"absolute;"),(k||f||!w)&&(j+=(a===Vt?Dm:Fm)+":"+(u+parseFloat(v))+"px;"),p&&(j+="box-sizing:border-box;text-align:left;width:"+p.offsetWidth+"px;"),_._isStart=A,_.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),_.style.cssText=j,_.innerText=n||n===0?t+"-"+n:t,C.children[0]?C.insertBefore(_,C.children[0]):C.appendChild(_),_._offset=_["offset"+a.op.d2],Ju(_,0,a,A),_},Ju=function(t,n,i,a){var c={display:"block"},u=i[a?"os2":"p2"],p=i[a?"p2":"os2"];t._isFlipped=a,c[i.a+"Percent"]=a?-100:0,c[i.a]=a?"1px":0,c["border"+u+Co]=1,c["border"+p+Co]=0,c[i.p]=n+"px",he.set(t,c)},Me=[],zh={},oc,Uv=function(){return pr()-Rn>34&&(oc||(oc=requestAnimationFrame(zi)))},Za=function(){(!kr||!kr.isPressed||kr.startX>Xe.clientWidth)&&(Ue.cache++,kr?oc||(oc=requestAnimationFrame(zi)):zi(),Rn||_a("scrollStart"),Rn=pr())},Gf=function(){Ub=Be.innerWidth,Bb=Be.innerHeight},Al=function(t){Ue.cache++,(t===!0||!dr&&!Fb&&!Je.fullscreenElement&&!Je.webkitFullscreenElement&&(!Oh||Ub!==Be.innerWidth||Math.abs(Be.innerHeight-Bb)>Be.innerHeight*.25))&&xd.restart(!0)},wa={},XS=[],Qb=function s(){return Jt(Pe,"scrollEnd",s)||la(!0)},_a=function(t){return wa[t]&&wa[t].map(function(n){return n()})||XS},tn=[],Kb=function(t){for(var n=0;n<tn.length;n+=5)(!t||tn[n+4]&&tn[n+4].query===t)&&(tn[n].style.cssText=tn[n+1],tn[n].getBBox&&tn[n].setAttribute("transform",tn[n+2]||""),tn[n+3].uncache=1)},Jb=function(){return Ue.forEach(function(t){return hr(t)&&++t.cacheID&&(t.rec=t())})},Wm=function(t,n){var i;for(jr=0;jr<Me.length;jr++)i=Me[jr],i&&(!n||i._ctx===n)&&(t?i.kill(1):i.revert(!0,!0));zl=!0,n&&Kb(n),n||_a("revert")},Zb=function(t,n){Ue.cache++,(n||!Er)&&Ue.forEach(function(i){return hr(i)&&i.cacheID++&&(i.rec=0)}),rn(t)&&(Be.history.scrollRestoration=Mm=t)},Er,xa=0,Wv,QS=function(){if(Wv!==xa){var t=Wv=xa;requestAnimationFrame(function(){return t===xa&&la(!0)})}},$b=function(){Xe.appendChild(vo),zm=!kr&&vo.offsetHeight||Be.innerHeight,Xe.removeChild(vo)},Hv=function(t){return ac(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},la=function(t,n){if(sn=Je.documentElement,Xe=Je.body,Im=[Be,Je,sn,Xe],Rn&&!t&&!zl){Zt(Pe,"scrollEnd",Qb);return}$b(),Er=Pe.isRefreshing=!0,zl||Jb();var i=_a("refreshInit");Db&&Pe.sort(),n||Wm(),Ue.forEach(function(a){hr(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),Me.slice(0).forEach(function(a){return a.refresh()}),zl=!1,Me.forEach(function(a){if(a._subPinOffset&&a.pin){var c=a.vars.horizontal?"offsetWidth":"offsetHeight",u=a.pin[c];a.revert(!0,1),a.adjustPinSpacing(a.pin[c]-u),a.refresh()}}),Mh=1,Hv(!0),Me.forEach(function(a){var c=di(a.scroller,a._dir),u=a.vars.end==="max"||a._endClamp&&a.end>c,p=a._startClamp&&a.start>=c;(u||p)&&a.setPositions(p?c-1:a.start,u?Math.max(p?c:a.start+1,c):a.end,!0)}),Hv(!1),Mh=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),Ue.forEach(function(a){hr(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),Zb(Mm,1),xd.pause(),xa++,Er=2,zi(2),Me.forEach(function(a){return hr(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Er=Pe.isRefreshing=!1,_a("refresh")},Dh=0,Zu=1,Wl,zi=function(t){if(t===2||!Er&&!zl){Pe.isUpdating=!0,Wl&&Wl.update(0);var n=Me.length,i=pr(),a=i-Yf>=50,c=n&&Me[0].scroll();if(Zu=Dh>c?-1:1,Er||(Dh=c),a&&(Rn&&!Wd&&i-Rn>200&&(Rn=0,_a("scrollEnd")),kl=Yf,Yf=i),Zu<0){for(jr=n;jr-- >0;)Me[jr]&&Me[jr].update(0,a);Zu=1}else for(jr=0;jr<n;jr++)Me[jr]&&Me[jr].update(0,a);Pe.isUpdating=!1}oc=0},Fh=[Gb,qb,Fm,Dm,En+Ul,En+Dl,En+Bl,En+Fl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$u=Fh.concat([ma,ga,"boxSizing","max"+Co,"max"+Bm,"position",En,zt,zt+Bl,zt+Dl,zt+Ul,zt+Fl]),KS=function(t,n,i){yo(i);var a=t._gsap;if(a.spacerIsNative)yo(a.spacerState);else if(t._gsap.swappedIn){var c=n.parentNode;c&&(c.insertBefore(t,n),c.removeChild(n))}t._gsap.swappedIn=!1},qf=function(t,n,i,a){if(!t._gsap.swappedIn){for(var c=Fh.length,u=n.style,p=t.style,f;c--;)f=Fh[c],u[f]=i[f];u.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(u.display="inline-block"),p[Fm]=p[Dm]="auto",u.flexBasis=i.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[ma]=vd(t,Sr)+Ht,u[ga]=vd(t,Vt)+Ht,u[zt]=p[En]=p[qb]=p[Gb]="0",yo(a),p[ma]=p["max"+Co]=i[ma],p[ga]=p["max"+Bm]=i[ga],p[zt]=i[zt],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},JS=/([A-Z])/g,yo=function(t){if(t){var n=t.t.style,i=t.length,a=0,c,u;for((t.t._gsap||he.core.getCache(t.t)).uncache=1;a<i;a+=2)u=t[a+1],c=t[a],u?n[c]=u:n[c]&&n.removeProperty(c.replace(JS,"-$1").toLowerCase())}},zu=function(t){for(var n=$u.length,i=t.style,a=[],c=0;c<n;c++)a.push($u[c],i[$u[c]]);return a.t=t,a},ZS=function(t,n,i){for(var a=[],c=t.length,u=i?8:0,p;u<c;u+=2)p=t[u],a.push(p,p in n?n[p]:t[u+1]);return a.t=t.t,a},ed={left:0,top:0},Vv=function(t,n,i,a,c,u,p,f,m,g,y,v,b,_){hr(t)&&(t=t(f)),rn(t)&&t.substr(0,3)==="max"&&(t=v+(t.charAt(4)==="="?Ku("0"+t.substr(3),i):0));var w=b?b.time():0,k,C,A;if(b&&b.seek(0),isNaN(t)||(t=+t),Sl(t))b&&(t=he.utils.mapRange(b.scrollTrigger.start,b.scrollTrigger.end,0,v,t)),p&&Ju(p,i,a,!0);else{hr(n)&&(n=n(f));var E=(t||"0").split(" "),j,P,M,L;A=Fr(n,f)||Xe,j=Ri(A)||{},(!j||!j.left&&!j.top)&&Sn(A).display==="none"&&(L=A.style.display,A.style.display="block",j=Ri(A),L?A.style.display=L:A.style.removeProperty("display")),P=Ku(E[0],j[a.d]),M=Ku(E[1]||"0",i),t=j[a.p]-m[a.p]-g+P+c-M,p&&Ju(p,M,a,i-M<20||p._isStart&&M>20),i-=i-M}if(_&&(f[_]=t||-.001,t<0&&(t=0)),u){var B=t+i,W=u._isStart;k="scroll"+a.d2,Ju(u,B,a,W&&B>20||!W&&(y?Math.max(Xe[k],sn[k]):u.parentNode[k])<=B+1),y&&(m=Ri(p),y&&(u.style[a.op.p]=m[a.op.p]-a.op.m-u._offset+Ht))}return b&&A&&(k=Ri(A),b.seek(v),C=Ri(A),b._caScrollDist=k[a.p]-C[a.p],t=t/b._caScrollDist*v),b&&b.seek(w),b?t:Math.round(t)},$S=/(webkit|moz|length|cssText|inset)/i,Yv=function(t,n,i,a){if(t.parentNode!==n){var c=t.style,u,p;if(n===Xe){t._stOrig=c.cssText,p=Sn(t);for(u in p)!+u&&!$S.test(u)&&p[u]&&typeof c[u]=="string"&&u!=="0"&&(c[u]=p[u]);c.top=i,c.left=a}else c.cssText=t._stOrig;he.core.getCache(t).uncache=1,n.appendChild(t)}},ew=function(t,n,i){var a=n,c=a;return function(u){var p=Math.round(t());return p!==a&&p!==c&&Math.abs(p-a)>3&&Math.abs(p-c)>3&&(u=p,i&&i()),c=a,a=Math.round(u),a}},Du=function(t,n,i){var a={};a[n.p]="+="+i,he.set(t,a)},Gv=function(t,n){var i=Rs(t,n),a="_scroll"+n.p2,c=function u(p,f,m,g,y){var v=u.tween,b=f.onComplete,_={};m=m||i();var w=ew(i,m,function(){v.kill(),u.tween=0});return y=g&&y||0,g=g||p-m,v&&v.kill(),f[a]=p,f.inherit=!1,f.modifiers=_,_[a]=function(){return w(m+g*v.ratio+y*v.ratio*v.ratio)},f.onUpdate=function(){Ue.cache++,u.tween&&zi()},f.onComplete=function(){u.tween=0,b&&b.call(v)},v=u.tween=he.to(t,f),v};return t[a]=i,i.wheelHandler=function(){return c.tween&&c.tween.kill()&&(c.tween=0)},Zt(t,"wheel",i.wheelHandler),Pe.isTouch&&Zt(t,"touchmove",i.wheelHandler),c},Pe=(function(){function s(n,i){to||s.register(he)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ih(this),this.init(n,i)}var t=s.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jl){this.update=this.refresh=this.kill=li;return}i=Fv(rn(i)||Sl(i)||i.nodeType?{trigger:i}:i,Iu);var c=i,u=c.onUpdate,p=c.toggleClass,f=c.id,m=c.onToggle,g=c.onRefresh,y=c.scrub,v=c.trigger,b=c.pin,_=c.pinSpacing,w=c.invalidateOnRefresh,k=c.anticipatePin,C=c.onScrubComplete,A=c.onSnapComplete,E=c.once,j=c.snap,P=c.pinReparent,M=c.pinSpacer,L=c.containerAnimation,B=c.fastScrollEnd,W=c.preventOverlaps,F=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Sr:Vt,Q=!y&&y!==0,D=Fr(i.scroller||Be),J=he.core.getCache(D),Z=ba(D),se=("pinType"in i?i.pinType:Es(D,"pinType")||Z&&"fixed")==="fixed",ce=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],$=Q&&i.toggleActions.split(" "),V="markers"in i?i.markers:Iu.markers,X=Z?0:parseFloat(Sn(D)["border"+F.p2+Co])||0,S=this,T=i.onRefreshInit&&function(){return i.onRefreshInit(S)},Y=HS(D,Z,F),ae=VS(D,Z),le=0,ge=0,K=0,de=Rs(D,F),ye,xe,ze,bt,At,re,Ee,it,wt,q,sr,qr,Cr,Qe,Xr,In,Zn,Ct,Mn,st,ar,gr,xr,zn,_t,Ds,hn,Hi,$n,mn,Dn,Re,Fn,Yt,Gt,Tr,ei,xi,gn;if(S._startClamp=S._endClamp=!1,S._dir=F,k*=45,S.scroller=D,S.scroll=L?L.time.bind(L):de,bt=de(),S.vars=i,a=a||i.animation,"refreshPriority"in i&&(Db=1,i.refreshPriority===-9999&&(Wl=S)),J.tweenScroll=J.tweenScroll||{top:Gv(D,Vt),left:Gv(D,Sr)},S.tweenTo=ye=J.tweenScroll[F.p],S.scrubDuration=function(ue){Fn=Sl(ue)&&ue,Fn?Re?Re.duration(ue):Re=he.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fn,paused:!0,onComplete:function(){return C&&C(S)}}):(Re&&Re.progress(1).kill(),Re=0)},a&&(a.vars.lazy=!1,a._initted&&!S.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),S.animation=a.pause(),a.scrollTrigger=S,S.scrubDuration(y),mn=0,f||(f=a.vars.id)),j&&((!aa(j)||j.push)&&(j={snapTo:j}),"scrollBehavior"in Xe.style&&he.set(Z?[Xe,sn]:D,{scrollBehavior:"auto"}),Ue.forEach(function(ue){return hr(ue)&&ue.target===(Z?Je.scrollingElement||sn:D)&&(ue.smooth=!1)}),ze=hr(j.snapTo)?j.snapTo:j.snapTo==="labels"?GS(a):j.snapTo==="labelsDirectional"?qS(a):j.directional!==!1?function(ue,Se){return Um(j.snapTo)(ue,pr()-ge<500?0:Se.direction)}:he.utils.snap(j.snapTo),Yt=j.duration||{min:.1,max:2},Yt=aa(Yt)?Ml(Yt.min,Yt.max):Ml(Yt,Yt),Gt=he.delayedCall(j.delay||Fn/2||.1,function(){var ue=de(),Se=pr()-ge<500,we=ye.tween;if((Se||Math.abs(S.getVelocity())<10)&&!we&&!Wd&&le!==ue){var Ae=(ue-re)/Qe,ft=a&&!Q?a.totalProgress():Ae,Ie=Se?0:(ft-Dn)/(pr()-kl)*1e3||0,at=he.utils.clamp(-Ae,1-Ae,Ja(Ie/2)*Ie/.185),qt=Ae+(j.inertia===!1?0:at),ut,et,He=j,Pr=He.onStart,tt=He.onInterrupt,vr=He.onComplete;if(ut=ze(qt,S),Sl(ut)||(ut=qt),et=Math.max(0,Math.round(re+ut*Qe)),ue<=Ee&&ue>=re&&et!==ue){if(we&&!we._initted&&we.data<=Ja(et-ue))return;j.inertia===!1&&(at=ut-Ae),ye(et,{duration:Yt(Ja(Math.max(Ja(qt-ft),Ja(ut-ft))*.185/Ie/.05||0)),ease:j.ease||"power3",data:Ja(et-ue),onInterrupt:function(){return Gt.restart(!0)&&tt&&Ka(S,tt)},onComplete:function(){S.update(),le=de(),a&&!Q&&(Re?Re.resetTo("totalProgress",ut,a._tTime/a._tDur):a.progress(ut)),mn=Dn=a&&!Q?a.totalProgress():S.progress,A&&A(S),vr&&Ka(S,vr)}},ue,at*Qe,et-ue-at*Qe),Pr&&Ka(S,Pr,ye.tween)}}else S.isActive&&le!==ue&&Gt.restart(!0)}).pause()),f&&(zh[f]=S),v=S.trigger=Fr(v||b!==!0&&b),gn=v&&v._gsap&&v._gsap.stRevert,gn&&(gn=gn(S)),b=b===!0?v:Fr(b),rn(p)&&(p={targets:v,className:p}),b&&(_===!1||_===En||(_=!_&&b.parentNode&&b.parentNode.style&&Sn(b.parentNode).display==="flex"?!1:zt),S.pin=b,xe=he.core.getCache(b),xe.spacer?Xr=xe.pinState:(M&&(M=Fr(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),xe.spacerIsNative=!!M,M&&(xe.spacerState=zu(M))),xe.spacer=Ct=M||Je.createElement("div"),Ct.classList.add("pin-spacer"),f&&Ct.classList.add("pin-spacer-"+f),xe.pinState=Xr=zu(b)),i.force3D!==!1&&he.set(b,{force3D:!0}),S.spacer=Ct=xe.spacer,$n=Sn(b),zn=$n[_+F.os2],st=he.getProperty(b),ar=he.quickSetter(b,F.a,Ht),qf(b,Ct,$n),Zn=zu(b)),V){qr=aa(V)?Fv(V,Bv):Bv,q=Mu("scroller-start",f,D,F,qr,0),sr=Mu("scroller-end",f,D,F,qr,0,q),Mn=q["offset"+F.op.d2];var Vi=Fr(Es(D,"content")||D);it=this.markerStart=Mu("start",f,Vi,F,qr,Mn,0,L),wt=this.markerEnd=Mu("end",f,Vi,F,qr,Mn,0,L),L&&(xi=he.quickSetter([it,wt],F.a,Ht)),!se&&!(pi.length&&Es(D,"fixedMarkers")===!0)&&(YS(Z?Xe:D),he.set([q,sr],{force3D:!0}),Ds=he.quickSetter(q,F.a,Ht),Hi=he.quickSetter(sr,F.a,Ht))}if(L){var Te=L.vars.onUpdate,Ne=L.vars.onUpdateParams;L.eventCallback("onUpdate",function(){S.update(0,0,1),Te&&Te.apply(L,Ne||[])})}if(S.previous=function(){return Me[Me.indexOf(S)-1]},S.next=function(){return Me[Me.indexOf(S)+1]},S.revert=function(ue,Se){if(!Se)return S.kill(!0);var we=ue!==!1||!S.enabled,Ae=dr;we!==S.isReverted&&(we&&(Tr=Math.max(de(),S.scroll.rec||0),K=S.progress,ei=a&&a.progress()),it&&[it,wt,q,sr].forEach(function(ft){return ft.style.display=we?"none":"block"}),we&&(dr=S,S.update(we)),b&&(!P||!S.isActive)&&(we?KS(b,Ct,Xr):qf(b,Ct,Sn(b),_t)),we||S.update(we),dr=Ae,S.isReverted=we)},S.refresh=function(ue,Se,we,Ae){if(!((dr||!S.enabled)&&!Se)){if(b&&ue&&Rn){Zt(s,"scrollEnd",Qb);return}!Er&&T&&T(S),dr=S,ye.tween&&!we&&(ye.tween.kill(),ye.tween=0),Re&&Re.pause(),w&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(ri){return ri.vars.immediateRender&&ri.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var ft=Y(),Ie=ae(),at=L?L.duration():di(D,F),qt=Qe<=.01||!Qe,ut=0,et=Ae||0,He=aa(we)?we.end:i.end,Pr=i.endTrigger||v,tt=aa(we)?we.start:i.start||(i.start===0||!v?0:b?"0 0":"0 100%"),vr=S.pinnedContainer=i.pinnedContainer&&Fr(i.pinnedContainer,S),Qr=v&&Math.max(0,Me.indexOf(S))||0,Ot=Qr,It,Bt,vi,ja,De,Tt,Rr,Ea,Fs,Bs,Kr,ti,yr;for(V&&aa(we)&&(ti=he.getProperty(q,F.p),yr=he.getProperty(sr,F.p));Ot-- >0;)Tt=Me[Ot],Tt.end||Tt.refresh(0,1)||(dr=S),Rr=Tt.pin,Rr&&(Rr===v||Rr===b||Rr===vr)&&!Tt.isReverted&&(Bs||(Bs=[]),Bs.unshift(Tt),Tt.revert(!0,!0)),Tt!==Me[Ot]&&(Qr--,Ot--);for(hr(tt)&&(tt=tt(S)),tt=Iv(tt,"start",S),re=Vv(tt,v,ft,F,de(),it,q,S,Ie,X,se,at,L,S._startClamp&&"_startClamp")||(b?-.001:0),hr(He)&&(He=He(S)),rn(He)&&!He.indexOf("+=")&&(~He.indexOf(" ")?He=(rn(tt)?tt.split(" ")[0]:"")+He:(ut=Ku(He.substr(2),ft),He=rn(tt)?tt:(L?he.utils.mapRange(0,L.duration(),L.scrollTrigger.start,L.scrollTrigger.end,re):re)+ut,Pr=v)),He=Iv(He,"end",S),Ee=Math.max(re,Vv(He||(Pr?"100% 0":at),Pr,ft,F,de()+ut,wt,sr,S,Ie,X,se,at,L,S._endClamp&&"_endClamp"))||-.001,ut=0,Ot=Qr;Ot--;)Tt=Me[Ot]||{},Rr=Tt.pin,Rr&&Tt.start-Tt._pinPush<=re&&!L&&Tt.end>0&&(It=Tt.end-(S._startClamp?Math.max(0,Tt.start):Tt.start),(Rr===v&&Tt.start-Tt._pinPush<re||Rr===vr)&&isNaN(tt)&&(ut+=It*(1-Tt.progress)),Rr===b&&(et+=It));if(re+=ut,Ee+=ut,S._startClamp&&(S._startClamp+=ut),S._endClamp&&!Er&&(S._endClamp=Ee||-.001,Ee=Math.min(Ee,di(D,F))),Qe=Ee-re||(re-=.01)&&.001,qt&&(K=he.utils.clamp(0,1,he.utils.normalize(re,Ee,Tr))),S._pinPush=et,it&&ut&&(It={},It[F.a]="+="+ut,vr&&(It[F.p]="-="+de()),he.set([it,wt],It)),b&&!(Mh&&S.end>=di(D,F)))It=Sn(b),ja=F===Vt,vi=de(),gr=parseFloat(st(F.a))+et,!at&&Ee>1&&(Kr=(Z?Je.scrollingElement||sn:D).style,Kr={style:Kr,value:Kr["overflow"+F.a.toUpperCase()]},Z&&Sn(Xe)["overflow"+F.a.toUpperCase()]!=="scroll"&&(Kr.style["overflow"+F.a.toUpperCase()]="scroll")),qf(b,Ct,It),Zn=zu(b),Bt=Ri(b,!0),Ea=se&&Rs(D,ja?Sr:Vt)(),_?(_t=[_+F.os2,Qe+et+Ht],_t.t=Ct,Ot=_===zt?vd(b,F)+Qe+et:0,Ot&&(_t.push(F.d,Ot+Ht),Ct.style.flexBasis!=="auto"&&(Ct.style.flexBasis=Ot+Ht)),yo(_t),vr&&Me.forEach(function(ri){ri.pin===vr&&ri.vars.pinSpacing!==!1&&(ri._subPinOffset=!0)}),se&&de(Tr)):(Ot=vd(b,F),Ot&&Ct.style.flexBasis!=="auto"&&(Ct.style.flexBasis=Ot+Ht)),se&&(De={top:Bt.top+(ja?vi-re:Ea)+Ht,left:Bt.left+(ja?Ea:vi-re)+Ht,boxSizing:"border-box",position:"fixed"},De[ma]=De["max"+Co]=Math.ceil(Bt.width)+Ht,De[ga]=De["max"+Bm]=Math.ceil(Bt.height)+Ht,De[En]=De[En+Bl]=De[En+Dl]=De[En+Ul]=De[En+Fl]="0",De[zt]=It[zt],De[zt+Bl]=It[zt+Bl],De[zt+Dl]=It[zt+Dl],De[zt+Ul]=It[zt+Ul],De[zt+Fl]=It[zt+Fl],In=ZS(Xr,De,P),Er&&de(0)),a?(Fs=a._initted,Hf(1),a.render(a.duration(),!0,!0),xr=st(F.a)-gr+Qe+et,hn=Math.abs(Qe-xr)>1,se&&hn&&In.splice(In.length-2,2),a.render(0,!0,!0),Fs||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),Hf(0)):xr=Qe,Kr&&(Kr.value?Kr.style["overflow"+F.a.toUpperCase()]=Kr.value:Kr.style.removeProperty("overflow-"+F.a));else if(v&&de()&&!L)for(Bt=v.parentNode;Bt&&Bt!==Xe;)Bt._pinOffset&&(re-=Bt._pinOffset,Ee-=Bt._pinOffset),Bt=Bt.parentNode;Bs&&Bs.forEach(function(ri){return ri.revert(!1,!0)}),S.start=re,S.end=Ee,bt=At=Er?Tr:de(),!L&&!Er&&(bt<Tr&&de(Tr),S.scroll.rec=0),S.revert(!1,!0),ge=pr(),Gt&&(le=-1,Gt.restart(!0)),dr=0,a&&Q&&(a._initted||ei)&&a.progress()!==ei&&a.progress(ei||0,!0).render(a.time(),!0,!0),(qt||K!==S.progress||L||w||a&&!a._initted)&&(a&&!Q&&(a._initted||K||a.vars.immediateRender!==!1)&&a.totalProgress(L&&re<-.001&&!K?he.utils.normalize(re,Ee,0):K,!0),S.progress=qt||(bt-re)/Qe===K?0:K),b&&_&&(Ct._pinOffset=Math.round(S.progress*xr)),Re&&Re.invalidate(),isNaN(ti)||(ti-=he.getProperty(q,F.p),yr-=he.getProperty(sr,F.p),Du(q,F,ti),Du(it,F,ti-(Ae||0)),Du(sr,F,yr),Du(wt,F,yr-(Ae||0))),qt&&!Er&&S.update(),g&&!Er&&!Cr&&(Cr=!0,g(S),Cr=!1)}},S.getVelocity=function(){return(de()-At)/(pr()-kl)*1e3||0},S.endAnimation=function(){wl(S.callbackAnimation),a&&(Re?Re.progress(1):a.paused()?Q||wl(a,S.direction<0,1):wl(a,a.reversed()))},S.labelToScroll=function(ue){return a&&a.labels&&(re||S.refresh()||re)+a.labels[ue]/a.duration()*Qe||0},S.getTrailing=function(ue){var Se=Me.indexOf(S),we=S.direction>0?Me.slice(0,Se).reverse():Me.slice(Se+1);return(rn(ue)?we.filter(function(Ae){return Ae.vars.preventOverlaps===ue}):we).filter(function(Ae){return S.direction>0?Ae.end<=re:Ae.start>=Ee})},S.update=function(ue,Se,we){if(!(L&&!we&&!ue)){var Ae=Er===!0?Tr:S.scroll(),ft=ue?0:(Ae-re)/Qe,Ie=ft<0?0:ft>1?1:ft||0,at=S.progress,qt,ut,et,He,Pr,tt,vr,Qr;if(Se&&(At=bt,bt=L?de():Ae,j&&(Dn=mn,mn=a&&!Q?a.totalProgress():Ie)),k&&b&&!dr&&!Pu&&Rn&&(!Ie&&re<Ae+(Ae-At)/(pr()-kl)*k?Ie=1e-4:Ie===1&&Ee>Ae+(Ae-At)/(pr()-kl)*k&&(Ie=.9999)),Ie!==at&&S.enabled){if(qt=S.isActive=!!Ie&&Ie<1,ut=!!at&&at<1,tt=qt!==ut,Pr=tt||!!Ie!=!!at,S.direction=Ie>at?1:-1,S.progress=Ie,Pr&&!dr&&(et=Ie&&!at?0:Ie===1?1:at===1?2:3,Q&&(He=!tt&&$[et+1]!=="none"&&$[et+1]||$[et],Qr=a&&(He==="complete"||He==="reset"||He in a))),W&&(tt||Qr)&&(Qr||y||!a)&&(hr(W)?W(S):S.getTrailing(W).forEach(function(vi){return vi.endAnimation()})),Q||(Re&&!dr&&!Pu?(Re._dp._time-Re._start!==Re._time&&Re.render(Re._dp._time-Re._start),Re.resetTo?Re.resetTo("totalProgress",Ie,a._tTime/a._tDur):(Re.vars.totalProgress=Ie,Re.invalidate().restart())):a&&a.totalProgress(Ie,!!(dr&&(ge||ue)))),b){if(ue&&_&&(Ct.style[_+F.os2]=zn),!se)ar(El(gr+xr*Ie));else if(Pr){if(vr=!ue&&Ie>at&&Ee+1>Ae&&Ae+1>=di(D,F),P)if(!ue&&(qt||vr)){var Ot=Ri(b,!0),It=Ae-re;Yv(b,Xe,Ot.top+(F===Vt?It:0)+Ht,Ot.left+(F===Vt?0:It)+Ht)}else Yv(b,Ct);yo(qt||vr?In:Zn),hn&&Ie<1&&qt||ar(gr+(Ie===1&&!vr?xr:0))}}j&&!ye.tween&&!dr&&!Pu&&Gt.restart(!0),p&&(tt||E&&Ie&&(Ie<1||!Vf))&&ac(p.targets).forEach(function(vi){return vi.classList[qt||E?"add":"remove"](p.className)}),u&&!Q&&!ue&&u(S),Pr&&!dr?(Q&&(Qr&&(He==="complete"?a.pause().totalProgress(1):He==="reset"?a.restart(!0).pause():He==="restart"?a.restart(!0):a[He]()),u&&u(S)),(tt||!Vf)&&(m&&tt&&Ka(S,m),ce[et]&&Ka(S,ce[et]),E&&(Ie===1?S.kill(!1,1):ce[et]=0),tt||(et=Ie===1?1:3,ce[et]&&Ka(S,ce[et]))),B&&!qt&&Math.abs(S.getVelocity())>(Sl(B)?B:2500)&&(wl(S.callbackAnimation),Re?Re.progress(1):wl(a,He==="reverse"?1:!Ie,1))):Q&&u&&!dr&&u(S)}if(Hi){var Bt=L?Ae/L.duration()*(L._caScrollDist||0):Ae;Ds(Bt+(q._isFlipped?1:0)),Hi(Bt)}xi&&xi(-Ae/L.duration()*(L._caScrollDist||0))}},S.enable=function(ue,Se){S.enabled||(S.enabled=!0,Zt(D,"resize",Al),Z||Zt(D,"scroll",Za),T&&Zt(s,"refreshInit",T),ue!==!1&&(S.progress=K=0,bt=At=le=de()),Se!==!1&&S.refresh())},S.getTween=function(ue){return ue&&ye?ye.tween:Re},S.setPositions=function(ue,Se,we,Ae){if(L){var ft=L.scrollTrigger,Ie=L.duration(),at=ft.end-ft.start;ue=ft.start+at*ue/Ie,Se=ft.start+at*Se/Ie}S.refresh(!1,!1,{start:Mv(ue,we&&!!S._startClamp),end:Mv(Se,we&&!!S._endClamp)},Ae),S.update()},S.adjustPinSpacing=function(ue){if(_t&&ue){var Se=_t.indexOf(F.d)+1;_t[Se]=parseFloat(_t[Se])+ue+Ht,_t[1]=parseFloat(_t[1])+ue+Ht,yo(_t)}},S.disable=function(ue,Se){if(ue!==!1&&S.revert(!0,!0),S.enabled&&(S.enabled=S.isActive=!1,Se||Re&&Re.pause(),Tr=0,xe&&(xe.uncache=1),T&&Jt(s,"refreshInit",T),Gt&&(Gt.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!Z)){for(var we=Me.length;we--;)if(Me[we].scroller===D&&Me[we]!==S)return;Jt(D,"resize",Al),Z||Jt(D,"scroll",Za)}},S.kill=function(ue,Se){S.disable(ue,Se),Re&&!Se&&Re.kill(),f&&delete zh[f];var we=Me.indexOf(S);we>=0&&Me.splice(we,1),we===jr&&Zu>0&&jr--,we=0,Me.forEach(function(Ae){return Ae.scroller===S.scroller&&(we=1)}),we||Er||(S.scroll.rec=0),a&&(a.scrollTrigger=null,ue&&a.revert({kill:!1}),Se||a.kill()),it&&[it,wt,q,sr].forEach(function(Ae){return Ae.parentNode&&Ae.parentNode.removeChild(Ae)}),Wl===S&&(Wl=0),b&&(xe&&(xe.uncache=1),we=0,Me.forEach(function(Ae){return Ae.pin===b&&we++}),we||(xe.spacer=0)),i.onKill&&i.onKill(S)},Me.push(S),S.enable(!1,!1),gn&&gn(S),a&&a.add&&!Qe){var We=S.update;S.update=function(){S.update=We,Ue.cache++,re||Ee||S.refresh()},he.delayedCall(.01,S.update),Qe=.01,re=Ee=0}else S.refresh();b&&QS()},s.register=function(i){return to||(he=i||Hb(),Wb()&&window.document&&s.enable(),to=jl),to},s.defaults=function(i){if(i)for(var a in i)Iu[a]=i[a];return Iu},s.disable=function(i,a){jl=0,Me.forEach(function(u){return u[a?"kill":"disable"](i)}),Jt(Be,"wheel",Za),Jt(Je,"scroll",Za),clearInterval(Tu),Jt(Je,"touchcancel",li),Jt(Xe,"touchstart",li),Lu(Jt,Je,"pointerdown,touchstart,mousedown",zv),Lu(Jt,Je,"pointerup,touchend,mouseup",Dv),xd.kill(),Ru(Jt);for(var c=0;c<Ue.length;c+=3)Ou(Jt,Ue[c],Ue[c+1]),Ou(Jt,Ue[c],Ue[c+2])},s.enable=function(){if(Be=window,Je=document,sn=Je.documentElement,Xe=Je.body,he){if(ac=he.utils.toArray,Ml=he.utils.clamp,Ih=he.core.context||li,Hf=he.core.suppressOverwrites||li,Mm=Be.history.scrollRestoration||"auto",Dh=Be.pageYOffset||0,he.core.globals("ScrollTrigger",s),Xe){jl=1,vo=document.createElement("div"),vo.style.height="100vh",vo.style.position="absolute",$b(),WS(),Lt.register(he),s.isTouch=Lt.isTouch,hs=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Oh=Lt.isTouch===1,Zt(Be,"wheel",Za),Im=[Be,Je,sn,Xe],he.matchMedia?(s.matchMedia=function(g){var y=he.matchMedia(),v;for(v in g)y.add(v,g[v]);return y},he.addEventListener("matchMediaInit",function(){Jb(),Wm()}),he.addEventListener("matchMediaRevert",function(){return Kb()}),he.addEventListener("matchMedia",function(){la(0,1),_a("matchMedia")}),he.matchMedia().add("(orientation: portrait)",function(){return Gf(),Gf})):console.warn("Requires GSAP 3.11.0 or later"),Gf(),Zt(Je,"scroll",Za);var i=Xe.hasAttribute("style"),a=Xe.style,c=a.borderTopStyle,u=he.core.Animation.prototype,p,f;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",p=Ri(Xe),Vt.m=Math.round(p.top+Vt.sc())||0,Sr.m=Math.round(p.left+Sr.sc())||0,c?a.borderTopStyle=c:a.removeProperty("border-top-style"),i||(Xe.setAttribute("style",""),Xe.removeAttribute("style")),Tu=setInterval(Uv,250),he.delayedCall(.5,function(){return Pu=0}),Zt(Je,"touchcancel",li),Zt(Xe,"touchstart",li),Lu(Zt,Je,"pointerdown,touchstart,mousedown",zv),Lu(Zt,Je,"pointerup,touchend,mouseup",Dv),Lh=he.utils.checkPrefix("transform"),$u.push(Lh),to=pr(),xd=he.delayedCall(.2,la).pause(),ro=[Je,"visibilitychange",function(){var g=Be.innerWidth,y=Be.innerHeight;Je.hidden?(Lv=g,Ov=y):(Lv!==g||Ov!==y)&&Al()},Je,"DOMContentLoaded",la,Be,"load",la,Be,"resize",Al],Ru(Zt),Me.forEach(function(g){return g.enable(0,1)}),f=0;f<Ue.length;f+=3)Ou(Jt,Ue[f],Ue[f+1]),Ou(Jt,Ue[f],Ue[f+2])}else if(Je){var m=function g(){s.enable(),Je.removeEventListener("DOMContentLoaded",g)};Je.addEventListener("DOMContentLoaded",m)}}},s.config=function(i){"limitCallbacks"in i&&(Vf=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(Tu)||(Tu=a)&&setInterval(Uv,a),"ignoreMobileResize"in i&&(Oh=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ru(Jt)||Ru(Zt,i.autoRefreshEvents||"none"),Fb=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,a){var c=Fr(i),u=Ue.indexOf(c),p=ba(c);~u&&Ue.splice(u,p?6:2),a&&(p?pi.unshift(Be,a,Xe,a,sn,a):pi.unshift(c,a))},s.clearMatchMedia=function(i){Me.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},s.isInViewport=function(i,a,c){var u=(rn(i)?Fr(i):i).getBoundingClientRect(),p=u[c?ma:ga]*a||0;return c?u.right-p>0&&u.left+p<Be.innerWidth:u.bottom-p>0&&u.top+p<Be.innerHeight},s.positionInViewport=function(i,a,c){rn(i)&&(i=Fr(i));var u=i.getBoundingClientRect(),p=u[c?ma:ga],f=a==null?p/2:a in yd?yd[a]*p:~a.indexOf("%")?parseFloat(a)*p/100:parseFloat(a)||0;return c?(u.left+f)/Be.innerWidth:(u.top+f)/Be.innerHeight},s.killAll=function(i){if(Me.slice(0).forEach(function(c){return c.vars.id!=="ScrollSmoother"&&c.kill()}),i!==!0){var a=wa.killAll||[];wa={},a.forEach(function(c){return c()})}},s})();Pe.version="3.15.0";Pe.saveStyles=function(s){return s?ac(s).forEach(function(t){if(t&&t.style){var n=tn.indexOf(t);n>=0&&tn.splice(n,5),tn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),he.core.getCache(t),Ih())}}):tn};Pe.revert=function(s,t){return Wm(!s,t)};Pe.create=function(s,t){return new Pe(s,t)};Pe.refresh=function(s){return s?Al(!0):(to||Pe.register())&&la(!0)};Pe.update=function(s){return++Ue.cache&&zi(s===!0?2:0)};Pe.clearScrollMemory=Zb;Pe.maxScroll=function(s,t){return di(s,t?Sr:Vt)};Pe.getScrollFunc=function(s,t){return Rs(Fr(s),t?Sr:Vt)};Pe.getById=function(s){return zh[s]};Pe.getAll=function(){return Me.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Pe.isScrolling=function(){return!!Rn};Pe.snapDirectional=Um;Pe.addEventListener=function(s,t){var n=wa[s]||(wa[s]=[]);~n.indexOf(t)||n.push(t)};Pe.removeEventListener=function(s,t){var n=wa[s],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)};Pe.batch=function(s,t){var n=[],i={},a=t.interval||.016,c=t.batchMax||1e9,u=function(m,g){var y=[],v=[],b=he.delayedCall(a,function(){g(y,v),y=[],v=[]}).pause();return function(_){y.length||b.restart(!0),y.push(_.trigger),v.push(_),c<=y.length&&b.progress(1)}},p;for(p in t)i[p]=p.substr(0,2)==="on"&&hr(t[p])&&p!=="onRefreshInit"?u(p,t[p]):t[p];return hr(c)&&(c=c(),Zt(Pe,"refresh",function(){return c=t.batchMax()})),ac(s).forEach(function(f){var m={};for(p in i)m[p]=i[p];m.trigger=f,n.push(Pe.create(m))}),n};var qv=function(t,n,i,a){return n>a?t(a):n<0&&t(0),i>a?(a-n)/(i-n):i<0?n/(n-i):1},Xf=function s(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Lt.isTouch?" pinch-zoom":""):"none",t===sn&&s(Xe,n)},Fu={auto:1,scroll:1},e3=function(t){var n=t.event,i=t.target,a=t.axis,c=(n.changedTouches?n.changedTouches[0]:n).target,u=c._gsap||he.core.getCache(c),p=pr(),f;if(!u._isScrollT||p-u._isScrollT>2e3){for(;c&&c!==Xe&&(c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth||!(Fu[(f=Sn(c)).overflowY]||Fu[f.overflowX]));)c=c.parentNode;u._isScroll=c&&c!==i&&!ba(c)&&(Fu[(f=Sn(c)).overflowY]||Fu[f.overflowX]),u._isScrollT=p}(u._isScroll||a==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},tw=function(t,n,i,a){return Lt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:a=a&&e3,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&Zt(Je,Lt.eventTypes[0],Qv,!1,!0)},onDisable:function(){return Jt(Je,Lt.eventTypes[0],Qv,!0)}})},t3=/(input|label|select|textarea)/i,Xv,Qv=function(t){var n=t3.test(t.target.tagName);(n||Xv)&&(t._gsapAllow=!0,Xv=n)},r3=function(t){aa(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,i=n.normalizeScrollX,a=n.momentum,c=n.allowNestedScroll,u=n.onRelease,p,f,m=Fr(t.target)||sn,g=he.core.globals().ScrollSmoother,y=g&&g.get(),v=hs&&(t.content&&Fr(t.content)||y&&t.content!==!1&&!y.smooth()&&y.content()),b=Rs(m,Vt),_=Rs(m,Sr),w=1,k=(Lt.isTouch&&Be.visualViewport?Be.visualViewport.scale*Be.visualViewport.width:Be.outerWidth)/Be.innerWidth,C=0,A=hr(a)?function(){return a(p)}:function(){return a||2.8},E,j,P=tw(m,t.type,!0,c),M=function(){return j=!1},L=li,B=li,W=function(){f=di(m,Vt),B=Ml(hs?1:0,f),i&&(L=Ml(0,di(m,Sr))),E=xa},F=function(){v._gsap.y=El(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0},Q=function(){if(j){requestAnimationFrame(M);var V=El(p.deltaY/2),X=B(b.v-V);if(v&&X!==b.v+b.offset){b.offset=X-b.v;var S=El((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",v._gsap.y=S+"px",b.cacheID=Ue.cache,zi()}return!0}b.offset&&F(),j=!0},D,J,Z,se,ce=function(){W(),D.isActive()&&D.vars.scrollY>f&&(b()>f?D.progress(1)&&b(f):D.resetTo("scrollY",f))};return v&&he.set(v,{y:"+=0"}),t.ignoreCheck=function($){return hs&&$.type==="touchmove"&&Q()||w>1.05&&$.type!=="touchstart"||p.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){j=!1;var $=w;w=El((Be.visualViewport&&Be.visualViewport.scale||1)/k),D.pause(),$!==w&&Xf(m,w>1.01?!0:i?!1:"x"),J=_(),Z=b(),W(),E=xa},t.onRelease=t.onGestureStart=function($,V){if(b.offset&&F(),!V)se.restart(!0);else{Ue.cache++;var X=A(),S,T;i&&(S=_(),T=S+X*.05*-$.velocityX/.227,X*=qv(_,S,T,di(m,Sr)),D.vars.scrollX=L(T)),S=b(),T=S+X*.05*-$.velocityY/.227,X*=qv(b,S,T,di(m,Vt)),D.vars.scrollY=B(T),D.invalidate().duration(X).play(.01),(hs&&D.vars.scrollY>=f||S>=f-1)&&he.to({},{onUpdate:ce,duration:X})}u&&u($)},t.onWheel=function(){D._ts&&D.pause(),pr()-C>1e3&&(E=0,C=pr())},t.onChange=function($,V,X,S,T){if(xa!==E&&W(),V&&i&&_(L(S[2]===V?J+($.startX-$.x):_()+V-S[1])),X){b.offset&&F();var Y=T[2]===X,ae=Y?Z+$.startY-$.y:b()+X-T[1],le=B(ae);Y&&ae!==le&&(Z+=le-ae),b(le)}(X||V)&&zi()},t.onEnable=function(){Xf(m,i?!1:"x"),Pe.addEventListener("refresh",ce),Zt(Be,"resize",ce),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=_.smooth=!1),P.enable()},t.onDisable=function(){Xf(m,!0),Jt(Be,"resize",ce),Pe.removeEventListener("refresh",ce),P.kill()},t.lockAxis=t.lockAxis!==!1,p=new Lt(t),p.iOS=hs,hs&&!b()&&b(1),hs&&he.ticker.add(li),se=p._dc,D=he.to(p,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ew(b,b(),function(){return D.pause()})},onUpdate:zi,onComplete:se.vars.onComplete}),p};Pe.sort=function(s){if(hr(s))return Me.sort(s);var t=Be.pageYOffset||0;return Pe.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+Be.innerHeight}),Me.sort(s||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Pe.observe=function(s){return new Lt(s)};Pe.normalizeScroll=function(s){if(typeof s>"u")return kr;if(s===!0&&kr)return kr.enable();if(s===!1){kr&&kr.kill(),kr=s;return}var t=s instanceof Lt?s:r3(s);return kr&&kr.target===t.target&&kr.kill(),ba(t.target)&&(kr=t),t};Pe.core={_getVelocityProp:Rh,_inputObserver:tw,_scrollers:Ue,_proxies:pi,bridge:{ss:function(){Rn||_a("scrollStart"),Rn=pr()},ref:function(){return dr}}};Hb()&&he.registerPlugin(Pe);const n3="/boltfaredeal/assets/logo-CZH9TYL_.png";ne.registerPlugin(Pe);const i3=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null),i=O.useRef(null),a=O.useRef(null),c=O.useRef(null),u=O.useRef(null),p=O.useRef(null),[f,m]=O.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));O.useEffect(()=>{const y=document.documentElement,v=()=>{const _=y.getAttribute("data-theme")==="light"||y.classList.contains("light");m(_)};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),O.useEffect(()=>{const y=s.current;if(!y)return;const v=ne.context(()=>{const b=n.current.querySelectorAll(".about-word");ne.set(b,{opacity:0,y:65,rotateX:-65}),ne.set([t.current,i.current,a.current,c.current],{opacity:0}),ne.set(i.current,{y:28}),ne.set(a.current,{y:22}),ne.set(c.current,{x:110,scale:.82,rotation:12}),ne.timeline({scrollTrigger:{trigger:y,start:"top 75%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,duration:.6,ease:"power3.out"}).to(b,{opacity:1,y:0,rotateX:0,duration:.85,stagger:.055,ease:"power4.out"},"-=0.25").to(i.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.4").to(a.current,{opacity:1,y:0,duration:.65,ease:"power3.out"},"-=0.3").to(c.current,{opacity:1,x:0,scale:1,rotation:0,duration:1.35,ease:"expo.out"},"-=0.95"),ne.to(p.current,{rotation:360,duration:30,repeat:-1,ease:"none"}),ne.to(u.current,{scale:1.06,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),ne.to(c.current,{y:-75,ease:"none",scrollTrigger:{trigger:y,start:"top bottom",end:"bottom top",scrub:1.5}});const w=k=>{const C=y.getBoundingClientRect(),A=((k.clientX-C.left)/C.width-.5)*2,E=((k.clientY-C.top)/C.height-.5)*2;ne.to(c.current,{x:A*10,y:E*10,duration:1.1,ease:"power3.out"})};return y.addEventListener("mousemove",w),()=>{y.removeEventListener("mousemove",w)}},y);return()=>v.revert()},[]);const g=["Printing","Solutions","That","Build","Brands","That","Stand","Out"];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

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
            clamp(
              52px,
              4vw,
              80px
            );

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

      `}),o.jsx("section",{ref:s,className:`fairdeal-about ${f?"light-mode":""}`,children:o.jsxs("div",{className:"about-inner",children:[o.jsxs("div",{className:"about-content",children:[o.jsx("div",{ref:t,className:"about-label",children:"Premium Printing & Packaging"}),o.jsx("h1",{ref:n,className:"about-title",children:g.map((y,v)=>o.jsx("span",{className:"about-word",children:y},v))}),o.jsxs("p",{ref:i,className:"about-description",children:[o.jsx("strong",{children:"Fairdeal Print Pack India Pvt. Ltd."})," has been a trusted name in printing and document solutions since"," ",o.jsx("strong",{children:"1990"}),". With decades of experience in print media, we combine quality products, reliable service and professional execution to create solutions that help businesses communicate better."]}),o.jsxs("div",{className:"about-meta",children:[o.jsx("button",{ref:a,className:"about-button",children:"Discover Fairdeal"}),o.jsxs("div",{className:"about-year",children:["Established",o.jsx("strong",{children:"1990"})]})]})]}),o.jsxs("div",{ref:c,className:"about-visual-area",children:[o.jsx("div",{className:"visual-glow"}),o.jsxs("div",{className:"visual",children:[o.jsx("div",{className:"outer-ring"}),o.jsx("div",{ref:p,className:"rotating-text",children:o.jsxs("svg",{viewBox:"0 0 500 500",children:[o.jsx("defs",{children:o.jsx("path",{id:"fairdealTextCircle",d:`\r
                        M 250,250\r
                        m -190,0\r
                        a 190,190 0 1,1 380,0\r
                        a 190,190 0 1,1 -380,0\r
                      `})}),o.jsx("text",{children:o.jsx("textPath",{href:"#fairdealTextCircle",startOffset:"0%",children:"PRINTING • PACKAGING • QUALITY • SERVICE •"})})]})}),o.jsx("div",{className:"center-orbit"}),o.jsx("div",{ref:u,className:"center-logo",children:o.jsx("img",{src:n3,alt:"Fairdeal Print Pack India Pvt. Ltd.",className:"fairdeal-logo"})}),o.jsxs("div",{className:"visual-small-text",children:[o.jsx("span",{children:"36+"})," YEARS OF TRUST"]})]}),o.jsx("div",{className:"corner-line"})]})]})})]})},s3="/boltfaredeal/assets/vision-ERx-ZeWE.jpg",a3="/boltfaredeal/assets/mission-bV1jvH6z.jpg";ne.registerPlugin(Pe);const o3=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null),i=O.useRef(null),a=O.useRef(null),c=O.useRef(null),u=O.useRef(null),p=O.useRef(null),f=O.useRef(null),[m,g]=O.useState(!1);return O.useEffect(()=>{const y=document.documentElement,v=()=>{const _=y.getAttribute("data-theme")==="light"||y.classList.contains("light");g(_)};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),O.useEffect(()=>{const y=s.current;if(!y)return;const v=ne.context(()=>{const b=c.current.querySelectorAll(".vision-reveal");ne.set(b,{opacity:0,y:40}),ne.set(t.current,{opacity:0,y:100,rotate:3}),ne.set(i.current,{scale:1.15}),ne.timeline({scrollTrigger:{trigger:t.current,start:"top 78%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,y:0,rotate:0,duration:1.2,ease:"power4.out"}).to(b,{opacity:1,y:0,duration:.7,stagger:.1,ease:"power3.out"},"-=0.7"),ne.to(i.current,{scale:1,ease:"none",scrollTrigger:{trigger:t.current,start:"top bottom",end:"bottom top",scrub:1.5}}),ne.to(t.current,{y:-55,rotate:-1,ease:"none",scrollTrigger:{trigger:t.current,start:"top bottom",end:"bottom top",scrub:1.5}});const w=u.current.querySelectorAll(".mission-reveal");ne.set(w,{opacity:0,y:40}),ne.set(n.current,{opacity:0,y:120,rotate:-3}),ne.set(a.current,{scale:1.15}),ne.timeline({scrollTrigger:{trigger:n.current,start:"top 78%",toggleActions:"play none none reverse"}}).to(n.current,{opacity:1,y:0,rotate:0,duration:1.25,ease:"power4.out"}).to(w,{opacity:1,y:0,duration:.7,stagger:.1,ease:"power3.out"},"-=0.7"),ne.to(a.current,{scale:1,ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:1.5}}),ne.to(n.current,{y:-70,rotate:1,ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:1.5}}),ne.to(p.current,{rotation:360,duration:18,repeat:-1,ease:"none"}),ne.to(f.current,{rotation:-360,duration:22,repeat:-1,ease:"none"})},y);return()=>v.revert()},[]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

        /* =====================================================
           ROOT
        ===================================================== */

        .fairdeal-company-sections {

          --bg: #05090B;
          --panel: #0C1419;
          --panel-two: #111B21;

          --yellow: #FFDF00;
          --mint: #8FE7C8;

          --white: #F5F7F8;
          --gray: #98A1B1;
          --muted: #66717E;

          --border:
            rgba(255,255,255,0.09);

          position: relative;

          width: 100%;

          overflow: hidden;

          background:
            var(--bg);

          color:
            var(--white);

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;

        }


        /* =====================================================
           LIGHT MODE
        ===================================================== */

        .fairdeal-company-sections.light-mode {

          --bg: #F4F7F6;
          --panel: #FFFFFF;
          --panel-two: #EEF2F1;

          --yellow: #B49A00;
          --mint: #168B68;

          --white: #101518;
          --gray: #56616D;
          --muted: #7B858F;

          --border:
            rgba(5,9,11,0.10);

        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .company-bg-glow {

          position: absolute;

          width: 700px;
          height: 700px;

          left: 50%;
          top: 40%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,223,0,0.045),
              rgba(143,231,200,0.025),
              transparent 70%
            );

          filter:
            blur(30px);

          pointer-events:
            none;

        }


        .company-grid {

          position: absolute;

          inset: 0;

          opacity:
            0.22;

          background-image:

            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );

          background-size:
            100px 100px;

          pointer-events:
            none;

        }


        /* =====================================================
           SECTION WRAPPER
        ===================================================== */

        .company-inner {

          position: relative;

          z-index: 2;

          width:
            min(
              1180px,
              calc(100% - 80px)
            );

          margin:
            auto;

        }


        /* =====================================================
           COMMON CARD
        ===================================================== */

        .company-card {

          position: relative;

          min-height:
            560px;

          display:
            grid;

          grid-template-columns:
            48% 52%;

          border:
            1px solid
            var(--border);

          border-radius:
            30px;

          background:
            linear-gradient(
              135deg,
              var(--panel),
              var(--panel-two)
            );

          box-shadow:
            0 45px 110px
            rgba(0,0,0,0.45);

          overflow:
            visible;

          will-change:
            transform;

        }


        /* =====================================================
           CARD TOP LINE
        ===================================================== */

        .company-card::before {

          content:
            "";

          position:
            absolute;

          left:
            45px;

          right:
            45px;

          top:
            -1px;

          height:
            2px;

          background:
            linear-gradient(
              90deg,
              var(--yellow),
              var(--mint),
              transparent
            );

          z-index:
            10;

        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .company-content {

          position:
            relative;

          z-index:
            4;

          padding:
            65px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

        }


        .company-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            27px;

          color:
            var(--mint);

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.24em;

          text-transform:
            uppercase;

        }


        .company-label-number {

          color:
            var(--yellow);

        }


        .company-label-line {

          width:
            38px;

          height:
            1px;

          background:
            var(--yellow);

        }


        /* =====================================================
           TITLE
        ===================================================== */

        .company-title {

          margin:
            0;

          font-size:
            clamp(
              55px,
              6vw,
              88px
            );

          line-height:
            0.88;

          letter-spacing:
            -0.065em;

          font-weight:
            650;

        }


        .company-title-white {

          color:
            var(--white);

        }


        .company-title-mint {

          color:
            var(--mint);

        }


        .company-title-yellow {

          color:
            var(--yellow);

        }


        /* =====================================================
           TEXT
        ===================================================== */

        .company-description {

          max-width:
            520px;

          margin-top:
            30px;

          color:
            var(--gray);

          font-size:
            15px;

          line-height:
            1.8;

        }


        /* =====================================================
           HIGHLIGHT
        ===================================================== */

        .company-highlight {

          position:
            relative;

          margin-top:
            25px;

          padding-left:
            20px;

          color:
            var(--yellow);

          font-size:
            17px;

          font-weight:
            700;

          line-height:
            1.5;

        }


        .company-highlight::before {

          content:
            "";

          position:
            absolute;

          left:
            0;

          top:
            2px;

          bottom:
            2px;

          width:
            3px;

          background:
            var(--yellow);

          border-radius:
            4px;

        }


        /* =====================================================
           VALUES
        ===================================================== */

        .company-values {

          display:
            grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap:
            15px 25px;

          margin-top:
            35px;

        }


        .company-value {

          display:
            flex;

          align-items:
            center;

          gap:
            10px;

          color:
            var(--gray);

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.11em;

          text-transform:
            uppercase;

        }


        .company-dot {

          width:
            8px;

          height:
            8px;

          flex-shrink:
            0;

          border-radius:
            50%;

          background:
            var(--yellow);

          box-shadow:
            0 0 14px
            rgba(255,223,0,0.35);

        }


        .company-value:nth-child(even)
        .company-dot {

          background:
            var(--mint);

          box-shadow:
            0 0 14px
            rgba(143,231,200,0.35);

        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .company-image-area {

          position:
            relative;

          min-height:
            560px;

          padding:
            22px;

        }


        .company-image-frame {

          position:
            relative;

          width:
            100%;

          height:
            100%;

          overflow:
            hidden;

          background:
            #080D10;

          border-radius:
            0 27px 27px 0;

        }


        .company-image {

          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          transform:
            scale(1.15);

          filter:
            saturate(0.8)
            contrast(1.08);

          will-change:
            transform;

        }


        .company-image-overlay {

          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              90deg,
              rgba(5,9,11,0.68),
              transparent 50%
            ),
            linear-gradient(
              0deg,
              rgba(5,9,11,0.35),
              transparent
            );

        }


        /* =====================================================
           CORNER
        ===================================================== */

        .company-corner {

          position:
            absolute;

          right:
            28px;

          top:
            28px;

          width:
            55px;

          height:
            55px;

          border-top:
            2px solid
            var(--yellow);

          border-right:
            2px solid
            var(--yellow);

        }


        /* =====================================================
           ORBIT
        ===================================================== */

        .company-orbit {

          position:
            absolute;

          z-index:
            10;

          right:
            -35px;

          bottom:
            55px;

          width:
            125px;

          height:
            125px;

          border:
            1px dashed
            var(--mint);

          border-radius:
            50%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            rgba(5,9,11,0.65);

          backdrop-filter:
            blur(12px);

        }


        .company-orbit::before {

          content:
            "";

          width:
            58px;

          height:
            58px;

          border:
            1px solid
            var(--yellow);

          border-radius:
            50%;

        }


        .company-orbit-dot {

          position:
            absolute;

          right:
            17px;

          top:
            12px;

          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(--yellow);

          box-shadow:
            0 0 15px
            var(--yellow);

        }


        /* =====================================================
           LARGE NUMBER
        ===================================================== */

        .company-number {

          position:
            absolute;

          left:
            -20px;

          bottom:
            25px;

          z-index:
            8;

          color:
            rgba(255,255,255,0.055);

          font-size:
            115px;

          font-weight:
            800;

          line-height:
            0.8;

          letter-spacing:
            -0.08em;

        }


        /* =====================================================
           SMALL IMAGE LABEL
        ===================================================== */

        .company-image-label {

          position:
            absolute;

          top:
            30px;

          right:
            30px;

          z-index:
            8;

          padding:
            9px 14px;

          border:
            1px solid
            rgba(143,231,200,0.25);

          border-radius:
            50px;

          background:
            rgba(5,9,11,0.62);

          backdrop-filter:
            blur(12px);

          color:
            var(--mint);

          font-size:
            8px;

          font-weight:
            800;

          letter-spacing:
            0.18em;

          text-transform:
            uppercase;

        }


        /* =====================================================
           MISSION CARD
           ===================================================== */

        .mission-card {

          margin-top: 10px; 
          margin-bottom: 50px;

          grid-template-columns:
            52% 48%;

        }


        .mission-card .company-image-frame {

          border-radius:
            27px 0 0 27px;

        }


        .mission-card .company-image-area {

          order:
            1;

        }


        .mission-card .company-content {

          order:
            2;

          padding-left:
            55px;

        }


        .mission-card::before {

          background:
            linear-gradient(
              90deg,
              var(--mint),
              var(--yellow),
              transparent
            );

        }


        .mission-card .company-orbit {

          left:
            -35px;

          right:
            auto;

        }


        .mission-card .company-number {

          left:
            auto;

          right:
            -20px;

        }


        /* =====================================================
           MISSION SPECIAL ELEMENT
        ===================================================== */

        .mission-statement {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            12px;

          margin-top:
            30px;

          color:
            var(--mint);

          font-size:
            11px;

          font-weight:
            800;

          letter-spacing:
            0.17em;

          text-transform:
            uppercase;

        }


        .mission-statement-line {

          width:
            40px;

          height:
            2px;

          background:
            var(--yellow);

        }


        /* =====================================================
           MISSION FEATURE BOXES
        ===================================================== */

        .mission-points {

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            10px;

          margin-top:
            35px;

        }


        .mission-point {

          padding:
            11px 15px;

          border:
            1px solid
            var(--border);

          border-radius:
            50px;

          color:
            var(--gray);

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;

          transition:
            0.3s ease;

        }


        .mission-point:hover {

          border-color:
            var(--yellow);

          color:
            var(--yellow);

          transform:
            translateY(-3px);

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 1000px) {

          .company-inner {

            width:
              min(
                calc(100% - 40px),
                720px
              );

          }


          .company-card {

            grid-template-columns:
              1fr;

          }


          .company-content {

            padding:
              55px 45px;

          }


          .company-image-area {

            min-height:
              430px;

          }


          .company-image-frame {

            border-radius:
              0 0 27px 27px !important;

          }


          .mission-card {

            margin-top:
              120px;

          }


          .mission-card .company-image-area {

            order:
              1;

          }


          .mission-card .company-content {

            order:
              2;

            padding:
              55px 45px;

          }


          .company-number {

            display:
              none;

          }


          .company-orbit {

            right:
              20px;

          }


          .mission-card .company-orbit {

            left:
              auto;

            right:
              20px;

          }

        }


        @media (max-width: 600px) {

          .company-inner {

            width:
              calc(100% - 24px);

            padding:
              80px 0;

          }


          .company-card {

            min-height:
              auto;

            border-radius:
              22px;

          }


          .company-content {

            padding:
              40px 25px;

          }


          .company-title {

            font-size:
              57px;

          }


          .company-description {

            font-size:
              14px;

          }


          .company-highlight {

            font-size:
              15px;

          }


          .company-values {

            grid-template-columns:
              1fr;

          }


          .company-image-area {

            min-height:
              320px;

            padding:
              12px;

          }


          .company-image-frame {

            border-radius:
              18px !important;

          }


          .company-image-label {

            top:
              20px;

            right:
              20px;

          }


          .company-orbit {

            width:
              90px;

            height:
              90px;

            bottom:
              25px;

            right:
              5px;

          }


          .mission-card {

            margin-top:
              90px;

          }


          .mission-card .company-content {

            padding:
              40px 25px;

          }


          .mission-points {

            gap:
              7px;

          }


          .mission-point {

            font-size:
              8px;

            padding:
              9px 12px;

          }

        }

      `}),o.jsxs("section",{ref:s,className:`fairdeal-company-sections ${m?"light-mode":""}`,children:[o.jsx("div",{className:"company-bg-glow"}),o.jsx("div",{className:"company-grid"}),o.jsxs("div",{className:"company-inner",children:[o.jsxs("div",{ref:t,className:"company-card vision-card",children:[o.jsxs("div",{ref:c,className:"company-content",children:[o.jsxs("div",{className:"vision-reveal company-label",children:[o.jsx("span",{className:"company-label-number",children:"01"}),o.jsx("div",{className:"company-label-line"}),o.jsx("span",{children:"VISION"})]}),o.jsxs("h2",{className:"vision-reveal company-title",children:[o.jsx("span",{className:"company-title-white",children:"Our"}),o.jsx("br",{}),o.jsx("span",{className:"company-title-mint",children:"Vision"})]}),o.jsx("p",{className:"vision-reveal company-description",children:"Customer satisfaction and employee empowerment in tandem with innovation and excellence, to work together with our customers to help them achieve their goals."}),o.jsx("div",{className:"vision-reveal company-highlight",children:"Our success lies in your success."}),o.jsx("p",{className:"vision-reveal company-description",children:"Honesty, integrity, dedication and commitment will always be our priority and trademark. Dignity and respect are our guiding principles in every deal with customers and suppliers."}),o.jsxs("div",{className:"vision-reveal company-values",children:[o.jsxs("div",{className:"company-value",children:[o.jsx("span",{className:"company-dot"}),"Customer Satisfaction"]}),o.jsxs("div",{className:"company-value",children:[o.jsx("span",{className:"company-dot"}),"Innovation"]}),o.jsxs("div",{className:"company-value",children:[o.jsx("span",{className:"company-dot"}),"Integrity"]}),o.jsxs("div",{className:"company-value",children:[o.jsx("span",{className:"company-dot"}),"Commitment"]})]})]}),o.jsxs("div",{className:"company-image-area",children:[o.jsxs("div",{className:"company-image-frame",children:[o.jsx("img",{ref:i,className:"company-image",src:s3,alt:"Fairdeal printing vision"}),o.jsx("div",{className:"company-image-overlay"}),o.jsx("div",{className:"company-corner"}),o.jsx("div",{className:"company-image-label",children:"FAIRDEAL / VISION"})]}),o.jsx("div",{ref:p,className:"company-orbit",children:o.jsx("div",{className:"company-orbit-dot"})}),o.jsx("div",{className:"company-number",children:"01"})]})]}),o.jsxs("div",{ref:n,className:"company-card mission-card",children:[o.jsxs("div",{className:"company-image-area",children:[o.jsxs("div",{className:"company-image-frame",children:[o.jsx("img",{ref:a,className:"company-image",src:a3,alt:"Fairdeal printing mission"}),o.jsx("div",{className:"company-image-overlay"}),o.jsx("div",{className:"company-corner"}),o.jsx("div",{className:"company-image-label",children:"FAIRDEAL / MISSION"})]}),o.jsx("div",{ref:f,className:"company-orbit",children:o.jsx("div",{className:"company-orbit-dot"})}),o.jsx("div",{className:"company-number",children:"02"})]}),o.jsxs("div",{ref:u,className:"company-content",children:[o.jsxs("div",{className:"mission-reveal company-label",children:[o.jsx("span",{className:"company-label-number",children:"02"}),o.jsx("div",{className:"company-label-line"}),o.jsx("span",{children:"MISSION"})]}),o.jsxs("h2",{className:"mission-reveal company-title",children:[o.jsx("span",{className:"company-title-white",children:"Our"}),o.jsx("br",{}),o.jsx("span",{className:"company-title-yellow",children:"Mission"})]}),o.jsx("p",{className:"mission-reveal company-description",children:"To provide exceptional printing service by pursuing business through innovation and creativity that exceeds the expectations of our esteemed customers."}),o.jsxs("div",{className:"mission-reveal mission-statement",children:[o.jsx("span",{className:"mission-statement-line"}),"QUALITY • INNOVATION • SERVICE"]}),o.jsxs("div",{className:"mission-reveal mission-points",children:[o.jsx("span",{className:"mission-point",children:"Exceptional Service"}),o.jsx("span",{className:"mission-point",children:"Innovation"}),o.jsx("span",{className:"mission-point",children:"Creativity"}),o.jsx("span",{className:"mission-point",children:"Customer Focus"})]}),o.jsx("div",{className:"mission-reveal company-highlight",children:"Exceeding expectations through innovation and creativity."})]})]})]})]})]})};ne.registerPlugin(Pe);const l3=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null),i=O.useRef(null),a=O.useRef(null),c=O.useRef(null),u=O.useRef(null),p=O.useRef(null),f=O.useRef([]),[m,g]=O.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));O.useEffect(()=>{const v=document.documentElement,b=()=>{const w=v.getAttribute("data-theme")==="light"||v.classList.contains("light");g(w)};b();const _=new MutationObserver(b);return _.observe(v,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>_.disconnect()},[]),O.useEffect(()=>{const v=s.current;if(!v)return;const b=ne.context(()=>{const _=u.current.querySelectorAll(".values-card"),w=i.current.querySelectorAll(".values-word");ne.set(t.current,{opacity:0,scale:.75,x:-80}),ne.set(n.current,{opacity:0,x:-30}),ne.set(w,{opacity:0,y:80,rotateX:-75}),ne.set(a.current,{opacity:0,y:35}),ne.set(c.current,{scaleX:0,transformOrigin:"left center"}),ne.set(_,{opacity:0,y:70,rotateY:12}),ne.set(p.current,{opacity:0,y:40}),ne.set(f.current,{opacity:0,scale:0,rotation:-90}),ne.timeline({scrollTrigger:{trigger:v,start:"top 72%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:.08,scale:1,x:0,duration:1,ease:"expo.out"}).to(n.current,{opacity:1,x:0,duration:.6,ease:"power3.out"},"-=0.65").to(w,{opacity:1,y:0,rotateX:0,duration:.8,stagger:.08,ease:"power4.out"},"-=0.25").to(a.current,{opacity:1,y:0,duration:.7,ease:"power3.out"},"-=0.35").to(c.current,{scaleX:1,duration:1,ease:"expo.out"},"-=0.25").to(_,{opacity:1,y:0,rotateY:0,duration:.8,stagger:.13,ease:"power4.out"},"-=0.5").to(f.current,{opacity:1,scale:1,rotation:0,duration:.7,stagger:.1,ease:"back.out(2)"},"-=0.5").to(p.current,{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.35"),ne.to(t.current,{y:-25,duration:4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),f.current.forEach((A,E)=>{ne.to(A,{rotation:E%2===0?180:-180,duration:8+E,repeat:-1,ease:"none"})}),ne.to(t.current,{y:-100,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.5}}),ne.to(u.current,{y:-45,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.2}});const C=A=>{const E=v.getBoundingClientRect(),j=((A.clientX-E.left)/E.width-.5)*2,P=((A.clientY-E.top)/E.height-.5)*2;ne.to(".values-content",{x:j*5,y:P*3,duration:1,ease:"power3.out"}),ne.to(".values-number",{x:j*-10,duration:1.2,ease:"power3.out"})};return v.addEventListener("mousemove",C),()=>{v.removeEventListener("mousemove",C)}},v);return()=>b.revert()},[]);const y=[{number:"01",title:"Respect",text:"We treat our customers, employees and business partners with respect, dignity and professionalism.",icon:"↗"},{number:"02",title:"Honesty",text:"Honesty and transparency guide the way we communicate, work and build lasting relationships.",icon:"◇"},{number:"03",title:"Integrity",text:"We maintain strong ethical standards and remain committed to doing the right thing in every situation.",icon:"◎"},{number:"04",title:"Business Ethics",text:"We integrate responsible business ethics into every aspect of our operations and customer relationships.",icon:"✦"}];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

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
            clamp(
              65px,
              8vw,
              120px
            );

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

      `}),o.jsxs("section",{ref:s,className:`fairdeal-values ${m?"light-mode":""}`,children:[o.jsx("div",{className:"values-grid"}),o.jsx("div",{className:"values-glow"}),o.jsx("div",{ref:t,className:"values-number",children:"03"}),o.jsx("div",{className:"values-plus values-plus-1"}),o.jsx("div",{className:"values-plus values-plus-2"}),o.jsx("div",{className:"values-plus values-plus-3"}),o.jsxs("div",{className:"values-container",children:[o.jsxs("div",{className:"values-content",children:[o.jsxs("div",{ref:n,className:"values-label",children:[o.jsx("span",{className:"values-label-line"}),o.jsx("span",{className:"values-number-small",children:"03"}),o.jsx("span",{children:"—"}),o.jsx("span",{children:"CORE VALUES"})]}),o.jsxs("h2",{ref:i,className:"values-title",children:[o.jsx("span",{className:"values-word",children:"What"}),o.jsx("span",{className:"values-word",children:"We Believe"})]}),o.jsxs("p",{ref:a,className:"values-description",children:["We believe in treating our customers with"," ",o.jsx("strong",{children:"respect and faith."})," We integrate honesty, integrity and business ethics into every aspect of our business functioning."]}),o.jsx("div",{ref:c,className:"values-line"})]}),o.jsx("div",{ref:u,className:"values-cards",children:y.map((v,b)=>o.jsxs("div",{className:"values-card",children:[o.jsx("div",{className:"values-card-number",children:v.number}),o.jsx("div",{ref:_=>{f.current[b]=_},className:"values-card-icon",children:v.icon}),o.jsx("h3",{className:"values-card-title",children:v.title}),o.jsx("p",{className:"values-card-text",children:v.text})]},v.number))}),o.jsxs("div",{ref:p,className:"values-bottom",children:[o.jsxs("div",{children:[o.jsx("div",{className:"values-quote-label",children:"OUR PRINCIPLE"}),o.jsxs("p",{className:"values-quote",children:[o.jsx("span",{children:"Integrity"})," in every interaction."]})]}),o.jsx("p",{className:"values-footer-text",children:"These principles shape how we work, communicate and build long-term relationships with our customers, employees and business partners."})]})]})]})]})},c3="/boltfaredeal/assets/goal-K4Jdav5X.jpg";ne.registerPlugin(Pe);const u3=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null),i=O.useRef(null),a=O.useRef(null),c=O.useRef(null),u=O.useRef(null),p=O.useRef(null),f=O.useRef(null),[m,g]=O.useState(()=>typeof document>"u"?!1:document.documentElement.getAttribute("data-theme")==="light"||document.documentElement.classList.contains("light"));O.useEffect(()=>{const v=document.documentElement,b=()=>{const w=v.getAttribute("data-theme")==="light"||v.classList.contains("light");g(w)};b();const _=new MutationObserver(b);return _.observe(v,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>_.disconnect()},[]),O.useEffect(()=>{const v=s.current;if(!v)return;const b=ne.context(()=>{const _=n.current.querySelectorAll(".goal-word"),w=p.current.querySelectorAll(".goal-feature");ne.set(_,{y:80,opacity:0,rotateX:-70}),ne.set([t.current,i.current,c.current,u.current,p.current],{opacity:0}),ne.set(t.current,{x:-30}),ne.set(i.current,{y:30}),ne.set(c.current,{x:100,scale:.82,rotate:5}),ne.set(u.current,{scale:.6,rotate:-10}),ne.set(w,{y:25,opacity:0}),ne.timeline({scrollTrigger:{trigger:v,start:"top 72%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,x:0,duration:.6,ease:"power3.out"}).to(_,{y:0,opacity:1,rotateX:0,duration:.85,stagger:.07,ease:"power4.out"},"-=0.2").to(i.current,{y:0,opacity:1,duration:.75,ease:"power3.out"},"-=0.35").to(c.current,{x:0,opacity:1,scale:1,rotate:0,duration:1.3,ease:"expo.out"},"-=0.9").to(u.current,{opacity:1,scale:1,rotate:0,duration:.8,ease:"back.out(1.7)"},"-=0.65").to(p.current,{opacity:1,duration:.2},"-=0.3").to(w,{y:0,opacity:1,duration:.55,stagger:.12,ease:"power3.out"},"-=0.1"),ne.to(c.current,{y:-12,duration:3.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),ne.to(f.current,{rotation:360,duration:24,repeat:-1,ease:"none"}),ne.to(u.current,{y:-10,duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut"}),ne.to(c.current,{y:-90,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:1.5}});const C=A=>{const E=v.getBoundingClientRect(),j=((A.clientX-E.left)/E.width-.5)*2,P=((A.clientY-E.top)/E.height-.5)*2;ne.to(c.current,{x:j*12,y:P*8,duration:1,ease:"power3.out"}),ne.to(u.current,{x:j*-8,y:P*-5,duration:1.2,ease:"power3.out"})};return v.addEventListener("mousemove",C),()=>{v.removeEventListener("mousemove",C)}},v);return()=>b.revert()},[]);const y=["Our","Goal"];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`

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
            clamp(
              70px,
              8vw,
              125px
            );

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

      `}),o.jsxs("section",{ref:s,className:`fairdeal-goal ${m?"light-mode":""}`,children:[o.jsx("div",{className:"goal-bg-glow"}),o.jsx("div",{className:"goal-grid"}),o.jsxs("div",{className:"goal-container",children:[o.jsxs("div",{className:"goal-content",children:[o.jsxs("div",{ref:t,className:"goal-label",children:[o.jsx("span",{className:"goal-label-line"}),o.jsx("span",{className:"goal-number",children:"04"}),o.jsx("span",{children:"—"}),o.jsx("span",{children:"THE GOAL"})]}),o.jsx("h2",{ref:n,className:"goal-title",children:y.map((v,b)=>o.jsx("span",{className:"goal-word",children:v},b))}),o.jsxs("p",{ref:i,className:"goal-description",children:["Delighted customers are key to our success, and we strive to achieve this key every second.",o.jsx("br",{}),o.jsx("br",{}),"Printing is our passion. No matter what your print need is,"," ",o.jsx("strong",{children:"Fairdeal Print Pack India Pvt. Ltd."})," has the most effective print solutions."]}),o.jsxs("div",{className:"goal-line",children:[o.jsx("span",{className:"goal-line-yellow"}),o.jsx("span",{className:"goal-line-mint"})]}),o.jsxs("div",{ref:p,className:"goal-features",children:[o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"✦"}),o.jsx("div",{className:"goal-feature-title",children:"Customer"})]}),o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"◇"}),o.jsx("div",{className:"goal-feature-title",children:"Quality"})]}),o.jsxs("div",{className:"goal-feature",children:[o.jsx("div",{className:"goal-feature-icon",children:"◎"}),o.jsx("div",{className:"goal-feature-title",children:"Solutions"})]})]})]}),o.jsxs("div",{className:"goal-visual",children:[o.jsx("div",{ref:f,className:"goal-orbit"}),o.jsxs("div",{ref:c,className:"goal-image-wrap",children:[o.jsx("div",{className:"goal-image-back"}),o.jsxs("div",{className:"goal-image",children:[o.jsx("img",{ref:a,src:c3,alt:"Printing production"}),o.jsx("div",{className:"goal-image-overlay"})]}),o.jsxs("div",{ref:u,className:"goal-badge",children:[o.jsx("div",{className:"goal-target",children:"◎"}),o.jsx("div",{className:"goal-badge-small",children:"Our Goal"}),o.jsxs("div",{className:"goal-badge-title",children:["Experience",o.jsx("span",{children:"Quality"}),"Commitment"]})]})]}),o.jsx("div",{className:"goal-brand",children:"FAIRDEAL PRINT PACK"})]})]})]})]})};ne.registerPlugin(Pe);const d3=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null),i=O.useRef(null);return O.useEffect(()=>{const a=s.current,c=t.current;if(!a||!c)return;const u=ne.context(()=>{ne.utils.toArray(".fd-reveal").forEach(m=>{ne.fromTo(m,{opacity:0,y:35},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),ne.utils.toArray(".fd-reveal-left").forEach(m=>{ne.fromTo(m,{opacity:0,x:-45},{opacity:1,x:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),ne.utils.toArray(".fd-reveal-right").forEach(m=>{ne.fromTo(m,{opacity:0,x:45},{opacity:1,x:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:m,start:"top 88%",once:!0}})}),ne.fromTo(".fd-intro-line",{scaleX:0},{scaleX:1,duration:1.1,ease:"power3.inOut",scrollTrigger:{trigger:".fd-intro-section",start:"top 75%"}});const p=c.scrollWidth-window.innerWidth,f=ne.to(c,{id:"fd-horizontal",x:-p,ease:"none",scrollTrigger:{trigger:".fd-story-wrapper",start:"top top",end:()=>`+=${p+window.innerHeight*1.8}`,pin:!0,scrub:1.2,anticipatePin:1,onUpdate:m=>{const g=m.progress;i.current&&ne.to(i.current,{scaleX:g,duration:.15,overwrite:!0});const y=Math.round(1990+g*36);n.current&&(n.current.textContent=y)}}});ne.utils.toArray(".fd-story-card").forEach(m=>{ne.fromTo(m,{opacity:.25,scale:.96},{opacity:1,scale:1,duration:.8,ease:"power2.out",scrollTrigger:{trigger:m,containerAnimation:f,start:"left 85%",end:"left 45%",scrub:!0}})}),ne.utils.toArray(".fd-counter").forEach(m=>{const g=Number(m.dataset.value),y={value:0};ne.to(y,{value:g,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:m,start:"top 85%",once:!0},onUpdate:()=>{m.textContent=Math.floor(y.value).toLocaleString("en-IN")+"+"}})}),ne.fromTo(".fd-quote-card",{opacity:0,y:45},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".fd-quote-section",start:"top 82%"}}),ne.fromTo(".fd-quote-accent",{scaleX:0},{scaleX:1,duration:1,ease:"power3.inOut",scrollTrigger:{trigger:".fd-quote-section",start:"top 82%"}}),ne.fromTo(".fd-vision-box",{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".fd-vision-section",start:"top 82%"}}),ne.fromTo(".fd-founder-image-frame",{clipPath:"inset(12% 12% 12% 12%)",opacity:0},{clipPath:"inset(0% 0% 0% 0%)",opacity:1,duration:1.2,ease:"power3.inOut",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 82%",once:!0}}),ne.fromTo(".fd-founder-image",{scale:1.18},{scale:1,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 80%",end:"bottom 30%",scrub:1}}),ne.fromTo(".fd-founder-image-accent",{scaleX:0},{scaleX:1,duration:1,stagger:.15,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-image-wrap",start:"top 75%",once:!0}}),ne.fromTo(".fd-founder-signature",{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".fd-founder-signature",start:"top 90%",once:!0}}),ne.to(".fd-floating-circle",{y:-100,rotate:20,ease:"none",scrollTrigger:{trigger:a,start:"top bottom",end:"bottom top",scrub:1}}),Pe.refresh()},a);return()=>u.revert()},[]),o.jsxs("section",{ref:s,className:"fd-from-desk",children:[o.jsx("div",{className:"fd-floating-circle fd-circle-one"}),o.jsx("div",{className:"fd-floating-circle fd-circle-two"}),o.jsxs("section",{className:"fd-intro-section",children:[o.jsxs("div",{className:"fd-intro-header",children:[o.jsxs("div",{className:"fd-intro-label fd-reveal-left",children:[o.jsx("span",{className:"fd-dot"}),"FROM MY DESK"]}),o.jsx("div",{className:"fd-intro-line"}),o.jsx("span",{className:"fd-intro-year fd-reveal-right",children:"EST. 1990"})]}),o.jsxs("div",{className:"fd-intro-grid",children:[o.jsx("div",{className:"fd-intro-title fd-reveal-left",children:o.jsxs("h2",{children:["From a humble",o.jsx("span",{children:" beginning."})]})}),o.jsxs("div",{className:"fd-intro-copy fd-reveal-right",children:[o.jsx("p",{children:"I first learned the art of printing while working with a photographer and established Fairdeal Advertising with manual screen printing in 1990."}),o.jsx("p",{children:"What began as a small venture has grown into a trusted printing and packaging organisation in Pune, powered by perseverance, design thinking and teamwork."})]})]}),o.jsxs("div",{className:"fd-intro-bottom",children:[o.jsxs("div",{className:"fd-small-stat fd-reveal",children:[o.jsx("strong",{children:o.jsx("span",{className:"fd-counter","data-value":"30",children:"0+"})}),o.jsx("span",{children:"YEARS OF EXPERIENCE"})]}),o.jsxs("div",{className:"fd-small-stat fd-reveal",children:[o.jsx("strong",{children:o.jsx("span",{className:"fd-counter","data-value":"1000",children:"0+"})}),o.jsx("span",{children:"CLIENTS ACROSS INDIA"})]}),o.jsxs("div",{className:"fd-small-description fd-reveal",children:[o.jsx("span",{children:"THE FOUNDATION"}),o.jsx("p",{children:"Quality. Honesty. Teamwork."})]})]})]}),o.jsxs("div",{className:"fd-story-wrapper",children:[o.jsxs("div",{className:"fd-story-topbar",children:[o.jsx("span",{children:"THE JOURNEY"}),o.jsx("div",{className:"fd-year-counter",children:o.jsx("span",{ref:n,children:"1990"})})]}),o.jsx("div",{className:"fd-progress",children:o.jsx("div",{ref:i,className:"fd-progress-fill"})}),o.jsxs("div",{ref:t,className:"fd-story-track",children:[o.jsxs("article",{className:"fd-story-card fd-story-start",children:[o.jsx("div",{className:"fd-card-number",children:"01"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"1990"}),o.jsxs("h3",{children:["A small beginning.",o.jsx("br",{}),"A bigger dream."]}),o.jsx("p",{children:"I first learned the art of printing while working with a photographer. That experience became the foundation for Fairdeal Advertising and its manual screen printing journey."})]}),o.jsxs("div",{className:"fd-card-marker",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"02"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE EARLY YEARS"}),o.jsxs("h3",{children:["Ten years",o.jsx("br",{}),"of learning."]}),o.jsx("p",{children:"The first decade was filled with difficulties, uncertainty and lessons. Every challenge taught us to become better, stronger and more disciplined."}),o.jsxs("div",{className:"fd-mini-highlight",children:[o.jsx("strong",{children:"10"}),o.jsx("span",{children:"years of persistence"})]})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-stat-card",children:[o.jsx("div",{className:"fd-card-number",children:"03"}),o.jsxs("div",{className:"fd-big-stat",children:[o.jsx("span",{className:"fd-stat-prefix",children:"OVER"}),o.jsx("strong",{className:"fd-stat-number",children:"30+"}),o.jsxs("span",{className:"fd-stat-label",children:["YEARS OF",o.jsx("br",{}),"EXPERIENCE"]})]}),o.jsx("p",{children:"Almost three decades of building, improving and moving forward with the same commitment to quality."})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"04"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"TODAY"}),o.jsxs("h3",{children:["1000+",o.jsx("br",{}),"happy clients."]}),o.jsx("p",{children:"What started as a humble printing operation has grown into a trusted organisation serving clients across the country."}),o.jsxs("div",{className:"fd-client-stat",children:[o.jsx("strong",{children:"1000+"}),o.jsxs("span",{children:["CLIENTS",o.jsx("br",{}),"ACROSS INDIA"]})]})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-values",children:[o.jsx("div",{className:"fd-card-number",children:"05"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"OUR FOUNDATION"}),o.jsxs("h3",{children:["Quality.",o.jsx("br",{}),"Honesty.",o.jsx("br",{}),"Teamwork."]}),o.jsx("p",{children:"These are not just words at Fairdeal. They are the principles that helped us overcome difficult times and continue to shape every decision we make."})]}),o.jsxs("div",{className:"fd-values-orbit",children:[o.jsx("span",{children:"QUALITY"}),o.jsx("span",{children:"HONESTY"}),o.jsx("span",{children:"TEAMWORK"})]})]}),o.jsxs("article",{className:"fd-story-card",children:[o.jsx("div",{className:"fd-card-number",children:"06"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE PEOPLE"}),o.jsxs("h3",{children:["Building",o.jsx("br",{}),"the right team."]}),o.jsx("p",{children:"Team-building has always been a critical factor of growth. Choosing people who believe in quality and share the organisation's values has been one of our greatest priorities."})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-team",children:[o.jsx("div",{className:"fd-card-number",children:"07"}),o.jsxs("div",{className:"fd-team-visual",children:[o.jsx("div",{className:"fd-team-ring ring-one"}),o.jsx("div",{className:"fd-team-ring ring-two"}),o.jsx("div",{className:"fd-team-ring ring-three"}),o.jsxs("div",{className:"fd-team-center",children:[o.jsx("span",{children:"FAIRDEAL"}),o.jsx("strong",{children:"FAMILY"})]})]}),o.jsxs("div",{className:"fd-team-text",children:[o.jsx("span",{children:"THE REAL SUCCESS"}),o.jsx("p",{children:"Seeing team members who have been with us from the beginning settled and happy in their lives is one of my greatest achievements."})]})]}),o.jsxs("article",{className:"fd-story-card fd-story-end",children:[o.jsx("div",{className:"fd-card-number",children:"08"}),o.jsxs("div",{className:"fd-card-content",children:[o.jsx("span",{className:"fd-card-year",children:"THE NEXT CHAPTER"}),o.jsxs("h3",{children:["Still",o.jsx("br",{}),"moving forward."]}),o.jsx("p",{children:"With world-class printing technology and a strong team, our vision continues to grow — to become the leading and most preferred printing and packaging solution for our clients."})]})]})]})]}),o.jsxs("section",{className:"fd-message-section",children:[o.jsxs("div",{className:"fd-section-heading fd-reveal",children:[o.jsx("span",{children:"THE FOUNDER'S MESSAGE"}),o.jsx("div",{})]}),o.jsxs("div",{className:"fd-founder-layout",children:[o.jsx("div",{className:"fd-founder-image-wrap fd-reveal-left",children:o.jsxs("div",{className:"fd-founder-image-frame",children:[o.jsx("div",{className:"fd-founder-image-accent accent-top"}),o.jsx("div",{className:"fd-founder-image-accent accent-bottom"}),o.jsxs("div",{className:"fd-founder-image-inner",children:[o.jsx("img",{src:W1,alt:"Founder of Fairdeal Print Pack India Pvt. Ltd.",className:"fd-founder-image"}),o.jsx("div",{className:"fd-founder-image-overlay"})]}),o.jsxs("div",{className:"fd-founder-image-label",children:[o.jsx("span",{children:"FOUNDER"}),o.jsx("span",{children:"FAIRDEAL"})]})]})}),o.jsxs("div",{className:"fd-founder-content fd-reveal-right",children:[o.jsxs("div",{className:"fd-message-intro",children:[o.jsx("span",{children:"01 / VALUES"}),o.jsxs("h3",{children:["The principles",o.jsx("br",{}),"that kept us",o.jsx("em",{children:" moving."})]})]}),o.jsxs("div",{className:"fd-message-text",children:[o.jsx("p",{children:"My father was in the army and I came from a Maharashtrian family where there was minimal scope of becoming a businessman back in those days."}),o.jsx("p",{children:"The Army atmosphere gave me lessons about patriotism, discipline, cleanliness, taking care of the environment and the importance of health and fitness."}),o.jsx("p",{children:"But professionally, there was still a lot to learn. The first ten years brought all kinds of difficulties. The approach that helped me overcome them was simple: focus on quality and honesty, even in the most challenging times."}),o.jsxs("div",{className:"fd-founder-signature",children:[o.jsx("div",{className:"fd-signature-line"}),o.jsxs("div",{children:[o.jsx("strong",{children:"FOUNDER & MD"}),o.jsx("span",{children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."})]})]})]})]})]})]}),o.jsx("section",{className:"fd-quote-section",children:o.jsxs("div",{className:"fd-quote-card",children:[o.jsxs("div",{className:"fd-quote-top",children:[o.jsx("span",{children:"MY BELIEF"}),o.jsx("span",{children:"02 / 04"})]}),o.jsx("div",{className:"fd-quote-accent"}),o.jsxs("blockquote",{children:["“You take care of the organisation,",o.jsx("span",{children:"the organisation will take care of you."}),"”"]}),o.jsxs("div",{className:"fd-quote-footer",children:[o.jsx("span",{children:"— Founder & MD"}),o.jsx("span",{children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."})]})]})}),o.jsxs("section",{className:"fd-team-message",children:[o.jsxs("div",{className:"fd-section-heading fd-reveal",children:[o.jsx("span",{children:"PEOPLE FIRST"}),o.jsx("div",{})]}),o.jsxs("div",{className:"fd-team-message-grid",children:[o.jsx("div",{className:"fd-team-message-title fd-reveal-left",children:o.jsxs("h3",{children:["A company",o.jsx("br",{}),"is only as",o.jsx("br",{}),o.jsx("span",{children:"strong as its people."})]})}),o.jsxs("div",{className:"fd-team-message-copy fd-reveal-right",children:[o.jsx("p",{children:"From the beginning, I believed team-building was a critical factor of growth. I was focused and selective in choosing people who believed in a quality mindset and shared the organisation's core values."}),o.jsx("p",{children:"Today, I am grateful for the team members who have been with me from the beginning. Seeing them settled and happy in their lives is a real success for me."}),o.jsxs("div",{className:"fd-team-values",children:[o.jsx("span",{children:"PEOPLE"}),o.jsx("span",{children:"TRUST"}),o.jsx("span",{children:"GROWTH"})]})]})]})]}),o.jsx("section",{className:"fd-vision-section",children:o.jsxs("div",{className:"fd-vision-box",children:[o.jsxs("div",{className:"fd-vision-side",children:[o.jsx("span",{children:"03 / VISION"}),o.jsx("div",{className:"fd-vision-number",children:"2030"})]}),o.jsxs("div",{className:"fd-vision-main",children:[o.jsx("span",{className:"fd-vision-kicker",children:"LOOKING AHEAD"}),o.jsxs("h3",{children:["To become the"," ",o.jsxs("span",{children:["preferred printing"," "]}),"& packaging partner."]}),o.jsx("p",{children:"We will continue to focus on quality, cost-effectiveness and commitment without compromise. A positive working atmosphere, timely deliverables and a quality mindset will remain at the heart of Fairdeal."}),o.jsxs("div",{className:"fd-vision-points",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"01"}),o.jsx("span",{children:"QUALITY"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"02"}),o.jsx("span",{children:"COST-EFFECTIVENESS"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"03"}),o.jsx("span",{children:"COMMITMENT"})]})]})]})]})}),o.jsx("section",{className:"fd-closing",children:o.jsxs("div",{className:"fd-closing-inner",children:[o.jsxs("div",{className:"fd-closing-top",children:[o.jsx("span",{children:"1990 — NOW"}),o.jsx("span",{children:"AND BEYOND"})]}),o.jsxs("h2",{children:["The journey",o.jsx("span",{children:"continues."})]}),o.jsxs("div",{className:"fd-closing-bottom",children:[o.jsx("p",{children:"We promise to keep upgrading every day and remain a catalyst for wealth creation through premium printing and packaging solutions."}),o.jsxs("div",{children:[o.jsx("strong",{children:"FAIRDEAL"}),o.jsx("span",{children:"PRINT PACK INDIA PVT. LTD."})]})]})]})}),o.jsx("style",{children:`

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
            clamp(45px, 6vw, 82px);

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

      `})]})},p3=()=>o.jsxs("main",{className:"about-us",children:[o.jsx(i3,{}),o.jsx(o3,{}),o.jsx(l3,{}),o.jsx(u3,{}),o.jsx(d3,{})]}),f3="/boltfaredeal/assets/2%20in%201%20Shrink-ciZgVCTz.png",h3="/boltfaredeal/assets/ALPNA-Retrofit%20Machine-DXwxae8c.png",m3="/boltfaredeal/assets/Automatic%20Continuous%20Lamination-BykSUQZb.png",g3="/boltfaredeal/assets/Automatic%20Cutting%20Machine-hVLOwTR1.png",x3="/boltfaredeal/assets/Automatic%20Punching%20Machine-PThhMVPI.png",v3="/boltfaredeal/assets/Automatic%20Sheet-BWjiNHu0.png",y3="/boltfaredeal/assets/Autoprint-D1iTHp6s.png",b3="/boltfaredeal/assets/Blister%20Coat-BucTVwEN.png",w3="/boltfaredeal/assets/Continuous%20Stationery-DWtCVyJL.png",_3="/boltfaredeal/assets/Core%20Cutting-C_CPNU6Z.png",N3="/boltfaredeal/assets/Corrugation%20Machine-C2P2UJOX.png",k3="/boltfaredeal/assets/Cut%20To%20Length-BIoCsxTS.png",j3="/boltfaredeal/assets/FLEXO%20ROTARY-CDtbjxS4.png",E3="/boltfaredeal/assets/Flatbed%20Punching-CruOeq5e.png",S3="/boltfaredeal/assets/Gluing%20Machine-BuHgCHPn.png",A3="/boltfaredeal/assets/Graphica%20Screen-CYDhuuWD.png",C3="/boltfaredeal/assets/HEIDELBERG-VvLhSvTq.png",T3="/boltfaredeal/assets/Laser%20Serial-FzlpndFf.png",P3="/boltfaredeal/assets/Shinohara%2066%20II%20P-CWTz-Ggr.png",R3="/boltfaredeal/assets/Slitting%20Machine-aEhP8rlD.png",L3="/boltfaredeal/assets/Sticker%20Half%20Cutting-KFMxqlB_.png";ne.registerPlugin(Pe);const O3=[{title:"Offset Printing",description:"High-quality offset production for brand, business, and publishing needs. Precise registration and dependable color reproduction bring brochures, catalogues, books, labels, cartons, and stationery to life at scale.",applications:"Brochures / Catalogues / Books / Labels / Cartons / Stationery",features:["Brochures & Catalogues","Books & Company Profiles","Labels & Cartons","Business Stationery"]},{title:"Flexo Printing",description:"Flexible, high-volume printing for labels, tags, packaging, and shrink sleeves. Multi-colour rotary production helps maintain crisp detail and consistent output across long runs and repeat orders.",applications:"Product Labels / Packaging / Tags / Shrink Sleeves",features:["Multi-Colour Label Printing","Rotary Die Cutting","Tags & Shrink Sleeves","Consistent Long Runs"]},{title:"Copier Paper",description:"Reliable sourcing and distribution of copier, coated, and sheet-form paper for offices, print rooms, and production partners. Choose the right grade and format for everyday printing or specialist finishing.",applications:"Offices / Commercial Printers / Production Houses",features:["Copier Paper","Coated Paper Grades","Sheet-Form Supply","Bulk Distribution"]},{title:"Corrugation",description:"Protective corrugated packaging developed around the product, journey, and presentation. From everyday transit cartons to custom-fit packaging, flute and board options balance strength with practical handling.",applications:"Transit Cartons / Custom Boxes / Product Protection",features:["E, F & C Flute Options","Custom Box Formats","Transit Protection","Retail-Ready Packaging"]},{title:"Others",description:"Specialist print and finishing options for the details that make a project distinct. Combine tapes, labels, stickers, and screen printing to complete packaging and promotional requirements.",applications:"Packaging Details / Product Identification / Promotions",features:["BOPP Tapes","Labels & Stickers","Screen Printing","Specialist Finishing"]}],I3=Object.entries(Object.assign({"../assets/images/Technology/2 in 1 Shrink.png":f3,"../assets/images/Technology/ALPNA-Retrofit Machine.png":h3,"../assets/images/Technology/Automatic Continuous Lamination.png":m3,"../assets/images/Technology/Automatic Cutting Machine.png":g3,"../assets/images/Technology/Automatic Punching Machine.png":x3,"../assets/images/Technology/Automatic Sheet.png":v3,"../assets/images/Technology/Autoprint.png":y3,"../assets/images/Technology/Blister Coat.png":b3,"../assets/images/Technology/Continuous Stationery.png":w3,"../assets/images/Technology/Core Cutting.png":_3,"../assets/images/Technology/Corrugation Machine.png":N3,"../assets/images/Technology/Cut To Length.png":k3,"../assets/images/Technology/FLEXO ROTARY.png":j3,"../assets/images/Technology/Flatbed Punching.png":E3,"../assets/images/Technology/Gluing Machine.png":S3,"../assets/images/Technology/Graphica Screen.png":A3,"../assets/images/Technology/HEIDELBERG.png":C3,"../assets/images/Technology/Laser Serial.png":T3,"../assets/images/Technology/Shinohara 66 II P.png":P3,"../assets/images/Technology/Slitting Machine.png":R3,"../assets/images/Technology/Sticker Half Cutting.png":L3})),Kv=I3.reduce((s,[t,n])=>{const i=t.split("/").pop()?.replace(/\.[^/.]+$/,"")??"";return i&&(s[i.toLowerCase()]=n),s},{}),Jv=s=>s.toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim(),M3=s=>{const t=Jv(s);let n=Object.values(Kv)[0]??"",i=-1;return Object.entries(Kv).forEach(([a,c])=>{const u=Jv(a),p=t.split(" ").filter(Boolean),f=u.split(" ").filter(Boolean),g=p.filter(y=>f.includes(y)||f.some(v=>v.includes(y)||y.includes(v))).length*3+(t.includes(u)?18:0);g>i&&(i=g,n=c)}),n},z3=[{title:"Flexo Rotary Label Printing Machine – RK-FMS-NICE-P-320",features:["8 Colour Printing Machine","One UV Dryer Unit","Two Rotary Die Cutting Units"]},{title:"Flexo Flatbed Punching Machine",features:["Flatbed Punching"]},{title:"Flexo Cut To Length – CT-300 New",features:["Cut-to-Length"]},{title:"Flexo Core Cutting Machine",features:["Core Cutting"]},{title:"Flexo Gluing Machine – GT-300 HS",features:["Gluing"]},{title:"Flexo Slitting Machine",features:["Flexo Slitting"]},{title:"HEIDELBERG SM 74 P II",features:["German Make","5 Colour Offset Printing",'Size: 20" × 30"']},{title:"ALPNA-Retrofit Machine",features:["MET PET Printing","Drip Off","UV","Blister Coating","Aqueous Varnish Setup",'Size: 28" × 40"']},{title:"Automatic Sheet Folding Machine – Heidelberg Stahl",features:['Size: 25" × 36"']},{title:"Corrugation Machine",features:['E-Flute: 36"','F-Flute: 52"','C-Flute: 68"']},{title:"Shinohara 66 II P Offset Printer",features:["Perfecter","2 Colour",'Size: 26" × 19"',"2 Nos."]},{title:"Autoprint Offset Printing Machine",features:["Single Colour",'Size: 10" × 15"',"2 Nos."]},{title:"Automatic Cutting Machine",features:['Polar Mohr – German Make – 36" – 3 Nos.','Horizon – Japan Make – 45" – 1 No.']},{title:"Automatic Punching Machine",features:['Size: 22" × 32" – 2 Nos.','Size: 36" × 46" – 1 No.']},{title:"Automatic Continuous Lamination Machine",features:["Capacity up to 850 mm"]},{title:"Continuous Stationery Setup",features:["Continuous Stationery Production"]},{title:"Sticker Half Cutting cum Creasing & Perforating Machine",features:["Half Cutting","Creasing","Perforating"]},{title:"Graphica Screen Printing Setup",features:["Full-fledged Screen Printing Setup","2 Nos."]},{title:"2-in-1 Shrink Heat Packing Machine",features:["Shrink Heat Packing"]},{title:"Laser Serial Numbering Machine",features:["Laser Serial Numbering"]},{title:"Blister Coat Testing Machine",features:["Blister Coat Testing"]}].map(s=>({...s,image:M3(s.title)})),D3=()=>{const s=O.useRef(null),t=O.useRef(null),n=O.useRef(null),i=O.useRef(null),a=O.useRef(null),c=O.useRef(null),u=O.useRef(null),p=O.useRef(null),f=O.useRef(null),[m,g]=O.useState(!1);return O.useEffect(()=>{const y=document.documentElement,v=()=>{g(y.getAttribute("data-theme")==="light"||y.classList.contains("light"))};v();const b=new MutationObserver(v);return b.observe(y,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>b.disconnect()},[]),O.useEffect(()=>{const y=s.current;if(!y)return;const v=ne.context(()=>{const b=n.current?.querySelectorAll(".services-hero-word"),_=[i.current,a.current,c.current,p.current,f.current];ne.set(b,{opacity:0,y:65,rotateX:-65}),ne.set([t.current,..._],{opacity:0}),ne.set(_,{y:28}),ne.set(u.current,{opacity:0,x:90,scale:.84,rotation:4}),ne.timeline({scrollTrigger:{trigger:y,start:"top 75%",toggleActions:"play none none reverse"}}).to(t.current,{opacity:1,duration:.6,ease:"power3.out"}).to(b,{opacity:1,y:0,rotateX:0,duration:.85,stagger:.055,ease:"power4.out"},"-=0.25").to(i.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.35").to(a.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.3").to(c.current,{opacity:1,y:0,duration:.75,ease:"power3.out"},"-=0.4").to(u.current,{opacity:1,x:0,scale:1,rotation:0,duration:1.15,ease:"expo.out"},"-=0.35").to([p.current,f.current],{opacity:1,y:0,duration:.65,stagger:.08,ease:"power3.out"},"-=0.3")},y);return()=>v.revert()},[]),o.jsxs("main",{className:`services-page relative w-full overflow-hidden ${m?"light-mode":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx("section",{ref:s,className:"services-hero relative px-6 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-10 lg:pb-28 lg:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[o.jsx("div",{ref:t,className:"services-hero-label",children:"OUR SERVICES"}),o.jsx("span",{className:"services-hero-copy hidden text-xs tracking-[0.2em] md:block",children:"01 / SERVICES"})]}),o.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start",children:[o.jsxs("div",{children:[o.jsxs("h1",{ref:n,className:"max-w-[1100px] text-[var(--services-white)]",children:[o.jsx("span",{className:"services-hero-word",children:"Print."}),o.jsx("br",{}),o.jsx("span",{className:"services-hero-word services-hero-accent",children:"Pack."})," ",o.jsx("span",{className:"services-hero-word services-hero-mint",children:"Deliver."})]}),o.jsx("p",{ref:i,className:"services-hero-copy mt-7 max-w-[560px] text-base leading-7 sm:text-lg",children:"From first proof to final delivery, we make print work hard for your brand."}),o.jsx("div",{ref:a,className:"mt-10 grid max-w-[650px] grid-cols-3 gap-3",children:Pi.slice(1,4).map((y,v)=>o.jsxs("div",{className:"relative aspect-[1.55/1] overflow-hidden bg-[var(--services-panel-2)]",children:[o.jsx("img",{src:y.image,alt:y.title,loading:"lazy",className:"h-full w-full object-cover transition-transform duration-700 hover:scale-105"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"}),o.jsx("div",{className:`absolute inset-x-0 bottom-0 h-[2px] ${v===1?"bg-[var(--services-mint)]":"bg-[var(--services-yellow)]"}`})]},y.title))})]}),o.jsxs("div",{className:"max-w-[400px] lg:pb-3",children:[o.jsx("p",{ref:c,className:"services-hero-copy text-sm leading-7 sm:text-base",children:"Offset and flexographic printing, paper supply, and corrugated production come together for dependable end-to-end output."}),o.jsxs("div",{ref:u,className:"relative mt-8 aspect-[1.45/1] overflow-hidden bg-[var(--services-panel-2)]",children:[o.jsx("img",{src:Pi[0].image,alt:"Offset printing production",className:"services-hero-image"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/60 via-black/5 to-transparent"}),o.jsx("span",{className:"services-hero-image-caption absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.2em]",children:"Offset production / 01"}),o.jsx(no,{className:"absolute bottom-4 right-4 h-4 w-4 text-[#8FE7C8]","aria-hidden":"true"})]}),o.jsx("div",{className:"services-hero-rule mt-5 h-px w-full"}),o.jsxs("div",{ref:p,className:"services-hero-meta mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em]",children:[o.jsx("span",{children:"Fairdeal"}),o.jsx("span",{children:"Print & Packaging"})]})]})]}),o.jsxs("div",{ref:f,className:"services-hero-explore mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em]",children:[o.jsx(h_,{className:"h-4 w-4"}),o.jsx("span",{children:"Explore our capabilities"})]})]})}),o.jsx("section",{className:"relative px-6 pb-2 sm:px-8 lg:px-10 lg:pb-3",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-10 flex items-end justify-between border-b border-[var(--theme-border)] pb-5",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"The Fairdeal System"}),o.jsxs("h2",{className:"mt-3 text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl",children:[Pi.length," capabilities.",o.jsx("span",{className:"ml-2 font-normal text-[var(--theme-accent)]",children:"One workflow."})]})]}),o.jsxs("span",{className:"hidden text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)] md:block",children:[String(Pi.length).padStart(2,"0")," Capabilities"]})]}),o.jsx("div",{className:"relative",children:Pi.map((y,v)=>{const b=O3.find(k=>k.title===y.title)??{title:y.title,description:y.description,applications:"Print / Packaging / Distribution",features:[]},_=y.title?.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),w=v%2===0;return o.jsxs("article",{className:"group relative border-b border-[var(--theme-border)] py-8 sm:py-10 lg:py-10",children:[o.jsx("div",{className:"pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[11rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-text)] opacity-[0.035] xl:block",children:String(v+1).padStart(2,"0")}),o.jsxs("div",{className:"relative grid gap-8 lg:grid-cols-[0.12fr_0.88fr] lg:items-center",children:[o.jsxs("div",{className:"flex items-start gap-4 lg:block",children:[o.jsx("span",{className:"text-[11px] tracking-[0.18em] text-[var(--theme-accent)]",children:String(v+1).padStart(2,"0")}),o.jsx("div",{className:"mt-1 hidden h-16 w-px bg-[var(--theme-border)] lg:block"}),o.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-muted)] lg:mt-3 lg:block",children:"Capability"})]}),o.jsxs("div",{className:`grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center ${w?"":"lg:[&>*:first-child]:order-2"}`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--theme-accent)] transition-transform duration-500 group-hover:scale-150"}),o.jsxs("span",{className:"text-[9px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:["Fairdeal /"," ",String(v+1).padStart(2,"0")]})]}),o.jsx("h3",{className:"services-display-heading max-w-[720px] text-[var(--theme-text)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2",children:y.title}),o.jsx("p",{className:"mt-7 max-w-[620px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:b?.description}),o.jsxs("p",{className:"mt-4 max-w-[620px] text-[10px] font-medium uppercase leading-5 tracking-[0.12em] text-[var(--theme-accent-alt)]",children:["Applications: ",b?.applications]}),o.jsxs(ln,{to:`/services/${_}`,className:"group/link mt-7 inline-flex items-center gap-3 text-sm text-[var(--theme-text)]",children:[o.jsx("span",{className:"border-b border-[var(--theme-text)] pb-1",children:"Explore service"}),o.jsx(no,{className:"h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"})]})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"relative aspect-[1.35/1] overflow-hidden bg-[var(--theme-bg)]",children:[o.jsx("img",{src:y.image,alt:y.title,loading:"lazy",className:"h-full w-full object-cover grayscale-[15%] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent opacity-70"}),o.jsx("div",{className:"absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white",children:"Print / Production"}),o.jsxs("div",{className:"absolute bottom-5 right-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/70",children:[o.jsx("span",{children:"View capability"}),o.jsx(no,{className:"h-3 w-3"})]})]}),o.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:b?.features.map(k=>o.jsxs("div",{className:"flex items-center gap-2 border-b border-[var(--theme-border)] pb-2",children:[o.jsx(k_,{className:"h-3.5 w-3.5 shrink-0 text-[var(--theme-accent)]"}),o.jsx("span",{className:"text-[11px] leading-5 text-[var(--theme-text-soft)]",children:k})]},k))})]})]})]}),o.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--theme-accent)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"})]},y.title)})})]})}),o.jsx("section",{className:"relative border-y border-[var(--theme-border)]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] px-6 py-0 sm:px-8 sm:py-28 lg:px-10 lg:py-10",children:[o.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.3fr_1.7fr]",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"HOW WE WORK"}),o.jsxs("div",{className:"mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--theme-accent)]"}),o.jsx("span",{children:"From idea to output"})]})]}),o.jsxs("div",{children:[o.jsxs("h2",{className:"services-display-heading max-w-[1050px] text-[var(--theme-text)]",children:["We don't just",o.jsx("br",{}),o.jsx("span",{className:"font-normal text-[var(--theme-accent)]",children:"print products."}),o.jsx("br",{}),"We build outcomes."]}),o.jsx("p",{className:"mt-10 max-w-[680px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Every project moves through a connected system of material selection, production, finishing, packaging and delivery. Our capabilities work together so the final product performs exactly as intended."})]})]}),o.jsx("div",{className:"mt-20 grid border-y border-[var(--theme-border)] sm:grid-cols-2 lg:grid-cols-4",children:[["01","Understand","Project requirements"],["02","Produce","Precision manufacturing"],["03","Finish","Detail & quality control"],["04","Deliver","Ready for the market"]].map(([y,v,b])=>o.jsxs("div",{className:"group border-b border-[var(--theme-border)] p-6 last:border-b-0 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-8",children:[o.jsx("span",{className:"text-[10px] tracking-[0.2em] text-[var(--theme-accent)]",children:y}),o.jsx("h3",{className:"mt-12 text-xl font-medium tracking-[-0.03em] text-[var(--theme-text)] transition-transform duration-500 group-hover:translate-x-1",children:v}),o.jsx("p",{className:"mt-2 text-xs leading-6 text-[var(--theme-text-soft)]",children:b})]},y))})]})}),o.jsxs("section",{className:"relative overflow-hidden border-b border-[var(--theme-border)]",children:[o.jsxs("div",{className:"mx-auto max-w-[1500px] px-6 py-2 sm:px-8 sm:py-28 lg:px-10 lg:py-3",children:[o.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-5 text-left text-[var(--theme-accent-alt)]",children:"LET'S GET STARTED"}),o.jsxs("div",{className:"relative",children:[o.jsx("span",{className:"absolute -left-1 -top-7 text-xs text-[var(--theme-accent)]",children:"+"}),o.jsx("p",{className:"max-w-[330px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"We always try to implement our creative ideas at the highest level. Tell us about your project and we will make it work."})]})]}),o.jsx("div",{children:o.jsxs("h2",{className:"services-display-heading max-w-[1000px] text-[var(--theme-text)]",children:["Have a project",o.jsx("br",{}),o.jsx("span",{className:"font-normal text-[var(--theme-accent)]",children:"in mind?"})]})})]}),o.jsx("form",{className:"mt-10 border-t border-[var(--theme-border)] pt-8 lg:mt-10",children:o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[0.7fr_0.7fr_1.6fr_auto] lg:items-end",children:[o.jsxs("label",{className:"block",children:[o.jsx("span",{className:"mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Name"}),o.jsx("input",{type:"text",className:"w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"})]}),o.jsxs("label",{className:"block",children:[o.jsx("span",{className:"mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Email"}),o.jsx("input",{type:"email",className:"w-full border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"})]}),o.jsxs("label",{className:"block",children:[o.jsx("span",{className:"mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Tell us about the project"}),o.jsx("textarea",{rows:1,className:"w-full resize-none border-0 border-b border-[var(--theme-border)] bg-transparent pb-3 text-sm text-[var(--theme-text)] outline-none transition-colors focus:border-[var(--theme-accent)]"})]}),o.jsxs(jt,{type:"submit",className:"h-[52px] whitespace-nowrap px-7 text-sm",children:["Start a conversation",o.jsx(no,{className:"h-4 w-4"})]})]})})]}),o.jsx("div",{className:"pointer-events-none absolute bottom-[-80px] right-[-20px] hidden text-[18rem] font-medium leading-none tracking-[-0.1em] text-[var(--theme-accent)] opacity-[0.04] lg:block",children:"03"})]})]})},F3=[["01","VERSATILITY","Versatile printing","A range of inks and coatings helps achieve the appearance and protection different products require.",D_],["02","MATERIALS","Multiple substrates","Print on paper, film, foil, Tyvek, and a broad selection of other substrates.",Ln],["03","COST EFFICIENCY","Efficient production","Efficient consumable use and high production speeds make flexography suitable for economical runs.",w1],["04","PRESS SPEED","High press speeds","High-speed production is particularly suited to long runs of custom labels.",Uu],["05","PLATE DURABILITY","Long plate life","Durable flexographic plates support extended production runs and consistent reproduction.",cc],["06","COLOR STABILITY","Consistent color","Careful color control helps maintain stable results throughout a run and from run to run.",Yh]],B3=[["Prime product labels","Premium product identification",eh],["Industrial labels","Industrial identification",cc],["Tamper-evident labels","Security-focused labeling",ca],["UL labels","Compliance-oriented labels",Bu],["RoHS labels","Regulatory identification",Bu],["Asset labels and tags","Asset identification systems",Ox],["Danger and caution labels","Safety communication",Ix],["Window decals and static clings","Window graphics and clings",Hh],["Warning labels","High-visibility safety labels",Ix],["Barcode and serialized labels","Trackable product identification",Ox],["Outdoor equipment labels","Outdoor-use identification",Bu],["Medical labels","Medical product identification",ca],["Custom labels and tags","Made for your requirements",eh],["Inventory labels","Stock and inventory management",Nd],["Cover-up labels","Over-labeling applications",Ln],["Security labels","Product security and protection",ca]],U3=[["360-degree display","Artwork and messaging wrap around the container for greater shelf impact.",k1],["Full-body coverage","A large printable surface supports product information and brand storytelling.",Ln],["Clear windows","Transparent areas can let customers see the product inside.",Hh],["Tamper evidence","Tamper-evident constructions can add an extra layer of product security.",ca],["High print quality","Detailed, high-quality artwork supports demanding product presentation.",Vh],["Protected graphics","Reverse printing can help protect ink from scratching and wear.",N1]],W3=[["01 / SECURITY","Tamper-evident bands","Used for consumer protection across pharmaceutical, vitamin, food, and beverage products."],["02 / BRANDING","Full-body shrink sleeves","Used across beverage, personal care, food, household chemical, and automotive packaging."],["03 / PROMOTIONS","Multi-packs","Promotional wraps can bundle products and support cross-branded campaigns."]],ra="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",H3=({service:s})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${ra} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsxs("div",{className:"grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsxs("div",{className:"relative z-10 space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Flexographic ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Printing"})]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:[s.description," Flexography uses flexible raised-image plates to transfer ink onto a wide range of substrates with speed, consistency, and precision."]}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:[[Ln,"FLEXIBLE PLATES"],[Uu,"HIGH PRESS SPEEDS"],[Yh,"COLOR CONTROL"],[N1,"MULTI-SUBSTRATE"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-white/[0.025] px-3 py-2 text-[10px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:[o.jsx(t,{className:"h-3.5 w-3.5 text-[var(--theme-accent)]"}),n]},n))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(jt,{href:"#applications",className:"h-12 px-6 text-sm font-medium",children:["Explore applications ",o.jsx(An,{className:"h-4 w-4"})]}),o.jsx(jt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] bg-black/20 sm:min-h-[430px]",children:[o.jsx("img",{src:s.image,alt:"Flexographic printing press transferring ink onto a substrate",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"FLEXOGRAPHIC PRINTING PRESS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," ACTIVE FEED"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Flexible plates. ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Consistent print."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"High-speed ink transfer for labels, packaging, and a wide range of substrates."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["PRINT PROCESS","FLEXOGRAPHIC"],["PLATE TYPE","FLEXIBLE"],["APPLICATION","LABELS & PACKAGING"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})]})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Advantages of flexographic printing"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:F3.map(([t,n,i,a,c])=>o.jsxs("article",{"data-reveal":"up",className:`${ra} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`,children:[o.jsx("div",{className:"mb-5 grid h-11 w-11 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(c,{className:"h-5 w-5"})}),o.jsxs("p",{className:"mb-2 text-[10px] font-semibold tracking-[0.16em] text-[var(--theme-accent-alt)]",children:[t," / ",n]}),o.jsx("h2",{className:"mb-2 text-xl font-medium",children:i}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:a})]},t))})]}),o.jsx("section",{"data-reveal":"up",className:`${ra} overflow-hidden rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"max-w-5xl space-y-8",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Flexographic process"}),o.jsx("h2",{className:"max-w-4xl border-l-2 border-[var(--theme-accent-alt)] pl-5 text-2xl font-medium leading-tight sm:pl-7 sm:text-3xl lg:text-4xl",children:"Flexible plates. Multiple colors. Consistent reproduction. Built for high-speed production."}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:[["01 / PLATE","A flexible plate carries a raised image that receives ink and transfers the artwork to the substrate."],["02 / COLOR","Each station prints a single color; multiple stations work together to achieve accurate registration."],["03 / FINISH","Printed materials can be die cut, sheeted, embossed, or perforated to suit the finished application."]].map(([t,n])=>o.jsxs("div",{className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5",children:[o.jsx("p",{className:"mb-3 text-[10px] font-semibold tracking-[0.15em] text-[var(--theme-accent)]",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]})}),o.jsxs("section",{id:"applications",className:"scroll-mt-28 space-y-7",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Flexographic applications"}),o.jsxs("h2",{className:"max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Labels for ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"every application"})]})]}),o.jsx("span",{className:"w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:"16 CORE APPLICATIONS"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:B3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${ra} flex min-h-[92px] items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5`,children:[o.jsx("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(i,{className:"h-5 w-5"})}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-sm font-medium leading-snug text-[var(--theme-text)]",children:t}),o.jsx("span",{className:"mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]",children:n})]})]},t))})]}),o.jsx("section",{className:`${ra} overflow-hidden rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"grid items-center gap-10 lg:grid-cols-2",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Shrink sleeve technology"}),o.jsxs("h2",{className:"text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Full-body ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"branding"})]}),o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Shrink sleeves are full-color labels that cover a container, providing 360-degree graphics for branding and messaging. Printed on engineered film, the sleeve responds to heat or steam and conforms to the container shape."}),o.jsx("div",{className:"flex flex-wrap gap-2",children:[[k1,"360-DEGREE GRAPHICS"],[jd,"CONTAINER CONFORMING"],[Uu,"HEAT SHRINK"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] px-3 py-2 text-[10px] tracking-[0.08em] text-[var(--theme-text-soft)]",children:[o.jsx(t,{className:"h-3.5 w-3.5 text-[var(--theme-accent)]"}),n]},n))})]}),o.jsxs("div",{"data-reveal":"right",className:"relative flex min-h-[290px] items-center justify-center overflow-hidden rounded-[22px] border border-[var(--theme-border)] bg-[radial-gradient(ellipse_at_center,rgba(146,209,188,0.12),transparent_65%)] sm:min-h-[340px]",children:[o.jsx("p",{className:"absolute left-5 top-5 text-[9px] font-medium tracking-[0.14em] text-[var(--theme-text-soft)]",children:"SHRINK FILM / HEAT APPLICATION"}),o.jsxs("div",{className:"relative mt-8 h-[196px] w-[118px] rounded-[24px_24px_28px_28px] bg-[linear-gradient(90deg,#111a20_0%,#53646a_18%,#172126_44%,#71837d_62%,#111a20_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.4)]",children:[o.jsx("div",{className:"absolute -top-8 left-8 h-10 w-[54px] rounded-t-lg bg-[linear-gradient(90deg,#27363a,#70817c,#182226)]"}),o.jsx("div",{className:"absolute -top-11 left-7 h-4 w-[62px] rounded-md bg-[linear-gradient(90deg,#34413f,#96a38c,#2a3434)]"}),o.jsx("div",{className:"absolute inset-x-[-3px] top-[48px] flex h-[105px] items-center justify-center overflow-hidden bg-[linear-gradient(110deg,#86d9f0,#92d1bc_45%,#e1de00)] text-center text-[#17201d] shadow-[0_0_25px_rgba(146,209,188,0.2)]",children:o.jsxs("span",{className:"text-[10px] font-bold leading-5 tracking-[0.1em]",children:["FULL BODY",o.jsx("br",{}),"SHRINK SLEEVE",o.jsx("br",{}),"360 BRANDING"]})})]}),o.jsxs("div",{className:"absolute inset-x-5 bottom-5 flex items-center justify-between text-[9px] font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:[o.jsx("span",{children:"HEAT"}),o.jsx(An,{className:"h-3 w-3"}),o.jsx("span",{children:"CONFORM"}),o.jsx(An,{className:"h-3 w-3"}),o.jsx("span",{children:"FINISHED PACK"})]})]})]})}),o.jsxs("section",{className:"space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Advantages of shrink sleeves"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:U3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${ra} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`,children:[o.jsx(i,{className:"mb-5 h-5 w-5 text-[var(--theme-accent)]"}),o.jsx("h2",{className:"mb-2 text-lg font-medium",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]}),o.jsx("section",{className:`${ra} rounded-[28px] p-6 sm:p-10`,children:o.jsxs("div",{className:"space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"End-use applications"}),o.jsxs("h2",{className:"text-2xl font-medium leading-tight sm:text-3xl",children:["Flexo shrink sleeve ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"applications"})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:W3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.08] p-5 sm:p-6",children:[o.jsx("p",{className:"mb-3 text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent-alt)]",children:t}),o.jsx("h3",{className:"mb-3 text-lg font-medium",children:n}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]},n))})]})}),o.jsx("section",{"data-reveal":"up",className:"overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(120deg,rgba(134,217,240,0.09),rgba(146,209,188,0.08),rgba(225,222,0,0.06))] p-6 sm:p-10",children:o.jsxs("div",{className:"grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]",children:[o.jsxs("div",{className:"space-y-5",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Why flexo"}),o.jsxs("h2",{className:"text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl",children:["Efficient. ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Flexible."})," Scalable."]}),o.jsx("p",{className:"max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Flexographic printing combines efficient production, high-quality reproduction, and substrate flexibility for a broad range of labeling and promotional requirements."}),o.jsxs(jt,{to:"/contact",className:"h-12 px-6 text-sm font-medium",children:["Discuss your project ",o.jsx(An,{className:"h-4 w-4"})]})]}),o.jsx("div",{className:"grid grid-cols-2 gap-3",children:[[Uu,"HIGH SPEED","Fast press production"],[Vh,"HIGH QUALITY","Detailed reproduction"],[eh,"LABEL READY","Labels and promotions"],[Ln,"MULTI-VARIANT","Flexible production"]].map(([t,n,i])=>o.jsxs("div",{className:"rounded-xl border border-[var(--theme-border)] bg-black/10 p-4 sm:p-5",children:[o.jsx(t,{className:"mb-4 h-4 w-4 text-[var(--theme-accent)]"}),o.jsx("p",{className:"text-xs font-semibold tracking-[0.08em]",children:n}),o.jsx("p",{className:"mt-1 text-xs leading-5 text-[var(--theme-text-soft)]",children:i})]},n))})]})})]})}),V3=[[V_,"Save on time","Streamlined offset workflow ensures rapid turnaround for high-volume press runs."],[w1,"Save on costs","Maximized unit economy for large production volumes without sacrificing quality."],[F_,"Plan jobs better","Predictable schedule management with dedicated press capacity planning."],[g_,"Achieve best quality","Consistently sharp, high-fidelity color reproduction on every printed sheet."]],Y3=[["Brochures and manuals","Commercial and technical manuals",x_],["Educational books","High-volume publication printing",C_],["Folders, inserts and flyers","Marketing collateral and inserts",Ln],["Calendars and diaries","Corporate desk and wall merchandise",y_],["Paper bags","Custom-branded paper packaging",z_],["Pharma and industrial labels","Precision compliance labeling",ca],["Corporate stationery","Letterheads, cards and identity supplies",v_],["Multicolor duplex mono cartons","Retail duplex carton boxes",jd],["MET PET cartons","Metalized-film packaging",Ln],["Corrugation and PP boxes","Heavy-duty outer shippers and poly boxes",Nd],["Computer stationery","Continuous billing forms and computer paper",cc],["Security holograms","Anti-counterfeiting holographic seals",ca]],G3=[[E_,"Drip-off UV effects","Contrasting matte and high-gloss textures in a single press pass for tactile premium depth.","MATTE + GLOSS CONTRAST","FINISH / UV COATING"],[B_,"Aqueous varnish","A fast-drying, water-based protective coating for a smooth, anti-scuff finish.","PROTECTIVE SEAL","FINISH / AQUEOUS"],[jd,"Blister coating","Specialized heat-seal adhesive varnish for pharmaceutical and retail blister packaging cards.","HEAT-SEAL ADHESIVE","FINISH / BLISTER"]],q3=[["01 / GLOBAL TRUST","Fairdeal Print Pack India Pvt. Ltd. provides offset commercial print services to clients in India and across the globe."],["02 / COMPREHENSIVE RANGE","Our offset capability is designed to match everyday printing needs across a wide range of customers."],["03 / CONTINUOUS EVOLUTION","Our offset technology continues to evolve alongside global industry standards."]],X3=({service:s})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:"relative isolate overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12",children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"max-w-[700px] text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Offset ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Printing"})]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-2xl text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:["Our printing setup brings together the processes vital to completing an offset printing job, giving clients distinct advantages in quality, consistency, and production planning. ",s.description]}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2 pt-1",children:[["HIGH PRECISION","var(--theme-accent)"],["GLOBAL STANDARDS","#A4EC62"],["FULL SPECTRUM","var(--theme-accent-alt)"]].map(([t,n])=>o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md border border-[var(--theme-border)] bg-black/10 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-text)]",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{backgroundColor:n}}),t]},t))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(jt,{href:"#applications",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Explore applications ",o.jsx(An,{className:"h-4 w-4"})]}),o.jsx(jt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsx("div",{"data-reveal":"right",className:"flex justify-center",children:o.jsxs("figure",{className:"group relative min-h-[340px] w-full max-w-[440px] overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.24)] sm:min-h-[430px]",style:{aspectRatio:"1 / 0.86"},children:[o.jsx("img",{src:s.image,alt:"Offset printing press",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"OFFSET PRINTING SYSTEMS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," PRESS CAPABILITY"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Precision on every ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"printed sheet."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Consistent color and fine detail for commercial print and packaging applications."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["PRINT PROCESS","OFFSET"],["COLOR SYSTEM","CMYK"],["PRESS CAPABILITY","5 COLOUR"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})})]})]}),o.jsxs("section",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Key advantages"}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:V3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"group relative overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-bl-full bg-[var(--theme-accent)] opacity-[0.06] transition-transform duration-300 group-hover:scale-125"}),o.jsx("div",{className:"relative mb-4 grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-colors group-hover:bg-[var(--theme-accent)] group-hover:text-[var(--theme-bg)]",children:o.jsx(t,{className:"h-5 w-5"})}),o.jsx("h2",{className:"relative mb-2 text-lg font-medium",children:n}),o.jsx("p",{className:"relative text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]},n))})]}),o.jsxs("section",{className:"relative overflow-hidden rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 sm:p-10",children:[o.jsx("div",{className:"pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--theme-accent)] opacity-[0.045] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 max-w-5xl space-y-7",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Quality commitment"}),o.jsx("blockquote",{"data-reveal":"left",className:"border-l-2 border-[var(--theme-accent-alt)] py-1 pl-5 text-2xl font-medium leading-snug sm:pl-7 sm:text-3xl",children:"“Offset printing is all about paying attention to the details. Even a minor difference in colour can make a huge impact on the end product.”"}),o.jsx("div",{className:"grid gap-4 pt-2 md:grid-cols-3",children:q3.map(([t,n])=>o.jsxs("article",{"data-reveal":"up",className:"rounded-xl border border-[var(--theme-border)] bg-black/[0.12] p-5",children:[o.jsx("h3",{className:"mb-3 text-[10px] font-semibold tracking-[0.12em] text-[var(--theme-accent)]",children:t}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]})]}),o.jsxs("section",{id:"applications",className:"scroll-mt-28 space-y-7",children:[o.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Capabilities spectrum"}),o.jsx("h2",{className:"max-w-3xl text-2xl font-medium leading-tight sm:text-4xl",children:"All types of offset printing solutions"})]}),o.jsx("span",{className:"w-fit border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)]",children:"12 CORE CATEGORIES"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:Y3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"group flex min-h-[92px] items-center gap-4 rounded-xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-4 transition-colors duration-300 hover:border-[var(--theme-accent)]/40 sm:p-5",children:[o.jsx("span",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(i,{className:"h-5 w-5"})}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-sm font-semibold leading-snug text-[var(--theme-text)]",children:t}),o.jsx("span",{className:"mt-1 block text-xs leading-5 text-[var(--theme-text-soft)]",children:n})]})]},t))})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Surface finish technology"}),o.jsx("h2",{className:"text-3xl font-medium leading-tight sm:text-4xl",children:"Special effects"})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:G3.map(([t,n,i,a,c])=>o.jsxs("article",{"data-reveal":"up",className:"group relative flex min-h-[340px] flex-col justify-between gap-7 overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))] p-6 transition-colors duration-300 hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_38%,rgba(255,255,255,0.08)_50%,transparent_62%)] transition-transform duration-700 ease-out group-hover:translate-x-full"}),o.jsxs("div",{className:"relative space-y-4",children:[o.jsx("div",{className:"grid h-12 w-12 place-items-center rounded-xl border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(t,{className:"h-5 w-5"})}),o.jsx("h3",{className:"text-xl font-medium leading-tight",children:n}),o.jsx("p",{className:"text-sm leading-6 text-[var(--theme-text-soft)]",children:i})]}),o.jsxs("div",{className:"relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-[var(--theme-border)] bg-black/20 text-center transition-colors group-hover:border-[var(--theme-accent)]/40",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(53,212,255,0.06),transparent_48%,rgba(164,236,98,0.06))]"}),o.jsx("span",{className:"relative rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-[var(--theme-accent)]",children:a}),o.jsx("span",{className:"relative text-[9px] tracking-[0.12em] text-[var(--theme-text-soft)]",children:c})]})]},n))})]})]})}),Q3=[[Ln,"Multiple flute options","E-Flute, F-Flute, and Narrow Flute"],[Uh,"2 to 7 ply construction","Corrugated box configurations"],[cc,"Printed packaging","Brand-ready packaging solutions"],[Wh,"Tailored solutions","Standard and bespoke requirements"]],K3=[["01 / FLUTE PROFILE",Ln,"E-Flute","A fine corrugated profile for applications where a compact structure and clean printed presentation are important."],["02 / FLUTE PROFILE",Uh,"F-Flute","A fine-profile option for packaging designs that require a compact board structure. Final selection depends on the product and specification."],["03 / FLUTE PROFILE",Nd,"Narrow Flute","A narrow-flute construction selected around box design, handling requirements, and intended end use."]],J3=[[ca,"Product protection","Select a suitable corrugated construction based on the product, handling conditions, and transport needs."],[j1,"Bespoke box design","Develop packaging around product dimensions, packing processes, and presentation requirements."],[Yh,"Printed presentation","Bring brand elements and relevant packaging information into the box design and artwork."],[Ln,"Paper-based materials","Consider paper grades and material options when developing the required packaging structure."],[Wh,"Construction options","Explore flute profiles and 2 to 7 ply constructions for the application and specification."],[_1,"Integrated expertise","Combine corrugated production experience with paper and coating material considerations."]],Z3=[[Uh,"Transit and shipping boxes"],[Nd,"Product cartons"],[cc,"Printed packaging boxes"],[j1,"Custom-size boxes"],[W_,"Distribution packaging"],[_1,"Retail packaging"],[Ln,"Multi-item packaging"],[Wh,"Industrial packaging"]],$3=[["Understand the requirement","Establish product dimensions, intended use, packing conditions, and presentation requirements for the finished box."],["Consider materials and structure","Review suitable flute profiles, board construction, paper options, and coating requirements for the application."],["Develop the packaging solution","Align box design and print requirements with the agreed specification and intended application."]],na="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",eA=({service:s})=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${na} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[var(--theme-accent-alt)] opacity-[0.06] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PACKAGING SOLUTIONS"}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Corrugated ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Packaging"})," engineered to deliver."]}),o.jsxs("p",{"data-reveal":"left",className:"max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:["From transit boxes to bespoke printed corrugated packaging, Fairdeal develops solutions around your product and packaging requirements. Our corrugated production combines paper and coating materials with a commitment to consistent quality. ",s.description]}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:["E-FLUTE","F-FLUTE","NARROW FLUTE","2-7 PLY BOXES"].map(t=>o.jsx("span",{className:"rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]",children:t},t))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(jt,{href:"#box-solutions",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Explore box solutions ",o.jsx(An,{className:"h-4 w-4"})]}),o.jsx(jt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]",children:[o.jsx("img",{src:s.image,alt:"Corrugated cardboard fluting and board materials",className:"absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"CORRUGATED PACKAGING SYSTEMS"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"})," PACKAGING SOLUTIONS"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Protection meets ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"presentation."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Corrugated structures and printed packaging designed for product protection, handling, and brand presentation."}),o.jsx("div",{className:"mt-4 grid grid-cols-3 gap-1.5 sm:gap-2",children:[["FLUTE OPTIONS","E / F / NARROW"],["BOX CONSTRUCTION","2-7 PLY"],["PACKAGING","PRINTED BOXES"]].map(([t,n])=>o.jsxs("div",{className:"min-w-0 rounded-md border border-white/15 bg-black/55 p-2 backdrop-blur-sm sm:p-2.5",children:[o.jsx("span",{className:"block text-[7px] leading-tight tracking-[0.08em] text-white/55 sm:text-[8px]",children:t}),o.jsx("span",{className:"mt-1 block break-words text-[8px] font-semibold leading-tight tracking-[0.04em] text-[var(--theme-accent)] sm:text-[10px]",children:n})]},t))})]}),o.jsx("div",{className:"pointer-events-none absolute right-4 top-16 h-8 w-8 border-r border-t border-[var(--theme-accent)]/70 sm:right-5 sm:top-20"})]})]})]}),o.jsx("section",{className:`${na} grid gap-5 rounded-2xl p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4`,children:Q3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:"flex items-center gap-3",children:[o.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(t,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-xs font-semibold",children:n}),o.jsx("span",{className:"mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]",children:i})]})]},n))}),o.jsxs("section",{id:"box-solutions",className:"scroll-mt-28 space-y-8",children:[o.jsxs("header",{"data-reveal":"up",className:"mx-auto max-w-[760px] text-center",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"Corrugated construction"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["The right structure for your ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"packaging needs."})]}),o.jsx("p",{className:"mx-auto mt-4 max-w-[700px] text-sm leading-7 text-[var(--theme-text-soft)]",children:"Flute selection influences the construction and profile of corrugated packaging. Explore the available options to find a structure suited to your product and application."})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:K3.map(([t,n,i,a])=>o.jsxs("article",{"data-reveal":"up",className:`${na} group relative min-h-[260px] overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-accent)]/40 sm:p-7`,children:[o.jsx("div",{className:"pointer-events-none absolute -bottom-12 -right-10 h-36 w-36 rounded-full border border-[var(--theme-accent)]/15 shadow-[0_0_0_18px_rgba(146,209,188,0.025),0_0_0_36px_rgba(146,209,188,0.018)]"}),o.jsx("p",{className:"text-[9px] font-semibold tracking-[0.14em] text-[var(--theme-text-soft)]",children:t}),o.jsx("div",{className:"mt-6 grid h-12 w-12 place-items-center rounded-lg border border-[var(--theme-accent)]/20 bg-[var(--theme-accent)]/[0.06] text-[var(--theme-accent)] transition-transform duration-300 group-hover:scale-105",children:o.jsx(n,{className:"h-5 w-5"})}),o.jsx("h3",{className:"mt-5 text-xl font-medium",children:i}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-[var(--theme-text-soft)]",children:a}),o.jsx("div",{className:"mt-5 h-0.5 w-11 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-alt)]"})]},i))})]}),o.jsxs("section",{className:"relative overflow-hidden border-y border-[var(--theme-border)] bg-white/[0.018] py-8 sm:py-12",children:[o.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_50%,rgba(146,209,188,0.07),transparent_65%)]"}),o.jsxs("div",{className:"relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14",children:[o.jsxs("div",{"data-reveal":"left",className:`${na} rounded-xl p-5 sm:p-8`,children:[o.jsxs("div",{className:"mb-6 flex items-center justify-between gap-3",children:[o.jsx("span",{className:"text-[10px] font-semibold tracking-[0.12em]",children:"CORRUGATED BOARD CONCEPT"}),o.jsx("span",{className:"text-[9px] font-semibold tracking-[0.1em] text-[var(--theme-accent)]",children:"2-7 PLY"})]}),o.jsx("div",{className:"space-y-1.5","aria-label":"Illustrative corrugated board layers",children:Array.from({length:7},(t,n)=>o.jsx("div",{className:`relative h-3 overflow-hidden rounded-sm border border-white/10 ${n%2===0?"bg-[linear-gradient(90deg,#765033,#c69b64_35%,#e0bf89_54%,#986235)]":"bg-[repeating-linear-gradient(90deg,#8d5e35_0px,#c99b63_7px,#e3c18d_13px,#9a693e_20px)]"}`,children:o.jsx("span",{className:"absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"})},n))}),o.jsxs("div",{className:"mt-3 flex justify-between gap-2 text-[9px] text-[var(--theme-text-soft)]",children:[o.jsx("span",{children:"Illustrative layered construction"}),o.jsx("span",{children:"01-07"})]}),o.jsx("p",{className:"mt-5 border-t border-[var(--theme-border)] pt-4 text-xs leading-6 text-[var(--theme-text-soft)]",children:"Board construction should be specified to suit the box design, product, handling conditions, and transport requirements. This illustration is conceptual, not a technical cross-section."})]}),o.jsxs("div",{"data-reveal":"right",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Printed corrugated boxes"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["From ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"2 to 7 ply"}),", built around your product."]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Fairdeal provides printed corrugated boxes for standard transit packaging as well as bespoke requirements. Packaging can be developed around its intended use, construction, and paper or coating materials."}),o.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-2",children:["Standard transit cardboard boxes","Bespoke corrugated packaging","Printed box requirements","Paper and coating integration"].map(t=>o.jsxs("div",{className:"flex items-start gap-2.5 text-xs leading-5 text-[var(--theme-text)]",children:[o.jsx(b_,{className:"mt-0.5 h-4 w-4 shrink-0 text-[var(--theme-accent)]"}),t]},t))}),o.jsx("p",{className:"mt-5 text-[10px] leading-5 text-[var(--theme-text-soft)]",children:"Final board grade, flute combination, print method, and construction should be confirmed against the product's actual packaging requirements."})]})]})]}),o.jsxs("section",{className:"space-y-7",children:[o.jsxs("header",{"data-reveal":"left",className:"max-w-[720px]",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"Why corrugated packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Packaging designed around ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"real requirements."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Effective corrugated packaging brings together board construction, material selection, printing, and box design. Each element contributes to how the finished pack serves its intended purpose."})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:J3.map(([t,n,i])=>o.jsxs("article",{"data-reveal":"up",className:`${na} rounded-lg p-5 transition-all duration-300 hover:border-[var(--theme-accent)]/40 hover:bg-[var(--theme-accent)]/[0.035]`,children:[o.jsx(t,{className:"h-5 w-5 text-[var(--theme-accent)]"}),o.jsx("h3",{className:"mt-4 text-sm font-semibold",children:n}),o.jsx("p",{className:"mt-2 text-xs leading-5 text-[var(--theme-text-soft)]",children:i})]},n))})]}),o.jsxs("section",{className:"border-y border-[var(--theme-border)] bg-white/[0.018] py-16 sm:py-20",children:[o.jsxs("div",{className:"mx-auto max-w-[800px] text-center","data-reveal":"up",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"Packaging applications"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Solutions for ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"different packaging needs."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Corrugated boxes serve a range of packaging purposes. Final construction should match the product, packing method, and distribution environment."})]}),o.jsx("div",{className:"mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",children:Z3.map(([t,n])=>o.jsxs("div",{"data-reveal":"up",className:`${na} flex min-h-[72px] items-center gap-3 rounded-md p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--theme-accent)]/35`,children:[o.jsx(t,{className:"h-4 w-4 shrink-0 text-[var(--theme-accent)]"}),o.jsx("span",{className:"text-xs font-semibold leading-5",children:n})]},n))}),o.jsx("p",{className:"mt-5 text-center text-[10px] leading-5 text-[var(--theme-text-soft)]",children:"Application examples are indicative. Confirm availability and specifications with Fairdeal for your particular requirement."})]}),o.jsxs("section",{className:"space-y-8",children:[o.jsxs("header",{"data-reveal":"up",className:"mx-auto max-w-[760px] text-center",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"From requirement to packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["A considered approach to ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"corrugated solutions."})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-[var(--theme-text-soft)]",children:"Packaging development starts with understanding what the box needs to do and selecting materials and construction to match."})]}),o.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:$3.map(([t,n],i)=>o.jsxs("article",{"data-reveal":"up",className:"border-t border-[var(--theme-accent)]/50 bg-gradient-to-b from-[var(--theme-accent)]/[0.045] to-transparent p-5 sm:p-6",children:[o.jsxs("span",{className:"text-[10px] font-semibold tracking-[0.14em] text-[var(--theme-accent)]",children:["0",i+1]}),o.jsx("h3",{className:"mt-5 text-base font-semibold",children:t}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-[var(--theme-text-soft)]",children:n})]},t))})]}),o.jsx("section",{id:"contact",className:"scroll-mt-28",children:o.jsxs("div",{"data-reveal":"up",className:`${na} relative overflow-hidden rounded-[24px] px-6 py-12 text-center sm:px-10 sm:py-16`,children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(53,212,255,0.1),transparent_45%),radial-gradient(ellipse_at_85%_0%,rgba(164,236,98,0.07),transparent_45%)]"}),o.jsxs("div",{className:"relative mx-auto max-w-[700px]",children:[o.jsx(Ge,{className:"text-center text-[var(--theme-accent-alt)]",children:"Let's discuss your packaging"}),o.jsxs("h2",{className:"mt-4 text-3xl font-medium leading-tight sm:text-4xl",children:["Have a box in mind? ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Let's develop it."})]}),o.jsx("p",{className:"mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[var(--theme-text-soft)]",children:"Share your box dimensions, flute preference, ply requirement, artwork, and intended application. Fairdeal can discuss your corrugated packaging needs."}),o.jsxs("div",{className:"mt-7 flex flex-wrap justify-center gap-3",children:[o.jsxs(jt,{to:"/contact",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["Enquire about packaging ",o.jsx(An,{className:"h-4 w-4"})]}),o.jsx(jt,{href:"#box-solutions",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Review flute options"})]})]})]})})]})}),tA="/boltfaredeal/assets/FAIR%20DEAL-p8-021-DZEneFKK.png",rA="/boltfaredeal/assets/FAIR%20DEAL-p8-022-Cfyo8rF5.png",nA="/boltfaredeal/assets/FAIR%20DEAL-p8-024-Bjo77Wrf.png",iA="/boltfaredeal/assets/FAIR%20DEAL-p8-025-BZk6YAbO.png",sA="/boltfaredeal/assets/FAIR%20DEAL-p8-026-C70OQtiN.png",aA="/boltfaredeal/assets/FAIR%20DEAL-p8-027-CiLFXDVG.png",oA="/boltfaredeal/assets/FAIR%20DEAL-p8-028-Bm808PHd.png",lA="/boltfaredeal/assets/FAIR%20DEAL-p8-029-DR5fBncH.png",cA="/boltfaredeal/assets/FAIR%20DEAL-p8-030-Cyh92s2d.png",uA="/boltfaredeal/assets/FAIR%20DEAL-p8-031-wi6I0nCo.png",dA="/boltfaredeal/assets/FAIR%20DEAL-p8-032-CUxF_f78.png",pA="/boltfaredeal/assets/FAIR%20DEAL-p8-033-DjIS-0ni.png",fA="/boltfaredeal/assets/FAIR%20DEAL-p8-034-BN4xfQ8Y.png",hA="/boltfaredeal/assets/FAIR%20DEAL-p8-035-a7NKr1pW.png",mA="/boltfaredeal/assets/FAIR%20DEAL-p8-036-CxHYl2HD.png",fs=Object.entries(Object.assign({"../assets/images/Services/CopierImages/FAIR DEAL-p8-021.png":tA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-022.png":rA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-024.png":nA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-025.png":iA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-026.png":sA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-027.png":aA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-028.png":oA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-029.png":lA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-030.png":cA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-031.png":uA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-032.png":dA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-033.png":pA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-034.png":fA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-035.png":hA,"../assets/images/Services/CopierImages/FAIR DEAL-p8-036.png":mA})).sort(([s],[t])=>s.localeCompare(t)).map(([s,t])=>({image:t,name:s.split("/").pop()?.replace(/\.[^/.]+$/,"")??"Copier paper"})),Zv="border border-[var(--theme-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.008))]",gA=[[S_,"Copier paper","Paper for everyday office and print-room use."],[Ln,"Coated paper","Coated grades for a range of print requirements."],[jd,"Sheet-form paper","Paper supplied in sheet form for production needs."]],xA={"-1":{x:2,y:72,scale:1.1,rotY:-26,rotZ:-6,opacity:0,b:1,z:11},0:{x:17,y:56,scale:1.05,rotY:-22,rotZ:-5,opacity:1,b:1,z:10},1:{x:34,y:60,scale:.95,rotY:-18,rotZ:-4,opacity:1,b:.95,z:9},2:{x:50,y:36,scale:.68,rotY:-14,rotZ:-3,opacity:.95,b:.85,z:6},3:{x:65,y:33,scale:.6,rotY:-10,rotZ:-2,opacity:.7,b:.6,z:5},4:{x:78,y:44,scale:.55,rotY:-8,rotZ:-2,opacity:.32,b:.4,z:4},5:{x:90,y:54,scale:.5,rotY:-6,rotZ:-1,opacity:0,b:.3,z:3}},vA={"-1":{x:50,y:80,scale:1.1,rotY:-20,rotZ:-5,opacity:0,b:1,z:11},0:{x:50,y:62,scale:1,rotY:-18,rotZ:-5,opacity:1,b:1,z:10},1:{x:26,y:30,scale:.62,rotY:-12,rotZ:-3,opacity:.95,b:.85,z:6},2:{x:54,y:26,scale:.55,rotY:-10,rotZ:-2,opacity:.7,b:.6,z:5},3:{x:80,y:32,scale:.5,rotY:-8,rotZ:-2,opacity:.32,b:.4,z:4},4:{x:92,y:40,scale:.45,rotY:-6,rotZ:-1,opacity:0,b:.3,z:3}},yA={x:50,y:45,scale:.4,rotY:0,rotZ:0,opacity:0,b:.2,z:0},bA=[{w:96,h:56,rot:-6,color:"rgba(214,178,94,0.45)",glow:!0},{w:84,h:44,rot:-10,color:"rgba(214,178,94,0.28)"},{w:70,h:32,rot:4,color:"rgba(120,220,220,0.22)"},{w:100,h:66,rot:-3,color:"rgba(255,255,255,0.07)"},{w:58,h:22,rot:-12,color:"rgba(214,178,94,0.2)"}],wA=70,_A=50,NA=380,kA=({service:s})=>{const t=s.image,[n,i]=O.useState(0),[a,c]=O.useState(!1),[u,p]=O.useState(!1),f=O.useRef(null),m=O.useRef({active:!1,lastX:0,pointerId:null}),g=O.useRef(!1),y=O.useRef({acc:0,last:0});O.useEffect(()=>{const j=window.matchMedia("(max-width: 767px)"),P=M=>{c(M.matches)};return c(j.matches),j.addEventListener("change",P),()=>{j.removeEventListener("change",P)}},[]),O.useEffect(()=>{if(fs.length<2)return;const j=window.setInterval(()=>{g.current||i(P=>(P+1)%fs.length)},3600);return()=>window.clearInterval(j)},[]);const v=j=>{i(P=>(P+j+fs.length)%fs.length)};O.useEffect(()=>{const j=f.current;if(!j)return;const P=M=>{const L=Math.abs(M.deltaX)>Math.abs(M.deltaY);if(!L&&!M.shiftKey)return;M.preventDefault();const B=L?M.deltaX:M.deltaY,W=y.current,F=Date.now();W.acc+=B,Math.abs(W.acc)>=_A&&F-W.last>NA&&(v(W.acc>0?1:-1),W.acc=0,W.last=F)};return j.addEventListener("wheel",P,{passive:!1}),()=>j.removeEventListener("wheel",P)},[]);const b=j=>{j.pointerType==="mouse"&&j.button!==0||(m.current={active:!0,lastX:j.clientX,pointerId:j.pointerId},g.current=!0,p(!0),j.currentTarget.setPointerCapture?.(j.pointerId))},_=j=>{const P=m.current;if(!P.active||P.pointerId!==j.pointerId)return;const M=j.clientX-P.lastX;Math.abs(M)>=wA&&(v(M<0?1:-1),P.lastX=j.clientX)},w=j=>{const P=m.current;!P.active||P.pointerId!==j.pointerId||(m.current={active:!1,lastX:0,pointerId:null},j.currentTarget.releasePointerCapture?.(j.pointerId),p(!1),g.current=!1)},k=j=>{j.key==="ArrowRight"&&(j.preventDefault(),v(1)),j.key==="ArrowLeft"&&(j.preventDefault(),v(-1))},C=fs.length,A=a?vA:xA,E=j=>{const P=(j-n+C)%C,M=P===C-1?"-1":P;return A[M]??yA};return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-4 pb-16 pt-20 text-[var(--theme-text)] sm:px-8 sm:pb-20 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px] space-y-16 sm:space-y-24",children:[o.jsxs("section",{className:`${Zv} relative isolate overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12`,children:[o.jsx("div",{className:"pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--theme-accent)] opacity-[0.08] blur-[90px]"}),o.jsxs("div",{className:"relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsx(Ge,{className:"text-left text-[var(--theme-accent-alt)]",children:"FAIRDEAL PRINT PACK INDIA PVT. LTD."}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Copier"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"Paper"})]}),o.jsx("p",{"data-reveal":"left",className:"max-w-[560px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:s.description}),o.jsx("div",{"data-reveal":"up",className:"flex flex-wrap gap-2",children:["COPIER PAPER","COATED PAPER","SHEET-FORM PAPER"].map(j=>o.jsx("span",{className:"rounded-md border border-[var(--theme-border)] bg-[var(--theme-accent)]/[0.06] px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[var(--theme-text-soft)]",children:j},j))}),o.jsxs("div",{"data-reveal":"up",className:"flex flex-wrap gap-3 pt-1",children:[o.jsxs(jt,{href:"#paper-range",className:"h-12 px-5 text-xs font-semibold uppercase tracking-[0.07em]",children:["View paper range",o.jsx(An,{className:"h-4 w-4"})]}),o.jsx(jt,{to:"/contact",className:"h-12 border border-[var(--theme-border)] bg-none bg-white/[0.025] px-5 text-xs font-semibold uppercase tracking-[0.07em] text-[var(--theme-text)] shadow-none hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]",children:"Discuss requirements"})]})]}),o.jsxs("figure",{"data-reveal":"right",className:"group relative min-h-[340px] overflow-hidden rounded-[20px] border border-[var(--theme-border)] bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[430px]",children:[o.jsx("img",{src:t,alt:"Copier paper product image",className:"absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-8"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/55"}),o.jsxs("div",{className:"absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5 sm:top-5",children:[o.jsx("span",{className:"text-[8px] font-semibold tracking-[0.13em] text-white/85 sm:text-[9px]",children:"PAPER RANGE"}),o.jsxs("span",{className:"inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.1em] text-lime-300",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-lime-300"}),"PAPER SUPPLY"]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5",children:[o.jsxs("h2",{className:"text-xl font-medium leading-tight text-white sm:text-2xl",children:["Paper for"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"everyday print."})]}),o.jsx("p",{className:"mt-2 max-w-[420px] text-xs leading-5 text-white/75",children:"Copier, coated, and sheet-form paper options."})]})]})]})]}),o.jsx("section",{className:`${Zv} grid gap-5 rounded-2xl p-5 sm:grid-cols-3 sm:p-6`,children:gA.map(([j,P,M])=>o.jsxs("article",{"data-reveal":"up",className:"flex items-center gap-3",children:[o.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--theme-border)] bg-[var(--theme-accent)]/10 text-[var(--theme-accent)]",children:o.jsx(j,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-xs font-semibold",children:P}),o.jsx("span",{className:"mt-1 block text-[10px] leading-4 text-[var(--theme-text-soft)]",children:M})]})]},P))}),o.jsxs("section",{id:"paper-range",className:"scroll-mt-28",children:[o.jsxs("header",{className:"flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",children:[o.jsxs("div",{children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"Copier paper range"}),o.jsxs("h1",{"data-reveal":"left",className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] max-[600px]:text-[45px]",children:["Explore our"," ",o.jsx("span",{className:"text-[var(--theme-accent)]",children:"paper selection"})]})]}),o.jsxs("div",{className:"flex items-center justify-between gap-5 sm:justify-end",children:[o.jsxs("span",{"aria-live":"polite",className:"border-b border-[var(--theme-accent-alt)] pb-2 text-xs font-medium tracking-[0.12em] text-[var(--theme-text-soft)] sm:text-sm",children:[String(fs.length).padStart(2,"0")," ","PRODUCTS"]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{type:"button","aria-label":"Previous copier paper image","aria-controls":"copier-orbit-stage",title:"Previous image",onClick:()=>v(-1),className:"grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]",children:o.jsx(w_,{className:"h-5 w-5"})}),o.jsx("button",{type:"button","aria-label":"Next copier paper image","aria-controls":"copier-orbit-stage",title:"Next image",onClick:()=>v(1),className:"grid h-12 w-12 place-items-center border border-[var(--theme-border)] text-[var(--theme-text)] transition-all duration-300 hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/5 hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--theme-accent)]",children:o.jsx(__,{className:"h-5 w-5"})})]})]})]}),o.jsxs("div",{ref:f,id:"copier-orbit-stage",role:"region","aria-roledescription":"carousel","aria-label":"Copier paper product images",tabIndex:0,className:`relative isolate mx-auto mt-8 w-full select-none outline-none focus-visible:ring-1 focus-visible:ring-[var(--theme-accent)]/40 ${u?"cursor-grabbing":"cursor-grab"}`,style:{height:a?"430px":"clamp(450px, 39vw, 560px)",perspective:"1400px",overflow:a?"hidden":"visible",touchAction:"pan-y"},onPointerDown:b,onPointerMove:_,onPointerUp:w,onPointerCancel:w,onPointerEnter:()=>{g.current=!0},onPointerLeave:j=>{m.current.active||(g.current=!1),j.pointerType!=="mouse"&&(g.current=!1)},onKeyDown:k,children:[bA.map((j,P)=>o.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute left-1/2 top-[52%] rounded-[50%]",style:{width:`${a?j.w*1.4:j.w}%`,height:`${j.h}%`,border:`1px solid ${j.color}`,boxShadow:j.glow?`0 0 18px ${j.color}`:"none",transform:`translate(-50%, -50%) rotate(${j.rot}deg)`}},P)),fs.map(({image:j,name:P},M)=>{const L=E(M);return o.jsx("figure",{className:"absolute",style:{left:`${L.x}%`,top:`${L.y}%`,width:a?"52%":"min(250px, 16vw)",aspectRatio:"0.78 / 1",zIndex:L.z,opacity:L.opacity,pointerEvents:"none",transform:`translate(-50%, -50%) scale(${L.scale}) rotateY(${L.rotY}deg) rotateZ(${L.rotZ}deg)`,filter:`brightness(${L.b})`,transition:"left 1000ms cubic-bezier(0.2,0.8,0.2,1), top 1000ms cubic-bezier(0.2,0.8,0.2,1), transform 1000ms cubic-bezier(0.2,0.8,0.2,1), opacity 800ms ease, filter 1000ms ease"},children:o.jsx("img",{src:j,alt:P,loading:"eager",draggable:!1,className:"h-full w-full object-contain",style:{filter:"drop-shadow(0 28px 30px rgba(0,0,0,0.55))"}})},M)})]}),a&&o.jsx("div",{className:"mt-8 text-center",children:o.jsxs("span",{className:"text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--theme-text-soft)]",children:["Product"," ",String(n+1).padStart(2,"0")," ","/"," ",String(fs.length).padStart(2,"0")]})})]})]})})},jA=s=>s.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").trim(),EA=()=>{const{serviceName:s}=E5(),t=Pi.find(i=>jA(i.title)===s);if(!t)return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsx("div",{className:"mx-auto max-w-[1500px]",children:o.jsxs("div",{className:"rounded-[28px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-12",children:[o.jsx(Ge,{className:"mb-4 text-[var(--theme-accent-alt)]",children:"Service not found"}),o.jsx("h1",{className:"mb-6 text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl",children:"We couldn’t find that service."}),o.jsx(jt,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})]})})});if(t.title==="Flexo Printing")return o.jsx(H3,{service:t});if(t.title==="Offset Printing")return o.jsx(X3,{service:t});if(t.title==="Corrugation")return o.jsx(eA,{service:t});if(t.title==="Copier Paper")return o.jsx(kA,{service:t});const n=["Precision-led execution and consistent production output","Material-based customization for your exact requirement","Consultation, setup, and finishing support from our team"];return o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1500px]",children:[o.jsxs("div",{className:"mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-[620px]",children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"OUR SERVICE"}),o.jsx("h1",{className:"text-[clamp(52px,4vw,80px)] font-[650] leading-[0.98] tracking-[-0.055em] text-[var(--theme-text)] max-[600px]:text-[45px]",children:t.title})]}),o.jsx("div",{className:"lg:max-w-[520px] lg:items-end",children:o.jsx(jt,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})})]}),o.jsx("div",{className:"overflow-hidden rounded-[30px] border border-[var(--theme-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(225,222,0,0.11)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.12)]",children:o.jsxs("div",{className:"grid gap-0 lg:grid-cols-[1.1fr_0.9fr]",children:[o.jsx("div",{className:"p-4 sm:p-6 lg:p-8",children:o.jsx("div",{className:"overflow-hidden rounded-[24px]",children:o.jsx("img",{src:t.image,alt:t.title,className:"h-[350px] w-full object-contain sm:h-[420px]"})})}),o.jsxs("div",{className:"flex flex-col justify-center p-6 sm:p-8 lg:p-10",children:[o.jsx("div",{className:"mb-6 flex items-start justify-between gap-4",children:o.jsxs("div",{children:[o.jsx("p",{className:"mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--theme-text-soft)]",children:"Service overview"}),o.jsx("h2",{className:"text-2xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-3xl",children:t.title})]})}),o.jsx("p",{className:"mb-8 max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:t.description}),o.jsx("ul",{className:"space-y-3",children:n.map(i=>o.jsxs("li",{className:"flex items-start gap-3 text-sm leading-6 text-[var(--theme-text)] sm:text-base",children:[o.jsx("span",{className:"mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]"}),o.jsx("span",{children:i})]},i))}),o.jsx("div",{className:"mt-10",children:o.jsx(jt,{to:"/contact",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Request a quote"})})]})]})})]})})},SA="/boltfaredeal/assets/diaries01-Dx_epA3O.png",AA="/boltfaredeal/assets/diaries02-CP1-mH4s.png",$v="/boltfaredeal/assets/diaries03-DQ5n17G-.png",CA="/boltfaredeal/assets/lables02-C0BpH5nU.png",TA="/boltfaredeal/assets/lables03-D---Jj6L.png",e1="/boltfaredeal/assets/packaging02-CRZm2jjx.png",PA="/boltfaredeal/assets/packaging04-DJsw5WMj.png",RA="/boltfaredeal/assets/print01-CHSLthKc.png",LA="/boltfaredeal/assets/print02-C9BFc1o-.png",OA="/boltfaredeal/assets/print03-D5mljvbw.png",IA="/boltfaredeal/assets/manuals01-MuTkQks1.png",MA="/boltfaredeal/assets/manuals02-DoOVhN-p.png",zA="/boltfaredeal/assets/manuals03-C3ddYgHo.png",DA="/boltfaredeal/assets/bopp-tapes01-CfxR3Cog.png",FA="/boltfaredeal/assets/bopp-tapes02-CIj6n17W.png",BA="/boltfaredeal/assets/bopp-tapes03-Dmfj9ULN.png",UA="/boltfaredeal/assets/mailer-bag01-cQ9ZedD_.png",WA="/boltfaredeal/assets/mailer-bag02-Dg7abEXx.png",HA="/boltfaredeal/assets/mailer-bag03-RVnfnCUP.png",Qf="/boltfaredeal/assets/roll01-57Yyt6tW.png",VA=["All","Diaries","Labels","Packaging","Print","Manuals","Bopp tapes","Mailer bag","Strapping roll"],t1=[{title:"Premium Diaries",type:"Corporate Printing",category:"Diaries",image:SA},{title:"Executive Diary Collection",type:"Premium Print",category:"Diaries",image:AA},{title:"Custom Diary Printing",type:"Commercial Printing",category:"Diaries",image:$v},{title:"Product Labels",type:"Label Printing",category:"Labels",image:$v},{title:"Premium Brand Labels",type:"Packaging Print",category:"Labels",image:CA},{title:"Custom Product Labels",type:"Industrial Printing",category:"Labels",image:TA},{title:"Luxury Packaging",type:"Packaging Solutions",category:"Packaging",image:e1},{title:"Custom Packaging",type:"Commercial Packaging",category:"Packaging",image:PA},{title:"Retail Packaging",type:"Premium Packaging",category:"Packaging",image:e1},{title:"Commercial Print",type:"Offset Printing",category:"Print",image:RA},{title:"Premium Print Materials",type:"Commercial Printing",category:"Print",image:LA},{title:"Custom Print Solutions",type:"Print Production",category:"Print",image:OA},{title:"Product Manuals",type:"Instruction Printing",category:"Manuals",image:IA},{title:"Technical Manuals",type:"Commercial Print",category:"Manuals",image:MA},{title:"Instruction Manuals",type:"Print Production",category:"Manuals",image:zA},{title:"BOPP Tape",type:"Industrial Packaging",category:"Bopp tapes",image:DA},{title:"Printed BOPP Tape",type:"Custom Packaging",category:"Bopp tapes",image:FA},{title:"Packaging Tape",type:"Industrial Solutions",category:"Bopp tapes",image:BA},{title:"Mailer Bags",type:"E-Commerce Packaging",category:"Mailer bag",image:UA},{title:"Custom Mailer Bags",type:"Packaging Solutions",category:"Mailer bag",image:WA},{title:"Premium Courier Bags",type:"E-Commerce Packaging",category:"Mailer bag",image:HA},{title:"Strapping Rolls",type:"Industrial Packaging",category:"Strapping roll",image:Qf},{title:"PP Strapping Rolls",type:"Packaging Materials",category:"Strapping roll",image:Qf},{title:"Industrial Strapping",type:"Packaging Solutions",category:"Strapping roll",image:Qf}],YA=()=>{const[s,t]=O.useState("All"),[n,i]=O.useState(0),[a,c]=O.useState(!1),u=O.useRef(null),p=O.useRef(null),f=O.useRef([]),m=O.useRef([]),g=O.useRef(null),y=O.useRef(0),v=O.useRef(!1),b=O.useMemo(()=>s==="All"?t1:t1.filter(E=>E.category===s),[s]),_=O.useCallback(E=>{const j=b.length;if(!j)return 0;let P=E-y.current;return P>j/2&&(P-=j),P<-j/2&&(P+=j),P},[b.length]),w=O.useCallback(E=>E===0?{x:0,y:0,scale:1,rotate:0,opacity:1,blur:0,zIndex:30}:E===-1?{x:-285,y:38,scale:.82,rotate:-6,opacity:.68,blur:0,zIndex:20}:E===1?{x:285,y:38,scale:.82,rotate:6,opacity:.68,blur:0,zIndex:20}:E===-2?{x:-460,y:90,scale:.66,rotate:-11,opacity:.28,blur:1,zIndex:10}:E===2?{x:460,y:90,scale:.66,rotate:11,opacity:.28,blur:1,zIndex:10}:{x:E>0?640:-640,y:120,scale:.55,rotate:E>0?14:-14,opacity:0,blur:3,zIndex:1},[]),k=O.useCallback(()=>{f.current.forEach((E,j)=>{if(!E)return;const P=_(j),M=w(P);ne.set(E,{xPercent:-50,x:M.x,y:M.y,scale:M.scale,rotation:M.rotate,opacity:M.opacity,zIndex:M.zIndex,filter:`blur(${M.blur}px)`}),m.current[j]&&ne.set(m.current[j],{x:0,y:0,scale:1,rotation:0})})},[_,w]),C=O.useCallback(()=>{if(!b.length)return;g.current&&g.current.kill(),c(!0),v.current=!0;const E=ne.timeline({onComplete:()=>{c(!1),v.current=!1}});f.current.forEach((j,P)=>{if(!j)return;const M=_(P),L=w(M);E.to(j,{xPercent:-50,x:L.x,y:L.y,scale:L.scale,rotation:L.rotate,opacity:L.opacity,zIndex:L.zIndex,filter:`blur(${L.blur}px)`,duration:.7,ease:"power3.out"},0)}),g.current=E},[_,w,b.length]),A=O.useCallback(E=>{if(v.current||!b.length||b.length<=1)return;const j=b.length;y.current=(y.current+E+j)%j,i(y.current),C()},[C,b.length]);return O.useEffect(()=>{y.current=0,i(0),requestAnimationFrame(()=>{k()})},[s,k]),O.useEffect(()=>{k()},[k,b.length]),O.useEffect(()=>{const E=j=>{j.key==="ArrowLeft"&&A(-1),j.key==="ArrowRight"&&A(1)};return window.addEventListener("keydown",E),()=>{window.removeEventListener("keydown",E)}},[A]),O.useEffect(()=>{const E=p.current;if(!E)return;const j=M=>{if(v.current)return;const L=m.current[y.current];if(!L)return;const B=E.getBoundingClientRect(),W=M.clientX-B.left,F=M.clientY-B.top,Q=W/B.width-.5,D=F/B.height-.5;ne.to(L,{x:Q*12,y:D*12,duration:.6,ease:"power2.out",overwrite:!0})},P=()=>{const M=m.current[y.current];M&&ne.to(M,{x:0,y:0,duration:.8,ease:"power3.out"})};return E.addEventListener("mousemove",j),E.addEventListener("mouseleave",P),()=>{E.removeEventListener("mousemove",j),E.removeEventListener("mouseleave",P)}},[]),O.useEffect(()=>()=>{g.current&&g.current.kill()},[]),o.jsxs("section",{ref:u,className:"fd-museum-portfolio","aria-label":"Fairdeal Print Pack portfolio",children:[o.jsx("div",{className:"fd-museum-glow fd-glow-one"}),o.jsx("div",{className:"fd-museum-glow fd-glow-two"}),o.jsxs("div",{className:"fd-portfolio-container",children:[o.jsxs("div",{className:"fd-portfolio-header",children:[o.jsxs("div",{className:"fd-portfolio-kicker",children:[o.jsx("span",{}),"OUR WORK",o.jsx("span",{})]}),o.jsxs("h2",{children:[o.jsx("span",{children:"Print"})," ",o.jsx("span",{className:"fd-title-accent-yellow",children:"That"})," ",o.jsx("span",{className:"fd-title-accent-mint",children:"Speaks."})]}),o.jsx("p",{children:"A curated selection of print and packaging solutions crafted for brands that care about every detail."})]}),o.jsx("div",{className:"fd-filter-wrapper",children:o.jsx("div",{className:"fd-filter-list",children:VA.map(E=>o.jsx("button",{type:"button",className:`fd-filter-button ${s===E?"is-active":""}`,onClick:()=>{v.current||t(E)},children:E},E))})}),o.jsxs("div",{ref:p,className:"fd-portfolio-stage",children:[o.jsxs("div",{className:"fd-stage-number",children:[o.jsx("span",{children:String(n+1).padStart(2,"0")}),o.jsx("i",{}),o.jsx("span",{children:String(b.length).padStart(2,"0")})]}),o.jsxs("div",{className:"fd-stage-hint",children:[o.jsx("span",{className:"fd-hint-line"}),o.jsx("span",{children:"DRAG / USE ARROWS"}),o.jsx(no,{size:14})]}),b.map((E,j)=>o.jsxs("article",{ref:P=>{f.current[j]=P},className:`fd-portfolio-card ${j===n?"is-active":""}`,children:[j===n&&o.jsxs("div",{className:"fd-active-border","aria-hidden":"true",children:[o.jsx("span",{className:"fd-border-line fd-border-top"}),o.jsx("span",{className:"fd-border-line fd-border-right"}),o.jsx("span",{className:"fd-border-line fd-border-bottom"}),o.jsx("span",{className:"fd-border-line fd-border-left"})]}),o.jsx("div",{className:"fd-card-inner",children:o.jsxs("div",{className:"fd-card-image-wrap",children:[o.jsx("img",{ref:P=>{m.current[j]=P},src:E.image,alt:E.title,className:"fd-card-image",draggable:"false"}),o.jsxs("div",{className:"fd-card-overlay",children:[o.jsx("div",{className:"fd-card-category",children:E.category}),o.jsx("h3",{children:E.title}),o.jsx("span",{className:"fd-card-type",children:E.type})]})]})})]},`${E.title}-${j}`)),o.jsxs("div",{className:"fd-stage-navigation","aria-label":"Portfolio navigation",children:[o.jsx("button",{type:"button",className:"fd-stage-nav fd-stage-nav-prev",onClick:()=>A(-1),disabled:a||b.length<=1,"aria-label":"Previous project",children:o.jsx(m_,{size:18})}),o.jsx("button",{type:"button",className:"fd-stage-nav fd-stage-nav-next",onClick:()=>A(1),disabled:a||b.length<=1,"aria-label":"Next project",children:o.jsx(An,{size:18})})]})]})]}),o.jsx("style",{children:`
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
      `})]})},GA=[{icon:j_,title:"Working Hours",lines:["Mon - Sun: 9 am - 5 pm","Weekly Off: Thursday"]},{icon:L_,title:"Phone",lines:["020 2747 4888"]},{icon:P_,title:"Email",lines:["info@fairdealprintpack.com"]},{icon:R_,title:"Address",lines:["Fairdeal Print Pack, Mohanagar,","Chinchwad 411033"]}],qA=()=>{const[s,t]=O.useState(!1),[n,i]=O.useState(()=>document.documentElement.getAttribute("data-theme")==="light");O.useEffect(()=>{const g=()=>{i(document.documentElement.getAttribute("data-theme")==="light")};g();const y=new MutationObserver(g);return y.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>y.disconnect()},[]);const[a,c]=O.useState({name:"",email:"",phone:"",message:""}),u=n?"linear-gradient(135deg, rgba(26,125,106,0.13), rgba(255,255,255,0.88))":"linear-gradient(135deg, rgba(146,209,188,0.12), rgba(11,16,20,0.97))",p=n?"rgba(26,125,106,0.12)":"rgba(146,209,188,0.12)",f=n?"rgba(199,183,25,0.12)":"rgba(225,222,0,0.08)",m=g=>{g.preventDefault(),t(!0),c({name:"",email:"",phone:"",message:""}),setTimeout(()=>t(!1),5e3)};return o.jsxs("main",{className:"relative min-h-screen overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsx("div",{className:"mx-auto max-w-[1180px] text-center",children:o.jsx(Ge,{className:"mt-0 text-center md:mt-4",children:"CONTACT US"})})}),o.jsx("section",{className:"relative z-10 px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20",children:o.jsx("div",{className:"mx-auto max-w-[1180px]",children:o.jsxs("div",{className:"grid overflow-hidden rounded-[18px] border border-[var(--theme-border)] shadow-[0_16px_40px_rgba(0,0,0,0.06)] lg:grid-cols-[0.88fr_1.12fr]",style:{background:"var(--theme-surface)"},children:[o.jsxs("div",{"data-reveal":"left",className:"relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10",style:{background:u,borderRight:"1px solid var(--theme-border)"},children:[o.jsx("div",{className:"pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl",style:{background:p}}),o.jsx("div",{className:"pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full blur-3xl",style:{background:f}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(Ge,{className:"mb-2 text-left text-[var(--theme-accent-alt)]",children:"Get In Touch"}),o.jsx("h2",{className:"max-w-[360px] [font-family:'Merriweather',Helvetica] text-[24px] font-normal leading-tight tracking-[-0.04em] sm:text-[28px]",style:{color:"var(--theme-text)"},children:"Let's talk about your next project."}),o.jsx("p",{className:"mt-3 max-w-[380px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Whether you need a quotation, have a question about our services, or want to discuss a custom requirement, our team is ready to help."})]}),o.jsx("div",{className:"relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1",children:GA.map(g=>{const y=g.icon;return o.jsxs("div",{className:"group flex items-start gap-3",children:[o.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105",style:{borderColor:"var(--theme-border)",background:n?"rgba(26,125,106,0.08)":"rgba(146,209,188,0.08)",color:"var(--theme-accent)"},children:o.jsx(y,{className:"h-4 w-4"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.12em]",style:{color:"var(--theme-accent-alt)"},children:g.title}),o.jsx("div",{className:"mt-1",children:g.lines.map(v=>o.jsx("p",{className:"[font-family:'Inter',Helvetica] text-sm font-light leading-5",style:{color:"var(--theme-text-soft)"},children:v},v))})]})]},g.title)})})]}),o.jsxs("div",{"data-reveal":"right",className:"p-6 sm:p-8 lg:p-10",style:{background:"var(--theme-bg)"},children:[o.jsxs("div",{className:"mb-7",children:[o.jsx(Ge,{className:"mb-2 text-left text-[var(--theme-accent-alt)]",children:"Send us a Message"}),o.jsx("h2",{className:"[font-family:'Merriweather',Helvetica] text-[24px] font-normal tracking-[-0.04em] sm:text-[28px]",style:{color:"var(--theme-text)"},children:"We'd love to hear from you."}),o.jsx("p",{className:"mt-2 max-w-[520px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Fill out the form below and our team will get back to you as soon as possible."})]}),o.jsxs("form",{onSubmit:m,className:"flex flex-col gap-5",children:[o.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"name",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Name"}),o.jsx(io,{id:"name",type:"text",required:!0,value:a.name,onChange:g=>c({...a,name:g.target.value}),placeholder:"Your full name",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"email",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Email"}),o.jsx(io,{id:"email",type:"email",required:!0,value:a.email,onChange:g=>c({...a,email:g.target.value}),placeholder:"your@email.com",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"phone",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Phone"}),o.jsx(io,{id:"phone",type:"tel",value:a.phone,onChange:g=>c({...a,phone:g.target.value}),placeholder:"Your phone number",className:"h-11 rounded-md border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-text)] placeholder:text-[var(--theme-text-muted)] focus-visible:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx("label",{htmlFor:"message",className:"text-xs font-medium",style:{color:"var(--theme-text)"},children:"Message"}),o.jsx("textarea",{id:"message",required:!0,rows:5,value:a.message,onChange:g=>c({...a,message:g.target.value}),placeholder:"Tell us about your project...",className:"w-full resize-none rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-3 text-sm text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-text-muted)] transition-colors duration-300 focus:border-[var(--theme-accent)] focus:ring-1 focus:ring-[var(--theme-accent)]"})]}),o.jsxs("div",{className:"flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between",children:[o.jsx("p",{className:`text-xs transition-opacity duration-300 ${s?"opacity-100":"opacity-0"}`,style:{color:"var(--theme-text-soft)"},children:"Thank you. We'll get back to you soon."}),o.jsxs(jt,{type:"submit",className:"h-11 px-6 text-sm font-semibold",children:[s?"Message Sent":"Send Message",!s&&o.jsx(I_,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]})]})]})]})})}),o.jsx("section",{className:"relative z-10 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8",children:o.jsx("div",{className:"mx-auto max-w-[1180px]",children:o.jsx("div",{"data-reveal":"up",className:"group relative h-[260px] overflow-hidden rounded-[16px] border sm:h-[320px] lg:h-[360px]",style:{borderColor:"var(--theme-border)",background:"var(--theme-surface)"},children:o.jsx("iframe",{title:"Fairdeal Print Pack Location",src:"https://www.google.com/maps?q=Fairdeal%20Print%20Pack%2C%20Mohanagar%2C%20Chinchwad%2C%20Pune%20411033&output=embed",className:"h-full w-full border-0 grayscale transition-all duration-700 group-hover:grayscale-0",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{"data-reveal":"up",className:"mx-auto max-w-[620px] text-center",children:[o.jsx("p",{className:"text-[10px] font-medium uppercase tracking-[0.22em]",style:{color:"var(--theme-accent-alt)"},children:"Newsletter"}),o.jsxs("h2",{className:"mt-2 [font-family:'Merriweather',Helvetica] text-[25px] font-normal tracking-[-0.04em] sm:text-[30px]",style:{color:"var(--theme-text)"},children:["Be always in ",o.jsx("span",{style:{color:"var(--theme-accent-alt)"},children:"Touch"})]}),o.jsx("p",{className:"mx-auto mt-2 max-w-[480px] [font-family:'Inter',Helvetica] text-sm font-light leading-6",style:{color:"var(--theme-text-soft)"},children:"Stay connected with Fairdeal Print Pack and receive updates, insights, and news directly in your inbox."}),o.jsxs("form",{onSubmit:g=>g.preventDefault(),className:"mx-auto mt-6 flex max-w-[460px] items-center border-b",style:{borderColor:"var(--theme-border)"},children:[o.jsx(io,{type:"email",required:!0,placeholder:"Enter your email",className:"h-11 flex-1 rounded-none border-0 bg-transparent px-0 text-sm text-[var(--theme-text)] shadow-none placeholder:text-[var(--theme-text-muted)] focus-visible:ring-0"}),o.jsx(jt,{type:"submit",className:"h-7 w-7 shrink-0 rounded-sm p-0","aria-label":"Subscribe to newsletter",children:o.jsx(An,{className:"h-3.5 w-3.5"})})]})]})})]})},XA=()=>o.jsx("main",{className:"relative z-10 w-full bg-[var(--theme-bg)] px-6 pb-20 pt-20 text-[var(--theme-text)] sm:px-8 md:pt-32 lg:px-10 lg:pt-[165px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px]",children:[o.jsxs("div",{className:"mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-[620px]",children:[o.jsx(Ge,{className:"mb-3 text-left text-[var(--theme-accent-alt)]",children:"OUR TECHNOLOGY"}),o.jsx("h1",{className:"text-3xl font-medium tracking-[-0.04em] text-[var(--theme-text)] sm:text-4xl lg:text-[3.1rem]",children:"Technology & Infrastructure"})]}),o.jsxs("div",{className:"flex flex-col gap-4 lg:max-w-[520px] lg:items-end",children:[o.jsx("p",{className:"max-w-[520px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"Advanced printing, finishing, and packaging technology built to deliver precision, consistency, and high-quality results."}),o.jsx(jt,{to:"/services",className:"h-[48px] px-[26px] text-sm font-medium tracking-[-0.2px] sm:text-[15px]",children:"Back to services"})]})]}),o.jsx("div",{className:"grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3",children:z3.map(s=>o.jsxs(ln,{to:"/technology",className:"group block",children:[o.jsx("article",{className:`\r
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
                `,children:o.jsx("img",{src:s.image,alt:s.title,loading:"lazy",className:`\r
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
                      `,children:s.title}),s.features?.length>0&&o.jsx("ul",{className:"mt-3 space-y-1.5",children:s.features.slice(0,3).map(t=>o.jsxs("li",{className:`\r
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
                              `}),o.jsx("span",{children:t})]},t))})]})})})]},s.title))})]})}),QA=[{title:"1. Acceptance of Terms",body:"By accessing or using the Fairdeal Print Pack website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services."},{title:"2. Our Services",body:"Fairdeal Print Pack provides printing, packaging, paper supply, labeling, corrugated products, BOPP tapes, and related production services. Service availability, specifications, pricing, timelines, and delivery terms may vary by project and will be confirmed through our direct quotation or written agreement."},{title:"3. Quotations and Orders",body:"All quotations are subject to confirmation and may be updated based on material availability, artwork requirements, quantity, specifications, or production constraints. An order is considered accepted only after written confirmation from Fairdeal Print Pack. Any change to scope, quantity, delivery date, or specifications must be approved in writing."},{title:"4. Client Responsibilities",body:"Clients are responsible for providing accurate requirements, final artwork, approved content, dimensions, material specifications, and any copyright or trademark permissions required for the project. Fairdeal Print Pack may request clarification before production begins. We are not responsible for delays caused by incomplete, inaccurate, or late client information."},{title:"5. Artwork, Copyright, and Intellectual Property",body:"Clients must ensure that all supplied artwork, text, images, logos, and other materials are authorized for use. Fairdeal Print Pack does not claim ownership of client-provided content. However, Fairdeal Print Pack remains the owner of its website content, branding, templates, photographs, and proprietary production materials unless otherwise agreed."},{title:"6. Production and Delivery",body:"Production timelines are estimates and may be affected by material sourcing, machine availability, order volume, quality checks, transportation, or circumstances beyond our reasonable control. Fairdeal Print Pack will make reasonable efforts to meet agreed deadlines but cannot guarantee exact delivery dates."},{title:"7. Payment Terms",body:"Payment terms will be stated in the relevant quotation or agreement. Pending or overdue payments may result in suspension of production or delivery. Clients are responsible for any applicable taxes, duties, or charges not expressly included in the quotation."},{title:"8. Limitation of Liability",body:"Fairdeal Print Pack will use reasonable care and professional standards in performing its services. Our liability for any claim is limited to the fees paid for the specific service giving rise to the claim, except where liability cannot be excluded under applicable law. We shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of business, reputation, or anticipated profits."},{title:"9. Customer Communications",body:"By contacting Fairdeal Print Pack through the website, telephone, email, or other channels, you agree that we may use the information provided to respond to your inquiry, provide services, and communicate about your project. We will handle personal information in accordance with our Privacy Policy."},{title:"10. Website Use",body:"The website may be used for lawful purposes only. You must not attempt to interfere with its operation, access restricted areas, introduce harmful software, or use the site in a manner that could damage, disable, or impair our services or infrastructure."},{title:"11. Changes to These Terms",body:"Fairdeal Print Pack may update these Terms and Conditions from time to time. Continued use of the website after changes are published indicates acceptance of the revised terms."},{title:"12. Governing Law",body:"These Terms and Conditions are governed by the laws of India, and any dispute relating to them will be subject to the jurisdiction of the courts located in Pune, Maharashtra, unless otherwise required by applicable law."}],KA=()=>{const[s,t]=O.useState(()=>document.documentElement.getAttribute("data-theme")==="light");O.useEffect(()=>{const i=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};i();const a=new MutationObserver(i);return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]);const n=s?"linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))":"linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";return o.jsxs("main",{className:"min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] text-center",children:[o.jsx(Ge,{className:"mt-0 text-center md:mt-4",children:"LEGAL INFORMATION"}),o.jsx("h1",{className:"mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]",children:"Terms & Conditions"}),o.jsx("p",{className:"mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"These terms govern your use of the Fairdeal Print Pack website and the services we provide."})]})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]",style:{background:n},children:[o.jsxs("div",{className:"grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12",children:[o.jsxs("div",{className:"pb-5 lg:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:"Effective date"}),o.jsx("p",{className:"mt-2 text-sm text-[var(--theme-text-soft)]",children:"October 7, 2026"})]}),o.jsx("div",{className:"lg:border-l lg:border-[var(--theme-border)] lg:pl-10",children:o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)]",children:"Please review these terms carefully before using our website or engaging with our business. By using our website or placing an enquiry, you agree to these terms unless you have a separate written agreement with Fairdeal Print Pack that supersedes them."})})]}),o.jsx("div",{className:"space-y-7 p-6 sm:p-10 lg:p-12",children:QA.map((i,a)=>o.jsxs("article",{className:"border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:String(a+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl",children:i.title}),o.jsx("p",{className:"mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:i.body})]},i.title))})]})})]})},JA=[{title:"1. Information We Collect",body:"We may collect information you provide directly, such as your name, email address, phone number, company name, project requirements, and message. We may also collect technical information about your device, browser, IP address, referring website, pages visited, and interaction with our website."},{title:"2. How We Use Information",body:"We use personal information to respond to enquiries, provide quotations, discuss projects, manage service requests, improve our website, communicate with customers, and comply with applicable legal obligations. We may also use contact information to send service updates or relevant business communications when you have consented or where such communication is permitted by law."},{title:"3. Information Sharing",body:"We do not sell personal information. We may share information with trusted service providers who assist us with website hosting, email delivery, analytics, customer support, logistics, or business operations, provided they use the information only for the agreed purpose and protect it appropriately. We may disclose information when required by law, court order, regulatory request, or to protect the rights or safety of our customers, staff, or business."},{title:"4. Cookies and Analytics",body:"Our website may use cookies or similar technologies to remember preferences, understand website usage, improve performance, and provide a better user experience. You can configure your browser to reject or delete cookies, although some website features may not function correctly if cookies are disabled."},{title:"5. Data Security",body:"We use reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, use, disclosure, alteration, or destruction. No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security."},{title:"6. Your Rights",body:"Depending on applicable law, you may have the right to access, correct, update, delete, or restrict the use of your personal information. You may also object to certain processing or request a copy of the information we hold about you. To exercise these rights, please contact us using the details at the end of this policy."},{title:"7. Retention",body:"We retain personal information only for as long as necessary to fulfill the purpose for which it was collected, satisfy legal or regulatory obligations, resolve disputes, or enforce agreements. Information no longer required for those purposes may be securely deleted or anonymized."},{title:"8. Third-Party Websites",body:"Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those external websites. Please review their privacy policies before providing them with your information."},{title:"9. Children's Privacy",body:"Our website is not directed to children under the age of 18, and we do not knowingly collect personal information from children without appropriate parental or guardian consent. If we become aware that we have received personal information from a child without valid consent, we will take steps to delete it."},{title:"10. Changes to This Policy",body:"Fairdeal Print Pack may update this Privacy Policy from time to time. We will publish the updated version on this page with a revised effective date. Continued use of the website after changes are made indicates your acceptance of the revised policy."},{title:"11. Contact Us",body:"If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your information, please contact Fairdeal Print Pack at info@fairdealprintpack.com or 020 2747 4888. You may also contact us at Fairdeal Print Pack, Mohanagar, Chinchwad 411033."}],ZA=()=>{const[s,t]=O.useState(()=>document.documentElement.getAttribute("data-theme")==="light");O.useEffect(()=>{const i=()=>{t(document.documentElement.getAttribute("data-theme")==="light")};i();const a=new MutationObserver(i);return a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>a.disconnect()},[]);const n=s?"linear-gradient(135deg, rgba(26,125,106,0.12), rgba(255,255,255,0.94))":"linear-gradient(135deg, rgba(146,209,188,0.10), rgba(11,16,20,0.96))";return o.jsxs("main",{className:"min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]",children:[o.jsx("section",{className:"relative px-5 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-[150px]",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] text-center",children:[o.jsx(Ge,{className:"mt-0 text-center md:mt-4",children:"PRIVACY NOTICE"}),o.jsx("h1",{className:"mt-5 text-[clamp(40px,6vw,72px)] font-[650] leading-[0.98] tracking-[-0.055em]",children:"Privacy Policy"}),o.jsx("p",{className:"mx-auto mt-5 max-w-[760px] text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:"This policy explains how Fairdeal Print Pack collects, uses, and protects information provided through our website and business communications."})]})}),o.jsx("section",{className:"relative z-10 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8",children:o.jsxs("div",{className:"mx-auto max-w-[1180px] overflow-hidden rounded-[24px] border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]",style:{background:n},children:[o.jsxs("div",{className:"grid gap-1 bg-[var(--theme-accent)]/10 p-6 sm:p-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:p-12",children:[o.jsxs("div",{className:"pb-5 lg:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:"Effective date"}),o.jsx("p",{className:"mt-2 text-sm text-[var(--theme-text-soft)]",children:"October 7, 2026"})]}),o.jsx("div",{className:"lg:border-l lg:border-[var(--theme-border)] lg:pl-10",children:o.jsx("p",{className:"text-sm leading-7 text-[var(--theme-text-soft)]",children:"We respect your privacy and are committed to handling your personal information responsibly. This policy applies to information collected through our website and direct communications with Fairdeal Print Pack."})})]}),o.jsx("div",{className:"space-y-7 p-6 sm:p-10 lg:p-12",children:JA.map((i,a)=>o.jsxs("article",{className:"border-b border-[var(--theme-border)] pb-7 last:border-0 last:pb-0",children:[o.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-alt)]",children:String(a+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 text-xl font-medium tracking-[-0.03em] sm:text-2xl",children:i.title}),o.jsx("p",{className:"mt-3 text-sm leading-7 text-[var(--theme-text-soft)] sm:text-base",children:i.body})]},i.title))})]})})]})},rw=document.getElementById("app");if(!rw)throw new Error("App root element not found");K2.createRoot(rw).render(o.jsx(O.StrictMode,{children:o.jsx(K5,{children:o.jsx(W5,{children:o.jsxs(Nn,{element:o.jsx(KN,{}),children:[o.jsx(Nn,{path:"/",element:o.jsx(fv,{})}),o.jsx(Nn,{path:"/about",element:o.jsx(p3,{})}),o.jsx(Nn,{path:"/services",element:o.jsx(D3,{})}),o.jsx(Nn,{path:"/services/:serviceName",element:o.jsx(EA,{})}),o.jsx(Nn,{path:"/technology",element:o.jsx(XA,{})}),o.jsx(Nn,{path:"/portfolio",element:o.jsx(YA,{})}),o.jsx(Nn,{path:"/contact",element:o.jsx(qA,{})}),o.jsx(Nn,{path:"/terms-and-conditions",element:o.jsx(KA,{})}),o.jsx(Nn,{path:"/privacy-policy",element:o.jsx(ZA,{})}),o.jsx(Nn,{path:"*",element:o.jsx(fv,{})})]})})})}));
