    var imgData={
//        设置6张图的z-index值
        setImg:function(){
            $("#ul_list li").each(function(index){
                $(this).css({"zIndex":$("#ul_list li").length-index-1})
            })
        },
 
        //创建src为 即将淡出图片的层
        domCreate:function(src,res){
            switch (res){
                case 1:
                    var width=1000,height=500;
                    var every_height=25;
                    var len=height/every_height;  //创建个数为 len ,高度为 every_height的片片图
                    //创建片片图并添加样式
                    for(var i=0;i<len;i++){
                        var $_every=$("<div></div>");
                        $_every.addClass("every");
                        $_every.css({
                            width:width+"px",
                            height:every_height+"px",
                            zIndex:10,
                            position:"absolute",
                            left:"0px",
                            top:i*every_height+"px",
                            backgroundImage:"url("+src+")",
                            backgroundSize:"1000px 500px",
                            backgroundPosition:"0px "+(-i*every_height)+"px"
                        })
                        $("#block").append($_every);
                    }
                    break;
                case 2:
                    var width=1000,height=500;
                    var every_width=25;
                    var len=width/every_width;    //创建个数为 len ,宽度为 every_width的片片图
                    //创建片片图并添加样式
                    for(var i=0;i<len;i++){
                        var $_every=$("<div></div>");
                        $_every.addClass("every");
                        $_every.css({
                            width:every_width+"px",
                            height:height+"px",
                            zIndex:10,
                            position:"absolute",
                            left:i*every_width+"px",
                            top:"0px",
                            backgroundImage:"url("+src+")",
                            backgroundSize:"1000px 500px",
                            backgroundPosition:(-i*every_width)+"px 0px"
                        })
                        $("#block").append($_every);
                    }
                    break;
                case 3:
                    var width=1000,height=500;
                    var every_width=25;
                    var len=width/every_width;    //创建个数为 len ,宽度为 every_width的片片图
                    //创建片片图并添加样式
                    for(var i=0;i<len;i++){
                        var $_every=$("<div></div>");
                        $_every.addClass("every");
                        $_every.css({
                            width:every_width+"px",
                            height:height+"px",
                            zIndex:10,
                            position:"absolute",
                            left:i*every_width+"px",
                            top:"0px",
                            backgroundImage:"url("+src+")",
                            backgroundSize:"1000px 500px",
                            backgroundPosition:(-i*every_width)+"px 0px"
                        })
                        $("#block").append($_every);
                    }
                    break;
                case 4:
                    var width=1000,height=1000;
                    var every_width=100,every_height=100;
                    var len_width=width/every_width,len_height=height/every_height;  //创建个数为len_width*len_height,宽为every_width,高为every_height的圆片片
                    for(var i=0;i<len_width*len_height;i++){
                        var $_every=$("<div></div>");
                        $_every.addClass("every");
                        $_every.css({
                            width:every_width+"px",
                            height:every_height+"px",
                            zIndex:10,
                            position:"absolute",
                            left:(i%len_width*every_width)+"px",
                            top:(Math.floor(i/len_height)*every_height)+"px",
                            backgroundImage:"url("+src+")",
                            backgroundSize:"1000px 500px",
                            backgroundPosition:(i%len_width*every_width)+ "px "+(Math.floor(i/len_height)*every_height)+"px"
                        })
                        $("#block").append($_every);
                    }
                    break;
            }
 
        },
 
        //创建层动画特效
        domAnimate:function(res){
            switch (res){
                case 1:
                        //横片片向两边移动
                    $(".every").each(function(index){
                        if(index%2==0){
                            $(this).animate({
                                "left":"-1000px"
                            },1000,"linear",function(){
                                $(this).remove();
                            })
                        }
                        else{
                            $(this).animate({
                                "left":"1000px"
                            },1000,"linear",function(){
                                $(this).remove();
                            })
                        }
                    })
                    break;
                case 2:
                    //竖片片宽度变小
                    $(".every").each(function(){
                        $(this).animate({
                            "width":0
                        },1000,"linear",function(){
                            $(this).remove();
                        })
                    })
                    break;
                case 3:
                    $(".every").each(function(index){
                        $(this).animate({
                            "top":(Math.sin(index)*200+100)+"px",
                            "height":(500-2*(Math.sin(index)*200+100))+"px",
                            "opacity":"0"
                        },1000,"linear",function(){
                            $(this).remove();
                        })
                    })
                    break;
                case 4:
                    $(".every").each(function(){
                        $(this).animate({
                            "top":(Math.sin(Math.random()*2*Math.PI)*500)+"px",
                            "left":(Math.sin(Math.random()*2*Math.PI)*1000)+"px",
                            "opacity":"0"
                        },1000,"linear",function(){
                            $(this).remove();
                        })
                    })
                    break;
            }
        },
 
        //图片淡入淡出
        bannerImgAnimate:function(){
            var src=null;
            $("#ul_list li").each(function(){
                $(this).css("zIndex",parseInt($(this).css("zIndex"))+1);
                if($(this).css("zIndex")==$("#ul_list li").length){
                    src=$(this).children("img").attr("src");
                    $(this).fadeOut(1000,function(){
                        $(this).css({
                            "zIndex":0
                        })
                    })
                }
                else if($(this).css("zIndex")==$("#ul_list li").length-1){
                    $(this).fadeIn(1000);
                }
            });
            var random_num=Math.ceil(Math.random()*4);
            imgData.domCreate(src,random_num);
            imgData.domAnimate(random_num);
        }
    }
 
    $(function(){
        imgData.setImg();
        $("#ul_list li").eq(0).show();
        var time=setInterval(imgData.bannerImgAnimate,3000);
    })