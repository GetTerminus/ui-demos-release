(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{hD7T:function(n,e,t){"use strict";t.r(e),t.d(e,"DrawerModuleNgFactory",(function(){return Un}));var l=t("kZht");class a{}var i=t("C9Ky"),r=t("UQ/n"),s=t("CLFr"),o=t("F3cb"),d=t("ENSU"),u=t("3kIJ"),c=[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:var(--ts-color-utility-300);cursor:-webkit-grab;cursor:grab;position:absolute;right:var(--ts-space-inline-300)}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);background-color:var(--ts-color-light);box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:var(--ts-space-inline-500)}.cdk-drag-placeholder{background:var(--ts-color-utility-200);border:2px solid var(--ts-color-utility-500);cursor:-webkit-grabbing;cursor:grabbing;transition:transform .25s cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:var(--ts-animation-time-duration-400);transition-property:background-color,visibility;transition-timing-function:var(--ts-animation-easing-ease)}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:var(--ts-animation-time-duration-400);transition-property:transform,margin-left,margin-right;transition-timing-function:var(--ts-animation-easing-ease)}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{position:relative;z-index:4;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:var(--ts-color-base-white);bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid var(--ts-color-utility-300);display:block;top:0}.ts-drawer .ts-drawer-footer,.ts-drawer .ts-drawer-header{max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid var(--ts-color-utility-300);bottom:0}"],b=t("An66"),p=t("ZTXN"),h=t("jIqt"),g=t("mWib"),m=t("xVbo"),w=t("kuMc"),f=t("J+dc"),v=t("EKI7"),x=t("xmEm"),S=t("VbQ3");class C extends S.a{constructor(n,e,t){super(n,e,t),this.leftMargin=null,this.rightMargin=null}}var y=t("Hq54"),k=t("KTx3"),z=t("Ohay"),O=t("YtkY"),P=t("gxbW");class j{constructor(n,e,t,a){this.elementRef=n,this.platform=e,this.ngZone=t,this.renderer=a,this.animationState=this.hideShadowWhenCollapsed?"void":"void-shadow",this.animationStarted=new p.a,this.animationEnd=new p.a,this.destroyed=new p.a,this.enableAnimations=!1,this.modeChanged=new p.a,this._collapsedSize="3.75rem",this._expandedSize="12.75rem",this._hideShadowWhenCollapsed=!0,this._isExpanded=!1,this._mode="overlay",this._position="start",this.role="",this.expandedChange=new l.o(!0),this.positionChanged=new l.o,this.ngZone.runOutsideAngular(()=>{Object(k.a)(this.elementRef.nativeElement,"keydown").pipe(Object(m.a)(n=>n.code===P.a.ESCAPE.code&&!Object(y.s)(n)),Object(v.j)(this)).subscribe(n=>this.ngZone.run(()=>{this.collapse(),n.stopPropagation(),n.preventDefault()}))}),this.animationEnd.pipe(Object(z.a)((n,e)=>n.fromState===e.fromState&&n.toState===e.toState),Object(v.j)(this)).subscribe(n=>{const{fromState:e,toState:t}=n;(0===t.indexOf("open")&&("void"===e||"void-shadow"===e)||"void"===t&&0===e.indexOf("open")||"void-shadow"===t&&0===e.indexOf("open"))&&this.expandedChange.emit(this.isExpanded)}),this.renderer.setStyle(this.elementRef.nativeElement,"width",this.expandedSize)}set collapsedSize(n){this._collapsedSize=Object(v.g)(n)?"3.75rem":n}get collapsedSize(){return this._collapsedSize}set expandedSize(n){this._expandedSize=Object(v.g)(n)?"12.5rem":n}get expandedSize(){return this._expandedSize}set hideShadowWhenCollapsed(n){this._hideShadowWhenCollapsed=n}get hideShadowWhenCollapsed(){return this._hideShadowWhenCollapsed}set isExpanded(n){this.toggle(n)}get isExpanded(){return this._isExpanded}set mode(n){this._mode=n,this.modeChanged.next()}get mode(){return this._mode}set position(n){(n="end"===n?"end":"start")!==this._position&&(this._position=n,this.positionChanged.emit())}get position(){return this._position}get expandedStream(){return this.expandedChange.pipe(Object(m.a)(n=>n),Object(O.a)(()=>{}))}get expandedStart(){return this.animationStarted.pipe(Object(m.a)(n=>n.fromState!==n.toState&&0===n.toState.indexOf("open")),Object(v.j)(this),Object(O.a)(()=>{}))}get collapsedStream(){return this.expandedChange.pipe(Object(m.a)(n=>!n),Object(O.a)(()=>{}))}get collapsedStart(){return this.animationStarted.pipe(Object(m.a)(n=>n.fromState!==n.toState&&"void"===n.toState),Object(v.j)(this),Object(O.a)(()=>{}))}ngAfterContentChecked(){this.platform.isBrowser&&(this.enableAnimations=!0)}ngOnDestroy(){this.modeChanged.complete(),this.destroyed.next(),this.destroyed.complete()}expand(){return this.toggle(!0)}collapse(){return this.toggle(!1)}toggle(n=!this.isExpanded){return this._isExpanded=n,this.animationState=n?this.enableAnimations?"open":"open-instant":this.hideShadowWhenCollapsed?"void":"void-shadow",new Promise(n=>{this.expandedChange.pipe(Object(f.a)(1)).subscribe(e=>n(e?"open":"close"))})}animationStartListener(n){this.animationStarted.next(n)}animationDoneListener(n){this.animationEnd.next(n)}}class A{constructor(n,e,t,a,i){this.element=n,this.ngZone=e,this.renderer=t,this.changeDetectorRef=a,this.animationMode=i,this.start=null,this.end=null,this.openDrawerCount=0,this.doCheckSubject=new p.a,this.contentMargins={left:null,right:null},this.contentMarginChanges=new p.a,this.hasBackdrop=!1,this.backdropClick=new l.o}get isPushed(){return A.isDrawerOpen(this.start)&&"push"===this.start.mode||A.isDrawerOpen(this.end)&&"push"===this.end.mode}get isShowingBackdrop(){return A.isDrawerOpen(this.start)&&this.hasBackdrop||A.isDrawerOpen(this.end)&&this.hasBackdrop}ngAfterContentInit(){const n=this.content?this.content.getElementRef().nativeElement:null;this.drawers.changes.pipe(Object(h.a)(null),Object(v.j)(this)).subscribe(()=>{this.validateDrawers(),this.drawers.forEach(n=>{this.adjustDrawerOnChange(n),this.drawerPositionOnChange(n),this.drawerModeOnChange(n)}),(!this.drawers.length||A.isDrawerOpen(this.start)||A.isDrawerOpen(this.end))&&this.updateContentMargins(),this.changeDetectorRef.markForCheck()}),this.doCheckSubject.pipe(Object(g.a)(1),Object(v.j)(this)).subscribe(()=>this.updateContentMargins()),this.contentMarginChanges.subscribe(e=>{this.content&&(this.content.leftMargin=e.left,this.content.rightMargin=e.right,this.renderer.setStyle(n,"margin-left",e.left?e.left.toString()+"px":0),this.renderer.setStyle(n,"margin-right",e.right?e.right.toString()+"px":0),this.changeDetectorRef.markForCheck())})}ngDoCheck(){this.isPushed&&this.ngZone.runOutsideAngular(()=>this.doCheckSubject.next())}ngOnDestroy(){this.contentMarginChanges.complete(),this.doCheckSubject.complete()}expand(){this.drawers.forEach(n=>n.expand())}collapse(){this.drawers.forEach(n=>n.collapse())}updateContentMargins(){let n=0,e=0;n=this.start?this.marginCalculation(this.start,"left",0):n,e=this.end?this.marginCalculation(this.end,"right",0):e,n=n||null,e=e||null,n===this.contentMargins.left&&e===this.contentMargins.right||(this.contentMargins={left:n,right:e},this.ngZone.run(()=>this.contentMarginChanges.next(this.contentMargins)))}marginCalculation(n,e,t){let l;return this.content&&(l="left"===e?this.content.leftMargin:this.content.rightMargin),n&&n.isExpanded&&("push"===n.mode?t+=parseFloat(n.expandedSize.replace(/[^0-9.]/g,""))*((n.expandedSize.match(/[a-zA-Z]+/g)||"").includes("px")?1:16):this.content&&l&&this.openDrawerCount<=1?t=0:this.content&&l&&this.openDrawerCount>1&&(t=this.contentMargins[e]||0)),t}adjustDrawerOnChange(n){n.animationStarted.pipe(Object(m.a)(n=>n.fromState!==n.toState),Object(w.a)(this.drawers.changes),Object(v.j)(this)).subscribe(n=>{"open-instant"!==n.toState&&"NoopAnimations"!==this.animationMode&&this.element.nativeElement.classList.add("ts-drawer-transition"),this.validateDrawers(),this.updateContentMargins(),this.changeDetectorRef.markForCheck()}),n.expandedChange.pipe(Object(w.a)(this.drawers.changes)).subscribe(()=>{this.setContainerClass(n.isExpanded),this.validateDrawers()})}drawerPositionOnChange(n){n.positionChanged.pipe(Object(w.a)(this.drawers.changes)).subscribe(()=>{this.ngZone.onMicrotaskEmpty.asObservable().pipe(Object(f.a)(1)).subscribe(()=>{this.validateDrawers()})})}drawerModeOnChange(n){n&&n.modeChanged.pipe(Object(w.a)(this.drawers.changes),Object(v.j)(this)).subscribe(()=>{this.validateDrawers(),this.updateContentMargins(),this.changeDetectorRef.markForCheck()})}setContainerClass(n){n?this.element.nativeElement.classList.add("ts-drawer-container--expanded"):this.element.nativeElement.classList.remove("ts-drawer-container--expanded")}validateDrawers(){this.start=this.end=null,this.openDrawerCount=0,this.drawers.forEach(n=>{this.openDrawerCount=this.openDrawerCount+(n.isExpanded?1:0),"end"===n.position&&n.isExpanded?this.end=n:"start"===n.position&&n.isExpanded&&(this.start=n)});const n=new Set;this.drawers.filter(n=>"push"===n.mode).some(e=>n.size===n.add(e.position).size)&&function(n){throw new x.b(`TsDrawerContainer: Only one drawer can be in push mode on '"${n}" position'.`)}(n.values().next().value),this.changeDetectorRef.markForCheck()}onBackdropClicked(){this.backdropClick.emit(),this.closeModalDrawer()}closeModalDrawer(){[this.start,this.end].filter(n=>n&&this.hasBackdrop).forEach(n=>n&&n.collapse())}static isDrawerOpen(n){return null!=n&&n.isExpanded}}var N=t("FxgA"),D=l.yb({encapsulation:2,styles:[c],data:{}});function M(n){return l.cc(0,[(n()(),l.Ab(0,0,null,null,0,"div",[["class","ts-drawer__backdrop"]],[[2,"ts-drawer__backdrop--visible",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.onBackdropClicked()&&l),l}),null,null))],null,(function(n,e){n(e,0,0,e.component.isShowingBackdrop)}))}function _(n){return l.cc(2,[(n()(),l.jb(16777216,null,null,1,null,M)),l.zb(1,16384,null,0,b.m,[l.R,l.N],{ngIf:[0,"ngIf"]},null),l.Ob(null,0),l.Ob(null,1)],(function(n,e){n(e,1,0,e.component.hasBackdrop)}),null)}var E=t("O1jd"),V=l.yb({encapsulation:2,styles:[c],data:{animation:[{type:7,name:"transform",definitions:[{type:0,name:"open, open-instant",styles:{type:6,styles:{transform:"none",visibility:"visible",width:"{{ expandedSize }}"},offset:null},options:{params:{expandedSize:"12.5rem"}}},{type:0,name:"void",styles:{type:6,styles:{"box-shadow":"none",visibility:"visible",width:"{{ collapsedSize }}"},offset:null},options:{params:{collapsedSize:"3.75rem"}}},{type:0,name:"void-shadow",styles:{type:6,styles:{visibility:"visible",width:"{{ collapsedSize }}"},offset:null},options:{params:{collapsedSize:"3.75rem"}}},{type:1,expr:"void => open-instant",animation:{type:4,styles:null,timings:"0ms"},options:null},{type:1,expr:"void <=> open, open-instant => void, void-shadow <=> open, open-instant => void-shadow",animation:{type:4,styles:null,timings:"400ms cubic-bezier(0.25, 0.8, 0.25, 1)"},options:null}],options:{}}]}});function F(n){return l.cc(2,[l.Ob(null,0),(n()(),l.Ab(1,0,null,null,1,"div",[["class","ts-drawer__inner-container"]],null,null,null,null,null)),l.Ob(null,1),l.Ob(null,2)],null,null)}class Z{}var I=l.yb({encapsulation:2,styles:[c],data:{}});function L(n){return l.cc(2,[l.Ob(null,0)],null,null)}var q=t("cvIe"),U=t("QOTb"),B=t("/tOu"),T=t("cbc1"),R=t("s5/a"),W=t("sBeF"),H=t("xA8z"),J=t("wjJN"),G=t("dun4"),Q=t("jL3B");class X{}var K=l.yb({encapsulation:2,styles:[c],data:{}});function Y(n){return l.cc(2,[l.Ob(null,0)],null,null)}var $=l.yb({encapsulation:2,styles:[],data:{}});function nn(n){return l.cc(2,[l.Ob(null,0)],null,null)}var en=t("+6xv");Object(en.n)("transform",[Object(en.k)("open, open-instant",Object(en.l)({transform:"none",visibility:"visible",width:"{{ expandedSize }}"}),{params:{expandedSize:"12.5rem"}}),Object(en.k)("void",Object(en.l)({"box-shadow":"none",visibility:"visible",width:"{{ collapsedSize }}"}),{params:{collapsedSize:"3.75rem"}}),Object(en.k)("void-shadow",Object(en.l)({visibility:"visible",width:"{{ collapsedSize }}"}),{params:{collapsedSize:"3.75rem"}}),Object(en.m)("void => open-instant",Object(en.e)("0ms")),Object(en.m)("void <=> open, open-instant => void, void-shadow <=> open, open-instant => void-shadow",Object(en.e)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))]);class tn{}class ln{constructor(n,e){this.formBuilder=n,this.zone=e,this.myForm=this.formBuilder.group({isSmall:!1,isCentered:!0,myRadioGroup:[null,[u.D.required]],myRadioGroup2:["bar2_value",[u.D.required]]}),this.modeControl=new u.i("push"),this.mode2Control=new u.i("overlay"),this.items=[{display:"Overlay the Content",value:"overlay"},{display:"Push Over the Content",value:"push"}],this.positionControl=new u.i("start"),this.position2Control=new u.i("end"),this.positions=[{display:"First drawer opens on the left",value:"start"},{display:"First drawer opens on the right",value:"end"}],this.uiFormatter=n=>n.display,this.modelFormatter=n=>n.value,this.theme="warn",this.position="end"}}var an=l.yb({encapsulation:0,styles:[[".drawer-container[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:25%}.drawer-card[_ngcontent-%COMP%]{min-height:600px}.first-drawer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-right:20px}"]],data:{}});function rn(n){return l.cc(0,[l.Vb(671088640,1,{drawerContainer:0}),(n()(),l.Ab(1,0,null,null,7,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(2,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(3,0,null,null,5,"ts-radio-group",[["class","ts-radio-group"],["label","Position:"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s.b,s.a)),l.zb(4,245760,null,0,o.a,[l.h,d.b],{formControl:[0,"formControl"],formatUILabelFn:[1,"formatUILabelFn"],formatModelValueFn:[2,"formatModelValueFn"],label:[3,"label"],options:[4,"options"]},null),l.Ub(1024,null,u.q,(function(n){return[n]}),[o.a]),l.zb(6,540672,null,0,u.j,[[8,null],[8,null],[6,u.q],[2,u.G]],{form:[0,"form"]},null),l.Ub(2048,null,u.r,null,[u.j]),l.zb(8,16384,null,0,u.s,[[4,u.r]],null,null),(n()(),l.Ab(9,0,null,null,85,"ts-drawer-container",[["class","drawer-container ts-drawer-container"]],[[2,"ts-drawer-container-explicit-backdrop",null]],null,null,_,D)),l.zb(10,1490944,[[1,4],["drawerContainer",4]],2,A,[l.l,l.A,l.F,l.h,[2,N.a]],{hasBackdrop:[0,"hasBackdrop"]},null),l.Vb(603979776,2,{drawers:1}),l.Vb(603979776,3,{content:0}),(n()(),l.Ab(13,0,null,0,41,"ts-drawer",[["class","first-drawer ts-drawer"],["collapsedSize","2rem"],["expandedSize","12rem"],["tabIndex","-1"]],[[1,"align",0],[1,"role",0],[2,"ts-drawer--end",null],[2,"ts-drawer--overlay",null],[2,"ts-drawer--push",null],[40,"@transform",0]],[["component","@transform.start"],["component","@transform.done"]],(function(n,e,t){var a=!0;return"component:@transform.start"===e&&(a=!1!==l.Pb(n,14).animationStartListener(t)&&a),"component:@transform.done"===e&&(a=!1!==l.Pb(n,14).animationDoneListener(t)&&a),a}),F,V)),l.zb(14,2277376,[[2,4],["drawer",4]],0,j,[l.l,E.a,l.A,l.F],{collapsedSize:[0,"collapsedSize"],expandedSize:[1,"expandedSize"],hideShadowWhenCollapsed:[2,"hideShadowWhenCollapsed"],isExpanded:[3,"isExpanded"],mode:[4,"mode"],position:[5,"position"]},null),l.Sb(15,{collapsedSize:0,expandedSize:1}),l.Sb(16,{value:0,params:1}),(n()(),l.Ab(17,0,null,0,3,"ts-drawer-header",[["class","ts-drawer-header"]],null,null,null,L,I)),l.zb(18,49152,null,0,Z,[],null,null),(n()(),l.Ab(19,0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),l.Zb(-1,null,["HEADER"])),(n()(),l.Ab(21,0,null,1,13,"div",[["class","drawer-content"],["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(22,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(23,0,null,null,4,"p",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(24,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(25,0,null,null,2,"ts-button",[["class","ts-button"]],null,[[null,"click"]],(function(n,e,t){var a=!0;return"click"===e&&(a=!1!==l.Pb(n,14).toggle()&&a),a}),q.b,q.a)),l.zb(26,245760,null,0,U.a,[l.h,B.b],null,null),(n()(),l.Zb(-1,0,["First Drawer"])),(n()(),l.Ab(28,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),l.Ab(29,0,null,null,5,"ts-radio-group",[["class","radio ts-radio-group"],["label","Mode:"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s.b,s.a)),l.zb(30,245760,null,0,o.a,[l.h,d.b],{formControl:[0,"formControl"],formatUILabelFn:[1,"formatUILabelFn"],formatModelValueFn:[2,"formatModelValueFn"],label:[3,"label"],options:[4,"options"]},null),l.Ub(1024,null,u.q,(function(n){return[n]}),[o.a]),l.zb(32,540672,null,0,u.j,[[8,null],[8,null],[6,u.q],[2,u.G]],{form:[0,"form"]},null),l.Ub(2048,null,u.r,null,[u.j]),l.zb(34,16384,null,0,u.s,[[4,u.r]],null,null),(n()(),l.Ab(35,0,null,1,15,"div",[],null,null,null,null,null)),(n()(),l.Ab(36,16777216,null,null,14,"ts-expansion-panel",[["class","ts-expansion-panel"]],[[2,"ts-expansion-panel--shadow",null],[2,"ts-expansion-panel--expanded",null],[2,"ts-expansion-panel--animation-noopable",null]],null,null,T.b,T.a)),l.zb(37,1753088,null,1,R.b,[l.h,W.c,l.R,B.a,[3,H.a],[2,N.a],[2,R.a]],null,null),l.Vb(603979776,4,{lazyContent:0}),l.Ub(256,null,H.a,R.c,[]),(n()(),l.Ab(40,0,null,0,4,"ts-expansion-panel-trigger",[["class","ts-expansion-panel__trigger"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"ts-expansion-panel__trigger--expanded",null],[2,"ts-expansion-panel__trigger--transparent",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],(function(n,e,t){var a=!0;return"click"===e&&(a=!1!==l.Pb(n,41).toggle()&&a),"keydown"===e&&(a=!1!==l.Pb(n,41).keydown(t)&&a),a}),J.b,J.a)),l.zb(41,180224,null,0,G.a,[R.b,l.l,Q.h,l.h,[2,R.a]],null,null),l.Sb(42,{collapsedHeight:0,expandedHeight:1}),l.Sb(43,{value:0,params:1}),(n()(),l.Zb(-1,2,[" Collapse and Expand! "])),(n()(),l.Ab(45,0,null,1,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(-1,null,[" And here is my standard panel content. "])),(n()(),l.Ab(47,0,null,1,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(-1,null,[" Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "])),(n()(),l.Ab(49,0,null,1,1,"p",[],null,null,null,null,null)),(n()(),l.Zb(-1,null,[" Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "])),(n()(),l.Ab(51,0,null,2,3,"ts-drawer-footer",[["class","ts-drawer-footer"]],null,null,null,Y,K)),l.zb(52,49152,null,0,X,[],null,null),(n()(),l.Ab(53,0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),l.Zb(-1,null,["THIS IS MY FOOTER"])),(n()(),l.Ab(55,0,null,0,17,"ts-drawer",[["class","second-drawer ts-drawer"],["collapsedSize","0rem"],["tabIndex","-1"]],[[1,"align",0],[1,"role",0],[2,"ts-drawer--end",null],[2,"ts-drawer--overlay",null],[2,"ts-drawer--push",null],[40,"@transform",0]],[["component","@transform.start"],["component","@transform.done"]],(function(n,e,t){var a=!0;return"component:@transform.start"===e&&(a=!1!==l.Pb(n,56).animationStartListener(t)&&a),"component:@transform.done"===e&&(a=!1!==l.Pb(n,56).animationDoneListener(t)&&a),a}),F,V)),l.zb(56,2277376,[[2,4],["drawer2",4]],0,j,[l.l,E.a,l.A,l.F],{collapsedSize:[0,"collapsedSize"],mode:[1,"mode"],position:[2,"position"]},null),l.Sb(57,{collapsedSize:0,expandedSize:1}),l.Sb(58,{value:0,params:1}),(n()(),l.Ab(59,0,null,1,13,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(60,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(61,0,null,null,4,"p",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(62,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(63,0,null,null,2,"ts-button",[["class","ts-button"]],null,[[null,"click"]],(function(n,e,t){var a=!0;return"click"===e&&(a=!1!==l.Pb(n,56).toggle()&&a),a}),q.b,q.a)),l.zb(64,245760,null,0,U.a,[l.h,B.b],null,null),(n()(),l.Zb(-1,0,["Second Drawer"])),(n()(),l.Ab(66,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),l.Ab(67,0,null,null,5,"ts-radio-group",[["class","ts-radio-group"],["label","Mode2:"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s.b,s.a)),l.zb(68,245760,null,0,o.a,[l.h,d.b],{formControl:[0,"formControl"],formatUILabelFn:[1,"formatUILabelFn"],formatModelValueFn:[2,"formatModelValueFn"],label:[3,"label"],options:[4,"options"]},null),l.Ub(1024,null,u.q,(function(n){return[n]}),[o.a]),l.zb(70,540672,null,0,u.j,[[8,null],[8,null],[6,u.q],[2,u.G]],{form:[0,"form"]},null),l.Ub(2048,null,u.r,null,[u.j]),l.zb(72,16384,null,0,u.s,[[4,u.r]],null,null),(n()(),l.Ab(73,0,null,1,21,"ts-drawer-content",[["class","ts-drawer-content"]],null,null,null,nn,$)),l.zb(74,245760,[[3,4]],0,C,[l.l,S.c,l.A],null,null),(n()(),l.Ab(75,0,null,0,19,"div",[["style","margin: 0px 100px;"]],null,null,null,null,null)),(n()(),l.Ab(76,0,null,null,4,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(77,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(78,0,null,null,2,"ts-button",[["class","ts-button"]],null,[[null,"clicked"]],(function(n,e,t){var a=!0;return"clicked"===e&&(a=!1!==l.Pb(n,14).toggle()&&a),a}),q.b,q.a)),l.zb(79,245760,null,0,U.a,[l.h,B.b],{isDisabled:[0,"isDisabled"],theme:[1,"theme"]},{clicked:"clicked"}),(n()(),l.Zb(-1,0,["Toggle first drawer"])),(n()(),l.Ab(81,0,null,null,4,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(82,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ab(83,0,null,null,2,"ts-button",[["class","ts-button"]],null,[[null,"clicked"]],(function(n,e,t){var a=!0;return"clicked"===e&&(a=!1!==l.Pb(n,56).toggle()&&a),a}),q.b,q.a)),l.zb(84,245760,null,0,U.a,[l.h,B.b],{isDisabled:[0,"isDisabled"],theme:[1,"theme"]},{clicked:"clicked"}),(n()(),l.Zb(-1,0,["Toggle 2nd drawer"])),(n()(),l.Ab(86,0,null,null,2,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.zb(87,16384,null,0,r.a,[l.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Zb(-1,null,[" This is the drawer content... The #1 software development tool used by agile teams. Visual regression testing is the ability to cross-reference snapshots of a product, highlighting pixel differences \u2014 returning fast feedback on the current state of the screen. "])),(n()(),l.Ab(89,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l.Ab(90,0,null,null,0,"img",[["src","https://via.placeholder.com/502x250?text=Visit+New+Site+Now"]],null,null,null,null,null)),(n()(),l.Ab(91,0,null,null,3,"div",[["fxlayout","row wrap"],["style","flex-flow: row wrap; box-sizing: border-box; display: flex;"]],null,null,null,null,null)),(n()(),l.Ab(92,0,null,null,0,"img",[["src","https://via.placeholder.com/250x300?text=View Side by Side"]],null,null,null,null,null)),(n()(),l.Zb(-1,null,[" \xa0\xa0\xa0 "])),(n()(),l.Ab(94,0,null,null,0,"img",[["src","https://via.placeholder.com/240x300?text=This is 240x300 size"]],null,null,null,null,null))],(function(n,e){var t=e.component;n(e,2,0,""),n(e,4,0,t.positionControl,t.uiFormatter,t.modelFormatter,"Position:",t.positions),n(e,6,0,t.positionControl),n(e,10,0,!1),n(e,14,0,"2rem","12rem",!1,!1,t.modeControl.value,t.positionControl.value),n(e,22,0,""),n(e,24,0,""),n(e,26,0),n(e,30,0,t.modeControl,t.uiFormatter,t.modelFormatter,"Mode:",t.items),n(e,32,0,t.modeControl),n(e,56,0,"0rem",t.mode2Control.value,t.position2Control.value),n(e,60,0,""),n(e,62,0,""),n(e,64,0),n(e,68,0,t.mode2Control,t.uiFormatter,t.modelFormatter,"Mode2:",t.items),n(e,70,0,t.mode2Control),n(e,74,0),n(e,77,0,""),n(e,79,0,!1,t.theme),n(e,82,0,""),n(e,84,0,!1,t.theme),n(e,87,0,"")}),(function(n,e){n(e,3,0,l.Pb(e,8).ngClassUntouched,l.Pb(e,8).ngClassTouched,l.Pb(e,8).ngClassPristine,l.Pb(e,8).ngClassDirty,l.Pb(e,8).ngClassValid,l.Pb(e,8).ngClassInvalid,l.Pb(e,8).ngClassPending),n(e,9,0,l.Pb(e,10).hasBackdrop);var t=l.Pb(e,14).role,a="end"===l.Pb(e,14).position,i="overlay"===l.Pb(e,14).mode,r="push"===l.Pb(e,14).mode,s=n(e,16,0,l.Pb(e,14).animationState,n(e,15,0,l.Pb(e,14).collapsedSize,l.Pb(e,14).expandedSize));n(e,13,0,null,t,a,i,r,s),n(e,29,0,l.Pb(e,34).ngClassUntouched,l.Pb(e,34).ngClassTouched,l.Pb(e,34).ngClassPristine,l.Pb(e,34).ngClassDirty,l.Pb(e,34).ngClassValid,l.Pb(e,34).ngClassInvalid,l.Pb(e,34).ngClassPending),n(e,36,0,!l.Pb(e,37).transparentMode,l.Pb(e,37).expanded,"NoopAnimations"===l.Pb(e,37).animationMode);var o=l.Pb(e,41).panel.triggerId,d=l.Pb(e,41).disabled?-1:0,u=l.Pb(e,41).panel.id,c=l.Pb(e,41).isExpanded,b=l.Pb(e,41).panel.disabled,p=l.Pb(e,41).isExpanded,h=l.Pb(e,41).isTransparent,g=n(e,43,0,l.Pb(e,41).currentPanelExpandedState,n(e,42,0,l.Pb(e,41).collapsedHeight,l.Pb(e,41).expandedHeight));n(e,40,0,o,d,u,c,b,p,h,g);var m=l.Pb(e,56).role,w="end"===l.Pb(e,56).position,f="overlay"===l.Pb(e,56).mode,v="push"===l.Pb(e,56).mode,x=n(e,58,0,l.Pb(e,56).animationState,n(e,57,0,l.Pb(e,56).collapsedSize,l.Pb(e,56).expandedSize));n(e,55,0,null,m,w,f,v,x),n(e,67,0,l.Pb(e,72).ngClassUntouched,l.Pb(e,72).ngClassTouched,l.Pb(e,72).ngClassPristine,l.Pb(e,72).ngClassDirty,l.Pb(e,72).ngClassValid,l.Pb(e,72).ngClassInvalid,l.Pb(e,72).ngClassPending)}))}function sn(n){return l.cc(0,[(n()(),l.Ab(0,0,null,null,1,"demo-drawer",[],null,null,null,rn,an)),l.zb(1,49152,null,0,ln,[u.h,l.A],null,null)],null,null)}var on=l.wb("demo-drawer",ln,sn,{},{},[]),dn=t("iwai"),un=t("76xf"),cn=t("QHlv"),bn=t("MwlL"),pn=t("VDyN"),hn=t("/L33"),gn=t("CQ8i"),mn=t("A0Cr"),wn=t("cpIX"),fn=t("wqa9"),vn=t("1VvW");class xn{}var Sn=t("vE5V"),Cn=t("pTnX"),yn=t("NxuZ"),kn=t("iASq"),zn=t("zlaC"),On=t("Sgnd"),Pn=t("2ob+"),jn=t("aLyt"),An=t("CBf0"),Nn=t("8spT"),Dn=t("QNlx"),Mn=t("7ug1"),_n=t("PGMF"),En=t("yUiZ"),Vn=t("hCLc"),Fn=t("qvIn"),Zn=t("XWDJ"),In=t("PRqq"),Ln=t("ZtZA"),qn=t("/J7O"),Un=l.xb(a,[],(function(n){return l.Mb([l.Nb(512,l.j,l.bb,[[8,[i.a,on,dn.b,dn.a]],[3,l.j],l.y]),l.Nb(4608,b.o,b.n,[l.v]),l.Nb(4608,u.F,u.F,[]),l.Nb(4608,u.h,u.h,[]),l.Nb(5120,l.b,(function(n,e){return[un.j(n,e)]}),[b.d,l.C]),l.Nb(4608,cn.a,cn.a,[]),l.Nb(4608,bn.a,bn.a,[]),l.Nb(4608,pn.a,pn.a,[]),l.Nb(4608,hn.a,hn.a,[]),l.Nb(4608,gn.a,gn.a,[]),l.Nb(4608,mn.a,mn.a,[]),l.Nb(4608,wn.a,wn.a,[]),l.Nb(4608,fn.a,fn.a,[bn.a]),l.Nb(4608,B.b,B.b,[]),l.Nb(1073742336,b.c,b.c,[]),l.Nb(1073742336,vn.p,vn.p,[[2,vn.u],[2,vn.l]]),l.Nb(1073742336,xn,xn,[]),l.Nb(1073742336,u.E,u.E,[]),l.Nb(1073742336,u.o,u.o,[]),l.Nb(1073742336,u.A,u.A,[]),l.Nb(1073742336,Sn.a,Sn.a,[]),l.Nb(1073742336,Cn.i,Cn.i,[Q.j,[2,Cn.e],[2,b.d]]),l.Nb(1073742336,E.b,E.b,[]),l.Nb(1073742336,Cn.l,Cn.l,[]),l.Nb(1073742336,yn.j,yn.j,[]),l.Nb(1073742336,kn.a,kn.a,[]),l.Nb(1073742336,zn.a,zn.a,[]),l.Nb(1073742336,un.c,un.c,[]),l.Nb(1073742336,On.i,On.i,[]),l.Nb(1073742336,Pn.b,Pn.b,[]),l.Nb(1073742336,jn.a,jn.a,[]),l.Nb(1073742336,An.a,An.a,[un.g,l.C]),l.Nb(1073742336,Nn.d,Nn.d,[]),l.Nb(1073742336,Dn.a,Dn.a,[]),l.Nb(1073742336,Mn.a,Mn.a,[]),l.Nb(1073742336,_n.a,_n.a,[]),l.Nb(1073742336,En.b,En.b,[]),l.Nb(1073742336,S.b,S.b,[]),l.Nb(1073742336,S.d,S.d,[]),l.Nb(1073742336,tn,tn,[]),l.Nb(1073742336,Vn.c,Vn.c,[]),l.Nb(1073742336,Fn.c,Fn.c,[]),l.Nb(1073742336,Zn.a,Zn.a,[]),l.Nb(1073742336,In.c,In.c,[]),l.Nb(1073742336,Ln.f,Ln.f,[]),l.Nb(1073742336,qn.a,qn.a,[]),l.Nb(1073742336,a,a,[]),l.Nb(1024,vn.j,(function(){return[[{path:"",component:ln}]]}),[])])}))}}]);