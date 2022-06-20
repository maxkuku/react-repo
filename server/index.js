
const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of recievers
      subject: 'An email from node server',
      html: `<p>Новое сообщение с сервера Нод</p>
      <h3>Детали сообщения</h3>
      <ul>
      <li>Имя: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Сообщение: ${req.body.message}</li>
      </ul>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if(err) {
        res.status(500).send({
          success: false,
          message: 'Ошибка err, что-то не так, отправьте сообщение позже'
        });
      } 
      else {
        res.send({
          success: true,
          message: 'Спасибо за обращение, с вами свяжутся в ближайшее время',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Ошибка catch, что-то не так, отправьте сообщение позже'
    });
  }

});

app.listen(8080, () => {
  console.log('server start on port 8080');
});