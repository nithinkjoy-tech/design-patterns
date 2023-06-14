class FetchData {
  getData() {
    return "fetched data from db";
  }
}

class FetchDataProxy {
  getData() {
    let cacheData = true;
    if (cacheData) {
      return "data from cache";
    } else {
      return new FetchData().getData();
    }
  }
}

let apiProxy = new FetchDataProxy();
let data = apiProxy.getData();
console.log(data);
