(this["webpackJsonpreact-course-app"]=this["webpackJsonpreact-course-app"]||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"errorModal_wrapper__ngK79",error__container:"errorModal_error__container__1J3_R",error__background:"errorModal_error__background__3kTgL",error__box:"errorModal_error__box__3S7cq",error__header:"errorModal_error__header__3tPjm",error__main:"errorModal_error__main__2OC7Y",error__footer:"errorModal_error__footer__11mEj"}},11:function(e,t,a){e.exports={home__page:"home_home__page__3QIUn",home:"home_home__2bNrD",title:"home_title__2U93c",signInText:"home_signInText__2dJW5",note__box:"home_note__box__aHTrS",note__important:"home_note__important__1joUQ",note__text:"home_note__text__2zCtB"}},2:function(e,t,a){e.exports={wrapper:"users_wrapper__22hbi",users:"users_users__3pJzf",users__form:"users_users__form__3h2ul",form__container:"users_form__container__10cUo",users__label:"users_users__label__2_gpo",notValid:"users_notValid__RRaQs",users__input:"users_users__input__2eQ94",notValidInput:"users_notValidInput__1JgEG",users__btn:"users_users__btn__31RCB",users__title:"users_users__title___MtKv",users__list:"users_users__list__2YnCf",users__item:"users_users__item__1Zmqs",users__delete:"users_users__delete__1_9o4",users__empty:"users_users__empty__2k-sq"}},26:function(e,t,a){},3:function(e,t,a){e.exports={signIn:"signIn_signIn__2ehqs",signIn__container:"signIn_signIn__container__3FMPE",close:"signIn_close__3Uikh",signIn__title:"signIn_signIn__title__1BTFd",signIn__form:"signIn_signIn__form__rRjcD",actions:"signIn_actions__3WoTQ",signIn__action_btn:"signIn_signIn__action_btn__VIDWe",signInInput:"signIn_signInInput__yxeEs",invalidInput:"signIn_invalidInput__2LcTR"}},31:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(20),c=a.n(r),i=(a(26),a(5)),l=a(10),o=a.n(l),u=a(0),_=function(e){var t=e.title,a=e.errorMessage,s=e.resetError;return Object(u.jsxs)("div",{className:o.a.error__container,children:[Object(u.jsx)("div",{className:o.a.error__background,onClick:s}),Object(u.jsxs)("div",{className:o.a.error__box,children:[Object(u.jsx)("header",{className:o.a.error__header,children:Object(u.jsx)("h1",{className:o.a.error__title,children:t})}),Object(u.jsx)("main",{className:o.a.error__main,children:Object(u.jsx)("p",{className:o.a.error__message,children:a})}),Object(u.jsx)("footer",{className:o.a.error__footer,children:Object(u.jsx)("button",{className:o.a.error__button,onClick:s,children:"Close"})})]})]})},d=a(13),m=a(9),j=a(12),b=a(2),p=a.n(b),g=function(e){var t=e.setError,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],c=n[1],l=Object(s.useState)(""),o=Object(i.a)(l,2),_=o[0],b=o[1],g=Object(s.useState)([]),O=Object(i.a)(g,2),h=O[0],f=O[1],x=Object(s.useState)(!0),N=Object(i.a)(x,2),v=N[0],I=N[1],y=Object(s.useState)(!0),w=Object(i.a)(y,2),S=w[0],C=w[1];Object(s.useEffect)((function(){var e=localStorage.getItem("usersList");e&&f(JSON.parse(e))}),[]);return Object(u.jsx)("div",{className:p.a.users,children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("form",{className:p.a.users__form,onSubmit:function(e){e.preventDefault();var a=r.trim().length,s=_.trim().length;if(a<1&&s<1)return t({title:"Wrong input",errorMessage:"Please enter valid names!"}),I(!1),void C(!1);if(a<1)return t({title:"Wrong input",errorMessage:"Please enter a valid first name!"}),void I(!1);if(s<1)return t({title:"Wrong input",errorMessage:"Please enter a valid last name!"}),void C(!1);var n=localStorage.getItem("usersList");n=(n=JSON.parse(n))?[].concat(Object(d.a)(n),[{firstName:r,lastName:_,id:Object(m.v4)()}]):[{firstName:r,lastName:_,id:Object(m.v4)()}],localStorage.setItem("usersList",JSON.stringify(n)),f(n),c(""),b("")},children:[Object(u.jsxs)("div",{className:p.a.form__container,children:[Object(u.jsx)("label",{htmlFor:"first-name",className:"".concat(p.a.users__label," ").concat(v?"":p.a.notValid),children:"First Name:"}),Object(u.jsx)("input",{type:"text",id:"first-name",className:"".concat(p.a.users__input," ").concat(v?"":p.a.notValidInput),placeholder:"Enter First Name",onChange:function(e){c(e.target.value),I(e.target.value.trim().length>0)},value:r})]}),Object(u.jsxs)("div",{className:p.a.form__container,children:[Object(u.jsx)("label",{htmlFor:"last-name",className:"".concat(p.a.users__label," ").concat(S?"":p.a.notValid),children:"Last Name:"}),Object(u.jsx)("input",{type:"text",id:"last-name",className:"".concat(p.a.users__input," ").concat(S?"":p.a.notValidInput),placeholder:"Enter Last Name",onChange:function(e){b(e.target.value),C(e.target.value.trim().length>0)},value:_})]}),Object(u.jsx)("button",{className:p.a.users__btn,type:"Submit",children:"Submit"})]}),Object(u.jsx)("h2",{className:p.a.users__title,children:"Users :"}),h&&Object(u.jsx)("ul",{className:p.a.users__list,children:h.map((function(e){return Object(u.jsxs)("li",{className:p.a.users__item,children:[Object(u.jsxs)("span",{children:[e.firstName," ",e.lastName]}),Object(u.jsx)("button",{className:p.a.users__delete,onClick:function(){return function(e){var t=localStorage.getItem("usersList");t=(t=JSON.parse(t)).filter((function(t){return t.id!==e})),localStorage.setItem("usersList",JSON.stringify(t)),f(t)}(e.id)},children:Object(u.jsx)(j.d,{})})]},e.id)}))}),0===h.length&&Object(u.jsx)("div",{className:p.a.users__empty,children:"....No users to display...."})]})})},O=a(4),h={firstName:"",lastName:"",validFirstName:null,validLastName:null,users:[]},f=function(e,t){switch(t.type){case"update_users_list":return Object(O.a)(Object(O.a)({},e),{},{users:t.usersList});case"fistName_update":return Object(O.a)(Object(O.a)({},e),{},{firstName:t.value,validFirstName:t.value.trim().length>0});case"lastName_update":return Object(O.a)(Object(O.a)({},e),{},{lastName:t.value,validLastName:t.value.trim().length>0});case"delete_user":var a=e.users.filter((function(e){return e.id!==t.id}));return localStorage.setItem("useReducer_usersList",JSON.stringify(a)),Object(O.a)(Object(O.a)({},e),{},{users:a});case"submit_user":var s=[].concat(Object(d.a)(t.oldUsersList),[{firstName:e.firstName,lastName:e.lastName,id:Object(m.v4)()}]);return localStorage.setItem("useReducer_usersList",JSON.stringify(s)),{firstName:"",lastName:"",validFirstName:null,validLastName:null,users:s};default:throw new Error}},x=function(e){var t=e.setError,a=Object(s.useReducer)(f,h),n=Object(i.a)(a,2),r=n[0],c=n[1];Object(s.useEffect)((function(){var e=localStorage.getItem("useReducer_usersList");(e=JSON.parse(e))&&c({type:"update_users_list",usersList:e})}),[]);return Object(u.jsx)("div",{className:p.a.users,children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("form",{className:p.a.users__form,onSubmit:function(e){if(e.preventDefault(),r.validFirstName||r.validLastName)if(r.validFirstName)if(r.validLastName){var a=localStorage.getItem("useReducer_usersList");c({type:"submit_user",oldUsersList:a?JSON.parse(a):[]})}else t({title:"Wrong input",errorMessage:"Please enter a valid last name!"});else t({title:"Wrong input",errorMessage:"Please enter a valid first name!"});else t({title:"Wrong input",errorMessage:"Please enter valid names!"})},children:[Object(u.jsxs)("div",{className:p.a.form__container,children:[Object(u.jsx)("label",{htmlFor:"first-name",className:"".concat(p.a.users__label," ").concat(!1===r.validFirstName?p.a.notValid:""),children:"First Name:"}),Object(u.jsx)("input",{type:"text",id:"first-name",className:"".concat(p.a.users__input," ").concat(!1===r.validFirstName?p.a.notValidInput:""),placeholder:"Enter First Name",onChange:function(e){return c({type:"fistName_update",value:e.target.value})},value:r.firstName})]}),Object(u.jsxs)("div",{className:p.a.form__container,children:[Object(u.jsx)("label",{htmlFor:"last-name",className:"".concat(p.a.users__label," ").concat(!1===r.validLastName?p.a.notValid:""),children:"Last Name:"}),Object(u.jsx)("input",{type:"text",id:"last-name",className:"".concat(p.a.users__input," ").concat(!1===r.validLastName?p.a.notValidInput:""),placeholder:"Enter Last Name",onChange:function(e){return c({type:"lastName_update",value:e.target.value})},value:r.lastName})]}),Object(u.jsx)("button",{className:p.a.users__btn,type:"Submit",children:"Submit"})]}),Object(u.jsx)("h2",{className:p.a.users__title,children:"Users"}),r.users&&Object(u.jsx)("ul",{className:p.a.users__list,children:r.users.map((function(e){return Object(u.jsxs)("li",{className:p.a.users__item,children:[Object(u.jsxs)("span",{children:[e.firstName," ",e.lastName]}),Object(u.jsx)("button",{className:p.a.users__delete,onClick:function(){return c({type:"delete_user",id:e.id})},children:Object(u.jsx)(j.d,{})})]},e.id)}))}),0===r.users.length&&Object(u.jsx)("div",{className:p.a.users__empty,children:"....No users to display...."})]})})},N=function(){var e=Object(s.useRef)(),t=Object(s.useRef)("<h2>initial ref</h2>");return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.current.value=""},children:[Object(u.jsx)("label",{htmlFor:"input",children:"Name"}),Object(u.jsx)("input",{id:"input",ref:e,onChange:function(){console.log(e.current),console.log(e.current.value)}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{ref:t,onClick:function(){console.log("test"),t.current.innerHTML="<h2>test is <i>passed!</i></h2",console.log(t.current.innerHTML)},children:"initial test"})]})},v=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){console.log("Use Effect runs one time only")}),[]),Object(s.useEffect)((function(){return console.log("Use Effect with return CLEANUP FUNCTION"),function(){console.log("--------\nCLEANUP\n--------")}}),[]),Object(s.useEffect)((function(){var e=setTimeout((function(){console.log("***********\n***********\nfetch data example!!\n***********\n***********")}),1e3);return function(){console.log("clear timeout!"),clearTimeout(e)}}),[a]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"useEffect Example"}),Object(u.jsx)("label",{htmlFor:"input",children:"Input"}),Object(u.jsx)("input",{type:"text",id:"input",onChange:function(e){n(e.target.value)},value:a})]})},I={count:0};function y(e,t){switch(console.log("state: ",e),console.log("action: ",t),t.type){case"decrement":return{count:e.count-1};case"increment":return{count:e.count+1};default:throw new Error}}var w=function(){var e=Object(s.useReducer)(y,I),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"useReducer Example (Counter)"}),Object(u.jsxs)("p",{children:["Count: ",a.count]}),Object(u.jsx)("button",{onClick:function(){return n({type:"decrement"})},children:"-"}),Object(u.jsx)("button",{onClick:function(){return n({type:"increment"})},children:"+"})]})},S=a(8),C=a.n(S),L=n.a.createContext({isLoggedIn:!1,loggedUser:{},setLoggedUser:function(){},setIsLoggedIn:function(){},navPage:"Home",setNavPage:function(){},navBarPages:[]}),E=function(e){var t=e.navBarPages,a=Object(s.useContext)(L),n=Object(s.useRef)();return Object(u.jsx)("header",{className:C.a.header,children:Object(u.jsxs)("div",{className:"wrapper ".concat(C.a.header__wrapper),children:[Object(u.jsx)("div",{className:"".concat(C.a.box," ").concat(C.a.box__logo),children:Object(u.jsx)("h1",{className:C.a.logo__title,children:"React App"})}),Object(u.jsx)("input",{ref:n,id:"display__checkbox",type:"checkbox",className:C.a.display__checkbox}),Object(u.jsx)("label",{htmlFor:"display__checkbox",className:C.a.display__label,children:Object(u.jsx)(j.c,{className:C.a.menu__icon})}),Object(u.jsx)("div",{className:"".concat(C.a.box," ").concat(C.a.box__navBar),children:Object(u.jsxs)("nav",{className:C.a.nav,children:[a.isLoggedIn&&Object(u.jsx)("ul",{className:C.a.header__list,children:t.map((function(e){return Object(u.jsx)("li",{className:"".concat(C.a.header__item," ").concat(a.navPage===e?C.a.active:""),onClick:function(){return function(e){a.setNavPage(e),n.current.checked=!1}(e)},children:e},Object(m.v4)())}))}),Object(u.jsxs)("div",{className:C.a.actions,children:[Object(u.jsx)("button",{className:"".concat(C.a.button," ").concat(a.isLoggedIn?"":C.a.signInBtn),onClick:function(){n.current.checked=!1,a.isLoggedIn?(localStorage.removeItem("loggedUser"),a.setIsLoggedIn(!1),a.setNavPage("Home")):a.setNavPage("Sign in")},children:a.isLoggedIn?"Sign out":"Sign in"}),!a.isLoggedIn&&Object(u.jsx)(j.a,{className:C.a.arrowUp})]})]})})]})})},k=a(11),U=a.n(k),V=function(){var e=Object(s.useContext)(L);return Object(u.jsx)("div",{className:U.a.home__page,children:Object(u.jsxs)("div",{className:"wrapper",children:[!e.isLoggedIn&&Object(u.jsxs)("div",{className:U.a.home,children:[Object(u.jsxs)("h2",{className:U.a.signInText,children:["Hello there!",Object(u.jsx)("br",{})," Please sign in to view the content!!"]}),Object(u.jsxs)("div",{className:U.a.note__box,children:[Object(u.jsx)("h4",{className:U.a.note__important,children:"Important!!"}),Object(u.jsx)("p",{className:U.a.note__text,children:"The local storage of your browser will be used to save all entered data in Sign up and Sign in forms"})]})]}),e.isLoggedIn&&Object(u.jsxs)("div",{className:U.a.home,children:[Object(u.jsxs)("h2",{className:U.a.greeting,children:["Hello ",e.loggedUser.name," ",e.loggedUser.lastName]}),Object(u.jsx)("h1",{className:U.a.title,children:"Welcome to My React World!!"}),Object(u.jsx)("p",{children:"Please choose a page in navbar"})]})]})})},P=a(3),T=a.n(P),H={name:"",nameIsValid:!1,lastName:"",lastNameIsValid:!1,email:"",emailIsValid:!1,password:"",passwordIsValid:!1},M=function(e,t){switch(t.type){case"updateName":return Object(O.a)(Object(O.a)({},e),{},{name:t.name,nameIsValid:t.name.trim().length>0});case"updateLastName":return Object(O.a)(Object(O.a)({},e),{},{lastName:t.lastName,lastNameIsValid:t.lastName.trim().length>0});case"updateEmail":return Object(O.a)(Object(O.a)({},e),{},{email:t.email,emailIsValid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)});case"updatePassword":return Object(O.a)(Object(O.a)({},e),{},{password:t.password,passwordIsValid:t.password.trim().length>=6});case"submit":var a=localStorage.getItem("logged-users");a=JSON.parse(a);var s=[{name:e.name,lastName:e.lastName,email:e.email,password:e.password}];if(a){if(0!==a.filter((function(t){return t.email===e.email})).length)return H;s=Object(d.a)(a).concat(s)}return localStorage.setItem("logged-users",JSON.stringify(s)),H;default:return}},F=function(){var e=Object(s.useReducer)(M,H),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("form",{className:T.a.signIn__form,onSubmit:function(e){e.preventDefault(),a.nameIsValid&&a.lastNameIsValid&&a.emailIsValid&&a.passwordIsValid&&n({type:"submit"})},children:[Object(u.jsx)("div",{className:T.a.signIn__Block,children:Object(u.jsx)("input",{type:"text",className:"".concat(T.a.signInInput," ").concat(a.nameIsValid?"":T.a.invalidInput),id:"signup_name",placeholder:"Name",value:a.name,onChange:function(e){return n({type:"updateName",name:e.target.value})}})}),Object(u.jsx)("div",{className:T.a.signIn__Block,children:Object(u.jsx)("input",{type:"text",className:"".concat(T.a.signInInput," ").concat(a.lastNameIsValid?"":T.a.invalidInput),id:"signup_lastName",placeholder:"Last Name",value:a.lastName,onChange:function(e){return n({type:"updateLastName",lastName:e.target.value})}})}),Object(u.jsx)("div",{className:T.a.signIn__Block,children:Object(u.jsx)("input",{type:"text",className:"".concat(T.a.signInInput," ").concat(a.emailIsValid?"":T.a.invalidInput),id:"signup_email",placeholder:"Email",value:a.email,onChange:function(e){return n({type:"updateEmail",email:e.target.value})}})}),Object(u.jsx)("div",{className:T.a.signIn__Block,children:Object(u.jsx)("input",{type:"password",className:"".concat(T.a.signInInput," ").concat(a.passwordIsValid?"":T.a.invalidInput),id:"signup_password",placeholder:"Password",value:a.password,onChange:function(e){return n({type:"updatePassword",password:e.target.value})}})}),Object(u.jsx)("button",{type:"submit",className:T.a.signIn__submit,children:"Sign up"})]})},B={email:"",emailIsValid:!1,password:"",passwordIsValid:!1,loggedUser:{}},J=function(e,t){switch(t.type){case"updateEmail":return Object(O.a)(Object(O.a)({},e),{},{email:t.email,emailIsValid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)});case"updatePassword":return Object(O.a)(Object(O.a)({},e),{},{password:t.password,passwordIsValid:t.password.trim().length>=6});case"submit":var a=localStorage.getItem("logged-users");a=JSON.parse(a);var s={};return a&&a.forEach((function(t){t.email===e.email&&t.password===e.password&&(s=t,localStorage.setItem("loggedUser",JSON.stringify(t)))})),Object(O.a)(Object(O.a)({},B),{},{loggedUser:s});default:return}},R=function(){var e=Object(s.useReducer)(J,B),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(L);Object(s.useEffect)((function(){a.loggedUser!==r.loggedUser&&a.loggedUser.email&&(r.setLoggedUser(a.loggedUser),r.setNavPage("Home"),r.setIsLoggedIn(!0))}),[a.loggedUser]);return Object(u.jsxs)("form",{className:T.a.signIn__form,onSubmit:function(e){e.preventDefault(),a.emailIsValid&&a.passwordIsValid&&n({type:"submit"})},children:[Object(u.jsx)("div",{className:T.a.signIn__Block,children:Object(u.jsx)("input",{type:"text",className:"".concat(T.a.signInInput," ").concat(a.emailIsValid?"":T.a.invalidInput),id:"signup_email",placeholder:"Email",value:a.email,onChange:function(e){return n({type:"updateEmail",email:e.target.value})}})}),Object(u.jsx)("div",{className:T.a.signIn__Block,children:Object(u.jsx)("input",{type:"password",className:"".concat(T.a.signInInput," ").concat(a.passwordIsValid?"":T.a.invalidInput),id:"signup_password",placeholder:"Password",value:a.password,onChange:function(e){return n({type:"updatePassword",password:e.target.value})}})}),Object(u.jsx)("button",{className:T.a.signIn__submit,children:"Sign in"})]})},D=function(e,t){switch(t.type){case"change-form":return"Sign in"===e.formType?Object(O.a)(Object(O.a)({},e),{},{formType:"Sign up",actionButtonText:"Sign in"}):Object(O.a)(Object(O.a)({},e),{},{formType:"Sign in",actionButtonText:"Sign up"});default:throw new Error}},W=function(){var e=Object(s.useReducer)(D,{formType:"Sign in",actionButtonText:"Sign up"}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(L);return Object(u.jsx)("div",{className:T.a.signIn,children:Object(u.jsxs)("div",{className:T.a.signIn__container,children:[Object(u.jsx)("button",{className:T.a.close,onClick:function(){r.setNavPage("Home")},children:Object(u.jsx)(j.b,{})}),Object(u.jsx)("h2",{className:T.a.signIn__title,children:a.formType}),"Sign in"===a.formType&&Object(u.jsx)(R,{}),"Sign up"===a.formType&&Object(u.jsx)(F,{}),Object(u.jsx)("div",{className:T.a.actions,children:Object(u.jsx)("button",{className:T.a.signIn__action_btn,onClick:function(){return n({type:"change-form"})},children:a.actionButtonText})})]})})},z=a(17),Y=a.n(z),q=a(21),A=a(7),Q=a.n(A),K=a(6),G=a.n(K),X=function(e){var t=e.displayedCountry,a=e.setDisplayedCountry,s=e.setRequestedCountry,n=e.previousCountriesList,r=t;return Object(u.jsx)("div",{className:G.a.countryCard,children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h2",{className:G.a.title,children:r.name}),Object(u.jsx)("figure",{className:G.a.flag_box,children:Object(u.jsx)("img",{src:r.flag,alt:"".concat(r.name," flag"),className:G.a.flag})}),Object(u.jsxs)("ul",{className:G.a.list,children:[Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:" Native Name: "})," ",r.nativeName]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:"Capital: "})," ",r.capital]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:"Area: "})," ",r.area," KM * 2"]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:"Population: "})," ",r.population]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:" Calling code:"}),r.callingCodes.map((function(e){return Object(u.jsxs)("span",{children:[" ",e," "]},Object(m.v4)())}))]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:" Time zones:"}),r.timezones.map((function(e,t){return Object(u.jsxs)("span",{children:[t>0?",":""," ",e," "]},Object(m.v4)())}))]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:" Currencies:"}),r.currencies.map((function(e,t){return Object(u.jsxs)("span",{children:[t>0?",":""," ",e.name," (",e.symbol,") "]},Object(m.v4)())}))]}),Object(u.jsxs)("li",{className:G.a.item,children:[Object(u.jsx)("span",{className:G.a.subTitle,children:" Languages:"}),r.languages.map((function(e,t){return Object(u.jsxs)("span",{children:[t>0?",":""," ",e.name," (",e.nativeName,") "]},Object(m.v4)())}))]})]}),Object(u.jsx)("button",{type:"button",className:G.a.button,onClick:function(){a(void 0),s(n)},children:"Back to list"})]})})},Z=function(e){var t=e.setError,a=Object(s.useState)(!1),r=Object(i.a)(a,2),c=r[0],l=r[1],o=Object(s.useState)(""),_=Object(i.a)(o,2),j=_[0],b=_[1],p=Object(s.useState)(void 0),g=Object(i.a)(p,2),O=g[0],h=g[1],f=Object(s.useState)(void 0),x=Object(i.a)(f,2),N=x[0],v=x[1],I=Object(s.useState)(void 0),y=Object(i.a)(I,2),w=y[0],S=y[1],C=function(){var e=Object(q.a)(Y.a.mark((function e(){var a,s,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,fetch("https://restcountries.eu/rest/v2/all");case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Something went wrong");case 7:return e.next=9,a.json();case 9:s=e.sent,n=s.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})),h(n),l(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),t({title:"Loading Error",errorMessage:e.t0.message}),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){C()}),[]);return Object(u.jsxs)("div",{className:"".concat(Q.a.countries," wrapper"),children:[Object(u.jsx)("h2",{className:Q.a.title,children:"Let's read about countries!!"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(),b("")},className:Q.a.form,children:[Object(u.jsx)("input",{type:"text",className:Q.a.input,id:"countryName",value:j,placeholder:"Enter country Name",onChange:function(e){b(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:Q.a.button,children:"Find"})]}),Object(u.jsxs)("div",{className:Q.a.options,children:[Object(u.jsx)("h2",{className:Q.a.options__title,children:"Options:"}),Object(u.jsx)("label",{htmlFor:"select-filter",className:Q.a.select__label,children:"Sort by:"}),Object(u.jsxs)("select",{name:"select-filter",id:"select-filter",className:Q.a.select,onChange:function(e){!function(e){switch(e.target.value){case"area":return void h(Object(d.a)(O.sort((function(e,t){return e.area<t.area?1:e.area>t.area?-1:0}))));case"population":return void h(Object(d.a)(O.sort((function(e,t){return e.population<t.population?1:e.population>t.population?-1:0}))));case"name":return void C();default:;}}(e)},children:[Object(u.jsx)("option",{className:Q.a.select__option,value:"name",children:"Name"}),Object(u.jsx)("option",{className:Q.a.select__option,value:"area",children:"Area"}),Object(u.jsx)("option",{className:Q.a.select__option,value:"population",children:"Population"})]})]}),c&&Object(u.jsx)("div",{className:Q.a.loading,children:"Loading..."}),!c&&O&&Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("div",{className:Q.a.results,children:"Select the country to find more information about it!"}),Object(u.jsx)("ul",{className:Q.a.list,children:O.map((function(e){return Object(u.jsx)("li",{onClick:function(){return function(e){S(O),v(e),h(void 0)}(e)},className:Q.a.item,children:Object(u.jsxs)("div",{className:Q.a.box_country,children:[Object(u.jsx)("h3",{className:Q.a.countryName,children:e.name}),Object(u.jsx)("img",{src:e.flag,alt:"country.name flag",className:Q.a.flag})]})},Object(m.v4)())}))})]}),N&&Object(u.jsx)(X,{displayedCountry:N,setDisplayedCountry:v,setRequestedCountry:h,previousCountriesList:w})]})};var $=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),c=Object(i.a)(r,2),l=c[0],o=c[1],d=Object(s.useState)(!1),m=Object(i.a)(d,2),j=m[0],b=m[1],p=Object(s.useState)({}),O=Object(i.a)(p,2),h=O[0],f=O[1],I=["Home","Countries","Users"];return Object(s.useEffect)((function(){var e=localStorage.getItem("activePage");null===e?(o("Home"),localStorage.setItem("activePage",JSON.stringify("Home"))):""===l?o(JSON.parse(e)):localStorage.setItem("activePage",JSON.stringify(l))}),[l]),Object(s.useEffect)((function(){var e=localStorage.getItem("loggedUser");(e=JSON.parse(e))&&(f(e),b(!0)),console.log("user:",e)}),[b]),Object(u.jsxs)(L.Provider,{value:{isLoggedIn:j,loggedUser:h,setLoggedUser:function(e){f(e)},setIsLoggedIn:function(e){b(e)},navPage:l,setNavPage:function(e){o(e)},navBarPages:I},children:[Object(u.jsx)(E,{navBarPages:I}),a&&Object(u.jsx)(_,{title:a.title,errorMessage:a.errorMessage,resetError:function(){return n(null)}}),"Home"===l&&Object(u.jsx)(V,{}),"Countries"===l&&Object(u.jsx)(Z,{setError:n}),"Sign in"===l&&Object(u.jsx)(W,{}),"Users"===l&&Object(u.jsx)(g,{setError:n}),"Users(useReducer)"===l&&Object(u.jsx)(x,{setError:n}),"UseRef"===l&&Object(u.jsx)(N,{}),"UseEffect"===l&&Object(u.jsx)(v,{}),"UseReducer"===l&&Object(u.jsx)(w,{})]})};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={wrapper:"country-card_wrapper__3Gxpq",countryCard:"country-card_countryCard__2ZIdA",title:"country-card_title__2y7jJ",flag_box:"country-card_flag_box__2DGzV",list:"country-card_list__1l9kQ",button:"country-card_button__1hafM",flag:"country-card_flag__YOa1j",item:"country-card_item__3g-mw",subTitle:"country-card_subTitle__42v7w"}},7:function(e,t,a){e.exports={wrapper:"countries_wrapper__LCD0H",countries:"countries_countries__3fgsM",title:"countries_title__2XJ84",form:"countries_form__5heaF",input:"countries_input__2Miz5",button:"countries_button__PnryB",options:"countries_options__3vUbG",options__title:"countries_options__title__3OS3u",select__label:"countries_select__label__1fCe_",select:"countries_select__2MMDV",select__option:"countries_select__option__TV6ET",loading:"countries_loading__1C9Cl",results:"countries_results__3Jspn",list:"countries_list__1Fzxp",item:"countries_item__3K4uh",box_country:"countries_box_country__765A6",countryName:"countries_countryName__bJL0s",flag:"countries_flag__7lrXx"}},8:function(e,t,a){e.exports={wrapper:"mainHeader_wrapper__Krh3U",header:"mainHeader_header__1YIoV",header__wrapper:"mainHeader_header__wrapper__154r4",box:"mainHeader_box__1nYKX",box__logo:"mainHeader_box__logo__2Kqio",logo__title:"mainHeader_logo__title__3onzQ",display__checkbox:"mainHeader_display__checkbox__2VSy5",display__label:"mainHeader_display__label__2WIBH",menu__icon:"mainHeader_menu__icon__2AjxU",box__navBar:"mainHeader_box__navBar__kjUVZ",nav:"mainHeader_nav__34kdw",header__list:"mainHeader_header__list__3TY_e",header__item:"mainHeader_header__item__3pYFB",active:"mainHeader_active__sD6Ir",actions:"mainHeader_actions__5lYsk",button:"mainHeader_button__2ckYU",signInBtn:"mainHeader_signInBtn__15dMM",shadow:"mainHeader_shadow__wvO3w",arrowUp:"mainHeader_arrowUp__3k0ow",resize:"mainHeader_resize__3QXab"}}},[[31,1,2]]]);
//# sourceMappingURL=main.d509879f.chunk.js.map