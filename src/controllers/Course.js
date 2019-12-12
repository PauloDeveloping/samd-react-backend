const Course = require('../models/Course')

module.exports = {

    async index(req, res) {
        if (req.query.course_name == null || req.query.course_name == '') {
            const courses = await Course.findAll();

            return res.json(courses);
        } else {
            const courses = await Course.findAll({
                where: {
                    course_name: req.query.course_name
                }
            });

            return res.json(courses);
        }
    },

    async store(req, res) {
        const courseInsert = req.body

        let course = await Course.findOne(courseInsert)

        if (!course) {
            course = await Course.create(courseInsert)
        }

        return res.json(course)
    },

    async show(req, res) {

    },

    async update(req, res) {

    },

    async destroy(req, res) {

    },

    async restore(req, res) {

    }
}