# Migration `20200213184826-initial`

This migration has been generated at 2/13/2020, 6:48:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `ilumet`.`User` (
    `approved` boolean NOT NULL DEFAULT false ,
    `class_year` int NOT NULL DEFAULT 0 ,
    `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `education` varchar(191)   ,
    `education_info` varchar(191)   ,
    `email` varchar(191) NOT NULL DEFAULT '' ,
    `gender` varchar(191) NOT NULL DEFAULT 'MALE' ,
    `home_address` varchar(191)   ,
    `id` varchar(191) NOT NULL  ,
    `industry` varchar(191)   ,
    `password` varchar(191) NOT NULL DEFAULT '' ,
    `phone` varchar(191)   ,
    `picture` varchar(191)   ,
    `position` varchar(191)   ,
    `role` varchar(191)   ,
    `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `ilumet`.`Post` (
    `category` varchar(191) NOT NULL DEFAULT 'VACANCY' ,
    `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `id` varchar(191) NOT NULL  ,
    `title` varchar(191) NOT NULL DEFAULT '' ,
    `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `url` varchar(191) NOT NULL DEFAULT '' ,
    `user` varchar(191) NOT NULL ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `ilumet`.`Picture` (
    `featured` varchar(191)  ,
    `id` varchar(191) NOT NULL  ,
    `picture` varchar(191) NOT NULL DEFAULT '' ,
    `post` varchar(191) NOT NULL ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `ilumet`.`Featured` (
    `company` varchar(191) NOT NULL DEFAULT '' ,
    `content` varchar(191) NOT NULL DEFAULT '' ,
    `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `id` varchar(191) NOT NULL  ,
    `position` varchar(191) NOT NULL DEFAULT '' ,
    `profile` varchar(191) NOT NULL DEFAULT '' ,
    `title` varchar(191) NOT NULL DEFAULT '' ,
    `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `user` varchar(191) NOT NULL ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `ilumet`.`Event` (
    `address` varchar(191) NOT NULL DEFAULT '' ,
    `content` varchar(191) NOT NULL DEFAULT '' ,
    `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `fee` int   ,
    `fee_content` varchar(191)   ,
    `id` varchar(191) NOT NULL  ,
    `speaker` varchar(191) NOT NULL DEFAULT '' ,
    `time` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `title` varchar(191) NOT NULL DEFAULT '' ,
    `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `user` varchar(191) NOT NULL ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `ilumet`.`Company` (
    `about` varchar(191) NOT NULL DEFAULT '' ,
    `company_address` varchar(191) NOT NULL DEFAULT '' ,
    `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `email` varchar(191) NOT NULL DEFAULT '' ,
    `id` varchar(191) NOT NULL  ,
    `industry` varchar(191) NOT NULL DEFAULT 'CIVILCONTRACTOR' ,
    `name` varchar(191) NOT NULL DEFAULT '' ,
    `phone` varchar(191) NOT NULL DEFAULT '' ,
    `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    `url1` varchar(191) NOT NULL DEFAULT '' ,
    `url2` varchar(191) NOT NULL DEFAULT '' ,
    PRIMARY KEY (`id`)
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `ilumet`.`_CompanyToUser` (
    `A` varchar(191) NOT NULL ,
    `B` varchar(191) NOT NULL 
) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `ilumet`.`User`(`email`)

CREATE UNIQUE INDEX `_CompanyToUser_AB_unique` ON `ilumet`.`_CompanyToUser`(`A`,`B`)

ALTER TABLE `ilumet`.`Post` ADD FOREIGN KEY (`user`) REFERENCES `ilumet`.`User`(`id`) ON DELETE RESTRICT

ALTER TABLE `ilumet`.`Picture` ADD FOREIGN KEY (`post`) REFERENCES `ilumet`.`Post`(`id`) ON DELETE RESTRICT

ALTER TABLE `ilumet`.`Picture` ADD FOREIGN KEY (`featured`) REFERENCES `ilumet`.`Featured`(`id`) ON DELETE SET NULL

ALTER TABLE `ilumet`.`Featured` ADD FOREIGN KEY (`user`) REFERENCES `ilumet`.`User`(`id`) ON DELETE RESTRICT

ALTER TABLE `ilumet`.`Event` ADD FOREIGN KEY (`user`) REFERENCES `ilumet`.`User`(`id`) ON DELETE RESTRICT

ALTER TABLE `ilumet`.`_CompanyToUser` ADD FOREIGN KEY (`A`) REFERENCES `ilumet`.`Company`(`id`) ON DELETE CASCADE

ALTER TABLE `ilumet`.`_CompanyToUser` ADD FOREIGN KEY (`B`) REFERENCES `ilumet`.`User`(`id`) ON DELETE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200213184826-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,161 @@
+datasource db {
+  provider = "mysql"
+  url      = "mysql://root:princess32@localhost:3306/ilumet"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id            String  @default(cuid()) @id
+  email      String  @unique
+  password      String
+  class_year  Int
+  phone String?
+  company Company[]
+  gender Gender
+  industry Industry?
+  home_address String?
+  education Education?
+  education_info String?
+  role Role?
+  picture String?
+  approved Boolean @default(false)
+  post Post[]
+  featured Featured[]
+  position Position?
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+}
+
+enum Position {
+  KETUA
+  SEKRETARIS
+  BENDAHARA
+  KEWIRAUSAHAAN
+  ALUMNI
+  ALMAMATER
+  HUMAS
+  PENGMAS
+}
+
+model Post {
+  id String  @default(cuid()) @id
+  user User
+  title String
+  category Category
+  url String
+  picture Picture[]
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+}
+
+model Picture {
+  id String @default(cuid()) @id
+  post Post
+  picture String
+}
+
+model Featured {
+  id String  @default(cuid()) @id
+  user User
+  title String
+  content String
+  profile String
+  position String
+  company String
+  picture Picture[]
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+}
+
+model Event {
+  id String  @default(cuid()) @id
+  user User
+  title String
+  speaker String
+  content String
+  address String
+  time DateTime
+  fee Int?
+  fee_content String?
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+}
+
+enum Category {
+  VACANCY
+  SCHOLARSHIP
+  NEWS
+}
+
+model Company {
+  id String  @default(cuid()) @id
+  user User[]
+  name String
+  company_address String
+  industry CompanyIndustry
+  about String
+  phone String
+  email String
+  url1  String
+  url2  String
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+}
+
+enum CompanyIndustry {
+  CIVILCONTRACTOR
+  FABRICATIONOILANDGAS
+  FABRICATIONAUTOMOTIVE
+  EPCCONTRACTOR
+  HEAVYEQUIPMENT
+  TRANSPORTATIONANDLOGISTIC
+  TRADING
+  FINANCEANDACCOUNTING
+  OILANDGASSERVICE
+  ADVERTISING
+  DESIGNANDFILM
+  INFORMATIONTECHNOLOGY
+  AGRICULTUREANDFISHERY
+  EVENTORGANIZERORWEDDINGORGANIZER
+  MERCHANDISING
+  WAREHOUSE
+  FASHIONANDGARMENT
+  BEAUTY
+  FOODANDBEVERAGE
+}
+
+enum Role {
+  ADMIN
+  MEMBER
+}
+
+enum Education {
+  S1
+  S2
+  S3
+}
+
+enum Gender {
+  MALE
+  FEmALE
+}
+
+enum Industry {
+  MANUFACTURE
+  ENERGY
+  EPCANDINFRASTRUCTURE
+  MINING
+  EDUCATIONANDRESEARCH
+  BANKINGANDFINANCE
+  DIGITALINDUSTRY
+  AVIATION
+  EVENT
+  ENTREPRENEUR
+  TRANSPORTATIONANDLOGISTIC
+  CIVILSERVANT
+  AGRICULTUREANDFISHERY
+  ARTSANDENTERTAINMENT
+}
```


