import{a as m,b as c,c as f,d as i,e as r,f as u,g as p,h,k as g,l}from"./chunk-5H2ZLML7.js";var y=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-layout-page"]],decls:5,vars:0,template:function(o,s){o&1&&(i(0,"h1"),p(1,"Hero Layout"),r(),u(2,"router-outlet"),i(3,"h5"),p(4,"footer"),r())},dependencies:[g]});let e=t;return e})();var C=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-hero-page"]],decls:2,vars:0,template:function(o,s){o&1&&(i(0,"p"),p(1,"hero-page works!"),r())}});let e=t;return e})();var v=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-list-page"]],decls:2,vars:0,template:function(o,s){o&1&&(i(0,"p"),p(1,"list-page works!"),r())}});let e=t;return e})();var d=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-new-page"]],decls:2,vars:0,template:function(o,s){o&1&&(i(0,"p"),p(1,"new-page works!"),r())}});let e=t;return e})();var x=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["app-search-page"]],decls:2,vars:0,template:function(o,s){o&1&&(i(0,"p"),p(1,"search-page works!"),r())}});let e=t;return e})();var M=[{path:"",component:y,children:[{path:"new-hero",component:d},{path:"search",component:x},{path:"edit/:id",component:d},{path:"list",component:v},{path:":id",component:C},{path:"**",redirectTo:"list"}]}],w=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c({type:t}),t.\u0275inj=f({imports:[l.forChild(M),l]});let e=t;return e})();var W=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c({type:t}),t.\u0275inj=f({imports:[h,w]});let e=t;return e})();export{W as HeroesModule};
