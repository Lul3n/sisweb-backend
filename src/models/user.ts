
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo, BeforeUpdate} from 'sequelize-typescript'; 
import {Optional} from 'sequelize';
import {Business} from './business';

interface UserAttributes{ 
  id: number; 
  name: string; 
  lastName: string; 
  number: string ; 
  mail: string ; 
  isAdmin: boolean ;
  businessId : number; 
} 

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{} 

@Table ({ 
  tableName: "Users" 
}) 
export class User extends Model<UserAttributes, UserCreationAttributes>{ 


   @Column 
   name!: string; 

   @Column
   lastName!:string;

   @Column({ 
      type: DataType.STRING 
   }) 
   number?: string; 

   @Column 
   mail!: string; 

   @Column 
   isAdmin!: boolean;
   
   @BeforeUpdate
    static preventAdminChange(instance: User) {
      if (instance.changed('isAdmin')) {
        throw new Error("No tienes permiso para cambiar el estatus de administrador.");
      }
    }

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 

   @ForeignKey(() => Business)
   @Column
   businessId!: number;

   @BelongsTo(() => Business)
   business!: Business;

}