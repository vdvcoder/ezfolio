(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{108:function(e,n,a){"use strict";var r=a(0),c=a.n(r),t=a(97),s=a.n(t),o=a(88),i=a(22);n.a=function(e){var n=Object(r.useRef)(!1),t=Object(r.useRef)(null),u=Object(o.useHistory)(),l=Object(i.default)().siteConfig,h=(void 0===l?{}:l).baseUrl,d=function(){n.current||(Promise.all([fetch(h+"search-doc.json").then((function(e){return e.json()})),fetch(h+"lunr-index.json").then((function(e){return e.json()})),Promise.all([a.e(17),a.e(21)]).then(a.bind(null,114)),a.e(10).then(a.t.bind(null,113,7))]).then((function(e){!function(e,n,a){new a({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,a){var r=h+a.url;document.createElement("a").href=r,u.push(r)}})}(e[0],e[1],e[2].default)})),n.current=!0)},b=Object(r.useCallback)((function(n){t.current.contains(n.target)||t.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:t}))}}}]);