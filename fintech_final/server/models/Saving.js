const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

// Middleware to strip the time part and keep only the date
savingSchema.pre('save', function(next) {
  if (this.date) {
    this.date = new Date(this.date.toDateString()); // Keep only the date part
  }
  next();
});

const SavingModel = mongoose.model('SavingModel', savingSchema);

module.exports = SavingModel;