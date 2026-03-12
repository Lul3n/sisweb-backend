"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControler_1 = require("../controllers/productControler");
const productRouter = (0, express_1.Router)();
productRouter.get('/getallproducts/', productControler_1.getAllProducts);
productRouter.get('/getproductbyid/:id', productControler_1.getProductById);
productRouter.post('/createproduct', productControler_1.createProduct);
productRouter.patch('/updateproduct/:id', productControler_1.modifyProduct);
productRouter.delete('/deleteproduct/', productControler_1.deleteProduct);
exports.default = productRouter;
//# sourceMappingURL=productRoutes.js.map