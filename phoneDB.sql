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

DROP TABLE IF EXISTS `ph_phone`;
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
INSERT INTO `ph_phone` VALUES ( 0, 'E4',     5, 16, '', 0),
                              ( 1, 'Ascend', 6, 9,  '', 1),
                              ( 2, 'G5',     6, 16, '', 0);
/*!40000 ALTER TABLE `ph_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for `ph_owner`
--

DROP TABLE IF EXISTS `ph_owner`;
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

DROP TABLE IF EXISTS `ph_carrier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_carrier` (
    `id`           int(11)      NOT     NULL AUTO_INCREMENT,
    `name`         varchar(255) NOT     NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_carrier`
/*!40000 ALTER TABLE `ph_carrier` DISABLE KEYS */;
INSERT INTO `ph_carrier` VALUES ( 0, 'Republic');
/*!40000 ALTER TABLE `ph_carrier` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for `ph_man`
--

DROP TABLE IF EXISTS `ph_man`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_man` (
    `id`           int(11)      NOT     NULL AUTO_INCREMENT,
    `name`         varchar(255) NOT     NULL,
    `model`        varchar(255) DEFAULT NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_man`
/*!40000 ALTER TABLE `ph_man` DISABLE KEYS */;
INSERT INTO `ph_man` VALUES ( 0, 'Motorola', 'E4'),
                            ( 1, 'Huawei',   'Ascend');
/*!40000 ALTER TABLE `ph_man` ENABLE KEYS */;
UNLOCK TABLES;

--
-- phone to owner
--

DROP TABLE IF EXISTS `ph_phone_owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_phone_owner` (
    `pid` int(11) NOT NULL DEFAULT '0',
    `oid` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (`pid`, `oid`),
    KEY `oid` (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_phone_owner`;
/*!40000 ALTER TABLE `ph_phone_owner` DISABLE KEYS */;
INSERT INTO `ph_phone_owner` VALUES ( 2, 0 ),
                                    ( 0, 1 );
/*!40000 ALTER TABLE `ph_phone_owner` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `ph_phone_carrier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_phone_carrier` (
    `pid` int(11) NOT NULL DEFAULT '0',
    `cid` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (`pid`, `cid`),
    KEY `oid` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_phone_carrier`;
/*!40000 ALTER TABLE `ph_phone_carrier` DISABLE KEYS */;
INSERT INTO `ph_phone_carrier` VALUES ( 0, 0 ),
                                      ( 2, 0 );
/*!40000 ALTER TABLE `ph_phone_carrier` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `ph_owner_carrier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ph_owner_carrier` (
    `oid` int(11) NOT NULL DEFAULT '0',
    `cid` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (`oid`, `cid`),
    KEY `oid` (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ph_owner_carrier`;
/*!40000 ALTER TABLE `ph_owner_carrier` DISABLE KEYS */;
INSERT INTO `ph_owner_carrier` VALUES ( 2, 0 ),
                                      ( 0, 1 );
/*!40000 ALTER TABLE `ph_owner_carrier` ENABLE KEYS */;
UNLOCK TABLES;
