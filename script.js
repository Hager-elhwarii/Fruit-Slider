 $(".back").hide();
        $(".img").click(function(){
            $(".back").show();
            $(".back img").attr("src",$(this).attr("src"));

        })
        $(".back").click(function(e){
            if(this===e.target)
            $(this).hide();
        })