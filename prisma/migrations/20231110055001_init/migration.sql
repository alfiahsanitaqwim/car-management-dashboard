-- CreateTable
CREATE TABLE "car_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "car_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_brands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "car_brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "car_name" TEXT NOT NULL,
    "id_car_type" INTEGER NOT NULL,
    "id_car_brand" INTEGER NOT NULL,
    "availabiliy" BOOLEAN NOT NULL,
    "capacity" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id_customer" SERIAL NOT NULL,
    "id_car" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id_customer")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_id_car_type_fkey" FOREIGN KEY ("id_car_type") REFERENCES "car_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_id_car_brand_fkey" FOREIGN KEY ("id_car_brand") REFERENCES "car_brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_car_fkey" FOREIGN KEY ("id_car") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
