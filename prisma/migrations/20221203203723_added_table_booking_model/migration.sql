/*
  Warnings:

  - A unique constraint covering the columns `[id,size]` on the table `Table` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `TableBooking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `from` VARCHAR(191) NOT NULL,
    `to` VARCHAR(191) NOT NULL,
    `tableId` INTEGER NOT NULL,
    `persons` INTEGER NOT NULL,
    `cause` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TableBooking_tableId_persons_key`(`tableId`, `persons`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Table_id_size_key` ON `Table`(`id`, `size`);

-- AddForeignKey
ALTER TABLE `TableBooking` ADD CONSTRAINT `TableBooking_tableId_persons_fkey` FOREIGN KEY (`tableId`, `persons`) REFERENCES `Table`(`id`, `size`) ON DELETE RESTRICT ON UPDATE CASCADE;
