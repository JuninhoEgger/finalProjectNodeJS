const Employee = require("../models/employee");

module.exports = class EmployeeController {
    static async showEmployees(req, res) {
            //torno o método assíncoro para permitir eu aguardar carregar os dados do banco
            // com o 'await'
            const employees = await Employee.getEmployees()

            //passando para tela os dados
            res.render("employees/all", { employees });

        }
        //método para abrir a tela para cadastro de empregado
    static createEmployee(req, res) {
            res.render('employees/create')
        }
        //método para salvar no banco de dados um empregado
    static createEmployeePost(req, res) {
        const name = req.body.name
        const email = req.body.email
        const birthDate = req.body.birthDate
        const salary = req.body.salary
        const department = req.body.department

        const employee = new Employee(name, email, birthDate, salary, department)

        employee.save()

        res.redirect('/')
    }
}