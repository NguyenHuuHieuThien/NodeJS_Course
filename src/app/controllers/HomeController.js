const Course = require("../models/Course");
const { multipleMongoose } = require("../../util/mongoose");

class HomeController {
  show(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", { courses: multipleMongoose(courses) })
      )
      .catch((error) => next(error));
  }
}

module.exports = new HomeController();
