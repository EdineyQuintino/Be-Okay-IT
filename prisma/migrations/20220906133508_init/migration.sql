-- CreateTable
CREATE TABLE `calculation` (
    `id` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `data_inicio` DATE NOT NULL,
    `data_fim` DATE NOT NULL,
    `company_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `calculation_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `calculation` ADD CONSTRAINT `calculation_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
