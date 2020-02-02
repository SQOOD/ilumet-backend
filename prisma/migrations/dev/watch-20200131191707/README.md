# Migration `watch-20200131191707`

This migration has been generated at 1/31/2020, 7:17:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `sikembar_test`.`User` (
  `address` varchar(191)   ,
  `commodity` varchar(191) NOT NULL DEFAULT 'NOT_AVAILABLE' ,
  `company_name` varchar(191)   ,
  `company_permission` varchar(191) NOT NULL DEFAULT 'MINERBA' ,
  `company_type` varchar(191)   ,
  `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  `email` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `npwp` varchar(191)   ,
  `password` varchar(191) NOT NULL DEFAULT '' ,
  `phone` varchar(191)   ,
  `picture` varchar(191)   ,
  `role` varchar(191) NOT NULL DEFAULT 'MINER' ,
  `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  `username` varchar(191) NOT NULL DEFAULT '' ,
  `wiup` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`ReportFinance` (
  `approved` boolean NOT NULL DEFAULT false ,
  `currency` varchar(191) NOT NULL DEFAULT 'USD' ,
  `file_path` varchar(191) NOT NULL DEFAULT '' ,
  `flag_for_deletion` boolean NOT NULL DEFAULT false ,
  `id` varchar(191) NOT NULL  ,
  `rate` int NOT NULL DEFAULT 0 ,
  `report_type` varchar(191) NOT NULL DEFAULT 'REALISASI' ,
  `term` varchar(191) NOT NULL DEFAULT 'TAHUNAN' ,
  `year` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`ReportGood` (
  `approved` boolean NOT NULL DEFAULT false ,
  `currency` varchar(191) NOT NULL DEFAULT 'IDR' ,
  `file_path` varchar(191) NOT NULL DEFAULT '' ,
  `flag_for_deletion` boolean NOT NULL DEFAULT false ,
  `id` varchar(191) NOT NULL  ,
  `rate` int NOT NULL DEFAULT 0 ,
  `report_type` varchar(191) NOT NULL DEFAULT 'REALISASI' ,
  `term` varchar(191) NOT NULL DEFAULT 'TAHUNAN' ,
  `year` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Budget` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Supply` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`CapitalBudget` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Cashflow` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Assumption` (
  `currency` varchar(191)   ,
  `cut_off` int   ,
  `cut_off_unit` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `price` varchar(191)   ,
  `rate` int   ,
  `volume_unit` varchar(191)   ,
  `volume_value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Fuel` (
  `currency` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `price` varchar(191)   ,
  `rate` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`CostOfGood` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Investment` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`OtherFinance` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`LostProfit` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Royalty` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`OperationCost` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`StateRevenue` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Balance` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `sub_category` varchar(191)   ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`SourceOfFunding` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Procurement` (
  `category` varchar(191)   ,
  `country_of_origin` varchar(191)   ,
  `current_district` varchar(191)   ,
  `detail` varchar(191)   ,
  `district_of_origin` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `project_area` varchar(191)   ,
  `province_of_origin` varchar(191)   ,
  `spec` varchar(191)   ,
  `tkdn` int   ,
  `tkdn_type` varchar(191)   ,
  `unit_price` varchar(191)   ,
  `unit_price_type` varchar(191)   ,
  `volume_unit` varchar(191)   ,
  `volume_value` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Good` (
  `category` varchar(191)   ,
  `description` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `name` varchar(191) NOT NULL DEFAULT '' ,
  `picture` varchar(191)   ,
  `tkdn` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `sikembar_test`.`ReportFinance` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`ReportGood` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Budget` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Supply` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`CapitalBudget` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Cashflow` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Assumption` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Fuel` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`CostOfGood` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Investment` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`OtherFinance` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`LostProfit` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Royalty` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`OperationCost` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`StateRevenue` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Balance` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`SourceOfFunding` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Procurement` ADD COLUMN `report_good` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_good`) REFERENCES `sikembar_test`.`ReportGood`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Good` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

CREATE UNIQUE INDEX `User.username` ON `sikembar_test`.`User`(`username`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..watch-20200131191707
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,1217 @@
+  datasource db {
+    provider = "mysql"
+    url      = "mysql://root:princess32@localhost:3306/sikembar_test"
+  }
+
+  generator photon {
+    provider = "photonjs"
+  }
+
+  model User {
+    id            String  @default(cuid()) @id
+    username      String  @unique
+    password      String
+    company_permission    CompanyPermission @default(MINERBA)
+    picture       String? @default("")
+    role          Role 
+    commodity     Commodity @default(NOT_AVAILABLE)
+    createdAt     DateTime @default(now())
+    updatedAt     DateTime @updatedAt
+    wiup          String? @default("")
+    npwp          String? @default("") 
+    email         String? @default("")
+    phone         String? @default("")
+    company_type  CompanyType? @default(NOT_AVAILABLE)
+    company_name  String? @default("")
+    address       String? @default("")
+    report_finance ReportFinance[]
+    report_good ReportGood[]
+  }
+
+  enum CompanyPermission {
+    IUP
+    IUPOPK
+    MINERBA
+  }
+  enum CompanyType {
+    PT
+    CV
+    NOT_AVAILABLE
+  }
+
+  enum Role {
+    MINER
+    VENDOR
+    EVALUATOR
+    SUPERINTENDENT
+    ADMIN
+  }
+
+  enum Commodity {
+  BATUBARA
+  BITUMEN_PADAT
+  BATUAN_ASPAL
+  GAMBUT
+  LITIUM
+  BERILIUM
+  MAGNESIUM
+  KALIUM
+  KALSIUM
+  EMAS
+  TEMBAGA
+  PERAK
+  TIMBAL
+  SENG_TIMAH
+  NIKEL
+  MANGAN
+  PLATINA
+  BISMUTH
+  MOLIBDENUM
+  BAUKSIT
+  AIR_RAKSA
+  WOLFRAM
+  TITANIUM
+  BARIT
+  VANADIUM
+  KROMIT
+  ANTIMONI
+  KOBALT
+  TANTALUM
+  CADMIUM
+  GALIUM
+  INDIUM
+  YITRIUM
+  MAGNETIT
+  BESI
+  GALENA
+  ALUMINA
+  NIOBIUM
+  ZIRKONIUM
+  ILMENIT
+  KHROM
+  ERBIUM
+  YTTERBIUM
+  DYSPROSIUM
+  THORIUM
+  CESIUM
+  LANTHANUM
+  NEODYMIUM
+  HAFNIUM
+  SCANDIUM
+  ALUMUNIUM
+  PALLADIUM
+  RHODIUM
+  OSMIUM
+  RUTHENIUM
+  IRIDIUM
+  SELENIUM
+  TELLURIDE
+  STRONIUM
+  GERMANIUM
+  ZENOTIN
+  INTAN
+  KORUNDUM
+  GRAFIT
+  ARSEN
+  PASIR_KUARSA
+  FLUORSPAR
+  KRIOLIT
+  YODIUM
+  BROM
+  KLOR
+  BELERANG
+  FOSFAT
+  HALIT
+  ASBES
+  TALK
+  MIKA
+  MAGNESIT
+  YAROSIT
+  OKER
+  FLUORIT
+  BALL_CLAY
+  FIRE_CLAY
+  ZEOLIT
+  KAOLIN
+  FELDSPAR
+  BENTORIIT
+  GIPSUM
+  DOLOMIT
+  KALSIT
+  RIJANG
+  PIROFILIT
+  KUARSIT
+  ZIRKON
+  WOLASTONIT
+  TAWAS
+  BATU_KUARSA
+  PERLIT
+  GARAM_BATU
+  CLAY
+  BATU_GAMPING_UNTUK_SEMEN
+  PUMICE
+  TRAS
+  TOSEKI
+  OBSIDIAN
+  MARMER
+  TANAH_DIATONIC
+  TANAH_SERAP_FULLERS_EARTH
+  SLATE
+  GRANIT
+  GRANODIORIT
+  ANDESIT
+  GABRO
+  PERIDOTIT
+  BASALT
+  TRAKHIT
+  LOUSIT
+  TANAH_LIAT
+  TANAH_URUG
+  BATU_APUNG
+  OPAL
+  KALSEDON
+  CHERT
+  KRISTAL_KUARSA
+  JASPER
+  KRISOPRASE
+  KAYU_TERKERSIKAN
+  GAMET
+  GIOK
+  AGAT
+  DIORIT
+  TOPAS
+  BATU_GUNUNG_QUARRY_BESAR
+  KERIKIL_GALIAN_DARI_BUKIT
+  KERIKIL_SUNGAI
+  BATU_KALI
+  KERIKIL_SUNGAI_AYAK_TANPA_PASIR
+  PASIR_URUG
+  PASIR_PASANG
+  KERIKIL_BERPASIR_ALAMI_SIRTU
+  URUKAN_TANAH_SETEMPAT
+  TANAH_MERAH_LATERIT
+  BATU_GAMPING
+  ONIK
+  PASIR_LAUT
+  NOT_AVAILABLE
+  }
+
+  enum Term {
+    TAHUNAN
+    TRIWULANSATU
+    TRIWULANDUA
+    TRIWULANTIGA
+    TRIWULANEMPAT
+    JANUARI
+    FEBRUARI
+    MARET
+    APRIL
+    MEI
+    JUNI
+    JULI
+    AGUSTUS
+    SEPTEMBER
+    OKTOBER
+    NOVEMBER
+    DESEMBER
+  }
+
+  enum Currency {
+    IDR
+    USD
+    MYR
+    YEN
+    CNY
+    SGD
+    EUR
+  }
+
+  enum ReportType {
+    REALISASI
+    RENCANA
+  }
+
+  enum VolumeUnit {
+    OZ
+    TONNE
+    KG
+    G
+  }
+
+  enum CutOffUnit {
+    PERSENTASE
+    GPERTONNE
+  }
+
+
+  model ReportFinance {
+    id    String  @default(cuid()) @id
+    user  User
+    term  Term @default(TAHUNAN)
+    year  Int
+    report_type ReportType
+    currency Currency @default(USD)
+    rate Int
+    approved Boolean @default(false)
+    flag_for_deletion Boolean @default(false)
+    file_path String
+    budgets Budget[]
+    royalty Royalty[]
+    capital_budget CapitalBudget[]
+    cashflow Cashflow[]
+    assumption Assumption[]
+    fuel Fuel[]
+    cost_of_good CostOfGood[]
+    investment Investment[]
+    other_finance OtherFinance[]
+    lost_profit LostProfit[]
+    operation_cost OperationCost[]
+    state_revenue StateRevenue[]
+    balance Balance[]
+    source_of_funding SourceOfFunding[]
+  }
+
+  model ReportGood {
+    id    String  @default(cuid()) @id
+    user  User
+    term  Term @default(TAHUNAN)
+    year  Int
+    report_type ReportType
+    currency Currency
+    rate Int
+    approved Boolean @default(false)
+    flag_for_deletion Boolean @default(false)
+    file_path String
+    procurement Procurement[]
+  }
+
+  model Budget {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model Supply {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model CapitalBudget {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model Cashflow {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+    category String?
+  }
+
+  model Assumption {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    currency Currency? @default(USD)
+    rate Int?
+    detail String?
+    volume_unit VolumeUnit?
+    volume_value String?
+    price String?
+    cut_off Int?
+    cut_off_unit CutOffUnit?
+  }
+
+  model Fuel {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    currency Currency?
+    rate Int?
+    price String?
+  }
+
+  model CostOfGood {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model Investment {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model OtherFinance {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model LostProfit {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    category String?
+    value String?
+  }
+
+  model Royalty {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model OperationCost {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model StateRevenue {
+    id  String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+    category String?
+  }
+
+  model Balance {
+    id  String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+    sub_category String?
+    category String?
+  }
+
+  model SourceOfFunding {
+    id  String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String?
+    value String?
+  }
+
+  model Procurement {
+    id    String  @default(cuid()) @id
+    report_good ReportGood
+    detail String?
+    spec String?
+    volume_unit VolumeUnit?
+    volume_value String?
+    unit_price_type UnitPricetype?
+    unit_price String?
+    category ProcurementCategory?
+    project_area String?
+    country_of_origin Country?
+    province_of_origin Province?
+    district_of_origin District?
+    current_district District?
+    tkdn Int?
+    tkdn_type TKDNType?
+  }
+
+  model Good {
+    id    String  @default(cuid()) @id
+    user User
+    name String
+    tkdn Int
+    description String
+    category ProcurementCategory?
+    picture String?
+  }
+
+  enum Country {
+    AFGHANISTAN
+    ALBANIA
+    ALGERIA
+    ANDORRA
+    ANGOLA
+    ANTIGUA_DEPS
+    ARGENTINA
+    ARMENIA
+    AUSTRALIA
+    AUSTRIA
+    AZERBAIJAN
+    BAHAMAS
+    BAHRAIN
+    BANGLADESH
+    BARBADOS
+    BELARUS
+    BELGIUM
+    BELIZE
+    BENIN
+    BHUTAN
+    BOLIVIA
+    BOSNIA_HERZEGOVINA
+    BOTSWANA
+    BRAZIL
+    BRUNEI
+    BULGARIA
+    BURKINA
+    BURUNDI
+    CAMBODIA
+    CAMEROON
+    CANADA
+    CAPE_VERDE
+    CENTRAL_AFRICAN_REP
+    CHAD
+    CHILE
+    CHINA
+    COLOMBIA
+    COMOROS
+    CONGO
+    CONGO_DEMOCRATIC_REP
+    COSTA_RICA
+    CROATIA
+    CUBA
+    CYPRUS
+    CZECH_REPUBLIC
+    DENMARK
+    DJIBOUTI
+    DOMINICA
+    DOMINICAN_REPUBLIC
+    EAST_TIMOR
+    ECUADOR
+    EGYPT
+    EL_SALVADOR
+    EQUATORIAL_GUINEA
+    ERITREA
+    ESTONIA
+    ETHIOPIA
+    FIJI
+    FINLAND
+    FRANCE
+    GABON
+    GAMBIA
+    GEORGIA
+    GERMANY
+    GHANA
+    GREECE
+    GRENADA
+    GUATEMALA
+    GUINEA
+    GUINEA_BISSAU
+    GUYANA
+    HAITI
+    HONDURAS
+    HUNGARY
+    ICELAND
+    INDIA
+    INDONESIA
+    IRAN
+    IRAQ
+    IRELAND_REPUBLIC
+    ISRAEL
+    ITALY
+    IVORY_COAST
+    JAMAICA
+    JAPAN
+    JORDAN
+    KAZAKHSTAN
+    KENYA
+    KIRIBATI
+    KOREA_NORTH
+    KOREA_SOUTH
+    KOSOVO
+    KUWAIT
+    KYRGYZSTAN
+    LAOS
+    LATVIA
+    LEBANON
+    LESOTHO
+    LIBERIA
+    LIBYA
+    LIECHTENSTEIN
+    LITHUANIA
+    LUXEMBOURG
+    MACEDONIA
+    MADAGASCAR
+    MALAWI
+    MALAYSIA
+    MALDIVES
+    MALI
+    MALTA
+    MARSHALL_ISLANDS
+    MAURITANIA
+    MAURITIUS
+    MEXICO
+    MICRONESIA
+    MOLDOVA
+    MONACO
+    MONGOLIA
+    MONTENEGRO
+    MOROCCO
+    MOZAMBIQUE
+    MYANMAR
+    NAMIBIA
+    NAURU
+    NEPAL
+    NETHERLANDS
+    NEW_ZEALAND
+    NICARAGUA
+    NIGER
+    NIGERIA
+    NORWAY
+    OMAN
+    PAKISTAN
+    PALAU
+    PANAMA
+    PAPUA_NEW_GUINEA
+    PARAGUAY
+    PERU
+    PHILIPPINES
+    POLAND
+    PORTUGAL
+    QATAR
+    ROMANIA
+    RUSSIAN_FEDERATION
+    RWANDA
+    ST_KITTS_NEVIS
+    ST_LUCIA
+    SAINT_VINCENT_THE_GRENADINES
+    SAMOA
+    SAN_MARINO
+    SAO_TOME_PRINCIPE
+    SAUDI_ARABIA
+    SENEGAL
+    SERBIA
+    SEYCHELLES
+    SIERRA_LEONE
+    SINGAPORE
+    SLOVAKIA
+    SLOVENIA
+    SOLOMON_ISLANDS
+    SOMALIA
+    SOUTH_AFRICA
+    SOUTH_SUDAN
+    SPAIN
+    SRI_LANKA
+    SUDAN
+    SURINAME
+    SWAZILAND
+    SWEDEN
+    SWITZERLAND
+    SYRIA
+    TAIWAN
+    TAJIKISTAN
+    TANZANIA
+    THAILAND
+    TOGO
+    TONGA
+    TRINIDAD_TOBAGO
+    TUNISIA
+    TURKEY
+    TURKMENISTAN
+    TUVALU
+    UGANDA
+    UKRAINE
+    UNITED_ARAB_EMIRATES
+    UNITED_KINGDOM
+    UNITED_STATES
+    URUGUAY
+    UZBEKISTAN
+    VANUATU
+    VATICAN_CITY
+    VENEZUELA
+    VIETNAM
+    YEMEN
+    ZAMBIA
+    ZIMBABWE
+  }
+
+  enum Province {
+    SUMATERA_UTARA
+    RIAU
+    JAMBI
+    SUMATERA_SELATAN
+    BENGKULU
+    LAMPUNG
+    KEPULAUAN_BANGKA_BELITUNG
+    KEPULAUAN_RIAU
+    DKI_JAKARTA
+    JAWA_BARAT
+    JAWA_TENGAH
+    DI_YOGYAKARTA
+    JAWA_TIMUR
+    BANTEN
+    BALI
+    NUSA_TENGGARA_BARAT
+    NUSA_TENGGARA_TIMUR
+    KALIMANTAN_BARAT
+    KALIMANTAN_TENGAH
+    KALIMANTAN_SELATAN
+    KALIMANTAN_TIMUR
+    KALIMANTAN_UTARA
+    SULAWESI_UTARA
+    SULAWESI_TENGAH
+    SULAWESI_SELATAN
+    SULAWESI_TENGGARA
+    GORONTALO
+    SULAWESI_BARAT
+    MALUKU
+    MALUKU_UTARA
+    PAPUA_BARAT
+    PAPUA
+  }
+
+  enum District {
+    KABUPATEN_SIMEULUE
+    KABUPATEN_ACEH_SINGKIL
+    KABUPATEN_ACEH_SELATAN
+    KABUPATEN_ACEH_TENGGARA
+    KABUPATEN_ACEH_TIMUR
+    KABUPATEN_ACEH_TENGAH
+    KABUPATEN_ACEH_BARAT
+    KABUPATEN_ACEH_BESAR
+    KABUPATEN_PIDIE
+    KABUPATEN_BIREUEN
+    KABUPATEN_ACEH_UTARA
+    KABUPATEN_ACEH_BARAT_DAYA
+    KABUPATEN_GAYO_LUES
+    KABUPATEN_ACEH_TAMIANG
+    KABUPATEN_NAGAN_RAYA
+    KABUPATEN_ACEH_JAYA
+    KABUPATEN_BENER_MERIAH
+    KABUPATEN_PIDIE_JAYA
+    KOTA_BANDA_ACEH
+    KOTA_SABANG
+    KOTA_LANGSA
+    KOTA_LHOKSEUMAWE
+    KOTA_SUBULUSSALAM
+    KABUPATEN_NIAS
+    KABUPATEN_MANDAILING_NATAL
+    KABUPATEN_TAPANULI_SELATAN
+    KABUPATEN_TAPANULI_TENGAH
+    KABUPATEN_TAPANULI_UTARA
+    KABUPATEN_TOBA_SAMOSIR
+    KABUPATEN_LABUHAN_BATU
+    KABUPATEN_ASAHAN
+    KABUPATEN_SIMALUNGUN
+    KABUPATEN_DAIRI
+    KABUPATEN_KARO
+    KABUPATEN_DELI_SERDANG
+    KABUPATEN_LANGKAT
+    KABUPATEN_NIAS_SELATAN
+    KABUPATEN_HUMBANG_HASUNDUTAN
+    KABUPATEN_PAKPAK_BHARAT
+    KABUPATEN_SAMOSIR
+    KABUPATEN_SERDANG_BEDAGAI
+    KABUPATEN_BATU_BARA
+    KABUPATEN_PADANG_LAWAS_UTARA
+    KABUPATEN_PADANG_LAWAS
+    KABUPATEN_LABUHAN_BATU_SELATAN
+    KABUPATEN_LABUHAN_BATU_UTARA
+    KABUPATEN_NIAS_UTARA
+    KABUPATEN_NIAS_BARAT
+    KOTA_SIBOLGA
+    KOTA_TANJUNG_BALAI
+    KOTA_PEMATANG_SIANTAR
+    KOTA_TEBING_TINGGI
+    KOTA_MEDAN
+    KOTA_BINJAI
+    KOTA_PADANGSIDIMPUAN
+    KOTA_GUNUNGSITOLI
+    KABUPATEN_KEPULAUAN_MENTAWAI
+    KABUPATEN_PESISIR_SELATAN
+    KABUPATEN_SOLOK
+    KABUPATEN_SIJUNJUNG
+    KABUPATEN_TANAH_DATAR
+    KABUPATEN_PADANG_PARIAMAN
+    KABUPATEN_AGAM
+    KABUPATEN_LIMA_PULUH_KOTA
+    KABUPATEN_PASAMAN
+    KABUPATEN_SOLOK_SELATAN
+    KABUPATEN_DHARMASRAYA
+    KABUPATEN_PASAMAN_BARAT
+    KOTA_PADANG
+    KOTA_SOLOK
+    KOTA_SAWAH_LUNTO
+    KOTA_PADANG_PANJANG
+    KOTA_BUKITTINGGI
+    KOTA_PAYAKUMBUH
+    KOTA_PARIAMAN
+    KABUPATEN_KUANTAN_SINGINGI
+    KABUPATEN_INDRAGIRI_HULU
+    KABUPATEN_INDRAGIRI_HILIR
+    KABUPATEN_PELALAWAN
+    KABUPATEN_S_I_A_K
+    KABUPATEN_KAMPAR
+    KABUPATEN_ROKAN_HULU
+    KABUPATEN_BENGKALIS
+    KABUPATEN_ROKAN_HILIR
+    KABUPATEN_KEPULAUAN_MERANTI
+    KOTA_PEKANBARU
+    KOTA_D_U_M_A_I
+    KABUPATEN_KERINCI
+    KABUPATEN_MERANGIN
+    KABUPATEN_SAROLANGUN
+    KABUPATEN_BATANG_HARI
+    KABUPATEN_MUARO_JAMBI
+    KABUPATEN_TANJUNG_JABUNG_TIMUR
+    KABUPATEN_TANJUNG_JABUNG_BARAT
+    KABUPATEN_TEBO
+    KABUPATEN_BUNGO
+    KOTA_JAMBI
+    KOTA_SUNGAI_PENUH
+    KABUPATEN_OGAN_KOMERING_ULU
+    KABUPATEN_OGAN_KOMERING_ILIR
+    KABUPATEN_MUARA_ENIM
+    KABUPATEN_LAHAT
+    KABUPATEN_MUSI_RAWAS
+    KABUPATEN_MUSI_BANYUASIN
+    KABUPATEN_BANYU_ASIN
+    KABUPATEN_OGAN_KOMERING_ULU_SELATAN
+    KABUPATEN_OGAN_KOMERING_ULU_TIMUR
+    KABUPATEN_OGAN_ILIR
+    KABUPATEN_EMPAT_LAWANG
+    KABUPATEN_PENUKAL_ABAB_LEMATANG_ILIR
+    KABUPATEN_MUSI_RAWAS_UTARA
+    KOTA_PALEMBANG
+    KOTA_PRABUMULIH
+    KOTA_PAGAR_ALAM
+    KOTA_LUBUKLINGGAU
+    KABUPATEN_BENGKULU_SELATAN
+    KABUPATEN_REJANG_LEBONG
+    KABUPATEN_BENGKULU_UTARA
+    KABUPATEN_KAUR
+    KABUPATEN_SELUMA
+    KABUPATEN_MUKOMUKO
+    KABUPATEN_LEBONG
+    KABUPATEN_KEPAHIANG
+    KABUPATEN_BENGKULU_TENGAH
+    KOTA_BENGKULU
+    KABUPATEN_LAMPUNG_BARAT
+    KABUPATEN_TANGGAMUS
+    KABUPATEN_LAMPUNG_SELATAN
+    KABUPATEN_LAMPUNG_TIMUR
+    KABUPATEN_LAMPUNG_TENGAH
+    KABUPATEN_LAMPUNG_UTARA
+    KABUPATEN_WAY_KANAN
+    KABUPATEN_TULANGBAWANG
+    KABUPATEN_PESAWARAN
+    KABUPATEN_PRINGSEWU
+    KABUPATEN_MESUJI
+    KABUPATEN_TULANG_BAWANG_BARAT
+    KABUPATEN_PESISIR_BARAT
+    KOTA_BANDAR_LAMPUNG
+    KOTA_METRO
+    KABUPATEN_BANGKA
+    KABUPATEN_BELITUNG
+    KABUPATEN_BANGKA_BARAT
+    KABUPATEN_BANGKA_TENGAH
+    KABUPATEN_BANGKA_SELATAN
+    KABUPATEN_BELITUNG_TIMUR
+    KOTA_PANGKAL_PINANG
+    KABUPATEN_KARIMUN
+    KABUPATEN_BINTAN
+    KABUPATEN_NATUNA
+    KABUPATEN_LINGGA
+    KABUPATEN_KEPULAUAN_ANAMBAS
+    KOTA_B_A_T_A_M
+    KOTA_TANJUNG_PINANG
+    KABUPATEN_KEPULAUAN_SERIBU
+    KOTA_JAKARTA_SELATAN
+    KOTA_JAKARTA_TIMUR
+    KOTA_JAKARTA_PUSAT
+    KOTA_JAKARTA_BARAT
+    KOTA_JAKARTA_UTARA
+    KABUPATEN_BOGOR
+    KABUPATEN_SUKABUMI
+    KABUPATEN_CIANJUR
+    KABUPATEN_BANDUNG
+    KABUPATEN_GARUT
+    KABUPATEN_TASIKMALAYA
+    KABUPATEN_CIAMIS
+    KABUPATEN_KUNINGAN
+    KABUPATEN_CIREBON
+    KABUPATEN_MAJALENGKA
+    KABUPATEN_SUMEDANG
+    KABUPATEN_INDRAMAYU
+    KABUPATEN_SUBANG
+    KABUPATEN_PURWAKARTA
+    KABUPATEN_KARAWANG
+    KABUPATEN_BEKASI
+    KABUPATEN_BANDUNG_BARAT
+    KABUPATEN_PANGANDARAN
+    KOTA_BOGOR
+    KOTA_SUKABUMI
+    KOTA_BANDUNG
+    KOTA_CIREBON
+    KOTA_BEKASI
+    KOTA_DEPOK
+    KOTA_CIMAHI
+    KOTA_TASIKMALAYA
+    KOTA_BANJAR
+    KABUPATEN_CILACAP
+    KABUPATEN_BANYUMAS
+    KABUPATEN_PURBALINGGA
+    KABUPATEN_BANJARNEGARA
+    KABUPATEN_KEBUMEN
+    KABUPATEN_PURWOREJO
+    KABUPATEN_WONOSOBO
+    KABUPATEN_MAGELANG
+    KABUPATEN_BOYOLALI
+    KABUPATEN_KLATEN
+    KABUPATEN_SUKOHARJO
+    KABUPATEN_WONOGIRI
+    KABUPATEN_KARANGANYAR
+    KABUPATEN_SRAGEN
+    KABUPATEN_GROBOGAN
+    KABUPATEN_BLORA
+    KABUPATEN_REMBANG
+    KABUPATEN_PATI
+    KABUPATEN_KUDUS
+    KABUPATEN_JEPARA
+    KABUPATEN_DEMAK
+    KABUPATEN_SEMARANG
+    KABUPATEN_TEMANGGUNG
+    KABUPATEN_KENDAL
+    KABUPATEN_BATANG
+    KABUPATEN_PEKALONGAN
+    KABUPATEN_PEMALANG
+    KABUPATEN_TEGAL
+    KABUPATEN_BREBES
+    KOTA_MAGELANG
+    KOTA_SURAKARTA
+    KOTA_SALATIGA
+    KOTA_SEMARANG
+    KOTA_PEKALONGAN
+    KOTA_TEGAL
+    KABUPATEN_KULON_PROGO
+    KABUPATEN_BANTUL
+    KABUPATEN_GUNUNG_KIDUL
+    KABUPATEN_SLEMAN
+    KOTA_YOGYAKARTA
+    KABUPATEN_PACITAN
+    KABUPATEN_PONOROGO
+    KABUPATEN_TRENGGALEK
+    KABUPATEN_TULUNGAGUNG
+    KABUPATEN_BLITAR
+    KABUPATEN_KEDIRI
+    KABUPATEN_MALANG
+    KABUPATEN_LUMAJANG
+    KABUPATEN_JEMBER
+    KABUPATEN_BANYUWANGI
+    KABUPATEN_BONDOWOSO
+    KABUPATEN_SITUBONDO
+    KABUPATEN_PROBOLINGGO
+    KABUPATEN_PASURUAN
+    KABUPATEN_SIDOARJO
+    KABUPATEN_MOJOKERTO
+    KABUPATEN_JOMBANG
+    KABUPATEN_NGANJUK
+    KABUPATEN_MADIUN
+    KABUPATEN_MAGETAN
+    KABUPATEN_NGAWI
+    KABUPATEN_BOJONEGORO
+    KABUPATEN_TUBAN
+    KABUPATEN_LAMONGAN
+    KABUPATEN_GRESIK
+    KABUPATEN_BANGKALAN
+    KABUPATEN_SAMPANG
+    KABUPATEN_PAMEKASAN
+    KABUPATEN_SUMENEP
+    KOTA_KEDIRI
+    KOTA_BLITAR
+    KOTA_MALANG
+    KOTA_PROBOLINGGO
+    KOTA_PASURUAN
+    KOTA_MOJOKERTO
+    KOTA_MADIUN
+    KOTA_SURABAYA
+    KOTA_BATU
+    KABUPATEN_PANDEGLANG
+    KABUPATEN_LEBAK
+    KABUPATEN_TANGERANG
+    KABUPATEN_SERANG
+    KOTA_TANGERANG
+    KOTA_CILEGON
+    KOTA_SERANG
+    KOTA_TANGERANG_SELATAN
+    KABUPATEN_JEMBRANA
+    KABUPATEN_TABANAN
+    KABUPATEN_BADUNG
+    KABUPATEN_GIANYAR
+    KABUPATEN_KLUNGKUNG
+    KABUPATEN_BANGLI
+    KABUPATEN_KARANG_ASEM
+    KABUPATEN_BULELENG
+    KOTA_DENPASAR
+    KABUPATEN_LOMBOK_BARAT
+    KABUPATEN_LOMBOK_TENGAH
+    KABUPATEN_LOMBOK_TIMUR
+    KABUPATEN_SUMBAWA
+    KABUPATEN_DOMPU
+    KABUPATEN_BIMA
+    KABUPATEN_SUMBAWA_BARAT
+    KABUPATEN_LOMBOK_UTARA
+    KOTA_MATARAM
+    KOTA_BIMA
+    KABUPATEN_SUMBA_BARAT
+    KABUPATEN_SUMBA_TIMUR
+    KABUPATEN_KUPANG
+    KABUPATEN_TIMOR_TENGAH_SELATAN
+    KABUPATEN_TIMOR_TENGAH_UTARA
+    KABUPATEN_BELU
+    KABUPATEN_ALOR
+    KABUPATEN_LEMBATA
+    KABUPATEN_FLORES_TIMUR
+    KABUPATEN_SIKKA
+    KABUPATEN_ENDE
+    KABUPATEN_NGADA
+    KABUPATEN_MANGGARAI
+    KABUPATEN_ROTE_NDAO
+    KABUPATEN_MANGGARAI_BARAT
+    KABUPATEN_SUMBA_TENGAH
+    KABUPATEN_SUMBA_BARAT_DAYA
+    KABUPATEN_NAGEKEO
+    KABUPATEN_MANGGARAI_TIMUR
+    KABUPATEN_SABU_RAIJUA
+    KABUPATEN_MALAKA
+    KOTA_KUPANG
+    KABUPATEN_SAMBAS
+    KABUPATEN_BENGKAYANG
+    KABUPATEN_LANDAK
+    KABUPATEN_MEMPAWAH
+    KABUPATEN_SANGGAU
+    KABUPATEN_KETAPANG
+    KABUPATEN_SINTANG
+    KABUPATEN_KAPUAS_HULU
+    KABUPATEN_SEKADAU
+    KABUPATEN_MELAWI
+    KABUPATEN_KAYONG_UTARA
+    KABUPATEN_KUBU_RAYA
+    KOTA_PONTIANAK
+    KOTA_SINGKAWANG
+    KABUPATEN_KOTAWARINGIN_BARAT
+    KABUPATEN_KOTAWARINGIN_TIMUR
+    KABUPATEN_KAPUAS
+    KABUPATEN_BARITO_SELATAN
+    KABUPATEN_BARITO_UTARA
+    KABUPATEN_SUKAMARA
+    KABUPATEN_LAMANDAU
+    KABUPATEN_SERUYAN
+    KABUPATEN_KATINGAN
+    KABUPATEN_PULANG_PISAU
+    KABUPATEN_GUNUNG_MAS
+    KABUPATEN_BARITO_TIMUR
+    KABUPATEN_MURUNG_RAYA
+    KOTA_PALANGKA_RAYA
+    KABUPATEN_TANAH_LAUT
+    KABUPATEN_KOTA_BARU
+    KABUPATEN_BANJAR
+    KABUPATEN_BARITO_KUALA
+    KABUPATEN_TAPIN
+    KABUPATEN_HULU_SUNGAI_SELATAN
+    KABUPATEN_HULU_SUNGAI_TENGAH
+    KABUPATEN_HULU_SUNGAI_UTARA
+    KABUPATEN_TABALONG
+    KABUPATEN_TANAH_BUMBU
+    KABUPATEN_BALANGAN
+    KOTA_BANJARMASIN
+    KOTA_BANJAR_BARU
+    KABUPATEN_PASER
+    KABUPATEN_KUTAI_BARAT
+    KABUPATEN_KUTAI_KARTANEGARA
+    KABUPATEN_KUTAI_TIMUR
+    KABUPATEN_BERAU
+    KABUPATEN_PENAJAM_PASER_UTARA
+    KABUPATEN_MAHAKAM_HULU
+    KOTA_BALIKPAPAN
+    KOTA_SAMARINDA
+    KOTA_BONTANG
+    KABUPATEN_MALINAU
+    KABUPATEN_BULUNGAN
+    KABUPATEN_TANA_TIDUNG
+    KABUPATEN_NUNUKAN
+    KOTA_TARAKAN
+    KABUPATEN_BOLAANG_MONGONDOW
+    KABUPATEN_MINAHASA
+    KABUPATEN_KEPULAUAN_SANGIHE
+    KABUPATEN_KEPULAUAN_TALAUD
+    KABUPATEN_MINAHASA_SELATAN
+    KABUPATEN_MINAHASA_UTARA
+    KABUPATEN_BOLAANG_MONGONDOW_UTARA
+    KABUPATEN_SIAU_TAGULANDANG_BIARO
+    KABUPATEN_MINAHASA_TENGGARA
+    KABUPATEN_BOLAANG_MONGONDOW_SELATAN
+    KABUPATEN_BOLAANG_MONGONDOW_TIMUR
+    KOTA_MANADO
+    KOTA_BITUNG
+    KOTA_TOMOHON
+    KOTA_KOTAMOBAGU
+    KABUPATEN_BANGGAI_KEPULAUAN
+    KABUPATEN_BANGGAI
+    KABUPATEN_MOROWALI
+    KABUPATEN_POSO
+    KABUPATEN_DONGGALA
+    KABUPATEN_TOLITOLI
+    KABUPATEN_BUOL
+    KABUPATEN_PARIGI_MOUTONG
+    KABUPATEN_TOJO_UNAUNA
+    KABUPATEN_SIGI
+    KABUPATEN_BANGGAI_LAUT
+    KABUPATEN_MOROWALI_UTARA
+    KOTA_PALU
+    KABUPATEN_KEPULAUAN_SELAYAR
+    KABUPATEN_BULUKUMBA
+    KABUPATEN_BANTAENG
+    KABUPATEN_JENEPONTO
+    KABUPATEN_TAKALAR
+    KABUPATEN_GOWA
+    KABUPATEN_SINJAI
+    KABUPATEN_MAROS
+    KABUPATEN_PANGKAJENE_DAN_KEPULAUAN
+    KABUPATEN_BARRU
+    KABUPATEN_BONE
+    KABUPATEN_SOPPENG
+    KABUPATEN_WAJO
+    KABUPATEN_SIDENRENG_RAPPANG
+    KABUPATEN_PINRANG
+    KABUPATEN_ENREKANG
+    KABUPATEN_LUWU
+    KABUPATEN_TANA_TORAJA
+    KABUPATEN_LUWU_UTARA
+    KABUPATEN_LUWU_TIMUR
+    KABUPATEN_TORAJA_UTARA
+    KOTA_MAKASSAR
+    KOTA_PAREPARE
+    KOTA_PALOPO
+    KABUPATEN_BUTON
+    KABUPATEN_MUNA
+    KABUPATEN_KONAWE
+    KABUPATEN_KOLAKA
+    KABUPATEN_KONAWE_SELATAN
+    KABUPATEN_BOMBANA
+    KABUPATEN_WAKATOBI
+    KABUPATEN_KOLAKA_UTARA
+    KABUPATEN_BUTON_UTARA
+    KABUPATEN_KONAWE_UTARA
+    KABUPATEN_KOLAKA_TIMUR
+    KABUPATEN_KONAWE_KEPULAUAN
+    KABUPATEN_MUNA_BARAT
+    KABUPATEN_BUTON_TENGAH
+    KABUPATEN_BUTON_SELATAN
+    KOTA_KENDARI
+    KOTA_BAUBAU
+    KABUPATEN_BOALEMO
+    KABUPATEN_GORONTALO
+    KABUPATEN_POHUWATO
+    KABUPATEN_BONE_BOLANGO
+    KABUPATEN_GORONTALO_UTARA
+    KOTA_GORONTALO
+    KABUPATEN_MAJENE
+    KABUPATEN_POLEWALI_MANDAR
+    KABUPATEN_MAMASA
+    KABUPATEN_MAMUJU
+    KABUPATEN_MAMUJU_UTARA
+    KABUPATEN_MAMUJU_TENGAH
+    KABUPATEN_MALUKU_TENGGARA_BARAT
+    KABUPATEN_MALUKU_TENGGARA
+    KABUPATEN_MALUKU_TENGAH
+    KABUPATEN_BURU
+    KABUPATEN_KEPULAUAN_ARU
+    KABUPATEN_SERAM_BAGIAN_BARAT
+    KABUPATEN_SERAM_BAGIAN_TIMUR
+    KABUPATEN_MALUKU_BARAT_DAYA
+    KABUPATEN_BURU_SELATAN
+    KOTA_AMBON
+    KOTA_TUAL
+    KABUPATEN_HALMAHERA_BARAT
+    KABUPATEN_HALMAHERA_TENGAH
+    KABUPATEN_KEPULAUAN_SULA
+    KABUPATEN_HALMAHERA_SELATAN
+    KABUPATEN_HALMAHERA_UTARA
+    KABUPATEN_HALMAHERA_TIMUR
+    KABUPATEN_PULAU_MOROTAI
+    KABUPATEN_PULAU_TALIABU
+    KOTA_TERNATE
+    KOTA_TIDORE_KEPULAUAN
+    KABUPATEN_FAKFAK
+    KABUPATEN_KAIMANA
+    KABUPATEN_TELUK_WONDAMA
+    KABUPATEN_TELUK_BINTUNI
+    KABUPATEN_MANOKWARI
+    KABUPATEN_SORONG_SELATAN
+    KABUPATEN_SORONG
+    KABUPATEN_RAJA_AMPAT
+    KABUPATEN_TAMBRAUW
+    KABUPATEN_MAYBRAT
+    KABUPATEN_MANOKWARI_SELATAN
+    KABUPATEN_PEGUNUNGAN_ARFAK
+    KOTA_SORONG
+    KABUPATEN_MERAUKE
+    KABUPATEN_JAYAWIJAYA
+    KABUPATEN_JAYAPURA
+    KABUPATEN_NABIRE
+    KABUPATEN_KEPULAUAN_YAPEN
+    KABUPATEN_BIAK_NUMFOR
+    KABUPATEN_PANIAI
+    KABUPATEN_PUNCAK_JAYA
+    KABUPATEN_MIMIKA
+    KABUPATEN_BOVEN_DIGOEL
+    KABUPATEN_MAPPI
+    KABUPATEN_ASMAT
+    KABUPATEN_YAHUKIMO
+    KABUPATEN_PEGUNUNGAN_BINTANG
+    KABUPATEN_TOLIKARA
+    KABUPATEN_SARMI
+    KABUPATEN_KEEROM
+    KABUPATEN_WAROPEN
+    KABUPATEN_SUPIORI
+    KABUPATEN_MAMBERAMO_RAYA
+    KABUPATEN_NDUGA
+    KABUPATEN_LANNY_JAYA
+    KABUPATEN_MAMBERAMO_TENGAH
+    KABUPATEN_YALIMO
+    KABUPATEN_PUNCAK
+    KABUPATEN_DOGIYAI
+    KABUPATEN_INTAN_JAYA
+    KABUPATEN_DEIYAI
+    KOTA_JAYAPURA
+  }
+
+  enum TKDNType {
+    SA
+    SI
+    SUCOFFINDO
+  }
+
+  enum UnitPricetype {
+    ONSITE
+    CIF
+  }
+
+  enum ProcurementCategory {
+    A
+    B
+    C
+    D
+    E
+    F
+    G
+    H
+    I
+    J
+    K
+    L
+    M
+    N
+    O
+    P
+    Q
+    R
+    S
+    T
+  }
```

