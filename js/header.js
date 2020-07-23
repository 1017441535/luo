$(function () {
    if (localStorage.getItem("token")) {
        $(".dlzc").css("display", "none");
        $(".tcdl").css("display", "inline");
        var nameTxt = JSON.parse(localStorage.getItem("userinfo")).username;
        $(".dlcg").html(nameTxt);
    }
    $(".tcdl").click(function () {
        localStorage.clear();
        $(".tcdl").css("display", "none");
        $(".dlzc").css("display", "inline");
    })

})
$(".search-top > span").click(function() {
    var sousuo = $(".search-top > input").val();
    $.ajax({
        type: "get",
        url: "http://localhost/w/website/findGoodsList?info=" + sousuo,
        success: function(play){
            location.href = "./classification.html?info=" + sousuo;
        }
    })
    // $(".search-top > inpt").value()
})