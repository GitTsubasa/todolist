const { Router } = require('express');
const controller = require('./controller');
const router = Router();

// router.get('/', controller.getTasks);
router.get('/', controller.getTasks);

router.post('/', controller.addTasks);

router.delete('/:id', controller.removeTasks);

module.exports = router;