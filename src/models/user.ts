
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript'; 
import {Optional} from 'sequelize';
import {Business} from './business';

interface UserAttributes{ 
  id: number; 
  name: string; 
  lastName: string; 
  number: string ; 
  mail: string ; 
  isAdmin: boolean ; 
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