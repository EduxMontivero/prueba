_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"5Yp1":function(e,n,a){"use strict";var t=a("nKUr"),r=a("YFqc"),c=a.n(r),s=function(){return Object(t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"container-fluid",children:[Object(t.jsx)(c.a,{href:"/",children:Object(t.jsx)("a",{className:"navbar-brand",children:"Home"})}),Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})}),Object(t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(c.a,{href:"/blog",children:Object(t.jsx)("a",{className:"nav-link",children:"Blog"})})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]})})]})})})};n.a=function(e){var n=e.children;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(s,{}),n]})}},"97Is":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return a("uNx/")}])},YFqc:function(e,n,a){e.exports=a("cTJO")},cTJO:function(e,n,a){"use strict";var t=a("J4zp"),r=a("284h");n.__esModule=!0,n.default=void 0;var c=r(a("q1tI")),s=a("elyg"),o=a("nOHt"),l=a("vNVm"),i={};function u(e,n,a,t){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,a,t).catch((function(e){0}));var r=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;i[n+"%"+a+(r?"%"+r:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,a=(0,o.useRouter)(),r=a&&a.pathname||"/",f=c.default.useMemo((function(){var n=(0,s.resolveHref)(r,e.href,!0),a=t(n,2),c=a[0],o=a[1];return{href:c,as:e.as?(0,s.resolveHref)(r,e.as):o||c}}),[r,e.href,e.as]),d=f.href,v=f.as,b=e.children,p=e.replace,h=e.shallow,j=e.scroll,m=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var g=c.Children.only(b),x=g&&"object"===typeof g&&g.ref,N=(0,l.useIntersection)({rootMargin:"200px"}),O=t(N,2),y=O[0],_=O[1],w=c.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);(0,c.useEffect)((function(){var e=_&&n&&(0,s.isLocalURL)(d),t="undefined"!==typeof m?m:a&&a.locale,r=i[d+"%"+v+(t?"%"+t:"")];e&&!r&&u(a,d,v,{locale:t})}),[v,d,_,m,n,a]);var E={ref:w,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,a,t,r,c,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(a))&&(e.preventDefault(),null==o&&(o=t.indexOf("#")<0),n[r?"replace":"push"](a,t,{shallow:c,locale:l,scroll:o}))}(e,a,d,v,p,h,j,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(a,d,v,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof m?m:a&&a.locale,L=a&&a.isLocaleDomain&&(0,s.getDomainLocale)(v,k,a&&a.locales,a&&a.domainLocales);E.href=L||(0,s.addBasePath)((0,s.addLocale)(v,k,a&&a.defaultLocale))}return c.default.cloneElement(g,E)};n.default=f},"uNx/":function(e,n,a){"use strict";a.r(n);var t=a("nKUr"),r=a("YFqc"),c=a.n(r),s=a("5Yp1");n.default=function(){return Object(t.jsx)(s.a,{title:"Page Not Found",children:Object(t.jsxs)("div",{className:"text-center",children:[Object(t.jsx)("h1",{className:"display-1",children:"404"}),Object(t.jsxs)("p",{children:["This page does not exists. Please return to"," ",Object(t.jsx)(c.a,{href:"/",children:Object(t.jsx)("a",{children:"Home"})})]})]})})}},vNVm:function(e,n,a){"use strict";var t=a("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,a=e.disabled||!s,l=(0,r.useRef)(),i=(0,r.useState)(!1),u=t(i,2),f=u[0],d=u[1],v=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),a||f||e&&e.tagName&&(l.current=function(e,n,a){var t=function(e){var n=e.rootMargin||"",a=o.get(n);if(a)return a;var t=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;n&&a&&n(a)}))}),e);return o.set(n,a={id:n,observer:r,elements:t}),a}(a),r=t.id,c=t.observer,s=t.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[a,n,f]);return(0,r.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[v,f]};var r=a("q1tI"),c=a("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["97Is",0,2,1]]]);