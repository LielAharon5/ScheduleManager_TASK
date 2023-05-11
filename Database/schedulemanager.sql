-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 08:33 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedulemanager`
--
CREATE DATABASE IF NOT EXISTS `schedulemanager` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `schedulemanager`;

-- --------------------------------------------------------

--
-- Table structure for table `devteams`
--

CREATE TABLE `devteams` (
  `devTeamId` int(11) NOT NULL,
  `devTeamName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `devteams`
--

INSERT INTO `devteams` (`devTeamId`, `devTeamName`) VALUES
(1, 'UI Team'),
(2, 'UX Team'),
(3, 'Mobile Team'),
(4, 'React Team'),
(5, 'DevOps Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetingschedule`
--

CREATE TABLE `meetingschedule` (
  `meetingId` int(11) NOT NULL,
  `devTeamId` int(11) NOT NULL,
  `meetingStartingDate` datetime NOT NULL,
  `meetingEndingDate` datetime NOT NULL,
  `meetingDescription` varchar(200) NOT NULL,
  `meetingRoom` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetingschedule`
--

INSERT INTO `meetingschedule` (`meetingId`, `devTeamId`, `meetingStartingDate`, `meetingEndingDate`, `meetingDescription`, `meetingRoom`) VALUES
(2, 3, '2023-05-18 14:11:00', '2023-05-18 16:15:00', 'checking for progress in the mobile app for the Liqer Store', 'room 005'),
(3, 1, '2023-05-19 10:00:00', '2023-05-19 11:15:00', 'checking before deadline for in the mobile app design', '014'),
(4, 1, '2023-05-24 18:30:00', '2023-05-24 20:30:00', 'follow up meeting to see progress in the project 3 weeks before deadline', 'room 025'),
(5, 1, '2023-05-31 13:00:00', '2023-05-31 15:00:00', 'follow up meeting to see progress in the project 2 weeks before deadline', 'room 121'),
(6, 1, '2023-06-07 14:30:00', '2023-06-07 16:30:00', 'follow up meeting to see progress in the project 1 weeks before deadline', 'room 303'),
(7, 5, '2023-05-11 10:00:00', '2023-05-11 11:00:00', 'getting new project - expectations and new assyments', 'room 021'),
(8, 2, '2023-05-15 13:00:00', '2023-05-15 15:00:00', 'checking for the backend progress for the Liquer Store online shop', 'room 005'),
(9, 2, '2023-05-25 13:00:00', '2023-05-25 15:00:00', 'checking for the backend progress for the Liquer Store online shop', 'room 101'),
(10, 4, '2023-05-21 10:00:00', '2023-05-21 10:30:00', 'a toast for Taem Manager wedding ', 'room 555'),
(11, 3, '2023-05-25 11:11:00', '2023-05-25 11:15:00', 'undefined', 'room 204'),
(12, 3, '2023-05-28 11:11:00', '2023-05-28 11:15:00', 'undefined', 'room 213'),
(13, 3, '2023-05-30 20:00:00', '2023-05-30 21:00:00', 'checking for progress in the mobile app for the Liqer Store', 'room 231'),
(14, 3, '2023-05-28 11:14:00', '2023-05-28 11:15:00', 'undefined', 'room 213'),
(15, 1, '2023-05-28 11:11:00', '2023-05-28 11:12:00', 'an happy hour for the graet job you do', 'room 555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devteams`
--
ALTER TABLE `devteams`
  ADD PRIMARY KEY (`devTeamId`);

--
-- Indexes for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `devTeamId` (`devTeamId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devteams`
--
ALTER TABLE `devteams`
  MODIFY `devTeamId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  ADD CONSTRAINT `meetingschedule_ibfk_1` FOREIGN KEY (`devTeamId`) REFERENCES `devteams` (`devTeamId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
