import express from 'express.js';
import todoItems from './todo-items.json';
 
const PORT = process.env.PORT || 3010;
const app = express();
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/backend/todo-items', (req, res) => {
 res.json({ data: todoItems });
});

app.listen(PORT, () => {
 console.log(`Server listening on ${PORT}`);
});