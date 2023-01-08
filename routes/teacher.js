const { Router } = require("express");
const controllers = require("../controllers/teacher");

const router = Router();

router.get("/", controllers.get);
router.post('/', controllers.create);

module.exports = router;