(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{CpMl:function(t,l,n){"use strict";n.r(l),n.d(l,"CohortDateRangeModuleNgFactory",(function(){return Pt}));var e=n("kZht");class a{}var s=n("C9Ky"),u=n("B8qd"),r=n("4mc+"),i=n("/Gcv"),o=n("3kIJ"),c=n("aRqX"),b=n("tzvs"),d=n("b1t3"),g=n("EKI7");class h{constructor(t,l,n){this.start=t,this.end=l,this.source=n}}let m=0,D=class{constructor(t){this.formBuilder=t,this.customDateCohort={display:"Custom Dates",range:{start:"",end:""}},this.formGroup=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[""],endDate:[""]}),cohort:new o.i([])}),this.uid=`ts-cohort-date-range-${m++}`,this._allowCustomDates=!0,this._id=this.uid,this.isDisabled=!1,this.cohortDateRangeChanged=new e.o}get dateRangeFormGroup(){return this.formGroup.get("dateRange")}get cohortControl(){return this.formGroup.get("cohort")}set allowCustomDates(t){this._allowCustomDates=t,this.cohorts=this.originalCohorts}get allowCustomDates(){return this._allowCustomDates}set cohorts(t){if(!t)return;this.originalCohorts=t,this._cohorts=t.slice(),this.allowCustomDates&&this._cohorts.push(this.customDateCohort);const l=t.filter(t=>t.active);l.length&&(this.cohortControl.setValue(l),this.setDateRangeValues(l[0].range))}get cohorts(){return this._cohorts}set id(t){this._id=t||this.uid}get id(){return this._id}ngOnInit(){this.updateSelectOnRangeChange()}ngOnDestroy(){}cohortDateRangeChange(t){this.cohortDateRangeChanged.emit(new h(t.start,t.end,this))}selectionChange(t){this.setDateRangeValues(t.value[0].range)}trackByFn(t){return t}formatter(t){return t.display}setDateRangeValues(t){const l={startDate:t.start,endDate:t.end};l.startDate&&l.endDate&&(this.dateRangeFormGroup.setValue(l),this.cohortDateRangeChange(t))}updateSelectOnRangeChange(){var t;null===(t=this.formGroup.get("dateRange"))||void 0===t||t.valueChanges.pipe(Object(g.j)(this)).subscribe(t=>{if(!this.cohorts||!this.cohorts.length)return;const l=Object(d.c)(t.startDate).getTime(),n=Object(d.c)(t.endDate).getTime();0===this.cohorts.filter(t=>{const e=Object(d.c)(t.range.start).getTime(),a=Object(d.c)(t.range.end).getTime();if(l===e&&n===a)return t}).length&&this.cohortControl.setValue([this.customDateCohort])})}},p=class{};var f=n("4UJ1"),C=n("20x/"),N=n("An66"),v=n("76xf"),P=n("5GZx"),R=n("vE5V"),j=n("mcff"),w=n("s2U3"),y=n("807T"),O=n("pTnX"),F=n("O1jd"),M=n("Hn30"),V=n("hOI7"),z=n("cCIM"),A=n("hA27"),S=n("Sgnd"),x=n("2ob+"),I=n("aLyt"),k=n("CBf0"),B=n("jL3B"),G=n("hCLc"),_=n("ZtZA"),T=n("VbQ3"),q=n("A1IQ"),U=n("ydE+"),E=n("0Hrt"),L=n("OEuM"),Z=n("UDV5"),H=n("ye0E"),J=n("OXHR"),Y=n("qvIn"),$=n("lAua"),K=n("f6oJ"),W=n("ikIY"),X=n("/tOu"),Q=e.yb({encapsulation:2,styles:[".ts-cohort-date-range{--cohort-selection-list-minWidth:200px;display:block}.ts-cohort-date-range .ts-selection-list.ts-cohort-date-range__select{display:inline-block;min-width:var(--cohort-selection-list-minWidth)}.ts-date-range.ts-cohort-date-range__date-range{display:inline-block;margin-right:24px}"],data:{}});function tt(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,4,"ts-option",[["class","ts-option"],["role","option"]],[[2,"ts-selected",null],[2,"ts-option--multiple",null],[2,"ts-option--active",null],[2,"ts-option--disabled",null],[2,"ts-option--template",null],[1,"tabindex",0],[1,"aria-selected",0],[1,"aria-disabled",0],[1,"title",0],[8,"id",0]],[[null,"click"],[null,"keydown"]],(function(t,l,n){var a=!0;return"click"===l&&(a=!1!==e.Pb(t,1).selectViaInteraction()&&a),"keydown"===l&&(a=!1!==e.Pb(t,1).handleKeydown(n)&&a),a}),K.d,K.b)),e.zb(1,9617408,[[2,4]],2,J.d,[e.l,e.h,e.A,[2,J.b],[2,J.a]],{option:[0,"option"],value:[1,"value"]},null),e.Vb(603979776,4,{optionTemplate:0}),e.Vb(603979776,5,{displayElementRef:0}),(t()(),e.Zb(4,0,[" "," "]))],(function(t,l){t(l,1,0,l.context.$implicit,l.context.$implicit)}),(function(t,l){t(l,0,0,e.Pb(l,1).selected,e.Pb(l,1).allowMultiple,e.Pb(l,1).active,e.Pb(l,1).isDisabled,e.Pb(l,1).optionTemplate,e.Pb(l,1).tabIndex,e.Pb(l,1).selected.toString(),!!e.Pb(l,1).isDisabled,e.Pb(l,1).title,e.Pb(l,1).id),t(l,4,0,l.context.$implicit.display)}))}function lt(t){return e.cc(2,[e.Vb(402653184,1,{selectionListComponent:0}),(t()(),e.Ab(1,0,null,null,1,"ts-date-range",[["class","ts-cohort-date-range__date-range ts-date-range"]],null,[[null,"dateRangeChange"]],(function(t,l,n){var e=!0;return"dateRangeChange"===l&&(e=!1!==t.component.cohortDateRangeChange(n)&&e),e}),c.b,c.a)),e.zb(2,245760,null,0,b.a,[e.h],{dateFormGroup:[0,"dateFormGroup"],dateLocale:[1,"dateLocale"],endMaxDate:[2,"endMaxDate"],endMinDate:[3,"endMinDate"],isDisabled:[4,"isDisabled"],startMaxDate:[5,"startMaxDate"],startMinDate:[6,"startMinDate"]},{dateRangeChange:"dateRangeChange"}),(t()(),e.Ab(3,0,null,null,10,"ts-selection-list",[["class","ts-cohort-date-range__select ts-selection-list"],["label","Select a date range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"ts-selection-list--required",null],[2,"ts-selection-list--disabled",null],[2,"ts-selection-list--single",null],[2,"ts-selection-list--multiple",null],[1,"aria-owns",0],[1,"aria-required",0],[1,"aria-multiselectable",0]],[[null,"selectionChange"]],(function(t,l,n){var e=!0;return"selectionChange"===l&&(e=!1!==t.component.selectionChange(n)&&e),e}),W.b,W.a)),e.Ub(6144,null,J.b,null,[A.c]),e.Ub(6144,null,q.b,null,[A.c]),e.zb(6,540672,null,0,o.j,[[8,null],[8,null],[8,null],[2,o.G]],{form:[0,"form"]},null),e.Ub(2048,null,o.r,null,[o.j]),e.zb(8,16384,null,0,o.s,[[4,o.r]],null,null),e.zb(9,4440064,[[1,4]],2,A.c,[e.h,X.a,e.l,[6,o.r]],{allowUserInput:[0,"allowUserInput"],isDisabled:[1,"isDisabled"],label:[2,"label"],displayFormatter:[3,"displayFormatter"]},{selectionChange:"selectionChange"}),e.Vb(603979776,2,{options:1}),e.Vb(603979776,3,{optionGroups:1}),(t()(),e.jb(16777216,null,0,1,null,tt)),e.zb(13,278528,null,0,N.l,[e.R,e.N,e.t],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],(function(t,l){var n=l.component;t(l,2,0,n.dateRangeFormGroup,n.dateLocale,n.endMaxDate,n.endMinDate,!n.allowCustomDates||n.isDisabled,n.startMaxDate,n.startMinDate),t(l,6,0,n.cohortControl),t(l,9,0,!1,n.isDisabled,"Select a date range",n.formatter),t(l,13,0,n.cohorts,n.trackByFn)}),(function(t,l){t(l,3,1,[e.Pb(l,8).ngClassUntouched,e.Pb(l,8).ngClassTouched,e.Pb(l,8).ngClassPristine,e.Pb(l,8).ngClassDirty,e.Pb(l,8).ngClassValid,e.Pb(l,8).ngClassInvalid,e.Pb(l,8).ngClassPending,e.Pb(l,9).isRequired,e.Pb(l,9).isDisabled,!e.Pb(l,9).allowMultiple,e.Pb(l,9).allowMultiple,e.Pb(l,9).panelOpen?e.Pb(l,9).optionIds:null,e.Pb(l,9).isRequired.toString(),e.Pb(l,9).allowMultiple])}))}var nt=n("JuBR"),et=n("mrqE");function at(t){Object(et.a)(1,arguments);var l=Object(nt.a)(t);return l.setHours(0,0,0,0),l}var st=n("N1LS");function ut(t,l){Object(et.a)(2,arguments);var n=Object(nt.a)(t),e=Object(st.a)(l);return n.setDate(n.getDate()+e),n}function rt(t,l){Object(et.a)(2,arguments);var n=Object(st.a)(l);return ut(t,-n)}function it(t){Object(et.a)(1,arguments);var l=Object(nt.a)(t);return l.setHours(23,59,59,999),l}function ot(t){Object(et.a)(1,arguments);var l=Object(nt.a)(t),n=l.getFullYear(),e=l.getMonth(),a=new Date(0);return a.setFullYear(n,e+1,0),a.setHours(0,0,0,0),a.getDate()}function ct(t,l){Object(et.a)(2,arguments);var n=Object(nt.a)(t),e=Object(st.a)(l),a=n.getMonth()+e,s=new Date(0);s.setFullYear(n.getFullYear(),a,1),s.setHours(0,0,0,0);var u=ot(s);return n.setMonth(a,Math.min(u,n.getDate())),n}function bt(t,l){Object(et.a)(2,arguments);var n=Object(st.a)(l);return ct(t,-n)}function dt(t){Object(et.a)(1,arguments);var l=Object(nt.a)(t);return l.setDate(1),l.setHours(0,0,0,0),l}const gt=new Date;class ht{constructor(t){this.formBuilder=t,this.myForm=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[null,[o.D.required]],endDate:[null,[o.D.required]]})}),this.constraintForm=this.formBuilder.group({startDateRange:this.formBuilder.group({startDate:[at(rt(new Date,120)),[o.D.required]],endDate:[at(rt(new Date,1)),[o.D.required]]}),endDateRange:this.formBuilder.group({startDate:[at(rt(new Date,119)),[o.D.required]],endDate:[it(new Date),[o.D.required]]})}),this.cohorts=[{display:"Last 90 days",range:{start:at(rt(new Date,90)),end:gt}},{display:"Last full month",range:{start:at(bt(dt(gt),1)),end:it(rt(dt(gt),1))},active:!0}]}printRange(t){this.lastRange=t}}var mt=e.yb({encapsulation:2,styles:[],data:{}});function Dt(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,1,"pre",[],null,null,null,null,null)),(t()(),e.Zb(1,null,["    Start: ","\n    End: ","\n  "]))],null,(function(t,l){var n=l.component;t(l,1,0,n.lastRange.start,n.lastRange.end)}))}function pt(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,22,"ts-card",[["class","ts-card"],["tsVerticalSpacing",""]],null,null,null,u.b,u.a)),e.zb(1,49152,null,0,r.a,[],null,null),e.zb(2,16384,null,0,i.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),e.Ab(3,0,null,0,3,"h3",[["tsCardTitle",""],["tsVerticalSpacing",""]],[[8,"className",0]],null,null,null,null)),e.zb(4,16384,null,0,r.c,[[3,r.a]],null,null),e.zb(5,16384,null,0,i.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),e.Zb(-1,null,["Demo Controls"])),(t()(),e.Ab(7,0,null,0,15,"div",[],null,null,null,null,null)),(t()(),e.Ab(8,0,null,null,2,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),e.zb(9,16384,null,0,i.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),e.Zb(-1,null,["Start date minimum and maximum"])),(t()(),e.Ab(11,0,null,null,11,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(t,l,n){var a=!0;return"submit"===l&&(a=!1!==e.Pb(t,13).onSubmit(n)&&a),"reset"===l&&(a=!1!==e.Pb(t,13).onReset()&&a),a}),null,null)),e.zb(12,16384,null,0,o.I,[],null,null),e.zb(13,540672,null,0,o.m,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ub(2048,null,o.d,null,[o.m]),e.zb(15,16384,null,0,o.t,[[4,o.d]],null,null),(t()(),e.Ab(16,0,null,null,1,"ts-date-range",[["class","ts-date-range"]],null,null,null,c.b,c.a)),e.zb(17,245760,null,0,b.a,[e.h],{dateFormGroup:[0,"dateFormGroup"]},null),(t()(),e.Ab(18,0,null,null,2,"div",[["tsVerticalSpacing",""]],null,null,null,null,null)),e.zb(19,16384,null,0,i.c,[e.l],{tsVerticalSpacing:[0,"tsVerticalSpacing"]},null),(t()(),e.Zb(-1,null,["End date minimum and maximum"])),(t()(),e.Ab(21,0,null,null,1,"ts-date-range",[["class","ts-date-range"]],null,null,null,c.b,c.a)),e.zb(22,245760,null,0,b.a,[e.h],{dateFormGroup:[0,"dateFormGroup"]},null),(t()(),e.Ab(23,0,null,null,10,"ts-card",[["class","ts-card"]],null,null,null,u.b,u.a)),e.zb(24,49152,null,0,r.a,[],null,null),(t()(),e.Ab(25,0,null,0,6,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(t,l,n){var a=!0;return"submit"===l&&(a=!1!==e.Pb(t,27).onSubmit(n)&&a),"reset"===l&&(a=!1!==e.Pb(t,27).onReset()&&a),a}),null,null)),e.zb(26,16384,null,0,o.I,[],null,null),e.zb(27,540672,null,0,o.m,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ub(2048,null,o.d,null,[o.m]),e.zb(29,16384,null,0,o.t,[[4,o.d]],null,null),(t()(),e.Ab(30,0,null,null,1,"ts-cohort-date-range",[["class","ts-cohort-date-range"]],[[2,"ts-cohort-date-range--disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[8,"id",0]],[[null,"cohortDateRangeChanged"]],(function(t,l,n){var e=!0;return"cohortDateRangeChanged"===l&&(e=!1!==t.component.printRange(n)&&e),e}),lt,Q)),e.zb(31,245760,null,0,D,[o.h],{allowCustomDates:[0,"allowCustomDates"],cohorts:[1,"cohorts"],endMaxDate:[2,"endMaxDate"],endMinDate:[3,"endMinDate"],isDisabled:[4,"isDisabled"],startMaxDate:[5,"startMaxDate"],startMinDate:[6,"startMinDate"]},{cohortDateRangeChanged:"cohortDateRangeChanged"}),(t()(),e.jb(16777216,null,0,1,null,Dt)),e.zb(33,16384,null,0,N.m,[e.R,e.N],{ngIf:[0,"ngIf"]},null)],(function(t,l){var n=l.component;t(l,2,0,""),t(l,5,0,""),t(l,9,0,""),t(l,13,0,n.constraintForm),t(l,17,0,n.constraintForm.get("startDateRange")),t(l,19,0,""),t(l,22,0,n.constraintForm.get("endDateRange")),t(l,27,0,n.myForm);var e=null,a=null,s=null,u=null,r=null,i=null,o=null,c=null;t(l,31,0,!0,n.cohorts,null==(e=n.constraintForm.get("endDateRange"))||null==(a=e.get("endDate"))?null:a.value,null==(s=n.constraintForm.get("endDateRange"))||null==(u=s.get("startDate"))?null:u.value,!1,null==(r=n.constraintForm.get("startDateRange"))||null==(i=r.get("endDate"))?null:i.value,null==(o=n.constraintForm.get("startDateRange"))||null==(c=o.get("startDate"))?null:c.value),t(l,33,0,n.lastRange)}),(function(t,l){t(l,3,0,e.Pb(l,4).tsCardTitle),t(l,11,0,e.Pb(l,15).ngClassUntouched,e.Pb(l,15).ngClassTouched,e.Pb(l,15).ngClassPristine,e.Pb(l,15).ngClassDirty,e.Pb(l,15).ngClassValid,e.Pb(l,15).ngClassInvalid,e.Pb(l,15).ngClassPending),t(l,25,0,e.Pb(l,29).ngClassUntouched,e.Pb(l,29).ngClassTouched,e.Pb(l,29).ngClassPristine,e.Pb(l,29).ngClassDirty,e.Pb(l,29).ngClassValid,e.Pb(l,29).ngClassInvalid,e.Pb(l,29).ngClassPending),t(l,30,0,e.Pb(l,31).isDisabled,e.Pb(l,31).isDisabled,e.Pb(l,31).isDisabled,e.Pb(l,31).id)}))}function ft(t){return e.cc(0,[(t()(),e.Ab(0,0,null,null,1,"demo-cohort-date-range",[],null,null,null,pt,mt)),e.zb(1,49152,null,0,ht,[o.h],null,null)],null,null)}var Ct=e.wb("demo-cohort-date-range",ht,ft,{},{},[]),Nt=n("1VvW");class vt{}var Pt=e.xb(a,[],(function(t){return e.Mb([e.Nb(512,e.j,e.bb,[[8,[s.a,Ct,f.a,C.b,C.a]],[3,e.j],e.y]),e.Nb(4608,N.o,N.n,[e.v]),e.Nb(4608,o.F,o.F,[]),e.Nb(4608,o.h,o.h,[]),e.Nb(5120,e.b,(function(t,l){return[v.j(t,l)]}),[N.d,e.C]),e.Nb(4608,P.c,P.c,[P.i,P.e,e.j,P.h,P.f,e.s,e.A,N.d,R.b,[2,N.i]]),e.Nb(5120,P.j,P.k,[P.c]),e.Nb(5120,j.b,j.c,[P.c]),e.Nb(135680,j.d,j.d,[P.c,e.s,[2,N.i],[2,j.a],j.b,[3,j.d],P.e]),e.Nb(4608,w.c,w.c,[]),e.Nb(4608,y.i,y.i,[]),e.Nb(5120,y.a,y.b,[P.c]),e.Nb(4608,O.c,O.m,[[2,O.g],F.a]),e.Nb(4608,M.a,M.a,[]),e.Nb(4608,M.b,M.b,[]),e.Nb(4608,M.d,M.d,[]),e.Nb(4608,M.e,M.e,[]),e.Nb(4608,M.f,M.f,[]),e.Nb(4608,M.g,M.g,[]),e.Nb(4608,M.h,M.h,[]),e.Nb(4608,V.c,V.c,[M.b]),e.Nb(4608,z.b,z.b,[]),e.Nb(5120,A.a,A.b,[P.c]),e.Nb(1073742336,N.c,N.c,[]),e.Nb(1073742336,Nt.p,Nt.p,[[2,Nt.u],[2,Nt.l]]),e.Nb(1073742336,vt,vt,[]),e.Nb(1073742336,o.E,o.E,[]),e.Nb(1073742336,o.o,o.o,[]),e.Nb(1073742336,o.A,o.A,[]),e.Nb(1073742336,R.a,R.a,[]),e.Nb(1073742336,O.i,O.i,[B.j,[2,O.e],[2,N.d]]),e.Nb(1073742336,F.b,F.b,[]),e.Nb(1073742336,O.l,O.l,[]),e.Nb(1073742336,U.c,U.c,[]),e.Nb(1073742336,E.b,E.b,[]),e.Nb(1073742336,r.b,r.b,[]),e.Nb(1073742336,v.c,v.c,[]),e.Nb(1073742336,S.i,S.i,[]),e.Nb(1073742336,x.b,x.b,[]),e.Nb(1073742336,I.a,I.a,[]),e.Nb(1073742336,k.a,k.a,[v.g,e.C]),e.Nb(1073742336,G.c,G.c,[]),e.Nb(1073742336,_.f,_.f,[]),e.Nb(1073742336,T.c,T.c,[]),e.Nb(1073742336,P.g,P.g,[]),e.Nb(1073742336,j.g,j.g,[]),e.Nb(1073742336,w.d,w.d,[]),e.Nb(1073742336,B.a,B.a,[B.j]),e.Nb(1073742336,y.j,y.j,[]),e.Nb(1073742336,O.n,O.n,[]),e.Nb(1073742336,M.c,M.c,[]),e.Nb(1073742336,V.b,V.b,[]),e.Nb(1073742336,q.c,q.c,[]),e.Nb(1073742336,L.d,L.d,[]),e.Nb(1073742336,b.b,b.b,[]),e.Nb(1073742336,Z.g,Z.g,[]),e.Nb(1073742336,Z.e,Z.e,[]),e.Nb(1073742336,H.b,H.b,[]),e.Nb(1073742336,J.f,J.f,[]),e.Nb(1073742336,Y.c,Y.c,[]),e.Nb(1073742336,$.d,$.d,[]),e.Nb(1073742336,A.d,A.d,[]),e.Nb(1073742336,p,p,[]),e.Nb(1073742336,i.b,i.b,[]),e.Nb(1073742336,a,a,[]),e.Nb(1024,Nt.j,(function(){return[[{path:"",component:ht}]]}),[]),e.Nb(256,O.f,L.a,[])])}))}}]);