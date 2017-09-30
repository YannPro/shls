layui.config({
	base : "js/"
}).use(['form','layer','jquery','layedit','laydate','upload'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		layedit = layui.layedit,
		laydate = layui.laydate,
		$ = layui.jquery,
        upload = layui.upload;

	//创建一个编辑器
 	var editIndex = layedit.build('introContent');


     /*$('.submit-btn').click(function () {
/!*        let file = document.getElementsByClassName("newsImg")[0].files[0];
        console.log(file);
        let formData = new FormData();
        formData.append("newsImg", file);//设置key为newsImg,value为上述的File对象*!/
        var news_title = $(".newsTitle").val(),
            news_link = $(".newsLink").val(),
            add_time = $('.newsTime').val(),
            news_content = layedit.getText(editIndex),
            news_img = $('.newsImg').val()
        $.ajax({
            url:"/users/addNews",
            type:"post",
            dataType:"json",
            data:{
                news_title:news_title,
                news_link: news_link,
                add_time: add_time,
                news_img:news_img,
                news_content: news_content
            },
            processData: false,
            contentType : 'multipart/form-data',
            cache:false,
            success:function (data) {
                console.log(data)
            },
            error:function (data) {
                console.log(data)
            }
        })
    })*/
 	/*var addNewsArray = [],addNews;
 	form.on("submit(addNews)",function(data){
 		//是否添加过信息
	 	if(window.sessionStorage.getItem("addNews")){
	 		addNewsArray = JSON.parse(window.sessionStorage.getItem("addNews"));
	 	}
 		addNews = '{"news_title":"'+$(".newsTitle").val()+'",';
 		addNews += '"add_time":"'+$(".newsTime").val()+'",'; //发布时间
 		addNews += '"news_link":"'+$(".newsLink").val()+'",'; //新闻作者
 		addNews += '"news_img":"'+ newsStatus +'"}'; //审核状态
 		addNewsArray.unshift(JSON.parse(addNews));
 		window.sessionStorage.setItem("addNews",JSON.stringify(addNewsArray));
 		//弹出loading
 		var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
        setTimeout(function(){
            top.layer.close(index);
			top.layer.msg("新闻添加成功！");
 			layer.closeAll("iframe");
	 		//刷新父页面
	 		parent.location.reload();
        },500);
 		return false;
 	})
    layui.upload({
        url: ''
        ,unwrap: true //其实就是不向你的input包裹upload组件的ui元素
        ,success: function(res, input){}
    });*/
})
