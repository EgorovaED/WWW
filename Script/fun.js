
<script type="text/javascript">

$(document).ready(function (event) {

    var first_img = $('#imageContainer li:first img')
    var imageContainer = $("#imageContainer");
    $("#main-img").attr("src", $(first_img).attr("src"));
    $("html").css("background-image", "url(" + $(first_img).attr("src") + ")");
 
    $("#imageBox img").click(function () {
        $("#main-img").attr("src", $(this).attr("src"));
        $("html").css("background-image", "url(" + $(this).attr("src") + ")");
        $("#main-img").fadeOut(0);
        $("#main-img").fadeIn(1000);     
    });
 
    imageContainer.find('ul').on('mousewheel', function (e, delta) {
        this.scrollLeft -= (delta * 50);
        e.preventDefault();
    });
})


</script>