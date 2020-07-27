var getID = localStorage.getItem("id");
getID = JSON.parse(getID);
// console.log(getID)

getID.forEach(function (item, index) {
    $(".tbody").append(shop(item));
});
function shop(get) {
    console.log(get.shopImg);
    var shopCart = `<tr>
        <td><input type="checkbox"></td>
        <td class="shop-img"><img src="${get.shopImg}" alt=""></td>
        <td class="shop-name">${get.title}</td>
        <td class="shop-price">${get.price}</td>
        <td>
            <div>
                <a class="shop-reduce">-</a>
                <span class="number">1</span>
                <a class="shop-add">+</a>
            </div>
        </td>
        <td class="price-num">${get.price}</td>
        <td>删除</td>
    </tr>
`
    return shopCart;
}


$(".shop-reduce").click(function () {
    if ($(this).next().html() > 1) {
        $(this).next().html(+$(this).next().html() - 1)
        $(this).closest("tr").find(".price-num").html((+$(this).next().html() * +$(this).closest("tr").find(".shop-price").html()).toFixed(2));
    }

})
$(".shop-add").click(function () {
    if ($(this).prev().html() < 10) {
        $(this).prev().html(+$(this).prev().html() + 1)
        $(this).closest("tr").find(".price-num").html((+$(this).prev().html() * +$(this).closest("tr").find(".shop-price").html()).toFixed(2));
    }
})
