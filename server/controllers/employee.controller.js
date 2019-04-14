//Modelo de la base de datos
const employeeBDD = require('../models/employee');

const employeeController = {};

employeeController.getEmployees = async (req, res) => {
    const employees = await employeeBDD.find();
    res.json(employees);

};

employeeController.createEmployee = async (req, res) => {
    const employee = new employeeBDD(req.body);
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
};

employeeController.getEmployee = async (req, res) => {
    const employee = await employeeBDD.findById(req.params.id);
    res.json(employee);
};

employeeController.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await employeeBDD.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({ 'status': 'Employee Updated' });
};

employeeController.deleteEmployee = async (req, res) => {
    await employeeBDD.findByIdAndRemove(req.params.id);
    res.json({ 'status': 'Employee Deleted' });
};

module.exports = employeeController;