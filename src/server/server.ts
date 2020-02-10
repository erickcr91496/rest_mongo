import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');

const { root } = require('../routes/index')


export default class Server{
    private port: number 
    private app: express.Application

    constructor(port:number){
        this.port = port
        this.app = express();
    }

    static init(port:number):Server{
        return new Server(port)
    }

    public star(callback:Function){
        this.middlewares();
        this.routes();
        return this.app.listen(this.port,callback())
    }

    public middlewares():void {
        this.app.use( morgan('dev') )
        this.app.use( bodyParser.urlencoded({extended:true}) )
        this.app.use( bodyParser.json() )
    }

    private routes():void {
        this.app.use('/',root)
    }
}