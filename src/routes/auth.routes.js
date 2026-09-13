const router = require("express").Router();

const { signUp, signIn } = require("../services/auth.service");

router.post("/signUp", signUp);

router.post("/signIn", signIn);

module.exports = router;
