// // Hyrje ne javascript
// console.log("Hello from JCoders");
// document.write("Hello from JCoders")
//  console.error("Hello Jcoders")
// // Alert !
// alert("Thank you for register")
// //operatoret 
// console.log("1 + 1"); //string
// console.log(1 + 1);   //int

// Variablat 
// let emri = "Bujar"
// let mosha = 38

// // console.log("Pershendetje " + emri)
// console.log(`Pershendetje ${emri}  ju keni ${mosha} vjet`);

// let emri = "Dion";
// console.log(emri);

// console.log(`Emri: ${emri1}`)

//tipet e te dhenave 
// string, number, boolean

// let emri = "Bujar";
// let age = 20;

// console.log(emri)

//operatoret
// let emri = "Bujar";
// let student = true;
// let age = 23;

// console.log(typeof emri);
// console.log(typeof student);
// console.log(typeof age);
//typeof e tregon llojin e tipit te se dhenes 

// Operatoret aritmetik 
// Kemi disa kategori të ndryshme të operatorëve:
// Operatorët aritmetik (+,-,*,/,**, %)
// Operatorët e krahasimit (<, <=, ==, !=, ===, >=, >)
// Operatorët logjik (&&, ||, !)


// Operatoret aritmetik 

// let a = 15;
// let b = 10;

// let mbledhja = a + b;
// let zbritja = a - b;
// let shumzim = a * b

// //keto dyja jane te njejta 
// console.log(mbledhja);
// console.log( a + b);

// kushtezimet

// let cmimi = 2;

// let kilogram = prompt("Sa kilogram molla deshironi te merrni");

// if (kilogram > 0) {
//     let shuma = cmimi * kilogram
//     document.write(`Ju duhet te paguani ${shuma} euro`)
// }

//Kushtezimet me shume opsione
// 0 - 29 (1), 30 - 49 (2), 50-69 (3), 70-89 (4), 90-100 (5)

// let piket = prompt("Sa eshte numri i pikeve ne test? ");

// if (piket < 30 && piket >= 0) {
//     document.write(`Ju keni ${piket} pike dhe keni noten 1`)
// } else if (piket >= 30 && piket < 50  ) {
//     document.write(`Ju keni ${piket} pike dhe keni noten 2`)
// }
// else if (piket >= 50 && piket < 70  ) {
//     document.write(`Ju keni ${piket} pike dhe keni noten 3`)
// }
// else if (piket >= 70 && piket < 90  ) {
//     document.write(`Ju keni ${piket} pike dhe keni noten 4`)
// }
// else if (piket >= 90 && piket < 100  ) {
//     document.write(`Ju keni ${piket} pike dhe keni noten 5`)
// }
// else {
//     document.write(`Keni shkruar piket gabim, koncentrohu heren tjeter`)
// }



// 0-50 (failed), 50-55(passed), 56-65 (average), 66-80 (Good), 81-100 (Excellent)
// let paga = prompt("Sa eshte paga juaj?")

// if (paga >= 150 && paga <= 300) {    
//     document.write(paga * 1.5)
// }
// else if (paga >= 301 && paga <= 500) {
//     document.write(paga * 1.2)
// }
// else if (paga >= 501 && paga <= 800) {
//     document.write(paga * 1.1)
// }
// else if (paga >= 801 && paga <= 1000) {
//     document.write(paga * 1.05)
// }
// else{
//     document.write("Ju nuk perfitoni ngritje")
// }

 //Funksionet pa parametra (qe nuk kane parametra)
// function pershendetje(){
//     document.write("Pershendetje nga Bujari")
// } 
// pershendetje()

// function mesazhi(){
//     alert("Pershendetje")
// } 
// mesazhi()

//Funksion me parametra 

// function mbledhja(a, b) {
//     let result = a + b 
//    document.write(result)
// }

// mbledhja(10, 8)

// function shumzimi(x, y, z){
//     let rezultati = x * y * z
//     document.write(rezultati)
// }
// shumzimi(4, 2, 3)

// function tedhenat(emri, mbiemri, mosha){
//  document.write(`Une jam ${emri} ${mbiemri} dhe jam ${mosha} vjeq`)
// }
// tedhenat("Bujar", "Bushi", 23)


// function shuma(a, b) {
//     return a + b
// }
// document.write(shuma(5, 4))

