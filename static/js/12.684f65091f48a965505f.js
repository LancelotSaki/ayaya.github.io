webpackJsonp([12],{kRFJ:function(t,e){},mbcC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"myMarquee",data:function(){return{message:"公告:2011->2012->2013->2014->2015->2016->2017->2018->2019",isPc:!0}},created:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0,a=0;a<e.length;a++)if(t.indexOf(e[a])>0){s=!1;break}this.isPc=s,console.log("是否是PC端："+s)}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"myMarquee"}},[s("div",{staticClass:"lineScroll"},[s("div",{staticClass:"lineScrollFont"},[t._v("\n      "+t._s(t.message)+"\n    ")])]),t._v(" "),s("div",{staticClass:"rightList"},[t.isPc?s("div",[t._v("\n      这是PC端\n    ")]):s("div",[t._v("\n      这是移动端\n    ")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottomTab"},[e("input",{staticClass:"tabNode",attrs:{type:"button",value:"首页"}}),this._v(" "),e("input",{staticClass:"tabNode",attrs:{type:"button",value:"积分商城"}}),this._v(" "),e("input",{staticClass:"tabNode",attrs:{type:"button",value:"活动中心"}}),this._v(" "),e("input",{staticClass:"tabNode",attrs:{type:"button",value:"个人中心"}})])}]};var i=s("VU/8")(a,n,!1,function(t){s("kRFJ")},null,null);e.default=i.exports}});
//# sourceMappingURL=12.684f65091f48a965505f.js.map