const pool = require('./db')

const getTasks = (req, res) => {
  pool.query("SELECT * FROM todolist", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows)
  })
}

const addTasks = (req, res) => {
  const { task } = req.body;
  pool.query("INSERT INTO todolist (task) VALUES ($1)", [task], (error, result) => {
    if (error) throw error;
    res.status(201).send('task added');
  })
}

const removeTasks = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM todolist WHERE id = $1", [id], (error, result) => {
    if (error) throw error;
    res.status(201).send('task deleted');
  })
}

module.exports = {
  getTasks,
  addTasks,
  removeTasks
}