(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{JcpB:function(n,l,t){"use strict";t.d(l,"a",(function(){return r}));let a=0;class r{constructor(){this.uid="ts-card-"+a++,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}get borderClass(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""}set aspectRatio(n){const l=parseInt(n.split(":")[0],10),t=parseInt(n.split(":")[1],10);this.aspectRatioPadding=(t/l*100).toFixed(2)+"%"}set border(n){this._border=n||"none"}get border(){return this._border}set id(n){this._id=n||this.uid}get id(){return this._id}set theme(n){this._theme=n||"primary"}get theme(){return this._theme}}},bm8q:function(n,l,t){"use strict";t.d(l,"a",(function(){return b})),t.d(l,"b",(function(){return h}));var a=t("kZht"),r=t("An66"),e=t("DTKE"),i=t("CiOl"),c=t("ydE+"),o=t("ENSU"),s=t("pTnX"),d=t("O1jd"),u=t("FxgA"),b=(t("JcpB"),a.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-card{--card-disabled-opacity:.5;--card-disabled-menu-opacity:.3;display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:var(--ts-color-light);position:relative;transition:height var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease);width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid var(--ts-color-primary-500);padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:var(--ts-color-accent-500)}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:var(--ts-color-warn-500)}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .25s cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:var(--card-disabled-opacity)}.c-card--disabled .c-menu{opacity:var(--card-disabled-menu-opacity);pointer-events:none}.c-card--disabled .c-card__lock{--lock-top-alignment:2px;--lock-scale:.7;color:var(--ts-color-utility-500);position:absolute;right:var(--ts-space-inline-600);top:calc(var(--ts-space-inline-600) - var(--lock-top-alignment));transform:scale(var(--lock-scale))}.c-card--right-spacing .c-card__inner{padding-right:var(--ts-space-base-large4)}.c-card--flat>.c-card__inner{border:1px solid var(--ts-color-utility-300);box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid var(--ts-color-primary-500)}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid var(--ts-color-accent-500)}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid var(--ts-color-warn-500)}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid var(--ts-color-primary-500)}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid var(--ts-color-accent-500)}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid var(--ts-color-warn-500)}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid var(--ts-color-primary-500)}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid var(--ts-color-accent-500)}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid var(--ts-color-warn-500)}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid var(--ts-color-primary-500)}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid var(--ts-color-accent-500)}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid var(--ts-color-warn-500)}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-var(--ts-space-inline-600);right:-var(--ts-space-inline-600)}"]],data:{}}));function p(n){return a.cc(0,[(n()(),a.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),a.zb(1,540672,null,0,r.t,[a.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),a.jb(0,null,null,0))],(function(n,l){n(l,1,0,l.component.utilityMenuTemplate)}),null)}function m(n){return a.cc(0,[(n()(),a.Ab(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,e.b,e.a)),a.zb(1,49152,null,0,i.a,[c.d,o.b],null,null),(n()(),a.Zb(-1,0,["lock_outline"]))],null,(function(n,l){n(l,0,0,a.Pb(l,1).inline,"primary"===a.Pb(l,1).theme,"accent"===a.Pb(l,1).theme,"warn"===a.Pb(l,1).theme,a.Pb(l,1).background)}))}function h(n){return a.cc(2,[(n()(),a.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),a.zb(1,278528,null,0,r.k,[a.t,a.u,a.l,a.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),a.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),a.zb(4,212992,null,0,s.k,[a.l,a.A,d.a,[2,s.h],[2,u.a]],{disabled:[0,"disabled"]},null),a.Ob(null,0),(n()(),a.jb(16777216,null,null,1,null,p)),a.zb(7,16384,null,0,r.m,[a.R,a.N],{ngIf:[0,"ngIf"]},null),(n()(),a.jb(16777216,null,null,1,null,m)),a.zb(9,16384,null,0,r.m,[a.R,a.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component,r=a.Hb(2,"c-card qa-card ",t.borderClass," c-card--",t.theme,""),e=n(l,2,0,t.supportsInteraction,t.centeredContent,t.aspectRatioPadding,t.isDisabled,t.utilityMenuTemplate||t.isDisabled,t.flat);n(l,1,0,r,e),n(l,4,0,!t.supportsInteraction||t.isDisabled),n(l,7,0,t.utilityMenuTemplate),n(l,9,0,t.isDisabled&&!t.utilityMenuTemplate)}),(function(n,l){var t=l.component;n(l,0,0,t.aspectRatioPadding,t.id),n(l,3,0,a.Pb(l,4).unbounded)}))}},cLrn:function(n,l,t){"use strict";t.d(l,"a",(function(){return c}));var a=t("kZht"),r=t("b1t3"),e=t("xmEm"),i=t("JcpB");class c{constructor(n){if(this.theme="primary",this.tsCardTitle="c-card__title",!(n instanceof i.a)&&Object(a.Y)())throw new e.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}set tsTitleAccentBorder(n){Object(r.b)(n)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")}}},s3XQ:function(n,l,t){"use strict";t.r(l),t.d(l,"LinkModuleNgFactory",(function(){return N}));var a=t("kZht");class r{}var e=t("C9Ky"),i=t("bm8q"),c=t("JcpB"),o=t("Q6A0"),s=t("mJiA"),d=t("UQ/n");class u{constructor(){this.localDestination=["/components/copy"],this.emailDestination="mailto:support@terminus.com",this.phoneDestination="tel: 1800-423-4562",this.externalDestination="http://google.com",this.external=!0}}var b=a.yb({encapsulation:2,styles:[],data:{}});function p(n){return a.cc(0,[(n()(),a.Ab(0,0,null,null,31,"ts-card",[["class","ts-card"],["id","top"]],null,null,null,i.b,i.a)),a.zb(1,49152,null,0,c.a,[],{id:[0,"id"]},null),(n()(),a.Ab(2,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(3,0,null,null,3,"ts-link",[["class","ts-link"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(4,49152,null,0,s.a,[],{destination:[0,"destination"],isExternal:[1,"isExternal"]},null),a.zb(5,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["support@terminus.com"])),(n()(),a.Ab(7,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(8,0,null,null,3,"ts-link",[["class","ts-link"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(9,49152,null,0,s.a,[],{destination:[0,"destination"],isExternal:[1,"isExternal"]},null),a.zb(10,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["1800-423-4562"])),(n()(),a.Ab(12,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(13,0,null,null,3,"ts-link",[["class","ts-link"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(14,49152,null,0,s.a,[],{destination:[0,"destination"]},null),a.zb(15,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["Standard link."])),(n()(),a.Ab(17,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(18,0,null,null,3,"ts-link",[["class","ts-link"],["theme","accent"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(19,49152,null,0,s.a,[],{destination:[0,"destination"],theme:[1,"theme"]},null),a.zb(20,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["Accent link"])),(n()(),a.Ab(22,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(23,0,null,null,3,"ts-link",[["class","ts-link"],["theme","warn"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(24,49152,null,0,s.a,[],{destination:[0,"destination"],isExternal:[1,"isExternal"],theme:[2,"theme"]},null),a.zb(25,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["An external link using the 'warn' theme."])),(n()(),a.Ab(27,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(28,0,null,null,3,"ts-link",[["class","ts-link"],["fragment","bottom"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(29,49152,null,0,s.a,[],{fragment:[0,"fragment"]},null),a.zb(30,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["A local fragment link to go down"])),(n()(),a.Ab(32,0,null,null,0,"div",[["style","height:400px;"]],null,null,null,null,null)),(n()(),a.Ab(33,0,null,null,6,"ts-card",[["class","ts-card"],["id","bottom"]],null,null,null,i.b,i.a)),a.zb(34,49152,null,0,c.a,[],{id:[0,"id"]},null),(n()(),a.Ab(35,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Ab(36,0,null,null,3,"ts-link",[["class","ts-link"],["fragment","top"],["tsVerticalSpacing",""]],[[2,"ts-link--primary",null],[2,"ts-link--accent",null],[2,"ts-link--warn",null]],null,null,o.b,o.a)),a.zb(37,49152,null,0,s.a,[],{fragment:[0,"fragment"]},null),a.zb(38,16384,null,0,d.a,[a.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),a.Zb(-1,0,["A local fragment link to go up"])),(n()(),a.Ab(40,0,null,null,0,"div",[["style","height:400px;"]],null,null,null,null,null))],(function(n,l){var t=l.component;n(l,1,0,"top"),n(l,4,0,t.emailDestination,!0),n(l,5,0,""),n(l,9,0,t.phoneDestination,!0),n(l,10,0,""),n(l,14,0,t.localDestination),n(l,15,0,""),n(l,19,0,t.localDestination,"accent"),n(l,20,0,""),n(l,24,0,t.externalDestination,t.external,"warn"),n(l,25,0,""),n(l,29,0,"bottom"),n(l,30,0,""),n(l,34,0,"bottom"),n(l,37,0,"top"),n(l,38,0,"")}),(function(n,l){n(l,3,0,"primary"===a.Pb(l,4).theme,"accent"===a.Pb(l,4).theme,"warn"===a.Pb(l,4).theme),n(l,8,0,"primary"===a.Pb(l,9).theme,"accent"===a.Pb(l,9).theme,"warn"===a.Pb(l,9).theme),n(l,13,0,"primary"===a.Pb(l,14).theme,"accent"===a.Pb(l,14).theme,"warn"===a.Pb(l,14).theme),n(l,18,0,"primary"===a.Pb(l,19).theme,"accent"===a.Pb(l,19).theme,"warn"===a.Pb(l,19).theme),n(l,23,0,"primary"===a.Pb(l,24).theme,"accent"===a.Pb(l,24).theme,"warn"===a.Pb(l,24).theme),n(l,28,0,"primary"===a.Pb(l,29).theme,"accent"===a.Pb(l,29).theme,"warn"===a.Pb(l,29).theme),n(l,36,0,"primary"===a.Pb(l,37).theme,"accent"===a.Pb(l,37).theme,"warn"===a.Pb(l,37).theme)}))}function m(n){return a.cc(0,[(n()(),a.Ab(0,0,null,null,1,"demo-link",[],null,null,null,p,b)),a.zb(1,49152,null,0,u,[],null,null)],null,null)}var h=a.wb("demo-link",u,m,{},{},[]),g=t("An66"),x=t("1VvW");class f{}var _=t("vE5V"),v=t("pTnX"),k=t("jL3B"),w=t("O1jd"),y=t("ydE+"),A=t("iASq"),z=t("zlaC"),P=t("2XP/"),S=t("yUiZ"),N=a.xb(r,[],(function(n){return a.Mb([a.Nb(512,a.j,a.bb,[[8,[e.a,h]],[3,a.j],a.y]),a.Nb(4608,g.o,g.n,[a.v]),a.Nb(1073742336,g.c,g.c,[]),a.Nb(1073742336,x.p,x.p,[[2,x.u],[2,x.l]]),a.Nb(1073742336,f,f,[]),a.Nb(1073742336,_.a,_.a,[]),a.Nb(1073742336,v.i,v.i,[k.j,[2,v.e],[2,g.d]]),a.Nb(1073742336,w.b,w.b,[]),a.Nb(1073742336,v.l,v.l,[]),a.Nb(1073742336,y.c,y.c,[]),a.Nb(1073742336,A.a,A.a,[]),a.Nb(1073742336,z.a,z.a,[]),a.Nb(1073742336,P.a,P.a,[]),a.Nb(1073742336,S.b,S.b,[]),a.Nb(1073742336,r,r,[]),a.Nb(1024,x.j,(function(){return[[{path:"",component:u}]]}),[])])}))},zlaC:function(n,l,t){"use strict";t.d(l,"a",(function(){return a})),t("JcpB"),t("cLrn");class a{}}}]);