//funksion me parametra 
// function pjestimi(x, y){
//     let rezultati = x / y 
//     alert(rezultati)
// }

// pjestimi(6, 3);

// SetInterval dhe SetTimeout
// function hello(){
//     document.write(`Hello from JCoders `)
// }
// //1 sekond = 1000 milisekonda
// // setInterval(hello, 2000);

// setTimeout(hello, 4000);

// LISTAT = Shkruhen me [], 
// elementet e listes ndahen me ,

// let fruits = ["apple", "Kiwi", "Banana"];
// console.log(fruits);
// console.log(fruits[4])
// Indeksi e elementeve te vargut fillon prej 0 dhe ju
// qasemi keshtu console.log(fruits[0]);

// .length na tregon per numrin e elementeve ne varg 
// console.log(`Ne liste kemi ${fruits.length} fruta`);
//.push - e shton 1 element ne fund te vargut
// fruits.push("Grape");

// .pop e largon elementin e fundit te vargut
// fruits.pop()
 // .shift - e largon elementin e pare te vargut
//  fruits.shift()
// console.log(fruits);

// funksion qe kontrollon se a eshte numer 

// function kontrollo(vlera){
//     if (isNaN(vlera)) {
//         console.log(`${vlera} nuk eshte numer`)
//     } else {
//         console.log(`${vlera} eshte numer`)
//     }
// }
// kontrollo(500);
// kontrollo("Javascript")

// ||
// (paga == 12 || paga == 300 || muaji == 12)

// function gjejstinen(muaji){
//     if (muaji < 1 || muaji > 12) {
//         document.write("Keni shkruar numrin gabim")
//     }
//     else if(muaji == 12 || muaji == 1 || muaji == 2){
//         document.write("Stina e Dimrit")
//     }
//     else if(muaji == 3 || muaji == 4 || muaji == 5){
//         document.write("Stina e Pranveres")
//     }
//     else if(muaji == 6 || muaji == 7 || muaji == 8){
//         document.write("Stina e Veres")
//     }
//     else{
//         document.write("Stina e Vjeshtes")
//     }
// }
// let muaji = prompt("Shkruani numrin e muajit nga 1-12:");
// alert(gjejstinen(parseInt(muaji)))

// Unazat - loops  (for, while, do-while)

// let i;
// for(i = 0; i <= 20; i++) {
//    console.log("Liftin weights" + i)
// }
 // i+= 6 (Ndryshohet intervali per 6 ), ++ ndryshohet per 1
 
//  for(let i = 10; i >= 2; i--) {
//    console.log("Liftin weights" + i)
//  }

// let i;
// for(i = 1; i <= 20; i++) {
//     if (i == 5) {
//         break;
//     }
//    console.log("Lifting weights" + i)
// }

// let i;
// for(i = 1; i <= 20; i++) {
//     if (i == 5 ) {
//         continue;
//     }
//    console.log(i)
// }

// let i;
// while (i == 5) {
//     console.log(i)
//     i++;
// }

// 1. Me for te printohen numrat prej 0 deri 20


// let i;
// for (fillimi,kriteri, intervali  )
// for(i = 1; i <= 20; i++){
//     document.write(i + ", ")
// }

// 2. Me for te printohen numrat prej 20 deri 1 

// for(i = 20; i >= 1; i--){
//     document.write(i + ", ")
// }

// 3. Me for te printohen numrat prej 1 deri 30 (duke shtu nga 2)

// for(i = 1; i <= 30; i+=2){
//     document.write(i + " ")
// }

//Te shfaqet me . nese e arrin numrin e fundit 
// for(i = 1; i <= 20; i++){
//     if (i == 20) {
//         document.write(i + ". ")  
//     }
//     else
//     document.write(i + ", ")
// }

// while - ne fillim deklarohet variabla
// derisa (arrihet ky kusht) {
//     beje kete veprim;
//intervalin se sa shpesh me ndodh 
// }
// let i = 1; //deklarimi
// while (i <= 5) {
//     document.write(i);
//     i++;
// }

// Të printohen numrat tek nga rangu 3 deri në 29 
// duke përdorur for loop.
// for( let i = 3; i <=30; i+=2) {
//     document.write(i + " ")
// }

// 1. Variabla let 
// 2. arrays (vargjet) 
// let students = ["Bujar", "Eris", "Ema", "Tuana"]

// Objekti

