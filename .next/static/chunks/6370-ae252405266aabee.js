(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6370],{7942:function(e,s,a){"use strict";var n=a(63038);s.default=void 0;var r,l=(r=a(67294))&&r.__esModule?r:{default:r},t=a(64957),i=a(69898),c=a(90639);var o={};function d(e,s,a,n){if(e&&t.isLocalURL(s)){e.prefetch(s,a,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[s+"%"+a+(r?"%"+r:"")]=!0}}var h=function(e){var s,a=!1!==e.prefetch,r=i.useRouter(),h=l.default.useMemo((function(){var s=t.resolveHref(r,e.href,!0),a=n(s,2),l=a[0],i=a[1];return{href:l,as:e.as?t.resolveHref(r,e.as):i||l}}),[r,e.href,e.as]),f=h.href,u=h.as,m=e.children,p=e.replace,x=e.shallow,j=e.scroll,v=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var g=(s=l.default.Children.only(m))&&"object"===typeof s&&s.ref,N=c.useIntersection({rootMargin:"200px"}),w=n(N,2),b=w[0],k=w[1],y=l.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);l.default.useEffect((function(){var e=k&&a&&t.isLocalURL(f),s="undefined"!==typeof v?v:r&&r.locale,n=o[f+"%"+u+(s?"%"+s:"")];e&&!n&&d(r,f,u,{locale:s})}),[u,f,k,v,a,r]);var C={ref:y,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,n,r,l,i,c){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(a))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),s[r?"replace":"push"](a,n,{shallow:l,locale:c,scroll:i}))}(e,r,f,u,p,x,j,v)},onMouseEnter:function(e){t.isLocalURL(f)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),d(r,f,u,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var E="undefined"!==typeof v?v:r&&r.locale,L=r&&r.isLocaleDomain&&t.getDomainLocale(u,E,r&&r.locales,r&&r.domainLocales);C.href=L||t.addBasePath(t.addLocale(u,E,r&&r.defaultLocale))}return l.default.cloneElement(s,C)};s.default=h},90639:function(e,s,a){"use strict";var n=a(63038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,a=e.disabled||!t,c=r.useRef(),o=r.useState(!1),d=n(o,2),h=d[0],f=d[1],u=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),a||h||e&&e.tagName&&(c.current=function(e,s,a){var n=function(e){var s=e.rootMargin||"",a=i.get(s);if(a)return a;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return i.set(s,a={id:s,observer:r,elements:n}),a}(a),r=n.id,l=n.observer,t=n.elements;return t.set(e,s),l.observe(e),function(){t.delete(e),l.unobserve(e),0===t.size&&(l.disconnect(),i.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:s}))}),[a,s,h]);return r.useEffect((function(){if(!t&&!h){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[h]),[u,h]};var r=a(67294),l=a(26286),t="undefined"!==typeof IntersectionObserver;var i=new Map},57420:function(e,s){"use strict";s.Z=function(e){var s=[];if(!e.parentNode)return s;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&s.push(a),a=a.nextSibling;return s}},81108:function(e,s,a){"use strict";a.d(s,{z:function(){return r},_:function(){return l}});var n=a(57420),r=function(e){(0,n.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},l=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,s,a){"use strict";a(67294);var n=a(41664),r=a(82806),l=a(85893);s.Z=function(e){var s=e.hideBGCOLOR;return(0,l.jsx)("footer",{className:"".concat(s?"":"sub-bg"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Contact Us"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Officeal Address"}),(0,l.jsx)("p",{children:"504 White St . Dawsonville, GA 30534 , New York"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-mail"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Email Us"}),(0,l.jsx)("p",{children:"support@gmail.com"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-call"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Call Us"}),(0,l.jsx)("p",{children:"+87986451666"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Recent News"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(n.default,{href:{pathname:"/blog-details",query:{img:"recent-news.png"}},children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/recent-news.png",alt:""})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(n.default,{href:{pathname:"/blog-details",query:{img:"recent-news.png"}},children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,l.jsx)(n.default,{href:"/blog",children:(0,l.jsx)("a",{children:(0,l.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(n.default,{href:{pathname:"/blog-details",query:{img:"recent-news.png"}},children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/recent-news.png",alt:""})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(n.default,{href:{pathname:"/blog-details",query:{img:"recent-news.png"}},children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,l.jsx)(n.default,{href:"/blog",children:(0,l.jsx)("a",{children:(0,l.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"subscribe",children:[(0,l.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,l.jsx)("span",{className:"subs pe-7s-paper-plane"})]})})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("img",{src:r.E8,alt:""})}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-youtube"})})]}),(0,l.jsx)("div",{className:"copy-right",children:(0,l.jsxs)("p",{children:["\xa9 2022, Vie Template. Made with passion by",(0,l.jsx)(n.default,{href:"https://themeforest.net/user/themescamp/portfolio",children:(0,l.jsx)("a",{target:"_blank",children:"ThemesCamp"})}),"."]})})]})})]})})})}},30015:function(e,s,a){"use strict";a(67294);var n=a(41664),r=a(82806),l=a(81108),t=a(85893);s.Z=function(e){var s=e.lr,a=e.nr,i=e.theme;return(0,t.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===i?"light":""),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(n.default,{href:"/",children:(0,t.jsx)("a",{className:"logo",children:i&&"themeL"===i?(0,t.jsx)("img",{ref:s,src:r.Q1,alt:"logo"}):(0,t.jsx)("img",{ref:s,src:r.E8,alt:"logo"})})}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button",onClick:l._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"icon-bar",children:(0,t.jsx)("i",{className:"fas fa-bars"})})}),(0,t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/",children:(0,t.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/about",children:(0,t.jsx)("a",{className:"nav-link",children:"About"})})}),(0,t.jsxs)("li",{className:"nav-item dropdown",onClick:l.z,children:[(0,t.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Works"}),(0,t.jsxs)("div",{className:"dropdown-menu",children:[(0,t.jsx)(n.default,{href:"/showcase/showcase-dark",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Showcase Parallax"})}),(0,t.jsx)(n.default,{href:"/showcase4/showcase4-dark",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Showcase Carousel"})}),(0,t.jsx)(n.default,{href:"/showcase3/showcase3-dark",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Showcase Circle"})}),(0,t.jsx)(n.default,{href:"/works/works-dark",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Portfolio Masonry"})}),(0,t.jsx)(n.default,{href:"/works2/works2-dark",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Portfolio Filtering"})}),(0,t.jsx)(n.default,{href:"/works3/works3-dark",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Portfolio Gallery"})})]})]}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/blog",children:(0,t.jsx)("a",{className:"nav-link",children:"Blog"})})}),(0,t.jsxs)("li",{className:"nav-item dropdown",onClick:l.z,children:[(0,t.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Service"}),(0,t.jsxs)("div",{className:"dropdown-menu",children:[(0,t.jsx)(n.default,{href:"/web-application",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Web Application Development"})}),(0,t.jsx)(n.default,{href:"/mobile-devlopement",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Mobile Application Development"})}),(0,t.jsx)(n.default,{href:"/software-testing",children:(0,t.jsx)("a",{className:"dropdown-item",children:"Software Testing"})})]})]}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{href:"/contact",children:(0,t.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},36413:function(e,s,a){"use strict";a.d(s,{Z:function(){return t}});var n=a(67294),r=function(e){window.addEventListener("scroll",(function(){var s=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*s+"px, 0)",e.style.opacity=1-s/600}))}))},l=a(85893),t=function(e){var s=e.sliderRef;return n.useEffect((function(){r(document.querySelectorAll(".fixed-slider .capt .parlx"))}),[]),(0,l.jsx)("header",{ref:s,className:"works-header fixed-slider hfixd valign sub-bg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-7 col-md-9 static",children:(0,l.jsxs)("div",{className:"capt mt-50",children:[(0,l.jsxs)("div",{className:"parlx text-center",children:[(0,l.jsx)("h1",{className:"color-font",children:"amazing works"}),(0,l.jsx)("p",{children:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."})]}),(0,l.jsx)("div",{className:"bactxt custom-font valign",children:(0,l.jsx)("span",{className:"full-width",children:"Works"})})]})})})})})}},41664:function(e,s,a){e.exports=a(7942)}}]);