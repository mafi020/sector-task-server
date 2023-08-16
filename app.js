require('dotenv').config('./.env');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Employee = require('./models/employees');
const Sector = require('./models/sectors');
const { employeeValidator } = require('./middlewares/employeeValidator');

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected!'));

app.get('/sectors', async (req, res, next) => {
  try {
    const response = await Sector.find().lean();
    const sectors = response.map((resp) => resp.name);
    res.status(200).json({ sucess: true, data: sectors });
  } catch (err) {
    res.status(500).json({ sucess: false, err });
  }
});

app.get('/employees', async (req, res, next) => {
  try {
    const exployees = await Employee.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ sucess: true, data: exployees });
  } catch (err) {
    res.status(500).json({ sucess: false, err });
  }
});
app.post('/employees', employeeValidator, async (req, res, next) => {
  try {
    const exployee = await Employee.create(req.body);
    res.status(201).json({ sucess: true, data: exployee });
  } catch (err) {
    res.status(500).json({ sucess: false, err });
  }
});
app.put('/employees/:id', employeeValidator, async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ _id: id }).lean();
    const updatedEmployee = await Employee.findOneAndUpdate(
      { _id: id },
      { ...employee, ...req.body },
      { new: true }
    );
    res.status(200).json({ sucess: true, data: updatedEmployee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucess: false, err });
  }
});

app.listen(5000, () => {
  console.log('Server is Running');
});
