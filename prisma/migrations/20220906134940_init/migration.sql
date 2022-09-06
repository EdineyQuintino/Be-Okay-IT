/*
  Warnings:

  - You are about to drop the column `cnpj_id` on the `calculation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `calculation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `calculation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `calculation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `calculation` DROP FOREIGN KEY `calculation_cnpj_id_fkey`;

-- AlterTable
ALTER TABLE `calculation` DROP COLUMN `cnpj_id`,
    ADD COLUMN `cnpj` VARCHAR(14) NOT NULL,
    ADD COLUMN `company_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `calculation_cnpj_key` ON `calculation`(`cnpj`);

-- AddForeignKey
ALTER TABLE `calculation` ADD CONSTRAINT `calculation_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
