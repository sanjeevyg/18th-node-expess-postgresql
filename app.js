const express = require('express')
const app = express()
const port = 3000
const connection = require('./knexfile').development
const database = require('knex')(connection)

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/students', (request, response) => {
    database('students')
        .then(students => response.send(students))
})

app.post('/students', (request, response) => {
    const student = request.body

    database('students')
        .insert(student)
        .returning('*')
        .then(student => response.send(student))
})


app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})

