(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{112:function(n,e,t){},113:function(n,e,t){"use strict";t.r(e);var i,a,o,r,c,s,l,d,p,h,x,m,b,u,f,g,j,w,y,v,O,k,T,S,z,C=t(2),N=t.n(C),P=t(60),F=t.n(P),L=t(27),M=t(6),R=t(114),J=t(5),A=J.d.section(i||(i=Object(M.a)(["\n  max-width: 100vw;\n  height: 100vh;\n  color: ",';\n  position: relative;\n  transition: color 0.3s ease;\n\n  form {\n    display: flex;\n    flex-direction: column;\n    width: clamp(200px, 80vw, 800px);\n    margin: 0 auto;\n    text-align: left;\n    // padding-top: 100px;\n    margin: 0 auto;\n\n    label {\n      font-size: clamp(15px, 5vw, 30px);\n      margin-top: 20px;\n      font-weight: 600;\n\n      span {\n        position: relative;\n        transition: all 0.3s ease;\n\n        &::before {\n          content: "";\n          position: absolute;\n          background: ',";\n          top: 5px;\n          left: 2px;\n          width: 5px;\n          height: 5px;\n          border-radius: 50%;\n        }\n        @media screen and (max-width: 500px) {\n          span::before {\n            top: 0px;\n            left: 0px;\n          }\n        }\n        @media screen and (max-width: 300px) {\n          span::before {\n            top: 0px;\n            right: 0px;\n          }\n        }\n      }\n    }\n\n    input {\n      padding: 10px;\n      font-size: clamp(10px, 5vw, 20px);\n      border: none;\n      outline: none;\n      background: none;\n      color: ",";\n      border-bottom: 2px solid ",";\n      letter-spacing: 1px;\n    }\n    textarea {\n      padding: 10px;\n      font-size: clamp(15px, 5vw, 30px);\n      border: none;\n      outline: none;\n      background: none;\n      height: clamp(50px, 70vw, 200px);\n      resize: vertical;\n      color: ",";\n      border-bottom: 2px solid ",';\n      font-family: "Montserrat", sans-serif;\n    }\n    button {\n      display: inline-block;\n      background: ',";\n      margin: 30px auto;\n      padding: 5px 60px;\n      font-size: clamp(1.5rem, 4vw, 3rem);\n      cursor: pointer;\n      font-weight: 500;\n      letter-spacing: 2px;\n      border: 3px solid ",";\n      // border: 3px solid black;\n      color: ",";\n      transition: all 0.3s ease;\n      margin-bottom: 70px;\n\n      &:hover {\n        background: ",";\n        color: ",";\n        border: 3px solid ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.effect}),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.body}),(function(n){return n.theme.effect}),(function(n){return n.theme.text}),(function(n){return n.theme.effect}),(function(n){return n.theme.body}),(function(n){return n.theme.effect})),D=Object(J.d)(R.a.h1)(a||(a=Object(M.a)(["\n  position: sticky;\n  top: 0;\n  right: 0;\n  width: 200%;\n  display: inline-block;\n  margin-bottom: 0;\n  transform-origin: 0% 0%;\n  // left: 50px;\n  z-index: -1;\n  font-size: clamp(10rem, 12vw, 30rem);\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 1px ",";\n  opacity: 0.7;\n  user-select: none;\n"])),(function(n){return n.theme.text})),E=t(91),Y=t(3),H=function(){var n=Object(C.useState)(!1),e=Object(L.a)(n,2),t=e[0],i=e[1];return Object(Y.jsxs)(A,{className:"center",id:"contact",children:[Object(Y.jsx)(D,{children:"Contact"}),Object(Y.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault(),E.a.sendForm("service_ek59krf","template_bqy8p6d",n.target,"user_9reIGATqRjyyMa38i2t8d").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)})),n.target.reset(),i(!0)},children:[Object(Y.jsx)("label",{htmlFor:"name",children:"Name"}),Object(Y.jsx)("input",{required:!0,placeholder:"What is your name?",type:"text",name:"fullName",id:"name"}),Object(Y.jsxs)("label",{htmlFor:"email",children:["Ema",Object(Y.jsx)("span",{children:"\u0131"}),"l"]}),Object(Y.jsx)("input",{required:!0,placeholder:"Your best email address",type:"text",name:"email",id:"email"}),Object(Y.jsx)("label",{htmlFor:"phone_number",children:"Phone Number"}),Object(Y.jsx)("input",{required:!0,placeholder:"Your phone number",type:"text",name:"phone",id:"phone"}),Object(Y.jsx)("label",{htmlFor:"message",children:"Message"}),Object(Y.jsx)("textarea",{required:!0,cols:"30",rows:"10",placeholder:"What do you want to tell me?",name:"message",id:"message"}),Object(Y.jsx)("button",{type:"submit",children:"Submit"})]}),t?alert("Thank you"):null]})},_=J.d.section(o||(o=Object(M.a)(["\n  position: relative;\n  height: 100vh;\n  max-width: 100vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: ",";\n"])),(function(n){return n.theme.text})),B=Object(J.d)(R.a.h1)(r||(r=Object(M.a)(["\n  position: absolute;\n  // left: clamp(10%, 30vw, 30% );\n  left: 30%;\n  // top: clamp(7rem, 20vh, 15rem);\n  opacity: 0.3;\n  // font-size: 15rem;\n  font-size: clamp(5rem, 15vw, 15rem);\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 1px ",";\n  user-select: none;\n\n  @media only screen and (max-width: 600px) {\n    left: 20%;\n    top: 15%;\n  }\n"])),(function(n){return n.theme.text})),I=J.d.div(c||(c=Object(M.a)(['\n  // width: clamp(90vw, 50%, 900px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  // position: relative;\n\n  // &::after {\n  //   content: "";\n  //   position: absolute;\n  //   top: 0;\n  //   left: 0;\n  //   width: 200px;\n  //   height: 200px;\n  //   background-image: radial-gradient(#000 20%, transparent 20%),\n  //     radial-gradient(#000 20%, transparent 20%);\n  //   // background-color: #e53935;\n  //   background-position: 0 0, 50px 50px;\n  //   background-size: 100px 100px;\n  // }\n']))),q=J.d.div(s||(s=Object(M.a)(['\n  width: clamp(95vw, 1000px, 95vw);\n  letter-spacing: 4px;\n\n  h1 {\n    font-size: clamp(4rem, 15vw, 10rem);\n    // font-size: 10rem;\n    font-family: "Montserrat", sans-serif;\n    transition: color 0.3s ease;\n    margin-bottom: 10px;\n  }\n\n  .span {\n    color: ',";\n    display: inline-block;\n  }\n\n  div {\n    transform: translateY(20px);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    @media only screen and (max-width: 600px) {\n      transform: translateY(-10px);\n    }\n\n    h2 {\n      font-size: clamp(2rem, 8vw, 8rem);\n      // font-size: 6rem;\n      font-weight: 400;\n      transition: color 0.3s ease;\n      // margin-right: 200px;\n      white-space: nowrap;\n\n      // @media only screen and (max-width: 800px) {\n      //   font-size: 5rem;\n      // }\n      // @media only screen and (max-width: 600px) {\n      //   font-size: 4rem;\n      // }\n      @media only screen and (max-width: 450px) {\n        white-space: unset;\n      }\n    }\n\n    .home_btn {\n      font-size: clamp(15px, 8vw, 20px);\n      font-weight: 500;\n      border: 3px solid ",";\n      white-space: nowrap;\n      position: relative;\n      padding: 5px 30px;\n      // transform: translateY(20px);\n      margin-top: 10px;\n      cursor: pointer;\n      user-select: none;\n      letter-spacing: 2px;\n      // color: ",";\n      // background: ",";\n      transition: all 0.3s ease;\n      // box-shadow: 1px 1px rgba(",", 0.1),\n      //   2px 2px rgba(",", 0.1),\n      //   3px 3px rgba(",", 0.1),\n      //   4px 4px rgba(",", 0.1),\n      //   5px 5px rgba(",", 0.1),\n      //   6px 6px rgba(",", 0.1),\n      //   7px 7px rgba(",", 0.1),\n      //   8px 8px rgba(",", 0.1),\n      //   9px 9px rgba(",", 0.1),\n      //   10px 10px rgba(",", 0.09),\n      //   11px 11px rgba(",", 0.08),\n      //   12px 12px rgba(",", 0.07),\n      //   13px 13px rgba(",", 0.06),\n      //   14px 14px rgba(",", 0.05),\n      //   15px 15px rgba(",", 0.04),\n      //   16px 16px rgba(",", 0.03),\n      //   17px 17px rgba(",", 0.02),\n      //   17px 17px rgba(",", 0.01);\n\n      &:hover {\n        background: ",";\n        color: ",";\n        border: 3px solid ",";\n      }\n    }\n\n    @media only screen and (max-width: 1100px) {\n      display: grid;\n      margin-top: 20px;\n\n      .home_btn {\n        display: inline-block;\n      }\n    }\n    @media only screen and (max-width: 1100px) {\n    }\n  }\n"])),(function(n){return n.theme.effect}),(function(n){return n.theme.effect}),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.shadow}),(function(n){return n.theme.effect}),(function(n){return n.theme.body}),(function(n){return n.theme.effect})),W=t(65),G=function(n){var e=n.handleScroll,t=n.offsetY;return Object(C.useEffect)((function(){return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(Y.jsxs)(_,{id:"home",children:[Object(Y.jsx)(B,{initial:{y:-100,opacity:0},animate:{y:0,opacity:.3},transition:{duration:1,type:"tween"},style:{transform:"translateY(".concat(.5*t,"px)")},children:Object(Y.jsx)("h1",{children:"Welcome"})}),Object(Y.jsx)(I,{className:"center",children:Object(Y.jsxs)(q,{children:[Object(Y.jsxs)(R.a.h1,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,originX:0,transition:{delay:1,duration:2}},children:["Myrat",Object(Y.jsx)("br",{}),"Charyyev",Object(Y.jsx)(R.a.span,{initial:{opacity:0,y:"-50vw"},animate:{opacity:1,y:0},transition:{delay:5,type:"spring",bounce:.5},className:"span",children:"."})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(R.a.h2,{initial:{opacity:0,y:"-100px"},animate:{opacity:1,y:0,transition:{delay:3.5,duration:.5}},children:"Front-End Developer"}),Object(Y.jsx)(W.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,hashSpy:!0,offset:-100,duration:500,isDynamic:!0,ignoreCancelEvents:!1,spyThrottle:100,children:Object(Y.jsx)(R.a.div,{className:"home_btn",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{delay:2,duration:1,type:"tween"},children:"Learn More"})})]})]})})]})},Q=t(89),X=t(31),U=[{id:"home",icon:Object(Y.jsx)(Q.a,{})},{id:"projects",icon:Object(Y.jsx)(X.c,{})},{id:"contact",icon:Object(Y.jsx)(X.d,{})}],V=Object(J.c)(l||(l=Object(M.a)(["\n  font-size: clamp(25px, 4vw, 40px);\n  // color: ",";\n  transition: 0.2s;\n  color: #000;\n  // margin: 5px;\n\n  &:hover {\n    scale: 1.1;\n  }\n"])),(function(n){return n.theme.text})),K=Object(J.d)(R.a.aside)(d||(d=Object(M.a)(["\n  ",";\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 5;\n  padding: 5px;\n  background: rgba(255, 255, 255, 0);\n  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  cursor: pointer;\n  box-shadow: 0 10px 40px black;\n  background: ",";\n\n  &:hover {\n    scale: 1;\n  }\n\n  a {\n    margin: 0;\n    padding: 0;\n  }\n\n  @media only screen and (max-width: 700px) {\n    left: 50%;\n    transform: translate(-50%, -50%);\n    // bottom: 0;\n    top: 95%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n\n    hr {\n      display: none;\n      transform: rotate(90deg);\n      // width:2px;\n      // height: 30px;\n      // display:block;\n      //     margin: 0 5px;\n    }\n  }\n\n  .active {\n    color: ",";\n    transition: all 0.4s;\n    scale: 1.1;\n  }\n\n  hr {\n    width: 30px;\n    color: ",";\n  }\n"])),V,(function(n){return n.theme.body}),(function(n){return n.theme.effect}),(function(n){return n.theme.text})),Z=Object(J.d)(W.Link)(p||(p=Object(M.a)(["\n  ","\n"])),V),$=Object(J.d)(X.b)(h||(h=Object(M.a)(["\n  ","\n"])),V),nn=Object(J.d)(X.a)(x||(x=Object(M.a)(["\n  ","\n"])),V),en=t(66),tn=(J.d.div(m||(m=Object(M.a)([""]))),Object(J.c)(b||(b=Object(M.a)(["\n  font-size: clamp(22px, 4vw, 35px);\n  color: ",";\n  // margin: 10px 5px;\n  transition: 0.2s;\n\n  &:hover {\n    scale: 1.1;\n    transition: 0.2s;\n  }\n"])),(function(n){return n.theme.icon}))),an=Object(J.d)(en.b)(u||(u=Object(M.a)(["\n  ",";\n"])),tn),on=Object(J.d)(en.a)(f||(f=Object(M.a)(["\n  ",";\n"])),tn),rn=function(n){var e=n.theme,t=n.toggleTheme;return Object(Y.jsx)("div",{onClick:t,children:"light"===e?Object(Y.jsx)(an,{}):Object(Y.jsx)(on,{})})},cn=function(n){var e=n.theme,t=n.toggleTheme;return Object(Y.jsxs)(K,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:4},children:[U.map((function(n){return Object(Y.jsx)(Z,{activeClass:"active",to:n.id,spy:!0,smooth:!0,hashSpy:!0,offset:-100,duration:500,isDynamic:!0,ignoreCancelEvents:!1,spyThrottle:100,children:n.icon})})),Object(Y.jsx)("hr",{}),Object(Y.jsx)("a",{href:"https://github.com/charyyev2000",title:"Github",target:"_blank",children:Object(Y.jsx)(nn,{})}),Object(Y.jsx)("a",{href:"https://linkedin.com/in/myrat-charyyev",title:"LinkedIn",target:"_blank",children:Object(Y.jsx)($,{})}),Object(Y.jsx)("hr",{}),Object(Y.jsx)(rn,{theme:e,toggleTheme:t})]})},sn=[{id:1,header:"Google Maps",content:"HTML",contentTwo:"CSS",contentThree:"JavaScript",comment:"Get real-time navigation and more in the Google-Maps-Clone. Stay on web. Use the app. Directions. Drive. Walk. Bike. Public transport",codePath:"https://github.com/charyyev2000/Personal-Project-4",livePath:"https://charyyev2000.github.io/Personal-Project-4/",langOne:[51.1,"#f1e05a","Javascript"],langTwo:[48.9,"#e34c26","HTML"]},{id:2,header:"Weather-app",content:"React",contentTwo:"Redux",contentThree:"Dark Sky API",contentFour:"Bootstrap",comment:"A simple weather application that displays the current weather, daily forecasts, and hourly forecasts based on geolocation or search. ",codePath:"https://github.com/charyyev2000/barometric-weather-app",livePath:"https://barometric.io/",langOne:[97.8,"#f1e05a","JavaScript"],langTwo:[2.2,"#e34c26","HTML"]},{id:3,header:"Crypto Currency App",content:"React",contentTwo:"React class components",contentThree:"React Axios",contentFour:"CSS",comment:"Built using React class components and styled with CSS. ",codePath:"https://github.com/charyyev2000/Cryptocurrency",livePath:"https://charyyev2000.github.io/Cryptocurrency/",langOne:[44.6,"#f1e05a","JavaScript"],langTwo:[28,"#563d7c","CSS"],langThree:[27.4,"#e34c26","HTML"]},{id:4,header:"Website Design",content:"HTML",contentTwo:"CSS",contentThree:"JavaScript",comment:"Completely Responsive, SVG, UI Website Design",codePath:"https://github.com/charyyev2000/Personal-Project-3",livePath:"https://charyyev2000.github.io/Personal-Project-3/",langOne:[50.2,"#e34c26","HTML"],langTwo:[46.5,"#563d7c","CSS"],langThree:[3.3,"#f1e05a","JavaScript"]},{id:5,header:"Shop-Online",content:"MongoDB",contentTwo:"Express Js",contentThree:"React Js",contentFour:"Node Js",contentFive:"",comment:"An E-commerce plarform made using React JS, Redux, Firebase(authentication)",codePath:"https://github.com/charyyev2000/Shop-Online",livePath:"https://charyyev2000.github.io/Shop-Online/",langOne:[93.5,"#f1e05a","JavaScript"],langTwo:[3.2,"#e34c26","HTML"],langThree:[2.6,"#c6538c","SCSS"],langFour:[.7,"#563d7c","CSS"]},{id:6,header:"Admin Dashboard",content:"React",contentTwo:"Redux",contentThree:"CSS",comment:"Responsive Admin Dashboard with dark/light mode feature",codePath:"https://github.com/charyyev2000/Admin-Dashboard",livePath:"https://charyyev2000.github.io/Admin-Dashboard/",langOne:[81,"#c6538c","SCSS"],langTwo:[17.2,"#f1e05a","JavaScript"],langThree:[1.8,"#e34c26","HTML"]},{id:7,header:"React-Quiz-App",content:"React",contentTwo:"TypeScript",contentThree:"CSS",comment:"React-Quiz-App where you get random 10 questions and shows correct and incorrect answers.",codePath:"https://github.com/charyyev2000/React-Quiz-App",livePath:"https://charyyev2000.github.io/React-Quiz-App/",langOne:[75.3,"#2b7489","TypeScript"],langTwo:[16.9,"#e34c26","HTML"],langThree:[7.8,"#563d7c","CSS"]},{id:8,header:"Shop-Online-Layout",content:"HTML",contentTwo:"CSS",contentThree:"JavaScript",comment:"Custom website design, implemented in HTML, CSS, JavaScript.",codePath:"https://github.com/charyyev2000/Online-Shop-Layout",livePath:"https://charyyev2000.github.io/Online-Shop-Layout/",langOne:[51.5,"#563d7c","CSS"],langTwo:[30.6,"#e34c26","HTML"],langThree:[17.9,"#f1e05a","JavaScript"]}],ln=J.d.section(g||(g=Object(M.a)(["\n  max-width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 35px;\n  row-gap: 25px;\n  // padding: 350px 0;\n  // padding: clamp(100px, 30vw, 250px) 0;\n  position: relative;\n  // background: red;\n  // position: relative;\n"]))),dn=Object(J.d)(R.a.h1)(j||(j=Object(M.a)(["\n  position: sticky;\n  // position: absolute;\n  top: 0;\n  left: -100px;\n  width: 100%;\n  // text-align: left;\n  font-weight: 900;\n  font-size: clamp(10rem, 12vw, 30rem);\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 1px ",";\n  transform: translateX(-100px);\n  color: ",';\n  pointer-events: none;\n  user-select: none;\n  // opacity: 0.5;\n\n  @media only screen and (max-width: 1000px) {\n    transform: translateX(-70px);\n  }\n\n  .span {\n    position: relative;\n    transition: all 0.3s ease;\n    display: inline;\n    // background-color: red;\n    // color: red;\n\n    // &::after {\n    //   content: "\u0237";\n    //   position: absolute;\n    //   display: flex;\n    //   // z-index: 2;\n    //   // color: ',';\n    //   color: green;\n    //   // top: 0;\n    // }\n\n    // &::before {\n    //   content: "";\n    //   position: absolute;\n    //   background: ',';\n    //   top: 30px;\n    //   left: clamp(1px, 2%, 10px);\n    //   width: clamp(5px, 5vw, 40px);\n    //   height: clamp(5px, 5vw, 40px);\n    //   border-radius: 50%;\n    // }\n  }\n\n  // &::after {\n  //   position: absolute;\n  //   content: ".";\n  //   background: red;\n  //   top: 0;\n  //   left: 50%;\n  //   height: min-content;\n  // }\n'])),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.effect})),pn=Object(J.d)(R.a.div)(w||(w=Object(M.a)(["\n  width: min(600px, 90vw);\n  height: min(300px, 90vh);\n  // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n  background: ",";\n  color: ",';\n  position: relative;\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: background 0.3s;\n  // transition: color 0.3s;\n  padding: 10px;\n\n  @media screen and (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &::after {\n    position: absolute;\n    content: "Tap for more information";\n    inset: 0;\n    background-color: #000;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 20px;\n    transition: all 0.5s;\n    opacity: 0;\n  }\n\n  &:hover::after {\n    opacity: 1;\n    cursor: pointer;\n  }\n'])),(function(n){return n.theme.projectBg}),(function(n){return n.theme.projectText})),hn=Object(J.d)(R.a.div)(y||(y=Object(M.a)(["\n  width: clamp(100px, 50%, 400px);\n  height: 100%;\n  border-radius: 10px 0 0 10px;\n  position: relative;\n  // padding: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media screen and (max-width: 700px) {\n    height: 50%;\n    width: 100%;\n\n    .stacks {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    ul {\n      display: flex;\n      justify-content: center;\n\n      li {\n        font-size: clamp(10px, 2vw, 20px);\n        margin-left: 10px;\n      }\n    }\n  }\n\n  h1 {\n    text-align: center;\n    font-size: clamp(20px, 2.5vw, 25px);\n    // margin: 10px 0;\n  }\n\n  .stacks h3 {\n    font-size: clamp(15px, 1.8vw, 20px);\n    font-weight: 500;\n  }\n\n  li {\n    font-size: clamp(10px, 1.5vw, 15px);\n    // margin: 5px 10px;\n    // padding: 10px 20px;\n    list-style: none;\n  }\n  .comment p {\n    font-size: clamp(10px, 2vw, 15px);\n    font-style: italic;\n    // margin: 10px;\n    opacity: 0.7;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n    // margin-bottom: 10px;\n    // justify-content: space-between;\n    // background: red;\n\n    @media screen and (max-width: 400px) {\n      display: block;\n      flex-direction: column;\n    }\n  }\n  .button {\n    width: min(90px, 16vw);\n    font-size: clamp(0.5em, 3vw, 1em);\n    // font-size:clamp(40px, 4vw, 5em);\n    color: #fff;\n    text-decoration: none;\n    background: #162936;\n    white-space: nowrap;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    padding: 8px 14px;\n    border-radius: 10px;\n    width: 90px;\n    height: min-content;\n\n    @media screen and (max-width: 400px) {\n      width: 100%;\n\n      &:nth-child(1) {\n        margin-bottom: 10px;\n      }\n    }\n  }\n"]))),xn=J.d.div(v||(v=Object(M.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0px 10px black;\n  border-radius: 10px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center center;\n  }\n"]))),mn=t(115),bn=t(116),un=Object(J.d)(R.a.div)(O||(O=Object(M.a)(["\n  position: fixed;\n  inset: 0;\n  background: #000000e1;\n  margin: 0 auto;\n  z-index: 6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),fn=Object(J.d)(R.a.h1)(k||(k=Object(M.a)(["\n  text-align: center;\n  width: 100%;\n  font-size: clamp(20px, 3vw, 30px);\n  user-select: none;\n  // white-space: nowrap;\n"]))),gn=Object(J.d)(R.a.div)(T||(T=Object(M.a)(["\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: ",";\n  position: relative;\n  padding: 10px;\n  width: clamp(300px, 70vw, 1100px);\n  height: clamp(300px, 70vh, 600px);\n  // background: ",";\n  color: ",";\n  border-radius: 20px;\n  display: flex;\n  // overflow: hidden;\n\n  @media screen and (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  // .test {\n  //   width: 100%;\n  //   height: 100%;\n  //   position: relative;\n  //   display: block;\n  // }\n\n  .back-btn {\n    position: absolute;\n    top: -30px;\n    right: -30px;\n    // top: 0;\n    // right: 0;\n    font-size: clamp(1rem, 3vw, 2rem);\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n    background: #fff;\n    z-index: 70;\n    box-shadow: 0 0px 10px black;\n  }\n"])),(function(n){return n.theme.body}),(function(n){return n.theme.effect}),(function(n){return n.theme.projectText})),jn=Object(J.d)(R.a.div)(S||(S=Object(M.a)(["\n  width: clamp(100px, 45%, 450px);\n  height: 100%;\n  // border-right: 1px solid black;\n  // border-radius: 10px 0 0 10px;\n  position: relative;\n  padding-right: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: ",";\n\n  @media screen and (max-width: 1000px) {\n    padding: 0 10px;\n  }\n\n  @media screen and (max-width: 700px) {\n    height: 50%;\n    width: 100%;\n\n    .stacks {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    ul {\n      display: flex;\n      justify-content: center;\n      // margin-top: 5px;\n\n      li {\n        padding-left: 10px;\n      }\n    }\n  }\n\n  .stacks {\n    display: flex;\n    flex-direction: column;\n\n    h3 {\n      font-size: clamp(15px, 2vw, 25px);\n      // margin-bottom: 10px;\n      font-weight: 700;\n      display: inline-flex;\n      pointer-events: none;\n    }\n\n    li {\n      font-size: clamp(10px, 2vw, 20px);\n      margin-bottom: 5px;\n      user-select: none;\n      list-style: none;\n    }\n  }\n\n  .comment p {\n    font-size: clamp(10px, 2vw, 20px);\n    font-style: italic;\n    opacity: 0.7;\n    user-select: none;\n  }\n\n  .buttons {\n    display: flex;\n    // margin-bottom: 10px;\n    justify-content: space-around;\n\n    @media screen and (max-width: 400px) {\n      display: flex;\n      display: inline-flex;\n    }\n  }\n  .button {\n    // width: min(170px, 16vw);\n    font-size: clamp(1em, 2.5vw, 2.5em);\n    color: #fff;\n    text-decoration: none;\n    background: #162936;\n    white-space: nowrap;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    // color: #fff;\n    padding: 8px 14px;\n    border-radius: 10px;\n    box-shadow: 0 0px 20px black;\n  }\n\n  .languages {\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n\n    .progressBar {\n      display: flex;\n      width: 100%;\n      height: 10px;\n      border-radius: 10px;\n      overflow: hidden;\n\n      span {\n        margin: 0 1px;\n      }\n    }\n  }\n\n  .tools {\n    display: grid;\n    grid-template-columns: repeat(2, min-content);\n    white-space: wrap;\n  }\n\n  .percentage {\n    margin: 0 10px;\n    font-weight: 300;\n    user-select: none;\n  }\n\n  .tool {\n    display: flex;\n    align-items: center;\n    // margin-right: 30px;\n    height: min-content;\n    user-select: none;\n\n    span {\n      width: 7px;\n      height: 7px;\n      border-radius: 50%;\n      margin-right: 5px;\n    }\n  }\n"])),(function(n){return n.theme.body})),wn=J.d.div(z||(z=Object(M.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0px 10px black;\n  border-radius: 15px;\n\n  // transition: box-shadow 0.3s ease;\n  // &:hover {\n  //   box-shadow: 0 0px 10px black;\n  // }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center center;\n  }\n"]))),yn=t(90),vn=(t(112),t.p+"static/media/left-arrow.53878c51.svg"),On=t.p+"static/media/right-arrow.8b8fb639.svg";function kn(n){var e=n.direction,t=n.moveSlide;return Object(Y.jsx)("button",{onClick:t,className:"next"===e?"btn-slide next":"btn-slide prev",children:Object(Y.jsx)("img",{src:"next"===e?On:vn})})}var Tn,Sn=function(n){var e=n.id,t=n.expander,i=Object(C.useState)(1),a=Object(L.a)(i,2),o=a[0],r=a[1],c=sn.find((function(n){return n.id===parseInt(e)}));return Object(Y.jsx)(un,{onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},children:Object(Y.jsxs)(gn,{onClick:function(n){return n.stopPropagation()},layoutId:e,className:"test",children:[Object(Y.jsx)("div",{className:"back-btn",onClick:t,children:Object(Y.jsx)(yn.a,{})}),Object(Y.jsxs)(jn,{children:[Object(Y.jsx)(fn,{children:c.header}),Object(Y.jsxs)("div",{className:"stacks",children:[Object(Y.jsx)("h3",{children:"TechStacks:"}),Object(Y.jsxs)("ul",{children:[Object(Y.jsx)("li",{children:c.content}),Object(Y.jsx)("li",{children:c.contentTwo}),c.contentThree?Object(Y.jsx)("li",{children:c.contentThree}):"",c.contentFour?Object(Y.jsx)("li",{children:c.contentFour}):"",c.contentFive?Object(Y.jsx)("li",{children:c.contentFive}):""]})]}),Object(Y.jsx)("div",{className:"comment",children:Object(Y.jsx)("p",{children:c.comment})}),Object(Y.jsxs)("div",{className:"languages",children:[Object(Y.jsx)("h2",{children:"Languages"}),Object(Y.jsxs)("div",{className:"progressBar",children:[c.langOne?Object(Y.jsx)("span",{style:{background:"".concat(c.langOne[1]),width:"".concat(c.langOne[0],"%")}}):"",c.langTwo?Object(Y.jsx)("span",{style:{background:"".concat(c.langTwo[1]),width:"".concat(c.langTwo[0],"%")}}):"",c.langThree?Object(Y.jsx)("span",{style:{background:"".concat(c.langThree[1]),width:"".concat(c.langThree[0],"%")}}):"",c.langFour?Object(Y.jsx)("span",{style:{background:"".concat(c.langFour[1]),width:"".concat(c.langFour[0],"%")}}):""]}),Object(Y.jsxs)("div",{className:"tools",children:[c.langOne?Object(Y.jsxs)("div",{className:"tool",children:[Object(Y.jsx)("span",{style:{background:"".concat(c.langOne[1])}}),Object(Y.jsx)("h3",{children:c.langOne[2]}),Object(Y.jsxs)("h3",{className:"percentage",children:[c.langOne[0],"%"]})]}):"",c.langTwo?Object(Y.jsxs)("div",{className:"tool",children:[Object(Y.jsx)("span",{style:{background:"".concat(c.langTwo[1])}}),Object(Y.jsx)("h3",{children:c.langTwo[2]}),Object(Y.jsxs)("h3",{className:"percentage",children:[c.langTwo[0],"%"]})]}):"",c.langThree?Object(Y.jsxs)("div",{className:"tool",children:[Object(Y.jsx)("span",{style:{background:"".concat(c.langThree[1])}}),Object(Y.jsx)("h3",{children:c.langThree[2]}),Object(Y.jsxs)("h3",{className:"percentage",children:[c.langThree[0],"%"]})]}):"",c.langFour?Object(Y.jsxs)("div",{className:"tool",children:[Object(Y.jsx)("span",{style:{background:"".concat(c.langFour[1])}}),Object(Y.jsx)("h3",{children:c.langFour[2]}),Object(Y.jsxs)("h3",{className:"percentage",children:[c.langFour[0],"%"]})]}):""]})]}),Object(Y.jsxs)("div",{className:"buttons",children:[Object(Y.jsx)("a",{className:"button",href:"".concat(c.codePath),target:"_blank",rel:"noopener noreferrer",children:"see code"}),Object(Y.jsx)("a",{className:"button",href:"".concat(c.livePath),target:"_blank",rel:"noopener noreferrer",children:"see live"})]})]}),Object(Y.jsxs)(wn,{children:[sn.map((function(n,e){return Object(Y.jsx)("div",{className:o===e+1?"slide active-anim":"slide",children:Object(Y.jsx)("img",{src:"/myrat-charyyev"+"/images/".concat(c.id,"/").concat(e+1,".jpg")})},e)})),Object(Y.jsx)(kn,{moveSlide:function(){4!==o?r(o+1):4===o&&r(1)},direction:"next"}),Object(Y.jsx)(kn,{moveSlide:function(){1!==o?r(o-1):1===o&&r(sn.length)},direction:"prev"}),Object(Y.jsx)("div",{className:"container-dots",children:Array.from({length:4}).map((function(n,e){return Object(Y.jsx)("div",{onClick:function(){return function(n){r(n)}(e+1)},className:o===e+1?"dot active":"dot"})}))})]})]},c.id)})},zn=function(n){var e=n.offsetY,t=n.handleScroll;Object(C.useEffect)((function(){return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]);var i=Object(C.useState)(!1),a=Object(L.a)(i,2),o=a[0],r=a[1],c=Object(C.useState)(!1),s=Object(L.a)(c,2),l=s[0],d=s[1],p=function(n){!0!==o?(d(n),r(!0)):(d(null),r(!1))};return Object(Y.jsx)(mn.a,{type:"crossfade",children:Object(Y.jsxs)(ln,{className:"center",id:"projects",children:[Object(Y.jsxs)(dn,{className:"title",style:{transform:"translateY(".concat(.01*e,"px)")},children:["Pro",Object(Y.jsx)("span",{className:"span",children:"j"}),"ects"]}),sn.map((function(n,e){return Object(Y.jsxs)(pn,{layoutId:n.id,onClick:function(){return p(n.id)},custom:e,variants:{hidden:function(n){return{opacity:0}},visible:function(n){return{opacity:1,transition:{delay:.5*n}}}},initial:"hidden",animate:"visible",children:[Object(Y.jsxs)(hn,{children:[Object(Y.jsx)("h1",{children:n.header}),Object(Y.jsxs)("div",{className:"stacks",children:[Object(Y.jsx)("h3",{children:"TechStacks:"}),Object(Y.jsxs)("ul",{children:[Object(Y.jsx)("li",{children:n.content}),Object(Y.jsx)("li",{children:n.contentTwo}),n.contentThree?Object(Y.jsx)("li",{children:n.contentThree}):"",n.contentFour?Object(Y.jsx)("li",{children:n.contentFour}):"",n.contentFive?Object(Y.jsx)("li",{children:n.contentFive}):""]})]}),Object(Y.jsx)("div",{className:"comment",children:Object(Y.jsx)("p",{children:n.comment.length<=50?n.comment:"".concat(n.comment.slice(0,50),"...")})})]}),Object(Y.jsx)(xn,{children:Object(Y.jsx)("img",{src:"/myrat-charyyev"+"/images/".concat(n.id,"/1.jpg")})})]},n.id)})),Object(Y.jsx)(bn.a,{children:o&&Object(Y.jsx)(Sn,{expander:p,id:l})})]})})},Cn=Object(J.b)(Tn||(Tn=Object(M.a)(["\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml{\n  font-size: 62.5%;\n  overflow-x: hidden;\n  max-width: 100vw;\n\n\n  @media only screen and (max-width: 600px) {\n    // font-size: 50%;\n    overflow-x: hidden;\n\n  }\n \n}\n\nbody {\n    background: ",';\n    max-width: 100vw;\n    font-family: "Montserrat", sans-serif;\n    transition: background .7s ease;\n    // overflow-x: hidden;\n\n}\n\n.center {\n    // width: clamp(70%, 80vw,90%);\n    width:clamp(300px, 85vw, 1400px);\n    // width: 1400px;\n    // width: 90%;\n    margin: 0 auto;\n    // overflow-x: hidden;\n    // max-width: 100vw;\n\n}\n\nimg {\n  width: 100%;\n}\n'])),(function(n){return n.theme.body})),Nn={body:"#2d2a2f",text:"rgba(255, 255, 255, 1)",shadow:"255, 255, 255",effect:"yellow",projectText:"#aea3a4",projectBg:"rgb(0, 0, 0)",toggle:"linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",content:"hsl(228, 28%, 20%)",hover:"hsl(228, 28%, 40%)",icon:"#fff",navbarborder:"hsl(0,0%, 70%)",iconColor:"#fff"},Pn={body:"rgb(255, 255, 255)",text:"rgba(0, 0, 0, 1)",shadow:"0, 0, 0",effect:"red",projectText:"#000",projectBg:"#fff",toggle:"linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",content:"hsl(227, 47%, 96%)",hover:"hsl(226, 47%, 90%)",navbarborder:"hsl(0,0%, 50%)",iconColor:"black"};var Fn=function(){var n=Object(C.useState)("dark"),e=Object(L.a)(n,2),t=e[0],i=e[1],a=Object(C.useState)(0),o=Object(L.a)(a,2),r=o[0],c=o[1],s=function(){return c(window.pageYOffset)},l=function(n){window.localStorage.setItem("theme",n),i(n)};Object(C.useEffect)((function(){var n=window.localStorage.getItem("theme");n?i(n):l("dark")}),[]);var d="light"===t?Nn:Pn;return Object(Y.jsxs)(J.a,{theme:d,children:[Object(Y.jsx)(Cn,{}),Object(Y.jsx)(cn,{theme:t,toggleTheme:function(){l("dark"===t?"light":"dark")}}),Object(Y.jsx)(G,{offsetY:r,handleScroll:s}),Object(Y.jsx)(zn,{offsetY:r,handleScroll:s}),Object(Y.jsx)(H,{})]})};F.a.render(Object(Y.jsx)(N.a.StrictMode,{children:Object(Y.jsx)(Fn,{})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.ba304d4c.chunk.js.map