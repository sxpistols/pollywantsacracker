var zr=Object.defineProperty;var Xi=n=>{throw TypeError(n)};var Hr=(n,a,e)=>a in n?zr(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var _=(n,a,e)=>Hr(n,typeof a!="symbol"?a+"":a,e),Qe=(n,a,e)=>a.has(n)||Xi("Cannot "+e);var m=(n,a,e)=>(Qe(n,a,"read from private field"),e?e.call(n):a.get(n)),x=(n,a,e)=>a.has(n)?Xi("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(n):a.set(n,e),j=(n,a,e,i)=>(Qe(n,a,"write to private field"),i?i.call(n,e):a.set(n,e),e),w=(n,a,e)=>(Qe(n,a,"access private method"),e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const vt=!1;var wt=Array.isArray,Fr=Array.prototype.indexOf,ue=Array.prototype.includes,qe=Array.from,_t=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,$r=Object.getOwnPropertyDescriptors,Or=Object.prototype,Wr=Array.prototype,jt=Object.getPrototypeOf,Qi=Object.isExtensible;const Gr=()=>{};function Jr(n){for(var a=0;a<n.length;a++)n[a]()}function St(){var n,a,e=new Promise((i,t)=>{n=i,a=t});return{promise:e,resolve:n,reject:a}}const Y=2,oe=4,Ue=8,xt=1<<24,Sa=16,Aa=32,un=64,di=128,Ti=256,Ia=512,$=1024,L=2048,ha=4096,ta=8192,V=16384,zn=32768,Me=1<<25,Dn=65536,De=1<<17,qr=1<<18,Hn=1<<19,Ur=1<<20,Fa=1<<25,Le=1<<21,Tn=1<<22,rn=1<<23,ai=Symbol("$state"),It=Symbol("component"),Pe=Symbol("attributes"),mi=Symbol("class"),ki=Symbol("style"),Un=Symbol("text"),Ee=Symbol("form reset"),ce=new class extends Error{constructor(){super(...arguments);_(this,"name","StaleReactionError");_(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Zr=1,Vr=2,At=4,Yr=8,Xr=16,Qr=1,as=2,Tt={},F=Symbol("uninitialized"),Pt="http://www.w3.org/1999/xhtml",ns="http://www.w3.org/2000/svg",es="http://www.w3.org/1998/Math/MathML";function is(){console.warn("https://svelte.dev/e/derived_inert")}function ts(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Et(n){return n===this.v}function rs(n,a){return n!=n?a==a:n!==a||n!==null&&typeof n=="object"||typeof n=="function"}function Rt(n){return!rs(n,this.v)}function ss(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ls(n,a,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function us(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function os(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ds(n){throw new Error("https://svelte.dev/e/effect_orphan")}function ms(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ks(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function hs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ps(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function gs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let cs=!1,la=null;function Ln(n){la=n}function Pi(n,a=!1,e){la={p:la,i:!1,c:null,e:null,s:n,x:null,r:P,l:null}}function Ei(n){var a=la,e=a.e;if(e!==null){a.e=null;for(var i of e)Qt(i)}return a.i=!0,la=a.p,Nt(n)}function Nt(n={}){return _t(n,It,{value:!0}),n}function Ct(){return!0}let kn=[];function Mt(){var n=kn;kn=[],Jr(n)}function en(n){if(kn.length===0&&!ee){var a=kn;queueMicrotask(()=>{a===kn&&Mt()})}kn.push(n)}function fs(){for(;kn.length>0;)Mt()}const bs=-7169;function H(n,a){n.f=n.f&bs|a}function Ri(n){(n.f&Ia)!==0||n.deps===null?H(n,$):H(n,ha)}function Dt(n,a){(n.f&L)!==0?a.set(n,L):(n.f&ha)!==0&&a.get(n)!==L&&a.set(n,ha),H(n,$)}let at=!1;function ys(){at||(at=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var a;if(!n.defaultPrevented)for(const e of n.target.elements)(a=e[Ee])==null||a.call(e)})},{capture:!0}))}function fe(n){var a=S,e=P;ba(null),Wa(null);try{return n()}finally{ba(a),Wa(e)}}function vs(n,a,e,i=e){n.addEventListener(a,()=>fe(e));const t=n[Ee];t?n[Ee]=()=>{t(),i(!0)}:n[Ee]=()=>i(!0),ys()}function ws(n,a,e,i){const t=Ni;var r=n.filter(p=>!p.settled),l=a.map(t);if(e.length===0&&r.length===0){i(l);return}var s=P,o=_s(),u=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(p=>p.promise)):null;function d(p){if((s.f&V)===0){o();try{i([...l,...p])}catch(g){Ha(g,s)}Ke()}}var h=Lt();if(e.length===0){u.then(()=>d([])).finally(h);return}function k(){Promise.all(e.map(p=>js(p))).then(d).catch(p=>Ha(p,s)).finally(h)}u?u.then(()=>{if((s.f&V)!==0){h();return}o(),k(),Ke()}):k()}function _s(){var n=P,a=S,e=la,i=v;return function(r=!0){Wa(n),ba(a),Ln(e),r&&(n.f&V)===0&&(i==null||i.activate(),i==null||i.apply())}}function Ke(n=!0){Wa(null),ba(null),Ln(null),n&&(v==null||v.deactivate())}function Lt(){var n=P,a=n.b,e=v,i=!!(a!=null&&a.is_rendered());return a==null||a.update_pending_count(1,e),e.increment(i,n),()=>{a==null||a.update_pending_count(-1,e),e.decrement(i,n)}}function Ni(n){var a=Y|L;return P!==null&&(P.f|=Hn),{ctx:la,deps:null,effects:null,equals:Et,f:a,fn:n,reactions:null,rv:0,v:F,wv:0,parent:P,ac:null}}const Zn=Symbol("obsolete");function js(n,a,e){let i=P;i===null&&ss();var t=void 0,r=wn(F),l=!S,s=new Set;return Hs(()=>{var p,g;var o=P,u=St();t=u.promise;try{Promise.resolve(n()).then(u.resolve,b=>{b!==ce&&u.reject(b)}).finally(Ke)}catch(b){u.reject(b),Ke()}var d=v;if(l){if((o.f&zn)!==0)var h=Lt();if((p=i.b)!=null&&p.is_rendered())(g=d.async_deriveds.get(o))==null||g.reject(Zn);else for(const b of s.values())b.reject(Zn);s.add(u),d.async_deriveds.set(o,u)}const k=(b,c=void 0)=>{h==null||h(),s.delete(u),c!==Zn&&(d.activate(),c?(r.f|=rn,Kn(r,c)):((r.f&rn)!==0&&(r.f^=rn),Kn(r,b)),d.deactivate())};u.promise.then(k,b=>k(null,b||"unknown"))}),Bs(()=>{for(const o of s)o.reject(Zn)}),new Promise(o=>{function u(d){function h(){d===t?o(r):u(t)}d.then(h,h)}u(t)})}function Da(n){const a=Ni(n);return sr(a),a}function Ss(n){const a=Ni(n);return a.equals=Rt,a}function xs(n){var a=n.effects;if(a!==null){n.effects=null;for(var e=0;e<a.length;e+=1)ua(a[e])}}function Ci(n){var a,e=P,i=n.parent;if(!on&&i!==null&&n.v!==F&&(i.f&(V|ta))!==0)return is(),n.v;Wa(i);try{xs(n),a=dr(n)}finally{Wa(e)}return a}function Kt(n){var a=Ci(n);if(!n.equals(a)&&(n.wv=ur(),(!(v!=null&&v.is_fork)||n.deps===null)&&(v!==null?(v.capture(n,a,!0),sn==null||sn.capture(n,a,!0)):n.v=a,n.deps===null))){H(n,$);return}on||(q!==null?(Li()||v!=null&&v.is_fork)&&q.set(n,a):Ri(n))}function Is(n){var a;if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&((a=e.teardown)==null||a.call(e),e.ac!==null&&fe(()=>{e.ac.abort(ce),e.ac=null}),e.fn!==null&&(e.teardown=Gr),de(e,0),Bi(e))}function Bt(n){if(n.effects!==null)for(const a of n.effects)a.teardown&&a.fn!==null&&Bn(a)}let ni=null,xn=null,v=null,sn=null,q=null,hi=null,ee=!1,ei=!1,ie=null,Re=null;var nt=0;let As=1;var Pn,En,Rn,qa,Nn,Ua,ke,La,Ka,Cn,pn,I,pi,zt,gi,Vn,ci,Ht,Ft,$t,In,Ts,Yn;const We=class We{constructor(){x(this,I);_(this,"id",As++);_(this,"started",!1);_(this,"linked",!0);_(this,"prev",null);_(this,"next",null);_(this,"async_deriveds",new Map);_(this,"current",new Map);_(this,"previous",new Map);x(this,Pn,new Set);x(this,En,new Set);x(this,Rn,0);x(this,qa,new Map);x(this,Nn,null);x(this,Ua,[]);x(this,ke,[]);x(this,La,new Map);x(this,Ka,new Map);x(this,Cn,new Set);_(this,"is_fork",!1);x(this,pn,!1);xn===null?ni=xn=this:(xn.next=this,this.prev=xn),xn=this}skip_effect(a){m(this,Ka).has(a)||m(this,Ka).set(a,{d:[],m:[]}),m(this,Cn).delete(a)}unskip_effect(a,e=i=>this.schedule(i)){var i=m(this,Ka).get(a);if(i){m(this,Ka).delete(a);for(var t of i.d)H(t,L),e(t);for(t of i.m)H(t,ha),e(t)}m(this,Cn).add(a)}capture(a,e,i=!1){a.v!==F&&!this.previous.has(a)&&this.previous.set(a,a.v),(a.f&rn)===0&&(this.current.set(a,[e,i]),q==null||q.set(a,e)),this.is_fork||(a.v=e)}activate(){v=this}deactivate(){v=null,q=null}flush(){try{ei=!0,v=this,w(this,I,Vn).call(this)}finally{nt=0,hi=null,ie=null,Re=null,ei=!1,v=null,q=null,$a.clear()}}discard(){var a;for(const e of m(this,En))e(this);m(this,En).clear();for(const e of this.async_deriveds.values())e.reject(Zn);w(this,I,Yn).call(this),(a=m(this,Nn))==null||a.resolve()}register_created_effect(a){m(this,ke).push(a)}increment(a,e){if(j(this,Rn,m(this,Rn)+1),a){let i=m(this,qa).get(e)??0;m(this,qa).set(e,i+1)}}decrement(a,e){if(j(this,Rn,m(this,Rn)-1),a){let i=m(this,qa).get(e)??0;i===1?m(this,qa).delete(e):m(this,qa).set(e,i-1)}m(this,pn)||(j(this,pn,!0),en(()=>{j(this,pn,!1),this.linked&&this.flush()}))}transfer_reactions(a){for(const[e,i]of a)this.add_dirty_reaction(e,i);a.clear()}add_dirty_reaction(a,e){(e===L||m(this,La).get(a)!==L)&&m(this,La).set(a,e)}oncommit(a){m(this,Pn).add(a)}ondiscard(a){m(this,En).add(a)}settled(){return(m(this,Nn)??j(this,Nn,St())).promise}static ensure(){if(v===null){const a=v=new We;!ei&&!ee&&en(()=>{a.started||a.flush()})}return v}apply(){{q=null;return}}schedule(a){var e;if(hi=a,(e=a.b)!=null&&e.is_pending&&(a.f&(oe|Ue|xt))!==0&&(a.f&zn)===0){a.b.defer_effect(a);return}m(this,Ua).push(a)}};Pn=new WeakMap,En=new WeakMap,Rn=new WeakMap,qa=new WeakMap,Nn=new WeakMap,Ua=new WeakMap,ke=new WeakMap,La=new WeakMap,Ka=new WeakMap,Cn=new WeakMap,pn=new WeakMap,I=new WeakSet,pi=function(){if(this.is_fork)return!0;for(const a of m(this,qa).keys())if(!w(this,I,zt).call(this,a))return!0;return!1},zt=function(a){for(var e=a;e!==null;e=e.parent)if(m(this,Ka).has(e))return!0;return!1},gi=function(){var a=[];for(const r of m(this,Ua))if(!((r.f&V)!==0||(r.f&(L|ha))===0)){for(var e=r,i=!1;e.parent!==null;){e=e.parent;var t=e.f;if((t&(un|Aa))!==0){if((t&$)===0){i=!0;break}e.f^=$}}i||a.push(e)}return j(this,Ua,[]),a},Vn=function(){var s,o,u,d;this.started=!0;for(const[h,k]of m(this,La))H(h,k),this.schedule(h);this.apply();for(var a=ie=[],e=[],i=Re=[];m(this,Ua).length>0;){nt++>1e3&&(w(this,I,Yn).call(this),Es());for(const h of w(this,I,gi).call(this))try{w(this,I,ci).call(this,h,a,e)}catch(k){throw Gt(h),w(this,I,pi).call(this)||this.discard(),k}}if(v=null,i.length>0){var t=We.ensure();for(const h of i)t.schedule(h)}if(ie=null,Re=null,w(this,I,pi).call(this)){w(this,I,In).call(this,e),w(this,I,In).call(this,a);for(const[h,k]of m(this,Ka))Wt(h,k);i.length>0&&w(s=v,I,Vn).call(s);return}const r=w(this,I,Ht).call(this);if(r){w(this,I,In).call(this,e),w(this,I,In).call(this,a),w(o=r,I,$t).call(o,this);return}m(this,La).clear();for(const h of m(this,Pn))h(this);m(this,Pn).clear(),sn=this,et(e),et(a),sn=null,(u=m(this,Nn))==null||u.resolve();var l=v;m(this,Rn)===0&&(m(this,Ua).length===0||l!==null)&&w(this,I,Yn).call(this),l!==null&&($a.clear(),w(d=l,I,Vn).call(d))},ci=function(a,e,i){a.f^=$;for(var t=a.first;t!==null;){var r=t.f,l=(r&(Aa|un))!==0,s=l&&(r&$)!==0,o=s||(r&ta)!==0||m(this,Ka).has(t);if(!o&&t.fn!==null){l?t.f^=$:(r&oe)!==0?e.push(t):ye(t)&&((r&Sa)!==0&&this.add_dirty_reaction(t,ha),Bn(t));var u=t.first;if(u!==null){t=u;continue}}for(;t!==null;){var d=t.next;if(d!==null){t=d;break}t=t.parent}}},Ht=function(){for(var a=this.prev;a!==null;a=a.prev)if(!a.is_fork&&w(this,I,Ft).call(this,a))return a;return null},Ft=function(a){for(const[e,[,i]]of this.current)if(!i&&a.current.has(e))return!0;return!1},$t=function(a){var i;for(const[t,r]of a.current)!this.previous.has(t)&&a.previous.has(t)&&this.previous.set(t,a.previous.get(t)),this.current.set(t,r);for(const[t,r]of a.async_deriveds){const l=this.async_deriveds.get(t);l&&r.promise.then(l.resolve).catch(l.reject)}a.async_deriveds.clear(),this.transfer_reactions(m(a,La));const e=t=>{var r=t.reactions;if(r!==null&&!((t.f&Y)!==0&&(t.f&(L|ha))===0))for(const o of r){var l=o.f;if((l&Y)!==0)e(o);else{var s=o;l&(Tn|Sa)&&!this.async_deriveds.has(s)&&(m(this,La).delete(s),H(s,L),this.schedule(s))}}};for(const t of this.current.keys())e(t);this.oncommit(()=>a.discard()),w(i=a,I,Yn).call(i),v=this,w(this,I,Vn).call(this)},In=function(a){for(var e=0;e<a.length;e+=1)Dt(a[e],m(this,La))},Ts=function(){var h,k;for(let p=ni;p!==null;p=p.next){var a=p.id<this.id,e=[];for(const[g,[b,c]]of this.current){if(p.current.has(g)){var i=p.current.get(g)[0];if(a&&b!==i)p.current.set(g,[b,c]);else continue}e.push(g)}if(a)for(const[g,b]of this.async_deriveds){const c=p.async_deriveds.get(g);c&&b.promise.then(c.resolve).catch(c.reject)}var t=[...p.current.keys()].filter(g=>!p.current.get(g)[1]);if(!(!p.started||t.length===0)){var r=t.filter(g=>!this.current.has(g));if(r.length===0)a&&p.discard();else if(e.length>0){if(a)for(const g of m(this,Cn))p.unskip_effect(g,b=>{var c;(b.f&(Sa|Tn))!==0?p.schedule(b):w(c=p,I,In).call(c,[b])});p.activate();var l=new Set,s=new Map;for(var o of e)Ot(o,r,l,s);s=new Map;var u=[...p.current].filter(([g,b])=>{const c=this.current.get(g);return c?c[0]!==b[0]||c[1]!==b[1]:!0}).map(([g])=>g);if(u.length>0)for(const g of m(this,ke))(g.f&(V|ta|De))===0&&Mi(g,u,s)&&((g.f&(Tn|Sa))!==0?(H(g,L),p.schedule(g)):p.add_dirty_reaction(g,L));if(m(p,Ua).length>0&&!m(p,pn)){p.apply();for(var d of w(h=p,I,gi).call(h))w(k=p,I,ci).call(k,d,[],[])}p.deactivate()}}}},Yn=function(){if(this.linked){var a=this.prev,e=this.next;a===null?ni=e:a.next=e,e===null?xn=a:e.prev=a,this.linked=!1}};let vn=We;function Ps(n){var a=ee,e=sn;sn=null,ee=!0;try{for(var i;;){if(fs(),v===null)return i;v.flush()}}finally{ee=a,sn=e}}function Es(){try{ms()}catch(n){Ha(n,hi)}}let wa=null;function et(n){var a=n.length;if(a!==0){for(var e=0;e<a;){var i=n[e++];if((i.f&(V|ta))===0&&ye(i)&&(wa=new Set,Bn(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&ir(i),(wa==null?void 0:wa.size)>0)){$a.clear();for(const t of wa){if((t.f&(V|ta))!==0)continue;const r=[t];let l=t.parent;for(;l!==null;)wa.has(l)&&(wa.delete(l),r.push(l)),l=l.parent;for(let s=r.length-1;s>=0;s--){const o=r[s];(o.f&(V|ta))===0&&Bn(o)}}wa.clear()}}wa=null}}function Ot(n,a,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const t of n.reactions){const r=t.f;(r&Y)!==0?Ot(t,a,e,i):(r&(Tn|Sa))!==0&&(r&L)===0&&Mi(t,a,i)&&(H(t,L),Di(t))}}function Mi(n,a,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const t of n.deps){if(ue.call(a,t))return!0;if((t.f&Y)!==0&&Mi(t,a,e))return e.set(t,!0),!0}return e.set(n,!1),!1}function Di(n){v.schedule(n)}function Wt(n,a){if(!((n.f&Aa)!==0&&(n.f&$)!==0)){(n.f&L)!==0?a.d.push(n):(n.f&ha)!==0&&a.m.push(n),H(n,$);for(var e=n.first;e!==null;)Wt(e,a),e=e.next}}function Gt(n){H(n,$);for(var a=n.first;a!==null;)Gt(a),a=a.next}let Be=new Set;const $a=new Map;let Jt=!1;function wn(n,a){var e={f:0,v:n,reactions:null,equals:Et,rv:0,wv:0};return e}function Ma(n,a){const e=wn(n);return sr(e),e}function Rs(n,a=!1,e=!0){const i=wn(n);return a||(i.equals=Rt),i}function Ja(n,a,e=!1){S!==null&&(!xa||(S.f&De)!==0)&&Ct()&&(S.f&(Y|Sa|Tn|De))!==0&&(Oa===null||!Oa.has(n))&&ps();let i=e?An(a):a;return Kn(n,i,Re)}var mn=null,fi=0;function Kn(n,a,e=null){if(!n.equals(a)){on?$a.set(n,a):$a.has(n)||$a.set(n,n.v);var i=vn.ensure();if(i.capture(n,a),(n.f&Y)!==0){const t=n;(n.f&L)!==0&&Ci(t),q===null&&Ri(t)}n.wv=ur(),mn=null,fi=0,qt(n,L,e),mn=null,P!==null&&(P.f&$)!==0&&(P.f&(Aa|un))===0&&(pa===null?$s([n]):pa.push(n)),!i.is_fork&&Be.size>0&&!Jt&&Ns()}return a}function Ns(){Jt=!1;for(const n of Be){(n.f&$)!==0&&H(n,ha);let a;try{a=ye(n)}catch{a=!0}a&&Bn(n)}Be.clear()}function te(n){Ja(n,n.v+1)}function qt(n,a,e){var i=n.reactions;if(i!==null){var t=i.length;if(fi+=t,fi>1e5&&mn===null&&(mn=new Set),mn!==null){if(mn.has(n))return;mn.add(n)}for(var r=0;r<t;r++){var l=i[r],s=l.f,o=(s&L)===0;if(o&&H(l,a),(s&De)!==0)Be.add(l);else if((s&Y)!==0){var u=l;q==null||q.delete(u),qt(u,ha,e)}else if(o){var d=l;(s&Sa)!==0&&wa!==null&&wa.add(d),e!==null?e.push(d):Di(d)}}}}function An(n){if(typeof n!="object"||n===null||ai in n||It in n)return n;const a=jt(n);if(a!==Or&&a!==Wr)return n;var e=new Map,i=wt(n),t=Ma(0),r=yn,l=s=>{if(yn===r)return s();var o=S,u=yn;ba(null),st(r);var d=s();return ba(o),st(u),d};return i&&e.set("length",Ma(n.length)),new Proxy(n,{defineProperty(s,o,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ks();var d=e.get(o);return d===void 0?l(()=>{var h=Ma(u.value);return e.set(o,h),h}):Ja(d,u.value,!0),!0},deleteProperty(s,o){var u=e.get(o);if(u===void 0){if(o in s){const d=l(()=>Ma(F));e.set(o,d),te(t)}}else Ja(u,F),te(t);return!0},get(s,o,u){var p;if(o===ai)return n;var d=e.get(o),h=o in s;if(d===void 0&&(!h||(p=ne(s,o))!=null&&p.writable)&&(d=l(()=>{var g=An(h?s[o]:F),b=Ma(g);return b}),e.set(o,d)),d!==void 0){var k=f(d);return k===F?void 0:k}return Reflect.get(s,o,u)},getOwnPropertyDescriptor(s,o){var k;(k=this.has)==null||k.call(this,s,o);var u=Reflect.getOwnPropertyDescriptor(s,o),d=e.get(o);if(d!==void 0){var h=f(d);if(h===F)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(s,o){var k;if(o===ai)return!0;var u=e.get(o),d=u!==void 0&&u.v!==F||Reflect.has(s,o);if(u!==void 0||(P!==null||S!==null)&&(!d||(k=ne(s,o))!=null&&k.writable)){u===void 0&&(u=l(()=>{var p=d?An(s[o]):F,g=Ma(p);return g}),e.set(o,u));var h=f(u);if(h===F)return!1}return d},set(s,o,u,d){var C;var h=e.get(o),k=o in s;if(i&&o==="length")for(var p=u;p<h.v;p+=1){var g=e.get(p+"");g!==void 0?Ja(g,F):p in s&&(g=l(()=>Ma(F)),e.set(p+"",g))}if(h===void 0)(!k||(C=ne(s,o))!=null&&C.writable)&&(h=l(()=>Ma(void 0)),Ja(h,An(u)),e.set(o,h));else{k=h.v!==F;var b=l(()=>An(u));Ja(h,b)}var c=Reflect.getOwnPropertyDescriptor(s,o);if(c!=null&&c.set&&c.set.call(d,u),!k){if(i&&typeof o=="string"){var y=e.get("length"),N=Number(o);Number.isInteger(N)&&N>=y.v&&Ja(y,N+1)}te(t)}return!0},ownKeys(s){f(t);var o=Reflect.ownKeys(s).filter(h=>{var k=e.get(h);return k===void 0||k.v!==F});for(var[u,d]of e)d.v!==F&&!(u in s)&&o.push(u);return o},setPrototypeOf(){hs()}})}var it,Ut,Zt,Vt;function Cs(){if(it===void 0){it=window,Ut=/Firefox/.test(navigator.userAgent);var n=Element.prototype,a=Node.prototype,e=Text.prototype;Zt=ne(a,"firstChild").get,Vt=ne(a,"nextSibling").get,Qi(n)&&(n[mi]=void 0,n[Pe]=null,n[ki]=void 0,n.__e=void 0),Qi(e)&&(e[Un]=void 0)}}function ln(n=""){return document.createTextNode(n)}function Va(n){return Zt.call(n)}function be(n){return Vt.call(n)}function na(n,a){return Va(n)}function re(n,a=!1){{var e=Va(n);return e instanceof Comment&&e.data===""?be(e):e}}function G(n,a=!1){return Va(n)}function M(n,a=1,e=!1){let i=n;for(;a--;)i=be(i);return i}function Ms(n){n.textContent=""}function Yt(){return!1}function Xt(n,a,e){return a==null||a===Pt?e?document.createElement(n,{is:e}):document.createElement(n):e?document.createElementNS(a,n,{is:e}):document.createElementNS(a,n)}function Ds(n){var a=P;if(a===null)return S.f|=rn,n;if((a.f&zn)===0&&(a.f&oe)===0)throw n;Ha(n,a)}function Ha(n,a){if(n===Tt)throw n;if(!(a!==null&&(a.f&V)!==0)){for(;a!==null;){if((a.f&di)!==0&&(a.f&(V|Me))===0){if((a.f&zn)===0)throw n;try{a.b.error(n);return}catch(e){n=e}}a=a.parent}throw n}}function Ls(n){P===null&&(S===null&&ds(),os()),on&&us()}function Ks(n,a){var e=a.last;e===null?a.last=a.first=n:(e.next=n,n.prev=e,a.last=n)}function dn(n,a){var e=P;e!==null&&(e.f&ta)!==0&&(n|=ta);var i={ctx:la,deps:null,nodes:null,f:n|L|Ia,first:null,fn:a,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};v==null||v.register_created_effect(i);var t=i;if((n&oe)!==0)ie!==null?ie.push(i):vn.ensure().schedule(i);else if(a!==null){try{Bn(i)}catch(l){throw ua(i),l}t.deps===null&&t.teardown===null&&t.nodes===null&&t.first===t.last&&(t.f&Hn)===0&&(t=t.first,(n&Sa)!==0&&(n&Dn)!==0&&t!==null&&(t.f|=Dn))}if(t!==null&&(t.parent=e,e!==null&&Ks(t,e),S!==null&&(S.f&Y)!==0&&(n&un)===0)){var r=S;(r.effects??(r.effects=[])).push(t)}return i}function Li(){return S!==null&&!xa}function Bs(n){const a=dn(Ue,null);return H(a,$),a.teardown=n,a}function tt(n){Ls();var a=P.f,e=!S&&(a&Aa)!==0&&la!==null&&!la.i;if(e){var i=la;(i.e??(i.e=[])).push(n)}else return Qt(n)}function Qt(n){return dn(oe|Ur,n)}function zs(n){vn.ensure();const a=dn(un|Hn,n);return(e={})=>new Promise(i=>{e.outro?bn(a,()=>{ua(a),i(void 0)}):(ua(a),i(void 0))})}function Hs(n){return dn(Tn|Hn,n)}function ar(n,a=0){return dn(Ue|a,n)}function ja(n,a=[],e=[],i=[]){ws(i,a,e,t=>{dn(Ue,()=>{n(...t.map(f))})})}function Ki(n,a=0){var e=dn(Sa|a,n);return e}function fa(n){return dn(Aa|Hn,n)}function nr(n){var a=n.teardown;if(a!==null){const e=on,i=S;rt(!0),ba(null);try{a.call(null)}catch(t){Ha(t,n.parent)}finally{rt(e),ba(i)}}}function Bi(n,a=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const t=e.ac;t!==null&&fe(()=>{t.abort(ce)});var i=e.next;(e.f&un)!==0?e.parent=null:ua(e,a),e=i}}function Fs(n){for(var a=n.first;a!==null;){var e=a.next;(a.f&Aa)===0&&ua(a),a=e}}function ua(n,a=!0){var e=!1;(a||(n.f&qr)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(er(n.nodes.start,n.nodes.end),e=!0),n.f|=Me,Bi(n,a&&!e),de(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const r of i)r.stop();nr(n),n.f^=Me,n.f|=V;var t=n.parent;t!==null&&t.first!==null&&ir(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function er(n,a){for(;n!==null;){var e=n===a?null:be(n);n.remove(),n=e}}function ir(n){var a=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),a!==null&&(a.first===n&&(a.first=i),a.last===n&&(a.last=e))}function bn(n,a,e=!0){var i=[];n.f|=Ti,tr(n,i,!0);var t=()=>{e&&ua(n),a&&a()},r=i.length;if(r>0){var l=()=>--r||t();for(var s of i)s.out(l)}else t()}function tr(n,a,e){if((n.f&ta)===0){n.f^=ta;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||e)&&a.push(s);for(var t=n.first;t!==null;){var r=t.next;if((t.f&un)===0){var l=(t.f&Dn)!==0||(t.f&Aa)!==0&&(n.f&Sa)!==0;tr(t,a,l?e:!1)}t=r}}}function ze(n){n.f&=~Ti,rr(n,!0)}function rr(n,a){if((n.f&Ti)===0&&(n.f&ta)!==0){n.f^=ta,(n.f&$)===0&&(H(n,L),vn.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,t=(e.f&Dn)!==0||(e.f&Aa)!==0;rr(e,t?a:!1),e=i}var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||a)&&l.in()}}function zi(n,a){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var t=e===i?null:be(e);a.append(e),e=t}}let on=!1;function rt(n){on=n}let S=null,xa=!1;function ba(n){S=n}let P=null;function Wa(n){P=n}let Oa=null;function sr(n){S!==null&&((S.f&Le)!==0||(S.f&Y)!==0)&&(Oa??(Oa=new Set)).add(n)}let sa=null,ka=0,pa=null;function $s(n){pa=n}let lr=1,hn=0,yn=hn;function st(n){yn=n}function ur(){return++lr}function ye(n){var a=n.f;if((a&L)!==0)return!0;if((a&ha)!==0){for(var e=n.deps,i=e.length,t=0;t<i;t++){var r=e[t];if(ye(r)&&Kt(r),r.wv>n.wv)return!0}(a&Ia)!==0&&q===null&&H(n,$)}return!1}function or(n,a,e=!0){var i=n.reactions;if(i!==null&&!(Oa!==null&&Oa.has(n)))for(var t=0;t<i.length;t++){var r=i[t];(r.f&Y)!==0?or(r,a,!1):a===r&&(e?H(r,L):(r.f&$)!==0&&H(r,ha),Di(r))}}function dr(n){var a=sa,e=ka,i=pa,t=S,r=Oa,l=la,s=xa,o=yn,u=n.f;sa=null,ka=0,pa=null,S=(u&(Aa|un))===0?n:null,Oa=null,Ln(n.ctx),xa=!1,yn=++hn,n.ac!==null&&(fe(()=>{n.ac.abort(ce)}),n.ac=null);try{n.f|=Le;var d=n.fn,h=d();n.f|=zn;var k=lt(n);if(Ct()&&pa!==null&&!xa&&k!==null&&(n.f&(Y|ha|L))===0)for(var p=0;p<pa.length;p++)or(pa[p],n);if(t!==null&&t!==n){if(hn++,t.deps!==null)for(let g=0;g<e;g+=1)t.deps[g].rv=hn;if(a!==null)for(const g of a)g.rv=hn;pa!==null&&(i===null?i=pa:i.push(...pa))}return(n.f&rn)!==0&&(n.f^=rn),h}catch(g){return lt(n),Ds(g)}finally{n.f^=Le,sa=a,ka=e,pa=i,S=t,Oa=r,Ln(l),xa=s,yn=o}}function lt(n){var t;var a=n.deps,e=v==null?void 0:v.is_fork;if(sa!==null){var i;if(e||de(n,ka),a!==null&&ka>0)for(a.length=ka+sa.length,i=0;i<sa.length;i++)a[ka+i]=sa[i];else n.deps=a=sa;if(Li()&&(n.f&Ia)!==0)for(i=ka;i<a.length;i++)((t=a[i]).reactions??(t.reactions=[])).push(n)}else!e&&a!==null&&ka<a.length&&(de(n,ka),a.length=ka);return a}function Os(n,a){let e=a.reactions;if(e!==null){var i=Fr.call(e,n);if(i!==-1){var t=e.length-1;t===0?e=a.reactions=null:(e[i]=e[t],e.pop())}}if(e===null&&(a.f&Y)!==0&&(sa===null||!ue.call(sa,a))){var r=a;(r.f&Ia)!==0&&(r.f^=Ia),r.v!==F&&Ri(r),r.ac!==null&&fe(()=>{r.ac.abort(ce),r.ac=null,H(r,L)}),Is(r),de(r,0)}}function de(n,a){var e=n.deps;if(e!==null)for(var i=a;i<e.length;i++)Os(n,e[i])}function Bn(n){var a=n.f;if((a&V)===0){H(n,$);var e=P;P=n;try{(a&(Sa|xt))!==0?Fs(n):Bi(n),nr(n);var i=dr(n);n.teardown=typeof i=="function"?i:null,n.wv=lr;var t;vt&&cs&&(n.f&L)!==0&&n.deps}finally{P=e}}}async function Ws(){await Promise.resolve(),Ps()}function f(n){var a=n.f,e=(a&Y)!==0;if(S!==null&&!xa){var i=P!==null&&(P.f&V)!==0;if(!i&&(Oa===null||!Oa.has(n))){var t=S.deps;if((S.f&Le)!==0)n.rv<hn&&(n.rv=hn,sa===null&&t!==null&&t[ka]===n?ka++:sa===null?sa=[n]:sa.push(n));else{S.deps??(S.deps=[]),ue.call(S.deps,n)||S.deps.push(n);var r=n.reactions;r===null?n.reactions=[S]:ue.call(r,S)||r.push(S)}}}if(on&&$a.has(n))return $a.get(n);if(e){var l=n;if(on){var s=l.v;return((l.f&$)===0&&l.reactions!==null||kr(l))&&(s=Ci(l)),$a.set(l,s),s}var o=(l.f&Ia)===0&&!xa&&S!==null&&(S.f&Ia)!==0,u=(l.f&zn)===0;ye(l)&&(o&&(l.f|=Ia),Kt(l)),o&&!u&&(Bt(l),mr(l))}if(q!=null&&q.has(n))return q.get(n);if((n.f&rn)!==0)throw n.v;return n.v}function mr(n){if(n.f|=Ia,n.deps!==null)for(const e of n.deps){var a=e.reactions;a===null?e.reactions=[n]:ue.call(a,n)||a.push(n),(e.f&Y)!==0&&(e.f&Ia)===0&&(Bt(e),mr(e))}}function kr(n){if(n.v===F)return!0;if(n.deps===null)return!1;for(const a of n.deps)if($a.has(a)||(a.f&Y)!==0&&kr(a))return!0;return!1}function hr(n){var a=xa;try{return xa=!0,n()}finally{xa=a}}const Gs=["touchstart","touchmove"];function Js(n){return Gs.includes(n)}const Se=Symbol("events"),qs=new Set,ut=new Set;let ii=null,ti=!1;function ot(n){var b,c;var a=this,e=a.ownerDocument,i=n.type,t=((b=n.composedPath)==null?void 0:b.call(n))||[],r=t[0]||n.target;ii=n,ti||(ti=!0,setTimeout(()=>{ti=!1,ii=null}));var l=0,s=ii===n&&n[Se];if(s){var o=t.indexOf(s);if(o!==-1&&(a===document||a===window)){n[Se]=a;return}var u=t.indexOf(a);if(u===-1)return;o<=u&&(l=o)}if(r=t[l]||n.target,r!==a){_t(n,"currentTarget",{configurable:!0,get(){return r||e}});var d=S,h=P;ba(null),Wa(null);try{for(var k,p=[];r!==null&&r!==a;){try{var g=(c=r[Se])==null?void 0:c[i];g!=null&&(!r.disabled||n.target===r)&&g.call(r,n)}catch(y){k?p.push(y):k=y}if(n.cancelBubble)break;l++,r=l<t.length?t[l]:null}if(k){for(let y of p)queueMicrotask(()=>{throw y});throw k}}finally{n[Se]=a,delete n.currentTarget,ba(d),Wa(h)}}}var bt;const ri=((bt=globalThis==null?void 0:globalThis.window)==null?void 0:bt.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Us(n){return(ri==null?void 0:ri.createHTML(n))??n}function Zs(n){var a=Xt("template");return a.innerHTML=Us(n.replaceAll("<!>","<!---->")),a.content}function me(n,a){var e=P;e.nodes===null&&(e.nodes={start:n,end:a,a:null,t:null})}function ra(n,a){var e=(a&Qr)!==0,i=(a&as)!==0,t,r=!n.startsWith("<!>");return()=>{t===void 0&&(t=Zs(r?n:"<!>"+n),e||(t=Va(t)));var l=i||Ut?document.importNode(t,!0):t.cloneNode(!0);if(e){var s=Va(l),o=l.lastChild;me(s,o)}else me(l,l);return l}}function pr(){var n=document.createDocumentFragment(),a=document.createComment(""),e=ln();return n.append(a,e),me(a,e),n}function J(n,a){n!==null&&n.before(a)}function Vs(n){let a=0,e=wn(0),i;return()=>{Li()&&(f(e),ar(()=>(a===0&&(i=hr(()=>n(()=>te(e)))),a+=1,()=>{en(()=>{a-=1,a===0&&(i==null||i(),i=void 0,te(e))})})))}}var Ys=Dn|Hn;function Xs(n,a,e,i){new Qs(n,a,e,i)}var ga,Ai,ca,gn,Z,oa,ea,da,Ba,cn,nn,Mn,he,Za,Ge,A,al,nl,bi,an,el,yi,Xn,Ne,vi,wi;class Qs{constructor(a,e,i,t){x(this,A);_(this,"parent");_(this,"is_pending",!1);_(this,"transform_error");x(this,ga);x(this,Ai,null);x(this,ca);x(this,gn);x(this,Z);x(this,oa,null);x(this,ea,null);x(this,da,null);x(this,Ba,null);x(this,cn,0);x(this,nn,0);x(this,Mn,!1);x(this,he,new Map);x(this,Za,null);x(this,Ge,Vs(()=>(j(this,Za,wn(m(this,cn))),()=>{j(this,Za,null)})));var r;j(this,ga,a),j(this,ca,e),j(this,gn,l=>{var s=P;s.b=this,s.f|=di,i(l)}),this.parent=P.b,this.transform_error=t??((r=this.parent)==null?void 0:r.transform_error)??(l=>l),j(this,Z,Ki(()=>{w(this,A,yi).call(this)},Ys))}defer_effect(a){Dt(a,m(this,he))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!m(this,ca).pending}update_pending_count(a,e){w(this,A,vi).call(this,a,e),j(this,cn,m(this,cn)+a),!(!m(this,Za)||m(this,Mn))&&(j(this,Mn,!0),en(()=>{j(this,Mn,!1),m(this,Za)&&Kn(m(this,Za),m(this,cn))}))}get_effect_pending(){return m(this,Ge).call(this),f(m(this,Za))}error(a){if(a===Tt||!m(this,ca).onerror&&!m(this,ca).failed)throw a;v!=null&&v.is_fork?(m(this,oa)&&v.skip_effect(m(this,oa)),m(this,ea)&&v.skip_effect(m(this,ea)),m(this,da)&&v.skip_effect(m(this,da)),v.oncommit(()=>{w(this,A,an).call(this)||w(this,A,wi).call(this,a)})):w(this,A,wi).call(this,a)}}ga=new WeakMap,Ai=new WeakMap,ca=new WeakMap,gn=new WeakMap,Z=new WeakMap,oa=new WeakMap,ea=new WeakMap,da=new WeakMap,Ba=new WeakMap,cn=new WeakMap,nn=new WeakMap,Mn=new WeakMap,he=new WeakMap,Za=new WeakMap,Ge=new WeakMap,A=new WeakSet,al=function(){try{j(this,oa,fa(()=>m(this,gn).call(this,m(this,ga))))}catch(a){this.error(a)}},nl=function(a){const e=m(this,ca).failed,{reset:i,invoke_onerror:t}=w(this,A,bi).call(this,a);en(t),e&&j(this,da,fa(()=>{e(m(this,ga),()=>a,()=>i)}))},bi=function(a){var e=!1,i=!1;const t=()=>{if(!w(this,A,an).call(this)){if(e){ts();return}e=!0,i&&gs(),m(this,da)!==null&&bn(m(this,da),()=>{j(this,da,null)}),w(this,A,Ne).call(this,()=>{w(this,A,yi).call(this)})}};return{reset:t,invoke_onerror:()=>{var l,s;if(!w(this,A,an).call(this))try{i=!0,(s=(l=m(this,ca)).onerror)==null||s.call(l,a,t),i=!1}catch(o){Ha(o,m(this,Z)&&m(this,Z).parent)}}}},an=function(){return(m(this,Z).f&(V|Me))!==0},el=function(){const a=m(this,ca).pending;a&&(this.is_pending=!0,j(this,ea,fa(()=>a(m(this,ga)))),en(()=>{if(!w(this,A,an).call(this)){var e=j(this,Ba,document.createDocumentFragment()),i=ln(),t=!1;if(e.append(i),j(this,oa,w(this,A,Ne).call(this,()=>{try{return fa(()=>m(this,gn).call(this,i))}catch(r){try{this.error(r),t=!0}catch(l){Ha(l,m(this,Z).parent)}return null}})),m(this,oa)===null){j(this,Ba,null),t&&w(this,A,Xn).call(this,v);return}m(this,nn)===0&&(m(this,ga).before(e),j(this,Ba,null),bn(m(this,ea),()=>{j(this,ea,null)}),w(this,A,Xn).call(this,v))}}))},yi=function(){try{if(this.is_pending=this.has_pending_snippet(),j(this,nn,0),j(this,cn,0),j(this,oa,fa(()=>{m(this,gn).call(this,m(this,ga))})),m(this,nn)>0){var a=j(this,Ba,document.createDocumentFragment());zi(m(this,oa),a);const e=m(this,ca).pending;j(this,ea,fa(()=>e(m(this,ga))))}else w(this,A,Xn).call(this,v)}catch(e){this.error(e)}},Xn=function(a){this.is_pending=!1,a.transfer_reactions(m(this,he))},Ne=function(a){var e=P,i=S,t=la;Wa(m(this,Z)),ba(m(this,Z)),Ln(m(this,Z).ctx);try{return vn.ensure(),a()}finally{Wa(e),ba(i),Ln(t)}},vi=function(a,e){var i;if(!this.has_pending_snippet()){this.parent&&w(i=this.parent,A,vi).call(i,a,e);return}j(this,nn,m(this,nn)+a),m(this,nn)===0&&(w(this,A,Xn).call(this,e),m(this,ea)&&bn(m(this,ea),()=>{j(this,ea,null)}),m(this,Ba)&&(m(this,ga).before(m(this,Ba)),j(this,Ba,null)))},wi=function(a){m(this,oa)&&(ua(m(this,oa)),j(this,oa,null)),m(this,ea)&&(ua(m(this,ea)),j(this,ea,null)),m(this,da)&&(ua(m(this,da)),j(this,da,null));let e=m(this,ca).failed;const i=t=>{if(w(this,A,an).call(this))return;const{reset:r,invoke_onerror:l}=w(this,A,bi).call(this,t);l(),e&&!w(this,A,an).call(this)&&j(this,da,w(this,A,Ne).call(this,()=>{try{return fa(()=>{var s=P;s.b=this,s.f|=di,e(m(this,ga),()=>t,()=>r)})}catch(s){return Ha(s,m(this,Z).parent),null}}))};en(()=>{if(!w(this,A,an).call(this)){var t;try{t=this.transform_error(a)}catch(r){Ha(r,m(this,Z)&&m(this,Z).parent);return}t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(i,r=>Ha(r,m(this,Z)&&m(this,Z).parent)):i(t)}})};function z(n,a){var e=a==null?"":typeof a=="object"?`${a}`:a;e!==(n[Un]??(n[Un]=n.nodeValue))&&(n[Un]=e,n.nodeValue=`${e}`)}function il(n,a){return tl(n,a)}const xe=new Map;function tl(n,{target:a,anchor:e,props:i={},events:t,context:r,intro:l=!0,transformError:s}){Cs();var o=void 0,u=zs(()=>{var d=e??a.appendChild(ln());Xs(d,{pending:()=>{}},p=>{Pi({});var g=la;r&&(g.c=r),t&&(i.$$events=t),o=n(p,i)||Nt(),Ei()},s);var h=new Set,k=p=>{for(var g=0;g<p.length;g++){var b=p[g];if(!h.has(b)){h.add(b);var c=Js(b);for(const C of[a,document]){var y=xe.get(C);y===void 0&&(y=new Map,xe.set(C,y));var N=y.get(b);N===void 0?(C.addEventListener(b,ot,{passive:c}),y.set(b,1)):y.set(b,N+1)}}}};return k(qe(qs)),ut.add(k),()=>{var c;for(var p of h)for(const y of[a,document]){var g=xe.get(y),b=g.get(p);--b==0?(y.removeEventListener(p,ot),g.delete(p),g.size===0&&xe.delete(y)):g.set(p,b)}ut.delete(k),d!==e&&((c=d.parentNode)==null||c.removeChild(d))}});return rl.set(o,u),o}let rl=new WeakMap;var _a,za,ma,fn,pe,ge,Je;class sl{constructor(a,e=!0){_(this,"anchor");x(this,_a,new Map);x(this,za,new Map);x(this,ma,new Map);x(this,fn,new Set);x(this,pe,!0);x(this,ge,a=>{if(m(this,_a).has(a)){var e=m(this,_a).get(a),i=m(this,za).get(e);if(i)ze(i),m(this,fn).delete(e);else{var t=m(this,ma).get(e);t&&(ze(t.effect),m(this,za).set(e,t.effect),m(this,ma).delete(e),t.fragment.lastChild.remove(),this.anchor.before(t.fragment),i=t.effect)}for(const[r,l]of m(this,_a)){if(m(this,_a).delete(r),r===a)break;const s=m(this,ma).get(l);s&&(ua(s.effect),m(this,ma).delete(l))}for(const[r,l]of m(this,za)){if(r===e||m(this,fn).has(r))continue;const s=()=>{if(Array.from(m(this,_a).values()).includes(r)){var u=document.createDocumentFragment();zi(l,u),u.append(ln()),m(this,ma).set(r,{effect:l,fragment:u})}else ua(l);m(this,fn).delete(r),m(this,za).delete(r)};m(this,pe)||!i?(m(this,fn).add(r),bn(l,s,!1)):s()}}});x(this,Je,a=>{m(this,_a).delete(a);const e=Array.from(m(this,_a).values());for(const[i,t]of m(this,ma))e.includes(i)||(ua(t.effect),m(this,ma).delete(i))});this.anchor=a,j(this,pe,e)}ensure(a,e){var i=v,t=Yt();if(e&&!m(this,za).has(a)&&!m(this,ma).has(a))if(t){var r=document.createDocumentFragment(),l=ln();r.append(l),m(this,ma).set(a,{effect:fa(()=>e(l)),fragment:r})}else m(this,za).set(a,fa(()=>e(this.anchor)));if(m(this,_a).set(i,a),t){for(const[s,o]of m(this,za))s===a?i.unskip_effect(o):i.skip_effect(o);for(const[s,o]of m(this,ma))s===a?i.unskip_effect(o.effect):i.skip_effect(o.effect);i.oncommit(m(this,ge)),i.ondiscard(m(this,Je))}else m(this,ge).call(this,i)}}_a=new WeakMap,za=new WeakMap,ma=new WeakMap,fn=new WeakMap,pe=new WeakMap,ge=new WeakMap,Je=new WeakMap;function tn(n,a,e=!1){var i=new sl(n),t=e?Dn:0;function r(l,s){i.ensure(l,s)}Ki(()=>{var l=!1;a((s,o=0)=>{l=!0,r(o,s)}),l||r(-1,null)},t)}function Ie(n,a){return a}function ll(n,a,e){for(var i=[],t=a.length,r,l=a.length,s=0;s<t;s++){let h=a[s];bn(h,()=>{if(r){if(r.pending.delete(h),r.done.add(h),r.pending.size===0){var k=n.outrogroups;_i(n,qe(r.done)),k.delete(r),k.size===0&&(n.outrogroups=null)}}else l-=1},!1)}if(l===0){var o=i.length===0&&e!==null&&n.pending.size===0;if(o){var u=e,d=u.parentNode;Ms(d),d.append(u),n.items.clear()}_i(n,a,!o)}else r={pending:new Set(a),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function _i(n,a,e=!0){var i;if(n.pending.size>0){i=new Set;for(const l of n.pending.values())for(const s of l)i.add(n.items.get(s).e)}for(var t=0;t<a.length;t++){var r=a[t];if(i!=null&&i.has(r)){r.f|=Fa;const l=document.createDocumentFragment();zi(r,l)}else ua(a[t],e)}}var dt;function Ae(n,a,e,i,t,r=null){var l=n,s=new Map,o=(a&At)!==0;if(o){var u=n;l=u.appendChild(ln())}var d=null,h=Ss(()=>{var N=e();return wt(N)?N:N==null?[]:qe(N)}),k=new Map,p=!0;function g(N){if((y.effect.f&V)===0){y.pending.delete(N);var C=f(h);y.fallback=d,ul(y,C,l,a,i),d!==null&&(C.length===0?(d.f&Fa)===0?ze(d):(d.f^=Fa,Qn(d,null,l)):bn(d,()=>{d=null}))}}function b(N){y.pending.delete(N)}var c=Ki(()=>{for(var N=f(h),C=N.length,B=new Set,O=v,X=Yt(),K=0;K<C;K+=1){var ya=N[K],Ta=i(ya,K),U=p?null:s.get(Ta);U?(U.v&&Kn(U.v,ya),U.i&&Kn(U.i,K),X&&O.unskip_effect(U.e)):(U=ol(s,p?l:dt??(dt=ln()),ya,Ta,K,t,a,e),p||(U.e.f|=Fa),s.set(Ta,U)),B.add(Ta)}if(C===0&&r&&!d&&(p?d=fa(()=>r(l)):(d=fa(()=>r(dt??(dt=ln()))),d.f|=Fa)),C>B.size&&ls(),!p)if(k.set(O,B),X){for(const[W,T]of s)B.has(W)||O.skip_effect(T.e);O.oncommit(g),O.ondiscard(b)}else g(O);f(h)}),y={effect:c,items:s,pending:k,outrogroups:null,fallback:d};p=!1}function Gn(n){for(;n!==null&&(n.f&Aa)===0;)n=n.next;return n}function ul(n,a,e,i,t){var U,W,T,D,Q,Pa,Ea,Ra,Na;var r=(i&Yr)!==0,l=a.length,s=n.items,o=Gn(n.effect.first),u,d=null,h,k=[],p=[],g,b,c,y;if(r)for(y=0;y<l;y+=1)g=a[y],b=t(g,y),c=s.get(b).e,(c.f&Fa)===0&&((W=(U=c.nodes)==null?void 0:U.a)==null||W.measure(),(h??(h=new Set)).add(c));for(y=0;y<l;y+=1){if(g=a[y],b=t(g,y),c=s.get(b).e,n.outrogroups!==null)for(const aa of n.outrogroups)aa.pending.delete(c),aa.done.delete(c);if((c.f&ta)!==0&&(ze(c),r&&((D=(T=c.nodes)==null?void 0:T.a)==null||D.unfix(),(h??(h=new Set)).delete(c))),(c.f&Fa)!==0)if(c.f^=Fa,c===o)Qn(c,null,e);else{var N=d?d.next:o;c===n.effect.last&&(n.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),Qa(n,d,c),Qa(n,c,N),Qn(c,N,e),d=c,k=[],p=[],o=Gn(d.next);continue}if(c!==o){if(u!==void 0&&u.has(c)){if(k.length<p.length){var C=p[0],B;d=C.prev;var O=k[0],X=k[k.length-1];for(B=0;B<k.length;B+=1)Qn(k[B],C,e);for(B=0;B<p.length;B+=1)u.delete(p[B]);Qa(n,O.prev,X.next),Qa(n,d,O),Qa(n,X,C),o=C,d=X,y-=1,k=[],p=[]}else u.delete(c),Qn(c,o,e),Qa(n,c.prev,c.next),Qa(n,c,d===null?n.effect.first:d.next),Qa(n,d,c),d=c;continue}for(k=[],p=[];o!==null&&o!==c;)(u??(u=new Set)).add(o),p.push(o),o=Gn(o.next);if(o===null)continue}(c.f&Fa)===0&&k.push(c),d=c,o=Gn(c.next)}if(n.outrogroups!==null){for(const aa of n.outrogroups)aa.pending.size===0&&(_i(n,qe(aa.done)),(Q=n.outrogroups)==null||Q.delete(aa));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||u!==void 0){var K=[];if(u!==void 0)for(c of u)(c.f&ta)===0&&K.push(c);for(;o!==null;)(o.f&ta)===0&&o!==n.fallback&&K.push(o),o=Gn(o.next);var ya=K.length;if(ya>0){var Ta=(i&At)!==0&&l===0?e:null;if(r){for(y=0;y<ya;y+=1)(Ea=(Pa=K[y].nodes)==null?void 0:Pa.a)==null||Ea.measure();for(y=0;y<ya;y+=1)(Na=(Ra=K[y].nodes)==null?void 0:Ra.a)==null||Na.fix()}ll(n,K,Ta)}}r&&en(()=>{var aa,va;if(h!==void 0)for(c of h)(va=(aa=c.nodes)==null?void 0:aa.a)==null||va.apply()})}function ol(n,a,e,i,t,r,l,s){var o=(l&Zr)!==0?(l&Xr)===0?Rs(e,!1,!1):wn(e):null,u=(l&Vr)!==0?wn(t):null;return{v:o,i:u,e:fa(()=>(r(a,o??e,u??t,s),()=>{n.delete(i)}))}}function Qn(n,a,e){if(n.nodes)for(var i=n.nodes.start,t=n.nodes.end,r=a&&(a.f&Fa)===0?a.nodes.start:e;i!==null;){var l=be(i);if(r.before(i),i===t)return;i=l}}function Qa(n,a,e){a===null?n.effect.first=e:a.next=e,e===null?n.effect.last=a:e.prev=a}function dl(n,a,e=!1,i=!1,t=!1,r=!1){var l=n,s="";if(e)var o=n;ja(()=>{var u=P;if(s!==(s=a()??"")){if(e){u.nodes=null,o.innerHTML=s,s!==""&&me(Va(o),o.lastChild);return}if(u.nodes!==null&&(er(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){var d=i?ns:t?es:void 0,h=Xt(i?"svg":t?"math":"template",d);h.innerHTML=s;var k=i||t?h:h.content;if(me(Va(k),k.lastChild),i||t)for(;Va(k);)l.before(Va(k));else l.before(k)}}})}function ml(n,a,e){var i=n==null?"":""+n;return i===""?null:i}function kl(n,a){return n==null?null:String(n)}function mt(n,a,e,i,t,r){var l=n[mi];if(l!==e||l===void 0){var s=ml(e);s==null?n.removeAttribute("class"):n.className=s,n[mi]=e}return r}function ae(n,a,e,i){var t=n[ki];if(t!==a){var r=kl(a);r==null?n.removeAttribute("style"):n.style.cssText=r,n[ki]=a}return i}const hl=Symbol("is custom element"),pl=Symbol("is html");function se(n,a,e,i){var t=gl(n),r=t[a];r!==(t[a]=e)&&(e==null?n.removeAttribute(a):typeof e!="string"&&cl(n).has(a)?n[a]=e:n.setAttribute(a,e))}function gl(n){return n[Pe]??(n[Pe]={[hl]:n.nodeName.includes("-"),[pl]:n.namespaceURI===Pt})}var kt=new Map;function cl(n){var a=n.getAttribute("is")||n.nodeName,e=kt.get(a);if(e)return e;kt.set(a,e=new Set);for(var i,t=n,r=Element.prototype;r!==t;){i=$r(t);for(var l in i)i[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&e.add(l);t=jt(t)}return e}function fl(n,a,e=a){var i=new WeakSet;vs(n,"input",async t=>{var r=t?n.defaultValue:n.value;if(r=si(n)?li(r):r,e(r),v!==null&&i.add(v),await Ws(),r!==(r=a())){var l=n.selectionStart,s=n.selectionEnd,o=n.value.length;if(n.value=r??"",s!==null){var u=n.value.length;l===s&&s===o&&u>o?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=l,n.selectionEnd=Math.min(s,u))}}}),hr(a)==null&&n.value&&(e(si(n)?li(n.value):n.value),v!==null&&i.add(v)),ar(()=>{var t=a();if(n===document.activeElement){var r=v;if(i.has(r))return}si(n)&&t===li(n.value)||n.type==="date"&&!t&&!n.value||t!==n.value&&(n.value=t??"")})}function si(n){var a=n.type;return a==="number"||a==="range"}function li(n){return n===""?null:+n}const bl="5";var yt;typeof window<"u"&&((yt=window.__svelte??(window.__svelte={})).v??(yt.v=new Set)).add(bl);const yl=`---
lang: ai
number: 1
date: 2026-11-05
title: Apa itu AI Engineer?
subtitle: Bedanya dengan Data Scientist / ML Engineer
keywords: AI Engineer Data Scientist ML Engineer RAG prompting deployment
---

Kalau kamu pernah dengar tiga profesi ini, wajar kalau bingung — ketiganya sama-sama berkutat dengan AI, tapi pekerjaannya beda. Analoginya seperti restoran:

- **Data Scientist** itu seperti *food researcher*-nya. Ia mengutak-atik data untuk menjawab pertanyaan: pelanggan suka menu apa? Kapan restoran paling ramai? Senjata utamanya statistik dan analisis data, dan hasil kerjanya biasanya berupa wawasan atau laporan.
- **ML Engineer** itu seperti *insinyur dapur*-nya. Ia membangun dan melatih mesinnya — yaitu model machine learning itu sendiri: memilih algoritma, melatih dengan data, mengukur akurasinya, dan membuatnya makin pintar. Hasil kerjanya adalah model yang sudah terlatih.
- **AI Engineer** itu yang **membangun restorannya sampai bisa melayani pelanggan**. Ia mengambil model yang sudah ada (sering kali model jadi dari OpenAI, Meta, Google, dan lain-lain) lalu merangkainya menjadi produk nyata: chatbot customer service, fitur ringkasan otomatis di aplikasi, asisten yang bisa mencari di dokumen perusahaan, sampai agen AI yang bisa memakai tools. Ia tidak harus melatih model dari nol — keahliannya ada di prompting, RAG (memberi model akses ke data/dokumen), penggunaan API model, dan deployment supaya produknya bisa dipakai banyak orang dengan cepat dan murah.

Contoh nyatanya: sebuah toko online mau punya chatbot yang bisa menjawab pertanyaan soal produk dari katalognya yang berisi ribuan item.

- Data Scientist menganalisis riwayat chat: pertanyaan apa yang paling sering masuk.
- ML Engineer (kalau perlu) melatih model klasifikasi untuk mengenali maksud pertanyaan.
- AI Engineer yang merakit produknya: chatbot itu mengambil jawaban dari katalog lewat RAG, dipandu prompt yang tepat, lalu di-deploy sebagai widget chat di website — lengkap dengan batasan biaya per pertanyaan supaya tidak jebol.

Jadi kalau kamu suka **membuat sesuatu yang langsung bisa dipakai orang**, AI Engineer adalah jalur yang paling dekat ke produk. Kamu tetap perlu paham dasar ML (itu bekal pelajaran-pelajaran berikutnya), tapi fokusmu adalah merakit, bukan meneliti atau melatih dari nol.

## Latihan praktis hari ini (10 menit)

Buka aplikasi AI apa pun yang kamu punya (ChatGPT, Gemini, Claude, atau Meta AI). Coba satu permintaan yang sama dengan dua cara:

1. Tanpa arahan: *"Jelaskan fotosintesis."*
2. Dengan peran + konteks + batasan: *"Kamu adalah guru IPA untuk anak SMP. Jelaskan fotosintesis dalam 3 kalimat sederhana, pakai analogi dapur."*

Bandingkan hasilnya. Selisih kualitas di antara keduanya — itulah inti kerja AI Engineer: mengarahkan model lewat prompt dan konteks supaya keluarannya tepat guna.

## Kamus

| Istilah | Arti |
|---------|------|
| AI Engineer | yang merakit model AI menjadi produk nyata yang bisa dipakai orang |
| Data Scientist | yang menganalisis data untuk menjawab pertanyaan dan menghasilkan wawasan |
| ML Engineer | yang membangun dan melatih model machine learning |
| RAG | memberi model akses ke data/dokumen agar jawabannya berdasar sumber |
| prompting | mengarahkan model lewat instruksi (prompt) yang tepat |
| deployment | memasang produk agar bisa dipakai banyak orang |
| API | antarmuka untuk memakai model atau layanan dari program lain |
`,vl=`---
lang: ai
number: 2
date: 2026-11-06
title: Python untuk AI
subtitle: Variabel, list, dict & fungsi
keywords: Python variabel list dict fungsi NumPy pandas scikit-learn PyTorch Colab
---

Kemarin kita bahas apa itu AI Engineer dan bedanya dengan Data Scientist dan ML Engineer. Hari ini kita kenalan dengan bahasa yang dipakai sehari-hari oleh AI Engineer: **Python**.

## Kenapa harus Python?

Analoginya begini: kalau AI itu masakan, Python itu dapur yang sudah lengkap dengan semua peralatan. Tiga alasannya:

1. **Mudah dibaca** — kodenya mirip bahasa sehari-hari, jadi pemula cepat paham.
2. **Perpustakaannya lengkap** — ada NumPy (olah angka), pandas (olah tabel data), scikit-learn (machine learning klasik), dan PyTorch (neural network). Hampir semua yang dibutuhkan AI Engineer sudah tersedia, tinggal pakai.
3. **Komunitasnya besar** — kalau mentok, jawabannya hampir pasti sudah ada di internet.

## Empat dasar Python yang dipakai di dunia AI

**1. Variabel — kotak berlabel untuk menyimpan data**

\`\`\`python
nama = "Budi"
umur = 42
skor = 0.95
\`\`\`

**2. List — daftar berurutan**

\`\`\`python
harga = [100, 105, 98, 110, 115]
print(harga[0])   # 100, isi pertama
print(len(harga)) # 5, jumlah isi
\`\`\`

**3. Dict — kamus berisi pasangan kunci dan nilai**

\`\`\`python
saham = {"kode": "BBCA", "harga": 9500, "per": 10.6}
print(saham["harga"])  # 9500
\`\`\`

**4. Fungsi — resep yang bisa dipakai ulang**

\`\`\`python
def rata_rata(data):
    return sum(data) / len(data)

print(rata_rata(harga))  # 105.6
\`\`\`

## Kenapa ini penting untuk AI?

Model AI pada dasarnya mengolah kumpulan angka (list) dengan fungsi (model). Data training itu bentuknya sering list berisi dict — misal satu baris data satu saham. Jadi memahami empat dasar ini artinya memahami bahan mentah yang diolah AI setiap hari.

## Latihan hari ini (10 menit)

Buka [Google Colab](https://colab.research.google.com) (gratis, tanpa install apa pun), lalu coba ini:

1. Buat list berisi harga saham selama 5 hari, misal \`[9500, 9600, 9400, 9700, 9650]\`.
2. Hitung rata-ratanya dan harga tertingginya (pakai \`max()\`).
3. Bungkus perhitungan itu jadi sebuah fungsi bernama \`ringkasan_harga\`.

Kalau berhasil, kamu baru saja menulis program pertamamu yang mengolah data seperti yang dilakukan AI Engineer.

## Kamus

| Istilah | Arti |
|---------|------|
| Python | bahasa pemrograman utama di dunia AI |
| NumPy | pustaka Python untuk mengolah angka |
| pandas | pustaka Python untuk mengolah tabel data |
| scikit-learn | pustaka Python untuk machine learning klasik |
| PyTorch | pustaka Python untuk neural network |
| variabel | kotak berlabel untuk menyimpan data |
| list | daftar berurutan |
| dict | kamus berisi pasangan kunci dan nilai |
| fungsi | resep kode yang bisa dipakai ulang |
| Google Colab | layanan gratis untuk menulis dan menjalankan Python di browser |
`,wl=`---
lang: ai
number: 3
date: 2026-11-09
title: Matematika Seperlunya untuk AI
subtitle: Aljabar linear, statistik & probabilitas
keywords: matematika aljabar linear vektor matriks statistik mean variansi probabilitas NumPy
---

**Intinya singkat:** AI itu banyak ngobrol sama angka. Kamu nggak perlu jadi ahli matematika, tapi 3 ide ini wajib kenal: vektor/matriks (aljabar linear), mean & distribusi (statistik), probabilitas.

## 1. Aljabar Linear — Bahasa Data

Bayangkan data itu kotak. Foto 28x28 pixel = matriks 28x28 angka. List angka [3, 5, 2] = vektor. Model AI "mengalikan" data ini buat nemu pola. Analoginya kayak resep masakan: vektor = takaran bahan, matriks = semua resep sekaligus.

Kode singkat Python:

\`\`\`python
import numpy as np

v = np.array([1, 2, 3])          # vektor
M = np.array([[1, 0], [0, 1]])   # matriks identitas
hasil = M @ v[:2]                # perkalian matriks x vektor
print(hasil)  # [1 2]
\`\`\`

Itu aja. Di PyTorch/NumPy kamu bakal sering pakai \`@\` untuk dot product.

## 2. Statistik — Baca Ciri Data

Mean = rata-rata. Variansi = seberapa nyebar angkanya. Distribusi = bentuk sebarannya. Model belajar dari statistik ini. Kalau data training mean-nya 170 cm, model nggak akan kaget lihat orang 165–175 cm.

## 3. Probabilitas — Model "Menebak"

AI jarang bilang "pasti". Dia bilang: "80% ini gambar kucing". Itu probabilitas. Semakin tinggi probabilitas yang benar, semakin bagus modelnya.

## Latihan praktis (5 menit)

1. Buka Python/Colab, buat \`data = [4, 8, 6, 2, 10]\`.
2. Hitung mean: \`sum(data)/len(data)\` → 6.
3. Hitung variansi manual: rata-rata dari kuadrat selisih ke mean.
4. Coba: kalau data diubah jadi \`[4, 8, 6, 2, 100]\`, kenapa mean naik jauh tapi variansi naik jauh banget? Itu kenapa AI Engineer peduli sama "outlier".

## Kamus

| Istilah | Arti |
|---------|------|
| vektor | list angka, mis. [3, 5, 2] |
| matriks | kumpulan angka berbentuk tabel, mis. foto 28x28 pixel |
| dot product | perkalian titik dua vektor (ditulis \`@\` di Python) |
| mean | rata-rata |
| variansi | ukuran seberapa menyebar angka-angka data |
| distribusi | bentuk sebaran data |
| probabilitas | ukuran kemungkinan, mis. "80% ini gambar kucing" |
| outlier | data pencilan yang jauh dari kebanyakan data |
| NumPy | pustaka Python untuk aljabar linear dan angka |
`,_l=`---
lang: ai
number: 4
date: 2026-11-10
title: Cara Kerja Machine Learning
subtitle: Supervised vs unsupervised, train/test & overfitting
keywords: machine learning supervised unsupervised train test overfitting scikit-learn
---

Di pelajaran #1 kita sudah tahu apa itu AI Engineer, di #2 belajar Python, di #3 belajar matematika seperlunya. Hari ini kita masuk ke inti dari semuanya: **bagaimana sebenarnya machine learning (ML) bekerja?**

## Analogi: Belajar dari Contoh Soal

Bayangkan kamu belajar mengenali buah. Seseorang menunjukkan 100 foto dan berkata: "ini apel, ini jeruk, ini mangga." Setelah melihat cukup banyak contoh, kamu bisa menebak foto buah baru yang belum pernah kamu lihat. Itulah machine learning: **komputer belajar dari contoh, bukan dari aturan yang ditulis manusia.**

Bedanya dengan program biasa: program biasa mengikuti perintah "jika X maka Y" yang ditulis programmer. ML justru *menemukan sendiri* polanya dari data.

## Dua cara belajar utama

**Supervised Learning — belajar dengan "kunci jawaban"**

Setiap contoh data sudah diberi label (jawaban benar). Contohnya:

- Foto kucing/anjing → model belajar membedakan keduanya
- Email lama yang ditandai spam/bukan spam → model belajar menyaring spam
- Harga rumah + luas tanah + lokasi → model memprediksi harga rumah baru

**Unsupervised Learning — belajar tanpa kunci jawaban**

Data tidak punya label; model mencari pola sendiri. Contohnya:

- Mengelompokkan pelanggan toko online berdasarkan kebiasaan belanja (siapa yang suka diskon, siapa yang belanja tengah malam)
- Mendeteksi transaksi kartu kredit yang "aneh" dibanding pola biasanya

Sederhananya: supervised = belajar dengan guru yang memberi jawaban; unsupervised = menemukan kelompok sendiri dari data.

## Train / Test: jangan menghafal, tapi memahami

Data dibagi dua:

- **Data latih (train)** — contoh soal untuk belajar, biasanya 80%
- **Data uji (test)** — soal ujian yang *belum pernah dilihat* model, biasanya 20%

Kenapa harus dipisah? Karena kita ingin tahu apakah model benar-benar paham polanya, atau cuma menghafal jawaban soal latihan.

## Overfitting: murid yang terlalu hafal

**Overfitting** adalah saat model terlalu "menempel" pada data latih. Ciri-cirinya: akurasi di data latih sangat tinggi, tapi di data uji jeblok. Lawannya, **underfitting**, adalah model yang terlalu sederhana sampai tidak menangkap pola sama sekali.

Tugas AI Engineer adalah mencari titik tengah: model yang cukup pintar menangkap pola, tapi tidak menghafal.

## Contoh kode singkat (scikit-learn)

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

# 1. Ambil data: 150 bunga iris, 3 jenis
X, y = load_iris(return_X_y=True)

# 2. Bagi data: 80% latih, 20% uji
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Latih model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

# 4. Uji
print("Akurasi:", model.score(X_test, y_test))
\`\`\`

## Latihan hari ini

Jalankan kode di atas (install dulu dengan \`pip install scikit-learn\`). Coba:

1. Ubah \`test_size\` jadi \`0.5\` — apa yang terjadi pada akurasi?
2. Ganti dengan \`DecisionTreeClassifier(max_depth=1)\` — apakah ini underfitting?

## Kamus

| Istilah | Arti |
|---------|------|
| machine learning (ML) | komputer belajar dari contoh data, bukan dari aturan yang ditulis |
| supervised learning | belajar dengan "kunci jawaban" (data berlabel) |
| unsupervised learning | belajar tanpa kunci jawaban; model mencari pola sendiri |
| data latih (train) | contoh soal untuk belajar, biasanya 80% data |
| data uji (test) | soal ujian yang belum pernah dilihat model, biasanya 20% |
| overfitting | model terlalu menghafal data latih; akurasi latih tinggi, akurasi uji jeblok |
| underfitting | model terlalu sederhana sampai tidak menangkap pola |
| scikit-learn | pustaka Python untuk machine learning klasik |
| DecisionTreeClassifier | model pohon keputusan dari scikit-learn |
| random_state | angka acak agar pembagian data bisa diulang dengan hasil sama |
`,jl=`---
lang: ai
number: 5
date: 2026-11-11
title: ML Klasik dengan scikit-learn
subtitle: Algoritma pertama yang dipakai AI Engineer — regresi, klasifikasi & cara melatih model
keywords: scikit-learn machine learning klasik regresi klasifikasi decision tree k-nearest neighbors random forest pipeline
---

Di pelajaran #4 kita sudah paham cara kerja machine learning (ML): belajar dari contoh, dibagi data latih dan data uji, dan hati-hati dengan overfitting (model terlalu menghafal data latih). Hari ini kita mulai **benar-benar melatih model** — dengan alat utama para AI Engineer pemula: **scikit-learn**.

## Apa itu scikit-learn?

**scikit-learn** (sering disingkat **sklearn**) adalah pustaka Python yang berisi puluhan algoritma machine learning klasik, siap pakai. Ibarat kotak perkakas: di dalamnya ada obeng, palu, dan gergaji — kita tinggal pilih alat yang cocok untuk masalahnya.

Kenapa disebut "klasik"? Karena algoritma-algoritmanya sudah lama ada dan bekerja baik untuk data berbentuk **tabel** (baris = contoh, kolom = ciri-ciri). Untuk gambar dan teks yang rumit, nanti kita pakai deep learning — tapi untuk sebagian besar pekerjaan nyata, ML klasik sudah cukup.

## Dua jenis tugas utama

Semua masalah ML klasik jatuh ke salah satu dari dua kelompok ini:

**Klasifikasi (classification) — menebak kategori**

Jawabannya berupa pilihan: ya/tidak, spam/bukan spam, kucing/anjing/mangga. Contoh: "foto ini kucing atau anjing?"

**Regresi (regression) — menebak angka**

Jawabannya berupa angka: harga rumah, suhu besok, jumlah penjualan. Contoh: "rumah seluas 120 m² ini harganya berapa?"

Cara membedakannya gampang: kalau jawabannya bisa dihitung jumlahnya (angka), itu regresi; kalau jawabannya memilih dari beberapa label, itu klasifikasi.

## Tiga algoritma pertama yang wajib kenal

**1. Decision Tree (pohon keputusan) — model "tanya jawab"**

Model ini bekerja seperti permainan 20 pertanyaan: "apakah panjang kelopaknya lebih dari 5 cm? Kalau ya, ke kiri; kalau tidak, ke kanan." Sampai akhirnya sampai di daun yang berisi jawaban. Mudah dibaca manusia, cocok untuk belajar pertama kali — sudah kita coba di pelajaran #4.

**2. K-Nearest Neighbors (KNN) — "tetangga terdekat"**

Analogi: kamu pindah ke lingkungan baru dan ingin tahu apakah tetangga barumu suka kopi. Caranya: lihat 5 tetangga terdekat, kalau 4 dari 5 suka kopi, tebakannya "suka kopi". KNN bekerja persis begitu — sebuah data baru diklasifikasikan berdasarkan K tetangga terdekatnya di data latih.

**3. Random Forest — "musyawarah banyak pohon"**

Satu pohon keputusan bisa salah karena terlalu hafal. Random Forest melatih ratusan pohon dengan data yang sedikit berbeda-beda, lalu mengambil suara terbanyak. Seperti musyawarah: keputusan bersama biasanya lebih bijak daripada satu orang. Inilah algoritma "aman" pertama yang sering dipakai di dunia nyata.

## Pola kerja scikit-learn: selalu fit → predict

Semua model di scikit-learn mengikuti pola yang sama, hanya 3 langkah:

1. **Buat model**: \`model = KNeighborsClassifier(n_neighbors=5)\`
2. **Latih (fit)**: \`model.fit(X_train, y_train)\` — model belajar dari data latih
3. **Prediksi (predict)**: \`model.predict(X_test)\` — model menebak data baru

\`X\` adalah ciri-ciri (features — sifat-sifat yang diamati, misalnya panjang kelopak bunga), \`y\` adalah jawabannya (label). Hafalkan pola ini — 90% pekerjaan ML klasik hanya mengulang pola ini dengan model yang berbeda.

## Contoh kode: membandingkan dua model

Kita pakai dataset bunga iris (iris) lagi, tapi kali ini membandingkan KNN dan Random Forest:

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. Ambil data
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 2. Latih dua model sekaligus
models = {
    "KNN": KNeighborsClassifier(n_neighbors=5),
    "Random Forest": RandomForestClassifier(random_state=42),
}

for nama, model in models.items():
    model.fit(X_train, y_train)              # latih
    prediksi = model.predict(X_test)         # tebak data uji
    print(nama, "-> akurasi:", accuracy_score(y_test, prediksi))
\`\`\`

Jalankan dan lihat: biasanya kedua model mencapai akurasi sekitar 0,97 (97% benar). Itu cara kerja AI Engineer sehari-hari — melatih beberapa model, membandingkan akurasinya, lalu memilih yang terbaik.

## Satu jebakan penting: skala data

KNN mengukur "jarak" antar data. Bayangkan satu ciri bernilai 0–1 (misalnya rasio) dan ciri lain bernilai 0–1000 (misalnya harga). Ciri yang besar akan mendominasi jarak, padahal belum tentu lebih penting. Solusinya: **scaling** (penyekalaan) — samakan rentang semua ciri sebelum melatih model, misalnya dengan \`StandardScaler\` dari scikit-learn. Decision Tree dan Random Forest tidak butuh scaling, tapi KNN dan regresi linear butuh.

## Latihan hari ini

Jalankan kode di atas (install dulu dengan \`pip install scikit-learn\` kalau belum). Lalu coba:

1. Ubah \`n_neighbors\` dari 5 menjadi 1, lalu 15 — mana yang akurasinya paling stabil? (Petunjuk: 1 terlalu "hafal", 15 terlalu "umum".)
2. Tambahkan satu model ketiga ke kamus \`models\`: \`DecisionTreeClassifier()\` dari pelajaran #4 — siapa juaranya di data iris?

## Kamus

| Istilah | Arti |
|---------|------|
| scikit-learn (sklearn) | pustaka Python berisi algoritma machine learning klasik, siap pakai |
| ML klasik | machine learning untuk data tabel, memakai algoritma yang sudah lama ada (bukan deep learning) |
| klasifikasi (classification) | tugas menebak kategori: ya/tidak, spam/bukan spam |
| regresi (regression) | tugas menebak angka: harga, suhu, jumlah |
| Decision Tree (pohon keputusan) | model yang bertanya berurutan seperti permainan 20 pertanyaan |
| K-Nearest Neighbors (KNN) | model yang menebak dari K tetangga terdekat di data latih |
| Random Forest | gabungan ratusan pohon keputusan yang "bermusyawarah" lewat suara terbanyak |
| fit | tahap melatih model dengan data latih |
| predict | tahap model menebak jawaban untuk data baru |
| features (X) | ciri-ciri yang diamati dari data, misalnya panjang kelopak bunga |
| label (y) | jawaban benar dari data, misalnya jenis bunga |
| accuracy_score | fungsi untuk menghitung seberapa banyak tebakan model yang benar |
| scaling (penyekalaan) | menyamakan rentang nilai semua ciri agar tidak ada yang mendominasi |
| StandardScaler | alat dari scikit-learn untuk scaling data |
`,Sl=`---
lang: ai
number: 6
date: 2026-11-12
title: Evaluasi Model — Mengukur Seberapa Bagus Modelmu
subtitle: Akurasi saja bisa menipu — kenali confusion matrix, precision, recall & cross-validation
keywords: evaluasi model accuracy precision recall f1 confusion matrix cross-validation scikit-learn
---

Di pelajaran #5 kita melatih KNN dan Random Forest, lalu membandingkannya dengan satu angka: **akurasi** 97%. Terdengar hebat. Tapi tunggu — apakah angka 97% itu selalu berarti modelnya bagus? Hari ini kita belajar cara **mengevaluasi model dengan benar**, karena AI Engineer yang baik tidak percaya pada satu angka saja.

## Analogi: nilai ujian yang menipu

Bayangkan sebuah ujian berisi 100 soal, dan 99 soalnya sangat mudah — semua orang bisa menjawabnya. Seorang murid mendapat nilai 99. Hebat? Belum tentu: mungkin ia hanya bisa soal mudah, dan justru gagal di satu-satunya soal sulit yang paling penting.

Model machine learning bisa persis seperti itu. Kalau datanya 99% "normal" dan 1% "penipuan", model yang selalu menebak "normal" akan mendapat akurasi 99% — padahal ia tidak pernah sekalipun menangkap penipuan. Akurasi tinggi, model tidak berguna. Karena itu kita butuh alat ukur yang lebih jujur.

## Confusion Matrix — "matriks kebingungan"

Alat pertama dan terpenting adalah **confusion matrix** (matriks kebingungan): tabel yang membandingkan tebakan model dengan jawaban sebenarnya, untuk tugas klasifikasi dua kelas (misalnya spam / bukan spam).

| | Sebenarnya Spam | Sebenarnya Bukan Spam |
|---|---|---|
| **Model bilang Spam** | TP (benar) | FP (salah — "alarm palsu") |
| **Model bilang Bukan Spam** | FN (salah — "lolos") | TN (benar) |

Empat istilah ini adalah fondasi semua metrik evaluasi:

- **TP (True Positive)** — model bilang spam, memang spam. Benar.
- **TN (True Negative)** — model bilang bukan spam, memang bukan spam. Benar.
- **FP (False Positive)** — model bilang spam, padahal bukan. Alarm palsu: email penting masuk folder spam.
- **FN (False Negative)** — model bilang bukan spam, padahal spam. Yang lolos: spam masuk inbox.

## Precision vs Recall — dua pertanyaan berbeda

Dari empat kotak itu lahir dua metrik yang paling sering dipakai:

**Precision (presisi)** — "Dari semua yang model tuduh spam, berapa persen yang benar-benar spam?"

Rumusnya: TP / (TP + FP). Precision tinggi berarti model jarang salah tuduh. Penting saat **alarm palsu itu mahal** — misalnya filter email: tidak mau email penting dari bos masuk spam.

**Recall** — "Dari semua spam yang sebenarnya ada, berapa persen yang berhasil ditangkap model?"

Rumusnya: TP / (TP + FN). Recall tinggi berarti model jarang kecolongan. Penting saat **yang lolos itu berbahaya** — misalnya deteksi penyakit: lebih baik ada alarm palsu daripada ada pasien sakit yang dibilang sehat.

Analogi sehari-hari: precision itu seperti penembak jitu — setiap tembakan harus kena. Recall itu seperti jaring ikan — sebisa mungkin tidak ada ikan yang lolos, walaupun ikut tertangkap sampah. Keduanya sulit dimaksimalkan bersamaan: jaring yang makin besar menangkap lebih banyak ikan (recall naik) tapi juga lebih banyak sampah (precision turun).

## F1 Score — jalan tengahnya

Kalau harus memilih satu angka, **F1 Score** menggabungkan precision dan recall menjadi satu nilai (rata-rata harmonik — cara menghitung rata-rata yang menghukum nilai yang timpang). F1 tinggi berarti model seimbang: tidak asal tuduh, tidak banyak kecolongan. Di scikit-learn, \`classification_report\` menampilkan ketiganya sekaligus — precision, recall, dan F1 — untuk setiap kelas.

## Akurasi — pakai, tapi dengan sadar

**Accuracy (akurasi)** = semua tebakan benar / semua data = (TP + TN) / total. Akurasi tetap berguna **kalau kelasnya seimbang** (misalnya 50% spam, 50% bukan spam). Tapi kalau kelasnya timpang — 99 banding 1 seperti contoh penipuan tadi — akurasi jadi menyesatkan. Aturan praktis: selalu lihat precision, recall, dan F1 di samping akurasi, terutama kalau satu kelas jauh lebih sedikit dari yang lain.

## Cross-Validation — jangan percaya satu kali ujian

Satu masalah lagi dari pelajaran #4 dan #5: kita hanya membagi data sekali (80% latih, 20% uji). Bagaimana kalau kebetulan 20% data ujinya sedang "mudah"? Hasilnya jadi terlalu optimis.

Solusinya: **cross-validation** (validasi silang). Data dibagi menjadi, misalnya, 5 lipatan (fold) yang sama besar. Model dilatih dan diuji 5 kali, setiap kali dengan lipatan berbeda sebagai data uji. Lalu kelima skornya dirata-rata. Ibarat murid yang diuji 5 kali dengan soal berbeda-beda — nilainya jauh lebih bisa dipercaya daripada sekali ujian. Di scikit-learn, ini semudah \`cross_val_score(model, X, y, cv=5)\`.

## Contoh kode: menilai model dengan lengkap

Lanjutan dari pelajaran #5, kali ini dengan laporan lengkap:

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report

# 1. Ambil data & bagi
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 2. Latih model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# 3. Laporan lengkap: precision, recall, F1 per kelas
prediksi = model.predict(X_test)
print(classification_report(y_test, prediksi))
print("Confusion matrix:")
print(confusion_matrix(y_test, prediksi))

# 4. Cross-validation 5 lipatan — nilai yang lebih jujur
skor = cross_val_score(model, X, y, cv=5)
print("Skor 5 lipatan:", skor)
print("Rata-rata:", skor.mean())
\`\`\`

Perhatikan \`classification_report\`: untuk tiap jenis bunga ia menampilkan precision, recall, dan F1. Dan \`cross_val_score\` memberi 5 skor — kalau kelimanya mirip (misalnya 0,96–0,98), modelmu stabil; kalau berjauhan (0,80 lalu 0,99), modelmu belum bisa dipercaya.

## Latihan hari ini

Jalankan kode di atas, lalu:

1. Bandingkan \`accuracy\` dari laporan dengan rata-rata cross-validation — mana yang lebih rendah, dan menurutmu kenapa?
2. Ganti modelnya dengan \`KNeighborsClassifier(n_neighbors=5)\` dari pelajaran #5, lalu bandingkan laporan lengkap keduanya: siapa yang precision-nya lebih tinggi? Siapa yang recall-nya lebih tinggi? Model mana yang kamu pilih, dan alasannya apa?

## Kamus

| Istilah | Arti |
|---------|------|
| evaluasi model | mengukur seberapa bagus model bekerja pada data yang belum pernah dilihat |
| akurasi (accuracy) | persentase semua tebakan model yang benar |
| confusion matrix (matriks kebingungan) | tabel yang membandingkan tebakan model dengan jawaban sebenarnya |
| TP (True Positive) | model menebak positif dan memang benar positif |
| TN (True Negative) | model menebak negatif dan memang benar negatif |
| FP (False Positive) | model menebak positif padahal sebenarnya negatif — "alarm palsu" |
| FN (False Negative) | model menebak negatif padahal sebenarnya positif — "yang lolos" |
| precision (presisi) | dari semua yang dituduh positif, berapa persen yang benar-benar positif |
| recall | dari semua yang sebenarnya positif, berapa persen yang berhasil ditangkap |
| F1 Score | satu angka gabungan precision dan recall; tinggi berarti model seimbang |
| classification_report | laporan scikit-learn berisi precision, recall, dan F1 untuk setiap kelas |
| cross-validation (validasi silang) | menguji model berkali-kali dengan potongan data yang berbeda, lalu merata-rata skornya |
| fold (lipatan) | satu potongan data dalam cross-validation |
| kelas tidak seimbang (imbalanced) | satu kelas jauh lebih sedikit dari kelas lain, sehingga akurasi bisa menipu |
`,xl=`---
lang: cyber
number: 1
date: 2026-11-02
title: Apa Itu Cybersecurity dan Kenapa Penting?
subtitle: Pengaman rumah untuk kehidupan digital
keywords: cybersecurity keamanan digital hacker password phishing wifi
---

Selamat datang di pelajaran pertama! Seri ini dibuat untuk pemula total, jadi kita mulai dari nol, pelan-pelan saja. Tidak ada istilah rumit tanpa penjelasan.

## Bayangkan Rumahmu

Coba bayangkan rumahmu. Supaya aman, kamu mengunci pintu, memasang pagar, dan tidak sembarangan memberi kunci ke orang asing. Nah, **cybersecurity itu "pengaman rumah" untuk kehidupan digitalmu** — HP, laptop, email, rekening bank, sampai akun media sosial.

Secara sederhana, cybersecurity adalah **upaya melindungi perangkat, data, dan akun kita dari pihak yang berniat jahat di dunia digital**. Pihak jahat ini sering disebut *hacker* atau penjahat siber, dan target mereka bukan cuma perusahaan besar — orang biasa seperti kita pun bisa jadi korban.

## Kenapa Ini Penting Buat Kamu?

Dulu, barang berharga disimpan di brankas. Sekarang, hampir semua hal penting ada di dunia digital:

- **Uang** — rekening bank dan dompet digital (GoPay, DANA, OVO)
- **Identitas** — KTP, foto, nomor HP, alamat
- **Kenangan** — foto keluarga dan chat pribadi
- **Pekerjaan** — email kantor dan dokumen penting

Kalau akunmu dibobol, kerugiannya nyata: uang bisa hilang, identitas bisa dipakai untuk menipu orang lain atas namamu, dan foto pribadimu bisa disalahgunakan. Kabar baiknya, sebagian besar serangan bisa dicegah dengan kebiasaan sederhana — dan itulah yang akan kita pelajari di seri ini.

## Tiga Musuh yang Paling Sering Menyerang Orang Awam

1. **Phishing** — pesan palsu (SMS, email, atau WA) yang mengaku dari bank atau toko online, lalu memancingmu mengklik link dan memasukkan password. Ini seperti maling yang menyamar jadi kurir paket.
2. **Password lemah** — password seperti \`123456\` atau tanggal lahir sangat mudah ditebak, apalagi kalau dipakai di semua akun. Sekali bocor satu, semua akun ikut jebol.
3. **Wi-Fi dan aplikasi sembarangan** — Wi-Fi gratis di tempat umum dan aplikasi dari sumber tak resmi bisa menjadi jalan masuk bagi pencuri data.

Tenang, kamu tidak perlu hafal semuanya hari ini. Satu per satu akan kita bahas di pelajaran berikutnya.

## Latihan Praktis Hari Ini (5 menit saja)

Buka HP-mu sekarang dan cek satu hal ini: **apakah password email utamamu sama dengan password akun lain (misalnya media sosial atau e-commerce)?**

Kalau jawabannya ya, itu tugas pertamamu minggu ini: ganti password email dengan yang berbeda dan lebih kuat. Kenapa email dulu? Karena email adalah "kunci utama" — hampir semua akun lain bisa di-reset lewat email. Di pelajaran berikutnya kita akan bahas cara membuat password yang kuat tapi tetap mudah diingat.

## Kamus

| Istilah | Arti |
|---------|------|
| cybersecurity | keamanan siber — upaya melindungi perangkat, data, dan akun dari pihak jahat di dunia digital |
| hacker | penjahat siber; peretas |
| phishing | pesan palsu yang memancing korban menyerahkan password atau data |
| password | kata sandi |
| Wi-Fi | jaringan internet nirkabel |
`,Il=`---
lang: cyber
number: 2
date: 2026-11-03
title: CIA Triad
subtitle: Tiga prinsip dasar keamanan digital
keywords: CIA triad confidentiality integrity availability kerahasiaan keutuhan ketersediaan 2FA
---

Kemarin kita belajar apa itu cybersecurity. Hari ini kita kenalan dengan tiga prinsip dasar yang jadi fondasi semua keamanan digital: **CIA triad**. Bukan CIA agen rahasia — ini singkatan dari Confidentiality, Integrity, dan Availability.

## Bayangkan Rumahmu Lagi

**1. Confidentiality (kerahasiaan)**
Hanya orang yang berhak boleh masuk dan melihat isi rumah. Gembok, password, dan enkripsi adalah alatnya. Contoh nyata: chat WhatsApp yang terenkripsi end-to-end — hanya kamu dan lawan bicaramu yang bisa membacanya, bukan orang yang mengintip di tengah jalan.

**2. Integrity (keutuhan)**
Isi rumah tidak boleh diubah tanpa izin. Data yang kamu terima harus sama persis dengan yang dikirim, tidak disusupi. Contoh: kamu transfer Rp500 ribu, yang sampai harus Rp500 ribu — bukan diubah jadi Rp5 juta oleh pihak lain. Atau file yang kamu unduh tidak disisipi virus di tengah jalan.

**3. Availability (ketersediaan)**
Rumah harus bisa diakses saat kamu membutuhkannya. Sistem yang aman tapi tidak bisa diakses saat darurat itu gagal. Contoh: aplikasi bank yang tidak bisa dibuka saat kamu butuh bayar, atau situs yang dibanjiri serangan DDoS sampai down dan tidak bisa diakses siapa pun.

## Kenapa Ketiganya Harus Seimbang?

- Terlalu fokus kerahasiaan saja: password super rumit sampai kamu sendiri lupa → availability rusak.
- Terlalu fokus ketersediaan saja: semua serba mudah diakses tanpa kunci → confidentiality rusak.
- Keamanan yang baik adalah saat ketiganya jalan bersamaan.

Contoh paling dekat: rekening bank di HP-mu. PIN, sidik jari, dan OTP menjaga kerahasiaan (hanya kamu yang bisa buka). Enkripsi dan verifikasi menjaga keutuhan (nominal dan rekening tujuan tidak bisa diubah di tengah jalan). Dan aplikasinya yang bisa dibuka kapan pun menjaga ketersediaan.

## Latihan Praktis Hari Ini (5 menit saja)

Aktifkan **2FA (autentikasi dua faktor)** di satu akun pentingmu — email utama adalah pilihan terbaik. Caranya: buka Pengaturan > Keamanan di akun emailmu, nyalakan "Verifikasi 2 langkah", lalu pilih aplikasi authenticator (misal Google Authenticator) atau SMS. Mulai sekarang, selain password, login butuh kode kedua — ini memperkuat kerahasiaan akunmu secara langsung.

## Kamus

| Istilah | Arti |
|---------|------|
| CIA triad | tiga prinsip dasar keamanan digital: Confidentiality, Integrity, Availability |
| confidentiality | kerahasiaan — hanya yang berhak boleh melihat data |
| integrity | keutuhan — data tidak boleh diubah tanpa izin |
| availability | ketersediaan — sistem harus bisa diakses saat dibutuhkan |
| enkripsi end-to-end | pesan hanya bisa dibaca pengirim dan penerima |
| DDoS | serangan yang membanjiri situs dengan lalu lintas palsu sampai down |
| 2FA | autentikasi dua faktor — login butuh password + kode kedua |
| OTP | kode sekali pakai untuk verifikasi login |
`,Al=`---
lang: cyber
number: 3
date: 2026-11-04
title: Jenis Ancaman Umum
subtitle: Malware, phishing, pencurian data & serangan jaringan
keywords: ancaman malware phishing pencurian data serangan jaringan DDoS ransomware spyware
---

Kemarin kita belajar CIA triad, yaitu tiga hal yang dilindungi: kerahasiaan, keutuhan, dan ketersediaan data. Hari ini kita kenalan sama "musuhnya": siapa saja yang mengancam tiga hal itu.

Bayangkan data kamu seperti rumah. Ancaman itu ada macam-macam, dan masing-masing masuk dengan cara berbeda:

**1. Malware (perangkat lunak jahat)**
Ini seperti penyakit yang menyelinap ke rumah lewat barang yang kamu bawa masuk: file unduhan, lampiran email, atau aplikasi bajakan. Jenisnya ada banyak: virus yang merusak file, ransomware yang mengunci file lalu minta tebusan, dan spyware yang diam-diam mengintip aktivitasmu. Contoh nyata: komputer tiba-tiba lambat, muncul iklan aneh, atau file berubah jadi tidak bisa dibuka.

**2. Phishing dan rekayasa sosial**
Ini penipu yang menyamar, bukan membobol. Ia mengetuk pintu sambil mengaku kurir, bank, atau atasanmu, lalu memintamu sendiri yang membukakan pintu: klik link palsu, kirim kode OTP, atau isi password di situs tiruan. Ini salah satu ancaman paling sering berhasil, karena yang diserang bukan komputernya, tapi manusianya. (Topik ini nanti kita bahas lebih dalam di pelajaran khusus phishing.)

**3. Pencurian data**
Kadang pencurinya tidak menyerang kamu langsung, tapi menyerang perusahaan tempat datamu disimpan. Sekali database perusahaan bocor, email, password, dan nomor HP jutaan orang bisa tersebar dan diperjualbelikan. Korbannya sering baru sadar saat akunnya tiba-tiba dipakai orang lain.

**4. Serangan jaringan**
Ini serangan di "jalan" tempat datamu lewat. Contohnya Wi-Fi gratis palsu di tempat umum: kamu kira terhubung ke Wi-Fi kafe, padahal itu jebakan yang mengintip datamu. Ada juga serangan DDoS, yaitu membanjiri sebuah situs dengan lalu lintas palsu sampai situsnya tumpah dan tidak bisa diakses siapa pun.

Benang merahnya: hampir semua ancaman ini memanfaatkan celah yang sama, yaitu perangkat yang tidak diperbarui, password yang lemah, atau manusia yang lengah. Kabar baiknya, setiap celah itu ada penangkalnya, dan satu per satu akan kita bahas di pelajaran berikutnya.

## Latihan praktis 5 menit hari ini

Buka situs [haveibeenpwned.com](https://haveibeenpwned.com), masukkan alamat email yang paling sering kamu pakai, dan lihat apakah email itu pernah muncul dalam kebocoran data yang diketahui. Kalau pernah, itu tanda password lama di layanan tersebut sebaiknya segera diganti dan dilengkapi verifikasi dua langkah.

## Kamus

| Istilah | Arti |
|---------|------|
| malware | perangkat lunak jahat |
| virus | malware yang menempel pada file dan menyebar saat file dibuka |
| ransomware | malware yang mengunci file lalu meminta tebusan |
| spyware | malware yang diam-diam mengintip aktivitas |
| phishing | penipuan berkedok pihak tepercaya untuk mencuri data |
| pencurian data | kebocoran database perusahaan berisi data pengguna |
| serangan jaringan | serangan di jalur tempat data lewat, mis. Wi-Fi palsu |
| DDoS | serangan banjir lalu lintas sampai situs tidak bisa diakses |
| haveibeenpwned.com | situs untuk mengecek apakah email pernah muncul dalam kebocoran data |
`,Tl=`---
lang: cyber
number: 4
date: 2026-11-05
title: Password dan Autentikasi
subtitle: Passphrase, password manager & 2FA
keywords: password passphrase autentikasi 2FA password manager credential stuffing
---

Bayangkan password itu seperti kunci rumah. Kalau semua pintu rumahmu — pintu depan, kamar, brankas — memakai satu kunci yang sama, pencuri yang menemukan satu kunci itu bisa masuk ke mana-mana. Begitu juga dengan akun digitalmu: kalau password email, media sosial, dan mobile banking semuanya sama, satu kebocoran saja cukup untuk membobol semuanya.

Dan kebocoran itu sering terjadi. Data dari satu situs yang diretas (misalnya forum atau toko online) sering dijual dan dipakai penjahat untuk mencoba masuk ke akun lain milik korban yang sama. Teknik ini disebut *credential stuffing* — menebak akun lain pakai password yang sudah bocor. Jadi yang membahayakan bukan cuma password yang lemah, tapi password yang dipakai ulang.

## Lalu password yang bagus itu seperti apa?

Bukan yang ribet sampai kamu sendiri lupa, tapi yang panjang dan unik per akun. Triknya: pakai *passphrase*, yaitu gabungan 4 kata acak yang mudah kamu ingat tapi susah ditebak mesin. Contoh: \`kucing-pisang-jembatan-hujan\`. Panjangnya 27 karakter, jauh lebih kuat dari \`Budi123!\` yang pendek dan mudah ditebak, tapi tetap gampang diingat karena membentuk gambaran di kepala.

Tapi kalau setiap akun passwordnya beda-beda, bagaimana menghafalnya? Di sinilah peran **password manager** — aplikasi seperti Bitwarden atau yang bawaan di HP-mu. Kamu cukup ingat satu password utama, sisanya disimpan dan diisikan otomatis oleh aplikasi. Ini kunci rumah yang satu, tapi isinya brankas berisi kunci-kunci lain yang berbeda.

## Satu lapis lagi: autentikasi dua faktor (2FA)

Password saja tidak cukup. 2FA itu seperti gembok kedua: setelah memasukkan password, kamu masih harus memasukkan kode dari aplikasi authenticator di HP-mu (Google Authenticator, Microsoft Authenticator, dan sejenisnya). Jadi meski passwordmu bocor, penjahat tetap tidak bisa masuk tanpa HP-mu. Sebisa mungkin pilih 2FA lewat aplikasi, bukan SMS — SMS lebih mudah disadap.

## Latihan praktis hari ini (10 menit saja)

1. Aktifkan 2FA di akun email utamamu — ini akun terpenting, karena hampir semua "lupa password" akun lain larinya ke email.
2. Cari satu akun yang passwordnya masih sama dengan akun lain, lalu ganti dengan passphrase baru yang unik. Kalau mau, sekalian pasang password manager biar ke depannya tidak perlu menghafal semuanya.

## Kamus

| Istilah | Arti |
|---------|------|
| passphrase | gabungan beberapa kata acak sebagai password — panjang tapi mudah diingat |
| password manager | aplikasi yang menyimpan semua password; cukup ingat satu password utama |
| 2FA | autentikasi dua faktor — gembok kedua setelah password |
| credential stuffing | mencoba masuk ke akun lain dengan password yang sudah bocor |
| authenticator | aplikasi penghasil kode login kedua (mis. Google Authenticator) |
`,Pl=`---
lang: cyber
number: 5
date: 2026-11-06
title: Phishing dan Rekayasa Sosial
subtitle: Social engineering — penipuan yang menyerang manusianya
keywords: phishing rekayasa sosial social engineering OTP penipuan bank
---

Kemarin kita belajar soal password dan autentikasi. Hari ini kita bahas salah satu trik penipuan paling umum di dunia digital: phishing dan rekayasa sosial (social engineering).

## Apa itu phishing?

Phishing adalah upaya menipu kita supaya menyerahkan data penting — seperti password, kode OTP, atau nomor rekening — dengan menyamar sebagai pihak yang kita percaya. Biasanya lewat email, SMS, atau pesan WhatsApp.

Analoginya begini: bayangkan ada orang asing mengetuk pintu rumahmu, mengaku petugas PLN, dan minta kamu membuka brankas. Kamu tidak akan percaya begitu saja, kan? Nah, phishing itu versi digitalnya: penipu mengaku dari bank, dari marketplace, atau dari "admin" — lalu minta kamu mengklik tautan atau mengirim kode rahasia.

Rekayasa sosial adalah "seni"-nya: penipu memanfaatkan emosi kita — rasa takut, panik, atau tergiur hadiah. Contoh kalimat yang sering dipakai:

- "Akun Anda akan diblokir dalam 1 jam! Klik tautan ini segera!" (membuat panik)
- "Selamat! Anda memenangkan hadiah Rp10 juta, klaim sekarang!" (memancing tamak)
- "Paket Anda tertahan, klik untuk melacak" (memanfaatkan rasa penasaran)

Contoh nyata: Kamu menerima SMS yang seolah dari bank: "BCA: Akun Anda terdeteksi login mencurigakan. Verifikasi di bit.ly/xxx." Tautan itu mengarah ke situs palsu yang tampilannya mirip sekali dengan situs bank asli. Begitu kamu memasukkan username dan password, penipu langsung memilikinya.

## Ciri-ciri phishing yang patut dicurigai

1. Mendesak dan menakut-nakuti ("segera", "terakhir hari ini", "akun diblokir")
2. Alamat pengirim aneh — misal email dari bca-support@gmail.com, bukan domain resmi bank
3. Tautan yang kalau diperhatikan hurufnya aneh, misal bca-secure-login.com atau faceb00k.com
4. Meminta data rahasia (password, OTP, PIN) — ingat, bank tidak pernah meminta ini lewat chat atau telepon

## Latihan hari ini (5 menit)

Buka kotak masuk SMS atau WhatsApp-mu, cari satu pesan dari "bank", "kurir", atau "hadiah" yang pernah kamu terima. Periksa tiga hal ini:

1. Siapa pengirimnya — nomor/alamat resmi atau bukan?
2. Apakah pesannya mendesak atau menakut-nakuti?
3. Arahkan kursor (tanpa diklik!) ke tautannya — apakah alamatnya terlihat janggal?

Kalau satu saja jawabannya mencurigakan, hapus pesannya. Dan ingat aturan emasnya: jangan pernah klik tautan dari pesan yang tidak kamu minta, dan jangan pernah bagikan kode OTP ke siapa pun — termasuk yang mengaku dari bank.

## Kamus

| Istilah | Arti |
|---------|------|
| phishing | penipuan yang menyamar sebagai pihak tepercaya untuk mencuri data |
| social engineering | rekayasa sosial — manipulasi emosi manusia (takut, panik, tergiur hadiah) untuk mencuri data |
| OTP | kode sekali pakai; jangan pernah dibagikan ke siapa pun |
`,El=`---
lang: cyber
number: 6
date: 2026-11-09
title: Malware — Virus, Trojan, dan Ransomware
subtitle: Senjata para penjahat siber
keywords: malware virus trojan ransomware spyware worm WannaCry antivirus backup
---

Selamat pagi! Setelah kemarin kita belajar soal phishing, hari ini kita bahas "senjata"-nya para penjahat siber: **malware**.

## Apa itu malware?

Malware adalah singkatan dari *malicious software* — program jahat yang dibuat untuk merusak, mencuri, atau mengunci perangkat dan datamu. Analoginya seperti ini: kalau rumahmu adalah HP/laptop, malware itu seperti pencuri yang menyamar jadi tamu, tukang, atau paket kiriman — begitu masuk, dia bisa mengacak-acak isi rumah.

## Jenis-jenis malware yang paling sering ditemui

1. **Virus** — menempel pada file lain dan menyebar saat file itu dibuka atau dibagikan. Ibarat flu: satu file sakit, menular ke file lain.
2. **Trojan** — menyamar sebagai aplikasi yang terlihat berguna (misalnya aplikasi "penghemat baterai" atau game gratis), padahal di dalamnya ada program jahat. Namanya dari kuda Troya: hadiah yang ternyata berisi musuh.
3. **Ransomware** — mengunci semua filemu lalu meminta tebusan. Ini yang paling merusak. Contoh nyata: serangan **WannaCry (2017)** melumpuhkan ratusan ribu komputer di 150 negara, termasuk rumah sakit — file pasien terkunci dan baru dibuka kalau korban membayar Bitcoin.
4. **Spyware** — diam-diam mengintip: mencatat tombol yang kamu ketik, membaca pesan, sampai melacak lokasimu.
5. **Worm** — menyebar sendiri lewat jaringan, tanpa perlu kamu klik apa pun.

## Bagaimana malware masuk ke perangkatmu?

- Lampiran email atau link yang kelihatan meyakinkan (ini sambungannya dengan phishing kemarin)
- Aplikasi bajakan atau unduhan dari situs tidak resmi
- USB atau file dari orang lain yang tidak jelas
- Iklan pop-up yang memancing klik "Download" atau "Kamu menang hadiah!"

## Cara melindungi diri

- **Update sistem dan aplikasi** — update sering menutup celah yang dipakai malware untuk masuk.
- **Unduh aplikasi hanya dari toko resmi** (Play Store/App Store) dan cek ulasannya.
- **Jangan klik lampiran atau link dari pengirim yang tidak dikenal.**
- **Pakai antivirus bawaan** (Windows Defender sudah cukup untuk pemakaian sehari-hari) dan biarkan aktif.
- **Backup data penting** secara rutin — kalau kena ransomware, backup adalah satu-satunya jalan keluar yang tidak melibatkan pembayaran tebusan.

## Latihan hari ini (5 menit)

Buka HP-mu, masuk ke daftar aplikasi yang terpasang. Periksa satu per satu: adakah aplikasi yang **tidak kamu kenali atau tidak pernah kamu pasang**? Kalau ada, hapus. Sambil jalan, cek juga izin aplikasi yang mencurigakan — misalnya aplikasi senter yang minta akses kontak dan lokasi. Itu tanda bahaya.

## Kamus

| Istilah | Arti |
|---------|------|
| malware | malicious software — program jahat |
| virus | malware yang menempel pada file dan menular ke file lain |
| trojan | malware yang menyamar sebagai aplikasi berguna |
| ransomware | malware yang mengunci file dan meminta tebusan |
| spyware | malware yang diam-diam mengintip: ketikan, pesan, lokasi |
| worm | malware yang menyebar sendiri lewat jaringan |
| WannaCry | serangan ransomware besar tahun 2017 |
| antivirus | program pelindung dari malware (mis. Windows Defender) |
| backup | salinan cadangan data penting |
`,Rl=`---
lang: cyber
number: 7
date: 2026-11-10
title: Keamanan Wi-Fi dan Jaringan Dasar
subtitle: Evil twin, HTTPS & router rumah
keywords: wifi jaringan evil twin HTTPS gembok router WPA2 WPA3 VPN
---

Selamat pagi! Hari ini kita bahas sesuatu yang kamu pakai setiap hari: Wi-Fi. Kita sudah belajar soal password, phishing, dan malware — sekarang giliran "jalan" tempat semua data itu lewat.

## Bayangkan Wi-Fi itu jalan raya

Saat kamu membuka website atau mengirim pesan, datamu berjalan lewat udara seperti mobil di jalan raya. Kalau jalan itu jalan umum tanpa pagar (Wi-Fi publik tanpa password), siapa pun yang ada di sekitar bisa "mengintip" mobil-mobil yang lewat. Itu sebabnya Wi-Fi publik butuh kehati-hatian ekstra.

## Bahaya 1: Wi-Fi palsu (evil twin)

Ini trik yang paling licik. Penyerang membuat Wi-Fi dengan nama yang sama persis dengan Wi-Fi asli — misalnya di mal ada "Mall_Free_WiFi" yang asli, lalu muncul "Mall_Free_WiFi" yang palsu. Kamu tidak sengaja tersambung ke yang palsu, dan semua yang kamu lakukan lewat situ bisa dia lihat. Namanya sama, tapi pemiliknya beda.

## Bahaya 2: menguping di Wi-Fi terbuka

Di Wi-Fi tanpa password, data yang tidak terenkripsi bisa disadap. Makanya, jangan pernah login ke bank, email penting, atau memasukkan data sensitif saat memakai Wi-Fi publik yang terbuka.

## Perisai utamamu: HTTPS dan gembok di browser

Perhatikan ikon gembok kecil di samping alamat website. Gembok itu artinya koneksimu terenkripsi (HTTPS) — ibarat surat yang dikirim dalam amplop tertutup, bukan kartu pos yang bisa dibaca siapa saja. Bahkan di Wi-Fi publik, selama ada gemboknya, isi datamu tetap aman. Aturannya sederhana: tidak ada gembok, jangan masukkan password atau data penting.

## Amankan Wi-Fi rumahmu

Router di rumah adalah gerbang ke semua perangkatmu. Tiga hal yang paling penting:

- **Ganti password admin router** — jangan biarkan tetap "admin/admin" seperti bawaan pabrik, karena itu sudah diketahui umum.
- **Pakai enkripsi WPA2 atau WPA3** — ini standar pengaman Wi-Fi modern. Kalau routermu masih memakai WEP atau tanpa password sama sekali, segera ganti pengaturannya.
- **Beri Wi-Fi password yang kuat** — sama seperti password akun, jangan pakai yang mudah ditebak.

## Latihan praktis (5 menit, bisa langsung dilakukan)

1. Buka pengaturan Wi-Fi di HP-mu, lihat daftar jaringan yang tersimpan, lalu hapus ("lupakan") jaringan publik yang sudah tidak kamu pakai — kafe, mal, bandara. Supaya HP-mu tidak otomatis tersambung ke jaringan palsu yang namanya sama di lain waktu.
2. Cek keamanan Wi-Fi rumah: di HP, ketuk nama Wi-Fi rumahmu dan lihat bagian keamanannya — pastikan tertulis WPA2 atau WPA3.
3. Mulai hari ini, biasakan melihat gembok di browser sebelum login apa pun, terutama saat memakai Wi-Fi publik. Untuk urusan bank, lebih aman pakai data seluler saja.

## Kamus

| Istilah | Arti |
|---------|------|
| evil twin | Wi-Fi palsu yang meniru nama Wi-Fi asli |
| HTTPS | koneksi terenkripsi, ditandai ikon gembok di browser |
| WPA2 / WPA3 | standar enkripsi Wi-Fi modern |
| WEP | standar enkripsi Wi-Fi lama yang sudah tidak aman |
| router | perangkat gerbang jaringan di rumah |
`,Nl=`---
lang: cyber
number: 8
date: 2026-11-11
title: Keamanan HP
subtitle: Layar kunci, izin aplikasi & update
keywords: HP smartphone layar kunci PIN sidik jari izin aplikasi update keamanan
---

Selamat pagi! Hari ini kita bahas perangkat yang paling dekat denganmu setiap hari: HP. Semua yang sudah kita pelajari — password, phishing, malware, Wi-Fi — semuanya bertemu di satu benda kecil ini. HP menyimpan foto, chat, email, rekening bank, sampai lokasi rumahmu. Kalau HP jatuh ke tangan yang salah, itu seperti menyerahkan dompet, kunci rumah, dan buku harianmu sekaligus.

## Bayangkan HP itu brankas kecil

HP-mu itu brankas yang kamu bawa ke mana-mana. Di dalamnya ada semua harta digitalmu. Brankas yang baik punya tiga lapis pengaman: gembok yang kuat, isinya tertata, dan kuncinya tidak dititipkan sembarangan. Tiga lapis itu juga berlaku untuk HP.

## Lapis 1: kunci layar yang kuat

Ini gembok brankasmu. Pola (pattern) yang mudah ditebak, misalnya huruf L atau Z, gampang ditebak orang yang melihatmu membuka HP sekali saja — apalagi bekas jari di layar bisa meninggalkan jejak pola! Lebih aman pakai PIN 6 digit atau kata sandi, dan kalau HP-mu mendukung sidik jari (fingerprint) atau pengenalan wajah (face unlock), aktifkan itu sebagai tambahan. Jangan lupa atur HP mengunci otomatis setelah 30 detik sampai 1 menit tidak dipakai, supaya kalau HP tertinggal di meja, tidak ada yang sempat mengintip.

## Lapis 2: unduh aplikasi hanya dari toko resmi

Sebagian besar malware masuk lewat aplikasi. Toko resmi seperti Play Store (Android) dan App Store (iPhone) memang tidak sempurna, tapi mereka memeriksa aplikasi sebelum diterbitkan. Sementara itu, file APK dari situs acak atau tautan WhatsApp "coba aplikasi ini, gratis!" adalah jalan masuk favorit malware — ingat pelajaran malware kemarin: trojan sering menyamar sebagai aplikasi yang terlihat berguna. Aturan sederhananya: kalau aplikasinya tidak ada di toko resmi, jangan dipasang.

## Lapis 3: izin aplikasi — jangan beri kunci ke semua orang

Pernahkah aplikasi senter minta akses ke kontak dan lokasi? Itu seperti tukang yang datang memperbaiki lampu, lalu minta kunci kamar tidurmu. Setiap aplikasi meminta izin (permission): akses kamera, mikrofon, lokasi, kontak, dan file. Berikan izin hanya yang memang dibutuhkan aplikasi itu untuk bekerja. Aplikasi peta wajar minta lokasi; aplikasi kalkulator tidak. Periksa izin aplikasi secara berkala: di Android lewat Pengaturan → Privasi → Pengelola Izin, di iPhone lewat Pengaturan → Privasi & Keamanan.

## Update itu tambalan, bukan gangguan

Pernah muncul notifikasi "pembaruan tersedia" lalu kamu menundanya berminggu-minggu? Update sistem dan aplikasi itu seperti menambal lubang di dinding brankas: produsen menemukan celah keamanan, lalu mengirim tambalannya lewat update. HP yang tidak di-update tetap punya lubang itu, dan penyerang tahu persis di mana lubangnya. Jadi, aktifkan update otomatis, atau biasakan memasang update begitu ada.

## Bonus: kalau HP hilang

Siapkan sebelum kejadian, bukan sesudahnya. Aktifkan fitur "Find My Device" (Android) atau "Find My" (iPhone) supaya kamu bisa melacak, mengunci, bahkan menghapus data HP dari jauh. Dan pastikan backup foto dan kontak penting sudah aktif — ini nyambung dengan pelajaran backup yang akan kita bahas nanti.

## Latihan praktis (10 menit, bisa langsung dilakukan)

1. Cek kunci layarmu sekarang: apakah masih pola sederhana atau PIN 4 digit yang mudah ditebak seperti tanggal lahir? Ganti ke PIN 6 digit atau aktifkan sidik jari.
2. Buka Pengaturan → Privasi → Pengelola Izin (Android) atau Pengaturan → Privasi & Keamanan (iPhone). Cari satu aplikasi yang izinnya berlebihan — misalnya aplikasi belanja yang bisa mengakses mikrofon — lalu cabut izin yang tidak masuk akal.
3. Cek update: buka Pengaturan → Pembaruan Perangkat Lunak, dan pasang kalau ada yang tertunda. Sambil menunggu, hapus satu aplikasi yang sudah lama tidak kamu pakai — makin sedikit aplikasi, makin kecil celahnya.

## Kamus

| Istilah | Arti |
|---------|------|
| fingerprint | sidik jari, dipakai untuk membuka kunci HP |
| face unlock | pengenalan wajah untuk membuka kunci HP |
| permission | izin yang diberikan kepada aplikasi untuk mengakses sesuatu di HP |
| APK | file pemasang aplikasi Android dari luar Play Store |
| Find My Device / Find My | fitur untuk melacak, mengunci, dan menghapus data HP yang hilang |
| update | pembaruan sistem atau aplikasi, sering berisi perbaikan keamanan |
`,Cl=`---
lang: cyber
number: 9
date: 2026-11-12
title: Privasi dan jejak digital
subtitle: Apa yang internet tahu tentangmu — dan cara mengendalikannya
keywords: privasi jejak digital data pribadi pelacakan cookie iklan riwayat penelusuran
---

Selamat pagi! Kemarin kita mengamankan HP. Hari ini kita bahas sesuatu yang lebih halus tapi sama pentingnya: privasi dan jejak digital. Setiap kali kamu membuka aplikasi, mencari sesuatu di Google, atau sekadar jalan-jalan sambil membawa HP, kamu meninggalkan jejak — seperti jejak kaki di pasir. Bedanya, jejak digital ini tidak hilang tertiup angin. Ia dikumpulkan, disimpan, dan kadang dijual.

## Jejak digital itu apa?

Jejak digital (digital footprint) adalah semua data yang kamu tinggalkan saat memakai internet. Ada dua jenis. Jejak aktif (active footprint) adalah yang kamu tinggalkan dengan sengaja: postingan, komentar, foto yang kamu unggah, profil yang kamu isi. Jejak pasif (passive footprint) adalah yang terkumpul tanpa kamu sadari: lokasi HP-mu, riwayat pencarian, situs yang kamu kunjungi, bahkan berapa lama kamu menatap satu video sebelum menggulir ke bawah.

Analoginya begini: bayangkan kamu berjalan di mal. Jejak aktif adalah saat kamu sengaja menulis namamu di buku tamu toko. Jejak pasif adalah kamera keamanan yang merekam toko mana saja yang kamu masuki, berapa lama kamu berhenti di etalase, dan barang apa yang kamu pegang — semua tanpa kamu sadari.

## Kenapa ini penting?

Data yang terkumpul dipakai untuk menargetkan iklan (advertising) — itu sebabnya setelah kamu mencari "sepatu lari" sekali, iklan sepatu mengikutimu ke mana-mana. Itu masih yang ringan. Yang lebih serius: data pribadi bisa bocor dalam kebocoran data (data breach) dan dipakai penipu untuk menyamar sebagai dirimu, atau dipakai untuk serangan phishing yang sangat meyakinkan karena penipu tahu nama, pekerjaan, dan kebiasaanmu. Ingat pelajaran phishing: makin banyak yang penyerang tahu tentangmu, makin meyakinkan tipuannya.

## Tiga sumber jejak terbesar

**1. Media sosial.** Setiap postingan, check-in lokasi, dan foto yang kamu unggah adalah data. Foto yang menunjukkan rumah, pelat nomor, atau jadwal liburanmu adalah informasi berharga bagi orang yang berniat jahat. Aturan sederhana: sebelum mengunggah, tanyakan, "Apakah aku nyaman kalau orang asing tahu ini?"

**2. Aplikasi dan situs web.** Banyak aplikasi gratis sebenarnya "dibayar" dengan datamu. Mereka memasang pelacak (tracker) dan cookie — file kecil yang mengingat siapa kamu saat kembali ke situs itu. Cookie sendiri tidak jahat: ia yang membuatmu tetap login dan mengingat isi keranjang belanja. Tapi cookie dari pihak ketiga (third-party cookie) bisa mengikutimu dari satu situs ke situs lain.

**3. HP dan lokasi.** HP-mu terus mencatat lokasi, bahkan saat kamu tidak membuka peta. Riwayat lokasi bisa menunjukkan di mana rumahmu, kantormu, dan jam berapa kamu biasanya pergi. Periksa pengaturan lokasi di HP dan matikan akses lokasi untuk aplikasi yang tidak membutuhkannya.

## Cara mengendalikan jejakmu

Kamu tidak bisa menghapus jejak digital sepenuhnya — dan tidak perlu. Tujuannya adalah mengendalikan, bukan menghilang. Mulailah dari tiga hal ini: pertama, periksa pengaturan privasi (privacy settings) media sosialmu dan ubah akun menjadi privat kalau memungkinkan; kedua, atur peramban (browser) untuk menghapus cookie secara berkala dan pertimbangkan mode penyamaran (incognito) untuk pencarian yang sensitif — ingat, incognito hanya menyembunyikan riwayat dari orang yang memakai perangkat yang sama, bukan dari penyedia internet; ketiga, biasakan membaca izin aplikasi sebelum menekan "Setuju" — kalau aplikasi senter minta akses kontak, itu tanda bahaya, seperti yang kita bahas di pelajaran keamanan HP.

## Latihan praktis (15 menit, bisa langsung dilakukan)

1. Cari namamu sendiri di Google. Lihat apa yang muncul: profil media sosial, komentar lama, atau foto? Catat apa yang membuatmu tidak nyaman — itu daftar pertama yang perlu kamu rapikan.
2. Buka satu media sosial yang paling sering kamu pakai, masuk ke Pengaturan → Privasi, dan ubah akun menjadi privat. Hapus atau sembunyikan satu postingan lama yang membocorkan info pribadi, misalnya foto yang menunjukkan alamat rumah atau jadwal liburan.
3. Buka pengaturan peramban di HP (Chrome: titik tiga → Setelan → Privasi dan keamanan), lalu hapus cookie dan riwayat penelusuran sebulan terakhir. Bonus: matikan akses lokasi untuk satu aplikasi yang tidak membutuhkannya.

## Kamus

| Istilah | Arti |
|---------|------|
| jejak digital (digital footprint) | semua data yang kamu tinggalkan saat memakai internet |
| jejak aktif (active footprint) | jejak yang kamu tinggalkan dengan sengaja, misalnya postingan dan komentar |
| jejak pasif (passive footprint) | jejak yang terkumpul tanpa kamu sadari, misalnya riwayat pencarian dan lokasi |
| cookie | file kecil dari situs web yang mengingat siapa kamu saat kembali berkunjung |
| third-party cookie | cookie dari pihak ketiga yang bisa mengikutimu dari satu situs ke situs lain |
| tracker (pelacak) | alat yang mengikuti aktivitasmu di internet untuk mengumpulkan data |
| data breach (kebocoran data) | kejadian ketika data pribadi bocor dari sebuah layanan |
| privacy settings (pengaturan privasi) | pengaturan yang mengontrol siapa yang bisa melihat datamu |
| incognito (mode penyamaran) | mode peramban yang tidak menyimpan riwayat di perangkatmu, tapi tidak menyembunyikanmu dari penyedia internet |
| advertising (iklan bertarget) | iklan yang dipilih berdasarkan data dan kebiasaanmu |
`,Ml=`---
lang: en
number: 1
date: 2026-11-08
title: Alphabet & Cara Baca
subtitle: Pronunciation dasar
keywords: alphabet huruf pronunciation vokal silent letter TH
---

Bahasa Inggris memakai 26 huruf yang sama seperti bahasa Indonesia: A sampai Z. Tapi cara bacanya beda — dan ini hal pertama yang harus dipahami: **tulisan dan bunyi dalam bahasa Inggris sering tidak sama**. Dalam bahasa Indonesia, huruf "a" hampir selalu dibaca "a". Dalam bahasa Inggris, satu huruf bisa berbunyi macam-macam tergantung katanya.

## 1. Nama-nama huruf (alphabet)

Hafalkan cara menyebut tiap huruf ini:

| Huruf | Dibaca | Huruf | Dibaca |
|-------|--------|-------|--------|
| A | ei | N | en |
| B | bi | O | ou |
| C | si | P | pi |
| D | di | Q | kiu |
| E | i | R | ar |
| F | ef | S | es |
| G | ji | T | ti |
| H | eitch | U | yu |
| I | ai | V | vi |
| J | jei | W | dabel-yu |
| K | kei | X | eks |
| L | el | Y | wai |
| M | em | Z | zi (Amerika) / zed (Inggris) |

Perhatikan yang sering tertukar: E dibaca "i", I dibaca "ai", G dibaca "ji", J dibaca "jei". Ini penting saat mengeja nama, misalnya saat menyebut email atau nama orang.

## 2. Bunyi vokal: huruf hidup yang "nakal"

Lima huruf vokal — A, E, I, O, U — masing-masing punya bunyi pendek dan bunyi panjang. Contoh:

- A pendek seperti "e" dalam *cat* (ket) — artinya kucing.
- A panjang seperti "ei" dalam *cake* (keik) — artinya kue.
- I pendek seperti "i" dalam *sit* (sit) — artinya duduk.
- I panjang seperti "ai" dalam *like* (laik) — artinya suka.
- O pendek seperti "o" dalam *hot* (hot) — artinya panas.
- O panjang seperti "ou" dalam *home* (houm) — artinya rumah.

Pola sederhananya: kalau sebuah kata berakhiran huruf "e" yang tidak dibaca (silent e), vokal di tengahnya jadi panjang. Bandingkan *cap* (topi) dengan *cape* (jubah), *kit* (peralatan) dengan *kite* (layang-layang). Huruf "e" di ujung itu diam, tapi ia mengubah bunyi vokal sebelumnya.

## 3. Bunyi yang tidak ada di bahasa Indonesia

Beberapa bunyi perlu latihan khusus karena lidah kita tidak terbiasa:

- **TH** — ada dua macam. *Think* (thingk, berpikir): ujung lidah di antara gigi, tiup pelan. *This* (dis, ini): sama, tapi pakai suara (bergetar). Jangan dibaca "t" atau "d" saja, tapi latih ujung lidah menyentuh gigi atas.
- **R** — beda dengan "r" Indonesia yang bergetar. R Inggris itu lidah ditarik ke belakang tanpa getar, seperti dalam *red* (red, merah) dan *car* (kar, mobil).
- **V vs F** — *very* (veri, sangat) pakai bibir bawah menyentuh gigi atas dan bergetar; *Ferry* (feri) sama tapi tanpa getar.
- **W** — bibir mengerucut seperti mau bersiul: *water* (woter, air), *window* (windou, jendela).

## 4. Huruf yang diam (silent letters)

Kadang ada huruf yang ditulis tapi tidak dibaca sama sekali. Contoh yang paling sering muncul:

- *knife* (naif, pisau) — huruf K diam.
- *hour* (auer, jam) — huruf H diam.
- *listen* (lisen, mendengarkan) — huruf T diam.
- *write* (rait, menulis) — huruf W diam.

Tidak ada jalan pintas: kata-kata seperti ini harus dihafal bunyinya satu per satu. Tapi kabar baiknya, jumlahnya tidak banyak dan yang sering dipakai akan cepat hafal dengan sendirinya.

## Latihan hari ini

Bacalah kata-kata ini dengan suara keras, tiga kali tiap kata, lalu cek apakah bunyimu sudah mendekati panduan di dalam kurung:

1. cat (ket) — kucing
2. cake (keik) — kue
3. sit (sit) — duduk
4. like (laik) — suka
5. hot (hot) — panas
6. home (houm) — rumah
7. think (thingk) — berpikir
8. water (woter) — air
9. knife (naif) — pisau
10. listen (lisen) — mendengarkan

Bonus: eja namamu sendiri dalam bahasa Inggris, huruf demi huruf — misalnya "A-R-I-E-F". Ini latihan paling berguna, karena mengeja nama adalah hal pertama yang sering diminta saat berkenalan dengan orang berbahasa Inggris.

## Kamus

| Kata | Cara baca | Arti |
|------|-----------|------|
| cat | ket | kucing |
| cake | keik | kue |
| sit | sit | duduk |
| like | laik | suka |
| hot | hot | panas |
| home | houm | rumah |
| cap | kep | topi |
| cape | keip | jubah |
| kit | kit | peralatan |
| kite | kait | layang-layang |
| think | thingk | berpikir |
| this | dis | ini |
| red | red | merah |
| car | kar | mobil |
| very | veri | sangat |
| ferry | feri | kapal feri |
| water | woter | air |
| window | windou | jendela |
| knife | naif | pisau |
| hour | auer | jam |
| listen | lisen | mendengarkan |
| write | rait | menulis |
`,Dl=`---
lang: en
number: 2
date: 2026-11-09
title: Sapaan & Perkenalan
subtitle: Greetings & Introducing Yourself
keywords: sapaan greetings perkenalan introducing yourself hello how are you
---

Kemarin kita sudah belajar huruf dan cara bacanya. Hari ini kita belajar hal yang paling sering dipakai sehari-hari: **menyapa orang dan memperkenalkan diri**.

## 1. Menyapa (Greetings)

- **Hello** (he-lo) — Halo
- **Hi** (hai) — Hai (lebih santai dari Hello)
- **Good morning** (gud mor-ning) — Selamat pagi
- **Good afternoon** (gud af-ter-nun) — Selamat siang/sore
- **Good evening** (gud iv-ning) — Selamat malam
- **Good night** (gud nait) — Selamat tidur (bukan untuk menyapa saat bertemu, tapi saat berpisah di malam hari)

## 2. Menanyakan kabar

- **How are you?** (hau ar yu) — Apa kabar?
- **I'm fine, thank you.** (aim fain, tengk yu) — Saya baik, terima kasih.
- **I'm good, thanks.** (aim gud, tengks) — Saya baik, makasih. (lebih santai)
- **And you?** (end yu) — Kalau kamu?

## 3. Memperkenalkan diri

- **What's your name?** (wats yor neim) — Siapa namamu?
- **My name is Budi.** (mai neim is Bu-di) — Nama saya Budi.
- **I'm Budi.** (aim Bu-di) — Saya Budi. (lebih singkat dan umum dipakai)
- **Where are you from?** (we-ar yu from) — Kamu dari mana?
- **I'm from Indonesia.** (aim from In-do-ni-si-a) — Saya dari Indonesia.
- **Nice to meet you.** (nais tu mit yu) — Senang bertemu denganmu.
- **Nice to meet you too.** (nais tu mit yu tu) — Senang bertemu denganmu juga.

## Contoh percakapan singkat

> A: Hello! What's your name? — Halo! Siapa namamu?
> B: Hi! My name is Budi. What's your name? — Hai! Nama saya Budi. Siapa namamu?
> A: I'm Sari. Nice to meet you, Budi. — Saya Sari. Senang bertemu denganmu, Budi.
> B: Nice to meet you too, Sari. Where are you from? — Senang bertemu denganmu juga, Sari. Kamu dari mana?
> A: I'm from Yogyakarta. And you? — Saya dari Yogyakarta. Kalau kamu?
> B: I'm from Bantul. — Saya dari Bantul.

## Latihan hari ini

Perkenalkan dirimu dalam bahasa Inggris, cukup 3 kalimat. Contoh polanya:

1. Hello, my name is [namamu].
2. I'm from [kotamu].
3. Nice to meet you!

Coba ucapkan dengan suara keras tiga kali.

## Kamus

| Kalimat | Cara baca | Arti |
|---------|-----------|------|
| Hello | he-lo | Halo |
| Hi | hai | Hai (lebih santai) |
| Good morning | gud mor-ning | Selamat pagi |
| Good afternoon | gud af-ter-nun | Selamat siang/sore |
| Good evening | gud iv-ning | Selamat malam |
| Good night | gud nait | Selamat tidur |
| How are you? | hau ar yu | Apa kabar? |
| I'm fine, thank you. | aim fain, tengk yu | Saya baik, terima kasih. |
| I'm good, thanks. | aim gud, tengks | Saya baik, makasih. |
| And you? | end yu | Kalau kamu? |
| What's your name? | wats yor neim | Siapa namamu? |
| My name is Budi. | mai neim is Bu-di | Nama saya Budi. |
| I'm Budi. | aim Bu-di | Saya Budi. |
| Where are you from? | we-ar yu from | Kamu dari mana? |
| I'm from Indonesia. | aim from In-do-ni-si-a | Saya dari Indonesia. |
| Nice to meet you. | nais tu mit yu | Senang bertemu denganmu. |
| Nice to meet you too. | nais tu mit yu tu | Senang bertemu denganmu juga. |
`,Ll=`---
lang: en
number: 3
date: 2026-11-10
title: Angka, Hari, dan Waktu
subtitle: Numbers, Days & Telling Time
keywords: angka numbers hari days waktu telling time jam
---

Kemarin kita sudah bisa menyapa dan memperkenalkan diri. Hari ini kita belajar tiga hal yang dipakai setiap hari: berhitung, menyebut hari, dan menanyakan jam.

## 1. Angka (Numbers)

| Angka | English | Dibaca | Arti |
|-------|---------|--------|------|
| 1 | one | wan | satu |
| 2 | two | tu | dua |
| 3 | three | thri | tiga |
| 4 | four | for | empat |
| 5 | five | faiv | lima |
| 6 | six | siks | enam |
| 7 | seven | se-vn | tujuh |
| 8 | eight | eit | delapan |
| 9 | nine | nain | sembilan |
| 10 | ten | ten | sepuluh |
| 11 | eleven | e-le-vn | sebelas |
| 12 | twelve | twelf | dua belas |
| 13 | thirteen | ther-TIIN | tiga belas |
| 14 | fourteen | for-TIIN | empat belas |
| 15 | fifteen | fif-TIIN | lima belas |
| 16 | sixteen | siks-TIIN | enam belas |
| 17 | seventeen | se-vn-TIIN | tujuh belas |
| 18 | eighteen | ei-TIIN | delapan belas |
| 19 | nineteen | nain-TIIN | sembilan belas |
| 20 | twenty | twen-ti | dua puluh |

Pola yang perlu diingat: akhiran **-teen** artinya belasan, akhiran **-ty** artinya puluhan. Ini jebakan klasik:

- thirteen (13) dibaca "ther-TIIN" — tekanannya di akhir
- thirty (30) dibaca "THER-ti" — tekanannya di awal

Lanjut puluhan: 30 thirty (tiga puluh), 40 forty (empat puluh), 50 fifty (lima puluh), 60 sixty (enam puluh), 70 seventy (tujuh puluh), 80 eighty (delapan puluh), 90 ninety (sembilan puluh), 100 one hundred (seratus), 1.000 one thousand (seribu). Angka gabungan tinggal dirangkai: 21 twenty-one (dua puluh satu), 25 twenty-five (dua puluh lima), 47 forty-seven (empat puluh tujuh).

## 2. Hari (Days of the week)

| English | Dibaca | Arti |
|---------|--------|------|
| Monday | Man-dei | Senin |
| Tuesday | Tyuz-dei | Selasa |
| Wednesday | Wenz-dei | Rabu |
| Thursday | Thurs-dei | Kamis |
| Friday | Frai-dei | Jumat |
| Saturday | Sa-ter-dei | Sabtu |
| Sunday | San-dei | Minggu |

Catatan penting: nama hari dalam bahasa Inggris **selalu diawali huruf besar**. Dan untuk mengatakan "pada hari Senin", pakai **on**: on Monday, on Friday.

## 3. Menanyakan dan menyebut jam (Telling time)

- What time is it? — Jam berapa sekarang?
- It's seven o'clock. — Jam tujuh tepat.
- It's half past seven. — Jam setengah delapan (07.30).
- It's a quarter past seven. — Jam tujuh lewat lima belas menit (07.15).
- It's a quarter to eight. — Jam delapan kurang lima belas menit (07.45).
- It's ten past seven. — Jam tujuh lewat sepuluh menit (07.10).

Untuk membedakan pagi dan malam, tambahkan **AM** (tengah malam–tengah hari) dan **PM** (tengah hari–tengah malam): 7 AM = jam 7 pagi, 7 PM = jam 7 malam. Atau lebih mudah: "It's 7 in the morning" / "It's 7 in the evening".

## Contoh kalimat

- I have two brothers. — Saya punya dua saudara laki-laki.
- Today is Tuesday. — Hari ini hari Selasa.
- The meeting is at half past nine. — Rapatnya jam setengah sepuluh.
- I wake up at six o'clock. — Saya bangun jam enam.

## Latihan hari ini (5 menit)

Tulis dalam bahasa Inggris:

1. Angka 7, 13, 30, 21, dan 100.
2. Jawab pertanyaan ini: What day is it today? What time is it now?

**Jawaban:** 1. seven, thirteen, thirty, twenty-one, one hundred. 2. Today is Tuesday. It's ... (isi dengan jam saat ini — misalnya "It's ten past eight.")

## Kamus

### Angka

| English | Cara baca | Arti |
|---------|-----------|------|
| one | wan | satu |
| two | tu | dua |
| three | thri | tiga |
| four | for | empat |
| five | faiv | lima |
| six | siks | enam |
| seven | se-vn | tujuh |
| eight | eit | delapan |
| nine | nain | sembilan |
| ten | ten | sepuluh |
| eleven | e-le-vn | sebelas |
| twelve | twelf | dua belas |
| thirteen | ther-TIIN | tiga belas |
| fourteen | for-TIIN | empat belas |
| fifteen | fif-TIIN | lima belas |
| sixteen | siks-TIIN | enam belas |
| seventeen | se-vn-TIIN | tujuh belas |
| eighteen | ei-TIIN | delapan belas |
| nineteen | nain-TIIN | sembilan belas |
| twenty | twen-ti | dua puluh |
| thirty | THER-ti | tiga puluh |
| forty | for-ti | empat puluh |
| fifty | fif-ti | lima puluh |
| sixty | siks-ti | enam puluh |
| seventy | se-vn-ti | tujuh puluh |
| eighty | ei-ti | delapan puluh |
| ninety | nain-ti | sembilan puluh |
| one hundred | wan han-dred | seratus |
| one thousand | wan thau-znd | seribu |
| twenty-one | twen-ti-wan | dua puluh satu |
| twenty-five | twen-ti-faiv | dua puluh lima |
| forty-seven | for-ti-se-vn | empat puluh tujuh |

### Hari

| English | Cara baca | Arti |
|---------|-----------|------|
| Monday | Man-dei | Senin |
| Tuesday | Tyuz-dei | Selasa |
| Wednesday | Wenz-dei | Rabu |
| Thursday | Thurs-dei | Kamis |
| Friday | Frai-dei | Jumat |
| Saturday | Sa-ter-dei | Sabtu |
| Sunday | San-dei | Minggu |

### Waktu

| English | Cara baca | Arti |
|---------|-----------|------|
| What time is it? | wats taim is it | Jam berapa sekarang? |
| o'clock | o-klok | tepat (jam ...) |
| half past seven | haf past se-vn | jam setengah delapan (07.30) |
| a quarter past seven | a kwor-ter past se-vn | jam tujuh lewat lima belas menit (07.15) |
| a quarter to eight | a kwor-ter tu eit | jam delapan kurang lima belas menit (07.45) |
| ten past seven | ten past se-vn | jam tujuh lewat sepuluh menit (07.10) |
| AM | ei-em | tengah malam–tengah hari (pagi) |
| PM | pi-em | tengah hari–tengah malam (siang/malam) |
| in the morning | in dhe mor-ning | di pagi hari |
| in the evening | in dhe iv-ning | di malam hari |

### Contoh kalimat

| English | Arti |
|---------|------|
| I have two brothers. | Saya punya dua saudara laki-laki. |
| Today is Tuesday. | Hari ini hari Selasa. |
| The meeting is at half past nine. | Rapatnya jam setengah sepuluh. |
| I wake up at six o'clock. | Saya bangun jam enam. |
`,Kl=`---
lang: en
number: 4
date: 2026-11-11
title: Kata Ganti & To Be
subtitle: Subject Pronouns & To Be
keywords: kata ganti pronouns to be am is are saya kamu dia
---

Kemarin kita sudah bisa menyebut angka, hari, dan jam. Hari ini kita belajar dua hal paling dasar dalam bahasa Inggris: kata ganti (pronouns — kata pengganti nama orang atau benda) dan kata kerja to be (am, is, are — padanan kata "adalah" / "berada").

Kenapa ini penting? Karena hampir semua kalimat bahasa Inggris dimulai dari kombinasi keduanya: **kata ganti + to be**. Kalau sudah hafal pola ini, kamu sudah bisa membuat ratusan kalimat.

## 1. Kata ganti (Subject pronouns)

Kata ganti dipakai supaya kita tidak mengulang nama orang terus-menerus. Contoh: daripada berkata "Andi is a teacher. Andi is kind." (Andi adalah guru. Andi baik.), lebih enak: "Andi is a teacher. **He** is kind." (Andi adalah guru. **Dia** baik.)

| English | Dibaca | Arti | Dipakai untuk |
|---------|--------|------|---------------|
| I | ai | saya / aku | diri sendiri |
| you | yu | kamu / kalian | orang yang diajak bicara (satu atau banyak) |
| he | hi | dia (laki-laki) | satu laki-laki |
| she | syi | dia (perempuan) | satu perempuan |
| it | it | dia / itu | satu benda, hewan, atau situasi |
| we | wi | kami / kita | saya + orang lain |
| they | dhei | mereka | banyak orang atau benda |

Perhatian: **you** itu satu kata untuk "kamu" dan "kalian" — tidak ada bedanya. Dan **it** dipakai untuk benda dan hewan, bukan untuk orang.

## 2. To be: am, is, are

To be adalah kata kerja "adalah" / "berada". Bahasa Indonesia bisa berkata "Saya guru" tanpa kata penghubung, tapi bahasa Inggris **tidak boleh**: harus ada to be di tengahnya — "I **am** a teacher" (Saya **adalah** seorang guru).

Pasangannya sudah ditentukan, tinggal dihafal:

| Kata ganti | To be | Dibaca | Contoh |
|------------|-------|--------|--------|
| I | am | em | I am a student. — Saya adalah seorang murid. |
| you | are | ar | You are my friend. — Kamu adalah temanku. |
| he | is | is | He is a doctor. — Dia (laki-laki) adalah seorang dokter. |
| she | is | is | She is happy. — Dia (perempuan) bahagia. |
| it | is | is | It is a cat. — Itu adalah seekor kucing. |
| we | are | ar | We are ready. — Kami sudah siap. |
| they | are | ar | They are students. — Mereka adalah murid-murid. |

Cara gampang mengingatnya: **I am**, **he/she/it is**, sisanya **are** (you, we, they).

## 3. Bentuk singkat (Contractions)

Dalam percakapan sehari-hari, orang hampir selalu memakai bentuk singkat. Wajib hafal karena kamu akan mendengarnya terus:

- I am → **I'm** (aim) — saya
- you are → **you're** (yor) — kamu
- he is → **he's** (his) — dia (laki-laki)
- she is → **she's** (syis) — dia (perempuan)
- it is → **it's** (its) — itu
- we are → **we're** (wir) — kami/kita
- they are → **they're** (dheir) — mereka

Contoh: "I'm from Indonesia." (Saya dari Indonesia.) — kalimat ini akan kamu pakai terus saat kenalan dengan orang luar.

## 4. Kalimat negatif (Negative)

Untuk menyangkal, tambahkan **not** (tidak) setelah to be:

- I am **not** a teacher. — Saya bukan guru.
- He is **not** ready. — Dia belum siap.
- They are **not** here. — Mereka tidak ada di sini.

Bentuk singkatnya juga sering dipakai:

- is not → **isn't** (is-nt)
- are not → **aren't** (ar-nt)
- am not → **tidak ada bentuk singkatnya** — tetap "I'm not"

Contoh: "She isn't angry." (Dia tidak marah.) / "We aren't late." (Kami tidak terlambat.)

## 5. Bertanya (Questions)

Untuk bertanya, tukar posisi: to be pindah ke **depan** kata ganti:

- **Are** you ready? — Apakah kamu sudah siap?
- **Is** she a student? — Apakah dia seorang murid?
- **Am** I late? — Apakah saya terlambat?

Jawaban singkatnya juga pakai to be:

- Yes, I am. / No, I'm not. — Ya. / Tidak.
- Yes, she is. / No, she isn't. — Ya, dia (murid). / Bukan.
- Yes, they are. / No, they aren't. — Ya. / Tidak.

Rumusnya gampang diingat: **kalimat biasa = kata ganti + to be** (I am ready), **pertanyaan = to be + kata ganti** (Are you ready?).

## Contoh kalimat

- I am a student. — Saya adalah seorang murid.
- She is from Bantul. — Dia (perempuan) dari Bantul.
- It is a beautiful day. — Hari ini indah.
- We are friends. — Kami berteman.
- Are you hungry? — Apakah kamu lapar?
- No, I'm not hungry. — Tidak, saya tidak lapar.

## Latihan hari ini (5 menit)

Ubah kalimat-kalimat ini ke bahasa Inggris (tulis atau ucapkan):

1. Saya adalah seorang guru.
2. Dia (laki-laki) dari Indonesia.
3. Mereka tidak siap.
4. Apakah kamu seorang murid?
5. Kami bukan dokter.

**Jawaban:** 1. I am a teacher. 2. He is from Indonesia. 3. They are not ready. / They aren't ready. 4. Are you a student? 5. We are not doctors. / We aren't doctors.

## Kamus

### Kata ganti

| English | Cara baca | Arti |
|---------|-----------|------|
| I | ai | saya / aku |
| you | yu | kamu / kalian |
| he | hi | dia (laki-laki) |
| she | syi | dia (perempuan) |
| it | it | dia / itu (benda, hewan) |
| we | wi | kami / kita |
| they | dhei | mereka |

### To be

| English | Cara baca | Arti |
|---------|-----------|------|
| am | em | adalah / berada (untuk I) |
| is | is | adalah / berada (untuk he, she, it) |
| are | ar | adalah / berada (untuk you, we, they) |
| not | not | tidak / bukan |
| isn't | is-nt | is not (bukan / tidak) |
| aren't | ar-nt | are not (bukan / tidak) |
| I'm | aim | I am (saya) |
| you're | yor | you are (kamu) |
| he's | his | he is (dia laki-laki) |
| she's | syis | she is (dia perempuan) |
| it's | its | it is (itu) |
| we're | wir | we are (kami/kita) |
| they're | dheir | they are (mereka) |

### Kata lain

| English | Cara baca | Arti |
|---------|-----------|------|
| a student | a stu-dnt | seorang murid |
| a teacher | a ti-cer | seorang guru |
| a doctor | a dok-ter | seorang dokter |
| my friend | mai frend | temanku |
| happy | he-pi | bahagia / senang |
| ready | re-di | siap |
| here | hir | di sini |
| late | leit | terlambat |
| angry | eng-gri | marah |
| hungry | hang-gri | lapar |
| beautiful | byu-ti-ful | indah / cantik |
| a beautiful day | a byu-ti-ful dei | hari yang indah |
| from Indonesia | from in-do-ni-sya | dari Indonesia |
| from Bantul | from Ban-tul | dari Bantul |
| friends | frends | teman-teman |
| doctors | dok-ters | dokter-dokter |

### Contoh kalimat

| English | Arti |
|---------|------|
| I am a student. | Saya adalah seorang murid. |
| She is from Bantul. | Dia (perempuan) dari Bantul. |
| It is a beautiful day. | Hari ini indah. |
| We are friends. | Kami berteman. |
| Are you hungry? | Apakah kamu lapar? |
| No, I'm not hungry. | Tidak, saya tidak lapar. |
`,Bl=`---
lang: en
number: 5
date: 2026-11-12
title: Kosakata Sehari-hari
subtitle: Everyday Vocabulary — Family, Jobs, Food & Drinks
keywords: kosakata vocabulary keluarga family pekerjaan jobs makanan food minuman drinks sehari-hari
---

Kemarin kita sudah bisa membuat kalimat dengan kata ganti dan *to be* (contoh: *I am a student* — Saya adalah seorang murid). Tapi kalimat itu masih kosong kalau kita tidak punya kata-katanya. Hari ini kita isi "kotak kata" kamu dengan tiga kelompok kosakata yang paling sering dipakai sehari-hari: **keluarga** (*family* — keluarga), **pekerjaan** (*jobs* — pekerjaan), dan **makanan & minuman** (*food and drinks* — makanan dan minuman).

Triknya: jangan hafal kata sendirian. Hafal selalu dalam kalimat pendek, misalnya *my mother* (ibuku), bukan cuma *mother* (ibu). Dengan begitu kata itu langsung bisa dipakai.

## 1. Keluarga (Family)

Keluarga adalah orang-orang yang paling sering kita ceritakan. Ini kata-katanya:

| English | Dibaca | Arti |
|---------|--------|------|
| father | fa-dher | ayah |
| mother | ma-dher | ibu |
| parents | pe-rents | orang tua (ayah + ibu) |
| brother | bra-dher | kakak / adik laki-laki |
| sister | sis-ter | kakak / adik perempuan |
| son | san | anak laki-laki |
| daughter | do-ter | anak perempuan |
| child | caild | anak (satu) |
| children | cil-dren | anak-anak (banyak) |
| husband | has-band | suami |
| wife | waif | istri |
| grandfather | gren-fa-dher | kakek |
| grandmother | gren-ma-dher | nenek |
| grandparents | gren-pe-rents | kakek-nenek |
| baby | bei-bi | bayi |

Perhatian: bahasa Inggris tidak membedakan kakak dan adik — *brother* bisa berarti kakak laki-laki atau adik laki-laki, *sister* bisa berarti kakak perempuan atau adik perempuan. Kalau mau jelas, tambahkan *older* (lebih tua) atau *younger* (lebih muda): *my older brother* (kakak laki-lakiku), *my younger sister* (adik perempuanku).

Kata *my* (milikku / saya punya) selalu ditaruh sebelum kata keluarga: *my father* (ayahku), *my mother* (ibuku), *my brother* (saudara laki-lakiku).

Contoh dengan *to be* dari pelajaran kemarin:

- He is **my father**. — Dia adalah ayahku.
- She is **my mother**. — Dia adalah ibuku.
- They are **my parents**. — Mereka adalah orang tuaku.
- This is **my sister**. — Ini adalah saudara perempuanku.
- My grandfather is a **farmer**. — Kakekku adalah seorang petani.

## 2. Pekerjaan (Jobs)

Ini pekerjaan yang paling sering ditanyakan saat kenalan — *"What is your job?"* (Apa pekerjaanmu?) atau *"What do you do?"* (Kamu kerja apa?):

| English | Dibaca | Arti |
|---------|--------|------|
| teacher | ti-cer | guru |
| student | stu-dnt | murid / pelajar |
| doctor | dok-ter | dokter |
| nurse | ners | perawat |
| driver | drai-ver | sopir |
| farmer | far-mer | petani |
| cook | kuk | juru masak / koki |
| seller | se-ler | penjual |
| police officer | po-lis o-fi-ser | polisi |
| engineer | en-ji-nir | insinyur / teknisi |
| worker | wor-ker | pekerja / buruh |
| housewife | haus-waif | ibu rumah tangga |
| businessman | biz-nes-man | pengusaha (laki-laki) |
| businesswoman | biz-nes-wu-man | pengusaha (perempuan) |

Pasangkan dengan *to be* — *a* (seorang) selalu dipakai sebelum nama pekerjaan:

- I am **a teacher**. — Saya adalah seorang guru.
- She is **a nurse**. — Dia (perempuan) adalah seorang perawat.
- He is **a driver**. — Dia (laki-laki) adalah seorang sopir.
- My brother is **a student**. — Saudara laki-lakiku adalah seorang murid.
- Are you **a doctor**? — Apakah kamu seorang dokter?
- No, I'm **a cook**. — Tidak, saya seorang juru masak.

Ingat: *a* dipakai kalau bendanya satu dan bisa dihitung. "I am teacher" itu salah — harus "I am **a** teacher".

## 3. Makanan & minuman (Food & drinks)

Kosakata ini kamu pakai setiap kali makan, belanja, atau memesan di warung:

| English | Dibaca | Arti |
|---------|--------|------|
| rice | rais | nasi |
| bread | bred | roti |
| egg | eg | telur |
| chicken | ci-ken | ayam |
| fish | fisy | ikan |
| meat | mit | daging |
| vegetable | vej-te-bel | sayur |
| fruit | frut | buah |
| water | wo-ter | air |
| coffee | ko-fi | kopi |
| tea | ti | teh |
| milk | milk | susu |
| sugar | syu-ger | gula |
| salt | solt | garam |

Kalimat yang langsung bisa dipakai:

- I like **rice and chicken**. — Saya suka nasi dan ayam.
- This is **coffee**. — Ini adalah kopi.
- Do you like **tea**? — Apakah kamu suka teh?
- Yes, I like **tea**. — Ya, saya suka teh.
- **Water**, please. — Air, tolong. (kalimat pendek yang dipakai saat memesan)

Kata *like* (suka) dan *please* (tolong) akan kita bahas lebih dalam di pelajaran berikut — untuk sekarang, hafal saja bentuknya.

## 4. Gabungkan semuanya

Sekarang rangkai tiga kelompok kata tadi dalam satu cerita pendek:

> My name is Andi. I am a student. My father is a farmer and my mother is a housewife. I have one brother and one sister. My brother is a driver. In the morning, I eat rice and egg. I drink tea. My family is happy.

Artinya: Nama saya Andi. Saya seorang murid. Ayah saya seorang petani dan ibu saya seorang ibu rumah tangga. Saya punya satu saudara laki-laki dan satu saudara perempuan. Saudara laki-laki saya seorang sopir. Di pagi hari, saya makan nasi dan telur. Saya minum teh. Keluarga saya bahagia.

Kamu bisa mengganti nama, pekerjaan, dan makanannya dengan milikmu sendiri — polanya sama.

## Contoh kalimat

- She is my sister. — Dia adalah saudara perempuanku.
- My father is a teacher. — Ayahku adalah seorang guru.
- They are my parents. — Mereka adalah orang tuaku.
- I am a student. — Saya adalah seorang murid.
- This is my grandfather. — Ini adalah kakekku.
- I like rice and fish. — Saya suka nasi dan ikan.
- Do you like coffee? — Apakah kamu suka kopi?
- Water, please. — Air, tolong.

## Latihan hari ini (5 menit)

Tulis atau ucapkan 5 kalimat tentang dirimu, pakai pola dari pelajaran ini:

1. Sebutkan ayahmu dan pekerjaannya. (Contoh: My father is a farmer.)
2. Sebutkan ibumu dan pekerjaannya.
3. Sebutkan satu saudara (brother / sister) dan pekerjaannya — atau tulis "I have no brother" (Saya tidak punya saudara laki-laki) kalau tidak ada.
4. Sebutkan satu makanan kesukaanmu: I like ___.
5. Sebutkan satu minuman kesukaanmu: I like ___.

**Contoh jawaban:** 1. My father is a driver. 2. My mother is a housewife. 3. My sister is a student. 4. I like rice and chicken. 5. I like tea.

## Kamus

### Keluarga

| English | Cara baca | Arti |
|---------|-----------|------|
| father | fa-dher | ayah |
| mother | ma-dher | ibu |
| parents | pe-rents | orang tua |
| brother | bra-dher | kakak / adik laki-laki |
| sister | sis-ter | kakak / adik perempuan |
| son | san | anak laki-laki |
| daughter | do-ter | anak perempuan |
| child | caild | anak (satu) |
| children | cil-dren | anak-anak (banyak) |
| husband | has-band | suami |
| wife | waif | istri |
| grandfather | gren-fa-dher | kakek |
| grandmother | gren-ma-dher | nenek |
| grandparents | gren-pe-rents | kakek-nenek |
| baby | bei-bi | bayi |
| my | mai | saya punya / milikku |
| older | ol-der | lebih tua |
| younger | yang-ger | lebih muda |
| family | fe-mi-li | keluarga |
| happy | he-pi | bahagia |

### Pekerjaan

| English | Cara baca | Arti |
|---------|-----------|------|
| teacher | ti-cer | guru |
| student | stu-dnt | murid / pelajar |
| doctor | dok-ter | dokter |
| nurse | ners | perawat |
| driver | drai-ver | sopir |
| farmer | far-mer | petani |
| cook | kuk | juru masak / koki |
| seller | se-ler | penjual |
| police officer | po-lis o-fi-ser | polisi |
| engineer | en-ji-nir | insinyur / teknisi |
| worker | wor-ker | pekerja / buruh |
| housewife | haus-waif | ibu rumah tangga |
| businessman | biz-nes-man | pengusaha (laki-laki) |
| businesswoman | biz-nes-wu-man | pengusaha (perempuan) |
| job | job | pekerjaan |

### Makanan & minuman

| English | Cara baca | Arti |
|---------|-----------|------|
| rice | rais | nasi |
| bread | bred | roti |
| egg | eg | telur |
| chicken | ci-ken | ayam |
| fish | fisy | ikan |
| meat | mit | daging |
| vegetable | vej-te-bel | sayur |
| fruit | frut | buah |
| water | wo-ter | air |
| coffee | ko-fi | kopi |
| tea | ti | teh |
| milk | milk | susu |
| sugar | syu-ger | gula |
| salt | solt | garam |
| food | fud | makanan |
| drinks | drinks | minuman |
| like | laik | suka |
| please | pliis | tolong |

### Contoh kalimat

| English | Arti |
|---------|------|
| He is my father. | Dia adalah ayahku. |
| They are my parents. | Mereka adalah orang tuaku. |
| My father is a teacher. | Ayahku adalah seorang guru. |
| I am a student. | Saya adalah seorang murid. |
| I like rice and fish. | Saya suka nasi dan ikan. |
| Do you like coffee? | Apakah kamu suka kopi? |
| Water, please. | Air, tolong. |
`,zl=`---
lang: fr
number: 1
date: 2026-11-10
title: Alfabet & Pelafalan Dasar
subtitle: Huruf, aksen, bunyi nasal & liaison
keywords: alfabet alphabet pelafalan pronunciation aksen nasal liaison e muet
---

Bonjour! Selamat datang di pelajaran bahasa Prancis pertamamu. Sebelum belajar kata dan kalimat, kita kenali dulu "bunyi" bahasa Prancis. Kabar baiknya: alfabet Prancis sama dengan alfabet Indonesia (A–Z), tapi beberapa huruf dibaca beda. Sekali paham polanya, membaca bahasa Prancis jadi jauh lebih mudah.

## 1. Huruf yang dibaca beda dari tulisannya

- e di akhir kata → tidak dibunyi (e muet): le = "luh" — "si / itu", je = "zhuh" — "saya"
- h di awal kata → tidak dibunyi: homme = "omm" — "pria", hôtel = "otel" — "hotel"
- s di akhir kata → biasanya tidak dibunyi: les = "le" — "para", Paris = "Pa-RI" — "Paris"
- -ent di akhir kata kerja → tidak dibunyi: ils parlent = "il parl" — "mereka berbicara"

## 2. Aksen: tanda kecil yang mengubah bunyi

- é → bunyi "e" terbuka: café = "ka-FE" — "kopi; kedai kopi"
- è / ê → bunyi "e" seperti "bebek": père = "per" — "ayah"
- ç → bunyi "s": français = "fran-SE" — "bahasa Prancis", garçon = "gar-SON" — "anak laki-laki; pelayan"

## 3. Bunyi nasal: an, en, in, on

- an/en → seperti "ong": enfant = "ong-FONG" — "anak", dans = "dong" — "di dalam"
- in → seperti "eng": vin = "veng" — "anggur", matin = "ma-TENG" — "pagi"
- on → seperti "ong" bulat: bonjour = "bong-ZHUR" — "halo; selamat pagi", maison = "me-ZONG" — "rumah"

## 4. Liaison: kata yang menyambung

- les amis = "le-za-MI" — "teman-teman" — s pada les hidup dan menyambung
- nous avons = "nu-za-VONG" — "kami punya; kami memiliki"

## Contoh kalimat

- Bonjour ! = "bong-ZHUR" — Halo!
- Je m'appelle Marie. = "zhuh ma-PEL ma-RI" — Nama saya Marie.
- Merci beaucoup ! = "mer-SI bo-KU" — Terima kasih banyak!
- Le café est bon. = "luh ka-FE e bong" — Kopinya enak.

## Latihan hari ini (5 menit)

Bacalah keras-keras 3x, lalu tulis cara bacanya:

1. français — bahasa Prancis
2. enfant — anak
3. bonjour — halo
4. les amis — teman-teman
5. merci — terima kasih

**Jawaban:** 1. fran-SE — bahasa Prancis · 2. ong-FONG — anak · 3. bong-ZHUR — halo · 4. le-za-MI — teman-teman · 5. mer-SI — terima kasih

## Kamus

| Kata | Cara baca | Arti |
|------|-----------|------|
| le | luh | si / itu (artikel maskulin) |
| je | zhuh | saya |
| homme | omm | pria |
| hôtel | otel | hotel |
| les | le | para (artikel jamak) |
| Paris | Pa-RI | Paris |
| ils parlent | il parl | mereka berbicara |
| café | ka-FE | kopi; kedai kopi |
| père | per | ayah |
| français | fran-SE | bahasa Prancis |
| garçon | gar-SON | anak laki-laki; pelayan |
| enfant | ong-FONG | anak |
| dans | dong | di dalam |
| vin | veng | anggur |
| matin | ma-TENG | pagi |
| bonjour | bong-ZHUR | halo; selamat pagi |
| maison | me-ZONG | rumah |
| les amis | le-za-MI | teman-teman |
| nous avons | nu-za-VONG | kami punya; kami memiliki |
| Je m'appelle Marie. | zhuh ma-PEL ma-RI | Nama saya Marie. |
| Merci beaucoup ! | mer-SI bo-KU | Terima kasih banyak! |
| Le café est bon. | luh ka-FE e bong | Kopinya enak. |
| merci | mer-SI | terima kasih |
`,Hl=`---
lang: fr
number: 2
date: 2026-11-11
title: Sapaan & Perkenalan
subtitle: Bonjour, je m'appelle… & cara menyapa dengan sopan
keywords: sapaan greetings perkenalan introduction bonjour salut enchanté comment ça va tu vous
---

Bonjour! Kemarin kita sudah belajar bunyi-bunyi bahasa Prancis. Hari ini kita pakai bunyi itu untuk hal paling penting: menyapa orang dan memperkenalkan diri. Dengan lima kalimat saja, kamu sudah bisa membuka percakapan dalam bahasa Prancis.

## 1. Menyapa: bonjour, salut, bonsoir

- Bonjour ! = "bong-ZHUR" — Halo! / Selamat pagi (dipakai dari pagi sampai sore)
- Salut ! = "sa-LU" — Hai! (santai, untuk teman sebaya)
- Bonsoir ! = "bong-SWAR" — Selamat malam (dipakai sore menjelang malam, saat bertemu orang)
- Bonne nuit ! = "bon NUI" — Selamat tidur (dipakai saat berpisah di malam hari, sebelum tidur)

Analogi sederhananya: bonjour itu seperti "selamat pagi" yang bisa dipakai seharian sampai sore, sedangkan salut itu seperti "hai" — jangan dipakai ke orang yang lebih tua atau dalam situasi formal.

## 2. Bertanya kabar: comment ça va ?

- Comment ça va ? = "ko-mong sa VA" — Apa kabar?
- Ça va bien, merci. = "sa va byeng, mer-SI" — Kabar baik, terima kasih.
- Et toi ? = "e TWA" — Kalau kamu? (santai)
- Et vous ? = "e VU" — Kalau Anda? (formal)

Percakapan mini:

— Bonjour ! Comment ça va ? = "bong-ZHUR! ko-mong sa VA?" — Halo! Apa kabar?
— Ça va bien, merci. Et toi ? = "sa va byeng, mer-SI. e TWA?" — Kabar baik, terima kasih. Kalau kamu?
— Ça va bien aussi. = "sa va byeng o-SI" — Kabar baik juga.

## 3. Tu dan vous: kamu yang sopan vs yang santai

Bahasa Prancis punya dua kata untuk "kamu": tu (santai, untuk teman, anak-anak, keluarga) dan vous (sopan, untuk orang yang lebih tua, orang baru, atau situasi formal). Kalau ragu, pakai vous dulu — lebih aman dan sopan.

- Tu t'appelles comment ? = "tu ta-PEL ko-mong" — Siapa namamu? (santai)
- Vous vous appelez comment ? = "vu vu-za-ple ko-mong" — Siapa nama Anda? (formal)

## 4. Memperkenalkan diri: je m'appelle…

- Je m'appelle Marie. = "zhuh ma-PEL ma-RI" — Nama saya Marie.
- Enchanté ! = "ong-shong-TE" — Senang berkenalan! (diucapkan pria)
- Enchantée ! = "ong-shong-TE" — Senang berkenalan! (diucapkan wanita)
- Je suis indonésien. = "zhuh sui zeng-do-ne-ZYENG" — Saya orang Indonesia. (pria)
- Je suis indonésienne. = "zhuh sui zeng-do-ne-ZYEN" — Saya orang Indonesia. (wanita)
- Je viens d'Indonésie. = "zhuh vyeng deng-do-ne-ZI" — Saya berasal dari Indonesia.

Percakapan mini:

— Bonjour ! Je m'appelle Marie. = "bong-ZHUR! zhuh ma-PEL ma-RI" — Halo! Nama saya Marie.
— Enchanté ! Je m'appelle Paul. = "ong-shong-TE! zhuh ma-PEL POL" — Senang berkenalan! Nama saya Paul.
— Tu es d'où ? = "tu e DU" — Kamu dari mana?
— Je viens de France. = "zhuh vyeng duh FRONSS" — Saya dari Prancis.

## 5. Berpamitan: au revoir & à bientôt

- Au revoir ! = "o ruh-VWAR" — Sampai jumpa! (pamitan umum)
- À bientôt ! = "a byeng-TO" — Sampai bertemu lagi segera!
- À demain ! = "a duh-MENG" — Sampai besok!
- Merci ! = "mer-SI" — Terima kasih!
- De rien ! = "duh RYENG" — Sama-sama!
- S'il vous plaît ! = "sil vu PLE" — Tolong! (formal, "mohon")
- S'il te plaît ! = "sil tuh PLE" — Tolong! (santai)

## Contoh kalimat

- Bonjour ! Comment ça va ? = "bong-ZHUR! ko-mong sa VA?" — Halo! Apa kabar?
- Je m'appelle Marie, enchantée ! = "zhuh ma-PEL ma-RI, ong-shong-TE!" — Nama saya Marie, senang berkenalan!
- Salut ! Tu t'appelles comment ? = "sa-LU! tu ta-PEL ko-mong?" — Hai! Siapa namamu?
- Au revoir ! À bientôt ! = "o ruh-VWAR! a byeng-TO!" — Sampai jumpa! Sampai bertemu lagi!

## Latihan hari ini (5 menit)

Perkenalkan dirimu dengan suara keras, tiga kali, ganti namamu sendiri:

1. Bonjour ! Je m'appelle [namamu]. — Halo! Nama saya [namamu].
2. Enchanté(e) ! — Senang berkenalan! (pria: enchanté, wanita: enchantée)
3. Je viens d'Indonésie. — Saya berasal dari Indonesia.
4. Au revoir ! À bientôt ! — Sampai jumpa! Sampai bertemu lagi!

**Jawaban contoh:** Bonjour ! Je m'appelle Budi. Enchanté ! Je viens d'Indonésie. Au revoir ! À bientôt !

## Kamus

| Kata | Cara baca | Arti |
|------|-----------|------|
| bonjour | bong-ZHUR | halo; selamat pagi (sampai sore) |
| salut | sa-LU | hai (santai) |
| bonsoir | bong-SWAR | selamat malam (saat bertemu) |
| bonne nuit | bon NUI | selamat tidur |
| Comment ça va ? | ko-mong sa VA | Apa kabar? |
| Ça va bien, merci. | sa va byeng, mer-SI | Kabar baik, terima kasih. |
| Et toi ? | e TWA | Kalau kamu? (santai) |
| Et vous ? | e VU | Kalau Anda? (formal) |
| tu | tu | kamu (santai) |
| vous | vu | Anda; kamu (formal/jamak) |
| Je m'appelle… | zhuh ma-PEL | Nama saya… |
| Enchanté ! | ong-shong-TE | Senang berkenalan! (pria) |
| Enchantée ! | ong-shong-TE | Senang berkenalan! (wanita) |
| Je suis indonésien. | zhuh sui zeng-do-ne-ZYENG | Saya orang Indonesia. (pria) |
| Je suis indonésienne. | zhuh sui zeng-do-ne-ZYEN | Saya orang Indonesia. (wanita) |
| Je viens d'Indonésie. | zhuh vyeng deng-do-ne-ZI | Saya berasal dari Indonesia. |
| Tu es d'où ? | tu e DU | Kamu dari mana? |
| Je viens de France. | zhuh vyeng duh FRONSS | Saya dari Prancis. |
| Au revoir ! | o ruh-VWAR | Sampai jumpa! |
| À bientôt ! | a byeng-TO | Sampai bertemu lagi segera! |
| À demain ! | a duh-MENG | Sampai besok! |
| Merci ! | mer-SI | Terima kasih! |
| De rien ! | duh RYENG | Sama-sama! |
| S'il vous plaît ! | sil vu PLE | Tolong! (formal) |
| S'il te plaît ! | sil tuh PLE | Tolong! (santai) |
`,Fl=`---
lang: fr
number: 3
date: 2026-11-12
title: Angka, Hari, dan Waktu
subtitle: Berhitung 0–100, nama hari, & cara menanyakan jam
keywords: angka numbers hari days waktu time jam heure lundi mardi vingt
---

Bonjour! Kemarin kamu sudah bisa menyapa dan memperkenalkan diri. Hari ini kita belajar tiga hal yang dipakai setiap hari: berhitung, menyebut hari, dan menanyakan jam. Setelah pelajaran ini, kamu bisa menghitung 0–100, tahu hari ini hari apa, dan bertanya "jam berapa sekarang?" dalam bahasa Prancis.

## 1. Angka 0–20: hafalkan dulu yang ini

Angka 0 sampai 20 harus dihafal, karena angka yang lebih besar tinggal merangkai dari sini:

| Angka | Prancis | Cara baca | Angka | Prancis | Cara baca |
|-------|---------|-----------|-------|---------|-----------|
| 0 | zéro | ze-RO | 11 | onze | ONGZ |
| 1 | un | ENG | 12 | douze | DUZ |
| 2 | deux | DÖ | 13 | treize | TREZ |
| 3 | trois | TRWA | 14 | quatorze | ka-TORZ |
| 4 | quatre | KATR | 15 | quinze | KENGZ |
| 5 | cinq | SENGK | 16 | seize | SEZ |
| 6 | six | SIS | 17 | dix-sept | di-SET |
| 7 | sept | SET | 18 | dix-huit | di-ZUIT |
| 8 | huit | WIT | 19 | dix-neuf | diz-NÖF |
| 9 | neuf | NÖF | 20 | vingt | VENG |
| 10 | dix | DIS | | | |

Perhatikan tiga jebakan pelafalan:

- Six (enam) dibaca "sis" — huruf x-nya berbunyi seperti s.
- Dix (sepuluh) dibaca "dis" — x-nya juga berbunyi s.
- Vingt (dua puluh) dibaca "veng" — huruf g dan t di akhir tidak dibaca.

Angka 17, 18, 19 gampang diingat karena tinggal "sepuluh + angka": dix-sept (sepuluh-tujuh = tujuh belas), dix-huit (delapan belas), dix-neuf (sembilan belas).

## 2. Puluhan: 30, 40, 50, 60, 100

- 30 = trente = "TRONGT"
- 40 = quarante = "ka-RONGT"
- 50 = cinquante = "seng-KONGT"
- 60 = soixante = "swa-SONT"
- 100 = cent = "SONG"

Angka di antaranya tinggal disambung dengan tanda hubung: 21 = vingt et un ("veng te ENG", dua puluh satu — yang ini pakai kata et = "dan"), 22 = vingt-deux ("veng-DÖ"), 35 = trente-cinq ("trongt-SENGK"), 47 = quarante-sept ("ka-rongt-SET").

Satu catatan lucu: orang Prancis menghitung 70 sebagai soixante-dix ("swa-sont-DIS", enam puluh-sepuluh = 70) dan 80 sebagai quatre-vingts ("katr-VENG", empat-dua puluh = 80). Aneh? Iya, tapi justru itu ciri khasnya — kamu tidak perlu menghafalnya sekarang, cukup tahu bahwa pola ini ada.

## 3. Hari dalam seminggu

- lundi = "long-DI" — Senin
- mardi = "mar-DI" — Selasa
- mercredi = "mair-kruh-DI" — Rabu
- jeudi = "zhö-DI" — Kamis
- vendredi = "vong-druh-DI" — Jumat
- samedi = "sam-DI" — Sabtu
- dimanche = "di-MONGSH" — Minggu

Dua hal penting tentang hari dalam bahasa Prancis:

1. **Tidak pakai huruf besar.** Berbeda dengan bahasa Inggris, hari dalam bahasa Prancis ditulis huruf kecil semua: lundi, bukan Lundi.
2. **Semuanya maskulin** (jenis kelamin kata benda laki-laki — akan kita bahas di pelajaran artikel nanti). Jadi "hari Senin" adalah le lundi.

Tiga kata waktu yang sering dipakai bersama hari:

- aujourd'hui = "o-zhur-DUI" — hari ini
- demain = "duh-MENG" — besok
- hier = "YER" — kemarin

Contoh:

- Aujourd'hui, c'est jeudi. = "o-zhur-DUI, se zhÖ-DI" — Hari ini hari Kamis.
- Demain, c'est vendredi. = "duh-MENG, se vong-druh-DI" — Besok hari Jumat.
- Hier, c'était mercredi. = "YER, se-TE mair-kruh-DI" — Kemarin hari Rabu.

## 4. Menanyakan dan menyebut jam

Kalimat kuncinya:

- Quelle heure est-il ? = "kel ÖR e-TIL?" — Jam berapa sekarang?
- Il est trois heures. = "i-LE trwaz ÖR" — Sekarang jam tiga.

Kata heure = "ÖR" artinya "jam" (satuan waktu), dan heures adalah bentuk jamaknya. Perhatikan: karena liaison (penyambungan bunyi, dari pelajaran #1), trois heures dibaca "trwaz-ÖR" — huruf s di trois berbunyi z karena bertemu huruf vokal.

Jam-jam khusus:

- Il est midi. = "i-LE mi-DI" — Sekarang tengah hari (jam 12 siang).
- Il est minuit. = "i-LE mi-NUI" — Sekarang tengah malam (jam 12 malam).
- Il est une heure. = "i-LE un ÖR" — Sekarang jam satu. (Jam satu pakai une, bukan un, karena heure adalah kata benda feminin — perempuan.)
- Il est huit heures et demie. = "i-LE wit ÖR e duh-MI" — Sekarang jam delapan lewat tiga puluh menit (setengah sembilan).
- Il est deux heures et quart. = "i-LE dö-ZÖR e KAR" — Sekarang jam dua lewat lima belas menit (seperempat).
- Il est trois heures moins le quart. = "i-LE trwaz-ÖR mweng luh KAR" — Sekarang jam tiga kurang lima belas menit (jam 14.45).

Rumusnya sederhana: **Il est + [angka] + heures**, lalu tambah et demie (lewat 30 menit), et quart (lewat 15 menit), atau moins le quart (kurang 15 menit).

## Contoh kalimat

- J'ai vingt ans. = "zhe VENG-TONG" — Saya berumur dua puluh tahun. (J'ai = "saya punya", ans = "tahun")
- Il est neuf heures. = "i-LE NÖ-VÖR" — Sekarang jam sembilan.
- Aujourd'hui, c'est jeudi. = "o-zhur-DUI, se zhÖ-DI" — Hari ini hari Kamis.
- Demain, c'est vendredi. = "duh-MENG, se vong-druh-DI" — Besok hari Jumat.
- Quelle heure est-il ? Il est midi. = "kel ÖR e-TIL? i-LE mi-DI" — Jam berapa sekarang? Sekarang tengah hari.

## Latihan hari ini (5 menit)

Lakukan tiga hal ini, semuanya dengan suara keras:

1. Hitung 0 sampai 20 dalam bahasa Prancis, dari zéro sampai vingt. Ulangi dua kali.
2. Lihat jam sekarang, lalu ucapkan dalam bahasa Prancis: "Il est … heures." (Contoh: kalau jam 7 pagi, ucapkan "Il est sept heures.")
3. Ucapkan hari ini dan besok: "Aujourd'hui, c'est jeudi. Demain, c'est vendredi."

**Jawaban contoh (pukul 07.00, Kamis 12 November):** Zéro, un, deux, trois… vingt. Il est sept heures. Aujourd'hui, c'est jeudi. Demain, c'est vendredi.

## Kamus

| Kata | Cara baca | Arti |
|------|-----------|------|
| zéro | ze-RO | nol |
| un | ENG | satu |
| deux | DÖ | dua |
| trois | TRWA | tiga |
| quatre | KATR | empat |
| cinq | SENGK | lima |
| six | SIS | enam |
| sept | SET | tujuh |
| huit | WIT | delapan |
| neuf | NÖF | sembilan |
| dix | DIS | sepuluh |
| onze | ONGZ | sebelas |
| douze | DUZ | dua belas |
| treize | TREZ | tiga belas |
| quatorze | ka-TORZ | empat belas |
| quinze | KENGZ | lima belas |
| seize | SEZ | enam belas |
| dix-sept | di-SET | tujuh belas |
| dix-huit | di-ZUIT | delapan belas |
| dix-neuf | diz-NÖF | sembilan belas |
| vingt | VENG | dua puluh |
| trente | TRONGT | tiga puluh |
| quarante | ka-RONGT | empat puluh |
| cinquante | seng-KONGT | lima puluh |
| soixante | swa-SONT | enam puluh |
| cent | SONG | seratus |
| et | e | dan |
| lundi | long-DI | Senin |
| mardi | mar-DI | Selasa |
| mercredi | mair-kruh-DI | Rabu |
| jeudi | zhÖ-DI | Kamis |
| vendredi | vong-druh-DI | Jumat |
| samedi | sam-DI | Sabtu |
| dimanche | di-MONGSH | Minggu |
| aujourd'hui | o-zhur-DUI | hari ini |
| demain | duh-MENG | besok |
| hier | YER | kemarin |
| Quelle heure est-il ? | kel ÖR e-TIL | Jam berapa sekarang? |
| Il est … heures. | i-LE … ÖR | Sekarang jam … |
| heure | ÖR | jam (satuan waktu) |
| midi | mi-DI | tengah hari (jam 12 siang) |
| minuit | mi-NUI | tengah malam (jam 12 malam) |
| et demie | e duh-MI | lewat tiga puluh menit |
| et quart | e KAR | lewat lima belas menit |
| moins le quart | mweng luh KAR | kurang lima belas menit |
| ans | ONG | tahun (jamak) |
| J'ai vingt ans. | zhe VENG-TONG | Saya berumur dua puluh tahun. |
`;function Hi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jn=Hi();function gr(n){jn=n}var le={exec:()=>null};function E(n,a=""){let e=typeof n=="string"?n:n.source;const i={replace:(t,r)=>{let l=typeof r=="string"?r:r.source;return l=l.replace(ia.caret,"$1"),e=e.replace(t,l),i},getRegex:()=>new RegExp(e,a)};return i}var ia={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},$l=/^(?:[ \t]*(?:\n|$))+/,Ol=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Wl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ve=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Gl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Fi=/(?:[*+-]|\d{1,9}[.)])/,cr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,fr=E(cr).replace(/bull/g,Fi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Jl=E(cr).replace(/bull/g,Fi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),$i=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ql=/^[^\n]+/,Oi=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ul=E(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Oi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Zl=E(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Fi).getRegex(),Ze="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Vl=E("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Wi).replace("tag",Ze).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),br=E($i).replace("hr",ve).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Yl=E(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",br).getRegex(),Gi={blockquote:Yl,code:Ol,def:Ul,fences:Wl,heading:Gl,hr:ve,html:Vl,lheading:fr,list:Zl,newline:$l,paragraph:br,table:le,text:ql},ht=E("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ve).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Xl={...Gi,lheading:Jl,table:ht,paragraph:E($i).replace("hr",ve).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ht).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex()},Ql={...Gi,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:le,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E($i).replace("hr",ve).replace("heading",` *#{1,6} *[^
]`).replace("lheading",fr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},au=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nu=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,yr=/^( {2,}|\\)\n(?!\s*$)/,eu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ve=/[\p{P}\p{S}]/u,Ji=/[\s\p{P}\p{S}]/u,vr=/[^\s\p{P}\p{S}]/u,iu=E(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ji).getRegex(),wr=/(?!~)[\p{P}\p{S}]/u,tu=/(?!~)[\s\p{P}\p{S}]/u,ru=/(?:[^\s\p{P}\p{S}]|~)/u,su=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,_r=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,lu=E(_r,"u").replace(/punct/g,Ve).getRegex(),uu=E(_r,"u").replace(/punct/g,wr).getRegex(),jr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ou=E(jr,"gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,Ji).replace(/punct/g,Ve).getRegex(),du=E(jr,"gu").replace(/notPunctSpace/g,ru).replace(/punctSpace/g,tu).replace(/punct/g,wr).getRegex(),mu=E("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,Ji).replace(/punct/g,Ve).getRegex(),ku=E(/\\(punct)/,"gu").replace(/punct/g,Ve).getRegex(),hu=E(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),pu=E(Wi).replace("(?:-->|$)","-->").getRegex(),gu=E("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",pu).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),He=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,cu=E(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",He).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sr=E(/^!?\[(label)\]\[(ref)\]/).replace("label",He).replace("ref",Oi).getRegex(),xr=E(/^!?\[(ref)\](?:\[\])?/).replace("ref",Oi).getRegex(),fu=E("reflink|nolink(?!\\()","g").replace("reflink",Sr).replace("nolink",xr).getRegex(),qi={_backpedal:le,anyPunctuation:ku,autolink:hu,blockSkip:su,br:yr,code:nu,del:le,emStrongLDelim:lu,emStrongRDelimAst:ou,emStrongRDelimUnd:mu,escape:au,link:cu,nolink:xr,punctuation:iu,reflink:Sr,reflinkSearch:fu,tag:gu,text:eu,url:le},bu={...qi,link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",He).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",He).getRegex()},ji={...qi,emStrongRDelimAst:du,emStrongLDelim:uu,url:E(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},yu={...ji,br:E(yr).replace("{2,}","*").getRegex(),text:E(ji.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Te={normal:Gi,gfm:Xl,pedantic:Ql},Jn={normal:qi,gfm:ji,breaks:yu,pedantic:bu},vu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pt=n=>vu[n];function Ca(n,a){if(a){if(ia.escapeTest.test(n))return n.replace(ia.escapeReplace,pt)}else if(ia.escapeTestNoEncode.test(n))return n.replace(ia.escapeReplaceNoEncode,pt);return n}function gt(n){try{n=encodeURI(n).replace(ia.percentDecode,"%")}catch{return null}return n}function ct(n,a){var r;const e=n.replace(ia.findPipe,(l,s,o)=>{let u=!1,d=s;for(;--d>=0&&o[d]==="\\";)u=!u;return u?"|":" |"}),i=e.split(ia.splitPipe);let t=0;if(i[0].trim()||i.shift(),i.length>0&&!((r=i.at(-1))!=null&&r.trim())&&i.pop(),a)if(i.length>a)i.splice(a);else for(;i.length<a;)i.push("");for(;t<i.length;t++)i[t]=i[t].trim().replace(ia.slashPipe,"|");return i}function qn(n,a,e){const i=n.length;if(i===0)return"";let t=0;for(;t<i&&n.charAt(i-t-1)===a;)t++;return n.slice(0,i-t)}function wu(n,a){if(n.indexOf(a[1])===-1)return-1;let e=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===a[0])e++;else if(n[i]===a[1]&&(e--,e<0))return i;return e>0?-2:-1}function ft(n,a,e,i,t){const r=a.href,l=a.title||null,s=n[1].replace(t.other.outputLinkReplace,"$1");i.state.inLink=!0;const o={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:r,title:l,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,o}function _u(n,a,e){const i=n.match(e.other.indentCodeCompensation);if(i===null)return a;const t=i[1];return a.split(`
`).map(r=>{const l=r.match(e.other.beginningSpace);if(l===null)return r;const[s]=l;return s.length>=t.length?r.slice(t.length):r}).join(`
`)}var Fe=class{constructor(n){_(this,"options");_(this,"rules");_(this,"lexer");this.options=n||jn}space(n){const a=this.rules.block.newline.exec(n);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(n){const a=this.rules.block.code.exec(n);if(a){const e=a[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?e:qn(e,`
`)}}}fences(n){const a=this.rules.block.fences.exec(n);if(a){const e=a[0],i=_u(e,a[3]||"",this.rules);return{type:"code",raw:e,lang:a[2]?a[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):a[2],text:i}}}heading(n){const a=this.rules.block.heading.exec(n);if(a){let e=a[2].trim();if(this.rules.other.endingHash.test(e)){const i=qn(e,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(e=i.trim())}return{type:"heading",raw:a[0],depth:a[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const a=this.rules.block.hr.exec(n);if(a)return{type:"hr",raw:qn(a[0],`
`)}}blockquote(n){const a=this.rules.block.blockquote.exec(n);if(a){let e=qn(a[0],`
`).split(`
`),i="",t="";const r=[];for(;e.length>0;){let l=!1;const s=[];let o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))s.push(e[o]),l=!0;else if(!l)s.push(e[o]);else break;e=e.slice(o);const u=s.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${u}`:u,t=t?`${t}
${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,r,!0),this.lexer.state.top=h,e.length===0)break;const k=r.at(-1);if((k==null?void 0:k.type)==="code")break;if((k==null?void 0:k.type)==="blockquote"){const p=k,g=p.raw+`
`+e.join(`
`),b=this.blockquote(g);r[r.length-1]=b,i=i.substring(0,i.length-p.raw.length)+b.raw,t=t.substring(0,t.length-p.text.length)+b.text;break}else if((k==null?void 0:k.type)==="list"){const p=k,g=p.raw+`
`+e.join(`
`),b=this.list(g);r[r.length-1]=b,i=i.substring(0,i.length-k.raw.length)+b.raw,t=t.substring(0,t.length-p.raw.length)+b.raw,e=g.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:r,text:t}}}list(n){let a=this.rules.block.list.exec(n);if(a){let e=a[1].trim();const i=e.length>1,t={type:"list",raw:"",ordered:i,start:i?+e.slice(0,-1):"",loose:!1,items:[]};e=i?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=i?e:"[*+-]");const r=this.rules.other.listItemRegex(e);let l=!1;for(;n;){let o=!1,u="",d="";if(!(a=r.exec(n))||this.rules.block.hr.test(n))break;u=a[0],n=n.substring(u.length);let h=a[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),k=n.split(`
`,1)[0],p=!h.trim(),g=0;if(this.options.pedantic?(g=2,d=h.trimStart()):p?g=a[1].length+1:(g=a[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,d=h.slice(g),g+=a[1].length),p&&this.rules.other.blankLine.test(k)&&(u+=k+`
`,n=n.substring(k.length+1),o=!0),!o){const y=this.rules.other.nextBulletRegex(g),N=this.rules.other.hrRegex(g),C=this.rules.other.fencesBeginRegex(g),B=this.rules.other.headingBeginRegex(g),O=this.rules.other.htmlBeginRegex(g);for(;n;){const X=n.split(`
`,1)[0];let K;if(k=X,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),K=k):K=k.replace(this.rules.other.tabCharGlobal,"    "),C.test(k)||B.test(k)||O.test(k)||y.test(k)||N.test(k))break;if(K.search(this.rules.other.nonSpaceChar)>=g||!k.trim())d+=`
`+K.slice(g);else{if(p||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(h)||B.test(h)||N.test(h))break;d+=`
`+k}!p&&!k.trim()&&(p=!0),u+=X+`
`,n=n.substring(X.length+1),h=K.slice(g)}}t.loose||(l?t.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let b=null,c;this.options.gfm&&(b=this.rules.other.listIsTask.exec(d),b&&(c=b[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),t.items.push({type:"list_item",raw:u,task:!!b,checked:c,loose:!1,text:d,tokens:[]}),t.raw+=u}const s=t.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let o=0;o<t.items.length;o++)if(this.lexer.state.top=!1,t.items[o].tokens=this.lexer.blockTokens(t.items[o].text,[]),!t.loose){const u=t.items[o].tokens.filter(h=>h.type==="space"),d=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));t.loose=d}if(t.loose)for(let o=0;o<t.items.length;o++)t.items[o].loose=!0;return t}}html(n){const a=this.rules.block.html.exec(n);if(a)return{type:"html",block:!0,raw:a[0],pre:a[1]==="pre"||a[1]==="script"||a[1]==="style",text:a[0]}}def(n){const a=this.rules.block.def.exec(n);if(a){const e=a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=a[2]?a[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",t=a[3]?a[3].substring(1,a[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):a[3];return{type:"def",tag:e,raw:a[0],href:i,title:t}}}table(n){var l;const a=this.rules.block.table.exec(n);if(!a||!this.rules.other.tableDelimiter.test(a[2]))return;const e=ct(a[1]),i=a[2].replace(this.rules.other.tableAlignChars,"").split("|"),t=(l=a[3])!=null&&l.trim()?a[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:a[0],header:[],align:[],rows:[]};if(e.length===i.length){for(const s of i)this.rules.other.tableAlignRight.test(s)?r.align.push("right"):this.rules.other.tableAlignCenter.test(s)?r.align.push("center"):this.rules.other.tableAlignLeft.test(s)?r.align.push("left"):r.align.push(null);for(let s=0;s<e.length;s++)r.header.push({text:e[s],tokens:this.lexer.inline(e[s]),header:!0,align:r.align[s]});for(const s of t)r.rows.push(ct(s,r.header.length).map((o,u)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[u]})));return r}}lheading(n){const a=this.rules.block.lheading.exec(n);if(a)return{type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:this.lexer.inline(a[1])}}paragraph(n){const a=this.rules.block.paragraph.exec(n);if(a){const e=a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const a=this.rules.block.text.exec(n);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(n){const a=this.rules.inline.escape.exec(n);if(a)return{type:"escape",raw:a[0],text:a[1]}}tag(n){const a=this.rules.inline.tag.exec(n);if(a)return!this.lexer.state.inLink&&this.rules.other.startATag.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:a[0]}}link(n){const a=this.rules.inline.link.exec(n);if(a){const e=a[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const r=qn(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=wu(a[2],"()");if(r===-2)return;if(r>-1){const s=(a[0].indexOf("!")===0?5:4)+a[1].length+r;a[2]=a[2].substring(0,r),a[0]=a[0].substring(0,s).trim(),a[3]=""}}let i=a[2],t="";if(this.options.pedantic){const r=this.rules.other.pedanticHrefTitle.exec(i);r&&(i=r[1],t=r[3])}else t=a[3]?a[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i=i.slice(1):i=i.slice(1,-1)),ft(a,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:t&&t.replace(this.rules.inline.anyPunctuation,"$1")},a[0],this.lexer,this.rules)}}reflink(n,a){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){const i=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),t=a[i.toLowerCase()];if(!t){const r=e[0].charAt(0);return{type:"text",raw:r,text:r}}return ft(e,t,e[0],this.lexer,this.rules)}}emStrong(n,a,e=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!i||i[3]&&e.match(this.rules.other.unicodeAlphaNumeric))return;if(!(i[1]||i[2]||"")||!e||this.rules.inline.punctuation.exec(e)){const r=[...i[0]].length-1;let l,s,o=r,u=0;const d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,a=a.slice(-1*n.length+r);(i=d.exec(a))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(s=[...l].length,i[3]||i[4]){o+=s;continue}else if((i[5]||i[6])&&r%3&&!((r+s)%3)){u+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+u);const h=[...i[0]][0].length,k=n.slice(0,r+i.index+h+s);if(Math.min(r,s)%2){const g=k.slice(1,-1);return{type:"em",raw:k,text:g,tokens:this.lexer.inlineTokens(g)}}const p=k.slice(2,-2);return{type:"strong",raw:k,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(n){const a=this.rules.inline.code.exec(n);if(a){let e=a[2].replace(this.rules.other.newLineCharGlobal," ");const i=this.rules.other.nonSpaceChar.test(e),t=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&t&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:a[0],text:e}}}br(n){const a=this.rules.inline.br.exec(n);if(a)return{type:"br",raw:a[0]}}del(n){const a=this.rules.inline.del.exec(n);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2])}}autolink(n){const a=this.rules.inline.autolink.exec(n);if(a){let e,i;return a[2]==="@"?(e=a[1],i="mailto:"+e):(e=a[1],i=e),{type:"link",raw:a[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(n){var e;let a;if(a=this.rules.inline.url.exec(n)){let i,t;if(a[2]==="@")i=a[0],t="mailto:"+i;else{let r;do r=a[0],a[0]=((e=this.rules.inline._backpedal.exec(a[0]))==null?void 0:e[0])??"";while(r!==a[0]);i=a[0],a[1]==="www."?t="http://"+a[0]:t=a[0]}return{type:"link",raw:a[0],text:i,href:t,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n){const a=this.rules.inline.text.exec(n);if(a){const e=this.lexer.state.inRawBlock;return{type:"text",raw:a[0],text:a[0],escaped:e}}}},Ya=class Si{constructor(a){_(this,"tokens");_(this,"options");_(this,"state");_(this,"tokenizer");_(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=a||jn,this.options.tokenizer=this.options.tokenizer||new Fe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={other:ia,block:Te.normal,inline:Jn.normal};this.options.pedantic?(e.block=Te.pedantic,e.inline=Jn.pedantic):this.options.gfm&&(e.block=Te.gfm,this.options.breaks?e.inline=Jn.breaks:e.inline=Jn.gfm),this.tokenizer.rules=e}static get rules(){return{block:Te,inline:Jn}}static lex(a,e){return new Si(e).lex(a)}static lexInline(a,e){return new Si(e).inlineTokens(a)}lex(a){a=a.replace(ia.carriageReturn,`
`),this.blockTokens(a,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const i=this.inlineQueue[e];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(a,e=[],i=!1){var t,r,l;for(this.options.pedantic&&(a=a.replace(ia.tabCharGlobal,"    ").replace(ia.spaceLine,""));a;){let s;if((r=(t=this.options.extensions)==null?void 0:t.block)!=null&&r.some(u=>(s=u.call({lexer:this},a,e))?(a=a.substring(s.raw.length),e.push(s),!0):!1))continue;if(s=this.tokenizer.space(a)){a=a.substring(s.raw.length);const u=e.at(-1);s.raw.length===1&&u!==void 0?u.raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.at(-1).src=u.text):e.push(s);continue}if(s=this.tokenizer.fences(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(a)){a=a.substring(s.raw.length),e.push(s);continue}let o=a;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const d=a.slice(1);let h;this.options.extensions.startBlock.forEach(k=>{h=k.call({lexer:this},d),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(o=a.substring(0,u+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){const u=e.at(-1);i&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(s),i=o.length!==a.length,a=a.substring(s.raw.length);continue}if(s=this.tokenizer.text(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(s);continue}if(a){const u="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,e}inline(a,e=[]){return this.inlineQueue.push({src:a,tokens:e}),e}inlineTokens(a,e=[]){var s,o,u;let i=a,t=null;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,t.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(t=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,l="";for(;a;){r||(l=""),r=!1;let d;if((o=(s=this.options.extensions)==null?void 0:s.inline)!=null&&o.some(k=>(d=k.call({lexer:this},a,e))?(a=a.substring(d.raw.length),e.push(d),!0):!1))continue;if(d=this.tokenizer.escape(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.tag(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.link(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.reflink(a,this.tokens.links)){a=a.substring(d.raw.length);const k=e.at(-1);d.type==="text"&&(k==null?void 0:k.type)==="text"?(k.raw+=d.raw,k.text+=d.text):e.push(d);continue}if(d=this.tokenizer.emStrong(a,i,l)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.codespan(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.br(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.del(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.autolink(a)){a=a.substring(d.raw.length),e.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(a))){a=a.substring(d.raw.length),e.push(d);continue}let h=a;if((u=this.options.extensions)!=null&&u.startInline){let k=1/0;const p=a.slice(1);let g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},p),typeof g=="number"&&g>=0&&(k=Math.min(k,g))}),k<1/0&&k>=0&&(h=a.substring(0,k+1))}if(d=this.tokenizer.inlineText(h)){a=a.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),r=!0;const k=e.at(-1);(k==null?void 0:k.type)==="text"?(k.raw+=d.raw,k.text+=d.text):e.push(d);continue}if(a){const k="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(k);break}else throw new Error(k)}}return e}},$e=class{constructor(n){_(this,"options");_(this,"parser");this.options=n||jn}space(n){return""}code({text:n,lang:a,escaped:e}){var r;const i=(r=(a||"").match(ia.notSpaceStart))==null?void 0:r[0],t=n.replace(ia.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Ca(i)+'">'+(e?t:Ca(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:Ca(t,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:a}){return`<h${a}>${this.parser.parseInline(n)}</h${a}>
`}hr(n){return`<hr>
`}list(n){const a=n.ordered,e=n.start;let i="";for(let l=0;l<n.items.length;l++){const s=n.items[l];i+=this.listitem(s)}const t=a?"ol":"ul",r=a&&e!==1?' start="'+e+'"':"";return"<"+t+r+`>
`+i+"</"+t+`>
`}listitem(n){var e;let a="";if(n.task){const i=this.checkbox({checked:!!n.checked});n.loose?((e=n.tokens[0])==null?void 0:e.type)==="paragraph"?(n.tokens[0].text=i+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=i+" "+Ca(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):a+=i+" "}return a+=this.parser.parse(n.tokens,!!n.loose),`<li>${a}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let a="",e="";for(let t=0;t<n.header.length;t++)e+=this.tablecell(n.header[t]);a+=this.tablerow({text:e});let i="";for(let t=0;t<n.rows.length;t++){const r=n.rows[t];e="";for(let l=0;l<r.length;l++)e+=this.tablecell(r[l]);i+=this.tablerow({text:e})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const a=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+a+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Ca(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:a,tokens:e}){const i=this.parser.parseInline(e),t=gt(n);if(t===null)return i;n=t;let r='<a href="'+n+'"';return a&&(r+=' title="'+Ca(a)+'"'),r+=">"+i+"</a>",r}image({href:n,title:a,text:e,tokens:i}){i&&(e=this.parser.parseInline(i,this.parser.textRenderer));const t=gt(n);if(t===null)return Ca(e);n=t;let r=`<img src="${n}" alt="${e}"`;return a&&(r+=` title="${Ca(a)}"`),r+=">",r}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Ca(n.text)}},Ui=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},Xa=class xi{constructor(a){_(this,"options");_(this,"renderer");_(this,"textRenderer");this.options=a||jn,this.options.renderer=this.options.renderer||new $e,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ui}static parse(a,e){return new xi(e).parse(a)}static parseInline(a,e){return new xi(e).parseInline(a)}parse(a,e=!0){var t,r;let i="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&r[s.type]){const u=s,d=this.options.extensions.renderers[u.type].call({parser:this},u);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){i+=d||"";continue}}const o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let u=o,d=this.renderer.text(u);for(;l+1<a.length&&a[l+1].type==="text";)u=a[++l],d+=`
`+this.renderer.text(u);e?i+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):i+=d;continue}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return i}parseInline(a,e=this.renderer){var t,r;let i="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&r[s.type]){const u=this.options.extensions.renderers[s.type].call({parser:this},s);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=u||"";continue}}const o=s;switch(o.type){case"escape":{i+=e.text(o);break}case"html":{i+=e.html(o);break}case"link":{i+=e.link(o);break}case"image":{i+=e.image(o);break}case"strong":{i+=e.strong(o);break}case"em":{i+=e.em(o);break}case"codespan":{i+=e.codespan(o);break}case"br":{i+=e.br(o);break}case"del":{i+=e.del(o);break}case"text":{i+=e.text(o);break}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return i}},oi,Ce=(oi=class{constructor(n){_(this,"options");_(this,"block");this.options=n||jn}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?Ya.lex:Ya.lexInline}provideParser(){return this.block?Xa.parse:Xa.parseInline}},_(oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),oi),ju=class{constructor(...n){_(this,"defaults",Hi());_(this,"options",this.setOptions);_(this,"parse",this.parseMarkdown(!0));_(this,"parseInline",this.parseMarkdown(!1));_(this,"Parser",Xa);_(this,"Renderer",$e);_(this,"TextRenderer",Ui);_(this,"Lexer",Ya);_(this,"Tokenizer",Fe);_(this,"Hooks",Ce);this.use(...n)}walkTokens(n,a){var i,t;let e=[];for(const r of n)switch(e=e.concat(a.call(this,r)),r.type){case"table":{const l=r;for(const s of l.header)e=e.concat(this.walkTokens(s.tokens,a));for(const s of l.rows)for(const o of s)e=e.concat(this.walkTokens(o.tokens,a));break}case"list":{const l=r;e=e.concat(this.walkTokens(l.items,a));break}default:{const l=r;(t=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&t[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{const o=l[s].flat(1/0);e=e.concat(this.walkTokens(o,a))}):l.tokens&&(e=e.concat(this.walkTokens(l.tokens,a)))}}return e}use(...n){const a=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{const i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){const r=a.renderers[t.name];r?a.renderers[t.name]=function(...l){let s=t.renderer.apply(this,l);return s===!1&&(s=r.apply(this,l)),s}:a.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=a[t.level];r?r.unshift(t.tokenizer):a[t.level]=[t.tokenizer],t.start&&(t.level==="block"?a.startBlock?a.startBlock.push(t.start):a.startBlock=[t.start]:t.level==="inline"&&(a.startInline?a.startInline.push(t.start):a.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(a.childTokens[t.name]=t.childTokens)}),i.extensions=a),e.renderer){const t=this.defaults.renderer||new $e(this.defaults);for(const r in e.renderer){if(!(r in t))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const l=r,s=e.renderer[l],o=t[l];t[l]=(...u)=>{let d=s.apply(t,u);return d===!1&&(d=o.apply(t,u)),d||""}}i.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new Fe(this.defaults);for(const r in e.tokenizer){if(!(r in t))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const l=r,s=e.tokenizer[l],o=t[l];t[l]=(...u)=>{let d=s.apply(t,u);return d===!1&&(d=o.apply(t,u)),d}}i.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new Ce;for(const r in e.hooks){if(!(r in t))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const l=r,s=e.hooks[l],o=t[l];Ce.passThroughHooks.has(r)?t[l]=u=>{if(this.defaults.async)return Promise.resolve(s.call(t,u)).then(h=>o.call(t,h));const d=s.call(t,u);return o.call(t,d)}:t[l]=(...u)=>{let d=s.apply(t,u);return d===!1&&(d=o.apply(t,u)),d}}i.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,r=e.walkTokens;i.walkTokens=function(l){let s=[];return s.push(r.call(this,l)),t&&(s=s.concat(t.call(this,l))),s}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,a){return Ya.lex(n,a??this.defaults)}parser(n,a){return Xa.parse(n,a??this.defaults)}parseMarkdown(n){return(e,i)=>{const t={...i},r={...this.defaults,...t},l=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&t.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=n);const s=r.hooks?r.hooks.provideLexer():n?Ya.lex:Ya.lexInline,o=r.hooks?r.hooks.provideParser():n?Xa.parse:Xa.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(e):e).then(u=>s(u,r)).then(u=>r.hooks?r.hooks.processAllTokens(u):u).then(u=>r.walkTokens?Promise.all(this.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>o(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(l);try{r.hooks&&(e=r.hooks.preprocess(e));let u=s(e,r);r.hooks&&(u=r.hooks.processAllTokens(u)),r.walkTokens&&this.walkTokens(u,r.walkTokens);let d=o(u,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(u){return l(u)}}}onError(n,a){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+Ca(e.message+"",!0)+"</pre>";return a?Promise.resolve(i):i}if(a)return Promise.reject(e);throw e}}},_n=new ju;function R(n,a){return _n.parse(n,a)}R.options=R.setOptions=function(n){return _n.setOptions(n),R.defaults=_n.defaults,gr(R.defaults),R};R.getDefaults=Hi;R.defaults=jn;R.use=function(...n){return _n.use(...n),R.defaults=_n.defaults,gr(R.defaults),R};R.walkTokens=function(n,a){return _n.walkTokens(n,a)};R.parseInline=_n.parseInline;R.Parser=Xa;R.parser=Xa.parse;R.Renderer=$e;R.TextRenderer=Ui;R.Lexer=Ya;R.lexer=Ya.lex;R.Tokenizer=Fe;R.Hooks=Ce;R.parse=R;R.options;R.setOptions;R.use;R.walkTokens;R.parseInline;Xa.parse;Ya.lex;const Ga={cyber:{code:"cyber",name:"Cybersecurity",label:"Cybersecurity",accent:"#3a5a44",schedule:"Senin–Jumat · 07.00 WIB",next:"Backup dan pemulihan"},fr:{code:"fr",name:"Français",label:"Bahasa Prancis",accent:"#2e4e6b",schedule:"Setiap hari · 05.00 WIB",next:"Kata ganti & être / avoir"},en:{code:"en",name:"English",label:"Bahasa Inggris",accent:"#a85b38",schedule:"Setiap hari · 06.00 WIB",next:"Kalimat sederhana present tense"},ai:{code:"ai",name:"AI Engineer",label:"AI Engineer",accent:"#8a6d2b",schedule:"Senin–Jumat · 10.30 WIB",next:"Neural network & PyTorch"}},ui=["cyber","fr","en","ai"],Su=Object.assign({"../../lessons/ai-01-apa-itu-ai-engineer.md":yl,"../../lessons/ai-02-python-untuk-ai.md":vl,"../../lessons/ai-03-matematika-untuk-ai.md":wl,"../../lessons/ai-04-cara-kerja-ml.md":_l,"../../lessons/ai-05-ml-klasik-scikit-learn.md":jl,"../../lessons/ai-06-evaluasi-model.md":Sl,"../../lessons/cyber-01-apa-itu-cybersecurity.md":xl,"../../lessons/cyber-02-cia-triad.md":Il,"../../lessons/cyber-03-jenis-ancaman.md":Al,"../../lessons/cyber-04-password-autentikasi.md":Tl,"../../lessons/cyber-05-phishing.md":Pl,"../../lessons/cyber-06-malware.md":El,"../../lessons/cyber-07-wifi.md":Rl,"../../lessons/cyber-08-keamanan-hp.md":Nl,"../../lessons/cyber-09-privasi-jejak-digital.md":Cl,"../../lessons/en-01-alphabet.md":Ml,"../../lessons/en-02-greetings.md":Dl,"../../lessons/en-03-numbers-days-time.md":Ll,"../../lessons/en-04-pronouns-to-be.md":Kl,"../../lessons/en-05-kosakata-sehari-hari.md":Bl,"../../lessons/fr-01-alphabet.md":zl,"../../lessons/fr-02-greetings.md":Hl,"../../lessons/fr-03-numbers-days-time.md":Fl});function xu(n){const a=n.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/),e={};let i=n;if(a){i=a[2];for(const t of a[1].split(`
`)){const r=t.indexOf(":");r>-1&&(e[t.slice(0,r).trim()]=t.slice(r+1).trim())}}return{lang:e.lang,number:Number(e.number),date:e.date,title:e.title,subtitle:e.subtitle||"",keywords:e.keywords||"",html:R.parse(i),slug:`${e.lang}-${e.number}`}}const Oe=Object.values(Su).map(xu).filter(n=>n.lang&&n.number&&n.date&&n.title).sort((n,a)=>n.date<a.date?-1:n.date>a.date?1:n.number-a.number);function Ii(n){return Oe.filter(a=>a.lang===n).sort((a,e)=>a.number-e.number)}function Iu(n,a){return Oe.find(e=>e.lang===n&&e.number===Number(a))}function Au(n){const a=Ii(n.lang),e=a.findIndex(i=>i.number===n.number);return{prev:a[e-1]||null,next:a[e+1]||null}}const Tu=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],Pu=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];function Eu(n){const[a,e,i]=n.split("-").map(Number);return`${i} ${Tu[e-1]} ${a}`}function Ru(n){const[a,e,i]=n.split("-").map(Number);return`${i} ${Pu[e-1]} ${a}`}const Nu="12 November 2026";var Cu=ra('<p class="lesson-subtitle"> </p>'),Mu=ra('<a><span class="nav-label">← Pelajaran sebelumnya</span> <span class="nav-title"> </span></a>'),Du=ra("<span></span>"),Lu=ra('<a class="next-link"><span class="nav-label">Pelajaran berikutnya →</span> <span class="nav-title"> </span></a>'),Ku=ra('<a class="back-link"> </a> <p class="eyebrow"> </p> <h1 class="lesson-title"> </h1> <!> <p class="lesson-meta"> </p> <div class="lesson-body"></div> <nav class="lesson-nav"><!> <!></nav>',1),Bu=ra('<a class="back-link" href="#/">← Kembali ke semua pelajaran</a> <p class="empty">Pelajaran tidak ditemukan.</p>',1);function zu(n,a){Pi(a,!0);let e=Da(()=>Iu(a.lang,a.number)),i=Da(()=>f(e)?Ga[f(e).lang]:null),t=Da(()=>f(e)?Au(f(e)):{prev:null,next:null});var r=pr(),l=re(r);{var s=u=>{var d=Ku(),h=re(d),k=G(h),p=M(h,2),g=G(p),b=M(p,2),c=G(b,!0),y=M(b,2);{var N=T=>{var D=Cu(),Q=G(D,!0);ja(()=>z(Q,f(e).subtitle)),J(T,D)};tn(y,T=>{f(e).subtitle&&T(N)})}var C=M(y,2),B=G(C),O=M(C,2);dl(O,()=>f(e).html,!0);var X=M(O,2),K=na(X);{var ya=T=>{var D=Mu(),Q=M(na(D),2),Pa=G(Q);ja(()=>{se(D,"href",`#/${f(t).prev.lang??""}/${f(t).prev.number??""}`),z(Pa,`#${f(t).prev.number??""} — ${f(t).prev.title??""}`)}),J(T,D)},Ta=T=>{var D=Du();J(T,D)};tn(K,T=>{f(t).prev?T(ya):T(Ta,-1)})}var U=M(K,2);{var W=T=>{var D=Lu(),Q=M(na(D),2),Pa=G(Q);ja(()=>{se(D,"href",`#/${f(t).next.lang??""}/${f(t).next.number??""}`),z(Pa,`#${f(t).next.number??""} — ${f(t).next.title??""}`)}),J(T,D)};tn(U,T=>{f(t).next&&T(W)})}ja(T=>{se(h,"href",`#/${f(e).lang??""}`),z(k,`← Semua pelajaran ${f(i).name??""}`),ae(p,`color: ${f(i).accent??""}`),z(g,`${f(i).name??""} · Pelajaran #${f(e).number??""}`),z(c,f(e).title),z(B,`${T??""} · ${f(i).label??""} · ${f(i).schedule??""}`)},[()=>Eu(f(e).date)]),J(u,d)},o=u=>{var d=Bu();J(u,d)};tn(l,u=>{f(e)&&f(i)?u(s):u(o,-1)})}J(n,r),Ei()}var Hu=ra('<a> <span class="n"> </span></a>'),Fu=ra('<p class="empty"> </p>'),$u=ra('<a class="lesson-row"><span class="num"> </span> <span class="main"><span class="title"> </span> <span class="sub"> </span></span> <span class="date"> </span> <span class="arrow">→</span></a>'),Ou=ra('<section class="lang-section"><div class="lang-head"><h2> <span class="accent-dot"></span></h2> <span class="lang-meta"> <br/> </span></div> <!></section>'),Wu=ra('<div class="next-item"><div class="lang-name"> </div> <div class="topic"> </div> <div class="when"> </div></div>'),Gu=ra('<section class="next-block"><h3>Selanjutnya</h3> <div class="next-grid"></div></section>'),Ju=ra("<!> <!>",1),qu=ra(`<header class="site-header"><div class="top"><a class="wordmark" href="#/">Polly<span>.</span></a> <span class="site-tag">Catatan belajar</span></div> <p class="intro">Semua pelajaran — cybersecurity, bahasa Prancis, bahasa Inggris, dan
        AI Engineer — dari hari pertama sampai hari ini. Bisa dicari dan
        dibaca ulang <em>kapan saja</em>.</p> <p class="count-line"> </p></header> <input class="search" type="search" placeholder="Cari pelajaran — mis. phishing, liaison, scikit-learn" aria-label="Cari pelajaran"/> <nav class="tabs"><a href="#/">Semua</a> <!></nav> <!>`,1),Uu=ra(`<div class="wrap"><!> <footer class="site-footer"><p>Polly — catatan belajar harian: cybersecurity, bahasa Prancis, bahasa
      Inggris, dan AI Engineer.</p> <p>Pelajaran baru ditambahkan ke halaman ini setelah dikirim di WhatsApp.</p></footer></div>`);function Zu(n,a){Pi(a,!0);let e=Ma(An(window.location.hash));tt(()=>{const b=()=>{Ja(e,window.location.hash,!0)};return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)});function i(b){const c=b.replace(/^#\/?/,"").split("/").filter(Boolean),y=Object.keys(Ga);return c.length===2&&y.includes(c[0])&&/^\d+$/.test(c[1])?{view:"lesson",lang:c[0],number:Number(c[1])}:c.length===1&&y.includes(c[0])?{view:"home",tab:c[0]}:{view:"home",tab:"all"}}let t=Da(()=>i(f(e))),r=Ma("");tt(()=>{f(t).view,f(t).lang,f(t).number,window.scrollTo(0,0)});let l=Da(()=>f(r).trim().toLowerCase());function s(b){return f(l)?[b.title,b.subtitle,b.keywords].join(" ").toLowerCase().includes(f(l)):!0}let o=Da(()=>Oe.length),u=Da(()=>f(t).tab==="all"?ui:[f(t).tab]),d=Da(()=>Oe.some(s));var h=Uu(),k=na(h);{var p=b=>{zu(b,{get lang(){return f(t).lang},get number(){return f(t).number}})},g=b=>{var c=qu(),y=re(c),N=M(na(y),4),C=G(N),B=M(y,2),O=M(B,2),X=na(O),K=M(X,2);Ae(K,17,()=>ui,Ie,(W,T)=>{var D=Hu(),Q=na(D),Pa=M(Q),Ea=G(Pa,!0);ja(Ra=>{mt(D,1,`tab ${f(t).tab===f(T)?"active":""}`),se(D,"href",`#/${f(T)??""}`),z(Q,Ga[f(T)].name),z(Ea,Ra)},[()=>Ii(f(T)).length]),J(W,D)});var ya=M(O,2);{var Ta=W=>{var T=Fu(),D=G(T);ja(Q=>z(D,`Tidak ada pelajaran yang cocok dengan “${Q??""}”. Coba kata lain —
        mis. “angka”, “sapaan”, atau “liaison”.`),[()=>f(r).trim()]),J(W,T)},U=W=>{var T=Ju(),D=re(T);Ae(D,17,()=>f(u),Ie,(Ea,Ra)=>{const Na=Da(()=>Ga[f(Ra)]),aa=Da(()=>Ii(f(Ra)).filter(s));var va=pr(),Fn=re(va);{var $n=On=>{var Wn=Ou(),we=na(Wn),_e=na(we),je=na(_e),Ir=M(je),Ar=M(_e,2),Zi=na(Ar),Tr=M(Zi,2,!0),Pr=M(we,2);Ae(Pr,17,()=>f(aa),Ie,(Er,Sn)=>{var Ye=$u(),Xe=na(Ye),Rr=G(Xe,!0),Vi=M(Xe,2),Yi=na(Vi),Nr=G(Yi,!0),Cr=M(Yi,2),Mr=G(Cr,!0),Dr=M(Vi,2),Lr=G(Dr,!0);ja((Kr,Br)=>{se(Ye,"href",`#/${f(Sn).lang??""}/${f(Sn).number??""}`),ae(Xe,`color: ${f(Na).accent??""}`),z(Rr,Kr),z(Nr,f(Sn).title),z(Mr,f(Sn).subtitle),z(Lr,Br)},[()=>String(f(Sn).number).padStart(2,"0"),()=>Ru(f(Sn).date)]),J(Er,Ye)}),ja(()=>{z(je,f(Na).name),ae(Ir,`background: ${f(Na).accent??""}`),z(Zi,`${f(Na).label??""} · ${f(aa).length??""} pelajaran`),z(Tr,f(Na).schedule)}),J(On,Wn)};tn(Fn,On=>{f(aa).length>0&&On($n)})}J(Ea,va)});var Q=M(D,2);{var Pa=Ea=>{var Ra=Gu(),Na=M(na(Ra),2);Ae(Na,21,()=>ui,Ie,(aa,va)=>{var Fn=Wu(),$n=na(Fn),On=G($n,!0),Wn=M($n,2),we=G(Wn,!0),_e=M(Wn,2),je=G(_e,!0);ja(()=>{ae(Fn,`border-left-color: ${Ga[f(va)].accent??""}`),ae($n,`color: ${Ga[f(va)].accent??""}`),z(On,Ga[f(va)].name),z(we,Ga[f(va)].next),z(je,Ga[f(va)].schedule)}),J(aa,Fn)}),J(Ea,Ra)};tn(Q,Ea=>{f(l)||Ea(Pa)})}J(W,T)};tn(ya,W=>{f(l)&&!f(d)?W(Ta):W(U,-1)})}ja(()=>{z(C,`${f(o)??""} pelajaran · 4 jalur belajar · diperbarui ${Nu}`),mt(X,1,`tab ${f(t).tab==="all"?"active":""}`)}),fl(B,()=>f(r),W=>Ja(r,W)),J(b,c)};tn(k,b=>{f(t).view==="lesson"?b(p):b(g,-1)})}J(n,h),Ei()}il(Zu,{target:document.getElementById("app")});
