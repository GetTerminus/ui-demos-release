function _defineProperties(t,o){for(var n=0;n<o.length;n++){var l=o[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function _createClass(t,o,n){return o&&_defineProperties(t.prototype,o),n&&_defineProperties(t,n),t}function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{W78i:function(t,o,n){"use strict";n.r(o),n.d(o,"LoginFormModuleNgFactory",(function(){return yt}));var l=n("kZht"),r=function t(){_classCallCheck(this,t)},a=n("C9Ky"),e=n("bm8q"),s=n("JcpB"),i=n("UQ/n"),b=n("Sgnd"),u=n("76xf"),c=n("3kIJ"),d=n("/KEX"),m=n("mKpN"),g=n("Kayw"),p=n("pTnX"),h=n("SFhE"),v=n("O1jd"),f=n("VMkX"),C=n("/tOu"),y=n("MwlL"),w=n("EfNP"),k=n("JFFQ"),x=n("Q6A0"),N=n("mJiA"),P=n("cvIe"),F=n("QOTb"),_=(n("aiPz"),n("cTqt"));n("XnJ+");var z=function(){function t(o,n){_classCallCheck(this,t),this.formBuilder=o,this.validatorsService=n,this.forgotPasswordLink=["/forgot"],this.forgotPasswordText="Forgot your password?",this.inProgress=!1,this.isRedirecting=!1,this.loginCTA="Log In",this.triggerFormReset=!1,this.submission=new l.o,this.loginForm=this.createForm()}return _createClass(t,[{key:"ngOnChanges",value:function(t){t.hasOwnProperty("triggerFormReset")&&t.triggerFormReset.currentValue&&this.resetForm()}},{key:"resetForm",value:function(){this.loginForm.reset(),this.loginForm=this.createForm()}},{key:"createForm",value:function(){return this.formBuilder.group({email:new c.i("",[c.D.required,this.validatorsService.email()]),password:new c.i("",c.D.required),rememberMe:new c.i(!1)})}},{key:"emailControl",get:function(){return this.loginForm.get("email")}},{key:"passwordControl",get:function(){return this.loginForm.get("password")}},{key:"rememberMeControl",get:function(){return this.loginForm.get("rememberMe")}}]),t}(),S=n("28eO"),A=l.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:var(--ts-color-utility-300);cursor:-webkit-grab;cursor:grab;position:absolute;right:var(--ts-space-inline-300)}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:var(--ts-color-light);box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:var(--ts-space-inline-500)}.cdk-drag-placeholder{background:var(--ts-color-utility-200);border:2px solid var(--ts-color-utility-500);cursor:-webkit-grabbing;cursor:grabbing;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-login-form{display:block;width:100%}.ts-login-form :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-login-form h1,.ts-login-form h2,.ts-login-form h3,.ts-login-form h4,.ts-login-form h5,.ts-login-form p{margin:unset}"]],data:{}});function j(t){return l.cc(2,[l.Vb(671088640,1,{inputComponents:1}),l.Vb(402653184,2,{checkbox:0}),(t()(),l.Ab(2,0,null,null,41,"form",[["class","c-login-form qa-login-form"],["fxLayout","column"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown.enter"],[null,"submit"],[null,"reset"]],(function(t,o,n){var r=!0,a=t.component;return"submit"===o&&(r=!1!==l.Pb(t,5).onSubmit(n)&&r),"reset"===o&&(r=!1!==l.Pb(t,5).onReset()&&r),"keydown.enter"===o&&(r=!1!==((null==a.loginForm?null:a.loginForm.valid)&&a.submission.emit(null==a.loginForm?null:a.loginForm.value))&&r),r}),null,null)),l.zb(3,671744,null,0,b.d,[l.l,u.i,b.m,u.f],{fxLayout:[0,"fxLayout"]},null),l.zb(4,16384,null,0,c.I,[],null,null),l.zb(5,540672,null,0,c.m,[[8,null],[8,null]],{form:[0,"form"]},null),l.Ub(2048,null,c.d,null,[c.m]),l.zb(7,16384,null,0,c.t,[[4,c.d]],null,null),(t()(),l.Ab(8,0,null,null,8,"ts-input",[["autocomplete","email"],["class","ts-input"],["label","Email"],["name","email"],["tabIndex","1"],["tabindex","-1"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"ts-input--datepicker",null]],null,null,d.b,d.a)),l.Ub(6144,null,m.a,null,[g.a]),l.zb(10,540672,null,0,c.j,[[8,null],[8,null],[8,null],[2,c.G]],{form:[0,"form"]},null),l.Ub(2048,null,c.r,null,[c.j]),l.zb(12,16384,null,0,c.s,[[4,c.r]],null,null),l.Ub(256,null,p.g,"en-US",[]),l.Ub(512,null,p.c,h.b,[[2,p.g],v.a]),l.zb(15,6209536,[[1,4]],0,g.a,[l.l,l.F,l.h,f.a,v.a,l.A,C.a,y.a,[8,null],[2,p.c],[6,c.r]],{autocapitalize:[0,"autocapitalize"],autocomplete:[1,"autocomplete"],formControl:[2,"formControl"],isRequired:[3,"isRequired"],label:[4,"label"],name:[5,"name"],spellcheck:[6,"spellcheck"],tabIndex:[7,"tabIndex"],type:[8,"type"]},null),l.Ub(256,null,p.f,g.b,[]),(t()(),l.Ab(17,0,null,null,8,"ts-input",[["autocomplete","current-password"],["class","ts-input"],["label","Password"],["name","password"],["tabIndex","2"],["tabindex","-1"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"ts-input--datepicker",null]],null,null,d.b,d.a)),l.Ub(6144,null,m.a,null,[g.a]),l.zb(19,540672,null,0,c.j,[[8,null],[8,null],[8,null],[2,c.G]],{form:[0,"form"]},null),l.Ub(2048,null,c.r,null,[c.j]),l.zb(21,16384,null,0,c.s,[[4,c.r]],null,null),l.Ub(256,null,p.g,"en-US",[]),l.Ub(512,null,p.c,h.b,[[2,p.g],v.a]),l.zb(24,6209536,[[1,4]],0,g.a,[l.l,l.F,l.h,f.a,v.a,l.A,C.a,y.a,[8,null],[2,p.c],[6,c.r]],{autocapitalize:[0,"autocapitalize"],autocomplete:[1,"autocomplete"],formControl:[2,"formControl"],isRequired:[3,"isRequired"],label:[4,"label"],name:[5,"name"],spellcheck:[6,"spellcheck"],tabIndex:[7,"tabIndex"],type:[8,"type"]},null),l.Ub(256,null,p.f,g.b,[]),(t()(),l.Ab(26,0,null,null,7,"ts-checkbox",[["class","ts-checkbox"],["tabIndex","3"],["tabindex","-1"],["tsVerticalSpacing",""]],[[1,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,w.b,w.a)),l.zb(27,49152,[[2,4]],0,k.a,[l.h],{formControl:[0,"formControl"],tabIndex:[1,"tabIndex"]},null),l.Ub(1024,null,c.q,(function(t){return[t]}),[k.a]),l.zb(29,540672,null,0,c.j,[[8,null],[8,null],[6,c.q],[2,c.G]],{form:[0,"form"]},null),l.Ub(2048,null,c.r,null,[c.j]),l.zb(31,16384,null,0,c.s,[[4,c.r]],null,null),l.zb(32,16384,null,0,i.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),l.Zb(-1,0,[" Remember me "])),(t()(),l.Ab(34,0,null,null,3,"ts-link",[["class","ts-link"],["tabIndex","5"],["tabindex","-1"],["tsVerticalSpacing",""]],null,null,null,x.b,x.a)),l.zb(35,49152,null,0,N.a,[],{destination:[0,"destination"],tabIndex:[1,"tabIndex"]},null),l.zb(36,16384,null,0,i.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),l.Zb(37,0,["",""])),(t()(),l.Ab(38,0,null,null,5,"div",[["fxFlexAlign","end"],["fxLayout","row"]],null,null,null,null,null)),l.zb(39,671744,null,0,b.d,[l.l,u.i,b.m,u.f],{fxLayout:[0,"fxLayout"]},null),l.zb(40,671744,null,0,b.a,[l.l,u.i,b.f,u.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),(t()(),l.Ab(41,0,null,null,2,"ts-button",[["actionName","Submit"],["buttonType","submit"],["class","ts-button"],["tabIndex","4"],["tabindex","-1"]],null,[[null,"clicked"]],(function(t,o,n){var l=!0,r=t.component;return"clicked"===o&&(l=!1!==r.submission.emit(null==r.loginForm?null:r.loginForm.value)&&l),l}),P.b,P.a)),l.zb(42,245760,null,0,F.a,[l.h,C.b],{actionName:[0,"actionName"],buttonType:[1,"buttonType"],isDisabled:[2,"isDisabled"],showProgress:[3,"showProgress"],tabIndex:[4,"tabIndex"]},{clicked:"clicked"}),(t()(),l.Zb(43,0,[" "," "]))],(function(t,o){var n=o.component;t(o,3,0,"column"),t(o,5,0,n.loginForm),t(o,10,0,n.emailControl),t(o,15,0,!1,"email",n.emailControl,!0,"Email","email",!1,"1","email"),t(o,19,0,n.passwordControl),t(o,24,0,!1,"current-password",n.passwordControl,!0,"Password","password",!1,"2","password"),t(o,27,0,n.rememberMeControl,"3"),t(o,29,0,n.rememberMeControl),t(o,32,0,""),t(o,35,0,n.forgotPasswordLink,"5"),t(o,36,0,""),t(o,39,0,"row"),t(o,40,0,"end"),t(o,42,0,"Submit","submit",!(null!=n.loginForm&&n.loginForm.valid),n.inProgress||n.isRedirecting,"4")}),(function(t,o){var n=o.component;t(o,2,0,l.Pb(o,7).ngClassUntouched,l.Pb(o,7).ngClassTouched,l.Pb(o,7).ngClassPristine,l.Pb(o,7).ngClassDirty,l.Pb(o,7).ngClassValid,l.Pb(o,7).ngClassInvalid,l.Pb(o,7).ngClassPending),t(o,8,0,l.Pb(o,12).ngClassUntouched,l.Pb(o,12).ngClassTouched,l.Pb(o,12).ngClassPristine,l.Pb(o,12).ngClassDirty,l.Pb(o,12).ngClassValid,l.Pb(o,12).ngClassInvalid,l.Pb(o,12).ngClassPending,l.Pb(o,15).datepicker),t(o,17,0,l.Pb(o,21).ngClassUntouched,l.Pb(o,21).ngClassTouched,l.Pb(o,21).ngClassPristine,l.Pb(o,21).ngClassDirty,l.Pb(o,21).ngClassValid,l.Pb(o,21).ngClassInvalid,l.Pb(o,21).ngClassPending,l.Pb(o,24).datepicker),t(o,26,0,l.Pb(o,27).id,l.Pb(o,31).ngClassUntouched,l.Pb(o,31).ngClassTouched,l.Pb(o,31).ngClassPristine,l.Pb(o,31).ngClassDirty,l.Pb(o,31).ngClassValid,l.Pb(o,31).ngClassInvalid,l.Pb(o,31).ngClassPending),t(o,37,0,n.forgotPasswordText),t(o,43,0,n.loginCTA)}))}var I=function t(){_classCallCheck(this,t)},D=function(){function t(){_classCallCheck(this,t),this.progress=!1,this.link="/reset"}return _createClass(t,[{key:"formSubmission",value:function(t){var o=this;console.warn("DEMO: Form value: ",t),this.progress=!0,setTimeout((function(){o.resetForm(),o.progress=!1}),1e3)}},{key:"resetForm",value:function(){console.log("DEMO: Reset form"),this.loginFormComponent.resetForm()}},{key:"logForm",value:function(){console.log("DEMO: Current form state: ",this.loginFormComponent.loginForm)}}]),t}(),V=l.yb({encapsulation:2,styles:[],data:{}});function U(t){return l.cc(0,[l.Vb(402653184,1,{loginFormComponent:0}),(t()(),l.Ab(1,0,null,null,11,"ts-card",[],[[8,"className",0]],null,null,e.b,e.a)),l.zb(2,49152,null,0,s.a,[],null,null),(t()(),l.Ab(3,0,null,0,6,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(4,16384,null,0,i.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),l.Ab(5,0,null,null,1,"button",[],null,[[null,"click"]],(function(t,o,n){var l=!0;return"click"===o&&(l=!1!==t.component.resetForm()&&l),l}),null,null)),(t()(),l.Zb(-1,null,["Reset Form"])),(t()(),l.Ab(7,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),l.Ab(8,0,null,null,1,"button",[],null,[[null,"click"]],(function(t,o,n){var l=!0;return"click"===o&&(l=!1!==t.component.logForm()&&l),l}),null,null)),(t()(),l.Zb(-1,null,["Log form to console"])),(t()(),l.Ab(10,0,null,0,2,"ts-login-form",[["class","ts-login-form"],["tsVerticalSpacing",""]],null,[[null,"submission"]],(function(t,o,n){var l=!0;return"submission"===o&&(l=!1!==t.component.formSubmission(n)&&l),l}),j,A)),l.zb(11,573440,[[1,4]],0,z,[c.h,S.a],{inProgress:[0,"inProgress"]},{submission:"submission"}),l.zb(12,16384,null,0,i.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null)],(function(t,o){var n=o.component;t(o,4,0,""),t(o,11,0,n.progress),t(o,12,0,"")}),(function(t,o){t(o,1,0,l.Pb(o,2).classList)}))}var R=l.wb("demo-login-form",D,(function(t){return l.cc(0,[(t()(),l.Ab(0,0,null,null,1,"demo-login-form",[],null,null,null,U,V)),l.zb(1,49152,null,0,D,[],null,null)],null,null)}),{},{},[]),T=n("iwai"),L=n("4UJ1"),q=n("20x/"),O=n("An66"),E=n("s2U3"),M=n("5GZx"),Z=n("vE5V"),J=n("mcff"),Q=n("807T"),B=n("QHlv"),X=n("VDyN"),H=n("/L33"),K=n("CQ8i"),W=n("A0Cr"),G=n("cpIX"),Y=n("wqa9"),$=n("1VvW"),tt=function t(){_classCallCheck(this,t)},ot=n("jL3B"),nt=n("NxuZ"),lt=n("iASq"),rt=n("zlaC"),at=n("2ob+"),et=n("aLyt"),st=n("CBf0"),it=n("hCLc"),bt=n("qvIn"),ut=n("XWDJ"),ct=n("UDV5"),dt=n("qSa+"),mt=n("ZtZA"),gt=n("VbQ3"),pt=n("QNlx"),ht=n("7ug1"),vt=n("6g3n"),ft=n("2XP/"),Ct=n("yUiZ"),yt=l.xb(r,[],(function(t){return l.Mb([l.Nb(512,l.j,l.bb,[[8,[a.a,R,T.b,T.a,L.a,q.b,q.a]],[3,l.j],l.y]),l.Nb(4608,O.o,O.n,[l.v]),l.Nb(5120,l.b,(function(t,o){return[u.j(t,o)]}),[O.d,l.C]),l.Nb(4608,c.h,c.h,[]),l.Nb(4608,c.F,c.F,[]),l.Nb(4608,C.b,C.b,[]),l.Nb(4608,E.c,E.c,[]),l.Nb(4608,M.c,M.c,[M.i,M.e,l.j,M.h,M.f,l.s,l.A,O.d,Z.b,[2,O.i]]),l.Nb(5120,M.j,M.k,[M.c]),l.Nb(5120,J.b,J.c,[M.c]),l.Nb(135680,J.d,J.d,[M.c,l.s,[2,O.i],[2,J.a],J.b,[3,J.d],M.e]),l.Nb(4608,Q.i,Q.i,[]),l.Nb(5120,Q.a,Q.b,[M.c]),l.Nb(4608,p.c,p.m,[[2,p.g],v.a]),l.Nb(4608,B.a,B.a,[]),l.Nb(4608,y.a,y.a,[]),l.Nb(4608,X.a,X.a,[]),l.Nb(4608,H.a,H.a,[]),l.Nb(4608,K.a,K.a,[]),l.Nb(4608,W.a,W.a,[]),l.Nb(4608,G.a,G.a,[]),l.Nb(4608,Y.a,Y.a,[y.a]),l.Nb(4608,S.a,S.a,[]),l.Nb(1073742336,O.c,O.c,[]),l.Nb(1073742336,$.p,$.p,[[2,$.u],[2,$.l]]),l.Nb(1073742336,tt,tt,[]),l.Nb(1073742336,Z.a,Z.a,[]),l.Nb(1073742336,p.i,p.i,[ot.j,[2,p.e],[2,O.d]]),l.Nb(1073742336,v.b,v.b,[]),l.Nb(1073742336,p.l,p.l,[]),l.Nb(1073742336,nt.j,nt.j,[]),l.Nb(1073742336,lt.a,lt.a,[]),l.Nb(1073742336,rt.a,rt.a,[]),l.Nb(1073742336,u.c,u.c,[]),l.Nb(1073742336,b.i,b.i,[]),l.Nb(1073742336,at.b,at.b,[]),l.Nb(1073742336,et.a,et.a,[]),l.Nb(1073742336,st.a,st.a,[u.g,l.C]),l.Nb(1073742336,c.E,c.E,[]),l.Nb(1073742336,c.A,c.A,[]),l.Nb(1073742336,it.c,it.c,[]),l.Nb(1073742336,bt.c,bt.c,[]),l.Nb(1073742336,ut.a,ut.a,[]),l.Nb(1073742336,c.o,c.o,[]),l.Nb(1073742336,E.d,E.d,[]),l.Nb(1073742336,ct.g,ct.g,[]),l.Nb(1073742336,ct.e,ct.e,[]),l.Nb(1073742336,dt.a,dt.a,[]),l.Nb(1073742336,mt.f,mt.f,[]),l.Nb(1073742336,gt.b,gt.b,[]),l.Nb(1073742336,gt.d,gt.d,[]),l.Nb(1073742336,M.g,M.g,[]),l.Nb(1073742336,J.g,J.g,[]),l.Nb(1073742336,ot.a,ot.a,[ot.j]),l.Nb(1073742336,Q.j,Q.j,[]),l.Nb(1073742336,p.n,p.n,[]),l.Nb(1073742336,pt.a,pt.a,[]),l.Nb(1073742336,ht.a,ht.a,[]),l.Nb(1073742336,vt.a,vt.a,[]),l.Nb(1073742336,_.a,_.a,[]),l.Nb(1073742336,ft.a,ft.a,[]),l.Nb(1073742336,Ct.b,Ct.b,[]),l.Nb(1073742336,I,I,[]),l.Nb(1073742336,r,r,[]),l.Nb(1024,$.j,(function(){return[[{path:"",component:D}]]}),[]),l.Nb(256,p.f,_.b,[])])}))},cvIe:function(t,o,n){"use strict";n.d(o,"a",(function(){return c})),n.d(o,"b",(function(){return g}));var l=n("kZht"),r=n("DTKE"),a=n("CiOl"),e=n("N61E"),s=n("An66"),i=n("qvIn"),b=n("O1jd"),u=n("FxgA"),c=(n("QOTb"),n("/tOu"),l.yb({encapsulation:2,styles:[[":root{--tsb-theme-default-backgroundColor:var(--ts-color-primary-500);--tsb-theme-default-backgroundColor-hover:var(--ts-color-primary-700);--tsb-theme-default-backgroundColor-active:var(--ts-color-primary-900);--tsb-theme-default-backgroundColor-focus:var(--ts-color-primary-500);--tsb-theme-default-backgroundColor-disabled:var(--ts-color-utility-300);--tsb-theme-default-borderColor:var(--ts-color-primary-500);--tsb-theme-default-borderColor-hover:var(--ts-color-primary-700);--tsb-theme-default-borderColor-active:var(--ts-color-primary-900);--tsb-theme-default-borderColor-focus:var(--ts-color-primary-500);--tsb-theme-default-borderColor-disabled:var(--ts-color-utility-300);--tsb-theme-default-color:var(--ts-color-light);--tsb-theme-default-color-active:var(--ts-color-light);--tsb-theme-default-color-focus:var(--ts-color-light);--tsb-theme-default-boxShadow-color-focus:var(--ts-color-primary-300);--tsb-theme-secondary-backgroundColor:var(--ts-color-light);--tsb-theme-secondary-backgroundColor-hover:var(--ts-color-primary-100);--tsb-theme-secondary-backgroundColor-active:var(--ts-color-primary-300);--tsb-theme-secondary-backgroundColor-focus:var(--ts-color-light);--tsb-theme-secondary-backgroundColor-disabled:var(--ts-color-light);--tsb-theme-secondary-borderColor:var(--ts-color-utility-300);--tsb-theme-secondary-borderColor-hover:var(--ts-color-utility-500);--tsb-theme-secondary-borderColor-active:var(--ts-color-utility-600);--tsb-theme-secondary-borderColor-focus:var(--ts-color-utility-400);--tsb-theme-secondary-borderColor-disabled:var(--ts-color-utility-200);--tsb-theme-secondary-color:var(--ts-color-primary-500);--tsb-theme-secondary-color-active:var(--ts-color-primary-500);--tsb-theme-secondary-color-focus:var(--ts-color-primary-500);--tsb-theme-secondary-boxShadow-color-focus:var(--ts-color-primary-300);--tsb-theme-warning-backgroundColor:var(--ts-color-light);--tsb-theme-warning-backgroundColor-hover:var(--ts-color-warn-100);--tsb-theme-warning-backgroundColor-active:var(--ts-color-warn-300);--tsb-theme-warning-backgroundColor-focus:var(--ts-color-light);--tsb-theme-warning-backgroundColor-disabled:var(--ts-color-light);--tsb-theme-warning-borderColor:var(--ts-color-utility-300);--tsb-theme-warning-borderColor-hover:var(--ts-color-utility-500);--tsb-theme-warning-borderColor-active:var(--ts-color-utility-600);--tsb-theme-warning-borderColor-focus:var(--ts-color-utility-400);--tsb-theme-warning-borderColor-disabled:var(--ts-color-utility-200);--tsb-theme-warning-color:var(--ts-color-warn-500);--tsb-theme-warning-color-active:var(--ts-color-warn-500);--tsb-theme-warning-color-focus:var(--ts-color-warn-500);--tsb-theme-warning-boxShadow-color-focus:var(--ts-color-warn-300);--tsb-color:var(--ts-color-light);--tsb-backgroundColor:var(--ts-color-primary-500);--tsb-borderColor:var(--ts-color-primary-500);--tsb-boxShadow-color:var(--ts-color-primary-300);--tsb-lineHeight:35px;--tsb-rotation:360deg;--tsb-icon-negative-padding-adjustment:-4px;--tsb-collapsible-first-icon-adjustment:-.15em;--tsb-margin:4px 0;--tsb-padding:0 var(--ts-space-inline-400);--tsb-padding-collapsed:0 6px;--tsb-borderRadius:var(--ts-border-radius-base);--tsb-borderRadius-collapsible:2em;--tsb-padding-right-progress:36px;--tsb-icon-vertical-adjustment:-.15em;--tsb-icon-horizontal-adjustment:.2em;--tsb-content-transitionDuration:var(--ts-animation-time-duration-500);--tsb-icon-transitionDuration-collapse:calc(var(--tsb-content-transitionDuration) - 100ms);--tsb-icon-transitionDuration-expand:calc(var(--tsb-icon-transitionDuration-collapse) - 100ms);--tsb-label-transitionDuration:calc(var(--tsb-icon-transitionDuration-expand) - 100ms);--tsb-maxWidth-transition:max-width var(--tsb-content-transitionDuration) var(--ts-animation-easing-ease);--tsb-icon-transition:transform var(--tsb-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--tsb-spinner-transition:opacity var(--tsb-label-transitionDuration) var(--ts-animation-easing-ease)}.ts-button{display:inline-block;margin:var(--tsb-margin)}.ts-button .c-button{background-color:var(--tsb-backgroundColor);border:1px solid var(--tsb-borderColor);border-radius:var(--tsb-borderRadius);color:var(--tsb-color);cursor:pointer;font:var(--ts-typography-compound-body2);font-size:14px;line-height:var(--tsb-lineHeight);padding:var(--tsb-padding);position:relative;transition-duration:var(--tsb-icon-transitionDuration-collapse);transition-property:color,box-shadow,border-color,background-color;transition-timing-function:var(--ts-animation-easing-ease)}.ts-button .c-button[disabled]{--tsb-borderColor:var(--tsb-theme-default-borderColor-disabled);--tsb-color:var(--ts-color-utility-600);cursor:not-allowed}.ts-button .c-button:focus{box-shadow:0 0 2px 2px var(--tsb-boxShadow-color);outline:none}.ts-button .c-button--default{--tsb-boxShadow-color:var(--tsb-theme-default-boxShadow-color-focus);--tsb-color:var(--tsb-theme-default-color);--tsb-backgroundColor:var(--tsb-theme-default-backgroundColor);--tsb-borderColor:var(--tsb-theme-default-borderColor)}.ts-button .c-button--default[disabled]{--tsb-backgroundColor:var(--tsb-theme-default-backgroundColor-disabled);--tsb-borderColor:var(--tsb-theme-default-borderColor-disabled)}.ts-button .c-button--default:not([disabled]):hover{--tsb-backgroundColor:var(--tsb-theme-default-backgroundColor-hover);--tsb-borderColor:var(--tsb-theme-default-borderColor-hover)}.ts-button .c-button--default:not([disabled]):focus{--tsb-boxShadow-color:var(--tsb-theme-default-boxShadow-color-focus);--tsb-borderColor:var(--tsb-theme-default-borderColor-focus)}.ts-button .c-button--default:not([disabled]):focus:hover{--tsb-borderColor:var(--tsb-theme-default-backgroundColor-hover)}.ts-button .c-button--default:not([disabled]):active{--tsb-backgroundColor:var(--tsb-theme-default-backgroundColor-active);--tsb-borderColor:var(--tsb-theme-default-borderColor-active)}.ts-button .c-button--secondary{--tsb-boxShadow-color:var(--tsb-theme-secondary-boxShadow-color-focus);--tsb-color:var(--tsb-theme-secondary-color);--tsb-backgroundColor:var(--tsb-theme-secondary-backgroundColor);--tsb-borderColor:var(--tsb-theme-secondary-borderColor)}.ts-button .c-button--secondary[disabled]{--tsb-backgroundColor:var(--tsb-theme-secondary-backgroundColor-disabled);--tsb-borderColor:var(--tsb-theme-secondary-borderColor-disabled)}.ts-button .c-button--secondary:not([disabled]):hover{--tsb-backgroundColor:var(--tsb-theme-secondary-backgroundColor-hover);--tsb-borderColor:var(--tsb-theme-secondary-borderColor-hover)}.ts-button .c-button--secondary:not([disabled]):focus{--tsb-boxShadow-color:var(--tsb-theme-secondary-boxShadow-color-focus);--tsb-borderColor:var(--tsb-theme-secondary-borderColor-focus)}.ts-button .c-button--secondary:not([disabled]):focus:hover{--tsb-borderColor:var(--tsb-theme-secondary-backgroundColor-hover)}.ts-button .c-button--secondary:not([disabled]):active{--tsb-backgroundColor:var(--tsb-theme-secondary-backgroundColor-active);--tsb-borderColor:var(--tsb-theme-secondary-borderColor-active)}.ts-button .c-button--warning{--tsb-boxShadow-color:var(--tsb-theme-warning-boxShadow-color-focus);--tsb-color:var(--tsb-theme-warning-color);--tsb-backgroundColor:var(--tsb-theme-warning-backgroundColor);--tsb-borderColor:var(--tsb-theme-warning-borderColor)}.ts-button .c-button--warning[disabled]{--tsb-backgroundColor:var(--tsb-theme-warning-backgroundColor-disabled);--tsb-borderColor:var(--tsb-theme-warning-borderColor-disabled)}.ts-button .c-button--warning:not([disabled]):hover{--tsb-backgroundColor:var(--tsb-theme-warning-backgroundColor-hover);--tsb-borderColor:var(--tsb-theme-warning-borderColor-hover)}.ts-button .c-button--warning:not([disabled]):focus{--tsb-boxShadow-color:var(--tsb-theme-warning-boxShadow-color-focus);--tsb-borderColor:var(--tsb-theme-warning-borderColor-focus)}.ts-button .c-button--warning:not([disabled]):focus:hover{--tsb-borderColor:var(--tsb-theme-warning-backgroundColor-hover)}.ts-button .c-button--warning:not([disabled]):active{--tsb-backgroundColor:var(--tsb-theme-warning-backgroundColor-active);--tsb-borderColor:var(--tsb-theme-warning-borderColor-active)}.ts-button .c-button__icon{margin-right:var(--tsb-icon-horizontal-adjustment)}.ts-button .c-button .c-icon{margin-top:var(--tsb-icon-vertical-adjustment);transition:var(--tsb-icon-transition);vertical-align:middle;will-change:transform}.ts-button .c-button .c-button__spinner{display:inline-block;opacity:0;position:absolute;right:12px;top:6px;transition:var(--tsb-spinner-transition)}.ts-button .c-button .c-button__spinner--active{opacity:1}.ts-button .c-button .c-button__spinner circle{stroke:var(--ts-color-utility-500)}.ts-button .c-button--progress{padding-right:42px}.ts-search .ts-button{position:relative;top:calc(var(--ts-space-stack-400)*-1)}.c-button.c-button--collapsed:not(:hover):not(:focus){padding:var(--tsb-padding-collapsed)}.c-button.c-button--collapsed:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--tsb-rotation));transition-duration:var(--tsb-icon-transitionDuration-collapse)}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable,.c-button.c-button--collapsible{border-radius:var(--tsb-borderRadius-collapsible)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus),.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus){padding:var(--tsb-padding-collapsed)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .ts-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--tsb-rotation));transition-duration:var(--tsb-icon-transitionDuration-collapse)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-button__content,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable:focus .c-icon,.c-button.c-button--collapsable:hover .c-icon,.c-button.c-button--collapsible:focus .c-icon,.c-button.c-button--collapsible:hover .c-icon{margin-left:var(--tsb-collapsible-first-icon-adjustment)}.c-button.c-button--collapsable .c-icon,.c-button.c-button--collapsible .c-icon{padding:0 .25em}.c-button.c-button--collapsable .c-button__content,.c-button.c-button--collapsible .c-button__content{display:inline-block;max-width:400px;overflow:hidden;transition:var(--tsb-maxWidth-transition);vertical-align:bottom;white-space:nowrap}.c-button.c-button--collapsable .c-button__content .ts-icon,.c-button.c-button--collapsible .c-button__content .ts-icon{margin-left:var(--tsb-icon-negative-padding-adjustment);margin-right:var(--tsb-icon-negative-padding-adjustment)}.c-button.c-button--collapsable .mat-ripple,.c-button.c-button--collapsible .mat-ripple{border-radius:var(--tsb-borderRadius-collapsible)}.mat-menu-panel .ts-button button.c-button{border-radius:0;text-align:left;width:100%}.mat-menu-panel .ts-button button.c-button,.mat-menu-panel .ts-button button.c-button:active,.mat-menu-panel .ts-button button.c-button:focus,.mat-menu-panel .ts-button button.c-button:hover{background-color:var(--ts-color-light);border-color:transparent}.mat-menu-panel .ts-button button.c-button--default{--tsb-color:var(--ts-color-primary-500)}.mat-menu-panel .ts-button button.c-button--default:active,.mat-menu-panel .ts-button button.c-button--default:focus,.mat-menu-panel .ts-button button.c-button--default:hover{--tsb-color:var(--ts-color-primary-700)}.mat-menu-panel .ts-button button.c-button--secondary{--tsb-color:var(--ts-color-accent-500)}.mat-menu-panel .ts-button button.c-button--secondary:active,.mat-menu-panel .ts-button button.c-button--secondary:focus,.mat-menu-panel .ts-button button.c-button--secondary:hover{--tsb-color:var(--ts-color-accent-700)}.mat-menu-panel .ts-button button.c-button--warning{--tsb-color:var(--ts-color-warn-500)}.mat-menu-panel .ts-button button.c-button--warning:active,.mat-menu-panel .ts-button button.c-button--warning:focus,.mat-menu-panel .ts-button button.c-button--warning:hover{--tsb-color:var(--ts-color-warn-700)}"]],data:{}}));function d(t){return l.cc(0,[(t()(),l.Ab(0,0,null,null,1,"ts-icon",[["class","c-button__icon ts-icon"]],null,null,null,r.b,r.a)),l.zb(1,49152,null,0,a.a,[],{icon:[0,"icon"]},null)],(function(t,o){t(o,1,0,o.component.icon)}),null)}function m(t){return l.cc(0,[(t()(),l.Ab(0,0,null,null,3,"mat-progress-spinner",[["class","c-button__spinner mat-progress-spinner"],["diameter","21"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,e.b,e.a)),l.zb(1,278528,null,0,s.k,[l.t,l.u,l.l,l.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Sb(2,{"c-button__spinner--active":0}),l.zb(3,114688,null,0,i.b,[l.l,b.a,[2,s.d],[2,u.a],i.a],{diameter:[0,"diameter"],mode:[1,"mode"]},null)],(function(t,o){var n=o.component,l=t(o,2,0,n.showProgress&&!n.isDisabled);t(o,1,0,"c-button__spinner",l),t(o,3,0,"21","indeterminate")}),(function(t,o){t(o,0,0,l.Pb(o,3)._noopAnimations,l.Pb(o,3).diameter,l.Pb(o,3).diameter,"determinate"===l.Pb(o,3).mode?0:null,"determinate"===l.Pb(o,3).mode?100:null,"determinate"===l.Pb(o,3).mode?l.Pb(o,3).value:null,l.Pb(o,3).mode)}))}function g(t){return l.cc(2,[l.Vb(402653184,1,{button:0}),(t()(),l.Ab(1,0,[[1,0],["button",1]],null,8,"button",[],[[1,"aria-label",0],[1,"id",0],[1,"type",0],[8,"disabled",0],[8,"tabIndex",0]],[[null,"click"]],(function(t,o,n){var l=!0;return"click"===o&&(l=!1!==t.component.clickedButton(n)&&l),l}),null,null)),l.zb(2,278528,null,0,s.k,[l.t,l.u,l.l,l.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l.Sb(3,{"c-button--collapsed":0,"c-button--progress":1}),(t()(),l.jb(16777216,null,null,1,null,d)),l.zb(5,16384,null,0,s.m,[l.R,l.N],{ngIf:[0,"ngIf"]},null),(t()(),l.Ab(6,0,null,null,1,"span",[["class","c-button__content"]],null,null,null,null,null)),l.Ob(null,0),(t()(),l.jb(16777216,null,null,1,null,m)),l.zb(9,16384,null,0,s.m,[l.R,l.N],{ngIf:[0,"ngIf"]},null)],(function(t,o){var n=o.component,r=l.Hb(2,"c-button c-button--",n.theme," c-button--",n.format,""),a=t(o,3,0,n.isCollapsed,n.showProgress&&!n.isDisabled);t(o,2,0,r,a),t(o,5,0,n.icon),t(o,9,0,n.showProgress&&!n.isDisabled)}),(function(t,o){var n=o.component;t(o,1,0,n.actionName,n.id,n.buttonType,n.shouldBeDisabled,l.Hb(1,"",n.tabIndex,""))}))}}}]);