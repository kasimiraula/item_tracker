(this.webpackJsonpitem_manager=this.webpackJsonpitem_manager||[]).push([[0],{10:function(e,t,n){},22:function(e,t,n){e.exports=n(46)},28:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),u=(n(10),n(20)),i=n(21),s=n(1),l=n.n(s),m=n(4),p=n(3),d=n(8),f=n.n(d),v=(n(28),n(5)),h=n.n(v),b="/api/items",g=null,E={getAll:function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(m.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(b,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return h.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){var t={headers:{Authorization:g}};return h.a.delete("".concat(b,"/").concat(e),t)},updateUse:function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(b,"/").concat(t,"/use"),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)}},y=function(e){var t=Object(a.useState)(!0),n=Object(p.a)(t,2),c=n[0],o=n[1],u={display:c?"none":""};var i=0===e.item.use.length?0:e.item.use.map((function(e){return e.amount})).reduce((function(e,t){return e+t})),s=0===e.item.use.length?"This item hasn't been used":"previously used ".concat(function(e){var t=e.split("T");return t[1]=t[1].split(".")[0],t}(e.item.use[e.item.use.length-1].date)[0]);console.log(e.item.name,s);return r.a.createElement("div",{onClick:function(){o(!c)}},r.a.createElement("div",{className:"list-item-mini-info"},r.a.createElement("p",{style:{marginBottom:2,cursor:"pointer"}},e.item.name)),r.a.createElement("div",{className:"list-item-detail-info",style:u},r.a.createElement("p",{style:{fontSize:13,marginBottom:1,marginTop:1}},s),r.a.createElement("p",{style:{fontSize:13,marginBottom:1,marginTop:1}},"in total used for ",i," ",e.item.units),r.a.createElement("p",{style:{fontSize:15,marginBottom:2}},"log new use"),e.item.common_usecases.map((function(t){return r.a.createElement("button",{key:t,className:"usecase-log-button",onClick:function(){return e.increaseUse(e.item.id,t)}},t," ",e.item.units)})),r.a.createElement("p",null,r.a.createElement("a",{style:{backgroundColor:"grey",color:"white",textDecoration:"none",borderRadius:5,fontSize:18,padding:5,cursor:"pointer"},href:"/items/".concat(e.item.id)},"Show more"))))},w=function(e){var t=e.items.sort((function(e,t){return t.name.toUpperCase()-e.name.toUpperCase()}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Items"),t.map((function(t){return r.a.createElement(y,{key:t.id,item:t,increaseUse:e.handleIncrease})})))},O=function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=(n[0],n[1],Object(a.useState)(!1)),o=Object(p.a)(c,2),u=o[0],i=o[1],s=Object(a.useState)(""),l=Object(p.a)(s,2),m=l[0],d=l[1],f=Object(a.useState)([]),v=Object(p.a)(f,2),h=v[0],b=v[1],g=Object(a.useState)(""),E=Object(p.a)(g,2),y=E[0],w=E[1];var O=function(e){var t=e.target.value;d(t)},j={display:u?"":"none"},k={display:0===h.length?"none":""},x={display:""===y?"none":"",backgroundColor:"coral"},S={display:h.length>0?"":"none",backgroundColor:"teal"};return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){i(!u)},style:{cursor:"pointer"}},r.a.createElement("h3",null,"Add new item")),r.a.createElement("div",{style:j},r.a.createElement("form",{onSubmit:function(t){try{t.preventDefault();var n={name:t.target.name.value,units:t.target.units.value,use:[],common_usecases:h};e.handleAddItem(n),t.target.name.value="",t.target.units.value="",w(""),b([])}catch(r){var a="couldn't add new item due to an error: ".concat(r);alert(a)}}},"name: \u2003",r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),"What do you measure?",r.a.createElement("br",null),r.a.createElement("input",{onChange:O,type:"radio",id:"km",name:"units",value:"km"}),"distance \xa0",r.a.createElement("input",{onChange:O,type:"radio",id:"h",name:"units",value:"h"}),"time",r.a.createElement("br",null),r.a.createElement("br",null),"Add common usecases for the item",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){var t=e.target.value;w(t)},value:y,type:"number"}),r.a.createElement("p",{style:x,onClick:function(e){var t=function(e){var t=parseInt(e);return!parseInt(t)&1==parseInt(t)?"only numbers!":h.indexOf(t)>=0?"You have already added this usecase!":t<=0?"Only positive values to usecases":"no errors"}(y);"no errors"===t?(b(h.concat(parseInt(y))),w("")):console.log("".concat(t))}},"Add"),r.a.createElement("p",{style:k},"[",h.map((function(e){return r.a.createElement("a",null," ",e,m," ")})),"] \u2003 ",r.a.createElement("a",{style:S,onClick:function(){b([])}}," clear ")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Add a new item"),r.a.createElement("br",null),r.a.createElement("br",null))))},j=function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),o=Object(p.a)(c,2),s=o[0],d=o[1],v=Object(a.useState)(""),h=Object(p.a)(v,2),b=h[0],g=h[1];if(Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),void 0===s)return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})));var y=s.filter((function(e){return-1!==e.name.toLowerCase().indexOf(b.toLowerCase())})),j=function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={date:(new Date).toISOString(),amount:Number(n)},r=s.find((function(e){return e.id===t})),c=Object(i.a)({},r,{use:r.use.concat([a])}),!window.confirm("Add ".concat(n).concat(r.units," for ").concat(r.name,"?"))){e.next=7;break}return e.next=6,E.updateUse(t,a);case 6:d(s.map((function(e){return e.id!==t?e:c})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.create(t);case 3:n=e.sent,d([].concat(Object(u.a)(s),[n.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("could not add '".concat(t.name,"' to items"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("input",{onChange:function(e){g(e.target.value)},value:b}),r.a.createElement(w,{items:y,handleIncrease:j}),r.a.createElement(O,{handleAddItem:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[22,1,2]]]);
//# sourceMappingURL=main.baa4b950.chunk.js.map