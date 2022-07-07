const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const booksRoute = require('./routes/booksRoute');

app.use(express.json());

app.use('/books', booksRoute);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));