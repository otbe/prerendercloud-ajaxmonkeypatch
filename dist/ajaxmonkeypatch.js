'use strict';function ajaxMonkeyPatch(a,b){function c(f){var g=a.atob(f),h=g.replace(/(.)/g,function(i,j){var k=j.charCodeAt(0).toString(16).toUpperCase();return 2>k.length&&(k='0'+k),'%'+k});return decodeURIComponent(h)}try{b=JSON.parse(c(b))}catch(f){return}a.pcCachedResponses=b;var d=a.XMLHttpRequest.prototype.open;a.XMLHttpRequest.prototype.open=function(f,g){return this._precloudurl=g,this._precloudurl&&'/'===this._precloudurl.substr(0,1)&&(this._precloudurl=a.location.origin+this._precloudurl),d.apply(this,arguments)};var e=a.XMLHttpRequest.prototype.send;a.XMLHttpRequest.prototype.send=function(){if(b[this._precloudurl]){var f=b[this._precloudurl];return Object.defineProperty(this,'responseText',{get:function get(){return f}}),Object.defineProperty(this,'readyState',{get:function get(){return 4}}),Object.defineProperty(this,'status',{get:function get(){return 200}}),delete b[this._precloudurl],this.onreadystatechange()}return e.apply(this,arguments)}}
