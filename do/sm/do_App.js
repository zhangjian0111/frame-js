function do_App(){this.type="do_App";this.pageStack=[];this.appScopeModels=[];this.openPage=openPage;this.closePage=closePage;this.getAppID=getAppID;this.closePageToID=closePageToID;function closePageToID(data,animationType,id,func){eval(getArgs(arguments,{data:"",animationType:"",id:"",func:"",turn:["data","animationType","id","func"]}));var layer=0;for(var i=this.pageStack.length-2;i>=0;--i)if(this.pageStack[i].id===id){layer+=this.pageStack.length-1-i;break}if(layer===0)throw new Error("\u627e\u4e0d\u5230\u6b64id\uff1a"+id);this.closePage(data,animationType,layer,func)}function getAppID(){return localStorage.getItem("appID")}function openPage(source,data,animationType,keyboardMode,scriptType,statusBarState,statusBarFgColor,statusBarBgColor,id,func){eval(getArgs(arguments,{source:null,data:"",animationType:"slide_r2l",keyboardMode:"hidden",scriptType:"",statusBarState:"show",statusBarFgColor:"white",statusBarBgColor:"000000FF",id:guid(),func:"",turn:["source","data","animationType","keyboardMode","scriptType","statusBarState","statusBarFgColor","statusBarBgColor","id","func"]}));var timestamp=(new Date).getTime();var iframe=document.createElement("iframe");iframe.name=timestamp;iframe.width="100%";iframe.height="100%";iframe.style.position="absolute";iframe.style.willChange="transform";iframe.style.zIndex="100";iframe.style.transform="transition3d(0,0,0)";iframe.style.top="0px";iframe.style.animation="slide_r2l 0.5s";var parentWindow=window.parent;var body=parentWindow.document.getElementById("body");body.appendChild(iframe);parentWindow.frames[timestamp].source=source;var page=sm("do_Page");page.iframe=iframe;parentWindow.frames[timestamp].page=page;page.data=data;page.id=id;this.pageStack.push(page);parentWindow.frames[timestamp].document.write(localStorage.getItem("base.html"));if(func)func()}function closePage(data,animationType,layer,func){eval(getArgs(arguments,{data:"",animationType:"",layer:1,func:"",turn:["data","animationType","layer","func"]}));var iframe;for(var i=1;i<layer;i++){iframe=this.pageStack[this.pageStack.length-2].iframe;iframe.parentNode.removeChild(iframe);this.pageStack.pop()}var that=this;iframe=this.pageStack[this.pageStack.length-1].iframe;iframe.addEventListener("webkitAnimationEnd",function(){if(iframe.parentNode){iframe.parentNode.removeChild(iframe);that.pageStack[that.pageStack.length-2].fire("result",data);that.pageStack.pop()}},false);iframe.style.animation="slide_l2r 0.5s";if(func)func()}SM.call(this)}(function(){var Super=function(){};Super.prototype=SM.prototype;do_App.prototype=new Super})();