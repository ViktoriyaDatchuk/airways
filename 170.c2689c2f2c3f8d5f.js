"use strict";(self.webpackChunkairways=self.webpackChunkairways||[]).push([[170],{1170:(P,y,s)=>{s.r(y),s.d(y,{CartModule:()=>L});var l=s(1831);const Z=n=>n.settings,I=(0,l.P1)(Z,n=>n.date),x=(0,l.P1)(Z,n=>n.currency);var b=s(9305),m=s(3946),t=s(4650);let C=(()=>{class n{constructor(){this.currencyIcons={eur:"\u20ac",usd:"$",rub:"\u20bd",pln:"z\u0142"}}getCurrencyIcons(){return this.currencyIcons}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=s(6895),U=s(6709),A=s(6308),k=s(4850);let w=(()=>{class n{constructor(){this.deleteItem=new t.vpe}deleteTrip(e){const o=e.currentTarget.closest(".dots-row")?.parentElement?.getElementsByClassName("number-row")[0].innerHTML;this.deleteItem.emit(o)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-menu"]],outputs:{deleteItem:"deleteItem"},decls:6,vars:0,consts:[[1,"edit-menu"],[1,"edit-menu__button",3,"click"],[1,"edit-menu__button"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(r){return o.deleteTrip(r)}),t._uU(2,"Delete"),t.qZA(),t._UZ(3,"mat-divider"),t.TgZ(4,"button",2),t._uU(5,"Edit"),t.qZA()())},dependencies:[k.d],encapsulation:2}),n})();function $(n,c){if(1&n&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.lnq(" ",e.form.city," - ",e.to.city," - ",e.form.city," ")}}function B(n,c){if(1&n&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",e.form.city," - ",e.to.city," ")}}function q(n,c){if(1&n&&(t.TgZ(0,"td",11),t._uU(1),t.ALo(2,"date"),t.ALo(3,"date"),t.ALo(4,"date"),t._UZ(5,"br"),t._uU(6),t.ALo(7,"date"),t.ALo(8,"date"),t.ALo(9,"date"),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.lnq(" ",t.xi3(2,6,e.takeoffDate,o.dateFormat)," ",t.xi3(3,9,e.takeoffDate,"hh:mm")," - ",t.xi3(4,12,e.landingDate,"hh:mm")," "),t.xp6(5),t.lnq("",t.xi3(7,15,e.takeoffDateBack,o.dateFormat)," ",t.xi3(8,18,e.takeoffDateBack,"hh:mm")," - ",t.xi3(9,21,e.landingDateBack,"hh:mm")," ")}}function D(n,c){if(1&n&&(t.TgZ(0,"td",11),t._uU(1),t.ALo(2,"date"),t.ALo(3,"date"),t.ALo(4,"date"),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw();t.xp6(1),t.lnq(" ",t.xi3(2,3,e.takeoffDate,o.dateFormat)," ",t.xi3(3,6,e.takeoffDate,"hh:mm")," - ",t.xi3(4,9,e.landingDate,"hh:mm")," ")}}function S(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.adults," x Adult")}}function N(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.childs," x Child")}}function E(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e.infants," x Infant")}}function F(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",11)(2,"section",12)(3,"mat-checkbox",13),t.NdJ("change",function(i){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.changeValue(a,i))}),t.qZA()()(),t.TgZ(4,"td",14),t._uU(5),t.qZA(),t.YNc(6,$,2,3,"td",15),t.YNc(7,B,2,2,"ng-template",null,16,t.W1O),t.TgZ(9,"td",11),t._uU(10),t.qZA(),t.YNc(11,q,10,24,"td",17),t.YNc(12,D,5,12,"ng-template",null,18,t.W1O),t.TgZ(14,"td",11)(15,"ul",19),t.YNc(16,S,2,1,"li",20),t.YNc(17,N,2,1,"li",20),t.YNc(18,E,2,1,"li",20),t.qZA()(),t.TgZ(19,"td",21),t._uU(20),t.qZA(),t.TgZ(21,"td",22)(22,"button",23),t.NdJ("click",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.toggle(i))}),t._UZ(23,"img",24),t.TgZ(24,"app-edit-menu",25),t.NdJ("deleteItem",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.deleteItem(i))}),t.qZA()()()()}if(2&n){const e=c.$implicit,o=t.MAs(8),i=t.MAs(13),r=t.oxw();t.xp6(3),t.Q6J("checked",e.selected),t.xp6(2),t.Oqu(e.flightNumber),t.xp6(1),t.Q6J("ngIf","Round Trip"===e.type)("ngIfElse",o),t.xp6(4),t.Oqu(e.type),t.xp6(1),t.Q6J("ngIf","Round Trip"===e.type)("ngIfElse",i),t.xp6(5),t.Q6J("ngIf",0!==e.adults),t.xp6(1),t.Q6J("ngIf",0!==e.childs),t.xp6(1),t.Q6J("ngIf",0!==e.infants),t.xp6(2),t.AsE(" ",r.currencyIcon," ",r.getPrice(e)," ")}}let v=(()=>{class n{constructor(e,o,i){this.dataService=e,this.store=o,this.cartStore=i,this.isVisible=!1,this.allComplete=!1,this.selected=0}ngOnInit(){this.store.select(x).subscribe(e=>{this.currency=e,this.currencyIcon=this.dataService.currencyIcons[e]}),this.store.select(I).subscribe(e=>{this.dateFormat=e}),this.cartStore.select(b.i).subscribe(e=>{this.trips=e.flight})}ngDoCheck(){this.sortedTrips=[...this.trips],this.selected=this.countSelected(),this.sum=this.sortedTrips.reduce((e,o)=>e+o.price[this.currency],0)}setAll(e){!1===this.allComplete?(this.allComplete=e,this.sortedTrips.forEach(o=>this.cartStore.dispatch((0,m.i9)({selected:!0,trip:o})))):(this.allComplete=!1,this.sortedTrips.forEach(o=>this.cartStore.dispatch((0,m.i9)({selected:!1,trip:o})))),this.selected=this.countSelected()}changeValue(e,o){this.cartStore.dispatch((0,m.i9)({selected:o.checked,trip:e})),console.log(this.sortedTrips),this.updateAllInputs()}updateAllInputs(){this.allComplete=this.sortedTrips.every(e=>e.selected)}countSelected(){let e=0;return this.sortedTrips.forEach(o=>{!0===o.selected&&e++}),e}toggle(e){e.currentTarget?.getElementsByTagName("app-edit-menu")[0].classList.toggle("unhidden")}deleteItem(e){Array.from(document.getElementsByTagName("app-edit-menu")).forEach(o=>{o.classList.remove("unhidden")}),this.cartStore.dispatch((0,m.PS)({number:e}))}getPrice(e){return Number("eur"===this.currency?e.price.eur.toFixed(2):"usd"===this.currency?e.price.usd.toFixed(2):"rub"===this.currency?e.price.rub.toFixed(2):e.price.pln.toFixed(2))}sortData(e){const o=[...this.trips];this.sortedTrips=e.active&&""!==e.direction?o.sort((i,r)=>{const a="asc"===e.direction;switch(e.active){case"number":return d(i.flightNumber,r.flightNumber,a);case"flight":let u,f;return u="Round Trip"===i.type?`${i.form.city} - ${i.to.city} - ${i.form.city}`:`${i.form.city} - ${i.to.city}`,f="Round Trip"===r.type?`${r.form.city} - ${r.to.city} - ${r.form.city}`:`${r.form.city} - ${r.to.city}`,d(u,f,a);case"type":return d(i.type,r.type,a);case"data":let _,T;return _=`${i.takeoffDate} - ${i.landingDate}`,T=`${r.takeoffDate} - ${r.landingDate}`,d(_,T,a);case"price":return d(i.price[this.currency],r.price[this.currency],a);default:return 0}}):o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(l.yh),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-booking-table"]],decls:21,vars:2,consts:[["matSort","","matSortStart","desc",1,"trip-table",3,"matSortChange"],[1,"trip-table__header"],[1,"checkbox-col"],[1,"example-margin",3,"checked","change"],["mat-sort-header","number"],["mat-sort-header","flight"],["mat-sort-header","type"],["mat-sort-header","data"],[1,"passengers-title"],["mat-sort-header","price"],[4,"ngFor","ngForOf"],[1,"trip-table__row"],[1,"checkbox-section"],[3,"checked","change"],[1,"trip-table__row","number-row"],["class","trip-table__row destination-row",4,"ngIf","ngIfElse"],["secondBlock",""],["class","trip-table__row",4,"ngIf","ngIfElse"],["anotherBlock",""],[1,"passengers-list"],[4,"ngIf"],[1,"trip-table__row","trip-price"],[1,"trip-table__row","dots-row"],[1,"dots-button",3,"click"],["src","./assets/dots.svg","alt","dots"],[1,"menu-position",3,"deleteItem"],[1,"trip-table__row","destination-row"]],template:function(e,o){1&e&&(t.TgZ(0,"table",0),t.NdJ("matSortChange",function(r){return o.sortData(r)}),t.TgZ(1,"thead",1)(2,"tr")(3,"th",2)(4,"mat-checkbox",3),t.NdJ("change",function(r){return o.setAll(r.checked)}),t._uU(5," All "),t.qZA()(),t.TgZ(6,"th",4),t._uU(7,"No."),t.qZA(),t.TgZ(8,"th",5),t._uU(9,"Flight"),t.qZA(),t.TgZ(10,"th",6),t._uU(11,"Type trip"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Data & Time"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"Passengers"),t.qZA(),t.TgZ(16,"th",9),t._uU(17,"Price"),t.qZA(),t._UZ(18,"th"),t.qZA()(),t.TgZ(19,"tbody"),t.YNc(20,F,25,12,"tr",10),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("checked",o.allComplete),t.xp6(16),t.Q6J("ngForOf",o.sortedTrips))},dependencies:[h.sg,h.O5,U.oG,A.YE,A.nU,w,h.uU],encapsulation:2}),n})();function d(n,c,e){return(n<c?-1:1)*(e?1:-1)}var p=s(3546),g=s(4006);let Y=(()=>{class n{constructor(e,o,i){this.dataService=e,this.store=o,this.cartStore=i,this.selected=0}ngOnInit(){this.store.select(x).subscribe(e=>{this.currencyIcon=this.dataService.currencyIcons[e]}),this.cartStore.select(b.i).subscribe(e=>{this.trips=e.flight})}ngAfterViewChecked(){setTimeout(()=>{this.selected=this.child.selected,this.sum=this.child.sum})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(l.yh),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],viewQuery:function(e,o){if(1&e&&t.Gf(v,5),2&e){let i;t.iGM(i=t.CRH())&&(o.child=i.first)}},decls:27,vars:3,consts:[[1,"cart","container"],[1,"booking-table"],[1,"booking-table__title"],[1,"total-row"],[1,"add-button"],[1,"total-price"],[1,"total-price__title"],[1,"total-price__value"],[1,"divider-margin"],[1,"payment-row"],[1,"payment-row__form"],["type","text","placeholder","Promo Code",1,"promo-input"],[1,"apply-button"],[1,"payment-button"],[1,"payment-button__selected"],[1,"payment-button__pay"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title",2),t._uU(4,"Cart"),t.qZA()(),t.TgZ(5,"mat-card-content"),t._UZ(6,"app-booking-table"),t.TgZ(7,"div",3)(8,"button",4),t._uU(9,"+ Add new trip"),t.qZA(),t.TgZ(10,"div",5)(11,"p",6),t._uU(12,"Total"),t.qZA(),t.TgZ(13,"p",7),t._uU(14),t.qZA()()(),t._UZ(15,"mat-divider",8),t.qZA(),t.TgZ(16,"mat-card-actions")(17,"div",9)(18,"form",10),t._UZ(19,"input",11),t.TgZ(20,"button",12),t._uU(21,"APPLY"),t.qZA()(),t.TgZ(22,"div",13)(23,"p",14),t._uU(24),t.qZA(),t.TgZ(25,"button",15),t._uU(26,"Payment"),t.qZA()()()()()()),2&e&&(t.xp6(14),t.AsE("",o.currencyIcon,"",o.sum,""),t.xp6(10),t.hij("",o.selected," selected"))},dependencies:[p.a8,p.hq,p.dn,p.dk,p.n5,k.d,g._Y,g.JL,g.F,v],encapsulation:2}),n})();var J=s(1965),M=s(8252);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[J.m,M.Bz.forChild([{path:"",component:Y}])]}),n})()}}]);