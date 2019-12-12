const PresenceListModel = require('../models/PresenceList')

module.exports = {

    async index(req, res) {
        if(req.query.prsclist_id == null || req.query.prsclist_id == ''){
            const presenceList = await PresenceList.findAll();

            return res.json(presenceList);
        }else{
            const presenceList = await PresenceList.findAll({
                where: {
                    prsclist_id: req.query.prsclist_id
                }
            });

            return res.json(presenceList)
        }
    },

    async show(req, res) {
        
    },

    async store(req, res) {
        const presenceListInsert = req.body

        let presenceList = await PresenceList.findOne(presenceListInsert)

        if(!presenceList){
            presenceList = await PresenceList.create(presenceListInsert)
        }
        return res.json(presenceList)
    },

    async update(req, res) {
        const presenceListUpdated = await PresenceList.findOne(
            {prsclist_id: req.query.prsclist_id},
            { where: {
                prsclist_id: req.params.id
            }}
        ); 
        return res.json(presenceListUpdated)
    },

    async destroy(req, res) {
        const presenceListDeleted = await PresenceList.findOne({
            where: {
                prsclist_id: req.body.prsclist_id
            }
        })
        return res.json(presenceListDeleted)
    },

    async restore(req, res) {
        
    }

}