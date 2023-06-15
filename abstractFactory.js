class Product {
  getChair() {
    throw new Error("This should be implemented");
  }

  getTable() {
    throw new Error("This should be implemented");
  }
}

class NormalProduct extends Product {
  getChair() {
    console.log("this is normal chair");
  }

  getTable() {
    console.log("this is normal table");
  }
}

class DesignProduct extends Product {
  getChair() {
    console.log("this is design chair");
  }

  getTable() {
    console.log("this is design table");
  }
}

let finalProduct = new NormalProduct();

finalProduct.getChair();
finalProduct.getTable();
