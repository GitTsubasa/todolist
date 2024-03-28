const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routers')
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/', taskRoutes);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Error caught in global' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
})
