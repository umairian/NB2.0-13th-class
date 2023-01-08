const Teachers = require("../models/teacher");

module.exports = {
  get: async (req, res) => {
    try {
      const teachers = await Teachers.findAll({
        // where: {
        //   gender: "Female",
        //   verified: true
        // },
        // attributes: ["name", "email", "gender"],
        order: [['id', 'DESC']],
        limit: 3
      });
      res.status(200).send({ teachers });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
  create: async (req, res) => {
    try {
      const { name, email, designation, gender } = req.body;

      if(!name || !email || !gender || !designation) {
        return res.status(400).send("Required fields cannot be empty");
      }
      const genderValues = await Teachers.rawAttributes.gender.values;
      if(!genderValues.includes(gender)) {
        return res.status(400).send("Invalid Gender value");
      }
      const teacher = await Teachers.create({
        name: name,
        email: email,
        gender,
        designation
      });
      res.status(200).send({
        teacher
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
}





// Node <=> MySQL2 driver <=> MySQL
// Node <=> ORM <=> MySQL2 driver <=> MySQL