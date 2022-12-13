-- CreateTable
CREATE TABLE `Dish` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `foodType` ENUM('VEGETARIAN', 'NON_VEGETARIAN') NOT NULL,
    `price` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,
    `madeFor` ENUM('BREAKFAST', 'LUNCH', 'DINNER') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
