$("button").click(function() {
            var song = new Audio("song1.mp4");
            var targetClass = $(this).attr("class"); // Get clicked button's class
            $(".first, .eng, .span").hide(); // Hide all elements initially
        if (targetClass === "English") {
            $(".eng").show(); // Show element with class "eng"
            $("button").css("display","none");
            $("img").toggle("imgStyle");
            song.play();
        } else{
            $(".span").show(); // Show element with class "span"
            $("button").css("display","none");
            $("img").toggle("imgStyle");
            song.play();
        }
});
