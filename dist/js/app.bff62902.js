(function(t){function a(a){for(var n,s,i=a[0],l=a[1],o=a[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(f.length)f.shift()();return c.push.apply(c,o||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],n=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(n=!1)}n&&(c.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},c=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var o=0;o<i.length;o++)a(i[o]);var u=l;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("8a23"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{dark:""}},[e("v-app-bar",{attrs:{color:"blue-grey",dark:"","align-center":"",app:"","clipped-left":""}},[e("div",{staticClass:"d-flex align-center"},[e("h2",{staticClass:"title"},[t._v("Last Launch: Space-X")])])]),e("v-main",{staticClass:"info-container"},[e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs8:"","offset-md2":""}},[e("v-card",{staticClass:"my-3",attrs:{hover:""}},[e("v-img",{staticClass:"space-x",attrs:{src:"https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg",height:"100%"}}),e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-layout",[e("v-flex",{attrs:{xs12:"","align-center":"","d-flex":""}},[e("span",{staticClass:"headline"},[t._v("Launch "+t._s(t.lastLaunch.data.name))])])],1),e("v-card-text",[e("h4",{staticClass:"subtitle"},[t._v("Launch details")]),e("p",[t._v(t._s(t.lastLaunch.data.details))]),e("h4",{staticClass:"subtitle"},[t._v("Launch name:")]),e("p",[t._v(t._s(t.lastLaunch.data.name))]),e("h4",{staticClass:"subtitle"},[t._v("Local date launch:")]),e("p",[t._v(t._s(t.lastLaunch.data.date_local))])])],1)],1)],1)],1)],1)],1)],1)},c=[],s=(e("96cf"),e("1da1")),i=e("bc3a"),l=e.n(i),o={name:"App",data:function(){return{lastLaunch:{data:""}}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:l.a.get("https://api.spacexdata.com/v4/launches/latest").then((function(a){return t.lastLaunch=a}));case 1:case"end":return a.stop()}}),a)})))()}},u=o,p=(e("034f"),e("2877")),f=e("6544"),d=e.n(f),v=e("7496"),h=e("40dc"),b=e("b0af"),g=e("99d9"),y=e("a523"),_=e("0e8f"),m=e("adda"),x=e("a722"),w=e("f6c4"),L=Object(p["a"])(u,r,c,!1,null,null,null),O=L.exports;d()(L,{VApp:v["a"],VAppBar:h["a"],VCard:b["a"],VCardText:g["a"],VContainer:y["a"],VFlex:_["a"],VImg:m["a"],VLayout:x["a"],VMain:w["a"]});var j=e("f309");n["a"].use(j["a"]);var C=new j["a"]({});e("bf40");n["a"].use(C),n["a"].config.productionTip=!1,new n["a"]({vuetify:C,render:function(t){return t(O)}}).$mount("#app")},"8a23":function(t,a,e){}});
//# sourceMappingURL=app.bff62902.js.map