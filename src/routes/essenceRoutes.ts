import { Router } from "express";
import {
    getAllEssence,
    getEssenceById,
    createEssence,
    updateEssence,
    deleteEssence,
} from "../controllers/essenceController";

const essenceRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Essence
 *   description: CRUD relacionado con los producto   
 */

/**
 * @swagger 
 * /api/essence:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Essence]
 *     responses:
 *      200:
 *        description: Lista de productos 
 */     
essenceRoutes.get("/", getAllEssence);

/**
 * @swagger
 * /api/essence/{CodigoDelProducto}:
 *   get:
 *     summary: Obtener un producto por Codigo Del Producto
 *     tags: [Essence]
 *     parameters:
 *       - in: path 
 *         name: CodigoDelProducto
 *         required: true
 *         schema:
 *           type: integer
 *         description: CodigoDelProducto
 *     responses:
 *       200: 
 *         descriptions: Detalles del producto
 *       404:
 *         description: Producto no encontrado   
 */
essenceRoutes.get("/:CodigoDelProducto", getEssenceById);

/**
 * @swagger
 * /api/Essence:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Essence]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object       
 *             requierd:
 *               - CodigoDelProducto
 *               - NombreDelProducto       
 *               - DetallesDelProducto      
 *               - Ingredientes       
 *               - Uso      
 *               - Precio      
 *             properties: 
 *               NombreDelProducto:
 *                 type: string
 *               DetallesDelProducto:
 *                 type: string
 *               Ingredientes:
 *                 type: string
 *               Uso:
 *                 type: string
 *               Precio:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto Creado
 *       500:
 *         description: Error en el servidor
 */
essenceRoutes.post("/", createEssence);

/**
 * @swagger
 * /api/Essence/{CodigoDelProducto}:
 *   put:
 *     summary: Actualizar un producto existente 
 *     tags: [Essence]
 *     parameters:  
 *       - in: path   
 *         name: CodigoDelProducto
 *         required: true
 *         schema:
 *           type: integer
 *         description: Codigo del producto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NombreDelProducto:
 *                 type: string
 *               DetallesDelProducto:
 *                 type: string
 *               Ingredientes:
 *                 type: string
 *               Uso:
 *                 type: string
 *               Precio:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */         
essenceRoutes.put("/:CodigoDelProducto", updateEssence);

/**
 * @swagger
 * /api/Essence/{CodigoDelProducto}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Essence]
 *     parameters:
 *       - in: path
 *         name: CodigoDelProducto
 *         required: true
 *         schema:
 *           type: integer
 *         description: CodigoDelProducto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
essenceRoutes.delete("/:CodigoDelProducto", deleteEssence);

 export default essenceRoutes;
  

 