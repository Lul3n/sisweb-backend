import { Router } from 'express';
import { createProduct,  
deleteProduct,  
getAllProducts,  
getProductById,  
modifyProduct  
} from '../controllers/productControler'; 

const productRouter:Router = Router();  

productRouter.get('/getallproducts/', getAllProducts);  

productRouter.get('/getproductbyid/:id', getProductById);  

productRouter.post('/createproduct/', createProduct);  

productRouter.patch('/updateproduct/:id', modifyProduct);  

productRouter.delete('/deleteproduct/', deleteProduct);  

export default productRouter; 


