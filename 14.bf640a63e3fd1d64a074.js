(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{EzXM:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var l=n("mrSG"),i=n("CcnG"),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isChecked=!1,t.isDisabled=!1,t.isRequired=!1,t.labelPosition="after",t.name="toggle",t.theme="primary",t.change=new i.n,t}return Object(l.__extends)(t,e),Object.defineProperty(t.prototype,"isChecked",{get:function(){return this._isChecked},set:function(e){this._isChecked=e,this.value=this._isChecked},enumerable:!0,configurable:!0}),t}((n("kWGw"),n("N0SF")).a),o=function(){return function(){}}()},egPT:function(e,t,n){"use strict";var l=n("CcnG"),i=(n("EzXM"),n("Ip0R"),n("gIcY")),a=n("M2Lx"),o=(n("ZYjt"),n("Wf4p")),r=n("Fzqc"),s=n("dWZg"),g=n("kWGw"),u=n("wFw1"),d=n("lLAP"),c=l.tb({encapsulation:2,styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px,0,0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px,0,0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}.mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-right:8px;margin-left:0}.mat-slide-toggle-label-before .mat-slide-toggle-bar,[dir=rtl] .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0,0,0);transition:all 80ms linear;transition-property:transform;cursor:-webkit-grab;cursor:grab}.mat-slide-toggle-thumb-container.mat-dragging,.mat-slide-toggle-thumb-container:active{cursor:-webkit-grabbing;cursor:grabbing;transition-duration:0s}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media (hover:none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}@media (-ms-high-contrast:active){.mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}}@media (-ms-high-contrast:black-on-white){.mat-slide-toggle-bar{border:1px solid #000}}"],data:{}});function h(e){return l.Pb(2,[l.Lb(402653184,1,{_thumbEl:0}),l.Lb(402653184,2,{_thumbBarEl:0}),l.Lb(402653184,3,{_inputElement:0}),(e()(),l.vb(3,0,[["label",1]],null,13,"label",[["class","mat-slide-toggle-label"]],[[1,"for",0]],null,null,null,null)),(e()(),l.vb(4,0,[[2,0],["toggleBar",1]],null,7,"div",[["class","mat-slide-toggle-bar"]],[[2,"mat-slide-toggle-bar-no-side-margin",null]],null,null,null,null)),(e()(),l.vb(5,0,[[3,0],["input",1]],null,0,"input",[["class","mat-slide-toggle-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"tabIndex",0],[8,"checked",0],[8,"disabled",0],[1,"name",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"change"],[null,"click"]],function(e,t,n){var l=!0,i=e.component;return"change"===t&&(l=!1!==i._onChangeEvent(n)&&l),"click"===t&&(l=!1!==i._onInputClick(n)&&l),l},null,null)),(e()(),l.vb(6,0,[[1,0],["thumbContainer",1]],null,5,"div",[["class","mat-slide-toggle-thumb-container"]],null,[[null,"slidestart"],[null,"slide"],[null,"slideend"]],function(e,t,n){var l=!0,i=e.component;return"slidestart"===t&&(l=!1!==i._onDragStart()&&l),"slide"===t&&(l=!1!==i._onDrag(n)&&l),"slideend"===t&&(l=!1!==i._onDragEnd()&&l),l},null,null)),(e()(),l.vb(7,0,null,null,0,"div",[["class","mat-slide-toggle-thumb"]],null,null,null,null,null)),(e()(),l.vb(8,0,null,null,3,"div",[["class","mat-slide-toggle-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),l.ub(9,212992,null,0,o.m,[l.k,l.C,s.a,[2,o.j],[2,u.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),l.Ib(10,{enterDuration:0}),(e()(),l.vb(11,0,null,null,0,"div",[["class","mat-ripple-element mat-slide-toggle-persistent-ripple"]],null,null,null,null,null)),(e()(),l.vb(12,0,[["labelContent",1]],null,4,"span",[["class","mat-slide-toggle-content"]],null,[[null,"cdkObserveContent"]],function(e,t,n){var l=!0;return"cdkObserveContent"===t&&(l=!1!==e.component._onLabelTextChange()&&l),l},null,null)),l.ub(13,1196032,null,0,a.a,[a.b,l.k,l.C],null,{event:"cdkObserveContent"}),(e()(),l.vb(14,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(e()(),l.Nb(-1,null,["\xa0"])),l.Eb(null,0)],function(e,t){var n=t.component,i=e(t,10,0,150);e(t,9,0,!0,20,i,n.disableRipple||n.disabled,l.Fb(t,3))},function(e,t){var n=t.component;e(t,3,0,n.inputId),e(t,4,0,!l.Fb(t,12).textContent||!l.Fb(t,12).textContent.trim()),e(t,5,0,n.inputId,n.required,n.tabIndex,n.checked,n.disabled,n.name,n.ariaLabel,n.ariaLabelledby),e(t,8,0,l.Fb(t,9).unbounded)})}n.d(t,"a",function(){return b}),n.d(t,"b",function(){return m});var b=l.tb({encapsulation:2,styles:[".ts-toggle{display:inline-block}.ts-toggle :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-toggle h1,.ts-toggle h2,.ts-toggle h3,.ts-toggle h4,.ts-toggle h5,.ts-toggle p{margin:unset}"],data:{}});function m(e){return l.Pb(2,[(e()(),l.vb(0,0,null,null,8,"mat-slide-toggle",[["class","c-toggle qa-toggle mat-slide-toggle"]],[[1,"required",0],[8,"id",0],[1,"tabindex",0],[2,"mat-checked",null],[2,"mat-disabled",null],[2,"mat-slide-toggle-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"focus"]],function(e,t,n){var i=!0,a=e.component;return"focus"===t&&(i=!1!==l.Fb(e,3)._inputElement.nativeElement.focus()&&i),"ngModelChange"===t&&(i=!1!==(a.value=n)&&i),"change"===t&&(i=!1!==a.change.emit(n)&&i),i},h,c)),l.ub(1,16384,null,0,i.B,[],{required:[0,"required"]},null),l.Kb(1024,null,i.q,function(e){return[e]},[i.B]),l.ub(3,1228800,null,0,g.b,[l.k,s.a,d.h,l.h,[8,null],l.C,g.a,[2,u.a],[2,r.b]],{disabled:[0,"disabled"],color:[1,"color"],name:[2,"name"],labelPosition:[3,"labelPosition"],ariaLabel:[4,"ariaLabel"],required:[5,"required"]},{change:"change"}),l.Kb(1024,null,i.r,function(e){return[e]},[g.b]),l.ub(5,671744,null,0,i.w,[[8,null],[6,i.q],[8,null],[6,i.r]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),l.Kb(2048,null,i.s,null,[i.w]),l.ub(7,16384,null,0,i.t,[[4,i.s]],null,null),l.Eb(0,0)],function(e,t){var n=t.component;e(t,1,0,n.isRequired),e(t,3,0,n.isDisabled,n.theme,n.name,n.labelPosition,n.ariaLabel,n.isRequired),e(t,5,0,n.name,n.isDisabled,n.value)},function(e,t){e(t,0,1,[l.Fb(t,1).required?"":null,l.Fb(t,3).id,-1,l.Fb(t,3).checked,l.Fb(t,3).disabled,"before"==l.Fb(t,3).labelPosition,"NoopAnimations"===l.Fb(t,3)._animationMode,l.Fb(t,7).ngClassUntouched,l.Fb(t,7).ngClassTouched,l.Fb(t,7).ngClassPristine,l.Fb(t,7).ngClassDirty,l.Fb(t,7).ngClassValid,l.Fb(t,7).ngClassInvalid,l.Fb(t,7).ngClassPending])})}},kWGw:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return r});var l=n("CcnG"),i=n("mrSG"),a=n("n6gG"),o=(n("gIcY"),n("Wf4p")),r=new l.r("mat-slide-toggle-default-options",{providedIn:"root",factory:function(){return{disableToggleValue:!1,disableDragValue:!1}}}),s=0,g=function(){return function(e,t){this.source=e,this.checked=t}}(),u=function(){return function(e){this._elementRef=e}}(),d=function(e){function t(t,n,i,a,o,r,g,u,d){var c=e.call(this,t)||this;return c._focusMonitor=i,c._changeDetectorRef=a,c._ngZone=r,c.defaults=g,c._animationMode=u,c._dir=d,c.onChange=function(e){},c.onTouched=function(){},c._uniqueId="mat-slide-toggle-"+ ++s,c._required=!1,c._checked=!1,c._dragging=!1,c.name=null,c.id=c._uniqueId,c.labelPosition="after",c.ariaLabel=null,c.ariaLabelledby=null,c.change=new l.n,c.toggleChange=new l.n,c.dragChange=new l.n,c.tabIndex=parseInt(o)||0,c}return Object(i.__extends)(t,e),Object.defineProperty(t.prototype,"required",{get:function(){return this._required},set:function(e){this._required=Object(a.b)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"checked",{get:function(){return this._checked},set:function(e){this._checked=Object(a.b)(e),this._changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputId",{get:function(){return(this.id||this._uniqueId)+"-input"},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){var e=this;this._focusMonitor.monitor(this._elementRef,!0).subscribe(function(t){t||Promise.resolve().then(function(){return e.onTouched()})})},t.prototype.ngOnDestroy=function(){this._focusMonitor.stopMonitoring(this._elementRef)},t.prototype._onChangeEvent=function(e){e.stopPropagation(),this._dragging||this.toggleChange.emit(),this._dragging||this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())},t.prototype._onInputClick=function(e){e.stopPropagation()},t.prototype.writeValue=function(e){this.checked=!!e},t.prototype.registerOnChange=function(e){this.onChange=e},t.prototype.registerOnTouched=function(e){this.onTouched=e},t.prototype.setDisabledState=function(e){this.disabled=e,this._changeDetectorRef.markForCheck()},t.prototype.focus=function(){this._focusMonitor.focusVia(this._inputElement,"keyboard")},t.prototype.toggle=function(){this.checked=!this.checked,this.onChange(this.checked)},t.prototype._emitChangeEvent=function(){this.onChange(this.checked),this.change.emit(new g(this,this.checked))},t.prototype._getDragPercentage=function(e){var t=e/this._thumbBarWidth*100;return this._previousChecked&&(t+=100),Math.max(0,Math.min(t,100))},t.prototype._onDragStart=function(){if(!this.disabled&&!this._dragging){var e=this._thumbEl.nativeElement;this._thumbBarWidth=this._thumbBarEl.nativeElement.clientWidth-e.clientWidth,e.classList.add("mat-dragging"),this._previousChecked=this.checked,this._dragging=!0}},t.prototype._onDrag=function(e){if(this._dragging){var t=this._dir&&"rtl"===this._dir.value?-1:1;this._dragPercentage=this._getDragPercentage(e.deltaX*t),this._thumbEl.nativeElement.style.transform="translate3d("+this._dragPercentage/100*this._thumbBarWidth*t+"px, 0, 0)"}},t.prototype._onDragEnd=function(){var e=this;if(this._dragging){var t=this._dragPercentage>50;t!==this.checked&&(this.dragChange.emit(),this.defaults.disableDragValue||(this.checked=t,this._emitChangeEvent())),this._ngZone.runOutsideAngular(function(){return setTimeout(function(){e._dragging&&(e._dragging=!1,e._thumbEl.nativeElement.classList.remove("mat-dragging"),e._thumbEl.nativeElement.style.transform="")})})}},t.prototype._onLabelTextChange=function(){this._changeDetectorRef.detectChanges()},t}(Object(o.x)(Object(o.t)(Object(o.u)(Object(o.v)(u)),"accent"))),c=function(){return function(){}}()}}]);