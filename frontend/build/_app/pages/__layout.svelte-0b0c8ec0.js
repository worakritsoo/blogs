import{S as s,i as n,s as t,E as e,F as a,G as o,y as r,v as c,e as l,t as i,k as u,l as f,c as h,a as d,g as m,d as p,o as v,b as g,f as E,H as $,x as b,I as w,B as y,J as k,u as x,K as A,L as N,h as j,M as S}from"../chunks/vendor-ad0fc7d4.js";import{u as B}from"../chunks/user-dcdcb249.js";import{A as I}from"../chunks/Env-caf617d4.js";import{t as L}from"../chunks/postStore-c8f6769c.js";function O(s){let n,t,e,a,o,r,c,f,b,w,y=s[1].username+"";return{c(){n=l("a"),t=i("New"),e=u(),a=l("span"),o=i(y),r=u(),c=l("button"),f=i("Logout"),this.h()},l(s){n=h(s,"A",{href:!0,class:!0});var l=d(n);t=m(l,"New"),l.forEach(p),e=v(s),a=h(s,"SPAN",{class:!0});var i=d(a);o=m(i,y),i.forEach(p),r=v(s),c=h(s,"BUTTON",{});var u=d(c);f=m(u,"Logout"),u.forEach(p),this.h()},h(){g(n,"href","/blog/new"),g(n,"class","font-mono no-underline mr-3"),g(a,"class","font-mono text-gray-500")},m(l,i){E(l,n,i),$(n,t),E(l,e,i),E(l,a,i),$(a,o),E(l,r,i),E(l,c,i),$(c,f),b||(w=N(c,"click",s[2]),b=!0)},p(s,n){2&n&&y!==(y=s[1].username+"")&&j(o,y)},d(s){s&&p(n),s&&p(e),s&&p(a),s&&p(r),s&&p(c),b=!1,w()}}}function P(s){let n,t,e,a,o;return{c(){n=l("a"),t=i("Login"),e=u(),a=l("a"),o=i("Register"),this.h()},l(s){n=h(s,"A",{href:!0,class:!0});var r=d(n);t=m(r,"Login"),r.forEach(p),e=v(s),a=h(s,"A",{href:!0,class:!0});var c=d(a);o=m(c,"Register"),c.forEach(p),this.h()},h(){g(n,"href","/login"),g(n,"class","font-mono no-underline"),g(a,"href","/register"),g(a,"class","font-mono no-underline")},m(s,r){E(s,n,r),$(n,t),E(s,e,r),E(s,a,r),$(a,o)},p:S,d(s){s&&p(n),s&&p(e),s&&p(a)}}}function T(s){let n;const t=s[4].default,l=k(t,s,s[3],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,t){l&&l.m(s,t),n=!0},p(s,r){l&&l.p&&(!n||8&r)&&e(l,t,s,s[3],n?o(t,s[3],r,null):a(s[3]),null)},i(s){n||(r(l,s),n=!0)},o(s){c(l,s),n=!1},d(s){l&&l.d(s)}}}function R(s){let n,t,e,a,o,w,y,k,A;function N(s,n){return s[1]?O:P}let j=N(s),S=j(s),B=!s[0]&&T(s);return{c(){n=l("nav"),t=l("div"),e=l("a"),a=i("P B O X"),o=u(),w=l("section"),S.c(),y=u(),B&&B.c(),k=f(),this.h()},l(s){n=h(s,"NAV",{class:!0});var r=d(n);t=h(r,"DIV",{class:!0});var c=d(t);e=h(c,"A",{href:!0,class:!0});var l=d(e);a=m(l,"P B O X"),l.forEach(p),o=v(c),w=h(c,"SECTION",{});var i=d(w);S.l(i),i.forEach(p),c.forEach(p),r.forEach(p),y=v(s),B&&B.l(s),k=f(),this.h()},h(){g(e,"href","/"),g(e,"class","font-bold no-underline"),g(t,"class","flex items-center justify-between container mx-auto"),g(n,"class","bg-white border-b border-gray-500 py-6 px-4 w-full")},m(s,r){E(s,n,r),$(n,t),$(t,e),$(e,a),$(t,o),$(t,w),S.m(w,null),E(s,y,r),B&&B.m(s,r),E(s,k,r),A=!0},p(s,[n]){j===(j=N(s))&&S?S.p(s,n):(S.d(1),S=j(s),S&&(S.c(),S.m(w,null))),s[0]?B&&(x(),c(B,1,1,(()=>{B=null})),b()):B?(B.p(s,n),1&n&&r(B,1)):(B=T(s),B.c(),r(B,1),B.m(k.parentNode,k))},i(s){A||(r(B),A=!0)},o(s){c(B),A=!1},d(s){s&&p(n),S.d(),s&&p(y),B&&B.d(s),s&&p(k)}}}function V(s,n,t){let e,a,o;w(s,L,(s=>t(5,e=s))),w(s,B,(s=>t(1,a=s))),w(s,B,(s=>t(6,o=s)));let{$$slots:r={},$$scope:c}=n;var l=this&&this.__awaiter||function(s,n,t,e){return new(t||(t=Promise))((function(a,o){function r(s){try{l(e.next(s))}catch(n){o(n)}}function c(s){try{l(e.throw(s))}catch(n){o(n)}}function l(s){var n;s.done?a(s.value):(n=s.value,n instanceof t?n:new t((function(s){s(n)}))).then(r,c)}l((e=e.apply(s,n||[])).next())}))};let i=!0;return y((()=>l(void 0,void 0,void 0,(function*(){if(!localStorage.getItem("token"))return t(0,i=!1),{props:{user:null}};const s=yield fetch(`${I}/auth/me`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n=yield s.json();t(0,i=!1),s.ok&&A(B,o=n,o)})))),s.$$set=s=>{"$$scope"in s&&t(3,c=s.$$scope)},[i,a,function(){return l(this,void 0,void 0,(function*(){A(B,a="",a),A(L,e="",e)}))},c,r]}class X extends s{constructor(s){super(),n(this,s,V,R,t,{})}}export{X as default};