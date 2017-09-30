news

DROP TABLE IF EXISTS `news`
CREATE TABLE `news` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
  `news_title` text NOT NULL,
  `news_link` text,
  `news_img` text NOT NULL,
  `news_content` text,
  `add_time` date DEFAULT NULL,
	PRIMARY KEY (`id`)
)AUTO_INCREMENT=1 ENGINE = InnoDB CHARSET=utf8;

INSERT INTO `news` (`id`,`news_title`, `news_link`, `news_img`, `news_content`,`add_time`) VALUES
(1,'大港头镇利山村： 昔日小山村如莲花般绽放', 'http://zjls.wenming.cn/xfwm/201512/t20151216_2203552.html', '1370682424_11092700.jpg', '“穷在山上，苦在路上，困在没出路上。”几年前的利山村还是一个贫困落后、鲜为人知的小村落，村里到处都是危旧房，交通不便。
如今，青瓦白墙，马头翘角，统一的徽派建筑整齐划一，百亩莲园昂首怒放', '2015-12-16');
INSERT INTO `news` (`news_title`, `news_link`, `news_img`, `news_content`,`add_time`) VALUES
('乡村旅游示范38、丽水莲都区大港头镇利山村', 'http://gotrip.zjol.com.cn/system/2017/01/06/021416209.shtml', '7610335_914823.jpg', '近年来，利山村凭借得天独厚的环境，优质的服务，获得诸多荣誉，有“长三角十佳乡村旅游景区”、“首批中国少数民族特色村寨”、丽水市十大“美丽乡村”等。现正在打造莲都区乡村旅游民宿示范村。越来越多的游客被这里的环境、风情所吸引，慕名来到利山。', '2017-01-09');
INSERT INTO `news` (`news_title`, `news_link`, `news_img`, `news_content`,`add_time`) VALUES
('我院前往利山村开展“城乡结对、共建美丽乡村”活动', 'http://www.ls-hospital.com/info.aspx?Code=10501', '201701160425276.jpg', '1月14日上午，丽水市人民医院党办主任刘斌带领7位医学专家前往大港头镇利山村开展“城乡结对、共建美丽乡村”活动。来自骨科、全科医学、健康教育科、体检中心的医学专家为当地村民进行义诊咨询、测量血压、发放健康宣传资料，共服务村民100余人次，受到了村民的热烈欢迎。', '2017-01-16');
INSERT INTO `news` (`news_title`, `news_link`, `news_img`, `news_content`,`add_time`) VALUES
('赏诗画利山 游魅力沙溪 全省民族经济工作现场会在莲都利山村、沙溪村召开', 'http://www.liandu.gov.cn/zhxx/jrld/201707/t20170706_2157312.shtml', 'W020170706375773123026.jpg', '7月3日至7月6日期间，浙江省民族经济工作培训班暨现场会在丽水市召开。来自全省各地的民族工作干部齐聚莲都，共谋少数民族经济发展蓝图，共建少数民族和少数民族地区经济社会发展“大花园”。这是省民宗委第一次在莲都区范围召开全省少数民族经济发展的专题大会。', '2017-07-06');
INSERT INTO `news` (`news_title`, `news_link`, `news_img`, `news_content`,`add_time`) VALUES
('手上有闲置农房？这样做有钱赚', 'http://www.ybmoju.com/shxw/content/11821058.html', '0023ae80a20c1308259549.jpg', '丽水市莲都区大港头镇利山村，一个曾经名不经传的偏僻畲族小村，通过发展民宿经济，走上了从美丽乡村向美丽经济的转型发展之路。该村民宿产业能顺利发展，得益于通过探索所有权与经营权分离的新模式，让专业的人做专业的事，村民由此享受到创新发展的大“红包”。', '2017-9-13');

SELECT * FROM `news`

SELECT * FROM `news` WHERE FIND_IN_SET( id, '1,2,3' )
 DELETE FROM `news` WHERE find_in_set(id,"5,4")



user

-- user表
DROP TABLE IF EXISTS `user`
CREATE TABLE `user`(
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`userId` varchar(64),
	`userName` varchar(64) NOT NULL ,
	`userPwd` varchar(64) NOT NULL ,
	PRIMARY KEY (`id`)
)AUTO_INCREMENT=1 ENGINE = InnoDB CHARSET=utf8;
-- 添加索引
ALTER TABLE `user` ADD INDEX userId ( `userId` )
INSERT INTO `user` (id ,userId, userName, userPwd)
						  VALUES(1,'10000000','admin', '123456');
INSERT INTO `user` (userId, userName, userPwd)
						  VALUES('10000001','BBB', '123456');
INSERT INTO `user` (userId, userName, userPwd)
						  VALUES('10000002','CCC', '123456');
INSERT INTO `user` (userId, userName, userPwd)
						  VALUES('10000003','DDD', '123456');
INSERT INTO `user` (userId, userName, userPwd)
						  VALUES('10000004','EEE', '123456');
SELECT * FROM `user` WHERE userName = 'admin'


video
DROP TABLE IF EXISTS `video`
CREATE TABLE `video` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
  `video_src` text,
	PRIMARY KEY (`id`)
)AUTO_INCREMENT=1 ENGINE = InnoDB CHARSET=utf8;

