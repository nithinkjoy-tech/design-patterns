class DBConnection {
  constructor() {
    if (typeof DBConnection.instance==="object") {
      console.log("already has istance");
      return DBConnection.instance;
    }
    DBConnection.instance = this
    console.log("instance created")
    return this;
  }
}

let db1 = new DBConnection()
let db2 = new DBConnection()
let db3 = new DBConnection()
