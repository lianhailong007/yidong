$(function(){
// -----------首页选择卡------------------------
     var sy2=$(".sy2");
     var son2=$(".son2");

     for(var i=0;i<sy2.length;i++){
     	sy2[i].index=i;
     	sy2[i].onmouseover=function(){
     		son2[this.index].style.display="block";
     	}
     	sy2[i].onmouseout=function(){
     		son2[this.index].style.display="none";
     	}
     }
// -----------主页动图------------------------
    var img=$("a",$(".main3in_box")[0]);
    var lis=$("li",$(".main3in")[0]);
    var win=$(".main3in")[0];
    var btnL=$(".btnL",$(".btn")[0])[0];
    var btnR=$(".btnR",$(".btn")[0])[0];
// --------------------------------------------------------
    lis[0].style.background="red";
// --------------------------------------------------------
    var num=0
    var flag=true;
    var t=setInterval(moveR,2000);
// --------------------------------------------------------
    function moveR(){
        num++;
        if(num==img.length){
          num=0;
        }
        for(var i=0;i<img.length;i++){
            animate(img[i],{opacity:0},800);
            lis[i].style.background="#d1d1d2";
        }
        animate(img[num],{opacity:1},800,function(){
              flag=true;
        });
        lis[num].style.background="red";
    }
// --------------------------------------------------------
    function moveL(){
        num--;
        if(num<0){
          num=img.length-1;
        }
        for(var i=0;i<img.length;i++){
            animate(img[i],{opacity:0},800);
            lis[i].style.background="#d1d1d2";
        }
        animate(img[num],{opacity:1},800,function(){
              flag=true;
        });
        lis[num].style.background="red";
    }
// --------------------------------------------------------
       win.onmouseover=function(){
           clearTimeout(t);
       }
       win.onmouseout=function(){
           t=setInterval(moveR,2000);
       }
// --------------------------------------------------------
       for(var i=0;i<lis.length;i++){
             lis[i].index=i;
             lis[i].onclick=function(){ 
               //所有的图片层级下降 当前的图片层级调高
                   for(var j=0;j<lis.length;j++){
                      // img[j].style.zIndex=0;
                         animate(img[j],{opacity:0},800);
                      lis[j].style.background="#d1d1d2";  
                   }
                      // img[this.index].style.zIndex=1;
                         animate(img[this.index],{opacity:1},800);
                      lis[this.index].style.background="red";
                      //更新unm;
                      num=this.index;
             }

       }
// --------------------------------------------------------
      btnL.onclick=function(){
         if(flag){
             flag=false;
             moveL();}
      }
      btnR.onclick=function(){
         if(flag){
             flag=false;
             moveR();}
      }
// -----------主页后面的节点轮播图------------------------
     var main4=$(".main4",$(".main")[0])[0];
     nodescroll(main4,1);
     function nodescroll(obj,num){

     
     var main4in=$(".main4in",obj)[0];
     var main4_cont=$(".main4_cont",main4in)[0];
     // console.log(main4_cont)
     var div=$("div",main4_cont);
     var widths=parseInt(getStyle(div[0],"width"));
     var main4_btn=$(".main4_btn",obj)[0];
     var btnL2=$(".main4_btnL",main4_btn)[0];
     var btnR2=$(".main4_btnR",main4_btn)[0];

     var len=div.length;
     main4_cont.style.width=widths*len+"px";

     // --------------------------------
     var t1=setInterval(Right1,2000);
     function Right1(){
          animate(main4_cont,{left:-widths*num},function(){
            for (var i = 0; i < num; i++) {   
            
            var firstdiv=firstChild(main4_cont);
            // console.log(firstdiv)
            main4_cont.appendChild(firstdiv);
            main4_cont.style.left=0;
          }
               flag=true;
          });
     }

     function Left1(){
      for (var i = 0; i < num; i++) {
       
          var firstdiv=firstChild(main4_cont);
          // console.log(firstdiv);
          var lastdiv=lastChild(main4_cont);
          console.log(lastdiv);
          main4_cont.insertBefore(lastdiv,firstdiv);
          main4_cont.style.left=-widths*num+"px";
          
        }
        animate(main4_cont,{left:0},function(){
               flag=true;
          })
     }
     // --------------------------------
     obj.onmouseover=function(){
          clearInterval(t1);
     } 
     obj.onmouseout=function(){
          t1=setInterval(Right1,2000);
     }
     // --------------------------------
     btnL2.onclick=function(){
         if(flag){
             flag=false;
             Right1();
         }
     }
     btnR2.onclick=function(){
         // alert(1);
         if(flag){
             // console.log(flag);
             flag=false;
             Left1();
         }
     }

}
// --------------------------------------------------------
     // var main5=$(".main5",$(".main")[0])[0];
     // var main5bottom=$(".main5bottom",main5)[0];
     // var main5bottomr=$(".main5bottomr",main5bottom)[0];
     // var bai=$(".bai",main5bottomr)[0];
     // var dh=$(".dh",bai[0]);
     // var img2=$("img",dh[0])[0];
     var imgdonghua=$(".image");
     // console.log(imgdonghua)
  for(var i=0;i<imgdonghua.length;i++){
     // imgdonghua[i].onmouseover=function(){
     //      animate(imgdonghua[i],{right:30},Tween.Quad.easeInOut);
     // } 
     // imgdonghua[i].onmouseout=function(){
     //      animate(imgdonghua[i],{right:0},Tween.Quad.easeInOut);
     // }
     aa(imgdonghua[i])
  }

function aa(obj){
  obj.onmouseover=function(){
          animate(obj,{left:49},Tween.Quad.easeInOut);
     } 
     obj.onmouseout=function(){
          animate(obj,{left:79},Tween.Quad.easeInOut);
     }
}
     
// --------------------------------------------------------
// ------------------固定定位悬浮框------------------------
    var kefu=$(".kefu")[0];
    var cjwt=$(".cjwt",kefu)[0];
    var tsjy=$(".tsjy",kefu)[0];
    var zxzx=$(".zxzx",kefu)[0];

    cjwt.onmouseover=function(){
          animate(cjwt,{left:10},Tween.Quad.easeInOut);
    }
    cjwt.onmouseout=function(){
          animate(cjwt,{left:70},Tween.Quad.easeInOut);
    }
    tsjy.onmouseover=function(){
          animate(tsjy,{left:10},Tween.Quad.easeInOut);
    }
    tsjy.onmouseout=function(){
          animate(tsjy,{left:70},Tween.Quad.easeInOut);
    }
    zxzx.onmouseover=function(){
          animate(zxzx,{left:10},Tween.Quad.easeInOut);
    }
    zxzx.onmouseout=function(){
          animate(zxzx,{left:70},Tween.Quad.easeInOut);
    }
})

