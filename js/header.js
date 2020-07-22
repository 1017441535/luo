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
