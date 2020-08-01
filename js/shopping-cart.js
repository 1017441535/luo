var getID = localStorage.getItem("id");
getID = JSON.parse(getID);
// console.log(getID)

getID.forEach(function (item, index) {
    $(".tbody").append(shop(item));
});
function shop(get) {
    // console.log(get.shopImg);
    var shopCart = `<tr>
        <td><input type="checkbox" class="select"></td>
        <td class="shop-img"><img src="${get.shopImg}" alt=""></td>
        <td class="shop-name">${get.title}</td>
        <td class="shop-price">${get.price}</td>
        <td>
            <div>
                <a class="shop-reduce">-</a>
                <span class="number">${get.num}</span>
                <a class="shop-add">+</a>
            </div>
        </td>
        <td class="price-num">${+get.price * get.num} </td>
        <td class="delete"><span>删除</span></td>
    </tr>
`
    return shopCart;
}


$(".shop-reduce").click(function () {
    if ($(this).next().html() > 1) {
        $(this).next().html(+$(this).next().html() - 1)
        $(this).closest("tr").find(".price-num").html((+$(this).next().html() * +$(this).closest("tr").find(".shop-price").html()).toFixed(2));
        var arr = JSON.parse(localStorage.getItem("id"));
        var index = $(this).closest("tr").index();
        arr[index].num -= 1;
        arr = JSON.stringify(arr)
        localStorage.setItem("id",arr)
    }
   
    showNum()
})
$(".shop-add").click(function () {
    if ($(this).prev().html() < 10) {
        $(this).prev().html(+$(this).prev().html() + 1)
        $(this).closest("tr").find(".price-num").html((+$(this).prev().html() * +$(this).closest("tr").find(".shop-price").html()).toFixed(2));
        var arr = JSON.parse(localStorage.getItem("id"));
        var index = $(this).closest("tr").index();
        arr[index].num += 1;
        arr = JSON.stringify(arr)
        localStorage.setItem("id",arr)
    }
    showNum()
})
$(".delete").click(function() {
    var arr = JSON.parse(localStorage.getItem("id"));
    var index = $(this).closest("tr").index();
    arr.splice(index, 1);
    arr = JSON.stringify(arr)
    localStorage.setItem("id",arr)
    console.log(arr)
    $(this).closest("tr").remove();
    showNum()
})
$(".select-all").click(function() {
    if($(".select-all").prop("checked")){
        $(".select").prop("checked",true)
    }else{
        $(".select").prop("checked",false)
    }
    showNum()
})
$(".select").click(function(){
    showNum()
})
function showNum() {
    var num = 0;
    $(".select").each(function(index,item){
        if($(item).prop("checked")){
          num += +$(item).closest("tr").find(".price-num").html();
        }
    })
    $(".all-price").html("￥ " + num);
}