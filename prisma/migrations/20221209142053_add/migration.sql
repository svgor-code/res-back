/*
  Warnings:

  - Added the required column `name` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Dish` ADD COLUMN `name` VARCHAR(191) NOT NULL;
