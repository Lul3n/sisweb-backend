import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';  
import userRoutes from './userRoutes';
import businessRoutes from './businessRoutes';

const apiRouter:Router = Router();  

apiRouter.use('/product', productRoutes)

apiRouter.use('/business', businessRoutes)

apiRouter.use('/user', userRoutes)

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 