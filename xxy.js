// JavaScript Document
function $(v){
	if(typeof v==='function'){
		window.onload=v;
	}else if(typeof v==='string'){
		return document.getElementById(v);
	}else if(typeof v==='object'){
		return v;
	}
}
///////////////////////////////////////////////////////////////简易$


function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
/////////////////////////////////////////////////////////////////////获取对象样式


function doMove(obj,attr,target,n,endFn){
	n = parseInt(getStyle( obj, attr )) < target ? n : -n;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=parseInt(getStyle(obj,attr))+n;
		if(speed>target&&n>0||speed<target&&n<0){
			speed=target;
		}
		obj.style[attr]=speed+'px';
		if(speed==target){
			clearInterval(obj.timer);
			endFn && endFn();
			//if(endFn){
			//	endFn()
			//}

		}
	},100)
}
/////////////////////////////////////////////////////////////////////对象运动


function Shake(obj,attr,endFn){
	var arr=[];
	for(var i=20;i>0;i-=2){
		arr.push(i,-i)
	}
	arr.push(0);
	if(obj.onOff){return}; 
    obj.onOff = true; 
	var pos=parseInt(getStyle(obj,attr));
	var num=0;
	clearInterval(obj.shake );
	
	obj.shake =setInterval(function(){
		num++;
		obj.style[attr]=pos+arr[num]+'px';
		if ( num === arr.length ) {
				clearInterval( obj.shake );
				obj.onOff = false; 
				endFn && endFn();
			}
			},50)
			
}
/////////////////////////////////////////////////////////////////////对象抖动


function opacity(obj,star,end,str,endFn){
	str=star<end?str:-str;
	var n=star
	obj.timer=null;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
			if(n>end&&str<0||n<end&&str>0){
				n+=str;		
			}
			else{
				n=end;
				clearInterval(obj.timer);
				endFn&&endFn();			
			}
			obj.style.opacity=n;
	},100)
}
/////////////////////////////////////////////////////////////////////元素透明度变化	


function returnFloat(value){
	var value=Math.round(parseFloat(value)*100)/100;
	var xsd=value.toString().split(".");
	if(xsd.length==1){
		value=value.toString()+".00";
		return value;
	}
		if(xsd.length>1){
		if(xsd[1].length<2){
		value=value.toString()+"0";
	}
		return value;
	}
}
/////////////////////////////////////////////////////////////////////JavaScript如何实现对数字保留两位小数一位自动补零	