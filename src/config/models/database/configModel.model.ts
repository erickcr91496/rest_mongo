export default class ModelDatabase{
    constructor(
       public username: string,
       public password: string,
       public name: string,
       public local: any,
       public produccion: any,
       public url: Function
    ){}
}