/*Abstract class - Can not be initiate */
/* Singleton class - can have only one instance - private constructor + static method */
abstract class Department {
  /* private readonly ID: string;
  name: string;  // default is PUBLIC*/
  static year = 2020;
  protected employees: string[] = [];
  /* private - only accessible inside the class */
  /* protected - accessible from that class and all subclasses (inheritance) */

  /* Constructor can not be static */
  constructor(protected readonly ID: string, public name: string) { //readonly - can not change after initialization
    /* this.ID = ID;
     this.name = n; */
    /* console.log(this.year) ERROR , can not access static property or method inside the class with this */
    console.log(Department.year);
  }

  static createEmployee(name: string) {
    return { name };
  }
  /* describe(this: Department) {
    console.log(`Department ${this.ID}:  ${this.name}`);
  } */

  /* ABSTRACT CLASS - need to be implemented in all subclasses*/
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    /* this.ID = '321'; ERROR - can not change it because it is readonly*/
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length, this.employees);
  }
}
/* INHERITANCE */
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');/* CALL CONSTRUCT FROM INHERITANCE CLASS */
    this.admins = admins;
  }

  describe() {
    console.log('IT department');
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  /* GETTERS - WITH GET lastReport became publicly accessible */
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  /* SETTER -  */
  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  /* OVERRIDING - Override the method from the main/inheritance class. Method name, parameters and return type must be the same */
  addEmployee(name: string) {
    if (name === 'Abu') {
      return;
    }
    /* If employees property is PRIVATE in the main class (Department) we will can ERROR */
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('Accounting department');
  }
}

/* const accounting = new Department('123', 'Accounting');
console.log(accounting);

accounting.describe(); */

/* const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // undefined - accountingCopy doesn't have a problem called name
/* with THIS : DEPARTMENT we will can error *
/* FIX: add name as property*
const accountingCopy2 = { name: 'Abu', describe: accounting.describe };
accountingCopy2.describe(); */

/* accounting.addEmployee('Abu');
accounting.addEmployee('Combe'); */

/* accounting.employees[2] = "Test"; ERROR because employees is private*/
/* accounting.name = "Test"; Will work since the property name is public */

/* accounting.printEmployeeInfo(); */

const ITAccounting = new ITDepartment('555', ['Abu']);
console.log(ITAccounting);

ITAccounting.addEmployee('Abu');
ITAccounting.printEmployeeInfo();
ITAccounting.describe()

/* const accounting = new AccountingDepartment('999', []); */
const accounting = AccountingDepartment.getInstance();
console.log(accounting)
/* console.log(accounting.mostRecentReport); */

accounting.addEmployee('Combe');
accounting.addEmployee('Abu'); // will not be added
accounting.mostRecentReport = 'Report' //SET
accounting.addReport('something went wrong');
console.log(accounting.mostRecentReport); // GET
accounting.printReports();
accounting.describe()
/* new Math() - no need
Math.pow() - static example */
/* STATIC - access without initiate */
const employee1 = Department.createEmployee('Abu static')
console.log(employee1, Department.year)