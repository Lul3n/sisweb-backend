"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBusiness = exports.getAllBusiness = exports.getBusinessById = exports.updateBusiness = exports.createBusiness = void 0;
const business_1 = require("../models/business");
//Create Business
const createBusiness = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Business cannot be empty",
            payload: null
        });
    }
    const business = Object.assign({}, req.body);
    business_1.Business.create(business)
        .then((data) => (res.status(200).json({
        status: "success",
        message: "Business created",
        payload: data
    })))
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something gone wrong " + err.message,
            payload: null
        });
    });
};
exports.createBusiness = createBusiness;
//Update Business by Id
const updateBusiness = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Entry cannot be empty",
            payload: null
        });
    }
    business_1.Business.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdate) => {
        if (isUpdate) {
            return res.status(200).json({
                status: "success",
                message: "Business successfully update",
                payload: Object.assign({}, req.body)
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the user",
                payload: null
            });
        }
    })
        .catch((err) => {
        {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the user " + err.message,
                payload: null
            });
        }
    });
};
exports.updateBusiness = updateBusiness;
//Get Business by Id
const getBusinessById = (req, res) => {
    business_1.Business.findByPk(req.params.id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Business successfully retrieved",
            payload: data
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened " + err.message,
            payload: null
        });
    });
};
exports.getBusinessById = getBusinessById;
//Get All Business 
const getAllBusiness = (req, res) => {
    business_1.Business.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Business successfully retrieved",
            payload: data
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Somehing happened " + err.message,
            payload: null
        });
    });
};
exports.getAllBusiness = getAllBusiness;
//Delete Business
const deleteBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield business_1.Business.destroy({ where: { id } });
        res.status(200).json({
            message: "Business delete"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something happened",
            error
        });
    }
});
exports.deleteBusiness = deleteBusiness;
//# sourceMappingURL=businessControler.js.map