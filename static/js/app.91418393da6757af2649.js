webpackJsonp([1],{"+qaf":function(t,e){},MTrL:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("MTrL")}function o(t){i("+qaf")}function s(t){i("ewON")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("VCXJ"),r=i("HVJf"),l=i("iDdd"),c=i.n(l),d=i("zO6J"),u={name:"app"},h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view",{staticClass:"child"})],1)},m=[],f={render:h,staticRenderFns:m},p=f,v=i("Mw9A"),w=n,_=v(u,p,!1,w,null,null),g=_.exports,b={name:"List",data:function(){return{list:[]}},mounted:function(){var t=this;this.$http.get("https://www.xueguoguo.cn/wxapi/Article?funcid=list",{}).then(function(e){console.log(e.data),t.list=e.data.list})},methods:{goEach:function(t){this.$store.state.listId=t,console.log(this.$store.state.listId),this.$router.push({path:"/Item?"+this.$store.state.listId})}}},x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),t._l(t.list,function(e){return i("div",{staticClass:"information",on:{click:function(i){t.goEach(e.id)}}},[i("div",{staticClass:"item_box"},[i("div",{staticStyle:{width:"2.6rem",height:"1.52rem","margin-right":"0.24rem"}},[i("img",{attrs:{src:e.avaitar}})]),t._v(" "),i("div",{staticStyle:{width:"4.26rem"}},[i("h2",{staticStyle:{"font-size":"0.30rem",color:"#232427","letter-spacing":"0","line-height":"0.6rem","white-space":"normal","font-weight":"bold",overflow:"hidden","-webkit-line-clamp":"1",display:"-webkit-box","text-overflow":"ellipsis","-webkit-box-orient":"vertical"}},[t._v(t._s(e.title)+"\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t")]),t._v(" "),i("p",{staticStyle:{"margin-top":"0.18rem","font-size":"0.24rem",color:"#8E8E8E","letter-spacing":"0","line-height":"0.4rem","white-space":"normal",overflow:"hidden","-webkit-line-clamp":"2",display:"-webkit-box","text-overflow":"ellipsis","-webkit-box-orient":"vertical"}},[t._v(t._s(e.summary))])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"0.3rem",float:"left"}})])})],2)},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"vertical_line"}),t._v(" "),i("span",{staticClass:"font_color header_title"},[t._v("高考头条")])])}],y={render:x,staticRenderFns:$},E=y,k=i("Mw9A"),I=o,C=k(b,E,!1,I,"data-v-09c55206",null),M=C.exports,S={name:"Item",data:function(){return{id:this.$store.state.listId,content:""}},mounted:function(){document.documentElement.scrollTop=0;var t=this;this.$http.get("https://www.xueguoguo.cn/wxapi/Article?funcid=info&id="+t.id,{}).then(function(e){console.log(e.data),t.content=e.data.result[0].content})},methods:{}},A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{"font-size":"0.34rem"},domProps:{innerHTML:t._s(t.content)}})])},T=[],z={render:A,staticRenderFns:T},H=z,J=i("Mw9A"),L=s,N=J(S,H,!1,L,null,null),O=N.exports,F=i("EgYw");a.a.use(d.a),a.a.use(F.a),a.a.use(r.a);var R=[{path:"/",component:M},{path:"/Item",component:O}],q=new r.a.Store({state:{listId:0},mutations:{}}),P=new d.a({routes:R});c.a.attach(document.body),a.a.config.productionTip=!1,new a.a({router:P,store:q,render:function(t){return t(g)}}).$mount("#app-box")},ewON:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.91418393da6757af2649.js.map