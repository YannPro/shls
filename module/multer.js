const multer = require('multer'),
    path = require('path');
//process.cwd():E:\workspace_webstorm\node
//上传的路径处理 上传之后重命名
//storage创建一个存储配置对象
let storage = multer.diskStorage({
    destination : path.join(process.cwd(),'public/images/upload'),
    filename : function(req,file,cb){
        console.log(file);
        //filename:[ '1e10333a93f8aa36ffbe115f12e2d588', 'jpeg' ]
        let filename = (file.originalname).split(".");
        console.log("Date.now():"+Date.now());
        cb(null,`${Date.now()}.${filename[filename.length-1]}`);
    }
});
let fileFilter = function (req,file,cb) {
    //当设置这个判断后  没允许的&&没设置的类型→拒绝
    if(file.mimetype === "image/jpeg"){//设置上传的文件类型只能为jpg格式
        console.log('success');
        cb(null,true);
    }else{
        console.log("error");
    }
}
let upload = multer({
    storage : storage,
    limits : {
        //限制上传文件的大小
    },
    fileFilter : fileFilter
})

module.exports = upload;
