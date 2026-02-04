const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.get('/view', (req, res) => {
  res.send('This is the view page')
})

app.get('/lms', (req, res) => {
  res.send(
    `<form method="POST" action="/submit">
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>`
  )
})

app.post('/submit', (req, res) => {
  res.send('Form submitted')
})

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})
