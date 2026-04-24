import express from 'express';
import { mockUsers } from './db.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(mockUsers)
})

app.get('/health', (req, res) => {
    res.status(205.).send({ok: true})
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) res.status('400').send({ok: false, message: ':id parametr not found'});
    const result = mockUsers.find(e => e.id == id)
    if(!result) res.status(404).send({ok: false, message: 'user not found with this ID'});
    res.send(result).status(200)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})