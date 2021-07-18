const express = require('express');

// Routes
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const cinemaRouter = require('./routes/cinema');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);
app.use(cinemaRouter);

app.get('/api/test', (req, res) => res.send('BookMyShow Clone Backend Apis'))

app.listen(port, () => console.log(`app is running in PORT: ${port}`));
