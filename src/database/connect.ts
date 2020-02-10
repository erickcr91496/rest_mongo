import  mongoose = require('mongoose');
import ModelDatabase from '../config/models/database/configModel.model';


export default class Database{

    private static instance: Database
    private config: ModelDatabase

    constructor( config:ModelDatabase ){
        this.config = config
    }

    static init(config:ModelDatabase){
        return this.instance || ( this.instance = new this(config) );
    }

    public connect(): Promise<any>{
        return mongoose.connect(this.config.url(),
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
    }



    //nadaaaaaaaaaa
}