!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.html5tooltips=e()}(this,function(){"use strict";function t(t,e){function n(t){var e=r(t).map(function(t){return typeof t}),n={};if("object"===e[0])n=t[0];else if("string"===e[0]){var o=t[0].split(" ");for(var i in o)n[o[i]]=t[1]}else"function"===e[0]&&(n={"":t[0]});return n}function o(t,e){for(var n,i=0;i<t.length;i++){for(var r=0;r<t[i].attributes.length;r++)n=t[i].attributes.item(r).name.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()}),e[n]=e[n]||[],e[n].push(t[i]);o(t[i].children,e)}}function i(t){clearTimeout(f[t]),f[t]=setTimeout(function(){for(var e in u[t])u[t][e](d[t]);if(u[""])for(var e in u[""])u[""][e]()})}function r(t,e){return Array.prototype.slice.call(t,e)}var a=[],s={},l=[],c={},u={},d={},f={};if(e){var g=document.createElement("div");g.innerHTML=e,l=r(g.children),o(l,a)}return s.anchors=a,s.components=t.components={},s.elements=t.elements=l,s.model=t.model=d,s.assignModel=t.assignModel=function(e){s.model=t.model=d=e;for(var n in d)i(n)},s.destroy=t.destroy=function(){for(var t in s.components)s.components[t].destroy&&s.components[t].destroy();for(var e=l.length;e--;)l[e].parentNode&&l[e].parentNode.removeChild(l[e])},s.dispatch=function(e){var n=r(arguments,1);setTimeout(function(){for(var o in c[e])c[e][o].apply(t,n)})},s.on=t.on=function(){var t=n(arguments);for(var e in t)c[e]=c[e]||[],c[e].push(t[e])},s.onModelUpdate=function(){var t=n(arguments);for(var e in t)d[e]=d[e]||null,u[e]=u[e]||[],u[e].push(t[e]),i(e)},s.set=t.set=function(){var t=n(arguments);for(var e in t)d[e]=t[e],i(e)},s}function e(){function e(t,e){p.disableAnimation?e():(t.getBoundingClientRect(),t.classList.add("animating"),e&&e(),setTimeout(function(){t.classList.remove("animating")},p.animateDuration))}function n(t,e,n,o){p.disableAnimation?o&&o():(t.classList.add(e),t.getBoundingClientRect(),t.classList.add("animating"),t.classList.remove(e),t.classList.add(n),o&&o(),setTimeout(function(){t.classList.remove("animating"),t.classList.remove(n)},p.animateDuration))}function o(){return"collapse"!==g.style.visibility&&(g.style.visibility="collapse"),g.style.left="-9999px",g.style.top="-9999px","none"!==f.style.display&&(f.style.display="none",f.style.visibility="collapse",f.style.height="auto"),this}function i(){var t,e;if(s.model.target&&"visible"===g.style.visibility){g.style.width="auto",e=g.getBoundingClientRect();var n=parseInt(p.maxWidth);switch(n&&(g.style.width=e.width>n?n+"px":"auto"),t=s.model.target.getBoundingClientRect(),e=g.getBoundingClientRect(),p.stickTo){case c.stickTo.bottom:g.style.left=t.left+parseInt((t.width-e.width)/2)+"px",g.style.top=t.top+t.height+parseInt(p.stickDistance)+"px";break;case c.stickTo.left:g.style.left=t.left-e.width-parseInt(p.stickDistance)+"px",g.style.top=t.top+(t.height-e.height)/2+"px";break;case c.stickTo.right:g.style.left=t.left+t.width+parseInt(p.stickDistance)+"px",g.style.top=t.top+(t.height-e.height)/2+"px";break;case c.stickTo.top:g.style.left=t.left+(t.width-e.width)/2+"px",g.style.top=t.top-e.height-parseInt(p.stickDistance)+"px"}}}function r(){return"visible"!==g.style.visibility&&(g.style.visibility="visible",setTimeout(function(){i(),n(d,p.animateFunction+"-from",p.animateFunction+"-to")})),this}function a(){if("visible"!==g.style.visibility)g.style.visibility="visible",n(d,p.animateFunction+"-from",p.animateFunction+"-to"),p.contentMore&&(f.style.display="block",f.style.visibility="visible"),i();else if("block"!==f.style.display&&p.contentMore){f.style.display="block",e(g),i();var t=f.getBoundingClientRect().height;f.style.visibility="visible",f.style.height="0px",e(f,function(){f.style.height=t>0?t+"px":"auto"})}return this}var s=new t(this,l),d=s.anchors.box[0],f=(s.anchors.text[0],s.anchors.more[0]),g=(s.anchors.moreText[0],s.elements[0]);o(),"undefined"!=typeof window&&window.addEventListener("scroll",i,!1),s.set(u);var p=s.model;s.onModelUpdate({color:function(t){c.color[t]&&(t=c.color[t],t="rgb("+t.r+", "+t.g+", "+t.b+")"),d.style.backgroundColor=t},contentText:function(t){s.anchors.text[0].innerHTML=t},contentMore:function(t){s.anchors.moreText[0].innerHTML=t},stickTo:function(t){s.elements[0].className="html5tooltip-"+t}}),this.hide=o,this.show=r,this.showMore=a}function n(t,n,o){for(var i,r=o.length;r--;)if(o[r].model.target===t){i=o[r];break}i||(i=new e,o.push(i)),i.set(n),i.set("target",t);var a,s;t.addEventListener("mouseenter",function(){this!==a&&this!==s&&(a=this,document.body.appendChild(i.elements[0]),setTimeout(function(){this===a&&i.show()}.bind(this),i.model.delay))}),t.addEventListener("mouseleave",function(){a=null,this!==s&&(i.hide(),i.elements[0].parentNode&&i.elements[0].parentNode.removeChild(i.elements[0]))}),t.addEventListener("focus",function(){-1===["INPUT","TEXTAREA"].indexOf(this.tagName)&&null===this.getAttribute("contenteditable")||(s=this,document.body.appendChild(i.elements[0]),i.showMore())}),t.addEventListener("blur",function(){s=null,i.hide(),i.elements[0].parentNode&&i.elements[0].parentNode.removeChild(i.elements[0])})}function o(t,e){for(var n,o=(e||document).getElementsByTagName("*"),i=[],r=0;n=o[r];r++)n.getAttribute(t)&&i.push(n);return i}function i(){o("data-tooltip").forEach(function(t){var e={animateFunction:t.getAttribute("data-tooltip-animate-function")||u.animateFunction,color:t.getAttribute("data-tooltip-color")||"",contentMore:t.getAttribute("data-tooltip-more")||"",contentText:t.getAttribute("data-tooltip")||"",delay:t.getAttribute("data-tooltip-delay")||u.delay,maxWidth:t.getAttribute("data-tooltip-maxwidth")||"auto",stickTo:t.getAttribute("data-tooltip-stickto")||u.stickTo};n(t,e,f)})}function r(t,e){var n=[];try{n=Array.prototype.slice.call((e||document).querySelectorAll(t))}catch(o){}return n}function a(t){t.forEach(function(t){var e=[];t.targetSelector&&(e=r(t.targetSelector)),e.forEach(function(e){n(e,t,d)})})}function s(){document.removeEventListener("DOMContentLoaded",s,!1),window.removeEventListener("load",s,!1),g.refresh()}var l='<div class="html5tooltip" style="box-sizing:border-box;position:fixed;z-index:2147483647">  <div class="html5tooltip-box" box>    <div class="html5tooltip-text" text></div>      <div class="html5tooltip-more" style="overflow:hidden;" more>        <div class="html5tooltip-text" more-text></div>      </div>    </div></div>',c={animateFunction:{fadeIn:"fadein",foldIn:"foldin",foldOut:"foldout",roll:"roll",scaleIn:"scalein",slideIn:"slidein",spin:"spin"},color:{daffodil:{r:255,g:230,b:23},daisy:{r:250,g:211,b:28},mustard:{r:253,g:183,b:23},"citrus zest":{r:250,g:170,b:33},pumpkin:{r:241,g:117,b:63},tangerine:{r:237,g:87,b:36},salmon:{r:240,g:70,b:57},persimmon:{r:234,g:40,b:48},rouge:{r:188,g:35,b:38},scarlet:{r:140,g:12,b:3},"hot pink":{r:229,g:24,b:93},princess:{r:243,g:132,b:174},petal:{r:250,g:198,b:210},lilac:{r:178,g:150,b:199},lavender:{r:123,g:103,b:174},violet:{r:95,g:53,b:119},cloud:{r:195,g:222,b:241},dream:{r:85,g:190,b:237},gulf:{r:49,g:168,b:224},turquoise:{r:35,g:138,b:204},sky:{r:13,g:96,b:174},indigo:{r:20,g:59,b:134},navy:{r:0,g:27,b:74},"sea foam":{r:125,g:205,b:194},teal:{r:0,g:168,b:168},peacock:{r:18,g:149,b:159},ceadon:{r:193,g:209,b:138},olive:{r:121,g:145,b:85},bamboo:{r:128,g:188,b:66},grass:{r:74,g:160,b:63},kelly:{r:22,g:136,b:74},forrest:{r:0,g:63,b:46},chocolate:{r:56,g:30,b:17},"terra cotta":{r:192,g:92,b:32},camel:{r:191,g:155,b:107},linen:{r:233,g:212,b:167},stone:{r:231,g:230,b:225},smoke:{r:207,g:208,b:210},steel:{r:138,g:139,b:143},slate:{r:119,g:133,b:144},charcoal:{r:71,g:77,b:77},black:{r:5,g:6,b:8},white:{r:255,g:255,b:255},"metalic silver":{r:152,g:162,b:171},"metalic gold":{r:159,g:135,b:89},"metalic copper":{r:140,g:102,b:65}},stickTo:{bottom:"bottom",left:"left",right:"right",top:"top"}},u={animateDuration:300,animateFunction:c.animateFunction.fadeIn,delay:500,disableAnimation:!1,stickTo:c.stickTo.bottom,stickDistance:10},d=[],f=[],g=function(t){Array.isArray(t)||(t=[t]),a(t)};return g.autoinit=g.refresh=function(){i()},g.getTooltipByTarget=function(t){for(var e=d.length;e--;)if(d[e].model.target===t)return d[e];for(var e=f.length;e--;)if(f[e].model.target===t)return f[e]},"undefined"!=typeof window&&("complete"===document.readyState?s():(document.addEventListener("DOMContentLoaded",s,!1),window.addEventListener("load",s,!1)),window.html5tooltipsPredefined||(window.html5tooltipsPredefined=c,window.HTML5TooltipUIComponent=e)),g}),function(){var t,e,n,o,i,r,a,s,l,c,u,d,f,g,p;window.console&&window.console.log&&(c=function(){var t;return t=[],u(arguments).forEach(function(e){return"string"==typeof e?t=t.concat(g(e)):t.push(e)}),p.apply(window,t)},p=function(){return Function.prototype.apply.call(console.log,console,u(arguments))},u=function(t){return Array.prototype.slice.call(t)},n=[{regex:/\*([^\*]+)\*/,replacer:function(t,e){return"%c"+e+"%c"},styles:function(){return["font-style: italic",""]}},{regex:/\_([^\_]+)\_/,replacer:function(t,e){return"%c"+e+"%c"},styles:function(){return["font-weight: bold",""]}},{regex:/\`([^\`]+)\`/,replacer:function(t,e){return"%c"+e+"%c"},styles:function(){return["background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)",""]}},{regex:/\[c\=(?:\"|\')?((?:(?!(?:\"|\')\]).)*)(?:\"|\')?\]((?:(?!\[c\]).)*)\[c\]/,replacer:function(t,e,n){return"%c"+n+"%c"},styles:function(t){return[t[1],""]}}],i=function(t){var e;return e=!1,n.forEach(function(n){return n.regex.test(t)?e=!0:void 0}),e},o=function(t){var e;return e=[],n.forEach(function(n){var o;return o=t.match(n.regex),o?e.push({format:n,match:o}):void 0}),e.sort(function(t,e){return t.match.index-e.match.index})},g=function(t){var e,n,r;for(r=[];i(t);)n=o(t),e=n[0],t=t.replace(e.format.regex,e.format.replacer),r=r.concat(e.format.styles(e.match));return[t].concat(r)},l=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},s=function(){return/OPR/.test(navigator.userAgent)&&/Opera/.test(navigator.vendor)},r=function(){return/Firefox/.test(navigator.userAgent)},a=function(){return/MSIE/.test(navigator.userAgent)},f=function(){var t;return t=navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/),t?537.38<=parseInt(t[1],10)+parseInt(t[2],10)/100:!1},d=function(){var t;return t=navigator.userAgent.match(/OPR\/(\d+)\./),t?15<=parseInt(t[1],10):!1},e=function(){return window.console.firebug||window.console.exception},t=a()||r()&&!e()||s()&&!d()||l()&&!f()?p:c,t.l=p,"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof exports?module.exports=t:window.log=t)}.call(this);