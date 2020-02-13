# Migration `20200213190416-update-not_available`

This migration has been generated at 2/13/2020, 7:04:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `ilumet`.`User` DROP COLUMN `education`,
ADD COLUMN `education` varchar(191) NOT NULL DEFAULT 'S1' ,
DROP COLUMN `industry`,
ADD COLUMN `industry` varchar(191) NOT NULL DEFAULT 'NOT_AVAILABLE' ,
DROP COLUMN `position`,
ADD COLUMN `position` varchar(191) NOT NULL DEFAULT 'NOT_AVAILABLE' ,
DROP COLUMN `role`,
ADD COLUMN `role` varchar(191) NOT NULL DEFAULT 'MEMBER' ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200213184826-initial..20200213190416-update-not_available
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "mysql"
-  url = "***"
+  url      = "mysql://root:princess32@localhost:3306/ilumet"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,19 +13,19 @@
   password      String
   class_year  Int
   phone String?
   company Company[]
-  gender Gender
-  industry Industry?
+  gender Gender @default(MALE)
+  industry Industry @default(NOT_AVAILABLE)
   home_address String?
-  education Education?
+  education Education @default(S1)
   education_info String?
-  role Role?
+  role Role @default(MEMBER)
   picture String?
   approved Boolean @default(false)
   post Post[]
   featured Featured[]
-  position Position?
+  position Position @default(NOT_AVAILABLE)
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
 }
@@ -37,8 +37,9 @@
   ALUMNI
   ALMAMATER
   HUMAS
   PENGMAS
+  NOT_AVAILABLE
 }
 model Post {
   id String  @default(cuid()) @id
@@ -124,8 +125,9 @@
   WAREHOUSE
   FASHIONANDGARMENT
   BEAUTY
   FOODANDBEVERAGE
+  NOT_AVAILABLE
 }
 enum Role {
   ADMIN
@@ -139,9 +141,9 @@
 }
 enum Gender {
   MALE
-  FEmALE
+  FEMALE
 }
 enum Industry {
   MANUFACTURE
@@ -157,5 +159,6 @@
   TRANSPORTATIONANDLOGISTIC
   CIVILSERVANT
   AGRICULTUREANDFISHERY
   ARTSANDENTERTAINMENT
+  NOT_AVAILABLE
 }
```


