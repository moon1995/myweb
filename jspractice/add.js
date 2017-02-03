function add(elem,eventy,fun){
	try{
		if(elem!=null && typeof elem=="object"){
			if(-[1,]){
				elem.addEventListener(eventy,fun);
			}else{
				elem.attachEvent("on"+eventy,fun)
		}
			}else{
			throw new Error("不是对象或对象为空");
			}
	
	}catch(e){
		alert(e.message);
	}
}
