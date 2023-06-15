class OrderState {
  updateState() {}
}

class CreatedState extends OrderState {
  updateState(order) {
    order.setState(new ConfirmedState());
  }
}

class ConfirmedState extends OrderState {
  updateState(order) {
    console.log("order created");
    order.setState(new ShippedState());
  }
}

class ShippedState extends OrderState {
  updateState(order) {
    console.log("order confirmed");
    order.setState(new DeliveredState());
  }
}

class DeliveredState extends OrderState {
  updateState() {
    console.log("order shipped");
    console.log("order delivered");
  }
}

class Order {
  constructor() {
    this.state = new CreatedState();
  }

  setState(newState) {
    this.state = newState;
  }

  updateState() {
    this.state.updateState(this);
  }
}

const order = new Order();
order.updateState(); // Output: Order created
order.updateState(); // Output: Order confirmed
order.updateState(); // Output: Order shipped
order.updateState(); // Output: Order delivered
