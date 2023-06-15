//? Used for property chaining

class StringMethod {
  constructor(data) {
    this.data = data;
  }
  toUpper() {
    this.data = this.data.toUpperCase();
    return this;
  }

  toLower() {
    this.data = this.data.toLowerCase();
    return this;
  }

  toArray() {
    this.data = this.data.split("");
    return this;
  }
}

let stringMethod = new StringMethod("Hello");
let ans = stringMethod.toUpper().toArray();
console.log(ans.data);
