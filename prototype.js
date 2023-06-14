//? Inheriting properties from object instead of comming it from class

let obj = {
  fly() {
    console.log("I can fly");
  },
};

let newObj = Object.assign(obj, {name: "nithin"});

console.log(newObj.name);
newObj.fly();
