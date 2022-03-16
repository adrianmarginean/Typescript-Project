import express, { Application } from "express";
import Routes from "./src/routes/Routes";

export default class Server{
    constructor(app: Application){
        this.config(app);
        new Routes(app);
    }

    public config(app: Application): void{
        app.use(express.urlencoded({ limit: '5mb', extended: false }));
        app.use(express.json({ limit: '5mb' }));
    }
}