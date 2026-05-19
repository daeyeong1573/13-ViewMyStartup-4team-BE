-- AlterTable
ALTER TABLE "startup" ALTER COLUMN "img_url" DROP NOT NULL;

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
