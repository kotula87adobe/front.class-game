(this["webpackJsonpapp-1"]=this["webpackJsonpapp-1"]||[]).push([[0],{153:function(e,t,n){},155:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),s=n.n(r),i=(n(153),n(17)),o=(n(154),n(44)),l=n(12),j=n(245),b=(n(155),n(62)),d=n(18),u=n(5),x=n(81),h=n(33),O=n(236),m=n(239),f=n(207),p=n(257),g=n(259),v=n(241),k=n(258),y=n(240),w=n(256),C=n(261),I=n(242),z=n(243),A=n(209),S=n(235),N=n(210),E=n(244),W=n(2),F=Object(u.a)({switchBase:{color:x.a[300],"&$checked":{color:x.a[500]},"&$checked + $track":{backgroundColor:x.a[500]}},checked:{},track:{}})(S.a),P=function(){var e=Object(a.useState)({name:"",surname:"",email:"",remember:!0,day:"",hour:[],reason:[],gender:"",color:"",button:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(e){var t=e.target;console.log(t),"checkbox"===t.type&&"color"!==t.name?c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(b.a)({},t.name,!e[t.name]))})):c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(b.a)({},t.name,t.value))}))};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(h.a,{component:"h1",variant:"h4",align:"center",children:"Big Form"}),Object(W.jsxs)("form",{"data-testid":"form",children:[Object(W.jsxs)(O.a,{container:!0,spacing:3,children:[Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(g.a,{fullWidth:!0,name:"name",label:"name",onInput:r,value:n.name})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(g.a,{fullWidth:!0,name:"surname",label:"surname",onInput:r,value:n.surname})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(g.a,{fullWidth:!0,name:"email",label:"email",onInput:r,value:n.email})})]}),Object(W.jsxs)(O.a,{container:!0,spacing:3,children:[Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(h.a,{id:"name-text",component:"p",variant:"h6",children:n.name})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(h.a,{component:"p",variant:"h6",children:n.surname})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(h.a,{component:"p",variant:"h6",children:n.email})})]}),Object(W.jsx)(O.a,{item:!0,xs:12,children:Object(W.jsx)(v.a,{control:Object(W.jsx)(k.a,{checked:n.remember,color:"primary",value:"remember",name:"remember",onClick:r}),label:"Remember me!"})}),Object(W.jsxs)(O.a,{container:!0,spacing:3,children:[Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsxs)(m.a,{fullWidth:!0,children:[Object(W.jsx)(y.a,{id:"day-label",children:"Day"}),Object(W.jsxs)(w.a,{role:"listbox",name:"day",labelId:"day-label",id:"select-day",onChange:r,value:n.day,children:[Object(W.jsx)(C.a,{value:1,children:"Monday"}),Object(W.jsx)(C.a,{value:2,children:"Tuesday"}),Object(W.jsx)(C.a,{value:3,children:"Wednesday"})]})]})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsxs)(m.a,{fullWidth:!0,children:[Object(W.jsx)(y.a,{id:"hour-label",children:"Hour"}),Object(W.jsxs)(w.a,{multiple:!0,role:"listbox",name:"hour",labelId:"hour-label",id:"select-hour",onChange:r,value:n.hour,children:[Object(W.jsx)(C.a,{value:12,children:"12"}),Object(W.jsx)(C.a,{value:13,children:"13"}),Object(W.jsx)(C.a,{value:14,children:"14"})]})]})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsxs)(m.a,{fullWidth:!0,children:[Object(W.jsx)(y.a,{id:"reason-label",children:"Reason"}),Object(W.jsxs)(w.a,{multiple:!0,role:"listbox",name:"reason",labelId:"reason-label",id:"select-reason",onChange:r,value:n.reason,renderValue:function(e){return e.join(", ")},children:[Object(W.jsxs)(C.a,{value:"appointment",children:[Object(W.jsx)(k.a,{checked:n.reason.indexOf("appointment")>-1}),Object(W.jsx)(I.a,{primary:"appointment"})]}),Object(W.jsxs)(C.a,{value:"special offer",children:[Object(W.jsx)(k.a,{checked:n.reason.indexOf("special offer")>-1}),Object(W.jsx)(I.a,{primary:"special offer"})]}),Object(W.jsxs)(C.a,{value:"test",children:[Object(W.jsx)(k.a,{checked:n.reason.indexOf("test")>-1}),Object(W.jsx)(I.a,{primary:"test"})]})]})]})})]}),Object(W.jsxs)(O.a,{container:!0,spacing:3,children:[Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(h.a,{id:"name-text",component:"p",variant:"h6",children:n.day})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(h.a,{component:"p",variant:"h6",children:n.hour.map((function(e){return e+", "}))})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsx)(h.a,{component:"p",variant:"h6",children:n.reason.map((function(e){return e+", "}))})})]}),Object(W.jsxs)(O.a,{container:!0,spacing:3,children:[Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsxs)(m.a,{fullWidth:!0,component:"fieldset",children:[Object(W.jsx)(f.a,{component:"legend",children:"Gender"}),Object(W.jsxs)(z.a,{"aria-label":"gender",name:"gender",value:n.gender,onChange:r,children:[Object(W.jsx)(v.a,{value:"female",control:Object(W.jsx)(p.a,{}),label:"Female"}),Object(W.jsx)(v.a,{value:"male",control:Object(W.jsx)(p.a,{}),label:"Male"})]})]})}),Object(W.jsx)(O.a,{item:!0,xs:12,sm:6,lg:4,children:Object(W.jsxs)(A.a,{children:[Object(W.jsx)(v.a,{control:Object(W.jsx)(S.a,{name:"color",color:"",value:"red",onChange:r,checked:"red"===n.color}),label:"Red"}),Object(W.jsx)(v.a,{control:Object(W.jsx)(S.a,{name:"color",color:"",value:"blue",onChange:r,checked:"blue"===n.color}),label:"Blue"}),Object(W.jsx)(v.a,{control:Object(W.jsx)(F,{name:"color",color:"",value:"green",onChange:r,checked:"green"===n.color}),label:"Green"})]})}),Object(W.jsxs)(O.a,{item:!0,xs:12,sm:6,lg:4,children:[Object(W.jsx)(N.a,{variant:"outlined",color:"inherit",onClick:function(){r({name:"button",target:{value:"button1"}})},children:"Default"}),Object(W.jsxs)(E.a,{color:"primary","aria-label":"outlined primary button group",children:[Object(W.jsx)(N.a,{onClick:function(){r({target:{name:"button",value:"button2"}})},children:"One"}),Object(W.jsx)(N.a,{onClick:function(){r({target:{name:"button",value:"button3"}})},children:"Two"}),Object(W.jsx)(N.a,{onClick:function(){r({target:{name:"button",value:"button4"}})},children:"Three"})]}),n.button]})]})]})]})},R=n(247),q=n(246),B=n(208),D=Object(j.a)((function(e){return{paper:{padding:e.spacing(2)}}})),T=function(){var e=D().paper;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(q.a,{}),Object(W.jsx)(R.a,{component:"main",fixed:!0,children:Object(W.jsx)(B.a,{className:e,variant:"elevation",elevation:3,children:Object(W.jsx)(P,{})})})]})},G=n(26),J=n.n(G),U=n(48),H=n(63),L=n.n(H),M=function(e){var t=e.data,n=e.methods,c=e.constants,r=function(){var e=Object(U.a)(J.a.mark((function e(){var t,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("".concat(c.API_URL,"dashboard/user"));case 2:t=e.sent,a=t.data,n.setUserId(a.id);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Object(U.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}),[]),Object(W.jsx)(W.Fragment,{children:(null===t||void 0===t?void 0:t.userId)?Object(W.jsx)(l.a,{to:"".concat(null===t||void 0===t?void 0:t.userId)}):Object(W.jsx)("p",{children:"----------"})})},$=n(127),_=n.n($),V=n(251),K=n(248),Q=n(249),X=n(255),Y=n(254),Z=n(252),ee=n(250),te=n(253),ne=Object(j.a)({root:{maxWidth:345},media:{height:140}}),ae=function(e){var t=e.userId,n=ne();return Object(W.jsxs)(K.a,{className:n.root,children:[Object(W.jsxs)(Q.a,{children:[Object(W.jsx)(ee.a,{title:"Czytanie ze zrozumieniem",subheader:"Wybierz poziom trudno\u015bci!"}),Object(W.jsxs)(V.a,{href:"#/".concat(t,"/polski/czytanie/proste"),color:"inherit",children:[Object(W.jsx)(Z.a,{className:n.media,children:Object(W.jsx)(te.a,{variant:"text",width:"100%",height:118})}),Object(W.jsx)(Y.a,{})]})]}),Object(W.jsx)(X.a,{})]})},ce=Object(j.a)({root:{maxWidth:345},media:{height:140}}),re=function(e){for(var t=e.userId,n=ce(),c=Object(a.useState)(1),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(1),l=Object(d.a)(o,2),j=l[0],b=l[1],u=Object(a.useState)(100),x=Object(d.a)(u,2),h=x[0],O=x[1],f=[],p=[],g=1;g<=100;g++)f.push(g),g<=10&&p.push(g);return Object(W.jsxs)(K.a,{className:n.root,children:[Object(W.jsxs)(Q.a,{children:[Object(W.jsx)(ee.a,{title:"Mno\u017cenie",subheader:"Ustaw zakres dzia\u0142a\u0144!"}),Object(W.jsxs)(V.a,{href:"#/".concat(t,"/matematyka/mnozenie/").concat(h,"/").concat(s,"/").concat(j),color:"inherit",children:[Object(W.jsx)(Z.a,{className:n.media,children:Object(W.jsx)(te.a,{variant:"text",width:"100%",height:118})}),Object(W.jsx)(Y.a,{})]})]}),Object(W.jsxs)(X.a,{children:[Object(W.jsxs)(m.a,{fullWidth:!0,children:[Object(W.jsx)(y.a,{id:"max-label",children:"Warto\u015b\u0107 maksymalna"}),Object(W.jsx)(w.a,{role:"listbox",name:"max",labelId:"max-label",id:"select-max",onChange:function(e){O(e.target.value)},value:h,children:f.map((function(e){return Object(W.jsx)(C.a,{value:e,children:e},e)}))})]}),Object(W.jsxs)(m.a,{fullWidth:!0,children:[Object(W.jsx)(y.a,{id:"i-label"}),Object(W.jsx)(w.a,{role:"listbox",name:"i",labelId:"i-label",id:"select-i",onChange:function(e){i(e.target.value)},value:s,children:p.map((function(e){return Object(W.jsx)(C.a,{value:e,children:e},e)}))})]}),Object(W.jsxs)(m.a,{fullWidth:!0,children:[Object(W.jsx)(y.a,{id:"j-label"}),Object(W.jsx)(w.a,{role:"listbox",name:"j",labelId:"j-label",id:"select-j",onChange:function(e){b(e.target.value)},value:j,children:p.map((function(e){return Object(W.jsx)(C.a,{value:e,children:e},e)}))})]})]})]})},se=new a.createContext,ie=_()((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),oe=function(){var e=ie().root,t=Object(a.useContext)(se);Object(l.h)().user;return Object(W.jsxs)(O.a,{className:e,container:!0,alignItems:"center",justify:"center",spacing:1,children:[Object(W.jsx)(re,{userId:t.data.userId}),Object(W.jsx)(ae,{userId:t.data.userId})]})},le=Object(j.a)((function(e){return{root:{padding:"2rem"},exercise:{fontSize:"3rem"},quest:{fontSize:"2rem",fontWeight:"bolder"}}})),je=function(e){var t=e.text,n=e.question,a=(e.answers,e.correctAnswer,le()),c=a.root,r=a.exercise,s=a.quest;return Object(W.jsxs)("div",{className:c,"data-testid":"form",children:[Object(W.jsx)(h.a,{className:r,component:"h2",align:"left",children:t}),Object(W.jsx)(h.a,{className:s,component:"h2",align:"left",children:n})]})},be=n(77),de=n.n(be),ue=n(78),xe=n.n(ue),he=n(79),Oe=n.n(he),me=Object(j.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},button:{fontSize:"1.5rem",minWidth:"2rem",padding:"1rem","& span":{lineHeight:1}},buttonChecked:{backgroundColor:"darkgreen"},icon:{fontSize:"5rem"},refresh:{position:"absolute",right:"10%",bottom:"10%",zIndex:10,"& svg":{fontSize:"4rem"}}}})),fe=function(e){var t=e.answers,n=e.answer,a=e.setAnswer,c=e.setChecked,r=e.handleActiveExercise,s=me(),i=s.root,o=s.button,l=s.icon,j=s.refresh,b=s.buttonChecked,d=t.map((function(e,t){return Object(W.jsx)(N.a,{className:[o,n===e?b:""],onClick:function(){!function(e){a(e)}(e)},children:e},t)}));return Object(W.jsxs)("div",{className:i,children:[Object(W.jsx)(E.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:d}),Object(W.jsxs)(E.a,{variant:"text",children:[Object(W.jsx)(N.a,{onClick:function(){c(!0)},children:Object(W.jsx)(de.a,{style:{color:"darkgreen"},className:l})}),Object(W.jsx)(N.a,{onClick:function(){c(!1),a("")},children:Object(W.jsx)(xe.a,{style:{color:"red"},className:l})})]}),Object(W.jsx)(N.a,{className:j,onClick:r,children:Object(W.jsx)(Oe.a,{color:"primary"})})]})},pe=Object(j.a)((function(e){return{paper:{padding:e.spacing(2)},empty:{},correct:{backgroundColor:"#0064002e",border:"3px solid green"},wrong:{backgroundColor:"#ff787878",border:"3px solid red"}}})),ge=function(e){var t,n=pe(),c=pe().paper,r=Object(l.h)(),s=r.type,o=r.max,j=e.data,b=e.methods;e.constants;return Object(a.useEffect)((function(){b.handleGenerateExercises("polski",s,o)}),[]),Object(a.useEffect)((function(){var e;b.setCorrectAnswer(null===(e=j.exercise)||void 0===e?void 0:e.correctAnswer)}),[j.exercise]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(q.a,{}),Object(W.jsx)(R.a,{component:"main",fixed:!0,children:Object(W.jsx)(B.a,{className:c+" "+n[j.answerClass],variant:"elevation",elevation:3,children:(null===(t=j.exercise)||void 0===t?void 0:t.text)&&Object(W.jsxs)(O.a,{container:!0,children:[Object(W.jsx)(O.a,{item:!0,xs:12,children:Object(W.jsx)(je,Object(i.a)(Object(i.a)({},j.exercise),{},{answer:j.answer}))}),Object(W.jsx)(O.a,{item:!0,xs:12,children:Object(W.jsx)(fe,{answers:j.exercise.answers,answer:j.answer,setAnswer:b.setAnswer,setChecked:b.setChecked,handleActiveExercise:b.handleActiveExercise})})]})})})]})},ve=Object(j.a)((function(e){return{root:{padding:"1.5rem"},exercise:{fontSize:"10rem"}}})),ke=function(e){var t=e.first,n=e.sign,a=e.second,c=(e.result,e.answer),r=ve(),s=r.root,i=r.exercise;return Object(W.jsx)("div",{className:s,children:Object(W.jsxs)(h.a,{className:i,component:"h2",align:"center",children:[t," ",n," ",a," = ",c]})})},ye=Object(j.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},button:{fontSize:"2.5rem",minWidth:"2rem",padding:"1rem","& span":{lineHeight:1}},icon:{fontSize:"5rem"},refresh:{position:"absolute",right:"10%",bottom:"10%",zIndex:10,"& svg":{fontSize:"8rem"}}}})),we=function(e){var t=e.numbers,n=e.answer,a=e.setAnswer,c=e.setChecked,r=e.handleActiveExercise,s=e.handlePostAnswer,i=ye(),o=i.root,l=i.button,j=i.icon,b=i.refresh,d=t.map((function(e,t){return Object(W.jsx)(N.a,{className:l,onClick:function(){!function(e){n.toString().length>=3||a(n+e)}(e)},children:e},t)}));return Object(W.jsxs)("div",{className:o,children:[Object(W.jsx)(E.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:d}),Object(W.jsxs)(E.a,{variant:"text",children:[Object(W.jsx)(N.a,{onClick:function(){c(!0),s()},children:Object(W.jsx)(de.a,{style:{color:"darkgreen"},className:j})}),Object(W.jsx)(N.a,{onClick:function(){c(!1),a("")},children:Object(W.jsx)(xe.a,{style:{color:"red"},className:j})})]}),Object(W.jsx)(N.a,{className:b,onClick:r,children:Object(W.jsx)(Oe.a,{color:"primary"})})]})},Ce=Object(j.a)((function(e){return{paper:{padding:e.spacing(2)},empty:{},correct:{backgroundColor:"#0064002e",border:"3px solid green"},wrong:{backgroundColor:"#ff787878",border:"3px solid red"}}})),Ie=function(e){var t=Ce(),n=Ce().paper,c=Object(l.h)(),r=c.type,s=c.max,o=c.i,j=c.j;console.log({j:j});var b=e.data,d=e.methods;e.constants;return Object(a.useEffect)((function(){d.handleGenerateExercises("matematyka",r,s,o,j)}),[]),Object(a.useEffect)((function(){var e,t;d.setCorrectAnswer(null===(e=b.exercise)||void 0===e||null===(t=e.result)||void 0===t?void 0:t.toString())}),[b.exercise]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(q.a,{}),Object(W.jsx)(R.a,{component:"main",fixed:!0,children:Object(W.jsx)(B.a,{className:n+" "+t[b.answerClass],variant:"elevation",elevation:3,children:Object(W.jsxs)(O.a,{container:!0,children:[Object(W.jsx)(O.a,{item:!0,xs:12,children:Object(W.jsx)(ke,Object(i.a)(Object(i.a)({},b.exercise),{},{answer:b.answer}))}),Object(W.jsx)(O.a,{item:!0,xs:12,children:Object(W.jsx)(we,{numbers:[0,1,2,3,4,5,6,7,8,9],answer:b.answer,setAnswer:d.setAnswer,setChecked:d.setChecked,handlePostAnswer:function(){d.postAnswer("".concat(b.exercise.first," ").concat(b.exercise.sign," ").concat(b.exercise.second," = "))},handleActiveExercise:d.handleActiveExercise})})]})})})]})},ze=function(e){var t=Object(l.h)(),n=Object(l.g)();console.log({params:t});var c=e.methods;return console.log({location:n}),Object(a.useEffect)((function(){c.setRouterParams(t)}),[n]),Object(W.jsx)(W.Fragment,{})},Ae=Object(j.a)((function(e){return{root:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}}}));var Se=function(){var e=Ae().root,t=Object(a.useContext)(se);return console.log({ContextData:t}),Object(W.jsx)("div",{className:e,children:Object(W.jsxs)(o.a,{children:[Object(W.jsx)(l.b,{path:"/:userId/:category?/:subcategory?",children:Object(W.jsx)(ze,Object(i.a)({},t))}),Object(W.jsxs)(l.d,{children:[Object(W.jsx)(l.b,{exact:!0,path:"/",children:Object(W.jsx)(M,Object(i.a)({},t))}),Object(W.jsx)(l.b,{exact:!0,path:"/:userId",children:Object(W.jsx)(oe,Object(i.a)({},t))}),Object(W.jsx)(l.b,{exact:!0,path:"/:userId/matematyka/:type/:max/:i?/:j?",children:Object(W.jsx)(Ie,Object(i.a)({},t))}),Object(W.jsx)(l.b,{exact:!0,path:"/:userId/polski/:type/:max",children:Object(W.jsx)(ge,Object(i.a)({},t))}),Object(W.jsx)(l.b,{exact:!0,path:"/test",children:Object(W.jsx)(T,Object(i.a)({},t))})]})]})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,262)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Ee=n(128),We=n.n(Ee),Fe=function(e,t,n){for(var a=[],c=t;c<=10;c++)for(var r=n;r<=10;r++)c*r<=e&&a.push({first:c,sign:"\xb7",second:r,result:c*r});return a},Pe={proste:[{text:1,question:"Jakiego koloru jest kot?",answers:["czarny","bia\u0142y","bury"],correctAnswer:"bia\u0142y"},{text:"Czarny kot je z miski.",question:"Jakiego koloru jest kot?",answers:["czarny","bia\u0142y","bury"],correctAnswer:"czarny"},{text:"Bury kot je z miski.",question:"Jakiego koloru jest kot?",answers:["czarny","bia\u0142y","bury"],correctAnswer:"bury"}]},Re=function(e){return Pe[e]},qe=function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)({}),i=Object(d.a)(s,2),o=i[0],l=i[1],j=Object(a.useState)(""),b=Object(d.a)(j,2),u=b[0],x=b[1],h=Object(a.useState)(""),O=Object(d.a)(h,2),m=O[0],f=O[1],p=Object(a.useState)(!1),g=Object(d.a)(p,2),v=g[0],k=g[1],y=Object(a.useState)(""),w=Object(d.a)(y,2),C=w[0],I=w[1],z=Object(a.useState)(""),A=Object(d.a)(z,2),S=A[0],N=A[1],E=Object(a.useState)({userId:"",category:"",subcategory:""}),F=Object(d.a)(E,2),P=F[0],R=F[1],q=function(){return window.location.href.indexOf("localhost")>0?"http://localhost:5000/":"https://api-class-game.2dsp35.pl/"},B=function(){return""!==u&&u===m},D=function(){x(""),k(!1),l(We.a.sample(c))},T=function(){var e=Object(U.a)(J.a.mark((function e(){var t,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("".concat(q(),"dashboard/visit"),{userId:C});case 2:t=e.sent,n=t.data,N(n.id);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(U.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("".concat(q(),"/dashboard/answer"),{category:P.category,subcategory:P.subcategory,text:t,answer:u,isCorrect:B(),visitId:S});case 2:n=e.sent,a=n.data,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Object(U.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,T();case 3:case"end":return e.stop()}}),e)})))()}),[C]),Object(a.useEffect)((function(){C||I(P.userId)}),[P]),Object(a.useEffect)((function(){D()}),[c]),Object(a.useEffect)((function(){k(!1)}),[u]),Object(a.useEffect)((function(){B()&&setTimeout(D,1e3)}),[v]),Object(W.jsx)(se.Provider,{value:{data:{userId:C,exercise:o,correctAnswer:m,answer:u,checked:v,isAnswerCorrect:B(),answerClass:!1===v?"empty":B()?"correct":"wrong"},methods:{setUserId:I,handleGenerateExercises:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;switch(e){case"matematyka":switch(t){case"mnozenie":r(Fe(n,a,c))}break;case"polski":switch(t){case"czytanie":r(Re(n))}}},setCorrectAnswer:f,setAnswer:x,setChecked:k,handleActiveExercise:D,setRouterParams:R,postAnswer:G},constants:{API_URL:q()}},children:e.children})};s.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(qe,{children:Object(W.jsx)(Se,{})})}),document.getElementById("root")),Ne()}},[[202,1,2]]]);
//# sourceMappingURL=main.20a6511f.chunk.js.map