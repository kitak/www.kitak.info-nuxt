webpackJsonp([0,2],{"+Irh":function(e,t,n){"use strict";var r=n("hSk2");t.a=r.default},"+sNg":function(e,t,n){t.markdown=n("xZWZ"),t.parse=t.markdown.toHTML},"/TYz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("+Irh"),i=n("VU/8")(r.a,null,!1,null,null,null);i.options.__file="pages/index.vue",t.default=i.exports},HLI4:function(e,t,n){"use strict";var r=n("TcYe"),i=n("VU/8")(null,r.a,!1,null,null,null);i.options.__file="components/MyHeader.vue",t.a=i.exports},LC74:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},OMJi:function(e,t,n){(function(e,r){var i=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(o(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,s=r.length,a=String(e).replace(i,function(e){if("%%"===e)return"%";if(n>=s)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),l=r[n];n<s;l=r[++n])d(l)||!k(l)?a+=" "+l:a+=" "+o(l);return a},t.deprecate=function(n,i){if(m(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var s=!1;return function(){if(!s){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),s=!0}return n.apply(this,arguments)}};var s,a={};function o(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),u(r,e,r.depth)}function l(e,t){var n=o.styles[t];return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function c(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&j(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return b(i)||(i=u(e,i,r)),i}var s=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(v(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(s)return s;var a,o=Object.keys(n),l=(a={},o.forEach(function(e,t){a[e]=!0}),a);if(e.showHidden&&(o=Object.getOwnPropertyNames(n)),w(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return h(n);if(0===o.length){if(j(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(_(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(y(n))return e.stylize(Date.prototype.toString.call(n),"date");if(w(n))return h(n)}var k,M="",S=!1,x=["{","}"];(p(n)&&(S=!0,x=["[","]"]),j(n))&&(M=" [Function"+(n.name?": "+n.name:"")+"]");return _(n)&&(M=" "+RegExp.prototype.toString.call(n)),y(n)&&(M=" "+Date.prototype.toUTCString.call(n)),w(n)&&(M=" "+h(n)),0!==o.length||S&&0!=n.length?r<0?_(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),k=S?function(e,t,n,r,i){for(var s=[],a=0,o=t.length;a<o;++a)O(t,String(a))?s.push(f(e,t,n,r,String(a),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(f(e,t,n,r,i,!0))}),s}(e,n,r,l,o):o.map(function(t){return f(e,n,r,l,t,S)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(k,M,x)):x[0]+M+x[1]}function h(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i,s){var a,o,l;if((l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?o=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(o=e.stylize("[Setter]","special")),O(r,i)||(a="["+i+"]"),o||(e.seen.indexOf(l.value)<0?(o=d(n)?u(e,l.value,null):u(e,l.value,n-1)).indexOf("\n")>-1&&(o=s?o.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+o.split("\n").map(function(e){return"   "+e}).join("\n")):o=e.stylize("[Circular]","special")),m(a)){if(s&&i.match(/^\d+$/))return o;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+o}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function d(e){return null===e}function v(e){return"number"==typeof e}function b(e){return"string"==typeof e}function m(e){return void 0===e}function _(e){return k(e)&&"[object RegExp]"===M(e)}function k(e){return"object"==typeof e&&null!==e}function y(e){return k(e)&&"[object Date]"===M(e)}function w(e){return k(e)&&("[object Error]"===M(e)||e instanceof Error)}function j(e){return"function"==typeof e}function M(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(m(s)&&(s=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!a[e])if(new RegExp("\\b"+e+"\\b","i").test(s)){var n=r.pid;a[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else a[e]=function(){};return a[e]},t.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=g,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=v,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=_,t.isObject=k,t.isDate=y,t.isError=w,t.isFunction=j,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n("fC4T");var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":"),[e.getDate(),x[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n("LC74"),t._extend=function(e,t){if(!t||!k(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(t,n("DuR2"),n("W2nU"))},TcYe:function(e,t,n){"use strict";var r=function(){var e=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{attrs:{id:"header"}},[t("a",{attrs:{id:"logo",href:"https://www.kitak.info/"}},[t("img",{attrs:{src:"https://avatars1.githubusercontent.com/u/228410?v=3&s=460",alt:"www.kitak.info"}})]),t("h1",[t("a",{attrs:{href:"https://www.kitak.info/"}},[this._v("kitak.info")])]),t("div",{attrs:{id:"follow-icons"}},[t("a",{attrs:{href:"http://facebook.com/kei.kita2501",rel:"me"}},[t("i",{staticClass:"fa fa-facebook-square fa-2x"})]),this._v(" \n        "),t("a",{attrs:{href:"http://twitter.com/kitak",rel:"me"}},[t("i",{staticClass:"fa fa-twitter-square fa-2x"})]),this._v(" \n        "),t("a",{attrs:{href:"http://github.com/kitak",rel:"me"}},[t("i",{staticClass:"fa fa-github-square fa-2x"})])]),t("h5",[t("a",{attrs:{href:"https://www.kitak.info/about"}},[this._v("About")])]),t("h5",[t("a",{attrs:{href:"https://www.kitak.info/resume"}},[this._v("Resume")])])])}]};t.a=i},TsMM:function(e,t,n){"use strict";var r=function(){var e=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{attrs:{id:"footer"}},[t("section",{attrs:{id:"footer-message"}},[this._v("© kitak.info. All rights reserved. "),t("a",{attrs:{href:"https://github.com/kathyqian/crisp-ghost-theme",target:"_blank"}},[this._v("Crisp")]),this._v(" style by "),t("a",{attrs:{href:"http://kathyqian.com",target:"_blank"}},[this._v("Kathy Qian")]),this._v(".")])])}]};t.a=i},Wte9:function(e,t,n){"use strict";var r=n("o/Et"),i=n("HLI4"),s=n("pVZ6"),a=n("jP3X"),o=n.n(a);t.a={data:function(){return{aboutMd:o.a}},components:{MyHeader:i.a,MdArticle:r.a,MyFooter:s.a}}},YnYt:function(e,t,n){"use strict";var r=n("+sNg");n.n(r);t.a={props:["sourceMd"],computed:{generatedHTML:function(){return r.markdown.toHTML(this.sourceMd)}}}},fC4T:function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},hSk2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Wte9"),i=n("lZJo"),s=n("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="pages/about.vue",t.default=s.exports},jP3X:function(e,t){e.exports='# About\n\nMy name is **Keisuke KITA**, Software Engineer from Shibuya, Tokyo, Japan.\nMy main focus is front-end development with high-performance and clean code.\nAlso I\'m interested in middleware/backend development in Node.js and Go.\n\n## Software - self-developed products -\n\n- [ohajiki](https://github.com/kitak/ohajiki)\n  * A minimum dropbox clone\n\n## Software - contributions -\n\n- JDK\n  * Bug reportings\n    - [JDK-8160034 : The `this` value in the `with` is broken by the repetition of a function call](http://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8160034)\n\n- Vue.js\n  * Document translation\n\n    - https://github.com/vuejs/vuex/pull/240\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/156\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/165\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/169\n\t\t- https://github.com/vuejs/jp.vuejs.org/pull/182\n  * Bug reportings\n\n    - [2.0 Server-side rendering with v-text or v-html doesn\'t work well\'](https://github.com/vuejs/vue/issues/3078)\n\n- serverspec\n  * implementation some resources and matchers\n    - [Add be_listening.with("protocol") matcher for Port resource.](https://github.com/mizzy/serverspec/pull/200)\n    - [Add "be_monitored_by" matcher for Service resource](https://github.com/mizzy/serverspec/pull/187)\n    - [add .under(\'upstart\') to be_running](https://github.com/mizzy/serverspec/pull/186)\n    - [add socket type, matcher](https://github.com/mizzy/serverspec/pull/156)\n  * [Commit History](https://github.com/mizzy/serverspec/commits/master?author=kitak)\n\n## Presentations\n\n- Vue.js Tokyo v-meetup="#1"\n  * [ViewModelのダイエット Messengerパターン編](https://speakerdeck.com/kitak/viewmodelfalsedaietuto-messengerpatanbian)\n\n- Ruby Hiroba 2014\n  * [Railsのサービスで特別対応をしたときの話](https://speakerdeck.com/kitak/railsfalsesabisudete-bie-dui-ying-wositatokifalsehua)\n\n- Kanazawa.rb meetup #6\n  * [Sqaleにアプリをデプロイしたよー](http://www.slideshare.net/KeisukeKita/sqale)\n\n## Writing Career (in Japanese)\n\n- [gihyo.jp Vue.js入門 ―最速で作るシンプルなWebアプリケーション](http://gihyo.jp/dev/serial/01/vuejs/0002)\n  * 第2回　Vue.js基礎文法最速マスター\n\n## Others\n\n- GitHub\n  * [https://github.com/kitak](https://github.com/kitak)\n- Blog\n  * [http://kitak.hatenablog.jp/](http://kitak.hatenablog.jp/)\n- Speaker Deck\n  * [https://speakerdeck.com/kitak](https://speakerdeck.com/kitak)\n- SlideShare\n  * [http://www.slideshare.net/KeisukeKita](http://www.slideshare.net/KeisukeKita)\n- Twitter\n  * [https://twitter.com/kitak](https://twitter.com/kitak)\n- Facebook\n  * [https://www.facebook.com/kei.kita2501](https://www.facebook.com/kei.kita2501)\n'},k203:function(e,t,n){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("article",{staticClass:"page",domProps:{innerHTML:this._s(this.generatedHTML)}})};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},lZJo:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("MyHeader"),t("main",{attrs:{id:"content"}},[t("MdArticle",{attrs:{"source-md":this.aboutMd}})],1),t("MyFooter")],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},"o/Et":function(e,t,n){"use strict";var r=n("YnYt"),i=n("k203"),s=n("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="components/MdArticle.vue",t.a=s.exports},pVZ6:function(e,t,n){"use strict";var r=n("TsMM"),i=n("VU/8")(null,r.a,!1,null,null,null);i.options.__file="components/MyFooter.vue",t.a=i.exports},xZWZ:function(e,t,n){!function(e){var t=e.Markdown=function(e){switch(typeof e){case"undefined":this.dialect=t.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in t.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=t.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function i(){var e=n("OMJi");return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}e.parse=function(e,n){return new t(n).toTree(e)},e.toHTML=function(t,n,r){var i=e.toHTMLTree(t,n,r);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,n){"string"==typeof e&&(e=this.parse(e,t));var r=f(e),i={};r&&r.references&&(i=r.references);var s=function e(t,n,r){var i;r=r||{};var s=t.slice(0);"function"==typeof r.preprocessTreeNode&&(s=r.preprocessTreeNode(s,n));var a=f(s);if(a){s[1]={};for(i in a)s[1][i]=a[i];a=s[1]}if("string"==typeof s)return s;switch(s[0]){case"header":s[0]="h"+s[1].level,delete s[1].level;break;case"bulletlist":s[0]="ul";break;case"numberlist":s[0]="ol";break;case"listitem":s[0]="li";break;case"para":s[0]="p";break;case"markdown":s[0]="html",a&&delete a.references;break;case"code_block":s[0]="pre",i=a?2:1;var o=["code"];o.push.apply(o,s.splice(i,s.length-i)),s[i]=o;break;case"inlinecode":s[0]="code";break;case"img":s[1].src=s[1].href,delete s[1].href;break;case"linebreak":s[0]="br";break;case"link":s[0]="a";break;case"link_ref":s[0]="a";var l=n[a.ref];if(!l)return a.original;delete a.ref,a.href=l.href,l.title&&(a.title=l.title),delete a.original;break;case"img_ref":s[0]="img";var l=n[a.ref];if(!l)return a.original;delete a.ref,a.src=l.href,l.title&&(a.title=l.title),delete a.original}i=1;if(a){for(var c in s[1]){i=2;break}1===i&&s.splice(i,1)}for(;i<s.length;++i)s[i]=e(s[i],n,r);return s}(e,i,n);return function e(t){var n=f(t)?2:1;for(;n<t.length;)"string"==typeof t[n]?n+1<t.length&&"string"==typeof t[n+1]?t[n]+=t.splice(n+1,1)[0]:++n:(e(t[n]),++n)}(s),s};var s=t.mk_block=function(e,t,n){1==arguments.length&&(t="\n\n");var s=new String(e);return s.trailing=t,s.inspect=i,s.toSource=r,void 0!=n&&(s.lineNumber=n),s};function o(e){for(var t=0,n=-1;-1!==(n=e.indexOf("\n",n+1));)t++;return t}function l(e,t){var n=e+"_state",r="strong"==e?"em_state":"strong_state";function i(e){this.len_after=e,this.name="close_"+t}return function(s,a){if(this[n][0]==t)return this[n].shift(),[s.length,new i(s.length-t.length)];var o=this[r].slice(),l=this[n].slice();this[n].unshift(t);var c=this.processInline(s.substr(t.length)),u=c[c.length-1];this[n].shift();return u instanceof i?(c.pop(),[s.length-u.len_after,[e].concat(c)]):(this[r]=o,this[n]=l,[t.length,t])}}t.prototype.split_blocks=function(e,t){e=e.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],a=1;for(null!=(n=/^(\s*\n)/.exec(e))&&(a+=o(n[0]),r.lastIndex=n[0].length);null!==(n=r.exec(e));)"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),i.push(s(n[1],n[2],a)),a+=o(n[0]);return i},t.prototype.processBlock=function(e,t){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,e,t);for(var i=0;i<r.length;i++){var s=n[r[i]].call(this,e,t);if(s)return(!u(s)||s.length>0&&!u(s[0]))&&this.debug(r[i],"didn't return a proper array"),s}return[]},t.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},t.prototype.toTree=function(e,t){var n=e instanceof Array?e:this.split_blocks(e),r=this.tree;try{for(this.tree=t||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=r)}},t.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,e)},t.prototype.loop_re_over_block=function(e,t,n){for(var r,i=t.valueOf();i.length&&null!=(r=e.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},t.dialects={},t.dialects.Gruber={block:{atxHeader:function(e,t){var n=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<e.length&&t.unshift(s(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},setextHeader:function(e,t){var n=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r=["header",{level:"="===n[2]?1:2},n[1]];return n[0].length<e.length&&t.unshift(s(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},code:function(e,t){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(e.match(r)){e:for(;;){var i=this.loop_re_over_block(r,e.valueOf(),function(e){n.push(e[1])});if(i.length){t.unshift(s(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(r))break e;n.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(e,t){var n=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&t.unshift(s(n[3])),r}},lists:function(){var e="[*+-]|\\d+\\.",t=/[*+-]/,n=new RegExp("^( {0,3})("+e+")[ \t]+"),r="(?: {0,3}\\t| {4})";function i(e,t,n,r){if(t)e.push(["para"].concat(n));else{var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;r&&e.length>1&&n.unshift(r);for(var s=0;s<n.length;s++){var a=n[s];"string"==typeof a&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=a:i.push(a)}}}function a(e,t){for(var n=new RegExp("^("+r+"{"+e+"}.*?\\n?)*$"),i=new RegExp("^"+r+"{"+e+"}","gm"),a=[];t.length>0&&n.exec(t[0]);){var o=t.shift(),l=o.replace(i,"");a.push(s(l,o.trailing,o.lineNumber))}return a}function o(e,t,n){var r=e.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var s=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),s)}}return function(s,l){var u=s.match(n);if(u){for(var h,f,p,g=[],d=E(u),v=!1,b=[g[0].list];;){for(var m=s.split(/(?=\n)/),_="",k=0;k<m.length;k++){var y="",w=m[k].replace(/^\n/,function(e){return y=e,""}),j=(p=g.length,new RegExp("(?:^("+r+"{0,"+p+"} {0,3})("+e+")\\s+)|(^"+r+"{0,"+(p-1)+"}[ ]{0,4})"));if(void 0!==(u=w.match(j))[1]){_.length&&(i(h,v,this.processInline(_),y),v=!1,_=""),u[1]=u[1].replace(/ {0,3}\t/g,"    ");var M=Math.floor(u[1].length/4)+1;if(M>g.length)d=E(u),h.push(d),h=d[1]=["listitem"];else{var S=!1;for(f=0;f<g.length;f++)if(g[f].indent==u[1]){d=g[f].list,g.splice(f+1,g.length-(f+1)),S=!0;break}S||(++M<=g.length?(g.splice(M,g.length-M),d=g[M-1].list):(d=E(u),h.push(d))),h=["listitem"],d.push(h)}y=""}w.length>u[0].length&&(_+=y+w.substr(u[0].length))}_.length&&(i(h,v,this.processInline(_),y),v=!1,_="");var x=a(g.length,l);x.length>0&&(c(g,o,this),h.push.apply(h,this.toTree(x,[])));var O=l[0]&&l[0].valueOf()||"";if(!O.match(n)&&!O.match(/^ /))break;s=l.shift();var $=this.dialect.block.horizRule(s,l);if($){b.push.apply(b,$);break}c(g,o,this),v=!0}return b}function E(e){var n=t.exec(e[2])?["bulletlist"]:["numberlist"];return g.push({list:n,indent:e[1]}),n}}}(),blockquote:function(e,t){if(e.match(/^>/m)){var n=[];if(">"!=e[0]){for(var r=e.split(/\n/),i=[],a=e.lineNumber;r.length&&">"!=r[0][0];)i.push(r.shift()),a++;var o=s(i.join("\n"),"\n",e.lineNumber);n.push.apply(n,this.processBlock(o,[])),e=s(r.join("\n"),e.trailing,a)}for(;t.length&&">"==t[0][0];){var l=t.shift();e=s(e+e.trailing+l,l.trailing,e.lineNumber)}var c=e.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),p=f(u);return p&&p.references&&(delete p.references,h(p)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(e,t){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(n)){f(this.tree)||this.tree.splice(1,0,{});var r=f(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=r.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(s(i,e.trailing)),[]}},para:function(e,t){return[["para"].concat(this.processInline(e))]}}},t.dialects.Gruber.inline={__oneElement__:function(e,t,n){var r,i;return t=t||this.dialect.inline.__patterns__,(r=new RegExp("([\\s\\S]*?)("+(t.source||t)+")").exec(e))?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,e.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]):[e.length,e]},__call__:function(e,t){var n,r=[];function i(e){"string"==typeof e&&"string"==typeof r[r.length-1]?r[r.length-1]+=e:r.push(e)}for(;e.length>0;)n=this.dialect.inline.__oneElement__.call(this,e,t,r),e=e.substr(n.shift()),c(n,i);return r},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var n={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(n.title=t[4]),[t[0].length,["img",n]]}return(t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function(e){var n=String(e),r=t.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!r)return[1,"["];var i,s,a=1+r[0],o=r[1],l=(e=e.substr(a)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(l){var c=l[1];if(a+=l[0].length,c&&"<"==c[0]&&">"==c[c.length-1]&&(c=c.substring(1,c.length-1)),!l[3])for(var u=1,h=0;h<c.length;h++)switch(c[h]){case"(":u++;break;case")":0==--u&&(a-=c.length-h,c=c.substring(0,h))}return s={href:(c=this.dialect.inline.__call__.call(this,c,/\\/)[0])||""},void 0!==l[3]&&(s.title=l[3]),i=["link",s].concat(o),[a,i]}return(l=e.match(/^\s*\[(.*?)\]/))?(a+=l[0].length,i=["link_ref",s={ref:(l[1]||String(o)).toLowerCase(),original:n.substr(0,a)}].concat(o),[a,i]):1==o.length&&"string"==typeof o[0]?(i=["link_ref",s={ref:o[0].toLowerCase(),original:n.substr(0,a)},o[0]],[a,i]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}},t.dialects.Gruber.inline["**"]=l("strong","**"),t.dialects.Gruber.inline.__=l("strong","__"),t.dialects.Gruber.inline["*"]=l("em","*"),t.dialects.Gruber.inline._=l("em","_"),t.buildBlockOrder=function(e){var t=[];for(var n in e)"__order__"!=n&&"__call__"!=n&&t.push(n);e.__order__=t},t.buildInlinePatterns=function(e){var t=[];for(var n in e)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==n.length?r:"(?:"+r+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,n){return void 0!=n?i.call(this,e,n):i.call(this,e,t)}},t.DialectHelpers={},t.DialectHelpers.inline_until_char=function(e,t){for(var n=0,r=[];;){if(e.charAt(n)==t)return[++n,r];if(n>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},t.subclassDialect=function(e){function t(){}function n(){}return t.prototype=e.block,n.prototype=e.inline,{block:new t,inline:new n}},t.buildBlockOrder(t.dialects.Gruber.block),t.buildInlinePatterns(t.dialects.Gruber.inline),t.dialects.Maruku=t.subclassDialect(t.dialects.Gruber),t.dialects.Maruku.processMetaHash=function(e){for(var t=function(e){var t=e.split(""),n=[""],r=!1;for(;t.length;){var i=t.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=t.shift();default:n[n.length-1]+=i}}return n}(e),n={},r=0;r<t.length;++r)if(/^#/.test(t[r]))n.id=t[r].substring(1);else if(/^\./.test(t[r]))n.class?n.class=n.class+t[r].replace(/./," "):n.class=t[r].substring(1);else if(/\=/.test(t[r])){var i=t[r].split(/\=/);n[i[0]]=i[1]}return n},t.dialects.Maruku.block.document_meta=function(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){f(this.tree)||this.tree.splice(1,0,{});var n=e.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),s=r[2];this.tree[1][i]=s}return[]}},t.dialects.Maruku.block.block_meta=function(e,t){var n=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var s=this.tree[this.tree.length-1];if(r=f(s),"string"==typeof s)return;r||(r={},s.splice(1,0,r));for(a in i)r[a]=i[a];return[]}var o=e.replace(/\n.*$/,""),l=this.processBlock(o,[]);(r=f(l[0]))||(r={},l[0].splice(1,0,r));for(a in i)r[a]=i[a];return l}},t.dialects.Maruku.block.definition_list=function(e,t){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(o=e.match(r)){for(var s=[e];t.length&&r.exec(t[0]);)s.push(t.shift());for(var a=0;a<s.length;++a){var o,l=(o=s[a].match(r))[1].replace(/\n$/,"").split(/\n/),c=o[2].split(/\n:\s+/);for(n=0;n<l.length;++n)i.push(["dt",l[n]]);for(n=0;n<c.length;++n)i.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[i]}},t.dialects.Maruku.block.table=function(e,t){var n,r,i=function(e,t){(t=t||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(t="\\"+t);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+t+"])*)"+t+"(.*)");n=e.match(i);)r.push(n[1]),e=n[2];return r.push(e),r};if(r=e.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=e.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var s=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var a=[];for(c(r[2],function(e){e.match(/^\s*-+:\s*$/)?a.push({align:"right"}):e.match(/^\s*:-+\s*$/)?a.push({align:"left"}):e.match(/^\s*:-+:\s*$/)?a.push({align:"center"}):a.push({})}),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)s[1][1].push(["th",a[n]||{}].concat(this.processInline(r[1][n].trim())));return c(r[3].replace(/\|\s*$/gm,"").split("\n"),function(e){var t=["tr"];for(e=i(e,"|"),n=0;n<e.length;n++)t.push(["td",a[n]||{}].concat(this.processInline(e[n].trim())));s[2].push(t)},this),[s]},t.dialects.Maruku.inline["{:"]=function(e,t,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var s=this.dialect.processMetaHash(i[1]),a=f(r);a||(a={},r.splice(1,0,a));for(var o in s)a[o]=s[o];return[i[0].length,""]},t.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,t.buildBlockOrder(t.dialects.Maruku.block),t.buildInlinePatterns(t.dialects.Maruku.inline);var c,u=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};c=Array.prototype.forEach?function(e,t,n){return e.forEach(t,n)}:function(e,t,n){for(var r=0;r<e.length;r++)t.call(n||e,e[r],r,e)};var h=function(e){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0};function f(e){return u(e)&&e.length>1&&"object"==typeof e[1]&&!u(e[1])?e[1]:void 0}function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(e){if("string"==typeof e)return g(e);var t=e.shift(),n={},r=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(n=e.shift());e.length;)r.push(d(e.shift()));var i="";for(var s in n)i+=" "+s+'="'+g(n[s])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+r.join("")+"</"+t+">"}e.renderJsonML=function(e,t){(t=t||{}).root=t.root||!1;var n=[];if(t.root)n.push(d(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)n.push(d(e.shift()));return n.join("\n\n")}}(t)}});