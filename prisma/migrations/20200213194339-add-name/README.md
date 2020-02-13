# Migration `20200213194339-add-name`

This migration has been generated at 2/13/2020, 7:43:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `ilumet`.`User` ADD COLUMN `name` varchar(191) NOT NULL DEFAULT '' ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200213190416-update-not_available..20200213194339-add-name
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
@@ -9,8 +9,9 @@
 model User {
   id            String  @default(cuid()) @id
   email      String  @unique
+  name String
   password      String
   class_year  Int
   phone String?
   company Company[]
```


