document.addEventListener("scroll", slide);

window.addEventListener('resize', textTop);

window.addEventListener('load', function(){
  document.getElementById("right").style.boxShadow="0 0 0";
});

function textTop(){
    var textHeight=document.getElementById("text").offsetHeight;
    var textHeightValue="calc(50vh - "+textHeight/2+"px)";
    var pictureHeight=document.getElementById("o1").offsetHeight;
    var pictureWidth=document.getElementById("o1").offsetWidth;
    var pictureTop="calc(50vh - "+pictureHeight/2+"px)";
    var pictureLeft="calc(50% - "+pictureWidth/2+"px)";
    document.getElementById("o1").style.top=pictureTop;
    document.getElementById("o1").style.left=pictureLeft;
    return textHeightValue;
    
    
}

var position = pageYOffset;

function slide(){
    position=pageYOffset;
    width=document.documentElement.scrollWidth;
    /*document.getElementById("value").innerHTML="Pozycja: "+position+", szerokość: "+width+", "+textTop();*/
    if(position==0){
        document.getElementById("right").style.boxShadow="0 0 0";
    }
    else{
         document.getElementById("right").style.boxShadow="0px 0px 60px gray";
    }

    /*if(position>=100){
        document.getElementById("text").style.opacity="1";
    }
    else{
        document.getElementById("text").style.opacity="0";
    }*/
    
    if(4*position>width && 3*position<width){
        var valueTopTextAbsolute="calc("+position+"px + "+textTop()+")";
    }
    if(4*position>width){
        document.getElementById("text").style.position="absolute";
        document.getElementById("text").style.top=valueTopTextAbsolute;
    }
    else{
        document.getElementById("text").style.position="fixed";
        document.getElementById("text").style.top=textTop();
    }
    if(position>=600 && position<=1100){
        document.getElementById("o1").style.opacity=(((9/500)*position+(1-(54/5)))/10);
    }
    else if(position<800){
        document.getElementById("o1").style.opacity="0";
    }
    else{
        document.getElementById("o1").style.opacity="1";
    }
    
        document.getElementById("left").style.left=-position*2+"px";
        document.getElementById("right").style.right=-position*2+"px";
}
