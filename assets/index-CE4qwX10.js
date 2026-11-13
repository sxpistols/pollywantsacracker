var qr=Object.defineProperty;var mt=n=>{throw TypeError(n)};var Zr=(n,a,e)=>a in n?qr(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var _=(n,a,e)=>Zr(n,typeof a!="symbol"?a+"":a,e),pi=(n,a,e)=>a.has(n)||mt("Cannot "+e);var k=(n,a,e)=>(pi(n,a,"read from private field"),e?e.call(n):a.get(n)),I=(n,a,e)=>a.has(n)?mt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(n):a.set(n,e),j=(n,a,e,i)=>(pi(n,a,"write to private field"),i?i.call(n,e):a.set(n,e),e),w=(n,a,e)=>(pi(n,a,"access private method"),e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const Kt=!1;var Lt=Array.isArray,Vr=Array.prototype.indexOf,_e=Array.prototype.includes,ri=Array.from,zt=Object.defineProperty,be=Object.getOwnPropertyDescriptor,Yr=Object.getOwnPropertyDescriptors,Xr=Object.prototype,Qr=Array.prototype,Bt=Object.getPrototypeOf,pt=Object.isExtensible;const as=()=>{};function ns(n){for(var a=0;a<n.length;a++)n[a]()}function Ht(){var n,a,e=new Promise((i,t)=>{n=i,a=t});return{promise:e,resolve:n,reject:a}}const na=2,je=4,si=8,Ft=1<<24,xa=16,Ea=32,cn=64,Ii=128,Gi=256,Pa=512,W=1024,K=2048,ha=4096,ta=8192,aa=16384,Qn=32768,We=1<<25,Zn=65536,Ue=1<<17,es=1<<18,ae=1<<19,is=1<<20,Oa=1<<25,qe=1<<21,Fn=1<<22,pn=1<<23,hi=Symbol("$state"),Ot=Symbol("component"),Fe=Symbol("attributes"),Ai=Symbol("class"),xi=Symbol("style"),ke=Symbol("text"),Oe=Symbol("form reset"),Ee=new class extends Error{constructor(){super(...arguments);_(this,"name","StaleReactionError");_(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},ts=1,rs=2,$t=4,ss=8,us=16,ls=1,os=2,Gt={},J=Symbol("uninitialized"),Jt="http://www.w3.org/1999/xhtml",ds="http://www.w3.org/2000/svg",ks="http://www.w3.org/1998/Math/MathML";function ms(){console.warn("https://svelte.dev/e/derived_inert")}function ps(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Wt(n){return n===this.v}function hs(n,a){return n!=n?a==a:n!==a||n!==null&&typeof n=="object"||typeof n=="function"}function Ut(n){return!hs(n,this.v)}function gs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cs(n,a,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function bs(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ys(n){throw new Error("https://svelte.dev/e/effect_orphan")}function vs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ws(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _s(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function js(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ss(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Is=!1,ua=null;function Vn(n){ua=n}function Ji(n,a=!1,e){ua={p:ua,i:!1,c:null,e:null,s:n,x:null,r:E,l:null}}function Wi(n){var a=ua,e=a.e;if(e!==null){a.e=null;for(var i of e)gr(i)}return a.i=!0,ua=a.p,qt(n)}function qt(n={}){return zt(n,Ot,{value:!0}),n}function Zt(){return!0}let Sn=[];function Vt(){var n=Sn;Sn=[],ns(n)}function mn(n){if(Sn.length===0&&!fe){var a=Sn;queueMicrotask(()=>{a===Sn&&Vt()})}Sn.push(n)}function As(){for(;Sn.length>0;)Vt()}const xs=-7169;function O(n,a){n.f=n.f&xs|a}function Ui(n){(n.f&Pa)!==0||n.deps===null?O(n,W):O(n,ha)}function Yt(n,a){(n.f&K)!==0?a.set(n,K):(n.f&ha)!==0&&a.get(n)!==K&&a.set(n,ha),O(n,W)}let ht=!1;function Ts(){ht||(ht=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var a;if(!n.defaultPrevented)for(const e of n.target.elements)(a=e[Oe])==null||a.call(e)})},{capture:!0}))}function Ne(n){var a=S,e=E;ja(null),Ja(null);try{return n()}finally{ja(a),Ja(e)}}function Ps(n,a,e,i=e){n.addEventListener(a,()=>Ne(e));const t=n[Oe];t?n[Oe]=()=>{t(),i(!0)}:n[Oe]=()=>i(!0),Ts()}function Es(n,a,e,i){const t=qi;var r=n.filter(p=>!p.settled),u=a.map(t);if(e.length===0&&r.length===0){i(u);return}var s=E,o=Ns(),l=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(p=>p.promise)):null;function d(p){if((s.f&aa)===0){o();try{i([...u,...p])}catch(g){Fa(g,s)}Ze()}}var h=Xt();if(e.length===0){l.then(()=>d([])).finally(h);return}function m(){Promise.all(e.map(p=>Rs(p))).then(d).catch(p=>Fa(p,s)).finally(h)}l?l.then(()=>{if((s.f&aa)!==0){h();return}o(),m(),Ze()}):m()}function Ns(){var n=E,a=S,e=ua,i=v;return function(r=!0){Ja(n),ja(a),Vn(e),r&&(n.f&aa)===0&&(i==null||i.activate(),i==null||i.apply())}}function Ze(n=!0){Ja(null),ja(null),Vn(null),n&&(v==null||v.deactivate())}function Xt(){var n=E,a=n.b,e=v,i=!!(a!=null&&a.is_rendered());return a==null||a.update_pending_count(1,e),e.increment(i,n),()=>{a==null||a.update_pending_count(-1,e),e.decrement(i,n)}}function qi(n){var a=na|K;return E!==null&&(E.f|=ae),{ctx:ua,deps:null,effects:null,equals:Wt,f:a,fn:n,reactions:null,rv:0,v:J,wv:0,parent:E,ac:null}}const me=Symbol("obsolete");function Rs(n,a,e){let i=E;i===null&&gs();var t=void 0,r=Dn(J),u=!S,s=new Set;return Zs(()=>{var p,g;var o=E,l=Ht();t=l.promise;try{Promise.resolve(n()).then(l.resolve,f=>{f!==Ee&&l.reject(f)}).finally(Ze)}catch(f){l.reject(f),Ze()}var d=v;if(u){if((o.f&Qn)!==0)var h=Xt();if((p=i.b)!=null&&p.is_rendered())(g=d.async_deriveds.get(o))==null||g.reject(me);else for(const f of s.values())f.reject(me);s.add(l),d.async_deriveds.set(o,l)}const m=(f,c=void 0)=>{h==null||h(),s.delete(l),c!==me&&(d.activate(),c?(r.f|=pn,Yn(r,c)):((r.f&pn)!==0&&(r.f^=pn),Yn(r,f)),d.deactivate())};l.promise.then(m,f=>m(null,f||"unknown"))}),Us(()=>{for(const o of s)o.reject(me)}),new Promise(o=>{function l(d){function h(){d===t?o(r):l(t)}d.then(h,h)}l(t)})}function Ia(n){const a=qi(n);return _r(a),a}function Ds(n){const a=qi(n);return a.equals=Ut,a}function Cs(n){var a=n.effects;if(a!==null){n.effects=null;for(var e=0;e<a.length;e+=1)la(a[e])}}function Zi(n){var a,e=E,i=n.parent;if(!bn&&i!==null&&n.v!==J&&(i.f&(aa|ta))!==0)return ms(),n.v;Ja(i);try{Cs(n),a=Ar(n)}finally{Ja(e)}return a}function Qt(n){var a=Zi(n);if(!n.equals(a)&&(n.wv=Sr(),(!(v!=null&&v.is_fork)||n.deps===null)&&(v!==null?(v.capture(n,a,!0),hn==null||hn.capture(n,a,!0)):n.v=a,n.deps===null))){O(n,W);return}bn||(Y!==null?(Xi()||v!=null&&v.is_fork)&&Y.set(n,a):Ui(n))}function Ms(n){var a;if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&((a=e.teardown)==null||a.call(e),e.ac!==null&&Ne(()=>{e.ac.abort(Ee),e.ac=null}),e.fn!==null&&(e.teardown=as),Se(e,0),at(e))}function ar(n){if(n.effects!==null)for(const a of n.effects)a.teardown&&a.fn!==null&&Xn(a)}let gi=null,Ln=null,v=null,hn=null,Y=null,Ti=null,fe=!1,ci=!1,ye=null,$e=null;var gt=0;let Ks=1;var $n,Gn,Jn,Xa,Wn,Qa,Ae,Ka,La,Un,An,A,Pi,nr,Ei,pe,Ni,er,ir,tr,zn,Ls,he;const ei=class ei{constructor(){I(this,A);_(this,"id",Ks++);_(this,"started",!1);_(this,"linked",!0);_(this,"prev",null);_(this,"next",null);_(this,"async_deriveds",new Map);_(this,"current",new Map);_(this,"previous",new Map);I(this,$n,new Set);I(this,Gn,new Set);I(this,Jn,0);I(this,Xa,new Map);I(this,Wn,null);I(this,Qa,[]);I(this,Ae,[]);I(this,Ka,new Map);I(this,La,new Map);I(this,Un,new Set);_(this,"is_fork",!1);I(this,An,!1);Ln===null?gi=Ln=this:(Ln.next=this,this.prev=Ln),Ln=this}skip_effect(a){k(this,La).has(a)||k(this,La).set(a,{d:[],m:[]}),k(this,Un).delete(a)}unskip_effect(a,e=i=>this.schedule(i)){var i=k(this,La).get(a);if(i){k(this,La).delete(a);for(var t of i.d)O(t,K),e(t);for(t of i.m)O(t,ha),e(t)}k(this,Un).add(a)}capture(a,e,i=!1){a.v!==J&&!this.previous.has(a)&&this.previous.set(a,a.v),(a.f&pn)===0&&(this.current.set(a,[e,i]),Y==null||Y.set(a,e)),this.is_fork||(a.v=e)}activate(){v=this}deactivate(){v=null,Y=null}flush(){try{ci=!0,v=this,w(this,A,pe).call(this)}finally{gt=0,Ti=null,ye=null,$e=null,ci=!1,v=null,Y=null,$a.clear()}}discard(){var a;for(const e of k(this,Gn))e(this);k(this,Gn).clear();for(const e of this.async_deriveds.values())e.reject(me);w(this,A,he).call(this),(a=k(this,Wn))==null||a.resolve()}register_created_effect(a){k(this,Ae).push(a)}increment(a,e){if(j(this,Jn,k(this,Jn)+1),a){let i=k(this,Xa).get(e)??0;k(this,Xa).set(e,i+1)}}decrement(a,e){if(j(this,Jn,k(this,Jn)-1),a){let i=k(this,Xa).get(e)??0;i===1?k(this,Xa).delete(e):k(this,Xa).set(e,i-1)}k(this,An)||(j(this,An,!0),mn(()=>{j(this,An,!1),this.linked&&this.flush()}))}transfer_reactions(a){for(const[e,i]of a)this.add_dirty_reaction(e,i);a.clear()}add_dirty_reaction(a,e){(e===K||k(this,Ka).get(a)!==K)&&k(this,Ka).set(a,e)}oncommit(a){k(this,$n).add(a)}ondiscard(a){k(this,Gn).add(a)}settled(){return(k(this,Wn)??j(this,Wn,Ht())).promise}static ensure(){if(v===null){const a=v=new ei;!ci&&!fe&&mn(()=>{a.started||a.flush()})}return v}apply(){{Y=null;return}}schedule(a){var e;if(Ti=a,(e=a.b)!=null&&e.is_pending&&(a.f&(je|si|Ft))!==0&&(a.f&Qn)===0){a.b.defer_effect(a);return}k(this,Qa).push(a)}};$n=new WeakMap,Gn=new WeakMap,Jn=new WeakMap,Xa=new WeakMap,Wn=new WeakMap,Qa=new WeakMap,Ae=new WeakMap,Ka=new WeakMap,La=new WeakMap,Un=new WeakMap,An=new WeakMap,A=new WeakSet,Pi=function(){if(this.is_fork)return!0;for(const a of k(this,Xa).keys())if(!w(this,A,nr).call(this,a))return!0;return!1},nr=function(a){for(var e=a;e!==null;e=e.parent)if(k(this,La).has(e))return!0;return!1},Ei=function(){var a=[];for(const r of k(this,Qa))if(!((r.f&aa)!==0||(r.f&(K|ha))===0)){for(var e=r,i=!1;e.parent!==null;){e=e.parent;var t=e.f;if((t&(cn|Ea))!==0){if((t&W)===0){i=!0;break}e.f^=W}}i||a.push(e)}return j(this,Qa,[]),a},pe=function(){var s,o,l,d;this.started=!0;for(const[h,m]of k(this,Ka))O(h,m),this.schedule(h);this.apply();for(var a=ye=[],e=[],i=$e=[];k(this,Qa).length>0;){gt++>1e3&&(w(this,A,he).call(this),Bs());for(const h of w(this,A,Ei).call(this))try{w(this,A,Ni).call(this,h,a,e)}catch(m){throw ur(h),w(this,A,Pi).call(this)||this.discard(),m}}if(v=null,i.length>0){var t=ei.ensure();for(const h of i)t.schedule(h)}if(ye=null,$e=null,w(this,A,Pi).call(this)){w(this,A,zn).call(this,e),w(this,A,zn).call(this,a);for(const[h,m]of k(this,La))sr(h,m);i.length>0&&w(s=v,A,pe).call(s);return}const r=w(this,A,er).call(this);if(r){w(this,A,zn).call(this,e),w(this,A,zn).call(this,a),w(o=r,A,tr).call(o,this);return}k(this,Ka).clear();for(const h of k(this,$n))h(this);k(this,$n).clear(),hn=this,ct(e),ct(a),hn=null,(l=k(this,Wn))==null||l.resolve();var u=v;k(this,Jn)===0&&(k(this,Qa).length===0||u!==null)&&w(this,A,he).call(this),u!==null&&($a.clear(),w(d=u,A,pe).call(d))},Ni=function(a,e,i){a.f^=W;for(var t=a.first;t!==null;){var r=t.f,u=(r&(Ea|cn))!==0,s=u&&(r&W)!==0,o=s||(r&ta)!==0||k(this,La).has(t);if(!o&&t.fn!==null){u?t.f^=W:(r&je)!==0?e.push(t):De(t)&&((r&xa)!==0&&this.add_dirty_reaction(t,ha),Xn(t));var l=t.first;if(l!==null){t=l;continue}}for(;t!==null;){var d=t.next;if(d!==null){t=d;break}t=t.parent}}},er=function(){for(var a=this.prev;a!==null;a=a.prev)if(!a.is_fork&&w(this,A,ir).call(this,a))return a;return null},ir=function(a){for(const[e,[,i]]of this.current)if(!i&&a.current.has(e))return!0;return!1},tr=function(a){var i;for(const[t,r]of a.current)!this.previous.has(t)&&a.previous.has(t)&&this.previous.set(t,a.previous.get(t)),this.current.set(t,r);for(const[t,r]of a.async_deriveds){const u=this.async_deriveds.get(t);u&&r.promise.then(u.resolve).catch(u.reject)}a.async_deriveds.clear(),this.transfer_reactions(k(a,Ka));const e=t=>{var r=t.reactions;if(r!==null&&!((t.f&na)!==0&&(t.f&(K|ha))===0))for(const o of r){var u=o.f;if((u&na)!==0)e(o);else{var s=o;u&(Fn|xa)&&!this.async_deriveds.has(s)&&(k(this,Ka).delete(s),O(s,K),this.schedule(s))}}};for(const t of this.current.keys())e(t);this.oncommit(()=>a.discard()),w(i=a,A,he).call(i),v=this,w(this,A,pe).call(this)},zn=function(a){for(var e=0;e<a.length;e+=1)Yt(a[e],k(this,Ka))},Ls=function(){var h,m;for(let p=gi;p!==null;p=p.next){var a=p.id<this.id,e=[];for(const[g,[f,c]]of this.current){if(p.current.has(g)){var i=p.current.get(g)[0];if(a&&f!==i)p.current.set(g,[f,c]);else continue}e.push(g)}if(a)for(const[g,f]of this.async_deriveds){const c=p.async_deriveds.get(g);c&&f.promise.then(c.resolve).catch(c.reject)}var t=[...p.current.keys()].filter(g=>!p.current.get(g)[1]);if(!(!p.started||t.length===0)){var r=t.filter(g=>!this.current.has(g));if(r.length===0)a&&p.discard();else if(e.length>0){if(a)for(const g of k(this,Un))p.unskip_effect(g,f=>{var c;(f.f&(xa|Fn))!==0?p.schedule(f):w(c=p,A,zn).call(c,[f])});p.activate();var u=new Set,s=new Map;for(var o of e)rr(o,r,u,s);s=new Map;var l=[...p.current].filter(([g,f])=>{const c=this.current.get(g);return c?c[0]!==f[0]||c[1]!==f[1]:!0}).map(([g])=>g);if(l.length>0)for(const g of k(this,Ae))(g.f&(aa|ta|Ue))===0&&Vi(g,l,s)&&((g.f&(Fn|xa))!==0?(O(g,K),p.schedule(g)):p.add_dirty_reaction(g,K));if(k(p,Qa).length>0&&!k(p,An)){p.apply();for(var d of w(h=p,A,Ei).call(h))w(m=p,A,Ni).call(m,d,[],[])}p.deactivate()}}}},he=function(){if(this.linked){var a=this.prev,e=this.next;a===null?gi=e:a.next=e,e===null?Ln=a:e.prev=a,this.linked=!1}};let Rn=ei;function zs(n){var a=fe,e=hn;hn=null,fe=!0;try{for(var i;;){if(As(),v===null)return i;v.flush()}}finally{fe=a,hn=e}}function Bs(){try{vs()}catch(n){Fa(n,Ti)}}let Sa=null;function ct(n){var a=n.length;if(a!==0){for(var e=0;e<a;){var i=n[e++];if((i.f&(aa|ta))===0&&De(i)&&(Sa=new Set,Xn(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&yr(i),(Sa==null?void 0:Sa.size)>0)){$a.clear();for(const t of Sa){if((t.f&(aa|ta))!==0)continue;const r=[t];let u=t.parent;for(;u!==null;)Sa.has(u)&&(Sa.delete(u),r.push(u)),u=u.parent;for(let s=r.length-1;s>=0;s--){const o=r[s];(o.f&(aa|ta))===0&&Xn(o)}}Sa.clear()}}Sa=null}}function rr(n,a,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const t of n.reactions){const r=t.f;(r&na)!==0?rr(t,a,e,i):(r&(Fn|xa))!==0&&(r&K)===0&&Vi(t,a,i)&&(O(t,K),Yi(t))}}function Vi(n,a,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const t of n.deps){if(_e.call(a,t))return!0;if((t.f&na)!==0&&Vi(t,a,e))return e.set(t,!0),!0}return e.set(n,!1),!1}function Yi(n){v.schedule(n)}function sr(n,a){if(!((n.f&Ea)!==0&&(n.f&W)!==0)){(n.f&K)!==0?a.d.push(n):(n.f&ha)!==0&&a.m.push(n),O(n,W);for(var e=n.first;e!==null;)sr(e,a),e=e.next}}function ur(n){O(n,W);for(var a=n.first;a!==null;)ur(a),a=a.next}let Ve=new Set;const $a=new Map;let lr=!1;function Dn(n,a){var e={f:0,v:n,reactions:null,equals:Wt,rv:0,wv:0};return e}function Ma(n,a){const e=Dn(n);return _r(e),e}function Hs(n,a=!1,e=!0){const i=Dn(n);return a||(i.equals=Ut),i}function Ya(n,a,e=!1){S!==null&&(!Ta||(S.f&Ue)!==0)&&Zt()&&(S.f&(na|xa|Fn|Ue))!==0&&(Ga===null||!Ga.has(n))&&js();let i=e?Bn(a):a;return Yn(n,i,$e)}var jn=null,Ri=0;function Yn(n,a,e=null){if(!n.equals(a)){bn?$a.set(n,a):$a.has(n)||$a.set(n,n.v);var i=Rn.ensure();if(i.capture(n,a),(n.f&na)!==0){const t=n;(n.f&K)!==0&&Zi(t),Y===null&&Ui(t)}n.wv=Sr(),jn=null,Ri=0,or(n,K,e),jn=null,E!==null&&(E.f&W)!==0&&(E.f&(Ea|cn))===0&&(ya===null?Ys([n]):ya.push(n)),!i.is_fork&&Ve.size>0&&!lr&&Fs()}return a}function Fs(){lr=!1;for(const n of Ve){(n.f&W)!==0&&O(n,ha);let a;try{a=De(n)}catch{a=!0}a&&Xn(n)}Ve.clear()}function ve(n){Ya(n,n.v+1)}function or(n,a,e){var i=n.reactions;if(i!==null){var t=i.length;if(Ri+=t,Ri>1e5&&jn===null&&(jn=new Set),jn!==null){if(jn.has(n))return;jn.add(n)}for(var r=0;r<t;r++){var u=i[r],s=u.f,o=(s&K)===0;if(o&&O(u,a),(s&Ue)!==0)Ve.add(u);else if((s&na)!==0){var l=u;Y==null||Y.delete(l),or(l,ha,e)}else if(o){var d=u;(s&xa)!==0&&Sa!==null&&Sa.add(d),e!==null?e.push(d):Yi(d)}}}}function Bn(n){if(typeof n!="object"||n===null||hi in n||Ot in n)return n;const a=Bt(n);if(a!==Xr&&a!==Qr)return n;var e=new Map,i=Lt(n),t=Ma(0),r=Nn,u=s=>{if(Nn===r)return s();var o=S,l=Nn;ja(null),vt(r);var d=s();return ja(o),vt(l),d};return i&&e.set("length",Ma(n.length)),new Proxy(n,{defineProperty(s,o,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&ws();var d=e.get(o);return d===void 0?u(()=>{var h=Ma(l.value);return e.set(o,h),h}):Ya(d,l.value,!0),!0},deleteProperty(s,o){var l=e.get(o);if(l===void 0){if(o in s){const d=u(()=>Ma(J));e.set(o,d),ve(t)}}else Ya(l,J),ve(t);return!0},get(s,o,l){var p;if(o===hi)return n;var d=e.get(o),h=o in s;if(d===void 0&&(!h||(p=be(s,o))!=null&&p.writable)&&(d=u(()=>{var g=Bn(h?s[o]:J),f=Ma(g);return f}),e.set(o,d)),d!==void 0){var m=b(d);return m===J?void 0:m}return Reflect.get(s,o,l)},getOwnPropertyDescriptor(s,o){var m;(m=this.has)==null||m.call(this,s,o);var l=Reflect.getOwnPropertyDescriptor(s,o),d=e.get(o);if(d!==void 0){var h=b(d);if(h===J)return;if(l&&"value"in l)l.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return l},has(s,o){var m;if(o===hi)return!0;var l=e.get(o),d=l!==void 0&&l.v!==J||Reflect.has(s,o);if(l!==void 0||(E!==null||S!==null)&&(!d||(m=be(s,o))!=null&&m.writable)){l===void 0&&(l=u(()=>{var p=d?Bn(s[o]):J,g=Ma(p);return g}),e.set(o,l));var h=b(l);if(h===J)return!1}return d},set(s,o,l,d){var C;var h=e.get(o),m=o in s;if(i&&o==="length")for(var p=l;p<h.v;p+=1){var g=e.get(p+"");g!==void 0?Ya(g,J):p in s&&(g=u(()=>Ma(J)),e.set(p+"",g))}if(h===void 0)(!m||(C=be(s,o))!=null&&C.writable)&&(h=u(()=>Ma(void 0)),Ya(h,Bn(l)),e.set(o,h));else{m=h.v!==J;var f=u(()=>Bn(l));Ya(h,f)}var c=Reflect.getOwnPropertyDescriptor(s,o);if(c!=null&&c.set&&c.set.call(d,l),!m){if(i&&typeof o=="string"){var y=e.get("length"),P=Number(o);Number.isInteger(P)&&P>=y.v&&Ya(y,P+1)}ve(t)}return!0},ownKeys(s){b(t);var o=Reflect.ownKeys(s).filter(h=>{var m=e.get(h);return m===void 0||m.v!==J});for(var[l,d]of e)d.v!==J&&!(l in s)&&o.push(l);return o},setPrototypeOf(){_s()}})}var bt,dr,kr,mr;function Os(){if(bt===void 0){bt=window,dr=/Firefox/.test(navigator.userAgent);var n=Element.prototype,a=Node.prototype,e=Text.prototype;kr=be(a,"firstChild").get,mr=be(a,"nextSibling").get,pt(n)&&(n[Ai]=void 0,n[Fe]=null,n[xi]=void 0,n.__e=void 0),pt(e)&&(e[ke]=void 0)}}function gn(n=""){return document.createTextNode(n)}function nn(n){return kr.call(n)}function Re(n){return mr.call(n)}function F(n,a){return nn(n)}function Hn(n,a=!1){{var e=nn(n);return e instanceof Comment&&e.data===""?Re(e):e}}function B(n,a=!1){return nn(n)}function x(n,a=1,e=!1){let i=n;for(;a--;)i=Re(i);return i}function $s(n){n.textContent=""}function pr(){return!1}function hr(n,a,e){return a==null||a===Jt?e?document.createElement(n,{is:e}):document.createElement(n):e?document.createElementNS(a,n,{is:e}):document.createElementNS(a,n)}function Gs(n){var a=E;if(a===null)return S.f|=pn,n;if((a.f&Qn)===0&&(a.f&je)===0)throw n;Fa(n,a)}function Fa(n,a){if(n===Gt)throw n;if(!(a!==null&&(a.f&aa)!==0)){for(;a!==null;){if((a.f&Ii)!==0&&(a.f&(aa|We))===0){if((a.f&Qn)===0)throw n;try{a.b.error(n);return}catch(e){n=e}}a=a.parent}throw n}}function Js(n){E===null&&(S===null&&ys(),fs()),bn&&bs()}function Ws(n,a){var e=a.last;e===null?a.last=a.first=n:(e.next=n,n.prev=e,a.last=n)}function fn(n,a){var e=E;e!==null&&(e.f&ta)!==0&&(n|=ta);var i={ctx:ua,deps:null,nodes:null,f:n|K|Pa,first:null,fn:a,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};v==null||v.register_created_effect(i);var t=i;if((n&je)!==0)ye!==null?ye.push(i):Rn.ensure().schedule(i);else if(a!==null){try{Xn(i)}catch(u){throw la(i),u}t.deps===null&&t.teardown===null&&t.nodes===null&&t.first===t.last&&(t.f&ae)===0&&(t=t.first,(n&xa)!==0&&(n&Zn)!==0&&t!==null&&(t.f|=Zn))}if(t!==null&&(t.parent=e,e!==null&&Ws(t,e),S!==null&&(S.f&na)!==0&&(n&cn)===0)){var r=S;(r.effects??(r.effects=[])).push(t)}return i}function Xi(){return S!==null&&!Ta}function Us(n){const a=fn(si,null);return O(a,W),a.teardown=n,a}function ft(n){Js();var a=E.f,e=!S&&(a&Ea)!==0&&ua!==null&&!ua.i;if(e){var i=ua;(i.e??(i.e=[])).push(n)}else return gr(n)}function gr(n){return fn(je|is,n)}function qs(n){Rn.ensure();const a=fn(cn|ae,n);return(e={})=>new Promise(i=>{e.outro?En(a,()=>{la(a),i(void 0)}):(la(a),i(void 0))})}function Zs(n){return fn(Fn|ae,n)}function cr(n,a=0){return fn(si|a,n)}function ma(n,a=[],e=[],i=[]){Es(i,a,e,t=>{fn(si,()=>{n(...t.map(b))})})}function Qi(n,a=0){var e=fn(xa|a,n);return e}function _a(n){return fn(Ea|ae,n)}function br(n){var a=n.teardown;if(a!==null){const e=bn,i=S;yt(!0),ja(null);try{a.call(null)}catch(t){Fa(t,n.parent)}finally{yt(e),ja(i)}}}function at(n,a=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const t=e.ac;t!==null&&Ne(()=>{t.abort(Ee)});var i=e.next;(e.f&cn)!==0?e.parent=null:la(e,a),e=i}}function Vs(n){for(var a=n.first;a!==null;){var e=a.next;(a.f&Ea)===0&&la(a),a=e}}function la(n,a=!0){var e=!1;(a||(n.f&es)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(fr(n.nodes.start,n.nodes.end),e=!0),n.f|=We,at(n,a&&!e),Se(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const r of i)r.stop();br(n),n.f^=We,n.f|=aa;var t=n.parent;t!==null&&t.first!==null&&yr(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function fr(n,a){for(;n!==null;){var e=n===a?null:Re(n);n.remove(),n=e}}function yr(n){var a=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),a!==null&&(a.first===n&&(a.first=i),a.last===n&&(a.last=e))}function En(n,a,e=!0){var i=[];n.f|=Gi,vr(n,i,!0);var t=()=>{e&&la(n),a&&a()},r=i.length;if(r>0){var u=()=>--r||t();for(var s of i)s.out(u)}else t()}function vr(n,a,e){if((n.f&ta)===0){n.f^=ta;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||e)&&a.push(s);for(var t=n.first;t!==null;){var r=t.next;if((t.f&cn)===0){var u=(t.f&Zn)!==0||(t.f&Ea)!==0&&(n.f&xa)!==0;vr(t,a,u?e:!1)}t=r}}}function Ye(n){n.f&=~Gi,wr(n,!0)}function wr(n,a){if((n.f&Gi)===0&&(n.f&ta)!==0){n.f^=ta,(n.f&W)===0&&(O(n,K),Rn.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,t=(e.f&Zn)!==0||(e.f&Ea)!==0;wr(e,t?a:!1),e=i}var r=n.nodes&&n.nodes.t;if(r!==null)for(const u of r)(u.is_global||a)&&u.in()}}function nt(n,a){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var t=e===i?null:Re(e);a.append(e),e=t}}let bn=!1;function yt(n){bn=n}let S=null,Ta=!1;function ja(n){S=n}let E=null;function Ja(n){E=n}let Ga=null;function _r(n){S!==null&&((S.f&qe)!==0||(S.f&na)!==0)&&(Ga??(Ga=new Set)).add(n)}let sa=null,pa=0,ya=null;function Ys(n){ya=n}let jr=1,In=0,Nn=In;function vt(n){Nn=n}function Sr(){return++jr}function De(n){var a=n.f;if((a&K)!==0)return!0;if((a&ha)!==0){for(var e=n.deps,i=e.length,t=0;t<i;t++){var r=e[t];if(De(r)&&Qt(r),r.wv>n.wv)return!0}(a&Pa)!==0&&Y===null&&O(n,W)}return!1}function Ir(n,a,e=!0){var i=n.reactions;if(i!==null&&!(Ga!==null&&Ga.has(n)))for(var t=0;t<i.length;t++){var r=i[t];(r.f&na)!==0?Ir(r,a,!1):a===r&&(e?O(r,K):(r.f&W)!==0&&O(r,ha),Yi(r))}}function Ar(n){var a=sa,e=pa,i=ya,t=S,r=Ga,u=ua,s=Ta,o=Nn,l=n.f;sa=null,pa=0,ya=null,S=(l&(Ea|cn))===0?n:null,Ga=null,Vn(n.ctx),Ta=!1,Nn=++In,n.ac!==null&&(Ne(()=>{n.ac.abort(Ee)}),n.ac=null);try{n.f|=qe;var d=n.fn,h=d();n.f|=Qn;var m=wt(n);if(Zt()&&ya!==null&&!Ta&&m!==null&&(n.f&(na|ha|K))===0)for(var p=0;p<ya.length;p++)Ir(ya[p],n);if(t!==null&&t!==n){if(In++,t.deps!==null)for(let g=0;g<e;g+=1)t.deps[g].rv=In;if(a!==null)for(const g of a)g.rv=In;ya!==null&&(i===null?i=ya:i.push(...ya))}return(n.f&pn)!==0&&(n.f^=pn),h}catch(g){return wt(n),Gs(g)}finally{n.f^=qe,sa=a,pa=e,ya=i,S=t,Ga=r,Vn(u),Ta=s,Nn=o}}function wt(n){var t;var a=n.deps,e=v==null?void 0:v.is_fork;if(sa!==null){var i;if(e||Se(n,pa),a!==null&&pa>0)for(a.length=pa+sa.length,i=0;i<sa.length;i++)a[pa+i]=sa[i];else n.deps=a=sa;if(Xi()&&(n.f&Pa)!==0)for(i=pa;i<a.length;i++)((t=a[i]).reactions??(t.reactions=[])).push(n)}else!e&&a!==null&&pa<a.length&&(Se(n,pa),a.length=pa);return a}function Xs(n,a){let e=a.reactions;if(e!==null){var i=Vr.call(e,n);if(i!==-1){var t=e.length-1;t===0?e=a.reactions=null:(e[i]=e[t],e.pop())}}if(e===null&&(a.f&na)!==0&&(sa===null||!_e.call(sa,a))){var r=a;(r.f&Pa)!==0&&(r.f^=Pa),r.v!==J&&Ui(r),r.ac!==null&&Ne(()=>{r.ac.abort(Ee),r.ac=null,O(r,K)}),Ms(r),Se(r,0)}}function Se(n,a){var e=n.deps;if(e!==null)for(var i=a;i<e.length;i++)Xs(n,e[i])}function Xn(n){var a=n.f;if((a&aa)===0){O(n,W);var e=E;E=n;try{(a&(xa|Ft))!==0?Vs(n):at(n),br(n);var i=Ar(n);n.teardown=typeof i=="function"?i:null,n.wv=jr;var t;Kt&&Is&&(n.f&K)!==0&&n.deps}finally{E=e}}}async function Qs(){await Promise.resolve(),zs()}function b(n){var a=n.f,e=(a&na)!==0;if(S!==null&&!Ta){var i=E!==null&&(E.f&aa)!==0;if(!i&&(Ga===null||!Ga.has(n))){var t=S.deps;if((S.f&qe)!==0)n.rv<In&&(n.rv=In,sa===null&&t!==null&&t[pa]===n?pa++:sa===null?sa=[n]:sa.push(n));else{S.deps??(S.deps=[]),_e.call(S.deps,n)||S.deps.push(n);var r=n.reactions;r===null?n.reactions=[S]:_e.call(r,S)||r.push(S)}}}if(bn&&$a.has(n))return $a.get(n);if(e){var u=n;if(bn){var s=u.v;return((u.f&W)===0&&u.reactions!==null||Tr(u))&&(s=Zi(u)),$a.set(u,s),s}var o=(u.f&Pa)===0&&!Ta&&S!==null&&(S.f&Pa)!==0,l=(u.f&Qn)===0;De(u)&&(o&&(u.f|=Pa),Qt(u)),o&&!l&&(ar(u),xr(u))}if(Y!=null&&Y.has(n))return Y.get(n);if((n.f&pn)!==0)throw n.v;return n.v}function xr(n){if(n.f|=Pa,n.deps!==null)for(const e of n.deps){var a=e.reactions;a===null?e.reactions=[n]:_e.call(a,n)||a.push(n),(e.f&na)!==0&&(e.f&Pa)===0&&(ar(e),xr(e))}}function Tr(n){if(n.v===J)return!0;if(n.deps===null)return!1;for(const a of n.deps)if($a.has(a)||(a.f&na)!==0&&Tr(a))return!0;return!1}function Pr(n){var a=Ta;try{return Ta=!0,n()}finally{Ta=a}}const au=["touchstart","touchmove"];function nu(n){return au.includes(n)}const ze=Symbol("events"),eu=new Set,_t=new Set;let bi=null,fi=!1;function jt(n){var f,c;var a=this,e=a.ownerDocument,i=n.type,t=((f=n.composedPath)==null?void 0:f.call(n))||[],r=t[0]||n.target;bi=n,fi||(fi=!0,setTimeout(()=>{fi=!1,bi=null}));var u=0,s=bi===n&&n[ze];if(s){var o=t.indexOf(s);if(o!==-1&&(a===document||a===window)){n[ze]=a;return}var l=t.indexOf(a);if(l===-1)return;o<=l&&(u=o)}if(r=t[u]||n.target,r!==a){zt(n,"currentTarget",{configurable:!0,get(){return r||e}});var d=S,h=E;ja(null),Ja(null);try{for(var m,p=[];r!==null&&r!==a;){try{var g=(c=r[ze])==null?void 0:c[i];g!=null&&(!r.disabled||n.target===r)&&g.call(r,n)}catch(y){m?p.push(y):m=y}if(n.cancelBubble)break;u++,r=u<t.length?t[u]:null}if(m){for(let y of p)queueMicrotask(()=>{throw y});throw m}}finally{n[ze]=a,delete n.currentTarget,ja(d),Ja(h)}}}var Ct;const yi=((Ct=globalThis==null?void 0:globalThis.window)==null?void 0:Ct.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function iu(n){return(yi==null?void 0:yi.createHTML(n))??n}function tu(n){var a=hr("template");return a.innerHTML=iu(n.replaceAll("<!>","<!---->")),a.content}function Ie(n,a){var e=E;e.nodes===null&&(e.nodes={start:n,end:a,a:null,t:null})}function q(n,a){var e=(a&ls)!==0,i=(a&os)!==0,t,r=!n.startsWith("<!>");return()=>{t===void 0&&(t=tu(r?n:"<!>"+n),e||(t=nn(t)));var u=i||dr?document.importNode(t,!0):t.cloneNode(!0);if(e){var s=nn(u),o=u.lastChild;Ie(s,o)}else Ie(u,u);return u}}function Di(){var n=document.createDocumentFragment(),a=document.createComment(""),e=gn();return n.append(a,e),Ie(a,e),n}function H(n,a){n!==null&&n.before(a)}function ru(n){let a=0,e=Dn(0),i;return()=>{Xi()&&(b(e),cr(()=>(a===0&&(i=Pr(()=>n(()=>ve(e)))),a+=1,()=>{mn(()=>{a-=1,a===0&&(i==null||i(),i=void 0,ve(e))})})))}}var su=Zn|ae;function uu(n,a,e,i){new lu(n,a,e,i)}var va,$i,wa,xn,Q,oa,ea,da,za,Tn,kn,qn,xe,an,ii,T,ou,du,Ci,dn,ku,Mi,ge,Ge,Ki,Li;class lu{constructor(a,e,i,t){I(this,T);_(this,"parent");_(this,"is_pending",!1);_(this,"transform_error");I(this,va);I(this,$i,null);I(this,wa);I(this,xn);I(this,Q);I(this,oa,null);I(this,ea,null);I(this,da,null);I(this,za,null);I(this,Tn,0);I(this,kn,0);I(this,qn,!1);I(this,xe,new Map);I(this,an,null);I(this,ii,ru(()=>(j(this,an,Dn(k(this,Tn))),()=>{j(this,an,null)})));var r;j(this,va,a),j(this,wa,e),j(this,xn,u=>{var s=E;s.b=this,s.f|=Ii,i(u)}),this.parent=E.b,this.transform_error=t??((r=this.parent)==null?void 0:r.transform_error)??(u=>u),j(this,Q,Qi(()=>{w(this,T,Mi).call(this)},su))}defer_effect(a){Yt(a,k(this,xe))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!k(this,wa).pending}update_pending_count(a,e){w(this,T,Ki).call(this,a,e),j(this,Tn,k(this,Tn)+a),!(!k(this,an)||k(this,qn))&&(j(this,qn,!0),mn(()=>{j(this,qn,!1),k(this,an)&&Yn(k(this,an),k(this,Tn))}))}get_effect_pending(){return k(this,ii).call(this),b(k(this,an))}error(a){if(a===Gt||!k(this,wa).onerror&&!k(this,wa).failed)throw a;v!=null&&v.is_fork?(k(this,oa)&&v.skip_effect(k(this,oa)),k(this,ea)&&v.skip_effect(k(this,ea)),k(this,da)&&v.skip_effect(k(this,da)),v.oncommit(()=>{w(this,T,dn).call(this)||w(this,T,Li).call(this,a)})):w(this,T,Li).call(this,a)}}va=new WeakMap,$i=new WeakMap,wa=new WeakMap,xn=new WeakMap,Q=new WeakMap,oa=new WeakMap,ea=new WeakMap,da=new WeakMap,za=new WeakMap,Tn=new WeakMap,kn=new WeakMap,qn=new WeakMap,xe=new WeakMap,an=new WeakMap,ii=new WeakMap,T=new WeakSet,ou=function(){try{j(this,oa,_a(()=>k(this,xn).call(this,k(this,va))))}catch(a){this.error(a)}},du=function(a){const e=k(this,wa).failed,{reset:i,invoke_onerror:t}=w(this,T,Ci).call(this,a);mn(t),e&&j(this,da,_a(()=>{e(k(this,va),()=>a,()=>i)}))},Ci=function(a){var e=!1,i=!1;const t=()=>{if(!w(this,T,dn).call(this)){if(e){ps();return}e=!0,i&&Ss(),k(this,da)!==null&&En(k(this,da),()=>{j(this,da,null)}),w(this,T,Ge).call(this,()=>{w(this,T,Mi).call(this)})}};return{reset:t,invoke_onerror:()=>{var u,s;if(!w(this,T,dn).call(this))try{i=!0,(s=(u=k(this,wa)).onerror)==null||s.call(u,a,t),i=!1}catch(o){Fa(o,k(this,Q)&&k(this,Q).parent)}}}},dn=function(){return(k(this,Q).f&(aa|We))!==0},ku=function(){const a=k(this,wa).pending;a&&(this.is_pending=!0,j(this,ea,_a(()=>a(k(this,va)))),mn(()=>{if(!w(this,T,dn).call(this)){var e=j(this,za,document.createDocumentFragment()),i=gn(),t=!1;if(e.append(i),j(this,oa,w(this,T,Ge).call(this,()=>{try{return _a(()=>k(this,xn).call(this,i))}catch(r){try{this.error(r),t=!0}catch(u){Fa(u,k(this,Q).parent)}return null}})),k(this,oa)===null){j(this,za,null),t&&w(this,T,ge).call(this,v);return}k(this,kn)===0&&(k(this,va).before(e),j(this,za,null),En(k(this,ea),()=>{j(this,ea,null)}),w(this,T,ge).call(this,v))}}))},Mi=function(){try{if(this.is_pending=this.has_pending_snippet(),j(this,kn,0),j(this,Tn,0),j(this,oa,_a(()=>{k(this,xn).call(this,k(this,va))})),k(this,kn)>0){var a=j(this,za,document.createDocumentFragment());nt(k(this,oa),a);const e=k(this,wa).pending;j(this,ea,_a(()=>e(k(this,va))))}else w(this,T,ge).call(this,v)}catch(e){this.error(e)}},ge=function(a){this.is_pending=!1,a.transfer_reactions(k(this,xe))},Ge=function(a){var e=E,i=S,t=ua;Ja(k(this,Q)),ja(k(this,Q)),Vn(k(this,Q).ctx);try{return Rn.ensure(),a()}finally{Ja(e),ja(i),Vn(t)}},Ki=function(a,e){var i;if(!this.has_pending_snippet()){this.parent&&w(i=this.parent,T,Ki).call(i,a,e);return}j(this,kn,k(this,kn)+a),k(this,kn)===0&&(w(this,T,ge).call(this,e),k(this,ea)&&En(k(this,ea),()=>{j(this,ea,null)}),k(this,za)&&(k(this,va).before(k(this,za)),j(this,za,null)))},Li=function(a){k(this,oa)&&(la(k(this,oa)),j(this,oa,null)),k(this,ea)&&(la(k(this,ea)),j(this,ea,null)),k(this,da)&&(la(k(this,da)),j(this,da,null));let e=k(this,wa).failed;const i=t=>{if(w(this,T,dn).call(this))return;const{reset:r,invoke_onerror:u}=w(this,T,Ci).call(this,t);u(),e&&!w(this,T,dn).call(this)&&j(this,da,w(this,T,Ge).call(this,()=>{try{return _a(()=>{var s=E;s.b=this,s.f|=Ii,e(k(this,va),()=>t,()=>r)})}catch(s){return Fa(s,k(this,Q).parent),null}}))};mn(()=>{if(!w(this,T,dn).call(this)){var t;try{t=this.transform_error(a)}catch(r){Fa(r,k(this,Q)&&k(this,Q).parent);return}t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(i,r=>Fa(r,k(this,Q)&&k(this,Q).parent)):i(t)}})};function D(n,a){var e=a==null?"":typeof a=="object"?`${a}`:a;e!==(n[ke]??(n[ke]=n.nodeValue))&&(n[ke]=e,n.nodeValue=`${e}`)}function mu(n,a){return pu(n,a)}const Be=new Map;function pu(n,{target:a,anchor:e,props:i={},events:t,context:r,intro:u=!0,transformError:s}){Os();var o=void 0,l=qs(()=>{var d=e??a.appendChild(gn());uu(d,{pending:()=>{}},p=>{Ji({});var g=ua;r&&(g.c=r),t&&(i.$$events=t),o=n(p,i)||qt(),Wi()},s);var h=new Set,m=p=>{for(var g=0;g<p.length;g++){var f=p[g];if(!h.has(f)){h.add(f);var c=nu(f);for(const C of[a,document]){var y=Be.get(C);y===void 0&&(y=new Map,Be.set(C,y));var P=y.get(f);P===void 0?(C.addEventListener(f,jt,{passive:c}),y.set(f,1)):y.set(f,P+1)}}}};return m(ri(eu)),_t.add(m),()=>{var c;for(var p of h)for(const y of[a,document]){var g=Be.get(y),f=g.get(p);--f==0?(y.removeEventListener(p,jt),g.delete(p),g.size===0&&Be.delete(y)):g.set(p,f)}_t.delete(m),d!==e&&((c=d.parentNode)==null||c.removeChild(d))}});return hu.set(o,l),o}let hu=new WeakMap;var Aa,Ba,ka,Pn,Te,Pe,ti;class gu{constructor(a,e=!0){_(this,"anchor");I(this,Aa,new Map);I(this,Ba,new Map);I(this,ka,new Map);I(this,Pn,new Set);I(this,Te,!0);I(this,Pe,a=>{if(k(this,Aa).has(a)){var e=k(this,Aa).get(a),i=k(this,Ba).get(e);if(i)Ye(i),k(this,Pn).delete(e);else{var t=k(this,ka).get(e);t&&(Ye(t.effect),k(this,Ba).set(e,t.effect),k(this,ka).delete(e),t.fragment.lastChild.remove(),this.anchor.before(t.fragment),i=t.effect)}for(const[r,u]of k(this,Aa)){if(k(this,Aa).delete(r),r===a)break;const s=k(this,ka).get(u);s&&(la(s.effect),k(this,ka).delete(u))}for(const[r,u]of k(this,Ba)){if(r===e||k(this,Pn).has(r))continue;const s=()=>{if(Array.from(k(this,Aa).values()).includes(r)){var l=document.createDocumentFragment();nt(u,l),l.append(gn()),k(this,ka).set(r,{effect:u,fragment:l})}else la(u);k(this,Pn).delete(r),k(this,Ba).delete(r)};k(this,Te)||!i?(k(this,Pn).add(r),En(u,s,!1)):s()}}});I(this,ti,a=>{k(this,Aa).delete(a);const e=Array.from(k(this,Aa).values());for(const[i,t]of k(this,ka))e.includes(i)||(la(t.effect),k(this,ka).delete(i))});this.anchor=a,j(this,Te,e)}ensure(a,e){var i=v,t=pr();if(e&&!k(this,Ba).has(a)&&!k(this,ka).has(a))if(t){var r=document.createDocumentFragment(),u=gn();r.append(u),k(this,ka).set(a,{effect:_a(()=>e(u)),fragment:r})}else k(this,Ba).set(a,_a(()=>e(this.anchor)));if(k(this,Aa).set(i,a),t){for(const[s,o]of k(this,Ba))s===a?i.unskip_effect(o):i.skip_effect(o);for(const[s,o]of k(this,ka))s===a?i.unskip_effect(o.effect):i.skip_effect(o.effect);i.oncommit(k(this,Pe)),i.ondiscard(k(this,ti))}else k(this,Pe).call(this,i)}}Aa=new WeakMap,Ba=new WeakMap,ka=new WeakMap,Pn=new WeakMap,Te=new WeakMap,Pe=new WeakMap,ti=new WeakMap;function Ha(n,a,e=!1){var i=new gu(n),t=e?Zn:0;function r(u,s){i.ensure(u,s)}Qi(()=>{var u=!1;a((s,o=0)=>{u=!0,r(o,s)}),u||r(-1,null)},t)}function se(n,a){return a}function cu(n,a,e){for(var i=[],t=a.length,r,u=a.length,s=0;s<t;s++){let h=a[s];En(h,()=>{if(r){if(r.pending.delete(h),r.done.add(h),r.pending.size===0){var m=n.outrogroups;zi(n,ri(r.done)),m.delete(r),m.size===0&&(n.outrogroups=null)}}else u-=1},!1)}if(u===0){var o=i.length===0&&e!==null&&n.pending.size===0;if(o){var l=e,d=l.parentNode;$s(d),d.append(l),n.items.clear()}zi(n,a,!o)}else r={pending:new Set(a),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function zi(n,a,e=!0){var i;if(n.pending.size>0){i=new Set;for(const u of n.pending.values())for(const s of u)i.add(n.items.get(s).e)}for(var t=0;t<a.length;t++){var r=a[t];if(i!=null&&i.has(r)){r.f|=Oa;const u=document.createDocumentFragment();nt(r,u)}else la(a[t],e)}}var St;function ue(n,a,e,i,t,r=null){var u=n,s=new Map,o=(a&$t)!==0;if(o){var l=n;u=l.appendChild(gn())}var d=null,h=Ds(()=>{var P=e();return Lt(P)?P:P==null?[]:ri(P)}),m=new Map,p=!0;function g(P){if((y.effect.f&aa)===0){y.pending.delete(P);var C=b(h);y.fallback=d,bu(y,C,u,a,i),d!==null&&(C.length===0?(d.f&Oa)===0?Ye(d):(d.f^=Oa,ce(d,null,u)):En(d,()=>{d=null}))}}function f(P){y.pending.delete(P)}var c=Qi(()=>{for(var P=b(h),C=P.length,$=new Set,Z=v,ra=pr(),M=0;M<C;M+=1){var ga=P[M],ca=i(ga,M),X=p?null:s.get(ca);X?(X.v&&Yn(X.v,ga),X.i&&Yn(X.i,M),ra&&Z.unskip_effect(X.e)):(X=fu(s,p?u:St??(St=gn()),ga,ca,M,t,a,e),p||(X.e.f|=Oa),s.set(ca,X)),$.add(ca)}if(C===0&&r&&!d&&(p?d=_a(()=>r(u)):(d=_a(()=>r(St??(St=gn()))),d.f|=Oa)),C>$.size&&cs(),!p)if(m.set(Z,$),ra){for(const[rn,z]of s)$.has(rn)||Z.skip_effect(z.e);Z.oncommit(g),Z.ondiscard(f)}else g(Z);b(h)}),y={effect:c,items:s,pending:m,outrogroups:null,fallback:d};p=!1}function le(n){for(;n!==null&&(n.f&Ea)===0;)n=n.next;return n}function bu(n,a,e,i,t){var X,rn,z,V,Na,sn,Me,U,G;var r=(i&ss)!==0,u=a.length,s=n.items,o=le(n.effect.first),l,d=null,h,m=[],p=[],g,f,c,y;if(r)for(y=0;y<u;y+=1)g=a[y],f=t(g,y),c=s.get(f).e,(c.f&Oa)===0&&((rn=(X=c.nodes)==null?void 0:X.a)==null||rn.measure(),(h??(h=new Set)).add(c));for(y=0;y<u;y+=1){if(g=a[y],f=t(g,y),c=s.get(f).e,n.outrogroups!==null)for(const L of n.outrogroups)L.pending.delete(c),L.done.delete(c);if((c.f&ta)!==0&&(Ye(c),r&&((V=(z=c.nodes)==null?void 0:z.a)==null||V.unfix(),(h??(h=new Set)).delete(c))),(c.f&Oa)!==0)if(c.f^=Oa,c===o)ce(c,null,e);else{var P=d?d.next:o;c===n.effect.last&&(n.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),on(n,d,c),on(n,c,P),ce(c,P,e),d=c,m=[],p=[],o=le(d.next);continue}if(c!==o){if(l!==void 0&&l.has(c)){if(m.length<p.length){var C=p[0],$;d=C.prev;var Z=m[0],ra=m[m.length-1];for($=0;$<m.length;$+=1)ce(m[$],C,e);for($=0;$<p.length;$+=1)l.delete(p[$]);on(n,Z.prev,ra.next),on(n,d,Z),on(n,ra,C),o=C,d=ra,y-=1,m=[],p=[]}else l.delete(c),ce(c,o,e),on(n,c.prev,c.next),on(n,c,d===null?n.effect.first:d.next),on(n,d,c),d=c;continue}for(m=[],p=[];o!==null&&o!==c;)(l??(l=new Set)).add(o),p.push(o),o=le(o.next);if(o===null)continue}(c.f&Oa)===0&&m.push(c),d=c,o=le(c.next)}if(n.outrogroups!==null){for(const L of n.outrogroups)L.pending.size===0&&(zi(n,ri(L.done)),(Na=n.outrogroups)==null||Na.delete(L));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||l!==void 0){var M=[];if(l!==void 0)for(c of l)(c.f&ta)===0&&M.push(c);for(;o!==null;)(o.f&ta)===0&&o!==n.fallback&&M.push(o),o=le(o.next);var ga=M.length;if(ga>0){var ca=(i&$t)!==0&&u===0?e:null;if(r){for(y=0;y<ga;y+=1)(Me=(sn=M[y].nodes)==null?void 0:sn.a)==null||Me.measure();for(y=0;y<ga;y+=1)(G=(U=M[y].nodes)==null?void 0:U.a)==null||G.fix()}cu(n,M,ca)}}r&&mn(()=>{var L,ba;if(h!==void 0)for(c of h)(ba=(L=c.nodes)==null?void 0:L.a)==null||ba.apply()})}function fu(n,a,e,i,t,r,u,s){var o=(u&ts)!==0?(u&us)===0?Hs(e,!1,!1):Dn(e):null,l=(u&rs)!==0?Dn(t):null;return{v:o,i:l,e:_a(()=>(r(a,o??e,l??t,s),()=>{n.delete(i)}))}}function ce(n,a,e){if(n.nodes)for(var i=n.nodes.start,t=n.nodes.end,r=a&&(a.f&Oa)===0?a.nodes.start:e;i!==null;){var u=Re(i);if(r.before(i),i===t)return;i=u}}function on(n,a,e){a===null?n.effect.first=e:a.next=e,e===null?n.effect.last=a:e.prev=a}function yu(n,a,e=!1,i=!1,t=!1,r=!1){var u=n,s="";if(e)var o=n;ma(()=>{var l=E;if(s!==(s=a()??"")){if(e){l.nodes=null,o.innerHTML=s,s!==""&&Ie(nn(o),o.lastChild);return}if(l.nodes!==null&&(fr(l.nodes.start,l.nodes.end),l.nodes=null),s!==""){var d=i?ds:t?ks:void 0,h=hr(i?"svg":t?"math":"template",d);h.innerHTML=s;var m=i||t?h:h.content;if(Ie(nn(m),m.lastChild),i||t)for(;nn(m);)u.before(nn(m));else u.before(m)}}})}function vu(n,a,e){var i=n==null?"":""+n;return i===""?null:i}function wu(n,a){return n==null?null:String(n)}function vi(n,a,e,i,t,r){var u=n[Ai];if(u!==e||u===void 0){var s=vu(e);s==null?n.removeAttribute("class"):n.className=s,n[Ai]=e}return r}function _n(n,a,e,i){var t=n[xi];if(t!==a){var r=wu(a);r==null?n.removeAttribute("style"):n.style.cssText=r,n[xi]=a}return i}const _u=Symbol("is custom element"),ju=Symbol("is html");function On(n,a,e,i){var t=Su(n),r=t[a];r!==(t[a]=e)&&(e==null?n.removeAttribute(a):typeof e!="string"&&Iu(n).has(a)?n[a]=e:n.setAttribute(a,e))}function Su(n){return n[Fe]??(n[Fe]={[_u]:n.nodeName.includes("-"),[ju]:n.namespaceURI===Jt})}var It=new Map;function Iu(n){var a=n.getAttribute("is")||n.nodeName,e=It.get(a);if(e)return e;It.set(a,e=new Set);for(var i,t=n,r=Element.prototype;r!==t;){i=Yr(t);for(var u in i)i[u].set&&u!=="innerHTML"&&u!=="textContent"&&u!=="innerText"&&e.add(u);t=Bt(t)}return e}function Au(n,a,e=a){var i=new WeakSet;Ps(n,"input",async t=>{var r=t?n.defaultValue:n.value;if(r=wi(n)?_i(r):r,e(r),v!==null&&i.add(v),await Qs(),r!==(r=a())){var u=n.selectionStart,s=n.selectionEnd,o=n.value.length;if(n.value=r??"",s!==null){var l=n.value.length;u===s&&s===o&&l>o?(n.selectionStart=l,n.selectionEnd=l):(n.selectionStart=u,n.selectionEnd=Math.min(s,l))}}}),Pr(a)==null&&n.value&&(e(wi(n)?_i(n.value):n.value),v!==null&&i.add(v)),cr(()=>{var t=a();if(n===document.activeElement){var r=v;if(i.has(r))return}wi(n)&&t===_i(n.value)||n.type==="date"&&!t&&!n.value||t!==n.value&&(n.value=t??"")})}function wi(n){var a=n.type;return a==="number"||a==="range"}function _i(n){return n===""?null:+n}const xu="5";var Mt;typeof window<"u"&&((Mt=window.__svelte??(window.__svelte={})).v??(Mt.v=new Set)).add(xu);const Tu=`---
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
`,Pu=`---
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
`,Eu=`---
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
`,Nu=`---
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
`,Ru=`---
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
`,Du=`---
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
`,Cu=`---
lang: ai
number: 7
date: 2026-11-13
title: Neural Network & PyTorch
subtitle: Dari satu neuron ke jaringan saraf tiruan — dan latihan pertama dengan PyTorch
keywords: neural network jaringan saraf neuron PyTorch tensor activation function backpropagation deep learning
---

Di pelajaran #5 kita melatih KNN dan Random Forest — model machine learning klasik yang bekerja langsung dari data. Hari ini kita naik satu tingkat: **neural network** (jaringan saraf tiruan), fondasi dari deep learning (pembelajaran mendalam) — teknologi di balik pengenal gambar, asisten suara, dan model bahasa besar seperti yang sedang kamu pakai ini. Dan kita akan menyentuhnya langsung dengan **PyTorch**, framework (kerangka kerja) paling populer untuk membangunnya.

Jangan khawatir kalau terdengar besar. Satu neuron itu sederhana, dan jaringan saraf hanyalah banyak neuron yang disusun rapi.

## Analogi: neuron itu seperti sebuah keputusan kecil

Bayangkan kamu memutuskan mau membawa payung atau tidak. Kamu mempertimbangkan tiga hal: apakah langit mendung, apakah ada prakiraan hujan, dan apakah kamu akan naik motor. Setiap pertimbangan punya "bobot" (weight) — langit mendung lebih penting daripada naik motor, misalnya. Kamu menjumlahkan semuanya, dan kalau totalnya melewati batas tertentu (threshold — ambang batas), kamu membawa payung.

Itulah **neuron** (sel saraf tiruan): ia menerima beberapa masukan (input), mengalikan masing-masing dengan bobotnya, menjumlahkan semuanya, lalu memutuskan apakah akan "menyala" (aktif) atau tidak.

Rumus sederhananya:

> **output = activation(w₁x₁ + w₂x₂ + … + wₙxₙ + bias)**

- **x** adalah masukan (misalnya: mendung = 1, hujan = 0).
- **w (weight / bobot)** adalah seberapa penting masukan itu.
- **bias** adalah "kecenderungan dasar" neuron — seperti prasangka awal sebelum melihat data.
- **activation function (fungsi aktivasi)** adalah aturan yang mengubah jumlah tadi menjadi keputusan akhir. Yang paling terkenal adalah **ReLU** — kalau hasilnya negatif, jadi 0; kalau positif, dibiarkan apa adanya. Sederhana tapi sangat ampuh.

## Dari satu neuron ke jaringan

Satu neuron hanya bisa membuat satu keputusan sederhana. Tapi susun puluhan neuron dalam satu lapisan (layer), lalu susun beberapa lapisan bertingkat — dan jadilah **neural network**:

- **Input layer (lapisan masukan):** menerima data mentah, misalnya angka-angka ciri bunga iris dari pelajaran #5.
- **Hidden layer (lapisan tersembunyi):** lapisan di tengah yang belajar pola-pola — misalnya kombinasi ciri yang membedakan satu jenis bunga dari yang lain. Di sinilah "kecerdasan" itu terbentuk.
- **Output layer (lapisan keluaran):** menghasilkan jawaban akhir, misalnya probabilitas untuk tiap jenis bunga.

Inilah yang disebut **deep learning**: neural network dengan banyak hidden layer. "Deep" (dalam) di sini maksudnya banyak lapisannya, bukan sulitnya.

## Bagaimana jaringan belajar? (intinya saja)

Di pelajaran #4 kita sudah tahu pola dasar ML: model menebak, lalu kesalahannya diukur. Neural network memakai cara yang sama, dengan dua langkah yang berulang ribuan kali:

1. **Forward pass** — data mengalir maju dari input layer ke output layer, menghasilkan tebakan.
2. **Backpropagation (propagasi balik)** — kesalahan tebakan dihitung (dengan **loss function / fungsi kerugian**, misalnya cross-entropy), lalu kesalahan itu "dikirim balik" ke setiap neuron untuk menyesuaikan bobotnya sedikit demi sedikit. Bobot yang menyebabkan kesalahan besar diubah lebih banyak.

Proses penyesuaian bobot ini dilakukan oleh **optimizer** — yang paling terkenal adalah **SGD** (Stochastic Gradient Descent — penurunan gradien stokastik) dan **Adam**. Kamu tidak perlu menghafal matematikanya sekarang; cukup pahami intinya: **belajar = mengulang forward pass dan backpropagation sampai tebakannya makin benar**.

## PyTorch: alatnya para AI Engineer

**PyTorch** adalah library Python buatan Meta untuk membangun neural network. Tiga konsep intinya:

- **Tensor** — seperti array NumPy, tapi bisa berjalan di GPU (kartu grafis) supaya perhitungannya jauh lebih cepat. Semua data di PyTorch adalah tensor.
- **nn.Module** — cara mendefinisikan model: kamu menyusun layer-layer seperti menyusun balok Lego.
- **Autograd** — PyTorch menghitung backpropagation secara otomatis. Kamu cukup menulis forward pass; turunannya diurus sendiri.

Instalasi (sekali saja, di terminal):

\`\`\`bash
pip install torch
\`\`\`

## Contoh kode: neural network pertama

Kita latih neural network kecil pada data iris yang sama seperti pelajaran #5 dan #6 — supaya kamu bisa membandingkan hasilnya dengan Random Forest kemarin:

\`\`\`python
import torch
import torch.nn as nn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# 1. Ambil data & ubah jadi tensor
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
X_train_t = torch.tensor(X_train, dtype=torch.float32)
y_train_t = torch.tensor(y_train, dtype=torch.long)
X_test_t = torch.tensor(X_test, dtype=torch.float32)

# 2. Definisikan model: 4 input -> 16 neuron tersembunyi -> 3 output
model = nn.Sequential(
    nn.Linear(4, 16),   # lapisan 1: 4 ciri bunga -> 16 neuron
    nn.ReLU(),          # fungsi aktivasi ReLU
    nn.Linear(16, 3),   # lapisan 2: 16 neuron -> 3 jenis bunga
)

# 3. Loss function & optimizer
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

# 4. Latih: 200 putaran (epoch)
for epoch in range(200):
    model.train()
    prediksi = model(X_train_t)
    loss = loss_fn(prediksi, y_train_t)
    optimizer.zero_grad()   # bersihkan gradien putaran sebelumnya
    loss.backward()         # backpropagation otomatis
    optimizer.step()        # perbarui bobot

# 5. Uji
model.eval()
with torch.no_grad():
    prediksi_uji = model(X_test_t).argmax(dim=1)
print(classification_report(y_test, prediksi_uji.numpy()))
\`\`\`

Perhatikan baris-baris kuncinya: \`nn.Linear(4, 16)\` membuat satu lapisan penuh dari 4 masukan ke 16 neuron. \`loss.backward()\` adalah backpropagation — satu baris itu menggantikan seluruh perhitungan turunan manual. Dan \`optimizer.step()\` memperbarui semua bobot sekaligus. Putaran latihannya disebut **epoch** — satu kali seluruh data latih dilewatkan ke model.

## Latihan hari ini

Jalankan kode di atas (pastikan \`pip install torch scikit-learn\` sudah dijalankan), lalu:

1. Bandingkan \`classification_report\` neural network ini dengan laporan Random Forest di pelajaran #6 — mana yang akurasinya lebih tinggi pada data iris? (Jangan kaget kalau hasilnya mirip: data iris itu mudah, dan model klasik sudah sangat bagus di sana.)
2. Ubah jumlah neuron hidden layer dari 16 menjadi 8, lalu latih ulang. Apakah akurasinya berubah? Coba juga ubah \`lr=0.01\` menjadi \`lr=0.1\` — apa yang terjadi pada loss-nya? (Petunjuk: learning rate yang terlalu besar membuat bobot "melompat" melewati jawaban terbaik.)

## Kamus

| Istilah | Arti |
|---------|------|
| neural network (jaringan saraf tiruan) | model ML yang tersusun dari lapisan-lapisan neuron tiruan |
| deep learning (pembelajaran mendalam) | neural network dengan banyak hidden layer |
| neuron | unit terkecil jaringan saraf: menerima masukan, mengalikan dengan bobot, lalu memutuskan output |
| weight / bobot (w) | angka yang menyatakan seberapa penting sebuah masukan bagi neuron |
| bias | kecenderungan dasar neuron sebelum melihat data |
| activation function (fungsi aktivasi) | aturan yang mengubah jumlah terbobot menjadi output neuron |
| ReLU | fungsi aktivasi: nilai negatif jadi 0, nilai positif dibiarkan |
| layer (lapisan) | sekelompok neuron pada tingkat yang sama |
| input layer (lapisan masukan) | lapisan pertama yang menerima data mentah |
| hidden layer (lapisan tersembunyi) | lapisan tengah yang belajar pola dari data |
| output layer (lapisan keluaran) | lapisan terakhir yang menghasilkan jawaban |
| forward pass | data mengalir maju dari input ke output menghasilkan tebakan |
| backpropagation (propagasi balik) | mengirim kesalahan balik ke neuron-neuron untuk menyesuaikan bobot |
| loss function (fungsi kerugian) | ukuran seberapa salah tebakan model |
| optimizer | algoritma yang memperbarui bobot berdasarkan kesalahan |
| SGD | optimizer klasik: Stochastic Gradient Descent |
| Adam | optimizer populer yang menyesuaikan kecepatan belajar tiap bobot |
| learning rate (lr) | seberapa besar langkah perubahan bobot di setiap putaran |
| epoch | satu kali seluruh data latih dilewatkan ke model |
| PyTorch | library Python untuk membangun dan melatih neural network |
| tensor | struktur data utama PyTorch, mirip array NumPy tapi bisa jalan di GPU |
| nn.Module | cara PyTorch mendefinisikan model dari lapisan-lapisan |
| autograd | fitur PyTorch yang menghitung turunan (backpropagation) otomatis |
| GPU | kartu grafis yang mempercepat perhitungan tensor dalam jumlah besar |
`,Mu=`---
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
`,Ku=`---
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
`,Lu=`---
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
`,zu=`---
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
`,Bu=`---
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
`,Hu=`---
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
`,Fu=`---
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
`,Ou=`---
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
`,$u=`---
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
`,Gu=`---
lang: cyber
number: 10
date: 2026-11-13
title: Backup dan pemulihan
subtitle: Kalau datamu hilang besok, bisakah kamu mengembalikannya hari ini juga?
keywords: backup cadangan pemulihan restore 3-2-1 ransomware kehilangan data
---

Selamat pagi! Kemarin kita belajar mengendalikan jejak digital. Hari ini kita bahas kebiasaan yang membedakan orang yang panik saat data hilang dengan orang yang tenang-tenang saja: **backup** (cadangan) — menyimpan salinan datamu di tempat lain, supaya bisa dipulihkan saat yang asli hilang atau rusak.

Bayangkan begini: HP-mu jatuh ke got, laptopmu dicuri, atau ransomware (program jahat yang mengunci file dan meminta tebusan — dari pelajaran #6) mengenkripsi semua fotomu. Tanpa backup, semua itu hilang selamanya. Dengan backup, itu cuma jadi cerita lucu yang kamu ceritakan sambil tertawa.

## Kenapa backup itu penting?

Data bisa hilang karena banyak hal, dan hampir semuanya di luar kendalimu:

- **Perangkat rusak atau hilang.** HP jatuh, laptop kena air, hard disk tiba-tiba mati. Perangkat bisa diganti, datanya belum tentu.
- **Kesalahan sendiri.** File terhapus tanpa sengaja, atau tertimpa versi lama. Ini penyebab kehilangan data yang paling umum — dan paling memalukan.
- **Serangan siber.** Ransomware mengunci filemu dan meminta uang tebusan. Kalau kamu punya backup, kamu tidak perlu membayar apa pun: hapus saja yang terkunci, pulihkan dari cadangan.
- **Akun bermasalah.** Akun cloud terkunci, lupa password dan tidak bisa reset, atau layanan yang kamu pakai tiba-tiba tutup.

Ingat pelajaran CIA triad (#2): keamanan bukan cuma soal kerahasiaan (confidentiality) dan keutuhan (integrity), tapi juga ketersediaan (availability) — data harus tetap bisa diakses saat dibutuhkan. Backup adalah cara paling praktis menjaga ketersediaan itu.

## Aturan 3-2-1 — patokan emasnya backup

Aturan ini sederhana dan dipakai para profesional di seluruh dunia:

- **3 salinan** datamu: satu yang asli, dua cadangan.
- **2 media berbeda:** misalnya satu di laptop, satu di hard disk eksternal (external hard drive) atau di cloud (layanan penyimpanan internet).
- **1 salinan di tempat berbeda (offsite):** jauh dari rumahmu, supaya kalau rumah kebanjiran atau laptop dicuri, salinan itu tetap aman. Cloud otomatis memenuhi syarat ini.

Contoh nyata: foto keluarga ada di HP (salinan 1), otomatis tersimpan di Google Photos atau iCloud (salinan 2, media berbeda, offsite), dan sebulan sekali kamu salin ke hard disk eksternal yang disimpan di laci (salinan 3, media berbeda). Kalau HP hilang, fotomu tetap ada di dua tempat lain.

## Jenis backup: mana yang cocok untukmu?

Tidak semua backup sama. Tiga cara yang paling umum:

**1. Backup otomatis ke cloud.** Google Drive, iCloud, OneDrive — aplikasi ini menyinkronkan filemu secara otomatis begitu ada internet. Paling mudah, paling cocok untuk pemula. Kekurangannya: butuh langganan berbayar kalau datamu besar, dan kamu mempercayakan datamu ke perusahaan lain (ingat pelajaran privasi #9: aktifkan autentikasi dua faktor di akun cloud-mu).

**2. Hard disk eksternal atau flashdisk.** Kamu colokkan, salin file penting, lalu simpan di tempat aman. Murah dan tidak butuh internet. Kekurangannya: harus dilakukan manual (mudah lupa), dan kalau disimpan di rumah yang sama, tidak memenuhi syarat offsite.

**3. Backup sistem penuh (full system backup).** Salinan seluruh isi perangkat — sistem, aplikasi, dan semua file — sehingga kalau laptop rusak total, kamu bisa memulihkan semuanya sekaligus. Di Windows namanya File History / System Image, di Mac namanya Time Machine. Ini yang paling lengkap, tapi butuh hard disk berkapasitas besar.

Untuk kebanyakan orang, kombinasi nomor 1 dan 2 sudah sangat cukup.

## Yang paling sering dilupakan: uji pemulihanmu

Backup yang tidak pernah diuji sama saja dengan tidak punya backup. Ada orang yang bertahun-tahun "membackup" ke hard disk eksternal, baru sadar hard disknya rusak saat ia benar-benar butuh memulihkan data. Karena itu:

1. **Coba pulihkan satu file** dari backup-mu, sekarang juga. Kalau berhasil, backup-mu nyata.
2. **Jadwalkan backup otomatis** kalau bisa — mingguan untuk file kerja, bulanan untuk arsip. Backup yang mengandalkan ingatan hampir pasti gagal di saat penting.
3. **Periksa secara berkala** — sebulan sekali, lihat apakah backup terakhir benar-benar berjalan dan file terbarunya ada.

## Latihan praktis (20 menit, bisa langsung dilakukan)

1. Buat daftar 10 file atau folder terpentingmu: foto keluarga, dokumen kerja, kontak, catatan, dan apa pun yang kalau hilang akan membuatmu pusing. Inilah yang wajib di-backup duluan.
2. Nyalakan backup otomatis di HP-mu: Android (Google One / Google Photos) atau iPhone (iCloud). Pastikan autentikasi dua faktor aktif di akunnya.
3. Kalau punya hard disk eksternal atau flashdisk, salin 10 file terpenting tadi ke sana sekarang. Lalu coba buka satu file dari salinan itu — kalau terbuka dengan baik, backup pertamamu sudah sah.

## Kamus

| Istilah | Arti |
|---------|------|
| backup (cadangan) | salinan data yang disimpan di tempat lain untuk dipulihkan saat data asli hilang |
| restore / pemulihan | mengembalikan data dari backup ke perangkat |
| aturan 3-2-1 | patokan backup: 3 salinan, di 2 media berbeda, 1 di tempat berbeda |
| offsite | di tempat yang berbeda / jauh dari lokasi aslinya |
| cloud (awan) | layanan penyimpanan data di internet, misalnya Google Drive dan iCloud |
| external hard drive (hard disk eksternal) | perangkat penyimpanan tambahan yang dicolokkan ke komputer |
| ransomware | program jahat yang mengunci file dan meminta uang tebusan |
| enkripsi (encryption) | mengubah data menjadi kode rahasia supaya tidak bisa dibaca tanpa kunci |
| sinkronisasi (sync) | menyamakan file di dua tempat secara otomatis |
| File History | fitur backup otomatis di Windows |
| Time Machine | fitur backup otomatis di Mac |
| autentikasi dua faktor (two-factor authentication) | lapisan keamanan tambahan selain password, misalnya kode dari HP |
| availability (ketersediaan) | salah satu dari CIA triad: data harus tetap bisa diakses saat dibutuhkan |
`,Ju=`---
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
`,Wu=`---
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
`,Uu=`---
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
`,qu=`---
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
`,Zu=`---
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
`,Vu=`---
lang: en
number: 6
date: 2026-11-13
title: Kalimat Sederhana Present Tense
subtitle: Simple Present Tense — I work, She works, They play
keywords: present tense simple present kata kerja verb kalimat sederhana rutinitas do does
---

Kemarin kita mengisi "kotak kata" dengan kosakata keluarga, pekerjaan, dan makanan. Hari ini kita belajar cara membuat kalimat yang bercerita tentang kegiatan sehari-hari: **Simple Present Tense** (waktu sekarang sederhana) — bentuk kalimat yang dipakai untuk kebiasaan, rutinitas, dan fakta yang selalu benar.

Kalau pelajaran #4 kemarin (to be) menjawab "siapa dia?" (I am a teacher), pelajaran hari ini menjawab "apa yang dia lakukan?" (I teach — Saya mengajar).

## 1. Pola dasar: Subject + Verb

Rumusnya sederhana:

> **Subject (pelaku) + Verb 1 (kata kerja bentuk dasar)**

Contoh dengan kosakata dari pelajaran #5:

- I **eat** rice. — Saya makan nasi.
- You **drink** tea. — Kamu minum teh.
- We **like** coffee. — Kami suka kopi.
- They **work** in Jakarta. — Mereka bekerja di Jakarta.
- My father **drives** a car. — Ayahku mengendarai mobil. (drive = mengendarai)
- My mother **cooks** rice. — Ibuku memasak nasi. (cook = memasak)

Perhatikan kata kerjanya: eat (makan), drink (minum), like (suka), work (bekerja), drive (mengendarai), cook (memasak). Semua dalam bentuk dasar — **Verb 1**.

## 2. Aturan -s / -es untuk he, she, it

Satu aturan penting: kalau pelakunya **he** (dia laki-laki), **she** (dia perempuan), atau **it** (dia benda), kata kerjanya ditambah **-s** atau **-es**:

| Subject | Verb | Contoh | Arti |
|---------|------|--------|------|
| I / you / we / they | bentuk dasar | I eat | Saya makan |
| he / she / it | bentuk dasar + -s/-es | She eats | Dia (perempuan) makan |

Contoh:

- He **works** every day. — Dia bekerja setiap hari. (work → works)
- She **teaches** English. — Dia mengajar bahasa Inggris. (teach = mengajar → teaches)
- It **rains** in November. — Di bulan November sering hujan. (rain = hujan, sebagai kata kerja)
- My brother **plays** football. — Saudara laki-lakiku bermain sepak bola. (play = bermain)

Kapan pakai **-es** dan bukan **-s**? Tambah **-es** kalau kata kerjanya berakhiran **-s, -x, -ch, -sh, atau -o**: teach → teaches, watch (menonton) → watches, go (pergi) → goes, wash (mencuci) → washes. Selebihnya cukup **-s**: work → works, eat → eats, play → plays.

Dan satu pengecualian: kata kerja yang berakhiran **huruf mati + y** berubah y menjadi **-ies**: study (belajar) → studies, fly (terbang) → flies. Tapi kalau sebelum y ada huruf vokal, tinggal tambah -s: play → plays, enjoy (menikmati) → enjoys.

## 3. Kalimat negatif: don't / doesn't

Untuk mengatakan "tidak", tambahkan **don't** (do not) atau **doesn't** (does not) sebelum kata kerja — dan kata kerjanya kembali ke bentuk dasar:

- I **don't** like coffee. — Saya tidak suka kopi.
- They **don't** work on Sunday. — Mereka tidak bekerja pada hari Minggu.
- She **doesn't** eat meat. — Dia (perempuan) tidak makan daging.
- He **doesn't** drink milk. — Dia (laki-laki) tidak minum susu.

Perhatikan: setelah doesn't, kata kerjanya **tanpa -s** lagi: "She doesn't eat", bukan "She doesn't eats". Huruf -s-nya sudah "pindah" ke doesn't.

## 4. Kalimat tanya: Do / Does

Untuk bertanya, letakkan **Do** atau **Does** di depan kalimat:

- **Do** you like tea? — Apakah kamu suka teh?
- **Do** they work here? — Apakah mereka bekerja di sini?
- **Does** she eat rice? — Apakah dia (perempuan) makan nasi?
- **Does** he drive a car? — Apakah dia (laki-laki) mengendarai mobil?

Jawabannya pendek:

- Yes, I do. / No, I don't. — Ya. / Tidak.
- Yes, she does. / No, she doesn't. — Ya, dia makan. / Tidak, dia tidak makan.

## 5. Rutinitas: kata keterangan waktu

Simple Present Tense paling sering dipakai bersama kata keterangan waktu (adverb of frequency — kata yang menunjukkan seberapa sering sesuatu terjadi):

- **always** (selalu) — I always eat rice in the morning. (Saya selalu makan nasi di pagi hari.)
- **usually** (biasanya) — She usually drinks tea. (Dia biasanya minum teh.)
- **often** (sering) — They often play football. (Mereka sering bermain sepak bola.)
- **sometimes** (kadang-kadang) — We sometimes eat bread. (Kami kadang-kadang makan roti.)
- **never** (tidak pernah) — He never drinks coffee. (Dia tidak pernah minum kopi.)

Kata-kata ini biasanya diletakkan **sebelum kata kerja utama**: "I always eat", bukan "I eat always". (Pengecualian: bersama to be dari pelajaran #4, letaknya sesudah: "I am always happy" — Saya selalu bahagia.)

Contoh rutinitas lengkap:

> I wake up at five o'clock. I eat rice and egg. I go to work at seven. My father drives a car. My mother cooks rice. In the evening, we watch TV together.

Artinya: Saya bangun jam lima. Saya makan nasi dan telur. Saya pergi bekerja jam tujuh. Ayahku mengendarai mobil. Ibuku memasak nasi. Di malam hari, kami menonton TV bersama.

## Contoh kalimat

- I eat rice every day. — Saya makan nasi setiap hari.
- She teaches English. — Dia mengajar bahasa Inggris.
- They play football on Sunday. — Mereka bermain sepak bola pada hari Minggu.
- He doesn't drink coffee. — Dia tidak minum kopi.
- Do you like tea? — Apakah kamu suka teh?
- Yes, I do. — Ya.
- No, she doesn't. — Tidak, dia tidak.
- I always wake up at five o'clock. — Saya selalu bangun jam lima.

## Latihan hari ini (5 menit)

Tulis atau ucapkan 5 kalimat tentang rutinitasmu, pakai pola hari ini:

1. Satu kalimat tentang dirimu: "I ___ every day."
2. Satu kalimat tentang ayah atau ibumu (pakai he/she + -s): "My father ___."
3. Satu kalimat negatif: "I don't ___."
4. Satu pertanyaan: "Do you ___?"
5. Satu kalimat dengan always / usually / sometimes / never.

**Contoh jawaban:** 1. I eat rice every day. 2. My father drives a car. 3. I don't drink coffee. 4. Do you like tea? 5. I always wake up at five o'clock.

## Kamus

| English | Cara baca | Arti |
|---------|-----------|------|
| Simple Present Tense | sim-pel pre-zent tens | waktu sekarang sederhana — untuk kebiasaan & fakta |
| eat | it | makan |
| drink | dringk | minum |
| like | laik | suka |
| work | werk | bekerja |
| drive | draiv | mengendarai |
| cook | kuk | memasak |
| teach | tic | mengajar |
| play | plei | bermain |
| watch | woc | menonton |
| wash | wosy | mencuci |
| go | gou | pergi |
| study | sta-di | belajar |
| wake up | weik ap | bangun (dari tidur) |
| rain | rein | hujan (kata kerja: menghujani) |
| every day | ev-ri dei | setiap hari |
| every morning | ev-ri mor-ning | setiap pagi |
| don't | dount | tidak (untuk I/you/we/they) |
| doesn't | da-zent | tidak (untuk he/she/it) |
| do | du | kata bantu untuk bertanya / negatif |
| does | daz | kata bantu untuk bertanya / negatif (he/she/it) |
| always | ol-weiz | selalu |
| usually | yu-zhu-a-li | biasanya |
| often | of-ten | sering |
| sometimes | sam-taimz | kadang-kadang |
| never | ne-ver | tidak pernah |
| in the morning | in de mor-ning | di pagi hari |
| in the evening | in di iv-ning | di malam hari |
| together | tu-ge-dher | bersama |
| football | fut-bol | sepak bola |
| I eat rice. | ai it rais | Saya makan nasi. |
| She eats rice. | syi its rais | Dia (perempuan) makan nasi. |
| Do you like tea? | du yu laik ti | Apakah kamu suka teh? |
| Yes, I do. | yes, ai du | Ya. |
| No, she doesn't. | nou, syi da-zent | Tidak, dia tidak. |
`,Yu=`---
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
`,Xu=`---
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
`,Qu=`---
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
`,al=`---
lang: fr
number: 4
date: 2026-11-13
title: Kata Ganti & Être / Avoir
subtitle: Je, tu, il, elle… dan dua kata kerja paling penting dalam bahasa Prancis
keywords: kata ganti pronoms être avoir je suis j'ai konjugasi verba
---

Bonjour! Di pelajaran #2 kamu belajar menyapa, dan di pelajaran #3 kamu belajar angka, hari, dan jam. Tapi kalimat-kalimat itu masih menempel pada pola yang itu-itu saja. Hari ini kita belajar fondasi yang membuatmu bisa membuat kalimat sendiri: **kata ganti** (pronoms — kata ganti) dan dua kata kerja yang paling sering dipakai dalam bahasa Prancis, **être** (menjadi / adalah) dan **avoir** (memiliki / mempunyai).

## 1. Kata ganti orang (les pronoms personnels)

Kata ganti menggantikan nama orang, supaya kita tidak mengulang nama terus-menerus. Ada delapan:

| Prancis | Cara baca | Arti |
|---------|-----------|------|
| je | ZHUH | saya |
| tu | TU | kamu (akrab) |
| il | IL | dia (laki-laki) |
| elle | EL | dia (perempuan) |
| nous | NU | kami / kita |
| vous | VU | kalian / Anda (sopan) |
| ils | IL | mereka (laki-laki / campuran) |
| elles | EL | mereka (perempuan saja) |

Dua hal penting dari pelajaran #2 yang kembali di sini:

- **Tu atau vous?** Pakai tu (kamu) untuk teman, keluarga, dan anak-anak. Pakai vous (Anda) untuk orang yang lebih tua, orang baru dikenal, atau situasi resmi. Ini sama seperti memilih "kamu" atau "Anda" dalam bahasa Indonesia.
- **Il / elle dan ils / elles.** Bahasa Prancis membedakan laki-laki dan perempuan: il (dia laki-laki) dan elle (dia perempuan). Untuk "mereka", ils dipakai kalau kelompoknya laki-laki saja atau campuran, elles hanya kalau semuanya perempuan.

Perhatikan juga: **je** berubah menjadi **j'** kalau kata berikutnya diawali huruf vokal (a, e, i, o, u) atau h bisu — contohnya j'ai (saya punya), bukan "je ai". Ini namanya élision (penghilangan bunyi, dari pelajaran #1).

## 2. Être — "menjadi / adalah"

Kata kerja être (dibaca "ETR", artinya "menjadi" atau "adalah") dipakai untuk menyatakan siapa seseorang, dari mana asalnya, dan bagaimana keadaannya. Bentuknya berubah-ubah sesuai kata ganti — ini namanya konjugasi (perubahan bentuk kata kerja):

| Kata ganti | Être | Cara baca | Arti |
|------------|------|-----------|------|
| je | suis | SUI | saya adalah |
| tu | es | E | kamu adalah |
| il / elle | est | E | dia adalah |
| nous | sommes | SOM | kami adalah |
| vous | êtes | ET | kalian / Anda adalah |
| ils / elles | sont | SONG | mereka adalah |

Contoh kalimat (pakai kosakata dari pelajaran #2 dan #3):

- Je suis Andi. = "zhuh SUI ong-DI" — Saya adalah Andi.
- Tu es étudiant. = "tu E e-tu-DYONG" — Kamu adalah seorang pelajar. (étudiant = pelajar)
- Il est français. = "il E frong-SE" — Dia (laki-laki) orang Prancis. (français = orang Prancis)
- Elle est contente. = "el E kong-TONGT" — Dia (perempuan) senang. (content(e) = senang)
- Nous sommes amis. = "nu SOM a-MI" — Kami berteman. (amis = teman-teman)
- Vous êtes professeur ? = "vu ZET pro-fe-SÖR?" — Apakah Anda seorang guru? (professeur = guru)
- Ils sont à Jakarta. = "il SONG a zha-KAR-ta" — Mereka ada di Jakarta.

Perhatikan: **vous êtes** dibaca "vu ZET" — ada liaison (penyambungan bunyi), huruf s di vous berbunyi z karena bertemu vokal.

## 3. Avoir — "memiliki / mempunyai"

Kata kerja avoir (dibaca "a-VWAR", artinya "memiliki" atau "mempunyai") dipakai untuk menyatakan kepemilikan, umur, dan banyak ungkapan sehari-hari. Konjugasinya:

| Kata ganti | Avoir | Cara baca | Arti |
|------------|-------|-----------|------|
| je | ai | E | saya punya |
| tu | as | A | kamu punya |
| il / elle | a | A | dia punya |
| nous | avons | a-VONG | kami punya |
| vous | avez | a-VE | kalian / Anda punya |
| ils / elles | ont | ONG | mereka punya |

Contoh kalimat:

- J'ai un frère. = "zhe ENG FRER" — Saya punya seorang saudara laki-laki. (frère = saudara laki-laki)
- Tu as une sœur ? = "tu A un SÖR?" — Apakah kamu punya saudara perempuan? (sœur = saudara perempuan)
- Il a une voiture. = "il A un vwa-TUR" — Dia punya sebuah mobil. (voiture = mobil)
- Nous avons deux enfants. = "nu za-VONG DÖ zong-FONG" — Kami punya dua anak. (enfants = anak-anak)
- Vous avez l'heure ? = "vu za-VE LÖR?" — Apakah Anda tahu jam berapa? (secara harfiah: apakah Anda punya jamnya?)
- Elles ont un chat. = "el ZONGT ENG SHA" — Mereka (perempuan) punya seekor kucing. (chat = kucing)

**Perhatian khusus: umur pakai avoir, bukan être!** Dalam bahasa Prancis, umur dinyatakan dengan "punya", bukan "adalah":

- J'ai vingt ans. = "zhe VENG-TONG" — Saya berumur dua puluh tahun. (ans = tahun)
- Il a trente ans. = "il A TRONG-TONG" — Dia berumur tiga puluh tahun.

Kalau kamu bilang "je suis vingt ans", orang Prancis akan bingung — itu seperti bilang "saya adalah dua puluh tahun". Ingat: **umur = avoir + angka + ans**.

## 4. Être atau avoir? Cara cepat memilih

- Pakai **être** untuk: siapa dia (Je suis Andi), pekerjaan (Il est professeur), asal (Elle est indonésienne — dia orang Indonesia), keadaan (Je suis fatigué — saya lelah, fatigué = lelah).
- Pakai **avoir** untuk: kepemilikan (J'ai un chat), umur (J'ai vingt ans), dan perasaan yang dalam bahasa Prancis "dipunya", misalnya J'ai faim (saya lapar — faim = lapar) dan J'ai soif (saya haus — soif = haus).

Dua contoh terakhir itu penting: dalam bahasa Indonesia kita bilang "saya lapar", tapi orang Prancis bilang "saya punya rasa lapar" (J'ai faim). Pola ini akan sering muncul, jadi biasakan dari sekarang.

## Contoh kalimat

- Je suis étudiant. — Saya adalah seorang pelajar.
- Tu es contente ? — Apakah kamu (perempuan) senang?
- Il est à Jakarta. — Dia (laki-laki) ada di Jakarta.
- Nous sommes amis. — Kami berteman.
- Vous êtes professeur ? — Apakah Anda seorang guru?
- J'ai un frère et une sœur. — Saya punya seorang saudara laki-laki dan seorang saudara perempuan.
- Elle a vingt ans. — Dia (perempuan) berumur dua puluh tahun.
- Nous avons deux enfants. — Kami punya dua anak.
- J'ai faim. — Saya lapar.
- Tu as l'heure ? — Apakah kamu tahu jam berapa?

## Latihan hari ini (5 menit)

Ucapkan dengan suara keras, lalu tulis:

1. Perkenalkan dirimu dengan être: "Je suis …" (isi dengan namamu).
2. Sebutkan umurmu dengan avoir: "J'ai … ans."
3. Sebutkan satu hal yang kamu punya: "J'ai un/une …" (contoh: J'ai un chat, J'ai une voiture).
4. Ucapkan "Saya lapar" dalam bahasa Prancis.
5. Ucapkan "Kami berteman" dalam bahasa Prancis.

**Contoh jawaban:** 1. Je suis Andi. 2. J'ai vingt ans. 3. J'ai un frère. 4. J'ai faim. 5. Nous sommes amis.

## Kamus

| Kata | Cara baca | Arti |
|------|-----------|------|
| je | ZHUH | saya |
| tu | TU | kamu (akrab) |
| il | IL | dia (laki-laki) |
| elle | EL | dia (perempuan) |
| nous | NU | kami / kita |
| vous | VU | kalian / Anda (sopan) |
| ils | IL | mereka (laki-laki / campuran) |
| elles | EL | mereka (perempuan saja) |
| être | ETR | menjadi / adalah |
| avoir | a-VWAR | memiliki / mempunyai |
| je suis | zhuh SUI | saya adalah |
| tu es | tu E | kamu adalah |
| il / elle est | il / el E | dia adalah |
| nous sommes | nu SOM | kami adalah |
| vous êtes | vu ZET | kalian / Anda adalah |
| ils / elles sont | il / el SONG | mereka adalah |
| j'ai | ZHE | saya punya |
| tu as | tu A | kamu punya |
| il / elle a | il / el A | dia punya |
| nous avons | nu za-VONG | kami punya |
| vous avez | vu za-VE | kalian / Anda punya |
| ils / elles ont | il / el ZONG | mereka punya |
| pronom | pro-NONG | kata ganti |
| conjugaison | kong-zhu-ge-ZYONG | konjugasi (perubahan bentuk kata kerja) |
| élision | e-li-ZYONG | penghilangan bunyi (je → j' sebelum vokal) |
| étudiant(e) | e-tu-DYONG(T) | pelajar / mahasiswa |
| français(e) | frong-SE(Z) | orang Prancis / bahasa Prancis |
| content(e) | kong-TONG(T) | senang |
| ami(e) | a-MI | teman |
| professeur | pro-fe-SÖR | guru / dosen |
| frère | FRER | saudara laki-laki |
| sœur | SÖR | saudara perempuan |
| voiture | vwa-TUR | mobil |
| enfant | ong-FONG | anak |
| chat | SHA | kucing |
| ans | ONG | tahun (jamak) |
| faim | FENG | lapar |
| soif | SWAF | haus |
| fatigué(e) | fa-ti-GE | lelah |
| indonésien(ne) | eng-do-ne-ZYENG(ZYEN) | orang Indonesia |
| Je suis … | zhuh SUI | Saya adalah … |
| J'ai vingt ans. | zhe VENG-TONG | Saya berumur dua puluh tahun. |
| J'ai faim. | zhe FENG | Saya lapar. |
| Nous sommes amis. | nu SOM a-MI | Kami berteman. |
`;function et(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Mn=et();function Er(n){Mn=n}var we={exec:()=>null};function N(n,a=""){let e=typeof n=="string"?n:n.source;const i={replace:(t,r)=>{let u=typeof r=="string"?r:r.source;return u=u.replace(ia.caret,"$1"),e=e.replace(t,u),i},getRegex:()=>new RegExp(e,a)};return i}var ia={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},nl=/^(?:[ \t]*(?:\n|$))+/,el=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,il=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ce=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,tl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,it=/(?:[*+-]|\d{1,9}[.)])/,Nr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Rr=N(Nr).replace(/bull/g,it).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),rl=N(Nr).replace(/bull/g,it).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),tt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,sl=/^[^\n]+/,rt=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ul=N(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",rt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ll=N(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,it).getRegex(),ui="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",st=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ol=N("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",st).replace("tag",ui).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Dr=N(tt).replace("hr",Ce).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ui).getRegex(),dl=N(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Dr).getRegex(),ut={blockquote:dl,code:el,def:ul,fences:il,heading:tl,hr:Ce,html:ol,lheading:Rr,list:ll,newline:nl,paragraph:Dr,table:we,text:sl},At=N("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ce).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ui).getRegex(),kl={...ut,lheading:rl,table:At,paragraph:N(tt).replace("hr",Ce).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",At).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ui).getRegex()},ml={...ut,html:N(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",st).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:we,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:N(tt).replace("hr",Ce).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Rr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},pl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,hl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Cr=/^( {2,}|\\)\n(?!\s*$)/,gl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,li=/[\p{P}\p{S}]/u,lt=/[\s\p{P}\p{S}]/u,Mr=/[^\s\p{P}\p{S}]/u,cl=N(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,lt).getRegex(),Kr=/(?!~)[\p{P}\p{S}]/u,bl=/(?!~)[\s\p{P}\p{S}]/u,fl=/(?:[^\s\p{P}\p{S}]|~)/u,yl=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Lr=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,vl=N(Lr,"u").replace(/punct/g,li).getRegex(),wl=N(Lr,"u").replace(/punct/g,Kr).getRegex(),zr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_l=N(zr,"gu").replace(/notPunctSpace/g,Mr).replace(/punctSpace/g,lt).replace(/punct/g,li).getRegex(),jl=N(zr,"gu").replace(/notPunctSpace/g,fl).replace(/punctSpace/g,bl).replace(/punct/g,Kr).getRegex(),Sl=N("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Mr).replace(/punctSpace/g,lt).replace(/punct/g,li).getRegex(),Il=N(/\\(punct)/,"gu").replace(/punct/g,li).getRegex(),Al=N(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),xl=N(st).replace("(?:-->|$)","-->").getRegex(),Tl=N("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",xl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Xe=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Pl=N(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Xe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Br=N(/^!?\[(label)\]\[(ref)\]/).replace("label",Xe).replace("ref",rt).getRegex(),Hr=N(/^!?\[(ref)\](?:\[\])?/).replace("ref",rt).getRegex(),El=N("reflink|nolink(?!\\()","g").replace("reflink",Br).replace("nolink",Hr).getRegex(),ot={_backpedal:we,anyPunctuation:Il,autolink:Al,blockSkip:yl,br:Cr,code:hl,del:we,emStrongLDelim:vl,emStrongRDelimAst:_l,emStrongRDelimUnd:Sl,escape:pl,link:Pl,nolink:Hr,punctuation:cl,reflink:Br,reflinkSearch:El,tag:Tl,text:gl,url:we},Nl={...ot,link:N(/^!?\[(label)\]\((.*?)\)/).replace("label",Xe).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xe).getRegex()},Bi={...ot,emStrongRDelimAst:jl,emStrongLDelim:wl,url:N(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Rl={...Bi,br:N(Cr).replace("{2,}","*").getRegex(),text:N(Bi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},He={normal:ut,gfm:kl,pedantic:ml},oe={normal:ot,gfm:Bi,breaks:Rl,pedantic:Nl},Dl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xt=n=>Dl[n];function Ca(n,a){if(a){if(ia.escapeTest.test(n))return n.replace(ia.escapeReplace,xt)}else if(ia.escapeTestNoEncode.test(n))return n.replace(ia.escapeReplaceNoEncode,xt);return n}function Tt(n){try{n=encodeURI(n).replace(ia.percentDecode,"%")}catch{return null}return n}function Pt(n,a){var r;const e=n.replace(ia.findPipe,(u,s,o)=>{let l=!1,d=s;for(;--d>=0&&o[d]==="\\";)l=!l;return l?"|":" |"}),i=e.split(ia.splitPipe);let t=0;if(i[0].trim()||i.shift(),i.length>0&&!((r=i.at(-1))!=null&&r.trim())&&i.pop(),a)if(i.length>a)i.splice(a);else for(;i.length<a;)i.push("");for(;t<i.length;t++)i[t]=i[t].trim().replace(ia.slashPipe,"|");return i}function de(n,a,e){const i=n.length;if(i===0)return"";let t=0;for(;t<i&&n.charAt(i-t-1)===a;)t++;return n.slice(0,i-t)}function Cl(n,a){if(n.indexOf(a[1])===-1)return-1;let e=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===a[0])e++;else if(n[i]===a[1]&&(e--,e<0))return i;return e>0?-2:-1}function Et(n,a,e,i,t){const r=a.href,u=a.title||null,s=n[1].replace(t.other.outputLinkReplace,"$1");i.state.inLink=!0;const o={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:r,title:u,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,o}function Ml(n,a,e){const i=n.match(e.other.indentCodeCompensation);if(i===null)return a;const t=i[1];return a.split(`
`).map(r=>{const u=r.match(e.other.beginningSpace);if(u===null)return r;const[s]=u;return s.length>=t.length?r.slice(t.length):r}).join(`
`)}var Qe=class{constructor(n){_(this,"options");_(this,"rules");_(this,"lexer");this.options=n||Mn}space(n){const a=this.rules.block.newline.exec(n);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(n){const a=this.rules.block.code.exec(n);if(a){const e=a[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?e:de(e,`
`)}}}fences(n){const a=this.rules.block.fences.exec(n);if(a){const e=a[0],i=Ml(e,a[3]||"",this.rules);return{type:"code",raw:e,lang:a[2]?a[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):a[2],text:i}}}heading(n){const a=this.rules.block.heading.exec(n);if(a){let e=a[2].trim();if(this.rules.other.endingHash.test(e)){const i=de(e,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(e=i.trim())}return{type:"heading",raw:a[0],depth:a[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const a=this.rules.block.hr.exec(n);if(a)return{type:"hr",raw:de(a[0],`
`)}}blockquote(n){const a=this.rules.block.blockquote.exec(n);if(a){let e=de(a[0],`
`).split(`
`),i="",t="";const r=[];for(;e.length>0;){let u=!1;const s=[];let o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))s.push(e[o]),u=!0;else if(!u)s.push(e[o]);else break;e=e.slice(o);const l=s.join(`
`),d=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${l}`:l,t=t?`${t}
${d}`:d;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,r,!0),this.lexer.state.top=h,e.length===0)break;const m=r.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const p=m,g=p.raw+`
`+e.join(`
`),f=this.blockquote(g);r[r.length-1]=f,i=i.substring(0,i.length-p.raw.length)+f.raw,t=t.substring(0,t.length-p.text.length)+f.text;break}else if((m==null?void 0:m.type)==="list"){const p=m,g=p.raw+`
`+e.join(`
`),f=this.list(g);r[r.length-1]=f,i=i.substring(0,i.length-m.raw.length)+f.raw,t=t.substring(0,t.length-p.raw.length)+f.raw,e=g.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:r,text:t}}}list(n){let a=this.rules.block.list.exec(n);if(a){let e=a[1].trim();const i=e.length>1,t={type:"list",raw:"",ordered:i,start:i?+e.slice(0,-1):"",loose:!1,items:[]};e=i?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=i?e:"[*+-]");const r=this.rules.other.listItemRegex(e);let u=!1;for(;n;){let o=!1,l="",d="";if(!(a=r.exec(n))||this.rules.block.hr.test(n))break;l=a[0],n=n.substring(l.length);let h=a[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),m=n.split(`
`,1)[0],p=!h.trim(),g=0;if(this.options.pedantic?(g=2,d=h.trimStart()):p?g=a[1].length+1:(g=a[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,d=h.slice(g),g+=a[1].length),p&&this.rules.other.blankLine.test(m)&&(l+=m+`
`,n=n.substring(m.length+1),o=!0),!o){const y=this.rules.other.nextBulletRegex(g),P=this.rules.other.hrRegex(g),C=this.rules.other.fencesBeginRegex(g),$=this.rules.other.headingBeginRegex(g),Z=this.rules.other.htmlBeginRegex(g);for(;n;){const ra=n.split(`
`,1)[0];let M;if(m=ra,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),M=m):M=m.replace(this.rules.other.tabCharGlobal,"    "),C.test(m)||$.test(m)||Z.test(m)||y.test(m)||P.test(m))break;if(M.search(this.rules.other.nonSpaceChar)>=g||!m.trim())d+=`
`+M.slice(g);else{if(p||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(h)||$.test(h)||P.test(h))break;d+=`
`+m}!p&&!m.trim()&&(p=!0),l+=ra+`
`,n=n.substring(ra.length+1),h=M.slice(g)}}t.loose||(u?t.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(u=!0));let f=null,c;this.options.gfm&&(f=this.rules.other.listIsTask.exec(d),f&&(c=f[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),t.items.push({type:"list_item",raw:l,task:!!f,checked:c,loose:!1,text:d,tokens:[]}),t.raw+=l}const s=t.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let o=0;o<t.items.length;o++)if(this.lexer.state.top=!1,t.items[o].tokens=this.lexer.blockTokens(t.items[o].text,[]),!t.loose){const l=t.items[o].tokens.filter(h=>h.type==="space"),d=l.length>0&&l.some(h=>this.rules.other.anyLine.test(h.raw));t.loose=d}if(t.loose)for(let o=0;o<t.items.length;o++)t.items[o].loose=!0;return t}}html(n){const a=this.rules.block.html.exec(n);if(a)return{type:"html",block:!0,raw:a[0],pre:a[1]==="pre"||a[1]==="script"||a[1]==="style",text:a[0]}}def(n){const a=this.rules.block.def.exec(n);if(a){const e=a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=a[2]?a[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",t=a[3]?a[3].substring(1,a[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):a[3];return{type:"def",tag:e,raw:a[0],href:i,title:t}}}table(n){var u;const a=this.rules.block.table.exec(n);if(!a||!this.rules.other.tableDelimiter.test(a[2]))return;const e=Pt(a[1]),i=a[2].replace(this.rules.other.tableAlignChars,"").split("|"),t=(u=a[3])!=null&&u.trim()?a[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:a[0],header:[],align:[],rows:[]};if(e.length===i.length){for(const s of i)this.rules.other.tableAlignRight.test(s)?r.align.push("right"):this.rules.other.tableAlignCenter.test(s)?r.align.push("center"):this.rules.other.tableAlignLeft.test(s)?r.align.push("left"):r.align.push(null);for(let s=0;s<e.length;s++)r.header.push({text:e[s],tokens:this.lexer.inline(e[s]),header:!0,align:r.align[s]});for(const s of t)r.rows.push(Pt(s,r.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[l]})));return r}}lheading(n){const a=this.rules.block.lheading.exec(n);if(a)return{type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:this.lexer.inline(a[1])}}paragraph(n){const a=this.rules.block.paragraph.exec(n);if(a){const e=a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const a=this.rules.block.text.exec(n);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(n){const a=this.rules.inline.escape.exec(n);if(a)return{type:"escape",raw:a[0],text:a[1]}}tag(n){const a=this.rules.inline.tag.exec(n);if(a)return!this.lexer.state.inLink&&this.rules.other.startATag.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:a[0]}}link(n){const a=this.rules.inline.link.exec(n);if(a){const e=a[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const r=de(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=Cl(a[2],"()");if(r===-2)return;if(r>-1){const s=(a[0].indexOf("!")===0?5:4)+a[1].length+r;a[2]=a[2].substring(0,r),a[0]=a[0].substring(0,s).trim(),a[3]=""}}let i=a[2],t="";if(this.options.pedantic){const r=this.rules.other.pedanticHrefTitle.exec(i);r&&(i=r[1],t=r[3])}else t=a[3]?a[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i=i.slice(1):i=i.slice(1,-1)),Et(a,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:t&&t.replace(this.rules.inline.anyPunctuation,"$1")},a[0],this.lexer,this.rules)}}reflink(n,a){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){const i=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),t=a[i.toLowerCase()];if(!t){const r=e[0].charAt(0);return{type:"text",raw:r,text:r}}return Et(e,t,e[0],this.lexer,this.rules)}}emStrong(n,a,e=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!i||i[3]&&e.match(this.rules.other.unicodeAlphaNumeric))return;if(!(i[1]||i[2]||"")||!e||this.rules.inline.punctuation.exec(e)){const r=[...i[0]].length-1;let u,s,o=r,l=0;const d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,a=a.slice(-1*n.length+r);(i=d.exec(a))!=null;){if(u=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!u)continue;if(s=[...u].length,i[3]||i[4]){o+=s;continue}else if((i[5]||i[6])&&r%3&&!((r+s)%3)){l+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+l);const h=[...i[0]][0].length,m=n.slice(0,r+i.index+h+s);if(Math.min(r,s)%2){const g=m.slice(1,-1);return{type:"em",raw:m,text:g,tokens:this.lexer.inlineTokens(g)}}const p=m.slice(2,-2);return{type:"strong",raw:m,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(n){const a=this.rules.inline.code.exec(n);if(a){let e=a[2].replace(this.rules.other.newLineCharGlobal," ");const i=this.rules.other.nonSpaceChar.test(e),t=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&t&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:a[0],text:e}}}br(n){const a=this.rules.inline.br.exec(n);if(a)return{type:"br",raw:a[0]}}del(n){const a=this.rules.inline.del.exec(n);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2])}}autolink(n){const a=this.rules.inline.autolink.exec(n);if(a){let e,i;return a[2]==="@"?(e=a[1],i="mailto:"+e):(e=a[1],i=e),{type:"link",raw:a[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(n){var e;let a;if(a=this.rules.inline.url.exec(n)){let i,t;if(a[2]==="@")i=a[0],t="mailto:"+i;else{let r;do r=a[0],a[0]=((e=this.rules.inline._backpedal.exec(a[0]))==null?void 0:e[0])??"";while(r!==a[0]);i=a[0],a[1]==="www."?t="http://"+a[0]:t=a[0]}return{type:"link",raw:a[0],text:i,href:t,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n){const a=this.rules.inline.text.exec(n);if(a){const e=this.lexer.state.inRawBlock;return{type:"text",raw:a[0],text:a[0],escaped:e}}}},en=class Hi{constructor(a){_(this,"tokens");_(this,"options");_(this,"state");_(this,"tokenizer");_(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=a||Mn,this.options.tokenizer=this.options.tokenizer||new Qe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={other:ia,block:He.normal,inline:oe.normal};this.options.pedantic?(e.block=He.pedantic,e.inline=oe.pedantic):this.options.gfm&&(e.block=He.gfm,this.options.breaks?e.inline=oe.breaks:e.inline=oe.gfm),this.tokenizer.rules=e}static get rules(){return{block:He,inline:oe}}static lex(a,e){return new Hi(e).lex(a)}static lexInline(a,e){return new Hi(e).inlineTokens(a)}lex(a){a=a.replace(ia.carriageReturn,`
`),this.blockTokens(a,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const i=this.inlineQueue[e];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(a,e=[],i=!1){var t,r,u;for(this.options.pedantic&&(a=a.replace(ia.tabCharGlobal,"    ").replace(ia.spaceLine,""));a;){let s;if((r=(t=this.options.extensions)==null?void 0:t.block)!=null&&r.some(l=>(s=l.call({lexer:this},a,e))?(a=a.substring(s.raw.length),e.push(s),!0):!1))continue;if(s=this.tokenizer.space(a)){a=a.substring(s.raw.length);const l=e.at(-1);s.raw.length===1&&l!==void 0?l.raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(a)){a=a.substring(s.raw.length);const l=e.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+s.raw,l.text+=`
`+s.text,this.inlineQueue.at(-1).src=l.text):e.push(s);continue}if(s=this.tokenizer.fences(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(a)){a=a.substring(s.raw.length);const l=e.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+s.raw,l.text+=`
`+s.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(a)){a=a.substring(s.raw.length),e.push(s);continue}let o=a;if((u=this.options.extensions)!=null&&u.startBlock){let l=1/0;const d=a.slice(1);let h;this.options.extensions.startBlock.forEach(m=>{h=m.call({lexer:this},d),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(o=a.substring(0,l+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){const l=e.at(-1);i&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=`
`+s.raw,l.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):e.push(s),i=o.length!==a.length,a=a.substring(s.raw.length);continue}if(s=this.tokenizer.text(a)){a=a.substring(s.raw.length);const l=e.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=`
`+s.raw,l.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):e.push(s);continue}if(a){const l="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(a,e=[]){return this.inlineQueue.push({src:a,tokens:e}),e}inlineTokens(a,e=[]){var s,o,l;let i=a,t=null;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,t.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(t=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,u="";for(;a;){r||(u=""),r=!1;let d;if((o=(s=this.options.extensions)==null?void 0:s.inline)!=null&&o.some(m=>(d=m.call({lexer:this},a,e))?(a=a.substring(d.raw.length),e.push(d),!0):!1))continue;if(d=this.tokenizer.escape(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.tag(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.link(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.reflink(a,this.tokens.links)){a=a.substring(d.raw.length);const m=e.at(-1);d.type==="text"&&(m==null?void 0:m.type)==="text"?(m.raw+=d.raw,m.text+=d.text):e.push(d);continue}if(d=this.tokenizer.emStrong(a,i,u)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.codespan(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.br(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.del(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.autolink(a)){a=a.substring(d.raw.length),e.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(a))){a=a.substring(d.raw.length),e.push(d);continue}let h=a;if((l=this.options.extensions)!=null&&l.startInline){let m=1/0;const p=a.slice(1);let g;this.options.extensions.startInline.forEach(f=>{g=f.call({lexer:this},p),typeof g=="number"&&g>=0&&(m=Math.min(m,g))}),m<1/0&&m>=0&&(h=a.substring(0,m+1))}if(d=this.tokenizer.inlineText(h)){a=a.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(u=d.raw.slice(-1)),r=!0;const m=e.at(-1);(m==null?void 0:m.type)==="text"?(m.raw+=d.raw,m.text+=d.text):e.push(d);continue}if(a){const m="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return e}},ai=class{constructor(n){_(this,"options");_(this,"parser");this.options=n||Mn}space(n){return""}code({text:n,lang:a,escaped:e}){var r;const i=(r=(a||"").match(ia.notSpaceStart))==null?void 0:r[0],t=n.replace(ia.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Ca(i)+'">'+(e?t:Ca(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:Ca(t,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:a}){return`<h${a}>${this.parser.parseInline(n)}</h${a}>
`}hr(n){return`<hr>
`}list(n){const a=n.ordered,e=n.start;let i="";for(let u=0;u<n.items.length;u++){const s=n.items[u];i+=this.listitem(s)}const t=a?"ol":"ul",r=a&&e!==1?' start="'+e+'"':"";return"<"+t+r+`>
`+i+"</"+t+`>
`}listitem(n){var e;let a="";if(n.task){const i=this.checkbox({checked:!!n.checked});n.loose?((e=n.tokens[0])==null?void 0:e.type)==="paragraph"?(n.tokens[0].text=i+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=i+" "+Ca(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):a+=i+" "}return a+=this.parser.parse(n.tokens,!!n.loose),`<li>${a}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let a="",e="";for(let t=0;t<n.header.length;t++)e+=this.tablecell(n.header[t]);a+=this.tablerow({text:e});let i="";for(let t=0;t<n.rows.length;t++){const r=n.rows[t];e="";for(let u=0;u<r.length;u++)e+=this.tablecell(r[u]);i+=this.tablerow({text:e})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const a=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+a+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Ca(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:a,tokens:e}){const i=this.parser.parseInline(e),t=Tt(n);if(t===null)return i;n=t;let r='<a href="'+n+'"';return a&&(r+=' title="'+Ca(a)+'"'),r+=">"+i+"</a>",r}image({href:n,title:a,text:e,tokens:i}){i&&(e=this.parser.parseInline(i,this.parser.textRenderer));const t=Tt(n);if(t===null)return Ca(e);n=t;let r=`<img src="${n}" alt="${e}"`;return a&&(r+=` title="${Ca(a)}"`),r+=">",r}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Ca(n.text)}},dt=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},tn=class Fi{constructor(a){_(this,"options");_(this,"renderer");_(this,"textRenderer");this.options=a||Mn,this.options.renderer=this.options.renderer||new ai,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new dt}static parse(a,e){return new Fi(e).parse(a)}static parseInline(a,e){return new Fi(e).parseInline(a)}parse(a,e=!0){var t,r;let i="";for(let u=0;u<a.length;u++){const s=a[u];if((r=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&r[s.type]){const l=s,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){i+=d||"";continue}}const o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let l=o,d=this.renderer.text(l);for(;u+1<a.length&&a[u+1].type==="text";)l=a[++u],d+=`
`+this.renderer.text(l);e?i+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):i+=d;continue}default:{const l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}parseInline(a,e=this.renderer){var t,r;let i="";for(let u=0;u<a.length;u++){const s=a[u];if((r=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&r[s.type]){const l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=l||"";continue}}const o=s;switch(o.type){case"escape":{i+=e.text(o);break}case"html":{i+=e.html(o);break}case"link":{i+=e.link(o);break}case"image":{i+=e.image(o);break}case"strong":{i+=e.strong(o);break}case"em":{i+=e.em(o);break}case"codespan":{i+=e.codespan(o);break}case"br":{i+=e.br(o);break}case"del":{i+=e.del(o);break}case"text":{i+=e.text(o);break}default:{const l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},Si,Je=(Si=class{constructor(n){_(this,"options");_(this,"block");this.options=n||Mn}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?en.lex:en.lexInline}provideParser(){return this.block?tn.parse:tn.parseInline}},_(Si,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Si),Kl=class{constructor(...n){_(this,"defaults",et());_(this,"options",this.setOptions);_(this,"parse",this.parseMarkdown(!0));_(this,"parseInline",this.parseMarkdown(!1));_(this,"Parser",tn);_(this,"Renderer",ai);_(this,"TextRenderer",dt);_(this,"Lexer",en);_(this,"Tokenizer",Qe);_(this,"Hooks",Je);this.use(...n)}walkTokens(n,a){var i,t;let e=[];for(const r of n)switch(e=e.concat(a.call(this,r)),r.type){case"table":{const u=r;for(const s of u.header)e=e.concat(this.walkTokens(s.tokens,a));for(const s of u.rows)for(const o of s)e=e.concat(this.walkTokens(o.tokens,a));break}case"list":{const u=r;e=e.concat(this.walkTokens(u.items,a));break}default:{const u=r;(t=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&t[u.type]?this.defaults.extensions.childTokens[u.type].forEach(s=>{const o=u[s].flat(1/0);e=e.concat(this.walkTokens(o,a))}):u.tokens&&(e=e.concat(this.walkTokens(u.tokens,a)))}}return e}use(...n){const a=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{const i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){const r=a.renderers[t.name];r?a.renderers[t.name]=function(...u){let s=t.renderer.apply(this,u);return s===!1&&(s=r.apply(this,u)),s}:a.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=a[t.level];r?r.unshift(t.tokenizer):a[t.level]=[t.tokenizer],t.start&&(t.level==="block"?a.startBlock?a.startBlock.push(t.start):a.startBlock=[t.start]:t.level==="inline"&&(a.startInline?a.startInline.push(t.start):a.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(a.childTokens[t.name]=t.childTokens)}),i.extensions=a),e.renderer){const t=this.defaults.renderer||new ai(this.defaults);for(const r in e.renderer){if(!(r in t))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const u=r,s=e.renderer[u],o=t[u];t[u]=(...l)=>{let d=s.apply(t,l);return d===!1&&(d=o.apply(t,l)),d||""}}i.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new Qe(this.defaults);for(const r in e.tokenizer){if(!(r in t))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const u=r,s=e.tokenizer[u],o=t[u];t[u]=(...l)=>{let d=s.apply(t,l);return d===!1&&(d=o.apply(t,l)),d}}i.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new Je;for(const r in e.hooks){if(!(r in t))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const u=r,s=e.hooks[u],o=t[u];Je.passThroughHooks.has(r)?t[u]=l=>{if(this.defaults.async)return Promise.resolve(s.call(t,l)).then(h=>o.call(t,h));const d=s.call(t,l);return o.call(t,d)}:t[u]=(...l)=>{let d=s.apply(t,l);return d===!1&&(d=o.apply(t,l)),d}}i.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,r=e.walkTokens;i.walkTokens=function(u){let s=[];return s.push(r.call(this,u)),t&&(s=s.concat(t.call(this,u))),s}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,a){return en.lex(n,a??this.defaults)}parser(n,a){return tn.parse(n,a??this.defaults)}parseMarkdown(n){return(e,i)=>{const t={...i},r={...this.defaults,...t},u=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&t.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=n);const s=r.hooks?r.hooks.provideLexer():n?en.lex:en.lexInline,o=r.hooks?r.hooks.provideParser():n?tn.parse:tn.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(e):e).then(l=>s(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>o(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(u);try{r.hooks&&(e=r.hooks.preprocess(e));let l=s(e,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let d=o(l,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(l){return u(l)}}}onError(n,a){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+Ca(e.message+"",!0)+"</pre>";return a?Promise.resolve(i):i}if(a)return Promise.reject(e);throw e}}},Cn=new Kl;function R(n,a){return Cn.parse(n,a)}R.options=R.setOptions=function(n){return Cn.setOptions(n),R.defaults=Cn.defaults,Er(R.defaults),R};R.getDefaults=et;R.defaults=Mn;R.use=function(...n){return Cn.use(...n),R.defaults=Cn.defaults,Er(R.defaults),R};R.walkTokens=function(n,a){return Cn.walkTokens(n,a)};R.parseInline=Cn.parseInline;R.Parser=tn;R.parser=tn.parse;R.Renderer=ai;R.TextRenderer=dt;R.Lexer=en;R.lexer=en.lex;R.Tokenizer=Qe;R.Hooks=Je;R.parse=R;R.options;R.setOptions;R.use;R.walkTokens;R.parseInline;tn.parse;en.lex;const Va={cyber:{code:"cyber",name:"Cybersecurity",label:"Cybersecurity",accent:"#3a5a44",schedule:"Senin–Jumat · 07.00 WIB",next:"Update software & patch keamanan"},fr:{code:"fr",name:"Français",label:"Bahasa Prancis",accent:"#2e4e6b",schedule:"Setiap hari · 05.00 WIB",next:"Kosakata sehari-hari"},en:{code:"en",name:"English",label:"Bahasa Inggris",accent:"#a85b38",schedule:"Setiap hari · 06.00 WIB",next:"There is / there are"},ai:{code:"ai",name:"AI Engineer",label:"AI Engineer",accent:"#8a6d2b",schedule:"Senin–Jumat · 10.30 WIB",next:"CNN & Transformer"}},ji=["cyber","fr","en","ai"],Ll=Object.assign({"../../lessons/ai-01-apa-itu-ai-engineer.md":Tu,"../../lessons/ai-02-python-untuk-ai.md":Pu,"../../lessons/ai-03-matematika-untuk-ai.md":Eu,"../../lessons/ai-04-cara-kerja-ml.md":Nu,"../../lessons/ai-05-ml-klasik-scikit-learn.md":Ru,"../../lessons/ai-06-evaluasi-model.md":Du,"../../lessons/ai-07-neural-network-pytorch.md":Cu,"../../lessons/cyber-01-apa-itu-cybersecurity.md":Mu,"../../lessons/cyber-02-cia-triad.md":Ku,"../../lessons/cyber-03-jenis-ancaman.md":Lu,"../../lessons/cyber-04-password-autentikasi.md":zu,"../../lessons/cyber-05-phishing.md":Bu,"../../lessons/cyber-06-malware.md":Hu,"../../lessons/cyber-07-wifi.md":Fu,"../../lessons/cyber-08-keamanan-hp.md":Ou,"../../lessons/cyber-09-privasi-jejak-digital.md":$u,"../../lessons/cyber-10-backup-dan-pemulihan.md":Gu,"../../lessons/en-01-alphabet.md":Ju,"../../lessons/en-02-greetings.md":Wu,"../../lessons/en-03-numbers-days-time.md":Uu,"../../lessons/en-04-pronouns-to-be.md":qu,"../../lessons/en-05-kosakata-sehari-hari.md":Zu,"../../lessons/en-06-kalimat-sederhana-present-tense.md":Vu,"../../lessons/fr-01-alphabet.md":Yu,"../../lessons/fr-02-greetings.md":Xu,"../../lessons/fr-03-numbers-days-time.md":Qu,"../../lessons/fr-04-kata-ganti-etre-avoir.md":al});function zl(n){const a=n.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/),e={};let i=n;if(a){i=a[2];for(const t of a[1].split(`
`)){const r=t.indexOf(":");r>-1&&(e[t.slice(0,r).trim()]=t.slice(r+1).trim())}}return{lang:e.lang,number:Number(e.number),date:e.date,title:e.title,subtitle:e.subtitle||"",keywords:e.keywords||"",html:R.parse(i),slug:`${e.lang}-${e.number}`}}const ni=Object.values(Ll).map(zl).filter(n=>n.lang&&n.number&&n.date&&n.title).sort((n,a)=>n.date<a.date?-1:n.date>a.date?1:n.number-a.number);function Oi(n){return ni.filter(a=>a.lang===n).sort((a,e)=>a.number-e.number)}function Bl(n,a){return ni.find(e=>e.lang===n&&e.number===Number(a))}function Hl(n){const a=Oi(n.lang),e=a.findIndex(i=>i.number===n.number);return{prev:a[e-1]||null,next:a[e+1]||null}}const Fl=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],Ol=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];function $l(n){const[a,e,i]=n.split("-").map(Number);return`${i} ${Fl[e-1]} ${a}`}function Nt(n){const[a,e,i]=n.split("-").map(Number);return`${i} ${Ol[e-1]} ${a}`}const Gl="13 November 2026",Rt="#6b4a6e",Jl=[{slug:"fridays-two-missing-reminders",title:"Friday's Two Missing Reminders",date:"2026-11-13",description:"Dua pengingat Jumat 13 November tidak sampai — tilawah Maghrib dan Al-Kahfi 11.00 — penelusuran dan tindak lanjut."},{slug:"tuesdays-missing-dzuhur",title:"Tuesday's Missing Dzuhur",date:"2026-11-10",description:"Pengingat Dzuhur Selasa 10 November tidak sampai, padahal Asar hari itu tepat waktu — penelusuran penyebab."},{slug:"the-missing-asar-reminder",title:"The Missing Asar Reminder",date:"2026-11-09",description:"Pengingat Asar Senin 9 November tidak sampai, enam pengingat lain tepat waktu — penelusuran penyebab."},{slug:"asar-sabtu-tepat-waktu",title:"Asar Sabtu Tepat Waktu",date:"2026-11-07",description:"Ketujuh pengingat Sabtu 7 November semuanya sampai; keterlambatan Jumat ternyata hanya sekali saja."},{slug:"first-full-day-of-reminders",title:"First Full Day of Reminders",date:"2026-11-06",description:"Hari pertama semua pengingat berjalan sendiri — sembilan pengingat sampai, Asar telat 12 menit."}];function Wl(){return[...Jl].sort((n,a)=>n.date<a.date?1:n.date>a.date?-1:0)}var Ul=q('<p class="lesson-subtitle"> </p>'),ql=q('<a><span class="nav-label">← Pelajaran sebelumnya</span> <span class="nav-title"> </span></a>'),Zl=q("<span></span>"),Vl=q('<a class="next-link"><span class="nav-label">Pelajaran berikutnya →</span> <span class="nav-title"> </span></a>'),Yl=q('<a class="back-link"> </a> <p class="eyebrow"> </p> <h1 class="lesson-title"> </h1> <!> <p class="lesson-meta"> </p> <div class="lesson-body"></div> <nav class="lesson-nav"><!> <!></nav>',1),Xl=q('<a class="back-link" href="#/">← Kembali ke semua pelajaran</a> <p class="empty">Pelajaran tidak ditemukan.</p>',1);function Ql(n,a){Ji(a,!0);let e=Ia(()=>Bl(a.lang,a.number)),i=Ia(()=>b(e)?Va[b(e).lang]:null),t=Ia(()=>b(e)?Hl(b(e)):{prev:null,next:null});var r=Di(),u=Hn(r);{var s=l=>{var d=Yl(),h=Hn(d),m=B(h),p=x(h,2),g=B(p),f=x(p,2),c=B(f,!0),y=x(f,2);{var P=z=>{var V=Ul(),Na=B(V,!0);ma(()=>D(Na,b(e).subtitle)),H(z,V)};Ha(y,z=>{b(e).subtitle&&z(P)})}var C=x(y,2),$=B(C),Z=x(C,2);yu(Z,()=>b(e).html,!0);var ra=x(Z,2),M=F(ra);{var ga=z=>{var V=ql(),Na=x(F(V),2),sn=B(Na);ma(()=>{On(V,"href",`#/${b(t).prev.lang??""}/${b(t).prev.number??""}`),D(sn,`#${b(t).prev.number??""} — ${b(t).prev.title??""}`)}),H(z,V)},ca=z=>{var V=Zl();H(z,V)};Ha(M,z=>{b(t).prev?z(ga):z(ca,-1)})}var X=x(M,2);{var rn=z=>{var V=Vl(),Na=x(F(V),2),sn=B(Na);ma(()=>{On(V,"href",`#/${b(t).next.lang??""}/${b(t).next.number??""}`),D(sn,`#${b(t).next.number??""} — ${b(t).next.title??""}`)}),H(z,V)};Ha(X,z=>{b(t).next&&z(rn)})}ma(z=>{On(h,"href",`#/${b(e).lang??""}`),D(m,`← Semua pelajaran ${b(i).name??""}`),_n(p,`color: ${b(i).accent??""}`),D(g,`${b(i).name??""} · Pelajaran #${b(e).number??""}`),D(c,b(e).title),D($,`${z??""} · ${b(i).label??""} · ${b(i).schedule??""}`)},[()=>$l(b(e).date)]),H(l,d)},o=l=>{var d=Xl();H(l,d)};Ha(u,l=>{b(e)&&b(i)?l(s):l(o,-1)})}H(n,r),Wi()}var ao=q('<input class="search" type="search" placeholder="Cari pelajaran — mis. phishing, liaison, scikit-learn" aria-label="Cari pelajaran"/>'),no=q('<a> <span class="n"> </span></a>'),eo=q('<p class="empty">Belum ada laporan.</p>'),Dt=q('<a class="lesson-row"><span class="num"> </span> <span class="main"><span class="title"> </span> <span class="sub"> </span></span> <span class="date"> </span> <span class="arrow">→</span></a>'),io=q(`<section class="lang-section"><div class="lang-head"><h2>Laporan<span class="accent-dot"></span></h2> <span class="lang-meta"> </span></div> <p class="laporan-intro">Laporan dari temuan dan resolusi — dokumen web yang sebelumnya
          hanya dikirim lewat WhatsApp, disimpan di sini supaya bisa dibaca
          ulang kapan saja.</p> <!></section>`),to=q('<p class="empty"> </p>'),ro=q('<section class="lang-section"><div class="lang-head"><h2> <span class="accent-dot"></span></h2> <span class="lang-meta"> <br/> </span></div> <!></section>'),so=q('<div class="next-item"><div class="lang-name"> </div> <div class="topic"> </div> <div class="when"> </div></div>'),uo=q('<section class="next-block"><h3>Selanjutnya</h3> <div class="next-grid"></div></section>'),lo=q("<!> <!>",1),oo=q(`<header class="site-header"><div class="top"><a class="wordmark" href="#/">Polly<span>.</span></a> <span class="site-tag">Catatan belajar</span></div> <p class="intro">Semua pelajaran — cybersecurity, bahasa Prancis, bahasa Inggris, dan
        AI Engineer — dari hari pertama sampai hari ini. Bisa dicari dan
        dibaca ulang <em>kapan saja</em>.</p> <p class="count-line"> </p></header> <!> <nav class="tabs"><a href="#/">Semua</a> <a href="#/laporan">Laporan<span class="n"> </span></a> <!></nav> <!>`,1),ko=q(`<div class="wrap"><!> <footer class="site-footer"><p>Polly — catatan belajar harian: cybersecurity, bahasa Prancis, bahasa
      Inggris, dan AI Engineer.</p> <p>Pelajaran baru ditambahkan ke halaman ini setelah dikirim di WhatsApp.</p></footer></div>`);function mo(n,a){Ji(a,!0);let e=Ma(Bn(window.location.hash));ft(()=>{const c=()=>{Ya(e,window.location.hash,!0)};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)});function i(c){const y=c.replace(/^#\/?/,"").split("/").filter(Boolean);if(y.length===1&&y[0]==="laporan")return{view:"home",tab:"laporan"};const P=Object.keys(Va);return y.length===2&&P.includes(y[0])&&/^\d+$/.test(y[1])?{view:"lesson",lang:y[0],number:Number(y[1])}:y.length===1&&P.includes(y[0])?{view:"home",tab:y[0]}:{view:"home",tab:"all"}}let t=Ia(()=>i(b(e))),r=Ma("");ft(()=>{b(t).view,b(t).lang,b(t).number,window.scrollTo(0,0)});let u=Ia(()=>b(r).trim().toLowerCase());function s(c){return b(u)?[c.title,c.subtitle,c.keywords].join(" ").toLowerCase().includes(b(u)):!0}let o=Ia(()=>ni.length),l=Ia(Wl),d=Ia(()=>b(t).tab==="all"?ji:[b(t).tab]),h=Ia(()=>ni.some(s));var m=ko(),p=F(m);{var g=c=>{Ql(c,{get lang(){return b(t).lang},get number(){return b(t).number}})},f=c=>{var y=oo(),P=Hn(y),C=x(F(P),4),$=B(C),Z=x(P,2);{var ra=U=>{var G=ao();Au(G,()=>b(r),L=>Ya(r,L)),H(U,G)};Ha(Z,U=>{b(t).tab!=="laporan"&&U(ra)})}var M=x(Z,2),ga=F(M),ca=x(ga,2),X=x(F(ca)),rn=B(X,!0),z=x(ca,2);ue(z,17,()=>ji,se,(U,G)=>{var L=no(),ba=F(L),ne=x(ba),Wa=B(ne,!0);ma(Ua=>{vi(L,1,`tab ${b(t).tab===b(G)?"active":""}`),On(L,"href",`#/${b(G)??""}`),D(ba,Va[b(G)].name),D(Wa,Ua)},[()=>Oi(b(G)).length]),H(U,L)});var V=x(M,2);{var Na=U=>{var G=io(),L=F(G),ba=F(L),ne=x(F(ba)),Wa=x(ba,2),Ua=B(Wa),qa=x(L,4);{var yn=fa=>{var Da=eo();H(fa,Da)},Ra=fa=>{var Da=Di(),vn=Hn(Da);ue(vn,17,()=>b(l),se,(wn,Za,Kn)=>{var un=Dt(),ee=F(un),oi=B(ee,!0),ie=x(ee,2),Ke=F(ie),di=B(Ke,!0),ki=x(Ke,2),ln=B(ki,!0),te=x(ie,2),re=B(te,!0);ma((mi,Le)=>{On(un,"href",`laporan/${b(Za).slug??""}/`),_n(ee,`color: ${Rt}`),D(oi,mi),D(di,b(Za).title),D(ln,b(Za).description),D(re,Le)},[()=>String(Kn+1).padStart(2,"0"),()=>Nt(b(Za).date)]),H(wn,un)}),H(fa,Da)};Ha(qa,fa=>{b(l).length===0?fa(yn):fa(Ra,-1)})}ma(()=>{_n(ne,`background: ${Rt}`),D(Ua,`Temuan & resolusi · ${b(l).length??""} laporan`)}),H(U,G)},sn=U=>{var G=to(),L=B(G);ma(ba=>D(L,`Tidak ada pelajaran yang cocok dengan “${ba??""}”. Coba kata lain —
        mis. “angka”, “sapaan”, atau “liaison”.`),[()=>b(r).trim()]),H(U,G)},Me=U=>{var G=lo(),L=Hn(G);ue(L,17,()=>b(d),se,(Wa,Ua)=>{const qa=Ia(()=>Va[b(Ua)]),yn=Ia(()=>Oi(b(Ua)).filter(s));var Ra=Di(),fa=Hn(Ra);{var Da=vn=>{var wn=ro(),Za=F(wn),Kn=F(Za),un=F(Kn),ee=x(un),oi=x(Kn,2),ie=F(oi),Ke=x(ie,2,!0),di=x(Za,2);ue(di,17,()=>b(yn),se,(ki,ln)=>{var te=Dt(),re=F(te),mi=B(re,!0),Le=x(re,2),kt=F(Le),Fr=B(kt,!0),Or=x(kt,2),$r=B(Or,!0),Gr=x(Le,2),Jr=B(Gr,!0);ma((Wr,Ur)=>{On(te,"href",`#/${b(ln).lang??""}/${b(ln).number??""}`),_n(re,`color: ${b(qa).accent??""}`),D(mi,Wr),D(Fr,b(ln).title),D($r,b(ln).subtitle),D(Jr,Ur)},[()=>String(b(ln).number).padStart(2,"0"),()=>Nt(b(ln).date)]),H(ki,te)}),ma(()=>{D(un,b(qa).name),_n(ee,`background: ${b(qa).accent??""}`),D(ie,`${b(qa).label??""} · ${b(yn).length??""} pelajaran`),D(Ke,b(qa).schedule)}),H(vn,wn)};Ha(fa,vn=>{b(yn).length>0&&vn(Da)})}H(Wa,Ra)});var ba=x(L,2);{var ne=Wa=>{var Ua=uo(),qa=x(F(Ua),2);ue(qa,21,()=>ji,se,(yn,Ra)=>{var fa=so(),Da=F(fa),vn=B(Da,!0),wn=x(Da,2),Za=B(wn,!0),Kn=x(wn,2),un=B(Kn,!0);ma(()=>{_n(fa,`border-left-color: ${Va[b(Ra)].accent??""}`),_n(Da,`color: ${Va[b(Ra)].accent??""}`),D(vn,Va[b(Ra)].name),D(Za,Va[b(Ra)].next),D(un,Va[b(Ra)].schedule)}),H(yn,fa)}),H(Wa,Ua)};Ha(ba,Wa=>{b(u)||Wa(ne)})}H(U,G)};Ha(V,U=>{b(t).tab==="laporan"?U(Na):b(u)&&!b(h)?U(sn,1):U(Me,-1)})}ma(()=>{D($,`${b(o)??""} pelajaran · 4 jalur belajar · diperbarui ${Gl}`),vi(ga,1,`tab ${b(t).tab==="all"?"active":""}`),vi(ca,1,`tab ${b(t).tab==="laporan"?"active":""}`),D(rn,b(l).length)}),H(c,y)};Ha(p,c=>{b(t).view==="lesson"?c(g):c(f,-1)})}H(n,m),Wi()}mu(mo,{target:document.getElementById("app")});
