var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
// GET /skills/new 
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);

module.exports = router;
