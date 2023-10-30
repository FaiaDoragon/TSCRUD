import express, { Application } from "express";
import cors from "cors";
import swaggerjsdoc, { Options } from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";

import userRoutes from "../routes/router";
import db from "../db/connection";
import options from "../swagger/optionsswagger";


class Server {

    private app: Application;
    private port: string;
    private spacs: Options;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.spacs = swaggerjsdoc(options);

        //llamar a los middlewares
        this.middlewares();

        //Conectar a base de datos
        this.dbConection()

        //swagger
        this.swaggerDocs(this.spacs)

        //defeinir mis rutas
        this.routes();
    }

    //TODO: conectar base de datos

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta publica
        this.app.use(express.static('public'));
    }

    async dbConection() {

        try {

            await db.authenticate();
            console.log('Database Online');

        } catch ( error ) {
            throw new Error();
        }

    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)

    }

    swaggerDocs(options: swaggerui.JsonObject | undefined) {
        this.app.use(this.apiPaths.usuarios + '-doc', swaggerui.serve, swaggerui.setup(options))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);

        })
    }

}

export default Server;