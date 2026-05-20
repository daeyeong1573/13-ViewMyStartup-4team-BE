-- CreateTable
CREATE TABLE "startup" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img_url" TEXT,
    "total_investment" BIGINT NOT NULL DEFAULT 0,
    "revenue" BIGINT NOT NULL DEFAULT 0,
    "employee_count" INTEGER NOT NULL DEFAULT 0,
    "my_startup_count" INTEGER NOT NULL DEFAULT 0,
    "compare_startup_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "virtual_investment" (
    "id" TEXT NOT NULL,
    "startup_id" TEXT NOT NULL,
    "investor_name" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "comment" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "virtual_investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compare_selection" (
    "id" TEXT NOT NULL,
    "my_startup_id" TEXT NOT NULL,
    "compare_startup_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compare_selection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "startup_total_investment_idx" ON "startup"("total_investment");

-- CreateIndex
CREATE INDEX "startup_revenue_idx" ON "startup"("revenue");

-- CreateIndex
CREATE INDEX "startup_employee_count_idx" ON "startup"("employee_count");

-- CreateIndex
CREATE INDEX "startup_my_startup_count_idx" ON "startup"("my_startup_count");

-- CreateIndex
CREATE INDEX "startup_compare_startup_count_idx" ON "startup"("compare_startup_count");

-- CreateIndex
CREATE INDEX "virtual_investment_amount_idx" ON "virtual_investment"("amount");

-- CreateIndex
CREATE INDEX "virtual_investment_startup_id_idx" ON "virtual_investment"("startup_id");

-- AddForeignKey
ALTER TABLE "virtual_investment" ADD CONSTRAINT "virtual_investment_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compare_selection" ADD CONSTRAINT "compare_selection_my_startup_id_fkey" FOREIGN KEY ("my_startup_id") REFERENCES "startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compare_selection" ADD CONSTRAINT "compare_selection_compare_startup_id_fkey" FOREIGN KEY ("compare_startup_id") REFERENCES "startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
