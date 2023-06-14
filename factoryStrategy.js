class PaymentMethod {
  makePayment() {
    throw new Error("Should implement makePayment");
  }
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

class ChoosePaymentMethod {
  constructor(method) {
    if (method == "debit") {
      return new DebitCardMethod();
    } else if (method == "credit") {
      return new CreditCardMethod();
    } else if (method == "upi") {
      return new UpiMethod();
    }
  }
}

let paymentMethod = new ChoosePaymentMethod("debit");
let method = new Context(paymentMethod);
method.execute();
