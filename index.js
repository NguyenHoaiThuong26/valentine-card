$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
            $(".letter").css("height", "130%");
            $(".letter").css("top", "-30%");
             // Reset chiều cao của thư
            
    }
    function close() {
        envelope.addClass("close").removeClass("open");
        $(".letter").css("height", "95%"); 
        $(".letter").css("top", "5%");
        
    }

})

