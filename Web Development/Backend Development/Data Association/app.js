const express = require('express')
const connectdb = require('./config/db')
const User = require('./models/users')
const Post = require('./models/posts')
const app = express()
const port = 4000

connectdb()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/create', async(req, res) => {
    const user=await User.create({
        username:"sparsh",
        email:"sparsh@gmail.com",
        age:23,
    })
    res.send(user)
})

  app.get('/post/create', async(req, res) => {
    const post=await Post.create({
        postdata:"hey post!!!",
        user: "67b5bd4096555a40af46ac1d",
    })
    console.log(post._id)

    const user = await User.findOne({_id:"67b5bd4096555a40af46ac1d"})
    user.posts.push(post._id)
    await user.save();
    res.send({user,post})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})