(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4mc+":function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return d}));var r=e("kZht"),c=e("b1t3"),a=e("5uKI");let i=0,l=class{constructor(){this.uid=`ts-card-${i++}`,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}set aspectRatio(n){const t=parseInt(n.split(":")[0],10),e=parseInt(n.split(":")[1],10);this.aspectRatioPadding=`${(e/t*100).toFixed(2)}%`}set border(n){this._border=n||"none"}get border(){return this._border}set id(n){this._id=n||this.uid}get id(){return this._id}set theme(n){this._theme=n||"primary"}get theme(){return this._theme}get borderClass(){return this.border&&"none"!==this.border?`c-card--border-${this.border}`:""}},d=class{constructor(n){if(this.theme="primary",this.tsCardTitle="c-card__title",!(n instanceof l)&&Object(r.Y)())throw new a.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}set tsTitleAccentBorder(n){Object(c.b)(n)&&(this.tsCardTitle=`${this.tsCardTitle} c-card__title-accent-border`)}},o=class{}},B8qd:function(n,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return m}));var r=e("kZht"),c=(e("4mc+"),e("An66")),a=(e("vE5V"),e("pTnX")),i=(e("jL3B"),e("O1jd")),l=e("ydE+"),d=e("0Hrt"),o=e("srQc"),s=e("ENSU"),u=e("FxgA"),b=r.yb({encapsulation:2,styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],data:{}});function p(n){return r.cc(0,[(n()(),r.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),r.zb(1,540672,null,0,c.t,[r.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),r.jb(0,null,null,0))],(function(n,t){n(t,1,0,t.component.utilityMenuTemplate)}),null)}function h(n){return r.cc(0,[(n()(),r.Ab(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,o.b,o.a)),r.zb(1,49152,null,0,d.a,[l.d,s.b],null,null),(n()(),r.Zb(-1,0,["lock_outline"]))],null,(function(n,t){n(t,0,0,r.Pb(t,1).inline,"primary"===r.Pb(t,1).theme,"accent"===r.Pb(t,1).theme,"warn"===r.Pb(t,1).theme,r.Pb(t,1).background)}))}function m(n){return r.cc(2,[(n()(),r.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),r.zb(1,278528,null,0,c.k,[r.t,r.u,r.l,r.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),r.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),r.zb(4,212992,null,0,a.k,[r.l,r.A,i.a,[2,a.h],[2,u.a]],{disabled:[0,"disabled"]},null),r.Ob(null,0),(n()(),r.jb(16777216,null,null,1,null,p)),r.zb(7,16384,null,0,c.m,[r.R,r.N],{ngIf:[0,"ngIf"]},null),(n()(),r.jb(16777216,null,null,1,null,h)),r.zb(9,16384,null,0,c.m,[r.R,r.N],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component,c=r.Hb(2,"c-card qa-card ",e.borderClass," c-card--",e.theme,""),a=n(t,2,0,e.supportsInteraction,e.centeredContent,e.aspectRatioPadding,e.isDisabled,e.utilityMenuTemplate||e.isDisabled,e.flat);n(t,1,0,c,a),n(t,4,0,!e.supportsInteraction||e.isDisabled),n(t,7,0,e.utilityMenuTemplate),n(t,9,0,e.isDisabled&&!e.utilityMenuTemplate)}),(function(n,t){var e=t.component;n(t,0,0,e.aspectRatioPadding,e.id),n(t,3,0,r.Pb(t,4).unbounded)}))}},Zl07:function(n,t,e){"use strict";e.r(t),e.d(t,"BreakpointsModuleNgFactory",(function(){return y}));var r=e("kZht");class c{}var a=e("C9Ky"),i=e("B8qd"),l=e("4mc+");class d{}var o=r.yb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.u-visually-hidden[_ngcontent-%COMP%]{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.example[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:500;color:#e74c3c;transition:color .2s ease;will-change:color}@media (max-width:599px){.example[_ngcontent-%COMP%]{color:#27ae60}}@media (min-width:600px){.example[_ngcontent-%COMP%]{color:#2980b9}}@media (min-width:600px) and (max-width:959px){.example[_ngcontent-%COMP%]{color:#7f8c8d}}@media (min-width:960px){.example[_ngcontent-%COMP%]{color:#9b59b6}}@media (min-width:960px) and (max-width:1279px){.example[_ngcontent-%COMP%]{color:#f39c12}}@media (min-width:1280px){.example[_ngcontent-%COMP%]{color:#34495e}}@media (min-width:1280px) and (max-width:1919px){.example[_ngcontent-%COMP%]{color:#3498db}}@media (min-width:1920px){.example[_ngcontent-%COMP%]{color:#7f8c8d;color:#8e44ad}}"]],data:{}});function s(n){return r.cc(0,[(n()(),r.Zb(-1,null,["Text color will change at each breakpoint: "])),(n()(),r.Ab(1,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),r.Ab(2,0,null,null,3,"ts-card",[["class","ts-card"]],null,null,null,i.b,i.a)),r.zb(3,49152,null,0,l.a,[],{centeredContent:[0,"centeredContent"]},null),(n()(),r.Ab(4,0,null,0,1,"div",[["class","example"]],null,null,null,null,null)),(n()(),r.Zb(-1,null,[" Breakpoints example "]))],(function(n,t){n(t,3,0,!0)}),null)}function u(n){return r.cc(0,[(n()(),r.Ab(0,0,null,null,1,"demo-breakpoints",[],null,null,null,s,o)),r.zb(1,49152,null,0,d,[],null,null)],null,null)}var b=r.wb("demo-breakpoints",d,u,{},{},[]),p=e("An66"),h=e("1VvW");class m{}var x=e("vE5V"),_=e("pTnX"),f=e("jL3B"),g=e("O1jd"),w=e("ydE+"),v=e("0Hrt"),y=r.xb(c,[],(function(n){return r.Mb([r.Nb(512,r.j,r.bb,[[8,[a.a,b]],[3,r.j],r.y]),r.Nb(4608,p.o,p.n,[r.v]),r.Nb(1073742336,h.p,h.p,[[2,h.u],[2,h.l]]),r.Nb(1073742336,m,m,[]),r.Nb(1073742336,p.c,p.c,[]),r.Nb(1073742336,x.a,x.a,[]),r.Nb(1073742336,_.i,_.i,[f.j,[2,_.e],[2,p.d]]),r.Nb(1073742336,g.b,g.b,[]),r.Nb(1073742336,_.l,_.l,[]),r.Nb(1073742336,w.c,w.c,[]),r.Nb(1073742336,v.b,v.b,[]),r.Nb(1073742336,l.b,l.b,[]),r.Nb(1073742336,c,c,[]),r.Nb(1024,h.j,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);