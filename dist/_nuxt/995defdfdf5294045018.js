(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{877:function(r,e,t){var map={"./af":744,"./af.js":744,"./ar":745,"./ar-dz":746,"./ar-dz.js":746,"./ar-kw":747,"./ar-kw.js":747,"./ar-ly":748,"./ar-ly.js":748,"./ar-ma":749,"./ar-ma.js":749,"./ar-sa":750,"./ar-sa.js":750,"./ar-tn":751,"./ar-tn.js":751,"./ar.js":745,"./az":752,"./az.js":752,"./be":753,"./be.js":753,"./bg":754,"./bg.js":754,"./bm":755,"./bm.js":755,"./bn":756,"./bn.js":756,"./bo":757,"./bo.js":757,"./br":758,"./br.js":758,"./bs":759,"./bs.js":759,"./ca":760,"./ca.js":760,"./cs":761,"./cs.js":761,"./cv":762,"./cv.js":762,"./cy":763,"./cy.js":763,"./da":764,"./da.js":764,"./de":765,"./de-at":766,"./de-at.js":766,"./de-ch":767,"./de-ch.js":767,"./de.js":765,"./dv":768,"./dv.js":768,"./el":769,"./el.js":769,"./en-au":770,"./en-au.js":770,"./en-ca":771,"./en-ca.js":771,"./en-gb":772,"./en-gb.js":772,"./en-ie":773,"./en-ie.js":773,"./en-il":774,"./en-il.js":774,"./en-in":775,"./en-in.js":775,"./en-nz":776,"./en-nz.js":776,"./en-sg":777,"./en-sg.js":777,"./eo":778,"./eo.js":778,"./es":779,"./es-do":780,"./es-do.js":780,"./es-us":781,"./es-us.js":781,"./es.js":779,"./et":782,"./et.js":782,"./eu":783,"./eu.js":783,"./fa":784,"./fa.js":784,"./fi":785,"./fi.js":785,"./fil":786,"./fil.js":786,"./fo":787,"./fo.js":787,"./fr":788,"./fr-ca":789,"./fr-ca.js":789,"./fr-ch":790,"./fr-ch.js":790,"./fr.js":788,"./fy":791,"./fy.js":791,"./ga":792,"./ga.js":792,"./gd":793,"./gd.js":793,"./gl":794,"./gl.js":794,"./gom-deva":795,"./gom-deva.js":795,"./gom-latn":796,"./gom-latn.js":796,"./gu":797,"./gu.js":797,"./he":798,"./he.js":798,"./hi":799,"./hi.js":799,"./hr":800,"./hr.js":800,"./hu":801,"./hu.js":801,"./hy-am":802,"./hy-am.js":802,"./id":803,"./id.js":803,"./is":804,"./is.js":804,"./it":805,"./it-ch":806,"./it-ch.js":806,"./it.js":805,"./ja":807,"./ja.js":807,"./jv":808,"./jv.js":808,"./ka":809,"./ka.js":809,"./kk":810,"./kk.js":810,"./km":811,"./km.js":811,"./kn":812,"./kn.js":812,"./ko":813,"./ko.js":813,"./ku":814,"./ku.js":814,"./ky":815,"./ky.js":815,"./lb":816,"./lb.js":816,"./lo":817,"./lo.js":817,"./lt":818,"./lt.js":818,"./lv":819,"./lv.js":819,"./me":820,"./me.js":820,"./mi":821,"./mi.js":821,"./mk":822,"./mk.js":822,"./ml":823,"./ml.js":823,"./mn":824,"./mn.js":824,"./mr":825,"./mr.js":825,"./ms":826,"./ms-my":827,"./ms-my.js":827,"./ms.js":826,"./mt":828,"./mt.js":828,"./my":829,"./my.js":829,"./nb":830,"./nb.js":830,"./ne":831,"./ne.js":831,"./nl":832,"./nl-be":833,"./nl-be.js":833,"./nl.js":832,"./nn":834,"./nn.js":834,"./oc-lnc":835,"./oc-lnc.js":835,"./pa-in":836,"./pa-in.js":836,"./pl":837,"./pl.js":837,"./pt":838,"./pt-br":839,"./pt-br.js":839,"./pt.js":838,"./ro":840,"./ro.js":840,"./ru":841,"./ru.js":841,"./sd":842,"./sd.js":842,"./se":843,"./se.js":843,"./si":844,"./si.js":844,"./sk":845,"./sk.js":845,"./sl":846,"./sl.js":846,"./sq":847,"./sq.js":847,"./sr":848,"./sr-cyrl":849,"./sr-cyrl.js":849,"./sr.js":848,"./ss":850,"./ss.js":850,"./sv":851,"./sv.js":851,"./sw":852,"./sw.js":852,"./ta":853,"./ta.js":853,"./te":854,"./te.js":854,"./tet":855,"./tet.js":855,"./tg":856,"./tg.js":856,"./th":857,"./th.js":857,"./tl-ph":858,"./tl-ph.js":858,"./tlh":859,"./tlh.js":859,"./tr":860,"./tr.js":860,"./tzl":861,"./tzl.js":861,"./tzm":862,"./tzm-latn":863,"./tzm-latn.js":863,"./tzm.js":862,"./ug-cn":864,"./ug-cn.js":864,"./uk":865,"./uk.js":865,"./ur":866,"./ur.js":866,"./uz":867,"./uz-latn":868,"./uz-latn.js":868,"./uz.js":867,"./vi":869,"./vi.js":869,"./x-pseudo":870,"./x-pseudo.js":870,"./yo":871,"./yo.js":871,"./zh-cn":872,"./zh-cn.js":872,"./zh-hk":873,"./zh-hk.js":873,"./zh-mo":874,"./zh-mo.js":874,"./zh-tw":875,"./zh-tw.js":875};function n(r){var e=o(r);return t(e)}function o(r){if(!t.o(map,r)){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return map[r]}n.keys=function(){return Object.keys(map)},n.resolve=o,r.exports=n,n.id=877},884:function(r,e,t){"use strict";t.r(e);var n=t(743),o={extends:n.a,mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]})}},l=t(9),j=Object(l.a)(o,void 0,void 0,!1,null,null,null).exports,d={extends:n.c,mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,39,10,40,39,80,40]}]},{responsive:!0,maintainAspectRatio:!1})}},c=Object(l.a)(d,void 0,void 0,!1,null,null,null).exports,h={extends:n.b,mounted:function(){this.renderChart({labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},{responsive:!0,maintainAspectRatio:!1})}},m=Object(l.a)(h,void 0,void 0,!1,null,null,null).exports,f={extends:n.f,mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!1})}},v=Object(l.a)(f,void 0,void 0,!1,null,null,null).exports,C={extends:n.d,mounted:function(){this.renderChart({labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},{responsive:!0,maintainAspectRatio:!1})}},k=Object(l.a)(C,void 0,void 0,!1,null,null,null).exports,y={extends:n.e,mounted:function(){this.renderChart({labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},{responsive:!0,maintainAspectRatio:!1})}},x={name:"Charts",components:{BarExample:j,LineExample:c,DoughnutExample:m,RadarExample:v,PieExample:k,PolarAreaExample:Object(l.a)(y,void 0,void 0,!1,null,null,null).exports}},z=Object(l.a)(x,(function(){var r=this.$createElement,e=this._self._c||r;return e("div",{staticClass:"animated fadeIn"},[e("b-card-group",{staticClass:"card-columns cols-2",attrs:{columns:""}},[e("b-card",{attrs:{header:"Line Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("line-example")],1)]),this._v(" "),e("b-card",{attrs:{header:"Bar Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("bar-example")],1)]),this._v(" "),e("b-card",{attrs:{header:"Doughnut Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("doughnut-example")],1)]),this._v(" "),e("b-card",{attrs:{header:"Radar Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("radar-example")],1)]),this._v(" "),e("b-card",{attrs:{header:"Pie Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("pie-example")],1)]),this._v(" "),e("b-card",{attrs:{header:"Polar Area Chart"}},[e("div",{staticClass:"chart-wrapper"},[e("polar-area-example")],1)])],1)],1)}),[],!1,null,null,null);e.default=z.exports}}]);