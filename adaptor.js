class EmpDataGen {
  constructor() {}

  genCSVData() {
    return "csv data";
  }
}

class EmpDataReciever {
  constructor() {}

  recieveData(data) {
    console.log(data);
  }
}

class CSVtoJSON {
  convert(data) {
    return data.toUpperCase();
  }
}

let edg = new EmpDataGen();
let edc = new CSVtoJSON();
let convertedData = edc.convert(edg.genCSVData());
let edr = new EmpDataReciever();
edr.recieveData(convertedData);
