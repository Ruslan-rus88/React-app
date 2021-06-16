(this["webpackJsonpreact-course-app"]=this["webpackJsonpreact-course-app"]||[]).push([[0],{13:function(e,t,a){},2:function(e,t,a){e.exports={signIn:"signIn_signIn__32NVw",signIn__container:"signIn_signIn__container__2ewXs",close:"signIn_close__NubBJ",signIn__title:"signIn_signIn__title__jwcz9",signIn__form:"signIn_signIn__form__kLgyh",signIn__Block:"signIn_signIn__Block__iUHOp",actions:"signIn_actions__pYZj6",signIn__action_btn:"signIn_signIn__action_btn__oIjOn",signInInput:"signIn_signInInput__sHf7L",signIn__submit:"signIn_signIn__submit__2QTRw",invalidInput:"signIn_invalidInput__1QEtt"}},21:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(16),c=a.n(r),i=(a(21),a(4)),l=(a(22),a(0)),o=function(e){var t=e.title,a=e.errorMessage,s=e.resetError;return Object(l.jsxs)("div",{className:"error__container",children:[Object(l.jsx)("div",{className:"error__background",onClick:s}),Object(l.jsxs)("div",{className:"error__wrapper",children:[Object(l.jsx)("header",{className:"error__header",children:Object(l.jsx)("h1",{className:"error__title",children:t})}),Object(l.jsx)("main",{className:"error__main",children:Object(l.jsx)("p",{className:"error__message",children:a})}),Object(l.jsx)("footer",{className:"error__footer",children:Object(l.jsx)("button",{className:"error__button",onClick:s,children:"Close"})})]})]})},u=a(9),d=(a(13),a(8)),m=a(7),j=function(e){var t=e.setError,a=Object(s.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1],j=Object(s.useState)(""),_=Object(i.a)(j,2),g=_[0],b=_[1],p=Object(s.useState)([]),O=Object(i.a)(p,2),h=O[0],f=O[1],N=Object(s.useState)(!0),v=Object(i.a)(N,2),x=v[0],I=v[1],S=Object(s.useState)(!0),w=Object(i.a)(S,2),y=w[0],L=w[1];Object(s.useEffect)((function(){var e=localStorage.getItem("usersList");e&&f(JSON.parse(e))}),[]);return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"users wrapper",children:[Object(l.jsxs)("form",{className:"users__form",onSubmit:function(e){e.preventDefault();var a=c.trim().length,s=g.trim().length;if(a<1&&s<1)return t({title:"Wrong input",errorMessage:"Please enter valid names!"}),I(!1),void L(!1);if(a<1)return t({title:"Wrong input",errorMessage:"Please enter a valid first name!"}),void I(!1);if(s<1)return t({title:"Wrong input",errorMessage:"Please enter a valid last name!"}),void L(!1);var n=localStorage.getItem("usersList");n=(n=JSON.parse(n))?[].concat(Object(u.a)(n),[{firstName:c,lastName:g,id:Object(d.v4)()}]):[{firstName:c,lastName:g,id:Object(d.v4)()}],localStorage.setItem("usersList",JSON.stringify(n)),f(n),o(""),b("")},children:[Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"first-name",className:"users__label ".concat(x?"":"notValid"),children:"First Name:"}),Object(l.jsx)("input",{type:"text",id:"first-name",className:"users__input ".concat(x?"":"notValidInput"),placeholder:"Enter First Name",onChange:function(e){o(e.target.value),I(e.target.value.trim().length>0)},value:c})]}),Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"last-name",className:"users__label ".concat(y?"":"notValid"),children:"Last Name:"}),Object(l.jsx)("input",{type:"text",id:"last-name",className:"users__input ".concat(y?"":"notValidInput"),placeholder:"Enter Last Name",onChange:function(e){b(e.target.value),L(e.target.value.trim().length>0)},value:g})]}),Object(l.jsx)("button",{className:"users__btn",type:"Submit",children:"Submit"})]}),Object(l.jsx)("h2",{className:"users__title",children:"Users"}),h&&Object(l.jsx)("ul",{className:"users__list",children:h.map((function(e){return Object(l.jsxs)("li",{className:"users__item",children:[Object(l.jsxs)("span",{children:[e.firstName," ",e.lastName]}),Object(l.jsx)("button",{className:"users__delete",onClick:function(){return function(e){var t=localStorage.getItem("usersList");t=(t=JSON.parse(t)).filter((function(t){return t.id!==e})),localStorage.setItem("usersList",JSON.stringify(t)),f(t)}(e.id)},children:Object(l.jsx)(m.c,{})})]},e.id)}))}),0===h.length&&Object(l.jsx)("div",{className:"users__empty",children:"....No users to display...."})]})})},_=a(3),g={firstName:"",lastName:"",validFirstName:null,validLastName:null,users:[]},b=function(e,t){switch(t.type){case"update_users_list":return Object(_.a)(Object(_.a)({},e),{},{users:t.usersList});case"fistName_update":return Object(_.a)(Object(_.a)({},e),{},{firstName:t.value,validFirstName:t.value.trim().length>0});case"lastName_update":return Object(_.a)(Object(_.a)({},e),{},{lastName:t.value,validLastName:t.value.trim().length>0});case"delete_user":var a=e.users.filter((function(e){return e.id!==t.id}));return localStorage.setItem("useReducer_usersList",JSON.stringify(a)),Object(_.a)(Object(_.a)({},e),{},{users:a});case"submit_user":var s=[].concat(Object(u.a)(t.oldUsersList),[{firstName:e.firstName,lastName:e.lastName,id:Object(d.v4)()}]);return localStorage.setItem("useReducer_usersList",JSON.stringify(s)),{firstName:"",lastName:"",validFirstName:null,validLastName:null,users:s};default:throw new Error}},p=function(e){var t=e.setError,a=Object(s.useReducer)(b,g),r=Object(i.a)(a,2),c=r[0],o=r[1];Object(s.useEffect)((function(){var e=localStorage.getItem("useReducer_usersList");(e=JSON.parse(e))&&o({type:"update_users_list",usersList:e})}),[]);return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"users wrapper",children:[Object(l.jsxs)("form",{className:"users__form",onSubmit:function(e){if(e.preventDefault(),c.validFirstName||c.validLastName)if(c.validFirstName)if(c.validLastName){var a=localStorage.getItem("useReducer_usersList");o({type:"submit_user",oldUsersList:a?JSON.parse(a):[]})}else t({title:"Wrong input",errorMessage:"Please enter a valid last name!"});else t({title:"Wrong input",errorMessage:"Please enter a valid first name!"});else t({title:"Wrong input",errorMessage:"Please enter valid names!"})},children:[Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"first-name",className:"users__label ".concat(!1===c.validFirstName?"notValid":""),children:"First Name:"}),Object(l.jsx)("input",{type:"text",id:"first-name",className:"users__input ".concat(!1===c.validFirstName?"notValidInput":""),placeholder:"Enter First Name",onChange:function(e){return o({type:"fistName_update",value:e.target.value})},value:c.firstName})]}),Object(l.jsxs)("div",{className:"users__form--container",children:[Object(l.jsx)("label",{htmlFor:"last-name",className:"users__label ".concat(!1===c.validLastName?"notValid":""),children:"Last Name:"}),Object(l.jsx)("input",{type:"text",id:"last-name",className:"users__input ".concat(!1===c.validLastName?"notValidInput":""),placeholder:"Enter Last Name",onChange:function(e){return o({type:"lastName_update",value:e.target.value})},value:c.lastName})]}),Object(l.jsx)("button",{className:"users__btn",type:"Submit",children:"Submit"})]}),Object(l.jsx)("h2",{className:"users__title",children:"Users"}),c.users&&Object(l.jsx)("ul",{className:"users__list",children:c.users.map((function(e){return Object(l.jsxs)("li",{className:"users__item",children:[Object(l.jsxs)("span",{children:[e.firstName," ",e.lastName]}),Object(l.jsx)("button",{className:"users__delete",onClick:function(){return o({type:"delete_user",id:e.id})},children:Object(l.jsx)(m.c,{})})]},e.id)}))}),0===c.users.length&&Object(l.jsx)("div",{className:"users__empty",children:"....No users to display...."})]})})},O=function(){var e=Object(s.useRef)(),t=Object(s.useRef)("<h2>initial ref</h2>");return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.current.value=""},children:[Object(l.jsx)("label",{htmlFor:"input",children:"Name"}),Object(l.jsx)("input",{id:"input",ref:e,onChange:function(){console.log(e.current),console.log(e.current.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{ref:t,onClick:function(){console.log("test"),t.current.innerHTML="<h2>test is <i>passed!</i></h2",console.log(t.current.innerHTML)},children:"initial test"})]})},h=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){console.log("Use Effect runs one time only")}),[]),Object(s.useEffect)((function(){return console.log("Use Effect with return CLEANUP FUNCTION"),function(){console.log("--------\nCLEANUP\n--------")}}),[]),Object(s.useEffect)((function(){var e=setTimeout((function(){console.log("***********\n***********\nfetch data example!!\n***********\n***********")}),1e3);return function(){console.log("clear timeout!"),clearTimeout(e)}}),[a]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"useEffect Example"}),Object(l.jsx)("label",{htmlFor:"input",children:"Input"}),Object(l.jsx)("input",{type:"text",id:"input",onChange:function(e){n(e.target.value)},value:a})]})},f={count:0};function N(e,t){switch(console.log("state: ",e),console.log("action: ",t),t.type){case"decrement":return{count:e.count-1};case"increment":return{count:e.count+1};default:throw new Error}}var v=function(){var e=Object(s.useReducer)(N,f),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"useReducer Example (Counter)"}),Object(l.jsxs)("p",{children:["Count: ",a.count]}),Object(l.jsx)("button",{onClick:function(){return n({type:"decrement"})},children:"-"}),Object(l.jsx)("button",{onClick:function(){return n({type:"increment"})},children:"+"})]})},x=a(5),I=a.n(x),S=n.a.createContext({isLoggedIn:!1,loggedUser:{},setLoggedUser:function(){},setIsLoggedIn:function(){},navPage:"Home",setNavPage:function(){},navBarPages:[]}),w=function(e){var t=e.navBarPages,a=Object(s.useContext)(S);return Object(l.jsx)("header",{className:I.a.header,children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"".concat(I.a.box," ").concat(I.a.logo),children:Object(l.jsx)("h1",{className:I.a.logo__title,children:"React App"})}),Object(l.jsx)("div",{className:"".concat(I.a.box," ").concat(I.a.navBar__container),children:a.isLoggedIn&&Object(l.jsx)("nav",{className:I.a.nav,children:Object(l.jsx)("ul",{className:I.a.header__list,children:t.map((function(e){return Object(l.jsx)("li",{className:"".concat(I.a.header__item," ").concat(a.navPage===e?I.a.active:""),onClick:function(){return a.setNavPage(e)},children:e},Object(d.v4)())}))})})}),Object(l.jsxs)("div",{className:"".concat(I.a.box," ").concat(I.a.login__container),children:[!a.isLoggedIn&&Object(l.jsx)("button",{className:"".concat(I.a.button," ").concat(I.a.signInBtn),onClick:function(){return a.setNavPage("Sign in")},children:"Sign in"}),a.isLoggedIn&&Object(l.jsx)("button",{className:I.a.button,onClick:function(){localStorage.removeItem("loggedUser"),a.setIsLoggedIn(!1),a.setNavPage("Home")},children:"Sign out"})]})]})})},y=a(6),L=a.n(y),E=function(){var e=Object(s.useContext)(S);return Object(l.jsxs)("div",{className:"wrapper",children:[!e.isLoggedIn&&Object(l.jsxs)("div",{className:L.a.home,children:[Object(l.jsxs)("h2",{className:L.a.signInText,children:["Hello there!",Object(l.jsx)("br",{})," Please sign in to view the content!!"]}),Object(l.jsxs)("div",{className:L.a.note__box,children:[Object(l.jsx)("h4",{className:L.a.note__important,children:"Important!!"}),Object(l.jsx)("p",{className:L.a.note__text,children:"The local storage of your browser will be used to save all entered data in Sign up and Sign in forms"})]}),Object(l.jsx)(m.a,{className:L.a.arrowUp})]}),e.isLoggedIn&&Object(l.jsxs)("div",{className:L.a.home,children:[Object(l.jsxs)("h2",{className:L.a.greeting,children:["Hello ",e.loggedUser.name," ",e.loggedUser.lastName]}),Object(l.jsx)("h1",{className:L.a.title,children:"Welcome to My React World!!"}),Object(l.jsx)("p",{children:"Please choose a page in navbar"})]})]})},U=a(2),C=a.n(U),P={name:"",nameIsValid:!1,lastName:"",lastNameIsValid:!1,email:"",emailIsValid:!1,password:"",passwordIsValid:!1},V=function(e,t){switch(t.type){case"updateName":return Object(_.a)(Object(_.a)({},e),{},{name:t.name,nameIsValid:t.name.trim().length>0});case"updateLastName":return Object(_.a)(Object(_.a)({},e),{},{lastName:t.lastName,lastNameIsValid:t.lastName.trim().length>0});case"updateEmail":return Object(_.a)(Object(_.a)({},e),{},{email:t.email,emailIsValid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)});case"updatePassword":return Object(_.a)(Object(_.a)({},e),{},{password:t.password,passwordIsValid:t.password.trim().length>=6});case"submit":var a=localStorage.getItem("logged-users");a=JSON.parse(a);var s=[{name:e.name,lastName:e.lastName,email:e.email,password:e.password}];if(a){if(0!==a.filter((function(t){return t.email===e.email})).length)return P;s=Object(u.a)(a).concat(s)}return localStorage.setItem("logged-users",JSON.stringify(s)),P;default:return}},H=function(){var e=Object(s.useReducer)(V,P),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("form",{className:C.a.signIn__form,onSubmit:function(e){e.preventDefault(),a.nameIsValid&&a.lastNameIsValid&&a.emailIsValid&&a.passwordIsValid&&n({type:"submit"})},children:[Object(l.jsx)("div",{className:C.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(C.a.signInInput," ").concat(a.nameIsValid?"":C.a.invalidInput),id:"signup_name",placeholder:"Name",value:a.name,onChange:function(e){return n({type:"updateName",name:e.target.value})}})}),Object(l.jsx)("div",{className:C.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(C.a.signInInput," ").concat(a.lastNameIsValid?"":C.a.invalidInput),id:"signup_lastName",placeholder:"Last Name",value:a.lastName,onChange:function(e){return n({type:"updateLastName",lastName:e.target.value})}})}),Object(l.jsx)("div",{className:C.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(C.a.signInInput," ").concat(a.emailIsValid?"":C.a.invalidInput),id:"signup_email",placeholder:"Email",value:a.email,onChange:function(e){return n({type:"updateEmail",email:e.target.value})}})}),Object(l.jsx)("div",{className:C.a.signIn__Block,children:Object(l.jsx)("input",{type:"password",className:"".concat(C.a.signInInput," ").concat(a.passwordIsValid?"":C.a.invalidInput),id:"signup_password",placeholder:"Password",value:a.password,onChange:function(e){return n({type:"updatePassword",password:e.target.value})}})}),Object(l.jsx)("button",{type:"submit",className:C.a.signIn__submit,children:"Sign up"})]})},k={email:"",emailIsValid:!1,password:"",passwordIsValid:!1,loggedUser:{}},B=function(e,t){switch(t.type){case"updateEmail":return Object(_.a)(Object(_.a)({},e),{},{email:t.email,emailIsValid:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)});case"updatePassword":return Object(_.a)(Object(_.a)({},e),{},{password:t.password,passwordIsValid:t.password.trim().length>=6});case"submit":var a=localStorage.getItem("logged-users");a=JSON.parse(a);var s={};return a&&a.forEach((function(t){t.email===e.email&&t.password===e.password&&(s=t,localStorage.setItem("loggedUser",JSON.stringify(t)))})),Object(_.a)(Object(_.a)({},k),{},{loggedUser:s});default:return}},T=function(){var e=Object(s.useReducer)(B,k),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(S);Object(s.useEffect)((function(){a.loggedUser!==r.loggedUser&&a.loggedUser.email&&(r.setLoggedUser(a.loggedUser),r.setNavPage("Home"),r.setIsLoggedIn(!0))}),[a.loggedUser]);return Object(l.jsxs)("form",{className:C.a.signIn__form,onSubmit:function(e){e.preventDefault(),a.emailIsValid&&a.passwordIsValid&&n({type:"submit"})},children:[Object(l.jsx)("div",{className:C.a.signIn__Block,children:Object(l.jsx)("input",{type:"text",className:"".concat(C.a.signInInput," ").concat(a.emailIsValid?"":C.a.invalidInput),id:"signup_email",placeholder:"Email",value:a.email,onChange:function(e){return n({type:"updateEmail",email:e.target.value})}})}),Object(l.jsx)("div",{className:C.a.signIn__Block,children:Object(l.jsx)("input",{type:"password",className:"".concat(C.a.signInInput," ").concat(a.passwordIsValid?"":C.a.invalidInput),id:"signup_password",placeholder:"Password",value:a.password,onChange:function(e){return n({type:"updatePassword",password:e.target.value})}})}),Object(l.jsx)("button",{className:C.a.signIn__submit,children:"Sign in"})]})},F=function(e,t){switch(t.type){case"change-form":return"Sign in"===e.formType?Object(_.a)(Object(_.a)({},e),{},{formType:"Sign up",actionButtonText:"Sign in"}):Object(_.a)(Object(_.a)({},e),{},{formType:"Sign in",actionButtonText:"Sign up"});default:throw new Error}},J=function(){var e=Object(s.useReducer)(F,{formType:"Sign in",actionButtonText:"Sign up"}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(S);return Object(l.jsx)("div",{className:C.a.signIn,children:Object(l.jsxs)("div",{className:C.a.signIn__container,children:[Object(l.jsx)("button",{className:C.a.close,onClick:function(){r.setNavPage("Home")},children:Object(l.jsx)(m.b,{})}),Object(l.jsx)("h2",{className:C.a.signIn__title,children:a.formType}),"Sign in"===a.formType&&Object(l.jsx)(T,{}),"Sign up"===a.formType&&Object(l.jsx)(H,{}),Object(l.jsx)("div",{className:C.a.actions,children:Object(l.jsx)("button",{className:C.a.signIn__action_btn,onClick:function(){return n({type:"change-form"})},children:a.actionButtonText})})]})})};var R=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),c=Object(i.a)(r,2),u=c[0],d=c[1],m=Object(s.useState)(!1),_=Object(i.a)(m,2),g=_[0],b=_[1],f=Object(s.useState)({}),N=Object(i.a)(f,2),x=N[0],I=N[1],y=["Home","Users","Users(useReducer)","UseRef","UseEffect","UseReducer"];return Object(s.useEffect)((function(){var e=localStorage.getItem("activePage");null===e?(d("Home"),localStorage.setItem("activePage",JSON.stringify("Home"))):""===u?d(JSON.parse(e)):localStorage.setItem("activePage",JSON.stringify(u))}),[u]),Object(s.useEffect)((function(){var e=localStorage.getItem("loggedUser");(e=JSON.parse(e))&&(I(e),b(!0)),console.log("user:",e)}),[b]),Object(l.jsxs)(S.Provider,{value:{isLoggedIn:g,loggedUser:x,setLoggedUser:function(e){I(e)},setIsLoggedIn:function(e){b(e)},navPage:u,setNavPage:function(e){d(e)},navBarPages:y},children:[Object(l.jsx)(w,{navBarPages:y}),a&&Object(l.jsx)(o,{title:a.title,errorMessage:a.errorMessage,resetError:function(){return n(null)}}),"Home"===u&&Object(l.jsx)(E,{}),"Sign in"===u&&Object(l.jsx)(J,{}),"Users"===u&&Object(l.jsx)(j,{setError:n}),"Users(useReducer)"===u&&Object(l.jsx)(p,{setError:n}),"UseRef"===u&&Object(l.jsx)(O,{}),"UseEffect"===u&&Object(l.jsx)(h,{}),"UseReducer"===u&&Object(l.jsx)(v,{})]})};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={header:"mainHeader_header__1h9Jc",box:"mainHeader_box__2Y_Iv",logo:"mainHeader_logo__2eSlo",logo__title:"mainHeader_logo__title__2s_3G",navBar__container:"mainHeader_navBar__container__3Eftr",nav:"mainHeader_nav__3xTT8",header__list:"mainHeader_header__list__3DE4t",header__item:"mainHeader_header__item__1GHQZ",active:"mainHeader_active__2HQ7f",login__container:"mainHeader_login__container__1a2Ne",button:"mainHeader_button__1eqx6",signInBtn:"mainHeader_signInBtn__1UE1D",shadow:"mainHeader_shadow__3OKuD"}},6:function(e,t,a){e.exports={home:"home_home__n68vr",title:"home_title__OiJpN",signInText:"home_signInText__v6Rho",arrowUp:"home_arrowUp__1CpC0",resize:"home_resize__3lL_f",note__box:"home_note__box__3ItS9",note__important:"home_note__important__3kqil",note__text:"home_note__text__23zx3"}}},[[26,1,2]]]);
//# sourceMappingURL=main.253f1626.chunk.js.map