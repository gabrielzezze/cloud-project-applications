(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){t.exports={root:"inputDropdown_root__3pot0",show:"inputDropdown_show__f36Ob"}},22:function(t,e,n){t.exports={root:"App_root__26snQ",button:"App_button__2L-aT"}},23:function(t,e,n){t.exports={root:"header_root__2pFaE"}},29:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),o=n(20),s=n.n(o),i=(n(29),n(11)),u=n(3),l=n.n(u),d=n(8),j=n(5),b=n(21),p=n.n(b),h=n(7);var f=function(t){var e=t.task,n=t.deleteTask;return Object(r.jsxs)("div",{style:{border:"2px solid whitesmoke",borderRadius:"17px",padding:"2%",marginBottom:"0.5rem",width:"50%",color:"whitesmoke"},children:[Object(r.jsxs)("h3",{children:["Titutlo: ",e.title]},"title-".concat(e.id)),Object(r.jsxs)("h5",{children:["Status: ",e.status]},"status-".concat(e.id)),Object(r.jsx)(h.b,{color:"whitesmoke",onClick:function(){return n(e.id)},style:{padding:"0.5rem 0",cursor:"pointer"}})]})},v=n(22),O=n.n(v),x=n(23),k=n.n(x);function g(t){var e=t.onAddClick;return Object(r.jsxs)("header",{className:k.a.root,children:[Object(r.jsx)("h1",{children:"Bem vindo ao Task Manager V2"}),Object(r.jsx)(h.a,{onClick:e})]})}var m=n(10),w=n.n(m);function _(t){var e=t.onSubmit,n=(t.initialStatus,t.initialTitle,t.visible),c=t.setTitle,a=t.setStatus;return Object(r.jsxs)("div",{className:"".concat(w.a.root," ").concat(n?w.a.show:""),children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Titulo"}),Object(r.jsx)("input",{onChange:function(t){return c(t.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Status"}),Object(r.jsx)("input",{onChange:function(t){return a(t.target.value)}})]}),Object(r.jsx)("button",{onClick:e,children:"Enviar"})]})}var S=p.a.create({baseURL:"http://".concat("13.59.80.249:5000"),headers:{"Content-Type":"application/json"}});var T=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),u=s[0],b=s[1],p=Object(c.useState)([]),h=Object(j.a)(p,2),v=h[0],x=h[1],k=Object(c.useState)(!1),m=Object(j.a)(k,2),w=m[0],T=m[1],C=function(){var t=Object(d.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.get("/task");case 3:e=t.sent,x(e.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(d.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.delete("/task?id=".concat(e));case 3:t.sent,n=Object(i.a)(v).filter((function(t){return t.id!==e})),x(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(d.a)(l.a.mark((function t(){var e,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.post("/task",{title:n,status:u});case 3:e=t.sent,r=[].concat(Object(i.a)(v),[e.data]),x(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){C()}),[]),Object(r.jsxs)("div",{className:O.a.root,children:[Object(r.jsx)(g,{onAddClick:function(){return T(!w)}}),Object(r.jsx)(_,{onSubmit:F,visible:w,setTitle:a,setStatus:b}),Object(r.jsx)("div",{style:{marginTop:"20%",padding:"0 5%"},children:v.map((function(t){return Object(r.jsx)(f,{task:t,deleteTask:y},"task-".concat(t.id))}))})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.f4b1621c.chunk.js.map