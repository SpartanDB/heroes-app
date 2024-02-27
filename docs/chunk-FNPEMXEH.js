import{W as I,b as d,d as u,e as f,f as g,r as x}from"./chunk-RKZQ2AT2.js";import{h as M,i as F,j as c,k as E,m as S}from"./chunk-ELVCYULO.js";import"./chunk-JGYM447R.js";import{Bc as b,Jb as r,Wa as y,aa as l,ba as p,ma as s,sb as n,tb as t,ub as m,zb as C}from"./chunk-FHR74GE4.js";var w=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,v){o&1&&(n(0,"div",0)(1,"div",1),m(2,"router-outlet"),t()())},dependencies:[M]});let i=e;return i})();var j=(()=>{let e=class e{constructor(a,o){this.authService=a,this.router=o}onLogin(){this.authService.login("correo@correo.com","123456").subscribe(a=>{console.log("Usuario logueado"),this.router.navigate(["/"])})}};e.\u0275fac=function(o){return new(o||e)(y(S),y(F))},e.\u0275cmp=l({type:e,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-raised-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,v){o&1&&(n(0,"div",0)(1,"span",1),r(2,"Login"),t(),n(3,"mat-form-field")(4,"mat-label"),r(5,"Usuario"),t(),m(6,"input",2),t(),n(7,"mat-form-field")(8,"mat-label"),r(9,"Contrase\xF1a"),t(),m(10,"input",3),t(),n(11,"button",4),C("click",function(){return v.onLogin()}),n(12,"mat-icon"),r(13,"save"),t(),r(14," Iniciar sesi\xF3n "),t(),n(15,"div",5)(16,"a",6),r(17,"\xBFNo tienes cuenta?"),t()()())},dependencies:[c,d,f,u,g,x]});let i=e;return i})();var N=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-register-page"]],decls:30,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["type","password","matInput","","placeholder","Confirmar contrase\xF1a"],["mat-raised-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,v){o&1&&(n(0,"div",0)(1,"span",1),r(2,"Registro"),t(),n(3,"mat-form-field")(4,"mat-label"),r(5,"Usuario"),t(),m(6,"input",2),t(),n(7,"mat-form-field")(8,"mat-label"),r(9,"Nombre"),t(),m(10,"input",2),t(),n(11,"mat-form-field")(12,"mat-label"),r(13,"Apellido"),t(),m(14,"input",2),t(),n(15,"mat-form-field")(16,"mat-label"),r(17,"Contrase\xF1a"),t(),m(18,"input",3),t(),n(19,"mat-form-field")(20,"mat-label"),r(21,"Confirmar contrase\xF1a"),t(),m(22,"input",4),t(),n(23,"button",5)(24,"mat-icon"),r(25,"save"),t(),r(26," Crear cuenta "),t(),n(27,"div",6)(28,"a",7),r(29,"\xBFYa tienes cuenta?"),t()()())},dependencies:[c,d,f,u,g,x]});let i=e;return i})();var B=[{path:"",component:w,children:[{path:"login",component:j},{path:"new-account",component:N},{path:"**",redirectTo:"login"}]}],k=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=p({type:e}),e.\u0275inj=s({imports:[E.forChild(B),E]});let i=e;return i})();var ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=p({type:e}),e.\u0275inj=s({imports:[k,b,I]});let i=e;return i})();export{ie as AuthModule};