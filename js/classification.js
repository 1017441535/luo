var info = decodeURIComponent(location.search);
var info = info.split("=")[1];
var index = 1;
function http() {
    $.ajax({
        type: "get",
        url: "http://localhost/w/website/findGoodsList?info=" + info + "&pageNo=" + index,
        success: function (play) {
            var data = play.data.tbk_dg_material_optional_response.result_list.map_data;
            var discount = $(".d4");
            discount.empty();
            data.forEach(function (item, index) {
                discount.html(discount.html() + list(item));
            })
        }
    })
}
$(".group").html(info);
http();

// 页面点击

$(".page > i").click(function () {
    var pagenum = $(this).html();
    index = $(this).index();
    $(".page > i").css({
        color: "#cc1c38",
        backgroundColor: "#fff"
    })
    $(this).css({
        color: "#fff",
        backgroundColor: "#cc1c38"
    });
    http();
})

// 上一页
$(".page-left").click(function () {
    if (index > 1) {
        index--;

        $(".page > i").css({
            color: "#cc1c38",
            backgroundColor: "#fff"
        })
        $($(".page > i")[index-1]).css({
            color: "#fff",
            backgroundColor: "#cc1c38"
        });
        http();
    }
})
$(".page-right").click(function () {
    if (index < 5) {
        index++;
        $(".page > i").css({
            color: "#cc1c38",
            backgroundColor: "#fff"
        })
        $($(".page > i")[index-1]).css({
            color: "#fff",
            backgroundColor: "#cc1c38"
        });
        http();
    }
})