webpackJsonp([2],{"+sNg":function(t,e,n){e.markdown=n("xZWZ"),e.parse=e.markdown.toHTML},HLI4:function(t,e,n){"use strict";var r=n("TcYe"),i=n("VU/8")(null,r.a,!1,null,null,null);i.options.__file="components/MyHeader.vue",e.a=i.exports},LC74:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},OMJi:function(t,e,n){(function(t,r){var i=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(o(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,s=r.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(n>=s)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),l=r[n];n<s;l=r[++n])d(l)||!k(l)?a+=" "+l:a+=" "+o(l);return a},e.deprecate=function(n,i){if(m(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var s=!1;return function(){if(!s){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),s=!0}return n.apply(this,arguments)}};var s,a={};function o(t,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),u(r,t,r.depth)}function l(t,e){var n=o.styles[e];return n?"["+o.colors[n][0]+"m"+t+"["+o.colors[n][1]+"m":t}function c(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&j(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return b(i)||(i=u(t,i,r)),i}var s=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(v(e))return t.stylize(""+e,"number");if(g(e))return t.stylize(""+e,"boolean");if(d(e))return t.stylize("null","null")}(t,n);if(s)return s;var a,o=Object.keys(n),l=(a={},o.forEach(function(t,e){a[t]=!0}),a);if(t.showHidden&&(o=Object.getOwnPropertyNames(n)),w(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return h(n);if(0===o.length){if(j(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(_(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(y(n))return t.stylize(Date.prototype.toString.call(n),"date");if(w(n))return h(n)}var k,M="",S=!1,x=["{","}"];(p(n)&&(S=!0,x=["[","]"]),j(n))&&(M=" [Function"+(n.name?": "+n.name:"")+"]");return _(n)&&(M=" "+RegExp.prototype.toString.call(n)),y(n)&&(M=" "+Date.prototype.toUTCString.call(n)),w(n)&&(M=" "+h(n)),0!==o.length||S&&0!=n.length?r<0?_(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),k=S?function(t,e,n,r,i){for(var s=[],a=0,o=e.length;a<o;++a)$(e,String(a))?s.push(f(t,e,n,r,String(a),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(f(t,e,n,r,i,!0))}),s}(t,n,r,l,o):o.map(function(e){return f(t,n,r,l,e,S)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(k,M,x)):x[0]+M+x[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,r,i,s){var a,o,l;if((l=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?o=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(o=t.stylize("[Setter]","special")),$(r,i)||(a="["+i+"]"),o||(t.seen.indexOf(l.value)<0?(o=d(n)?u(t,l.value,null):u(t,l.value,n-1)).indexOf("\n")>-1&&(o=s?o.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+o.split("\n").map(function(t){return"   "+t}).join("\n")):o=t.stylize("[Circular]","special")),m(a)){if(s&&i.match(/^\d+$/))return o;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+o}function p(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function d(t){return null===t}function v(t){return"number"==typeof t}function b(t){return"string"==typeof t}function m(t){return void 0===t}function _(t){return k(t)&&"[object RegExp]"===M(t)}function k(t){return"object"==typeof t&&null!==t}function y(t){return k(t)&&"[object Date]"===M(t)}function w(t){return k(t)&&("[object Error]"===M(t)||t instanceof Error)}function j(t){return"function"==typeof t}function M(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(m(s)&&(s=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(s)){var n=r.pid;a[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else a[t]=function(){};return a[t]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=g,e.isNull=d,e.isNullOrUndefined=function(t){return null==t},e.isNumber=v,e.isString=b,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=_,e.isObject=k,e.isDate=y,e.isError=w,e.isFunction=j,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n("fC4T");var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function $(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,n;console.log("%s - %s",(t=new Date,n=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":"),[t.getDate(),x[t.getMonth()],n].join(" ")),e.format.apply(e,arguments))},e.inherits=n("LC74"),e._extend=function(t,e){if(!e||!k(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,n("DuR2"),n("W2nU"))},TcYe:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{attrs:{id:"header"}},[e("a",{attrs:{id:"logo",href:"https://www.kitak.info/"}},[e("img",{attrs:{src:"https://avatars1.githubusercontent.com/u/228410?v=3&s=460",alt:"www.kitak.info"}})]),e("h1",[e("a",{attrs:{href:"https://www.kitak.info/"}},[this._v("kitak.info")])]),e("div",{attrs:{id:"follow-icons"}},[e("a",{attrs:{href:"http://facebook.com/kei.kita2501",rel:"me"}},[e("i",{staticClass:"fa fa-facebook-square fa-2x"})]),this._v(" \n        "),e("a",{attrs:{href:"http://twitter.com/kitak",rel:"me"}},[e("i",{staticClass:"fa fa-twitter-square fa-2x"})]),this._v(" \n        "),e("a",{attrs:{href:"http://github.com/kitak",rel:"me"}},[e("i",{staticClass:"fa fa-github-square fa-2x"})])]),e("h5",[e("a",{attrs:{href:"https://www.kitak.info/about"}},[this._v("About")])]),e("h5",[e("a",{attrs:{href:"https://www.kitak.info/resume"}},[this._v("Resume")])])])}]};e.a=i},TsMM:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{attrs:{id:"footer"}},[e("section",{attrs:{id:"footer-message"}},[this._v("© kitak.info. All rights reserved. "),e("a",{attrs:{href:"https://github.com/kathyqian/crisp-ghost-theme",target:"_blank"}},[this._v("Crisp")]),this._v(" style by "),e("a",{attrs:{href:"http://kathyqian.com",target:"_blank"}},[this._v("Kathy Qian")]),this._v(".")])])}]};e.a=i},Wte9:function(t,e,n){"use strict";var r=n("o/Et"),i=n("HLI4"),s=n("pVZ6"),a=n("jP3X"),o=n.n(a);e.a={data:function(){return{aboutMd:o.a}},components:{MyHeader:i.a,MdArticle:r.a,MyFooter:s.a}}},YnYt:function(t,e,n){"use strict";var r=n("+sNg");n.n(r);e.a={props:["sourceMd"],computed:{generatedHTML:function(){return r.markdown.toHTML(this.sourceMd)}}}},fC4T:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},hSk2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Wte9"),i=n("lZJo"),s=n("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="pages/about.vue",e.default=s.exports},jP3X:function(t,e){t.exports='# About\n\nMy name is **Keisuke KITA**, Software Engineer from Shibuya, Tokyo, Japan.\nMy main focus is front-end development with high-performance and clean code.\nAlso I\'m interested in middleware/backend development in Node.js and Go.\n\n## Software - self-developed products -\n\n- [ohajiki](https://github.com/kitak/ohajiki)\n  * A minimum dropbox clone\n\n## Software - contributions -\n\n- JDK\n  * Bug reportings\n    - [JDK-8160034 : The `this` value in the `with` is broken by the repetition of a function call](http://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8160034)\n\n- Vue.js\n  * Document translation\n\n    - https://github.com/vuejs/vuex/pull/240\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/156\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/165\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/169\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/182\n  * Bug reportings\n\n    - [2.0 Server-side rendering with v-text or v-html doesn\'t work well\'](https://github.com/vuejs/vue/issues/3078)\n\n- serverspec\n  * implementation some resources and matchers\n    - [Add be_listening.with("protocol") matcher for Port resource.](https://github.com/mizzy/serverspec/pull/200)\n    - [Add "be_monitored_by" matcher for Service resource](https://github.com/mizzy/serverspec/pull/187)\n    - [add .under(\'upstart\') to be_running](https://github.com/mizzy/serverspec/pull/186)\n    - [add socket type, matcher](https://github.com/mizzy/serverspec/pull/156)\n  * [Commit History](https://github.com/mizzy/serverspec/commits/master?author=kitak)\n\n## Presentations\n\n- Vue.js Tokyo v-meetup="#1"\n  * [ViewModelのダイエット Messengerパターン編](https://speakerdeck.com/kitak/viewmodelfalsedaietuto-messengerpatanbian)\n\n- Ruby Hiroba 2014\n  * [Railsのサービスで特別対応をしたときの話](https://speakerdeck.com/kitak/railsfalsesabisudete-bie-dui-ying-wositatokifalsehua)\n\n- Kanazawa.rb meetup #6\n  * [Sqaleにアプリをデプロイしたよー](http://www.slideshare.net/KeisukeKita/sqale)\n\n## Writing Career (in Japanese)\n\n- [gihyo.jp Vue.js入門 ―最速で作るシンプルなWebアプリケーション](http://gihyo.jp/dev/serial/01/vuejs/0002)\n  * 第2回　Vue.js基礎文法最速マスター\n\n## Others\n\n- GitHub\n  * [https://github.com/kitak](https://github.com/kitak)\n- Blog\n  * [http://kitak.hatenablog.jp/](http://kitak.hatenablog.jp/)\n- Speaker Deck\n  * [https://speakerdeck.com/kitak](https://speakerdeck.com/kitak)\n- SlideShare\n  * [http://www.slideshare.net/KeisukeKita](http://www.slideshare.net/KeisukeKita)\n- Twitter\n  * [https://twitter.com/kitak](https://twitter.com/kitak)\n- Facebook\n  * [https://www.facebook.com/kei.kita2501](https://www.facebook.com/kei.kita2501)\n'},k203:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("article",{staticClass:"page",domProps:{innerHTML:this._s(this.generatedHTML)}})};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},lZJo:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MyHeader"),e("main",{attrs:{id:"content"}},[e("MdArticle",{attrs:{"source-md":this.aboutMd}})],1),e("MyFooter")],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},"o/Et":function(t,e,n){"use strict";var r=n("YnYt"),i=n("k203"),s=n("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="components/MdArticle.vue",e.a=s.exports},pVZ6:function(t,e,n){"use strict";var r=n("TsMM"),i=n("VU/8")(null,r.a,!1,null,null,null);i.options.__file="components/MyFooter.vue",e.a=i.exports},xZWZ:function(t,e,n){!function(t){var e=t.Markdown=function(t){switch(typeof t){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=t;break;default:if(!(t in e.dialects))throw new Error("Unknown Markdown dialect '"+String(t)+"'");this.dialect=e.dialects[t]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function i(){var t=n("OMJi");return"Markdown.mk_block( "+t.inspect(this.toString())+", "+t.inspect(this.trailing)+", "+t.inspect(this.lineNumber)+" )"}t.parse=function(t,n){return new e(n).toTree(t)},t.toHTML=function(e,n,r){var i=t.toHTMLTree(e,n,r);return t.renderJsonML(i)},t.toHTMLTree=function(t,e,n){"string"==typeof t&&(t=this.parse(t,e));var r=f(t),i={};r&&r.references&&(i=r.references);var s=function t(e,n,r){var i;r=r||{};var s=e.slice(0);"function"==typeof r.preprocessTreeNode&&(s=r.preprocessTreeNode(s,n));var a=f(s);if(a){s[1]={};for(i in a)s[1][i]=a[i];a=s[1]}if("string"==typeof s)return s;switch(s[0]){case"header":s[0]="h"+s[1].level,delete s[1].level;break;case"bulletlist":s[0]="ul";break;case"numberlist":s[0]="ol";break;case"listitem":s[0]="li";break;case"para":s[0]="p";break;case"markdown":s[0]="html",a&&delete a.references;break;case"code_block":s[0]="pre",i=a?2:1;var o=["code"];o.push.apply(o,s.splice(i,s.length-i)),s[i]=o;break;case"inlinecode":s[0]="code";break;case"img":s[1].src=s[1].href,delete s[1].href;break;case"linebreak":s[0]="br";break;case"link":s[0]="a";break;case"link_ref":s[0]="a";var l=n[a.ref];if(!l)return a.original;delete a.ref,a.href=l.href,l.title&&(a.title=l.title),delete a.original;break;case"img_ref":s[0]="img";var l=n[a.ref];if(!l)return a.original;delete a.ref,a.src=l.href,l.title&&(a.title=l.title),delete a.original}i=1;if(a){for(var c in s[1]){i=2;break}1===i&&s.splice(i,1)}for(;i<s.length;++i)s[i]=t(s[i],n,r);return s}(t,i,n);return function t(e){var n=f(e)?2:1;for(;n<e.length;)"string"==typeof e[n]?n+1<e.length&&"string"==typeof e[n+1]?e[n]+=e.splice(n+1,1)[0]:++n:(t(e[n]),++n)}(s),s};var s=e.mk_block=function(t,e,n){1==arguments.length&&(e="\n\n");var s=new String(t);return s.trailing=e,s.inspect=i,s.toSource=r,void 0!=n&&(s.lineNumber=n),s};function o(t){for(var e=0,n=-1;-1!==(n=t.indexOf("\n",n+1));)e++;return e}function l(t,e){var n=t+"_state",r="strong"==t?"em_state":"strong_state";function i(t){this.len_after=t,this.name="close_"+e}return function(s,a){if(this[n][0]==e)return this[n].shift(),[s.length,new i(s.length-e.length)];var o=this[r].slice(),l=this[n].slice();this[n].unshift(e);var c=this.processInline(s.substr(e.length)),u=c[c.length-1];this[n].shift();return u instanceof i?(c.pop(),[s.length-u.len_after,[t].concat(c)]):(this[r]=o,this[n]=l,[e.length,e])}}e.prototype.split_blocks=function(t,e){t=t.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],a=1;for(null!=(n=/^(\s*\n)/.exec(t))&&(a+=o(n[0]),r.lastIndex=n[0].length);null!==(n=r.exec(t));)"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),i.push(s(n[1],n[2],a)),a+=o(n[0]);return i},e.prototype.processBlock=function(t,e){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,t,e);for(var i=0;i<r.length;i++){var s=n[r[i]].call(this,t,e);if(s)return(!u(s)||s.length>0&&!u(s[0]))&&this.debug(r[i],"didn't return a proper array"),s}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,e){var n=t instanceof Array?t:this.split_blocks(t),r=this.tree;try{for(this.tree=e||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{e&&(this.tree=r)}},e.prototype.debug=function(){var t=Array.prototype.slice.call(arguments);t.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,t),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,t)},e.prototype.loop_re_over_block=function(t,e,n){for(var r,i=e.valueOf();i.length&&null!=(r=t.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,e){var n=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<t.length&&e.unshift(s(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[r]}},setextHeader:function(t,e){var n=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r=["header",{level:"="===n[2]?1:2},n[1]];return n[0].length<t.length&&e.unshift(s(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[r]}},code:function(t,e){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(t.match(r)){t:for(;;){var i=this.loop_re_over_block(r,t.valueOf(),function(t){n.push(t[1])});if(i.length){e.unshift(s(i,t.trailing));break t}if(!e.length)break t;if(!e[0].match(r))break t;n.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=e.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(t,e){var n=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&e.unshift(s(n[3])),r}},lists:function(){var t="[*+-]|\\d+\\.",e=/[*+-]/,n=new RegExp("^( {0,3})("+t+")[ \t]+"),r="(?: {0,3}\\t| {4})";function i(t,e,n,r){if(e)t.push(["para"].concat(n));else{var i=t[t.length-1]instanceof Array&&"para"==t[t.length-1][0]?t[t.length-1]:t;r&&t.length>1&&n.unshift(r);for(var s=0;s<n.length;s++){var a=n[s];"string"==typeof a&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=a:i.push(a)}}}function a(t,e){for(var n=new RegExp("^("+r+"{"+t+"}.*?\\n?)*$"),i=new RegExp("^"+r+"{"+t+"}","gm"),a=[];e.length>0&&n.exec(e[0]);){var o=e.shift(),l=o.replace(i,"");a.push(s(l,o.trailing,o.lineNumber))}return a}function o(t,e,n){var r=t.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(e+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var s=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),s)}}return function(s,l){var u=s.match(n);if(u){for(var h,f,p,g=[],d=E(u),v=!1,b=[g[0].list];;){for(var m=s.split(/(?=\n)/),_="",k=0;k<m.length;k++){var y="",w=m[k].replace(/^\n/,function(t){return y=t,""}),j=(p=g.length,new RegExp("(?:^("+r+"{0,"+p+"} {0,3})("+t+")\\s+)|(^"+r+"{0,"+(p-1)+"}[ ]{0,4})"));if(void 0!==(u=w.match(j))[1]){_.length&&(i(h,v,this.processInline(_),y),v=!1,_=""),u[1]=u[1].replace(/ {0,3}\t/g,"    ");var M=Math.floor(u[1].length/4)+1;if(M>g.length)d=E(u),h.push(d),h=d[1]=["listitem"];else{var S=!1;for(f=0;f<g.length;f++)if(g[f].indent==u[1]){d=g[f].list,g.splice(f+1,g.length-(f+1)),S=!0;break}S||(++M<=g.length?(g.splice(M,g.length-M),d=g[M-1].list):(d=E(u),h.push(d))),h=["listitem"],d.push(h)}y=""}w.length>u[0].length&&(_+=y+w.substr(u[0].length))}_.length&&(i(h,v,this.processInline(_),y),v=!1,_="");var x=a(g.length,l);x.length>0&&(c(g,o,this),h.push.apply(h,this.toTree(x,[])));var $=l[0]&&l[0].valueOf()||"";if(!$.match(n)&&!$.match(/^ /))break;s=l.shift();var O=this.dialect.block.horizRule(s,l);if(O){b.push.apply(b,O);break}c(g,o,this),v=!0}return b}function E(t){var n=e.exec(t[2])?["bulletlist"]:["numberlist"];return g.push({list:n,indent:t[1]}),n}}}(),blockquote:function(t,e){if(t.match(/^>/m)){var n=[];if(">"!=t[0]){for(var r=t.split(/\n/),i=[],a=t.lineNumber;r.length&&">"!=r[0][0];)i.push(r.shift()),a++;var o=s(i.join("\n"),"\n",t.lineNumber);n.push.apply(n,this.processBlock(o,[])),t=s(r.join("\n"),t.trailing,a)}for(;e.length&&">"==e[0][0];){var l=e.shift();t=s(t+t.trailing+l,l.trailing,t.lineNumber)}var c=t.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),p=f(u);return p&&p.references&&(delete p.references,h(p)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(t,e){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(t.match(n)){f(this.tree)||this.tree.splice(1,0,{});var r=f(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,t,function(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1));var e=r.references[t[1].toLowerCase()]={href:t[2]};void 0!==t[4]?e.title=t[4]:void 0!==t[5]&&(e.title=t[5])});return i.length&&e.unshift(s(i,t.trailing)),[]}},para:function(t,e){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,e,n){var r,i;return e=e||this.dialect.inline.__patterns__,(r=new RegExp("([\\s\\S]*?)("+(e.source||e)+")").exec(t))?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,t.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]):[t.length,t]},__call__:function(t,e){var n,r=[];function i(t){"string"==typeof t&&"string"==typeof r[r.length-1]?r[r.length-1]+=t:r.push(t)}for(;t.length>0;)n=this.dialect.inline.__oneElement__.call(this,t,e,r),t=t.substr(n.shift()),c(n,i);return r},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var e=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1)),e[2]=this.dialect.inline.__call__.call(this,e[2],/\\/)[0];var n={alt:e[1],href:e[2]||""};return void 0!==e[4]&&(n.title=e[4]),[e[0].length,["img",n]]}return(e=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[e[0].length,["img_ref",{alt:e[1],ref:e[2].toLowerCase(),original:e[0]}]]:[2,"!["]},"[":function(t){var n=String(t),r=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!r)return[1,"["];var i,s,a=1+r[0],o=r[1],l=(t=t.substr(a)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(l){var c=l[1];if(a+=l[0].length,c&&"<"==c[0]&&">"==c[c.length-1]&&(c=c.substring(1,c.length-1)),!l[3])for(var u=1,h=0;h<c.length;h++)switch(c[h]){case"(":u++;break;case")":0==--u&&(a-=c.length-h,c=c.substring(0,h))}return s={href:(c=this.dialect.inline.__call__.call(this,c,/\\/)[0])||""},void 0!==l[3]&&(s.title=l[3]),i=["link",s].concat(o),[a,i]}return(l=t.match(/^\s*\[(.*?)\]/))?(a+=l[0].length,i=["link_ref",s={ref:(l[1]||String(o)).toLowerCase(),original:n.substr(0,a)}].concat(o),[a,i]):1==o.length&&"string"==typeof o[0]?(i=["link_ref",s={ref:o[0].toLowerCase(),original:n.substr(0,a)},o[0]],[a,i]):[1,"["]},"<":function(t){var e;return null!=(e=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?e[3]?[e[0].length,["link",{href:"mailto:"+e[3]},e[3]]]:"mailto"==e[2]?[e[0].length,["link",{href:e[1]},e[1].substr("mailto:".length)]]:[e[0].length,["link",{href:e[1]},e[1]]]:[1,"<"]},"`":function(t){var e=t.match(/(`+)(([\s\S]*?)\1)/);return e&&e[2]?[e[1].length+e[2].length,["inlinecode",e[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}},e.dialects.Gruber.inline["**"]=l("strong","**"),e.dialects.Gruber.inline.__=l("strong","__"),e.dialects.Gruber.inline["*"]=l("em","*"),e.dialects.Gruber.inline._=l("em","_"),e.buildBlockOrder=function(t){var e=[];for(var n in t)"__order__"!=n&&"__call__"!=n&&e.push(n);t.__order__=e},e.buildInlinePatterns=function(t){var e=[];for(var n in t)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");e.push(1==n.length?r:"(?:"+r+")")}e=e.join("|"),t.__patterns__=e;var i=t.__call__;t.__call__=function(t,n){return void 0!=n?i.call(this,t,n):i.call(this,t,e)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(t,e){for(var n=0,r=[];;){if(t.charAt(n)==e)return[++n,r];if(n>=t.length)return null;var i=this.dialect.inline.__oneElement__.call(this,t.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},e.subclassDialect=function(t){function e(){}function n(){}return e.prototype=t.block,n.prototype=t.inline,{block:new e,inline:new n}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var e=function(t){var e=t.split(""),n=[""],r=!1;for(;e.length;){var i=e.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=e.shift();default:n[n.length-1]+=i}}return n}(t),n={},r=0;r<e.length;++r)if(/^#/.test(e[r]))n.id=e[r].substring(1);else if(/^\./.test(e[r]))n.class?n.class=n.class+e[r].replace(/./," "):n.class=e[r].substring(1);else if(/\=/.test(e[r])){var i=e[r].split(/\=/);n[i[0]]=i[1]}return n},e.dialects.Maruku.block.document_meta=function(t,e){if(!(t.lineNumber>1)&&t.match(/^(?:\w+:.*\n)*\w+:.*$/)){f(this.tree)||this.tree.splice(1,0,{});var n=t.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),s=r[2];this.tree[1][i]=s}return[]}},e.dialects.Maruku.block.block_meta=function(t,e){var n=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var s=this.tree[this.tree.length-1];if(r=f(s),"string"==typeof s)return;r||(r={},s.splice(1,0,r));for(a in i)r[a]=i[a];return[]}var o=t.replace(/\n.*$/,""),l=this.processBlock(o,[]);(r=f(l[0]))||(r={},l[0].splice(1,0,r));for(a in i)r[a]=i[a];return l}},e.dialects.Maruku.block.definition_list=function(t,e){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(o=t.match(r)){for(var s=[t];e.length&&r.exec(e[0]);)s.push(e.shift());for(var a=0;a<s.length;++a){var o,l=(o=s[a].match(r))[1].replace(/\n$/,"").split(/\n/),c=o[2].split(/\n:\s+/);for(n=0;n<l.length;++n)i.push(["dt",l[n]]);for(n=0;n<c.length;++n)i.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[i]}},e.dialects.Maruku.block.table=function(t,e){var n,r,i=function(t,e){(e=e||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(e="\\"+e);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+e+"])*)"+e+"(.*)");n=t.match(i);)r.push(n[1]),t=n[2];return r.push(t),r};if(r=t.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=t.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var s=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var a=[];for(c(r[2],function(t){t.match(/^\s*-+:\s*$/)?a.push({align:"right"}):t.match(/^\s*:-+\s*$/)?a.push({align:"left"}):t.match(/^\s*:-+:\s*$/)?a.push({align:"center"}):a.push({})}),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)s[1][1].push(["th",a[n]||{}].concat(this.processInline(r[1][n].trim())));return c(r[3].replace(/\|\s*$/gm,"").split("\n"),function(t){var e=["tr"];for(t=i(t,"|"),n=0;n<t.length;n++)e.push(["td",a[n]||{}].concat(this.processInline(t[n].trim())));s[2].push(e)},this),[s]},e.dialects.Maruku.inline["{:"]=function(t,e,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var s=this.dialect.processMetaHash(i[1]),a=f(r);a||(a={},r.splice(1,0,a));for(var o in s)a[o]=s[o];return[i[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var c,u=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)};c=Array.prototype.forEach?function(t,e,n){return t.forEach(e,n)}:function(t,e,n){for(var r=0;r<t.length;r++)e.call(n||t,t[r],r,t)};var h=function(t){for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0};function f(t){return u(t)&&t.length>1&&"object"==typeof t[1]&&!u(t[1])?t[1]:void 0}function g(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(t){if("string"==typeof t)return g(t);var e=t.shift(),n={},r=[];for(!t.length||"object"!=typeof t[0]||t[0]instanceof Array||(n=t.shift());t.length;)r.push(d(t.shift()));var i="";for(var s in n)i+=" "+s+'="'+g(n[s])+'"';return"img"==e||"br"==e||"hr"==e?"<"+e+i+"/>":"<"+e+i+">"+r.join("")+"</"+e+">"}t.renderJsonML=function(t,e){(e=e||{}).root=e.root||!1;var n=[];if(e.root)n.push(d(t));else for(t.shift(),!t.length||"object"!=typeof t[0]||t[0]instanceof Array||t.shift();t.length;)n.push(d(t.shift()));return n.join("\n\n")}}(e)}});