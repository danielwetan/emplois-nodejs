-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 14, 2020 at 01:34 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emplois`
--

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.',
  `image` varchar(255) NOT NULL DEFAULT 'company.jpg',
  `created_at` varchar(255) NOT NULL DEFAULT current_timestamp(),
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `user_id`, `position`, `company`, `date`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'GJcvgik1g', 'Engineer', 'Google', 'January 2019 - December 2020', 'Quisque convallis ante lacus. Nunc vehicula justo vel sem imperdiet pharetra. Nam pharetra orci vel accumsan varius. Pellentesque ut ullamcorper quam, in pretium mauris. Vivamus tempus ac tellus ac vestibulum.', 'company.jpg', '2020-09-14 02:46:01', NULL),
(2, 'HhAMwsWpE', 'Engineer', 'Bukalapak', 'February 2019 - January 2020', 'Proin nisi odio, porttitor ac leo molestie, egestas porta dui. Suspendisse sit amet sapien suscipit, mollis urna quis, mollis nunc. Vivamus dictum nisi a euismod sagittis.', 'company.jpg', '2020-09-14 02:46:23', NULL),
(3, 'RAnyRh06G', 'Engineer', 'Tokopedia', 'March 2019 - February 2020', 'Livres ut convallis sem, quis mollis nulla. Maecenas vestibulum bibendum facilisis. Vestibulum venenatis sem eu eros laoreet fermentum. Aliquam non fermentum sapien', 'company.jpg', '2020-09-14 02:46:30', NULL),
(4, 'PsAEveEUX', 'Engineer', 'Shopee', 'April 2019 - March 2020', 'Mauris tincidunt augue eu egestas venenatis. Aliquam ac imperdiet lectus. Aliquam id velit at erat pellentesque efficitur. In mattis pellentesque felis, quis gravida turpis pulvinar sed. ', 'company.jpg', '2020-09-14 02:46:41', NULL),
(5, '4wPsf2CV-', 'Engineer', 'Microsoft', 'May 2019 - April 2020', 'Nulla luctus lorem non nibh mollis, sed pharetra nisl tincidunt. Morbi pharetra arcu eros, et lobortis sem ornare eu. Sed faucibus facilisis lectus, sit amet mollis leo tempor id.', 'company.jpg', '2020-09-14 02:46:49', NULL),
(6, '_hwJGDRLZ', 'Engineer', 'Amazon', 'June 2019 - May 2020', 'Curabitur sit amet accumsan erat, eu sollicitudin erat. Cras pulvinar elit ac dictum viverra. Donec convallis tempor quam, sed porta nisi aliquam cursus. Ut consequat eu mauris id tincidunt. Cras ac dapibus leo.', 'company.jpg', '2020-09-14 02:47:19', NULL),
(7, 'y3VSeK8Kp', 'Engineer', 'Facebook', 'July 2019 - June 2020', 'In ac varius mauris, et pretium ante. Integer fermentum ullamcorper urna sit amet blandit. Nunc ligula justo, consectetur non accumsan id, sagittis et arcu.', 'company.jpg', '2020-09-14 02:47:28', NULL),
(8, 'fQ1yDKIMI', 'Engineer', 'Microsoft', 'August 2019 - July 2020', 'Nulla vulputate id justo at facilisis. Sed neque arcu, pharetra non nisi nec, malesuada ullamcorper nisl. Donec pulvinar diam a velit fermentum porta. Proin mollis ligula nec dolor euismod fringilla.', 'company.jpg', '2020-09-14 02:47:36', NULL),
(9, 'oR681PypF', NULL, NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'company.jpg', '2020-09-14 17:49:21', NULL),
(10, '6Bjlba8xY', NULL, NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'company.jpg', '2020-09-14 17:52:01', NULL),
(11, 'ONE2NIVxF', NULL, NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'company.jpg', '2020-09-14 17:52:58', NULL),
(12, 'MBu15-6aL', NULL, NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'company.jpg', '2020-09-14 17:53:34', NULL),
(13, 'yGF4iEl_0O', NULL, NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'company.jpg', '2020-09-14 17:53:34', NULL),
(14, 'm2cyBCHmY', NULL, NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'company.jpg', '2020-09-14 17:53:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `hiring_partner`
--

CREATE TABLE `hiring_partner` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `phone_number` int(15) NOT NULL,
  `position` varchar(255) NOT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'partner.jpg',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `publication_link` varchar(255) DEFAULT NULL,
  `repository_link` varchar(255) DEFAULT NULL,
  `work_place` varchar(255) DEFAULT NULL,
  `portofolio_type` int(11) DEFAULT 1 COMMENT '0 = Web, 1 = Mobile',
  `image` varchar(255) NOT NULL DEFAULT 'portofolio.jpg',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id`, `user_id`, `name`, `description`, `publication_link`, `repository_link`, `work_place`, `portofolio_type`, `image`, `created_at`, `updated_at`) VALUES
