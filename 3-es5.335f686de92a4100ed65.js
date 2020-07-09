function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{NvNW:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i("mm3g"),i("uG+h");var n=i("+6xv");Object(n.n)("transformPanel",[Object(n.k)("void",Object(n.l)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),Object(n.k)("showing",Object(n.l)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),Object(n.k)("showing-multiple",Object(n.l)({opacity:1,minWidth:"calc(100% + 24px)",transform:"scaleY(1)"})),Object(n.m)("void => *",Object(n.e)("120ms cubic-bezier(0, 0, 0.2, 1)")),Object(n.m)("* => void",Object(n.e)("100ms 25ms linear",Object(n.l)({opacity:0})))]);var s=function e(){_classCallCheck(this,e)}},h1zE:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return o})),i("Hq54");var n=i("kZht");i("pTnX"),i("5XID"),i("ZTXN"),i("g6G6"),i("J+dc"),i("kuMc"),i("jIqt"),i("jL3B"),i("sBeF");var s=new n.r("mat-chips-default-options"),o=function e(){_classCallCheck(this,e)}},mm3g:function(e,t,i){"use strict";i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return C}));var n=i("jL3B"),s=i("sBeF"),o=i("kZht"),a=i("ZTXN"),r=i("i9xl"),l=i("g6G6"),c=i("C05f"),h=i("jIqt"),u=i("J+dc"),p=i("kuMc"),f=i("b1t3"),d=i("gxbW"),g=i("XqbP"),v=i("EKI7"),y=i("7X1V"),m=i("ymlv");i("uG+h");var b=function(e,t){return e===t},O=function e(t,i){_classCallCheck(this,e),this.source=t,this.value=i},k=0,C={clickAction:"noop"},w=function(){function e(t,i,n,s,h,u){var p=this;_classCallCheck(this,e),this.viewportRuler=t,this.changeDetectorRef=i,this.ngZone=n,this.documentService=s,this.elementRef=h,this.ngControl=u,this.componentName="TsSelectComponent",this.flexGap=m.a.small[0],this.labelChanges=new a.a,this.offsetY=0,this.optionIds="",this.optionSelectionChanges=Object(r.a)((function(){return Object(l.a).apply(void 0,_toConsumableArray(p.options.map((function(e){return e.selectionChange}))))})),this.panelDoneAnimatingStream=new a.a,this.panelOpen=!1,this.positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}],this.scrollTop=0,this.searchQuery="",this.selfReference=this,this.stateChanges=new a.a,this.transformOrigin="top",this.triggerFontSize=0,this.uid="ts-select-"+k++,this.querySubject=new c.a(""),this.viewportMarginSpacing=100,this.allowMultiple=!1,this._compareWith=b,this._delimiter=",",this.hideRequiredMarker=!1,this._id=this.uid,this.isDisabled=!1,this.isFilterable=!1,this._isRequired=!1,this.noValidationOrHint=!1,this.showProgress=!1,this.showRefineSearchMessage=!1,this.showRefresh=!1,this._tabIndex=0,this.theme="primary",this.validateOnChange=!1,this.closed=new o.o,this.duplicateSelection=new o.o,this.opened=new o.o,this.optionDeselected=new o.o,this.optionSelected=new o.o,this.optionsRefreshRequested=new o.o,this.queryChange=new o.o,this.selectionChange=new o.o,this.valueChange=new o.o,this.onChange=function(){},this.onTouched=function(){},this.document=this.documentService.document,this.ngControl&&(this.ngControl.valueAccessor=this)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.selectionModel=new s.b(this.allowMultiple),this.ngControl&&this.ngControl.form&&this.ngControl.valueChanges&&this.ngControl.valueChanges.pipe(Object(v.j)(this)).subscribe((function(t){t&&e.setSelectionByValue(t)}))}},{key:"ngAfterContentInit",value:function(){var e=this;this.initKeyManager(),this.selectionModel.changed.pipe(Object(v.j)(this)).subscribe((function(t){t.added.forEach((function(t){t.select(),e.optionSelected.emit(new O(e,t.value))})),t.removed.forEach((function(t){t.deselect(),e.optionDeselected.emit(new O(e,t.value))}))})),this.options.changes.pipe(Object(h.a)(null),Object(v.j)(this)).subscribe((function(){e.resetOptions(),e.initializeSelection()}))}},{key:"ngOnChanges",value:function(e){Object(v.f)(e,"label")&&!e.label.firstChange&&(this.changeDetectorRef.detectChanges(),this.labelChanges.next())}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete()}},{key:"toggle",value:function(){this.isDisabled||(this.panelOpen?this.close():this.open())}},{key:"open",value:function(){var e=this;!this.isDisabled&&this.options&&this.options.length&&!this.panelOpen&&(this.triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this.triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement)["font-size"],10),this.panelOpen=!0,this.keyManager.withHorizontalOrientation(null),this.highlightCorrectOption(),this.changeDetectorRef.markForCheck(),this.ngZone.onStable.asObservable().pipe(Object(u.a)(1)).subscribe((function(){e.triggerFontSize&&e.overlayDir.overlayRef&&e.overlayDir.overlayRef.overlayElement&&(e.overlayDir.overlayRef.overlayElement.style.fontSize=e.triggerFontSize+"px"),e.options.first.elementRef.nativeElement.getBoundingClientRect(),e.calculateOverlayPosition()})),this.opened.emit())}},{key:"close",value:function(){this.panelOpen&&(this.panelOpen=!1,this.keyManager.withHorizontalOrientation("ltr"),this.changeDetectorRef.markForCheck(),this.onTouched(),this.updateValueAndValidity(),this.closed.emit())}},{key:"onAttached",value:function(){var e=this;this.overlayDir.positionChange.pipe(Object(u.a)(1)).subscribe((function(){e.changeDetectorRef.detectChanges(),e.setPanelScrollTop(e.scrollTop)}))}},{key:"handleKeydown",value:function(e){this.isDisabled||(this.panelOpen?this.handleOpenKeydown(e):this.handleClosedKeydown(e))}},{key:"handleClosedKeydown",value:function(e){var t=e.code,i=[d.a.DOWN_ARROW.code,d.a.UP_ARROW.code,d.a.LEFT_ARROW.code,d.a.RIGHT_ARROW.code].indexOf(t)>=0;t===d.a.ENTER.code||t===d.a.SPACE.code||(this.allowMultiple||e.altKey)&&i?(e.preventDefault(),this.open()):this.allowMultiple||this.keyManager.onKeydown(e)}},{key:"handleOpenKeydown",value:function(e){var t=e.code,i=t===d.a.DOWN_ARROW.code||t===d.a.UP_ARROW.code,n=this.keyManager,s=this.isFilterable&&"input"===e.target.tagName.toLowerCase();if(t===d.a.HOME.code||t===d.a.END.code)e.preventDefault(),t===d.a.HOME.code?n.setFirstItemActive():n.setLastItemActive();else if(i&&e.altKey)e.preventDefault(),this.close();else if((t===d.a.ENTER.code||t===d.a.SPACE.code&&!s)&&n.activeItem)e.preventDefault(),n.activeItem.selectViaInteraction();else if(this.allowMultiple&&t===d.a.A.code&&e.ctrlKey){e.preventDefault();var o=this.options.some((function(e){return!e.isDisabled&&!e.selected}));this.options.forEach((function(e){e.isDisabled||(o?e.select():e.deselect())}))}else{var a=this.allowMultiple&&i&&e.shiftKey;i&&e.shiftKey?t===d.a.DOWN_ARROW.code?n.setNextItemActive():n.setPreviousItemActive():n.onKeydown(e),a&&n.activeItem&&n.activeItem.selectViaInteraction()}}},{key:"resetOptions",value:function(){var e=this;this.optionSelectionChanges.pipe(Object(p.a)(this.options.changes),Object(v.j)(this)).subscribe((function(t){e.onSelect(t.source,t.isUserInput),t.isUserInput&&!e.allowMultiple&&e.panelOpen&&(e.close(),e.focus())})),Object(l.a).apply(void 0,_toConsumableArray(this.options.map((function(e){return e.stateChanges})))).pipe(Object(v.j)(this)).subscribe((function(){e.changeDetectorRef.markForCheck(),e.stateChanges.next()})),this.setOptionIds()}},{key:"onSelect",value:function(e,t){var i=this.selectionModel.isSelected(e);null!=e.value||this.allowMultiple?(e.selected?this.selectionModel.select(e):this.selectionModel.deselect(e),t&&this.keyManager.setActiveItem(e),this.allowMultiple&&(this.sortValues(),t&&this.focus())):(e.deselect(),this.selectionModel.clear(),this.propagateChanges(e.value)),i!==this.selectionModel.isSelected(e)&&this.propagateChanges(),this.stateChanges.next()}},{key:"setOptionIds",value:function(){this.optionIds=this.options.map((function(e){return e.id})).join(" ")}},{key:"initKeyManager",value:function(){var e=this;this.keyManager=new n.b(this.options).withTypeAhead().withVerticalOrientation().withHorizontalOrientation("ltr"),this.keyManager.tabOut.pipe(Object(v.j)(this)).subscribe((function(){e.focus(),e.close()})),this.keyManager.change.pipe(Object(v.j)(this)).subscribe((function(){e.panelOpen&&e.panel?e.scrollActiveOptionIntoView():e.panelOpen||e.allowMultiple||!e.keyManager.activeItem||e.keyManager.activeItem.selectViaInteraction()}))}},{key:"focus",value:function(){this.elementRef.nativeElement.focus()}},{key:"sortValues",value:function(){var e=this;if(this.allowMultiple){var t=this.options.toArray();this.selectionModel.sort((function(i,n){return e.sortComparator?e.sortComparator(i,n,t):t.indexOf(i)-t.indexOf(n)})),this.stateChanges.next()}}},{key:"propagateChanges",value:function(e){var t;t=this.allowMultiple?this.selected.map((function(e){return e.value})):this.selected?this.selected.value:e,this.value=t,this.valueChange.emit(t),this.onChange(t),this.selectionChange.emit(new O(this,t)),this.changeDetectorRef.markForCheck()}},{key:"updateValueAndValidity",value:function(){this.ngControl&&this.ngControl.control&&this.ngControl.control.updateValueAndValidity()}},{key:"writeValue",value:function(e){}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this.isDisabled=e,this.changeDetectorRef.markForCheck(),this.stateChanges.next()}},{key:"initializeSelection",value:function(){var e=this;Promise.resolve().then((function(){e.setSelectionByValue(e.ngControl?e.ngControl.value:e.value)}))}},{key:"setSelectionByValue",value:function(e){var t=this;if(this.allowMultiple&&e)e=Object(f.a)(e),this.selectionModel.clear(),e.forEach((function(e){return t.selectOptionByValue(e)})),this.sortValues();else{this.selectionModel.clear();var i=this.selectOptionByValue(e);i&&this.keyManager.setActiveItem(i)}this.changeDetectorRef.markForCheck()}},{key:"selectOptionByValue",value:function(e){var t=this,i=this.options.find((function(i){try{return null!=i.value&&t.compareWith(i.value,e)}catch(n){return Object(o.Y)()&&console.warn(n),!1}}));return i&&this.selectionModel.select(i),i}},{key:"scrollActiveOptionIntoView",value:function(){var e=this.keyManager.activeItemIndex||0,t=Object(y.c)(e,this.options,this.optionGroups),i=Object(y.d)(e+t,this.itemHeight,this.getPanelScrollTop(),256);this.setPanelScrollTop(i)}},{key:"calculateOverlayPosition",value:function(){var e=this.itemHeight,t=this.itemCount,i=Math.min(t*e,256),n=t*e-i,s=this.empty?0:this.getOptionIndex(this.selectionModel.selected[0]);s+=Object(y.c)(s,this.options,this.optionGroups);var o=i/2;this.scrollTop=this.calculateOverlayScroll(s,o,n),this.offsetY=this.calculateOverlayOffsetY(s,o,n),this.checkOverlayWithinViewport(n)}},{key:"calculateOverlayScroll",value:function(e,t,i){var n=this.itemHeight;return Math.min(Math.max(0,n*e-t+n/2),i)}},{key:"calculateOverlayOffsetY",value:function(e,t,i){var n,s=this.itemHeight,o=(s-(this.triggerRect?this.triggerRect.height:0))/2,a=Math.floor(256/s);return n=0===this.scrollTop?e*s:this.scrollTop===i?(e-(this.itemCount-a))*s+(s-(this.itemCount*s-256)%s):t-s/2,Math.round(-1*n-o)}},{key:"checkOverlayWithinViewport",value:function(e){var t=this.itemHeight,i=this.viewportRuler.getViewportSize(),n=this.triggerRect?this.triggerRect.top-8:0,s=i.height-(this.triggerRect?this.triggerRect.bottom:0)-8,o=Math.abs(this.offsetY),a=Math.min(this.itemCount*t,256)-o-(this.triggerRect?this.triggerRect.height:0);a>s?this.adjustPanelUp(a,s):o>n?this.adjustPanelDown(o,n,e):this.transformOrigin=this.getOriginBasedOnOption()}},{key:"adjustPanelUp",value:function(e,t){var i=Math.round(e-t);this.scrollTop-=i,this.offsetY=this.offsetY-i<0?0:this.offsetY-i,this.transformOrigin=this.getOriginBasedOnOption(),this.scrollTop<=0&&(this.scrollTop=0,this.offsetY=0,this.transformOrigin="50% bottom 0px")}},{key:"adjustPanelDown",value:function(e,t,i){var n=Math.round(e-t);if(this.scrollTop+=n,this.offsetY=this.offsetY+n<0?0:this.offsetY+n,this.transformOrigin=this.getOriginBasedOnOption(),this.scrollTop>=i)return this.scrollTop=i,this.offsetY=0,void(this.transformOrigin="50% top 0px")}},{key:"getOriginBasedOnOption",value:function(){var e=this.itemHeight,t=(e-(this.triggerRect?this.triggerRect.height:0))/2;return"50% ".concat(Math.abs(this.offsetY)-t+e/2,"px 0px")}},{key:"getOptionIndex",value:function(e){return this.options.reduce((function(t,i,n){var s=e===i?n:void 0;return Object(g.j)(t)?s:t}),void 0)}},{key:"highlightCorrectOption",value:function(){this.keyManager&&(this.empty?this.keyManager.setFirstItemActive():this.keyManager.setActiveItem(this.selectionModel.selected[0]))}},{key:"toggleAllOptions",value:function(){Object(y.f)(this.options)}},{key:"onContainerClick",value:function(){this.focus(),this.isDisabled||this.open()}},{key:"getPanelScrollTop",value:function(){return this.panel?this.panel.nativeElement.scrollTop:0}},{key:"setPanelScrollTop",value:function(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}},{key:"allOptionsSelected",get:function(){return Object(y.b)(this.options)}},{key:"empty",get:function(){return this.selectionModel&&this.selectionModel.isEmpty()}},{key:"focused",get:function(){return this.document.activeElement===(this.inputElement&&this.inputElement.nativeElement)||this.panelOpen}},{key:"itemCount",get:function(){return this.options.length+this.optionGroups.length}},{key:"itemHeight",get:function(){var e=this.options.toArray(),t=e[1]||e[0];return t&&t.elementRef.nativeElement.offsetHeight}},{key:"someOptionsSelected",get:function(){return Object(y.e)(this.options)}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty||this.searchQuery.length>0}},{key:"selectTriggerValue",get:function(){return this.allowMultiple?this.selectionModel.selected.map((function(e){return e.viewValue})).join(this.delimiter+" "):this.selectionModel.selected[0].viewValue}},{key:"selected",get:function(){return this.allowMultiple?this.selectionModel.selected:this.selectionModel.selected[0]}},{key:"compareWith",set:function(e){"function"!=typeof e&&Object(o.Y)()&&(console.warn('TsSelectComponent: "compareWith" must be a function. Falling back to the default.'),this._compareWith=b),this._compareWith=e,this.selectionModel&&this.initializeSelection()},get:function(){return this._compareWith}},{key:"delimiter",set:function(e){this._delimiter=Object(g.i)(e)?e:","},get:function(){return this._delimiter}},{key:"hint",set:function(e){this._hint=e},get:function(){return this._hint}},{key:"id",set:function(e){this._id=e||this.uid},get:function(){return this._id}},{key:"isRequired",set:function(e){this._isRequired=e},get:function(){var e=this.ngControl&&this.ngControl.control,t=!!e&&Object(v.e)(e);return this._isRequired||t}},{key:"label",set:function(e){this._label=e},get:function(){return this._label}},{key:"placeholder",set:function(e){this._placeholder=e,this.stateChanges.next()},get:function(){return this._placeholder}},{key:"tabIndex",set:function(e){this._tabIndex=Object(f.d)(e)},get:function(){return this._tabIndex}},{key:"value",set:function(e){e!==this._value&&(this._value=e)},get:function(){return this._value}}]),e}()},"uG+h":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=0,s=function(){function e(){_classCallCheck(this,e),this.uid="ts-select-trigger-"+n++,this._id=this.uid}return _createClass(e,[{key:"id",set:function(e){this._id=e||this.uid},get:function(){return this._id}}]),e}()}}]);