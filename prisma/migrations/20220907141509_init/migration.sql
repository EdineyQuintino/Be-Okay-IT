/*
  Warnings:

  - You are about to drop the column `data_fim` on the `calculation` table. All the data in the column will be lost.
  - You are about to drop the column `data_inicio` on the `calculation` table. All the data in the column will be lost.
  - You are about to drop the column `data_fundacao` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `valor_hora` on the `company` table. All the data in the column will be lost.
  - Added the required column `date_start` to the `calculation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_theend` to the `calculation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_foundation` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_hour` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calculation` DROP COLUMN `data_fim`,
    DROP COLUMN `data_inicio`,
    ADD COLUMN `date_start` DATE NOT NULL,
    ADD COLUMN `date_theend` DATE NOT NULL;

-- AlterTable
ALTER TABLE `company` DROP COLUMN `data_fundacao`,
    DROP COLUMN `valor_hora`,
    ADD COLUMN `date_foundation` DATE NOT NULL,
    ADD COLUMN `value_hour` DECIMAL(9, 2) NOT NULL;
