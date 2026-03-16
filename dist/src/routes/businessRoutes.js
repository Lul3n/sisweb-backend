"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessControler_1 = require("../controllers/businessControler");
const businessRouter = (0, express_1.Router)();
businessRouter.post('./createbusiness', businessControler_1.createBusiness);
businessRouter.patch('./updatebusiness/:id', businessControler_1.updateBusiness);
businessRouter.get('./getbusinessbyid/:id', businessControler_1.getBusinessById);
businessRouter.get('./getallbusiness', businessControler_1.getAllBusiness);
businessRouter.delete('./deletebusiness/:id', businessControler_1.deleteBusiness);
exports.default = businessRouter;
//# sourceMappingURL=businessRoutes.js.map