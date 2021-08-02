var students = require('../Data') //fetch students data from Data.js

const welcomeMsg = (req, reply) => {
    reply.send("Welcome to the Student Database Management System!") //a message when opening localhost
}

const getData = (req, reply) => {   //function to fetch all the details
    reply.send(students)
}


const addStudent = (req, reply) => {        //function to add a student
    const {StudentName, StudentID, Subject1, Subject2, Subject3, Subject4, Subject5} = req.body
    const StudentData = {
        StudentName,
        StudentID,
        Subject1,
        Subject2,
        Subject3,
        Subject4,
        Subject5,
    }

    students = [...students, StudentData] 
    
    reply.send(StudentData)
    
}

const deleteStudent = (req, reply) => { //function to delete a student
    const { id } = req.params
    students = students.filter(student => student.StudentID !== id)

    reply.send({message: `Student ${id} has been removed`})
}

const updateStudent = (req, reply) => {     //function to update a student
    var data = req.body
    keys = []
    for(key in data){
        keys.push(key)
    }
    index = students.findIndex(student => student.StudentID == data[keys[0]])
    students[index][keys[1]] = data[keys[1]]
    reply.send(`The mark of Student ${data[keys[0]]} have been updated!`)    
}

module.exports = {
    getData,
    welcomeMsg,
    addStudent,
    deleteStudent,
    updateStudent,
}
