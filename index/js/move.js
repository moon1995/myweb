function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
};
function Move(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
    	var bStop = true;
    	for(var attr in json){
    		if(attr == "opacity"){
    			var cur = Math.round(parseFloat(getStyle(obj,attr))*100);
    		}else{
    			var cur = parseInt(getStyle(obj,attr));
    		}
    	   var speed = (parseInt(json[attr]) - cur)/6;
    	  
    	   speed = speed >0 ? Math.ceil(speed):Math.floor(speed);
    	   if(cur != parseInt(json[attr]) ){
    	   		bStop = false;
    	   }
    	   if(attr == "opacity"){
    	   		obj.style[attr] = (cur + speed) / 100;
    	   }else{
    	   		obj.style[attr] = cur + speed + "px";
    	   }
    	}
    	if(bStop){
    		clearInterval(obj.timer);
    		if(fn){
    			fn();
    		}
    	}
    },30);
}