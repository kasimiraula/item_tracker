(this.webpackJsonpitem_manager=this.webpackJsonpitem_manager||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){e.exports=n(46)},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),l=(n(8),n(20)),i=n(21),u=n(2),m=n(18),s=n.n(m),d=(n(27),n(6),n(19),n(3)),f=n.n(d),g="http://localhost:3001/api/items",p=function(){return f.a.get(g)},E=function(e){return f.a.post(g,e)},b=function(e,t){return f.a.put("".concat(g,"/").concat(e),t)},h=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),o=n[0],c=n[1],l={display:o?"none":""},i=0===e.item.usage.length?0:e.item.usage.map((function(e){return e.amount})).reduce((function(e,t){return e+t}));return r.a.createElement("div",{onClick:function(){c(!o)}},r.a.createElement("div",{className:"list-item-mini-info"},r.a.createElement("p",{style:{marginBottom:2,cursor:"pointer"}},e.item.name)),r.a.createElement("div",{className:"list-item-detail-info",style:l},r.a.createElement("p",{style:{fontSize:16,marginBottom:1,marginTop:1}},"used for ",i," ",e.item.units),r.a.createElement("p",{style:{fontSize:15,marginBottom:2}},"log new use"),e.item.common_usage.map((function(t){return r.a.createElement("button",{key:t,className:"usage-log-button",onClick:function(){return e.increaseUsage(e.item.id,t)}},t," ",e.item.units)})),r.a.createElement("p",null,r.a.createElement("a",{style:{backgroundColor:"grey",color:"white",textDecoration:"none",borderRadius:5,fontSize:18,padding:5,cursor:"pointer"},href:"/items/".concat(e.item.id)},"Show more"))))},v=function(e){var t=e.items.sort((function(e,t){return t.name.toUpperCase()-e.name.toUpperCase()}));return console.log(t),r.a.createElement("div",null,r.a.createElement("h2",null,"Items"),t.map((function(t){return r.a.createElement(h,{key:t.id,item:t,increaseUsage:e.handleIncrease})})))},y=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),o=(n[0],n[1],Object(a.useState)("")),c=Object(u.a)(o,2),l=c[0],i=c[1],m=Object(a.useState)([]),s=Object(u.a)(m,2),d=s[0],f=s[1],g=Object(a.useState)(""),p=Object(u.a)(g,2),E=p[0],b=p[1],h=function(e){var t=e.target.value;i(t)},v={display:0===d.length?"none":""},y={display:""===E?"none":"",backgroundColor:"coral"},O={display:d.length>0?"":"none",backgroundColor:"teal"};return r.a.createElement("div",null,r.a.createElement("h2",null,"Add new item"),r.a.createElement("form",{onSubmit:function(t){try{t.preventDefault();var n={name:t.target.name.value,units:t.target.units.value,usage:[],common_usage:d};e.handleAddItem(n),t.target.name.value="",t.target.units.value="",b(""),f([])}catch(r){var a="couldn't add new blog due to an error: ".concat(r);alert(a)}}},"name: \u2003",r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),"What do you measure?",r.a.createElement("br",null),r.a.createElement("input",{onChange:h,type:"radio",id:"km",name:"units",value:"km"}),"distance \xa0",r.a.createElement("input",{onChange:h,type:"radio",id:"h",name:"units",value:"h"}),"time",r.a.createElement("br",null),r.a.createElement("br",null),"Add common usecases for the item",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){var t=e.target.value;b(t)},value:E,type:"number"}),r.a.createElement("p",{style:y,onClick:function(e){var t=E;f(d.concat(t)),b("")}},"Add"),r.a.createElement("p",{style:v},"[",d.map((function(e){return r.a.createElement("a",null," ",e,l," ")})),"] \u2003 ",r.a.createElement("a",{style:O,onClick:function(){f([])}}," clear ")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Add a new item"),r.a.createElement("br",null),r.a.createElement("br",null)))},O=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),o=n[0],c=(n[1],Object(a.useState)([])),m=Object(u.a)(c,2),d=m[0],f=m[1],g=Object(a.useState)(""),h=Object(u.a)(g,2),O=h[0],j=h[1];Object(a.useEffect)((function(){p().then((function(e){f(e.data)}))}),[]);var w=d.filter((function(e){return-1!==e.name.toLowerCase().indexOf(O.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement("input",{onChange:function(e){j(e.target.value)},value:O}),r.a.createElement(v,{items:w,handleIncrease:function(e,t){var n=d.find((function(t){return t.id===e})),a=Object(i.a)({},n,{usage:n.usage.concat([{date:(new Date).toISOString(),amount:t}])});b(e,a).then((function(t){f(d.map((function(n){return n.id!==e?n:t.data})))})).catch((function(t){alert("could not add usage to ".concat(o.name,". check logs for more info.")),f(d.filter((function(t){return t.id!==e})))}))}}),r.a.createElement(y,{handleAddItem:function(e){E(e).then((function(e){f([].concat(Object(l.a)(d),[e.data]))})).catch((function(t){alert("could not add '".concat(e.name,"' to items"))}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.1ad57c64.chunk.js.map