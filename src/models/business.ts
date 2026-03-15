
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 

interface BusinessAttributes{ 
  id: number; 
  type: string; 
  name: string;
  description: string; 
  contactNumber: string; 
  contactMail: string ;
} 

interface BusinessCreationAttributes extends Optional<BusinessAttributes, 'id'>{} 

@Table ({ 
  tableName: "Business" 
}) 
export class Product extends Model<BusinessAttributes, BusinessCreationAttributes>{ 


// Here, TS infers Data Type from the JS Type 
  // The ! means that the variable title wont be null or undefine.  
   @Column 
   type!: string; 

   @Column
   name!: string;

  // Here, we set the Data Type explicity 
  // The ? means the variable can be null or undefined 
   @Column({ 
      type: DataType.STRING 
   }) 
   description?: string; 

   @Column 
   contactNumber!: string; 

   @Column 
   contactMail!: string; 

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 
} 