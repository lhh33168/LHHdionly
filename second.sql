/*
Navicat MySQL Data Transfer

Source Server         : lihaohan
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : second

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:04:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `username` varchar(255) NOT NULL,
  `goodsid` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `mprice` decimal(10,2) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加商品时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('47', 'V形女戒（DRW124443D）', '18317774451', '1', '../img/ProductList/1.jpg', '1842.00', '3453.00', '15', '2018-01-08 19:49:47');
INSERT INTO `cart` VALUES ('48', '五彩缤纷（CRB122921D）', '18317774451', '11', '../img/ProductList/11.jpg', '2365.00', '3942.00', '10', '2018-01-08 19:58:59');
INSERT INTO `cart` VALUES ('49', '花不语（DRW020824D）', '18317774451', '19', '../img/ProductList/19.jpg', '2218.00', '4158.00', '10', '2018-01-08 19:50:09');
INSERT INTO `cart` VALUES ('53', '初见（DRW020830D）', '18345178903', '20', '../img/ProductList/20.jpg', '1798.00', '3372.00', '12', '2018-01-08 19:59:25');
INSERT INTO `cart` VALUES ('52', '相思泪（CRD012457D）', '18345178903', '35', '../img/ProductList/35.jpg', '2141.00', '3569.00', '18', '2018-01-08 19:59:13');
INSERT INTO `cart` VALUES ('54', '狐绕缘（DRW020827D）', '18345178903', '15', '../img/ProductList/15.jpg', '1790.00', '3358.00', '15', '2018-01-08 19:59:38');
INSERT INTO `cart` VALUES ('55', '简约挚爱（CRB122917D）', '18317774451', '7', '../img/ProductList/7.jpg', '2273.00', '3788.00', '5', '2018-01-08 20:00:36');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` float DEFAULT NULL,
  `mprice` float DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `imgurls` varchar(255) DEFAULT NULL,
  `hot` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'V形女戒（DRW124443D）', '1842', '3453', '../img/ProductList/1.jpg', '../img/details/101.jpg,../img/details/102.jpg,../img/details/103.jpg,../img/details/104.jpg', '');
INSERT INTO `goods` VALUES ('2', '三生戒指（DRW124442D）', '1287', '2414', '../img/ProductList/2.jpg', '../img/details/201.jpg,../img/details/202.jpg,../img/details/203.jpg,../img/details/204.jpg', '');
INSERT INTO `goods` VALUES ('3', '微爱耳钉（DEW124440D）', '3779', '7086', '../img/ProductList/3.jpg', '../img/details/301.jpg,../img/details/302.jpg,../img/details/303.jpg,../img/details/304.jpg', 'hot');
INSERT INTO `goods` VALUES ('4', '百搭之美（CRB122918D）', '1829', '3049', '../img/ProductList/4.jpg', '../img/details/401.jpg,../img/details/402.jpg,../img/details/403.jpg', '');
INSERT INTO `goods` VALUES ('5', '花季女人（CPB122920D）', '1511', '2518', '../img/ProductList/5.jpg', '../img/details/501.jpg,../img/details/502.jpg,../img/details/503.jpg', '');
INSERT INTO `goods` VALUES ('6', '花之魅力（CPB122923D）', '973', '1622', '../img/ProductList/6.jpg', '../img/details/601.jpg,../img/details/602.jpg', 'hot');
INSERT INTO `goods` VALUES ('7', '简约挚爱（CRB122917D）', '2273', '3788', '../img/ProductList/7.jpg', '../img/details/701.jpg,../img/details/702.jpg,../img/details/703.jpg,../img/details/704.jpg,../img/details/705.jpg', '');
INSERT INTO `goods` VALUES ('8', '倾心の恋人（CPZ122922D）', '1352', '2254', '../img/ProductList/8.jpg', '../img/details/801.jpg,../img/details/802.jpg', '');
INSERT INTO `goods` VALUES ('9', '情圈一线（CRB122924D）', '1151', '1918', '../img/ProductList/9.jpg', '../img/details/901.jpg', 'hot');
INSERT INTO `goods` VALUES ('10', '顺势而动（CRB122925D）', '1205', '2008', '../img/ProductList/10.jpg', '../img/details/1001.jpg,../img/details/1002.jpg,../img/details/1003.jpg,../img/details/1004.jpg', '');
INSERT INTO `goods` VALUES ('11', '五彩缤纷（CRB122921D）', '2365', '3942', '../img/ProductList/11.jpg', '../img/details/1101.jpg,../img/details/1102.jpg,../img/details/1103.jpg,../img/details/1104.jpg', '');
INSERT INTO `goods` VALUES ('12', '小清新（CRB122916D）', '2341', '3901', '../img/ProductList/12.jpg', '../img/details/1201.jpg,../img/details/1202.jpg,../img/details/1203.jpg,../img/details/1204.jpg', '');
INSERT INTO `goods` VALUES ('13', '心只有你（CPB122919D）', '1226', '2044', '../img/ProductList/13.jpg', '../img/details/1301.jpg,../img/details/1302.jpg,../img/details/1303.jpg,../img/details/1304.jpg', 'hot');
INSERT INTO `goods` VALUES ('14', '天使之约（DPW012185D）', '568', '1066', '../img/ProductList/14.jpg', '../img/details/1401.jpg,../img/details/1402.jpg,../img/details/1403.jpg,../img/details/1404.jpg,../img/details/1405.jpg,../img/details/1406.jpg,../img/details/1407.jpg', '');
INSERT INTO `goods` VALUES ('15', '狐绕缘（DRW020827D）', '1790', '3358', '../img/ProductList/15.jpg', '../img/details/1501.jpg,../img/details/1502.jpg,../img/details/1503.jpg,../img/details/1504.jpg', '');
INSERT INTO `goods` VALUES ('16', '樱桃眷（DRW020819D）', '1035', '1940', '../img/ProductList/16.jpg', '../img/details/1601.jpg,../img/details/1602.jpg,../img/details/1603.jpg,../img/details/1604.jpg,../img/details/1605.jpg,../img/details/1606.jpg,../img/details/1607.jpg', '');
INSERT INTO `goods` VALUES ('17', '花开（DPW012174D）', '3776', '7080', '../img/ProductList/17.jpg', '../img/details/1701.jpg,../img/details/1702.jpg,../img/details/1703.jpg,../img/details/1704.jpg,../img/details/1705.jpg', 'hot');
INSERT INTO `goods` VALUES ('18', '狐心（DRW020823D）', '2799', '5249', '../img/ProductList/18.jpg', '../img/details/1801.jpg,../img/details/1802.jpg,../img/details/1803.jpg,../img/details/1804.jpg', '');
INSERT INTO `goods` VALUES ('19', '花不语（DRW020824D）', '2218', '4158', '../img/ProductList/19.jpg', '../img/details/1901.jpg,../img/details/1902.jpg,../img/details/1903.jpg,../img/details/1904.jpg,../img/details/1905.jpg', '');
INSERT INTO `goods` VALUES ('20', '初见（DRW020830D）', '1798', '3372', '../img/ProductList/20.jpg', '../img/details/2001.jpg,../img/details/2002.jpg,../img/details/2003.jpg,../img/details/2004.jpg', '');
INSERT INTO `goods` VALUES ('21', '暖心（DRW020829D）', '1838', '3448', '../img/ProductList/21.jpg', '../img/details/2101.jpg,../img/details/2102.jpg,../img/details/2103.jpg,../img/details/2104.jpg', '');
INSERT INTO `goods` VALUES ('22', '四叶之梦（DRW020828D）', '1945', '3646', '../img/ProductList/22.jpg', '../img/details/2201.jpg,../img/details/2202.jpg,../img/details/2203.jpg,../img/details/2204.jpg', '');
INSERT INTO `goods` VALUES ('23', '欢乐小鹿（DRW020826D）', '3880', '4242', '../img/ProductList/23.jpg', '../img/details/2301.jpg,../img/details/2302.jpg,../img/details/2303.jpg,../img/details/2304.jpg', 'hot');
INSERT INTO `goods` VALUES ('24', '考拉的拥抱（DRW020825D）', '2141', '3317', '../img/ProductList/24.jpg', '../img/details/2401.jpg,../img/details/2402.jpg,../img/details/2403.jpg,../img/details/2404.jpg', '');
INSERT INTO `goods` VALUES ('25', '浓情蜜语（CRD012448D）', '1921', '2992', '../img/ProductList/25.jpg', '../img/details/2501.jpg,../img/details/2502.jpg,../img/details/2503.jpg,../img/details/2504.jpg', '');
INSERT INTO `goods` VALUES ('26', '炫彩缤纷（CRD012449D）', '5369', '23422', '../img/ProductList/26.jpg', '../img/details/2601.jpg,../img/details/2602.jpg,../img/details/2603.jpg,../img/details/2604.jpg', '');
INSERT INTO `goods` VALUES ('27', '柔情似水（CRD012450D）', '1691', '2333', '../img/ProductList/27.jpg', '../img/details/2701.jpg,../img/details/2702.jpg,../img/details/2703.jpg,../img/details/2704.jpg', '');
INSERT INTO `goods` VALUES ('28', '火焰之心（CPD011934D）', '925', '3233', '../img/ProductList/28.jpg', '../img/details/2801.jpg,../img/details/2802.jpg,../img/details/2803.jpg,../img/details/2804.jpg', 'hot');
INSERT INTO `goods` VALUES ('29', '金色年华（CRD012451D）', '1905', '4015', '../img/ProductList/29.jpg', '../img/details/2901.jpg,../img/details/2902.jpg,../img/details/2903.jpg,../img/details/2904.jpg', '');
INSERT INTO `goods` VALUES ('30', '花好月圆（CRD012452D）', '2911', '5393', '../img/ProductList/30.jpg', '../img/details/3001.jpg,../img/details/3002.jpg,../img/details/3003.jpg,../img/details/3004.jpg', '');
INSERT INTO `goods` VALUES ('31', '一笑嫣然（CRD012453D）', '2296', '2883', '../img/ProductList/31.jpg', '../img/details/3101.jpg,../img/details/3102.jpg,../img/details/3103.jpg,../img/details/3104.jpg', '');
INSERT INTO `goods` VALUES ('32', '挚爱一生（CRD012454D）', '1839', '3894', '../img/ProductList/32.jpg', '../img/details/3201.jpg,../img/details/3202.jpg,../img/details/3303.jpg,../img/details/3404.jpg', '');
INSERT INTO `goods` VALUES ('33', '红粉佳人（CRD012455D）', '3210', '5350', '../img/ProductList/33.jpg', '../img/details/3301.jpg,../img/details/3302.jpg,../img/details/3303.jpg,../img/details/3304.jpg', 'hot');
INSERT INTO `goods` VALUES ('34', '佳人如梦（CRD012456D）', '3880', '6466', '../img/ProductList/34.jpg', '../img/details/3401.jpg,../img/details/3402.jpg,../img/details/3403.jpg,../img/details/3404.jpg', '');
INSERT INTO `goods` VALUES ('35', '相思泪（CRD012457D）', '2141', '3569', '../img/ProductList/35.jpg', '../img/details/3501.jpg,../img/details/3502.jpg,../img/details/3503.jpg,../img/details/3504.jpg', '');
INSERT INTO `goods` VALUES ('36', '姹紫嫣红（CRD012458D）', '1921', '3202', '../img/ProductList/36.jpg', '../img/details/3601.jpg,../img/details/3602.jpg,../img/details/3603.jpg,../img/details/3604.jpg', '');
INSERT INTO `goods` VALUES ('37', '冰清玉洁（CRD012459D）', '5369', '8949', '../img/ProductList/37.jpg', '../img/details/3701.jpg,../img/details/3702.jpg,../img/details/3703.jpg,../img/details/3704.jpg,../img/details/3705.jpg,../img/details/3706.jpg,../img/details/3707.jpg', '');
INSERT INTO `goods` VALUES ('38', '天鹅之恋（CPD011935D）', '1691', '2819', '../img/ProductList/38.jpg', '../details/3801.jpg,../details/3802.jpg,../details/3803.jpg,../details/3804.jpg,../details/3805.jpg', '');
INSERT INTO `goods` VALUES ('39', '心有灵犀（CPD011936D）', '925', '1541', '../img/ProductList/39.jpg', '../img/details/3901.jpg,../img/details/3902.jpg,../img/details/3903.jpg,../img/details/3904.jpg,../img/details/3905.jpg', '');
INSERT INTO `goods` VALUES ('40', '提亚的优雅（CPD011937D）', '1905', '3175', '../img/ProductList/40.jpg', '../img/details/4001.jpg,../img/details/4002.jpg,../img/details/4003.jpg,../img/details/4004.jpg,../img/details/4005.jpg', 'hot');
INSERT INTO `goods` VALUES ('41', '花朝月夕（CPD011938D）', '2911', '4851', '../img/ProductList/41.jpg', '../img/details/4101.jpg,../img/details/4102.jpg,../img/details/4103.jpg,../img/details/4104.jpg,../img/details/4105.jpg', '');
INSERT INTO `goods` VALUES ('42', '一帘幽梦（CPD011939D）', '2296', '3826', '../img/ProductList/42.jpg', '../img/details/4201.jpg,../img/details/4202.jpg,../img/details/4203.jpg,../img/details/4204.jpg,../img/details/4205.jpg', 'hot');
INSERT INTO `goods` VALUES ('43', '情有独钟（CPD011940D）', '1839', '3894', '../img/ProductList/43.jpg', '../img/details/4301.jpg,../img/details/4302.jpg,../img/details/4303.jpg,../img/details/4304.jpg,../img/details/4305.jpg', '');
INSERT INTO `goods` VALUES ('44', '红颜不老（CPD011941D）', '4731', '5350', '../img/ProductList/44.jpg', '../img/details/4401.jpg,../img/details/4402.jpg,../img/details/4403.jpg,../img/details/4404.jpg,../img/details/4405.jpg', '');
INSERT INTO `goods` VALUES ('45', '倾城绝恋（CPD011942D）', '2570', '6466', '../img/ProductList/45.jpg', '../img/details/4501.jpg,../img/details/4502.jpg,../img/details/4503.jpg,../img/details/4504.jpg,../img/details/4505.jpg', '');
INSERT INTO `goods` VALUES ('46', '长长久久（DRW013159D）', '1422', '3569', '../img/ProductList/46.jpg', '../img/details/4601.jpg,../img/details/4602.jpg,../img/details/4603.jpg,../img/details/4604.jpg,../img/details/4605.jpg,../img/details/4606.jpg,../img/details/4607.jpg', 'hot');
INSERT INTO `goods` VALUES ('47', '童话·星愿（DCW012545D）', '1423', '3202', '../img/ProductList/47.jpg', '../details/4701.jpg,../details/4702.jpg,../details/4703.jpg,../details/4704.jpg,../details/4705.jpg', '');
INSERT INTO `goods` VALUES ('48', '高风亮节（DMW011926D）', '1424', '8949', '../img/ProductList/48.jpg', '../img/details/4801.jpg,../img/details/4802.jpg,../img/details/4803.jpg,../img/details/4804.jpg', '');
INSERT INTO `goods` VALUES ('49', '返璞归真（DMW011868D）', '3880', '2819', '../img/ProductList/49.jpg', '../img/details/4901.jpg,../img/details/4902.jpg', '');
INSERT INTO `goods` VALUES ('50', '爱上爱（DCW012685D）', '2141', '4234', '../img/ProductList/50.jpg', '../img/details/5001.jpg,../img/details/5002.jpg', '');
INSERT INTO `goods` VALUES ('51', '爱之恋语（DRW012744D）', '1921', '3175', '../img/ProductList/51.jpg', '../img/details/5101.jpg,../img/details/5102.jpg,../img/details/5103.jpg,../img/details/5104.jpg', '');
INSERT INTO `goods` VALUES ('52', '瓜子链（NNX112808D）', '5369', '34222', '../img/ProductList/52.jpg', '../img/details/5201.jpg,../img/details/5202.jpg,../img/details/5203.jpg', 'hot');
INSERT INTO `goods` VALUES ('53', '意气风发（DMW011928D）', '1691', '4158', '../img/ProductList/53.jpg', '../img/details/5301.jpg,../img/details/5302.jpg,../img/details/5303.jpg,../img/details/5304.jpg', '');
INSERT INTO `goods` VALUES ('54', '幽人（DPW012215D）', '925', '3372', '../img/ProductList/54.jpg', '../img/details/5401.jpg,../img/details/5402.jpg,../img/details/5403.jpg,../img/details/5404.jpg', '');
INSERT INTO `goods` VALUES ('55', '贵族气质（DMW011867D）', '1905', '3448', '../img/ProductList/55.jpg', '../img/details/5501.jpg,../img/details/5502.jpg', 'hot');
INSERT INTO `goods` VALUES ('56', '永恒之塔（DMW011919D）', '2911', '3646', '../img/ProductList/56.jpg', '../img/details/5601.jpg,../img/details/5602.jpg,../img/details/5603.jpg,../img/details/5604.jpg', '');
INSERT INTO `goods` VALUES ('57', '佳偶天成（DCW012499D）', '2273', '3365', '../img/ProductList/57.jpg', '../img/details/5701.jpg,../img/details/5702.jpg,../img/details/5703.jpg,../img/details/5704.jpg,../img/details/5705.jpg', '');
INSERT INTO `goods` VALUES ('58', '瑰姿（PPB012769D）', '1352', '3317', '../img/ProductList/58.jpg', '../img/details/5801.jpg', '');
INSERT INTO `goods` VALUES ('59', '骑士风度（DMW011922D）', '1151', '2992', '../img/ProductList/59.jpg', '../img/details/5901.jpg,../img/details/5902.jpg,../img/details/5903.jpg,../img/details/5904.jpg', '');
INSERT INTO `goods` VALUES ('60', '轻浅（PEB012415D）', '1205', '3166', '../img/ProductList/60.jpg', '../img/details/6001.jpg', '');
INSERT INTO `goods` VALUES ('61', '心动瞬间（DRW012746D）', '2365', '4242', '../img/ProductList/61.jpg', '../img/details/6101.jpg,../img/details/6102.jpg,../img/details/6103.jpg,../img/details/6104.jpg', '');
INSERT INTO `goods` VALUES ('62', '完美·圆满（DRW012749D）', '2341', '23422', '../img/ProductList/62.jpg', '../img/details/6201.jpg,../img/details/6202.jpg,../img/details/6203.jpg,../img/details/6204.jpg,../img/details/6205.jpg', 'hot');
INSERT INTO `goods` VALUES ('63', '在水一方（DPW012209D）', '1226', '3317', '../img/ProductList/63.jpg', '../img/details/6301.jpg,../img/details/6302.jpg,../img/details/6303.jpg,../img/details/6304.jpg', '');
INSERT INTO `goods` VALUES ('64', '荟萃乐章（PPB012790D）', '3779', '3332', '../img/ProductList/64.jpg', '../img/details/6401.jpg', '');
INSERT INTO `goods` VALUES ('65', 'only love（DPW012211D）', '1829', '3166', '../img/ProductList/65.jpg', '../img/details/6501.jpg,../img/details/6502.jpg,../img/details/6503.jpg,../img/details/6504.jpg', '');
INSERT INTO `goods` VALUES ('66', '静恬（PPW012756D）', '1511', '1606', '../img/ProductList/66.jpg', '../img/details/6601.jpg', 'hot');
INSERT INTO `goods` VALUES ('67', '俊朗才意（DMW011911D）', '973', '3424', '../img/ProductList/67.jpg', '../img/details/6701.jpg,../img/details/6702.jpg,../img/details/6703.jpg,../img/details/6704.jpg', '');
INSERT INTO `goods` VALUES ('68', '万丈光芒（DMW011921D）', '2273', '32424', '../img/ProductList/68.jpg', '../img/details/6801.jpg,../img/details/6802.jpg,../img/details/6803.jpg,../img/details/6804.jpg', '');
INSERT INTO `goods` VALUES ('69', '寄心（DPW012213D）', '1352', '42342', '../img/ProductList/69.jpg', '../img/details/6901.jpg,../img/details/6902.jpg,../img/details/6903.jpg,../img/details/6903.jpg', '');
INSERT INTO `goods` VALUES ('70', '蝶恋花（DPW012216D）', '1151', '4242', '../img/ProductList/70.jpg', '../img/details/7001.jpg,../img/details/7002.jpg,../img/details/7003.jpg,../img/details/7004.jpg', 'hot');
INSERT INTO `goods` VALUES ('71', '飘迷（PPW012768D）', '1205', '3422', '../img/ProductList/71.jpg', '../img/details/7101.jpg', '');
INSERT INTO `goods` VALUES ('72', 'LOVE（DRW012742D）', '2365', '5655', '../img/ProductList/72.jpg', '../img/details/7201.jpg,../img/details/7202.jpg', '');
INSERT INTO `goods` VALUES ('73', '甜（PEB012430D）', '2341', '5675', '../img/ProductList/73.jpg', '../img/details/7301.jpg', '');
INSERT INTO `goods` VALUES ('74', '心之眷恋（DPW012207D）', '1226', '2322', '../img/ProductList/74.jpg', '../img/details/7401.jpg,../img/details/7402.jpg,../img/details/7403.jpg,../img/details/7404.jpg', 'hot');
INSERT INTO `goods` VALUES ('75', '幸福·永恒（DRW010758D）', '568', '2234', '../img/ProductList/75.jpg', '../img/details/7501.jpg,../img/details/7502.jpg,../img/details/7503.jpg,../img/details/7504.jpg,../img/details/7505.jpg', '');
INSERT INTO `goods` VALUES ('76', '耀秘（PPB012791D）', '1790', '5563', '../img/ProductList/76.jpg', '../img/details/7601.jpg', '');
INSERT INTO `goods` VALUES ('77', '文雅（DRW012745D）', '1035', '6765', '../img/ProductList/77.jpg', '../img/details/7701.jpg,../img/details/7702.jpg,../img/details/7703.jpg,../img/details/7704.jpg', '');
INSERT INTO `goods` VALUES ('78', '浪漫心扉（DRW010763D）', '3776', '4546', '../img/ProductList/78.jpg', '../img/details/7801.jpg,../img/details/7802.jpg,../img/details/7803.jpg,../img/details/7804.jpg', 'hot');
INSERT INTO `goods` VALUES ('79', '一生守侯（DCW012553D）', '2799', '5644', '../img/ProductList/79.jpg', '../img/details/7901.jpg,../img/details/7902.jpg,../img/details/7903.jpg,../img/details/7904.jpg,../img/details/7905.jpg,../img/details/7906.jpg', '');
INSERT INTO `goods` VALUES ('80', '情深（DCW012551D）', '2218', '4644', '../img/ProductList/80.jpg', '../img/details/8001.jpg,../img/details/8002.jpg,../img/details/8003.jpg,../img/details/8004.jpg,../img/details/8005.jpg,../img/details/8006.jpg', '');
INSERT INTO `goods` VALUES ('81', '尊荣华贵（DMW011924D）', '1798', '3232', '../img/ProductList/81.jpg', '../img/details/8101.jpg,../img/details/8102.jpg,../img/details/8103.jpg,../img/details/8104.jpg', '');
INSERT INTO `goods` VALUES ('82', '微依恋（PEW012427D）', '3244', '22234', '../img/ProductList/82.jpg', '../img/details/8201.jpg', '');
INSERT INTO `goods` VALUES ('83', '理想中央（DRW010766D）', '3773', '34324', '../img/ProductList/83.jpg', '../img/details/8301.jpg,../img/details/8302.jpg,../img/details/8303.jpg,../img/details/8304.jpg', '');
INSERT INTO `goods` VALUES ('84', '爱的符号（DRW010767D）', '1834', '3166', '../img/ProductList/84.jpg', '../img/details/8401.jpg,../img/details/8402.jpg,../img/details/8403.jpg,../img/details/8404.jpg', 'hot');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加用户名时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '18317774451', 'e10adc3949ba59abbe56e057f20f883e', null, '2018-01-07 16:55:55');
INSERT INTO `user` VALUES ('2', '13456367546', 'd41d8cd98f00b204e9800998ecf8427e', null, '2018-01-07 16:56:40');
INSERT INTO `user` VALUES ('3', '18717776753', 'd41d8cd98f00b204e9800998ecf8427e', null, '2018-01-07 16:57:44');
INSERT INTO `user` VALUES ('5', '18317774453', '96e79218965eb72c92a549dd5a330112', null, '2018-01-07 17:03:09');
INSERT INTO `user` VALUES ('6', '18345178903', '96e79218965eb72c92a549dd5a330112', null, '2018-01-08 14:05:06');
SET FOREIGN_KEY_CHECKS=1;
