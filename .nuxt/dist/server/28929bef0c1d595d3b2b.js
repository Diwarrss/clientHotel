exports.ids=[15,14],exports.modules={565:function(e,t,r){"use strict";r.r(t);const n=e=>{for(let i=e.length-1;i>0;i--){let t=Math.floor(Math.random()*(i+1)),r=e[i];e[i]=e[t],e[t]=r}return e};var l={name:"CTable",props:{caption:{type:String,default:"Table"},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:()=>({items:n([{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}]),fields:[{key:"username"},{key:"registered"},{key:"role"},{key:"status"}],currentPage:1,perPage:5,totalRows:0}),methods:{getBadge:e=>"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary",getRowCount:e=>e.length}},o=r(0),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{header:e.caption}},[r("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,responsive:"sm"},scopedSlots:e._u([{key:"status",fn:function(data){return[r("b-badge",{attrs:{variant:e.getBadge(data.item.status)}},[e._v(e._s(data.item.status))])]}}])}),e._v(" "),r("nav",[r("b-pagination",{attrs:{"total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)}),[],!1,null,null,"0d4a8c81");t.default=component.exports},582:function(e,t,r){"use strict";r.r(t);var n={name:"Tables",components:{cTable:r(565).default}},l=r(0),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"animated fadeIn"},[t("b-row",[t("b-col",{attrs:{lg:"6"}},[t("c-table",{attrs:{caption:"<i class='fa fa-align-justify'></i> Simple Table"}})],1),this._v(" "),t("b-col",{attrs:{lg:"6"}},[t("c-table",{attrs:{striped:"",caption:"<i class='fa fa-align-justify'></i> Striped Table"}})],1)],1),this._ssrNode(" "),t("b-row",[t("b-col",{attrs:{lg:"6"}},[t("c-table",{attrs:{small:"",caption:"<i class='fa fa-align-justify'></i> Condensed Table"}})],1),this._v(" "),t("b-col",{attrs:{lg:"6"}},[t("c-table",{attrs:{fixed:"",bordered:"",caption:"<i class='fa fa-align-justify'></i> Bordered Table"}})],1)],1),this._ssrNode(" "),t("b-row",[t("b-col",{attrs:{sm:"12"}},[t("c-table",{attrs:{hover:"",striped:"",bordered:"",small:"",fixed:"",caption:"<i class='fa fa-align-justify'></i> Combined All Table"}})],1)],1)],2)}),[],!1,null,null,"c09ab67c");t.default=component.exports}};