//listView组件
function do_GridView(uiJson,parentNode){this.type="do_GridView";var that=this;this.uiType=2;this.canScrollToTop=true;this.footerView="";this.headerView="";this.isFooterVisible=false;this.isHeaderVisible=false;this.isShowbar=true;this.selectedColor="ffffff00";this.templates="";this.hSpacing="";this.items="";this.numColumns=1;this.vSpacing="";this.defaultProps={canScrollToTop:true,footerView:"",headerView:"",isFooterVisible:false,isHeaderVisible:false,isShowbar:true,selectedColor:"ffffff00",templates:"",hSpacing:"",items:"",numColumns:1,vSpacing:""};this.refreshItems=refreshItems;this.bindItems=bindItems;function refreshItems(){this.bindItems(this.listData)}function bindItems(listData){this.listData=listData;var data=listData.getAllData();this.views=[];for(var i=0;i<data.length;++i){var item=data[i];var templateIndex=item.template;var tempaltePaths=this.templates.split(",");var templatePath=tempaltePaths[templateIndex];var templateUiJson=getUIByPath(templatePath).RootView;this.views.push(templateUiJson)}this.childrenVirtualNodes=this.getVirtualChildrenNodes();for(var i=0;i<this.childrenVirtualNodes.length;++i){var virtualNode=this.childrenVirtualNodes[i];var datUIMap=virtualNode.DataMapUI;var one=data[i];var hashData=mm("do_HashData");hashData.addData(one);virtualNode.bindData(hashData)}this.getDOMElememt()}this.onDOMCreated=function(){var that=this;var newPosition=null;var firstVisiblePositionTemp=null;var lastVisiblePositionTemp=null;this.DOMElement.addEventListener("scroll",function(event){var domElement=event.target;var scrollTop=domElement.scrollTop;var scrollHeight=domElement.scrollHeight;var childrenDOMElements=domElement.children;var firstVisiblePosition=null,lastVisiblePosition=null;var numColumns=parseInt(that.numColumns);for(var i=0;i<childrenDOMElements.length;i=i+numColumns+1){var child=childrenDOMElements[i];var y1=child.getBoundingClientRect().top;var y2=domElement.getBoundingClientRect().top;var y3=y1+child.getBoundingClientRect().height;var y4=child.getBoundingClientRect().top;var y5=y2+domElement.getBoundingClientRect().height;var y6=y4+child.getBoundingClientRect().height;if(firstVisiblePosition===null&&y2>=y1&&y2<=y3)firstVisiblePosition=parseInt(i/(numColumns+1));if(lastVisiblePosition===null&&y5>=y4&&y5<=y6)lastVisiblePosition=parseInt(i/(numColumns+1))}if(firstVisiblePosition!==null&&firstVisiblePositionTemp!==null&&firstVisiblePosition>firstVisiblePositionTemp||lastVisiblePosition!==null&&lastVisiblePositionTemp!==null&&lastVisiblePosition>lastVisiblePositionTemp){if(lastVisiblePosition&&lastVisiblePosition!==lastVisiblePositionTemp)for(var j=0;j<numColumns;++j)if(lastVisiblePosition+j<that.childrenVirtualNodes.length)that.childrenVirtualNodes[lastVisiblePosition+j].fire("dataRefreshed")}else if(firstVisiblePosition!==null&&firstVisiblePositionTemp!==null&&firstVisiblePosition<firstVisiblePositionTemp||lastVisiblePosition!==null&&lastVisiblePositionTemp!==null&&lastVisiblePosition<lastVisiblePositionTemp)if(firstVisiblePosition&&firstVisiblePosition!==firstVisiblePositionTemp)for(var j=0;j<numColumns;++j)if(firstVisiblePosition+j<that.childrenVirtualNodes.length)that.childrenVirtualNodes[firstVisiblePosition+j].fire("dataRefreshed");firstVisiblePosition=firstVisiblePosition?firstVisiblePosition:0;lastVisiblePosition=lastVisiblePosition?lastVisiblePosition:parseInt((that.childrenVirtualNodes.length-1)/numColumns);firstVisiblePositionTemp=firstVisiblePosition;lastVisiblePositionTemp=lastVisiblePosition;that.fire("scroll",{firstVisiblePosition:firstVisiblePosition,lastVisiblePosition:lastVisiblePosition})});this.DOMElement.addEventListener("click",function(event){var pageY=event.pageY;var pageX=event.pageX;var childrenVirtualNodes=that.childrenVirtualNodes;for(var i=0;i<childrenVirtualNodes.length;++i){var child=childrenVirtualNodes[i].DOMElement;var y1=child.getBoundingClientRect().top;var y2=y1+child.getBoundingClientRect().height;var x1=child.getBoundingClientRect().left;var x2=x1+child.getBoundingClientRect().width;if(pageY>y1&&pageY<y2&&pageX>x1&&pageX<x2){that.fire("touch",i);that.fire("touch1",{position:i,x:getVirtualSize(x1),y:getVirtualSize(y1)});break}}})};this.render=function(){var div=this.DOMElement?this.DOMElement:document.createElement("div");for(var key in this.style)div.style[key]=this.style[key];div.style.overflow="scroll";div.style.position="relative";if(this.childrenVirtualNodes){div.innerHTML="";for(var i=0;i<this.childrenVirtualNodes.length;++i){var virtualNode=this.childrenVirtualNodes[i];virtualNode.style.display="block";var row=parseInt(i/3);var col=parseInt(i%3);div.appendChild(virtualNode.getDOMElememt());if((i+1)%this.numColumns===0){var br=document.createElement("br");div.appendChild(br)}}}return div};UI.call(this,uiJson,parentNode)}(function(){var Super=function(){};Super.prototype=UI.prototype;do_GridView.prototype=new Super})();