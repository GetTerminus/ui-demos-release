(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"7TCY":function(n,l,t){"use strict";t.d(l,"a",function(){return p}),t.d(l,"b",function(){return d});var e=t("CcnG"),o=(t("Zb6y"),t("NcP4"),t("Ip0R")),i=(t("M2Lx"),t("eDkP")),u=t("Fzqc"),c=t("v9Dh"),r=t("ZYjt"),a=(t("Wf4p"),t("dWZg")),s=t("lLAP"),b=(t("4c35"),t("qAlS")),p=e.rb({encapsulation:2,styles:[".ts-tooltip{display:inline-block}.ts-tooltip :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-tooltip h1,.ts-tooltip h2,.ts-tooltip h3,.ts-tooltip h4,.ts-tooltip h5,.ts-tooltip p{margin:unset}.c-tooltip--underline{border-bottom:.1em dotted;border-color:inherit;cursor:help}.mat-tooltip-panel .mat-tooltip{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;color:#302d35;overflow-wrap:break-word;white-space:normal}"],data:{}});function d(n){return e.Nb(2,[e.Jb(402653184,1,{matTooltip:0}),(n()(),e.tb(1,16777216,null,null,5,"span",[["class","c-tooltip qa-tooltip"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,l,t){var o=!0;return"longpress"===l&&(o=!1!==e.Db(n,5).show()&&o),"keydown"===l&&(o=!1!==e.Db(n,5)._handleKeydown(t)&&o),"touchend"===l&&(o=!1!==e.Db(n,5)._handleTouchend()&&o),o},null,null)),e.Ib(512,null,o.A,o.B,[e.t,e.u,e.k,e.F]),e.sb(3,278528,null,0,o.k,[o.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Gb(4,{"c-tooltip--underline":0}),e.sb(5,212992,[[1,4],["tooltip",4]],0,c.d,[i.c,e.k,b.a,e.R,e.A,a.a,s.c,s.h,c.b,[2,u.b],[2,c.a],[2,r.f]],{position:[0,"position"],message:[1,"message"]},null),e.Cb(null,0)],function(n,l){var t=l.component,e=n(l,4,0,t.hasUnderline);n(l,3,0,"c-tooltip qa-tooltip",e),n(l,5,0,t.tooltipPosition,t.tooltipValue)},null)}},M2Lx:function(n,l,t){"use strict";t.d(l,"c",function(){return r}),t.d(l,"b",function(){return a}),t.d(l,"a",function(){return s}),t.d(l,"d",function(){return b});var e=t("n6gG"),o=t("CcnG"),i=t("6blF"),u=t("K9Ia"),c=t("Gi3i"),r=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n.ngInjectableDef=Object(o.Pb)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),a=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach(function(l,t){return n._cleanupObserver(t)})},n.prototype.observe=function(n){var l=this,t=Object(e.d)(n);return new i.a(function(n){var e=l._observeElement(t).subscribe(n);return function(){e.unsubscribe(),l._unobserveElement(t)}})},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var l=new u.a,t=this._mutationObserverFactory.create(function(n){return l.next(n)});t&&t.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:t,stream:l,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var l=this._observedElements.get(n),t=l.observer,e=l.stream;t&&t.disconnect(),e.complete(),this._observedElements.delete(n)}},n.ngInjectableDef=Object(o.Pb)({factory:function(){return new n(Object(o.Tb)(r))},token:n,providedIn:"root"}),n}(),s=function(){function n(n,l,t){this._contentObserver=n,this._elementRef=l,this._ngZone=t,this.event=new o.n,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(e.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(e.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var l=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){n._currentSubscription=(n.debounce?l.pipe(Object(c.a)(n.debounce)):l).subscribe(n.event)})},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),b=function(){return function(){}}()},ckx0:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),i=t("pMnS"),u=t("gIcY"),c=t("Ip0R"),r=t("ehiB"),a=t("1xtn"),s=t("l5YW"),b=(t("mrSG"),t("N0SF")),p=function(){function n(n,l){this.documentService=n,this.windowService=l,this.document=this.documentService.document,this.hasSelected=!1,this.icon="content_copy",this.rippleColor="#1a237e",this.window=this.windowService.nativeWindow,this.disableInitialSelection=!1,this.enableQuickCopy=!0,this._format="standard",this.theme="primary"}return Object.defineProperty(n.prototype,"format",{get:function(){return this._format},set:function(n){if(this._format=n||"standard","icon"===this.format&&!this.enableQuickCopy&&(this.enableQuickCopy=!0,Object(e.Z)()))throw new b.b("'enableQuickCopy' must be set to 'true' when using the icon only display mode")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"textContent",{get:function(){return this.content&&this.content.nativeElement&&this.content.nativeElement.innerText?this.content.nativeElement.innerText:""},enumerable:!0,configurable:!0}),n.prototype.selectText=function(n,l,t){if(t||l)return!1;var e=this.window.getSelection(),o=this.document.createRange();return o.selectNodeContents(n),e.removeAllRanges(),e.addRange(o),this.hasSelected=!0,!0},n.prototype.resetSelection=function(){this.hasSelected=!1},n.prototype.copyToClipboard=function(n){var l=this.document.createElement("textarea");l.className="targetElement",l.style.position="absolute",l.style.left="101%",l.style.top="0",l.style.width="1px",l.style.height="1px",l.textContent=n,this.document.body.appendChild(l),l.focus(),l.setSelectionRange(0,l.value.length);try{this.document.execCommand("copy"),l.remove()}catch(t){this.window.prompt("Copy to clipboard: Ctrl+C, Enter",n)}},n}(),d=function(){return function(){}}(),h=t("NcP4"),f=t("OzfB"),m=t("M2Lx"),g=t("eDkP"),y=t("Fzqc"),v=t("v9Dh"),_=t("ZYjt"),x=t("Wf4p"),k=t("21Lb"),w=t("hUWP"),C=t("3pJQ"),D=t("V9q+"),B=t("dWZg"),S=t("SMsm"),F=t("SG5n"),M=t("lLAP"),j=t("4c35"),I=t("qAlS"),O=t("Zb6y"),E=t("7TCY"),T=t("wFw1"),P=t("Nfn5"),L=t("Wf1G"),V=e.rb({encapsulation:2,styles:[".ts-copy{display:block;max-width:100%}.ts-copy :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-copy h1,.ts-copy h2,.ts-copy h3,.ts-copy h4,.ts-copy h5,.ts-copy p{margin:unset}.ts-copy .c-copy{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;color:#757575;position:relative}.ts-copy .c-copy:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-copy--primary .mat-ripple-element{background-color:rgba(0,52,87,.4)!important}.ts-copy--accent .c-copy .c-copy__icon{background-color:#2f854d}.ts-copy--accent .mat-ripple-element{background-color:rgba(34,95,55,.4)!important}.ts-copy--warn .c-copy .c-copy__icon{background-color:#c8604d}.ts-copy--warn .mat-ripple-element{background-color:rgba(173,72,53,.4)!important}.ts-copy--standard{background-color:#f2f0f7;border:1px solid #cecdd1;border-radius:3px;-webkit-transition:border-color .2s ease-in-out 50ms;transition:border-color .2s ease-in-out 50ms}.ts-copy--standard:focus{border:1px solid #999;outline:0;-webkit-transition-delay:0;transition-delay:0}.ts-copy--minimal .c-copy__content{line-height:24px;padding:.25em .3em .25em .4em}.ts-copy--minimal .c-copy .c-copy__tooltip{bottom:3px;top:3px}.ts-copy--icon{display:inline-block}.ts-copy--icon .c-copy__content{width:35px}.ts-copy--icon .c-copy .c-copy__tooltip{opacity:1;pointer-events:auto}.ts-copy:focus .c-copy__tooltip,.ts-copy:hover .c-copy__tooltip{opacity:1;pointer-events:auto;-webkit-transition-delay:70ms;transition-delay:70ms}.c-copy .c-copy__content{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;line-height:32px;min-width:35px;overflow:hidden;white-space:nowrap}.c-copy .c-copy__content::-webkit-scrollbar{-webkit-appearance:none}.c-copy .c-copy__content::-webkit-scrollbar:vertical{width:0}.c-copy .c-copy__content::-webkit-scrollbar:horizontal{height:0}.c-copy .c-copy__content::-webkit-scrollbar-thumb{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-track{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-corner{background-color:transparent}.c-copy .c-copy__content .ts-tooltip{display:block;max-width:100%}.c-copy .c-copy__content .c-tooltip{display:block;overflow:hidden;padding:.2em 0 .2em .4em;text-overflow:ellipsis}.c-copy .c-copy__tooltip{bottom:-1px;opacity:0;pointer-events:none;position:absolute;right:-1px;top:-1px;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.c-copy .c-copy__tooltip .ts-tooltip{height:100%}.c-copy .c-copy__tooltip .ts-icon{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}.c-copy .c-copy__icon{cursor:pointer;background-color:#00538a;border-radius:3px;bottom:0;color:#fafafa;height:100%;padding:.25em .3em .25em .4em;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in}.c-copy .mat-icon{vertical-align:bottom}.ts-copy--standard .c-copy .c-copy__icon{border-radius:0 3px 3px 0}"],data:{}});function N(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,7,"ts-tooltip",[["class","ts-tooltip"],["tooltipValue","Copy to clipboard"]],null,null,null,E.b,E.a)),e.sb(1,49152,[[2,4]],0,O.a,[],{tooltipValue:[0,"tooltipValue"]},null),(n()(),e.tb(2,0,null,0,5,"div",[["class","c-copy__icon qa-copy-icon mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.copyToClipboard(o.textContent)&&e),e},null,null)),e.sb(3,212992,null,0,x.m,[e.k,e.A,B.a,[2,x.j],[2,T.a]],{color:[0,"color"]},null),(n()(),e.tb(4,0,null,null,3,"ts-icon",[["class","ts-icon"],["fxFlex",""],["matSuffix",""]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,P.b,P.a)),e.sb(5,671744,null,0,k.b,[e.k,f.i,f.e,k.j,f.f],{fxFlex:[0,"fxFlex"]},null),e.sb(6,49152,null,0,F.a,[S.d,_.b],null,null),(n()(),e.Lb(7,0,[" "," "]))],function(n,l){var t=l.component;n(l,1,0,"Copy to clipboard"),n(l,3,0,t.rippleColor),n(l,5,0,"")},function(n,l){var t=l.component;n(l,2,0,e.Db(l,3).unbounded),n(l,4,0,e.Db(l,6).inline,"primary"===e.Db(l,6).theme,"accent"===e.Db(l,6).theme,"warn"===e.Db(l,6).theme,e.Db(l,6).background),n(l,7,0,t.icon)})}function z(n){return e.Nb(2,[e.Jb(402653184,1,{content:0}),e.Jb(671088640,2,{tooltipCollection:1}),(n()(),e.tb(2,0,null,null,9,"div",[["class","c-copy qa-copy"],["fxLayout","row"],["tabindex","0"]],null,[[null,"click"],[null,"blur"]],function(n,l,t){var o=!0,i=n.component;return"click"===l&&(o=!1!==i.selectText(e.Db(n,4),i.hasSelected,i.disableInitialSelection)&&o),"blur"===l&&(o=!1!==i.resetSelection()&&o),o},null,null)),e.sb(3,671744,null,0,k.d,[e.k,f.i,[2,k.m],f.f],{fxLayout:[0,"fxLayout"]},null),(n()(),e.tb(4,0,[[1,0],["content",1]],null,4,"div",[["class","c-copy__content qa-copy-content"],["fxFlex","auto"]],null,null,null,null,null)),e.sb(5,671744,null,0,k.b,[e.k,f.i,f.e,k.j,f.f],{fxFlex:[0,"fxFlex"]},null),(n()(),e.tb(6,0,null,null,2,"ts-tooltip",[["class","ts-tooltip"]],null,null,null,E.b,E.a)),e.sb(7,49152,[[2,4]],0,O.a,[],{tooltipValue:[0,"tooltipValue"]},null),e.Cb(0,0),(n()(),e.tb(9,0,null,null,2,"div",[["class","c-copy__tooltip"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,N)),e.sb(11,16384,null,0,c.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,"row"),n(l,5,0,"auto"),n(l,7,0,t.textContent),n(l,11,0,t.enableQuickCopy)},null)}var A=function(){return function(){this.fakeUrl="https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom",this.canCopy=!0,this.format="standard",this.theme="primary",this.themes=["primary","accent","warn"]}}(),R=e.rb({encapsulation:2,styles:[],data:{}});function G(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,4,"option",[],null,null,null,null,null)),e.sb(1,147456,null,0,u.x,[e.k,e.F,[2,u.D]],{value:[0,"value"]},null),e.sb(2,147456,null,0,u.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Lb(3,null,["",""])),e.Hb(4,1)],function(n,l){n(l,1,0,e.vb(1,"",l.context.$implicit,"")),n(l,2,0,e.vb(1,"",l.context.$implicit,""))},function(n,l){var t=e.Mb(l,3,0,n(l,4,0,e.Db(l.parent,0),l.context.$implicit));n(l,3,0,t)})}function q(n){return e.Nb(0,[e.Fb(0,c.w,[]),(n()(),e.tb(1,0,null,null,46,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,r.b,r.a)),e.sb(2,49152,null,0,a.a,[],null,null),e.sb(3,16384,null,0,s.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.tb(4,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),e.sb(5,16384,null,0,a.c,[[3,a.a]],null,null),e.sb(6,16384,null,0,s.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Lb(-1,null,[" Demo Controls "])),(n()(),e.tb(8,0,null,0,7,"label",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Enable quick copy: "])),(n()(),e.tb(10,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,i=n.component;return"change"===l&&(o=!1!==e.Db(n,11).onChange(t.target.checked)&&o),"blur"===l&&(o=!1!==e.Db(n,11).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(i.canCopy=t)&&o),o},null,null)),e.sb(11,16384,null,0,u.b,[e.F,e.k],null,null),e.Ib(1024,null,u.r,function(n){return[n]},[u.b]),e.sb(13,671744,null,0,u.w,[[8,null],[8,null],[8,null],[6,u.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,u.s,null,[u.w]),e.sb(15,16384,null,0,u.t,[[4,u.s]],null,null),(n()(),e.tb(16,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.tb(17,0,null,0,19,"label",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Format: "])),(n()(),e.tb(19,0,null,null,17,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,i=n.component;return"change"===l&&(o=!1!==e.Db(n,20).onChange(t.target.value)&&o),"blur"===l&&(o=!1!==e.Db(n,20).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(i.format=t)&&o),o},null,null)),e.sb(20,16384,null,0,u.D,[e.F,e.k],null,null),e.Ib(1024,null,u.r,function(n){return[n]},[u.D]),e.sb(22,671744,null,0,u.w,[[8,null],[8,null],[8,null],[6,u.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,u.s,null,[u.w]),e.sb(24,16384,null,0,u.t,[[4,u.s]],null,null),(n()(),e.tb(25,0,null,null,3,"option",[["selected","selected"],["value","standard"]],null,null,null,null,null)),e.sb(26,147456,null,0,u.x,[e.k,e.F,[2,u.D]],{value:[0,"value"]},null),e.sb(27,147456,null,0,u.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Lb(-1,null,["Standard"])),(n()(),e.tb(29,0,null,null,3,"option",[["value","minimal"]],null,null,null,null,null)),e.sb(30,147456,null,0,u.x,[e.k,e.F,[2,u.D]],{value:[0,"value"]},null),e.sb(31,147456,null,0,u.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Lb(-1,null,["Minimal"])),(n()(),e.tb(33,0,null,null,3,"option",[["value","icon"]],null,null,null,null,null)),e.sb(34,147456,null,0,u.x,[e.k,e.F,[2,u.D]],{value:[0,"value"]},null),e.sb(35,147456,null,0,u.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Lb(-1,null,["Icon"])),(n()(),e.tb(37,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.tb(38,0,null,0,9,"label",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" Theme: "])),(n()(),e.tb(40,0,null,null,7,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,i=n.component;return"change"===l&&(o=!1!==e.Db(n,41).onChange(t.target.value)&&o),"blur"===l&&(o=!1!==e.Db(n,41).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(i.theme=t)&&o),o},null,null)),e.sb(41,16384,null,0,u.D,[e.F,e.k],null,null),e.Ib(1024,null,u.r,function(n){return[n]},[u.D]),e.sb(43,671744,null,0,u.w,[[8,null],[8,null],[8,null],[6,u.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,u.s,null,[u.w]),e.sb(45,16384,null,0,u.t,[[4,u.s]],null,null),(n()(),e.ib(16777216,null,null,1,null,G)),e.sb(47,278528,null,0,c.l,[e.R,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.tb(48,0,null,null,4,"ts-card",[["class","ts-card"],["style","max-width: 22rem;"]],null,null,null,r.b,r.a)),e.sb(49,49152,null,0,a.a,[],null,null),(n()(),e.tb(50,0,null,0,2,"ts-copy",[["class","ts-copy"]],[[2,"ts-copy--standard",null],[2,"ts-copy--minimal",null],[2,"ts-copy--icon",null],[2,"ts-copy--primary",null],[2,"ts-copy--accent",null],[2,"ts-copy--warn",null]],null,null,z,V)),e.sb(51,49152,null,0,p,[L.a,L.b],{enableQuickCopy:[0,"enableQuickCopy"],format:[1,"format"],theme:[2,"theme"]},null),(n()(),e.Lb(52,0,["",""]))],function(n,l){var t=l.component;n(l,3,0,""),n(l,6,0,""),n(l,13,0,t.canCopy),n(l,22,0,t.format),n(l,26,0,"standard"),n(l,27,0,"standard"),n(l,30,0,"minimal"),n(l,31,0,"minimal"),n(l,34,0,"icon"),n(l,35,0,"icon"),n(l,43,0,t.theme),n(l,47,0,t.themes),n(l,51,0,t.canCopy,t.format,t.theme)},function(n,l){var t=l.component;n(l,4,0,e.Db(l,5).tsCardTitle),n(l,10,0,e.Db(l,15).ngClassUntouched,e.Db(l,15).ngClassTouched,e.Db(l,15).ngClassPristine,e.Db(l,15).ngClassDirty,e.Db(l,15).ngClassValid,e.Db(l,15).ngClassInvalid,e.Db(l,15).ngClassPending),n(l,19,0,e.Db(l,24).ngClassUntouched,e.Db(l,24).ngClassTouched,e.Db(l,24).ngClassPristine,e.Db(l,24).ngClassDirty,e.Db(l,24).ngClassValid,e.Db(l,24).ngClassInvalid,e.Db(l,24).ngClassPending),n(l,40,0,e.Db(l,45).ngClassUntouched,e.Db(l,45).ngClassTouched,e.Db(l,45).ngClassPristine,e.Db(l,45).ngClassDirty,e.Db(l,45).ngClassValid,e.Db(l,45).ngClassInvalid,e.Db(l,45).ngClassPending),n(l,50,0,"standard"===e.Db(l,51).format,"minimal"===e.Db(l,51).format,"icon"===e.Db(l,51).format,"primary"===e.Db(l,51).theme,"accent"===e.Db(l,51).theme,"warn"===e.Db(l,51).theme),n(l,52,0,t.fakeUrl)})}function Z(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"demo-copy",[],null,null,null,q,R)),e.sb(1,49152,null,0,A,[],null,null)],null,null)}var W=e.pb("demo-copy",A,Z,{},{},[]),Q=t("ZYCi"),Y=function(){return function(){}}();t.d(l,"CopyModuleNgFactory",function(){return U});var U=e.qb(o,[],function(n){return e.Ab([e.Bb(512,e.j,e.db,[[8,[i.a,W,h.a]],[3,e.j],e.y]),e.Bb(4608,c.o,c.n,[e.v,[2,c.F]]),e.Bb(4608,u.G,u.G,[]),e.Bb(5120,e.b,function(n,l){return[f.j(n,l)]},[c.d,e.C]),e.Bb(4608,m.c,m.c,[]),e.Bb(4608,g.c,g.c,[g.i,g.e,e.j,g.h,g.f,e.r,e.A,c.d,y.b,[2,c.i]]),e.Bb(5120,g.j,g.k,[g.c]),e.Bb(5120,v.b,v.c,[g.c]),e.Bb(4608,_.e,x.e,[[2,x.i],[2,x.k]]),e.Bb(1073742336,c.c,c.c,[]),e.Bb(1073742336,Q.p,Q.p,[[2,Q.u],[2,Q.l]]),e.Bb(1073742336,Y,Y,[]),e.Bb(1073742336,u.F,u.F,[]),e.Bb(1073742336,u.o,u.o,[]),e.Bb(1073742336,y.a,y.a,[]),e.Bb(1073742336,x.k,x.k,[[2,x.f],[2,_.f]]),e.Bb(1073742336,B.b,B.b,[]),e.Bb(1073742336,x.n,x.n,[]),e.Bb(1073742336,S.c,S.c,[]),e.Bb(1073742336,F.b,F.b,[]),e.Bb(1073742336,a.b,a.b,[]),e.Bb(1073742336,f.c,f.c,[]),e.Bb(1073742336,k.i,k.i,[]),e.Bb(1073742336,w.b,w.b,[]),e.Bb(1073742336,C.a,C.a,[]),e.Bb(1073742336,D.a,D.a,[[2,f.g],e.C]),e.Bb(1073742336,m.d,m.d,[]),e.Bb(1073742336,M.a,M.a,[]),e.Bb(1073742336,j.h,j.h,[]),e.Bb(1073742336,I.b,I.b,[]),e.Bb(1073742336,g.g,g.g,[]),e.Bb(1073742336,v.e,v.e,[]),e.Bb(1073742336,O.b,O.b,[]),e.Bb(1073742336,d,d,[]),e.Bb(1073742336,s.b,s.b,[]),e.Bb(1073742336,o,o,[]),e.Bb(1024,Q.j,function(){return[[{path:"",component:A}]]},[])])})},l5YW:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return u}),t.d(l,"c",function(){return i}),t("mrSG");var e=t("CcnG"),o={none:["0"],small:[Math.floor(12)+"px",Math.floor(8)+"px",Math.floor(4)+"px"],default:["16px"],large:[Math.floor(24)+"px",Math.floor(32)+"px",Math.floor(40)+"px",Math.floor(48)+"px",Math.floor(56)+"px",Math.floor(72)+"px",Math.floor(96)+"px"]},i=function(){function n(n){this.elementRef=n}return Object.defineProperty(n.prototype,"tsVerticalSpacing",{set:function(n){n||(n="default--0");var l=n.split("--")[0],t=parseInt(n.split("--")[1],10),i="none"===n,u=!(o[l]&&!(o[l].length<0));if((u||u||!o[l][t])&&!i&&Object(e.Z)())throw Error(n+" is not a valid spacing definition for TsVerticalSpacingDirective. See all valid TsVerticalSpacingTypes: http://bnj.bz/3e1E2l0k0C11");this.elementRef.nativeElement.style.marginBottom=i?"0":o[l][t]},enumerable:!0,configurable:!0}),n}(),u=function(){return function(){}}()}}]);