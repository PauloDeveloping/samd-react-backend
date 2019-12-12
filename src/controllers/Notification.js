const Notification = require('../models/Notification')

module.exports = {
    //GET FUNCTION 

    async index(req, res) {
        if (req.query.notification_title == null || req.query.notification_title == '') {
            const notifications = await Notification.findAll()

            return res.json(notifications)
        } else {
            const notifications = await Notification.findAll({
                where: {
                    notification_title: req.query.notification_title
                }
            })

            return res.json(notifications)
        }
    },

    //POST FUNCTION
    async store(req, res) {
        const notifyInsert = req.body

        let notification = await Notification.findOne(notifyInsert)

        if (!notification) {
            notification = await Notification.create(notifyInsert)
        }

        return res.json(notification)
    }
}