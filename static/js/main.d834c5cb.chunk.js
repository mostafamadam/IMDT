(this.webpackJsonpimdt=this.webpackJsonpimdt||[]).push([[0],{10:function(e,t,a){e.exports={white_Col:"Home_white_Col__3lv0q",before:"Home_before__1N8NV",after:"Home_after__3g5TW",card:"Home_card__1Bp4w",padding:"Home_padding__1CkFi",name:"Home_name__2fD2z",rate:"Home_rate__3lFVZ"}},16:function(e,t,a){e.exports={Main_bg_color:"Navbar_Main_bg_color__3Ou9t",navIcon:"Navbar_navIcon__c3Tc2",NavBar_logo:"Navbar_NavBar_logo__2lXmV",Navbar_border:"Navbar_Navbar_border__5sKI_",logOut:"Navbar_logOut__xQepQ",navbar_nav:"Navbar_navbar_nav__2E0dN"}},22:function(e,t,a){e.exports={movie_details:"Movie_movie_details__DXwD4",genres:"Movie_genres__1YfmR",movie_desc:"Movie_movie_desc__L8_oA"}},39:function(e,t,a){e.exports={mainbtn:"Login_mainbtn__2WeAC"}},40:function(e,t,a){e.exports={mainbtn:"Register_mainbtn__1Nf8O"}},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),s=a.n(c),i=a(15),o=(a(46),a(47),a(50),a(51),a(52),a(5)),l=a(6),m=a(8),j=a(7),d=a(3),b=a(4),p=a.n(b),u=a(17),h=a(18),v=a.n(h),g=a(16),O=a.n(g),x=a(19),f=a(0),N=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={LoggedIn:""},e.user={token:""},e.Logout=Object(u.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.user.token=localStorage.getItem("token"),t.next=3,v.a.post("https://route-egypt-api.herokuapp.com/signOut",e.user);case 3:a=t.sent,"success"===a.data.message&&(localStorage.removeItem("token"),e.props.history.replace("/Login"),e.setState({LoggedIn:!1}));case 6:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"",children:Object(f.jsxs)("nav",{className:"".concat(O.a.Main_bg_color," ").concat(O.a.Navbar_border," navbar navbar-expand-lg navbar-dark"),children:[Object(f.jsx)(i.c,{className:"".concat(O.a.NavBar_logo," navbar-brand"),to:"/Home",children:"IMDT"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(f.jsx)("form",{className:"form-inline ml-auto my-2 my-lg-0",children:Object(f.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"})}),Object(f.jsxs)("ul",{className:"".concat(O.a.navbar_nav," navbar-nav"),children:[Object(f.jsx)("li",{"data-target":"#navbarSupportedContent",className:"nav-item",children:Object(f.jsx)("i",{className:"".concat(O.a.navIcon," fab fa-facebook")})}),Object(f.jsx)("li",{"data-target":"#navbarSupportedContent",className:"nav-item",children:Object(f.jsx)("i",{className:"".concat(O.a.navIcon," fab fa-spotify")})}),Object(f.jsx)("li",{"data-target":"#navbarSupportedContent",className:"nav-item",children:Object(f.jsx)("i",{className:"".concat(O.a.navIcon," fab fa-instagram")})}),Object(f.jsx)("li",{"data-target":"#navbarSupportedContent",className:"nav-item",children:Object(f.jsx)("i",{className:"".concat(O.a.navIcon," fab fa-youtube")})})]}),Object(f.jsx)("ul",{className:"navbar-nav ml-lg-4",children:Object(f.jsx)("li",{className:"nav-item",children:localStorage.getItem("token")?Object(f.jsx)(i.c,{onClick:this.Logout,to:"/Login",children:Object(f.jsx)("button",{"data-target":"#navbarSupportedContent",className:"".concat(O.a.logOut," nav-link"),children:"Logout"})}):Object(f.jsx)(i.c,{to:"/Login",children:Object(f.jsx)("button",{"data-target":"#navbarSupportedContent",className:"".concat(O.a.logOut," nav-link"),children:"Login"})})})})]})]})})}}]),a}(n.Component);var _=Object(x.b)((function(e){return{LoggedIn:e.LoggedIn}}),null)(N),y=a(38),w=a(10),k=a.n(w),I=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:[],tv:[],selected:""},e.getTrending=function(){var t=Object(u.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://api.themoviedb.org/3/trending/".concat(a,"/day?api_key=019e8f375549e0bbd4a4191862ebc88f"));case 2:n=t.sent,r=n.data,e.setState(Object(y.a)({},a,r.results));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.Itemclick=function(t,a){e.props.movieDetails(t,a),e.props.history.replace("/Movie")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getTrending("movie"),this.getTrending("tv")}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"".concat(k.a.padding," container"),children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"".concat(k.a.card," col-sm-4"),children:Object(f.jsxs)("div",{className:"position-relative",children:[Object(f.jsxs)("h5",{className:"".concat(k.a.white_Col," ").concat(k.a.before),children:["Trending ",Object(f.jsx)("br",{})," movies ",Object(f.jsx)("br",{})," to watch now"]}),Object(f.jsx)("p",{className:"".concat(k.a.after),children:"Most watched movies by days"})]})}),this.state.movie.map((function(t,a){return Object(f.jsxs)("div",{onClick:function(){return e.Itemclick(t.id,"movie")},className:"position-relative text-center col-sm-4 col-lg-2",children:[Object(f.jsx)("span",{className:"".concat(k.a.rate),children:t.vote_average}),Object(f.jsx)("img",{src:"https://www.themoviedb.org/t/p/w1280"+t.poster_path,className:"w-100",alt:t.Name}),Object(f.jsx)("p",{className:"".concat(k.a.name),children:t.original_title?t.original_title:t.original_name})]},a)}))]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"".concat(k.a.card," col-sm-4"),children:Object(f.jsxs)("div",{className:"position-relative",children:[Object(f.jsxs)("h5",{className:"".concat(k.a.white_Col," ").concat(k.a.before),children:["Trending ",Object(f.jsx)("br",{})," TV ",Object(f.jsx)("br",{})," to watch now"]}),Object(f.jsx)("p",{className:"".concat(k.a.after),children:"Most watched TV shows by days"})]})}),this.state.tv.map((function(t,a){return Object(f.jsxs)("div",{onClick:function(){return e.Itemclick(t.id,"tv")},className:"position-relative text-center col-sm-4 col-lg-2",children:[Object(f.jsx)("span",{className:"".concat(k.a.rate),children:t.vote_average}),Object(f.jsx)("img",{src:"https://www.themoviedb.org/t/p/w1280"+t.poster_path,className:"w-100",alt:t.Name}),Object(f.jsx)("p",{className:"".concat(k.a.name),children:t.original_name})]},a)}))]})]})}}]),a}(n.Component);var L=Object(x.b)((function(e){return{index:e.index,type:e.ItemType}}),(function(e){return{movieDetails:function(t,a){return e({type:"MovieDetails",index:t,itemType:a})}}}))(I),C=a(39),D=a.n(C),F=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:""},e.user={email:"",password:""},e.getFormData=function(t){e.user[t.target.name]=t.target.value},e.sendData=function(){var t=Object(u.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,v.a.post("https://route-egypt-api.herokuapp.com/signin",e.user);case 3:n=t.sent,"success"!==(r=n.data).message?e.setState({error:r.message}):(localStorage.setItem("token",r.token),e.props.LoginFunc(!0),e.props.history.replace("/Home"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return localStorage.getItem("token")?Object(f.jsx)(d.a,{to:"/Home"}):Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row justify-content-center align-items-center mt-5",children:Object(f.jsx)("div",{className:"col-9",children:Object(f.jsxs)("div",{className:"login text-white",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("h1",{children:"Login form"})}),Object(f.jsx)("div",{className:"login_form",children:Object(f.jsxs)("form",{onSubmit:this.sendData,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"exampleInputEmail1",children:"email :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"email",type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"exampleInputPassword1",children:"password :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"password",type:"password",className:"form-control",id:"exampleInputPassword1"})]}),""!==this.state.error?Object(f.jsx)("div",{className:"alert alert-danger text-center",children:this.state.error}):"",Object(f.jsxs)("span",{children:["don't have account ? ",Object(f.jsx)(i.b,{to:"/register",children:"register"})]}),Object(f.jsx)("button",{type:"submit",className:"".concat(D.a.mainbtn," btn btn-primary"),children:"Submit"})]})})]})})})})}}]),a}(n.Component);var S=Object(x.b)((function(e){return{LoggedIn:e.LoggedIn}}),(function(e){return{LoginFunc:function(t){return e({type:"Login",LoggedIn:t})}}}))(F),T=a(40),M=a.n(T),H=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).user={firstName:"",lastName:"",age:"",email:"",password:""},e.getFormData=function(t){e.user[t.target.name]=t.target.value},e.submitData=function(){var t=Object(u.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,v.a.post("https://route-egypt-api.herokuapp.com/signup",e.user);case 3:n=t.sent,n.data,e.props.history.replace("/Login");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row justify-content-center align-items-center mt-5",children:Object(f.jsx)("div",{className:"col-9",children:Object(f.jsxs)("div",{className:"register text-white",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("h1",{children:"Registeration form"})}),Object(f.jsx)("div",{className:"register_form",children:Object(f.jsxs)("form",{onSubmit:this.submitData,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"registerFirstName",children:"first name :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"firstName",type:"text",className:"form-control",id:"registerFirstName","aria-describedby":"emailHelp"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"registerLastName",children:"last name :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"lastName",type:"text",className:"form-control",id:"registerLastName","aria-describedby":"emailHelp"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"registerAge",children:"age :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"age",type:"number",className:"form-control",id:"registerAge","aria-describedby":"emailHelp"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"registerEmail",children:"email :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"email",type:"email",className:"form-control",id:"registerEmail","aria-describedby":"emailHelp"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"registerPassword",children:"password :"}),Object(f.jsx)("input",{onBlur:this.getFormData,name:"password",type:"password",className:"form-control",id:"registerPassword"})]}),Object(f.jsx)("button",{type:"Register",className:"".concat(M.a.mainbtn," btn btn-primary"),children:"Register"})]})})]})})})})}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return localStorage.getItem("token")?Object(f.jsx)(d.b,{exact:!0,path:this.props.path,component:this.props.component}):Object(f.jsx)(d.a,{to:"/Login"})}}]),a}(n.Component),A=a(22),P=a.n(A),R=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:{genres:[]}},e.getMovieDetails=Object(u.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://api.themoviedb.org/3/".concat(e.props.type,"/").concat(e.props.index,"?api_key=019e8f375549e0bbd4a4191862ebc88f"));case 2:a=t.sent,n=a.data,e.setState({movie:n}),console.log(e.state.movie),console.log(e.state.movie.genres);case 7:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovieDetails()}},{key:"render",value:function(){return this.props.type?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container pt-5",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-4",children:Object(f.jsx)("div",{className:P.a.movie_img,children:Object(f.jsx)("img",{src:"https://www.themoviedb.org/t/p/w1280"+this.state.movie.poster_path,className:"w-100",alt:""})})}),Object(f.jsx)("div",{className:"col-8",children:Object(f.jsxs)("div",{className:P.a.movie_details,children:[Object(f.jsx)("h1",{children:this.state.movie.title?this.state.movie.title:this.state.movie.name}),Object(f.jsx)("div",{className:P.a.genres,children:this.state.movie.genres.map((function(e,t){return Object(f.jsx)("span",{children:e.name},t)}))}),Object(f.jsxs)("div",{className:"my-2",children:[Object(f.jsx)("span",{children:"Vote : "}),Object(f.jsx)("span",{children:this.state.movie.vote_average})]}),Object(f.jsxs)("div",{className:"my-2",children:[Object(f.jsx)("span",{children:"Vote count : "}),Object(f.jsx)("span",{children:this.state.movie.vote_count})]}),Object(f.jsxs)("div",{className:"my-2",children:[Object(f.jsx)("span",{children:"Popularity : "}),Object(f.jsx)("span",{children:this.state.movie.popularity})]}),Object(f.jsxs)("div",{className:"my-2",children:[Object(f.jsx)("span",{children:"Release date : "}),Object(f.jsx)("span",{children:this.state.movie.release_date})]}),Object(f.jsx)("p",{className:P.a.movie_desc,children:this.state.movie.overview})]})})]})})}):Object(f.jsx)(d.a,{to:"/Home"})}}]),a}(n.Component);var V=Object(x.b)((function(e){return{index:e.index,type:e.ItemType}}),null)(R),E=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.b,{path:"/",component:_}),Object(f.jsx)(B,{path:"/Home",component:L}),Object(f.jsx)(d.b,{path:"/Movie",component:V}),Object(f.jsx)(d.b,{exact:!0,path:"/Login",component:S}),Object(f.jsx)(d.b,{exact:!0,path:"/Register",component:H})]})}}]),a}(n.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Q=a(41),W={LoggedIn:"",index:"",ItemType:""};var X=Object(Q.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"MovieDetails"===t.type?(e.index=t.index,e.ItemType=t.itemType):"Login"===t.type&&(e.LoggedIn=t.LoggedIn),e}));s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(x.a,{store:X,children:Object(f.jsx)(i.a,{children:Object(f.jsx)(E,{})})})}),document.getElementById("root")),J()}},[[77,1,2]]]);
//# sourceMappingURL=main.d834c5cb.chunk.js.map