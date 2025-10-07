class CarRental {
    constructor(model, licensePlate){
        this.model = model;
        this.licensePlate = licensePlate;
        this.isAvailable = true; //nese automjeti eshte i lire
    }
    rentCar(){
        if (this.isAvailable) {
             this.isAvailable = false;
             console.log(` Vetura ${this.model} u rezervua me sukses!`);
        } else {
            console.log(` Vetura ${this.model} nuk eshte e disponueshme!`);
        }
    }
    showCarInfo() {
    console.log(`Modeli: ${this.model},
       Targa: ${this.licensePlate}, Disponueshmëria: ${this.isAvailable ? "I lire" : "I rezervuar"}`);
  }
}

const veturatest = new CarRental("Audi A8", "05-247-GE");
const veturatest2 = new CarRental("BMW X5", "06-123-AB");
const veturatest3 = new CarRental("Mercedes GLE", "07-456-CD");
const veturatest4 = new CarRental("Golf 2", "05-247-GE");
// veturatest.rentCar();
// veturatest.showCarInfo();
// veturatest.rentCar();
// veturatest.showCarInfo();


veturatest4.showCarInfo();
veturatest4.rentCar();
veturatest4.rentCar();
veturatest4.showCarInfo();
// veturatest3.showCarInfo();
// veturatest3.rentCar();
// veturatest3.rentCar();
// veturatest3.rentCar();
// veturatest3.rentCar();
// veturatest3.showCarInfo();