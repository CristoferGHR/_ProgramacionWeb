import type { Request, Response } from "express";
import type { RowDataPacket } from "mysql2";
import { pool } from "../conf/dbConnection.ts";

export class ProductController {
  public async getAll(_req: Request, res: Response) {
    try {
      const [products] = await pool.execute<RowDataPacket[]>(
        "select id, name, price, stock, description, brand, img from products where active = TRUE",
      );
      res.json(products);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
