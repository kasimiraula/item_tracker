(this.webpackJsonpitem_manager=this.webpackJsonpitem_manager||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){e.exports=n(69)},49:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(17),c=n.n(u),o=n(15),l=n(3),i=(n(28),n(2)),s=n.n(i),m=n(7),d=(n(49),n(50),n(20)),p=n(10),f=n(25),v=function(e){return{type:"INIT_ITEMS",data:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ITEMS":return t.data;case"UPDATE":var n=e.filter((function(e){return e.id!==t.data.id})),a=t.data;return[].concat(Object(f.a)(n),[a]);case"REMOVE":var r=e.filter((function(e){return e.id!==t.data.id}));return r;case"ADD_NEW":var u=t.data;return[].concat(Object(f.a)(e),[u]);case"CLEAR_ITEMS":return[];default:return e}},g=function(e){return{type:"LOGIN",data:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("loggedUser")),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},h=n(11),y=n.n(h),O="/api/items",w=null,j={getAll:function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:w}},e.next=3,y.a.get(O,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,y.a.post(O,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){var n={headers:{Authorization:w}};return y.a.put("".concat(O,"/").concat(e),t,n).then((function(e){return e.data}))},remove:function(e){var t={headers:{Authorization:w}};return y.a.delete("".concat(O,"/").concat(e),t)},updateUse:function(){var e=Object(m.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(w),a={headers:{Authorization:w}},e.next=4,y.a.post("".concat(O,"/").concat(t,"/use"),n,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){return w="bearer ".concat(e)}},k=function(e){var t=e.items,n=Object(p.f)().id,a=t.find((function(e){return e.id===n}));if(null===a||void 0===a||void 0===a.use)return r.a.createElement("div",null);var u=0===a.use.length?0:a.use.map((function(e){return e.amount})).reduce((function(e,t){return e+t}));return r.a.createElement("div",null,r.a.createElement("h2",null,a.name),r.a.createElement("div",null,r.a.createElement("p",null,"In total you have used this item for ",r.a.createElement("a",null,u," ",a.units))))},x=n(12),S=function(e){var t=Object(l.b)(),n=e.item,u=Object(a.useState)(!0),c=Object(x.a)(u,2),o=c[0],i=c[1],s={display:o?"none":""};var m=0===n.use.length?0:n.use.map((function(e){return e.amount})).reduce((function(e,t){return e+t})),d=0===n.use.length?"This item hasn't been used":"previously used ".concat(function(e){var t=e.split("T");return t[1]=t[1].split(".")[0],t}(n.use[n.use.length-1].date)[0]);return r.a.createElement("div",{onClick:function(){i(!o)}},r.a.createElement("div",{className:"list-item-mini-info"},r.a.createElement("p",{style:{marginBottom:2,cursor:"pointer"}},e.item.name)),r.a.createElement("div",{className:"list-item-detail-info",style:s},r.a.createElement("p",{style:{fontSize:13,marginBottom:1,marginTop:1}},d),r.a.createElement("p",{style:{fontSize:13,marginBottom:1,marginTop:1}},"in total used for ",m," ",n.units),r.a.createElement("p",null,r.a.createElement("a",{style:{backgroundColor:"grey",color:"white",textDecoration:"none",borderRadius:5,fontSize:18,padding:6,cursor:"pointer"},href:"/items/".concat(n.id)},"Show more")),r.a.createElement("p",{style:{fontSize:15,marginBottom:2}},"log new use"),n.common_usecases.map((function(e){return r.a.createElement("button",{key:e,className:"usecase-log-button",onClick:function(){return function(e,n){var a={date:(new Date).toISOString(),amount:Number(n)};window.confirm("Add ".concat(n).concat(e.units," for ").concat(e.name,"?"))?j.updateUse(e.id,a).then((function(e){return t(function(e,t){return{type:"UPDATE",data:e}}(e))})):console.log("nothing added")}(n,e)}},e," ",n.units)}))))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE":return t.data;default:return e}},C=function(e){var t=Object(l.b)();return r.a.createElement("div",{className:"filter"},r.a.createElement("p",null,"Filter items by their name"),r.a.createElement("input",{onChange:function(e){e.preventDefault();var n=e.target.value;t({type:"CHANGE",data:n})}}))},I=function(){var e=Object(l.c)((function(e){return e.visibilityFilter})),t=Object(l.c)((function(e){return e.items})),n=Object(l.c)((function(e){return e.loggedUser}));if(void 0===n||null===n)return r.a.createElement("div",null,r.a.createElement("p",null,"Log in to enjoy this application."));if(void 0===t||null===t)return r.a.createElement("div",null);var a=t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())})).sort((function(e,t){return e.name.toLowerCase()>=t.name.toLowerCase()?1:-1}));return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("h2",null,"Items"),a.map((function(e){return r.a.createElement(S,{key:e.id,item:e})})))},T=function(e){var t=Object(l.b)(),n=Object(a.useState)(!1),u=Object(x.a)(n,2),c=u[0],o=u[1],i=Object(a.useState)(""),d=Object(x.a)(i,2),p=d[0],f=d[1],v=Object(a.useState)(""),E=Object(x.a)(v,2),g=E[0],b=E[1],h=Object(a.useState)([]),y=Object(x.a)(h,2),O=y[0],w=y[1],k=Object(a.useState)(""),S=Object(x.a)(k,2),A=S[0],C=S[1];var I=function(){var e=Object(m.a)(s.a.mark((function e(n){var a,r,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),a={name:n.target.name.value,units:n.target.units.value,use:[],common_usecases:O},e.next=5,j.create(a);case 5:r=e.sent,C(""),w([]),f(""),b(""),o(!1),t({type:"ADD_NEW",data:r}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),u="couldn't add new item due to an error: ".concat(e.t0),alert(u);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),T={display:c?"":"none"},N={display:0===O.length?"none":""},L={display:""===A?"none":"",backgroundColor:"coral",borderWidth:0,padding:5,borderRadius:5,cursor:"pointer"},U={display:O.length>0?"":"none",backgroundColor:"teal",color:"white",borderWidth:0,padding:5,borderRadius:5,cursor:"pointer"};return r.a.createElement("div",{className:"itemform"},r.a.createElement("div",{onClick:function(){o(!c)},style:{cursor:"pointer"}},r.a.createElement("h3",null,"Add new item")),r.a.createElement("div",{style:T},r.a.createElement("p",null,r.a.createElement("a",null,"Use this form to give name and units for the new item."),r.a.createElement("br",null),r.a.createElement("a",null,"You can also set up common use quantities for faster logging.")),r.a.createElement("form",{onSubmit:I},"name: \u2003",r.a.createElement("input",{type:"text",name:"name",onChange:function(e){var t=e.target;return f(t.value)},value:p}),r.a.createElement("br",null),r.a.createElement("br",null),"What do you measure?",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){var t=e.target;return b(t.value)},type:"radio",id:"km",name:"units",value:"km"}),"distance \xa0",r.a.createElement("input",{onChange:function(e){var t=e.target;return b(t.value)},type:"radio",id:"h",name:"units",value:"h"}),"time",r.a.createElement("br",null),r.a.createElement("br",null),"Add common usecases for the item",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){var t=e.target;return C(t.value)},type:"number",value:A}),r.a.createElement("p",null,r.a.createElement("button",{type:"button",style:L,onClick:function(e){var t=function(e){var t=parseInt(e);return!parseInt(t)&0!==parseInt(t)?"only numbers!":O.indexOf(t)>=0?"You have already added this usecase!":t<=0?"Only positive values to usecases":"no errors"}(A);"no errors"===t?(w(O.concat(parseInt(A))),C("")):(console.log("".concat(t)),C(""))}},"Add")),r.a.createElement("p",{style:N},"[",O.map((function(e){return r.a.createElement("a",{key:e}," ",e,g," ")})),"] \u2003 ",r.a.createElement("button",{type:"button",style:U,onClick:function(){w([])}}," clear ")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Add a new item"),r.a.createElement("br",null),r.a.createElement("br",null))))},N={login:function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){var t=Object(l.b)(),n=function(){var e=Object(m.a)(s.a.mark((function e(n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,N.login({username:n.target.username.value,password:n.target.password.value});case 4:a=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a)),r="Succesfully logged in as ".concat(a.name),j.setToken(a.token),t(g(a)),j.getAll().then((function(e){return t(v(e))})),console.log(r),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),"username or password was incorrect",console.log("username or password was incorrect");case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Log in"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"username \xa0",r.a.createElement("input",{type:"text",name:"username"})),r.a.createElement("div",null,"password \xa0",r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("button",{style:{marginTop:"5px"}},"log in")))},U=function(){var e=Object(l.b)();Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("loggedUser"));e&&j.setToken(e.token)}),[]),Object(a.useEffect)((function(){t&&j.getAll().then((function(t){return e(v(t))}))}),[]);var t=Object(l.c)((function(e){return e.loggedUser})),n=Object(l.c)((function(e){return e.items})),u=function(){var e={display:null===t?"none":"",backgroundColor:"darkGrey",color:"black",padding:5,borderRadius:5,cursor:"pointer",float:"right",marginRight:"25px"};return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{style:{float:"left",marginLeft:"25px"}},"Logged in as ",t.name),r.a.createElement("a",{style:e,onClick:c},"logout")),r.a.createElement("br",null))},c=function(){var t=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.setToken(null);case 2:return t.next=4,localStorage.removeItem("loggedUser");case 4:e({type:"LOGOUT"}),e({type:"CLEAR_ITEMS"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/"},r.a.createElement("p",null,"[ FRONTPAGE ]")),null!==t&&r.a.createElement(u,null),(void 0===t||null===t)&&r.a.createElement(L,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(I,null)),r.a.createElement(p.a,{exact:!0,path:"/items/:id"},r.a.createElement(k,{items:n}))),null!==t&&r.a.createElement(T,null))))},D=Object(o.b)({items:E,loggedUser:b,visibilityFilter:A}),_=Object(o.c)(D);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:_},r.a.createElement(U,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3f41a7d9.chunk.js.map