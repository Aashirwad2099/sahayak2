const User = require('../Model/User');
const bcrypt = require('bcryptjs');

exports.createUser = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
  return User.create(data);
};

exports.findByPhone = (phone_number) => User.findOne({ phone_number });

exports.findById = (id) => User.findById(id);

exports.updateUser = (id, updates) => User.findByIdAndUpdate(id, updates, { new: true });

exports.comparePassword = async (user, password) => bcrypt.compare(password, user.password); 