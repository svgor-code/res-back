-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('NEW', 'COOKING', 'IN_DELIVERY', 'DELIVERED', 'COMPLETED') NOT NULL,
    `persons` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedStatusAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
