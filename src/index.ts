import express, { Application } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import essenceRoutes from "./routes/essenceRoutes";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";


const app: Application = express();
const PORT = process.env.PORT ?? 3000;

//Middleware - Guardianes de ruta
app.use(cors());
app.use(express.json());

// Rutas 
app.use("/api/Essence", essenceRoutes);

//Documentacion del swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//Inicializacion de la base de datos y el servidor 
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () =>{
        console.log(`Servidor corriendo en http://localhost:${PORT}\n`);

        console.log(`Endpoints:`);
        console.log(`API Essence http://localhost:${PORT}/api/Essence`);
  
        console.log(`Documentación:`);
        console.log(`Swagger en http://localhost:${PORT}/api-docs`);
    
    });
  })
  .catch((error) => console.log(error));  