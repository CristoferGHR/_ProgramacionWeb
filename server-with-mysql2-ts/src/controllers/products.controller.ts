import type { Request, Response } from "express";
import type { RowDataPacket } from "mysql2";
import { pool } from "../conf/dbConnection.ts";

const isValidId = (id: number) => Number.isInteger(id) && id > 0; 

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

    public async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (!isValidId(id)) {
        res.status(400).json({ message: "invalid id" });
        return;
      }
      const [products] = await pool.execute<RowDataPacket[]>(
        "select id, name, price, stock, description, brand, img from products where id = ? and active = TRUE",
        [id],
      );
      if (!products[0]) {
        res.status(404).json({ message: "product not found" });
        return;
      }
      res.json(products[0]);
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

}
