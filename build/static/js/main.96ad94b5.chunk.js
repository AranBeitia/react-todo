(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,l,d=n(0),u=n.n(d),b=n(22),h=n.n(b),j=(n(90),n(8)),p=n(20),m=n(9),f=n(2),O=n(3),x=n(4),k=n(5),g=n(206),v=n(10),y=n(11),N=Object(v.b)(a||(a=Object(y.a)(["\n  body {\n    background-color: ",";\n    color: ",";\n    transition: all 0.50s linear;\n\n\t/* color: var.$font-color-base;\n\tbackground-color: var.$color-secondary; */\n  }\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),C={body:"#ffffff",text:"#0a155a",toggleBorder:"#ffffff",background:"#0a155a"},_={body:"#010319",text:"#ffffff",toggleBorder:"#6B8096",background:"#d103fc"},S=(n(95),n(96),v.d.button(r||(r=Object(y.a)(["\n\tdisplay: block;\n\tborder-radius: 3px;\n\tpadding: 0.5rem 1rem;\n\twidth: 10rem;\n\tfont-weight: 600;\n\tcursor: pointer;\n\tborder: 2px solid ",";\n\tbackground: transparent;\n\tcolor: ",";\n\ttransition: all 0.25s ease;\n\n\t","\n\n\t&:hover {\n\t\tborder: 2px solid ",";\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t}\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.secondary&&Object(v.c)(c||(c=Object(y.a)(["\n\t\t\tbackground: ",";\n\t\t\tcolor: white;\n\t\t"])),(function(e){return e.theme.text}))}),(function(e){return e.theme.background}),(function(e){return e.secondary?"transparent":e.theme.background}),(function(e){return e.secondary?e.theme.background:"white"}))),D=Object(v.d)(S)(i||(i=Object(y.a)(["\n\twidth: 1.5rem;\n\theight: 1.5rem;\n\tpadding: 0.2rem;\n\tfont-size: 0.5rem;\n"]))),F=S,T=n(1),w=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.handleclick,a=e.handleTheme;return Object(T.jsxs)("header",{className:"header-center",children:[Object(T.jsx)("span",{className:"icon-brightness-contrast icon-theme",onClick:a}),Object(T.jsxs)("h1",{children:["What's up, ",Object(T.jsx)("span",{className:"text-highlight",children:t}),"!"]}),Object(T.jsx)(S,{type:"button",onClick:n,children:"Random name"})]})}}]),n}(u.a.Component),E=w,I=n(30),B=I.b().shape({title:I.c().required("Title is a required field"),description:I.c().min(5).ensure(),priority:I.a().min(0).max(2).default(0)}),L=n(21),P=(n(196),n(197),{id:"",title:"",description:"",priority:0,isEditable:!1,done:!1}),A=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props.handleSubmit;return Object(T.jsx)(L.d,{initialValues:P,validationSchema:B,onSubmit:e,children:function(e){e.values,e.errors,e.handleSubmit,e.isSubmitting;return Object(T.jsxs)(L.c,{className:"form",children:[Object(T.jsx)("h2",{children:"ToDo tasks"}),Object(T.jsxs)("div",{className:"form__group",children:[Object(T.jsxs)("label",{className:"input",htmlFor:"title",children:[Object(T.jsx)(L.b,{id:"title",type:"text",name:"title",className:"input__field",placeholder:" "}),Object(T.jsx)("span",{className:"input__label",children:"Title"})]}),Object(T.jsx)(L.a,{name:"title",component:"p",className:"form__error"})]}),Object(T.jsxs)("div",{className:"form__group",children:[Object(T.jsxs)("label",{className:"input",htmlFor:"description",children:[Object(T.jsx)(L.b,{id:"description",type:"text",name:"description",className:"input__field",placeholder:" "}),Object(T.jsx)("span",{className:"input__label",children:"Description"})]}),Object(T.jsx)(L.a,{name:"description",component:"p",className:"form__error"})]}),Object(T.jsx)("div",{className:"form__group",children:Object(T.jsx)(F,{type:"submit",children:"Add task"})})]})}})}}]),n}(u.a.Component),J=A,R=n(29),q=(n(198),v.d.nav(s||(s=Object(y.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 1rem 0.5rem;\n\tfont-size: 0.7rem;\n\tfont-weight: 600;\n\ttext-transform: uppercase;\n\tcolor: ",";\n"])),(function(e){return e.theme.text}))),z=v.d.span(o||(o=Object(y.a)(["\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"])),(function(e){return e.theme.toggleBorder})),M=v.d.li(l||(l=Object(y.a)(["\n\tpadding: 0 0.5rem;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"])),(function(e){return e.theme.toggleBorder})),$=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).filterTasks=function(t){e.props.handleFilter(t)},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.props.name;return Object(T.jsx)(M,{onClick:function(){return e.filterTasks(t)},children:t})}}]),n}(u.a.Component),H=$,K=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.taskList,n=e.clearCompleted,a=e.handleFilter;return Object(T.jsxs)(q,{children:[Object(T.jsxs)("span",{children:[t.length," items left"]}),Object(T.jsxs)("ul",{className:"flex",children:[Object(T.jsx)(H,{name:"all",handleFilter:a}),Object(T.jsx)(H,{name:"actived",handleFilter:a}),Object(T.jsx)(H,{name:"completed",handleFilter:a})]}),Object(T.jsx)(z,{onClick:n,children:"Clear completed"})]})}}]),n}(u.a.Component),V=K,W=(n(199),function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).taskDone=function(t){e.props.handleDone(t)},e.taskDelete=function(t){e.props.handleDelete(t)},e.taskEdit=function(t){e.props.handleEdit(t)},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.title,r=t.done,c=t.isEditable,i=t.index;return Object(T.jsx)(R.b,{draggableId:n,index:i,children:function(t){return Object(T.jsxs)("li",Object(j.a)(Object(j.a)(Object(j.a)({},t.draggableProps),{},{ref:t.innerRef},t.dragHandleProps),{},{className:"todo-item flex-between-center",children:[Object(T.jsxs)("div",{className:"flex-between-center",children:[Object(T.jsx)("input",{type:"checkbox",className:"checkbox",name:a,onClick:function(){return e.taskDone(n)}}),!c&&Object(T.jsx)("label",{htmlFor:a,className:"todo-item__label ".concat(r?"--is-disabled":""),children:a}),c&&Object(T.jsx)("input",{type:"text"})]}),Object(T.jsxs)("div",{className:"flex-end",children:[Object(T.jsx)(D,{className:"icon-pencil mr-1",onClick:function(){return e.taskEdit(n)}}),Object(T.jsx)(D,{className:"icon-cross",onClick:function(){return e.taskDelete(n)}})]})]}),n)}},n)}}]),n}(u.a.Component)),G=W,Q=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.taskList,n=e.deleteItem,a=e.editItem,r=e.done,c=e.saveOrderTasks,i=e.clearCompleted,s=e.handleFilter;return Object(T.jsxs)("section",{className:"todo-list",children:[Object(T.jsx)(V,{taskList:t,clearCompleted:i,handleFilter:s}),Object(T.jsx)(R.a,{onDragEnd:function(e){var n=e.source,a=e.destination;a&&(n.index===a.index&&n.droppableId===a.droppableId||c(t,n.index,a.index))},children:Object(T.jsx)(R.c,{droppableId:"tasks",children:function(e){return Object(T.jsxs)("ul",Object(j.a)(Object(j.a)({},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,t){return Object(T.jsx)(G,{index:t,id:e.id,title:e.title,done:e.done,isEditable:e.isEditable,handleDone:r,handleDelete:n,handleEdit:a,handleFilter:s},e.id)})),e.placeholder]}))}})}),t.length>1&&Object(T.jsx)("p",{className:"tab",children:"Drag and drop to reorder list"})]})}}]),n}(u.a.Component),U=Q,X=["Aran","Kitty","Jane"],Y=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).toggleTheme=function(){"dark"===a.state.theme&&a.setState({theme:"light"}),"light"===a.state.theme&&a.setState({theme:"dark"})},a.randomName=function(){var e=a.state.counter+1;e%=X.length,a.setState({counter:e})},a.saveOrderTasks=function(e,t,n){var r=Object(m.a)(e),c=r.splice(t,1),i=Object(p.a)(c,1)[0];r.splice(n,0,i),a.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{list:r})}))},a.handleFilter=function(e){a.setState({showItems:e})},a.clearCompleted=function(){a.setState({list:a.state.list.filter((function(e){return!e.done}))})},a.taskDone=function(e){var t=a.state.list.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{done:!t.done}):t}));a.setState({list:t})},a.taskDelete=function(e){a.setState({list:a.state.list.filter((function(t){return t.id!==e}))})},a.taskEdit=function(e){var t=a.state.list.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{isEditable:!t.isEditable}):t}));a.setState({list:t})},a.addTask=function(e){var t=Object(j.a)(Object(j.a)({},e),{},{id:Object(g.a)()});a.setState({list:[].concat(Object(m.a)(a.state.list),[t])})},a.state={userName:"",counter:0,theme:"dark",showItems:"all",list:[]},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.setState({userName:X})}},{key:"render",value:function(){var e=this.state,t=e.counter,n="light"===e.theme?C:_,a=this.state,r=a.list,c=a.showItems;return"all"===c?r=this.state.list:"actived"===c?r=r.filter((function(e){return!e.done})):"completed"===c&&(r=r.filter((function(e){return e.done}))),Object(T.jsxs)(v.a,{theme:n,children:[Object(T.jsx)(N,{}),Object(T.jsxs)("div",{className:"app",children:[Object(T.jsx)(E,{name:X[t],handleclick:this.randomName,handleTheme:this.toggleTheme}),Object(T.jsx)(J,{handleSubmit:this.addTask}),Object(T.jsx)(U,{taskList:r,deleteItem:this.taskDelete,editItem:this.taskEdit,done:this.taskDone,saveOrderTasks:this.saveOrderTasks,clearCompleted:this.clearCompleted,handleFilter:this.handleFilter})]})]})}}]),n}(u.a.Component),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};h.a.render(Object(T.jsx)(u.a.StrictMode,{children:Object(T.jsx)(Y,{})}),document.getElementById("root")),Z()},90:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[204,1,2]]]);
//# sourceMappingURL=main.96ad94b5.chunk.js.map