(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{FoRl:function(r,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],c="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48zm32-168H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z";t.definition={prefix:"fas",iconName:"lock-alt",icon:[448,512,n,"f30d",c]},t.faLockAlt=t.definition,t.prefix="fas",t.iconName="lock-alt",t.width=448,t.height=512,t.ligatures=n,t.unicode="f30d",t.svgPathData=c},JcpB:function(r,t,a){"use strict";a.d(t,"a",(function(){return e}));var n=a("FoRl");let c=0;class e{constructor(){this.lockIcon=n.faLockAlt,this.uid="ts-card-"+c++,this._border="none",this.centeredContent=!1,this.classList="ts-card",this.elevation2=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}get borderClass(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""}set aspectRatio(r){const t=parseInt(r.split(":")[0],10),a=parseInt(r.split(":")[1],10);this.aspectRatioPadding=(a/t*100).toFixed(2)+"%"}set border(r){this._border=r||"none"}get border(){return this._border}set class(r){this.classList+=" "+r}get class(){return this._class}set id(r){this._id=r||this.uid}get id(){return this._id}set theme(r){this._theme=r||"primary"}get theme(){return this._theme}}},Zl07:function(r,t,a){"use strict";a.r(t),a.d(t,"BreakpointsModuleNgFactory",(function(){return C}));var n=a("kZht");class c{}var e=a("C9Ky"),i=a("bm8q"),o=a("JcpB");class l{}var d=n.yb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag[_ngcontent-%COMP%]{position:relative}.cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag[_ngcontent-%COMP%]   .cdk-drag-handle[_ngcontent-%COMP%]{color:var(--ts-color-utility-300);cursor:-webkit-grab;cursor:grab;position:absolute;right:var(--ts-space-inline-300)}.cdk-drag.cdk-drag-preview[_ngcontent-%COMP%]{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:var(--ts-color-light);box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview[_ngcontent-%COMP%]   .c-checkbox[_ngcontent-%COMP%]{margin-left:var(--ts-space-inline-500)}.cdk-drag-placeholder[_ngcontent-%COMP%]{background:var(--ts-color-utility-200);border:2px solid var(--ts-color-utility-500);cursor:-webkit-grabbing;cursor:grabbing;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden[_ngcontent-%COMP%]{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.example[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:500;color:#e74c3c;transition:color .2s ease;will-change:color}@media (max-width:599px){.example[_ngcontent-%COMP%]{color:#27ae60}}@media (min-width:600px){.example[_ngcontent-%COMP%]{color:#2980b9}}@media (min-width:600px) and (max-width:959px){.example[_ngcontent-%COMP%]{color:#7f8c8d}}@media (min-width:960px){.example[_ngcontent-%COMP%]{color:#9b59b6}}@media (min-width:960px) and (max-width:1279px){.example[_ngcontent-%COMP%]{color:#f39c12}}@media (min-width:1280px){.example[_ngcontent-%COMP%]{color:#34495e}}@media (min-width:1280px) and (max-width:1919px){.example[_ngcontent-%COMP%]{color:#3498db}}@media (min-width:1920px){.example[_ngcontent-%COMP%]{color:#7f8c8d;color:#8e44ad}}"]],data:{}});function s(r){return n.cc(0,[(r()(),n.Zb(-1,null,["Text color will change at each breakpoint: "])),(r()(),n.Ab(1,0,null,null,0,"hr",[],null,null,null,null,null)),(r()(),n.Ab(2,0,null,null,3,"ts-card",[],[[8,"className",0]],null,null,i.b,i.a)),n.zb(3,49152,null,0,o.a,[],{centeredContent:[0,"centeredContent"]},null),(r()(),n.Ab(4,0,null,0,1,"div",[["class","example"]],null,null,null,null,null)),(r()(),n.Zb(-1,null,[" Breakpoints example "]))],(function(r,t){r(t,3,0,!0)}),(function(r,t){r(t,2,0,n.Pb(t,3).classList)}))}function b(r){return n.cc(0,[(r()(),n.Ab(0,0,null,null,1,"demo-breakpoints",[],null,null,null,s,d)),n.zb(1,49152,null,0,l,[],null,null)],null,null)}var u=n.wb("demo-breakpoints",l,b,{},{},[]),p=a("iwai"),g=a("An66"),h=a("1VvW");class m{}var x=a("vE5V"),v=a("pTnX"),_=a("jL3B"),f=a("O1jd"),w=a("NxuZ"),k=a("iASq"),y=a("zlaC"),C=n.xb(c,[],(function(r){return n.Mb([n.Nb(512,n.j,n.bb,[[8,[e.a,u,p.b,p.a]],[3,n.j],n.y]),n.Nb(4608,g.o,g.n,[n.v]),n.Nb(1073742336,h.p,h.p,[[2,h.u],[2,h.l]]),n.Nb(1073742336,m,m,[]),n.Nb(1073742336,g.c,g.c,[]),n.Nb(1073742336,x.a,x.a,[]),n.Nb(1073742336,v.i,v.i,[_.j,[2,v.e],[2,g.d]]),n.Nb(1073742336,f.b,f.b,[]),n.Nb(1073742336,v.l,v.l,[]),n.Nb(1073742336,w.j,w.j,[]),n.Nb(1073742336,k.a,k.a,[]),n.Nb(1073742336,y.a,y.a,[]),n.Nb(1073742336,c,c,[]),n.Nb(1024,h.j,(function(){return[[{path:"",component:l}]]}),[])])}))},bm8q:function(r,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a("kZht"),c=a("An66"),e=a("DTKE"),i=a("CiOl"),o=a("pTnX"),l=a("O1jd"),d=a("FxgA"),s=(a("JcpB"),n.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:var(--ts-color-utility-300);cursor:-webkit-grab;cursor:grab;position:absolute;right:var(--ts-space-inline-300)}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:var(--ts-color-light);box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:var(--ts-space-inline-500)}.cdk-drag-placeholder{background:var(--ts-color-utility-200);border:2px solid var(--ts-color-utility-500);cursor:-webkit-grabbing;cursor:grabbing;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}:root{--ts-card-disabled-opacity:.5;--ts-card-disabled-menu-opacity:.3;--ts-card-backgroundColor:var(--ts-color-base-white);--ts-card-boxShadow:0 0 0 1px rgba(0,0,0,0.04),0 2px 5px 0 rgba(0,0,0,0.06);--ts-card-hover-boxShadow:0 0 0 1px rgba(0,0,0,0.06),0 2px 5px 0 rgba(0,0,0,0.09);--ts-card-2x-boxShadow:0 0 0 1px rgba(0,0,0,0.08),0 2px 5px 0 rgba(0,0,0,0.12)}.ts-card{display:flex;flex-flow:row nowrap}.ts-card .c-card{background-color:var(--ts-card-backgroundColor);box-sizing:border-box;font:var(--ts-typography-compound-body);position:relative;transition:height var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease);width:100%}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.ts-card .c-card.c-card--elevation2{box-shadow:var(--ts-card-2x-boxShadow)}.c-card .c-card__inner{border-radius:var(--ts-border-radius-base);box-shadow:var(--ts-card-boxShadow);box-sizing:border-box;min-height:calc(100% - 48px);padding:var(--ts-space-inset-600);position:relative;vertical-align:top;width:100%}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid var(--ts-color-primary-500);padding-left:var(--ts-space-inset-300)}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:var(--ts-color-accent-500)}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:var(--ts-color-warn-500)}.c-card .c-card__inner .c-card__title{font:var(--ts-typography-compound-title)}.c-card--interaction:not(.c-card--disabled) .c-card__inner{cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:focus,.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:var(--ts-card-hover-boxShadow)}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:var(--ts-card-disabled-opacity)}.c-card--disabled .c-menu{opacity:var(--ts-card-disabled-menu-opacity);pointer-events:none}.c-card--disabled .c-card__lock{--lock-top-alignment:2px;--lock-scale:.7;color:var(--ts-color-utility-500);position:absolute;right:var(--ts-space-inline-600);top:calc(var(--ts-space-inline-600) - var(--lock-top-alignment));transform:scale(var(--lock-scale))}.c-card--right-spacing .c-card__inner{padding-right:var(--ts-space-base-large4)}.c-card--flat>.c-card__inner{border:1px solid var(--ts-color-utility-300);box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid var(--ts-color-primary-500)}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid var(--ts-color-accent-500)}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid var(--ts-color-warn-500)}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid var(--ts-color-primary-500)}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid var(--ts-color-accent-500)}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid var(--ts-color-warn-500)}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid var(--ts-color-primary-500)}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid var(--ts-color-accent-500)}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid var(--ts-color-warn-500)}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid var(--ts-color-primary-500)}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid var(--ts-color-accent-500)}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid var(--ts-color-warn-500)}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-var(--ts-space-inline-600);right:-var(--ts-space-inline-600)}"]],data:{}}));function b(r){return n.cc(0,[(r()(),n.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),n.zb(1,540672,null,0,c.t,[n.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(r()(),n.jb(0,null,null,0))],(function(r,t){r(t,1,0,t.component.utilityMenuTemplate)}),null)}function u(r){return n.cc(0,[(r()(),n.Ab(0,0,null,null,1,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],null,null,null,e.b,e.a)),n.zb(1,49152,null,0,i.a,[],{icon:[0,"icon"]},null)],(function(r,t){r(t,1,0,t.component.lockIcon)}),null)}function p(r){return n.cc(2,[(r()(),n.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),n.zb(1,278528,null,0,c.k,[n.t,n.u,n.l,n.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5,"c-card--elevation2":6}),(r()(),n.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),n.zb(4,212992,null,0,o.k,[n.l,n.A,l.a,[2,o.h],[2,d.a]],{disabled:[0,"disabled"]},null),n.Ob(null,0),(r()(),n.jb(16777216,null,null,1,null,b)),n.zb(7,16384,null,0,c.m,[n.R,n.N],{ngIf:[0,"ngIf"]},null),(r()(),n.jb(16777216,null,null,1,null,u)),n.zb(9,16384,null,0,c.m,[n.R,n.N],{ngIf:[0,"ngIf"]},null)],(function(r,t){var a=t.component,c=n.Hb(2,"c-card qa-card ",a.borderClass," c-card--",a.theme,""),e=r(t,2,0,a.supportsInteraction,a.centeredContent,a.aspectRatioPadding,a.isDisabled,a.utilityMenuTemplate||a.isDisabled,a.flat,a.elevation2);r(t,1,0,c,e),r(t,4,0,!a.supportsInteraction||a.isDisabled),r(t,7,0,a.utilityMenuTemplate),r(t,9,0,a.isDisabled&&!a.utilityMenuTemplate)}),(function(r,t){var a=t.component;r(t,0,0,a.aspectRatioPadding,a.id),r(t,3,0,n.Pb(t,4).unbounded)}))}},cLrn:function(r,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("kZht"),c=a("b1t3"),e=a("xmEm"),i=a("JcpB");class o{constructor(r){if(this.theme="primary",this.tsCardTitle="c-card__title",!(r instanceof i.a)&&Object(n.Y)())throw new e.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}set tsTitleAccentBorder(r){Object(c.b)(r)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")}}},zlaC:function(r,t,a){"use strict";a.d(t,"a",(function(){return n})),a("JcpB"),a("cLrn");class n{}}}]);