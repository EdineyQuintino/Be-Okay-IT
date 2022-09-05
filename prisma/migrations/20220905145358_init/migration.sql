/*
  Warnings:

  - You are about to alter the column `data_fundacao` on the `company` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Date`.

*/
-- AlterTable
ALTER TABLE `company` MODIFY `data_fundacao` DATE NOT NULL;
