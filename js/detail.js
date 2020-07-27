var imgID = decodeURIComponent(location.search);
var imgID = imgID.split("=")[1];
// localStorage.clear()
var iimg;
function image() {
    $.ajax({
        type: "get",
        url: "http://localhost/w/website/findGoodsDetail?info=" + imgID,
        success: function (image) {
            var text = image.data.detail.tbk_item_info_get_response.results.n_tbk_item[0];
            // console.log(image)
            $(".detail-img").attr("src", text.pict_url);
            $(".s-img1").attr("src", text.small_images.string[0]);
            $(".s-img2").attr("src", text.small_images.string[1]);
            $(".s-img3").attr("src", text.small_images.string[2]);
            $(".s-img4").attr("src", text.small_images.string[3]);
            
            $(".det-title").html(text.title);
            $(".cat-leaf-name").html(text.cat_leaf_name);
            $(".cat-name").html(text.cat_name);
            $(".nick").html(text.nick);
            $(".provcity").html(text.provcity);
            $(".volume").html(text.volume);
            $(".reserve_price").html("￥ " + text.reserve_price);
            $(".now-price").html("￥ " + text.zk_final_price);

            $(".button1").click(function() {
                var arr = JSON.parse(localStorage.getItem("id"))||[];
                var obj = {
                    id: imgID,
                    shopImg: text.pict_url,
                    title: text.title,
                    price: text.zk_final_price
                }
                arr.push(obj)
                localStorage.setItem("id",JSON.stringify(arr));
                location.href = "./shopping-cart.html";
            })

            $(function () {
                a = $(".xqbottom .left .a")
                var drag = $(".xqbottom .w .left .drag")
                var jing = $(".xqbottom .w .jing")
                var b1 = $(".xqbottom .b1")
                iimg = $(".jing img")
                var maxW = b1.width() - drag.width();
                var maxH = b1.height() - drag.height();
                b1.mouseenter(function () {
                    drag.css("opacity", "1")
                    jing.css("opacity", "1")
                    jing.css("z-index", "99")
                    b1.mousemove(function (e) {
                        var x = e.pageX - b1.offset().left - drag.width() / 2;
                        x = x < 0 ? 0 : x;
                        x = x > maxW ? maxW : x;
                        a = (iimg.width() - jing.width()) / maxW;

                        drag.css("left", x + "px");
                        iimg.css("marginLeft", -a * x + "px");
                        var y = e.pageY - b1.offset().top - drag.height() / 2;
                        y = y < 0 ? 0 : y;
                        y = y > maxH ? maxH : y;
                        b = (iimg.height() - jing.height()) / maxH;
                        drag.css("top", y + "px");
                        iimg.css("marginTop", -b * y + "px");
                    })
                })
                b1.mouseleave(function () {
                    drag.css("opacity", "0")
                    jing.css("opacity", "0")
                    jing.css("z-index", "-1")
                })
                a.each(function (index, item) {
                    $(this).mouseenter(function () {
                        var img1 = $(".b1 .b").css("background-image")
                        $(item).css("border", "1px solid red").siblings().css("border", "none")
                        b1.find(".b").css("background-image", $(item).css("background-image"))
                        $(item).css("background-image", img1)
                        var img2 = b1.find(".b").css("background-image")
                        img2 = img2.split('"')[1]
                        iimg.attr("src", img2)
                    })
                })
            })
        }
    })
}
$(".group").html(iimg);
image();
$(".pro-det > img").click(function () {
    $(".detail-img").attr("src", $(this).attr("src"));
})

