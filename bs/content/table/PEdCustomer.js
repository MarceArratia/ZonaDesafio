
class PEdCustomer extends ZCustomController {
    
    onThis_init(options) {
        this.paso=[];
        this.errorMsg.hide();

        this.isNewRecord = options.newRecord;
        this.record = options.record;
        if (this.isNewRecord) {
            this.edActive.checked = true;
            this.cmdDelete.hide();
        } else {
            this.edId.value = this.record.codigo;
            this.edId.disable();
            this.edName.value = this.record.nombre;
            this.edCantidad.value=this.record.cantidad;
            this.edActive.checked = this.record.active;
        }
    }

    onCmdSave_click() {
        this.errorMsg.hide();
        let nombre=this.edName.value.trim();
        let cantidad=this.edCantidad.value;
        this.paso.push(nombre,cantidad);
        //this.carroModel.saveCarro(this.paso);
    }
}
ZVC.export(PEdCustomer);