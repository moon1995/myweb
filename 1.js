
function add(elem,eventtype,fun){
	try{
		if(elem!=null && typeof elem== "object"){
		if(-[1,]){
			elem.addEventListener(eventtype,fun);
			}else{
				elem.attachEvent("on"+eventtype,fun)
				}
		}else{
			alert("对象为空或不是对象");
			}
		
		}catch(e){
			alert(e.message);
			}
	
	}