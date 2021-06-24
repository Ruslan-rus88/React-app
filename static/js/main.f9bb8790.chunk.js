(this["webpackJsonpreact-course-app"]=this["webpackJsonpreact-course-app"]||[]).push([[0],{16:function(e,t,a){},2:function(e,t,a){e.exports={signIn:"signIn_signIn__2ehqs",signIn__container:"signIn_signIn__container__3FMPE",close:"signIn_close__3Uikh",signIn__title:"signIn_signIn__title__1BTFd",signIn__form:"signIn_signIn__form__rRjcD",actions:"signIn_actions__3WoTQ",signIn__action_btn:"signIn_signIn__action_btn__VIDWe",signInInput:"signIn_signInInput__yxeEs",invalidInput:"signIn_invalidInput__2LcTR"}},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(19),c=a.n(r),i=(a(25),a(4)),l=(a(26),a(0)),o=function(e){var t=e.title,a=e.errorMessage,s=e.resetError;return Object(l.jsxs)("div",{className:"error__container",children:[Object(l.jsx)("div",{className:"error__background",onClick:s}),Object(l.jsxs)("div",{className:"error__wrapper",children:[Object(l.jsx)("header",{className:"error__header",children:Object(l.jsx)("h1",{className:"error__title",children:t})}),Object(l.jsx)("main",{className:"error__main",children:Object(l.jsx)("p",{className:"error__message",children:a})}),Object(l.jsx)("footer",{className:"error__footer",children:Object(l.jsx)("button",{className:"error__button",onClick:s,children:"Close"})})]})]})},u=a(11),d=(a(16),a(7)),m=a(10),j=function(e){var t=e.setError,a=Object(s.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1],j=Object(s.useState)(""),b=Object(i.a)(j,2),_=b[0],g=b[1],p=Object(s.useState)([]),O=Object(i.a)(p,2),h=O[0],f=O[1],x=Object(s.useState)(!0),N=Object(i.a)(x,2),v=N[0],I=N[1],y=Object(s.useState)(!0),w=Object(i.a)(y,2),S=w[0],C=w[1];Object(s.useEffect)((function(){var e=localStorage.getItem("usersList");e&&f(JSON.parse(e))}),[]);return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"users wrapper",children:[Object(l.jsxs)("form",{className:"users__form",onSubmit:function(e){e.preventDefault();var a=c.trim().length,s=_.trim().length;if(a<1&&s<1)return t({title:"Wrong input",errorMessage:"Please enter valid names!"}),I(!1),void C(!1);if(a<1)return t({title:"Wrong input",errorMessage:"Please enter a valid first name!"}),void I(!1);if(s<1)return t({title:"Wrong input",errorMessage:"Please enter a valid last name!"}),void C(!1);var n=localStorage.getItem("usersList");n=(n=JSON.parse(n))?[].concat(Object(u.a)(n),[{firstName:c,lastName:_,id:Object(d.v4)()}]):[{firstName:c,lastName:_,id:Object(d.v4)()}],localStorage.setItem("usersList",JSON.stringify(n)),f(n),o(""),g("")},children:[Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"first-name",className:"users__label ".concat(v?"":"notValid"),children:"First Name:"}),Object(l.jsx)("input",{type:"text",id:"first-name",className:"users__input ".concat(v?"":"notValidInput"),placeholder:"Enter First Name",onChange:function(e){o(e.target.value),I(e.target.value.trim().length>0)},value:c})]}),Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"last-name",className:"users__label ".concat(S?"":"notValid"),children:"Last Name:"}),Object(l.jsx)("input",{type:"text",id:"last-name",className:"users__input ".concat(S?"":"notValidInput"),placeholder:"Enter Last Name",onChange:function(e){g(e.target.value),C(e.target.value.trim().length>0)},value:_})]}),Object(l.jsx)("button",{className:"users__btn",type:"Submit",children:"Submit"})]}),Object(l.jsx)("h2",{className:"users__title",children:"Users"}),h&&Object(l.jsx)("ul",{className:"users__list",children:h.map((function(e){return Object(l.jsxs)("li",{className:"users__item",children:[Object(l.jsxs)("span",{children:[e.firstName," ",e.lastName]}),Object(l.jsx)("button",{className:"users__delete",onClick:function(){return function(e){var t=localStorage.getItem("usersList");t=(t=JSON.parse(t)).filter((function(t){return t.id!==e})),localStorage.setItem("usersList",JSON.stringify(t)),f(t)}(e.id)},children:Object(l.jsx)(m.c,{})})]},e.id)}))}),0===h.length&&Object(l.jsx)("div",{className:"users__empty",children:"....No users to display...."})]})})},b=a(3),_={firstName:"",lastName:"",validFirstName:null,validLastName:null,users:[]},g=function(e,t){switch(t.type){case"update_users_list":return Object(b.a)(Object(b.a)({},e),{},{users:t.usersList});case"fistName_update":return Object(b.a)(Object(b.a)({},e),{},{firstName:t.value,validFirstName:t.value.trim().length>0});case"lastName_update":return Object(b.a)(Object(b.a)({},e),{},{lastName:t.value,validLastName:t.value.trim().length>0});case"delete_user":var a=e.users.filter((function(e){return e.id!==t.id}));return localStorage.setItem("useReducer_usersList",JSON.stringify(a)),Object(b.a)(Object(b.a)({},e),{},{users:a});case"submit_user":var s=[].concat(Object(u.a)(t.oldUsersList),[{firstName:e.firstName,lastName:e.lastName,id:Object(d.v4)()}]);return localStorage.setItem("useReducer_usersList",JSON.stringify(s)),{firstName:"",lastName:"",validFirstName:null,validLastName:null,users:s};default:throw new Error}},p=function(e){var t=e.setError,a=Object(s.useReducer)(g,_),r=Object(i.a)(a,2),c=r[0],o=r[1];Object(s.useEffect)((function(){var e=localStorage.getItem("useReducer_usersList");(e=JSON.parse(e))&&o({type:"update_users_list",usersList:e})}),[]);return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"users wrapper",children:[Object(l.jsxs)("form",{className:"users__form",onSubmit:function(e){if(e.preventDefault(),c.validFirstName||c.validLastName)if(c.validFirstName)if(c.validLastName){var a=localStorage.getItem("useReducer_usersList");o({type:"submit_user",oldUsersList:a?JSON.parse(a):[]})}else t({title:"Wrong input",errorMessage:"Please enter a valid last name!"});else t({title:"Wrong input",errorMessage:"Please enter a valid first name!"});else t({title:"Wrong input",errorMessage:"Please enter valid names!"})},children:[Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"first-name",className:"users__label ".concat(!1===c.validFirstName?"notValid":""),children:"First Name:"}),Object(l.jsx)("input",{type:"text",id:"first-name",className:"users__input ".concat(!1===c.validFirstName?"notValidInput":""),placeholder:"Enter First Name",onChange:function(e){return o({type:"fistName_update",value:e.target.value})},value:c.firstName})]}),Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"last-name",className:"users__label ".concat(!1===c.validLastName?"notValid":""),children:"Last Name:"}),Object(l.jsx)("input",{type:"text",id:"last-name",className:"users__input ".concat(!1===c.validLastName?"notValidInput":""),placeholder:"Enter Last Name",onChange:function(e){return o({type:"lastName_update",value:e.target.value})},value:c.lastName})]}),Object(l.jsx)("button",{className:"users__btn",type:"Submit",children:"Submit"})]}),Object(l.jsx)("h2",{className:"users__title",children:"Users"}),c.users&&Object(l.jsx)("ul",{className:"users__list",children:c.users.map((function(e){return Object(l.jsxs)("li",{className:"users__item",children:[Object(l.jsxs)("span",{children:[e.firstName," ",e.lastName]}),Object(l.jsx)("button",{className:"users__delete",onClick:function(){return o({type:"delete_user",id:e.id})},children:Object(l.jsx)(m.c,{})})]},e.id)}))}),0===c.users.length&&Object(l.jsx)("div",{className:"users__empty",children:"....No users to display...."})]})})},O=function(){var e=Object(s.useRef)(),t=Object(s.useRef)("<h2>initial ref</h2>");return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.current.value=""},children:[Object(l.jsx)("label",{htmlFor:"input",children:"Name"}),Object(l.jsx)("input",{id:"input",ref:e,onChange:function(){console.log(e.current),console.log(e.current.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{ref:t,onClick:function(){console.log("test"),t.current.innerHTML="<h2>test is <i>passed!</i></h2",console.log(t.current.innerHTML)},children:"initial test"})]})},h=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){console.log("Use Effect runs one time only")}),[]),Object(s.useEffect)((function(){return console.log("Use Effect with return CLEANUP FUNCTION"),function(){console.log("--------\nCLEANUP\n--------")}}),[]),Object(s.useEffect)((function(){var e=setTimeout((function(){console.log("***********\n***********\nfetch data example!!\n***********\n***********")}),1e3);return function(){console.log("clear timeout!"),clearTimeout(e)}}),[a]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"useEffect Example"}),Object(l.jsx)("label",{htmlFor:"input",children:"Input"}),Object(l.jsx)("input",{type:"text",id:"input",onChange:function(e){n(e.target.value)},value:a})]})},f={count:0};function x(e,t){switch(console.log("state: ",e),console.log("action: ",t),t.type){case"decrement":return{count:e.count-1};case"increment":return{count:e.count+1};default:throw new Error}}var N=function(){var e=Object(s.useReducer)(x,f),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"useReducer Example (Counter)"}),Object(l.jsxs)("p",{children:["Count: ",a.count]}),Object(l.jsx)("button",{onClick:function(){return n({type:"decrement"})},children:"-"}),Object(l.jsx)("button",{onClick:function(){return n({type:"increment"})},children:"+"})]})},v=a(6),I=a.n(v),y=n.a.createContext({isLoggedIn:!1,loggedUser:{},setLoggedUser:function(){},setIsLoggedIn:function(){},navPage:"Home",setNavPage:function(){},navBarPages:[]}),w=function(e){var t=e.navBarPages,a=Object(s.useContext)(y);return Object(l.jsx)("header",{className:I.a.header,children:Object(l.jsxs)("div",{className:"wrapper ".concat(I.a.header__wrapper),children:[Object(l.jsx)("div",{className:"".concat(I.a.box," ").concat(I.a.box__logo),children:Object(l.jsx)("h1",{className:I.a.logo__title,children:"React App"})}),Object(l.jsx)("div",{className:"".concat(I.a.box," ").concat(I.a.box__navBar),children:a.isLoggedIn&&Object(l.jsx)("nav",{className:I.a.nav,children:Object(l.jsx)("ul",{className:I.a.header__list,children:t.map((function(e){return Object(l.jsx)("li",{className:"".concat(I.a.header__item," ").concat(a.navPage===e?I.a.active:""),onClick:function(){return a.setNavPage(e)},children:e},Object(d.v4)())}))})})}),Object(l.jsxs)("div",{className:"".concat(I.a.box," ").concat(I.a.box__login),children:[!a.isLoggedIn&&Object(l.jsx)("button",{className:"".concat(I.a.button," ").concat(I.a.signInBtn),onClick:function(){return a.setNavPage("Sign in")},children:"Sign in"}),a.isLoggedIn&&Object(l.jsx)("button",{className:I.a.button,onClick:function(){localStorage.removeItem("loggedUser"),a.setIsLoggedIn(!1),a.setNavPage("Home")},children:"Sign out"})]})]})})},S=a(9),C=a.n(S),L=function(){var e=Object(s.useContext)(y);return Object(l.jsxs)("div",{className:"wrapper",children:[!e.isLoggedIn&&Object(l.jsxs)("div",{className:C.a.home,children:[Object(l.jsxs)("h2",{className:C.a.signInText,children:["Hello there!",Object(l.jsx)("br",{})," Please sign in to view the content!!"]}),Object(l.jsxs)("div",{className:C.a.note__box,children:[Object(l.jsx)("h4",{className:C.a.note__important,children:"Important!!"}),Object(l.jsx)("p",{className:C.a.note__text,children:"The local storage of your browser will be used to save all entered data in Sign up and Sign in forms"})]}),Object(l.jsx)(m.a,{className:C.a.arrowUp})]}),e.isLoggedIn&&Object(l.jsxs)("div",{className:C.a.home,children:[Object(l.jsxs)("h2",{className:C.a.greeting,children:["Hello ",e.loggedUser.name," ",e.loggedUser.lastName]}),Object(l.jsx)("h1",{className:C.a.title,children:"Welcome to My React World!!"}),Object(l.jsx)("p",{children:"Please choose a page in navbar"})]})]})},E=a(2),U=a.n(E),P={name:"",nameIsValid:!1,lastName:"",lastNameIsValid:!1,email:"",emailIsValid:!1,password:"",passwordIsValid:!1},T=function(e,t){switch(t.type){case"updateName":return Object(b.a)(Object(b.a)({},e),{},{name:t.name,nameIsValid:t.name.trim().length>0});case"updateLastName":return Object(b.a)(Object(b.a)({},e),{},{lastName:t.lastName,lastNameIsValid:t.lastName.trim().length>0});case"updateEmail":return Object(b.a)(Object(b.a)({},e),{},{email:t.email,emailIsValid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)});case"updatePassword":return Object(b.a)(Object(b.a)({},e),{},{password:t.password,passwordIsValid:t.password.trim().length>=6});case"submit":var a=localStorage.getItem("logged-users");a=JSON.parse(a);var s=[{name:e.name,lastName:e.lastName,email:e.email,password:e.password}];if(a){if(0!==a.filter((function(t){return t.email===e.email})).length)return P;s=Object(u.a)(a).concat(s)}return localStorage.setItem("logged-users",JSON.stringify(s)),P;default:return}},V=function(){var e=Object(s.useReducer)(T,P),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("form",{className:U.a.signIn__form,onSubmit:function(e){e.preventDefault(),a.nameIsValid&&a.lastNameIsValid&&a.emailIsValid&&a.passwordIsValid&&n({type:"submit"})},children:[Object(l.jsx)("div",{className:U.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(U.a.signInInput," ").concat(a.nameIsValid?"":U.a.invalidInput),id:"signup_name",placeholder:"Name",value:a.name,onChange:function(e){return n({type:"updateName",name:e.target.value})}})}),Object(l.jsx)("div",{className:U.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(U.a.signInInput," ").concat(a.lastNameIsValid?"":U.a.invalidInput),id:"signup_lastName",placeholder:"Last Name",value:a.lastName,onChange:function(e){return n({type:"updateLastName",lastName:e.target.value})}})}),Object(l.jsx)("div",{className:U.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(U.a.signInInput," ").concat(a.emailIsValid?"":U.a.invalidInput),id:"signup_email",placeholder:"Email",value:a.email,onChange:function(e){return n({type:"updateEmail",email:e.target.value})}})}),Object(l.jsx)("div",{className:U.a.signIn__Block,children:Object(l.jsx)("input",{type:"password",className:"".concat(U.a.signInInput," ").concat(a.passwordIsValid?"":U.a.invalidInput),id:"signup_password",placeholder:"Password",value:a.password,onChange:function(e){return n({type:"updatePassword",password:e.target.value})}})}),Object(l.jsx)("button",{type:"submit",className:U.a.signIn__submit,children:"Sign up"})]})},k={email:"",emailIsValid:!1,password:"",passwordIsValid:!1,loggedUser:{}},F=function(e,t){switch(t.type){case"updateEmail":return Object(b.a)(Object(b.a)({},e),{},{email:t.email,emailIsValid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)});case"updatePassword":return Object(b.a)(Object(b.a)({},e),{},{password:t.password,passwordIsValid:t.password.trim().length>=6});case"submit":var a=localStorage.getItem("logged-users");a=JSON.parse(a);var s={};return a&&a.forEach((function(t){t.email===e.email&&t.password===e.password&&(s=t,localStorage.setItem("loggedUser",JSON.stringify(t)))})),Object(b.a)(Object(b.a)({},k),{},{loggedUser:s});default:return}},H=function(){var e=Object(s.useReducer)(F,k),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(y);Object(s.useEffect)((function(){a.loggedUser!==r.loggedUser&&a.loggedUser.email&&(r.setLoggedUser(a.loggedUser),r.setNavPage("Home"),r.setIsLoggedIn(!0))}),[a.loggedUser]);return Object(l.jsxs)("form",{className:U.a.signIn__form,onSubmit:function(e){e.preventDefault(),a.emailIsValid&&a.passwordIsValid&&n({type:"submit"})},children:[Object(l.jsx)("div",{className:U.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(U.a.signInInput," ").concat(a.emailIsValid?"":U.a.invalidInput),id:"signup_email",placeholder:"Email",value:a.email,onChange:function(e){return n({type:"updateEmail",email:e.target.value})}})}),Object(l.jsx)("div",{className:U.a.signIn__Block,children:Object(l.jsx)("input",{type:"password",className:"".concat(U.a.signInInput," ").concat(a.passwordIsValid?"":U.a.invalidInput),id:"signup_password",placeholder:"Password",value:a.password,onChange:function(e){return n({type:"updatePassword",password:e.target.value})}})}),Object(l.jsx)("button",{className:U.a.signIn__submit,children:"Sign in"})]})},B=function(e,t){switch(t.type){case"change-form":return"Sign in"===e.formType?Object(b.a)(Object(b.a)({},e),{},{formType:"Sign up",actionButtonText:"Sign in"}):Object(b.a)(Object(b.a)({},e),{},{formType:"Sign in",actionButtonText:"Sign up"});default:throw new Error}},J=function(){var e=Object(s.useReducer)(B,{formType:"Sign in",actionButtonText:"Sign up"}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(y);return Object(l.jsx)("div",{className:U.a.signIn,children:Object(l.jsxs)("div",{className:U.a.signIn__container,children:[Object(l.jsx)("button",{className:U.a.close,onClick:function(){r.setNavPage("Home")},children:Object(l.jsx)(m.b,{})}),Object(l.jsx)("h2",{className:U.a.signIn__title,children:a.formType}),"Sign in"===a.formType&&Object(l.jsx)(H,{}),"Sign up"===a.formType&&Object(l.jsx)(V,{}),Object(l.jsx)("div",{className:U.a.actions,children:Object(l.jsx)("button",{className:U.a.signIn__action_btn,onClick:function(){return n({type:"change-form"})},children:a.actionButtonText})})]})})},M=a(15),R=a.n(M),D=a(20),W=a(8),z=a.n(W),A=a(5),Y=a.n(A),K=function(e){var t=e.displayedCountry,a=e.setDisplayedCountry,s=e.fetchCountriesHandler;return Object(l.jsx)("div",{className:Y.a.countryCard,children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{className:Y.a.title,children:t.name}),Object(l.jsx)("figure",{className:Y.a.flag_box,children:Object(l.jsx)("img",{src:t.flag,alt:"".concat(t.name," flag"),className:Y.a.flag})}),Object(l.jsxs)("ul",{className:Y.a.list,children:[Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:" Native Name: "})," ",t.nativeName]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:"Capital: "})," ",t.capital]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:"Area: "})," ",t.area," KM * 2"]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:"Population: "})," ",t.population]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:" Calling code:"}),t.callingCodes.map((function(e){return Object(l.jsxs)("span",{children:[" ",e," "]},Object(d.v4)())}))]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:" Time zones:"}),t.timezones.map((function(e,t){return Object(l.jsxs)("span",{children:[t>0?",":""," ",e," "]},Object(d.v4)())}))]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:" Currencies:"}),t.currencies.map((function(e,t){return Object(l.jsxs)("span",{children:[t>0?",":""," ",e.name," (",e.symbol,") "]},Object(d.v4)())}))]}),Object(l.jsxs)("li",{className:Y.a.item,children:[Object(l.jsx)("span",{className:Y.a.subTitle,children:" Languages:"}),t.languages.map((function(e,t){return Object(l.jsxs)("span",{children:[t>0?",":""," ",e.name," (",e.nativeName,") "]},Object(d.v4)())}))]})]}),Object(l.jsx)("button",{type:"button",className:Y.a.button,onClick:function(){a(void 0),s()},children:"Back to list"})]})})},Q=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=(t[0],t[1]),r=Object(s.useState)(!1),c=Object(i.a)(r,2),o=c[0],u=c[1],m=Object(s.useState)(""),j=Object(i.a)(m,2),b=j[0],_=j[1],g=Object(s.useState)(void 0),p=Object(i.a)(g,2),O=p[0],h=p[1],f=Object(s.useState)(void 0),x=Object(i.a)(f,2),N=x[0],v=x[1],I=function(){var e=Object(D.a)(R.a.mark((function e(){var t,s,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,fetch("https://restcountries.eu/rest/v2/all");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("something went wrong");case 7:return e.next=9,t.json();case 9:s=e.sent,n=s.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})),h(n),u(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),a(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){I()}),[]),Object(l.jsxs)("div",{className:"".concat(z.a.countries," wrapper"),children:[Object(l.jsx)("h2",{className:z.a.title,children:"Let's read about countries!!"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I(),_("")},className:z.a.form,children:[Object(l.jsx)("input",{type:"text",className:z.a.input,id:"countryName",value:b,placeholder:"Enter country Name",onChange:function(e){_(e.target.value)}}),Object(l.jsx)("button",{type:"submit",className:z.a.button,children:"Find"})]}),o&&Object(l.jsx)("div",{className:z.a.loading,children:"Loading..."}),!o&&Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)("div",{className:z.a.results,children:"Select the country to find more information about it!"}),Object(l.jsx)("ul",{className:z.a.list,children:O&&O.map((function(e){return Object(l.jsx)("li",{onClick:function(){v(e),h([e])},className:z.a.item,children:Object(l.jsxs)("div",{className:z.a.box_country,children:[Object(l.jsx)("h3",{className:z.a.countryName,children:e.name}),Object(l.jsx)("img",{src:e.flag,alt:"country.name flag",className:z.a.flag})]})},Object(d.v4)())}))})]}),N&&Object(l.jsx)(K,{displayedCountry:N,setDisplayedCountry:v,fetchCountriesHandler:I})]})};var q=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),c=Object(i.a)(r,2),u=c[0],d=c[1],m=Object(s.useState)(!1),b=Object(i.a)(m,2),_=b[0],g=b[1],f=Object(s.useState)({}),x=Object(i.a)(f,2),v=x[0],I=x[1],S=["Home","Countries","Users"];return Object(s.useEffect)((function(){var e=localStorage.getItem("activePage");null===e?(d("Home"),localStorage.setItem("activePage",JSON.stringify("Home"))):""===u?d(JSON.parse(e)):localStorage.setItem("activePage",JSON.stringify(u))}),[u]),Object(s.useEffect)((function(){var e=localStorage.getItem("loggedUser");(e=JSON.parse(e))&&(I(e),g(!0)),console.log("user:",e)}),[g]),Object(l.jsxs)(y.Provider,{value:{isLoggedIn:_,loggedUser:v,setLoggedUser:function(e){I(e)},setIsLoggedIn:function(e){g(e)},navPage:u,setNavPage:function(e){d(e)},navBarPages:S},children:[Object(l.jsx)(w,{navBarPages:S}),a&&Object(l.jsx)(o,{title:a.title,errorMessage:a.errorMessage,resetError:function(){return n(null)}}),"Home"===u&&Object(l.jsx)(L,{}),"Countries"===u&&Object(l.jsx)(Q,{}),"Sign in"===u&&Object(l.jsx)(J,{}),"Users"===u&&Object(l.jsx)(j,{setError:n}),"Users(useReducer)"===u&&Object(l.jsx)(p,{setError:n}),"UseRef"===u&&Object(l.jsx)(O,{}),"UseEffect"===u&&Object(l.jsx)(h,{}),"UseReducer"===u&&Object(l.jsx)(N,{})]})};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={wrapper:"country-card_wrapper__3Gxpq",countryCard:"country-card_countryCard__2ZIdA",title:"country-card_title__2y7jJ",flag_box:"country-card_flag_box__2DGzV",list:"country-card_list__1l9kQ",button:"country-card_button__1hafM",flag:"country-card_flag__YOa1j",item:"country-card_item__3g-mw",subTitle:"country-card_subTitle__42v7w"}},6:function(e,t,a){e.exports={wrapper:"mainHeader_wrapper__Krh3U",header:"mainHeader_header__1YIoV",header__wrapper:"mainHeader_header__wrapper__154r4",box:"mainHeader_box__1nYKX",logo__title:"mainHeader_logo__title__3onzQ",box__navBar:"mainHeader_box__navBar__kjUVZ",header__list:"mainHeader_header__list__3TY_e",header__item:"mainHeader_header__item__3pYFB",active:"mainHeader_active__sD6Ir",box__login:"mainHeader_box__login__3vxP9",button:"mainHeader_button__2ckYU",signInBtn:"mainHeader_signInBtn__15dMM",shadow:"mainHeader_shadow__wvO3w"}},8:function(e,t,a){e.exports={wrapper:"countries_wrapper__LCD0H",title:"countries_title__2XJ84",form:"countries_form__5heaF",input:"countries_input__2Miz5",button:"countries_button__PnryB",loading:"countries_loading__1C9Cl",results:"countries_results__3Jspn",list:"countries_list__1Fzxp",item:"countries_item__3K4uh",box_country:"countries_box_country__765A6",countryName:"countries_countryName__bJL0s",flag:"countries_flag__7lrXx"}},9:function(e,t,a){e.exports={home:"home_home__2bNrD",title:"home_title__2U93c",signInText:"home_signInText__2dJW5",arrowUp:"home_arrowUp__2AcJI",resize:"home_resize__2q8G0",note__box:"home_note__box__aHTrS",note__important:"home_note__important__1joUQ",note__text:"home_note__text__2zCtB"}}},[[31,1,2]]]);
//# sourceMappingURL=main.f9bb8790.chunk.js.map