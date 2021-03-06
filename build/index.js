"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Server_1 = __importDefault(require("./Server"));
mongoose_1.default.connect("mongodb+srv://adrian1:adrian@cluster0.muisd.mongodb.net/MusicLibrary?retryWrites=true&w=majority");
const app = (0, express_1.default)();
const server = new Server_1.default(app);
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.listen(port, 'localhost', function () {
    console.info(`Server running on : http://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('server startup error: address already in use');
    }
    else {
        console.log(err);
    }
});
