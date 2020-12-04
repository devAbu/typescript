"use strict";
class Department {
    constructor(ID, name) {
        this.ID = ID;
        this.name = name;
        this.employees = [];
        console.log(Department.year);
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length, this.employees);
    }
}
Department.year = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT department');
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(name) {
        if (name === 'Abu') {
            return;
        }
        this.employees.push(name);
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('Accounting department');
    }
}
const ITAccounting = new ITDepartment('555', ['Abu']);
console.log(ITAccounting);
ITAccounting.addEmployee('Abu');
ITAccounting.printEmployeeInfo();
ITAccounting.describe();
const accounting = AccountingDepartment.getInstance();
console.log(accounting);
accounting.addEmployee('Combe');
accounting.addEmployee('Abu');
accounting.mostRecentReport = 'Report';
accounting.addReport('something went wrong');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.describe();
const employee1 = Department.createEmployee('Abu static');
console.log(employee1, Department.year);
//# sourceMappingURL=classes.js.map