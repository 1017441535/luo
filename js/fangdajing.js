var div = document.getElementsByClassName("div")[0];
var img = document.getElementsByClassName("img")[0];
var box = document.getElementsByClassName("box")[0];
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var left1 = document.getElementsByClassName("pro-box")[0].offsetLeft;
var top1 = document.getElementsByClassName("pro-box")[0].offsetTop;
// console.log(left1)
var a = 0;
var b = 0;
div.style.display = "none";
img2.style.display = "none";
img.onmouseenter = function (e) {
    a = e.clientX - div.offsetLeft;
    b = e.clientY - div.offsetTop;
    div.style.display = "block";
    img2.style.display = "block";
    
    var img2ml = box.offsetWidth - img2.offsetWidth;
    var img1ml = box.offsetHeight - img2.offsetHeight;
console.log(img)
    img.onmousemove = function (e) {
        console.log(1)
        // 左右
        var divX = div.offsetWidth / 2;
        var divY = div.offsetHeight / 2;
        div.style.left = e.clientX  - divX - left1 + "px";
        var ml = parseInt(div.style.left);
        var mr = img1.offsetWidth - div.offsetWidth;
        ml = ml < 0 ? 0 : ml;
        ml = ml > mr ? mr : ml;
        div.style.left = ml + "px";
        // 上下
        var aaa = document.documentElement.scrollTop;
        div.style.top = e.clientY - divY - top1 + aaa + "px";
        var mt = parseInt(div.style.top);
        var mb = img1.offsetHeight - div.offsetHeight;
        mt = mt < 0 ? 0 : mt;
        mt = mt > mb ? mb : mt;
        div.style.top = mt + "px";
        img2.style.left = ml * (img2ml / mr) + "px";
        img2.style.top = mt * (img1ml / mb) + "px";
    }
}
document.onmouseup = function () {
    this.onmousemove = null;
}
img.onmouseleave = function () {
    div.style.display = "none";
    img2.style.display = "none";
}