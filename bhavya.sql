-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2018 at 12:19 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bhavya`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('ashwini', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(10) NOT NULL,
  `Name` text NOT NULL,
  `People` text NOT NULL,
  `date` text NOT NULL,
  `Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `Name`, `People`, `date`, `Message`) VALUES
(1, 'Dheena', '10', '2018-09-05T02:01', 'hotel poda '),
(2, 'Dheena', '67', '2018-09-05T02:01', 'blah blha blah'),
(3, 'TEst', '12', '2018-09-05T02:01', 'billing');

-- --------------------------------------------------------

--
-- Table structure for table `orders_details`
--

CREATE TABLE `orders_details` (
  `order_id` int(10) NOT NULL,
  `user` varchar(100) NOT NULL,
  `food_order_details` text NOT NULL,
  `total` int(50) NOT NULL,
  `date` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders_details`
--

INSERT INTO `orders_details` (`order_id`, `user`, `food_order_details`, `total`, `date`) VALUES
(1, 'dheena', '{"sess":{"dhosa":{"quantity":"2","price":"25"}}}', 53, '29-9-2018'),
(2, 'dheena', '{"sess":{"curd rice":{"quantity":"2","price":"40"},"chapathi":{"quantity":"3","price":"35"}}}', 194, '29-09-2018'),
(3, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(4, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(5, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(6, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(7, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(8, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(9, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 247, '29-09-2018'),
(10, 'dheena', '{"sess":{"dhosa":{"quantity":"3","price":"25"},"idly":{"quantity":"3","price":"20"},"upuma":{"quantity":"2","price":"50"}}}', 194, '29-09-2018'),
(11, 'dheena', '{"sess":{"dhosa":{"quantity":"2","price":"25"},"idly":{"quantity":"3","price":"20"}}}', 116, '29-09-2018');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `images` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `price`, `images`) VALUES
(1, 'dhosa', '25', '3'),
(2, 'idly', '20', '5'),
(3, 'upuma', '50', '12.'),
(4, 'curd rice', '40', '16'),
(5, 'chapathi', '35', '7'),
(6, 'biriyani', '100', '4'),
(7, 'tomoto rice', '50', '35.'),
(8, 'fried rice', '65', '88'),
(24, 'Fish', '75', 'Fish'),
(25, 'pizza', '120', 'pizza');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(5) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `dob` varchar(25) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `address` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `Phno` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `firstname`, `lastname`, `dob`, `username`, `password`, `address`, `email`, `Phno`) VALUES
(1, 'Dheena', 'dhayalan', '1995-04-04', 'Dheena', '12345678', 'Chennai', 'deena.dhayalan1294@gmail.', '9791399286');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(30) NOT NULL,
  `password` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `orders_details`
--
ALTER TABLE `orders_details`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
