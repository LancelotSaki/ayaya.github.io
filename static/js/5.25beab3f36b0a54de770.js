webpackJsonp([5],{"6Jqc":function(e,t){},"Kg/H":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"auditPerson",data:function(){return{currentPage:5,tableData:[{date:"2016-05-02",name:"王小虎",phone:"188647363262",province:"200000",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",phone:"188647363262",province:"200000",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",province:"200000",phone:"188647363262",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",province:"200000",phone:"188647363262",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",province:"200001",phone:"188647363262",address:"上海市普陀区金沙江路 1511 弄"},{date:"2016-05-09",name:"王小虎",phone:"188647363262",province:"200001",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-06",name:"王小虎",phone:"188647363262",province:"200002",address:"上海市普陀区金沙江路 1512 弄"}]}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t,n){n.splice(e,1),console.log("索引:"+e+"，第几行："+t)},tableRowClassName:function(e){e.row;var t=e.rowIndex;return console.log("change row color:"+t+"->"+(t%2==0)),t%2==0?"warning-row":"success-row"},handleSelectionChange:function(e){console.log("选择第几行啊:"+e),this.multipleSelection=e},filterHandler:function(e,t,n){var a=n.property;return console.log("property:"+a),t[a]===e},indexMethod:function(e){return e+1},formatter:function(e,t){var n="-";return"200000"===e.province?n="上海市":"200001"===e.province&&(n="上海"),n},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"auditPerson"}},[n("h1",[e._v("审核期")]),e._v(" "),n("el-table",{staticStyle:{width:"1400px"},attrs:{data:e.tableData,border:"",height:"500","min-width":"400","highlight-current-row":"","row-class-name":e.tableRowClassName},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"",type:"index",index:e.indexMethod,width:"55",align:"center",label:"序号"}}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("姓名: "+e._s(t.row.name))]),e._v(" "),n("p",[e._v("住址: "+e._s(t.row.address))]),e._v(" "),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.name))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"手机号码",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium",type:"success"}},[e._v(e._s(t.row.phone))])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"日期",width:"180",align:"center",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":e.filterHandler},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"地址",align:"center"}},[n("el-table-column",{attrs:{prop:"province",label:"省份",align:"center",width:"120",formatter:e.formatter}}),e._v(" "),n("el-table-column",{attrs:{prop:"city",label:"市区",align:"center",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"地址",align:"center",width:"300"}}),e._v(" "),n("el-table-column",{attrs:{prop:"zip",label:"邮编",align:"center",width:"120"}})],1),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击可编辑对应行",placement:"left"}},[n("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n          ")])],1),e._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"点击可删除对应行",placement:"right"}},[n("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(n){e.handleDelete(t.$index,t.row,e.tableData)}}},[e._v("删除\n          ")])],1)]}}])})],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,background:"",layout:"total,prev, pager, next, jumper",total:1024},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)},staticRenderFns:[]};var r=n("VU/8")(a,l,!1,function(e){n("6Jqc")},null,null);t.default=r.exports}});
//# sourceMappingURL=5.25beab3f36b0a54de770.js.map