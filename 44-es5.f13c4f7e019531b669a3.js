function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"4mc+":function(n,l,t){"use strict";t.d(l,"a",(function(){return i})),t.d(l,"b",(function(){return d})),t.d(l,"c",(function(){return o}));var e=t("kZht"),c=t("b1t3"),r=t("5uKI"),a=0,i=function(){function n(){_classCallCheck(this,n),this.uid="ts-card-".concat(a++),this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}return _createClass(n,[{key:"aspectRatio",set:function(n){var l=parseInt(n.split(":")[0],10),t=parseInt(n.split(":")[1],10);this.aspectRatioPadding="".concat((t/l*100).toFixed(2),"%")}},{key:"border",set:function(n){this._border=n||"none"},get:function(){return this._border}},{key:"id",set:function(n){this._id=n||this.uid},get:function(){return this._id}},{key:"theme",set:function(n){this._theme=n||"primary"},get:function(){return this._theme}},{key:"borderClass",get:function(){return this.border&&"none"!==this.border?"c-card--border-".concat(this.border):""}}]),n}(),o=function(){function n(l){if(_classCallCheck(this,n),this.theme="primary",this.tsCardTitle="c-card__title",!(l instanceof i)&&Object(e.Y)())throw new r.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return _createClass(n,[{key:"tsTitleAccentBorder",set:function(n){Object(c.b)(n)&&(this.tsCardTitle="".concat(this.tsCardTitle," c-card__title-accent-border"))}}]),n}(),d=function n(){_classCallCheck(this,n)}},B8qd:function(n,l,t){"use strict";t.d(l,"a",(function(){return b})),t.d(l,"b",(function(){return h}));var e=t("kZht"),c=(t("4mc+"),t("An66")),r=(t("vE5V"),t("pTnX")),a=(t("jL3B"),t("O1jd")),i=t("ydE+"),o=t("0Hrt"),d=t("srQc"),s=t("ENSU"),u=t("FxgA"),b=e.yb({encapsulation:2,styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],data:{}});function p(n){return e.cc(0,[(n()(),e.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.zb(1,540672,null,0,c.t,[e.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.jb(0,null,null,0))],(function(n,l){n(l,1,0,l.component.utilityMenuTemplate)}),null)}function g(n){return e.cc(0,[(n()(),e.Ab(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,d.b,d.a)),e.zb(1,49152,null,0,o.a,[i.d,s.b],null,null),(n()(),e.Zb(-1,0,["lock_outline"]))],null,(function(n,l){n(l,0,0,e.Pb(l,1).inline,"primary"===e.Pb(l,1).theme,"accent"===e.Pb(l,1).theme,"warn"===e.Pb(l,1).theme,e.Pb(l,1).background)}))}function h(n){return e.cc(2,[(n()(),e.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),e.zb(1,278528,null,0,c.k,[e.t,e.u,e.l,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),e.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),e.zb(4,212992,null,0,r.k,[e.l,e.A,a.a,[2,r.h],[2,u.a]],{disabled:[0,"disabled"]},null),e.Ob(null,0),(n()(),e.jb(16777216,null,null,1,null,p)),e.zb(7,16384,null,0,c.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,null,1,null,g)),e.zb(9,16384,null,0,c.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component,c=e.Hb(2,"c-card qa-card ",t.borderClass," c-card--",t.theme,""),r=n(l,2,0,t.supportsInteraction,t.centeredContent,t.aspectRatioPadding,t.isDisabled,t.utilityMenuTemplate||t.isDisabled,t.flat);n(l,1,0,c,r),n(l,4,0,!t.supportsInteraction||t.isDisabled),n(l,7,0,t.utilityMenuTemplate),n(l,9,0,t.isDisabled&&!t.utilityMenuTemplate)}),(function(n,l){var t=l.component;n(l,0,0,t.aspectRatioPadding,t.id),n(l,3,0,e.Pb(l,4).unbounded)}))}},NyRc:function(n,l,t){"use strict";t.r(l),t.d(l,"ToggleModuleNgFactory",(function(){return z}));var e=t("kZht"),c=function n(){_classCallCheck(this,n)},r=t("C9Ky"),a=t("B8qd"),i=t("4mc+"),o=t("/Gcv"),d=t("3kIJ"),s=t("urHb"),u=t("dKA/"),b=function(){function n(l){_classCallCheck(this,n),this.formBuilder=l,this.isChecked=!1,this.isDisabled=!1,this.name="myToggle",this.required=!0,this.myForm=this.formBuilder.group({myToggle:[null,[]]})}return _createClass(n,[{key:"isChanged",value:function(n){console.log("in changed: ",n)}},{key:"log",value:function(n){console.log("DEMO: From value: ",n)}}]),n}(),p=e.yb({encapsulation:2,styles:[],data:{}});function g(n){return e.cc(0,[(n()(),e.Ab(0,0,null,null,21,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),e.zb(1,49152,null,0,i.a,[],null,null),e.zb(2,16384,null,0,o.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Ab(3,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),e.zb(4,16384,null,0,o.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Zb(-1,null,["Form"])),(n()(),e.Ab(6,0,null,0,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var c=!0;return"submit"===l&&(c=!1!==e.Pb(n,8).onSubmit(t)&&c),"reset"===l&&(c=!1!==e.Pb(n,8).onReset()&&c),c}),null,null)),e.zb(7,16384,null,0,d.I,[],null,null),e.zb(8,540672,null,0,d.m,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ub(2048,null,d.d,null,[d.m]),e.zb(10,16384,null,0,d.t,[[4,d.d]],null,null),(n()(),e.Ab(11,0,null,null,7,"ts-toggle",[["class","ts-toggle"],["tsVerticalSpacing",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"selectionChange"]],(function(n,l,t){var e=!0;return"selectionChange"===l&&(e=!1!==n.component.isChanged(t)&&e),e}),s.b,s.a)),e.zb(12,49152,null,0,u.a,[],{formControl:[0,"formControl"],isDisabled:[1,"isDisabled"],isRequired:[2,"isRequired"],name:[3,"name"]},{selectionChange:"selectionChange"}),e.Ub(1024,null,d.q,(function(n){return[n]}),[u.a]),e.zb(14,540672,null,0,d.j,[[8,null],[8,null],[6,d.q],[2,d.G]],{form:[0,"form"]},null),e.Ub(2048,null,d.r,null,[d.j]),e.zb(16,16384,null,0,d.s,[[4,d.r]],null,null),e.zb(17,16384,null,0,o.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Zb(-1,0,["Toggle Me!"])),(n()(),e.Ab(19,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Ab(20,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0,c=n.component;return"click"===l&&(e=!1!==c.log(c.myForm.value)&&e),e}),null,null)),(n()(),e.Zb(-1,null,["Log form value"])),(n()(),e.Ab(22,0,null,null,9,"ts-card",[["class","ts-card"]],null,null,null,a.b,a.a)),e.zb(23,49152,null,0,i.a,[],null,null),(n()(),e.Ab(24,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),e.zb(25,16384,null,0,o.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Zb(-1,null,["Seed via @Input"])),(n()(),e.Ab(27,0,null,0,4,"ts-toggle",[["class","ts-toggle"],["name","two"],["tsVerticalSpacing",""]],null,[[null,"selectionChange"]],(function(n,l,t){var e=!0;return"selectionChange"===l&&(e=!1!==n.component.isChanged(t)&&e),e}),s.b,s.a)),e.Ub(5120,null,d.q,(function(n){return[n]}),[u.a]),e.zb(29,16384,null,0,o.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),e.zb(30,49152,null,0,u.a,[],{isChecked:[0,"isChecked"],isDisabled:[1,"isDisabled"],name:[2,"name"]},{selectionChange:"selectionChange"}),(n()(),e.Zb(-1,0,["Toggle Me!"]))],(function(n,l){var t=l.component;n(l,2,0,""),n(l,4,0,""),n(l,8,0,t.myForm),n(l,12,0,t.myForm.get("myToggle"),t.isDisabled,t.required,t.name),n(l,14,0,t.myForm.get("myToggle")),n(l,17,0,""),n(l,25,0,""),n(l,29,0,""),n(l,30,0,!0,!0,"two")}),(function(n,l){n(l,6,0,e.Pb(l,10).ngClassUntouched,e.Pb(l,10).ngClassTouched,e.Pb(l,10).ngClassPristine,e.Pb(l,10).ngClassDirty,e.Pb(l,10).ngClassValid,e.Pb(l,10).ngClassInvalid,e.Pb(l,10).ngClassPending),n(l,11,0,e.Pb(l,16).ngClassUntouched,e.Pb(l,16).ngClassTouched,e.Pb(l,16).ngClassPristine,e.Pb(l,16).ngClassDirty,e.Pb(l,16).ngClassValid,e.Pb(l,16).ngClassInvalid,e.Pb(l,16).ngClassPending)}))}var h=e.wb("demo-toggle",b,(function(n){return e.cc(0,[(n()(),e.Ab(0,0,null,null,1,"demo-toggle",[],null,null,null,g,p)),e.zb(1,49152,null,0,b,[d.h],null,null)],null,null)}),{},{},[]),f=t("An66"),m=t("s2U3"),_=t("1VvW"),x=function n(){_classCallCheck(this,n)},y=t("vE5V"),C=t("pTnX"),v=t("jL3B"),k=t("O1jd"),w=t("ydE+"),P=t("0Hrt"),N=t("7wPV"),z=e.xb(c,[],(function(n){return e.Mb([e.Nb(512,e.j,e.bb,[[8,[r.a,h]],[3,e.j],e.y]),e.Nb(4608,f.o,f.n,[e.v]),e.Nb(4608,d.h,d.h,[]),e.Nb(4608,d.F,d.F,[]),e.Nb(4608,m.c,m.c,[]),e.Nb(1073742336,f.c,f.c,[]),e.Nb(1073742336,d.E,d.E,[]),e.Nb(1073742336,d.A,d.A,[]),e.Nb(1073742336,_.p,_.p,[[2,_.u],[2,_.l]]),e.Nb(1073742336,x,x,[]),e.Nb(1073742336,y.a,y.a,[]),e.Nb(1073742336,C.i,C.i,[v.j,[2,C.e],[2,f.d]]),e.Nb(1073742336,k.b,k.b,[]),e.Nb(1073742336,C.l,C.l,[]),e.Nb(1073742336,w.c,w.c,[]),e.Nb(1073742336,P.b,P.b,[]),e.Nb(1073742336,i.b,i.b,[]),e.Nb(1073742336,o.b,o.b,[]),e.Nb(1073742336,d.o,d.o,[]),e.Nb(1073742336,N.f,N.f,[]),e.Nb(1073742336,m.d,m.d,[]),e.Nb(1073742336,N.d,N.d,[]),e.Nb(1073742336,u.b,u.b,[]),e.Nb(1073742336,c,c,[]),e.Nb(1024,_.j,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);