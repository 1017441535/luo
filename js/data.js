$.ajax({
    type: "get",
    url: "http://localhost/w/website/bannerList",
    success: function(play){
        var lunbo = $(".lunbo");
        play.data.forEach(function(item, index) {
            if(index ==0) {
                var classname = " active";
            }else {
                var classname = "";
            }
            lunbo.html(lunbo.html() + 
                `
                <div class="item${classname}">
                    <a href=""><img src="${item.img}" alt=""></a>
                </div>
                `
            )

        })
        lunbo.find("img").css("height", "400px");
    }
})
$.ajax({
    type: "get",
    url: "http://localhost/w/website/findGoodsTypeList",
    success: function(play){
        var div = $(".subnav-first");
        play.data.forEach(function(item, index){
            div.html(div.html() + `<a href="">${item.name}</a>`)
        })
    }
})
function list(item) {
    var div = `<div class="col-sm-6 col-md-4 col-lg-3 discount">
        <a href="" class="discount-list">
            <div>
                <div><img src="${item.pict_url}" alt=""></div>
                <p class="title">${item.title}</p>
                <p class="pirce">￥ ${item.zk_final_price}</p>
                <p class="people">${item.tk_total_sales}人付款</p>
            </div>
        </a>
    </div>`;
    return div;
}
$.ajax({
    type: "get",
    url: "http://localhost/w/website/findGoodsList?info=9.9",
    success: function(play){
        var data = play.data.tbk_dg_material_optional_response.result_list.map_data;
        var discount = $(".d1");
        data.forEach(function(item, index) {
            if(index < 8) {
                discount.html(discount.html() + list(item));
            }
        })

    }
})
$.ajax({
    type: "get",
    url: "http://localhost/w/website/findGoodsList?info=19.9",
    success: function(play){
        var data = play.data.tbk_dg_material_optional_response.result_list.map_data;
        var discount = $(".d2");
        data.forEach(function(item, index) {
            if(index < 8) {
                discount.html(discount.html() + list(item));
            }
        })

    }
})
$.ajax({
    type: "get",
    url: "http://localhost/w/website/findGoodsList?info=全部商品",
    success: function(play){
        var data = play.data.tbk_dg_material_optional_response.result_list.map_data;
        console.log(data);
        var discount = $(".d3");
        data.forEach(function(item, index) {
            if(index < 20) {
                discount.html(discount.html() + list(item));
            }
        })

    }
})