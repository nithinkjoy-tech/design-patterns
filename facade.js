class OrderValidation {
    validate(){
        console.log("order validated")
    }
}

class MakePayment {
    payment(){
        console.log("payment done")
    }
}


class OrderProduct {
    makeOrder(){
        new OrderValidation().validate();
        new MakePayment().payment()
    }
}

let OP=new OrderProduct();
OP.makeOrder()