const Students = require("../models/student");

module.exports = {
  getAllStudents: async (req, res) => {
    try {
      const students = await Students.findAll({
        // where: {
        //   gender: "Female",
        //   verified: true
        // },
        // attributes: ["name", "email", "gender"],
        order: [['id', 'DESC']],
        limit: 1
      });
      res.status(200).send({ students: students });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  createStudent: async (req, res) => {
    try {
      const { name, email, address, phone_number, gender } = req.body;

      if(!name || !email || !gender) {
        return res.status(400).send("Required fields cannot be empty");
      }
      const genderValues = await Students.rawAttributes.gender.values;
      if(!genderValues.includes(gender)) {
        return res.status(400).send("Invalid Gender value");
      }
      const student = await Students.create({
        name: name,
        email: email,
        address: address,
        phone_number: phone_number,
        gender
      });
      res.status(200).send({
        student: student
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  getStudent: async (req, res) => {
    try {
      const studentId = Number(req.params.studentId);
      if(isNaN(studentId)) {
        return res.status(400).send("Invalid student id");
      }
      const student = await Students.findByPk(studentId);
      res.status(200).send({ student: student });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  update: async (req, res) => {
    try {
      const {name, phone_number} = req.body;
      const studentId = Number(req.params.studentId);
      if(isNaN(studentId)) {
        return res.status(400).send("Invalid student id");
      }
      if(!name) {
        return res.status(400).send("Name is required!")
      }

      const student = await Students.findByPk(studentId);
      if(!student) {
        return res.status(400).send("Invalid student ID")
      }
      await Students.update({
        name: name,
        phone_number: phone_number
      }, {
        where: {
          id: studentId
        }
      });
      res.status(200).send("Student updated successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  delete: async (req, res) => {
    try {
      const studentId = Number(req.params.studentId);
      if(isNaN(studentId)) {
        return res.status(400).send("Invalid student id");
      }

      const student = await Students.findByPk(studentId);
      if(!student) {
        return res.status(400).send("Invalid student ID")
      }
      await Students.destroy({
        where: {
          id: studentId
        }
      })
      res.status(200).send("Student deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
}





// Node <=> MySQL2 driver <=> MySQL
// Node <=> ORM <=> MySQL2 driver <=> MySQL