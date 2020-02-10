export default class PizzaServiceModel{
    constructor(
        public Agregar: Function,
        public Listar: Function,
        public Actualizar: Function,
        public Eliminar: Function,
        public Agregar_Ingredients: Function,
        public Eliminar_Ingredients?: Function
    ){}
}