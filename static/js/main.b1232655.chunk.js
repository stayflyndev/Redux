(this.webpackJsonpilovefood=this.webpackJsonpilovefood||[]).push([[0],{102:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),l=(a(102),a(40)),o=a.n(l),s=a(30),m=a(17),u=a(18),p=a(21),d=a(19),b=a(22),h=(a(77),[{id:0,title:"Mexican",link:"mexican",price:"20",img:"https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1120&q=80"},{id:1,title:"Jamaican",link:"jamaican",price:"20",img:"https://jamaicans.com/wp-content/uploads/Jamaican-Jerk-chicken-Recipes-1140x760.jpg"},{id:2,title:"Chinese",link:"chinese",price:"20",img:"https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{id:3,title:"BBQ",link:"bbq",price:"20",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}]),g=a(156),f=a(157),v=a(158),E=a(155),y=a(43),k=a(151),O=a(34);var j=Object(O.g)((function(e){var t=e.id,a=(e.img,e.url,e.price),n=e.title,i=e.history,c=e.link,l=e.match;return r.a.createElement("div",{onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement(k.a,Object(y.a)({key:t,title:n,subtitle:r.a.createElement("span",null,"Prices Starting at: ",a," ")},"subtitle",r.a.createElement("span",null,"CLICK HERE TO ORDER"))))})),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={listitems:h},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(g.a,{cellHeight:180,className:!0},r.a.createElement(f.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(v.a,{component:"div"},r.a.createElement("h1",null,"yummies"))),this.state.listitems.map((function(e){var t=e.id,a=e.title,n=e.link,i=e.price,c=e.img;return r.a.createElement(f.a,{key:t},r.a.createElement("img",{src:c,alt:a,cols:1}),r.a.createElement(j,{price:i,title:a,link:n}))}))))}}]),t}(n.Component);var U=function(){return r.a.createElement("div",null,r.a.createElement(w,null))};function C(e){return console.log(e),r.a.createElement("div",null,"mexican list")}var x=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,"BBQ COMPONENT")}}]),t}(n.Component);function S(){return r.a.createElement("div",null,"chinese items")}var N=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,"Jamaican List")}}]),t}(n.Component),B=a(159);a(175),Object(B.a)((function(e){return{root:{paddingTop:"20px","& > *":{margin:e.spacing(1),width:200}}}}));var R=a(4),M=a(160),T=a(85),W=a(162),G=a(64),P=a.n(G),V=a(82),A=a.n(V),J=a(163),L=a(48),z=a.n(L);a(108),a(110);z.a.initializeApp({apiKey:"AIzaSyCb5uuluPeFh9bkx397LpzOO5S3fJlXeMk",authDomain:"tothefood-66287.firebaseapp.com",databaseURL:"https://tothefood-66287.firebaseapp.com",projectId:"tothefood-66287",storageBucket:"tothefood-66287.appspot.com",messagingSenderId:"312542502744",appId:"1:312542502744:web:0bf646a32da7b70ecd0f2d",measurementId:"G-8X9TLQ3Z1S"});var H=z.a.auth(),I=z.a.firestore(),D=new z.a.auth.GoogleAuthProvider,Q=function(){return H.signInWithRedirect(D)},F=function(e){var t,a,n,r,i,c,l,m=arguments;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e){u.next=2;break}return u.abrupt("return");case 2:return t=I.doc("users/".concat(e.uid)),u.next=5,o.a.awrap(t.get());case 5:if(u.sent.exists){u.next=19;break}for(a=e.displayName,n=e.email,r=new Date,u.prev=9,i=m.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=m[l];return u.next=13,o.a.awrap(t.set(Object(s.a)({displayName:a,email:n,createdAt:r},c)));case 13:console.log("created user"),u.next=19;break;case 16:u.prev=16,u.t0=u.catch(9),console.log("Error creating user "+u.t0.message);case 19:return u.abrupt("return",t);case 20:case"end":return u.stop()}}),null,null,[[9,16]])},_=(z.a,Object(T.a)({palette:{primary:P.a,secondary:A.a,testing:P.a}})),K=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({email:"",password:""})},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(y.a)({},r,n))},a.state={email:"",password:""},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(W.a,{theme:_},r.a.createElement("div",{className:"form"},r.a.createElement("span",{className:"formSpan"}," Sign into your account"),r.a.createElement("div",null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement(M.a,{name:"email",label:"email",type:"email",value:this.state.email,placeholder:"email",color:"primary",inputProps:{"aria-label":"description"},onChange:this.handleChange}),r.a.createElement(M.a,{name:"password",label:"password",type:"password",value:this.state.password,placeholder:"password",color:"secondary",inputProps:{"aria-label":"description"},onChange:this.handleChange}),r.a.createElement(J.a,{color:"primary",type:"submit",value:"submit form"},"Sign In "),r.a.createElement(J.a,{color:"primary",onClick:Q},"SIGN IN WITH GOOGLE ")))))}}]),t}(n.Component),X=Object(R.a)({root:{backgroundColor:"red"}})(K);function q(){return r.a.createElement("div",null,r.a.createElement(X,null))}var Y=[{id:1,title:"Mexican",routeName:"mexican",items:[{id:1,name:"burrito",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"tacos",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"enchiladas",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"tortas",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"tamales",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"menudo",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"beans",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"rice",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"chorros",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Jamaican",routeName:"jamaican",items:[{id:10,name:"oxtails",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"chicken curry",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"lamb curry",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"jerk chicken",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"jamaican patty",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"stewed chicken",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160}]},{id:3,title:"Chinese",routeName:"chinese",items:[{id:18,name:"Beef and Brocc",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Sesame Chicken",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Shrimp Lo Mein",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Fried Rice",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Happy Family",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Italian",routeName:"italian",items:[{id:23,name:"Pizza",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Spaghetti",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Alfredo",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Crusty Parm",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Eggplant Parm",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Lasagna",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"Ravioli",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"BBQ",routeName:"BBQ",items:[{id:30,name:"BBQ Beef Ribs",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Grilled Chicken",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Brisket",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Smoked Sausage",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Grilled Burger",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Grilled Corn",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],Z=a(164),$=a(165),ee=a(168),te=a(167),ae=a(166),ne=a(58),re=Object(B.a)({card:{padding:"5px",margin:"20px",backgroundColor:"#ff980099"},media:{height:140}});var ie=function(e){var t=e.items,a=e.title,n=re();return console.log({items:t}),r.a.createElement("div",{className:!0},r.a.createElement(Z.a,{className:n.card},r.a.createElement($.a,null,r.a.createElement(ae.a,{className:!0,image:"/static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),r.a.createElement(te.a,null,r.a.createElement(ne.a,{gutterBottom:!0,variant:"h5",component:"h2"},a,r.a.createElement("div",null,t.filter((function(e,t){return t<2})).map((function(e){return r.a.createElement("div",{className:"padding"},e.name," $ ",e.price)})))),r.a.createElement(ne.a,{variant:"body2",color:"textSecondary",component:"p"}))),r.a.createElement(ee.a,null,r.a.createElement(J.a,{size:"small",color:"primary"},"ORDER"),r.a.createElement(J.a,{size:"small",color:"primary"},"GET OUT MY FACE!!"))))},ce=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={collections:Y},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,this.state.collections.map((function(e){e.id;var t=e.title,a=(e.link,e.img,e.items),n=e.routeName;return r.a.createElement(ie,{title:t,routeName:n,items:a})}))))}}]),t}(n.Component),le=a(173),oe=a(174),se=a(42),me=a(31);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.a.createElement("g",null,r.a.createElement("path",{d:"M8,6H7V0H6v6H5V0H3v7c0,0.6,0.4,1,1,1v15c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1V8c0.6,0,1-0.4,1-1V0H8V6z M7,22H6V8h1V22z"}),r.a.createElement("path",{d:"M15,0c-0.6,0-1,0.4-1,1v11v11c0,0.5,0.4,1,1,1h3c0.6,0,1-0.5,1-1V12c0,0,2-2,2-5C21,2,15,0,15,0z M17,22h-1v-9h1V22z    M17,12h-1V2.7c0,0,3,1.3,3,4.3S17,12,17,12z"})),be=function(e){var t=e.svgRef,a=e.title,n=pe(e,["svgRef","title"]);return r.a.createElement("svg",ue({width:"24px",height:"24px",enableBackground:"new 0 0 24 24",id:"Layer_1",viewBox:"0 0 24 24",xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,de)},he=r.a.forwardRef((function(e,t){return r.a.createElement(be,ue({svgRef:t},e))})),ge=(a.p,{TOGGLE_CART:"TOGGLE_CART"}),fe=Object(me.b)(null,(function(e){return{toggleCart:function(){return e({type:ge.TOGGLE_CART})}}}))((function(e){var t=e.toggleCart;return r.a.createElement("div",{className:"icon",onClick:t},r.a.createElement(he,{className:"ico"}))})),ve=a(161),Ee=a(169),ye=a(172),ke=a(171),Oe=a(170),je=a(176),we=Object(B.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,float:"right"},inline:{display:"inline"}}}));function Ue(){var e=we();return r.a.createElement(ve.a,{className:e.root},r.a.createElement(Ee.a,{alignItems:"flex-start"},r.a.createElement(Oe.a,null,r.a.createElement(je.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})),r.a.createElement(ke.a,{primary:"Here are the items in your cart",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},"Mexican Burrito")," \u2014 Are you ready to checkout\u2026")})),r.a.createElement(ye.a,{variant:"inset",component:"li"}),r.a.createElement(J.a,null," CHECKOUT "))}a(114);var Ce=Object(B.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(5)},title:{flexGrow:2},appBar:{backgroundColor:"#b53f7d"}}})),xe=Object(me.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,a=e.hidden,n=Ce();return r.a.createElement("div",{className:n.root},r.a.createElement("div",null,r.a.createElement(le.a,{position:"static",className:n.appBar},r.a.createElement(oe.a,null,r.a.createElement(ne.a,{variant:"h6",className:n.title},"free pickup!"),r.a.createElement("div",{className:"icon"}),t?r.a.createElement(J.a,{onClick:function(){return H.signOut()}},"Sign Out"):r.a.createElement(J.a,{component:se.b,to:"/login"},"Sign In"),r.a.createElement(fe,null)))),a?null:r.a.createElement(Ue,null))})),Se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setCurrentUser;this.unsubscribeFromAuth=H.onAuthStateChanged((function(a){return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=5;break}return n.next=3,o.a.awrap(F(a));case 3:n.sent.onSnapshot((function(e){t(Object(s.a)({id:e.id},e.data()))}),(function(){console.log(e.state)}));case 5:t(a);case 6:case"end":return n.stop()}}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(xe,null),r.a.createElement(O.d,null,r.a.createElement(O.b,{exact:!0,path:"/",component:U}),r.a.createElement(O.b,{path:"/mexican/",component:C}),r.a.createElement(O.b,{path:"/jamaican/",component:N}),r.a.createElement(O.b,{path:"/chinese/",component:S}),r.a.createElement(O.b,{path:"/bbq/",component:x}),r.a.createElement(O.b,{path:"/shop",component:ce}),r.a.createElement(O.b,{exact:!0,path:"/",render:function(){return e.props.currentUser?r.a.createElement(O.a,{to:"/"}):r.a.createElement(q,null)}})))}}]),t}(n.Component),Ne=Object(me.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(39),Re=a(84),Me=a.n(Re),Te={currentUser:null},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(s.a)({},e,{currentUser:t.payload});default:return e}},Ge={hidden:!0},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_CART":return Object(s.a)({},e,{hidden:!e.hidden});default:return e}},Ve=Object(Be.c)({user:We,cart:Pe}),Ae=[Me.a],Je=Object(Be.d)(Ve,Be.a.apply(void 0,Ae));c.a.render(r.a.createElement(me.a,{store:Je},r.a.createElement(se.a,{basename:"/Redux"},r.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,a){},97:function(e,t,a){e.exports=a(117)}},[[97,1,2]]]);
//# sourceMappingURL=main.b1232655.chunk.js.map