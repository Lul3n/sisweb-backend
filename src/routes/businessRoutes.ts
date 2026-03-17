import{Router} from 'express';
import{createBusiness, updateBusiness, getBusinessById, getAllBusiness, deleteBusiness} from '../controllers/businessControler';

const businessRouter:Router = Router();

businessRouter.post('./createbusiness', createBusiness);
businessRouter.patch('./updatebusiness/:id',updateBusiness);
businessRouter.get('./getbusinessbyid/:id',getBusinessById);
businessRouter.get('./getallbusiness', getAllBusiness);
businessRouter.delete('./deletebusiness', deleteBusiness);

export default businessRouter;