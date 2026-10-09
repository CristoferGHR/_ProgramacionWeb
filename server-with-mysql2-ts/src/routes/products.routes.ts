import { Router } from "express";
import { ProductController } from "../controllers/products.controller.ts";

const productController = new ProductController();
const router = Router();

router.get("/getAll", productController.getAll);
router.get("/getById/:id", productController.getById);
router.post("/create", productController.create);


export default router;
