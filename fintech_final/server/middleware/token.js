let userReward = 0;

const reward = async (req, res) => {
  const {
    user,
    amount
  } = req.body; // Handle the user and amount data here
  // ...
  userReward += amount;
  console.log(`User ${user} has been rewarded ${amount}`);
  res.send(`User ${user} has been rewarded ${amount} , user total reward is ${userReward}`);
}
module.exports = reward;
