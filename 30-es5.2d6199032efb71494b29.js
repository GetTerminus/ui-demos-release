function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Avlw:function(n,t,e){"use strict";e.r(t),e.d(t,"LoadingOverlayModuleNgFactory",(function(){return S}));var r=e("kZht"),a=function n(){_classCallCheck(this,n)},l=e("C9Ky"),i=e("bm8q"),o=e("JcpB"),c=e("UQ/n"),s=e("cLrn"),d=e("3kIJ"),u=e("ZtZA"),b=function n(){_classCallCheck(this,n)},p=function(){function n(t,e,r,a,l){_classCallCheck(this,n),this.elementRef=t,this.windowService=e,this.componentFactoryResolver=r,this.appRef=a,this.injector=l,this.bodyPortalHost=new u.e(this.elementRef.nativeElement,this.componentFactoryResolver,this.appRef,this.injector),this.loadingOverlayPortal=new u.d(b)}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this.windowService.nativeWindow.getComputedStyle(this.elementRef.nativeElement).getPropertyValue("position");this.position=this.determinePosition(n)}},{key:"ngOnDestroy",value:function(){this.bodyPortalHost&&this.bodyPortalHost.dispose()}},{key:"determinePosition",value:function(n){return"relative"===n||"absolute"===n?n:"relative"}},{key:"tsLoadingOverlay",set:function(n){n&&this.bodyPortalHost&&!this.bodyPortalHost.hasAttached()?this.bodyPortalHost.attach(this.loadingOverlayPortal):this.bodyPortalHost.detach()}}]),n}(),g=e("/tOu"),h=function n(){_classCallCheck(this,n),this.isLoading=!0},f=r.yb({encapsulation:2,styles:[],data:{}});function m(n){return r.cc(0,[(n()(),r.Ab(0,0,null,null,14,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),r.zb(1,49152,null,0,o.a,[],null,null),r.zb(2,16384,null,0,c.a,[r.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),r.Ab(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),r.zb(4,16384,null,0,s.a,[[3,o.a]],null,null),r.zb(5,16384,null,0,c.a,[r.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),r.Zb(-1,null,[" Demo Controls "])),(n()(),r.Ab(7,0,null,0,7,"label",[],null,null,null,null,null)),(n()(),r.Zb(-1,null,[" Show loading overlay: "])),(n()(),r.Ab(9,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(n,t,e){var a=!0,l=n.component;return"change"===t&&(a=!1!==r.Pb(n,10).onChange(e.target.checked)&&a),"blur"===t&&(a=!1!==r.Pb(n,10).onTouched()&&a),"ngModelChange"===t&&(a=!1!==(l.isLoading=e)&&a),a}),null,null)),r.zb(10,16384,null,0,d.b,[r.F,r.l],null,null),r.Ub(1024,null,d.q,(function(n){return[n]}),[d.b]),r.zb(12,671744,null,0,d.v,[[8,null],[8,null],[8,null],[6,d.q]],{model:[0,"model"]},{update:"ngModelChange"}),r.Ub(2048,null,d.r,null,[d.v]),r.zb(14,16384,null,0,d.s,[[4,d.r]],null,null),(n()(),r.Ab(15,0,null,null,9,"div",[["style","border:1px solid lightblue;padding:8px;"]],[[4,"position",null]],null,null,null,null)),r.zb(16,212992,null,0,p,[r.l,g.b,r.j,r.g,r.s],{tsLoadingOverlay:[0,"tsLoadingOverlay"]},null),(n()(),r.Ab(17,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Zb(-1,null,[" Sed ducimus natus iure quas. Perferendis animi rem dolores nihil. Ut est aliquid maxime quia. Laborum itaque maxime eveniet eveniet minima. Nihil odit repellendus labore sed sed assumenda. "])),(n()(),r.Ab(19,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Zb(-1,null,[" Odio ut maxime architecto harum. Est voluptas cum ipsum omnis quidem. Molestias provident non veniam id non cumque ut. Qui atque veritatis quia voluptas. "])),(n()(),r.Ab(21,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Zb(-1,null,[" Sed ducimus natus iure quas. Perferendis animi rem dolores nihil. Ut est aliquid maxime quia. Laborum itaque maxime eveniet eveniet minima. Nihil odit repellendus labore sed sed assumenda. "])),(n()(),r.Ab(23,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),r.Zb(-1,null,[" Odio ut maxime architecto harum. Est voluptas cum ipsum omnis quidem. Molestias provident non veniam id non cumque ut. Qui atque veritatis quia voluptas. "]))],(function(n,t){var e=t.component;n(t,2,0,""),n(t,5,0,""),n(t,12,0,e.isLoading),n(t,16,0,e.isLoading)}),(function(n,t){n(t,3,0,r.Pb(t,4).tsCardTitle),n(t,9,0,r.Pb(t,14).ngClassUntouched,r.Pb(t,14).ngClassTouched,r.Pb(t,14).ngClassPristine,r.Pb(t,14).ngClassDirty,r.Pb(t,14).ngClassValid,r.Pb(t,14).ngClassInvalid,r.Pb(t,14).ngClassPending),n(t,15,0,r.Pb(t,16).position)}))}var v=r.wb("demo-loading-overlay",h,(function(n){return r.cc(0,[(n()(),r.Ab(0,0,null,null,1,"demo-loading-overlay",[],null,null,null,m,f)),r.zb(1,49152,null,0,h,[],null,null)],null,null)}),{},{},[]),y=r.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}:root{--loading-overlay-backgroundColor:var(--ts-color-base-white);--loading-overlay-backgroundColor-opaque:hsla(0,0%,98%,0.8);--loading-overlay-offset:187;--loading-overlay-duration:1.4s;--loading-overlay-stroke-color:var(--ts-color-primary-500)}:host{display:block}@-webkit-keyframes rotator{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}@keyframes rotator{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}@-webkit-keyframes dash{0%{stroke-dashoffset:var(--loading-overlay-offset)}50%{stroke-dashoffset:var(--loading-overlay-offset)/4;transform:rotate(135deg)}to{stroke-dashoffset:var(--loading-overlay-offset);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:var(--loading-overlay-offset)}50%{stroke-dashoffset:var(--loading-overlay-offset)/4;transform:rotate(135deg)}to{stroke-dashoffset:var(--loading-overlay-offset);transform:rotate(450deg)}}.ts-loading-overlay .c-loading-overlay{align-content:center;align-items:center;background-color:var(--loading-overlay-backgroundColor-opaque);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;will-change:opacity;z-index:502}.c-loading-overlay--hidden{opacity:0;transition:opacity .2s ease}.c-loading-overlay__spinner{-webkit-animation:rotator var(--loading-overlay-duration) linear infinite;animation:rotator var(--loading-overlay-duration) linear infinite}.c-loading-overlay .path{-webkit-animation:dash var(--loading-overlay-duration) ease-in-out infinite;animation:dash var(--loading-overlay-duration) ease-in-out infinite;stroke:var(--loading-overlay-stroke-color);stroke-dasharray:var(--loading-overlay-offset);stroke-dashoffset:0;transform-origin:center}"]],data:{}});function x(n){return r.cc(2,[(n()(),r.Ab(0,0,null,null,2,"div",[["class","c-loading-overlay"]],null,null,null,null,null)),(n()(),r.Ab(1,0,null,null,1,":svg:svg",[["class","c-loading-overlay__spinner"],["height","65px"],["viewBox","0 0 66 66"],["width","65px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),r.Ab(2,0,null,null,0,":svg:circle",[["class","path"],["cx","33"],["cy","33"],["fill","none"],["r","30"],["stroke-linecap","round"],["stroke-width","6"]],null,null,null,null,null))],null,null)}var _=r.wb("ts-loading-overlay",b,(function(n){return r.cc(0,[(n()(),r.Ab(0,0,null,null,1,"ts-loading-overlay",[["class","ts-loading-overlay"]],null,null,null,x,y)),r.zb(1,49152,null,0,b,[],null,null)],null,null)}),{},{},[]),k=e("An66"),w=e("1VvW"),C=function n(){_classCallCheck(this,n)},P=e("vE5V"),z=e("pTnX"),A=e("jL3B"),N=e("O1jd"),q=e("ydE+"),T=e("iASq"),O=e("zlaC"),j=function n(){_classCallCheck(this,n)},R=e("yUiZ"),S=r.xb(a,[],(function(n){return r.Mb([r.Nb(512,r.j,r.bb,[[8,[l.a,v,_]],[3,r.j],r.y]),r.Nb(4608,k.o,k.n,[r.v]),r.Nb(4608,d.F,d.F,[]),r.Nb(1073742336,k.c,k.c,[]),r.Nb(1073742336,d.E,d.E,[]),r.Nb(1073742336,d.o,d.o,[]),r.Nb(1073742336,w.p,w.p,[[2,w.u],[2,w.l]]),r.Nb(1073742336,C,C,[]),r.Nb(1073742336,P.a,P.a,[]),r.Nb(1073742336,z.i,z.i,[A.j,[2,z.e],[2,k.d]]),r.Nb(1073742336,N.b,N.b,[]),r.Nb(1073742336,z.l,z.l,[]),r.Nb(1073742336,q.c,q.c,[]),r.Nb(1073742336,T.a,T.a,[]),r.Nb(1073742336,O.a,O.a,[]),r.Nb(1073742336,j,j,[]),r.Nb(1073742336,R.b,R.b,[]),r.Nb(1073742336,a,a,[]),r.Nb(1024,w.j,(function(){return[[{path:"",component:h}]]}),[])])}))},JcpB:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=0,a=function(){function n(){_classCallCheck(this,n),this.uid="ts-card-"+r++,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}return _createClass(n,[{key:"borderClass",get:function(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""}},{key:"aspectRatio",set:function(n){var t=parseInt(n.split(":")[0],10),e=parseInt(n.split(":")[1],10);this.aspectRatioPadding=(e/t*100).toFixed(2)+"%"}},{key:"border",set:function(n){this._border=n||"none"},get:function(){return this._border}},{key:"id",set:function(n){this._id=n||this.uid},get:function(){return this._id}},{key:"theme",set:function(n){this._theme=n||"primary"},get:function(){return this._theme}}]),n}()},bm8q:function(n,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return h}));var r=e("kZht"),a=e("An66"),l=e("DTKE"),i=e("CiOl"),o=e("ydE+"),c=e("ENSU"),s=e("pTnX"),d=e("O1jd"),u=e("FxgA"),b=(e("JcpB"),r.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-card{--card-disabled-opacity:.5;--card-disabled-menu-opacity:.3;display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:var(--ts-color-light);position:relative;transition:height var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease);width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid var(--ts-color-primary-500);padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:var(--ts-color-accent-500)}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:var(--ts-color-warn-500)}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .25s cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:var(--card-disabled-opacity)}.c-card--disabled .c-menu{opacity:var(--card-disabled-menu-opacity);pointer-events:none}.c-card--disabled .c-card__lock{--lock-top-alignment:2px;--lock-scale:.7;color:var(--ts-color-utility-500);position:absolute;right:var(--ts-space-inline-600);top:calc(var(--ts-space-inline-600) - var(--lock-top-alignment));transform:scale(var(--lock-scale))}.c-card--right-spacing .c-card__inner{padding-right:var(--ts-space-base-large4)}.c-card--flat>.c-card__inner{border:1px solid var(--ts-color-utility-300);box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid var(--ts-color-primary-500)}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid var(--ts-color-accent-500)}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid var(--ts-color-warn-500)}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid var(--ts-color-primary-500)}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid var(--ts-color-accent-500)}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid var(--ts-color-warn-500)}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid var(--ts-color-primary-500)}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid var(--ts-color-accent-500)}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid var(--ts-color-warn-500)}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid var(--ts-color-primary-500)}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid var(--ts-color-accent-500)}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid var(--ts-color-warn-500)}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-var(--ts-space-inline-600);right:-var(--ts-space-inline-600)}"]],data:{}}));function p(n){return r.cc(0,[(n()(),r.Ab(0,16777216,null,null,1,null,null,null,null,null,null,null)),r.zb(1,540672,null,0,a.t,[r.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),r.jb(0,null,null,0))],(function(n,t){n(t,1,0,t.component.utilityMenuTemplate)}),null)}function g(n){return r.cc(0,[(n()(),r.Ab(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,l.b,l.a)),r.zb(1,49152,null,0,i.a,[o.d,c.b],null,null),(n()(),r.Zb(-1,0,["lock_outline"]))],null,(function(n,t){n(t,0,0,r.Pb(t,1).inline,"primary"===r.Pb(t,1).theme,"accent"===r.Pb(t,1).theme,"warn"===r.Pb(t,1).theme,r.Pb(t,1).background)}))}function h(n){return r.cc(2,[(n()(),r.Ab(0,0,null,null,9,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),r.zb(1,278528,null,0,a.k,[r.t,r.u,r.l,r.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r.Sb(2,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),r.Ab(3,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),r.zb(4,212992,null,0,s.k,[r.l,r.A,d.a,[2,s.h],[2,u.a]],{disabled:[0,"disabled"]},null),r.Ob(null,0),(n()(),r.jb(16777216,null,null,1,null,p)),r.zb(7,16384,null,0,a.m,[r.R,r.N],{ngIf:[0,"ngIf"]},null),(n()(),r.jb(16777216,null,null,1,null,g)),r.zb(9,16384,null,0,a.m,[r.R,r.N],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component,a=r.Hb(2,"c-card qa-card ",e.borderClass," c-card--",e.theme,""),l=n(t,2,0,e.supportsInteraction,e.centeredContent,e.aspectRatioPadding,e.isDisabled,e.utilityMenuTemplate||e.isDisabled,e.flat);n(t,1,0,a,l),n(t,4,0,!e.supportsInteraction||e.isDisabled),n(t,7,0,e.utilityMenuTemplate),n(t,9,0,e.isDisabled&&!e.utilityMenuTemplate)}),(function(n,t){var e=t.component;n(t,0,0,e.aspectRatioPadding,e.id),n(t,3,0,r.Pb(t,4).unbounded)}))}},cLrn:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("kZht"),a=e("b1t3"),l=e("xmEm"),i=e("JcpB"),o=function(){function n(t){if(_classCallCheck(this,n),this.theme="primary",this.tsCardTitle="c-card__title",!(t instanceof i.a)&&Object(r.Y)())throw new l.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return _createClass(n,[{key:"tsTitleAccentBorder",set:function(n){Object(a.b)(n)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")}}]),n}()},zlaC:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e("JcpB"),e("cLrn");var r=function n(){_classCallCheck(this,n)}}}]);