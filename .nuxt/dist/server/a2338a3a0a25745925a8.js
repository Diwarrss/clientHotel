exports.ids=[16],exports.modules={588:function(t,o,e){"use strict";e.r(o);var r={name:"Tooltips",data:()=>({show:!0,disabled:!1}),methods:{onOpen(){this.$refs.tooltip.$emit("open")},onClose(){this.$refs.tooltip.$emit("close")},disableByRef(){this.disabled?this.$refs.tooltip2.$emit("enable"):this.$refs.tooltip2.$emit("disable")}}},l=e(0);var component=Object(l.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"wrapper"},[t._ssrNode('<div class="animated fadeIn" data-v-8753f9e6>',"</div>",[e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("font-awesome-icon",{attrs:{icon:["fas","align-justify"]}}),t._v(" "),e("strong",[t._v("Bootstrap Tooltips")]),e("small",[e("code",[t._v("v-b-tooltip")]),t._v("directive")]),t._v(" "),e("div",{staticClass:"card-actions"},[e("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/tooltip",target:"_blank"}},[e("small",{staticClass:"text-muted"},[t._v("docs")])])])],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("div",{staticClass:"text-center my-3"},[e("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"I am a tooltip!"}},[t._v("Hover Me")])],1)]),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("div",{staticClass:"text-center my-3"},[e("b-btn",{attrs:{id:"tooltipButton-2",variant:"primary"}},[t._v("Button")]),t._v(" "),e("b-tooltip",{attrs:{show:"",target:"tooltipButton-2"}},[t._v("\n              I start open\n            ")])],1)])],1)],1),t._ssrNode(" "),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("font-awesome-icon",{attrs:{icon:["fas","align-justify"]}}),t._v(" "),e("strong",[t._v("Tooltips")]),e("small",[e("code",[t._v("b-tooltip")]),t._v("component")])],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"py-4 text-center",attrs:{md:"6"}},[e("b-btn",{attrs:{id:"exButton1",variant:"outline-success"}},[t._v("Live chat")])],1),t._v(" "),e("b-col",{staticClass:"py-4 text-center",attrs:{md:"6"}},[e("b-btn",{attrs:{id:"exButton2",variant:"outline-success"}},[t._v("Html chat")])],1)],1),t._v(" "),e("b-tooltip",{attrs:{target:"exButton1",title:"Online!"}}),t._v(" "),e("b-tooltip",{attrs:{target:"exButton2",placement:"bottom"}},[t._v("\n        Hello "),e("strong",[t._v("World!")])])],1),t._ssrNode(" "),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("font-awesome-icon",{attrs:{icon:["fas","align-justify"]}}),t._v(" "),e("strong",[t._v("Tooltips")]),e("small",[e("code",[t._v("show")]),t._v("prop")])],1),t._v(" "),e("div",{staticClass:"text-center"},[e("b-btn",{attrs:{id:"tooltipButton-1",variant:"primary"}},[t._v("I have a tooltip")]),t._v(" "),e("br"),e("br"),t._v(" "),e("b-btn",{on:{click:function(o){t.show=!t.show}}},[t._v("Toggle Tooltip")]),t._v(" "),e("b-tooltip",{attrs:{show:t.show,target:"tooltipButton-1",placement:"top"},on:{"update:show":function(o){t.show=o}}},[t._v("\n          Hello "),e("strong",[t._v("World!")])])],1)]),t._ssrNode(" "),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("font-awesome-icon",{attrs:{icon:["fas","align-justify"]}}),t._v(" "),e("strong",[t._v("Tooltips")]),e("small",[e("code",[t._v("open close")]),t._v("events")])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column text-md-center"},[e("div",{staticClass:"p-2"},[e("b-btn",{attrs:{id:"tooltipButton-showEvent",variant:"primary"}},[t._v("I have a tooltip")])],1),t._v(" "),e("div",{staticClass:"p-2"},[e("b-btn",{staticClass:"px-1",on:{click:t.onOpen}},[t._v("Open")]),t._v(" "),e("b-btn",{staticClass:"px-1",on:{click:t.onClose}},[t._v("Close")])],1),t._v(" "),e("b-tooltip",{ref:"tooltip",attrs:{target:"tooltipButton-showEvent"}},[t._v("\n          Hello "),e("strong",[t._v("World!")])])],1)]),t._ssrNode(" "),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("font-awesome-icon",{attrs:{icon:["fas","align-justify"]}}),t._v(" "),e("strong",[t._v("Tooltips")]),e("small",[e("code",[t._v("enable disable")]),t._v("events")])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column text-md-center"},[e("div",{staticClass:"p-2"},[e("b-btn",{attrs:{id:"tooltipButton-disable",variant:"primary"}},[t._v("I have a tooltip")])],1),t._v(" "),e("div",{staticClass:"p-2"},[e("b-btn",{on:{click:function(o){t.disabled=!t.disabled}}},[t._v("\n            "+t._s(t.disabled?"Enable":"Disable")+" Tooltip by prop\n          ")]),t._v(" "),e("b-btn",{on:{click:t.disableByRef}},[t._v("\n            "+t._s(t.disabled?"Enable":"Disable")+" Tooltip by $ref event\n          ")]),t._v(" "),e("b-tooltip",{ref:"tooltip2",attrs:{disabled:t.disabled,target:"tooltipButton-disable"},on:{"update:disabled":function(o){t.disabled=o}}},[t._v("\n            Hello "),e("strong",[t._v("World!")])])],1)])])],2)])}),[],!1,(function(t){}),"8753f9e6","7f61ec6d");o.default=component.exports}};