// let person = {
//     emri: "Eris",
//     mbiemri: "Aliu",
//     mosha: 18,
//     moduli: "Javascript"
// }
//  console.log(person)
 

// Thirrja e nje key te caktuar (me pik)
// console.log(person.moduli);

// let person = {
//     emri: "Eris",
//     mbiemri: "Aliu",
//     mosha: 18,
//     moduli: "Javascript",
//     emriplote: function(){
//         alert(this.emri + " " + this.mbiemri)
//     }
// }
//     person.emriplote()


 //shtimi i nje key/value
//  person.shkolla = "Ismail Qemaili"
//  console.log(person)

//fshira e nje key/value

// delete person.mosha


//DOCUMENT OBJECT MODEL 
// let titulli = document.querySelector('h1')

// console.log(titulli);
// document.querySelector('body').style.backgroundColor="red"
//Ushtrime me DOM
// function hello(){
//     alert("Pershendetje")
// }

// let car = {
//     type: 'mercedes',
//     year: 2002,
//     country: 'Germany'
// }

// let person = {
//     emri: "Arti", // veti (te dhena)
//     mosha: 25,
//     profesioni: "inxhinier",
//     pershendetje: function(){
//         console.log(`Pershendetje, une jam ${this.emri} dhe jam ${this.profesioni}`)
//     }
// }

// person.pershendetje();

// Tek objektet që i krijuam zëvendësoni propertyn mosha me vitilindjes 
// dhe përmes metodës provoni të kthehet si rezultat mosha nga viti aktual.

// let person = {
//     emri: "Arti", // veti (te dhena)
//     mosha: 25,
//     profesioni: "inxhinier",
//     pershendetje: function(){
//         console.log(`Pershendetje, une jam ${this.emri} dhe jam ${this.profesioni}`)
//     }
// }
 

//Krijimi i objekteve permes keywordit New 

// function Person(First, Last, Age){
//     this.first = First,
//     this.Last = Last, 
//     this.Age = Age
// }

// const John = new Person("John", "Doe", 25);

// console.log(John)

//Task
// Krijoni një objekt student me vetitë emri,
//  mosha, dhe nota. 
// Shtoni një metodë updateNota() që përditëson notën dhe
//  një metodë infoStudent() që kthen informacionin për studentin.

// let student = {
//     emri: "Bujar",
//     mosha: 23,
//     nota: 2,

//     updateNota(notaere){
//         this.nota = notaere; 
//      },
//      infoStudent(){
//         console.log(`Emri: ${this.emri}, mosha: ${this.mosha}, nota: ${this.nota}`)
//      }
// }

//     student.updateNota(5);

//     console.log(student.infoStudent());




// let Student = {
//     emri: "Olti",
//     mbiemri: "Hashani",
//     nota: 3,

//     updateNota(notaRe) {
//         this.nota = notaRe;
//     }
// };

// console.log(Student.nota); 

// Student.updateNota(5);

// console.log(Student.nota);

//Klasat 
//Klasat perdoren per te krijuar objekte me lehte 
// class Automjeti {
//     constructor(marke, ngjyre, viti) { //Konstruktori paraqet pronesite  
//         this.marke = marke, 
//         this.ngjyre = ngjyre,
//         this.viti = viti
//     }
//      vendoosNgjyre(ngjyre){
//         this.ngjyre = ngjyre
//      }
     
//      infoauto(){
//         console.log(`Marka: ${this.marke}, ngjyra: ${this.ngjyre}, viti: ${this.viti}`)
//      }
// }

// let vetura = new Automjeti ("Audi", "e kuqe", 2010);
// let vetura2 = new Automjeti ("BMW", "e zeze", 2004);
 
// //ndryshimi i ngjyres se vetura2

// vetura2.vendoosNgjyre("e bardhe")

// console.log(vetura2);
// console.log(vetura.infoauto());


//Detyre kontrolluese - Rezervimi i dhomave 


// class Room {
//    constructor(roomnumber, type, isAvailable) { //Konstruktori paraqet pronesite  
//        this.roomnumber = roomnumber, 
//        this.type = type,
//        this.isAvailable = isAvailable
//    }
  
    
//     info(){
//        console.log(`Room number: ${this.roomnumber}, Lloji: ${this.type}, E gatshme: ${this.viti}`)
//     }
// }


// class Room {
//    constructor(roomNumber, type, isAvailable) {
//        this.roomNumber = roomNumber;
//        this.type = type;
//        this.isAvailable = isAvailable;
//    }

