# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.23)
# Database: bikespec
# Generation Time: 2015-03-02 06:44:19 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table forks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `forks`;

CREATE TABLE `forks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `vendor` int(11) NOT NULL DEFAULT '0',
  `name` varchar(1024) NOT NULL DEFAULT 'MyFork',
  `modelName` varchar(1024) DEFAULT 'XC30',
  `year` int(11) DEFAULT '1970',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `forks` WRITE;
/*!40000 ALTER TABLE `forks` DISABLE KEYS */;

INSERT INTO `forks` (`id`, `vendor`, `name`, `modelName`, `year`)
VALUES
	(1,2,'Tora','XC32',2010),
	(2,2,'Reba','',2011);

/*!40000 ALTER TABLE `forks` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table parts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `parts`;

CREATE TABLE `parts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) DEFAULT 'Part',
  `route` varchar(1024) DEFAULT 'forks',
  `main` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;

INSERT INTO `parts` (`id`, `name`, `route`, `main`)
VALUES
	(1,'Forks and Rear suspension','forks',1),
	(2,'Control','controls',1),
	(3,'Gear','gears',1),
	(4,'Wheels and Tyres','wheels',1),
	(5,'Breaks','breaks',1),
	(6,'Saddle','saddles',0);

/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table vendors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `vendors`;

CREATE TABLE `vendors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) DEFAULT 'Fox',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;

INSERT INTO `vendors` (`id`, `name`)
VALUES
	(1,'Fox'),
	(2,'RockShox'),
	(3,'Magura'),
	(4,'RaceFace'),
	(5,'Pro');

/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
