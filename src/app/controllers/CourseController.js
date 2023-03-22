const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {
   //[GET] /course/:slug
    show(req, res,next) {
        Course.findOne({slug: req.params.slug})
        .then(course => 
            res.render('courses/show',{course: mongooseToObject(course)})
        )
        .catch(next);
        
    }
     //[GET] /course/create
     create(req, res,next) {
       res.render('courses/create');
    }
         //[POST] /course/store
         store(req, res,next) {
            const formData = req.body;
            formData.image = `https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/279458354_756734085504536_3300460239667583070_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=ZdZaCNTizxAAX84XyKV&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCRUsbVEgWYf4FXe49wKGnAO3CH8zPjlTrRGsF_q1LSgA&oe=641C738C`;
            const course = new Course(formData);
            course.save()
            .then(() => res.redirect('/'))
            .catch(err =>{});
    }
         //[GET] /course/:id/edit
         edit(req, res,next) {
            Course.findById(req.params.id)
            .then(course =>res.render('courses/edit',
            {course: mongooseToObject(course)
         }))
            .catch(next);
         }
}
module.exports = new CourseController();
