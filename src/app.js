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
import { compareSelectionSchema } from "./schemas/compareSchema.js";
import { createCompareSelection } from "./controllers/compareController.js";
import {
  updateInvestmentBodySchema,
  updateInvestmentParamsSchema,
} from "./schemas/investmentSchema.js";
import { patchInvestment } from "./controllers/investmentController.js";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile });

const app = express();
app.use(cors());
app.use(express.json());

//READ

// Get Startup
app.get("/startups", validate(startupListQuerySchema, "query"), listStartups);

// Get Startup details
app.get(
  "/startups/:id",
  validate(startupParamsSchema, "params"),
  validate(investmentQuerySchema, "query"),
  listStartupInvestments,
);

//Post compare
app.post("/compare", validate(compareSelectionSchema), createCompareSelection);

//Patch investments
app.patch(
  "/investments/:id",
  validate(updateInvestmentParamsSchema, "params"),
  validate(updateInvestmentBodySchema, "body"),
  patchInvestment,
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `[${process.env.NODE_ENV || "development"}] Server running on port ${PORT}`,
  );
});
