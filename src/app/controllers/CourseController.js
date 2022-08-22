const Course = require("../models/Course");
const { singleMongoose } = require("../../util/mongoose");

class CourseController {
  showDetail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/detail", {
          course: singleMongoose(course),
        })
      )
      .catch(next);
    // res.send(req.params.slug)
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => {});
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: singleMongoose(course),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[PATCH] /courses/hanlde-form-action
  handleFormAction(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.coursesId } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ message: "Action is valid" });
    }
  }
}

module.exports = new CourseController();
    Course.delete({ _id: { $in: req.body.coursesId } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is valid' });
        }
    }
}

module.exports = new CourseController();
