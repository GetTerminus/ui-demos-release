(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"23eI":function(t,n,o){"use strict";o.d(n,"a",(function(){return c}));var e=o("Hq54"),i=o("gxbW"),a=o("EKI7"),s=o("6Oco"),l=o("g6G6"),r=o("xVbo");o("V9lv");class c{constructor(t,n,o,e,i){this.panel=t,this.elementRef=n,this.focusMonitor=o,this.changeDetectorRef=e;const c=t.accordion?t.accordion._stateChanges.pipe(Object(r.a)(t=>!!t.hideToggle)):s.a;Object(l.a)(t.opened,t.closed,c,t.inputChanges.pipe(Object(r.a)(t=>!(!t.hideToggle&&!t.disabled)))).pipe(Object(a.j)(this)).subscribe(()=>this.changeDetectorRef.markForCheck()),t.closed.pipe(Object(r.a)(()=>t.contentContainsFocus),Object(a.j)(this)).subscribe(()=>o.focusVia(n,"program")),o.monitor(n).subscribe(n=>{n&&t.accordion&&t.accordion.handleTriggerFocus(this)}),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}get currentPanelExpandedState(){return this.panel.currentExpandedState}get isExpanded(){return this.panel.expanded}get disabled(){return this.panel.disabled}get shouldShowToggle(){return!this.panel.hideToggle&&!this.panel.disabled}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}focus(t="program"){this.focusMonitor.focusVia(this.elementRef,t)}toggle(){this.panel.toggle()}keydown(t){const{code:n}=t;n===i.a.SPACE.code||n===i.a.ENTER.code?Object(e.s)(t)||(t.preventDefault(),this.toggle()):this.panel.accordion&&this.panel.accordion.handleTriggerKeydown(t)}}},"3D/z":function(t,n,o){"use strict";o.d(n,"a",(function(){return e})),o("yRPL");class e{}},"646u":function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));class e{}},"8Xtk":function(t,n,o){"use strict";o.d(n,"a",(function(){return a})),o.d(n,"b",(function(){return l}));var e=o("kZht"),i=o("An66"),a=(o("23eI"),o("V9lv"),o("jL3B"),e.yb({encapsulation:2,styles:[['.ts-expansion-panel__trigger{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;align-items:center;border-radius:inherit;display:flex;flex-direction:row;padding:0 24px}.ts-expansion-panel__trigger:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-expansion-panel__trigger:focus,.ts-expansion-panel__trigger:hover{outline:none}.ts-expansion-panel__trigger.ts-expansion-panel__trigger--expanded:focus,.ts-expansion-panel__trigger.ts-expansion-panel__trigger--expanded:hover{background:inherit}.ts-expansion-panel__trigger[aria-disabled=true]{color:#cecdd1}.ts-expansion-panel__trigger[aria-disabled=true] .ts-expansion-panel__trigger-description,.ts-expansion-panel__trigger[aria-disabled=true] .ts-expansion-panel__trigger-title{color:inherit}.ts-expansion-panel__trigger:not([aria-disabled=true]){cursor:pointer}@media (hover:none){.ts-expansion-panel:not(.ts-expansion-panel--expanded):not([aria-disabled=true]) .ts-expansion-panel__trigger:hover{background:#fafafa}}.ts-expansion-panel__trigger-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.ts-expansion-panel__trigger-description,.ts-expansion-panel__trigger-title{display:flex;flex-grow:0;margin-right:32px}.ts-expansion-panel__trigger-description{color:#757575;flex-grow:2}.ts-expansion-panel__indicator:after{border-style:solid;border-width:0 2px 2px 0;color:#999;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]).cdk-keyboard-focused,.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]).cdk-program-focused,.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]):hover{background:#f2f0f7}']],data:{animation:[{type:7,name:"indicatorRotate",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{transform:"rotate(0deg)"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{transform:"rotate(180deg)"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}},{type:7,name:"expansionHeight",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{height:"{{collapsedHeight}}"},offset:null},options:{params:{collapsedHeight:"48px"}}},{type:0,name:"expanded",styles:{type:6,styles:{height:"{{expandedHeight}}"},offset:null},options:{params:{expandedHeight:"64px"}}},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:3,steps:[{type:11,selector:"@indicatorRotate",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"}],options:null},options:null}],options:{}}]}}));function s(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,0,"span",[["class","ts-expansion-panel__indicator"]],[[24,"@indicatorRotate",0]],null,null,null,null))],null,(function(t,n){t(n,0,0,n.component.currentPanelExpandedState)}))}function l(t){return e.cc(2,[(t()(),e.Ab(0,0,null,null,3,"span",[["class","ts-expansion-panel__trigger-content"],["role","button"]],null,null,null,null,null)),e.Ob(null,0),e.Ob(null,1),e.Ob(null,2),(t()(),e.jb(16777216,null,null,1,null,s)),e.zb(5,16384,null,0,i.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,5,0,n.component.shouldShowToggle)}),null)}},EofT:function(t,n,o){"use strict";o.d(n,"a",(function(){return m})),o.d(n,"b",(function(){return v}));var e=o("kZht"),i=o("7gNy"),a=o("q1Wg"),s=o("ydE+"),l=o("ENSU"),r=o("N61E"),c=o("An66"),u=o("qvIn"),d=o("O1jd"),b=o("FxgA"),p=o("Xekx"),h=o("hCLc"),g=o("jL3B"),m=(o("yRPL"),o("/tOu"),e.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}ts-button{--button-lineHeight:35px;--button-rotation:360deg;--button-icon-negative-padding-adjustment:-4px;--button-collapsible-first-icon-adjustment:-.15em;--button-content-transitionDuration:var(--ts-animation-time-duration-500);--button-icon-transitionDuration-collapse:calc(var(--button-content-transitionDuration) - 100ms);--button-icon-transitionDuration-expand:calc(var(--button-icon-transitionDuration-collapse) - 100ms);--button-label-transitionDuration:calc(var(--button-icon-transitionDuration-expand) - 100ms);--button-color-transitionDuration:calc(var(--button-label-transitionDuration) - 100ms);--button-color-transition:color var(--button-color-transitionDuration) var(--ts-animation-easing-ease);--button-background-transition:background var(--button-icon-transitionDuration-collapse) var(--ts-animation-easing-ease);--button-shadow-transition:box-shadow var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-maxWidth-transition:max-width var(--button-content-transitionDuration) var(--ts-animation-easing-ease);--button-icon-transition:transform var(--button-icon-transitionDuration-expand) var(--ts-animation-easing-ease);--button-spinner-transition:opacity var(--button-label-transitionDuration) var(--ts-animation-easing-ease);--button-margin:4px 0;--button-padding:0 var(--ts-space-inline-400);--button-padding-collapsed:0 6px;--button-border:1px solid transparent;--button-border-radius:3px;--button-border-radius-collapsible:2em;--button-backgroundColor-disabled:var(--ts-color-utility-300);--button-backgroundColor-primary:var(--ts-color-primary-500);--button-backgroundColor-accent:var(--ts-color-accent-500);--button-backgroundColor-warn:var(--ts-color-warn-500);--button-color-disabled:var(--ts-color-utility-500);--button-color:var(--ts-color-light);--button-padding-right-progress:36px;--button-icon-vertical-adjustment:-.15em;--button-icon-horizontal-adjustment:.2em}.ts-button{display:inline-block;margin:var(--button-margin)}.ts-button :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-button h1,.ts-button h2,.ts-button h3,.ts-button h4,.ts-button h5,.ts-button p{margin:unset}.ts-button .c-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border:var(--button-border);border-radius:var(--button-border-radius);color:var(--button-color);line-height:var(--button-lineHeight);min-width:auto;padding:var(--button-padding);transition:var(--button-color-transition),var(--button-background-transition),var(--button-shadow-transition)}.ts-button .c-button:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-button .c-button--primary:not(.c-button--hollow){background-color:var(--button-backgroundColor-primary)}.ts-button .c-button--primary[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--primary.c-button--hollow{border-color:var(--ts-color-primary-500);box-shadow:none;color:var(--ts-color-primary-500)}.ts-button .c-button--primary.c-button--hollow:focus,.ts-button .c-button--primary.c-button--hollow:hover{background-color:var(--button-backgroundColor-primary);color:var(--button-color)}.ts-button .c-button--primary.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--accent:not(.c-button--hollow){background-color:var(--button-backgroundColor-accent)}.ts-button .c-button--accent[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--accent.c-button--hollow{border-color:var(--ts-color-accent-500);box-shadow:none;color:var(--ts-color-accent-500)}.ts-button .c-button--accent.c-button--hollow:focus,.ts-button .c-button--accent.c-button--hollow:hover{background-color:var(--button-backgroundColor-accent);color:var(--button-color)}.ts-button .c-button--accent.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-button .c-button--warn:not(.c-button--hollow){background-color:var(--button-backgroundColor-warn)}.ts-button .c-button--warn[disabled]{background-color:var(--button-backgroundColor-disabled);color:var(--button-color-disabled)}.ts-button .c-button--warn.c-button--hollow{border-color:var(--ts-color-warn-500);box-shadow:none;color:var(--ts-color-warn-500)}.ts-button .c-button--warn.c-button--hollow:focus,.ts-button .c-button--warn.c-button--hollow:hover{background-color:var(--button-backgroundColor-warn);color:var(--button-color)}.ts-button .c-button--warn.c-button--hollow[disabled]{background-color:transparent;border-color:var(--ts-color-utility-500);color:var(--ts-color-utility-500)}.ts-search .ts-button{position:relative;top:calc(var(--ts-space-stack-400)*-1)}.c-button[disabled]{cursor:not-allowed}.c-button .mat-button-wrapper{position:relative;transition:padding .2s ease-out;will-change:padding,margin}.c-button.c-button--progress .mat-button-wrapper{padding-right:var(--button-padding-right-progress)}.c-button__icon{margin-right:var(--button-icon-horizontal-adjustment)}.c-button .c-icon{margin-top:var(--button-icon-vertical-adjustment);transition:var(--button-icon-transition);vertical-align:middle;will-change:transform}.c-button .c-button__spinner{display:inline-block;opacity:0;position:absolute;right:0;top:0;transition:var(--button-spinner-transition)}.c-button .c-button__spinner--active{opacity:1}.c-button .c-button__spinner circle{stroke:var(--ts-color-utility-500)}.c-button.c-button--collapsed:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsed:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsed:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable,.c-button.c-button--collapsible{border-radius:var(--button-border-radius-collapsible)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus),.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus){padding:var(--button-padding-collapsed)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .ts-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .ts-icon{margin-right:0}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-icon,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-icon{position:relative;transform:rotate(var(--button-rotation));transition-duration:var(--button-icon-transitionDuration-collapse)}.c-button.c-button--collapsable[disabled]:not(:hover):not(:focus) .c-button__content,.c-button.c-button--collapsible[disabled]:not(:hover):not(:focus) .c-button__content{max-width:0;padding:0}.c-button.c-button--collapsable:focus .c-icon,.c-button.c-button--collapsable:hover .c-icon,.c-button.c-button--collapsible:focus .c-icon,.c-button.c-button--collapsible:hover .c-icon{margin-left:var(--button-collapsible-first-icon-adjustment)}.c-button.c-button--collapsable .c-button__content,.c-button.c-button--collapsible .c-button__content{display:inline-block;max-width:400px;overflow:hidden;transition:var(--button-maxWidth-transition);white-space:nowrap}.c-button.c-button--collapsable .c-button__content .ts-icon,.c-button.c-button--collapsible .c-button__content .ts-icon{margin-left:var(--button-icon-negative-padding-adjustment);margin-right:var(--button-icon-negative-padding-adjustment)}.c-button.c-button--collapsable .mat-ripple,.c-button.c-button--collapsible .mat-ripple{border-radius:var(--button-border-radius-collapsible)}.mat-menu-panel .ts-button button.c-button{--menu-item-color:var(--ts-color-base-black);--menu-item-backgroundColor:transparent;background-color:var(--menu-item-backgroundColor);border-radius:0;box-shadow:none;color:var(--menu-item-color);text-align:left;transition-duration:var(--ts-animation-time-duration-400);transition-property:background-color,color;transition-timing-function:var(--ts-animation-easing-ease);width:100%}.mat-menu-panel .ts-button button.c-button:active,.mat-menu-panel .ts-button button.c-button:focus,.mat-menu-panel .ts-button button.c-button:hover{--menu-item-backgroundColor:var(--ts-color-utility-100);--menu-item-color:var(--ts-color-primary-500);box-shadow:none}"]],data:{}}));function f(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,2,"ts-icon",[["class","c-button__icon ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,i.b,i.a)),e.zb(1,49152,null,0,a.a,[s.d,l.b],null,null),(t()(),e.Zb(2,0,[" "," "]))],null,(function(t,n){var o=n.component;t(n,0,0,e.Pb(n,1).inline,"primary"===e.Pb(n,1).theme,"accent"===e.Pb(n,1).theme,"warn"===e.Pb(n,1).theme,e.Pb(n,1).background),t(n,2,0,o.iconName)}))}function x(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,3,"mat-progress-spinner",[["class","c-button__spinner qa-button-spinner mat-progress-spinner"],["diameter","21"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,r.b,r.a)),e.zb(1,278528,null,0,c.k,[e.t,e.u,e.l,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Sb(2,{"c-button__spinner--active":0}),e.zb(3,114688,null,0,u.b,[e.l,d.a,[2,c.d],[2,b.a],u.a],{diameter:[0,"diameter"],mode:[1,"mode"]},null)],(function(t,n){var o=n.component,e=t(n,2,0,o.showProgress&&!o.isDisabled);t(n,1,0,"c-button__spinner qa-button-spinner",e),t(n,3,0,"21","indeterminate")}),(function(t,n){t(n,0,0,e.Pb(n,3)._noopAnimations,e.Pb(n,3).diameter,e.Pb(n,3).diameter,"determinate"===e.Pb(n,3).mode?0:null,"determinate"===e.Pb(n,3).mode?100:null,"determinate"===e.Pb(n,3).mode?e.Pb(n,3).value:null,e.Pb(n,3).mode)}))}function v(t){return e.cc(2,[e.Vb(402653184,1,{button:0}),(t()(),e.Ab(1,0,null,null,9,"button",[["class","c-button mat-raised-button qa-button mat-focus-indicator"],["mat-raised-button",""]],[[1,"aria-label",0],[1,"id",0],[1,"type",0],[8,"tabIndex",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,n,o){var e=!0;return"click"===n&&(e=!1!==t.component.clickedButton(o)&&e),e}),p.b,p.a)),e.zb(2,278528,null,0,c.k,[e.t,e.u,e.l,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Sb(3,{"c-button--collapsed":0,"c-button--progress":1}),e.zb(4,180224,[[1,4],["button",4]],0,h.b,[e.l,g.h,[2,b.a]],{disabled:[0,"disabled"]},null),(t()(),e.jb(16777216,null,0,1,null,f)),e.zb(6,16384,null,0,c.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(t()(),e.Ab(7,0,null,0,1,"span",[["class","c-button__content"]],null,null,null,null,null)),e.Ob(null,0),(t()(),e.jb(16777216,null,0,1,null,x)),e.zb(10,16384,null,0,c.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],(function(t,n){var o=n.component,e=t(n,3,0,o.isCollapsed,o.showProgress&&!o.isDisabled);t(n,2,0,"c-button mat-raised-button qa-button",e),t(n,4,0,o.shouldBeDisabled),t(n,6,0,o.iconName),t(n,10,0,o.showProgress&&!o.isDisabled)}),(function(t,n){var o=n.component;t(n,1,0,o.actionName,o.id,o.buttonType,e.Hb(1,"",o.tabIndex,""),e.Pb(n,4).disabled||null,"NoopAnimations"===e.Pb(n,4)._animationMode)}))}},N9RK:function(t,n,o){"use strict";o.d(n,"a",(function(){return l}));var e=o("jL3B"),i=o("PRqq"),a=o("kZht"),s=o("gxbW");o("23eI");class l extends i.a{constructor(){super(...arguments),this._hideToggle=!1,this.destroyed=new a.o}set hideToggle(t){this._hideToggle=t}get hideToggle(){return this._hideToggle}ngAfterContentInit(){this.keyManager=new e.g(this.triggers).withWrap()}ngOnDestroy(){this.destroyed.emit()}handleTriggerKeydown(t){const{code:n}=t,o=this.keyManager;n===s.a.HOME.code?(o.setFirstItemActive(),t.preventDefault()):n===s.a.END.code?(o.setLastItemActive(),t.preventDefault()):this.keyManager.onKeydown(t)}handleTriggerFocus(t){this.keyManager.updateActiveItem(t)}}},PRqq:function(t,n,o){"use strict";o.d(n,"a",(function(){return r})),o.d(n,"b",(function(){return u})),o.d(n,"c",(function(){return d}));var e=o("kZht"),i=o("5XID"),a=o("ZTXN"),s=o("bwdy");let l=0;class r{constructor(){this._stateChanges=new a.a,this._openCloseAllActions=new a.a,this.id=`cdk-accordion-${l++}`,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=Object(i.b)(t)}openAll(){this._openCloseAll(!0)}closeAll(){this._openCloseAll(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete()}_openCloseAll(t){this.multi&&this._openCloseAllActions.next(t)}}let c=0;class u{constructor(t,n,o){this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=o,this._openCloseAllSubscription=s.a.EMPTY,this.closed=new e.o,this.opened=new e.o,this.destroyed=new e.o,this.expandedChange=new e.o,this.id=`cdk-accordion-child-${c++}`,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((t,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==t&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(t){t=Object(i.b)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(i.b)(t)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}class d{}},V9lv:function(t,n,o){"use strict";o.d(n,"a",(function(){return b})),o.d(n,"b",(function(){return g})),o.d(n,"c",(function(){return h}));var e=o("PRqq"),i=o("ZtZA"),a=o("kZht"),s=o("EKI7"),l=o("ZTXN"),r=o("Ohay"),c=o("jIqt"),u=o("xVbo"),d=o("J+dc");o("m9Jt"),o("qN8E");const b=new a.r("TS_EXPANSION_PANEL_DEFAULT_OPTIONS");let p=0;const h=void 0;class g extends e.b{constructor(t,n,o,e,i,c,u){super(i,t,n),this._uniqueSelectionDispatcher=n,this._viewContainerRef=o,this.documentService=e,this.animationMode=c,this.bodyAnimationDone=new l.a,this.triggerId=`ts-expansion-panel-trigger-${p++}`,this.inputChanges=new l.a,this._hideToggle=!1,this.afterExpand=new a.o,this.afterCollapse=new a.o,this.accordion=i,this.bodyAnimationDone.pipe(Object(s.j)(this),Object(r.a)((t,n)=>t.fromState===n.fromState&&t.toState===n.toState)).subscribe(t=>{"void"!==t.fromState&&("expanded"===t.toState?this.afterExpand.emit():"collapsed"===t.toState&&this.afterCollapse.emit())}),u&&(this.hideToggle=u.hideToggle)}get currentExpandedState(){return this.expanded?"expanded":"collapsed"}get contentContainsFocus(){if(this.panelBody&&this.documentService.document){const t=this.documentService.document.activeElement,n=this.panelBody.nativeElement;return t===n||n.contains(t)}return!1}set hideToggle(t){this._hideToggle=t}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set isDisabled(t){this.disabled=t}get isDisabled(){return this.disabled}set isExpanded(t){this.expanded=t}get isExpanded(){return this.expanded}ngAfterContentInit(){this.lazyContent&&this.opened.pipe(Object(c.a)(null),Object(u.a)(()=>this.expanded&&!this.portal),Object(d.a)(1)).subscribe(()=>{this.portal=new i.g(this.lazyContent.template,this._viewContainerRef)})}ngOnChanges(t){this.inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this.inputChanges.complete()}}},"Xy+M":function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));class e{}},hO76:function(t,n,o){"use strict";o.d(n,"a",(function(){return i})),o("V9lv"),o("qN8E"),o("646u"),o("23eI"),o("Xy+M"),o("lZZS"),o("N9RK"),o("m9Jt");var e=o("+6xv");Object(e.n)("indicatorRotate",[Object(e.k)("collapsed, void",Object(e.l)({transform:"rotate(0deg)"})),Object(e.k)("expanded",Object(e.l)({transform:"rotate(180deg)"})),Object(e.m)("expanded <=> collapsed, void => collapsed",Object(e.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),Object(e.n)("expansionHeight",[Object(e.k)("collapsed, void",Object(e.l)({height:"{{collapsedHeight}}"}),{params:{collapsedHeight:"48px"}}),Object(e.k)("expanded",Object(e.l)({height:"{{expandedHeight}}"}),{params:{expandedHeight:"64px"}}),Object(e.m)("expanded <=> collapsed, void => collapsed",Object(e.g)([Object(e.i)("@indicatorRotate",Object(e.f)(),{optional:!0}),Object(e.e)("225ms cubic-bezier(0.4,0.0,0.2,1)")]))]),Object(e.n)("bodyExpansion",[Object(e.k)("collapsed, void",Object(e.l)({height:"0px",visibility:"hidden"})),Object(e.k)("expanded",Object(e.l)({height:"*",visibility:"visible"})),Object(e.m)("expanded <=> collapsed, void => collapsed",Object(e.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]);class i{}},lZZS:function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));class e{}},m9Jt:function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));const e=new(o("kZht").r)("TS_ACCORDION")},qN8E:function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));class e{constructor(t){this.template=t}}},vu8y:function(t,n,o){"use strict";o.d(n,"a",(function(){return s})),o.d(n,"b",(function(){return r}));var e=o("kZht"),i=o("ZtZA"),a=o("An66"),s=(o("V9lv"),o("sBeF"),o("/tOu"),o("m9Jt"),o("FxgA"),e.yb({encapsulation:2,styles:[[":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25,.8,.25,1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55,0,.55,.2)}.ts-expansion-panel{background:#fafafa;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:content-box;color:#302d35;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow g-elevation-transition-duration cubic-bezier(.4,0,.2,1)}@media screen and (-ms-high-contrast:active){.ts-expansion-panel{outline:1px solid}}.ts-accordion .ts-expansion-panel{border-radius:0}.ts-accordion .ts-expansion-panel:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px}.ts-accordion .ts-expansion-panel:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.ng-animate-disabled .ts-expansion-panel,.ts-expansion-panel.ng-animate-disabled,.ts-expansion-panel.ts-expansion-panel--animation-noopable{transition:none}.ts-expansion-panel__content{display:flex;flex-direction:column;overflow:visible}.ts-expansion-panel__body{padding:0 24px 16px}.ts-expansion-panel__action-row{border-top:1px solid #cecdd1;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.ts-expansion-panel__action-row .ts-button{margin-left:8px}"]],data:{animation:[{type:7,name:"bodyExpansion",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{height:"0px",visibility:"hidden"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{height:"*",visibility:"visible"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}}]}}));function l(t){return e.cc(0,[(t()(),e.jb(0,null,null,0))],null,null)}function r(t){return e.cc(2,[e.Vb(402653184,1,{panelBody:0}),e.Ob(null,0),(t()(),e.Ab(2,0,[[1,0],["panelBody",1]],null,5,"div",[["class","ts-expansion-panel__content"],["role","region"]],[[24,"@bodyExpansion",0],[1,"aria-labelledby",0],[1,"aria-hidden",0],[8,"id",0]],[[null,"@bodyExpansion.done"]],(function(t,n,o){var e=!0;return"@bodyExpansion.done"===n&&(e=!1!==t.component.bodyAnimationDone.next(o)&&e),e}),null,null)),(t()(),e.Ab(3,0,null,null,3,"div",[["class","ts-expansion-panel__body"]],null,null,null,null,null)),e.Ob(null,1),(t()(),e.jb(16777216,null,null,1,null,l)),e.zb(6,212992,null,0,i.c,[e.j,e.R,a.d],{portal:[0,"portal"]},null),e.Ob(null,2)],(function(t,n){t(n,6,0,n.component.portal)}),(function(t,n){var o=n.component;t(n,2,0,o.currentExpandedState,o.triggerId,!o.expanded,o.id)}))}},yRPL:function(t,n,o){"use strict";o.d(n,"a",(function(){return l}));var e=o("kZht"),i=o("3896");let a=0;const s=["filled","hollow","collapsable","collapsible"];class l{constructor(t,n,o){this.changeDetectorRef=t,this.windowService=n,this.renderer=o,this.isCollapsed=!1,this.interceptClick=!1,this.uid=`ts-button-${a++}`,this.actionName="Button",this.buttonType="button",this.isDisabled=!1,this._id=this.uid,this.showProgress=!1,this.tabIndex=0,this.clicked=new e.o}get shouldBeDisabled(){return this.isDisabled||this.showProgress}set collapsed(t){this.isCollapsed=t,!t&&this.collapseDelay&&this.collapseWithDelay(this.collapseDelay)}set format(t){t&&(s.indexOf(t)<0&&Object(e.Y)()?console.warn(`TsButtonComponent: "${t}" is not an allowed format. See TsButtonFormatTypes for available options.`):("collapsable"===t&&Object(e.Y)()&&console.warn('TsButtonComponent: "collapsable" has been deprecated. Please use "collapsible" instead.'),this._format=t,"collapsable"===this._format||"collapsible"===this._format?this.collapseDelay||(this.collapseDelay=4e3):this.collapseDelay&&(this.collapseDelay=void 0),this.updateClasses(t)))}get format(){return this._format}set id(t){this._id=t||this.uid}get id(){return this._id}set theme(t){t&&(i.e.indexOf(t)<0&&Object(e.Y)()?console.warn(`TsButtonComponent: "${t}" is not an allowed theme. See TsStyleThemeTypes for available options.`):(this._theme=t,this.updateClasses(t)))}get theme(){return this._theme}ngOnInit(){if(this.collapseDelay&&(this.collapseTimeoutId=this.collapseWithDelay(this.collapseDelay)),this.theme?this.updateClasses(this.theme):this.theme="primary",this.format?this.updateClasses(this.format):this.format="filled",("collapsable"===this.format||"collapsible"===this.format)&&!this.iconName&&Object(e.Y)())throw new Error("`iconName` must be defined for collapsible buttons.")}ngOnDestroy(){this.collapseTimeoutId&&this.windowService.nativeWindow.clearTimeout(this.collapseTimeoutId)}clickedButton(t){this.interceptClick?this.originalClickEvent=t:this.clicked.emit(t)}collapseWithDelay(t){return this.windowService.nativeWindow.setTimeout(()=>{this.isCollapsed=!0,this.changeDetectorRef.detectChanges()},t)}updateClasses(t){const n=["primary","accent","warn"],o=["filled","hollow","collapsable","collapsible"],e=n.indexOf(t)>=0,i=o.indexOf(t)>=0,a=this.button?this.button._elementRef.nativeElement:null,s=n.map(t=>`c-button--${t}`),l=o.map(t=>`c-button--${t}`);if(e&&a){for(const t of s)this.renderer.removeClass(a,t);this.renderer.addClass(a,`c-button--${t}`)}if(i&&a){for(const t of l)this.renderer.removeClass(a,t);this.renderer.addClass(a,`c-button--${t}`)}}}}}]);