//    reserveRoom() {
//        if (this.isAvailable) {
//            this.isAvailable = false;
//            console.log(`Room ${this.roomNumber} has been reserved.`);
//        } else {
//            console.log(`Room ${this.roomNumber} is already reserved.`);
//        }
//    }

//    showRoom() {
//        console.log(`Room Number: ${this.roomNumber}, Type: ${this.type}, Available: ${this.isAvailable ? "yes" : "no"}`);
//    }
// }

// let room1 = new Room(2, "1 Bedroom", false);
// let room2 = new Room(5, "3 Bedrooms", true);
   

// room1.showRoom();

    //Prototipet

// let Person = function(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// Person.prototype.Sayhi() = function(){
//     console.log(`Hello${this.firstname} ${this.lastname}`)
// }

// let dion = new Person("Dion", "Kryeziu");

// console.log(dion)
// dion.Sayhi()

//Metoda Object.create() krijon nje objekt te ri dhe prototipin e saj

// const Persondetails = {
//     pershkrimi(){
//         console.log(`${this.emri} lindi ne vitin ${this.viti}`)
//     }
// }

// const shtoperson = function(emri, viti){
//     const personi = Object.create(Persondetails);
//     personi.emri = emri;
//     personi.viti = viti;
//     return personi;
// }

// const dion = shtoperson("Dion", 2007);
// const eris = shtoperson("Dion", 2010);

// dion.pershkrimi()


//GET & SET
 // GET
// let person = {
//     name: 'Ardi',
//     surname: 'Krasniqi',

//     get fullname(){
//         return this.name + " " + this.surname;
//     }
// }
// console.log(person.fullname)

//SET

// let person = {
//     name: "",

//     set fullname(vlera){
//         this.name = vlera;
//     }
// }
// person.fullname = 'Uliks Sadiku'

// console.log(person.name)



//Menaxhimi i llogaris bankare / deposit / withdraw 
// class BankAccount {
//     constructor(accountNumber, balance) {
//       this.accountNumber = accountNumber;
//       this.balance = balance;
//       console.log(`Acc Number: ${accountNumber}`);
//       console.log(`Opening Balance: $${balance}`);    
//     }
//     deposit(amount) {
//       this.balance += amount;
//       console.log(`Deposited: $${amount}`);
//     }
//     withdraw(amount) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`Withdrawn: $${amount}`);
//       } 
//       else 
//       {
//         console.log(`Want to withdrawn: $${amount}`);
//         console.log('Insufficient balance');
//       }
//     }
//     displayBalance() {
//       console.log(`Account Balance: $${this.balance}`);
//     }
//   }
//   // Create an instance of the BankAccount class
//   const account = new BankAccount('SB-123', 1500);
//   // Deposit money into the account
//   account.deposit(500);
//   // Withdraw money from the account
//   account.withdraw(400);
//   // Display the account balance
//   account.displayBalance();
//   // Withdraw money from the account
//   account.withdraw(1800);
//   // Display the account balance
//   account.displayBalance();
  

// Krijo nje klas per drejtkendshin  dhe pastaj metodat 
// per llogaritjen e siperfaqes dhe perimetrit

// class Drejtkendshi {
//   constructor (gjatesia, lartesia) {
//     this.gjatesia = gjatesia;
//     this.lartesia = lartesia;
//   }
//   siperfaqja(){
//     return ` Siperfaqja e drejtkendshit: ${this.gjatesia * this.lartesia}`
//   }
//  //perimetri()
// }

// const figura1 = new Drejtkendshi(40, 20);

// console.log(figura1.siperfaqja())

// 1 klas per puntor qe ka 2 pronesi (emri, paga)
// metoda per pagen vjetore 
// metoda nese puntori merr bonus 20%  -> paga + 20% 

// class Puntori {
//   constructor(emri, paga) {
//       this.emri = emri;
//       this.paga = paga;
//   }
//   pagaVjetore() {
//       return this.paga * 12;
//   }
//   pagaMeBonus() {
//       return this.paga + (this.paga * 0.20);
//   }
// }

// const punetori1 = new Puntori("Olti", 500);

// console.log("Emri", punetori1.emri);
// console.log("Paga mujore", punetori1.paga);
// console.log("Paga vjetore", punetori1.pagaVjetore());
// console.log("Paga me bonus 20%", punetori1.pagaMeBonus());

 

