function do_Animation(){this.type="do_Animation";this.data=[];this.fillAfter=false;MM.call(this);this.animationFactory={};this.alpha=alpha;this.rotate=rotate;this.scale=scale;this.transfer=transfer;function alpha(data,id){id="alpha_"+(id?id:guid());this.animationFactory[id]=data;var style=document.getElementById("style");var sheet=style.sheet;sheet.insertRule(getRuleText(id,{"opacity":data.alphaFrom},{"opacity":data.alphaTo}),0)}function rotate(data,id){id="rotate_"+(id?id:guid());this.animationFactory[id]=data;var style=document.getElementById("style");var sheet=style.sheet;sheet.insertRule(getRuleText(id,{"transform":"rotate("+data.fromDegree+"deg)","transform-origin":data.pivotX*100+"% "+data.pivotY*100+"%"},{"transform":"rotate("+data.toDegree+"deg)","transform-origin":data.pivotX*100+"% "+data.pivotY*100+"%"}),0)}function scale(data,id){id="scale_"+(id?id:guid());this.animationFactory[id]=data;var style=document.getElementById("style");var sheet=style.sheet;sheet.insertRule(getRuleText(id,{"transform":"scale("+data.scaleFromX+","+data.scaleFromY+")","transform-origin":data.pivotX*100+"% "+data.pivotY*100+"%"},{"transform":"scale("+data.scaleToX+","+data.scaleToY+")","transform-origin":data.pivotX*100+"% "+data.pivotY*100+"%"}),0)}function transfer(data,id){id="transfer_"+(id?id:guid());this.animationFactory[id]=data;var style=document.getElementById("style");var sheet=style.sheet;sheet.insertRule(getRuleText(id,{"transform":"translate("+getRealSize(data.fromX)+"px,"+getRealSize(data.fromY)+"px)"},{"transform":"translate("+getRealSize(data.toX)+"px,"+getRealSize(data.toY)+"px)"}),0)}function getRuleText(animate_id,from,to){var token=window.WebKitCSSKeyframesRule?"-webkit-":"";var text="@"+token+"keyframes "+animate_id+" {from{";for(var key in from)text+=key+":"+from[key]+";";text+="}to{";for(var key in to)text+=key+":"+to[key]+";";text+="}}";return text}}(function(){var Super=function(){};Super.prototype=MM.prototype;do_Animation.prototype=new Super})();