class PaymentMethod {
  makePayment() {}
}

class DebitCardMethod extends PaymentMethod {
  makePayment() {
    console.log("payment made through DebitCard");
  }
}

class CreditCardMethod extends PaymentMethod {
  makePayment() {
    console.log("payment made through CreditCard");
  }
}

class UpiMethod extends PaymentMethod {
  makePayment() {
    console.log("payment made through UPI");
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  execute() {
    this.strategy.makePayment();
  }
}

let method = new Context(new CreditCardMethod());
method.execute();
