"use strict";function ajaxMonkeyPatchForBypass(a,b){if(Array.prototype.indexOf){var c;try{c=b?JSON.parse(b):[]}catch(g){return}a.pcPathsToIgnore=c,String.prototype.startsWith||(String.prototype.startsWith=function(g,h){return h=h||0,this.substr(h,g.length)===g});var d=function(g){var h=g.startsWith(a.location.origin),i=g.startsWith("/")&&!g.startsWith("//"),j=-1!==c.indexOf(g);return(h||i)&&!j},e=a.XMLHttpRequest.prototype.open;if(a.XMLHttpRequest.prototype.open=function(){var g=arguments[1],h=e.apply(this,arguments);return g&&d(g)&&this.setRequestHeader("x-prerendered","true"),h},a.fetch){var f=a.fetch;a.fetch=function(g,h){return g&&g.headers?(g&&g.url&&d(g.url)&&g.headers.set("x-prerendered",!0),f(g,h||g)):(g&&d(g)&&(h=h||{},h.headers=h.headers||{},h.headers["x-prerendered"]="true"),f(g,h))}}}}
