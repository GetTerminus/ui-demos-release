(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1xtn":function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return u}),t.d(l,"c",function(){return i}),t("mrSG");var e=t("CcnG"),o=t("VYBx"),c=t("N0SF"),r=0,a=function(){function n(){this.uid="ts-card-"+r++,this._border="none",this.centeredContent=!1,this.isDisabled=!1,this.flat=!1,this._id=this.uid,this.supportsInteraction=!1,this._theme="primary"}return Object.defineProperty(n.prototype,"aspectRatio",{set:function(n){var l=parseInt(n.split(":")[0],10),t=parseInt(n.split(":")[1],10);this.aspectRatioPadding=(t/l*100).toFixed(2)+"%"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"border",{get:function(){return this._border},set:function(n){this._border=n||"none"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"id",{get:function(){return this._id},set:function(n){this._id=n||this.uid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"theme",{get:function(){return this._theme},set:function(n){this._theme=n||"primary"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"borderClass",{get:function(){return this.border&&"none"!==this.border?"c-card--border-"+this.border:""},enumerable:!0,configurable:!0}),n}(),i=function(){function n(n){if(this.theme="primary",this.tsCardTitle="c-card__title",!(n instanceof a)&&Object(e.Z)())throw new c.b("The 'tsCardTitle' directive must be inside a <ts-card> component.")}return Object.defineProperty(n.prototype,"tsTitleAccentBorder",{set:function(n){Object(o.b)(n)&&(this.tsCardTitle=this.tsCardTitle+" c-card__title-accent-border")},enumerable:!0,configurable:!0}),n}(),u=function(){return function(){}}()},"7TCY":function(n,l,t){"use strict";t.d(l,"a",function(){return d}),t.d(l,"b",function(){return p});var e=t("CcnG"),o=(t("Zb6y"),t("NcP4"),t("Ip0R")),c=(t("M2Lx"),t("eDkP")),r=t("Fzqc"),a=t("v9Dh"),i=t("ZYjt"),u=(t("Wf4p"),t("dWZg")),s=t("lLAP"),b=(t("4c35"),t("qAlS")),d=e.tb({encapsulation:2,styles:[".ts-tooltip{display:inline-block}.ts-tooltip :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-tooltip h1,.ts-tooltip h2,.ts-tooltip h3,.ts-tooltip h4,.ts-tooltip h5,.ts-tooltip p{margin:unset}.c-tooltip--underline{border-bottom:.1em dotted;border-color:inherit;cursor:help}.mat-tooltip-panel .mat-tooltip{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;color:#302d35;overflow-wrap:break-word;white-space:normal}"],data:{}});function p(n){return e.Rb(2,[e.Nb(402653184,1,{matTooltip:0}),(n()(),e.vb(1,16777216,null,null,5,"span",[["class","c-tooltip qa-tooltip"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,l,t){var o=!0;return"longpress"===l&&(o=!1!==e.Hb(n,5).show()&&o),"keydown"===l&&(o=!1!==e.Hb(n,5)._handleKeydown(t)&&o),"touchend"===l&&(o=!1!==e.Hb(n,5)._handleTouchend()&&o),o},null,null)),e.Mb(512,null,o.A,o.B,[e.t,e.u,e.k,e.F]),e.ub(3,278528,null,0,o.k,[o.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(4,{"c-tooltip--underline":0}),e.ub(5,212992,[[1,4],["tooltip",4]],0,a.d,[c.c,e.k,b.b,e.R,e.A,u.a,s.c,s.h,a.b,[2,r.b],[2,a.a],[2,i.f]],{position:[0,"position"],message:[1,"message"]},null),e.Gb(null,0)],function(n,l){var t=l.component,e=n(l,4,0,t.hasUnderline);n(l,3,0,"c-tooltip qa-tooltip",e),n(l,5,0,t.tooltipPosition,t.tooltipValue)},null)}},ckx0:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),c=t("pMnS"),r=t("gIcY"),a=t("Ip0R"),i=t("ehiB"),u=t("1xtn"),s=t("l5YW"),b=(t("mrSG"),t("N0SF")),d=function(){function n(n,l){this.documentService=n,this.windowService=l,this.document=this.documentService.document,this.hasSelected=!1,this.icon="content_copy",this.rippleColor="#1a237e",this.window=this.windowService.nativeWindow,this.disableInitialSelection=!1,this.enableQuickCopy=!0,this._format="standard",this.theme="primary"}return Object.defineProperty(n.prototype,"format",{get:function(){return this._format},set:function(n){if(this._format=n||"standard","icon"===this.format&&!this.enableQuickCopy&&(this.enableQuickCopy=!0,Object(e.Z)()))throw new b.b("'enableQuickCopy' must be set to 'true' when using the icon only display mode")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"textContent",{get:function(){return this.content&&this.content.nativeElement&&this.content.nativeElement.innerText?this.content.nativeElement.innerText:""},enumerable:!0,configurable:!0}),n.prototype.selectText=function(n,l,t){if(t||l)return!1;var e=this.window.getSelection(),o=this.document.createRange();return o.selectNodeContents(n),e.removeAllRanges(),e.addRange(o),this.hasSelected=!0,!0},n.prototype.resetSelection=function(){this.hasSelected=!1},n.prototype.copyToClipboard=function(n){var l=this.document.createElement("textarea");l.className="targetElement",l.style.position="absolute",l.style.left="101%",l.style.top="0",l.style.width="1px",l.style.height="1px",l.textContent=n,this.document.body.appendChild(l),l.focus(),l.setSelectionRange(0,l.value.length);try{this.document.execCommand("copy"),l.remove()}catch(t){this.window.prompt("Copy to clipboard: Ctrl+C, Enter",n)}},n}(),p=function(){return function(){}}(),g=t("NcP4"),m=t("OzfB"),f=t("M2Lx"),h=t("eDkP"),y=t("Fzqc"),x=t("v9Dh"),_=t("ZYjt"),v=t("Wf4p"),k=t("21Lb"),w=t("hUWP"),C=t("3pJQ"),F=t("V9q+"),H=t("dWZg"),P=t("SMsm"),S=t("SG5n"),T=t("lLAP"),R=t("4c35"),M=t("qAlS"),j=t("Zb6y"),I=t("7TCY"),z=t("wFw1"),N=t("Nfn5"),D=t("Wf1G"),A=e.tb({encapsulation:2,styles:[".ts-copy{display:block;max-width:100%}.ts-copy :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-copy h1,.ts-copy h2,.ts-copy h3,.ts-copy h4,.ts-copy h5,.ts-copy p{margin:unset}.ts-copy .c-copy{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;color:#757575;position:relative}.ts-copy .c-copy:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-copy--primary .mat-ripple-element{background-color:rgba(0,52,87,.4)!important}.ts-copy--accent .c-copy .c-copy__icon{background-color:#2f854d}.ts-copy--accent .mat-ripple-element{background-color:rgba(34,95,55,.4)!important}.ts-copy--warn .c-copy .c-copy__icon{background-color:#c8604d}.ts-copy--warn .mat-ripple-element{background-color:rgba(173,72,53,.4)!important}.ts-copy--standard{background-color:#f2f0f7;border:1px solid #cecdd1;border-radius:3px;transition:border-color .2s ease-in-out 50ms}.ts-copy--standard:focus{border:1px solid #999;outline:0;transition-delay:0}.ts-copy--minimal .c-copy__content{line-height:24px;padding:.25em .3em .25em .4em}.ts-copy--minimal .c-copy .c-copy__tooltip{bottom:3px;top:3px}.ts-copy--icon{display:inline-block}.ts-copy--icon .c-copy__content{width:35px}.ts-copy--icon .c-copy .c-copy__tooltip{opacity:1;pointer-events:auto}.ts-copy:focus .c-copy__tooltip,.ts-copy:hover .c-copy__tooltip{opacity:1;pointer-events:auto;transition-delay:70ms}.c-copy .c-copy__content{align-items:center;justify-content:center;line-height:32px;min-width:35px;overflow:hidden;white-space:nowrap}.c-copy .c-copy__content::-webkit-scrollbar{-webkit-appearance:none}.c-copy .c-copy__content::-webkit-scrollbar:vertical{width:0}.c-copy .c-copy__content::-webkit-scrollbar:horizontal{height:0}.c-copy .c-copy__content::-webkit-scrollbar-thumb{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-track{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-corner{background-color:transparent}.c-copy .c-copy__content .ts-tooltip{display:block;max-width:100%}.c-copy .c-copy__content .c-tooltip{display:block;overflow:hidden;padding:.2em 0 .2em .4em;text-overflow:ellipsis}.c-copy .c-copy__tooltip{bottom:-1px;opacity:0;pointer-events:none;position:absolute;right:-1px;top:-1px;transition:opacity .2s ease-out}.c-copy .c-copy__tooltip .ts-tooltip{height:100%}.c-copy .c-copy__tooltip .ts-icon{align-items:center;display:flex}.c-copy .c-copy__icon{cursor:pointer;background-color:#00538a;border-radius:3px;bottom:0;color:#fafafa;height:100%;padding:.25em .3em .25em .4em;transition:background-color .2s ease-in}.c-copy .mat-icon{vertical-align:bottom}.ts-copy--standard .c-copy .c-copy__icon{border-radius:0 3px 3px 0}"],data:{}});function V(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,7,"ts-tooltip",[["class","ts-tooltip"],["tooltipValue","Copy to clipboard"]],null,null,null,I.b,I.a)),e.ub(1,49152,[[2,4]],0,j.a,[],{tooltipValue:[0,"tooltipValue"]},null),(n()(),e.vb(2,0,null,0,5,"div",[["class","c-copy__icon qa-copy-icon mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.copyToClipboard(o.textContent)&&e),e},null,null)),e.ub(3,212992,null,0,v.m,[e.k,e.A,H.a,[2,v.j],[2,z.a]],{color:[0,"color"]},null),(n()(),e.vb(4,0,null,null,3,"ts-icon",[["class","ts-icon"],["fxFlex",""],["matSuffix",""]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,N.b,N.a)),e.ub(5,671744,null,0,k.b,[e.k,m.i,m.e,k.j,m.f],{fxFlex:[0,"fxFlex"]},null),e.ub(6,49152,null,0,S.a,[P.d,_.b],null,null),(n()(),e.Pb(7,0,[" "," "]))],function(n,l){var t=l.component;n(l,1,0,"Copy to clipboard"),n(l,3,0,t.rippleColor),n(l,5,0,"")},function(n,l){var t=l.component;n(l,2,0,e.Hb(l,3).unbounded),n(l,4,0,e.Hb(l,6).inline,"primary"===e.Hb(l,6).theme,"accent"===e.Hb(l,6).theme,"warn"===e.Hb(l,6).theme,e.Hb(l,6).background),n(l,7,0,t.icon)})}function O(n){return e.Rb(2,[e.Nb(402653184,1,{content:0}),e.Nb(671088640,2,{tooltipCollection:1}),(n()(),e.vb(2,0,null,null,9,"div",[["class","c-copy qa-copy"],["fxLayout","row"],["tabindex","0"]],null,[[null,"click"],[null,"blur"]],function(n,l,t){var o=!0,c=n.component;return"click"===l&&(o=!1!==c.selectText(e.Hb(n,4),c.hasSelected,c.disableInitialSelection)&&o),"blur"===l&&(o=!1!==c.resetSelection()&&o),o},null,null)),e.ub(3,671744,null,0,k.d,[e.k,m.i,[2,k.m],m.f],{fxLayout:[0,"fxLayout"]},null),(n()(),e.vb(4,0,[[1,0],["content",1]],null,4,"div",[["class","c-copy__content qa-copy-content"],["fxFlex","auto"]],null,null,null,null,null)),e.ub(5,671744,null,0,k.b,[e.k,m.i,m.e,k.j,m.f],{fxFlex:[0,"fxFlex"]},null),(n()(),e.vb(6,0,null,null,2,"ts-tooltip",[["class","ts-tooltip"]],null,null,null,I.b,I.a)),e.ub(7,49152,[[2,4]],0,j.a,[],{tooltipValue:[0,"tooltipValue"]},null),e.Gb(0,0),(n()(),e.vb(9,0,null,null,2,"div",[["class","c-copy__tooltip"]],null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,V)),e.ub(11,16384,null,0,a.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,"row"),n(l,5,0,"auto"),n(l,7,0,t.textContent),n(l,11,0,t.enableQuickCopy)},null)}var q=function(){return function(){this.fakeUrl="https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom",this.canCopy=!0,this.format="standard",this.theme="primary",this.themes=["primary","accent","warn"]}}(),G=e.tb({encapsulation:2,styles:[],data:{}});function Z(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,4,"option",[],null,null,null,null,null)),e.ub(1,147456,null,0,r.x,[e.k,e.F,[2,r.D]],{value:[0,"value"]},null),e.ub(2,147456,null,0,r.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Pb(3,null,["",""])),e.Lb(4,1)],function(n,l){n(l,1,0,e.zb(1,"",l.context.$implicit,"")),n(l,2,0,e.zb(1,"",l.context.$implicit,""))},function(n,l){var t=e.Qb(l,3,0,n(l,4,0,e.Hb(l.parent,0),l.context.$implicit));n(l,3,0,t)})}function W(n){return e.Rb(0,[e.Jb(0,a.w,[]),(n()(),e.vb(1,0,null,null,46,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,i.b,i.a)),e.ub(2,49152,null,0,u.a,[],null,null),e.ub(3,16384,null,0,s.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.vb(4,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),e.ub(5,16384,null,0,u.c,[[3,u.a]],null,null),e.ub(6,16384,null,0,s.c,[e.k],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(n()(),e.Pb(-1,null,[" Demo Controls "])),(n()(),e.vb(8,0,null,0,7,"label",[],null,null,null,null,null)),(n()(),e.Pb(-1,null,[" Enable quick copy: "])),(n()(),e.vb(10,0,null,null,5,"input",[["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,c=n.component;return"change"===l&&(o=!1!==e.Hb(n,11).onChange(t.target.checked)&&o),"blur"===l&&(o=!1!==e.Hb(n,11).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(c.canCopy=t)&&o),o},null,null)),e.ub(11,16384,null,0,r.b,[e.F,e.k],null,null),e.Mb(1024,null,r.r,function(n){return[n]},[r.b]),e.ub(13,671744,null,0,r.w,[[8,null],[8,null],[8,null],[6,r.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Mb(2048,null,r.s,null,[r.w]),e.ub(15,16384,null,0,r.t,[[4,r.s]],null,null),(n()(),e.vb(16,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.vb(17,0,null,0,19,"label",[],null,null,null,null,null)),(n()(),e.Pb(-1,null,[" Format: "])),(n()(),e.vb(19,0,null,null,17,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,c=n.component;return"change"===l&&(o=!1!==e.Hb(n,20).onChange(t.target.value)&&o),"blur"===l&&(o=!1!==e.Hb(n,20).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(c.format=t)&&o),o},null,null)),e.ub(20,16384,null,0,r.D,[e.F,e.k],null,null),e.Mb(1024,null,r.r,function(n){return[n]},[r.D]),e.ub(22,671744,null,0,r.w,[[8,null],[8,null],[8,null],[6,r.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Mb(2048,null,r.s,null,[r.w]),e.ub(24,16384,null,0,r.t,[[4,r.s]],null,null),(n()(),e.vb(25,0,null,null,3,"option",[["selected","selected"],["value","standard"]],null,null,null,null,null)),e.ub(26,147456,null,0,r.x,[e.k,e.F,[2,r.D]],{value:[0,"value"]},null),e.ub(27,147456,null,0,r.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Pb(-1,null,["Standard"])),(n()(),e.vb(29,0,null,null,3,"option",[["value","minimal"]],null,null,null,null,null)),e.ub(30,147456,null,0,r.x,[e.k,e.F,[2,r.D]],{value:[0,"value"]},null),e.ub(31,147456,null,0,r.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Pb(-1,null,["Minimal"])),(n()(),e.vb(33,0,null,null,3,"option",[["value","icon"]],null,null,null,null,null)),e.ub(34,147456,null,0,r.x,[e.k,e.F,[2,r.D]],{value:[0,"value"]},null),e.ub(35,147456,null,0,r.I,[e.k,e.F,[8,null]],{value:[0,"value"]},null),(n()(),e.Pb(-1,null,["Icon"])),(n()(),e.vb(37,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.vb(38,0,null,0,9,"label",[],null,null,null,null,null)),(n()(),e.Pb(-1,null,[" Theme: "])),(n()(),e.vb(40,0,null,null,7,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var o=!0,c=n.component;return"change"===l&&(o=!1!==e.Hb(n,41).onChange(t.target.value)&&o),"blur"===l&&(o=!1!==e.Hb(n,41).onTouched()&&o),"ngModelChange"===l&&(o=!1!==(c.theme=t)&&o),o},null,null)),e.ub(41,16384,null,0,r.D,[e.F,e.k],null,null),e.Mb(1024,null,r.r,function(n){return[n]},[r.D]),e.ub(43,671744,null,0,r.w,[[8,null],[8,null],[8,null],[6,r.r]],{model:[0,"model"]},{update:"ngModelChange"}),e.Mb(2048,null,r.s,null,[r.w]),e.ub(45,16384,null,0,r.t,[[4,r.s]],null,null),(n()(),e.kb(16777216,null,null,1,null,Z)),e.ub(47,278528,null,0,a.l,[e.R,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.vb(48,0,null,null,4,"ts-card",[["class","ts-card"],["style","max-width: 22rem;"]],null,null,null,i.b,i.a)),e.ub(49,49152,null,0,u.a,[],null,null),(n()(),e.vb(50,0,null,0,2,"ts-copy",[["class","ts-copy"]],[[2,"ts-copy--standard",null],[2,"ts-copy--minimal",null],[2,"ts-copy--icon",null],[2,"ts-copy--primary",null],[2,"ts-copy--accent",null],[2,"ts-copy--warn",null]],null,null,O,A)),e.ub(51,49152,null,0,d,[D.a,D.b],{enableQuickCopy:[0,"enableQuickCopy"],format:[1,"format"],theme:[2,"theme"]},null),(n()(),e.Pb(52,0,["",""]))],function(n,l){var t=l.component;n(l,3,0,""),n(l,6,0,""),n(l,13,0,t.canCopy),n(l,22,0,t.format),n(l,26,0,"standard"),n(l,27,0,"standard"),n(l,30,0,"minimal"),n(l,31,0,"minimal"),n(l,34,0,"icon"),n(l,35,0,"icon"),n(l,43,0,t.theme),n(l,47,0,t.themes),n(l,51,0,t.canCopy,t.format,t.theme)},function(n,l){var t=l.component;n(l,4,0,e.Hb(l,5).tsCardTitle),n(l,10,0,e.Hb(l,15).ngClassUntouched,e.Hb(l,15).ngClassTouched,e.Hb(l,15).ngClassPristine,e.Hb(l,15).ngClassDirty,e.Hb(l,15).ngClassValid,e.Hb(l,15).ngClassInvalid,e.Hb(l,15).ngClassPending),n(l,19,0,e.Hb(l,24).ngClassUntouched,e.Hb(l,24).ngClassTouched,e.Hb(l,24).ngClassPristine,e.Hb(l,24).ngClassDirty,e.Hb(l,24).ngClassValid,e.Hb(l,24).ngClassInvalid,e.Hb(l,24).ngClassPending),n(l,40,0,e.Hb(l,45).ngClassUntouched,e.Hb(l,45).ngClassTouched,e.Hb(l,45).ngClassPristine,e.Hb(l,45).ngClassDirty,e.Hb(l,45).ngClassValid,e.Hb(l,45).ngClassInvalid,e.Hb(l,45).ngClassPending),n(l,50,0,"standard"===e.Hb(l,51).format,"minimal"===e.Hb(l,51).format,"icon"===e.Hb(l,51).format,"primary"===e.Hb(l,51).theme,"accent"===e.Hb(l,51).theme,"warn"===e.Hb(l,51).theme),n(l,52,0,t.fakeUrl)})}function L(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"demo-copy",[],null,null,null,W,G)),e.ub(1,49152,null,0,q,[],null,null)],null,null)}var Q=e.rb("demo-copy",q,L,{},{},[]),Y=t("ZYCi"),E=function(){return function(){}}();t.d(l,"CopyModuleNgFactory",function(){return B});var B=e.sb(o,[],function(n){return e.Eb([e.Fb(512,e.j,e.db,[[8,[c.a,Q,g.a]],[3,e.j],e.y]),e.Fb(4608,a.o,a.n,[e.v,[2,a.F]]),e.Fb(4608,r.G,r.G,[]),e.Fb(5120,e.b,function(n,l){return[m.j(n,l)]},[a.d,e.C]),e.Fb(4608,f.c,f.c,[]),e.Fb(4608,h.c,h.c,[h.i,h.e,e.j,h.h,h.f,e.r,e.A,a.d,y.b,[2,a.i]]),e.Fb(5120,h.j,h.k,[h.c]),e.Fb(5120,x.b,x.c,[h.c]),e.Fb(4608,_.e,v.e,[[2,v.i],[2,v.k]]),e.Fb(1073742336,a.c,a.c,[]),e.Fb(1073742336,Y.p,Y.p,[[2,Y.u],[2,Y.l]]),e.Fb(1073742336,E,E,[]),e.Fb(1073742336,r.F,r.F,[]),e.Fb(1073742336,r.o,r.o,[]),e.Fb(1073742336,y.a,y.a,[]),e.Fb(1073742336,v.k,v.k,[[2,v.f],[2,_.f]]),e.Fb(1073742336,H.b,H.b,[]),e.Fb(1073742336,v.n,v.n,[]),e.Fb(1073742336,P.c,P.c,[]),e.Fb(1073742336,S.b,S.b,[]),e.Fb(1073742336,u.b,u.b,[]),e.Fb(1073742336,m.c,m.c,[]),e.Fb(1073742336,k.i,k.i,[]),e.Fb(1073742336,w.b,w.b,[]),e.Fb(1073742336,C.a,C.a,[]),e.Fb(1073742336,F.a,F.a,[[2,m.g],e.C]),e.Fb(1073742336,f.d,f.d,[]),e.Fb(1073742336,T.a,T.a,[]),e.Fb(1073742336,R.g,R.g,[]),e.Fb(1073742336,M.c,M.c,[]),e.Fb(1073742336,h.g,h.g,[]),e.Fb(1073742336,x.e,x.e,[]),e.Fb(1073742336,j.b,j.b,[]),e.Fb(1073742336,p,p,[]),e.Fb(1073742336,s.b,s.b,[]),e.Fb(1073742336,o,o,[]),e.Fb(1024,Y.j,function(){return[[{path:"",component:q}]]},[])])})},ehiB:function(n,l,t){"use strict";t.d(l,"a",function(){return d}),t.d(l,"b",function(){return m});var e=t("CcnG"),o=(t("1xtn"),t("Ip0R")),c=(t("Fzqc"),t("Wf4p")),r=t("ZYjt"),a=t("dWZg"),i=t("SMsm"),u=t("SG5n"),s=t("Nfn5"),b=t("wFw1"),d=e.tb({encapsulation:2,styles:[".ts-card{display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:#fafafa;position:relative;transition:height .2s;width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid #00538a;padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:#2f854d}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:#c8604d}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:.5}.c-card--disabled .c-menu{opacity:.3;pointer-events:none}.c-card--disabled .c-card__lock{color:#999;position:absolute;right:24px;top:calc(24px - 2px);transform:scale(.7)}.c-card--right-spacing .c-card__inner{padding-right:56px}.c-card--flat>.c-card__inner{border:1px solid #cecdd1;box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid #00538a}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid #2f854d}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid #c8604d}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid #00538a}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid #2f854d}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid #c8604d}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid #00538a}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid #2f854d}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid #c8604d}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid #00538a}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid #2f854d}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid #c8604d}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-24px;right:-24px}"],data:{}});function p(n){return e.Rb(0,[(n()(),e.vb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.ub(1,540672,null,0,o.t,[e.R],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),e.kb(0,null,null,0))],function(n,l){n(l,1,0,l.component.utilityMenuTemplate)},null)}function g(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,2,"ts-icon",[["class","c-card__lock qa-card-lock ts-icon"]],[[2,"ts-icon--inline",null],[2,"ts-icon--primary",null],[2,"ts-icon--accent",null],[2,"ts-icon--warn",null],[2,"ts-icon--background",null]],null,null,s.b,s.a)),e.ub(1,49152,null,0,u.a,[i.d,r.b],null,null),(n()(),e.Pb(-1,0,["lock_outline"]))],null,function(n,l){n(l,0,0,e.Hb(l,1).inline,"primary"===e.Hb(l,1).theme,"accent"===e.Hb(l,1).theme,"warn"===e.Hb(l,1).theme,e.Hb(l,1).background)})}function m(n){return e.Rb(2,[(n()(),e.vb(0,0,null,null,10,"div",[],[[4,"paddingTop",null],[1,"id",0]],null,null,null,null)),e.Mb(512,null,o.A,o.B,[e.t,e.u,e.k,e.F]),e.ub(2,278528,null,0,o.k,[o.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(3,{"c-card--interaction":0,"c-card--centered":1,"c-card--aspect":2,"c-card--disabled":3,"c-card--right-spacing":4,"c-card--flat":5}),(n()(),e.vb(4,0,null,null,2,"div",[["class","c-card__inner mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),e.ub(5,212992,null,0,c.m,[e.k,e.A,a.a,[2,c.j],[2,b.a]],{disabled:[0,"disabled"]},null),e.Gb(null,0),(n()(),e.kb(16777216,null,null,1,null,p)),e.ub(8,16384,null,0,o.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,null,1,null,g)),e.ub(10,16384,null,0,o.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component,o=e.zb(2,"c-card qa-card ",t.borderClass," c-card--",t.theme,""),c=n(l,3,0,t.supportsInteraction,t.centeredContent,t.aspectRatioPadding,t.isDisabled,t.utilityMenuTemplate||t.isDisabled,t.flat);n(l,2,0,o,c),n(l,5,0,!t.supportsInteraction||t.isDisabled),n(l,8,0,t.utilityMenuTemplate),n(l,10,0,t.isDisabled&&!t.utilityMenuTemplate)},function(n,l){var t=l.component;n(l,0,0,t.aspectRatioPadding,t.id),n(l,4,0,e.Hb(l,5).unbounded)})}}}]);