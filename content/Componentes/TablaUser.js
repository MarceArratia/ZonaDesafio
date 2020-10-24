class TablaUser extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(8)
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRows() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomers(filter);
    }
}
ZVC.export(TablaUser);