const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

// register route
router.post("/register", async (req, res) => {
  // 1-validate the user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // 2-Check for the email in the db
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already in the DB...");

  // 3-hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass
  });
  try {
    const userSaved = await newUser.saved();
    res.status(201).send(userSaved);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

// login route
router.post("/login", async (req, res) => {
  // 1-validate the user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // 2-Check for the email in the db
  const emailExist = await User.findOne({ email: req.body.email });
  if (!emailExist) return res.status(400).send("Email does not exits...");

  // 3- check if the password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password...");

  res.send("Logged in!");
});

module.exports = router;
