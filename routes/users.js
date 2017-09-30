const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql'),
    formidable = require("formidable"),
    fs = require('fs'),
    path = require('path');

require('../util/util');

router.post('/login', (req,res) => {
    console.log(req.body);
    let userName = req.body.userName
  let userPwd = req.body.userPwd
  console.log(userName,userPwd)
  let sqlStr = 'select * from user where userName = ?'
  sql(sqlStr,[userName],(err,data) => {
    if(err){
      console.log(err)
      return
    }
    if(data[0].userPwd === userPwd){
      res.cookie("userName",userName,{path:'/',maxAge:1000*60*60*24});
      res.cookie("userId",data[0].userId,{path:'/',maxAge:1000*60*60*24});
      res.json({
        statusCode:0,
        msg: ''
      })
    }else {
      res.json({
        statusCode:-1
      })
    }
  })
});
router.post('/logout', (req,res) => {
  res.cookie("userName","",{
    path: '/',
    maxAge: 0
  });
  res.render('login/login');
});
router.get('/checkLogin',(req,res)=>{
  if(req.cookies.userName){
    res.json({
      statusCode: 0,
      result: {
        userName: req.cookies.userName
      }
    })
  }else{
    res.json({
      statusCode: -1,
      result: ''
    })
  }
});
// 加载所有的新闻内容到管理界面
router.get('/getNewsList',function(req, res) {
    let sqlStr = 'SELECT * FROM `news` ORDER BY `add_time` DESC'
    let newsList = [];
    sql(sqlStr,(err,data) => {
        if (err) {
            console.log(err);
            return
        }
        for (let item of data) {
            let date = new Date(item.add_time);
            date = date.Format("yyyy-MM-dd");
            //let Date.format("yyyy-MM-dd");
            let obj = {
                news_id: item.id,
                news_title: item.news_title,
                news_link: item.news_link,
                news_img: item.news_img,
                news_content: item.news_content,
                add_time: date,
            };
            newsList.push(obj)
        }
        res.json({
            statusCode: 0,
            result: newsList
        })
    })
});
router.post('/addNews',(req,res) => {
    let form =  new formidable.IncomingForm();
    let processPath = path.resolve(process.cwd(),'..');
    let __dirname = path.join(processPath,'public/images/upload/news');
    form.keepExtensions = true; // 保留扩展名
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.parse(req, function(err, fields, files) {
        console.log(files.newsImg);
        let imgPath = files.newsImg.path;
        let data = fs.readFileSync(imgPath);
        let fileName = files.newsImg.name;
        let imgName = `${__dirname}/${fileName}.${files.newsImg.type.split("/")[1]}`; // 修改之后的名字
        fs.writeFile(imgName,data,function(err){ // 存储文件
            if(err){ return console.log(err) }
            fs.unlink(imgPath,function(){});// 删除文件
        });
        let news_title = fields.newsTitle,
            news_link  = fields.newsLink,
            news_time = fields.newsTime,
            news_content = fields.newsContent,
            news_img = fileName;
        console.log(news_title,news_link,news_time,news_content,news_img);
        let sqlStr = ' INSERT INTO `news` ( `news_title`, `news_link`, `news_img`, `news_content`,  `add_time`) ' +
            ' VALUES (?,?,?,?,?) ';
        sql(sqlStr,[news_title,news_link,news_img,news_content,news_time],(err,data)=>{
            if (err) {
                console.log(err);
                return
            }
            res.json({
                statusCode:0
            });
        })
    });
});
router.post('/delNews',(req,res) => {
    let news_id = req.body.news_id;
    let sqlStr = ' DELETE FROM `news` WHERE id = ? ';
    sql(sqlStr, [news_id], (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        res.json({
            statusCode: 0
        })
    })
});
router.post('/batchDelNews',(req,res)=>{
    let delNewsIdArr = req.body.delNewsIdArr;
    //有一个以上要删除
    if(delNewsIdArr.length>1){
        let sqlStr = ' DELETE FROM `news` WHERE find_in_set(id,"';
        for(let i in delNewsIdArr){
            if(i == parseInt(delNewsIdArr.length)-1){
                sqlStr+=`${delNewsIdArr[i]}") `
            }else{
                sqlStr+=`${delNewsIdArr[i]},`
            }
        }
        sql(sqlStr, (err, data) => {
            console.log(sqlStr);
            if (err) {
                console.log(err);
                return
            }
        })
    }else if(delNewsIdArr.length===1){//
        let news_id = delNewsIdArr[0];
        let sqlStr = ' DELETE FROM `news` WHERE id = ? ';
        sql(sqlStr, [news_id], (err, data) => {
            if (err) {
                console.log(err);
                return
            }
            res.json({
                statusCode: 0
            })
        })
    }
});
router.post('/uploadImg',(req,res) => {
    console.log("进来了")
    let form =  new formidable.IncomingForm();
    let processPath = path.resolve(process.cwd(),'..');
    let __dirname = path.join(processPath,'temp');

    form.keepExtensions = true; // 保留扩展名
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.parse(req, function(err, fields, files){
        console.log(files.uploadImg);

        let imgPath = files.uploadImg.path;
        let data = fs.readFileSync(imgPath);
        let fileName = files.uploadImg.name;
        let imgName = `${__dirname}/${fileName}`; // 修改之后的名字

        fs.writeFile(imgName,data,function(err){ // 存储文件
            if(err){ return console.log(err) }
            fs.unlink(imgPath,function(){});// 删除文件
        })
/*        let img_title = fields.imgTitle;
        let img_src = fileName;
        console.log(img_title);
        let sqlStr = ' INSERT INTO `img` ( `img_title`, `img_src`) ' +
            ' VALUES (?,?) ';
        sql(sqlStr,[img_title,img_src],(err,data)=>{
            if (err) {
                console.log(err);
                return
            }
            res.json({
                statusCode:0
            });
        })*/
    });
});
router.get('/getImageList',(req,res) => {
    let sqlStr = 'SELECT * FROM `img` ORDER BY id ASC';
    let imgList = [];
    sql(sqlStr,(err,data) => {
        if (err) {
            console.log(err);
            return
        }
        for (let item of data) {
            let obj = {
                img_id: item.id,
                img_title: item.img_title,
                img_type: item.img_type,
                img_src: item.img_src
            };
            imgList.push(obj)
        }
        res.json({
            statusCode: 0,
            result: imgList
        })
    })
/*    let processPath = path.resolve(process.cwd(),'..');
    let dirname = path.join(processPath,'public/images/upload/meilifengguang/1.jpeg');
    //let imageBuf = fs.readFileSync('index.js','utf-8');
    fs.readFile(dirname,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        //console.log(data)
        //let imgData = new Buffer(data).toString('base64');
        //let base64 = data.toString("base64")
        //console.log(base64)

        console.log(data)
        res.json({
            statusCode: 0,
            result:data.toString("utf-8")
        });
    })*/

});
router.post('/delImage',(req,res)=>{
    let img_id = req.body.img_id;
    console.log(img_id)
    let sqlStr = ' DELETE FROM `img` WHERE id = ? ';
    sql(sqlStr, [img_id], (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        res.json({
            statusCode: 0
        })
    })
});
router.post('/updateImage',(req,res)=>{
    let form =  new formidable.IncomingForm();
    let processPath = path.resolve(process.cwd(),'..');
    let __dirname = path.join(processPath,'public/images/upload/meilifengguang');
    form.keepExtensions = true; // 保留扩展名
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.parse(req, function(err, fields, files){
        let imgPath = files.updateImg.path;
        let data = fs.readFileSync(imgPath);
        let fileName = files.updateImg.name;
        let imgName = `${__dirname}/${fileName}`; // 修改之后的名字
        fs.writeFile(imgName,data,function(err){ // 存储文件
            if(err){ return console.log(err) }
            fs.unlink(imgPath,function(){});// 删除文件
        })
        let img_id = fields.imgId;
        let img_src = fileName;
        let img_title = fields.imgTitle;
        console.log(img_id,img_src,img_title);
        let sqlStr = ' UPDATE `img` SET img_title = ? , img_src=?  WHERE `id` = ? ';
        sql(sqlStr, [img_title,img_src,img_id], (err, data) => {
            console.log(sqlStr);
            if (err) {
                console.log(err);
                return;
            }
            res.json({
                statusCode: 0
            })
        })
    });

});
router.post('/getImageDetail',(req,res)=>{
    let img_id = req.body.img_id;
    let sqlStr = ' SELECT * FROM `img` WHERE `id` = ? ';
    sql(sqlStr, [img_id], (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let img_title = data[0].img_title,
            img_src = data[0].img_src,
            img_type = data[0].img_type;
        let obj = {
            img_title: img_title,
            img_src: img_src,
            img_type: img_type
        };
        res.json({
            statusCode: 0,
            result: obj
        })
    })

});
router.get('/getIntro',(req,res)=>{
    let sqlStr = 'SELECT * FROM `intro`';
    sql(sqlStr,(err,data) => {
        if (err) {
            console.log(err);
            return
        }
        res.json({
            statusCode: 0,
            result: data[0].intro_content
        })
    })
});
router.post('/updateIntro',(req,res)=>{
    let sqlStr = 'UPDATE `intro` SET `intro_content`=? ';
    let intro_content = req.body.introContentUpdate;
    console.log(intro_content)
    sql(sqlStr,[intro_content],(err,data) => {
        if (err) {
            console.log(err);
            return;
        };
        res.json({
            statusCode: 0
        });
    })
});
router.get('/getVideoSrc',(req,res)=>{
    let sqlStr = 'SELECT * FROM `video`';
    sql(sqlStr,(err,data) => {
        if (err) {
            console.log(err);
            return
        }
        res.json({
            statusCode: 0,
            result: data[0].video_src
        })
    })
})
router.post('/uploadVideo',(req,res) => {
    let form =  new formidable.IncomingForm();
    let processPath = path.resolve(process.cwd(),'..');
    let __dirname = path.join(processPath,'public/video');
    form.keepExtensions = true; // 保留扩展名
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.parse(req, function(err, fields, files){

        let imgPath = files.uploadVideo.path;
        let data = fs.readFileSync(imgPath);
        let fileName = files.uploadVideo.name;
        let imgName = `${__dirname}/${fileName}`; // 修改之后的名字

        fs.writeFile(imgName,data,function(err){ // 存储文件
            if(err){ return console.log(err) }
            fs.unlink(imgPath,function(){});// 删除文件
            res.json({
                statusCode:0
            })
        });
    });
});
module.exports = router;
