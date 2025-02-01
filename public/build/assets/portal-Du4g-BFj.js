import{r as s,U as E}from"./app-CAXv3lmr.js";import{f as N,K as P,o as y,y as $,n as v,L as A,e as x,s as S,u as K,t as q,T as z,l as J}from"./use-server-handoff-complete-BfVYpOXC.js";import{r as Q}from"./index-4kJY-3KD.js";function M(e){return N.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Z=s.createContext(void 0);function ee(){return s.useContext(Z)}let C=s.createContext(null);C.displayName="DescriptionContext";function _(){let e=s.useContext(C);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return e}function ke(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=y(o=>(t(i=>[...i,o]),()=>t(i=>{let a=i.slice(),u=a.indexOf(o);return u!==-1&&a.splice(u,1),a}))),l=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return E.createElement(C.Provider,{value:l},n.children)},[t])]}let te="p";function ne(e,t){let n=s.useId(),r=ee(),{id:l=`headlessui-description-${n}`,...o}=e,i=_(),a=$(t);v(()=>i.register(l),[l,i.register]);let u=r||!1,d=s.useMemo(()=>({...i.slot,disabled:u}),[i.slot,u]),c={ref:a,...i.props,id:l};return A()({ourProps:c,theirProps:o,slot:d,defaultTag:te,name:i.name||"Description"})}let re=P(ne),We=Object.assign(re,{});var oe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(oe||{});let le=s.createContext(()=>{});function Ue({value:e,children:t}){return E.createElement(le.Provider,{value:e},t)}let ie=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function H(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...o){let i=t[l].call(n,...o);i&&(n=i,r.forEach(a=>a()))}}}function k(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let ue=new ie(()=>H(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function R(e,t){let n=ue.get(t),r=s.useId(),l=k(n);if(v(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let o=l.indexOf(r),i=l.length;return o===-1&&(o=i,i+=1),o===i-1}let L=new Map,b=new Map;function D(e){var t;let n=(t=b.get(e))!=null?t:0;return b.set(e,n+1),n!==0?()=>F(e):(L.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>F(e))}function F(e){var t;let n=(t=b.get(e))!=null?t:1;if(n===1?b.delete(e):b.set(e,n-1),n!==1)return;let r=L.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,L.delete(e))}function Ge(e,{allowed:t,disallowed:n}={}){let r=R(e,"inert-others");v(()=>{var l,o;if(!r)return;let i=x();for(let u of(l=n==null?void 0:n())!=null?l:[])u&&i.add(D(u));let a=(o=t==null?void 0:t())!=null?o:[];for(let u of a){if(!u)continue;let d=M(u);if(!d)continue;let c=u.parentElement;for(;c&&c!==d.body;){for(let f of c.children)a.some(h=>f.contains(h))||i.add(D(f));c=c.parentElement}}return i.dispose},[r,t,n])}function Ve(e,t,n){let r=S(l=>{let o=l.getBoundingClientRect();o.x===0&&o.y===0&&o.width===0&&o.height===0&&n()});s.useEffect(()=>{if(!e)return;let l=t===null?null:t instanceof HTMLElement?t:t.current;if(!l)return;let o=x();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>r.current(l));i.observe(l),o.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>r.current(l));i.observe(l),o.add(()=>i.disconnect())}return()=>o.dispose()},[t,r,e])}let O=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),ae=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var se=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(se||{}),ce=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ce||{}),de=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(de||{});function W(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(O)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function fe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var U=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(U||{});function j(e,t=0){var n;return e===((n=M(e))==null?void 0:n.body)?!1:K(t,{0(){return e.matches(O)},1(){let r=e;for(;r!==null;){if(r.matches(O))return!0;r=r.parentElement}return!1}})}function Be(e){let t=M(e);x().nextFrame(()=>{t&&!j(t.activeElement,0)&&he(e)})}var me=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(me||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function he(e){e==null||e.focus({preventScroll:!0})}let pe=["textarea","input"].join(",");function ve(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,pe))!=null?n:!1}function Ee(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let i=l.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Xe(e,t){return ge(W(),t,{relativeTo:e})}function ge(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?Ee(e):e:t&64?fe(e):W(e);l.length>0&&i.length>1&&(i=i.filter(m=>!l.some(g=>g!=null&&"current"in g?(g==null?void 0:g.current)===m:g===m))),r=r??o.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=i.length,h;do{if(c>=f||c+f<=0)return 0;let m=u+c;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}h=i[m],h==null||h.focus(d),c+=a}while(h!==o.activeElement);return t&6&&ve(h)&&h.select(),2}function G(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function we(){return/Android/gi.test(window.navigator.userAgent)}function be(){return G()||we()}function w(e,t,n,r){let l=S(n);s.useEffect(()=>{if(!e)return;function o(i){l.current(i)}return document.addEventListener(t,o,r),()=>document.removeEventListener(t,o,r)},[e,t,r])}function xe(e,t,n,r){let l=S(n);s.useEffect(()=>{if(!e)return;function o(i){l.current(i)}return window.addEventListener(t,o,r),()=>window.removeEventListener(t,o,r)},[e,t,r])}const I=30;function Ye(e,t,n){let r=R(e,"outside-click"),l=S(n),o=s.useCallback(function(u,d){if(u.defaultPrevented)return;let c=d(u);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let f=function h(m){return typeof m=="function"?h(m()):Array.isArray(m)||m instanceof Set?m:[m]}(t);for(let h of f)if(h!==null&&(h.contains(c)||u.composed&&u.composedPath().includes(h)))return;return!j(c,U.Loose)&&c.tabIndex!==-1&&u.preventDefault(),l.current(u,c)},[l,t]),i=s.useRef(null);w(r,"pointerdown",u=>{var d,c;i.current=((c=(d=u.composedPath)==null?void 0:d.call(u))==null?void 0:c[0])||u.target},!0),w(r,"mousedown",u=>{var d,c;i.current=((c=(d=u.composedPath)==null?void 0:d.call(u))==null?void 0:c[0])||u.target},!0),w(r,"click",u=>{be()||i.current&&(o(u,()=>i.current),i.current=null)},!0);let a=s.useRef({x:0,y:0});w(r,"touchstart",u=>{a.current.x=u.touches[0].clientX,a.current.y=u.touches[0].clientY},!0),w(r,"touchend",u=>{let d={x:u.changedTouches[0].clientX,y:u.changedTouches[0].clientY};if(!(Math.abs(d.x-a.current.x)>=I||Math.abs(d.y-a.current.y)>=I))return o(u,()=>u.target instanceof HTMLElement?u.target:null)},!0),xe(r,"blur",u=>o(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function V(...e){return s.useMemo(()=>M(...e),[...e])}function ye(){let e;return{before({doc:t}){var n;let r=t.documentElement,l=(n=t.defaultView)!=null?n:window;e=Math.max(0,l.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,l=Math.max(0,r.clientWidth-r.offsetWidth),o=Math.max(0,e-l);n.style(r,"paddingRight",`${o}px`)}}}function Pe(){return G()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=x();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:d}=new URL(u.href),c=e.querySelector(d);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let u=a.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let u=(a=window.scrollY)!=null?a:window.pageYOffset;o!==u&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function $e(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ae(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let p=H(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:x(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ae(n)},l=[Pe(),ye(),$e()];l.forEach(({before:o})=>o==null?void 0:o(r)),l.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});p.subscribe(()=>{let e=p.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&p.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&p.dispatch("TEARDOWN",n)}});function Se(e,t,n=()=>({containers:[]})){let r=k(p),l=t?r.get(t):void 0,o=l?l.count>0:!1;return v(()=>{if(!(!t||!e))return p.dispatch("PUSH",t,n),()=>p.dispatch("POP",t,n)},[e,t]),o}function Ke(e,t,n=()=>[document.body]){let r=R(e,"scroll-lock");Se(r,t,l=>{var o;return{containers:[...(o=l.containers)!=null?o:[],n]}})}function Me(e){let t=y(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,q(()=>{n.current&&t()})}),[t])}let B=s.createContext(!1);function Le(){return s.useContext(B)}function qe(e){return E.createElement(B.Provider,{value:e.force},e.children)}function Oe(e){let t=Le(),n=s.useContext(Y),r=V(e),[l,o]=s.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(N.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let u=r.createElement("div");return u.setAttribute("id","headlessui-portal-root"),r.body.appendChild(u)});return s.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),s.useEffect(()=>{t||n!==null&&o(n.current)},[n,o,t]),l}let X=s.Fragment,Te=P(function(e,t){let n=e,r=s.useRef(null),l=$(z(f=>{r.current=f}),t),o=V(r),i=Oe(r),[a]=s.useState(()=>{var f;return N.isServer?null:(f=o==null?void 0:o.createElement("div"))!=null?f:null}),u=s.useContext(T),d=J();v(()=>{!i||!a||i.contains(a)||(a.setAttribute("data-headlessui-portal",""),i.appendChild(a))},[i,a]),v(()=>{if(a&&u)return u.register(a)},[u,a]),Me(()=>{var f;!i||!a||(a instanceof Node&&i.contains(a)&&i.removeChild(a),i.childNodes.length<=0&&((f=i.parentElement)==null||f.removeChild(i)))});let c=A();return d?!i||!a?null:Q.createPortal(c({ourProps:{ref:l},theirProps:n,slot:{},defaultTag:X,name:"Portal"}),a):null});function Ne(e,t){let n=$(t),{enabled:r=!0,...l}=e,o=A();return r?E.createElement(Te,{...l,ref:n}):o({ourProps:{ref:n},theirProps:l,slot:{},defaultTag:X,name:"Portal"})}let Ce=s.Fragment,Y=s.createContext(null);function Re(e,t){let{target:n,...r}=e,l={ref:$(t)},o=A();return E.createElement(Y.Provider,{value:n},o({ourProps:l,theirProps:r,defaultTag:Ce,name:"Popover.Group"}))}let T=s.createContext(null);function ze(){let e=s.useContext(T),t=s.useRef([]),n=y(o=>(t.current.push(o),e&&e.register(o),()=>r(o))),r=y(o=>{let i=t.current.indexOf(o);i!==-1&&t.current.splice(i,1),e&&e.unregister(o)}),l=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:o}){return E.createElement(T.Provider,{value:l},o)},[l])]}let De=P(Ne),Fe=P(Re),Je=Object.assign(De,{Group:Fe});export{j as A,Ue as C,se as F,Be as G,We as H,he as I,ge as P,Ye as R,ce as T,Fe as X,Ee as _,Ke as a,ee as b,Me as c,O as f,U as h,Xe as j,qe as l,Ve as m,V as n,oe as o,Je as r,xe as s,ze as t,M as u,ke as w,R as x,Ge as y};
