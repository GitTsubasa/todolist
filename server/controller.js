const pool = require('./db')

const getTasks = async (req, res) => {
  const results = await pool.query("SELECT * FROM todolist")
  res.status(200).json(results.rows);
}

// const getTasks = (req, res) => {
//   return pool.query("SELECT * FOM todolist", (err, res) => {
//     if (err) throw err
//     res.status(200).json(results.rows);
//   })
// }

const addTasks = async (req, res) => {
  const { task } = req.body;
  try {
    await pool.query("INSERT INTO todolist (task) VALUES ($1)", [task])
    res.status(201).json('task added');
  } catch (error) {
    res.status(500).json({error: 'Error in addTasks'})
  }
}

const removeTasks = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    pool.query("DELETE FROM todolist WHERE id = $1", [id])
    res.status(201).json('task deleted');
  } catch (error) {
    res.status(500).json({error: 'Error in addTasks'})
  }
}

/*
const removeTasks = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM todolist WHERE id = $1", [id], (error, result) => {
    if (error) throw error;
    res.status(201).json('task deleted');
  })
}
*/

const updateTasks = async (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  await pool.query("SELECT * FROM todolist WHERE id = $1", [id])
  await pool.query("UPDATE todolist SET task = $2 WHERE id = $1", [id, task])
  res.status(200).json('task updated');
}

/*
const updateTasks = (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  pool.query("SELECT * FROM todolist WHERE id = $1", [id], (error, result) => {
    if (error) throw error;
    pool.query("UPDATE todolist SET task = $2 WHERE id = $1", [id, task], (error, result) => {
      if (error) throw error;
      res.status(200).json('task updated');
    })
  })
}
*/

/*
const updateTasks = (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  pool.query("SELECT * FROM todolist WHERE id = $1", [id], (error, result) => {
    if (error) throw error;
  })
  pool.query("UPDATE todolist SET task = $2 WHERE id = $1", [id, task], (error, result) => {
    if (error) throw error;
    res.status(200).json('task updated');
  })
}
*/

module.exports = {
  getTasks,
  addTasks,
  removeTasks,
  updateTasks
}