const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  email: String,
  password: String,
  points: Number,
  badges: [String],
  profile: {
    name: String,
    age: Number,
    income: Number,
    goals: [String],
    balance: Number,
    investment_portfolio: [
        {
      asset_type: String,
      asset_name: String,
      quantity: Number,
      value: Number
    }
]
  },
  transactions: [{
    Name: String,
    amount: Number,
    date: Date,
  }],
});


const User = mongoose.model('User', userSchema);
module.exports = User;

