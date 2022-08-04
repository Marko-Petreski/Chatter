const { default: SetAvatar } = require("../../public/chatter/src/pages/SetAvatar");
const { register, login } = require("../controllers.usersController");
const { getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", SetAvatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;