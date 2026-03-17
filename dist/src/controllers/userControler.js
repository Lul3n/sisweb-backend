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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUserbyBusinessId = exports.getAllUsers = exports.getUserbyId = exports.updateUser = exports.createUser = void 0;
const user_1 = require("../models/user");
//Create new User
const createUser = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const _a = Object.assign({}, req.body), { isAdmin } = _a, user = __rest(_a, ["isAdmin"]);
    user_1.User.create(user)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "User successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a user. " + err.message,
            payload: null,
        });
    });
};
exports.createUser = createUser;
//Update User by Id
const updateUser = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Product in the database 
    user_1.User.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "User successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the user. ",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a user. " + err.message,
            payload: null,
        });
    });
};
exports.updateUser = updateUser;
//Get User by Id
const getUserbyId = (req, res) => {
    user_1.User.findByPk(req.params.id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "User successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all users. " + err.message,
            payload: null,
        });
    });
};
exports.getUserbyId = getUserbyId;
//Get All Users
const getAllUsers = (req, res) => {
    user_1.User.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Users successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all users. " + err.message,
            payload: null,
        });
    });
};
exports.getAllUsers = getAllUsers;
//Get Users by Business Id
const getUserbyBusinessId = (req, res) => {
    user_1.User.findAll({ where: { businessId: req.params.id } })
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Users successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all users. " + err.message,
            payload: null,
        });
    });
};
exports.getUserbyBusinessId = getUserbyBusinessId;
//Delete User by Id
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield user_1.User.destroy({ where: { id } });
        res.status(200).json({ message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting users",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userControler.js.map