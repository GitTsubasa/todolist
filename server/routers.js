const { Router } = require('express');
const controller = require('./controller');
const router = Router();

const wrapInErrorCatcher = (callback) => {
  return async (req, res, next) => {
    try {
      return await callback(req, res)
    } catch (err) {
      next(err);
    }
  }
}

router.get('/', wrapInErrorCatcher(controller.getTasks));

router.post('/', wrapInErrorCatcher(controller.addTasks));

router.delete('/:id', wrapInErrorCatcher(controller.removeTasks));

router.put('/:id', controller.updateTasks);

module.exports = router;


// let hitApi = async () => {
//   await new Promise(r => setTimeout(r, Math.random() * 1000 + 1000))
//   return "response"
// }

// let oneHundredItems = new Array(100).fill(0)

// let results = oneHundredItems.map(hitApi)