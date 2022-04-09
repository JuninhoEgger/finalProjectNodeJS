const conn = require('../db/conn')

class Employee {
    constructor(name, email, birthDate, salary, department) {
            this.name = name
            this.email = email
            this.birthDate = birthDate
            this.salary = salary
            this.department = department
        }
        //método que salva no banco de dados
    save() {
        const employee = conn.db().collection('employees').insertOne({
            name: this.name,
            email: this.email,
            birthDate: this.birthDate,
            salary: this.salary,
            department: this.department,
        })

        return employee
    }
    static getEmployees() {
        const employees = conn.db().collection('employees').find().toArray()

        return employees
    }
}

module.exports = Employee