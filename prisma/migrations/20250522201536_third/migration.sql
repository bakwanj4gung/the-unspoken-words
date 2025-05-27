/*
  Warnings:

  - Added the required column `temporaryUserId` to the `Letter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `letter` ADD COLUMN `temporaryUserId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `TemporaryUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TemporaryUser_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Letter` ADD CONSTRAINT `Letter_temporaryUserId_fkey` FOREIGN KEY (`temporaryUserId`) REFERENCES `TemporaryUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
