(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{l5YW:function(n,l,t){"use strict";t.d(l,"b",function(){return a}),t.d(l,"c",function(){return i}),t.d(l,"a",function(){return o});var e=t("CcnG"),o={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},i=function(){function n(n){this.elementRef=n}return Object.defineProperty(n.prototype,"tsVerticalSpacing",{set:function(n){n||(n="default--0");var l=n.split("--")[0],t=parseInt(n.split("--")[1],10),i="none"===n,a=!(o[l]&&!(o[l].length<0));if((a||a||!o[l][t])&&!i&&Object(e.db)())throw Error(n+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=i?"0":o[l][t]},enumerable:!0,configurable:!0}),n}(),a=function(){return function(){}}()},lYYs:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),i=t("pMnS"),a=t("ehiB"),r=t("1xtn"),u=t("l5YW"),s=t("gIcY"),d=t("4c35"),c=function(){return function(){}}(),b=function(){function n(n,l,t,e,o){this.elementRef=n,this.windowService=l,this.componentFactoryResolver=t,this.appRef=e,this.injector=o,this.bodyPortalHost=new d.e(this.elementRef.nativeElement,this.componentFactoryResolver,this.appRef,this.injector),this.loadingOverlayPortal=new d.d(c)}return Object.defineProperty(n.prototype,"tsLoadingOverlay",{set:function(n){n&&this.bodyPortalHost&&!this.bodyPortalHost.hasAttached()?this.bodyPortalHost.attach(this.loadingOverlayPortal):this.bodyPortalHost.detach()},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var n=this.windowService.nativeWindow.getComputedStyle(this.elementRef.nativeElement).getPropertyValue("position");this.position=this.determinePosition(n)},n.prototype.ngOnDestroy=function(){this.bodyPortalHost&&this.bodyPortalHost.dispose()},n.prototype.determinePosition=function(n){return"relative"===n||"absolute"===n?n:"relative"},n}(),f=function(){return function(){}}(),g=t("9Kf0"),p=function(){return function(){this.isLoading=!0}}(),m=e.tb({encapsulation:2,styles:[],data:{}});function h(n){return e.Pb(0,[(n()(),e.vb(0,0,null,null,14,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,a.b,a.a)),e.ub(1,49152,null,0,r.a,[],null,null),e.ub(2,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.vb(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),e.ub(4,16384,null,0,r.c,[[3,r.a]],null,null),e.ub(5,16384,null,0,u.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Nb(-1,null,[" Demo Controls "])),(n()(),e.vb(7,0,null,0,7,"label",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Show loading overlay: "])),(n()(),e.vb(9,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,i=n.component;return"change"===l&&(o=!1!==e.Fb(n,10).onChange(t.target.checked)&&o),"blur"===l&&(o=!1!==e.Fb(n,10).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(i.isLoading=t)&&o),o},null,null)),e.ub(10,16384,null,0,s.b,[e.H,e.k],null,null),e.Kb(1024,null,s.r,function(n){return[n]},[s.b]),e.ub(12,671744,null,0,s.w,[[8,null],[8,null],[8,null],[6,s.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,s.s,null,[s.w]),e.ub(14,16384,null,0,s.t,[[4,s.s]],null,null),(n()(),e.vb(15,0,null,null,9,"div",[["style","border:1px solid lightblue;padding:8px;"]],[[4,"position",null]],null,null,null,null)),e.ub(16,212992,null,0,b,[e.k,g.b,e.j,e.g,e.s],{tsLoadingOverlay:[0,"tsLoadingOverlay"]},null),(n()(),e.vb(17,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Sed ducimus natus iure quas. Perferendis animi rem dolores nihil. Ut est aliquid maxime quia. Laborum itaque maxime eveniet eveniet minima. Nihil odit repellendus labore sed sed assumenda. "])),(n()(),e.vb(19,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Odio ut maxime architecto harum. Est voluptas cum ipsum omnis quidem. Molestias provident non veniam id non cumque ut. Qui atque veritatis quia voluptas. "])),(n()(),e.vb(21,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Sed ducimus natus iure quas. Perferendis animi rem dolores nihil. Ut est aliquid maxime quia. Laborum itaque maxime eveniet eveniet minima. Nihil odit repellendus labore sed sed assumenda. "])),(n()(),e.vb(23,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Odio ut maxime architecto harum. Est voluptas cum ipsum omnis quidem. Molestias provident non veniam id non cumque ut. Qui atque veritatis quia voluptas. "]))],function(n,l){var t=l.component;n(l,2,0,""),n(l,5,0,""),n(l,12,0,t.isLoading),n(l,16,0,t.isLoading)},function(n,l){n(l,3,0,e.Fb(l,4).tsCardTitle),n(l,9,0,e.Fb(l,14).ngClassUntouched,e.Fb(l,14).ngClassTouched,e.Fb(l,14).ngClassPristine,e.Fb(l,14).ngClassDirty,e.Fb(l,14).ngClassValid,e.Fb(l,14).ngClassInvalid,e.Fb(l,14).ngClassPending),n(l,15,0,e.Fb(l,16).position)})}function v(n){return e.Pb(0,[(n()(),e.vb(0,0,null,null,1,"demo-loading-overlay",[],null,null,null,h,m)),e.ub(1,49152,null,0,p,[],null,null)],null,null)}var y=e.rb("demo-loading-overlay",p,v,{},{},[]),w=t("Ip0R"),k=e.tb({encapsulation:2,styles:["@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}.ts-loading-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-loading-overlay h1,.ts-loading-overlay h2,.ts-loading-overlay h3,.ts-loading-overlay h4,.ts-loading-overlay h5,.ts-loading-overlay p{margin:unset}.ts-loading-overlay .c-loading-overlay{align-content:center;align-items:center;background-color:rgba(250,250,250,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;will-change:opacity;z-index:3}.c-loading-overlay--hidden{opacity:0;transition:opacity .2s}.c-loading-overlay__spinner{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}.c-loading-overlay .path{-webkit-animation:1.4s ease-in-out infinite dash;animation:1.4s ease-in-out infinite dash;stroke:#00538a;stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center}"],data:{}});function x(n){return e.Pb(2,[(n()(),e.vb(0,0,null,null,2,"div",[["class","c-loading-overlay qa-loading-overlay"]],null,null,null,null,null)),(n()(),e.vb(1,0,null,null,1,":svg:svg",[["class","c-loading-overlay__spinner"],["height","65px"],["viewBox","0 0 66 66"],["width","65px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),e.vb(2,0,null,null,0,":svg:circle",[["class","path"],["cx","33"],["cy","33"],["fill","none"],["r","30"],["stroke-linecap","round"],["stroke-width","6"]],null,null,null,null,null))],null,null)}function D(n){return e.Pb(0,[(n()(),e.vb(0,0,null,null,1,"ts-loading-overlay",[["class","ts-loading-overlay"]],null,null,null,x,k)),e.ub(1,49152,null,0,c,[],null,null)],null,null)}var P=e.rb("ts-loading-overlay",c,D,{},{},[]),C=t("ZYCi"),S=function(){return function(){}}(),q=t("Fzqc"),M=t("Wf4p"),F=t("ZYjt"),O=t("dWZg"),j=t("SMsm"),V=t("SG5n");t.d(l,"LoadingOverlayModuleNgFactory",function(){return H});var H=e.sb(o,[],function(n){return e.Cb([e.Db(512,e.j,e.hb,[[8,[i.a,y,P]],[3,e.j],e.A]),e.Db(4608,w.o,w.n,[e.w,[2,w.B]]),e.Db(4608,s.H,s.H,[]),e.Db(1073742336,w.c,w.c,[]),e.Db(1073742336,s.E,s.E,[]),e.Db(1073742336,s.o,s.o,[]),e.Db(1073742336,C.o,C.o,[[2,C.u],[2,C.l]]),e.Db(1073742336,S,S,[]),e.Db(1073742336,q.a,q.a,[]),e.Db(1073742336,M.n,M.n,[[2,M.f],[2,F.g]]),e.Db(1073742336,O.b,O.b,[]),e.Db(1073742336,M.x,M.x,[]),e.Db(1073742336,j.c,j.c,[]),e.Db(1073742336,V.b,V.b,[]),e.Db(1073742336,r.b,r.b,[]),e.Db(1073742336,f,f,[]),e.Db(1073742336,u.b,u.b,[]),e.Db(1073742336,o,o,[]),e.Db(1024,C.j,function(){return[[{path:"",component:p}]]},[])])})}}]);