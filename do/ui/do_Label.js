//按钮组件
function do_Label(uiJson,parentNode){this.type="do_Label";this.uiType=0;this.fontColor="000000FF";this.fontSize=17;this.fontStyle="normal";this.linesSpace="";this.maxHeight="";this.maxLines=1;this.maxWidth="";this.shadow="";this.text="";this.textAlign="left";this.textFlag="normal";this.defaultProps={fontColor:"000000FF",fontSize:17,fontStyle:"normal",linesSpace:"",maxHeight:"",maxLines:1,maxWidth:"",shadow:"",text:"",textAlign:"left",textFlag:"normal"};this.onDOMCreated=function(){var that=this;Object.defineProperty(that,"text",{set:function(newValue){this.uiJson.text=newValue;that.DOMElement.innerText=newValue},get:function(){return this.uiJson.text||this.defaultProps.text}})};this.render=function(){var label=this.DOMElement?this.DOMElement:document.createElement("label");for(var key in this){var value=this[key];switch(key){case "textAlign":this.style["text-align"]=value;break;case "fontSize":this.style["font-size"]=getRealSize(value)+"px";break;case "fontColor":this.style["color"]="#"+value.substr(0,6);break;case "text":label.innerText=this.text;break;case "fontStyle":switch(value){case "normal":case "italic":this.style["font-style"]=value;break;case "underline":this.style["text-decoration"]="underline";break;case "bold":this.style["font-weight"]="bold";break;case "bold_italic":this.style["font-style"]="italic";this.style["font-weight"]="bold";break}break}}for(var key in this.style)label.style[key]=this.style[key];label.style.lineHeight=label.style.height;return label};UI.call(this,uiJson,parentNode)}(function(){var Super=function(){};Super.prototype=UI.prototype;do_Label.prototype=new Super})();