var flashvars = {};
var params = {};
params.menu = "false";
params.quality = "high";
params.allowfullscreen = "true";
params.allowScriptAccess = "always";
params.allowNetworking = "all";
var UA = navigator.userAgent.toLowerCase();

if((UA.indexOf('360ee')>-1)||(UA.indexOf('360se')>-1)||(UA.indexOf('se')>-1)||(UA.indexOf('aoyou')>-1)||(UA.indexOf('theworld')>-1)|| (UA.indexOf('worldchrome')>-1)||(UA.indexOf('greenbrowser')>-1)||(UA.indexOf('qqbrowser')>-1)||(UA.indexOf('baidu')>-1)||($.browser.msie))
{
	params.wmode = "transparent";
	
}else{
	params.wmode = "transparent"; 
}
var list = $('.pl_con'),
first = 0,
main = list.eq(0),
qj = list.eq(1),
hd = list.eq(2),
thumblist = $('.bt_list'),
flagid = '',
bind = 0,
change = 1,
initflash = 'bys/FlashHDMainBys.swf',
maplists = null,
title = list.find('.pl_con_tit'),
description = list.find('.pl_con_word'),
_item = function(id) {
	var itemjson = eval('database.'+id);
	var firstqj = '';
	if(itemjson) {
		_settitle(itemjson.name);
		_setdescription(itemjson.description);
		if(itemjson.panorama){
			qj.empty();
			$.each(itemjson.panorama, function(k,v) {	
				_setpanorama(v.id,k);
				if(!k){firstqj = v.id}
			});
		};
		if(itemjson.hd){
			hd.empty();
			$.each(itemjson.hd, function(k,v) {	
				_sethd(v.id,k);
			});
		};
		_orderbtn(itemjson.yuding);
		_showslide();
		_showfloatflash(firstqj);
		_manyoubtn(firstqj);
	}
},
_settitle = function(name){
	title.html(name ? name : 'none');
},
_setdescription = function(des){
	description.html(des?des:'none');
},
_setpanorama = function(id,k){
	var unit = eval('panorama.'+id);		
	if(unit){
		var unithtml = $('<p/>').addClass('list').append((!k)?'<i></i>':'').append($('<img/>').attr('src',unit.thumb).attr('alt',unit.name).attr('onClick','javascript:Passpararmeter("2|'+id+'")')).appendTo(qj);
	}else{
		alert('panorama data is '+k+' empty!');
	};
},
_sethd = function(id,k){
	var unit = eval('hdes.'+id);	
	if(unit){
		var unithtml = $('<p/>').addClass('list').append($('<img/>').attr('src',unit.thumb).attr('onClick','javascript:Passpararmeter("3|'+id+'")')).appendTo(hd);
	}else{
		alert('hdes picture data '+k+' is empty!');
	};
},
_setthumb = function(hot,thumb,title){
	var unithtml = $('<span/>').addClass('list').append($('<a/>').append($('<img/>').attr('title',title?title:'').attr('src',thumb).attr('onClick','javascript:Passpararmeter("5|'+hot+'")'))).append($('<i/>').html(title?title:'')).appendTo(thumblist);
},
_setflash = function(url,xml){
	flashvars.xml = xml;
	flashvars.hotxml = "";
	flashvars.pany = "";
	flashvars.zzzxml="";
	if((UA.indexOf('360ee')>-1)||(UA.indexOf('360se')>-1)||(UA.indexOf('se')>-1)||(UA.indexOf('aoyou')>-1)||(UA.indexOf('theworld')>-1)|| (UA.indexOf('worldchrome')>-1)||(UA.indexOf('greenbrowser')>-1)||(UA.indexOf('qqbrowser')>-1)||(UA.indexOf('baidu')>-1)||($.browser.msie))
		{
	params.wmode = "transparent"; 
	}else{
		params.wmode = "transparent"; 
	}
	if(url){
		swfobject.embedSWF(url,'OuWeiHDPlayer', "100%", "100%", "10.1", "expressInstall.swf", flashvars, params);//切换播放器
	}else{
		alert('flash url is none');
	};
},
_setmainflash = function(id){
	document.getElementById("mainOuWeiHDPlayer").jssethotxml("bys/hot3.xml");//加载新的热点配置
	document.getElementById("mainOuWeiHDPlayer").jsshowall();
	maplists = hot.map?hot.map:null;
},
_orderbtn = function(i){
	if(!$('.yuding').length){
		$('<a/>').addClass('yuding').html('\u9884\u8ba2').appendTo($('.pl_con').eq(0)).hide();
		_setcenter();
		$('.yuding').bind('click',function(){
			_showyuding();
		});
		$('.or_close').bind('click',function(){
			_showyuding();
		});
		$('.price_submit').bind('click',function(){
			_yudingsuc();
		});
		$('.orderclose').bind('click',function(){
			$('.ordersuc').hide();
			$('.flash-pop-bg').hide();
			$(window).unbind('resize',function(){
				_setcenter();
			});
		});
	};
	if(parseInt(i)){
		$('.yuding').show();
	}else{
		$('.yuding').hide();
	}
},
_showyuding = function(){
	if($('.order').is(':hidden')){
		$('.order').fadeIn('500','linear');
		_setpopbg();
		$(window).bind('resize',function(){
			_setcenter();
		});
	}else{
		$('.order').hide();
		$('.flash-pop-bg').hide();
		$(window).unbind('resize',function(){
			_setcenter();
		});
	}
},
_yudingsuc = function(){
	if(!$('input[name="icontact"]').val()||!$('input[name="iphone"]').val()||!$('input[name="itime"]').val()){
		alert('请完善预定信息！')
	}else{
		$('.order').hide();
		$('.odinfo .time').html($('input[name="itime"]').val());
		$('.odinfo .link').html($('input[name="icontact"]').val());
		$('.ordersuc').fadeIn('500','linear');
		_setpopbg();
		$(window).bind('resize',function(){
			_setcenter();
		});
	}
},
_showpark = function(){
	if($('.park').is(':hidden')){
		$('.park').fadeIn('500','linear');
		_setpopbg();
		$(window).bind('resize',function(){
			_setcenter();
		});
	}else{
		$('.park').hide();
		$('.flash-pop-bg').hide();
		$(window).unbind('resize',function(){
			_setcenter();
		});
	}
},
_setpark = function(){
	_setcenter();
	_showpark();
},
_setcenter = function(){
	if($('.order').length){
		var winW = $(window).width();
		var winH = $(window).height();
		$('.order').css({
			'left':((winW-parseInt($('.order').width()))/2)?((winW-parseInt($('.order').width()))/2):0,
			'top':((winH-parseInt($('.order').height()))/2)?((winH-parseInt($('.order').height()))/2):0
		});
	};
	if($('.park').length){
		var winW = $(window).width();
		var winH = $(window).height();
		$('.park').css({
			'left':((winW-parseInt($('.park').width()))/2)?((winW-parseInt($('.park').width()))/2):0,
			'top':((winH-parseInt($('.park').height()))/2)?((winH-parseInt($('.park').height()))/2):0
		});
	};
	if($('.ordersuc').length){
		var winW = $(window).width();
		var winH = $(window).height();
		$('.ordersuc').css({
			'left':((winW-parseInt($('.ordersuc').width()))/2)?((winW-parseInt($('.ordersuc').width()))/2):0,
			'top':((winH-parseInt($('.ordersuc').height()))/2)?((winH-parseInt($('.ordersuc').height()))/2):0
		});
	};
},
_setpopbg = function(){
	if(!$('.flash-pop-bg').length){
		$('<div/>').addClass('flash-pop-bg').hide().appendTo('.mdiv').fadeIn('500','easein');	
	}else{
		$('.flash-pop-bg').fadeIn('500','easein');
	}
},
_manyoubtn = function(id){
	$('.manyou').attr('onClick','javascript:Passpararmeter("2|'+id+'")');
},
_zoomhotpots = function(id){
	document.getElementById("mainOuWeiHDPlayer").jstohotpos(id);//定位到热点
},
_sethotpots = function(id,x){
	var unit = eval('hotes.'+id);
	if(unit){
		if(change != x){
			flashvars.xml = unit.footer;
			flashvars.hotxml = unit.url;
			params.wmode = "transparent"; 
			if(unit.pany){
				flashvars.pany = unit.pany;
			}
			swfobject.embedSWF(initflash,'mainOuWeiHDPlayer', "100%", "100%", "10.1", "expressInstall.swf", flashvars, params);//切换播放器
			change = x;
		}else if(first){
			document.getElementById("mainOuWeiHDPlayer").jssethotxml(unit.url);
			document.getElementById("mainOuWeiHDPlayer").jsshowall();	
		}
		first++;
		if(unit.thumb){
			thumblist.empty();
			$.each(unit.thumb, function(k,v){
				_setthumb(v.id,v.thumb,v.name);
			});
		};
	}else{
		alert('error')
	}
	_hideslide();
	_hideleftflash();
	flagid = "";
	$('.blank_div').hide();
},
_setpophtml = function(){
	$(".flash-pop").css("display","block");
	$(".popclose").css("display","block");
	_showleftflash();
},
_setposition = function(){
	if($('.flash-pop').length){
		var winW = $(window).width();
		var winH = $(window).height();
		$('.flash-pop').css({
			'width':(winW-259),
			'height':(winH-80)
		});
	}
},
_hideleftflash = function(){
	$('.flash-pop').animate({'left':-($('.flash-pop').width()+500)},'300','linear');
	$('#OuWeiHDPlayer').attr('data','');
	$(".popclose").css("display","none");
},
_showleftflash = function(){
	$('.flash-pop').animate({'left':0},'300','linear');
},
_hideslide = function(){
	$('.pop_list').animate({
		'right':-259
	},300,'linear');
},
_showslide = function(){
	$('.pop_list').animate({
		'right':0
	},300,'linear');
},
_showfloatflash = function(id){
	var json = eval('panorama.'+id);
	_setpophtml();
	_setposition();
	_slidemenuinit();
	if(!bind){
		_bindresize();
	};
	bind++;
	if(flagid != id){
		_setflash(json.url,json.xml);
		flagid = id;
	}
},
_showhd = function(id){
	var json = eval('hdes.'+id);
	if(flagid != id){
		_setflash(json.url,json.xml);
		flagid = id;
	}
};
_showhpa = function(id){
	var json = eval('panorama.'+id);
	if(flagid != id){
		_setflash(json.url,json.xml);
		flagid = id;
	}
};
_bindresize = function(id){
	$(window).bind('resize',function(){
		_setposition();
	});
},
_slidemenuinit = function(){
	$('.pl_tab').find('li').removeClass('pl_tab_on').eq(0).addClass('pl_tab_on');
	$('.pl_con').hide().eq(0).fadeIn('300','linear');
};
$('body').on('click','.popclose',function(){
	var fo = $(this).parent().parent();
	_hideleftflash();
	_hideslide();
	document.getElementById("mainOuWeiHDPlayer").jsshowall();
	$(window).unbind('resize',function(){
		_setposition();
	});
	bind = 0;
	flagid = "";
});
$('body').on('click','.jiejing',function(){
	$('.blank_div').toggle();
	_hideslide();
	_hideleftflash();
	flagid = "";
});
function Passpararmeter(s){
	var para = s.split('|');
	if(para[0] == 2){//全景
		_showhpa(para[1]);
	}else if(para[0] == 3){//高清
		_showhd(para[1]);
	}else if(para[0] == 0){//导航参数
		_sethotpots(para[1],para[2]);
	}else if(para[0] == 5){//缩放
		_zoomhotpots(para[1]);
	}else if(para[0] == 'h6'){//订购
		_showyuding();
	}else if(para[0] == 7){//停车场
		_setpark();
	}else{//默认调用
		if(flagid != para[1]){
			_item(para[1]);
		}	
	}
}
$('.parkclose').bind('click',function(){
		_showpark();
	});
function Initbigmap(){
	_setbigmap();
}
Passpararmeter('0|ht01|1');