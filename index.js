let express = require('express');
let bodyParser = require('body-parser');

const route = require('./routes/index');
const db = require('./database/db-connect');
const cors = require('cors');
const port = 5555;

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/api', route);

app.listen(port, () => {
  console.log('Server running on port ' + port);
})
