class Demo7 extends ZCustomController {
    onThis_init() {
        this.custModel =  this.custModel =[{
            "nombre": "Acelga",
             "codigo": 1,
             "Precio": 990,
             "descripcion": "Las acelgas son un alimento de alto valor nutritivo y bajo aporte calórico. Contienen fibra soluble, que favorece el tránsito intestinal y previene el estreñimiento."
            ,"cantidad":"0"
            },
          {
             "nombre": "Achicoria",
             "codigo": 2,
             "Precio": 890,
             "descripcion": "La achicoria alivia el estrés e induce al sueño y a la relajación." ,"cantidad":"0"
            }, {
                "nombre": "Ají",
                "codigo": 3,
                "Precio": 790,
                "descripcion": "Administrado en compresas es utilizado como un remedio para las dolencias articulares al servir de vaso dilatador." ,"cantidad":"0"
               } ,
               {
                "nombre": "Ajo",
                "codigo": 4,
                "Precio": 990,
                "descripcion": "El ajo es un ingrediente que nos aporta una gran cantidad de propiedades medicinales que son muy interesantes para nuestro bienestar." ,"cantidad":"0"
               } ,
               {
                "nombre": "Albahaca",
                "codigo": 5,
                "Precio": 790,
                "descripcion": "Mejora el sistema inmune y respiratorio. Es antibacteriano, por lo que es excelente para eliminar el acné. " ,"cantidad":"0"
               },
               {
                "nombre": "Beterraga",
                "codigo": 6,
                "Precio": 890,
                "descripcion": "La betarraga, o también llamada remolacha, es un vegetal que ofrece muchos beneficios para la salud. Combate enfermedades de la sangre gracias a su alto contenido de hierro. "
                ,"cantidad":"0" },
               {
                "nombre": "Brócoli",
                "codigo": 7,
                "Precio": 790,
                "descripcion": "Fuente de provitamina A y vitamina C.Con potasio, calcio, fósforo, magnesio y hierro. El azufre que contiene le aporta propiedades antimicrobianas. "
                ,"cantidad":"0"},
               {
                "nombre": "Cebollín",
                "codigo": 8,
                "Precio": 990,
                "descripcion": "Según la Base de Datos Española de Composición de Alimentos, el cebollino es una gran fuente de energía dadas sus grandes dosis de proteínas y carbohidratos. "
                ,"cantidad":"0"},
               {
                "nombre": "Ciboullette",
                "codigo": 9,
                "Precio": 890,
                "descripcion": "Está compuesto de vitaminas A, B, C, minerales como calcio, potasio, yodo, fósforo, zinc, magnesio, selenio, hierro, así como también de fibra."
                ,"cantidad":"0" },
               {
                "nombre": "Cilantro",
                "codigo": 10,
                "Precio": 990,
                "descripcion": "Actúan sobre el sistema digestivo facilitando la digestión y aliviando el estreñimiento, también es eficaz contra cólicos y flatulencias."
                ,"cantidad":"0"} 
        ]// new CustomersModel(20);
            
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRows() {
        let filter = this.textSearch.value;
        return this.custModel.map(r => (this.prepareRow(r)))
    }
    prepareRow(row) {
        if (row.active) {
            delete row._rowClass;
            row.iconActive = "<i class='far fa-check-square'></i>";
        } else {
            row._rowClass = "table-danger";
            row.iconActive = "<i class='far fa-square'></i>";
        }
        return row;
    }
    onCustomersList_cellClick(row, rowIndex, field) {
        if (field == "iconActive") {
            row.active = !row.active;
            this.customersList.updateRow(rowIndex, this.prepareRow(row));
        }
    }
    onCustomersList_getDetailsConfig(row, rowIndex) {
        return {
            path:"./PEdCustomer",
            options:{
                customersModel:this.custModel,
                record:row
            }
        }
    }
    async onCustomersList_cancel(row, rowIndex) {
        await this.customersList.closeDetails(rowIndex);
    }
    async onCustomersList_saved(row, rowIndex) {
        await this.customersList.closeDetails(rowIndex);
        this.customersList.refresh();
    }
    async onCustomersList_deleted(row, rowIndex) {
        await this.customersList.closeDetails(rowIndex);      
        this.customersList.refresh();
    }

    async onNewCustomer_click() {
        await this.customersList.openNewDetails(
            "./PEdCustomer", "Add New Customer", {
                customersModel:this.custModel,
                newRecord:true
            }
        );
    }
}
ZVC.export(Demo7);