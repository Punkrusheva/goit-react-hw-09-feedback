(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={stat:"Statistics_stat__WPkCH"}},,,,function(e,t,c){e.exports={layout:"Section_layout__3Xm1f"}},function(e,t,c){e.exports={button:"FeedbackOptions_button__b3x53"}},function(e,t,c){e.exports={message:"Notification_message__hLiRY"}},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(5),a=c.n(s),r=c(3),o=c(6),i=c.n(o),u=c(0);function b(e){var t=e.children,c=e.title;return Object(u.jsxs)("div",{className:i.a.layout,children:[c&&Object(u.jsx)("h2",{children:c}),t]})}b.defaultProps={title:"",children:""};var l=b,j=c(7),d=c.n(j);function f(e){var t=e.options,c=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsx)("button",{type:"button",className:d.a.button,onClick:function(){return c(e)},children:e.slice(0,1).toUpperCase()+e.slice(1)},e)}))}f.defaultProps={options:[]};var p=f,O=c(2),h=c.n(O);function x(e){var t=e.options,c=e.state,n=e.total,s=e.positiveFeedback;return Object(u.jsxs)(u.Fragment,{children:[t.map((function(e){return Object(u.jsxs)("p",{className:h.a.stat,children:[e.slice(0,1).toUpperCase()+e.slice(1)," : ",c[e]]},e)})),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:h.a.stat,children:["Total: ",n]}),Object(u.jsxs)("p",{className:h.a.stat,children:["Positive feedback: ",s,"%"]})]})]})}x.defaultProps={options:[],state:""};var m=x,k=c(8),v=c.n(k);function g(e){var t=e.message;return Object(u.jsx)("h2",{className:v.a.message,children:t})}g.defaultProps={message:""};var _=g,N=(c(14),Object(n.memo)((function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),o=Object(r.a)(a,2),i=o[0],b=o[1],j=Object(n.useState)(0),d=Object(r.a)(j,2),f=d[0],O=d[1],h={good:c,neutral:i,bad:f},x=Object(n.useRef)(0),k=Object(n.useRef)(0);return Object(n.useEffect)((function(){x.current=c+i+f,k.current=Math.round(100*c/x.current),console.log(x.current,k.current)}),[c,i,f]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{title:"Pleas leave feedback",children:Object(u.jsx)(p,{options:Object.keys(h),onLeaveFeedback:function(e){switch(e){case"good":s((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),x.current>0&&Object(u.jsx)(l,{title:"Statistics",children:Object(u.jsx)(m,{options:Object.keys(h),state:h,total:x.current,positiveFeedback:k.current>0?k.current:0})}),0===x.current&&Object(u.jsx)(_,{message:"No feedback given"})]})})));c(15),c(16);a.a.render(Object(u.jsx)(N,{}),document.querySelector("#root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f1a79fc9.chunk.js.map