CREATE TABLE IF NOT EXISTS `gdc_db`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

CREATE TABLE IF NOT EXISTS `gdc_db`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `contenu` LONGTEXT NOT NULL,
  `auteur` VARCHAR(100) NOT NULL,
  `dateart` timestamp not null default current_timestamp,
  `dateedit` timestamp not null default current_timestamp on update current_timestamp,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_articles_user1_idx` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB;