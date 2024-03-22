const express = require('express');
const taskRoutes = require('./routers')

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/', taskRoutes);


app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
})
