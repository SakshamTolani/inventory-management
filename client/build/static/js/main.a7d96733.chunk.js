(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),r=n.n(s),o=(n(28),n(2)),i=n(5),l=n(4),d=n(3),u=n.n(d),j=n(0),h=function(){var e=Object(c.useContext)(_),t=e.state,n=e.dispatch,a=Object(c.useState)(""),s=Object(o.a)(a,2),r=(s[0],s[1],Object(c.useState)([])),d=Object(o.a)(r,2),h=(d[0],d[1],Object(i.f)()),b=Object(c.useRef)(null);Object(c.useEffect)((function(){u.a.Modal.init(b.current)}),[]);return Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"nav-wrapper white",children:[Object(j.jsx)(l.b,{to:t?"/":"/signin",className:"brand-logo center",children:"Inventory Management"}),Object(j.jsx)("ul",{id:"nav-mobile",className:"left",children:t?[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/posts",children:"Products"})},"1"),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/profile",children:"Profile"})},"2"),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/categories",children:"Categories"})},"3"),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"btn waves-effect waves-light #0d47a1 blue light-4",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),h.push("/signin")},children:"Log Out"})},"5")]:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/Signin",children:"Login"})},"6"),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/signup",children:"Signup"})},"7")]})]})})},b=(n(34),function(){return Object(j.jsx)("div",{className:"home",style:{margin:"300px 550px",border:"2px solid black",textAlign:"center"},children:Object(j.jsx)("h5",{children:"Choose from the above options"})})}),p=function(){var e=Object(c.useContext)(_),t=(e.state,e.dispatch),n=Object(i.f)(),a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],d=s[1],h=Object(c.useState)(""),b=Object(o.a)(h,2),p=b[0],f=b[1];return Object(j.jsx)("div",{className:"mycard",children:Object(j.jsxs)("div",{className:"card auth-card input-field",children:[Object(j.jsx)("h2",{children:"Inventory Management"}),Object(j.jsx)("input",{type:"text",placeholder:"email address or phone number",value:r,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",value:p,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #0d47a1 blue light-4",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:p})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?u.a.toast({html:e.error,classes:"#651fff deep-purple accent-3"}):void 0!==e.user?(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),u.a.toast({html:"Signed In Successfully",classes:"#4caf50 green"}),n.push("/")):u.a.toast({html:"Enter correct password",classes:"#4caf50 red"}),console.log(e)})):u.a.toast({html:"Invalid Email",classes:"#d50000 red accent-4"})},children:"Log In"}),Object(j.jsxs)("h5",{children:["Dont have an account?",Object(j.jsx)(l.b,{to:"/Signup",children:"Sign Up"})]}),Object(j.jsx)(l.b,{to:"/reset",children:Object(j.jsx)("button",{className:"btn waves-effect waves-light #263238 blue-grey darken-4",children:"Forgot Password"})})]})})},f=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],d=r[1],h=Object(c.useState)(""),b=Object(o.a)(h,2),p=b[0],f=b[1],O=Object(c.useState)([]),g=Object(o.a)(O,2),m=(g[0],g[1],Object(c.useState)([])),x=Object(o.a)(m,2),y=(x[0],x[1],Object(i.f)(),Object(c.useContext)(_)),v=y.state,S=y.dispatch,w=Object(c.useState)(""),C=Object(o.a)(w,2);C[0],C[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:Object(j.jsx)("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"},children:Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:v?v.pic:"loading"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:v?v.name:"loading"}),Object(j.jsx)("h5",{children:v?v.email:"loading"}),Object(j.jsx)("h5",{children:v?v.phone:"loading"}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}})]})]})})}),Object(j.jsx)("div",{className:"row",style:{maxWidth:"550px",margin:"15px auto"},children:Object(j.jsx)("div",{className:"col s12 m6",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"card-content white-text",children:[Object(j.jsx)("label",{children:"User Name: "}),Object(j.jsx)("input",{defaultValue:v?v.name:"",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("label",{children:"Email: "}),Object(j.jsx)("input",{defaultValue:v?v.email:"",onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("label",{children:"Phone: "}),Object(j.jsx)("input",{defaultValue:v?v.phone:"",onChange:function(e){return f(e.target.value)}})]}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)("button",{onClick:function(e,t){""==n&&a(v.name),""==l&&d(v.email),""==p&&f(v.phone),n&&l&&p&&fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({name:n,email:l,phone:p})}).then((function(e){return e.json()})).then((function(e){e.error?u.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Profile updated Successfully",classes:"#43a047 green darken-1"}),fetch("/user/".concat(v._id),{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error?u.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(e.user&&localStorage.setItem("user",JSON.stringify(e.user)),S({type:"USER",payload:e.user}))})).catch((function(e){console.log(e)})))})).catch((function(e){console.log(e)}))},children:"Save"})})]})})})]})},O=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),d=Object(o.a)(r,2),h=d[0],b=d[1],p=Object(c.useState)(""),f=Object(o.a)(p,2),O=f[0],g=f[1],m=Object(c.useState)(""),x=Object(o.a)(m,2),y=x[0],v=x[1],S=Object(c.useState)(""),w=Object(o.a)(S,2),C=w[0],N=w[1],k=Object(c.useState)(void 0),I=Object(o.a)(k,2),_=I[0],A=I[1];Object(c.useEffect)((function(){_&&B()}),[_]);var B=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:O,phone:h,password:y,pic:_})}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#651fff deep-purple accent-3"}):(u.a.toast({html:t.message,classes:"#4caf50 green"}),e.push("/signin")),console.log(t)})):u.a.toast({html:"Invalid Email",classes:"#d50000 red accent-4"})},P=function(){C?function(){var e=new FormData;e.append("file",C),e.append("upload_preset","instagram"),e.append("cloud_name","sakshamtolani"),fetch("\thttps://api.cloudinary.com/v1_1/sakshamtolani/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){A(e.url)})).catch((function(e){console.log(e)}))}():B()};return Object(j.jsx)("div",{className:"mycard",children:Object(j.jsxs)("div",{class:"card auth-card input-field",children:[Object(j.jsx)("h2",{children:"Inventory Management"}),Object(j.jsx)("input",{type:"text",placeholder:"name",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"email address",value:O,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("input",{type:"tel",placeholder:"phone number",value:h,onChange:function(e){return b(e.target.value)}}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(j.jsx)("span",{children:"Upload Profile Picture"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return N(e.target.files[0])}})]}),Object(j.jsx)("div",{className:"file-path-wrapper",children:Object(j.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(j.jsx)("input",{type:"password",placeholder:"password",value:y,onChange:function(e){return v(e.target.value)}}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #0d47a1 blue light-4",onClick:function(){return P()},children:"Register"}),Object(j.jsxs)("h5",{children:["Already have an account?",Object(j.jsx)(l.b,{to:"/Signin",children:"Log In"})]}),Object(j.jsx)(l.b,{to:"/reset",children:Object(j.jsx)("button",{className:"btn waves-effect waves-light #263238 blue-grey darken-4",children:"Forgot Password"})})]})})},g=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),d=l[0],h=l[1],b=Object(c.useState)(""),p=Object(o.a)(b,2),f=p[0],O=p[1],g=Object(c.useState)(""),m=Object(o.a)(g,2),x=m[0],y=m[1],v=Object(c.useState)([]),S=Object(o.a)(v,2),w=S[0],C=S[1];Object(c.useEffect)((function(){fetch("/allcategory",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error?u.a.toast({html:e.error,classes:"#c62828 red darken-3"}):C(e)})).catch((function(e){console.log(e)}))}),[]);return Object(j.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(j.jsx)("input",{type:"text",placeholder:"Name of Product",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("input",{type:"number",placeholder:"Price",value:d,onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("input",{type:"number",placeholder:"Stock",value:f,onChange:function(e){return O(e.target.value)}}),Object(j.jsxs)("select",{className:"browser-default",onChange:function(e){return y(e.target.value)},defaultValue:"default",children:[Object(j.jsx)("option",{value:"default",disabled:!0,children:"Choose your category"}),w.posts&&w.posts.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.categoryName},e._id)}))]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({name:a,price:Number(d),stock:Number(f),category:x})}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"}),e.go(0))})).catch((function(e){console.log(e)}))},children:"Submit post"})]})},m=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(j.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(j.jsx)("input",{type:"text",placeholder:"Name of Category",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/createcategory",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({categoryName:a})}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Created category Successfully",classes:"#43a047 green darken-1"}),e.push("/categories"))})).catch((function(e){console.log(e)}))},children:"Submit Category"})]})},x=n(23),y=n(10),v=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(_),r=s.state,l=s.dispatch,d=Object(i.g)().userid,u=Object(c.useState)(!r||!r.following.includes(d)),h=Object(o.a)(u,2),b=h[0],p=h[1];Object(c.useEffect)((function(){fetch("/user/".concat(d),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:n?Object(j.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n.user.pic})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:n.user.name}),Object(j.jsx)("h5",{children:n.user.email}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(j.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(j.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(j.jsxs)("h6",{children:[n.user.following.length," following"]})]}),b?Object(j.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:d})}).then((function(e){return e.json()})).then((function(e){l({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){return Object(y.a)(Object(y.a)({},t),{},{user:Object(y.a)(Object(y.a)({},t.user),{},{followers:[].concat(Object(x.a)(t.user.followers),[e._id])})})})),p(!1)}))},children:"Follow"}):Object(j.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:d})}).then((function(e){return e.json()})).then((function(e){l({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){var n=t.user.followers.filter((function(t){return t!=e._id}));return Object(y.a)(Object(y.a)({},t),{},{user:Object(y.a)(Object(y.a)({},t.user),{},{followers:n})})})),p(!0)}))},children:"UnFollow"})]})]}),Object(j.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(j.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]}):Object(j.jsx)("h2",{children:"loading...!"})})},S=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(_),r=s.state;s.dispatch;Object(c.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.posts)}))}),[]);return Object(j.jsx)("div",{className:"home",children:n.map((function(e){return Object(j.jsxs)("div",{className:"card home-card",children:[Object(j.jsxs)("h5",{style:{padding:"5px"},children:[Object(j.jsx)(l.b,{to:e.postedBy._id!==r._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," ",e.postedBy._id==r._id&&Object(j.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));a(t)}));var t},children:"delete"})]}),Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:e.photo})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(r._id)?Object(j.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)}));var t},children:"thumb_down"}):Object(j.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)}));var t},children:"thumb_up"}),Object(j.jsx)("h6",{children:e.createdAt}),Object(j.jsxs)("h6",{children:[e.likes.length," Likes"]}),Object(j.jsx)("h6",{children:e.title}),Object(j.jsx)("p",{children:e.body}),e.comments.map((function(t){return Object(j.jsxs)("h6",{children:[Object(j.jsx)("span",{style:{fontWeight:"500"},children:t.postedBy.name})," ",t.text,(e.postedBy._id||t.postedBy._id)==r._id&&Object(j.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return c=e._id,s=t._id,void fetch("/deletecomment/".concat(c,"/").concat(s),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)}));var c,s},children:"delete"})]},t._id)})),Object(j.jsx)("form",{onSubmit:function(t){var c,s;t.preventDefault(),c=t.target[0].value,s=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:s,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:Object(j.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]})}))})},w=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(j.jsx)("div",{className:"mycard",children:Object(j.jsxs)("div",{class:"card auth-card input-field",children:[Object(j.jsx)("h2",{children:"Instabyte"}),Object(j.jsx)("input",{type:"text",placeholder:"email address or phone number",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #0d47a1 blue light-4",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?fetch("/reset-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):u.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},children:"Reset Password"})]})})},C=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(i.g)().token;console.log(r);return Object(j.jsx)("div",{className:"mycard",children:Object(j.jsxs)("div",{class:"card auth-card input-field",children:[Object(j.jsx)("h2",{children:"Instabyte"}),Object(j.jsx)("input",{type:"password",placeholder:"Enter New Password",value:a,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #0d47a1 blue light-4",onClick:function(){fetch("/new-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,token:r})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?u.a.toast({html:t.error,classes:"#651fff deep-purple accent-3"}):(u.a.toast({html:t.message,classes:"#4caf50 green"}),e.push("/signin")),console.log(t)}))},children:"Update Password"})]})})},N=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"==t.type?Object(y.a)({},e):"UPDATEPIC"==t.type?Object(y.a)(Object(y.a)({},e),{},{pic:t.payload}):e},k=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(0),l=Object(o.a)(r,2),d=l[0],h=l[1],b=Object(c.useState)(0),p=Object(o.a)(b,2),f=p[0],O=p[1],g=Object(c.useState)([]),m=Object(o.a)(g,2),x=m[0],y=m[1],v=Object(c.useState)([]),S=Object(o.a)(v,2),w=S[0],C=S[1],N=Object(c.useState)(""),k=Object(o.a)(N,2),I=k[0],_=k[1];return Object(c.useEffect)((function(){fetch("/allcategory",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error?u.a.toast({html:e.error,classes:"#c62828 red darken-3"}):C(e)})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){fetch("/allpost",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error?u.a.toast({html:e.error,classes:"#c62828 red darken-3"}):y(e)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"post-btn",style:{margin:"10px"},children:Object(j.jsx)("button",{onClick:function(){e.push("/createpost")},children:"Add Product"})}),x.posts?x.posts.map((function(t){return Object(j.jsx)("div",{className:"col s12 m6",children:Object(j.jsxs)("div",{className:"card blue-grey darken-0",children:[Object(j.jsxs)("div",{className:"card-content white-text",children:[Object(j.jsx)("label",{children:"Product Name: "}),Object(j.jsx)("input",{type:"text",defaultValue:t.name,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{children:"Price: "}),Object(j.jsx)("input",{defaultValue:t.price,onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("label",{children:"Stock: "}),Object(j.jsx)("input",{defaultValue:t.stock,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("label",{children:"Category: "}),Object(j.jsxs)("select",{className:"browser-default",onChange:function(e){return _(e.target.value)},defaultValue:t.category,children:[Object(j.jsx)("option",{value:"default",disabled:!0,children:"Choose your category"}),w.posts&&w.posts.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.categoryName},e._id)}))]})]}),Object(j.jsxs)("div",{className:"card-action",children:[Object(j.jsx)("button",{onClick:function(){return n=t._id,c=t.name,r=t.price,o=t.stock,i=t.category,""==a&&s(c),0==d&&h(r),0==f&&O(o),""==I&&_(i),void(a&&d&&f&&I&&fetch("/updateproduct",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({name:a,price:d,stock:f,category:I,postId:n})}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Product updated Successfully",classes:"#43a047 green darken-1"}),e.go(0))})).catch((function(e){console.log(e)})));var n,c,r,o,i},children:"Save"}),Object(j.jsx)("button",{onClick:function(){return n=t._id,void fetch("/deletepost/".concat(n),{method:"delete",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Product Deleted Successfully",classes:"#43a047 green darken-1"}),e.go(0))})).catch((function(e){console.log(e)}));var n},children:"Delete"})]})]})},t._id)})):Object(j.jsx)("div",{children:Object(j.jsx)("h5",{children:"No Product Found!!"})})]})},I=function(){var e=Object(i.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(o.a)(r,2),d=l[0],h=l[1];return Object(c.useEffect)((function(){fetch("/allcategory",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error?u.a.toast({html:e.error,classes:"#c62828 red darken-3"}):h(e)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"category-btn",style:{margin:"10px"},children:Object(j.jsx)("button",{onClick:function(){e.push("/createcategory")},children:"Add Category"})}),d.posts?d.posts.map((function(t){return Object(j.jsx)("div",{className:"col s12 m6",children:Object(j.jsxs)("div",{className:"card blue-grey darken-0",children:[Object(j.jsxs)("div",{className:"card-content white-text",children:[Object(j.jsx)("label",{children:"Category Name: "}),Object(j.jsx)("input",{defaultValue:t.categoryName,onChange:function(e){return s(e.target.value)}})]}),Object(j.jsxs)("div",{className:"card-action",children:[Object(j.jsx)("button",{onClick:function(){return n=t._id,c=t.categoryName,""==a&&s(c),void(a&&fetch("/updatecategory",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({categoryName:a,categoryId:n})}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Category updated Successfully",classes:"#43a047 green darken-1"}),e.go(0))})).catch((function(e){console.log(e)})));var n,c},children:"Save"}),Object(j.jsx)("button",{onClick:function(){return n=t._id,void fetch("/deletecategory/".concat(n),{method:"delete",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(t){t.error?u.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(u.a.toast({html:"Category Deleted Successfully",classes:"#43a047 green darken-1"}),e.go(0))})).catch((function(e){console.log(e)}));var n},children:"Delete"})]})]})},t._id)})):Object(j.jsx)("div",{children:Object(j.jsx)("h5",{children:"No Category Found!!"})})]})},_=Object(c.createContext)(),A=function(){var e=Object(i.f)(),t=Object(c.useContext)(_),n=(t.state,t.dispatch);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.location.pathname.startsWith("/reset")||e.push("/signin")}),[]),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(i.a,{path:"/signup",children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/profile",children:Object(j.jsx)(f,{})}),Object(j.jsx)(i.a,{path:"/signin",children:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/posts",children:Object(j.jsx)(k,{})}),Object(j.jsx)(i.a,{path:"/createPost",children:Object(j.jsx)(g,{})}),Object(j.jsx)(i.a,{path:"/categories",children:Object(j.jsx)(I,{})}),Object(j.jsx)(i.a,{path:"/createCategory",children:Object(j.jsx)(m,{})}),Object(j.jsx)(i.a,{path:"/profile/:userid",children:Object(j.jsx)(v,{})}),Object(j.jsx)(i.a,{path:"/myfollowingpost",children:Object(j.jsx)(S,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/reset",children:Object(j.jsx)(w,{})}),Object(j.jsx)(i.a,{path:"/reset/:token",children:Object(j.jsx)(C,{})})]})};var B=function(){var e=Object(c.useReducer)(N,null),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)(_.Provider,{value:{state:n,dispatch:a},children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(A,{})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),P()}},[[35,1,2]]]);
//# sourceMappingURL=main.a7d96733.chunk.js.map