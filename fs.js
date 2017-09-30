//文件系统  操作文件
const fs = require('fs');

//打开文件， 如果这个文件不存在则创建
//可以用来检测文件是否存在
/*fs.open('./1.txt','wx',(err,data)=>{
 console.log(data);//如果不存在打印3，存在打印undefined
 })*/


// 判断文件是否存在
/*
 fs.exists('1.txt', function( exists ){
 console.log( exists );//true
 });
 */


//创建文件夹
/*fs.mkdir('./wulv',()=>{
 console.log("创建成功");
 })*/

/*fs.rmdir('./wulv',()=>{
 console.log('删除成功');
 })*/

/*//删除文件
 fs.unlink('./2.txt');*/

//读取文件信息
/*fs.stat('./public',(err,data)=>{
 console.log(data);
 })*/


//检测文件  是否可读
/*fs.access('./app.js',fs.constants.R_OK | fs.constants.W_OK,(err,data)=>{
 console.log(err);//为null，代表这个文件可读可写
 console.log(data);
 })*/

//把数据追加到文件里
/*fs.appendFile('./app.js',"//注释",(err,data)=>{

 });*/

//写文件
/*
 fs.writeFile('./1.txt',"//注释",(err,data)=>{
 console.log("替换成功");
 });
 */

//读取文件内容
/*fs.readFile('demo.sql','utf-8',(err,data)=>{
    console.log(data);
})*/

//读取文件夹
/*fs.readdir('./views',(err,data)=>{
 console.log(data);
 })
 console.log(1);//先打印出1，表示这个操作是异步的*/

//在文件操作方法后加Sync表示同步操作
var contentText = fs.readFileSync('1.jpeg');
 console.log(contentText);

//重命名
/*
 fs.rename('./2.txt','1.txt',()=>{
 console.log("重命名成功");
 })
 */

