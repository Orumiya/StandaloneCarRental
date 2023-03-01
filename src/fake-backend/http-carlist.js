const express = require('express');
const DATA = require('./data.js');
const carServices = express();

carServices.use(express.json());

carServices.get('/api/cars', (req, res) => {
  res.status(200).contentType('application/json').send(
    DATA.cars
  );
});

carServices.post('/api/cars/add', (req, res) => {
  newCar = req.body;
  if (newCar) {
    const id = Date.now();
    DATA.cars.push({ ...newCar, id });
    console.log('fake backend data after post', DATA.cars);
    res.status(200).contentType('application/json').send(
      JSON.stringify({ id })
    );

  } else {
    res.status(400).contentType('application/json').send(
      JSON.stringify({
        errors: [
          {
            errorCode: 'ERR0002',
            message: 'Invalid data'
          }
        ]
      }));
  }

});

module.exports = carServices;
