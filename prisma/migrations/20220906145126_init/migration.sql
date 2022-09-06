/*
  Warnings:

  - You are about to alter the column `cnpj_id` on the `calculation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(14)`.
  - A unique constraint covering the columns `[cnpj_id]` on the table `calculation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `calculation` DROP FOREIGN KEY `calculation_cnpj_id_fkey`;

-- AlterTable
ALTER TABLE `calculation` MODIFY `cnpj_id` VARCHAR(14) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `calculation_cnpj_id_key` ON `calculation`(`cnpj_id`);

-- AddForeignKey
ALTER TABLE `calculation` ADD CONSTRAINT `calculation_cnpj_id_fkey` FOREIGN KEY (`cnpj_id`) REFERENCES `company`(`cnpj`) ON DELETE RESTRICT ON UPDATE CASCADE;
