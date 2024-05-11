/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : localhost:3306
 Source Schema         : love_pet

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 11/05/2024 23:30:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `address_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `address_area` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `address_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '收货人名字',
  `address_default` int(11) NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `address_details` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`address_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('156b82cd-0eb6-4659-9102-875a92f5a2de', '13160605277', '北京市-北京市-东城区', '杨泽楷', 0, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'asdasd');
INSERT INTO `address` VALUES ('97b45fe3-ebd8-4da6-9e83-d032c3c0288c', '13160605277', '北京市-北京市-东城区', '1316060', 1, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'asdasdasdasd');
INSERT INTO `address` VALUES ('f4261ab4-ced9-4c26-853c-7fb3b972dc04', '13160605277', '浙江省-杭州市-上城区', '测试', 0, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'asdasd');

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `admin_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '管理员ID',
  `admin_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '管理员用户名',
  `admin_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '管理员密码',
  `admin_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('de74bc32-47ce-47fa-b275-3da8e5a3c7b9', 'admin', '$2a$10$vVQyquBMWkGmiM4vJBgYnOMqj8b7Laq0OsV3Yc6cBbba9NhiStmAG', 'default.png');

-- ----------------------------
-- Table structure for adopts
-- ----------------------------
DROP TABLE IF EXISTS `adopts`;
CREATE TABLE `adopts`  (
  `adopt_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `adopt_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `adopt_birthday` date NULL DEFAULT NULL,
  `adopt_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `adopt_status` int(11) NULL DEFAULT NULL COMMENT '0被领养了',
  `adopt_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `adopt_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `adopt_sex` int(11) NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `adopt_var` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '品种',
  PRIMARY KEY (`adopt_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of adopts
-- ----------------------------
INSERT INTO `adopts` VALUES ('3b8153bb-105c-4ac6-93a3-b09f1e631997', '暹罗猫大黑', '2024-04-04', 'pet_avatar-1714048293605', 1, '广东省潮州市潮安区庵埠镇', '暹（xiān）罗猫是世界著名的短毛猫，也是短毛猫的代表品种。种族原产于暹罗（今泰国），故名暹罗猫。在200多年前，这种珍贵的猫仅在泰国的皇宫和大寺院中饲养，是足不出户的贵族。暹罗猫能够较好适应主人当地的气候，且性格刚烈好动，机智灵活，好奇心特强，善解人意', 1, '', '猫');
INSERT INTO `adopts` VALUES ('4b7eb3d3-70b0-4e01-b530-bdb80d55fcd9', '英短猫大白', '2024-04-04', 'pet_avatar-1714048356842', 1, 'asd', '英国短毛猫是食肉目猫科猫属的哺乳动物。 身体中等到大型，胸、肩、臀均宽，肌肉发达；头宽、圆而大，满月脸颊，鼻子短，下巴坚固，和鼻子构成垂线；耳朵大小中等，眼睛大而圆，间距大；尾巴长度为身长的2/3，毛型短而密，质地暗。英国短毛猫是最善于捕猎的猫类之一，被英国人公认为是“捕鼠能手”。', 1, '', 'asdasd');
INSERT INTO `adopts` VALUES ('652453ec-1824-4794-8b72-62a9036d4ed9', '柯基', '2024-04-04', 'pet_avatar-1714048467794', 1, 'asd', '威尔士柯基犬，是食肉目犬科犬属哺乳动物。 [9]威尔士柯基犬眼睛为棕褐色，中等大小，呈卵圆形，眼圈为暗黑色；耳中等大小，直立，耳尖呈圆形；嘴鼻部优美且紧凑，缺毛，为先天性特征；胸部宽度适中，向下逐渐变细；后躯的肌肉发达且结实，但宽度略小于肩部。 威尔士柯基犬名字来自威尔士语“corrci”娇小之犬的意思', 0, '', '狗');
INSERT INTO `adopts` VALUES ('80446c1c-39e8-4bf0-9625-4b7d2735f3ea', '哆啦A梦', '2024-04-10', 'pet_avatar-1713618644872', 1, 'asd', '机器猫', 1, '', '猫');

-- ----------------------------
-- Table structure for applys
-- ----------------------------
DROP TABLE IF EXISTS `applys`;
CREATE TABLE `applys`  (
  `apply_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `experience` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pet` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `marriage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `income` double NULL DEFAULT NULL,
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `adopt_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`apply_id`) USING BTREE,
  INDEX `adopt_id`(`adopt_id`) USING BTREE,
  CONSTRAINT `applys_ibfk_1` FOREIGN KEY (`adopt_id`) REFERENCES `adopts` (`adopt_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of applys
-- ----------------------------
INSERT INTO `applys` VALUES ('f3bcaeb9-cb5d-4189-a304-42e07142dcb9', '男', 111, '有', '有', '单身', 11111, 'asdase', 'asdasdasd', '13160605277', 'asdasd', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', '拒绝', '3b8153bb-105c-4ac6-93a3-b09f1e631997');

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles`  (
  `article_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文章ID',
  `article_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '文本内容',
  `article_date` date NULL DEFAULT NULL COMMENT '文章时间',
  `article_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '文章封面',
  `article_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`article_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('60cc68ee-fdd1-40c3-9b23-c9d96d90235e', '<p>揭秘宠物世界：你与你的小伙伴之间的奇妙科学</p><p><img src=\"http://192.168.6.6:9000/article_uploads/article_image-1715086930490\" alt=\"\" data-href=\"\" style=\"width: 92.00px;height: 92.00px;\"/></p><p>一、宠物的起源与演化</p><p><br></p><p>宠物的历史可以追溯到古代，那时人们为了生存而驯化野生动物。随着时间的推移s，这些动物逐渐演化成了我们今天的宠物，如狗、猫、鸟、鱼等。这些宠物不仅为我们提供了陪伴，还帮助我们建立了深厚的情感联系。</p><p>asd</p><p>二、宠物与人类的关系</p><p><br></p><p>宠物与人类之间的关系十分复杂。研究表明，与宠物相处可以降低人的压力、焦虑和抑郁情绪，提高心理健康水平。此外，宠物还能促进人的社交互动，帮助人们建立更紧密的人际关系。</p><p>三、宠物的营养与健康</p><p><br></p><p>为了保持宠物的健康，我们需要关注它们的营养需求。不同种类的宠物需要不同的食物成分，因此我们需要根据宠物的种类、年龄、健康状况等因素来制定合适的饮食计划。此外，定期的兽医检查和疫苗接种也是保持宠物健康的关键。</p><p>s</p><p>四、宠物的行为习性</p><p><br></p><p>宠物具有独特的行为习性，这些习性反映了它们的个性和需求。例如，狗会通过摇尾巴、吠叫等方式来表达情绪，而猫则更倾向于通过身体接触来建立亲密关系。了解宠物的行为习性有助于我们更好地与它们相处，满足它们的需求。</p><p><br></p><p>五、宠物的养护与训练</p><p><br></p><p>养护和训练宠物需要一定的技巧和经验。对于新手宠物主人来说，了解宠物的日常护理、训练方法和常见问题处理等方面的知识是非常必要的。此外，参加宠物培训课程和与其他宠物主人交流经验也是提升养护和训练水平的有效途径。</p><p><br></p><p>总之，宠物已经成为我们生活中不可或缺的一部分。通过了解宠物的起源、与人类的关系、营养与健康、行为习性以及养护与训练等方面的知识，我们可以更好地照顾和陪伴我们的宠物小伙伴，</p>', '2024-04-09', 'http://192.168.6.6:9000/article_uploads/article_image-1715086921350', '宠物科普');
INSERT INTO `articles` VALUES ('a4011825-3b61-44b9-aaa9-f53423e710de', '<p><strong>第一部分：犬类宠物</strong></p><p>狗是人类最受欢迎的宠物之一。它们不仅拥有各种各样的品种，还具有智商高、忠诚、善解人意等优点。然而，每个犬种都有其独特的需求和特点，因此了解您选择的品种是至关重要的。有些狗需要更多的运动，而有些则更适合家庭生活。此外，了解狗的行为语言和培养良好的行为习惯也是养狗的关键。</p><p><img src=\"http://localhost:9000/article_uploads/article_image-1715086587347\" alt=\"\" data-href=\"\" style=\"\"/></p><p><strong>第二部分：猫类宠物</strong></p><p>猫是另一种常见的宠物选择。它们独立、干净、灵活，并可以通过舔毛来保持整洁。了解猫的身体语言和喜好是与它们建立亲密关系的关键。例如，当猫摇动尾巴时，表示它们不高兴或不安。此外，提供合适的猫砂盆、定期洗刷和饮食管理对于猫的健康和幸福也非常重要。</p><p><strong>第三部分：小型哺乳动物</strong></p><p>除了狗和猫之外，许多人还选择小型哺乳动物作为宠物。这些包括仓鼠、兔子、龙猫等。这些小动物需要特定的饲养环境和饮食。例如，仓鼠需要轮子和隧道来保持活跃，并提供适当的食物和水源。兔子需要足够的空间来活动和咀嚼，以保持牙齿的健康。</p><p><strong>第四部分：爬行动物和水生动物</strong></p><p>一些人喜欢养爬行动物，如蜥蜴、蛇等，而另一些人则喜欢养水生动物，如鱼、龟等。这些宠物需要特定的饲养环境和饮食，如恒温箱、合适的水族箱等。此外，了解它们的行为和习性也是确保它们健康和幸福的关键。<br><img src=\"http://192.168.6.4:9000/article_uploads/article_image-1713790784290\" alt=\"\" data-href=\"\" style=\"width: 192.00px;height: 192.00px;\"/></p><p>无论您选择了哪种宠物，了解它们的科学知识和需求都是养护它们的基础。通过正确的饲养和培养良好的行为习惯，我们可以与宠物建立更深厚的关系，并确保它们的健康和幸福。让我们珍惜这些与我们共同生活的可爱伴侣，享受它们带来的快乐和温暖。</p>', '2024-04-03', 'http://localhost:9000/article_uploads/article_image-1715086595332', '新手养宠推荐');

-- ----------------------------
-- Table structure for good_categories
-- ----------------------------
DROP TABLE IF EXISTS `good_categories`;
CREATE TABLE `good_categories`  (
  `good_category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `good_category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `parent_category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_category_order` int(11) NULL DEFAULT NULL,
  `good_category_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_category_display` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`good_category_id`) USING BTREE,
  INDEX `good_categories_ibfk_1`(`parent_category_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good_categories
-- ----------------------------
INSERT INTO `good_categories` VALUES ('06fda0f6-97a9-445f-abc4-9b5fa4cb5e30', '皮肤药品', '2', 'd4d9cd1a-9b9b-472c-bd9b-ab10c1e0c62e', 1, 'good_category_image-1713353089272', 1);
INSERT INTO `good_categories` VALUES ('291bdeff-aa8a-45f5-b0ff-f4af9fdb7fc1', '冻干零食', '2', 'eae54e57-1136-4c34-863e-bc801390ab85', 2, 'good_category_image-1713338304633', 1);
INSERT INTO `good_categories` VALUES ('31905f94-de52-43e9-8768-16ccd182442e', '补钙健骨', '2', 'ec41896c-1269-41cb-b644-3a1d24f15fae', 4, 'good_category_image-1713338538725', 1);
INSERT INTO `good_categories` VALUES ('342ca4c8-11fe-4e4b-8c5a-1198fc4a4a4c', '逗猫玩具', '2', '2e60465c-d2c2-44a9-ae17-31737f00e45f', 1, 'good_category_image-1713338717152', 1);
INSERT INTO `good_categories` VALUES ('3767d86a-7e08-4e02-b21e-1e4a92df6006', '毛绒玩具', '2', '0f63bd3d-ad40-4325-8e5e-8566ddb3c9de', 2, 'good_category_image-1713338662282', 1);
INSERT INTO `good_categories` VALUES ('3975fa2c-f8ef-42e8-953d-cf5845b6a1a4', '磨牙洁齿', '2', 'e5165253-bf66-4d0e-a478-74960318baaa', 1, 'good_category_image-1713337570063', 1);
INSERT INTO `good_categories` VALUES ('3bf73718-4c5a-4fb8-8d94-cfffcb033417', '犬猫驱虫', '2', 'd4d9cd1a-9b9b-472c-bd9b-ab10c1e0c62e', 2, 'good_category_image-1713353163185', 2);
INSERT INTO `good_categories` VALUES ('44f4caf1-1fc0-41d4-9199-b44e33bd7c63', '猫咪主粮', '2', '522d7d5d-b395-492d-ac0c-5518710584ba', 2, 'maomizhuliang.png', 1);
INSERT INTO `good_categories` VALUES ('4915ae56-0d44-4154-a4ab-f37f942823ad', '综合营养', '2', 'ec41896c-1269-41cb-b644-3a1d24f15fae', 1, 'good_category_image-1713338377390', 1);
INSERT INTO `good_categories` VALUES ('50da5dd7-dcc8-4610-b36b-8800d7915b56', '湿粮零食', '2', 'e5165253-bf66-4d0e-a478-74960318baaa', 3, 'good_category_image-1713338221023', 1);
INSERT INTO `good_categories` VALUES ('5bc33716-3db9-46f1-8c7e-fa0d75586e0e', '尿片湿巾', '2', 'baddac80-0140-45a5-8dde-9691339af150', 2, 'good_category_image-1713338989078', 1);
INSERT INTO `good_categories` VALUES ('62c8f2fe-f143-4ca3-9693-8e220845a554', '宠物出行', '2', 'f44ce78f-38b3-46dc-8877-2f1c019821ab', 2, 'good_category_image-1713339536143', 1);
INSERT INTO `good_categories` VALUES ('64140606-64b6-45b3-af2f-beaee4e77dbe', '清洁除臭', '2', '8a822cfa-3e72-4d99-837e-6f6f03135aa5', 3, 'good_category_image-1713339054022', 1);
INSERT INTO `good_categories` VALUES ('72593b88-55a9-4283-919f-e7a4930b21bb', '罐头湿粮', '2', 'eae54e57-1136-4c34-863e-bc801390ab85', 1, 'good_category_image-1713338264797', 1);
INSERT INTO `good_categories` VALUES ('79ad56c0-22ee-4ac0-acd8-d5823e4d3324', '狗主食罐', '2', '9fadc1f9-afec-49a1-8272-97fe39584595', 3, 'good_category_image-1713337014530', 1);
INSERT INTO `good_categories` VALUES ('7cb9c9a1-ad98-4ad7-a601-74705d2c3507', '处方猫粮', '2', '522d7d5d-b395-492d-ac0c-5518710584ba', 4, 'good_category_image-1713337452757', 1);
INSERT INTO `good_categories` VALUES ('7effc417-ebfd-4bd5-83ef-37e8a20d1723', '国产狗粮', '2', '9fadc1f9-afec-49a1-8272-97fe39584595', 1, 'guochanggouliang.png', 1);
INSERT INTO `good_categories` VALUES ('8434f9a7-eac5-4c41-bc4a-640ed73de0e9', '宠物餐具', '2', 'f44ce78f-38b3-46dc-8877-2f1c019821ab', 1, 'good_category_image-1713339462386', 1);
INSERT INTO `good_categories` VALUES ('97712bb2-c1e9-4cdf-8758-b90eb081966a', '国产猫粮', '2', '522d7d5d-b395-492d-ac0c-5518710584ba', 1, 'guochangmaoliang.png', 1);
INSERT INTO `good_categories` VALUES ('9a2bf53a-9b91-4085-92fa-e10ef58b4f66', '肠胃调理', '2', 'ec41896c-1269-41cb-b644-3a1d24f15fae', 3, 'good_category_image-1713338486080', 1);
INSERT INTO `good_categories` VALUES ('b281a977-83ea-46a3-9776-117b740fa13f', '梳剪工具', '2', 'baddac80-0140-45a5-8dde-9691339af150', 1, 'good_category_image-1713339664835', 1);
INSERT INTO `good_categories` VALUES ('bf7a8a3b-a305-428a-ab17-4960d5522408', '爬架家具', '2', '2e60465c-d2c2-44a9-ae17-31737f00e45f', 3, 'good_category_image-1713338839650', 1);
INSERT INTO `good_categories` VALUES ('cc096943-d02f-4ac4-a8a7-773b85ac9f25', '猫砂厕所', '2', '8a822cfa-3e72-4d99-837e-6f6f03135aa5', 1, 'good_category_image-1713338923729', 1);
INSERT INTO `good_categories` VALUES ('cd2f6390-a632-48db-ae36-09ed0d4923b2', '猫主食罐', '2', '522d7d5d-b395-492d-ac0c-5518710584ba', 3, 'good_category_image-1713337257550', 1);
INSERT INTO `good_categories` VALUES ('ce67aed0-79c2-4c2f-a3ff-b34d84d2dd1f', '其他日用', '2', 'f44ce78f-38b3-46dc-8877-2f1c019821ab', 3, 'good_category_image-1713339585712', 1);
INSERT INTO `good_categories` VALUES ('cf760abc-33a4-4b6b-9ab0-04e2c9f2b396', '处方狗粮', '2', '9fadc1f9-afec-49a1-8272-97fe39584595', 4, 'good_category_image-1713337141058', 1);
INSERT INTO `good_categories` VALUES ('ddaa2cf0-9b48-4baa-8478-bdee6ffc0307', '肉类零食', '2', 'e5165253-bf66-4d0e-a478-74960318baaa', 2, 'good_category_image-1713337608410', 1);
INSERT INTO `good_categories` VALUES ('e48e73d3-f397-4256-9d46-6a8287b1118d', '美毛化毛', '2', 'ec41896c-1269-41cb-b644-3a1d24f15fae', 2, 'good_category_image-1713338438302', 1);
INSERT INTO `good_categories` VALUES ('e7e82096-30ef-4081-8b25-418929e6cd12', '狗狗主粮', '2', '9fadc1f9-afec-49a1-8272-97fe39584595', 2, 'good_category_image-1712319375387', 1);
INSERT INTO `good_categories` VALUES ('f3d49916-6b2a-49e7-81c9-3e331b32357e', '主食冻干', '2', '522d7d5d-b395-492d-ac0c-5518710584ba', 5, 'good_category_image-1713337499939', 1);
INSERT INTO `good_categories` VALUES ('f50e355a-1b36-46a3-ade6-2b543349b158', '磨爪玩具', '2', '2e60465c-d2c2-44a9-ae17-31737f00e45f', 2, 'good_category_image-1713338779016', 1);
INSERT INTO `good_categories` VALUES ('f87e8a9d-e48f-4047-975e-d4d03e8ad6b1', '磨牙玩具', '2', '0f63bd3d-ad40-4325-8e5e-8566ddb3c9de', 1, 'good_category_image-1713338609601', 1);

-- ----------------------------
-- Table structure for good_images
-- ----------------------------
DROP TABLE IF EXISTS `good_images`;
CREATE TABLE `good_images`  (
  `good_image_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_image_type` int(11) NULL DEFAULT NULL,
  `good_image_order` int(11) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good_images
-- ----------------------------
INSERT INTO `good_images` VALUES ('88fa2f37-0951-4e85-8557-fc368465828f', 'good_category_image-202405031518100.jpg', '060c17ee-50e1-4682-94bc-bae9d60eb8ff', 0, 0);
INSERT INTO `good_images` VALUES ('75cb9482-fe45-4f74-80cc-caec75fa45ee', 'good_category_image-202405031518101.jpg', '060c17ee-50e1-4682-94bc-bae9d60eb8ff', 0, 1);
INSERT INTO `good_images` VALUES ('414de32f-e401-4847-bd6e-c6587f277842', 'good_category_image-202405031518102.jpg', '060c17ee-50e1-4682-94bc-bae9d60eb8ff', 0, 2);
INSERT INTO `good_images` VALUES ('e2218417-8905-49c9-bace-ed0ace78dd19', 'good_category_image-202405031518103.jpg', '060c17ee-50e1-4682-94bc-bae9d60eb8ff', 1, 1);
INSERT INTO `good_images` VALUES ('cd556087-1f7d-4662-b39c-ead592708328', 'good_category_image-202405031518104.jpg', '060c17ee-50e1-4682-94bc-bae9d60eb8ff', 1, 2);
INSERT INTO `good_images` VALUES ('0f7717b0-5323-4f10-9b41-bfc591d02495', 'good_category_image-202405031522090.jpg', '0739b8cf-32e0-469d-bca7-9bb105ad5973', 0, 0);
INSERT INTO `good_images` VALUES ('8cb8d208-8cdb-4e1c-a0ab-2301051f0246', 'good_category_image-202405031522091.jpg', '0739b8cf-32e0-469d-bca7-9bb105ad5973', 0, 1);
INSERT INTO `good_images` VALUES ('1b8c2c0a-d2dc-4ff4-93c1-682be722f155', 'good_category_image-202405031522092.jpg', '0739b8cf-32e0-469d-bca7-9bb105ad5973', 0, 2);
INSERT INTO `good_images` VALUES ('7f2f558b-c14b-45ab-b56f-a1303d9d3a6f', 'good_category_image-202405031522093.jpg', '0739b8cf-32e0-469d-bca7-9bb105ad5973', 1, 1);
INSERT INTO `good_images` VALUES ('3fc2e962-b3b7-4e80-b851-3cb57068f592', 'good_category_image-202405031522094.jpg', '0739b8cf-32e0-469d-bca7-9bb105ad5973', 1, 2);
INSERT INTO `good_images` VALUES ('c323daf9-ca84-4aac-bd49-173abad422ea', 'good_category_image-202405031523250.jpg', '0bf7e3ff-d374-4dcb-8360-477cf9265b38', 0, 0);
INSERT INTO `good_images` VALUES ('589eb386-9f52-4282-86ff-a1d9462194a4', 'good_category_image-202405031523251.jpg', '0bf7e3ff-d374-4dcb-8360-477cf9265b38', 0, 1);
INSERT INTO `good_images` VALUES ('8402c38d-c3e5-4069-aa00-e87800f32ea0', 'good_category_image-202405031523252.jpg', '0bf7e3ff-d374-4dcb-8360-477cf9265b38', 0, 2);
INSERT INTO `good_images` VALUES ('dbc1c028-f098-4832-bda5-21cbf9af074c', 'good_category_image-202405031523253.jpg', '0bf7e3ff-d374-4dcb-8360-477cf9265b38', 1, 1);
INSERT INTO `good_images` VALUES ('4bdc1ded-978e-4db2-a53a-43d5b0496423', 'good_category_image-202405031523254.jpg', '0bf7e3ff-d374-4dcb-8360-477cf9265b38', 1, 2);
INSERT INTO `good_images` VALUES ('e2722f8b-d548-491d-8397-3c8ae99e2f9e', 'good_image-202405031618500.jpg', '171596b9-b85b-4579-a27c-1b678baf327e', 0, 0);
INSERT INTO `good_images` VALUES ('af3e30bb-4083-41da-a9df-1d51a4225a16', 'good_image-202405031618501.jpg', '171596b9-b85b-4579-a27c-1b678baf327e', 0, 1);
INSERT INTO `good_images` VALUES ('237a76de-162a-4178-91bf-a8608c2b1539', 'good_image-202405031618502.jpg', '171596b9-b85b-4579-a27c-1b678baf327e', 0, 2);
INSERT INTO `good_images` VALUES ('8da0e5ed-6f84-42eb-99bb-5c836638aad7', 'good_image-202405031618503.jpg', '171596b9-b85b-4579-a27c-1b678baf327e', 1, 1);
INSERT INTO `good_images` VALUES ('263533b8-2afb-4ba1-bd37-9a199c3c9262', 'good_image-202405031618504.jpg', '171596b9-b85b-4579-a27c-1b678baf327e', 1, 2);
INSERT INTO `good_images` VALUES ('faf4114e-d6eb-49a0-be16-92a0b22c2678', 'good_image-202405031622010.jpg', '17d1a3fc-03d0-4f32-b354-7d2e602e0864', 0, 0);
INSERT INTO `good_images` VALUES ('d9be2673-43e6-4537-beee-0f538dd9a85f', 'good_image-202405031622011.jpg', '17d1a3fc-03d0-4f32-b354-7d2e602e0864', 0, 1);
INSERT INTO `good_images` VALUES ('578c8329-e236-4513-b19f-6d2229d098bb', 'good_image-202405031622012.jpg', '17d1a3fc-03d0-4f32-b354-7d2e602e0864', 0, 2);
INSERT INTO `good_images` VALUES ('b0341094-692d-4381-b6ce-56ec066ad701', 'good_image-202405031622013.jpg', '17d1a3fc-03d0-4f32-b354-7d2e602e0864', 1, 1);
INSERT INTO `good_images` VALUES ('b6c43266-736a-4986-876b-ce53c8b2f891', 'good_image-202405031622014.jpg', '17d1a3fc-03d0-4f32-b354-7d2e602e0864', 1, 2);
INSERT INTO `good_images` VALUES ('de5561ee-326c-4117-8f34-a687a80e91b9', 'good_image-202405031623130.jpg', '2558b431-deb2-4cdd-9a77-022894665811', 0, 0);
INSERT INTO `good_images` VALUES ('9a5a8e28-bc2f-4b99-94c0-98b17f0cecb4', 'good_image-202405031623131.jpg', '2558b431-deb2-4cdd-9a77-022894665811', 0, 1);
INSERT INTO `good_images` VALUES ('17f8556f-8239-4ce4-9878-62ca6e90854c', 'good_image-202405031623132.jpg', '2558b431-deb2-4cdd-9a77-022894665811', 0, 2);
INSERT INTO `good_images` VALUES ('530cddea-f867-4ec4-8e85-55cb5f27335b', 'good_image-202405031623133.jpg', '2558b431-deb2-4cdd-9a77-022894665811', 1, 1);
INSERT INTO `good_images` VALUES ('75683445-a473-4f65-8b62-a327449c7c7b', 'good_image-202405031623134.jpg', '2558b431-deb2-4cdd-9a77-022894665811', 1, 2);
INSERT INTO `good_images` VALUES ('9e3159aa-87c9-4356-99e7-2fc5ce95dee5', 'good_image-202405031624530.jpg', '2785cfa1-81b9-4a9e-b266-0583ef4b76d2', 0, 0);
INSERT INTO `good_images` VALUES ('ecefbfd7-81e5-480f-b69c-a9cde00f5478', 'good_image-202405031624531.jpg', '2785cfa1-81b9-4a9e-b266-0583ef4b76d2', 0, 1);
INSERT INTO `good_images` VALUES ('08b21919-803c-48f0-a59f-a8279a4bfa1d', 'good_image-202405031624532.jpg', '2785cfa1-81b9-4a9e-b266-0583ef4b76d2', 0, 2);
INSERT INTO `good_images` VALUES ('abfe474b-7447-4076-a7b5-d7cffad6ed43', 'good_image-202405031624533.jpg', '2785cfa1-81b9-4a9e-b266-0583ef4b76d2', 1, 1);
INSERT INTO `good_images` VALUES ('93a78d13-32e2-41b0-8fed-02c39ce9cc25', 'good_image-202405031624534.jpg', '2785cfa1-81b9-4a9e-b266-0583ef4b76d2', 1, 2);
INSERT INTO `good_images` VALUES ('a5f00439-893d-47ca-a58b-6e5364d95605', 'good_image-202405031625510.jpg', '2cbf3639-ba45-44a8-89f6-2c09e39bbfc6', 0, 0);
INSERT INTO `good_images` VALUES ('7ba5808f-c8db-4631-b176-403758ea7f6e', 'good_image-202405031625511.jpg', '2cbf3639-ba45-44a8-89f6-2c09e39bbfc6', 0, 1);
INSERT INTO `good_images` VALUES ('8a9ef1ed-0e74-448b-801f-2a44f9d298f3', 'good_image-202405031625512.jpg', '2cbf3639-ba45-44a8-89f6-2c09e39bbfc6', 0, 2);
INSERT INTO `good_images` VALUES ('c9a9f290-edff-40a2-8048-e5678ae55781', 'good_image-202405031625513.jpg', '2cbf3639-ba45-44a8-89f6-2c09e39bbfc6', 1, 1);
INSERT INTO `good_images` VALUES ('fda81b0c-3804-48a5-948d-f5a1bc4eb2f1', 'good_image-202405031625514.jpg', '2cbf3639-ba45-44a8-89f6-2c09e39bbfc6', 1, 2);
INSERT INTO `good_images` VALUES ('1e939441-56e0-4222-9a07-a93c3d1b8039', 'good_image-202405031626500.jpg', '2dbbf3b7-7799-4aff-8971-98ef9e81abc5', 0, 0);
INSERT INTO `good_images` VALUES ('7d973aa8-25ac-4edf-9ac1-b98bca13451b', 'good_image-202405031626501.jpg', '2dbbf3b7-7799-4aff-8971-98ef9e81abc5', 0, 1);
INSERT INTO `good_images` VALUES ('e44c5863-d5f4-4b22-97e4-8b0d486f6054', 'good_image-202405031626502.jpg', '2dbbf3b7-7799-4aff-8971-98ef9e81abc5', 0, 2);
INSERT INTO `good_images` VALUES ('cad5bc38-a690-46c3-9a51-6d2049c9d88f', 'good_image-202405031626503.jpg', '2dbbf3b7-7799-4aff-8971-98ef9e81abc5', 1, 1);
INSERT INTO `good_images` VALUES ('092f7289-ed36-46c3-bc8c-dc2dd0333b0e', 'good_image-202405031626504.jpg', '2dbbf3b7-7799-4aff-8971-98ef9e81abc5', 1, 2);
INSERT INTO `good_images` VALUES ('34c09608-a41f-4b56-b810-02aa335fe01d', 'good_image-202405031628380.jpg', '32e3cbd7-5977-4273-99f3-7eb1842966e2', 0, 0);
INSERT INTO `good_images` VALUES ('fc50a368-1f83-41aa-8ca9-3ea5feab4f81', 'good_image-202405031628391.jpg', '32e3cbd7-5977-4273-99f3-7eb1842966e2', 0, 1);
INSERT INTO `good_images` VALUES ('54ed773a-f2de-40fc-9dfa-3e7f13a2ffaf', 'good_image-202405031628392.jpg', '32e3cbd7-5977-4273-99f3-7eb1842966e2', 0, 2);
INSERT INTO `good_images` VALUES ('23694dc2-624e-4b07-8674-0358118090ab', 'good_image-202405031628393.jpg', '32e3cbd7-5977-4273-99f3-7eb1842966e2', 1, 1);
INSERT INTO `good_images` VALUES ('d202c355-5fce-42e6-b5ff-ad209cecabed', 'good_image-202405031628394.jpg', '32e3cbd7-5977-4273-99f3-7eb1842966e2', 1, 2);
INSERT INTO `good_images` VALUES ('c0d61e98-f633-43c9-8205-01b873f5694b', 'good_image-202405031629270.jpg', '336c6919-6f63-42e7-80e1-e36a008b4e41', 0, 0);
INSERT INTO `good_images` VALUES ('6a0fc9ef-a8d9-4e31-8135-bdb8e63946b3', 'good_image-202405031629271.jpg', '336c6919-6f63-42e7-80e1-e36a008b4e41', 0, 1);
INSERT INTO `good_images` VALUES ('8c7bfbb2-a126-4e30-903b-7b12eebd65d9', 'good_image-202405031629272.jpg', '336c6919-6f63-42e7-80e1-e36a008b4e41', 0, 2);
INSERT INTO `good_images` VALUES ('9b1b8668-3c11-440b-9922-f1a5cbd637f8', 'good_image-202405031629273.jpg', '336c6919-6f63-42e7-80e1-e36a008b4e41', 1, 1);
INSERT INTO `good_images` VALUES ('63748802-2dcb-4502-8299-f4b67e8e3e1d', 'good_image-202405031629274.jpg', '336c6919-6f63-42e7-80e1-e36a008b4e41', 1, 2);
INSERT INTO `good_images` VALUES ('4b0fbc4f-0aee-404f-b28b-8e6423aa8df8', 'good_image-202405031630340.jpg', '3b952ce0-0653-47fc-bf15-8fdc2d220386', 0, 0);
INSERT INTO `good_images` VALUES ('c33ee9a0-0954-4c5f-9dbd-fa3b6e15845f', 'good_image-202405031630341.jpg', '3b952ce0-0653-47fc-bf15-8fdc2d220386', 0, 1);
INSERT INTO `good_images` VALUES ('fb92bd3e-1e84-4eea-a5d6-90c04bb606bb', 'good_image-202405031630342.jpg', '3b952ce0-0653-47fc-bf15-8fdc2d220386', 0, 2);
INSERT INTO `good_images` VALUES ('c6a1be33-a328-427a-a043-654a9b556fea', 'good_image-202405031630343.jpg', '3b952ce0-0653-47fc-bf15-8fdc2d220386', 1, 1);
INSERT INTO `good_images` VALUES ('3ee99f9b-3a68-48c6-8ece-8658ce810161', 'good_image-202405031630344.jpg', '3b952ce0-0653-47fc-bf15-8fdc2d220386', 1, 2);
INSERT INTO `good_images` VALUES ('a3568206-b4f9-40e6-b7a5-b2cb16e54bdf', 'good_image-202405031632310.jpg', '40c7e234-9e77-4914-88e0-a45b89b64777', 0, 0);
INSERT INTO `good_images` VALUES ('dd9e8ae8-b3e1-459a-8f57-a68f3d197f47', 'good_image-202405031632311.jpg', '40c7e234-9e77-4914-88e0-a45b89b64777', 0, 1);
INSERT INTO `good_images` VALUES ('1c7c9a1e-2a51-434e-887b-bb1f891a85d7', 'good_image-202405031632312.jpg', '40c7e234-9e77-4914-88e0-a45b89b64777', 0, 2);
INSERT INTO `good_images` VALUES ('409e8cbe-fe2c-4124-9ee2-adff17f75c2b', 'good_image-202405031632313.jpg', '40c7e234-9e77-4914-88e0-a45b89b64777', 1, 1);
INSERT INTO `good_images` VALUES ('20e41944-15ae-4b28-a34f-42315781939f', 'good_image-202405031632314.jpg', '40c7e234-9e77-4914-88e0-a45b89b64777', 1, 2);
INSERT INTO `good_images` VALUES ('d278b50f-be5c-4a8c-bbbb-18adafb85d6b', 'good_image-202405031633360.jpg', '4473e74b-6ba5-445f-af8d-51b9badf1484', 0, 0);
INSERT INTO `good_images` VALUES ('93ebab0a-3af8-4999-a2b9-a6eaa81680f1', 'good_image-202405031633361.jpg', '4473e74b-6ba5-445f-af8d-51b9badf1484', 0, 1);
INSERT INTO `good_images` VALUES ('431ea020-599c-4400-8faf-28a8decefe4e', 'good_image-202405031633362.jpg', '4473e74b-6ba5-445f-af8d-51b9badf1484', 0, 2);
INSERT INTO `good_images` VALUES ('7b4acbf4-e7d7-47ee-84ea-4cdecf6c0052', 'good_image-202405031633363.jpg', '4473e74b-6ba5-445f-af8d-51b9badf1484', 1, 1);
INSERT INTO `good_images` VALUES ('3b71c38b-861c-49a1-8517-fb9150c5125b', 'good_image-202405031633364.jpg', '4473e74b-6ba5-445f-af8d-51b9badf1484', 1, 2);
INSERT INTO `good_images` VALUES ('3dce634b-4aed-4ab3-b30e-de7c19fff9d7', 'good_image-202405031634290.jpg', '44cb179e-9c0d-42ed-adac-30bd9751c62c', 0, 0);
INSERT INTO `good_images` VALUES ('72cdd54c-36df-4103-a8d7-447293808079', 'good_image-202405031634291.jpg', '44cb179e-9c0d-42ed-adac-30bd9751c62c', 0, 1);
INSERT INTO `good_images` VALUES ('6ed03bc1-95b7-489b-92bf-9742625ad48b', 'good_image-202405031634292.jpg', '44cb179e-9c0d-42ed-adac-30bd9751c62c', 0, 2);
INSERT INTO `good_images` VALUES ('b310308e-fa6e-4f8c-8f5e-43afb2e0b2a7', 'good_image-202405031634293.jpg', '44cb179e-9c0d-42ed-adac-30bd9751c62c', 1, 1);
INSERT INTO `good_images` VALUES ('887186bd-9b55-4ba9-b68a-f3365ba85722', 'good_image-202405031634294.jpg', '44cb179e-9c0d-42ed-adac-30bd9751c62c', 1, 2);
INSERT INTO `good_images` VALUES ('c9f27d22-502d-4407-a6a6-18ef8a203ffa', 'good_image-202405031635250.jpg', '46055b93-a740-41d1-97ca-c85c2519e894', 0, 0);
INSERT INTO `good_images` VALUES ('fd1381e7-7b16-49cd-8050-5acc4da9c048', 'good_image-202405031635251.jpg', '46055b93-a740-41d1-97ca-c85c2519e894', 0, 1);
INSERT INTO `good_images` VALUES ('7dfc22ff-dbc7-46bb-88c1-4c9ecd88be3f', 'good_image-202405031635252.jpg', '46055b93-a740-41d1-97ca-c85c2519e894', 0, 2);
INSERT INTO `good_images` VALUES ('51d61f09-9966-4584-a8ad-c9aa9cf6965c', 'good_image-202405031635253.jpg', '46055b93-a740-41d1-97ca-c85c2519e894', 1, 1);
INSERT INTO `good_images` VALUES ('6f1c2369-fb14-4303-984a-3ffa45dd23dd', 'good_image-202405031635254.jpg', '46055b93-a740-41d1-97ca-c85c2519e894', 1, 2);
INSERT INTO `good_images` VALUES ('39de4611-1abd-4ad5-a401-0f78255b6f88', 'good_image-202405031636140.jpg', '481f4b71-7a34-4f1c-ac3c-7dd11ad9c019', 0, 0);
INSERT INTO `good_images` VALUES ('5e66d8bc-3109-496b-a2bb-3de2e72e1207', 'good_image-202405031636141.jpg', '481f4b71-7a34-4f1c-ac3c-7dd11ad9c019', 0, 1);
INSERT INTO `good_images` VALUES ('1f53070a-b72e-4a5b-b657-7962375c5ef4', 'good_image-202405031636142.jpg', '481f4b71-7a34-4f1c-ac3c-7dd11ad9c019', 0, 2);
INSERT INTO `good_images` VALUES ('3a53b84a-9cff-414d-afca-dba32510350a', 'good_image-202405031636143.jpg', '481f4b71-7a34-4f1c-ac3c-7dd11ad9c019', 1, 1);
INSERT INTO `good_images` VALUES ('082f71fb-cecf-44ca-b501-6f9470bb01c2', 'good_image-202405031636144.jpg', '481f4b71-7a34-4f1c-ac3c-7dd11ad9c019', 1, 2);
INSERT INTO `good_images` VALUES ('729aa258-75da-4cd0-9718-aae71d295bda', 'good_image-202405051532020.jpg', '39935621-d8c6-4694-996a-6126401494cc', 0, 0);
INSERT INTO `good_images` VALUES ('4b0d7d2b-1f43-4d32-b227-cb516da28172', 'good_image-202405051532021.jpg', '39935621-d8c6-4694-996a-6126401494cc', 0, 1);
INSERT INTO `good_images` VALUES ('3ecd026a-f837-4618-920d-a947de072020', 'good_image-202405051532022.jpg', '39935621-d8c6-4694-996a-6126401494cc', 0, 2);
INSERT INTO `good_images` VALUES ('0771d669-9c26-4469-9e9f-22425e800b01', 'good_image-202405051532023.jpg', '39935621-d8c6-4694-996a-6126401494cc', 1, 1);
INSERT INTO `good_images` VALUES ('7e0cb7a1-54b7-4ade-b6bc-cf6ea64d9811', 'good_image-202405051532024.jpg', '39935621-d8c6-4694-996a-6126401494cc', 1, 2);
INSERT INTO `good_images` VALUES ('b345f69b-cb46-465a-bbfe-19c535e19574', 'good_image-202405051536130.jpg', '9222db09-240b-4429-8295-6575a083f63e', 0, 0);
INSERT INTO `good_images` VALUES ('d814d611-45af-4c66-b0f3-d618a5dc87b9', 'good_image-202405051536131.jpg', '9222db09-240b-4429-8295-6575a083f63e', 0, 1);
INSERT INTO `good_images` VALUES ('c19005a5-6259-4d6f-bd5a-8233e1f56a24', 'good_image-202405051536132.jpg', '9222db09-240b-4429-8295-6575a083f63e', 0, 2);
INSERT INTO `good_images` VALUES ('3ab4df75-bc45-455a-902d-c3d8518a0cb7', 'good_image-202405051536133.jpg', '9222db09-240b-4429-8295-6575a083f63e', 1, 1);
INSERT INTO `good_images` VALUES ('852cf11d-cb0f-4bed-a5fc-c4b3b50ba20d', 'good_image-202405051536134.jpg', '9222db09-240b-4429-8295-6575a083f63e', 1, 2);
INSERT INTO `good_images` VALUES ('45ec882d-6747-417d-809f-96147064fe5f', 'good_image-202405051538410.jpg', 'bfdf648f-d9cb-47a9-845c-8e15756a9860', 0, 0);
INSERT INTO `good_images` VALUES ('13c545db-a7b7-4dc1-bcc9-821252219e78', 'good_image-202405051538411.jpg', 'bfdf648f-d9cb-47a9-845c-8e15756a9860', 0, 1);
INSERT INTO `good_images` VALUES ('e02545bf-65b1-437b-9bfe-c4c08dddf62a', 'good_image-202405051538412.jpg', 'bfdf648f-d9cb-47a9-845c-8e15756a9860', 0, 2);
INSERT INTO `good_images` VALUES ('ef0d638f-7d57-4fcc-950a-6cf70a46593a', 'good_image-202405051538413.jpg', 'bfdf648f-d9cb-47a9-845c-8e15756a9860', 1, 1);
INSERT INTO `good_images` VALUES ('8b56492a-009b-4cda-ac9b-2d0ebc85b3d8', 'good_image-202405051538414.jpg', 'bfdf648f-d9cb-47a9-845c-8e15756a9860', 1, 2);
INSERT INTO `good_images` VALUES ('edc3d504-f9f6-441b-999d-71dcbe521377', 'good_image-202405051539340.jpg', 'd5453b0f-5b54-4eed-bb35-c061e88ae8d0', 0, 0);
INSERT INTO `good_images` VALUES ('86700f30-b5d1-4e62-8122-d854ef02a054', 'good_image-202405051539341.jpg', 'd5453b0f-5b54-4eed-bb35-c061e88ae8d0', 0, 1);
INSERT INTO `good_images` VALUES ('c09966f0-bab7-4746-b103-1a1b15416fa0', 'good_image-202405051539342.jpg', 'd5453b0f-5b54-4eed-bb35-c061e88ae8d0', 0, 2);
INSERT INTO `good_images` VALUES ('5a46d662-9b1b-4582-acd2-1eb53f19ad8c', 'good_image-202405051539343.jpg', 'd5453b0f-5b54-4eed-bb35-c061e88ae8d0', 1, 1);
INSERT INTO `good_images` VALUES ('ad3aeb12-a5ca-4ca7-a8e1-044eb4cd1348', 'good_image-202405051539344.jpg', 'd5453b0f-5b54-4eed-bb35-c061e88ae8d0', 1, 2);
INSERT INTO `good_images` VALUES ('15908450-9346-4550-ab48-f2529f922475', 'good_image-202405051540580.jpg', 'e4560084-d38d-4110-b3a8-dfbb9e7cd8ae', 0, 0);
INSERT INTO `good_images` VALUES ('1701c25c-aa48-41d6-807c-7d73680b01b3', 'good_image-202405051540581.jpg', 'e4560084-d38d-4110-b3a8-dfbb9e7cd8ae', 0, 1);
INSERT INTO `good_images` VALUES ('0229f7a9-dda5-490e-8ea6-75bc8fbe1a62', 'good_image-202405051540582.jpg', 'e4560084-d38d-4110-b3a8-dfbb9e7cd8ae', 0, 2);
INSERT INTO `good_images` VALUES ('cbe58a1f-f3cf-44cb-bf1a-2f6f2f8b7e56', 'good_image-202405051540583.jpg', 'e4560084-d38d-4110-b3a8-dfbb9e7cd8ae', 1, 1);
INSERT INTO `good_images` VALUES ('bc135704-d74d-48b0-a847-21d631ec4527', 'good_image-202405051540584.jpg', 'e4560084-d38d-4110-b3a8-dfbb9e7cd8ae', 1, 2);
INSERT INTO `good_images` VALUES ('6ee653b2-2b46-4824-8f79-cfeb5b482dfb', 'good_image-202405051551380.jpg', '165c3e3c-6d7f-42b0-bf11-93d507c77a73', 0, 0);
INSERT INTO `good_images` VALUES ('1b84a7e8-2bf7-47e3-ba3f-3a18e39288c4', 'good_image-202405051551391.jpg', '165c3e3c-6d7f-42b0-bf11-93d507c77a73', 0, 1);
INSERT INTO `good_images` VALUES ('be598205-55d4-4227-b18f-5e68edee7aed', 'good_image-202405051551392.jpg', '165c3e3c-6d7f-42b0-bf11-93d507c77a73', 0, 2);
INSERT INTO `good_images` VALUES ('e45014d9-6e50-413a-9747-4a47bb90a356', 'good_image-202405051551393.jpg', '165c3e3c-6d7f-42b0-bf11-93d507c77a73', 1, 1);
INSERT INTO `good_images` VALUES ('6a122f77-6de9-4ed8-bf93-f0cae687532f', 'good_image-202405051551394.jpg', '165c3e3c-6d7f-42b0-bf11-93d507c77a73', 1, 2);
INSERT INTO `good_images` VALUES ('0fb6e6db-5cff-4bf1-b930-a026c92943b5', 'good_image-202405051554370.jpg', '90dbd4f2-4864-4468-aa63-65492440e42a', 0, 0);
INSERT INTO `good_images` VALUES ('bd3472a9-8f8e-4a70-84d7-238186c869d8', 'good_image-202405051554371.jpg', '90dbd4f2-4864-4468-aa63-65492440e42a', 0, 1);
INSERT INTO `good_images` VALUES ('18f08fa6-8b31-4f48-b9ac-bc9549690cfb', 'good_image-202405051554372.jpg', '90dbd4f2-4864-4468-aa63-65492440e42a', 0, 2);
INSERT INTO `good_images` VALUES ('c76f032f-26d2-434c-9c5f-f45360645b37', 'good_image-202405051554373.jpg', '90dbd4f2-4864-4468-aa63-65492440e42a', 1, 1);
INSERT INTO `good_images` VALUES ('8220dac2-e362-4113-9a8d-b321f4c96e69', 'good_image-202405051554374.jpg', '90dbd4f2-4864-4468-aa63-65492440e42a', 1, 2);
INSERT INTO `good_images` VALUES ('fd5b4dd0-1fbd-4d71-9a06-c7d3a6366535', 'good_image-202405051556270.jpg', '590b3786-17e8-42eb-8405-2ceb7a682102', 0, 0);
INSERT INTO `good_images` VALUES ('879d4caa-95aa-43df-bbd2-8df8a429bfcf', 'good_image-202405051556271.jpg', '590b3786-17e8-42eb-8405-2ceb7a682102', 0, 1);
INSERT INTO `good_images` VALUES ('47957cd4-dcdb-44bb-a7bd-f61b581b0d42', 'good_image-202405051556272.jpg', '590b3786-17e8-42eb-8405-2ceb7a682102', 0, 2);
INSERT INTO `good_images` VALUES ('05accc29-c512-4f19-945b-f826a85bc718', 'good_image-202405051556273.jpg', '590b3786-17e8-42eb-8405-2ceb7a682102', 1, 1);
INSERT INTO `good_images` VALUES ('d3a58d21-fa04-4464-a65e-652d0503ff9f', 'good_image-202405051556274.jpg', '590b3786-17e8-42eb-8405-2ceb7a682102', 1, 2);
INSERT INTO `good_images` VALUES ('034e5004-03ab-4a5e-9f84-aac4381631e9', 'good_image-202405051559550.jpg', '64b4fdad-eb1b-4955-b7ad-1cec94772f9e', 0, 0);
INSERT INTO `good_images` VALUES ('1b23aea1-9435-404b-a35e-841d4ea9d0a0', 'good_image-202405051559551.jpg', '64b4fdad-eb1b-4955-b7ad-1cec94772f9e', 0, 1);
INSERT INTO `good_images` VALUES ('5e2f496e-a65c-4744-8e1b-27729c0d83b5', 'good_image-202405051559552.jpg', '64b4fdad-eb1b-4955-b7ad-1cec94772f9e', 0, 2);
INSERT INTO `good_images` VALUES ('2c7a1856-0ade-4a5a-942a-19cce4467941', 'good_image-202405051559553.jpg', '64b4fdad-eb1b-4955-b7ad-1cec94772f9e', 1, 1);
INSERT INTO `good_images` VALUES ('047eb547-e8d0-42bc-9575-97562ba8f616', 'good_image-202405051559554.jpg', '64b4fdad-eb1b-4955-b7ad-1cec94772f9e', 1, 2);
INSERT INTO `good_images` VALUES ('ae07c8f2-326d-4167-8367-98345d87bd1a', 'good_image-202405051605150.jpg', 'f962e763-6478-4657-9874-7a479366a660', 0, 0);
INSERT INTO `good_images` VALUES ('c7169168-43bb-4cf3-a642-0828bd03772c', 'good_image-202405051605151.jpg', 'f962e763-6478-4657-9874-7a479366a660', 0, 1);
INSERT INTO `good_images` VALUES ('cc493c63-5bc6-494c-812c-a1003a85487a', 'good_image-202405051605152.jpg', 'f962e763-6478-4657-9874-7a479366a660', 0, 2);
INSERT INTO `good_images` VALUES ('ef103962-f809-42e9-a27f-d7cf974558ad', 'good_image-202405051605153.jpg', 'f962e763-6478-4657-9874-7a479366a660', 1, 1);
INSERT INTO `good_images` VALUES ('89d16558-625f-4f00-ae4f-bfa6ed4fe956', 'good_image-202405051605154.jpg', 'f962e763-6478-4657-9874-7a479366a660', 1, 2);
INSERT INTO `good_images` VALUES ('5c8ab63f-fe38-4da3-a964-49717d97992d', 'good_image-202405051617000.jpg', '4a1859e8-1caf-42ee-9edb-3913049af938', 0, 0);
INSERT INTO `good_images` VALUES ('e25cda6e-fc14-497c-bae6-87dab300bec5', 'good_image-202405051617001.jpg', '4a1859e8-1caf-42ee-9edb-3913049af938', 0, 1);
INSERT INTO `good_images` VALUES ('93f672a6-59c0-4f05-96b4-a675beb47a91', 'good_image-202405051617002.jpg', '4a1859e8-1caf-42ee-9edb-3913049af938', 0, 2);
INSERT INTO `good_images` VALUES ('cdadebc5-d4cb-4767-9cae-d0078ea16906', 'good_image-202405051617003.jpg', '4a1859e8-1caf-42ee-9edb-3913049af938', 1, 1);
INSERT INTO `good_images` VALUES ('aaf06bce-8e8d-40cc-8dd4-db6adc05b58a', 'good_image-202405051617004.jpg', '4a1859e8-1caf-42ee-9edb-3913049af938', 1, 2);
INSERT INTO `good_images` VALUES ('fdefdc52-c2d1-467f-a3d8-7815e71c8672', 'good_image-202405051622150.jpg', '61f665e4-8be4-406b-87cc-02c82d99ac44', 0, 0);
INSERT INTO `good_images` VALUES ('c82f047d-b454-46c7-9b90-bc6a6de76790', 'good_image-202405051622151.jpg', '61f665e4-8be4-406b-87cc-02c82d99ac44', 0, 1);
INSERT INTO `good_images` VALUES ('cd729064-31f8-465b-8ecd-57bc55007e6b', 'good_image-202405051622152.jpg', '61f665e4-8be4-406b-87cc-02c82d99ac44', 0, 2);
INSERT INTO `good_images` VALUES ('6da09d8b-c93a-4f5f-8118-7337e3dbb1a8', 'good_image-202405051622153.jpg', '61f665e4-8be4-406b-87cc-02c82d99ac44', 1, 1);
INSERT INTO `good_images` VALUES ('1e7be66e-d9c5-4325-a63e-6cab08ca7bcd', 'good_image-202405051622154.jpg', '61f665e4-8be4-406b-87cc-02c82d99ac44', 1, 2);
INSERT INTO `good_images` VALUES ('0afab215-9b48-4873-a2b4-87cca0ce7a36', 'good_image-202405051625020.jpg', '7f8f3cd6-9daa-4566-9352-118bb821c2ad', 0, 0);
INSERT INTO `good_images` VALUES ('8b919b4d-989c-4807-830d-8db52c359d53', 'good_image-202405051625021.jpg', '7f8f3cd6-9daa-4566-9352-118bb821c2ad', 0, 1);
INSERT INTO `good_images` VALUES ('9a44bf6d-9f69-4c6e-911d-c2787d0fd1ca', 'good_image-202405051625022.jpg', '7f8f3cd6-9daa-4566-9352-118bb821c2ad', 0, 2);
INSERT INTO `good_images` VALUES ('fe687d97-091a-41dc-98ee-f6b96ca8cdca', 'good_image-202405051625023.jpg', '7f8f3cd6-9daa-4566-9352-118bb821c2ad', 1, 1);
INSERT INTO `good_images` VALUES ('967a5b57-71c2-42a8-928f-b1fdb220e3bd', 'good_image-202405051625024.jpg', '7f8f3cd6-9daa-4566-9352-118bb821c2ad', 1, 2);
INSERT INTO `good_images` VALUES ('47f5cf51-09ef-400b-94e5-78b6f13ae4a1', 'good_image-202405051625390.jpg', '97021a39-2e9e-4dc5-9faf-49c5db0d76a7', 0, 0);
INSERT INTO `good_images` VALUES ('1f93eae2-67c5-4a27-8fdb-83e5c272ba55', 'good_image-202405051625391.jpg', '97021a39-2e9e-4dc5-9faf-49c5db0d76a7', 0, 1);
INSERT INTO `good_images` VALUES ('85838be0-54b4-402f-919e-23179d109098', 'good_image-202405051625392.jpg', '97021a39-2e9e-4dc5-9faf-49c5db0d76a7', 0, 2);
INSERT INTO `good_images` VALUES ('a386fbb6-6b06-4dbc-83ce-04730cf60bf2', 'good_image-202405051625393.jpg', '97021a39-2e9e-4dc5-9faf-49c5db0d76a7', 1, 1);
INSERT INTO `good_images` VALUES ('717e2df8-2659-4ede-9523-59951cb9df53', 'good_image-202405051625394.jpg', '97021a39-2e9e-4dc5-9faf-49c5db0d76a7', 1, 2);
INSERT INTO `good_images` VALUES ('e31a5e91-577e-4906-817d-838fb8b967cf', 'good_image-202405051626260.jpg', 'b102e370-6c40-4e2a-b0d5-3b113a25de90', 0, 0);
INSERT INTO `good_images` VALUES ('26fc3084-4480-4da1-9dd0-47d6583bfdeb', 'good_image-202405051626261.jpg', 'b102e370-6c40-4e2a-b0d5-3b113a25de90', 0, 1);
INSERT INTO `good_images` VALUES ('71eedb2b-c2ee-45fc-8db0-999c158ba960', 'good_image-202405051626262.jpg', 'b102e370-6c40-4e2a-b0d5-3b113a25de90', 0, 2);
INSERT INTO `good_images` VALUES ('65e0ba24-06bb-4b5d-89a0-e617772cdda7', 'good_image-202405051626263.jpg', 'b102e370-6c40-4e2a-b0d5-3b113a25de90', 1, 1);
INSERT INTO `good_images` VALUES ('e3140735-565f-4727-a13a-64e9558181b8', 'good_image-202405051626264.jpg', 'b102e370-6c40-4e2a-b0d5-3b113a25de90', 1, 2);
INSERT INTO `good_images` VALUES ('27cae491-04bc-47f4-acef-31b6ee52a848', 'good_image-202405071414530.jpg', '42ca3a23-44a2-4a51-9d96-4a2823514ea9', 0, 0);
INSERT INTO `good_images` VALUES ('7abf3818-a8aa-48a7-bb81-ea8113431daf', 'good_image-202405071414531.jpg', '42ca3a23-44a2-4a51-9d96-4a2823514ea9', 0, 1);
INSERT INTO `good_images` VALUES ('322cb420-72ac-43c2-97b8-bd6a55c6a00e', 'good_image-202405071414532.jpg', '42ca3a23-44a2-4a51-9d96-4a2823514ea9', 0, 2);
INSERT INTO `good_images` VALUES ('02e1bee3-d73f-4a9e-b9ba-fd9b1202387c', 'good_image-202405071414533.jpg', '42ca3a23-44a2-4a51-9d96-4a2823514ea9', 1, 1);
INSERT INTO `good_images` VALUES ('85fbf867-27e5-4b58-9cec-6a34baa777f6', 'good_image-202405071414534.jpg', '42ca3a23-44a2-4a51-9d96-4a2823514ea9', 1, 2);
INSERT INTO `good_images` VALUES ('f16e28a6-afc0-452e-9aca-bdbf2779bfdb', 'good_image-202405071415470.jpg', '4bc55084-7e05-4251-b4d8-fa62df4e1168', 0, 0);
INSERT INTO `good_images` VALUES ('5e162ba0-e4b0-4220-95ac-c41e96b853f7', 'good_image-202405071415471.jpg', '4bc55084-7e05-4251-b4d8-fa62df4e1168', 0, 1);
INSERT INTO `good_images` VALUES ('1d72648c-c956-4336-b51a-b49fadb3b22d', 'good_image-202405071415472.jpg', '4bc55084-7e05-4251-b4d8-fa62df4e1168', 0, 2);
INSERT INTO `good_images` VALUES ('f09f7a50-ef46-49df-9689-db9d5db93e0e', 'good_image-202405071415473.jpg', '4bc55084-7e05-4251-b4d8-fa62df4e1168', 1, 1);
INSERT INTO `good_images` VALUES ('e4c0b5bf-deaf-44fd-bd75-f2d9cda836e7', 'good_image-202405071415474.jpg', '4bc55084-7e05-4251-b4d8-fa62df4e1168', 1, 2);
INSERT INTO `good_images` VALUES ('d4f7ff4e-6476-4d0a-b959-7d1b8183c1d2', 'good_image-202405071417040.jpg', '8f3ce3d5-f8e2-4beb-b44b-2f9f01263af8', 0, 0);
INSERT INTO `good_images` VALUES ('26e3708f-5f8b-4f78-a4a8-8da66206c01d', 'good_image-202405071417041.jpg', '8f3ce3d5-f8e2-4beb-b44b-2f9f01263af8', 0, 1);
INSERT INTO `good_images` VALUES ('0ec4ec84-8a6f-4c7b-9b0a-1c405f59e3e9', 'good_image-202405071417042.jpg', '8f3ce3d5-f8e2-4beb-b44b-2f9f01263af8', 0, 2);
INSERT INTO `good_images` VALUES ('b18fbb55-b917-4dbf-a79c-e47a20fcc23d', 'good_image-202405071417043.jpg', '8f3ce3d5-f8e2-4beb-b44b-2f9f01263af8', 1, 1);
INSERT INTO `good_images` VALUES ('0e3531c4-7891-4703-963f-4c0adb15f44c', 'good_image-202405071417044.jpg', '8f3ce3d5-f8e2-4beb-b44b-2f9f01263af8', 1, 2);
INSERT INTO `good_images` VALUES ('d3a75364-0ae2-446e-a28c-611edae73e2a', 'good_image-202405071418090.jpg', '5e4ff9d2-8789-40e0-8b73-93514afe29c9', 0, 0);
INSERT INTO `good_images` VALUES ('8bf2dbc2-45e2-47d1-aecb-6ca1f3d2024f', 'good_image-202405071418091.jpg', '5e4ff9d2-8789-40e0-8b73-93514afe29c9', 0, 1);
INSERT INTO `good_images` VALUES ('6ab09676-bbb6-4048-bf91-94b972a6e6ff', 'good_image-202405071418092.jpg', '5e4ff9d2-8789-40e0-8b73-93514afe29c9', 0, 2);
INSERT INTO `good_images` VALUES ('fe18d16f-15df-4890-94c5-c919dcb37756', 'good_image-202405071418093.jpg', '5e4ff9d2-8789-40e0-8b73-93514afe29c9', 1, 1);
INSERT INTO `good_images` VALUES ('2c3a6fe9-0653-403b-8911-c437f2875f21', 'good_image-202405071418094.jpg', '5e4ff9d2-8789-40e0-8b73-93514afe29c9', 1, 2);
INSERT INTO `good_images` VALUES ('dee6c0ea-881e-4ce2-873c-f45620ce975b', 'good_image-202405071419350.jpg', '9dd135eb-d3dd-4eba-9cb5-27b9f092f5b8', 0, 0);
INSERT INTO `good_images` VALUES ('d95e2c08-52ea-460e-a4ca-8629190753a0', 'good_image-202405071419351.jpg', '9dd135eb-d3dd-4eba-9cb5-27b9f092f5b8', 0, 1);
INSERT INTO `good_images` VALUES ('dadbe772-585a-45b1-88cf-b2ba07c202aa', 'good_image-202405071419352.jpg', '9dd135eb-d3dd-4eba-9cb5-27b9f092f5b8', 0, 2);
INSERT INTO `good_images` VALUES ('db3c6bf7-994b-4bd4-bf90-56465ca5b520', 'good_image-202405071419353.jpg', '9dd135eb-d3dd-4eba-9cb5-27b9f092f5b8', 1, 1);
INSERT INTO `good_images` VALUES ('57da8bcb-162c-48c7-a0d2-1bb341cb809e', 'good_image-202405071419354.jpg', '9dd135eb-d3dd-4eba-9cb5-27b9f092f5b8', 1, 2);

-- ----------------------------
-- Table structure for good_kinds
-- ----------------------------
DROP TABLE IF EXISTS `good_kinds`;
CREATE TABLE `good_kinds`  (
  `good_kind_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `good_kind_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `parent_category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_kind_order` int(11) NULL DEFAULT NULL,
  `good_display` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`good_kind_id`) USING BTREE,
  INDEX `parent_category_id`(`parent_category_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good_kinds
-- ----------------------------
INSERT INTO `good_kinds` VALUES ('0f63bd3d-ad40-4325-8e5e-8566ddb3c9de', '狗狗玩具', '1', NULL, 6, 1);
INSERT INTO `good_kinds` VALUES ('2e60465c-d2c2-44a9-ae17-31737f00e45f', '猫咪玩具', '1', NULL, 7, 1);
INSERT INTO `good_kinds` VALUES ('522d7d5d-b395-492d-ac0c-5518710584ba', '猫咪主粮', '1', NULL, 2, 1);
INSERT INTO `good_kinds` VALUES ('8a822cfa-3e72-4d99-837e-6f6f03135aa5', '宠物清洁', '1', NULL, 8, 1);
INSERT INTO `good_kinds` VALUES ('9fadc1f9-afec-49a1-8272-97fe39584595', '狗狗主粮', '1', NULL, 1, 1);
INSERT INTO `good_kinds` VALUES ('baddac80-0140-45a5-8dde-9691339af150', '宠物洗护', '1', NULL, 10, 1);
INSERT INTO `good_kinds` VALUES ('d4d9cd1a-9b9b-472c-bd9b-ab10c1e0c62e', '宠物药品', '1', NULL, 11, 1);
INSERT INTO `good_kinds` VALUES ('e5165253-bf66-4d0e-a478-74960318baaa', '狗狗零食', '1', NULL, 3, 1);
INSERT INTO `good_kinds` VALUES ('eae54e57-1136-4c34-863e-bc801390ab85', '猫咪零食', '1', NULL, 4, 1);
INSERT INTO `good_kinds` VALUES ('ec41896c-1269-41cb-b644-3a1d24f15fae', '营养保健', '1', NULL, 5, 1);
INSERT INTO `good_kinds` VALUES ('f44ce78f-38b3-46dc-8877-2f1c019821ab', '宠物日用', '1', NULL, 9, 1);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `good_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `good_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_price` double NULL DEFAULT NULL,
  `good_origin_price` double NULL DEFAULT NULL,
  `good_comment_num` int(11) NULL DEFAULT NULL COMMENT '商品评价数量',
  `good_sold_num` int(11) NULL DEFAULT NULL COMMENT '商品销售数量',
  `parent_category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`good_id`) USING BTREE,
  INDEX `parent_category_id`(`parent_category_id`) USING BTREE,
  CONSTRAINT `goods_ibfk_1` FOREIGN KEY (`parent_category_id`) REFERENCES `good_categories` (`good_category_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('060c17ee-50e1-4682-94bc-bae9d60eb8ff', '萨摩耶狗粮专用20斤装幼犬护肠胃成犬美毛中大型犬补钙全价冻干粮', 65.8, 95.8, 100, 74, 'e7e82096-30ef-4081-8b25-418929e6cd12', 'good_category_image-2024-04-2739.jpg');
INSERT INTO `goods` VALUES ('0739b8cf-32e0-469d-bca7-9bb105ad5973', '新西兰进口boneve本牧狗粮无谷泰迪柯基成年犬粮小狗专用狗粮', 128, 158, 100, 100, '44f4caf1-1fc0-41d4-9199-b44e33bd7c63', 'good_category_image-2024-04-277.jpg');
INSERT INTO `goods` VALUES ('0bf7e3ff-d374-4dcb-8360-477cf9265b38', '伯纳天纯狗粮生 ·鲜super系列鲜肉冻干丛林探秘2kg泰迪金毛', 153, 183, 100, 100, 'cf760abc-33a4-4b6b-9ab0-04e2c9f2b396', 'good_category_image-2024-04-2736.jpg');
INSERT INTO `goods` VALUES ('165c3e3c-6d7f-42b0-bf11-93d507c77a73', '雪山室内成猫通用全价猫粮高蛋白鱼肉营养升级靓丽毛发全阶段猫粮', 148, 178, 0, 500, '44f4caf1-1fc0-41d4-9199-b44e33bd7c63', 'good_image-202405051549410.jpg');
INSERT INTO `goods` VALUES ('171596b9-b85b-4579-a27c-1b678baf327e', '雅顿坚果奶酪20kg哈士奇拉布拉多金毛雪纳瑞萨摩耶通用型狗粮包邮', 283.1, 313.1, 100, 100, 'cf760abc-33a4-4b6b-9ab0-04e2c9f2b396', 'good_category_image-2024-04-2711.jpg');
INSERT INTO `goods` VALUES ('17d1a3fc-03d0-4f32-b354-7d2e602e0864', 'Nature\'s Logic自然逻辑杰出无谷红肉犬粮全天然营养成犬幼犬狗粮', 252, 282, 100, 8, 'ddaa2cf0-9b48-4baa-8478-bdee6ffc0307', 'good_category_image-2024-04-272.jpg');
INSERT INTO `goods` VALUES ('2558b431-deb2-4cdd-9a77-022894665811', '瑕疵清货ORIJEN渴望狗粮鸡肉六种鱼小型全犬无谷高蛋白粮美版', 258, 288, 100, 100, 'cf760abc-33a4-4b6b-9ab0-04e2c9f2b396', 'good_category_image-2024-04-271.jpg');
INSERT INTO `goods` VALUES ('2785cfa1-81b9-4a9e-b266-0583ef4b76d2', '心粮原始动力狗粮40斤装成犬幼犬金毛拉布拉多泰迪柯基柴犬通用型', 270, 300, 100, 500, '72593b88-55a9-4283-919f-e7a4930b21bb', 'good_category_image-2024-04-2729.jpg');
INSERT INTO `goods` VALUES ('2cbf3639-ba45-44a8-89f6-2c09e39bbfc6', '山姆会员代购Member\'sMark全价狗粮犬粮鸡肉配方10kg宠物主食', 139.9, 169.9, 100, 3000, 'cf760abc-33a4-4b6b-9ab0-04e2c9f2b396', 'good_category_image-2024-04-276.jpg');
INSERT INTO `goods` VALUES ('2dbbf3b7-7799-4aff-8971-98ef9e81abc5', '冻干零食大礼包全家桶装鹌鹑蛋黄干鸡胸肉成幼犬宠物猫咪', 48.8, 78.8, 100, 1000, 'cf760abc-33a4-4b6b-9ab0-04e2c9f2b396', 'good_category_image-2024-04-2737.jpg');
INSERT INTO `goods` VALUES ('32e3cbd7-5977-4273-99f3-7eb1842966e2', '斯玛库善玉多狗粮泰迪成幼犬无谷配方益生菌调理肠胃小颗粒', 354, 384, 100, 500, '97712bb2-c1e9-4cdf-8758-b90eb081966a', 'good_category_image-2024-04-2745.jpg');
INSERT INTO `goods` VALUES ('336c6919-6f63-42e7-80e1-e36a008b4e41', '自制幼犬粮成犬粮包邮狗diy狗粮金毛比熊泰迪拉布拉多', 310, 340, 100, 100, '79ad56c0-22ee-4ac0-acd8-d5823e4d3324', 'good_category_image-2024-04-2735.jpg');
INSERT INTO `goods` VALUES ('39935621-d8c6-4694-996a-6126401494cc', '成猫10斤实惠装美毛防掉毛增肥发腮营养幼猫全价冻干流浪猫20', 22.9, 52.9, 0, 900, '97712bb2-c1e9-4cdf-8758-b90eb081966a', 'good_image-202405051528491.jpg');
INSERT INTO `goods` VALUES ('3b952ce0-0653-47fc-bf15-8fdc2d220386', '柴犬狗粮 秋田犬专用粮幼犬中大型犬冻干土狗中华田园犬30斤', 269, 299, 100, 500, '79ad56c0-22ee-4ac0-acd8-d5823e4d3324', 'good_category_image-2024-04-2743.jpg');
INSERT INTO `goods` VALUES ('40c7e234-9e77-4914-88e0-a45b89b64777', '慕安士中大型犬冻干狗粮通用型成幼犬泰迪比熊宠物天然粮20斤10kg', 367, 397, 100, 100, '79ad56c0-22ee-4ac0-acd8-d5823e4d3324', 'good_category_image-2024-04-2713.jpg');
INSERT INTO `goods` VALUES ('42ca3a23-44a2-4a51-9d96-4a2823514ea9', 'Orijen原始猎食渴望无谷成猫干粮猫粮六种鱼5.4kg美版全阶段干粮', 53.1, 83.1, 0, 28, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_image-202405071412342.jpg');
INSERT INTO `goods` VALUES ('4473e74b-6ba5-445f-af8d-51b9badf1484', '犬喜爱狗粮宠物湿粮金毛萨摩泰迪中大型犬幼犬营养鸡肉味犬', 189, 219, 100, 45, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_category_image-2024-04-2716.jpg');
INSERT INTO `goods` VALUES ('44cb179e-9c0d-42ed-adac-30bd9751c62c', '自然价值棕熊全价冻干犬粮通用型宠物成幼犬泰迪金毛无谷20斤', 306.2, 336.2, 100, 70, 'f3d49916-6b2a-49e7-81c9-3e331b32357e', 'good_category_image-2024-04-2732.jpg');
INSERT INTO `goods` VALUES ('46055b93-a740-41d1-97ca-c85c2519e894', '伯纳天纯生鲜狗粮农场冻干全价粮食营养干粮12kg易消化', 438, 468, 100, 100, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_category_image-2024-04-279.jpg');
INSERT INTO `goods` VALUES ('481f4b71-7a34-4f1c-ac3c-7dd11ad9c019', '开饭乐狗粮碳烤牛排10kg20斤装通用型金毛拉布拉多中大型犬成犬', 165, 195, 100, 100, 'ce67aed0-79c2-4c2f-a3ff-b34d84d2dd1f', 'good_category_image-2024-04-2726.jpg');
INSERT INTO `goods` VALUES ('4a1859e8-1caf-42ee-9edb-3913049af938', '头补充营养增肥咪零食发腮孕幼湿粮条零食24头', 1.7, 31.7, 0, 200, 'cd2f6390-a632-48db-ae36-09ed0d4923b2', 'good_image-202405051610303.jpg');
INSERT INTO `goods` VALUES ('4bc55084-7e05-4251-b4d8-fa62df4e1168', '皇家LP34泌尿粮泌尿系统粮泌尿配方皇家情绪舒缓', 263, 293, 0, 1, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_image-202405071412354.jpg');
INSERT INTO `goods` VALUES ('590b3786-17e8-42eb-8405-2ceb7a682102', '猫粮20斤装幼猫成猫蓝猫英短全价10kg国产流浪猫布偶增肥发腮营养', 88, 118, 0, 3000, '44f4caf1-1fc0-41d4-9199-b44e33bd7c63', 'good_image-202405051549422.jpg');
INSERT INTO `goods` VALUES ('5e4ff9d2-8789-40e0-8b73-93514afe29c9', '进口全价猫粮临期go渴望纽翠斯百利卡比金素临近保质期成幼', 98, 128, 0, 4000, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_image-202405071412341.jpg');
INSERT INTO `goods` VALUES ('61f665e4-8be4-406b-87cc-02c82d99ac44', '猫粮罐头主食罐头猫零罐头成猫增肥鸡肉金枪鱼猫咪零食幼猫亮毛发', 21.9, 51.9, 0, 200, 'cd2f6390-a632-48db-ae36-09ed0d4923b2', 'good_image-202405051610280.jpg');
INSERT INTO `goods` VALUES ('64b4fdad-eb1b-4955-b7ad-1cec94772f9e', '网易严选猫粮全价冻干双拼旗舰店成猫幼猫通用型官方正品', 73, 103, 0, 4000, '44f4caf1-1fc0-41d4-9199-b44e33bd7c63', 'good_image-202405051549463.jpg');
INSERT INTO `goods` VALUES ('7f8f3cd6-9daa-4566-9352-118bb821c2ad', '头补充营养增肥发腮咪零食成幼湿粮条整箱24全价', 14.32, 44.32, 0, 6000, 'cd2f6390-a632-48db-ae36-09ed0d4923b2', 'good_image-202405051610304.jpg');
INSERT INTO `goods` VALUES ('8f3ce3d5-f8e2-4beb-b44b-2f9f01263af8', '皇家高优纤易消化FR31粮1.5kg猫便秘巨结肠皇家易消化粮', 263, 293, 0, 3000, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_image-202405071412353.jpg');
INSERT INTO `goods` VALUES ('90dbd4f2-4864-4468-aa63-65492440e42a', 'c3猫粮官方帕缇朵全价无谷成幼猫通用型奶糕粮牛肉鱼肉旗舰店正品', 97, 127, 0, 200, '44f4caf1-1fc0-41d4-9199-b44e33bd7c63', 'good_image-202405051549411.jpg');
INSERT INTO `goods` VALUES ('9222db09-240b-4429-8295-6575a083f63e', '20斤装幼猫成猫蓝猫英短全价10kg流浪猫布偶增肥发腮营养', 88, 118, 0, 3000, '97712bb2-c1e9-4cdf-8758-b90eb081966a', 'good_image-202405051528504.jpg');
INSERT INTO `goods` VALUES ('97021a39-2e9e-4dc5-9faf-49c5db0d76a7', '咪阁生肉罐头猫狗通用美毛发腮增肥贵宾犬幼孕猫营养宠物生骨肉', 39.9, 69.9, 0, 9, 'cd2f6390-a632-48db-ae36-09ed0d4923b2', 'good_image-202405051610292.jpg');
INSERT INTO `goods` VALUES ('9dd135eb-d3dd-4eba-9cb5-27b9f092f5b8', '胃肠道猫处方粮猫咪猫粮调理肠胃防拉稀软便腹泻养胃全价成猫幼猫', 156, 186, 0, 31, '7cb9c9a1-ad98-4ad7-a601-74705d2c3507', 'good_image-202405071412330.jpg');
INSERT INTO `goods` VALUES ('b102e370-6c40-4e2a-b0d5-3b113a25de90', '至宠凯特宠物进口猫粮成猫真肉罐头湿粮高汤补水幼猫全价零食12罐', 129, 159, 0, 1, 'cd2f6390-a632-48db-ae36-09ed0d4923b2', 'good_image-202405051610291.jpg');
INSERT INTO `goods` VALUES ('bfdf648f-d9cb-47a9-845c-8e15756a9860', '麦富迪营养森林成10kg通用型英美短蓝猫全价营养主食20斤', 199, 229, 0, 5, '97712bb2-c1e9-4cdf-8758-b90eb081966a', 'good_image-202405051528480.jpg');
INSERT INTO `goods` VALUES ('d5453b0f-5b54-4eed-bb35-c061e88ae8d0', '单品包邮网易严选猫主粮宠爱相伴全价膨化粮2kg公益成幼', 69, 99, 0, 3, '97712bb2-c1e9-4cdf-8758-b90eb081966a', 'good_image-202405051528503.jpg');
INSERT INTO `goods` VALUES ('e4560084-d38d-4110-b3a8-dfbb9e7cd8ae', '成猫20斤实惠装10公斤增肥发腮营养专用全价10kg大袋大包装', 61, 91, 0, 89, '97712bb2-c1e9-4cdf-8758-b90eb081966a', 'good_image-202405051528502.jpg');
INSERT INTO `goods` VALUES ('f962e763-6478-4657-9874-7a479366a660', '猫粮成猫10斤装猫零食英短幼猫增肥发腮营养全价蓝猫流浪猫20斤装', 49, 79, 0, 2000, '44f4caf1-1fc0-41d4-9199-b44e33bd7c63', 'good_image-202405051549464.jpg');

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `message_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `message_date` datetime NULL DEFAULT NULL,
  `message_user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '用户id\r\n',
  `message_order` int(11) NULL DEFAULT NULL,
  `message_admin_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '管理员id',
  `message_type` int(11) NULL DEFAULT NULL COMMENT '1是用户，2是客服',
  PRIMARY KEY (`message_id`) USING BTREE,
  INDEX `message_user_id`(`message_user_id`) USING BTREE,
  INDEX `message_admin_id`(`message_admin_id`) USING BTREE,
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`message_user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`message_admin_id`) REFERENCES `admins` (`admin_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES ('364738f4-d6d6-4e4a-9149-7cb4973dcb14', 'asd', '2024-04-10 06:52:56', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 4, 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9', 1);
INSERT INTO `messages` VALUES ('8b019836-6c0f-4769-be28-65f09a5e2d2a', 'sbbwns', '2024-05-08 09:14:55', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9', 1);
INSERT INTO `messages` VALUES ('b35d7ff8-747a-4903-9cc6-9b4f9dd07629', 'asdasdasd', '2024-04-10 06:52:56', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 2, 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9', 1);
INSERT INTO `messages` VALUES ('d08728f2-82cf-43b0-ae9b-1dd2ddd6543c', 'asdasd', '2024-04-10 06:52:56', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 3, 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9', 2);
INSERT INTO `messages` VALUES ('f85decd5-55c8-4aac-87fa-1fc3355c61aa', 'asdsad\n', '2024-04-10 06:52:56', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 1, 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9', 2);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `order_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_status` int(11) NULL DEFAULT NULL COMMENT '1确认订单\r\n2已付款\r\n3已发货\r\n4已取消\r\n5已完成',
  `create_date` date NULL DEFAULT NULL,
  `shipping_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `payment_method` int(11) NULL DEFAULT NULL,
  `order_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `address_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `address_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_price` double NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('10bfd297-820e-4bb5-9c64-5992dbcfaa1b', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 1, '2024-04-27', '北京市-北京市-东城区asdasdasd', NULL, '202404279187', '13160605277', '13160605277', 759.98);
INSERT INTO `orders` VALUES ('208549d2-2fb9-4252-8fa9-02bfa47d5e53', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-05', '四川省-内江市-隆昌市nzndjdjd', 1, '202404055435', '杨泽楷', '13160605277', 1040);
INSERT INTO `orders` VALUES ('239b4f8c-30a4-49f9-b4d0-d4e8aafa41e6', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 2, '2024-05-08', '北京市-北京市-东城区asdasd', NULL, '202405085420', '杨泽楷', '13160605277', 606.33);
INSERT INTO `orders` VALUES ('265ecc4e-cca7-4b36-95eb-18b2d187d40d', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404046748', '杨泽楷', '13160605277', 160);
INSERT INTO `orders` VALUES ('2d6e52a8-bcb7-4497-9b3a-74d13660bda4', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 4, '2024-04-10', '四川省-内江市-隆昌市nzndjdjd', 1, '202404109265', '杨泽楷', '13160605277', 800);
INSERT INTO `orders` VALUES ('56d1f096-0c6a-4f2b-b8d6-e46564b3b40f', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404042243', '杨泽楷', '13160605277', 640);
INSERT INTO `orders` VALUES ('6f6d6217-be5a-4d37-8c6e-7bd4181e6be3', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 4, '2024-04-05', '四川省-内江市-隆昌市nzndjdjd', 1, '202404051577', '杨泽楷', '13160605277', 200);
INSERT INTO `orders` VALUES ('76d8e5de-9f01-442f-80c6-e38450c90753', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 1, '2024-04-25', '重庆市-重庆市-九龙坡区qqeqeqwasd', NULL, '202404255819', '杨泽楷', '13160605277', 1544.19);
INSERT INTO `orders` VALUES ('848e746e-ce82-4589-ba9d-7824ad9d0296', '964d7057-a798-418c-ad41-72297dfbcf57', 2, '2024-04-04', '广东省-潮州市-潮安区庵埠镇文里村文亨路48号', 1, '202404046404', '杨泽楷', '13160605277', 1600);
INSERT INTO `orders` VALUES ('a81f9929-c7a1-4f9c-9484-3a5abc4fd0d8', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404047118', '杨泽楷', '13160605277', 160);
INSERT INTO `orders` VALUES ('bbc9c2f4-f514-4cea-a110-608d5f5c2738', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404045240', '杨泽楷', '13160605277', 160);
INSERT INTO `orders` VALUES ('cb2209d6-3ad0-489b-a91f-c9ccc11e0bc0', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404042111', '杨泽楷', '13160605277', 160);
INSERT INTO `orders` VALUES ('d4057536-fa26-4c25-992e-b1798bf8917c', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404046682', '杨泽楷', '13160605277', 160);
INSERT INTO `orders` VALUES ('d96dc280-479f-4f2a-bff8-0b900683dafd', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404046691', '杨泽楷', '13160605277', 640);
INSERT INTO `orders` VALUES ('dbbca0c9-df54-4f1f-9700-12968d524a74', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 5, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404045500', '杨泽楷', '13160605277', 480);
INSERT INTO `orders` VALUES ('e0566e0c-0592-4623-9da5-77cfb2cd60d6', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 4, '2024-04-10', '四川省-内江市-隆昌市nzndjdjd', 1, '202404101285', '杨泽楷', '13160605277', 800);
INSERT INTO `orders` VALUES ('e2bf0801-7557-47bc-9687-b5538f36682a', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 2, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404047794', '杨泽楷', '13160605277', 640);
INSERT INTO `orders` VALUES ('f50d9ce0-a88a-4985-9a66-a8e2e12e3982', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 2, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404048672', '杨泽楷', '13160605277', 360);
INSERT INTO `orders` VALUES ('f6d07b7d-7d37-4fb8-aa37-66fc1e0f97ae', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 4, '2024-04-05', '四川省-内江市-隆昌市nzndjdjd', 1, '202404056359', '杨泽楷', '13160605277', 600);
INSERT INTO `orders` VALUES ('f87f330f-f45d-4c35-90d3-c35c90393c51', '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 2, '2024-04-04', '四川省-内江市-隆昌市nzndjdjd', 1, '202404041146', '杨泽楷', '13160605277', 160);

-- ----------------------------
-- Table structure for orders_goods
-- ----------------------------
DROP TABLE IF EXISTS `orders_goods`;
CREATE TABLE `orders_goods`  (
  `order_good_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `good_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `total_price` double NULL DEFAULT NULL,
  `good_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `good_price` double NULL DEFAULT NULL,
  `good_number` int(11) NULL DEFAULT NULL,
  `good_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`order_good_id`) USING BTREE,
  INDEX `order_id`(`order_id`) USING BTREE,
  CONSTRAINT `orders_goods_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders_goods
-- ----------------------------
INSERT INTO `orders_goods` VALUES ('11f3819c-25cf-47c5-8a64-9c60fe016021', '93e1f3af-a03f-4790-b2c3-9328859af06d', 'f50d9ce0-a88a-4985-9a66-a8e2e12e3982', 200, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('14dde2ee-7e3f-461e-a48d-dbba18fbafe0', '2e6e3a99-1b59-4796-a086-9771492add93', '76d8e5de-9f01-442f-80c6-e38450c90753', 1139.97, '犬喜爱狗粮宠物通用型湿粮边牧犬大型成幼犬新鲜天然营养增肥主粮', 379.99, 3, 'good_image-1714047126381');
INSERT INTO `orders_goods` VALUES ('22dc3e89-93d0-47e2-86c4-8f1af35f1b74', '2e6e3a99-1b59-4796-a086-9771492add93', 'a81f9929-c7a1-4f9c-9484-3a5abc4fd0d8', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('250a86f3-4c5b-42dd-9712-31e3c813131c', '2e6e3a99-1b59-4796-a086-9771492add93', 'f50d9ce0-a88a-4985-9a66-a8e2e12e3982', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('2e38710e-f97e-44f4-b4bc-618db8cf0684', '2e6e3a99-1b59-4796-a086-9771492add93', '208549d2-2fb9-4252-8fa9-02bfa47d5e53', 640, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('4090b17f-0643-455e-9c2c-60a656479276', '2e6e3a99-1b59-4796-a086-9771492add93', '265ecc4e-cca7-4b36-95eb-18b2d187d40d', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('41d887c5-862b-4eeb-b1a6-85e1f6baaf09', '93e1f3af-a03f-4790-b2c3-9328859af06d', '848e746e-ce82-4589-ba9d-7824ad9d0296', 800, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('45d24d55-5873-46e8-96d9-02468b79fc64', '2d10bdb3-d7c8-452c-803e-258aff050326', '6f6d6217-be5a-4d37-8c6e-7bd4181e6be3', 200, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('49a94a78-30a5-4c2a-ae7a-ea109803798a', '2e6e3a99-1b59-4796-a086-9771492add93', 'dbbca0c9-df54-4f1f-9700-12968d524a74', 480, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 3, 'demo.png');
INSERT INTO `orders_goods` VALUES ('4bc88bee-97e8-4af4-bad1-ac2ffe1d86d5', '2d10bdb3-d7c8-452c-803e-258aff050326', 'f6d07b7d-7d37-4fb8-aa37-66fc1e0f97ae', 600, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 3, 'demo.png');
INSERT INTO `orders_goods` VALUES ('4d54e249-55c9-4bac-b683-09daf0928425', '2d10bdb3-d7c8-452c-803e-258aff050326', 'e0566e0c-0592-4623-9da5-77cfb2cd60d6', 800, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('4f35c05a-ba90-4a56-9c70-8535bd110a17', '2e6e3a99-1b59-4796-a086-9771492add93', 'd4057536-fa26-4c25-992e-b1798bf8917c', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('7c9a58ce-e348-48a3-8d5a-58393fedd0a9', '2e6e3a99-1b59-4796-a086-9771492add93', 'd96dc280-479f-4f2a-bff8-0b900683dafd', 640, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('8421e1ff-c43d-47ff-9e92-5763fd3264c8', '2e6e3a99-1b59-4796-a086-9771492add93', '10bfd297-820e-4bb5-9c64-5992dbcfaa1b', 759.98, '犬喜爱狗粮宠物通用型湿粮边牧犬大型成幼犬新鲜天然营养增肥主粮', 379.99, 2, 'good_image-1714047126381');
INSERT INTO `orders_goods` VALUES ('96050593-ca7a-4163-9324-2fc75dbacd09', '2e6e3a99-1b59-4796-a086-9771492add93', '56d1f096-0c6a-4f2b-b8d6-e46564b3b40f', 640, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('9f0db91d-1b9c-4a89-a61b-6b59cc5a0106', '2d10bdb3-d7c8-452c-803e-258aff050326', '208549d2-2fb9-4252-8fa9-02bfa47d5e53', 400, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 2, 'demo.png');
INSERT INTO `orders_goods` VALUES ('c7827b6e-bd5e-41a0-abd8-486cf379d934', '93e1f3af-a03f-4790-b2c3-9328859af06d', '76d8e5de-9f01-442f-80c6-e38450c90753', 404.22, '【瑕疵清货】ORIJEN渴望狗粮鸡肉六种鱼小型全犬无谷高蛋白粮美版', 202.11, 2, 'good_image-1714047265057');
INSERT INTO `orders_goods` VALUES ('d42895ea-cbe8-498e-8c64-d604b02125a6', '2e6e3a99-1b59-4796-a086-9771492add93', 'bbc9c2f4-f514-4cea-a110-608d5f5c2738', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('d7ac0258-0ecf-41b3-a9ac-85ccbdeec7ac', '93e1f3af-a03f-4790-b2c3-9328859af06d', '239b4f8c-30a4-49f9-b4d0-d4e8aafa41e6', 606.33, '【瑕疵清货】ORIJEN渴望狗粮鸡肉六种鱼小型全犬无谷高蛋白粮美版', 202.11, 3, 'good_image-1714047265057');
INSERT INTO `orders_goods` VALUES ('dc91050e-2533-47fb-a7a8-02b41c22d730', '2e6e3a99-1b59-4796-a086-9771492add93', 'e2bf0801-7557-47bc-9687-b5538f36682a', 640, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('e2d0f213-672d-4d32-be42-6ebabe09bf47', '2e6e3a99-1b59-4796-a086-9771492add93', '848e746e-ce82-4589-ba9d-7824ad9d0296', 800, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 5, 'demo.png');
INSERT INTO `orders_goods` VALUES ('eb0755a9-916a-4ccf-8dc5-305447df29c4', '2d10bdb3-d7c8-452c-803e-258aff050326', '2d6e52a8-bcb7-4497-9b3a-74d13660bda4', 800, '滋益巅峰全价风干狗粮多口味干粮454g', 200, 4, 'demo.png');
INSERT INTO `orders_goods` VALUES ('eb329bd3-040a-4997-b84f-0a0b04a8331e', '2e6e3a99-1b59-4796-a086-9771492add93', 'f87f330f-f45d-4c35-90d3-c35c90393c51', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');
INSERT INTO `orders_goods` VALUES ('f4ca5789-b473-456d-b40a-88c8d6f38427', '2e6e3a99-1b59-4796-a086-9771492add93', 'cb2209d6-3ad0-489b-a91f-c9ccc11e0bc0', 160, '滋益巅峰全价风干狗粮多口味干粮454g', 160, 1, 'demo.png');

-- ----------------------------
-- Table structure for pet_kinds
-- ----------------------------
DROP TABLE IF EXISTS `pet_kinds`;
CREATE TABLE `pet_kinds`  (
  `pet_kind_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pet_kind` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`pet_kind_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pet_kinds
-- ----------------------------
INSERT INTO `pet_kinds` VALUES ('1c351a9f-be9a-460c-960c-4183dfed6667', '狗');
INSERT INTO `pet_kinds` VALUES ('af5f2b39-1991-410f-ba56-6ce66f222b30', '鱼');
INSERT INTO `pet_kinds` VALUES ('c5efda50-08ca-46a2-b416-9178cddd8a3c', '猫');
INSERT INTO `pet_kinds` VALUES ('f286b6fa-fa4c-4ebc-aa73-c4c5c161afef', '鸭');
INSERT INTO `pet_kinds` VALUES ('f88e4ea8-462a-4048-946b-8e7b539fceed', '猪');

-- ----------------------------
-- Table structure for pets
-- ----------------------------
DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets`  (
  `pet_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pet_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pet_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pet_kind_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pet_sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pet_sterilize` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pet_birthday` date NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`pet_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pets
-- ----------------------------

-- ----------------------------
-- Table structure for service_comments
-- ----------------------------
DROP TABLE IF EXISTS `service_comments`;
CREATE TABLE `service_comments`  (
  `service_comment_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_comment_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_comment_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_comment_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_comment_star` int(11) NULL DEFAULT NULL COMMENT '评论星数',
  `service_comment_date` date NULL DEFAULT NULL,
  `service_detail_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`service_comment_id`) USING BTREE,
  INDEX `service_detail_id`(`service_detail_id`) USING BTREE,
  CONSTRAINT `service_comments_ibfk_1` FOREIGN KEY (`service_detail_id`) REFERENCES `service_details` (`service_detail_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service_comments
-- ----------------------------
INSERT INTO `service_comments` VALUES ('0af0e0c9-d141-40f6-9f5f-e326bcaafa44', 'asd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_comments` VALUES ('0dfbb6aa-18ea-427b-bc50-0aafe76d2075', 'asd', 'user_avatar-1712825710260', '爱宠之家zfuRB12', 5, '2024-04-27', '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_comments` VALUES ('331e233b-e9cc-4e37-81d5-f0573555fdf3', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c7240872-614d-409f-95d0-ca296dc182d8');
INSERT INTO `service_comments` VALUES ('36f6fd96-decf-4670-8abb-8d7cd4d296ea', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c0b0f243-0ae4-46cc-8d5d-830aa3b5e39d');
INSERT INTO `service_comments` VALUES ('3e55345b-8f63-4532-9fa3-ce8ed3c6ed5c', 'asdsad', 'avatar-1714207283428', '爱宠之家zfuRB12', 4, '2024-04-27', 'F3C4B7C4-777C-44DD-8506-646348A73257');
INSERT INTO `service_comments` VALUES ('468633aa-5551-4349-8f2f-7abed671af47', 'asd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');
INSERT INTO `service_comments` VALUES ('4a3463fe-7b36-4872-a17d-fa7f65ad92e9', 'asd', 'avatar-1714207283428', '爱宠之家zfuRB12', 3, '2024-04-27', '5ccd7dce-4472-47a9-b070-e926c4943242');
INSERT INTO `service_comments` VALUES ('51f6e475-2334-4db4-ac45-ddae437a4abc', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_comments` VALUES ('58a85e62-c8df-4af8-9950-596f5a3c560d', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '99b94983-d9ea-4030-94d3-e72c5d3f4f65');
INSERT INTO `service_comments` VALUES ('5cd1030b-5f21-421d-b806-ee046927fc68', 'a\'s\'dasd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_comments` VALUES ('5e6d3867-f58a-44c3-af59-167922f17cec', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_comments` VALUES ('6c4f44d5-f827-498a-b337-ea8b79b4ddef', 'vgg\n', 'avatar-1714207283428', '爱宠之家zfuRB12', 2, '2024-05-08', '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_comments` VALUES ('7e1311f6-970f-4f6b-b4e1-7abc75648743', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '5041f47d-565c-4d29-9ba8-a40b5838d1d6');
INSERT INTO `service_comments` VALUES ('880de4b6-069c-484a-89d4-54231578c816', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c9924e2d-bd6a-4704-b36e-fa6545262eb8');
INSERT INTO `service_comments` VALUES ('8cd4a2b0-e442-4371-bd8d-9c97704cfb59', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_comments` VALUES ('9e967c2e-4cea-416e-931b-0974167fc44f', 'asd', 'avatar-1714207283428', '爱宠之家zfuRB12', 3, '2024-04-27', '693e1bcf-b782-43c1-8a9e-15df7512ad0a');
INSERT INTO `service_comments` VALUES ('9e985aba-0514-46a7-ab42-826ce6494482', 'a\'s\'dasd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_comments` VALUES ('b0301cfd-440c-4183-8559-96611dd37152', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 2, '2024-04-27', 'fe2ebff7-ffb3-4f36-9989-4643cda5b247');
INSERT INTO `service_comments` VALUES ('b087b550-5f1d-4309-b19a-5a82054a0825', 'a\'sasd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_comments` VALUES ('c581faa5-2144-459d-a71b-a8d3541e23ae', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'adb175e7-3d9b-4b60-887e-0ba990a36dd8');
INSERT INTO `service_comments` VALUES ('c5996988-824e-4794-9363-d970203a8ca2', 'a\'s\'dasd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_comments` VALUES ('db649ee5-5238-4c53-980e-361e9113aaa7', 'asdsad', 'avatar-1714207283428', '爱宠之家zfuRB12', 2, '2024-04-27', 'acd89270-64f2-445e-be53-22400d5608bd');
INSERT INTO `service_comments` VALUES ('e26bcf23-0255-4298-b323-8452ba7a5358', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'f9ac871e-9c23-4f05-99fb-8ffbe7934853');
INSERT INTO `service_comments` VALUES ('ed1c8a37-7149-42ec-bb74-c49e5ef0cb26', 'asd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '5161c739-6b95-43b8-9585-53ba41a6a543');
INSERT INTO `service_comments` VALUES ('f0039feb-09f5-4189-9fff-4075b6b6c64f', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_comments` VALUES ('f53e56cf-6d5f-4ba3-a98e-154fc0db685e', 'asd', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_comments` VALUES ('f8ae112b-2817-4e5a-9d0e-8551832e52da', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', '4863fd29-0eb5-4476-a9d4-2286af8af9e8');
INSERT INTO `service_comments` VALUES ('feab1390-d2db-4c98-8f46-bacdc74b4e8c', '好评', 'avatar-1714207283428', '爱宠之家zfuRB12', 5, '2024-04-27', 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');

-- ----------------------------
-- Table structure for service_details
-- ----------------------------
DROP TABLE IF EXISTS `service_details`;
CREATE TABLE `service_details`  (
  `service_detail_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_detail_describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_price` double NULL DEFAULT NULL,
  `service_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`service_detail_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service_details
-- ----------------------------
INSERT INTO `service_details` VALUES ('2fafc36c-8b0d-4593-8c57-0250c0fd7a80', '专业伴宠师门喂猫服务，为您省去接送宠物的麻烦，避免爱宠因寄养病毒交叉感染和应激的风险，让您的猫咪在熟悉的家中享受照料。注意', 49.99, '上门喂猫', '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_details` VALUES ('3b96272e-7006-480c-ad75-10969a6a4b2a', '服务内容含狗狗喂食、清洁、遥狗等一系列宠物服务，满足狗狗的运动需求，充分释放狗狗的精力。注意：30分钟/60分钟/120分钟为整个服务的时长，非遥狗时长', 69.9, '遛狗喂食', '10fbf31f-d30f-4ea7-9305-86f768fca708');
INSERT INTO `service_details` VALUES ('4863fd29-0eb5-4476-a9d4-2286af8af9e8', '上门喂免，为您省去接送宠物的麻烦，避免爱宠因寄养病毒交叉感染和应激的风险，提供喂食、清理排泄物、更换尿垫等服务让您的爱宠在您忙碌或外出时也能得到贴心照料。', 59.9, '兔上门喂食', '06c1c24e-f0ef-4577-9d00-95f0270de6e9');
INSERT INTO `service_details` VALUES ('5041f47d-565c-4d29-9ba8-a40b5838d1d6', '本服务适用于幼年、孕期、生病中、康复中、老年和其他需要专业护理的宠物，为您的爱宠提供个性化的专业护理，让它们得到贴心的关怀与照顾。', 95, '猫咪护理', '2d620a09-5bad-4602-86cb-f67c459475c4');
INSERT INTO `service_details` VALUES ('5161c739-6b95-43b8-9585-53ba41a6a543', '深入宠物的内心世界，洞察其真实意图，深化您与宠物的情感联系。同时，我们还将帮助您纠正宠物的不良行为，使您掌握与狗狗相处的正确之道，共同营造和谐愉快的生活氛围', 399, '上门驯宠', '1f8b76aa-6f7c-48e5-9bc8-84863558c0a3');
INSERT INTO `service_details` VALUES ('5ccd7dce-4472-47a9-b070-e926c4943242', '为您省去接送宠物的麻烦，避免爱宠因寄养病毒交叉感染和应激的风险，提供喂食、清理排泄物、更换尿垫等服务，让爱宠在您忙碌或外出时也能得到贴心照料', 119.9, '羊上门喂食', 'd5fa5453-e1a5-42d2-935c-6fe0bf5049d9');
INSERT INTO `service_details` VALUES ('62f84788-252f-4908-ba43-a19001052418', '服务内容含狗狗喂食，进行简单的宠物区域清洁等。注意：本服务不含遥狗服务，如需狗狗喂食和邂狗，请下单【遍狗喂食】', 49.9, '小狗喂食', '65d55764-1230-423d-8424-a5f1c9b75425');
INSERT INTO `service_details` VALUES ('693e1bcf-b782-43c1-8a9e-15df7512ad0a', '适合忙碌或外出的宠主，为您省去接送宠物洗澡、美容的麻烦。伴宠师上门接送您的爱宠前往宠物店洗澡、美容，全程陪同。服务过程中来回的交通费、洗澡美容产生的费用等，需由宠物主人提前支付，或者在服务过程中实报实销。本服务费仅限于上门接送、陪同宠物的费用。', 50, '送宠洗澡', '30c06117-a035-4048-88e6-a8ce1302e53c');
INSERT INTO `service_details` VALUES ('99b94983-d9ea-4030-94d3-e72c5d3f4f65', '为主人长期外出的宠物提供一个温馨、舒适的生活环境。您的宠物将享受到全方位的日常照料，包括定时喂食、清洁饮水、梳理毛发、清洁猫砂盆等，确保宠物的基本生活需求得到满足。此外，我们还将关注宠物的情绪变化，给予它们足够的陪伴与关爱，让它们在寄养期间感受到家的温暖。', 80, '家庭寄养', '46679c5d-70cd-4bec-941d-bcda4934b01d');
INSERT INTO `service_details` VALUES ('acd89270-64f2-445e-be53-22400d5608bd', '上门喂鸟等，为您省去接送宠物的麻烦，避免爱宠因寄养病毒交叉感染和应激的风险，同时可以根据宠物的具体需求和习惯，提供个性化的照顾。', 49.9, '鸟上门喂食', 'dc81d3e3-cbb6-48a2-8ff2-24c9db096f9d');
INSERT INTO `service_details` VALUES ('adb175e7-3d9b-4b60-887e-0ba990a36dd8', '提供狗狗普通或创意造型局部修剪服务，圆臀、贵宾脚、桃心PP、狮子尾等款式任选。个性化设计，展现狗狗独特魅力。精致修剪，让爱宠焕发新光彩！', 80, '狗狗美容', '1fd77f1e-cf92-4aa9-a4e9-099f7a28df01');
INSERT INTO `service_details` VALUES ('ae2f9774-6478-4413-bfad-6dd17f4ffe79', '默认为1只宠物，如需多只宠物洗护服务，请下单【多猫洗护】。专业的猫咪上门洗护服务，在家即可享受到专业而贴心的宠物洗护与造型服务，有效降低猫咪在外应激风险，宠物洗护师上门均自备工具，宠物主人只需准备提供场和温水地，', 150, '猫咪洗护', '82c79a02-2075-4fef-b1f3-09bc1b22a90e');
INSERT INTO `service_details` VALUES ('c0b0f243-0ae4-46cc-8d5d-830aa3b5e39d', '全年商品尊享9折优惠，抢购正当时，不容错过！', 99.99, '会员卡', '24f3ee2f-1e58-431a-b685-e95f1c304b5c');
INSERT INTO `service_details` VALUES ('c2d63854-8151-4726-a69e-daaaa4a39901', '提供不限型号的智能猫砂盆清洁服务，包括整体拆卸清洗、擦干消毒以及清洁后的安装，让您的宠物用品始终保持洁净与卫生', 200, '清洗猫砂', 'f5c0ac0e-2126-422e-b884-88594fa9873f');
INSERT INTO `service_details` VALUES ('c7240872-614d-409f-95d0-ca296dc182d8', '上门喂鱼、鸟、乌龟、蜥蜴等，为您省去接送宠物的麻烦，避免爱宠因寄养病毒交叉感染和应激的风险，同时可以根据宠物的具体需求和习惯，提供个性化的照顾', 59.9, '其他宠物喂食', '156b135f-338c-462c-a199-03f138166828');
INSERT INTO `service_details` VALUES ('c9924e2d-bd6a-4704-b36e-fa6545262eb8', '为主人长期外出的宠物提供一个温馨、舒适的生活环境。您的宠物将享受到全方位的日常照料，包括定时喂食、清洁饮水、梳理毛发、清洁猫砂盆等，确保宠物的基本生活需求得到满足。此外，我们还将关注宠物的情绪变化，给予它们足够的陪伴与关爱，让它们在寄养期间感受到家的温暖。', 80, '店铺寄养', 'c2c5e48b-74b8-4309-bd02-644b62308a18');
INSERT INTO `service_details` VALUES ('d70ad212-60ee-4f8c-86ad-38e4a6de9572', '默认为1只宠物，如需多只宠物洗护服务，请下单【多猫洗护】。专业的猫咪上门洗护服务，在家即可享受到专业而贴心的宠物洗护与造型服务，有效降低猫咪在外应激风险，宠物洗护师上门均自备工具，宠物主人只需准备提供场和温水地。', 150, '猫咪美容', 'c5954816-4836-4457-af62-38f95292fb8e');
INSERT INTO `service_details` VALUES ('F3C4B7C4-777C-44DD-8506-646348A73257', '满足狗狗的运动需求，充分释放狗狗的精力。本服务补不包含喂养，需要喂养请选择【遛狗喂食】（首页：狗狗→逼狗喂食）；若需要包月上门邂狗，请购买遇狗次卡”（首页：服务次卡→邂狗次卡）后，再到此页面下单，选择次卡抵扣支付。', 54.9, '上门遛狗', '8d30454f-a0a7-45ba-b1ba-954c18ebde99');
INSERT INTO `service_details` VALUES ('f9ac871e-9c23-4f05-99fb-8ffbe7934853', '舒适、安全、便利。为宠物提供了舒适的旅行环境、温暖的休息空间。箱内还配备了可调节的安全带，可以固定宠物的位置，防止它们在行进过程中滑动和受伤。', 100, '宠物托运', 'b2d438d5-d739-456d-9195-d3adfcc5f796');
INSERT INTO `service_details` VALUES ('fe2ebff7-ffb3-4f36-9989-4643cda5b247', '上门喂养猪猪，为您省去接送宠物的麻烦，避免爱宠因寄养病毒交叉感染和应激的风险，提供喂食、清理排泄物、更换尿垫等服务，让您的爱宠在您忙碌或外出时也能得到贴心照料。', 49.9, '猪上门喂食', '93090a3c-91e3-45ce-b9a4-c84e107c6cff');

-- ----------------------------
-- Table structure for service_images
-- ----------------------------
DROP TABLE IF EXISTS `service_images`;
CREATE TABLE `service_images`  (
  `service_image_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_image_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_image_type` int(11) NULL DEFAULT NULL COMMENT '1代表轮播图，2代表长图',
  `service_image_order` int(11) NULL DEFAULT NULL COMMENT '图片在它这一组的排序',
  `service_detail_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`service_image_id`) USING BTREE,
  INDEX `service_detail_id`(`service_detail_id`) USING BTREE,
  CONSTRAINT `service_images_ibfk_1` FOREIGN KEY (`service_detail_id`) REFERENCES `service_details` (`service_detail_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service_images
-- ----------------------------
INSERT INTO `service_images` VALUES ('03185105-8ac6-4b94-90a4-7ea17cf0644f', 'service_image-1714206564951', 1, 1, '99b94983-d9ea-4030-94d3-e72c5d3f4f65');
INSERT INTO `service_images` VALUES ('07651894-412d-4359-a1e1-59d3e88559d7', 'service_image-1714206036450', 2, 2, 'F3C4B7C4-777C-44DD-8506-646348A73257');
INSERT INTO `service_images` VALUES ('0b9fe778-f990-49f6-b59d-59548b49830f', 'service_image-1714204629667', 1, 2, 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');
INSERT INTO `service_images` VALUES ('0ff05628-2cdb-4410-9393-3a8e7682e526', 'service_image-1714206133346', 2, 1, '5161c739-6b95-43b8-9585-53ba41a6a543');
INSERT INTO `service_images` VALUES ('111c5995-8b72-4b24-bddc-7f05db4836b1', 'service_image-1714204646670', 2, 1, 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');
INSERT INTO `service_images` VALUES ('120d6d6f-3130-46af-b903-a65f5dcb37f2', 'service_image-1714206199643', 2, 1, 'c0b0f243-0ae4-46cc-8d5d-830aa3b5e39d');
INSERT INTO `service_images` VALUES ('13dfae4e-4a81-4133-adda-6e1370cfbcf9', 'service_image-1714205954663', 2, 3, 'adb175e7-3d9b-4b60-887e-0ba990a36dd8');
INSERT INTO `service_images` VALUES ('14b1e320-8698-41cf-924f-649fe39f4638', 'service_image-1714206920800', 1, 1, 'fe2ebff7-ffb3-4f36-9989-4643cda5b247');
INSERT INTO `service_images` VALUES ('183d3cd1-54a1-4304-a113-bab4884924ef', 'service_image-1714207119702', 1, 1, 'c7240872-614d-409f-95d0-ca296dc182d8');
INSERT INTO `service_images` VALUES ('19f7fe95-86e6-48e6-90dd-1d1c3f0df9c8', 'service_image-1714204881430', 2, 1, '5041f47d-565c-4d29-9ba8-a40b5838d1d6');
INSERT INTO `service_images` VALUES ('1cd7cfe9-1835-41da-a5dd-22e1ce3349d6', 'service_image-1714203564982', 1, 1, '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_images` VALUES ('241a2a65-a17f-4e82-a2f2-4496eb6330cc', 'service_image-1714206011789', 1, 1, 'F3C4B7C4-777C-44DD-8506-646348A73257');
INSERT INTO `service_images` VALUES ('26f8775f-0b74-4b7c-afee-ffd0f8486b69', 'service_image-1714204096870', 1, 2, 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_images` VALUES ('2800b664-be3b-472e-8a0b-08239aa2cebc', 'service_image-1714206414864', 2, 2, '693e1bcf-b782-43c1-8a9e-15df7512ad0a');
INSERT INTO `service_images` VALUES ('2cf9a9f9-3a08-402f-ab75-53929b310c75', 'service_image-1714207009897', 1, 2, '4863fd29-0eb5-4476-a9d4-2286af8af9e8');
INSERT INTO `service_images` VALUES ('2d2153a9-8bb2-42bf-bfd9-414e48409dd8', 'service_image-1714205355884', 1, 1, '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_images` VALUES ('30b9d015-4197-443d-a654-cf51e535a411', 'service_image-1714207175757', 1, 1, 'acd89270-64f2-445e-be53-22400d5608bd');
INSERT INTO `service_images` VALUES ('31d3f298-2abb-41e6-b4ce-68be3460b517', 'service_image-1714201872503', 2, 1, '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_images` VALUES ('34c96f84-51ac-47b4-875a-e881e8d41ca6', 'service_image-1714206282032', 2, 1, 'c9924e2d-bd6a-4704-b36e-fa6545262eb8');
INSERT INTO `service_images` VALUES ('396653cf-79b7-4d39-a028-05699aa007f8', 'service_image-1714206599783', 2, 2, '99b94983-d9ea-4030-94d3-e72c5d3f4f65');
INSERT INTO `service_images` VALUES ('3d704313-daf0-4342-b3a3-d9d9693e02f2', 'service_image-1714206480104', 2, 2, 'f9ac871e-9c23-4f05-99fb-8ffbe7934853');
INSERT INTO `service_images` VALUES ('411d6ce1-8c30-4786-b6e8-5bc76beb9b07', 'service_image-1714201915094', 2, 3, '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_images` VALUES ('435a11b9-0f5e-46a6-b03b-8535750183b3', 'service_image-1714206422265', 2, 3, '693e1bcf-b782-43c1-8a9e-15df7512ad0a');
INSERT INTO `service_images` VALUES ('4730c20f-d238-4bde-b3c3-abb7abbf54b8', 'service_image-1714206947449', 2, 2, 'fe2ebff7-ffb3-4f36-9989-4643cda5b247');
INSERT INTO `service_images` VALUES ('4b5bb12c-0d27-4f90-b8ff-8d60fb8f5f59', 'service_image-1714207019671', 2, 2, '4863fd29-0eb5-4476-a9d4-2286af8af9e8');
INSERT INTO `service_images` VALUES ('4f3ff936-c2a5-4dd8-a3d4-a2fe1230dd26', 'service_image-1714207133682', 2, 1, 'c7240872-614d-409f-95d0-ca296dc182d8');
INSERT INTO `service_images` VALUES ('528afa01-6676-4df5-88c0-3db8a9af031d', 'service_image-1714204759866', 2, 1, 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_images` VALUES ('53b502af-21a1-43c5-beb7-87b9517de171', 'service_image-1714206121904', 1, 2, '5161c739-6b95-43b8-9585-53ba41a6a543');
INSERT INTO `service_images` VALUES ('53fec8c2-c0af-4897-abbb-e5054a1ac9f1', 'service_image-1714204789629', 2, 4, 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_images` VALUES ('54181186-a823-4065-a1f6-8ad9f15425fb', 'service_image-1714204902651', 2, 2, '5041f47d-565c-4d29-9ba8-a40b5838d1d6');
INSERT INTO `service_images` VALUES ('56beb5fe-b3fa-44d4-aed4-035cee071077', 'service_image-1714206987969', 1, 1, '4863fd29-0eb5-4476-a9d4-2286af8af9e8');
INSERT INTO `service_images` VALUES ('58d3f970-8e33-4500-bb68-3f52b4b3f6de', 'service_image-1714206291473', 2, 2, 'c9924e2d-bd6a-4704-b36e-fa6545262eb8');
INSERT INTO `service_images` VALUES ('5a55a907-3abd-4f18-8c13-122e2e8f23b2', 'service_image-1714204732890', 1, 1, 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_images` VALUES ('5ab1c072-22aa-45ee-94e9-391d9bf9144f', 'service_image-1714206386476', 1, 1, '693e1bcf-b782-43c1-8a9e-15df7512ad0a');
INSERT INTO `service_images` VALUES ('5d419677-670d-4316-bfe9-4417061e539e', 'service_image-1714201860039', 1, 2, '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_images` VALUES ('61f32ae3-7d7e-4d67-b0f0-8f87609077a4', 'service_image-1714204838920', 1, 1, '5041f47d-565c-4d29-9ba8-a40b5838d1d6');
INSERT INTO `service_images` VALUES ('67969132-82bb-4784-b534-9568286bc177', 'service_image-1714202041655', 2, 4, '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_images` VALUES ('706dcc18-ac45-4766-9d3a-3205130fe868', 'service_image-1714206263381', 1, 1, 'c9924e2d-bd6a-4704-b36e-fa6545262eb8');
INSERT INTO `service_images` VALUES ('738b8368-4ec6-42d8-b183-595f296522be', 'service_image-1714207076092', 1, 2, '5ccd7dce-4472-47a9-b070-e926c4943242');
INSERT INTO `service_images` VALUES ('764264a0-e431-4d19-b57c-f2de99d15df2', 'service_image-1714204130189', 2, 3, 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_images` VALUES ('78256557-6e53-4886-83a3-b9cff422c5f0', 'service_image-1714207184445', 1, 2, 'acd89270-64f2-445e-be53-22400d5608bd');
INSERT INTO `service_images` VALUES ('79cacf37-dd96-416c-a730-a986a6aed47b', 'service_image-1714205379016', 2, 1, '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_images` VALUES ('7a2d9f4d-fd90-4775-a95b-0156b57adbc4', 'service_image-1714204085294', 1, 1, 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_images` VALUES ('7a36a330-6818-4ed0-a473-50730a5ecf0f', 'service_image-1714206938818', 2, 1, 'fe2ebff7-ffb3-4f36-9989-4643cda5b247');
INSERT INTO `service_images` VALUES ('7e1132e5-5679-439d-b7ea-ffce42cb947b', 'service_image-1714203657870', 1, 2, '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_images` VALUES ('7f41cf18-3ffe-4e30-9ad9-8fd6380beeee', 'service_image-1714206400582', 1, 2, '693e1bcf-b782-43c1-8a9e-15df7512ad0a');
INSERT INTO `service_images` VALUES ('894de8ce-6278-40d6-ba05-91788d08288d', 'service_image-1714207083579', 2, 1, '5ccd7dce-4472-47a9-b070-e926c4943242');
INSERT INTO `service_images` VALUES ('90f6f166-d0b7-47dc-8d38-de2743281653', 'service_image-1714204755238', 1, 2, 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_images` VALUES ('98bbdb79-4d9e-44a1-853a-6dc0f5372433', 'service_image-1714205362535', 1, 2, '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_images` VALUES ('995a1b3c-98d7-4b21-ae55-2490fd51003a', 'service_image-1714207126410', 1, 2, 'c7240872-614d-409f-95d0-ca296dc182d8');
INSERT INTO `service_images` VALUES ('9bf1b1bc-419e-4ad2-ace8-d42efc099b7b', 'service_image-1714205901999', 1, 1, 'adb175e7-3d9b-4b60-887e-0ba990a36dd8');
INSERT INTO `service_images` VALUES ('9e09e635-8a54-4726-b7f5-0b542de4583b', 'service_image-1714206103873', 1, 1, '5161c739-6b95-43b8-9585-53ba41a6a543');
INSERT INTO `service_images` VALUES ('a7eaa1ba-3754-464f-b826-da369cd1f73a', 'service_image-1714201830169', 1, 1, '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_images` VALUES ('b3564753-d0bf-4e03-a941-b48c5b0e9935', 'service_image-1714201899083', 2, 2, '3b96272e-7006-480c-ad75-10969a6a4b2a');
INSERT INTO `service_images` VALUES ('b399d669-0023-41ff-9eea-391940bb03e4', 'service_image-1714204592419', 1, 1, 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');
INSERT INTO `service_images` VALUES ('b4447b08-6476-4861-8430-a9b08821edfa', 'service_image-1714206027202', 2, 1, 'F3C4B7C4-777C-44DD-8506-646348A73257');
INSERT INTO `service_images` VALUES ('bba9bdc9-07fc-456e-88a6-ccc617a4e98b', 'service_image-1714205915335', 1, 2, 'adb175e7-3d9b-4b60-887e-0ba990a36dd8');
INSERT INTO `service_images` VALUES ('bc78e0b4-2496-4438-afbe-a79e65f2f28a', 'service_image-1714203694984', 2, 2, '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_images` VALUES ('bcd3758b-e951-4ec1-9a19-b00e33aab483', 'service_image-1714206020197', 1, 2, 'F3C4B7C4-777C-44DD-8506-646348A73257');
INSERT INTO `service_images` VALUES ('bd4be3a9-59e6-44b5-a41e-919f7dabc0eb', 'service_image-1714206461247', 1, 1, 'f9ac871e-9c23-4f05-99fb-8ffbe7934853');
INSERT INTO `service_images` VALUES ('c082a494-6302-4864-98fe-9bba93cf9fdd', 'service_image-1714206273159', 1, 2, 'c9924e2d-bd6a-4704-b36e-fa6545262eb8');
INSERT INTO `service_images` VALUES ('c5f820ee-e373-4b25-b5cd-223c9baa8bb1', 'service_image-1714204121528', 2, 2, 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_images` VALUES ('c802388c-9c75-43e1-9c76-f3fd83458bfc', 'service_image-1714204661754', 2, 3, 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');
INSERT INTO `service_images` VALUES ('cb4e4e39-d2d0-4209-b3bf-f1d64854788b', 'service_image-1714205942551', 2, 2, 'adb175e7-3d9b-4b60-887e-0ba990a36dd8');
INSERT INTO `service_images` VALUES ('cd73781c-36d0-43d0-88b8-a117b17ece4a', 'service_image-1714206140324', 2, 2, '5161c739-6b95-43b8-9585-53ba41a6a543');
INSERT INTO `service_images` VALUES ('d1f358f2-b971-4a26-8b3b-0d510cc7da5c', 'service_image-1714206146948', 2, 3, '5161c739-6b95-43b8-9585-53ba41a6a543');
INSERT INTO `service_images` VALUES ('d20f2de3-cd11-4cb3-98ca-228b1a8222af', 'service_image-1714204780340', 2, 3, 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_images` VALUES ('d31d6f41-4870-430a-8ba6-ba9945236626', 'service_image-1714204854870', 1, 2, '5041f47d-565c-4d29-9ba8-a40b5838d1d6');
INSERT INTO `service_images` VALUES ('d4f2ea45-0f40-494c-95aa-38ff2098afa6', 'service_image-1714204109998', 2, 1, 'c2d63854-8151-4726-a69e-daaaa4a39901');
INSERT INTO `service_images` VALUES ('dcffdbbc-60eb-4cba-ab8c-36781909a7b9', 'service_image-1714206929892', 1, 2, 'fe2ebff7-ffb3-4f36-9989-4643cda5b247');
INSERT INTO `service_images` VALUES ('def7f29e-41c5-4789-b98b-9a2cebadb72a', 'service_image-1714205392637', 2, 2, '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_images` VALUES ('df869849-c0e3-4b80-b84f-0c39568e5ee6', 'service_image-1714206295481', 2, 3, 'c9924e2d-bd6a-4704-b36e-fa6545262eb8');
INSERT INTO `service_images` VALUES ('e1b7d8a4-738b-468f-bbce-2f65bd9cfa81', 'service_image-1714207193477', 2, 1, 'acd89270-64f2-445e-be53-22400d5608bd');
INSERT INTO `service_images` VALUES ('e3a08aad-6cfc-4b34-87d4-0ea5c0769574', 'service_image-1714206190377', 1, 1, 'c0b0f243-0ae4-46cc-8d5d-830aa3b5e39d');
INSERT INTO `service_images` VALUES ('e40f4511-7f1b-4df6-9d01-d98bef686ae9', 'service_image-1714204768554', 2, 2, 'd70ad212-60ee-4f8c-86ad-38e4a6de9572');
INSERT INTO `service_images` VALUES ('e9990dfa-ec8a-4d78-bb71-a3f42ec8a1c2', 'service_image-1714206584093', 1, 2, '99b94983-d9ea-4030-94d3-e72c5d3f4f65');
INSERT INTO `service_images` VALUES ('ea5bb318-287a-4442-b629-cb2e7badaef6', 'service_image-1714206472851', 2, 1, 'f9ac871e-9c23-4f05-99fb-8ffbe7934853');
INSERT INTO `service_images` VALUES ('ed97be65-e8f7-484e-8809-d8271a7f35c6', 'service_image-1714203988504', 2, 1, '2fafc36c-8b0d-4593-8c57-0250c0fd7a80');
INSERT INTO `service_images` VALUES ('edb6d777-38f2-46f2-9acb-185adecef57a', 'service_image-1714207090231', 2, 2, '5ccd7dce-4472-47a9-b070-e926c4943242');
INSERT INTO `service_images` VALUES ('f0adeb4e-f555-4451-97c2-fc72c7d24fa9', 'service_image-1714206590006', 2, 1, '99b94983-d9ea-4030-94d3-e72c5d3f4f65');
INSERT INTO `service_images` VALUES ('f401d610-5712-4daa-9f0e-061604e4f1d0', 'service_image-1714204652995', 2, 2, 'ae2f9774-6478-4413-bfad-6dd17f4ffe79');
INSERT INTO `service_images` VALUES ('f67bccac-a541-41fc-9ba7-43007302f26b', 'service_image-1714205925076', 2, 1, 'adb175e7-3d9b-4b60-887e-0ba990a36dd8');
INSERT INTO `service_images` VALUES ('f9b3984e-8600-49e7-b3e3-740adae5fa25', 'service_image-1714205406495', 2, 3, '62f84788-252f-4908-ba43-a19001052418');
INSERT INTO `service_images` VALUES ('fd66871b-2a70-4d29-a4af-85b7d3843372', 'service_image-1714207013909', 2, 1, '4863fd29-0eb5-4476-a9d4-2286af8af9e8');
INSERT INTO `service_images` VALUES ('fdb6bacd-4d49-4417-97e7-19de769ec5eb', 'service_image-1714206407878', 2, 1, '693e1bcf-b782-43c1-8a9e-15df7512ad0a');
INSERT INTO `service_images` VALUES ('ffcbbd58-b47c-43e2-a106-0945608d6fc1', 'service_image-1714207060581', 1, 1, '5ccd7dce-4472-47a9-b070-e926c4943242');

-- ----------------------------
-- Table structure for service_orders
-- ----------------------------
DROP TABLE IF EXISTS `service_orders`;
CREATE TABLE `service_orders`  (
  `service_order_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '服务订单id',
  `service_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '服务id',
  `service_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '服务名称',
  `service_price` double NULL DEFAULT NULL COMMENT '服务价格',
  `service_time` datetime NULL DEFAULT NULL COMMENT '服务时间',
  `service_number` bigint(20) NULL DEFAULT NULL,
  `service_date` datetime NULL DEFAULT NULL COMMENT '下单时间',
  `service_address_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '服务地址用户姓名',
  `service_address_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '服务地址用户电话',
  `service_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_status` int(11) NULL DEFAULT NULL COMMENT '1立即上门2预订单3取消4完成5完成评价',
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`service_order_id`) USING BTREE,
  INDEX `service_id`(`service_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `service_orders_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `service_orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service_orders
-- ----------------------------
INSERT INTO `service_orders` VALUES ('1c98a539-6160-4920-bda7-b4617ca85a69', '10fbf31f-d30f-4ea7-9305-86f768fca708', '遛狗喂食', 69.9, '2024-04-27 16:40:25', 202404274076, '2024-04-27 16:40:25', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714201830169');
INSERT INTO `service_orders` VALUES ('2e4b7766-8a6c-4c33-962d-64dda15ad11a', '82c79a02-2075-4fef-b1f3-09bc1b22a90e', '猫咪洗护', 150, '2024-04-27 16:46:51', 202404279465, '2024-04-27 16:46:51', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204592419');
INSERT INTO `service_orders` VALUES ('39ccfb84-b585-4b01-b59d-8b59f9526ca1', 'f5c0ac0e-2126-422e-b884-88594fa9873f', '清洗猫砂', 200, '2024-04-27 16:44:28', 202404277753, '2024-04-27 16:44:28', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204085294');
INSERT INTO `service_orders` VALUES ('3c575c1f-f4dd-45ae-b300-ef9be991e406', '1f8b76aa-6f7c-48e5-9bc8-84863558c0a3', '上门驯宠', 399, '2024-04-27 16:40:33', 202404271334, '2024-04-27 16:40:33', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206103873');
INSERT INTO `service_orders` VALUES ('4284746d-1e32-41f9-8c46-c263e03a372d', '30c06117-a035-4048-88e6-a8ce1302e53c', '送宠洗澡', 50, '2024-04-27 16:40:42', 202404274343, '2024-04-27 16:40:42', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206386476');
INSERT INTO `service_orders` VALUES ('48fc346d-7dab-44e2-adb3-587651235233', 'd5fa5453-e1a5-42d2-935c-6fe0bf5049d9', '羊上门喂食', 119.9, '2024-04-27 16:41:03', 202404276426, '2024-04-27 16:41:03', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714207060581');
INSERT INTO `service_orders` VALUES ('57a79dc4-ff06-44d8-be54-b19bce667d0f', '62f84788-252f-4908-ba43-a19001052418', '上门喂猫', 49.99, '2024-04-27 16:44:25', 202404272124, '2024-04-27 16:44:25', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714203564982');
INSERT INTO `service_orders` VALUES ('65c5a954-be00-415e-a8fa-1b5d71876294', '8d30454f-a0a7-45ba-b1ba-954c18ebde99', '上门遛狗', 54.9, '2024-04-27 16:40:31', 202404272321, '2024-04-27 16:40:31', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206011789');
INSERT INTO `service_orders` VALUES ('6b3f37a3-413f-4e26-9bfc-b78d21106c58', 'dc81d3e3-cbb6-48a2-8ff2-24c9db096f9d', '鸟上门喂食', 49.9, '2024-04-27 16:40:58', 202404273993, '2024-04-27 16:40:59', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714207175757');
INSERT INTO `service_orders` VALUES ('7e6b9351-3638-4ce5-aa7a-13a3b84b8724', '93090a3c-91e3-45ce-b9a4-c84e107c6cff', '猪上门喂食', 49.9, '2024-04-27 16:40:53', 202404277031, '2024-04-27 16:40:53', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206920800');
INSERT INTO `service_orders` VALUES ('7e88d22d-ccfe-411b-b108-97090bba87c1', '65d55764-1230-423d-8424-a5f1c9b75425', '小狗喂食', 49.9, '2024-04-27 16:40:23', 202404275009, '2024-04-27 16:40:23', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714205355884');
INSERT INTO `service_orders` VALUES ('83f8b366-9e71-4fdf-9e4d-da8a374413f6', '06c1c24e-f0ef-4577-9d00-95f0270de6e9', '兔上门喂食', 59.9, '2024-04-27 16:40:56', 202404277633, '2024-04-27 16:40:56', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206987969');
INSERT INTO `service_orders` VALUES ('90a43a76-0470-41fb-b8e8-d8aecfa6afd4', 'f5c0ac0e-2126-422e-b884-88594fa9873f', '清洗猫砂', 200, '2024-04-27 16:46:47', 202404277928, '2024-04-27 16:46:47', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204085294');
INSERT INTO `service_orders` VALUES ('919da6ea-0b1e-4a63-938b-105b9f8c6b03', '82c79a02-2075-4fef-b1f3-09bc1b22a90e', '猫咪洗护', 150, '2024-04-27 16:40:12', 202404273653, '2024-04-27 16:40:12', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204592419');
INSERT INTO `service_orders` VALUES ('94acfe44-a076-451c-aa47-be5375d9df31', '62f84788-252f-4908-ba43-a19001052418', '上门喂猫', 49.99, '2024-04-27 16:40:04', 202404271888, '2024-04-27 16:40:05', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714203564982');
INSERT INTO `service_orders` VALUES ('ac6d3669-0f3c-437b-9d52-1a95b8979d69', '62f84788-252f-4908-ba43-a19001052418', '上门喂猫', 49.99, '2024-05-08 21:20:48', 202405081468, '2024-05-08 21:20:48', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714203564982');
INSERT INTO `service_orders` VALUES ('b73d4863-f7f9-442e-b61b-5d57b78e347e', '24f3ee2f-1e58-431a-b685-e95f1c304b5c', '会员卡', 99.99, '2024-04-27 16:40:37', 202404272257, '2024-04-27 16:40:37', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206190377');
INSERT INTO `service_orders` VALUES ('b8722511-2f2e-4bb7-9551-2f7b3034b869', 'f5c0ac0e-2126-422e-b884-88594fa9873f', '清洗猫砂', 200, '2024-04-27 16:45:07', 202404277084, '2024-04-27 16:45:07', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204085294');
INSERT INTO `service_orders` VALUES ('c784a138-b47f-4f5f-8e01-cddf989f0fe9', 'b2d438d5-d739-456d-9195-d3adfcc5f796', '宠物托运', 100, '2024-04-27 16:40:45', 202404272711, '2024-04-27 16:40:45', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206461247');
INSERT INTO `service_orders` VALUES ('c94fc7b0-215e-4842-a3c0-e81269c7d500', 'f5c0ac0e-2126-422e-b884-88594fa9873f', '清洗猫砂', 200, '2024-04-27 16:40:09', 202404277946, '2024-04-27 16:40:09', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204085294');
INSERT INTO `service_orders` VALUES ('cd283af7-7dc0-415b-824c-35f86dcbff3a', 'c5954816-4836-4457-af62-38f95292fb8e', '猫咪美容', 150, '2024-04-27 16:40:15', 202404278124, '2024-04-27 16:40:15', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204732890');
INSERT INTO `service_orders` VALUES ('d0c6ca7d-ccfd-47d5-ba94-24355aedfb92', '62f84788-252f-4908-ba43-a19001052418', '上门喂猫', 49.99, '2024-04-27 16:45:03', 202404271343, '2024-04-27 16:45:03', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714203564982');
INSERT INTO `service_orders` VALUES ('d17094e1-37ca-406c-bf47-d4ab61f41510', '156b135f-338c-462c-a199-03f138166828', '其他宠物喂食', 59.9, '2024-04-27 16:41:01', 202404275428, '2024-04-27 16:41:01', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714207119702');
INSERT INTO `service_orders` VALUES ('da6928c5-2ef2-4b16-ba2a-f4bc463fa934', 'c2c5e48b-74b8-4309-bd02-644b62308a18', '店铺寄养', 80, '2024-04-27 16:40:40', 202404274166, '2024-04-27 16:40:40', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206263381');
INSERT INTO `service_orders` VALUES ('da7ebb4c-1e9a-4f25-81d8-d8e5a64ee41d', '1fd77f1e-cf92-4aa9-a4e9-099f7a28df01', '狗狗美容', 80, '2024-04-27 16:40:28', 202404278091, '2024-04-27 16:40:29', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714205901999');
INSERT INTO `service_orders` VALUES ('f973cb64-cd04-43cf-b801-9f3938f7cb54', '46679c5d-70cd-4bec-941d-bcda4934b01d', '家庭寄养', 80, '2024-04-27 16:40:48', 202404272973, '2024-04-27 16:40:48', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714206564951');
INSERT INTO `service_orders` VALUES ('fd0d8ba8-6bdb-4996-b665-d5f276a2ea8c', '2d620a09-5bad-4602-86cb-f67c459475c4', '猫咪护理', 95, '2024-04-27 16:40:18', 202404278155, '2024-04-27 16:40:18', '杨泽楷', '13160605277', '北京市-北京市-东城区asdasd', 5, '627a83f1-2efe-4d7c-b3f6-93faeae6618b', 'service_image-1714204838920');

-- ----------------------------
-- Table structure for service_types
-- ----------------------------
DROP TABLE IF EXISTS `service_types`;
CREATE TABLE `service_types`  (
  `service_type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_type_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_type_order` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`service_type_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service_types
-- ----------------------------
INSERT INTO `service_types` VALUES ('22d89691-93a2-473a-9e0d-866e34cfa0ad', '其他宠物', 5);
INSERT INTO `service_types` VALUES ('5be571b9-220b-4b92-8a93-d704becfa888', '其他服务', 4);
INSERT INTO `service_types` VALUES ('5f2278b5-c271-4084-8e2a-4f44ead5dcfc', '猫咪', 1);
INSERT INTO `service_types` VALUES ('67390928-4583-4da5-8b47-f4c5abb92a41', '活动', 3);
INSERT INTO `service_types` VALUES ('cffa83fb-9866-4d15-b211-6cd0c1b7fdd1', '狗狗', 2);

-- ----------------------------
-- Table structure for services
-- ----------------------------
DROP TABLE IF EXISTS `services`;
CREATE TABLE `services`  (
  `service_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `service_order` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`service_id`) USING BTREE,
  INDEX `service_type_id`(`service_type_id`) USING BTREE,
  CONSTRAINT `services_ibfk_1` FOREIGN KEY (`service_type_id`) REFERENCES `service_types` (`service_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of services
-- ----------------------------
INSERT INTO `services` VALUES ('06c1c24e-f0ef-4577-9d00-95f0270de6e9', '兔上门喂食', '22d89691-93a2-473a-9e0d-866e34cfa0ad', 'tushangmengweishi.png', 2);
INSERT INTO `services` VALUES ('10fbf31f-d30f-4ea7-9305-86f768fca708', '遛狗喂食', 'cffa83fb-9866-4d15-b211-6cd0c1b7fdd1', 'liugouweishi.png', 2);
INSERT INTO `services` VALUES ('156b135f-338c-462c-a199-03f138166828', '其他宠物喂食', '22d89691-93a2-473a-9e0d-866e34cfa0ad', 'cateatfish.png', 4);
INSERT INTO `services` VALUES ('1f8b76aa-6f7c-48e5-9bc8-84863558c0a3', '上门训宠', 'cffa83fb-9866-4d15-b211-6cd0c1b7fdd1', 'shangmenxunchong.png', 5);
INSERT INTO `services` VALUES ('1fd77f1e-cf92-4aa9-a4e9-099f7a28df01', '狗狗美容', 'cffa83fb-9866-4d15-b211-6cd0c1b7fdd1', 'gougoumeirong.png', 3);
INSERT INTO `services` VALUES ('24f3ee2f-1e58-431a-b685-e95f1c304b5c', '会员卡', '67390928-4583-4da5-8b47-f4c5abb92a41', 'gou.png', 1);
INSERT INTO `services` VALUES ('2d620a09-5bad-4602-86cb-f67c459475c4', '猫咪护理', '5f2278b5-c271-4084-8e2a-4f44ead5dcfc', 'maomihuli.png', 5);
INSERT INTO `services` VALUES ('30c06117-a035-4048-88e6-a8ce1302e53c', '送宠洗澡', '5be571b9-220b-4b92-8a93-d704becfa888', 'songchongxizao.png', 2);
INSERT INTO `services` VALUES ('46679c5d-70cd-4bec-941d-bcda4934b01d', '家庭寄养', '5be571b9-220b-4b92-8a93-d704becfa888', 'jiatingjiyang.png', 5);
INSERT INTO `services` VALUES ('62f84788-252f-4908-ba43-a19001052418', '上门喂猫', '5f2278b5-c271-4084-8e2a-4f44ead5dcfc', 'shangmengweimao.png', 1);
INSERT INTO `services` VALUES ('65d55764-1230-423d-8424-a5f1c9b75425', '小狗喂食', 'cffa83fb-9866-4d15-b211-6cd0c1b7fdd1', 'xiaogouweishi.png', 1);
INSERT INTO `services` VALUES ('82c79a02-2075-4fef-b1f3-09bc1b22a90e', '猫咪洗护', '5f2278b5-c271-4084-8e2a-4f44ead5dcfc', 'maomixihu.png', 3);
INSERT INTO `services` VALUES ('8d30454f-a0a7-45ba-b1ba-954c18ebde99', '上门遛狗', 'cffa83fb-9866-4d15-b211-6cd0c1b7fdd1', 'shangmenliugou.png', 4);
INSERT INTO `services` VALUES ('93090a3c-91e3-45ce-b9a4-c84e107c6cff', '猪上门喂食', '22d89691-93a2-473a-9e0d-866e34cfa0ad', 'zhushangmenweishi.png', 1);
INSERT INTO `services` VALUES ('b2d438d5-d739-456d-9195-d3adfcc5f796', '宠物托运', '5be571b9-220b-4b92-8a93-d704becfa888', 'chongwutuoyun.png', 4);
INSERT INTO `services` VALUES ('c2c5e48b-74b8-4309-bd02-644b62308a18', '店铺寄养', '5be571b9-220b-4b92-8a93-d704becfa888', 'dianpujiyang.png', 1);
INSERT INTO `services` VALUES ('c5954816-4836-4457-af62-38f95292fb8e', '猫咪美容', '5f2278b5-c271-4084-8e2a-4f44ead5dcfc', 'maomimeirong.png', 4);
INSERT INTO `services` VALUES ('d5fa5453-e1a5-42d2-935c-6fe0bf5049d9', '羊上门喂食', '22d89691-93a2-473a-9e0d-866e34cfa0ad', 'yangshangmengweishi.png', 5);
INSERT INTO `services` VALUES ('dc81d3e3-cbb6-48a2-8ff2-24c9db096f9d', '鸟上门喂食', '22d89691-93a2-473a-9e0d-866e34cfa0ad', 'niaoshangmengweishi.png', 3);
INSERT INTO `services` VALUES ('f5c0ac0e-2126-422e-b884-88594fa9873f', '清洗猫砂', '5f2278b5-c271-4084-8e2a-4f44ead5dcfc', 'qingximaosha.png', 2);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_birthday` date NULL DEFAULT NULL,
  `user_signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '个性签名',
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '密码：md5加密',
  `user_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('627a83f1-2efe-4d7c-b3f6-93faeae6618b', '爱宠之家zfuRB12', '13375030472', '2024-03-14', '这个人很神秘,没有个性签名kl;', '$2a$10$FklD7sZG8HcyS05UBxwwFeDz7AUlO41RS3nt6XFF060vTN2p2ifsy', 'avatar-1714207283428');
INSERT INTO `users` VALUES ('964d7057-a798-418c-ad41-72297dfbcf57', '爱宠之家QPq', '13160605277', '2024-03-12', '这个人很神秘,没有个性签名\n图像显示地址还没改', '$2a$10$71FC/Ji7uFgJ4GeIYiV.gu25Rogmas/jzrPEGrI2IOFJy4wN1LPTe', 'avatar-1711953851323');

SET FOREIGN_KEY_CHECKS = 1;
