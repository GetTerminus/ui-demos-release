(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{M2Lx:function(n,e,t){"use strict";t.d(e,"c",function(){return s}),t.d(e,"b",function(){return c}),t.d(e,"a",function(){return b}),t.d(e,"d",function(){return a});var l=t("n6gG"),u=t("CcnG"),r=t("6blF"),i=t("K9Ia"),o=t("Gi3i"),s=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n.ngInjectableDef=Object(u.Z)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),c=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach(function(e,t){return n._cleanupObserver(t)})},n.prototype.observe=function(n){var e=this,t=Object(l.d)(n);return new r.a(function(n){var l=e._observeElement(t).subscribe(n);return function(){l.unsubscribe(),e._unobserveElement(t)}})},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var e=new i.a,t=this._mutationObserverFactory.create(function(n){return e.next(n)});t&&t.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:t,stream:e,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var e=this._observedElements.get(n),t=e.observer,l=e.stream;t&&t.disconnect(),l.complete(),this._observedElements.delete(n)}},n.ngInjectableDef=Object(u.Z)({factory:function(){return new n(Object(u.db)(s))},token:n,providedIn:"root"}),n}(),b=function(){function n(n,e,t){this._contentObserver=n,this._elementRef=e,this._ngZone=t,this.event=new u.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(l.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(l.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){n._currentSubscription=(n.debounce?e.pipe(Object(o.a)(n.debounce)):e).subscribe(n.event)})},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),a=function(){return function(){}}()},"O/ay":function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),u=function(){return function(){}}(),r=t("pMnS"),i=t("ehiB"),o=t("1xtn"),s=t("l5YW"),c=t("gIcY"),b=t("egPT"),a=t("EzXM"),g=function(){function n(n){this.formBuilder=n,this.isChecked=!1,this.isDisabled=!1,this.name="myToggle",this.required=!0,this.myForm=this.formBuilder.group({myToggle:[null,[]]})}return n.prototype.isChanged=function(n){console.log("in changed: ",n)},n.prototype.log=function(n){console.log("DEMO: From value: ",n)},n}(),d=l.ub({encapsulation:2,styles:[],data:{}});function f(n){return l.Qb(0,[(n()(),l.wb(0,0,null,null,21,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),l.vb(1,49152,null,0,o.a,[],null,null),l.vb(2,16384,null,0,s.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.wb(3,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.vb(4,16384,null,0,s.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ob(-1,null,["Form"])),(n()(),l.wb(6,0,null,0,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,t){var u=!0;return"submit"===e&&(u=!1!==l.Gb(n,8).onSubmit(t)&&u),"reset"===e&&(u=!1!==l.Gb(n,8).onReset()&&u),u},null,null)),l.vb(7,16384,null,0,c.G,[],null,null),l.vb(8,540672,null,0,c.m,[[8,null],[8,null]],{form:[0,"form"]},null),l.Lb(2048,null,c.d,null,[c.m]),l.vb(10,16384,null,0,c.u,[[4,c.d]],null,null),(n()(),l.wb(11,0,null,null,7,"ts-toggle",[["class","ts-toggle"],["tsVerticalSpacing",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"]],function(n,e,t){var l=!0;return"change"===e&&(l=!1!==n.component.isChanged(t)&&l),l},b.b,b.a)),l.vb(12,49152,null,0,a.a,[],{formControl:[0,"formControl"],isDisabled:[1,"isDisabled"],isRequired:[2,"isRequired"],name:[3,"name"]},{change:"change"}),l.Lb(1024,null,c.r,function(n){return[n]},[a.a]),l.vb(14,540672,null,0,c.j,[[8,null],[8,null],[6,c.r],[2,c.I]],{form:[0,"form"]},null),l.Lb(2048,null,c.s,null,[c.j]),l.vb(16,16384,null,0,c.t,[[4,c.s]],null,null),l.vb(17,16384,null,0,s.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ob(-1,0,["Toggle Me!"])),(n()(),l.wb(19,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.wb(20,0,null,null,1,"button",[],null,[[null,"click"]],function(n,e,t){var l=!0,u=n.component;return"click"===e&&(l=!1!==u.log(u.myForm.value)&&l),l},null,null)),(n()(),l.Ob(-1,null,["Log form value"])),(n()(),l.wb(22,0,null,null,9,"ts-card",[["class","ts-card"]],null,null,null,i.b,i.a)),l.vb(23,49152,null,0,o.a,[],null,null),(n()(),l.wb(24,0,null,0,2,"h3",[["tsVerticalSpacing",""]],null,null,null,null,null)),l.vb(25,16384,null,0,s.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),l.Ob(-1,null,["Seed via @Input"])),(n()(),l.wb(27,0,null,0,4,"ts-toggle",[["class","ts-toggle"],["name","two"],["tsVerticalSpacing",""]],null,[[null,"change"]],function(n,e,t){var l=!0;return"change"===e&&(l=!1!==n.component.isChanged(t)&&l),l},b.b,b.a)),l.Lb(5120,null,c.r,function(n){return[n]},[a.a]),l.vb(29,16384,null,0,s.c,[l.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),l.vb(30,49152,null,0,a.a,[],{isChecked:[0,"isChecked"],isDisabled:[1,"isDisabled"],name:[2,"name"]},{change:"change"}),(n()(),l.Ob(-1,0,["Toggle Me!"]))],function(n,e){var t=e.component;n(e,2,0,""),n(e,4,0,""),n(e,8,0,t.myForm),n(e,12,0,t.myForm.get("myToggle"),t.isDisabled,t.required,t.name),n(e,14,0,t.myForm.get("myToggle")),n(e,17,0,""),n(e,25,0,""),n(e,29,0,""),n(e,30,0,!0,!0,"two")},function(n,e){n(e,6,0,l.Gb(e,10).ngClassUntouched,l.Gb(e,10).ngClassTouched,l.Gb(e,10).ngClassPristine,l.Gb(e,10).ngClassDirty,l.Gb(e,10).ngClassValid,l.Gb(e,10).ngClassInvalid,l.Gb(e,10).ngClassPending),n(e,11,0,l.Gb(e,16).ngClassUntouched,l.Gb(e,16).ngClassTouched,l.Gb(e,16).ngClassPristine,l.Gb(e,16).ngClassDirty,l.Gb(e,16).ngClassValid,l.Gb(e,16).ngClassInvalid,l.Gb(e,16).ngClassPending)})}function p(n){return l.Qb(0,[(n()(),l.wb(0,0,null,null,1,"demo-toggle",[],null,null,null,f,d)),l.vb(1,49152,null,0,g,[c.h],null,null)],null,null)}var h=l.sb("demo-toggle",g,p,{},{},[]),v=t("Ip0R"),m=t("M2Lx"),E=t("ZYjt"),_=t("Wf4p"),y=t("ZYCi"),O=function(){return function(){}}(),S=t("Fzqc"),w=t("dWZg"),C=t("SMsm"),G=t("SG5n"),M=t("kWGw");t.d(e,"ToggleModuleNgFactory",function(){return j});var j=l.tb(u,[],function(n){return l.Db([l.Eb(512,l.j,l.ib,[[8,[r.a,h]],[3,l.j],l.A]),l.Eb(4608,v.o,v.n,[l.w,[2,v.B]]),l.Eb(4608,c.h,c.h,[]),l.Eb(4608,c.H,c.H,[]),l.Eb(4608,m.c,m.c,[]),l.Eb(4608,E.f,_.e,[[2,_.i],[2,_.n]]),l.Eb(1073742336,v.c,v.c,[]),l.Eb(1073742336,c.E,c.E,[]),l.Eb(1073742336,c.A,c.A,[]),l.Eb(1073742336,y.o,y.o,[[2,y.u],[2,y.l]]),l.Eb(1073742336,O,O,[]),l.Eb(1073742336,S.a,S.a,[]),l.Eb(1073742336,_.n,_.n,[[2,_.f],[2,E.g]]),l.Eb(1073742336,w.b,w.b,[]),l.Eb(1073742336,_.x,_.x,[]),l.Eb(1073742336,C.c,C.c,[]),l.Eb(1073742336,G.b,G.b,[]),l.Eb(1073742336,o.b,o.b,[]),l.Eb(1073742336,s.b,s.b,[]),l.Eb(1073742336,c.o,c.o,[]),l.Eb(1073742336,m.d,m.d,[]),l.Eb(1073742336,M.d,M.d,[]),l.Eb(1073742336,a.b,a.b,[]),l.Eb(1073742336,u,u,[]),l.Eb(1024,y.j,function(){return[[{path:"",component:g}]]},[])])})},l5YW:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return u});var l=t("CcnG"),u={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},r=function(){function n(n){this.elementRef=n}return Object.defineProperty(n.prototype,"tsVerticalSpacing",{set:function(n){n||(n="default--0");var e=n.split("--")[0],t=parseInt(n.split("--")[1],10),r="none"===n,i=!(u[e]&&!(u[e].length<0));if((i||i||!u[e][t])&&!r&&Object(l.eb)())throw Error(n+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=r?"0":u[e][t]},enumerable:!0,configurable:!0}),n}(),i=function(){return function(){}}()}}]);