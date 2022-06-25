-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 25-Jun-2022 às 16:25
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbnext`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacaofilmes`
--

DROP TABLE IF EXISTS `avaliacaofilmes`;
CREATE TABLE IF NOT EXISTS `avaliacaofilmes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tittle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topcast` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pov` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `avaliacaofilmes`
--

INSERT INTO `avaliacaofilmes` (`id`, `tittle`, `genre`, `topcast`, `pov`) VALUES
(0, 'Pirates of the Caribbean: The Curse of the Black Pearl', 'Action, Adventure, Fantasy', 'Jhonny Depp, Orlando Bloom, Keira Knightley,Kevin McNally', 'That\'s got to be the best pirate I\'ve ever seen.'),
(1, 'Pirates of the Caribbean: Dead Man\'s Chest', 'Action, Adventure, Fantasy', 'Bill Nighty, Lee Arenberg, Mackenzie Crook, Naomie Harris', 'This was the best Pirates to me because it had some fascinating new characters.'),
(2, 'Bumblebee', 'Action, Adventure, Sci-Fi', 'Hailee Steinfeld, John Cena, Jorge Lendeborg Jr.', 'Bumblebee is such a lovable character in this one and his dynamic duo with Charlie is just perfect.'),
(3, 'Lion King', 'Animaiton, Adventure, Drama', 'Matthew Brodick, Jeremy Irons, James Earl Jones, Whoopi Goldberg', 'By far, the greatest Disney movie ever made...');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
