// const button = document.querySelector('button')!;

// button.addEventListener('click', () => {
//   console.log('zzz');
// });

// function sendAnalytics(data: string) {
//   console.log(data);
// }

// sendAnalytics('dddd');

// what is Object oriented programming

// // modern Class Object
// abstract class Departments {
//   // We can hide the value with public and private in class properties. *** should remember
//   // private id: string;
//   // private name: string;
//   // Access only in the class method
//   // Modifiers: public/private
//   protected employees: string[] = [];

//   constructor(
//     private readonly id: string,
//     private readonly name: string,
//     private readonly number: number
//   ) {
//     this.number = number;
//   }

//   abstract describe(this: Departments): void;

//   addEmployee(employee: string) {
//     //Assume: validation add here.
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }

//   static createEmployee(name: string) {
//     return { name: name };
//   }
// }

// class ITDepartments extends Departments {
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error('no report');
//   }

//   set mostRecentReport(value: string) {}

//   constructor(id: string, public readonly admins: string[], reports: string[]) {
//     super(id, 'IT', 300);
//     this.lastReport = reports[0];
//   }

//   describe() {
//     console.log('zzzz');
//   }

//   showAdmins() {
//     console.log(this.admins.length);
//   }

//   addEmployees(name: string) {
//     this.employees.push(name);
//   }
// }

// const accounting = new ITDepartments('Eric Shin', ['eric', 'shin'], ['test']);

// const data = Departments.createEmployee('max');
// console.log(data);

// accounting.describe();

// accounting.addEmployee('John Doe');
// accounting.addEmployees('Eric');

// accounting.printEmployeeInformation();

// // const accountingCopy = {
// //   name: 'eric',
// //   number: 303,
// //   describe: accounting.describe,
// // };
// // accountingCopy.describe();
