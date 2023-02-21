-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2022 at 09:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `devgroup`
--

CREATE TABLE `devgroup` (
  `devId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `devgroup`
--

INSERT INTO `devgroup` (`devId`, `name`) VALUES
(1, 'UI Team'),
(2, 'Mobile Team'),
(3, 'React Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingsId` int(11) NOT NULL,
  `devId` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `meetingDescription` varchar(300) NOT NULL,
  `meetingRoom` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingsId`, `devId`, `startDate`, `endDate`, `meetingDescription`, `meetingRoom`) VALUES
(1, 1, '2022-06-26 09:26:54', '2022-06-26 12:00:00', 'At the meeting we talked about the development of the company', 'Blue Room'),
(2, 2, '2022-06-26 10:30:00', '2022-06-26 11:45:00', 'At the meeting we talked about the development of employees and products', 'New York Room'),
(3, 3, '2022-06-26 09:26:54', '2022-06-26 13:00:00', 'At the meeting we talked about employee management', 'Large Board Room');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devgroup`
--
ALTER TABLE `devgroup`
  ADD PRIMARY KEY (`devId`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingsId`),
  ADD KEY `devId` (`devId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devgroup`
--
ALTER TABLE `devgroup`
  MODIFY `devId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`devId`) REFERENCES `devgroup` (`devId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
