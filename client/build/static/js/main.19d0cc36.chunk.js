(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,a,t){},24:function(e,a,t){e.exports=t(54)},29:function(e,a,t){},36:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(22),c=t.n(r),o=(t(29),t(4)),s=t(1),m=(t(36),t(3)),d=t(2),i=t.n(d);t(7);var u=function(){return n.a.createElement("div",null,n.a.createElement("a",{className:"logout",onClick:function(){i.a.get("http://localhost:2030/api/v3/logout",{withCredentials:!0}).then((function(e){localStorage.clear(),Object(s.c)("/")})).catch((function(e){return console.log(e)}))}},"Log out"))},b=Object(l.createContext)(),E=(t(10),t(8),function(){var e=Object(l.useContext)(b);return Object(l.useEffect)((function(){null===localStorage.getItem("userid")?Object(s.c)("/"):(console.log(localStorage.getItem("userid")),i.a.get("http://localhost:2030/api/v3/readOne/".concat(localStorage.getItem("userid")),{withCredentials:!0}).then((function(a){return e.setState(Object(m.a)({},a.data))})).catch((function(e){return console.log(e)})))}),[]),n.a.createElement("div",{className:"body "},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-9 col-ml-9 col-lg-9  lagout"}," ",n.a.createElement(u,null))),n.a.createElement("div",{className:"dashBoard"},n.a.createElement("h3",null,"Welcome to Back  ",n.a.createElement("span",{style:{color:"rgb(113, 120, 123)"}},e.state.firstName),"! "),n.a.createElement("div",{class:"row"},n.a.createElement("div",{className:"col-sm-6 col-ml-6 col-lg-6"}," ",n.a.createElement("button",null,n.a.createElement(s.a,{className:"link",to:"/list"}," Check your list"))),n.a.createElement("div",{className:"col-sm-6 col-ml-6 col-lg-6"}," ",n.a.createElement("button",null," ",n.a.createElement(s.a,{className:"link",to:"/addboard"},"add new Board"))))))});var h=function(e){var a=Object(l.useContext)(b);return n.a.createElement("div",{id:e.id,className:e.className,onDrop:function(t){t.preventDefault();var l=JSON.parse(t.dataTransfer.getData("card_id")),n=Object(m.a)({},a.state);n.boards[e.boardIndex][e.column].items.push(n.boards[e.boardIndex][l.column].items[l.index]),n.boards[e.boardIndex][l.column].items.splice(l.index,1),i.a.put("http://localhost:2030/api/v3/updateOne/".concat(a.state._id),n,{withCredentials:!0}).then((function(e){a.setRefresh(!a.refresh)})).catch((function(e){return console.log(e)}))},onDragOver:function(e){e.preventDefault()}},e.children)};var g=function(e){return n.a.createElement("div",{id:e.index,className:e.className,onDragStart:function(a){a.target;a.dataTransfer.setData("card_id",JSON.stringify({column:e.column,index:e.index}))},onDragOver:function(e){e.stopPropagation()},draggable:e.draggable},e.children)};t(11);var f=function(){var e=Object(l.useContext)(b);Object(l.useEffect)((function(){null===localStorage.getItem("userid")?Object(s.c)("/"):i.a.get("http://localhost:2030/api/v3/readOne/".concat(localStorage.getItem("userid")),{withCredentials:!0}).then((function(a){return e.setState(Object(m.a)({},a.data))})).catch((function(e){return console.log(e)}))}),[e.refresh]);var a=function(a,t,l,n,r){a.preventDefault();var c=Object(m.a)({},e.state);console.log(c.boards[n][l]),c.boards[n][l].items.splice(r,1),i.a.put("http://localhost:2030/api/v3/updateOne/".concat(e.state._id),c,{withCredentials:!0}).then((function(a){e.setRefresh(!e.refresh)})).catch((function(e){return console.log(e)}))};return n.a.createElement("div",{style:{backgroundColor:"rgb(183, 209, 228)"}},e.state.boards&&n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-10 col-sm-10  col-ml-10 col-xs-10 boardlist"},n.a.createElement("h4",null,"list of your Board:"),0!=e.state.boards?n.a.createElement("div",null,e.state.boards.map((function(a,t){return n.a.createElement("button",{key:t,onClick:function(a){return function(a,t){e.setBoard(t)}(0,t)}},a.name,n.a.createElement("li",{className:"fa fa-trash","aria-hidden":"true",onClick:function(a){return function(a,t,l){a.preventDefault();var n=Object(m.a)({},e.state);console.log(n.boards[t]),n.boards.splice(l,1),i.a.put("http://localhost:2030/api/v3/updateOne/".concat(e.state._id),n,{withCredentials:!0}).then((function(a){e.setRefresh(!e.refresh)})).catch((function(e){return console.log(e)}))}(a,e.board,t)}}))}))):n.a.createElement("p",{style:{color:"purple"}},"First add new Board Please  ",n.a.createElement(s.a,{to:"/addboard"},"Add")),n.a.createElement("p",null,"Choose your board  :",n.a.createElement(s.a,{to:"/addtask"},"add new task on your board"))),n.a.createElement("div",{className:"col-12 col-md-2  col-sm-2  col-ml-2 col-xs-2"},n.a.createElement("div",{className:"row ",style:{marginTop:"90px",marginRight:"12px"}},n.a.createElement("div",{className:"col-sm-5 col-ml-5 col-lg-5  lagout",style:{color:"rgb(0, 56, 96)"}}," ",n.a.createElement(u,null)," "),n.a.createElement("div",{className:"col-sm-7 col-ml-7 col-lg-7 dash"},n.a.createElement("i",{className:"fa fa-home fa-home",style:{color:"rgb(0, 56, 96)"}}),n.a.createElement(s.a,{style:{color:"rgb(0, 56, 96)"},to:"/dashboard"},"DashBoard"))))),n.a.createElement("div",{style:{marginTop:"20px"}},n.a.createElement("main",{className:"flexbox"},n.a.createElement(h,{boardIndex:e.board,id:"column1",className:"board",column:"column1"},n.a.createElement("h2",null,"Request"),e.state.boards[e.board]&&e.state.boards[e.board].column1&&e.state.boards[e.board]&&e.state.boards[e.board].column1.items.map((function(t,l){return n.a.createElement("div",{key:l},n.a.createElement(g,{column:"column1",index:l,className:"card",draggable:"true"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-12 col-ml-12 col-lg-12",style:{textAlign:"right",marginTop:"0px"}},"   ",n.a.createElement("li",{className:"fa fa-trash","aria-hidden":"true",onClick:function(t){return a(t,0,"column1",e.board,l)}})),n.a.createElement("div",{className:"col-12 col-sm-12 col-ml-12 col-lg-12"},n.a.createElement("b",null,"Task Name: "),t.name),n.a.createElement("div",{className:"col-12 col-sm-12 col-ml-12 col-lg-12"},n.a.createElement("b",null,"Due Date: ")," ",n.a.createElement("span",{style:{color:new Date(t.duedate).getTime()-(new Date).getTime()<0?"red":"rgb(0, 56, 96)"}},t.duedate))))," ")}))),n.a.createElement(h,{boardIndex:e.board,id:"column2",className:"board",column:"column2"},n.a.createElement("h2",null,"Started"),e.state.boards[e.board]&&e.state.boards[e.board].column2&&e.state.boards[e.board]&&e.state.boards[e.board].column2.items.map((function(t,l){return n.a.createElement("div",{key:l},n.a.createElement(g,{column:"column2",index:l,className:"card",draggable:"true"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-12 col-ml-12 col-lg-12",style:{textAlign:"right",marginTop:"0px"}},"   ",n.a.createElement("li",{className:"fa fa-trash","aria-hidden":"true",onClick:function(t){return a(t,0,"column2",e.board,l)}})),n.a.createElement("div",null,n.a.createElement("b",null,"Task Name: "),t.name)))," ")}))),n.a.createElement(h,{boardIndex:e.board,id:"column3",className:"board",column:"column3"},n.a.createElement("h2",null,"On process"),e.state.boards[e.board]&&e.state.boards[e.board].column3&&e.state.boards[e.board]&&e.state.boards[e.board].column3.items.map((function(t,l){return n.a.createElement("div",{key:l},n.a.createElement(g,{column:"column3",index:l,className:"card",draggable:"true"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-12 col-ml-12 col-lg-12",style:{textAlign:"right",marginTop:"0px"}},"   ",n.a.createElement("li",{className:"fa fa-trash","aria-hidden":"true",onClick:function(t){return a(t,0,"column3",e.board,l)}})),n.a.createElement("div",null,n.a.createElement("b",null,"Task Name: "),t.name)))," ")}))),n.a.createElement(h,{boardIndex:e.board,id:"column4",className:"board",column:"column4"},n.a.createElement("h2",null,"Done"),e.state.boards[e.board]&&e.state.boards[e.board].column4&&e.state.boards[e.board]&&e.state.boards[e.board].column4.items.map((function(t,l){return n.a.createElement("div",{key:l},n.a.createElement(g,{column:"column4",index:l,className:"card",draggable:"true"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-12 col-ml-12 col-lg-12",style:{textAlign:"right",marginTop:"0px"}},"   ",n.a.createElement("li",{className:"fa fa-trash","aria-hidden":"true",onClick:function(t){return a(t,0,"column4",e.board,l)}})),n.a.createElement("div",null,n.a.createElement("b",null,"Task Name: "),t.name)))," ")})))))))},p=t(6),v=function(){var e=Object(l.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",boards:[]}),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)([]),d=Object(o.a)(c,2),u=d[0],b=d[1],E=function(e){r(Object(m.a)({},t,Object(p.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",null,n.a.createElement("h1",null,"Register"),u.map((function(e,a){return n.a.createElement("p",{key:a},e)})),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.a.post("http://localhost:2030/api/v3/register",t,{withCredentials:!0}).then((function(e){if(e.data.errors){var a=[];for(var t in e.data.errors)a.push(e.data.errors[t].message);b(a)}else localStorage.setItem("userid",e.data._id),Object(s.c)("/dashboard")})).catch((function(e){return console.log(e)}))}},n.a.createElement("p",null,"First Name"),n.a.createElement("input",{type:"text",name:"firstName",onChange:E}),n.a.createElement("p",null,"Last Name"),n.a.createElement("input",{type:"text",name:"lastName",onChange:E}),n.a.createElement("p",null,"Email"),n.a.createElement("input",{type:"email",name:"email",onChange:E}),n.a.createElement("p",null,"Password"),n.a.createElement("input",{type:"password",name:"password",onChange:E}),n.a.createElement("p",null,"Confirm Password"),n.a.createElement("input",{type:"password",name:"confirmPassword",onChange:E}),n.a.createElement("p",null," ",n.a.createElement("button",{type:"submit"},"Register"))))},N=function(e){var a=Object(l.useState)({email:"",password:""}),t=Object(o.a)(a,2),r=t[0],c=t[1],d=Object(l.useState)(""),u=Object(o.a)(d,2),b=u[0],E=u[1],h=function(e){c(Object(m.a)({},r,Object(p.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",null,n.a.createElement("h1",null,"Login"),b,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.a.post("http://localhost:2030/api/v3/login",r,{withCredentials:!0}).then((function(e){e.data.errors?E(e.data.errors):(localStorage.setItem("userid",e.data._id),Object(s.c)("/dashboard"))})).catch((function(e){return console.log(e)}))}},n.a.createElement("p",null,"Email"),n.a.createElement("input",{type:"email",name:"email",onChange:h}),n.a.createElement("p",null,"Password"),n.a.createElement("input",{type:"password",name:"password",onChange:h}),n.a.createElement("p",null," ",n.a.createElement("button",{type:"submit"},"Login"))))},O=function(){return n.a.createElement("div",{className:" body"},n.a.createElement("div",{className:"row reglog"},n.a.createElement("div",{className:"col-12 col-sm-6 col-lg-6 col-ml-6 "},n.a.createElement(v,null)),n.a.createElement("div",{className:"col-12 col-sm-6 col-lg-6 col-ml-6 "},n.a.createElement(N,null))))};var j=function(){var e=Object(l.useContext)(b),a=Object(l.useState)({name:"",duedate:""}),t=Object(o.a)(a,2),r=t[0],c=t[1],d=Object(l.useState)({}),E=Object(o.a)(d,2),h=(E[0],E[1],function(e){c(Object(m.a)({},r,Object(p.a)({},e.target.name,e.target.value)))});return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-9 col-ml-9 col-lg-9  lagout"}," ",n.a.createElement(u,null)," "),n.a.createElement("div",{className:"col-sm-3 col-ml-3 col-lg-3 dash"},n.a.createElement("i",{className:"fa fa-home fa-home"}),n.a.createElement(s.a,{style:{color:"rgb(183, 187, 189)"},to:"/dashboard"},"DashBoard"))),n.a.createElement("div",{className:"dashBoard"},r.name.length>0&&r.name.length<3?n.a.createElement("p",null,"the name has to have 3 min char"):n.a.createElement("p",null),n.a.createElement("h3",null,"Add a Task"),n.a.createElement("form",{className:"formtask",onSubmit:function(a){a.preventDefault();var t=Object(m.a)({},e.state);t.boards[e.board].column1.items.push(r),i.a.put("http://localhost:2030/api/v3/updateOne/".concat(t._id),t,{withCredentials:!0}).then((function(a){console.log(a),a.data.errors||(e.setRefresh(!e.refresh),Object(s.c)("/list"))})).catch((function(e){return console.log(e)}))}},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Name Project:"),n.a.createElement("td",null,n.a.createElement("input",{type:"text",name:"name",onChange:h}))),n.a.createElement("tr",null,n.a.createElement("td",null,"due date:"),n.a.createElement("td",null,n.a.createElement("input",{type:"date",name:"duedate",onChange:h}))),n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null,n.a.createElement("button",{className:"button"},"Add Board"))))))))};var w=function(){var e=Object(l.useContext)(b);console.log(e.state);var a=Object(l.useState)({name:"",column1:{name:"request",items:[]},column2:{name:"start",items:[]},column3:{name:"on process",items:[]},column4:{name:"done",items:[]}}),t=Object(o.a)(a,2),r=t[0],c=t[1],d=Object(l.useState)(0),E=Object(o.a)(d,2);return E[0],E[1],n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-9 col-ml-9 col-lg-9  lagout"}," ",n.a.createElement(u,null)," "),n.a.createElement("div",{className:"col-sm-3 col-ml-3 col-lg-3 dash"},n.a.createElement("i",{className:"fa fa-home fa-home"}),n.a.createElement(s.a,{style:{color:"rgb(183, 187, 189)"},to:"/dashboard"},"DashBoard"))),n.a.createElement("div",{className:"dashBoard"},n.a.createElement("h3",null,"Add a board"),n.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=Object(m.a)({},e.state);t.boards.push(r),i.a.put("http://localhost:2030/api/v3/updateOne/".concat(t._id),t,{withCredentials:!0}).then((function(a){console.log(a),a.data.errors||(e.setRefresh(!e.refresh),Object(s.c)("/list"))})).catch((function(e){return console.log(e)}))}},"Board Name: ",n.a.createElement("input",{type:"text",name:"name",onChange:function(e){c(Object(m.a)({},r,Object(p.a)({},e.target.name,e.target.value)))}}),n.a.createElement("p",null,n.a.createElement("button",{className:"button"},"Add Board")))))};var y=function(){var e=Object(l.useState)({}),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(0),m=Object(o.a)(c,2),d=m[0],i=m[1],u=Object(l.useState)(!1),h=Object(o.a)(u,2),g=h[0],p=h[1];return n.a.createElement("div",null,n.a.createElement(s.b,null,n.a.createElement(O,{path:"/"})),n.a.createElement(b.Provider,{value:{state:t,setState:r,refresh:g,setRefresh:p,board:d,setBoard:i}},n.a.createElement(s.b,null,n.a.createElement(E,{path:"/dashboard"}),n.a.createElement(f,{path:"/list"}),n.a.createElement(j,{path:"/addtask"}),n.a.createElement(w,{path:"/addboard"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){}},[[24,1,2]]]);
//# sourceMappingURL=main.19d0cc36.chunk.js.map