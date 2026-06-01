import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { validate } from "./middlewares/validate.js";
import {
  investmentQuerySchema,
  startupListQuerySchema,
  startupParamsSchema,
} from "./schemas/startupSchema.js";
import {
  listStartups,
  listStartupInvestments,
} from "./controllers/startupController.js";
import compareSchema from "./schemas/compareSchema.js";
import compareController from "./controllers/compareController.js";
import {
  deleteInvestmentBodySchema,
  investmentParamsSchema,
  updateInvestmentBodySchema,
} from "./schemas/investmentSchema.js";

import {
  deleteInvestment,
  patchInvestment,
  getInvestmentStatus,
} from "./controllers/investmentController.js";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile });

const app = express();
app.use(cors());
app.use(express.json());

//READ

// Get Startup
app.get("/startups", validate(startupListQuerySchema, "query"), listStartups);

// Get InvestmentStatus
app.get("/investments", getInvestmentStatus);

// Get Startup details
app.get(
  "/startups/:id",
  validate(startupParamsSchema, "params"),
  validate(investmentQuerySchema, "query"),
  listStartupInvestments,
);

//Get compare Result
app.get(
  "/compare/result",
  validate(compareSchema.compareResultQuerySchema, "query"),
  compareController.getCompareResultController,
);

//Post compare
app.post(
  "/compare",
  validate(compareSchema.compareSelectionSchema),
  compareController.createCompareSelection,
);

//Patch investments
app.patch(
  "/investments/:id",
  validate(investmentParamsSchema, "params"),
  validate(updateInvestmentBodySchema, "body"),
  patchInvestment,
);

//Delete investments
app.delete(
  "/investments/:id",
  validate(investmentParamsSchema, "params"),
  validate(deleteInvestmentBodySchema, "body"),
  deleteInvestment,
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `[${process.env.NODE_ENV || "development"}] Server running on port ${PORT}`,
  );
});
