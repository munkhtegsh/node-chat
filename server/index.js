const express = require('express');
const bodyParser = require('body-parser');
const msgController = require(__dirname + '/controllers/messages_controller');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build'));


let baseURL = '/api/messages';
app.get(baseURL, msgController.read);
app.post(baseURL, msgController.create);
app.put(`${baseURL}/:id`, msgController.update);
app.delete(`${baseURL}/:id`, msgController.destroy);


let port = 3000;
app.listen(port, console.log(`The magic is happening on port ${port}`));