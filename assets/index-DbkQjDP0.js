var Hr=Object.defineProperty;var Qt=n=>{throw TypeError(n)};var Dr=(n,a,e)=>a in n?Hr(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var _=(n,a,e)=>Dr(n,typeof a!="symbol"?a+"":a,e),Xe=(n,a,e)=>a.has(n)||Qt("Cannot "+e);var d=(n,a,e)=>(Xe(n,a,"read from private field"),e?e.call(n):a.get(n)),j=(n,a,e)=>a.has(n)?Qt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(n):a.set(n,e),S=(n,a,e,t)=>(Xe(n,a,"write to private field"),t?t.call(n,e):a.set(n,e),e),w=(n,a,e)=>(Xe(n,a,"access private method"),e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const vi=!1;var wi=Array.isArray,Fr=Array.prototype.indexOf,ue=Array.prototype.includes,qe=Array.from,_i=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,Kr=Object.getOwnPropertyDescriptors,Or=Object.prototype,Wr=Array.prototype,Si=Object.getPrototypeOf,Xt=Object.isExtensible;const Gr=()=>{};function Jr(n){for(var a=0;a<n.length;a++)n[a]()}function xi(){var n,a,e=new Promise((t,i)=>{n=t,a=i});return{promise:e,resolve:n,reject:a}}const Y=2,oe=4,Ue=8,ji=1<<24,xa=16,Ia=32,un=64,pt=128,Pt=256,Aa=512,K=1024,N=2048,ma=4096,ia=8192,V=16384,Hn=32768,Le=1<<25,Bn=65536,Be=1<<17,qr=1<<18,Dn=1<<19,Ur=1<<20,Fa=1<<25,Ne=1<<21,Pn=1<<22,rn=1<<23,at=Symbol("$state"),Ai=Symbol("component"),Te=Symbol("attributes"),dt=Symbol("class"),ht=Symbol("style"),Un=Symbol("text"),Ee=Symbol("form reset"),ge=new class extends Error{constructor(){super(...arguments);_(this,"name","StaleReactionError");_(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Zr=1,Vr=2,Ii=4,Yr=8,Qr=16,Xr=1,as=2,Pi={},F=Symbol("uninitialized"),Ti="http://www.w3.org/1999/xhtml",ns="http://www.w3.org/2000/svg",es="http://www.w3.org/1998/Math/MathML";function ts(){console.warn("https://svelte.dev/e/derived_inert")}function is(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ei(n){return n===this.v}function rs(n,a){return n!=n?a==a:n!==a||n!==null&&typeof n=="object"||typeof n=="function"}function Ri(n){return!rs(n,this.v)}function ss(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ls(n,a,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function us(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function os(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ps(n){throw new Error("https://svelte.dev/e/effect_orphan")}function ds(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ms(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ks(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let gs=!1,la=null;function Nn(n){la=n}function Tt(n,a=!1,e){la={p:la,i:!1,c:null,e:null,s:n,x:null,r:T,l:null}}function Et(n){var a=la,e=a.e;if(e!==null){a.e=null;for(var t of e)Xi(t)}return a.i=!0,la=a.p,Ci(n)}function Ci(n={}){return _i(n,Ai,{value:!0}),n}function Mi(){return!0}let hn=[];function Li(){var n=hn;hn=[],Jr(n)}function en(n){if(hn.length===0&&!ee){var a=hn;queueMicrotask(()=>{a===hn&&Li()})}hn.push(n)}function fs(){for(;hn.length>0;)Li()}const bs=-7169;function D(n,a){n.f=n.f&bs|a}function Rt(n){(n.f&Aa)!==0||n.deps===null?D(n,K):D(n,ma)}function Bi(n,a){(n.f&N)!==0?a.set(n,N):(n.f&ma)!==0&&a.get(n)!==N&&a.set(n,ma),D(n,K)}let ai=!1;function ys(){ai||(ai=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var a;if(!n.defaultPrevented)for(const e of n.target.elements)(a=e[Ee])==null||a.call(e)})},{capture:!0}))}function fe(n){var a=x,e=T;ba(null),Wa(null);try{return n()}finally{ba(a),Wa(e)}}function vs(n,a,e,t=e){n.addEventListener(a,()=>fe(e));const i=n[Ee];i?n[Ee]=()=>{i(),t(!0)}:n[Ee]=()=>t(!0),ys()}function ws(n,a,e,t){const i=Ct;var r=n.filter(c=>!c.settled),l=a.map(i);if(e.length===0&&r.length===0){t(l);return}var s=T,o=_s(),u=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(c=>c.promise)):null;function p(c){if((s.f&V)===0){o();try{t([...l,...c])}catch(k){Da(k,s)}$e()}}var m=Ni();if(e.length===0){u.then(()=>p([])).finally(m);return}function h(){Promise.all(e.map(c=>Ss(c))).then(p).catch(c=>Da(c,s)).finally(m)}u?u.then(()=>{if((s.f&V)!==0){m();return}o(),h(),$e()}):h()}function _s(){var n=T,a=x,e=la,t=v;return function(r=!0){Wa(n),ba(a),Nn(e),r&&(n.f&V)===0&&(t==null||t.activate(),t==null||t.apply())}}function $e(n=!0){Wa(null),ba(null),Nn(null),n&&(v==null||v.deactivate())}function Ni(){var n=T,a=n.b,e=v,t=!!(a!=null&&a.is_rendered());return a==null||a.update_pending_count(1,e),e.increment(t,n),()=>{a==null||a.update_pending_count(-1,e),e.decrement(t,n)}}function Ct(n){var a=Y|N;return T!==null&&(T.f|=Dn),{ctx:la,deps:null,effects:null,equals:Ei,f:a,fn:n,reactions:null,rv:0,v:F,wv:0,parent:T,ac:null}}const Zn=Symbol("obsolete");function Ss(n,a,e){let t=T;t===null&&ss();var i=void 0,r=wn(F),l=!x,s=new Set;return Ds(()=>{var c,k;var o=T,u=xi();i=u.promise;try{Promise.resolve(n()).then(u.resolve,b=>{b!==ge&&u.reject(b)}).finally($e)}catch(b){u.reject(b),$e()}var p=v;if(l){if((o.f&Hn)!==0)var m=Ni();if((c=t.b)!=null&&c.is_rendered())(k=p.async_deriveds.get(o))==null||k.reject(Zn);else for(const b of s.values())b.reject(Zn);s.add(u),p.async_deriveds.set(o,u)}const h=(b,g=void 0)=>{m==null||m(),s.delete(u),g!==Zn&&(p.activate(),g?(r.f|=rn,$n(r,g)):((r.f&rn)!==0&&(r.f^=rn),$n(r,b)),p.deactivate())};u.promise.then(h,b=>h(null,b||"unknown"))}),zs(()=>{for(const o of s)o.reject(Zn)}),new Promise(o=>{function u(p){function m(){p===i?o(r):u(i)}p.then(m,m)}u(i)})}function Ba(n){const a=Ct(n);return sr(a),a}function xs(n){const a=Ct(n);return a.equals=Ri,a}function js(n){var a=n.effects;if(a!==null){n.effects=null;for(var e=0;e<a.length;e+=1)ua(a[e])}}function Mt(n){var a,e=T,t=n.parent;if(!on&&t!==null&&n.v!==F&&(t.f&(V|ia))!==0)return ts(),n.v;Wa(t);try{js(n),a=pr(n)}finally{Wa(e)}return a}function $i(n){var a=Mt(n);if(!n.equals(a)&&(n.wv=ur(),(!(v!=null&&v.is_fork)||n.deps===null)&&(v!==null?(v.capture(n,a,!0),sn==null||sn.capture(n,a,!0)):n.v=a,n.deps===null))){D(n,K);return}on||(q!==null?(Nt()||v!=null&&v.is_fork)&&q.set(n,a):Rt(n))}function As(n){var a;if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&((a=e.teardown)==null||a.call(e),e.ac!==null&&fe(()=>{e.ac.abort(ge),e.ac=null}),e.fn!==null&&(e.teardown=Gr),pe(e,0),zt(e))}function zi(n){if(n.effects!==null)for(const a of n.effects)a.teardown&&a.fn!==null&&zn(a)}let nt=null,jn=null,v=null,sn=null,q=null,mt=null,ee=!1,et=!1,te=null,Re=null;var ni=0;let Is=1;var Tn,En,Rn,qa,Cn,Ua,he,Na,$a,Mn,cn,A,ct,Hi,kt,Vn,gt,Di,Fi,Ki,An,Ps,Yn;const We=class We{constructor(){j(this,A);_(this,"id",Is++);_(this,"started",!1);_(this,"linked",!0);_(this,"prev",null);_(this,"next",null);_(this,"async_deriveds",new Map);_(this,"current",new Map);_(this,"previous",new Map);j(this,Tn,new Set);j(this,En,new Set);j(this,Rn,0);j(this,qa,new Map);j(this,Cn,null);j(this,Ua,[]);j(this,he,[]);j(this,Na,new Map);j(this,$a,new Map);j(this,Mn,new Set);_(this,"is_fork",!1);j(this,cn,!1);jn===null?nt=jn=this:(jn.next=this,this.prev=jn),jn=this}skip_effect(a){d(this,$a).has(a)||d(this,$a).set(a,{d:[],m:[]}),d(this,Mn).delete(a)}unskip_effect(a,e=t=>this.schedule(t)){var t=d(this,$a).get(a);if(t){d(this,$a).delete(a);for(var i of t.d)D(i,N),e(i);for(i of t.m)D(i,ma),e(i)}d(this,Mn).add(a)}capture(a,e,t=!1){a.v!==F&&!this.previous.has(a)&&this.previous.set(a,a.v),(a.f&rn)===0&&(this.current.set(a,[e,t]),q==null||q.set(a,e)),this.is_fork||(a.v=e)}activate(){v=this}deactivate(){v=null,q=null}flush(){try{et=!0,v=this,w(this,A,Vn).call(this)}finally{ni=0,mt=null,te=null,Re=null,et=!1,v=null,q=null,Ka.clear()}}discard(){var a;for(const e of d(this,En))e(this);d(this,En).clear();for(const e of this.async_deriveds.values())e.reject(Zn);w(this,A,Yn).call(this),(a=d(this,Cn))==null||a.resolve()}register_created_effect(a){d(this,he).push(a)}increment(a,e){if(S(this,Rn,d(this,Rn)+1),a){let t=d(this,qa).get(e)??0;d(this,qa).set(e,t+1)}}decrement(a,e){if(S(this,Rn,d(this,Rn)-1),a){let t=d(this,qa).get(e)??0;t===1?d(this,qa).delete(e):d(this,qa).set(e,t-1)}d(this,cn)||(S(this,cn,!0),en(()=>{S(this,cn,!1),this.linked&&this.flush()}))}transfer_reactions(a){for(const[e,t]of a)this.add_dirty_reaction(e,t);a.clear()}add_dirty_reaction(a,e){(e===N||d(this,Na).get(a)!==N)&&d(this,Na).set(a,e)}oncommit(a){d(this,Tn).add(a)}ondiscard(a){d(this,En).add(a)}settled(){return(d(this,Cn)??S(this,Cn,xi())).promise}static ensure(){if(v===null){const a=v=new We;!et&&!ee&&en(()=>{a.started||a.flush()})}return v}apply(){{q=null;return}}schedule(a){var e;if(mt=a,(e=a.b)!=null&&e.is_pending&&(a.f&(oe|Ue|ji))!==0&&(a.f&Hn)===0){a.b.defer_effect(a);return}d(this,Ua).push(a)}};Tn=new WeakMap,En=new WeakMap,Rn=new WeakMap,qa=new WeakMap,Cn=new WeakMap,Ua=new WeakMap,he=new WeakMap,Na=new WeakMap,$a=new WeakMap,Mn=new WeakMap,cn=new WeakMap,A=new WeakSet,ct=function(){if(this.is_fork)return!0;for(const a of d(this,qa).keys())if(!w(this,A,Hi).call(this,a))return!0;return!1},Hi=function(a){for(var e=a;e!==null;e=e.parent)if(d(this,$a).has(e))return!0;return!1},kt=function(){var a=[];for(const r of d(this,Ua))if(!((r.f&V)!==0||(r.f&(N|ma))===0)){for(var e=r,t=!1;e.parent!==null;){e=e.parent;var i=e.f;if((i&(un|Ia))!==0){if((i&K)===0){t=!0;break}e.f^=K}}t||a.push(e)}return S(this,Ua,[]),a},Vn=function(){var s,o,u,p;this.started=!0;for(const[m,h]of d(this,Na))D(m,h),this.schedule(m);this.apply();for(var a=te=[],e=[],t=Re=[];d(this,Ua).length>0;){ni++>1e3&&(w(this,A,Yn).call(this),Es());for(const m of w(this,A,kt).call(this))try{w(this,A,gt).call(this,m,a,e)}catch(h){throw Gi(m),w(this,A,ct).call(this)||this.discard(),h}}if(v=null,t.length>0){var i=We.ensure();for(const m of t)i.schedule(m)}if(te=null,Re=null,w(this,A,ct).call(this)){w(this,A,An).call(this,e),w(this,A,An).call(this,a);for(const[m,h]of d(this,$a))Wi(m,h);t.length>0&&w(s=v,A,Vn).call(s);return}const r=w(this,A,Di).call(this);if(r){w(this,A,An).call(this,e),w(this,A,An).call(this,a),w(o=r,A,Ki).call(o,this);return}d(this,Na).clear();for(const m of d(this,Tn))m(this);d(this,Tn).clear(),sn=this,ei(e),ei(a),sn=null,(u=d(this,Cn))==null||u.resolve();var l=v;d(this,Rn)===0&&(d(this,Ua).length===0||l!==null)&&w(this,A,Yn).call(this),l!==null&&(Ka.clear(),w(p=l,A,Vn).call(p))},gt=function(a,e,t){a.f^=K;for(var i=a.first;i!==null;){var r=i.f,l=(r&(Ia|un))!==0,s=l&&(r&K)!==0,o=s||(r&ia)!==0||d(this,$a).has(i);if(!o&&i.fn!==null){l?i.f^=K:(r&oe)!==0?e.push(i):ye(i)&&((r&xa)!==0&&this.add_dirty_reaction(i,ma),zn(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var p=i.next;if(p!==null){i=p;break}i=i.parent}}},Di=function(){for(var a=this.prev;a!==null;a=a.prev)if(!a.is_fork&&w(this,A,Fi).call(this,a))return a;return null},Fi=function(a){for(const[e,[,t]]of this.current)if(!t&&a.current.has(e))return!0;return!1},Ki=function(a){var t;for(const[i,r]of a.current)!this.previous.has(i)&&a.previous.has(i)&&this.previous.set(i,a.previous.get(i)),this.current.set(i,r);for(const[i,r]of a.async_deriveds){const l=this.async_deriveds.get(i);l&&r.promise.then(l.resolve).catch(l.reject)}a.async_deriveds.clear(),this.transfer_reactions(d(a,Na));const e=i=>{var r=i.reactions;if(r!==null&&!((i.f&Y)!==0&&(i.f&(N|ma))===0))for(const o of r){var l=o.f;if((l&Y)!==0)e(o);else{var s=o;l&(Pn|xa)&&!this.async_deriveds.has(s)&&(d(this,Na).delete(s),D(s,N),this.schedule(s))}}};for(const i of this.current.keys())e(i);this.oncommit(()=>a.discard()),w(t=a,A,Yn).call(t),v=this,w(this,A,Vn).call(this)},An=function(a){for(var e=0;e<a.length;e+=1)Bi(a[e],d(this,Na))},Ps=function(){var m,h;for(let c=nt;c!==null;c=c.next){var a=c.id<this.id,e=[];for(const[k,[b,g]]of this.current){if(c.current.has(k)){var t=c.current.get(k)[0];if(a&&b!==t)c.current.set(k,[b,g]);else continue}e.push(k)}if(a)for(const[k,b]of this.async_deriveds){const g=c.async_deriveds.get(k);g&&b.promise.then(g.resolve).catch(g.reject)}var i=[...c.current.keys()].filter(k=>!c.current.get(k)[1]);if(!(!c.started||i.length===0)){var r=i.filter(k=>!this.current.has(k));if(r.length===0)a&&c.discard();else if(e.length>0){if(a)for(const k of d(this,Mn))c.unskip_effect(k,b=>{var g;(b.f&(xa|Pn))!==0?c.schedule(b):w(g=c,A,An).call(g,[b])});c.activate();var l=new Set,s=new Map;for(var o of e)Oi(o,r,l,s);s=new Map;var u=[...c.current].filter(([k,b])=>{const g=this.current.get(k);return g?g[0]!==b[0]||g[1]!==b[1]:!0}).map(([k])=>k);if(u.length>0)for(const k of d(this,he))(k.f&(V|ia|Be))===0&&Lt(k,u,s)&&((k.f&(Pn|xa))!==0?(D(k,N),c.schedule(k)):c.add_dirty_reaction(k,N));if(d(c,Ua).length>0&&!d(c,cn)){c.apply();for(var p of w(m=c,A,kt).call(m))w(h=c,A,gt).call(h,p,[],[])}c.deactivate()}}}},Yn=function(){if(this.linked){var a=this.prev,e=this.next;a===null?nt=e:a.next=e,e===null?jn=a:e.prev=a,this.linked=!1}};let vn=We;function Ts(n){var a=ee,e=sn;sn=null,ee=!0;try{for(var t;;){if(fs(),v===null)return t;v.flush()}}finally{ee=a,sn=e}}function Es(){try{ds()}catch(n){Da(n,mt)}}let wa=null;function ei(n){var a=n.length;if(a!==0){for(var e=0;e<a;){var t=n[e++];if((t.f&(V|ia))===0&&ye(t)&&(wa=new Set,zn(t),t.deps===null&&t.first===null&&t.nodes===null&&t.teardown===null&&t.ac===null&&tr(t),(wa==null?void 0:wa.size)>0)){Ka.clear();for(const i of wa){if((i.f&(V|ia))!==0)continue;const r=[i];let l=i.parent;for(;l!==null;)wa.has(l)&&(wa.delete(l),r.push(l)),l=l.parent;for(let s=r.length-1;s>=0;s--){const o=r[s];(o.f&(V|ia))===0&&zn(o)}}wa.clear()}}wa=null}}function Oi(n,a,e,t){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const i of n.reactions){const r=i.f;(r&Y)!==0?Oi(i,a,e,t):(r&(Pn|xa))!==0&&(r&N)===0&&Lt(i,a,t)&&(D(i,N),Bt(i))}}function Lt(n,a,e){const t=e.get(n);if(t!==void 0)return t;if(n.deps!==null)for(const i of n.deps){if(ue.call(a,i))return!0;if((i.f&Y)!==0&&Lt(i,a,e))return e.set(i,!0),!0}return e.set(n,!1),!1}function Bt(n){v.schedule(n)}function Wi(n,a){if(!((n.f&Ia)!==0&&(n.f&K)!==0)){(n.f&N)!==0?a.d.push(n):(n.f&ma)!==0&&a.m.push(n),D(n,K);for(var e=n.first;e!==null;)Wi(e,a),e=e.next}}function Gi(n){D(n,K);for(var a=n.first;a!==null;)Gi(a),a=a.next}let ze=new Set;const Ka=new Map;let Ji=!1;function wn(n,a){var e={f:0,v:n,reactions:null,equals:Ei,rv:0,wv:0};return e}function La(n,a){const e=wn(n);return sr(e),e}function Rs(n,a=!1,e=!0){const t=wn(n);return a||(t.equals=Ri),t}function Ja(n,a,e=!1){x!==null&&(!ja||(x.f&Be)!==0)&&Mi()&&(x.f&(Y|xa|Pn|Be))!==0&&(Oa===null||!Oa.has(n))&&cs();let t=e?In(a):a;return $n(n,t,Re)}var dn=null,ft=0;function $n(n,a,e=null){if(!n.equals(a)){on?Ka.set(n,a):Ka.has(n)||Ka.set(n,n.v);var t=vn.ensure();if(t.capture(n,a),(n.f&Y)!==0){const i=n;(n.f&N)!==0&&Mt(i),q===null&&Rt(i)}n.wv=ur(),dn=null,ft=0,qi(n,N,e),dn=null,T!==null&&(T.f&K)!==0&&(T.f&(Ia|un))===0&&(ca===null?Ks([n]):ca.push(n)),!t.is_fork&&ze.size>0&&!Ji&&Cs()}return a}function Cs(){Ji=!1;for(const n of ze){(n.f&K)!==0&&D(n,ma);let a;try{a=ye(n)}catch{a=!0}a&&zn(n)}ze.clear()}function ie(n){Ja(n,n.v+1)}function qi(n,a,e){var t=n.reactions;if(t!==null){var i=t.length;if(ft+=i,ft>1e5&&dn===null&&(dn=new Set),dn!==null){if(dn.has(n))return;dn.add(n)}for(var r=0;r<i;r++){var l=t[r],s=l.f,o=(s&N)===0;if(o&&D(l,a),(s&Be)!==0)ze.add(l);else if((s&Y)!==0){var u=l;q==null||q.delete(u),qi(u,ma,e)}else if(o){var p=l;(s&xa)!==0&&wa!==null&&wa.add(p),e!==null?e.push(p):Bt(p)}}}}function In(n){if(typeof n!="object"||n===null||at in n||Ai in n)return n;const a=Si(n);if(a!==Or&&a!==Wr)return n;var e=new Map,t=wi(n),i=La(0),r=yn,l=s=>{if(yn===r)return s();var o=x,u=yn;ba(null),si(r);var p=s();return ba(o),si(u),p};return t&&e.set("length",La(n.length)),new Proxy(n,{defineProperty(s,o,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&hs();var p=e.get(o);return p===void 0?l(()=>{var m=La(u.value);return e.set(o,m),m}):Ja(p,u.value,!0),!0},deleteProperty(s,o){var u=e.get(o);if(u===void 0){if(o in s){const p=l(()=>La(F));e.set(o,p),ie(i)}}else Ja(u,F),ie(i);return!0},get(s,o,u){var c;if(o===at)return n;var p=e.get(o),m=o in s;if(p===void 0&&(!m||(c=ne(s,o))!=null&&c.writable)&&(p=l(()=>{var k=In(m?s[o]:F),b=La(k);return b}),e.set(o,p)),p!==void 0){var h=f(p);return h===F?void 0:h}return Reflect.get(s,o,u)},getOwnPropertyDescriptor(s,o){var h;(h=this.has)==null||h.call(this,s,o);var u=Reflect.getOwnPropertyDescriptor(s,o),p=e.get(o);if(p!==void 0){var m=f(p);if(m===F)return;if(u&&"value"in u)u.value=m;else return{enumerable:!0,configurable:!0,value:m,writable:!0}}return u},has(s,o){var h;if(o===at)return!0;var u=e.get(o),p=u!==void 0&&u.v!==F||Reflect.has(s,o);if(u!==void 0||(T!==null||x!==null)&&(!p||(h=ne(s,o))!=null&&h.writable)){u===void 0&&(u=l(()=>{var c=p?In(s[o]):F,k=La(c);return k}),e.set(o,u));var m=f(u);if(m===F)return!1}return p},set(s,o,u,p){var M;var m=e.get(o),h=o in s;if(t&&o==="length")for(var c=u;c<m.v;c+=1){var k=e.get(c+"");k!==void 0?Ja(k,F):c in s&&(k=l(()=>La(F)),e.set(c+"",k))}if(m===void 0)(!h||(M=ne(s,o))!=null&&M.writable)&&(m=l(()=>La(void 0)),Ja(m,In(u)),e.set(o,m));else{h=m.v!==F;var b=l(()=>In(u));Ja(m,b)}var g=Reflect.getOwnPropertyDescriptor(s,o);if(g!=null&&g.set&&g.set.call(p,u),!h){if(t&&typeof o=="string"){var y=e.get("length"),C=Number(o);Number.isInteger(C)&&C>=y.v&&Ja(y,C+1)}ie(i)}return!0},ownKeys(s){f(i);var o=Reflect.ownKeys(s).filter(m=>{var h=e.get(m);return h===void 0||h.v!==F});for(var[u,p]of e)p.v!==F&&!(u in s)&&o.push(u);return o},setPrototypeOf(){ms()}})}var ti,Ui,Zi,Vi;function Ms(){if(ti===void 0){ti=window,Ui=/Firefox/.test(navigator.userAgent);var n=Element.prototype,a=Node.prototype,e=Text.prototype;Zi=ne(a,"firstChild").get,Vi=ne(a,"nextSibling").get,Xt(n)&&(n[dt]=void 0,n[Te]=null,n[ht]=void 0,n.__e=void 0),Xt(e)&&(e[Un]=void 0)}}function ln(n=""){return document.createTextNode(n)}function Va(n){return Zi.call(n)}function be(n){return Vi.call(n)}function na(n,a){return Va(n)}function re(n,a=!1){{var e=Va(n);return e instanceof Comment&&e.data===""?be(e):e}}function G(n,a=!1){return Va(n)}function L(n,a=1,e=!1){let t=n;for(;a--;)t=be(t);return t}function Ls(n){n.textContent=""}function Yi(){return!1}function Qi(n,a,e){return a==null||a===Ti?e?document.createElement(n,{is:e}):document.createElement(n):e?document.createElementNS(a,n,{is:e}):document.createElementNS(a,n)}function Bs(n){var a=T;if(a===null)return x.f|=rn,n;if((a.f&Hn)===0&&(a.f&oe)===0)throw n;Da(n,a)}function Da(n,a){if(n===Pi)throw n;if(!(a!==null&&(a.f&V)!==0)){for(;a!==null;){if((a.f&pt)!==0&&(a.f&(V|Le))===0){if((a.f&Hn)===0)throw n;try{a.b.error(n);return}catch(e){n=e}}a=a.parent}throw n}}function Ns(n){T===null&&(x===null&&ps(),os()),on&&us()}function $s(n,a){var e=a.last;e===null?a.last=a.first=n:(e.next=n,n.prev=e,a.last=n)}function pn(n,a){var e=T;e!==null&&(e.f&ia)!==0&&(n|=ia);var t={ctx:la,deps:null,nodes:null,f:n|N|Aa,first:null,fn:a,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};v==null||v.register_created_effect(t);var i=t;if((n&oe)!==0)te!==null?te.push(t):vn.ensure().schedule(t);else if(a!==null){try{zn(t)}catch(l){throw ua(t),l}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Dn)===0&&(i=i.first,(n&xa)!==0&&(n&Bn)!==0&&i!==null&&(i.f|=Bn))}if(i!==null&&(i.parent=e,e!==null&&$s(i,e),x!==null&&(x.f&Y)!==0&&(n&un)===0)){var r=x;(r.effects??(r.effects=[])).push(i)}return t}function Nt(){return x!==null&&!ja}function zs(n){const a=pn(Ue,null);return D(a,K),a.teardown=n,a}function ii(n){Ns();var a=T.f,e=!x&&(a&Ia)!==0&&la!==null&&!la.i;if(e){var t=la;(t.e??(t.e=[])).push(n)}else return Xi(n)}function Xi(n){return pn(oe|Ur,n)}function Hs(n){vn.ensure();const a=pn(un|Dn,n);return(e={})=>new Promise(t=>{e.outro?bn(a,()=>{ua(a),t(void 0)}):(ua(a),t(void 0))})}function Ds(n){return pn(Pn|Dn,n)}function ar(n,a=0){return pn(Ue|a,n)}function Sa(n,a=[],e=[],t=[]){ws(t,a,e,i=>{pn(Ue,()=>{n(...i.map(f))})})}function $t(n,a=0){var e=pn(xa|a,n);return e}function fa(n){return pn(Ia|Dn,n)}function nr(n){var a=n.teardown;if(a!==null){const e=on,t=x;ri(!0),ba(null);try{a.call(null)}catch(i){Da(i,n.parent)}finally{ri(e),ba(t)}}}function zt(n,a=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const i=e.ac;i!==null&&fe(()=>{i.abort(ge)});var t=e.next;(e.f&un)!==0?e.parent=null:ua(e,a),e=t}}function Fs(n){for(var a=n.first;a!==null;){var e=a.next;(a.f&Ia)===0&&ua(a),a=e}}function ua(n,a=!0){var e=!1;(a||(n.f&qr)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(er(n.nodes.start,n.nodes.end),e=!0),n.f|=Le,zt(n,a&&!e),pe(n,0);var t=n.nodes&&n.nodes.t;if(t!==null)for(const r of t)r.stop();nr(n),n.f^=Le,n.f|=V;var i=n.parent;i!==null&&i.first!==null&&tr(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function er(n,a){for(;n!==null;){var e=n===a?null:be(n);n.remove(),n=e}}function tr(n){var a=n.parent,e=n.prev,t=n.next;e!==null&&(e.next=t),t!==null&&(t.prev=e),a!==null&&(a.first===n&&(a.first=t),a.last===n&&(a.last=e))}function bn(n,a,e=!0){var t=[];n.f|=Pt,ir(n,t,!0);var i=()=>{e&&ua(n),a&&a()},r=t.length;if(r>0){var l=()=>--r||i();for(var s of t)s.out(l)}else i()}function ir(n,a,e){if((n.f&ia)===0){n.f^=ia;var t=n.nodes&&n.nodes.t;if(t!==null)for(const s of t)(s.is_global||e)&&a.push(s);for(var i=n.first;i!==null;){var r=i.next;if((i.f&un)===0){var l=(i.f&Bn)!==0||(i.f&Ia)!==0&&(n.f&xa)!==0;ir(i,a,l?e:!1)}i=r}}}function He(n){n.f&=~Pt,rr(n,!0)}function rr(n,a){if((n.f&Pt)===0&&(n.f&ia)!==0){n.f^=ia,(n.f&K)===0&&(D(n,N),vn.ensure().schedule(n));for(var e=n.first;e!==null;){var t=e.next,i=(e.f&Bn)!==0||(e.f&Ia)!==0;rr(e,i?a:!1),e=t}var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||a)&&l.in()}}function Ht(n,a){if(n.nodes)for(var e=n.nodes.start,t=n.nodes.end;e!==null;){var i=e===t?null:be(e);a.append(e),e=i}}let on=!1;function ri(n){on=n}let x=null,ja=!1;function ba(n){x=n}let T=null;function Wa(n){T=n}let Oa=null;function sr(n){x!==null&&((x.f&Ne)!==0||(x.f&Y)!==0)&&(Oa??(Oa=new Set)).add(n)}let sa=null,ha=0,ca=null;function Ks(n){ca=n}let lr=1,mn=0,yn=mn;function si(n){yn=n}function ur(){return++lr}function ye(n){var a=n.f;if((a&N)!==0)return!0;if((a&ma)!==0){for(var e=n.deps,t=e.length,i=0;i<t;i++){var r=e[i];if(ye(r)&&$i(r),r.wv>n.wv)return!0}(a&Aa)!==0&&q===null&&D(n,K)}return!1}function or(n,a,e=!0){var t=n.reactions;if(t!==null&&!(Oa!==null&&Oa.has(n)))for(var i=0;i<t.length;i++){var r=t[i];(r.f&Y)!==0?or(r,a,!1):a===r&&(e?D(r,N):(r.f&K)!==0&&D(r,ma),Bt(r))}}function pr(n){var a=sa,e=ha,t=ca,i=x,r=Oa,l=la,s=ja,o=yn,u=n.f;sa=null,ha=0,ca=null,x=(u&(Ia|un))===0?n:null,Oa=null,Nn(n.ctx),ja=!1,yn=++mn,n.ac!==null&&(fe(()=>{n.ac.abort(ge)}),n.ac=null);try{n.f|=Ne;var p=n.fn,m=p();n.f|=Hn;var h=li(n);if(Mi()&&ca!==null&&!ja&&h!==null&&(n.f&(Y|ma|N))===0)for(var c=0;c<ca.length;c++)or(ca[c],n);if(i!==null&&i!==n){if(mn++,i.deps!==null)for(let k=0;k<e;k+=1)i.deps[k].rv=mn;if(a!==null)for(const k of a)k.rv=mn;ca!==null&&(t===null?t=ca:t.push(...ca))}return(n.f&rn)!==0&&(n.f^=rn),m}catch(k){return li(n),Bs(k)}finally{n.f^=Ne,sa=a,ha=e,ca=t,x=i,Oa=r,Nn(l),ja=s,yn=o}}function li(n){var i;var a=n.deps,e=v==null?void 0:v.is_fork;if(sa!==null){var t;if(e||pe(n,ha),a!==null&&ha>0)for(a.length=ha+sa.length,t=0;t<sa.length;t++)a[ha+t]=sa[t];else n.deps=a=sa;if(Nt()&&(n.f&Aa)!==0)for(t=ha;t<a.length;t++)((i=a[t]).reactions??(i.reactions=[])).push(n)}else!e&&a!==null&&ha<a.length&&(pe(n,ha),a.length=ha);return a}function Os(n,a){let e=a.reactions;if(e!==null){var t=Fr.call(e,n);if(t!==-1){var i=e.length-1;i===0?e=a.reactions=null:(e[t]=e[i],e.pop())}}if(e===null&&(a.f&Y)!==0&&(sa===null||!ue.call(sa,a))){var r=a;(r.f&Aa)!==0&&(r.f^=Aa),r.v!==F&&Rt(r),r.ac!==null&&fe(()=>{r.ac.abort(ge),r.ac=null,D(r,N)}),As(r),pe(r,0)}}function pe(n,a){var e=n.deps;if(e!==null)for(var t=a;t<e.length;t++)Os(n,e[t])}function zn(n){var a=n.f;if((a&V)===0){D(n,K);var e=T;T=n;try{(a&(xa|ji))!==0?Fs(n):zt(n),nr(n);var t=pr(n);n.teardown=typeof t=="function"?t:null,n.wv=lr;var i;vi&&gs&&(n.f&N)!==0&&n.deps}finally{T=e}}}async function Ws(){await Promise.resolve(),Ts()}function f(n){var a=n.f,e=(a&Y)!==0;if(x!==null&&!ja){var t=T!==null&&(T.f&V)!==0;if(!t&&(Oa===null||!Oa.has(n))){var i=x.deps;if((x.f&Ne)!==0)n.rv<mn&&(n.rv=mn,sa===null&&i!==null&&i[ha]===n?ha++:sa===null?sa=[n]:sa.push(n));else{x.deps??(x.deps=[]),ue.call(x.deps,n)||x.deps.push(n);var r=n.reactions;r===null?n.reactions=[x]:ue.call(r,x)||r.push(x)}}}if(on&&Ka.has(n))return Ka.get(n);if(e){var l=n;if(on){var s=l.v;return((l.f&K)===0&&l.reactions!==null||hr(l))&&(s=Mt(l)),Ka.set(l,s),s}var o=(l.f&Aa)===0&&!ja&&x!==null&&(x.f&Aa)!==0,u=(l.f&Hn)===0;ye(l)&&(o&&(l.f|=Aa),$i(l)),o&&!u&&(zi(l),dr(l))}if(q!=null&&q.has(n))return q.get(n);if((n.f&rn)!==0)throw n.v;return n.v}function dr(n){if(n.f|=Aa,n.deps!==null)for(const e of n.deps){var a=e.reactions;a===null?e.reactions=[n]:ue.call(a,n)||a.push(n),(e.f&Y)!==0&&(e.f&Aa)===0&&(zi(e),dr(e))}}function hr(n){if(n.v===F)return!0;if(n.deps===null)return!1;for(const a of n.deps)if(Ka.has(a)||(a.f&Y)!==0&&hr(a))return!0;return!1}function mr(n){var a=ja;try{return ja=!0,n()}finally{ja=a}}const Gs=["touchstart","touchmove"];function Js(n){return Gs.includes(n)}const xe=Symbol("events"),qs=new Set,ui=new Set;let tt=null,it=!1;function oi(n){var b,g;var a=this,e=a.ownerDocument,t=n.type,i=((b=n.composedPath)==null?void 0:b.call(n))||[],r=i[0]||n.target;tt=n,it||(it=!0,setTimeout(()=>{it=!1,tt=null}));var l=0,s=tt===n&&n[xe];if(s){var o=i.indexOf(s);if(o!==-1&&(a===document||a===window)){n[xe]=a;return}var u=i.indexOf(a);if(u===-1)return;o<=u&&(l=o)}if(r=i[l]||n.target,r!==a){_i(n,"currentTarget",{configurable:!0,get(){return r||e}});var p=x,m=T;ba(null),Wa(null);try{for(var h,c=[];r!==null&&r!==a;){try{var k=(g=r[xe])==null?void 0:g[t];k!=null&&(!r.disabled||n.target===r)&&k.call(r,n)}catch(y){h?c.push(y):h=y}if(n.cancelBubble)break;l++,r=l<i.length?i[l]:null}if(h){for(let y of c)queueMicrotask(()=>{throw y});throw h}}finally{n[xe]=a,delete n.currentTarget,ba(p),Wa(m)}}}var bi;const rt=((bi=globalThis==null?void 0:globalThis.window)==null?void 0:bi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Us(n){return(rt==null?void 0:rt.createHTML(n))??n}function Zs(n){var a=Qi("template");return a.innerHTML=Us(n.replaceAll("<!>","<!---->")),a.content}function de(n,a){var e=T;e.nodes===null&&(e.nodes={start:n,end:a,a:null,t:null})}function ra(n,a){var e=(a&Xr)!==0,t=(a&as)!==0,i,r=!n.startsWith("<!>");return()=>{i===void 0&&(i=Zs(r?n:"<!>"+n),e||(i=Va(i)));var l=t||Ui?document.importNode(i,!0):i.cloneNode(!0);if(e){var s=Va(l),o=l.lastChild;de(s,o)}else de(l,l);return l}}function cr(){var n=document.createDocumentFragment(),a=document.createComment(""),e=ln();return n.append(a,e),de(a,e),n}function J(n,a){n!==null&&n.before(a)}function Vs(n){let a=0,e=wn(0),t;return()=>{Nt()&&(f(e),ar(()=>(a===0&&(t=mr(()=>n(()=>ie(e)))),a+=1,()=>{en(()=>{a-=1,a===0&&(t==null||t(),t=void 0,ie(e))})})))}}var Ys=Bn|Dn;function Qs(n,a,e,t){new Xs(n,a,e,t)}var ka,It,ga,kn,Z,oa,ea,pa,za,gn,nn,Ln,me,Za,Ge,I,al,nl,bt,an,el,yt,Qn,Ce,vt,wt;class Xs{constructor(a,e,t,i){j(this,I);_(this,"parent");_(this,"is_pending",!1);_(this,"transform_error");j(this,ka);j(this,It,null);j(this,ga);j(this,kn);j(this,Z);j(this,oa,null);j(this,ea,null);j(this,pa,null);j(this,za,null);j(this,gn,0);j(this,nn,0);j(this,Ln,!1);j(this,me,new Map);j(this,Za,null);j(this,Ge,Vs(()=>(S(this,Za,wn(d(this,gn))),()=>{S(this,Za,null)})));var r;S(this,ka,a),S(this,ga,e),S(this,kn,l=>{var s=T;s.b=this,s.f|=pt,t(l)}),this.parent=T.b,this.transform_error=i??((r=this.parent)==null?void 0:r.transform_error)??(l=>l),S(this,Z,$t(()=>{w(this,I,yt).call(this)},Ys))}defer_effect(a){Bi(a,d(this,me))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!d(this,ga).pending}update_pending_count(a,e){w(this,I,vt).call(this,a,e),S(this,gn,d(this,gn)+a),!(!d(this,Za)||d(this,Ln))&&(S(this,Ln,!0),en(()=>{S(this,Ln,!1),d(this,Za)&&$n(d(this,Za),d(this,gn))}))}get_effect_pending(){return d(this,Ge).call(this),f(d(this,Za))}error(a){if(a===Pi||!d(this,ga).onerror&&!d(this,ga).failed)throw a;v!=null&&v.is_fork?(d(this,oa)&&v.skip_effect(d(this,oa)),d(this,ea)&&v.skip_effect(d(this,ea)),d(this,pa)&&v.skip_effect(d(this,pa)),v.oncommit(()=>{w(this,I,an).call(this)||w(this,I,wt).call(this,a)})):w(this,I,wt).call(this,a)}}ka=new WeakMap,It=new WeakMap,ga=new WeakMap,kn=new WeakMap,Z=new WeakMap,oa=new WeakMap,ea=new WeakMap,pa=new WeakMap,za=new WeakMap,gn=new WeakMap,nn=new WeakMap,Ln=new WeakMap,me=new WeakMap,Za=new WeakMap,Ge=new WeakMap,I=new WeakSet,al=function(){try{S(this,oa,fa(()=>d(this,kn).call(this,d(this,ka))))}catch(a){this.error(a)}},nl=function(a){const e=d(this,ga).failed,{reset:t,invoke_onerror:i}=w(this,I,bt).call(this,a);en(i),e&&S(this,pa,fa(()=>{e(d(this,ka),()=>a,()=>t)}))},bt=function(a){var e=!1,t=!1;const i=()=>{if(!w(this,I,an).call(this)){if(e){is();return}e=!0,t&&ks(),d(this,pa)!==null&&bn(d(this,pa),()=>{S(this,pa,null)}),w(this,I,Ce).call(this,()=>{w(this,I,yt).call(this)})}};return{reset:i,invoke_onerror:()=>{var l,s;if(!w(this,I,an).call(this))try{t=!0,(s=(l=d(this,ga)).onerror)==null||s.call(l,a,i),t=!1}catch(o){Da(o,d(this,Z)&&d(this,Z).parent)}}}},an=function(){return(d(this,Z).f&(V|Le))!==0},el=function(){const a=d(this,ga).pending;a&&(this.is_pending=!0,S(this,ea,fa(()=>a(d(this,ka)))),en(()=>{if(!w(this,I,an).call(this)){var e=S(this,za,document.createDocumentFragment()),t=ln(),i=!1;if(e.append(t),S(this,oa,w(this,I,Ce).call(this,()=>{try{return fa(()=>d(this,kn).call(this,t))}catch(r){try{this.error(r),i=!0}catch(l){Da(l,d(this,Z).parent)}return null}})),d(this,oa)===null){S(this,za,null),i&&w(this,I,Qn).call(this,v);return}d(this,nn)===0&&(d(this,ka).before(e),S(this,za,null),bn(d(this,ea),()=>{S(this,ea,null)}),w(this,I,Qn).call(this,v))}}))},yt=function(){try{if(this.is_pending=this.has_pending_snippet(),S(this,nn,0),S(this,gn,0),S(this,oa,fa(()=>{d(this,kn).call(this,d(this,ka))})),d(this,nn)>0){var a=S(this,za,document.createDocumentFragment());Ht(d(this,oa),a);const e=d(this,ga).pending;S(this,ea,fa(()=>e(d(this,ka))))}else w(this,I,Qn).call(this,v)}catch(e){this.error(e)}},Qn=function(a){this.is_pending=!1,a.transfer_reactions(d(this,me))},Ce=function(a){var e=T,t=x,i=la;Wa(d(this,Z)),ba(d(this,Z)),Nn(d(this,Z).ctx);try{return vn.ensure(),a()}finally{Wa(e),ba(t),Nn(i)}},vt=function(a,e){var t;if(!this.has_pending_snippet()){this.parent&&w(t=this.parent,I,vt).call(t,a,e);return}S(this,nn,d(this,nn)+a),d(this,nn)===0&&(w(this,I,Qn).call(this,e),d(this,ea)&&bn(d(this,ea),()=>{S(this,ea,null)}),d(this,za)&&(d(this,ka).before(d(this,za)),S(this,za,null)))},wt=function(a){d(this,oa)&&(ua(d(this,oa)),S(this,oa,null)),d(this,ea)&&(ua(d(this,ea)),S(this,ea,null)),d(this,pa)&&(ua(d(this,pa)),S(this,pa,null));let e=d(this,ga).failed;const t=i=>{if(w(this,I,an).call(this))return;const{reset:r,invoke_onerror:l}=w(this,I,bt).call(this,i);l(),e&&!w(this,I,an).call(this)&&S(this,pa,w(this,I,Ce).call(this,()=>{try{return fa(()=>{var s=T;s.b=this,s.f|=pt,e(d(this,ka),()=>i,()=>r)})}catch(s){return Da(s,d(this,Z).parent),null}}))};en(()=>{if(!w(this,I,an).call(this)){var i;try{i=this.transform_error(a)}catch(r){Da(r,d(this,Z)&&d(this,Z).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(t,r=>Da(r,d(this,Z)&&d(this,Z).parent)):t(i)}})};function H(n,a){var e=a==null?"":typeof a=="object"?`${a}`:a;e!==(n[Un]??(n[Un]=n.nodeValue))&&(n[Un]=e,n.nodeValue=`${e}`)}function tl(n,a){return il(n,a)}const je=new Map;function il(n,{target:a,anchor:e,props:t={},events:i,context:r,intro:l=!0,transformError:s}){Ms();var o=void 0,u=Hs(()=>{var p=e??a.appendChild(ln());Qs(p,{pending:()=>{}},c=>{Tt({});var k=la;r&&(k.c=r),i&&(t.$$events=i),o=n(c,t)||Ci(),Et()},s);var m=new Set,h=c=>{for(var k=0;k<c.length;k++){var b=c[k];if(!m.has(b)){m.add(b);var g=Js(b);for(const M of[a,document]){var y=je.get(M);y===void 0&&(y=new Map,je.set(M,y));var C=y.get(b);C===void 0?(M.addEventListener(b,oi,{passive:g}),y.set(b,1)):y.set(b,C+1)}}}};return h(qe(qs)),ui.add(h),()=>{var g;for(var c of m)for(const y of[a,document]){var k=je.get(y),b=k.get(c);--b==0?(y.removeEventListener(c,oi),k.delete(c),k.size===0&&je.delete(y)):k.set(c,b)}ui.delete(h),p!==e&&((g=p.parentNode)==null||g.removeChild(p))}});return rl.set(o,u),o}let rl=new WeakMap;var _a,Ha,da,fn,ce,ke,Je;class sl{constructor(a,e=!0){_(this,"anchor");j(this,_a,new Map);j(this,Ha,new Map);j(this,da,new Map);j(this,fn,new Set);j(this,ce,!0);j(this,ke,a=>{if(d(this,_a).has(a)){var e=d(this,_a).get(a),t=d(this,Ha).get(e);if(t)He(t),d(this,fn).delete(e);else{var i=d(this,da).get(e);i&&(He(i.effect),d(this,Ha).set(e,i.effect),d(this,da).delete(e),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),t=i.effect)}for(const[r,l]of d(this,_a)){if(d(this,_a).delete(r),r===a)break;const s=d(this,da).get(l);s&&(ua(s.effect),d(this,da).delete(l))}for(const[r,l]of d(this,Ha)){if(r===e||d(this,fn).has(r))continue;const s=()=>{if(Array.from(d(this,_a).values()).includes(r)){var u=document.createDocumentFragment();Ht(l,u),u.append(ln()),d(this,da).set(r,{effect:l,fragment:u})}else ua(l);d(this,fn).delete(r),d(this,Ha).delete(r)};d(this,ce)||!t?(d(this,fn).add(r),bn(l,s,!1)):s()}}});j(this,Je,a=>{d(this,_a).delete(a);const e=Array.from(d(this,_a).values());for(const[t,i]of d(this,da))e.includes(t)||(ua(i.effect),d(this,da).delete(t))});this.anchor=a,S(this,ce,e)}ensure(a,e){var t=v,i=Yi();if(e&&!d(this,Ha).has(a)&&!d(this,da).has(a))if(i){var r=document.createDocumentFragment(),l=ln();r.append(l),d(this,da).set(a,{effect:fa(()=>e(l)),fragment:r})}else d(this,Ha).set(a,fa(()=>e(this.anchor)));if(d(this,_a).set(t,a),i){for(const[s,o]of d(this,Ha))s===a?t.unskip_effect(o):t.skip_effect(o);for(const[s,o]of d(this,da))s===a?t.unskip_effect(o.effect):t.skip_effect(o.effect);t.oncommit(d(this,ke)),t.ondiscard(d(this,Je))}else d(this,ke).call(this,t)}}_a=new WeakMap,Ha=new WeakMap,da=new WeakMap,fn=new WeakMap,ce=new WeakMap,ke=new WeakMap,Je=new WeakMap;function tn(n,a,e=!1){var t=new sl(n),i=e?Bn:0;function r(l,s){t.ensure(l,s)}$t(()=>{var l=!1;a((s,o=0)=>{l=!0,r(o,s)}),l||r(-1,null)},i)}function Ae(n,a){return a}function ll(n,a,e){for(var t=[],i=a.length,r,l=a.length,s=0;s<i;s++){let m=a[s];bn(m,()=>{if(r){if(r.pending.delete(m),r.done.add(m),r.pending.size===0){var h=n.outrogroups;_t(n,qe(r.done)),h.delete(r),h.size===0&&(n.outrogroups=null)}}else l-=1},!1)}if(l===0){var o=t.length===0&&e!==null&&n.pending.size===0;if(o){var u=e,p=u.parentNode;Ls(p),p.append(u),n.items.clear()}_t(n,a,!o)}else r={pending:new Set(a),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function _t(n,a,e=!0){var t;if(n.pending.size>0){t=new Set;for(const l of n.pending.values())for(const s of l)t.add(n.items.get(s).e)}for(var i=0;i<a.length;i++){var r=a[i];if(t!=null&&t.has(r)){r.f|=Fa;const l=document.createDocumentFragment();Ht(r,l)}else ua(a[i],e)}}var pi;function Ie(n,a,e,t,i,r=null){var l=n,s=new Map,o=(a&Ii)!==0;if(o){var u=n;l=u.appendChild(ln())}var p=null,m=xs(()=>{var C=e();return wi(C)?C:C==null?[]:qe(C)}),h=new Map,c=!0;function k(C){if((y.effect.f&V)===0){y.pending.delete(C);var M=f(m);y.fallback=p,ul(y,M,l,a,t),p!==null&&(M.length===0?(p.f&Fa)===0?He(p):(p.f^=Fa,Xn(p,null,l)):bn(p,()=>{p=null}))}}function b(C){y.pending.delete(C)}var g=$t(()=>{for(var C=f(m),M=C.length,z=new Set,O=v,Q=Yi(),$=0;$<M;$+=1){var ya=C[$],Pa=t(ya,$),U=c?null:s.get(Pa);U?(U.v&&$n(U.v,ya),U.i&&$n(U.i,$),Q&&O.unskip_effect(U.e)):(U=ol(s,c?l:pi??(pi=ln()),ya,Pa,$,i,a,e),c||(U.e.f|=Fa),s.set(Pa,U)),z.add(Pa)}if(M===0&&r&&!p&&(c?p=fa(()=>r(l)):(p=fa(()=>r(pi??(pi=ln()))),p.f|=Fa)),M>z.size&&ls(),!c)if(h.set(O,z),Q){for(const[W,P]of s)z.has(W)||O.skip_effect(P.e);O.oncommit(k),O.ondiscard(b)}else k(O);f(m)}),y={effect:g,items:s,pending:h,outrogroups:null,fallback:p};c=!1}function Gn(n){for(;n!==null&&(n.f&Ia)===0;)n=n.next;return n}function ul(n,a,e,t,i){var U,W,P,B,X,Ta,Ea,Ra,Ca;var r=(t&Yr)!==0,l=a.length,s=n.items,o=Gn(n.effect.first),u,p=null,m,h=[],c=[],k,b,g,y;if(r)for(y=0;y<l;y+=1)k=a[y],b=i(k,y),g=s.get(b).e,(g.f&Fa)===0&&((W=(U=g.nodes)==null?void 0:U.a)==null||W.measure(),(m??(m=new Set)).add(g));for(y=0;y<l;y+=1){if(k=a[y],b=i(k,y),g=s.get(b).e,n.outrogroups!==null)for(const aa of n.outrogroups)aa.pending.delete(g),aa.done.delete(g);if((g.f&ia)!==0&&(He(g),r&&((B=(P=g.nodes)==null?void 0:P.a)==null||B.unfix(),(m??(m=new Set)).delete(g))),(g.f&Fa)!==0)if(g.f^=Fa,g===o)Xn(g,null,e);else{var C=p?p.next:o;g===n.effect.last&&(n.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),Xa(n,p,g),Xa(n,g,C),Xn(g,C,e),p=g,h=[],c=[],o=Gn(p.next);continue}if(g!==o){if(u!==void 0&&u.has(g)){if(h.length<c.length){var M=c[0],z;p=M.prev;var O=h[0],Q=h[h.length-1];for(z=0;z<h.length;z+=1)Xn(h[z],M,e);for(z=0;z<c.length;z+=1)u.delete(c[z]);Xa(n,O.prev,Q.next),Xa(n,p,O),Xa(n,Q,M),o=M,p=Q,y-=1,h=[],c=[]}else u.delete(g),Xn(g,o,e),Xa(n,g.prev,g.next),Xa(n,g,p===null?n.effect.first:p.next),Xa(n,p,g),p=g;continue}for(h=[],c=[];o!==null&&o!==g;)(u??(u=new Set)).add(o),c.push(o),o=Gn(o.next);if(o===null)continue}(g.f&Fa)===0&&h.push(g),p=g,o=Gn(g.next)}if(n.outrogroups!==null){for(const aa of n.outrogroups)aa.pending.size===0&&(_t(n,qe(aa.done)),(X=n.outrogroups)==null||X.delete(aa));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||u!==void 0){var $=[];if(u!==void 0)for(g of u)(g.f&ia)===0&&$.push(g);for(;o!==null;)(o.f&ia)===0&&o!==n.fallback&&$.push(o),o=Gn(o.next);var ya=$.length;if(ya>0){var Pa=(t&Ii)!==0&&l===0?e:null;if(r){for(y=0;y<ya;y+=1)(Ea=(Ta=$[y].nodes)==null?void 0:Ta.a)==null||Ea.measure();for(y=0;y<ya;y+=1)(Ca=(Ra=$[y].nodes)==null?void 0:Ra.a)==null||Ca.fix()}ll(n,$,Pa)}}r&&en(()=>{var aa,va;if(m!==void 0)for(g of m)(va=(aa=g.nodes)==null?void 0:aa.a)==null||va.apply()})}function ol(n,a,e,t,i,r,l,s){var o=(l&Zr)!==0?(l&Qr)===0?Rs(e,!1,!1):wn(e):null,u=(l&Vr)!==0?wn(i):null;return{v:o,i:u,e:fa(()=>(r(a,o??e,u??i,s),()=>{n.delete(t)}))}}function Xn(n,a,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end,r=a&&(a.f&Fa)===0?a.nodes.start:e;t!==null;){var l=be(t);if(r.before(t),t===i)return;t=l}}function Xa(n,a,e){a===null?n.effect.first=e:a.next=e,e===null?n.effect.last=a:e.prev=a}function pl(n,a,e=!1,t=!1,i=!1,r=!1){var l=n,s="";if(e)var o=n;Sa(()=>{var u=T;if(s!==(s=a()??"")){if(e){u.nodes=null,o.innerHTML=s,s!==""&&de(Va(o),o.lastChild);return}if(u.nodes!==null&&(er(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){var p=t?ns:i?es:void 0,m=Qi(t?"svg":i?"math":"template",p);m.innerHTML=s;var h=t||i?m:m.content;if(de(Va(h),h.lastChild),t||i)for(;Va(h);)l.before(Va(h));else l.before(h)}}})}function dl(n,a,e){var t=n==null?"":""+n;return t===""?null:t}function hl(n,a){return n==null?null:String(n)}function di(n,a,e,t,i,r){var l=n[dt];if(l!==e||l===void 0){var s=dl(e);s==null?n.removeAttribute("class"):n.className=s,n[dt]=e}return r}function ae(n,a,e,t){var i=n[ht];if(i!==a){var r=hl(a);r==null?n.removeAttribute("style"):n.style.cssText=r,n[ht]=a}return t}const ml=Symbol("is custom element"),cl=Symbol("is html");function se(n,a,e,t){var i=kl(n),r=i[a];r!==(i[a]=e)&&(e==null?n.removeAttribute(a):typeof e!="string"&&gl(n).has(a)?n[a]=e:n.setAttribute(a,e))}function kl(n){return n[Te]??(n[Te]={[ml]:n.nodeName.includes("-"),[cl]:n.namespaceURI===Ti})}var hi=new Map;function gl(n){var a=n.getAttribute("is")||n.nodeName,e=hi.get(a);if(e)return e;hi.set(a,e=new Set);for(var t,i=n,r=Element.prototype;r!==i;){t=Kr(i);for(var l in t)t[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&e.add(l);i=Si(i)}return e}function fl(n,a,e=a){var t=new WeakSet;vs(n,"input",async i=>{var r=i?n.defaultValue:n.value;if(r=st(n)?lt(r):r,e(r),v!==null&&t.add(v),await Ws(),r!==(r=a())){var l=n.selectionStart,s=n.selectionEnd,o=n.value.length;if(n.value=r??"",s!==null){var u=n.value.length;l===s&&s===o&&u>o?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=l,n.selectionEnd=Math.min(s,u))}}}),mr(a)==null&&n.value&&(e(st(n)?lt(n.value):n.value),v!==null&&t.add(v)),ar(()=>{var i=a();if(n===document.activeElement){var r=v;if(t.has(r))return}st(n)&&i===lt(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function st(n){var a=n.type;return a==="number"||a==="range"}function lt(n){return n===""?null:+n}const bl="5";var yi;typeof window<"u"&&((yi=window.__svelte??(window.__svelte={})).v??(yi.v=new Set)).add(bl);const yl=`---
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
`,Sl=`---
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
`,xl=`---
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
`,jl=`---
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
`,Al=`---
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
`,Il=`---
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
`,Pl=`---
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
`,Tl=`---
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
`,El=`---
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
`,Rl=`---
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
`,Cl=`---
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
`,Ml=`---
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
`,Ll=`---
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
`,Bl=`---
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
`;function Dt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Sn=Dt();function kr(n){Sn=n}var le={exec:()=>null};function E(n,a=""){let e=typeof n=="string"?n:n.source;const t={replace:(i,r)=>{let l=typeof r=="string"?r:r.source;return l=l.replace(ta.caret,"$1"),e=e.replace(i,l),t},getRegex:()=>new RegExp(e,a)};return t}var ta={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},Nl=/^(?:[ \t]*(?:\n|$))+/,$l=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,zl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ve=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Hl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ft=/(?:[*+-]|\d{1,9}[.)])/,gr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,fr=E(gr).replace(/bull/g,Ft).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Dl=E(gr).replace(/bull/g,Ft).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Kt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Fl=/^[^\n]+/,Ot=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Kl=E(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ot).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ol=E(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ft).getRegex(),Ze="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Wl=E("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Wt).replace("tag",Ze).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),br=E(Kt).replace("hr",ve).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Gl=E(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",br).getRegex(),Gt={blockquote:Gl,code:$l,def:Kl,fences:zl,heading:Hl,hr:ve,html:Wl,lheading:fr,list:Ol,newline:Nl,paragraph:br,table:le,text:Fl},mi=E("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ve).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex(),Jl={...Gt,lheading:Dl,table:mi,paragraph:E(Kt).replace("hr",ve).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",mi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ze).getRegex()},ql={...Gt,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:le,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(Kt).replace("hr",ve).replace("heading",` *#{1,6} *[^
]`).replace("lheading",fr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ul=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Zl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,yr=/^( {2,}|\\)\n(?!\s*$)/,Vl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ve=/[\p{P}\p{S}]/u,Jt=/[\s\p{P}\p{S}]/u,vr=/[^\s\p{P}\p{S}]/u,Yl=E(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Jt).getRegex(),wr=/(?!~)[\p{P}\p{S}]/u,Ql=/(?!~)[\s\p{P}\p{S}]/u,Xl=/(?:[^\s\p{P}\p{S}]|~)/u,au=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,_r=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,nu=E(_r,"u").replace(/punct/g,Ve).getRegex(),eu=E(_r,"u").replace(/punct/g,wr).getRegex(),Sr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",tu=E(Sr,"gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,Jt).replace(/punct/g,Ve).getRegex(),iu=E(Sr,"gu").replace(/notPunctSpace/g,Xl).replace(/punctSpace/g,Ql).replace(/punct/g,wr).getRegex(),ru=E("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,Jt).replace(/punct/g,Ve).getRegex(),su=E(/\\(punct)/,"gu").replace(/punct/g,Ve).getRegex(),lu=E(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),uu=E(Wt).replace("(?:-->|$)","-->").getRegex(),ou=E("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",uu).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),De=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,pu=E(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",De).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xr=E(/^!?\[(label)\]\[(ref)\]/).replace("label",De).replace("ref",Ot).getRegex(),jr=E(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ot).getRegex(),du=E("reflink|nolink(?!\\()","g").replace("reflink",xr).replace("nolink",jr).getRegex(),qt={_backpedal:le,anyPunctuation:su,autolink:lu,blockSkip:au,br:yr,code:Zl,del:le,emStrongLDelim:nu,emStrongRDelimAst:tu,emStrongRDelimUnd:ru,escape:Ul,link:pu,nolink:jr,punctuation:Yl,reflink:xr,reflinkSearch:du,tag:ou,text:Vl,url:le},hu={...qt,link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",De).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",De).getRegex()},St={...qt,emStrongRDelimAst:iu,emStrongLDelim:eu,url:E(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},mu={...St,br:E(yr).replace("{2,}","*").getRegex(),text:E(St.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Pe={normal:Gt,gfm:Jl,pedantic:ql},Jn={normal:qt,gfm:St,breaks:mu,pedantic:hu},cu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ci=n=>cu[n];function Ma(n,a){if(a){if(ta.escapeTest.test(n))return n.replace(ta.escapeReplace,ci)}else if(ta.escapeTestNoEncode.test(n))return n.replace(ta.escapeReplaceNoEncode,ci);return n}function ki(n){try{n=encodeURI(n).replace(ta.percentDecode,"%")}catch{return null}return n}function gi(n,a){var r;const e=n.replace(ta.findPipe,(l,s,o)=>{let u=!1,p=s;for(;--p>=0&&o[p]==="\\";)u=!u;return u?"|":" |"}),t=e.split(ta.splitPipe);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!((r=t.at(-1))!=null&&r.trim())&&t.pop(),a)if(t.length>a)t.splice(a);else for(;t.length<a;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(ta.slashPipe,"|");return t}function qn(n,a,e){const t=n.length;if(t===0)return"";let i=0;for(;i<t&&n.charAt(t-i-1)===a;)i++;return n.slice(0,t-i)}function ku(n,a){if(n.indexOf(a[1])===-1)return-1;let e=0;for(let t=0;t<n.length;t++)if(n[t]==="\\")t++;else if(n[t]===a[0])e++;else if(n[t]===a[1]&&(e--,e<0))return t;return e>0?-2:-1}function fi(n,a,e,t,i){const r=a.href,l=a.title||null,s=n[1].replace(i.other.outputLinkReplace,"$1");t.state.inLink=!0;const o={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:r,title:l,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,o}function gu(n,a,e){const t=n.match(e.other.indentCodeCompensation);if(t===null)return a;const i=t[1];return a.split(`
`).map(r=>{const l=r.match(e.other.beginningSpace);if(l===null)return r;const[s]=l;return s.length>=i.length?r.slice(i.length):r}).join(`
`)}var Fe=class{constructor(n){_(this,"options");_(this,"rules");_(this,"lexer");this.options=n||Sn}space(n){const a=this.rules.block.newline.exec(n);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(n){const a=this.rules.block.code.exec(n);if(a){const e=a[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?e:qn(e,`
`)}}}fences(n){const a=this.rules.block.fences.exec(n);if(a){const e=a[0],t=gu(e,a[3]||"",this.rules);return{type:"code",raw:e,lang:a[2]?a[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):a[2],text:t}}}heading(n){const a=this.rules.block.heading.exec(n);if(a){let e=a[2].trim();if(this.rules.other.endingHash.test(e)){const t=qn(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:a[0],depth:a[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const a=this.rules.block.hr.exec(n);if(a)return{type:"hr",raw:qn(a[0],`
`)}}blockquote(n){const a=this.rules.block.blockquote.exec(n);if(a){let e=qn(a[0],`
`).split(`
`),t="",i="";const r=[];for(;e.length>0;){let l=!1;const s=[];let o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))s.push(e[o]),l=!0;else if(!l)s.push(e[o]);else break;e=e.slice(o);const u=s.join(`
`),p=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${u}`:u,i=i?`${i}
${p}`:p;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,r,!0),this.lexer.state.top=m,e.length===0)break;const h=r.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){const c=h,k=c.raw+`
`+e.join(`
`),b=this.blockquote(k);r[r.length-1]=b,t=t.substring(0,t.length-c.raw.length)+b.raw,i=i.substring(0,i.length-c.text.length)+b.text;break}else if((h==null?void 0:h.type)==="list"){const c=h,k=c.raw+`
`+e.join(`
`),b=this.list(k);r[r.length-1]=b,t=t.substring(0,t.length-h.raw.length)+b.raw,i=i.substring(0,i.length-c.raw.length)+b.raw,e=k.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:r,text:i}}}list(n){let a=this.rules.block.list.exec(n);if(a){let e=a[1].trim();const t=e.length>1,i={type:"list",raw:"",ordered:t,start:t?+e.slice(0,-1):"",loose:!1,items:[]};e=t?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=t?e:"[*+-]");const r=this.rules.other.listItemRegex(e);let l=!1;for(;n;){let o=!1,u="",p="";if(!(a=r.exec(n))||this.rules.block.hr.test(n))break;u=a[0],n=n.substring(u.length);let m=a[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),h=n.split(`
`,1)[0],c=!m.trim(),k=0;if(this.options.pedantic?(k=2,p=m.trimStart()):c?k=a[1].length+1:(k=a[2].search(this.rules.other.nonSpaceChar),k=k>4?1:k,p=m.slice(k),k+=a[1].length),c&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,n=n.substring(h.length+1),o=!0),!o){const y=this.rules.other.nextBulletRegex(k),C=this.rules.other.hrRegex(k),M=this.rules.other.fencesBeginRegex(k),z=this.rules.other.headingBeginRegex(k),O=this.rules.other.htmlBeginRegex(k);for(;n;){const Q=n.split(`
`,1)[0];let $;if(h=Q,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),$=h):$=h.replace(this.rules.other.tabCharGlobal,"    "),M.test(h)||z.test(h)||O.test(h)||y.test(h)||C.test(h))break;if($.search(this.rules.other.nonSpaceChar)>=k||!h.trim())p+=`
`+$.slice(k);else{if(c||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||M.test(m)||z.test(m)||C.test(m))break;p+=`
`+h}!c&&!h.trim()&&(c=!0),u+=Q+`
`,n=n.substring(Q.length+1),m=$.slice(k)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let b=null,g;this.options.gfm&&(b=this.rules.other.listIsTask.exec(p),b&&(g=b[0]!=="[ ] ",p=p.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:u,task:!!b,checked:g,loose:!1,text:p,tokens:[]}),i.raw+=u}const s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let o=0;o<i.items.length;o++)if(this.lexer.state.top=!1,i.items[o].tokens=this.lexer.blockTokens(i.items[o].text,[]),!i.loose){const u=i.items[o].tokens.filter(m=>m.type==="space"),p=u.length>0&&u.some(m=>this.rules.other.anyLine.test(m.raw));i.loose=p}if(i.loose)for(let o=0;o<i.items.length;o++)i.items[o].loose=!0;return i}}html(n){const a=this.rules.block.html.exec(n);if(a)return{type:"html",block:!0,raw:a[0],pre:a[1]==="pre"||a[1]==="script"||a[1]==="style",text:a[0]}}def(n){const a=this.rules.block.def.exec(n);if(a){const e=a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=a[2]?a[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=a[3]?a[3].substring(1,a[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):a[3];return{type:"def",tag:e,raw:a[0],href:t,title:i}}}table(n){var l;const a=this.rules.block.table.exec(n);if(!a||!this.rules.other.tableDelimiter.test(a[2]))return;const e=gi(a[1]),t=a[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(l=a[3])!=null&&l.trim()?a[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:a[0],header:[],align:[],rows:[]};if(e.length===t.length){for(const s of t)this.rules.other.tableAlignRight.test(s)?r.align.push("right"):this.rules.other.tableAlignCenter.test(s)?r.align.push("center"):this.rules.other.tableAlignLeft.test(s)?r.align.push("left"):r.align.push(null);for(let s=0;s<e.length;s++)r.header.push({text:e[s],tokens:this.lexer.inline(e[s]),header:!0,align:r.align[s]});for(const s of i)r.rows.push(gi(s,r.header.length).map((o,u)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[u]})));return r}}lheading(n){const a=this.rules.block.lheading.exec(n);if(a)return{type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:this.lexer.inline(a[1])}}paragraph(n){const a=this.rules.block.paragraph.exec(n);if(a){const e=a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const a=this.rules.block.text.exec(n);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(n){const a=this.rules.inline.escape.exec(n);if(a)return{type:"escape",raw:a[0],text:a[1]}}tag(n){const a=this.rules.inline.tag.exec(n);if(a)return!this.lexer.state.inLink&&this.rules.other.startATag.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:a[0]}}link(n){const a=this.rules.inline.link.exec(n);if(a){const e=a[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const r=qn(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=ku(a[2],"()");if(r===-2)return;if(r>-1){const s=(a[0].indexOf("!")===0?5:4)+a[1].length+r;a[2]=a[2].substring(0,r),a[0]=a[0].substring(0,s).trim(),a[3]=""}}let t=a[2],i="";if(this.options.pedantic){const r=this.rules.other.pedanticHrefTitle.exec(t);r&&(t=r[1],i=r[3])}else i=a[3]?a[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?t=t.slice(1):t=t.slice(1,-1)),fi(a,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},a[0],this.lexer,this.rules)}}reflink(n,a){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){const t=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=a[t.toLowerCase()];if(!i){const r=e[0].charAt(0);return{type:"text",raw:r,text:r}}return fi(e,i,e[0],this.lexer,this.rules)}}emStrong(n,a,e=""){let t=this.rules.inline.emStrongLDelim.exec(n);if(!t||t[3]&&e.match(this.rules.other.unicodeAlphaNumeric))return;if(!(t[1]||t[2]||"")||!e||this.rules.inline.punctuation.exec(e)){const r=[...t[0]].length-1;let l,s,o=r,u=0;const p=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,a=a.slice(-1*n.length+r);(t=p.exec(a))!=null;){if(l=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!l)continue;if(s=[...l].length,t[3]||t[4]){o+=s;continue}else if((t[5]||t[6])&&r%3&&!((r+s)%3)){u+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+u);const m=[...t[0]][0].length,h=n.slice(0,r+t.index+m+s);if(Math.min(r,s)%2){const k=h.slice(1,-1);return{type:"em",raw:h,text:k,tokens:this.lexer.inlineTokens(k)}}const c=h.slice(2,-2);return{type:"strong",raw:h,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(n){const a=this.rules.inline.code.exec(n);if(a){let e=a[2].replace(this.rules.other.newLineCharGlobal," ");const t=this.rules.other.nonSpaceChar.test(e),i=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return t&&i&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:a[0],text:e}}}br(n){const a=this.rules.inline.br.exec(n);if(a)return{type:"br",raw:a[0]}}del(n){const a=this.rules.inline.del.exec(n);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2])}}autolink(n){const a=this.rules.inline.autolink.exec(n);if(a){let e,t;return a[2]==="@"?(e=a[1],t="mailto:"+e):(e=a[1],t=e),{type:"link",raw:a[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(n){var e;let a;if(a=this.rules.inline.url.exec(n)){let t,i;if(a[2]==="@")t=a[0],i="mailto:"+t;else{let r;do r=a[0],a[0]=((e=this.rules.inline._backpedal.exec(a[0]))==null?void 0:e[0])??"";while(r!==a[0]);t=a[0],a[1]==="www."?i="http://"+a[0]:i=a[0]}return{type:"link",raw:a[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const a=this.rules.inline.text.exec(n);if(a){const e=this.lexer.state.inRawBlock;return{type:"text",raw:a[0],text:a[0],escaped:e}}}},Ya=class xt{constructor(a){_(this,"tokens");_(this,"options");_(this,"state");_(this,"tokenizer");_(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=a||Sn,this.options.tokenizer=this.options.tokenizer||new Fe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={other:ta,block:Pe.normal,inline:Jn.normal};this.options.pedantic?(e.block=Pe.pedantic,e.inline=Jn.pedantic):this.options.gfm&&(e.block=Pe.gfm,this.options.breaks?e.inline=Jn.breaks:e.inline=Jn.gfm),this.tokenizer.rules=e}static get rules(){return{block:Pe,inline:Jn}}static lex(a,e){return new xt(e).lex(a)}static lexInline(a,e){return new xt(e).inlineTokens(a)}lex(a){a=a.replace(ta.carriageReturn,`
`),this.blockTokens(a,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(a,e=[],t=!1){var i,r,l;for(this.options.pedantic&&(a=a.replace(ta.tabCharGlobal,"    ").replace(ta.spaceLine,""));a;){let s;if((r=(i=this.options.extensions)==null?void 0:i.block)!=null&&r.some(u=>(s=u.call({lexer:this},a,e))?(a=a.substring(s.raw.length),e.push(s),!0):!1))continue;if(s=this.tokenizer.space(a)){a=a.substring(s.raw.length);const u=e.at(-1);s.raw.length===1&&u!==void 0?u.raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.at(-1).src=u.text):e.push(s);continue}if(s=this.tokenizer.fences(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(a)){a=a.substring(s.raw.length),e.push(s);continue}let o=a;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const p=a.slice(1);let m;this.options.extensions.startBlock.forEach(h=>{m=h.call({lexer:this},p),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(o=a.substring(0,u+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){const u=e.at(-1);t&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(s),t=o.length!==a.length,a=a.substring(s.raw.length);continue}if(s=this.tokenizer.text(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(s);continue}if(a){const u="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,e}inline(a,e=[]){return this.inlineQueue.push({src:a,tokens:e}),e}inlineTokens(a,e=[]){var s,o,u;let t=a,i=null;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)p.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,i.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)t=t.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,l="";for(;a;){r||(l=""),r=!1;let p;if((o=(s=this.options.extensions)==null?void 0:s.inline)!=null&&o.some(h=>(p=h.call({lexer:this},a,e))?(a=a.substring(p.raw.length),e.push(p),!0):!1))continue;if(p=this.tokenizer.escape(a)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.tag(a)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.link(a)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.reflink(a,this.tokens.links)){a=a.substring(p.raw.length);const h=e.at(-1);p.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=p.raw,h.text+=p.text):e.push(p);continue}if(p=this.tokenizer.emStrong(a,t,l)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.codespan(a)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.br(a)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.del(a)){a=a.substring(p.raw.length),e.push(p);continue}if(p=this.tokenizer.autolink(a)){a=a.substring(p.raw.length),e.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(a))){a=a.substring(p.raw.length),e.push(p);continue}let m=a;if((u=this.options.extensions)!=null&&u.startInline){let h=1/0;const c=a.slice(1);let k;this.options.extensions.startInline.forEach(b=>{k=b.call({lexer:this},c),typeof k=="number"&&k>=0&&(h=Math.min(h,k))}),h<1/0&&h>=0&&(m=a.substring(0,h+1))}if(p=this.tokenizer.inlineText(m)){a=a.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(l=p.raw.slice(-1)),r=!0;const h=e.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=p.raw,h.text+=p.text):e.push(p);continue}if(a){const h="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return e}},Ke=class{constructor(n){_(this,"options");_(this,"parser");this.options=n||Sn}space(n){return""}code({text:n,lang:a,escaped:e}){var r;const t=(r=(a||"").match(ta.notSpaceStart))==null?void 0:r[0],i=n.replace(ta.endingNewline,"")+`
`;return t?'<pre><code class="language-'+Ma(t)+'">'+(e?i:Ma(i,!0))+`</code></pre>
`:"<pre><code>"+(e?i:Ma(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:a}){return`<h${a}>${this.parser.parseInline(n)}</h${a}>
`}hr(n){return`<hr>
`}list(n){const a=n.ordered,e=n.start;let t="";for(let l=0;l<n.items.length;l++){const s=n.items[l];t+=this.listitem(s)}const i=a?"ol":"ul",r=a&&e!==1?' start="'+e+'"':"";return"<"+i+r+`>
`+t+"</"+i+`>
`}listitem(n){var e;let a="";if(n.task){const t=this.checkbox({checked:!!n.checked});n.loose?((e=n.tokens[0])==null?void 0:e.type)==="paragraph"?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=t+" "+Ma(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):a+=t+" "}return a+=this.parser.parse(n.tokens,!!n.loose),`<li>${a}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let a="",e="";for(let i=0;i<n.header.length;i++)e+=this.tablecell(n.header[i]);a+=this.tablerow({text:e});let t="";for(let i=0;i<n.rows.length;i++){const r=n.rows[i];e="";for(let l=0;l<r.length;l++)e+=this.tablecell(r[l]);t+=this.tablerow({text:e})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+t+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const a=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+a+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Ma(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:a,tokens:e}){const t=this.parser.parseInline(e),i=ki(n);if(i===null)return t;n=i;let r='<a href="'+n+'"';return a&&(r+=' title="'+Ma(a)+'"'),r+=">"+t+"</a>",r}image({href:n,title:a,text:e,tokens:t}){t&&(e=this.parser.parseInline(t,this.parser.textRenderer));const i=ki(n);if(i===null)return Ma(e);n=i;let r=`<img src="${n}" alt="${e}"`;return a&&(r+=` title="${Ma(a)}"`),r+=">",r}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Ma(n.text)}},Ut=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},Qa=class jt{constructor(a){_(this,"options");_(this,"renderer");_(this,"textRenderer");this.options=a||Sn,this.options.renderer=this.options.renderer||new Ke,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ut}static parse(a,e){return new jt(e).parse(a)}static parseInline(a,e){return new jt(e).parseInline(a)}parse(a,e=!0){var i,r;let t="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&r[s.type]){const u=s,p=this.options.extensions.renderers[u.type].call({parser:this},u);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){t+=p||"";continue}}const o=s;switch(o.type){case"space":{t+=this.renderer.space(o);continue}case"hr":{t+=this.renderer.hr(o);continue}case"heading":{t+=this.renderer.heading(o);continue}case"code":{t+=this.renderer.code(o);continue}case"table":{t+=this.renderer.table(o);continue}case"blockquote":{t+=this.renderer.blockquote(o);continue}case"list":{t+=this.renderer.list(o);continue}case"html":{t+=this.renderer.html(o);continue}case"paragraph":{t+=this.renderer.paragraph(o);continue}case"text":{let u=o,p=this.renderer.text(u);for(;l+1<a.length&&a[l+1].type==="text";)u=a[++l],p+=`
`+this.renderer.text(u);e?t+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p,escaped:!0}]}):t+=p;continue}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return t}parseInline(a,e=this.renderer){var i,r;let t="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&r[s.type]){const u=this.options.extensions.renderers[s.type].call({parser:this},s);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=u||"";continue}}const o=s;switch(o.type){case"escape":{t+=e.text(o);break}case"html":{t+=e.html(o);break}case"link":{t+=e.link(o);break}case"image":{t+=e.image(o);break}case"strong":{t+=e.strong(o);break}case"em":{t+=e.em(o);break}case"codespan":{t+=e.codespan(o);break}case"br":{t+=e.br(o);break}case"del":{t+=e.del(o);break}case"text":{t+=e.text(o);break}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return t}},ot,Me=(ot=class{constructor(n){_(this,"options");_(this,"block");this.options=n||Sn}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?Ya.lex:Ya.lexInline}provideParser(){return this.block?Qa.parse:Qa.parseInline}},_(ot,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),ot),fu=class{constructor(...n){_(this,"defaults",Dt());_(this,"options",this.setOptions);_(this,"parse",this.parseMarkdown(!0));_(this,"parseInline",this.parseMarkdown(!1));_(this,"Parser",Qa);_(this,"Renderer",Ke);_(this,"TextRenderer",Ut);_(this,"Lexer",Ya);_(this,"Tokenizer",Fe);_(this,"Hooks",Me);this.use(...n)}walkTokens(n,a){var t,i;let e=[];for(const r of n)switch(e=e.concat(a.call(this,r)),r.type){case"table":{const l=r;for(const s of l.header)e=e.concat(this.walkTokens(s.tokens,a));for(const s of l.rows)for(const o of s)e=e.concat(this.walkTokens(o.tokens,a));break}case"list":{const l=r;e=e.concat(this.walkTokens(l.items,a));break}default:{const l=r;(i=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{const o=l[s].flat(1/0);e=e.concat(this.walkTokens(o,a))}):l.tokens&&(e=e.concat(this.walkTokens(l.tokens,a)))}}return e}use(...n){const a=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{const t={...e};if(t.async=this.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const r=a.renderers[i.name];r?a.renderers[i.name]=function(...l){let s=i.renderer.apply(this,l);return s===!1&&(s=r.apply(this,l)),s}:a.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=a[i.level];r?r.unshift(i.tokenizer):a[i.level]=[i.tokenizer],i.start&&(i.level==="block"?a.startBlock?a.startBlock.push(i.start):a.startBlock=[i.start]:i.level==="inline"&&(a.startInline?a.startInline.push(i.start):a.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(a.childTokens[i.name]=i.childTokens)}),t.extensions=a),e.renderer){const i=this.defaults.renderer||new Ke(this.defaults);for(const r in e.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const l=r,s=e.renderer[l],o=i[l];i[l]=(...u)=>{let p=s.apply(i,u);return p===!1&&(p=o.apply(i,u)),p||""}}t.renderer=i}if(e.tokenizer){const i=this.defaults.tokenizer||new Fe(this.defaults);for(const r in e.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const l=r,s=e.tokenizer[l],o=i[l];i[l]=(...u)=>{let p=s.apply(i,u);return p===!1&&(p=o.apply(i,u)),p}}t.tokenizer=i}if(e.hooks){const i=this.defaults.hooks||new Me;for(const r in e.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const l=r,s=e.hooks[l],o=i[l];Me.passThroughHooks.has(r)?i[l]=u=>{if(this.defaults.async)return Promise.resolve(s.call(i,u)).then(m=>o.call(i,m));const p=s.call(i,u);return o.call(i,p)}:i[l]=(...u)=>{let p=s.apply(i,u);return p===!1&&(p=o.apply(i,u)),p}}t.hooks=i}if(e.walkTokens){const i=this.defaults.walkTokens,r=e.walkTokens;t.walkTokens=function(l){let s=[];return s.push(r.call(this,l)),i&&(s=s.concat(i.call(this,l))),s}}this.defaults={...this.defaults,...t}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,a){return Ya.lex(n,a??this.defaults)}parser(n,a){return Qa.parse(n,a??this.defaults)}parseMarkdown(n){return(e,t)=>{const i={...t},r={...this.defaults,...i},l=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=n);const s=r.hooks?r.hooks.provideLexer():n?Ya.lex:Ya.lexInline,o=r.hooks?r.hooks.provideParser():n?Qa.parse:Qa.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(e):e).then(u=>s(u,r)).then(u=>r.hooks?r.hooks.processAllTokens(u):u).then(u=>r.walkTokens?Promise.all(this.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>o(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(l);try{r.hooks&&(e=r.hooks.preprocess(e));let u=s(e,r);r.hooks&&(u=r.hooks.processAllTokens(u)),r.walkTokens&&this.walkTokens(u,r.walkTokens);let p=o(u,r);return r.hooks&&(p=r.hooks.postprocess(p)),p}catch(u){return l(u)}}}onError(n,a){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const t="<p>An error occurred:</p><pre>"+Ma(e.message+"",!0)+"</pre>";return a?Promise.resolve(t):t}if(a)return Promise.reject(e);throw e}}},_n=new fu;function R(n,a){return _n.parse(n,a)}R.options=R.setOptions=function(n){return _n.setOptions(n),R.defaults=_n.defaults,kr(R.defaults),R};R.getDefaults=Dt;R.defaults=Sn;R.use=function(...n){return _n.use(...n),R.defaults=_n.defaults,kr(R.defaults),R};R.walkTokens=function(n,a){return _n.walkTokens(n,a)};R.parseInline=_n.parseInline;R.Parser=Qa;R.parser=Qa.parse;R.Renderer=Ke;R.TextRenderer=Ut;R.Lexer=Ya;R.lexer=Ya.lex;R.Tokenizer=Fe;R.Hooks=Me;R.parse=R;R.options;R.setOptions;R.use;R.walkTokens;R.parseInline;Qa.parse;Ya.lex;const Ga={cyber:{code:"cyber",name:"Cybersecurity",label:"Cybersecurity",accent:"#3a5a44",schedule:"Senin–Jumat · 07.00 WIB",next:"Privasi dan jejak digital"},fr:{code:"fr",name:"Français",label:"Bahasa Prancis",accent:"#2e4e6b",schedule:"Setiap hari · 07.30 WIB",next:"Angka, hari, dan waktu"},en:{code:"en",name:"English",label:"Bahasa Inggris",accent:"#a85b38",schedule:"Setiap hari · 08.10 WIB",next:"Kata ganti & to be"},ai:{code:"ai",name:"AI Engineer",label:"AI Engineer",accent:"#8a6d2b",schedule:"Senin–Jumat · 10.30 WIB",next:"ML klasik dengan scikit-learn"}},ut=["cyber","fr","en","ai"],bu=Object.assign({"../../lessons/ai-01-apa-itu-ai-engineer.md":yl,"../../lessons/ai-02-python-untuk-ai.md":vl,"../../lessons/ai-03-matematika-untuk-ai.md":wl,"../../lessons/ai-04-cara-kerja-ml.md":_l,"../../lessons/cyber-01-apa-itu-cybersecurity.md":Sl,"../../lessons/cyber-02-cia-triad.md":xl,"../../lessons/cyber-03-jenis-ancaman.md":jl,"../../lessons/cyber-04-password-autentikasi.md":Al,"../../lessons/cyber-05-phishing.md":Il,"../../lessons/cyber-06-malware.md":Pl,"../../lessons/cyber-07-wifi.md":Tl,"../../lessons/cyber-08-keamanan-hp.md":El,"../../lessons/en-01-alphabet.md":Rl,"../../lessons/en-02-greetings.md":Cl,"../../lessons/en-03-numbers-days-time.md":Ml,"../../lessons/fr-01-alphabet.md":Ll,"../../lessons/fr-02-greetings.md":Bl});function yu(n){const a=n.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/),e={};let t=n;if(a){t=a[2];for(const i of a[1].split(`
`)){const r=i.indexOf(":");r>-1&&(e[i.slice(0,r).trim()]=i.slice(r+1).trim())}}return{lang:e.lang,number:Number(e.number),date:e.date,title:e.title,subtitle:e.subtitle||"",keywords:e.keywords||"",html:R.parse(t),slug:`${e.lang}-${e.number}`}}const Oe=Object.values(bu).map(yu).filter(n=>n.lang&&n.number&&n.date&&n.title).sort((n,a)=>n.date<a.date?-1:n.date>a.date?1:n.number-a.number);function At(n){return Oe.filter(a=>a.lang===n).sort((a,e)=>a.number-e.number)}function vu(n,a){return Oe.find(e=>e.lang===n&&e.number===Number(a))}function wu(n){const a=At(n.lang),e=a.findIndex(t=>t.number===n.number);return{prev:a[e-1]||null,next:a[e+1]||null}}const _u=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],Su=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];function xu(n){const[a,e,t]=n.split("-").map(Number);return`${t} ${_u[e-1]} ${a}`}function ju(n){const[a,e,t]=n.split("-").map(Number);return`${t} ${Su[e-1]} ${a}`}const Au="11 November 2026";var Iu=ra('<p class="lesson-subtitle"> </p>'),Pu=ra('<a><span class="nav-label">← Pelajaran sebelumnya</span> <span class="nav-title"> </span></a>'),Tu=ra("<span></span>"),Eu=ra('<a class="next-link"><span class="nav-label">Pelajaran berikutnya →</span> <span class="nav-title"> </span></a>'),Ru=ra('<a class="back-link"> </a> <p class="eyebrow"> </p> <h1 class="lesson-title"> </h1> <!> <p class="lesson-meta"> </p> <div class="lesson-body"></div> <nav class="lesson-nav"><!> <!></nav>',1),Cu=ra('<a class="back-link" href="#/">← Kembali ke semua pelajaran</a> <p class="empty">Pelajaran tidak ditemukan.</p>',1);function Mu(n,a){Tt(a,!0);let e=Ba(()=>vu(a.lang,a.number)),t=Ba(()=>f(e)?Ga[f(e).lang]:null),i=Ba(()=>f(e)?wu(f(e)):{prev:null,next:null});var r=cr(),l=re(r);{var s=u=>{var p=Ru(),m=re(p),h=G(m),c=L(m,2),k=G(c),b=L(c,2),g=G(b,!0),y=L(b,2);{var C=P=>{var B=Iu(),X=G(B,!0);Sa(()=>H(X,f(e).subtitle)),J(P,B)};tn(y,P=>{f(e).subtitle&&P(C)})}var M=L(y,2),z=G(M),O=L(M,2);pl(O,()=>f(e).html,!0);var Q=L(O,2),$=na(Q);{var ya=P=>{var B=Pu(),X=L(na(B),2),Ta=G(X);Sa(()=>{se(B,"href",`#/${f(i).prev.lang??""}/${f(i).prev.number??""}`),H(Ta,`#${f(i).prev.number??""} — ${f(i).prev.title??""}`)}),J(P,B)},Pa=P=>{var B=Tu();J(P,B)};tn($,P=>{f(i).prev?P(ya):P(Pa,-1)})}var U=L($,2);{var W=P=>{var B=Eu(),X=L(na(B),2),Ta=G(X);Sa(()=>{se(B,"href",`#/${f(i).next.lang??""}/${f(i).next.number??""}`),H(Ta,`#${f(i).next.number??""} — ${f(i).next.title??""}`)}),J(P,B)};tn(U,P=>{f(i).next&&P(W)})}Sa(P=>{se(m,"href",`#/${f(e).lang??""}`),H(h,`← Semua pelajaran ${f(t).name??""}`),ae(c,`color: ${f(t).accent??""}`),H(k,`${f(t).name??""} · Pelajaran #${f(e).number??""}`),H(g,f(e).title),H(z,`${P??""} · ${f(t).label??""} · ${f(t).schedule??""}`)},[()=>xu(f(e).date)]),J(u,p)},o=u=>{var p=Cu();J(u,p)};tn(l,u=>{f(e)&&f(t)?u(s):u(o,-1)})}J(n,r),Et()}var Lu=ra('<a> <span class="n"> </span></a>'),Bu=ra('<p class="empty"> </p>'),Nu=ra('<a class="lesson-row"><span class="num"> </span> <span class="main"><span class="title"> </span> <span class="sub"> </span></span> <span class="date"> </span> <span class="arrow">→</span></a>'),$u=ra('<section class="lang-section"><div class="lang-head"><h2> <span class="accent-dot"></span></h2> <span class="lang-meta"> <br/> </span></div> <!></section>'),zu=ra('<div class="next-item"><div class="lang-name"> </div> <div class="topic"> </div> <div class="when"> </div></div>'),Hu=ra('<section class="next-block"><h3>Selanjutnya</h3> <div class="next-grid"></div></section>'),Du=ra("<!> <!>",1),Fu=ra(`<header class="site-header"><div class="top"><a class="wordmark" href="#/">Polly<span>.</span></a> <span class="site-tag">Catatan belajar</span></div> <p class="intro">Semua pelajaran — cybersecurity, bahasa Prancis, bahasa Inggris, dan
        AI Engineer — dari hari pertama sampai hari ini. Bisa dicari dan
        dibaca ulang <em>kapan saja</em>.</p> <p class="count-line"> </p></header> <input class="search" type="search" placeholder="Cari pelajaran — mis. phishing, liaison, scikit-learn" aria-label="Cari pelajaran"/> <nav class="tabs"><a href="#/">Semua</a> <!></nav> <!>`,1),Ku=ra(`<div class="wrap"><!> <footer class="site-footer"><p>Polly — catatan belajar harian: cybersecurity, bahasa Prancis, bahasa
      Inggris, dan AI Engineer.</p> <p>Pelajaran baru ditambahkan ke halaman ini setelah dikirim di WhatsApp.</p></footer></div>`);function Ou(n,a){Tt(a,!0);let e=La(In(window.location.hash));ii(()=>{const b=()=>{Ja(e,window.location.hash,!0)};return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)});function t(b){const g=b.replace(/^#\/?/,"").split("/").filter(Boolean),y=Object.keys(Ga);return g.length===2&&y.includes(g[0])&&/^\d+$/.test(g[1])?{view:"lesson",lang:g[0],number:Number(g[1])}:g.length===1&&y.includes(g[0])?{view:"home",tab:g[0]}:{view:"home",tab:"all"}}let i=Ba(()=>t(f(e))),r=La("");ii(()=>{f(i).view,f(i).lang,f(i).number,window.scrollTo(0,0)});let l=Ba(()=>f(r).trim().toLowerCase());function s(b){return f(l)?[b.title,b.subtitle,b.keywords].join(" ").toLowerCase().includes(f(l)):!0}let o=Ba(()=>Oe.length),u=Ba(()=>f(i).tab==="all"?ut:[f(i).tab]),p=Ba(()=>Oe.some(s));var m=Ku(),h=na(m);{var c=b=>{Mu(b,{get lang(){return f(i).lang},get number(){return f(i).number}})},k=b=>{var g=Fu(),y=re(g),C=L(na(y),4),M=G(C),z=L(y,2),O=L(z,2),Q=na(O),$=L(Q,2);Ie($,17,()=>ut,Ae,(W,P)=>{var B=Lu(),X=na(B),Ta=L(X),Ea=G(Ta,!0);Sa(Ra=>{di(B,1,`tab ${f(i).tab===f(P)?"active":""}`),se(B,"href",`#/${f(P)??""}`),H(X,Ga[f(P)].name),H(Ea,Ra)},[()=>At(f(P)).length]),J(W,B)});var ya=L(O,2);{var Pa=W=>{var P=Bu(),B=G(P);Sa(X=>H(B,`Tidak ada pelajaran yang cocok dengan “${X??""}”. Coba kata lain —
        mis. “angka”, “sapaan”, atau “liaison”.`),[()=>f(r).trim()]),J(W,P)},U=W=>{var P=Du(),B=re(P);Ie(B,17,()=>f(u),Ae,(Ea,Ra)=>{const Ca=Ba(()=>Ga[f(Ra)]),aa=Ba(()=>At(f(Ra)).filter(s));var va=cr(),Fn=re(va);{var Kn=On=>{var Wn=$u(),we=na(Wn),_e=na(we),Se=na(_e),Ar=L(Se),Ir=L(_e,2),Zt=na(Ir),Pr=L(Zt,2,!0),Tr=L(we,2);Ie(Tr,17,()=>f(aa),Ae,(Er,xn)=>{var Ye=Nu(),Qe=na(Ye),Rr=G(Qe,!0),Vt=L(Qe,2),Yt=na(Vt),Cr=G(Yt,!0),Mr=L(Yt,2),Lr=G(Mr,!0),Br=L(Vt,2),Nr=G(Br,!0);Sa(($r,zr)=>{se(Ye,"href",`#/${f(xn).lang??""}/${f(xn).number??""}`),ae(Qe,`color: ${f(Ca).accent??""}`),H(Rr,$r),H(Cr,f(xn).title),H(Lr,f(xn).subtitle),H(Nr,zr)},[()=>String(f(xn).number).padStart(2,"0"),()=>ju(f(xn).date)]),J(Er,Ye)}),Sa(()=>{H(Se,f(Ca).name),ae(Ar,`background: ${f(Ca).accent??""}`),H(Zt,`${f(Ca).label??""} · ${f(aa).length??""} pelajaran`),H(Pr,f(Ca).schedule)}),J(On,Wn)};tn(Fn,On=>{f(aa).length>0&&On(Kn)})}J(Ea,va)});var X=L(B,2);{var Ta=Ea=>{var Ra=Hu(),Ca=L(na(Ra),2);Ie(Ca,21,()=>ut,Ae,(aa,va)=>{var Fn=zu(),Kn=na(Fn),On=G(Kn,!0),Wn=L(Kn,2),we=G(Wn,!0),_e=L(Wn,2),Se=G(_e,!0);Sa(()=>{ae(Fn,`border-left-color: ${Ga[f(va)].accent??""}`),ae(Kn,`color: ${Ga[f(va)].accent??""}`),H(On,Ga[f(va)].name),H(we,Ga[f(va)].next),H(Se,Ga[f(va)].schedule)}),J(aa,Fn)}),J(Ea,Ra)};tn(X,Ea=>{f(l)||Ea(Ta)})}J(W,P)};tn(ya,W=>{f(l)&&!f(p)?W(Pa):W(U,-1)})}Sa(()=>{H(M,`${f(o)??""} pelajaran · 4 jalur belajar · diperbarui ${Au}`),di(Q,1,`tab ${f(i).tab==="all"?"active":""}`)}),fl(z,()=>f(r),W=>Ja(r,W)),J(b,g)};tn(h,b=>{f(i).view==="lesson"?b(c):b(k,-1)})}J(n,m),Et()}tl(Ou,{target:document.getElementById("app")});
