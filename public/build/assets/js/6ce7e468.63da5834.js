(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(98)),s={id:"post-user",title:"POST /api/users",sidebar_position:2},u={unversionedId:"Users/post-user",id:"Users/post-user",isDocsHomePage:!1,title:"POST /api/users",description:"Creates a new user",source:"@site/docs/Users/post-user.md",sourceDirName:"Users",slug:"/Users/post-user",permalink:"/docs/Users/post-user",version:"current",sidebarPosition:2,frontMatter:{id:"post-user",title:"POST /api/users",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"GET /api/users",permalink:"/docs/Users/get-users"},next:{title:"GET /api/users/:username",permalink:"/docs/Users/get-user-by-username"}},c=[{value:"Request Body",id:"request-body",children:[]},{value:"Example Response",id:"example-response",children:[]}],i={toc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Creates a new user"),Object(a.b)("h2",{id:"request-body"},"Request Body"),Object(a.b)("p",null,"Accepts the following keys:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"username: String ",Object(a.b)("strong",{parentName:"li"},"required")),Object(a.b)("li",{parentName:"ul"},"avatar_url: String")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "Doug",\n  "avatar_url": "https://example.com/doug.jpg"\n}\n')),Object(a.b)("h2",{id:"example-response"},"Example Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "user": {\n    "username": "Doug",\n    "avatar_url": "https://example.com/doug.jpg",\n    "kudos": 0\n  }\n}\n')))}p.isMDXComponent=!0},98:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||a;return t?o.a.createElement(m,u(u({ref:r},i),{},{components:t})):o.a.createElement(m,u({ref:r},i))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var i=2;i<a;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);