// function getClass(select){
// 	if(document.getElementsByClassName){
//          return document.getElementsByClassName(select);
// 	}else{
// 		 var all=document.getElementsTagName("*");
// 		 var a=[];
// 		 for(var i=0;i<all.length;i++){
// 		 	 if(all[i].className==select){
// 		 	 	a.push(all[i]);
// 		 	 }
// 		 }
// 		 return a;
// 	}
// }

// --------------------------------------------------------------------
// -------------------document.getElementsByClassName------------------
function getClass(select,context){
	var context=context?context:document;
	if(document.getElementsByClassName){
         return  context.getElementsByClassName(select);
	}else{
		 var all=context.getElementsTagName("*");
		 var a=[];
		 for(var i=0;i<all.length;i++){
		 	 if(checkClass(all[i].className,select)){
		 	 	a.push(all[i]);
		 	 }
		 }
		 return a;
	}
}

function checkClass(all,select){
	var b=all.split(" ");
	for(var i=0;i<b.length;i++){
       if(b[i]==select){
       	   return true;
       }
	}
	return false;
}


// --------------------------------------------------------------------
// $(string) 获取页面中的元素；
// ".one" 获取指定类名的元素的集合
// "#one" 获取指定id的第一个元素
// "div" 获取指定标签的元素集合
// 思路：
       /*
        第一步：
              判断字符串的首字符
        第二步：
              "." --> getclass()；
              "#" -->document.getElementById;
              标签 document.getElementsByTagName;

              /^[a-z][a-z1-6]{0,8}$/ --> 正则表达式
       */
// function $(select,context){

//     var context=context||document;
// 	if(select.charAt(0)=="."){
//            return getClass(select.slice(1),context);
// 	}else if(select.charAt(0)=="#"){
//            return document.getElementById(select.slice(1));
//     }else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
// 	       return context.getElementsByTagName(select);
//     }
// }
// -----------------------《拓展》-------------------------------------
// ------------------获取元素中指定的元素类名--------------------------
function $(select,context){
	if(typeof select=="string"){
                var context=context||document;
	            if(select.charAt(0)=="."){
                          return getClass(select.slice(1),context);
	            }else if(select.charAt(0)=="#"){
                      return document.getElementById(select.slice(1));
                }else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
	                  return context.getElementsByTagName(select);
        }else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
             return document.createElement(select.slice(1,-1));
        }
	}else if(typeof select=="function"){
	   addEvent(window,"load",select);
    }
}


// --------------------------------------------------------------------
// ----------------获取指定元素标签内的文字内容------------------------
function setContent(obj,val){
    if(val){
        if(obj.innerText){
                  obj.innerText=val;
               }else{
                  obj.textContent=val;
               }   
        }else{
           	  	if(obj.innerText){
           	  	   	 return  obj.innerText;
           	  	}else{
           	  	   	 return  aatextContent;
           	  	}
        }
}


// --------------------------------------------------------------------
// ----------------获取指定元素指定的样式------------------------------
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
    else{
    	return getComputedStyle(obj,null)[attr];
    }
}


