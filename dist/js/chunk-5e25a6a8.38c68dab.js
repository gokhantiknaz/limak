(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e25a6a8"],{3572:function(e,n,t){},"4a13":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"p-grid"},[t("div",{staticClass:"p-col-12"},[t("div",{staticClass:"card docs"},[t("h1",[e._v("Current Version")]),t("p",[e._v("Vue 2.6.0 and PrimeVue 1.0.0")]),t("h1",[e._v("Getting Started")]),e._m(0),t("pre",[e._v("npm install\n")]),e._v("\n\n                or\n\n"),t("pre",[e._v("yarn\n")]),e._m(1),t("pre",[e._v("npm run serve\n")]),t("h1",[e._v("Vue CLI Scripts")]),t("p",[e._v("Following commands are derived from create-app-app.")]),t("pre",[e._v('"npm run serve": Starts the development server\n"npm run build": Builds the application for deployment.\n"npm run lint": Executes the lint checks.\n"npm run test:unit": Runs the tests.\n')]),t("h1",[e._v("Structure")]),e._m(2),t("h1",[e._v("Templates")]),e._m(3),t("CodeHighlight",[[e._v('\n<template>\n    <div :class="containerClass" @click="onWrapperClick">\n        <AppTopBar @menu-toggle="onMenuToggle" />\n\n        <div :class="sidebarClass" @click="onSidebarClick">\n            <div class="layout-logo">\n                <img alt="Logo" :src="logo" />\n            </div>\n\n            <AppProfile />\n            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />\n        </div>\n\n        <div class="layout-main">\n            <router-view />\n        </div>\n\n        <AppFooter />\n    </div>\n</template>\n')]],2),t("h1",[e._v("Menu")]),e._m(4),t("CodeHighlight",{attrs:{lang:"js"}},[e._v("\ndata() {\n    return {\n        menu : [\n            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},\n            {\n                label: 'Menu Modes', icon: 'pi pi-fw pi-cog',\n                items: [\n                    {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => this.layoutMode = 'static' },\n                    {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => this.layoutMode = 'overlay' }\n                ]\n            },\n            {\n                label: 'Menu Colors', icon: 'pi pi-fw pi-align-left', \n                items: [\n                    {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => this.layoutColorMode = 'dark' },\n                    {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => this.layoutColorMode = 'light' }\n                ]\n            },\n            {\n                label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',\n                items: [\n                    {label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},\n                    {label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},\n                    {label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},\n                    {label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},\n                    {label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},\n                    {label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},\n                    {label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},\n                    {label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},\n                    {label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}\n                ]\n            },\n            {\n                label: 'Template Pages', icon: 'pi pi-fw pi-file',\n                items: [\n                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}\n                ]\n            },\n            {\n                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',\n                items: [\n                    {\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            },\n                        ]\n                    },\n                    {\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = \"#/documentation\"}},\n            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = \"https://github.com/primefaces/sigma\"}}\n        ]\n    }\n}\n")]),t("h1",[e._v("Dependencies")]),t("p",[e._v("Dependencies of Sigma are listed below and needs to be added to package.json. Sigma has no direct dependency, even PrimeVue components are an optional dependency..")]),t("CodeHighlight",{attrs:{lang:"js"}},[e._v('\n{\n    "primevue": "^1.0.0-rc.6",         //optional: PrimeVue components\n    "primeicons": "2.0.0",             //optional: Icons\n    "primeflex": "1.0.0",              //optional: Grid system\n}\n')]),t("h1",[e._v("Nova Theme")]),t("p",[e._v("Sigma uses the free Nova-Light which is a free theme distributed within PrimeVue, however it can be used with any PrimeVue theme as well.")]),t("h1",[e._v("SASS Variables")]),e._m(5),t("h3",[e._v("src/assets/_vaiables.scss")]),t("CodeHighlight",{attrs:{lang:"css"}},[e._v("\n/* General */\n$fontSize:14px;\n$bodyBgColor:#edf0f5;\n$textColor:#333333;\n$textSecondaryColor:#707070;\n$borderRadius:3px;\n$dividerColor:#e3e3e3;\n$transitionDuration:.2s;\n$maskBgColor:#424242;\n$focusShadowColor:#8dcdff;\n\n\n/* Menu */\n$menuitemBadgeBgColor:#007be5;\n$menuitemBadgeColor:#ffffff;\n$submenuFontSize:13px;\n\n/* Menu Dark*/\n$menuDarkBgColorFirst:#4d505b;\n$menuDarkBgColorLast:#3b3e47;\n$menuitemDarkColor:#ffffff;\n$menuitemDarkHoverColor:#0388e5;\n$menuitemDarkActiveColor:#0388e5;\n$menuitemDarkActiveBgColor:#2e3035;\n$menuitemDarkBorderColor:rgba(52, 56, 65, 0.6);\n\n/* Menu Light*/\n$menuBgColorFirst:#f3f4f9;\n$menuBgColorLast:#d7dbe8;\n$menuitemColor:#232428;\n$menuitemHoverColor:#0388e5;\n$menuitemActiveColor:#0388e5;\n$menuitemActiveBgColor:#ffffff;\n$menuitemBorderColor:rgba(207, 211, 224, 0.6);\n\n/* Topbar */\n$topbarLeftBgColor:#0388E5;\n$topbarRightBgColor:#07BDF4;\n$topbarItemBadgeBgColor:#ef6262;\n$topbarItemBadgeColor:#ffffff;\n$topbarItemColor:#ffffff;\n$topbarItemHoverColor:#77c7ff;\n$topbarSearchInputBorderBottomColor:#ffffff;\n$topbarSearchInputColor:#ffffff;\n\n/* Footer */\n$footerBgColor:#ffffff;\n")]),t("h1",[e._v("Menu Modes")]),e._m(6),e._m(7),t("p",[e._v("For example to create an overlay menu, the div element should be in following form;")]),t("CodeHighlight",[e._v('\n<div class="layout-wrapper layout-static">\n')]),t("p",[e._v("It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\n                    application has an example implementation of such use case with a computed property. Refer to App.vue for an example.")]),t("h1",[e._v("Menu Color Scheme")]),e._m(8),t("b",[e._v("Dark Menu")]),t("CodeHighlight",[e._v('\n<div class="layout-sidebar layout-sidebar-dark">\n')]),t("b",[e._v("Light Menu")]),t("CodeHighlight",[e._v('\n<div class="layout-sidebar layout-sidebar-light">\n')]),t("h1",[e._v("Grid CSS")]),e._m(9),t("h1",[e._v("Customizing Styles")]),e._m(10)],1)])])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Sigma is an application template for Vue based on the "),t("a",{attrs:{href:"https://cli.vuejs.org/"}},[e._v("Vue CLI")]),e._v(" that provides out-of-the-box standard\n                tooling for Vue projects. To get started, clone the "),t("a",{attrs:{href:"https://github.com/primefaces/sigma-vue"}},[e._v("repository")]),e._v(" from GitHub and install the dependencies with npm or yarn.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Next step is running the application using the serve script and navigate to "),t("b",[e._v("http://localhost:8080/")]),e._v(" to view the application.\n                    That is it, you may now start with the development of your application using the Sigma template.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Sigma consists of 2 main parts; the application layout and the resources. "),t("i",[e._v("App.vue")]),e._v(" inside src folder is the main component containing the template for the base layout\n                    whereas required resources such as SASS structure for the layout are placed inside the "),t("b",[e._v("src/assets/layout")]),e._v(" folder.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Main layout is the template of the "),t("i",[e._v("App.vue")]),e._v(", it is divided into a couple of child components such as topbar, profile, menu and footer. Here is template of the\n                    "),t("i",[e._v("App.vue")]),e._v(" component that implements the logic such as menu state, layout modes and so on.\n                ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Menu is a separate component defined in "),t("i",[e._v("AppMenu.vue")]),e._v(" file based on PrimeNG MenuModel API. In order to define the menuitems,\n                    navigate to data section of "),t("i",[e._v("App.vue")]),e._v(" file and define your own model as a nested structure using the menu property. \n                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("In case you'd like to customize the layout variables, open "),t("i",[e._v("_variables.scss")]),e._v(" file under src/layout folder. Saving the changes\n                    will be reflected instantly at your browser.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Menu has 2 modes, "),t("i",[e._v("static")]),e._v(" and "),t("i",[e._v("overlay")]),e._v(". Main layout container element in App.vue is used to define which mode to use by adding specific classes. List\n                    below indicates the style classes for each mode.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v('Static: "layout-wrapper layout-static"')]),t("li",[e._v('Overlay: "layout-wrapper layout-overlay"')])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v('There are two alternatives as the menu colors schemes; "light" and "dark". A color scheme is applied using the '),t("i",[e._v("layout-sidebar-light")]),e._v(" or "),t("i",[e._v("layout-sidebar-dark")]),e._v("\n                to the sidebar element.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Sigma uses PrimeFlex CSS Grid throughout the samples. Although any grid library can be used, we recommend using PrimeFlex as your layout framework as it is well tested and supported by PrimeVue. PrimeFlex is\n                    available at "),t("a",{attrs:{href:"https://www.npmjs.com/package/primeflex"}},[e._v("NPM")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("It is suggested to write your customizations in "),t("i",[e._v("_overrides.scss")]),e._v(" file instead of adding them to the\n                    scss files under sass folder to avoid maintenance issues after an update.")])}],r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{ref:"code",class:e.languageClass},[t("code",[e._t("default"),e._v("\n")],2)])},o=[],s=t("c197"),l=t.n(s),u={props:{lang:{type:String,default:"markup"}},computed:{languageClass:function(){return"language-"+this.lang}},mounted:function(){l.a.highlightElement(this.$el.children[0])}},c=u,p=t("2877"),d=Object(p["a"])(c,r,o,!1,null,null,null),m=d.exports,g={components:{CodeHighlight:m}},f=g,h=(t("c230"),Object(p["a"])(f,a,i,!1,null,"c178962a",null));n["default"]=h.exports},c197:function(e,n,t){(function(n){var t="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++t}),e["__id"]},clone:function e(n,t){var i,r,o=a.util.type(n);switch(t=t||{},o){case"Object":if(r=a.util.objId(n),t[r])return t[r];for(var s in i={},t[r]=i,n)n.hasOwnProperty(s)&&(i[s]=e(n[s],t));return i;case"Array":return r=a.util.objId(n),t[r]?t[r]:(i=[],t[r]=i,n.forEach((function(n,a){i[a]=e(n,t)})),i);default:return n}},getLanguage:function(e){while(e&&!n.test(e.className))e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var i in n)t[i]=n[i];return t},insertBefore:function(e,n,t,i){i=i||a.languages;var r=i[e],o={};for(var s in r)if(r.hasOwnProperty(s)){if(s==n)for(var l in t)t.hasOwnProperty(l)&&(o[l]=t[l]);t.hasOwnProperty(s)||(o[s]=r[s])}var u=i[e];return i[e]=o,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=o)})),o},DFS:function e(n,t,i,r){r=r||{};var o=a.util.objId;for(var s in n)if(n.hasOwnProperty(s)){t.call(n,s,n[s],i||s);var l=n[s],u=a.util.type(l);"Object"!==u||r[o(l)]?"Array"!==u||r[o(l)]||(r[o(l)]=!0,e(l,t,s,r)):(r[o(l)]=!0,e(l,t,null,r))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var i={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),a.hooks.run("before-all-elements-highlight",i);for(var r,o=0;r=i.elements[o++];)a.highlightElement(r,!0===n,i.callback)},highlightElement:function(t,i,r){var o=a.util.getLanguage(t),s=a.languages[o];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+o;var l=t.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(n,"").replace(/\s+/g," ")+" language-"+o);var u=t.textContent,c={element:t,language:o,grammar:s,code:u};function p(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),r&&r.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(r&&r.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(i&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){p(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else p(a.highlight(c.code,c.grammar,c.language));else p(a.util.encode(c.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}var i=new o;return s(i,i.head,e),r(e,i,n,i.head,0),u(i)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var i,r=0;i=t[r++];)i(n)}},Token:i};function i(e,n,t,a,i){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length,this.greedy=!!i}function r(e,n,t,o,u,c,p){for(var d in t)if(t.hasOwnProperty(d)&&t[d]){var m=t[d];m=Array.isArray(m)?m:[m];for(var g=0;g<m.length;++g){if(p&&p==d+","+g)return;var f=m[g],h=f.inside,v=!!f.lookbehind,b=!!f.greedy,y=0,w=f.alias;if(b&&!f.pattern.global){var _=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,_+"g")}f=f.pattern||f;for(var k=o.next,F=u;k!==n.tail;F+=k.value.length,k=k.next){var x=k.value;if(n.length>e.length)return;if(!(x instanceof i)){var S=1;if(b&&k!=n.tail.prev){f.lastIndex=F;var A=f.exec(e);if(!A)break;var $=A.index+(v&&A[1]?A[1].length:0),C=A.index+A[0].length,M=F;M+=k.value.length;while($>=M)k=k.next,M+=k.value.length;if(M-=k.value.length,F=M,k.value instanceof i)continue;for(var E=k;E!==n.tail&&(M<C||"string"===typeof E.value&&!E.prev.value.greedy);E=E.next)S++,M+=E.value.length;S--,x=e.slice(F,M),A.index-=F}else{f.lastIndex=0;A=f.exec(x)}if(A){v&&(y=A[1]?A[1].length:0);$=A.index+y,A=A[0].slice(y),C=$+A.length;var P=x.slice(0,$),j=x.slice(C),B=k.prev;P&&(B=s(n,B,P),F+=P.length),l(n,B,S);var D=new i(d,h?a.tokenize(A,h):A,w,A,b);if(k=s(n,B,D),j&&s(n,k,j),S>1&&r(e,n,t,k.prev,F,!0,d+","+g),c)break}else if(c)break}}}}}function o(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function s(e,n,t){var a=n.next,i={value:t,prev:n,next:a};return n.next=i,a.prev=i,e.length++,i}function l(e,n,t){for(var a=n.next,i=0;i<t&&a!==e.tail;i++)a=a.next;n.next=a,a.prev=n,e.length-=i}function u(e){var n=[],t=e.head.next;while(t!==e.tail)n.push(t.value),t=t.next;return n}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var i="";return n.forEach((function(n){i+=e(n,t)})),i}var r={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},o=n.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(r.classes,o):r.classes.push(o)),a.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+s+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),i=t.language,r=t.code,o=t.immediateClose;e.postMessage(a.highlight(r,a.languages[i],i)),o&&e.close()}),!1),a):a;var c=a.util.currentScript();function p(){a.manual||a.highlightAll()}if(c&&(a.filename=c.src,c.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var d=document.readyState;"loading"===d||"interactive"===d&&c&&c.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}(t);e.exports&&(e.exports=a),"undefined"!==typeof n&&(n.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup["tag"].inside["attr-value"].inside["entity"]=a.languages.markup["entity"],a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,n){var t={};t["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[n]},t["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};i["language-"+n]={pattern:/[\s\S]+/,inside:a.languages[n]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",r)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+n.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var t,i=e.getAttribute("data-src"),r=e,o=/\blang(?:uage)?-([\w-]+)\b/i;while(r&&!o.test(r.className))r=r.parentNode;if(r&&(t=(e.className.match(o)||[,""])[1]),!t){var s=(i.match(/\.(\w+)$/)||[,""])[1];t=n[s]||s}var l=document.createElement("code");l.className="language-"+t,e.textContent="",l.textContent="Loading…",e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",i,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,a.highlightElement(l),e.setAttribute("data-src-loaded","")):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,t("c8ba"))},c230:function(e,n,t){"use strict";var a=t("3572"),i=t.n(a);i.a}}]);
//# sourceMappingURL=chunk-5e25a6a8.38c68dab.js.map