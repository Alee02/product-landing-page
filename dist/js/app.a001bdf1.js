(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],p=0,f=[];p<u.length;p++)c=u[p],a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1251:function(e,t,n){},"4e55":function(e,t,n){"use strict";var r=n("c3fe"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LandingPage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{color:"primary",dark:"",fixed:"",app:""}},[n("v-spacer"),n("v-toolbar-title",[e._v(e._s(e.navTitle))]),n("v-spacer")],1),n("v-content",[n("h1",[e._v(e._s(e.title))]),n("h2",[e._v(e._s(e.subHeading))]),n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("v-img",{attrs:{src:e.productImg,"aspect-ratio":"2",contain:e.imageContain}})],1),n("v-flex",[n("Checkout")],1)],1)],1)],1),n("v-footer",{attrs:{color:"primary",app:""}},[n("span",{staticClass:"white--text"},[e._v("© "+e._s(e.currentYear))])])],1)},u=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"checkout"}},[n("vue-stripe-checkout",{ref:"checkoutRef",attrs:{image:e.image,name:e.name,description:e.description,currency:e.currency,amount:e.amount,"allow-remember-me":!1},on:{done:e.done,opened:e.opened,closed:e.closed,canceled:e.canceled}}),n("v-btn",{attrs:{color:"primary"},on:{click:e.checkout}},[e._v("Checkout")])],1)},s=[],l=(n("96cf"),n("3b8d")),p={name:"checkout",data:function(){return{image:"https://misbahshah.com/franquias/2/371212/editor-html/2402510.png",name:"Lazzat-e-ghum",description:"By Misbah Shah",currency:"GBP",amount:299}},created:function(){console.log("checkout component created")},methods:{checkout:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.checkoutRef.open();case 2:t=e.sent,t.token,t.args;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),done:function(e){e.token,e.args},opened:function(){},closed:function(){},canceled:function(){}}},f=p,d=(n("4e55"),n("2877")),h=Object(d["a"])(f,i,s,!1,null,null,null);h.options.__file="Checkout.vue";var v=h.exports,m={name:"LandingPage",components:{Checkout:v},props:{source:String,msg:String},data:function(){return{navTitle:"London Publish Press Ltd",currentYear:null,title:"Lazzat-e-Ghum",subHeading:"By Misbah Shah",productImg:"https://misbahshah.com/franquias/2/371212/editor-html/2402853.png",imageContain:!0}},methods:{getCurrentYear:function(){this.currentYear=(new Date).getFullYear()}},created:function(){this.getCurrentYear()},computed:{}},g=m,b=(n("aaec"),Object(d["a"])(g,c,u,!1,null,"57e1f1ac",null));b.options.__file="LandingPage.vue";var y=b.exports,_={name:"app",components:{LandingPage:y}},k=_,w=(n("034f"),Object(d["a"])(k,a,o,!1,null,null,null));w.options.__file="App.vue";var x=w.exports,j=n("ce5b"),O=n.n(j),P=(n("bf40"),n("c0a4")),C=n.n(P),S=n("af5a");r["default"].use(S["a"],"pk_live_NabI87Fil8TmdEMDXvVdnDy6"),r["default"].use(O.a,{theme:{primary:C.a.brown.darken2,secondary:C.a.brown.darken2,accent:C.a.brown.darken2}}),new r["default"]({render:function(e){return e(x)}}).$mount("#app")},"64a9":function(e,t,n){},aaec:function(e,t,n){"use strict";var r=n("1251"),a=n.n(r);a.a},c3fe:function(e,t,n){}});
//# sourceMappingURL=app.a001bdf1.js.map