// --------------------------------------------------------------------
// -----------------获取指定元素的子元素(节点)-------------------------
/* getChild(obj,type);
   获取指定元素的子节点；
   obj：指定的对象；
   type：获取子节点的类型;

   思路：
       1.获取元素
       2.声明空数组
       3.遍历所有子节点
           a.通过子节点类型 
       4.返回数组
*/
function getchild(obj,type){
    var child=obj.childNodes;
    var type=type==undefined?true:false;
    var arr=[];
    for(var i=0;i<child.length;i++){
       if(type==true){
               if(child[i].nodeType==1){
                    arr.push(child[i]);
               }
       }else{
           if(child[i].nodeType==1||child[i].nodeType==3&&!(/^\s+$/.test(child[i].nodeValue))){
               arr.push(child[i]);
           }

       }
    }
    return arr;
}
// -------------------------------------------------------------------
// -------------------------------------------------------------------
//获取第一个子元素；
function firstChild(obj,type){
      return getchild(obj,type)[0];
}
// 获取最后一个子元素
function lastChild(obj,type){
      var length=getchild(obj,type).length;
      return getchild(obj,type)[length-1];
}
// 获取随机一个子元素
function randomChild(obj,type,num){
      return getchild(obj,type)[num];
}
// --------------------获取下一个元素节点(节点)-----------------------
/*
  getNext(obj)；
  获得下一个元素节点；

  思路：
      1.判断obj是否有下一个兄弟元素；
           没有：false；
           有：  更新next -->  next.nextSibling
                 next 半段是否为空；
           return next；
      2.
*/
function getNext1(obj){
      var next=obj.nextSibling;
      if(next==null){
         return false;
      }
      while(next.nodeType==8||next.nodeType==3){
        next=next.nextSibling;
        if(next==null){
          return false;
        }
      }
      return next;
}
// ---------------------------------------------------
function getNext2(obj){
      var next=obj.nextSibling;
      if(next==null){
         return false;
      }
      while(next.nodeType==8||next.nodeType==3){
        next=next.nextSibling;
        if(next==null){
          return false;
        }
      }
      return next;
}
// ---------------------------------------------------
// ---------获取下一个元素节点函数组------------------
function getNext(obj,type){
       if(type){
            return getNext1(obj,type);
       }else{
            return getNext2(obj,type);
       }
}
// ---------------------------------------------------
// ----------获取上一个元素节点(节点)-----------------
function getpreviousSibling1(obj){
      var next=obj.previousSibling;
      if(next==null){
         return false;
      }
      while(next.nodeType==8||next.nodeType==3){
        next=next.previousSibling;
        if(next==null){
          return false;
        }
      }
      return next;
}
// ---------------------------------------------------
function getpreviousSibling2(obj){
      var next=obj.previousSibling;
      if(next==null){
         return false;
      }
      while(next.nodeType==8||next.nodeType==3){
        next=next.previousSibling;
        if(next==null){
          return false;
        }
      }
      return next;
}
// ---------------------------------------------------
// ---------获取上一个元素节点函数组------------------
function getpreviousSibling(obj,type){
       if(type){
            return getpreviousSibling1(obj,type);
       }else{
            return getpreviousSibling2(obj,type);
       }
}
// ---------------------------------------------------
// ------------把元素插入指定元素后-------------------
/*
  obj=要插入的对象；
  obj1=插入哪一个对象后面

  ----------------------
  insertAfter(obj,obj2);
  将obj插入到obj1后面；
  思路：
      将obj插入到obj1的下一个兄弟节点的前面
      1.获取obj1的下一个兄弟节点；he 父元素
      2.判断下一个兄弟节点；
             true：
             false：
*/
function insertAfter(obj,obj1){
      var parent=obj1.parentNode;
      var next=getNext(obj1);
      if(next){
          parent.insertBefore(obj,next);
      }else{
          parent.appendChild(obj);
      }
}
// ----------
function insertBefore(obj,obj1){
      var parent=obj1.parentNode;
      parent.insertBefore(obj,obj1);
}
// ---------------------------------------------------
// ---------把元素插入父元素中第一个子元素前----------
/*
  appendBefore(obj,obj1)
  
  obj=需要插入的对象
  obj1=父元素

  将obj插入到父元素obj1的最前面；
  思路；
      1.找到obj的第一个子元素first；
      2.第一个元素
        true --obj1.insertbefore(obj，first)；
        false--obj1.appendchild（obj）； 
*/
function appendBefore(obj,obj1){
     var first=firstChild(obj1);
     if(first){
         obj1.insertBefore(obj,first);
     }else{
         obj1.appendChild(obj);
     }
}
// ----------
function appendChild(obj,obj1){
     obj1.appendChild(obj);
}
// ---------------------------------------------------
// ------一个事件可以引用两种处理程序不覆盖-----------
   function addEvent(obj,type,fn){
      if(obj.attachEvent){
                obj.attachEvent("on"+type,fn);
      }else{
           obj.addEventListener(type,fn,false);
      }
   }
   // --------删除--------
   function removeEvent(obj,type,fn){
      if(obj.detachEvent){
                obj.detachEvent("on"+type,fn);
      }else{
           obj.removeEventListener(type,fn,false);
      }
   }
// ---------------------------------------------------