"use strict";(self.webpackChunkairways=self.webpackChunkairways||[]).push([[919],{6032:(A,O,i)=>{i.d(O,{Jb:()=>t,On:()=>a,aU:()=>x,bh:()=>v,f5:()=>g,fX:()=>m,i2:()=>D,iv:()=>r,mJ:()=>u,mP:()=>T,nA:()=>d,qE:()=>c,sA:()=>y,wr:()=>p,xh:()=>s});var e=i(1831);const r=o=>o.booking,m=(0,e.P1)(r,o=>o.from),p=(0,e.P1)(r,o=>o.destination),d=(0,e.P1)(r,o=>o.dateFrom),t=(0,e.P1)(r,o=>o.dateTo),T=(0,e.P1)(r,o=>o.adults),g=(0,e.P1)(r,o=>o.childs),v=(0,e.P1)(r,o=>o.infants),D=(0,e.P1)(r,o=>o.isRoundTrip),y=(0,e.P1)(r,o=>o.travelFrom),a=(0,e.P1)(r,o=>o.travelTo),u=(0,e.P1)(r,o=>o.ticketFrom),s=(0,e.P1)(r,o=>o.ticketTo),c=(0,e.P1)(r,o=>o.isLoadingFlight),x=(0,e.P1)(r,o=>o.personsData);(0,e.P1)(r,o=>o.personsContacts)},9919:(A,O,i)=>{i.d(O,{M:()=>k});var e=i(4006),r=i(8675),m=i(4004),p=i(9363),d=i(6032),t=i(4650),T=i(372),g=i(7392),v=i(1481),D=i(8252),y=i(1831),a=i(6895),u=i(4859),s=i(9549),c=i(4144),x=i(1948),M=i(3805),o=i(3238),P=i(9602),b=i(325);function Z(h,C){1&h&&(t.TgZ(0,"div",16),t._uU(1,"Return"),t.qZA())}function E(h,C){1&h&&t._uU(0,"One way")}function I(h,C){if(1&h){const n=t.EpF();t.TgZ(0,"div",17),t.NdJ("click",function(){t.CHM(n);const _=t.oxw();return t.KtG(_.isEdit=!_.isEdit)}),t._uU(1,"Edit"),t.qZA()}}function F(h,C){if(1&h&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&h){const n=C.$implicit;t.Q6J("value",n.key),t.xp6(1),t.hij(" ",n.city," ")}}function S(h,C){if(1&h&&(t.TgZ(0,"mat-option",38),t._uU(1),t.qZA()),2&h){const n=C.$implicit;t.Q6J("value",n.key),t.xp6(1),t.hij(" ",n.city," ")}}function w(h,C){if(1&h){const n=t.EpF();t.TgZ(0,"mat-form-field",39)(1,"mat-label"),t._uU(2,"Dates"),t.qZA(),t.TgZ(3,"mat-date-range-input",40)(4,"input",41),t.NdJ("ngModelChange",function(){t.CHM(n);const _=t.oxw(2);return t.KtG(_.changeStartDate())}),t.qZA(),t.TgZ(5,"input",42),t.NdJ("ngModelChange",function(){t.CHM(n);const _=t.oxw(2);return t.KtG(_.changeEndDate())}),t.qZA()(),t._UZ(6,"mat-datepicker-toggle",43),t.TgZ(7,"mat-date-range-picker",null,44)(9,"mat-datepicker-actions")(10,"button",45),t._uU(11,"Cancel"),t.qZA(),t.TgZ(12,"button",46),t._uU(13,"Apply"),t.qZA()()()()}if(2&h){const n=t.MAs(8),l=t.oxw(2);t.xp6(3),t.Q6J("rangePicker",n),t.xp6(1),t.Q6J("formControl",l.startDateControl),t.xp6(1),t.Q6J("formControl",l.endDateControl),t.xp6(1),t.Q6J("for",n)}}function U(h,C){if(1&h){const n=t.EpF();t.TgZ(0,"mat-form-field",33)(1,"mat-label"),t._uU(2,"Date"),t.qZA(),t.TgZ(3,"input",47),t.NdJ("ngModelChange",function(){t.CHM(n);const _=t.oxw(2);return t.KtG(_.changeStartDate())}),t.qZA(),t._UZ(4,"mat-datepicker-toggle",43),t.TgZ(5,"mat-datepicker",null,48)(7,"mat-datepicker-actions")(8,"button",45),t._uU(9,"Cancel"),t.qZA(),t.TgZ(10,"button",46),t._uU(11,"Apply"),t.qZA()()()()}if(2&h){const n=t.MAs(6),l=t.oxw(2);t.xp6(3),t.Q6J("matDatepicker",n)("formControl",l.startDateControl),t.xp6(1),t.Q6J("for",n)}}function L(h,C){if(1&h){const n=t.EpF();t.TgZ(0,"div",18)(1,"form",19)(2,"div",20)(3,"mat-radio-group")(4,"mat-radio-button",21),t.NdJ("change",function(_){t.CHM(n);const f=t.oxw();return t.KtG(f.changeTrip(_))}),t._uU(5,"Round Trip"),t.qZA(),t.TgZ(6,"mat-radio-button",22),t.NdJ("change",function(_){t.CHM(n);const f=t.oxw();return t.KtG(f.changeTrip(_))}),t._uU(7,"One way"),t.qZA()()(),t.TgZ(8,"div",23)(9,"mat-form-field",24)(10,"mat-label"),t._uU(11,"From"),t.qZA(),t.TgZ(12,"input",25),t.NdJ("ngModelChange",function(){t.CHM(n);const _=t.oxw();return t.KtG(_.changeFrom())}),t.qZA(),t.TgZ(13,"mat-autocomplete",26,27),t.YNc(15,F,2,2,"mat-option",28),t.ALo(16,"async"),t.qZA()()(),t.TgZ(17,"div",29)(18,"mat-form-field",24)(19,"mat-label"),t._uU(20,"Destination"),t.qZA(),t.TgZ(21,"input",30),t.NdJ("ngModelChange",function(){t.CHM(n);const _=t.oxw();return t.KtG(_.changeTo())}),t.qZA(),t.TgZ(22,"mat-autocomplete",26,31),t.YNc(24,S,2,2,"mat-option",28),t.ALo(25,"async"),t.qZA()()(),t.TgZ(26,"div",32)(27,"div",33),t.YNc(28,w,14,4,"mat-form-field",34),t.qZA(),t.YNc(29,U,12,3,"ng-template",null,35,t.W1O),t.qZA(),t.TgZ(31,"div",36)(32,"app-passenger-list",37),t.NdJ("validStatus",function(_){t.CHM(n);const f=t.oxw();return t.KtG(f.passengerValid(_))}),t.qZA()()()()}if(2&h){const n=t.MAs(14),l=t.MAs(23),_=t.MAs(30),f=t.oxw();t.xp6(4),t.Q6J("checked",f.return),t.xp6(2),t.Q6J("checked",!f.return),t.xp6(6),t.Q6J("formControl",f.fromControl)("matAutocomplete",n),t.xp6(3),t.Q6J("ngForOf",t.lcZ(16,10,f.filteredFrom)),t.xp6(6),t.Q6J("formControl",f.destControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(25,12,f.filteredDest)),t.xp6(4),t.Q6J("ngIf",f.return)("ngIfElse",_)}}let k=(()=>{class h{constructor(n,l,_,f,J){this.airportService=n,this.matIconRegistry=l,this.domSanitizer=_,this.router=f,this.store=J,this.tripTypes=["round-trip","one-way"],this.pageURL="/booking",this.isEdit=!1,this.return=!0,this.fromControl=new e.NI("",e.kI.required),this.destControl=new e.NI("",e.kI.required),this.startDateControl=new e.NI("",e.kI.required),this.endDateControl=new e.NI("",this.return?e.kI.required:null),this.airports=[],this.isValid=!0,this.passengerIsValid=!1,this.from="",this.to="",this.startDate="",this.endDate="",this.adults=0,this.childs=0,this.infant=0,this.isBookingPage=!1,this.matIconRegistry.addSvgIcon("switch",this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/switch.svg"))}ngOnInit(){this.getAirports(),this.filteredFrom=this.fromControl.valueChanges.pipe((0,r.O)(""),(0,m.U)(n=>this._filter(n||""))),this.filteredDest=this.destControl.valueChanges.pipe((0,r.O)(""),(0,m.U)(n=>this._filter(n||""))),this.from$=this.store.select(d.fX),this.to$=this.store.select(d.wr),this.from$.subscribe(n=>{this.from=n}),this.to$.subscribe(n=>{this.to=n}),this.startDate$=this.store.select(d.nA),this.endDate$=this.store.select(d.Jb),this.startDate$.subscribe(n=>{this.startDate=n}),this.endDate$.subscribe(n=>{this.endDate=n}),this.adults$=this.store.select(d.mP),this.childs$=this.store.select(d.f5),this.infant$=this.store.select(d.bh),this.adults$.subscribe(n=>{this.adults=n}),this.childs$.subscribe(n=>{this.childs=n}),this.infant$.subscribe(n=>{this.infant=n}),this.fromControl.setValue(this.from),this.destControl.setValue(this.to),this.startDateControl.setValue(this.startDate),this.endDateControl.setValue(this.endDate),this.returnWay$=this.store.select(d.i2),this.returnWay$.subscribe(n=>{this.return=n}),this.setIsBooking()}passengerValid(n){this.passengerIsValid=n}_filter(n){const l=n.toLowerCase();return this.airports.filter(_=>_.city.toLowerCase().includes(l))}getAirports(){this.airportService.all().subscribe(n=>{this.airports=n})}changeInputFields(){const l=this.fromControl.value;this.fromControl.setValue(this.destControl.value),this.destControl.setValue(l)}changeTrip(n){n.value===this.tripTypes[0]?(this.return=!0,this.store.dispatch((0,p.wW)(!0))):n.value===this.tripTypes[1]&&(this.return=!1,this.store.dispatch((0,p.wW)(!1)))}validateForm(){let n;n=this.return?this.destControl.invalid||this.fromControl.invalid||this.endDateControl.invalid||this.startDateControl.invalid:this.destControl.invalid||this.fromControl.invalid||this.startDateControl.invalid,this.isValid=!n&&this.passengerIsValid}searchItems(){this.validateForm(),this.isValid&&(this.store.dispatch((0,p.bS)(!0)),this.store.dispatch((0,p.ab)(this.fromControl.value||"AMS")),this.store.dispatch((0,p._4)(this.destControl.value||"MAD")),this.store.dispatch((0,p.WQ)(new Date(this.startDateControl.value||"2023-09-21T00:00:00.000Z").toISOString())),this.return&&this.store.dispatch((0,p.Jf)(new Date(this.endDateControl.value||"2023-10-11T00:00:00.000Z").toISOString())),this.store.dispatch((0,p.bS)(!1)),console.log(this.destControl.value,this.fromControl.value,new Date(this.startDateControl.value||"2023-09-21T00:00:00.000Z").toISOString(),new Date(this.endDateControl.value||"2023-10-11T00:00:00.000Z").toISOString()))}getDate(){return this.return?`${new Date(this.startDate).toLocaleDateString("en-US",{day:"2-digit",month:"short"})} - ${new Date(this.endDate).toLocaleDateString("en-US",{day:"2-digit",month:"short"})}`:`${new Date(this.startDate).toLocaleDateString("en-US",{day:"2-digit",month:"short"})}`}getPerson(){return this.infant+this.adults+this.childs}changeFrom(){this.store.dispatch((0,p.ab)(this.fromControl.value||"AMS"))}changeTo(){this.store.dispatch((0,p._4)(this.destControl.value||"AMS"))}changeStartDate(){this.store.dispatch((0,p.WQ)(new Date(this.startDateControl.value||"2023-10-11T00:00:00.000Z").toISOString()))}changeEndDate(){this.store.dispatch((0,p.Jf)(new Date(this.endDateControl.value||"2023-10-11T00:00:00.000Z").toISOString()))}setIsBooking(){this.router.url===this.pageURL&&(this.isBookingPage=!0)}}return h.\u0275fac=function(n){return new(n||h)(t.Y36(T.G),t.Y36(g.jv),t.Y36(v.H7),t.Y36(D.F0),t.Y36(y.yh))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-flight-search"]],decls:25,vars:12,consts:[[1,"flight-search"],[1,"flight-search__way"],[1,"flight-search__way-text"],[1,"flight-search__way-icon"],["src","./assets/return_trip_24px.svg"],[1,"flight-search__info"],["class","flight-search__info-return",4,"ngIf","ngIfElse"],["class","flight-search__info-return"],["returnFalse",""],[1,"flight-search__info-point"],[1,"flight-search__info-date"],[1,"flight-search__info-passagers","flight-search__passagers"],[1,"flight-search__passagers-text"],["matSuffix","",1,"flight-search__passagers-icon"],["class","flight-search__edit",3,"click",4,"ngIf"],["class","flight-search__bottom-panel",4,"ngIf"],[1,"flight-search__info-return"],[1,"flight-search__edit",3,"click"],[1,"flight-search__bottom-panel"],["action","",1,"form"],[1,"form__radio"],["value","round-trip","color","primary",3,"checked","change"],["value","one-way","color","primary",3,"checked","change"],[1,"form__input","form__input--from"],[1,"destination","form__width200"],["type","text","placeholder","From","aria-label","Number","matInput","",3,"formControl","matAutocomplete","ngModelChange"],["autoActiveFirstOption",""],["autoFrom","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"form__input","form__input--destination"],["type","text","placeholder","Choose your destination","aria-label","Number2","matInput","",3,"formControl","matAutocomplete","ngModelChange"],["autoDestination","matAutocomplete"],[1,"form__input","form__input--dates"],[1,"dates","form__width300"],["appearance","fill","class","form__width300",4,"ngIf","ngIfElse"],["soloDatePicker",""],[1,"inline","form__input","form__input--passengers"],[3,"validStatus"],[3,"value"],["appearance","fill",1,"form__width300"],[3,"rangePicker"],["matStartDate","","placeholder","Start date",3,"formControl","ngModelChange"],["matEndDate","","placeholder","End date",3,"formControl","ngModelChange"],["matIconSuffix","",3,"for"],["picker",""],["mat-button","","matDatepickerCancel",""],["mat-raised-button","","matDatepickerApply",""],["matInput","",3,"matDatepicker","formControl","ngModelChange"],["datepicker",""]],template:function(n,l){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.ALo(4,"async"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"img",4),t.qZA(),t.TgZ(7,"span",2),t._uU(8),t.ALo(9,"async"),t.qZA()(),t.TgZ(10,"div",5),t.YNc(11,Z,2,0,"div",6),t.YNc(12,E,1,0,"ng-template",7,8,t.W1O),t._UZ(14,"div",9),t.TgZ(15,"div",10),t._uU(16),t.qZA(),t._UZ(17,"div",9),t.TgZ(18,"div",11)(19,"span",12),t._uU(20),t.qZA(),t.TgZ(21,"mat-icon",13),t._uU(22,"person"),t.qZA()()(),t.YNc(23,I,2,0,"div",14),t.qZA(),t.YNc(24,L,33,14,"div",15)),2&n){const _=t.MAs(13);t.xp6(3),t.Oqu(t.lcZ(4,8,l.from$)),t.xp6(5),t.Oqu(t.lcZ(9,10,l.to$)),t.xp6(3),t.Q6J("ngIf",l.return)("ngIfElse",_),t.xp6(5),t.Oqu(l.getDate()),t.xp6(4),t.Oqu(l.getPerson()),t.xp6(3),t.Q6J("ngIf",l.isBookingPage),t.xp6(1),t.Q6J("ngIf",l.isEdit)}},dependencies:[a.sg,a.O5,u.lW,g.Hw,s.KE,s.hX,s.R9,c.Nt,x.VQ,x.U0,M.XC,o.ey,M.ZL,P.Mq,P.hl,P.nW,P.wx,P.zY,P.By,P._g,P.M5,P.dp,P.DK,e._Y,e.Fj,e.JJ,e.JL,e.F,e.oH,b.G,a.Ov],styles:[".flight-search[_ngcontent-%COMP%]{display:flex;align-items:center;background:#FAFAFA;height:68px;padding:0 156px}.flight-search__way[_ngcontent-%COMP%]{display:flex}.flight-search__way-text[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:24px;letter-spacing:.15px;color:#000}.flight-search__way-icon[_ngcontent-%COMP%]{margin:0 16px}.flight-search__info[_ngcontent-%COMP%]{display:flex;margin-left:40px;font-weight:500;font-size:14px;line-height:20px;letter-spacing:.1px;color:#74767a}.flight-search__info-point[_ngcontent-%COMP%]{width:4px;height:4px;background:#0090BD;border-radius:50%;margin:8px}.flight-search__passagers[_ngcontent-%COMP%]{display:flex;position:relative}.flight-search__passagers-icon[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;font-size:16px;margin-left:5px}.flight-search__edit[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:44px;height:28px;margin-left:62px;padding:4px 8px;background:#F4F6F9;border-radius:4px;font-style:normal;font-weight:500;font-size:16px;line-height:20px;letter-spacing:.1px;color:#11397e;text-align:center;cursor:pointer}.flight-search__bottom-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;padding:20px;gap:20px;height:96px;background:#FFFFFF;max-width:1400px;width:100%;z-index:1}.card[_ngcontent-%COMP%]{margin-top:150px;margin-bottom:160px;width:580px;background-color:#ffffffd9}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative}.background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background-image:url(Background.a689a0143524e8be.jpg);background-repeat:no-repeat;background-position:center top}.inner-container[_ngcontent-%COMP%]{max-width:1440px}.dates[_ngcontent-%COMP%]{width:50%}.switch[_ngcontent-%COMP%]{position:absolute;right:20px;top:80px;background-color:#fff;border:.5px solid grey}.danger-text[_ngcontent-%COMP%]{color:red}.search[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.inline[_ngcontent-%COMP%]{display:flex;position:relative;top:-6px;left:-15px}.form[_ngcontent-%COMP%]{margin:24px;position:relative;display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.form__radio[_ngcontent-%COMP%]{margin-right:10px}.form__input[_ngcontent-%COMP%]{width:100px}.form__input--passengers[_ngcontent-%COMP%]{width:200px}.form__input--dates[_ngcontent-%COMP%]{width:300px}.form__width200[_ngcontent-%COMP%]{width:200px}.form__width300[_ngcontent-%COMP%]{width:300px}"]}),h})()},325:(A,O,i)=>{i.d(O,{G:()=>y});var e=i(4650),r=i(6032),m=i(1831),p=i(6895);let d=(()=>{class a{constructor(){this.counter=0}increase(){this.counter++}decrease(){this.counter--}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var t=i(9363);let T=(()=>{class a{constructor(s,c){this.counter=s,this.state=c,this.typesPassengers=["Adults","Child","Infant"]}getCounter(){return this.counter.counter}setChanges(){this.passenger.title===this.typesPassengers[0]?this.state.dispatch((0,t.rj)(this.getCounter())):this.passenger.title===this.typesPassengers[1]?this.state.dispatch((0,t.MW)(this.getCounter())):this.passenger.title===this.typesPassengers[2]&&this.state.dispatch((0,t.sk)(this.getCounter()))}increase(s){s.stopPropagation(),this.counter.increase(),this.setChanges()}decrease(s){s.stopPropagation(),this.counter.decrease(),this.setChanges()}disabled(){return!(this.getCounter()>0)}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(d),e.Y36(m.yh))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-passenger-type"]],inputs:{passenger:"passenger"},features:[e._Bn([d])],decls:12,vars:4,consts:[[1,"item"],[1,"data"],[1,"counter"],["type","button",3,"disabled","click"],["type","button",3,"click"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()(),e.TgZ(6,"div",2)(7,"button",3),e.NdJ("click",function(M){return c.decrease(M)}),e._uU(8,"-"),e.qZA(),e._uU(9),e.TgZ(10,"button",4),e.NdJ("click",function(M){return c.increase(M)}),e._uU(11,"+"),e.qZA()()()),2&s&&(e.xp6(3),e.Oqu(c.passenger.title),e.xp6(2),e.Oqu(c.passenger.age),e.xp6(2),e.Q6J("disabled",c.disabled()),e.xp6(2),e.hij(" ",c.getCounter()," "))},styles:[".item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0;width:201px;height:56px}.data[_ngcontent-%COMP%]{width:81px;height:40px}h3[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;align-items:center;letter-spacing:.5px;color:#11397e;margin:0}p[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:20px;letter-spacing:.25px;color:#74767a}button[_ngcontent-%COMP%]{width:24px;height:24px;border:none;cursor:pointer}.counter[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:0;width:72px;height:24px}"]}),a})();const g=["buttonList"];function v(a,u){1&a&&e._UZ(0,"app-passenger-type",6),2&a&&e.Q6J("passenger",u.$implicit)}function D(a,u){1&a&&(e.TgZ(0,"div",7),e._uU(1,"Passengers must be more then 0"),e.qZA())}let y=(()=>{class a{constructor(s){this.state=s,this.passengerList=[{title:"Adults",age:"14+ years"},{title:"Child",age:"2-14 years"},{title:"Infant",age:"0-2 years"}],this.isOpen=!1,this.isTouched=!1,this.text="adult 0, child 0, infant 0",this.isValid=!1,this.validStatus=new e.vpe,this.Adults$=this.state.select(r.mP),this.Childs$=this.state.select(r.f5),this.Infants$=this.state.select(r.bh),this.Adults$.subscribe(c=>{this.Adults=c,this.select()}),this.Childs$.subscribe(c=>{this.Childs=c,this.select()}),this.Infants$.subscribe(c=>{this.Infants=c,this.select()})}select(){this.Adults$=this.state.select(r.mP),this.Childs$=this.state.select(r.f5),this.Infants$=this.state.select(r.bh),this.getPasString(),this.setIsValid()}ngOnInit(){}getPasString(){this.text=`${this.Adults} Adult, ${this.Childs} Child, ${this.Infants} Infant`}openList(s){this.isOpen=!this.isOpen,this.isTouched&&this.setIsValid(),this.isTouched=!0}setIsValid(){this.isValid=!(0===this.Adults+this.Childs+this.Infants&&this.isTouched),this.emitValidStatus()}emitValidStatus(){this.validStatus.emit(this.isValid)}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(m.yh))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-passenger-list"]],viewQuery:function(s,c){if(1&s&&e.Gf(g,5),2&s){let x;e.iGM(x=e.CRH())&&(c.buttonList=x.first)}},outputs:{validStatus:"validStatus"},decls:7,vars:5,consts:[[1,"relative",3,"click"],["buttonList",""],["mat-button","",1,"relative__button"],[1,"list"],[3,"passenger",4,"ngFor","ngForOf"],["class","relative__error danger-text",4,"ngIf"],[3,"passenger"],[1,"relative__error","danger-text"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0,1),e.NdJ("click",function(M){return c.openList(M)}),e.TgZ(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,v,1,1,"app-passenger-type",4),e.qZA(),e.YNc(6,D,2,0,"div",5),e.qZA()),2&s&&(e.Tol(c.isOpen?"active":""),e.xp6(3),e.Oqu(c.text),e.xp6(2),e.Q6J("ngForOf",c.passengerList),e.xp6(1),e.Q6J("ngIf",!c.isValid))},dependencies:[p.sg,p.O5,T],styles:["[_nghost-%COMP%]{width:100%;margin-left:15px}.relative[_ngcontent-%COMP%]{position:relative;padding-top:17px;padding-bottom:8px;border-radius:10px;cursor:pointer}.relative[_ngcontent-%COMP%]:hover{background-color:#eee}.relative__button[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid rgb(119,119,119);border-radius:0;margin-top:19px;text-align:center}.relative__button[_ngcontent-%COMP%]:hover{border-bottom:1px solid black}.relative__error[_ngcontent-%COMP%]{margin-top:20px}.relative.active[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:block}.relative.invalid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:0}.relative.invalid[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{top:55px}.list[_ngcontent-%COMP%]{display:none;position:absolute;left:0;top:60px;z-index:5;width:201px;height:184px;background:#ffffff;box-shadow:0 1px 4px #0003}.danger-text[_ngcontent-%COMP%]{color:red}"]}),a})()},372:(A,O,i)=>{i.d(O,{G:()=>d});var e=i(529),r=i(4650);const m="https://api.air-ways.online",p={headers:new e.WM({"Content-Type":"application/json"})};let d=(()=>{class t{constructor(g){this.http=g}all(){return this.http.get(`${m}/search/airport`)}searchFlight(g){return this.http.post(`${m}/search/flight`,JSON.stringify(g),p)}authMe(){return this.http.get(`${m}/auth/me`)}login(g,v){return this.http.post(`${m}/auth/login`,JSON.stringify({email:g,password:v}),p)}registration(g){return this.http.post(`${m}/auth/registration`,JSON.stringify(g),p)}}return t.\u0275fac=function(g){return new(g||t)(r.LFG(e.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);