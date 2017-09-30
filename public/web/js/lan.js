$(document).ready(function(){
		setimg();
		$(window).resize(function(){
			setimg();
    	});
		function setimg(){
			var winW = $(window).width();
			var winH = $(window).height();
			$('.flashbody').css("height",winH-80);
			$('.main').css("height",winH-80);
			$('.pop_list,.bigmap').css("height",winH-80);
			$('.pop_list_btn').css("top",(winH-80)/2-48);
			$('.pop_tab').css("left",winW/2-450);
			$('.pop_tab').css("top",winH/2-245);
			$('.pop_gq').css("left",winW/2-450);
			$('.pop_gq').css("top",winH/2-175);
			$("body,.flashbody").css("width",winW);
			$(".flash embed").css("width",winW);
			$('.pl_con').css("height",winH-151);
			$('.bt_list').css("left",winW/2-415);
			$('.blank_div').css("height",winH-80);
			$('.fbody').css("height",winH);

		}
	$(".logo1").click(function(){
		showDetail2()
	});
	$(".logo3").click(function(){
		showDetail3()
	});
		$(".logo4").click(function(){
		showDetail4()
	});
	$(".logo5").click(function(){
		showDetail5()
	});
		$(".max").click(function(){
		showmax()
	});

	$(".pt_left ul li").click(function(){
		$(this).addClass('pt_left_on');
		$(this).siblings().removeClass('pt_left_on');
		var $dangqian = $(".pt_right > div").eq($(".pt_left ul li").index(this)); //获取到和被点击选项卡顺序相同的内容容器
		$dangqian.css("display","block");
        $dangqian.siblings().css("display","none");
	});
	$(".pl_tab ul li").click(function(){
		$(this).addClass('pl_tab_on');
		$(this).siblings().removeClass('pl_tab_on');
		var $dangqian = $(".pl_c_box > div").eq($(".pl_tab ul li").index(this)); //获取到和被点击选项卡顺序相同的内容容器
		$dangqian.css("display","block");
        $dangqian.siblings().css("display","none");
	});
	$('.pop_list_box ul li').bind('mousemove',function(){
		$(this).addClass('pop_list_on');
	});
	$('.pl_con ul li').bind('mousemove',function(){
		$(this).addClass('pl_btn_on');
	});
	$('.pl_con ul li').bind('mouseout',function(){
		$(this).removeClass('pl_btn_on');
	});
	$('.bt_list span').bind('mousemove',function(){
		$(this).css("background","#484848");
		$(this).find("i").css("display","block");
	});
	$('.bt_list span').bind('mouseout',function(){
		$(this).css("background","#848484");
		$(this).find("i").css("display","none");
	});
	$('.pop_list_btn').toggle(function(){
		$('.pop_list').animate({
			'right':0
		},300,'linear');
	},function(){
		$('.pop_list').animate({
			'right':-259
		},300,'linear');
	});

	//右侧窗口展开接口
	function open_fun(){
		$('.pop_list').fadeIn();
	}

	$(".lavaLamp li").click(function(){
	$(this).siblings().removeClass("tab_on");
	$(this).addClass("tab_on");
	});
	$('.order_list').bind('mousemove',function(){
		$(this).addClass("order_list_on");
	});
	$('.order_list').bind('mouseout',function(){
		$(this).removeClass("order_list_on");
	});

});


//高清弹窗
function showDetail2() {
  var bgObj=document.getElementById("bgDiv");
  var winH = $(window).height();
  bgObj.style.width = document.body.offsetWidth + "px";
  bgObj.style.height = winH + "px";
  bgObj.style.top=-40+"px";
//定义窗口
  var msgObj2=document.getElementById("msgDiv2");
  msgObj2.style.marginTop = -75 +  document.documentElement.scrollTop + "px";
//关闭
  document.getElementById("msgShut2").onclick = function(){
  bgObj.style.display = msgObj2.style.display = "none";
  }
  msgObj2.style.display = bgObj.style.display = "block";
  $("#n1 :hidden");
}
function showDetail3() {
  var bgObj=document.getElementById("bgDiv");
  var winH = $(window).height();
  bgObj.style.width = document.body.offsetWidth + "px";
  bgObj.style.height = winH + "px";
  bgObj.style.top=-40+"px";
//定义窗口
  var msgObj2=document.getElementById("msgDiv3");
  msgObj2.style.marginTop = -75 +  document.documentElement.scrollTop + "px";
//关闭
  document.getElementById("msgShut3").onclick = function(){
  bgObj.style.display = msgObj2.style.display = "none";
  }
  msgObj2.style.display = bgObj.style.display = "block";
  $("#n1 :hidden");
}
function showDetail4() {
  var bgObj=document.getElementById("bgDiv");
  var winH = $(window).height();
  bgObj.style.width = document.body.offsetWidth + "px";
  bgObj.style.height = winH + "px";
  bgObj.style.top=-40+"px";
//定义窗口
  var msgObj2=document.getElementById("msgDiv4");
  msgObj2.style.marginTop = -75 +  document.documentElement.scrollTop + "px";
//关闭
  document.getElementById("msgShut4").onclick = function(){
  bgObj.style.display = msgObj2.style.display = "none";
  }
  msgObj2.style.display = bgObj.style.display = "block";
  $("#n1 :hidden");
}
function showDetail5() {
  var bgObj=document.getElementById("bgDiv");
  var winH = $(window).height();
  bgObj.style.width = document.body.offsetWidth + "px";
  bgObj.style.height = winH + "px";
  bgObj.style.top=-40+"px";
//定义窗口
  var msgObj2=document.getElementById("msgDiv5");
  msgObj2.style.marginTop = -75 +  document.documentElement.scrollTop + "px";
//关闭
  document.getElementById("msgShut5").onclick = function(){
  bgObj.style.display = msgObj2.style.display = "none";
  $("#n1 :hidden");
  }
  msgObj2.style.display = bgObj.style.display = "block";
}$(selector).hide(speed,callback)
function showmax() {
  var bgObj=document.getElementById("bgDiv");
  var winH = $(window).height();
  bgObj.style.width = document.body.offsetWidth + "px";
  bgObj.style.height = winH + "px";
  bgObj.style.top=-40+"px";
//定义窗口
  var msgObj2=document.getElementById("msgDiv5");
  msgObj2.style.marginTop = -75 +  document.documentElement.scrollTop + "px";
//关闭
  document.getElementById("msgShut5").onclick = function(){
  bgObj.style.display = msgObj2.style.display = "none";
  }
  msgObj2.style.display = bgObj.style.display = "block";
}$(selector).hide(speed,callback)
