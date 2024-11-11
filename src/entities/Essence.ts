import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Essence {
    @PrimaryGeneratedColumn()
    CodigoDelProducto!: number;
    
    @Column()
    NombreDelProducto!: string;

    @Column("text")
    DetallesDelProducto!: string;
  
    @Column("text")
    Ingredientes!: string;
  
    @Column("text")
    Uso!: string;
  
    @Column("decimal")
    Precio!: number;
}
