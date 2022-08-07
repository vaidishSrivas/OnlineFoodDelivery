-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2022 at 04:41 PM
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
-- Database: `fooddelivery`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `data` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `fname`, `lname`, `email`, `data`) VALUES
(1, 'abc', 'xyz', 'abc@gmail.com', '13464312'),
(2, 'pqr', 'xyz', 'pqr@gmail.com', 'hello!!'),
(3, 'Shayam', 'Verma', 'shya@gamil.com', 'There must be a luggage area');

-- --------------------------------------------------------

--
-- Table structure for table `pnr`
--

CREATE TABLE `pnr` (
  `id` int(255) NOT NULL,
  `pnrno` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `coachno` varchar(20) NOT NULL,
  `seatno` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pnr`
--

INSERT INTO `pnr` (`id`, `pnrno`, `name`, `coachno`, `seatno`) VALUES
(1, 1234567890, 'Rahul', 'B1', 16),
(2, 1236745120, 'Ram', 'B6', 65),
(3, 2059781230, 'Mohan', 'S4', 15),
(4, 2069784562, 'Neha', 'S7', 50);

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phno` varchar(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `address`, `phno`, `city`, `state`, `email`, `pass`) VALUES
(14, 'Rahul', 'Rdso Colony', '6388156478', 'JammuandKashmir', 'Jammu', 'rahul12@gmail.com', 'abc@123'),
(15, 'Sneha', 'Ramswaroop', '9836451203', 'UttarPradesh', 'Lucknow', 'sneha2001@gmail.com', 'sneha'),
(16, 'Mohan Yadav', 'Roadways', '6987123650', 'DadraandagarHaveliandDamanandDiu', 'Silvassa', 'mohan29@gmail.com', '29mohan'),
(17, 'Pinky sharma', 'town club', '6325987452', 'Bihar', 'Hajipur', 'pink25@gmail.com', 'pinky'),
(18, 'Raju Srivastava', 'Ghanshyam colony', '6879453210', 'Uttarakhand', 'Mussoorie', 'rajusri@gmail.com', '123@abc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pnr`
--
ALTER TABLE `pnr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pnr`
--
ALTER TABLE `pnr`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
