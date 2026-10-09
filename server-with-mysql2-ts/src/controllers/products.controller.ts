import type { Request, Response } from "express";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../conf/dbConnection.ts";

const isValidId = (id: number) => Number.isInteger(id) && id > 0; 
const isValidPrice = (price: unknown) =>
  typeof price === "number" && Number.isFinite(price) && price > 0;


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

  public async create(req: Request, res: Response) {
    try {
      const { name, price, stock, description, brand, img } = req.body ?? {};
      if (!name || !description || !Number.isInteger(stock) || !isValidPrice(price)) {
        res.status(400).json({ message: "invalid product data" });
        return;
      }
      const [result] = await pool.execute<ResultSetHeader>(
        "insert into products (name, price, stock, description, brand, img) values (?, ?, ?, ?, ?, ?)",
        [name, price, stock, description, brand ?? null, img ?? null],
      );
      res.status(201).json({ message: "product created", id: result.insertId });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

    public async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (!isValidId(id)) {
        res.status(400).json({ message: "invalid id" });
        return;
      }
      const { name, price, stock, description, brand, img } = req.body ?? {};
      if (!name || !description || !Number.isInteger(stock) || !isValidPrice(price)) {
        res.status(400).json({ message: "invalid product data" });
        return;
      }
      const [result] = await pool.execute<ResultSetHeader>(
        "update products set name = ?, price = ?, stock = ?, description = ?, brand = ?, img = ? where id = ? and active = TRUE",
        [name, price, stock, description, brand ?? null, img ?? null, id],
      );
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "product not found" });
        return;
      }
      res.json({ message: "product updated" });
    } catch {
      res.status(500).json({ message: "internal server error" });
    }
  }

}
