(window["webpackJsonplist-todo"]=window["webpackJsonplist-todo"]||[]).push([[0],{45:function(t,e,n){t.exports=n(69)},50:function(t,e,n){},51:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(9),l=n.n(c),i=(n(50),n(51),n(77)),r=n(76),u=n(13),d=n(33),s=n(34),E=n(42),m=n(35),O=n(43),h=n(72),f=n(73),D=n(74),p=n(75),b=n(17),T=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(E.a)(this,Object(m.a)(e).call(this,t))).state={clicked:!1},n}return Object(O.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.element,n=t.id,o=t.onEdit,c=t.onDelete,l=t.onThrough;return console.log(e.test),a.a.createElement(h.a,null,a.a.createElement(f.a,{check:!0},a.a.createElement(D.a,{check:!0},a.a.createElement(p.a,{className:" font-weight-bold",type:"checkbox",name:"radio1"}),a.a.createElement("span",{onClick:function(){return l(n)},style:{textDecoration:e.test?"line-through":"none"}}," ",e.title),a.a.createElement("div",{className:"float-right"},a.a.createElement("button",{className:"float",onClick:function(){return o(e)}},a.a.createElement(b.a,{icon:"edit"})," Edit "),a.a.createElement("button",{className:"float ",onClick:function(){return c(n)}},a.a.createElement(b.a,{icon:"trash-alt"})," Del ")))))}}]),e}(o.Component),_=Object(u.b)(null,(function(t){return{onDelete:function(e){t({type:"DELETE_TODO",cin:e})},onEdit:function(e){t({type:"EDIT_TODO",id:e.id,todo:{id:e.id,title:prompt("todo title: ",e.title)}})},onThrough:function(e){t({type:"DONE_TODO",id:e})}}}))(T),y=Object(u.b)((function(t){return{todo:t.todo}}))((function(t){var e=t.todo;return console.log(e),a.a.createElement("div",{className:"mx-auto"},e.map((function(t,e){return a.a.createElement(_,{key:e,element:t,id:e})})))})),v=Object(u.b)(null,(function(t){return{onAddMovie:function(){t({type:"ADD_TODO",todo:{id:Math.random(),title:prompt("todo title: ")}})}}}))((function(t){var e=t.onAddMovie;return a.a.createElement("div",{className:"p-3 my-2 rounded",style:{background:"blue"}},a.a.createElement(i.a,null,a.a.createElement(r.a,{style:{height:"20vh"}},a.a.createElement("h2",null,"Daily  TODO Lists")),a.a.createElement(r.a,null,"Add your TODO",a.a.createElement("button",{className:"float-right",onClick:e},a.a.createElement(b.a,{icon:"plus-square"})," Add ")),a.a.createElement(y,null)))})),g=n(15),k=n(41),N=[{id:"0",title:"Watch the GodFadher 1",test:!1},{id:"1",title:"Watch the GodFadher 2",test:!1},{id:"2",title:"Watch the GodFadher 3",test:!1}],j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;return"ADD_TODO"===e.type?[].concat(Object(k.a)(t),[e.todo]):"EDIT_TODO"===e.type?t.map((function(t,n){return n==e.id?e.todo:t})):"DELETE_TODO"===e.type?t.filter((function(t,n){return n!=e.cin})):"DONE_TODO"===e.type?t.map((function(t,n){return n===e.id?{title:t.title,test:!t.test}:t})):t},w=Object(g.c)(Object(g.b)({todo:j}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(65),n(66),n(67),n(68);l.a.render(a.a.createElement(u.a,{store:w},a.a.createElement(v,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4b2c3b95.chunk.js.map