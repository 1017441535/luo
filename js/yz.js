// 滑动验证
$('#mpanel1').slideVerify({
    type: 1, //类型
    vOffset: 5, //误差量，根据需求自行调整
    barSize: {
        width: '80%',
        height: '40px',
    },
    ready: function () { },
    success: function () {
        // alert('验证成功!');
        //......后续操作
    },
    error: function () {
        //		        	alert('验证失败！');
    }

});

var yhname = false;
var password = false;
var phone = false;
var email = false;
//用户名正则，4到16位（字母，数字，下划线，减号）
$(".yhm").blur(function () {
    var reg = /^[a-zA-Z0-9_-]{4,16}$/;
    if (reg.test($(".yhm").val())) {
        $(".sign-yhm").css("display", "block");
        $(".sign-yhm").html("您输入的用户名正确！");
        yhname = true;
    } else {
        $(".sign-yhm").css("display", "block");
        $(".sign-yhm").html("您输入的用户名有误！");
        yhname = false;
    }
})
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
$(".mima").blur(function () {
    var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if (reg.test($(".mima").val())) {
        $(".sign-mima").css("display", "block");
        $(".sign-mima").html("您输入的密码正确！");
        password = true;
    } else {
        $(".sign-mima").css("display", "block");
        $(".sign-mima").html("您输入的密码有误！");
        password = false;
    }
})
// 手机号码正则
$(".phone").blur(function () {
    var reg = /^1[34578]\d{9}$/;
    if (reg.test($(".phone").val())) {
        $(".sign-phone").css("display", "block");
        $(".sign-phone").html("您输入的手机号正确！");
        phone = true;
    } else {
        $(".sign-phone").css("display", "block");
        $(".sign-phone").html("您输入的手机号有误！");
        phone = false
    }
})

// 邮箱正则
$(".email").blur(function () {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test($(".email").val())) {
        $(".sign-email").css("display", "block");
        $(".sign-email").html("您输入的邮箱号正确！");
        email = true;
    } else {
        $(".sign-email").css("display", "block");
        $(".sign-email").html("您输入的邮箱号有误！");
        email = false;
    }
})
// 注册
$(".zc").click(function () {
    if (yhname && password && phone && email) {
        $.ajax({
            type: "post",
            url: "http://192.168.1.103:3000/users/register",
            data: {
                username: $(".yhm").val(),
                password: $(".mima").val(),
                phone: $(".phone").val(),
                email: $(".email").val()
            },
            success: function (data) {
                if (data.state == 0) {
                    alert(data.msg)  //登录成功
                } else {
                    alert(data.msg)  //登录失败
                }
            }
        })
    }
})
// 登录
$(".dl").click(function () {
    if (yhname && password) {
        $.ajax({
            type: "post",
            url: "http://192.168.1.103:3000/users/login",
            data: {
                username: $(".yhm").val(),
                password: $(".mima").val()
            },
            success: function (data1) {
                if (data1.state == 0) {
                    alert(data1.msg);  //登录成功
                    console.log(data1)
                    localStorage.setItem("token", data1.token);
                    
                    $.ajax({
                        type: "get", 
                        url: "http://192.168.1.103:3000/users/userinfo",
                        data: {
                            username: $(".yhm").val(),
                            token: data1.token
                        },
                        success: function(data2) {
                            localStorage.setItem("userinfo", JSON.stringify(data2.userinfo));
                            location.href = "./index.html";
                        }
                    })
                } else {
                    alert(data1.msg);  //登录失败
                }
            }
        })
    }
})