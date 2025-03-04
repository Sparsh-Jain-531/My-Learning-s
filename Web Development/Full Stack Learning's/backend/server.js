import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Why don’t skeletons fight each other?",
          content: "Because they don’t have the guts!"
        },
        {
          id: 2,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 3,
          title: "Why don’t eggs tell jokes?",
          content: "Because they might crack up!"
        },
        {
          id: 4,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 5,
          title: "Why did the golfer bring two pairs of pants?",
          content: "In case he got a hole in one!"
        }
      ];
    res.json(jokes);
})

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
})