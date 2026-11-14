var rs=Object.defineProperty;var vt=n=>{throw TypeError(n)};var ss=(n,a,e)=>a in n?rs(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var j=(n,a,e)=>ss(n,typeof a!="symbol"?a+"":a,e),Si=(n,a,e)=>a.has(n)||vt("Cannot "+e);var m=(n,a,e)=>(Si(n,a,"read from private field"),e?e.call(n):a.get(n)),T=(n,a,e)=>a.has(n)?vt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(n):a.set(n,e),A=(n,a,e,i)=>(Si(n,a,"write to private field"),i?i.call(n,e):a.set(n,e),e),w=(n,a,e)=>(Si(n,a,"access private method"),e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const Wt=!1;var Ut=Array.isArray,ls=Array.prototype.indexOf,Me=Array.prototype.includes,bi=Array.from,Yt=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,us=Object.getOwnPropertyDescriptors,os=Object.prototype,ds=Array.prototype,qt=Object.getPrototypeOf,wt=Object.isExtensible;const ms=()=>{};function ks(n){for(var a=0;a<n.length;a++)n[a]()}function Zt(){var n,a,e=new Promise((i,t)=>{n=i,a=t});return{promise:e,resolve:n,reject:a}}const ta=2,Re=4,fi=8,Vt=1<<24,Ba=16,Ga=32,An=64,Ci=128,Qi=256,Fa=512,Y=1024,H=2048,ya=4096,ua=8192,ia=16384,me=32768,ti=1<<25,le=65536,ri=1<<17,ps=1<<18,ke=1<<19,hs=1<<20,Qa=1<<25,si=1<<21,Qn=1<<22,_n=1<<23,Ai=Symbol("$state"),Xt=Symbol("component"),Xe=Symbol("attributes"),Ki=Symbol("class"),Li=Symbol("style"),ve=Symbol("text"),Qe=Symbol("form reset"),Be=new class extends Error{constructor(){super(...arguments);j(this,"name","StaleReactionError");j(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},gs=1,cs=2,Qt=4,bs=8,fs=16,ys=1,vs=2,ar={},U=Symbol("uninitialized"),nr="http://www.w3.org/1999/xhtml",ws="http://www.w3.org/2000/svg",_s="http://www.w3.org/1998/Math/MathML";function js(){console.warn("https://svelte.dev/e/derived_inert")}function Ss(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function er(n){return n===this.v}function As(n,a){return n!=n?a==a:n!==a||n!==null&&typeof n=="object"||typeof n=="function"}function ir(n){return!As(n,this.v)}function Is(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ts(n,a,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ps(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Es(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Ms(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Rs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ns(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ds(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Cs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Ks=!1,ka=null;function ue(n){ka=n}function at(n,a=!1,e){ka={p:ka,i:!1,c:null,e:null,s:n,x:null,r:R,l:null}}function nt(n){var a=ka,e=a.e;if(e!==null){a.e=null;for(var i of e)Ar(i)}return a.i=!0,ka=a.p,tr(n)}function tr(n={}){return Yt(n,Xt,{value:!0}),n}function rr(){return!0}let Kn=[];function sr(){var n=Kn;Kn=[],ks(n)}function wn(n){if(Kn.length===0&&!Te){var a=Kn;queueMicrotask(()=>{a===Kn&&sr()})}Kn.push(n)}function Ls(){for(;Kn.length>0;)sr()}const zs=-7169;function O(n,a){n.f=n.f&zs|a}function et(n){(n.f&Fa)!==0||n.deps===null?O(n,Y):O(n,ya)}function lr(n,a){(n.f&H)!==0?a.set(n,H):(n.f&ya)!==0&&a.get(n)!==H&&a.set(n,ya),O(n,Y)}let _t=!1;function Bs(){_t||(_t=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var a;if(!n.defaultPrevented)for(const e of n.target.elements)(a=e[Qe])==null||a.call(e)})},{capture:!0}))}function He(n){var a=I,e=R;Pa(null),en(null);try{return n()}finally{Pa(a),en(e)}}function Hs(n,a,e,i=e){n.addEventListener(a,()=>He(e));const t=n[Qe];t?n[Qe]=()=>{t(),i(!0)}:n[Qe]=()=>i(!0),Bs()}function Fs(n,a,e,i){const t=it;var r=n.filter(h=>!h.settled),l=a.map(t);if(e.length===0&&r.length===0){i(l);return}var s=R,o=Gs(),u=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(h=>h.promise)):null;function d(h){if((s.f&ia)===0){o();try{i([...l,...h])}catch(c){Xa(c,s)}li()}}var g=ur();if(e.length===0){u.then(()=>d([])).finally(g);return}function k(){Promise.all(e.map(h=>Os(h))).then(d).catch(h=>Xa(h,s)).finally(g)}u?u.then(()=>{if((s.f&ia)!==0){g();return}o(),k(),li()}):k()}function Gs(){var n=R,a=I,e=ka,i=v;return function(r=!0){en(n),Pa(a),ue(e),r&&(n.f&ia)===0&&(i==null||i.activate(),i==null||i.apply())}}function li(n=!0){en(null),Pa(null),ue(null),n&&(v==null||v.deactivate())}function ur(){var n=R,a=n.b,e=v,i=!!(a!=null&&a.is_rendered());return a==null||a.update_pending_count(1,e),e.increment(i,n),()=>{a==null||a.update_pending_count(-1,e),e.decrement(i,n)}}function it(n){var a=ta|H;return R!==null&&(R.f|=ke),{ctx:ka,deps:null,effects:null,equals:er,f:a,fn:n,reactions:null,rv:0,v:U,wv:0,parent:R,ac:null}}const we=Symbol("obsolete");function Os(n,a,e){let i=R;i===null&&Is();var t=void 0,r=$n(U),l=!I,s=new Set;return sl(()=>{var h,c;var o=R,u=Zt();t=u.promise;try{Promise.resolve(n()).then(u.resolve,f=>{f!==Be&&u.reject(f)}).finally(li)}catch(f){u.reject(f),li()}var d=v;if(l){if((o.f&me)!==0)var g=ur();if((h=i.b)!=null&&h.is_rendered())(c=d.async_deriveds.get(o))==null||c.reject(we);else for(const f of s.values())f.reject(we);s.add(u),d.async_deriveds.set(o,u)}const k=(f,b=void 0)=>{g==null||g(),s.delete(u),b!==we&&(d.activate(),b?(r.f|=_n,oe(r,b)):((r.f&_n)!==0&&(r.f^=_n),oe(r,f)),d.deactivate())};u.promise.then(k,f=>k(null,f||"unknown"))}),tl(()=>{for(const o of s)o.reject(we)}),new Promise(o=>{function u(d){function g(){d===t?o(r):u(t)}d.then(g,g)}u(t)})}function da(n){const a=it(n);return Rr(a),a}function Js(n){const a=it(n);return a.equals=ir,a}function $s(n){var a=n.effects;if(a!==null){n.effects=null;for(var e=0;e<a.length;e+=1)pa(a[e])}}function tt(n){var a,e=R,i=n.parent;if(!In&&i!==null&&n.v!==U&&(i.f&(ia|ua))!==0)return js(),n.v;en(i);try{$s(n),a=Kr(n)}finally{en(e)}return a}function or(n){var a=tt(n);if(!n.equals(a)&&(n.wv=Dr(),(!(v!=null&&v.is_fork)||n.deps===null)&&(v!==null?(v.capture(n,a,!0),jn==null||jn.capture(n,a,!0)):n.v=a,n.deps===null))){O(n,Y);return}In||(Q!==null?(lt()||v!=null&&v.is_fork)&&Q.set(n,a):et(n))}function Ws(n){var a;if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&((a=e.teardown)==null||a.call(e),e.ac!==null&&He(()=>{e.ac.abort(Be),e.ac=null}),e.fn!==null&&(e.teardown=ms),Ne(e,0),ot(e))}function dr(n){if(n.effects!==null)for(const a of n.effects)a.teardown&&a.fn!==null&&de(a)}let Ii=null,Zn=null,v=null,jn=null,Q=null,zi=null,Te=!1,Ti=!1,Pe=null,ai=null;var jt=0;let Us=1;var ne,ee,ie,un,te,on,Ce,Ua,Ya,re,zn,x,Bi,mr,Hi,_e,Fi,kr,pr,hr,Vn,Ys,je;const hi=class hi{constructor(){T(this,x);j(this,"id",Us++);j(this,"started",!1);j(this,"linked",!0);j(this,"prev",null);j(this,"next",null);j(this,"async_deriveds",new Map);j(this,"current",new Map);j(this,"previous",new Map);T(this,ne,new Set);T(this,ee,new Set);T(this,ie,0);T(this,un,new Map);T(this,te,null);T(this,on,[]);T(this,Ce,[]);T(this,Ua,new Map);T(this,Ya,new Map);T(this,re,new Set);j(this,"is_fork",!1);T(this,zn,!1);Zn===null?Ii=Zn=this:(Zn.next=this,this.prev=Zn),Zn=this}skip_effect(a){m(this,Ya).has(a)||m(this,Ya).set(a,{d:[],m:[]}),m(this,re).delete(a)}unskip_effect(a,e=i=>this.schedule(i)){var i=m(this,Ya).get(a);if(i){m(this,Ya).delete(a);for(var t of i.d)O(t,H),e(t);for(t of i.m)O(t,ya),e(t)}m(this,re).add(a)}capture(a,e,i=!1){a.v!==U&&!this.previous.has(a)&&this.previous.set(a,a.v),(a.f&_n)===0&&(this.current.set(a,[e,i]),Q==null||Q.set(a,e)),this.is_fork||(a.v=e)}activate(){v=this}deactivate(){v=null,Q=null}flush(){try{Ti=!0,v=this,w(this,x,_e).call(this)}finally{jt=0,zi=null,Pe=null,ai=null,Ti=!1,v=null,Q=null,an.clear()}}discard(){var a;for(const e of m(this,ee))e(this);m(this,ee).clear();for(const e of this.async_deriveds.values())e.reject(we);w(this,x,je).call(this),(a=m(this,te))==null||a.resolve()}register_created_effect(a){m(this,Ce).push(a)}increment(a,e){if(A(this,ie,m(this,ie)+1),a){let i=m(this,un).get(e)??0;m(this,un).set(e,i+1)}}decrement(a,e){if(A(this,ie,m(this,ie)-1),a){let i=m(this,un).get(e)??0;i===1?m(this,un).delete(e):m(this,un).set(e,i-1)}m(this,zn)||(A(this,zn,!0),wn(()=>{A(this,zn,!1),this.linked&&this.flush()}))}transfer_reactions(a){for(const[e,i]of a)this.add_dirty_reaction(e,i);a.clear()}add_dirty_reaction(a,e){(e===H||m(this,Ua).get(a)!==H)&&m(this,Ua).set(a,e)}oncommit(a){m(this,ne).add(a)}ondiscard(a){m(this,ee).add(a)}settled(){return(m(this,te)??A(this,te,Zt())).promise}static ensure(){if(v===null){const a=v=new hi;!Ti&&!Te&&wn(()=>{a.started||a.flush()})}return v}apply(){{Q=null;return}}schedule(a){var e;if(zi=a,(e=a.b)!=null&&e.is_pending&&(a.f&(Re|fi|Vt))!==0&&(a.f&me)===0){a.b.defer_effect(a);return}m(this,on).push(a)}};ne=new WeakMap,ee=new WeakMap,ie=new WeakMap,un=new WeakMap,te=new WeakMap,on=new WeakMap,Ce=new WeakMap,Ua=new WeakMap,Ya=new WeakMap,re=new WeakMap,zn=new WeakMap,x=new WeakSet,Bi=function(){if(this.is_fork)return!0;for(const a of m(this,un).keys())if(!w(this,x,mr).call(this,a))return!0;return!1},mr=function(a){for(var e=a;e!==null;e=e.parent)if(m(this,Ya).has(e))return!0;return!1},Hi=function(){var a=[];for(const r of m(this,on))if(!((r.f&ia)!==0||(r.f&(H|ya))===0)){for(var e=r,i=!1;e.parent!==null;){e=e.parent;var t=e.f;if((t&(An|Ga))!==0){if((t&Y)===0){i=!0;break}e.f^=Y}}i||a.push(e)}return A(this,on,[]),a},_e=function(){var s,o,u,d;this.started=!0;for(const[g,k]of m(this,Ua))O(g,k),this.schedule(g);this.apply();for(var a=Pe=[],e=[],i=ai=[];m(this,on).length>0;){jt++>1e3&&(w(this,x,je).call(this),Zs());for(const g of w(this,x,Hi).call(this))try{w(this,x,Fi).call(this,g,a,e)}catch(k){throw br(g),w(this,x,Bi).call(this)||this.discard(),k}}if(v=null,i.length>0){var t=hi.ensure();for(const g of i)t.schedule(g)}if(Pe=null,ai=null,w(this,x,Bi).call(this)){w(this,x,Vn).call(this,e),w(this,x,Vn).call(this,a);for(const[g,k]of m(this,Ya))cr(g,k);i.length>0&&w(s=v,x,_e).call(s);return}const r=w(this,x,kr).call(this);if(r){w(this,x,Vn).call(this,e),w(this,x,Vn).call(this,a),w(o=r,x,hr).call(o,this);return}m(this,Ua).clear();for(const g of m(this,ne))g(this);m(this,ne).clear(),jn=this,St(e),St(a),jn=null,(u=m(this,te))==null||u.resolve();var l=v;m(this,ie)===0&&(m(this,on).length===0||l!==null)&&w(this,x,je).call(this),l!==null&&(an.clear(),w(d=l,x,_e).call(d))},Fi=function(a,e,i){a.f^=Y;for(var t=a.first;t!==null;){var r=t.f,l=(r&(Ga|An))!==0,s=l&&(r&Y)!==0,o=s||(r&ua)!==0||m(this,Ya).has(t);if(!o&&t.fn!==null){l?t.f^=Y:(r&Re)!==0?e.push(t):Ge(t)&&((r&Ba)!==0&&this.add_dirty_reaction(t,ya),de(t));var u=t.first;if(u!==null){t=u;continue}}for(;t!==null;){var d=t.next;if(d!==null){t=d;break}t=t.parent}}},kr=function(){for(var a=this.prev;a!==null;a=a.prev)if(!a.is_fork&&w(this,x,pr).call(this,a))return a;return null},pr=function(a){for(const[e,[,i]]of this.current)if(!i&&a.current.has(e))return!0;return!1},hr=function(a){var i;for(const[t,r]of a.current)!this.previous.has(t)&&a.previous.has(t)&&this.previous.set(t,a.previous.get(t)),this.current.set(t,r);for(const[t,r]of a.async_deriveds){const l=this.async_deriveds.get(t);l&&r.promise.then(l.resolve).catch(l.reject)}a.async_deriveds.clear(),this.transfer_reactions(m(a,Ua));const e=t=>{var r=t.reactions;if(r!==null&&!((t.f&ta)!==0&&(t.f&(H|ya))===0))for(const o of r){var l=o.f;if((l&ta)!==0)e(o);else{var s=o;l&(Qn|Ba)&&!this.async_deriveds.has(s)&&(m(this,Ua).delete(s),O(s,H),this.schedule(s))}}};for(const t of this.current.keys())e(t);this.oncommit(()=>a.discard()),w(i=a,x,je).call(i),v=this,w(this,x,_e).call(this)},Vn=function(a){for(var e=0;e<a.length;e+=1)lr(a[e],m(this,Ua))},Ys=function(){var g,k;for(let h=Ii;h!==null;h=h.next){var a=h.id<this.id,e=[];for(const[c,[f,b]]of this.current){if(h.current.has(c)){var i=h.current.get(c)[0];if(a&&f!==i)h.current.set(c,[f,b]);else continue}e.push(c)}if(a)for(const[c,f]of this.async_deriveds){const b=h.async_deriveds.get(c);b&&f.promise.then(b.resolve).catch(b.reject)}var t=[...h.current.keys()].filter(c=>!h.current.get(c)[1]);if(!(!h.started||t.length===0)){var r=t.filter(c=>!this.current.has(c));if(r.length===0)a&&h.discard();else if(e.length>0){if(a)for(const c of m(this,re))h.unskip_effect(c,f=>{var b;(f.f&(Ba|Qn))!==0?h.schedule(f):w(b=h,x,Vn).call(b,[f])});h.activate();var l=new Set,s=new Map;for(var o of e)gr(o,r,l,s);s=new Map;var u=[...h.current].filter(([c,f])=>{const b=this.current.get(c);return b?b[0]!==f[0]||b[1]!==f[1]:!0}).map(([c])=>c);if(u.length>0)for(const c of m(this,Ce))(c.f&(ia|ua|ri))===0&&rt(c,u,s)&&((c.f&(Qn|Ba))!==0?(O(c,H),h.schedule(c)):h.add_dirty_reaction(c,H));if(m(h,on).length>0&&!m(h,zn)){h.apply();for(var d of w(g=h,x,Hi).call(g))w(k=h,x,Fi).call(k,d,[],[])}h.deactivate()}}}},je=function(){if(this.linked){var a=this.prev,e=this.next;a===null?Ii=e:a.next=e,e===null?Zn=a:e.prev=a,this.linked=!1}};let Jn=hi;function qs(n){var a=Te,e=jn;jn=null,Te=!0;try{for(var i;;){if(Ls(),v===null)return i;v.flush()}}finally{Te=a,jn=e}}function Zs(){try{Ms()}catch(n){Xa(n,zi)}}let Ca=null;function St(n){var a=n.length;if(a!==0){for(var e=0;e<a;){var i=n[e++];if((i.f&(ia|ua))===0&&Ge(i)&&(Ca=new Set,de(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&xr(i),(Ca==null?void 0:Ca.size)>0)){an.clear();for(const t of Ca){if((t.f&(ia|ua))!==0)continue;const r=[t];let l=t.parent;for(;l!==null;)Ca.has(l)&&(Ca.delete(l),r.push(l)),l=l.parent;for(let s=r.length-1;s>=0;s--){const o=r[s];(o.f&(ia|ua))===0&&de(o)}}Ca.clear()}}Ca=null}}function gr(n,a,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const t of n.reactions){const r=t.f;(r&ta)!==0?gr(t,a,e,i):(r&(Qn|Ba))!==0&&(r&H)===0&&rt(t,a,i)&&(O(t,H),st(t))}}function rt(n,a,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const t of n.deps){if(Me.call(a,t))return!0;if((t.f&ta)!==0&&rt(t,a,e))return e.set(t,!0),!0}return e.set(n,!1),!1}function st(n){v.schedule(n)}function cr(n,a){if(!((n.f&Ga)!==0&&(n.f&Y)!==0)){(n.f&H)!==0?a.d.push(n):(n.f&ya)!==0&&a.m.push(n),O(n,Y);for(var e=n.first;e!==null;)cr(e,a),e=e.next}}function br(n){O(n,Y);for(var a=n.first;a!==null;)br(a),a=a.next}let ui=new Set;const an=new Map;let fr=!1;function $n(n,a){var e={f:0,v:n,reactions:null,equals:er,rv:0,wv:0};return e}function Ka(n,a){const e=$n(n);return Rr(e),e}function Vs(n,a=!1,e=!0){const i=$n(n);return a||(i.equals=ir),i}function Va(n,a,e=!1){I!==null&&(!Ha||(I.f&ri)!==0)&&rr()&&(I.f&(ta|Ba|Qn|ri))!==0&&(nn===null||!nn.has(n))&&Ds();let i=e?Xn(a):a;return oe(n,i,ai)}var Cn=null,Gi=0;function oe(n,a,e=null){if(!n.equals(a)){In?an.set(n,a):an.has(n)||an.set(n,n.v);var i=Jn.ensure();if(i.capture(n,a),(n.f&ta)!==0){const t=n;(n.f&H)!==0&&tt(t),Q===null&&et(t)}n.wv=Dr(),Cn=null,Gi=0,yr(n,H,e),Cn=null,R!==null&&(R.f&Y)!==0&&(R.f&(Ga|An))===0&&(Sa===null?ul([n]):Sa.push(n)),!i.is_fork&&ui.size>0&&!fr&&Xs()}return a}function Xs(){fr=!1;for(const n of ui){(n.f&Y)!==0&&O(n,ya);let a;try{a=Ge(n)}catch{a=!0}a&&de(n)}ui.clear()}function xe(n){Va(n,n.v+1)}function yr(n,a,e){var i=n.reactions;if(i!==null){var t=i.length;if(Gi+=t,Gi>1e5&&Cn===null&&(Cn=new Set),Cn!==null){if(Cn.has(n))return;Cn.add(n)}for(var r=0;r<t;r++){var l=i[r],s=l.f,o=(s&H)===0;if(o&&O(l,a),(s&ri)!==0)ui.add(l);else if((s&ta)!==0){var u=l;Q==null||Q.delete(u),yr(u,ya,e)}else if(o){var d=l;(s&Ba)!==0&&Ca!==null&&Ca.add(d),e!==null?e.push(d):st(d)}}}}function Xn(n){if(typeof n!="object"||n===null||Ai in n||Xt in n)return n;const a=qt(n);if(a!==os&&a!==ds)return n;var e=new Map,i=Ut(n),t=Ka(0),r=On,l=s=>{if(On===r)return s();var o=I,u=On;Pa(null),Pt(r);var d=s();return Pa(o),Pt(u),d};return i&&e.set("length",Ka(n.length)),new Proxy(n,{defineProperty(s,o,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Rs();var d=e.get(o);return d===void 0?l(()=>{var g=Ka(u.value);return e.set(o,g),g}):Va(d,u.value,!0),!0},deleteProperty(s,o){var u=e.get(o);if(u===void 0){if(o in s){const d=l(()=>Ka(U));e.set(o,d),xe(t)}}else Va(u,U),xe(t);return!0},get(s,o,u){var h;if(o===Ai)return n;var d=e.get(o),g=o in s;if(d===void 0&&(!g||(h=Ie(s,o))!=null&&h.writable)&&(d=l(()=>{var c=Xn(g?s[o]:U),f=Ka(c);return f}),e.set(o,d)),d!==void 0){var k=p(d);return k===U?void 0:k}return Reflect.get(s,o,u)},getOwnPropertyDescriptor(s,o){var k;(k=this.has)==null||k.call(this,s,o);var u=Reflect.getOwnPropertyDescriptor(s,o),d=e.get(o);if(d!==void 0){var g=p(d);if(g===U)return;if(u&&"value"in u)u.value=g;else return{enumerable:!0,configurable:!0,value:g,writable:!0}}return u},has(s,o){var k;if(o===Ai)return!0;var u=e.get(o),d=u!==void 0&&u.v!==U||Reflect.has(s,o);if(u!==void 0||(R!==null||I!==null)&&(!d||(k=Ie(s,o))!=null&&k.writable)){u===void 0&&(u=l(()=>{var h=d?Xn(s[o]):U,c=Ka(h);return c}),e.set(o,u));var g=p(u);if(g===U)return!1}return d},set(s,o,u,d){var B;var g=e.get(o),k=o in s;if(i&&o==="length")for(var h=u;h<g.v;h+=1){var c=e.get(h+"");c!==void 0?Va(c,U):h in s&&(c=l(()=>Ka(U)),e.set(h+"",c))}if(g===void 0)(!k||(B=Ie(s,o))!=null&&B.writable)&&(g=l(()=>Ka(void 0)),Va(g,Xn(u)),e.set(o,g));else{k=g.v!==U;var f=l(()=>Xn(u));Va(g,f)}var b=Reflect.getOwnPropertyDescriptor(s,o);if(b!=null&&b.set&&b.set.call(d,u),!k){if(i&&typeof o=="string"){var y=e.get("length"),K=Number(o);Number.isInteger(K)&&K>=y.v&&Va(y,K+1)}xe(t)}return!0},ownKeys(s){p(t);var o=Reflect.ownKeys(s).filter(g=>{var k=e.get(g);return k===void 0||k.v!==U});for(var[u,d]of e)d.v!==U&&!(u in s)&&o.push(u);return o},setPrototypeOf(){Ns()}})}var At,vr,wr,_r;function Qs(){if(At===void 0){At=window,vr=/Firefox/.test(navigator.userAgent);var n=Element.prototype,a=Node.prototype,e=Text.prototype;wr=Ie(a,"firstChild").get,_r=Ie(a,"nextSibling").get,wt(n)&&(n[Ki]=void 0,n[Xe]=null,n[Li]=void 0,n.__e=void 0),wt(e)&&(e[ve]=void 0)}}function Sn(n=""){return document.createTextNode(n)}function mn(n){return wr.call(n)}function Fe(n){return _r.call(n)}function L(n,a){return mn(n)}function yn(n,a=!1){{var e=mn(n);return e instanceof Comment&&e.data===""?Fe(e):e}}function N(n,a=!1){return mn(n)}function _(n,a=1,e=!1){let i=n;for(;a--;)i=Fe(i);return i}function al(n){n.textContent=""}function jr(){return!1}function Sr(n,a,e){return a==null||a===nr?e?document.createElement(n,{is:e}):document.createElement(n):e?document.createElementNS(a,n,{is:e}):document.createElementNS(a,n)}function nl(n){var a=R;if(a===null)return I.f|=_n,n;if((a.f&me)===0&&(a.f&Re)===0)throw n;Xa(n,a)}function Xa(n,a){if(n===ar)throw n;if(!(a!==null&&(a.f&ia)!==0)){for(;a!==null;){if((a.f&Ci)!==0&&(a.f&(ia|ti))===0){if((a.f&me)===0)throw n;try{a.b.error(n);return}catch(e){n=e}}a=a.parent}throw n}}function el(n){R===null&&(I===null&&Es(),xs()),In&&Ps()}function il(n,a){var e=a.last;e===null?a.last=a.first=n:(e.next=n,n.prev=e,a.last=n)}function Tn(n,a){var e=R;e!==null&&(e.f&ua)!==0&&(n|=ua);var i={ctx:ka,deps:null,nodes:null,f:n|H|Fa,first:null,fn:a,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};v==null||v.register_created_effect(i);var t=i;if((n&Re)!==0)Pe!==null?Pe.push(i):Jn.ensure().schedule(i);else if(a!==null){try{de(i)}catch(l){throw pa(i),l}t.deps===null&&t.teardown===null&&t.nodes===null&&t.first===t.last&&(t.f&ke)===0&&(t=t.first,(n&Ba)!==0&&(n&le)!==0&&t!==null&&(t.f|=le))}if(t!==null&&(t.parent=e,e!==null&&il(t,e),I!==null&&(I.f&ta)!==0&&(n&An)===0)){var r=I;(r.effects??(r.effects=[])).push(t)}return i}function lt(){return I!==null&&!Ha}function tl(n){const a=Tn(fi,null);return O(a,Y),a.teardown=n,a}function It(n){el();var a=R.f,e=!I&&(a&Ga)!==0&&ka!==null&&!ka.i;if(e){var i=ka;(i.e??(i.e=[])).push(n)}else return Ar(n)}function Ar(n){return Tn(Re|hs,n)}function rl(n){Jn.ensure();const a=Tn(An|ke,n);return(e={})=>new Promise(i=>{e.outro?Gn(a,()=>{pa(a),i(void 0)}):(pa(a),i(void 0))})}function sl(n){return Tn(Qn|ke,n)}function Ir(n,a=0){return Tn(fi|a,n)}function X(n,a=[],e=[],i=[]){Fs(i,a,e,t=>{Tn(fi,()=>{n(...t.map(p))})})}function ut(n,a=0){var e=Tn(Ba|a,n);return e}function Ta(n){return Tn(Ga|ke,n)}function Tr(n){var a=n.teardown;if(a!==null){const e=In,i=I;Tt(!0),Pa(null);try{a.call(null)}catch(t){Xa(t,n.parent)}finally{Tt(e),Pa(i)}}}function ot(n,a=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const t=e.ac;t!==null&&He(()=>{t.abort(Be)});var i=e.next;(e.f&An)!==0?e.parent=null:pa(e,a),e=i}}function ll(n){for(var a=n.first;a!==null;){var e=a.next;(a.f&Ga)===0&&pa(a),a=e}}function pa(n,a=!0){var e=!1;(a||(n.f&ps)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Pr(n.nodes.start,n.nodes.end),e=!0),n.f|=ti,ot(n,a&&!e),Ne(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const r of i)r.stop();Tr(n),n.f^=ti,n.f|=ia;var t=n.parent;t!==null&&t.first!==null&&xr(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Pr(n,a){for(;n!==null;){var e=n===a?null:Fe(n);n.remove(),n=e}}function xr(n){var a=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),a!==null&&(a.first===n&&(a.first=i),a.last===n&&(a.last=e))}function Gn(n,a,e=!0){var i=[];n.f|=Qi,Er(n,i,!0);var t=()=>{e&&pa(n),a&&a()},r=i.length;if(r>0){var l=()=>--r||t();for(var s of i)s.out(l)}else t()}function Er(n,a,e){if((n.f&ua)===0){n.f^=ua;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||e)&&a.push(s);for(var t=n.first;t!==null;){var r=t.next;if((t.f&An)===0){var l=(t.f&le)!==0||(t.f&Ga)!==0&&(n.f&Ba)!==0;Er(t,a,l?e:!1)}t=r}}}function oi(n){n.f&=~Qi,Mr(n,!0)}function Mr(n,a){if((n.f&Qi)===0&&(n.f&ua)!==0){n.f^=ua,(n.f&Y)===0&&(O(n,H),Jn.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,t=(e.f&le)!==0||(e.f&Ga)!==0;Mr(e,t?a:!1),e=i}var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||a)&&l.in()}}function dt(n,a){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var t=e===i?null:Fe(e);a.append(e),e=t}}let In=!1;function Tt(n){In=n}let I=null,Ha=!1;function Pa(n){I=n}let R=null;function en(n){R=n}let nn=null;function Rr(n){I!==null&&((I.f&si)!==0||(I.f&ta)!==0)&&(nn??(nn=new Set)).add(n)}let ma=null,fa=0,Sa=null;function ul(n){Sa=n}let Nr=1,Ln=0,On=Ln;function Pt(n){On=n}function Dr(){return++Nr}function Ge(n){var a=n.f;if((a&H)!==0)return!0;if((a&ya)!==0){for(var e=n.deps,i=e.length,t=0;t<i;t++){var r=e[t];if(Ge(r)&&or(r),r.wv>n.wv)return!0}(a&Fa)!==0&&Q===null&&O(n,Y)}return!1}function Cr(n,a,e=!0){var i=n.reactions;if(i!==null&&!(nn!==null&&nn.has(n)))for(var t=0;t<i.length;t++){var r=i[t];(r.f&ta)!==0?Cr(r,a,!1):a===r&&(e?O(r,H):(r.f&Y)!==0&&O(r,ya),st(r))}}function Kr(n){var a=ma,e=fa,i=Sa,t=I,r=nn,l=ka,s=Ha,o=On,u=n.f;ma=null,fa=0,Sa=null,I=(u&(Ga|An))===0?n:null,nn=null,ue(n.ctx),Ha=!1,On=++Ln,n.ac!==null&&(He(()=>{n.ac.abort(Be)}),n.ac=null);try{n.f|=si;var d=n.fn,g=d();n.f|=me;var k=xt(n);if(rr()&&Sa!==null&&!Ha&&k!==null&&(n.f&(ta|ya|H))===0)for(var h=0;h<Sa.length;h++)Cr(Sa[h],n);if(t!==null&&t!==n){if(Ln++,t.deps!==null)for(let c=0;c<e;c+=1)t.deps[c].rv=Ln;if(a!==null)for(const c of a)c.rv=Ln;Sa!==null&&(i===null?i=Sa:i.push(...Sa))}return(n.f&_n)!==0&&(n.f^=_n),g}catch(c){return xt(n),nl(c)}finally{n.f^=si,ma=a,fa=e,Sa=i,I=t,nn=r,ue(l),Ha=s,On=o}}function xt(n){var t;var a=n.deps,e=v==null?void 0:v.is_fork;if(ma!==null){var i;if(e||Ne(n,fa),a!==null&&fa>0)for(a.length=fa+ma.length,i=0;i<ma.length;i++)a[fa+i]=ma[i];else n.deps=a=ma;if(lt()&&(n.f&Fa)!==0)for(i=fa;i<a.length;i++)((t=a[i]).reactions??(t.reactions=[])).push(n)}else!e&&a!==null&&fa<a.length&&(Ne(n,fa),a.length=fa);return a}function ol(n,a){let e=a.reactions;if(e!==null){var i=ls.call(e,n);if(i!==-1){var t=e.length-1;t===0?e=a.reactions=null:(e[i]=e[t],e.pop())}}if(e===null&&(a.f&ta)!==0&&(ma===null||!Me.call(ma,a))){var r=a;(r.f&Fa)!==0&&(r.f^=Fa),r.v!==U&&et(r),r.ac!==null&&He(()=>{r.ac.abort(Be),r.ac=null,O(r,H)}),Ws(r),Ne(r,0)}}function Ne(n,a){var e=n.deps;if(e!==null)for(var i=a;i<e.length;i++)ol(n,e[i])}function de(n){var a=n.f;if((a&ia)===0){O(n,Y);var e=R;R=n;try{(a&(Ba|Vt))!==0?ll(n):ot(n),Tr(n);var i=Kr(n);n.teardown=typeof i=="function"?i:null,n.wv=Nr;var t;Wt&&Ks&&(n.f&H)!==0&&n.deps}finally{R=e}}}async function dl(){await Promise.resolve(),qs()}function p(n){var a=n.f,e=(a&ta)!==0;if(I!==null&&!Ha){var i=R!==null&&(R.f&ia)!==0;if(!i&&(nn===null||!nn.has(n))){var t=I.deps;if((I.f&si)!==0)n.rv<Ln&&(n.rv=Ln,ma===null&&t!==null&&t[fa]===n?fa++:ma===null?ma=[n]:ma.push(n));else{I.deps??(I.deps=[]),Me.call(I.deps,n)||I.deps.push(n);var r=n.reactions;r===null?n.reactions=[I]:Me.call(r,I)||r.push(I)}}}if(In&&an.has(n))return an.get(n);if(e){var l=n;if(In){var s=l.v;return((l.f&Y)===0&&l.reactions!==null||zr(l))&&(s=tt(l)),an.set(l,s),s}var o=(l.f&Fa)===0&&!Ha&&I!==null&&(I.f&Fa)!==0,u=(l.f&me)===0;Ge(l)&&(o&&(l.f|=Fa),or(l)),o&&!u&&(dr(l),Lr(l))}if(Q!=null&&Q.has(n))return Q.get(n);if((n.f&_n)!==0)throw n.v;return n.v}function Lr(n){if(n.f|=Fa,n.deps!==null)for(const e of n.deps){var a=e.reactions;a===null?e.reactions=[n]:Me.call(a,n)||a.push(n),(e.f&ta)!==0&&(e.f&Fa)===0&&(dr(e),Lr(e))}}function zr(n){if(n.v===U)return!0;if(n.deps===null)return!1;for(const a of n.deps)if(an.has(a)||(a.f&ta)!==0&&zr(a))return!0;return!1}function Br(n){var a=Ha;try{return Ha=!0,n()}finally{Ha=a}}const ml=["touchstart","touchmove"];function kl(n){return ml.includes(n)}const Ye=Symbol("events"),pl=new Set,Et=new Set;let Pi=null,xi=!1;function Mt(n){var f,b;var a=this,e=a.ownerDocument,i=n.type,t=((f=n.composedPath)==null?void 0:f.call(n))||[],r=t[0]||n.target;Pi=n,xi||(xi=!0,setTimeout(()=>{xi=!1,Pi=null}));var l=0,s=Pi===n&&n[Ye];if(s){var o=t.indexOf(s);if(o!==-1&&(a===document||a===window)){n[Ye]=a;return}var u=t.indexOf(a);if(u===-1)return;o<=u&&(l=o)}if(r=t[l]||n.target,r!==a){Yt(n,"currentTarget",{configurable:!0,get(){return r||e}});var d=I,g=R;Pa(null),en(null);try{for(var k,h=[];r!==null&&r!==a;){try{var c=(b=r[Ye])==null?void 0:b[i];c!=null&&(!r.disabled||n.target===r)&&c.call(r,n)}catch(y){k?h.push(y):k=y}if(n.cancelBubble)break;l++,r=l<t.length?t[l]:null}if(k){for(let y of h)queueMicrotask(()=>{throw y});throw k}}finally{n[Ye]=a,delete n.currentTarget,Pa(d),en(g)}}}var Jt;const Ei=((Jt=globalThis==null?void 0:globalThis.window)==null?void 0:Jt.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function hl(n){return(Ei==null?void 0:Ei.createHTML(n))??n}function gl(n){var a=Sr("template");return a.innerHTML=hl(n.replaceAll("<!>","<!---->")),a.content}function De(n,a){var e=R;e.nodes===null&&(e.nodes={start:n,end:a,a:null,t:null})}function J(n,a){var e=(a&ys)!==0,i=(a&vs)!==0,t,r=!n.startsWith("<!>");return()=>{t===void 0&&(t=gl(r?n:"<!>"+n),e||(t=mn(t)));var l=i||vr?document.importNode(t,!0):t.cloneNode(!0);if(e){var s=mn(l),o=l.lastChild;De(s,o)}else De(l,l);return l}}function ni(){var n=document.createDocumentFragment(),a=document.createComment(""),e=Sn();return n.append(a,e),De(a,e),n}function z(n,a){n!==null&&n.before(a)}function cl(n){let a=0,e=$n(0),i;return()=>{lt()&&(p(e),Ir(()=>(a===0&&(i=Br(()=>n(()=>xe(e)))),a+=1,()=>{wn(()=>{a-=1,a===0&&(i==null||i(),i=void 0,xe(e))})})))}}var bl=le|ke;function fl(n,a,e,i){new yl(n,a,e,i)}var Aa,Xi,Ia,Bn,ea,ga,sa,ca,qa,Hn,vn,se,Ke,dn,gi,E,vl,wl,Oi,bn,_l,Ji,Se,ei,$i,Wi;class yl{constructor(a,e,i,t){T(this,E);j(this,"parent");j(this,"is_pending",!1);j(this,"transform_error");T(this,Aa);T(this,Xi,null);T(this,Ia);T(this,Bn);T(this,ea);T(this,ga,null);T(this,sa,null);T(this,ca,null);T(this,qa,null);T(this,Hn,0);T(this,vn,0);T(this,se,!1);T(this,Ke,new Map);T(this,dn,null);T(this,gi,cl(()=>(A(this,dn,$n(m(this,Hn))),()=>{A(this,dn,null)})));var r;A(this,Aa,a),A(this,Ia,e),A(this,Bn,l=>{var s=R;s.b=this,s.f|=Ci,i(l)}),this.parent=R.b,this.transform_error=t??((r=this.parent)==null?void 0:r.transform_error)??(l=>l),A(this,ea,ut(()=>{w(this,E,Ji).call(this)},bl))}defer_effect(a){lr(a,m(this,Ke))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!m(this,Ia).pending}update_pending_count(a,e){w(this,E,$i).call(this,a,e),A(this,Hn,m(this,Hn)+a),!(!m(this,dn)||m(this,se))&&(A(this,se,!0),wn(()=>{A(this,se,!1),m(this,dn)&&oe(m(this,dn),m(this,Hn))}))}get_effect_pending(){return m(this,gi).call(this),p(m(this,dn))}error(a){if(a===ar||!m(this,Ia).onerror&&!m(this,Ia).failed)throw a;v!=null&&v.is_fork?(m(this,ga)&&v.skip_effect(m(this,ga)),m(this,sa)&&v.skip_effect(m(this,sa)),m(this,ca)&&v.skip_effect(m(this,ca)),v.oncommit(()=>{w(this,E,bn).call(this)||w(this,E,Wi).call(this,a)})):w(this,E,Wi).call(this,a)}}Aa=new WeakMap,Xi=new WeakMap,Ia=new WeakMap,Bn=new WeakMap,ea=new WeakMap,ga=new WeakMap,sa=new WeakMap,ca=new WeakMap,qa=new WeakMap,Hn=new WeakMap,vn=new WeakMap,se=new WeakMap,Ke=new WeakMap,dn=new WeakMap,gi=new WeakMap,E=new WeakSet,vl=function(){try{A(this,ga,Ta(()=>m(this,Bn).call(this,m(this,Aa))))}catch(a){this.error(a)}},wl=function(a){const e=m(this,Ia).failed,{reset:i,invoke_onerror:t}=w(this,E,Oi).call(this,a);wn(t),e&&A(this,ca,Ta(()=>{e(m(this,Aa),()=>a,()=>i)}))},Oi=function(a){var e=!1,i=!1;const t=()=>{if(!w(this,E,bn).call(this)){if(e){Ss();return}e=!0,i&&Cs(),m(this,ca)!==null&&Gn(m(this,ca),()=>{A(this,ca,null)}),w(this,E,ei).call(this,()=>{w(this,E,Ji).call(this)})}};return{reset:t,invoke_onerror:()=>{var l,s;if(!w(this,E,bn).call(this))try{i=!0,(s=(l=m(this,Ia)).onerror)==null||s.call(l,a,t),i=!1}catch(o){Xa(o,m(this,ea)&&m(this,ea).parent)}}}},bn=function(){return(m(this,ea).f&(ia|ti))!==0},_l=function(){const a=m(this,Ia).pending;a&&(this.is_pending=!0,A(this,sa,Ta(()=>a(m(this,Aa)))),wn(()=>{if(!w(this,E,bn).call(this)){var e=A(this,qa,document.createDocumentFragment()),i=Sn(),t=!1;if(e.append(i),A(this,ga,w(this,E,ei).call(this,()=>{try{return Ta(()=>m(this,Bn).call(this,i))}catch(r){try{this.error(r),t=!0}catch(l){Xa(l,m(this,ea).parent)}return null}})),m(this,ga)===null){A(this,qa,null),t&&w(this,E,Se).call(this,v);return}m(this,vn)===0&&(m(this,Aa).before(e),A(this,qa,null),Gn(m(this,sa),()=>{A(this,sa,null)}),w(this,E,Se).call(this,v))}}))},Ji=function(){try{if(this.is_pending=this.has_pending_snippet(),A(this,vn,0),A(this,Hn,0),A(this,ga,Ta(()=>{m(this,Bn).call(this,m(this,Aa))})),m(this,vn)>0){var a=A(this,qa,document.createDocumentFragment());dt(m(this,ga),a);const e=m(this,Ia).pending;A(this,sa,Ta(()=>e(m(this,Aa))))}else w(this,E,Se).call(this,v)}catch(e){this.error(e)}},Se=function(a){this.is_pending=!1,a.transfer_reactions(m(this,Ke))},ei=function(a){var e=R,i=I,t=ka;en(m(this,ea)),Pa(m(this,ea)),ue(m(this,ea).ctx);try{return Jn.ensure(),a()}finally{en(e),Pa(i),ue(t)}},$i=function(a,e){var i;if(!this.has_pending_snippet()){this.parent&&w(i=this.parent,E,$i).call(i,a,e);return}A(this,vn,m(this,vn)+a),m(this,vn)===0&&(w(this,E,Se).call(this,e),m(this,sa)&&Gn(m(this,sa),()=>{A(this,sa,null)}),m(this,qa)&&(m(this,Aa).before(m(this,qa)),A(this,qa,null)))},Wi=function(a){m(this,ga)&&(pa(m(this,ga)),A(this,ga,null)),m(this,sa)&&(pa(m(this,sa)),A(this,sa,null)),m(this,ca)&&(pa(m(this,ca)),A(this,ca,null));let e=m(this,Ia).failed;const i=t=>{if(w(this,E,bn).call(this))return;const{reset:r,invoke_onerror:l}=w(this,E,Oi).call(this,t);l(),e&&!w(this,E,bn).call(this)&&A(this,ca,w(this,E,ei).call(this,()=>{try{return Ta(()=>{var s=R;s.b=this,s.f|=Ci,e(m(this,Aa),()=>t,()=>r)})}catch(s){return Xa(s,m(this,ea).parent),null}}))};wn(()=>{if(!w(this,E,bn).call(this)){var t;try{t=this.transform_error(a)}catch(r){Xa(r,m(this,ea)&&m(this,ea).parent);return}t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(i,r=>Xa(r,m(this,ea)&&m(this,ea).parent)):i(t)}})};function P(n,a){var e=a==null?"":typeof a=="object"?`${a}`:a;e!==(n[ve]??(n[ve]=n.nodeValue))&&(n[ve]=e,n.nodeValue=`${e}`)}function jl(n,a){return Sl(n,a)}const qe=new Map;function Sl(n,{target:a,anchor:e,props:i={},events:t,context:r,intro:l=!0,transformError:s}){Qs();var o=void 0,u=rl(()=>{var d=e??a.appendChild(Sn());fl(d,{pending:()=>{}},h=>{at({});var c=ka;r&&(c.c=r),t&&(i.$$events=t),o=n(h,i)||tr(),nt()},s);var g=new Set,k=h=>{for(var c=0;c<h.length;c++){var f=h[c];if(!g.has(f)){g.add(f);var b=kl(f);for(const B of[a,document]){var y=qe.get(B);y===void 0&&(y=new Map,qe.set(B,y));var K=y.get(f);K===void 0?(B.addEventListener(f,Mt,{passive:b}),y.set(f,1)):y.set(f,K+1)}}}};return k(bi(pl)),Et.add(k),()=>{var b;for(var h of g)for(const y of[a,document]){var c=qe.get(y),f=c.get(h);--f==0?(y.removeEventListener(h,Mt),c.delete(h),c.size===0&&qe.delete(y)):c.set(h,f)}Et.delete(k),d!==e&&((b=d.parentNode)==null||b.removeChild(d))}});return Al.set(o,u),o}let Al=new WeakMap;var La,Za,ba,Fn,Le,ze,ci;class Il{constructor(a,e=!0){j(this,"anchor");T(this,La,new Map);T(this,Za,new Map);T(this,ba,new Map);T(this,Fn,new Set);T(this,Le,!0);T(this,ze,a=>{if(m(this,La).has(a)){var e=m(this,La).get(a),i=m(this,Za).get(e);if(i)oi(i),m(this,Fn).delete(e);else{var t=m(this,ba).get(e);t&&(oi(t.effect),m(this,Za).set(e,t.effect),m(this,ba).delete(e),t.fragment.lastChild.remove(),this.anchor.before(t.fragment),i=t.effect)}for(const[r,l]of m(this,La)){if(m(this,La).delete(r),r===a)break;const s=m(this,ba).get(l);s&&(pa(s.effect),m(this,ba).delete(l))}for(const[r,l]of m(this,Za)){if(r===e||m(this,Fn).has(r))continue;const s=()=>{if(Array.from(m(this,La).values()).includes(r)){var u=document.createDocumentFragment();dt(l,u),u.append(Sn()),m(this,ba).set(r,{effect:l,fragment:u})}else pa(l);m(this,Fn).delete(r),m(this,Za).delete(r)};m(this,Le)||!i?(m(this,Fn).add(r),Gn(l,s,!1)):s()}}});T(this,ci,a=>{m(this,La).delete(a);const e=Array.from(m(this,La).values());for(const[i,t]of m(this,ba))e.includes(i)||(pa(t.effect),m(this,ba).delete(i))});this.anchor=a,A(this,Le,e)}ensure(a,e){var i=v,t=jr();if(e&&!m(this,Za).has(a)&&!m(this,ba).has(a))if(t){var r=document.createDocumentFragment(),l=Sn();r.append(l),m(this,ba).set(a,{effect:Ta(()=>e(l)),fragment:r})}else m(this,Za).set(a,Ta(()=>e(this.anchor)));if(m(this,La).set(i,a),t){for(const[s,o]of m(this,Za))s===a?i.unskip_effect(o):i.skip_effect(o);for(const[s,o]of m(this,ba))s===a?i.unskip_effect(o.effect):i.skip_effect(o.effect);i.oncommit(m(this,ze)),i.ondiscard(m(this,ci))}else m(this,ze).call(this,i)}}La=new WeakMap,Za=new WeakMap,ba=new WeakMap,Fn=new WeakMap,Le=new WeakMap,ze=new WeakMap,ci=new WeakMap;function za(n,a,e=!1){var i=new Il(n),t=e?le:0;function r(l,s){i.ensure(l,s)}ut(()=>{var l=!1;a((s,o=0)=>{l=!0,r(o,s)}),l||r(-1,null)},t)}function Nn(n,a){return a}function Tl(n,a,e){for(var i=[],t=a.length,r,l=a.length,s=0;s<t;s++){let g=a[s];Gn(g,()=>{if(r){if(r.pending.delete(g),r.done.add(g),r.pending.size===0){var k=n.outrogroups;Ui(n,bi(r.done)),k.delete(r),k.size===0&&(n.outrogroups=null)}}else l-=1},!1)}if(l===0){var o=i.length===0&&e!==null&&n.pending.size===0;if(o){var u=e,d=u.parentNode;al(d),d.append(u),n.items.clear()}Ui(n,a,!o)}else r={pending:new Set(a),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Ui(n,a,e=!0){var i;if(n.pending.size>0){i=new Set;for(const l of n.pending.values())for(const s of l)i.add(n.items.get(s).e)}for(var t=0;t<a.length;t++){var r=a[t];if(i!=null&&i.has(r)){r.f|=Qa;const l=document.createDocumentFragment();dt(r,l)}else pa(a[t],e)}}var Rt;function Dn(n,a,e,i,t,r=null){var l=n,s=new Map,o=(a&Qt)!==0;if(o){var u=n;l=u.appendChild(Sn())}var d=null,g=Js(()=>{var K=e();return Ut(K)?K:K==null?[]:bi(K)}),k=new Map,h=!0;function c(K){if((y.effect.f&ia)===0){y.pending.delete(K);var B=p(g);y.fallback=d,Pl(y,B,l,a,i),d!==null&&(B.length===0?(d.f&Qa)===0?oi(d):(d.f^=Qa,Ae(d,null,l)):Gn(d,()=>{d=null}))}}function f(K){y.pending.delete(K)}var b=ut(()=>{for(var K=p(g),B=K.length,S=new Set,M=v,q=jr(),F=0;F<B;F+=1){var xa=K[F],Ea=i(xa,F),aa=h?null:s.get(Ea);aa?(aa.v&&oe(aa.v,xa),aa.i&&oe(aa.i,F),q&&M.unskip_effect(aa.e)):(aa=xl(s,h?l:Rt??(Rt=Sn()),xa,Ea,F,t,a,e),h||(aa.e.f|=Qa),s.set(Ea,aa)),S.add(Ea)}if(B===0&&r&&!d&&(h?d=Ta(()=>r(l)):(d=Ta(()=>r(Rt??(Rt=Sn()))),d.f|=Qa)),B>S.size&&Ts(),!h)if(k.set(M,S),q){for(const[tn,G]of s)S.has(tn)||M.skip_effect(G.e);M.oncommit(c),M.ondiscard(f)}else c(M);p(g)}),y={effect:b,items:s,pending:k,outrogroups:null,fallback:d};h=!1}function be(n){for(;n!==null&&(n.f&Ga)===0;)n=n.next;return n}function Pl(n,a,e,i,t){var aa,tn,G,$,Oa,hn,Yn,Je,$e;var r=(i&bs)!==0,l=a.length,s=n.items,o=be(n.effect.first),u,d=null,g,k=[],h=[],c,f,b,y;if(r)for(y=0;y<l;y+=1)c=a[y],f=t(c,y),b=s.get(f).e,(b.f&Qa)===0&&((tn=(aa=b.nodes)==null?void 0:aa.a)==null||tn.measure(),(g??(g=new Set)).add(b));for(y=0;y<l;y+=1){if(c=a[y],f=t(c,y),b=s.get(f).e,n.outrogroups!==null)for(const Ma of n.outrogroups)Ma.pending.delete(b),Ma.done.delete(b);if((b.f&ua)!==0&&(oi(b),r&&(($=(G=b.nodes)==null?void 0:G.a)==null||$.unfix(),(g??(g=new Set)).delete(b))),(b.f&Qa)!==0)if(b.f^=Qa,b===o)Ae(b,null,e);else{var K=d?d.next:o;b===n.effect.last&&(n.effect.last=b.prev),b.prev&&(b.prev.next=b.next),b.next&&(b.next.prev=b.prev),cn(n,d,b),cn(n,b,K),Ae(b,K,e),d=b,k=[],h=[],o=be(d.next);continue}if(b!==o){if(u!==void 0&&u.has(b)){if(k.length<h.length){var B=h[0],S;d=B.prev;var M=k[0],q=k[k.length-1];for(S=0;S<k.length;S+=1)Ae(k[S],B,e);for(S=0;S<h.length;S+=1)u.delete(h[S]);cn(n,M.prev,q.next),cn(n,d,M),cn(n,q,B),o=B,d=q,y-=1,k=[],h=[]}else u.delete(b),Ae(b,o,e),cn(n,b.prev,b.next),cn(n,b,d===null?n.effect.first:d.next),cn(n,d,b),d=b;continue}for(k=[],h=[];o!==null&&o!==b;)(u??(u=new Set)).add(o),h.push(o),o=be(o.next);if(o===null)continue}(b.f&Qa)===0&&k.push(b),d=b,o=be(b.next)}if(n.outrogroups!==null){for(const Ma of n.outrogroups)Ma.pending.size===0&&(Ui(n,bi(Ma.done)),(Oa=n.outrogroups)==null||Oa.delete(Ma));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||u!==void 0){var F=[];if(u!==void 0)for(b of u)(b.f&ua)===0&&F.push(b);for(;o!==null;)(o.f&ua)===0&&o!==n.fallback&&F.push(o),o=be(o.next);var xa=F.length;if(xa>0){var Ea=(i&Qt)!==0&&l===0?e:null;if(r){for(y=0;y<xa;y+=1)(Yn=(hn=F[y].nodes)==null?void 0:hn.a)==null||Yn.measure();for(y=0;y<xa;y+=1)($e=(Je=F[y].nodes)==null?void 0:Je.a)==null||$e.fix()}Tl(n,F,Ea)}}r&&wn(()=>{var Ma,We;if(g!==void 0)for(b of g)(We=(Ma=b.nodes)==null?void 0:Ma.a)==null||We.apply()})}function xl(n,a,e,i,t,r,l,s){var o=(l&gs)!==0?(l&fs)===0?Vs(e,!1,!1):$n(e):null,u=(l&cs)!==0?$n(t):null;return{v:o,i:u,e:Ta(()=>(r(a,o??e,u??t,s),()=>{n.delete(i)}))}}function Ae(n,a,e){if(n.nodes)for(var i=n.nodes.start,t=n.nodes.end,r=a&&(a.f&Qa)===0?a.nodes.start:e;i!==null;){var l=Fe(i);if(r.before(i),i===t)return;i=l}}function cn(n,a,e){a===null?n.effect.first=e:a.next=e,e===null?n.effect.last=a:e.prev=a}function El(n,a,e=!1,i=!1,t=!1,r=!1){var l=n,s="";if(e)var o=n;X(()=>{var u=R;if(s!==(s=a()??"")){if(e){u.nodes=null,o.innerHTML=s,s!==""&&De(mn(o),o.lastChild);return}if(u.nodes!==null&&(Pr(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){var d=i?ws:t?_s:void 0,g=Sr(i?"svg":t?"math":"template",d);g.innerHTML=s;var k=i||t?g:g.content;if(De(mn(k),k.lastChild),i||t)for(;mn(k);)l.before(mn(k));else l.before(k)}}})}function Ml(n,a,e){var i=n==null?"":""+n;return i===""?null:i}function Rl(n,a){return n==null?null:String(n)}function Ze(n,a,e,i,t,r){var l=n[Ki];if(l!==e||l===void 0){var s=Ml(e);s==null?n.removeAttribute("class"):n.className=s,n[Ki]=e}return r}function fn(n,a,e,i){var t=n[Li];if(t!==a){var r=Rl(a);r==null?n.removeAttribute("style"):n.style.cssText=r,n[Li]=a}return i}const Nl=Symbol("is custom element"),Dl=Symbol("is html");function ae(n,a,e,i){var t=Cl(n),r=t[a];r!==(t[a]=e)&&(e==null?n.removeAttribute(a):typeof e!="string"&&Kl(n).has(a)?n[a]=e:n.setAttribute(a,e))}function Cl(n){return n[Xe]??(n[Xe]={[Nl]:n.nodeName.includes("-"),[Dl]:n.namespaceURI===nr})}var Nt=new Map;function Kl(n){var a=n.getAttribute("is")||n.nodeName,e=Nt.get(a);if(e)return e;Nt.set(a,e=new Set);for(var i,t=n,r=Element.prototype;r!==t;){i=us(t);for(var l in i)i[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&e.add(l);t=qt(t)}return e}function Dt(n,a,e=a){var i=new WeakSet;Hs(n,"input",async t=>{var r=t?n.defaultValue:n.value;if(r=Mi(n)?Ri(r):r,e(r),v!==null&&i.add(v),await dl(),r!==(r=a())){var l=n.selectionStart,s=n.selectionEnd,o=n.value.length;if(n.value=r??"",s!==null){var u=n.value.length;l===s&&s===o&&u>o?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=l,n.selectionEnd=Math.min(s,u))}}}),Br(a)==null&&n.value&&(e(Mi(n)?Ri(n.value):n.value),v!==null&&i.add(v)),Ir(()=>{var t=a();if(n===document.activeElement){var r=v;if(i.has(r))return}Mi(n)&&t===Ri(n.value)||n.type==="date"&&!t&&!n.value||t!==n.value&&(n.value=t??"")})}function Mi(n){var a=n.type;return a==="number"||a==="range"}function Ri(n){return n===""?null:+n}const Ll="5";var $t;typeof window<"u"&&(($t=window.__svelte??(window.__svelte={})).v??($t.v=new Set)).add(Ll);const zl=`---
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
`,Bl=`---
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
`,Hl=`---
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
`,Fl=`---
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
`,Gl=`---
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
`,Ol=`---
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
`,Jl=`---
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
`,$l=`---
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
`,Wl=`---
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
`,Ul=`---
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
`,Yl=`---
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
`,ql=`---
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
`,Zl=`---
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
`,Vl=`---
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
`,Xl=`---
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
`,Ql=`---
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
`,au=`---
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
`,nu=`---
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
`,eu=`---
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
`,iu=`---
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
`,tu=`---
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
`,ru=`---
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
`,su=`---
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
`,lu=`---
lang: en
number: 7
date: 2026-11-14
title: There Is / There Are
subtitle: Menyatakan ada — There is a book, There are two books
keywords: there is there are ada some any pertanyaan is there are there
---

Kemarin kita belajar membuat kalimat tentang kegiatan (Simple Present Tense: I eat, She works). Hari ini kita belajar cara mengatakan **"ada"** dalam bahasa Inggris: **there is** (ada — untuk satu benda) dan **there are** (ada — untuk banyak benda).

Dalam bahasa Indonesia, "ada" sama untuk satu atau banyak benda. Dalam bahasa Inggris, beda: satu benda pakai **there is**, banyak benda pakai **there are**. Ingat juga pelajaran #4: **is** dipakai untuk satu (he/she/it), **are** untuk banyak (we/they).

## 1. There is — ada satu benda

Pola:

> **There is + a/an + benda (tunggal)**

Kata **a** (dibaca "e") dipakai sebelum kata benda yang diawali huruf mati: a book (sebuah buku), a car (sebuah mobil). Kata **an** (dibaca "en") dipakai sebelum kata benda yang diawali huruf vokal (a, e, i, o, u): an apple (sebuah apel), an egg (sebuah telur).

Contoh:

- There is **a book** on the table. — Ada sebuah buku di atas meja. (table = meja; on = di atas)
- There is **an egg** in the kitchen. — Ada sebuah telur di dapur. (kitchen = dapur; in = di dalam)
- There is **a cat** in the house. — Ada seekor kucing di dalam rumah.
- There is **a teacher** in the classroom. — Ada seorang guru di dalam kelas. (classroom = ruang kelas)

## 2. There are — ada banyak benda

Pola:

> **There are + angka / some + benda (jamak)**

Kata **some** (dibaca "sam", artinya "beberapa / sejumlah") dipakai untuk jumlah yang tidak pasti. Untuk jumlah pasti, pakai angka dari pelajaran #3 (two, three, ten...).

Contoh:

- There are **two books** on the table. — Ada dua buku di atas meja.
- There are **three cats** in the house. — Ada tiga kucing di dalam rumah.
- There are **some students** in the classroom. — Ada beberapa murid di dalam kelas. (student = murid)
- There are **many people** in Jakarta. — Ada banyak orang di Jakarta. (many = banyak; people = orang-orang)

Perhatikan: benda jamak biasanya ditambah **-s** atau **-es** di akhir: book → books, cat → cats, student → students, watch → watches, box → boxes.

## 3. Bentuk negatif: there isn't / there aren't

Untuk mengatakan "tidak ada", pakai **there isn't** (there is not) untuk satu benda dan **there aren't** (there are not) untuk banyak benda:

- There **isn't** a book on the table. — Tidak ada buku di atas meja.
- There **isn't** any milk in the kitchen. — Tidak ada susu di dapur. (milk = susu)
- There **aren't** any students in the classroom. — Tidak ada murid di dalam kelas.
- There **aren't** many people here. — Tidak banyak orang di sini. (here = di sini)

Perhatikan: dalam kalimat negatif, **some** berubah menjadi **any** (dibaca "e-ni", artinya "ada / pun"). Ini aturan yang akan sering muncul: some untuk kalimat positif, any untuk kalimat negatif dan pertanyaan.

## 4. Bentuk pertanyaan: Is there...? / Are there...?

Untuk bertanya "apakah ada...?", letakkan **Is** atau **Are** di depan:

- **Is there** a book on the table? — Apakah ada buku di atas meja?
  - Yes, there is. / No, there isn't. — Ya, ada. / Tidak, tidak ada.
- **Is there** any milk in the kitchen? — Apakah ada susu di dapur?
  - Yes, there is. / No, there isn't. — Ya, ada. / Tidak, tidak ada.
- **Are there** any students in the classroom? — Apakah ada murid di dalam kelas?
  - Yes, there are. / No, there aren't. — Ya, ada. / Tidak, tidak ada.
- **Are there** two books on the table? — Apakah ada dua buku di atas meja?
  - Yes, there are. / No, there aren't. — Ya, ada. / Tidak, tidak ada.

Jawaban pendeknya memakai **there is / there isn't** dan **there are / there aren't** — bukan "yes, is" atau "yes, are".

## 5. Di mana? Kata depan tempat (prepositions of place)

Kalimat there is / there are paling sering dipakai bersama kata depan tempat (**preposition of place** — kata depan yang menunjukkan posisi):

- **in** (di dalam) — There is a book **in** the bag. (Ada buku di dalam tas.)
- **on** (di atas) — There are two books **on** the table. (Ada dua buku di atas meja.)
- **under** (di bawah) — There is a cat **under** the table. (Ada kucing di bawah meja.)
- **next to** (di samping) — There is a chair **next to** the table. (Ada kursi di samping meja.)
- **behind** (di belakang) — There is a car **behind** the house. (Ada mobil di belakang rumah.)
- **in front of** (di depan) — There is a tree **in front of** the house. (Ada pohon di depan rumah.)
- **between** (di antara) — There is a shop **between** the school and the mosque. (Ada toko di antara sekolah dan masjid.)

Coba gambarkan kamarmu dengan pola ini: "There is a bed in my room. There are two chairs next to the table." — Ada tempat tidur di kamarku. Ada dua kursi di samping meja.

## Contoh kalimat

- There is a book on the table. — Ada sebuah buku di atas meja.
- There are two books on the table. — Ada dua buku di atas meja.
- There is an egg in the kitchen. — Ada sebuah telur di dapur.
- There are some students in the classroom. — Ada beberapa murid di dalam kelas.
- There isn't any milk in the kitchen. — Tidak ada susu di dapur.
- There aren't any students in the classroom. — Tidak ada murid di dalam kelas.
- Is there a book on the table? — Apakah ada buku di atas meja?
- Are there two books on the table? — Apakah ada dua buku di atas meja?
- Yes, there is. / No, there isn't. — Ya, ada. / Tidak, tidak ada.
- There is a cat under the table. — Ada seekor kucing di bawah meja.
- There is a chair next to the table. — Ada sebuah kursi di samping meja.

## Latihan hari ini (5 menit)

Lihat sekelilingmu sekarang, lalu tulis atau ucapkan 5 kalimat:

1. Satu kalimat there is tentang benda di kamarmu (contoh: There is a bed in my room).
2. Satu kalimat there are tentang benda jamak (contoh: There are three books on the table).
3. Satu kalimat negatif: "There isn't any ___ in my room."
4. Satu pertanyaan: "Is there a ___ in your house?" lalu jawab sendiri: "Yes, there is." / "No, there isn't."
5. Satu kalimat dengan under / next to / behind.

**Contoh jawaban:** 1. There is a bed in my room. 2. There are two chairs next to the table. 3. There isn't any milk in my room. 4. Is there a cat in your house? No, there isn't. 5. There is a book under the table.

## Kamus

| English | Cara baca | Arti |
|---------|-----------|------|
| there is | dher iz | ada (satu benda) |
| there are | dher ar | ada (banyak benda) |
| there isn't | dher i-zent | tidak ada (satu benda) |
| there aren't | dher arnt | tidak ada (banyak benda) |
| a / an | e / en | sebuah / seorang |
| some | sam | beberapa / sejumlah |
| any | e-ni | ada / pun (untuk negatif & pertanyaan) |
| many | me-ni | banyak |
| book | buk | buku |
| table | tei-bel | meja |
| chair | cer | kursi |
| bag | beg | tas |
| bed | bed | tempat tidur |
| kitchen | ki-cen | dapur |
| house | haus | rumah |
| classroom | klas-rum | ruang kelas |
| school | skul | sekolah |
| shop | syop | toko |
| tree | tri | pohon |
| student | stu-dent | murid / pelajar |
| people | pi-pel | orang-orang |
| milk | milk | susu |
| apple | e-pel | apel |
| egg | eg | telur |
| in | in | di dalam |
| on | on | di atas |
| under | an-der | di bawah |
| next to | nekst tu | di samping |
| behind | bi-haind | di belakang |
| in front of | in front ov | di depan |
| between | bi-twin | di antara |
| here | hir | di sini |
| preposition of place | pre-po-zi-syen ov pleis | kata depan tempat |
| There is a book on the table. | dher iz e buk on de tei-bel | Ada sebuah buku di atas meja. |
| There are two books on the table. | dher ar tu buks on de tei-bel | Ada dua buku di atas meja. |
| Is there a book on the table? | iz dher e buk on de tei-bel | Apakah ada buku di atas meja? |
| Yes, there is. | yes, dher iz | Ya, ada. |
| No, there isn't. | nou, dher i-zent | Tidak, tidak ada. |
`,uu=`---
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
`,ou=`---
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
`,du=`---
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
`,mu=`---
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
`,ku=`---
lang: fr
number: 5
date: 2026-11-14
title: Kosakata Sehari-hari
subtitle: Keluarga, pekerjaan, dan makanan — le vocabulaire de tous les jours
keywords: kosakata vocabulaire keluarga famille pekerjaan métiers makanan nourriture minuman boissons
---

Kemarin kita belajar kata ganti dan dua kata kerja terpenting, **être** (menjadi / adalah) dan **avoir** (memiliki / mempunyai). Sekarang kita isi "kotak kata" kita: kosakata sehari-hari — **vocabulaire quotidien** (kosakata sehari-hari). Hari ini tiga kelompok kata yang paling sering dipakai: keluarga, pekerjaan, dan makanan.

Perhatikan: setiap kata benda Prancis di bawah ini ditulis bersama **le** (dibaca "luh", artinya "si / sang" untuk kata benda laki-laki) atau **la** (dibaca "la", artinya "si / sang" untuk kata benda perempuan). Kenapa ada le dan ada la? Itu soal **gender** (jenis kelamin kata benda) — pelajaran #6 besok akan membahasnya tuntas. Hari ini cukup hafalkan pasangannya: kata + le/la-nya sekaligus.

## 1. Keluarga (la famille — dibaca "la fa-MIY", artinya "keluarga")

| Prancis | Cara baca | Arti |
|---------|-----------|------|
| le père | luh PER | ayah |
| la mère | la MER | ibu |
| le frère | luh FRER | saudara laki-laki |
| la sœur | la SÖR | saudara perempuan |
| le fils | luh FIS | anak laki-laki |
| la fille | la FIY | anak perempuan |
| les parents | le pa-RONG | orang tua |
| les enfants | le zong-FONG | anak-anak |
| le mari | luh ma-RI | suami |
| la femme | la FAM | istri / perempuan |
| le grand-père | luh grong-PER | kakek |
| la grand-mère | la grong-MER | nenek |
| l'ami | la-MI | teman (laki-laki) |
| l'amie | la-MI | teman (perempuan) |

Contoh kalimat (pakai être dan avoir dari pelajaran #4):

- Mon père est professeur. = "mong PER e pro-fe-SÖR" — Ayah saya adalah seorang guru. (mon = saya punya / milik saya, dipakai untuk kata laki-laki)
- Ma mère est à la maison. = "ma MER e a la me-ZONG" — Ibu saya ada di rumah. (ma = saya punya / milik saya, dipakai untuk kata perempuan; maison = rumah)
- J'ai un frère et une sœur. = "zhe ENG FRER e un SÖR" — Saya punya seorang saudara laki-laki dan seorang saudara perempuan.
- Nous avons deux enfants. = "nu za-VONG DÖ zong-FONG" — Kami punya dua anak.
- Il est mon ami. = "il E mong a-MI" — Dia adalah teman saya.

## 2. Pekerjaan (les métiers — dibaca "le me-TYE", artinya "pekerjaan")

| Prancis | Cara baca | Arti |
|---------|-----------|------|
| le professeur | luh pro-fe-SÖR | guru / dosen |
| l'étudiant(e) | le-tu-DYONG(T) | pelajar / mahasiswa |
| le médecin | luh med-SENG | dokter |
| l'infirmier / l'infirmière | leng-fir-MYE / leng-fir-MYER | perawat (laki-laki / perempuan) |
| l'ingénieur | leng-zhe-NYÖR | insinyur |
| le cuisinier / la cuisinière | luh kui-zi-NYE / la kui-zi-NYER | juru masak (laki-laki / perempuan) |
| le chauffeur | luh sho-FÖR | sopir |
| le vendeur / la vendeuse | luh vong-DÖR / la vong-DÖZ | penjual (laki-laki / perempuan) |
| le policier | luh po-li-SYE | polisi |
| l'agriculteur | la-gri-kul-TÖR | petani |

Contoh kalimat:

- Je suis étudiant. = "zhuh SUI e-tu-DYONG" — Saya adalah seorang pelajar.
- Elle est médecin. = "el E med-SENG" — Dia (perempuan) adalah seorang dokter.
- Mon frère est ingénieur. = "mong FRER e eng-zhe-NYÖR" — Saudara laki-laki saya adalah seorang insinyur.
- Tu es vendeur ? = "tu E vong-DÖR?" — Apakah kamu seorang penjual?

Perhatikan: dalam bahasa Prancis, pekerjaan setelah être **tidak** memakai le/la atau un/une — langsung "Je suis professeur", bukan "Je suis un professeur". Ini berbeda dengan bahasa Inggris ("I am a teacher").

## 3. Makanan dan minuman (la nourriture et les boissons — dibaca "la nu-ri-TUR e le bwa-SONG", artinya "makanan dan minuman")

| Prancis | Cara baca | Arti |
|---------|-----------|------|
| le riz | luh RI | nasi |
| le pain | luh PENG | roti |
| la viande | la VYONGD | daging |
| le poisson | luh pwa-SONG | ikan |
| le poulet | luh pu-LE | ayam (daging ayam) |
| l'œuf | LÖF | telur |
| le lait | luh LE | susu |
| le café | luh ka-FE | kopi |
| le thé | luh TE | teh |
| l'eau | LO | air |
| le sucre | luh SUKR | gula |
| le fruit | luh FRUI | buah |
| le légume | luh le-GUM | sayuran |

Contoh kalimat (pakai J'ai faim / J'ai soif dari pelajaran #4):

- J'ai faim. Je veux du riz. = "zhe FENG. zhuh VÖ du RI" — Saya lapar. Saya mau nasi. (vouloir = mau / ingin; du = sebagian — akan dibahas di pelajaran artikel)
- J'ai soif. Je veux de l'eau. = "zhe SWAF. zhuh VÖ duh LO" — Saya haus. Saya mau air.
- Il a un café. = "il A ENG ka-FE" — Dia punya secangkir kopi.
- Nous avons du pain. = "nu za-VONG du PENG" — Kami punya roti.
- Tu as du thé ? = "tu A du TE?" — Apakah kamu punya teh?

Kata **vouloir** (dibaca "vu-LWAR", artinya "mau / ingin") muncul di sini sebagai bonus — konjugasinya lengkap akan kita pelajari di pelajaran #9.

## Contoh kalimat

- Mon père est médecin. — Ayah saya adalah seorang dokter.
- Ma mère est à la maison. — Ibu saya ada di rumah.
- J'ai un frère et une sœur. — Saya punya seorang saudara laki-laki dan seorang saudara perempuan.
- Nous avons deux enfants. — Kami punya dua anak.
- Je suis étudiant. — Saya adalah seorang pelajar.
- Elle est infirmière. — Dia (perempuan) adalah seorang perawat.
- J'ai faim. Je veux du riz. — Saya lapar. Saya mau nasi.
- J'ai soif. Je veux de l'eau. — Saya haus. Saya mau air.
- Il a un café. — Dia punya secangkir kopi.
- Tu as du thé ? — Apakah kamu punya teh?

## Latihan hari ini (5 menit)

Ucapkan dengan suara keras, lalu tulis:

1. Sebutkan tiga anggota keluargamu dalam bahasa Prancis (contoh: Mon père…, Ma mère…, J'ai un frère…).
2. Sebutkan pekerjaan ayah atau ibumu: "Mon père est …" / "Ma mère est …".
3. Sebutkan dua makanan dan dua minuman yang kamu suka: "J'aime le riz" (j'aime = saya suka — dari aimer, menyukai; akan dibahas lebih lanjut nanti).
4. Ucapkan "Saya lapar" dan "Saya haus" dalam bahasa Prancis.
5. Buat satu kalimat dengan avoir tentang sesuatu yang kamu punya di rumah (contoh: J'ai un chat).

**Contoh jawaban:** 1. Mon père est professeur. Ma mère est à la maison. J'ai une sœur. 2. Mon père est ingénieur. 3. J'aime le riz et le poulet. J'aime le café et le thé. 4. J'ai faim. J'ai soif. 5. J'ai un chat.

## Kamus

| Kata | Cara baca | Arti |
|------|-----------|------|
| vocabulaire | vo-ka-bu-LER | kosakata |
| quotidien(ne) | ko-ti-DYENG(DYEN) | sehari-hari |
| la famille | la fa-MIY | keluarga |
| le père | luh PER | ayah |
| la mère | la MER | ibu |
| le frère | luh FRER | saudara laki-laki |
| la sœur | la SÖR | saudara perempuan |
| le fils | luh FIS | anak laki-laki |
| la fille | la FIY | anak perempuan |
| les parents | le pa-RONG | orang tua |
| les enfants | le zong-FONG | anak-anak |
| le mari | luh ma-RI | suami |
| la femme | la FAM | istri / perempuan |
| le grand-père | luh grong-PER | kakek |
| la grand-mère | la grong-MER | nenek |
| l'ami / l'amie | la-MI | teman (laki-laki / perempuan) |
| les métiers | le me-TYE | pekerjaan |
| le professeur | luh pro-fe-SÖR | guru / dosen |
| l'étudiant(e) | le-tu-DYONG(T) | pelajar / mahasiswa |
| le médecin | luh med-SENG | dokter |
| l'infirmier / l'infirmière | leng-fir-MYE / leng-fir-MYER | perawat (laki-laki / perempuan) |
| l'ingénieur | leng-zhe-NYÖR | insinyur |
| le cuisinier / la cuisinière | luh kui-zi-NYE / la kui-zi-NYER | juru masak (laki-laki / perempuan) |
| le chauffeur | luh sho-FÖR | sopir |
| le vendeur / la vendeuse | luh vong-DÖR / la vong-DÖZ | penjual (laki-laki / perempuan) |
| le policier | luh po-li-SYE | polisi |
| l'agriculteur | la-gri-kul-TÖR | petani |
| la nourriture | la nu-ri-TUR | makanan |
| les boissons | le bwa-SONG | minuman |
| le riz | luh RI | nasi |
| le pain | luh PENG | roti |
| la viande | la VYONGD | daging |
| le poisson | luh pwa-SONG | ikan |
| le poulet | luh pu-LE | ayam (daging ayam) |
| l'œuf | LÖF | telur |
| le lait | luh LE | susu |
| le café | luh ka-FE | kopi |
| le thé | luh TE | teh |
| l'eau | LO | air |
| le sucre | luh SUKR | gula |
| le fruit | luh FRUI | buah |
| le légume | luh le-GUM | sayuran |
| la maison | la me-ZONG | rumah |
| mon / ma | MONG / MA | saya punya / milik saya |
| vouloir | vu-LWAR | mau / ingin |
| j'aime | ZHEM | saya suka |
| Je veux du riz. | zhuh VÖ du RI | Saya mau nasi. |
| J'ai faim. | zhe FENG | Saya lapar. |
| J'ai soif. | zhe SWAF | Saya haus. |
| Mon père est médecin. | mong PER e med-SENG | Ayah saya adalah seorang dokter. |
`;function mt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Un=mt();function Hr(n){Un=n}var Ee={exec:()=>null};function D(n,a=""){let e=typeof n=="string"?n:n.source;const i={replace:(t,r)=>{let l=typeof r=="string"?r:r.source;return l=l.replace(la.caret,"$1"),e=e.replace(t,l),i},getRegex:()=>new RegExp(e,a)};return i}var la={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},pu=/^(?:[ \t]*(?:\n|$))+/,hu=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gu=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Oe=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cu=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,kt=/(?:[*+-]|\d{1,9}[.)])/,Fr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Gr=D(Fr).replace(/bull/g,kt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),bu=D(Fr).replace(/bull/g,kt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),pt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fu=/^[^\n]+/,ht=/(?!\s*\])(?:\\.|[^\[\]\\])+/,yu=D(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ht).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vu=D(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,kt).getRegex(),yi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wu=D("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gt).replace("tag",yi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Or=D(pt).replace("hr",Oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),_u=D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Or).getRegex(),ct={blockquote:_u,code:hu,def:yu,fences:gu,heading:cu,hr:Oe,html:wu,lheading:Gr,list:vu,newline:pu,paragraph:Or,table:Ee,text:fu},Ct=D("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),ju={...ct,lheading:bu,table:Ct,paragraph:D(pt).replace("hr",Oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ct).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex()},Su={...ct,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ee,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(pt).replace("hr",Oe).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Gr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Au=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Iu=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Jr=/^( {2,}|\\)\n(?!\s*$)/,Tu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vi=/[\p{P}\p{S}]/u,bt=/[\s\p{P}\p{S}]/u,$r=/[^\s\p{P}\p{S}]/u,Pu=D(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,bt).getRegex(),Wr=/(?!~)[\p{P}\p{S}]/u,xu=/(?!~)[\s\p{P}\p{S}]/u,Eu=/(?:[^\s\p{P}\p{S}]|~)/u,Mu=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Ur=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ru=D(Ur,"u").replace(/punct/g,vi).getRegex(),Nu=D(Ur,"u").replace(/punct/g,Wr).getRegex(),Yr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Du=D(Yr,"gu").replace(/notPunctSpace/g,$r).replace(/punctSpace/g,bt).replace(/punct/g,vi).getRegex(),Cu=D(Yr,"gu").replace(/notPunctSpace/g,Eu).replace(/punctSpace/g,xu).replace(/punct/g,Wr).getRegex(),Ku=D("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,$r).replace(/punctSpace/g,bt).replace(/punct/g,vi).getRegex(),Lu=D(/\\(punct)/,"gu").replace(/punct/g,vi).getRegex(),zu=D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Bu=D(gt).replace("(?:-->|$)","-->").getRegex(),Hu=D("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Bu).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),di=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Fu=D(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",di).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qr=D(/^!?\[(label)\]\[(ref)\]/).replace("label",di).replace("ref",ht).getRegex(),Zr=D(/^!?\[(ref)\](?:\[\])?/).replace("ref",ht).getRegex(),Gu=D("reflink|nolink(?!\\()","g").replace("reflink",qr).replace("nolink",Zr).getRegex(),ft={_backpedal:Ee,anyPunctuation:Lu,autolink:zu,blockSkip:Mu,br:Jr,code:Iu,del:Ee,emStrongLDelim:Ru,emStrongRDelimAst:Du,emStrongRDelimUnd:Ku,escape:Au,link:Fu,nolink:Zr,punctuation:Pu,reflink:qr,reflinkSearch:Gu,tag:Hu,text:Tu,url:Ee},Ou={...ft,link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",di).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",di).getRegex()},Yi={...ft,emStrongRDelimAst:Cu,emStrongLDelim:Nu,url:D(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ju={...Yi,br:D(Jr).replace("{2,}","*").getRegex(),text:D(Yi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ve={normal:ct,gfm:ju,pedantic:Su},fe={normal:ft,gfm:Yi,breaks:Ju,pedantic:Ou},$u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Kt=n=>$u[n];function Wa(n,a){if(a){if(la.escapeTest.test(n))return n.replace(la.escapeReplace,Kt)}else if(la.escapeTestNoEncode.test(n))return n.replace(la.escapeReplaceNoEncode,Kt);return n}function Lt(n){try{n=encodeURI(n).replace(la.percentDecode,"%")}catch{return null}return n}function zt(n,a){var r;const e=n.replace(la.findPipe,(l,s,o)=>{let u=!1,d=s;for(;--d>=0&&o[d]==="\\";)u=!u;return u?"|":" |"}),i=e.split(la.splitPipe);let t=0;if(i[0].trim()||i.shift(),i.length>0&&!((r=i.at(-1))!=null&&r.trim())&&i.pop(),a)if(i.length>a)i.splice(a);else for(;i.length<a;)i.push("");for(;t<i.length;t++)i[t]=i[t].trim().replace(la.slashPipe,"|");return i}function ye(n,a,e){const i=n.length;if(i===0)return"";let t=0;for(;t<i&&n.charAt(i-t-1)===a;)t++;return n.slice(0,i-t)}function Wu(n,a){if(n.indexOf(a[1])===-1)return-1;let e=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===a[0])e++;else if(n[i]===a[1]&&(e--,e<0))return i;return e>0?-2:-1}function Bt(n,a,e,i,t){const r=a.href,l=a.title||null,s=n[1].replace(t.other.outputLinkReplace,"$1");i.state.inLink=!0;const o={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:r,title:l,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,o}function Uu(n,a,e){const i=n.match(e.other.indentCodeCompensation);if(i===null)return a;const t=i[1];return a.split(`
`).map(r=>{const l=r.match(e.other.beginningSpace);if(l===null)return r;const[s]=l;return s.length>=t.length?r.slice(t.length):r}).join(`
`)}var mi=class{constructor(n){j(this,"options");j(this,"rules");j(this,"lexer");this.options=n||Un}space(n){const a=this.rules.block.newline.exec(n);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(n){const a=this.rules.block.code.exec(n);if(a){const e=a[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?e:ye(e,`
`)}}}fences(n){const a=this.rules.block.fences.exec(n);if(a){const e=a[0],i=Uu(e,a[3]||"",this.rules);return{type:"code",raw:e,lang:a[2]?a[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):a[2],text:i}}}heading(n){const a=this.rules.block.heading.exec(n);if(a){let e=a[2].trim();if(this.rules.other.endingHash.test(e)){const i=ye(e,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(e=i.trim())}return{type:"heading",raw:a[0],depth:a[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const a=this.rules.block.hr.exec(n);if(a)return{type:"hr",raw:ye(a[0],`
`)}}blockquote(n){const a=this.rules.block.blockquote.exec(n);if(a){let e=ye(a[0],`
`).split(`
`),i="",t="";const r=[];for(;e.length>0;){let l=!1;const s=[];let o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))s.push(e[o]),l=!0;else if(!l)s.push(e[o]);else break;e=e.slice(o);const u=s.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${u}`:u,t=t?`${t}
${d}`:d;const g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,r,!0),this.lexer.state.top=g,e.length===0)break;const k=r.at(-1);if((k==null?void 0:k.type)==="code")break;if((k==null?void 0:k.type)==="blockquote"){const h=k,c=h.raw+`
`+e.join(`
`),f=this.blockquote(c);r[r.length-1]=f,i=i.substring(0,i.length-h.raw.length)+f.raw,t=t.substring(0,t.length-h.text.length)+f.text;break}else if((k==null?void 0:k.type)==="list"){const h=k,c=h.raw+`
`+e.join(`
`),f=this.list(c);r[r.length-1]=f,i=i.substring(0,i.length-k.raw.length)+f.raw,t=t.substring(0,t.length-h.raw.length)+f.raw,e=c.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:r,text:t}}}list(n){let a=this.rules.block.list.exec(n);if(a){let e=a[1].trim();const i=e.length>1,t={type:"list",raw:"",ordered:i,start:i?+e.slice(0,-1):"",loose:!1,items:[]};e=i?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=i?e:"[*+-]");const r=this.rules.other.listItemRegex(e);let l=!1;for(;n;){let o=!1,u="",d="";if(!(a=r.exec(n))||this.rules.block.hr.test(n))break;u=a[0],n=n.substring(u.length);let g=a[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),k=n.split(`
`,1)[0],h=!g.trim(),c=0;if(this.options.pedantic?(c=2,d=g.trimStart()):h?c=a[1].length+1:(c=a[2].search(this.rules.other.nonSpaceChar),c=c>4?1:c,d=g.slice(c),c+=a[1].length),h&&this.rules.other.blankLine.test(k)&&(u+=k+`
`,n=n.substring(k.length+1),o=!0),!o){const y=this.rules.other.nextBulletRegex(c),K=this.rules.other.hrRegex(c),B=this.rules.other.fencesBeginRegex(c),S=this.rules.other.headingBeginRegex(c),M=this.rules.other.htmlBeginRegex(c);for(;n;){const q=n.split(`
`,1)[0];let F;if(k=q,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),F=k):F=k.replace(this.rules.other.tabCharGlobal,"    "),B.test(k)||S.test(k)||M.test(k)||y.test(k)||K.test(k))break;if(F.search(this.rules.other.nonSpaceChar)>=c||!k.trim())d+=`
`+F.slice(c);else{if(h||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(g)||S.test(g)||K.test(g))break;d+=`
`+k}!h&&!k.trim()&&(h=!0),u+=q+`
`,n=n.substring(q.length+1),g=F.slice(c)}}t.loose||(l?t.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(l=!0));let f=null,b;this.options.gfm&&(f=this.rules.other.listIsTask.exec(d),f&&(b=f[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),t.items.push({type:"list_item",raw:u,task:!!f,checked:b,loose:!1,text:d,tokens:[]}),t.raw+=u}const s=t.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let o=0;o<t.items.length;o++)if(this.lexer.state.top=!1,t.items[o].tokens=this.lexer.blockTokens(t.items[o].text,[]),!t.loose){const u=t.items[o].tokens.filter(g=>g.type==="space"),d=u.length>0&&u.some(g=>this.rules.other.anyLine.test(g.raw));t.loose=d}if(t.loose)for(let o=0;o<t.items.length;o++)t.items[o].loose=!0;return t}}html(n){const a=this.rules.block.html.exec(n);if(a)return{type:"html",block:!0,raw:a[0],pre:a[1]==="pre"||a[1]==="script"||a[1]==="style",text:a[0]}}def(n){const a=this.rules.block.def.exec(n);if(a){const e=a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=a[2]?a[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",t=a[3]?a[3].substring(1,a[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):a[3];return{type:"def",tag:e,raw:a[0],href:i,title:t}}}table(n){var l;const a=this.rules.block.table.exec(n);if(!a||!this.rules.other.tableDelimiter.test(a[2]))return;const e=zt(a[1]),i=a[2].replace(this.rules.other.tableAlignChars,"").split("|"),t=(l=a[3])!=null&&l.trim()?a[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:a[0],header:[],align:[],rows:[]};if(e.length===i.length){for(const s of i)this.rules.other.tableAlignRight.test(s)?r.align.push("right"):this.rules.other.tableAlignCenter.test(s)?r.align.push("center"):this.rules.other.tableAlignLeft.test(s)?r.align.push("left"):r.align.push(null);for(let s=0;s<e.length;s++)r.header.push({text:e[s],tokens:this.lexer.inline(e[s]),header:!0,align:r.align[s]});for(const s of t)r.rows.push(zt(s,r.header.length).map((o,u)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[u]})));return r}}lheading(n){const a=this.rules.block.lheading.exec(n);if(a)return{type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:this.lexer.inline(a[1])}}paragraph(n){const a=this.rules.block.paragraph.exec(n);if(a){const e=a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const a=this.rules.block.text.exec(n);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(n){const a=this.rules.inline.escape.exec(n);if(a)return{type:"escape",raw:a[0],text:a[1]}}tag(n){const a=this.rules.inline.tag.exec(n);if(a)return!this.lexer.state.inLink&&this.rules.other.startATag.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:a[0]}}link(n){const a=this.rules.inline.link.exec(n);if(a){const e=a[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const r=ye(e.slice(0,-1),"\\");if((e.length-r.length)%2===0)return}else{const r=Wu(a[2],"()");if(r===-2)return;if(r>-1){const s=(a[0].indexOf("!")===0?5:4)+a[1].length+r;a[2]=a[2].substring(0,r),a[0]=a[0].substring(0,s).trim(),a[3]=""}}let i=a[2],t="";if(this.options.pedantic){const r=this.rules.other.pedanticHrefTitle.exec(i);r&&(i=r[1],t=r[3])}else t=a[3]?a[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i=i.slice(1):i=i.slice(1,-1)),Bt(a,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:t&&t.replace(this.rules.inline.anyPunctuation,"$1")},a[0],this.lexer,this.rules)}}reflink(n,a){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){const i=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),t=a[i.toLowerCase()];if(!t){const r=e[0].charAt(0);return{type:"text",raw:r,text:r}}return Bt(e,t,e[0],this.lexer,this.rules)}}emStrong(n,a,e=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!i||i[3]&&e.match(this.rules.other.unicodeAlphaNumeric))return;if(!(i[1]||i[2]||"")||!e||this.rules.inline.punctuation.exec(e)){const r=[...i[0]].length-1;let l,s,o=r,u=0;const d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,a=a.slice(-1*n.length+r);(i=d.exec(a))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(s=[...l].length,i[3]||i[4]){o+=s;continue}else if((i[5]||i[6])&&r%3&&!((r+s)%3)){u+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+u);const g=[...i[0]][0].length,k=n.slice(0,r+i.index+g+s);if(Math.min(r,s)%2){const c=k.slice(1,-1);return{type:"em",raw:k,text:c,tokens:this.lexer.inlineTokens(c)}}const h=k.slice(2,-2);return{type:"strong",raw:k,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){const a=this.rules.inline.code.exec(n);if(a){let e=a[2].replace(this.rules.other.newLineCharGlobal," ");const i=this.rules.other.nonSpaceChar.test(e),t=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&t&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:a[0],text:e}}}br(n){const a=this.rules.inline.br.exec(n);if(a)return{type:"br",raw:a[0]}}del(n){const a=this.rules.inline.del.exec(n);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2])}}autolink(n){const a=this.rules.inline.autolink.exec(n);if(a){let e,i;return a[2]==="@"?(e=a[1],i="mailto:"+e):(e=a[1],i=e),{type:"link",raw:a[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(n){var e;let a;if(a=this.rules.inline.url.exec(n)){let i,t;if(a[2]==="@")i=a[0],t="mailto:"+i;else{let r;do r=a[0],a[0]=((e=this.rules.inline._backpedal.exec(a[0]))==null?void 0:e[0])??"";while(r!==a[0]);i=a[0],a[1]==="www."?t="http://"+a[0]:t=a[0]}return{type:"link",raw:a[0],text:i,href:t,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n){const a=this.rules.inline.text.exec(n);if(a){const e=this.lexer.state.inRawBlock;return{type:"text",raw:a[0],text:a[0],escaped:e}}}},kn=class qi{constructor(a){j(this,"tokens");j(this,"options");j(this,"state");j(this,"tokenizer");j(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=a||Un,this.options.tokenizer=this.options.tokenizer||new mi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={other:la,block:Ve.normal,inline:fe.normal};this.options.pedantic?(e.block=Ve.pedantic,e.inline=fe.pedantic):this.options.gfm&&(e.block=Ve.gfm,this.options.breaks?e.inline=fe.breaks:e.inline=fe.gfm),this.tokenizer.rules=e}static get rules(){return{block:Ve,inline:fe}}static lex(a,e){return new qi(e).lex(a)}static lexInline(a,e){return new qi(e).inlineTokens(a)}lex(a){a=a.replace(la.carriageReturn,`
`),this.blockTokens(a,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const i=this.inlineQueue[e];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(a,e=[],i=!1){var t,r,l;for(this.options.pedantic&&(a=a.replace(la.tabCharGlobal,"    ").replace(la.spaceLine,""));a;){let s;if((r=(t=this.options.extensions)==null?void 0:t.block)!=null&&r.some(u=>(s=u.call({lexer:this},a,e))?(a=a.substring(s.raw.length),e.push(s),!0):!1))continue;if(s=this.tokenizer.space(a)){a=a.substring(s.raw.length);const u=e.at(-1);s.raw.length===1&&u!==void 0?u.raw+=`
`:e.push(s);continue}if(s=this.tokenizer.code(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.at(-1).src=u.text):e.push(s);continue}if(s=this.tokenizer.fences(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(a)){a=a.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(a)){a=a.substring(s.raw.length),e.push(s);continue}let o=a;if((l=this.options.extensions)!=null&&l.startBlock){let u=1/0;const d=a.slice(1);let g;this.options.extensions.startBlock.forEach(k=>{g=k.call({lexer:this},d),typeof g=="number"&&g>=0&&(u=Math.min(u,g))}),u<1/0&&u>=0&&(o=a.substring(0,u+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){const u=e.at(-1);i&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(s),i=o.length!==a.length,a=a.substring(s.raw.length);continue}if(s=this.tokenizer.text(a)){a=a.substring(s.raw.length);const u=e.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+s.raw,u.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(s);continue}if(a){const u="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,e}inline(a,e=[]){return this.inlineQueue.push({src:a,tokens:e}),e}inlineTokens(a,e=[]){var s,o,u;let i=a,t=null;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,t.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(t=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,l="";for(;a;){r||(l=""),r=!1;let d;if((o=(s=this.options.extensions)==null?void 0:s.inline)!=null&&o.some(k=>(d=k.call({lexer:this},a,e))?(a=a.substring(d.raw.length),e.push(d),!0):!1))continue;if(d=this.tokenizer.escape(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.tag(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.link(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.reflink(a,this.tokens.links)){a=a.substring(d.raw.length);const k=e.at(-1);d.type==="text"&&(k==null?void 0:k.type)==="text"?(k.raw+=d.raw,k.text+=d.text):e.push(d);continue}if(d=this.tokenizer.emStrong(a,i,l)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.codespan(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.br(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.del(a)){a=a.substring(d.raw.length),e.push(d);continue}if(d=this.tokenizer.autolink(a)){a=a.substring(d.raw.length),e.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(a))){a=a.substring(d.raw.length),e.push(d);continue}let g=a;if((u=this.options.extensions)!=null&&u.startInline){let k=1/0;const h=a.slice(1);let c;this.options.extensions.startInline.forEach(f=>{c=f.call({lexer:this},h),typeof c=="number"&&c>=0&&(k=Math.min(k,c))}),k<1/0&&k>=0&&(g=a.substring(0,k+1))}if(d=this.tokenizer.inlineText(g)){a=a.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),r=!0;const k=e.at(-1);(k==null?void 0:k.type)==="text"?(k.raw+=d.raw,k.text+=d.text):e.push(d);continue}if(a){const k="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(k);break}else throw new Error(k)}}return e}},ki=class{constructor(n){j(this,"options");j(this,"parser");this.options=n||Un}space(n){return""}code({text:n,lang:a,escaped:e}){var r;const i=(r=(a||"").match(la.notSpaceStart))==null?void 0:r[0],t=n.replace(la.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Wa(i)+'">'+(e?t:Wa(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:Wa(t,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:a}){return`<h${a}>${this.parser.parseInline(n)}</h${a}>
`}hr(n){return`<hr>
`}list(n){const a=n.ordered,e=n.start;let i="";for(let l=0;l<n.items.length;l++){const s=n.items[l];i+=this.listitem(s)}const t=a?"ol":"ul",r=a&&e!==1?' start="'+e+'"':"";return"<"+t+r+`>
`+i+"</"+t+`>
`}listitem(n){var e;let a="";if(n.task){const i=this.checkbox({checked:!!n.checked});n.loose?((e=n.tokens[0])==null?void 0:e.type)==="paragraph"?(n.tokens[0].text=i+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=i+" "+Wa(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):a+=i+" "}return a+=this.parser.parse(n.tokens,!!n.loose),`<li>${a}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let a="",e="";for(let t=0;t<n.header.length;t++)e+=this.tablecell(n.header[t]);a+=this.tablerow({text:e});let i="";for(let t=0;t<n.rows.length;t++){const r=n.rows[t];e="";for(let l=0;l<r.length;l++)e+=this.tablecell(r[l]);i+=this.tablerow({text:e})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const a=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+a+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Wa(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:a,tokens:e}){const i=this.parser.parseInline(e),t=Lt(n);if(t===null)return i;n=t;let r='<a href="'+n+'"';return a&&(r+=' title="'+Wa(a)+'"'),r+=">"+i+"</a>",r}image({href:n,title:a,text:e,tokens:i}){i&&(e=this.parser.parseInline(i,this.parser.textRenderer));const t=Lt(n);if(t===null)return Wa(e);n=t;let r=`<img src="${n}" alt="${e}"`;return a&&(r+=` title="${Wa(a)}"`),r+=">",r}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Wa(n.text)}},yt=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},pn=class Zi{constructor(a){j(this,"options");j(this,"renderer");j(this,"textRenderer");this.options=a||Un,this.options.renderer=this.options.renderer||new ki,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yt}static parse(a,e){return new Zi(e).parse(a)}static parseInline(a,e){return new Zi(e).parseInline(a)}parse(a,e=!0){var t,r;let i="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&r[s.type]){const u=s,d=this.options.extensions.renderers[u.type].call({parser:this},u);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){i+=d||"";continue}}const o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let u=o,d=this.renderer.text(u);for(;l+1<a.length&&a[l+1].type==="text";)u=a[++l],d+=`
`+this.renderer.text(u);e?i+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):i+=d;continue}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return i}parseInline(a,e=this.renderer){var t,r;let i="";for(let l=0;l<a.length;l++){const s=a[l];if((r=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&r[s.type]){const u=this.options.extensions.renderers[s.type].call({parser:this},s);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=u||"";continue}}const o=s;switch(o.type){case"escape":{i+=e.text(o);break}case"html":{i+=e.html(o);break}case"link":{i+=e.link(o);break}case"image":{i+=e.image(o);break}case"strong":{i+=e.strong(o);break}case"em":{i+=e.em(o);break}case"codespan":{i+=e.codespan(o);break}case"br":{i+=e.br(o);break}case"del":{i+=e.del(o);break}case"text":{i+=e.text(o);break}default:{const u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return i}},Di,ii=(Di=class{constructor(n){j(this,"options");j(this,"block");this.options=n||Un}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?kn.lex:kn.lexInline}provideParser(){return this.block?pn.parse:pn.parseInline}},j(Di,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Di),Yu=class{constructor(...n){j(this,"defaults",mt());j(this,"options",this.setOptions);j(this,"parse",this.parseMarkdown(!0));j(this,"parseInline",this.parseMarkdown(!1));j(this,"Parser",pn);j(this,"Renderer",ki);j(this,"TextRenderer",yt);j(this,"Lexer",kn);j(this,"Tokenizer",mi);j(this,"Hooks",ii);this.use(...n)}walkTokens(n,a){var i,t;let e=[];for(const r of n)switch(e=e.concat(a.call(this,r)),r.type){case"table":{const l=r;for(const s of l.header)e=e.concat(this.walkTokens(s.tokens,a));for(const s of l.rows)for(const o of s)e=e.concat(this.walkTokens(o.tokens,a));break}case"list":{const l=r;e=e.concat(this.walkTokens(l.items,a));break}default:{const l=r;(t=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&t[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{const o=l[s].flat(1/0);e=e.concat(this.walkTokens(o,a))}):l.tokens&&(e=e.concat(this.walkTokens(l.tokens,a)))}}return e}use(...n){const a=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{const i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){const r=a.renderers[t.name];r?a.renderers[t.name]=function(...l){let s=t.renderer.apply(this,l);return s===!1&&(s=r.apply(this,l)),s}:a.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=a[t.level];r?r.unshift(t.tokenizer):a[t.level]=[t.tokenizer],t.start&&(t.level==="block"?a.startBlock?a.startBlock.push(t.start):a.startBlock=[t.start]:t.level==="inline"&&(a.startInline?a.startInline.push(t.start):a.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(a.childTokens[t.name]=t.childTokens)}),i.extensions=a),e.renderer){const t=this.defaults.renderer||new ki(this.defaults);for(const r in e.renderer){if(!(r in t))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;const l=r,s=e.renderer[l],o=t[l];t[l]=(...u)=>{let d=s.apply(t,u);return d===!1&&(d=o.apply(t,u)),d||""}}i.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new mi(this.defaults);for(const r in e.tokenizer){if(!(r in t))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const l=r,s=e.tokenizer[l],o=t[l];t[l]=(...u)=>{let d=s.apply(t,u);return d===!1&&(d=o.apply(t,u)),d}}i.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new ii;for(const r in e.hooks){if(!(r in t))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;const l=r,s=e.hooks[l],o=t[l];ii.passThroughHooks.has(r)?t[l]=u=>{if(this.defaults.async)return Promise.resolve(s.call(t,u)).then(g=>o.call(t,g));const d=s.call(t,u);return o.call(t,d)}:t[l]=(...u)=>{let d=s.apply(t,u);return d===!1&&(d=o.apply(t,u)),d}}i.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,r=e.walkTokens;i.walkTokens=function(l){let s=[];return s.push(r.call(this,l)),t&&(s=s.concat(t.call(this,l))),s}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,a){return kn.lex(n,a??this.defaults)}parser(n,a){return pn.parse(n,a??this.defaults)}parseMarkdown(n){return(e,i)=>{const t={...i},r={...this.defaults,...t},l=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&t.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=n);const s=r.hooks?r.hooks.provideLexer():n?kn.lex:kn.lexInline,o=r.hooks?r.hooks.provideParser():n?pn.parse:pn.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(e):e).then(u=>s(u,r)).then(u=>r.hooks?r.hooks.processAllTokens(u):u).then(u=>r.walkTokens?Promise.all(this.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>o(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(l);try{r.hooks&&(e=r.hooks.preprocess(e));let u=s(e,r);r.hooks&&(u=r.hooks.processAllTokens(u)),r.walkTokens&&this.walkTokens(u,r.walkTokens);let d=o(u,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(u){return l(u)}}}onError(n,a){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+Wa(e.message+"",!0)+"</pre>";return a?Promise.resolve(i):i}if(a)return Promise.reject(e);throw e}}},Wn=new Yu;function C(n,a){return Wn.parse(n,a)}C.options=C.setOptions=function(n){return Wn.setOptions(n),C.defaults=Wn.defaults,Hr(C.defaults),C};C.getDefaults=mt;C.defaults=Un;C.use=function(...n){return Wn.use(...n),C.defaults=Wn.defaults,Hr(C.defaults),C};C.walkTokens=function(n,a){return Wn.walkTokens(n,a)};C.parseInline=Wn.parseInline;C.Parser=pn;C.parser=pn.parse;C.Renderer=ki;C.TextRenderer=yt;C.Lexer=kn;C.lexer=kn.lex;C.Tokenizer=mi;C.Hooks=ii;C.parse=C;C.options;C.setOptions;C.use;C.walkTokens;C.parseInline;pn.parse;kn.lex;const ln={cyber:{code:"cyber",name:"Cybersecurity",label:"Cybersecurity",accent:"#3a5a44",schedule:"Senin–Jumat · 07.00 WIB",next:"Update software & patch keamanan"},fr:{code:"fr",name:"Français",label:"Bahasa Prancis",accent:"#2e4e6b",schedule:"Setiap hari · 05.00 WIB",next:"Artikel & gender kata benda"},en:{code:"en",name:"English",label:"Bahasa Inggris",accent:"#a85b38",schedule:"Setiap hari · 06.00 WIB",next:"Have / has"},ai:{code:"ai",name:"AI Engineer",label:"AI Engineer",accent:"#8a6d2b",schedule:"Senin–Jumat · 10.30 WIB",next:"CNN & Transformer"}},Ni=["cyber","fr","en","ai"],qu=Object.assign({"../../lessons/ai-01-apa-itu-ai-engineer.md":zl,"../../lessons/ai-02-python-untuk-ai.md":Bl,"../../lessons/ai-03-matematika-untuk-ai.md":Hl,"../../lessons/ai-04-cara-kerja-ml.md":Fl,"../../lessons/ai-05-ml-klasik-scikit-learn.md":Gl,"../../lessons/ai-06-evaluasi-model.md":Ol,"../../lessons/ai-07-neural-network-pytorch.md":Jl,"../../lessons/cyber-01-apa-itu-cybersecurity.md":$l,"../../lessons/cyber-02-cia-triad.md":Wl,"../../lessons/cyber-03-jenis-ancaman.md":Ul,"../../lessons/cyber-04-password-autentikasi.md":Yl,"../../lessons/cyber-05-phishing.md":ql,"../../lessons/cyber-06-malware.md":Zl,"../../lessons/cyber-07-wifi.md":Vl,"../../lessons/cyber-08-keamanan-hp.md":Xl,"../../lessons/cyber-09-privasi-jejak-digital.md":Ql,"../../lessons/cyber-10-backup-dan-pemulihan.md":au,"../../lessons/en-01-alphabet.md":nu,"../../lessons/en-02-greetings.md":eu,"../../lessons/en-03-numbers-days-time.md":iu,"../../lessons/en-04-pronouns-to-be.md":tu,"../../lessons/en-05-kosakata-sehari-hari.md":ru,"../../lessons/en-06-kalimat-sederhana-present-tense.md":su,"../../lessons/en-07-there-is-there-are.md":lu,"../../lessons/fr-01-alphabet.md":uu,"../../lessons/fr-02-greetings.md":ou,"../../lessons/fr-03-numbers-days-time.md":du,"../../lessons/fr-04-kata-ganti-etre-avoir.md":mu,"../../lessons/fr-05-kosakata-sehari-hari.md":ku});function Zu(n){const a=n.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/),e={};let i=n;if(a){i=a[2];for(const t of a[1].split(`
`)){const r=t.indexOf(":");r>-1&&(e[t.slice(0,r).trim()]=t.slice(r+1).trim())}}return{lang:e.lang,number:Number(e.number),date:e.date,title:e.title,subtitle:e.subtitle||"",keywords:e.keywords||"",html:C.parse(i),slug:`${e.lang}-${e.number}`}}const pi=Object.values(qu).map(Zu).filter(n=>n.lang&&n.number&&n.date&&n.title).sort((n,a)=>n.date<a.date?-1:n.date>a.date?1:n.number-a.number);function Vi(n){return pi.filter(a=>a.lang===n).sort((a,e)=>a.number-e.number)}function Vu(n,a){return pi.find(e=>e.lang===n&&e.number===Number(a))}function Xu(n){const a=Vi(n.lang),e=a.findIndex(i=>i.number===n.number);return{prev:a[e-1]||null,next:a[e+1]||null}}const Qu=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],ao=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];function no(n){const[a,e,i]=n.split("-").map(Number);return`${i} ${Qu[e-1]} ${a}`}function Ht(n){const[a,e,i]=n.split("-").map(Number);return`${i} ${ao[e-1]} ${a}`}const eo="14 November 2026",Ft="#6b4a6e",io=[{slug:"fridays-two-missing-reminders",title:"Friday's Two Missing Reminders",date:"2026-11-13",description:"Dua pengingat Jumat 13 November tidak sampai — tilawah Maghrib dan Al-Kahfi 11.00 — penelusuran dan tindak lanjut."},{slug:"tuesdays-missing-dzuhur",title:"Tuesday's Missing Dzuhur",date:"2026-11-10",description:"Pengingat Dzuhur Selasa 10 November tidak sampai, padahal Asar hari itu tepat waktu — penelusuran penyebab."},{slug:"the-missing-asar-reminder",title:"The Missing Asar Reminder",date:"2026-11-09",description:"Pengingat Asar Senin 9 November tidak sampai, enam pengingat lain tepat waktu — penelusuran penyebab."},{slug:"asar-sabtu-tepat-waktu",title:"Asar Sabtu Tepat Waktu",date:"2026-11-07",description:"Ketujuh pengingat Sabtu 7 November semuanya sampai; keterlambatan Jumat ternyata hanya sekali saja."},{slug:"first-full-day-of-reminders",title:"First Full Day of Reminders",date:"2026-11-06",description:"Hari pertama semua pengingat berjalan sendiri — sembilan pengingat sampai, Asar telat 12 menit."}];function to(){return[...io].sort((n,a)=>n.date<a.date?1:n.date>a.date?-1:0)}const ro="#2f6b5e",so="14 November 2026",Vr=[{title:"Gaya Desain",intro:"67 skill gaya visual dari bergside/awesome-design-skills — tiap gaya adalah satu sistem desain lengkap (tipografi, warna, layout, komponen) yang dipakai saat membuat halaman atau aplikasi.",items:[{name:"agentic",desc:"Antarmuka AI-first yang percakapan, kontrol minimal, alur tugas yang didelegasikan."},{name:"ant",desc:"Sistem desain enterprise yang terstruktur, jelas, dan konsisten untuk aplikasi padat data."},{name:"artistic",desc:"Gaya ekspresif kontras tinggi, tipografi kreatif, dan warna berani."},{name:"basic",desc:"Bahasa visual ala cetak untuk buku, majalah, dan laporan — grid editorial, tipografi ekspresif."},{name:"bento",desc:"Grid modular ala kartu bento, hierarki jelas, spasi lembut, mudah dipindai."},{name:"bold",desc:"Kehadiran visual kuat, tipografi tebal, warna kontras tinggi, layout tegas."},{name:"brutalism",desc:"Estetika mentah anti-desain ala arsitektur beton, elemen polos, layout mengejutkan."},{name:"cafe",desc:"Suasana kafe yang hangat, warna lembut, tipografi santai."},{name:"claude",desc:"Estetika jurnal riset di atas batu hangat — editorial, otoritatif, hampir monokrom."},{name:"claymorphism",desc:"Bentuk 3D lembut membulat seperti tanah liat, playful, warna ceria."},{name:"clean",desc:"Sederhana, whitespace luas, tipografi mudah dibaca, palet warna terbatas."},{name:"codex",desc:"Kanvas kosong radikal minimal, hampir tanpa warna, tipografi memikul bobot visual."},{name:"colorful",desc:"Palet cerah kontras tinggi dan gradien untuk pengalaman yang hidup dan modern."},{name:"contemporary",desc:"Minimalis era kini, grid bento, dukungan dark mode, layout aksesibel."},{name:"corporate",desc:"Profesional dan selaras brand, grid terstruktur, pola enterprise konsisten."},{name:"cosmic",desc:"Sci-fi futuristik, tema gelap, aksen neon, elemen spasial imersif."},{name:"creative",desc:"Playful dan ekspresif, tipografi berkarakter, grafis berani untuk landing page."},{name:"dithered",desc:"Teknik pola titik ala retro untuk mensimulasikan gradasi dengan palet terbatas."},{name:"doodle",desc:"Gaya sketsa tangan, coretan, font tulisan tangan, garis tidak sempurna."},{name:"dramatic",desc:"Kontras tinggi teatrikal, layout berani, visual imersif yang mencuri perhatian."},{name:"editorial",desc:"Layout majalah, tipografi serif halus, grid terstruktur, pengalaman baca elegan."},{name:"enterprise",desc:"Estetika platform cloud tema gelap, grid modular, panel kaca, hierarki data kuat."},{name:"expressive",desc:"Penuh kepribadian, warna berani, grafis playful, layout dinamis."},{name:"fantasy",desc:"Estetika fantasi ala game, visual premium, palet kaya, nuansa imersif."},{name:"fiction",desc:"Kartun playful ala ilustrasi buku anak — latar krem hangat, tipografi display besar, blok warna jenuh."},{name:"flat",desc:"Minimalis dua dimensi, warna cerah, tanpa efek 3D, cepat dan ramah pengguna."},{name:"friendly",desc:"Ramah dan mudah didekati, elemen membulat, whitespace luas, palet pastel lembut."},{name:"futuristic",desc:"Berorientasi masa depan, tipografi tech, layout modern yang ramping."},{name:"geometric",desc:"Terstruktur geometris, tipografi bersih, warna netral, bentuk presisi."},{name:"glassmorphism",desc:"Efek kaca buram, lapisan tembus pandang, blur halus, border bercahaya."},{name:"gradient",desc:"Transisi warna halus dan permukaan kaya gradien, modern dan playful."},{name:"immersive",desc:"Antarmuka imersif ala pameran, memadukan cerita, animasi, dan gamifikasi."},{name:"impeccable",desc:"Estetika poster editorial modern — krem hangat dan oranye terbakar, percaya diri."},{name:"levels",desc:"Fokus konversi, menghilangkan gesekan dan mengarahkan pengguna ke aksi."},{name:"lingo",desc:"Playful minimal, warna cerah, bentuk membulat, border 3D taktil, ilustrasi ramah."},{name:"material",desc:"Material Design Google, permukaan berlapis, tema dinamis, motion bawaan."},{name:"matrix",desc:"Ala Matrix, gelap, elemen digital high-tech, fashion minimalis."},{name:"minimal",desc:"Serba minimal, whitespace, tipografi bersih, warna terkendali."},{name:"modern",desc:"Editorial kontemporer, tipografi serif, palet minimal, layout rapi."},{name:"mono",desc:"Monospace, nuansa hacker, kontras tinggi, densitas padat."},{name:"neobrutalism",desc:"Brutalisme modern, border tebal, aksen warna hidup, kontras tinggi."},{name:"neon",desc:"Efek neon elektrik, pasangan warna kontras tinggi, mencolok."},{name:"neumorphism",desc:"Elemen lembut timbul dengan bayangan dalam/luar di permukaan monokrom."},{name:"pacman",desc:"Retro arcade, font piksel, border titik-titik, warna kontras playful ala 8-bit."},{name:"paper",desc:"Tekstur kertas, nuansa cetak, warna minimal, tipografi serif/sans bersih."},{name:"perspective",desc:"Kedalaman spasial, tampilan isometrik, titik lenyap, elemen berlapis."},{name:"power",desc:"Estetika gelap premium, heading tebal, palet monokrom, nuansa mewah."},{name:"premium",desc:"Ala Apple, spasi presisi, tipografi modern, bahasa visual halus dan rapi."},{name:"professional",desc:"Rapi dan siap bisnis, tipografi modern, layout terstruktur, identitas tepercaya."},{name:"pulse",desc:"Dinamis dan hidup, border tebal, bentuk geometris, warna kontras, tipografi ekspresif."},{name:"refined",desc:"Minimal modern yang dikurasi, tipografi serif elegan, palet kalem."},{name:"retro",desc:"Nostalgia vintage, tipografi retro, palet kontras tinggi."},{name:"riso",desc:"Estetika cetak risograph dua warna, permukaan kertas off-white hangat."},{name:"roku",desc:"Dashboard aplikasi bernuansa ungu, navigasi atas, layout kartu, ramah developer."},{name:"sega",desc:"Arcade playful ala Sega — font piksel VT323, sudut tajam, tombol chunky."},{name:"shadcn",desc:"Ala shadcn/ui, komponen minimal bersih, palet monokrom, utility-first."},{name:"sketch",desc:"Sketsa tangan di kertas krem hangat, aksen teal lembut, heading tulisan tangan."},{name:"skeumorphism",desc:"Meniru dunia nyata, tekstur, efek 3D, metafora fisik yang intuitif."},{name:"sleek",desc:"Minimalis modern, garis bersih, palet warna disengaja, interaksi halus."},{name:"spacious",desc:"Whitespace lega, padding konsisten, layout berbasis grid, mudah dibaca."},{name:"square",desc:"Anggun dan halus, tipografi lembut, palet minimal, layout rapi."},{name:"stitch",desc:"Enterprise bersih kontras tinggi untuk workflow berbasis data, drag-and-drop."},{name:"storytelling",desc:"Desain berbasis narasi, visual dan interaksi memandu perjalanan emosional."},{name:"terracotta",desc:"Editorial bernuansa tanah liat — permukaan krem hangat, headline serif cokelat tinta, aksen terakota."},{name:"tetris",desc:"Ala game blok Tetris, warna playful, font display tebal, layout padat berenergi."},{name:"vibrant",desc:"Hidup dan berwarna, tipografi playful tebal, aksen hangat, energi dinamis."},{name:"vintage",desc:"Nostalgia 1950–1990, sentuhan skeuomorfik, tekstur grain, palet retro."}]},{title:"Desain, Frontend & Visualisasi",intro:"Skill untuk merancang dan membangun antarmuka, halaman, dashboard, dan visualisasi data.",items:[{name:"antislop",desc:"Standar anti-slop — menolak hasil generik dan klise ala AI di desain, kode, aset, dan tulisan."},{name:"antislop-ui",desc:"Standar anti-slop khusus UI — warna, layout, komponen, motion, dan performa halaman."},{name:"build-dashboard",desc:"Membangun dashboard HTML interaktif dengan grafik, filter, dan tabel."},{name:"dashboard-designer",desc:"Merancang dashboard data — memilih KPI, struktur layout, hierarki visual, dan alat BI."},{name:"data-visualization",desc:"Membuat visualisasi data efektif dengan Python (matplotlib, seaborn, plotly)."},{name:"design-taste-frontend",desc:"Prinsip selera dan estetika untuk membangun frontend yang enak dilihat."},{name:"form-design",desc:"Merancang formulir yang jelas dan mudah diisi."},{name:"frontend-design",desc:"Panduan arah visual yang khas saat membangun atau merombak UI."},{name:"hallmark",desc:"Skill desain web agar hasilnya terlihat benar-benar didesain, bukan hasil generatif."},{name:"landing-page-design",desc:"Sistem lengkap membangun landing page yang konversinya tinggi — struktur, copy, SEO, aturan visual."},{name:"screenshot_feedback_check",desc:"Memeriksa umpan balik screenshot beranotasi secara harfiah sebelum mengubah layout atau visual."},{name:"smb-product-shots",desc:"Foto produk untuk usaha kecil."},{name:"style-tryon",desc:"Menampilkan pakaian, sepatu, atau aksesori dipakai pengguna dari fotonya, lalu membantu membeli."},{name:"web-design-engineer",desc:"Membangun artefak visual berbasis browser — halaman, dashboard, prototipe, deck, animasi, mockup UI — dengan HTML/CSS/JS/React."}]},{title:"Pengembangan, AI & Cloud",intro:"Skill untuk membangun perangkat lunak, memakai API AI dan Google Cloud, serta mengelola deploy.",items:[{name:"agent-browser",desc:"Otomasi browser via CLI — navigasi situs, isi form, klik, screenshot, dan pengujian aplikasi web lokal."},{name:"app-creation",desc:"Membuat aplikasi."},{name:"cloud-run-basics",desc:"Dasar-dasar Cloud Run — deploy container serverless di Google Cloud."},{name:"custom-connector-setup",desc:"Menghubungkan layanan baru lewat API/MCP dan menyimpan kredensialnya dengan aman."},{name:"developing-genkit-go",desc:"Membangun aplikasi AI dengan Genkit (Go)."},{name:"developing-genkit-js",desc:"Membangun aplikasi AI dengan Genkit (JavaScript)."},{name:"developing-genkit-python",desc:"Membangun aplikasi AI dengan Genkit (Python)."},{name:"finding-google-skills",desc:"Mencari skill Google yang relevan dengan tugas."},{name:"firebase-basics",desc:"Dasar-dasar Firebase untuk aplikasi."},{name:"game-developer",desc:"Pengembangan game 2D di browser — canvas, tile map, gerakan avatar, collision."},{name:"gcloud",desc:"CLI gcloud untuk mengelola Google Cloud."},{name:"gemini-agents-api",desc:"Mengelola agen kustom di Gemini Enterprise Agent Platform."},{name:"gemini-api",desc:"Panduan memakai Gemini API di lingkungan enterprise (Vertex AI / Agent Platform)."},{name:"gemini-interactions-api",desc:"API Interactions Gemini — percakapan multi-turn yang dikelola server."},{name:"gemini-live-api",desc:"API Live Gemini untuk interaksi suara dan video realtime."},{name:"google-analytics-admin-api-basics",desc:"Mengelola akun dan properti via Google Analytics Admin API."},{name:"google-analytics-data-api-basics",desc:"Mengambil data laporan dari Google Analytics Data API."},{name:"google-cloud-storage-basics",desc:"Dasar-dasar Cloud Storage untuk menyimpan file."},{name:"marketspace-dev",desc:"Cara kerja repo Spacemarket — kantor virtual 2D (SvelteKit + Go + Postgres + WebSocket)."},{name:"modern-topdown-art",desc:"Seni 2D top-down modern ala Zelda untuk aset game."},{name:"muse_db",desc:"Memeriksa catatan internal Muse lewat query database — untuk diagnosis dan pelacakan."},{name:"pixel-art-workspace",desc:"Seni pixel-art untuk tema workspace 2D — palet terbatas, tile, sprite."},{name:"realtime-presence",desc:"Presence realtime multi-pengguna lewat WebSocket — posisi, broadcast, latensi."},{name:"retrieving-developer-knowledge",desc:"Mengambil pengetahuan developer Google — dokumentasi dan panduan resmi."},{name:"sign-in-with-google-web",desc:"Integrasi Sign In with Google untuk web."},{name:"vps_github_deploy",desc:"Memeriksa dan mengelola deploy GitHub di VPS."}]},{title:"Konten, Media & Gambar",intro:"Skill untuk membuat dan mengolah artikel, gambar, audio, video, dan media sosial.",items:[{name:"avatar-dance-videos",desc:"Membuat video dansa untuk avatar aktif Muse."},{name:"beautiful-article",desc:"Mengubah materi (URL, PDF, DOCX, Markdown, teks, screenshot) menjadi artikel HTML satu file yang cantik dan bisa dibuka offline."},{name:"generate_podcast",desc:"Meriset, menulis naskah, dan memproduksi episode podcast dengan satu atau beberapa suara."},{name:"gpt-image-2",desc:"Membuat dan mengedit gambar dengan GPT Image 2 — 80+ template: poster, UI, dan lainnya."},{name:"image-search",desc:"Mencari gambar di web dari kata kunci, untuk referensi visual."},{name:"kb-retriever",desc:"Mencari dan menjawab pertanyaan dari direktori knowledge base lokal (PDF/Excel)."},{name:"media-library",desc:"Mencari dan memeriksa galeri foto pengguna, termasuk galeri perangkat yang terhubung."},{name:"motion-showreel",desc:"Membuat video animasi motion graphics dari kode, output MP4 hingga 20 menit."},{name:"music-discovery",desc:"Mencari lagu, merekomendasikan musik, membuat playlist, dan memutar di perangkat."},{name:"social-content-performance",desc:"Menganalisis performa konten media sosial."},{name:"social-publishing",desc:"Mempublikasikan konten ke media sosial."},{name:"spoken-audio",desc:"Mengirim voice note atau pesan suara, atau membacakan teks sebagai file audio."},{name:"transcribe-recordings",desc:"Mentranskripsi audio atau video dalam potongan terbatas, bisa dilanjutkan tanpa mengulang."},{name:"web-video-presentation",desc:"Mengubah artikel atau naskah menjadi presentasi web 16:9 bergaya video, dengan narasi audio opsional."}]},{title:"Produktivitas, Bisnis & Keuangan",intro:"Skill untuk pekerjaan sehari-hari: dokumen, email, jadwal, tugas, keuangan, dan toko.",items:[{name:"advertising-campaigns",desc:"Membuat dan mengelola kampanye iklan (Meta Ads)."},{name:"business-finance",desc:"Pembukuan dan pembuatan invoice."},{name:"customer-outreach",desc:"Menjangkau pelanggan — email dan pesan penawaran."},{name:"documents",desc:"Membaca, menulis, dan merevisi dokumen, PDF, spreadsheet, dan presentasi."},{name:"email-management",desc:"Mencari, memilah, dan mengirim email dari mailbox yang tepat."},{name:"financial-planning",desc:"Membuat anggaran, menguji keterjangkauan pembelian, dan merencanakan pelunasan utang."},{name:"forget",desc:"Menghapus informasi yang pengguna minta untuk dilupakan dari memori."},{name:"goals",desc:"Panduan membuat dan mencapai tujuan jangka panjang pengguna."},{name:"groceries",desc:"Belanja groceries dan makanan siap saji via Instacart, Walmart, dan sejenisnya."},{name:"knowledge-organization",desc:"Mengelola catatan dan dokumen di Notion, Evernote, Google Docs/Drive."},{name:"marketplaces",desc:"Jual-beli atau menilai barang bekas di eBay, Facebook Marketplace, Craigslist."},{name:"meeting-follow-up",desc:"Mengubah catatan rapat menjadi keputusan, action item, dan rekap."},{name:"muse-early-access",desc:"Program early access Muse — bergabung, memeriksa, atau membatalkan pendaftaran."},{name:"muse-feedback",desc:"Mengirim feedback dan permintaan fitur ke tim Muse."},{name:"scheduling",desc:"Mencari waktu yang cocok lintas orang, kalender, dan timezone, lalu membuat undangan dan janji."},{name:"self-awareness",desc:"Pengetahuan tentang diri Muse — identitas, kemampuan, dan batasan."},{name:"share-ideas",desc:"Membagikan ide ke tab Ideas."},{name:"shopping",desc:"Mencari, membandingkan, dan membeli produk (bukan groceries)."},{name:"store-operations",desc:"Mengelola operasional toko (Shopify dan sejenisnya)."},{name:"subscription-status",desc:"Menjawab pertanyaan tentang langganan Muse — paket, kuota, dan harga."},{name:"task-management",desc:"Mengelola daftar tugas."},{name:"translation",desc:"Menerjemahkan teks antar bahasa."},{name:"wide-research",desc:"Riset web mendalam dengan banyak sumber."}]},{title:"Perjalanan, Tempat & Kehidupan Sehari-hari",intro:"Skill untuk bepergian, mencari tempat, menjaga kesehatan, dan mengurus rumah serta perangkat.",items:[{name:"device-data",desc:"Membaca kontak dan kalender dari perangkat yang terhubung."},{name:"event-tickets",desc:"Mencari dan membeli tiket acara (Ticketmaster dan lainnya)."},{name:"file-hosting",desc:"Menaruh file di tempat yang bisa dibuka orang yang tepat, lalu memberi link aman."},{name:"fitness-tracking",desc:"Meninjau aktivitas, tidur, pemulihan, dan pengukuran tubuh."},{name:"flight-booking",desc:"Mencari dan memesan penerbangan (Duffel, Google Flights)."},{name:"flight-tracking",desc:"Memeriksa status live penerbangan dan memantau perubahan jadwal."},{name:"health-review",desc:"Merangkum rekam kesehatan dan menyiapkan pertanyaan untuk dokter."},{name:"home-control",desc:"Mengontrol perangkat rumah pintar dan memeriksa rekaman kamera."},{name:"home-search",desc:"Mencari rumah atau apartemen."},{name:"hotel-booking",desc:"Membandingkan dan memesan hotel atau penginapan."},{name:"live-page-checks",desc:"Memeriksa harga, stok, atau ketersediaan produk terkini di halaman toko."},{name:"messaging",desc:"Mengirim pesan ke orang lain lewat WhatsApp, Messenger, Slack, dan sejenisnya."},{name:"mortgage-comparison",desc:"Membandingkan KPR atau hipotek."},{name:"place-discovery",desc:"Mencari dan membandingkan tempat — restoran, kafe, toko, taman, atraksi — dengan peta."},{name:"restaurant-reservations",desc:"Mencari restoran dengan meja tersedia, lalu memesan, mengubah, atau membatalkan."},{name:"trip-planning",desc:"Merencanakan perjalanan lengkap — penerbangan, menginap, transport, aktivitas."},{name:"trip-transport",desc:"Transportasi saat bepergian — rental mobil, kereta, feri, bus, antar-jemput bandara."},{name:"wearables-comms",desc:"Panggilan dan pesan dari kacamata pintar."},{name:"workout-planning",desc:"Merencanakan latihan."}]}];function lo(){return Vr.reduce((n,a)=>n+a.items.length,0)}var uo=J('<p class="lesson-subtitle"> </p>'),oo=J('<a><span class="nav-label">← Pelajaran sebelumnya</span> <span class="nav-title"> </span></a>'),mo=J("<span></span>"),ko=J('<a class="next-link"><span class="nav-label">Pelajaran berikutnya →</span> <span class="nav-title"> </span></a>'),po=J('<a class="back-link"> </a> <p class="eyebrow"> </p> <h1 class="lesson-title"> </h1> <!> <p class="lesson-meta"> </p> <div class="lesson-body"></div> <nav class="lesson-nav"><!> <!></nav>',1),ho=J('<a class="back-link" href="#/">← Kembali ke semua pelajaran</a> <p class="empty">Pelajaran tidak ditemukan.</p>',1);function go(n,a){at(a,!0);let e=da(()=>Vu(a.lang,a.number)),i=da(()=>p(e)?ln[p(e).lang]:null),t=da(()=>p(e)?Xu(p(e)):{prev:null,next:null});var r=ni(),l=yn(r);{var s=u=>{var d=po(),g=yn(d),k=N(g),h=_(g,2),c=N(h),f=_(h,2),b=N(f,!0),y=_(f,2);{var K=G=>{var $=uo(),Oa=N($,!0);X(()=>P(Oa,p(e).subtitle)),z(G,$)};za(y,G=>{p(e).subtitle&&G(K)})}var B=_(y,2),S=N(B),M=_(B,2);El(M,()=>p(e).html,!0);var q=_(M,2),F=L(q);{var xa=G=>{var $=oo(),Oa=_(L($),2),hn=N(Oa);X(()=>{ae($,"href",`#/${p(t).prev.lang??""}/${p(t).prev.number??""}`),P(hn,`#${p(t).prev.number??""} — ${p(t).prev.title??""}`)}),z(G,$)},Ea=G=>{var $=mo();z(G,$)};za(F,G=>{p(t).prev?G(xa):G(Ea,-1)})}var aa=_(F,2);{var tn=G=>{var $=ko(),Oa=_(L($),2),hn=N(Oa);X(()=>{ae($,"href",`#/${p(t).next.lang??""}/${p(t).next.number??""}`),P(hn,`#${p(t).next.number??""} — ${p(t).next.title??""}`)}),z(G,$)};za(aa,G=>{p(t).next&&G(tn)})}X(G=>{ae(g,"href",`#/${p(e).lang??""}`),P(k,`← Semua pelajaran ${p(i).name??""}`),fn(h,`color: ${p(i).accent??""}`),P(c,`${p(i).name??""} · Pelajaran #${p(e).number??""}`),P(b,p(e).title),P(S,`${G??""} · ${p(i).label??""} · ${p(i).schedule??""}`)},[()=>no(p(e).date)]),z(u,d)},o=u=>{var d=ho();z(u,d)};za(l,u=>{p(e)&&p(i)?u(s):u(o,-1)})}z(n,r),nt()}var co=J('<input class="search" type="search" placeholder="Cari pelajaran — mis. phishing, liaison, scikit-learn" aria-label="Cari pelajaran"/>'),bo=J('<a> <span class="n"> </span></a>'),fo=J('<p class="empty">Belum ada laporan.</p>'),Gt=J('<a class="lesson-row"><span class="num"> </span> <span class="main"><span class="title"> </span> <span class="sub"> </span></span> <span class="date"> </span> <span class="arrow">→</span></a>'),yo=J(`<section class="lang-section"><div class="lang-head"><h2>Laporan<span class="accent-dot"></span></h2> <span class="lang-meta"> </span></div> <p class="laporan-intro">Laporan dari temuan dan resolusi — dokumen web yang sebelumnya
          hanya dikirim lewat WhatsApp, disimpan di sini supaya bisa dibaca
          ulang kapan saja.</p> <!></section>`),Ot=J('<p class="empty"> </p>'),vo=J('<div class="skill-row"><span class="skill-name"> </span> <span class="skill-desc"> </span></div>'),wo=J('<h3 class="skill-group"> <span class="skill-count"> </span></h3> <p class="skill-intro"> </p> <!>',1),_o=J('<section class="lang-section"><div class="lang-head"><h2>Skill<span class="accent-dot"></span></h2> <span class="lang-meta"> </span></div> <p class="laporan-intro"> </p> <input class="search" type="search" placeholder="Cari skill — mis. brutalism, penerbangan, podcast" aria-label="Cari skill"/> <!></section>'),jo=J('<section class="lang-section"><div class="lang-head"><h2> <span class="accent-dot"></span></h2> <span class="lang-meta"> <br/> </span></div> <!></section>'),So=J('<div class="next-item"><div class="lang-name"> </div> <div class="topic"> </div> <div class="when"> </div></div>'),Ao=J('<section class="next-block"><h3>Selanjutnya</h3> <div class="next-grid"></div></section>'),Io=J("<!> <!>",1),To=J(`<header class="site-header"><div class="top"><a class="wordmark" href="#/">Polly<span>.</span></a> <span class="site-tag">Catatan belajar</span></div> <p class="intro">Semua pelajaran — cybersecurity, bahasa Prancis, bahasa Inggris, dan
        AI Engineer — dari hari pertama sampai hari ini. Bisa dicari dan
        dibaca ulang <em>kapan saja</em>.</p> <p class="count-line"> </p></header> <!> <nav class="tabs"><a href="#/">Semua</a> <a href="#/laporan">Laporan<span class="n"> </span></a> <a href="#/skill">Skill<span class="n"> </span></a> <!></nav> <!>`,1),Po=J(`<div class="wrap"><!> <footer class="site-footer"><p>Polly — catatan belajar harian: cybersecurity, bahasa Prancis, bahasa
      Inggris, dan AI Engineer.</p> <p>Pelajaran baru ditambahkan ke halaman ini setelah dikirim di WhatsApp.</p></footer></div>`);function xo(n,a){at(a,!0);let e=Ka(Xn(window.location.hash));It(()=>{const S=()=>{Va(e,window.location.hash,!0)};return window.addEventListener("hashchange",S),()=>window.removeEventListener("hashchange",S)});function i(S){const M=S.replace(/^#\/?/,"").split("/").filter(Boolean);if(M.length===1&&M[0]==="laporan")return{view:"home",tab:"laporan"};if(M.length===1&&M[0]==="skill")return{view:"home",tab:"skill"};const q=Object.keys(ln);return M.length===2&&q.includes(M[0])&&/^\d+$/.test(M[1])?{view:"lesson",lang:M[0],number:Number(M[1])}:M.length===1&&q.includes(M[0])?{view:"home",tab:M[0]}:{view:"home",tab:"all"}}let t=da(()=>i(p(e))),r=Ka(""),l=Ka(""),s=da(()=>p(l).trim().toLowerCase()),o=da(lo),u=da(()=>Vr.map(S=>({...S,items:S.items.filter(M=>p(s)?(M.name+" "+M.desc).toLowerCase().includes(p(s)):!0)})).filter(S=>S.items.length>0));It(()=>{p(t).view,p(t).lang,p(t).number,window.scrollTo(0,0)});let d=da(()=>p(r).trim().toLowerCase());function g(S){return p(d)?[S.title,S.subtitle,S.keywords].join(" ").toLowerCase().includes(p(d)):!0}let k=da(()=>pi.length),h=da(to),c=da(()=>p(t).tab==="all"?Ni:[p(t).tab]),f=da(()=>pi.some(g));var b=Po(),y=L(b);{var K=S=>{go(S,{get lang(){return p(t).lang},get number(){return p(t).number}})},B=S=>{var M=To(),q=yn(M),F=_(L(q),4),xa=N(F),Ea=_(q,2);{var aa=Z=>{var W=co();Dt(W,()=>p(r),V=>Va(r,V)),z(Z,W)};za(Ea,Z=>{p(t).tab!=="laporan"&&p(t).tab!=="skill"&&Z(aa)})}var tn=_(Ea,2),G=L(tn),$=_(G,2),Oa=_(L($)),hn=N(Oa,!0),Yn=_($,2),Je=_(L(Yn)),$e=N(Je,!0),Ma=_(Yn,2);Dn(Ma,17,()=>Ni,Nn,(Z,W)=>{var V=bo(),va=L(V),Pn=_(va),Ra=N(Pn,!0);X(Na=>{Ze(V,1,`tab ${p(t).tab===p(W)?"active":""}`),ae(V,"href",`#/${p(W)??""}`),P(va,ln[p(W)].name),P(Ra,Na)},[()=>Vi(p(W)).length]),z(Z,V)});var We=_(tn,2);{var Xr=Z=>{var W=yo(),V=L(W),va=L(V),Pn=_(L(va)),Ra=_(va,2),Na=N(Ra),wa=_(V,4);{var rn=oa=>{var _a=fo();z(oa,_a)},ha=oa=>{var _a=ni(),sn=yn(_a);Dn(sn,17,()=>p(h),Nn,(na,ra,Ja)=>{var ja=Gt(),$a=L(ja),qn=N($a,!0),gn=_($a,2),xn=L(gn),pe=N(xn,!0),he=_(xn,2),Da=N(he,!0),En=_(gn,2),Mn=N(En,!0);X((ge,Rn)=>{ae(ja,"href",`laporan/${p(ra).slug??""}/`),fn($a,`color: ${Ft}`),P(qn,ge),P(pe,p(ra).title),P(Da,p(ra).description),P(Mn,Rn)},[()=>String(Ja+1).padStart(2,"0"),()=>Ht(p(ra).date)]),z(na,ja)}),z(oa,_a)};za(wa,oa=>{p(h).length===0?oa(rn):oa(ha,-1)})}X(()=>{fn(Pn,`background: ${Ft}`),P(Na,`Temuan & resolusi · ${p(h).length??""} laporan`)}),z(Z,W)},Qr=Z=>{var W=_o(),V=L(W),va=L(V),Pn=_(L(va)),Ra=_(va,2),Na=N(Ra),wa=_(V,2),rn=N(wa),ha=_(wa,2),oa=_(ha,2);{var _a=na=>{var ra=Ot(),Ja=N(ra);X(ja=>P(Ja,`Tidak ada skill yang cocok dengan “${ja??""}”. Coba
            kata lain — mis. “brutalism”, “penerbangan”, atau “podcast”.`),[()=>p(l).trim()]),z(na,ra)},sn=na=>{var ra=ni(),Ja=yn(ra);Dn(Ja,17,()=>p(u),Nn,(ja,$a)=>{var qn=wo(),gn=yn(qn),xn=L(gn),pe=_(xn),he=N(pe),Da=_(gn,2),En=N(Da,!0),Mn=_(Da,2);Dn(Mn,17,()=>p($a).items,Nn,(ge,Rn)=>{var ce=vo(),Ue=L(ce),wi=N(Ue,!0),_i=_(Ue,2),ji=N(_i,!0);X(()=>{P(wi,p(Rn).name),P(ji,p(Rn).desc)}),z(ge,ce)}),X(()=>{P(xn,`${p($a).title??""} `),P(he,`${p($a).items.length??""} skill`),P(En,p($a).intro)}),z(ja,qn)}),z(na,ra)};za(oa,na=>{p(u).length===0?na(_a):na(sn,-1)})}X(()=>{fn(Pn,`background: ${ro}`),P(Na,`Daftar skill Muse · ${p(o)??""} skill`),P(rn,`Skill adalah panduan kerja yang dipakai Muse untuk mengerjakan
          tugas tertentu — misalnya memesan penerbangan, membangun
          dashboard, atau menerapkan satu gaya desain. Daftar ini memuat
          semua skill yang terpasang per ${so}, dikelompokkan
          berdasarkan fungsi, dengan penjelasan singkat tiap skill.`)}),Dt(ha,()=>p(l),na=>Va(l,na)),z(Z,W)},as=Z=>{var W=Ot(),V=N(W);X(va=>P(V,`Tidak ada pelajaran yang cocok dengan “${va??""}”. Coba kata lain —
        mis. “angka”, “sapaan”, atau “liaison”.`),[()=>p(r).trim()]),z(Z,W)},ns=Z=>{var W=Io(),V=yn(W);Dn(V,17,()=>p(c),Nn,(Ra,Na)=>{const wa=da(()=>ln[p(Na)]),rn=da(()=>Vi(p(Na)).filter(g));var ha=ni(),oa=yn(ha);{var _a=sn=>{var na=jo(),ra=L(na),Ja=L(ra),ja=L(Ja),$a=_(ja),qn=_(Ja,2),gn=L(qn),xn=_(gn,2,!0),pe=_(ra,2);Dn(pe,17,()=>p(rn),Nn,(he,Da)=>{var En=Gt(),Mn=L(En),ge=N(Mn,!0),Rn=_(Mn,2),ce=L(Rn),Ue=N(ce,!0),wi=_(ce,2),_i=N(wi,!0),ji=_(Rn,2),es=N(ji,!0);X((is,ts)=>{ae(En,"href",`#/${p(Da).lang??""}/${p(Da).number??""}`),fn(Mn,`color: ${p(wa).accent??""}`),P(ge,is),P(Ue,p(Da).title),P(_i,p(Da).subtitle),P(es,ts)},[()=>String(p(Da).number).padStart(2,"0"),()=>Ht(p(Da).date)]),z(he,En)}),X(()=>{P(ja,p(wa).name),fn($a,`background: ${p(wa).accent??""}`),P(gn,`${p(wa).label??""} · ${p(rn).length??""} pelajaran`),P(xn,p(wa).schedule)}),z(sn,na)};za(oa,sn=>{p(rn).length>0&&sn(_a)})}z(Ra,ha)});var va=_(V,2);{var Pn=Ra=>{var Na=Ao(),wa=_(L(Na),2);Dn(wa,21,()=>Ni,Nn,(rn,ha)=>{var oa=So(),_a=L(oa),sn=N(_a,!0),na=_(_a,2),ra=N(na,!0),Ja=_(na,2),ja=N(Ja,!0);X(()=>{fn(oa,`border-left-color: ${ln[p(ha)].accent??""}`),fn(_a,`color: ${ln[p(ha)].accent??""}`),P(sn,ln[p(ha)].name),P(ra,ln[p(ha)].next),P(ja,ln[p(ha)].schedule)}),z(rn,oa)}),z(Ra,Na)};za(va,Ra=>{p(d)||Ra(Pn)})}z(Z,W)};za(We,Z=>{p(t).tab==="laporan"?Z(Xr):p(t).tab==="skill"?Z(Qr,1):p(d)&&!p(f)?Z(as,2):Z(ns,-1)})}X(()=>{P(xa,`${p(k)??""} pelajaran · 4 jalur belajar · diperbarui ${eo}`),Ze(G,1,`tab ${p(t).tab==="all"?"active":""}`),Ze($,1,`tab ${p(t).tab==="laporan"?"active":""}`),P(hn,p(h).length),Ze(Yn,1,`tab ${p(t).tab==="skill"?"active":""}`),P($e,p(o))}),z(S,M)};za(y,S=>{p(t).view==="lesson"?S(K):S(B,-1)})}z(n,b),nt()}jl(xo,{target:document.getElementById("app")});
