const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SavingModel = require('./models/Saving'); // Assuming you have a Saving model defined
const reward = require('./middleware/token');
const cors = require('cors');

mongoose.connect("mongodb+srv://aadii1502:Am150205@cluster0.3b89bbx.mongodb.net/income-expenses-app?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/reward', reward);

app.get('/saving', async (req, res) => {
  try {
    const savings = await SavingModel.find();
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/Rsaving', async (req, res) => {
  try {
    const { amount } = req.body; // Corrected field name from savingsAmount to amount
    const newSaving = new SavingModel({ amount, date: new Date() }); // Using amount from the request body
    await newSaving.save();
    res.status(201).json(newSaving);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = 5550; // Fixed variable declaration
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
