layui.config({
    base : "../../js/"
}).use(['form','layer'],function(){
        form = layui.form(),
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery;

//删除单张图片
    $("body").on("click",".img_del",function(){
        var _this = $(this);
        layer.confirm('确定删除图片"'+_this.parent().siblings('img').attr("title")+'"吗？',{icon:3, title:'提示信息'},function(index){
            $.ajax({
                url : "/users/delImage",
                type : "post",
                dataType : "json",
                data: {
                    img_id: _this.attr("data-id")
                },
                success: function (data) {
                    if(data.statusCode === 0){
                        layer.msg("删除成功");
                    }
                }
            });
            _this.parents("li").hide(1000);
            setTimeout(function(){_this.parents("li").remove();},950);
            layer.close(index);
        });
    });
    $("body").on("click",".img_update",function() {
        let _this = $(this);
        let id = _this.attr('data-id');
        let img_id = _this.attr('data-id');
        let img_src = _this.siblings('.imgSrc').attr('data-id');
        var index = layui.layer.open({
            title : "修改新闻",
            type : 2,
            content : "imagesAdd.html?img_id="+img_id+"&img_src="+img_src,
            success : function(layero, index){
                setTimeout(function(){

                },500)
            }
        })
        layui.layer.full(index);
    })
})
