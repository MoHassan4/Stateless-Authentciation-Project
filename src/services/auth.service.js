const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const registerUser = async (userName, password) => {
  const existingUser = await User.findOne({ userName });

  if (existingUser) {
    throw Error("User is already existed");
  }

  const newUser = new User({
    userName,
    password,
  });

  return await newUser.save();
};

const loginUser = async (userName, password) => {
  const user = await User.findOne({ userName });

  const isMatched = await User.comparePassword(password);

  if (!user || !isMatched) {
    throw Error("Not auhorized user");
  }

  const token = jwt.sign(
    { userId: user._id, userName: user.userName },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return [user, token];
};

module.exports = { registerUser, loginUser };
