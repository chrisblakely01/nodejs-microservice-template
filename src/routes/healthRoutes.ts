import { Router } from "express";
import * as healthController from "../controllers/healthController";

const router = Router();

router.get("/", healthController.getHealthCheck);

export default router;
