var zr=Object.defineProperty;var Qt=e=>{throw TypeError(e)};var Hr=(e,a,n)=>a in e?zr(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var w=(e,a,n)=>Hr(e,typeof a!="symbol"?a+"":a,n),Xn=(e,a,n)=>a.has(e)||Qt("Cannot "+n);var p=(e,a,n)=>(Xn(e,a,"read from private field"),n?n.call(e):a.get(e)),j=(e,a,n)=>a.has(e)?Qt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,n),x=(e,a,n,t)=>(Xn(e,a,"write to private field"),t?t.call(e,n):a.set(e,n),n),_=(e,a,n)=>(Xn(e,a,"access private method"),n);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const vi=!1;var _i=Array.isArray,Or=Array.prototype.indexOf,un=Array.prototype.includes,Jn=Array.from,wi=Object.defineProperty,an=Object.getOwnPropertyDescriptor,Fr=Object.getOwnPropertyDescriptors,Kr=Object.prototype,Wr=Array.prototype,xi=Object.getPrototypeOf,Xt=Object.isExtensible;const qr=()=>{};function Gr(e){for(var a=0;a<e.length;a++)e[a]()}function Si(){var e,a,n=new Promise((t,i)=>{e=t,a=i});return{promise:n,resolve:e,reject:a}}const Y=2,on=4,Un=8,ji=1<<24,Sa=16,Ta=32,le=64,ht=128,It=256,Aa=512,F=1024,B=2048,ca=4096,ia=8192,V=16384,Ne=32768,Mn=1<<25,Me=65536,Ln=1<<17,Jr=1<<18,ze=1<<19,Ur=1<<20,Oa=1<<25,Bn=1<<21,Te=1<<22,ie=1<<23,at=Symbol("$state"),Ai=Symbol("component"),En=Symbol("attributes"),pt=Symbol("class"),dt=Symbol("style"),Je=Symbol("text"),Pn=Symbol("form reset"),gn=new class extends Error{constructor(){super(...arguments);w(this,"name","StaleReactionError");w(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Zr=1,Vr=2,Ti=4,Yr=8,Qr=16,Xr=1,as=2,Ii={},O=Symbol("uninitialized"),Ei="http://www.w3.org/1999/xhtml",es="http://www.w3.org/2000/svg",ns="http://www.w3.org/1998/Math/MathML";function ts(){console.warn("https://svelte.dev/e/derived_inert")}function is(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Pi(e){return e===this.v}function rs(e,a){return e!=e?a==a:e!==a||e!==null&&typeof e=="object"||typeof e=="function"}function Ri(e){return!rs(e,this.v)}function ss(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ls(e,a,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function us(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function os(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ps(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ds(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ms(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let gs=!1,la=null;function Le(e){la=e}function Et(e,a=!1,n){la={p:la,i:!1,c:null,e:null,s:e,x:null,r:E,l:null}}function Pt(e){var a=la,n=a.e;if(n!==null){a.e=null;for(var t of n)Xi(t)}return a.i=!0,la=a.p,Ci(e)}function Ci(e={}){return wi(e,Ai,{value:!0}),e}function $i(){return!0}let pe=[];function Mi(){var e=pe;pe=[],Gr(e)}function ne(e){if(pe.length===0&&!en){var a=pe;queueMicrotask(()=>{a===pe&&Mi()})}pe.push(e)}function ks(){for(;pe.length>0;)Mi()}const bs=-7169;function H(e,a){e.f=e.f&bs|a}function Rt(e){(e.f&Aa)!==0||e.deps===null?H(e,F):H(e,ca)}function Li(e,a){(e.f&B)!==0?a.set(e,B):(e.f&ca)!==0&&a.get(e)!==B&&a.set(e,ca),H(e,F)}let ai=!1;function ys(){ai||(ai=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const n of e.target.elements)(a=n[Pn])==null||a.call(n)})},{capture:!0}))}function kn(e){var a=S,n=E;ba(null),Wa(null);try{return e()}finally{ba(a),Wa(n)}}function vs(e,a,n,t=n){e.addEventListener(a,()=>kn(n));const i=e[Pn];i?e[Pn]=()=>{i(),t(!0)}:e[Pn]=()=>t(!0),ys()}function _s(e,a,n,t){const i=Ct;var r=e.filter(f=>!f.settled),l=a.map(i);if(n.length===0&&r.length===0){t(l);return}var s=E,o=ws(),u=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(f=>f.promise)):null;function h(f){if((s.f&V)===0){o();try{t([...l,...f])}catch(m){Ha(m,s)}Dn()}}var c=Bi();if(n.length===0){u.then(()=>h([])).finally(c);return}function d(){Promise.all(n.map(f=>xs(f))).then(h).catch(f=>Ha(f,s)).finally(c)}u?u.then(()=>{if((s.f&V)!==0){c();return}o(),d(),Dn()}):d()}function ws(){var e=E,a=S,n=la,t=v;return function(r=!0){Wa(e),ba(a),Le(n),r&&(e.f&V)===0&&(t==null||t.activate(),t==null||t.apply())}}function Dn(e=!0){Wa(null),ba(null),Le(null),e&&(v==null||v.deactivate())}function Bi(){var e=E,a=e.b,n=v,t=!!(a!=null&&a.is_rendered());return a==null||a.update_pending_count(1,n),n.increment(t,e),()=>{a==null||a.update_pending_count(-1,n),n.decrement(t,e)}}function Ct(e){var a=Y|B;return E!==null&&(E.f|=ze),{ctx:la,deps:null,effects:null,equals:Pi,f:a,fn:e,reactions:null,rv:0,v:O,wv:0,parent:E,ac:null}}const Ue=Symbol("obsolete");function xs(e,a,n){let t=E;t===null&&ss();var i=void 0,r=ve(O),l=!S,s=new Set;return Hs(()=>{var f,m;var o=E,u=Si();i=u.promise;try{Promise.resolve(e()).then(u.resolve,b=>{b!==gn&&u.reject(b)}).finally(Dn)}catch(b){u.reject(b),Dn()}var h=v;if(l){if((o.f&Ne)!==0)var c=Bi();if((f=t.b)!=null&&f.is_rendered())(m=h.async_deriveds.get(o))==null||m.reject(Ue);else for(const b of s.values())b.reject(Ue);s.add(u),h.async_deriveds.set(o,u)}const d=(b,g=void 0)=>{c==null||c(),s.delete(u),g!==Ue&&(h.activate(),g?(r.f|=ie,Be(r,g)):((r.f&ie)!==0&&(r.f^=ie),Be(r,b)),h.deactivate())};u.promise.then(d,b=>d(null,b||"unknown"))}),Ns(()=>{for(const o of s)o.reject(Ue)}),new Promise(o=>{function u(h){function c(){h===i?o(r):u(i)}h.then(c,c)}u(i)})}function La(e){const a=Ct(e);return sr(a),a}function Ss(e){const a=Ct(e);return a.equals=Ri,a}function js(e){var a=e.effects;if(a!==null){e.effects=null;for(var n=0;n<a.length;n+=1)ua(a[n])}}function $t(e){var a,n=E,t=e.parent;if(!ue&&t!==null&&e.v!==O&&(t.f&(V|ia))!==0)return ts(),e.v;Wa(t);try{js(e),a=hr(e)}finally{Wa(n)}return a}function Di(e){var a=$t(e);if(!e.equals(a)&&(e.wv=ur(),(!(v!=null&&v.is_fork)||e.deps===null)&&(v!==null?(v.capture(e,a,!0),re==null||re.capture(e,a,!0)):e.v=a,e.deps===null))){H(e,F);return}ue||(J!==null?(Bt()||v!=null&&v.is_fork)&&J.set(e,a):Rt(e))}function As(e){var a;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((a=n.teardown)==null||a.call(n),n.ac!==null&&kn(()=>{n.ac.abort(gn),n.ac=null}),n.fn!==null&&(n.teardown=qr),hn(n,0),Nt(n))}function Ni(e){if(e.effects!==null)for(const a of e.effects)a.teardown&&a.fn!==null&&De(a)}let et=null,Se=null,v=null,re=null,J=null,ct=null,en=!1,nt=!1,nn=null,Rn=null;var ei=0;let Ts=1;var Ie,Ee,Pe,Ja,Re,Ua,dn,Ba,Da,Ce,ce,A,ft,zi,mt,Ze,gt,Hi,Oi,Fi,je,Is,Ve;const Wn=class Wn{constructor(){j(this,A);w(this,"id",Ts++);w(this,"started",!1);w(this,"linked",!0);w(this,"prev",null);w(this,"next",null);w(this,"async_deriveds",new Map);w(this,"current",new Map);w(this,"previous",new Map);j(this,Ie,new Set);j(this,Ee,new Set);j(this,Pe,0);j(this,Ja,new Map);j(this,Re,null);j(this,Ua,[]);j(this,dn,[]);j(this,Ba,new Map);j(this,Da,new Map);j(this,Ce,new Set);w(this,"is_fork",!1);j(this,ce,!1);Se===null?et=Se=this:(Se.next=this,this.prev=Se),Se=this}skip_effect(a){p(this,Da).has(a)||p(this,Da).set(a,{d:[],m:[]}),p(this,Ce).delete(a)}unskip_effect(a,n=t=>this.schedule(t)){var t=p(this,Da).get(a);if(t){p(this,Da).delete(a);for(var i of t.d)H(i,B),n(i);for(i of t.m)H(i,ca),n(i)}p(this,Ce).add(a)}capture(a,n,t=!1){a.v!==O&&!this.previous.has(a)&&this.previous.set(a,a.v),(a.f&ie)===0&&(this.current.set(a,[n,t]),J==null||J.set(a,n)),this.is_fork||(a.v=n)}activate(){v=this}deactivate(){v=null,J=null}flush(){try{nt=!0,v=this,_(this,A,Ze).call(this)}finally{ei=0,ct=null,nn=null,Rn=null,nt=!1,v=null,J=null,Fa.clear()}}discard(){var a;for(const n of p(this,Ee))n(this);p(this,Ee).clear();for(const n of this.async_deriveds.values())n.reject(Ue);_(this,A,Ve).call(this),(a=p(this,Re))==null||a.resolve()}register_created_effect(a){p(this,dn).push(a)}increment(a,n){if(x(this,Pe,p(this,Pe)+1),a){let t=p(this,Ja).get(n)??0;p(this,Ja).set(n,t+1)}}decrement(a,n){if(x(this,Pe,p(this,Pe)-1),a){let t=p(this,Ja).get(n)??0;t===1?p(this,Ja).delete(n):p(this,Ja).set(n,t-1)}p(this,ce)||(x(this,ce,!0),ne(()=>{x(this,ce,!1),this.linked&&this.flush()}))}transfer_reactions(a){for(const[n,t]of a)this.add_dirty_reaction(n,t);a.clear()}add_dirty_reaction(a,n){(n===B||p(this,Ba).get(a)!==B)&&p(this,Ba).set(a,n)}oncommit(a){p(this,Ie).add(a)}ondiscard(a){p(this,Ee).add(a)}settled(){return(p(this,Re)??x(this,Re,Si())).promise}static ensure(){if(v===null){const a=v=new Wn;!nt&&!en&&ne(()=>{a.started||a.flush()})}return v}apply(){{J=null;return}}schedule(a){var n;if(ct=a,(n=a.b)!=null&&n.is_pending&&(a.f&(on|Un|ji))!==0&&(a.f&Ne)===0){a.b.defer_effect(a);return}p(this,Ua).push(a)}};Ie=new WeakMap,Ee=new WeakMap,Pe=new WeakMap,Ja=new WeakMap,Re=new WeakMap,Ua=new WeakMap,dn=new WeakMap,Ba=new WeakMap,Da=new WeakMap,Ce=new WeakMap,ce=new WeakMap,A=new WeakSet,ft=function(){if(this.is_fork)return!0;for(const a of p(this,Ja).keys())if(!_(this,A,zi).call(this,a))return!0;return!1},zi=function(a){for(var n=a;n!==null;n=n.parent)if(p(this,Da).has(n))return!0;return!1},mt=function(){var a=[];for(const r of p(this,Ua))if(!((r.f&V)!==0||(r.f&(B|ca))===0)){for(var n=r,t=!1;n.parent!==null;){n=n.parent;var i=n.f;if((i&(le|Ta))!==0){if((i&F)===0){t=!0;break}n.f^=F}}t||a.push(n)}return x(this,Ua,[]),a},Ze=function(){var s,o,u,h;this.started=!0;for(const[c,d]of p(this,Ba))H(c,d),this.schedule(c);this.apply();for(var a=nn=[],n=[],t=Rn=[];p(this,Ua).length>0;){ei++>1e3&&(_(this,A,Ve).call(this),Ps());for(const c of _(this,A,mt).call(this))try{_(this,A,gt).call(this,c,a,n)}catch(d){throw qi(c),_(this,A,ft).call(this)||this.discard(),d}}if(v=null,t.length>0){var i=Wn.ensure();for(const c of t)i.schedule(c)}if(nn=null,Rn=null,_(this,A,ft).call(this)){_(this,A,je).call(this,n),_(this,A,je).call(this,a);for(const[c,d]of p(this,Da))Wi(c,d);t.length>0&&_(s=v,A,Ze).call(s);return}const r=_(this,A,Hi).call(this);if(r){_(this,A,je).call(this,n),_(this,A,je).call(this,a),_(o=r,A,Fi).call(o,this);return}p(this,Ba).clear();for(const c of p(this,Ie))c(this);p(this,Ie).clear(),re=this,ni(n),ni(a),re=null,(u=p(this,Re))==null||u.resolve();var l=v;p(this,Pe)===0&&(p(this,Ua).length===0||l!==null)&&_(this,A,Ve).call(this),l!==null&&(Fa.clear(),_(h=l,A,Ze).call(h))},gt=function(a,n,t){a.f^=F;for(var i=a.first;i!==null;){var r=i.f,l=(r&(Ta|le))!==0,s=l&&(r&F)!==0,o=s||(r&ia)!==0||p(this,Da).has(i);if(!o&&i.fn!==null){l?i.f^=F:(r&on)!==0?n.push(i):yn(i)&&((r&Sa)!==0&&this.add_dirty_reaction(i,ca),De(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var h=i.next;if(h!==null){i=h;break}i=i.parent}}},Hi=function(){for(var a=this.prev;a!==null;a=a.prev)if(!a.is_fork&&_(this,A,Oi).call(this,a))return a;return null},Oi=function(a){for(const[n,[,t]]of this.current)if(!t&&a.current.has(n))return!0;return!1},Fi=function(a){var t;for(const[i,r]of a.current)!this.previous.has(i)&&a.previous.has(i)&&this.previous.set(i,a.previous.get(i)),this.current.set(i,r);for(const[i,r]of a.async_deriveds){const l=this.async_deriveds.get(i);l&&r.promise.then(l.resolve).catch(l.reject)}a.async_deriveds.clear(),this.transfer_reactions(p(a,Ba));const n=i=>{var r=i.reactions;if(r!==null&&!((i.f&Y)!==0&&(i.f&(B|ca))===0))for(const o of r){var l=o.f;if((l&Y)!==0)n(o);else{var s=o;l&(Te|Sa)&&!this.async_deriveds.has(s)&&(p(this,Ba).delete(s),H(s,B),this.schedule(s))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>a.discard()),_(t=a,A,Ve).call(t),v=this,_(this,A,Ze).call(this)},je=function(a){for(var n=0;n<a.length;n+=1)Li(a[n],p(this,Ba))},Is=function(){var c,d;for(let f=et;f!==null;f=f.next){var a=f.id<this.id,n=[];for(const[m,[b,g]]of this.current){if(f.current.has(m)){var t=f.current.get(m)[0];if(a&&b!==t)f.current.set(m,[b,g]);else continue}n.push(m)}if(a)for(const[m,b]of this.async_deriveds){const g=f.async_deriveds.get(m);g&&b.promise.then(g.resolve).catch(g.reject)}var i=[...f.current.keys()].filter(m=>!f.current.get(m)[1]);if(!(!f.started||i.length===0)){var r=i.filter(m=>!this.current.has(m));if(r.length===0)a&&f.discard();else if(n.length>0){if(a)for(const m of p(this,Ce))f.unskip_effect(m,b=>{var g;(b.f&(Sa|Te))!==0?f.schedule(b):_(g=f,A,je).call(g,[b])});f.activate();var l=new Set,s=new Map;for(var o of n)Ki(o,r,l,s);s=new Map;var u=[...f.current].filter(([m,b])=>{const g=this.current.get(m);return g?g[0]!==b[0]||g[1]!==b[1]:!0}).map(([m])=>m);if(u.length>0)for(const m of p(this,dn))(m.f&(V|ia|Ln))===0&&Mt(m,u,s)&&((m.f&(Te|Sa))!==0?(H(m,B),f.schedule(m)):f.add_dirty_reaction(m,B));if(p(f,Ua).length>0&&!p(f,ce)){f.apply();for(var h of _(c=f,A,mt).call(c))_(d=f,A,gt).call(d,h,[],[])}f.deactivate()}}}},Ve=function(){if(this.linked){var a=this.prev,n=this.next;a===null?et=n:a.next=n,n===null?Se=a:n.prev=a,this.linked=!1}};let ye=Wn;function Es(e){var a=en,n=re;re=null,en=!0;try{for(var t;;){if(ks(),v===null)return t;v.flush()}}finally{en=a,re=n}}function Ps(){try{ps()}catch(e){Ha(e,ct)}}let _a=null;function ni(e){var a=e.length;if(a!==0){for(var n=0;n<a;){var t=e[n++];if((t.f&(V|ia))===0&&yn(t)&&(_a=new Set,De(t),t.deps===null&&t.first===null&&t.nodes===null&&t.teardown===null&&t.ac===null&&tr(t),(_a==null?void 0:_a.size)>0)){Fa.clear();for(const i of _a){if((i.f&(V|ia))!==0)continue;const r=[i];let l=i.parent;for(;l!==null;)_a.has(l)&&(_a.delete(l),r.push(l)),l=l.parent;for(let s=r.length-1;s>=0;s--){const o=r[s];(o.f&(V|ia))===0&&De(o)}}_a.clear()}}_a=null}}function Ki(e,a,n,t){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const r=i.f;(r&Y)!==0?Ki(i,a,n,t):(r&(Te|Sa))!==0&&(r&B)===0&&Mt(i,a,t)&&(H(i,B),Lt(i))}}function Mt(e,a,n){const t=n.get(e);if(t!==void 0)return t;if(e.deps!==null)for(const i of e.deps){if(un.call(a,i))return!0;if((i.f&Y)!==0&&Mt(i,a,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function Lt(e){v.schedule(e)}function Wi(e,a){if(!((e.f&Ta)!==0&&(e.f&F)!==0)){(e.f&B)!==0?a.d.push(e):(e.f&ca)!==0&&a.m.push(e),H(e,F);for(var n=e.first;n!==null;)Wi(n,a),n=n.next}}function qi(e){H(e,F);for(var a=e.first;a!==null;)qi(a),a=a.next}let Nn=new Set;const Fa=new Map;let Gi=!1;function ve(e,a){var n={f:0,v:e,reactions:null,equals:Pi,rv:0,wv:0};return n}function Ma(e,a){const n=ve(e);return sr(n),n}function Rs(e,a=!1,n=!0){const t=ve(e);return a||(t.equals=Ri),t}function Ga(e,a,n=!1){S!==null&&(!ja||(S.f&Ln)!==0)&&$i()&&(S.f&(Y|Sa|Te|Ln))!==0&&(Ka===null||!Ka.has(e))&&fs();let t=n?Ae(a):a;return Be(e,t,Rn)}var he=null,kt=0;function Be(e,a,n=null){if(!e.equals(a)){ue?Fa.set(e,a):Fa.has(e)||Fa.set(e,e.v);var t=ye.ensure();if(t.capture(e,a),(e.f&Y)!==0){const i=e;(e.f&B)!==0&&$t(i),J===null&&Rt(i)}e.wv=ur(),he=null,kt=0,Ji(e,B,n),he=null,E!==null&&(E.f&F)!==0&&(E.f&(Ta|le))===0&&(fa===null?Fs([e]):fa.push(e)),!t.is_fork&&Nn.size>0&&!Gi&&Cs()}return a}function Cs(){Gi=!1;for(const e of Nn){(e.f&F)!==0&&H(e,ca);let a;try{a=yn(e)}catch{a=!0}a&&De(e)}Nn.clear()}function tn(e){Ga(e,e.v+1)}function Ji(e,a,n){var t=e.reactions;if(t!==null){var i=t.length;if(kt+=i,kt>1e5&&he===null&&(he=new Set),he!==null){if(he.has(e))return;he.add(e)}for(var r=0;r<i;r++){var l=t[r],s=l.f,o=(s&B)===0;if(o&&H(l,a),(s&Ln)!==0)Nn.add(l);else if((s&Y)!==0){var u=l;J==null||J.delete(u),Ji(u,ca,n)}else if(o){var h=l;(s&Sa)!==0&&_a!==null&&_a.add(h),n!==null?n.push(h):Lt(h)}}}}function Ae(e){if(typeof e!="object"||e===null||at in e||Ai in e)return e;const a=xi(e);if(a!==Kr&&a!==Wr)return e;var n=new Map,t=_i(e),i=Ma(0),r=be,l=s=>{if(be===r)return s();var o=S,u=be;ba(null),si(r);var h=s();return ba(o),si(u),h};return t&&n.set("length",Ma(e.length)),new Proxy(e,{defineProperty(s,o,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ds();var h=n.get(o);return h===void 0?l(()=>{var c=Ma(u.value);return n.set(o,c),c}):Ga(h,u.value,!0),!0},deleteProperty(s,o){var u=n.get(o);if(u===void 0){if(o in s){const h=l(()=>Ma(O));n.set(o,h),tn(i)}}else Ga(u,O),tn(i);return!0},get(s,o,u){var f;if(o===at)return e;var h=n.get(o),c=o in s;if(h===void 0&&(!c||(f=an(s,o))!=null&&f.writable)&&(h=l(()=>{var m=Ae(c?s[o]:O),b=Ma(m);return b}),n.set(o,h)),h!==void 0){var d=k(h);return d===O?void 0:d}return Reflect.get(s,o,u)},getOwnPropertyDescriptor(s,o){var d;(d=this.has)==null||d.call(this,s,o);var u=Reflect.getOwnPropertyDescriptor(s,o),h=n.get(o);if(h!==void 0){var c=k(h);if(c===O)return;if(u&&"value"in u)u.value=c;else return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(s,o){var d;if(o===at)return!0;var u=n.get(o),h=u!==void 0&&u.v!==O||Reflect.has(s,o);if(u!==void 0||(E!==null||S!==null)&&(!h||(d=an(s,o))!=null&&d.writable)){u===void 0&&(u=l(()=>{var f=h?Ae(s[o]):O,m=Ma(f);return m}),n.set(o,u));var c=k(u);if(c===O)return!1}return h},set(s,o,u,h){var $;var c=n.get(o),d=o in s;if(t&&o==="length")for(var f=u;f<c.v;f+=1){var m=n.get(f+"");m!==void 0?Ga(m,O):f in s&&(m=l(()=>Ma(O)),n.set(f+"",m))}if(c===void 0)(!d||($=an(s,o))!=null&&$.writable)&&(c=l(()=>Ma(void 0)),Ga(c,Ae(u)),n.set(o,c));else{d=c.v!==O;var b=l(()=>Ae(u));Ga(c,b)}var g=Reflect.getOwnPropertyDescriptor(s,o);if(g!=null&&g.set&&g.set.call(h,u),!d){if(t&&typeof o=="string"){var y=n.get("length"),C=Number(o);Number.isInteger(C)&&C>=y.v&&Ga(y,C+1)}tn(i)}return!0},ownKeys(s){k(i);var o=Reflect.ownKeys(s).filter(c=>{var d=n.get(c);return d===void 0||d.v!==O});for(var[u,h]of n)h.v!==O&&!(u in s)&&o.push(u);return o},setPrototypeOf(){cs()}})}var ti,Ui,Zi,Vi;function $s(){if(ti===void 0){ti=window,Ui=/Firefox/.test(navigator.userAgent);var e=Element.prototype,a=Node.prototype,n=Text.prototype;Zi=an(a,"firstChild").get,Vi=an(a,"nextSibling").get,Xt(e)&&(e[pt]=void 0,e[En]=null,e[dt]=void 0,e.__e=void 0),Xt(n)&&(n[Je]=void 0)}}function se(e=""){return document.createTextNode(e)}function Va(e){return Zi.call(e)}function bn(e){return Vi.call(e)}function ea(e,a){return Va(e)}function rn(e,a=!1){{var n=Va(e);return n instanceof Comment&&n.data===""?bn(n):n}}function q(e,a=!1){return Va(e)}function M(e,a=1,n=!1){let t=e;for(;a--;)t=bn(t);return t}function Ms(e){e.textContent=""}function Yi(){return!1}function Qi(e,a,n){return a==null||a===Ei?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(a,e,{is:n}):document.createElementNS(a,e)}function Ls(e){var a=E;if(a===null)return S.f|=ie,e;if((a.f&Ne)===0&&(a.f&on)===0)throw e;Ha(e,a)}function Ha(e,a){if(e===Ii)throw e;if(!(a!==null&&(a.f&V)!==0)){for(;a!==null;){if((a.f&ht)!==0&&(a.f&(V|Mn))===0){if((a.f&Ne)===0)throw e;try{a.b.error(e);return}catch(n){e=n}}a=a.parent}throw e}}function Bs(e){E===null&&(S===null&&hs(),os()),ue&&us()}function Ds(e,a){var n=a.last;n===null?a.last=a.first=e:(n.next=e,e.prev=n,a.last=e)}function oe(e,a){var n=E;n!==null&&(n.f&ia)!==0&&(e|=ia);var t={ctx:la,deps:null,nodes:null,f:e|B|Aa,first:null,fn:a,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};v==null||v.register_created_effect(t);var i=t;if((e&on)!==0)nn!==null?nn.push(t):ye.ensure().schedule(t);else if(a!==null){try{De(t)}catch(l){throw ua(t),l}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&ze)===0&&(i=i.first,(e&Sa)!==0&&(e&Me)!==0&&i!==null&&(i.f|=Me))}if(i!==null&&(i.parent=n,n!==null&&Ds(i,n),S!==null&&(S.f&Y)!==0&&(e&le)===0)){var r=S;(r.effects??(r.effects=[])).push(i)}return t}function Bt(){return S!==null&&!ja}function Ns(e){const a=oe(Un,null);return H(a,F),a.teardown=e,a}function ii(e){Bs();var a=E.f,n=!S&&(a&Ta)!==0&&la!==null&&!la.i;if(n){var t=la;(t.e??(t.e=[])).push(e)}else return Xi(e)}function Xi(e){return oe(on|Ur,e)}function zs(e){ye.ensure();const a=oe(le|ze,e);return(n={})=>new Promise(t=>{n.outro?ke(a,()=>{ua(a),t(void 0)}):(ua(a),t(void 0))})}function Hs(e){return oe(Te|ze,e)}function ar(e,a=0){return oe(Un|a,e)}function xa(e,a=[],n=[],t=[]){_s(t,a,n,i=>{oe(Un,()=>{e(...i.map(k))})})}function Dt(e,a=0){var n=oe(Sa|a,e);return n}function ka(e){return oe(Ta|ze,e)}function er(e){var a=e.teardown;if(a!==null){const n=ue,t=S;ri(!0),ba(null);try{a.call(null)}catch(i){Ha(i,e.parent)}finally{ri(n),ba(t)}}}function Nt(e,a=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&kn(()=>{i.abort(gn)});var t=n.next;(n.f&le)!==0?n.parent=null:ua(n,a),n=t}}function Os(e){for(var a=e.first;a!==null;){var n=a.next;(a.f&Ta)===0&&ua(a),a=n}}function ua(e,a=!0){var n=!1;(a||(e.f&Jr)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(nr(e.nodes.start,e.nodes.end),n=!0),e.f|=Mn,Nt(e,a&&!n),hn(e,0);var t=e.nodes&&e.nodes.t;if(t!==null)for(const r of t)r.stop();er(e),e.f^=Mn,e.f|=V;var i=e.parent;i!==null&&i.first!==null&&tr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function nr(e,a){for(;e!==null;){var n=e===a?null:bn(e);e.remove(),e=n}}function tr(e){var a=e.parent,n=e.prev,t=e.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),a!==null&&(a.first===e&&(a.first=t),a.last===e&&(a.last=n))}function ke(e,a,n=!0){var t=[];e.f|=It,ir(e,t,!0);var i=()=>{n&&ua(e),a&&a()},r=t.length;if(r>0){var l=()=>--r||i();for(var s of t)s.out(l)}else i()}function ir(e,a,n){if((e.f&ia)===0){e.f^=ia;var t=e.nodes&&e.nodes.t;if(t!==null)for(const s of t)(s.is_global||n)&&a.push(s);for(var i=e.first;i!==null;){var r=i.next;if((i.f&le)===0){var l=(i.f&Me)!==0||(i.f&Ta)!==0&&(e.f&Sa)!==0;ir(i,a,l?n:!1)}i=r}}}function zn(e){e.f&=~It,rr(e,!0)}function rr(e,a){if((e.f&It)===0&&(e.f&ia)!==0){e.f^=ia,(e.f&F)===0&&(H(e,B),ye.ensure().schedule(e));for(var n=e.first;n!==null;){var t=n.next,i=(n.f&Me)!==0||(n.f&Ta)!==0;rr(n,i?a:!1),n=t}var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||a)&&l.in()}}function zt(e,a){if(e.nodes)for(var n=e.nodes.start,t=e.nodes.end;n!==null;){var i=n===t?null:bn(n);a.append(n),n=i}}let ue=!1;function ri(e){ue=e}let S=null,ja=!1;function ba(e){S=e}let E=null;function Wa(e){E=e}let Ka=null;function sr(e){S!==null&&((S.f&Bn)!==0||(S.f&Y)!==0)&&(Ka??(Ka=new Set)).add(e)}let sa=null,da=0,fa=null;function Fs(e){fa=e}let lr=1,de=0,be=de;function si(e){be=e}function ur(){return++lr}function yn(e){var a=e.f;if((a&B)!==0)return!0;if((a&ca)!==0){for(var n=e.deps,t=n.length,i=0;i<t;i++){var r=n[i];if(yn(r)&&Di(r),r.wv>e.wv)return!0}(a&Aa)!==0&&J===null&&H(e,F)}return!1}function or(e,a,n=!0){var t=e.reactions;if(t!==null&&!(Ka!==null&&Ka.has(e)))for(var i=0;i<t.length;i++){var r=t[i];(r.f&Y)!==0?or(r,a,!1):a===r&&(n?H(r,B):(r.f&F)!==0&&H(r,ca),Lt(r))}}function hr(e){var a=sa,n=da,t=fa,i=S,r=Ka,l=la,s=ja,o=be,u=e.f;sa=null,da=0,fa=null,S=(u&(Ta|le))===0?e:null,Ka=null,Le(e.ctx),ja=!1,be=++de,e.ac!==null&&(kn(()=>{e.ac.abort(gn)}),e.ac=null);try{e.f|=Bn;var h=e.fn,c=h();e.f|=Ne;var d=li(e);if($i()&&fa!==null&&!ja&&d!==null&&(e.f&(Y|ca|B))===0)for(var f=0;f<fa.length;f++)or(fa[f],e);if(i!==null&&i!==e){if(de++,i.deps!==null)for(let m=0;m<n;m+=1)i.deps[m].rv=de;if(a!==null)for(const m of a)m.rv=de;fa!==null&&(t===null?t=fa:t.push(...fa))}return(e.f&ie)!==0&&(e.f^=ie),c}catch(m){return li(e),Ls(m)}finally{e.f^=Bn,sa=a,da=n,fa=t,S=i,Ka=r,Le(l),ja=s,be=o}}function li(e){var i;var a=e.deps,n=v==null?void 0:v.is_fork;if(sa!==null){var t;if(n||hn(e,da),a!==null&&da>0)for(a.length=da+sa.length,t=0;t<sa.length;t++)a[da+t]=sa[t];else e.deps=a=sa;if(Bt()&&(e.f&Aa)!==0)for(t=da;t<a.length;t++)((i=a[t]).reactions??(i.reactions=[])).push(e)}else!n&&a!==null&&da<a.length&&(hn(e,da),a.length=da);return a}function Ks(e,a){let n=a.reactions;if(n!==null){var t=Or.call(n,e);if(t!==-1){var i=n.length-1;i===0?n=a.reactions=null:(n[t]=n[i],n.pop())}}if(n===null&&(a.f&Y)!==0&&(sa===null||!un.call(sa,a))){var r=a;(r.f&Aa)!==0&&(r.f^=Aa),r.v!==O&&Rt(r),r.ac!==null&&kn(()=>{r.ac.abort(gn),r.ac=null,H(r,B)}),As(r),hn(r,0)}}function hn(e,a){var n=e.deps;if(n!==null)for(var t=a;t<n.length;t++)Ks(e,n[t])}function De(e){var a=e.f;if((a&V)===0){H(e,F);var n=E;E=e;try{(a&(Sa|ji))!==0?Os(e):Nt(e),er(e);var t=hr(e);e.teardown=typeof t=="function"?t:null,e.wv=lr;var i;vi&&gs&&(e.f&B)!==0&&e.deps}finally{E=n}}}async function Ws(){await Promise.resolve(),Es()}function k(e){var a=e.f,n=(a&Y)!==0;if(S!==null&&!ja){var t=E!==null&&(E.f&V)!==0;if(!t&&(Ka===null||!Ka.has(e))){var i=S.deps;if((S.f&Bn)!==0)e.rv<de&&(e.rv=de,sa===null&&i!==null&&i[da]===e?da++:sa===null?sa=[e]:sa.push(e));else{S.deps??(S.deps=[]),un.call(S.deps,e)||S.deps.push(e);var r=e.reactions;r===null?e.reactions=[S]:un.call(r,S)||r.push(S)}}}if(ue&&Fa.has(e))return Fa.get(e);if(n){var l=e;if(ue){var s=l.v;return((l.f&F)===0&&l.reactions!==null||dr(l))&&(s=$t(l)),Fa.set(l,s),s}var o=(l.f&Aa)===0&&!ja&&S!==null&&(S.f&Aa)!==0,u=(l.f&Ne)===0;yn(l)&&(o&&(l.f|=Aa),Di(l)),o&&!u&&(Ni(l),pr(l))}if(J!=null&&J.has(e))return J.get(e);if((e.f&ie)!==0)throw e.v;return e.v}function pr(e){if(e.f|=Aa,e.deps!==null)for(const n of e.deps){var a=n.reactions;a===null?n.reactions=[e]:un.call(a,e)||a.push(e),(n.f&Y)!==0&&(n.f&Aa)===0&&(Ni(n),pr(n))}}function dr(e){if(e.v===O)return!0;if(e.deps===null)return!1;for(const a of e.deps)if(Fa.has(a)||(a.f&Y)!==0&&dr(a))return!0;return!1}function cr(e){var a=ja;try{return ja=!0,e()}finally{ja=a}}const qs=["touchstart","touchmove"];function Gs(e){return qs.includes(e)}const Sn=Symbol("events"),Js=new Set,ui=new Set;let tt=null,it=!1;function oi(e){var b,g;var a=this,n=a.ownerDocument,t=e.type,i=((b=e.composedPath)==null?void 0:b.call(e))||[],r=i[0]||e.target;tt=e,it||(it=!0,setTimeout(()=>{it=!1,tt=null}));var l=0,s=tt===e&&e[Sn];if(s){var o=i.indexOf(s);if(o!==-1&&(a===document||a===window)){e[Sn]=a;return}var u=i.indexOf(a);if(u===-1)return;o<=u&&(l=o)}if(r=i[l]||e.target,r!==a){wi(e,"currentTarget",{configurable:!0,get(){return r||n}});var h=S,c=E;ba(null),Wa(null);try{for(var d,f=[];r!==null&&r!==a;){try{var m=(g=r[Sn])==null?void 0:g[t];m!=null&&(!r.disabled||e.target===r)&&m.call(r,e)}catch(y){d?f.push(y):d=y}if(e.cancelBubble)break;l++,r=l<i.length?i[l]:null}if(d){for(let y of f)queueMicrotask(()=>{throw y});throw d}}finally{e[Sn]=a,delete e.currentTarget,ba(h),Wa(c)}}}var bi;const rt=((bi=globalThis==null?void 0:globalThis.window)==null?void 0:bi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Us(e){return(rt==null?void 0:rt.createHTML(e))??e}function Zs(e){var a=Qi("template");return a.innerHTML=Us(e.replaceAll("<!>","<!---->")),a.content}function pn(e,a){var n=E;n.nodes===null&&(n.nodes={start:e,end:a,a:null,t:null})}function ra(e,a){var n=(a&Xr)!==0,t=(a&as)!==0,i,r=!e.startsWith("<!>");return()=>{i===void 0&&(i=Zs(r?e:"<!>"+e),n||(i=Va(i)));var l=t||Ui?document.importNode(i,!0):i.cloneNode(!0);if(n){var s=Va(l),o=l.lastChild;pn(s,o)}else pn(l,l);return l}}function fr(){var e=document.createDocumentFragment(),a=document.createComment(""),n=se();return e.append(a,n),pn(a,n),e}function G(e,a){e!==null&&e.before(a)}function Vs(e){let a=0,n=ve(0),t;return()=>{Bt()&&(k(n),ar(()=>(a===0&&(t=cr(()=>e(()=>tn(n)))),a+=1,()=>{ne(()=>{a-=1,a===0&&(t==null||t(),t=void 0,tn(n))})})))}}var Ys=Me|ze;function Qs(e,a,n,t){new Xs(e,a,n,t)}var ma,Tt,ga,fe,Z,oa,na,ha,Na,me,ee,$e,cn,Za,qn,T,al,el,bt,ae,nl,yt,Ye,Cn,vt,_t;class Xs{constructor(a,n,t,i){j(this,T);w(this,"parent");w(this,"is_pending",!1);w(this,"transform_error");j(this,ma);j(this,Tt,null);j(this,ga);j(this,fe);j(this,Z);j(this,oa,null);j(this,na,null);j(this,ha,null);j(this,Na,null);j(this,me,0);j(this,ee,0);j(this,$e,!1);j(this,cn,new Map);j(this,Za,null);j(this,qn,Vs(()=>(x(this,Za,ve(p(this,me))),()=>{x(this,Za,null)})));var r;x(this,ma,a),x(this,ga,n),x(this,fe,l=>{var s=E;s.b=this,s.f|=ht,t(l)}),this.parent=E.b,this.transform_error=i??((r=this.parent)==null?void 0:r.transform_error)??(l=>l),x(this,Z,Dt(()=>{_(this,T,yt).call(this)},Ys))}defer_effect(a){Li(a,p(this,cn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!p(this,ga).pending}update_pending_count(a,n){_(this,T,vt).call(this,a,n),x(this,me,p(this,me)+a),!(!p(this,Za)||p(this,$e))&&(x(this,$e,!0),ne(()=>{x(this,$e,!1),p(this,Za)&&Be(p(this,Za),p(this,me))}))}get_effect_pending(){return p(this,qn).call(this),k(p(this,Za))}error(a){if(a===Ii||!p(this,ga).onerror&&!p(this,ga).failed)throw a;v!=null&&v.is_fork?(p(this,oa)&&v.skip_effect(p(this,oa)),p(this,na)&&v.skip_effect(p(this,na)),p(this,ha)&&v.skip_effect(p(this,ha)),v.oncommit(()=>{_(this,T,ae).call(this)||_(this,T,_t).call(this,a)})):_(this,T,_t).call(this,a)}}ma=new WeakMap,Tt=new WeakMap,ga=new WeakMap,fe=new WeakMap,Z=new WeakMap,oa=new WeakMap,na=new WeakMap,ha=new WeakMap,Na=new WeakMap,me=new WeakMap,ee=new WeakMap,$e=new WeakMap,cn=new WeakMap,Za=new WeakMap,qn=new WeakMap,T=new WeakSet,al=function(){try{x(this,oa,ka(()=>p(this,fe).call(this,p(this,ma))))}catch(a){this.error(a)}},el=function(a){const n=p(this,ga).failed,{reset:t,invoke_onerror:i}=_(this,T,bt).call(this,a);ne(i),n&&x(this,ha,ka(()=>{n(p(this,ma),()=>a,()=>t)}))},bt=function(a){var n=!1,t=!1;const i=()=>{if(!_(this,T,ae).call(this)){if(n){is();return}n=!0,t&&ms(),p(this,ha)!==null&&ke(p(this,ha),()=>{x(this,ha,null)}),_(this,T,Cn).call(this,()=>{_(this,T,yt).call(this)})}};return{reset:i,invoke_onerror:()=>{var l,s;if(!_(this,T,ae).call(this))try{t=!0,(s=(l=p(this,ga)).onerror)==null||s.call(l,a,i),t=!1}catch(o){Ha(o,p(this,Z)&&p(this,Z).parent)}}}},ae=function(){return(p(this,Z).f&(V|Mn))!==0},nl=function(){const a=p(this,ga).pending;a&&(this.is_pending=!0,x(this,na,ka(()=>a(p(this,ma)))),ne(()=>{if(!_(this,T,ae).call(this)){var n=x(this,Na,document.createDocumentFragment()),t=se(),i=!1;if(n.append(t),x(this,oa,_(this,T,Cn).call(this,()=>{try{return ka(()=>p(this,fe).call(this,t))}catch(r){try{this.error(r),i=!0}catch(l){Ha(l,p(this,Z).parent)}return null}})),p(this,oa)===null){x(this,Na,null),i&&_(this,T,Ye).call(this,v);return}p(this,ee)===0&&(p(this,ma).before(n),x(this,Na,null),ke(p(this,na),()=>{x(this,na,null)}),_(this,T,Ye).call(this,v))}}))},yt=function(){try{if(this.is_pending=this.has_pending_snippet(),x(this,ee,0),x(this,me,0),x(this,oa,ka(()=>{p(this,fe).call(this,p(this,ma))})),p(this,ee)>0){var a=x(this,Na,document.createDocumentFragment());zt(p(this,oa),a);const n=p(this,ga).pending;x(this,na,ka(()=>n(p(this,ma))))}else _(this,T,Ye).call(this,v)}catch(n){this.error(n)}},Ye=function(a){this.is_pending=!1,a.transfer_reactions(p(this,cn))},Cn=function(a){var n=E,t=S,i=la;Wa(p(this,Z)),ba(p(this,Z)),Le(p(this,Z).ctx);try{return ye.ensure(),a()}finally{Wa(n),ba(t),Le(i)}},vt=function(a,n){var t;if(!this.has_pending_snippet()){this.parent&&_(t=this.parent,T,vt).call(t,a,n);return}x(this,ee,p(this,ee)+a),p(this,ee)===0&&(_(this,T,Ye).call(this,n),p(this,na)&&ke(p(this,na),()=>{x(this,na,null)}),p(this,Na)&&(p(this,ma).before(p(this,Na)),x(this,Na,null)))},_t=function(a){p(this,oa)&&(ua(p(this,oa)),x(this,oa,null)),p(this,na)&&(ua(p(this,na)),x(this,na,null)),p(this,ha)&&(ua(p(this,ha)),x(this,ha,null));let n=p(this,ga).failed;const t=i=>{if(_(this,T,ae).call(this))return;const{reset:r,invoke_onerror:l}=_(this,T,bt).call(this,i);l(),n&&!_(this,T,ae).call(this)&&x(this,ha,_(this,T,Cn).call(this,()=>{try{return ka(()=>{var s=E;s.b=this,s.f|=ht,n(p(this,ma),()=>i,()=>r)})}catch(s){return Ha(s,p(this,Z).parent),null}}))};ne(()=>{if(!_(this,T,ae).call(this)){var i;try{i=this.transform_error(a)}catch(r){Ha(r,p(this,Z)&&p(this,Z).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(t,r=>Ha(r,p(this,Z)&&p(this,Z).parent)):t(i)}})};function z(e,a){var n=a==null?"":typeof a=="object"?`${a}`:a;n!==(e[Je]??(e[Je]=e.nodeValue))&&(e[Je]=n,e.nodeValue=`${n}`)}function tl(e,a){return il(e,a)}const jn=new Map;function il(e,{target:a,anchor:n,props:t={},events:i,context:r,intro:l=!0,transformError:s}){$s();var o=void 0,u=zs(()=>{var h=n??a.appendChild(se());Qs(h,{pending:()=>{}},f=>{Et({});var m=la;r&&(m.c=r),i&&(t.$$events=i),o=e(f,t)||Ci(),Pt()},s);var c=new Set,d=f=>{for(var m=0;m<f.length;m++){var b=f[m];if(!c.has(b)){c.add(b);var g=Gs(b);for(const $ of[a,document]){var y=jn.get($);y===void 0&&(y=new Map,jn.set($,y));var C=y.get(b);C===void 0?($.addEventListener(b,oi,{passive:g}),y.set(b,1)):y.set(b,C+1)}}}};return d(Jn(Js)),ui.add(d),()=>{var g;for(var f of c)for(const y of[a,document]){var m=jn.get(y),b=m.get(f);--b==0?(y.removeEventListener(f,oi),m.delete(f),m.size===0&&jn.delete(y)):m.set(f,b)}ui.delete(d),h!==n&&((g=h.parentNode)==null||g.removeChild(h))}});return rl.set(o,u),o}let rl=new WeakMap;var wa,za,pa,ge,fn,mn,Gn;class sl{constructor(a,n=!0){w(this,"anchor");j(this,wa,new Map);j(this,za,new Map);j(this,pa,new Map);j(this,ge,new Set);j(this,fn,!0);j(this,mn,a=>{if(p(this,wa).has(a)){var n=p(this,wa).get(a),t=p(this,za).get(n);if(t)zn(t),p(this,ge).delete(n);else{var i=p(this,pa).get(n);i&&(zn(i.effect),p(this,za).set(n,i.effect),p(this,pa).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),t=i.effect)}for(const[r,l]of p(this,wa)){if(p(this,wa).delete(r),r===a)break;const s=p(this,pa).get(l);s&&(ua(s.effect),p(this,pa).delete(l))}for(const[r,l]of p(this,za)){if(r===n||p(this,ge).has(r))continue;const s=()=>{if(Array.from(p(this,wa).values()).includes(r)){var u=document.createDocumentFragment();zt(l,u),u.append(se()),p(this,pa).set(r,{effect:l,fragment:u})}else ua(l);p(this,ge).delete(r),p(this,za).delete(r)};p(this,fn)||!t?(p(this,ge).add(r),ke(l,s,!1)):s()}}});j(this,Gn,a=>{p(this,wa).delete(a);const n=Array.from(p(this,wa).values());for(const[t,i]of p(this,pa))n.includes(t)||(ua(i.effect),p(this,pa).delete(t))});this.anchor=a,x(this,fn,n)}ensure(a,n){var t=v,i=Yi();if(n&&!p(this,za).has(a)&&!p(this,pa).has(a))if(i){var r=document.createDocumentFragment(),l=se();r.append(l),p(this,pa).set(a,{effect:ka(()=>n(l)),fragment:r})}else p(this,za).set(a,ka(()=>n(this.anchor)));if(p(this,wa).set(t,a),i){for(const[s,o]of p(this,za))s===a?t.unskip_effect(o):t.skip_effect(o);for(const[s,o]of p(this,pa))s===a?t.unskip_effect(o.effect):t.skip_effect(o.effect);t.oncommit(p(this,mn)),t.ondiscard(p(this,Gn))}else p(this,mn).call(this,t)}}wa=new WeakMap,za=new WeakMap,pa=new WeakMap,ge=new WeakMap,fn=new WeakMap,mn=new WeakMap,Gn=new WeakMap;function te(e,a,n=!1){var t=new sl(e),i=n?Me:0;function r(l,s){t.ensure(l,s)}Dt(()=>{var l=!1;a((s,o=0)=>{l=!0,r(o,s)}),l||r(-1,null)},i)}function An(e,a){return a}function ll(e,a,n){for(var t=[],i=a.length,r,l=a.length,s=0;s<i;s++){let c=a[s];ke(c,()=>{if(r){if(r.pending.delete(c),r.done.add(c),r.pending.size===0){var d=e.outrogroups;wt(e,Jn(r.done)),d.delete(r),d.size===0&&(e.outrogroups=null)}}else l-=1},!1)}if(l===0){var o=t.length===0&&n!==null&&e.pending.size===0;if(o){var u=n,h=u.parentNode;Ms(h),h.append(u),e.items.clear()}wt(e,a,!o)}else r={pending:new Set(a),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(r)}function wt(e,a,n=!0){var t;if(e.pending.size>0){t=new Set;for(const l of e.pending.values())for(const s of l)t.add(e.items.get(s).e)}for(var i=0;i<a.length;i++){var r=a[i];if(t!=null&&t.has(r)){r.f|=Oa;const l=document.createDocumentFragment();zt(r,l)}else ua(a[i],n)}}var hi;function Tn(e,a,n,t,i,r=null){var l=e,s=new Map,o=(a&Ti)!==0;if(o){var u=e;l=u.appendChild(se())}var h=null,c=Ss(()=>{var C=n();return _i(C)?C:C==null?[]:Jn(C)}),d=new Map,f=!0;function m(C){if((y.effect.f&V)===0){y.pending.delete(C);var $=k(c);y.fallback=h,ul(y,$,l,a,t),h!==null&&($.length===0?(h.f&Oa)===0?zn(h):(h.f^=Oa,Qe(h,null,l)):ke(h,()=>{h=null}))}}function b(C){y.pending.delete(C)}var g=Dt(()=>{for(var C=k(c),$=C.length,N=new Set,K=v,Q=Yi(),D=0;D<$;D+=1){var ya=C[D],Ia=t(ya,D),U=f?null:s.get(Ia);U?(U.v&&Be(U.v,ya),U.i&&Be(U.i,D),Q&&K.unskip_effect(U.e)):(U=ol(s,f?l:hi??(hi=se()),ya,Ia,D,i,a,n),f||(U.e.f|=Oa),s.set(Ia,U)),N.add(Ia)}if($===0&&r&&!h&&(f?h=ka(()=>r(l)):(h=ka(()=>r(hi??(hi=se()))),h.f|=Oa)),$>N.size&&ls(),!f)if(d.set(K,N),Q){for(const[W,I]of s)N.has(W)||K.skip_effect(I.e);K.oncommit(m),K.ondiscard(b)}else m(K);k(c)}),y={effect:g,items:s,pending:d,outrogroups:null,fallback:h};f=!1}function We(e){for(;e!==null&&(e.f&Ta)===0;)e=e.next;return e}function ul(e,a,n,t,i){var U,W,I,L,X,Ea,Pa,Ra,Ca;var r=(t&Yr)!==0,l=a.length,s=e.items,o=We(e.effect.first),u,h=null,c,d=[],f=[],m,b,g,y;if(r)for(y=0;y<l;y+=1)m=a[y],b=i(m,y),g=s.get(b).e,(g.f&Oa)===0&&((W=(U=g.nodes)==null?void 0:U.a)==null||W.measure(),(c??(c=new Set)).add(g));for(y=0;y<l;y+=1){if(m=a[y],b=i(m,y),g=s.get(b).e,e.outrogroups!==null)for(const aa of e.outrogroups)aa.pending.delete(g),aa.done.delete(g);if((g.f&ia)!==0&&(zn(g),r&&((L=(I=g.nodes)==null?void 0:I.a)==null||L.unfix(),(c??(c=new Set)).delete(g))),(g.f&Oa)!==0)if(g.f^=Oa,g===o)Qe(g,null,n);else{var C=h?h.next:o;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),Xa(e,h,g),Xa(e,g,C),Qe(g,C,n),h=g,d=[],f=[],o=We(h.next);continue}if(g!==o){if(u!==void 0&&u.has(g)){if(d.length<f.length){var $=f[0],N;h=$.prev;var K=d[0],Q=d[d.length-1];for(N=0;N<d.length;N+=1)Qe(d[N],$,n);for(N=0;N<f.length;N+=1)u.delete(f[N]);Xa(e,K.prev,Q.next),Xa(e,h,K),Xa(e,Q,$),o=$,h=Q,y-=1,d=[],f=[]}else u.delete(g),Qe(g,o,n),Xa(e,g.prev,g.next),Xa(e,g,h===null?e.effect.first:h.next),Xa(e,h,g),h=g;continue}for(d=[],f=[];o!==null&&o!==g;)(u??(u=new Set)).add(o),f.push(o),o=We(o.next);if(o===null)continue}(g.f&Oa)===0&&d.push(g),h=g,o=We(g.next)}if(e.outrogroups!==null){for(const aa of e.outrogroups)aa.pending.size===0&&(wt(e,Jn(aa.done)),(X=e.outrogroups)==null||X.delete(aa));e.outrogroups.size===0&&(e.outrogroups=null)}if(o!==null||u!==void 0){var D=[];if(u!==void 0)for(g of u)(g.f&ia)===0&&D.push(g);for(;o!==null;)(o.f&ia)===0&&o!==e.fallback&&D.push(o),o=We(o.next);var ya=D.length;if(ya>0){var Ia=(t&Ti)!==0&&l===0?n:null;if(r){for(y=0;y<ya;y+=1)(Pa=(Ea=D[y].nodes)==null?void 0:Ea.a)==null||Pa.measure();for(y=0;y<ya;y+=1)(Ca=(Ra=D[y].nodes)==null?void 0:Ra.a)==null||Ca.fix()}ll(e,D,Ia)}}r&&ne(()=>{var aa,va;if(c!==void 0)for(g of c)(va=(aa=g.nodes)==null?void 0:aa.a)==null||va.apply()})}function ol(e,a,n,t,i,r,l,s){var o=(l&Zr)!==0?(l&Qr)===0?Rs(n,!1,!1):ve(n):null,u=(l&Vr)!==0?ve(i):null;return{v:o,i:u,e:ka(()=>(r(a,o??n,u??i,s),()=>{e.delete(t)}))}}function Qe(e,a,n){if(e.nodes)for(var t=e.nodes.start,i=e.nodes.end,r=a&&(a.f&Oa)===0?a.nodes.start:n;t!==null;){var l=bn(t);if(r.before(t),t===i)return;t=l}}function Xa(e,a,n){a===null?e.effect.first=n:a.next=n,n===null?e.effect.last=a:n.prev=a}function hl(e,a,n=!1,t=!1,i=!1,r=!1){var l=e,s="";if(n)var o=e;xa(()=>{var u=E;if(s!==(s=a()??"")){if(n){u.nodes=null,o.innerHTML=s,s!==""&&pn(Va(o),o.lastChild);return}if(u.nodes!==null&&(nr(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){var h=t?es:i?ns:void 0,c=Qi(t?"svg":i?"math":"template",h);c.innerHTML=s;var d=t||i?c:c.content;if(pn(Va(d),d.lastChild),t||i)for(;Va(d);)l.before(Va(d));else l.before(d)}}})}function pl(e,a,n){var t=e==null?"":""+e;return t===""?null:t}function dl(e,a){return e==null?null:String(e)}function pi(e,a,n,t,i,r){var l=e[pt];if(l!==n||l===void 0){var s=pl(n);s==null?e.removeAttribute("class"):e.className=s,e[pt]=n}return r}function Xe(e,a,n,t){var i=e[dt];if(i!==a){var r=dl(a);r==null?e.removeAttribute("style"):e.style.cssText=r,e[dt]=a}return t}const cl=Symbol("is custom element"),fl=Symbol("is html");function sn(e,a,n,t){var i=ml(e),r=i[a];r!==(i[a]=n)&&(n==null?e.removeAttribute(a):typeof n!="string"&&gl(e).has(a)?e[a]=n:e.setAttribute(a,n))}function ml(e){return e[En]??(e[En]={[cl]:e.nodeName.includes("-"),[fl]:e.namespaceURI===Ei})}var di=new Map;function gl(e){var a=e.getAttribute("is")||e.nodeName,n=di.get(a);if(n)return n;di.set(a,n=new Set);for(var t,i=e,r=Element.prototype;r!==i;){t=Fr(i);for(var l in t)t[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&n.add(l);i=xi(i)}return n}function kl(e,a,n=a){var t=new WeakSet;vs(e,"input",async i=>{var r=i?e.defaultValue:e.value;if(r=st(e)?lt(r):r,n(r),v!==null&&t.add(v),await Ws(),r!==(r=a())){var l=e.selectionStart,s=e.selectionEnd,o=e.value.length;if(e.value=r??"",s!==null){var u=e.value.length;l===s&&s===o&&u>o?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(s,u))}}}),cr(a)==null&&e.value&&(n(st(e)?lt(e.value):e.value),v!==null&&t.add(v)),ar(()=>{var i=a();if(e===document.activeElement){var r=v;if(t.has(r))return}st(e)&&i===lt(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function st(e){var a=e.type;return a==="number"||a==="range"}function lt(e){return e===""?null:+e}const bl="5";var yi;typeof window<"u"&&((yi=window.__svelte??(window.__svelte={})).v??(yi.v=new Set)).add(bl);const yl=`---
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
`,_l=`---
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
`,wl=`---
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
`,Sl=`---
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
`,Tl=`---
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
`,Il=`---
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
`,El=`---
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
`,Pl=`---
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
`,Rl=`---
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

> A: Hello! What's your name?
> B: Hi! My name is Budi. What's your name?
> A: I'm Sari. Nice to meet you, Budi.
> B: Nice to meet you too, Sari. Where are you from?
> A: I'm from Yogyakarta. And you?
> B: I'm from Bantul.

## Latihan hari ini

Perkenalkan dirimu dalam bahasa Inggris, cukup 3 kalimat. Contoh polanya:

1. Hello, my name is [namamu].
2. I'm from [kotamu].
3. Nice to meet you!

Coba ucapkan dengan suara keras tiga kali.
`,Cl=`---
lang: en
number: 3
date: 2026-11-10
title: Angka, Hari, dan Waktu
subtitle: Numbers, Days & Telling Time
keywords: angka numbers hari days waktu telling time jam
---

Kemarin kita sudah bisa menyapa dan memperkenalkan diri. Hari ini kita belajar tiga hal yang dipakai setiap hari: berhitung, menyebut hari, dan menanyakan jam.

## 1. Angka (Numbers)

| Angka | English | Dibaca | Angka | English | Dibaca |
|-------|---------|--------|-------|---------|--------|
| 1 | one | wan | 11 | eleven | e-le-vn |
| 2 | two | tu | 12 | twelve | twelf |
| 3 | three | thri | 13 | thirteen | ther-TIIN |
| 4 | four | for | 14 | fourteen | for-TIIN |
| 5 | five | faiv | 15 | fifteen | fif-TIIN |
| 6 | six | siks | 16 | sixteen | siks-TIIN |
| 7 | seven | se-vn | 17 | seventeen | se-vn-TIIN |
| 8 | eight | eit | 18 | eighteen | ei-TIIN |
| 9 | nine | nain | 19 | nineteen | nain-TIIN |
| 10 | ten | ten | 20 | twenty | twen-ti |

Pola yang perlu diingat: akhiran **-teen** artinya belasan, akhiran **-ty** artinya puluhan. Ini jebakan klasik:

- thirteen (13) dibaca "ther-TIIN" — tekanannya di akhir
- thirty (30) dibaca "THER-ti" — tekanannya di awal

Lanjut puluhan: 30 thirty, 40 forty, 50 fifty, 60 sixty, 70 seventy, 80 eighty, 90 ninety, 100 one hundred, 1.000 one thousand. Angka gabungan tinggal dirangkai: 21 twenty-one, 25 twenty-five, 47 forty-seven.

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
`,$l=`---
lang: fr
number: 1
date: 2026-11-10
title: Alfabet & Pelafalan Dasar
subtitle: Huruf, aksen, bunyi nasal & liaison
keywords: alfabet alphabet pelafalan pronunciation aksen nasal liaison e muet
---

Bonjour! Selamat datang di pelajaran bahasa Prancis pertamamu. Sebelum belajar kata dan kalimat, kita kenali dulu "bunyi" bahasa Prancis. Kabar baiknya: alfabet Prancis sama dengan alfabet Indonesia (A–Z), tapi beberapa huruf dibaca beda. Sekali paham polanya, membaca bahasa Prancis jadi jauh lebih mudah.

## 1. Huruf yang dibaca beda dari tulisannya

- e di akhir kata → tidak dibunyi (e muet): le = "luh", je = "zhuh"
- h di awal kata → tidak dibunyi: homme = "omm", hôtel = "otel"
- s di akhir kata → biasanya tidak dibunyi: les = "le", Paris = "Pa-RI"
- -ent di akhir kata kerja → tidak dibunyi: ils parlent = "il parl"

## 2. Aksen: tanda kecil yang mengubah bunyi

- é → bunyi "e" terbuka: café = "ka-FE"
- è / ê → bunyi "e" seperti "bebek": père = "per"
- ç → bunyi "s": français = "fran-SE", garçon = "gar-SON"

## 3. Bunyi nasal: an, en, in, on

- an/en → seperti "ong": enfant = "ong-FONG", dans = "dong"
- in → seperti "eng": vin = "veng", matin = "ma-TENG"
- on → seperti "ong" bulat: bonjour = "bong-ZHUR", maison = "me-ZONG"

## 4. Liaison: kata yang menyambung

- les amis = "le-za-MI" — s pada les hidup dan menyambung
- nous avons = "nu-za-VONG"

## Contoh kalimat

- Bonjour ! = "bong-ZHUR" — Halo!
- Je m'appelle Marie. = "zhuh ma-PEL ma-RI" — Nama saya Marie.
- Merci beaucoup ! = "mer-SI bo-KU" — Terima kasih banyak!
- Le café est bon. = "luh ka-FE e bong" — Kopinya enak.

## Latihan hari ini (5 menit)

Bacalah keras-keras 3x, lalu tulis cara bacanya:

1. français
2. enfant
3. bonjour
4. les amis
5. merci

**Jawaban:** 1. fran-SE · 2. ong-FONG · 3. bong-ZHUR · 4. le-za-MI · 5. mer-SI
`;function Ht(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var we=Ht();function mr(e){we=e}var ln={exec:()=>null};function P(e,a=""){let n=typeof e=="string"?e:e.source;const t={replace:(i,r)=>{let l=typeof r=="string"?r:r.source;return l=l.replace(ta.caret,"$1"),n=n.replace(i,l),t},getRegex:()=>new RegExp(n,a)};return t}var ta={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Ml=/^(?:[ \t]*(?:\n|$))+/,Ll=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Bl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,vn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Dl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ot=/(?:[*+-]|\d{1,9}[.)])/,gr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,kr=P(gr).replace(/bull/g,Ot).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Nl=P(gr).replace(/bull/g,Ot).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ft=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,zl=/^[^\n]+/,Kt=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Hl=P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Kt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ol=P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ot).getRegex(),Zn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Fl=P("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Wt).replace("tag",Zn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),br=P(Ft).replace("hr",vn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zn).getRegex(),Kl=P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",br).getRegex(),qt={blockquote:Kl,code:Ll,def:Hl,fences:Bl,heading:Dl,hr:vn,html:Fl,lheading:kr,list:Ol,newline:Ml,paragraph:br,table:ln,text:zl},ci=P("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",vn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zn).getRegex(),Wl={...qt,lheading:Nl,table:ci,paragraph:P(Ft).replace("hr",vn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ci).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zn).getRegex()},ql={...qt,html:P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ln,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:P(Ft).replace("hr",vn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",kr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,yr=/^( {2,}|\\)\n(?!\s*$)/,Ul=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Vn=/[\p{P}\p{S}]/u,Gt=/[\s\p{P}\p{S}]/u,vr=/[^\s\p{P}\p{S}]/u,Zl=P(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Gt).getRegex(),_r=/(?!~)[\p{P}\p{S}]/u,Vl=/(?!~)[\s\p{P}\p{S}]/u,Yl=/(?:[^\s\p{P}\p{S}]|~)/u,Ql=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,wr=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Xl=P(wr,"u").replace(/punct/g,Vn).getRegex(),au=P(wr,"u").replace(/punct/g,_r).getRegex(),xr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",eu=P(xr,"gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,Gt).replace(/punct/g,Vn).getRegex(),nu=P(xr,"gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,Vl).replace(/punct/g,_r).getRegex(),tu=P("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,vr).replace(/punctSpace/g,Gt).replace(/punct/g,Vn).getRegex(),iu=P(/\\(punct)/,"gu").replace(/punct/g,Vn).getRegex(),ru=P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),su=P(Wt).replace("(?:-->|$)","-->").getRegex(),lu=P("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",su).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Hn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,uu=P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Hn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sr=P(/^!?\[(label)\]\[(ref)\]/).replace("label",Hn).replace("ref",Kt).getRegex(),jr=P(/^!?\[(ref)\](?:\[\])?/).replace("ref",Kt).getRegex(),ou=P("reflink|nolink(?!\\()","g").replace("reflink",Sr).replace("nolink",jr).getRegex(),Jt={_backpedal:ln,anyPunctuation:iu,autolink:ru,blockSkip:Ql,br:yr,code:Jl,del:ln,emStrongLDelim:Xl,emStrongRDelimAst:eu,emStrongRDelimUnd:tu,escape:Gl,link:uu,nolink:jr,punctuation:Zl,reflink:Sr,reflinkSearch:ou,tag:lu,text:Ul,url:ln},hu={...Jt,link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",Hn).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Hn).getRegex()},xt={...Jt,emStrongRDelimAst:nu,emStrongLDelim:au,url:P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},pu={...xt,br:P(yr).replace("{2,}","*").getRegex(),text:P(xt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},In={normal:qt,gfm:Wl,pedantic:ql},qe={normal:Jt,gfm:xt,breaks:pu,pedantic:hu},du={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fi=e=>du[e];function $a(e,a){if(a){if(ta.escapeTest.test(e))return e.replace(ta.escapeReplace,fi)}else if(ta.escapeTestNoEncode.test(e))return e.replace(ta.escapeReplaceNoEncode,fi);return e}function mi(e){try{e=encodeURI(e).replace(ta.percentDecode,"%")}catch{return null}return e}function gi(e,a){var r;const n=e.replace(ta.findPipe,(l,s,o)=>{let u=!1,h=s;for(;--h>=0&&o[h]==="\\";)u=!u;return u?"|":" |"}),t=n.split(ta.splitPipe);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!((r=t.at(-1))!=null&&r.trim())&&t.pop(),a)if(t.length>a)t.splice(a);else for(;t.length<a;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(ta.slashPipe,"|");return t}function Ge(e,a,n){const t=e.length;if(t===0)return"";let i=0;for(;i<t&&e.charAt(t-i-1)===a;)i++;return e.slice(0,t-i)}function cu(e,a){if(e.indexOf(a[1])===-1)return-1;let n=0;for(let t=0;t<e.length;t++)if(e[t]==="\\")t++;else if(e[t]===a[0])n++;else if(e[t]===a[1]&&(n--,n<0))return t;return n>0?-2:-1}function ki(e,a,n,t,i){const r=a.href,l=a.title||null,s=e[1].replace(i.other.outputLinkReplace,"$1");t.state.inLink=!0;const o={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:r,title:l,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,o}function fu(e,a,n){const t=e.match(n.other.indentCodeCompensation);if(t===null)return a;const i=t[1];return a.split(`
`).map(r=>{const l=r.match(n.other.beginningSpace);if(l===null)return r;const[s]=l;return s.length>=i.length?r.slice(i.length):r}).join(`
`)}var On=class{constructor(e){w(this,"options");w(this,"rules");w(this,"lexer");this.options=e||we}space(e){const a=this.rules.block.newline.exec(e);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(e){const a=this.rules.block.code.exec(e);if(a){const n=a[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ge(n,`
`)}}}fences(e){const a=this.rules.block.fences.exec(e);if(a){const n=a[0],t=fu(n,a[3]||"",this.rules);return{type:"code",raw:n,lang:a[2]?a[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):a[2],text:t}}}heading(e){const a=this.rules.block.heading.exec(e);if(a){let n=a[2].trim();if(this.rules.other.endingHash.test(n)){const t=Ge(n,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(n=t.trim())}return{type:"heading",raw:a[0],depth:a[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const a=this.rules.block.hr.exec(e);if(a)return{type:"hr",raw:Ge(a[0],`
`)}}blockquote(e){const a=this.rules.block.blockquote.exec(e);if(a){let n=Ge(a[0],`
`).split(`
`),t="",i="";const r=[];for(;n.length>0;){let l=!1;const s=[];let o;for(o=0;o<n.length;o++)if(this.rules.other.blockquoteStart.test(n[o]))s.push(n[o]),l=!0;else if(!l)s.push(n[o]);else break;n=n.slice(o);const u=s.join(`
`),h=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${u}`:u,i=i?`${i}
${h}`:h;const c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,r,!0),this.lexer.state.top=c,n.length===0)break;const d=r.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){const f=d,m=f.raw+`
`+n.join(`
`),b=this.blockquote(m);r[r.length-1]=b,t=t.substring(0,t.length-f.raw.length)+b.raw,i=i.substring(0,i.length-f.text.length)+b.text;break}else if((d==null?void 0:d.type)==="list"){const f=d,m=f.raw+`
`+n.join(`
`),b=this.list(m);r[r.length-1]=b,t=t.substring(0,t.length-d.raw.length)+b.raw,i=i.substring(0,i.length-f.raw.length)+b.raw,n=m.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:r,text:i}}}list(e){let a=this.rules.block.list.exec(e);if(a){let n=a[1].trim();const t=n.length>1,i={type:"list",raw:"",ordered:t,start:t?+n.slice(0,-1):"",loose:!1,items:[]};n=t?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=t?n:"[*+-]");const r=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let o=!1,u="",h="";if(!(a=r.exec(e))||this.rules.block.hr.test(e))break;u=a[0],e=e.substring(u.length);let c=a[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),d=e.split(`
`,1)[0],f=!c.trim(),m=0;if(this.options.pedantic?(m=2,h=c.trimStart()):f?m=a[1].length+1:(m=a[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,h=c.slice(m),m+=a[1].length),f&&this.rules.other.blankLine.test(d)&&(u+=d+`
`,e=e.substring(d.length+1),o=!0),!o){const y=this.rules.other.nextBulletRegex(m),C=this.rules.other.hrRegex(m),$=this.rules.other.fencesBeginRegex(m),N=this.rules.other.headingBeginRegex(m),K=this.rules.other.htmlBeginRegex(m);for(;e;){const Q=e.split(`
`,1)[0];let D;if(d=Q,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),D=d):D=d.replace(this.rules.other.tabCharGlobal,"    "),$.test(d)||N.test(d)||K.test(d)||y.test(d)||C.test(d))break;if(D.search(this.rules.other.nonSpaceChar)>=m||!d.trim())h+=`
`+D.slice(m);else{if(f||c.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||$.test(c)||N.test(c)||C.test(c))break;h+=`
`+d}!f&&!d.trim()&&(f=!0),u+=Q+`
`,e=e.substring(Q.length+1),c=D.slice(m)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let b=null,g;this.options.gfm&&(b=this.rules.other.listIsTask.exec(h),b&&(g=b[0]!=="[ ] ",h=h.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:u,task:!!b,checked:g,loose:!1,text:h,tokens:[]}),i.raw+=u}const s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let o=0;o<i.items.length;o++)if(this.lexer.state.top=!1,i.items[o].tokens=this.lexer.blockTokens(i.items[o].text,[]),!i.loose){const u=i.items[o].tokens.filter(c=>c.type==="space"),h=u.length>0&&u.some(c=>this.rules.other.anyLine.test(c.raw));i.loose=h}if(i.loose)for(let o=0;o<i.items.length;o++)i.items[o].loose=!0;return i}}html(e){const a=this.rules.block.html.exec(e);if(a)return{type:"html",block:!0,raw:a[0],pre:a[1]==="pre"||a[1]==="script"||a[1]==="style",text:a[0]}}def(e){const a=this.rules.block.def.exec(e);if(a){const n=a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=a[2]?a[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=a[3]?a[3].substring(1,a[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):a[3];return{type:"def",tag:n,raw:a[0],href:t,title:i}}}table(e){var l;const a=this.rules.block.table.exec(e);if(!a||!this.rules.other.tableDelimiter.test(a[2]))return;const n=gi(a[1]),t=a[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(l=a[3])!=null&&l.trim()?a[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:a[0],header:[],align:[],rows:[]};if(n.length===t.length){for(const s of t)this.rules.other.tableAlignRight.test(s)?r.align.push("right"):this.rules.other.tableAlignCenter.test(s)?r.align.push("center"):this.rules.other.tableAlignLeft.test(s)?r.align.push("left"):r.align.push(null);for(let s=0;s<n.length;s++)r.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:r.align[s]});for(const s of i)r.rows.push(gi(s,r.header.length).map((o,u)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[u]})));return r}}lheading(e){const a=this.rules.block.lheading.exec(e);if(a)return{type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:this.lexer.inline(a[1])}}paragraph(e){const a=this.rules.block.paragraph.exec(e);if(a){const n=a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const a=this.rules.block.text.exec(e);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(e){const a=this.rules.inline.escape.exec(e);if(a)return{type:"escape",raw:a[0],text:a[1]}}tag(e){const a=this.rules.inline.tag.exec(e);if(a)return!this.lexer.state.inLink&&this.rules.other.startATag.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:a[0]}}link(e){const a=this.rules.inline.link.exec(e);if(a){const n=a[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const r=Ge(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=cu(a[2],"()");if(r===-2)return;if(r>-1){const s=(a[0].indexOf("!")===0?5:4)+a[1].length+r;a[2]=a[2].substring(0,r),a[0]=a[0].substring(0,s).trim(),a[3]=""}}let t=a[2],i="";if(this.options.pedantic){const r=this.rules.other.pedanticHrefTitle.exec(t);r&&(t=r[1],i=r[3])}else i=a[3]?a[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?t=t.slice(1):t=t.slice(1,-1)),ki(a,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},a[0],this.lexer,this.rules)}}reflink(e,a){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const t=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=a[t.toLowerCase()];if(!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return ki(n,i,n[0],this.lexer,this.rules)}}emStrong(e,a,n=""){let t=this.rules.inline.emStrongLDelim.exec(e);if(!t||t[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(t[1]||t[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...t[0]].length-1;let l,s,o=r,u=0;const h=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,a=a.slice(-1*e.length+r);(t=h.exec(a))!=null;){if(l=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!l)continue;if(s=[...l].length,t[3]||t[4]){o+=s;continue}else if((t[5]||t[6])&&r%3&&!((r+s)%3)){u+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+u);const c=[...t[0]][0].length,d=e.slice(0,r+t.index+c+s);if(Math.min(r,s)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const a=this.rules.inline.code.exec(e);if(a){let n=a[2].replace(this.rules.other.newLineCharGlobal," ");const t=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return t&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:a[0],text:n}}}br(e){const a=this.rules.inline.br.exec(e);if(a)return{type:"br",raw:a[0]}}del(e){const a=this.rules.inline.del.exec(e);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2])}}autolink(e){const a=this.rules.inline.autolink.exec(e);if(a){let n,t;return a[2]==="@"?(n=a[1],t="mailto:"+n):(n=a[1],t=n),{type:"link",raw:a[0],text:n,href:t,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let a;if(a=this.rules.inline.url.exec(e)){let t,i;if(a[2]==="@")t=a[0],i="mailto:"+t;else{let r;do r=a[0],a[0]=((n=this.rules.inline._backpedal.exec(a[0]))==null?void 0:n[0])??"";while(r!==a[0]);t=a[0],a[1]==="www."?i="http://"+a[0]:i=a[0]}return{type:"link",raw:a[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(e){const a=this.rules.inline.text.exec(e);if(a){const n=this.lexer.state.inRawBlock;return{type:"text",raw:a[0],text:a[0],escaped:n}}}},Ya=class St{constructor(a){w(this,"tokens");w(this,"options");w(this,"state");w(this,"tokenizer");w(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=a||we,this.options.tokenizer=this.options.tokenizer||new On,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:ta,block:In.normal,inline:qe.normal};this.options.pedantic?(n.block=In.pedantic,n.inline=qe.pedantic):this.options.gfm&&(n.block=In.gfm,this.options.breaks?n.inline=qe.breaks:n.inline=qe.gfm),this.tokenizer.rules=n}static get rules(){return{block:In,inline:qe}}static lex(a,n){return new St(n).lex(a)}static lexInline(a,n){return new St(n).inlineTokens(a)}lex(a){a=a.replace(ta.carriageReturn,`
`),this.blockTokens(a,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const t=this.inlineQueue[n];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(a,n=[],t=!1){var i,r,l;for(this.options.pedantic&&(a=a.replace(ta.tabCharGlobal,"    ").replace(ta.spaceLine,""));a;){let s;if((r=(i=this.options.extensions)==null?void 0:i.block)!=null&&r.some(u=>(s=u.call({lexer:this},a,n))?(a=a.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.space(a)){a=a.substring(s.raw.length);const u=n.at(-1);s.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(a)){a=a.substring(s.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.at(-1).src=u.text):n.push(s);continue}if(s=this.tokenizer.fences(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(a)){a=a.substring(s.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(a)){a=a.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(a)){a=a.substring(s.raw.length),n.push(s);continue}let o=a;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const h=a.slice(1);let c;this.options.extensions.startBlock.forEach(d=>{c=d.call({lexer:this},h),typeof c=="number"&&c>=0&&(u=Math.min(u,c))}),u<1/0&&u>=0&&(o=a.substring(0,u+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){const u=n.at(-1);t&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(s),t=o.length!==a.length,a=a.substring(s.raw.length);continue}if(s=this.tokenizer.text(a)){a=a.substring(s.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(s);continue}if(a){const u="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(a,n=[]){return this.inlineQueue.push({src:a,tokens:n}),n}inlineTokens(a,n=[]){var s,o,u;let t=a,i=null;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)h.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,i.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)t=t.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,l="";for(;a;){r||(l=""),r=!1;let h;if((o=(s=this.options.extensions)==null?void 0:s.inline)!=null&&o.some(d=>(h=d.call({lexer:this},a,n))?(a=a.substring(h.raw.length),n.push(h),!0):!1))continue;if(h=this.tokenizer.escape(a)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.tag(a)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.link(a)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.reflink(a,this.tokens.links)){a=a.substring(h.raw.length);const d=n.at(-1);h.type==="text"&&(d==null?void 0:d.type)==="text"?(d.raw+=h.raw,d.text+=h.text):n.push(h);continue}if(h=this.tokenizer.emStrong(a,t,l)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.codespan(a)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.br(a)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.del(a)){a=a.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.autolink(a)){a=a.substring(h.raw.length),n.push(h);continue}if(!this.state.inLink&&(h=this.tokenizer.url(a))){a=a.substring(h.raw.length),n.push(h);continue}let c=a;if((u=this.options.extensions)!=null&&u.startInline){let d=1/0;const f=a.slice(1);let m;this.options.extensions.startInline.forEach(b=>{m=b.call({lexer:this},f),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(c=a.substring(0,d+1))}if(h=this.tokenizer.inlineText(c)){a=a.substring(h.raw.length),h.raw.slice(-1)!=="_"&&(l=h.raw.slice(-1)),r=!0;const d=n.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=h.raw,d.text+=h.text):n.push(h);continue}if(a){const d="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}},Fn=class{constructor(e){w(this,"options");w(this,"parser");this.options=e||we}space(e){return""}code({text:e,lang:a,escaped:n}){var r;const t=(r=(a||"").match(ta.notSpaceStart))==null?void 0:r[0],i=e.replace(ta.endingNewline,"")+`
`;return t?'<pre><code class="language-'+$a(t)+'">'+(n?i:$a(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:$a(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:a}){return`<h${a}>${this.parser.parseInline(e)}</h${a}>
`}hr(e){return`<hr>
`}list(e){const a=e.ordered,n=e.start;let t="";for(let l=0;l<e.items.length;l++){const s=e.items[l];t+=this.listitem(s)}const i=a?"ol":"ul",r=a&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+t+"</"+i+`>
`}listitem(e){var n;let a="";if(e.task){const t=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=t+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=t+" "+$a(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):a+=t+" "}return a+=this.parser.parse(e.tokens,!!e.loose),`<li>${a}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let a="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);a+=this.tablerow({text:n});let t="";for(let i=0;i<e.rows.length;i++){const r=e.rows[i];n="";for(let l=0;l<r.length;l++)n+=this.tablecell(r[l]);t+=this.tablerow({text:n})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+t+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const a=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+a+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${$a(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:a,tokens:n}){const t=this.parser.parseInline(n),i=mi(e);if(i===null)return t;e=i;let r='<a href="'+e+'"';return a&&(r+=' title="'+$a(a)+'"'),r+=">"+t+"</a>",r}image({href:e,title:a,text:n,tokens:t}){t&&(n=this.parser.parseInline(t,this.parser.textRenderer));const i=mi(e);if(i===null)return $a(n);e=i;let r=`<img src="${e}" alt="${n}"`;return a&&(r+=` title="${$a(a)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:$a(e.text)}},Ut=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Qa=class jt{constructor(a){w(this,"options");w(this,"renderer");w(this,"textRenderer");this.options=a||we,this.options.renderer=this.options.renderer||new Fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ut}static parse(a,n){return new jt(n).parse(a)}static parseInline(a,n){return new jt(n).parseInline(a)}parse(a,n=!0){var i,r;let t="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&r[s.type]){const u=s,h=this.options.extensions.renderers[u.type].call({parser:this},u);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){t+=h||"";continue}}const o=s;switch(o.type){case"space":{t+=this.renderer.space(o);continue}case"hr":{t+=this.renderer.hr(o);continue}case"heading":{t+=this.renderer.heading(o);continue}case"code":{t+=this.renderer.code(o);continue}case"table":{t+=this.renderer.table(o);continue}case"blockquote":{t+=this.renderer.blockquote(o);continue}case"list":{t+=this.renderer.list(o);continue}case"html":{t+=this.renderer.html(o);continue}case"paragraph":{t+=this.renderer.paragraph(o);continue}case"text":{let u=o,h=this.renderer.text(u);for(;l+1<a.length&&a[l+1].type==="text";)u=a[++l],h+=`
`+this.renderer.text(u);n?t+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h,escaped:!0}]}):t+=h;continue}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return t}parseInline(a,n=this.renderer){var i,r;let t="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&r[s.type]){const u=this.options.extensions.renderers[s.type].call({parser:this},s);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=u||"";continue}}const o=s;switch(o.type){case"escape":{t+=n.text(o);break}case"html":{t+=n.html(o);break}case"link":{t+=n.link(o);break}case"image":{t+=n.image(o);break}case"strong":{t+=n.strong(o);break}case"em":{t+=n.em(o);break}case"codespan":{t+=n.codespan(o);break}case"br":{t+=n.br(o);break}case"del":{t+=n.del(o);break}case"text":{t+=n.text(o);break}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return t}},ot,$n=(ot=class{constructor(e){w(this,"options");w(this,"block");this.options=e||we}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Ya.lex:Ya.lexInline}provideParser(){return this.block?Qa.parse:Qa.parseInline}},w(ot,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),ot),mu=class{constructor(...e){w(this,"defaults",Ht());w(this,"options",this.setOptions);w(this,"parse",this.parseMarkdown(!0));w(this,"parseInline",this.parseMarkdown(!1));w(this,"Parser",Qa);w(this,"Renderer",Fn);w(this,"TextRenderer",Ut);w(this,"Lexer",Ya);w(this,"Tokenizer",On);w(this,"Hooks",$n);this.use(...e)}walkTokens(e,a){var t,i;let n=[];for(const r of e)switch(n=n.concat(a.call(this,r)),r.type){case"table":{const l=r;for(const s of l.header)n=n.concat(this.walkTokens(s.tokens,a));for(const s of l.rows)for(const o of s)n=n.concat(this.walkTokens(o.tokens,a));break}case"list":{const l=r;n=n.concat(this.walkTokens(l.items,a));break}default:{const l=r;(i=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{const o=l[s].flat(1/0);n=n.concat(this.walkTokens(o,a))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,a)))}}return n}use(...e){const a=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const t={...n};if(t.async=this.defaults.async||t.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const r=a.renderers[i.name];r?a.renderers[i.name]=function(...l){let s=i.renderer.apply(this,l);return s===!1&&(s=r.apply(this,l)),s}:a.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=a[i.level];r?r.unshift(i.tokenizer):a[i.level]=[i.tokenizer],i.start&&(i.level==="block"?a.startBlock?a.startBlock.push(i.start):a.startBlock=[i.start]:i.level==="inline"&&(a.startInline?a.startInline.push(i.start):a.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(a.childTokens[i.name]=i.childTokens)}),t.extensions=a),n.renderer){const i=this.defaults.renderer||new Fn(this.defaults);for(const r in n.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const l=r,s=n.renderer[l],o=i[l];i[l]=(...u)=>{let h=s.apply(i,u);return h===!1&&(h=o.apply(i,u)),h||""}}t.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new On(this.defaults);for(const r in n.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const l=r,s=n.tokenizer[l],o=i[l];i[l]=(...u)=>{let h=s.apply(i,u);return h===!1&&(h=o.apply(i,u)),h}}t.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new $n;for(const r in n.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const l=r,s=n.hooks[l],o=i[l];$n.passThroughHooks.has(r)?i[l]=u=>{if(this.defaults.async)return Promise.resolve(s.call(i,u)).then(c=>o.call(i,c));const h=s.call(i,u);return o.call(i,h)}:i[l]=(...u)=>{let h=s.apply(i,u);return h===!1&&(h=o.apply(i,u)),h}}t.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,r=n.walkTokens;t.walkTokens=function(l){let s=[];return s.push(r.call(this,l)),i&&(s=s.concat(i.call(this,l))),s}}this.defaults={...this.defaults,...t}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,a){return Ya.lex(e,a??this.defaults)}parser(e,a){return Qa.parse(e,a??this.defaults)}parseMarkdown(e){return(n,t)=>{const i={...t},r={...this.defaults,...i},l=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const s=r.hooks?r.hooks.provideLexer():e?Ya.lex:Ya.lexInline,o=r.hooks?r.hooks.provideParser():e?Qa.parse:Qa.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(u=>s(u,r)).then(u=>r.hooks?r.hooks.processAllTokens(u):u).then(u=>r.walkTokens?Promise.all(this.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>o(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(l);try{r.hooks&&(n=r.hooks.preprocess(n));let u=s(n,r);r.hooks&&(u=r.hooks.processAllTokens(u)),r.walkTokens&&this.walkTokens(u,r.walkTokens);let h=o(u,r);return r.hooks&&(h=r.hooks.postprocess(h)),h}catch(u){return l(u)}}}onError(e,a){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const t="<p>An error occurred:</p><pre>"+$a(n.message+"",!0)+"</pre>";return a?Promise.resolve(t):t}if(a)return Promise.reject(n);throw n}}},_e=new mu;function R(e,a){return _e.parse(e,a)}R.options=R.setOptions=function(e){return _e.setOptions(e),R.defaults=_e.defaults,mr(R.defaults),R};R.getDefaults=Ht;R.defaults=we;R.use=function(...e){return _e.use(...e),R.defaults=_e.defaults,mr(R.defaults),R};R.walkTokens=function(e,a){return _e.walkTokens(e,a)};R.parseInline=_e.parseInline;R.Parser=Qa;R.parser=Qa.parse;R.Renderer=Fn;R.TextRenderer=Ut;R.Lexer=Ya;R.lexer=Ya.lex;R.Tokenizer=On;R.Hooks=$n;R.parse=R;R.options;R.setOptions;R.use;R.walkTokens;R.parseInline;Qa.parse;Ya.lex;const qa={cyber:{code:"cyber",name:"Cybersecurity",label:"Cybersecurity",accent:"#3a5a44",schedule:"Senin–Jumat · 07.00 WIB",next:"Keamanan HP"},fr:{code:"fr",name:"Français",label:"Bahasa Prancis",accent:"#2e4e6b",schedule:"Setiap hari · 07.30 WIB",next:"Sapaan & perkenalan"},en:{code:"en",name:"English",label:"Bahasa Inggris",accent:"#a85b38",schedule:"Setiap hari · 08.10 WIB",next:"Kata ganti & to be"},ai:{code:"ai",name:"AI Engineer",label:"AI Engineer",accent:"#8a6d2b",schedule:"Senin–Jumat · 10.30 WIB",next:"ML klasik dengan scikit-learn"}},ut=["cyber","fr","en","ai"],gu=Object.assign({"../../lessons/ai-01-apa-itu-ai-engineer.md":yl,"../../lessons/ai-02-python-untuk-ai.md":vl,"../../lessons/ai-03-matematika-untuk-ai.md":_l,"../../lessons/ai-04-cara-kerja-ml.md":wl,"../../lessons/cyber-01-apa-itu-cybersecurity.md":xl,"../../lessons/cyber-02-cia-triad.md":Sl,"../../lessons/cyber-03-jenis-ancaman.md":jl,"../../lessons/cyber-04-password-autentikasi.md":Al,"../../lessons/cyber-05-phishing.md":Tl,"../../lessons/cyber-06-malware.md":Il,"../../lessons/cyber-07-wifi.md":El,"../../lessons/en-01-alphabet.md":Pl,"../../lessons/en-02-greetings.md":Rl,"../../lessons/en-03-numbers-days-time.md":Cl,"../../lessons/fr-01-alphabet.md":$l});function ku(e){const a=e.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/),n={};let t=e;if(a){t=a[2];for(const i of a[1].split(`
`)){const r=i.indexOf(":");r>-1&&(n[i.slice(0,r).trim()]=i.slice(r+1).trim())}}return{lang:n.lang,number:Number(n.number),date:n.date,title:n.title,subtitle:n.subtitle||"",keywords:n.keywords||"",html:R.parse(t),slug:`${n.lang}-${n.number}`}}const Kn=Object.values(gu).map(ku).filter(e=>e.lang&&e.number&&e.date&&e.title).sort((e,a)=>e.date<a.date?-1:e.date>a.date?1:e.number-a.number);function At(e){return Kn.filter(a=>a.lang===e).sort((a,n)=>a.number-n.number)}function bu(e,a){return Kn.find(n=>n.lang===e&&n.number===Number(a))}function yu(e){const a=At(e.lang),n=a.findIndex(t=>t.number===e.number);return{prev:a[n-1]||null,next:a[n+1]||null}}const vu=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],_u=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];function wu(e){const[a,n,t]=e.split("-").map(Number);return`${t} ${vu[n-1]} ${a}`}function xu(e){const[a,n,t]=e.split("-").map(Number);return`${t} ${_u[n-1]} ${a}`}const Su="10 November 2026";var ju=ra('<p class="lesson-subtitle"> </p>'),Au=ra('<a><span class="nav-label">← Pelajaran sebelumnya</span> <span class="nav-title"> </span></a>'),Tu=ra("<span></span>"),Iu=ra('<a class="next-link"><span class="nav-label">Pelajaran berikutnya →</span> <span class="nav-title"> </span></a>'),Eu=ra('<a class="back-link"> </a> <p class="eyebrow"> </p> <h1 class="lesson-title"> </h1> <!> <p class="lesson-meta"> </p> <div class="lesson-body"></div> <nav class="lesson-nav"><!> <!></nav>',1),Pu=ra('<a class="back-link" href="#/">← Kembali ke semua pelajaran</a> <p class="empty">Pelajaran tidak ditemukan.</p>',1);function Ru(e,a){Et(a,!0);let n=La(()=>bu(a.lang,a.number)),t=La(()=>k(n)?qa[k(n).lang]:null),i=La(()=>k(n)?yu(k(n)):{prev:null,next:null});var r=fr(),l=rn(r);{var s=u=>{var h=Eu(),c=rn(h),d=q(c),f=M(c,2),m=q(f),b=M(f,2),g=q(b,!0),y=M(b,2);{var C=I=>{var L=ju(),X=q(L,!0);xa(()=>z(X,k(n).subtitle)),G(I,L)};te(y,I=>{k(n).subtitle&&I(C)})}var $=M(y,2),N=q($),K=M($,2);hl(K,()=>k(n).html,!0);var Q=M(K,2),D=ea(Q);{var ya=I=>{var L=Au(),X=M(ea(L),2),Ea=q(X);xa(()=>{sn(L,"href",`#/${k(i).prev.lang??""}/${k(i).prev.number??""}`),z(Ea,`#${k(i).prev.number??""} — ${k(i).prev.title??""}`)}),G(I,L)},Ia=I=>{var L=Tu();G(I,L)};te(D,I=>{k(i).prev?I(ya):I(Ia,-1)})}var U=M(D,2);{var W=I=>{var L=Iu(),X=M(ea(L),2),Ea=q(X);xa(()=>{sn(L,"href",`#/${k(i).next.lang??""}/${k(i).next.number??""}`),z(Ea,`#${k(i).next.number??""} — ${k(i).next.title??""}`)}),G(I,L)};te(U,I=>{k(i).next&&I(W)})}xa(I=>{sn(c,"href",`#/${k(n).lang??""}`),z(d,`← Semua pelajaran ${k(t).name??""}`),Xe(f,`color: ${k(t).accent??""}`),z(m,`${k(t).name??""} · Pelajaran #${k(n).number??""}`),z(g,k(n).title),z(N,`${I??""} · ${k(t).label??""} · ${k(t).schedule??""}`)},[()=>wu(k(n).date)]),G(u,h)},o=u=>{var h=Pu();G(u,h)};te(l,u=>{k(n)&&k(t)?u(s):u(o,-1)})}G(e,r),Pt()}var Cu=ra('<a> <span class="n"> </span></a>'),$u=ra('<p class="empty"> </p>'),Mu=ra('<a class="lesson-row"><span class="num"> </span> <span class="main"><span class="title"> </span> <span class="sub"> </span></span> <span class="date"> </span> <span class="arrow">→</span></a>'),Lu=ra('<section class="lang-section"><div class="lang-head"><h2> <span class="accent-dot"></span></h2> <span class="lang-meta"> <br/> </span></div> <!></section>'),Bu=ra('<div class="next-item"><div class="lang-name"> </div> <div class="topic"> </div> <div class="when"> </div></div>'),Du=ra('<section class="next-block"><h3>Selanjutnya</h3> <div class="next-grid"></div></section>'),Nu=ra("<!> <!>",1),zu=ra(`<header class="site-header"><div class="top"><a class="wordmark" href="#/">Polly<span>.</span></a> <span class="site-tag">Catatan belajar</span></div> <p class="intro">Semua pelajaran — cybersecurity, bahasa Prancis, bahasa Inggris, dan
        AI Engineer — dari hari pertama sampai hari ini. Bisa dicari dan
        dibaca ulang <em>kapan saja</em>.</p> <p class="count-line"> </p></header> <input class="search" type="search" placeholder="Cari pelajaran — mis. phishing, liaison, scikit-learn" aria-label="Cari pelajaran"/> <nav class="tabs"><a href="#/">Semua</a> <!></nav> <!>`,1),Hu=ra(`<div class="wrap"><!> <footer class="site-footer"><p>Polly — catatan belajar harian: cybersecurity, bahasa Prancis, bahasa
      Inggris, dan AI Engineer.</p> <p>Pelajaran baru ditambahkan ke halaman ini setelah dikirim di WhatsApp.</p></footer></div>`);function Ou(e,a){Et(a,!0);let n=Ma(Ae(window.location.hash));ii(()=>{const b=()=>{Ga(n,window.location.hash,!0)};return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)});function t(b){const g=b.replace(/^#\/?/,"").split("/").filter(Boolean),y=Object.keys(qa);return g.length===2&&y.includes(g[0])&&/^\d+$/.test(g[1])?{view:"lesson",lang:g[0],number:Number(g[1])}:g.length===1&&y.includes(g[0])?{view:"home",tab:g[0]}:{view:"home",tab:"all"}}let i=La(()=>t(k(n))),r=Ma("");ii(()=>{k(i).view,k(i).lang,k(i).number,window.scrollTo(0,0)});let l=La(()=>k(r).trim().toLowerCase());function s(b){return k(l)?[b.title,b.subtitle,b.keywords].join(" ").toLowerCase().includes(k(l)):!0}let o=La(()=>Kn.length),u=La(()=>k(i).tab==="all"?ut:[k(i).tab]),h=La(()=>Kn.some(s));var c=Hu(),d=ea(c);{var f=b=>{Ru(b,{get lang(){return k(i).lang},get number(){return k(i).number}})},m=b=>{var g=zu(),y=rn(g),C=M(ea(y),4),$=q(C),N=M(y,2),K=M(N,2),Q=ea(K),D=M(Q,2);Tn(D,17,()=>ut,An,(W,I)=>{var L=Cu(),X=ea(L),Ea=M(X),Pa=q(Ea,!0);xa(Ra=>{pi(L,1,`tab ${k(i).tab===k(I)?"active":""}`),sn(L,"href",`#/${k(I)??""}`),z(X,qa[k(I)].name),z(Pa,Ra)},[()=>At(k(I)).length]),G(W,L)});var ya=M(K,2);{var Ia=W=>{var I=$u(),L=q(I);xa(X=>z(L,`Tidak ada pelajaran yang cocok dengan “${X??""}”. Coba kata lain —
        mis. “angka”, “sapaan”, atau “liaison”.`),[()=>k(r).trim()]),G(W,I)},U=W=>{var I=Nu(),L=rn(I);Tn(L,17,()=>k(u),An,(Pa,Ra)=>{const Ca=La(()=>qa[k(Ra)]),aa=La(()=>At(k(Ra)).filter(s));var va=fr(),He=rn(va);{var Oe=Fe=>{var Ke=Lu(),_n=ea(Ke),wn=ea(_n),xn=ea(wn),Ar=M(xn),Tr=M(wn,2),Zt=ea(Tr),Ir=M(Zt,2,!0),Er=M(_n,2);Tn(Er,17,()=>k(aa),An,(Pr,xe)=>{var Yn=Mu(),Qn=ea(Yn),Rr=q(Qn,!0),Vt=M(Qn,2),Yt=ea(Vt),Cr=q(Yt,!0),$r=M(Yt,2),Mr=q($r,!0),Lr=M(Vt,2),Br=q(Lr,!0);xa((Dr,Nr)=>{sn(Yn,"href",`#/${k(xe).lang??""}/${k(xe).number??""}`),Xe(Qn,`color: ${k(Ca).accent??""}`),z(Rr,Dr),z(Cr,k(xe).title),z(Mr,k(xe).subtitle),z(Br,Nr)},[()=>String(k(xe).number).padStart(2,"0"),()=>xu(k(xe).date)]),G(Pr,Yn)}),xa(()=>{z(xn,k(Ca).name),Xe(Ar,`background: ${k(Ca).accent??""}`),z(Zt,`${k(Ca).label??""} · ${k(aa).length??""} pelajaran`),z(Ir,k(Ca).schedule)}),G(Fe,Ke)};te(He,Fe=>{k(aa).length>0&&Fe(Oe)})}G(Pa,va)});var X=M(L,2);{var Ea=Pa=>{var Ra=Du(),Ca=M(ea(Ra),2);Tn(Ca,21,()=>ut,An,(aa,va)=>{var He=Bu(),Oe=ea(He),Fe=q(Oe,!0),Ke=M(Oe,2),_n=q(Ke,!0),wn=M(Ke,2),xn=q(wn,!0);xa(()=>{Xe(He,`border-left-color: ${qa[k(va)].accent??""}`),Xe(Oe,`color: ${qa[k(va)].accent??""}`),z(Fe,qa[k(va)].name),z(_n,qa[k(va)].next),z(xn,qa[k(va)].schedule)}),G(aa,He)}),G(Pa,Ra)};te(X,Pa=>{k(l)||Pa(Ea)})}G(W,I)};te(ya,W=>{k(l)&&!k(h)?W(Ia):W(U,-1)})}xa(()=>{z($,`${k(o)??""} pelajaran · 4 jalur belajar · diperbarui ${Su}`),pi(Q,1,`tab ${k(i).tab==="all"?"active":""}`)}),kl(N,()=>k(r),W=>Ga(r,W)),G(b,g)};te(d,b=>{k(i).view==="lesson"?b(f):b(m,-1)})}G(e,c),Pt()}tl(Ou,{target:document.getElementById("app")});
