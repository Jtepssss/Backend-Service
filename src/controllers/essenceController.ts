import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Essence } from "../entities/Essence";

const essenceRepository = AppDataSource.getRepository(Essence);

//Get - Obtener todos los productos 
export const getAllEssence = async(req: Request, res: Response) => {
    try{
        const essence = await essenceRepository.find();
        res.json(essence);
    }catch(error) {
        res.status(500).json({ message: "Error al obtener el producto"});
    }
};

// Get by ID - obtener producto por ID
export const getEssenceById = async( req: Request, res: Response) => {
    try{
        const essence = await essenceRepository.findOneBy({
            CodigoDelProducto: parseInt(req.params.CodigoDelProducto),
        });

        if(essence) {
            res.json(essence);
        } else {
            res.status(404).json({ message: "Porducto no encontrado"});
        }
    }catch(error){
        res.status(500).json({ message: "Error al obtener el producto."});
    }
};

// POST - Crear un nuevo producto 
export const createEssence = async(req: Request, res: Response) => {
    try{
        const { CodigoDelProducto, NombreDelProducto, DetallesDelProducto, Ingredientes, Uso, Precio} = req.body;
        const essence = new Essence();
        essence.NombreDelProducto = NombreDelProducto;
        essence.CodigoDelProducto =  CodigoDelProducto;
        essence.DetallesDelProducto =  DetallesDelProducto;
        essence.Ingredientes = Ingredientes;
        essence.Uso =  Uso;
        essence.Precio =  Precio;

        await essenceRepository.save(essence);
        res.status(201).json(essence);
    }catch(error){
        res.status(500).json({ message: "Error al crear el producto."});
    }
};

// Put Actualizar un producto

export const updateEssence = async(req: Request, res: Response) => {
    try{
        const { CodigoDelProducto, NombreDelProducto, DetallesDelProducto, Ingredientes, Uso, Precio} = req.body
        const essence = await essenceRepository.findOneBy({
            CodigoDelProducto: parseInt(req.params.CodigoDelProducto),
        });

        if(essence) {
            essence.CodigoDelProducto = CodigoDelProducto ?? essence.CodigoDelProducto;
            essence.NombreDelProducto = NombreDelProducto ?? essence.NombreDelProducto;
            essence.DetallesDelProducto = DetallesDelProducto ?? essence.DetallesDelProducto;
            essence.Ingredientes = Ingredientes ?? essence.Ingredientes;
            essence.Uso = Uso ?? essence.Uso;
            essence.Precio = Precio ?? essence.Precio;

            await essenceRepository.save(essence);
            res.json(essence);

        } else {
            res.status(404).json({ message: "producto no encontrado"});
        }         

     } catch(error) {
        res.status(500).json({ mesagge: "Error al actualizar el producto"});
     } 
};


//DELETE - Borrar un producto
export const deleteEssence = async(req: Request, res: Response) => {
    try{
        const essence = await essenceRepository.findOneBy({
            CodigoDelProducto: parseInt(req.params.CodigoDelProducto),
        });

        if (essence) {
            await essenceRepository.remove(essence)
            res.json({ message: "Producto eliminado."});
        } else {
            res.status(404).json({ message: "Producto no encontrado."});
        }

    } catch(error) {
        res.status(500).json({ message: "Error al eliminar el producto."});
    }
}; 