webpackJsonp([11],{QlWu:function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={name:"myLogin",data:function(){var e=this;return{labelPosition:"right",provinceOptions:[{value:"gx",label:"广西壮族自治区",children:[{value:"gg",label:"贵港市",children:[{value:"qt",label:"覃塘区"},{value:"gb",label:"港北区"},{value:"gn",label:"港南区"}]},{value:"nn",label:"南宁市",children:[{value:"xxt",label:"西乡塘"},{value:"xn",label:"江南区"},{value:"qx",label:"青秀区"},{value:"gx",label:"高新区"}]}]}],loginForm:{username:"",email:"",password:"",sendMessage:"",checkedPassword:"",phone:"",selectedOptions:[]},loginRules:{checkUsername:[{required:!0,validator:function(o,l,r){var n=e.loginForm.username;""===n?r(new Error("请输入用户名")):n.length<5&&r(new Error("请至少输入5位长度的用户名")),r()},trigger:"blur"}],checkEmail:[{required:!0,validator:function(o,l,r){var n=e.loginForm.email;""===n?r(new Error("请输入邮箱")):n.length<8&&r(new Error("请正确的邮箱地址")),r()},trigger:"blur"}],pass:[{required:!0,validator:function(o,l,r){var n=e.loginForm.password;""===n?r(new Error("请输入密码")):n.length<6?r(new Error("请输入至少6位数的密码")):n!==e.loginForm.checkedPassword&&e.$refs.loginForm.validateField("checkPass"),r()},trigger:"blur"}],checkPass:[{required:!0,validator:function(o,l,r){var n=e.loginForm.checkedPassword;""===n?r(new Error("请再次输入密码")):n!==e.loginForm.password&&r(new Error("两次输入密码不一致!")),r()},trigger:"blur"}],checkPhone:[{required:!0,validator:function(o,l,r){var n=e.loginForm.phone;""===n?r(new Error("请先输入手机号码")):n.match(/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/)||r(new Error("两次输入密码不一致!")),r()},trigger:"blur"}]}}},methods:{handleChange:function(e){console.log(e)},onSubmit:function(e){this.$refs[e].validate(function(o){if(console.log(e),!o)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs.form.reset()}}},n={render:function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",{attrs:{id:"myLogin"}},[l("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"",rules:e.loginRules,"label-width":"80px"},model:{value:e.labelPosition,callback:function(o){e.labelPosition=o},expression:"labelPosition"}},[l("el-form-item",{attrs:{label:"用户名",prop:"checkUsername"}},[l("el-input",{attrs:{"auto-complete":"off"},model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"邮箱",prop:"checkEmail"}},[l("el-input",{attrs:{type:"email","auto-complete":"off"},model:{value:e.loginForm.email,callback:function(o){e.$set(e.loginForm,"email",o)},expression:"loginForm.email"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"密码",prop:"pass"}},[l("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[l("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.loginForm.checkedPassword,callback:function(o){e.$set(e.loginForm,"checkedPassword",o)},expression:"loginForm.checkedPassword"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号码",prop:"checkPhone"}},[l("el-input",{attrs:{type:"number","auto-complete":"off"},model:{value:e.loginForm.phone,callback:function(o){e.$set(e.loginForm,"phone",o)},expression:"loginForm.phone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"短信发送",prop:"checkMessage"}},[l("el-col",{attrs:{span:16}},[l("el-input",{attrs:{"auto-complete":"off"},model:{value:e.loginForm.sendMessage,callback:function(o){e.$set(e.loginForm,"sendMessage",o)},expression:"loginForm.sendMessage"}})],1),e._v(" "),l("el-col",{attrs:{span:1}},[e._v(" ")]),e._v(" "),l("el-col",{attrs:{span:3}},[l("el-button",{attrs:{type:"warning",plain:""}},[e._v("发送")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"城市"}},[l("el-col",{attrs:{span:24}},[l("el-cascader",{staticStyle:{float:"left"},attrs:{options:e.provinceOptions,"change-on-select":""},on:{change:e.handleChange},model:{value:e.loginForm.selectedOptions,callback:function(o){e.$set(e.loginForm,"selectedOptions",o)},expression:"loginForm.selectedOptions"}})],1)],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(o){e.onSubmit("loginForm")}}},[e._v("注册")]),e._v(" "),l("el-button",{attrs:{type:"info",plain:""},on:{click:function(o){e.resetForm("loginForm")}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var t=l("Z0/y")(r,n,!1,function(e){l("oRxW")},null,null);o.default=t.exports},oRxW:function(e,o){}});
//# sourceMappingURL=11.62cdfd06da17105638cc.js.map