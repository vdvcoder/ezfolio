(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4],{108:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(97),l=t.n(c),s=t(88),i=t(22);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(s.useHistory)(),u=Object(i.default)().siteConfig,m=(void 0===u?{}:u).baseUrl,d=function(){a.current||(Promise.all([fetch(m+"search-doc.json").then((function(e){return e.json()})),fetch(m+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(17),t.e(21)]).then(t.bind(null,114)),t.e(10).then(t.t.bind(null,113,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}},78:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),c=t.n(r),l=t(86),s=t(99),i=t(92),o=t(22),u=t(89),m=t(79),d=t.n(m),h=t(137);t(80);const p=[{title:"Single Page Application",description:c.a.createElement(c.a.Fragment,null,"Build using Laravel, React and Ant Design to make the best out of SPA. That means no reload.")},{title:"Modern Design",description:c.a.createElement(c.a.Fragment,null,"Ezfolio is fully responsive and mobile friendly. From menu layout to theme color anything can be customizable.")},{title:"Dynamic",description:c.a.createElement(c.a.Fragment,null,"All contents are dynamic and can be changed without any hassle.")},{title:"Multiple Templates",description:c.a.createElement(c.a.Fragment,null,"Choose from awesome portfolio templates according to your preference.")},{title:"Visitor Tracking",description:c.a.createElement(c.a.Fragment,null,"Keep track of your visitors' location and know how the audiences are engaging.")}];function f({imageUrl:e,title:a,description:t}){const n=Object(u.a)(e);return c.a.createElement("div",{className:Object(l.a)("col col--4 text--center p-4",d.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:d.a.featureImage,src:n,alt:a})),c.a.createElement("h3",null,a),c.a.createElement("p",null,t))}a.default=function(){const e=Object(o.default)(),{siteConfig:a={}}=e,[m,b]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{if(b(!0),"undefined"!=typeof window){t(138).show({timeout:0,progressBar:!1,displayMode:"once",theme:"light",id:"starNotification",title:'<a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/ezfolio"><img src="https://img.shields.io/github/stars/arifszn/ezfolio?style=social" alt="Github Star"/></a>',message:'We need your support. Please \u2b50\ufe0f on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/ezfolio">GitHub</a> to help us increase.'})}}),[]),c.a.createElement(s.a,{description:`${a.tagline}`},c.a.createElement("header",{className:Object(l.a)("hero hero--dark",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{alt:a.title,className:d.a.logo,src:Object(u.a)("img/short_logo.png")})),c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(i.a,{className:Object(l.a)(d.a.getStarted),to:Object(u.a)("docs/")},c.a.createElement(h.a,{style:{display:m?"block":"none"},size:"large",idleText:"Get Started",width:"170px",height:"49px",className:"fadeIn"}))))),c.a.createElement("main",null,p&&p.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},p.map(((e,a)=>c.a.createElement(f,Object(n.a)({key:a},e)))))))))}}}]);