// 1. Krijoni një klasë JavaScript të quajtur "Person" që përmban
//  një konstruktor   për inicializimin e emrit, moshës dhe shtetit.
// Përfshini një metodë brenda klasës që shfaq të dhënat e personit.
// Pastaj, krijoni dy instanca të klasës "Person" me shembuj të
//  ndryshëm dhe shfaqni detajet e tyre.

// class Person{
//    constructor(emri, mosha, shteti){
//     this.emri = emri;
//     this.mosha = mosha;
//     this.shteti = shteti;
//    }

//    Personi(){
//     return `${this.emri}  ${this.mosha} ${this.shteti}`
//    }
// }
// const person1= new Person("Enea", 14, "Kosove")  
// console.log(person1.Personi())

//Enkapsulimi 
// ENKAPSULIMI:perfshin variablat,metodat qe nuk mund te zberthehen nga perdoruesi.
// Ofron mbrojtje me te mire te dhenave duke grupuar te gjitha mbrenda objektit,zvogelon 
//rrezikun per shtimin e ndryshimeve te panevojshme.

// let employee = {
//   basesalary: 500,
//   overtime: 10,
//   rate: 20,
//   getWage: function () {
//        return this.basesalary + (this.overtime * this.rate);
//   }

// };
// console.log(employee.getWage());

//Abstraksioni
 //Perdoret per te fshehur detajet e panevojshme dhe per te shfaqur vetem ato qe jane te nevojshme
// function createStudent(name, score) {
//     return {
//         name: name,
//         score: score,
//         hasPassed: function () {
//             if (this.score >= 50) {
//                 console.log(`${this.name} has passed the exam.`);
//             } else {
//                 console.log(`${this.name} has not passed the exam.`);
//             }
//         }
//     };
// }

// let student1 = createStudent("Enea", 60);
// let student2 = createStudent("Arti", 40);

// student1.hasPassed(); // Enea has passed the exam.
// student2.hasPassed(); // Arti has not passed the exam.

//Trashegimia

// class Animals {
//     constructor (name){
//        this.name = name;
//     }
  
  
//   animalName() {
//      return`${this.name}`;
//   }
//   }
  
//   class Pets extends Animals{
//     constructor(name, habitat) {
//       super(name);
//       this.habitat = habitat;

//       console.log(`Pet class is created`);
//     }
//     getHabitat(){
//         return`${this.name} lives in ${this.habitat}.`;
//       }
//   }
//   class WildAnimals extends Animals{
//     constructor(name, habitat){
//      super(name);
//      this.habitat = habitat;
//         console.log(`WildAnimals class is created`)
//     }
//     getHabitat(){
//       return`${this.name} lives in ${this.habitat}.`;
//     }
    
//  }
//  const myPet = new Pets(`Cat`);
//  console.log(myPet.animalName());
//  const lion = new WildAnimals (`Lion`, `Savannah`);
// //  console.log(lion.animalName());
// //  console.log(lion.getHabitat());

// const mysecondPet = new Pets(`Cat`, "house");
// console.log(mysecondPet.getHabitat());

// Detyra 2: Definoni një klasë të quajtur Person që ka:
// Një konstruktor që pranon një argument name dhe e ruan atë si një pronë.
// Një metodë getName() që kthen një string në formatin: `This person's name is ${this.name}.`
// Krijimi i Klasës child: Student: Student trashëgon nga Person, që do të thotë se ajo merr pronën name dhe metodën getName nga klasa prind.
// Student ka edhe një pronë shtesë grade që përfaqëson notën e studentit dhe një metodë getGrade që kthen këtë informacion.
//  Krijimi i një Instance të Student:
// krijojmë një instancë të Student me emrin "Alban" dhe notën "A".
// Metoda getName kthen emrin e studentit nga klasa prind Person.
// Metoda getGrade kthen notën e studentit, e cila është specifike për klasën Student.

// class Personi {
//     constructor(name) {
//         this.name = name;
//     }
//     getName(){
//         return  `this persons name is ${this.name}`
//     }
// }
// class Student extends Person {
//     constructor(name, grade){
//         super(name)
//  this.grade = grade
//     }
    
//     getGrade(){
//         return `${this.name} has a grade of ${this.grade}`
//     }
// }
//  const student1 = new Student("Alban" , "A");
//  console.log(student1.getName());
//  console.log(student1.getGrade());