INSERT INTO `video` (`id`, `video_src`)
VALUES(1, 'meilixiangcun.mp4');


UPDATE `img` SET img_title = '轮播小图6' , img_src='DASDS'  WHERE `id` = 1

SELECT * FROM `video` WHERE `id` = 1


intro
DROP TABLE IF EXISTS `intro`
CREATE TABLE `intro` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
  `intro_content` text,
	PRIMARY KEY (`id`)
)AUTO_INCREMENT=1 ENGINE = InnoDB CHARSET=utf8;

INSERT INTO `intro` (`id`,`intro_content`)
VALUES(1, 'img/news-list3.jpg');

UPDATE  `intro` SET `intro_content`='213123123' WHERE `id` = 1



img

DROP TABLE IF EXISTS `img`
CREATE TABLE `img` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
  `img_title` varchar(30) NOT NULL,
	`img_type` int(1),-- 如果为0是大图 1为小图
  `img_src` text,
	PRIMARY KEY (`id`)
)AUTO_INCREMENT=1 ENGINE = InnoDB CHARSET=utf8;
--
-- INSERT INTO `img` (`id`, `img_title`,`img_type`, `img_src`)
-- VALUES(1, '轮播大图1', 0, '1.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图1', 1, 'lishan/1.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图2', 0, '2.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图2', 1, 'lishan/2.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图3', 0, '3.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图3', 1, 'lishan/3.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图4', 0, '4.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图4', 1, 'lishan/4.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图5', 0, '5.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图5', 1, 'lishan/5.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图6', 0, '6.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图6', 1, 'lishan/6.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图7', 0, '7.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图7', 1, 'lishan/7.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图8', 0, '8.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图8', 1, 'lishan/8.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图9', 0, '9.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图9', 1, 'lishan/9.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图10', 0, '10.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图10', 1, 'lishan/10.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图11', 0, '11.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图11', 1, 'lishan/11.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图12', 0, '12.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图12', 1, 'lishan/12.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图13', 0, '13.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图13', 1, 'lishan/13.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图14', 0, '14.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图14', 1, 'lishan/14.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播大图15', 0, '15.jpg');
-- INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
-- VALUES('轮播小图15', 1, 'lishan/15.jpg');

INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图1', 0, '11.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图2', 0, '12.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图3', 0, '13.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图4', 0, '14.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图5', 0, '15.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图6', 0, '16.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图7', 0, '17.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图8', 0, '18.jpg');
INSERT INTO `img` (`img_title`,`img_type`, `img_src`)
VALUES('轮播图9', 0, '19.jpg');
UPDATE `img` SET img_title = '轮播小图6' , img_src='DASDS'  WHERE `id` = 1

SELECT * FROM `img`

