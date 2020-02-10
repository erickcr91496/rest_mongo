import ModelDatabase from './models/database/configModel.model';
export default class Config {

    private port: any
    private database: ModelDatabase
    
    constructor(){
        this.port = process.env.PORT || 3000;
        this.database = this.Database();
    }

    public static init(){
        return new Config();
    }

    public get config_port(){
        return this.port
    }

    public get config_database(){
        return this.database;
    }

    public Database(){
        const db =  {
            username: "",
            password: "",
            name: "pizza",
            local: {
              port: 27017,
              url: function () {
                return `mongodb://localhost:${this.port}/${db.name}`;
              }
            },
            produccion: {
              url: function () {
                return process.env.MONGODB_URI;
              }
            },
            url: function () {
              const connect = this.produccion.url() || this.local.url();
              return connect;
            }
        };

        return db
    }


}