(1, 'GJcvgik1g', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio4.png', '2020-09-13 19:46:01', NULL),
(2, 'HhAMwsWpE', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio1.png', '2020-09-13 19:46:23', NULL),
(3, 'RAnyRh06G', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio5.png', '2020-09-13 19:46:30', NULL),
(4, 'PsAEveEUX', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio4.png', '2020-09-13 19:46:41', NULL),
(5, '4wPsf2CV-', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio3.png', '2020-09-13 19:46:49', NULL),
(6, '_hwJGDRLZ', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio2.png', '2020-09-13 19:47:19', NULL),
(7, 'y3VSeK8Kp', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio1.png', '2020-09-13 19:47:28', NULL),
(8, 'fQ1yDKIMI', NULL, NULL, NULL, NULL, NULL, NULL, 'portofolio3.png', '2020-09-13 19:47:36', NULL),
(9, 'oR681PypF', NULL, NULL, NULL, NULL, NULL, 1, 'portofolio.jpg', '2020-09-14 10:49:21', NULL),
(10, '6Bjlba8xY', NULL, NULL, NULL, NULL, NULL, 1, 'portofolio.jpg', '2020-09-14 10:52:01', NULL),
(11, 'ONE2NIVxF', NULL, NULL, NULL, NULL, NULL, 1, 'portofolio.jpg', '2020-09-14 10:52:58', NULL),
(12, 'MBu15-6aL', NULL, NULL, NULL, NULL, NULL, 1, 'portofolio.jpg', '2020-09-14 10:53:34', NULL),
(13, 'yGF4iEl_0O', NULL, NULL, NULL, NULL, NULL, 1, 'portofolio.jpg', '2020-09-14 10:53:34', NULL),
(14, 'm2cyBCHmY', NULL, NULL, NULL, NULL, NULL, 1, 'portofolio.jpg', '2020-09-14 10:53:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `social_media`
--

CREATE TABLE `social_media` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `instagram` varchar(255) DEFAULT 'Instagram',
  `github` varchar(255) DEFAULT 'Github',
  `linkedin` varchar(255) DEFAULT 'Linkedin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `social_media`
--

INSERT INTO `social_media` (`id`, `user_id`, `instagram`, `github`, `linkedin`, `created_at`, `updated_at`) VALUES
(1, 'GJcvgik1g', '@danielwetan', 'github.com/danielwetan', 'linkedin.com/in/danielwetan', '2020-09-13 19:46:01', NULL),
(2, 'HhAMwsWpE', '@adam', 'github.com/adam', 'linkedin.com/in/adam', '2020-09-13 19:46:23', NULL),
(3, 'RAnyRh06G', '@idris', 'github.com/idris', 'linkedin.com/in/idris', '2020-09-13 19:46:30', NULL),
(4, 'PsAEveEUX', '@ayub', 'github.com/ayub', 'linkedin.com/in/ayub', '2020-09-13 19:46:41', NULL),
(5, '4wPsf2CV-', '@ahmad', 'github.com/ahmad', 'linkedin.com/in/ahmad', '2020-09-13 19:46:49', NULL),
(6, '_hwJGDRLZ', '@yuda', 'github.com/yuda', 'linkedin.com/in/yuda', '2020-09-13 19:47:19', NULL),
(7, 'y3VSeK8Kp', '@rizal', 'github.com/rizal', 'linkedin.com/in/rizal', '2020-09-13 19:47:28', NULL),
(8, 'fQ1yDKIMI', '@dimas', 'github.com/dimas', 'linkedin.com/in/dimas', '2020-09-13 19:47:36', NULL),
(9, 'oR681PypF', 'Instagram', 'Github', 'Linkedin', '2020-09-14 10:49:21', NULL),
(10, '6Bjlba8xY', 'Instagram', 'Github', 'Linkedin', '2020-09-14 10:52:01', NULL),
(11, 'ONE2NIVxF', 'Instagram', 'Github', 'Linkedin', '2020-09-14 10:52:58', NULL),
(12, 'MBu15-6aL', 'Instagram', 'Github', 'Linkedin', '2020-09-14 10:53:34', NULL),
(13, 'yGF4iEl_0O', 'Instagram', 'Github', 'Linkedin', '2020-09-14 10:53:34', NULL),
(14, 'm2cyBCHmY', 'Instagram', 'Github', 'Linkedin', '2020-09-14 10:53:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `talent`
--

CREATE TABLE `talent` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `position` varchar(255) DEFAULT 'Software Engineer',
  `location` varchar(255) DEFAULT '-',
  `job_type` int(11) DEFAULT 1 COMMENT '0 = freelance, 1 = full time',
  `description` varchar(255) DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.',
  `skills` varchar(255) DEFAULT '-',
  `image` varchar(255) NOT NULL DEFAULT 'talent.jpg',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `talent`
--

INSERT INTO `talent` (`id`, `user_id`, `email`, `password`, `name`, `phone_number`, `position`, `location`, `job_type`, `description`, `skills`, `image`, `created_at`, `updated_at`) VALUES
(1, 'GJcvgik1g', 'daniel@mail.com', '$2b$10$PaTM5GcFYveSldnQ3A1cA.9tx4JxTbasvoIJSiz8dzF9qRqumm5vq', 'Daniel', '0878878878', 'Backend Engineer', 'Jakarta, Indonesia', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:46:01', NULL),
(2, 'HhAMwsWpE', 'adam@mail.com', '$2b$10$aBqaTGEeKV/rlTyG8YuQDePNjzAuajETDXJndbYUmPln9FHaSL/Aa', 'Adam', '0878878878', 'Frontend Engineer', 'Jakarta, Indonesia', 1, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam interdum auctor nulla nec maximus. Pellentesque consequat purus ac justo hendrerit, molestie sagittis nibh interdum. Nullam ornare venenatis condimentum.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:46:23', NULL),
(3, 'RAnyRh06G', 'idris@mail.com', '$2b$10$/R/WZUIRgJW/yB3uG2CsZOa03/wzAxM6OhR4siBZPU052G8TYolae', 'Idris', '0878878878', 'Devops Engineer', 'Jakarta, Indonesia', 1, 'Pellentesque consequat purus ac justo hendrerit, molestie sagittis nibh interdum. Nullam ornare venenatis condimentum. Vestibulum sed molestie arcu.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:46:30', NULL),
(4, 'PsAEveEUX', 'ayub@mail.com', '$2b$10$jwuvu66/GRcFSDDcQotOCuUsD1U7q99PkRs3HvQsQD8k4aEwscvIW', 'Ayub', '0878878878', 'Frontend Engineer', 'Jakarta, Indonesia', 1, 'Mauris ultricies lacus felis, nec feugiat lorem accumsan sed. Quisque in lorem hendrerit, consequat urna in, varius leo. Aliquam sed urna orci. Donec efficitur dui vitae elit pretium, et tempus libero vestibulum.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:46:41', NULL),
(5, '4wPsf2CV-', 'ahmad@mail.com', '$2b$10$a6lQX1xWu1iUuAEt86dbE.HVNOauSEh.3wLo2D5HpzBk44lbJJyjW', 'Ahmad', '0878878878', 'Frontend Engineer', 'Jakarta, Indonesia', 1, 'Phasellus aliquam nunc elit. Nulla sapien lectus, porttitor eget nibh sed, tincidunt posuere purus. Nulla et iaculis dui, quis iaculis arcu.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:46:49', NULL),
(6, '_hwJGDRLZ', 'yuda@mail.com', '$2b$10$hR9FBFIB6kYfxFtPeNy3k.SWyUA2Bxy4WgA189jmNUWZF3WHFv.RS', 'Yuda', '0878878878', 'Backend Engineer', 'Jakarta, Indonesia', 1, 'Donec a volutpat metus. Nulla volutpat leo at velit viverra, ac laoreet neque viverra. Proin ac ex elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:47:19', NULL),
(7, 'y3VSeK8Kp', 'rizal@mail.com', '$2b$10$0Uws48tqxD77pm94opNBo.kINzAuE3IjMVRTxDgrkJs8vb6wv2oTi', 'Rizal', '0878878878', 'Devops Engineer', 'Jakarta, Indonesia', 1, 'Mauris nec congue libero, et aliquet augue. Sed sed iaculis arcu, et gravida dui. Aliquam consequat erat id augue luctus malesuada. Cras vitae velit eget nibh consectetur interdum.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:47:28', NULL),
(8, 'fQ1yDKIMI', 'dimas@mail.com', '$2b$10$Ha330.vnK.SG6ZyYquuMauwFu1VIy/e9PYEaiZdxWxoqqVUymLvie', 'Dimas', '0878878878', 'Backend Engineer', 'Jakarta, Indonesia', 1, 'Sed sed ante a nulla pharetra viverra id scelerisque nisi. Integer vestibulum metus sed condimentum blandit. Integer non maximus neque. Nunc venenatis, sem ac vulputate maximus, lacus erat fermentum ligula.', 'PHP, Node.js, C++', 'talent.jpg', '2020-09-13 19:47:36', NULL),
(9, 'oR681PypF', 'gramedia@mail.com', '$2b$10$mf9kFGXe14x2Qd2FQUJAveRuROJlOtgoD9M/jOFRDw/2wFfvDOnp6', 'Gramedia', '0878878878', 'Software Engineer', '-', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', '-', 'talent.jpg', '2020-09-14 10:49:21', NULL),
(10, '6Bjlba8xY', 'mobil@mail.com', '$2b$10$dd0FwG.2swsI6RkA6OzbeOOmGXlqF4cKc2phpB211u0fRi1/fB/t6', 'Mobile', '1313123', 'Software Engineer', '-', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', '-', 'talent.jpg', '2020-09-14 10:52:01', NULL),
(11, 'ONE2NIVxF', 'mobil@mail.com', '$2b$10$2qmLwUv58OF6DXTGPC4FuOVgO6ispFxh4M8JOmBRQQSFMbvAgG7xu', 'Mobile', '1313123', 'Software Engineer', '-', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', '-', 'talent.jpg', '2020-09-14 10:52:58', NULL),
(12, 'MBu15-6aL', 'mobil@mail.com', '$2b$10$R2Y8GqSuahbfG.lgKpP3SOD448.B8M5a/9KtmAedPoRJ0SU4zddgW', 'Mobile', '1313123', 'Software Engineer', '-', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', '-', 'talent.jpg', '2020-09-14 10:53:34', NULL),
(13, 'yGF4iEl_0O', 'mobil@mail.com', '$2b$10$agKlAwtH9ODwJ9zQrVSgduUWkP0K36agyEQQTtXADpGTuLVtcnsFm', 'Mobile', '1313123', 'Software Engineer', '-', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', '-', 'talent.jpg', '2020-09-14 10:53:34', NULL),
(14, 'm2cyBCHmY', 'mobil@mail.com', '$2b$10$ZBpJb1bwiKDyFoxjjNprS.dYcVQ0hXMhhPbrJnl8wXA2bX7sk0Wyy', 'Mobile', '1313123', 'Software Engineer', '-', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.', '-', 'talent.jpg', '2020-09-14 10:53:38', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hiring_partner`
--
ALTER TABLE `hiring_partner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `talent`
--
ALTER TABLE `talent`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `hiring_partner`
--
ALTER TABLE `hiring_partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `social_media`
--
ALTER TABLE `social_media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `talent`
--
ALTER TABLE `talent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
