(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af1afe14"],{"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),o=n("6821"),r=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=o(t),e=r(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return a(!i.f.call(t,e),t[e])}},"2d31":function(t,e,n){e=t.exports=n("24fb")(!0),e.push([t.i,".custom-tree-node[data-v-6d386aa5]{flex:1;display:flex;align-items:center;justify-content:space-between;font-size:14px;padding-right:8px}","",{version:3,sources:["H:/WORKWORK_TEST/vue-elementui-admin-sample/src/views/content/systemManagement/Unit/src/views/content/systemManagement/Unit/Index.vue"],names:[],mappings:"AAgIA,mCACA,MAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,cAAA,CACA,iBACA",file:"Index.vue?vue&type=style&index=0&id=6d386aa5&scoped=true&lang=css&",sourcesContent:['<template>\n  <div style="margin-left: 10px"  :style="{height: tableHeight + \'px\'}">\n    <el-button ref="AddButton" type="text" icon="el-icon-circle-plus-outline" @click="add()">添加单位\n    </el-button>\n    <div style="overflow: auto" :style="{height: tableHeight+ \'px\'}">\n      <el-tree :data="treeData" node-key="id" default-expand-all :expand-on-click-node="false" highlight-current>\n      <span class="custom-tree-node" slot-scope="{ node, data }">\n        <span>{{ node.data.name }}</span>\n        <span>\n          <el-button type="text" style="color: #67C23A;"\n                     @click="() => add(node)" icon="el-icon-circle-plus-outline">添加\n          </el-button>\n          <el-button type="text" icon="el-icon-edit"\n                     @click="() => change(node)">修改\n          </el-button>\n          <el-button type="text" style="color: #F56C6C;"\n                     @click="() => remove(node, data)" icon="el-icon-delete">删除\n          </el-button>\n        </span>\n      </span>\n      </el-tree>\n    </div>\n    \x3c!--添加修改--\x3e\n    <UnitDialog ref="editDialog" @up-data="upData"></UnitDialog>\n  </div>\n</template>\n\n<script>\n  import { mapGetters } from \'vuex\';\n  import UnitDialog from \'./UnitDialog\';\n  import UnitApi from \'src/api/unit-api\';\n  import { showResMsg } from \'src/utils/operation-result-message\';\n\n  export default {\n    name: \'unit\',\n    data() {\n      return {\n\n        treeData: [],\n        tableHeight: \'\',\n        showAdd: false,\n        addInfo: {\n          rowInfo: \'\',\n          addTitle: \'\',\n        },\n        showChange: false,\n        changeInfo: {\n          rowInfo: \'\',\n          changeTitle: \'\',\n          changeTree: [],\n        },\n        form: {\n          isDelete: false,\n          orderBy: {\n            name: true,\n          },\n          rootId: 0,\n        },\n      };\n    },\n    watch: {\n      contentHeight(val) {\n        this.tableHeight = val  - this.$refs.AddButton.$el.offsetHeight;\n      },\n    },\n    created() {\n      this.$nextTick(() => {\n        this.tableHeight = this.contentHeight - this.$refs.AddButton.$el.offsetHeight;\n      });\n      this.upData();\n    },\n    methods: {\n      // -- 添加 --\n      add(node) {\n        this.$refs.editDialog.show(\n          false,\n          JSON.parse(JSON.stringify(node === undefined ? {} : node.data)),\n          JSON.parse(JSON.stringify(this.treeData))\n        );\n      },\n      // -- 获取、更新 --\n      upData() {\n        UnitApi.getUnitTree(this.form)\n          .then(({ data }) => {\n            this.treeData = data.data.unitTree;\n          });\n      },\n      // -- 修改 --\n      change(node) {\n        this.$refs.editDialog.show(\n          true,\n          JSON.parse(JSON.stringify(node.data)),\n          JSON.parse(JSON.stringify(this.treeData))\n        );\n      },\n      // -- 删除 --\n      remove(node) {\n        const id = node.data.id;\n        this.$confirm(\'此操作将永久删除该文件, 是否继续?\', \'提示\', {\n          confirmButtonText: \'确定\',\n          cancelButtonText: \'取消\',\n          type: \'warning\',\n        })\n          .then(() => {\n            UnitApi.deleteUnit({ id })\n              .then(({ data }) => {\n                showResMsg(data);\n                if (data.result) {\n                  this.upData();\n                }\n              });\n          });\n      },\n\n    },\n    computed: {\n      ...mapGetters({\n        contentHeight: \'getContentHeight\',\n      }),\n    },\n    components: {\n      UnitDialog,\n\n    },\n  };\n<\/script>\n\n<style scoped>\n  .custom-tree-node {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-right: 8px;\n  }\n</style>\n']}])},"43a2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-left":"10px"},style:{height:t.tableHeight+"px"}},[n("el-button",{ref:"AddButton",attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.add()}}},[t._v("添加单位\n  ")]),n("div",{staticStyle:{overflow:"auto"},style:{height:t.tableHeight+"px"}},[n("el-tree",{attrs:{data:t.treeData,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"highlight-current":""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node,a=e.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[t._v(t._s(i.data.name))]),n("span",[n("el-button",{staticStyle:{color:"#67C23A"},attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(){return t.add(i)}}},[t._v("添加\n        ")]),n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(){return t.change(i)}}},[t._v("修改\n        ")]),n("el-button",{staticStyle:{color:"#F56C6C"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(){return t.remove(i,a)}}},[t._v("删除\n        ")])],1)])}}])})],1),n("UnitDialog",{ref:"editDialog",on:{"up-data":t.upData}})],1)},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{"close-on-click-modal":!1,title:(t.isUpdate?"修改":"新增")+"单位",visible:t.isShow,width:"400px"},on:{"update:visible":function(e){t.isShow=e}}},[n("el-form",{attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"上级"}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.unitTree,props:t.prop,clearable:""},model:{value:t.form.parentIdForVModel,callback:function(e){t.$set(t.form,"parentIdForVModel",e)},expression:"form.parentIdForVModel"}})],1),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"类型"}},[n("el-input",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),n("el-form-item",{attrs:{label:"排序"}},[n("el-input",{model:{value:t.form.indexNum,callback:function(e){t.$set(t.form,"indexNum",e)},expression:"form.indexNum"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.isOk()}}},[t._v("确 定")])],1)],1)],1)},c=[],l=n("64bd"),d=n("9873"),u={name:"Change",props:{value:Boolean,changeInfo:Object},data:function(){return{isShow:!1,isUpdate:{},unitTree:{},form:{},formEmpty:{name:"",type:"",parentIdForVModel:[],parentId:"",indexNum:1e3},prop:{checkStrictly:!0,value:"id",label:"name"}}},methods:{show:function(t,e,n){this.isShow=!0,this.isUpdate=t,this.unitTree=n,t?(this.form=e,this.form.parentIdForVModel=e.parentId,this.form.parentId=0):(this.form=JSON.parse(JSON.stringify(this.formEmpty)),void 0!==e&&(this.form.parentIdForVModel=e.id))},isOk:function(){var t=this;Array.isArray(this.form.parentIdForVModel)?0===this.form.parentIdForVModel.length?this.form.parentId=0:this.form.parentId=this.form.parentIdForVModel[this.form.parentIdForVModel.length-1]:this.form.parentId=this.form.parentIdForVModel;var e=this.$checkNull(this.form);e?this.isUpdate?l["a"].updateUnit(this.form).then((function(e){var n=e.data;Object(d["a"])(n),n.result&&(t.isShow=!1,t.$emit("up-data"))})):l["a"].addUnit(this.form).then((function(e){var n=e.data;Object(d["a"])(n),n.result&&(t.isShow=!1,t.$emit("up-data"))})):this.$message.error("请完善信息")}}},f=u,p=n("2877"),h=Object(p["a"])(f,s,c,!1,null,"bf4bef4e",null),m=h.exports;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={name:"unit",data:function(){return{treeData:[],tableHeight:"",showAdd:!1,addInfo:{rowInfo:"",addTitle:""},showChange:!1,changeInfo:{rowInfo:"",changeTitle:"",changeTree:[]},form:{isDelete:!1,orderBy:{name:!0},rootId:0}}},watch:{contentHeight:function(t){this.tableHeight=t-this.$refs.AddButton.$el.offsetHeight}},created:function(){var t=this;this.$nextTick((function(){t.tableHeight=t.contentHeight-t.$refs.AddButton.$el.offsetHeight})),this.upData()},methods:{add:function(t){this.$refs.editDialog.show(!1,JSON.parse(JSON.stringify(void 0===t?{}:t.data)),JSON.parse(JSON.stringify(this.treeData)))},upData:function(){var t=this;l["a"].getUnitTree(this.form).then((function(e){var n=e.data;t.treeData=n.data.unitTree}))},change:function(t){this.$refs.editDialog.show(!0,JSON.parse(JSON.stringify(t.data)),JSON.parse(JSON.stringify(this.treeData)))},remove:function(t){var e=this,n=t.data.id;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l["a"].deleteUnit({id:n}).then((function(t){var n=t.data;Object(d["a"])(n),n.result&&e.upData()}))}))}},computed:b({},Object(r["b"])({contentHeight:"getContentHeight"})),components:{UnitDialog:m}},v=y,O=(n("5f26"),Object(p["a"])(v,i,a,!1,null,"6d386aa5",null));e["default"]=O.exports},"456d":function(t,e,n){var i=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(t){return a(i(t))}}))},"5eda":function(t,e,n){var i=n("5ca1"),a=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",r)}},"5f26":function(t,e,n){"use strict";var i=n("d891"),a=n.n(i);a.a},"64bd":function(t,e,n){"use strict";var i=n("b775");e["a"]={getUnitTree:function(t){return Object(i["a"])({method:"post",url:"/unit/tree",data:t})},addUnit:function(t){return Object(i["a"])({method:"put",url:"/unit",data:t})},updateUnit:function(t){return Object(i["a"])({method:"patch",url:"/unit",data:t})},deleteUnit:function(t){return Object(i["a"])({method:"delete",url:"/unit",data:t})}}},"8e6e":function(t,e,n){var i=n("5ca1"),a=n("990b"),o=n("6821"),r=n("11e9"),s=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),c=r.f,l=a(i),d={},u=0;while(l.length>u)n=c(i,e=l[u++]),void 0!==n&&s(d,e,n);return d}})},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},9873:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("5c96");function a(t){var e=t.result,n=t.msg;Object(i["Notification"])({customClass:"custom-message-box-z-index",title:"操作"+(e?"成功":"失败"),message:e?null:n,type:e?"success":"error"})}},"990b":function(t,e,n){var i=n("9093"),a=n("2621"),o=n("cb7c"),r=n("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var e=i.f(o(t)),n=a.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var i=n("cadf"),a=n("0d58"),o=n("2aba"),r=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),d=l("iterator"),u=l("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(p),m=0;m<h.length;m++){var g,b=h[m],y=p[b],v=r[b],O=v&&v.prototype;if(O&&(O[d]||s(O,d,f),O[u]||s(O,u,b),c[b]=f,y))for(g in i)O[g]||o(O,g,i[g],!0)}},d891:function(t,e,n){var i=n("2d31");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("499e").default;a("29ba7169",i,!0,{sourceMap:!0,shadowMode:!1})},f1ae:function(t,e,n){"use strict";var i=n("86cc"),a=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}}}]);