webpackJsonp([15],{"0+Ad":function(e,t){},goyK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"footerBar",data:function(){return{activeName:"first",tabPosition:"bottom"}},methods:{handleClick:function(e,t){var a="mall";a="1"==e.index?"profile":"mall",this.$store.state.tabType=a,this.$emit("fatherEmit",{name:"你好",hello:"world"}),console.log(e,t)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"footerBar"}},[a("el-tabs",{staticClass:"guide_item",attrs:{"tab-position":e.tabPosition},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"乐豆商城",name:"first",type:"success"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"活动中心",name:"second"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"个人中心",name:"third"}})],1)],1)},staticRenderFns:[]};var l=a("Z0/y")(n,i,!1,function(e){a("0+Ad")},null,null);t.default=l.exports}});
//# sourceMappingURL=15.c25b27bb4b4e06683e89.js.map