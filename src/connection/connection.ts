
import { Sequelize } from "sequelize-typescript"; 
import { Product } from "../models/product"; 
import { User } from "../models/user";
import { Business } from "../models/business";

const connection = new Sequelize({ 
database: 'sisweb_db', 
dialect: 'postgres', 
username: 'sisweb_user', 
password: ' HDK#$%Ljkwerff.89', 
logging: console.log,
models: [ 
Product,
User,
Business 
] 
}); 

async function connectionDB(){ 
try{ 
await connection.sync(); 
}catch(e){ 
console.log(e); 
} 
} 
export default connectionDB; 
 

