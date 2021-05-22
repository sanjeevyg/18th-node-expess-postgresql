const express = require('express')
const app = express()
const port = 3009
const connection = require('./knexfile').development
const database = require('knex')(connection)
// console.log(require('knex'))

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

app.patch('/students/:id', (request, response) => {
    const student = request.body
    // console.log(request.params)
    database('students')
        .where({id: request.params.id})
        .update(student)
        .returning('*')
        .then(student => {
            response.json({student})
        })
})

app.delete('/students/:id', (request, response) => {
    const id = request.params.id 
    database('students')
        .where({id: request.params.id})
        .delete()
        .then(() => response.send({message: `Student Deleted ${id}`}))
})


app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
})

