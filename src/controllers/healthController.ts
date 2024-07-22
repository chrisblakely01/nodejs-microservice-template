import { Request, Response } from "express";
import * as healthService from "../services/healthService";

export const getHealthCheck = async (req: Request, res: Response) => {
  try {
    const health = await healthService.getHealthCheck();
    res.status(201).json(health);
  } catch (error) {
    res.status(400).json({ error: "Failed to create product" });
  }
};
