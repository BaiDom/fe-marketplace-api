(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{66:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),s=(t(0),t(98)),o={id:"get-users",title:"GET /api/users",sidebar_position:1},i={unversionedId:"Users/get-users",id:"Users/get-users",isDocsHomePage:!1,title:"GET /api/users",description:"Lists all available users",source:"@site/docs/Users/get-users.md",sourceDirName:"Users",slug:"/Users/get-users",permalink:"/docs/Users/get-users",version:"current",sidebarPosition:1,frontMatter:{id:"get-users",title:"GET /api/users",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"POST /api/users/:user_id/basket",permalink:"/docs/Orders/post-item-to-orders"},next:{title:"POST /api/users",permalink:"/docs/Users/post-user"}},u=[{value:"Example Response",id:"example-response",children:[]}],c={toc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Lists all available users"),Object(s.b)("h2",{id:"example-response"},"Example Response"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "username": "Paul-R",\n      "avatar_url": "https://example.com/Paul-R.jpg",\n      "kudos": 15\n    },\n    {\n      "username": "Paul-C",\n      "avatar_url": "https://example.com/Paul-C.jpg",\n      "kudos": 2\n    }\n  ]\n}\n')))}p.isMDXComponent=!0},98:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,m=l["".concat(o,".").concat(f)]||l[f]||d[f]||s;return t?a.a.createElement(m,i(i({ref:r},c),{},{components:t})):a.a.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);