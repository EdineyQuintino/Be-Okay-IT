-- CreateTable
CREATE TABLE `company` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `data_fundacao` DATE NOT NULL,
    `valor_hora` DECIMAL(9, 2) NOT NULL,

    UNIQUE INDEX `company_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
