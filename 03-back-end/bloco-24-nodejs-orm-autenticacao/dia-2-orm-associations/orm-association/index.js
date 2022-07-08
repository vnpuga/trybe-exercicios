// index.js
//vamos criar o servidor para testarmos nossas associations. Para diminuirmos a complexidade do exercício,
// não seguiremos a arquitetura MSC (lembrando que isso não é uma boa prática e deve ser evitada).
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },   
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

// ex sobre "eager loading"
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
//         // include: [{ model: Address, as: 'addresses' }],
//         include: [{
//           model: Address, as: 'addresses', attributes: { exclude: ['number'] },
//         }],
//     });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// ex sobre "lazy loading"
app.get('/employees/:id', async (req, res) => {
    try {
      const { id } = req.params;
         const employee = await Employee.findOne({ where: { id } });
  
      if (!employee)
        return res.status(404).json({ message: 'Funcionário não encontrado' });
  
      if (req.query.includeAddresses === 'true') {
        const addresses = await Address.findAll({ where: { employeeId: id } });
        return res.status(200).json({ employee, addresses });
      }
  
      return res.status(200).json(employee);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;