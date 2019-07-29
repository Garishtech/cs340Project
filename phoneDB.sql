/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE=`+00:00` */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=`NO_AUTO_VALUE_ON_ZERO` */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;



--
-- Table structure for `ph_phone`
--

DROP TABLE IF EXISTS `ph_phone`
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_phone` (
    `id`           int(11)      NOT     NULL AUTO_INCREMENT,
    `model`        varchar(255) DEFAULT NULL,
    `screen_size`  int(11)      DEFAULT NULL,
    `in_storage`   int(11)      DEFAULT NULL,
    `ex_storage`   int(11)      DEFAULT NULL,
    `manufacturer` int(11)      NOT     NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_phone` WRITE;
/*!40000 ALTER TABLE `ph_phone` DISABLE KEYS */;
INSERT INTO `ph_phone` VALUES ( 0, 'E4',     5, 16, '', 'Motorola'),
                              ( 1, 'Ascend', 6, 9,  '', 'Huawei');
/*!40000 ALTER TABLE `ph_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for `ph_owner`
--

DROP TABLE IF EXISTS `ph_owner`
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_owner` (
    `id`           int(11)      NOT     NULL AUTO_INCREMENT,
    `f_name`       varchar(255) NOT     NULL,
    `l_name`       varchar(255) DEFAULT NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_owner`
/*!40000 ALTER TABLE `ph_owner` DISABLE KEYS */;
INSERT INTO `ph_owner` VALUES ( 0, 'Naomi',    'Hull'),
                              ( 1, 'Jon',      'Hull'),
                              ( 2, 'Cristian', 'Mann');
/*!40000 ALTER TABLE `ph_owner` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for `ph_carrier`
--




--
-- Table structure for `ph_manufacturer`
--

