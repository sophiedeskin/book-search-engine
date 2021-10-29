(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,a,t){e.exports=t(123)},110:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(39),m=t.n(u),d=(t(109),t(110),t(23)),b=t(97),p=t(140),g=t(141),v=t(137),k=t(95),E=t(51),h=t(12),f=t(98),w=t(20),O=t.n(w),j=t(32),S=t(15),y=t(132),I=t(133),x=t(139),C=t(91),B=t(134),T=t(135),F=t(147),L=t(87),$=t(88),_=t(78),N=t.n(_),q=new(function(){function e(){Object(L.a)(this,e)}return Object($.a)(e,[{key:"getProfile",value:function(){return N()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return N()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),D=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},P=t(45),G=t(96),J=Object(G.b)(n||(n=Object(P.a)(["\nmutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n    token\n        user {\n            _id\n            username\n        }\n    }\n}"]))),U=Object(G.b)(r||(r=Object(P.a)(["\n  mutation saveBook($bookData: BookInput!) {\n    saveBook(bookData: $bookData) {\n        _id\n        username\n        email\n        savedBooks {\n            bookId\n            authors\n            image\n            description\n            title\n            link\n        }\n    }\n  }\n"]))),Y=Object(G.b)(o||(o=Object(P.a)(["\n  mutation removeBook($bookId: ID!, $book: String!) {\n    removeBook(userId: $userId, book: $book) {\n        _id\n        username\n        email\n        savedBooks {\n            bookId\n            authors\n            image\n            description\n            title\n            link\n        }\n    }\n  }\n"]))),V=(Object(G.b)(l||(l=Object(P.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n}\n    }\n  }\n"]))),t(148)),K=function(){var e=Object(i.useState)([]),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(S.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(S.a)(u,2),b=m[0],p=m[1],g=Object(V.a)(U),v=Object(S.a)(g,2),k=v[0];v[1].error;Object(i.useEffect)((function(){return function(){var e;(e=b).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var E=function(){var e=Object(j.a)(O.a.mark((function e(a){var t,r,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(O.a.mark((function e(a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),q.loggedIn()?q.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,k({variables:{bookData:Object(d.a)({},n)}});case 7:r=e.sent,r.data,p([].concat(Object(f.a)(b),[n.bookId])),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(I.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(x.a,{onSubmit:E},s.a.createElement(x.a.Row,null,s.a.createElement(C.a,{xs:12,md:8},s.a.createElement(x.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(C.a,{xs:12,md:4},s.a.createElement(B.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(I.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(T.a,null,t.map((function(e){return s.a.createElement(F.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(F.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(F.a.Body,null,s.a.createElement(F.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(F.a.Text,null,e.description),q.loggedIn()&&s.a.createElement(B.a,{disabled:null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return h(e.bookId)}},(null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},z=Object(G.a)(c||(c=Object(P.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),A=t(144),M=function(){var e=Object(V.a)(Y),a=Object(S.a)(e,2),t=a[0],n=a[1].error,r=Object(A.a)(z),o=r.loading,l=r.data,c=(null===l||void 0===l?void 0:l.me)||{},i=function(){var e=Object(j.a)(O.a.mark((function e(a){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.loggedIn()?q.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,t({variables:{bookId:a}});case 6:if(r=e.sent,r.data,!n){e.next=10;break}throw new Error("something went wrong!");case 10:D(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}();return o?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(I.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(I.a,null,s.a.createElement("h2",null,c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(T.a,null,c.savedBooks.map((function(e){return s.a.createElement(F.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(F.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(F.a.Body,null,s.a.createElement(F.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(F.a.Text,null,e.description),s.a.createElement(B.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)}},"Delete this Book!")))})))))},H=t(143),R=t(142),W=t(138),Q=t(145),X=t(48),Z=t(136),ee=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(S.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(S.a)(l,2),u=c[0],m=c[1],b=Object(V.a)(J),p=Object(S.a)(b,2),g=p[0],v=(p[1].error,function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(X.a)({},r,o)))}),k=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,g({variables:Object(d.a)({},t)});case 4:r=e.sent,o=r.data,q.login(o.addUser.token),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),m(!0);case 13:n({username:"",email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:o,onSubmit:k},s.a.createElement(Z.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:v,value:t.username,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:v,value:t.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:v,value:t.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ae=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(S.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(S.a)(l,2),u=c[0],m=c[1],b=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(X.a)({},r,o)))},p=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,o,l,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,i=t,fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,r.json();case 11:o=e.sent,l=o.token,c=o.user,console.log(c),q.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),m(!0);case 22:n({username:"",email:"",password:""});case 23:case"end":return e.stop()}var i}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:o,onSubmit:p},s.a.createElement(Z.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:b,value:t.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:b,value:t.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},te=function(){var e=Object(i.useState)(!1),a=Object(S.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(H.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(I.a,{fluid:!0},s.a.createElement(H.a.Brand,{as:E.b,to:"/"},"Google Books Search"),s.a.createElement(H.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(H.a.Collapse,{id:"navbar"},s.a.createElement(R.a,{className:"ml-auto"},s.a.createElement(R.a.Link,{as:E.b,to:"/"},"Search For Books"),q.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a.Link,{as:E.b,to:"/saved"},"See Your Books"),s.a.createElement(R.a.Link,{onClick:q.logout},"Logout")):s.a.createElement(R.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(W.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(Q.a.Container,{defaultActiveKey:"login"},s.a.createElement(W.a.Header,{closeButton:!0},s.a.createElement(W.a.Title,{id:"signup-modal"},s.a.createElement(R.a,{variant:"pills"},s.a.createElement(R.a.Item,null,s.a.createElement(R.a.Link,{eventKey:"login"},"Login")),s.a.createElement(R.a.Item,null,s.a.createElement(R.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(W.a.Body,null,s.a.createElement(Q.a.Content,null,s.a.createElement(Q.a.Pane,{eventKey:"login"},s.a.createElement(ae,{handleModalClose:function(){return n(!1)}})),s.a.createElement(Q.a.Pane,{eventKey:"signup"},s.a.createElement(ee,{handleModalClose:function(){return n(!1)}})))))))},ne=Object(b.a)({uri:"/graphql"}),re=Object(k.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),oe=new p.a({link:re.concat(ne),cache:new g.a});var le=function(){return s.a.createElement(v.a,{client:oe},s.a.createElement(E.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(te,null),s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/",component:K}),s.a.createElement(h.a,{exact:!0,path:"/saved",component:M}),s.a.createElement(h.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(le,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.18c9d1ff.chunk.js.map