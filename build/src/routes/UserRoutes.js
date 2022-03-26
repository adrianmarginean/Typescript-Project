"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const auth_1 = __importDefault(require("../middlewares/auth"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/validate').get(auth_1.default, UserController_1.default.validateToken);
        this.router.route('/register').post(UserController_1.default.register);
        this.router.route('/login').post(UserController_1.default.login);
        this.router.route('/get/all').get(UserController_1.default.getAllUsers);
    }
}
exports.default = new UserRoutes().router;
