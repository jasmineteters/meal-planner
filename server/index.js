const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'recipe_db',
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  const protein = req.body.protein;
  const fat = req.body.fat;
  const carbs = req.body.carbs;
  const calories = req.body.calories;

  db.query(
    'INSERT INTO nutrition (name, protein, fat, carbs, calories) VALUES (?, ?, ?, ?, ?)',
    [name, protein, fat, carbs, calories], (err, result) => {
      if (err){
        console.log(err)
      } else {
        res.send('Values Inserted')
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Yay, your server is running on port 3001');
});
