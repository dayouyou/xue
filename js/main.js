
$(function(){
    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $("#main-ad>.carousel-inner>.item").each(function(i,ele){
            var $item = $(ele);
            var imgSrc = isSmallScreen?$item.data("image-xs"):$item.data("image-lg");

            if(isSmallScreen){
                $item.html("<img src='"+imgSrc+"' alt='' />");
            }else{
                $item.empty();
                $item.css("backgroundImage","url('"+imgSrc+"')");
            }
        });


    }
    $(window).on("resize",resize).trigger('resize');



    var $ulWidth = $(".nav-tabs");
    var width = 30;
    $(".nav-tabs").children().each(function(i,ele){
        width += ele.clientWidth;
    });
    if(width > $(window).width()){
        $ulWidth
            .css("width",width)
            .parent().css("overflow-x","scroll");
    }

    var $newtit = $(".new-tit");
    $("#news .nav-pills a").on("click",function(){
        var $this = $(this);
        var title = $this.data("title");
        $newtit.text(title);
    });

    //1.获取手指在轮播图元素上的一个滑动方向（左右）
        var $carousels = $(".carousel");
        var startX,endX;
        var offset = 50;
        $carousels.on("touchstart",function(e){
            startX = e.originalEvent.touches[0].clientX;
        });
        $carousels.on("touchmove",function(e){
            endX = e.originalEvent.touches[0].clientX;
        });
        $carousels.on("touchend",function(){
            var distance = Math.abs(startX-endX);
            if(distance > offset){
                $(this).carousel(startX > endX?"next":"prev");
            }
        });
    //2.根据获得的方向选择上一张或下一张

});