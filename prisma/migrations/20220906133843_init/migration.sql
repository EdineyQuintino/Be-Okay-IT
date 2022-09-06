/*
  Warnings:

  - You are about to drop the column `cnpj` on the `calculation` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `calculation` table. All the data in the column will be lost.
  - Added the required column `cnpj_id` to the `calculation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `calculation` DROP FOREIGN KEY `calculation_company_id_fkey`;

-- DropIndex
DROP INDEX `calculation_cnpj_key` ON `calculation`;

-- AlterTable
ALTER TABLE `calculation` DROP COLUMN `cnpj`,
    DROP COLUMN `company_id`,
    ADD COLUMN `cnpj_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `calculation` ADD CONSTRAINT `calculation_cnpj_id_fkey` FOREIGN KEY (`cnpj_id`) REFERENCES `company`(`cnpj`) ON DELETE RESTRICT ON UPDATE CASCADE;
