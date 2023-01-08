const { Router } = require("express");
const controllers = require("../controllers/student");

const router = Router();

router.get("/", controllers.getAllStudents);
router.post('/', controllers.createStudent);
router.get('/:studentId', controllers.getStudent);
router.put('/:studentId', controllers.update);
router.delete('/:studentId', controllers.delete);

module.exports = router;