
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

const veturatest = new CarRental("Audi A4", "05-247-GE");
// veturatest.rentCar();
veturatest.showCarInfo();
veturatest.rentCar();
veturatest.showCarInfo();
