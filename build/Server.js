"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./src/routes/Routes"));
class Server {
    constructor(app) {
        this.config(app);
        new Routes_1.default(app);
    }
    config(app) {
        app.use(express_1.default.urlencoded({ limit: '5mb', extended: false }));
        app.use(express_1.default.json({ limit: '5mb' }));
    }
}
exports.default = Server;
