class IOSButton {
  constructor() {
    console.log("Ios button created");
  }
}

class AndroidButton {
  constructor() {
    console.log("Android button created");
  }
}

class Button {
  constructor(device) {
    if (device === "ios") {
      return new IOSButton();
    } else if (device === "android") {
      return new AndroidButton();
    }
  }
}

let button1 = new Button("ios");
let button2 = new Button("android");