//Polimorfizmi trashegon metoden 
// class Device {
//     turnOn(){
//         console.log("The device is now turned on")
//     }
// }
// class Television {
//     turnOn(){
//         super.turnOn();
//         console.log("The TV is displaying the last channel")
//     }
// }
// class Radio extends Device{
//     turnOn(){
//         super.turnOn();
//         console.log("The radio is displaying the last channel")
//     }
// }
// const myTV = new Television();
// myTV.turnOn();
// const myRadio = new Radio;
// myRadio.turnOn(); 

//Ushtrime Trashegimia 
// class Punonjesi {
//   constructor(emri, pozita) {
//     this.emri = emri;
//     this.pozita = pozita;   
//   }

//   pershendetje() {
//     console.log(`Përshëndetje! Unë jam ${this.emri} dhe jam ${this.pozita}.`);
//   }
// }

// class Menaxheri extends Punonjesi {
//   miratimiProjekteve() {
//     console.log(`${this.emri} ka miratuar një projekt.`);
//   }
// }

// const menaxher1 = new Menaxheri("Dioni", "Menaxher Projekti");

// menaxher1.pershendetje();
// menaxher1.miratimiProjekteve();



//  Polimorfizmi:  Të krijojmë një program që demonstron konceptin e polimorfizmit duke llogaritur sipërfaqen e formave të ndryshme duke përdorur një metodë nga klasa prind.
// Krijohet klasa Shape dhe metoda calculateArea(). 
// Te krijohen 2 nënklasa te trasheguara nga klasa Shape:  Rectangle (Drejtkëndëshi), dhe Triangle (Trekëndëshi)
// Përmes konstruktorit ti paraqesim parametrat që na duhen për sipërfaqet.
// Pastaj i testojmë rezultatet në konsolë 


// class Shape {
//   calculateArea() {
//     console.log("Calculating Area of shapes...");
//   }
// }

// class Rectangle extends Shape {
//   constructor(gjatësia, gjërësia) {
//     super();
//     this.gjatësia = gjatësia;
//     this.gjërësia = gjërësia;
//   }

//   calculateArea() {
//     const area = this.gjatësia * this.gjërësia;
//     console.log(`Sipërfaqja e drejtkëndëshit është: ${area}`);
//   }
// }

// class Triangle extends Shape {
//   constructor(baza, lartesia) {
//     super();
//     this.baza = baza;
//     this.lartesia = lartesia;
//   }

//   calculateArea() {
//     const area = 0.5 * this.baza * this.lartesia;
//     console.log(`Sipërfaqja e trekëndëshit është: ${area}`);
//   }
// }

// const forma1 = new Rectangle(5, 3);
// const forma2 = new Triangle(4, 6);

// forma1.calculateArea();
// forma2.calculateArea();

// Detyre: Rezervimi i Automjeteve
// Krijoni një klasë CarRental që përfaqëson një automjet për qira. Kjo klasë duhet të ketë vetitë:
// model (p.sh., "Toyota Corolla"),
// licensePlate (p.sh., "ABC123"),
// isAvailable (për të treguar nëse është i lirë për qira).
// Shtoni metodat:
// rentCar() për të rezervuar automjetin nëse është i lirë.
// showCarInfo() për të shfaqur informacionin e automjetit, duke përfshirë statusin nëse është i lirë apo i rezervuar.
// Kërkesë shtesë: Nëse automjeti është i rezervuar, rentCar() duhet të shfaqë një mesazh që automjeti nuk është i disponueshëm.

//Strukturimi i nje projekti ne OOP 
class BankAccount {
    constructor(accountNumber,balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log (`A/c No .: ${accountNumber}`);
        console.log (`Opening Balance: $${balance}`);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`)
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        }
        else
        {
            console.log(`Want to withdrawn: $${amount}`);
            console.log(`Insufficient balance`);
        }
    }
    displayBalance() {
        console.log(`Account Balance: $${this.balance}`);
    }
}
//Krijimi i nje objekti te klases BankAccount
const account = new BankAccount(`123`,1500);
//Funksioni per te deponuar parate
account.deposit(500);
//Funksioni per te shikuar gjendjen aktuale
account.displayBalance();
//Funksioni per te terhequr para
account.withdraw(400);
//Funksioni per te shikuar gjendjen aktuale
account.displayBalance();
