// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    // Employee.hasOne(models.Address, 
    //   { foreignKey: 'employeeId', as: 'addresses' });
    // 1:1 um empregado tem um endereco
    // Cada employee possui um address, assim como cada address pertence a um employee.
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
    // cada employee possuísse vários address 
  };

  return Employee;
};