(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[241],{1690:function(e,t,a){var i={"./chokolade-muffins.jpg":3549,"./cremet-chokolade-cheesecake.jpg":3392,"./efter\xe5rst\xe6rte-med-spidsk\xe5l.jpg":6499,"./f\xf8dselsdagsboller.jpg":808,"./gryderet-med-kylling-og-paprika.jpg":1156,"./mormors-vafler.jpg":3982,"./pasta-med-kyllinge-bolognese.jpg":4479,"./piratburger-med-kylling.jpg":8081,"./pizza-med-spinat-og-r\xf8d-pesto.jpg":5442,"./salat-med-spr\xf8d-kylling.jpg":6934,"./triple-chocolate-chip-cookies.jpg":6734,"./verdens-bedste-brownie.jpg":3308};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=c,e.exports=r,r.id=1690},844:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recipes",function(){return a(178)}])},1551:function(e,t,a){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,r,c=[],n=!0,d=!1;try{for(a=a.call(e);!(n=(i=a.next()).done)&&(c.push(i.value),!t||c.length!==t);n=!0);}catch(s){d=!0,r=s}finally{try{n||null==a.return||a.return()}finally{if(d)throw r}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,n=(c=a(7294))&&c.__esModule?c:{default:c},d=a(1003),s=a(880),o=a(9246);function p(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f={};function l(e,t,a,i){if(e&&d.isLocalURL(t)){e.prefetch(t,a,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;f[t+"%"+a+(r?"%"+r:"")]=!0}}var g=n.default.forwardRef((function(e,t){var a,i=e.legacyBehavior,c=void 0===i?!0!==Boolean(!1):i,g=e.href,u=e.as,h=e.children,b=e.prefetch,m=e.passHref,j=e.replace,x=e.shallow,w=e.scroll,y=e.locale,_=e.onClick,k=e.onMouseEnter,v=p(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);a=h,c&&"string"===typeof a&&(a=n.default.createElement("a",null,a));var S,O=!1!==b,E=s.useRouter(),z=n.default.useMemo((function(){var e=r(d.resolveHref(E,g,!0),2),t=e[0],a=e[1];return{href:t,as:u?d.resolveHref(E,u):a||t}}),[E,g,u]),M=z.href,C=z.as,I=n.default.useRef(M),L=n.default.useRef(C);c&&(S=n.default.Children.only(a));var N=c?S&&"object"===typeof S&&S.ref:t,P=r(o.useIntersection({rootMargin:"200px"}),3),A=P[0],R=P[1],U=P[2],T=n.default.useCallback((function(e){L.current===C&&I.current===M||(U(),L.current=C,I.current=M),A(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[C,N,M,U,A]);n.default.useEffect((function(){var e=R&&O&&d.isLocalURL(M),t="undefined"!==typeof y?y:E&&E.locale,a=f[M+"%"+C+(t?"%"+t:"")];e&&!a&&l(E,M,C,{locale:t})}),[C,M,R,y,O,E]);var D={ref:T,onClick:function(e){c||"function"!==typeof _||_(e),c&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,a,i,r,c,n,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&d.isLocalURL(a))&&(e.preventDefault(),t[r?"replace":"push"](a,i,{shallow:c,locale:s,scroll:n}))}(e,E,M,C,j,x,w,y)},onMouseEnter:function(e){c||"function"!==typeof k||k(e),c&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),d.isLocalURL(M)&&l(E,M,C,{priority:!0})}};if(!c||m||"a"===S.type&&!("href"in S.props)){var H="undefined"!==typeof y?y:E&&E.locale,K=E&&E.isLocaleDomain&&d.getDomainLocale(C,H,E&&E.locales,E&&E.domainLocales);D.href=K||d.addBasePath(d.addLocale(C,H,E&&E.defaultLocale))}return c?n.default.cloneElement(S,D):n.default.createElement("a",Object.assign({},v,D),a)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,a){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,r,c=[],n=!0,d=!1;try{for(a=a.call(e);!(n=(i=a.next()).done)&&(c.push(i.value),!t||c.length!==t);n=!0);}catch(s){d=!0,r=s}finally{try{n||null==a.return||a.return()}finally{if(d)throw r}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,a=e.rootMargin,i=e.disabled||!d,p=c.useRef(),f=r(c.useState(!1),2),l=f[0],g=f[1],u=r(c.useState(t?t.current:null),2),h=u[0],b=u[1],m=c.useCallback((function(e){p.current&&(p.current(),p.current=void 0),i||l||e&&e.tagName&&(p.current=function(e,t,a){var i=function(e){var t,a={root:e.root||null,margin:e.rootMargin||""},i=o.find((function(e){return e.root===a.root&&e.margin===a.margin}));i?t=s.get(i):(t=s.get(a),o.push(a));if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return s.set(a,t={id:a,observer:c,elements:r}),t}(a),r=i.id,c=i.observer,n=i.elements;return n.set(e,t),c.observe(e),function(){if(n.delete(e),c.unobserve(e),0===n.size){c.disconnect(),s.delete(r);var t=o.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&o.splice(t,1)}}}(e,(function(e){return e&&g(e)}),{root:h,rootMargin:a}))}),[i,h,a,l]),j=c.useCallback((function(){g(!1)}),[]);return c.useEffect((function(){if(!d&&!l){var e=n.requestIdleCallback((function(){return g(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[l]),c.useEffect((function(){t&&b(t.current)}),[t]),[m,l,j]};var c=a(7294),n=a(4686),d="undefined"!==typeof IntersectionObserver;var s=new Map,o=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},178:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return l},default:function(){return g}});var i=a(5893),r=(a(7294),a(1664)),c=a.n(r),n=a(1542),d=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=function(e){var t=e.src,r=e.alt,c=o(e,["src","alt"]);return(0,i.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(t){s(e,t,a[t])}))}return e}({srcSet:a(1690)("./".concat(t,"")).srcSet,alt:r},c))},f=function(e){var t=e.recipe;return(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:d().tile,children:[t.image&&(0,i.jsx)(p,{src:t.image,alt:""}),(0,i.jsx)(c(),{href:"/recipes/"+t.id,children:(0,i.jsx)("a",{children:(0,i.jsx)("h2",{children:t.title})})})]})})},l=!0,g=function(e){var t=e.recipes;return(0,i.jsx)("div",{className:"container-fluid g-3",children:(0,i.jsx)("div",{className:"row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4",children:t.map((function(e){return(0,i.jsx)(f,{recipe:e},e.id)}))})})}},1542:function(e){e.exports={tile:"RecipeTile_tile__s5eIh"}},1664:function(e,t,a){e.exports=a(1551)},3549:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/chokolade-muffins-256-7a21c0ece7e78ac42c1dcc3c96d87f32.jpg 256w,/recipe-data/_next/static/images/chokolade-muffins-512-869e30e08453b374fb9697557e4a347b.jpg 512w,/recipe-data/_next/static/images/chokolade-muffins-1024-446c1c11f48002d1eba623da028818fb.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/chokolade-muffins-256-7a21c0ece7e78ac42c1dcc3c96d87f32.jpg",width:256,height:171},{path:"/recipe-data/_next/static/images/chokolade-muffins-512-869e30e08453b374fb9697557e4a347b.jpg",width:512,height:342},{path:"/recipe-data/_next/static/images/chokolade-muffins-1024-446c1c11f48002d1eba623da028818fb.jpg",width:1024,height:684}],src:"/recipe-data/_next/static/images/chokolade-muffins-1024-446c1c11f48002d1eba623da028818fb.jpg",toString:function(){return"/recipe-data/_next/static/images/chokolade-muffins-1024-446c1c11f48002d1eba623da028818fb.jpg"},width:1024,height:684}},3392:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/cremet-chokolade-cheesecake-256-c1700d9a1068f57cc789ab420a1fa652.jpg 256w,/recipe-data/_next/static/images/cremet-chokolade-cheesecake-512-af321da1c1f251da300bb588905e1f79.jpg 512w,/recipe-data/_next/static/images/cremet-chokolade-cheesecake-1024-84d91cad156dfbf4a43453a70dcb2825.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/cremet-chokolade-cheesecake-256-c1700d9a1068f57cc789ab420a1fa652.jpg",width:256,height:196},{path:"/recipe-data/_next/static/images/cremet-chokolade-cheesecake-512-af321da1c1f251da300bb588905e1f79.jpg",width:512,height:391},{path:"/recipe-data/_next/static/images/cremet-chokolade-cheesecake-1024-84d91cad156dfbf4a43453a70dcb2825.jpg",width:1024,height:782}],src:"/recipe-data/_next/static/images/cremet-chokolade-cheesecake-1024-84d91cad156dfbf4a43453a70dcb2825.jpg",toString:function(){return"/recipe-data/_next/static/images/cremet-chokolade-cheesecake-1024-84d91cad156dfbf4a43453a70dcb2825.jpg"},width:1024,height:782}},6499:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-256-936b3ca9f9a5977519dbf9ce21cd013a.jpg 256w,/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-512-2456e5017b3fdc0144e1795f4caa08fc.jpg 512w,/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-1024-1fde69512d2e79b16336421a071a4800.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-256-936b3ca9f9a5977519dbf9ce21cd013a.jpg",width:256,height:182},{path:"/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-512-2456e5017b3fdc0144e1795f4caa08fc.jpg",width:512,height:363},{path:"/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-1024-1fde69512d2e79b16336421a071a4800.jpg",width:1024,height:726}],src:"/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-1024-1fde69512d2e79b16336421a071a4800.jpg",toString:function(){return"/recipe-data/_next/static/images/efter\xe5rst\xe6rte-med-spidsk\xe5l-1024-1fde69512d2e79b16336421a071a4800.jpg"},width:1024,height:726}},808:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/f\xf8dselsdagsboller-256-e9f26c43216f96e0d4e1e62d0aa70904.jpg 256w,/recipe-data/_next/static/images/f\xf8dselsdagsboller-512-813b86c21a5a78eb56ed467da138cf68.jpg 512w,/recipe-data/_next/static/images/f\xf8dselsdagsboller-1024-17d03a7f14b527475405dda64b014bef.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/f\xf8dselsdagsboller-256-e9f26c43216f96e0d4e1e62d0aa70904.jpg",width:256,height:144},{path:"/recipe-data/_next/static/images/f\xf8dselsdagsboller-512-813b86c21a5a78eb56ed467da138cf68.jpg",width:512,height:288},{path:"/recipe-data/_next/static/images/f\xf8dselsdagsboller-1024-17d03a7f14b527475405dda64b014bef.jpg",width:1024,height:577}],src:"/recipe-data/_next/static/images/f\xf8dselsdagsboller-1024-17d03a7f14b527475405dda64b014bef.jpg",toString:function(){return"/recipe-data/_next/static/images/f\xf8dselsdagsboller-1024-17d03a7f14b527475405dda64b014bef.jpg"},width:1024,height:577}},1156:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-256-e0a2f3537f7cc1c879c33ec6260949d0.jpg 256w,/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-512-0d41e4b79dd90dc394760862bc8d3835.jpg 512w,/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-1024-9a3afa2d982c21a0ab5138a5c048945f.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-256-e0a2f3537f7cc1c879c33ec6260949d0.jpg",width:256,height:170},{path:"/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-512-0d41e4b79dd90dc394760862bc8d3835.jpg",width:512,height:341},{path:"/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-1024-9a3afa2d982c21a0ab5138a5c048945f.jpg",width:1024,height:681}],src:"/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-1024-9a3afa2d982c21a0ab5138a5c048945f.jpg",toString:function(){return"/recipe-data/_next/static/images/gryderet-med-kylling-og-paprika-1024-9a3afa2d982c21a0ab5138a5c048945f.jpg"},width:1024,height:681}},3982:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/mormors-vafler-256-c46d75f31e38140bd9044cd6d7f83232.jpg 256w,/recipe-data/_next/static/images/mormors-vafler-512-9c529248cc6f2ce1dc8d25a19a876f57.jpg 512w,/recipe-data/_next/static/images/mormors-vafler-1024-ed841806f9269f428b3c43e0daccde4a.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/mormors-vafler-256-c46d75f31e38140bd9044cd6d7f83232.jpg",width:256,height:164},{path:"/recipe-data/_next/static/images/mormors-vafler-512-9c529248cc6f2ce1dc8d25a19a876f57.jpg",width:512,height:329},{path:"/recipe-data/_next/static/images/mormors-vafler-1024-ed841806f9269f428b3c43e0daccde4a.jpg",width:1024,height:659}],src:"/recipe-data/_next/static/images/mormors-vafler-1024-ed841806f9269f428b3c43e0daccde4a.jpg",toString:function(){return"/recipe-data/_next/static/images/mormors-vafler-1024-ed841806f9269f428b3c43e0daccde4a.jpg"},width:1024,height:659}},4479:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-256-a14c8c4a22d6ed8c4aa5b50b9d5dca40.jpg 256w,/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-512-a3c15e1386fec01f04b34573ce40c893.jpg 512w,/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-1024-590364503ca2240bf9badce527becf7f.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-256-a14c8c4a22d6ed8c4aa5b50b9d5dca40.jpg",width:256,height:196},{path:"/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-512-a3c15e1386fec01f04b34573ce40c893.jpg",width:512,height:391},{path:"/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-1024-590364503ca2240bf9badce527becf7f.jpg",width:1024,height:782}],src:"/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-1024-590364503ca2240bf9badce527becf7f.jpg",toString:function(){return"/recipe-data/_next/static/images/pasta-med-kyllinge-bolognese-1024-590364503ca2240bf9badce527becf7f.jpg"},width:1024,height:782}},8081:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/piratburger-med-kylling-200-6145362992323f98ae075c9614092f63.jpg 200w",images:[{path:"/recipe-data/_next/static/images/piratburger-med-kylling-200-6145362992323f98ae075c9614092f63.jpg",width:200,height:260}],src:"/recipe-data/_next/static/images/piratburger-med-kylling-200-6145362992323f98ae075c9614092f63.jpg",toString:function(){return"/recipe-data/_next/static/images/piratburger-med-kylling-200-6145362992323f98ae075c9614092f63.jpg"},width:200,height:260}},5442:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-256-6358589b7ca801472733a012806a3e36.jpg 256w,/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-512-ea9cd7a0369ad2413dbe8a4c851009ab.jpg 512w,/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-740-8d2e1b046059db4d01c51dabc462903d.jpg 740w",images:[{path:"/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-256-6358589b7ca801472733a012806a3e36.jpg",width:256,height:384},{path:"/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-512-ea9cd7a0369ad2413dbe8a4c851009ab.jpg",width:512,height:768},{path:"/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-740-8d2e1b046059db4d01c51dabc462903d.jpg",width:740,height:1110}],src:"/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-740-8d2e1b046059db4d01c51dabc462903d.jpg",toString:function(){return"/recipe-data/_next/static/images/pizza-med-spinat-og-r\xf8d-pesto-740-8d2e1b046059db4d01c51dabc462903d.jpg"},width:740,height:1110}},6934:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-256-a8890adc417f4a4033a5814ca080f4a4.jpg 256w,/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-512-2d1248d717f7373151909c9dec87a9e8.jpg 512w,/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-1024-0f32bfad91b49e5defb4b5b513f3a7d4.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-256-a8890adc417f4a4033a5814ca080f4a4.jpg",width:256,height:167},{path:"/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-512-2d1248d717f7373151909c9dec87a9e8.jpg",width:512,height:333},{path:"/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-1024-0f32bfad91b49e5defb4b5b513f3a7d4.jpg",width:1024,height:666}],src:"/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-1024-0f32bfad91b49e5defb4b5b513f3a7d4.jpg",toString:function(){return"/recipe-data/_next/static/images/salat-med-spr\xf8d-kylling-1024-0f32bfad91b49e5defb4b5b513f3a7d4.jpg"},width:1024,height:666}},6734:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/triple-chocolate-chip-cookies-256-d093a764c4424fdbd90cd63f2e7183e2.jpg 256w,/recipe-data/_next/static/images/triple-chocolate-chip-cookies-512-6e71fcd1ff2e8395cce0b5848a6322a8.jpg 512w,/recipe-data/_next/static/images/triple-chocolate-chip-cookies-1024-27ea9790683fea5e466ae3142c7baaa8.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/triple-chocolate-chip-cookies-256-d093a764c4424fdbd90cd63f2e7183e2.jpg",width:256,height:171},{path:"/recipe-data/_next/static/images/triple-chocolate-chip-cookies-512-6e71fcd1ff2e8395cce0b5848a6322a8.jpg",width:512,height:341},{path:"/recipe-data/_next/static/images/triple-chocolate-chip-cookies-1024-27ea9790683fea5e466ae3142c7baaa8.jpg",width:1024,height:683}],src:"/recipe-data/_next/static/images/triple-chocolate-chip-cookies-1024-27ea9790683fea5e466ae3142c7baaa8.jpg",toString:function(){return"/recipe-data/_next/static/images/triple-chocolate-chip-cookies-1024-27ea9790683fea5e466ae3142c7baaa8.jpg"},width:1024,height:683}},3308:function(e){e.exports={srcSet:"/recipe-data/_next/static/images/verdens-bedste-brownie-256-598d6ec4da55bb77292cb3187775fb0a.jpg 256w,/recipe-data/_next/static/images/verdens-bedste-brownie-512-65435931030ddf06b234be3cdc6731f5.jpg 512w,/recipe-data/_next/static/images/verdens-bedste-brownie-1024-5ec13445e584933c4ad79b04aa6fdea3.jpg 1024w",images:[{path:"/recipe-data/_next/static/images/verdens-bedste-brownie-256-598d6ec4da55bb77292cb3187775fb0a.jpg",width:256,height:171},{path:"/recipe-data/_next/static/images/verdens-bedste-brownie-512-65435931030ddf06b234be3cdc6731f5.jpg",width:512,height:341},{path:"/recipe-data/_next/static/images/verdens-bedste-brownie-1024-5ec13445e584933c4ad79b04aa6fdea3.jpg",width:1024,height:683}],src:"/recipe-data/_next/static/images/verdens-bedste-brownie-1024-5ec13445e584933c4ad79b04aa6fdea3.jpg",toString:function(){return"/recipe-data/_next/static/images/verdens-bedste-brownie-1024-5ec13445e584933c4ad79b04aa6fdea3.jpg"},width:1024,height:683}}},function(e){e.O(0,[774,888,179],(function(){return t=844,e(e.s=t);var t}));var t=e.O();_N_E=t}]);