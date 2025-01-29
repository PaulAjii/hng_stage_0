const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    email: "ajijolapaul@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/PaulAjii/hng_stage_0"
  });
});

const port = 3000;

app.listen(3000, () => {
  console.log(`Server is up and running on port ${port}!!!`)
});