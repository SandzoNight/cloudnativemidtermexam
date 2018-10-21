-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.3.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table studentervicedb.students
DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `department` varchar(255) NOT NULL,
  `faculty` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_5mbus2m1tm2acucrp6t627jmx` (`student_id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- Dumping data for table studentervicedb.students: 45 rows
DELETE FROM `students`;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `department`, `faculty`, `firstname`, `student_id`, `surname`, `year`) VALUES
	(1, 'IT', 'SIT', 'Kanisorn', '58130500009', 'Sutham', 4),
	(2, 'IT', 'SIT', 'Chanon', '58130500024', 'Thongsuk', 4),
	(3, 'IT', 'SIT', 'Patipat', '58130500048', 'Rueangsawat', 4),
	(4, 'IT', 'SIT', 'Keerati', '59130500007', 'Jearjindarat', 3),
	(5, 'IT', 'SIT', 'Tanawat', '59130500035', 'Kittisiriphan', 3),
	(6, 'IT', 'SIT', 'Pureewat', '59130500049', 'Kaewpoy', 3),
	(7, 'IT', 'SIT', 'Phachara', '59130500051', 'Kamthong', 3),
	(8, 'IT', 'SIT', 'Pacharapol', '59130500052', 'Apitanapat', 3),
	(9, 'IT', 'SIT', 'Phornlert', '59130500053', 'Lochalernrat', 3),
	(10, 'IT', 'SIT', 'Pasut', '59130500054', 'Sriariyanun', 3),
	(11, 'IT', 'SIT', 'Patcharapol', '59130500055', 'Yothapirom', 3),
	(12, 'IT', 'SIT', 'Patric', '59130500060', 'Emmel', 3),
	(13, 'IT', 'SIT', 'Pattharathon', '59130500063', 'Srithundorn', 3),
	(14, 'IT', 'SIT', 'Puripat', '59130500069', 'Arayasirikul', 3),
	(15, 'IT', 'SIT', 'Rattanan', '59130500075', 'Sripornprasert', 3),
	(16, 'IT', 'SIT', 'Wachirachai', '59130500076', 'Daovijitr', 3),
	(17, 'IT', 'SIT', 'Wasin', '59130500081', 'Wachirapusitanun', 3),
	(18, 'IT', 'SIT', 'Vitsarut', '59130500089', 'Udomphol', 3),
	(19, 'IT', 'SIT', 'Wutthipong', '59130500092', 'Nuannim', 3),
	(20, 'IT', 'SIT', 'Supakorn', '59130500097', 'Trakulmaiphol', 3),
	(21, 'IT', 'SIT', 'Athiwat', '59130500112', 'Chotimaneewatthikorn', 3),
	(22, 'IT', 'SIT', 'Isariya', '59130500114', 'Rattanawannaphun', 3),
	(23, 'IT', 'SIT', 'Tanapat', '59130500128', 'Choochot', 3),
	(24, 'IT', 'SIT', 'Supawit', '59130500137', 'Ruenruetaikul', 3),
	(25, 'IT', 'SIT', 'Chawisa', '60130500019', 'Lertaiwattnakul', 2),
	(26, 'IT', 'SIT', 'Chitsanu', '60130500020', 'Noiudom', 2),
	(27, 'IT', 'SIT', 'Chutikan', '60130500021', 'Khuanpan', 2),
	(28, 'IT', 'SIT', 'Chotiga', '60130500022', 'Pianpatanavit', 2),
	(29, 'IT', 'SIT', 'Thanapol', '60130500024', 'Pradithsathabodee', 2),
	(30, 'IT', 'SIT', 'Natcha', '60130500025', 'Chanpitak', 2),
	(31, 'IT', 'SIT', 'Nutnarong', '60130500026', 'Yukittichai', 2),
	(32, 'IT', 'SIT', 'Khanadet', '60130500027', 'Khongsombhatt', 2),
	(33, 'IT', 'SIT', 'Natchanon', '60130500028', 'Kherlao', 2),
	(34, 'IT', 'SIT', 'Kongtap', '61130500005', 'Monthiraj', 1),
	(35, 'IT', 'SIT', 'Kantarat', '61130500006', 'Tatayanon', 1),
	(36, 'IT', 'SIT', 'Kan', '61130500007', 'Khamkoonmuang', 1),
	(37, 'IT', 'SIT', 'Kewalin', '61130500008', 'Intharakumhaeng', 1),
	(38, 'IT', 'SIT', 'Khunanon', '61130500009', 'Khongchoo', 1),
	(39, 'IT', 'SIT', 'Jakkrapan', '61130500010', 'Thongphet', 1),
	(40, 'IT', 'SIT', 'Jaturong', '61130500011', 'Nuannirun', 1),
	(41, 'IT', 'SIT', 'Jaruwan', '61130500012', 'Tadsanariang', 1),
	(42, 'IT', 'SIT', 'Jirapat', '61130500013', 'Klaokliang', 1),
	(43, 'IT', 'SIT', 'Jeeranun', '61130500014', 'Harigun', 1),
	(44, 'IT', 'SIT', 'Chayanut', '61130500016', 'Uthaipornchai', 1),
	(45, 'IT', 'SIT', 'Chayaporn', '61130500017', 'Popanom', 1);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
