const express = require("express");
const User = require("../models/userModel");
const {generateToken} = require("../middlewares/authMiddleware");
const bcrypt = require("bcrypt");

const allUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Something wrong to fetch all users" });
  }
};

const addNewUser = async (req, res) => {
  try {
    let { user_name, user_password, user_email } = req.body;
    let round = 10;
    let hashedPassword = await bcrypt.hash(user_password, round);
    let user = await User.create({
      user_name,
      user_password: hashedPassword,
      user_email,
    });
    res.status(200).json({ user_name, user_email });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Something wrong to addnewuser" });
  }
};

const userLogin = async (req, res) => {
  const { user_email, user_password } = req.body;
  try {
    let user = await User.findOne({ user_email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatched = await bcrypt.compare(user_password, user.user_password);

    if (isMatched) {
      const token = generateToken(user._id)
      return res.status(200).json({ message: "Login successful",token:token });
    } else {
      return res.status(400).json({ message: "Invalid credential" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Something wrong to login." });
  }
};
module.exports = { allUsers, addNewUser, userLogin };
